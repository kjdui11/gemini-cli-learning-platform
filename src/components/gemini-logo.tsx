interface GeminiLogoProps {
  className?: string
}

export default function GeminiLogo({ className = "h-12 w-12" }: GeminiLogoProps) {
  return (
    <div className={`${className} relative`}>
      {/* 外层渐变边框 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-0.5">
        <div className="h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center">
          {/* 内部箭头图标 */}
          <svg 
            className="h-6 w-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
