'use client'


import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  EyeIcon,
  ShieldCheckIcon,
  BugAntIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface CodeReviewContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CodeReviewContent({ locale }: CodeReviewContentProps) {
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
  const codeReviewData = messages.guidesCodeReview as Record<string, unknown>

  if (!codeReviewData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Translation data not found</p>
        </div>
      </div>
    )
  }

  // Safe array extraction with type checking
  const reviewTypesData = codeReviewData.types
  const reviewTypes = (reviewTypesData && Array.isArray(reviewTypesData) ? reviewTypesData : []) as Record<string, unknown>[]

  const workflowData = codeReviewData.workflow as Record<string, unknown>
  const workflowStepsData = workflowData?.steps
  const workflowSteps = (workflowStepsData && Array.isArray(workflowStepsData) ? workflowStepsData : []) as Record<string, unknown>[]

  const checkpointsData = codeReviewData.checkpoints
  const checkpoints = (checkpointsData && Array.isArray(checkpointsData) ? checkpointsData : []) as Record<string, unknown>[]

  const bestPracticesData = codeReviewData.bestPractices
  const bestPractices = (bestPracticesData && Array.isArray(bestPracticesData) ? bestPracticesData : []) as Record<string, unknown>[]

  // Get AI features data
  const aiFeaturesData = codeReviewData.aiFeatures as Record<string, unknown>
  const automatedFeaturesData = aiFeaturesData?.automated as Record<string, unknown>
  const automatedFeatures = (automatedFeaturesData?.features && Array.isArray(automatedFeaturesData.features) ? automatedFeaturesData.features : []) as Record<string, unknown>[]

  const intelligentFeaturesData = aiFeaturesData?.intelligent as Record<string, unknown>
  const intelligentFeatures = (intelligentFeaturesData?.features && Array.isArray(intelligentFeaturesData.features) ? intelligentFeaturesData.features : []) as Record<string, unknown>[]

  const typeIcons = {
    security: ShieldCheckIcon,
    bugs: BugAntIcon,
    performance: SparklesIcon,
    style: EyeIcon
  }

  const severityColors = {
    high: 'text-red-600 bg-red-50 border-red-200',
    medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    low: 'text-blue-600 bg-blue-50 border-blue-200'
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('guidesCodeReview.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              {t('guidesCodeReview.subtitle')}
            </p>
            <p className="mt-4 text-base text-indigo-200">
              {t('guidesCodeReview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeReview.overview.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('guidesCodeReview.overview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Review Types */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeReview.typesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeReview.typesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewTypes.map((type, index) => {
              const IconComponent = typeIcons[type.icon as keyof typeof typeIcons] || EyeIcon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{type.title as string}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{type.description as string}</p>
                  <div className="space-y-2">
                    {((type.checks as Record<string, unknown>[]) || []).map((check: Record<string, unknown>, checkIndex: number) => (
                      <div key={checkIndex} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{check.name as string}</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeReview.workflow.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeReview.workflow.description')}
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title as string}</h3>
                  <p className="text-gray-600 mb-4">{step.description as string}</p>
                  {(step.example as string) && (
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-indigo-400 text-sm font-mono whitespace-pre-wrap">
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

      {/* Review Checkpoints */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeReview.checkpointsTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeReview.checkpointsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {checkpoints.map((checkpoint, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${severityColors[checkpoint.severity as keyof typeof severityColors] || severityColors.low}`}>
                    <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                    {checkpoint.severity as string}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{checkpoint.title as string}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{checkpoint.description as string}</p>
                <div className="space-y-2">
                  {((checkpoint.items as Record<string, unknown>[]) || []).map((item: Record<string, unknown>, itemIndex: number) => (
                    <div key={itemIndex} className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{item.text as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Review Features */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeReview.aiFeatures.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeReview.aiFeatures.description')}
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('guidesCodeReview.aiFeatures.automated.title')}</h3>
                <ul className="space-y-3">
                  {automatedFeatures.map((feature: Record<string, unknown>, index: number) => (
                    <li key={index} className="flex items-start">
                      <SparklesIcon className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature.name as string}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('guidesCodeReview.aiFeatures.intelligent.title')}</h3>
                <ul className="space-y-3">
                  {intelligentFeatures.map((feature: Record<string, unknown>, index: number) => (
                    <li key={index} className="flex items-start">
                      <EyeIcon className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature.name as string}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeReview.bestPracticesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('guidesCodeReview.bestPracticesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1" />
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
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesCodeReview.nextSteps.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('guidesCodeReview.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/integration"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                {t('guidesCodeReview.nextSteps.integration')}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/guides/advanced-config"
                className="inline-flex items-center justify-center rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {t('guidesCodeReview.nextSteps.advancedConfig')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}