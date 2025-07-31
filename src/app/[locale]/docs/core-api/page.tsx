import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  CodeBracketIcon,
  CpuChipIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: 'Core API Documentation | Gemini CLI Developer Documentation',
    zh: '核心 API 文档 | Gemini CLI 开发者文档',
    hi: 'कोर API दस्तावेज़ीकरण | Gemini CLI डेवलपर दस्तावेज़ीकरण',
    fr: 'Documentation API Core | Documentation Développeur Gemini CLI',
    de: 'Kern-API Dokumentation | Gemini CLI Entwicklerdokumentation',
    ja: 'コア API ドキュメント | Gemini CLI 开发者ドキュメント',
    ko: '코어 API 문서 | Gemini CLI 개발자 문서',
    es: 'Documentación API Principal | Documentación Desarrollador Gemini CLI',
    ru: 'Документация основного API | Документация разработчика Gemini CLI'
  }

  const descriptions = {
    en: 'Detailed Gemini CLI Core API interface documentation including client, session management, context processing, and configuration management core features.',
    zh: '详细的 Gemini CLI 核心 API 接口文档，包括客户端、会话管理、上下文处理和配置管理核心功能。',
    hi: 'विस्तृत Gemini CLI कोर API इंटरफेस दस्तावेज़ीकरण जिसमें क्लाइंट, सेशन प्रबंधन, संदर्भ प्रसंस्करण और कॉन्फ़िगरेशन प्रबंधन मुख्य सुविधाएं शामिल हैं।',
    fr: 'Documentation détaillée de l\'interface API Core Gemini CLI incluant le client, la gestion de session, le traitement de contexte et les fonctionnalités principales de gestion de configuration.',
    de: 'Detaillierte Gemini CLI Core API Interface-Dokumentation einschließlich Client, Session-Management, Kontextverarbeitung und Konfigurationsmanagement-Kernfunktionen.',
    ja: 'クライアント、セッション管理、コンテキスト処理、設定管理のコア機能を含む詳細なGemini CLI Core APIインターフェースドキュメント。',
    ko: '클라이언트, 세션 관리, 컨텍스트 처리 및 구성 관리 핵심 기능을 포함한 상세한 Gemini CLI Core API 인터페이스 문서.',
    es: 'Documentación detallada de la interfaz API Core de Gemini CLI que incluye cliente, gestión de sesiones, procesamiento de contexto y características principales de gestión de configuración.',
    ru: 'Подробная документация интерфейса Core API Gemini CLI, включающая клиент, управление сессиями, обработку контекста и основные функции управления конфигурацией.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: 'Gemini CLI API, core interface, client API, session management, context processing, configuration management',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

// Translation helper function - English stays original, others get full translation
const getTranslation = (locale: string, translations: Record<string, string>) => {
  return translations[locale as keyof typeof translations] || translations.en
}

// Content translations
const content = {
  title: {
    en: 'Core API',
    zh: '核心 API',
    hi: 'कोर API',
    fr: 'API Core',
    de: 'Core API',
    ja: 'コアAPI',
    ko: '코어 API',
    es: 'API Core',
    ru: 'Core API'
  },
  subtitle: {
    en: 'Complete Gemini CLI Core API reference and usage guide',
    zh: '完整的 Gemini CLI 核心 API 参考和使用指南',
    hi: 'पूर्ण Gemini CLI कोर API संदर्भ और उपयोग गाइड',
    fr: 'Référence complète de l\'API Core Gemini CLI et guide d\'utilisation',
    de: 'Vollständige Gemini CLI Core API Referenz und Nutzungsanleitung',
    ja: '完全なGemini CLI Core APIリファレンスと使用ガイド',
    ko: '완전한 Gemini CLI Core API 참조 및 사용 가이드',
    es: 'Referencia completa de la API Core de Gemini CLI y guía de uso',
    ru: 'Полный справочник Core API Gemini CLI и руководство по использованию'
  },
  apiReference: {
    en: 'API Reference',
    zh: 'API 参考',
    hi: 'API संदर्भ',
    fr: 'Référence API',
    de: 'API-Referenz',
    ja: 'APIリファレンス',
    ko: 'API 참조',
    es: 'Referencia API',
    ru: 'Справочник API'
  },
  readTime: {
    en: '30 min read',
    zh: '30 分钟阅读',
    hi: '30 मिनट पढ़ना',
    fr: '30 min de lecture',
    de: '30 Min. Lesezeit',
    ja: '30分で読める',
    ko: '30분 읽기',
    es: '30 min de lectura',
    ru: '30 мин чтения'
  },
  apiModules: {
    en: 'API Modules',
    zh: 'API 模块',
    hi: 'API मॉड्यूल',
    fr: 'Modules API',
    de: 'API-Module',
    ja: 'APIモジュール',
    ko: 'API 모듈',
    es: 'Módulos API',
    ru: 'API модули'
  },
  apiModulesSubtitle: {
    en: 'Core API modules and methods',
    zh: '核心 API 模块和方法',
    hi: 'मुख्य API मॉड्यूल और विधियां',
    fr: 'Modules et méthodes API principaux',
    de: 'Kern-API-Module und -Methoden',
    ja: 'コアAPIモジュールとメソッド',
    ko: '핵심 API 모듈 및 메서드',
    es: 'Módulos y métodos API principales',
    ru: 'Основные API модули и методы'
  },
  typeDefinitions: {
    en: 'Type Definitions',
    zh: '类型定义',
    hi: 'प्रकार परिभाषाएं',
    fr: 'Définitions de Types',
    de: 'Typdefinitionen',
    ja: '型定義',
    ko: '타입 정의',
    es: 'Definiciones de Tipos',
    ru: 'Определения типов'
  },
  typeDefinitionsSubtitle: {
    en: 'TypeScript type definitions for Core API',
    zh: '核心 API 的 TypeScript 类型定义',
    hi: 'कोर API के लिए TypeScript प्रकार परिभाषाएं',
    fr: 'Définitions de types TypeScript pour l\'API Core',
    de: 'TypeScript-Typdefinitionen für Core API',
    ja: 'Core APIのTypeScript型定義',
    ko: 'Core API용 TypeScript 타입 정의',
    es: 'Definiciones de tipos TypeScript para la API Core',
    ru: 'Определения типов TypeScript для Core API'
  },
  usageExamples: {
    en: 'Usage Examples',
    zh: '使用示例',
    hi: 'उपयोग उदाहरण',
    fr: 'Exemples d\'Utilisation',
    de: 'Verwendungsbeispiele',
    ja: '使用例',
    ko: '사용 예제',
    es: 'Ejemplos de Uso',
    ru: 'Примеры использования'
  },
  usageExamplesSubtitle: {
    en: 'Common API usage scenarios and code examples',
    zh: '常见的 API 使用场景和代码示例',
    hi: 'सामान्य API उपयोग परिदृश्य और कोड उदाहरण',
    fr: 'Scénarios d\'utilisation API courants et exemples de code',
    de: 'Häufige API-Nutzungsszenarien und Codebeispiele',
    ja: '一般的なAPI使用シナリオとコード例',
    ko: '일반적인 API 사용 시나리오 및 코드 예제',
    es: 'Escenarios comunes de uso de API y ejemplos de código',
    ru: 'Распространенные сценарии использования API и примеры кода'
  },
  errorHandling: {
    en: 'Error Handling',
    zh: '错误处理',
    hi: 'त्रुटि प्रबंधन',
    fr: 'Gestion des Erreurs',
    de: 'Fehlerbehandlung',
    ja: 'エラーハンドリング',
    ko: '오류 처리',
    es: 'Manejo de Errores',
    ru: 'Обработка ошибок'
  },
  errorHandlingSubtitle: {
    en: 'API error types and handling methods',
    zh: 'API 错误类型和处理方法',
    hi: 'API त्रुटि प्रकार और प्रबंधन विधियां',
    fr: 'Types d\'erreurs API et méthodes de gestion',
    de: 'API-Fehlertypen und Behandlungsmethoden',
    ja: 'APIエラータイプと処理方法',
    ko: 'API 오류 유형 및 처리 방법',
    es: 'Tipos de errores de API y métodos de manejo',
    ru: 'Типы ошибок API и методы обработки'
  },
  nextSteps: {
    en: 'Next Steps',
    zh: '下一步',
    hi: 'अगले चरण',
    fr: 'Étapes Suivantes',
    de: 'Nächste Schritte',
    ja: '次のステップ',
    ko: '다음 단계',
    es: 'Próximos Pasos',
    ru: 'Следующие шаги'
  },
  nextStepsSubtitle: {
    en: 'Continue your development journey with these resources',
    zh: '通过这些资源继续您的开发之旅',
    hi: 'इन संसाधनों के साथ अपनी विकास यात्रा जारी रखें',
    fr: 'Continuez votre parcours de développement avec ces ressources',
    de: 'Setzen Sie Ihre Entwicklungsreise mit diesen Ressourcen fort',
    ja: 'これらのリソースで開発の旅を続けてください',
    ko: '이러한 리소스로 개발 여정을 계속하세요',
    es: 'Continúa tu viaje de desarrollo con estos recursos',
    ru: 'Продолжите свой путь разработки с этими ресурсами'
  }
}

// API Modules data
const apiModules = [
  {
    name: 'GeminiClient',
    description: {
      en: 'Core Gemini API client class',
      zh: '核心 Gemini API 客户端类',
      hi: 'मुख्य Gemini API क्लाइंट क्लास',
      fr: 'Classe client API Gemini principale',
      de: 'Kern-Gemini-API-Client-Klasse',
      ja: 'コアGemini APIクライアントクラス',
      ko: '핵심 Gemini API 클라이언트 클래스',
      es: 'Clase cliente API Gemini principal',
      ru: 'Основной класс клиента Gemini API'
    },
    file: 'src/core/gemini.ts',
    methods: [
      {
        name: 'constructor',
        signature: 'constructor(config: GeminiConfig)',
        description: {
          en: 'Create Gemini client instance',
          zh: '创建 Gemini 客户端实例',
          hi: 'Gemini क्लाइंट इंस्टेंस बनाएं',
          fr: 'Créer une instance de client Gemini',
          de: 'Gemini-Client-Instanz erstellen',
          ja: 'Geminiクライアントインスタンスを作成',
          ko: 'Gemini 클라이언트 인스턴스 생성',
          es: 'Crear instancia de cliente Gemini',
          ru: 'Создать экземпляр клиента Gemini'
        },
        params: [
          {
            name: 'config',
            type: 'GeminiConfig',
            description: {
              en: 'Client configuration object',
              zh: '客户端配置对象',
              hi: 'क्लाइंट कॉन्फ़िगरेशन ऑब्जेक्ट',
              fr: 'Objet de configuration client',
              de: 'Client-Konfigurationsobjekt',
              ja: 'クライアント設定オブジェクト',
              ko: '클라이언트 구성 객체',
              es: 'Objeto de configuración del cliente',
              ru: 'Объект конфигурации клиента'
            }
          }
        ],
        example: `const client = new GeminiClient({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-pro',
  temperature: 0.7
})`
      },
      {
        name: 'chat',
        signature: 'async chat(message: string, context?: Context): Promise<ChatResponse>',
        description: {
          en: 'Send chat message and get response',
          zh: '发送聊天消息并获取响应',
          hi: 'चैट संदेश भेजें और प्रतिक्रिया प्राप्त करें',
          fr: 'Envoyer un message de chat et obtenir une réponse',
          de: 'Chat-Nachricht senden und Antwort erhalten',
          ja: 'チャットメッセージを送信して応答を取得',
          ko: '채팅 메시지를 보내고 응답 받기',
          es: 'Enviar mensaje de chat y obtener respuesta',
          ru: 'Отправить сообщение чата и получить ответ'
        },
        params: [
          {
            name: 'message',
            type: 'string',
            description: {
              en: 'User input message',
              zh: '用户输入消息',
              hi: 'उपयोगकर्ता इनपुट संदेश',
              fr: 'Message d\'entrée utilisateur',
              de: 'Benutzereingabenachricht',
              ja: 'ユーザー入力メッセージ',
              ko: '사용자 입력 메시지',
              es: 'Mensaje de entrada del usuario',
              ru: 'Входное сообщение пользователя'
            }
          },
          {
            name: 'context',
            type: 'Context',
            description: {
              en: 'Optional context information',
              zh: '可选的上下文信息',
              hi: 'वैकल्पिक संदर्भ जानकारी',
              fr: 'Informations de contexte optionnelles',
              de: 'Optionale Kontextinformationen',
              ja: 'オプションのコンテキスト情報',
              ko: '선택적 컨텍스트 정보',
              es: 'Información de contexto opcional',
              ru: 'Дополнительная контекстная информация'
            }
          }
        ],
        returns: {
          type: 'Promise<ChatResponse>',
          description: {
            en: 'Chat response object',
            zh: '聊天响应对象',
            hi: 'चैट प्रतिक्रिया ऑब्जेक्ट',
            fr: 'Objet de réponse de chat',
            de: 'Chat-Antwortobjekt',
            ja: 'チャット応答オブジェクト',
            ko: '채팅 응답 객체',
            es: 'Objeto de respuesta de chat',
            ru: 'Объект ответа чата'
          }
        },
        example: `const response = await client.chat('Hello, Gemini!', {
  files: ['src/index.ts'],
  history: previousMessages
})`
      },
      {
        name: 'stream',
        signature: 'async stream(message: string, context?: Context): AsyncGenerator<string>',
        description: {
          en: 'Streaming chat response',
          zh: '流式聊天响应',
          hi: 'स्ट्रीमिंग चैट प्रतिक्रिया',
          fr: 'Réponse de chat en streaming',
          de: 'Streaming-Chat-Antwort',
          ja: 'ストリーミングチャット応答',
          ko: '스트리밍 채팅 응답',
          es: 'Respuesta de chat en streaming',
          ru: 'Потоковый ответ чата'
        },
        params: [
          {
            name: 'message',
            type: 'string',
            description: {
              en: 'User input message',
              zh: '用户输入消息',
              hi: 'उपयोगकर्ता इनपुट संदेश',
              fr: 'Message d\'entrée utilisateur',
              de: 'Benutzereingabenachricht',
              ja: 'ユーザー入力メッセージ',
              ko: '사용자 입력 메시지',
              es: 'Mensaje de entrada del usuario',
              ru: 'Входное сообщение пользователя'
            }
          },
          {
            name: 'context',
            type: 'Context',
            description: {
              en: 'Optional context information',
              zh: '可选的上下文信息',
              hi: 'वैकल्पिक संदर्भ जानकारी',
              fr: 'Informations de contexte optionnelles',
              de: 'Optionale Kontextinformationen',
              ja: 'オプションのコンテキスト情報',
              ko: '선택적 컨텍스트 정보',
              es: 'Información de contexto opcional',
              ru: 'Дополнительная контекстная информация'
            }
          }
        ],
        returns: {
          type: 'AsyncGenerator<string>',
          description: {
            en: 'Streaming response generator',
            zh: '流式响应生成器',
            hi: 'स्ट्रीमिंग प्रतिक्रिया जेनरेटर',
            fr: 'Générateur de réponse en streaming',
            de: 'Streaming-Antwort-Generator',
            ja: 'ストリーミング応答ジェネレータ',
            ko: '스트리밍 응답 생성기',
            es: 'Generador de respuesta en streaming',
            ru: 'Генератор потокового ответа'
          }
        },
        example: `for await (const chunk of client.stream('Explain this code')) {
  process.stdout.write(chunk)
}`
      }
    ]
  },
  {
    name: 'SessionManager',
    description: {
      en: 'Session state manager',
      zh: '会话状态管理器',
      hi: 'सेशन स्थिति प्रबंधक',
      fr: 'Gestionnaire d\'état de session',
      de: 'Session-Status-Manager',
      ja: 'セッション状態マネージャー',
      ko: '세션 상태 관리자',
      es: 'Gestor de estado de sesión',
      ru: 'Менеджер состояния сессии'
    },
    file: 'src/core/session.ts',
    methods: [
      {
        name: 'createSession',
        signature: 'createSession(id?: string): Session',
        description: {
          en: 'Create new session',
          zh: '创建新会话',
          hi: 'नया सेशन बनाएं',
          fr: 'Créer une nouvelle session',
          de: 'Neue Session erstellen',
          ja: '新しいセッションを作成',
          ko: '새 세션 생성',
          es: 'Crear nueva sesión',
          ru: 'Создать новую сессию'
        },
        params: [
          {
            name: 'id',
            type: 'string',
            description: {
              en: 'Optional session ID',
              zh: '可选的会话 ID',
              hi: 'वैकल्पिक सेशन ID',
              fr: 'ID de session optionnel',
              de: 'Optionale Session-ID',
              ja: 'オプションのセッションID',
              ko: '선택적 세션 ID',
              es: 'ID de sesión opcional',
              ru: 'Дополнительный ID сессии'
            }
          }
        ],
        returns: {
          type: 'Session',
          description: {
            en: 'Newly created session object',
            zh: '新创建的会话对象',
            hi: 'नया बनाया गया सेशन ऑब्जेक्ट',
            fr: 'Objet de session nouvellement créé',
            de: 'Neu erstelltes Session-Objekt',
            ja: '新しく作成されたセッションオブジェクト',
            ko: '새로 생성된 세션 객체',
            es: 'Objeto de sesión recién creado',
            ru: 'Вновь созданный объект сессии'
          }
        },
        example: `const session = sessionManager.createSession('my-session')`
      },
      {
        name: 'getSession',
        signature: 'getSession(id: string): Session | null',
        description: {
          en: 'Get specified session',
          zh: '获取指定会话',
          hi: 'निर्दिष्ट सेशन प्राप्त करें',
          fr: 'Obtenir la session spécifiée',
          de: 'Angegebene Session abrufen',
          ja: '指定されたセッションを取得',
          ko: '지정된 세션 가져오기',
          es: 'Obtener sesión especificada',
          ru: 'Получить указанную сессию'
        },
        params: [
          {
            name: 'id',
            type: 'string',
            description: {
              en: 'Session ID',
              zh: '会话 ID',
              hi: 'सेशन ID',
              fr: 'ID de session',
              de: 'Session-ID',
              ja: 'セッションID',
              ko: '세션 ID',
              es: 'ID de sesión',
              ru: 'ID сессии'
            }
          }
        ],
        returns: {
          type: 'Session | null',
          description: {
            en: 'Session object or null',
            zh: '会话对象或 null',
            hi: 'सेशन ऑब्जेक्ट या null',
            fr: 'Objet de session ou null',
            de: 'Session-Objekt oder null',
            ja: 'セッションオブジェクトまたはnull',
            ko: '세션 객체 또는 null',
            es: 'Objeto de sesión o null',
            ru: 'Объект сессии или null'
          }
        },
        example: `const session = sessionManager.getSession('my-session')`
      },
      {
        name: 'saveSession',
        signature: 'async saveSession(session: Session): Promise<void>',
        description: {
          en: 'Save session to persistent storage',
          zh: '将会话保存到持久存储',
          hi: 'सेशन को स्थायी भंडारण में सहेजें',
          fr: 'Sauvegarder la session dans le stockage persistant',
          de: 'Session in persistentem Speicher speichern',
          ja: 'セッションを永続ストレージに保存',
          ko: '세션을 영구 저장소에 저장',
          es: 'Guardar sesión en almacenamiento persistente',
          ru: 'Сохранить сессию в постоянное хранилище'
        },
        params: [
          {
            name: 'session',
            type: 'Session',
            description: {
              en: 'Session object to save',
              zh: '要保存的会话对象',
              hi: 'सहेजने के लिए सेशन ऑब्जेक्ट',
              fr: 'Objet de session à sauvegarder',
              de: 'Zu speicherndes Session-Objekt',
              ja: '保存するセッションオブジェクト',
              ko: '저장할 세션 객체',
              es: 'Objeto de sesión a guardar',
              ru: 'Объект сессии для сохранения'
            }
          }
        ],
        example: `await sessionManager.saveSession(session)`
      }
    ]
  },
  {
    name: 'ContextManager',
    description: {
      en: 'Context processing manager',
      zh: '上下文处理管理器',
      hi: 'संदर्भ प्रसंस्करण प्रबंधक',
      fr: 'Gestionnaire de traitement de contexte',
      de: 'Kontext-Verarbeitungsmanager',
      ja: 'コンテキスト処理マネージャー',
      ko: '컨텍스트 처리 관리자',
      es: 'Gestor de procesamiento de contexto',
      ru: 'Менеджер обработки контекста'
    },
    file: 'src/core/context.ts',
    methods: [
      {
        name: 'addFile',
        signature: 'async addFile(filePath: string): Promise<void>',
        description: {
          en: 'Add file to context',
          zh: '将文件添加到上下文',
          hi: 'संदर्भ में फ़ाइल जोड़ें',
          fr: 'Ajouter un fichier au contexte',
          de: 'Datei zum Kontext hinzufügen',
          ja: 'ファイルをコンテキストに追加',
          ko: '컨텍스트에 파일 추가',
          es: 'Agregar archivo al contexto',
          ru: 'Добавить файл в контекст'
        },
        params: [
          {
            name: 'filePath',
            type: 'string',
            description: {
              en: 'File path',
              zh: '文件路径',
              hi: 'फ़ाइल पथ',
              fr: 'Chemin du fichier',
              de: 'Dateipfad',
              ja: 'ファイルパス',
              ko: '파일 경로',
              es: 'Ruta del archivo',
              ru: 'Путь к файлу'
            }
          }
        ],
        example: `await contextManager.addFile('src/utils/helper.ts')`
      },
      {
        name: 'addDirectory',
        signature: 'async addDirectory(dirPath: string, options?: DirOptions): Promise<void>',
        description: {
          en: 'Add directory to context',
          zh: '将目录添加到上下文',
          hi: 'संदर्भ में निर्देशिका जोड़ें',
          fr: 'Ajouter un répertoire au contexte',
          de: 'Verzeichnis zum Kontext hinzufügen',
          ja: 'ディレクトリをコンテキストに追加',
          ko: '컨텍스트에 디렉토리 추가',
          es: 'Agregar directorio al contexto',
          ru: 'Добавить директорию в контекст'
        },
        params: [
          {
            name: 'dirPath',
            type: 'string',
            description: {
              en: 'Directory path',
              zh: '目录路径',
              hi: 'निर्देशिका पथ',
              fr: 'Chemin du répertoire',
              de: 'Verzeichnispfad',
              ja: 'ディレクトリパス',
              ko: '디렉토리 경로',
              es: 'Ruta del directorio',
              ru: 'Путь к директории'
            }
          },
          {
            name: 'options',
            type: 'DirOptions',
            description: {
              en: 'Directory scanning options',
              zh: '目录扫描选项',
              hi: 'निर्देशिका स्कैनिंग विकल्प',
              fr: 'Options de scan de répertoire',
              de: 'Verzeichnis-Scan-Optionen',
              ja: 'ディレクトリスキャンオプション',
              ko: '디렉토리 스캔 옵션',
              es: 'Opciones de escaneo de directorio',
              ru: 'Опции сканирования директории'
            }
          }
        ],
        example: `await contextManager.addDirectory('src/', {
  exclude: ['*.test.ts'],
  maxDepth: 3
})`
      },
      {
        name: 'getContext',
        signature: 'getContext(): Context',
        description: {
          en: 'Get current context',
          zh: '获取当前上下文',
          hi: 'वर्तमान संदर्भ प्राप्त करें',
          fr: 'Obtenir le contexte actuel',
          de: 'Aktuellen Kontext abrufen',
          ja: '現在のコンテキストを取得',
          ko: '현재 컨텍스트 가져오기',
          es: 'Obtener contexto actual',
          ru: 'Получить текущий контекст'
        },
        returns: {
          type: 'Context',
          description: {
            en: 'Current context object',
            zh: '当前上下文对象',
            hi: 'वर्तमान संदर्भ ऑब्जेक्ट',
            fr: 'Objet de contexte actuel',
            de: 'Aktuelles Kontext-Objekt',
            ja: '現在のコンテキストオブジェクト',
            ko: '현재 컨텍스트 객체',
            es: 'Objeto de contexto actual',
            ru: 'Текущий объект контекста'
          }
        },
        example: `const context = contextManager.getContext()`
      }
    ]
  }
]

// Type Definitions data
const typeDefinitions = [
  {
    name: 'GeminiConfig',
    description: {
      en: 'Gemini client configuration interface',
      zh: 'Gemini 客户端配置接口',
      hi: 'Gemini क्लाइंट कॉन्फ़िगरेशन इंटरफेस',
      fr: 'Interface de configuration client Gemini',
      de: 'Gemini-Client-Konfigurationsschnittstelle',
      ja: 'Geminiクライアント設定インターフェース',
      ko: 'Gemini 클라이언트 구성 인터페이스',
      es: 'Interfaz de configuración del cliente Gemini',
      ru: 'Интерфейс конфигурации клиента Gemini'
    },
    properties: [
      {
        name: 'apiKey',
        type: 'string',
        required: true,
        description: {
          en: 'Google AI API key',
          zh: 'Google AI API 密钥',
          hi: 'Google AI API कुंजी',
          fr: 'Clé API Google AI',
          de: 'Google AI API-Schlüssel',
          ja: 'Google AI APIキー',
          ko: 'Google AI API 키',
          es: 'Clave API de Google AI',
          ru: 'Ключ API Google AI'
        }
      },
      {
        name: 'model',
        type: 'string',
        required: false,
        description: {
          en: 'Model name to use, defaults to "gemini-pro"',
          zh: '要使用的模型名称，默认为 "gemini-pro"',
          hi: 'उपयोग करने के लिए मॉडल नाम, डिफ़ॉल्ट "gemini-pro"',
          fr: 'Nom du modèle à utiliser, par défaut "gemini-pro"',
          de: 'Zu verwendender Modellname, Standard ist "gemini-pro"',
          ja: '使用するモデル名、デフォルトは "gemini-pro"',
          ko: '사용할 모델 이름, 기본값은 "gemini-pro"',
          es: 'Nombre del modelo a usar, por defecto "gemini-pro"',
          ru: 'Имя модели для использования, по умолчанию "gemini-pro"'
        }
      },
      {
        name: 'temperature',
        type: 'number',
        required: false,
        description: {
          en: 'Generation temperature, between 0-1',
          zh: '生成温度，介于 0-1 之间',
          hi: 'जेनरेशन तापमान, 0-1 के बीच',
          fr: 'Température de génération, entre 0-1',
          de: 'Generierungstemperatur, zwischen 0-1',
          ja: '生成温度、0-1の間',
          ko: '생성 온도, 0-1 사이',
          es: 'Temperatura de generación, entre 0-1',
          ru: 'Температура генерации, между 0-1'
        }
      },
      {
        name: 'maxTokens',
        type: 'number',
        required: false,
        description: {
          en: 'Maximum number of tokens',
          zh: '最大令牌数',
          hi: 'टोकन की अधिकतम संख्या',
          fr: 'Nombre maximum de tokens',
          de: 'Maximale Anzahl von Tokens',
          ja: '最大トークン数',
          ko: '최대 토큰 수',
          es: 'Número máximo de tokens',
          ru: 'Максимальное количество токенов'
        }
      },
      {
        name: 'timeout',
        type: 'number',
        required: false,
        description: {
          en: 'Request timeout in milliseconds',
          zh: '请求超时时间（毫秒）',
          hi: 'मिलीसेकंड में अनुरोध समय सीमा',
          fr: 'Délai d\'expiration de la requête en millisecondes',
          de: 'Anfrage-Timeout in Millisekunden',
          ja: 'リクエストタイムアウト（ミリ秒）',
          ko: '요청 타임아웃(밀리초)',
          es: 'Tiempo de espera de solicitud en milisegundos',
          ru: 'Таймаут запроса в миллисекундах'
        }
      }
    ]
  },
  {
    name: 'ChatResponse',
    description: {
      en: 'Chat response interface',
      zh: '聊天响应接口',
      hi: 'चैट प्रतिक्रिया इंटरफेस',
      fr: 'Interface de réponse de chat',
      de: 'Chat-Antwort-Schnittstelle',
      ja: 'チャット応答インターフェース',
      ko: '채팅 응답 인터페이스',
      es: 'Interfaz de respuesta de chat',
      ru: 'Интерфейс ответа чата'
    },
    properties: [
      {
        name: 'content',
        type: 'string',
        required: true,
        description: {
          en: 'Response content',
          zh: '响应内容',
          hi: 'प्रतिक्रिया सामग्री',
          fr: 'Contenu de la réponse',
          de: 'Antwortinhalt',
          ja: '応答内容',
          ko: '응답 내용',
          es: 'Contenido de respuesta',
          ru: 'Содержимое ответа'
        }
      },
      {
        name: 'usage',
        type: 'TokenUsage',
        required: true,
        description: {
          en: 'Token usage information',
          zh: '令牌使用信息',
          hi: 'टोकन उपयोग जानकारी',
          fr: 'Informations d\'utilisation des tokens',
          de: 'Token-Nutzungsinformationen',
          ja: 'トークン使用情報',
          ko: '토큰 사용 정보',
          es: 'Información de uso de tokens',
          ru: 'Информация об использовании токенов'
        }
      },
      {
        name: 'model',
        type: 'string',
        required: true,
        description: {
          en: 'Model used',
          zh: '使用的模型',
          hi: 'उपयोग किया गया मॉडल',
          fr: 'Modèle utilisé',
          de: 'Verwendetes Modell',
          ja: '使用されたモデル',
          ko: '사용된 모델',
          es: 'Modelo utilizado',
          ru: 'Используемая модель'
        }
      },
      {
        name: 'finishReason',
        type: 'string',
        required: false,
        description: {
          en: 'Finish reason',
          zh: '完成原因',
          hi: 'समाप्ति कारण',
          fr: 'Raison de fin',
          de: 'Beendigungsgrund',
          ja: '終了理由',
          ko: '완료 이유',
          es: 'Razón de finalización',
          ru: 'Причина завершения'
        }
      }
    ]
  },
  {
    name: 'Context',
    description: {
      en: 'Context information interface',
      zh: '上下文信息接口',
      hi: 'संदर्भ जानकारी इंटरफेस',
      fr: 'Interface d\'informations de contexte',
      de: 'Kontext-Informationsschnittstelle',
      ja: 'コンテキスト情報インターフェース',
      ko: '컨텍스트 정보 인터페이스',
      es: 'Interfaz de información de contexto',
      ru: 'Интерфейс контекстной информации'
    },
    properties: [
      {
        name: 'files',
        type: 'FileContext[]',
        required: false,
        description: {
          en: 'File context list',
          zh: '文件上下文列表',
          hi: 'फ़ाइल संदर्भ सूची',
          fr: 'Liste de contexte de fichiers',
          de: 'Datei-Kontext-Liste',
          ja: 'ファイルコンテキストリスト',
          ko: '파일 컨텍스트 목록',
          es: 'Lista de contexto de archivos',
          ru: 'Список файлового контекста'
        }
      },
      {
        name: 'history',
        type: 'Message[]',
        required: false,
        description: {
          en: 'Message history',
          zh: '消息历史',
          hi: 'संदेश इतिहास',
          fr: 'Historique des messages',
          de: 'Nachrichtenverlauf',
          ja: 'メッセージ履歴',
          ko: '메시지 기록',
          es: 'Historial de mensajes',
          ru: 'История сообщений'
        }
      },
      {
        name: 'metadata',
        type: 'Record<string, any>',
        required: false,
        description: {
          en: 'Metadata',
          zh: '元数据',
          hi: 'मेटाडेटा',
          fr: 'Métadonnées',
          de: 'Metadaten',
          ja: 'メタデータ',
          ko: '메타데이터',
          es: 'Metadatos',
          ru: 'Метаданные'
        }
      }
    ]
  },
  {
    name: 'Session',
    description: {
      en: 'Session interface',
      zh: '会话接口',
      hi: 'सेशन इंटरफेस',
      fr: 'Interface de session',
      de: 'Session-Schnittstelle',
      ja: 'セッションインターフェース',
      ko: '세션 인터페이스',
      es: 'Interfaz de sesión',
      ru: 'Интерфейс сессии'
    },
    properties: [
      {
        name: 'id',
        type: 'string',
        required: true,
        description: {
          en: 'Unique session identifier',
          zh: '唯一会话标识符',
          hi: 'अद्वितीय सेशन पहचानकर्ता',
          fr: 'Identifiant de session unique',
          de: 'Eindeutige Session-Kennung',
          ja: '一意のセッション識別子',
          ko: '고유 세션 식별자',
          es: 'Identificador único de sesión',
          ru: 'Уникальный идентификатор сессии'
        }
      },
      {
        name: 'messages',
        type: 'Message[]',
        required: true,
        description: {
          en: 'Message history',
          zh: '消息历史',
          hi: 'संदेश इतिहास',
          fr: 'Historique des messages',
          de: 'Nachrichtenverlauf',
          ja: 'メッセージ履歴',
          ko: '메시지 기록',
          es: 'Historial de mensajes',
          ru: 'История сообщений'
        }
      },
      {
        name: 'context',
        type: 'Context',
        required: false,
        description: {
          en: 'Session context',
          zh: '会话上下文',
          hi: 'सेशन संदर्भ',
          fr: 'Contexte de session',
          de: 'Session-Kontext',
          ja: 'セッションコンテキスト',
          ko: '세션 컨텍스트',
          es: 'Contexto de sesión',
          ru: 'Контекст сессии'
        }
      },
      {
        name: 'createdAt',
        type: 'Date',
        required: true,
        description: {
          en: 'Creation time',
          zh: '创建时间',
          hi: 'निर्माण समय',
          fr: 'Heure de création',
          de: 'Erstellungszeit',
          ja: '作成時間',
          ko: '생성 시간',
          es: 'Tiempo de creación',
          ru: 'Время создания'
        }
      },
      {
        name: 'updatedAt',
        type: 'Date',
        required: true,
        description: {
          en: 'Update time',
          zh: '更新时间',
          hi: 'अपडेट समय',
          fr: 'Heure de mise à jour',
          de: 'Aktualisierungszeit',
          ja: '更新時間',
          ko: '업데이트 시간',
          es: 'Tiempo de actualización',
          ru: 'Время обновления'
        }
      }
    ]
  }
]

// Usage Examples data
const usageExamples = [
  {
    title: {
      en: 'Basic Chat',
      zh: '基本聊天',
      hi: 'बुनियादी चैट',
      fr: 'Chat de Base',
      de: 'Basis-Chat',
      ja: '基本チャット',
      ko: '기본 채팅',
      es: 'Chat Básico',
      ru: 'Базовый чат'
    },
    description: {
      en: 'Simple chat interaction example',
      zh: '简单聊天交互示例',
      hi: 'सरल चैट इंटरैक्शन उदाहरण',
      fr: 'Exemple d\'interaction de chat simple',
      de: 'Einfaches Chat-Interaktionsbeispiel',
      ja: 'シンプルなチャット対話の例',
      ko: '간단한 채팅 상호작용 예제',
      es: 'Ejemplo de interacción de chat simple',
      ru: 'Пример простого чат-взаимодействия'
    },
    code: `import { GeminiClient } from '@gemini/core'

const client = new GeminiClient({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-pro'
})

async function basicChat() {
  try {
    const response = await client.chat('Hello, how are you?')
    console.log('AI:', response.content)
  } catch (error) {
    console.error('Chat error:', error.message)
  }
}`
  },
  {
    title: {
      en: 'File Context',
      zh: '文件上下文',
      hi: 'फ़ाइल संदर्भ',
      fr: 'Contexte de Fichier',
      de: 'Datei-Kontext',
      ja: 'ファイルコンテキスト',
      ko: '파일 컨텍스트',
      es: 'Contexto de Archivo',
      ru: 'Файловый контекст'
    },
    description: {
      en: 'Chat with file context included',
      zh: '包含文件上下文的聊天',
      hi: 'फ़ाइल संदर्भ के साथ चैट',
      fr: 'Chat avec contexte de fichier inclus',
      de: 'Chat mit eingeschlossenem Datei-Kontext',
      ja: 'ファイルコンテキストを含むチャット',
      ko: '파일 컨텍스트가 포함된 채팅',
      es: 'Chat con contexto de archivo incluido',
      ru: 'Чат с включенным файловым контекстом'
    },
    code: `import { GeminiClient, ContextManager } from '@gemini/core'

const client = new GeminiClient({ apiKey: process.env.GEMINI_API_KEY })
const contextManager = new ContextManager()

async function chatWithFiles() {
  // Add files to context
  await contextManager.addFile('src/utils/helper.ts')
  await contextManager.addDirectory('src/components/')

  const context = contextManager.getContext()

  const response = await client.chat(
    'Explain the helper functions in this codebase',
    context
  )

  console.log(response.content)
}`
  },
  {
    title: {
      en: 'Session Management',
      zh: '会话管理',
      hi: 'सेशन प्रबंधन',
      fr: 'Gestion de Session',
      de: 'Session-Management',
      ja: 'セッション管理',
      ko: '세션 관리',
      es: 'Gestión de Sesión',
      ru: 'Управление сессиями'
    },
    description: {
      en: 'Managing persistent sessions',
      zh: '管理持久会话',
      hi: 'स्थायी सेशन का प्रबंधन',
      fr: 'Gestion des sessions persistantes',
      de: 'Verwaltung persistenter Sessions',
      ja: '永続セッションの管理',
      ko: '영구 세션 관리',
      es: 'Gestión de sesiones persistentes',
      ru: 'Управление постоянными сессиями'
    },
    code: `import { SessionManager } from '@gemini/core'

const sessionManager = new SessionManager()

async function manageSessions() {
  // Create new session
  const session = sessionManager.createSession('project-review')

  // Add messages to session
  session.messages.push({
    role: 'user',
    content: 'Review this code for best practices'
  })

  // Save session
  await sessionManager.saveSession(session)

  // Restore session later
  const restored = sessionManager.getSession('project-review')
  console.log('Session messages:', restored?.messages.length)
}`
  },
  {
    title: {
      en: 'Streaming Response',
      zh: '流式响应',
      hi: 'स्ट्रीमिंग प्रतिक्रिया',
      fr: 'Réponse en Streaming',
      de: 'Streaming-Antwort',
      ja: 'ストリーミング応答',
      ko: '스트리밍 응답',
      es: 'Respuesta en Streaming',
      ru: 'Потоковый ответ'
    },
    description: {
      en: 'Real-time streaming output',
      zh: '实时流式输出',
      hi: 'रियल-टाइम स्ट्रीमिंग आउटपुट',
      fr: 'Sortie en streaming en temps réel',
      de: 'Echtzeit-Streaming-Ausgabe',
      ja: 'リアルタイムストリーミング出力',
      ko: '실시간 스트리밍 출력',
      es: 'Salida de streaming en tiempo real',
      ru: 'Потоковый вывод в реальном времени'
    },
    code: `import { GeminiClient } from '@gemini/core'

const client = new GeminiClient({ apiKey: process.env.GEMINI_API_KEY })

async function streamingChat() {
  console.log('AI: ')

  for await (const chunk of client.stream('Write a short story')) {
    process.stdout.write(chunk)
  }

  console.log('\\n\\nStream completed!')
}`
  }
]

// Error Handling data
const errorHandling = [
  {
    name: 'AuthenticationError',
    description: {
      en: 'Invalid or expired API key',
      zh: '无效或过期的 API 密钥',
      hi: 'अमान्य या समाप्त API कुंजी',
      fr: 'Clé API invalide ou expirée',
      de: 'Ungültiger oder abgelaufener API-Schlüssel',
      ja: '無効または期限切れのAPIキー',
      ko: '유효하지 않거나 만료된 API 키',
      es: 'Clave API inválida o expirada',
      ru: 'Недействительный или истекший API ключ'
    },
    code: 'GEMINI_AUTH_ERROR',
    solution: {
      en: 'Check if API key is correctly set, ensure key is valid and not expired',
      zh: '检查 API 密钥是否正确设置，确保密钥有效且未过期',
      hi: 'जांचें कि API कुंजी सही तरीके से सेट है, सुनिश्चित करें कि कुंजी वैध है और समाप्त नहीं हुई है',
      fr: 'Vérifiez si la clé API est correctement définie, assurez-vous que la clé est valide et non expirée',
      de: 'Überprüfen Sie, ob der API-Schlüssel korrekt gesetzt ist, stellen Sie sicher, dass der Schlüssel gültig und nicht abgelaufen ist',
      ja: 'APIキーが正しく設定されているか確認し、キーが有効で期限切れでないことを確認してください',
      ko: 'API 키가 올바르게 설정되었는지 확인하고, 키가 유효하고 만료되지 않았는지 확인하세요',
      es: 'Verifique si la clave API está configurada correctamente, asegúrese de que la clave sea válida y no haya expirado',
      ru: 'Проверьте, правильно ли установлен API ключ, убедитесь, что ключ действителен и не истек'
    }
  },
  {
    name: 'RateLimitError',
    description: {
      en: 'Request frequency exceeds limits',
      zh: '请求频率超出限制',
      hi: 'अनुरोध आवृत्ति सीमा से अधिक है',
      fr: 'La fréquence des requêtes dépasse les limites',
      de: 'Anfragenhäufigkeit überschreitet Grenzen',
      ja: 'リクエスト頻度が制限を超えています',
      ko: '요청 빈도가 제한을 초과합니다',
      es: 'La frecuencia de solicitudes excede los límites',
      ru: 'Частота запросов превышает лимиты'
    },
    code: 'GEMINI_RATE_LIMIT',
    solution: {
      en: 'Implement exponential backoff retry mechanism, or upgrade to higher quota plan',
      zh: '实施指数退避重试机制，或升级到更高配额计划',
      hi: 'एक्सपोनेंशियल बैकऑफ रिट्राई मैकेनिज्म लागू करें, या उच्चतर कोटा प्लान में अपग्रेड करें',
      fr: 'Implémentez un mécanisme de nouvelle tentative avec backoff exponentiel, ou passez à un plan de quota supérieur',
      de: 'Implementieren Sie einen exponentiellen Backoff-Wiederholungsmechanismus oder upgraden Sie auf einen höheren Quota-Plan',
      ja: '指数バックオフ再試行メカニズムを実装するか、より高いクォータプランにアップグレードしてください',
      ko: '지수 백오프 재시도 메커니즘을 구현하거나 더 높은 할당량 플랜으로 업그레이드하세요',
      es: 'Implemente un mecanismo de reintento con backoff exponencial, o actualice a un plan de cuota superior',
      ru: 'Реализуйте механизм повторных попыток с экспоненциальной задержкой или обновитесь до плана с более высокой квотой'
    }
  },
  {
    name: 'ContextTooLargeError',
    description: {
      en: 'Context content exceeds model limits',
      zh: '上下文内容超出模型限制',
      hi: 'संदर्भ सामग्री मॉडल सीमा से अधिक है',
      fr: 'Le contenu du contexte dépasse les limites du modèle',
      de: 'Kontextinhalt überschreitet Modellgrenzen',
      ja: 'コンテキストコンテンツがモデルの制限を超えています',
      ko: '컨텍스트 콘텐츠가 모델 제한을 초과합니다',
      es: 'El contenido del contexto excede los límites del modelo',
      ru: 'Содержимое контекста превышает лимиты модели'
    },
    code: 'GEMINI_CONTEXT_TOO_LARGE',
    solution: {
      en: 'Reduce number of context files or use file summarization feature',
      zh: '减少上下文文件数量或使用文件摘要功能',
      hi: 'संदर्भ फ़ाइलों की संख्या कम करें या फ़ाइल सारांश सुविधा का उपयोग करें',
      fr: 'Réduisez le nombre de fichiers de contexte ou utilisez la fonction de résumé de fichier',
      de: 'Reduzieren Sie die Anzahl der Kontextdateien oder verwenden Sie die Dateizusammenfassungsfunktion',
      ja: 'コンテキストファイルの数を減らすか、ファイル要約機能を使用してください',
      ko: '컨텍스트 파일 수를 줄이거나 파일 요약 기능을 사용하세요',
      es: 'Reduzca el número de archivos de contexto o use la función de resumen de archivos',
      ru: 'Уменьшите количество контекстных файлов или используйте функцию суммаризации файлов'
    }
  },
  {
    name: 'NetworkError',
    description: {
      en: 'Network connection issues',
      zh: '网络连接问题',
      hi: 'नेटवर्क कनेक्शन समस्याएं',
      fr: 'Problèmes de connexion réseau',
      de: 'Netzwerkverbindungsprobleme',
      ja: 'ネットワーク接続の問題',
      ko: '네트워크 연결 문제',
      es: 'Problemas de conexión de red',
      ru: 'Проблемы с сетевым подключением'
    },
    code: 'GEMINI_NETWORK_ERROR',
    solution: {
      en: 'Check network connection, configure proxy settings, or increase timeout',
      zh: '检查网络连接，配置代理设置，或增加超时时间',
      hi: 'नेटवर्क कनेक्शन जांचें, प्रॉक्सी सेटिंग्स कॉन्फ़िगर करें, या टाइमआउट बढ़ाएं',
      fr: 'Vérifiez la connexion réseau, configurez les paramètres de proxy ou augmentez le délai d\'expiration',
      de: 'Überprüfen Sie die Netzwerkverbindung, konfigurieren Sie Proxy-Einstellungen oder erhöhen Sie das Timeout',
      ja: 'ネットワーク接続を確認し、プロキシ設定を構成するか、タイムアウトを増やしてください',
      ko: '네트워크 연결을 확인하고, 프록시 설정을 구성하거나 타임아웃을 늘리세요',
      es: 'Verifique la conexión de red, configure los ajustes de proxy o aumente el tiempo de espera',
      ru: 'Проверьте сетевое подключение, настройте параметры прокси или увеличьте таймаут'
    }
  }
]

export default async function CoreAPIPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CodeBracketIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {getTranslation(locale, content.title)}
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              {getTranslation(locale, content.subtitle)}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {getTranslation(locale, content.apiReference)}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {getTranslation(locale, content.readTime)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* API Modules */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {getTranslation(locale, content.apiModules)}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {getTranslation(locale, content.apiModulesSubtitle)}
            </p>
          </div>

          <div className="space-y-12">
            {apiModules.map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start mb-6">
                  <CpuChipIcon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.name}</h3>
                    <p className="text-gray-600 mb-2">{getTranslation(locale, module.description)}</p>
                    <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">{module.file}</code>
                  </div>
                </div>

                <div className="space-y-8">
                  {module.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h4>
                        <div className="bg-gray-900 rounded-lg p-3 mb-3">
                          <code className="text-green-400 text-sm font-mono">{method.signature}</code>
                        </div>
                        <p className="text-gray-600 text-sm">{getTranslation(locale, method.description)}</p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          {method.params && (
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">
                                {locale === 'zh' ? '参数:' : locale === 'hi' ? 'पैरामीटर:' : locale === 'fr' ? 'Paramètres:' : locale === 'de' ? 'Parameter:' : locale === 'ja' ? 'パラメータ:' : locale === 'ko' ? '매개변수:' : locale === 'es' ? 'Parámetros:' : locale === 'ru' ? 'Параметры:' : 'Parameters:'}
                              </h5>
                              <div className="space-y-2">
                                {method.params.map((param, paramIndex) => (
                                  <div key={paramIndex} className="bg-gray-50 rounded p-3">
                                    <div className="flex items-center mb-1">
                                      <code className="text-sm font-mono text-blue-600">{param.name}</code>
                                      <span className="text-xs text-gray-500 ml-2">{param.type}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">{getTranslation(locale, param.description)}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {method.returns && (
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">
                                {locale === 'zh' ? '返回:' : locale === 'hi' ? 'रिटर्न:' : locale === 'fr' ? 'Retourne:' : locale === 'de' ? 'Rückgabe:' : locale === 'ja' ? '戻り値:' : locale === 'ko' ? '반환:' : locale === 'es' ? 'Retorna:' : locale === 'ru' ? 'Возвращает:' : 'Returns:'}
                              </h5>
                              <div className="bg-gray-50 rounded p-3">
                                <code className="text-sm font-mono text-green-600">{method.returns.type}</code>
                                <p className="text-xs text-gray-600 mt-1">{getTranslation(locale, method.returns.description)}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">
                            {locale === 'zh' ? '示例:' : locale === 'hi' ? 'उदाहरण:' : locale === 'fr' ? 'Exemple:' : locale === 'de' ? 'Beispiel:' : locale === 'ja' ? '例:' : locale === 'ko' ? '예제:' : locale === 'es' ? 'Ejemplo:' : locale === 'ru' ? 'Пример:' : 'Example:'}
                          </h5>
                          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                            <pre className="text-green-400 text-xs font-mono whitespace-pre">{method.example}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Type Definitions */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{getTranslation(locale, content.typeDefinitions)}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {getTranslation(locale, content.typeDefinitionsSubtitle)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {typeDefinitions.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{getTranslation(locale, type.description)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {type.properties.map((prop, propIndex) => (
                    <div key={propIndex} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <code className="text-sm font-mono text-blue-600">{prop.name}</code>
                          <span className="text-xs text-gray-500 ml-2">{prop.type}</span>
                        </div>
                        {prop.required && (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                            {locale === 'zh' ? '必需' : locale === 'hi' ? 'आवश्यक' : locale === 'fr' ? 'requis' : locale === 'de' ? 'erforderlich' : locale === 'ja' ? '必須' : locale === 'ko' ? '필수' : locale === 'es' ? 'requerido' : locale === 'ru' ? 'обязательно' : 'required'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{getTranslation(locale, prop.description)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{getTranslation(locale, content.usageExamples)}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {getTranslation(locale, content.usageExamplesSubtitle)}
            </p>
          </div>

          <div className="space-y-8">
            {usageExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{getTranslation(locale, example.title)}</h3>
                <p className="text-gray-600 text-sm mb-4">{getTranslation(locale, example.description)}</p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{example.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Error Handling */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{getTranslation(locale, content.errorHandling)}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {getTranslation(locale, content.errorHandlingSubtitle)}
            </p>
          </div>

          <div className="space-y-6">
            {errorHandling.map((error, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{error.name}</h3>
                    <p className="text-gray-700 mb-3">{getTranslation(locale, error.description)}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <code className="text-sm text-gray-800">{error.code}</code>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-green-800 mb-1">
                        {locale === 'zh' ? '解决方案:' : locale === 'hi' ? 'समाधान:' : locale === 'fr' ? 'Solution:' : locale === 'de' ? 'Lösung:' : locale === 'ja' ? '解決策:' : locale === 'ko' ? '해결책:' : locale === 'es' ? 'Solución:' : locale === 'ru' ? 'Решение:' : 'Solution:'}
                      </h4>
                      <p className="text-sm text-green-700">{getTranslation(locale, error.solution)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{getTranslation(locale, content.nextSteps)}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {getTranslation(locale, content.nextStepsSubtitle)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/development-setup`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                {locale === 'zh' ? '开发设置' : locale === 'hi' ? 'विकास सेटअप' : locale === 'fr' ? 'Configuration de Développement' : locale === 'de' ? 'Entwicklungssetup' : locale === 'ja' ? '開発セットアップ' : locale === 'ko' ? '개발 설정' : locale === 'es' ? 'Configuración de Desarrollo' : locale === 'ru' ? 'Настройка разработки' : 'Development Setup'}
              </Link>
              <Link
                href={`/${locale}/docs/project-structure`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {locale === 'zh' ? '项目结构' : locale === 'hi' ? 'प्रोजेक्ट संरचना' : locale === 'fr' ? 'Structure du Projet' : locale === 'de' ? 'Projektstruktur' : locale === 'ja' ? 'プロジェクト構造' : locale === 'ko' ? '프로젝트 구조' : locale === 'es' ? 'Estructura del Proyecto' : locale === 'ru' ? 'Структура проекта' : 'Project Structure'}
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '返回文档' : locale === 'hi' ? 'दस्तावेज़ीकरण पर वापस जाएं' : locale === 'fr' ? 'Retour à la Documentation' : locale === 'de' ? 'Zurück zur Dokumentation' : locale === 'ja' ? 'ドキュメントに戻る' : locale === 'ko' ? '문서로 돌아가기' : locale === 'es' ? 'Volver a la Documentación' : locale === 'ru' ? 'Назад к документации' : 'Back to Documentation'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'hi' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'es' },
    { locale: 'ru' }
  ]
}
