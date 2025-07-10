'use client'

import { useEffect, useState } from 'react'

// 添加调试信息
console.log('GA Test Page Loading...')

interface ScriptInfo {
  type: string
  src?: string
  content?: string
  async?: boolean
  index: number
}

interface GAStatus {
  gaId: string
  nodeEnv: string
  gtagLoaded: boolean
  dataLayerExists: boolean
  scriptsFound: ScriptInfo[]
  errors: string[]
}

export default function GATestPage() {
  const [gaStatus, setGAStatus] = useState<GAStatus>({
    gaId: '',
    nodeEnv: '',
    gtagLoaded: false,
    dataLayerExists: false,
    scriptsFound: [],
    errors: []
  })

  useEffect(() => {
    // 检查环境变量
    const gaId = process.env.NEXT_PUBLIC_GA_ID || 'Not Set'
    const nodeEnv = process.env.NODE_ENV || 'Unknown'
    
    // 检查gtag是否加载
    const gtagLoaded = typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function'

    // 检查dataLayer是否存在
    const dataLayerExists = typeof window !== 'undefined' && Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)
    
    // 检查页面中的GA脚本
    const scripts: ScriptInfo[] = []
    if (typeof window !== 'undefined') {
      const allScripts = document.querySelectorAll('script')
      allScripts.forEach((script, index) => {
        if (script.src && script.src.includes('googletagmanager.com')) {
          scripts.push({
            type: 'External Script',
            src: script.src,
            async: script.async,
            index
          })
        }
        if (script.innerHTML && script.innerHTML.includes('gtag')) {
          scripts.push({
            type: 'Inline Script',
            content: script.innerHTML.substring(0, 100) + '...',
            index
          })
        }
      })
    }

    setGAStatus({
      gaId,
      nodeEnv,
      gtagLoaded,
      dataLayerExists,
      scriptsFound: scripts,
      errors: []
    })
  }, [])

  const testGAEvent = () => {
    const windowWithGtag = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof window !== 'undefined' && windowWithGtag.gtag) {
      try {
        windowWithGtag.gtag('event', 'test_event', {
          event_category: 'test',
          event_label: 'manual_test',
          value: 1
        })
        alert('GA事件已发送！检查浏览器开发者工具的Network标签页查看请求。')
      } catch (error) {
        alert('发送GA事件时出错：' + error)
      }
    } else {
      alert('gtag函数不可用')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Google Analytics 诊断页面
        </h1>
        
        <div className="space-y-6">
          {/* 基本信息 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">基本配置</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">GA ID:</span>
                <span className={`ml-2 ${gaStatus.gaId === 'Not Set' ? 'text-red-600' : 'text-green-600'}`}>
                  {gaStatus.gaId}
                </span>
              </div>
              <div>
                <span className="font-medium">环境:</span>
                <span className="ml-2 text-blue-600">{gaStatus.nodeEnv}</span>
              </div>
              <div>
                <span className="font-medium">gtag函数:</span>
                <span className={`ml-2 ${gaStatus.gtagLoaded ? 'text-green-600' : 'text-red-600'}`}>
                  {gaStatus.gtagLoaded ? '已加载' : '未加载'}
                </span>
              </div>
              <div>
                <span className="font-medium">dataLayer:</span>
                <span className={`ml-2 ${gaStatus.dataLayerExists ? 'text-green-600' : 'text-red-600'}`}>
                  {gaStatus.dataLayerExists ? '存在' : '不存在'}
                </span>
              </div>
            </div>
          </div>

          {/* 脚本检查 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              页面中的GA脚本 ({gaStatus.scriptsFound.length})
            </h2>
            {gaStatus.scriptsFound.length > 0 ? (
              <div className="space-y-3">
                {gaStatus.scriptsFound.map((script, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded text-sm">
                    <div className="font-medium text-gray-700">{script.type}</div>
                    {script.src && (
                      <div className="text-blue-600 break-all">
                        {script.src}
                        {script.async && <span className="ml-2 text-green-600">(async)</span>}
                      </div>
                    )}
                    {script.content && (
                      <div className="text-gray-600 font-mono text-xs mt-1">
                        {script.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-600">未找到GA脚本</p>
            )}
          </div>

          {/* 测试按钮 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">功能测试</h2>
            <button
              onClick={testGAEvent}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              发送测试事件
            </button>
            <p className="text-sm text-gray-600 mt-2">
              点击后检查浏览器开发者工具的Network标签页，查看是否有发送到google-analytics.com的请求。
            </p>
          </div>

          {/* 调试信息 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">调试信息</h2>
            <div className="bg-gray-100 rounded p-4 text-sm font-mono">
              <div>当前URL: {typeof window !== 'undefined' ? window.location.href : 'N/A'}</div>
              <div>User Agent: {typeof window !== 'undefined' ? navigator.userAgent.substring(0, 100) + '...' : 'N/A'}</div>
              <div>页面加载时间: {new Date().toLocaleString()}</div>
            </div>
          </div>

          {/* 检查步骤 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">检查步骤</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>确认GA ID已正确设置</li>
              <li>检查页面源码中是否包含GA脚本</li>
              <li>打开浏览器开发者工具 → Network标签页</li>
              <li>刷新页面，查看是否有对googletagmanager.com的请求</li>
              <li>点击&quot;发送测试事件&quot;按钮</li>
              <li>查看是否有对google-analytics.com的请求</li>
              <li>在GA实时报告中查看数据</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
