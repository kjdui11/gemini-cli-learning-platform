import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale } from '@/i18n/config'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'hi' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'es' },
    { locale: 'ru' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  // Load translations for the specific locale
  let messages: any = {}
  try {
    messages = await import(`@/messages/${locale}.json`)
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
  }

  const migrationGuide = messages.migrationGuide || {}
  const metadata = migrationGuide.metadata || {}

  return {
    title: metadata.title || 'Migration Guide - Gemini CLI Documentation',
    description: metadata.description || 'Complete migration guide for upgrading from older versions to the latest Gemini CLI.',
  }
}

export default async function MigrationGuidePage({ params }: Props) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  // Load translations for the specific locale
  let messages: any = {}
  try {
    messages = await import(`@/messages/${locale}.json`)
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    notFound()
  }

  const t = messages.migrationGuide || {}
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t.title || 'Migration Guide'}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.subtitle || 'Upgrade from older versions to the latest Gemini CLI'}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <div className="flex items-start">
                <InformationCircleIcon className="h-8 w-8 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.overview?.title || 'Migration Overview'}</h2>
                  <p className="text-gray-700 mb-4">{t.overview?.description || 'This guide helps you migrate from older versions of Gemini CLI to the latest version.'}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-500">{t.overview?.currentVersionLabel || 'Current Version'}</div>
                      <div className="text-lg font-bold text-blue-600">{t.overview?.currentVersion || '2.0.0'}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-500">{t.overview?.supportedMigrationsLabel || 'Supported Migrations'}</div>
                      <div className="text-sm text-gray-700">{t.overview?.supportedVersions || 'This guide covers migration from versions 1.x to 2.0.0'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Version Compatibility Matrix */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{t.versionMatrix?.title || 'Version Compatibility Matrix'}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.versionMatrix?.subtitle || 'Check which migration path applies to your current version'}</p>

            <div className="space-y-4">
              {(t.versionMatrix?.versions || []).map((version: any, index: number) => {
                const colorClasses = {
                  red: 'border-red-200 bg-red-50',
                  yellow: 'border-yellow-200 bg-yellow-50',
                  green: 'border-green-200 bg-green-50'
                }
                const badgeClasses = {
                  red: 'bg-red-100 text-red-800',
                  yellow: 'bg-yellow-100 text-yellow-800',
                  green: 'bg-green-100 text-green-800'
                }
                
                // Determine color based on difficulty
                const color = version.difficulty === 'Major' || version.difficulty === '重大' || version.difficulty === 'प्रमुख' || version.difficulty === 'Majeur' || version.difficulty === 'Groß' || version.difficulty === '重大' || version.difficulty === '주요' || version.difficulty === 'Mayor' || version.difficulty === 'Крупные' ? 'red' :
                             version.difficulty === 'Moderate' || version.difficulty === '中等' || version.difficulty === 'मध्यम' || version.difficulty === 'Modéré' || version.difficulty === 'Moderat' || version.difficulty === '中程度' || version.difficulty === '보통' || version.difficulty === 'Moderado' || version.difficulty === 'Умеренные' ? 'yellow' : 'green'
                
                return (
                  <div key={index} className={`border-2 rounded-xl p-6 ${colorClasses[color]}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-gray-900">{version.from}</span>
                        <ArrowRightIcon className="h-5 w-5 text-gray-400 mx-3" />
                        <span className="text-lg font-semibold text-gray-900">{version.to}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeClasses[color]}`}>
                        {version.difficulty}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">{version.estimatedTime}</span>
                      </div>
                      <div className="flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">{t.versionMatrix?.breakingChangesLabel || 'Breaking Changes'}: {version.breakingChanges}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Breaking Changes */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{t.breakingChanges?.title || 'Breaking Changes in v2.0.0'}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.breakingChanges?.subtitle || 'Important changes that may affect your existing setup'}</p>

            <div className="space-y-8">
              {(t.breakingChanges?.changes || []).map((change: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {change.category}
                      </span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{change.title}</h3>
                      <p className="text-gray-600 mb-4">{change.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-500">{t.breakingChanges?.impactLabel || 'Impact Level'}</span>
                          <div className={`inline-block ml-2 px-2 py-1 rounded text-xs font-medium ${
                            change.impact === 'High' || change.impact === '高' || change.impact === 'उच्च' || change.impact === 'Élevé' || change.impact === 'Hoch' || change.impact === '高' || change.impact === '높음' || change.impact === 'Alto' || change.impact === 'Высокое' ? 'bg-red-100 text-red-800' :
                            change.impact === 'Medium' || change.impact === '中' || change.impact === 'मध्यम' || change.impact === 'Moyen' || change.impact === 'Mittel' || change.impact === '中' || change.impact === '중간' || change.impact === 'Medio' || change.impact === 'Среднее' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {change.impact}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">{t.breakingChanges?.migrationLabel || 'Migration'}</span>
                          <div className="text-sm text-gray-700 mt-1">{change.migration}</div>
                        </div>
                      </div>

                      {change.beforeCode && change.afterCode && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">{change.beforeLabel}</h4>
                              <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
                                <code>{change.beforeCode}</code>
                              </pre>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">{change.afterLabel}</h4>
                              <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
                                <code>{change.afterCode}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}

                      {change.commandChanges && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">{change.commandChangesLabel}</h4>
                          <div className="space-y-2">
                            {change.commandChanges.map((cmd: any, cmdIndex: number) => (
                              <div key={cmdIndex} className="flex items-center text-sm">
                                <code className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2">{cmd.old}</code>
                                <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                                <code className="bg-green-100 text-green-800 px-2 py-1 rounded">{cmd.new}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {change.note && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <InformationCircleIcon className="h-4 w-4 inline mr-1" />
                            {change.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Migration Steps */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{t.migrationSteps?.title || 'Step-by-Step Migration'}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.migrationSteps?.subtitle || 'Follow these steps to migrate to Gemini CLI v2.0.0'}</p>

            <div className="space-y-8">
              {(t.migrationSteps?.steps || []).map((step: any, index: number) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {step.commands && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">{t.migrationSteps?.commandsLabel || 'Commands:'}</h4>
                          <div className="space-y-2">
                            {step.commands.map((command: string, cmdIndex: number) => (
                              <div key={cmdIndex} className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm overflow-x-auto">
                                <code>{command}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.verification && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">{t.migrationSteps?.verificationLabel || 'Verification:'}</h4>
                          <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                            <code className="text-green-800 text-sm">{step.verification}</code>
                          </div>
                        </div>
                      )}

                      {step.note && (
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <InformationCircleIcon className="h-4 w-4 inline mr-1" />
                            {step.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{t.troubleshooting?.title || 'Migration Troubleshooting'}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.troubleshooting?.subtitle || 'Common issues and their solutions'}</p>

            <div className="space-y-6">
              {(t.troubleshooting?.issues || []).map((issue: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    {issue.problem}
                  </h3>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{t.troubleshooting?.symptomsLabel || 'Symptoms:'}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {issue.symptoms.map((symptom: string, symIndex: number) => (
                        <li key={symIndex}>{symptom}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{t.troubleshooting?.solutionsLabel || 'Solutions:'}</h4>
                    <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                      {issue.solutions.map((solution: string, solIndex: number) => (
                        <li key={solIndex}>{solution}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rollback Instructions */}
      <div className="py-16 bg-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white rounded-xl border-2 border-red-200 p-8">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.rollback?.title || 'Rollback Instructions'}</h2>
                  <p className="text-lg text-gray-600 mb-6">{t.rollback?.subtitle || 'How to revert to the previous version if needed'}</p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 text-sm font-medium">
                      ⚠️ {t.rollback?.warning || 'Only use rollback if you encounter critical issues that prevent normal operation.'}
                    </p>
                  </div>

                  <ol className="space-y-3">
                    {(t.rollback?.steps || []).map((step: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-800 rounded-full text-sm font-medium flex items-center justify-center mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{step}</code>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post-Migration Steps */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{t.postMigration?.title || 'Post-Migration Steps'}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.postMigration?.subtitle || 'Recommended actions after successful migration'}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(t.postMigration?.recommendations || []).map((rec: any, index: number) => {
                const priorityColors = {
                  High: 'bg-red-100 text-red-800',
                  Medium: 'bg-yellow-100 text-yellow-800',
                  Low: 'bg-green-100 text-green-800',
                  '高': 'bg-red-100 text-red-800',
                  '中': 'bg-yellow-100 text-yellow-800',
                  '低': 'bg-green-100 text-green-800',
                  'उच्च': 'bg-red-100 text-red-800',
                  'मध्यम': 'bg-yellow-100 text-yellow-800',
                  'कम': 'bg-green-100 text-green-800',
                  'Élevé': 'bg-red-100 text-red-800',
                  'Moyen': 'bg-yellow-100 text-yellow-800',
                  'Faible': 'bg-green-100 text-green-800',
                  'Hoch': 'bg-red-100 text-red-800',
                  'Mittel': 'bg-yellow-100 text-yellow-800',
                  'Niedrig': 'bg-green-100 text-green-800',
                  '높음': 'bg-red-100 text-red-800',
                  '중간': 'bg-yellow-100 text-yellow-800',
                  '낮음': 'bg-green-100 text-green-800',
                  'Alto': 'bg-red-100 text-red-800',
                  'Medio': 'bg-yellow-100 text-yellow-800',
                  'Bajo': 'bg-green-100 text-green-800',
                  'Высокий': 'bg-red-100 text-red-800',
                  'Средний': 'bg-yellow-100 text-yellow-800',
                  'Низкий': 'bg-green-100 text-green-800'
                }

                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{rec.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[rec.priority as keyof typeof priorityColors] || 'bg-gray-100 text-gray-800'}`}>
                        {rec.priority}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    {rec.link && (
                      <Link
                        href={rec.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {t.postMigration?.learnMoreLabel || 'Learn more'}
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              {t.footer?.title || 'Need Help with Migration?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t.footer?.description || 'If you encounter any issues during migration, our community is here to help.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                {t.footer?.getSupportButton || 'Get Support'}
              </Link>
              <Link
                href="/docs/troubleshooting"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t.footer?.troubleshootingButton || 'View Troubleshooting Guide'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
