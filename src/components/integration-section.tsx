import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function IntegrationSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">完整生态</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            与 Gemini Code Assist 无缝集成
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gemini CLI 与 Google 的 AI 编程助手 Gemini Code Assist 共享相同技术，
            为您提供从终端到 IDE 的一致 AI 开发体验。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* 终端体验 */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-lg bg-gray-900 p-3">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h6v2h-6V7zm-4 4h2v2H7v-2zm4 0h6v2h-6v-2zm-4 4h2v2H7v-2zm4 0h6v2h-6v-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">终端中的 AI</h3>
                  <p className="text-sm text-gray-600">Gemini CLI</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  直接在命令行中使用 AI
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  脚本自动化和任务集成
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  轻量级快速响应
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                  跨平台兼容性
                </li>
              </ul>
            </div>

            {/* IDE 体验 */}
            <div className="rounded-2xl bg-blue-50 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-lg bg-blue-600 p-3">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">IDE 中的 AI</h3>
                  <p className="text-sm text-gray-600">Gemini Code Assist</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  VS Code 智能代码补全
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  多步骤协作推理
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  自动错误恢复
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  智能解决方案推荐
                </li>
              </ul>
            </div>
          </div>
        </div>



        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="https://codeassist.google/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            了解 Gemini Code Assist
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
