const fs = require('fs');
const path = require('path');

// List of all supported languages
const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: 'Chinese' },
  { code: 'hi', name: 'Hindi' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'es', name: 'Spanish' },
  { code: 'ru', name: 'Russian' }
];

// Expected structure for basic commands
const expectedStructure = {
  hero: ['title', 'subtitle', 'comprehensive', 'practical'],
  overview: ['title', 'description'],
  categories: {
    slash: {
      required: ['title', 'description', 'commands'],
      commands: ['help', 'clear', 'quit', 'theme']
    },
    at: {
      required: ['title', 'description', 'commands'],
      commands: ['file', 'folder', 'wildcard']
    },
    exclamation: {
      required: ['title', 'description', 'commands'],
      commands: ['system', 'git', 'npm']
    }
  },
  examples: ['title', 'description', 'scenarios'],
  tips: {
    required: ['title', 'info', 'warning', 'success'],
    tipStructure: ['title', 'content']
  },
  nextSteps: ['title', 'description', 'fileOperations', 'advancedConfig', 'backToGuides']
};

// Function to check structure for a language
function checkLanguageStructure(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${langName}: File not found`);
      return false;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const basicCommands = data.guidesBasicCommands;
    
    if (!basicCommands) {
      console.log(`❌ ${langName}: guidesBasicCommands section missing`);
      return false;
    }

    let isValid = true;
    const issues = [];

    // Check hero section
    expectedStructure.hero.forEach(field => {
      if (!basicCommands.hero?.[field]) {
        issues.push(`Missing hero.${field}`);
        isValid = false;
      }
    });

    // Check overview section
    expectedStructure.overview.forEach(field => {
      if (!basicCommands.overview?.[field]) {
        issues.push(`Missing overview.${field}`);
        isValid = false;
      }
    });

    // Check categories
    Object.keys(expectedStructure.categories).forEach(categoryKey => {
      const category = expectedStructure.categories[categoryKey];
      const actualCategory = basicCommands.categories?.[categoryKey];
      
      if (!actualCategory) {
        issues.push(`Missing categories.${categoryKey}`);
        isValid = false;
        return;
      }

      // Check required fields
      category.required.forEach(field => {
        if (!actualCategory[field]) {
          issues.push(`Missing categories.${categoryKey}.${field}`);
          isValid = false;
        }
      });

      // Check commands structure
      if (actualCategory.commands) {
        category.commands.forEach(cmd => {
          if (!actualCategory.commands[cmd]) {
            issues.push(`Missing categories.${categoryKey}.commands.${cmd}`);
            isValid = false;
          }
        });
      }
    });

    // Check examples
    expectedStructure.examples.forEach(field => {
      if (!basicCommands.examples?.[field]) {
        issues.push(`Missing examples.${field}`);
        isValid = false;
      }
    });

    // Check tips structure
    expectedStructure.tips.required.forEach(field => {
      if (!basicCommands.tips?.[field]) {
        issues.push(`Missing tips.${field}`);
        isValid = false;
      }
    });

    // Check tip content structure
    ['info', 'warning', 'success'].forEach(tipType => {
      if (basicCommands.tips?.[tipType]) {
        expectedStructure.tips.tipStructure.forEach(field => {
          if (!basicCommands.tips[tipType][field]) {
            issues.push(`Missing tips.${tipType}.${field}`);
            isValid = false;
          }
        });
      }
    });

    // Check nextSteps
    expectedStructure.nextSteps.forEach(field => {
      if (!basicCommands.nextSteps?.[field]) {
        issues.push(`Missing nextSteps.${field}`);
        isValid = false;
      }
    });

    // Report results
    if (isValid) {
      console.log(`✅ ${langName}: Structure is complete and correct`);
      
      // Show summary
      const categories = Object.keys(basicCommands.categories || {});
      const examples = basicCommands.examples?.scenarios?.length || 0;
      const tips = Object.keys(basicCommands.tips || {}).filter(k => k !== 'title').length;
      
      console.log(`   📊 Categories: ${categories.length} (${categories.join(', ')})`);
      console.log(`   📝 Examples: ${examples} scenarios`);
      console.log(`   💡 Tips: ${tips} types`);
    } else {
      console.log(`❌ ${langName}: Structure issues found`);
      issues.forEach(issue => console.log(`   - ${issue}`));
    }

    return isValid;

  } catch (error) {
    console.log(`❌ ${langName}: Error reading file - ${error.message}`);
    return false;
  }
}

// Main verification function
function verifyAllLanguages() {
  console.log('🔍 Verifying basic commands structure for all languages...\n');
  
  let validCount = 0;
  let totalCount = languages.length;
  
  languages.forEach(lang => {
    console.log(`Checking ${lang.name} (${lang.code})...`);
    const isValid = checkLanguageStructure(lang.code, lang.name);
    if (isValid) validCount++;
    console.log('');
  });
  
  console.log('📊 Summary:');
  console.log(`✅ Valid: ${validCount}/${totalCount} languages`);
  console.log(`❌ Issues: ${totalCount - validCount}/${totalCount} languages`);
  
  if (validCount === totalCount) {
    console.log('\n🎉 All languages have correct basic commands structure!');
  } else {
    console.log('\n⚠️  Some languages need structure fixes.');
  }
}

// Run verification
verifyAllLanguages();
