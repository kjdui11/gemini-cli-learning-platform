const fs = require('fs');
const path = require('path');

// Complete advanced config translations for all languages
const advancedConfigTranslations = {
  fr: {
    "hero": {
      "title": "Options de Configuration Avancées",
      "subtitle": "Plongez dans les options de configuration et de personnalisation avancées de Gemini CLI",
      "advanced": "Avancé",
      "readingTime": "30 min de lecture"
    },
    "overview": {
      "title": "Aperçu de la Configuration",
      "description": "Maîtrisez les options de configuration avancées de Gemini CLI, y compris les fichiers de configuration TOML, les variables d'environnement, les paramètres personnalisés, et plus encore."
    },
    "configSectionsTitle": "Structure du Fichier de Configuration",
    "configSectionsDescription": "Apprenez les différentes sections de configuration et leurs paramètres",
    "location": "Emplacement",
    "structure": "Structure",
    "explanation": "Explication",
    "options": "Options",
    "configSections": [
      {
        "id": "toml-config",
        "title": "Fichier de Configuration TOML",
        "description": "Utilisez le fichier gemini.toml pour une configuration détaillée",
        "color": "from-blue-500 to-indigo-600",
        "content": {
          "location": "Emplacement du fichier de configuration : gemini.toml dans le répertoire racine du projet",
          "structure": `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"`,
          "explanation": "Le fichier TOML permet une configuration structurée et lisible de tous les aspects de Gemini CLI."
        }
      },
      {
        "id": "env-vars",
        "title": "Variables d'Environnement",
        "description": "Configuration rapide via les variables d'environnement",
        "color": "from-green-500 to-emerald-600",
        "content": {
          "explanation": "Les variables d'environnement permettent une configuration rapide et flexible",
          "options": [
            "GEMINI_API_KEY: Clé API pour l'authentification",
            "GEMINI_MODEL: Modèle par défaut à utiliser",
            "GEMINI_TEMPERATURE: Paramètre de créativité",
            "GEMINI_MAX_TOKENS: Nombre maximum de tokens",
            "GEMINI_CONFIG_PATH: Chemin du fichier de configuration"
          ]
        }
      },
      {
        "id": "model-config",
        "title": "Configuration du Modèle",
        "description": "Paramètres spécifiques au modèle AI",
        "color": "from-indigo-500 to-purple-600",
        "content": {
          "explanation": "Contrôlez le comportement et les performances du modèle AI",
          "options": [
            "provider: Fournisseur du modèle (google, openai)",
            "name: Nom du modèle spécifique",
            "temperature: Créativité (0.0-2.0)",
            "max_tokens: Limite de tokens de sortie",
            "top_p: Échantillonnage nucleus",
            "frequency_penalty: Pénalité de fréquence"
          ]
        }
      },
      {
        "id": "ui-config",
        "title": "Configuration de l'Interface",
        "description": "Personnalisez l'interface utilisateur et l'expérience d'interaction",
        "color": "from-purple-500 to-pink-600",
        "content": {
          "explanation": "Ajustez l'affichage et l'interaction de l'interface CLI",
          "options": [
            "theme: Couleur du thème (light, dark, auto)",
            "show_token_count: Afficher le compteur de tokens",
            "auto_save_history: Sauvegarde automatique de l'historique",
            "syntax_highlighting: Coloration syntaxique",
            "line_numbers: Afficher les numéros de ligne",
            "word_wrap: Retour à la ligne automatique"
          ]
        }
      },
      {
        "id": "tools-config",
        "title": "Configuration des Outils",
        "description": "Activez et configurez diverses fonctionnalités d'outils",
        "color": "from-orange-500 to-red-600",
        "content": {
          "explanation": "Contrôlez les fonctionnalités et permissions des outils CLI",
          "options": [
            "enable_shell: Activer l'exécution de commandes Shell",
            "enable_file_operations: Activer les opérations sur fichiers",
            "max_file_size: Limite de taille de fichier",
            "allowed_extensions: Extensions de fichier autorisées",
            "blocked_commands: Liste des commandes interdites",
            "timeout: Délai d'expiration d'exécution"
          ]
        }
      },
      {
        "id": "security-config",
        "title": "Configuration de Sécurité",
        "description": "Paramètres de sécurité et de contrôle d'accès",
        "color": "from-red-500 to-pink-600",
        "content": {
          "explanation": "Configurez les mesures de sécurité et les contrôles d'accès",
          "options": [
            "enable_audit_log: Activer les journaux d'audit",
            "restrict_file_access: Restreindre l'accès aux fichiers",
            "allowed_directories: Répertoires autorisés",
            "require_confirmation: Exiger une confirmation",
            "session_timeout: Délai d'expiration de session",
            "max_concurrent_sessions: Sessions simultanées max"
          ]
        }
      }
    ],
    "environmentVariablesTitle": "Variables d'Environnement",
    "environmentVariablesDescription": "Configuration rapide via les variables d'environnement",
    "defaultValue": "Valeur par Défaut",
    "none": "Aucune",
    "environmentVariables": [
      {
        "name": "GEMINI_API_KEY",
        "description": "Clé API Google Gemini pour l'authentification",
        "example": "export GEMINI_API_KEY=votre_cle_api_ici",
        "default": null
      },
      {
        "name": "GEMINI_MODEL",
        "description": "Nom du modèle par défaut à utiliser",
        "example": "export GEMINI_MODEL=gemini-1.5-pro",
        "default": "gemini-1.5-flash"
      },
      {
        "name": "GEMINI_TEMPERATURE",
        "description": "Paramètre de créativité du modèle",
        "example": "export GEMINI_TEMPERATURE=0.7",
        "default": "0.9"
      },
      {
        "name": "GEMINI_MAX_TOKENS",
        "description": "Nombre maximum de tokens de sortie",
        "example": "export GEMINI_MAX_TOKENS=8192",
        "default": "4096"
      },
      {
        "name": "GEMINI_CONFIG_PATH",
        "description": "Chemin du fichier de configuration personnalisé",
        "example": "export GEMINI_CONFIG_PATH=/chemin/vers/config.toml",
        "default": "./gemini.toml"
      }
    ],
    "customizationTitle": "Options de Personnalisation",
    "customizationDescription": "Configuration personnalisée pour différents cas d'usage",
    "customizationOptions": [
      {
        "title": "Environnement de Développement",
        "description": "Paramètres optimisés pour les flux de travail de développement",
        "features": [
          "Activer la coloration syntaxique du code",
          "Sauvegarde automatique de l'historique de session",
          "Intégrer les systèmes de contrôle de version",
          "Modèles de code personnalisés",
          "Alias de commandes rapides"
        ]
      },
      {
        "title": "Environnement de Production",
        "description": "Configuration de sécurité pour les environnements de production",
        "features": [
          "Restreindre les permissions d'opération sur fichiers",
          "Désactiver les commandes dangereuses",
          "Activer la journalisation d'audit",
          "Définir les limites d'utilisation des ressources",
          "Configurer les stratégies de sauvegarde"
        ]
      },
      {
        "title": "Configuration de Collaboration d'Équipe",
        "description": "Paramètres partagés pour la collaboration d'équipe",
        "features": [
          "Modèles de configuration unifiés",
          "Bibliothèque de prompts partagée",
          "Statistiques d'utilisation d'équipe",
          "Gestion des permissions",
          "Synchronisation de configuration"
        ]
      }
    ],
    "bestPracticesTitle": "Meilleures Pratiques",
    "bestPracticesDescription": "Recommandations pour une configuration optimale",
    "bestPractices": [
      {
        "title": "Gestion de la Configuration",
        "description": "Organisez et maintenez vos fichiers de configuration",
        "tips": [
          "Utilisez le contrôle de version pour les fichiers de configuration",
          "Documentez les changements de configuration",
          "Testez les configurations dans un environnement de développement",
          "Sauvegardez régulièrement les configurations"
        ]
      },
      {
        "title": "Optimisation des Performances",
        "description": "Configurez pour des performances optimales",
        "tips": [
          "Ajustez les paramètres du modèle selon vos besoins",
          "Surveillez l'utilisation des ressources",
          "Optimisez l'efficacité de transmission des données",
          "Configurez les délais d'expiration appropriés"
        ]
      },
      {
        "title": "Conseils de Débogage",
        "description": "Configuration pour faciliter le débogage",
        "tips": [
          "Utilisez le mode de journalisation verbeux",
          "Vérifiez le statut du serveur",
          "Validez le format du fichier de configuration",
          "Testez les variables d'environnement"
        ]
      }
    ],
    "nextSteps": {
      "title": "Prochaines Étapes",
      "description": "Maintenant que vous comprenez la configuration avancée, vous pouvez continuer à apprendre des méthodes de configuration et d'intégration plus avancées :",
      "integration": "Guide d'Intégration",
      "troubleshooting": "Dépannage",
      "backToGuides": "Retour aux Guides"
    }
  },
  de: {
    "hero": {
      "title": "Erweiterte Konfigurationsoptionen",
      "subtitle": "Tauchen Sie tief in die erweiterten Konfigurations- und Anpassungsoptionen von Gemini CLI ein",
      "advanced": "Erweitert",
      "readingTime": "30 Min. Lesezeit"
    },
    "overview": {
      "title": "Konfigurationsübersicht",
      "description": "Beherrschen Sie die erweiterten Konfigurationsoptionen von Gemini CLI, einschließlich TOML-Konfigurationsdateien, Umgebungsvariablen, benutzerdefinierten Einstellungen und mehr."
    },
    "configSectionsTitle": "Konfigurationsdatei-Struktur",
    "configSectionsDescription": "Lernen Sie verschiedene Konfigurationsabschnitte und ihre Einstellungen kennen",
    "location": "Standort",
    "structure": "Struktur",
    "explanation": "Erklärung",
    "options": "Optionen",
    "configSections": [
      {
        "id": "toml-config",
        "title": "TOML-Konfigurationsdatei",
        "description": "Verwenden Sie die gemini.toml-Datei für detaillierte Konfiguration",
        "color": "from-blue-500 to-indigo-600",
        "content": {
          "location": "Konfigurationsdatei-Standort: gemini.toml im Projekt-Stammverzeichnis",
          "structure": `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"`,
          "explanation": "Die TOML-Datei ermöglicht eine strukturierte und lesbare Konfiguration aller Aspekte von Gemini CLI."
        }
      },
      {
        "id": "env-vars",
        "title": "Umgebungsvariablen",
        "description": "Schnelle Konfiguration über Umgebungsvariablen",
        "color": "from-green-500 to-emerald-600",
        "content": {
          "explanation": "Umgebungsvariablen ermöglichen eine schnelle und flexible Konfiguration",
          "options": [
            "GEMINI_API_KEY: API-Schlüssel für Authentifizierung",
            "GEMINI_MODEL: Standard-Modell zu verwenden",
            "GEMINI_TEMPERATURE: Kreativitätsparameter",
            "GEMINI_MAX_TOKENS: Maximale Token-Anzahl",
            "GEMINI_CONFIG_PATH: Pfad zur Konfigurationsdatei"
          ]
        }
      },
      {
        "id": "model-config",
        "title": "Modell-Konfiguration",
        "description": "AI-modellspezifische Einstellungen",
        "color": "from-indigo-500 to-purple-600",
        "content": {
          "explanation": "Steuern Sie das Verhalten und die Leistung des AI-Modells",
          "options": [
            "provider: Modell-Anbieter (google, openai)",
            "name: Spezifischer Modellname",
            "temperature: Kreativität (0.0-2.0)",
            "max_tokens: Ausgabe-Token-Limit",
            "top_p: Nucleus-Sampling",
            "frequency_penalty: Häufigkeitsstrafe"
          ]
        }
      },
      {
        "id": "ui-config",
        "title": "Benutzeroberflächen-Konfiguration",
        "description": "Passen Sie die Benutzeroberfläche und Interaktionserfahrung an",
        "color": "from-purple-500 to-pink-600",
        "content": {
          "explanation": "Passen Sie die Anzeige und Interaktion der CLI-Oberfläche an",
          "options": [
            "theme: Themenfarbe (light, dark, auto)",
            "show_token_count: Token-Zähler anzeigen",
            "auto_save_history: Automatische Verlaufsspeicherung",
            "syntax_highlighting: Syntax-Hervorhebung",
            "line_numbers: Zeilennummern anzeigen",
            "word_wrap: Automatischer Zeilenumbruch"
          ]
        }
      },
      {
        "id": "tools-config",
        "title": "Werkzeug-Konfiguration",
        "description": "Aktivieren und konfigurieren Sie verschiedene Werkzeugfunktionen",
        "color": "from-orange-500 to-red-600",
        "content": {
          "explanation": "Steuern Sie CLI-Werkzeugfunktionen und -berechtigungen",
          "options": [
            "enable_shell: Shell-Befehlsausführung aktivieren",
            "enable_file_operations: Dateioperationen aktivieren",
            "max_file_size: Maximale Dateigröße",
            "allowed_extensions: Erlaubte Dateierweiterungen",
            "blocked_commands: Liste gesperrter Befehle",
            "timeout: Ausführungs-Timeout"
          ]
        }
      },
      {
        "id": "security-config",
        "title": "Sicherheitskonfiguration",
        "description": "Sicherheits- und Zugriffskontrolleinstellungen",
        "color": "from-red-500 to-pink-600",
        "content": {
          "explanation": "Konfigurieren Sie Sicherheitsmaßnahmen und Zugriffskontrollen",
          "options": [
            "enable_audit_log: Audit-Protokollierung aktivieren",
            "restrict_file_access: Dateizugriff beschränken",
            "allowed_directories: Erlaubte Verzeichnisse",
            "require_confirmation: Bestätigung erforderlich",
            "session_timeout: Sitzungs-Timeout",
            "max_concurrent_sessions: Max. gleichzeitige Sitzungen"
          ]
        }
      }
    ],
    "environmentVariablesTitle": "Umgebungsvariablen",
    "environmentVariablesDescription": "Schnelle Konfiguration über Umgebungsvariablen",
    "defaultValue": "Standardwert",
    "none": "Keine",
    "environmentVariables": [
      {
        "name": "GEMINI_API_KEY",
        "description": "Google Gemini API-Schlüssel für Authentifizierung",
        "example": "export GEMINI_API_KEY=ihr_api_schluessel_hier",
        "default": null
      },
      {
        "name": "GEMINI_MODEL",
        "description": "Standard-Modellname zu verwenden",
        "example": "export GEMINI_MODEL=gemini-1.5-pro",
        "default": "gemini-1.5-flash"
      },
      {
        "name": "GEMINI_TEMPERATURE",
        "description": "Modell-Kreativitätsparameter",
        "example": "export GEMINI_TEMPERATURE=0.7",
        "default": "0.9"
      },
      {
        "name": "GEMINI_MAX_TOKENS",
        "description": "Maximale Ausgabe-Token-Anzahl",
        "example": "export GEMINI_MAX_TOKENS=8192",
        "default": "4096"
      },
      {
        "name": "GEMINI_CONFIG_PATH",
        "description": "Benutzerdefinierter Konfigurationsdateipfad",
        "example": "export GEMINI_CONFIG_PATH=/pfad/zur/config.toml",
        "default": "./gemini.toml"
      }
    ],
    "customizationTitle": "Anpassungsoptionen",
    "customizationDescription": "Personalisierte Konfiguration für verschiedene Anwendungsfälle",
    "customizationOptions": [
      {
        "title": "Entwicklungsumgebung",
        "description": "Optimierte Einstellungen für Entwicklungsworkflows",
        "features": [
          "Code-Syntax-Hervorhebung aktivieren",
          "Automatische Sitzungsverlaufsspeicherung",
          "Versionskontrollsysteme integrieren",
          "Benutzerdefinierte Code-Vorlagen",
          "Schnelle Befehlsaliase"
        ]
      },
      {
        "title": "Produktionsumgebung",
        "description": "Sicherheitskonfiguration für Produktionsumgebungen",
        "features": [
          "Dateioperationsberechtigungen beschränken",
          "Gefährliche Befehle deaktivieren",
          "Audit-Protokollierung aktivieren",
          "Ressourcennutzungslimits festlegen",
          "Backup-Strategien konfigurieren"
        ]
      },
      {
        "title": "Team-Kollaborationskonfiguration",
        "description": "Geteilte Einstellungen für Teamzusammenarbeit",
        "features": [
          "Einheitliche Konfigurationsvorlagen",
          "Geteilte Prompt-Bibliothek",
          "Team-Nutzungsstatistiken",
          "Berechtigungsverwaltung",
          "Konfigurationssynchronisation"
        ]
      }
    ],
    "bestPracticesTitle": "Beste Praktiken",
    "bestPracticesDescription": "Empfehlungen für optimale Konfiguration",
    "bestPractices": [
      {
        "title": "Konfigurationsverwaltung",
        "description": "Organisieren und pflegen Sie Ihre Konfigurationsdateien",
        "tips": [
          "Verwenden Sie Versionskontrolle für Konfigurationsdateien",
          "Dokumentieren Sie Konfigurationsänderungen",
          "Testen Sie Konfigurationen in Entwicklungsumgebung",
          "Sichern Sie Konfigurationen regelmäßig"
        ]
      },
      {
        "title": "Leistungsoptimierung",
        "description": "Konfigurieren Sie für optimale Leistung",
        "tips": [
          "Passen Sie Modellparameter an Ihre Bedürfnisse an",
          "Überwachen Sie Ressourcennutzung",
          "Optimieren Sie Datenübertragungseffizienz",
          "Konfigurieren Sie angemessene Timeouts"
        ]
      },
      {
        "title": "Debugging-Tipps",
        "description": "Konfiguration zur Erleichterung des Debuggings",
        "tips": [
          "Verwenden Sie ausführlichen Protokollierungsmodus",
          "Überprüfen Sie Serverstatus",
          "Validieren Sie Konfigurationsdateiformat",
          "Testen Sie Umgebungsvariablen"
        ]
      }
    ],
    "nextSteps": {
      "title": "Nächste Schritte",
      "description": "Nachdem Sie die erweiterte Konfiguration verstehen, können Sie fortgeschrittenere Konfigurations- und Integrationsmethoden erlernen:",
      "integration": "Integrationsleitfaden",
      "troubleshooting": "Fehlerbehebung",
      "backToGuides": "Zurück zu den Anleitungen"
    }
  }
};

// Function to apply advanced config translations
function applyAdvancedConfigTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = advancedConfigTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No advanced config translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesAdvancedConfig with professional translation
    data.guidesAdvancedConfig = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied advanced config translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const advancedConfig = newData.guidesAdvancedConfig;
    console.log(`   - Hero title: "${advancedConfig?.hero?.title || 'N/A'}"`);
    console.log(`   - Config sections: ${advancedConfig?.configSections?.length || 0}`);
    console.log(`   - Environment variables: ${advancedConfig?.environmentVariables?.length || 0}`);
    console.log(`   - Customization options: ${advancedConfig?.customizationOptions?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying advanced config translations for ${langCode}:`, error.message);
  }
}

// Apply advanced config translations
console.log('🚀 Applying professional advanced config translations...\n');

Object.keys(advancedConfigTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German'
  };
  
  console.log(`Applying advanced config translations for ${langNames[langCode]}...`);
  applyAdvancedConfigTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional advanced config translations applied!');
console.log('🎯 French and German now have complete professional content.');
