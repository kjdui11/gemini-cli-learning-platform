const fs = require('fs');
const path = require('path');

const translations = {
  en: {
    "guidesMain": {
      "hero": {
        "title": "Gemini CLI Usage Guides",
        "description": "From basic introduction to advanced applications, master the powerful features of Gemini CLI and make AI your reliable assistant in development work."
      },
      "categories": {
        "title": "Learning Paths",
        "description": "Choose the appropriate learning path based on your experience level",
        "beginner": {
          "title": "Beginner Tutorials",
          "description": "Basic tutorials for beginners to quickly get started with Gemini CLI",
          "tutorials": [
            {
              "title": "First Time Using Gemini CLI",
              "description": "Understand basic concepts and complete your first AI conversation",
              "duration": "10 minutes",
              "level": "Beginner"
            },
            {
              "title": "Basic Command Operations",
              "description": "Learn common commands and basic syntax",
              "duration": "15 minutes",
              "level": "Beginner"
            },
            {
              "title": "File Operations Basics",
              "description": "Use AI to process and analyze file content",
              "duration": "20 minutes",
              "level": "Beginner"
            }
          ]
        },
        "intermediate": {
          "title": "Intermediate Tutorials",
          "description": "Deep dive into advanced features and best practices",
          "tutorials": [
            {
              "title": "Advanced Configuration Options",
              "description": "Customize Gemini CLI configuration and environment settings",
              "duration": "25 minutes",
              "level": "Intermediate"
            },
            {
              "title": "Integration with Other Tools",
              "description": "Integrate into existing development workflows",
              "duration": "30 minutes",
              "level": "Intermediate"
            },
            {
              "title": "MCP Protocol Usage",
              "description": "Use Model Context Protocol to extend functionality",
              "duration": "35 minutes",
              "level": "Intermediate"
            }
          ]
        },
        "examples": {
          "title": "Practical Cases",
          "description": "Application scenarios and solutions in real projects",
          "tutorials": [
            {
              "title": "Code Refactoring Assistant",
              "description": "Use AI to analyze and refactor existing code",
              "duration": "40 minutes",
              "level": "Practical"
            },
            {
              "title": "Project Documentation Generation",
              "description": "Automatically generate project documentation and README",
              "duration": "30 minutes",
              "level": "Practical"
            },
            {
              "title": "Code Review Assistant",
              "description": "Use AI for code quality inspection",
              "duration": "35 minutes",
              "level": "Practical"
            }
          ]
        }
      },
      "startLearning": "Start Learning",
      "quickAccess": {
        "title": "Quick Access",
        "description": "Jump directly to the content you need",
        "advanced": "Advanced Guides",
        "advancedDesc": "In-depth advanced tutorials and techniques",
        "examples": "Practical Examples",
        "examplesDesc": "Real project cases and solutions",
        "commands": "Command Reference",
        "commandsDesc": "Complete command list and syntax",
        "faq": "FAQ",
        "faqDesc": "Quickly find answers to common questions"
      },
      "cta": {
        "title": "Ready to Start Your AI Programming Journey?",
        "description": "Install Gemini CLI now and start experiencing the powerful features of AI-assisted programming.",
        "getStarted": "Get Started",
        "viewDocs": "View Documentation"
      }
    }
  },
  de: {
    "guidesMain": {
      "hero": {
        "title": "Gemini CLI Nutzungsanleitungen",
        "description": "Von der grundlegenden Einführung bis zu fortgeschrittenen Anwendungen - meistern Sie die leistungsstarken Funktionen von Gemini CLI und machen Sie KI zu Ihrem zuverlässigen Assistenten in der Entwicklungsarbeit."
      },
      "categories": {
        "title": "Lernpfade",
        "description": "Wählen Sie den passenden Lernpfad basierend auf Ihrem Erfahrungslevel",
        "beginner": {
          "title": "Einsteiger-Tutorials",
          "description": "Grundlegende Tutorials für Anfänger, um schnell mit Gemini CLI zu beginnen",
          "tutorials": [
            {
              "title": "Erste Verwendung von Gemini CLI",
              "description": "Grundkonzepte verstehen und Ihr erstes KI-Gespräch führen",
              "duration": "10 Minuten",
              "level": "Einsteiger"
            },
            {
              "title": "Grundlegende Befehlsoperationen",
              "description": "Häufige Befehle und grundlegende Syntax lernen",
              "duration": "15 Minuten",
              "level": "Einsteiger"
            },
            {
              "title": "Dateioperationen Grundlagen",
              "description": "KI zur Verarbeitung und Analyse von Dateiinhalten verwenden",
              "duration": "20 Minuten",
              "level": "Einsteiger"
            }
          ]
        },
        "intermediate": {
          "title": "Fortgeschrittene Tutorials",
          "description": "Vertiefen Sie sich in erweiterte Funktionen und bewährte Praktiken",
          "tutorials": [
            {
              "title": "Erweiterte Konfigurationsoptionen",
              "description": "Gemini CLI-Konfiguration und Umgebungseinstellungen anpassen",
              "duration": "25 Minuten",
              "level": "Fortgeschritten"
            },
            {
              "title": "Integration mit anderen Tools",
              "description": "In bestehende Entwicklungsworkflows integrieren",
              "duration": "30 Minuten",
              "level": "Fortgeschritten"
            },
            {
              "title": "MCP-Protokoll Verwendung",
              "description": "Model Context Protocol zur Funktionserweiterung verwenden",
              "duration": "35 Minuten",
              "level": "Fortgeschritten"
            }
          ]
        },
        "examples": {
          "title": "Praktische Fälle",
          "description": "Anwendungsszenarien und Lösungen in realen Projekten",
          "tutorials": [
            {
              "title": "Code-Refactoring-Assistent",
              "description": "KI zur Analyse und Refaktorierung bestehenden Codes verwenden",
              "duration": "40 Minuten",
              "level": "Praktisch"
            },
            {
              "title": "Projektdokumentation generieren",
              "description": "Automatische Generierung von Projektdokumentation und README",
              "duration": "30 Minuten",
              "level": "Praktisch"
            },
            {
              "title": "Code-Review-Assistent",
              "description": "KI für Code-Qualitätsprüfung verwenden",
              "duration": "35 Minuten",
              "level": "Praktisch"
            }
          ]
        }
      },
      "startLearning": "Lernen beginnen",
      "quickAccess": {
        "title": "Schnellzugriff",
        "description": "Springen Sie direkt zu den Inhalten, die Sie benötigen",
        "advanced": "Erweiterte Anleitungen",
        "advancedDesc": "Tiefgreifende fortgeschrittene Tutorials und Techniken",
        "examples": "Praktische Beispiele",
        "examplesDesc": "Echte Projektfälle und Lösungen",
        "commands": "Befehlsreferenz",
        "commandsDesc": "Vollständige Befehlsliste und Syntax",
        "faq": "FAQ",
        "faqDesc": "Schnell Antworten auf häufige Fragen finden"
      },
      "cta": {
        "title": "Bereit, Ihre KI-Programmierreise zu beginnen?",
        "description": "Installieren Sie Gemini CLI jetzt und beginnen Sie, die leistungsstarken Funktionen der KI-unterstützten Programmierung zu erleben.",
        "getStarted": "Jetzt beginnen",
        "viewDocs": "Dokumentation anzeigen"
      }
    }
  },
  fr: {
    "guidesMain": {
      "hero": {
        "title": "Guides d'utilisation de Gemini CLI",
        "description": "De l'introduction de base aux applications avancées, maîtrisez les fonctionnalités puissantes de Gemini CLI et faites de l'IA votre assistant fiable dans le travail de développement."
      },
      "categories": {
        "title": "Parcours d'apprentissage",
        "description": "Choisissez le parcours d'apprentissage approprié selon votre niveau d'expérience",
        "beginner": {
          "title": "Tutoriels débutants",
          "description": "Tutoriels de base pour les débutants pour commencer rapidement avec Gemini CLI",
          "tutorials": [
            {
              "title": "Première utilisation de Gemini CLI",
              "description": "Comprendre les concepts de base et compléter votre première conversation IA",
              "duration": "10 minutes",
              "level": "Débutant"
            },
            {
              "title": "Opérations de commandes de base",
              "description": "Apprendre les commandes courantes et la syntaxe de base",
              "duration": "15 minutes",
              "level": "Débutant"
            },
            {
              "title": "Bases des opérations sur fichiers",
              "description": "Utiliser l'IA pour traiter et analyser le contenu des fichiers",
              "duration": "20 minutes",
              "level": "Débutant"
            }
          ]
        },
        "intermediate": {
          "title": "Tutoriels intermédiaires",
          "description": "Plongez dans les fonctionnalités avancées et les meilleures pratiques",
          "tutorials": [
            {
              "title": "Options de configuration avancées",
              "description": "Personnaliser la configuration Gemini CLI et les paramètres d'environnement",
              "duration": "25 minutes",
              "level": "Intermédiaire"
            },
            {
              "title": "Intégration avec d'autres outils",
              "description": "Intégrer dans les flux de travail de développement existants",
              "duration": "30 minutes",
              "level": "Intermédiaire"
            },
            {
              "title": "Utilisation du protocole MCP",
              "description": "Utiliser le Model Context Protocol pour étendre les fonctionnalités",
              "duration": "35 minutes",
              "level": "Intermédiaire"
            }
          ]
        },
        "examples": {
          "title": "Cas pratiques",
          "description": "Scénarios d'application et solutions dans de vrais projets",
          "tutorials": [
            {
              "title": "Assistant de refactorisation de code",
              "description": "Utiliser l'IA pour analyser et refactoriser le code existant",
              "duration": "40 minutes",
              "level": "Pratique"
            },
            {
              "title": "Génération de documentation de projet",
              "description": "Générer automatiquement la documentation de projet et README",
              "duration": "30 minutes",
              "level": "Pratique"
            },
            {
              "title": "Assistant de révision de code",
              "description": "Utiliser l'IA pour l'inspection de la qualité du code",
              "duration": "35 minutes",
              "level": "Pratique"
            }
          ]
        }
      },
      "startLearning": "Commencer l'apprentissage",
      "quickAccess": {
        "title": "Accès rapide",
        "description": "Accédez directement au contenu dont vous avez besoin",
        "advanced": "Guides avancés",
        "advancedDesc": "Tutoriels et techniques avancés approfondis",
        "examples": "Exemples pratiques",
        "examplesDesc": "Cas de projets réels et solutions",
        "commands": "Référence des commandes",
        "commandsDesc": "Liste complète des commandes et syntaxe",
        "faq": "FAQ",
        "faqDesc": "Trouvez rapidement des réponses aux questions courantes"
      },
      "cta": {
        "title": "Prêt à commencer votre voyage de programmation IA ?",
        "description": "Installez Gemini CLI maintenant et commencez à découvrir les fonctionnalités puissantes de la programmation assistée par IA.",
        "getStarted": "Commencer",
        "viewDocs": "Voir la documentation"
      }
    }
  },
  ja: {
    "guidesMain": {
      "hero": {
        "title": "Gemini CLI 使用ガイド",
        "description": "基本的な紹介から高度なアプリケーションまで、Gemini CLIの強力な機能をマスターし、AIを開発作業の信頼できるアシスタントにしましょう。"
      },
      "categories": {
        "title": "学習パス",
        "description": "経験レベルに基づいて適切な学習パスを選択してください",
        "beginner": {
          "title": "初心者向けチュートリアル",
          "description": "初心者がGemini CLIを素早く始めるための基本チュートリアル",
          "tutorials": [
            {
              "title": "Gemini CLIの初回使用",
              "description": "基本概念を理解し、最初のAI会話を完了する",
              "duration": "10分",
              "level": "初心者"
            },
            {
              "title": "基本コマンド操作",
              "description": "一般的なコマンドと基本構文を学ぶ",
              "duration": "15分",
              "level": "初心者"
            },
            {
              "title": "ファイル操作の基本",
              "description": "AIを使用してファイルコンテンツを処理・分析する",
              "duration": "20分",
              "level": "初心者"
            }
          ]
        },
        "intermediate": {
          "title": "中級チュートリアル",
          "description": "高度な機能とベストプラクティスを深く学ぶ",
          "tutorials": [
            {
              "title": "高度な設定オプション",
              "description": "Gemini CLI設定と環境設定をカスタマイズする",
              "duration": "25分",
              "level": "中級"
            },
            {
              "title": "他のツールとの統合",
              "description": "既存の開発ワークフローに統合する",
              "duration": "30分",
              "level": "中級"
            },
            {
              "title": "MCPプロトコルの使用",
              "description": "Model Context Protocolを使用して機能を拡張する",
              "duration": "35分",
              "level": "中級"
            }
          ]
        },
        "examples": {
          "title": "実践的なケース",
          "description": "実際のプロジェクトでのアプリケーションシナリオとソリューション",
          "tutorials": [
            {
              "title": "コードリファクタリングアシスタント",
              "description": "AIを使用して既存のコードを分析・リファクタリングする",
              "duration": "40分",
              "level": "実践"
            },
            {
              "title": "プロジェクトドキュメント生成",
              "description": "プロジェクトドキュメントとREADMEを自動生成する",
              "duration": "30分",
              "level": "実践"
            },
            {
              "title": "コードレビューアシスタント",
              "description": "AIを使用してコード品質検査を行う",
              "duration": "35分",
              "level": "実践"
            }
          ]
        }
      },
      "startLearning": "学習を開始",
      "quickAccess": {
        "title": "クイックアクセス",
        "description": "必要なコンテンツに直接ジャンプ",
        "advanced": "高度なガイド",
        "advancedDesc": "詳細な高度なチュートリアルとテクニック",
        "examples": "実用的な例",
        "examplesDesc": "実際のプロジェクトケースとソリューション",
        "commands": "コマンドリファレンス",
        "commandsDesc": "完全なコマンドリストと構文",
        "faq": "FAQ",
        "faqDesc": "よくある質問の答えを素早く見つける"
      },
      "cta": {
        "title": "AIプログラミングの旅を始める準備はできましたか？",
        "description": "今すぐGemini CLIをインストールして、AI支援プログラミングの強力な機能を体験し始めましょう。",
        "getStarted": "今すぐ始める",
        "viewDocs": "ドキュメントを見る"
      }
    }
  },
  ko: {
    "guidesMain": {
      "hero": {
        "title": "Gemini CLI 사용 가이드",
        "description": "기본 소개부터 고급 응용까지, Gemini CLI의 강력한 기능을 마스터하고 AI를 개발 작업의 신뢰할 수 있는 조수로 만드세요."
      },
      "categories": {
        "title": "학습 경로",
        "description": "경험 수준에 따라 적절한 학습 경로를 선택하세요",
        "beginner": {
          "title": "초보자 튜토리얼",
          "description": "초보자가 Gemini CLI를 빠르게 시작할 수 있는 기본 튜토리얼",
          "tutorials": [
            {
              "title": "Gemini CLI 첫 사용",
              "description": "기본 개념을 이해하고 첫 AI 대화를 완료하세요",
              "duration": "10분",
              "level": "초보자"
            },
            {
              "title": "기본 명령 작업",
              "description": "일반적인 명령과 기본 구문을 배우세요",
              "duration": "15분",
              "level": "초보자"
            },
            {
              "title": "파일 작업 기초",
              "description": "AI를 사용하여 파일 내용을 처리하고 분석하세요",
              "duration": "20분",
              "level": "초보자"
            }
          ]
        },
        "intermediate": {
          "title": "중급 튜토리얼",
          "description": "고급 기능과 모범 사례를 깊이 학습하세요",
          "tutorials": [
            {
              "title": "고급 구성 옵션",
              "description": "Gemini CLI 구성과 환경 설정을 사용자 정의하세요",
              "duration": "25분",
              "level": "중급"
            },
            {
              "title": "다른 도구와의 통합",
              "description": "기존 개발 워크플로우에 통합하세요",
              "duration": "30분",
              "level": "중급"
            },
            {
              "title": "MCP 프로토콜 사용",
              "description": "Model Context Protocol을 사용하여 기능을 확장하세요",
              "duration": "35분",
              "level": "중급"
            }
          ]
        },
        "examples": {
          "title": "실용적인 사례",
          "description": "실제 프로젝트의 응용 시나리오와 솔루션",
          "tutorials": [
            {
              "title": "코드 리팩토링 도우미",
              "description": "AI를 사용하여 기존 코드를 분석하고 리팩토링하세요",
              "duration": "40분",
              "level": "실용"
            },
            {
              "title": "프로젝트 문서 생성",
              "description": "프로젝트 문서와 README를 자동으로 생성하세요",
              "duration": "30분",
              "level": "실용"
            },
            {
              "title": "코드 리뷰 도우미",
              "description": "AI를 사용하여 코드 품질 검사를 수행하세요",
              "duration": "35분",
              "level": "실용"
            }
          ]
        }
      },
      "startLearning": "학습 시작",
      "quickAccess": {
        "title": "빠른 액세스",
        "description": "필요한 콘텐츠로 직접 이동",
        "advanced": "고급 가이드",
        "advancedDesc": "심화된 고급 튜토리얼과 기법",
        "examples": "실용적인 예제",
        "examplesDesc": "실제 프로젝트 사례와 솔루션",
        "commands": "명령 참조",
        "commandsDesc": "완전한 명령 목록과 구문",
        "faq": "FAQ",
        "faqDesc": "일반적인 질문에 대한 답변을 빠르게 찾기"
      },
      "cta": {
        "title": "AI 프로그래밍 여정을 시작할 준비가 되셨나요?",
        "description": "지금 Gemini CLI를 설치하고 AI 지원 프로그래밍의 강력한 기능을 경험해보세요.",
        "getStarted": "시작하기",
        "viewDocs": "문서 보기"
      }
    }
  },
  es: {
    "guidesMain": {
      "hero": {
        "title": "Guías de uso de Gemini CLI",
        "description": "Desde la introducción básica hasta aplicaciones avanzadas, domina las potentes características de Gemini CLI y haz de la IA tu asistente confiable en el trabajo de desarrollo."
      },
      "categories": {
        "title": "Rutas de aprendizaje",
        "description": "Elige la ruta de aprendizaje apropiada según tu nivel de experiencia",
        "beginner": {
          "title": "Tutoriales para principiantes",
          "description": "Tutoriales básicos para principiantes para comenzar rápidamente con Gemini CLI",
          "tutorials": [
            {
              "title": "Primer uso de Gemini CLI",
              "description": "Comprende conceptos básicos y completa tu primera conversación con IA",
              "duration": "10 minutos",
              "level": "Principiante"
            },
            {
              "title": "Operaciones básicas de comandos",
              "description": "Aprende comandos comunes y sintaxis básica",
              "duration": "15 minutos",
              "level": "Principiante"
            },
            {
              "title": "Fundamentos de operaciones de archivos",
              "description": "Usa IA para procesar y analizar contenido de archivos",
              "duration": "20 minutos",
              "level": "Principiante"
            }
          ]
        },
        "intermediate": {
          "title": "Tutoriales intermedios",
          "description": "Profundiza en características avanzadas y mejores prácticas",
          "tutorials": [
            {
              "title": "Opciones de configuración avanzadas",
              "description": "Personaliza la configuración de Gemini CLI y ajustes del entorno",
              "duration": "25 minutos",
              "level": "Intermedio"
            },
            {
              "title": "Integración con otras herramientas",
              "description": "Integra en flujos de trabajo de desarrollo existentes",
              "duration": "30 minutos",
              "level": "Intermedio"
            },
            {
              "title": "Uso del protocolo MCP",
              "description": "Usa Model Context Protocol para extender funcionalidad",
              "duration": "35 minutos",
              "level": "Intermedio"
            }
          ]
        },
        "examples": {
          "title": "Casos prácticos",
          "description": "Escenarios de aplicación y soluciones en proyectos reales",
          "tutorials": [
            {
              "title": "Asistente de refactorización de código",
              "description": "Usa IA para analizar y refactorizar código existente",
              "duration": "40 minutos",
              "level": "Práctico"
            },
            {
              "title": "Generación de documentación de proyecto",
              "description": "Genera automáticamente documentación de proyecto y README",
              "duration": "30 minutos",
              "level": "Práctico"
            },
            {
              "title": "Asistente de revisión de código",
              "description": "Usa IA para inspección de calidad de código",
              "duration": "35 minutos",
              "level": "Práctico"
            }
          ]
        }
      },
      "startLearning": "Comenzar aprendizaje",
      "quickAccess": {
        "title": "Acceso rápido",
        "description": "Salta directamente al contenido que necesitas",
        "advanced": "Guías avanzadas",
        "advancedDesc": "Tutoriales y técnicas avanzadas en profundidad",
        "examples": "Ejemplos prácticos",
        "examplesDesc": "Casos de proyectos reales y soluciones",
        "commands": "Referencia de comandos",
        "commandsDesc": "Lista completa de comandos y sintaxis",
        "faq": "FAQ",
        "faqDesc": "Encuentra rápidamente respuestas a preguntas comunes"
      },
      "cta": {
        "title": "¿Listo para comenzar tu viaje de programación con IA?",
        "description": "Instala Gemini CLI ahora y comienza a experimentar las potentes características de la programación asistida por IA.",
        "getStarted": "Comenzar",
        "viewDocs": "Ver documentación"
      }
    }
  },
  hi: {
    "guidesMain": {
      "hero": {
        "title": "Gemini CLI उपयोग गाइड",
        "description": "बुनियादी परिचय से लेकर उन्नत अनुप्रयोगों तक, Gemini CLI की शक्तिशाली सुविधाओं में महारत हासिल करें और AI को अपने विकास कार्य में एक विश्वसनीय सहायक बनाएं।"
      },
      "categories": {
        "title": "सीखने के पथ",
        "description": "अपने अनुभव स्तर के आधार पर उपयुक्त सीखने का पथ चुनें",
        "beginner": {
          "title": "शुरुआती ट्यूटोरियल",
          "description": "शुरुआती लोगों के लिए बुनियादी ट्यूटोरियल जो Gemini CLI के साथ जल्दी शुरुआत करने में मदद करते हैं",
          "tutorials": [
            {
              "title": "Gemini CLI का पहला उपयोग",
              "description": "बुनियादी अवधारणाओं को समझें और अपनी पहली AI बातचीत पूरी करें",
              "duration": "10 मिनट",
              "level": "शुरुआती"
            },
            {
              "title": "बुनियादी कमांड संचालन",
              "description": "सामान्य कमांड और बुनियादी सिंटैक्स सीखें",
              "duration": "15 मिनट",
              "level": "शुरुआती"
            },
            {
              "title": "फ़ाइल संचालन की मूल बातें",
              "description": "फ़ाइल सामग्री को प्रोसेस और विश्लेषित करने के लिए AI का उपयोग करें",
              "duration": "20 मिनट",
              "level": "शुरुआती"
            }
          ]
        },
        "intermediate": {
          "title": "मध्यम ट्यूटोरियल",
          "description": "उन्नत सुविधाओं और सर्वोत्तम प्रथाओं में गहराई से जाएं",
          "tutorials": [
            {
              "title": "उन्नत कॉन्फ़िगरेशन विकल्प",
              "description": "Gemini CLI कॉन्फ़िगरेशन और पर्यावरण सेटिंग्स को कस्टमाइज़ करें",
              "duration": "25 मिनट",
              "level": "मध्यम"
            },
            {
              "title": "अन्य उपकरणों के साथ एकीकरण",
              "description": "मौजूदा विकास वर्कफ़्लो में एकीकृत करें",
              "duration": "30 मिनट",
              "level": "मध्यम"
            },
            {
              "title": "MCP प्रोटोकॉल का उपयोग",
              "description": "कार्यक्षमता बढ़ाने के लिए Model Context Protocol का उपयोग करें",
              "duration": "35 मिनट",
              "level": "मध्यम"
            }
          ]
        },
        "examples": {
          "title": "व्यावहारिक मामले",
          "description": "वास्तविक परियोजनाओं में अनुप्रयोग परिदृश्य और समाधान",
          "tutorials": [
            {
              "title": "कोड रिफैक्टरिंग सहायक",
              "description": "मौजूदा कोड का विश्लेषण और रिफैक्टर करने के लिए AI का उपयोग करें",
              "duration": "40 मिनट",
              "level": "व्यावहारिक"
            },
            {
              "title": "प्रोजेक्ट दस्तावेज़ीकरण जेनरेशन",
              "description": "प्रोजेक्ट दस्तावेज़ीकरण और README स्वचालित रूप से जेनरेट करें",
              "duration": "30 मिनट",
              "level": "व्यावहारिक"
            },
            {
              "title": "कोड समीक्षा सहायक",
              "description": "कोड गुणवत्ता निरीक्षण के लिए AI का उपयोग करें",
              "duration": "35 मिनट",
              "level": "व्यावहारिक"
            }
          ]
        }
      },
      "startLearning": "सीखना शुरू करें",
      "quickAccess": {
        "title": "त्वरित पहुंच",
        "description": "आपको जिस सामग्री की आवश्यकता है उस पर सीधे जाएं",
        "advanced": "उन्नत गाइड",
        "advancedDesc": "गहन उन्नत ट्यूटोरियल और तकनीकें",
        "examples": "व्यावहारिक उदाहरण",
        "examplesDesc": "वास्तविक प्रोजेक्ट मामले और समाधान",
        "commands": "कमांड संदर्भ",
        "commandsDesc": "पूर्ण कमांड सूची और सिंटैक्स",
        "faq": "FAQ",
        "faqDesc": "सामान्य प्रश्नों के उत्तर जल्दी खोजें"
      },
      "cta": {
        "title": "अपनी AI प्रोग्रामिंग यात्रा शुरू करने के लिए तैयार हैं?",
        "description": "अभी Gemini CLI इंस्टॉल करें और AI-सहायक प्रोग्रामिंग की शक्तिशाली सुविधाओं का अनुभव करना शुरू करें।",
        "getStarted": "शुरू करें",
        "viewDocs": "दस्तावेज़ देखें"
      }
    }
  },
  ru: {
    "guidesMain": {
      "hero": {
        "title": "Руководства по использованию Gemini CLI",
        "description": "От базового введения до продвинутых приложений - освойте мощные функции Gemini CLI и сделайте ИИ вашим надежным помощником в работе разработчика."
      },
      "categories": {
        "title": "Пути обучения",
        "description": "Выберите подходящий путь обучения в зависимости от вашего уровня опыта",
        "beginner": {
          "title": "Учебники для начинающих",
          "description": "Базовые учебники для начинающих, чтобы быстро начать работу с Gemini CLI",
          "tutorials": [
            {
              "title": "Первое использование Gemini CLI",
              "description": "Понимание основных концепций и завершение первого разговора с ИИ",
              "duration": "10 минут",
              "level": "Начинающий"
            },
            {
              "title": "Основные операции с командами",
              "description": "Изучение общих команд и базового синтаксиса",
              "duration": "15 минут",
              "level": "Начинающий"
            },
            {
              "title": "Основы операций с файлами",
              "description": "Использование ИИ для обработки и анализа содержимого файлов",
              "duration": "20 минут",
              "level": "Начинающий"
            }
          ]
        },
        "intermediate": {
          "title": "Промежуточные учебники",
          "description": "Глубокое изучение продвинутых функций и лучших практик",
          "tutorials": [
            {
              "title": "Продвинутые параметры конфигурации",
              "description": "Настройка конфигурации Gemini CLI и параметров среды",
              "duration": "25 минут",
              "level": "Промежуточный"
            },
            {
              "title": "Интеграция с другими инструментами",
              "description": "Интеграция в существующие рабочие процессы разработки",
              "duration": "30 минут",
              "level": "Промежуточный"
            },
            {
              "title": "Использование протокола MCP",
              "description": "Использование Model Context Protocol для расширения функциональности",
              "duration": "35 минут",
              "level": "Промежуточный"
            }
          ]
        },
        "examples": {
          "title": "Практические случаи",
          "description": "Сценарии применения и решения в реальных проектах",
          "tutorials": [
            {
              "title": "Помощник рефакторинга кода",
              "description": "Использование ИИ для анализа и рефакторинга существующего кода",
              "duration": "40 минут",
              "level": "Практический"
            },
            {
              "title": "Генерация документации проекта",
              "description": "Автоматическая генерация документации проекта и README",
              "duration": "30 минут",
              "level": "Практический"
            },
            {
              "title": "Помощник обзора кода",
              "description": "Использование ИИ для проверки качества кода",
              "duration": "35 минут",
              "level": "Практический"
            }
          ]
        }
      },
      "startLearning": "Начать обучение",
      "quickAccess": {
        "title": "Быстрый доступ",
        "description": "Переходите прямо к нужному вам контенту",
        "advanced": "Продвинутые руководства",
        "advancedDesc": "Углубленные продвинутые учебники и техники",
        "examples": "Практические примеры",
        "examplesDesc": "Реальные случаи проектов и решения",
        "commands": "Справочник команд",
        "commandsDesc": "Полный список команд и синтаксис",
        "faq": "FAQ",
        "faqDesc": "Быстро найти ответы на часто задаваемые вопросы"
      },
      "cta": {
        "title": "Готовы начать свое путешествие в ИИ-программирование?",
        "description": "Установите Gemini CLI сейчас и начните испытывать мощные функции программирования с помощью ИИ.",
        "getStarted": "Начать",
        "viewDocs": "Посмотреть документацию"
      }
    }
  }
};

// Add translations to all language files
Object.keys(translations).forEach(lang => {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add guidesMain before guidesExamples
    const newData = {};
    for (const [key, value] of Object.entries(data)) {
      if (key === 'guidesExamples') {
        newData.guidesMain = translations[lang].guidesMain;
      }
      newData[key] = value;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), 'utf8');
    console.log(`✓ Added guidesMain translations for ${lang}`);
  }
});

console.log('✓ All guidesMain translations added');
