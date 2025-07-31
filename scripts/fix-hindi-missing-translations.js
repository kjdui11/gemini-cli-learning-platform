const fs = require('fs');
const path = require('path');

// Complete Hindi translations for missing sections
const hindiMissingTranslations = {
  "guidesBasicCommands": {
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
        "title": "स्लैश कमांड",
        "description": "CLI व्यवहार को नियंत्रित करने के लिए",
        "commands": [
          {
            "command": "/help",
            "description": "सभी उपलब्ध कमांड और उनके उपयोग दिखाएं"
          },
          {
            "command": "/clear",
            "description": "वर्तमान बातचीत इतिहास साफ़ करें"
          },
          {
            "command": "/quit",
            "description": "Gemini CLI से बाहर निकलें"
          },
          {
            "command": "/theme",
            "description": "रंग थीम बदलें (light/dark/auto)"
          }
        ]
      },
      "file": {
        "title": "फ़ाइल कमांड",
        "description": "फ़ाइल सामग्री के साथ बातचीत करने के लिए",
        "commands": [
          {
            "command": "@filename.ext",
            "description": "फ़ाइल सामग्री को बातचीत में शामिल करें"
          },
          {
            "command": "@folder/",
            "description": "फ़ोल्डर संरचना और सामग्री का विश्लेषण करें"
          },
          {
            "command": "@**/*.js",
            "description": "पैटर्न मिलान का उपयोग करके कई फ़ाइलें शामिल करें"
          }
        ]
      },
      "system": {
        "title": "सिस्टम कमांड",
        "description": "सिस्टम कमांड निष्पादित करने के लिए",
        "commands": [
          {
            "command": "!ls -la",
            "description": "वर्तमान निर्देशिका की सामग्री सूचीबद्ध करें"
          },
          {
            "command": "!git status",
            "description": "Git रिपॉजिटरी स्थिति जांचें"
          },
          {
            "command": "!npm test",
            "description": "प्रोजेक्ट परीक्षण चलाएं"
          }
        ]
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
      "items": [
        {
          "title": "कमांड संयोजन",
          "description": "एक ही संदेश में कई कमांड का उपयोग करें"
        },
        {
          "title": "संदर्भ बनाए रखना",
          "description": "फ़ाइल सामग्री बातचीत संदर्भ में बनी रहती है"
        },
        {
          "title": "त्वरित पहुंच",
          "description": "Tab कुंजी का उपयोग करके फ़ाइल नाम पूरा करें"
        }
      ]
    },
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अब जब आपने बुनियादी कमांड में महारत हासिल कर ली है, तो आप अधिक उन्नत सुविधाएं सीखना जारी रख सकते हैं:",
      "fileOperations": "फ़ाइल संचालन विवरण",
      "advancedConfig": "उन्नत कॉन्फ़िगरेशन",
      "backToGuides": "गाइड पर वापस जाएं"
    }
  },
  "guidesAdvancedConfig": {
    "hero": {
      "title": "उन्नत कॉन्फ़िगरेशन विकल्प",
      "subtitle": "Gemini CLI के उन्नत कॉन्फ़िगरेशन और अनुकूलन विकल्पों में गहराई से जाएं",
      "advanced": "उन्नत",
      "readingTime": "30 मिनट पढ़ना"
    },
    "overview": {
      "title": "कॉन्फ़िगरेशन अवलोकन",
      "description": "TOML कॉन्फ़िग फ़ाइलें, पर्यावरण चर, कस्टम सेटिंग्स, और अधिक सहित Gemini CLI के उन्नत कॉन्फ़िगरेशन विकल्पों में महारत हासिल करें।"
    },
    "configTypes": {
      "title": "कॉन्फ़िगरेशन प्रकार",
      "description": "विभिन्न कॉन्फ़िगरेशन विधियों के बारे में जानें",
      "types": [
        {
          "title": "TOML फ़ाइलें",
          "description": "संरचित कॉन्फ़िगरेशन फ़ाइलें",
          "example": "[model]\nname = \"gemini-pro\"\ntemperature = 0.7\n\n[ui]\ntheme = \"dark\"\nshow_tokens = true"
        },
        {
          "title": "पर्यावरण चर",
          "description": "सिस्टम-स्तरीय कॉन्फ़िगरेशन",
          "example": "export GEMINI_API_KEY=\"your-api-key\"\nexport GEMINI_MODEL=\"gemini-pro\"\nexport GEMINI_THEME=\"dark\""
        },
        {
          "title": "कमांड लाइन फ्लैग",
          "description": "रन-टाइम कॉन्फ़िगरेशन",
          "example": "gemini --model gemini-pro --temperature 0.8 --theme light"
        }
      ]
    },
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अब जब आपने उन्नत कॉन्फ़िगरेशन तकनीकों में महारत हासिल कर ली है, तो आप अन्य व्यावहारिक सुविधाएं सीखना जारी रख सकते हैं:",
      "fileOperations": "फ़ाइल संचालन",
      "integration": "सिस्टम एकीकरण",
      "backToGuides": "गाइड पर वापस जाएं"
    }
  },
  "guidesIntegration": {
    "title": "अन्य उपकरणों के साथ एकीकरण",
    "subtitle": "अपने विकास वर्कफ़्लो में Gemini CLI को एकीकृत करें",
    "description": "उत्पादकता बढ़ाने के लिए अपने मौजूदा विकास टूलचेन, IDE, और स्वचालन प्रक्रियाओं में Gemini CLI को निर्बाध रूप से एकीकृत करना सीखें।",
    "overview": {
      "title": "एकीकरण अवलोकन",
      "description": "Gemini CLI कई एकीकरण विधियां प्रदान करता है, जो आपको किसी भी विकास वातावरण में AI की शक्तिशाली क्षमताओं का पूरा लाभ उठाने की अनुमति देता है। चाहे वह IDE प्लगइन्स हों, CI/CD पाइपलाइन हों, या स्वचालन स्क्रिप्ट हों, एकीकरण सहज है।"
    },
    "typesTitle": "एकीकरण प्रकार",
    "typesDescription": "अपने वर्कफ़्लो के लिए सबसे उपयुक्त एकीकरण विधि चुनें",
    "types": [
      {
        "title": "IDE एकीकरण",
        "description": "लोकप्रिय कोड संपादकों के साथ एकीकरण",
        "tools": ["VS Code", "IntelliJ IDEA", "Vim/Neovim", "Emacs"],
        "benefits": [
          "इन-एडिटर AI सहायता",
          "कोड पूर्णता और सुझाव",
          "रीयल-टाइम कोड समीक्षा",
          "एकीकृत टर्मिनल पहुंच"
        ]
      },
      {
        "title": "CI/CD पाइपलाइन",
        "description": "निरंतर एकीकरण और तैनाती में AI शामिल करें",
        "tools": ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"],
        "benefits": [
          "स्वचालित कोड समीक्षा",
          "परीक्षण उत्पादन",
          "दस्तावेज़ीकरण अपडेट",
          "गुणवत्ता गेट्स"
        ]
      },
      {
        "title": "कमांड लाइन स्क्रिप्ट",
        "description": "कस्टम स्वचालन और वर्कफ़्लो",
        "tools": ["Bash", "PowerShell", "Python", "Node.js"],
        "benefits": [
          "कस्टम वर्कफ़्लो",
          "बैच प्रसंस्करण",
          "शेड्यूल्ड कार्य",
          "API एकीकरण"
        ]
      }
    ],
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अब जब आपने एकीकरण तकनीकों में महारत हासिल कर ली है, तो आप अन्य उन्नत सुविधाएं सीखना जारी रख सकते हैं:",
      "advancedConfig": "उन्नत कॉन्फ़िगरेशन",
      "codeRefactoring": "कोड रिफैक्टरिंग"
    }
  },
  "guidesMcpProtocol": {
    "hero": {
      "title": "MCP प्रोटोकॉल उपयोग",
      "subtitle": "Gemini CLI कार्यक्षमता का विस्तार करने के लिए Model Context Protocol में महारत हासिल करें",
      "advanced": "उन्नत सुविधाएं",
      "extensible": "विस्तार योग्य"
    },
    "overview": {
      "title": "प्रोटोकॉल अवलोकन",
      "description": "Model Context Protocol (MCP) एक खुला मानक है जो AI अनुप्रयोगों को बाहरी डेटा स्रोतों और उपकरणों के साथ सुरक्षित और नियंत्रित तरीके से एकीकृत करने की अनुमति देता है।"
    },
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अब जब आप MCP प्रोटोकॉल को समझ गए हैं, तो आप अधिक उन्नत कॉन्फ़िगरेशन और एकीकरण विधियां सीखना जारी रख सकते हैं:",
      "advancedConfig": "उन्नत कॉन्फ़िगरेशन",
      "integration": "एकीकरण गाइड",
      "backToGuides": "गाइड पर वापस जाएं"
    }
  }
};

// Function to fix Hindi missing translations
function fixHindiMissingTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'messages', 'hi.json');
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add the missing translations
    Object.assign(data, hindiMissingTranslations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Fixed Hindi missing translations');
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(`   - Basic Commands title: "${newData.guidesBasicCommands?.hero?.title || 'N/A'}"`);
    console.log(`   - Advanced Config title: "${newData.guidesAdvancedConfig?.hero?.title || 'N/A'}"`);
    console.log(`   - Command categories: ${Object.keys(newData.guidesBasicCommands?.categories || {}).length}`);
    
  } catch (error) {
    console.error('❌ Error fixing Hindi missing translations:', error.message);
  }
}

// Apply the fix
console.log('🔧 Fixing Hindi missing translations...\n');
fixHindiMissingTranslations();
console.log('\n✅ Hindi missing translations fixed!');
console.log('🎯 Hindi users now have complete translations for basic commands and advanced config.');
