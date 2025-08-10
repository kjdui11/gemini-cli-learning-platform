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
          <div>


            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('hero.title.part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('hero.title.part2')}</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('hero.description')}
            </p>

            <div className="mt-8">
              <div className="inline-flex items-center rounded-full px-4 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all">
                <span className="mr-2">🚀</span>
{t('hero.badge.text')}{' '}
                <Link
                  href="https://github.com/google-gemini/gemini-cli"
                  className="font-semibold text-indigo-600 ml-2 hover:text-indigo-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('hero.badge.link')} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

          </div>

          {/* 右侧：视频演示 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-2xl max-w-lg w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
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
