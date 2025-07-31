const fs = require('fs');
const path = require('path');

// Complete Hindi advanced config translation with correct structure
const hindiAdvancedConfig = {
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
  "configSectionsTitle": "कॉन्फ़िगरेशन फ़ाइल संरचना",
  "configSectionsDescription": "विभिन्न कॉन्फ़िगरेशन अनुभागों और उनकी सेटिंग्स के बारे में जानें",
  "location": "स्थान",
  "structure": "संरचना",
  "explanation": "व्याख्या",
  "options": "विकल्प",
  "configSections": [
    {
      "id": "toml-config",
      "title": "TOML कॉन्फ़िगरेशन फ़ाइल",
      "description": "विस्तृत कॉन्फ़िगरेशन के लिए gemini.toml फ़ाइल का उपयोग करें",
      "color": "from-blue-500 to-indigo-600",
      "content": {
        "location": "कॉन्फ़िगरेशन फ़ाइल स्थान: प्रोजेक्ट रूट डायरेक्टरी में gemini.toml",
        "structure": `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"`,
        "explanation": "TOML फ़ाइल Gemini CLI के सभी पहलुओं का संरचित और पठनीय कॉन्फ़िगरेशन की अनुमति देती है।"
      }
    },
    {
      "id": "env-vars",
      "title": "पर्यावरण चर",
      "description": "पर्यावरण चर के माध्यम से त्वरित कॉन्फ़िगरेशन",
      "color": "from-green-500 to-emerald-600",
      "content": {
        "explanation": "पर्यावरण चर त्वरित और लचीली कॉन्फ़िगरेशन की अनुमति देते हैं",
        "options": [
          "GEMINI_API_KEY: प्रमाणीकरण के लिए API कुंजी",
          "GEMINI_MODEL: उपयोग करने के लिए डिफ़ॉल्ट मॉडल",
          "GEMINI_TEMPERATURE: रचनात्मकता पैरामीटर",
          "GEMINI_MAX_TOKENS: अधिकतम टोकन संख्या",
          "GEMINI_CONFIG_PATH: कॉन्फ़िगरेशन फ़ाइल पथ"
        ]
      }
    },
    {
      "id": "model-config",
      "title": "मॉडल कॉन्फ़िगरेशन",
      "description": "AI मॉडल-विशिष्ट सेटिंग्स",
      "color": "from-indigo-500 to-purple-600",
      "content": {
        "explanation": "AI मॉडल के व्यवहार और प्रदर्शन को नियंत्रित करें",
        "options": [
          "provider: मॉडल प्रदाता (google, openai)",
          "name: विशिष्ट मॉडल नाम",
          "temperature: रचनात्मकता (0.0-2.0)",
          "max_tokens: आउटपुट टोकन सीमा",
          "top_p: न्यूक्लियस सैंपलिंग",
          "frequency_penalty: आवृत्ति दंड"
        ]
      }
    },
    {
      "id": "ui-config",
      "title": "UI कॉन्फ़िगरेशन",
      "description": "उपयोगकर्ता इंटरफ़ेस और इंटरैक्शन अनुभव को अनुकूलित करें",
      "color": "from-purple-500 to-pink-600",
      "content": {
        "explanation": "CLI इंटरफ़ेस के प्रदर्शन और इंटरैक्शन को समायोजित करें",
        "options": [
          "theme: थीम रंग (light, dark, auto)",
          "show_token_count: टोकन काउंटर दिखाएं",
          "auto_save_history: इतिहास का स्वचालित सेव",
          "syntax_highlighting: सिंटैक्स हाइलाइटिंग",
          "line_numbers: लाइन नंबर दिखाएं",
          "word_wrap: स्वचालित लाइन रैप"
        ]
      }
    },
    {
      "id": "tools-config",
      "title": "टूल कॉन्फ़िगरेशन",
      "description": "विभिन्न टूल सुविधाओं को सक्षम और कॉन्फ़िगर करें",
      "color": "from-orange-500 to-red-600",
      "content": {
        "explanation": "CLI टूल सुविधाओं और अनुमतियों को नियंत्रित करें",
        "options": [
          "enable_shell: Shell कमांड निष्पादन सक्षम करें",
          "enable_file_operations: फ़ाइल ऑपरेशन सक्षम करें",
          "max_file_size: अधिकतम फ़ाइल आकार",
          "allowed_extensions: अनुमतित फ़ाइल एक्सटेंशन",
          "blocked_commands: अवरुद्ध कमांड सूची",
          "timeout: निष्पादन टाइमआउट"
        ]
      }
    },
    {
      "id": "security-config",
      "title": "सुरक्षा कॉन्फ़िगरेशन",
      "description": "सुरक्षा और पहुंच नियंत्रण सेटिंग्स",
      "color": "from-red-500 to-pink-600",
      "content": {
        "explanation": "सुरक्षा उपाय और पहुंच नियंत्रण कॉन्फ़िगर करें",
        "options": [
          "enable_audit_log: ऑडिट लॉग सक्षम करें",
          "restrict_file_access: फ़ाइल पहुंच प्रतिबंधित करें",
          "allowed_directories: अनुमतित डायरेक्टरी",
          "require_confirmation: पुष्टि आवश्यक",
          "session_timeout: सत्र टाइमआउट",
          "max_concurrent_sessions: अधिकतम समानांतर सत्र"
        ]
      }
    }
  ],
  "environmentVariablesTitle": "पर्यावरण चर",
  "environmentVariablesDescription": "पर्यावरण चर के माध्यम से त्वरित कॉन्फ़िगरेशन",
  "defaultValue": "डिफ़ॉल्ट मान",
  "none": "कोई नहीं",
  "environmentVariables": [
    {
      "name": "GEMINI_API_KEY",
      "description": "प्रमाणीकरण के लिए Google Gemini API कुंजी",
      "example": "export GEMINI_API_KEY=आपकी_api_कुंजी_यहां",
      "default": null
    },
    {
      "name": "GEMINI_MODEL",
      "description": "उपयोग करने के लिए डिफ़ॉल्ट मॉडल नाम",
      "example": "export GEMINI_MODEL=gemini-1.5-pro",
      "default": "gemini-1.5-flash"
    },
    {
      "name": "GEMINI_TEMPERATURE",
      "description": "मॉडल रचनात्मकता पैरामीटर",
      "example": "export GEMINI_TEMPERATURE=0.7",
      "default": "0.9"
    },
    {
      "name": "GEMINI_MAX_TOKENS",
      "description": "अधिकतम आउटपुट टोकन संख्या",
      "example": "export GEMINI_MAX_TOKENS=8192",
      "default": "4096"
    },
    {
      "name": "GEMINI_CONFIG_PATH",
      "description": "कस्टम कॉन्फ़िगरेशन फ़ाइल पथ",
      "example": "export GEMINI_CONFIG_PATH=/path/to/config.toml",
      "default": "./gemini.toml"
    }
  ],
  "customizationTitle": "अनुकूलन विकल्प",
  "customizationDescription": "विभिन्न उपयोग मामलों के लिए व्यक्तिगत कॉन्फ़िगरेशन",
  "customizationOptions": [
    {
      "title": "विकास वातावरण",
      "description": "विकास वर्कफ़्लो के लिए अनुकूलित सेटिंग्स",
      "features": [
        "कोड सिंटैक्स हाइलाइटिंग सक्षम करें",
        "सत्र इतिहास का स्वचालित सेव",
        "संस्करण नियंत्रण सिस्टम के साथ एकीकरण",
        "कस्टम कोड टेम्प्लेट",
        "त्वरित कमांड उपनाम"
      ]
    },
    {
      "title": "उत्पादन वातावरण",
      "description": "उत्पादन वातावरण के लिए सुरक्षा कॉन्फ़िगरेशन",
      "features": [
        "फ़ाइल ऑपरेशन अनुमतियों को प्रतिबंधित करें",
        "खतरनाक कमांड अक्षम करें",
        "ऑडिट लॉगिंग सक्षम करें",
        "संसाधन उपयोग सीमा निर्धारित करें",
        "बैकअप रणनीति कॉन्फ़िगर करें"
      ]
    },
    {
      "title": "टीम सहयोग कॉन्फ़िगरेशन",
      "description": "टीम सहयोग के लिए साझा सेटिंग्स",
      "features": [
        "एकीकृत कॉन्फ़िगरेशन टेम्प्लेट",
        "साझा प्रॉम्प्ट लाइब्रेरी",
        "टीम उपयोग आंकड़े",
        "अनुमति प्रबंधन",
        "कॉन्फ़िगरेशन सिंक्रोनाइज़ेशन"
      ]
    }
  ],
  "bestPracticesTitle": "सर्वोत्तम प्रथाएं",
  "bestPracticesDescription": "इष्टतम कॉन्फ़िगरेशन के लिए सिफारिशें",
  "bestPractices": [
    {
      "title": "कॉन्फ़िगरेशन प्रबंधन",
      "description": "अपनी कॉन्फ़िगरेशन फ़ाइलों को व्यवस्थित और बनाए रखें",
      "tips": [
        "कॉन्फ़िगरेशन फ़ाइलों के लिए संस्करण नियंत्रण का उपयोग करें",
        "कॉन्फ़िगरेशन परिवर्तनों का दस्तावेजीकरण करें",
        "विकास वातावरण में कॉन्फ़िगरेशन का परीक्षण करें",
        "नियमित रूप से कॉन्फ़िगरेशन का बैकअप लें"
      ]
    },
    {
      "title": "प्रदर्शन अनुकूलन",
      "description": "इष्टतम प्रदर्शन के लिए कॉन्फ़िगर करें",
      "tips": [
        "अपनी आवश्यकताओं के अनुसार मॉडल पैरामीटर समायोजित करें",
        "संसाधन उपयोग की निगरानी करें",
        "डेटा ट्रांसमिशन दक्षता का अनुकूलन करें",
        "उपयुक्त टाइमआउट कॉन्फ़िगर करें"
      ]
    },
    {
      "title": "डिबगिंग सुझाव",
      "description": "डिबगिंग को आसान बनाने के लिए कॉन्फ़िगरेशन",
      "tips": [
        "विस्तृत लॉगिंग मोड का उपयोग करें",
        "सर्वर स्थिति की जांच करें",
        "कॉन्फ़िगरेशन फ़ाइल प्रारूप को सत्यापित करें",
        "पर्यावरण चर का परीक्षण करें"
      ]
    }
  ],
  "nextSteps": {
    "title": "अगले कदम",
    "description": "अब जब आप उन्नत कॉन्फ़िगरेशन को समझते हैं, तो आप अधिक उन्नत कॉन्फ़िगरेशन और एकीकरण विधियों को सीखना जारी रख सकते हैं:",
    "integration": "एकीकरण गाइड",
    "troubleshooting": "समस्या निवारण",
    "backToGuides": "गाइड पर वापस जाएं"
  }
};

// Function to completely replace Hindi advanced config
function replaceHindiAdvancedConfig() {
  const filePath = path.join(__dirname, '..', 'src', 'messages', 'hi.json');
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Completely replace the guidesAdvancedConfig section
    data.guidesAdvancedConfig = hindiAdvancedConfig;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Completely replaced Hindi advanced config structure');
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const advancedConfig = newData.guidesAdvancedConfig;
    
    console.log('📋 Verification:');
    console.log(`   - Hero title: "${advancedConfig?.hero?.title || 'N/A'}"`);
    console.log(`   - Config sections: ${advancedConfig?.configSections?.length || 0}`);
    console.log(`   - Environment variables: ${advancedConfig?.environmentVariables?.length || 0}`);
    console.log(`   - Customization options: ${advancedConfig?.customizationOptions?.length || 0}`);
    console.log(`   - Best practices: ${advancedConfig?.bestPractices?.length || 0}`);
    
    console.log('\n🎯 Hindi advanced config structure is now complete and correct!');
    
  } catch (error) {
    console.error('❌ Error replacing Hindi advanced config:', error.message);
  }
}

// Run the replacement
console.log('🔧 Replacing Hindi advanced config structure...\n');
replaceHindiAdvancedConfig();
