import { Metadata } from 'next'
import Link from 'next/link'
import { 
  HandRaisedIcon, 
  CodeBracketIcon, 
  CheckCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BugAntIcon,
  ClipboardDocumentListIcon,
  CommandLineIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contributing Guide | Gemini CLI Developer Documentation',
  description: 'Complete guide on how to contribute to the Gemini CLI project, including code contributions, documentation improvements, issue reporting, and community participation.',
  keywords: 'contributing guide, Gemini CLI contribution, open source contribution, code contribution, community participation',
  openGraph: {
    title: 'Contributing Guide - Gemini CLI Developer Documentation',
    description: 'Learn how to contribute to the project',
    type: 'article',
  },
}

const prGuidelines = [
  {
    step: 1,
    title: 'Link to an Existing Issue',
    description: 'All PRs should be linked to an existing issue. For bug fixes, link to the bug report. For features, link to an approved feature request.',
    icon: ClipboardDocumentListIcon
  },
  {
    step: 2,
    title: 'Keep It Small and Focused',
    description: 'Create small, atomic PRs that address a single issue. Don\'t bundle multiple unrelated changes.',
    icon: CheckCircleIcon
  },
  {
    step: 3,
    title: 'Use Draft PRs for Work in Progress',
    description: 'Use GitHub\'s Draft Pull Request feature for early feedback before formal review.',
    icon: DocumentTextIcon
  },
  {
    step: 4,
    title: 'Ensure All Checks Pass',
    description: 'Run npm run preflight before submitting to ensure all tests, linting, and style checks pass.',
    icon: ExclamationTriangleIcon
  },
  {
    step: 5,
    title: 'Update Documentation',
    description: 'If your PR introduces user-facing changes, update the relevant documentation in the /docs directory.',
    icon: DocumentTextIcon
  },
  {
    step: 6,
    title: 'Write Clear Commit Messages',
    description: 'Follow Conventional Commits standard for your commit messages and PR descriptions.',
    icon: CodeBracketIcon
  }
]

const developmentSteps = [
  {
    step: 1,
    title: 'Prerequisites',
    description: 'Set up your development environment',
    commands: [
      '# Install Node.js ~20.19.0 (required for development)',
      '# Use nvm to manage Node.js versions',
      'nvm install 20.19.0',
      'nvm use 20.19.0'
    ]
  },
  {
    step: 2,
    title: 'Clone and Setup',
    description: 'Get the source code and install dependencies',
    commands: [
      'git clone https://github.com/google-gemini/gemini-cli.git',
      'cd gemini-cli',
      'npm install',
      'npm run build'
    ]
  },
  {
    step: 3,
    title: 'Enable Sandboxing (Optional)',
    description: 'Set up sandboxing for enhanced security',
    commands: [
      '# Add to your ~/.env file',
      'echo "GEMINI_SANDBOX=true" >> ~/.env',
      '# Build with sandbox container',
      'npm run build:all'
    ]
  },
  {
    step: 4,
    title: 'Run and Test',
    description: 'Start the CLI and run tests',
    commands: [
      '# Start Gemini CLI from source',
      'npm start',
      '# Run all tests',
      'npm run test',
      '# Run integration tests',
      'npm run test:e2e'
    ]
  },
  {
    step: 5,
    title: 'Quality Checks',
    description: 'Ensure code quality before submitting',
    commands: [
      '# Run all quality checks',
      'npm run preflight',
      '# Format code',
      'npm run format',
      '# Lint code',
      'npm run lint'
    ]
  }
]

const contributionTypes = [
  {
    type: 'Code Contributions',
    description: 'Fix bugs, add features, improve performance',
    icon: CodeBracketIcon,
    examples: [
      'Bug fixes and patches',
      'New CLI commands',
      'Performance optimizations',
      'Code refactoring',
      'Test improvements',
      'Error handling enhancements'
    ]
  },
  {
    type: 'Documentation',
    description: 'Improve docs, add examples, create tutorials',
    icon: DocumentTextIcon,
    examples: [
      'Fix documentation errors',
      'Add usage examples',
      'Improve API documentation',
      'Create tutorials and guides',
      'Update README files',
      'Add code comments'
    ]
  },
  {
    type: 'Issue Reporting',
    description: 'Report bugs, suggest features, provide feedback',
    icon: BugAntIcon,
    examples: [
      'Bug reports with reproduction steps',
      'Feature requests and proposals',
      'Performance issue reports',
      'Security vulnerability reports',
      'User experience feedback',
      'Compatibility issues'
    ]
  },
  {
    type: 'Community Support',
    description: 'Help users, participate in discussions',
    icon: UserGroupIcon,
    examples: [
      'Answer questions in issues',
      'Help with troubleshooting',
      'Review pull requests',
      'Test beta versions',
      'Share usage examples',
      'Mentor new contributors'
    ]
  }
]

export default function ContributingGuidePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contributing Guide
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              We would love to accept your patches and contributions to this project. 
              Learn how to get started and make your first contribution.
            </p>
          </div>
        </div>
      </div>

      {/* Before You Begin */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Before You Begin
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Important requirements before contributing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <HandRaisedIcon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Sign the CLA</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Contributions must be accompanied by a Contributor License Agreement (CLA). 
                You retain the copyright to your contribution.
              </p>
              <Link
                href="https://cla.developers.google.com/about"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign the CLA →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Community Guidelines</h3>
              </div>
              <p className="text-gray-600 mb-4">
                This project follows Google's Open Source Community Guidelines. 
                Please review them before contributing.
              </p>
              <Link
                href="https://opensource.google/conduct/"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Guidelines →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution Types */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ways to Contribute
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              There are many ways to contribute to the Gemini CLI project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributionTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{type.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, exIndex) => (
                    <li key={exIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pull Request Guidelines */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pull Request Guidelines
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow these guidelines to help us review and merge your PRs quickly
            </p>
          </div>

          <div className="space-y-6">
            {prGuidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                    {guideline.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <guideline.icon className="h-5 w-5 text-indigo-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {guideline.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{guideline.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Setup */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Development Setup
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Step-by-step guide to set up your development environment
            </p>
          </div>

          <div className="space-y-8">
            {developmentSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm font-mono">
                        {step.commands.join('\n')}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Debugging and Testing */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Debugging and Testing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tools and techniques for debugging and testing your contributions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">VS Code Debugging</h3>
              <p className="text-gray-600 mb-4">
                Debug the CLI interactively in VS Code with F5 or use the debug configuration.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# Start in debug mode
npm run debug

# Or use VS Code F5 key
# with "Attach" configuration`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">React DevTools</h3>
              <p className="text-gray-600 mb-4">
                Debug the CLI's React-based UI using React DevTools version 4.x.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# Start in development mode
DEV=true npm start

# Install React DevTools
npm install -g react-devtools@4.28.5
react-devtools`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sandbox Debugging</h3>
              <p className="text-gray-600 mb-4">
                Debug inside the sandbox container for security-related development.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# Debug inside sandbox
DEBUG=1 gemini

# Enable sandbox debugging
GEMINI_SANDBOX=true npm start`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Testing Types</h3>
              <p className="text-gray-600 mb-4">
                Run different types of tests to ensure your changes work correctly.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# Unit tests
npm run test

# Integration tests
npm run test:e2e

# All quality checks
npm run preflight`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-indigo-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Contribute?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start your contribution journey with these resources
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/google-gemini/gemini-cli"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                className="rounded-lg border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Issues
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Contributing Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Helpful links and documentation for contributors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <DocumentTextIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Architecture Docs</h3>
              <p className="text-gray-600 mb-4">
                Learn about the project structure and architecture
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/docs/architecture.md"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Architecture →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <CommandLineIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Tests</h3>
              <p className="text-gray-600 mb-4">
                Learn about the integration testing framework
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/docs/integration-tests.md"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Testing Guide →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <CodeBracketIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Development</h3>
              <p className="text-gray-600 mb-4">
                Guidelines for AI-assisted development
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/GEMINI.md"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GEMINI.md →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
