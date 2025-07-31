const fs = require('fs');
const path = require('path');

const languages = [
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'es', name: 'Spanish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ru', name: 'Russian' }
];

const translations = {
  de: {
    hero: {
      title: "Erste Verwendung von Gemini CLI",
      subtitle: "10-minütiger Schnellstart, beginnen Sie Ihre KI-unterstützte Programmierreise",
      suitableForBeginners: "Für Anfänger geeignet",
      completionTime: "10 Minuten Fertigstellung"
    },
    prerequisites: {
      title: "Bevor Sie beginnen",
      items: [
        "Stellen Sie sicher, dass Node.js 20 oder höher installiert ist",
        "Bereiten Sie ein Google-Konto für die Authentifizierung vor",
        "Stellen Sie sicher, dass die Netzwerkverbindung normal ist"
      ]
    },
    steps: {
      install: {
        title: "Gemini CLI installieren",
        description: "Wählen Sie die für Sie geeignete Installationsmethode",
        methods: {
          npx: {
            name: "NPX (Empfohlen)",
            command: "npx https://github.com/google-gemini/gemini-cli",
            description: "Keine Installation erforderlich, führen Sie die neueste Version direkt aus"
          },
          npm: {
            name: "NPM Global Installation",
            command: "npm install -g @google/gemini-cli",
            description: "Nach der globalen Installation können Sie den gemini-Befehl überall verwenden"
          },
          homebrew: {
            name: "Homebrew (macOS)",
            command: "brew install gemini-cli",
            description: "Für macOS-Benutzer wird die Installation mit Homebrew empfohlen"
          }
        }
      },
      firstRun: {
        title: "Erster Start",
        description: "Führen Sie Gemini CLI aus und schließen Sie die Erstkonfiguration ab",
        steps: {
          run: {
            name: "Befehl ausführen",
            command: "gemini",
            description: "Geben Sie den gemini-Befehl im Terminal ein, um zu starten"
          },
          theme: {
            name: "Thema auswählen",
            description: "Beim ersten Start werden Sie aufgefordert, ein Farbthema zu wählen, wählen Sie Ihren bevorzugten Stil"
          },
          auth: {
            name: "Authentifizierung",
            description: "Melden Sie sich mit Ihrem Google-Konto an und erhalten Sie kostenloses Nutzungskontingent"
          }
        }
      },
      firstChat: {
        title: "Erstes Gespräch",
        description: "Beginnen Sie mit der Interaktion mit der KI",
        examples: {
          greeting: {
            name: "Einfache Begrüßung",
            command: "> Hallo, bitte stellen Sie sich vor",
            description: "Testen Sie die grundlegende Gesprächsfunktion"
          },
          code: {
            name: "Code-bezogene Frage",
            command: "> Erklären Sie, was eine rekursive Funktion ist",
            description: "Stellen Sie programmierungsbezogene Fragen"
          },
          file: {
            name: "Dateioperation",
            command: "> @README.md Fassen Sie den Inhalt dieser Datei zusammen",
            description: "Verwenden Sie das @-Symbol, um Dateiinhalte zu lesen"
          }
        }
      }
    },
    tips: {
      title: "Wichtige Hinweise",
      success: {
        title: "Erfolgshinweis",
        content: "Wenn Sie die Willkommensschnittstelle und Eingabeaufforderung von Gemini CLI sehen, war die Installation erfolgreich!"
      },
      warning: {
        title: "Wichtige Hinweise",
        content: "Die erste Verwendung erfordert eine Netzwerkverbindung für Authentifizierung und Modellzugriff."
      },
      info: {
        title: "Verwendungstipps",
        content: "Sie können jederzeit /help eingeben, um verfügbare Befehle und Funktionen anzuzeigen."
      }
    },
    commands: {
      help: "Hilfeinformationen und verfügbare Befehle anzeigen",
      clear: "Bildschirminhalt löschen",
      quit: "Gemini CLI beenden",
      theme: "Oberflächenthema ändern",
      file: "Dateiinhalt in Gespräch einlesen",
      system: "Systembefehle ausführen"
    },
    commandsTitle: "Häufige Befehle Schnellreferenz",
    nextSteps: {
      title: "Nächste Schritte",
      description: "Herzlichen Glückwunsch! Sie haben die Einführung in Gemini CLI erfolgreich abgeschlossen. Jetzt können Sie weitere Funktionen erlernen:",
      basicCommands: "Grundbefehle lernen",
      fileOperations: "Grundlagen der Dateioperationen",
      backToGuides: "Zurück zu den Anleitungen"
    }
  }
};

// Create a base template for all languages
const baseTemplate = {
  hero: {
    title: "First Time Using Gemini CLI",
    subtitle: "10-minute quick start, begin your AI-assisted programming journey",
    suitableForBeginners: "Suitable for beginners",
    completionTime: "10 minutes to complete"
  },
  prerequisites: {
    title: "Before You Begin",
    items: [
      "Ensure Node.js 20 or higher is installed",
      "Prepare a Google account for authentication",
      "Ensure network connection is normal"
    ]
  },
  steps: {
    install: {
      title: "Install Gemini CLI",
      description: "Choose the installation method suitable for you",
      methods: {
        npx: {
          name: "NPX (Recommended)",
          command: "npx https://github.com/google-gemini/gemini-cli",
          description: "No installation required, run the latest version directly"
        },
        npm: {
          name: "NPM Global Install",
          command: "npm install -g @google/gemini-cli",
          description: "After global installation, you can use the gemini command anywhere"
        },
        homebrew: {
          name: "Homebrew (macOS)",
          command: "brew install gemini-cli",
          description: "macOS users are recommended to install using Homebrew"
        }
      }
    },
    firstRun: {
      title: "First Launch",
      description: "Run Gemini CLI and complete initial configuration",
      steps: {
        run: {
          name: "Run Command",
          command: "gemini",
          description: "Enter the gemini command in the terminal to start"
        },
        theme: {
          name: "Select Theme",
          description: "First launch will prompt you to select a color theme, choose your preferred style"
        },
        auth: {
          name: "Authentication",
          description: "Log in with your Google account and get free usage quota"
        }
      }
    },
    firstChat: {
      title: "First Conversation",
      description: "Start interacting with AI",
      examples: {
        greeting: {
          name: "Simple Greeting",
          command: "> Hello, please introduce yourself",
          description: "Test basic conversation functionality"
        },
        code: {
          name: "Code-related Question",
          command: "> Explain what a recursive function is",
          description: "Ask programming-related questions"
        },
        file: {
          name: "File Operation",
          command: "> @README.md Summarize the content of this file",
          description: "Use the @ symbol to read file content"
        }
      }
    }
  },
  tips: {
    title: "Important Tips",
    success: {
      title: "Success Tip",
      content: "If you see Gemini CLI's welcome interface and prompt, installation is successful!"
    },
    warning: {
      title: "Important Notes",
      content: "First use requires network connection for authentication and model access."
    },
    info: {
      title: "Usage Tips",
      content: "You can enter /help anytime to view available commands and features."
    }
  },
  commands: {
    help: "Show help information and available commands",
    clear: "Clear screen content",
    quit: "Exit Gemini CLI",
    theme: "Change interface theme",
    file: "Read file content into conversation",
    system: "Execute system commands"
  },
  commandsTitle: "Common Commands Quick Reference",
  nextSteps: {
    title: "Next Steps",
    description: "Congratulations! You have successfully completed the Gemini CLI introduction. Now you can continue learning more features:",
    basicCommands: "Learn Basic Commands",
    fileOperations: "File Operations Basics",
    backToGuides: "Back to Guides"
  }
};

languages.forEach(lang => {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang.code}.json`);

  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Add detailed getting-started translation
    if (translations[lang.code]) {
      content.guidesGettingStarted = translations[lang.code];
    } else {
      // Use base template for languages not yet translated
      content.guidesGettingStarted = baseTemplate;
    }

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Added detailed getting-started translations for ${lang.name} (${lang.code})`);
  }
});

console.log('✓ All detailed getting-started translations added');
