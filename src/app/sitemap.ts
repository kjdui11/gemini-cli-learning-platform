import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

// 添加静态导出配置
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages - 更新为新的页面结构
  const staticPages = [
    '',
    '/installation',
    '/guides',
    '/commands',
    '/docs',
    '/faq',
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return staticRoutes
}
