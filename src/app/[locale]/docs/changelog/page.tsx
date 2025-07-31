import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  SparklesIcon,
  BugAntIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface LocaleChangelogPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleChangelogPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    zh: '更新日志 - Gemini CLI 文档',
    en: 'Changelog - Gemini CLI Documentation',
    fr: 'Journal des modifications - Documentation Gemini CLI',
    de: 'Änderungsprotokoll - Gemini CLI Dokumentation',
    ja: '変更履歴 - Gemini CLI ドキュメント',
    ko: '변경 로그 - Gemini CLI 문서',
    es: 'Registro de cambios - Documentación Gemini CLI',
    hi: 'परिवर्तन लॉग - Gemini CLI दस्तावेज़',
    ru: 'Журнал изменений - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Gemini CLI 的版本更新和变更记录，包括新功能、错误修复、改进和重大变更。',
    en: 'Version updates and change records for Gemini CLI including new features, bug fixes, improvements, and breaking changes.',
    fr: 'Mises à jour de version et enregistrements de modifications pour Gemini CLI incluant les nouvelles fonctionnalités, corrections de bugs, améliorations et changements majeurs.',
    de: 'Versionsupdates und Änderungsaufzeichnungen für Gemini CLI einschließlich neuer Funktionen, Fehlerbehebungen, Verbesserungen und wichtiger Änderungen.',
    ja: '新機能、バグ修正、改善、重大な変更を含む Gemini CLI のバージョン更新と変更記録。',
    ko: '새로운 기능, 버그 수정, 개선 사항 및 주요 변경 사항을 포함한 Gemini CLI의 버전 업데이트 및 변경 기록.',
    es: 'Actualizaciones de versión y registros de cambios para Gemini CLI incluyendo nuevas características, correcciones de errores, mejoras y cambios importantes.',
    hi: 'नई सुविधाओं, बग फिक्स, सुधार और महत्वपूर्ण परिवर्तनों सहित Gemini CLI के लिए संस्करण अपडेट और परिवर्तन रिकॉर्ड।',
    ru: 'Обновления версий и записи изменений для Gemini CLI, включая новые функции, исправления ошибок, улучшения и критические изменения.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: 'Gemini CLI changelog, version history, updates, releases, bug fixes, new features',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const getContent = (locale: string) => {
  const content = {
    zh: {
      title: '更新日志',
      subtitle: '跟踪 Gemini CLI 的所有更新、新功能、错误修复和改进。保持对最新变更和增强功能的了解。',
      typesTitle: '变更类型',
      helpTitle: '需要升级帮助？',
      helpSubtitle: '查看我们的迁移指南和文档',
      migrationGuide: '迁移指南',
      documentation: '文档',
      allReleases: '所有版本',
      changeTypes: {
        feature: { label: '新功能', color: 'text-green-600 bg-green-100' },
        fix: { label: '错误修复', color: 'text-red-600 bg-red-100' },
        improvement: { label: '改进', color: 'text-blue-600 bg-blue-100' },
        security: { label: '安全更新', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: '重大变更', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: '最新版本',
          changes: [
            {
              type: 'feature',
              title: 'MCP 协议支持',
              description: '添加了对模型上下文协议 (MCP) 的完整支持，允许自定义工具集成和服务器通信。',
              details: [
                '实现 MCP 客户端和服务器功能',
                '添加工具注册和发现',
                '支持自定义 MCP 服务器',
                '增强的上下文感知工具执行'
              ]
            },
            {
              type: 'feature',
              title: '增强的文件操作',
              description: '改进了文件读写功能，具有更好的错误处理和对二进制文件的支持。',
              details: [
                '支持二进制文件操作',
                '改进文件操作的错误消息',
                '添加文件类型检测',
                '增强文件访问安全性'
              ]
            },
            {
              type: 'improvement',
              title: '性能优化',
              description: '大幅提升大文件处理和批量操作的性能。',
              details: [
                '优化大文件的内存使用',
                '改进实时响应的流式传输',
                '更好的缓存机制',
                '减少启动时间'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: '稳定版本',
          changes: [
            {
              type: 'breaking',
              title: '新的 CLI 架构',
              description: '完全重写 CLI 架构，提供更好的模块化和可扩展性。',
              details: [
                '模块化插件系统',
                '改进的命令结构',
                '更好的错误处理和报告',
                '增强的配置管理'
              ]
            },
            {
              type: 'feature',
              title: '交互式 REPL 模式',
              description: '添加了与 Gemini 持续对话的交互式读取-求值-打印循环。',
              details: [
                '持久的对话上下文',
                '命令历史和自动完成',
                '多行输入支持',
                '可自定义的主题和提示'
              ]
            },
            {
              type: 'security',
              title: '增强安全性',
              description: '改进了 API 密钥管理和工具执行的安全措施。',
              details: [
                '安全的 API 密钥存储',
                '沙盒化工具执行',
                '基于权限的文件访问',
                '敏感操作的审计日志'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: '历史版本',
          changes: [
            {
              type: 'feature',
              title: '批处理',
              description: '添加了批量模式处理多个文件的支持。',
              details: [
                '批量文件分析',
                '并行处理能力',
                '长时间操作的进度报告'
              ]
            },
            {
              type: 'improvement',
              title: '文档更新',
              description: '全面的文档更新和示例。',
              details: [
                '更新的 API 文档',
                '更多代码示例',
                '视频教程和指南'
              ]
            }
          ]
        }
      ]
    },
    en: {
      title: 'Changelog',
      subtitle: 'Track all updates, new features, bug fixes, and improvements in Gemini CLI. Stay informed about the latest changes and enhancements.',
      typesTitle: 'Change Types',
      helpTitle: 'Need upgrade help?',
      helpSubtitle: 'Check out our migration guide and documentation',
      migrationGuide: 'Migration Guide',
      documentation: 'Documentation',
      allReleases: 'All Releases',
      changeTypes: {
        feature: { label: 'New Feature', color: 'text-green-600 bg-green-100' },
        fix: { label: 'Bug Fix', color: 'text-red-600 bg-red-100' },
        improvement: { label: 'Improvement', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'Security Update', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: 'Breaking Change', color: 'text-orange-600 bg-orange-100' }
      },
      releases: []
    }
  }

  return content[locale as keyof typeof content] || content.en
}

export default async function LocaleChangelogPage({ params }: LocaleChangelogPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs/changelog')
  }

  // For English, redirect to main page to avoid duplication
  if (locale === 'en') {
    redirect('/docs/changelog')
  }

  const content = getContent(locale)
  const changeTypes = {
    feature: { icon: SparklesIcon, color: content.changeTypes.feature.color, label: content.changeTypes.feature.label },
    fix: { icon: BugAntIcon, color: content.changeTypes.fix.color, label: content.changeTypes.fix.label },
    improvement: { icon: RocketLaunchIcon, color: content.changeTypes.improvement.color, label: content.changeTypes.improvement.label },
    security: { icon: ShieldCheckIcon, color: content.changeTypes.security.color, label: content.changeTypes.security.label },
    breaking: { icon: ExclamationTriangleIcon, color: content.changeTypes.breaking.color, label: content.changeTypes.breaking.label }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {content.typesTitle}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(changeTypes).map(([key, type]) => (
              <div key={key} className="flex items-center space-x-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${type.color}`}>
                  <type.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-700">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Releases */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {content.releases.map((release, releaseIndex) => (
              <div key={release.version} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                {/* Release Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      v{release.version}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {release.status === 'latest' && (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {release.statusText}
                        </span>
                      )}
                      {release.status === 'stable' && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {release.statusText}
                        </span>
                      )}
                      {release.status === 'legacy' && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {release.statusText}
                        </span>
                      )}
                    </div>
                  </div>
                  <time className="text-sm text-gray-500">{release.date}</time>
                </div>

                {/* Changes */}
                <div className="space-y-6">
                  {release.changes.map((change, changeIndex) => {
                    const changeType = changeTypes[change.type as keyof typeof changeTypes]
                    return (
                      <div key={changeIndex} className="border-l-4 border-gray-200 pl-6">
                        <div className="flex items-start space-x-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${changeType.color} flex-shrink-0 mt-1`}>
                            <changeType.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {change.title}
                            </h3>
                            <p className="text-gray-700 mb-3">{change.description}</p>

                            {change.details && (
                              <ul className="space-y-1">
                                {change.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2 mt-2 flex-shrink-0"></span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Download Links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      发布于 {release.date}
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        href={`https://github.com/google-gemini/gemini-cli/releases/tag/v${release.version}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                      >
                        在 GitHub 查看 →
                      </Link>
                      <Link
                        href={`https://www.npmjs.com/package/@google/generative-ai-cli/v/${release.version}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                      >
                        在 NPM 查看 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Migration Guide */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.helpTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.helpSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/migration-guide`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {content.migrationGuide}
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {content.documentation}
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {content.allReleases}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for all locales including default for static export
  return locales.map((locale) => ({
    locale,
  }))
}
