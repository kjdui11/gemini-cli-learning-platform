// Commands translations for all supported languages
// English content remains unchanged, other languages are fully translated

export interface CommandTranslations {
  [locale: string]: {
    // Page content
    title: string
    subtitle: string
    searchPlaceholder: string
    allCommands: string
    commandsFound: string
    command: string
    commands: string
    noCommandsFound: string
    noCommandsDesc: string
    
    // Quick start guide
    quickStartTitle: string
    quickStartSubtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    
    // Command details
    options: string
    examples: string
    notes: string
    relatedCommands: string
    required: string
    default: string
    output: string
    
    // Cheat sheet
    cheatSheetTitle: string
    essentialCommands: string
    chatCommands: string
    tip: string
    
    // Categories
    categories: {
      core: { name: string; description: string }
      auth: { name: string; description: string }
      config: { name: string; description: string }
      analysis: { name: string; description: string }
      advanced: { name: string; description: string }
    }
    
    // Command descriptions (only for non-English)
    commandDescriptions?: {
      [commandId: string]: {
        description: string
        examples: Array<{
          description: string
          command: string
        }>
        notes?: string[]
      }
    }
  }
}

export const commandsTranslations: CommandTranslations = {
  // English (keep original)
  en: {
    title: 'Command Reference',
    subtitle: 'Complete reference for all Gemini CLI commands with syntax, options, and practical examples',
    searchPlaceholder: 'Search commands...',
    allCommands: 'All Commands',
    commandsFound: 'commands found',
    command: 'command',
    commands: 'commands',
    noCommandsFound: 'No commands found',
    noCommandsDesc: 'Try adjusting your search terms or browse different categories',
    
    quickStartTitle: 'Quick Start Guide',
    quickStartSubtitle: 'Get started with Gemini CLI in just a few commands',
    step1Title: 'Install & Authenticate',
    step1Desc: 'Install the CLI and authenticate with your Google account',
    step2Title: 'Start Chatting',
    step2Desc: 'Start an interactive session or ask quick questions',
    step3Title: 'Analyze Code',
    step3Desc: 'Analyze files and projects for insights and improvements',
    
    options: 'Options',
    examples: 'Examples',
    notes: 'Notes',
    relatedCommands: 'Related Commands',
    required: 'required',
    default: 'Default',
    output: 'Output',
    
    cheatSheetTitle: 'Command Cheat Sheet',
    essentialCommands: 'Essential Commands',
    chatCommands: 'Chat Commands',
    tip: 'Tip: Use',
    
    categories: {
      core: { name: 'Core Commands', description: 'Essential commands for daily AI-assisted development' },
      auth: { name: 'Authentication', description: 'Commands for managing authentication and API access' },
      config: { name: 'Configuration', description: 'Commands for configuring CLI settings and preferences' },
      analysis: { name: 'Code Analysis', description: 'Commands for analyzing and understanding code' },
      advanced: { name: 'Advanced Features', description: 'Advanced commands for power users and automation' }
    }
  },

  // Chinese
  zh: {
    title: '命令参考',
    subtitle: '完整的 Gemini CLI 命令参考，包含语法、选项和实用示例',
    searchPlaceholder: '搜索命令...',
    allCommands: '所有命令',
    commandsFound: '个命令',
    command: '个命令',
    commands: '个命令',
    noCommandsFound: '未找到命令',
    noCommandsDesc: '尝试调整搜索条件或浏览不同分类',
    
    quickStartTitle: '快速入门指南',
    quickStartSubtitle: '通过几个简单命令快速上手 Gemini CLI',
    step1Title: '安装和认证',
    step1Desc: '安装 CLI 工具并使用 Google 账户进行认证',
    step2Title: '开始对话',
    step2Desc: '启动交互式会话或快速提问',
    step3Title: '分析代码',
    step3Desc: '分析文件和项目，获取洞察和改进建议',
    
    options: '选项',
    examples: '示例',
    notes: '注意事项',
    relatedCommands: '相关命令',
    required: '必需',
    default: '默认值',
    output: '输出',
    
    cheatSheetTitle: '命令速查表',
    essentialCommands: '基础命令',
    chatCommands: '聊天命令',
    tip: '提示：使用',
    
    categories: {
      core: { name: '核心命令', description: '日常 AI 辅助开发的基础命令' },
      auth: { name: '身份认证', description: '管理身份认证和 API 访问的命令' },
      config: { name: '配置管理', description: '配置 CLI 设置和偏好的命令' },
      analysis: { name: '代码分析', description: '分析和理解代码的命令' },
      advanced: { name: '高级功能', description: '面向高级用户和自动化的命令' }
    },
    
    commandDescriptions: {
      chat: {
        description: '启动与 Gemini AI 的交互式对话',
        examples: [
          { description: '启动基本聊天会话', command: 'gemini chat' },
          { description: '使用特定模型启动聊天', command: 'gemini chat --model gemini-pro' },
          { description: '启动聊天并保存对话', command: 'gemini chat --save my-session.md' }
        ],
        notes: [
          '聊天模式在整个会话中保持上下文',
          '使用 Ctrl+C 或输入 "exit" 结束会话',
          '您可以将文件拖放到聊天中进行分析'
        ]
      },
      ask: {
        description: '向 Gemini AI 提出单个问题',
        examples: [
          { description: '提出简单问题', command: 'gemini ask "如何安装 Node.js？"' },
          { description: '询问代码并保存回答', command: 'gemini ask "解释这个函数" --output explanation.md' },
          { description: '结合文件内容提问', command: 'gemini ask "检查这段代码的错误" < app.js' }
        ],
        notes: [
          '每个 ask 命令都是独立的，不保留上下文',
          '最适合一次性问题和快速查询',
          '可以通过管道传入文件内容或命令输出'
        ]
      },
      analyze: {
        description: '分析文件、目录或代码以获取洞察',
        examples: [
          { description: '分析单个文件', command: 'gemini analyze app.js' },
          { description: '分析整个项目目录', command: 'gemini analyze . --recursive' },
          { description: '执行安全分析', command: 'gemini analyze src/ --type security' },
          { description: '分析并保存报告', command: 'gemini analyze package.json --output analysis-report.md' }
        ],
        notes: [
          '支持大多数基于文本的文件格式',
          '可以分析代码质量、安全性和性能',
          '不支持二进制文件'
        ]
      },
      auth: {
        description: '使用 Google 账户进行身份认证',
        examples: [
          { description: '开始认证过程', command: 'gemini auth' },
          { description: '检查认证状态', command: 'gemini auth status' },
          { description: '从当前账户注销', command: 'gemini auth logout' }
        ],
        notes: [
          '打开浏览器进行 OAuth 认证',
          '凭据安全存储在本地',
          '访问 Gemini API 所必需'
        ]
      },
      config: {
        description: '管理 CLI 配置设置',
        examples: [
          { description: '列出所有配置设置', command: 'gemini config list' },
          { description: '获取特定设置', command: 'gemini config get model' },
          { description: '设置配置值', command: 'gemini config set model gemini-pro' },
          { description: '为自动化设置 API 密钥', command: 'gemini config set api-key YOUR_API_KEY' },
          { description: '重置为默认设置', command: 'gemini config reset' }
        ],
        notes: [
          '配置按用户存储',
          'API 密钥设置绕过 OAuth 认证',
          '使用 reset 恢复默认设置'
        ]
      }
    }
  },

  // Hindi
  hi: {
    title: 'कमांड संदर्भ',
    subtitle: 'सिंटैक्स, विकल्प और व्यावहारिक उदाहरणों के साथ सभी Gemini CLI कमांड का पूरा संदर्भ',
    searchPlaceholder: 'कमांड खोजें...',
    allCommands: 'सभी कमांड',
    commandsFound: 'कमांड मिले',
    command: 'कमांड',
    commands: 'कमांड',
    noCommandsFound: 'कोई कमांड नहीं मिला',
    noCommandsDesc: 'अपने खोज शब्दों को समायोजित करने या विभिन्न श्रेणियों को ब्राउज़ करने का प्रयास करें',
    
    quickStartTitle: 'त्वरित प्रारंभ गाइड',
    quickStartSubtitle: 'कुछ ही कमांड में Gemini CLI के साथ शुरुआत करें',
    step1Title: 'इंस्टॉल और प्रमाणीकरण',
    step1Desc: 'CLI इंस्टॉल करें और अपने Google खाते से प्रमाणीकरण करें',
    step2Title: 'चैट शुरू करें',
    step2Desc: 'एक इंटरैक्टिव सत्र शुरू करें या त्वरित प्रश्न पूछें',
    step3Title: 'कोड का विश्लेषण करें',
    step3Desc: 'अंतर्दृष्टि और सुधार के लिए फ़ाइलों और परियोजनाओं का विश्लेषण करें',
    
    options: 'विकल्प',
    examples: 'उदाहरण',
    notes: 'नोट्स',
    relatedCommands: 'संबंधित कमांड',
    required: 'आवश्यक',
    default: 'डिफ़ॉल्ट',
    output: 'आउटपुट',
    
    cheatSheetTitle: 'कमांड चीट शीट',
    essentialCommands: 'आवश्यक कमांड',
    chatCommands: 'चैट कमांड',
    tip: 'सुझाव: उपयोग करें',
    
    categories: {
      core: { name: 'मुख्य कमांड', description: 'दैनिक AI-सहायक विकास के लिए आवश्यक कमांड' },
      auth: { name: 'प्रमाणीकरण', description: 'प्रमाणीकरण और API पहुंच प्रबंधन के लिए कमांड' },
      config: { name: 'कॉन्फ़िगरेशन', description: 'CLI सेटिंग्स और प्राथमिकताओं को कॉन्फ़िगर करने के लिए कमांड' },
      analysis: { name: 'कोड विश्लेषण', description: 'कोड का विश्लेषण और समझने के लिए कमांड' },
      advanced: { name: 'उन्नत सुविधाएं', description: 'पावर उपयोगकर्ताओं और स्वचालन के लिए उन्नत कमांड' }
    }
  },

  // French
  fr: {
    title: 'Référence des Commandes',
    subtitle: 'Référence complète pour toutes les commandes Gemini CLI avec syntaxe, options et exemples pratiques',
    searchPlaceholder: 'Rechercher des commandes...',
    allCommands: 'Toutes les Commandes',
    commandsFound: 'commandes trouvées',
    command: 'commande',
    commands: 'commandes',
    noCommandsFound: 'Aucune commande trouvée',
    noCommandsDesc: 'Essayez d\'ajuster vos termes de recherche ou parcourez différentes catégories',

    quickStartTitle: 'Guide de Démarrage Rapide',
    quickStartSubtitle: 'Commencez avec Gemini CLI en quelques commandes seulement',
    step1Title: 'Installer et Authentifier',
    step1Desc: 'Installez le CLI et authentifiez-vous avec votre compte Google',
    step2Title: 'Commencer à Discuter',
    step2Desc: 'Démarrez une session interactive ou posez des questions rapides',
    step3Title: 'Analyser le Code',
    step3Desc: 'Analysez les fichiers et projets pour obtenir des insights et améliorations',

    options: 'Options',
    examples: 'Exemples',
    notes: 'Notes',
    relatedCommands: 'Commandes Associées',
    required: 'requis',
    default: 'Par défaut',
    output: 'Sortie',

    cheatSheetTitle: 'Aide-Mémoire des Commandes',
    essentialCommands: 'Commandes Essentielles',
    chatCommands: 'Commandes de Chat',
    tip: 'Astuce : Utilisez',

    categories: {
      core: { name: 'Commandes Principales', description: 'Commandes essentielles pour le développement quotidien assisté par IA' },
      auth: { name: 'Authentification', description: 'Commandes pour gérer l\'authentification et l\'accès API' },
      config: { name: 'Configuration', description: 'Commandes pour configurer les paramètres et préférences du CLI' },
      analysis: { name: 'Analyse de Code', description: 'Commandes pour analyser et comprendre le code' },
      advanced: { name: 'Fonctionnalités Avancées', description: 'Commandes avancées pour utilisateurs expérimentés et automatisation' }
    }
  },

  // German
  de: {
    title: 'Befehlsreferenz',
    subtitle: 'Vollständige Referenz für alle Gemini CLI-Befehle mit Syntax, Optionen und praktischen Beispielen',
    searchPlaceholder: 'Befehle suchen...',
    allCommands: 'Alle Befehle',
    commandsFound: 'Befehle gefunden',
    command: 'Befehl',
    commands: 'Befehle',
    noCommandsFound: 'Keine Befehle gefunden',
    noCommandsDesc: 'Versuchen Sie, Ihre Suchbegriffe anzupassen oder verschiedene Kategorien zu durchsuchen',

    quickStartTitle: 'Schnellstart-Anleitung',
    quickStartSubtitle: 'Beginnen Sie mit Gemini CLI in nur wenigen Befehlen',
    step1Title: 'Installieren & Authentifizieren',
    step1Desc: 'Installieren Sie die CLI und authentifizieren Sie sich mit Ihrem Google-Konto',
    step2Title: 'Chat Starten',
    step2Desc: 'Starten Sie eine interaktive Sitzung oder stellen Sie schnelle Fragen',
    step3Title: 'Code Analysieren',
    step3Desc: 'Analysieren Sie Dateien und Projekte für Einblicke und Verbesserungen',

    options: 'Optionen',
    examples: 'Beispiele',
    notes: 'Hinweise',
    relatedCommands: 'Verwandte Befehle',
    required: 'erforderlich',
    default: 'Standard',
    output: 'Ausgabe',

    cheatSheetTitle: 'Befehl-Spickzettel',
    essentialCommands: 'Wesentliche Befehle',
    chatCommands: 'Chat-Befehle',
    tip: 'Tipp: Verwenden Sie',

    categories: {
      core: { name: 'Kernbefehle', description: 'Wesentliche Befehle für die tägliche KI-unterstützte Entwicklung' },
      auth: { name: 'Authentifizierung', description: 'Befehle zur Verwaltung von Authentifizierung und API-Zugriff' },
      config: { name: 'Konfiguration', description: 'Befehle zur Konfiguration von CLI-Einstellungen und -Präferenzen' },
      analysis: { name: 'Code-Analyse', description: 'Befehle zur Analyse und zum Verständnis von Code' },
      advanced: { name: 'Erweiterte Funktionen', description: 'Erweiterte Befehle für Power-User und Automatisierung' }
    }
  },

  // Japanese
  ja: {
    title: 'コマンドリファレンス',
    subtitle: '構文、オプション、実用的な例を含むすべてのGemini CLIコマンドの完全なリファレンス',
    searchPlaceholder: 'コマンドを検索...',
    allCommands: 'すべてのコマンド',
    commandsFound: 'コマンドが見つかりました',
    command: 'コマンド',
    commands: 'コマンド',
    noCommandsFound: 'コマンドが見つかりません',
    noCommandsDesc: '検索用語を調整するか、異なるカテゴリを参照してください',

    quickStartTitle: 'クイックスタートガイド',
    quickStartSubtitle: 'わずか数コマンドでGemini CLIを始めましょう',
    step1Title: 'インストールと認証',
    step1Desc: 'CLIをインストールし、Googleアカウントで認証します',
    step2Title: 'チャットを開始',
    step2Desc: 'インタラクティブセッションを開始するか、素早く質問します',
    step3Title: 'コードを分析',
    step3Desc: 'ファイルやプロジェクトを分析して洞察と改善を得ます',

    options: 'オプション',
    examples: '例',
    notes: '注意事項',
    relatedCommands: '関連コマンド',
    required: '必須',
    default: 'デフォルト',
    output: '出力',

    cheatSheetTitle: 'コマンドチートシート',
    essentialCommands: '基本コマンド',
    chatCommands: 'チャットコマンド',
    tip: 'ヒント：使用してください',

    categories: {
      core: { name: 'コアコマンド', description: '日常のAI支援開発に必要な基本コマンド' },
      auth: { name: '認証', description: '認証とAPIアクセス管理のためのコマンド' },
      config: { name: '設定', description: 'CLI設定と設定を構成するためのコマンド' },
      analysis: { name: 'コード分析', description: 'コードを分析し理解するためのコマンド' },
      advanced: { name: '高度な機能', description: 'パワーユーザーと自動化のための高度なコマンド' }
    }
  },

  // Korean
  ko: {
    title: '명령어 참조',
    subtitle: '구문, 옵션 및 실용적인 예제가 포함된 모든 Gemini CLI 명령어의 완전한 참조',
    searchPlaceholder: '명령어 검색...',
    allCommands: '모든 명령어',
    commandsFound: '개의 명령어를 찾았습니다',
    command: '개 명령어',
    commands: '개 명령어',
    noCommandsFound: '명령어를 찾을 수 없습니다',
    noCommandsDesc: '검색어를 조정하거나 다른 카테고리를 탐색해보세요',

    quickStartTitle: '빠른 시작 가이드',
    quickStartSubtitle: '몇 개의 명령어로 Gemini CLI를 시작하세요',
    step1Title: '설치 및 인증',
    step1Desc: 'CLI를 설치하고 Google 계정으로 인증하세요',
    step2Title: '채팅 시작',
    step2Desc: '대화형 세션을 시작하거나 빠른 질문을 하세요',
    step3Title: '코드 분석',
    step3Desc: '파일과 프로젝트를 분석하여 통찰력과 개선사항을 얻으세요',

    options: '옵션',
    examples: '예제',
    notes: '참고사항',
    relatedCommands: '관련 명령어',
    required: '필수',
    default: '기본값',
    output: '출력',

    cheatSheetTitle: '명령어 치트 시트',
    essentialCommands: '필수 명령어',
    chatCommands: '채팅 명령어',
    tip: '팁: 사용하세요',

    categories: {
      core: { name: '핵심 명령어', description: '일상적인 AI 지원 개발을 위한 필수 명령어' },
      auth: { name: '인증', description: '인증 및 API 액세스 관리를 위한 명령어' },
      config: { name: '구성', description: 'CLI 설정 및 기본 설정을 구성하는 명령어' },
      analysis: { name: '코드 분석', description: '코드를 분석하고 이해하기 위한 명령어' },
      advanced: { name: '고급 기능', description: '파워 유저 및 자동화를 위한 고급 명령어' }
    }
  },

  // Spanish
  es: {
    title: 'Referencia de Comandos',
    subtitle: 'Referencia completa para todos los comandos de Gemini CLI con sintaxis, opciones y ejemplos prácticos',
    searchPlaceholder: 'Buscar comandos...',
    allCommands: 'Todos los Comandos',
    commandsFound: 'comandos encontrados',
    command: 'comando',
    commands: 'comandos',
    noCommandsFound: 'No se encontraron comandos',
    noCommandsDesc: 'Intenta ajustar tus términos de búsqueda o navega por diferentes categorías',

    quickStartTitle: 'Guía de Inicio Rápido',
    quickStartSubtitle: 'Comienza con Gemini CLI en solo unos pocos comandos',
    step1Title: 'Instalar y Autenticar',
    step1Desc: 'Instala el CLI y autentícate con tu cuenta de Google',
    step2Title: 'Comenzar a Chatear',
    step2Desc: 'Inicia una sesión interactiva o haz preguntas rápidas',
    step3Title: 'Analizar Código',
    step3Desc: 'Analiza archivos y proyectos para obtener insights y mejoras',

    options: 'Opciones',
    examples: 'Ejemplos',
    notes: 'Notas',
    relatedCommands: 'Comandos Relacionados',
    required: 'requerido',
    default: 'Por defecto',
    output: 'Salida',

    cheatSheetTitle: 'Hoja de Referencia de Comandos',
    essentialCommands: 'Comandos Esenciales',
    chatCommands: 'Comandos de Chat',
    tip: 'Consejo: Usa',

    categories: {
      core: { name: 'Comandos Principales', description: 'Comandos esenciales para el desarrollo diario asistido por IA' },
      auth: { name: 'Autenticación', description: 'Comandos para gestionar la autenticación y el acceso a la API' },
      config: { name: 'Configuración', description: 'Comandos para configurar ajustes y preferencias del CLI' },
      analysis: { name: 'Análisis de Código', description: 'Comandos para analizar y entender el código' },
      advanced: { name: 'Características Avanzadas', description: 'Comandos avanzados para usuarios expertos y automatización' }
    }
  },

  // Russian
  ru: {
    title: 'Справочник Команд',
    subtitle: 'Полный справочник по всем командам Gemini CLI с синтаксисом, опциями и практическими примерами',
    searchPlaceholder: 'Поиск команд...',
    allCommands: 'Все Команды',
    commandsFound: 'команд найдено',
    command: 'команда',
    commands: 'команд',
    noCommandsFound: 'Команды не найдены',
    noCommandsDesc: 'Попробуйте изменить поисковые термины или просмотрите другие категории',

    quickStartTitle: 'Руководство по Быстрому Старту',
    quickStartSubtitle: 'Начните работу с Gemini CLI всего за несколько команд',
    step1Title: 'Установка и Аутентификация',
    step1Desc: 'Установите CLI и аутентифицируйтесь с помощью вашего аккаунта Google',
    step2Title: 'Начать Чат',
    step2Desc: 'Запустите интерактивную сессию или задайте быстрые вопросы',
    step3Title: 'Анализ Кода',
    step3Desc: 'Анализируйте файлы и проекты для получения инсайтов и улучшений',

    options: 'Опции',
    examples: 'Примеры',
    notes: 'Заметки',
    relatedCommands: 'Связанные Команды',
    required: 'обязательно',
    default: 'По умолчанию',
    output: 'Вывод',

    cheatSheetTitle: 'Шпаргалка по Командам',
    essentialCommands: 'Основные Команды',
    chatCommands: 'Команды Чата',
    tip: 'Совет: Используйте',

    categories: {
      core: { name: 'Основные Команды', description: 'Основные команды для ежедневной разработки с помощью ИИ' },
      auth: { name: 'Аутентификация', description: 'Команды для управления аутентификацией и доступом к API' },
      config: { name: 'Конфигурация', description: 'Команды для настройки параметров и предпочтений CLI' },
      analysis: { name: 'Анализ Кода', description: 'Команды для анализа и понимания кода' },
      advanced: { name: 'Продвинутые Функции', description: 'Продвинутые команды для опытных пользователей и автоматизации' }
    }
  }
}
