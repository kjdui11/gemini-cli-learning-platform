'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { 
  CodeBracketIcon, 
  DocumentTextIcon, 
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  SparklesIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

interface GuidesExamplesContentProps {
  locale: string
}

export default function GuidesExamplesContent({ locale }: GuidesExamplesContentProps) {
  const { t } = useTranslation()

  const exampleCategories = [
    {
      title: t('guidesExamples.categories.0.title'),
      description: t('guidesExamples.categories.0.description'),
      icon: CodeBracketIcon,
      color: 'blue',
      examples: [
        {
          title: t('guidesExamples.categories.0.examples.0.title'),
          description: t('guidesExamples.categories.0.examples.0.description'),
          command: t('guidesExamples.categories.0.examples.0.command'),
          difficulty: t('guidesExamples.difficulty.beginner')
        },
        {
          title: t('guidesExamples.categories.0.examples.1.title'),
          description: t('guidesExamples.categories.0.examples.1.description'),
          command: t('guidesExamples.categories.0.examples.1.command'),
          difficulty: t('guidesExamples.difficulty.intermediate')
        },
        {
          title: t('guidesExamples.categories.0.examples.2.title'),
          description: t('guidesExamples.categories.0.examples.2.description'),
          command: t('guidesExamples.categories.0.examples.2.command'),
          difficulty: t('guidesExamples.difficulty.advanced')
        }
      ]
    },
    {
      title: t('guidesExamples.categories.1.title'),
      description: t('guidesExamples.categories.1.description'),
      icon: WrenchScrewdriverIcon,
      color: 'green',
      examples: [
        {
          title: t('guidesExamples.categories.1.examples.0.title'),
          description: t('guidesExamples.categories.1.examples.0.description'),
          command: t('guidesExamples.categories.1.examples.0.command'),
          difficulty: t('guidesExamples.difficulty.beginner')
        },
        {
          title: t('guidesExamples.categories.1.examples.1.title'),
          description: t('guidesExamples.categories.1.examples.1.description'),
          command: t('guidesExamples.categories.1.examples.1.command'),
          difficulty: t('guidesExamples.difficulty.intermediate')
        },
        {
          title: t('guidesExamples.categories.1.examples.2.title'),
          description: t('guidesExamples.categories.1.examples.2.description'),
          command: t('guidesExamples.categories.1.examples.2.command'),
          difficulty: t('guidesExamples.difficulty.advanced')
        }
      ]
    },
    {
      title: t('guidesExamples.categories.2.title'),
      description: t('guidesExamples.categories.2.description'),
      icon: DocumentTextIcon,
      color: 'purple',
      examples: [
        {
          title: t('guidesExamples.categories.2.examples.0.title'),
          description: t('guidesExamples.categories.2.examples.0.description'),
          command: t('guidesExamples.categories.2.examples.0.command'),
          difficulty: t('guidesExamples.difficulty.intermediate')
        },
        {
          title: t('guidesExamples.categories.2.examples.1.title'),
          description: t('guidesExamples.categories.2.examples.1.description'),
          command: t('guidesExamples.categories.2.examples.1.command'),
          difficulty: t('guidesExamples.difficulty.advanced')
        }
      ]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === t('guidesExamples.difficulty.advanced')) return 'bg-red-100 text-red-800'
    if (difficulty === t('guidesExamples.difficulty.intermediate')) return 'bg-orange-100 text-orange-800'
    return 'bg-green-100 text-green-800'
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('guidesExamples.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('guidesExamples.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Examples Categories */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {exampleCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div key={categoryIndex} className="relative">
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${getColorClasses(category.color)} mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Examples Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(example.difficulty)}`}>
                            {example.difficulty}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {example.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {example.description}
                        </p>
                        
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <code className="text-sm text-gray-800 break-all">
                            {example.command}
                          </code>
                        </div>
                        
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                          {t('guidesExamples.tryExample')} →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('guidesExamples.tips.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <SparklesIcon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('guidesExamples.tips.items.0.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('guidesExamples.tips.items.0.description')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CommandLineIcon className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('guidesExamples.tips.items.1.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('guidesExamples.tips.items.1.description')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <GlobeAltIcon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('guidesExamples.tips.items.2.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('guidesExamples.tips.items.2.description')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <DocumentTextIcon className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('guidesExamples.tips.items.3.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('guidesExamples.tips.items.3.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('guidesExamples.cta.title')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('guidesExamples.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/guides`}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('guidesExamples.cta.allGuides')}
              </Link>
              <Link
                href={`/${locale}/guides/advanced`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('guidesExamples.cta.advancedGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
