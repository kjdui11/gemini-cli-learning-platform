import { Metadata } from 'next'
import Link from 'next/link'
import {
  CogIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Development Setup | Gemini CLI Developer Documentation',
  description: 'Setting up local development environment and dependencies including Node.js installation, project setup, development tools configuration, and environment variables management.',
  keywords: 'Gemini CLI development environment, local development, environment configuration, dependency installation, development tools',
  openGraph: {
    title: 'Development Setup - Gemini CLI Developer Documentation',
    description: 'Configure local development environment and dependencies for Gemini CLI development',
    type: 'article',
  },
}

const content = {
  title: 'Development Setup',
  subtitle: 'Setting up local development environment and dependencies for Gemini CLI development',
  sections: {
    prerequisites: {
      title: 'System Requirements',
      subtitle: 'Ensure your system meets these requirements before starting',
      requirements: [
        {
          name: 'Node.js',
          version: '18.0.0 or higher',
          description: 'JavaScript runtime environment',
          checkCommand: 'node --version'
        },
        {
          name: 'npm',
          version: '8.0.0 or higher',
          description: 'Node.js package manager',
          checkCommand: 'npm --version'
        },
        {
          name: 'Git',
          version: '2.20.0 or higher',
          description: 'Version control system',
          checkCommand: 'git --version'
        },
        {
          name: 'VS Code',
          version: 'Latest (recommended)',
          description: 'Code editor',
          checkCommand: 'code --version'
        }
      ]
    },
    installation: {
      title: 'Installation Steps',
      subtitle: 'Follow these steps to set up your development environment',
      steps: [
        {
          title: 'Clone Repository',
          description: 'Get the Gemini CLI source code from GitHub',
          command: 'git clone https://github.com/google-gemini/gemini-cli.git\ncd gemini-cli'
        },
        {
          title: 'Install Dependencies',
          description: 'Install all required project dependencies',
          command: 'npm install'
        },
        {
          title: 'Bootstrap Project',
          description: 'Set up monorepo and link packages',
          command: 'npm run bootstrap'
        },
        {
          title: 'Build Project',
          description: 'Compile TypeScript code',
          command: 'npm run build'
        }
      ]
    },
    configuration: {
      title: 'Environment Configuration',
      subtitle: 'Configure development environment and tools',
      configs: [
        {
          name: 'VS Code Extensions',
          description: 'Recommended VS Code extensions',
          items: [
            'TypeScript and JavaScript Language Features',
            'ESLint',
            'Prettier - Code formatter',
            'GitLens',
            'Thunder Client (API testing)'
          ]
        },
        {
          name: 'Environment Variables',
          description: 'Set up necessary environment variables',
          items: [
            'GEMINI_API_KEY=your_api_key',
            'NODE_ENV=development',
            'DEBUG=gemini:*',
            'LOG_LEVEL=debug'
          ]
        }
      ]
    },
    verification: {
      title: 'Verify Installation',
      subtitle: 'Confirm your development environment is set up correctly',
      tests: [
        {
          name: 'Run Tests',
          command: 'npm test',
          expected: 'All tests should pass'
        },
        {
          name: 'Start Development Mode',
          command: 'npm run dev',
          expected: 'Should start development server'
        },
        {
          name: 'Check Code Quality',
          command: 'npm run lint',
          expected: 'Should have no linting errors'
        }
      ]
    }
  }
}

export default function DevelopmentSetupPage() {
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
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.prerequisites.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.prerequisites.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.sections.prerequisites.requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {req.name}
                    </h3>
                    <p className="text-sm text-blue-600 mb-2">{req.version}</p>
                    <p className="text-gray-700 mb-3">{req.description}</p>
                    <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                      {req.checkCommand}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.installation.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.installation.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.sections.installation.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-semibold">
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

      {/* Configuration */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.configuration.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.configuration.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.sections.configuration.configs.map((config, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{config.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{config.description}</p>
                <div className="space-y-2">
                  {config.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded p-2">
                      <code className="text-sm text-gray-800">{item}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verification */}
      <div className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.verification.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.verification.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              {content.sections.verification.tests.map((test, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h3>
                  <div className="bg-gray-900 rounded-lg p-3 mb-2">
                    <code className="text-green-400 text-sm font-mono">{test.command}</code>
                  </div>
                  <p className="text-gray-600 text-sm">{test.expected}</p>
                </div>
              ))}
            </div>
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
            <Link href="/docs/project-structure" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <RocketLaunchIcon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Project Structure
                </h3>
                <p className="text-gray-600 text-sm">
                  Understanding codebase organization and architecture
                </p>
              </div>
            </Link>

            <Link href="/docs/build-and-test" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CommandLineIcon className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  Build and Test
                </h3>
                <p className="text-gray-600 text-sm">
                  Building, testing, and debugging the project
                </p>
              </div>
            </Link>

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