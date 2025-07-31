import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CommandLineIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CogIcon,
  DocumentTextIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Installation Guide - Gemini CLI Documentation',
  description: 'Step-by-step installation guide for Gemini CLI across different platforms including npm, Docker, and manual installation methods.',
  keywords: 'Gemini CLI installation, npm install, Docker, setup guide, platform support',
  openGraph: {
    title: 'Installation Guide - Gemini CLI',
    description: 'Install Gemini CLI on your system',
    type: 'article',
  },
}

const installationMethods = [
  {
    id: 'npm',
    title: 'NPM Installation',
    description: 'Recommended method for most users',
    icon: CommandLineIcon,
    color: 'from-green-500 to-emerald-600',
    steps: [
      {
        title: 'Install globally via npm',
        command: 'npm install -g @google/generative-ai-cli',
        description: 'This installs Gemini CLI globally on your system'
      },
      {
        title: 'Verify installation',
        command: 'gemini --version',
        description: 'Check that the installation was successful'
      },
      {
        title: 'Set up API key',
        command: 'gemini config set api-key YOUR_API_KEY',
        description: 'Configure your Google AI API key'
      }
    ]
  },
  {
    id: 'docker',
    title: 'Docker Installation',
    description: 'Containerized environment for consistent deployment',
    icon: CloudIcon,
    color: 'from-blue-500 to-indigo-600',
    steps: [
      {
        title: 'Pull the Docker image',
        command: 'docker pull google/gemini-cli:latest',
        description: 'Download the official Docker image'
      },
      {
        title: 'Run with API key',
        command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
        description: 'Start a container with your API key'
      },
      {
        title: 'Interactive mode',
        command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
        description: 'Start an interactive chat session'
      }
    ]
  },
  {
    id: 'source',
    title: 'From Source',
    description: 'Build from source code for development',
    icon: CogIcon,
    color: 'from-purple-500 to-pink-600',
    steps: [
      {
        title: 'Clone repository',
        command: 'git clone https://github.com/google-gemini/gemini-cli.git',
        description: 'Get the source code from GitHub'
      },
      {
        title: 'Install dependencies',
        command: 'cd gemini-cli && npm install',
        description: 'Install all required dependencies'
      },
      {
        title: 'Build and link',
        command: 'npm run build && npm link',
        description: 'Build the project and create global symlink'
      }
    ]
  }
]

const platformRequirements = [
  {
    platform: 'Windows',
    requirements: [
      'Windows 10 or later',
      'Node.js 18.0.0 or higher',
      'PowerShell 5.1 or PowerShell Core 7+',
      'Windows Terminal (recommended)'
    ]
  },
  {
    platform: 'macOS',
    requirements: [
      'macOS 10.15 (Catalina) or later',
      'Node.js 18.0.0 or higher',
      'Xcode Command Line Tools',
      'Terminal or iTerm2'
    ]
  },
  {
    platform: 'Linux',
    requirements: [
      'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
      'Node.js 18.0.0 or higher',
      'curl or wget',
      'bash or zsh shell'
    ]
  }
]

export default function InstallationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Installation Guide
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Get Gemini CLI up and running on your system with our step-by-step 
              installation guide. Choose the method that works best for your environment.
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              System Requirements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Make sure your system meets these requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformRequirements.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{platform.platform}</h3>
                <ul className="space-y-2">
                  {platform.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Methods */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Installation Methods
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the installation method that best fits your needs
            </p>
          </div>

          <div className="space-y-12">
            {installationMethods.map((method) => (
              <div key={method.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {method.steps.map((step, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Step {index + 1}: {step.title}
                      </h4>
                      <p className="text-gray-700 mb-3">{step.description}</p>
                      <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                        {step.command}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Key Setup */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              API Key Configuration
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Set up your Google AI API key to start using Gemini CLI
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Get Your API Key
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold mr-3 mt-0.5">1</span>
                    Visit <Link href="https://aistudio.google.com/app/apikey" target="_blank" className="text-blue-600 hover:text-blue-500">Google AI Studio</Link>
                  </li>
                  <li className="flex items-start">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold mr-3 mt-0.5">2</span>
                    Sign in with your Google account
                  </li>
                  <li className="flex items-start">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold mr-3 mt-0.5">3</span>
                    Click "Create API Key" and copy the key
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Configure the Key
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Using CLI command:</h4>
                    <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                      gemini config set api-key YOUR_API_KEY
                    </code>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Using environment variable:</h4>
                    <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                      export GEMINI_API_KEY=YOUR_API_KEY
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification */}
      <div className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Verify Installation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Test your installation to make sure everything is working
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Check Version
                </h3>
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                  gemini --version
                </code>
                <p className="text-gray-600 text-sm">Should display the installed version number</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Test API Connection
                </h3>
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                  gemini ask "Hello, can you hear me?"
                </code>
                <p className="text-gray-600 text-sm">Should return a response from Gemini</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Check Configuration
                </h3>
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                  gemini config list
                </code>
                <p className="text-gray-600 text-sm">Should show your current configuration settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Issues
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Solutions to common installation problems
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Command not found
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If you get "command not found" after installation, your PATH may not include npm's global bin directory.
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm config get prefix
                  </code>
                  <p className="text-gray-600 text-sm mt-2">
                    Add the bin directory to your PATH in your shell profile (.bashrc, .zshrc, etc.)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Permission denied
                  </h3>
                  <p className="text-gray-700 mb-3">
                    On macOS/Linux, you might need to use sudo or configure npm to use a different directory.
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm config set prefix ~/.npm-global
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Next Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Now that Gemini CLI is installed, explore these resources
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/configuration"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Configuration Guide
              </Link>
              <Link
                href="/docs/examples"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Usage Examples
              </Link>
              <Link
                href="/docs/troubleshooting"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Troubleshooting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
