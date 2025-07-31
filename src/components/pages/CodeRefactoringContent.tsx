'use client'


import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  CodeBracketIcon,
  SparklesIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

interface CodeRefactoringContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CodeRefactoringContent({ locale }: CodeRefactoringContentProps) {
  const { t, isLoading, messages } = useTranslation()

  // If translations are still loading, show loading state
  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Get translated data directly from messages object
  const codeRefactoringData = messages.guidesCodeRefactoring as Record<string, unknown>

  if (!codeRefactoringData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Translation data not found</p>
        </div>
      </div>
    )
  }

  const refactoringTypes = (codeRefactoringData.types as Record<string, unknown>[]) || []
  const workflowSteps = ((codeRefactoringData.workflow as Record<string, unknown>)?.steps as Record<string, unknown>[]) || []
  const examples = (codeRefactoringData.examples as Record<string, unknown>[]) || []
  const bestPractices = (codeRefactoringData.bestPractices as Record<string, unknown>[]) || []

  const typeIcons = {
    structure: CodeBracketIcon,
    performance: SparklesIcon,
    maintainability: CogIcon,
    security: ShieldCheckIcon
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('guidesCodeRefactoring.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-100">
              {t('guidesCodeRefactoring.subtitle')}
            </p>
            <p className="mt-4 text-base text-purple-200">
              {t('guidesCodeRefactoring.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeRefactoring.overview.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('guidesCodeRefactoring.overview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Refactoring Types */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeRefactoring.typesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeRefactoring.typesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {refactoringTypes.map((type, index) => {
              const IconComponent = typeIcons[type.icon as keyof typeof typeIcons] || CodeBracketIcon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{type.title as string}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{type.description as string}</p>
                  <div className="space-y-2">
                    {((type.techniques as Record<string, unknown>[]) || []).map((technique: Record<string, unknown>, techniqueIndex: number) => (
                      <div key={techniqueIndex} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{technique.name as string}</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeRefactoring.workflow.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeRefactoring.workflow.description')}
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-semibold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title as string}</h3>
                  <p className="text-gray-600 mb-4">{step.description as string}</p>
                  {(step.example as string) && (
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-purple-400 text-sm font-mono whitespace-pre-wrap">
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

      {/* Examples */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeRefactoring.examplesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeRefactoring.examplesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{example.title as string}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{example.description as string}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">{t('guidesCodeRefactoring.beforeLabel')}</h4>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <code className="text-red-800 text-xs font-mono whitespace-pre-wrap">
                        {example.before as string}
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">{t('guidesCodeRefactoring.afterLabel')}</h4>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <code className="text-green-800 text-xs font-mono whitespace-pre-wrap">
                        {example.after as string}
                      </code>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeRefactoring.bestPracticesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeRefactoring.bestPracticesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
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
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeRefactoring.nextSteps.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('guidesCodeRefactoring.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/code-review"
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500 transition-colors"
              >
                {t('guidesCodeRefactoring.nextSteps.codeReview')}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/guides/advanced-config"
                className="inline-flex items-center justify-center rounded-lg border border-purple-600 px-4 py-2 text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
              >
                {t('guidesCodeRefactoring.nextSteps.advancedConfig')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}