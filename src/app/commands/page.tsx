import { Metadata } from 'next'
import {
  CommandLineIcon,
  DocumentTextIcon,
  CogIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Gemini CLI 命令参考手册 | 完整命令列表和参数说明',
  description: '详细的 Gemini CLI 命令参考手册，包含所有可用命令、参数说明、使用示例和最佳实践。快速查找所需的命令和语法。',
  keywords: 'Gemini CLI 命令, CLI 命令参考, Gemini CLI 语法, 命令行参数, AI 工具命令',
  openGraph: {
    title: 'Gemini CLI 命令参考手册',
    description: '完整的 Gemini CLI 命令列表和详细说明',
    type: 'article',
  },
}

const commandCategories = [
  {
    id: 'basic',
    title: '基础命令',
    description: '日常使用的核心命令',
    icon: CommandLineIcon,
    commands: [
      {
        name: 'chat',
        syntax: 'gemini chat [message]',
        description: '启动交互式对话或发送单条消息',
        options: [
          { flag: '-m, --model', description: '指定使用的模型版本' },
          { flag: '-t, --temperature', description: '设置响应的创造性程度 (0-1)' },
          { flag: '--max-tokens', description: '限制响应的最大长度' }
        ],
        examples: [
          'gemini chat "解释什么是递归"',
          'gemini chat -m gemini-pro -t 0.7',
          'gemini chat --max-tokens 500 "写一个排序算法"'
        ]
      },
      {
        name: 'ask',
        syntax: 'gemini ask <question>',
        description: '快速提问并获得答案',
        options: [
          { flag: '-f, --format', description: '指定输出格式 (text, json, markdown)' },
          { flag: '-s, --stream', description: '启用流式输出' }
        ],
        examples: [
          'gemini ask "JavaScript 中的闭包是什么？"',
          'gemini ask -f markdown "如何优化网站性能？"',
          'gemini ask -s "详细解释机器学习的基本概念"'
        ]
      }
    ]
  },
  {
    id: 'file',
    title: '文件操作',
    description: '处理和分析文件内容',
    icon: DocumentTextIcon,
    commands: [
      {
        name: 'analyze',
        syntax: 'gemini analyze <file>',
        description: '分析文件内容并提供见解',
        options: [
          { flag: '-t, --type', description: '指定分析类型 (code, text, data)' },
          { flag: '-o, --output', description: '指定输出文件路径' },
          { flag: '--summary', description: '生成内容摘要' }
        ],
        examples: [
          'gemini analyze app.js',
          'gemini analyze -t code --summary main.py',
          'gemini analyze -o report.md data.csv'
        ]
      },
      {
        name: 'generate',
        syntax: 'gemini generate <type> [options]',
        description: '生成各种类型的文件和内容',
        options: [
          { flag: '-n, --name', description: '指定生成文件的名称' },
          { flag: '-l, --language', description: '指定编程语言' },
          { flag: '--template', description: '使用指定模板' }
        ],
        examples: [
          'gemini generate component -n UserList -l react',
          'gemini generate readme --template basic',
          'gemini generate test -n user.test.js'
        ]
      },
      {
        name: 'review',
        syntax: 'gemini review <file>',
        description: '代码审查和质量检查',
        options: [
          { flag: '--style', description: '检查代码风格' },
          { flag: '--security', description: '进行安全性检查' },
          { flag: '--performance', description: '分析性能问题' }
        ],
        examples: [
          'gemini review src/utils.js',
          'gemini review --style --security app.py',
          'gemini review --performance database.sql'
        ]
      }
    ]
  },
  {
    id: 'config',
    title: '配置管理',
    description: '管理 CLI 设置和偏好',
    icon: CogIcon,
    commands: [
      {
        name: 'config',
        syntax: 'gemini config <action> [key] [value]',
        description: '管理配置设置',
        options: [
          { flag: 'set', description: '设置配置值' },
          { flag: 'get', description: '获取配置值' },
          { flag: 'list', description: '列出所有配置' },
          { flag: 'reset', description: '重置配置到默认值' }
        ],
        examples: [
          'gemini config set model gemini-pro',
          'gemini config get temperature',
          'gemini config list',
          'gemini config reset'
        ]
      },
      {
        name: 'auth',
        syntax: 'gemini auth [action]',
        description: '管理认证和授权',
        options: [
          { flag: 'login', description: '登录 Google 账户' },
          { flag: 'logout', description: '退出当前账户' },
          { flag: 'status', description: '查看认证状态' }
        ],
        examples: [
          'gemini auth login',
          'gemini auth status',
          'gemini auth logout'
        ]
      }
    ]
  },
  {
    id: 'utility',
    title: '实用工具',
    description: '辅助功能和工具命令',
    icon: QuestionMarkCircleIcon,
    commands: [
      {
        name: 'help',
        syntax: 'gemini help [command]',
        description: '显示帮助信息',
        options: [
          { flag: '--all', description: '显示所有命令的帮助' },
          { flag: '--examples', description: '显示使用示例' }
        ],
        examples: [
          'gemini help',
          'gemini help chat',
          'gemini help --all'
        ]
      },
      {
        name: 'version',
        syntax: 'gemini version',
        description: '显示版本信息',
        options: [
          { flag: '--check', description: '检查是否有新版本' }
        ],
        examples: [
          'gemini version',
          'gemini version --check'
        ]
      },
      {
        name: 'history',
        syntax: 'gemini history [action]',
        description: '管理命令历史记录',
        options: [
          { flag: 'list', description: '显示历史记录' },
          { flag: 'clear', description: '清除历史记录' },
          { flag: 'export', description: '导出历史记录' }
        ],
        examples: [
          'gemini history list',
          'gemini history clear',
          'gemini history export history.json'
        ]
      }
    ]
  }
]

const globalOptions = [
  { flag: '-h, --help', description: '显示帮助信息' },
  { flag: '-v, --verbose', description: '启用详细输出' },
  { flag: '-q, --quiet', description: '静默模式，减少输出' },
  { flag: '--no-color', description: '禁用彩色输出' },
  { flag: '--config', description: '指定配置文件路径' },
  { flag: '--api-key', description: '指定 API 密钥' }
]

const quickReference = [
  { command: 'gemini chat', description: '开始交互式对话' },
  { command: 'gemini ask "问题"', description: '快速提问' },
  { command: 'gemini analyze file.js', description: '分析代码文件' },
  { command: 'gemini generate component', description: '生成代码组件' },
  { command: 'gemini config list', description: '查看所有配置' },
  { command: 'gemini help', description: '显示帮助信息' }
]

export default function CommandsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              命令参考手册
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              完整的 Gemini CLI 命令列表、参数说明和使用示例，
              帮助您快速找到所需的命令和语法。
            </p>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              快速参考
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              最常用的命令一览
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickReference.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-mono text-sm text-blue-600 mb-2">{item.command}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Options */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              全局选项
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              适用于所有命令的通用选项
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalOptions.map((option, index) => (
                <div key={index} className="flex items-start">
                  <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-mono mr-4 flex-shrink-0">
                    {option.flag}
                  </code>
                  <span className="text-gray-700">{option.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Command Categories */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              命令分类
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              按功能分类的详细命令说明
            </p>
          </div>

          <div className="space-y-12">
            {commandCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {category.commands.map((command, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-6">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{command.name}</h4>
                        <div className="bg-gray-900 rounded-lg px-4 py-2 mb-3">
                          <code className="text-green-400 font-mono text-sm">{command.syntax}</code>
                        </div>
                        <p className="text-gray-700">{command.description}</p>
                      </div>

                      {command.options && command.options.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-900 mb-2">选项：</h5>
                          <div className="space-y-2">
                            {command.options.map((option, optIndex) => (
                              <div key={optIndex} className="flex items-start text-sm">
                                <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-mono mr-3 flex-shrink-0">
                                  {option.flag}
                                </code>
                                <span className="text-gray-600">{option.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {command.examples && command.examples.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 mb-2">示例：</h5>
                          <div className="space-y-2">
                            {command.examples.map((example, exIndex) => (
                              <div key={exIndex} className="bg-gray-50 rounded px-3 py-2">
                                <code className="text-blue-600 font-mono text-sm">{example}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              使用提示
            </h2>
            <div className="mt-8 space-y-4 text-left">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">💡 获取帮助</h3>
                <p className="text-gray-700 text-sm">
                  使用 <code className="bg-gray-100 px-1 rounded">gemini help [command]</code> 获取特定命令的详细帮助信息
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">⚡ 命令补全</h3>
                <p className="text-gray-700 text-sm">
                  大多数终端支持 Tab 键自动补全命令和参数
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">📝 配置文件</h3>
                <p className="text-gray-700 text-sm">
                  使用配置文件保存常用设置，避免重复输入参数
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
