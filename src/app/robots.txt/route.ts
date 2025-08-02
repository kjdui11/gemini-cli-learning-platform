import { NextResponse } from 'next/server'
import { siteConfig } from '@/lib/seo'

// 静态导出配置
export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteConfig.url}/sitemap.xml

# Disallow crawling of API routes and internal files
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: *.json$

# Allow crawling of all language versions
Allow: /zh/
Allow: /hi/
Allow: /fr/
Allow: /de/
Allow: /ja/
Allow: /ko/
Allow: /es/
Allow: /ru/

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Host
Host: ${siteConfig.url}
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
