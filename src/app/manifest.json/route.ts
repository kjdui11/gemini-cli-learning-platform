import { NextResponse } from 'next/server'
import { siteConfig } from '@/lib/seo'

// 静态导出配置
export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const manifest = {
    name: 'Gemini CLI Learning Platform',
    short_name: 'Gemini CLI',
    description: 'Learn to use Gemini CLI effectively with comprehensive tutorials, guides, and documentation. Master Google\'s open-source AI command-line tool.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['education', 'developer', 'productivity', 'utilities'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Gemini CLI Learning Platform - Desktop View'
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Gemini CLI Learning Platform - Mobile View'
      }
    ],
    shortcuts: [
      {
        name: 'Commands Reference',
        short_name: 'Commands',
        description: 'Quick access to Gemini CLI commands reference',
        url: '/commands',
        icons: [
          {
            src: '/icon-command.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Installation Guide',
        short_name: 'Install',
        description: 'Step-by-step installation guide',
        url: '/installation',
        icons: [
          {
            src: '/icon-install.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'FAQ',
        short_name: 'FAQ',
        description: 'Frequently asked questions and solutions',
        url: '/faq',
        icons: [
          {
            src: '/icon-faq.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    ]
  }

  return NextResponse.json(manifest, {
    headers: {
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
