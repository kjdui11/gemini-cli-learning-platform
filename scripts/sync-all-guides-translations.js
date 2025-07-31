const fs = require('fs');
const path = require('path');

// Languages to sync (excluding zh and en which are the source)
const targetLanguages = ['de', 'fr', 'ja', 'ko', 'es', 'hi', 'ru'];

// Guides sections to sync
const guidesKeys = [
  'guidesFileOperations',
  'guidesAdvancedConfig', 
  'guidesIntegration',
  'guidesCodeRefactoring',
  'guidesDocumentation',
  'guidesCodeReview'
];

console.log('🔄 Syncing all guides translations...\n');

// Load English template (most complete)
const enPath = path.join(__dirname, '..', 'src', 'messages', 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

targetLanguages.forEach(langCode => {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let updated = false;
    
    guidesKeys.forEach(guideKey => {
      if (enData[guideKey]) {
        // If the guide doesn't exist or is incomplete, use English template
        if (!data[guideKey] || !data[guideKey].operations && !data[guideKey].types) {
          console.log(`  📝 Syncing ${guideKey} for ${langCode}`);
          data[guideKey] = enData[guideKey];
          updated = true;
        } else {
          // Check for missing keys and add them from English
          const enKeys = Object.keys(enData[guideKey]);
          const currentKeys = Object.keys(data[guideKey]);
          const missingKeys = enKeys.filter(key => !currentKeys.includes(key));
          
          if (missingKeys.length > 0) {
            console.log(`  🔧 Adding missing keys to ${guideKey} for ${langCode}: ${missingKeys.join(', ')}`);
            missingKeys.forEach(key => {
              data[guideKey][key] = enData[guideKey][key];
            });
            updated = true;
          }
        }
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`✅ Updated ${langCode}.json\n`);
    } else {
      console.log(`✓ ${langCode}.json is already complete\n`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${langCode}.json:`, error.message);
  }
});

console.log('🎉 All guides translations synced!');
console.log('📋 Summary: All languages now have complete guides content based on English template.');
console.log('💡 Tip: For production, consider professional translation of the English content.');
