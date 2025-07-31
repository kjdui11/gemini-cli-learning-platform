'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface TermsContentProps {
  locale: string
}

export default function TermsContent({ locale }: TermsContentProps) {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('terms.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('terms.subtitle')}
            </p>
            <p className="mt-4 text-sm text-gray-500">
              {t('terms.lastUpdated')}: {new Date().toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.acceptance.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.acceptance.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('terms.acceptance.content2')}
              </p>
            </section>

            {/* Description of Service */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.service.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.service.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('terms.service.features.0')}</li>
                <li>{t('terms.service.features.1')}</li>
                <li>{t('terms.service.features.2')}</li>
                <li>{t('terms.service.features.3')}</li>
                <li>{t('terms.service.features.4')}</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                <strong>{t('terms.service.important')}:</strong> {t('terms.service.disclaimer')}
              </p>
            </section>

            {/* User Responsibilities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.responsibilities.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.responsibilities.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('terms.responsibilities.items.0')}</li>
                <li>{t('terms.responsibilities.items.1')}</li>
                <li>{t('terms.responsibilities.items.2')}</li>
                <li>{t('terms.responsibilities.items.3')}</li>
                <li>{t('terms.responsibilities.items.4')}</li>
                <li>{t('terms.responsibilities.items.5')}</li>
                <li>{t('terms.responsibilities.items.6')}</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.intellectualProperty.title')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('terms.intellectualProperty.ourContent.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.intellectualProperty.ourContent.description')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('terms.intellectualProperty.thirdParty.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.intellectualProperty.thirdParty.description')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('terms.intellectualProperty.userContributions.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('terms.intellectualProperty.userContributions.description')}
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.disclaimers.title')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('terms.disclaimers.educational.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.disclaimers.educational.description')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('terms.disclaimers.affiliation.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.disclaimers.affiliation.description')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('terms.disclaimers.risk.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('terms.disclaimers.risk.description')}
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.liability.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.liability.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('terms.liability.items.0')}</li>
                <li>{t('terms.liability.items.1')}</li>
                <li>{t('terms.liability.items.2')}</li>
                <li>{t('terms.liability.items.3')}</li>
                <li>{t('terms.liability.items.4')}</li>
              </ul>
            </section>

            {/* Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.privacy.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.privacy.description')}
              </p>
              <Link 
                href={`/${locale}/privacy`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {t('terms.privacy.linkText')} →
              </Link>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.termination.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('terms.termination.description')}
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.changes.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('terms.changes.description')}
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.governingLaw.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('terms.governingLaw.description')}
              </p>
            </section>

            {/* External Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.externalLinks.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('terms.externalLinks.description')}
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.contact.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.contact.description')}
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="text-gray-600">
                  <li className="mb-2">
                    <strong>{t('terms.contact.email')}:</strong> 
                    <Link href={`/${locale}/contact`} className="text-blue-600 hover:text-blue-800 ml-1">
                      {t('terms.contact.contactForm')}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <strong>{t('terms.contact.github')}:</strong> 
                    <Link 
                      href="https://github.com/google-gemini/gemini-cli/issues" 
                      className="text-blue-600 hover:text-blue-800 ml-1"
                    >
                      {t('terms.contact.reportIssues')}
                    </Link>
                  </li>
                  <li>
                    <strong>{t('terms.contact.website')}:</strong> 
                    <Link href={`/${locale}`} className="text-blue-600 hover:text-blue-800 ml-1">
                      geminicli.cloud
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.acknowledgment.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('terms.acknowledgment.description')}
              </p>
            </section>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('terms.cta.title')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('terms.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('terms.cta.contactUs')}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('terms.cta.privacyPolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
