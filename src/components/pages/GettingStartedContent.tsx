'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  PlayIcon,
  CommandLineIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface GettingStartedContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function GettingStartedContent({ locale: _ }: GettingStartedContentProps) {
  const { t } = useTranslation()

  const steps = [
    {
      id: 1,
      title: t('guidesGettingStarted.steps.install.title'),
      description: t('guidesGettingStarted.steps.install.description'),
      content: [
        {
          method: t('guidesGettingStarted.steps.install.methods.npx.name'),
          command: 'npx https://github.com/google-gemini/gemini-cli',
          description: t('guidesGettingStarted.steps.install.methods.npx.description')
        },
        {
          method: t('guidesGettingStarted.steps.install.methods.npm.name'),
          command: 'npm install -g @google/gemini-cli',
          description: t('guidesGettingStarted.steps.install.methods.npm.description')
        },
        {
          method: t('guidesGettingStarted.steps.install.methods.homebrew.name'),
          command: 'brew install gemini-cli',
          description: t('guidesGettingStarted.steps.install.methods.homebrew.description')
        }
      ]
    },
    {
      id: 2,
      title: t('guidesGettingStarted.steps.firstRun.title'),
      description: t('guidesGettingStarted.steps.firstRun.description'),
      content: [
        {
          step: t('guidesGettingStarted.steps.firstRun.steps.command.title'),
          command: 'gemini',
          description: t('guidesGettingStarted.steps.firstRun.steps.command.description')
        },
        {
          step: t('guidesGettingStarted.steps.firstRun.steps.theme.title'),
          description: t('guidesGettingStarted.steps.firstRun.steps.theme.description')
        },
        {
          step: t('guidesGettingStarted.steps.firstRun.steps.auth.title'),
          description: t('guidesGettingStarted.steps.firstRun.steps.auth.description')
        }
      ]
    },
    {
      id: 3,
      title: t('guidesGettingStarted.steps.firstChat.title'),
      description: t('guidesGettingStarted.steps.firstChat.description'),
      content: [
        {
          example: t('guidesGettingStarted.steps.firstChat.examples.greeting.title'),
          command: t('guidesGettingStarted.steps.firstChat.examples.greeting.command'),
          description: t('guidesGettingStarted.steps.firstChat.examples.greeting.description')
        },
        {
          example: t('guidesGettingStarted.steps.firstChat.examples.code.title'),
          command: t('guidesGettingStarted.steps.firstChat.examples.code.command'),
          description: t('guidesGettingStarted.steps.firstChat.examples.code.description')
        },
        {
          example: t('guidesGettingStarted.steps.firstChat.examples.file.title'),
          command: t('guidesGettingStarted.steps.firstChat.examples.file.command'),
          description: t('guidesGettingStarted.steps.firstChat.examples.file.description')
        }
      ]
    }
  ]

  const tips = [
    {
      type: 'success',
      title: t('guidesGettingStarted.tips.success.title'),
      content: t('guidesGettingStarted.tips.success.content')
    },
    {
      type: 'warning',
      title: t('guidesGettingStarted.tips.warning.title'),
      content: t('guidesGettingStarted.tips.warning.content')
    },
    {
      type: 'info',
      title: t('guidesGettingStarted.tips.info.title'),
      content: t('guidesGettingStarted.tips.info.content')
    }
  ]

  const commonCommands = [
    { command: '/help', description: t('guidesGettingStarted.commands.help') },
    { command: '/clear', description: t('guidesGettingStarted.commands.clear') },
    { command: '/quit', description: t('guidesGettingStarted.commands.quit') },
    { command: '/theme', description: t('guidesGettingStarted.commands.theme') },
    { command: '@filename', description: t('guidesGettingStarted.commands.file') },
    { command: '!command', description: t('guidesGettingStarted.commands.system') }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <PlayIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('guidesGettingStarted.title')}
            </h1>
            <p className="mt-4 text-lg text-green-100">
              {t('guidesGettingStarted.subtitle')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesGettingStarted.meta.level')}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesGettingStarted.meta.duration')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">{t('guidesGettingStarted.prerequisites.title')}</h2>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                {t('guidesGettingStarted.prerequisites.nodejs')}
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                {t('guidesGettingStarted.prerequisites.terminal')}
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                {t('guidesGettingStarted.prerequisites.google')}
              </li>
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-sm font-semibold mr-3">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{step.description}</p>

                <div className="space-y-4">
                  {step.content.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      {'method' in item && item.method && (
                        <h4 className="font-semibold text-gray-900 mb-2">{item.method}</h4>
                      )}
                      {'step' in item && item.step && (
                        <h4 className="font-semibold text-gray-900 mb-2">{item.step}</h4>
                      )}
                      {'example' in item && item.example && (
                        <h4 className="font-semibold text-gray-900 mb-2">{item.example}</h4>
                      )}

                      {item.command && (
                        <div className="bg-gray-900 rounded p-3 mb-2">
                          <code className="text-green-400 font-mono text-sm">{item.command}</code>
                        </div>
                      )}

                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('guidesGettingStarted.tips.title')}</h3>
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
                    {tip.type === 'info' && <CommandLineIcon className="h-5 w-5 text-blue-600 mr-2" />}
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

          {/* Common Commands */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('guidesGettingStarted.commandsTitle')}</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonCommands.map((cmd, index) => (
                  <div key={index} className="flex items-start">
                    <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm font-mono mr-3 flex-shrink-0">
                      {cmd.command}
                    </code>
                    <span className="text-gray-700 text-sm">{cmd.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('guidesGettingStarted.nextSteps.title')}</h3>
            <p className="text-gray-700 mb-6">
              {t('guidesGettingStarted.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides/basic-commands"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
              >
                {t('guidesGettingStarted.nextSteps.basicCommands')}
              </Link>
              <Link
                href="/guides/file-operations"
                className="inline-flex items-center justify-center rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50 transition-colors"
              >
                {t('guidesGettingStarted.nextSteps.fileOperations')}
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('guidesGettingStarted.nextSteps.backToGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}