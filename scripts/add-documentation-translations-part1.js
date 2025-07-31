const fs = require('fs');
const path = require('path');

// Complete Documentation translations for Hindi and French
const documentationTranslations = {
  hi: {
    "hero": {
      "title": "दस्तावेज़ीकरण जेनरेटर",
      "subtitle": "उच्च गुणवत्ता वाले प्रोजेक्ट दस्तावेज़ीकरण को बुद्धिमानी से उत्पन्न करने के लिए AI का उपयोग करें",
      "intermediate": "मध्यम",
      "readingTime": "25 मिनट पढ़ना"
    },
    "overview": {
      "title": "दस्तावेज़ीकरण अवलोकन",
      "description": "API डॉक्स, उपयोगकर्ता मैनुअल, तकनीकी विनिर्देश, और अधिक सहित प्रोजेक्ट दस्तावेज़ीकरण को स्वचालित रूप से उत्पन्न और बनाए रखने के लिए Gemini CLI का उपयोग करना सीखें।"
    },
    "typesTitle": "दस्तावेज़ीकरण प्रकार",
    "typesDescription": "विभिन्न प्रकार की दस्तावेज़ीकरण उत्पादन विधियों के बारे में जानें",
    "promptExample": "प्रॉम्प्ट उदाहरण",
    "features": "मुख्य विशेषताएं",
    "types": [
      {
        "id": "api-docs",
        "title": "API दस्तावेज़ीकरण",
        "description": "कोड से स्वचालित रूप से API दस्तावेज़ीकरण उत्पन्न करें",
        "color": "from-blue-500 to-indigo-600",
        "example": {
          "prompt": "@src/api/ इस डायरेक्टरी में सभी API फ़ाइलों के लिए पूर्ण API दस्तावेज़ीकरण उत्पन्न करें, जिसमें एंडपॉइंट विवरण, पैरामीटर विवरण, प्रतिक्रिया प्रारूप, और उपयोग उदाहरण शामिल हैं",
          "features": [
            "स्वचालित रूप से API एंडपॉइंट निकालें",
            "पैरामीटर विवरण तालिका उत्पन्न करें",
            "अनुरोध/प्रतिक्रिया उदाहरण शामिल करें",
            "कई प्रमाणीकरण विधियों का समर्थन करें",
            "इंटरैक्टिव दस्तावेज़ीकरण उत्पन्न करें"
          ]
        }
      },
      {
        "id": "readme",
        "title": "README दस्तावेज़ीकरण",
        "description": "प्रोजेक्ट विवरण दस्तावेज़ीकरण उत्पन्न करें",
        "color": "from-green-500 to-emerald-600",
        "example": {
          "prompt": "@package.json @src/ इस प्रोजेक्ट की संरचना और कार्यक्षमता का विश्लेषण करें, प्रोजेक्ट परिचय, इंस्टॉलेशन निर्देश, उपयोग विधियां, और योगदान दिशानिर्देश सहित एक पूर्ण README.md दस्तावेज़ उत्पन्न करें",
          "features": [
            "प्रोजेक्ट अवलोकन और विशेषताएं",
            "इंस्टॉलेशन और कॉन्फ़िगरेशन निर्देश",
            "उपयोग उदाहरण और ट्यूटोरियल",
            "योगदान दिशानिर्देश",
            "लाइसेंस जानकारी"
          ]
        }
      },
      {
        "id": "user-manual",
        "title": "उपयोगकर्ता मैनुअल",
        "description": "विस्तृत उपयोगकर्ता गाइड बनाएं",
        "color": "from-purple-500 to-pink-600",
        "example": {
          "prompt": "@src/components/ इन घटकों के आधार पर एक उपयोगकर्ता मैनुअल बनाएं, जिसमें सुविधा विवरण, उपयोग चरण, FAQ, और समस्या निवारण शामिल हैं",
          "features": [
            "विस्तृत सुविधा विवरण",
            "चरण-दर-चरण संचालन गाइड",
            "स्क्रीनशॉट और उदाहरण",
            "अक्सर पूछे जाने वाले प्रश्न",
            "समस्या निवारण गाइड"
          ]
        }
      },
      {
        "id": "technical-spec",
        "title": "तकनीकी विनिर्देश",
        "description": "तकनीकी आर्किटेक्चर और डिज़ाइन दस्तावेज़ उत्पन्न करें",
        "color": "from-orange-500 to-red-600",
        "example": {
          "prompt": "@src/ @docs/architecture.md प्रोजेक्ट आर्किटेक्चर का विश्लेषण करें, सिस्टम डिज़ाइन, डेटा फ़्लो, इंटरफ़ेस परिभाषाएं, और तैनाती आवश्यकताओं सहित तकनीकी विनिर्देश दस्तावेज़ उत्पन्न करें",
          "features": [
            "सिस्टम आर्किटेक्चर आरेख",
            "डेटा फ़्लो आरेख",
            "इंटरफ़ेस विनिर्देश",
            "तैनाती आवश्यकताएं",
            "प्रदर्शन मेट्रिक्स"
          ]
        }
      }
    ],
    "workflow": {
      "title": "दस्तावेज़ीकरण उत्पादन वर्कफ़्लो",
      "description": "उच्च गुणवत्ता वाले दस्तावेज़ीकरण उत्पन्न करने के लिए इन चरणों का पालन करें",
      "steps": [
        {
          "step": 1,
          "title": "प्रोजेक्ट संरचना का विश्लेषण करें",
          "description": "AI को प्रोजेक्ट की समग्र संरचना और कार्यक्षमता को समझने दें",
          "commands": [
            "@. इस प्रोजेक्ट की समग्र संरचना का विश्लेषण करें",
            "@package.json प्रोजेक्ट की निर्भरताओं और कॉन्फ़िगरेशन की व्याख्या करें",
            "@README.md प्रोजेक्ट की बुनियादी जानकारी को समझें"
          ]
        },
        {
          "step": 2,
          "title": "दस्तावेज़ीकरण प्रकार चुनें",
          "description": "आवश्यकताओं के आधार पर उपयुक्त दस्तावेज़ीकरण प्रकार और टेम्प्लेट का चयन करें",
          "commands": [
            "मुझे API दस्तावेज़ीकरण उत्पन्न करने की आवश्यकता है",
            "कृपया एक उपयोगकर्ता मैनुअल बनाएं",
            "तकनीकी आर्किटेक्चर दस्तावेज़ीकरण उत्पन्न करें"
          ]
        },
        {
          "step": 3,
          "title": "प्रारंभिक दस्तावेज़ीकरण उत्पन्न करें",
          "description": "दस्तावेज़ीकरण का प्रारंभिक संस्करण उत्पन्न करने के लिए AI का उपयोग करें",
          "commands": [
            "@src/api/ API दस्तावेज़ीकरण उत्पन्न करें",
            "@src/components/ घटक दस्तावेज़ीकरण बनाएं",
            "@docs/ मौजूदा दस्तावेज़ीकरण को अपडेट करें"
          ]
        },
        {
          "step": 4,
          "title": "समीक्षा और अनुकूलन",
          "description": "उत्पन्न दस्तावेज़ीकरण की जांच करें और आवश्यक समायोजन करें",
          "commands": [
            "दस्तावेज़ीकरण की पूर्णता और सटीकता की जांच करें",
            "दस्तावेज़ीकरण की संरचना और प्रारूप को अनुकूलित करें",
            "लापता उदाहरण और स्पष्टीकरण जोड़ें"
          ]
        }
      ]
    },
    "practicalExamples": {
      "title": "व्यावहारिक उदाहरण",
      "description": "विशिष्ट दस्तावेज़ीकरण उत्पादन मामले देखें"
    },
    "examples": [
      {
        "title": "React घटक दस्तावेज़ीकरण",
        "description": "React घटकों के लिए विस्तृत दस्तावेज़ीकरण उत्पन्न करें",
        "steps": [
          {
            "command": "@src/components/Button.tsx इस बटन घटक के लिए दस्तावेज़ीकरण उत्पन्न करें",
            "description": "घटक props, उपयोग, और उदाहरणों का विश्लेषण करें"
          },
          {
            "command": "उपयोग उदाहरण और सर्वोत्तम प्रथाएं जोड़ें",
            "description": "वास्तविक उपयोग मामले और कोड उदाहरण पूरक करें"
          },
          {
            "command": "Storybook स्टोरी फ़ाइलें उत्पन्न करें",
            "description": "इंटरैक्टिव घटक प्रदर्शन बनाएं"
          }
        ]
      },
      {
        "title": "REST API दस्तावेज़ीकरण",
        "description": "REST API के लिए OpenAPI विनिर्देश उत्पन्न करें",
        "steps": [
          {
            "command": "@src/routes/ सभी API रूट का विश्लेषण करें",
            "description": "एंडपॉइंट, पैरामीटर, और प्रतिक्रिया प्रारूप निकालें"
          },
          {
            "command": "OpenAPI 3.0 विनिर्देश फ़ाइल उत्पन्न करें",
            "description": "मानक API दस्तावेज़ीकरण प्रारूप बनाएं"
          },
          {
            "command": "प्रमाणीकरण और त्रुटि हैंडलिंग विवरण जोड़ें",
            "description": "सुरक्षा और त्रुटि हैंडलिंग जानकारी पूरक करें"
          }
        ]
      }
    ],
    "bestPracticesTitle": "सर्वोत्तम प्रथाएं",
    "bestPracticesDescription": "दस्तावेज़ीकरण उत्पादन के लिए महत्वपूर्ण विचार",
    "bestPractices": [
      {
        "type": "success",
        "title": "दस्तावेज़ीकरण को सिंक्रोनाइज़ रखें",
        "content": "यह सुनिश्चित करने के लिए नियमित रूप से दस्तावेज़ीकरण को अपडेट करें कि यह कोड के साथ सिंक्रोनाइज़ रहे, कोड बदलने पर दस्तावेज़ीकरण अपडेट करने की सिफारिश करें।"
      },
      {
        "type": "info",
        "title": "टेम्प्लेट और मानकों का उपयोग करें",
        "content": "पठनीयता और व्यावसायिकता में सुधार के लिए सुसंगत दस्तावेज़ीकरण टेम्प्लेट और प्रारूप मानकों को अपनाएं।"
      },
      {
        "type": "warning",
        "title": "उत्पन्न सामग्री को सत्यापित करें",
        "content": "AI-उत्पन्न दस्तावेज़ीकरण को तकनीकी विवरणों की सटीकता और पूर्णता सुनिश्चित करने के लिए मानव समीक्षा की आवश्यकता होती है।"
      },
      {
        "type": "success",
        "title": "व्यावहारिक उदाहरण जोड़ें",
        "content": "उपयोगकर्ताओं को बेहतर समझने में मदद करने के लिए दस्तावेज़ीकरण में वास्तविक कोड उदाहरण और उपयोग मामले शामिल करें।"
      }
    ],
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अब जब आपने दस्तावेज़ीकरण उत्पादन तकनीकों में महारत हासिल कर ली है, तो आप अन्य व्यावहारिक कौशल सीखना जारी रख सकते हैं:",
      "codeRefactoring": "कोड रिफैक्टरिंग",
      "codeReview": "कोड समीक्षा",
      "backToGuides": "गाइड पर वापस जाएं"
    }
  },
  fr: {
    "hero": {
      "title": "Générateur de Documentation",
      "subtitle": "Utilisez l'IA pour générer intelligemment une documentation de projet de haute qualité",
      "intermediate": "Intermédiaire",
      "readingTime": "25 min de lecture"
    },
    "overview": {
      "title": "Aperçu de la Documentation",
      "description": "Apprenez à utiliser Gemini CLI pour générer et maintenir automatiquement la documentation de projet, y compris les docs API, les manuels utilisateur, les spécifications techniques, et plus encore."
    },
    "typesTitle": "Types de Documentation",
    "typesDescription": "Apprenez les différents types de méthodes de génération de documentation",
    "promptExample": "Exemple de Prompt",
    "features": "Fonctionnalités Clés",
    "types": [
      {
        "id": "api-docs",
        "title": "Documentation API",
        "description": "Générer automatiquement la documentation API à partir du code",
        "color": "from-blue-500 to-indigo-600",
        "example": {
          "prompt": "@src/api/ Générer une documentation API complète pour tous les fichiers API de ce répertoire, incluant les descriptions d'endpoints, les descriptions de paramètres, les formats de réponse, et les exemples d'utilisation",
          "features": [
            "Extraire automatiquement les endpoints API",
            "Générer des tableaux de description des paramètres",
            "Inclure des exemples de requête/réponse",
            "Supporter plusieurs méthodes d'authentification",
            "Générer une documentation interactive"
          ]
        }
      },
      {
        "id": "readme",
        "title": "Documentation README",
        "description": "Générer la documentation de description du projet",
        "color": "from-green-500 to-emerald-600",
        "example": {
          "prompt": "@package.json @src/ Analyser la structure et la fonctionnalité de ce projet, générer un document README.md complet incluant l'introduction du projet, les instructions d'installation, les méthodes d'utilisation, et les directives de contribution",
          "features": [
            "Aperçu du projet et fonctionnalités",
            "Instructions d'installation et de configuration",
            "Exemples d'utilisation et tutoriels",
            "Directives de contribution",
            "Informations de licence"
          ]
        }
      },
      {
        "id": "user-manual",
        "title": "Manuel Utilisateur",
        "description": "Créer des guides utilisateur détaillés",
        "color": "from-purple-500 to-pink-600",
        "example": {
          "prompt": "@src/components/ Créer un manuel utilisateur basé sur ces composants, incluant les descriptions de fonctionnalités, les étapes d'utilisation, les FAQ, et le dépannage",
          "features": [
            "Descriptions détaillées des fonctionnalités",
            "Guides d'opération étape par étape",
            "Captures d'écran et exemples",
            "Questions fréquemment posées",
            "Guides de dépannage"
          ]
        }
      },
      {
        "id": "technical-spec",
        "title": "Spécifications Techniques",
        "description": "Générer des documents d'architecture technique et de conception",
        "color": "from-orange-500 to-red-600",
        "example": {
          "prompt": "@src/ @docs/architecture.md Analyser l'architecture du projet, générer des documents de spécification technique incluant la conception système, le flux de données, les définitions d'interface, et les exigences de déploiement",
          "features": [
            "Diagrammes d'architecture système",
            "Diagrammes de flux de données",
            "Spécifications d'interface",
            "Exigences de déploiement",
            "Métriques de performance"
          ]
        }
      }
    ],
    "workflow": {
      "title": "Flux de Travail de Génération de Documentation",
      "description": "Suivez ces étapes pour générer une documentation de haute qualité",
      "steps": [
        {
          "step": 1,
          "title": "Analyser la Structure du Projet",
          "description": "Laisser l'IA comprendre la structure globale et la fonctionnalité du projet",
          "commands": [
            "@. Analyser la structure globale de ce projet",
            "@package.json Expliquer les dépendances et la configuration du projet",
            "@README.md Comprendre les informations de base du projet"
          ]
        },
        {
          "step": 2,
          "title": "Choisir le Type de Documentation",
          "description": "Sélectionner le type de documentation et le modèle appropriés selon les exigences",
          "commands": [
            "J'ai besoin de générer une documentation API",
            "Veuillez créer un manuel utilisateur",
            "Générer une documentation d'architecture technique"
          ]
        },
        {
          "step": 3,
          "title": "Générer la Documentation Initiale",
          "description": "Utiliser l'IA pour générer la version initiale de la documentation",
          "commands": [
            "@src/api/ Générer la documentation API",
            "@src/components/ Créer la documentation des composants",
            "@docs/ Mettre à jour la documentation existante"
          ]
        },
        {
          "step": 4,
          "title": "Réviser et Optimiser",
          "description": "Vérifier la documentation générée et faire les ajustements nécessaires",
          "commands": [
            "Vérifier l'exhaustivité et la précision de la documentation",
            "Optimiser la structure et le format de la documentation",
            "Ajouter les exemples et explications manquants"
          ]
        }
      ]
    },
    "practicalExamples": {
      "title": "Exemples Pratiques",
      "description": "Voir des cas spécifiques de génération de documentation"
    },
    "examples": [
      {
        "title": "Documentation de Composant React",
        "description": "Générer une documentation détaillée pour les composants React",
        "steps": [
          {
            "command": "@src/components/Button.tsx Générer la documentation pour ce composant bouton",
            "description": "Analyser les props du composant, l'utilisation, et les exemples"
          },
          {
            "command": "Ajouter des exemples d'utilisation et les meilleures pratiques",
            "description": "Compléter les cas d'usage réels et les exemples de code"
          },
          {
            "command": "Générer des fichiers story Storybook",
            "description": "Créer des démonstrations de composants interactives"
          }
        ]
      },
      {
        "title": "Documentation API REST",
        "description": "Générer une spécification OpenAPI pour l'API REST",
        "steps": [
          {
            "command": "@src/routes/ Analyser toutes les routes API",
            "description": "Extraire les endpoints, paramètres, et formats de réponse"
          },
          {
            "command": "Générer un fichier de spécification OpenAPI 3.0",
            "description": "Créer un format de documentation API standard"
          },
          {
            "command": "Ajouter des descriptions d'authentification et de gestion d'erreurs",
            "description": "Compléter les informations de sécurité et de gestion d'erreurs"
          }
        ]
      }
    ],
    "bestPracticesTitle": "Meilleures Pratiques",
    "bestPracticesDescription": "Considérations importantes pour la génération de documentation",
    "bestPractices": [
      {
        "type": "success",
        "title": "Maintenir la Documentation Synchronisée",
        "content": "Mettre à jour régulièrement la documentation pour s'assurer qu'elle reste synchronisée avec le code, recommander de mettre à jour la documentation lors des changements de code."
      },
      {
        "type": "info",
        "title": "Utiliser des Modèles et Standards",
        "content": "Adopter des modèles de documentation cohérents et des standards de format pour améliorer la lisibilité et le professionnalisme."
      },
      {
        "type": "warning",
        "title": "Valider le Contenu Généré",
        "content": "La documentation générée par IA nécessite une révision humaine pour assurer la précision et l'exhaustivité des détails techniques."
      },
      {
        "type": "success",
        "title": "Ajouter des Exemples Pratiques",
        "content": "Inclure des exemples de code réels et des cas d'usage dans la documentation pour aider les utilisateurs à mieux comprendre."
      }
    ],
    "nextSteps": {
      "title": "Prochaines Étapes",
      "description": "Maintenant que vous maîtrisez les techniques de génération de documentation, vous pouvez continuer à apprendre d'autres compétences pratiques :",
      "codeRefactoring": "Refactorisation de Code",
      "codeReview": "Révision de Code",
      "backToGuides": "Retour aux Guides"
    }
  }
};

// Function to apply Documentation translations
function applyDocumentationTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = documentationTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Documentation translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesDocumentation with professional translation
    data.guidesDocumentation = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Documentation translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const documentation = newData.guidesDocumentation;
    console.log(`   - Hero title: "${documentation?.hero?.title || 'N/A'}"`);
    console.log(`   - Types: ${documentation?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${documentation?.workflow?.steps?.length || 0}`);
    console.log(`   - Examples: ${documentation?.examples?.length || 0}`);
    console.log(`   - Best practices: ${documentation?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Documentation translations for ${langCode}:`, error.message);
  }
}

// Apply Documentation translations
console.log('🚀 Applying professional Documentation translations...\n');

Object.keys(documentationTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    fr: 'French'
  };
  
  console.log(`Applying Documentation translations for ${langNames[langCode]}...`);
  applyDocumentationTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Documentation translations applied!');
console.log('🎯 Hindi and French now have complete professional content.');
