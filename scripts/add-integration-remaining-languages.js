const fs = require('fs');
const path = require('path');

// Complete integration translations for remaining languages (excluding English and Chinese)
const integrationTranslations = {
  fr: {
    "title": "Intégration avec d'Autres Outils",
    "subtitle": "Intégrez Gemini CLI dans votre flux de travail de développement",
    "description": "Apprenez à intégrer de manière transparente Gemini CLI dans votre chaîne d'outils de développement existante, vos IDE et vos processus d'automatisation pour augmenter la productivité.",
    "overview": {
      "title": "Aperçu de l'Intégration",
      "description": "Gemini CLI fournit plusieurs méthodes d'intégration, vous permettant de tirer pleinement parti des capacités puissantes de l'IA dans n'importe quel environnement de développement. Qu'il s'agisse de plugins IDE, de pipelines CI/CD ou de scripts d'automatisation, l'intégration est sans effort."
    },
    "typesTitle": "Types d'Intégration",
    "typesDescription": "Choisissez la méthode d'intégration qui convient le mieux à votre flux de travail",
    "types": [
      {
        "icon": "ide",
        "title": "Intégration IDE",
        "description": "Utilisez Gemini CLI directement dans votre éditeur de code préféré",
        "features": [
          { "name": "Extension VS Code" },
          { "name": "Plugin IntelliJ" },
          { "name": "Intégration Vim/Neovim" },
          { "name": "Support Sublime Text" }
        ]
      },
      {
        "icon": "ci",
        "title": "Intégration CI/CD",
        "description": "Utilisez l'assistance IA dans les pipelines d'intégration et de déploiement continus",
        "features": [
          { "name": "GitHub Actions" },
          { "name": "GitLab CI" },
          { "name": "Plugin Jenkins" },
          { "name": "Azure DevOps" }
        ]
      },
      {
        "icon": "automation",
        "title": "Scripts d'Automatisation",
        "description": "Automatisez vos tâches de développement grâce à des scripts et des outils",
        "features": [
          { "name": "Intégration Script Shell" },
          { "name": "Automatisation Python" },
          { "name": "Outils Node.js" },
          { "name": "Support Makefile" }
        ]
      },
      {
        "icon": "deployment",
        "title": "Intégration de Déploiement",
        "description": "Tirez parti de l'IA pour l'analyse et l'optimisation du code pendant le déploiement",
        "features": [
          { "name": "Intégration Docker" },
          { "name": "Support Kubernetes" },
          { "name": "Intégration Plateforme Cloud" },
          { "name": "Surveillance et Journalisation" }
        ]
      }
    ],
    "workflow": {
      "title": "Flux de Travail d'Intégration",
      "description": "Suivez ces étapes pour intégrer Gemini CLI dans votre processus de développement",
      "steps": [
        {
          "title": "Configuration de l'Environnement",
          "description": "Assurez-vous que votre environnement de développement a Gemini CLI correctement configuré",
          "example": "# Vérifier l'installation\ngemini --version\n\n# Configurer la clé API\ngemini config set api-key YOUR_API_KEY"
        },
        {
          "title": "Choisir la Méthode d'Intégration",
          "description": "Sélectionnez la méthode d'intégration la plus appropriée selon vos besoins",
          "example": "# Exemple d'intégration IDE\n# Installer l'extension VS Code\ncode --install-extension gemini-cli\n\n# Ou configurer un alias de ligne de commande\nalias ai='gemini chat'"
        },
        {
          "title": "Configurer le Flux de Travail",
          "description": "Configurez les scripts d'automatisation et les flux de travail",
          "example": "# Exemple GitHub Actions\nname: AI Code Review\non: [pull_request]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: AI Review\n        run: gemini review --files changed"
        },
        {
          "title": "Tester et Optimiser",
          "description": "Testez l'efficacité de l'intégration et ajustez selon les besoins",
          "example": "# Tester l'intégration\ngemini test-integration\n\n# Voir les statistiques d'utilisation\ngemini stats --integration"
        }
      ]
    },
    "toolsTitle": "Intégrations d'Outils Populaires",
    "toolsDescription": "Apprenez à intégrer avec des outils de développement populaires",
    "tools": [
      {
        "name": "VS Code",
        "description": "Utilisez Gemini CLI dans Visual Studio Code",
        "steps": [
          { "text": "Installer l'extension Gemini CLI" },
          { "text": "Configurer la clé API" },
          { "text": "Utiliser les raccourcis clavier pour invoquer les fonctionnalités IA" },
          { "text": "Personnaliser les commandes et paramètres" }
        ]
      },
      {
        "name": "Git Hooks",
        "description": "Intégrez les vérifications IA dans le flux de travail Git",
        "steps": [
          { "text": "Créer un hook pre-commit" },
          { "text": "Configurer les vérifications de qualité du code" },
          { "text": "Configurer les tests automatisés" },
          { "text": "Intégrer la génération de messages de commit" }
        ]
      },
      {
        "name": "Docker",
        "description": "Utilisez Gemini CLI dans des environnements conteneurisés",
        "steps": [
          { "text": "Créer une image avec Gemini CLI" },
          { "text": "Configurer les variables d'environnement" },
          { "text": "Configurer les montages de volumes" },
          { "text": "Optimiser les performances du conteneur" }
        ]
      }
    ],
    "bestPracticesTitle": "Meilleures Pratiques d'Intégration",
    "bestPracticesDescription": "Suivez ces meilleures pratiques pour une expérience d'intégration optimale",
    "bestPractices": [
      {
        "title": "Configuration de Sécurité",
        "description": "Assurez un stockage sécurisé des clés API et des informations sensibles en utilisant des variables d'environnement ou des services de gestion de clés."
      },
      {
        "title": "Optimisation des Performances",
        "description": "Configurez correctement les paramètres de mise en cache et de concurrence pour éviter les appels API excessifs qui pourraient impacter l'expérience de développement."
      },
      {
        "title": "Gestion des Erreurs",
        "description": "Implémentez des mécanismes de gestion d'erreurs complets pour s'assurer que les échecs d'intégration n'affectent pas le flux de travail de développement normal."
      },
      {
        "title": "Collaboration d'Équipe",
        "description": "Établissez des standards d'intégration unifiés et des configurations pour l'équipe afin que tous les membres puissent l'utiliser correctement."
      }
    ],
    "nextSteps": {
      "title": "Prochaines Étapes",
      "description": "Continuez à apprendre des fonctionnalités plus avancées et les meilleures pratiques",
      "advancedConfig": "Configuration Avancée",
      "codeRefactoring": "Refactorisation de Code"
    }
  },
  de: {
    "title": "Integration mit Anderen Tools",
    "subtitle": "Integrieren Sie Gemini CLI in Ihren Entwicklungsworkflow",
    "description": "Lernen Sie, wie Sie Gemini CLI nahtlos in Ihre bestehende Entwicklungs-Toolchain, IDEs und Automatisierungsprozesse integrieren, um die Produktivität zu steigern.",
    "overview": {
      "title": "Integrationsübersicht",
      "description": "Gemini CLI bietet mehrere Integrationsmethoden, die es Ihnen ermöglichen, die mächtigen KI-Fähigkeiten in jeder Entwicklungsumgebung voll auszuschöpfen. Ob IDE-Plugins, CI/CD-Pipelines oder Automatisierungsskripte - die Integration ist mühelos."
    },
    "typesTitle": "Integrationstypen",
    "typesDescription": "Wählen Sie die Integrationsmethode, die am besten zu Ihrem Workflow passt",
    "types": [
      {
        "icon": "ide",
        "title": "IDE-Integration",
        "description": "Verwenden Sie Gemini CLI direkt in Ihrem bevorzugten Code-Editor",
        "features": [
          { "name": "VS Code Erweiterung" },
          { "name": "IntelliJ Plugin" },
          { "name": "Vim/Neovim Integration" },
          { "name": "Sublime Text Unterstützung" }
        ]
      },
      {
        "icon": "ci",
        "title": "CI/CD-Integration",
        "description": "Nutzen Sie KI-Unterstützung in kontinuierlichen Integrations- und Deployment-Pipelines",
        "features": [
          { "name": "GitHub Actions" },
          { "name": "GitLab CI" },
          { "name": "Jenkins Plugin" },
          { "name": "Azure DevOps" }
        ]
      },
      {
        "icon": "automation",
        "title": "Automatisierungsskripte",
        "description": "Automatisieren Sie Ihre Entwicklungsaufgaben durch Skripte und Tools",
        "features": [
          { "name": "Shell-Skript Integration" },
          { "name": "Python Automatisierung" },
          { "name": "Node.js Tools" },
          { "name": "Makefile Unterstützung" }
        ]
      },
      {
        "icon": "deployment",
        "title": "Deployment-Integration",
        "description": "Nutzen Sie KI für Code-Analyse und -Optimierung während des Deployments",
        "features": [
          { "name": "Docker Integration" },
          { "name": "Kubernetes Unterstützung" },
          { "name": "Cloud-Plattform Integration" },
          { "name": "Monitoring und Logging" }
        ]
      }
    ],
    "workflow": {
      "title": "Integrations-Workflow",
      "description": "Folgen Sie diesen Schritten, um Gemini CLI in Ihren Entwicklungsprozess zu integrieren",
      "steps": [
        {
          "title": "Umgebungssetup",
          "description": "Stellen Sie sicher, dass Ihre Entwicklungsumgebung Gemini CLI korrekt konfiguriert hat",
          "example": "# Installation überprüfen\ngemini --version\n\n# API-Schlüssel konfigurieren\ngemini config set api-key YOUR_API_KEY"
        },
        {
          "title": "Integrationsmethode Wählen",
          "description": "Wählen Sie die am besten geeignete Integrationsmethode basierend auf Ihren Anforderungen",
          "example": "# IDE-Integrationsbeispiel\n# VS Code Erweiterung installieren\ncode --install-extension gemini-cli\n\n# Oder Kommandozeilen-Alias konfigurieren\nalias ai='gemini chat'"
        },
        {
          "title": "Workflow Konfigurieren",
          "description": "Richten Sie Automatisierungsskripte und Workflows ein",
          "example": "# GitHub Actions Beispiel\nname: AI Code Review\non: [pull_request]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: AI Review\n        run: gemini review --files changed"
        },
        {
          "title": "Testen und Optimieren",
          "description": "Testen Sie die Integrationseffektivität und passen Sie nach Bedarf an",
          "example": "# Integration testen\ngemini test-integration\n\n# Nutzungsstatistiken anzeigen\ngemini stats --integration"
        }
      ]
    },
    "toolsTitle": "Beliebte Tool-Integrationen",
    "toolsDescription": "Lernen Sie die Integration mit beliebten Entwicklungstools",
    "tools": [
      {
        "name": "VS Code",
        "description": "Verwenden Sie Gemini CLI in Visual Studio Code",
        "steps": [
          { "text": "Gemini CLI Erweiterung installieren" },
          { "text": "API-Schlüssel konfigurieren" },
          { "text": "Tastenkürzel verwenden, um KI-Features aufzurufen" },
          { "text": "Befehle und Einstellungen anpassen" }
        ]
      },
      {
        "name": "Git Hooks",
        "description": "Integrieren Sie KI-Checks in den Git-Workflow",
        "steps": [
          { "text": "Pre-commit Hook erstellen" },
          { "text": "Code-Qualitätschecks konfigurieren" },
          { "text": "Automatisierte Tests einrichten" },
          { "text": "Commit-Message-Generierung integrieren" }
        ]
      },
      {
        "name": "Docker",
        "description": "Verwenden Sie Gemini CLI in containerisierten Umgebungen",
        "steps": [
          { "text": "Image mit Gemini CLI erstellen" },
          { "text": "Umgebungsvariablen konfigurieren" },
          { "text": "Volume-Mounts einrichten" },
          { "text": "Container-Performance optimieren" }
        ]
      }
    ],
    "bestPracticesTitle": "Integrations-Best-Practices",
    "bestPracticesDescription": "Befolgen Sie diese Best Practices für eine optimale Integrationserfahrung",
    "bestPractices": [
      {
        "title": "Sicherheitskonfiguration",
        "description": "Stellen Sie sichere Speicherung von API-Schlüsseln und sensiblen Informationen durch Umgebungsvariablen oder Schlüsselverwaltungsdienste sicher."
      },
      {
        "title": "Performance-Optimierung",
        "description": "Konfigurieren Sie Caching- und Parallelitätseinstellungen korrekt, um übermäßige API-Aufrufe zu vermeiden, die die Entwicklungserfahrung beeinträchtigen könnten."
      },
      {
        "title": "Fehlerbehandlung",
        "description": "Implementieren Sie umfassende Fehlerbehandlungsmechanismen, um sicherzustellen, dass Integrationsfehler den normalen Entwicklungsworkflow nicht beeinträchtigen."
      },
      {
        "title": "Team-Zusammenarbeit",
        "description": "Etablieren Sie einheitliche Integrationsstandards und Konfigurationen für das Team, damit alle Mitglieder es korrekt verwenden können."
      }
    ],
    "nextSteps": {
      "title": "Nächste Schritte",
      "description": "Lernen Sie weiterhin erweiterte Features und Best Practices",
      "advancedConfig": "Erweiterte Konfiguration",
      "codeRefactoring": "Code-Refactoring"
    }
  }
};

// Function to apply integration translations
function applyIntegrationTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = integrationTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No integration translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesIntegration with professional translation
    data.guidesIntegration = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied integration translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const integration = newData.guidesIntegration;
    console.log(`   - Title: "${integration?.title || 'N/A'}"`);
    console.log(`   - Types: ${integration?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${integration?.workflow?.steps?.length || 0}`);
    console.log(`   - Tools: ${integration?.tools?.length || 0}`);
    console.log(`   - Best practices: ${integration?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying integration translations for ${langCode}:`, error.message);
  }
}

// Apply integration translations
console.log('🚀 Applying professional integration translations for remaining languages...\n');

Object.keys(integrationTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German'
  };
  
  console.log(`Applying integration translations for ${langNames[langCode]}...`);
  applyIntegrationTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional integration translations applied!');
console.log('🎯 French and German now have complete professional content.');
