const fs = require('fs');
const path = require('path');

const guidesTranslations = {
  zh: {
    guidesGettingStarted: {
      title: "第一次使用 Gemini CLI",
      subtitle: "了解基本概念，完成第一个 AI 对话",
      description: "本教程将带您快速上手 Gemini CLI，学习基本操作和核心概念。"
    },
    guidesBasicCommands: {
      title: "基本命令操作",
      subtitle: "学习常用命令和基本语法",
      description: "掌握 Gemini CLI 的基本命令，提升日常开发效率。"
    },
    guidesFileOperations: {
      title: "文件操作入门",
      subtitle: "使用 AI 处理和分析文件内容",
      description: "学习如何使用 Gemini CLI 处理各种文件类型和内容分析。"
    },
    guidesAdvancedConfig: {
      title: "高级配置选项",
      subtitle: "自定义 Gemini CLI 配置和环境设置",
      description: "深入了解 Gemini CLI 的高级配置选项，优化您的使用体验。"
    },
    guidesIntegration: {
      title: "与其他工具集成",
      subtitle: "集成到现有开发工作流程中",
      description: "学习如何将 Gemini CLI 集成到您现有的开发工具链中。"
    },
    guidesMcpProtocol: {
      title: "MCP 协议使用",
      subtitle: "使用 Model Context Protocol 扩展功能",
      description: "了解和使用 Model Context Protocol 来扩展 Gemini CLI 的功能。"
    },
    guidesCodeRefactoring: {
      title: "代码重构助手",
      subtitle: "使用 AI 分析和重构现有代码",
      description: "学习如何使用 Gemini CLI 进行代码重构和优化。"
    },
    guidesDocumentation: {
      title: "项目文档生成",
      subtitle: "自动生成项目文档和 README",
      description: "使用 AI 自动生成高质量的项目文档和说明文件。"
    },
    guidesCodeReview: {
      title: "代码审查助手",
      subtitle: "使用 AI 进行代码质量检查",
      description: "利用 AI 的力量进行代码审查和质量检查。"
    }
  },
  en: {
    guidesGettingStarted: {
      title: "First Time Using Gemini CLI",
      subtitle: "Understand basic concepts and complete your first AI conversation",
      description: "This tutorial will help you quickly get started with Gemini CLI, learning basic operations and core concepts."
    },
    guidesBasicCommands: {
      title: "Basic Command Operations",
      subtitle: "Learn common commands and basic syntax",
      description: "Master the basic commands of Gemini CLI to improve your daily development efficiency."
    },
    guidesFileOperations: {
      title: "File Operations Basics",
      subtitle: "Use AI to process and analyze file content",
      description: "Learn how to use Gemini CLI to handle various file types and content analysis."
    },
    guidesAdvancedConfig: {
      title: "Advanced Configuration Options",
      subtitle: "Customize Gemini CLI configuration and environment settings",
      description: "Deep dive into advanced configuration options of Gemini CLI to optimize your user experience."
    },
    guidesIntegration: {
      title: "Integration with Other Tools",
      subtitle: "Integrate into existing development workflows",
      description: "Learn how to integrate Gemini CLI into your existing development toolchain."
    },
    guidesMcpProtocol: {
      title: "MCP Protocol Usage",
      subtitle: "Use Model Context Protocol to extend functionality",
      description: "Understand and use Model Context Protocol to extend Gemini CLI functionality."
    },
    guidesCodeRefactoring: {
      title: "Code Refactoring Assistant",
      subtitle: "Use AI to analyze and refactor existing code",
      description: "Learn how to use Gemini CLI for code refactoring and optimization."
    },
    guidesDocumentation: {
      title: "Project Documentation Generation",
      subtitle: "Automatically generate project documentation and README",
      description: "Use AI to automatically generate high-quality project documentation and README files."
    },
    guidesCodeReview: {
      title: "Code Review Assistant",
      subtitle: "Use AI for code quality inspection",
      description: "Leverage the power of AI for code review and quality inspection."
    }
  }
};

// Add translations for other languages
const otherLanguages = {
  de: {
    guidesGettingStarted: {
      title: "Erste Verwendung von Gemini CLI",
      subtitle: "Grundkonzepte verstehen und Ihr erstes KI-Gespräch führen",
      description: "Dieses Tutorial hilft Ihnen, schnell mit Gemini CLI zu beginnen und grundlegende Operationen und Kernkonzepte zu lernen."
    },
    guidesBasicCommands: {
      title: "Grundlegende Befehlsoperationen",
      subtitle: "Häufige Befehle und grundlegende Syntax lernen",
      description: "Meistern Sie die grundlegenden Befehle von Gemini CLI, um Ihre tägliche Entwicklungseffizienz zu verbessern."
    },
    guidesFileOperations: {
      title: "Dateioperationen Grundlagen",
      subtitle: "KI zur Verarbeitung und Analyse von Dateiinhalten verwenden",
      description: "Lernen Sie, wie Sie Gemini CLI zur Behandlung verschiedener Dateitypen und Inhaltsanalyse verwenden."
    },
    guidesAdvancedConfig: {
      title: "Erweiterte Konfigurationsoptionen",
      subtitle: "Gemini CLI-Konfiguration und Umgebungseinstellungen anpassen",
      description: "Vertiefen Sie sich in erweiterte Konfigurationsoptionen von Gemini CLI, um Ihre Benutzererfahrung zu optimieren."
    },
    guidesIntegration: {
      title: "Integration mit anderen Tools",
      subtitle: "In bestehende Entwicklungsworkflows integrieren",
      description: "Lernen Sie, wie Sie Gemini CLI in Ihre bestehende Entwicklungs-Toolchain integrieren."
    },
    guidesMcpProtocol: {
      title: "MCP-Protokoll Verwendung",
      subtitle: "Model Context Protocol zur Funktionserweiterung verwenden",
      description: "Verstehen und verwenden Sie Model Context Protocol, um die Funktionalität von Gemini CLI zu erweitern."
    },
    guidesCodeRefactoring: {
      title: "Code-Refactoring-Assistent",
      subtitle: "KI zur Analyse und Refaktorierung bestehenden Codes verwenden",
      description: "Lernen Sie, wie Sie Gemini CLI für Code-Refactoring und -Optimierung verwenden."
    },
    guidesDocumentation: {
      title: "Projektdokumentation generieren",
      subtitle: "Automatische Generierung von Projektdokumentation und README",
      description: "Verwenden Sie KI, um automatisch hochwertige Projektdokumentation und README-Dateien zu generieren."
    },
    guidesCodeReview: {
      title: "Code-Review-Assistent",
      subtitle: "KI für Code-Qualitätsprüfung verwenden",
      description: "Nutzen Sie die Kraft der KI für Code-Review und Qualitätsprüfung."
    }
  },
  fr: {
    guidesGettingStarted: {
      title: "Première utilisation de Gemini CLI",
      subtitle: "Comprendre les concepts de base et compléter votre première conversation IA",
      description: "Ce tutoriel vous aidera à commencer rapidement avec Gemini CLI, en apprenant les opérations de base et les concepts fondamentaux."
    },
    guidesBasicCommands: {
      title: "Opérations de commandes de base",
      subtitle: "Apprendre les commandes courantes et la syntaxe de base",
      description: "Maîtrisez les commandes de base de Gemini CLI pour améliorer votre efficacité de développement quotidienne."
    },
    guidesFileOperations: {
      title: "Bases des opérations sur fichiers",
      subtitle: "Utiliser l'IA pour traiter et analyser le contenu des fichiers",
      description: "Apprenez à utiliser Gemini CLI pour gérer différents types de fichiers et l'analyse de contenu."
    },
    guidesAdvancedConfig: {
      title: "Options de configuration avancées",
      subtitle: "Personnaliser la configuration Gemini CLI et les paramètres d'environnement",
      description: "Plongez dans les options de configuration avancées de Gemini CLI pour optimiser votre expérience utilisateur."
    },
    guidesIntegration: {
      title: "Intégration avec d'autres outils",
      subtitle: "Intégrer dans les flux de travail de développement existants",
      description: "Apprenez à intégrer Gemini CLI dans votre chaîne d'outils de développement existante."
    },
    guidesMcpProtocol: {
      title: "Utilisation du protocole MCP",
      subtitle: "Utiliser le Model Context Protocol pour étendre les fonctionnalités",
      description: "Comprendre et utiliser le Model Context Protocol pour étendre les fonctionnalités de Gemini CLI."
    },
    guidesCodeRefactoring: {
      title: "Assistant de refactorisation de code",
      subtitle: "Utiliser l'IA pour analyser et refactoriser le code existant",
      description: "Apprenez à utiliser Gemini CLI pour la refactorisation et l'optimisation de code."
    },
    guidesDocumentation: {
      title: "Génération de documentation de projet",
      subtitle: "Générer automatiquement la documentation de projet et README",
      description: "Utilisez l'IA pour générer automatiquement une documentation de projet et des fichiers README de haute qualité."
    },
    guidesCodeReview: {
      title: "Assistant de révision de code",
      subtitle: "Utiliser l'IA pour l'inspection de la qualité du code",
      description: "Exploitez la puissance de l'IA pour la révision de code et l'inspection de la qualité."
    }
  },
  ja: {
    guidesGettingStarted: {
      title: "Gemini CLIの初回使用",
      subtitle: "基本概念を理解し、最初のAI会話を完了する",
      description: "このチュートリアルは、Gemini CLIを素早く始めるのに役立ち、基本操作とコア概念を学習します。"
    },
    guidesBasicCommands: {
      title: "基本コマンド操作",
      subtitle: "一般的なコマンドと基本構文を学ぶ",
      description: "Gemini CLIの基本コマンドをマスターして、日常の開発効率を向上させましょう。"
    },
    guidesFileOperations: {
      title: "ファイル操作の基本",
      subtitle: "AIを使用してファイルコンテンツを処理・分析する",
      description: "Gemini CLIを使用してさまざまなファイルタイプとコンテンツ分析を処理する方法を学びます。"
    },
    guidesAdvancedConfig: {
      title: "高度な設定オプション",
      subtitle: "Gemini CLI設定と環境設定をカスタマイズする",
      description: "Gemini CLIの高度な設定オプションを深く理解し、ユーザー体験を最適化します。"
    },
    guidesIntegration: {
      title: "他のツールとの統合",
      subtitle: "既存の開発ワークフローに統合する",
      description: "Gemini CLIを既存の開発ツールチェーンに統合する方法を学びます。"
    },
    guidesMcpProtocol: {
      title: "MCPプロトコルの使用",
      subtitle: "Model Context Protocolを使用して機能を拡張する",
      description: "Model Context Protocolを理解し、使用してGemini CLIの機能を拡張します。"
    },
    guidesCodeRefactoring: {
      title: "コードリファクタリングアシスタント",
      subtitle: "AIを使用して既存のコードを分析・リファクタリングする",
      description: "Gemini CLIを使用してコードリファクタリングと最適化を行う方法を学びます。"
    },
    guidesDocumentation: {
      title: "プロジェクトドキュメント生成",
      subtitle: "プロジェクトドキュメントとREADMEを自動生成する",
      description: "AIを使用して高品質なプロジェクトドキュメントとREADMEファイルを自動生成します。"
    },
    guidesCodeReview: {
      title: "コードレビューアシスタント",
      subtitle: "AIを使用してコード品質検査を行う",
      description: "AIの力を活用してコードレビューと品質検査を行います。"
    }
  },
  ko: {
    guidesGettingStarted: {
      title: "Gemini CLI 첫 사용",
      subtitle: "기본 개념을 이해하고 첫 AI 대화를 완료하세요",
      description: "이 튜토리얼은 Gemini CLI를 빠르게 시작하는 데 도움이 되며, 기본 작업과 핵심 개념을 학습합니다."
    },
    guidesBasicCommands: {
      title: "기본 명령 작업",
      subtitle: "일반적인 명령과 기본 구문을 배우세요",
      description: "Gemini CLI의 기본 명령을 마스터하여 일상적인 개발 효율성을 향상시키세요."
    },
    guidesFileOperations: {
      title: "파일 작업 기초",
      subtitle: "AI를 사용하여 파일 내용을 처리하고 분석하세요",
      description: "Gemini CLI를 사용하여 다양한 파일 유형과 내용 분석을 처리하는 방법을 배우세요."
    },
    guidesAdvancedConfig: {
      title: "고급 구성 옵션",
      subtitle: "Gemini CLI 구성과 환경 설정을 사용자 정의하세요",
      description: "Gemini CLI의 고급 구성 옵션을 깊이 이해하여 사용자 경험을 최적화하세요."
    },
    guidesIntegration: {
      title: "다른 도구와의 통합",
      subtitle: "기존 개발 워크플로우에 통합하세요",
      description: "Gemini CLI를 기존 개발 도구 체인에 통합하는 방법을 배우세요."
    },
    guidesMcpProtocol: {
      title: "MCP 프로토콜 사용",
      subtitle: "Model Context Protocol을 사용하여 기능을 확장하세요",
      description: "Model Context Protocol을 이해하고 사용하여 Gemini CLI 기능을 확장하세요."
    },
    guidesCodeRefactoring: {
      title: "코드 리팩토링 도우미",
      subtitle: "AI를 사용하여 기존 코드를 분석하고 리팩토링하세요",
      description: "Gemini CLI를 사용하여 코드 리팩토링과 최적화를 수행하는 방법을 배우세요."
    },
    guidesDocumentation: {
      title: "프로젝트 문서 생성",
      subtitle: "프로젝트 문서와 README를 자동으로 생성하세요",
      description: "AI를 사용하여 고품질 프로젝트 문서와 README 파일을 자동으로 생성하세요."
    },
    guidesCodeReview: {
      title: "코드 리뷰 도우미",
      subtitle: "AI를 사용하여 코드 품질 검사를 수행하세요",
      description: "AI의 힘을 활용하여 코드 리뷰와 품질 검사를 수행하세요."
    }
  },
  es: {
    guidesGettingStarted: {
      title: "Primer uso de Gemini CLI",
      subtitle: "Comprende conceptos básicos y completa tu primera conversación con IA",
      description: "Este tutorial te ayudará a comenzar rápidamente con Gemini CLI, aprendiendo operaciones básicas y conceptos fundamentales."
    },
    guidesBasicCommands: {
      title: "Operaciones básicas de comandos",
      subtitle: "Aprende comandos comunes y sintaxis básica",
      description: "Domina los comandos básicos de Gemini CLI para mejorar tu eficiencia de desarrollo diaria."
    },
    guidesFileOperations: {
      title: "Fundamentos de operaciones de archivos",
      subtitle: "Usa IA para procesar y analizar contenido de archivos",
      description: "Aprende cómo usar Gemini CLI para manejar varios tipos de archivos y análisis de contenido."
    },
    guidesAdvancedConfig: {
      title: "Opciones de configuración avanzadas",
      subtitle: "Personaliza la configuración de Gemini CLI y ajustes del entorno",
      description: "Profundiza en las opciones de configuración avanzadas de Gemini CLI para optimizar tu experiencia de usuario."
    },
    guidesIntegration: {
      title: "Integración con otras herramientas",
      subtitle: "Integra en flujos de trabajo de desarrollo existentes",
      description: "Aprende cómo integrar Gemini CLI en tu cadena de herramientas de desarrollo existente."
    },
    guidesMcpProtocol: {
      title: "Uso del protocolo MCP",
      subtitle: "Usa Model Context Protocol para extender funcionalidad",
      description: "Comprende y usa Model Context Protocol para extender la funcionalidad de Gemini CLI."
    },
    guidesCodeRefactoring: {
      title: "Asistente de refactorización de código",
      subtitle: "Usa IA para analizar y refactorizar código existente",
      description: "Aprende cómo usar Gemini CLI para refactorización y optimización de código."
    },
    guidesDocumentation: {
      title: "Generación de documentación de proyecto",
      subtitle: "Genera automáticamente documentación de proyecto y README",
      description: "Usa IA para generar automáticamente documentación de proyecto y archivos README de alta calidad."
    },
    guidesCodeReview: {
      title: "Asistente de revisión de código",
      subtitle: "Usa IA para inspección de calidad de código",
      description: "Aprovecha el poder de la IA para revisión de código e inspección de calidad."
    }
  },
  hi: {
    guidesGettingStarted: {
      title: "Gemini CLI का पहला उपयोग",
      subtitle: "बुनियादी अवधारणाओं को समझें और अपनी पहली AI बातचीत पूरी करें",
      description: "यह ट्यूटोरियल आपको Gemini CLI के साथ जल्दी शुरुआत करने में मदद करेगा, बुनियादी संचालन और मुख्य अवधारणाओं को सीखने में।"
    },
    guidesBasicCommands: {
      title: "बुनियादी कमांड संचालन",
      subtitle: "सामान्य कमांड और बुनियादी सिंटैक्स सीखें",
      description: "अपनी दैनिक विकास दक्षता में सुधार के लिए Gemini CLI की बुनियादी कमांड में महारत हासिल करें।"
    },
    guidesFileOperations: {
      title: "फ़ाइल संचालन की मूल बातें",
      subtitle: "फ़ाइल सामग्री को प्रोसेस और विश्लेषित करने के लिए AI का उपयोग करें",
      description: "विभिन्न फ़ाइल प्रकारों और सामग्री विश्लेषण को संभालने के लिए Gemini CLI का उपयोग करना सीखें।"
    },
    guidesAdvancedConfig: {
      title: "उन्नत कॉन्फ़िगरेशन विकल्प",
      subtitle: "Gemini CLI कॉन्फ़िगरेशन और पर्यावरण सेटिंग्स को कस्टमाइज़ करें",
      description: "अपने उपयोगकर्ता अनुभव को अनुकूलित करने के लिए Gemini CLI के उन्नत कॉन्फ़िगरेशन विकल्पों में गहराई से जाएं।"
    },
    guidesIntegration: {
      title: "अन्य उपकरणों के साथ एकीकरण",
      subtitle: "मौजूदा विकास वर्कफ़्लो में एकीकृत करें",
      description: "अपने मौजूदा विकास टूलचेन में Gemini CLI को एकीकृत करना सीखें।"
    },
    guidesMcpProtocol: {
      title: "MCP प्रोटोकॉल का उपयोग",
      subtitle: "कार्यक्षमता बढ़ाने के लिए Model Context Protocol का उपयोग करें",
      description: "Gemini CLI की कार्यक्षमता बढ़ाने के लिए Model Context Protocol को समझें और उपयोग करें।"
    },
    guidesCodeRefactoring: {
      title: "कोड रिफैक्टरिंग सहायक",
      subtitle: "मौजूदा कोड का विश्लेषण और रिफैक्टर करने के लिए AI का उपयोग करें",
      description: "कोड रिफैक्टरिंग और अनुकूलन के लिए Gemini CLI का उपयोग करना सीखें।"
    },
    guidesDocumentation: {
      title: "प्रोजेक्ट दस्तावेज़ीकरण जेनरेशन",
      subtitle: "प्रोजेक्ट दस्तावेज़ीकरण और README स्वचालित रूप से जेनरेट करें",
      description: "उच्च गुणवत्ता वाले प्रोजेक्ट दस्तावेज़ीकरण और README फ़ाइलों को स्वचालित रूप से जेनरेट करने के लिए AI का उपयोग करें।"
    },
    guidesCodeReview: {
      title: "कोड समीक्षा सहायक",
      subtitle: "कोड गुणवत्ता निरीक्षण के लिए AI का उपयोग करें",
      description: "कोड समीक्षा और गुणवत्ता निरीक्षण के लिए AI की शक्ति का लाभ उठाएं।"
    }
  },
  ru: {
    guidesGettingStarted: {
      title: "Первое использование Gemini CLI",
      subtitle: "Понимание основных концепций и завершение первого разговора с ИИ",
      description: "Этот учебник поможет вам быстро начать работу с Gemini CLI, изучая основные операции и ключевые концепции."
    },
    guidesBasicCommands: {
      title: "Основные операции с командами",
      subtitle: "Изучение общих команд и базового синтаксиса",
      description: "Освойте основные команды Gemini CLI для повышения эффективности ежедневной разработки."
    },
    guidesFileOperations: {
      title: "Основы операций с файлами",
      subtitle: "Использование ИИ для обработки и анализа содержимого файлов",
      description: "Изучите, как использовать Gemini CLI для обработки различных типов файлов и анализа содержимого."
    },
    guidesAdvancedConfig: {
      title: "Продвинутые параметры конфигурации",
      subtitle: "Настройка конфигурации Gemini CLI и параметров среды",
      description: "Углубитесь в продвинутые параметры конфигурации Gemini CLI для оптимизации пользовательского опыта."
    },
    guidesIntegration: {
      title: "Интеграция с другими инструментами",
      subtitle: "Интеграция в существующие рабочие процессы разработки",
      description: "Изучите, как интегрировать Gemini CLI в вашу существующую цепочку инструментов разработки."
    },
    guidesMcpProtocol: {
      title: "Использование протокола MCP",
      subtitle: "Использование Model Context Protocol для расширения функциональности",
      description: "Понимание и использование Model Context Protocol для расширения функциональности Gemini CLI."
    },
    guidesCodeRefactoring: {
      title: "Помощник рефакторинга кода",
      subtitle: "Использование ИИ для анализа и рефакторинга существующего кода",
      description: "Изучите, как использовать Gemini CLI для рефакторинга и оптимизации кода."
    },
    guidesDocumentation: {
      title: "Генерация документации проекта",
      subtitle: "Автоматическая генерация документации проекта и README",
      description: "Используйте ИИ для автоматической генерации высококачественной документации проекта и файлов README."
    },
    guidesCodeReview: {
      title: "Помощник обзора кода",
      subtitle: "Использование ИИ для проверки качества кода",
      description: "Используйте силу ИИ для обзора кода и проверки качества."
    }
  }
};

// Merge all translations
Object.assign(guidesTranslations, otherLanguages);

// Add translations to all language files
Object.keys(guidesTranslations).forEach(lang => {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add guides subpage translations
    Object.assign(data, guidesTranslations[lang]);
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Added guides subpage translations for ${lang}`);
  }
});

console.log('✓ All guides subpage translations added');
