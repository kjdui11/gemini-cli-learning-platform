'use client';

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { 
  HeartIcon, 
  AcademicCapIcon, 
  GlobeAltIcon,
  LightBulbIcon,
  UsersIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'

interface AboutContentProps {
  locale: string
}

export default function AboutContent({ locale }: AboutContentProps) {
  const { t } = useTranslation()

  const values = [
    {
      name: t('about.values.education.name'),
      description: t('about.values.education.description'),
      icon: AcademicCapIcon,
    },
    {
      name: t('about.values.communityDriven.name'),
      description: t('about.values.communityDriven.description'),
      icon: UsersIcon,
    },
    {
      name: t('about.values.openSource.name'),
      description: t('about.values.openSource.description'),
      icon: CodeBracketIcon,
    },
    {
      name: t('about.values.innovation.name'),
      description: t('about.values.innovation.description'),
      icon: LightBulbIcon,
    },
    {
      name: t('about.values.accessibility.name'),
      description: t('about.values.accessibility.description'),
      icon: GlobeAltIcon,
    },
    {
      name: t('about.values.quality.name'),
      description: t('about.values.quality.description'),
      icon: HeartIcon,
    },
  ]

  const stats = [
    { name: t('about.stats.languages'), value: '9+' },
    { name: t('about.stats.guides'), value: '25+' },
    { name: t('about.stats.examples'), value: '100+' },
    { name: t('about.stats.members'), value: '10K+' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('about.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('about.mission.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('about.mission.description')}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-10">
              <div>
                <strong className="font-semibold text-gray-900">{t('about.mission.excellence')}.</strong> {t('about.mission.excellenceDesc')}
              </div>
              <div>
                <strong className="font-semibold text-gray-900">{t('about.mission.community')}.</strong> {t('about.mission.communityDesc')}
              </div>
              <div>
                <strong className="font-semibold text-gray-900">{t('about.mission.practical')}.</strong> {t('about.mission.practicalDesc')}
              </div>
              <div>
                <strong className="font-semibold text-gray-900">{t('about.mission.global')}.</strong> {t('about.mission.globalDesc')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('about.values.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center">
                    <value.icon className="h-8 w-8 text-blue-600" />
                    <h3 className="ml-3 text-lg font-semibold text-gray-900">{value.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('about.stats.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {t('about.stats.subtitle')}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="text-center">
                  <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                  <div className="mt-2 text-lg text-gray-600">{stat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 sm:py-20 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              {t('about.story.title')}
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>{t('about.story.paragraph1')}</p>
              <p>{t('about.story.paragraph2')}</p>
              <p>{t('about.story.paragraph3')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              {t('about.disclaimer.title')}
            </h3>
            <p className="text-yellow-700">
              {t('about.disclaimer.content')}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('about.getInvolved.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {t('about.getInvolved.subtitle')}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about.getInvolved.contribute.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('about.getInvolved.contribute.description')}
                </p>
                <Link
                  href={`/${locale === 'en' ? '' : locale + '/'}docs/contributing`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {t('about.getInvolved.contribute.link')}
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about.getInvolved.discussions.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('about.getInvolved.discussions.description')}
                </p>
                <Link
                  href="https://github.com/google-gemini/gemini-cli/discussions"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {t('about.getInvolved.discussions.link')}
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about.getInvolved.issues.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('about.getInvolved.issues.description')}
                </p>
                <Link
                  href={`/${locale === 'en' ? '' : locale + '/'}contact`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {t('about.getInvolved.issues.link')}
                </Link>
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
              {t('about.cta.title')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale === 'en' ? '' : locale + '/'}installation`}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('about.cta.getStarted')}
              </Link>
              <Link
                href={`/${locale === 'en' ? '' : locale + '/'}guides`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('about.cta.browseGuides')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
