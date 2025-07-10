export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          测试页面
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">页面测试</h2>
          <p className="text-gray-600">
            如果您能看到这个页面，说明路由工作正常。
          </p>
          
          <div className="mt-6">
            <a 
              href="/ga-test" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              前往GA诊断页面
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
