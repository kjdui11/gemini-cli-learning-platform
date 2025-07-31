'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function StatsSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('stats.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {t('stats.subtitle')}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">{t('stats.requestsPerMinute.label')}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t('stats.requestsPerMinute.value')}
                </span>
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">{t('stats.requestsPerDay.label')}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t('stats.requestsPerDay.value')}
                </span>
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">{t('stats.license.label')}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t('stats.license.value')}
                </span>
              </dd>
            </div>
          </dl>
          <div className="mt-16 flex justify-center">
            <div className="rounded-full bg-white/10 px-6 py-3 text-center backdrop-blur-sm">
              <p className="text-lg font-semibold text-white">
                完全免费使用
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
