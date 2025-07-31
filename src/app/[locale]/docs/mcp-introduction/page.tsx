import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  GlobeAltIcon, 
  ServerIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  CpuChipIcon,
  CloudIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: 'Model Context Protocol 介绍 | Gemini CLI 开发者文档',
    en: 'Model Context Protocol Introduction | Gemini CLI Developer Documentation',
    hi: 'Model Context Protocol परिचय | Gemini CLI डेवलपर दस्तावेज़ीकरण',
    fr: 'Introduction au Model Context Protocol | Documentation Développeur Gemini CLI',
    de: 'Model Context Protocol Einführung | Gemini CLI Entwicklerdokumentation',
    ja: 'Model Context Protocol 紹介 | Gemini CLI 開発者ドキュメント',
    ko: 'Model Context Protocol 소개 | Gemini CLI 개발자 문서',
    es: 'Introducción al Model Context Protocol | Documentación Desarrollador Gemini CLI',
    ru: 'Введение в Model Context Protocol | Документация разработчика Gemini CLI'
  }

  const descriptions = {
    zh: '全面介绍 Model Context Protocol (MCP)，包括核心概念、架构设计、通信机制和实际应用。',
    en: 'Comprehensive introduction to the Model Context Protocol (MCP), including core concepts, architecture, communication mechanisms, and practical applications.',
    hi: 'Model Context Protocol (MCP) का व्यापक परिचय, जिसमें मुख्य अवधारणाएं, आर्किटेक्चर, संचार तंत्र और व्यावहारिक अनुप्रयोग शामिल हैं।',
    fr: 'Introduction complète au Model Context Protocol (MCP), y compris les concepts de base, l\'architecture, les mécanismes de communication et les applications pratiques.',
    de: 'Umfassende Einführung in das Model Context Protocol (MCP), einschließlich Kernkonzepte, Architektur, Kommunikationsmechanismen und praktische Anwendungen.',
    ja: 'Model Context Protocol (MCP) の包括的な紹介。コア概念、アーキテクチャ、通信メカニズム、実用的なアプリケーションを含みます。',
    ko: 'Model Context Protocol (MCP)에 대한 포괄적인 소개. 핵심 개념, 아키텍처, 통신 메커니즘 및 실용적인 응용 프로그램을 포함합니다.',
    es: 'Introducción completa al Model Context Protocol (MCP), incluyendo conceptos básicos, arquitectura, mecanismos de comunicación y aplicaciones prácticas.',
    ru: 'Всестороннее введение в Model Context Protocol (MCP), включая основные концепции, архитектуру, механизмы связи и практические применения.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Model Context Protocol, MCP, 上下文协议, AI 集成, 协议架构, Gemini CLI' : 'Model Context Protocol, MCP, context protocol, AI integration, protocol architecture, Gemini CLI',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const mcpOverview = {
  zh: {
    description: 'Model Context Protocol (MCP) 是一个开放标准，用于标准化应用程序向大型语言模型 (LLM) 提供上下文的方式。可以将 MCP 想象成 AI 应用程序的 USB-C 端口——提供标准化的方式将 AI 模型连接到不同的数据源和工具。',
    benefits: [
      '标准化的通信接口',
      '安全的数据传输',
      '可扩展的架构设计',
      '跨平台兼容性',
      '实时上下文同步',
      '基于插件的扩展支持'
    ],
    useCases: [
      '代码分析和理解',
      '文档生成和维护',
      '项目管理集成',
      '数据库查询和操作',
      'API 服务集成',
      '工作流自动化'
    ]
  },
  en: {
    description: 'The Model Context Protocol (MCP) is an open standard that standardizes how applications provide context to large language models (LLMs). Think of MCP like a USB-C port for AI applications—providing a standardized way to connect AI models to different data sources and tools.',
    benefits: [
      'Standardized communication interface',
      'Secure data transmission',
      'Extensible architecture design',
      'Cross-platform compatibility',
      'Real-time context synchronization',
      'Plugin-based extension support'
    ],
    useCases: [
      'Code analysis and understanding',
      'Documentation generation and maintenance',
      'Project management integration',
      'Database queries and operations',
      'API service integration',
      'Workflow automation'
    ]
  },
  hi: {
    description: 'Model Context Protocol (MCP) एक खुला मानक है जो मानकीकृत करता है कि एप्लिकेशन बड़े भाषा मॉडल (LLM) को संदर्भ कैसे प्रदान करते हैं। MCP को AI एप्लिकेशन के लिए USB-C पोर्ट की तरह समझें—AI मॉडल को विभिन्न डेटा स्रोतों और टूल्स से जोड़ने का मानकीकृत तरीका प्रदान करता है।',
    benefits: [
      'मानकीकृत संचार इंटरफ़ेस',
      'सुरक्षित डेटा ट्रांसमिशन',
      'विस्तार योग्य आर्किटेक्चर डिज़ाइन',
      'क्रॉस-प्लेटफ़ॉर्म संगतता',
      'रियल-टाइम संदर्भ सिंक्रोनाइज़ेशन',
      'प्लगइन-आधारित एक्सटेंशन समर्थन'
    ],
    useCases: [
      'कोड विश्लेषण और समझ',
      'दस्तावेज़ीकरण निर्माण और रखरखाव',
      'प्रोजेक्ट प्रबंधन एकीकरण',
      'डेटाबेस क्वेरी और संचालन',
      'API सेवा एकीकरण',
      'वर्कफ़्लो स्वचालन'
    ]
  },
  fr: {
    description: 'Le Model Context Protocol (MCP) est un standard ouvert qui standardise la façon dont les applications fournissent du contexte aux grands modèles de langage (LLM). Pensez au MCP comme un port USB-C pour les applications IA—fournissant un moyen standardisé de connecter les modèles IA à différentes sources de données et outils.',
    benefits: [
      'Interface de communication standardisée',
      'Transmission de données sécurisée',
      'Conception d\'architecture extensible',
      'Compatibilité multiplateforme',
      'Synchronisation de contexte en temps réel',
      'Support d\'extension basé sur des plugins'
    ],
    useCases: [
      'Analyse et compréhension du code',
      'Génération et maintenance de documentation',
      'Intégration de gestion de projet',
      'Requêtes et opérations de base de données',
      'Intégration de services API',
      'Automatisation des flux de travail'
    ]
  },
  de: {
    description: 'Das Model Context Protocol (MCP) ist ein offener Standard, der standardisiert, wie Anwendungen Kontext an große Sprachmodelle (LLMs) bereitstellen. Denken Sie an MCP wie einen USB-C-Anschluss für KI-Anwendungen—der eine standardisierte Möglichkeit bietet, KI-Modelle mit verschiedenen Datenquellen und Tools zu verbinden.',
    benefits: [
      'Standardisierte Kommunikationsschnittstelle',
      'Sichere Datenübertragung',
      'Erweiterbare Architektur-Design',
      'Plattformübergreifende Kompatibilität',
      'Echtzeit-Kontext-Synchronisation',
      'Plugin-basierte Erweiterungsunterstützung'
    ],
    useCases: [
      'Code-Analyse und -Verständnis',
      'Dokumentationserstellung und -wartung',
      'Projektmanagement-Integration',
      'Datenbankabfragen und -operationen',
      'API-Service-Integration',
      'Workflow-Automatisierung'
    ]
  },
  ja: {
    description: 'Model Context Protocol (MCP) は、アプリケーションが大規模言語モデル (LLM) にコンテキストを提供する方法を標準化するオープンスタンダードです。MCPをAIアプリケーション用のUSB-Cポートのように考えてください—AIモデルを異なるデータソースやツールに接続する標準化された方法を提供します。',
    benefits: [
      '標準化された通信インターフェース',
      'セキュアなデータ転送',
      '拡張可能なアーキテクチャ設計',
      'クロスプラットフォーム互換性',
      'リアルタイムコンテキスト同期',
      'プラグインベースの拡張サポート'
    ],
    useCases: [
      'コード分析と理解',
      'ドキュメント生成と保守',
      'プロジェクト管理統合',
      'データベースクエリと操作',
      'APIサービス統合',
      'ワークフロー自動化'
    ]
  },
  ko: {
    description: 'Model Context Protocol (MCP)은 애플리케이션이 대규모 언어 모델(LLM)에 컨텍스트를 제공하는 방법을 표준화하는 개방형 표준입니다. MCP를 AI 애플리케이션용 USB-C 포트처럼 생각해보세요—AI 모델을 다양한 데이터 소스와 도구에 연결하는 표준화된 방법을 제공합니다.',
    benefits: [
      '표준화된 통신 인터페이스',
      '안전한 데이터 전송',
      '확장 가능한 아키텍처 설계',
      '크로스 플랫폼 호환성',
      '실시간 컨텍스트 동기화',
      '플러그인 기반 확장 지원'
    ],
    useCases: [
      '코드 분석 및 이해',
      '문서 생성 및 유지보수',
      '프로젝트 관리 통합',
      '데이터베이스 쿼리 및 작업',
      'API 서비스 통합',
      '워크플로우 자동화'
    ]
  },
  es: {
    description: 'El Model Context Protocol (MCP) es un estándar abierto que estandariza cómo las aplicaciones proporcionan contexto a los modelos de lenguaje grandes (LLM). Piense en MCP como un puerto USB-C para aplicaciones de IA—proporcionando una forma estandarizada de conectar modelos de IA a diferentes fuentes de datos y herramientas.',
    benefits: [
      'Interfaz de comunicación estandarizada',
      'Transmisión de datos segura',
      'Diseño de arquitectura extensible',
      'Compatibilidad multiplataforma',
      'Sincronización de contexto en tiempo real',
      'Soporte de extensión basado en plugins'
    ],
    useCases: [
      'Análisis y comprensión de código',
      'Generación y mantenimiento de documentación',
      'Integración de gestión de proyectos',
      'Consultas y operaciones de base de datos',
      'Integración de servicios API',
      'Automatización de flujos de trabajo'
    ]
  },
  ru: {
    description: 'Model Context Protocol (MCP) — это открытый стандарт, который стандартизирует способ предоставления контекста приложениями большим языковым моделям (LLM). Думайте о MCP как о USB-C порте для ИИ-приложений—предоставляющем стандартизированный способ подключения ИИ-моделей к различным источникам данных и инструментам.',
    benefits: [
      'Стандартизированный интерфейс связи',
      'Безопасная передача данных',
      'Расширяемый дизайн архитектуры',
      'Кроссплатформенная совместимость',
      'Синхронизация контекста в реальном времени',
      'Поддержка расширений на основе плагинов'
    ],
    useCases: [
      'Анализ и понимание кода',
      'Генерация и поддержка документации',
      'Интеграция управления проектами',
      'Запросы и операции с базами данных',
      'Интеграция API-сервисов',
      'Автоматизация рабочих процессов'
    ]
  }
}

const mcpArchitecture = {
  components: [
    {
      name: {
        zh: 'MCP 主机',
        en: 'MCP Host',
        hi: 'MCP होस्ट',
        fr: 'Hôte MCP',
        de: 'MCP-Host',
        ja: 'MCPホスト',
        ko: 'MCP 호스트',
        es: 'Host MCP',
        ru: 'MCP хост'
      },
      role: {
        zh: 'AI 应用程序',
        en: 'AI Application',
        hi: 'AI एप्लिकेशन',
        fr: 'Application IA',
        de: 'KI-Anwendung',
        ja: 'AIアプリケーション',
        ko: 'AI 애플리케이션',
        es: 'Aplicación IA',
        ru: 'ИИ-приложение'
      },
      description: {
        zh: '协调和管理一个或多个 MCP 客户端的 AI 应用程序',
        en: 'The AI application that coordinates and manages one or multiple MCP clients',
        hi: 'AI एप्लिकेशन जो एक या कई MCP क्लाइंट्स का समन्वय और प्रबंधन करता है',
        fr: 'L\'application IA qui coordonne et gère un ou plusieurs clients MCP',
        de: 'Die KI-Anwendung, die einen oder mehrere MCP-Clients koordiniert und verwaltet',
        ja: '1つまたは複数のMCPクライアントを調整・管理するAIアプリケーション',
        ko: '하나 또는 여러 MCP 클라이언트를 조정하고 관리하는 AI 애플리케이션',
        es: 'La aplicación IA que coordina y gestiona uno o múltiples clientes MCP',
        ru: 'ИИ-приложение, которое координирует и управляет одним или несколькими MCP-клиентами'
      },
      responsibilities: {
        zh: [
          '协调多个 MCP 客户端',
          '管理 AI 模型交互',
          '处理服务器响应',
          '处理会话状态'
        ],
        en: [
          'Coordinate multiple MCP clients',
          'Manage AI model interactions',
          'Process server responses',
          'Handle session state'
        ],
        hi: [
          'कई MCP क्लाइंट्स का समन्वय करना',
          'AI मॉडल इंटरैक्शन प्रबंधित करना',
          'सर्वर प्रतिक्रियाओं को प्रोसेस करना',
          'सेशन स्थिति को संभालना'
        ],
        fr: [
          'Coordonner plusieurs clients MCP',
          'Gérer les interactions du modèle IA',
          'Traiter les réponses du serveur',
          'Gérer l\'état de session'
        ],
        de: [
          'Mehrere MCP-Clients koordinieren',
          'KI-Modell-Interaktionen verwalten',
          'Server-Antworten verarbeiten',
          'Sitzungsstatus handhaben'
        ],
        ja: [
          '複数のMCPクライアントを調整',
          'AIモデルの相互作用を管理',
          'サーバーレスポンスを処理',
          'セッション状態を処理'
        ],
        ko: [
          '여러 MCP 클라이언트 조정',
          'AI 모델 상호작용 관리',
          '서버 응답 처리',
          '세션 상태 처리'
        ],
        es: [
          'Coordinar múltiples clientes MCP',
          'Gestionar interacciones del modelo IA',
          'Procesar respuestas del servidor',
          'Manejar estado de sesión'
        ],
        ru: [
          'Координировать несколько MCP-клиентов',
          'Управлять взаимодействиями ИИ-модели',
          'Обрабатывать ответы сервера',
          'Обрабатывать состояние сессии'
        ]
      }
    },
    {
      name: {
        zh: 'MCP 客户端',
        en: 'MCP Client',
        hi: 'MCP क्लाइंट',
        fr: 'Client MCP',
        de: 'MCP-Client',
        ja: 'MCPクライアント',
        ko: 'MCP 클라이언트',
        es: 'Cliente MCP',
        ru: 'MCP клиент'
      },
      role: {
        zh: '连接管理器',
        en: 'Connection Manager',
        hi: 'कनेक्शन प्रबंधक',
        fr: 'Gestionnaire de Connexion',
        de: 'Verbindungsmanager',
        ja: '接続マネージャー',
        ko: '연결 관리자',
        es: 'Gestor de Conexión',
        ru: 'Менеджер соединений'
      },
      description: {
        zh: '维护与 MCP 服务器连接并为 MCP 主机获取上下文的组件',
        en: 'A component that maintains a connection to an MCP server and obtains context from an MCP server for the MCP host to use',
        hi: 'एक घटक जो MCP सर्वर से कनेक्शन बनाए रखता है और MCP होस्ट के उपयोग के लिए MCP सर्वर से संदर्भ प्राप्त करता है',
        fr: 'Un composant qui maintient une connexion à un serveur MCP et obtient le contexte d\'un serveur MCP pour que l\'hôte MCP l\'utilise',
        de: 'Eine Komponente, die eine Verbindung zu einem MCP-Server aufrechterhält und Kontext von einem MCP-Server für die Verwendung durch den MCP-Host erhält',
        ja: 'MCPサーバーへの接続を維持し、MCPホストが使用するためにMCPサーバーからコンテキストを取得するコンポーネント',
        ko: 'MCP 서버에 대한 연결을 유지하고 MCP 호스트가 사용할 수 있도록 MCP 서버에서 컨텍스트를 가져오는 구성 요소',
        es: 'Un componente que mantiene una conexión a un servidor MCP y obtiene contexto de un servidor MCP para que lo use el host MCP',
        ru: 'Компонент, который поддерживает соединение с MCP-сервером и получает контекст от MCP-сервера для использования MCP-хостом'
      },
      responsibilities: {
        zh: [
          '维护一对一服务器连接',
          '发送上下文查询',
          '处理服务器响应',
          '管理连接生命周期'
        ],
        en: [
          'Maintain one-to-one server connection',
          'Send context queries',
          'Handle server responses',
          'Manage connection lifecycle'
        ],
        hi: [
          'एक-से-एक सर्वर कनेक्शन बनाए रखना',
          'संदर्भ क्वेरी भेजना',
          'सर्वर प्रतिक्रियाओं को संभालना',
          'कनेक्शन जीवनचक्र प्रबंधित करना'
        ],
        fr: [
          'Maintenir une connexion serveur un-à-un',
          'Envoyer des requêtes de contexte',
          'Gérer les réponses du serveur',
          'Gérer le cycle de vie de la connexion'
        ],
        de: [
          'Eins-zu-eins-Server-Verbindung aufrechterhalten',
          'Kontext-Abfragen senden',
          'Server-Antworten handhaben',
          'Verbindungslebenszyklus verwalten'
        ],
        ja: [
          '1対1のサーバー接続を維持',
          'コンテキストクエリを送信',
          'サーバーレスポンスを処理',
          '接続ライフサイクルを管理'
        ],
        ko: [
          '일대일 서버 연결 유지',
          '컨텍스트 쿼리 전송',
          '서버 응답 처리',
          '연결 생명주기 관리'
        ],
        es: [
          'Mantener conexión servidor uno-a-uno',
          'Enviar consultas de contexto',
          'Manejar respuestas del servidor',
          'Gestionar ciclo de vida de conexión'
        ],
        ru: [
          'Поддерживать соединение сервер один-к-одному',
          'Отправлять контекстные запросы',
          'Обрабатывать ответы сервера',
          'Управлять жизненным циклом соединения'
        ]
      }
    },
    {
      name: {
        zh: 'MCP 服务器',
        en: 'MCP Server',
        hi: 'MCP सर्वर',
        fr: 'Serveur MCP',
        de: 'MCP-Server',
        ja: 'MCPサーバー',
        ko: 'MCP 서버',
        es: 'Servidor MCP',
        ru: 'MCP сервер'
      },
      role: {
        zh: '上下文提供者',
        en: 'Context Provider',
        hi: 'संदर्भ प्रदाता',
        fr: 'Fournisseur de Contexte',
        de: 'Kontext-Anbieter',
        ja: 'コンテキストプロバイダー',
        ko: '컨텍스트 제공자',
        es: 'Proveedor de Contexto',
        ru: 'Поставщик контекста'
      },
      description: {
        zh: '通过工具、资源和提示向 MCP 客户端提供上下文的程序',
        en: 'A program that provides context to MCP clients through tools, resources, and prompts',
        hi: 'एक प्रोग्राम जो टूल्स, संसाधनों और प्रॉम्प्ट्स के माध्यम से MCP क्लाइंट्स को संदर्भ प्रदान करता है',
        fr: 'Un programme qui fournit du contexte aux clients MCP via des outils, des ressources et des invites',
        de: 'Ein Programm, das MCP-Clients über Tools, Ressourcen und Prompts Kontext bereitstellt',
        ja: 'ツール、リソース、プロンプトを通じてMCPクライアントにコンテキストを提供するプログラム',
        ko: '도구, 리소스 및 프롬프트를 통해 MCP 클라이언트에 컨텍스트를 제공하는 프로그램',
        es: 'Un programa que proporciona contexto a los clientes MCP a través de herramientas, recursos y prompts',
        ru: 'Программа, которая предоставляет контекст MCP-клиентам через инструменты, ресурсы и подсказки'
      },
      responsibilities: {
        zh: [
          '接受客户端连接',
          '处理上下文请求',
          '返回结构化数据',
          '维护资源状态'
        ],
        en: [
          'Accept client connections',
          'Process context requests',
          'Return structured data',
          'Maintain resource state'
        ],
        hi: [
          'क्लाइंट कनेक्शन स्वीकार करना',
          'संदर्भ अनुरोधों को प्रोसेस करना',
          'संरचित डेटा वापस करना',
          'संसाधन स्थिति बनाए रखना'
        ],
        fr: [
          'Accepter les connexions client',
          'Traiter les demandes de contexte',
          'Retourner des données structurées',
          'Maintenir l\'état des ressources'
        ],
        de: [
          'Client-Verbindungen akzeptieren',
          'Kontext-Anfragen verarbeiten',
          'Strukturierte Daten zurückgeben',
          'Ressourcenstatus aufrechterhalten'
        ],
        ja: [
          'クライアント接続を受け入れ',
          'コンテキストリクエストを処理',
          '構造化データを返す',
          'リソース状態を維持'
        ],
        ko: [
          '클라이언트 연결 수락',
          '컨텍스트 요청 처리',
          '구조화된 데이터 반환',
          '리소스 상태 유지'
        ],
        es: [
          'Aceptar conexiones de cliente',
          'Procesar solicitudes de contexto',
          'Devolver datos estructurados',
          'Mantener estado de recursos'
        ],
        ru: [
          'Принимать клиентские соединения',
          'Обрабатывать контекстные запросы',
          'Возвращать структурированные данные',
          'Поддерживать состояние ресурсов'
        ]
      }
    },
    {
      name: {
        zh: '传输层',
        en: 'Transport Layer',
        hi: 'ट्रांसपोर्ट लेयर',
        fr: 'Couche de Transport',
        de: 'Transport-Schicht',
        ja: 'トランスポート層',
        ko: '전송 계층',
        es: 'Capa de Transporte',
        ru: 'Транспортный слой'
      },
      role: {
        zh: '通信通道',
        en: 'Communication Channel',
        hi: 'संचार चैनल',
        fr: 'Canal de Communication',
        de: 'Kommunikationskanal',
        ja: '通信チャネル',
        ko: '통신 채널',
        es: 'Canal de Comunicación',
        ru: 'Канал связи'
      },
      description: {
        zh: '管理客户端和服务器之间的通信通道和身份验证',
        en: 'Manages communication channels and authentication between clients and servers',
        hi: 'क्लाइंट्स और सर्वर के बीच संचार चैनल और प्रमाणीकरण का प्रबंधन करता है',
        fr: 'Gère les canaux de communication et l\'authentification entre clients et serveurs',
        de: 'Verwaltet Kommunikationskanäle und Authentifizierung zwischen Clients und Servern',
        ja: 'クライアントとサーバー間の通信チャネルと認証を管理',
        ko: '클라이언트와 서버 간의 통신 채널 및 인증 관리',
        es: 'Gestiona canales de comunicación y autenticación entre clientes y servidores',
        ru: 'Управляет каналами связи и аутентификацией между клиентами и серверами'
      },
      responsibilities: {
        zh: [
          '本地进程的 STDIO 传输',
          '远程服务器的 HTTP 传输',
          '消息帧和序列化',
          '身份验证和安全'
        ],
        en: [
          'STDIO transport for local processes',
          'HTTP transport for remote servers',
          'Message framing and serialization',
          'Authentication and security'
        ],
        hi: [
          'स्थानीय प्रक्रियाओं के लिए STDIO ट्रांसपोर्ट',
          'रिमोट सर्वर के लिए HTTP ट्रांसपोर्ट',
          'मैसेज फ्रेमिंग और सीरियलाइज़ेशन',
          'प्रमाणीकरण और सुरक्षा'
        ],
        fr: [
          'Transport STDIO pour les processus locaux',
          'Transport HTTP pour les serveurs distants',
          'Encadrement et sérialisation des messages',
          'Authentification et sécurité'
        ],
        de: [
          'STDIO-Transport für lokale Prozesse',
          'HTTP-Transport für entfernte Server',
          'Nachrichten-Framing und Serialisierung',
          'Authentifizierung und Sicherheit'
        ],
        ja: [
          'ローカルプロセス用のSTDIOトランスポート',
          'リモートサーバー用のHTTPトランスポート',
          'メッセージフレーミングとシリアライゼーション',
          '認証とセキュリティ'
        ],
        ko: [
          '로컬 프로세스용 STDIO 전송',
          '원격 서버용 HTTP 전송',
          '메시지 프레이밍 및 직렬화',
          '인증 및 보안'
        ],
        es: [
          'Transporte STDIO para procesos locales',
          'Transporte HTTP para servidores remotos',
          'Enmarcado y serialización de mensajes',
          'Autenticación y seguridad'
        ],
        ru: [
          'STDIO транспорт для локальных процессов',
          'HTTP транспорт для удаленных серверов',
          'Фреймирование и сериализация сообщений',
          'Аутентификация и безопасность'
        ]
      }
    },
    {
      name: {
        zh: '数据层',
        en: 'Data Layer',
        hi: 'डेटा लेयर',
        fr: 'Couche de Données',
        de: 'Datenschicht',
        ja: 'データ層',
        ko: '데이터 계층',
        es: 'Capa de Datos',
        ru: 'Слой данных'
      },
      role: {
        zh: '协议定义',
        en: 'Protocol Definition',
        hi: 'प्रोटोकॉल परिभाषा',
        fr: 'Définition de Protocole',
        de: 'Protokoll-Definition',
        ja: 'プロトコル定義',
        ko: '프로토콜 정의',
        es: 'Definición de Protocolo',
        ru: 'Определение протокола'
      },
      description: {
        zh: '定义基于 JSON-RPC 的客户端-服务器通信协议',
        en: 'Defines the JSON-RPC based protocol for client-server communication',
        hi: 'क्लाइंट-सर्वर संचार के लिए JSON-RPC आधारित प्रोटोकॉल को परिभाषित करता है',
        fr: 'Définit le protocole basé sur JSON-RPC pour la communication client-serveur',
        de: 'Definiert das JSON-RPC-basierte Protokoll für Client-Server-Kommunikation',
        ja: 'クライアント-サーバー通信のためのJSON-RPCベースのプロトコルを定義',
        ko: '클라이언트-서버 통신을 위한 JSON-RPC 기반 프로토콜 정의',
        es: 'Define el protocolo basado en JSON-RPC para comunicación cliente-servidor',
        ru: 'Определяет протокол на основе JSON-RPC для связи клиент-сервер'
      },
      responsibilities: {
        zh: [
          'JSON-RPC 2.0 消息格式',
          '生命周期管理',
          '原语定义（工具、资源、提示）',
          '通知系统'
        ],
        en: [
          'JSON-RPC 2.0 message format',
          'Lifecycle management',
          'Primitive definitions (tools, resources, prompts)',
          'Notification system'
        ],
        hi: [
          'JSON-RPC 2.0 संदेश प्रारूप',
          'जीवनचक्र प्रबंधन',
          'प्रिमिटिव परिभाषाएं (टूल्स, संसाधन, प्रॉम्प्ट्स)',
          'अधिसूचना प्रणाली'
        ],
        fr: [
          'Format de message JSON-RPC 2.0',
          'Gestion du cycle de vie',
          'Définitions primitives (outils, ressources, invites)',
          'Système de notification'
        ],
        de: [
          'JSON-RPC 2.0 Nachrichtenformat',
          'Lebenszyklus-Management',
          'Primitive Definitionen (Tools, Ressourcen, Prompts)',
          'Benachrichtigungssystem'
        ],
        ja: [
          'JSON-RPC 2.0メッセージ形式',
          'ライフサイクル管理',
          'プリミティブ定義（ツール、リソース、プロンプト）',
          '通知システム'
        ],
        ko: [
          'JSON-RPC 2.0 메시지 형식',
          '생명주기 관리',
          '프리미티브 정의 (도구, 리소스, 프롬프트)',
          '알림 시스템'
        ],
        es: [
          'Formato de mensaje JSON-RPC 2.0',
          'Gestión del ciclo de vida',
          'Definiciones primitivas (herramientas, recursos, prompts)',
          'Sistema de notificaciones'
        ],
        ru: [
          'Формат сообщений JSON-RPC 2.0',
          'Управление жизненным циклом',
          'Определения примитивов (инструменты, ресурсы, подсказки)',
          'Система уведомлений'
        ]
      }
    }
  ]
}

const messageTypes = [
  {
    type: 'initialize',
    direction: {
      zh: '客户端 → 服务器',
      en: 'Client → Server',
      hi: 'क्लाइंट → सर्वर',
      fr: 'Client → Serveur',
      de: 'Client → Server',
      ja: 'クライアント → サーバー',
      ko: '클라이언트 → 서버',
      es: 'Cliente → Servidor',
      ru: 'Клиент → Сервер'
    },
    description: {
      zh: '初始化连接并协商协议版本和能力',
      en: 'Initialize connection and negotiate protocol version and capabilities',
      hi: 'कनेक्शन प्रारंभ करें और प्रोटोकॉल संस्करण और क्षमताओं पर बातचीत करें',
      fr: 'Initialiser la connexion et négocier la version du protocole et les capacités',
      de: 'Verbindung initialisieren und Protokollversion und Fähigkeiten aushandeln',
      ja: '接続を初期化し、プロトコルバージョンと機能をネゴシエート',
      ko: '연결을 초기화하고 프로토콜 버전 및 기능 협상',
      es: 'Inicializar conexión y negociar versión del protocolo y capacidades',
      ru: 'Инициализировать соединение и согласовать версию протокола и возможности'
    },
    example: {
      method: 'initialize',
      params: {
        protocolVersion: '2025-06-18',
        capabilities: {
          tools: {},
          resources: {}
        },
        clientInfo: {
          name: 'gemini-cli',
          version: '1.0.0'
        }
      }
    }
  },
  {
    type: 'tools/list',
    direction: {
      zh: '客户端 → 服务器',
      en: 'Client → Server',
      hi: 'क्लाइंट → सर्वर',
      fr: 'Client → Serveur',
      de: 'Client → Server',
      ja: 'クライアント → サーバー',
      ko: '클라이언트 → 서버',
      es: 'Cliente → Servidor',
      ru: 'Клиент → Сервер'
    },
    description: {
      zh: '发现服务器上的可用工具',
      en: 'Discover available tools on the server',
      hi: 'सर्वर पर उपलब्ध टूल्स खोजें',
      fr: 'Découvrir les outils disponibles sur le serveur',
      de: 'Verfügbare Tools auf dem Server entdecken',
      ja: 'サーバー上の利用可能なツールを発見',
      ko: '서버에서 사용 가능한 도구 발견',
      es: 'Descubrir herramientas disponibles en el servidor',
      ru: 'Обнаружить доступные инструменты на сервере'
    },
    example: {
      method: 'tools/list',
      params: {}
    }
  },
  {
    type: 'tools/call',
    direction: {
      zh: '客户端 → 服务器',
      en: 'Client → Server',
      hi: 'क्लाइंट → सर्वर',
      fr: 'Client → Serveur',
      de: 'Client → Server',
      ja: 'クライアント → サーバー',
      ko: '클라이언트 → 서버',
      es: 'Cliente → Servidor',
      ru: 'Клиент → Сервер'
    },
    description: {
      zh: '使用提供的参数执行特定工具',
      en: 'Execute a specific tool with provided arguments',
      hi: 'प्रदान किए गए तर्कों के साथ एक विशिष्ट टूल निष्पादित करें',
      fr: 'Exécuter un outil spécifique avec les arguments fournis',
      de: 'Ein spezifisches Tool mit bereitgestellten Argumenten ausführen',
      ja: '提供された引数で特定のツールを実行',
      ko: '제공된 인수로 특정 도구 실행',
      es: 'Ejecutar una herramienta específica con argumentos proporcionados',
      ru: 'Выполнить конкретный инструмент с предоставленными аргументами'
    },
    example: {
      method: 'tools/call',
      params: {
        name: 'com.example.weather/current',
        arguments: {
          location: 'San Francisco',
          units: 'imperial'
        }
      }
    }
  },
  {
    type: 'resources/list',
    direction: {
      zh: '客户端 → 服务器',
      en: 'Client → Server',
      hi: 'क्लाइंट → सर्वर',
      fr: 'Client → Serveur',
      de: 'Client → Server',
      ja: 'クライアント → サーバー',
      ko: '클라이언트 → 서버',
      es: 'Cliente → Servidor',
      ru: 'Клиент → Сервер'
    },
    description: {
      zh: '获取可用资源列表',
      en: 'Get list of available resources',
      hi: 'उपलब्ध संसाधनों की सूची प्राप्त करें',
      fr: 'Obtenir la liste des ressources disponibles',
      de: 'Liste der verfügbaren Ressourcen abrufen',
      ja: '利用可能なリソースのリストを取得',
      ko: '사용 가능한 리소스 목록 가져오기',
      es: 'Obtener lista de recursos disponibles',
      ru: 'Получить список доступных ресурсов'
    },
    example: {
      method: 'resources/list',
      params: {}
    }
  },
  {
    type: 'resources/read',
    direction: {
      zh: '客户端 → 服务器',
      en: 'Client → Server',
      hi: 'क्लाइंट → सर्वर',
      fr: 'Client → Serveur',
      de: 'Client → Server',
      ja: 'クライアント → サーバー',
      ko: '클라이언트 → 서버',
      es: 'Cliente → Servidor',
      ru: 'Клиент → Сервер'
    },
    description: {
      zh: '读取特定资源内容',
      en: 'Read specific resource content',
      hi: 'विशिष्ट संसाधन सामग्री पढ़ें',
      fr: 'Lire le contenu de ressource spécifique',
      de: 'Spezifischen Ressourceninhalt lesen',
      ja: '特定のリソースコンテンツを読み取り',
      ko: '특정 리소스 콘텐츠 읽기',
      es: 'Leer contenido de recurso específico',
      ru: 'Читать содержимое конкретного ресурса'
    },
    example: {
      method: 'resources/read',
      params: {
        uri: 'file:///path/to/file.ts'
      }
    }
  },
  {
    type: 'prompts/list',
    direction: {
      zh: '客户端 → 服务器',
      en: 'Client → Server',
      hi: 'क्लाइंट → सर्वर',
      fr: 'Client → Serveur',
      de: 'Client → Server',
      ja: 'クライアント → サーバー',
      ko: '클라이언트 → 서버',
      es: 'Cliente → Servidor',
      ru: 'Клиент → Сервер'
    },
    description: {
      zh: '获取可用的提示模板',
      en: 'Get available prompt templates',
      hi: 'उपलब्ध प्रॉम्प्ट टेम्प्लेट प्राप्त करें',
      fr: 'Obtenir les modèles d\'invite disponibles',
      de: 'Verfügbare Prompt-Vorlagen abrufen',
      ja: '利用可能なプロンプトテンプレートを取得',
      ko: '사용 가능한 프롬프트 템플릿 가져오기',
      es: 'Obtener plantillas de prompt disponibles',
      ru: 'Получить доступные шаблоны подсказок'
    },
    example: {
      method: 'prompts/list',
      params: {}
    }
  },
  {
    type: 'notifications/tools/list_changed',
    direction: {
      zh: '服务器 → 客户端',
      en: 'Server → Client',
      hi: 'सर्वर → क्लाइंट',
      fr: 'Serveur → Client',
      de: 'Server → Client',
      ja: 'サーバー → クライアント',
      ko: '서버 → 클라이언트',
      es: 'Servidor → Cliente',
      ru: 'Сервер → Клиент'
    },
    description: {
      zh: '当可用工具发生变化时通知客户端',
      en: 'Notify client when available tools change',
      hi: 'जब उपलब्ध टूल्स बदलते हैं तो क्लाइंट को सूचित करें',
      fr: 'Notifier le client lorsque les outils disponibles changent',
      de: 'Client benachrichtigen, wenn sich verfügbare Tools ändern',
      ja: '利用可能なツールが変更されたときにクライアントに通知',
      ko: '사용 가능한 도구가 변경될 때 클라이언트에 알림',
      es: 'Notificar al cliente cuando cambien las herramientas disponibles',
      ru: 'Уведомить клиента при изменении доступных инструментов'
    },
    example: {
      method: 'notifications/tools/list_changed'
    }
  }
]

const mcpPrimitives = [
  {
    type: {
      zh: '工具',
      en: 'Tools',
      hi: 'टूल्स',
      fr: 'Outils',
      de: 'Tools',
      ja: 'ツール',
      ko: '도구',
      es: 'Herramientas',
      ru: 'Инструменты'
    },
    description: {
      zh: 'AI 应用程序可以调用来执行操作的可执行函数',
      en: 'Executable functions that AI applications can invoke to perform actions',
      hi: 'निष्पादन योग्य फ़ंक्शन जिन्हें AI एप्लिकेशन क्रियाएं करने के लिए आह्वान कर सकते हैं',
      fr: 'Fonctions exécutables que les applications IA peuvent invoquer pour effectuer des actions',
      de: 'Ausführbare Funktionen, die KI-Anwendungen aufrufen können, um Aktionen durchzuführen',
      ja: 'AIアプリケーションがアクションを実行するために呼び出すことができる実行可能な関数',
      ko: 'AI 애플리케이션이 작업을 수행하기 위해 호출할 수 있는 실행 가능한 함수',
      es: 'Funciones ejecutables que las aplicaciones IA pueden invocar para realizar acciones',
      ru: 'Исполняемые функции, которые ИИ-приложения могут вызывать для выполнения действий'
    },
    icon: CpuChipIcon,
    color: 'from-blue-500 to-indigo-600',
    examples: {
      zh: [
        '文件操作（读取、写入、创建）',
        '调用外部服务的 API',
        '数据库查询和操作',
        '代码分析和编译',
        '系统命令执行'
      ],
      en: [
        'File operations (read, write, create)',
        'API calls to external services',
        'Database queries and operations',
        'Code analysis and compilation',
        'System commands execution'
      ],
      hi: [
        'फ़ाइल ऑपरेशन (पढ़ना, लिखना, बनाना)',
        'बाहरी सेवाओं के लिए API कॉल',
        'डेटाबेस क्वेरी और ऑपरेशन',
        'कोड विश्लेषण और संकलन',
        'सिस्टम कमांड निष्पादन'
      ],
      fr: [
        'Opérations de fichiers (lire, écrire, créer)',
        'Appels API vers des services externes',
        'Requêtes et opérations de base de données',
        'Analyse et compilation de code',
        'Exécution de commandes système'
      ],
      de: [
        'Dateioperationen (lesen, schreiben, erstellen)',
        'API-Aufrufe an externe Dienste',
        'Datenbankabfragen und -operationen',
        'Code-Analyse und Kompilierung',
        'Systembefehl-Ausführung'
      ],
      ja: [
        'ファイル操作（読み取り、書き込み、作成）',
        '外部サービスへのAPI呼び出し',
        'データベースクエリと操作',
        'コード分析とコンパイル',
        'システムコマンド実行'
      ],
      ko: [
        '파일 작업 (읽기, 쓰기, 생성)',
        '외부 서비스에 대한 API 호출',
        '데이터베이스 쿼리 및 작업',
        '코드 분석 및 컴파일',
        '시스템 명령 실행'
      ],
      es: [
        'Operaciones de archivos (leer, escribir, crear)',
        'Llamadas API a servicios externos',
        'Consultas y operaciones de base de datos',
        'Análisis y compilación de código',
        'Ejecución de comandos del sistema'
      ],
      ru: [
        'Файловые операции (чтение, запись, создание)',
        'API-вызовы к внешним сервисам',
        'Запросы и операции с базой данных',
        'Анализ и компиляция кода',
        'Выполнение системных команд'
      ]
    },
    methods: {
      zh: ['tools/list', 'tools/call'],
      en: ['tools/list', 'tools/call'],
      hi: ['tools/list', 'tools/call'],
      fr: ['tools/list', 'tools/call'],
      de: ['tools/list', 'tools/call'],
      ja: ['tools/list', 'tools/call'],
      ko: ['tools/list', 'tools/call'],
      es: ['tools/list', 'tools/call'],
      ru: ['tools/list', 'tools/call']
    }
  },
  {
    type: {
      zh: '资源',
      en: 'Resources',
      hi: 'संसाधन',
      fr: 'Ressources',
      de: 'Ressourcen',
      ja: 'リソース',
      ko: '리소스',
      es: 'Recursos',
      ru: 'Ресурсы'
    },
    description: {
      zh: '为 AI 应用程序提供上下文信息的数据源',
      en: 'Data sources that provide contextual information to AI applications',
      hi: 'डेटा स्रोत जो AI एप्लिकेशन को संदर्भ जानकारी प्रदान करते हैं',
      fr: 'Sources de données qui fournissent des informations contextuelles aux applications IA',
      de: 'Datenquellen, die kontextuelle Informationen für KI-Anwendungen bereitstellen',
      ja: 'AIアプリケーションにコンテキスト情報を提供するデータソース',
      ko: 'AI 애플리케이션에 컨텍스트 정보를 제공하는 데이터 소스',
      es: 'Fuentes de datos que proporcionan información contextual a aplicaciones IA',
      ru: 'Источники данных, которые предоставляют контекстную информацию ИИ-приложениям'
    },
    icon: ServerIcon,
    color: 'from-green-500 to-emerald-600',
    examples: {
      zh: [
        '文件内容和元数据',
        '数据库记录和模式',
        'API 响应和文档',
        'Git 仓库信息',
        '配置文件'
      ],
      en: [
        'File contents and metadata',
        'Database records and schemas',
        'API responses and documentation',
        'Git repository information',
        'Configuration files'
      ],
      hi: [
        'फ़ाइल सामग्री और मेटाडेटा',
        'डेटाबेस रिकॉर्ड और स्कीमा',
        'API प्रतिक्रियाएं और दस्तावेज़ीकरण',
        'Git रिपॉजिटरी जानकारी',
        'कॉन्फ़िगरेशन फ़ाइलें'
      ],
      fr: [
        'Contenu et métadonnées de fichiers',
        'Enregistrements et schémas de base de données',
        'Réponses API et documentation',
        'Informations du dépôt Git',
        'Fichiers de configuration'
      ],
      de: [
        'Dateiinhalte und Metadaten',
        'Datenbankdatensätze und Schemas',
        'API-Antworten und Dokumentation',
        'Git-Repository-Informationen',
        'Konfigurationsdateien'
      ],
      ja: [
        'ファイルコンテンツとメタデータ',
        'データベースレコードとスキーマ',
        'APIレスポンスとドキュメント',
        'Gitリポジトリ情報',
        '設定ファイル'
      ],
      ko: [
        '파일 콘텐츠 및 메타데이터',
        '데이터베이스 레코드 및 스키마',
        'API 응답 및 문서',
        'Git 저장소 정보',
        '구성 파일'
      ],
      es: [
        'Contenido y metadatos de archivos',
        'Registros y esquemas de base de datos',
        'Respuestas API y documentación',
        'Información del repositorio Git',
        'Archivos de configuración'
      ],
      ru: [
        'Содержимое файлов и метаданные',
        'Записи и схемы базы данных',
        'API-ответы и документация',
        'Информация Git-репозитория',
        'Файлы конфигурации'
      ]
    },
    methods: {
      zh: ['resources/list', 'resources/read'],
      en: ['resources/list', 'resources/read'],
      hi: ['resources/list', 'resources/read'],
      fr: ['resources/list', 'resources/read'],
      de: ['resources/list', 'resources/read'],
      ja: ['resources/list', 'resources/read'],
      ko: ['resources/list', 'resources/read'],
      es: ['resources/list', 'resources/read'],
      ru: ['resources/list', 'resources/read']
    }
  },
  {
    type: {
      zh: '提示',
      en: 'Prompts',
      hi: 'प्रॉम्प्ट्स',
      fr: 'Invites',
      de: 'Prompts',
      ja: 'プロンプト',
      ko: '프롬프트',
      es: 'Prompts',
      ru: 'Подсказки'
    },
    description: {
      zh: '帮助构建与语言模型交互的可重用模板',
      en: 'Reusable templates that help structure interactions with language models',
      hi: 'पुन: उपयोग योग्य टेम्प्लेट जो भाषा मॉडल के साथ इंटरैक्शन को संरचित करने में मदद करते हैं',
      fr: 'Modèles réutilisables qui aident à structurer les interactions avec les modèles de langage',
      de: 'Wiederverwendbare Vorlagen, die bei der Strukturierung von Interaktionen mit Sprachmodellen helfen',
      ja: '言語モデルとの相互作用を構造化するのに役立つ再利用可能なテンプレート',
      ko: '언어 모델과의 상호작용을 구조화하는 데 도움이 되는 재사용 가능한 템플릿',
      es: 'Plantillas reutilizables que ayudan a estructurar interacciones con modelos de lenguaje',
      ru: 'Многоразовые шаблоны, которые помогают структурировать взаимодействие с языковыми моделями'
    },
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-pink-600',
    examples: {
      zh: [
        '特定任务的系统提示',
        '学习的少样本示例',
        '代码审查模板',
        '文档生成提示',
        '分析和摘要模板'
      ],
      en: [
        'System prompts for specific tasks',
        'Few-shot examples for learning',
        'Code review templates',
        'Documentation generation prompts',
        'Analysis and summary templates'
      ],
      hi: [
        'विशिष्ट कार्यों के लिए सिस्टम प्रॉम्प्ट्स',
        'सीखने के लिए कुछ-शॉट उदाहरण',
        'कोड समीक्षा टेम्प्लेट',
        'दस्तावेज़ीकरण जेनरेशन प्रॉम्प्ट्स',
        'विश्लेषण और सारांश टेम्प्लेट'
      ],
      fr: [
        'Invites système pour des tâches spécifiques',
        'Exemples few-shot pour l\'apprentissage',
        'Modèles de révision de code',
        'Invites de génération de documentation',
        'Modèles d\'analyse et de résumé'
      ],
      de: [
        'System-Prompts für spezifische Aufgaben',
        'Few-Shot-Beispiele zum Lernen',
        'Code-Review-Vorlagen',
        'Dokumentationsgenerierungs-Prompts',
        'Analyse- und Zusammenfassungsvorlagen'
      ],
      ja: [
        '特定タスク用のシステムプロンプト',
        '学習用のFew-shot例',
        'コードレビューテンプレート',
        'ドキュメント生成プロンプト',
        '分析と要約テンプレート'
      ],
      ko: [
        '특정 작업을 위한 시스템 프롬프트',
        '학습을 위한 Few-shot 예제',
        '코드 리뷰 템플릿',
        '문서 생성 프롬프트',
        '분석 및 요약 템플릿'
      ],
      es: [
        'Prompts del sistema para tareas específicas',
        'Ejemplos few-shot para aprendizaje',
        'Plantillas de revisión de código',
        'Prompts de generación de documentación',
        'Plantillas de análisis y resumen'
      ],
      ru: [
        'Системные подсказки для конкретных задач',
        'Few-shot примеры для обучения',
        'Шаблоны обзора кода',
        'Подсказки генерации документации',
        'Шаблоны анализа и резюме'
      ]
    },
    methods: {
      zh: ['prompts/list', 'prompts/get'],
      en: ['prompts/list', 'prompts/get'],
      hi: ['prompts/list', 'prompts/get'],
      fr: ['prompts/list', 'prompts/get'],
      de: ['prompts/list', 'prompts/get'],
      ja: ['prompts/list', 'prompts/get'],
      ko: ['prompts/list', 'prompts/get'],
      es: ['prompts/list', 'prompts/get'],
      ru: ['prompts/list', 'prompts/get']
    }
  }
]

const transportTypes = [
  {
    type: {
      zh: 'STDIO 传输',
      en: 'STDIO Transport',
      hi: 'STDIO ट्रांसपोर्ट',
      fr: 'Transport STDIO',
      de: 'STDIO-Transport',
      ja: 'STDIO トランスポート',
      ko: 'STDIO 전송',
      es: 'Transporte STDIO',
      ru: 'STDIO транспорт'
    },
    description: {
      zh: '使用标准输入/输出流进行直接进程通信',
      en: 'Uses standard input/output streams for direct process communication',
      hi: 'प्रत्यक्ष प्रक्रिया संचार के लिए मानक इनपुट/आउटपुट स्ट्रीम का उपयोग करता है',
      fr: 'Utilise les flux d\'entrée/sortie standard pour la communication directe de processus',
      de: 'Verwendet Standard-Ein-/Ausgabeströme für direkte Prozesskommunikation',
      ja: '直接プロセス通信のために標準入出力ストリームを使用',
      ko: '직접 프로세스 통신을 위해 표준 입출력 스트림 사용',
      es: 'Utiliza flujos de entrada/salida estándar para comunicación directa de procesos',
      ru: 'Использует стандартные потоки ввода/вывода для прямой связи процессов'
    },
    useCases: {
      zh: [
        '同一台机器上的本地 MCP 服务器',
        '直接进程通信',
        '无网络开销的最佳性能',
        '简单的设置和配置'
      ],
      en: [
        'Local MCP servers on same machine',
        'Direct process communication',
        'Optimal performance with no network overhead',
        'Simple setup and configuration'
      ],
      hi: [
        'समान मशीन पर स्थानीय MCP सर्वर',
        'प्रत्यक्ष प्रक्रिया संचार',
        'बिना नेटवर्क ओवरहेड के इष्टतम प्रदर्शन',
        'सरल सेटअप और कॉन्फ़िगरेशन'
      ],
      fr: [
        'Serveurs MCP locaux sur la même machine',
        'Communication directe de processus',
        'Performance optimale sans surcharge réseau',
        'Configuration et installation simples'
      ],
      de: [
        'Lokale MCP-Server auf derselben Maschine',
        'Direkte Prozesskommunikation',
        'Optimale Leistung ohne Netzwerk-Overhead',
        'Einfache Einrichtung und Konfiguration'
      ],
      ja: [
        '同一マシン上のローカルMCPサーバー',
        '直接プロセス通信',
        'ネットワークオーバーヘッドなしの最適パフォーマンス',
        'シンプルなセットアップと設定'
      ],
      ko: [
        '동일한 머신의 로컬 MCP 서버',
        '직접 프로세스 통신',
        '네트워크 오버헤드 없는 최적 성능',
        '간단한 설정 및 구성'
      ],
      es: [
        'Servidores MCP locales en la misma máquina',
        'Comunicación directa de procesos',
        'Rendimiento óptimo sin sobrecarga de red',
        'Configuración y configuración simples'
      ],
      ru: [
        'Локальные MCP-серверы на той же машине',
        'Прямая связь процессов',
        'Оптимальная производительность без сетевых накладных расходов',
        'Простая настройка и конфигурация'
      ]
    },
    example: {
      command: 'npx @modelcontextprotocol/server-filesystem /path/to/files',
      description: {
        zh: '通过 STDIO 启动文件系统服务器',
        en: 'Launch filesystem server via STDIO',
        hi: 'STDIO के माध्यम से फाइलसिस्टम सर्वर लॉन्च करें',
        fr: 'Lancer le serveur de système de fichiers via STDIO',
        de: 'Dateisystem-Server über STDIO starten',
        ja: 'STDIOを介してファイルシステムサーバーを起動',
        ko: 'STDIO를 통해 파일시스템 서버 시작',
        es: 'Lanzar servidor de sistema de archivos vía STDIO',
        ru: 'Запустить файловый сервер через STDIO'
      }
    }
  },
  {
    type: {
      zh: 'HTTP 传输',
      en: 'HTTP Transport',
      hi: 'HTTP ट्रांसपोर्ट',
      fr: 'Transport HTTP',
      de: 'HTTP-Transport',
      ja: 'HTTP トランスポート',
      ko: 'HTTP 전송',
      es: 'Transporte HTTP',
      ru: 'HTTP транспорт'
    },
    description: {
      zh: '使用 HTTP POST 进行客户端到服务器的消息传递，可选择服务器发送事件',
      en: 'Uses HTTP POST for client-to-server messages with optional Server-Sent Events',
      hi: 'वैकल्पिक सर्वर-सेंट इवेंट्स के साथ क्लाइंट-टू-सर्वर संदेशों के लिए HTTP POST का उपयोग करता है',
      fr: 'Utilise HTTP POST pour les messages client-serveur avec des événements envoyés par le serveur optionnels',
      de: 'Verwendet HTTP POST für Client-zu-Server-Nachrichten mit optionalen Server-Sent Events',
      ja: 'オプションのServer-Sent Eventsを使用してクライアント-サーバーメッセージにHTTP POSTを使用',
      ko: '선택적 Server-Sent Events와 함께 클라이언트-서버 메시지에 HTTP POST 사용',
      es: 'Utiliza HTTP POST para mensajes cliente-servidor con eventos enviados por servidor opcionales',
      ru: 'Использует HTTP POST для сообщений клиент-сервер с дополнительными Server-Sent Events'
    },
    useCases: {
      zh: [
        '远程 MCP 服务器',
        '基于云的服务',
        '使用 bearer token 的身份验证',
        '可扩展的服务器部署'
      ],
      en: [
        'Remote MCP servers',
        'Cloud-based services',
        'Authentication with bearer tokens',
        'Scalable server deployments'
      ],
      hi: [
        'रिमोट MCP सर्वर',
        'क्लाउड-आधारित सेवाएं',
        'Bearer टोकन के साथ प्रमाणीकरण',
        'स्केलेबल सर्वर परिनियोजन'
      ],
      fr: [
        'Serveurs MCP distants',
        'Services basés sur le cloud',
        'Authentification avec des jetons bearer',
        'Déploiements de serveurs évolutifs'
      ],
      de: [
        'Entfernte MCP-Server',
        'Cloud-basierte Dienste',
        'Authentifizierung mit Bearer-Token',
        'Skalierbare Server-Deployments'
      ],
      ja: [
        'リモートMCPサーバー',
        'クラウドベースのサービス',
        'Bearerトークンによる認証',
        'スケーラブルなサーバーデプロイメント'
      ],
      ko: [
        '원격 MCP 서버',
        '클라우드 기반 서비스',
        'Bearer 토큰을 사용한 인증',
        '확장 가능한 서버 배포'
      ],
      es: [
        'Servidores MCP remotos',
        'Servicios basados en la nube',
        'Autenticación con tokens bearer',
        'Despliegues de servidor escalables'
      ],
      ru: [
        'Удаленные MCP-серверы',
        'Облачные сервисы',
        'Аутентификация с bearer токенами',
        'Масштабируемые развертывания серверов'
      ]
    },
    example: {
      url: 'https://api.example.com/mcp',
      description: {
        zh: '通过 HTTP 连接到远程 MCP 服务器',
        en: 'Connect to remote MCP server via HTTP',
        hi: 'HTTP के माध्यम से रिमोट MCP सर्वर से कनेक्ट करें',
        fr: 'Se connecter au serveur MCP distant via HTTP',
        de: 'Verbindung zu entferntem MCP-Server über HTTP',
        ja: 'HTTPを介してリモートMCPサーバーに接続',
        ko: 'HTTP를 통해 원격 MCP 서버에 연결',
        es: 'Conectar al servidor MCP remoto vía HTTP',
        ru: 'Подключиться к удаленному MCP-серверу через HTTP'
      }
    }
  }
]

const toolDefinition = `// MCP 工具定义示例
{
  "name": "com.example.weather/current",
  "title": "获取当前天气",
  "description": "获取指定位置的当前天气信息",
  "inputSchema": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "要获取天气的位置"
      },
      "units": {
        "type": "string",
        "enum": ["metric", "imperial"],
        "description": "温度单位",
        "default": "metric"
      },
      "include_forecast": {
        "type": "boolean",
        "description": "是否包含预报数据",
        "default": false
      }
    },
    "required": ["location"]
  }
}`

const communicationFlow = [
  {
    step: 1,
    title: {
      zh: '初始化连接',
      en: 'Initialize Connection',
      hi: 'कनेक्शन प्रारंभ करें',
      fr: 'Initialiser la Connexion',
      de: 'Verbindung Initialisieren',
      ja: '接続の初期化',
      ko: '연결 초기화',
      es: 'Inicializar Conexión',
      ru: 'Инициализация соединения'
    },
    description: {
      zh: '客户端建立连接并与服务器协商能力',
      en: 'Client establishes connection and negotiates capabilities with server',
      hi: 'क्लाइंट कनेक्शन स्थापित करता है और सर्वर के साथ क्षमताओं पर बातचीत करता है',
      fr: 'Le client établit une connexion et négocie les capacités avec le serveur',
      de: 'Client stellt Verbindung her und verhandelt Fähigkeiten mit dem Server',
      ja: 'クライアントが接続を確立し、サーバーと機能をネゴシエート',
      ko: '클라이언트가 연결을 설정하고 서버와 기능을 협상',
      es: 'El cliente establece conexión y negocia capacidades con el servidor',
      ru: 'Клиент устанавливает соединение и согласовывает возможности с сервером'
    },
    details: {
      zh: [
        '客户端发送带有协议版本的初始化请求',
        '服务器响应支持的能力',
        '双方协商通信参数',
        '使用约定的协议版本建立连接'
      ],
      en: [
        'Client sends initialize request with protocol version',
        'Server responds with supported capabilities',
        'Both parties negotiate communication parameters',
        'Connection established with agreed protocol version'
      ],
      hi: [
        'क्लाइंट प्रोटोकॉल संस्करण के साथ प्रारंभिक अनुरोध भेजता है',
        'सर्वर समर्थित क्षमताओं के साथ प्रतिक्रिया देता है',
        'दोनों पक्ष संचार पैरामीटर पर बातचीत करते हैं',
        'सहमत प्रोटोकॉल संस्करण के साथ कनेक्शन स्थापित'
      ],
      fr: [
        'Le client envoie une demande d\'initialisation avec la version du protocole',
        'Le serveur répond avec les capacités prises en charge',
        'Les deux parties négocient les paramètres de communication',
        'Connexion établie avec la version de protocole convenue'
      ],
      de: [
        'Client sendet Initialisierungsanfrage mit Protokollversion',
        'Server antwortet mit unterstützten Fähigkeiten',
        'Beide Parteien verhandeln Kommunikationsparameter',
        'Verbindung mit vereinbarter Protokollversion hergestellt'
      ],
      ja: [
        'クライアントがプロトコルバージョンと共に初期化リクエストを送信',
        'サーバーがサポートされる機能で応答',
        '両者が通信パラメータをネゴシエート',
        '合意されたプロトコルバージョンで接続確立'
      ],
      ko: [
        '클라이언트가 프로토콜 버전과 함께 초기화 요청 전송',
        '서버가 지원되는 기능으로 응답',
        '양측이 통신 매개변수 협상',
        '합의된 프로토콜 버전으로 연결 설정'
      ],
      es: [
        'El cliente envía solicitud de inicialización con versión del protocolo',
        'El servidor responde con capacidades soportadas',
        'Ambas partes negocian parámetros de comunicación',
        'Conexión establecida con versión de protocolo acordada'
      ],
      ru: [
        'Клиент отправляет запрос инициализации с версией протокола',
        'Сервер отвечает поддерживаемыми возможностями',
        'Обе стороны согласовывают параметры связи',
        'Соединение установлено с согласованной версией протокола'
      ]
    }
  },
  {
    step: 2,
    title: {
      zh: '能力发现',
      en: 'Capability Discovery',
      hi: 'क्षमता खोज',
      fr: 'Découverte de Capacités',
      de: 'Fähigkeitserkennung',
      ja: '機能発見',
      ko: '기능 발견',
      es: 'Descubrimiento de Capacidades',
      ru: 'Обнаружение возможностей'
    },
    description: {
      zh: '客户端发现可用的工具、资源和提示',
      en: 'Client discovers available tools, resources, and prompts',
      hi: 'क्लाइंट उपलब्ध टूल्स, संसाधन और प्रॉम्प्ट्स खोजता है',
      fr: 'Le client découvre les outils, ressources et invites disponibles',
      de: 'Client entdeckt verfügbare Tools, Ressourcen und Prompts',
      ja: 'クライアントが利用可能なツール、リソース、プロンプトを発見',
      ko: '클라이언트가 사용 가능한 도구, 리소스 및 프롬프트 발견',
      es: 'El cliente descubre herramientas, recursos y prompts disponibles',
      ru: 'Клиент обнаруживает доступные инструменты, ресурсы и подсказки'
    },
    details: {
      zh: [
        '请求可用工具列表 (tools/list)',
        '请求可用资源 (resources/list)',
        '请求可用提示 (prompts/list)',
        '缓存能力信息以便高效访问'
      ],
      en: [
        'Request available tools list (tools/list)',
        'Request available resources (resources/list)',
        'Request available prompts (prompts/list)',
        'Cache capability information for efficient access'
      ],
      hi: [
        'उपलब्ध टूल्स सूची का अनुरोध करें (tools/list)',
        'उपलब्ध संसाधनों का अनुरोध करें (resources/list)',
        'उपलब्ध प्रॉम्प्ट्स का अनुरोध करें (prompts/list)',
        'कुशल पहुंच के लिए क्षमता जानकारी कैश करें'
      ],
      fr: [
        'Demander la liste des outils disponibles (tools/list)',
        'Demander les ressources disponibles (resources/list)',
        'Demander les invites disponibles (prompts/list)',
        'Mettre en cache les informations de capacité pour un accès efficace'
      ],
      de: [
        'Liste verfügbarer Tools anfordern (tools/list)',
        'Verfügbare Ressourcen anfordern (resources/list)',
        'Verfügbare Prompts anfordern (prompts/list)',
        'Fähigkeitsinformationen für effizienten Zugriff zwischenspeichern'
      ],
      ja: [
        '利用可能なツールリストを要求 (tools/list)',
        '利用可能なリソースを要求 (resources/list)',
        '利用可能なプロンプトを要求 (prompts/list)',
        '効率的なアクセスのために機能情報をキャッシュ'
      ],
      ko: [
        '사용 가능한 도구 목록 요청 (tools/list)',
        '사용 가능한 리소스 요청 (resources/list)',
        '사용 가능한 프롬프트 요청 (prompts/list)',
        '효율적인 액세스를 위해 기능 정보 캐시'
      ],
      es: [
        'Solicitar lista de herramientas disponibles (tools/list)',
        'Solicitar recursos disponibles (resources/list)',
        'Solicitar prompts disponibles (prompts/list)',
        'Cachear información de capacidades para acceso eficiente'
      ],
      ru: [
        'Запросить список доступных инструментов (tools/list)',
        'Запросить доступные ресурсы (resources/list)',
        'Запросить доступные подсказки (prompts/list)',
        'Кэшировать информацию о возможностях для эффективного доступа'
      ]
    }
  },
  {
    step: 3,
    title: {
      zh: '上下文交换',
      en: 'Context Exchange',
      hi: 'संदर्भ आदान-प्रदान',
      fr: 'Échange de Contexte',
      de: 'Kontext-Austausch',
      ja: 'コンテキスト交換',
      ko: '컨텍스트 교환',
      es: 'Intercambio de Contexto',
      ru: 'Обмен контекстом'
    },
    description: {
      zh: '客户端从资源请求并接收上下文数据',
      en: 'Client requests and receives contextual data from resources',
      hi: 'क्लाइंट संसाधनों से संदर्भ डेटा का अनुरोध करता है और प्राप्त करता है',
      fr: 'Le client demande et reçoit des données contextuelles des ressources',
      de: 'Client fordert kontextuelle Daten von Ressourcen an und empfängt sie',
      ja: 'クライアントがリソースからコンテキストデータを要求し受信',
      ko: '클라이언트가 리소스에서 컨텍스트 데이터를 요청하고 수신',
      es: 'El cliente solicita y recibe datos contextuales de los recursos',
      ru: 'Клиент запрашивает и получает контекстные данные от ресурсов'
    },
    details: {
      zh: [
        '发送资源读取请求 (resources/read)',
        '接收各种格式的结构化数据',
        '根据需要处理数据格式转换',
        '使用接收到的信息更新本地上下文'
      ],
      en: [
        'Send resource read requests (resources/read)',
        'Receive structured data in various formats',
        'Process data format conversion as needed',
        'Update local context with received information'
      ],
      hi: [
        'संसाधन पढ़ने के अनुरोध भेजें (resources/read)',
        'विभिन्न प्रारूपों में संरचित डेटा प्राप्त करें',
        'आवश्यकतानुसार डेटा प्रारूप रूपांतरण प्रक्रिया करें',
        'प्राप्त जानकारी के साथ स्थानीय संदर्भ अपडेट करें'
      ],
      fr: [
        'Envoyer des demandes de lecture de ressources (resources/read)',
        'Recevoir des données structurées dans divers formats',
        'Traiter la conversion de format de données selon les besoins',
        'Mettre à jour le contexte local avec les informations reçues'
      ],
      de: [
        'Ressourcen-Leseanfragen senden (resources/read)',
        'Strukturierte Daten in verschiedenen Formaten empfangen',
        'Datenformat-Konvertierung nach Bedarf verarbeiten',
        'Lokalen Kontext mit empfangenen Informationen aktualisieren'
      ],
      ja: [
        'リソース読み取りリクエストを送信 (resources/read)',
        '様々な形式の構造化データを受信',
        '必要に応じてデータ形式変換を処理',
        '受信した情報でローカルコンテキストを更新'
      ],
      ko: [
        '리소스 읽기 요청 전송 (resources/read)',
        '다양한 형식의 구조화된 데이터 수신',
        '필요에 따라 데이터 형식 변환 처리',
        '수신된 정보로 로컬 컨텍스트 업데이트'
      ],
      es: [
        'Enviar solicitudes de lectura de recursos (resources/read)',
        'Recibir datos estructurados en varios formatos',
        'Procesar conversión de formato de datos según sea necesario',
        'Actualizar contexto local con información recibida'
      ],
      ru: [
        'Отправить запросы чтения ресурсов (resources/read)',
        'Получить структурированные данные в различных форматах',
        'Обработать преобразование формата данных по мере необходимости',
        'Обновить локальный контекст полученной информацией'
      ]
    }
  },
  {
    step: 4,
    title: {
      zh: '工具执行',
      en: 'Tool Execution',
      hi: 'टूल निष्पादन',
      fr: 'Exécution d\'Outils',
      de: 'Tool-Ausführung',
      ja: 'ツール実行',
      ko: '도구 실행',
      es: 'Ejecución de Herramientas',
      ru: 'Выполнение инструментов'
    },
    description: {
      zh: '客户端调用服务器工具执行操作',
      en: 'Client invokes server tools to perform actions',
      hi: 'क्लाइंट क्रियाएं करने के लिए सर्वर टूल्स का आह्वान करता है',
      fr: 'Le client invoque les outils du serveur pour effectuer des actions',
      de: 'Client ruft Server-Tools auf, um Aktionen durchzuführen',
      ja: 'クライアントがアクションを実行するためにサーバーツールを呼び出し',
      ko: '클라이언트가 작업을 수행하기 위해 서버 도구를 호출',
      es: 'El cliente invoca herramientas del servidor para realizar acciones',
      ru: 'Клиент вызывает серверные инструменты для выполнения действий'
    },
    details: {
      zh: [
        '构造工具调用请求 (tools/call)',
        '传递带有适当验证的必需参数',
        '等待服务器的执行结果',
        '处理返回的数据并处理错误'
      ],
      en: [
        'Construct tool call requests (tools/call)',
        'Pass required parameters with proper validation',
        'Wait for execution results from server',
        'Process returned data and handle errors'
      ],
      hi: [
        'टूल कॉल अनुरोध बनाएं (tools/call)',
        'उचित सत्यापन के साथ आवश्यक पैरामीटर पास करें',
        'सर्वर से निष्पादन परिणामों की प्रतीक्षा करें',
        'वापस किए गए डेटा को प्रोसेस करें और त्रुटियों को संभालें'
      ],
      fr: [
        'Construire des demandes d\'appel d\'outils (tools/call)',
        'Passer les paramètres requis avec une validation appropriée',
        'Attendre les résultats d\'exécution du serveur',
        'Traiter les données retournées et gérer les erreurs'
      ],
      de: [
        'Tool-Aufruf-Anfragen konstruieren (tools/call)',
        'Erforderliche Parameter mit ordnungsgemäßer Validierung übergeben',
        'Auf Ausführungsergebnisse vom Server warten',
        'Zurückgegebene Daten verarbeiten und Fehler behandeln'
      ],
      ja: [
        'ツール呼び出しリクエストを構築 (tools/call)',
        '適切な検証で必要なパラメータを渡す',
        'サーバーからの実行結果を待機',
        '返されたデータを処理しエラーを処理'
      ],
      ko: [
        '도구 호출 요청 구성 (tools/call)',
        '적절한 검증과 함께 필수 매개변수 전달',
        '서버에서 실행 결과 대기',
        '반환된 데이터 처리 및 오류 처리'
      ],
      es: [
        'Construir solicitudes de llamada de herramientas (tools/call)',
        'Pasar parámetros requeridos con validación adecuada',
        'Esperar resultados de ejecución del servidor',
        'Procesar datos devueltos y manejar errores'
      ],
      ru: [
        'Создать запросы вызова инструментов (tools/call)',
        'Передать необходимые параметры с правильной валидацией',
        'Ждать результатов выполнения от сервера',
        'Обработать возвращенные данные и обработать ошибки'
      ]
    }
  },
  {
    step: 5,
    title: {
      zh: '实时更新',
      en: 'Real-time Updates',
      hi: 'रियल-टाइम अपडेट',
      fr: 'Mises à Jour en Temps Réel',
      de: 'Echtzeit-Updates',
      ja: 'リアルタイム更新',
      ko: '실시간 업데이트',
      es: 'Actualizaciones en Tiempo Real',
      ru: 'Обновления в реальном времени'
    },
    description: {
      zh: '通过通知维护同步',
      en: 'Maintain synchronization through notifications',
      hi: 'अधिसूचनाओं के माध्यम से सिंक्रोनाइज़ेशन बनाए रखें',
      fr: 'Maintenir la synchronisation par les notifications',
      de: 'Synchronisation durch Benachrichtigungen aufrechterhalten',
      ja: '通知を通じて同期を維持',
      ko: '알림을 통해 동기화 유지',
      es: 'Mantener sincronización a través de notificaciones',
      ru: 'Поддерживать синхронизацию через уведомления'
    },
    details: {
      zh: [
        '监听资源变化通知',
        '动态处理工具列表更新',
        '优雅地处理连接中断',
        '在需要时重新建立连接'
      ],
      en: [
        'Listen for resource change notifications',
        'Handle tool list updates dynamically',
        'Process connection interruptions gracefully',
        'Re-establish connections when needed'
      ],
      hi: [
        'संसाधन परिवर्तन अधिसूचनाओं को सुनें',
        'टूल सूची अपडेट को गतिशील रूप से संभालें',
        'कनेक्शन बाधाओं को सुंदर तरीके से प्रोसेस करें',
        'आवश्यकता पड़ने पर कनेक्शन पुनः स्थापित करें'
      ],
      fr: [
        'Écouter les notifications de changement de ressources',
        'Gérer les mises à jour de liste d\'outils dynamiquement',
        'Traiter les interruptions de connexion avec élégance',
        'Rétablir les connexions quand nécessaire'
      ],
      de: [
        'Auf Ressourcenänderungs-Benachrichtigungen hören',
        'Tool-Listen-Updates dynamisch handhaben',
        'Verbindungsunterbrechungen elegant verarbeiten',
        'Verbindungen bei Bedarf wiederherstellen'
      ],
      ja: [
        'リソース変更通知をリッスン',
        'ツールリスト更新を動的に処理',
        '接続中断を優雅に処理',
        '必要時に接続を再確立'
      ],
      ko: [
        '리소스 변경 알림 수신',
        '도구 목록 업데이트를 동적으로 처리',
        '연결 중단을 우아하게 처리',
        '필요시 연결 재설정'
      ],
      es: [
        'Escuchar notificaciones de cambio de recursos',
        'Manejar actualizaciones de lista de herramientas dinámicamente',
        'Procesar interrupciones de conexión con elegancia',
        'Restablecer conexiones cuando sea necesario'
      ],
      ru: [
        'Слушать уведомления об изменении ресурсов',
        'Динамически обрабатывать обновления списка инструментов',
        'Изящно обрабатывать прерывания соединения',
        'Переустанавливать соединения при необходимости'
      ]
    }
  }
]

const securityFeatures = [
  {
    feature: {
      zh: '身份验证',
      en: 'Authentication',
      hi: 'प्रमाणीकरण',
      fr: 'Authentification',
      de: 'Authentifizierung',
      ja: '認証',
      ko: '인증',
      es: 'Autenticación',
      ru: 'Аутентификация'
    },
    description: {
      zh: '支持多种身份验证机制',
      en: 'Multiple authentication mechanisms supported',
      hi: 'कई प्रमाणीकरण तंत्र समर्थित',
      fr: 'Plusieurs mécanismes d\'authentification pris en charge',
      de: 'Mehrere Authentifizierungsmechanismen unterstützt',
      ja: '複数の認証メカニズムをサポート',
      ko: '여러 인증 메커니즘 지원',
      es: 'Múltiples mecanismos de autenticación soportados',
      ru: 'Поддерживается несколько механизмов аутентификации'
    },
    methods: {
      zh: [
        'API 密钥身份验证',
        'OAuth 2.0 流程',
        'Bearer token',
        '自定义身份验证头'
      ],
      en: [
        'API Key authentication',
        'OAuth 2.0 flows',
        'Bearer tokens',
        'Custom authentication headers'
      ],
      hi: [
        'API कुंजी प्रमाणीकरण',
        'OAuth 2.0 फ्लो',
        'Bearer टोकन',
        'कस्टम प्रमाणीकरण हेडर'
      ],
      fr: [
        'Authentification par clé API',
        'Flux OAuth 2.0',
        'Jetons Bearer',
        'En-têtes d\'authentification personnalisés'
      ],
      de: [
        'API-Schlüssel-Authentifizierung',
        'OAuth 2.0-Flows',
        'Bearer-Token',
        'Benutzerdefinierte Authentifizierungs-Header'
      ],
      ja: [
        'APIキー認証',
        'OAuth 2.0フロー',
        'Bearerトークン',
        'カスタム認証ヘッダー'
      ],
      ko: [
        'API 키 인증',
        'OAuth 2.0 플로우',
        'Bearer 토큰',
        '사용자 정의 인증 헤더'
      ],
      es: [
        'Autenticación con clave API',
        'Flujos OAuth 2.0',
        'Tokens Bearer',
        'Cabeceras de autenticación personalizadas'
      ],
      ru: [
        'Аутентификация по API-ключу',
        'OAuth 2.0 потоки',
        'Bearer токены',
        'Пользовательские заголовки аутентификации'
      ]
    }
  },
  {
    feature: {
      zh: '授权',
      en: 'Authorization',
      hi: 'प्राधिकरण',
      fr: 'Autorisation',
      de: 'Autorisierung',
      ja: '認可',
      ko: '권한 부여',
      es: 'Autorización',
      ru: 'Авторизация'
    },
    description: {
      zh: '细粒度的权限管理',
      en: 'Fine-grained permission management',
      hi: 'बारीक अनुमति प्रबंधन',
      fr: 'Gestion des permissions à grain fin',
      de: 'Feinkörnige Berechtigungsverwaltung',
      ja: 'きめ細かい権限管理',
      ko: '세밀한 권한 관리',
      es: 'Gestión de permisos de grano fino',
      ru: 'Детальное управление разрешениями'
    },
    methods: {
      zh: [
        '资源级权限',
        '操作类型限制',
        '基于时间的访问控制',
        '速率限制和配额'
      ],
      en: [
        'Resource-level permissions',
        'Operation type restrictions',
        'Time-based access control',
        'Rate limiting and quotas'
      ],
      hi: [
        'संसाधन-स्तरीय अनुमतियां',
        'ऑपरेशन प्रकार प्रतिबंध',
        'समय-आधारित पहुंच नियंत्रण',
        'दर सीमा और कोटा'
      ],
      fr: [
        'Permissions au niveau des ressources',
        'Restrictions de type d\'opération',
        'Contrôle d\'accès basé sur le temps',
        'Limitation de débit et quotas'
      ],
      de: [
        'Ressourcen-Ebene Berechtigungen',
        'Operationstyp-Beschränkungen',
        'Zeitbasierte Zugriffskontrolle',
        'Ratenbegrenzung und Kontingente'
      ],
      ja: [
        'リソースレベルの権限',
        '操作タイプの制限',
        '時間ベースのアクセス制御',
        'レート制限とクォータ'
      ],
      ko: [
        '리소스 수준 권한',
        '작업 유형 제한',
        '시간 기반 액세스 제어',
        '속도 제한 및 할당량'
      ],
      es: [
        'Permisos a nivel de recursos',
        'Restricciones de tipo de operación',
        'Control de acceso basado en tiempo',
        'Limitación de velocidad y cuotas'
      ],
      ru: [
        'Разрешения на уровне ресурсов',
        'Ограничения типа операций',
        'Временной контроль доступа',
        'Ограничение скорости и квоты'
      ]
    }
  },
  {
    feature: {
      zh: '数据保护',
      en: 'Data Protection',
      hi: 'डेटा सुरक्षा',
      fr: 'Protection des Données',
      de: 'Datenschutz',
      ja: 'データ保護',
      ko: '데이터 보호',
      es: 'Protección de Datos',
      ru: 'Защита данных'
    },
    description: {
      zh: '端到端数据安全',
      en: 'End-to-end data security',
      hi: 'एंड-टू-एंड डेटा सुरक्षा',
      fr: 'Sécurité des données de bout en bout',
      de: 'Ende-zu-Ende-Datensicherheit',
      ja: 'エンドツーエンドのデータセキュリティ',
      ko: '엔드투엔드 데이터 보안',
      es: 'Seguridad de datos de extremo a extremo',
      ru: 'Сквозная безопасность данных'
    },
    methods: {
      zh: [
        'TLS/SSL 传输加密',
        '消息内容加密',
        '敏感数据掩码',
        '安全密钥管理'
      ],
      en: [
        'TLS/SSL transport encryption',
        'Message content encryption',
        'Sensitive data masking',
        'Secure key management'
      ],
      hi: [
        'TLS/SSL ट्रांसपोर्ट एन्क्रिप्शन',
        'संदेश सामग्री एन्क्रिप्शन',
        'संवेदनशील डेटा मास्किंग',
        'सुरक्षित कुंजी प्रबंधन'
      ],
      fr: [
        'Chiffrement de transport TLS/SSL',
        'Chiffrement du contenu des messages',
        'Masquage des données sensibles',
        'Gestion sécurisée des clés'
      ],
      de: [
        'TLS/SSL-Transport-Verschlüsselung',
        'Nachrichteninhalt-Verschlüsselung',
        'Maskierung sensibler Daten',
        'Sichere Schlüsselverwaltung'
      ],
      ja: [
        'TLS/SSL転送暗号化',
        'メッセージコンテンツ暗号化',
        '機密データマスキング',
        'セキュアキー管理'
      ],
      ko: [
        'TLS/SSL 전송 암호화',
        '메시지 콘텐츠 암호화',
        '민감한 데이터 마스킹',
        '보안 키 관리'
      ],
      es: [
        'Cifrado de transporte TLS/SSL',
        'Cifrado de contenido de mensajes',
        'Enmascaramiento de datos sensibles',
        'Gestión segura de claves'
      ],
      ru: [
        'TLS/SSL шифрование транспорта',
        'Шифрование содержимого сообщений',
        'Маскирование чувствительных данных',
        'Безопасное управление ключами'
      ]
    }
  },
  {
    feature: {
      zh: '审计和监控',
      en: 'Audit & Monitoring',
      hi: 'ऑडिट और निगरानी',
      fr: 'Audit et Surveillance',
      de: 'Audit & Überwachung',
      ja: '監査とモニタリング',
      ko: '감사 및 모니터링',
      es: 'Auditoría y Monitoreo',
      ru: 'Аудит и мониторинг'
    },
    description: {
      zh: '全面的操作跟踪',
      en: 'Comprehensive operation tracking',
      hi: 'व्यापक ऑपरेशन ट्रैकिंग',
      fr: 'Suivi complet des opérations',
      de: 'Umfassende Operationsverfolgung',
      ja: '包括的な操作追跡',
      ko: '포괄적인 작업 추적',
      es: 'Seguimiento integral de operaciones',
      ru: 'Комплексное отслеживание операций'
    },
    methods: {
      zh: [
        '请求/响应日志记录',
        '权限检查记录',
        '错误和异常跟踪',
        '性能指标收集'
      ],
      en: [
        'Request/response logging',
        'Permission check records',
        'Error and exception tracking',
        'Performance metrics collection'
      ],
      hi: [
        'अनुरोध/प्रतिक्रिया लॉगिंग',
        'अनुमति जांच रिकॉर्ड',
        'त्रुटि और अपवाद ट्रैकिंग',
        'प्रदर्शन मेट्रिक्स संग्रह'
      ],
      fr: [
        'Journalisation des demandes/réponses',
        'Enregistrements de vérification des permissions',
        'Suivi des erreurs et exceptions',
        'Collection de métriques de performance'
      ],
      de: [
        'Anfrage/Antwort-Protokollierung',
        'Berechtigungsprüfungs-Aufzeichnungen',
        'Fehler- und Ausnahme-Verfolgung',
        'Leistungsmetriken-Sammlung'
      ],
      ja: [
        'リクエスト/レスポンスログ',
        '権限チェック記録',
        'エラーと例外追跡',
        'パフォーマンスメトリクス収集'
      ],
      ko: [
        '요청/응답 로깅',
        '권한 확인 기록',
        '오류 및 예외 추적',
        '성능 메트릭 수집'
      ],
      es: [
        'Registro de solicitudes/respuestas',
        'Registros de verificación de permisos',
        'Seguimiento de errores y excepciones',
        'Recolección de métricas de rendimiento'
      ],
      ru: [
        'Логирование запросов/ответов',
        'Записи проверки разрешений',
        'Отслеживание ошибок и исключений',
        'Сбор метрик производительности'
      ]
    }
  }
]

export default async function MCPIntroductionPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  const overview = mcpOverview[locale as keyof typeof mcpOverview] || mcpOverview.en

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {locale === 'zh' ? 'Model Context Protocol 介绍' :
               locale === 'hi' ? 'Model Context Protocol परिचय' :
               locale === 'fr' ? 'Introduction au Model Context Protocol' :
               locale === 'de' ? 'Model Context Protocol Einführung' :
               locale === 'ja' ? 'Model Context Protocol 紹介' :
               locale === 'ko' ? 'Model Context Protocol 소개' :
               locale === 'es' ? 'Introducción al Model Context Protocol' :
               locale === 'ru' ? 'Введение в Model Context Protocol' :
               'Model Context Protocol Introduction'}
            </h1>
            <p className="mt-4 text-lg text-indigo-100">
              {locale === 'zh' ? '深入了解 Model Context Protocol (MCP)' :
               locale === 'hi' ? 'Model Context Protocol (MCP) की गहरी समझ' :
               locale === 'fr' ? 'Plongée approfondie dans le Model Context Protocol (MCP)' :
               locale === 'de' ? 'Tiefgehende Einblicke in das Model Context Protocol (MCP)' :
               locale === 'ja' ? 'Model Context Protocol (MCP) の詳細' :
               locale === 'ko' ? 'Model Context Protocol (MCP) 심화 학습' :
               locale === 'es' ? 'Inmersión profunda en el Model Context Protocol (MCP)' :
               locale === 'ru' ? 'Глубокое погружение в Model Context Protocol (MCP)' :
               'Deep dive into the Model Context Protocol (MCP)'}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-indigo-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? '协议规范' :
                 locale === 'hi' ? 'प्रोटोकॉल विनिर्देश' :
                 locale === 'fr' ? 'Spécification du Protocole' :
                 locale === 'de' ? 'Protokoll-Spezifikation' :
                 locale === 'ja' ? 'プロトコル仕様' :
                 locale === 'ko' ? '프로토콜 사양' :
                 locale === 'es' ? 'Especificación del Protocolo' :
                 locale === 'ru' ? 'Спецификация протокола' :
                 'Protocol Specification'}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? '40 分钟阅读' :
                 locale === 'hi' ? '40 मिनट पढ़ना' :
                 locale === 'fr' ? '40 min de lecture' :
                 locale === 'de' ? '40 Min. Lesezeit' :
                 locale === 'ja' ? '40分で読める' :
                 locale === 'ko' ? '40분 읽기' :
                 locale === 'es' ? '40 min de lectura' :
                 locale === 'ru' ? '40 мин чтения' :
                 '40 min read'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Overview */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? '协议概述' :
               locale === 'hi' ? 'प्रोटोकॉल अवलोकन' :
               locale === 'fr' ? 'Aperçu du Protocole' :
               locale === 'de' ? 'Protokoll-Übersicht' :
               locale === 'ja' ? 'プロトコル概要' :
               locale === 'ko' ? '프로토콜 개요' :
               locale === 'es' ? 'Resumen del Protocolo' :
               locale === 'ru' ? 'Обзор протокола' :
               'Protocol Overview'}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {overview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">
                {locale === 'zh' ? '核心优势' :
                 locale === 'hi' ? 'मुख्य लाभ' :
                 locale === 'fr' ? 'Avantages Clés' :
                 locale === 'de' ? 'Hauptvorteile' :
                 locale === 'ja' ? '主要な利点' :
                 locale === 'ko' ? '주요 이점' :
                 locale === 'es' ? 'Beneficios Clave' :
                 locale === 'ru' ? 'Ключевые преимущества' :
                 'Key Benefits'}
              </h3>
              <ul className="space-y-3">
                {overview.benefits.map((benefit, index) => (
                  <li key={index} className="text-indigo-800 flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">
                {locale === 'zh' ? '应用场景' :
                 locale === 'hi' ? 'उपयोग के मामले' :
                 locale === 'fr' ? 'Cas d\'Usage' :
                 locale === 'de' ? 'Anwendungsfälle' :
                 locale === 'ja' ? '使用例' :
                 locale === 'ko' ? '사용 사례' :
                 locale === 'es' ? 'Casos de Uso' :
                 locale === 'ru' ? 'Случаи использования' :
                 'Use Cases'}
              </h3>
              <ul className="space-y-3">
                {overview.useCases.map((useCase, index) => (
                  <li key={index} className="text-green-800 flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MCP Architecture */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? '架构设计' :
               locale === 'hi' ? 'आर्किटेक्चर डिज़ाइन' :
               locale === 'fr' ? 'Conception d\'Architecture' :
               locale === 'de' ? 'Architektur-Design' :
               locale === 'ja' ? 'アーキテクチャ設計' :
               locale === 'ko' ? '아키텍처 설계' :
               locale === 'es' ? 'Diseño de Arquitectura' :
               locale === 'ru' ? 'Дизайн архитектуры' :
               'Architecture Design'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? 'MCP 协议分层架构和组件概述' :
               locale === 'hi' ? 'MCP प्रोटोकॉल स्तरित आर्किटेक्चर और घटक अवलोकन' :
               locale === 'fr' ? 'Architecture en couches du protocole MCP et aperçu des composants' :
               locale === 'de' ? 'MCP-Protokoll-Schichtarchitektur und Komponentenübersicht' :
               locale === 'ja' ? 'MCPプロトコルの階層アーキテクチャとコンポーネント概要' :
               locale === 'ko' ? 'MCP 프로토콜 계층 아키텍처 및 구성 요소 개요' :
               locale === 'es' ? 'Arquitectura en capas del protocolo MCP y resumen de componentes' :
               locale === 'ru' ? 'Слоистая архитектура протокола MCP и обзор компонентов' :
               'MCP protocol layered architecture and component overview'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mcpArchitecture.components.map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-white">
                    {index === 0 && <CpuChipIcon className="h-6 w-6" />}
                    {index === 1 && <ServerIcon className="h-6 w-6" />}
                    {index === 2 && <CloudIcon className="h-6 w-6" />}
                    {index === 3 && <GlobeAltIcon className="h-6 w-6" />}
                    {index === 4 && <GlobeAltIcon className="h-6 w-6" />}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {component.name[locale as keyof typeof component.name] || component.name.en}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {component.role[locale as keyof typeof component.role] || component.role.en}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {component.description[locale as keyof typeof component.description] || component.description.en}
                </p>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {locale === 'zh' ? '主要职责：' :
                     locale === 'hi' ? 'मुख्य जिम्मेदारियां:' :
                     locale === 'fr' ? 'Responsabilités Clés :' :
                     locale === 'de' ? 'Hauptverantwortlichkeiten:' :
                     locale === 'ja' ? '主な責任:' :
                     locale === 'ko' ? '주요 책임:' :
                     locale === 'es' ? 'Responsabilidades Clave:' :
                     locale === 'ru' ? 'Основные обязанности:' :
                     'Key Responsibilities:'}
                  </h4>
                  <ul className="space-y-1">
                    {(component.responsibilities[locale as keyof typeof component.responsibilities] || component.responsibilities.en).map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MCP Primitives */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? 'MCP 原语' :
               locale === 'hi' ? 'MCP प्रिमिटिव्स' :
               locale === 'fr' ? 'Primitives MCP' :
               locale === 'de' ? 'MCP-Primitive' :
               locale === 'ja' ? 'MCPプリミティブ' :
               locale === 'ko' ? 'MCP 프리미티브' :
               locale === 'es' ? 'Primitivas MCP' :
               locale === 'ru' ? 'Примитивы MCP' :
               'MCP Primitives'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '定义客户端和服务器可以相互提供的核心原语' :
               locale === 'hi' ? 'मुख्य प्रिमिटिव्स जो परिभाषित करते हैं कि क्लाइंट और सर्वर एक दूसरे को क्या प्रदान कर सकते हैं' :
               locale === 'fr' ? 'Primitives de base qui définissent ce que les clients et serveurs peuvent s\'offrir mutuellement' :
               locale === 'de' ? 'Kern-Primitive, die definieren, was Clients und Server einander anbieten können' :
               locale === 'ja' ? 'クライアントとサーバーが互いに提供できるものを定義するコアプリミティブ' :
               locale === 'ko' ? '클라이언트와 서버가 서로에게 제공할 수 있는 것을 정의하는 핵심 프리미티브' :
               locale === 'es' ? 'Primitivas centrales que definen lo que clientes y servidores pueden ofrecerse mutuamente' :
               locale === 'ru' ? 'Основные примитивы, которые определяют, что клиенты и серверы могут предложить друг другу' :
               'Core primitives that define what clients and servers can offer each other'}
            </p>
          </div>

          <div className="space-y-8">
            {mcpPrimitives.map((primitive, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${primitive.color} text-white`}>
                    <primitive.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {primitive.type[locale as keyof typeof primitive.type] || primitive.type.en}
                    </h3>
                    <p className="text-gray-600">
                      {primitive.description[locale as keyof typeof primitive.description] || primitive.description.en}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      {locale === 'zh' ? '示例：' :
                       locale === 'hi' ? 'उदाहरण:' :
                       locale === 'fr' ? 'Exemples :' :
                       locale === 'de' ? 'Beispiele:' :
                       locale === 'ja' ? '例:' :
                       locale === 'ko' ? '예시:' :
                       locale === 'es' ? 'Ejemplos:' :
                       locale === 'ru' ? 'Примеры:' :
                       'Examples:'}
                    </h4>
                    <ul className="space-y-2">
                      {(primitive.examples[locale as keyof typeof primitive.examples] || primitive.examples.en).map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      {locale === 'zh' ? '可用方法：' :
                       locale === 'hi' ? 'उपलब्ध विधियां:' :
                       locale === 'fr' ? 'Méthodes Disponibles :' :
                       locale === 'de' ? 'Verfügbare Methoden:' :
                       locale === 'ja' ? '利用可能なメソッド:' :
                       locale === 'ko' ? '사용 가능한 메서드:' :
                       locale === 'es' ? 'Métodos Disponibles:' :
                       locale === 'ru' ? 'Доступные методы:' :
                       'Available Methods:'}
                    </h4>
                    <div className="space-y-2">
                      {(primitive.methods[locale as keyof typeof primitive.methods] || primitive.methods.en).map((method, methodIndex) => (
                        <code key={methodIndex} className="block bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm">
                          {method}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transport Layer */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? '传输层' :
               locale === 'hi' ? 'ट्रांसपोर्ट लेयर' :
               locale === 'fr' ? 'Couche de Transport' :
               locale === 'de' ? 'Transport-Schicht' :
               locale === 'ja' ? 'トランスポート層' :
               locale === 'ko' ? '전송 계층' :
               locale === 'es' ? 'Capa de Transporte' :
               locale === 'ru' ? 'Транспортный слой' :
               'Transport Layer'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '实现客户端和服务器之间数据交换的通信机制' :
               locale === 'hi' ? 'संचार तंत्र जो क्लाइंट और सर्वर के बीच डेटा एक्सचेंज को सक्षम बनाते हैं' :
               locale === 'fr' ? 'Mécanismes de communication qui permettent l\'échange de données entre clients et serveurs' :
               locale === 'de' ? 'Kommunikationsmechanismen, die den Datenaustausch zwischen Clients und Servern ermöglichen' :
               locale === 'ja' ? 'クライアントとサーバー間のデータ交換を可能にする通信メカニズム' :
               locale === 'ko' ? '클라이언트와 서버 간의 데이터 교환을 가능하게 하는 통신 메커니즘' :
               locale === 'es' ? 'Mecanismos de comunicación que permiten el intercambio de datos entre clientes y servidores' :
               locale === 'ru' ? 'Механизмы связи, которые обеспечивают обмен данными между клиентами и серверами' :
               'Communication mechanisms that enable data exchange between clients and servers'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportTypes.map((transport, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {transport.type[locale as keyof typeof transport.type] || transport.type.en}
                </h3>
                <p className="text-gray-600 mb-4">
                  {transport.description[locale as keyof typeof transport.description] || transport.description.en}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {locale === 'zh' ? '使用场景：' :
                     locale === 'hi' ? 'उपयोग के मामले:' :
                     locale === 'fr' ? 'Cas d\'Usage :' :
                     locale === 'de' ? 'Anwendungsfälle:' :
                     locale === 'ja' ? '使用例:' :
                     locale === 'ko' ? '사용 사례:' :
                     locale === 'es' ? 'Casos de Uso:' :
                     locale === 'ru' ? 'Случаи использования:' :
                     'Use Cases:'}
                  </h4>
                  <ul className="space-y-1">
                    {(transport.useCases[locale as keyof typeof transport.useCases] || transport.useCases.en).map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="text-sm text-gray-600 flex items-start">
                        <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {locale === 'zh' ? '示例：' :
                     locale === 'hi' ? 'उदाहरण:' :
                     locale === 'fr' ? 'Exemple :' :
                     locale === 'de' ? 'Beispiel:' :
                     locale === 'ja' ? '例:' :
                     locale === 'ko' ? '예시:' :
                     locale === 'es' ? 'Ejemplo:' :
                     locale === 'ru' ? 'Пример:' :
                     'Example:'}
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <code className="text-green-400 text-sm font-mono">
                      {transport.example.command || transport.example.url}
                    </code>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {transport.example.description[locale as keyof typeof transport.example.description] || transport.example.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Types */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? '消息类型' :
               locale === 'hi' ? 'संदेश प्रकार' :
               locale === 'fr' ? 'Types de Messages' :
               locale === 'de' ? 'Nachrichtentypen' :
               locale === 'ja' ? 'メッセージタイプ' :
               locale === 'ko' ? '메시지 유형' :
               locale === 'es' ? 'Tipos de Mensajes' :
               locale === 'ru' ? 'Типы сообщений' :
               'Message Types'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? 'MCP 协议支持的基于 JSON-RPC 2.0 的消息类型' :
               locale === 'hi' ? 'MCP प्रोटोकॉल द्वारा समर्थित JSON-RPC 2.0 आधारित संदेश प्रकार' :
               locale === 'fr' ? 'Types de messages basés sur JSON-RPC 2.0 pris en charge par le protocole MCP' :
               locale === 'de' ? 'JSON-RPC 2.0-basierte Nachrichtentypen, die vom MCP-Protokoll unterstützt werden' :
               locale === 'ja' ? 'MCPプロトコルでサポートされるJSON-RPC 2.0ベースのメッセージタイプ' :
               locale === 'ko' ? 'MCP 프로토콜에서 지원하는 JSON-RPC 2.0 기반 메시지 유형' :
               locale === 'es' ? 'Tipos de mensajes basados en JSON-RPC 2.0 soportados por el protocolo MCP' :
               locale === 'ru' ? 'Типы сообщений на основе JSON-RPC 2.0, поддерживаемые протоколом MCP' :
               'JSON-RPC 2.0 based message types supported by the MCP protocol'}
            </p>
          </div>

          <div className="space-y-8">
            {messageTypes.map((message, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{message.type}</h3>
                    <p className="text-gray-600 text-sm">
                      {message.description[locale as keyof typeof message.description] || message.description.en}
                    </p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                    {message.direction[locale as keyof typeof message.direction] || message.direction.en}
                  </span>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {locale === 'zh' ? '消息示例：' :
                     locale === 'hi' ? 'संदेश उदाहरण:' :
                     locale === 'fr' ? 'Exemple de Message :' :
                     locale === 'de' ? 'Nachrichtenbeispiel:' :
                     locale === 'ja' ? 'メッセージ例:' :
                     locale === 'ko' ? '메시지 예시:' :
                     locale === 'es' ? 'Ejemplo de Mensaje:' :
                     locale === 'ru' ? 'Пример сообщения:' :
                     'Message Example:'}
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono whitespace-pre">
                      {JSON.stringify(message.example, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Definition Example */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? '工具定义示例' :
               locale === 'hi' ? 'टूल परिभाषा उदाहरण' :
               locale === 'fr' ? 'Exemple de Définition d\'Outil' :
               locale === 'de' ? 'Tool-Definitionsbeispiel' :
               locale === 'ja' ? 'ツール定義例' :
               locale === 'ko' ? '도구 정의 예시' :
               locale === 'es' ? 'Ejemplo de Definición de Herramienta' :
               locale === 'ru' ? 'Пример определения инструмента' :
               'Tool Definition Example'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? 'MCP 协议中工具定义方式的示例' :
               locale === 'hi' ? 'MCP प्रोटोकॉल में टूल्स को कैसे परिभाषित किया जाता है का उदाहरण' :
               locale === 'fr' ? 'Exemple de la façon dont les outils sont définis dans le protocole MCP' :
               locale === 'de' ? 'Beispiel dafür, wie Tools im MCP-Protokoll definiert werden' :
               locale === 'ja' ? 'MCPプロトコルでツールがどのように定義されるかの例' :
               locale === 'ko' ? 'MCP 프로토콜에서 도구가 정의되는 방법의 예' :
               locale === 'es' ? 'Ejemplo de cómo se definen las herramientas en el protocolo MCP' :
               locale === 'ru' ? 'Пример того, как инструменты определяются в протоколе MCP' :
               'Example of how tools are defined in the MCP protocol'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {locale === 'zh' ? '天气工具定义' :
               locale === 'hi' ? 'मौसम टूल परिभाषा' :
               locale === 'fr' ? 'Définition d\'Outil Météo' :
               locale === 'de' ? 'Wetter-Tool-Definition' :
               locale === 'ja' ? '天気ツール定義' :
               locale === 'ko' ? '날씨 도구 정의' :
               locale === 'es' ? 'Definición de Herramienta del Clima' :
               locale === 'ru' ? 'Определение инструмента погоды' :
               'Weather Tool Definition'}
            </h3>
            <p className="text-gray-600 mb-6">
              {locale === 'zh'
                ? '此示例展示了如何定义一个天气工具，包含适当的输入模式验证和文档。'
                : locale === 'hi'
                ? 'यह उदाहरण दिखाता है कि उचित इनपुट स्कीमा सत्यापन और दस्तावेज़ीकरण के साथ मौसम टूल कैसे परिभाषित किया जाता है।'
                : locale === 'fr'
                ? 'Cet exemple montre comment un outil météo est défini avec une validation de schéma d\'entrée et une documentation appropriées.'
                : locale === 'de'
                ? 'Dieses Beispiel zeigt, wie ein Wetter-Tool mit ordnungsgemäßer Eingabeschema-Validierung und Dokumentation definiert wird.'
                : locale === 'ja'
                ? 'この例は、適切な入力スキーマ検証とドキュメントを含む天気ツールの定義方法を示しています。'
                : locale === 'ko'
                ? '이 예시는 적절한 입력 스키마 검증과 문서화를 포함한 날씨 도구가 어떻게 정의되는지 보여줍니다.'
                : locale === 'es'
                ? 'Este ejemplo muestra cómo se define una herramienta del clima con validación de esquema de entrada y documentación adecuadas.'
                : locale === 'ru'
                ? 'Этот пример показывает, как определяется инструмент погоды с правильной валидацией входной схемы и документацией.'
                : 'This example shows how a weather tool is defined with proper input schema validation and documentation.'
              }
            </p>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">
                {locale === 'zh' ? toolDefinition : toolDefinition.replace(/获取当前天气/g, 'Get Current Weather').replace(/获取指定位置的当前天气信息/g, 'Get current weather information for a specified location').replace(/要获取天气的位置/g, 'The location to get weather for').replace(/温度单位/g, 'Temperature units').replace(/是否包含预报数据/g, 'Whether to include forecast data')}
              </pre>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  {locale === 'zh' ? '关键组件：' :
                   locale === 'hi' ? 'मुख्य घटक:' :
                   locale === 'fr' ? 'Composants Clés :' :
                   locale === 'de' ? 'Schlüsselkomponenten:' :
                   locale === 'ja' ? '主要コンポーネント:' :
                   locale === 'ko' ? '주요 구성 요소:' :
                   locale === 'es' ? 'Componentes Clave:' :
                   locale === 'ru' ? 'Ключевые компоненты:' :
                   'Key Components:'}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>name:</strong> {locale === 'zh' ? '工具的唯一标识符' :
                       locale === 'hi' ? 'टूल के लिए अद्वितीय पहचानकर्ता' :
                       locale === 'fr' ? 'Identifiant unique pour l\'outil' :
                       locale === 'de' ? 'Eindeutige Kennung für das Tool' :
                       locale === 'ja' ? 'ツールの一意識別子' :
                       locale === 'ko' ? '도구의 고유 식별자' :
                       locale === 'es' ? 'Identificador único para la herramienta' :
                       locale === 'ru' ? 'Уникальный идентификатор инструмента' :
                       'Unique identifier for the tool'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>title:</strong> {locale === 'zh' ? '人类可读的显示名称' :
                       locale === 'hi' ? 'मानव-पठनीय प्रदर्शन नाम' :
                       locale === 'fr' ? 'Nom d\'affichage lisible par l\'homme' :
                       locale === 'de' ? 'Menschenlesbarer Anzeigename' :
                       locale === 'ja' ? '人間が読める表示名' :
                       locale === 'ko' ? '사람이 읽을 수 있는 표시 이름' :
                       locale === 'es' ? 'Nombre de visualización legible por humanos' :
                       locale === 'ru' ? 'Человекочитаемое отображаемое имя' :
                       'Human-readable display name'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>description:</strong> {locale === 'zh' ? '功能的详细说明' :
                       locale === 'hi' ? 'कार्यक्षमता की विस्तृत व्याख्या' :
                       locale === 'fr' ? 'Explication détaillée de la fonctionnalité' :
                       locale === 'de' ? 'Detaillierte Erklärung der Funktionalität' :
                       locale === 'ja' ? '機能の詳細な説明' :
                       locale === 'ko' ? '기능에 대한 자세한 설명' :
                       locale === 'es' ? 'Explicación detallada de la funcionalidad' :
                       locale === 'ru' ? 'Подробное объяснение функциональности' :
                       'Detailed explanation of functionality'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>inputSchema:</strong> {locale === 'zh' ? '用于输入验证的 JSON Schema' :
                       locale === 'hi' ? 'इनपुट सत्यापन के लिए JSON Schema' :
                       locale === 'fr' ? 'Schéma JSON pour la validation d\'entrée' :
                       locale === 'de' ? 'JSON Schema für Eingabevalidierung' :
                       locale === 'ja' ? '入力検証用のJSON Schema' :
                       locale === 'ko' ? '입력 검증을 위한 JSON Schema' :
                       locale === 'es' ? 'Esquema JSON para validación de entrada' :
                       locale === 'ru' ? 'JSON Schema для валидации ввода' :
                       'JSON Schema for input validation'}
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  {locale === 'zh' ? '最佳实践：' :
                   locale === 'hi' ? 'सर्वोत्तम प्रथाएं:' :
                   locale === 'fr' ? 'Meilleures Pratiques:' :
                   locale === 'de' ? 'Bewährte Praktiken:' :
                   locale === 'ja' ? 'ベストプラクティス:' :
                   locale === 'ko' ? '모범 사례:' :
                   locale === 'es' ? 'Mejores Prácticas:' :
                   locale === 'ru' ? 'Лучшие практики:' :
                   'Best Practices:'}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    {locale === 'zh' ? '使用命名空间工具名称（例如，com.example.weather/current）' :
                     locale === 'hi' ? 'नेमस्पेस्ड टूल नाम का उपयोग करें (जैसे, com.example.weather/current)' :
                     locale === 'fr' ? 'Utiliser des noms d\'outils avec espace de noms (ex: com.example.weather/current)' :
                     locale === 'de' ? 'Verwenden Sie Namensraum-Tool-Namen (z.B. com.example.weather/current)' :
                     locale === 'ja' ? '名前空間付きツール名を使用（例：com.example.weather/current）' :
                     locale === 'ko' ? '네임스페이스가 있는 도구 이름 사용 (예: com.example.weather/current)' :
                     locale === 'es' ? 'Usar nombres de herramientas con espacio de nombres (ej: com.example.weather/current)' :
                     locale === 'ru' ? 'Используйте имена инструментов с пространством имен (например, com.example.weather/current)' :
                     'Use namespaced tool names (e.g., com.example.weather/current)'}
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    {locale === 'zh' ? '提供清晰、描述性的文档' :
                     locale === 'hi' ? 'स्पष्ट, वर्णनात्मक दस्तावेज़ीकरण प्रदान करें' :
                     locale === 'fr' ? 'Fournir une documentation claire et descriptive' :
                     locale === 'de' ? 'Klare, beschreibende Dokumentation bereitstellen' :
                     locale === 'ja' ? '明確で説明的なドキュメントを提供' :
                     locale === 'ko' ? '명확하고 설명적인 문서 제공' :
                     locale === 'es' ? 'Proporcionar documentación clara y descriptiva' :
                     locale === 'ru' ? 'Предоставить четкую, описательную документацию' :
                     'Provide clear, descriptive documentation'}
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    {locale === 'zh' ? '定义全面的输入模式' :
                     locale === 'hi' ? 'व्यापक इनपुट स्कीमा परिभाषित करें' :
                     locale === 'fr' ? 'Définir des schémas d\'entrée complets' :
                     locale === 'de' ? 'Umfassende Eingabeschemas definieren' :
                     locale === 'ja' ? '包括的な入力スキーマを定義' :
                     locale === 'ko' ? '포괄적인 입력 스키마 정의' :
                     locale === 'es' ? 'Definir esquemas de entrada integrales' :
                     locale === 'ru' ? 'Определить комплексные схемы ввода' :
                     'Define comprehensive input schemas'}
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    {locale === 'zh' ? '在适当的地方包含默认值' :
                     locale === 'hi' ? 'उपयुक्त स्थानों पर डिफ़ॉल्ट मान शामिल करें' :
                     locale === 'fr' ? 'Inclure des valeurs par défaut le cas échéant' :
                     locale === 'de' ? 'Standardwerte wo angemessen einschließen' :
                     locale === 'ja' ? '適切な場所にデフォルト値を含める' :
                     locale === 'ko' ? '적절한 곳에 기본값 포함' :
                     locale === 'es' ? 'Incluir valores por defecto donde sea apropiado' :
                     locale === 'ru' ? 'Включать значения по умолчанию где уместно' :
                     'Include default values where appropriate'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Flow */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? '通信流程' :
               locale === 'hi' ? 'संचार प्रवाह' :
               locale === 'fr' ? 'Flux de Communication' :
               locale === 'de' ? 'Kommunikationsfluss' :
               locale === 'ja' ? '通信フロー' :
               locale === 'ko' ? '통신 흐름' :
               locale === 'es' ? 'Flujo de Comunicación' :
               locale === 'ru' ? 'Поток связи' :
               'Communication Flow'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? 'MCP 客户端和服务器之间的完整通信流程' :
               locale === 'hi' ? 'MCP क्लाइंट और सर्वर के बीच पूर्ण संचार प्रवाह' :
               locale === 'fr' ? 'Flux de communication complet entre les clients et serveurs MCP' :
               locale === 'de' ? 'Vollständiger Kommunikationsfluss zwischen MCP-Clients und -Servern' :
               locale === 'ja' ? 'MCPクライアントとサーバー間の完全な通信フロー' :
               locale === 'ko' ? 'MCP 클라이언트와 서버 간의 완전한 통신 흐름' :
               locale === 'es' ? 'Flujo de comunicación completo entre clientes y servidores MCP' :
               locale === 'ru' ? 'Полный поток связи между MCP-клиентами и серверами' :
               'Complete communication flow between MCP clients and servers'}
            </p>
          </div>

          <div className="space-y-8">
            {communicationFlow.map((phase, index) => (
              <div key={index} className="relative">
                {index < communicationFlow.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-indigo-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white text-sm font-semibold">
                    {phase.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {phase.title[locale as keyof typeof phase.title] || phase.title.en}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {phase.description[locale as keyof typeof phase.description] || phase.description.en}
                    </p>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {locale === 'zh' ? '详细步骤：' :
                         locale === 'hi' ? 'विस्तृत चरण:' :
                         locale === 'fr' ? 'Étapes Détaillées:' :
                         locale === 'de' ? 'Detaillierte Schritte:' :
                         locale === 'ja' ? '詳細手順:' :
                         locale === 'ko' ? '세부 단계:' :
                         locale === 'es' ? 'Pasos Detallados:' :
                         locale === 'ru' ? 'Подробные шаги:' :
                         'Detailed Steps:'}
                      </h4>
                      <ul className="space-y-1">
                        {(phase.details[locale as keyof typeof phase.details] || phase.details.en).map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                            <ArrowRightIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {locale === 'zh' ? '安全特性' :
               locale === 'hi' ? 'सुरक्षा सुविधाएं' :
               locale === 'fr' ? 'Fonctionnalités de Sécurité' :
               locale === 'de' ? 'Sicherheitsfeatures' :
               locale === 'ja' ? 'セキュリティ機能' :
               locale === 'ko' ? '보안 기능' :
               locale === 'es' ? 'Características de Seguridad' :
               locale === 'ru' ? 'Функции безопасности' :
               'Security Features'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? 'MCP 协议中的安全机制和保护措施' :
               locale === 'hi' ? 'MCP प्रोटोकॉल में सुरक्षा तंत्र और सुरक्षा उपाय' :
               locale === 'fr' ? 'Mécanismes de sécurité et mesures de protection dans le protocole MCP' :
               locale === 'de' ? 'Sicherheitsmechanismen und Schutzmaßnahmen im MCP-Protokoll' :
               locale === 'ja' ? 'MCPプロトコルのセキュリティメカニズムと保護対策' :
               locale === 'ko' ? 'MCP 프로토콜의 보안 메커니즘 및 보호 조치' :
               locale === 'es' ? 'Mecanismos de seguridad y medidas de protección en el protocolo MCP' :
               locale === 'ru' ? 'Механизмы безопасности и защитные меры в протоколе MCP' :
               'Security mechanisms and protection measures in the MCP protocol'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((security, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {security.feature[locale as keyof typeof security.feature] || security.feature.en}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {security.description[locale as keyof typeof security.description] || security.description.en}
                </p>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {locale === 'zh' ? '支持方法：' :
                     locale === 'hi' ? 'समर्थित विधियां:' :
                     locale === 'fr' ? 'Méthodes Supportées:' :
                     locale === 'de' ? 'Unterstützte Methoden:' :
                     locale === 'ja' ? 'サポートされる方法:' :
                     locale === 'ko' ? '지원되는 방법:' :
                     locale === 'es' ? 'Métodos Soportados:' :
                     locale === 'ru' ? 'Поддерживаемые методы:' :
                     'Supported Methods:'}
                  </h4>
                  <ul className="space-y-1">
                    {(security.methods[locale as keyof typeof security.methods] || security.methods.en).map((method, methodIndex) => (
                      <li key={methodIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-indigo-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'zh' ? '开始使用' :
               locale === 'hi' ? 'शुरुआत करना' :
               locale === 'fr' ? 'Commencer' :
               locale === 'de' ? 'Erste Schritte' :
               locale === 'ja' ? '始める' :
               locale === 'ko' ? '시작하기' :
               locale === 'es' ? 'Comenzar' :
               locale === 'ru' ? 'Начало работы' :
               'Getting Started'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {locale === 'zh'
                ? '准备开始在 Gemini CLI 中使用 MCP？探索这些资源'
                : locale === 'hi'
                ? 'Gemini CLI के साथ MCP का उपयोग शुरू करने के लिए तैयार हैं? इन संसाधनों का अन्वेषण करें'
                : locale === 'fr'
                ? 'Prêt à commencer à utiliser MCP avec Gemini CLI ? Explorez ces ressources'
                : locale === 'de'
                ? 'Bereit, MCP mit Gemini CLI zu verwenden? Erkunden Sie diese Ressourcen'
                : locale === 'ja'
                ? 'Gemini CLIでMCPの使用を開始する準備はできましたか？これらのリソースを探索してください'
                : locale === 'ko'
                ? 'Gemini CLI와 함께 MCP 사용을 시작할 준비가 되셨나요? 이러한 리소스를 탐색해보세요'
                : locale === 'es'
                ? '¿Listo para empezar a usar MCP con Gemini CLI? Explora estos recursos'
                : locale === 'ru'
                ? 'Готовы начать использовать MCP с Gemini CLI? Изучите эти ресурсы'
                : 'Ready to start using MCP with Gemini CLI? Explore these resources'
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/plugin-api`}
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                {locale === 'zh' ? '插件 API 指南' :
                 locale === 'hi' ? 'प्लगइन API गाइड' :
                 locale === 'fr' ? 'Guide API Plugin' :
                 locale === 'de' ? 'Plugin-API-Leitfaden' :
                 locale === 'ja' ? 'プラグインAPIガイド' :
                 locale === 'ko' ? '플러그인 API 가이드' :
                 locale === 'es' ? 'Guía de API de Plugin' :
                 locale === 'ru' ? 'Руководство по API плагинов' :
                 'Plugin API Guide'}
              </Link>
              <Link
                href={`/${locale}/docs/tools-api`}
                className="rounded-lg border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {locale === 'zh' ? '工具 API 参考' :
                 locale === 'hi' ? 'टूल्स API संदर्भ' :
                 locale === 'fr' ? 'Référence API Outils' :
                 locale === 'de' ? 'Tools-API-Referenz' :
                 locale === 'ja' ? 'ツールAPIリファレンス' :
                 locale === 'ko' ? '도구 API 참조' :
                 locale === 'es' ? 'Referencia de API de Herramientas' :
                 locale === 'ru' ? 'Справочник API инструментов' :
                 'Tools API Reference'}
              </Link>
              <Link
                href={`/${locale}/docs/examples`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '使用示例' :
                 locale === 'hi' ? 'उपयोग उदाहरण' :
                 locale === 'fr' ? 'Exemples d\'Utilisation' :
                 locale === 'de' ? 'Verwendungsbeispiele' :
                 locale === 'ja' ? '使用例' :
                 locale === 'ko' ? '사용 예제' :
                 locale === 'es' ? 'Ejemplos de Uso' :
                 locale === 'ru' ? 'Примеры использования' :
                 'Usage Examples'}
              </Link>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? '外部资源' :
                 locale === 'hi' ? 'बाहरी संसाधन' :
                 locale === 'fr' ? 'Ressources Externes' :
                 locale === 'de' ? 'Externe Ressourcen' :
                 locale === 'ja' ? '外部リソース' :
                 locale === 'ko' ? '외부 리소스' :
                 locale === 'es' ? 'Recursos Externos' :
                 locale === 'ru' ? 'Внешние ресурсы' :
                 'External Resources'}
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  {locale === 'zh' ? '官方 MCP 文档 →' :
                   locale === 'hi' ? 'आधिकारिक MCP दस्तावेज़ीकरण →' :
                   locale === 'fr' ? 'Documentation MCP Officielle →' :
                   locale === 'de' ? 'Offizielle MCP-Dokumentation →' :
                   locale === 'ja' ? '公式MCPドキュメント →' :
                   locale === 'ko' ? '공식 MCP 문서 →' :
                   locale === 'es' ? 'Documentación Oficial de MCP →' :
                   locale === 'ru' ? 'Официальная документация MCP →' :
                   'Official MCP Documentation →'}
                </Link>
                <Link
                  href="https://github.com/modelcontextprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  {locale === 'zh' ? 'MCP GitHub 组织 →' :
                   locale === 'hi' ? 'MCP GitHub संगठन →' :
                   locale === 'fr' ? 'Organisation GitHub MCP →' :
                   locale === 'de' ? 'MCP GitHub-Organisation →' :
                   locale === 'ja' ? 'MCP GitHub組織 →' :
                   locale === 'ko' ? 'MCP GitHub 조직 →' :
                   locale === 'es' ? 'Organización GitHub de MCP →' :
                   locale === 'ru' ? 'Организация MCP на GitHub →' :
                   'MCP GitHub Organization →'}
                </Link>
                <Link
                  href="https://github.com/modelcontextprotocol/servers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  {locale === 'zh' ? '参考服务器 →' :
                   locale === 'hi' ? 'संदर्भ सर्वर →' :
                   locale === 'fr' ? 'Serveurs de Référence →' :
                   locale === 'de' ? 'Referenz-Server →' :
                   locale === 'ja' ? 'リファレンスサーバー →' :
                   locale === 'ko' ? '참조 서버 →' :
                   locale === 'es' ? 'Servidores de Referencia →' :
                   locale === 'ru' ? 'Эталонные серверы →' :
                   'Reference Servers →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'hi' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'es' },
    { locale: 'ru' }
  ]
}
