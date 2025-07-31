import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CpuChipIcon,
  CommandLineIcon,
  CloudIcon,
  CogIcon,
  DocumentTextIcon,
  ServerIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Architecture Overview - Gemini CLI Documentation',
  description: 'High-level design and component architecture of Gemini CLI including core modules, plugin system, MCP integration, and extension framework.',
  keywords: 'Gemini CLI architecture, system design, components, modules, plugin system, MCP protocol, extension framework',
  openGraph: {
    title: 'Gemini CLI Architecture Overview',
    description: 'Understanding the high-level design and component architecture',
    type: 'article',
  },
}

const architectureComponents = [
  {
    id: 'core-cli',
    title: 'Core CLI Engine',
    description: 'The main command-line interface and execution engine',
    icon: CommandLineIcon,
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Command parsing and routing',
      'Configuration management',
      'Session handling',
      'Error handling and logging',
      'User interaction management'
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Integration Layer',
    description: 'Interface with Google Gemini AI models and services',
    icon: CpuChipIcon,
    color: 'from-purple-500 to-pink-600',
    features: [
      'Gemini API client',
      'Model selection and configuration',
      'Request/response handling',
      'Token management',
      'Streaming support'
    ]
  },
  {
    id: 'plugin-system',
    title: 'Plugin System',
    description: 'Extensible plugin architecture for custom functionality',
    icon: PuzzlePieceIcon,
    color: 'from-green-500 to-emerald-600',
    features: [
      'Plugin discovery and loading',
      'Lifecycle management',
      'API exposure',
      'Dependency resolution',
      'Sandboxed execution'
    ]
  },
  {
    id: 'mcp-protocol',
    title: 'MCP Protocol Support',
    description: 'Model Context Protocol implementation for tool integration',
    icon: ServerIcon,
    color: 'from-orange-500 to-red-600',
    features: [
      'MCP client implementation',
      'Server communication',
      'Tool registration and discovery',
      'Context management',
      'Protocol versioning'
    ]
  },
  {
    id: 'tool-framework',
    title: 'Tool Framework',
    description: 'Built-in and extensible tool system for AI interactions',
    icon: CogIcon,
    color: 'from-teal-500 to-cyan-600',
    features: [
      'File system operations',
      'Web access and search',
      'Shell command execution',
      'Memory management',
      'Custom tool creation'
    ]
  },
  {
    id: 'security',
    title: 'Security Layer',
    description: 'Security and permission management system',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-pink-600',
    features: [
      'API key management',
      'Permission-based access',
      'Sandboxed tool execution',
      'Audit logging',
      'Secure configuration storage'
    ]
  }
]

const dataFlow = [
  {
    step: 1,
    title: 'User Input',
    description: 'User enters command or starts interactive session',
    details: 'Commands are parsed and validated by the CLI engine'
  },
  {
    step: 2,
    title: 'Command Processing',
    description: 'CLI engine routes command to appropriate handler',
    details: 'Configuration is loaded and session context is established'
  },
  {
    step: 3,
    title: 'AI Integration',
    description: 'Request is formatted and sent to Gemini API',
    details: 'Model selection, prompt engineering, and API communication'
  },
  {
    step: 4,
    title: 'Tool Execution',
    description: 'AI may request tool execution through MCP or built-in tools',
    details: 'Tools are executed in sandboxed environment with proper permissions'
  },
  {
    step: 5,
    title: 'Response Processing',
    description: 'AI response is processed and formatted for user',
    details: 'Results are displayed with appropriate formatting and context'
  }
]

export default function ArchitecturePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Architecture Overview
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Understanding the high-level design and component architecture of Gemini CLI, 
              including core modules, plugin system, and integration patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Architecture Components */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Components
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The main architectural components that make up Gemini CLI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component) => (
              <div key={component.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${component.color} text-white mb-4`}>
                  <component.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {component.title}
                </h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                
                <ul className="space-y-2">
                  {component.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2 mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Flow */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Data Flow
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How data flows through the system from user input to response
            </p>
          </div>

          <div className="space-y-8">
            {dataFlow.map((flow, index) => (
              <div key={flow.step} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {flow.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {flow.title}
                    </h3>
                    <p className="text-gray-700 mb-2">{flow.description}</p>
                    <p className="text-sm text-gray-600">{flow.details}</p>
                  </div>
                </div>
                {index < dataFlow.length - 1 && (
                  <div className="ml-5 mt-4">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Design Principles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Core principles that guide the architecture and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Modularity</h3>
              <p className="text-gray-600">
                Components are designed to be independent and interchangeable, 
                allowing for easy maintenance and extension.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Extensibility</h3>
              <p className="text-gray-600">
                Plugin system and tool framework allow developers to extend 
                functionality without modifying core code.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600">
                Security-first approach with sandboxed execution, permission 
                management, and secure credential storage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
              <p className="text-gray-600">
                Optimized for fast startup, efficient memory usage, and 
                responsive user interactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore more technical documentation and guides
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/api-reference"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                API Reference
              </Link>
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Contributing Guide
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
