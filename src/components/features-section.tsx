import {
  CommandLineIcon,
  CpuChipIcon,
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">核心功能</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gemini CLI 能为您做什么？
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            从代码编写到任务自动化，Gemini CLI 为新手开发者提供全方位的 AI 辅助功能，
            让您在终端中体验前所未有的智能开发体验。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
