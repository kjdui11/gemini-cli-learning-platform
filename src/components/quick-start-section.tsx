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
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800 mb-4">
            <span className="mr-2">⚡</span>
            快速开始
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            三步开始使用 Gemini CLI
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            只需几分钟即可开始使用 Gemini CLI，无需复杂配置，立即体验 AI 辅助开发的强大功能。
          </p>
        </div>

        {/* Installation Steps */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {installSteps.map((step, index) => (
              <div key={step.step} className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                <div className="rounded-lg bg-gray-900 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <code className="text-sm text-green-400 font-mono break-all">{step.command}</code>
                    <button
                      onClick={() => copyToClipboard(step.command, index)}
                      className="ml-3 text-gray-400 hover:text-white transition-colors flex-shrink-0"
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
            ))}
          </div>
        </div>




      </div>
    </div>
  )
}
