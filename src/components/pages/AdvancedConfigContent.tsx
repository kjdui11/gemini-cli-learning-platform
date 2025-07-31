'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  CogIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  KeyIcon,
  ServerIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

interface AdvancedConfigContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AdvancedConfigContent({ locale }: AdvancedConfigContentProps) {
  const { t, isLoading, messages } = useTranslation()

  // If translations are still loading, show loading state
  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Get translated data directly from messages object
  const advancedConfigData = messages.guidesAdvancedConfig as Record<string, unknown>

  if (!advancedConfigData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Translation data not found</p>
        </div>
      </div>
    )
  }

  const configSections = (advancedConfigData.configSections as Record<string, unknown>[]) || []
  const environmentVariables = (advancedConfigData.environmentVariables as Record<string, unknown>[]) || []
  const customizationOptions = (advancedConfigData.customizationOptions as Record<string, unknown>[]) || []
  const bestPractices = (advancedConfigData.bestPractices as Record<string, unknown>[]) || []

  const sectionIcons = {
    'toml-config': DocumentTextIcon,
    'env-vars': KeyIcon,
    'model-config': CogIcon,
    'ui-config': AdjustmentsHorizontalIcon,
    'tools-config': ServerIcon,
    'security-config': ShieldCheckIcon
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CogIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('guidesAdvancedConfig.hero.title')}
            </h1>
            <p className="mt-4 text-lg text-indigo-100">
              {t('guidesAdvancedConfig.hero.subtitle')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-indigo-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesAdvancedConfig.hero.advanced')}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesAdvancedConfig.hero.readingTime')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesAdvancedConfig.overview.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesAdvancedConfig.overview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Configuration Sections */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesAdvancedConfig.configSectionsTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesAdvancedConfig.configSectionsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {configSections.map((section: any, index: number) => {
              const IconComponent = sectionIcons[section.id as keyof typeof sectionIcons] || DocumentTextIcon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${section.color} text-white`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                  </div>

                  {section.content && (
                    <div className="space-y-4">
                      {section.content.location && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">{t('guidesAdvancedConfig.location')}:</h4>
                          <p className="text-sm text-gray-600">{section.content.location}</p>
                        </div>
                      )}

                      {section.content.structure && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">{t('guidesAdvancedConfig.structure')}:</h4>
                          <div className="bg-gray-900 rounded-lg p-3">
                            <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                              {section.content.structure}
                            </pre>
                          </div>
                        </div>
                      )}

                      {section.content.explanation && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">{t('guidesAdvancedConfig.explanation')}:</h4>
                          <p className="text-sm text-gray-600">{section.content.explanation}</p>
                        </div>
                      )}

                      {section.content.options && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">{t('guidesAdvancedConfig.options')}:</h4>
                          <ul className="space-y-1">
                            {section.content.options.map((option: string, optIndex: number) => (
                              <li key={optIndex} className="text-sm text-gray-600 flex items-start">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesAdvancedConfig.environmentVariablesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesAdvancedConfig.environmentVariablesDescription')}
            </p>
          </div>

          <div className="space-y-6">
            {environmentVariables.map((envVar: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <KeyIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{envVar.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{envVar.description}</p>
                <div className="bg-gray-900 rounded-lg p-3 mb-3">
                  <code className="text-green-400 text-sm font-mono">{envVar.example}</code>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>{t('guidesAdvancedConfig.defaultValue')}:</strong> {envVar.default || t('guidesAdvancedConfig.none')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customization Options */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesAdvancedConfig.customizationTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesAdvancedConfig.customizationDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizationOptions.map((option: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="space-y-2">
                  {(option.features || []).map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="text-sm text-gray-600 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
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
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesAdvancedConfig.bestPracticesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesAdvancedConfig.bestPracticesDescription')}
            </p>
          </div>

          <div className="space-y-4">
            {bestPractices.map((practice: any, index: number) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${
                practice.type === 'success' ? 'bg-green-50 border-green-500' :
                practice.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-center">
                  <CheckCircleIcon className={`h-5 w-5 mr-2 ${
                    practice.type === 'success' ? 'text-green-600' :
                    practice.type === 'warning' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`} />
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
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesAdvancedConfig.nextSteps.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('guidesAdvancedConfig.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/file-operations"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                {t('guidesAdvancedConfig.nextSteps.fileOperations')}
              </Link>
              <Link
                href="/guides/integration"
                className="inline-flex items-center justify-center rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {t('guidesAdvancedConfig.nextSteps.integration')}
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('guidesAdvancedConfig.nextSteps.backToGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}