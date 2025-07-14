export default function DomainSetupPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          🌐 自定义域名配置指南
        </h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">i</span>
            </div>
            <div>
              <h3 className="text-blue-800 font-semibold">域名配置说明</h3>
              <p className="text-blue-700 text-sm">
                Google Analytics检测的是 <code className="bg-blue-100 px-1 rounded">www.geminicli.cloud</code>，
                需要将此域名配置到Vercel项目。
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* 当前状态 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📊 当前状态</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">当前部署域名:</span>
                <div className="mt-1">
                  <a 
                    href="https://gemini-cli-learning-platform.vercel.app" 
                    target="_blank"
                    className="text-blue-600 hover:underline font-mono text-xs"
                  >
                    gemini-cli-learning-platform.vercel.app
                  </a>
                </div>
              </div>
              <div>
                <span className="font-medium">目标自定义域名:</span>
                <div className="mt-1">
                  <span className="text-green-600 font-mono text-xs">www.geminicli.cloud</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vercel域名配置步骤 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">🔧 Vercel域名配置</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
              <li>
                <strong>登录Vercel Dashboard</strong>
                <div className="mt-1 ml-6">
                  访问 <a href="https://vercel.com/dashboard" target="_blank" className="text-blue-600 hover:underline">vercel.com/dashboard</a>
                </div>
              </li>
              <li>
                <strong>选择项目</strong>
                <div className="mt-1 ml-6">
                  点击 &quot;gemini-cli-learning-platform&quot; 项目
                </div>
              </li>
              <li>
                <strong>进入域名设置</strong>
                <div className="mt-1 ml-6">
                  点击 Settings → Domains
                </div>
              </li>
              <li>
                <strong>添加自定义域名</strong>
                <div className="mt-1 ml-6">
                  在输入框中输入: <code className="bg-gray-100 px-2 py-1 rounded">www.geminicli.cloud</code>
                  <br />
                  点击 &quot;Add&quot; 按钮
                </div>
              </li>
              <li>
                <strong>获取DNS配置信息</strong>
                <div className="mt-1 ml-6">
                  Vercel会显示需要配置的DNS记录，通常是：
                  <div className="bg-gray-100 p-3 mt-2 rounded font-mono text-xs">
                    Type: CNAME<br/>
                    Name: www<br/>
                    Value: cname.vercel-dns.com
                  </div>
                </div>
              </li>
            </ol>
          </div>

          {/* DNS配置步骤 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">🌐 DNS配置步骤</h2>
            <p className="text-gray-600 mb-4">
              在您的域名注册商（如阿里云、腾讯云、Cloudflare等）配置DNS记录：
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
              <li>
                <strong>登录域名管理后台</strong>
                <div className="mt-1 ml-6">
                  访问您购买 geminicli.cloud 域名的服务商
                </div>
              </li>
              <li>
                <strong>进入DNS管理</strong>
                <div className="mt-1 ml-6">
                  找到DNS解析或域名解析设置
                </div>
              </li>
              <li>
                <strong>添加CNAME记录</strong>
                <div className="mt-1 ml-6">
                  <div className="bg-gray-100 p-3 mt-2 rounded">
                    <div><strong>记录类型:</strong> CNAME</div>
                    <div><strong>主机记录:</strong> www</div>
                    <div><strong>记录值:</strong> cname.vercel-dns.com</div>
                    <div><strong>TTL:</strong> 600（或默认值）</div>
                  </div>
                </div>
              </li>
              <li>
                <strong>保存配置</strong>
                <div className="mt-1 ml-6">
                  保存DNS记录，等待生效（通常5-30分钟）
                </div>
              </li>
            </ol>
          </div>

          {/* 验证步骤 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">✅ 验证配置</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>等待DNS传播完成（5-30分钟）</li>
              <li>在Vercel中点击 &quot;Verify&quot; 验证域名</li>
              <li>访问 <code className="bg-gray-100 px-1 rounded">https://www.geminicli.cloud</code> 测试</li>
              <li>确认网站正常加载</li>
              <li>重新运行Google Analytics检测工具</li>
            </ol>
          </div>

          {/* 常见问题 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ 常见问题</h2>
            <div className="space-y-4 text-sm">
              <div>
                <strong className="text-gray-900">Q: 域名还没有购买怎么办？</strong>
                <p className="text-gray-600 mt-1">
                  您需要先购买 geminicli.cloud 域名，推荐使用阿里云、腾讯云或Cloudflare等服务商。
                </p>
              </div>
              <div>
                <strong className="text-gray-900">Q: DNS配置后多久生效？</strong>
                <p className="text-gray-600 mt-1">
                  通常5-30分钟，最长可能需要24小时。可以使用DNS检测工具验证。
                </p>
              </div>
              <div>
                <strong className="text-gray-900">Q: 配置完成后Google Analytics还是检测不到？</strong>
                <p className="text-gray-600 mt-1">
                  确保Vercel环境变量已配置，并且域名完全生效后再测试。
                </p>
              </div>
            </div>
          </div>

          {/* 临时解决方案 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">⚡ 临时解决方案</h2>
            <p className="text-yellow-800 mb-4">
              如果暂时无法配置自定义域名，可以：
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-yellow-700">
              <li>在Google Analytics中使用当前域名进行测试</li>
              <li>手动验证GA代码是否正确加载（查看页面源码）</li>
              <li>使用浏览器开发者工具检查网络请求</li>
              <li>在GA实时报告中查看数据</li>
            </ol>
          </div>

          {/* 相关链接 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">🔗 相关链接</h2>
            <div className="space-y-2 text-sm">
              <div>
                <a href="https://vercel.com/docs/concepts/projects/domains" target="_blank" className="text-blue-600 hover:underline">
                  Vercel域名配置官方文档
                </a>
              </div>
              <div>
                <a href="/ga-check" className="text-blue-600 hover:underline">
                  返回GA检查页面
                </a>
              </div>
              <div>
                <a href="/ga-test" className="text-blue-600 hover:underline">
                  GA诊断页面
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
