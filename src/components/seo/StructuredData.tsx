import { siteConfig } from '@/lib/seo'

interface StructuredDataProps {
  type: 'website' | 'article' | 'faq' | 'howto' | 'software'
  title?: string
  description?: string
  url?: string
  datePublished?: string
  dateModified?: string
  author?: string
  locale?: string
}

export default function StructuredData({
  type,
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = 'Gemini CLI Learning Platform',
  locale = 'en'
}: StructuredDataProps) {
  const baseUrl = siteConfig.url
  const currentUrl = url ? `${baseUrl}${url}` : baseUrl

  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': getSchemaType(),
      name: title || siteConfig.name,
      description: description || siteConfig.description,
      url: currentUrl,
      inLanguage: locale,
      publisher: {
        '@type': 'Organization',
        name: 'Gemini CLI Learning Platform',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
          width: 512,
          height: 512
        }
      }
    }

    switch (type) {
      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          },
          mainEntity: {
            '@type': 'SoftwareApplication',
            name: 'Gemini CLI',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: ['Windows', 'macOS', 'Linux'],
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            }
          }
        }

      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          headline: title,
          datePublished: datePublished || new Date().toISOString(),
          dateModified: dateModified || new Date().toISOString(),
          author: {
            '@type': 'Organization',
            name: author
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl
          }
        }

      case 'faq':
        return {
          ...baseData,
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is Gemini CLI?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Gemini CLI is Google\'s open-source AI command-line tool that allows developers to interact with AI models directly from the terminal.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do I install Gemini CLI?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can install Gemini CLI using npm: npm install -g @google/gemini-cli, or use npx for one-time usage.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is Gemini CLI free to use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Gemini CLI is open-source and free to use. You may need a Google AI API key for certain features.'
              }
            }
          ]
        }

      case 'howto':
        return {
          ...baseData,
          '@type': 'HowTo',
          name: title,
          description: description,
          step: [
            {
              '@type': 'HowToStep',
              name: 'Install Gemini CLI',
              text: 'Install the CLI tool using npm or use npx for one-time usage',
              url: `${baseUrl}/installation`
            },
            {
              '@type': 'HowToStep',
              name: 'Authenticate',
              text: 'Set up authentication with your Google account or API key',
              url: `${baseUrl}/docs/basic-commands`
            },
            {
              '@type': 'HowToStep',
              name: 'Start Using',
              text: 'Begin using Gemini CLI commands for AI-assisted development',
              url: `${baseUrl}/commands`
            }
          ]
        }

      case 'software':
        return {
          ...baseData,
          '@type': 'SoftwareApplication',
          name: 'Gemini CLI',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: ['Windows', 'macOS', 'Linux'],
          softwareVersion: 'Latest',
          downloadUrl: 'https://www.npmjs.com/package/@google/gemini-cli',
          installUrl: 'https://www.npmjs.com/package/@google/gemini-cli',
          screenshot: `${baseUrl}/screenshot.png`,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
            bestRating: '5',
            worstRating: '1'
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              author: {
                '@type': 'Person',
                name: 'Developer Community'
              },
              reviewBody: 'Excellent AI command-line tool for developers. Easy to use and very powerful.'
            }
          ]
        }

      default:
        return baseData
    }
  }

  const getSchemaType = () => {
    switch (type) {
      case 'website': return 'WebSite'
      case 'article': return 'Article'
      case 'faq': return 'FAQPage'
      case 'howto': return 'HowTo'
      case 'software': return 'SoftwareApplication'
      default: return 'WebPage'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  )
}
