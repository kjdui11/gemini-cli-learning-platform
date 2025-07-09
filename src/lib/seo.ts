import { Metadata } from 'next'

export const siteConfig = {
  name: 'Gemini CLI 学习平台',
  description: '专为新手开发者打造的 Gemini CLI 学习平台，提供详细教程、常见问题解答、视频指南和最新产品动态，帮助您快速掌握这个强大的 AI 命令行工具。',
  url: 'https://geminicli-learn.vercel.app',
  ogImage: '/og-image.png',
  keywords: [
    'Gemini CLI',
    'AI 命令行工具',
    'Google AI',
    '开发者工具',
    '人工智能',
    '编程教程',
    '命令行界面',
    'CLI 工具',
    '机器学习',
    '代码生成',
    '开发效率',
    'Google Gemini',
    'AI 助手',
    '编程学习',
    '开发指南'
  ],
  authors: [
    {
      name: 'Gemini CLI 学习平台',
      url: 'https://geminicli-learn.vercel.app',
    },
  ],
  creator: 'Gemini CLI 学习平台',
  publisher: 'Gemini CLI 学习平台',
  category: 'Technology',
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    category: siteConfig.category,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@google',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    alternates: {
      canonical: siteConfig.url,
    },
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
    },
  },
}

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  sameAs: [
    'https://github.com/google-gemini/gemini-cli',
    'https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/',
  ],
}

export const breadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
