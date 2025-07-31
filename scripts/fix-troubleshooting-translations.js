const fs = require('fs');
const path = require('path');

// Complete troubleshooting translations for different languages
const troubleshootingTranslations = {
  en: {
    "title": "Troubleshooting",
    "description": "Encountering installation issues? Here are solutions to common problems",
    "nodeVersion": {
      "issue": "Node.js Version Compatibility Issue",
      "solution": "Use nvm to update to Node.js 18.0.0 or higher, or download from nodejs.org"
    },
    "permissions": {
      "issue": "Permission Denied Error",
      "solution": "Use sudo for global installation or configure npm to use a different directory for global packages"
    },
    "apiKey": {
      "issue": "API Key Configuration Problem",
      "solution": "Ensure your Google AI API key is correctly set using 'gemini config set apiKey YOUR_API_KEY'"
    },
    "network": {
      "issue": "Network Connection Error",
      "solution": "Check your internet connection and firewall settings, or try using a VPN if in a restricted network"
    }
  },
  ru: {
    "title": "Устранение неполадок",
    "description": "Возникли проблемы с установкой? Вот решения распространенных проблем",
    "nodeVersion": {
      "issue": "Проблема совместимости версии Node.js",
      "solution": "Используйте nvm для обновления до Node.js 18.0.0 или выше, или скачайте с nodejs.org"
    },
    "permissions": {
      "issue": "Ошибка отказа в доступе",
      "solution": "Используйте sudo для глобальной установки или настройте npm для использования другой директории для глобальных пакетов"
    },
    "apiKey": {
      "issue": "Проблема конфигурации API ключа",
      "solution": "Убедитесь, что ваш API ключ Google AI правильно установлен с помощью 'gemini config set apiKey YOUR_API_KEY'"
    },
    "network": {
      "issue": "Ошибка сетевого подключения",
      "solution": "Проверьте ваше интернет-соединение и настройки брандмауэра, или попробуйте использовать VPN в ограниченной сети"
    }
  },
  hi: {
    "title": "समस्या निवारण",
    "description": "इंस्टॉलेशन समस्याओं का सामना कर रहे हैं? यहाँ सामान्य समस्याओं के समाधान हैं",
    "nodeVersion": {
      "issue": "Node.js संस्करण संगतता समस्या",
      "solution": "Node.js 18.0.0 या उच्चतर में अपडेट करने के लिए nvm का उपयोग करें, या nodejs.org से डाउनलोड करें"
    },
    "permissions": {
      "issue": "अनुमति अस्वीकृत त्रुटि",
      "solution": "ग्लोबल इंस्टॉलेशन के लिए sudo का उपयोग करें या ग्लोबल पैकेजों के लिए एक अलग डायरेक्टरी का उपयोग करने के लिए npm को कॉन्फ़िगर करें"
    },
    "apiKey": {
      "issue": "API कुंजी कॉन्फ़िगरेशन समस्या",
      "solution": "सुनिश्चित करें कि आपकी Google AI API कुंजी 'gemini config set apiKey YOUR_API_KEY' का उपयोग करके सही तरीके से सेट की गई है"
    },
    "network": {
      "issue": "नेटवर्क कनेक्शन त्रुटि",
      "solution": "अपने इंटरनेट कनेक्शन और फ़ायरवॉल सेटिंग्स की जांच करें, या प्रतिबंधित नेटवर्क में VPN का उपयोग करने का प्रयास करें"
    }
  },
  de: {
    "title": "Fehlerbehebung",
    "description": "Installationsprobleme? Hier sind Lösungen für häufige Probleme",
    "nodeVersion": {
      "issue": "Node.js Versionskompatibilitätsproblem",
      "solution": "Verwenden Sie nvm, um auf Node.js 18.0.0 oder höher zu aktualisieren, oder laden Sie von nodejs.org herunter"
    },
    "permissions": {
      "issue": "Berechtigung verweigert Fehler",
      "solution": "Verwenden Sie sudo für die globale Installation oder konfigurieren Sie npm, um ein anderes Verzeichnis für globale Pakete zu verwenden"
    },
    "apiKey": {
      "issue": "API-Schlüssel Konfigurationsproblem",
      "solution": "Stellen Sie sicher, dass Ihr Google AI API-Schlüssel korrekt mit 'gemini config set apiKey YOUR_API_KEY' gesetzt ist"
    },
    "network": {
      "issue": "Netzwerkverbindungsfehler",
      "solution": "Überprüfen Sie Ihre Internetverbindung und Firewall-Einstellungen, oder versuchen Sie ein VPN in einem eingeschränkten Netzwerk zu verwenden"
    }
  },
  fr: {
    "title": "Dépannage",
    "description": "Vous rencontrez des problèmes d'installation ? Voici des solutions aux problèmes courants",
    "nodeVersion": {
      "issue": "Problème de compatibilité de version Node.js",
      "solution": "Utilisez nvm pour mettre à jour vers Node.js 18.0.0 ou supérieur, ou téléchargez depuis nodejs.org"
    },
    "permissions": {
      "issue": "Erreur de permission refusée",
      "solution": "Utilisez sudo pour l'installation globale ou configurez npm pour utiliser un répertoire différent pour les packages globaux"
    },
    "apiKey": {
      "issue": "Problème de configuration de clé API",
      "solution": "Assurez-vous que votre clé API Google AI est correctement définie en utilisant 'gemini config set apiKey YOUR_API_KEY'"
    },
    "network": {
      "issue": "Erreur de connexion réseau",
      "solution": "Vérifiez votre connexion internet et les paramètres de pare-feu, ou essayez d'utiliser un VPN dans un réseau restreint"
    }
  },
  ja: {
    "title": "トラブルシューティング",
    "description": "インストールの問題が発生していますか？一般的な問題の解決策をご紹介します",
    "nodeVersion": {
      "issue": "Node.jsバージョン互換性の問題",
      "solution": "nvmを使用してNode.js 18.0.0以上に更新するか、nodejs.orgからダウンロードしてください"
    },
    "permissions": {
      "issue": "権限拒否エラー",
      "solution": "グローバルインストールにはsudoを使用するか、グローバルパッケージ用に別のディレクトリを使用するようnpmを設定してください"
    },
    "apiKey": {
      "issue": "APIキー設定の問題",
      "solution": "'gemini config set apiKey YOUR_API_KEY'を使用してGoogle AI APIキーが正しく設定されていることを確認してください"
    },
    "network": {
      "issue": "ネットワーク接続エラー",
      "solution": "インターネット接続とファイアウォール設定を確認するか、制限されたネットワークでVPNの使用を試してください"
    }
  },
  ko: {
    "title": "문제 해결",
    "description": "설치 문제가 발생했나요? 일반적인 문제에 대한 해결책이 있습니다",
    "nodeVersion": {
      "issue": "Node.js 버전 호환성 문제",
      "solution": "nvm을 사용하여 Node.js 18.0.0 이상으로 업데이트하거나 nodejs.org에서 다운로드하세요"
    },
    "permissions": {
      "issue": "권한 거부 오류",
      "solution": "전역 설치에는 sudo를 사용하거나 전역 패키지에 다른 디렉토리를 사용하도록 npm을 구성하세요"
    },
    "apiKey": {
      "issue": "API 키 구성 문제",
      "solution": "'gemini config set apiKey YOUR_API_KEY'를 사용하여 Google AI API 키가 올바르게 설정되었는지 확인하세요"
    },
    "network": {
      "issue": "네트워크 연결 오류",
      "solution": "인터넷 연결과 방화벽 설정을 확인하거나 제한된 네트워크에서 VPN 사용을 시도하세요"
    }
  },
  es: {
    "title": "Solución de problemas",
    "description": "¿Tiene problemas de instalación? Aquí hay soluciones a problemas comunes",
    "nodeVersion": {
      "issue": "Problema de compatibilidad de versión de Node.js",
      "solution": "Use nvm para actualizar a Node.js 18.0.0 o superior, o descargue desde nodejs.org"
    },
    "permissions": {
      "issue": "Error de permiso denegado",
      "solution": "Use sudo para instalación global o configure npm para usar un directorio diferente para paquetes globales"
    },
    "apiKey": {
      "issue": "Problema de configuración de clave API",
      "solution": "Asegúrese de que su clave API de Google AI esté configurada correctamente usando 'gemini config set apiKey YOUR_API_KEY'"
    },
    "network": {
      "issue": "Error de conexión de red",
      "solution": "Verifique su conexión a internet y configuración de firewall, o intente usar una VPN en una red restringida"
    }
  }
};

// Function to update translation files
function updateTranslationFile(locale, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${locale}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Update installation.troubleshooting section
    if (data.installation && data.installation.troubleshooting) {
      Object.assign(data.installation.troubleshooting, translations);
    } else if (data.installation) {
      data.installation.troubleshooting = translations;
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${locale}.json with complete troubleshooting translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// Update files
Object.keys(troubleshootingTranslations).forEach(locale => {
  updateTranslationFile(locale, troubleshootingTranslations[locale]);
});

console.log('Troubleshooting translations update completed!');
