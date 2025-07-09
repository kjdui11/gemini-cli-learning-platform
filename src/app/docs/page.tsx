import { Metadata } from 'next'
import Link from 'next/link'
import { 
  BookOpenIcon,
  CodeBracketIcon,
  CogIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Gemini CLI 开发者文档 | API 参考和扩展开发指南',
  description: '完整的 Gemini CLI 开发者文档，包含 API 参考、扩展开发、MCP 协议集成和贡献指南。为开发者提供深度技术文档。',
  keywords: 'Gemini CLI 开发者文档, API 参考, MCP 协议, 扩展开发, 贡献指南, 技术文档',
  openGraph: {
    title: 'Gemini CLI 开发者文档',
    description: '深度技术文档，助力开发者扩展和集成 Gemini CLI',
    type: 'article',
  },
}

const documentationSections = [
  {
    id: 'getting-started',
    title: '快速开始',
    description: '开发者入门指南和环境设置',
    icon: RocketLaunchIcon,
    color: 'from-green-500 to-emerald-600',
    articles: [
      {
        title: '开发环境设置',
        description: '配置本地开发环境和依赖',
        href: '/docs/development-setup',
        tags: ['环境配置', '依赖管理']
      },
      {
        title: '项目结构说明',
        description: '了解 Gemini CLI 的代码组织结构',
        href: '/docs/project-structure',
        tags: ['架构', '代码组织']
      },
      {
        title: '构建和测试',
        description: '本地构建、测试和调试流程',
        href: '/docs/build-and-test',
        tags: ['构建', '测试', '调试']
      }
    ]
  },
  {
    id: 'api-reference',
    title: 'API 参考',
    description: '详细的 API 文档和接口说明',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-indigo-600',
    articles: [
      {
        title: 'Core API',
        description: '核心 API 接口和方法说明',
        href: '/docs/core-api',
        tags: ['API', '核心功能']
      },
      {
        title: 'Plugin API',
        description: '插件开发 API 和扩展接口',
        href: '/docs/plugin-api',
        tags: ['插件', '扩展']
      },
      {
        title: 'Configuration API',
        description: '配置管理 API 和选项说明',
        href: '/docs/config-api',
        tags: ['配置', '设置']
      }
    ]
  },
  {
    id: 'mcp-protocol',
    title: 'MCP 协议',
    description: 'Model Context Protocol 集成指南',
    icon: PuzzlePieceIcon,
    color: 'from-purple-500 to-pink-600',
    articles: [
      {
        title: 'MCP 协议介绍',
        description: '了解 Model Context Protocol 的基本概念',
        href: '/docs/mcp-introduction',
        tags: ['MCP', '协议']
      },
      {
        title: '实现 MCP 服务器',
        description: '创建自定义 MCP 服务器的完整指南',
        href: '/docs/mcp-server',
        tags: ['MCP', '服务器', '实现']
      },
      {
        title: 'MCP 客户端集成',
        description: '在应用中集成 MCP 客户端功能',
        href: '/docs/mcp-client',
        tags: ['MCP', '客户端', '集成']
      }
    ]
  },
  {
    id: 'extensions',
    title: '扩展开发',
    description: '创建自定义扩展和插件',
    icon: CogIcon,
    color: 'from-orange-500 to-red-600',
    articles: [
      {
        title: '扩展架构',
        description: '理解扩展系统的设计和架构',
        href: '/docs/extension-architecture',
        tags: ['扩展', '架构']
      },
      {
        title: '创建第一个扩展',
        description: '从零开始创建自定义扩展',
        href: '/docs/first-extension',
        tags: ['扩展', '教程']
      },
      {
        title: '扩展发布指南',
        description: '打包和发布扩展的最佳实践',
        href: '/docs/extension-publishing',
        tags: ['扩展', '发布']
      }
    ]
  },
  {
    id: 'contributing',
    title: '贡献指南',
    description: '参与项目开发和社区贡献',
    icon: ShieldCheckIcon,
    color: 'from-teal-500 to-cyan-600',
    articles: [
      {
        title: '贡献流程',
        description: '了解如何为项目做出贡献',
        href: '/docs/contributing-guide',
        tags: ['贡献', '流程']
      },
      {
        title: '代码规范',
        description: '代码风格和质量标准',
        href: '/docs/coding-standards',
        tags: ['代码规范', '质量']
      },
      {
        title: '提交 PR 指南',
        description: '创建和提交 Pull Request 的最佳实践',
        href: '/docs/pull-request-guide',
        tags: ['PR', '最佳实践']
      }
    ]
  }
]

const quickLinks = [
  {
    title: 'GitHub 仓库',
    description: '查看源代码和提交问题',
    href: 'https://github.com/google-gemini/gemini-cli',
    external: true
  },
  {
    title: 'API 参考',
    description: '完整的 API 文档',
    href: '/docs/api-reference',
    external: false
  },
  {
    title: '示例代码',
    description: '实用的代码示例和模板',
    href: '/docs/examples',
    external: false
  },
  {
    title: '更新日志',
    description: '版本更新和变更记录',
    href: '/docs/changelog',
    external: false
  }
]

const technicalSpecs = [
  {
    category: '支持的语言',
    items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
  },
  {
    category: '平台支持',
    items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
  },
  {
    category: '集成方式',
    items: ['命令行接口', 'Node.js API', 'REST API', 'WebSocket', 'MCP 协议']
  },
  {
    category: '扩展类型',
    items: ['语言支持', '工具集成', '自定义命令', 'UI 扩展', 'MCP 服务器']
  }
]

export default function DocsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              开发者文档
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              深入了解 Gemini CLI 的技术细节，学习如何扩展功能、集成 MCP 协议，
              并为开源项目做出贡献。
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              快速导航
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              快速访问常用的开发资源
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link.title}
                  {link.external && (
                    <span className="ml-1 text-gray-400">↗</span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              技术规格
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              了解 Gemini CLI 的技术特性和支持范围
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              文档分类
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              按主题组织的详细技术文档
            </p>
          </div>

          <div className="space-y-12">
            {documentationSections.map((section) => (
              <div key={section.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${section.color} text-white`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.articles.map((article, index) => (
                    <Link
                      key={index}
                      href={article.href}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community and Support */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              社区与支持
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              加入开发者社区，获取帮助和分享经验
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/google-gemini/gemini-cli/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                加入讨论
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                报告问题
              </Link>
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                贡献代码
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
