const fs = require('fs');
const path = require('path');

// Platform translations for different languages
const platformsTranslations = {
  hi: {
    "requirements": {
      "title": "सिस्टम आवश्यकताएं",
      "description": "Gemini CLI मुख्य ऑपरेटिंग सिस्टम का समर्थन करता है, सुनिश्चित करें कि आपका सिस्टम निम्नलिखित आवश्यकताओं को पूरा करता है"
    },
    "platforms": {
      "windows": {
        "name": "Windows",
        "requirements": {
          "os": "Windows 10 या उच्चतर",
          "shell": "PowerShell 5.1 या उच्चतर",
          "node": "Node.js 20+ (nvm-windows का उपयोग करने की सिफारिश)"
        },
        "notes": "बेहतर अनुभव के लिए Windows Terminal का उपयोग करने की सिफारिश"
      },
      "macos": {
        "name": "macOS",
        "requirements": {
          "os": "macOS 10.15 या उच्चतर",
          "terminal": "Terminal या iTerm2",
          "node": "Node.js 20+ (nvm का उपयोग करने की सिफारिश)"
        },
        "notes": "आप Homebrew का उपयोग करके Node.js इंस्टॉल कर सकते हैं: brew install node"
      },
      "linux": {
        "name": "Linux",
        "requirements": {
          "distro": "Ubuntu 18.04+ / CentOS 7+ / अन्य मुख्य वितरण",
          "shell": "Bash 4.0 या उच्चतर",
          "node": "Node.js 20+ (nvm का उपयोग करने की सिफारिश)"
        },
        "notes": "सुनिश्चित करें कि आपके सिस्टम पर curl और git इंस्टॉल हैं"
      }
    },
    "troubleshooting": {
      "description": "इंस्टॉलेशन समस्याओं का सामना कर रहे हैं? यहाँ सामान्य समस्याओं के समाधान हैं"
    }
  },
  de: {
    "requirements": {
      "title": "Systemanforderungen",
      "description": "Gemini CLI unterstützt wichtige Betriebssysteme, stellen Sie sicher, dass Ihr System die folgenden Anforderungen erfüllt"
    },
    "platforms": {
      "windows": {
        "name": "Windows",
        "requirements": {
          "os": "Windows 10 oder höher",
          "shell": "PowerShell 5.1 oder höher",
          "node": "Node.js 20+ (empfohlen mit nvm-windows)"
        },
        "notes": "Empfohlen, Windows Terminal für bessere Erfahrung zu verwenden"
      },
      "macos": {
        "name": "macOS",
        "requirements": {
          "os": "macOS 10.15 oder höher",
          "terminal": "Terminal oder iTerm2",
          "node": "Node.js 20+ (empfohlen mit nvm)"
        },
        "notes": "Sie können Node.js mit Homebrew installieren: brew install node"
      },
      "linux": {
        "name": "Linux",
        "requirements": {
          "distro": "Ubuntu 18.04+ / CentOS 7+ / andere wichtige Distributionen",
          "shell": "Bash 4.0 oder höher",
          "node": "Node.js 20+ (empfohlen mit nvm)"
        },
        "notes": "Stellen Sie sicher, dass curl und git auf Ihrem System installiert sind"
      }
    },
    "troubleshooting": {
      "description": "Installationsprobleme? Hier sind Lösungen für häufige Probleme"
    }
  },
  fr: {
    "requirements": {
      "title": "Configuration système requise",
      "description": "Gemini CLI prend en charge les principaux systèmes d'exploitation, assurez-vous que votre système répond aux exigences suivantes"
    },
    "platforms": {
      "windows": {
        "name": "Windows",
        "requirements": {
          "os": "Windows 10 ou supérieur",
          "shell": "PowerShell 5.1 ou supérieur",
          "node": "Node.js 20+ (recommandé d'utiliser nvm-windows)"
        },
        "notes": "Recommandé d'utiliser Windows Terminal pour une meilleure expérience"
      },
      "macos": {
        "name": "macOS",
        "requirements": {
          "os": "macOS 10.15 ou supérieur",
          "terminal": "Terminal ou iTerm2",
          "node": "Node.js 20+ (recommandé d'utiliser nvm)"
        },
        "notes": "Vous pouvez installer Node.js avec Homebrew: brew install node"
      },
      "linux": {
        "name": "Linux",
        "requirements": {
          "distro": "Ubuntu 18.04+ / CentOS 7+ / autres distributions principales",
          "shell": "Bash 4.0 ou supérieur",
          "node": "Node.js 20+ (recommandé d'utiliser nvm)"
        },
        "notes": "Assurez-vous que curl et git sont installés sur votre système"
      }
    },
    "troubleshooting": {
      "description": "Problèmes d'installation? Voici des solutions aux problèmes courants"
    }
  },
  ja: {
    "requirements": {
      "title": "システム要件",
      "description": "Gemini CLIは主要なオペレーティングシステムをサポートしています。システムが以下の要件を満たしていることを確認してください"
    },
    "platforms": {
      "windows": {
        "name": "Windows",
        "requirements": {
          "os": "Windows 10以上",
          "shell": "PowerShell 5.1以上",
          "node": "Node.js 20+（nvm-windowsの使用を推奨）"
        },
        "notes": "より良い体験のためにWindows Terminalの使用を推奨"
      },
      "macos": {
        "name": "macOS",
        "requirements": {
          "os": "macOS 10.15以上",
          "terminal": "TerminalまたはiTerm2",
          "node": "Node.js 20+（nvmの使用を推奨）"
        },
        "notes": "Homebrewを使用してNode.jsをインストールできます: brew install node"
      },
      "linux": {
        "name": "Linux",
        "requirements": {
          "distro": "Ubuntu 18.04+ / CentOS 7+ / その他の主要ディストリビューション",
          "shell": "Bash 4.0以上",
          "node": "Node.js 20+（nvmの使用を推奨）"
        },
        "notes": "システムにcurlとgitがインストールされていることを確認してください"
      }
    },
    "troubleshooting": {
      "description": "インストールの問題が発生していますか？一般的な問題の解決策をご紹介します"
    }
  },
  ko: {
    "requirements": {
      "title": "시스템 요구사항",
      "description": "Gemini CLI는 주요 운영 체제를 지원합니다. 시스템이 다음 요구사항을 충족하는지 확인하세요"
    },
    "platforms": {
      "windows": {
        "name": "Windows",
        "requirements": {
          "os": "Windows 10 이상",
          "shell": "PowerShell 5.1 이상",
          "node": "Node.js 20+ (nvm-windows 사용 권장)"
        },
        "notes": "더 나은 경험을 위해 Windows Terminal 사용을 권장합니다"
      },
      "macos": {
        "name": "macOS",
        "requirements": {
          "os": "macOS 10.15 이상",
          "terminal": "Terminal 또는 iTerm2",
          "node": "Node.js 20+ (nvm 사용 권장)"
        },
        "notes": "Homebrew를 사용하여 Node.js를 설치할 수 있습니다: brew install node"
      },
      "linux": {
        "name": "Linux",
        "requirements": {
          "distro": "Ubuntu 18.04+ / CentOS 7+ / 기타 주요 배포판",
          "shell": "Bash 4.0 이상",
          "node": "Node.js 20+ (nvm 사용 권장)"
        },
        "notes": "시스템에 curl과 git이 설치되어 있는지 확인하세요"
      }
    },
    "troubleshooting": {
      "description": "설치 문제가 발생했나요? 일반적인 문제에 대한 해결책이 있습니다"
    }
  },
  es: {
    "requirements": {
      "title": "Requisitos del sistema",
      "description": "Gemini CLI soporta los principales sistemas operativos, asegúrese de que su sistema cumple con los siguientes requisitos"
    },
    "platforms": {
      "windows": {
        "name": "Windows",
        "requirements": {
          "os": "Windows 10 o superior",
          "shell": "PowerShell 5.1 o superior",
          "node": "Node.js 20+ (recomendado usar nvm-windows)"
        },
        "notes": "Recomendado usar Windows Terminal para una mejor experiencia"
      },
      "macos": {
        "name": "macOS",
        "requirements": {
          "os": "macOS 10.15 o superior",
          "terminal": "Terminal o iTerm2",
          "node": "Node.js 20+ (recomendado usar nvm)"
        },
        "notes": "Puede instalar Node.js usando Homebrew: brew install node"
      },
      "linux": {
        "name": "Linux",
        "requirements": {
          "distro": "Ubuntu 18.04+ / CentOS 7+ / otras distribuciones principales",
          "shell": "Bash 4.0 o superior",
          "node": "Node.js 20+ (recomendado usar nvm)"
        },
        "notes": "Asegúrese de que curl y git estén instalados en su sistema"
      }
    },
    "troubleshooting": {
      "description": "¿Problemas de instalación? Aquí hay soluciones a problemas comunes"
    }
  }
};

// Function to update translation files
function updateTranslationFile(locale, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${locale}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Update installation section
    if (data.installation) {
      // Add requirements and platforms
      Object.assign(data.installation, translations);
      
      // Update troubleshooting description if it exists
      if (data.installation.troubleshooting && translations.troubleshooting) {
        Object.assign(data.installation.troubleshooting, translations.troubleshooting);
      }
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${locale}.json with platforms translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// Update files
Object.keys(platformsTranslations).forEach(locale => {
  updateTranslationFile(locale, platformsTranslations[locale]);
});

console.log('Platforms translations update completed!');
