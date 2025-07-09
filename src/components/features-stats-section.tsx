export default function FeaturesStatsSection() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* 60分钟免费开发体验 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                60
              </div>
              <div className="mt-2 text-white text-lg font-medium">
                分钟免费开发体验
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <div className="font-semibold text-white mb-2">无与伦比的使用限制</div>
              个人 Google 账户免费获得每分钟 60 次模型请求和每天 1000 次请求的超量免费体验。
            </div>
          </div>

          {/* 1M Token 上下文 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                1M
              </div>
              <div className="mt-2 text-white text-lg font-medium">
                Token 上下文
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <div className="font-semibold text-white mb-2">强大的模型能力</div>
              基于 Gemini 2.5 Pro 模型，拥有 100 万 token 的大型上下文窗口，支持实际的代码分析和生成。
            </div>
          </div>

          {/* 100%开源代码 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="mt-2 text-white text-lg font-medium">
                开源代码
              </div>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed">
              <div className="font-semibold text-white mb-2">开放可扩展</div>
              支持 Model Context Protocol (MCP) 和自定义工具，可以轻松配置多种开发工具和流程中。
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">
              Available free-of-charge
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
