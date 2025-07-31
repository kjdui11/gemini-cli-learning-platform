const fs = require('fs');
const path = require('path');

// Complete integration translations for Hindi and French
const integrationTranslations = {
  hi: {
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
        "icon": "ide",
        "title": "IDE एकीकरण",
        "description": "अपने पसंदीदा कोड एडिटर में सीधे Gemini CLI का उपयोग करें",
        "features": [
          { "name": "VS Code एक्सटेंशन" },
          { "name": "IntelliJ प्लगइन" },
          { "name": "Vim/Neovim एकीकरण" },
          { "name": "Sublime Text समर्थन" }
        ]
      },
      {
        "icon": "ci",
        "title": "CI/CD एकीकरण",
        "description": "निरंतर एकीकरण और तैनाती पाइपलाइन में AI सहायता का उपयोग करें",
        "features": [
          { "name": "GitHub Actions" },
          { "name": "GitLab CI" },
          { "name": "Jenkins प्लगइन" },
          { "name": "Azure DevOps" }
        ]
      },
      {
        "icon": "automation",
        "title": "स्वचालन स्क्रिप्ट",
        "description": "स्क्रिप्ट और उपकरणों के माध्यम से अपने विकास कार्यों को स्वचालित करें",
        "features": [
          { "name": "Shell स्क्रिप्ट एकीकरण" },
          { "name": "Python स्वचालन" },
          { "name": "Node.js उपकरण" },
          { "name": "Makefile समर्थन" }
        ]
      },
      {
        "icon": "deployment",
        "title": "तैनाती एकीकरण",
        "description": "तैनाती के दौरान कोड विश्लेषण और अनुकूलन के लिए AI का लाभ उठाएं",
        "features": [
          { "name": "Docker एकीकरण" },
          { "name": "Kubernetes समर्थन" },
          { "name": "क्लाउड प्लेटफॉर्म एकीकरण" },
          { "name": "निगरानी और लॉगिंग" }
        ]
      }
    ],
    "workflow": {
      "title": "एकीकरण वर्कफ़्लो",
      "description": "अपनी विकास प्रक्रिया में Gemini CLI को एकीकृत करने के लिए इन चरणों का पालन करें",
      "steps": [
        {
          "title": "वातावरण सेटअप",
          "description": "सुनिश्चित करें कि आपके विकास वातावरण में Gemini CLI सही तरीके से कॉन्फ़िगर है",
          "example": "# इंस्टॉलेशन सत्यापित करें\ngemini --version\n\n# API कुंजी कॉन्फ़िगर करें\ngemini config set api-key YOUR_API_KEY"
        },
        {
          "title": "एकीकरण विधि चुनें",
          "description": "अपनी आवश्यकताओं के आधार पर सबसे उपयुक्त एकीकरण विधि का चयन करें",
          "example": "# IDE एकीकरण उदाहरण\n# VS Code एक्सटेंशन इंस्टॉल करें\ncode --install-extension gemini-cli\n\n# या कमांड लाइन उपनाम कॉन्फ़िगर करें\nalias ai='gemini chat'"
        },
        {
          "title": "वर्कफ़्लो कॉन्फ़िगर करें",
          "description": "स्वचालन स्क्रिप्ट और वर्कफ़्लो सेट करें",
          "example": "# GitHub Actions उदाहरण\nname: AI Code Review\non: [pull_request]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: AI Review\n        run: gemini review --files changed"
        },
        {
          "title": "परीक्षण और अनुकूलन",
          "description": "एकीकरण प्रभावशीलता का परीक्षण करें और आवश्यकतानुसार समायोजित करें",
          "example": "# एकीकरण परीक्षण\ngemini test-integration\n\n# उपयोग आंकड़े देखें\ngemini stats --integration"
        }
      ]
    },
    "toolsTitle": "लोकप्रिय उपकरण एकीकरण",
    "toolsDescription": "लोकप्रिय विकास उपकरणों के साथ एकीकरण करना सीखें",
    "tools": [
      {
        "name": "VS Code",
        "description": "Visual Studio Code में Gemini CLI का उपयोग करें",
        "steps": [
          { "text": "Gemini CLI एक्सटेंशन इंस्टॉल करें" },
          { "text": "API कुंजी कॉन्फ़िगर करें" },
          { "text": "AI सुविधाओं को आमंत्रित करने के लिए कीबोर्ड शॉर्टकट का उपयोग करें" },
          { "text": "कमांड और सेटिंग्स को अनुकूलित करें" }
        ]
      },
      {
        "name": "Git Hooks",
        "description": "Git वर्कफ़्लो में AI जांच एकीकृत करें",
        "steps": [
          { "text": "pre-commit हुक बनाएं" },
          { "text": "कोड गुणवत्ता जांच कॉन्फ़िगर करें" },
          { "text": "स्वचालित परीक्षण सेट करें" },
          { "text": "कमिट संदेश जेनरेशन एकीकृत करें" }
        ]
      },
      {
        "name": "Docker",
        "description": "कंटेनराइज़्ड वातावरण में Gemini CLI का उपयोग करें",
        "steps": [
          { "text": "Gemini CLI के साथ इमेज बनाएं" },
          { "text": "पर्यावरण चर कॉन्फ़िगर करें" },
          { "text": "वॉल्यूम माउंट सेट करें" },
          { "text": "कंटेनर प्रदर्शन अनुकूलित करें" }
        ]
      }
    ],
    "bestPracticesTitle": "एकीकरण सर्वोत्तम प्रथाएं",
    "bestPracticesDescription": "इष्टतम एकीकरण अनुभव के लिए इन सर्वोत्तम प्रथाओं का पालन करें",
    "bestPractices": [
      {
        "title": "सुरक्षा कॉन्फ़िगरेशन",
        "description": "पर्यावरण चर या कुंजी प्रबंधन सेवाओं का उपयोग करके API कुंजी और संवेदनशील जानकारी का सुरक्षित भंडारण सुनिश्चित करें।"
      },
      {
        "title": "प्रदर्शन अनुकूलन",
        "description": "विकास अनुभव को प्रभावित कर सकने वाली अत्यधिक API कॉल से बचने के लिए कैशिंग और समानांतरता सेटिंग्स को सही तरीके से कॉन्फ़िगर करें।"
      },
      {
        "title": "त्रुटि हैंडलिंग",
        "description": "यह सुनिश्चित करने के लिए व्यापक त्रुटि हैंडलिंग तंत्र लागू करें कि एकीकरण विफलताएं सामान्य विकास वर्कफ़्लो को प्रभावित न करें।"
      },
      {
        "title": "टीम सहयोग",
        "description": "टीम के लिए एकीकृत एकीकरण मानक और कॉन्फ़िगरेशन स्थापित करें ताकि सभी सदस्य इसका सही उपयोग कर सकें।"
      }
    ],
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अधिक उन्नत सुविधाओं और सर्वोत्तम प्रथाओं को सीखना जारी रखें",
      "advancedConfig": "उन्नत कॉन्फ़िगरेशन",
      "codeRefactoring": "कोड रिफैक्टरिंग"
    }
  }
};

// Function to apply integration translations
function applyIntegrationTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = integrationTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No integration translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesIntegration with professional translation
    data.guidesIntegration = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied integration translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const integration = newData.guidesIntegration;
    console.log(`   - Title: "${integration?.title || 'N/A'}"`);
    console.log(`   - Types: ${integration?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${integration?.workflow?.steps?.length || 0}`);
    console.log(`   - Tools: ${integration?.tools?.length || 0}`);
    console.log(`   - Best practices: ${integration?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying integration translations for ${langCode}:`, error.message);
  }
}

// Apply integration translations
console.log('🚀 Applying professional integration translations...\n');

Object.keys(integrationTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi'
  };
  
  console.log(`Applying integration translations for ${langNames[langCode]}...`);
  applyIntegrationTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional integration translations applied!');
console.log('🎯 Hindi now has complete professional content.');
