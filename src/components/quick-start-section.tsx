'use client'

import { useState, useEffect } from 'react'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'

const installSteps = [
  {
    step: 1,
    title: '安装 Node.js',
    description: '确保您的系统已安装 Node.js 20 或更高版本',
    command: 'node --version',
  },
  {
    step: 2,
    title: '运行 Gemini CLI',
    description: '使用 npx 直接运行，无需全局安装',
    command: 'npx https://github.com/google-gemini/gemini-cli',
  },
  {
    step: 3,
    title: '登录认证',
    description: '使用个人 Google 账户登录，获得免费使用额度',
    command: '# 按照提示完成 Google 账户认证',
  },
]

const usageExamples = [
  {
    title: '代码生成',
    command: '> 写一个 React 组件来显示用户列表',
  },
  {
    title: '代码解释',
    command: '> 解释这个函数的作用和工作原理',
  },
  {
    title: '问题调试',
    command: '> 帮我找出这个错误的原因并提供解决方案',
  },
  {
    title: '项目分析',
    command: '> 分析这个项目的架构和主要组件',
  },
]

export default function QuickStartSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = async (text: string, index: number) => {
    if (!isClient) return

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
      } else {
        // 降级方案：使用传统的复制方法
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">快速开始</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            三步开始使用 Gemini CLI
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            只需几分钟即可开始使用 Gemini CLI，无需复杂配置，立即体验 AI 辅助开发的强大功能。
          </p>
        </div>

        {/* Installation Steps */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {installSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-sm font-semibold text-white">{step.step}</span>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                <div className="mt-4 relative">
                  <div className="rounded-md bg-gray-900 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <code className="text-sm text-green-400 font-mono">{step.command}</code>
                      <button
                        onClick={() => copyToClipboard(step.command, index)}
                        className="ml-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedIndex === index ? (
                          <CheckIcon className="h-4 w-4" />
                        ) : (
                          <ClipboardIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">
            使用示例
          </h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {usageExamples.map((example, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                <h4 className="text-base font-semibold text-gray-900 mb-3">{example.title}</h4>
                <div className="rounded-md bg-gray-900 px-4 py-3">
                  <code className="text-sm text-green-400 font-mono">{example.command}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="rounded-2xl bg-indigo-600 px-6 py-16 sm:px-16">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              准备开始了吗？
            </h3>
            <p className="mt-4 text-lg leading-8 text-indigo-200">
              立即开始您的 Gemini CLI 学习之旅，探索 AI 辅助开发的无限可能。
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="/tutorials"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                查看详细教程
              </a>
              <a
                href="https://github.com/google-gemini/gemini-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white hover:text-indigo-200 transition-colors"
              >
                访问 GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
