const fs = require('fs');
const path = require('path');

// Languages to translate (excluding zh and en)
const targetLanguages = ['de', 'fr', 'ja', 'ko', 'es', 'hi', 'ru'];

// Complete translations for file-operations page
const completeTranslations = {
  de: {
    guidesFileOperations: {
      hero: {
        title: "Dateioperationen Leitfaden",
        subtitle: "Meistern Sie Gemini CLIs Dateilesung, -bearbeitung und -verwaltungsfunktionen",
        intermediate: "Fortgeschritten",
        readingTime: "20 Min Lesezeit"
      },
      overview: {
        title: "Dateioperationen Übersicht",
        description: "Lernen Sie, wie Sie Gemini CLI effizient für die Verarbeitung von Dateien und Verzeichnissen verwenden, einschließlich Lesen, Bearbeiten, Erstellen und Verwalten verschiedener Dateitypen."
      },
      operationsTitle: "Kern-Dateioperationen",
      operationsDescription: "Meistern Sie die verschiedenen Dateioperationsfunktionen von Gemini CLI",
      operations: [
        {
          title: "Datei Lesen",
          description: "Lesen und analysieren Sie Inhalte aus verschiedenen Dateiformaten",
          icon: "DocumentTextIcon",
          color: "from-blue-500 to-indigo-600",
          command: "gemini read datei.txt",
          features: [
            "Unterstützung mehrerer Dateiformate (TXT, JSON, CSV, MD)",
            "Intelligente Inhaltsanalyse und Strukturerkennung",
            "Große Dateien in Blöcken verarbeiten für bessere Performance",
            "Automatische Kodierungserkennung (UTF-8, ASCII, etc.)",
            "Syntax-Highlighting für Code-Dateien"
          ]
        },
        {
          title: "Verzeichnis Durchsuchen",
          description: "Durchsuchen und analysieren Sie Verzeichnisstrukturen effizient",
          icon: "FolderIcon",
          color: "from-green-500 to-emerald-600",
          command: "gemini list ./src",
          features: [
            "Rekursive Verzeichnisdurchquerung mit Tiefenkontrolle",
            "Dateityp-Filterung nach Erweiterungen",
            "Detaillierte Größen- und Berechtigungsinformationen",
            "Versteckte Dateien und Systemdateien anzeigen",
            "Baumstruktur-Visualisierung für bessere Übersicht"
          ]
        },
        {
          title: "Datei Bearbeiten",
          description: "Intelligente Bearbeitung und Änderung von Dateiinhalten",
          icon: "PencilIcon",
          color: "from-purple-500 to-pink-600",
          command: "gemini edit datei.js",
          features: [
            "Syntax-bewusste Bearbeitung für verschiedene Programmiersprachen",
            "Automatische Code-Formatierung und Einrückung",
            "Automatische Backup-Erstellung vor Änderungen",
            "Änderungsverfolgung mit Diff-Anzeige",
            "Mehrere Dateien gleichzeitig bearbeiten"
          ]
        },
        {
          title: "Datei Löschen",
          description: "Sicheres Löschen von Dateien und Verzeichnissen mit Schutzmaßnahmen",
          icon: "TrashIcon",
          color: "from-red-500 to-orange-600",
          command: "gemini delete alte-datei.txt",
          features: [
            "Sicherheitsbestätigungsmechanismus für kritische Dateien",
            "Papierkorb-Unterstützung für Wiederherstellung",
            "Batch-Löschung mit Wildcard-Unterstützung",
            "Berechtigungsprüfung vor Löschvorgang",
            "Schutz vor versehentlichem Löschen wichtiger Systemdateien"
          ]
        },
        {
          title: "Datei Verschieben",
          description: "Verschieben und umbenennen von Dateien und Verzeichnissen",
          icon: "ArrowPathIcon",
          color: "from-cyan-500 to-blue-600",
          command: "gemini move quelle.txt ziel.txt",
          features: [
            "Intelligente Pfadauflösung mit relativen und absoluten Pfaden",
            "Automatische Konfliktbehandlung bei Namenskollisionen",
            "Batch-Operationen für mehrere Dateien",
            "Rückgängig-Unterstützung für versehentliche Verschiebungen",
            "Fortschrittsanzeige bei großen Dateien oder vielen Objekten"
          ]
        }
      ],
      examplesTitle: "Praktische Beispiele",
      examplesDescription: "Lernen Sie bewährte Praktiken für Dateioperationen durch praktische Beispiele",
      explanation: "Erklärung",
      examples: [
        {
          title: "JavaScript-Dateien Batch-Verarbeitung",
          description: "Analysieren und optimieren Sie alle JavaScript-Dateien in einem Projekt",
          code: "# Alle JS-Dateien lesen und analysieren\ngemini read \"src/**/*.js\" --analyze\n\n# Code batch-formatieren\ngemini format \"src/**/*.js\" --style=prettier\n\n# Dokumentation generieren\ngemini doc \"src/**/*.js\" --output=docs/",
          explanation: "Verwenden Sie Wildcard-Muster für die Batch-Verarbeitung von Dateien zur Effizienzsteigerung. Der --analyze Parameter führt eine tiefgreifende Code-Analyse durch, --style spezifiziert den Formatierungsstil, und --output bestimmt das Zielverzeichnis für generierte Dokumentation."
        },
        {
          title: "Konfigurationsdateien Verwalten",
          description: "Effiziente Verwaltung von Projekt-Konfigurationsdateien",
          code: "# Konfigurationsdateien finden\ngemini list . --type=config\n\n# Backup vor Änderungen\ngemini backup config/*.json\n\n# Konfiguration validieren\ngemini validate config/app.json --schema=schema.json",
          explanation: "Verwenden Sie spezifische Dateityp-Filter, um relevante Konfigurationsdateien zu finden. Erstellen Sie immer Backups vor wichtigen Änderungen und validieren Sie Konfigurationsdateien gegen Schemas zur Fehlerprävention."
        },
        {
          title: "Log-Dateien Analyse",
          description: "Analysieren und verarbeiten Sie große Log-Dateien effizient",
          code: "# Große Log-Datei in Chunks lesen\ngemini read logs/app.log --chunk-size=1MB\n\n# Nach Fehlern suchen\ngemini search logs/ --pattern=\"ERROR|FATAL\" --output=errors.txt\n\n# Log-Rotation durchführen\ngemini rotate logs/app.log --max-size=100MB --keep=5",
          explanation: "Bei großen Log-Dateien verwenden Sie Chunk-basiertes Lesen für bessere Performance. Nutzen Sie Pattern-Matching für gezielte Suchen und implementieren Sie Log-Rotation zur Speicherverwaltung."
        }
      ],
      bestPracticesTitle: "Bewährte Praktiken",
      bestPracticesDescription: "Wichtige Empfehlungen und Sicherheitshinweise für Dateioperationen",
      bestPractices: [
        {
          type: "success",
          title: "Regelmäßige Backups erstellen",
          content: "Erstellen Sie immer Backups wichtiger Dateien vor größeren Operationen. Verwenden Sie die --backup Option für automatische Sicherungen oder implementieren Sie ein regelmäßiges Backup-System für kritische Projektdateien."
        },
        {
          type: "warning",
          title: "Berechtigungen überprüfen",
          content: "Überprüfen Sie Dateiberechtigungen vor Operationen, besonders in Produktionsumgebungen. Vermeiden Sie das Ausführen mit Root-Rechten, wenn nicht notwendig, und verwenden Sie das Prinzip der minimalen Berechtigung."
        },
        {
          type: "info",
          title: "Versionskontrolle nutzen",
          content: "Integrieren Sie Dateioperationen in Ihr Versionskontrollsystem. Committen Sie Änderungen regelmäßig und verwenden Sie aussagekräftige Commit-Nachrichten für bessere Nachverfolgbarkeit von Dateiänderungen."
        },
        {
          type: "error",
          title: "Gefährliche Operationen vermeiden",
          content: "Seien Sie besonders vorsichtig bei Lösch- und Verschiebungsoperationen. Verwenden Sie immer die --dry-run Option zum Testen, bevor Sie destruktive Operationen ausführen, und halten Sie sich von Systemverzeichnissen fern."
        }
      ],
      nextSteps: {
        title: "Nächste Schritte",
        description: "Jetzt, da Sie Dateioperationen beherrschen, können Sie andere nützliche Funktionen erlernen:",
        integration: "System-Integration",
        codeRefactoring: "Code-Refactoring",
        backToGuides: "Zurück zu den Leitfäden"
      }
    }
  },
  fr: {
    guidesFileOperations: {
      hero: {
        title: "Guide des Opérations de Fichiers",
        subtitle: "Maîtrisez les fonctions de lecture, d'édition et de gestion de fichiers de Gemini CLI",
        intermediate: "Intermédiaire",
        readingTime: "20 min de lecture"
      },
      overview: {
        title: "Aperçu des Opérations de Fichiers",
        description: "Apprenez à utiliser Gemini CLI efficacement pour traiter les fichiers et répertoires, y compris la lecture, l'édition, la création et la gestion de divers types de fichiers."
      },
      operationsTitle: "Opérations de Fichiers Principales",
      operationsDescription: "Maîtrisez les diverses fonctionnalités d'opérations de fichiers fournies par Gemini CLI",
      operations: [
        {
          title: "Lecture de Fichier",
          description: "Lire et analyser le contenu de divers formats de fichiers",
          icon: "DocumentTextIcon",
          color: "from-blue-500 to-indigo-600",
          command: "gemini read fichier.txt",
          features: [
            "Support de multiples formats de fichiers (TXT, JSON, CSV, MD)",
            "Analyse intelligente du contenu et reconnaissance de structure",
            "Traitement de gros fichiers par blocs pour de meilleures performances",
            "Détection automatique de l'encodage (UTF-8, ASCII, etc.)",
            "Coloration syntaxique pour les fichiers de code"
          ]
        },
        {
          title: "Navigation de Répertoire",
          description: "Parcourir et analyser les structures de répertoires efficacement",
          icon: "FolderIcon",
          color: "from-green-500 to-emerald-600",
          command: "gemini list ./src",
          features: [
            "Traversée récursive de répertoires avec contrôle de profondeur",
            "Filtrage par type de fichier selon les extensions",
            "Informations détaillées de taille et permissions",
            "Affichage des fichiers cachés et système",
            "Visualisation en arbre pour une meilleure vue d'ensemble"
          ]
        },
        {
          title: "Édition de Fichier",
          description: "Édition intelligente et modification du contenu des fichiers",
          icon: "PencilIcon",
          color: "from-purple-500 to-pink-600",
          command: "gemini edit fichier.js",
          features: [
            "Édition consciente de la syntaxe pour divers langages de programmation",
            "Formatage automatique du code et indentation",
            "Création automatique de sauvegarde avant modifications",
            "Suivi des modifications avec affichage diff",
            "Édition simultanée de plusieurs fichiers"
          ]
        },
        {
          title: "Suppression de Fichier",
          description: "Suppression sécurisée de fichiers et répertoires avec mesures de protection",
          icon: "TrashIcon",
          color: "from-red-500 to-orange-600",
          command: "gemini delete ancien-fichier.txt",
          features: [
            "Mécanisme de confirmation de sécurité pour les fichiers critiques",
            "Support de corbeille pour récupération",
            "Suppression par lot avec support de caractères génériques",
            "Vérification des permissions avant suppression",
            "Protection contre la suppression accidentelle de fichiers système importants"
          ]
        },
        {
          title: "Déplacement de Fichier",
          description: "Déplacer et renommer des fichiers et répertoires",
          icon: "ArrowPathIcon",
          color: "from-cyan-500 to-blue-600",
          command: "gemini move source.txt destination.txt",
          features: [
            "Résolution intelligente de chemin avec chemins relatifs et absolus",
            "Gestion automatique des conflits lors de collisions de noms",
            "Opérations par lot pour plusieurs fichiers",
            "Support d'annulation pour les déplacements accidentels",
            "Indicateur de progression pour gros fichiers ou nombreux objets"
          ]
        }
      ],
      examplesTitle: "Exemples Pratiques",
      examplesDescription: "Apprenez les meilleures pratiques pour les opérations de fichiers à travers des exemples pratiques",
      explanation: "Explication",
      examples: [
        {
          title: "Traitement par Lot de Fichiers JavaScript",
          description: "Analyser et optimiser tous les fichiers JavaScript d'un projet",
          code: "# Lire et analyser tous les fichiers JS\ngemini read \"src/**/*.js\" --analyze\n\n# Formater le code par lot\ngemini format \"src/**/*.js\" --style=prettier\n\n# Générer la documentation\ngemini doc \"src/**/*.js\" --output=docs/",
          explanation: "Utilisez des motifs de caractères génériques pour le traitement par lot de fichiers afin d'améliorer l'efficacité. Le paramètre --analyze effectue une analyse approfondie du code, --style spécifie le style de formatage, et --output détermine le répertoire de destination pour la documentation générée."
        },
        {
          title: "Gestion des Fichiers de Configuration",
          description: "Gestion efficace des fichiers de configuration de projet",
          code: "# Trouver les fichiers de configuration\ngemini list . --type=config\n\n# Sauvegarde avant modifications\ngemini backup config/*.json\n\n# Valider la configuration\ngemini validate config/app.json --schema=schema.json",
          explanation: "Utilisez des filtres de type de fichier spécifiques pour trouver les fichiers de configuration pertinents. Créez toujours des sauvegardes avant des modifications importantes et validez les fichiers de configuration contre des schémas pour prévenir les erreurs."
        },
        {
          title: "Analyse des Fichiers de Log",
          description: "Analyser et traiter efficacement de gros fichiers de log",
          code: "# Lire un gros fichier de log par blocs\ngemini read logs/app.log --chunk-size=1MB\n\n# Rechercher des erreurs\ngemini search logs/ --pattern=\"ERROR|FATAL\" --output=errors.txt\n\n# Effectuer la rotation des logs\ngemini rotate logs/app.log --max-size=100MB --keep=5",
          explanation: "Pour de gros fichiers de log, utilisez la lecture par blocs pour de meilleures performances. Utilisez la correspondance de motifs pour des recherches ciblées et implémentez la rotation des logs pour la gestion de l'espace de stockage."
        }
      ],
      bestPracticesTitle: "Meilleures Pratiques",
      bestPracticesDescription: "Recommandations importantes et considérations de sécurité pour les opérations de fichiers",
      bestPractices: [
        {
          type: "success",
          title: "Créer des Sauvegardes Régulières",
          content: "Créez toujours des sauvegardes des fichiers importants avant les opérations majeures. Utilisez l'option --backup pour les sauvegardes automatiques ou implémentez un système de sauvegarde régulier pour les fichiers de projet critiques."
        },
        {
          type: "warning",
          title: "Vérifier les Permissions",
          content: "Vérifiez les permissions de fichiers avant les opérations, surtout dans les environnements de production. Évitez d'exécuter avec les droits root si ce n'est pas nécessaire, et utilisez le principe du moindre privilège."
        },
        {
          type: "info",
          title: "Utiliser le Contrôle de Version",
          content: "Intégrez les opérations de fichiers dans votre système de contrôle de version. Committez les changements régulièrement et utilisez des messages de commit descriptifs pour une meilleure traçabilité des modifications de fichiers."
        },
        {
          type: "error",
          title: "Éviter les Opérations Dangereuses",
          content: "Soyez particulièrement prudent avec les opérations de suppression et de déplacement. Utilisez toujours l'option --dry-run pour tester avant d'exécuter des opérations destructives, et tenez-vous à l'écart des répertoires système."
        }
      ],
      nextSteps: {
        title: "Prochaines Étapes",
        description: "Maintenant que vous maîtrisez les opérations de fichiers, vous pouvez apprendre d'autres fonctionnalités utiles:",
        integration: "Intégration Système",
        codeRefactoring: "Refactorisation de Code",
        backToGuides: "Retour aux Guides"
      }
    }
  }
};

// Function to apply complete translations
function applyCompleteTranslation(langCode) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = completeTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No complete translations defined for ${langCode}`);
      return;
    }
    
    // Apply complete translations
    Object.assign(data, translations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied complete file-operations translation for ${langCode}`);
    
    // Verify the translation
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const fileOps = newData.guidesFileOperations;
    console.log(`   - operations: ${fileOps.operations?.length || 0}`);
    console.log(`   - examples: ${fileOps.examples?.length || 0}`);
    console.log(`   - bestPractices: ${fileOps.bestPractices?.length || 0}`);
    console.log(`   - first operation features: ${fileOps.operations?.[0]?.features?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying translation for ${langCode}.json:`, error.message);
  }
}

// Apply complete translations for German and French
console.log('🌐 Applying complete file-operations translations...\n');

// Apply German translation
console.log('Applying German translation...');
applyCompleteTranslation('de');

console.log('\nApplying French translation...');
applyCompleteTranslation('fr');

console.log('\n✅ Complete translations applied for German and French!');
console.log('📝 These are examples of complete translations. Other languages can be added similarly.');
