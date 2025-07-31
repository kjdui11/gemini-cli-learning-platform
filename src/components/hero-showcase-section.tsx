'use client';

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import GeminiLogo from './gemini-logo'
import { useTranslation } from '@/hooks/useTranslation'

export default function HeroShowcaseSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <GeminiLogo className="h-20 w-20" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('heroShowcase.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('heroShowcase.description')}
          </p>
        </div>
        
        {/* 主要展示区域 */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
            {/* 模拟终端窗口 */}
            <div className="flex items-center gap-2 bg-gray-700 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-sm text-gray-300">Gemini CLI</div>
            </div>
            
            {/* 终端内容 */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 text-white">gemini &quot;帮我写一个 Python 函数来计算斐波那契数列&quot;</span>
                </div>
                <div className="text-gray-300">
                  <div className="mb-2">🤖 正在为您生成代码...</div>
                  <div className="rounded bg-gray-700 p-4">
                    <div className="text-blue-300"># 斐波那契数列函数</div>
                    <div className="text-white">def fibonacci(n):</div>
                    <div className="text-white ml-4">if n &lt;= 1:</div>
                    <div className="text-white ml-8">return n</div>
                    <div className="text-white ml-4">return fibonacci(n-1) + fibonacci(n-2)</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 text-gray-400">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 特性卡片 */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">60</div>
              <div className="text-sm text-gray-300">每分钟请求</div>
              <div className="mt-2 text-xs text-gray-400">业界最高免费额度</div>
            </div>
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">1K</div>
              <div className="text-sm text-gray-300">每日请求</div>
              <div className="mt-2 text-xs text-gray-400">满足日常开发需求</div>
            </div>
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">开源</div>
              <div className="text-sm text-gray-300">Apache 2.0</div>
              <div className="mt-2 text-xs text-gray-400">完全透明可信</div>
            </div>
          </div>
        </div>

        {/* CTA 按钮 */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/tutorials"
            className="group inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
          >
            立即开始学习
            <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
