'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { 
  CogIcon, 
  CommandLineIcon, 
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'

interface GuidesAdvancedContentProps {
  locale: string
}

export default function GuidesAdvancedContent({ locale }: GuidesAdvancedContentProps) {
  const { t } = useTranslation()

  const advancedGuides = [
    {
      title: t('guidesAdvanced.guides.0.title'),
      description: t('guidesAdvanced.guides.0.description'),
      href: `/${locale}/guides/advanced-config`,
      icon: CogIcon,
      difficulty: t('guidesAdvanced.difficulty.advanced'),
      estimatedTime: t('guidesAdvanced.guides.0.estimatedTime')
    },
    {
      title: t('guidesAdvanced.guides.1.title'),
      description: t('guidesAdvanced.guides.1.description'),
      href: `/${locale}/guides/code-refactoring`,
      icon: CodeBracketIcon,
      difficulty: t('guidesAdvanced.difficulty.advanced'),
      estimatedTime: t('guidesAdvanced.guides.1.estimatedTime')
    },
    {
      title: t('guidesAdvanced.guides.2.title'),
      description: t('guidesAdvanced.guides.2.description'),
      href: `/${locale}/guides/code-review`,
      icon: DocumentTextIcon,
      difficulty: t('guidesAdvanced.difficulty.expert'),
      estimatedTime: t('guidesAdvanced.guides.2.estimatedTime')
    },
    {
      title: t('guidesAdvanced.guides.3.title'),
      description: t('guidesAdvanced.guides.3.description'),
      href: `/${locale}/guides/file-operations`,
      icon: WrenchScrewdriverIcon,
      difficulty: t('guidesAdvanced.difficulty.advanced'),
      estimatedTime: t('guidesAdvanced.guides.3.estimatedTime')
    },
    {
      title: t('guidesAdvanced.guides.4.title'),
      description: t('guidesAdvanced.guides.4.description'),
      href: `/${locale}/guides/custom-commands`,
      icon: CommandLineIcon,
      difficulty: t('guidesAdvanced.difficulty.expert'),
      estimatedTime: t('guidesAdvanced.guides.4.estimatedTime')
    },
    {
      title: t('guidesAdvanced.guides.5.title'),
      description: t('guidesAdvanced.guides.5.description'),
      href: `/${locale}/guides/plugin-development`,
      icon: PuzzlePieceIcon,
      difficulty: t('guidesAdvanced.difficulty.expert'),
      estimatedTime: t('guidesAdvanced.guides.5.estimatedTime')
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === t('guidesAdvanced.difficulty.expert')) return 'bg-red-100 text-red-800'
    if (difficulty === t('guidesAdvanced.difficulty.advanced')) return 'bg-orange-100 text-orange-800'
    return 'bg-blue-100 text-blue-800'
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('guidesAdvanced.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('guidesAdvanced.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Guides Grid */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advancedGuides.map((guide, index) => {
              const Icon = guide.icon
              return (
                <div key={index} className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">{guide.estimatedTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <Link
                    href={guide.href}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    {t('guidesAdvanced.learnMore')} →
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('guidesAdvanced.prerequisites.title')}
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t('guidesAdvanced.prerequisites.technical.title')}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {t('guidesAdvanced.prerequisites.technical.items.0')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {t('guidesAdvanced.prerequisites.technical.items.1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {t('guidesAdvanced.prerequisites.technical.items.2')}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t('guidesAdvanced.prerequisites.knowledge.title')}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {t('guidesAdvanced.prerequisites.knowledge.items.0')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {t('guidesAdvanced.prerequisites.knowledge.items.1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {t('guidesAdvanced.prerequisites.knowledge.items.2')}
                    </li>
                  </ul>
                </div>
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
              {t('guidesAdvanced.cta.title')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('guidesAdvanced.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/guides`}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('guidesAdvanced.cta.allGuides')}
              </Link>
              <Link
                href={`/${locale}/guides/examples`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('guidesAdvanced.cta.examples')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
