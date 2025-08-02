import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { isValidLocale, locales } from '@/i18n/config'
import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CogIcon,
  KeyIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

interface ConfigApiPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ConfigApiPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '配置 API 文档 - Gemini CLI 开发者文档',
    en: 'Configuration API Documentation - Gemini CLI Developer Documentation',
    hi: 'कॉन्फ़िगरेशन API दस्तावेज़ीकरण - Gemini CLI डेवलपर दस्तावेज़ीकरण',
    fr: 'Documentation API de Configuration - Documentation Développeur Gemini CLI',
    de: 'Konfigurations-API-Dokumentation - Gemini CLI Entwicklerdokumentation',
    ja: '設定 API ドキュメント - Gemini CLI 開発者ドキュメント',
    ko: '구성 API 문서 - Gemini CLI 개발자 문서',
    es: 'Documentación API de Configuración - Documentación para Desarrolladores Gemini CLI',
    ru: 'Документация API Конфигурации - Документация для Разработчиков Gemini CLI'
  }

  const descriptions = {
    zh: '详细的 Gemini CLI 配置管理 API 文档，包括配置文件格式、环境变量、动态配置和安全设置。',
    en: 'Comprehensive Gemini CLI configuration management API documentation, including configuration file formats, environment variables, dynamic configuration, and security settings.',
    hi: 'कॉन्फ़िगरेशन फ़ाइल प्रारूप, पर्यावरण चर, गतिशील कॉन्फ़िगरेशन और सुरक्षा सेटिंग्स सहित व्यापक Gemini CLI कॉन्फ़िगरेशन प्रबंधन API दस्तावेज़ीकरण।',
    fr: 'Documentation complète de l\'API de gestion de configuration Gemini CLI, incluant les formats de fichiers de configuration, les variables d\'environnement, la configuration dynamique et les paramètres de sécurité.',
    de: 'Umfassende Gemini CLI-Konfigurationsverwaltungs-API-Dokumentation, einschließlich Konfigurationsdateiformaten, Umgebungsvariablen, dynamischer Konfiguration und Sicherheitseinstellungen.',
    ja: '設定ファイル形式、環境変数、動的設定、セキュリティ設定を含む包括的なGemini CLI設定管理APIドキュメント。',
    ko: '구성 파일 형식, 환경 변수, 동적 구성 및 보안 설정을 포함한 포괄적인 Gemini CLI 구성 관리 API 문서.',
    es: 'Documentación completa de la API de gestión de configuración de Gemini CLI, incluyendo formatos de archivos de configuración, variables de entorno, configuración dinámica y configuraciones de seguridad.',
    ru: 'Полная документация API управления конфигурацией Gemini CLI, включая форматы конфигурационных файлов, переменные окружения, динамическую конфигурацию и настройки безопасности.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 配置 API, 配置管理, TOML 配置, 环境变量, 动态配置' : 'Gemini CLI configuration API, configuration management, TOML configuration, environment variables, dynamic configuration',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const getDefaultContent = () => ({
  nextStepsTitle: 'Continue Learning',
  nextStepsDescription: 'Explore MCP protocol and extension development',
  nextStepsLinks: [
    { href: '/docs/mcp-introduction', text: 'MCP Protocol Introduction' },
    { href: '/docs/extension-architecture', text: 'Extension Architecture' },
    { href: '/docs', text: 'Back to Documentation' }
  ],
  usageExamples: [
    {
      title: 'Basic Configuration Operations',
      description: 'Reading and setting configuration values',
      code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// Get configuration values
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// Set configuration values
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// Save configuration
await config.save()`
    }
  ],
  securityConsiderations: [
    {
      title: 'API Key Security',
      description: 'Best practices for protecting API keys',
      practices: [
        'Use environment variables to store API keys',
        'Avoid hardcoding keys in configuration files',
        'Set appropriate file permissions (600)',
        'Regularly rotate API keys'
      ]
    }
  ],
  validationExample: `// Configuration validation rules
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    }
  }
}`
})

const getContent = (locale: string) => {
  if (locale === 'zh') {
    return {
      title: '配置 API 文档',
      subtitle: '完整的配置管理 API 参考文档',
      readingTime: '25 分钟阅读',
      configManagement: '配置管理',
      hierarchyTitle: '配置层次结构',
      hierarchyDescription: 'Gemini CLI 使用分层配置系统，支持多种配置源和动态更新',
      hierarchy: [
        { level: 1, source: '默认配置', priority: '最低', description: '内置的默认配置值' },
        { level: 2, source: '全局配置文件', priority: '低', description: '~/.gemini/config.toml' },
        { level: 3, source: '项目配置文件', priority: '中', description: './gemini.toml 或 ./.gemini/config.toml' },
        { level: 4, source: '环境变量', priority: '高', description: 'GEMINI_* 前缀的环境变量' },
        { level: 5, source: '命令行参数', priority: '最高', description: '运行时传入的参数' }
      ],
      priorityText: '优先级',
      configOptionsTitle: '配置选项',
      configOptionsDescription: '详细的配置选项说明',
      configSections: [
        {
          section: 'api',
          description: 'Gemini API 相关配置',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Google AI API 密钥' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: '默认使用的模型' },
            { name: 'temperature', type: 'number', default: 0.7, description: '生成温度 (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: '最大令牌数' },
            { name: 'timeout', type: 'number', default: 30000, description: '请求超时时间 (毫秒)' }
          ]
        },
        {
          section: 'session',
          description: '会话管理配置',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: '自动保存会话' },
            { name: 'max_history', type: 'number', default: 100, description: '最大历史消息数' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: '会话存储路径' },
            { name: 'compression', type: 'boolean', default: true, description: '启用会话压缩' }
          ]
        },
        {
          section: 'context',
          description: '上下文处理配置',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: '最大文件数量' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: '单文件最大大小' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: '排除文件模式' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: '自动检测编程语言' }
          ]
        },
        {
          section: 'plugins',
          description: '插件系统配置',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: '启用插件系统' },
            { name: 'auto_load', type: 'boolean', default: true, description: '自动加载插件' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: '插件搜索路径' },
            { name: 'security_mode', type: 'string', default: 'strict', description: '安全模式 (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: '选项',
        type: '类型',
        default: '默认值',
        description: '说明'
      },
      required: '必需',
      configExampleTitle: '配置文件示例',
      configExampleDescription: '完整的 TOML 配置文件示例',
      configApiTitle: '配置 API 接口',
      configApiDescription: 'ConfigManager 类的接口定义',
      envVarsTitle: '环境变量',
      envVarsDescription: '支持的环境变量列表',
      exampleText: '示例：',
      correspondingConfig: '对应配置：',
      usageExamplesTitle: '使用示例',
      usageExamplesDescription: '配置管理的实际应用示例',
      securityTitle: '安全考虑',
      securityDescription: '配置安全的最佳实践',
      validationTitle: '配置验证',
      validationDescription: '配置验证规则和实现',
      nextStepsTitle: '继续学习',
      nextStepsDescription: '探索 MCP 协议和扩展开发',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'MCP 协议介绍' },
        { href: `/${locale}/docs/extension-architecture`, text: '扩展架构' },
        { href: `/${locale}/docs`, text: '返回文档首页' }
      ],
      configExample: `# Gemini CLI 配置文件 (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // 获取配置值
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // 设置配置值
  set(key: string, value: any): void

  // 删除配置项
  delete(key: string): void

  // 检查配置项是否存在
  has(key: string): boolean

  // 获取所有配置
  getAll(): Record<string, any>

  // 重新加载配置
  reload(): Promise<void>

  // 保存配置到文件
  save(): Promise<void>

  // 监听配置变化
  watch(key: string, callback: (value: any) => void): void

  // 取消监听
  unwatch(key: string, callback?: (value: any) => void): void

  // 验证配置
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Google AI API 密钥',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: '默认模型名称',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: '生成温度',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: '配置文件路径',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: '日志级别',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: '插件路径',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: '基本配置操作',
          description: '读取和设置配置值',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// 获取配置值
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// 设置配置值
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// 保存配置
await config.save()`
        },
        {
          title: '配置监听',
          description: '监听配置变化',
          code: `// 监听 API 密钥变化
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // 重新初始化客户端
  reinitializeClient(newKey)
})

// 监听模型变化
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: '配置验证',
          description: '验证配置的有效性',
          code: `// 验证配置
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: '动态配置更新',
          description: '运行时更新配置',
          code: `// 动态更新配置
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // 验证新配置
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // 保存配置
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'API 密钥安全',
          description: '保护 API 密钥的最佳实践',
          practices: [
            '使用环境变量存储 API 密钥',
            '避免在配置文件中硬编码密钥',
            '设置适当的文件权限 (600)',
            '定期轮换 API 密钥'
          ]
        },
        {
          title: '配置文件权限',
          description: '配置文件的安全设置',
          practices: [
            '设置配置文件为只读 (chmod 600)',
            '避免在版本控制中提交敏感配置',
            '使用 .gitignore 排除配置文件',
            '定期审查配置文件内容'
          ]
        },
        {
          title: '插件安全',
          description: '插件配置的安全考虑',
          practices: [
            '启用严格安全模式',
            '验证插件来源和签名',
            '限制插件权限范围',
            '定期更新插件版本'
          ]
        }
      ],
      validationExample: `// 配置验证规则
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// 验证配置
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // 验证 API 配置
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  // Add default content for missing properties
  const defaults = getDefaultContent()
  const content = getContentForLocale(locale)

  return {
    ...content,
    nextStepsTitle: content.nextStepsTitle || defaults.nextStepsTitle,
    nextStepsDescription: content.nextStepsDescription || defaults.nextStepsDescription,
    nextStepsLinks: content.nextStepsLinks || defaults.nextStepsLinks,
    usageExamples: content.usageExamples || defaults.usageExamples,
    securityConsiderations: content.securityConsiderations || defaults.securityConsiderations,
    validationExample: content.validationExample || defaults.validationExample
  }
}

function getContentForLocale(locale: string) {

  if (locale === 'ru') {
    return {
      title: 'Документация API Конфигурации',
      subtitle: 'Полная справочная документация API управления конфигурацией',
      readingTime: '25 мин чтения',
      configManagement: 'Управление Конфигурацией',
      hierarchyTitle: 'Иерархия Конфигурации',
      hierarchyDescription: 'Gemini CLI использует иерархическую систему конфигурации, которая поддерживает множественные источники конфигурации и динамические обновления',
      hierarchy: [
        { level: 1, source: 'Конфигурация по Умолчанию', priority: 'Самый низкий', description: 'Встроенные значения конфигурации по умолчанию' },
        { level: 2, source: 'Глобальный Файл Конфигурации', priority: 'Низкий', description: '~/.gemini/config.toml' },
        { level: 3, source: 'Файл Конфигурации Проекта', priority: 'Средний', description: './gemini.toml или ./.gemini/config.toml' },
        { level: 4, source: 'Переменные Окружения', priority: 'Высокий', description: 'Переменные окружения с префиксом GEMINI_*' },
        { level: 5, source: 'Аргументы Командной Строки', priority: 'Самый высокий', description: 'Аргументы времени выполнения, переданные команде' }
      ],
      priorityText: 'Приоритет',
      configOptionsTitle: 'Опции Конфигурации',
      configOptionsDescription: 'Подробное описание опций конфигурации',
      configSections: [
        {
          section: 'api',
          description: 'Конфигурация, связанная с Gemini API',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Ключ Google AI API' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: 'Модель по умолчанию для использования' },
            { name: 'temperature', type: 'number', default: 0.7, description: 'Температура генерации (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: 'Максимальное количество токенов' },
            { name: 'timeout', type: 'number', default: 30000, description: 'Таймаут запроса в миллисекундах' }
          ]
        },
        {
          section: 'session',
          description: 'Конфигурация управления сессиями',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: 'Автоматически сохранять сессии' },
            { name: 'max_history', type: 'number', default: 100, description: 'Максимальное количество сообщений в истории' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: 'Путь хранения сессий' },
            { name: 'compression', type: 'boolean', default: true, description: 'Включить сжатие сессий' }
          ]
        },
        {
          section: 'context',
          description: 'Конфигурация обработки контекста',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: 'Максимальное количество файлов' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: 'Максимальный размер файла' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: 'Шаблоны исключения файлов' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: 'Автоматически определять язык программирования' }
          ]
        },
        {
          section: 'plugins',
          description: 'Конфигурация системы плагинов',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: 'Включить систему плагинов' },
            { name: 'auto_load', type: 'boolean', default: true, description: 'Автоматически загружать плагины' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: 'Пути поиска плагинов' },
            { name: 'security_mode', type: 'string', default: 'strict', description: 'Режим безопасности (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: 'Опция',
        type: 'Тип',
        default: 'По умолчанию',
        description: 'Описание'
      },
      required: 'Обязательно',
      configExampleTitle: 'Пример Файла Конфигурации',
      configExampleDescription: 'Полный пример файла конфигурации TOML',
      configApiTitle: 'Интерфейс API Конфигурации',
      configApiDescription: 'Определение интерфейса класса ConfigManager',
      envVarsTitle: 'Переменные Окружения',
      envVarsDescription: 'Список поддерживаемых переменных окружения',
      exampleText: 'Пример:',
      correspondingConfig: 'Соответствующая Конфигурация:',
      usageExamplesTitle: 'Примеры Использования',
      usageExamplesDescription: 'Практические примеры применения управления конфигурацией',
      securityTitle: 'Соображения Безопасности',
      securityDescription: 'Лучшие практики для безопасности конфигурации',
      validationTitle: 'Валидация Конфигурации',
      validationDescription: 'Правила валидации конфигурации и реализация',
      nextStepsTitle: 'Продолжить Обучение',
      nextStepsDescription: 'Изучить протокол MCP и разработку расширений',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'Введение в Протокол MCP' },
        { href: `/${locale}/docs/extension-architecture`, text: 'Архитектура Расширений' },
        { href: `/${locale}/docs`, text: 'Назад к Документации' }
      ],
      configExample: `# Файл Конфигурации Gemini CLI (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // Получить значение конфигурации
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // Установить значение конфигурации
  set(key: string, value: any): void

  // Удалить элемент конфигурации
  delete(key: string): void

  // Проверить, существует ли элемент конфигурации
  has(key: string): boolean

  // Получить все конфигурации
  getAll(): Record<string, any>

  // Перезагрузить конфигурацию
  reload(): Promise<void>

  // Сохранить конфигурацию в файл
  save(): Promise<void>

  // Отслеживать изменения конфигурации
  watch(key: string, callback: (value: any) => void): void

  // Прекратить отслеживание изменений конфигурации
  unwatch(key: string, callback?: (value: any) => void): void

  // Валидировать конфигурацию
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Ключ Google AI API',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: 'Имя модели по умолчанию',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: 'Температура генерации',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: 'Путь к файлу конфигурации',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: 'Уровень логирования',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: 'Путь к плагинам',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: 'Основные Операции Конфигурации',
          description: 'Чтение и установка значений конфигурации',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// Получить значения конфигурации
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// Установить значения конфигурации
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// Сохранить конфигурацию
await config.save()`
        },
        {
          title: 'Отслеживание Конфигурации',
          description: 'Прослушивание изменений конфигурации',
          code: `// Отслеживать изменения API ключа
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // Переинициализировать клиент
  reinitializeClient(newKey)
})

// Отслеживать изменения модели
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: 'Валидация Конфигурации',
          description: 'Проверка действительности конфигурации',
          code: `// Валидировать конфигурацию
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: 'Динамические Обновления Конфигурации',
          description: 'Обновления конфигурации во время выполнения',
          code: `// Динамическое обновление конфигурации
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // Валидировать новую конфигурацию
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // Сохранить конфигурацию
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'Безопасность API Ключей',
          description: 'Лучшие практики для защиты API ключей',
          practices: [
            'Использовать переменные окружения для хранения API ключей',
            'Избегать жесткого кодирования ключей в файлах конфигурации',
            'Устанавливать соответствующие права доступа к файлам (600)',
            'Регулярно ротировать API ключи'
          ]
        },
        {
          title: 'Права Доступа к Файлам Конфигурации',
          description: 'Настройки безопасности для файлов конфигурации',
          practices: [
            'Устанавливать файлы конфигурации только для чтения (chmod 600)',
            'Избегать коммита чувствительных конфигураций в систему контроля версий',
            'Использовать .gitignore для исключения файлов конфигурации',
            'Регулярно проверять содержимое файлов конфигурации'
          ]
        },
        {
          title: 'Безопасность Плагинов',
          description: 'Соображения безопасности для конфигурации плагинов',
          practices: [
            'Включить строгий режим безопасности',
            'Проверять источники и подписи плагинов',
            'Ограничивать область разрешений плагинов',
            'Регулярно обновлять версии плагинов'
          ]
        }
      ],
      validationExample: `// Правила валидации конфигурации
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// Валидировать конфигурацию
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // Валидировать API конфигурацию
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  if (locale === 'hi') {
    return {
      title: 'कॉन्फ़िगरेशन API दस्तावेज़ीकरण',
      subtitle: 'पूर्ण कॉन्फ़िगरेशन प्रबंधन API संदर्भ दस्तावेज़ीकरण',
      readingTime: '25 मिनट पढ़ना',
      configManagement: 'कॉन्फ़िगरेशन प्रबंधन',
      hierarchyTitle: 'कॉन्फ़िगरेशन पदानुक्रम',
      hierarchyDescription: 'Gemini CLI एक पदानुक्रमित कॉन्फ़िगरेशन सिस्टम का उपयोग करता है जो कई कॉन्फ़िगरेशन स्रोतों और गतिशील अपडेट का समर्थन करता है',
      hierarchy: [
        { level: 1, source: 'डिफ़ॉल्ट कॉन्फ़िगरेशन', priority: 'सबसे कम', description: 'अंतर्निहित डिफ़ॉल्ट कॉन्फ़िगरेशन मान' },
        { level: 2, source: 'ग्लोबल कॉन्फ़िग फ़ाइल', priority: 'कम', description: '~/.gemini/config.toml' },
        { level: 3, source: 'प्रोजेक्ट कॉन्फ़िग फ़ाइल', priority: 'मध्यम', description: './gemini.toml या ./.gemini/config.toml' },
        { level: 4, source: 'पर्यावरण चर', priority: 'उच्च', description: 'GEMINI_* उपसर्ग वाले पर्यावरण चर' },
        { level: 5, source: 'कमांड लाइन तर्क', priority: 'सबसे अधिक', description: 'कमांड को पास किए गए रनटाइम तर्क' }
      ],
      priorityText: 'प्राथमिकता',
      configOptionsTitle: 'कॉन्फ़िगरेशन विकल्प',
      configOptionsDescription: 'विस्तृत कॉन्फ़िगरेशन विकल्प विवरण',
      configSections: [
        {
          section: 'api',
          description: 'Gemini API संबंधित कॉन्फ़िगरेशन',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Google AI API कुंजी' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: 'उपयोग करने के लिए डिफ़ॉल्ट मॉडल' },
            { name: 'temperature', type: 'number', default: 0.7, description: 'जेनरेशन तापमान (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: 'टोकन की अधिकतम संख्या' },
            { name: 'timeout', type: 'number', default: 30000, description: 'मिलीसेकंड में अनुरोध टाइमआउट' }
          ]
        },
        {
          section: 'session',
          description: 'सत्र प्रबंधन कॉन्फ़िगरेशन',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: 'स्वचालित रूप से सत्र सहेजें' },
            { name: 'max_history', type: 'number', default: 100, description: 'इतिहास संदेशों की अधिकतम संख्या' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: 'सत्र भंडारण पथ' },
            { name: 'compression', type: 'boolean', default: true, description: 'सत्र संपीड़न सक्षम करें' }
          ]
        },
        {
          section: 'context',
          description: 'संदर्भ प्रसंस्करण कॉन्फ़िगरेशन',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: 'फ़ाइलों की अधिकतम संख्या' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: 'प्रति फ़ाइल अधिकतम फ़ाइल आकार' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: 'फ़ाइल बहिष्करण पैटर्न' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: 'स्वचालित रूप से प्रोग्रामिंग भाषा का पता लगाएं' }
          ]
        },
        {
          section: 'plugins',
          description: 'प्लगइन सिस्टम कॉन्फ़िगरेशन',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: 'प्लगइन सिस्टम सक्षम करें' },
            { name: 'auto_load', type: 'boolean', default: true, description: 'स्वचालित रूप से प्लगइन्स लोड करें' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: 'प्लगइन खोज पथ' },
            { name: 'security_mode', type: 'string', default: 'strict', description: 'सुरक्षा मोड (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: 'विकल्प',
        type: 'प्रकार',
        default: 'डिफ़ॉल्ट',
        description: 'विवरण'
      },
      required: 'आवश्यक',
      configExampleTitle: 'कॉन्फ़िगरेशन फ़ाइल उदाहरण',
      configExampleDescription: 'पूर्ण TOML कॉन्फ़िगरेशन फ़ाइल उदाहरण',
      configApiTitle: 'कॉन्फ़िगरेशन API इंटरफ़ेस',
      configApiDescription: 'ConfigManager क्लास इंटरफ़ेस परिभाषा',
      envVarsTitle: 'पर्यावरण चर',
      envVarsDescription: 'समर्थित पर्यावरण चर की सूची',
      exampleText: 'उदाहरण:',
      correspondingConfig: 'संबंधित कॉन्फ़िग:',
      usageExamplesTitle: 'उपयोग उदाहरण',
      usageExamplesDescription: 'कॉन्फ़िगरेशन प्रबंधन के व्यावहारिक अनुप्रयोग उदाहरण',
      securityTitle: 'सुरक्षा विचार',
      securityDescription: 'कॉन्फ़िगरेशन सुरक्षा के लिए सर्वोत्तम प्रथाएं',
      validationTitle: 'कॉन्फ़िगरेशन सत्यापन',
      validationDescription: 'कॉन्फ़िगरेशन सत्यापन नियम और कार्यान्वयन',
      nextStepsTitle: 'सीखना जारी रखें',
      nextStepsDescription: 'MCP प्रोटोकॉल और एक्सटेंशन विकास का अन्वेषण करें',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'MCP प्रोटोकॉल परिचय' },
        { href: `/${locale}/docs/extension-architecture`, text: 'एक्सटेंशन आर्किटेक्चर' },
        { href: `/${locale}/docs`, text: 'दस्तावेज़ीकरण पर वापस जाएं' }
      ],
      configExample: `# Gemini CLI कॉन्फ़िगरेशन फ़ाइल (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // कॉन्फ़िगरेशन मान प्राप्त करें
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // कॉन्फ़िगरेशन मान सेट करें
  set(key: string, value: any): void

  // कॉन्फ़िगरेशन आइटम हटाएं
  delete(key: string): void

  // जांचें कि कॉन्फ़िगरेशन आइटम मौजूद है या नहीं
  has(key: string): boolean

  // सभी कॉन्फ़िगरेशन प्राप्त करें
  getAll(): Record<string, any>

  // कॉन्फ़िगरेशन पुनः लोड करें
  reload(): Promise<void>

  // कॉन्फ़िगरेशन को फ़ाइल में सहेजें
  save(): Promise<void>

  // कॉन्फ़िगरेशन परिवर्तन देखें
  watch(key: string, callback: (value: any) => void): void

  // कॉन्फ़िगरेशन परिवर्तन देखना बंद करें
  unwatch(key: string, callback?: (value: any) => void): void

  // कॉन्फ़िगरेशन सत्यापित करें
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Google AI API कुंजी',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: 'डिफ़ॉल्ट मॉडल नाम',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: 'जेनरेशन तापमान',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: 'कॉन्फ़िगरेशन फ़ाइल पथ',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: 'लॉग स्तर',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: 'प्लगइन पथ',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: 'बुनियादी कॉन्फ़िगरेशन ऑपरेशन',
          description: 'कॉन्फ़िगरेशन मान पढ़ना और सेट करना',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// कॉन्फ़िगरेशन मान प्राप्त करें
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// कॉन्फ़िगरेशन मान सेट करें
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// कॉन्फ़िगरेशन सहेजें
await config.save()`
        },
        {
          title: 'कॉन्फ़िगरेशन निगरानी',
          description: 'कॉन्फ़िगरेशन परिवर्तनों को सुनना',
          code: `// API कुंजी परिवर्तन देखें
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // क्लाइंट को पुनः आरंभ करें
  reinitializeClient(newKey)
})

// मॉडल परिवर्तन देखें
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: 'कॉन्फ़िगरेशन सत्यापन',
          description: 'कॉन्फ़िगरेशन की वैधता का सत्यापन',
          code: `// कॉन्फ़िगरेशन सत्यापित करें
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: 'गतिशील कॉन्फ़िगरेशन अपडेट',
          description: 'रनटाइम कॉन्फ़िगरेशन अपडेट',
          code: `// गतिशील कॉन्फ़िगरेशन अपडेट
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // नई कॉन्फ़िगरेशन सत्यापित करें
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // कॉन्फ़िगरेशन सहेजें
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'API कुंजी सुरक्षा',
          description: 'API कुंजियों की सुरक्षा के लिए सर्वोत्तम प्रथाएं',
          practices: [
            'API कुंजियों को संग्रहीत करने के लिए पर्यावरण चर का उपयोग करें',
            'कॉन्फ़िगरेशन फ़ाइलों में कुंजियों को हार्डकोड करने से बचें',
            'उपयुक्त फ़ाइल अनुमतियां सेट करें (600)',
            'नियमित रूप से API कुंजियों को रोटेट करें'
          ]
        },
        {
          title: 'कॉन्फ़िगरेशन फ़ाइल अनुमतियां',
          description: 'कॉन्फ़िगरेशन फ़ाइलों के लिए सुरक्षा सेटिंग्स',
          practices: [
            'कॉन्फ़िगरेशन फ़ाइलों को केवल पढ़ने के लिए सेट करें (chmod 600)',
            'संवेदनशील कॉन्फ़िगरेशन को संस्करण नियंत्रण में कमिट करने से बचें',
            'कॉन्फ़िगरेशन फ़ाइलों को बाहर करने के लिए .gitignore का उपयोग करें',
            'नियमित रूप से कॉन्फ़िगरेशन फ़ाइल सामग्री की समीक्षा करें'
          ]
        },
        {
          title: 'प्लगइन सुरक्षा',
          description: 'प्लगइन कॉन्फ़िगरेशन के लिए सुरक्षा विचार',
          practices: [
            'सख्त सुरक्षा मोड सक्षम करें',
            'प्लगइन स्रोतों और हस्ताक्षरों को सत्यापित करें',
            'प्लगइन अनुमति दायरे को सीमित करें',
            'नियमित रूप से प्लगइन संस्करणों को अपडेट करें'
          ]
        }
      ],
      validationExample: `// कॉन्फ़िगरेशन सत्यापन नियम
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// कॉन्फ़िगरेशन सत्यापित करें
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // API कॉन्फ़िगरेशन सत्यापित करें
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  if (locale === 'de') {
    return {
      title: 'Konfigurations-API-Dokumentation',
      subtitle: 'Vollständige Referenzdokumentation für die Konfigurationsverwaltungs-API',
      readingTime: '25 Min. Lesezeit',
      configManagement: 'Konfigurationsverwaltung',
      hierarchyTitle: 'Konfigurationshierarchie',
      hierarchyDescription: 'Gemini CLI verwendet ein hierarchisches Konfigurationssystem, das mehrere Konfigurationsquellen und dynamische Updates unterstützt',
      hierarchy: [
        { level: 1, source: 'Standardkonfiguration', priority: 'Niedrigste', description: 'Eingebaute Standard-Konfigurationswerte' },
        { level: 2, source: 'Globale Konfigurationsdatei', priority: 'Niedrig', description: '~/.gemini/config.toml' },
        { level: 3, source: 'Projekt-Konfigurationsdatei', priority: 'Mittel', description: './gemini.toml oder ./.gemini/config.toml' },
        { level: 4, source: 'Umgebungsvariablen', priority: 'Hoch', description: 'Umgebungsvariablen mit GEMINI_* Präfix' },
        { level: 5, source: 'Kommandozeilenargumente', priority: 'Höchste', description: 'Laufzeit-Argumente, die an den Befehl übergeben werden' }
      ],
      priorityText: 'Priorität',
      configOptionsTitle: 'Konfigurationsoptionen',
      configOptionsDescription: 'Detaillierte Beschreibung der Konfigurationsoptionen',
      configSections: [
        {
          section: 'api',
          description: 'Gemini API-bezogene Konfiguration',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Google AI API-Schlüssel' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: 'Standardmodell zur Verwendung' },
            { name: 'temperature', type: 'number', default: 0.7, description: 'Generierungstemperatur (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: 'Maximale Anzahl von Token' },
            { name: 'timeout', type: 'number', default: 30000, description: 'Anfrage-Timeout in Millisekunden' }
          ]
        },
        {
          section: 'session',
          description: 'Sitzungsverwaltungskonfiguration',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: 'Sitzungen automatisch speichern' },
            { name: 'max_history', type: 'number', default: 100, description: 'Maximale Anzahl von Verlaufsnachrichten' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: 'Sitzungsspeicherpfad' },
            { name: 'compression', type: 'boolean', default: true, description: 'Sitzungskomprimierung aktivieren' }
          ]
        },
        {
          section: 'context',
          description: 'Kontextverarbeitungskonfiguration',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: 'Maximale Anzahl von Dateien' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: 'Maximale Dateigröße pro Datei' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: 'Dateiausschlussmuster' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: 'Programmiersprache automatisch erkennen' }
          ]
        },
        {
          section: 'plugins',
          description: 'Plugin-Systemkonfiguration',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: 'Plugin-System aktivieren' },
            { name: 'auto_load', type: 'boolean', default: true, description: 'Plugins automatisch laden' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: 'Plugin-Suchpfade' },
            { name: 'security_mode', type: 'string', default: 'strict', description: 'Sicherheitsmodus (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: 'Option',
        type: 'Typ',
        default: 'Standard',
        description: 'Beschreibung'
      },
      required: 'Erforderlich',
      configExampleTitle: 'Konfigurationsdatei-Beispiel',
      configExampleDescription: 'Vollständiges TOML-Konfigurationsdatei-Beispiel',
      configApiTitle: 'Konfigurations-API-Schnittstelle',
      configApiDescription: 'ConfigManager-Klassen-Schnittstellendefinition',
      envVarsTitle: 'Umgebungsvariablen',
      envVarsDescription: 'Liste der unterstützten Umgebungsvariablen',
      exampleText: 'Beispiel:',
      correspondingConfig: 'Entsprechende Konfiguration:',
      usageExamplesTitle: 'Verwendungsbeispiele',
      usageExamplesDescription: 'Praktische Anwendungsbeispiele der Konfigurationsverwaltung',
      securityTitle: 'Sicherheitsüberlegungen',
      securityDescription: 'Best Practices für Konfigurationssicherheit',
      validationTitle: 'Konfigurationsvalidierung',
      validationDescription: 'Konfigurationsvalidierungsregeln und -implementierung',
      nextStepsTitle: 'Weiterlernen',
      nextStepsDescription: 'MCP-Protokoll und Erweiterungsentwicklung erkunden',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'MCP-Protokoll-Einführung' },
        { href: `/${locale}/docs/extension-architecture`, text: 'Erweiterungsarchitektur' },
        { href: `/${locale}/docs`, text: 'Zurück zur Dokumentation' }
      ],
      configExample: `# Gemini CLI Konfigurationsdatei (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // Konfigurationswert abrufen
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // Konfigurationswert setzen
  set(key: string, value: any): void

  // Konfigurationselement löschen
  delete(key: string): void

  // Prüfen, ob Konfigurationselement existiert
  has(key: string): boolean

  // Alle Konfigurationen abrufen
  getAll(): Record<string, any>

  // Konfiguration neu laden
  reload(): Promise<void>

  // Konfiguration in Datei speichern
  save(): Promise<void>

  // Konfigurationsänderungen überwachen
  watch(key: string, callback: (value: any) => void): void

  // Konfigurationsänderungen nicht mehr überwachen
  unwatch(key: string, callback?: (value: any) => void): void

  // Konfiguration validieren
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Google AI API-Schlüssel',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: 'Standard-Modellname',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: 'Generierungstemperatur',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: 'Konfigurationsdateipfad',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: 'Log-Level',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: 'Plugin-Pfad',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: 'Grundlegende Konfigurationsoperationen',
          description: 'Konfigurationswerte lesen und setzen',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// Konfigurationswerte abrufen
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// Konfigurationswerte setzen
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// Konfiguration speichern
await config.save()`
        },
        {
          title: 'Konfigurationsüberwachung',
          description: 'Konfigurationsänderungen überwachen',
          code: `// API-Schlüssel-Änderungen überwachen
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // Client neu initialisieren
  reinitializeClient(newKey)
})

// Modelländerungen überwachen
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: 'Konfigurationsvalidierung',
          description: 'Konfigurationsgültigkeit validieren',
          code: `// Konfiguration validieren
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: 'Dynamische Konfigurationsupdates',
          description: 'Laufzeit-Konfigurationsupdates',
          code: `// Dynamisches Konfigurationsupdate
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // Neue Konfiguration validieren
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // Konfiguration speichern
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'API-Schlüssel-Sicherheit',
          description: 'Best Practices zum Schutz von API-Schlüsseln',
          practices: [
            'Umgebungsvariablen zur Speicherung von API-Schlüsseln verwenden',
            'Vermeiden Sie das Hardcoding von Schlüsseln in Konfigurationsdateien',
            'Angemessene Dateiberechtigungen setzen (600)',
            'API-Schlüssel regelmäßig rotieren'
          ]
        },
        {
          title: 'Konfigurationsdatei-Berechtigungen',
          description: 'Sicherheitseinstellungen für Konfigurationsdateien',
          practices: [
            'Konfigurationsdateien auf schreibgeschützt setzen (chmod 600)',
            'Vermeiden Sie das Committen sensibler Konfigurationen in die Versionskontrolle',
            'Verwenden Sie .gitignore zum Ausschließen von Konfigurationsdateien',
            'Regelmäßige Überprüfung der Konfigurationsdateiinhalte'
          ]
        },
        {
          title: 'Plugin-Sicherheit',
          description: 'Sicherheitsüberlegungen für Plugin-Konfiguration',
          practices: [
            'Strengen Sicherheitsmodus aktivieren',
            'Plugin-Quellen und -Signaturen verifizieren',
            'Plugin-Berechtigungsbereich begrenzen',
            'Plugin-Versionen regelmäßig aktualisieren'
          ]
        }
      ],
      validationExample: `// Konfigurationsvalidierungsregeln
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// Konfiguration validieren
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // API-Konfiguration validieren
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  if (locale === 'fr') {
    return {
      title: 'Documentation API de Configuration',
      subtitle: 'Documentation de référence complète de l\'API de gestion de configuration',
      readingTime: '25 min de lecture',
      configManagement: 'Gestion de Configuration',
      hierarchyTitle: 'Hiérarchie de Configuration',
      hierarchyDescription: 'Gemini CLI utilise un système de configuration hiérarchique qui prend en charge plusieurs sources de configuration et des mises à jour dynamiques',
      hierarchy: [
        { level: 1, source: 'Configuration par Défaut', priority: 'Le plus bas', description: 'Valeurs de configuration par défaut intégrées' },
        { level: 2, source: 'Fichier de Configuration Global', priority: 'Bas', description: '~/.gemini/config.toml' },
        { level: 3, source: 'Fichier de Configuration de Projet', priority: 'Moyen', description: './gemini.toml ou ./.gemini/config.toml' },
        { level: 4, source: 'Variables d\'Environnement', priority: 'Élevé', description: 'Variables d\'environnement avec le préfixe GEMINI_*' },
        { level: 5, source: 'Arguments de Ligne de Commande', priority: 'Le plus élevé', description: 'Arguments d\'exécution passés à la commande' }
      ],
      priorityText: 'Priorité',
      configOptionsTitle: 'Options de Configuration',
      configOptionsDescription: 'Description détaillée des options de configuration',
      configSections: [
        {
          section: 'api',
          description: 'Configuration liée à l\'API Gemini',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Clé API Google AI' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: 'Modèle par défaut à utiliser' },
            { name: 'temperature', type: 'number', default: 0.7, description: 'Température de génération (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: 'Nombre maximum de tokens' },
            { name: 'timeout', type: 'number', default: 30000, description: 'Timeout de requête en millisecondes' }
          ]
        },
        {
          section: 'session',
          description: 'Configuration de gestion de session',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: 'Sauvegarder automatiquement les sessions' },
            { name: 'max_history', type: 'number', default: 100, description: 'Nombre maximum de messages d\'historique' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: 'Chemin de stockage des sessions' },
            { name: 'compression', type: 'boolean', default: true, description: 'Activer la compression des sessions' }
          ]
        },
        {
          section: 'context',
          description: 'Configuration de traitement du contexte',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: 'Nombre maximum de fichiers' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: 'Taille maximale de fichier par fichier' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: 'Motifs d\'exclusion de fichiers' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: 'Détecter automatiquement le langage de programmation' }
          ]
        },
        {
          section: 'plugins',
          description: 'Configuration du système de plugins',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: 'Activer le système de plugins' },
            { name: 'auto_load', type: 'boolean', default: true, description: 'Charger automatiquement les plugins' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: 'Chemins de recherche des plugins' },
            { name: 'security_mode', type: 'string', default: 'strict', description: 'Mode de sécurité (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: 'Option',
        type: 'Type',
        default: 'Défaut',
        description: 'Description'
      },
      required: 'Requis',
      configExampleTitle: 'Exemple de Fichier de Configuration',
      configExampleDescription: 'Exemple complet de fichier de configuration TOML',
      configApiTitle: 'Interface API de Configuration',
      configApiDescription: 'Définition de l\'interface de la classe ConfigManager',
      envVarsTitle: 'Variables d\'Environnement',
      envVarsDescription: 'Liste des variables d\'environnement supportées',
      exampleText: 'Exemple:',
      correspondingConfig: 'Configuration Correspondante:',
      usageExamplesTitle: 'Exemples d\'Utilisation',
      usageExamplesDescription: 'Exemples d\'application pratique de la gestion de configuration',
      securityTitle: 'Considérations de Sécurité',
      securityDescription: 'Meilleures pratiques pour la sécurité de configuration',
      validationTitle: 'Validation de Configuration',
      validationDescription: 'Règles de validation de configuration et implémentation',
      nextStepsTitle: 'Continuer l\'Apprentissage',
      nextStepsDescription: 'Explorer le protocole MCP et le développement d\'extensions',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'Introduction au Protocole MCP' },
        { href: `/${locale}/docs/extension-architecture`, text: 'Architecture d\'Extension' },
        { href: `/${locale}/docs`, text: 'Retour à la Documentation' }
      ],
      configExample: `# Fichier de Configuration Gemini CLI (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // Obtenir la valeur de configuration
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // Définir la valeur de configuration
  set(key: string, value: any): void

  // Supprimer l'élément de configuration
  delete(key: string): void

  // Vérifier si l'élément de configuration existe
  has(key: string): boolean

  // Obtenir toutes les configurations
  getAll(): Record<string, any>

  // Recharger la configuration
  reload(): Promise<void>

  // Sauvegarder la configuration dans un fichier
  save(): Promise<void>

  // Surveiller les changements de configuration
  watch(key: string, callback: (value: any) => void): void

  // Arrêter de surveiller les changements de configuration
  unwatch(key: string, callback?: (value: any) => void): void

  // Valider la configuration
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Clé API Google AI',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: 'Nom du modèle par défaut',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: 'Température de génération',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: 'Chemin du fichier de configuration',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: 'Niveau de log',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: 'Chemin des plugins',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: 'Opérations de Configuration de Base',
          description: 'Lecture et définition des valeurs de configuration',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// Obtenir les valeurs de configuration
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// Définir les valeurs de configuration
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// Sauvegarder la configuration
await config.save()`
        },
        {
          title: 'Surveillance de Configuration',
          description: 'Écouter les changements de configuration',
          code: `// Surveiller les changements de clé API
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // Réinitialiser le client
  reinitializeClient(newKey)
})

// Surveiller les changements de modèle
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: 'Validation de Configuration',
          description: 'Valider la validité de la configuration',
          code: `// Valider la configuration
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: 'Mises à Jour Dynamiques de Configuration',
          description: 'Mises à jour de configuration à l\'exécution',
          code: `// Mise à jour dynamique de configuration
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // Valider la nouvelle configuration
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // Sauvegarder la configuration
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'Sécurité des Clés API',
          description: 'Meilleures pratiques pour protéger les clés API',
          practices: [
            'Utiliser des variables d\'environnement pour stocker les clés API',
            'Éviter le codage en dur des clés dans les fichiers de configuration',
            'Définir des permissions de fichier appropriées (600)',
            'Faire tourner régulièrement les clés API'
          ]
        },
        {
          title: 'Permissions des Fichiers de Configuration',
          description: 'Paramètres de sécurité pour les fichiers de configuration',
          practices: [
            'Définir les fichiers de configuration en lecture seule (chmod 600)',
            'Éviter de committer des configurations sensibles dans le contrôle de version',
            'Utiliser .gitignore pour exclure les fichiers de configuration',
            'Examiner régulièrement le contenu des fichiers de configuration'
          ]
        },
        {
          title: 'Sécurité des Plugins',
          description: 'Considérations de sécurité pour la configuration des plugins',
          practices: [
            'Activer le mode de sécurité strict',
            'Vérifier les sources et signatures des plugins',
            'Limiter la portée des permissions des plugins',
            'Mettre à jour régulièrement les versions des plugins'
          ]
        }
      ],
      validationExample: `// Règles de validation de configuration
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// Valider la configuration
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // Valider la configuration API
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  if (locale === 'ja') {
    return {
      title: '設定 API ドキュメント',
      subtitle: '完全な設定管理 API リファレンスドキュメント',
      readingTime: '25分で読める',
      configManagement: '設定管理',
      hierarchyTitle: '設定階層',
      hierarchyDescription: 'Gemini CLI は複数の設定ソースと動的更新をサポートする階層設定システムを使用します',
      hierarchy: [
        { level: 1, source: 'デフォルト設定', priority: '最低', description: '組み込みのデフォルト設定値' },
        { level: 2, source: 'グローバル設定ファイル', priority: '低', description: '~/.gemini/config.toml' },
        { level: 3, source: 'プロジェクト設定ファイル', priority: '中', description: './gemini.toml または ./.gemini/config.toml' },
        { level: 4, source: '環境変数', priority: '高', description: 'GEMINI_* プレフィックス付きの環境変数' },
        { level: 5, source: 'コマンドライン引数', priority: '最高', description: 'コマンドに渡されるランタイム引数' }
      ],
      priorityText: '優先度',
      configOptionsTitle: '設定オプション',
      configOptionsDescription: '詳細な設定オプションの説明',
      configSections: [
        {
          section: 'api',
          description: 'Gemini API関連の設定',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Google AI APIキー' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: '使用するデフォルトモデル' },
            { name: 'temperature', type: 'number', default: 0.7, description: '生成温度 (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: '最大トークン数' },
            { name: 'timeout', type: 'number', default: 30000, description: 'リクエストタイムアウト（ミリ秒）' }
          ]
        },
        {
          section: 'session',
          description: 'セッション管理設定',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: 'セッションを自動保存' },
            { name: 'max_history', type: 'number', default: 100, description: '履歴メッセージの最大数' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: 'セッション保存パス' },
            { name: 'compression', type: 'boolean', default: true, description: 'セッション圧縮を有効にする' }
          ]
        },
        {
          section: 'context',
          description: 'コンテキスト処理設定',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: 'ファイルの最大数' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: 'ファイルあたりの最大ファイルサイズ' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: 'ファイル除外パターン' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: 'プログラミング言語を自動検出' }
          ]
        },
        {
          section: 'plugins',
          description: 'プラグインシステム設定',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: 'プラグインシステムを有効にする' },
            { name: 'auto_load', type: 'boolean', default: true, description: 'プラグインを自動ロード' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: 'プラグイン検索パス' },
            { name: 'security_mode', type: 'string', default: 'strict', description: 'セキュリティモード (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: 'オプション',
        type: 'タイプ',
        default: 'デフォルト',
        description: '説明'
      },
      required: '必須',
      configExampleTitle: '設定ファイルの例',
      configExampleDescription: '完全なTOML設定ファイルの例',
      configApiTitle: '設定APIインターフェース',
      configApiDescription: 'ConfigManagerクラスのインターフェース定義',
      envVarsTitle: '環境変数',
      envVarsDescription: 'サポートされている環境変数のリスト',
      exampleText: '例:',
      correspondingConfig: '対応する設定:',
      usageExamplesTitle: '使用例',
      usageExamplesDescription: '設定管理の実用的なアプリケーション例',
      securityTitle: 'セキュリティの考慮事項',
      securityDescription: '設定セキュリティのベストプラクティス',
      validationTitle: '設定検証',
      validationDescription: '設定検証ルールと実装',
      nextStepsTitle: '学習を続ける',
      nextStepsDescription: 'MCPプロトコルと拡張開発を探索',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'MCPプロトコル紹介' },
        { href: `/${locale}/docs/extension-architecture`, text: '拡張アーキテクチャ' },
        { href: `/${locale}/docs`, text: 'ドキュメントに戻る' }
      ],
      configExample: `# Gemini CLI 設定ファイル (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // 設定値を取得
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // 設定値を設定
  set(key: string, value: any): void

  // 設定項目を削除
  delete(key: string): void

  // 設定項目が存在するかチェック
  has(key: string): boolean

  // すべての設定を取得
  getAll(): Record<string, any>

  // 設定を再読み込み
  reload(): Promise<void>

  // 設定をファイルに保存
  save(): Promise<void>

  // 設定変更を監視
  watch(key: string, callback: (value: any) => void): void

  // 設定変更の監視を停止
  unwatch(key: string, callback?: (value: any) => void): void

  // 設定を検証
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Google AI APIキー',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: 'デフォルトモデル名',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: '生成温度',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: '設定ファイルパス',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: 'ログレベル',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: 'プラグインパス',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: '基本的な設定操作',
          description: '設定値の読み取りと設定',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// 設定値を取得
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// 設定値を設定
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// 設定を保存
await config.save()`
        },
        {
          title: '設定の監視',
          description: '設定変更の監視',
          code: `// APIキーの変更を監視
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // クライアントを再初期化
  reinitializeClient(newKey)
})

// モデルの変更を監視
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: '設定の検証',
          description: '設定の有効性を検証',
          code: `// 設定を検証
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: '動的設定更新',
          description: 'ランタイム設定更新',
          code: `// 動的設定更新
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // 新しい設定を検証
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // 設定を保存
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'APIキーのセキュリティ',
          description: 'APIキーを保護するためのベストプラクティス',
          practices: [
            'APIキーの保存に環境変数を使用する',
            '設定ファイルでキーをハードコーディングしない',
            '適切なファイル権限を設定する (600)',
            'APIキーを定期的にローテーションする'
          ]
        },
        {
          title: '設定ファイルの権限',
          description: '設定ファイルのセキュリティ設定',
          practices: [
            '設定ファイルを読み取り専用に設定する (chmod 600)',
            'バージョン管理に機密設定をコミットしない',
            '.gitignoreを使用して設定ファイルを除外する',
            '設定ファイルの内容を定期的に確認する'
          ]
        },
        {
          title: 'プラグインのセキュリティ',
          description: 'プラグイン設定のセキュリティ考慮事項',
          practices: [
            '厳格なセキュリティモードを有効にする',
            'プラグインのソースと署名を検証する',
            'プラグインの権限範囲を制限する',
            'プラグインのバージョンを定期的に更新する'
          ]
        }
      ],
      validationExample: `// 設定検証ルール
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// 設定を検証
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // API設定を検証
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  if (locale === 'ko') {
    return {
      title: '구성 API 문서',
      subtitle: '완전한 구성 관리 API 참조 문서',
      readingTime: '25분 읽기',
      configManagement: '구성 관리',
      hierarchyTitle: '구성 계층',
      hierarchyDescription: 'Gemini CLI는 여러 구성 소스와 동적 업데이트를 지원하는 계층적 구성 시스템을 사용합니다',
      hierarchy: [
        { level: 1, source: '기본 구성', priority: '가장 낮음', description: '내장된 기본 구성 값' },
        { level: 2, source: '전역 구성 파일', priority: '낮음', description: '~/.gemini/config.toml' },
        { level: 3, source: '프로젝트 구성 파일', priority: '중간', description: './gemini.toml 또는 ./.gemini/config.toml' },
        { level: 4, source: '환경 변수', priority: '높음', description: 'GEMINI_* 접두사가 있는 환경 변수' },
        { level: 5, source: '명령줄 인수', priority: '가장 높음', description: '명령에 전달되는 런타임 인수' }
      ],
      priorityText: '우선순위',
      configOptionsTitle: '구성 옵션',
      configOptionsDescription: '자세한 구성 옵션 설명',
      configSections: [
        {
          section: 'api',
          description: 'Gemini API 관련 구성',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Google AI API 키' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: '사용할 기본 모델' },
            { name: 'temperature', type: 'number', default: 0.7, description: '생성 온도 (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: '최대 토큰 수' },
            { name: 'timeout', type: 'number', default: 30000, description: '요청 타임아웃 (밀리초)' }
          ]
        },
        {
          section: 'session',
          description: '세션 관리 구성',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: '세션 자동 저장' },
            { name: 'max_history', type: 'number', default: 100, description: '최대 기록 메시지 수' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: '세션 저장 경로' },
            { name: 'compression', type: 'boolean', default: true, description: '세션 압축 활성화' }
          ]
        },
        {
          section: 'context',
          description: '컨텍스트 처리 구성',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: '최대 파일 수' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: '파일당 최대 파일 크기' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: '파일 제외 패턴' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: '프로그래밍 언어 자동 감지' }
          ]
        },
        {
          section: 'plugins',
          description: '플러그인 시스템 구성',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: '플러그인 시스템 활성화' },
            { name: 'auto_load', type: 'boolean', default: true, description: '플러그인 자동 로드' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: '플러그인 검색 경로' },
            { name: 'security_mode', type: 'string', default: 'strict', description: '보안 모드 (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: '옵션',
        type: '유형',
        default: '기본값',
        description: '설명'
      },
      required: '필수',
      configExampleTitle: '구성 파일 예제',
      configExampleDescription: '완전한 TOML 구성 파일 예제',
      configApiTitle: '구성 API 인터페이스',
      configApiDescription: 'ConfigManager 클래스 인터페이스 정의',
      envVarsTitle: '환경 변수',
      envVarsDescription: '지원되는 환경 변수 목록',
      exampleText: '예제:',
      correspondingConfig: '해당 구성:',
      usageExamplesTitle: '사용 예제',
      usageExamplesDescription: '구성 관리의 실용적인 응용 예제',
      securityTitle: '보안 고려사항',
      securityDescription: '구성 보안을 위한 모범 사례',
      validationTitle: '구성 검증',
      validationDescription: '구성 검증 규칙 및 구현',
      nextStepsTitle: '계속 학습하기',
      nextStepsDescription: 'MCP 프로토콜 및 확장 개발 탐색',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'MCP 프로토콜 소개' },
        { href: `/${locale}/docs/extension-architecture`, text: '확장 아키텍처' },
        { href: `/${locale}/docs`, text: '문서로 돌아가기' }
      ],
      configExample: `# Gemini CLI 구성 파일 (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // 구성 값 가져오기
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // 구성 값 설정
  set(key: string, value: any): void

  // 구성 항목 삭제
  delete(key: string): void

  // 구성 항목이 존재하는지 확인
  has(key: string): boolean

  // 모든 구성 가져오기
  getAll(): Record<string, any>

  // 구성 다시 로드
  reload(): Promise<void>

  // 구성을 파일에 저장
  save(): Promise<void>

  // 구성 변경 감시
  watch(key: string, callback: (value: any) => void): void

  // 구성 변경 감시 중지
  unwatch(key: string, callback?: (value: any) => void): void

  // 구성 검증
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Google AI API 키',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: '기본 모델 이름',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: '생성 온도',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: '구성 파일 경로',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: '로그 레벨',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: '플러그인 경로',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: '기본 구성 작업',
          description: '구성 값 읽기 및 설정',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// 구성 값 가져오기
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// 구성 값 설정
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// 구성 저장
await config.save()`
        },
        {
          title: '구성 감시',
          description: '구성 변경 사항 수신',
          code: `// API 키 변경 감시
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // 클라이언트 재초기화
  reinitializeClient(newKey)
})

// 모델 변경 감시
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: '구성 검증',
          description: '구성 유효성 검증',
          code: `// 구성 검증
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: '동적 구성 업데이트',
          description: '런타임 구성 업데이트',
          code: `// 동적 구성 업데이트
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // 새 구성 검증
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // 구성 저장
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'API 키 보안',
          description: 'API 키 보호를 위한 모범 사례',
          practices: [
            'API 키 저장에 환경 변수 사용',
            '구성 파일에 키 하드코딩 방지',
            '적절한 파일 권한 설정 (600)',
            'API 키 정기적 순환'
          ]
        },
        {
          title: '구성 파일 권한',
          description: '구성 파일의 보안 설정',
          practices: [
            '구성 파일을 읽기 전용으로 설정 (chmod 600)',
            '버전 관리에 민감한 구성 커밋 방지',
            '.gitignore를 사용하여 구성 파일 제외',
            '구성 파일 내용 정기적 검토'
          ]
        },
        {
          title: '플러그인 보안',
          description: '플러그인 구성의 보안 고려사항',
          practices: [
            '엄격한 보안 모드 활성화',
            '플러그인 소스 및 서명 확인',
            '플러그인 권한 범위 제한',
            '플러그인 버전 정기적 업데이트'
          ]
        }
      ],
      validationExample: `// 구성 검증 규칙
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// 구성 검증
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // API 구성 검증
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  if (locale === 'es') {
    return {
      title: 'Documentación API de Configuración',
      subtitle: 'Documentación de referencia completa de la API de gestión de configuración',
      readingTime: '25 min de lectura',
      configManagement: 'Gestión de Configuración',
      hierarchyTitle: 'Jerarquía de Configuración',
      hierarchyDescription: 'Gemini CLI utiliza un sistema de configuración jerárquico que admite múltiples fuentes de configuración y actualizaciones dinámicas',
      hierarchy: [
        { level: 1, source: 'Configuración por Defecto', priority: 'Más bajo', description: 'Valores de configuración por defecto incorporados' },
        { level: 2, source: 'Archivo de Configuración Global', priority: 'Bajo', description: '~/.gemini/config.toml' },
        { level: 3, source: 'Archivo de Configuración de Proyecto', priority: 'Medio', description: './gemini.toml o ./.gemini/config.toml' },
        { level: 4, source: 'Variables de Entorno', priority: 'Alto', description: 'Variables de entorno con prefijo GEMINI_*' },
        { level: 5, source: 'Argumentos de Línea de Comandos', priority: 'Más alto', description: 'Argumentos de tiempo de ejecución pasados al comando' }
      ],
      priorityText: 'Prioridad',
      configOptionsTitle: 'Opciones de Configuración',
      configOptionsDescription: 'Descripción detallada de las opciones de configuración',
      configSections: [
        {
          section: 'api',
          description: 'Configuración relacionada con la API de Gemini',
          options: [
            { name: 'key', type: 'string', required: true, description: 'Clave de API de Google AI' },
            { name: 'model', type: 'string', default: 'gemini-pro', description: 'Modelo predeterminado a usar' },
            { name: 'temperature', type: 'number', default: 0.7, description: 'Temperatura de generación (0-1)' },
            { name: 'max_tokens', type: 'number', default: 4096, description: 'Número máximo de tokens' },
            { name: 'timeout', type: 'number', default: 30000, description: 'Tiempo de espera de solicitud en milisegundos' }
          ]
        },
        {
          section: 'session',
          description: 'Configuración de gestión de sesiones',
          options: [
            { name: 'auto_save', type: 'boolean', default: true, description: 'Guardar sesiones automáticamente' },
            { name: 'max_history', type: 'number', default: 100, description: 'Número máximo de mensajes de historial' },
            { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: 'Ruta de almacenamiento de sesiones' },
            { name: 'compression', type: 'boolean', default: true, description: 'Habilitar compresión de sesiones' }
          ]
        },
        {
          section: 'context',
          description: 'Configuración de procesamiento de contexto',
          options: [
            { name: 'max_files', type: 'number', default: 50, description: 'Número máximo de archivos' },
            { name: 'max_file_size', type: 'string', default: '1MB', description: 'Tamaño máximo de archivo por archivo' },
            { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: 'Patrones de exclusión de archivos' },
            { name: 'auto_detect_language', type: 'boolean', default: true, description: 'Detectar automáticamente el lenguaje de programación' }
          ]
        },
        {
          section: 'plugins',
          description: 'Configuración del sistema de plugins',
          options: [
            { name: 'enabled', type: 'boolean', default: true, description: 'Habilitar sistema de plugins' },
            { name: 'auto_load', type: 'boolean', default: true, description: 'Cargar plugins automáticamente' },
            { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: 'Rutas de búsqueda de plugins' },
            { name: 'security_mode', type: 'string', default: 'strict', description: 'Modo de seguridad (strict/permissive)' }
          ]
        }
      ],
      tableHeaders: {
        option: 'Opción',
        type: 'Tipo',
        default: 'Predeterminado',
        description: 'Descripción'
      },
      required: 'Requerido',
      configExampleTitle: 'Ejemplo de Archivo de Configuración',
      configExampleDescription: 'Ejemplo completo de archivo de configuración TOML',
      configApiTitle: 'Interfaz de API de Configuración',
      configApiDescription: 'Definición de interfaz de la clase ConfigManager',
      envVarsTitle: 'Variables de Entorno',
      envVarsDescription: 'Lista de variables de entorno soportadas',
      exampleText: 'Ejemplo:',
      correspondingConfig: 'Configuración Correspondiente:',
      usageExamplesTitle: 'Ejemplos de Uso',
      usageExamplesDescription: 'Ejemplos de aplicación práctica de gestión de configuración',
      securityTitle: 'Consideraciones de Seguridad',
      securityDescription: 'Mejores prácticas para la seguridad de configuración',
      validationTitle: 'Validación de Configuración',
      validationDescription: 'Reglas de validación de configuración e implementación',
      nextStepsTitle: 'Continuar Aprendiendo',
      nextStepsDescription: 'Explorar el protocolo MCP y desarrollo de extensiones',
      nextStepsLinks: [
        { href: `/${locale}/docs/mcp-introduction`, text: 'Introducción al Protocolo MCP' },
        { href: `/${locale}/docs/extension-architecture`, text: 'Arquitectura de Extensiones' },
        { href: `/${locale}/docs`, text: 'Volver a la Documentación' }
      ],
      configExample: `# Archivo de Configuración Gemini CLI (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
      configApiInterface: `interface ConfigManager {
  // Obtener valor de configuración
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // Establecer valor de configuración
  set(key: string, value: any): void

  // Eliminar elemento de configuración
  delete(key: string): void

  // Verificar si existe el elemento de configuración
  has(key: string): boolean

  // Obtener todas las configuraciones
  getAll(): Record<string, any>

  // Recargar configuración
  reload(): Promise<void>

  // Guardar configuración en archivo
  save(): Promise<void>

  // Observar cambios de configuración
  watch(key: string, callback: (value: any) => void): void

  // Dejar de observar cambios de configuración
  unwatch(key: string, callback?: (value: any) => void): void

  // Validar configuración
  validate(): ConfigValidationResult
}`,
      environmentVariables: [
        {
          name: 'GEMINI_API_KEY',
          description: 'Clave de API de Google AI',
          example: 'export GEMINI_API_KEY="your-api-key"',
          configPath: 'api.key'
        },
        {
          name: 'GEMINI_MODEL',
          description: 'Nombre del modelo predeterminado',
          example: 'export GEMINI_MODEL="gemini-pro"',
          configPath: 'api.model'
        },
        {
          name: 'GEMINI_TEMPERATURE',
          description: 'Temperatura de generación',
          example: 'export GEMINI_TEMPERATURE="0.7"',
          configPath: 'api.temperature'
        },
        {
          name: 'GEMINI_CONFIG_PATH',
          description: 'Ruta del archivo de configuración',
          example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
          configPath: 'N/A'
        },
        {
          name: 'GEMINI_LOG_LEVEL',
          description: 'Nivel de registro',
          example: 'export GEMINI_LOG_LEVEL="debug"',
          configPath: 'logging.level'
        },
        {
          name: 'GEMINI_PLUGIN_PATH',
          description: 'Ruta de plugins',
          example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
          configPath: 'plugins.plugin_paths'
        }
      ],
      usageExamples: [
        {
          title: 'Operaciones Básicas de Configuración',
          description: 'Lectura y configuración de valores de configuración',
          code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// Obtener valores de configuración
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// Establecer valores de configuración
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// Guardar configuración
await config.save()`
        },
        {
          title: 'Observación de Configuración',
          description: 'Escuchar cambios de configuración',
          code: `// Observar cambios de clave API
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // Reinicializar cliente
  reinitializeClient(newKey)
})

// Observar cambios de modelo
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
        },
        {
          title: 'Validación de Configuración',
          description: 'Validar la validez de la configuración',
          code: `// Validar configuración
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
        },
        {
          title: 'Actualizaciones Dinámicas de Configuración',
          description: 'Actualizaciones de configuración en tiempo de ejecución',
          code: `// Actualización dinámica de configuración
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // Validar nueva configuración
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // Guardar configuración
  await config.save()

  console.log('Configuration updated successfully')
}`
        }
      ],
      securityConsiderations: [
        {
          title: 'Seguridad de Claves API',
          description: 'Mejores prácticas para proteger claves API',
          practices: [
            'Usar variables de entorno para almacenar claves API',
            'Evitar codificar claves en archivos de configuración',
            'Establecer permisos de archivo apropiados (600)',
            'Rotar claves API regularmente'
          ]
        },
        {
          title: 'Permisos de Archivos de Configuración',
          description: 'Configuraciones de seguridad para archivos de configuración',
          practices: [
            'Establecer archivos de configuración como solo lectura (chmod 600)',
            'Evitar confirmar configuraciones sensibles en control de versiones',
            'Usar .gitignore para excluir archivos de configuración',
            'Revisar regularmente el contenido de archivos de configuración'
          ]
        },
        {
          title: 'Seguridad de Plugins',
          description: 'Consideraciones de seguridad para configuración de plugins',
          practices: [
            'Habilitar modo de seguridad estricto',
            'Verificar fuentes y firmas de plugins',
            'Limitar el alcance de permisos de plugins',
            'Actualizar regularmente las versiones de plugins'
          ]
        }
      ],
      validationExample: `// Reglas de validación de configuración
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// Validar configuración
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // Validar configuración API
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
    }
  }

  // Default to English content for other locales
  const defaults = getDefaultContent()

  return {
    title: 'Configuration API Documentation',
    subtitle: 'Complete configuration management API reference documentation',
    readingTime: '25 min read',
    configManagement: 'Configuration Management',
    hierarchyTitle: 'Configuration Hierarchy',
    hierarchyDescription: 'Gemini CLI uses a hierarchical configuration system that supports multiple configuration sources and dynamic updates',
    hierarchy: [
      { level: 1, source: 'Default Configuration', priority: 'Lowest', description: 'Built-in default configuration values' },
      { level: 2, source: 'Global Config File', priority: 'Low', description: '~/.gemini/config.toml' },
      { level: 3, source: 'Project Config File', priority: 'Medium', description: './gemini.toml or ./.gemini/config.toml' },
      { level: 4, source: 'Environment Variables', priority: 'High', description: 'Environment variables with GEMINI_* prefix' },
      { level: 5, source: 'Command Line Arguments', priority: 'Highest', description: 'Runtime arguments passed to the command' }
    ],
    priorityText: 'Priority',
    configOptionsTitle: 'Configuration Options',
    configOptionsDescription: 'Detailed configuration options description',
    configSections: [
      {
        section: 'api',
        description: 'Gemini API related configuration',
        options: [
          { name: 'key', type: 'string', required: true, description: 'Google AI API key' },
          { name: 'model', type: 'string', default: 'gemini-pro', description: 'Default model to use' },
          { name: 'temperature', type: 'number', default: 0.7, description: 'Generation temperature (0-1)' },
          { name: 'max_tokens', type: 'number', default: 4096, description: 'Maximum number of tokens' },
          { name: 'timeout', type: 'number', default: 30000, description: 'Request timeout in milliseconds' }
        ]
      },
      {
        section: 'session',
        description: 'Session management configuration',
        options: [
          { name: 'auto_save', type: 'boolean', default: true, description: 'Automatically save sessions' },
          { name: 'max_history', type: 'number', default: 100, description: 'Maximum number of history messages' },
          { name: 'storage_path', type: 'string', default: '~/.gemini/sessions', description: 'Session storage path' },
          { name: 'compression', type: 'boolean', default: true, description: 'Enable session compression' }
        ]
      },
      {
        section: 'context',
        description: 'Context processing configuration',
        options: [
          { name: 'max_files', type: 'number', default: 50, description: 'Maximum number of files' },
          { name: 'max_file_size', type: 'string', default: '1MB', description: 'Maximum file size per file' },
          { name: 'exclude_patterns', type: 'array', default: ['*.log', '*.tmp'], description: 'File exclusion patterns' },
          { name: 'auto_detect_language', type: 'boolean', default: true, description: 'Automatically detect programming language' }
        ]
      },
      {
        section: 'plugins',
        description: 'Plugin system configuration',
        options: [
          { name: 'enabled', type: 'boolean', default: true, description: 'Enable plugin system' },
          { name: 'auto_load', type: 'boolean', default: true, description: 'Automatically load plugins' },
          { name: 'plugin_paths', type: 'array', default: ['~/.gemini/plugins'], description: 'Plugin search paths' },
          { name: 'security_mode', type: 'string', default: 'strict', description: 'Security mode (strict/permissive)' }
        ]
      }
    ],
    tableHeaders: {
      option: 'Option',
      type: 'Type',
      default: 'Default',
      description: 'Description'
    },
    required: 'Required',
    configExampleTitle: 'Configuration File Example',
    configExampleDescription: 'Complete TOML configuration file example',
    configApiTitle: 'Configuration API Interface',
    configApiDescription: 'ConfigManager class interface definition',
    envVarsTitle: 'Environment Variables',
    envVarsDescription: 'List of supported environment variables',
    exampleText: 'Example:',
    correspondingConfig: 'Corresponding Config:',
    usageExamplesTitle: 'Usage Examples',
    usageExamplesDescription: 'Practical application examples of configuration management',
    securityTitle: 'Security Considerations',
    securityDescription: 'Best practices for configuration security',
    validationTitle: 'Configuration Validation',
    validationDescription: 'Configuration validation rules and implementation',
    nextStepsTitle: 'Continue Learning',
    nextStepsDescription: 'Explore MCP protocol and extension development',
    nextStepsLinks: [
      { href: `/${locale}/docs/mcp-introduction`, text: 'MCP Protocol Introduction' },
      { href: `/${locale}/docs/extension-architecture`, text: 'Extension Architecture' },
      { href: `/${locale}/docs`, text: 'Back to Documentation' }
    ],
    configExample: `# Gemini CLI Configuration File (gemini.toml)

[api]
key = "your-api-key-here"
model = "gemini-pro"
temperature = 0.7
max_tokens = 4096
timeout = 30000

[session]
auto_save = true
max_history = 100
storage_path = "~/.gemini/sessions"
compression = true

[context]
max_files = 50
max_file_size = "1MB"
exclude_patterns = [
  "*.log",
  "*.tmp",
  "node_modules/**",
  ".git/**"
]
auto_detect_language = true

[plugins]
enabled = true
auto_load = true
plugin_paths = [
  "~/.gemini/plugins",
  "./plugins"
]
security_mode = "strict"

[logging]
level = "info"
file = "~/.gemini/logs/gemini.log"
max_size = "10MB"
max_files = 5

[ui]
theme = "auto"
color = true
progress_bar = true
confirm_destructive = true`,
    configApiInterface: `interface ConfigManager {
  // Get configuration value
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T

  // Set configuration value
  set(key: string, value: any): void

  // Delete configuration item
  delete(key: string): void

  // Check if configuration item exists
  has(key: string): boolean

  // Get all configurations
  getAll(): Record<string, any>

  // Reload configuration
  reload(): Promise<void>

  // Save configuration to file
  save(): Promise<void>

  // Watch configuration changes
  watch(key: string, callback: (value: any) => void): void

  // Unwatch configuration changes
  unwatch(key: string, callback?: (value: any) => void): void

  // Validate configuration
  validate(): ConfigValidationResult
}`,
    environmentVariables: [
      {
        name: 'GEMINI_API_KEY',
        description: 'Google AI API key',
        example: 'export GEMINI_API_KEY="your-api-key"',
        configPath: 'api.key'
      },
      {
        name: 'GEMINI_MODEL',
        description: 'Default model name',
        example: 'export GEMINI_MODEL="gemini-pro"',
        configPath: 'api.model'
      },
      {
        name: 'GEMINI_TEMPERATURE',
        description: 'Generation temperature',
        example: 'export GEMINI_TEMPERATURE="0.7"',
        configPath: 'api.temperature'
      },
      {
        name: 'GEMINI_CONFIG_PATH',
        description: 'Configuration file path',
        example: 'export GEMINI_CONFIG_PATH="/path/to/config.toml"',
        configPath: 'N/A'
      },
      {
        name: 'GEMINI_LOG_LEVEL',
        description: 'Log level',
        example: 'export GEMINI_LOG_LEVEL="debug"',
        configPath: 'logging.level'
      },
      {
        name: 'GEMINI_PLUGIN_PATH',
        description: 'Plugin path',
        example: 'export GEMINI_PLUGIN_PATH="/path/to/plugins"',
        configPath: 'plugins.plugin_paths'
      }
    ],
    usageExamples: [
      {
        title: 'Basic Configuration Operations',
        description: 'Reading and setting configuration values',
        code: `import { ConfigManager } from '@gemini-cli/core'

const config = new ConfigManager()

// Get configuration values
const apiKey = config.get('api.key')
const model = config.get('api.model', 'gemini-pro')

// Set configuration values
config.set('api.temperature', 0.8)
config.set('session.auto_save', false)

// Save configuration
await config.save()`
      },
      {
        title: 'Configuration Watching',
        description: 'Listening to configuration changes',
        code: `// Watch API key changes
config.watch('api.key', (newKey) => {
  console.log('API key changed:', newKey)
  // Reinitialize client
  reinitializeClient(newKey)
})

// Watch model changes
config.watch('api.model', (newModel) => {
  console.log('Model changed to:', newModel)
})`
      },
      {
        title: 'Configuration Validation',
        description: 'Validating configuration validity',
        code: `// Validate configuration
const validation = config.validate()

if (!validation.isValid) {
  console.error('Configuration errors:')
  validation.errors.forEach(error => {
    console.error(\`- \${error.path}: \${error.message}\`)
  })
  process.exit(1)
}

console.log('Configuration is valid')`
      },
      {
        title: 'Dynamic Configuration Updates',
        description: 'Runtime configuration updates',
        code: `// Dynamic configuration update
async function updateConfig(updates: Record<string, any>) {
  for (const [key, value] of Object.entries(updates)) {
    config.set(key, value)
  }

  // Validate new configuration
  const validation = config.validate()
  if (!validation.isValid) {
    throw new Error('Invalid configuration')
  }

  // Save configuration
  await config.save()

  console.log('Configuration updated successfully')
}`
      }
    ],
    securityConsiderations: [
      {
        title: 'API Key Security',
        description: 'Best practices for protecting API keys',
        practices: [
          'Use environment variables to store API keys',
          'Avoid hardcoding keys in configuration files',
          'Set appropriate file permissions (600)',
          'Regularly rotate API keys'
        ]
      },
      {
        title: 'Configuration File Permissions',
        description: 'Security settings for configuration files',
        practices: [
          'Set configuration files to read-only (chmod 600)',
          'Avoid committing sensitive configurations to version control',
          'Use .gitignore to exclude configuration files',
          'Regularly review configuration file contents'
        ]
      },
      {
        title: 'Plugin Security',
        description: 'Security considerations for plugin configuration',
        practices: [
          'Enable strict security mode',
          'Verify plugin sources and signatures',
          'Limit plugin permission scope',
          'Regularly update plugin versions'
        ]
      }
    ],
    validationExample: `// Configuration validation rules
const configSchema = {
  api: {
    key: {
      type: 'string',
      required: true,
      minLength: 10,
      pattern: /^[A-Za-z0-9_-]+$/
    },
    model: {
      type: 'string',
      enum: ['gemini-pro', 'gemini-pro-vision'],
      default: 'gemini-pro'
    },
    temperature: {
      type: 'number',
      min: 0,
      max: 1,
      default: 0.7
    }
  },
  session: {
    max_history: {
      type: 'number',
      min: 1,
      max: 1000,
      default: 100
    },
    storage_path: {
      type: 'string',
      required: true
    }
  }
}

// Validate configuration
function validateConfig(config: any): ConfigValidationResult {
  const errors: ConfigError[] = []

  // Validate API configuration
  if (!config.api?.key) {
    errors.push({
      path: 'api.key',
      message: 'API key is required'
    })
  }

  if (config.api?.temperature < 0 || config.api?.temperature > 1) {
    errors.push({
      path: 'api.temperature',
      message: 'Temperature must be between 0 and 1'
    })
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}`
  }
}

export default async function LocaleConfigApiPage({ params }: ConfigApiPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs/config-api')
  }

  // For English, redirect to main page to avoid duplication
  if (locale === 'en') {
    redirect('/docs/config-api')
  }

  const content = getContent(locale)

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <AdjustmentsHorizontalIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 text-lg text-green-100">
              {content.subtitle}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {content.configManagement}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {content.readingTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Hierarchy */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.hierarchyTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.hierarchyDescription}
            </p>
          </div>

          <div className="space-y-4">
            {content.hierarchy.map((level, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-sm font-semibold mr-4">
                      {level.level}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-900">{level.source}</h3>
                      <p className="text-green-700 text-sm">{level.description}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    level.priority === 'Highest' || level.priority === '最高' ? 'bg-red-100 text-red-800' :
                    level.priority === 'High' || level.priority === '高' ? 'bg-orange-100 text-orange-800' :
                    level.priority === 'Medium' || level.priority === '中' ? 'bg-yellow-100 text-yellow-800' :
                    level.priority === 'Low' || level.priority === '低' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {content.priorityText}: {level.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration Options */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.configOptionsTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.configOptionsDescription}
            </p>
          </div>

          <div className="space-y-8">
            {content.configSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start mb-6">
                  <CogIcon className="h-8 w-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">[{section.section}]</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">{content.tableHeaders.option}</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">{content.tableHeaders.type}</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">{content.tableHeaders.default}</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">{content.tableHeaders.description}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.options.map((option, optIndex) => (
                        <tr key={optIndex} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <code className="text-sm font-mono text-blue-600">{option.name}</code>
                            {'required' in option && option.required && (
                              <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{content.required}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{option.type}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {option.default !== undefined ? (
                              <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                                {typeof option.default === 'string' ? `"${option.default}"` : String(option.default)}
                              </code>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{option.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration File Example */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.configExampleTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.configExampleDescription}
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
              <code>{content.configExample}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Configuration API Interface */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.configApiTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.configApiDescription}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start mb-6">
              <KeyIcon className="h-8 w-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ConfigManager</h3>
                <p className="text-gray-600">{content.configApiDescription}</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                <code>{content.configApiInterface}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.envVarsTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.envVarsDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.environmentVariables.map((env, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      <code className="text-blue-600 text-sm">{env.name}</code>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{env.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{content.exampleText}</h4>
                    <div className="bg-gray-900 rounded p-2">
                      <code className="text-green-400 text-xs font-mono">{env.example}</code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{content.correspondingConfig}</h4>
                    <code className="text-blue-600 text-sm">{env.configPath}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.usageExamplesTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.usageExamplesDescription}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {content.usageExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start mb-6">
                  <CodeBracketIcon className="h-8 w-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                    <p className="text-gray-600">{example.description}</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Considerations */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.securityTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.securityDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.securityConsiderations.map((security, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-red-500 mr-3" />
                  <h3 className="text-lg font-semibold text-red-900">{security.title}</h3>
                </div>
                <p className="text-red-800 text-sm mb-4">{security.description}</p>
                <ul className="space-y-2">
                  {security.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="text-sm text-red-700 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration Validation */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{content.validationTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.validationDescription}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{content.validationExample}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.nextStepsTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.nextStepsDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {content.nextStepsLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`rounded-lg px-6 py-3 text-base font-semibold transition-colors ${
                    index === 0
                      ? 'bg-green-600 text-white hover:bg-green-500'
                      : index === 1
                      ? 'border border-green-600 text-green-600 hover:bg-green-50'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for all locales including default for static export
  return locales.map((locale) => ({
    locale,
  }))
}
