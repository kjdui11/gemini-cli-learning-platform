import { Metadata } from 'next'
import Link from 'next/link'
import { 
  SparklesIcon,
  BugAntIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Changelog - Gemini CLI Documentation',
  description: 'Version updates and change records for Gemini CLI including new features, bug fixes, improvements, and breaking changes.',
  keywords: 'Gemini CLI changelog, version history, updates, releases, bug fixes, new features',
  openGraph: {
    title: 'Gemini CLI Changelog',
    description: 'Track all updates and changes in Gemini CLI',
    type: 'article',
  },
}

const changeTypes = {
  feature: { icon: SparklesIcon, color: 'text-green-600 bg-green-100', label: 'New Feature' },
  fix: { icon: BugAntIcon, color: 'text-red-600 bg-red-100', label: 'Bug Fix' },
  improvement: { icon: RocketLaunchIcon, color: 'text-blue-600 bg-blue-100', label: 'Improvement' },
  security: { icon: ShieldCheckIcon, color: 'text-purple-600 bg-purple-100', label: 'Security' },
  breaking: { icon: ExclamationTriangleIcon, color: 'text-orange-600 bg-orange-100', label: 'Breaking Change' }
}

const releases = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    status: 'latest',
    changes: [
      {
        type: 'feature',
        title: 'MCP Protocol Support',
        description: 'Added full support for Model Context Protocol (MCP) allowing custom tool integration and server communication.',
        details: [
          'Implement MCP client and server capabilities',
          'Add tool registration and discovery',
          'Support for custom MCP servers',
          'Enhanced tool execution with context awareness'
        ]
      },
      {
        type: 'feature',
        title: 'Enhanced File Operations',
        description: 'Improved file reading and writing capabilities with better error handling and support for binary files.',
        details: [
          'Support for binary file operations',
          'Improved error messages for file operations',
          'Added file type detection',
          'Enhanced security for file access'
        ]
      },
      {
        type: 'improvement',
        title: 'Performance Optimizations',
        description: 'Significant performance improvements for large file processing and batch operations.',
        details: [
          'Optimized memory usage for large files',
          'Improved streaming for real-time responses',
          'Better caching mechanisms',
          'Reduced startup time'
        ]
      },
      {
        type: 'fix',
        title: 'Configuration Management',
        description: 'Fixed issues with configuration persistence and environment variable handling.',
        details: [
          'Fixed config file corruption issues',
          'Improved environment variable precedence',
          'Better validation for configuration values',
          'Fixed cross-platform path handling'
        ]
      }
    ]
  },
  {
    version: '2.0.0',
    date: '2023-12-10',
    status: 'stable',
    changes: [
      {
        type: 'breaking',
        title: 'New CLI Architecture',
        description: 'Complete rewrite of the CLI architecture for better modularity and extensibility.',
        details: [
          'Modular plugin system',
          'Improved command structure',
          'Better error handling and reporting',
          'Enhanced configuration management'
        ]
      },
      {
        type: 'feature',
        title: 'Interactive REPL Mode',
        description: 'Added interactive Read-Eval-Print Loop for continuous conversations with Gemini.',
        details: [
          'Persistent conversation context',
          'Command history and auto-completion',
          'Multi-line input support',
          'Customizable themes and prompts'
        ]
      },
      {
        type: 'feature',
        title: 'Advanced Tool System',
        description: 'Introduced comprehensive tool system for file operations, web access, and shell commands.',
        details: [
          'File system operations (read, write, list)',
          'Web fetching and search capabilities',
          'Shell command execution',
          'Memory management for conversations'
        ]
      },
      {
        type: 'security',
        title: 'Enhanced Security',
        description: 'Improved security measures for API key management and tool execution.',
        details: [
          'Secure API key storage',
          'Sandboxed tool execution',
          'Permission-based file access',
          'Audit logging for sensitive operations'
        ]
      }
    ]
  },
  {
    version: '1.5.2',
    date: '2023-11-20',
    status: 'legacy',
    changes: [
      {
        type: 'fix',
        title: 'Authentication Issues',
        description: 'Fixed authentication problems with Google AI services.',
        details: [
          'Resolved token refresh issues',
          'Fixed OAuth flow for new users',
          'Improved error messages for auth failures'
        ]
      },
      {
        type: 'improvement',
        title: 'Error Handling',
        description: 'Better error messages and recovery mechanisms.',
        details: [
          'More descriptive error messages',
          'Automatic retry for transient failures',
          'Better network error handling'
        ]
      }
    ]
  },
  {
    version: '1.5.0',
    date: '2023-10-15',
    status: 'legacy',
    changes: [
      {
        type: 'feature',
        title: 'Batch Processing',
        description: 'Added support for processing multiple files in batch mode.',
        details: [
          'Batch file analysis',
          'Parallel processing capabilities',
          'Progress reporting for long operations'
        ]
      },
      {
        type: 'feature',
        title: 'Custom Templates',
        description: 'Support for custom prompt templates and response formatting.',
        details: [
          'Template engine for prompts',
          'Custom output formatters',
          'Reusable prompt libraries'
        ]
      },
      {
        type: 'improvement',
        title: 'Documentation',
        description: 'Comprehensive documentation updates and examples.',
        details: [
          'Updated API documentation',
          'More code examples',
          'Video tutorials and guides'
        ]
      }
    ]
  },
  {
    version: '1.0.0',
    date: '2023-09-01',
    status: 'legacy',
    changes: [
      {
        type: 'feature',
        title: 'Initial Release',
        description: 'First stable release of Gemini CLI with core functionality.',
        details: [
          'Basic chat functionality',
          'File analysis capabilities',
          'Configuration management',
          'Cross-platform support'
        ]
      }
    ]
  }
]

export default function ChangelogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Changelog
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Track all updates, new features, bug fixes, and improvements in Gemini CLI. 
              Stay up-to-date with the latest changes and enhancements.
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Change Types
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(changeTypes).map(([key, type]) => (
              <div key={key} className="flex items-center space-x-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${type.color}`}>
                  <type.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-700">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Releases */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {releases.map((release, releaseIndex) => (
              <div key={release.version} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                {/* Release Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      v{release.version}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {release.status === 'latest' && (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Latest
                        </span>
                      )}
                      {release.status === 'stable' && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          Stable
                        </span>
                      )}
                      {release.status === 'legacy' && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          Legacy
                        </span>
                      )}
                    </div>
                  </div>
                  <time className="text-sm text-gray-500">{release.date}</time>
                </div>

                {/* Changes */}
                <div className="space-y-6">
                  {release.changes.map((change, changeIndex) => {
                    const changeType = changeTypes[change.type as keyof typeof changeTypes]
                    return (
                      <div key={changeIndex} className="border-l-4 border-gray-200 pl-6">
                        <div className="flex items-start space-x-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${changeType.color} flex-shrink-0 mt-1`}>
                            <changeType.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {change.title}
                            </h3>
                            <p className="text-gray-700 mb-3">{change.description}</p>
                            
                            {change.details && (
                              <ul className="space-y-1">
                                {change.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2 mt-2 flex-shrink-0"></span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Download Links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Released on {release.date}
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        href={`https://github.com/google-gemini/gemini-cli/releases/tag/v${release.version}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                      >
                        View on GitHub →
                      </Link>
                      <Link
                        href={`https://www.npmjs.com/package/@google/generative-ai-cli/v/${release.version}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                      >
                        View on NPM →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Migration Guide */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Need Help Upgrading?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Check out our migration guides and documentation
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/migration-guide"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Migration Guide
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                All Releases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
