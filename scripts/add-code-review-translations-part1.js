const fs = require('fs');
const path = require('path');

// Complete Code Review translations for Hindi and French
const codeReviewTranslations = {
  hi: {
    "title": "कोड समीक्षा सहायक",
    "subtitle": "कोड गुणवत्ता निरीक्षण के लिए AI का उपयोग करें",
    "description": "कोड गुणवत्ता, सुरक्षा, और टीम सहयोग दक्षता में सुधार के लिए व्यापक कोड समीक्षा के लिए AI की शक्ति का लाभ उठाएं।",
    "overview": {
      "title": "समीक्षा अवलोकन",
      "description": "कोड समीक्षा सॉफ्टवेयर विकास प्रक्रिया का एक महत्वपूर्ण हिस्सा है, संभावित समस्याओं की पहचान करने और कोड गुणवत्ता में सुधार के लिए कोड की व्यवस्थित जांच करना। Gemini CLI बुद्धिमान कोड समीक्षा क्षमताएं प्रदान करता है जो आपको समस्याओं की त्वरित पहचान करने और सुधार सुझाव प्रदान करने में मदद करता है।"
    },
    "typesTitle": "समीक्षा प्रकार",
    "typesDescription": "विभिन्न प्रकार की कोड समीक्षा फोकस के बारे में जानें",
    "types": [
      {
        "icon": "security",
        "title": "सुरक्षा समीक्षा",
        "description": "कोड में सुरक्षा कमजोरियों और जोखिमों की जांच करें",
        "checks": [
          {
            "name": "SQL इंजेक्शन का पता लगाना"
          },
          {
            "name": "XSS कमजोरी स्कैन"
          },
          {
            "name": "अनुमति सत्यापन जांच"
          },
          {
            "name": "संवेदनशील जानकारी का रिसाव"
          }
        ]
      },
      {
        "icon": "bugs",
        "title": "बग का पता लगाना",
        "description": "संभावित बग और तार्किक त्रुटियों की पहचान करें",
        "checks": [
          {
            "name": "नल पॉइंटर अपवाद"
          },
          {
            "name": "एरे सीमा से बाहर"
          },
          {
            "name": "संसाधन रिसाव"
          },
          {
            "name": "डेडलॉक का पता लगाना"
          }
        ]
      },
      {
        "icon": "performance",
        "title": "प्रदर्शन विश्लेषण",
        "description": "कोड प्रदर्शन और अनुकूलन अवसरों का विश्लेषण करें",
        "checks": [
          {
            "name": "एल्गोरिदम जटिलता"
          },
          {
            "name": "मेमोरी उपयोग"
          },
          {
            "name": "डेटाबेस क्वेरी"
          },
          {
            "name": "कैशिंग रणनीति"
          }
        ]
      },
      {
        "icon": "style",
        "title": "कोड स्टाइल",
        "description": "कोड मानकों और स्थिरता की जांच करें",
        "checks": [
          {
            "name": "नामकरण परंपराएं"
          },
          {
            "name": "कोड फॉर्मेटिंग"
          },
          {
            "name": "टिप्पणी गुणवत्ता"
          },
          {
            "name": "फ़ंक्शन लंबाई"
          }
        ]
      }
    ],
    "workflow": {
      "title": "समीक्षा वर्कफ़्लो",
      "description": "एक व्यवस्थित कोड समीक्षा प्रक्रिया का पालन करें",
      "steps": [
        {
          "title": "समीक्षा तैयार करें",
          "description": "समीक्षा नियम और जांच क्षेत्र कॉन्फ़िगर करें",
          "example": "# समीक्षा नियम कॉन्फ़िगर करें\ngemini review config --rules security,performance\n\n# जांच क्षेत्र सेट करें\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "समीक्षा निष्पादित करें",
          "description": "स्वचालित कोड समीक्षा चलाएं",
          "example": "# व्यापक समीक्षा\ngemini review --comprehensive --output report.json\n\n# वृद्धिशील समीक्षा\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "परिणामों का विश्लेषण करें",
          "description": "समीक्षा रिपोर्ट देखें और समस्याओं का विश्लेषण करें",
          "example": "# समीक्षा रिपोर्ट देखें\ngemini review report --format html\n\n# गंभीरता के अनुसार क्रमबद्ध करें\ngemini review list --severity high"
        },
        {
          "title": "समस्याओं को ठीक करें",
          "description": "सुझावों के आधार पर पहचानी गई समस्याओं को ठीक करें",
          "example": "# स्वचालित सुधार\ngemini review fix --auto --safe-only\n\n# इंटरैक्टिव सुधार\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "समीक्षा चेकपॉइंट",
    "checkpointsDescription": "महत्वपूर्ण कोड समीक्षा जांच आइटम",
    "checkpoints": [
      {
        "severity": "high",
        "title": "सुरक्षा कमजोरियां",
        "description": "कोड दोष जो सुरक्षा समस्याओं का कारण बन सकते हैं",
        "items": [
          {
            "text": "अमान्य उपयोगकर्ता इनपुट"
          },
          {
            "text": "हार्डकोडेड पासवर्ड या कुंजी"
          },
          {
            "text": "असुरक्षित एन्क्रिप्शन एल्गोरिदम"
          },
          {
            "text": "अनुमति बाईपास कमजोरियां"
          }
        ]
      },
      {
        "severity": "high",
        "title": "गंभीर त्रुटियां",
        "description": "गंभीर समस्याएं जो प्रोग्राम क्रैश का कारण बन सकती हैं",
        "items": [
          {
            "text": "नल पॉइंटर डेरेफरेंस"
          },
          {
            "text": "एरे सीमा से बाहर पहुंच"
          },
          {
            "text": "मेमोरी रिसाव"
          },
          {
            "text": "डेडलॉक जोखिम"
          }
        ]
      },
      {
        "severity": "medium",
        "title": "प्रदर्शन समस्याएं",
        "description": "प्रोग्राम प्रदर्शन को प्रभावित करने वाली कोड समस्याएं",
        "items": [
          {
            "text": "अकुशल एल्गोरिदम कार्यान्वयन"
          },
          {
            "text": "अनावश्यक डेटाबेस क्वेरी"
          },
          {
            "text": "लापता कैशिंग तंत्र"
          },
          {
            "text": "अनुचित संसाधन उपयोग"
          }
        ]
      },
      {
        "severity": "low",
        "title": "कोड गुणवत्ता",
        "description": "कोड पठनीयता और रखरखाव को प्रभावित करने वाली समस्याएं",
        "items": [
          {
            "text": "फ़ंक्शन बहुत लंबे या जटिल"
          },
          {
            "text": "गैर-मानक वेरिएबल नामकरण"
          },
          {
            "text": "आवश्यक टिप्पणियों का अभाव"
          },
          {
            "text": "कोड दोहराव"
          }
        ]
      }
    ],
    "aiFeatures": {
      "title": "AI समीक्षा सुविधाएं",
      "description": "कोड समीक्षा दक्षता और सटीकता में सुधार के लिए कृत्रिम बुद्धिमत्ता का लाभ उठाएं",
      "automated": {
        "title": "स्वचालित पहचान",
        "features": [
          {
            "name": "बुद्धिमान कमजोरी स्कैनिंग"
          },
          {
            "name": "प्रदर्शन बाधा पहचान"
          },
          {
            "name": "कोड स्मेल का पता लगाना"
          },
          {
            "name": "सर्वोत्तम प्रथा सुझाव"
          }
        ]
      },
      "intelligent": {
        "title": "बुद्धिमान विश्लेषण",
        "features": [
          {
            "name": "संदर्भ समझ"
          },
          {
            "name": "व्यावसायिक तर्क विश्लेषण"
          },
          {
            "name": "आर्किटेक्चर पैटर्न पहचान"
          },
          {
            "name": "व्यक्तिगत सिफारिशें"
          }
        ]
      }
    },
    "bestPracticesTitle": "समीक्षा सर्वोत्तम प्रथाएं",
    "bestPracticesDescription": "कोड समीक्षा प्रभावशीलता में सुधार के लिए इन सर्वोत्तम प्रथाओं का पालन करें",
    "bestPractices": [
      {
        "title": "नियमित समीक्षा",
        "description": "नियमित कोड समीक्षा तंत्र स्थापित करें, परियोजना पूर्ण होने तक समीक्षा करने की प्रतीक्षा न करें।"
      },
      {
        "title": "मुख्य क्षेत्रों पर ध्यान दें",
        "description": "सुरक्षा, प्रदर्शन, और रखरखाव को प्राथमिकता दें, विवरणों पर अधिक ध्यान देने से बचें।"
      },
      {
        "title": "टीम सहयोग",
        "description": "टीम के सदस्यों को समीक्षा प्रक्रिया में भाग लेने के लिए प्रोत्साहित करें, ज्ञान और अनुभव साझा करें।"
      },
      {
        "title": "निरंतर सुधार",
        "description": "समीक्षा परिणामों के आधार पर विकास प्रक्रियाओं और कोडिंग मानकों में निरंतर सुधार करें।"
      }
    ],
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अधिक विकास उपकरण और सर्वोत्तम प्रथाओं को सीखना जारी रखें",
      "integration": "उपकरण एकीकरण",
      "advancedConfig": "उन्नत कॉन्फ़िगरेशन"
    }
  },
  fr: {
    "title": "Assistant de Révision de Code",
    "subtitle": "Utilisez l'IA pour l'inspection de la qualité du code",
    "description": "Exploitez la puissance de l'IA pour des révisions de code complètes afin d'améliorer la qualité du code, la sécurité et l'efficacité de la collaboration d'équipe.",
    "overview": {
      "title": "Aperçu de la Révision",
      "description": "La révision de code est une partie critique du processus de développement logiciel, vérifiant systématiquement le code pour identifier les problèmes potentiels et améliorer la qualité du code. Gemini CLI fournit des capacités de révision de code intelligentes pour vous aider à identifier rapidement les problèmes et fournir des suggestions d'amélioration."
    },
    "typesTitle": "Types de Révision",
    "typesDescription": "Apprenez les différents types de focus de révision de code",
    "types": [
      {
        "icon": "security",
        "title": "Révision de Sécurité",
        "description": "Vérifier les vulnérabilités et risques de sécurité dans le code",
        "checks": [
          {
            "name": "Détection d'Injection SQL"
          },
          {
            "name": "Scan de Vulnérabilité XSS"
          },
          {
            "name": "Vérification des Permissions"
          },
          {
            "name": "Fuite d'Informations Sensibles"
          }
        ]
      },
      {
        "icon": "bugs",
        "title": "Détection de Bugs",
        "description": "Identifier les bugs potentiels et erreurs logiques",
        "checks": [
          {
            "name": "Exception de Pointeur Null"
          },
          {
            "name": "Dépassement de Tableau"
          },
          {
            "name": "Fuites de Ressources"
          },
          {
            "name": "Détection de Deadlock"
          }
        ]
      },
      {
        "icon": "performance",
        "title": "Analyse de Performance",
        "description": "Analyser les performances du code et les opportunités d'optimisation",
        "checks": [
          {
            "name": "Complexité d'Algorithme"
          },
          {
            "name": "Utilisation de la Mémoire"
          },
          {
            "name": "Requêtes de Base de Données"
          },
          {
            "name": "Stratégie de Cache"
          }
        ]
      },
      {
        "icon": "style",
        "title": "Style de Code",
        "description": "Vérifier les standards et la cohérence du code",
        "checks": [
          {
            "name": "Conventions de Nommage"
          },
          {
            "name": "Formatage du Code"
          },
          {
            "name": "Qualité des Commentaires"
          },
          {
            "name": "Longueur des Fonctions"
          }
        ]
      }
    ],
    "workflow": {
      "title": "Flux de Travail de Révision",
      "description": "Suivez un processus de révision de code systématique",
      "steps": [
        {
          "title": "Préparer la Révision",
          "description": "Configurer les règles de révision et la portée de vérification",
          "example": "# Configurer les règles de révision\ngemini review config --rules security,performance\n\n# Définir la portée de vérification\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "Exécuter la Révision",
          "description": "Lancer la révision de code automatisée",
          "example": "# Révision complète\ngemini review --comprehensive --output report.json\n\n# Révision incrémentale\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "Analyser les Résultats",
          "description": "Voir le rapport de révision et analyser les problèmes",
          "example": "# Voir le rapport de révision\ngemini review report --format html\n\n# Trier par sévérité\ngemini review list --severity high"
        },
        {
          "title": "Corriger les Problèmes",
          "description": "Corriger les problèmes identifiés selon les suggestions",
          "example": "# Correction automatique\ngemini review fix --auto --safe-only\n\n# Correction interactive\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "Points de Contrôle de Révision",
    "checkpointsDescription": "Éléments de vérification importants pour la révision de code",
    "checkpoints": [
      {
        "severity": "high",
        "title": "Vulnérabilités de Sécurité",
        "description": "Défauts de code pouvant conduire à des problèmes de sécurité",
        "items": [
          {
            "text": "Entrée utilisateur non validée"
          },
          {
            "text": "Mots de passe ou clés codés en dur"
          },
          {
            "text": "Algorithmes de chiffrement non sécurisés"
          },
          {
            "text": "Vulnérabilités de contournement de permissions"
          }
        ]
      },
      {
        "severity": "high",
        "title": "Erreurs Critiques",
        "description": "Problèmes graves pouvant causer des plantages de programme",
        "items": [
          {
            "text": "Déréférencement de pointeur null"
          },
          {
            "text": "Accès hors limites de tableau"
          },
          {
            "text": "Fuites de mémoire"
          },
          {
            "text": "Risques de deadlock"
          }
        ]
      },
      {
        "severity": "medium",
        "title": "Problèmes de Performance",
        "description": "Problèmes de code affectant les performances du programme",
        "items": [
          {
            "text": "Implémentation d'algorithme inefficace"
          },
          {
            "text": "Requêtes de base de données inutiles"
          },
          {
            "text": "Mécanismes de cache manquants"
          },
          {
            "text": "Utilisation inappropriée des ressources"
          }
        ]
      },
      {
        "severity": "low",
        "title": "Qualité du Code",
        "description": "Problèmes affectant la lisibilité et la maintenabilité du code",
        "items": [
          {
            "text": "Fonctions trop longues ou complexes"
          },
          {
            "text": "Nommage de variables non standard"
          },
          {
            "text": "Commentaires nécessaires manquants"
          },
          {
            "text": "Duplication de code"
          }
        ]
      }
    ],
    "aiFeatures": {
      "title": "Fonctionnalités de Révision IA",
      "description": "Exploitez l'intelligence artificielle pour améliorer l'efficacité et la précision de la révision de code",
      "automated": {
        "title": "Détection Automatisée",
        "features": [
          {
            "name": "Scan Intelligent de Vulnérabilités"
          },
          {
            "name": "Identification de Goulots d'Étranglement"
          },
          {
            "name": "Détection de Code Smell"
          },
          {
            "name": "Suggestions de Meilleures Pratiques"
          }
        ]
      },
      "intelligent": {
        "title": "Analyse Intelligente",
        "features": [
          {
            "name": "Compréhension du Contexte"
          },
          {
            "name": "Analyse de Logique Métier"
          },
          {
            "name": "Reconnaissance de Motifs d'Architecture"
          },
          {
            "name": "Recommandations Personnalisées"
          }
        ]
      }
    },
    "bestPracticesTitle": "Meilleures Pratiques de Révision",
    "bestPracticesDescription": "Suivez ces meilleures pratiques pour améliorer l'efficacité de la révision de code",
    "bestPractices": [
      {
        "title": "Révisions Régulières",
        "description": "Établissez des mécanismes de révision de code réguliers, n'attendez pas la fin du projet pour effectuer des révisions."
      },
      {
        "title": "Focus sur les Domaines Clés",
        "description": "Priorisez la sécurité, les performances et la maintenabilité, évitez de trop vous concentrer sur les détails."
      },
      {
        "title": "Collaboration d'Équipe",
        "description": "Encouragez les membres de l'équipe à participer au processus de révision, en partageant connaissances et expérience."
      },
      {
        "title": "Amélioration Continue",
        "description": "Améliorez continuellement les processus de développement et les standards de codage basés sur les résultats de révision."
      }
    ],
    "nextSteps": {
      "title": "Prochaines Étapes",
      "description": "Continuez à apprendre plus d'outils de développement et de meilleures pratiques",
      "integration": "Intégration d'Outils",
      "advancedConfig": "Configuration Avancée"
    }
  }
};

// Function to apply Code Review translations
function applyCodeReviewTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = codeReviewTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Code Review translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesCodeReview with professional translation
    data.guidesCodeReview = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Code Review translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const codeReview = newData.guidesCodeReview;
    console.log(`   - Title: "${codeReview?.title || 'N/A'}"`);
    console.log(`   - Types: ${codeReview?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${codeReview?.workflow?.steps?.length || 0}`);
    console.log(`   - Checkpoints: ${codeReview?.checkpoints?.length || 0}`);
    console.log(`   - Best practices: ${codeReview?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Code Review translations for ${langCode}:`, error.message);
  }
}

// Apply Code Review translations
console.log('🚀 Applying professional Code Review translations...\n');

Object.keys(codeReviewTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    fr: 'French'
  };
  
  console.log(`Applying Code Review translations for ${langNames[langCode]}...`);
  applyCodeReviewTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Code Review translations applied!');
console.log('🎯 Hindi and French now have complete professional content.');
