import { Metadata } from 'next'
import Link from 'next/link'
import FAQClient from './faq-client'

export const metadata: Metadata = {
  title: 'Gemini CLI 常见问题解答 | 安装、使用和配置问题解决',
  description: '收集 Gemini CLI 使用过程中的常见问题和解决方案，包括安装问题、使用疑问、配置设置等，帮助用户快速解决问题。',
  keywords: 'Gemini CLI 常见问题, FAQ, 安装问题, 使用问题, 配置问题, 故障排除',
  openGraph: {
    title: 'Gemini CLI 常见问题解答',
    description: '快速找到 Gemini CLI 使用问题的解决方案',
    type: 'article',
  },
}

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              常见问题解答
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              收集了 Gemini CLI 使用过程中的常见问题和解决方案，
              帮助您快速找到答案并解决问题。
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              快速导航
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              没找到答案？试试这些资源
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link
              href="/installation"
              className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-blue-900">安装指南</h3>
              <p className="text-sm text-blue-700 mt-2">详细的安装步骤</p>
            </Link>
            <Link
              href="/guides"
              className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-green-900">使用教程</h3>
              <p className="text-sm text-green-700 mt-2">从入门到进阶</p>
            </Link>
            <Link
              href="/commands"
              className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-purple-900">命令参考</h3>
              <p className="text-sm text-purple-700 mt-2">完整命令列表</p>
            </Link>
            <Link
              href="https://github.com/google-gemini/gemini-cli/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">报告问题</h3>
              <p className="text-sm text-gray-700 mt-2">GitHub Issues</p>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FAQClient />
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              还有其他问题？
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              如果您没有找到答案，欢迎通过以下方式联系我们
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/google-gemini/gemini-cli/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                社区讨论
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                提交问题
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

