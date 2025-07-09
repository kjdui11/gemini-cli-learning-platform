import { 
  CommandLineIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  PuzzlePieceIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: '强大的 AI 能力',
    description: '基于 Gemini 2.5 Pro 模型，拥有 100 万 token 上下文窗口，支持代码理解、文件操作和动态故障排除。',
    icon: CpuChipIcon,
  },
  {
    name: '命令行原生体验',
    description: '直接在终端中使用自然语言编写代码、调试问题和优化工作流程，无需离开熟悉的开发环境。',
    icon: CommandLineIcon,
  },
  {
    name: 'Google 搜索集成',
    description: '内置 Google 搜索工具，可以获取网页内容并为模型提供实时的外部上下文信息。',
    icon: GlobeAltIcon,
  },
  {
    name: '可扩展架构',
    description: '支持 Model Context Protocol (MCP) 和内置扩展，可以轻松扩展功能并集成到现有工作流程中。',
    icon: PuzzlePieceIcon,
  },
  {
    name: '免费使用额度',
    description: '个人 Google 账户可免费使用，每分钟 60 次请求，每天 1000 次请求，业界最大的免费使用额度。',
    icon: SparklesIcon,
  },
  {
    name: '开源安全',
    description: '完全开源 (Apache 2.0)，代码透明可审查，社区驱动开发，确保安全性和可信度。',
    icon: ShieldCheckIcon,
  },
]

export default function FeaturesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">强大功能</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            为什么选择 Gemini CLI？
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gemini CLI 将 Google 最先进的 AI 技术直接带到您的终端，
            提供无与伦比的开发体验和强大的 AI 辅助功能。
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
