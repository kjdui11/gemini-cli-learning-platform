'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  CodeBracketIcon,
  CommandLineIcon,
  CogIcon,
  RocketLaunchIcon,
  LinkIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

interface IntegrationContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function IntegrationContent({ locale }: IntegrationContentProps) {
  const { t, isLoading, messages } = useTranslation()

  // If translations are still loading, show loading state
  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Get translated data directly from messages object
  const integrationData = messages.guidesIntegration as Record<string, unknown>

  if (!integrationData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Translation data not found</p>
        </div>
      </div>
    )
  }

  const integrationTypes = (integrationData.types as Record<string, unknown>[]) || []
  const workflowSteps = ((integrationData.workflow as Record<string, unknown>)?.steps as Record<string, unknown>[]) || []
  const toolIntegrations = (integrationData.tools as Record<string, unknown>[]) || []
  const bestPractices = (integrationData.bestPractices as Record<string, unknown>[]) || []

  const typeIcons = {
    ide: CodeBracketIcon,
    ci: CommandLineIcon,
    automation: CogIcon,
    deployment: RocketLaunchIcon
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('guidesIntegration.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-green-100">
              {t('guidesIntegration.subtitle')}
            </p>
            <p className="mt-4 text-base text-green-200">
              {t('guidesIntegration.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesIntegration.overview.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('guidesIntegration.overview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Integration Types */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesIntegration.typesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesIntegration.typesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationTypes.map((type, index) => {
              const IconComponent = typeIcons[type.icon as keyof typeof typeIcons] || LinkIcon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{type.title as string}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{type.description as string}</p>
                  <div className="space-y-2">
                    {((type.features as Record<string, unknown>[]) || []).map((feature: Record<string, unknown>, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature.name as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesIntegration.workflow.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesIntegration.workflow.description')}
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title as string}</h3>
                  <p className="text-gray-600 mb-4">{step.description as string}</p>
                  {(step.example as string) && (
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                        {step.example as string}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Integrations */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesIntegration.toolsTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesIntegration.toolsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolIntegrations.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{tool.name as string}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{tool.description as string}</p>
                <div className="space-y-2">
                  {((tool.steps as Record<string, unknown>[]) || []).map((step: Record<string, unknown>, stepIndex: number) => (
                    <div key={stepIndex} className="text-sm text-gray-600">
                      <span className="font-medium">{stepIndex + 1}.</span> {step.text as string}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesIntegration.bestPracticesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesIntegration.bestPracticesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{practice.title as string}</h3>
                    <p className="text-gray-600 text-sm">{practice.description as string}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesIntegration.nextSteps.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('guidesIntegration.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/advanced-config"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
              >
                {t('guidesIntegration.nextSteps.advancedConfig')}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/guides/code-refactoring"
                className="inline-flex items-center justify-center rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50 transition-colors"
              >
                {t('guidesIntegration.nextSteps.codeRefactoring')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}