export default function GACheckPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Google Analytics 检查页面（静态版本）
        </h1>
        
        <div className="space-y-6">
          {/* 基本信息 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">基本配置</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">GA ID:</span>
                <span className="ml-2 text-green-600">G-NEQETT0ENG</span>
              </div>
              <div>
                <span className="font-medium">环境:</span>
                <span className="ml-2 text-blue-600">生产环境</span>
              </div>
            </div>
          </div>

          {/* 检查步骤 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">手动检查步骤</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>右键点击页面，选择&quot;查看页面源代码&quot;</li>
              <li>搜索 &quot;googletagmanager.com&quot; 或 &quot;gtag&quot;</li>
              <li>应该能找到以下代码：
                <div className="bg-gray-100 p-3 mt-2 rounded text-xs font-mono">
                  &lt;script async src=&quot;https://www.googletagmanager.com/gtag/js?id=G-NEQETT0ENG&quot;&gt;&lt;/script&gt;
                </div>
              </li>
              <li>打开浏览器开发者工具（F12）</li>
              <li>切换到 Network（网络）标签页</li>
              <li>刷新页面</li>
              <li>查看是否有对 googletagmanager.com 的请求</li>
              <li>在控制台输入：<code className="bg-gray-100 px-2 py-1 rounded">typeof gtag</code></li>
              <li>应该返回 &quot;function&quot;</li>
            </ol>
          </div>

          {/* 验证信息 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">验证信息</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                <span>GA代码已添加到页面 &lt;head&gt; 中</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                <span>使用官方Google Analytics代码格式</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                <span>环境变量配置正确</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                <span>静态构建包含GA脚本</span>
              </div>
            </div>
          </div>

          {/* Google Analytics 链接 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Google Analytics 控制台</h2>
            <p className="text-gray-600 mb-4">
              访问Google Analytics控制台查看数据：
            </p>
            <a 
              href="https://analytics.google.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              打开 Google Analytics
            </a>
          </div>

          {/* 故障排除 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">故障排除</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>如果看不到GA脚本：</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>检查Vercel环境变量是否设置</li>
                  <li>确认部署成功</li>
                  <li>清除浏览器缓存</li>
                </ul>
              </div>
              <div>
                <strong>如果GA不收集数据：</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>等待24-48小时数据处理</li>
                  <li>检查实时报告</li>
                  <li>确认GA属性ID正确</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
