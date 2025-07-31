import { Metadata } from 'next'
import Link from 'next/link'
import {
  ComputerDesktopIcon,
  CloudIcon,
  CheckCircleIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'MCP 客户端集成 | Gemini CLI 开发者文档',
  description: '详细指南：如何在应用中集成 MCP 客户端，包括连接管理、资源访问、工具调用和错误处理。',
  keywords: 'MCP 客户端, Model Context Protocol 客户端, 客户端集成, 连接管理, 资源访问',
  openGraph: {
    title: 'MCP 客户端集成 - Gemini CLI 开发者文档',
    description: '在应用中集成 MCP 客户端功能',
    type: 'article',
  },
}

const clientArchitecture = {
  description: 'MCP 客户端采用异步架构，支持多种传输协议和连接管理策略',
  components: [
    {
      name: 'Connection Manager',
      role: '连接管理器',
      description: '管理与 MCP 服务器的连接',
      features: ['连接建立', '心跳检测', '自动重连', '连接池管理']
    },
    {
      name: 'Protocol Handler',
      role: '协议处理器',
      description: '处理 MCP 协议消息',
      features: ['消息序列化', '请求响应映射', '错误处理', '超时管理']
    },
    {
      name: 'Resource Client',
      role: '资源客户端',
      description: '访问服务器资源',
      features: ['资源发现', '内容获取', '缓存管理', '变更监听']
    },
    {
      name: 'Tool Client',
      role: '工具客户端',
      description: '调用服务器工具',
      features: ['工具发现', '参数验证', '调用执行', '结果处理']
    }
  ]
}

const clientImplementation = `// MCP 客户端基础实现
import { MCPClient, ClientOptions } from '@gemini-cli/mcp-client'

class GeminiMCPClient {
  private client: MCPClient
  private isConnected: boolean = false
  
  constructor(options: ClientOptions) {
    this.client = new MCPClient({
      transport: {
        type: 'websocket',
        url: options.serverUrl,
        timeout: 30000
      },
      auth: {
        type: 'apikey',
        key: options.apiKey
      },
      retry: {
        maxAttempts: 3,
        backoffMs: 1000
      }
    })
    
    this.setupEventHandlers()
  }
  
  private setupEventHandlers() {
    this.client.on('connected', () => {
      console.log('MCP client connected')
      this.isConnected = true
    })
    
    this.client.on('disconnected', () => {
      console.log('MCP client disconnected')
      this.isConnected = false
    })
    
    this.client.on('error', (error) => {
      console.error('MCP client error:', error)
    })
    
    this.client.on('resource:changed', (uri) => {
      console.log('Resource changed:', uri)
      this.handleResourceChange(uri)
    })
  }
  
  async connect(): Promise<void> {
    try {
      await this.client.connect()
      
      // 初始化协议
      const initResult = await this.client.initialize({
        protocolVersion: '2024-11-05',
        capabilities: {
          roots: { listChanged: true },
          sampling: {}
        },
        clientInfo: {
          name: 'gemini-cli',
          version: '1.0.0'
        }
      })
      
      console.log('MCP client initialized:', initResult)
    } catch (error) {
      console.error('Failed to connect to MCP server:', error)
      throw error
    }
  }
  
  async disconnect(): Promise<void> {
    if (this.isConnected) {
      await this.client.disconnect()
    }
  }
  
  async getResources(): Promise<Resource[]> {
    const result = await this.client.listResources()
    return result.resources
  }
  
  async readResource(uri: string): Promise<ResourceContent> {
    const result = await this.client.readResource({ uri })
    return result.contents[0]
  }
  
  async getTools(): Promise<Tool[]> {
    const result = await this.client.listTools()
    return result.tools
  }
  
  async callTool(name: string, args: any): Promise<ToolResult> {
    const result = await this.client.callTool({
      name,
      arguments: args
    })
    return result
  }
  
  private async handleResourceChange(uri: string) {
    // 处理资源变更通知
    try {
      const updatedContent = await this.readResource(uri)
      // 更新本地缓存或通知应用
      this.notifyResourceUpdate(uri, updatedContent)
    } catch (error) {
      console.error('Failed to handle resource change:', error)
    }
  }
  
  private notifyResourceUpdate(uri: string, content: ResourceContent) {
    // 通知应用层资源已更新
    this.emit('resourceUpdated', { uri, content })
  }
}`

const connectionStrategies = [
  {
    strategy: 'Single Connection',
    description: '单一连接策略',
    useCase: '简单应用，资源需求较少',
    implementation: `class SingleConnectionClient {
  private client: MCPClient
  
  constructor(serverUrl: string, apiKey: string) {
    this.client = new MCPClient({
      transport: { type: 'websocket', url: serverUrl },
      auth: { type: 'apikey', key: apiKey }
    })
  }
  
  async initialize() {
    await this.client.connect()
    await this.client.initialize({
      protocolVersion: '2024-11-05',
      capabilities: { roots: { listChanged: true } },
      clientInfo: { name: 'app', version: '1.0.0' }
    })
  }
  
  async getResource(uri: string) {
    return await this.client.readResource({ uri })
  }
}`
  },
  {
    strategy: 'Connection Pool',
    description: '连接池策略',
    useCase: '高并发应用，多个服务器',
    implementation: `class ConnectionPoolClient {
  private pools: Map<string, MCPClient[]> = new Map()
  private poolSize: number = 5
  
  async getConnection(serverUrl: string): Promise<MCPClient> {
    if (!this.pools.has(serverUrl)) {
      await this.createPool(serverUrl)
    }
    
    const pool = this.pools.get(serverUrl)!
    const client = pool.find(c => c.isIdle())
    
    if (!client) {
      throw new Error('No available connections')
    }
    
    return client
  }
  
  private async createPool(serverUrl: string) {
    const pool: MCPClient[] = []
    
    for (let i = 0; i < this.poolSize; i++) {
      const client = new MCPClient({
        transport: { type: 'websocket', url: serverUrl }
      })
      await client.connect()
      pool.push(client)
    }
    
    this.pools.set(serverUrl, pool)
  }
}`
  },
  {
    strategy: 'Auto Reconnect',
    description: '自动重连策略',
    useCase: '网络不稳定环境',
    implementation: `class AutoReconnectClient {
  private client: MCPClient
  private reconnectAttempts: number = 0
  private maxReconnectAttempts: number = 5
  
  constructor(options: ClientOptions) {
    this.client = new MCPClient(options)
    this.setupReconnectLogic()
  }
  
  private setupReconnectLogic() {
    this.client.on('disconnected', async () => {
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++
        const delay = Math.pow(2, this.reconnectAttempts) * 1000
        
        console.log(\`Reconnecting in \${delay}ms (attempt \${this.reconnectAttempts})\`)
        
        setTimeout(async () => {
          try {
            await this.client.connect()
            this.reconnectAttempts = 0
          } catch (error) {
            console.error('Reconnection failed:', error)
          }
        }, delay)
      }
    })
  }
}`
  }
]

const resourceManagement = `// 资源管理和缓存
class ResourceManager {
  private cache: Map<string, CachedResource> = new Map()
  private client: MCPClient
  
  constructor(client: MCPClient) {
    this.client = client
    this.setupResourceWatching()
  }
  
  async getResource(uri: string, useCache: boolean = true): Promise<ResourceContent> {
    // 检查缓存
    if (useCache && this.cache.has(uri)) {
      const cached = this.cache.get(uri)!
      if (!this.isCacheExpired(cached)) {
        return cached.content
      }
    }
    
    // 从服务器获取
    try {
      const result = await this.client.readResource({ uri })
      const content = result.contents[0]
      
      // 更新缓存
      this.cache.set(uri, {
        content,
        timestamp: Date.now(),
        ttl: 300000 // 5 minutes
      })
      
      return content
    } catch (error) {
      // 如果有缓存，返回过期的缓存
      if (this.cache.has(uri)) {
        console.warn('Using expired cache due to error:', error)
        return this.cache.get(uri)!.content
      }
      throw error
    }
  }
  
  async refreshResource(uri: string): Promise<void> {
    this.cache.delete(uri)
    await this.getResource(uri, false)
  }
  
  private setupResourceWatching() {
    this.client.on('resource:changed', (uri: string) => {
      // 清除缓存，强制下次获取最新数据
      this.cache.delete(uri)
      this.emit('resourceChanged', uri)
    })
  }
  
  private isCacheExpired(cached: CachedResource): boolean {
    return Date.now() - cached.timestamp > cached.ttl
  }
  
  clearCache(): void {
    this.cache.clear()
  }
  
  getCacheStats(): CacheStats {
    return {
      size: this.cache.size,
      hitRate: this.calculateHitRate(),
      memoryUsage: this.calculateMemoryUsage()
    }
  }
}`

const toolExecution = `// 工具执行和管理
class ToolManager {
  private client: MCPClient
  private toolCache: Map<string, Tool> = new Map()
  
  constructor(client: MCPClient) {
    this.client = client
  }
  
  async discoverTools(): Promise<Tool[]> {
    try {
      const result = await this.client.listTools()
      
      // 缓存工具定义
      result.tools.forEach(tool => {
        this.toolCache.set(tool.name, tool)
      })
      
      return result.tools
    } catch (error) {
      console.error('Failed to discover tools:', error)
      return []
    }
  }
  
  async executeTool(name: string, args: any): Promise<ToolResult> {
    // 验证工具存在
    const tool = this.toolCache.get(name)
    if (!tool) {
      throw new Error(\`Tool '\${name}' not found\`)
    }
    
    // 验证参数
    const validationResult = this.validateArguments(tool, args)
    if (!validationResult.valid) {
      throw new Error(\`Invalid arguments: \${validationResult.errors.join(', ')}\`)
    }
    
    try {
      const result = await this.client.callTool({
        name,
        arguments: args
      })
      
      return result
    } catch (error) {
      console.error(\`Tool execution failed for '\${name}':\`, error)
      throw error
    }
  }
  
  async executeToolWithRetry(
    name: string, 
    args: any, 
    maxRetries: number = 3
  ): Promise<ToolResult> {
    let lastError: Error
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.executeTool(name, args)
      } catch (error) {
        lastError = error as Error
        
        if (attempt < maxRetries) {
          const delay = Math.pow(2, attempt) * 1000
          console.log(\`Tool execution failed, retrying in \${delay}ms (attempt \${attempt})\`)
          await this.sleep(delay)
        }
      }
    }
    
    throw lastError!
  }
  
  private validateArguments(tool: Tool, args: any): ValidationResult {
    // 实现参数验证逻辑
    const schema = tool.inputSchema
    const errors: string[] = []
    
    // 检查必需参数
    if (schema.required) {
      for (const required of schema.required) {
        if (!(required in args)) {
          errors.push(\`Missing required parameter: \${required}\`)
        }
      }
    }
    
    // 检查参数类型
    for (const [key, value] of Object.entries(args)) {
      const propSchema = schema.properties?.[key]
      if (propSchema && !this.validateType(value, propSchema)) {
        errors.push(\`Invalid type for parameter \${key}\`)
      }
    }
    
    return {
      valid: errors.length === 0,
      errors
    }
  }
  
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}`

const errorHandling = [
  {
    category: '连接错误',
    errors: [
      { code: 'CONNECTION_FAILED', description: '无法连接到服务器', solution: '检查服务器地址和网络连接' },
      { code: 'AUTH_FAILED', description: '身份验证失败', solution: '验证 API 密钥或认证信息' },
      { code: 'TIMEOUT', description: '连接超时', solution: '增加超时时间或检查网络延迟' },
      { code: 'PROTOCOL_ERROR', description: '协议版本不兼容', solution: '更新客户端或服务器版本' }
    ]
  },
  {
    category: '资源错误',
    errors: [
      { code: 'RESOURCE_NOT_FOUND', description: '资源不存在', solution: '检查资源 URI 是否正确' },
      { code: 'ACCESS_DENIED', description: '访问被拒绝', solution: '检查权限设置' },
      { code: 'RESOURCE_TOO_LARGE', description: '资源过大', solution: '分块读取或增加限制' },
      { code: 'INVALID_URI', description: 'URI 格式错误', solution: '使用正确的 URI 格式' }
    ]
  },
  {
    category: '工具错误',
    errors: [
      { code: 'TOOL_NOT_FOUND', description: '工具不存在', solution: '检查工具名称是否正确' },
      { code: 'INVALID_ARGUMENTS', description: '参数无效', solution: '检查参数类型和必需字段' },
      { code: 'EXECUTION_FAILED', description: '工具执行失败', solution: '检查工具实现和参数' },
      { code: 'TOOL_TIMEOUT', description: '工具执行超时', solution: '增加超时时间或优化工具' }
    ]
  }
]

const integrationExample = `// 完整的集成示例
import { GeminiMCPClient } from './mcp-client'

class GeminiCLI {
  private mcpClient: GeminiMCPClient
  private resourceManager: ResourceManager
  private toolManager: ToolManager
  
  constructor() {
    this.mcpClient = new GeminiMCPClient({
      serverUrl: process.env.MCP_SERVER_URL!,
      apiKey: process.env.MCP_API_KEY!
    })
    
    this.resourceManager = new ResourceManager(this.mcpClient)
    this.toolManager = new ToolManager(this.mcpClient)
  }
  
  async initialize(): Promise<void> {
    try {
      // 连接到 MCP 服务器
      await this.mcpClient.connect()
      
      // 发现可用工具
      await this.toolManager.discoverTools()
      
      console.log('Gemini CLI initialized with MCP support')
    } catch (error) {
      console.error('Failed to initialize MCP client:', error)
      throw error
    }
  }
  
  async analyzeCode(filePath: string): Promise<string> {
    try {
      // 读取文件内容
      const fileContent = await this.resourceManager.getResource(\`file://\${filePath}\`)
      
      // 调用代码分析工具
      const result = await this.toolManager.executeTool('analyze_code', {
        file_path: filePath,
        analysis_type: 'quality',
        options: {
          include_suggestions: true,
          severity_level: 'medium'
        }
      })
      
      return this.formatAnalysisResult(result)
    } catch (error) {
      console.error('Code analysis failed:', error)
      throw error
    }
  }
  
  async getProjectContext(): Promise<ProjectContext> {
    try {
      // 获取项目文件列表
      const projectFiles = await this.resourceManager.getResource('file://.')
      
      // 获取 Git 信息
      const gitInfo = await this.resourceManager.getResource('git://status')
      
      return {
        files: JSON.parse(projectFiles.text),
        git: JSON.parse(gitInfo.text)
      }
    } catch (error) {
      console.error('Failed to get project context:', error)
      throw error
    }
  }
  
  async shutdown(): Promise<void> {
    await this.mcpClient.disconnect()
  }
  
  private formatAnalysisResult(result: ToolResult): string {
    // 格式化分析结果
    return result.content
      .map(content => content.text)
      .join('\\n')
  }
}`

const bestPractices = [
  {
    category: '连接管理',
    practices: [
      '使用连接池管理多个连接',
      '实现自动重连机制',
      '设置合适的超时时间',
      '监控连接状态和健康度'
    ]
  },
  {
    category: '资源访问',
    practices: [
      '实现智能缓存策略',
      '监听资源变更通知',
      '处理大文件的分块读取',
      '实现资源访问权限检查'
    ]
  },
  {
    category: '工具调用',
    practices: [
      '验证工具参数',
      '实现重试机制',
      '处理长时间运行的工具',
      '缓存工具定义'
    ]
  },
  {
    category: '错误处理',
    practices: [
      '实现分类错误处理',
      '提供有意义的错误信息',
      '实现降级策略',
      '记录详细的错误日志'
    ]
  }
]

export default function McpClientPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ComputerDesktopIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              MCP 客户端集成
            </h1>
            <p className="mt-4 text-lg text-cyan-100">
              在应用中集成 MCP 客户端功能
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-cyan-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                客户端开发
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                35 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Client Architecture */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">客户端架构</h2>
            <p className="mt-4 text-lg text-gray-600">
              {clientArchitecture.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientArchitecture.components.map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-6 w-6 text-cyan-500 mr-3" />
                  <h3 className="text-lg font-semibold text-cyan-900">{component.name}</h3>
                </div>
                <p className="text-cyan-800 text-sm mb-4">{component.description}</p>
                <div>
                  <h4 className="font-medium text-cyan-900 mb-2">核心功能：</h4>
                  <ul className="space-y-1">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-cyan-700 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Client Implementation */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">客户端实现</h2>
            <p className="mt-4 text-lg text-gray-600">
              MCP 客户端的基础实现代码
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{clientImplementation}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Strategies */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">连接策略</h2>
            <p className="mt-4 text-lg text-gray-600">
              不同场景下的连接管理策略
            </p>
          </div>

          <div className="space-y-8">
            {connectionStrategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{strategy.strategy}</h3>
                    <p className="text-gray-600 text-sm mt-1">{strategy.description}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {strategy.useCase}
                  </span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{strategy.implementation}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Management */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">资源管理</h2>
            <p className="mt-4 text-lg text-gray-600">
              高效的资源访问和缓存管理
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{resourceManagement}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Execution */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">工具执行</h2>
            <p className="mt-4 text-lg text-gray-600">
              安全可靠的工具调用管理
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{toolExecution}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Error Handling */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">错误处理</h2>
            <p className="mt-4 text-lg text-gray-600">
              常见错误类型和处理方案
            </p>
          </div>

          <div className="space-y-8">
            {errorHandling.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">错误码</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">描述</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">解决方案</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.errors.map((error, errorIndex) => (
                        <tr key={errorIndex} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <code className="text-sm font-mono text-red-600">{error.code}</code>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{error.description}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{error.solution}</td>
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

      {/* Integration Example */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">完整集成示例</h2>
            <p className="mt-4 text-lg text-gray-600">
              在 Gemini CLI 中集成 MCP 客户端
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{integrationExample}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">最佳实践</h2>
            <p className="mt-4 text-lg text-gray-600">
              MCP 客户端开发的最佳实践
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <CloudIcon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{practice.category}</h3>
                </div>
                <ul className="space-y-2">
                  {practice.practices.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-cyan-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              探索扩展开发和架构设计
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/extension-architecture"
                className="rounded-lg bg-cyan-600 px-6 py-3 text-base font-semibold text-white hover:bg-cyan-500 transition-colors"
              >
                扩展架构
              </Link>
              <Link
                href="/docs/first-extension"
                className="rounded-lg border border-cyan-600 px-6 py-3 text-base font-semibold text-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                创建第一个扩展
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
