const fs = require('fs');
const path = require('path');

// Complete MCP Protocol translations for Hindi and French
const mcpProtocolTranslations = {
  hi: {
    "hero": {
      "title": "MCP प्रोटोकॉल उपयोग",
      "subtitle": "Gemini CLI कार्यक्षमता बढ़ाने के लिए Model Context Protocol में महारत हासिल करें",
      "advanced": "उन्नत सुविधाएं",
      "extensible": "विस्तार योग्य"
    },
    "overview": {
      "title": "प्रोटोकॉल अवलोकन",
      "description": "Model Context Protocol (MCP) एक खुला मानक है जो AI एप्लिकेशन को बाहरी डेटा स्रोतों और उपकरणों के साथ सुरक्षित और नियंत्रित तरीके से एकीकृत करने की अनुमति देता है।"
    },
    "concepts": {
      "overview": {
        "title": "MCP प्रोटोकॉल अवलोकन",
        "description": "Model Context Protocol की बुनियादी अवधारणाएं और आर्किटेक्चर",
        "definition": "MCP एक खुला मानक है जो AI एप्लिकेशन को बाहरी डेटा स्रोतों और उपकरणों के साथ सुरक्षित और नियंत्रित तरीके से एकीकृत करने की अनुमति देता है।",
        "components": {
          "host": {
            "name": "MCP होस्ट",
            "description": "AI एप्लिकेशन (जैसे Gemini CLI)",
            "role": "कनेक्शन शुरू करता है और MCP सर्वर द्वारा प्रदान की गई कार्यक्षमता का उपयोग करता है"
          },
          "server": {
            "name": "MCP सर्वर",
            "description": "विशिष्ट कार्यक्षमता प्रदान करने वाली स्वतंत्र प्रक्रिया",
            "role": "होस्ट उपयोग के लिए उपकरण, संसाधन और प्रॉम्प्ट को उजागर करता है"
          },
          "transport": {
            "name": "ट्रांसपोर्ट लेयर",
            "description": "होस्ट और सर्वर के बीच संचार तंत्र",
            "role": "stdio, SSE, और WebSocket जैसे प्रोटोकॉल का समर्थन करता है"
          }
        }
      },
      "capabilities": {
        "title": "मुख्य क्षमताएं",
        "description": "तीन मुख्य प्रकार की कार्यक्षमता जो MCP सर्वर प्रदान कर सकते हैं",
        "definition": "MCP सर्वर तीन मुख्य कार्यक्षमता प्रकारों के माध्यम से AI एप्लिकेशन को विस्तार क्षमताएं प्रदान करते हैं।",
        "types": {
          "tools": {
            "name": "उपकरण",
            "description": "निष्पादन योग्य फ़ंक्शन जो AI को ऑपरेशन करने की अनुमति देते हैं",
            "examples": "फ़ाइल ऑपरेशन, API कॉल, डेटाबेस क्वेरी, आदि।"
          },
          "resources": {
            "name": "संसाधन",
            "description": "पठनीय डेटा स्रोत जो AI को संदर्भित जानकारी प्रदान करते हैं",
            "examples": "फ़ाइल सामग्री, डेटाबेस रिकॉर्ड, API प्रतिक्रियाएं, आदि।"
          },
          "prompts": {
            "name": "प्रॉम्प्ट",
            "description": "पूर्वनिर्धारित प्रॉम्प्ट टेम्प्लेट जो संरचित इंटरैक्शन विधियां प्रदान करते हैं",
            "examples": "कोड समीक्षा टेम्प्लेट, दस्तावेज़ीकरण जेनरेशन टेम्प्लेट, आदि।"
          }
        }
      },
      "configuration": {
        "title": "कॉन्फ़िगरेशन सेटअप",
        "description": "MCP सर्वर को कॉन्फ़िगर और उपयोग करने का तरीका",
        "definition": "MCP सर्वर को कॉन्फ़िगर करने के लिए तीन चरणों की आवश्यकता होती है: इंस्टॉलेशन, कॉन्फ़िगरेशन, और सत्यापन।",
        "steps": {
          "install": {
            "step": "1. MCP सर्वर इंस्टॉल करें",
            "description": "आवश्यक MCP सर्वर इंस्टॉल करने के लिए npm या अन्य पैकेज मैनेजर का उपयोग करें",
            "command": "npm install -g @modelcontextprotocol/server-filesystem"
          },
          "configure": {
            "step": "2. Gemini CLI कॉन्फ़िगर करें",
            "description": "Gemini CLI कॉन्फ़िग फ़ाइल में MCP सर्वर कॉन्फ़िगरेशन जोड़ें",
            "command": "gemini config mcp add filesystem"
          },
          "verify": {
            "step": "3. कनेक्शन सत्यापित करें",
            "description": "परीक्षण करें कि MCP सर्वर सही तरीके से काम कर रहा है",
            "command": "gemini mcp list"
          }
        }
      }
    },
    "examples": {
      "title": "व्यावहारिक उदाहरण",
      "filesystem": {
        "title": "फ़ाइलसिस्टम सर्वर",
        "description": "फ़ाइल ऑपरेशन के लिए MCP फ़ाइलसिस्टम सर्वर का उपयोग करें",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-filesystem",
          "installDesc": "फ़ाइलसिस्टम MCP सर्वर इंस्टॉल करें",
          "configure": "gemini config mcp add filesystem --path /your/project/path",
          "configureDesc": "फ़ाइलसिस्टम सर्वर पथ कॉन्फ़िगर करें",
          "use": "कृपया प्रोजेक्ट में सभी TypeScript फ़ाइलों का विश्लेषण करने में मेरी सहायता करें",
          "useDesc": "AI अब निर्दिष्ट पथ में फ़ाइलों तक पहुंच और विश्लेषण कर सकता है"
        }
      },
      "database": {
        "title": "डेटाबेस सर्वर",
        "description": "क्वेरी और विश्लेषण के लिए डेटाबेस से कनेक्ट करें",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-sqlite",
          "installDesc": "SQLite MCP सर्वर इंस्टॉल करें",
          "configure": "gemini config mcp add sqlite --db ./data.db",
          "configureDesc": "डेटाबेस कनेक्शन कॉन्फ़िगर करें",
          "query": "उपयोगकर्ता तालिका से 10 सबसे हाल ही में पंजीकृत उपयोगकर्ताओं की क्वेरी करें",
          "queryDesc": "AI SQL क्वेरी निष्पादित कर सकता है और परिणामों का विश्लेषण कर सकता है"
        }
      }
    },
    "bestPractices": {
      "title": "सर्वोत्तम प्रथाएं",
      "security": {
        "title": "सुरक्षा विचार",
        "content": "केवल विश्वसनीय MCP सर्वर से कनेक्ट करें, नियमित रूप से सर्वर अनुमतियों की समीक्षा करें, संवेदनशील डेटा को उजागर करने से बचें।"
      },
      "performance": {
        "title": "प्रदर्शन अनुकूलन",
        "content": "सर्वर संख्या को उचित रूप से कॉन्फ़िगर करें, संसाधन उपयोग की निगरानी करें, डेटा ट्रांसमिशन दक्षता का अनुकूलन करें।"
      },
      "debugging": {
        "title": "डिबगिंग सुझाव",
        "content": "विस्तृत लॉगिंग मोड का उपयोग करें, सर्वर स्थिति की जांच करें, कॉन्फ़िगरेशन फ़ाइल प्रारूप को सत्यापित करें।"
      }
    },
    "nextSteps": {
      "title": "अगले कदम",
      "description": "अब जब आप MCP प्रोटोकॉल को समझते हैं, तो आप अधिक उन्नत कॉन्फ़िगरेशन और एकीकरण विधियों को सीखना जारी रख सकते हैं:",
      "advancedConfig": "उन्नत कॉन्फ़िगरेशन",
      "integration": "एकीकरण गाइड",
      "backToGuides": "गाइड पर वापस जाएं"
    }
  },
  fr: {
    "hero": {
      "title": "Utilisation du Protocole MCP",
      "subtitle": "Maîtrisez le Model Context Protocol pour étendre les fonctionnalités de Gemini CLI",
      "advanced": "Fonctionnalités Avancées",
      "extensible": "Extensible"
    },
    "overview": {
      "title": "Aperçu du Protocole",
      "description": "Le Model Context Protocol (MCP) est un standard ouvert qui permet aux applications IA de s'intégrer de manière sécurisée et contrôlée avec des sources de données et des outils externes."
    },
    "concepts": {
      "overview": {
        "title": "Aperçu du Protocole MCP",
        "description": "Concepts de base et architecture du Model Context Protocol",
        "definition": "MCP est un standard ouvert qui permet aux applications IA de s'intégrer de manière sécurisée et contrôlée avec des sources de données et des outils externes.",
        "components": {
          "host": {
            "name": "Hôte MCP",
            "description": "Application IA (comme Gemini CLI)",
            "role": "Initie les connexions et utilise les fonctionnalités fournies par les serveurs MCP"
          },
          "server": {
            "name": "Serveur MCP",
            "description": "Processus indépendant fournissant des fonctionnalités spécifiques",
            "role": "Expose des outils, ressources et prompts pour l'utilisation par l'hôte"
          },
          "transport": {
            "name": "Couche de Transport",
            "description": "Mécanisme de communication entre l'hôte et le serveur",
            "role": "Supporte des protocoles comme stdio, SSE et WebSocket"
          }
        }
      },
      "capabilities": {
        "title": "Capacités Principales",
        "description": "Trois types principaux de fonctionnalités que les serveurs MCP peuvent fournir",
        "definition": "Les serveurs MCP fournissent des capacités d'extension aux applications IA à travers trois types principaux de fonctionnalités.",
        "types": {
          "tools": {
            "name": "Outils",
            "description": "Fonctions exécutables qui permettent à l'IA d'effectuer des opérations",
            "examples": "Opérations de fichiers, appels API, requêtes de base de données, etc."
          },
          "resources": {
            "name": "Ressources",
            "description": "Sources de données lisibles qui fournissent des informations contextuelles à l'IA",
            "examples": "Contenus de fichiers, enregistrements de base de données, réponses API, etc."
          },
          "prompts": {
            "name": "Prompts",
            "description": "Modèles de prompts prédéfinis fournissant des méthodes d'interaction structurées",
            "examples": "Modèles de révision de code, modèles de génération de documentation, etc."
          }
        }
      },
      "configuration": {
        "title": "Configuration Setup",
        "description": "Comment configurer et utiliser les serveurs MCP",
        "definition": "Configurer les serveurs MCP nécessite trois étapes : installation, configuration et vérification.",
        "steps": {
          "install": {
            "step": "1. Installer le Serveur MCP",
            "description": "Utilisez npm ou d'autres gestionnaires de paquets pour installer les serveurs MCP requis",
            "command": "npm install -g @modelcontextprotocol/server-filesystem"
          },
          "configure": {
            "step": "2. Configurer Gemini CLI",
            "description": "Ajoutez la configuration du serveur MCP au fichier de config de Gemini CLI",
            "command": "gemini config mcp add filesystem"
          },
          "verify": {
            "step": "3. Vérifier la Connexion",
            "description": "Testez si le serveur MCP fonctionne correctement",
            "command": "gemini mcp list"
          }
        }
      }
    },
    "examples": {
      "title": "Exemples Pratiques",
      "filesystem": {
        "title": "Serveur Filesystem",
        "description": "Utilisez le serveur filesystem MCP pour les opérations de fichiers",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-filesystem",
          "installDesc": "Installer le serveur MCP filesystem",
          "configure": "gemini config mcp add filesystem --path /your/project/path",
          "configureDesc": "Configurer le chemin du serveur filesystem",
          "use": "Veuillez m'aider à analyser tous les fichiers TypeScript du projet",
          "useDesc": "L'IA peut maintenant accéder et analyser les fichiers dans le chemin spécifié"
        }
      },
      "database": {
        "title": "Serveur Base de Données",
        "description": "Connectez-vous à la base de données pour les requêtes et analyses",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-sqlite",
          "installDesc": "Installer le serveur MCP SQLite",
          "configure": "gemini config mcp add sqlite --db ./data.db",
          "configureDesc": "Configurer la connexion à la base de données",
          "query": "Requête des 10 utilisateurs les plus récemment enregistrés de la table utilisateur",
          "queryDesc": "L'IA peut exécuter des requêtes SQL et analyser les résultats"
        }
      }
    },
    "bestPractices": {
      "title": "Meilleures Pratiques",
      "security": {
        "title": "Considérations de Sécurité",
        "content": "Ne vous connectez qu'à des serveurs MCP de confiance, révisez régulièrement les permissions des serveurs, évitez d'exposer des données sensibles."
      },
      "performance": {
        "title": "Optimisation des Performances",
        "content": "Configurez le nombre de serveurs de manière raisonnable, surveillez l'utilisation des ressources, optimisez l'efficacité de transmission des données."
      },
      "debugging": {
        "title": "Conseils de Débogage",
        "content": "Utilisez le mode de journalisation détaillé, vérifiez le statut du serveur, validez le format du fichier de configuration."
      }
    },
    "nextSteps": {
      "title": "Prochaines Étapes",
      "description": "Maintenant que vous comprenez le protocole MCP, vous pouvez continuer à apprendre des méthodes de configuration et d'intégration plus avancées :",
      "advancedConfig": "Configuration Avancée",
      "integration": "Guide d'Intégration",
      "backToGuides": "Retour aux Guides"
    }
  }
};

// Function to apply MCP Protocol translations
function applyMcpProtocolTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = mcpProtocolTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No MCP Protocol translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesMcpProtocol with professional translation
    data.guidesMcpProtocol = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied MCP Protocol translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const mcpProtocol = newData.guidesMcpProtocol;
    console.log(`   - Hero title: "${mcpProtocol?.hero?.title || 'N/A'}"`);
    console.log(`   - Overview: ${mcpProtocol?.overview ? 'Yes' : 'No'}`);
    console.log(`   - Concepts: ${mcpProtocol?.concepts ? 'Yes' : 'No'}`);
    console.log(`   - Examples: ${mcpProtocol?.examples ? 'Yes' : 'No'}`);
    console.log(`   - Best practices: ${mcpProtocol?.bestPractices ? 'Yes' : 'No'}`);
    
  } catch (error) {
    console.error(`❌ Error applying MCP Protocol translations for ${langCode}:`, error.message);
  }
}

// Apply MCP Protocol translations
console.log('🚀 Applying professional MCP Protocol translations...\n');

Object.keys(mcpProtocolTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    fr: 'French'
  };
  
  console.log(`Applying MCP Protocol translations for ${langNames[langCode]}...`);
  applyMcpProtocolTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional MCP Protocol translations applied!');
console.log('🎯 Hindi and French now have complete professional content.');
