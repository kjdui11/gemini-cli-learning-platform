'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import {
  DocumentTextIcon,
  CheckCircleIcon,
  BookOpenIcon,
  CodeBracketIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'

interface DocumentationContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DocumentationContent({ locale }: DocumentationContentProps) {
  const { t, isLoading, messages } = useTranslation()

  // If translations are still loading, show loading state
  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Get translated data directly from messages object
  const documentationData = messages.guidesDocumentation as Record<string, unknown>

  if (!documentationData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Translation data not found</p>
        </div>
      </div>
    )
  }

  const documentationTypes = (documentationData.types as Record<string, unknown>[]) || []
  const workflowSteps = ((documentationData.workflow as Record<string, unknown>)?.steps as Record<string, unknown>[]) || []
  const practicalExamples = (documentationData.examples as Record<string, unknown>[]) || []
  const bestPractices = (documentationData.bestPractices as Record<string, unknown>[]) || []

  const typeIcons = {
    'api-docs': DocumentTextIcon,
    'readme': BookOpenIcon,
    'user-manual': AcademicCapIcon,
    'technical-spec': CodeBracketIcon
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <DocumentTextIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('guidesDocumentation.hero.title')}
            </h1>
            <p className="mt-4 text-lg text-purple-100">
              {t('guidesDocumentation.hero.subtitle')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-purple-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesDocumentation.hero.intermediate')}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesDocumentation.hero.readingTime')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesDocumentation.overview.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesDocumentation.overview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Documentation Types */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesDocumentation.typesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesDocumentation.typesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentationTypes.map((type, index) => {
              const IconComponent = typeIcons[type.id as keyof typeof typeIcons] || DocumentTextIcon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${type.color} text-white`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{type.title as string}</h3>
                      <p className="text-gray-600 text-sm">{type.description as string}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">{t('guidesDocumentation.promptExample')}:</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                        {(type.example as any)?.prompt || ''}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('guidesDocumentation.features')}:</h4>
                    <ul className="space-y-1">
                      {((type.example as any)?.features || []).map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesDocumentation.workflow.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesDocumentation.workflow.description')}
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold mr-3">
                    {step.step as string}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title as string}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description as string}</p>
                {(step.commands as string[]) && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    {(step.commands as string[]).map((command: string, cmdIndex: number) => (
                      <div key={cmdIndex} className="mb-2 last:mb-0">
                        <code className="bg-gray-900 text-green-400 px-3 py-1 rounded text-sm font-mono">
                          {command}
                        </code>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practical Examples */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesDocumentation.practicalExamples.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesDocumentation.practicalExamples.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.title as string}</h3>
                <p className="text-gray-600 text-sm mb-4">{example.description as string}</p>
                <div className="space-y-3">
                  {((example.steps as Record<string, unknown>[]) || []).map((step: Record<string, unknown>, stepIndex: number) => (
                    <div key={stepIndex} className="border-l-2 border-purple-200 pl-3">
                      <div className="bg-gray-900 rounded p-2 mb-1">
                        <code className="text-green-400 text-xs">{step.command as string}</code>
                      </div>
                      <p className="text-xs text-gray-600">{step.description as string}</p>
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
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesDocumentation.bestPracticesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesDocumentation.bestPracticesDescription')}
            </p>
          </div>

          <div className="space-y-4">
            {bestPractices.map((practice, index) => (
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
                  }`}>{practice.title as string}</h4>
                </div>
                <p className={`mt-1 ${
                  practice.type === 'success' ? 'text-green-800' :
                  practice.type === 'warning' ? 'text-yellow-800' :
                  'text-blue-800'
                }`}>{practice.content as string}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesDocumentation.nextSteps.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('guidesDocumentation.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/code-refactoring"
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500 transition-colors"
              >
                {t('guidesDocumentation.nextSteps.codeRefactoring')}
              </Link>
              <Link
                href="/guides/code-review"
                className="inline-flex items-center justify-center rounded-lg border border-purple-600 px-4 py-2 text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
              >
                {t('guidesDocumentation.nextSteps.codeReview')}
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('guidesDocumentation.nextSteps.backToGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}