'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqData = [
  {
    category: '安装与设置',
    questions: [
      {
        q: '如何安装 Gemini CLI？',
        a: '确保已安装 Node.js 20+，然后使用 npx @google/generative-ai-cli 直接运行，或使用 npm install -g @google/generative-ai-cli 全局安装。'
      },
      {
        q: '安装时遇到权限错误怎么办？',
        a: 'Windows 用户以管理员身份运行，macOS/Linux 用户使用 sudo 或配置 npm 全局目录到用户目录。推荐使用 npx 避免权限问题。'
      },
      {
        q: '如何配置 Google 账户认证？',
        a: '运行 npx @google/generative-ai-cli auth，在浏览器中登录 Google 账户并授权访问，然后使用 auth status 验证认证状态。'
      }
    ]
  },
  {
    category: '使用问题',
    questions: [
      {
        q: '如何开始第一次对话？',
        a: '使用 npx @google/generative-ai-cli chat 开始交互式对话，或使用 ask "问题" 直接提问，也可以用 analyze 命令分析文件。'
      },
      {
        q: '支持哪些编程语言？',
        a: 'Gemini CLI 支持 JavaScript/TypeScript、Python、Java、C#、Go、Rust、PHP、Ruby 等主流编程语言，以及 HTML/CSS、SQL、Markdown 等。'
      },
      {
        q: '如何提高 AI 回答的质量？',
        a: '提供清晰的上下文，使用具体的问题描述，分步骤提问复杂问题，并验证和迭代生成的结果。'
      }
    ]
  },
  {
    category: '配置与自定义',
    questions: [
      {
        q: '如何自定义 CLI 配置？',
        a: '使用 config list 查看配置，config set 设置参数（如模型、温度、最大令牌数），config reset 重置到默认值。'
      },
      {
        q: '如何集成到现有工作流程？',
        a: '可以通过脚本集成、Git Hooks、CI/CD 流水线集成，或在编辑器中创建自定义快捷键和任务来使用。'
      },
      {
        q: '如何使用 MCP 协议扩展功能？',
        a: 'MCP 是标准化的 AI 模型通信协议，支持数据库查询、API 调用、文件操作等自定义工具集成。'
      }
    ]
  },
  {
    category: '故障排除',
    questions: [
      {
        q: '命令执行失败或无响应怎么办？',
        a: '检查网络连接，验证认证状态，更新到最新版本，清除 npm 缓存，使用 --verbose 查看详细错误信息。'
      },
      {
        q: 'API 配额或限制问题如何解决？',
        a: '了解限制类型，优化使用频率和提示精确度，在 Google AI Studio 查看使用情况，考虑升级付费计划。'
      },
      {
        q: '在企业环境中使用有什么注意事项？',
        a: '注意安全性（不包含敏感信息），配置网络代理，确保合规性，建立团队使用规范和最佳实践。'
      }
    ]
  }
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQClient() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="space-y-12">
      {faqData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
          </div>

          <div className="space-y-4">
            {category.questions.map((faq, questionIndex) => (
              <FAQItem
                key={questionIndex}
                question={faq.q}
                answer={faq.a}
                isOpen={openItems[`${categoryIndex}-${questionIndex}`] || false}
                onToggle={() => toggleItem(categoryIndex, questionIndex)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
