import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CubeIcon, 
  PuzzlePieceIcon, 
  CheckCircleIcon,
  CodeBracketIcon,
  CogIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '扩展架构 | Gemini CLI 开发者文档',
  description: '深入了解 Gemini CLI 扩展系统的架构设计，包括扩展类型、生命周期、通信机制和最佳实践。',
  keywords: 'Gemini CLI 扩展架构, 扩展系统, 插件架构, 扩展开发, 模块化设计',
  openGraph: {
    title: '扩展架构 - Gemini CLI 开发者文档',
    description: '理解扩展系统的设计和架构',
    type: 'article',
  },
}

const architectureOverview = {
  description: 'Gemini CLI 采用模块化扩展架构，支持多种扩展类型和灵活的集成方式',
  principles: [
    '模块化设计',
    '松耦合架构',
    '插件化扩展',
    '事件驱动通信',
    '安全隔离',
    '热插拔支持'
  ],
  benefits: [
    '易于扩展和维护',
    '支持第三方开发',
    '降低系统复杂度',
    '提高代码复用性',
    '增强系统稳定性',
    '支持渐进式升级'
  ]
}

const extensionTypes = [
  {
    type: 'Command Extensions',
    name: '命令扩展',
    description: '添加新的 CLI 命令和子命令',
    icon: CodeBracketIcon,
    features: [
      '自定义命令实现',
      '参数解析和验证',
      '帮助文档生成',
      '命令别名支持'
    ],
    example: `// 命令扩展示例
export class AnalyzeCommand implements CommandExtension {
  name = 'analyze'
  description = '分析代码质量'
  
  async execute(args: CommandArgs): Promise<void> {
    const { file, type } = args
    const result = await this.analyzeFile(file, type)
    console.log(result)
  }
  
  getSchema(): CommandSchema {
    return {
      arguments: [
        { name: 'file', type: 'string', required: true }
      ],
      options: [
        { name: 'type', type: 'string', default: 'quality' }
      ]
    }
  }
}`
  },
  {
    type: 'Language Extensions',
    name: '语言扩展',
    description: '支持新的编程语言和文件类型',
    icon: CubeIcon,
    features: [
      '语法高亮支持',
      '代码解析器',
      '智能补全',
      '错误检测'
    ],
    example: `// 语言扩展示例
export class RustLanguageExtension implements LanguageExtension {
  name = 'rust'
  fileExtensions = ['.rs']
  
  async parseFile(content: string): Promise<ParseResult> {
    return this.rustParser.parse(content)
  }
  
  async getCompletions(context: CompletionContext): Promise<Completion[]> {
    return this.rustAnalyzer.getCompletions(context)
  }
  
  async validateSyntax(content: string): Promise<Diagnostic[]> {
    return this.rustChecker.validate(content)
  }
}`
  },
  {
    type: 'Tool Extensions',
    name: '工具扩展',
    description: '集成外部工具和服务',
    icon: CogIcon,
    features: [
      '工具包装器',
      '配置管理',
      '结果格式化',
      '错误处理'
    ],
    example: `// 工具扩展示例
export class ESLintExtension implements ToolExtension {
  name = 'eslint'
  
  async run(files: string[], options: ESLintOptions): Promise<ToolResult> {
    const eslint = new ESLint(options)
    const results = await eslint.lintFiles(files)
    
    return {
      success: results.every(r => r.errorCount === 0),
      output: this.formatResults(results)
    }
  }
  
  getDefaultConfig(): ESLintOptions {
    return {
      configFile: '.eslintrc.js',
      fix: false
    }
  }
}`
  },
  {
    type: 'UI Extensions',
    name: 'UI 扩展',
    description: '自定义用户界面和交互',
    icon: PuzzlePieceIcon,
    features: [
      '自定义组件',
      '主题支持',
      '交互式界面',
      '数据可视化'
    ],
    example: `// UI 扩展示例
export class DashboardExtension implements UIExtension {
  name = 'dashboard'
  
  render(): UIComponent {
    return {
      type: 'dashboard',
      components: [
        { type: 'chart', data: this.getMetrics() },
        { type: 'table', data: this.getRecentActivity() }
      ]
    }
  }
  
  handleEvent(event: UIEvent): void {
    switch (event.type) {
      case 'refresh':
        this.refreshData()
        break
    }
  }
}`
  }
]

const extensionLifecycle = [
  {
    phase: 'Discovery',
    description: '扩展发现和注册',
    steps: [
      '扫描扩展目录',
      '读取扩展清单',
      '验证扩展格式',
      '注册到扩展注册表'
    ]
  },
  {
    phase: 'Loading',
    description: '扩展加载和初始化',
    steps: [
      '解析扩展依赖',
      '加载扩展模块',
      '创建扩展实例',
      '注入依赖服务'
    ]
  },
  {
    phase: 'Activation',
    description: '扩展激活和配置',
    steps: [
      '调用激活方法',
      '注册命令和钩子',
      '设置配置选项',
      '启动后台服务'
    ]
  },
  {
    phase: 'Runtime',
    description: '扩展运行时执行',
    steps: [
      '响应命令调用',
      '处理事件通知',
      '执行扩展逻辑',
      '与其他扩展通信'
    ]
  },
  {
    phase: 'Deactivation',
    description: '扩展停用和清理',
    steps: [
      '停止后台服务',
      '清理资源和状态',
      '注销命令和钩子',
      '保存配置数据'
    ]
  }
]

const communicationMechanisms = [
  {
    mechanism: 'Event System',
    description: '基于事件的异步通信',
    useCase: '扩展间松耦合通信',
    example: `// 事件系统示例
class ExtensionEventBus {
  private listeners: Map<string, Function[]> = new Map()
  
  on(event: string, listener: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }
    this.listeners.get(event)!.push(listener)
  }
  
  emit(event: string, data: any): void {
    const listeners = this.listeners.get(event) || []
    listeners.forEach(listener => {
      try {
        listener(data)
      } catch (error) {
        console.error('Event listener error:', error)
      }
    })
  }
}

// 使用示例
eventBus.on('file:changed', (filePath) => {
  console.log('File changed:', filePath)
})

eventBus.emit('file:changed', '/path/to/file.ts')`
  },
  {
    mechanism: 'Service Registry',
    description: '服务注册和依赖注入',
    useCase: '共享服务和资源',
    example: `// 服务注册示例
class ServiceRegistry {
  private services: Map<string, any> = new Map()
  
  register<T>(name: string, service: T): void {
    this.services.set(name, service)
  }
  
  get<T>(name: string): T {
    const service = this.services.get(name)
    if (!service) {
      throw new Error(\`Service '\${name}' not found\`)
    }
    return service as T
  }
}

// 扩展中使用
export class MyExtension implements Extension {
  private fileService: FileService
  
  activate(context: ExtensionContext): void {
    this.fileService = context.services.get('fileService')
  }
}`
  },
  {
    mechanism: 'Hook System',
    description: '钩子函数和拦截器',
    useCase: '扩展核心功能',
    example: `// 钩子系统示例
class HookManager {
  private hooks: Map<string, Hook[]> = new Map()
  
  registerHook(name: string, hook: Hook): void {
    if (!this.hooks.has(name)) {
      this.hooks.set(name, [])
    }
    this.hooks.get(name)!.push(hook)
  }
  
  async executeHooks(name: string, context: any): Promise<any> {
    const hooks = this.hooks.get(name) || []
    let result = context
    
    for (const hook of hooks) {
      result = await hook.execute(result)
    }
    
    return result
  }
}

// 钩子实现
export class ValidationHook implements Hook {
  async execute(context: any): Promise<any> {
    // 执行验证逻辑
    if (!this.validate(context)) {
      throw new Error('Validation failed')
    }
    return context
  }
}`
  }
]

const securityModel = {
  description: 'Gemini CLI 扩展系统采用多层安全模型，确保扩展的安全执行',
  layers: [
    {
      layer: 'Permission System',
      description: '基于权限的访问控制',
      features: [
        '细粒度权限定义',
        '权限申请和授权',
        '运行时权限检查',
        '权限审计日志'
      ]
    },
    {
      layer: 'Sandbox Isolation',
      description: '沙箱隔离执行环境',
      features: [
        '进程级别隔离',
        '文件系统访问限制',
        '网络访问控制',
        '资源使用限制'
      ]
    },
    {
      layer: 'Code Signing',
      description: '代码签名和验证',
      features: [
        '扩展签名验证',
        '发布者身份认证',
        '完整性检查',
        '恶意代码检测'
      ]
    },
    {
      layer: 'Runtime Monitoring',
      description: '运行时监控和保护',
      features: [
        '异常行为检测',
        '资源使用监控',
        '性能影响评估',
        '自动隔离机制'
      ]
    }
  ]
}

const extensionManifest = `{
  "name": "my-extension",
  "version": "1.0.0",
  "description": "示例扩展",
  "author": "Your Name",
  "license": "MIT",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",

  "geminiExtension": {
    "type": "command",
    "activationEvents": [
      "onCommand:my-extension.analyze",
      "onLanguage:typescript"
    ],
    "contributes": {
      "commands": [
        {
          "command": "my-extension.analyze",
          "title": "分析代码",
          "category": "分析"
        }
      ],
      "languages": [
        {
          "id": "typescript",
          "extensions": [".ts", ".tsx"],
          "configuration": "./language-configuration.json"
        }
      ],
      "configuration": {
        "title": "我的扩展",
        "properties": {
          "myExtension.enabled": {
            "type": "boolean",
            "default": true,
            "description": "启用扩展"
          }
        }
      }
    },
    "permissions": [
      "file:read",
      "file:write",
      "network:request",
      "process:spawn"
    ],
    "dependencies": {
      "@gemini-cli/core": "^1.0.0",
      "typescript": "^4.0.0"
    }
  },

  "scripts": {
    "build": "tsc",
    "test": "jest",
    "package": "gemini-cli package"
  },

  "devDependencies": {
    "@gemini-cli/extension-api": "^1.0.0",
    "@types/node": "^16.0.0",
    "typescript": "^4.0.0",
    "jest": "^27.0.0"
  }
}`

const performanceConsiderations = [
  {
    aspect: '启动性能',
    description: '优化扩展加载和启动时间',
    strategies: [
      '延迟加载非关键扩展',
      '使用激活事件控制加载时机',
      '优化扩展初始化代码',
      '缓存扩展元数据'
    ]
  },
  {
    aspect: '内存使用',
    description: '控制扩展内存占用',
    strategies: [
      '及时释放不需要的资源',
      '使用弱引用避免内存泄漏',
      '实现资源池和缓存策略',
      '监控内存使用情况'
    ]
  },
  {
    aspect: '执行效率',
    description: '提高扩展执行效率',
    strategies: [
      '使用异步操作避免阻塞',
      '实现批处理和并行处理',
      '优化算法和数据结构',
      '使用 Worker 线程处理重任务'
    ]
  },
  {
    aspect: '网络性能',
    description: '优化网络请求和数据传输',
    strategies: [
      '实现请求缓存和去重',
      '使用连接池管理连接',
      '压缩传输数据',
      '实现超时和重试机制'
    ]
  }
]

export default function ExtensionArchitecturePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CubeIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              扩展架构
            </h1>
            <p className="mt-4 text-lg text-orange-100">
              理解扩展系统的设计和架构
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-orange-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                架构设计
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                40 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Overview */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">架构概述</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {architectureOverview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-orange-900 mb-6">设计原则</h3>
              <ul className="space-y-3">
                {architectureOverview.principles.map((principle, index) => (
                  <li key={index} className="text-orange-800 flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">核心优势</h3>
              <ul className="space-y-3">
                {architectureOverview.benefits.map((benefit, index) => (
                  <li key={index} className="text-green-800 flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Extension Types */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">扩展类型</h2>
            <p className="mt-4 text-lg text-gray-600">
              Gemini CLI 支持的扩展类型和功能
            </p>
          </div>

          <div className="space-y-8">
            {extensionTypes.map((extension, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white mr-6">
                    <extension.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{extension.name}</h3>
                    <p className="text-gray-600 mb-4">{extension.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">核心功能：</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {extension.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-sm text-gray-600 flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">实现示例：</h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono whitespace-pre">{extension.example}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extension Lifecycle */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">扩展生命周期</h2>
            <p className="mt-4 text-lg text-gray-600">
              扩展从发现到卸载的完整生命周期
            </p>
          </div>

          <div className="space-y-8">
            {extensionLifecycle.map((phase, index) => (
              <div key={index} className="relative">
                {index < extensionLifecycle.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-orange-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    
                    <ul className="space-y-2">
                      {phase.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-sm text-gray-600 flex items-start">
                          <ArrowRightIcon className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Communication Mechanisms */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">通信机制</h2>
            <p className="mt-4 text-lg text-gray-600">
              扩展间和扩展与核心系统的通信方式
            </p>
          </div>

          <div className="space-y-8">
            {communicationMechanisms.map((mechanism, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{mechanism.mechanism}</h3>
                    <p className="text-gray-600 text-sm mt-1">{mechanism.description}</p>
                  </div>
                  <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                    {mechanism.useCase}
                  </span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{mechanism.example}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Model */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">安全模型</h2>
            <p className="mt-4 text-lg text-gray-600">
              {securityModel.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityModel.layers.map((layer, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-3">{layer.layer}</h3>
                <p className="text-red-800 text-sm mb-4">{layer.description}</p>
                
                <ul className="space-y-2">
                  {layer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-red-700 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extension Manifest */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">扩展清单</h2>
            <p className="mt-4 text-lg text-gray-600">
              扩展的配置文件格式和选项
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{extensionManifest}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Considerations */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">性能考虑</h2>
            <p className="mt-4 text-lg text-gray-600">
              扩展开发中的性能优化策略
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performanceConsiderations.map((consideration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{consideration.aspect}</h3>
                <p className="text-gray-600 text-sm mb-4">{consideration.description}</p>
                
                <ul className="space-y-2">
                  {consideration.strategies.map((strategy, strategyIndex) => (
                    <li key={strategyIndex} className="text-sm text-gray-600 flex items-start">
                      <ArrowRightIcon className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      {strategy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-orange-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              开始创建你的第一个扩展
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/first-extension"
                className="rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white hover:bg-orange-500 transition-colors"
              >
                创建第一个扩展
              </Link>
              <Link
                href="/docs/extension-publishing"
                className="rounded-lg border border-orange-600 px-6 py-3 text-base font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
              >
                扩展发布指南
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
