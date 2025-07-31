'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  CommandLineIcon,
  CheckCircleIcon,
  ClipboardDocumentIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

interface BasicCommandsContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BasicCommandsContent({ locale: _ }: BasicCommandsContentProps) {
  const { t } = useTranslation()

  const commandCategories = [
    {
      id: 'slash',
      title: t('guidesBasicCommands.categories.slash.title'),
      description: t('guidesBasicCommands.categories.slash.description'),
      icon: '/',
      color: 'from-blue-500 to-indigo-600',
      commands: [
        {
          command: '/help',
          description: t('guidesBasicCommands.categories.slash.commands.help'),
          example: '/help'
        },
        {
          command: '/clear',
          description: t('guidesBasicCommands.categories.slash.commands.clear'),
          example: '/clear'
        },
        {
          command: '/quit',
          description: t('guidesBasicCommands.categories.slash.commands.quit'),
          example: '/quit'
        },
        {
          command: '/theme',
          description: t('guidesBasicCommands.categories.slash.commands.theme'),
          example: '/theme'
        }
      ]
    },
    {
      id: 'at',
      title: t('guidesBasicCommands.categories.at.title'),
      description: t('guidesBasicCommands.categories.at.description'),
      icon: '@',
      color: 'from-green-500 to-emerald-600',
      commands: [
        {
          command: '@filename',
          description: t('guidesBasicCommands.categories.at.commands.file'),
          example: '@README.md'
        },
        {
          command: '@folder/',
          description: t('guidesBasicCommands.categories.at.commands.folder'),
          example: '@src/'
        },
        {
          command: '@*.js',
          description: t('guidesBasicCommands.categories.at.commands.wildcard'),
          example: '@*.js'
        }
      ]
    },
    {
      id: 'exclamation',
      title: t('guidesBasicCommands.categories.exclamation.title'),
      description: t('guidesBasicCommands.categories.exclamation.description'),
      icon: '!',
      color: 'from-orange-500 to-red-600',
      commands: [
        {
          command: '!command',
          description: t('guidesBasicCommands.categories.exclamation.commands.system'),
          example: '!ls -la'
        },
        {
          command: '!git status',
          description: t('guidesBasicCommands.categories.exclamation.commands.git'),
          example: '!git status'
        },
        {
          command: '!npm install',
          description: t('guidesBasicCommands.categories.exclamation.commands.npm'),
          example: '!npm install package-name'
        }
      ]
    }
  ]

  const tips = [
    {
      type: 'info',
      title: t('guidesBasicCommands.tips.info.title'),
      content: t('guidesBasicCommands.tips.info.content')
    },
    {
      type: 'warning',
      title: t('guidesBasicCommands.tips.warning.title'),
      content: t('guidesBasicCommands.tips.warning.content')
    },
    {
      type: 'success',
      title: t('guidesBasicCommands.tips.success.title'),
      content: t('guidesBasicCommands.tips.success.content')
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CommandLineIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('guidesBasicCommands.hero.title')}
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              {t('guidesBasicCommands.hero.subtitle')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesBasicCommands.hero.comprehensive')}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesBasicCommands.hero.practical')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('guidesBasicCommands.overview.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('guidesBasicCommands.overview.description')}
            </p>
          </div>

          {/* Command Categories */}
          <div className="space-y-16">
            {commandCategories.map((category) => (
              <div key={category.id} className="border-l-4 border-gray-200 pl-6">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <span className="text-white text-xl font-bold">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.commands.map((cmd, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm font-mono">
                          {cmd.command}
                        </code>
                        <button
                          onClick={() => navigator.clipboard.writeText(cmd.example)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="复制示例"
                        >
                          <ClipboardDocumentIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{cmd.description}</p>
                      <div className="bg-gray-900 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">{cmd.example}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('guidesBasicCommands.tips.title')}</h3>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${
                  tip.type === 'success' ? 'bg-green-50 border-green-500' :
                  tip.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                  'bg-blue-50 border-blue-500'
                }`}>
                  <div className="flex items-center">
                    {tip.type === 'success' && <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />}
                    {tip.type === 'warning' && <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />}
                    {tip.type === 'info' && <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />}
                    <h4 className={`font-semibold ${
                      tip.type === 'success' ? 'text-green-900' :
                      tip.type === 'warning' ? 'text-yellow-900' :
                      'text-blue-900'
                    }`}>{tip.title}</h4>
                  </div>
                  <p className={`mt-1 ${
                    tip.type === 'success' ? 'text-green-800' :
                    tip.type === 'warning' ? 'text-yellow-800' :
                    'text-blue-800'
                  }`}>{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('guidesBasicCommands.nextSteps.title')}</h3>
            <p className="text-gray-700 mb-6">
              {t('guidesBasicCommands.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides/file-operations"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                {t('guidesBasicCommands.nextSteps.fileOperations')}
              </Link>
              <Link
                href="/guides/advanced-config"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {t('guidesBasicCommands.nextSteps.advancedConfig')}
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('guidesBasicCommands.nextSteps.backToGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}