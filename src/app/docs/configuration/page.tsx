import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CogIcon,
  DocumentTextIcon,
  KeyIcon,
  PaintBrushIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Configuration Guide - Gemini CLI Documentation',
  description: 'Complete configuration guide for Gemini CLI including API settings, model selection, themes, and advanced options.',
  keywords: 'Gemini CLI configuration, settings, API key, model selection, themes, environment variables',
  openGraph: {
    title: 'Configuration Guide - Gemini CLI',
    description: 'Configure Gemini CLI for your needs',
    type: 'article',
  },
}

const configCategories = [
  {
    id: 'api',
    title: 'API Configuration',
    description: 'Configure API keys and model settings',
    icon: KeyIcon,
    color: 'from-blue-500 to-indigo-600',
    settings: [
      {
        key: 'api-key',
        description: 'Your Google AI API key',
        type: 'string',
        example: 'gemini config set api-key YOUR_API_KEY',
        required: true
      },
      {
        key: 'model',
        description: 'Default model to use',
        type: 'string',
        example: 'gemini config set model gemini-pro',
        default: 'gemini-pro'
      },
      {
        key: 'temperature',
        description: 'Creativity level (0.0 to 1.0)',
        type: 'number',
        example: 'gemini config set temperature 0.7',
        default: '0.7'
      },
      {
        key: 'max-tokens',
        description: 'Maximum response length',
        type: 'number',
        example: 'gemini config set max-tokens 2048',
        default: '2048'
      }
    ]
  },
  {
    id: 'interface',
    title: 'Interface Settings',
    description: 'Customize the CLI appearance and behavior',
    icon: PaintBrushIcon,
    color: 'from-green-500 to-emerald-600',
    settings: [
      {
        key: 'theme',
        description: 'Color theme for the CLI',
        type: 'string',
        example: 'gemini config set theme dark',
        default: 'auto',
        options: ['auto', 'light', 'dark']
      },
      {
        key: 'output-format',
        description: 'Default output format',
        type: 'string',
        example: 'gemini config set output-format markdown',
        default: 'text',
        options: ['text', 'markdown', 'json']
      },
      {
        key: 'stream',
        description: 'Enable streaming responses',
        type: 'boolean',
        example: 'gemini config set stream true',
        default: 'true'
      },
      {
        key: 'history-limit',
        description: 'Number of conversation turns to remember',
        type: 'number',
        example: 'gemini config set history-limit 20',
        default: '10'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Extensions',
    description: 'Configure tools and plugin settings',
    icon: CogIcon,
    color: 'from-purple-500 to-pink-600',
    settings: [
      {
        key: 'tools-enabled',
        description: 'Enable tool usage',
        type: 'boolean',
        example: 'gemini config set tools-enabled true',
        default: 'true'
      },
      {
        key: 'tool-timeout',
        description: 'Tool execution timeout (seconds)',
        type: 'number',
        example: 'gemini config set tool-timeout 30',
        default: '30'
      },
      {
        key: 'plugins-dir',
        description: 'Directory for custom plugins',
        type: 'string',
        example: 'gemini config set plugins-dir ~/.gemini/plugins',
        default: '~/.gemini/plugins'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security Settings',
    description: 'Security and privacy configurations',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-pink-600',
    settings: [
      {
        key: 'safe-mode',
        description: 'Enable safe mode for tool execution',
        type: 'boolean',
        example: 'gemini config set safe-mode true',
        default: 'true'
      },
      {
        key: 'log-level',
        description: 'Logging verbosity level',
        type: 'string',
        example: 'gemini config set log-level info',
        default: 'info',
        options: ['error', 'warn', 'info', 'debug']
      },
      {
        key: 'data-collection',
        description: 'Allow anonymous usage data collection',
        type: 'boolean',
        example: 'gemini config set data-collection false',
        default: 'false'
      }
    ]
  }
]

const configCommands = [
  {
    command: 'gemini config list',
    description: 'Show all current configuration settings'
  },
  {
    command: 'gemini config get <key>',
    description: 'Get the value of a specific setting'
  },
  {
    command: 'gemini config set <key> <value>',
    description: 'Set a configuration value'
  },
  {
    command: 'gemini config unset <key>',
    description: 'Remove a configuration setting (revert to default)'
  },
  {
    command: 'gemini config reset',
    description: 'Reset all settings to default values'
  },
  {
    command: 'gemini config export',
    description: 'Export configuration to a file'
  },
  {
    command: 'gemini config import <file>',
    description: 'Import configuration from a file'
  }
]

export default function ConfigurationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Configuration Guide
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              Customize Gemini CLI to fit your workflow with comprehensive configuration 
              options for API settings, interface preferences, and security controls.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Commands */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Configuration Commands
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Essential commands for managing your configuration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {configCommands.map((cmd, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                  {cmd.command}
                </code>
                <p className="text-sm text-gray-600">{cmd.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration Categories */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Configuration Options
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Detailed settings organized by category
            </p>
          </div>

          <div className="space-y-12">
            {configCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.settings.map((setting, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {setting.key}
                          </code>
                        </h4>
                        {'required' in setting && setting.required && (
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                            Required
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-3">{setting.description}</p>
                      
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-600">Type: </span>
                          <span className="text-sm text-blue-600">{setting.type}</span>
                        </div>
                        
                        {'default' in setting && setting.default && (
                          <div>
                            <span className="text-sm font-medium text-gray-600">Default: </span>
                            <code className="text-sm bg-gray-100 px-1 rounded">{setting.default}</code>
                          </div>
                        )}
                        
                        {'options' in setting && setting.options && (
                          <div>
                            <span className="text-sm font-medium text-gray-600">Options: </span>
                            <span className="text-sm text-gray-700">{setting.options.join(', ')}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Example:</h5>
                        <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                          {setting.example}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Environment Variables
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Alternative configuration using environment variables
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Common Environment Variables
                </h3>
                <div className="space-y-3">
                  <div>
                    <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                      GEMINI_API_KEY=your_api_key
                    </code>
                    <p className="text-sm text-gray-600 mt-1">API key for authentication</p>
                  </div>
                  <div>
                    <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                      GEMINI_MODEL=gemini-pro
                    </code>
                    <p className="text-sm text-gray-600 mt-1">Default model to use</p>
                  </div>
                  <div>
                    <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                      GEMINI_CONFIG_DIR=~/.config/gemini
                    </code>
                    <p className="text-sm text-gray-600 mt-1">Configuration directory</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Setting Environment Variables
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Bash/Zsh:</h4>
                    <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                      export GEMINI_API_KEY=your_key
                    </code>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">PowerShell:</h4>
                    <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                      $env:GEMINI_API_KEY="your_key"
                    </code>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">.env file:</h4>
                    <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                      GEMINI_API_KEY=your_key
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Files */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Configuration Files
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding configuration file locations and formats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                File Locations
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Global Config:</h4>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800 mt-1">
                    ~/.config/gemini/config.json
                  </code>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Project Config:</h4>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800 mt-1">
                    .gemini/config.json
                  </code>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Environment File:</h4>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800 mt-1">
                    .env
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Example Config File
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Best Practices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recommendations for secure and effective configuration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Security
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Never commit API keys to version control</li>
                <li>• Use environment variables for sensitive data</li>
                <li>• Enable safe mode for tool execution</li>
                <li>• Regularly rotate your API keys</li>
                <li>• Review and limit tool permissions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Performance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Adjust temperature based on use case</li>
                <li>• Set appropriate token limits</li>
                <li>• Enable streaming for better UX</li>
                <li>• Configure reasonable timeouts</li>
                <li>• Limit conversation history size</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore more configuration and setup guides
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/installation"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Installation Guide
              </Link>
              <Link
                href="/docs/examples"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Usage Examples
              </Link>
              <Link
                href="/docs/troubleshooting"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Troubleshooting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
