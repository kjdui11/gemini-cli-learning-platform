import { Metadata } from 'next'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  CogIcon,
  LightBulbIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Gemini CLI 使用指南 | 从入门到进阶的完整教程',
  description: '全面的 Gemini CLI 使用指南，包含入门教程、进阶技巧、实战案例和最佳实践。学习如何使用 AI 命令行工具提升开发效率。',
  keywords: 'Gemini CLI 教程, AI 编程指南, 命令行工具使用, Google Gemini CLI 进阶, AI 辅助开发',
  openGraph: {
    title: 'Gemini CLI 使用指南 - 从入门到进阶',
    description: '全面的 Gemini CLI 使用指南，助您掌握 AI 辅助编程技能',
    type: 'article',
  },
}

const tutorialCategories = [
  {
    id: 'beginner',
    title: '入门教程',
    description: '适合初学者的基础教程，快速上手 Gemini CLI',
    icon: AcademicCapIcon,
    color: 'from-green-500 to-emerald-600',
    tutorials: [
      {
        title: '第一次使用 Gemini CLI',
        description: '了解基本概念，完成第一个 AI 对话',
        href: '/guides/getting-started',
        duration: '10 分钟',
        level: '入门'
      },
      {
        title: '基本命令操作',
        description: '学习常用命令和基本语法',
        href: '/guides/basic-commands',
        duration: '15 分钟',
        level: '入门'
      },
      {
        title: '文件操作入门',
        description: '使用 AI 处理和分析文件内容',
        href: '/guides/file-operations',
        duration: '20 分钟',
        level: '入门'
      }
    ]
  },
  {
    id: 'intermediate',
    title: '进阶教程',
    description: '深入学习高级功能和最佳实践',
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-indigo-600',
    tutorials: [
      {
        title: '高级配置选项',
        description: '自定义 Gemini CLI 配置和环境设置',
        href: '/guides/advanced-config',
        duration: '25 分钟',
        level: '进阶'
      },
      {
        title: '与其他工具集成',
        description: '集成到现有开发工作流程中',
        href: '/guides/integration',
        duration: '30 分钟',
        level: '进阶'
      },
      {
        title: 'MCP 协议使用',
        description: '使用 Model Context Protocol 扩展功能',
        href: '/guides/mcp-protocol',
        duration: '35 分钟',
        level: '进阶'
      }
    ]
  },
  {
    id: 'examples',
    title: '实战案例',
    description: '真实项目中的应用场景和解决方案',
    icon: CodeBracketIcon,
    color: 'from-purple-500 to-pink-600',
    tutorials: [
      {
        title: '代码重构助手',
        description: '使用 AI 分析和重构现有代码',
        href: '/guides/code-refactoring',
        duration: '40 分钟',
        level: '实战'
      },
      {
        title: '项目文档生成',
        description: '自动生成项目文档和 README',
        href: '/guides/documentation',
        duration: '30 分钟',
        level: '实战'
      },
      {
        title: '代码审查助手',
        description: '使用 AI 进行代码质量检查',
        href: '/guides/code-review',
        duration: '35 分钟',
        level: '实战'
      }
    ]
  }
]

const quickTips = [
  {
    title: '使用上下文',
    description: '提供足够的上下文信息，让 AI 更好地理解您的需求',
    icon: '💡'
  },
  {
    title: '分步骤操作',
    description: '将复杂任务分解为多个简单步骤，逐步完成',
    icon: '📝'
  },
  {
    title: '验证结果',
    description: '始终检查和验证 AI 生成的代码和建议',
    icon: '✅'
  },
  {
    title: '保存配置',
    description: '将常用的配置和命令保存为脚本或别名',
    icon: '⚙️'
  }
]

const commonUseCases = [
  {
    title: '代码生成',
    description: '根据需求描述生成代码片段',
    example: '> 创建一个 React 组件来显示用户列表',
    category: '开发'
  },
  {
    title: '代码解释',
    description: '理解复杂代码的功能和逻辑',
    example: '> 解释这个函数的作用和工作原理',
    category: '学习'
  },
  {
    title: '错误调试',
    description: '分析错误信息并提供解决方案',
    example: '> 帮我分析这个错误并提供修复建议',
    category: '调试'
  },
  {
    title: '文档编写',
    description: '生成代码文档和注释',
    example: '> 为这个函数生成详细的文档注释',
    category: '文档'
  },
  {
    title: '代码优化',
    description: '改进代码性能和可读性',
    example: '> 优化这段代码的性能和可读性',
    category: '优化'
  },
  {
    title: '测试用例',
    description: '生成单元测试和测试数据',
    example: '> 为这个函数创建完整的测试用例',
    category: '测试'
  }
]

export default function GuidesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Gemini CLI 使用指南
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              从基础入门到高级应用，全面掌握 Gemini CLI 的强大功能，
              让 AI 成为您开发工作中的得力助手。
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Categories */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              学习路径
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              按照您的经验水平选择合适的学习内容
            </p>
          </div>

          <div className="space-y-12">
            {tutorialCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tutorials.map((tutorial, index) => (
                    <Link
                      key={index}
                      href={tutorial.href}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tutorial.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600">{tutorial.description}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">{tutorial.level}</span>
                        <span>{tutorial.duration}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              常见应用场景
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              了解 Gemini CLI 在实际开发中的典型用法
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {useCase.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                <div className="rounded-lg bg-gray-900 px-3 py-2">
                  <code className="text-xs text-green-400 font-mono">{useCase.example}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              使用技巧
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              提升 Gemini CLI 使用效率的实用建议
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">{tip.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-700">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              继续学习
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              探索更多 Gemini CLI 的功能和资源
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/commands"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                查看命令参考
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                阅读开发者文档
              </Link>
              <Link
                href="/faq"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                常见问题
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
