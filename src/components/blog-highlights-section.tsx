import Link from 'next/link'
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const blogHighlights = [
  {
    title: 'Gemini CLI: your open-source AI agent',
    excerpt: 'Google 正式发布 Gemini CLI，这是一个开源的 AI 代理工具，将 Gemini 的强大功能直接带到开发者的终端中。',
    date: '2025年6月25日',
    readTime: '5 分钟阅读',
    href: 'https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/',
    category: '产品发布',
    highlights: [
      '免费使用 Gemini 2.5 Pro，每分钟 60 次请求',
      '支持代码理解、文件操作和命令执行',
      '内置 Google 搜索工具和 MCP 扩展支持',
      '完全开源，Apache 2.0 许可证'
    ]
  }
]

const keyFeatures = [
  {
    title: '无与伦比的使用限制',
    description: '个人 Google 账户免费获得每分钟 60 次模型请求和每天 1000 次请求的行业最大免费额度。',
    stat: '60/分钟',
    statLabel: '免费请求次数'
  },
  {
    title: '强大的模型能力',
    description: '基于 Gemini 2.5 Pro 模型，拥有 100 万 token 的大型上下文窗口，支持复杂的代码分析和生成。',
    stat: '1M',
    statLabel: 'Token 上下文'
  },
  {
    title: '开放可扩展',
    description: '支持 Model Context Protocol (MCP) 和自定义扩展，可以轻松集成到现有的开发工作流程中。',
    stat: '100%',
    statLabel: '开源代码'
  }
]

export default function BlogHighlightsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">官方动态</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            来自 Google 的最新消息
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            了解 Gemini CLI 的最新发展动态，掌握第一手的产品信息和技术更新。
          </p>
        </div>

        {/* Blog Highlight */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {blogHighlights.map((post, index) => (
            <article key={index} className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">Gemini</div>
                    <div className="text-lg">CLI</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2025-06-25" className="text-gray-500 flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {post.title}
                      <ArrowTopRightOnSquareIcon className="inline h-4 w-4 ml-1" />
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">核心亮点：</h4>
                  <ul className="space-y-2">
                    {post.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-3" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>



        {/* CTA to blog */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Link
            href="https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            阅读完整博客文章
            <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
