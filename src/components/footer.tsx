'use client';

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/google-gemini/gemini-cli',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Google AI Studio',
    href: 'https://aistudio.google.com/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    name: 'Google Developers',
    href: 'https://developers.google.com/ai',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.219-.31-.219c0-1.309.759-2.284 1.705-2.284.804 0 1.192.219 1.192 1.219 0 .759-.219 1.896-.219 2.896-.219 1.219.219 2.284 1.705 2.284 2.065 0 3.654-2.175 3.654-5.318 0-2.784-2.003-4.732-4.867-4.732-3.316 0-5.26 2.489-5.26 5.062 0 1.002.386 2.077.869 2.661.095.113.109.212.081.327-.09.373-.293 1.199-.333 1.363-.053.225-.172.271-.397.164-1.5-.698-2.438-2.888-2.438-4.648 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const { t } = useTranslation();

  const footerNavigation = {
    learning: {
      title: t('footer.learning.title'),
      links: [
        { name: t('footer.learning.installation'), href: '/installation' },
        { name: t('footer.learning.guides'), href: '/guides' },
        { name: t('footer.learning.advanced'), href: '/guides/advanced' },
        { name: t('footer.learning.faq'), href: '/faq' },
        { name: t('footer.learning.examples'), href: '/guides/examples' },
      ],
    },
    tools: {
      title: t('footer.tools.title'),
      links: [
        { name: t('footer.tools.download'), href: 'https://github.com/google-gemini/gemini-cli' },
        { name: t('footer.tools.commands'), href: '/commands' },
        { name: t('footer.tools.docs'), href: '/docs' },
        { name: t('footer.tools.aiStudio'), href: 'https://aistudio.google.com/' },
        { name: t('footer.tools.apiDocs'), href: 'https://ai.google.dev/gemini-api' },
      ],
    },
    community: {
      title: t('footer.community.title'),
      links: [
        { name: t('footer.community.github'), href: 'https://github.com/google-gemini/gemini-cli' },
        { name: t('footer.community.discussions'), href: 'https://github.com/google-gemini/gemini-cli/discussions' },
        { name: t('footer.community.issues'), href: 'https://github.com/google-gemini/gemini-cli/issues' },
        { name: t('footer.community.troubleshooting'), href: '/installation#troubleshooting' },
        { name: t('footer.community.contributing'), href: '/docs/contributing' },
      ],
    },
    company: {
      title: t('footer.company.title'),
      links: [
        { name: t('footer.company.about'), href: '/about' },
        { name: t('footer.company.privacy'), href: '/privacy' },
        { name: t('footer.company.terms'), href: '/terms' },
        { name: t('footer.company.contact'), href: '/contact' },
        { name: t('footer.company.sitemap'), href: '/sitemap.xml' },
      ],
    },
  };
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 主要导航区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 学习资源 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.learning.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.learning.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI 开发工具 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.tools.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.tools.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 社区与支持 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.community.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.community.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {footerNavigation.company.title}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          {/* 网站描述和关键词 */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-3">
              {t('footer.seo.title')}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
              {t('footer.seo.description')}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                {t('footer.seo.tags.geminiCLI')}
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                {t('footer.seo.tags.aiProgramming')}
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                {t('footer.seo.tags.commandLine')}
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                {t('footer.seo.tags.googleAI')}
              </span>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                {t('footer.seo.tags.openSource')}
              </span>
            </div>
          </div>

          {/* 社交媒体和版权信息 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={t('footer.social.visitLabel', { name: item.name })}
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="text-sm text-gray-400">
              <p className="mb-1">
                {t('footer.copyright.main')}
              </p>
              <p>
                {t('footer.copyright.basedOn')}{' '}
                <Link
                  href="https://github.com/google-gemini/gemini-cli"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gemini CLI
                </Link>
                {' '}{t('footer.copyright.license')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
