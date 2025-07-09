'use client'

import { useRef, useEffect } from 'react'

export default function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            看看 Gemini CLI 的实际效果
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            通过这个演示视频，了解 Gemini CLI 如何在终端中为您提供强大的 AI 辅助功能
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
            <video
              ref={videoRef}
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/GenMedia_demo_keyword.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              演示视频展示了 Gemini CLI 的核心功能和使用场景
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
