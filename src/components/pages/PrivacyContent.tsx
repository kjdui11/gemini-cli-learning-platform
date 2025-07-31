'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

interface PrivacyContentProps {
  locale: string
}

export default function PrivacyContent({ locale }: PrivacyContentProps) {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('privacy.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('privacy.subtitle')}
            </p>
            <p className="mt-4 text-sm text-gray-500">
              {t('privacy.lastUpdated')}: {new Date().toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', { 
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
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.introduction.title')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('privacy.introduction.content')}
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.informationWeCollect.title')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.informationWeCollect.analytics.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.informationWeCollect.analytics.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('privacy.informationWeCollect.analytics.items.0')}</li>
                <li>{t('privacy.informationWeCollect.analytics.items.1')}</li>
                <li>{t('privacy.informationWeCollect.analytics.items.2')}</li>
                <li>{t('privacy.informationWeCollect.analytics.items.3')}</li>
                <li>{t('privacy.informationWeCollect.analytics.items.4')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.informationWeCollect.language.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.informationWeCollect.language.description')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.informationWeCollect.technical.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.informationWeCollect.technical.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('privacy.informationWeCollect.technical.items.0')}</li>
                <li>{t('privacy.informationWeCollect.technical.items.1')}</li>
                <li>{t('privacy.informationWeCollect.technical.items.2')}</li>
                <li>{t('privacy.informationWeCollect.technical.items.3')}</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.howWeUse.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.howWeUse.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>{t('privacy.howWeUse.items.0.title')}:</strong> {t('privacy.howWeUse.items.0.description')}</li>
                <li><strong>{t('privacy.howWeUse.items.1.title')}:</strong> {t('privacy.howWeUse.items.1.description')}</li>
                <li><strong>{t('privacy.howWeUse.items.2.title')}:</strong> {t('privacy.howWeUse.items.2.description')}</li>
                <li><strong>{t('privacy.howWeUse.items.3.title')}:</strong> {t('privacy.howWeUse.items.3.description')}</li>
                <li><strong>{t('privacy.howWeUse.items.4.title')}:</strong> {t('privacy.howWeUse.items.4.description')}</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.informationSharing.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.informationSharing.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>{t('privacy.informationSharing.items.0.title')}:</strong> {t('privacy.informationSharing.items.0.description')}</li>
                <li><strong>{t('privacy.informationSharing.items.1.title')}:</strong> {t('privacy.informationSharing.items.1.description')}</li>
                <li><strong>{t('privacy.informationSharing.items.2.title')}:</strong> {t('privacy.informationSharing.items.2.description')}</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.cookies.title')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.cookies.analytics.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.cookies.analytics.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('privacy.cookies.analytics.items.0')}</li>
                <li>{t('privacy.cookies.analytics.items.1')}</li>
                <li>{t('privacy.cookies.analytics.items.2')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.cookies.localStorage.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.cookies.localStorage.description')}
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.yourRights.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.yourRights.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>{t('privacy.yourRights.items.0.title')}:</strong> {t('privacy.yourRights.items.0.description')}</li>
                <li><strong>{t('privacy.yourRights.items.1.title')}:</strong> {t('privacy.yourRights.items.1.description')}</li>
                <li><strong>{t('privacy.yourRights.items.2.title')}:</strong> {t('privacy.yourRights.items.2.description')}</li>
                <li><strong>{t('privacy.yourRights.items.3.title')}:</strong> {t('privacy.yourRights.items.3.description')}</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.dataSecurity.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.dataSecurity.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('privacy.dataSecurity.items.0')}</li>
                <li>{t('privacy.dataSecurity.items.1')}</li>
                <li>{t('privacy.dataSecurity.items.2')}</li>
                <li>{t('privacy.dataSecurity.items.3')}</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.thirdParty.title')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.thirdParty.googleAnalytics.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.thirdParty.googleAnalytics.description')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.thirdParty.googleAnalytics.moreInfo')}
                <Link href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 ml-1">
                  {t('privacy.thirdParty.googleAnalytics.linkText')}
                </Link>
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.thirdParty.externalLinks.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.thirdParty.externalLinks.description')}
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.childrens.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.childrens.description')}
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.changes.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('privacy.changes.description')}
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.contact.description')}
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="text-gray-600">
                  <li className="mb-2">
                    <strong>{t('privacy.contact.email')}:</strong> 
                    <Link href={`/${locale}/contact`} className="text-blue-600 hover:text-blue-800 ml-1">
                      {t('privacy.contact.contactForm')}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <strong>{t('privacy.contact.github')}:</strong> 
                    <Link 
                      href="https://github.com/google-gemini/gemini-cli/issues" 
                      className="text-blue-600 hover:text-blue-800 ml-1"
                    >
                      {t('privacy.contact.reportIssues')}
                    </Link>
                  </li>
                  <li>
                    <strong>{t('privacy.contact.website')}:</strong> 
                    <Link href={`/${locale}`} className="text-blue-600 hover:text-blue-800 ml-1">
                      geminicli.cloud
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.cta.title')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('privacy.cta.description')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('privacy.cta.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
