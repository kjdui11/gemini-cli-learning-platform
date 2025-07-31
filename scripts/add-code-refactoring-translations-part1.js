const fs = require('fs');
const path = require('path');

// Complete Code Refactoring translations for Hindi and French
const codeRefactoringTranslations = {
  hi: {
    "title": "कोड रिफैक्टरिंग सहायक",
    "subtitle": "मौजूदा कोड का विश्लेषण और रिफैक्टर करने के लिए AI का उपयोग करें",
    "description": "कोड गुणवत्ता, पठनीयता और रखरखाव में सुधार के लिए बुद्धिमान कोड रिफैक्टरिंग के लिए Gemini CLI का उपयोग करना सीखें।",
    "overview": {
      "title": "रिफैक्टरिंग अवलोकन",
      "description": "कोड रिफैक्टरिंग मौजूदा कोड संरचना को उसके बाहरी व्यवहार को बदले बिना सुधारने की प्रक्रिया है। Gemini CLI कोड स्मेल की पहचान करने, प्रदर्शन अनुकूलित करने और कोड गुणवत्ता बढ़ाने में मदद करने के लिए शक्तिशाली AI-सहायक रिफैक्टरिंग क्षमताएं प्रदान करता है।"
    },
    "typesTitle": "रिफैक्टरिंग प्रकार",
    "typesDescription": "विभिन्न प्रकार की कोड रिफैक्टरिंग तकनीकों के बारे में जानें",
    "types": [
      {
        "icon": "structure",
        "title": "संरचनात्मक रिफैक्टरिंग",
        "description": "कोड संगठन और आर्किटेक्चर में सुधार करें",
        "techniques": [
          { "name": "मेथड निकालना" },
          { "name": "क्लास निकालना" },
          { "name": "मेथड स्थानांतरित करना" },
          { "name": "वेरिएबल का नाम बदलना" }
        ]
      },
      {
        "icon": "performance",
        "title": "प्रदर्शन अनुकूलन",
        "description": "कोड निष्पादन दक्षता और संसाधन उपयोग का अनुकूलन करें",
        "techniques": [
          { "name": "एल्गोरिदम अनुकूलन" },
          { "name": "कैशिंग रणनीति" },
          { "name": "मेमोरी प्रबंधन" },
          { "name": "समानांतरता अनुकूलन" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "रखरखाव योग्यता",
        "description": "कोड पठनीयता और रखरखाव में वृद्धि करें",
        "techniques": [
          { "name": "सशर्त अभिव्यक्तियों को सरल बनाना" },
          { "name": "डुप्लिकेट कोड को हटाना" },
          { "name": "नामकरण में सुधार" },
          { "name": "टिप्पणियां जोड़ना" }
        ]
      },
      {
        "icon": "security",
        "title": "सुरक्षा सुदृढ़ीकरण",
        "description": "संभावित सुरक्षा कमजोरियों की पहचान और सुधार करें",
        "techniques": [
          { "name": "इनपुट सत्यापन" },
          { "name": "अनुमति जांच" },
          { "name": "डेटा एन्क्रिप्शन" },
          { "name": "त्रुटि हैंडलिंग" }
        ]
      }
    ],
    "workflow": {
      "title": "रिफैक्टरिंग वर्कफ़्लो",
      "description": "कोड गुणवत्ता सुनिश्चित करने के लिए एक व्यवस्थित रिफैक्टरिंग प्रक्रिया का पालन करें",
      "steps": [
        {
          "title": "कोड विश्लेषण",
          "description": "मौजूदा कोड का विश्लेषण करने और रिफैक्टरिंग अवसरों की पहचान करने के लिए AI का उपयोग करें",
          "example": "# कोड गुणवत्ता का विश्लेषण करें\ngemini analyze --file src/main.js --type quality\n\n# कोड स्मेल का पता लगाएं\ngemini detect --smell --directory src/"
        },
        {
          "title": "रिफैक्टरिंग योजना बनाएं",
          "description": "विश्लेषण परिणामों के आधार पर एक विस्तृत रिफैक्टरिंग योजना विकसित करें",
          "example": "# रिफैक्टरिंग सुझाव उत्पन्न करें\ngemini refactor --plan --file src/main.js\n\n# रिफैक्टरिंग जोखिमों का आकलन करें\ngemini assess --risk --changes planned"
        },
        {
          "title": "रिफैक्टरिंग निष्पादित करें",
          "description": "कोड कार्यक्षमता बनाए रखते हुए धीरे-धीरे रिफैक्टरिंग ऑपरेशन निष्पादित करें",
          "example": "# स्वचालित रिफैक्टरिंग\ngemini refactor --apply --file src/main.js\n\n# इंटरैक्टिव रिफैक्टरिंग\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "सत्यापन और परीक्षण",
          "description": "सुनिश्चित करें कि रिफैक्टर किया गया कोड सही तरीके से काम करता है और अच्छा प्रदर्शन करता है",
          "example": "# परीक्षण चलाएं\ngemini test --after-refactor\n\n# प्रदर्शन तुलना\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "रिफैक्टरिंग उदाहरण",
    "examplesDescription": "वास्तविक कोड रिफैक्टरिंग मामले देखें",
    "beforeLabel": "पहले",
    "afterLabel": "बाद में",
    "examples": [
      {
        "title": "फ़ंक्शन निष्कर्षण",
        "description": "जटिल फ़ंक्शन को छोटे, अधिक केंद्रित फ़ंक्शन में विभाजित करें",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "स्थिति सरलीकरण",
        "description": "जटिल सशर्त तर्क को सरल बनाएं",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "रिफैक्टरिंग सर्वोत्तम प्रथाएं",
    "bestPracticesDescription": "सफल रिफैक्टरिंग सुनिश्चित करने के लिए इन सर्वोत्तम प्रथाओं का पालन करें",
    "bestPractices": [
      {
        "title": "छोटे कदम",
        "description": "जोखिम कम करने और रोलबैक की सुविधा के लिए बड़े पैमाने पर एक बार रिफैक्टरिंग के बजाय छोटे, बार-बार रिफैक्टरिंग करें।"
      },
      {
        "title": "पहले परीक्षण",
        "description": "रिफैक्टरिंग से पहले पर्याप्त परीक्षण कवरेज सुनिश्चित करें और कार्यक्षमता सत्यापित करने के लिए तुरंत बाद परीक्षण चलाएं।"
      },
      {
        "title": "संस्करण नियंत्रण",
        "description": "स्पष्ट परिवर्तन इतिहास बनाए रखने के लिए प्रत्येक रिफैक्टरिंग को संस्करण नियंत्रण सिस्टम में कमिट करें।"
      },
      {
        "title": "टीम संचार",
        "description": "कई सहयोगियों से जुड़े कोड को रिफैक्टर करते समय पहले से संवाद करें और टीम की अनुमति प्राप्त करें।"
      }
    ],
    "nextSteps": {
      "title": "अगले कदम",
      "description": "कोड गुणवत्ता संबंधी अधिक विषयों को सीखना जारी रखें",
      "codeReview": "कोड समीक्षा",
      "advancedConfig": "उन्नत कॉन्फ़िगरेशन"
    }
  },
  fr: {
    "title": "Assistant de Refactorisation de Code",
    "subtitle": "Utilisez l'IA pour analyser et refactoriser le code existant",
    "description": "Apprenez à utiliser Gemini CLI pour la refactorisation intelligente de code afin d'améliorer la qualité, la lisibilité et la maintenabilité du code.",
    "overview": {
      "title": "Aperçu de la Refactorisation",
      "description": "La refactorisation de code est le processus d'amélioration de la structure du code existant sans changer son comportement externe. Gemini CLI fournit de puissantes capacités de refactorisation assistée par IA pour vous aider à identifier les code smells, optimiser les performances et améliorer la qualité du code."
    },
    "typesTitle": "Types de Refactorisation",
    "typesDescription": "Apprenez les différents types de techniques de refactorisation de code",
    "types": [
      {
        "icon": "structure",
        "title": "Refactorisation Structurelle",
        "description": "Améliorer l'organisation et l'architecture du code",
        "techniques": [
          { "name": "Extraire une Méthode" },
          { "name": "Extraire une Classe" },
          { "name": "Déplacer une Méthode" },
          { "name": "Renommer une Variable" }
        ]
      },
      {
        "icon": "performance",
        "title": "Optimisation des Performances",
        "description": "Optimiser l'efficacité d'exécution du code et l'utilisation des ressources",
        "techniques": [
          { "name": "Optimisation d'Algorithme" },
          { "name": "Stratégie de Cache" },
          { "name": "Gestion de la Mémoire" },
          { "name": "Optimisation de la Concurrence" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "Maintenabilité",
        "description": "Améliorer la lisibilité et la maintenabilité du code",
        "techniques": [
          { "name": "Simplifier les Expressions Conditionnelles" },
          { "name": "Éliminer le Code Dupliqué" },
          { "name": "Améliorer la Nomenclature" },
          { "name": "Ajouter des Commentaires" }
        ]
      },
      {
        "icon": "security",
        "title": "Renforcement de la Sécurité",
        "description": "Identifier et corriger les vulnérabilités de sécurité potentielles",
        "techniques": [
          { "name": "Validation des Entrées" },
          { "name": "Vérifications de Permissions" },
          { "name": "Chiffrement des Données" },
          { "name": "Gestion des Erreurs" }
        ]
      }
    ],
    "workflow": {
      "title": "Flux de Travail de Refactorisation",
      "description": "Suivez un processus de refactorisation systématique pour assurer la qualité du code",
      "steps": [
        {
          "title": "Analyse du Code",
          "description": "Utilisez l'IA pour analyser le code existant et identifier les opportunités de refactorisation",
          "example": "# Analyser la qualité du code\ngemini analyze --file src/main.js --type quality\n\n# Détecter les code smells\ngemini detect --smell --directory src/"
        },
        {
          "title": "Créer un Plan de Refactorisation",
          "description": "Développer un plan de refactorisation détaillé basé sur les résultats d'analyse",
          "example": "# Générer des suggestions de refactorisation\ngemini refactor --plan --file src/main.js\n\n# Évaluer les risques de refactorisation\ngemini assess --risk --changes planned"
        },
        {
          "title": "Exécuter la Refactorisation",
          "description": "Exécuter graduellement les opérations de refactorisation tout en maintenant la fonctionnalité du code",
          "example": "# Refactorisation automatique\ngemini refactor --apply --file src/main.js\n\n# Refactorisation interactive\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "Vérifier et Tester",
          "description": "S'assurer que le code refactorisé fonctionne correctement et performe bien",
          "example": "# Exécuter les tests\ngemini test --after-refactor\n\n# Comparaison de performance\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "Exemples de Refactorisation",
    "examplesDescription": "Voir des cas réels de refactorisation de code",
    "beforeLabel": "Avant",
    "afterLabel": "Après",
    "examples": [
      {
        "title": "Extraction de Fonction",
        "description": "Diviser des fonctions complexes en fonctions plus petites et plus ciblées",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "Simplification de Condition",
        "description": "Simplifier la logique conditionnelle complexe",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "Meilleures Pratiques de Refactorisation",
    "bestPracticesDescription": "Suivez ces meilleures pratiques pour assurer une refactorisation réussie",
    "bestPractices": [
      {
        "title": "Petites Étapes",
        "description": "Effectuez de petites refactorisations fréquentes plutôt qu'une refactorisation importante en une fois pour réduire les risques et faciliter le rollback."
      },
      {
        "title": "Tests d'Abord",
        "description": "Assurez-vous d'une couverture de tests adéquate avant la refactorisation et exécutez les tests immédiatement après pour vérifier la fonctionnalité."
      },
      {
        "title": "Contrôle de Version",
        "description": "Commitez chaque refactorisation dans le système de contrôle de version pour maintenir un historique de changements clair."
      },
      {
        "title": "Communication d'Équipe",
        "description": "Communiquez à l'avance et obtenez l'approbation de l'équipe lors de la refactorisation de code impliquant plusieurs collaborateurs."
      }
    ],
    "nextSteps": {
      "title": "Prochaines Étapes",
      "description": "Continuez à apprendre plus de sujets liés à la qualité du code",
      "codeReview": "Révision de Code",
      "advancedConfig": "Configuration Avancée"
    }
  }
};

// Function to apply Code Refactoring translations
function applyCodeRefactoringTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = codeRefactoringTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Code Refactoring translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesCodeRefactoring with professional translation
    data.guidesCodeRefactoring = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Code Refactoring translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const codeRefactoring = newData.guidesCodeRefactoring;
    console.log(`   - Title: "${codeRefactoring?.title || 'N/A'}"`);
    console.log(`   - Types: ${codeRefactoring?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${codeRefactoring?.workflow?.steps?.length || 0}`);
    console.log(`   - Examples: ${codeRefactoring?.examples?.length || 0}`);
    console.log(`   - Best practices: ${codeRefactoring?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Code Refactoring translations for ${langCode}:`, error.message);
  }
}

// Apply Code Refactoring translations
console.log('🚀 Applying professional Code Refactoring translations...\n');

Object.keys(codeRefactoringTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    fr: 'French'
  };
  
  console.log(`Applying Code Refactoring translations for ${langNames[langCode]}...`);
  applyCodeRefactoringTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Code Refactoring translations applied!');
console.log('🎯 Hindi and French now have complete professional content.');
