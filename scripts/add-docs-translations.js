const fs = require('fs');
const path = require('path');

// Additional Docs translations for all remaining languages
const additionalTranslations = {
  hi: {
    title: 'डेवलपर दस्तावेज़ीकरण',
    subtitle: 'Gemini CLI की तकनीकी विवरणों में गहराई से जाएं, कार्यक्षमता का विस्तार करना, MCP प्रोटोकॉल को एकीकृत करना, और ओपन सोर्स प्रोजेक्ट में योगदान करना सीखें।',
    quickNav: {
      title: 'त्वरित नेविगेशन',
      subtitle: 'आमतौर पर उपयोग किए जाने वाले विकास संसाधनों तक त्वरित पहुंच',
      links: [
        {
          title: 'GitHub रिपॉजिटरी',
          description: 'स्रोत कोड देखें और समस्याएं सबमिट करें',
          href: 'https://github.com/google-gemini/gemini-cli',
          external: true
        },
        {
          title: 'API संदर्भ',
          description: 'पूर्ण API दस्तावेज़ीकरण',
          href: '/docs/api-reference',
          external: false
        },
        {
          title: 'कोड उदाहरण',
          description: 'व्यावहारिक कोड उदाहरण और टेम्प्लेट',
          href: '/docs/examples',
          external: false
        },
        {
          title: 'चेंजलॉग',
          description: 'संस्करण अपडेट और परिवर्तन रिकॉर्ड',
          href: '/docs/changelog',
          external: false
        }
      ]
    },
    techSpecs: {
      title: 'तकनीकी विनिर्देश',
      subtitle: 'Gemini CLI की तकनीकी विशेषताओं और समर्थन क्षेत्र के बारे में जानें',
      categories: [
        {
          category: 'समर्थित भाषाएं',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
        },
        {
          category: 'प्लेटफॉर्म समर्थन',
          items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
        },
        {
          category: 'एकीकरण विधियां',
          items: ['कमांड लाइन इंटरफेस', 'Node.js API', 'REST API', 'WebSocket', 'MCP प्रोटोकॉल']
        },
        {
          category: 'एक्सटेंशन प्रकार',
          items: ['भाषा समर्थन', 'टूल एकीकरण', 'कस्टम कमांड', 'UI एक्सटेंशन', 'MCP सर्वर']
        }
      ]
    },
    docSections: {
      title: 'दस्तावेज़ीकरण श्रेणियां',
      subtitle: 'विषय के अनुसार व्यवस्थित विस्तृत तकनीकी दस्तावेज़ीकरण',
      sections: [
        {
          id: 'getting-started',
          title: 'शुरुआत करना',
          description: 'डेवलपर ऑनबोर्डिंग गाइड और वातावरण सेटअप',
          color: 'from-green-500 to-emerald-600',
          articles: [
            {
              title: 'विकास वातावरण सेटअप',
              description: 'स्थानीय विकास वातावरण और निर्भरताओं को कॉन्फ़िगर करें',
              href: '/docs/development-setup',
              tags: ['वातावरण', 'निर्भरताएं']
            },
            {
              title: 'प्रोजेक्ट संरचना',
              description: 'Gemini CLI कोड संगठन संरचना को समझें',
              href: '/docs/project-structure',
              tags: ['आर्किटेक्चर', 'संगठन']
            },
            {
              title: 'बिल्ड और टेस्ट',
              description: 'स्थानीय बिल्ड, टेस्ट और डिबगिंग वर्कफ़्लो',
              href: '/docs/build-and-test',
              tags: ['बिल्ड', 'टेस्टिंग', 'डिबग']
            }
          ]
        },
        {
          id: 'api-reference',
          title: 'API संदर्भ',
          description: 'विस्तृत API दस्तावेज़ीकरण और इंटरफेस विवरण',
          color: 'from-blue-500 to-indigo-600',
          articles: [
            {
              title: 'Core API',
              description: 'मुख्य API इंटरफेस और विधि विवरण',
              href: '/docs/core-api',
              tags: ['API', 'मुख्य']
            },
            {
              title: 'Plugin API',
              description: 'प्लगइन विकास API और एक्सटेंशन इंटरफेस',
              href: '/docs/plugin-api',
              tags: ['प्लगइन', 'एक्सटेंशन']
            },
            {
              title: 'Configuration API',
              description: 'कॉन्फ़िगरेशन प्रबंधन API और विकल्प विवरण',
              href: '/docs/config-api',
              tags: ['कॉन्फ़िग', 'सेटिंग्स']
            }
          ]
        },
        {
          id: 'mcp-protocol',
          title: 'MCP प्रोटोकॉल',
          description: 'Model Context Protocol एकीकरण गाइड',
          color: 'from-purple-500 to-pink-600',
          articles: [
            {
              title: 'MCP प्रोटोकॉल परिचय',
              description: 'Model Context Protocol की बुनियादी अवधारणाएं सीखें',
              href: '/docs/mcp-introduction',
              tags: ['MCP', 'प्रोटोकॉल']
            },
            {
              title: 'MCP सर्वर का कार्यान्वयन',
              description: 'कस्टम MCP सर्वर बनाने के लिए पूर्ण गाइड',
              href: '/docs/mcp-server',
              tags: ['MCP', 'सर्वर', 'कार्यान्वयन']
            },
            {
              title: 'MCP क्लाइंट एकीकरण',
              description: 'एप्लिकेशन में MCP क्लाइंट कार्यक्षमता को एकीकृत करें',
              href: '/docs/mcp-client',
              tags: ['MCP', 'क्लाइंट', 'एकीकरण']
            }
          ]
        },
        {
          id: 'extensions',
          title: 'एक्सटेंशन विकास',
          description: 'कस्टम एक्सटेंशन और प्लगइन बनाएं',
          color: 'from-orange-500 to-red-600',
          articles: [
            {
              title: 'एक्सटेंशन आर्किटेक्चर',
              description: 'एक्सटेंशन सिस्टम डिज़ाइन और आर्किटेक्चर को समझें',
              href: '/docs/extension-architecture',
              tags: ['एक्सटेंशन', 'आर्किटेक्चर']
            },
            {
              title: 'अपना पहला एक्सटेंशन बनाना',
              description: 'शुरुआत से कस्टम एक्सटेंशन बनाएं',
              href: '/docs/first-extension',
              tags: ['एक्सटेंशन', 'ट्यूटोरियल']
            },
            {
              title: 'एक्सटेंशन प्रकाशन गाइड',
              description: 'एक्सटेंशन पैकेजिंग और प्रकाशन के लिए सर्वोत्तम प्रथाएं',
              href: '/docs/extension-publishing',
              tags: ['एक्सटेंशन', 'प्रकाशन']
            }
          ]
        },
        {
          id: 'contributing',
          title: 'योगदान गाइड',
          description: 'प्रोजेक्ट विकास और समुदायिक योगदान में भाग लें',
          color: 'from-teal-500 to-cyan-600',
          articles: [
            {
              title: 'योगदान प्रक्रिया',
              description: 'प्रोजेक्ट में योगदान करना सीखें',
              href: '/docs/contributing-guide',
              tags: ['योगदान', 'प्रक्रिया']
            },
            {
              title: 'कोडिंग मानक',
              description: 'कोड शैली और गुणवत्ता मानक',
              href: '/docs/coding-standards',
              tags: ['मानक', 'गुणवत्ता']
            },
            {
              title: 'Pull Request गाइड',
              description: 'Pull Request बनाने और सबमिट करने की सर्वोत्तम प्रथाएं',
              href: '/docs/pull-request-guide',
              tags: ['PR', 'सर्वोत्तम प्रथाएं']
            }
          ]
        }
      ]
    },
    community: {
      title: 'समुदाय और समर्थन',
      subtitle: 'डेवलपर समुदाय में शामिल हों, सहायता प्राप्त करें और अनुभव साझा करें',
      joinDiscussion: 'चर्चा में शामिल हों',
      reportIssue: 'समस्या रिपोर्ट करें',
      contribute: 'कोड योगदान करें'
    }
  },
  fr: {
    title: 'Documentation Développeur',
    subtitle: 'Plongez dans les détails techniques de Gemini CLI, apprenez à étendre les fonctionnalités, intégrer le protocole MCP et contribuer au projet open source.',
    quickNav: {
      title: 'Navigation Rapide',
      subtitle: 'Accès rapide aux ressources de développement couramment utilisées',
      links: [
        {
          title: 'Dépôt GitHub',
          description: 'Voir le code source et soumettre des problèmes',
          href: 'https://github.com/google-gemini/gemini-cli',
          external: true
        },
        {
          title: 'Référence API',
          description: 'Documentation API complète',
          href: '/docs/api-reference',
          external: false
        },
        {
          title: 'Exemples de Code',
          description: 'Exemples de code pratiques et modèles',
          href: '/docs/examples',
          external: false
        },
        {
          title: 'Journal des Modifications',
          description: 'Mises à jour de version et enregistrements de modifications',
          href: '/docs/changelog',
          external: false
        }
      ]
    },
    techSpecs: {
      title: 'Spécifications Techniques',
      subtitle: 'Découvrez les fonctionnalités techniques de Gemini CLI et la portée du support',
      categories: [
        {
          category: 'Langages Supportés',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
        },
        {
          category: 'Support de Plateforme',
          items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
        },
        {
          category: 'Méthodes d\'Intégration',
          items: ['Interface en Ligne de Commande', 'API Node.js', 'API REST', 'WebSocket', 'Protocole MCP']
        },
        {
          category: 'Types d\'Extension',
          items: ['Support de Langage', 'Intégration d\'Outils', 'Commandes Personnalisées', 'Extensions UI', 'Serveurs MCP']
        }
      ]
    },
    docSections: {
      title: 'Catégories de Documentation',
      subtitle: 'Documentation technique détaillée organisée par sujet',
      sections: [
        {
          id: 'getting-started',
          title: 'Commencer',
          description: 'Guide d\'intégration développeur et configuration d\'environnement',
          color: 'from-green-500 to-emerald-600',
          articles: [
            {
              title: 'Configuration de l\'Environnement de Développement',
              description: 'Configurer l\'environnement de développement local et les dépendances',
              href: '/docs/development-setup',
              tags: ['Environnement', 'Dépendances']
            },
            {
              title: 'Structure du Projet',
              description: 'Comprendre la structure d\'organisation du code Gemini CLI',
              href: '/docs/project-structure',
              tags: ['Architecture', 'Organisation']
            },
            {
              title: 'Construction et Test',
              description: 'Flux de travail de construction, test et débogage local',
              href: '/docs/build-and-test',
              tags: ['Construction', 'Test', 'Débogage']
            }
          ]
        },
        {
          id: 'api-reference',
          title: 'Référence API',
          description: 'Documentation API détaillée et descriptions d\'interface',
          color: 'from-blue-500 to-indigo-600',
          articles: [
            {
              title: 'API Core',
              description: 'Interfaces API principales et descriptions de méthodes',
              href: '/docs/core-api',
              tags: ['API', 'Core']
            },
            {
              title: 'API Plugin',
              description: 'API de développement de plugin et interfaces d\'extension',
              href: '/docs/plugin-api',
              tags: ['Plugin', 'Extension']
            },
            {
              title: 'API de Configuration',
              description: 'API de gestion de configuration et descriptions d\'options',
              href: '/docs/config-api',
              tags: ['Config', 'Paramètres']
            }
          ]
        },
        {
          id: 'mcp-protocol',
          title: 'Protocole MCP',
          description: 'Guide d\'intégration du Model Context Protocol',
          color: 'from-purple-500 to-pink-600',
          articles: [
            {
              title: 'Introduction au Protocole MCP',
              description: 'Apprendre les concepts de base du Model Context Protocol',
              href: '/docs/mcp-introduction',
              tags: ['MCP', 'Protocole']
            },
            {
              title: 'Implémentation du Serveur MCP',
              description: 'Guide complet pour créer des serveurs MCP personnalisés',
              href: '/docs/mcp-server',
              tags: ['MCP', 'Serveur', 'Implémentation']
            },
            {
              title: 'Intégration Client MCP',
              description: 'Intégrer la fonctionnalité client MCP dans les applications',
              href: '/docs/mcp-client',
              tags: ['MCP', 'Client', 'Intégration']
            }
          ]
        },
        {
          id: 'extensions',
          title: 'Développement d\'Extensions',
          description: 'Créer des extensions et plugins personnalisés',
          color: 'from-orange-500 to-red-600',
          articles: [
            {
              title: 'Architecture d\'Extension',
              description: 'Comprendre la conception et l\'architecture du système d\'extension',
              href: '/docs/extension-architecture',
              tags: ['Extension', 'Architecture']
            },
            {
              title: 'Créer Votre Première Extension',
              description: 'Construire des extensions personnalisées à partir de zéro',
              href: '/docs/first-extension',
              tags: ['Extension', 'Tutoriel']
            },
            {
              title: 'Guide de Publication d\'Extension',
              description: 'Meilleures pratiques pour empaqueter et publier des extensions',
              href: '/docs/extension-publishing',
              tags: ['Extension', 'Publication']
            }
          ]
        },
        {
          id: 'contributing',
          title: 'Guide de Contribution',
          description: 'Participer au développement du projet et à la contribution communautaire',
          color: 'from-teal-500 to-cyan-600',
          articles: [
            {
              title: 'Processus de Contribution',
              description: 'Apprendre comment contribuer au projet',
              href: '/docs/contributing-guide',
              tags: ['Contribution', 'Processus']
            },
            {
              title: 'Standards de Codage',
              description: 'Style de code et standards de qualité',
              href: '/docs/coding-standards',
              tags: ['Standards', 'Qualité']
            },
            {
              title: 'Guide Pull Request',
              description: 'Meilleures pratiques pour créer et soumettre des Pull Requests',
              href: '/docs/pull-request-guide',
              tags: ['PR', 'Meilleures Pratiques']
            }
          ]
        }
      ]
    },
    community: {
      title: 'Communauté et Support',
      subtitle: 'Rejoignez la communauté des développeurs, obtenez de l\'aide et partagez des expériences',
      joinDiscussion: 'Rejoindre la Discussion',
      reportIssue: 'Signaler un Problème',
      contribute: 'Contribuer au Code'
    }
  }
};

// Function to add translations to DocsContent component
function addDocsTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', 'DocsContent.tsx');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the position to insert new translations (before the closing bracket of translations object)
    const insertPosition = content.lastIndexOf('    }\n    return translations[locale] || translations.en');
    
    if (insertPosition === -1) {
      console.error('❌ Could not find insertion point in DocsContent.tsx');
      return;
    }
    
    // Generate translation strings for each language
    let translationStrings = '';
    
    Object.keys(additionalTranslations).forEach(langCode => {
      const translation = additionalTranslations[langCode];
      translationStrings += `,\n      ${langCode}: ${JSON.stringify(translation, null, 8).replace(/^/gm, '      ').trim()}`;
    });
    
    // Insert the new translations
    const beforeInsert = content.substring(0, insertPosition);
    const afterInsert = content.substring(insertPosition);
    
    const newContent = beforeInsert + translationStrings + '\n' + afterInsert;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('✅ Successfully added Hindi and French Docs translations');
    
  } catch (error) {
    console.error('❌ Error adding Docs translations:', error.message);
  }
}

// Run the function
console.log('🚀 Adding Docs translations for Hindi and French...\n');
addDocsTranslations();
console.log('\n🎯 Docs translations update completed!');
