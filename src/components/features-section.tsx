'use client';

import {
  GlobeAltIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      name: t('features.codeGeneration.name'),
      description: t('features.codeGeneration.description'),
      icon: CodeBracketIcon,
    },
    {
      name: t('features.fileOperations.name'),
      description: t('features.fileOperations.description'),
      icon: WrenchScrewdriverIcon,
    },
    {
      name: t('features.googleSearch.name'),
      description: t('features.googleSearch.description'),
      icon: GlobeAltIcon,
    },
    {
      name: t('features.extensible.name'),
      description: t('features.extensible.description'),
      icon: PuzzlePieceIcon,
    },
    {
      name: t('features.automation.name'),
      description: t('features.automation.description'),
      icon: SparklesIcon,
    },
    {
      name: t('features.openSource.name'),
      description: t('features.openSource.description'),
      icon: ShieldCheckIcon,
    },
  ];
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 sm:py-28">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('features.title')}
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* 功能卡片网格 */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50"
              >
                {/* 卡片背景渐变 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* 图标 */}
                <div className="relative mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* 内容 */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* 装饰性元素 */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('features.cta.title')}
            </h3>
            <p className="text-blue-100 mb-6">
              {t('features.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/google-gemini/gemini-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors duration-200"
              >
                {t('features.cta.getStarted')}
              </a>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                {t('features.cta.viewTutorials')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
