// Google Analytics 工具函数

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// 检查是否在生产环境且有GA ID
export const isGAEnabled = GA_TRACKING_ID && process.env.NODE_ENV === 'production'

// 页面浏览跟踪
export const pageview = (url: string) => {
  if (!isGAEnabled || !GA_TRACKING_ID) return

  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  })
}

// 事件跟踪
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (!isGAEnabled) return

  const config: Record<string, string | number | boolean> = {
    event_category: category,
  }

  if (label) config.event_label = label
  if (value !== undefined) config.value = value

  window.gtag('event', action, config)
}

// 自定义事件类型
export const trackEvent = {
  // 导航点击
  navigation: (page: string) => {
    event({
      action: 'click',
      category: 'navigation',
      label: page,
    })
  },
  
  // 外部链接点击
  externalLink: (url: string) => {
    event({
      action: 'click',
      category: 'external_link',
      label: url,
    })
  },
  
  // 下载跟踪
  download: (filename: string) => {
    event({
      action: 'download',
      category: 'file',
      label: filename,
    })
  },
  
  // 搜索跟踪
  search: (searchTerm: string) => {
    event({
      action: 'search',
      category: 'site_search',
      label: searchTerm,
    })
  },
  
  // 页面停留时间
  engagement: (timeOnPage: number) => {
    event({
      action: 'engagement',
      category: 'user_engagement',
      value: timeOnPage,
    })
  }
}

// 声明全局gtag函数类型
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, string | number | boolean>
    ) => void
  }
}
