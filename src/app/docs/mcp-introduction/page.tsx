import { Metadata } from 'next'
import Link from 'next/link'
import {
  GlobeAltIcon,
  ServerIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CpuChipIcon,
  CloudIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Model Context Protocol Introduction | Gemini CLI Developer Documentation',
  description: 'Comprehensive introduction to the Model Context Protocol (MCP), including core concepts, architecture, communication mechanisms, and practical applications.',
  keywords: 'Model Context Protocol, MCP, context protocol, AI integration, protocol architecture, Gemini CLI',
  openGraph: {
    title: 'Model Context Protocol Introduction - Gemini CLI Developer Documentation',
    description: 'Deep dive into the Model Context Protocol (MCP)',
    type: 'article',
  },
}

const mcpOverview = {
  description: 'The Model Context Protocol (MCP) is an open standard that standardizes how applications provide context to large language models (LLMs). Think of MCP like a USB-C port for AI applications—providing a standardized way to connect AI models to different data sources and tools.',
  benefits: [
    'Standardized communication interface',
    'Secure data transmission',
    'Extensible architecture design',
    'Cross-platform compatibility',
    'Real-time context synchronization',
    'Plugin-based extension support'
  ],
  useCases: [
    'Code analysis and understanding',
    'Documentation generation and maintenance',
    'Project management integration',
    'Database queries and operations',
    'API service integration',
    'Workflow automation'
  ]
}

const mcpArchitecture = {
  components: [
    {
      name: 'MCP Host',
      role: 'AI Application',
      description: 'The AI application that coordinates and manages one or multiple MCP clients',
      responsibilities: [
        'Coordinate multiple MCP clients',
        'Manage AI model interactions',
        'Process server responses',
        'Handle session state'
      ]
    },
    {
      name: 'MCP Client',
      role: 'Connection Manager',
      description: 'A component that maintains a connection to an MCP server and obtains context from an MCP server for the MCP host to use',
      responsibilities: [
        'Maintain one-to-one server connection',
        'Send context queries',
        'Handle server responses',
        'Manage connection lifecycle'
      ]
    },
    {
      name: 'MCP Server',
      role: 'Context Provider',
      description: 'A program that provides context to MCP clients through tools, resources, and prompts',
      responsibilities: [
        'Accept client connections',
        'Process context requests',
        'Return structured data',
        'Maintain resource state'
      ]
    },
    {
      name: 'Transport Layer',
      role: 'Communication Channel',
      description: 'Manages communication channels and authentication between clients and servers',
      responsibilities: [
        'STDIO transport for local processes',
        'HTTP transport for remote servers',
        'Message framing and serialization',
        'Authentication and security'
      ]
    },
    {
      name: 'Data Layer',
      role: 'Protocol Definition',
      description: 'Defines the JSON-RPC based protocol for client-server communication',
      responsibilities: [
        'JSON-RPC 2.0 message format',
        'Lifecycle management',
        'Primitive definitions (tools, resources, prompts)',
        'Notification system'
      ]
    }
  ]
}

const messageTypes = [
  {
    type: 'initialize',
    direction: 'Client → Server',
    description: 'Initialize connection and negotiate protocol version and capabilities',
    example: {
      method: 'initialize',
      params: {
        protocolVersion: '2025-06-18',
        capabilities: {
          tools: {},
          resources: {}
        },
        clientInfo: {
          name: 'gemini-cli',
          version: '1.0.0'
        }
      }
    }
  },
  {
    type: 'tools/list',
    direction: 'Client → Server',
    description: 'Discover available tools on the server',
    example: {
      method: 'tools/list',
      params: {}
    }
  },
  {
    type: 'tools/call',
    direction: 'Client → Server',
    description: 'Execute a specific tool with provided arguments',
    example: {
      method: 'tools/call',
      params: {
        name: 'com.example.weather/current',
        arguments: {
          location: 'San Francisco',
          units: 'imperial'
        }
      }
    }
  },
  {
    type: 'resources/list',
    direction: 'Client → Server',
    description: 'Get list of available resources',
    example: {
      method: 'resources/list',
      params: {}
    }
  },
  {
    type: 'resources/read',
    direction: 'Client → Server',
    description: 'Read specific resource content',
    example: {
      method: 'resources/read',
      params: {
        uri: 'file:///path/to/file.ts'
      }
    }
  },
  {
    type: 'prompts/list',
    direction: 'Client → Server',
    description: 'Get available prompt templates',
    example: {
      method: 'prompts/list',
      params: {}
    }
  },
  {
    type: 'notifications/tools/list_changed',
    direction: 'Server → Client',
    description: 'Notify client when available tools change',
    example: {
      method: 'notifications/tools/list_changed'
    }
  }
]

const mcpPrimitives = [
  {
    type: 'Tools',
    description: 'Executable functions that AI applications can invoke to perform actions',
    icon: CpuChipIcon,
    color: 'from-blue-500 to-indigo-600',
    examples: [
      'File operations (read, write, create)',
      'API calls to external services',
      'Database queries and operations',
      'Code analysis and compilation',
      'System commands execution'
    ],
    methods: ['tools/list', 'tools/call']
  },
  {
    type: 'Resources',
    description: 'Data sources that provide contextual information to AI applications',
    icon: ServerIcon,
    color: 'from-green-500 to-emerald-600',
    examples: [
      'File contents and metadata',
      'Database records and schemas',
      'API responses and documentation',
      'Git repository information',
      'Configuration files'
    ],
    methods: ['resources/list', 'resources/read']
  },
  {
    type: 'Prompts',
    description: 'Reusable templates that help structure interactions with language models',
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-pink-600',
    examples: [
      'System prompts for specific tasks',
      'Few-shot examples for learning',
      'Code review templates',
      'Documentation generation prompts',
      'Analysis and summary templates'
    ],
    methods: ['prompts/list', 'prompts/get']
  }
]

const transportTypes = [
  {
    type: 'STDIO Transport',
    description: 'Uses standard input/output streams for direct process communication',
    useCases: [
      'Local MCP servers on same machine',
      'Direct process communication',
      'Optimal performance with no network overhead',
      'Simple setup and configuration'
    ],
    example: {
      command: 'npx @modelcontextprotocol/server-filesystem /path/to/files',
      description: 'Launch filesystem server via STDIO'
    }
  },
  {
    type: 'HTTP Transport',
    description: 'Uses HTTP POST for client-to-server messages with optional Server-Sent Events',
    useCases: [
      'Remote MCP servers',
      'Cloud-based services',
      'Authentication with bearer tokens',
      'Scalable server deployments'
    ],
    example: {
      url: 'https://api.example.com/mcp',
      description: 'Connect to remote MCP server via HTTP'
    }
  }
]

const toolDefinition = `// MCP Tool Definition Example
{
  "name": "com.example.weather/current",
  "title": "Get Current Weather",
  "description": "Get current weather information for a specified location",
  "inputSchema": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "The location to get weather for"
      },
      "units": {
        "type": "string",
        "enum": ["metric", "imperial"],
        "description": "Temperature units",
        "default": "metric"
      },
      "include_forecast": {
        "type": "boolean",
        "description": "Whether to include forecast data",
        "default": false
      }
    },
    "required": ["location"]
  }
}`

const communicationFlow = [
  {
    step: 1,
    title: 'Initialize Connection',
    description: 'Client establishes connection and negotiates capabilities with server',
    details: [
      'Client sends initialize request with protocol version',
      'Server responds with supported capabilities',
      'Both parties negotiate communication parameters',
      'Connection established with agreed protocol version'
    ]
  },
  {
    step: 2,
    title: 'Capability Discovery',
    description: 'Client discovers available tools, resources, and prompts',
    details: [
      'Request available tools list (tools/list)',
      'Request available resources (resources/list)',
      'Request available prompts (prompts/list)',
      'Cache capability information for efficient access'
    ]
  },
  {
    step: 3,
    title: 'Context Exchange',
    description: 'Client requests and receives contextual data from resources',
    details: [
      'Send resource read requests (resources/read)',
      'Receive structured data in various formats',
      'Process data format conversion as needed',
      'Update local context with received information'
    ]
  },
  {
    step: 4,
    title: 'Tool Execution',
    description: 'Client invokes server tools to perform actions',
    details: [
      'Construct tool call requests (tools/call)',
      'Pass required parameters with proper validation',
      'Wait for execution results from server',
      'Process returned data and handle errors'
    ]
  },
  {
    step: 5,
    title: 'Real-time Updates',
    description: 'Maintain synchronization through notifications',
    details: [
      'Listen for resource change notifications',
      'Handle tool list updates dynamically',
      'Process connection interruptions gracefully',
      'Re-establish connections when needed'
    ]
  }
]

const securityFeatures = [
  {
    feature: 'Authentication',
    description: 'Multiple authentication mechanisms supported',
    methods: [
      'API Key authentication',
      'OAuth 2.0 flows',
      'Bearer tokens',
      'Custom authentication headers'
    ]
  },
  {
    feature: 'Authorization',
    description: 'Fine-grained permission management',
    methods: [
      'Resource-level permissions',
      'Operation type restrictions',
      'Time-based access control',
      'Rate limiting and quotas'
    ]
  },
  {
    feature: 'Data Protection',
    description: 'End-to-end data security',
    methods: [
      'TLS/SSL transport encryption',
      'Message content encryption',
      'Sensitive data masking',
      'Secure key management'
    ]
  },
  {
    feature: 'Audit & Monitoring',
    description: 'Comprehensive operation tracking',
    methods: [
      'Request/response logging',
      'Permission check records',
      'Error and exception tracking',
      'Performance metrics collection'
    ]
  }
]



export default function McpIntroductionPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GlobeAltIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Model Context Protocol Introduction
            </h1>
            <p className="mt-4 text-lg text-indigo-100">
              Deep dive into the Model Context Protocol (MCP)
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-indigo-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                Protocol Specification
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                40 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MCP Overview */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Protocol Overview</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {mcpOverview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">Key Benefits</h3>
              <ul className="space-y-3">
                {mcpOverview.benefits.map((benefit, index) => (
                  <li key={index} className="text-indigo-800 flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">Use Cases</h3>
              <ul className="space-y-3">
                {mcpOverview.useCases.map((useCase, index) => (
                  <li key={index} className="text-green-800 flex items-start">
                    <ArrowRightIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MCP Architecture */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Architecture Design</h2>
            <p className="mt-4 text-lg text-gray-600">
              MCP protocol layered architecture and component overview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mcpArchitecture.components.map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-white">
                    {index === 0 && <CpuChipIcon className="h-6 w-6" />}
                    {index === 1 && <ServerIcon className="h-6 w-6" />}
                    {index === 2 && <CloudIcon className="h-6 w-6" />}
                    {index === 3 && <GlobeAltIcon className="h-6 w-6" />}
                    {index === 4 && <GlobeAltIcon className="h-6 w-6" />}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{component.name}</h3>
                    <p className="text-sm text-gray-600">{component.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{component.description}</p>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {component.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MCP Primitives */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">MCP Primitives</h2>
            <p className="mt-4 text-lg text-gray-600">
              Core primitives that define what clients and servers can offer each other
            </p>
          </div>

          <div className="space-y-8">
            {mcpPrimitives.map((primitive, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${primitive.color} text-white`}>
                    <primitive.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{primitive.type}</h3>
                    <p className="text-gray-600">{primitive.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {primitive.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Available Methods:</h4>
                    <div className="space-y-2">
                      {primitive.methods.map((method, methodIndex) => (
                        <code key={methodIndex} className="block bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm">
                          {method}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transport Layer */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Transport Layer</h2>
            <p className="mt-4 text-lg text-gray-600">
              Communication mechanisms that enable data exchange between clients and servers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportTypes.map((transport, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{transport.type}</h3>
                <p className="text-gray-600 mb-4">{transport.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Use Cases:</h4>
                  <ul className="space-y-1">
                    {transport.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="text-sm text-gray-600 flex items-start">
                        <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <code className="text-green-400 text-sm font-mono">
                      {transport.example.command || transport.example.url}
                    </code>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{transport.example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Types */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Message Types</h2>
            <p className="mt-4 text-lg text-gray-600">
              JSON-RPC 2.0 based message types supported by the MCP protocol
            </p>
          </div>

          <div className="space-y-8">
            {messageTypes.map((message, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{message.type}</h3>
                    <p className="text-gray-600 text-sm">{message.description}</p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                    {message.direction}
                  </span>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Message Example:</h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono whitespace-pre">
                      {JSON.stringify(message.example, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Definition Example */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tool Definition Example</h2>
            <p className="mt-4 text-lg text-gray-600">
              Example of how tools are defined in the MCP protocol
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Weather Tool Definition</h3>
            <p className="text-gray-600 mb-6">
              This example shows how a weather tool is defined with proper input schema validation and documentation.
            </p>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">
                {toolDefinition}
              </pre>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Key Components:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <strong>name:</strong> Unique identifier for the tool
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <strong>title:</strong> Human-readable display name
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <strong>description:</strong> Detailed explanation of functionality
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <strong>inputSchema:</strong> JSON Schema for input validation
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Best Practices:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    Use namespaced tool names (e.g., com.example.weather/current)
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    Provide clear, descriptive documentation
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    Define comprehensive input schemas
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    Include default values where appropriate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Communication Flow */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Communication Flow</h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete communication flow between MCP clients and servers
            </p>
          </div>

          <div className="space-y-8">
            {communicationFlow.map((flow, index) => (
              <div key={index} className="relative">
                {index < communicationFlow.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-indigo-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white text-sm font-semibold">
                    {flow.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{flow.title}</h3>
                    <p className="text-gray-600 mb-4">{flow.description}</p>
                    
                    <ul className="space-y-2">
                      {flow.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                          <ArrowRightIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                          {detail}
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

      {/* Security Features */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Security Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Security mechanisms and protection measures in the MCP protocol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((security, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-3">{security.feature}</h3>
                <p className="text-red-800 text-sm mb-4">{security.description}</p>
                
                <ul className="space-y-2">
                  {security.methods.map((method, methodIndex) => (
                    <li key={methodIndex} className="text-sm text-red-700 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-indigo-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to start using MCP with Gemini CLI? Explore these resources
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/plugin-api"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                Plugin API Guide
              </Link>
              <Link
                href="/docs/tools-api"
                className="rounded-lg border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Tools API Reference
              </Link>
              <Link
                href="/docs/examples"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Usage Examples
              </Link>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">External Resources</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Official MCP Documentation →
                </Link>
                <Link
                  href="https://github.com/modelcontextprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  MCP GitHub Organization →
                </Link>
                <Link
                  href="https://github.com/modelcontextprotocol/servers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Reference Servers →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
