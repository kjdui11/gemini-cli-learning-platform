import Link from 'next/link'

const footerNavigation = {
  learning: {
    title: '学习资源',
    links: [
      { name: 'Gemini CLI 入门教程', href: '/tutorials' },
      { name: 'AI 编程最佳实践', href: '/tutorials/best-practices' },
      { name: '常见问题解答', href: '/faq' },
      { name: '视频教程合集', href: '/videos' },
      { name: '实战案例分析', href: '/tutorials/examples' },
    ],
  },
  tools: {
    title: 'AI 开发工具',
    links: [
      { name: 'Gemini CLI 下载', href: 'https://github.com/google-gemini/gemini-cli' },
      { name: 'Google AI Studio', href: 'https://aistudio.google.com/' },
      { name: 'Gemini API 文档', href: 'https://ai.google.dev/gemini-api' },
      { name: 'MCP 协议指南', href: '/tutorials/mcp' },
      { name: 'CLI 命令参考', href: '/tutorials/commands' },
    ],
  },
  community: {
    title: '社区与支持',
    links: [
      { name: '产品更新动态', href: '/news' },
      { name: 'GitHub 讨论区', href: 'https://github.com/google-gemini/gemini-cli/discussions' },
      { name: '问题反馈', href: 'https://github.com/google-gemini/gemini-cli/issues' },
      { name: '开发者社区', href: '/community' },
      { name: '贡献指南', href: '/contribute' },
    ],
  },
  company: {
    title: '关于我们',
    links: [
      { name: '网站介绍', href: '/about' },
      { name: '隐私政策', href: '/privacy' },
      { name: '使用条款', href: '/terms' },
      { name: '联系我们', href: '/contact' },
      { name: '网站地图', href: '/sitemap.xml' },
    ],
  },
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/google-gemini/gemini-cli',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Google AI Studio',
    href: 'https://aistudio.google.com/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    name: 'Google Developers',
    href: 'https://developers.google.com/ai',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.219-.31-.219c0-1.309.759-2.284 1.705-2.284.804 0 1.192.219 1.192 1.219 0 .759-.219 1.896-.219 2.896-.219 1.219.219 2.284 1.705 2.284 2.065 0 3.654-2.175 3.654-5.318 0-2.784-2.003-4.732-4.867-4.732-3.316 0-5.26 2.489-5.26 5.062 0 1.002.386 2.077.869 2.661.095.113.109.212.081.327-.09.373-.293 1.199-.333 1.363-.053.225-.172.271-.397.164-1.5-.698-2.438-2.888-2.438-4.648 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 主要导航区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 学习资源 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.learning.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.learning.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI 开发工具 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.tools.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.tools.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 社区与支持 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.community.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.community.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.company.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          {/* 网站描述和关键词 */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-3">
              Gemini CLI 学习平台 - AI 驱动的开发工具教程
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
              专业的 Gemini CLI 中文学习平台，提供全面的 AI 编程教程、实战案例和最佳实践。
              学习如何使用 Google 最新的开源 AI 命令行工具，掌握人工智能辅助编程技术，
              提升开发效率。支持代码生成、文件操作、Google 搜索集成等强大功能。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                #GeminiCLI
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                #AI编程
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                #命令行工具
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                #Google AI
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                #开源项目
              </span>
            </div>
          </div>

          {/* 社交媒体和版权信息 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`访问 ${item.name}`}
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="text-sm text-gray-400">
              <p className="mb-1">
                &copy; 2025 Gemini CLI 学习平台. 本站为非官方学习资源网站，致力于推广 AI 编程技术。
              </p>
              <p>
                基于 Google 官方开源项目{' '}
                <Link
                  href="https://github.com/google-gemini/gemini-cli"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gemini CLI
                </Link>
                {' '}构建 | Apache 2.0 开源协议
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
