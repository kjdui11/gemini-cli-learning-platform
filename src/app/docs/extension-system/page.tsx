import { Metadata } from 'next'
import Link from 'next/link'
import { 
  PuzzlePieceIcon,
  RocketLaunchIcon,
  CogIcon,
  DocumentTextIcon,
  ShareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Extension System - Gemini CLI Documentation',
  description: 'Complete guide to the Gemini CLI extension system including creating, packaging, publishing, and managing extensions.',
  keywords: 'Gemini CLI extensions, plugin system, extension development, package management, community extensions',
  openGraph: {
    title: 'Extension System - Gemini CLI',
    description: 'Build and share extensions for the Gemini CLI community',
    type: 'article',
  },
}

const extensionTypes = [
  {
    type: 'Tool Extensions',
    description: 'Add new tools and capabilities',
    icon: CogIcon,
    examples: ['Database connectors', 'API integrations', 'File processors', 'Data analyzers']
  },
  {
    type: 'Command Extensions',
    description: 'Add new CLI commands',
    icon: DocumentTextIcon,
    examples: ['Project generators', 'Deployment scripts', 'Testing utilities', 'Code formatters']
  },
  {
    type: 'Theme Extensions',
    description: 'Customize the CLI appearance',
    icon: PuzzlePieceIcon,
    examples: ['Color schemes', 'Output formats', 'Progress indicators', 'Custom prompts']
  },
  {
    type: 'Integration Extensions',
    description: 'Connect with external services',
    icon: ShareIcon,
    examples: ['GitHub integration', 'Slack notifications', 'Email alerts', 'Cloud storage']
  }
]

const extensionStructure = `my-extension/
├── package.json          # Extension metadata
├── index.js              # Main entry point
├── tools/                # Custom tools
│   ├── my-tool.js
│   └── another-tool.js
├── commands/             # Custom commands
│   └── my-command.js
├── themes/               # Custom themes
│   └── my-theme.json
├── README.md             # Documentation
└── tests/                # Test files
    └── extension.test.js`

const packageJsonExample = `{
  "name": "gemini-cli-my-extension",
  "version": "1.0.0",
  "description": "My awesome Gemini CLI extension",
  "main": "index.js",
  "keywords": ["gemini-cli", "extension", "tools"],
  "author": "Your Name",
  "license": "MIT",
  "gemini-cli": {
    "version": "^2.0.0",
    "type": "extension",
    "tools": ["./tools/my-tool.js"],
    "commands": ["./commands/my-command.js"],
    "themes": ["./themes/my-theme.json"]
  },
  "dependencies": {
    "@google/generative-ai-cli": "^2.0.0"
  }
}`

export default function ExtensionSystemPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Extension System
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              Build and share extensions to extend Gemini CLI's functionality. 
              Create tools, commands, themes, and integrations for the community.
            </p>
          </div>
        </div>
      </div>

      {/* Extension Types */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Extension Types
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Different types of extensions you can create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extensionTypes.map((ext, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <ext.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{ext.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">{ext.description}</p>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {ext.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extension Structure */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Extension Structure
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How to organize your extension files
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Directory Structure
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono">
                <code>{extensionStructure}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Package.json Configuration
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{packageJsonExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Creating Extensions */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Creating Extensions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Step-by-step guide to building your first extension
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Initialize Extension
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a new directory and initialize your extension with the CLI generator.
                  </p>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                    <code>{`mkdir my-extension
cd my-extension
gemini extension init`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Implement Features
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Add your tools, commands, or other features to the extension.
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`// tools/my-tool.js
export const myTool = {
  name: 'my_custom_tool',
  description: 'Does something useful',
  parameters: {
    type: 'object',
    properties: {
      input: { type: 'string', description: 'Input data' }
    },
    required: ['input']
  },
  execute: async ({ input }) => {
    return \`Processed: \${input}\`;
  }
};`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Test Extension
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Test your extension locally before publishing.
                  </p>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                    <code>{`# Install locally for testing
npm link

# Load extension in Gemini CLI
gemini extension load ./my-extension

# Test your tools
gemini ask "Use my custom tool" --tools my_custom_tool`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Publish Extension
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Publish your extension to npm for others to use.
                  </p>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                    <code>{`# Build and test
npm run build
npm test

# Publish to npm
npm publish

# Install from npm
npm install -g gemini-cli-my-extension`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extension Management */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Extension Management
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Commands for managing extensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Installation Commands
              </h3>
              <div className="space-y-3">
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension install &lt;name&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Install an extension from npm</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension load &lt;path&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Load a local extension</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension uninstall &lt;name&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Remove an extension</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Management Commands
              </h3>
              <div className="space-y-3">
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension list
                  </code>
                  <p className="text-sm text-gray-600 mt-1">List installed extensions</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension info &lt;name&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Show extension details</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension search &lt;query&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Search for extensions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Best Practices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Guidelines for creating quality extensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Follow semantic versioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Include comprehensive tests</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Write clear documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Handle errors gracefully</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Publishing
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Use descriptive package names</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Include relevant keywords</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Provide usage examples</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Maintain backward compatibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn more about extension development
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/tool-development"
                className="rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors"
              >
                Tool Development
              </Link>
              <Link
                href="/docs/plugin-api"
                className="rounded-lg border border-purple-600 px-6 py-3 text-base font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Plugin API
              </Link>
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Contributing Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
