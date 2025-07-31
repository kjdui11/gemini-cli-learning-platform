'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  ServerIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LinkIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

interface McpProtocolContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function McpProtocolContent({ locale: _ }: McpProtocolContentProps) {
  const { t } = useTranslation()

  const mcpConcepts = [
    {
      id: 'overview',
      title: t('guidesMcpProtocol.concepts.overview.title'),
      description: t('guidesMcpProtocol.concepts.overview.description'),
      icon: ServerIcon,
      color: 'from-blue-500 to-indigo-600',
      content: {
        definition: t('guidesMcpProtocol.concepts.overview.definition'),
        components: [
          {
            name: t('guidesMcpProtocol.concepts.overview.components.host.name'),
            description: t('guidesMcpProtocol.concepts.overview.components.host.description'),
            role: t('guidesMcpProtocol.concepts.overview.components.host.role')
          },
          {
            name: t('guidesMcpProtocol.concepts.overview.components.server.name'),
            description: t('guidesMcpProtocol.concepts.overview.components.server.description'),
            role: t('guidesMcpProtocol.concepts.overview.components.server.role')
          },
          {
            name: t('guidesMcpProtocol.concepts.overview.components.transport.name'),
            description: t('guidesMcpProtocol.concepts.overview.components.transport.description'),
            role: t('guidesMcpProtocol.concepts.overview.components.transport.role')
          }
        ]
      }
    },
    {
      id: 'capabilities',
      title: t('guidesMcpProtocol.concepts.capabilities.title'),
      description: t('guidesMcpProtocol.concepts.capabilities.description'),
      icon: CpuChipIcon,
      color: 'from-green-500 to-emerald-600',
      content: {
        definition: t('guidesMcpProtocol.concepts.capabilities.definition'),
        types: [
          {
            name: t('guidesMcpProtocol.concepts.capabilities.types.tools.name'),
            description: t('guidesMcpProtocol.concepts.capabilities.types.tools.description'),
            examples: t('guidesMcpProtocol.concepts.capabilities.types.tools.examples')
          },
          {
            name: t('guidesMcpProtocol.concepts.capabilities.types.resources.name'),
            description: t('guidesMcpProtocol.concepts.capabilities.types.resources.description'),
            examples: t('guidesMcpProtocol.concepts.capabilities.types.resources.examples')
          },
          {
            name: t('guidesMcpProtocol.concepts.capabilities.types.prompts.name'),
            description: t('guidesMcpProtocol.concepts.capabilities.types.prompts.description'),
            examples: t('guidesMcpProtocol.concepts.capabilities.types.prompts.examples')
          }
        ]
      }
    },
    {
      id: 'configuration',
      title: t('guidesMcpProtocol.concepts.configuration.title'),
      description: t('guidesMcpProtocol.concepts.configuration.description'),
      icon: LinkIcon,
      color: 'from-purple-500 to-pink-600',
      content: {
        definition: t('guidesMcpProtocol.concepts.configuration.definition'),
        steps: [
          {
            step: t('guidesMcpProtocol.concepts.configuration.steps.install.step'),
            description: t('guidesMcpProtocol.concepts.configuration.steps.install.description'),
            command: t('guidesMcpProtocol.concepts.configuration.steps.install.command')
          },
          {
            step: t('guidesMcpProtocol.concepts.configuration.steps.configure.step'),
            description: t('guidesMcpProtocol.concepts.configuration.steps.configure.description'),
            command: t('guidesMcpProtocol.concepts.configuration.steps.configure.command')
          },
          {
            step: t('guidesMcpProtocol.concepts.configuration.steps.verify.step'),
            description: t('guidesMcpProtocol.concepts.configuration.steps.verify.description'),
            command: t('guidesMcpProtocol.concepts.configuration.steps.verify.command')
          }
        ]
      }
    }
  ]

  const practicalExamples = [
    {
      title: t('guidesMcpProtocol.examples.filesystem.title'),
      description: t('guidesMcpProtocol.examples.filesystem.description'),
      steps: [
        {
          command: t('guidesMcpProtocol.examples.filesystem.steps.install'),
          description: t('guidesMcpProtocol.examples.filesystem.steps.installDesc')
        },
        {
          command: t('guidesMcpProtocol.examples.filesystem.steps.configure'),
          description: t('guidesMcpProtocol.examples.filesystem.steps.configureDesc')
        },
        {
          command: t('guidesMcpProtocol.examples.filesystem.steps.use'),
          description: t('guidesMcpProtocol.examples.filesystem.steps.useDesc')
        }
      ]
    },
    {
      title: t('guidesMcpProtocol.examples.database.title'),
      description: t('guidesMcpProtocol.examples.database.description'),
      steps: [
        {
          command: t('guidesMcpProtocol.examples.database.steps.install'),
          description: t('guidesMcpProtocol.examples.database.steps.installDesc')
        },
        {
          command: t('guidesMcpProtocol.examples.database.steps.configure'),
          description: t('guidesMcpProtocol.examples.database.steps.configureDesc')
        },
        {
          command: t('guidesMcpProtocol.examples.database.steps.query'),
          description: t('guidesMcpProtocol.examples.database.steps.queryDesc')
        }
      ]
    }
  ]

  const bestPractices = [
    {
      type: 'success',
      title: t('guidesMcpProtocol.bestPractices.security.title'),
      content: t('guidesMcpProtocol.bestPractices.security.content')
    },
    {
      type: 'info',
      title: t('guidesMcpProtocol.bestPractices.performance.title'),
      content: t('guidesMcpProtocol.bestPractices.performance.content')
    },
    {
      type: 'warning',
      title: t('guidesMcpProtocol.bestPractices.debugging.title'),
      content: t('guidesMcpProtocol.bestPractices.debugging.content')
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ServerIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('guidesMcpProtocol.hero.title')}
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              {t('guidesMcpProtocol.hero.subtitle')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesMcpProtocol.hero.advanced')}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesMcpProtocol.hero.extensible')}
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
              {t('guidesMcpProtocol.overview.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('guidesMcpProtocol.overview.description')}
            </p>
          </div>

          {/* MCP Concepts */}
          <div className="space-y-16">
            {mcpConcepts.map((concept) => (
              <div key={concept.id} className="border-l-4 border-gray-200 pl-6">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${concept.color} mr-4`}>
                    <concept.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{concept.title}</h3>
                    <p className="text-gray-600">{concept.description}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">{concept.content.definition}</p>

                  {concept.content.components && (
                    <div className="space-y-4">
                      {concept.content.components.map((component, index) => (
                        <div key={index} className="bg-white rounded p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">{component.name}</h4>
                          <p className="text-gray-600 text-sm mb-2">{component.description}</p>
                          <p className="text-gray-500 text-xs">{component.role}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {concept.content.types && (
                    <div className="space-y-4">
                      {concept.content.types.map((type, index) => (
                        <div key={index} className="bg-white rounded p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                          <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                          <p className="text-gray-500 text-xs">{type.examples}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {concept.content.steps && (
                    <div className="space-y-4">
                      {concept.content.steps.map((step, index) => (
                        <div key={index} className="bg-white rounded p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">{step.step}</h4>
                          <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                          <div className="bg-gray-900 rounded p-2">
                            <code className="text-green-400 font-mono text-xs">{step.command}</code>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Practical Examples */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('guidesMcpProtocol.examples.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{example.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                  <div className="space-y-3">
                    {example.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="border-l-2 border-blue-200 pl-3">
                        <div className="bg-gray-900 rounded p-2 mb-1">
                          <code className="text-green-400 text-xs">{step.command}</code>
                        </div>
                        <p className="text-xs text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('guidesMcpProtocol.bestPractices.title')}</h3>
            <div className="space-y-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${
                  practice.type === 'success' ? 'bg-green-50 border-green-500' :
                  practice.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                  'bg-blue-50 border-blue-500'
                }`}>
                  <div className="flex items-center">
                    {practice.type === 'success' && <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />}
                    {practice.type === 'warning' && <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />}
                    {practice.type === 'info' && <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />}
                    <h4 className={`font-semibold ${
                      practice.type === 'success' ? 'text-green-900' :
                      practice.type === 'warning' ? 'text-yellow-900' :
                      'text-blue-900'
                    }`}>{practice.title}</h4>
                  </div>
                  <p className={`mt-1 ${
                    practice.type === 'success' ? 'text-green-800' :
                    practice.type === 'warning' ? 'text-yellow-800' :
                    'text-blue-800'
                  }`}>{practice.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('guidesMcpProtocol.nextSteps.title')}</h3>
            <p className="text-gray-700 mb-6">
              {t('guidesMcpProtocol.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides/advanced-config"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                {t('guidesMcpProtocol.nextSteps.advancedConfig')}
              </Link>
              <Link
                href="/guides/integration"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {t('guidesMcpProtocol.nextSteps.integration')}
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('guidesMcpProtocol.nextSteps.backToGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}