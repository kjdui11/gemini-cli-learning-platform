'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function FeaturesStatsSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* 60分钟免费开发体验 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                60
              </div>
              <div className="mt-2 text-white text-lg font-medium">
                {t('featuresStats.freeExperience.unit')}
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <div className="font-semibold text-white mb-2">{t('featuresStats.freeExperience.title')}</div>
              {t('featuresStats.freeExperience.description')}
            </div>
          </div>

          {/* 1M Token 上下文 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                1M
              </div>
              <div className="mt-2 text-white text-lg font-medium">
                {t('featuresStats.tokenContext.unit')}
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <div className="font-semibold text-white mb-2">{t('featuresStats.tokenContext.title')}</div>
              {t('featuresStats.tokenContext.description')}
            </div>
          </div>

          {/* 100%开源代码 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="mt-2 text-white text-lg font-medium">
                {t('featuresStats.openSource.unit')}
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <div className="font-semibold text-white mb-2">{t('featuresStats.openSource.title')}</div>
              {t('featuresStats.openSource.description')}
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">
              Available free-of-charge
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
