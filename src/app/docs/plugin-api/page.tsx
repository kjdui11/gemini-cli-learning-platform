import { Metadata } from 'next'
import Link from 'next/link'
import {
  PuzzlePieceIcon,
  CogIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  PlayIcon,
  ServerIcon,
  CommandLineIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Plugin API Documentation | Gemini CLI Developer Documentation',
  description: 'Complete guide to extending Gemini CLI with MCP servers, custom tools, and plugin development.',
  keywords: 'Gemini CLI Plugin API, MCP servers, Model Context Protocol, plugin development, extensions, tools',
  openGraph: {
    title: 'Plugin API Documentation - Gemini CLI Developer Documentation',
    description: 'Complete guide to extending Gemini CLI functionality',
    type: 'article',
  },
}

// MCP Server Types
const mcpServerTypes = [
  {
    id: 'filesystem',
    name: 'File System Servers',
    description: 'Servers that provide file system access and operations',
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-indigo-600',
    examples: [
      {
        name: 'filesystem',
        description: 'Read, write, and manage files and directories',
        capabilities: ['read_file', 'write_file', 'list_directory', 'create_directory']
      },
      {
        name: 'git',
        description: 'Git repository operations and version control',
        capabilities: ['git_status', 'git_commit', 'git_branch', 'git_log']
      }
    ]
  },
  {
    id: 'web',
    name: 'Web & API Servers',
    description: 'Servers that interact with web services and APIs',
    icon: GlobeAltIcon,
    color: 'from-green-500 to-emerald-600',
    examples: [
      {
        name: 'web-search',
        description: 'Search the web and retrieve information',
        capabilities: ['web_search', 'fetch_url', 'extract_content']
      },
      {
        name: 'github',
        description: 'GitHub API integration for repository management',
        capabilities: ['list_repos', 'create_issue', 'get_pull_requests']
      }
    ]
  },
  {
    id: 'database',
    name: 'Database Servers',
    description: 'Servers that provide database connectivity and operations',
    icon: ServerIcon,
    color: 'from-purple-500 to-pink-600',
    examples: [
      {
        name: 'sqlite',
        description: 'SQLite database operations',
        capabilities: ['execute_query', 'create_table', 'insert_data']
      },
      {
        name: 'postgres',
        description: 'PostgreSQL database integration',
        capabilities: ['query', 'transaction', 'schema_info']
      }
    ]
  }
]

// MCP Configuration Examples
const mcpConfigExamples = {
  basic: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
    },
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git", "--repository", "/path/to/repo"]
    },
    "web-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-web-search"]
    }
  }
}`,
  advanced: `{
  "mcpServers": {
    "custom-database": {
      "command": "node",
      "args": ["./custom-mcp-server.js"],
      "env": {
        "DATABASE_URL": "postgresql://localhost:5432/mydb",
        "API_KEY": "your-api-key"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-github-token"
      }
    }
  }
}`,
  development: `{
  "mcpServers": {
    "local-dev": {
      "command": "node",
      "args": ["./dev-server.js"],
      "cwd": "/path/to/development/server",
      "env": {
        "NODE_ENV": "development",
        "DEBUG": "mcp:*"
      }
    }
  }
}`
}

// Custom MCP Server Development Example
const customMcpServerExample = `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: 'A custom tool that performs specific operations',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'Input for the custom operation',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`Custom operation result: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`Unknown tool: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // Your custom logic here
    return \`Processed: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Custom MCP server running on stdio');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`

export default function PluginAPIPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Plugin API
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              Extend Gemini CLI with MCP servers, custom tools, and powerful integrations.
              Connect to databases, APIs, file systems, and more using the Model Context Protocol.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-purple-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                MCP Protocol
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                Custom Servers
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                Tool Integration
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Extension Architecture
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gemini CLI uses the Model Context Protocol (MCP) to provide a standardized way to connect AI assistants with external tools and data sources.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mx-auto mb-4">
                  <ServerIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">MCP Servers</h3>
                <p className="text-gray-600 text-sm">
                  Standalone processes that expose tools and resources through the Model Context Protocol
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mx-auto mb-4">
                  <PuzzlePieceIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tool Integration</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly integrate external tools and services into your AI workflows
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white mx-auto mb-4">
                  <CodeBracketIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Development</h3>
                <p className="text-gray-600 text-sm">
                  Build your own MCP servers to extend Gemini CLI with custom functionality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MCP Server Types */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              MCP Server Types
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore different types of MCP servers and their capabilities
            </p>
          </div>

          <div className="space-y-12">
            {mcpServerTypes.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {example.name}
                        </code>
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">{example.description}</p>

                      <div>
                        <h5 className="text-xs font-medium text-gray-900 mb-2">Capabilities:</h5>
                        <div className="flex flex-wrap gap-2">
                          {example.capabilities.map((capability, capIndex) => (
                            <span key={capIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                              {capability}
                            </span>
                          ))}
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

      {/* Configuration Examples */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Configuration Examples
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn how to configure MCP servers in your Gemini CLI setup
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Configuration</h3>
              <p className="text-gray-600 mb-4">
                Add MCP servers to your <code className="bg-gray-100 px-2 py-1 rounded">.gemini/config.json</code> file:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{mcpConfigExamples.basic}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Configuration</h3>
              <p className="text-gray-600 mb-4">
                Configure custom servers with environment variables and advanced options:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{mcpConfigExamples.advanced}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Configuration</h3>
              <p className="text-gray-600 mb-4">
                Configuration for local development and debugging:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{mcpConfigExamples.development}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Custom MCP Server Development */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Custom MCP Server Development
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Build your own MCP server to extend Gemini CLI with custom functionality
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Complete MCP Server Example
            </h3>
            <p className="text-gray-700 mb-6">
              Here's a complete example of a custom MCP server that you can use as a starting point:
            </p>

            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{customMcpServerExample}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Getting Started
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick steps to start using and developing MCP servers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Using Existing Servers
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">1</span>
                  <span>Install an MCP server package: <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install -g @modelcontextprotocol/server-filesystem</code></span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">2</span>
                  <span>Add the server to your <code className="bg-gray-100 px-2 py-1 rounded text-sm">.gemini/config.json</code></span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">3</span>
                  <span>Restart Gemini CLI to load the new server</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">4</span>
                  <span>Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">/mcp</code> command to list available servers</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Developing Custom Servers
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">1</span>
                  <span>Install the MCP SDK: <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install @modelcontextprotocol/sdk</code></span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">2</span>
                  <span>Create your server using the example above</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">3</span>
                  <span>Test your server with the MCP inspector</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">4</span>
                  <span>Configure it in Gemini CLI and start using it</span>
                </li>
              </ol>
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
              Explore more about MCP servers and plugin development
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                MCP Protocol Documentation
              </Link>
              <Link
                href="/docs/tools-api"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Tools API Reference
              </Link>
              <Link
                href="/docs/core-api"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Core API Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}