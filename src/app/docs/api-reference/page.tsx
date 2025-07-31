import { Metadata } from 'next'
import Link from 'next/link'
import {
  CodeBracketIcon,
  CogIcon,
  CommandLineIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ServerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'API Reference - Gemini CLI Documentation',
  description: 'Complete API documentation for Gemini CLI including Core API, Plugin API, Configuration API, and Tools API with detailed method descriptions and examples.',
  keywords: 'Gemini CLI API, Core API, Plugin API, Configuration API, Tools API, method reference, documentation',
  openGraph: {
    title: 'Gemini CLI API Reference',
    description: 'Complete API documentation with detailed method descriptions',
    type: 'article',
  },
}

const apiSections = [
  {
    id: 'core-api',
    title: 'Core API',
    description: 'Main API for interacting with Gemini models and managing conversations',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-indigo-600',
    methods: [
      {
        name: 'chat()',
        description: 'Start an interactive chat session with Gemini',
        signature: 'chat(options?: ChatOptions): Promise<ChatSession>',
        example: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`
      },
      {
        name: 'ask()',
        description: 'Send a single prompt and get a response',
        signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
        example: `const response = await cli.ask("What is machine learning?", {
  maxTokens: 1000,
  temperature: 0.5
});`
      },
      {
        name: 'analyze()',
        description: 'Analyze files or code with AI assistance',
        signature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
        example: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`
      }
    ]
  },
  {
    id: 'plugin-api',
    title: 'Plugin API',
    description: 'API for developing custom plugins and extensions',
    icon: CogIcon,
    color: 'from-purple-500 to-pink-600',
    methods: [
      {
        name: 'registerPlugin()',
        description: 'Register a new plugin with the CLI',
        signature: 'registerPlugin(plugin: Plugin): void',
        example: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Plugin logic here
      return 'Plugin executed successfully';
    }
  }
};

cli.registerPlugin(myPlugin);`
      },
      {
        name: 'createTool()',
        description: 'Create a custom tool for AI to use',
        signature: 'createTool(definition: ToolDefinition): Tool',
        example: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Get current weather for a location',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Fetch weather data
    return \`Weather in \$\{location\}: Sunny, 25°C\`;
  }
});`
      }
    ]
  },
  {
    id: 'config-api',
    title: 'Configuration API',
    description: 'API for managing CLI configuration and settings',
    icon: WrenchScrewdriverIcon,
    color: 'from-green-500 to-emerald-600',
    methods: [
      {
        name: 'getConfig()',
        description: 'Get current configuration values',
        signature: 'getConfig(key?: string): any',
        example: `// Get all config
const config = cli.getConfig();

// Get specific config value
const model = cli.getConfig('model');`
      },
      {
        name: 'setConfig()',
        description: 'Set configuration values',
        signature: 'setConfig(key: string, value: any): void',
        example: `// Set model
cli.setConfig('model', 'gemini-pro');

// Set multiple values
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`
      },
      {
        name: 'resetConfig()',
        description: 'Reset configuration to defaults',
        signature: 'resetConfig(key?: string): void',
        example: `// Reset all config
cli.resetConfig();

// Reset specific key
cli.resetConfig('temperature');`
      }
    ]
  },
  {
    id: 'tools-api',
    title: 'Tools API',
    description: 'API for managing and executing built-in tools',
    icon: ServerIcon,
    color: 'from-orange-500 to-red-600',
    methods: [
      {
        name: 'listTools()',
        description: 'Get list of available tools',
        signature: 'listTools(): Tool[]',
        example: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`
      },
      {
        name: 'executeTool()',
        description: 'Execute a specific tool',
        signature: 'executeTool(name: string, args: any): Promise<any>',
        example: `// Read a file
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// Run shell command
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`
      }
    ]
  }
]

const commonTypes = [
  {
    name: 'ChatOptions',
    description: 'Options for starting a chat session',
    properties: [
      { name: 'model', type: 'string', description: 'Model to use (e.g., "gemini-pro")' },
      { name: 'temperature', type: 'number', description: 'Creativity level (0-1)' },
      { name: 'maxTokens', type: 'number', description: 'Maximum response length' },
      { name: 'systemPrompt', type: 'string', description: 'System instructions' }
    ]
  },
  {
    name: 'ToolDefinition',
    description: 'Definition for creating custom tools',
    properties: [
      { name: 'name', type: 'string', description: 'Unique tool name' },
      { name: 'description', type: 'string', description: 'Tool description for AI' },
      { name: 'parameters', type: 'object', description: 'Parameter schema' },
      { name: 'execute', type: 'function', description: 'Tool execution function' }
    ]
  }
]

export default function APIReferencePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              API Reference
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Complete API documentation for Gemini CLI with detailed method descriptions,
              parameters, and practical examples.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              API Sections
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Navigate to different API categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${section.color} text-white mb-4`}>
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{section.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* API Sections */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {apiSections.map((section) => (
              <div key={section.id} id={section.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${section.color} text-white`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {section.methods.map((method, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">
                          {method.name}
                        </code>
                      </h3>
                      <p className="text-gray-700 mb-3">{method.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Signature:</h4>
                        <code className="block bg-gray-100 p-3 rounded text-sm text-gray-800">
                          {method.signature}
                        </code>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Example:</h4>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                          <code>{method.example}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Types */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Types
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              TypeScript interfaces and types used across the API
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {type.name}
                  </code>
                </h3>
                <p className="text-gray-600 mb-4">{type.description}</p>

                <div className="space-y-2">
                  {type.properties.map((prop, propIndex) => (
                    <div key={propIndex} className="flex items-start space-x-3">
                      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                        {prop.name}
                      </code>
                      <div className="flex-1">
                        <span className="text-sm text-blue-600 font-medium">{prop.type}</span>
                        <p className="text-sm text-gray-600">{prop.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore more documentation and examples
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/examples"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                View Examples
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
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


