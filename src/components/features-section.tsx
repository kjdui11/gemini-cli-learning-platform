import {
  GlobeAltIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: '代码理解与生成',
    description: '使用自然语言编写代码、调试问题和优化工作流程。支持多种编程语言，提供智能代码建议和错误修复。',
    icon: CodeBracketIcon,
  },
  {
    name: '文件操作与管理',
    description: '直接在终端中操作文件，批量处理、重命名、搜索和编辑文件内容，让文件管理变得更加智能高效。',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Google 搜索集成',
    description: '内置 Google 搜索工具，获取实时网页内容和最新信息，为您的开发工作提供准确的外部上下文。',
    icon: GlobeAltIcon,
  },
  {
    name: '可扩展架构',
    description: '支持 Model Context Protocol (MCP) 和内置扩展系统，轻松集成到现有工作流程，自定义功能满足特定需求。',
    icon: PuzzlePieceIcon,
  },
  {
    name: '任务自动化',
    description: '通过脚本调用 Gemini CLI，实现任务自动化和工作流程集成，提高开发效率和生产力。',
    icon: SparklesIcon,
  },
  {
    name: '开源透明',
    description: '完全开源 (Apache 2.0)，代码透明可审查，全球开发者社区共同贡献，确保安全性和可信度。',
    icon: ShieldCheckIcon,
  },
]

export default function FeaturesSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 sm:py-28">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-6">
            <span className="mr-2">🚀</span>
            核心功能
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Gemini CLI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              能为您做什么？
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            从代码编写到任务自动化，Gemini CLI 为新手开发者提供全方位的 AI 辅助功能，
            让您在终端中体验前所未有的智能开发体验。
          </p>
        </div>

        {/* 功能卡片网格 */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50"
              >
                {/* 卡片背景渐变 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* 图标 */}
                <div className="relative mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* 内容 */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* 装饰性元素 */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              准备体验 AI 驱动的开发流程？
            </h3>
            <p className="text-blue-100 mb-6">
              立即开始使用 Gemini CLI，让 AI 成为您开发工作流程中的得力助手
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/google-gemini/gemini-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors duration-200"
              >
                开始使用
              </a>
              <a
                href="/tutorials"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                查看教程
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
