'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import {
  DocumentTextIcon,
  FolderIcon,
  PencilIcon,
  TrashIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

interface FileOperationsContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FileOperationsContent({ locale }: FileOperationsContentProps) {
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
  const fileOperationsData = messages.guidesFileOperations as Record<string, unknown>

  if (!fileOperationsData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Translation data not found</p>
        </div>
      </div>
    )
  }

  const operations = (fileOperationsData.operations as Record<string, unknown>[]) || []
  const examples = (fileOperationsData.examples as Record<string, unknown>[]) || []
  const bestPractices = (fileOperationsData.bestPractices as Record<string, unknown>[]) || []

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <DocumentTextIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('guidesFileOperations.hero.title')}
            </h1>
            <p className="mt-4 text-lg text-green-100">
              {t('guidesFileOperations.hero.subtitle')}
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesFileOperations.hero.intermediate')}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {t('guidesFileOperations.hero.readingTime')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesFileOperations.overview.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesFileOperations.overview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* File Operations */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesFileOperations.operationsTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesFileOperations.operationsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operations.map((operation: Record<string, unknown>, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${operation.color} text-white`}>
                    {operation.icon === 'DocumentTextIcon' && <DocumentTextIcon className="h-5 w-5" />}
                    {operation.icon === 'FolderIcon' && <FolderIcon className="h-5 w-5" />}
                    {operation.icon === 'PencilIcon' && <PencilIcon className="h-5 w-5" />}
                    {operation.icon === 'TrashIcon' && <TrashIcon className="h-5 w-5" />}
                    {operation.icon === 'ArrowPathIcon' && <ArrowPathIcon className="h-5 w-5" />}
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">{operation.title as string}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{operation.description as string}</p>
                <div className="bg-gray-900 rounded-lg p-3 mb-3">
                  <code className="text-green-400 text-sm font-mono">{operation.command as string}</code>
                </div>
                <div className="space-y-1">
                  {((operation.features as string[]) || []).map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="text-sm text-gray-600 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesFileOperations.examplesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesFileOperations.examplesDescription')}
            </p>
          </div>

          <div className="space-y-8">
            {examples.map((example: Record<string, unknown>, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{example.title as string}</h3>
                <p className="text-gray-600 mb-4">{example.description as string}</p>
                <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre">{example.code as string}</pre>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">{t('guidesFileOperations.explanation')}:</h4>
                  <p className="text-blue-800 text-sm">{example.explanation as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('guidesFileOperations.bestPracticesTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesFileOperations.bestPracticesDescription')}
            </p>
          </div>

          <div className="space-y-4">
            {bestPractices.map((practice: Record<string, unknown>, index: number) => (
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
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('guidesFileOperations.nextSteps.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('guidesFileOperations.nextSteps.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/integration"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
              >
                {t('guidesFileOperations.nextSteps.integration')}
              </Link>
              <Link
                href="/guides/code-refactoring"
                className="inline-flex items-center justify-center rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50 transition-colors"
              >
                {t('guidesFileOperations.nextSteps.codeRefactoring')}
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('guidesFileOperations.nextSteps.backToGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}