const fs = require('fs');
const path = require('path');

// Installation translations for different languages
const installationTranslations = {
  hi: {
    "installation": {
      "hero": {
        "title": "इंस्टॉलेशन और सेटअप",
        "description": "मिनटों में Gemini CLI के साथ शुरुआत करें। अपने सिस्टम पर टूल इंस्टॉल और कॉन्फ़िगर करने के लिए हमारी चरणबद्ध गाइड का पालन करें।"
      },
      "steps": {
        "title": "इंस्टॉलेशन चरण",
        "requirements": {
          "title": "सिस्टम आवश्यकताएं",
          "description": "इंस्टॉलेशन से पहले सुनिश्चित करें कि आपका सिस्टम न्यूनतम आवश्यकताओं को पूरा करता है",
          "items": {
            "node": "Node.js 18.0.0 या उच्चतर",
            "npm": "npm 8.0.0 या उच्चतर (या yarn/pnpm)",
            "git": "वर्जन कंट्रोल के लिए Git",
            "apiKey": "Google AI Studio API कुंजी"
          }
        },
        "install": {
          "title": "Gemini CLI इंस्टॉल करें",
          "description": "अपने पसंदीदा पैकेज मैनेजर का उपयोग करके CLI टूल को ग्लोबली इंस्टॉल करें",
          "commands": {
            "npm": "npm install -g @google/gemini-cli",
            "verify": "gemini --version"
          }
        },
        "config": {
          "title": "कॉन्फ़िगरेशन",
          "description": "अपनी API कुंजी सेट करें और अपने वर्कफ़्लो के लिए टूल कॉन्फ़िगर करें",
          "items": {
            "apiKey": "अपनी Google AI Studio API कुंजी सेट करें",
            "settings": "डिफ़ॉल्ट सेटिंग्स और प्राथमिकताएं कॉन्फ़िगर करें",
            "verify": "एक सरल कमांड के साथ कॉन्फ़िगरेशन का परीक्षण करें"
          }
        },
        "firstRun": {
          "title": "पहला रन",
          "description": "अपने इंस्टॉलेशन को सत्यापित करें और अपने पहले कमांड चलाएं",
          "commands": {
            "help": "gemini --help",
            "version": "gemini --version",
            "test": "gemini 'Hello, world!'"
          }
        }
      },
      "troubleshooting": {
        "title": "समस्या निवारण",
        "nodeVersion": {
          "issue": "Node.js संस्करण संगतता समस्याएं",
          "solution": "nvm का उपयोग करके Node.js 18.0.0 या उच्चतर में अपडेट करें या nodejs.org से डाउनलोड करें"
        },
        "permissions": {
          "issue": "इंस्टॉलेशन के दौरान अनुमति अस्वीकृत",
          "solution": "ग्लोबल इंस्टॉलेशन के लिए sudo का उपयोग करें या npm को अलग डायरेक्टरी उपयोग करने के लिए कॉन्फ़िगर करें"
        },
        "apiKey": {
          "issue": "API कुंजी पहचानी नहीं गई",
          "solution": "सत्यापित करें कि आपकी API कुंजी सही है और Google AI Studio में आवश्यक अनुमतियां हैं"
        },
        "network": {
          "issue": "नेटवर्क कनेक्टिविटी समस्याएं",
          "solution": "अपना इंटरनेट कनेक्शन और फ़ायरवॉल सेटिंग्स जांचें। यदि आवश्यक हो तो प्रॉक्सी का उपयोग करने पर विचार करें"
        }
      },
      "nextSteps": {
        "title": "आगे क्या?",
        "description": "अब जब आपके पास Gemini CLI इंस्टॉल है, टूल का अधिकतम उपयोग करने के लिए हमारी गाइड और दस्तावेज़ीकरण देखें।",
        "guides": "गाइड देखें",
        "commands": "कमांड संदर्भ"
      }
    }
  },
  de: {
    "installation": {
      "hero": {
        "title": "Installation & Einrichtung",
        "description": "Starten Sie mit Gemini CLI in wenigen Minuten. Folgen Sie unserer Schritt-für-Schritt-Anleitung zur Installation und Konfiguration des Tools auf Ihrem System."
      },
      "steps": {
        "title": "Installationsschritte",
        "requirements": {
          "title": "Systemanforderungen",
          "description": "Stellen Sie sicher, dass Ihr System die Mindestanforderungen vor der Installation erfüllt",
          "items": {
            "node": "Node.js 18.0.0 oder höher",
            "npm": "npm 8.0.0 oder höher (oder yarn/pnpm)",
            "git": "Git für Versionskontrolle",
            "apiKey": "Google AI Studio API-Schlüssel"
          }
        },
        "install": {
          "title": "Gemini CLI installieren",
          "description": "Installieren Sie das CLI-Tool global mit Ihrem bevorzugten Paketmanager",
          "commands": {
            "npm": "npm install -g @google/gemini-cli",
            "verify": "gemini --version"
          }
        },
        "config": {
          "title": "Konfiguration",
          "description": "Richten Sie Ihren API-Schlüssel ein und konfigurieren Sie das Tool für Ihren Workflow",
          "items": {
            "apiKey": "Setzen Sie Ihren Google AI Studio API-Schlüssel",
            "settings": "Konfigurieren Sie Standardeinstellungen und Präferenzen",
            "verify": "Testen Sie die Konfiguration mit einem einfachen Befehl"
          }
        },
        "firstRun": {
          "title": "Erster Lauf",
          "description": "Überprüfen Sie Ihre Installation und führen Sie Ihre ersten Befehle aus",
          "commands": {
            "help": "gemini --help",
            "version": "gemini --version",
            "test": "gemini 'Hello, world!'"
          }
        }
      },
      "troubleshooting": {
        "title": "Fehlerbehebung",
        "nodeVersion": {
          "issue": "Node.js-Versionskompatibilitätsprobleme",
          "solution": "Aktualisieren Sie auf Node.js 18.0.0 oder höher mit nvm oder laden Sie von nodejs.org herunter"
        },
        "permissions": {
          "issue": "Berechtigung während der Installation verweigert",
          "solution": "Verwenden Sie sudo für globale Installation oder konfigurieren Sie npm für ein anderes Verzeichnis"
        },
        "apiKey": {
          "issue": "API-Schlüssel nicht erkannt",
          "solution": "Überprüfen Sie, dass Ihr API-Schlüssel korrekt ist und die notwendigen Berechtigungen in Google AI Studio hat"
        },
        "network": {
          "issue": "Netzwerkverbindungsprobleme",
          "solution": "Überprüfen Sie Ihre Internetverbindung und Firewall-Einstellungen. Erwägen Sie bei Bedarf die Verwendung eines Proxys"
        }
      },
      "nextSteps": {
        "title": "Was kommt als Nächstes?",
        "description": "Jetzt, da Sie Gemini CLI installiert haben, erkunden Sie unsere Anleitungen und Dokumentation, um das Beste aus dem Tool herauszuholen.",
        "guides": "Anleitungen anzeigen",
        "commands": "Befehlsreferenz"
      }
    }
  }
};

// Function to update translation files
function updateTranslationFile(locale, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${locale}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Add installation translations
    Object.assign(data, translations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${locale}.json with installation translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// Update files
Object.keys(installationTranslations).forEach(locale => {
  updateTranslationFile(locale, installationTranslations[locale]);
});

console.log('Installation translations update completed!');
