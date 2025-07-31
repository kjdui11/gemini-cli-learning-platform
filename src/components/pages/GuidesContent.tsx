'use client'

import Link from 'next/link'
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'

interface GuidesContentProps {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function GuidesContent({ locale: _ }: GuidesContentProps) {
  const { t, currentLocale } = useTranslation()
  const locale = currentLocale

  const tutorialCategories = [
    {
      id: 'beginner',
      title: t('guidesMain.categories.beginner.title'),
      description: t('guidesMain.categories.beginner.description'),
      icon: AcademicCapIcon,
      color: 'from-green-500 to-emerald-600',
      tutorials: [
        {
          title: t('guidesMain.categories.beginner.tutorials.0.title'),
          description: t('guidesMain.categories.beginner.tutorials.0.description'),
          href: `/${locale}/guides/getting-started`,
          duration: t('guidesMain.categories.beginner.tutorials.0.duration'),
          level: t('guidesMain.categories.beginner.tutorials.0.level')
        },
        {
          title: t('guidesMain.categories.beginner.tutorials.1.title'),
          description: t('guidesMain.categories.beginner.tutorials.1.description'),
          href: `/${locale}/guides/basic-commands`,
          duration: t('guidesMain.categories.beginner.tutorials.1.duration'),
          level: t('guidesMain.categories.beginner.tutorials.1.level')
        },
        {
          title: t('guidesMain.categories.beginner.tutorials.2.title'),
          description: t('guidesMain.categories.beginner.tutorials.2.description'),
          href: `/${locale}/guides/file-operations`,
          duration: t('guidesMain.categories.beginner.tutorials.2.duration'),
          level: t('guidesMain.categories.beginner.tutorials.2.level')
        }
      ]
    },
    {
      id: 'intermediate',
      title: t('guidesMain.categories.intermediate.title'),
      description: t('guidesMain.categories.intermediate.description'),
      icon: RocketLaunchIcon,
      color: 'from-blue-500 to-indigo-600',
      tutorials: [
        {
          title: t('guidesMain.categories.intermediate.tutorials.0.title'),
          description: t('guidesMain.categories.intermediate.tutorials.0.description'),
          href: `/${locale}/guides/advanced-config`,
          duration: t('guidesMain.categories.intermediate.tutorials.0.duration'),
          level: t('guidesMain.categories.intermediate.tutorials.0.level')
        },
        {
          title: t('guidesMain.categories.intermediate.tutorials.1.title'),
          description: t('guidesMain.categories.intermediate.tutorials.1.description'),
          href: `/${locale}/guides/integration`,
          duration: t('guidesMain.categories.intermediate.tutorials.1.duration'),
          level: t('guidesMain.categories.intermediate.tutorials.1.level')
        },
        {
          title: t('guidesMain.categories.intermediate.tutorials.2.title'),
          description: t('guidesMain.categories.intermediate.tutorials.2.description'),
          href: `/${locale}/guides/mcp-protocol`,
          duration: t('guidesMain.categories.intermediate.tutorials.2.duration'),
          level: t('guidesMain.categories.intermediate.tutorials.2.level')
        }
      ]
    },
    {
      id: 'examples',
      title: t('guidesMain.categories.examples.title'),
      description: t('guidesMain.categories.examples.description'),
      icon: CodeBracketIcon,
      color: 'from-purple-500 to-pink-600',
      tutorials: [
        {
          title: t('guidesMain.categories.examples.tutorials.0.title'),
          description: t('guidesMain.categories.examples.tutorials.0.description'),
          href: `/${locale}/guides/code-refactoring`,
          duration: t('guidesMain.categories.examples.tutorials.0.duration'),
          level: t('guidesMain.categories.examples.tutorials.0.level')
        },
        {
          title: t('guidesMain.categories.examples.tutorials.1.title'),
          description: t('guidesMain.categories.examples.tutorials.1.description'),
          href: `/${locale}/guides/documentation`,
          duration: t('guidesMain.categories.examples.tutorials.1.duration'),
          level: t('guidesMain.categories.examples.tutorials.1.level')
        },
        {
          title: t('guidesMain.categories.examples.tutorials.2.title'),
          description: t('guidesMain.categories.examples.tutorials.2.description'),
          href: `/${locale}/guides/code-review`,
          duration: t('guidesMain.categories.examples.tutorials.2.duration'),
          level: t('guidesMain.categories.examples.tutorials.2.level')
        }
      ]
    }
  ]

  const getLevelColor = (level: string) => {
    if (level.includes('入门') || level.includes('Beginner')) return 'bg-green-100 text-green-800'
    if (level.includes('进阶') || level.includes('Intermediate')) return 'bg-blue-100 text-blue-800'
    if (level.includes('实战') || level.includes('Practical')) return 'bg-purple-100 text-purple-800'
    return 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('guidesMain.hero.title')}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {t('guidesMain.hero.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Categories */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('guidesMain.categories.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {t('guidesMain.categories.description')}
            </p>
          </div>

          <div className="space-y-16">
            {tutorialCategories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.id} className="relative">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Tutorials Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <Link
                        key={tutorialIndex}
                        href={tutorial.href}
                        className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                            {tutorial.level}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {tutorial.duration}
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {tutorial.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {tutorial.description}
                        </p>
                        
                        <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                          {t('guidesMain.startLearning')} →
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t('guidesMain.quickAccess.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('guidesMain.quickAccess.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href={`/${locale}/guides/advanced`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 mb-4">
                <RocketLaunchIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {t('guidesMain.quickAccess.advanced')}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t('guidesMain.quickAccess.advancedDesc')}
              </p>
            </Link>

            <Link
              href={`/${locale}/guides/examples`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-600 mb-4">
                <CodeBracketIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {t('guidesMain.quickAccess.examples')}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t('guidesMain.quickAccess.examplesDesc')}
              </p>
            </Link>

            <Link
              href={`/${locale}/commands`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-600 mb-4">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                {t('guidesMain.quickAccess.commands')}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t('guidesMain.quickAccess.commandsDesc')}
              </p>
            </Link>

            <Link
              href={`/${locale}/faq`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600 mb-4">
                <StarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {t('guidesMain.quickAccess.faq')}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {t('guidesMain.quickAccess.faqDesc')}
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('guidesMain.cta.title')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('guidesMain.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/installation`}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('guidesMain.cta.getStarted')}
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('guidesMain.cta.viewDocs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
