import { NextResponse } from 'next/server'
import { siteConfig } from '@/lib/seo'

// 静态导出配置
export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/
Disallow: *.json
Disallow: *.xml

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: ${siteConfig.url}/sitemap.xml
Host: ${siteConfig.url}
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
