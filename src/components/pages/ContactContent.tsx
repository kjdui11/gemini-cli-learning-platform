'use client'

import Link from 'next/link'
import { 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon, 
  ExclamationTriangleIcon,
  LightBulbIcon,
  DocumentTextIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'

interface ContactContentProps {
  locale: string
}

const colorClasses = {
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'text-red-600',
    button: 'bg-red-600 hover:bg-red-700'
  },
  yellow: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: 'text-yellow-600',
    button: 'bg-yellow-600 hover:bg-yellow-700'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-600',
    button: 'bg-green-600 hover:bg-green-700'
  }
}

export default function ContactContent({ locale }: ContactContentProps) {
  const { t } = useTranslation()

  const contactOptions = [
    {
      title: t('contact.options.reportIssues.title'),
      description: t('contact.options.reportIssues.description'),
      icon: ExclamationTriangleIcon,
      href: 'https://github.com/google-gemini/gemini-cli/issues',
      buttonText: t('contact.options.reportIssues.buttonText'),
      color: 'red' as const
    },
    {
      title: t('contact.options.suggestImprovements.title'),
      description: t('contact.options.suggestImprovements.description'),
      icon: LightBulbIcon,
      href: 'https://github.com/google-gemini/gemini-cli/discussions',
      buttonText: t('contact.options.suggestImprovements.buttonText'),
      color: 'yellow' as const
    },
    {
      title: t('contact.options.joinDiscussions.title'),
      description: t('contact.options.joinDiscussions.description'),
      icon: ChatBubbleLeftRightIcon,
      href: 'https://github.com/google-gemini/gemini-cli/discussions',
      buttonText: t('contact.options.joinDiscussions.buttonText'),
      color: 'blue' as const
    },
    {
      title: t('contact.options.contributeContent.title'),
      description: t('contact.options.contributeContent.description'),
      icon: DocumentTextIcon,
      href: `/${locale}/docs/contributing`,
      buttonText: t('contact.options.contributeContent.buttonText'),
      color: 'green' as const
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('contact.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('contact.howCanWeHelp.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('contact.howCanWeHelp.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactOptions.map((option) => {
              const colors = colorClasses[option.color]
              return (
                <div 
                  key={option.title} 
                  className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8`}
                >
                  <div className="flex items-center mb-4">
                    <option.icon className={`h-8 w-8 ${colors.icon} mr-3`} />
                    <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <Link
                    href={option.href}
                    className={`inline-flex items-center px-6 py-3 ${colors.button} text-white font-semibold rounded-lg transition-colors`}
                  >
                    {option.buttonText}
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('contact.faq.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('contact.faq.questions.affiliation.question')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.faq.questions.affiliation.answer')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('contact.faq.questions.contribute.question')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.faq.questions.contribute.answer')}
                  <Link href={`/${locale}/docs/contributing`} className="text-blue-600 hover:text-blue-800 ml-1">
                    {t('contact.faq.questions.contribute.linkText')}
                  </Link>
                  {t('contact.faq.questions.contribute.answerEnd')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('contact.faq.questions.reportError.question')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.faq.questions.reportError.answer')}
                  <Link 
                    href="https://github.com/google-gemini/gemini-cli/issues" 
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    {t('contact.faq.questions.reportError.linkText')}
                  </Link>
                  {t('contact.faq.questions.reportError.answerEnd')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('contact.faq.questions.requestContent.question')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.faq.questions.requestContent.answer')}
                  <Link 
                    href="https://github.com/google-gemini/gemini-cli/discussions" 
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    {t('contact.faq.questions.requestContent.linkText')}
                  </Link>
                  {t('contact.faq.questions.requestContent.answerEnd')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('contact.faq.questions.getHelp.question')}
                </h3>
                <p className="text-gray-600">
                  {t('contact.faq.questions.getHelp.answer')}
                  <Link href={`/${locale}/installation`} className="text-blue-600 hover:text-blue-800 ml-1">
                    {t('contact.faq.questions.getHelp.installationLink')}
                  </Link>
                  {t('contact.faq.questions.getHelp.and')}
                  <Link href={`/${locale}/guides`} className="text-blue-600 hover:text-blue-800 ml-1">
                    {t('contact.faq.questions.getHelp.guidesLink')}
                  </Link>
                  {t('contact.faq.questions.getHelp.middle')}
                  <Link href={`/${locale}/faq`} className="text-blue-600 hover:text-blue-800 ml-1">
                    {t('contact.faq.questions.getHelp.faqLink')}
                  </Link>
                  {t('contact.faq.questions.getHelp.answerEnd')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <EnvelopeIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.responseTime.title')}</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-600 mb-6">
                  {t('contact.responseTime.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{t('contact.responseTime.bugReports.time')}</div>
                    <div className="text-sm text-gray-600">{t('contact.responseTime.bugReports.label')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{t('contact.responseTime.featureRequests.time')}</div>
                    <div className="text-sm text-gray-600">{t('contact.responseTime.featureRequests.label')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{t('contact.responseTime.contentContributions.time')}</div>
                    <div className="text-sm text-gray-600">{t('contact.responseTime.contentContributions.label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('contact.guidelines.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('contact.guidelines.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <HeartIcon className="h-5 w-5 text-red-500 mr-2" />
                    {t('contact.guidelines.respectful.title')}
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('contact.guidelines.respectful.points.0')}</li>
                    <li>• {t('contact.guidelines.respectful.points.1')}</li>
                    <li>• {t('contact.guidelines.respectful.points.2')}</li>
                    <li>• {t('contact.guidelines.respectful.points.3')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <LightBulbIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    {t('contact.guidelines.helpful.title')}
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('contact.guidelines.helpful.points.0')}</li>
                    <li>• {t('contact.guidelines.helpful.points.1')}</li>
                    <li>• {t('contact.guidelines.helpful.points.2')}</li>
                    <li>• {t('contact.guidelines.helpful.points.3')}</li>
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
              {t('contact.cta.title')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('contact.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/google-gemini/gemini-cli/discussions"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('contact.cta.joinDiscussions')}
              </Link>
              <Link
                href={`/${locale}/docs/contributing`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('contact.cta.startContributing')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
