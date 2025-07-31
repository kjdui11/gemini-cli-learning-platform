import { Metadata } from 'next'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  CogIcon,
  DocumentTextIcon,
  CommandLineIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Tools API - Gemini CLI Documentation',
  description: 'Complete guide to the Tools API for creating and managing custom tools in Gemini CLI, including built-in tools and custom tool development.',
  keywords: 'Gemini CLI Tools API, custom tools, tool development, file system tools, shell tools, web tools',
  openGraph: {
    title: 'Tools API - Gemini CLI',
    description: 'Creating and managing custom tools for AI interactions',
    type: 'article',
  },
}

const toolCategories = [
  {
    id: 'file-system',
    title: 'File System Tools',
    description: 'Tools for reading, writing, and managing files',
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-indigo-600',
    tools: [
      {
        name: 'read_file',
        description: 'Read content from a file',
        signature: 'read_file(path: string): Promise<string>',
        example: `const content = await tools.read_file('./package.json');
console.log(content);`
      },
      {
        name: 'write_file',
        description: 'Write content to a file',
        signature: 'write_file(path: string, content: string): Promise<void>',
        example: `await tools.write_file('./output.txt', 'Hello, World!');`
      },
      {
        name: 'list_files',
        description: 'List files in a directory',
        signature: 'list_files(path: string): Promise<string[]>',
        example: `const files = await tools.list_files('./src');
console.log(files);`
      }
    ]
  },
  {
    id: 'shell',
    title: 'Shell Tools',
    description: 'Tools for executing shell commands',
    icon: CommandLineIcon,
    color: 'from-green-500 to-emerald-600',
    tools: [
      {
        name: 'run_shell_command',
        description: 'Execute a shell command',
        signature: 'run_shell_command(command: string, options?: ShellOptions): Promise<ShellResult>',
        example: `const result = await tools.run_shell_command('ls -la');
console.log(result.stdout);`
      },
      {
        name: 'run_script',
        description: 'Execute a script file',
        signature: 'run_script(scriptPath: string, args?: string[]): Promise<ShellResult>',
        example: `const result = await tools.run_script('./build.sh', ['--production']);`
      }
    ]
  },
  {
    id: 'web',
    title: 'Web Tools',
    description: 'Tools for web requests and search',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-pink-600',
    tools: [
      {
        name: 'web_fetch',
        description: 'Fetch content from a URL',
        signature: 'web_fetch(url: string, options?: FetchOptions): Promise<string>',
        example: `const content = await tools.web_fetch('https://api.example.com/data');
console.log(content);`
      },
      {
        name: 'web_search',
        description: 'Search the web for information',
        signature: 'web_search(query: string, options?: SearchOptions): Promise<SearchResult[]>',
        example: `const results = await tools.web_search('Gemini CLI documentation');
console.log(results);`
      }
    ]
  }
]

const customToolExample = `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// Define a custom tool
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'The city and state, e.g. San Francisco, CA'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: 'Temperature unit'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'fahrenheit' }) => {
    // Your weather API logic here
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`Current weather in \${location}: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// Register the tool
gemini.registerTool(weatherTool);

// Use the tool in a conversation
const response = await gemini.ask("What's the weather like in New York?", {
  tools: ['get_weather']
});`

export default function ToolsAPIPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tools API
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              Create and manage custom tools for AI interactions. Extend Gemini CLI 
              with powerful tools for file operations, shell commands, web requests, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Built-in Tools */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built-in Tools
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready-to-use tools available in Gemini CLI
            </p>
          </div>

          <div className="space-y-12">
            {toolCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.tools.map((tool, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tool.name}
                        </code>
                      </h4>
                      <p className="text-gray-700 mb-3">{tool.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Signature:</h5>
                        <code className="block bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-x-auto">
                          {tool.signature}
                        </code>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Example:</h5>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                          <code>{tool.example}</code>
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

      {/* Custom Tool Development */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Custom Tool Development
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Create your own tools to extend Gemini CLI functionality
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Creating a Custom Tool
            </h3>
            <p className="text-gray-700 mb-6">
              Here's a complete example of creating a custom weather tool:
            </p>
            
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{customToolExample}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Tool Registration */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tool Registration & Management
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Managing tools in your Gemini CLI instance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Register Tools
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{`// Register a single tool
gemini.registerTool(myTool);

// Register multiple tools
gemini.registerTools([tool1, tool2, tool3]);

// Register from a plugin
gemini.loadPlugin('./my-tools-plugin');`}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                List & Manage Tools
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{`// List all available tools
const tools = gemini.listTools();

// Get tool information
const toolInfo = gemini.getTool('tool_name');

// Unregister a tool
gemini.unregisterTool('tool_name');`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Best Practices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Guidelines for creating effective tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Tool Design
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Keep tools focused on a single responsibility</li>
                <li>• Provide clear, descriptive names and descriptions</li>
                <li>• Define comprehensive parameter schemas</li>
                <li>• Handle errors gracefully with meaningful messages</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Performance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Implement async operations properly</li>
                <li>• Add timeout handling for long operations</li>
                <li>• Cache results when appropriate</li>
                <li>• Validate inputs before processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore more about tool development and usage
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/tool-development"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Tool Development Guide
              </Link>
              <Link
                href="/docs/built-in-tools"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Built-in Tools Reference
              </Link>
              <Link
                href="/docs/plugin-api"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Plugin API
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
