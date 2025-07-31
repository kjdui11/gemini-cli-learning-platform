const fs = require('fs');
const path = require('path');

// Additional FAQ translations for remaining languages
const additionalTranslations = {
  fr: {
    title: 'Questions Fréquemment Posées',
    subtitle: 'Questions courantes et solutions pour utiliser Gemini CLI. Trouvez des réponses rapides pour vous aider à résoudre les problèmes.',
    quickNav: {
      title: 'Navigation Rapide',
      subtitle: 'Vous ne trouvez pas de réponse ? Essayez ces ressources',
      links: {
        installation: { title: 'Guide d\'Installation', desc: 'Étapes d\'installation détaillées' },
        guides: { title: 'Guides Utilisateur', desc: 'Du débutant à l\'avancé' },
        commands: { title: 'Référence des Commandes', desc: 'Liste complète des commandes' },
        issues: { title: 'Signaler des Problèmes', desc: 'GitHub Issues' }
      }
    },
    contact: {
      title: 'Avez-vous d\'Autres Questions ?',
      subtitle: 'Si vous n\'avez pas trouvé de réponse, n\'hésitez pas à nous contacter par les moyens suivants',
      discussion: 'Discussion Communautaire',
      submit: 'Soumettre un Problème'
    },
    faqData: [
      {
        category: 'Installation et Configuration',
        questions: [
          {
            q: 'Comment installer Gemini CLI ?',
            a: 'Assurez-vous que Node.js 20+ est installé, puis utilisez npx @google/generative-ai-cli pour exécuter directement, ou npm install -g @google/generative-ai-cli pour une installation globale.'
          },
          {
            q: 'Que faire en cas d\'erreurs de permissions lors de l\'installation ?',
            a: 'Les utilisateurs Windows doivent exécuter en tant qu\'administrateur, les utilisateurs macOS/Linux utilisent sudo ou configurent le répertoire global npm vers le répertoire utilisateur. L\'utilisation de npx est recommandée pour éviter les problèmes de permissions.'
          },
          {
            q: 'Comment configurer l\'authentification du compte Google ?',
            a: 'Exécutez npx @google/generative-ai-cli auth, connectez-vous à votre compte Google dans le navigateur et autorisez l\'accès, puis utilisez auth status pour vérifier le statut d\'authentification.'
          }
        ]
      },
      {
        category: 'Problèmes d\'Utilisation',
        questions: [
          {
            q: 'Comment commencer la première conversation ?',
            a: 'Utilisez npx @google/generative-ai-cli chat pour commencer une conversation interactive, ou utilisez ask "question" pour poser directement, vous pouvez aussi utiliser la commande analyze pour analyser des fichiers.'
          },
          {
            q: 'Quels langages de programmation sont supportés ?',
            a: 'Gemini CLI supporte les langages de programmation mainstream comme JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, ainsi que HTML/CSS, SQL, Markdown, etc.'
          },
          {
            q: 'Comment améliorer la qualité des réponses IA ?',
            a: 'Fournissez un contexte clair, utilisez des descriptions de questions spécifiques, posez des questions complexes étape par étape, et vérifiez et itérez les résultats générés.'
          }
        ]
      },
      {
        category: 'Configuration et Personnalisation',
        questions: [
          {
            q: 'Comment personnaliser la configuration CLI ?',
            a: 'Utilisez config list pour voir la configuration, config set pour définir les paramètres (comme le modèle, la température, les tokens max), config reset pour réinitialiser aux valeurs par défaut.'
          },
          {
            q: 'Comment intégrer dans les flux de travail existants ?',
            a: 'Peut être intégré via l\'intégration de scripts, Git Hooks, pipelines CI/CD, ou en créant des raccourcis personnalisés et des tâches dans les éditeurs.'
          },
          {
            q: 'Comment utiliser le protocole MCP pour étendre les fonctionnalités ?',
            a: 'MCP est un protocole de communication de modèle IA standardisé qui supporte l\'intégration d\'outils personnalisés comme les requêtes de base de données, les appels d\'API, les opérations de fichiers.'
          }
        ]
      },
      {
        category: 'Dépannage',
        questions: [
          {
            q: 'Que faire quand les commandes échouent ou deviennent non réactives ?',
            a: 'Vérifiez la connexion réseau, vérifiez le statut d\'authentification, mettez à jour vers la dernière version, videz le cache npm, utilisez --verbose pour voir les informations d\'erreur détaillées.'
          },
          {
            q: 'Comment résoudre les problèmes de quota ou de limite d\'API ?',
            a: 'Comprenez les types de limites, optimisez la fréquence d\'utilisation et la précision des prompts, vérifiez l\'utilisation dans Google AI Studio, considérez la mise à niveau vers des plans payants.'
          },
          {
            q: 'Quelles sont les considérations pour l\'utilisation en entreprise ?',
            a: 'Attention à la sécurité (n\'incluez pas d\'informations sensibles), configurez le proxy réseau, assurez la conformité, établissez des directives d\'utilisation d\'équipe et les meilleures pratiques.'
          }
        ]
      }
    ]
  },
  de: {
    title: 'Häufig Gestellte Fragen',
    subtitle: 'Häufige Fragen und Lösungen zur Verwendung von Gemini CLI. Finden Sie schnelle Antworten, um Probleme zu lösen.',
    quickNav: {
      title: 'Schnellnavigation',
      subtitle: 'Keine Antwort gefunden? Versuchen Sie diese Ressourcen',
      links: {
        installation: { title: 'Installationsanleitung', desc: 'Detaillierte Installationsschritte' },
        guides: { title: 'Benutzerhandbücher', desc: 'Von Anfänger bis Fortgeschritten' },
        commands: { title: 'Befehlsreferenz', desc: 'Vollständige Befehlsliste' },
        issues: { title: 'Probleme Melden', desc: 'GitHub Issues' }
      }
    },
    contact: {
      title: 'Haben Sie Andere Fragen?',
      subtitle: 'Wenn Sie keine Antwort gefunden haben, zögern Sie nicht, uns über die folgenden Wege zu kontaktieren',
      discussion: 'Community-Diskussion',
      submit: 'Problem Einreichen'
    },
    faqData: [
      {
        category: 'Installation und Einrichtung',
        questions: [
          {
            q: 'Wie installiert man Gemini CLI?',
            a: 'Stellen Sie sicher, dass Node.js 20+ installiert ist, verwenden Sie dann npx @google/generative-ai-cli für direkte Ausführung oder npm install -g @google/generative-ai-cli für globale Installation.'
          },
          {
            q: 'Was tun bei Berechtigungsfehlern während der Installation?',
            a: 'Windows-Benutzer sollten als Administrator ausführen, macOS/Linux-Benutzer verwenden sudo oder konfigurieren das npm-Globalverzeichnis zum Benutzerverzeichnis. Die Verwendung von npx wird empfohlen, um Berechtigungsprobleme zu vermeiden.'
          },
          {
            q: 'Wie konfiguriert man die Google-Konto-Authentifizierung?',
            a: 'Führen Sie npx @google/generative-ai-cli auth aus, melden Sie sich in Ihrem Google-Konto im Browser an und autorisieren Sie den Zugriff, verwenden Sie dann auth status zur Überprüfung des Authentifizierungsstatus.'
          }
        ]
      },
      {
        category: 'Nutzungsprobleme',
        questions: [
          {
            q: 'Wie startet man das erste Gespräch?',
            a: 'Verwenden Sie npx @google/generative-ai-cli chat für interaktive Gespräche oder ask "Frage" für direkte Fragen, Sie können auch den analyze-Befehl zur Dateianalyse verwenden.'
          },
          {
            q: 'Welche Programmiersprachen werden unterstützt?',
            a: 'Gemini CLI unterstützt Mainstream-Programmiersprachen wie JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby sowie HTML/CSS, SQL, Markdown usw.'
          },
          {
            q: 'Wie verbessert man die Qualität der KI-Antworten?',
            a: 'Bieten Sie klaren Kontext, verwenden Sie spezifische Fragebeschreibungen, stellen Sie komplexe Fragen schrittweise und überprüfen und iterieren Sie generierte Ergebnisse.'
          }
        ]
      },
      {
        category: 'Konfiguration und Anpassung',
        questions: [
          {
            q: 'Wie passt man die CLI-Konfiguration an?',
            a: 'Verwenden Sie config list zur Anzeige der Konfiguration, config set zum Setzen von Parametern (wie Modell, Temperatur, Max-Token), config reset zum Zurücksetzen auf Standardwerte.'
          },
          {
            q: 'Wie integriert man in bestehende Workflows?',
            a: 'Kann über Skript-Integration, Git Hooks, CI/CD-Pipelines integriert werden oder durch Erstellen benutzerdefinierter Verknüpfungen und Aufgaben in Editoren.'
          },
          {
            q: 'Wie verwendet man das MCP-Protokoll zur Funktionserweiterung?',
            a: 'MCP ist ein standardisiertes KI-Modell-Kommunikationsprotokoll, das benutzerdefinierte Tool-Integration wie Datenbankabfragen, API-Aufrufe, Dateioperationen unterstützt.'
          }
        ]
      },
      {
        category: 'Fehlerbehebung',
        questions: [
          {
            q: 'Was tun, wenn Befehle fehlschlagen oder nicht reagieren?',
            a: 'Überprüfen Sie die Netzwerkverbindung, verifizieren Sie den Authentifizierungsstatus, aktualisieren Sie auf die neueste Version, leeren Sie den npm-Cache, verwenden Sie --verbose für detaillierte Fehlerinformationen.'
          },
          {
            q: 'Wie löst man API-Kontingent- oder Limitprobleme?',
            a: 'Verstehen Sie Limittypen, optimieren Sie Nutzungshäufigkeit und Prompt-Präzision, überprüfen Sie die Nutzung in Google AI Studio, erwägen Sie ein Upgrade auf kostenpflichtige Pläne.'
          },
          {
            q: 'Was sind die Überlegungen für den Unternehmenseinsatz?',
            a: 'Achten Sie auf Sicherheit (keine sensiblen Informationen einschließen), konfigurieren Sie Netzwerk-Proxy, stellen Sie Compliance sicher, etablieren Sie Team-Nutzungsrichtlinien und Best Practices.'
          }
        ]
      }
    ]
  }
};

// Function to add translations to FAQContent component
function addFAQTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', 'FAQContent.tsx');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the position to insert new translations (before the closing bracket of translations object)
    const insertPosition = content.lastIndexOf('    }\n    return translations[locale] || translations.en');
    
    if (insertPosition === -1) {
      console.error('❌ Could not find insertion point in FAQContent.tsx');
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
    console.log('✅ Successfully added French and German FAQ translations');
    
  } catch (error) {
    console.error('❌ Error adding FAQ translations:', error.message);
  }
}

// Run the function
console.log('🚀 Adding FAQ translations for French and German...\n');
addFAQTranslations();
console.log('\n🎯 FAQ translations update completed!');
