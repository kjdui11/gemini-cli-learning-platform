import { Metadata } from 'next'
import Link from 'next/link'
import {
  CloudArrowUpIcon,
  CheckCircleIcon,
  TagIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '扩展发布指南 | Gemini CLI 开发者文档',
  description: '详细指南：如何发布和分发 Gemini CLI 扩展，包括打包、版本管理、发布流程和最佳实践。',
  keywords: '扩展发布, Gemini CLI 扩展分发, 扩展打包, 版本管理, 扩展商店',
  openGraph: {
    title: '扩展发布指南 - Gemini CLI 开发者文档',
    description: '学习如何发布和分发扩展',
    type: 'article',
  },
}

const publishingOverview = {
  description: 'Gemini CLI 提供多种扩展发布方式，支持官方商店、私有仓库和本地分发',
  channels: [
    {
      name: 'Gemini CLI 扩展商店',
      description: '官方扩展商店，面向所有用户',
      features: ['自动审核', '版本管理', '使用统计', '用户反馈']
    },
    {
      name: '私有仓库',
      description: '企业内部或团队专用',
      features: ['访问控制', '自定义域名', '批量部署', '企业支持']
    },
    {
      name: '本地分发',
      description: '直接分发 .vsix 文件',
      features: ['离线安装', '快速测试', '内部分享', '版本控制']
    }
  ]
}

const preparationSteps = [
  {
    step: 1,
    title: '代码质量检查',
    description: '确保代码质量和最佳实践',
    tasks: [
      '运行所有测试用例',
      '检查代码覆盖率',
      '修复 ESLint 警告',
      '优化性能瓶颈'
    ]
  },
  {
    step: 2,
    title: '文档完善',
    description: '准备完整的文档',
    tasks: [
      '编写 README.md',
      '创建使用示例',
      '添加 API 文档',
      '准备变更日志'
    ]
  },
  {
    step: 3,
    title: '版本管理',
    description: '设置正确的版本号',
    tasks: [
      '遵循语义化版本',
      '更新 package.json',
      '创建 Git 标签',
      '生成发布说明'
    ]
  },
  {
    step: 4,
    title: '安全检查',
    description: '确保扩展安全性',
    tasks: [
      '审查权限申请',
      '检查依赖安全',
      '验证代码签名',
      '测试沙箱隔离'
    ]
  }
]

const packageCommand = `# 打包扩展
npm run build
npm run test
npm run package

# 生成的文件
my-extension-1.0.0.vsix

# 验证打包内容
gemini-cli extension validate my-extension-1.0.0.vsix

# 本地测试安装
gemini-cli extension install my-extension-1.0.0.vsix`

const versioningGuide = `{
  "version": "1.2.3",
  "description": "语义化版本说明",
  
  "versionExplanation": {
    "major": "1 - 重大变更，不兼容的 API 修改",
    "minor": "2 - 新功能，向后兼容",
    "patch": "3 - 错误修复，向后兼容"
  },
  
  "examples": {
    "initialRelease": "1.0.0",
    "bugFix": "1.0.1",
    "newFeature": "1.1.0",
    "breakingChange": "2.0.0",
    "preRelease": "1.1.0-beta.1"
  },
  
  "scripts": {
    "version:patch": "npm version patch",
    "version:minor": "npm version minor", 
    "version:major": "npm version major",
    "version:prerelease": "npm version prerelease --preid=beta"
  }
}`

const publishingSteps = [
  {
    platform: 'Gemini CLI 扩展商店',
    description: '发布到官方扩展商店',
    steps: [
      '注册开发者账号',
      '验证身份信息',
      '上传扩展包',
      '等待审核通过'
    ],
    commands: [
      'gemini-cli auth login',
      'gemini-cli extension publish',
      'gemini-cli extension status'
    ]
  },
  {
    platform: 'NPM 注册表',
    description: '发布到 NPM 生态系统',
    steps: [
      '配置 NPM 账号',
      '设置发布脚本',
      '执行发布命令',
      '验证发布结果'
    ],
    commands: [
      'npm login',
      'npm publish',
      'npm view my-extension'
    ]
  },
  {
    platform: 'GitHub Releases',
    description: '通过 GitHub 发布',
    steps: [
      '推送代码到 GitHub',
      '创建发布标签',
      '上传构建产物',
      '编写发布说明'
    ],
    commands: [
      'git tag v1.0.0',
      'git push origin v1.0.0',
      'gh release create v1.0.0 *.vsix'
    ]
  }
]

const cicdPipeline = `# .github/workflows/publish.yml
name: 发布扩展

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: 设置 Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: 安装依赖
      run: npm ci
    
    - name: 运行测试
      run: npm test
    
    - name: 构建项目
      run: npm run build
    
    - name: 打包扩展
      run: npm run package
    
    - name: 发布到扩展商店
      env:
        GEMINI_CLI_TOKEN: \${{ secrets.GEMINI_CLI_TOKEN }}
      run: gemini-cli extension publish
    
    - name: 发布到 NPM
      env:
        NPM_TOKEN: \${{ secrets.NPM_TOKEN }}
      run: |
        echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ~/.npmrc
        npm publish
    
    - name: 创建 GitHub Release
      uses: softprops/action-gh-release@v1
      with:
        files: '*.vsix'
        generate_release_notes: true
      env:
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`

const marketingBestPractices = [
  {
    category: '扩展描述',
    practices: [
      '编写清晰简洁的描述',
      '突出核心功能和优势',
      '使用关键词优化搜索',
      '提供使用场景示例'
    ]
  },
  {
    category: '视觉设计',
    practices: [
      '设计专业的图标',
      '提供功能截图',
      '录制演示视频',
      '保持视觉一致性'
    ]
  },
  {
    category: '用户体验',
    practices: [
      '提供详细的安装指南',
      '创建快速开始教程',
      '设置合理的默认配置',
      '提供配置向导'
    ]
  },
  {
    category: '社区建设',
    practices: [
      '建立用户反馈渠道',
      '及时回应问题和建议',
      '维护活跃的文档',
      '参与社区讨论'
    ]
  }
]

const maintenanceGuide = [
  {
    aspect: '版本更新',
    description: '定期发布更新和修复',
    tasks: [
      '修复用户报告的 Bug',
      '添加用户请求的功能',
      '更新依赖库版本',
      '优化性能和稳定性'
    ]
  },
  {
    aspect: '用户支持',
    description: '提供持续的用户支持',
    tasks: [
      '监控错误报告',
      '回答用户问题',
      '更新文档和 FAQ',
      '提供迁移指南'
    ]
  },
  {
    aspect: '兼容性',
    description: '保持与平台的兼容性',
    tasks: [
      '测试新版本兼容性',
      '更新 API 调用',
      '处理废弃功能',
      '支持多平台'
    ]
  },
  {
    aspect: '安全维护',
    description: '确保扩展安全性',
    tasks: [
      '定期安全审计',
      '更新安全依赖',
      '修复安全漏洞',
      '监控异常行为'
    ]
  }
]

const analyticsTracking = `// 扩展使用分析
import { analytics } from '@gemini-cli/extension-api'

export class ExtensionAnalytics {
  private analytics: Analytics
  
  constructor() {
    this.analytics = analytics.create({
      extensionId: 'my-extension',
      version: '1.0.0',
      userId: this.getUserId()
    })
  }
  
  trackCommand(commandName: string, args?: any): void {
    this.analytics.track('command_executed', {
      command: commandName,
      args: this.sanitizeArgs(args),
      timestamp: Date.now()
    })
  }
  
  trackError(error: Error, context?: any): void {
    this.analytics.track('error_occurred', {
      message: error.message,
      stack: error.stack,
      context: context,
      timestamp: Date.now()
    })
  }
  
  trackFeatureUsage(feature: string, metadata?: any): void {
    this.analytics.track('feature_used', {
      feature: feature,
      metadata: metadata,
      timestamp: Date.now()
    })
  }
  
  private getUserId(): string {
    // 生成匿名用户 ID
    return crypto.randomUUID()
  }
  
  private sanitizeArgs(args: any): any {
    // 移除敏感信息
    if (!args) return args
    
    const sanitized = { ...args }
    delete sanitized.password
    delete sanitized.token
    delete sanitized.apiKey
    
    return sanitized
  }
}`

const troubleshootingGuide = [
  {
    issue: '发布失败',
    causes: [
      '权限不足',
      '版本号冲突',
      '文件格式错误',
      '网络连接问题'
    ],
    solutions: [
      '检查登录状态和权限',
      '更新版本号',
      '验证打包文件',
      '重试发布命令'
    ]
  },
  {
    issue: '审核被拒',
    causes: [
      '违反商店政策',
      '安全问题',
      '质量不达标',
      '文档不完整'
    ],
    solutions: [
      '阅读审核反馈',
      '修复安全漏洞',
      '改进代码质量',
      '完善文档'
    ]
  },
  {
    issue: '用户安装失败',
    causes: [
      '依赖冲突',
      '权限问题',
      '版本不兼容',
      '网络问题'
    ],
    solutions: [
      '检查依赖版本',
      '更新权限配置',
      '测试兼容性',
      '提供离线安装'
    ]
  }
]

export default function ExtensionPublishingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CloudArrowUpIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              扩展发布指南
            </h1>
            <p className="mt-4 text-lg text-green-100">
              学习如何发布和分发扩展
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                发布流程
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                25 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Publishing Overview */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">发布概述</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {publishingOverview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publishingOverview.channels.map((channel, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3">{channel.name}</h3>
                <p className="text-green-800 text-sm mb-4">{channel.description}</p>
                
                <ul className="space-y-2">
                  {channel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-green-700 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preparation Steps */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">发布准备</h2>
            <p className="mt-4 text-lg text-gray-600">
              发布前的必要准备工作
            </p>
          </div>

          <div className="space-y-8">
            {preparationSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < preparationSteps.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-green-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-sm font-semibold">
                    {step.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {task}
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

      {/* Package Command */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">打包扩展</h2>
            <p className="mt-4 text-lg text-gray-600">
              将扩展打包为可分发格式
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{packageCommand}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Versioning Guide */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">版本管理</h2>
            <p className="mt-4 text-lg text-gray-600">
              遵循语义化版本规范
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{versioningGuide}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Publishing Steps */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">发布流程</h2>
            <p className="mt-4 text-lg text-gray-600">
              不同平台的发布步骤
            </p>
          </div>

          <div className="space-y-8">
            {publishingSteps.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <GlobeAltIcon className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{platform.platform}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">{platform.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">发布步骤：</h4>
                    <ol className="space-y-2">
                      {platform.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-semibold mr-3 flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">命令示例：</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      {platform.commands.map((command, cmdIndex) => (
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

      {/* CI/CD Pipeline */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">自动化发布</h2>
            <p className="mt-4 text-lg text-gray-600">
              设置 CI/CD 流水线自动发布
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{cicdPipeline}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Best Practices */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">营销最佳实践</h2>
            <p className="mt-4 text-lg text-gray-600">
              提高扩展可见性和用户采用率
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingBestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <TagIcon className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{practice.category}</h3>
                </div>
                
                <ul className="space-y-2">
                  {practice.practices.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Tracking */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">使用分析</h2>
            <p className="mt-4 text-lg text-gray-600">
              跟踪扩展使用情况和性能
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{analyticsTracking}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Guide */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">维护指南</h2>
            <p className="mt-4 text-lg text-gray-600">
              发布后的持续维护和支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceGuide.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{guide.aspect}</h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                
                <ul className="space-y-2">
                  {guide.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm text-gray-600 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">故障排除</h2>
            <p className="mt-4 text-lg text-gray-600">
              常见发布问题和解决方案
            </p>
          </div>

          <div className="space-y-6">
            {troubleshootingGuide.map((trouble, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{trouble.issue}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">可能原因：</h4>
                    <ul className="space-y-1">
                      {trouble.causes.map((cause, causeIndex) => (
                        <li key={causeIndex} className="text-sm text-red-600 flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">解决方案：</h4>
                    <ul className="space-y-1">
                      {trouble.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-green-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {solution}
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

      {/* Next Steps */}
      <div className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              探索更多开发和贡献相关内容
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-500 transition-colors"
              >
                贡献流程
              </Link>
              <Link
                href="/docs/coding-standards"
                className="rounded-lg border border-green-600 px-6 py-3 text-base font-semibold text-green-600 hover:bg-green-50 transition-colors"
              >
                代码规范
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
