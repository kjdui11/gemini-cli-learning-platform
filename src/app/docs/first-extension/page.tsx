import { Metadata } from 'next'
import Link from 'next/link'
import {
  RocketLaunchIcon,
  CheckCircleIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '创建第一个扩展 | Gemini CLI 开发者文档',
  description: '从零开始创建你的第一个 Gemini CLI 扩展，包括项目设置、代码实现、测试和发布的完整指南。',
  keywords: '创建扩展, Gemini CLI 扩展开发, 第一个扩展, 扩展教程, 插件开发',
  openGraph: {
    title: '创建第一个扩展 - Gemini CLI 开发者文档',
    description: '从零开始创建 Gemini CLI 扩展',
    type: 'article',
  },
}

const prerequisites = [
  'Node.js 18+ 和 npm 8+',
  'TypeScript 基础知识',
  'Gemini CLI 已安装',
  '代码编辑器（推荐 VS Code）'
]

const projectStructure = `my-first-extension/
├── package.json              # 项目配置
├── tsconfig.json            # TypeScript 配置
├── src/
│   ├── index.ts            # 扩展入口点
│   ├── commands/           # 命令实现
│   │   └── hello.ts
│   ├── providers/          # 服务提供者
│   │   └── completion.ts
│   └── utils/              # 工具函数
│       └── helpers.ts
├── test/                   # 测试文件
│   ├── commands/
│   └── providers/
├── docs/                   # 文档
│   └── README.md
└── dist/                   # 编译输出`

const setupSteps = [
  {
    step: 1,
    title: '创建项目',
    description: '使用 Gemini CLI 脚手架创建扩展项目',
    commands: [
      'gemini-cli create extension my-first-extension',
      'cd my-first-extension',
      'npm install'
    ]
  },
  {
    step: 2,
    title: '配置项目',
    description: '设置 package.json 和 TypeScript 配置',
    commands: [
      'npm init -y',
      'npm install --save-dev typescript @types/node',
      'npx tsc --init'
    ]
  },
  {
    step: 3,
    title: '安装依赖',
    description: '安装 Gemini CLI 扩展 API 和开发工具',
    commands: [
      'npm install @gemini-cli/extension-api',
      'npm install --save-dev @gemini-cli/extension-dev-tools',
      'npm install --save-dev jest @types/jest'
    ]
  }
]

const packageJsonConfig = `{
  "name": "my-first-extension",
  "version": "1.0.0",
  "description": "我的第一个 Gemini CLI 扩展",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "test": "jest",
    "package": "gemini-cli package",
    "publish": "gemini-cli publish"
  },
  "geminiExtension": {
    "type": "command",
    "activationEvents": [
      "onCommand:my-first-extension.hello"
    ],
    "contributes": {
      "commands": [
        {
          "command": "my-first-extension.hello",
          "title": "Hello World",
          "category": "示例"
        }
      ]
    },
    "permissions": [
      "file:read"
    ]
  },
  "dependencies": {
    "@gemini-cli/extension-api": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "typescript": "^4.9.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0"
  }
}`

const extensionEntry = `// src/index.ts - 扩展入口点
import { ExtensionContext, commands } from '@gemini-cli/extension-api'
import { HelloCommand } from './commands/hello'

export function activate(context: ExtensionContext) {
  console.log('我的第一个扩展已激活')
  
  // 注册 Hello 命令
  const helloCommand = new HelloCommand()
  const disposable = commands.registerCommand(
    'my-first-extension.hello',
    helloCommand.execute.bind(helloCommand)
  )
  
  // 将命令添加到上下文中，以便在扩展停用时清理
  context.subscriptions.push(disposable)
  
  // 注册其他功能
  registerProviders(context)
  setupEventListeners(context)
}

export function deactivate() {
  console.log('我的第一个扩展已停用')
  // 清理资源
}

function registerProviders(context: ExtensionContext) {
  // 注册代码补全提供者
  // const completionProvider = new MyCompletionProvider()
  // context.subscriptions.push(
  //   languages.registerCompletionItemProvider(
  //     'typescript',
  //     completionProvider
  //   )
  // )
}

function setupEventListeners(context: ExtensionContext) {
  // 设置事件监听器
  // workspace.onDidChangeTextDocument((event) => {
  //   console.log('文档已更改:', event.document.fileName)
  // })
}`

const helloCommand = `// src/commands/hello.ts - Hello 命令实现
import { window, workspace } from '@gemini-cli/extension-api'

export class HelloCommand {
  async execute(...args: any[]): Promise<void> {
    try {
      // 获取当前工作区信息
      const workspaceFolder = workspace.getWorkspaceFolder()
      const projectName = workspaceFolder?.name || '未知项目'
      
      // 显示问候消息
      const message = \`Hello from Gemini CLI Extension! 当前项目: \${projectName}\`
      await window.showInformationMessage(message)
      
      // 获取用户输入
      const userInput = await window.showInputBox({
        prompt: '请输入你的名字',
        placeholder: '输入名字...'
      })
      
      if (userInput) {
        await window.showInformationMessage(\`你好, \${userInput}! 欢迎使用 Gemini CLI!\`)
        
        // 记录到输出通道
        this.logToOutput(\`用户输入: \${userInput}\`)
      }
      
      // 执行一些文件操作
      await this.demonstrateFileOperations()
      
    } catch (error) {
      await window.showErrorMessage(\`命令执行失败: \${error.message}\`)
    }
  }
  
  private async demonstrateFileOperations(): Promise<void> {
    try {
      // 读取当前目录下的文件
      const files = await workspace.findFiles('**/*.{ts,js,json}', '**/node_modules/**', 10)
      
      if (files.length > 0) {
        const fileList = files.map(file => file.path).join('\\n')
        await window.showInformationMessage(
          \`找到 \${files.length} 个文件:\\n\${fileList}\`,
          { modal: false }
        )
      } else {
        await window.showInformationMessage('当前目录下没有找到相关文件')
      }
      
    } catch (error) {
      console.error('文件操作失败:', error)
    }
  }
  
  private logToOutput(message: string): void {
    const outputChannel = window.createOutputChannel('My First Extension')
    outputChannel.appendLine(\`[\${new Date().toISOString()}] \${message}\`)
    outputChannel.show()
  }
}`

const testExample = `// test/commands/hello.test.ts - 测试示例
import { HelloCommand } from '../../src/commands/hello'
import { window, workspace } from '@gemini-cli/extension-api'

// Mock Gemini CLI API
jest.mock('@gemini-cli/extension-api', () => ({
  window: {
    showInformationMessage: jest.fn(),
    showInputBox: jest.fn(),
    showErrorMessage: jest.fn(),
    createOutputChannel: jest.fn(() => ({
      appendLine: jest.fn(),
      show: jest.fn()
    }))
  },
  workspace: {
    getWorkspaceFolder: jest.fn(),
    findFiles: jest.fn()
  }
}))

describe('HelloCommand', () => {
  let helloCommand: HelloCommand
  
  beforeEach(() => {
    helloCommand = new HelloCommand()
    jest.clearAllMocks()
  })
  
  it('应该显示问候消息', async () => {
    // 设置 mock
    ;(workspace.getWorkspaceFolder as jest.Mock).mockReturnValue({
      name: 'test-project'
    })
    ;(window.showInputBox as jest.Mock).mockResolvedValue('张三')
    ;(workspace.findFiles as jest.Mock).mockResolvedValue([
      { path: '/test/file1.ts' },
      { path: '/test/file2.js' }
    ])
    
    // 执行命令
    await helloCommand.execute()
    
    // 验证结果
    expect(window.showInformationMessage).toHaveBeenCalledWith(
      'Hello from Gemini CLI Extension! 当前项目: test-project'
    )
    expect(window.showInformationMessage).toHaveBeenCalledWith(
      '你好, 张三! 欢迎使用 Gemini CLI!'
    )
  })
  
  it('应该处理用户取消输入的情况', async () => {
    ;(workspace.getWorkspaceFolder as jest.Mock).mockReturnValue({
      name: 'test-project'
    })
    ;(window.showInputBox as jest.Mock).mockResolvedValue(undefined)
    ;(workspace.findFiles as jest.Mock).mockResolvedValue([])
    
    await helloCommand.execute()
    
    expect(window.showInformationMessage).toHaveBeenCalledTimes(2) // 只有初始消息和文件消息
  })
  
  it('应该处理错误情况', async () => {
    ;(workspace.getWorkspaceFolder as jest.Mock).mockImplementation(() => {
      throw new Error('测试错误')
    })
    
    await helloCommand.execute()
    
    expect(window.showErrorMessage).toHaveBeenCalledWith(
      '命令执行失败: 测试错误'
    )
  })
})`

const buildAndTest = [
  {
    phase: '构建',
    description: '编译 TypeScript 代码',
    commands: [
      'npm run build',
      '# 或者使用监视模式',
      'npm run watch'
    ]
  },
  {
    phase: '测试',
    description: '运行单元测试',
    commands: [
      'npm test',
      '# 或者使用监视模式',
      'npm test -- --watch'
    ]
  },
  {
    phase: '打包',
    description: '打包扩展为可分发格式',
    commands: [
      'npm run package',
      '# 生成 .vsix 文件'
    ]
  },
  {
    phase: '安装测试',
    description: '本地安装测试扩展',
    commands: [
      'gemini-cli extension install ./my-first-extension-1.0.0.vsix',
      'gemini-cli hello'
    ]
  }
]

const debuggingTips = [
  {
    tip: '使用输出通道',
    description: '创建输出通道来记录调试信息',
    example: `const outputChannel = window.createOutputChannel('My Extension')
outputChannel.appendLine('调试信息: ' + JSON.stringify(data))
outputChannel.show()`
  },
  {
    tip: '错误处理',
    description: '正确处理和显示错误信息',
    example: `try {
  await riskyOperation()
} catch (error) {
  await window.showErrorMessage(\`操作失败: \${error.message}\`)
  console.error('详细错误:', error)
}`
  },
  {
    tip: '配置验证',
    description: '验证扩展配置和用户输入',
    example: `const config = workspace.getConfiguration('myExtension')
const apiKey = config.get<string>('apiKey')

if (!apiKey) {
  await window.showWarningMessage('请配置 API 密钥')
  return
}`
  },
  {
    tip: '性能监控',
    description: '监控扩展性能和资源使用',
    example: `const startTime = Date.now()
await longRunningOperation()
const duration = Date.now() - startTime
console.log(\`操作耗时: \${duration}ms\`)`
  }
]

export default function FirstExtensionPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <RocketLaunchIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              创建第一个扩展
            </h1>
            <p className="mt-4 text-lg text-purple-100">
              从零开始创建 Gemini CLI 扩展
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-purple-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                实践教程
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                30 分钟完成
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">准备工作</h2>
            <p className="mt-4 text-lg text-gray-600">
              开始之前，请确保你已经准备好以下环境
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-6">环境要求</h3>
            <ul className="space-y-3">
              {prerequisites.map((prerequisite, index) => (
                <li key={index} className="text-purple-800 flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  {prerequisite}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Project Structure */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">项目结构</h2>
            <p className="mt-4 text-lg text-gray-600">
              了解扩展项目的标准目录结构
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{projectStructure}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Setup Steps */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">项目设置</h2>
            <p className="mt-4 text-lg text-gray-600">
              按照以下步骤创建和配置扩展项目
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < setupSteps.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-purple-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold">
                    {step.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      {step.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="text-green-400 text-sm font-mono">
                          {command}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Package.json Configuration */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">配置文件</h2>
            <p className="mt-4 text-lg text-gray-600">
              设置 package.json 文件
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{packageJsonConfig}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Extension Entry Point */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">扩展入口</h2>
            <p className="mt-4 text-lg text-gray-600">
              实现扩展的主入口文件
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{extensionEntry}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Command Implementation */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">命令实现</h2>
            <p className="mt-4 text-lg text-gray-600">
              创建你的第一个命令
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{helloCommand}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Test Example */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">测试代码</h2>
            <p className="mt-4 text-lg text-gray-600">
              为扩展编写单元测试
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{testExample}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Build and Test */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">构建和测试</h2>
            <p className="mt-4 text-lg text-gray-600">
              编译、测试和打包你的扩展
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buildAndTest.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <PlayIcon className="h-6 w-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                
                <div className="bg-gray-900 rounded-lg p-3">
                  {phase.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="text-green-400 text-sm font-mono">
                      {command}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Debugging Tips */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">调试技巧</h2>
            <p className="mt-4 text-lg text-gray-600">
              扩展开发中的调试和故障排除
            </p>
          </div>

          <div className="space-y-6">
            {debuggingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.tip}</h3>
                <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
                
                <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{tip.example}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-purple-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">下一步</h2>
            <p className="text-lg text-gray-600 mb-8">
              恭喜！你已经创建了第一个扩展。现在可以学习更多高级功能
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/extension-publishing"
                className="rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white hover:bg-purple-500 transition-colors"
              >
                扩展发布指南
              </Link>
              <Link
                href="/docs/extension-architecture"
                className="rounded-lg border border-purple-600 px-6 py-3 text-base font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
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
