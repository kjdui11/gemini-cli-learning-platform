import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ExclamationTriangleIcon,
  BugAntIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  CloudIcon,
  CogIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Troubleshooting - Gemini CLI Documentation',
  description: 'Solutions to common problems and FAQs for Gemini CLI including installation issues, API errors, configuration problems, and performance optimization.',
  keywords: 'Gemini CLI troubleshooting, common problems, FAQ, installation issues, API errors, configuration, performance',
  openGraph: {
    title: 'Gemini CLI Troubleshooting Guide',
    description: 'Solutions to common problems and frequently asked questions',
    type: 'article',
  },
}

const troubleshootingCategories = [
  {
    id: 'installation',
    title: 'Installation Issues',
    description: 'Problems during installation and setup',
    icon: CommandLineIcon,
    color: 'from-blue-500 to-indigo-600',
    issues: [
      {
        problem: 'npm install fails with permission errors',
        solution: 'Use npm with --global flag or configure npm to use a different directory. On macOS/Linux, you may need to use sudo or configure npm properly.',
        code: 'npm install -g @google/generative-ai-cli'
      },
      {
        problem: 'Command not found after installation',
        solution: 'Ensure npm global bin directory is in your PATH. Check with `npm config get prefix` and add the bin directory to your PATH.',
        code: 'export PATH=$PATH:$(npm config get prefix)/bin'
      },
      {
        problem: 'Node.js version compatibility issues',
        solution: 'Gemini CLI requires Node.js 16 or higher. Update Node.js using nvm or download from nodejs.org.',
        code: 'node --version  # Should be 16.0.0 or higher'
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication & API Issues',
    description: 'Problems with API keys and authentication',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-pink-600',
    issues: [
      {
        problem: 'Invalid API key error',
        solution: 'Verify your API key is correct and has proper permissions. Get a new key from Google AI Studio if needed.',
        code: 'gemini config set api-key YOUR_API_KEY'
      },
      {
        problem: 'API quota exceeded',
        solution: 'Check your usage limits in Google AI Studio. Consider upgrading your plan or implementing rate limiting.',
        code: 'gemini config set rate-limit 10  # Requests per minute'
      },
      {
        problem: 'Network connectivity issues',
        solution: 'Check internet connection and firewall settings. Verify proxy configuration if behind corporate firewall.',
        code: 'gemini config set proxy http://proxy.company.com:8080'
      }
    ]
  },
  {
    id: 'configuration',
    title: 'Configuration Problems',
    description: 'Issues with CLI configuration and settings',
    icon: CogIcon,
    color: 'from-green-500 to-emerald-600',
    issues: [
      {
        problem: 'Configuration file corrupted or missing',
        solution: 'Reset configuration to defaults and reconfigure. Backup important settings first.',
        code: 'gemini config reset\ngemini config set api-key YOUR_API_KEY'
      },
      {
        problem: 'Model not available or deprecated',
        solution: 'Check available models and update configuration. Some models may have regional restrictions.',
        code: 'gemini models list\ngemini config set model gemini-pro'
      },
      {
        problem: 'Environment variables not recognized',
        solution: 'Ensure environment variables are properly set and exported. Check variable names and values.',
        code: 'export GEMINI_API_KEY=your_key_here\nexport GEMINI_MODEL=gemini-pro'
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance Issues',
    description: 'Slow responses and performance problems',
    icon: CloudIcon,
    color: 'from-orange-500 to-red-600',
    issues: [
      {
        problem: 'Slow response times',
        solution: 'Check network connection, reduce request size, or try a different model. Consider using streaming for long responses.',
        code: 'gemini config set stream true\ngemini config set max-tokens 1000'
      },
      {
        problem: 'High memory usage',
        solution: 'Limit conversation history, reduce batch sizes, or restart the CLI session periodically.',
        code: 'gemini config set history-limit 10\ngemini session clear'
      },
      {
        problem: 'Timeout errors',
        solution: 'Increase timeout settings or break large requests into smaller chunks.',
        code: 'gemini config set timeout 60000  # 60 seconds'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tool & Plugin Issues',
    description: 'Problems with tools and plugin functionality',
    icon: BugAntIcon,
    color: 'from-purple-500 to-pink-600',
    issues: [
      {
        problem: 'Tool execution fails',
        solution: 'Check tool permissions, file paths, and dependencies. Verify tool is properly installed and configured.',
        code: 'gemini tools list\ngemini tools test tool-name'
      },
      {
        problem: 'Plugin not loading',
        solution: 'Verify plugin path, check for syntax errors, and ensure all dependencies are installed.',
        code: 'gemini plugins list\ngemini plugins reload plugin-name'
      },
      {
        problem: 'MCP server connection issues',
        solution: 'Check server status, network connectivity, and protocol version compatibility.',
        code: 'gemini mcp status\ngemini mcp reconnect server-name'
      }
    ]
  }
]

const commonCommands = [
  {
    command: 'gemini --version',
    description: 'Check CLI version and build information'
  },
  {
    command: 'gemini config list',
    description: 'Display current configuration settings'
  },
  {
    command: 'gemini config reset',
    description: 'Reset configuration to default values'
  },
  {
    command: 'gemini logs',
    description: 'View recent error logs and debug information'
  },
  {
    command: 'gemini doctor',
    description: 'Run diagnostic checks and health verification'
  },
  {
    command: 'gemini cache clear',
    description: 'Clear cached data and temporary files'
  }
]

export default function TroubleshootingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Troubleshooting Guide
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100">
              Solutions to common problems and frequently asked questions about Gemini CLI. 
              Find quick fixes and detailed guidance for various issues.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Diagnostic Commands */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quick Diagnostic Commands
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start with these commands to diagnose common issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonCommands.map((cmd, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                  {cmd.command}
                </code>
                <p className="text-sm text-gray-600">{cmd.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting Categories */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Issues & Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Browse by category to find solutions to specific problems
            </p>
          </div>

          <div className="space-y-12">
            {troubleshootingCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.issues.map((issue, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <ExclamationTriangleIcon className="h-5 w-5 inline mr-2 text-orange-500" />
                        {issue.problem}
                      </h4>
                      <p className="text-gray-700 mb-3">{issue.solution}</p>
                      
                      {issue.code && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Solution:</h5>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                            <code>{issue.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Help */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Still Need Help?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              If you can't find a solution here, try these resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                <DocumentTextIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Check the complete documentation for detailed guides and examples.
              </p>
              <Link
                href="/docs"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Browse Docs →
              </Link>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                <QuestionMarkCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub Issues</h3>
              <p className="text-gray-600 mb-4">
                Report bugs or request features on our GitHub repository.
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                Report Issue →
              </Link>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto mb-4">
                <BugAntIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 mb-4">
                Join our community discussions and get help from other users.
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-500 font-medium"
              >
                Join Discussion →
              </Link>
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
              Explore more documentation and guides
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Contributing Guide
              </Link>
              <Link
                href="/docs/api-reference"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                API Reference
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
