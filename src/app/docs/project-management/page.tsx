import { Metadata } from 'next'
import Link from 'next/link'
import { 
  FolderIcon,
  CogIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Project Management - Gemini CLI Documentation',
  description: 'Guide to project management in Gemini CLI including NPM workspaces, package management, release processes, and development workflows.',
  keywords: 'Gemini CLI project management, NPM workspaces, package management, release process, development workflow',
  openGraph: {
    title: 'Project Management - Gemini CLI',
    description: 'Managing packages and releases in Gemini CLI',
    type: 'article',
  },
}

const workspaceStructure = `gemini-cli/
├── packages/
│   ├── cli/                 # Main CLI package
│   │   ├── package.json
│   │   ├── src/
│   │   └── dist/
│   ├── core/                # Core functionality
│   │   ├── package.json
│   │   ├── src/
│   │   └── dist/
│   ├── tools/               # Built-in tools
│   │   ├── package.json
│   │   ├── src/
│   │   └── dist/
│   └── extensions/          # Extension system
│       ├── package.json
│       ├── src/
│       └── dist/
├── package.json             # Root workspace config
├── lerna.json              # Lerna configuration
├── tsconfig.json           # TypeScript config
└── .github/                # CI/CD workflows
    └── workflows/
        ├── test.yml
        ├── build.yml
        └── release.yml`

const packageJsonRoot = `{
  "name": "gemini-cli-workspace",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "lerna run build",
    "test": "lerna run test",
    "lint": "lerna run lint",
    "clean": "lerna clean",
    "bootstrap": "lerna bootstrap",
    "version": "lerna version",
    "publish": "lerna publish"
  },
  "devDependencies": {
    "lerna": "^6.0.0",
    "typescript": "^5.0.0",
    "@types/node": "^18.0.0"
  }
}`

const releaseWorkflow = `name: Release

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - run: npm run lint

  release:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
          token: \${{ secrets.GITHUB_TOKEN }}
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          registry-url: 'https://registry.npmjs.org'
      
      - run: npm ci
      - run: npm run build
      
      - name: Configure Git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
      
      - name: Version and Publish
        run: |
          npm run version -- --conventional-commits --yes
          npm run publish -- --yes
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}`

export default function ProjectManagementPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Project Management
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              Learn how Gemini CLI manages its packages, releases, and development workflow 
              using NPM workspaces, Lerna, and automated CI/CD processes.
            </p>
          </div>
        </div>
      </div>

      {/* NPM Workspaces */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              NPM Workspaces
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding the monorepo structure and package organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Workspace Structure
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
                <code>{workspaceStructure}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Root Package.json
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{packageJsonRoot}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Package Management */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Package Management
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Commands and workflows for managing packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <FolderIcon className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Development Commands
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm run bootstrap
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Install and link all package dependencies</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm run build
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Build all packages in dependency order</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm run test
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Run tests across all packages</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm run clean
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Clean node_modules and build artifacts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <CogIcon className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Lerna Commands
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    lerna run build --scope @gemini/cli
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Build specific package</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    lerna add lodash packages/core
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Add dependency to specific package</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    lerna version --conventional-commits
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Version packages using conventional commits</p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    lerna publish --registry https://registry.npmjs.org
                  </code>
                  <p className="text-sm text-gray-600 mt-1">Publish packages to npm registry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Release Process */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Release Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Automated release workflow using GitHub Actions
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              GitHub Actions Workflow
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{releaseWorkflow}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Development Workflow */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Development Workflow
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Best practices for contributing to the project
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Fork and Clone
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Fork the repository and clone it locally for development.
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    git clone https://github.com/your-username/gemini-cli.git
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Setup Development Environment
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Install dependencies and set up the development environment.
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm install && npm run bootstrap
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Create Feature Branch
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Create a new branch for your feature or bug fix.
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    git checkout -b feature/my-new-feature
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Develop and Test
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Make your changes and ensure all tests pass.
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    npm run build && npm run test && npm run lint
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Submit Pull Request
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Push your changes and create a pull request with a clear description.
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    git push origin feature/my-new-feature
                  </code>
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
              Guidelines for effective project management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Code Quality
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Follow conventional commit messages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Maintain test coverage above 80%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Use TypeScript for type safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Run linting and formatting checks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Release Management
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Use semantic versioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Generate changelogs automatically</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Test releases in staging environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Monitor post-release metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-indigo-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn more about contributing and development
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Contributing Guide
              </Link>
              <Link
                href="/docs/development-setup"
                className="rounded-lg border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Development Setup
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
