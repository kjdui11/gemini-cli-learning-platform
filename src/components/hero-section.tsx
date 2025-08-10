'use client';

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-50">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* 主要内容区域 - 使用左右布局 */}
      <div className="mx-auto max-w-7xl py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧：文本内容 */}
          <div className="space-y-6">
            {/* 问题陈述徽章 */}
            <div className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
              {t('hero.problemStatement')}
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('hero.title.part1')} <span className="text-blue-600">{t('hero.title.part2')}</span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl font-semibold text-green-600">
              {t('hero.solutionStatement')}
            </p>

            {/* 描述 */}
            <p className="text-lg leading-8 text-gray-600">
              {t('hero.description')}
            </p>

            {/* 使用场景 */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                {t('hero.useCases.title')}
              </p>
              <div className="space-y-2">
                {['hero.useCases.cases.0', 'hero.useCases.cases.1', 'hero.useCases.cases.2', 'hero.useCases.cases.3'].map((key, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/installation"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                {t('hero.getStarted')} →
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                {t('hero.learnMore')}
              </Link>
            </div>

            {/* GitHub徽章 */}
            <div className="pt-4">
              <Link
                href="https://github.com/google-gemini/gemini-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                ⭐ {t('hero.badge.text')}
                <span className="ml-1 text-blue-600">{t('hero.badge.link')}</span>
              </Link>
            </div>

          </div>

          {/* 右侧：视频演示 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-lg w-full">
              <div className="relative overflow-hidden rounded-lg bg-gray-900 shadow-lg">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/GenMedia_demo_keyword.mp4" type="video/mp4" />
                  {t('hero.video.fallback')}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
