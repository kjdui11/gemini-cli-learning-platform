import { Metadata } from 'next'
import Link from 'next/link'
import {
  CogIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Build and Test | Gemini CLI Developer Documentation',
  description: 'Complete guide to building, testing, and debugging Gemini CLI including build process, testing framework, debugging tools, and CI/CD.',
  keywords: 'Gemini CLI build, testing, debugging, unit testing, integration testing, CI/CD',
  openGraph: {
    title: 'Build and Test - Gemini CLI Developer Documentation',
    description: 'Master Gemini CLI build and testing processes',
    type: 'article',
  },
}

const content = {
  title: 'Build and Test',
  subtitle: 'Complete guide to building, testing, and debugging Gemini CLI',
  buildProcess: {
    title: 'Build Process',
    subtitle: 'Understanding the build system and development workflow',
    commands: [
      {
        command: 'npm run bootstrap',
        description: 'Install dependencies and link packages',
        usage: 'Initial setup and after adding new dependencies'
      },
      {
        command: 'npm run build',
        description: 'Build all packages in dependency order',
        usage: 'Before testing or releasing'
      },
      {
        command: 'npm run build:watch',
        description: 'Build packages in watch mode',
        usage: 'During active development'
      },
      {
        command: 'npm run clean',
        description: 'Clean build artifacts and node_modules',
        usage: 'When encountering build issues'
      }
    ]
  },
  testFramework: {
    title: 'Testing Framework',
    subtitle: 'Comprehensive testing with Jest and TypeScript',
    commands: [
      {
        command: 'npm run test',
        description: 'Run all tests across packages',
        usage: 'Full test suite execution'
      },
      {
        command: 'npm run test:watch',
        description: 'Run tests in watch mode',
        usage: 'During development'
      },
      {
        command: 'npm run test:coverage',
        description: 'Generate test coverage reports',
        usage: 'Quality assurance and CI/CD'
      },
      {
        command: 'lerna run test --scope @gemini/core',
        description: 'Run tests for specific package',
        usage: 'Focused testing'
      }
    ]
  },
  workflow: {
    title: 'Development Workflow',
    subtitle: 'Recommended development and testing workflow',
    steps: [
      {
        title: 'Initial Setup',
        description: 'Set up development environment and install dependencies',
        command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
      },
      {
        title: 'Development Mode',
        description: 'Start watch mode for automatic rebuilding',
        command: 'npm run build:watch'
      },
      {
        title: 'Testing',
        description: 'Continuously run tests during development',
        command: 'npm run test:watch'
      },
      {
        title: 'Quality Check',
        description: 'Run code checks, formatting, and type checking before committing',
        command: 'npm run lint && npm run type-check && npm run test:coverage'
      }
    ]
  },
  debugging: {
    title: 'Debugging',
    subtitle: 'Tools and techniques for debugging issues',
    techniques: [
      {
        name: 'Debug Mode',
        description: 'Enable debug logging for detailed output',
        command: 'DEBUG=gemini:* gemini ask "Hello"',
        note: 'This will show detailed logs for all Gemini CLI operations'
      },
      {
        name: 'VS Code Debugging',
        description: 'Use the provided VS Code launch configuration',
        command: '.vscode/launch.json',
        note: 'Set breakpoints and debug directly in VS Code'
      },
      {
        name: 'Test Debugging',
        description: 'Debug specific tests',
        command: 'npm run test -- --testNamePattern="API Client"',
        note: 'Run and debug specific test cases'
      },
      {
        name: 'Performance Profiling',
        description: 'Profile performance issues',
        command: 'node --prof packages/cli/bin/gemini',
        note: 'Generate performance profiles for analysis'
      }
    ]
  },
  ci: {
    title: 'Continuous Integration',
    subtitle: 'Automated testing and quality assurance',
    stages: [
      {
        name: 'Build',
        description: 'Compile TypeScript and build all packages',
        icon: CheckCircleIcon
      },
      {
        name: 'Test',
        description: 'Run unit tests and generate coverage reports',
        icon: BeakerIcon
      },
      {
        name: 'Deploy',
        description: 'Publish packages and deploy documentation',
        icon: RocketLaunchIcon
      }
    ]
  },
  troubleshooting: {
    title: 'Common Issues',
    subtitle: 'Solutions to common build and test problems',
    issues: [
      {
        title: 'Build Failures',
        description: 'If builds fail after pulling changes, try cleaning and reinstalling',
        command: 'npm run clean && npm run bootstrap && npm run build'
      },
      {
        title: 'Test Failures',
        description: 'For intermittent test failures, run tests with increased timeout',
        command: 'npm run test -- --testTimeout=10000'
      },
      {
        title: 'Memory Issues',
        description: 'If you encounter out-of-memory errors during builds',
        command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
      }
    ]
  }
}

export default function BuildAndTestPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-green-100">
              {content.subtitle}
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Build
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Testing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Build Process */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.buildProcess.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.buildProcess.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.buildProcess.commands.map((cmd, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{cmd.command}</h3>
                </div>
                <p className="text-gray-700 mb-3">{cmd.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Usage:</h4>
                  <p className="text-sm text-gray-600">{cmd.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testing Framework */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.testFramework.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.testFramework.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testFramework.commands.map((cmd, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <BeakerIcon className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{cmd.command}</h3>
                </div>
                <p className="text-gray-700 mb-3">{cmd.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Usage:</h4>
                  <p className="text-sm text-gray-600">{cmd.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Workflow */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.workflow.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.workflow.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.workflow.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                        {step.command}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Debugging */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.debugging.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.debugging.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.debugging.techniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500 text-white mr-6">
                    <CommandLineIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{technique.name}</h3>
                    <p className="text-gray-700 mb-4">{technique.description}</p>
                    <div className="bg-gray-900 rounded-lg p-3 mb-3">
                      <code className="text-green-400 text-sm font-mono">{technique.command}</code>
                    </div>
                    <p className="text-gray-600 text-sm">{technique.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CI/CD Pipeline */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.ci.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.ci.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.ci.stages.map((stage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white mx-auto mb-4">
                  <stage.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{stage.name}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.troubleshooting.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.troubleshooting.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {content.troubleshooting.issues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                    <p className="text-gray-700 mb-3">{issue.description}</p>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm font-mono">{issue.command}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Next Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Continue your development journey with these resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/docs/core-api" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <DocumentTextIcon className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  Core API
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore the core API documentation
                </p>
              </div>
            </Link>

            <Link href="/docs/development-setup" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <RocketLaunchIcon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Development Setup
                </h3>
                <p className="text-gray-600 text-sm">
                  Setting up local development environment and dependencies
                </p>
              </div>
            </Link>

            <Link href="/docs/project-structure" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CogIcon className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  Project Structure
                </h3>
                <p className="text-gray-600 text-sm">
                  Understanding codebase organization and architecture
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
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
  )
}