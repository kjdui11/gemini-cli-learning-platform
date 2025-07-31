const fs = require('fs');
const path = require('path');

// Complete professional translations for getting-started page
const gettingStartedTranslations = {
  fr: {
    title: "Première Utilisation de Gemini CLI",
    subtitle: "Démarrage rapide en 10 minutes pour commencer votre parcours de programmation assistée par IA",
    description: "Ce tutoriel vous aidera à démarrer rapidement avec Gemini CLI, en apprenant les opérations de base et les concepts fondamentaux.",
    meta: {
      level: "Adapté aux débutants",
      duration: "10 minutes pour terminer"
    },
    prerequisites: {
      title: "Avant de Commencer",
      nodejs: "Node.js 18 ou version supérieure installé",
      terminal: "Familiarité avec les opérations de base en ligne de commande",
      google: "Compte Google (pour l'authentification)"
    },
    steps: {
      install: {
        title: "Installer Gemini CLI",
        description: "Choisissez la méthode d'installation qui vous convient",
        methods: {
          npx: {
            name: "NPX (Recommandé)",
            description: "Aucune installation requise, exécute directement la dernière version"
          },
          npm: {
            name: "Installation Globale NPM",
            description: "Installation globale pour utiliser la commande gemini partout"
          },
          homebrew: {
            name: "Homebrew (macOS)",
            description: "Recommandé pour les utilisateurs macOS utilisant Homebrew"
          }
        }
      },
      firstRun: {
        title: "Premier Lancement",
        description: "Exécutez Gemini CLI et complétez la configuration initiale",
        steps: {
          command: {
            title: "Exécuter la Commande",
            description: "Entrez la commande gemini dans le terminal pour démarrer"
          },
          theme: {
            title: "Choisir le Thème",
            description: "Le premier lancement vous invitera à choisir un thème de couleur, sélectionnez votre style préféré"
          },
          auth: {
            title: "Authentification",
            description: "Connectez-vous avec votre compte Google pour obtenir un quota d'utilisation gratuit"
          }
        }
      },
      firstChat: {
        title: "Première Conversation",
        description: "Commencez à interagir avec l'IA",
        examples: {
          greeting: {
            title: "Salutation Simple",
            command: "> Bonjour, pouvez-vous vous présenter ?",
            description: "Testez la fonctionnalité de conversation de base"
          },
          code: {
            title: "Questions Liées au Code",
            command: "> Expliquez ce qu'est une fonction récursive",
            description: "Posez des questions liées à la programmation"
          },
          file: {
            title: "Opérations sur Fichiers",
            command: "> @README.md résumez le contenu de ce fichier",
            description: "Utilisez le symbole @ pour lire le contenu des fichiers"
          }
        }
      }
    },
    tips: {
      title: "Conseils Importants",
      success: {
        title: "Conseil de Réussite",
        content: "Si vous voyez l'interface d'accueil de Gemini CLI et l'invite, l'installation a réussi !"
      },
      warning: {
        title: "Notes Importantes",
        content: "La première utilisation nécessite une connexion réseau pour l'authentification et l'accès au modèle."
      },
      info: {
        title: "Conseils d'Utilisation",
        content: "Vous pouvez entrer /help à tout moment pour voir les commandes et fonctionnalités disponibles."
      }
    },
    commands: {
      help: "Afficher les informations d'aide et les commandes disponibles",
      clear: "Effacer le contenu de l'écran",
      quit: "Quitter Gemini CLI",
      theme: "Changer le thème de l'interface",
      file: "Lire le contenu du fichier dans la conversation",
      system: "Exécuter des commandes système"
    },
    commandsTitle: "Référence Rapide des Commandes Courantes",
    nextSteps: {
      title: "Prochaines Étapes",
      description: "Félicitations ! Vous avez terminé avec succès l'introduction à Gemini CLI. Vous pouvez maintenant continuer à apprendre plus de fonctionnalités :",
      basicCommands: "Apprendre les Commandes de Base",
      fileOperations: "Introduction aux Opérations sur Fichiers",
      backToGuides: "Retour à l'Accueil des Guides"
    }
  },
  de: {
    title: "Erste Verwendung von Gemini CLI",
    subtitle: "10-minütiger Schnellstart für Ihre KI-unterstützte Programmierreise",
    description: "Dieses Tutorial hilft Ihnen beim schnellen Einstieg in Gemini CLI und beim Erlernen grundlegender Operationen und Kernkonzepte.",
    meta: {
      level: "Anfängerfreundlich",
      duration: "10 Minuten zum Abschluss"
    },
    prerequisites: {
      title: "Bevor Sie Beginnen",
      nodejs: "Node.js 18 oder höher installiert",
      terminal: "Vertrautheit mit grundlegenden Kommandozeilenoperationen",
      google: "Google-Konto (für Authentifizierung)"
    },
    steps: {
      install: {
        title: "Gemini CLI Installieren",
        description: "Wählen Sie die für Sie passende Installationsmethode",
        methods: {
          npx: {
            name: "NPX (Empfohlen)",
            description: "Keine Installation erforderlich, führt direkt die neueste Version aus"
          },
          npm: {
            name: "NPM Globale Installation",
            description: "Globale Installation zur Verwendung des gemini-Befehls überall"
          },
          homebrew: {
            name: "Homebrew (macOS)",
            description: "Empfohlen für macOS-Benutzer mit Homebrew"
          }
        }
      },
      firstRun: {
        title: "Erster Start",
        description: "Führen Sie Gemini CLI aus und vervollständigen Sie die Erstkonfiguration",
        steps: {
          command: {
            title: "Befehl Ausführen",
            description: "Geben Sie den gemini-Befehl im Terminal ein, um zu starten"
          },
          theme: {
            title: "Thema Wählen",
            description: "Der erste Start fordert Sie auf, ein Farbthema zu wählen, wählen Sie Ihren bevorzugten Stil"
          },
          auth: {
            title: "Authentifizierung",
            description: "Melden Sie sich mit Ihrem Google-Konto an, um kostenloses Nutzungskontingent zu erhalten"
          }
        }
      },
      firstChat: {
        title: "Erstes Gespräch",
        description: "Beginnen Sie mit der Interaktion mit der KI",
        examples: {
          greeting: {
            title: "Einfache Begrüßung",
            command: "> Hallo, können Sie sich vorstellen?",
            description: "Testen Sie die grundlegende Gesprächsfunktion"
          },
          code: {
            title: "Code-bezogene Fragen",
            command: "> Erklären Sie, was eine rekursive Funktion ist",
            description: "Stellen Sie programmierungsbezogene Fragen"
          },
          file: {
            title: "Dateioperationen",
            command: "> @README.md fassen Sie den Inhalt dieser Datei zusammen",
            description: "Verwenden Sie das @-Symbol, um Dateiinhalte zu lesen"
          }
        }
      }
    },
    tips: {
      title: "Wichtige Tipps",
      success: {
        title: "Erfolgs-Tipp",
        content: "Wenn Sie die Willkommensschnittstelle von Gemini CLI und die Eingabeaufforderung sehen, war die Installation erfolgreich!"
      },
      warning: {
        title: "Wichtige Hinweise",
        content: "Die erste Verwendung erfordert eine Netzwerkverbindung für Authentifizierung und Modellzugriff."
      },
      info: {
        title: "Nutzungstipps",
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
    commandsTitle: "Schnellreferenz für Häufige Befehle",
    nextSteps: {
      title: "Nächste Schritte",
      description: "Herzlichen Glückwunsch! Sie haben die Einführung in Gemini CLI erfolgreich abgeschlossen. Sie können nun weitere Funktionen erlernen:",
      basicCommands: "Grundlegende Befehle Lernen",
      fileOperations: "Einführung in Dateioperationen",
      backToGuides: "Zurück zur Anleitung-Startseite"
    }
  },
  ja: {
    title: "Gemini CLI の初回使用",
    subtitle: "10分間のクイックスタートでAI支援プログラミングの旅を始めましょう",
    description: "このチュートリアルは、Gemini CLIの基本操作とコア概念を学び、素早く始めるのに役立ちます。",
    meta: {
      level: "初心者向け",
      duration: "完了まで10分"
    },
    prerequisites: {
      title: "始める前に",
      nodejs: "Node.js 18以上がインストールされていること",
      terminal: "基本的なコマンドライン操作に慣れていること",
      google: "Googleアカウント（認証用）"
    },
    steps: {
      install: {
        title: "Gemini CLI のインストール",
        description: "適切なインストール方法を選択してください",
        methods: {
          npx: {
            name: "NPX（推奨）",
            description: "インストール不要、最新バージョンを直接実行"
          },
          npm: {
            name: "NPM グローバルインストール",
            description: "グローバルインストールでどこでもgeminiコマンドを使用"
          },
          homebrew: {
            name: "Homebrew（macOS）",
            description: "Homebrewを使用するmacOSユーザーに推奨"
          }
        }
      },
      firstRun: {
        title: "初回起動",
        description: "Gemini CLIを実行し、初期設定を完了します",
        steps: {
          command: {
            title: "コマンド実行",
            description: "ターミナルでgeminiコマンドを入力して開始"
          },
          theme: {
            title: "テーマ選択",
            description: "初回起動時にカラーテーマの選択を求められます。お好みのスタイルを選択してください"
          },
          auth: {
            title: "認証",
            description: "Googleアカウントでログインして無料使用枠を取得"
          }
        }
      },
      firstChat: {
        title: "初回会話",
        description: "AIとの対話を開始します",
        examples: {
          greeting: {
            title: "簡単な挨拶",
            command: "> こんにちは、自己紹介をしてください",
            description: "基本的な会話機能をテスト"
          },
          code: {
            title: "コード関連の質問",
            command: "> 再帰関数とは何か説明してください",
            description: "プログラミング関連の質問をする"
          },
          file: {
            title: "ファイル操作",
            command: "> @README.md このファイルの内容を要約してください",
            description: "@記号を使用してファイル内容を読み取り"
          }
        }
      }
    },
    tips: {
      title: "重要なヒント",
      success: {
        title: "成功のヒント",
        content: "Gemini CLIのウェルカム画面とプロンプトが表示されれば、インストール成功です！"
      },
      warning: {
        title: "重要な注意事項",
        content: "初回使用時は認証とモデルアクセスのためにネットワーク接続が必要です。"
      },
      info: {
        title: "使用のヒント",
        content: "いつでも /help を入力して利用可能なコマンドと機能を確認できます。"
      }
    },
    commands: {
      help: "ヘルプ情報と利用可能なコマンドを表示",
      clear: "画面内容をクリア",
      quit: "Gemini CLIを終了",
      theme: "インターフェーステーマを変更",
      file: "ファイル内容を会話に読み込み",
      system: "システムコマンドを実行"
    },
    commandsTitle: "よく使うコマンドのクイックリファレンス",
    nextSteps: {
      title: "次のステップ",
      description: "おめでとうございます！Gemini CLIの入門を正常に完了しました。さらなる機能を学習できます：",
      basicCommands: "基本コマンドを学ぶ",
      fileOperations: "ファイル操作入門",
      backToGuides: "ガイドホームに戻る"
    }
  },
  ko: {
    title: "Gemini CLI 첫 사용",
    subtitle: "10분 빠른 시작으로 AI 지원 프로그래밍 여정을 시작하세요",
    description: "이 튜토리얼은 Gemini CLI의 기본 작업과 핵심 개념을 학습하여 빠르게 시작하는 데 도움이 됩니다.",
    meta: {
      level: "초보자 친화적",
      duration: "완료까지 10분"
    },
    prerequisites: {
      title: "시작하기 전에",
      nodejs: "Node.js 18 이상이 설치되어 있어야 함",
      terminal: "기본적인 명령줄 작업에 익숙해야 함",
      google: "Google 계정 (인증용)"
    },
    steps: {
      install: {
        title: "Gemini CLI 설치",
        description: "적합한 설치 방법을 선택하세요",
        methods: {
          npx: {
            name: "NPX (권장)",
            description: "설치 불필요, 최신 버전을 직접 실행"
          },
          npm: {
            name: "NPM 전역 설치",
            description: "전역 설치로 어디서나 gemini 명령 사용"
          },
          homebrew: {
            name: "Homebrew (macOS)",
            description: "Homebrew를 사용하는 macOS 사용자에게 권장"
          }
        }
      },
      firstRun: {
        title: "첫 실행",
        description: "Gemini CLI를 실행하고 초기 설정을 완료합니다",
        steps: {
          command: {
            title: "명령 실행",
            description: "터미널에서 gemini 명령을 입력하여 시작"
          },
          theme: {
            title: "테마 선택",
            description: "첫 실행 시 색상 테마 선택을 요청합니다. 선호하는 스타일을 선택하세요"
          },
          auth: {
            title: "인증",
            description: "Google 계정으로 로그인하여 무료 사용 할당량 획득"
          }
        }
      },
      firstChat: {
        title: "첫 대화",
        description: "AI와 상호작용을 시작합니다",
        examples: {
          greeting: {
            title: "간단한 인사",
            command: "> 안녕하세요, 자기소개를 해주세요",
            description: "기본 대화 기능 테스트"
          },
          code: {
            title: "코드 관련 질문",
            command: "> 재귀 함수가 무엇인지 설명해주세요",
            description: "프로그래밍 관련 질문하기"
          },
          file: {
            title: "파일 작업",
            command: "> @README.md 이 파일의 내용을 요약해주세요",
            description: "@ 기호를 사용하여 파일 내용 읽기"
          }
        }
      }
    },
    tips: {
      title: "중요한 팁",
      success: {
        title: "성공 팁",
        content: "Gemini CLI의 환영 인터페이스와 프롬프트가 보이면 설치가 성공한 것입니다!"
      },
      warning: {
        title: "중요 사항",
        content: "첫 사용 시 인증과 모델 액세스를 위해 네트워크 연결이 필요합니다."
      },
      info: {
        title: "사용 팁",
        content: "언제든지 /help를 입력하여 사용 가능한 명령과 기능을 확인할 수 있습니다."
      }
    },
    commands: {
      help: "도움말 정보와 사용 가능한 명령 표시",
      clear: "화면 내용 지우기",
      quit: "Gemini CLI 종료",
      theme: "인터페이스 테마 변경",
      file: "파일 내용을 대화로 읽어오기",
      system: "시스템 명령 실행"
    },
    commandsTitle: "자주 사용하는 명령 빠른 참조",
    nextSteps: {
      title: "다음 단계",
      description: "축하합니다! Gemini CLI 입문을 성공적으로 완료했습니다. 이제 더 많은 기능을 학습할 수 있습니다:",
      basicCommands: "기본 명령 학습",
      fileOperations: "파일 작업 입문",
      backToGuides: "가이드 홈으로 돌아가기"
    }
  },
  es: {
    title: "Primer Uso de Gemini CLI",
    subtitle: "Inicio rápido de 10 minutos para comenzar tu viaje de programación asistida por IA",
    description: "Este tutorial te ayudará a comenzar rápidamente con Gemini CLI, aprendiendo operaciones básicas y conceptos fundamentales.",
    meta: {
      level: "Amigable para principiantes",
      duration: "10 minutos para completar"
    },
    prerequisites: {
      title: "Antes de Comenzar",
      nodejs: "Node.js 18 o superior instalado",
      terminal: "Familiaridad con operaciones básicas de línea de comandos",
      google: "Cuenta de Google (para autenticación)"
    },
    steps: {
      install: {
        title: "Instalar Gemini CLI",
        description: "Elige el método de instalación que te convenga",
        methods: {
          npx: {
            name: "NPX (Recomendado)",
            description: "No requiere instalación, ejecuta directamente la última versión"
          },
          npm: {
            name: "Instalación Global NPM",
            description: "Instalación global para usar el comando gemini en cualquier lugar"
          },
          homebrew: {
            name: "Homebrew (macOS)",
            description: "Recomendado para usuarios de macOS que usan Homebrew"
          }
        }
      },
      firstRun: {
        title: "Primera Ejecución",
        description: "Ejecuta Gemini CLI y completa la configuración inicial",
        steps: {
          command: {
            title: "Ejecutar Comando",
            description: "Ingresa el comando gemini en la terminal para comenzar"
          },
          theme: {
            title: "Elegir Tema",
            description: "La primera ejecución te pedirá elegir un tema de color, selecciona tu estilo preferido"
          },
          auth: {
            title: "Autenticación",
            description: "Inicia sesión con tu cuenta de Google para obtener cuota de uso gratuita"
          }
        }
      },
      firstChat: {
        title: "Primera Conversación",
        description: "Comienza a interactuar con la IA",
        examples: {
          greeting: {
            title: "Saludo Simple",
            command: "> Hola, ¿puedes presentarte?",
            description: "Prueba la funcionalidad básica de conversación"
          },
          code: {
            title: "Preguntas Relacionadas con Código",
            command: "> Explica qué es una función recursiva",
            description: "Haz preguntas relacionadas con programación"
          },
          file: {
            title: "Operaciones de Archivo",
            command: "> @README.md resume el contenido de este archivo",
            description: "Usa el símbolo @ para leer contenido de archivos"
          }
        }
      }
    },
    tips: {
      title: "Consejos Importantes",
      success: {
        title: "Consejo de Éxito",
        content: "¡Si ves la interfaz de bienvenida de Gemini CLI y el prompt, la instalación fue exitosa!"
      },
      warning: {
        title: "Notas Importantes",
        content: "El primer uso requiere conexión de red para autenticación y acceso al modelo."
      },
      info: {
        title: "Consejos de Uso",
        content: "Puedes ingresar /help en cualquier momento para ver comandos y funciones disponibles."
      }
    },
    commands: {
      help: "Mostrar información de ayuda y comandos disponibles",
      clear: "Limpiar contenido de pantalla",
      quit: "Salir de Gemini CLI",
      theme: "Cambiar tema de interfaz",
      file: "Leer contenido de archivo en conversación",
      system: "Ejecutar comandos del sistema"
    },
    commandsTitle: "Referencia Rápida de Comandos Comunes",
    nextSteps: {
      title: "Próximos Pasos",
      description: "¡Felicitaciones! Has completado exitosamente la introducción a Gemini CLI. Ahora puedes continuar aprendiendo más funciones:",
      basicCommands: "Aprender Comandos Básicos",
      fileOperations: "Introducción a Operaciones de Archivo",
      backToGuides: "Volver al Inicio de Guías"
    }
  }
};

// Function to apply getting-started translations
function applyGettingStartedTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = gettingStartedTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No getting-started translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesGettingStarted with professional translation
    data.guidesGettingStarted = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied getting-started translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const gettingStarted = newData.guidesGettingStarted;
    console.log(`   - Title: "${gettingStarted?.title || 'N/A'}"`);
    console.log(`   - Steps: ${Object.keys(gettingStarted?.steps || {}).length}`);
    console.log(`   - Commands: ${Object.keys(gettingStarted?.commands || {}).length}`);
    
  } catch (error) {
    console.error(`❌ Error applying getting-started translations for ${langCode}:`, error.message);
  }
}

// Apply getting-started translations
console.log('🚀 Applying professional getting-started translations...\n');

Object.keys(gettingStartedTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish'
  };
  
  console.log(`Applying getting-started translations for ${langNames[langCode]}...`);
  applyGettingStartedTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional getting-started translations applied!');
console.log('🎯 French, German, Japanese, Korean, and Spanish now have complete professional content.');
