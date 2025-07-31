import { Metadata } from 'next'
import Link from 'next/link'
import {
  CommandLineIcon,
  CogIcon,
  PuzzlePieceIcon,
  FolderIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Project Structure | Gemini CLI Developer Documentation',
  description: 'Understanding the codebase organization and architecture of Gemini CLI including package structure, module organization, and development workflow.',
  keywords: 'Gemini CLI project structure, code organization, architectural design, module division, developer guide',
  openGraph: {
    title: 'Project Structure - Gemini CLI Developer Documentation',
    description: 'Understanding Gemini CLI code organization and architectural design',
    type: 'article',
  },
}

const content = {
  title: 'Project Structure',
  subtitle: 'Understanding the codebase organization and architecture of Gemini CLI',
  overview: {
    title: 'Project Overview',
    subtitle: 'Gemini CLI is organized as a monorepo with multiple interconnected packages',
    description: 'Gemini CLI is a Lerna-based monorepo project that modularizes functionality into independent packages for easier development, testing, and maintenance.'
  },
  packages: [
    {
      name: 'CLI Package',
      path: 'packages/cli',
      description: 'Main command-line interface and user-facing commands',
      icon: CommandLineIcon,
      color: 'from-blue-500 to-indigo-600',
      responsibilities: [
        'Command parsing and routing',
        'User interface and interaction',
        'Configuration management',
        'Error handling and reporting',
        'Help and documentation display'
      ]
    },
    {
      name: 'Core Package',
      path: 'packages/core',
      description: 'Core functionality and business logic',
      icon: CogIcon,
      color: 'from-green-500 to-emerald-600',
      responsibilities: [
        'API client implementations',
        'Model interactions',
        'Tool management system',
        'MCP protocol handling',
        'State management'
      ]
    },
    {
      name: 'Tools Package',
      path: 'packages/tools',
      description: 'Built-in tools and utilities',
      icon: PuzzlePieceIcon,
      color: 'from-purple-500 to-pink-600',
      responsibilities: [
        'File system operations',
        'Shell command execution',
        'Web requests and searches',
        'Memory management',
        'Tool registration'
      ]
    },
    {
      name: 'Extensions Package',
      path: 'packages/extensions',
      description: 'Extension system and plugin management',
      icon: FolderIcon,
      color: 'from-orange-500 to-red-600',
      responsibilities: [
        'Extension loading and management',
        'Plugin registry',
        'Extension API',
        'Lifecycle management',
        'Dependency resolution'
      ]
    }
  ],
  workflow: {
    title: 'Development Workflow',
    subtitle: 'How to work with the codebase effectively',
    commands: [
      {
        category: 'Global Commands',
        items: [
          { command: 'npm run bootstrap', description: 'Install and link all packages' },
          { command: 'npm run build', description: 'Build all packages' },
          { command: 'npm run test', description: 'Run all tests' },
          { command: 'npm run lint', description: 'Lint all packages' }
        ]
      },
      {
        category: 'Package-specific Commands',
        items: [
          { command: 'lerna run build --scope @gemini/cli', description: 'Build specific package' },
          { command: 'lerna run test --scope @gemini/core', description: 'Test specific package' },
          { command: 'lerna add lodash packages/core', description: 'Add dependency to package' }
        ]
      }
    ]
  },
  principles: {
    title: 'Architecture Principles',
    subtitle: 'Key principles guiding the project structure',
    items: [
      {
        title: 'Modular Design',
        description: 'Each package has a single responsibility',
        points: [
          'Clear separation of concerns',
          'Minimal inter-package dependencies',
          'Well-defined interfaces',
          'Independent testing'
        ]
      },
      {
        title: 'Extensible Architecture',
        description: 'Built for extensibility and customization',
        points: [
          'Plugin-based architecture',
          'Tool registration system',
          'Event-driven communication',
          'Configuration-driven behavior'
        ]
      }
    ]
  }
}

export default function ProjectStructurePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              {content.subtitle}
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-indigo-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Architecture
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Structure
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
              {content.overview.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.overview.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-center">
              {content.overview.description}
            </p>
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Package Structure
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Core packages that make up the Gemini CLI ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${pkg.color} text-white`}>
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <code className="text-sm text-gray-500">{pkg.path}</code>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{pkg.description}</p>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {pkg.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.workflow.commands.map((commandGroup, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{commandGroup.category}</h3>
                <div className="space-y-4">
                  {commandGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-blue-500 pl-4">
                      <div className="bg-gray-900 rounded-lg p-3 mb-2">
                        <code className="text-green-400 text-sm font-mono">{item.command}</code>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Principles */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.principles.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.principles.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.principles.items.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-700 mb-6">{principle.description}</p>

                <ul className="space-y-2">
                  {principle.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
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
            <Link href="/docs/build-and-test" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CogIcon className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  Build and Test
                </h3>
                <p className="text-gray-600 text-sm">
                  Building, testing, and debugging the project
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