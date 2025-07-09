import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CommandLineIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Gemini CLI 安装与设置指南 | 详细安装教程',
  description: '详细的 Gemini CLI 安装指南，支持 Windows、macOS、Linux 系统。包含安装步骤、环境配置、常见问题解决方案和故障排除指南。',
  keywords: 'Gemini CLI 安装, AI 命令行工具安装, Google Gemini CLI 设置, 环境配置, 安装问题解决',
  openGraph: {
    title: 'Gemini CLI 安装与设置指南',
    description: '详细的 Gemini CLI 安装指南，支持多平台安装，包含完整的故障排除方案',
    type: 'article',
  },
}

const installationSteps = [
  {
    id: 'nodejs',
    title: '安装 Node.js',
    description: '确保您的系统已安装 Node.js 20 或更高版本',
    icon: CogIcon,
    steps: [
      '访问 Node.js 官网 (https://nodejs.org)',
      '下载并安装 LTS 版本（推荐）',
      '验证安装：运行 node --version',
      '确保版本号 ≥ 20.0.0'
    ],
    command: 'node --version',
  },
  {
    id: 'install',
    title: '安装 Gemini CLI',
    description: '使用 npm 全局安装或直接运行',
    icon: CommandLineIcon,
    steps: [
      '方式一：全局安装 npm install -g @google/generative-ai-cli',
      '方式二：直接运行 npx @google/generative-ai-cli',
      '推荐使用 npx 方式，无需全局安装',
      '首次运行会自动下载最新版本'
    ],
    command: 'npx @google/generative-ai-cli --version',
  },
  {
    id: 'auth',
    title: '配置认证',
    description: '设置 Google 账户认证以使用 Gemini API',
    icon: CheckCircleIcon,
    steps: [
      '运行 npx @google/generative-ai-cli auth',
      '按照提示在浏览器中登录 Google 账户',
      '授权 Gemini CLI 访问您的账户',
      '认证成功后即可开始使用'
    ],
    command: 'npx @google/generative-ai-cli auth',
  },
]

const platforms = [
  {
    name: 'Windows',
    icon: ComputerDesktopIcon,
    requirements: [
      'Windows 10 或更高版本',
      'PowerShell 5.1 或更高版本',
      'Node.js 20+ (推荐使用 nvm-windows)',
    ],
    notes: '建议使用 Windows Terminal 获得更好的体验'
  },
  {
    name: 'macOS',
    icon: DevicePhoneMobileIcon,
    requirements: [
      'macOS 10.15 或更高版本',
      'Terminal 或 iTerm2',
      'Node.js 20+ (推荐使用 nvm)',
    ],
    notes: '可以使用 Homebrew 安装 Node.js: brew install node'
  },
  {
    name: 'Linux',
    icon: ComputerDesktopIcon,
    requirements: [
      'Ubuntu 18.04+ / CentOS 7+ / 其他主流发行版',
      'Bash 4.0 或更高版本',
      'Node.js 20+ (推荐使用 nvm)',
    ],
    notes: '确保系统已安装 curl 和 git'
  },
]

const troubleshooting = [
  {
    problem: '命令未找到错误',
    solution: '确保 Node.js 已正确安装并添加到 PATH 环境变量中',
    details: [
      '检查 Node.js 安装：node --version',
      '重新启动终端或命令提示符',
      '如果使用 npx，确保网络连接正常'
    ]
  },
  {
    problem: '权限错误',
    solution: '在 Unix 系统上可能需要使用 sudo，或配置 npm 全局目录',
    details: [
      'Linux/macOS: 使用 sudo npm install -g',
      '或配置 npm 全局目录到用户目录',
      'Windows: 以管理员身份运行命令提示符'
    ]
  },
  {
    problem: '网络连接问题',
    solution: '检查网络连接，或配置 npm 代理设置',
    details: [
      '检查防火墙设置',
      '配置 npm 代理：npm config set proxy http://proxy:port',
      '尝试使用不同的 npm 镜像源'
    ]
  },
  {
    problem: '认证失败',
    solution: '确保 Google 账户有效，并检查浏览器设置',
    details: [
      '清除浏览器缓存和 Cookie',
      '尝试使用无痕模式进行认证',
      '检查 Google 账户是否启用了两步验证'
    ]
  },
]

export default function InstallationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Gemini CLI 安装与设置
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              详细的安装指南，帮助您在任何操作系统上快速安装和配置 Gemini CLI，
              开始您的 AI 辅助编程之旅。
            </p>
          </div>
        </div>
      </div>

      {/* Platform Requirements */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              系统要求
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gemini CLI 支持主流操作系统，确保您的系统满足以下要求
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {platforms.map((platform) => (
                <div key={platform.name} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <platform.icon className="h-8 w-8 text-blue-600" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">
                      {platform.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {platform.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-blue-600 font-medium">
                    💡 {platform.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              安装步骤
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              按照以下步骤完成 Gemini CLI 的安装和配置
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="space-y-8">
              {installationSteps.map((step, index) => (
                <div key={step.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {step.steps.map((stepItem, stepIndex) => (
                          <div key={stepIndex} className="flex items-start text-sm text-gray-700">
                            <span className="inline-flex w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-medium items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            {stepItem}
                          </div>
                        ))}
                      </div>

                      <div className="rounded-lg bg-gray-900 px-4 py-3">
                        <code className="text-sm text-green-400 font-mono">
                          $ {step.command}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div id="troubleshooting" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              故障排除
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              遇到安装问题？这里有常见问题的解决方案
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="h-6 w-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.problem}
                      </h3>
                      <p className="text-gray-700 mb-3">{item.solution}</p>
                      <ul className="space-y-1">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              下一步
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              安装完成后，继续学习如何使用 Gemini CLI
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                查看使用指南
              </Link>
              <Link
                href="/commands"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                浏览命令参考
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
