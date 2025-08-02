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
  title: 'Configuration API Documentation | Gemini CLI Developer Documentation',
  description: 'Comprehensive Gemini CLI configuration management API documentation, including configuration file formats, environment variables, dynamic configuration, and security settings.',
  keywords: 'Gemini CLI configuration API, configuration management, TOML configuration, environment variables, dynamic configuration',
  openGraph: {
    title: 'Configuration API Documentation - Gemini CLI Developer Documentation',
    description: 'Complete configuration management API reference documentation',
    type: 'article',
  },
}

const configStructure = {
  description: 'Gemini CLI uses a hierarchical configuration system that supports multiple configuration sources and dynamic updates',
  hierarchy: [
    { level: 1, source: 'Default Configuration', priority: 'Lowest', description: 'Built-in default configuration values' },
    { level: 2, source: 'Global Config File', priority: 'Low', description: '~/.gemini/config.toml' },
    { level: 3, source: 'Project Config File', priority: 'Medium', description: './gemini.toml or ./.gemini/config.toml' },
    { level: 4, source: 'Environment Variables', priority: 'High', description: 'Environment variables with GEMINI_* prefix' },
    { level: 5, source: 'Command Line Arguments', priority: 'Highest', description: 'Runtime arguments passed to the command' }
  ]
}

const configSections = [
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
]

const configExample = `# Gemini CLI Configuration File (gemini.toml)

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
}`

const environmentVariables = [
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
]

const configUsageExamples = [
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
]

const securityConsiderations = [
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
]

const configValidation = `// Configuration validation rules
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
              Configuration API Documentation
            </h1>
            <p className="mt-4 text-lg text-green-100">
              Complete configuration management API reference documentation
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                Configuration Management
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                25 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Hierarchy */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Configuration Hierarchy</h2>
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
                    level.priority === 'Highest' ? 'bg-red-100 text-red-800' :
                    level.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                    level.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    level.priority === 'Low' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    Priority: {level.priority}
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
            <h2 className="text-3xl font-bold text-gray-900">Configuration Options</h2>
            <p className="mt-4 text-lg text-gray-600">
              Detailed configuration options description
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
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Option</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Default</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.options.map((option, optIndex) => (
                        <tr key={optIndex} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <code className="text-sm font-mono text-blue-600">{option.name}</code>
                            {'required' in option && option.required && (
                              <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Required</span>
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
            <h2 className="text-3xl font-bold text-gray-900">Configuration File Example</h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete TOML configuration file example
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
            <h2 className="text-3xl font-bold text-gray-900">Configuration API Interface</h2>
            <p className="mt-4 text-lg text-gray-600">
              ConfigManager class interface definition
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
            <h2 className="text-3xl font-bold text-gray-900">Environment Variables</h2>
            <p className="mt-4 text-lg text-gray-600">
              List of supported environment variables
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
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Example:</h4>
                    <div className="bg-gray-900 rounded p-2">
                      <code className="text-green-400 text-xs font-mono">{env.example}</code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Corresponding Config:</h4>
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
            <h2 className="text-3xl font-bold text-gray-900">Usage Examples</h2>
            <p className="mt-4 text-lg text-gray-600">
              Practical application examples of configuration management
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
            <h2 className="text-3xl font-bold text-gray-900">Security Considerations</h2>
            <p className="mt-4 text-lg text-gray-600">
              Best practices for configuration security
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
            <h2 className="text-3xl font-bold text-gray-900">Configuration Validation</h2>
            <p className="mt-4 text-lg text-gray-600">
              Configuration validation rules and implementation
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue Learning</h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore MCP protocol and extension development
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/mcp-introduction"
                className="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-500 transition-colors"
              >
                MCP Protocol Introduction
              </Link>
              <Link
                href="/docs/extension-architecture"
                className="rounded-lg border border-green-600 px-6 py-3 text-base font-semibold text-green-600 hover:bg-green-50 transition-colors"
              >
                Extension Architecture
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
