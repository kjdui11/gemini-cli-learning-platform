import { Metadata } from 'next'
import Link from 'next/link'
import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  CogIcon,
  KeyIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '配置 API 文档 | Gemini CLI 开发者文档',
  description: '详细的 Gemini CLI 配置管理 API 文档，包括配置文件格式、环境变量、动态配置和安全设置。',
  keywords: 'Gemini CLI 配置 API, 配置管理, TOML 配置, 环境变量, 动态配置',
  openGraph: {
    title: '配置 API 文档 - Gemini CLI 开发者文档',
    description: '完整的配置管理 API 参考文档',
    type: 'article',
  },
}

const configStructure = {
  description: 'Gemini CLI 使用分层配置系统，支持多种配置源和动态更新',
  hierarchy: [
    { level: 1, source: '默认配置', priority: '最低', description: '内置的默认配置值' },
    { level: 2, source: '全局配置文件', priority: '低', description: '~/.gemini/config.toml' },
    { level: 3, source: '项目配置文件', priority: '中', description: './gemini.toml 或 ./.gemini/config.toml' },
    { level: 4, source: '环境变量', priority: '高', description: 'GEMINI_* 前缀的环境变量' },
    { level: 5, source: '命令行参数', priority: '最高', description: '运行时传入的参数' }
  ]
}

const configSections = [
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
]

const configExample = `# Gemini CLI 配置文件 (gemini.toml)

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
confirm_destructive = true`

const configApiInterface = `interface ConfigManager {
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
}`

const environmentVariables = [
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
]

const configUsageExamples = [
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
]

const securityConsiderations = [
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
]

const configValidation = `// 配置验证规则
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

export default function ConfigApiPage() {
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
              配置 API 文档
            </h1>
            <p className="mt-4 text-lg text-green-100">
              完整的配置管理 API 参考文档
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                配置管理
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                25 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Hierarchy */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">配置层次结构</h2>
            <p className="mt-4 text-lg text-gray-600">
              {configStructure.description}
            </p>
          </div>

          <div className="space-y-4">
            {configStructure.hierarchy.map((level, index) => (
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
                    level.priority === '最高' ? 'bg-red-100 text-red-800' :
                    level.priority === '高' ? 'bg-orange-100 text-orange-800' :
                    level.priority === '中' ? 'bg-yellow-100 text-yellow-800' :
                    level.priority === '低' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    优先级: {level.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration Sections */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">配置选项</h2>
            <p className="mt-4 text-lg text-gray-600">
              详细的配置选项说明
            </p>
          </div>

          <div className="space-y-8">
            {configSections.map((section, index) => (
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
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">选项</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">类型</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">默认值</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.options.map((option, optIndex) => (
                        <tr key={optIndex} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <code className="text-sm font-mono text-blue-600">{option.name}</code>
                            {'required' in option && option.required && (
                              <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">必需</span>
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

      {/* Configuration Example */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">配置文件示例</h2>
            <p className="mt-4 text-lg text-gray-600">
              完整的 TOML 配置文件示例
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{configExample}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Config API Interface */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">配置 API 接口</h2>
            <p className="mt-4 text-lg text-gray-600">
              ConfigManager 类的接口定义
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{configApiInterface}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">环境变量</h2>
            <p className="mt-4 text-lg text-gray-600">
              支持的环境变量列表
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {environmentVariables.map((env, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <KeyIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{env.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{env.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">示例：</h4>
                    <div className="bg-gray-900 rounded p-2">
                      <code className="text-green-400 text-xs font-mono">{env.example}</code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">对应配置：</h4>
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
            <h2 className="text-3xl font-bold text-gray-900">使用示例</h2>
            <p className="mt-4 text-lg text-gray-600">
              配置管理的实际应用示例
            </p>
          </div>

          <div className="space-y-8">
            {configUsageExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{example.code}</pre>
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
            <h2 className="text-3xl font-bold text-gray-900">安全考虑</h2>
            <p className="mt-4 text-lg text-gray-600">
              配置安全的最佳实践
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityConsiderations.map((security, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900">配置验证</h2>
            <p className="mt-4 text-lg text-gray-600">
              配置验证规则和实现
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{configValidation}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              探索 MCP 协议和扩展开发
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/mcp-introduction"
                className="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-500 transition-colors"
              >
                MCP 协议介绍
              </Link>
              <Link
                href="/docs/extension-architecture"
                className="rounded-lg border border-green-600 px-6 py-3 text-base font-semibold text-green-600 hover:bg-green-50 transition-colors"
              >
                扩展架构
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                返回文档首页
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
