const fs = require('fs');
const path = require('path');

// Complete Hindi translation for guides main page
const hindiGuidesMain = {
  "guidesMain": {
    "hero": {
      "title": "Gemini CLI उपयोग गाइड",
      "description": "बुनियादी परिचय से लेकर उन्नत अनुप्रयोगों तक, Gemini CLI की शक्तिशाली सुविधाओं में महारत हासिल करें और AI को अपने विकास कार्य में एक विश्वसनीय सहायक बनाएं।"
    },
    "categories": {
      "beginner": {
        "title": "शुरुआती गाइड",
        "description": "Gemini CLI की मूल बातें सीखें",
        "tutorials": [
          {
            "title": "पहली बार उपयोग",
            "description": "बुनियादी अवधारणाओं को समझें, पहला AI वार्तालाप पूरा करें",
            "duration": "10 मिनट",
            "level": "शुरुआती"
          },
          {
            "title": "बुनियादी कमांड",
            "description": "सामान्य कमांड और बुनियादी सिंटैक्स सीखें",
            "duration": "15 मिनट",
            "level": "शुरुआती"
          },
          {
            "title": "फ़ाइल संचालन",
            "description": "AI का उपयोग करके फ़ाइल सामग्री को संसाधित और विश्लेषित करें",
            "duration": "20 मिनट",
            "level": "मध्यम"
          }
        ]
      },
      "intermediate": {
        "title": "मध्यम गाइड",
        "description": "अधिक उन्नत सुविधाओं का अन्वेषण करें",
        "tutorials": [
          {
            "title": "उन्नत कॉन्फ़िगरेशन",
            "description": "कस्टम सेटिंग्स और वर्कफ़्लो अनुकूलन",
            "duration": "25 मिनट",
            "level": "मध्यम"
          },
          {
            "title": "सिस्टम एकीकरण",
            "description": "अन्य उपकरणों और वर्कफ़्लो के साथ एकीकरण",
            "duration": "30 मिनट",
            "level": "मध्यम"
          },
          {
            "title": "MCP प्रोटोकॉल",
            "description": "Model Context Protocol का उपयोग करके कार्यक्षमता का विस्तार",
            "duration": "35 मिनट",
            "level": "उन्नत"
          }
        ]
      },
      "advanced": {
        "title": "उन्नत गाइड",
        "description": "विशेषज्ञ-स्तरीय तकनीकों में महारत हासिल करें",
        "tutorials": [
          {
            "title": "कोड रिफैक्टरिंग",
            "description": "मौजूदा कोड का विश्लेषण और सुधार करने के लिए AI का उपयोग",
            "duration": "40 मिनट",
            "level": "उन्नत"
          },
          {
            "title": "दस्तावेज़ीकरण जेनरेटर",
            "description": "उच्च गुणवत्ता वाले प्रोजेक्ट दस्तावेज़ीकरण को बुद्धिमानी से उत्पन्न करने के लिए AI का उपयोग",
            "duration": "30 मिनट",
            "level": "मध्यम"
          },
          {
            "title": "कोड समीक्षा सहायक",
            "description": "कोड गुणवत्ता निरीक्षण के लिए AI का उपयोग",
            "duration": "35 मिनट",
            "level": "उन्नत"
          }
        ]
      }
    },
    "startLearning": "सीखना शुरू करें",
    "quickAccess": {
      "title": "त्वरित पहुंच",
      "description": "सीधे उस सामग्री पर जाएं जिसकी आपको आवश्यकता है",
      "advanced": "उन्नत गाइड",
      "advancedDesc": "गहन उन्नत ट्यूटोरियल और तकनीकें",
      "examples": "व्यावहारिक उदाहरण",
      "examplesDesc": "वास्तविक प्रोजेक्ट केस और समाधान",
      "commands": "कमांड संदर्भ",
      "commandsDesc": "पूरी कमांड सूची और सिंटैक्स",
      "faq": "अक्सर पूछे जाने वाले प्रश्न",
      "faqDesc": "सामान्य प्रश्नों के उत्तर तुरंत खोजें"
    },
    "cta": {
      "title": "अपनी AI प्रोग्रामिंग यात्रा शुरू करने के लिए तैयार हैं?",
      "description": "अभी Gemini CLI इंस्टॉल करें और AI-सहायक प्रोग्रामिंग की शक्तिशाली सुविधाओं का अनुभव करना शुरू करें।",
      "getStarted": "शुरू करें",
      "viewDocs": "दस्तावेज़ देखें"
    }
  }
};

// Function to fix Hindi guides main page
function fixHindiGuidesMain() {
  const filePath = path.join(__dirname, '..', 'src', 'messages', 'hi.json');
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add the missing guidesMain translation
    Object.assign(data, hindiGuidesMain);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Fixed Hindi guides main page translation');
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const guidesMain = newData.guidesMain;
    console.log(`   - Hero title: "${guidesMain?.hero?.title || 'N/A'}"`);
    console.log(`   - Categories: ${Object.keys(guidesMain?.categories || {}).length}`);
    console.log(`   - Quick access items: ${Object.keys(guidesMain?.quickAccess || {}).length - 2}`); // -2 for title and description
    
  } catch (error) {
    console.error('❌ Error fixing Hindi guides main page:', error.message);
  }
}

// Apply the fix
console.log('🔧 Fixing Hindi guides main page translation...\n');
fixHindiGuidesMain();
console.log('\n✅ Hindi guides main page translation fixed!');
console.log('🎯 Hindi users can now access the complete guides overview page.');
