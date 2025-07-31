import { Metadata } from 'next'
import Link from 'next/link'
import {
  CodeBracketIcon,
  CpuChipIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Core API Documentation | Gemini CLI Developer Documentation',
  description: 'Detailed Gemini CLI Core API interface documentation including client, session management, context processing, and configuration management core features.',
  keywords: 'Gemini CLI API, core interface, client API, session management, context processing, configuration management',
  openGraph: {
    title: 'Core API Documentation - Gemini CLI Developer Documentation',
    description: 'Complete core API interface reference documentation',
    type: 'article',
  },
}

const apiModules = [
  {
    name: 'GeminiClient',
    description: 'Core Gemini API client class',
    file: 'src/core/gemini.ts',
    methods: [
      {
        name: 'constructor',
        signature: 'constructor(config: GeminiConfig)',
        description: 'Create Gemini client instance',
        params: [
          { name: 'config', type: 'GeminiConfig', description: 'Client configuration object' }
        ],
        example: `const client = new GeminiClient({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-pro',
  temperature: 0.7
})`
      },
      {
        name: 'chat',
        signature: 'async chat(message: string, context?: Context): Promise<ChatResponse>',
        description: 'Send chat message and get response',
        params: [
          { name: 'message', type: 'string', description: 'User input message' },
          { name: 'context', type: 'Context', description: 'Optional context information' }
        ],
        returns: { type: 'Promise<ChatResponse>', description: 'Chat response object' },
        example: `const response = await client.chat('Hello, Gemini!', {
  files: ['src/index.ts'],
  history: previousMessages
})`
      },
      {
        name: 'stream',
        signature: 'async stream(message: string, context?: Context): AsyncGenerator<string>',
        description: 'Streaming chat response',
        params: [
          { name: 'message', type: 'string', description: 'User input message' },
          { name: 'context', type: 'Context', description: 'Optional context information' }
        ],
        returns: { type: 'AsyncGenerator<string>', description: 'Streaming response generator' },
        example: `for await (const chunk of client.stream('Explain this code')) {
  process.stdout.write(chunk)
}`
      }
    ]
  },
  {
    name: 'SessionManager',
    description: 'Session state manager',
    file: 'src/core/session.ts',
    methods: [
      {
        name: 'createSession',
        signature: 'createSession(id?: string): Session',
        description: 'Create new session',
        params: [
          { name: 'id', type: 'string', description: 'Optional session ID' }
        ],
        returns: { type: 'Session', description: 'Newly created session object' },
        example: `const session = sessionManager.createSession('my-session')`
      },
      {
        name: 'getSession',
        signature: 'getSession(id: string): Session | null',
        description: 'Get specified session',
        params: [
          { name: 'id', type: 'string', description: 'Session ID' }
        ],
        returns: { type: 'Session | null', description: 'Session object or null' },
        example: `const session = sessionManager.getSession('my-session')`
      },
      {
        name: 'saveSession',
        signature: 'async saveSession(session: Session): Promise<void>',
        description: 'Save session to persistent storage',
        params: [
          { name: 'session', type: 'Session', description: 'Session object to save' }
        ],
        example: `await sessionManager.saveSession(session)`
      }
    ]
  },
  {
    name: 'ContextManager',
    description: 'Context processing manager',
    file: 'src/core/context.ts',
    methods: [
      {
        name: 'addFile',
        signature: 'async addFile(filePath: string): Promise<void>',
        description: 'Add file to context',
        params: [
          { name: 'filePath', type: 'string', description: 'File path' }
        ],
        example: `await contextManager.addFile('src/utils/helper.ts')`
      },
      {
        name: 'addDirectory',
        signature: 'async addDirectory(dirPath: string, options?: DirOptions): Promise<void>',
        description: 'Add directory to context',
        params: [
          { name: 'dirPath', type: 'string', description: 'Directory path' },
          { name: 'options', type: 'DirOptions', description: 'Directory scanning options' }
        ],
        example: `await contextManager.addDirectory('src/', {
  exclude: ['*.test.ts'],
  maxDepth: 3
})`
      },
      {
        name: 'getContext',
        signature: 'getContext(): Context',
        description: 'Get current context',
        returns: { type: 'Context', description: 'Current context object' },
        example: `const context = contextManager.getContext()`
      }
    ]
  }
]

const typeDefinitions = [
  {
    name: 'GeminiConfig',
    description: 'Gemini client configuration interface',
    properties: [
      { name: 'apiKey', type: 'string', required: true, description: 'Google AI API key' },
      { name: 'model', type: 'string', required: false, description: 'Model name to use, defaults to "gemini-pro"' },
      { name: 'temperature', type: 'number', required: false, description: 'Generation temperature, between 0-1' },
      { name: 'maxTokens', type: 'number', required: false, description: 'Maximum number of tokens' },
      { name: 'timeout', type: 'number', required: false, description: 'Request timeout in milliseconds' }
    ]
  },
  {
    name: 'ChatResponse',
    description: 'Chat response interface',
    properties: [
      { name: 'content', type: 'string', required: true, description: 'Response content' },
      { name: 'usage', type: 'TokenUsage', required: true, description: 'Token usage information' },
      { name: 'model', type: 'string', required: true, description: 'Model used' },
      { name: 'finishReason', type: 'string', required: false, description: 'Finish reason' }
    ]
  },
  {
    name: 'Context',
    description: 'Context information interface',
    properties: [
      { name: 'files', type: 'FileContext[]', required: false, description: 'File context list' },
      { name: 'history', type: 'Message[]', required: false, description: 'Message history' },
      { name: 'metadata', type: 'Record<string, any>', required: false, description: 'Metadata' }
    ]
  },
  {
    name: 'Session',
    description: 'Session interface',
    properties: [
      { name: 'id', type: 'string', required: true, description: 'Unique session identifier' },
      { name: 'messages', type: 'Message[]', required: true, description: 'Message history' },
      { name: 'context', type: 'Context', required: false, description: 'Session context' },
      { name: 'createdAt', type: 'Date', required: true, description: 'Creation time' },
      { name: 'updatedAt', type: 'Date', required: true, description: 'Update time' }
    ]
  }
]

const usageExamples = [
  {
    title: 'Basic Chat',
    description: 'Simple chat interaction example',
    code: `import { GeminiClient } from '@gemini/core'

const client = new GeminiClient({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-pro'
})

async function basicChat() {
  try {
    const response = await client.chat('Hello, how are you?')
    console.log('AI:', response.content)
  } catch (error) {
    console.error('Chat error:', error.message)
  }
}`
  },
  {
    title: 'File Context',
    description: 'Chat with file context included',
    code: `import { GeminiClient, ContextManager } from '@gemini/core'

const client = new GeminiClient({ apiKey: process.env.GEMINI_API_KEY })
const contextManager = new ContextManager()

async function chatWithFiles() {
  // Add files to context
  await contextManager.addFile('src/utils/helper.ts')
  await contextManager.addDirectory('src/components/')

  const context = contextManager.getContext()

  const response = await client.chat(
    'Explain the helper functions in this codebase',
    context
  )

  console.log(response.content)
}`
  },
  {
    title: 'Session Management',
    description: 'Managing persistent sessions',
    code: `import { SessionManager } from '@gemini/core'

const sessionManager = new SessionManager()

async function manageSessions() {
  // Create new session
  const session = sessionManager.createSession('project-review')

  // Add messages to session
  session.messages.push({
    role: 'user',
    content: 'Review this code for best practices'
  })

  // Save session
  await sessionManager.saveSession(session)

  // Restore session later
  const restored = sessionManager.getSession('project-review')
  console.log('Session messages:', restored?.messages.length)
}`
  },
  {
    title: 'Streaming Response',
    description: 'Real-time streaming output',
    code: `import { GeminiClient } from '@gemini/core'

const client = new GeminiClient({ apiKey: process.env.GEMINI_API_KEY })

async function streamingChat() {
  console.log('AI: ')

  for await (const chunk of client.stream('Write a short story')) {
    process.stdout.write(chunk)
  }

  console.log('\\n\\nStream completed!')
}`
  }
]

const errorHandling = [
  {
    name: 'AuthenticationError',
    description: 'Invalid or expired API key',
    code: 'GEMINI_AUTH_ERROR',
    solution: 'Check if API key is correctly set, ensure key is valid and not expired'
  },
  {
    name: 'RateLimitError',
    description: 'Request frequency exceeds limits',
    code: 'GEMINI_RATE_LIMIT',
    solution: 'Implement exponential backoff retry mechanism, or upgrade to higher quota plan'
  },
  {
    name: 'ContextTooLargeError',
    description: 'Context content exceeds model limits',
    code: 'GEMINI_CONTEXT_TOO_LARGE',
    solution: 'Reduce number of context files or use file summarization feature'
  },
  {
    name: 'NetworkError',
    description: 'Network connection issues',
    code: 'GEMINI_NETWORK_ERROR',
    solution: 'Check network connection, configure proxy settings, or increase timeout'
  }
]

export default function CoreApiPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CodeBracketIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Core API
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Complete Gemini CLI Core API reference and usage guide
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                API Reference
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                30 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* API Modules */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">API Modules</h2>
            <p className="mt-4 text-lg text-gray-600">
              Core API modules and methods
            </p>
          </div>

          <div className="space-y-12">
            {apiModules.map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start mb-6">
                  <CpuChipIcon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.name}</h3>
                    <p className="text-gray-600 mb-2">{module.description}</p>
                    <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">{module.file}</code>
                  </div>
                </div>

                <div className="space-y-8">
                  {module.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h4>
                        <div className="bg-gray-900 rounded-lg p-3 mb-3">
                          <code className="text-green-400 text-sm font-mono">{method.signature}</code>
                        </div>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          {method.params && (
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Parameters:</h5>
                              <div className="space-y-2">
                                {method.params.map((param, paramIndex) => (
                                  <div key={paramIndex} className="bg-gray-50 rounded p-3">
                                    <div className="flex items-center mb-1">
                                      <code className="text-sm font-mono text-blue-600">{param.name}</code>
                                      <span className="text-xs text-gray-500 ml-2">{param.type}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">{param.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {method.returns && (
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Returns:</h5>
                              <div className="bg-gray-50 rounded p-3">
                                <code className="text-sm font-mono text-green-600">{method.returns.type}</code>
                                <p className="text-xs text-gray-600 mt-1">{method.returns.description}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Example:</h5>
                          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                            <pre className="text-green-400 text-xs font-mono whitespace-pre">{method.example}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Type Definitions */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Type Definitions</h2>
            <p className="mt-4 text-lg text-gray-600">
              TypeScript type definitions for Core API
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {typeDefinitions.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {type.properties.map((prop, propIndex) => (
                    <div key={propIndex} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <code className="text-sm font-mono text-blue-600">{prop.name}</code>
                          <span className="text-xs text-gray-500 ml-2">{prop.type}</span>
                        </div>
                        {prop.required && (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">required</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{prop.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Usage Examples</h2>
            <p className="mt-4 text-lg text-gray-600">
              Common API usage scenarios and code examples
            </p>
          </div>

          <div className="space-y-8">
            {usageExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{example.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Error Handling */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Error Handling</h2>
            <p className="mt-4 text-lg text-gray-600">
              API error types and handling methods
            </p>
          </div>

          <div className="space-y-6">
            {errorHandling.map((error, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{error.name}</h3>
                    <p className="text-gray-700 mb-3">{error.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <code className="text-sm text-gray-800">{error.code}</code>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-green-800 mb-1">Solution:</h4>
                      <p className="text-sm text-green-700">{error.solution}</p>
                    </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-lg text-gray-600 mb-8">
              Continue your development journey with these resources
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/development-setup"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Development Setup
              </Link>
              <Link
                href="/docs/project-structure"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Project Structure
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
