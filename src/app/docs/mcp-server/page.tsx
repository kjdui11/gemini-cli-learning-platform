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
    title: '实现 MCP 服务器 - Gemini CLI 开发者文档',
    description: '创建自定义 MCP 服务器的完整指南',
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

const serverImplementation = `// MCP 服务器基础实现
import { MCPServer, Resource, Tool } from '@gemini-cli/mcp-server'

class CustomMCPServer extends MCPServer {
  constructor() {
    super({
      name: 'custom-mcp-server',
      version: '1.0.0',
      transport: {
        type: 'websocket',
        port: 8080
      },
      auth: {
        type: 'apikey',
        validateKey: this.validateApiKey.bind(this)
      }
    })
    
    this.setupResources()
    this.setupTools()
  }
  
  private async validateApiKey(key: string): Promise<boolean> {
    // 实现 API 密钥验证逻辑
    return key === process.env.MCP_API_KEY
  }
  
  private setupResources() {
    // 注册文件系统资源
    this.registerResource({
      uri: 'file:///',
      name: 'File System',
      description: '本地文件系统访问',
      mimeType: 'application/octet-stream',
      handler: this.handleFileResource.bind(this)
    })
    
    // 注册数据库资源
    this.registerResource({
      uri: 'db:///',
      name: 'Database',
      description: '数据库查询接口',
      mimeType: 'application/json',
      handler: this.handleDatabaseResource.bind(this)
    })
  }
  
  private setupTools() {
    // 注册代码分析工具
    this.registerTool({
      name: 'analyze_code',
      description: '分析代码质量和安全性',
      inputSchema: {
        type: 'object',
        properties: {
          file_path: { type: 'string' },
          analysis_type: { 
            type: 'string', 
            enum: ['security', 'performance', 'quality'] 
          }
        },
        required: ['file_path', 'analysis_type']
      },
      handler: this.analyzeCode.bind(this)
    })
  }
  
  private async handleFileResource(uri: string): Promise<any> {
    const filePath = uri.replace('file://', '')
    // 实现文件读取逻辑
    return {
      content: await this.readFile(filePath),
      mimeType: this.getMimeType(filePath)
    }
  }
  
  private async analyzeCode(args: any): Promise<any> {
    const { file_path, analysis_type } = args
    // 实现代码分析逻辑
    return {
      file: file_path,
      type: analysis_type,
      results: await this.performAnalysis(file_path, analysis_type)
    }
  }
}`

const resourceHandlers = [
  {
    type: 'File System',
    description: '处理文件系统资源访问',
    example: `async handleFileResource(uri: string): Promise<ResourceContent> {
  const filePath = uri.replace('file://', '')
  
  // 安全检查
  if (!this.isPathAllowed(filePath)) {
    throw new Error('Access denied')
  }
  
  try {
    const stats = await fs.stat(filePath)
    
    if (stats.isDirectory()) {
      // 返回目录列表
      const files = await fs.readdir(filePath)
      return {
        content: JSON.stringify(files),
        mimeType: 'application/json'
      }
    } else {
      // 返回文件内容
      const content = await fs.readFile(filePath, 'utf8')
      return {
        content,
        mimeType: this.getMimeType(filePath)
      }
    }
  } catch (error) {
    throw new Error(\`Failed to read resource: \${error.message}\`)
  }
}`
  },
  {
    type: 'Database',
    description: '处理数据库查询资源',
    example: `async handleDatabaseResource(uri: string): Promise<ResourceContent> {
  const query = this.parseDbUri(uri)
  
  // 验证查询权限
  if (!this.isQueryAllowed(query)) {
    throw new Error('Query not allowed')
  }
  
  try {
    const result = await this.db.query(query.sql, query.params)
    return {
      content: JSON.stringify(result.rows),
      mimeType: 'application/json'
    }
  } catch (error) {
    throw new Error(\`Database query failed: \${error.message}\`)
  }
}`
  },
  {
    type: 'API Endpoint',
    description: '处理外部 API 资源',
    example: `async handleApiResource(uri: string): Promise<ResourceContent> {
  const apiConfig = this.parseApiUri(uri)
  
  // 检查 API 限制
  if (!this.checkRateLimit(apiConfig.endpoint)) {
    throw new Error('Rate limit exceeded')
  }
  
  try {
    const response = await fetch(apiConfig.url, {
      headers: {
        'Authorization': \`Bearer \${apiConfig.token}\`,
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json()
    return {
      content: JSON.stringify(data),
      mimeType: 'application/json'
    }
  } catch (error) {
    throw new Error(\`API request failed: \${error.message}\`)
  }
}`
  }
]

const toolImplementations = [
  {
    name: 'Code Analysis',
    description: '代码质量和安全分析工具',
    schema: {
      name: 'analyze_code',
      inputSchema: {
        type: 'object',
        properties: {
          file_path: { type: 'string', description: '文件路径' },
          analysis_type: { 
            type: 'string', 
            enum: ['security', 'performance', 'quality'],
            description: '分析类型'
          },
          options: {
            type: 'object',
            properties: {
              include_suggestions: { type: 'boolean' },
              severity_level: { type: 'string', enum: ['low', 'medium', 'high'] }
            }
          }
        },
        required: ['file_path', 'analysis_type']
      }
    },
    implementation: `async analyzeCode(args: any): Promise<ToolResult> {
  const { file_path, analysis_type, options = {} } = args
  
  // 读取文件内容
  const content = await this.readFile(file_path)
  
  // 执行分析
  const analyzer = this.getAnalyzer(analysis_type)
  const results = await analyzer.analyze(content, options)
  
  return {
    content: [{
      type: 'text',
      text: \`分析完成: \${file_path}\`
    }, {
      type: 'resource',
      resource: {
        uri: \`analysis://\${file_path}\`,
        name: '分析结果',
        mimeType: 'application/json'
      }
    }],
    isError: false
  }
}`
  },
  {
    name: 'File Operations',
    description: '文件操作工具集',
    schema: {
      name: 'file_operations',
      inputSchema: {
        type: 'object',
        properties: {
          operation: { 
            type: 'string', 
            enum: ['read', 'write', 'delete', 'list'],
            description: '操作类型'
          },
          path: { type: 'string', description: '文件路径' },
          content: { type: 'string', description: '文件内容（写入时）' }
        },
        required: ['operation', 'path']
      }
    },
    implementation: `async fileOperations(args: any): Promise<ToolResult> {
  const { operation, path, content } = args
  
  // 安全检查
  if (!this.isPathAllowed(path)) {
    return {
      content: [{ type: 'text', text: '访问被拒绝' }],
      isError: true
    }
  }
  
  try {
    switch (operation) {
      case 'read':
        const fileContent = await fs.readFile(path, 'utf8')
        return {
          content: [{ type: 'text', text: fileContent }],
          isError: false
        }
      
      case 'write':
        await fs.writeFile(path, content, 'utf8')
        return {
          content: [{ type: 'text', text: '文件写入成功' }],
          isError: false
        }
      
      case 'list':
        const files = await fs.readdir(path)
        return {
          content: [{ 
            type: 'text', 
            text: \`目录内容: \${files.join(', ')}\`
          }],
          isError: false
        }
      
      default:
        throw new Error('不支持的操作')
    }
  } catch (error) {
    return {
      content: [{ type: 'text', text: \`操作失败: \${error.message}\` }],
      isError: true
    }
  }
}`
  }
]

const securityBestPractices = [
  {
    category: '身份验证',
    practices: [
      '使用强 API 密钥或 JWT Token',
      '实现密钥轮换机制',
      '支持多种认证方式',
      '记录认证失败尝试'
    ]
  },
  {
    category: '授权控制',
    practices: [
      '实现基于角色的访问控制',
      '限制资源访问范围',
      '验证工具调用权限',
      '实施最小权限原则'
    ]
  },
  {
    category: '数据保护',
    practices: [
      '使用 HTTPS/WSS 加密传输',
      '敏感数据脱敏处理',
      '实现数据访问审计',
      '定期清理临时数据'
    ]
  },
  {
    category: '运行时安全',
    practices: [
      '实施速率限制',
      '监控异常行为',
      '隔离执行环境',
      '及时更新依赖'
    ]
  }
]

const deploymentGuide = [
  {
    step: 1,
    title: '环境准备',
    description: '准备服务器运行环境',
    tasks: [
      '安装 Node.js 18+ 或 Python 3.8+',
      '配置环境变量',
      '安装必要依赖',
      '设置日志目录'
    ]
  },
  {
    step: 2,
    title: '服务器配置',
    description: '配置 MCP 服务器参数',
    tasks: [
      '设置监听端口和地址',
      '配置传输协议',
      '设置认证方式',
      '配置资源和工具'
    ]
  },
  {
    step: 3,
    title: '安全设置',
    description: '配置安全相关设置',
    tasks: [
      '生成 SSL 证书',
      '配置防火墙规则',
      '设置访问控制',
      '启用审计日志'
    ]
  },
  {
    step: 4,
    title: '启动和监控',
    description: '启动服务器并设置监控',
    tasks: [
      '启动 MCP 服务器',
      '验证连接功能',
      '设置健康检查',
      '配置监控告警'
    ]
  }
]

const configExample = `// MCP 服务器配置文件
{
  "server": {
    "name": "custom-mcp-server",
    "version": "1.0.0",
    "description": "自定义 MCP 服务器"
  },
  "transport": {
    "type": "websocket",
    "host": "0.0.0.0",
    "port": 8080,
    "ssl": {
      "enabled": true,
      "cert": "/path/to/cert.pem",
      "key": "/path/to/key.pem"
    }
  },
  "auth": {
    "type": "apikey",
    "keys": [
      {
        "key": "your-api-key",
        "permissions": ["read", "write", "execute"]
      }
    ]
  },
  "resources": {
    "file_system": {
      "enabled": true,
      "base_path": "/allowed/path",
      "max_file_size": "10MB"
    },
    "database": {
      "enabled": true,
      "connection": "postgresql://user:pass@localhost/db",
      "allowed_tables": ["users", "projects"]
    }
  },
  "tools": {
    "code_analysis": {
      "enabled": true,
      "timeout": 30000,
      "max_file_size": "5MB"
    },
    "file_operations": {
      "enabled": true,
      "allowed_operations": ["read", "list"]
    }
  },
  "security": {
    "rate_limit": {
      "requests_per_minute": 60,
      "burst_size": 10
    },
    "cors": {
      "enabled": true,
      "origins": ["https://trusted-domain.com"]
    }
  },
  "logging": {
    "level": "info",
    "file": "/var/log/mcp-server.log",
    "max_size": "100MB",
    "max_files": 5
  }
}`

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

      {/* Server Implementation */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">基础实现</h2>
            <p className="mt-4 text-lg text-gray-600">
              MCP 服务器的基础实现代码
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{serverImplementation}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Handlers */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">资源处理器</h2>
            <p className="mt-4 text-lg text-gray-600">
              不同类型资源的处理实现
            </p>
          </div>

          <div className="space-y-8">
            {resourceHandlers.map((handler, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{handler.type}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{handler.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{handler.example}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Implementations */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">工具实现</h2>
            <p className="mt-4 text-lg text-gray-600">
              常用工具的实现示例
            </p>
          </div>

          <div className="space-y-8">
            {toolImplementations.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <PlayIcon className="h-6 w-6 text-purple-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">{tool.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">工具定义：</h4>
                    <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                      <pre className="text-green-400 text-xs font-mono whitespace-pre">
                        {JSON.stringify(tool.schema, null, 2)}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">实现代码：</h4>
                    <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                      <pre className="text-green-400 text-xs font-mono whitespace-pre">{tool.implementation}</pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Best Practices */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">安全最佳实践</h2>
            <p className="mt-4 text-lg text-gray-600">
              保护 MCP 服务器的安全措施
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityBestPractices.map((security, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-red-500 mr-3" />
                  <h3 className="text-lg font-semibold text-red-900">{security.category}</h3>
                </div>
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

      {/* Configuration Example */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">配置示例</h2>
            <p className="mt-4 text-lg text-gray-600">
              完整的服务器配置文件示例
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{configExample}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Guide */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">部署指南</h2>
            <p className="mt-4 text-lg text-gray-600">
              MCP 服务器的部署流程
            </p>
          </div>

          <div className="space-y-8">
            {deploymentGuide.map((step, index) => (
              <div key={index} className="relative">
                {index < deploymentGuide.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-blue-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                    {step.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
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
                href="/docs/mcp-client"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                MCP 客户端集成
              </Link>
              <Link
                href="/docs/extension-architecture"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
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
