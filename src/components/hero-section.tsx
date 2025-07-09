import Link from 'next/link'
import { ArrowRightIcon, PlayIcon, BookOpenIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Google 官方开源 AI 命令行工具{' '}
            <Link href="https://github.com/google-gemini/gemini-cli" className="font-semibold text-indigo-600" target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0" aria-hidden="true" />
              查看源码 <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            掌握 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gemini CLI</span>
            <br />
            开启 AI 开发新时代
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            专为新手开发者打造的 Gemini CLI 学习平台。从基础安装到高级应用，
            通过详细教程、实战案例和视频指南，快速掌握这个强大的 AI 命令行工具，
            让 AI 成为您开发工作流程中的得力助手。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/tutorials"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              开始学习
            </Link>
            <Link href="/videos" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
              观看视频教程 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/tutorials"
              className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="inline-flex rounded-lg bg-indigo-50 p-3 ring-4 ring-white">
                  <BookOpenIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0" aria-hidden="true" />
                  学习教程
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  从基础安装到高级应用，循序渐进的学习路径
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Link>

            <Link
              href="/faq"
              className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="inline-flex rounded-lg bg-green-50 p-3 ring-4 ring-white">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0" aria-hidden="true" />
                  常见问题
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  快速解决安装、配置和使用过程中的常见问题
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Link>

            <Link
              href="/videos"
              className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="inline-flex rounded-lg bg-purple-50 p-3 ring-4 ring-white">
                  <PlayIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0" aria-hidden="true" />
                  视频教程
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  直观的视频演示，快速上手 Gemini CLI 核心功能
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Link>
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
