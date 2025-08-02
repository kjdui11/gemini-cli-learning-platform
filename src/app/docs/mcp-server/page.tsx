import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ServerIcon, 
  CogIcon, 
  CheckCircleIcon,
  CodeBracketIcon,
  PlayIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '实现 MCP 服务器 | Gemini CLI 开发者文档',
  description: '详细指南：如何创建和部署自定义 MCP 服务器，包括服务器架构、资源管理、工具实现和安全配置。',
  keywords: 'MCP 服务器, Model Context Protocol 服务器, 自定义服务器, 资源管理, 工具实现',
  openGraph: {
    title: '实现 MCP 服务器 | Gemini CLI 开发者文档',
    description: '详细指南：如何创建和部署自定义 MCP 服务器，包括服务器架构、资源管理、工具实现和安全配置。',
    type: 'article',
  },
}

const serverArchitecture = {
  description: 'MCP 服务器采用事件驱动架构，支持多种传输协议和资源类型',
  components: [
    {
      name: 'Transport Handler',
      role: '传输处理器',
      description: '处理客户端连接和消息传输',
      features: ['WebSocket 支持', 'HTTP/HTTPS 处理', '消息序列化', '连接管理']
    },
    {
      name: 'Resource Manager',
      role: '资源管理器',
      description: '管理服务器提供的资源',
      features: ['资源注册', '访问控制', '缓存管理', '变更通知']
    },
    {
      name: 'Tool Registry',
      role: '工具注册表',
      description: '管理可调用的工具和函数',
      features: ['工具注册', '参数验证', '执行管理', '结果处理']
    },
    {
      name: 'Security Layer',
      role: '安全层',
      description: '提供身份验证和授权功能',
      features: ['身份验证', '权限控制', '审计日志', '速率限制']
    }
  ]
}

const basicImplementation = `import { McpServer } from '@gemini-cli/mcp'

class CustomMcpServer extends McpServer {
  constructor() {
    super({
      name: 'custom-server',
      version: '1.0.0',
      transport: {
        type: 'websocket',
        port: 8080
      }
    })
  }

  async initialize() {
    // 注册资源
    this.registerResource('files', {
      handler: this.handleFileResource.bind(this),
      permissions: ['read', 'write']
    })

    // 注册工具
    this.registerTool('search', {
      handler: this.handleSearch.bind(this),
      schema: {
        type: 'object',
        properties: {
          query: { type: 'string' },
          limit: { type: 'number', default: 10 }
        }
      }
    })

    await super.initialize()
  }

  async handleFileResource(request) {
    // 处理文件资源请求
    return {
      type: 'file',
      content: await this.readFile(request.path)
    }
  }

  async handleSearch(params) {
    // 处理搜索工具请求
    return {
      results: await this.performSearch(params.query, params.limit)
    }
  }
}

// 启动服务器
const server = new CustomMcpServer()
server.start().then(() => {
  console.log('MCP 服务器已在端口 8080 启动')
})`

const resourceHandlers = [
  {
    type: 'File Resources',
    name: '文件资源',
    description: '处理文件系统资源的读写操作',
    implementation: `// 文件资源处理器
class FileResourceHandler {
  async handleRead(path) {
    const content = await fs.readFile(path, 'utf8')
    return {
      type: 'text',
      content,
      metadata: {
        size: content.length,
        lastModified: await this.getLastModified(path)
      }
    }
  }

  async handleWrite(path, content) {
    await fs.writeFile(path, content, 'utf8')
    return { success: true }
  }
}`
  },
  {
    type: 'Database Resources',
    name: '数据库资源',
    description: '处理数据库查询和数据操作',
    implementation: `// 数据库资源处理器
class DatabaseResourceHandler {
  async handleQuery(sql, params) {
    const result = await this.db.query(sql, params)
    return {
      type: 'table',
      rows: result.rows,
      metadata: {
        rowCount: result.rowCount,
        fields: result.fields
      }
    }
  }

  async handleUpdate(table, data, where) {
    const result = await this.db.update(table, data, where)
    return { 
      success: true, 
      affectedRows: result.affectedRows 
    }
  }
}`
  }
]

export default function McpServerPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ServerIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              实现 MCP 服务器
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              创建自定义 MCP 服务器的完整指南
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                服务器开发
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                45 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Server Architecture */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">服务器架构</h2>
            <p className="mt-4 text-lg text-gray-600">
              {serverArchitecture.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serverArchitecture.components.map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-blue-900">{component.name}</h3>
                </div>
                <p className="text-blue-800 text-sm mb-4">{component.description}</p>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">核心功能：</h4>
                  <ul className="space-y-1">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-blue-700 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Basic Implementation */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">基础实现</h2>
            <p className="mt-4 text-lg text-gray-600">
              MCP 服务器的基础实现代码
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start mb-6">
              <CodeBracketIcon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">服务器实现</h3>
                <p className="text-gray-600">基础 MCP 服务器设置和配置</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                <code>{basicImplementation}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              深入了解 MCP 客户端集成和扩展开发
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/zh/docs/mcp-client"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                MCP 客户端集成
              </Link>
              <Link
                href="/zh/docs/extension-architecture"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                扩展架构
              </Link>
              <Link
                href="/zh/docs"
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
