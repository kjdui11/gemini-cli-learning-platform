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

# Disallow crawling of technical files (won't affect page indexing)
Disallow: /_next/
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$
Disallow: /*.map$

# Explicitly allow important content paths
Allow: /zh/
Allow: /hi/
Allow: /fr/
Allow: /de/
Allow: /ja/
Allow: /ko/
Allow: /es/
Allow: /ru/
Allow: /commands/
Allow: /installation/
Allow: /guides/
Allow: /docs/
Allow: /faq/
Allow: /about/
Allow: /contact/
Allow: /privacy/
Allow: /terms/

# Allow important SEO files
Allow: /sitemap.xml
Allow: /robots.txt
Allow: /favicon.ico
Allow: /manifest.json

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Host
Host: ${siteConfig.url}

# Optimized settings for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
