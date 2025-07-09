export default function VisualShowcase() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            强大的 AI 能力展示
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            体验 Gemini CLI 在代码生成、问题解决和开发辅助方面的卓越表现
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* 第一个展示卡片 - 模拟终端界面 */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
              <div className="relative p-8">
                {/* 模拟 Gemini CLI 图标 */}
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-0.5">
                    <div className="h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">智能代码生成</h3>
                  <p className="text-sm text-gray-300">
                    使用自然语言描述需求，AI 自动生成高质量代码
                  </p>
                </div>
              </div>
            </div>

            {/* 第二个展示卡片 - 模拟加载状态 */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">实时处理</h3>
                  <p className="text-sm text-gray-300">
                    快速响应，实时生成结果
                  </p>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="h-2 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-2 bg-gray-700 rounded animate-pulse w-3/4"></div>
                  <div className="h-2 bg-gray-700 rounded animate-pulse w-1/2"></div>
                </div>
              </div>
            </div>

            {/* 第三个展示卡片 - 统计数据 */}
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      60
                    </div>
                    <div className="text-xs text-gray-400">每分钟请求</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      1K
                    </div>
                    <div className="text-xs text-gray-400">每日请求</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      开源
                    </div>
                    <div className="text-xs text-gray-400">免费使用</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400 border border-blue-500/20">
                    完全免费使用
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 代码示例展示 */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-gray-900 p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-sm text-gray-300">Gemini CLI 演示</div>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-400 mt-1">$</span>
                <div className="flex-1">
                  <div className="text-white">gemini &quot;创建一个 React 组件来显示用户卡片&quot;</div>
                  <div className="mt-2 text-blue-300">🤖 正在生成 React 组件...</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 ml-6">
                <div className="text-gray-300">
                  <div className="text-blue-300">{`// UserCard.jsx`}</div>
                  <div className="text-white">import React from &apos;react&apos;;</div>
                  <div className="text-white"></div>
                  <div className="text-white">const UserCard = (props) =&gt; &#123;</div>
                  <div className="text-white ml-4">return (</div>
                  <div className="text-white ml-8">&lt;div className=&quot;user-card&quot;&gt;</div>
                  <div className="text-white ml-12">&lt;h3&gt;&#123;props.user.name&#125;&lt;/h3&gt;</div>
                  <div className="text-white ml-12">&lt;p&gt;&#123;props.user.email&#125;&lt;/p&gt;</div>
                  <div className="text-white ml-8">&lt;/div&gt;</div>
                  <div className="text-white ml-4">);</div>
                  <div className="text-white">&#125;;</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-6">
                <span className="text-green-400">✓</span>
                <span className="text-green-300">组件创建完成！</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
