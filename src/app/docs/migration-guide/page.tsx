import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Migration Guide - Gemini CLI Documentation',
  description: 'Complete migration guide for upgrading from older versions to the latest Gemini CLI, including breaking changes, configuration updates, and best practices.',
}

const content = {
  title: 'Migration Guide',
  subtitle: 'Upgrade from older versions to the latest Gemini CLI',
  overview: {
    title: 'Migration Overview',
    description: 'This guide helps you migrate from older versions of Gemini CLI to the latest version. We\'ll cover breaking changes, configuration updates, and provide step-by-step instructions for a smooth transition.',
    currentVersion: '2.0.0',
    supportedVersions: 'This guide covers migration from versions 1.x to 2.0.0'
  },
  versionMatrix: {
    title: 'Version Compatibility Matrix',
    subtitle: 'Check which migration path applies to your current version',
    versions: [
      {
        from: '1.0.x - 1.2.x',
        to: '2.0.0',
        difficulty: 'Major',
        estimatedTime: '30-60 minutes',
        breakingChanges: 'High',
        color: 'red'
      },
      {
        from: '1.3.x - 1.5.x',
        to: '2.0.0',
        difficulty: 'Moderate',
        estimatedTime: '15-30 minutes',
        breakingChanges: 'Medium',
        color: 'yellow'
      },
      {
        from: '1.6.x - 1.9.x',
        to: '2.0.0',
        difficulty: 'Minor',
        estimatedTime: '5-15 minutes',
        breakingChanges: 'Low',
        color: 'green'
      }
    ]
  },
  breakingChanges: {
    title: 'Breaking Changes in v2.0.0',
    subtitle: 'Important changes that may affect your existing setup',
    changes: [
      {
        category: 'Configuration',
        title: 'Configuration File Format',
        description: 'The configuration file format has changed from JSON to YAML for better readability and comments support.',
        impact: 'High',
        migration: 'Use the built-in migration tool: gemini config migrate',
        example: {
          before: '{\n  "api_key": "your-key",\n  "model": "gemini-pro"\n}',
          after: 'api_key: your-key\nmodel: gemini-pro\n# Comments are now supported!'
        }
      },
      {
        category: 'Commands',
        title: 'Command Structure Changes',
        description: 'Some commands have been renamed or restructured for consistency.',
        impact: 'Medium',
        migration: 'Update your scripts and aliases',
        changes: [
          { old: 'gemini chat', new: 'gemini ask' },
          { old: 'gemini generate', new: 'gemini create' },
          { old: 'gemini config show', new: 'gemini config list' }
        ]
      },
      {
        category: 'API',
        title: 'API Key Management',
        description: 'API keys are now stored in a more secure format with encryption.',
        impact: 'Low',
        migration: 'Re-run: gemini config set api-key YOUR_KEY',
        note: 'Your existing API key will be automatically migrated on first run'
      }
    ]
  },
  migrationSteps: {
    title: 'Step-by-Step Migration',
    subtitle: 'Follow these steps to migrate to Gemini CLI v2.0.0',
    steps: [
      {
        step: 1,
        title: 'Backup Your Configuration',
        description: 'Create a backup of your current configuration before starting the migration.',
        commands: [
          'gemini config list > gemini-config-backup.txt',
          'cp ~/.gemini/config.json ~/.gemini/config.json.backup'
        ],
        note: 'This ensures you can restore your settings if needed.'
      },
      {
        step: 2,
        title: 'Update Gemini CLI',
        description: 'Install the latest version of Gemini CLI.',
        commands: [
          'npm update -g @google/generative-ai-cli'
        ],
        verification: 'gemini --version'
      },
      {
        step: 3,
        title: 'Run Migration Tool',
        description: 'Use the built-in migration tool to update your configuration.',
        commands: [
          'gemini config migrate'
        ],
        note: 'This will automatically convert your configuration to the new format.'
      },
      {
        step: 4,
        title: 'Verify Configuration',
        description: 'Check that your configuration has been migrated correctly.',
        commands: [
          'gemini config list',
          'gemini ask "Hello, testing migration"'
        ],
        note: 'Ensure all your settings are preserved and the CLI works as expected.'
      },
      {
        step: 5,
        title: 'Update Scripts and Aliases',
        description: 'Update any scripts or aliases that use the old command syntax.',
        note: 'Refer to the command changes section above for specific updates needed.'
      }
    ]
  },
  troubleshooting: {
    title: 'Migration Troubleshooting',
    subtitle: 'Common issues and their solutions',
    issues: [
      {
        problem: 'Configuration migration failed',
        symptoms: ['Error: Unable to migrate configuration', 'Config file not found'],
        solutions: [
          'Ensure you have write permissions to the ~/.gemini directory',
          'Check if the old config file exists: ls ~/.gemini/',
          'Try manual migration: gemini config migrate --force'
        ]
      },
      {
        problem: 'Commands not working after migration',
        symptoms: ['Command not found errors', 'Unexpected behavior'],
        solutions: [
          'Clear your shell cache: hash -r',
          'Restart your terminal session',
          'Check the new command syntax in the documentation'
        ]
      },
      {
        problem: 'API key not working',
        symptoms: ['Authentication errors', 'Invalid API key messages'],
        solutions: [
          'Re-set your API key: gemini config set api-key YOUR_KEY',
          'Verify the key is correct: gemini config get api-key',
          'Check API key permissions in Google AI Studio'
        ]
      }
    ]
  },
  rollback: {
    title: 'Rollback Instructions',
    subtitle: 'How to revert to the previous version if needed',
    warning: 'Only use rollback if you encounter critical issues that prevent normal operation.',
    steps: [
      'Uninstall current version: npm uninstall -g @google/generative-ai-cli',
      'Install previous version: npm install -g @google/generative-ai-cli@1.9.0',
      'Restore configuration: cp ~/.gemini/config.json.backup ~/.gemini/config.json',
      'Verify rollback: gemini --version'
    ]
  },
  postMigration: {
    title: 'Post-Migration Steps',
    subtitle: 'Recommended actions after successful migration',
    recommendations: [
      {
        title: 'Update Documentation',
        description: 'Update any internal documentation or team guides to reflect the new command syntax.',
        priority: 'Medium'
      },
      {
        title: 'Test Automation Scripts',
        description: 'Run your automated scripts and CI/CD pipelines to ensure they work with the new version.',
        priority: 'High'
      },
      {
        title: 'Explore New Features',
        description: 'Check out the new features and improvements in v2.0.0.',
        priority: 'Low',
        link: '/docs/changelog'
      },
      {
        title: 'Clean Up Backups',
        description: 'After confirming everything works, you can remove the backup files.',
        priority: 'Low'
      }
    ]
  }
}

export default function MigrationGuidePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <div className="flex items-start">
                <InformationCircleIcon className="h-8 w-8 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.overview.title}</h2>
                  <p className="text-gray-700 mb-4">{content.overview.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-500">Current Version</div>
                      <div className="text-lg font-bold text-blue-600">{content.overview.currentVersion}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-500">Supported Migrations</div>
                      <div className="text-sm text-gray-700">{content.overview.supportedVersions}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Version Compatibility Matrix */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{content.versionMatrix.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{content.versionMatrix.subtitle}</p>

            <div className="space-y-4">
              {content.versionMatrix.versions.map((version, index) => {
                const colorClasses = {
                  red: 'border-red-200 bg-red-50',
                  yellow: 'border-yellow-200 bg-yellow-50',
                  green: 'border-green-200 bg-green-50'
                }
                const badgeClasses = {
                  red: 'bg-red-100 text-red-800',
                  yellow: 'bg-yellow-100 text-yellow-800',
                  green: 'bg-green-100 text-green-800'
                }

                return (
                  <div key={index} className={`border-2 rounded-xl p-6 ${colorClasses[version.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-gray-900">{version.from}</span>
                        <ArrowRightIcon className="h-5 w-5 text-gray-400 mx-3" />
                        <span className="text-lg font-semibold text-gray-900">{version.to}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeClasses[version.color as keyof typeof badgeClasses]}`}>
                        {version.difficulty}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">{version.estimatedTime}</span>
                      </div>
                      <div className="flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">Breaking Changes: {version.breakingChanges}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Breaking Changes */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{content.breakingChanges.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{content.breakingChanges.subtitle}</p>

            <div className="space-y-8">
              {content.breakingChanges.changes.map((change, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {change.category}
                      </span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{change.title}</h3>
                      <p className="text-gray-600 mb-4">{change.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Impact Level</span>
                          <div className={`inline-block ml-2 px-2 py-1 rounded text-xs font-medium ${
                            change.impact === 'High' ? 'bg-red-100 text-red-800' :
                            change.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {change.impact}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Migration</span>
                          <div className="text-sm text-gray-700 mt-1">{change.migration}</div>
                        </div>
                      </div>

                      {change.example && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Before (v1.x)</h4>
                              <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
                                <code>{change.example.before}</code>
                              </pre>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">After (v2.0)</h4>
                              <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
                                <code>{change.example.after}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}

                      {change.changes && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">Command Changes</h4>
                          <div className="space-y-2">
                            {change.changes.map((cmd, cmdIndex) => (
                              <div key={cmdIndex} className="flex items-center text-sm">
                                <code className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2">{cmd.old}</code>
                                <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                                <code className="bg-green-100 text-green-800 px-2 py-1 rounded">{cmd.new}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {change.note && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <InformationCircleIcon className="h-4 w-4 inline mr-1" />
                            {change.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Migration Steps */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{content.migrationSteps.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{content.migrationSteps.subtitle}</p>

            <div className="space-y-8">
              {content.migrationSteps.steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {step.commands && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Commands:</h4>
                          <div className="space-y-2">
                            {step.commands.map((command, cmdIndex) => (
                              <div key={cmdIndex} className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm overflow-x-auto">
                                <code>{command}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.verification && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Verification:</h4>
                          <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                            <code className="text-green-800 text-sm">{step.verification}</code>
                          </div>
                        </div>
                      )}

                      {step.note && (
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <InformationCircleIcon className="h-4 w-4 inline mr-1" />
                            {step.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{content.troubleshooting.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{content.troubleshooting.subtitle}</p>

            <div className="space-y-6">
              {content.troubleshooting.issues.map((issue, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    {issue.problem}
                  </h3>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Symptoms:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {issue.symptoms.map((symptom, symIndex) => (
                        <li key={symIndex}>{symptom}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Solutions:</h4>
                    <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                      {issue.solutions.map((solution, solIndex) => (
                        <li key={solIndex}>{solution}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rollback Instructions */}
      <div className="py-16 bg-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white rounded-xl border-2 border-red-200 p-8">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.rollback.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{content.rollback.subtitle}</p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 text-sm font-medium">
                      ⚠️ {content.rollback.warning}
                    </p>
                  </div>

                  <ol className="space-y-3">
                    {content.rollback.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-800 rounded-full text-sm font-medium flex items-center justify-center mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{step}</code>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post-Migration Steps */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{content.postMigration.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{content.postMigration.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.postMigration.recommendations.map((rec, index) => {
                const priorityColors = {
                  High: 'bg-red-100 text-red-800',
                  Medium: 'bg-yellow-100 text-yellow-800',
                  Low: 'bg-green-100 text-green-800'
                }

                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{rec.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[rec.priority as keyof typeof priorityColors]}`}>
                        {rec.priority}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    {rec.link && (
                      <Link
                        href={rec.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Learn more
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Need Help with Migration?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              If you encounter any issues during migration, our community is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Get Support
              </Link>
              <Link
                href="/docs/troubleshooting"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Troubleshooting Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
