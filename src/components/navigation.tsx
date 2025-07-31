'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, currentLocale } = useTranslation()

  const navigation = [
    { name: t('navigation.installation'), href: currentLocale === 'en' ? '/installation' : `/${currentLocale}/installation` },
    { name: t('navigation.guides'), href: currentLocale === 'en' ? '/guides' : `/${currentLocale}/guides` },
    { name: t('navigation.commands'), href: currentLocale === 'en' ? '/commands' : `/${currentLocale}/commands` },
    { name: t('navigation.docs'), href: currentLocale === 'en' ? '/docs' : `/${currentLocale}/docs` },
    { name: t('navigation.faq'), href: currentLocale === 'en' ? '/faq' : `/${currentLocale}/faq` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled
        ? "bg-white/85 backdrop-blur-lg shadow-xl border-b border-gray-200/60"
        : "bg-white/95 backdrop-blur-md shadow-md"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-none">
          <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}/`} className="-m-1.5 p-1.5 group">
            <span className="sr-only">{t('navigation.logo.alt')}</span>
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-base">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">{t('navigation.logo.title')}</span>
                <span className="text-xs text-gray-500 -mt-1 whitespace-nowrap">{t('navigation.logo.subtitle')}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-none lg:w-32"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t('navigation.toggleMenu')}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap"
            >
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>
          ))}
          <LanguageSwitcher className="ml-4" />
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden",
        mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
      )}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 sm:shadow-2xl">
          <div className="flex items-center justify-between">
            <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}/`} className="-m-1.5 p-1.5 group">
              <span className="sr-only">{t('navigation.logo.alt')}</span>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">{t('navigation.logo.title')}</span>
                  <span className="text-xs text-gray-500 -mt-1">{t('navigation.logo.subtitle')}</span>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50/50 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{t('navigation.toggleMenu')}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-3 py-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group -mx-3 flex items-center rounded-xl px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200/50"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex-1">{item.name}</span>
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <LanguageSwitcher className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
