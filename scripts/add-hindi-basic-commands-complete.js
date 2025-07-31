const fs = require('fs');
const path = require('path');

// Complete Hindi basic commands translation with correct structure
const hindiBasicCommands = {
  "hero": {
    "title": "बुनियादी कमांड संचालन",
    "subtitle": "Gemini CLI के मुख्य कमांड और संचालन सिंटैक्स में महारत हासिल करें",
    "comprehensive": "व्यापक कवरेज",
    "practical": "व्यावहारिक उदाहरण"
  },
  "overview": {
    "title": "कमांड अवलोकन",
    "description": "Gemini CLI तीन मुख्य प्रकार के कमांड प्रदान करता है: CLI को नियंत्रित करने के लिए स्लैश कमांड, फ़ाइल संचालन के लिए @ कमांड, और सिस्टम कमांड निष्पादित करने के लिए ! कमांड।"
  },
  "categories": {
    "slash": {
      "title": "स्लैश कमांड (/)",
      "description": "CLI को नियंत्रित करने के लिए मेटा-स्तरीय कमांड",
      "commands": {
        "help": "सभी उपलब्ध कमांड और उनका उपयोग दिखाएं",
        "clear": "वर्तमान बातचीत इतिहास साफ़ करें",
        "quit": "Gemini CLI से बाहर निकलें",
        "theme": "रंग थीम बदलें (हल्का/गहरा/ऑटो)"
      }
    },
    "at": {
      "title": "@ कमांड",
      "description": "फ़ाइल सामग्री को पढ़ने और संपादित करने के लिए उपयोग",
      "commands": {
        "file": "निर्दिष्ट फ़ाइल सामग्री को बातचीत में पढ़ें",
        "folder": "फ़ोल्डर में फ़ाइल सूची पढ़ें",
        "wildcard": "कई फ़ाइलों से मेल खाने के लिए वाइल्डकार्ड का उपयोग करें"
      }
    },
    "exclamation": {
      "title": "! कमांड",
      "description": "सिस्टम कमांड निष्पादित करें और परिणाम प्रदर्शित करें",
      "commands": {
        "system": "कोई भी सिस्टम कमांड निष्पादित करें",
        "git": "Git कमांड निष्पादित करें",
        "npm": "NPM कमांड निष्पादित करें"
      }
    }
  },
  "examples": {
    "title": "व्यावहारिक उदाहरण",
    "description": "वास्तविक परिदृश्यों में कमांड का उपयोग कैसे करें",
    "scenarios": [
      {
        "title": "कोड समीक्षा",
        "description": "फ़ाइल पढ़ें और सुधार सुझाएं",
        "command": "@src/components/Button.tsx इस कंपोनेंट की समीक्षा करें और सुधार सुझाएं"
      },
      {
        "title": "डिबगिंग सहायता",
        "description": "त्रुटि लॉग का विश्लेषण करें",
        "command": "@logs/error.log इस त्रुटि लॉग का विश्लेषण करें और संभावित समाधान सुझाएं"
      },
      {
        "title": "दस्तावेज़ीकरण",
        "description": "कोड के लिए दस्तावेज़ीकरण उत्पन्न करें",
        "command": "@src/utils/ इन उपयोगिता फ़ंक्शन के लिए README दस्तावेज़ीकरण बनाएं"
      }
    ]
  },
  "tips": {
    "title": "उपयोग युक्तियां",
    "info": {
      "title": "कमांड संयोजन",
      "content": "आप कार्य दक्षता में सुधार के लिए एक ही बातचीत में कई कमांड प्रकारों को जोड़ सकते हैं।"
    },
    "warning": {
      "title": "सुरक्षा अनुस्मारक",
      "content": "! कमांड का उपयोग करते समय सावधान रहें, सुनिश्चित करें कि आप समझते हैं कि कमांड क्या करता है, खतरनाक संचालन से बचें।"
    },
    "success": {
      "title": "सर्वोत्तम प्रथाएं",
      "content": "सभी उपलब्ध कमांड देखने के लिए पहले /help का उपयोग करने की सिफारिश की जाती है, फिर धीरे-धीरे विभिन्न कमांड के उपयोग सीखें।"
    }
  },
  "nextSteps": {
    "title": "अगले कदम",
    "description": "अब जब आपने बुनियादी कमांड में महारत हासिल कर ली है, तो आप अधिक उन्नत सुविधाएं सीखना जारी रख सकते हैं:",
    "fileOperations": "फ़ाइल संचालन विवरण",
    "advancedConfig": "उन्नत कॉन्फ़िगरेशन",
    "backToGuides": "गाइड पर वापस जाएं"
  }
};

// Function to verify and update Hindi basic commands
function updateHindiBasicCommands() {
  const filePath = path.join(__dirname, '..', 'src', 'messages', 'hi.json');
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Update the guidesBasicCommands section
    data.guidesBasicCommands = hindiBasicCommands;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Updated Hindi basic commands with complete structure');
    
    // Verify the structure
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const basicCommands = newData.guidesBasicCommands;
    
    console.log('📋 Verification:');
    console.log(`   - Hero title: "${basicCommands?.hero?.title || 'N/A'}"`);
    console.log(`   - Categories: ${Object.keys(basicCommands?.categories || {}).length}`);
    console.log(`   - Category names: ${Object.keys(basicCommands?.categories || {}).join(', ')}`);
    console.log(`   - Examples: ${basicCommands?.examples?.scenarios?.length || 0}`);
    console.log(`   - Tips structure: ${Object.keys(basicCommands?.tips || {}).filter(k => k !== 'title').join(', ')}`);
    
    // Check specific command structures
    const slashCommands = basicCommands?.categories?.slash?.commands;
    const atCommands = basicCommands?.categories?.at?.commands;
    const exclamationCommands = basicCommands?.categories?.exclamation?.commands;
    
    console.log(`   - Slash commands: ${Object.keys(slashCommands || {}).length}`);
    console.log(`   - @ commands: ${Object.keys(atCommands || {}).length}`);
    console.log(`   - ! commands: ${Object.keys(exclamationCommands || {}).length}`);
    
    console.log('\n🎯 Hindi basic commands structure is now complete and correct!');
    
  } catch (error) {
    console.error('❌ Error updating Hindi basic commands:', error.message);
  }
}

// Run the update
console.log('🔧 Updating Hindi basic commands structure...\n');
updateHindiBasicCommands();
