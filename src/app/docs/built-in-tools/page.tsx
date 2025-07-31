import { Metadata } from 'next'
import Link from 'next/link'
import { 
  DocumentTextIcon,
  CommandLineIcon,
  GlobeAltIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Built-in Tools - Gemini CLI Documentation',
  description: 'Complete reference for all built-in tools in Gemini CLI including file system operations, shell commands, web tools, and memory management.',
  keywords: 'Gemini CLI built-in tools, file system tools, shell commands, web tools, memory management',
  openGraph: {
    title: 'Built-in Tools - Gemini CLI',
    description: 'Reference for all built-in tools and their usage',
    type: 'article',
  },
}

const toolCategories = [
  {
    id: 'file-system',
    title: 'File System Tools',
    description: 'Tools for reading, writing, and managing files and directories',
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-indigo-600',
    tools: [
      {
        name: 'read_file',
        description: 'Read the contents of a file',
        parameters: [
          { name: 'path', type: 'string', required: true, description: 'Path to the file to read' }
        ],
        returns: 'string - The file contents',
        example: `AI: I'll read the package.json file for you.

Tool call: read_file
Parameters: {"path": "./package.json"}

Result: {
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  }
}`
      },
      {
        name: 'write_file',
        description: 'Write content to a file',
        parameters: [
          { name: 'path', type: 'string', required: true, description: 'Path where to write the file' },
          { name: 'content', type: 'string', required: true, description: 'Content to write to the file' }
        ],
        returns: 'string - Success confirmation',
        example: `AI: I'll create a new README file for you.

Tool call: write_file
Parameters: {
  "path": "./README.md",
  "content": "# My Project\\n\\nThis is a sample project."
}

Result: File written successfully to ./README.md`
      },
      {
        name: 'list_files',
        description: 'List files and directories in a given path',
        parameters: [
          { name: 'path', type: 'string', required: true, description: 'Directory path to list' },
          { name: 'recursive', type: 'boolean', required: false, description: 'Whether to list recursively' }
        ],
        returns: 'array - List of files and directories',
        example: `AI: Let me list the files in the src directory.

Tool call: list_files
Parameters: {"path": "./src", "recursive": false}

Result: [
  "index.js",
  "utils.js",
  "components/",
  "styles/"
]`
      }
    ]
  },
  {
    id: 'shell',
    title: 'Shell Tools',
    description: 'Tools for executing shell commands and scripts',
    icon: CommandLineIcon,
    color: 'from-green-500 to-emerald-600',
    tools: [
      {
        name: 'run_shell_command',
        description: 'Execute a shell command',
        parameters: [
          { name: 'command', type: 'string', required: true, description: 'The shell command to execute' },
          { name: 'cwd', type: 'string', required: false, description: 'Working directory for the command' }
        ],
        returns: 'object - Command result with stdout, stderr, and exit code',
        example: `AI: I'll check the current Git status.

Tool call: run_shell_command
Parameters: {"command": "git status --porcelain"}

Result: {
  "stdout": " M src/index.js\\n?? new-file.txt",
  "stderr": "",
  "exitCode": 0
}`
      },
      {
        name: 'run_script',
        description: 'Execute a script file',
        parameters: [
          { name: 'script_path', type: 'string', required: true, description: 'Path to the script file' },
          { name: 'args', type: 'array', required: false, description: 'Arguments to pass to the script' }
        ],
        returns: 'object - Script execution result',
        example: `AI: I'll run the build script with production flag.

Tool call: run_script
Parameters: {
  "script_path": "./scripts/build.sh",
  "args": ["--production"]
}

Result: {
  "stdout": "Building for production...\\nBuild completed successfully!",
  "stderr": "",
  "exitCode": 0
}`
      }
    ]
  },
  {
    id: 'web',
    title: 'Web Tools',
    description: 'Tools for web requests, searches, and online content',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-pink-600',
    tools: [
      {
        name: 'web_fetch',
        description: 'Fetch content from a URL',
        parameters: [
          { name: 'url', type: 'string', required: true, description: 'URL to fetch content from' },
          { name: 'method', type: 'string', required: false, description: 'HTTP method (GET, POST, etc.)' },
          { name: 'headers', type: 'object', required: false, description: 'HTTP headers to include' }
        ],
        returns: 'string - The fetched content',
        example: `AI: I'll fetch the latest information from the API.

Tool call: web_fetch
Parameters: {
  "url": "https://api.github.com/repos/google-gemini/gemini-cli",
  "headers": {"Accept": "application/json"}
}

Result: {
  "name": "gemini-cli",
  "description": "A CLI for Google's Gemini AI",
  "stars": 1250,
  "language": "TypeScript"
}`
      },
      {
        name: 'web_search',
        description: 'Search the web for information',
        parameters: [
          { name: 'query', type: 'string', required: true, description: 'Search query' },
          { name: 'num_results', type: 'number', required: false, description: 'Number of results to return' }
        ],
        returns: 'array - Search results with titles, URLs, and snippets',
        example: `AI: I'll search for information about TypeScript best practices.

Tool call: web_search
Parameters: {
  "query": "TypeScript best practices 2024",
  "num_results": 3
}

Result: [
  {
    "title": "TypeScript Best Practices for 2024",
    "url": "https://example.com/typescript-best-practices",
    "snippet": "Learn the latest TypeScript best practices..."
  }
]`
      }
    ]
  },
  {
    id: 'memory',
    title: 'Memory Tools',
    description: 'Tools for managing conversation memory and context',
    icon: ClockIcon,
    color: 'from-orange-500 to-red-600',
    tools: [
      {
        name: 'remember',
        description: 'Store information for later reference',
        parameters: [
          { name: 'key', type: 'string', required: true, description: 'Key to store the information under' },
          { name: 'value', type: 'string', required: true, description: 'Information to remember' }
        ],
        returns: 'string - Confirmation of storage',
        example: `AI: I'll remember your project preferences.

Tool call: remember
Parameters: {
  "key": "project_style",
  "value": "User prefers TypeScript with strict mode and ESLint"
}

Result: Information stored successfully under key 'project_style'`
      },
      {
        name: 'recall',
        description: 'Retrieve previously stored information',
        parameters: [
          { name: 'key', type: 'string', required: true, description: 'Key to retrieve information for' }
        ],
        returns: 'string - The stored information',
        example: `AI: Let me recall your project preferences.

Tool call: recall
Parameters: {"key": "project_style"}

Result: User prefers TypeScript with strict mode and ESLint`
      },
      {
        name: 'list_memories',
        description: 'List all stored memory keys',
        parameters: [],
        returns: 'array - List of all memory keys',
        example: `AI: I'll show you what I remember about our conversation.

Tool call: list_memories
Parameters: {}

Result: [
  "project_style",
  "user_preferences",
  "current_task"
]`
      }
    ]
  }
]

export default function BuiltInToolsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Built-in Tools
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Comprehensive reference for all built-in tools available in Gemini CLI. 
              These tools extend the AI's capabilities to interact with files, execute commands, 
              browse the web, and manage memory.
            </p>
          </div>
        </div>
      </div>

      {/* Tool Categories */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tool Categories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Built-in tools organized by functionality
            </p>
          </div>

          <div className="space-y-16">
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

                <div className="space-y-8">
                  {category.tools.map((tool, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        <code className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                          {tool.name}
                        </code>
                      </h4>
                      <p className="text-gray-700 mb-4">{tool.description}</p>
                      
                      {/* Parameters */}
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Parameters:</h5>
                        <div className="space-y-2">
                          {tool.parameters.map((param, paramIndex) => (
                            <div key={paramIndex} className="flex items-start space-x-3">
                              <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                                {param.name}
                              </code>
                              <div className="flex-1">
                                <span className="text-sm text-blue-600 font-medium">{param.type}</span>
                                {param.required && (
                                  <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                                    required
                                  </span>
                                )}
                                <p className="text-sm text-gray-600 mt-1">{param.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Returns */}
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Returns:</h5>
                        <p className="text-sm text-gray-700">{tool.returns}</p>
                      </div>

                      {/* Example */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-900 mb-2">Example Usage:</h5>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
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

      {/* Tool Usage Guidelines */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Usage Guidelines
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Best practices for using built-in tools effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Security Considerations
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tools run with your user permissions</li>
                <li>• Be cautious with shell commands</li>
                <li>• Review file operations before execution</li>
                <li>• Web tools respect rate limits</li>
                <li>• Memory tools store data locally</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Performance Tips
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use specific file paths when possible</li>
                <li>• Limit recursive directory listings</li>
                <li>• Cache web requests when appropriate</li>
                <li>• Clean up memory periodically</li>
                <li>• Monitor shell command timeouts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Configuration */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tool Configuration
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Configure tool behavior and permissions
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Enable/Disable Tools
                </h3>
                <div className="space-y-3">
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set tools-enabled true
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set file-tools-enabled false
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set web-tools-enabled true
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tool Timeouts
                </h3>
                <div className="space-y-3">
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set tool-timeout 30
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set web-timeout 10
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set shell-timeout 60
                  </code>
                </div>
              </div>
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
              Learn more about tools and customization
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/tools-api"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Tools API
              </Link>
              <Link
                href="/docs/tool-development"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Custom Tools
              </Link>
              <Link
                href="/docs/configuration"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Configuration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
