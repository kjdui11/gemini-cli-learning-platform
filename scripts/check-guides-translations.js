const fs = require('fs');

const langs = ['de', 'es', 'fr', 'hi', 'ja', 'ko', 'ru'];
const guidesKeys = [
  'guidesFileOperations',
  'guidesAdvancedConfig', 
  'guidesIntegration',
  'guidesCodeRefactoring',
  'guidesDocumentation',
  'guidesCodeReview'
];

console.log('Checking guides translations status...\n');

langs.forEach(lang => {
  console.log(`=== ${lang.toUpperCase()} ===`);
  try {
    const data = JSON.parse(fs.readFileSync(`src/messages/${lang}.json`, 'utf8'));
    
    guidesKeys.forEach(key => {
      const exists = !!data[key];
      const hasOperations = exists && !!data[key].operations;
      const hasTypes = exists && !!data[key].types;
      const hasConfigSections = exists && !!data[key].configSections;
      const hasWorkflow = exists && !!data[key].workflow;
      const hasBestPractices = exists && !!data[key].bestPractices;

      const hasData = hasOperations || hasTypes || hasConfigSections || hasWorkflow;
      console.log(`  ${key}: ${exists ? '✓' : '✗'} ${hasData ? '(has data)' : '(basic only)'}`);
    });
  } catch (error) {
    console.log(`  Error reading ${lang}.json:`, error.message);
  }
  console.log('');
});
