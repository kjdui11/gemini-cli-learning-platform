'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  MagnifyingGlassIcon,
  TagIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CogIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { enhancedFAQData, faqCategories, searchFAQs, getFAQsByCategory, type FAQItem } from '@/data/faq-enhanced'
import { faqTranslations } from '@/data/faq-translations'

interface EnhancedFAQContentProps {
  locale: string
}

export default function EnhancedFAQContent({ locale }: EnhancedFAQContentProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')

  // Get translated content
  const getTranslatedFAQ = (faq: FAQItem) => {
    const translation = faqTranslations[locale]?.[faq.id]
    if (translation) {
      return {
        ...faq,
        question: translation.question,
        answer: translation.answer
      }
    }
    return faq // fallback to English
  }

  // Filter FAQs based on search and filters
  const filteredFAQs = useMemo(() => {
    let faqs = enhancedFAQData

    // Apply search filter
    if (searchQuery.trim()) {
      faqs = searchFAQs(searchQuery)
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      faqs = faqs.filter(faq => faq.category === selectedCategory)
    }

    // Apply difficulty filter
    if (selectedDifficulty !== 'all') {
      faqs = faqs.filter(faq => faq.difficulty === selectedDifficulty)
    }

    return faqs.map(getTranslatedFAQ)
  }, [searchQuery, selectedCategory, selectedDifficulty, locale])

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getCategoryIcon = (categoryId: string) => {
    const icons: Record<string, any> = {
      'installation': CogIcon,
      'authentication': ExclamationTriangleIcon,
      'basic-usage': RocketLaunchIcon,
      'advanced-features': SparklesIcon,
      'troubleshooting': ExclamationTriangleIcon,
      'best-practices': SparklesIcon
    }
    return icons[categoryId] || CogIcon
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'beginner': 'bg-green-100 text-green-800',
      'intermediate': 'bg-yellow-100 text-yellow-800',
      'advanced': 'bg-red-100 text-red-800'
    }
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getLocalizedText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      zh: {
        title: '常见问题解答',
        subtitle: '基于官方文档和社区反馈收集的高质量问答，帮助您快速解决 Gemini CLI 使用中的问题',
        searchPlaceholder: '搜索问题...',
        allCategories: '所有分类',
        allDifficulties: '所有难度',
        beginner: '初级',
        intermediate: '中级',
        advanced: '高级',
        noResults: '未找到匹配的问题',
        noResultsDesc: '尝试调整搜索条件或浏览不同分类',
        lastUpdated: '最后更新',
        sources: '来源',
        relatedQuestions: '相关问题'
      },
      en: {
        title: 'Frequently Asked Questions',
        subtitle: 'High-quality Q&A collected from official documentation and community feedback to help you quickly resolve Gemini CLI issues',
        searchPlaceholder: 'Search questions...',
        allCategories: 'All Categories',
        allDifficulties: 'All Difficulties',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        noResults: 'No matching questions found',
        noResultsDesc: 'Try adjusting your search terms or browse different categories',
        lastUpdated: 'Last Updated',
        sources: 'Sources',
        relatedQuestions: 'Related Questions'
      }
    }
    return texts[locale]?.[key] || texts['en'][key] || key
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {getLocalizedText('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {getLocalizedText('subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder={getLocalizedText('searchPlaceholder')}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">{getLocalizedText('allCategories')}</option>
                {faqCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">{getLocalizedText('allDifficulties')}</option>
                <option value="beginner">{getLocalizedText('beginner')}</option>
                <option value="intermediate">{getLocalizedText('intermediate')}</option>
                <option value="advanced">{getLocalizedText('advanced')}</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-sm text-gray-600">
              {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">{getLocalizedText('noResults')}</h3>
                <p className="mt-1 text-sm text-gray-500">{getLocalizedText('noResultsDesc')}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq) => {
                  const IconComponent = getCategoryIcon(faq.category)
                  return (
                    <div key={faq.id} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <IconComponent className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(faq.difficulty)}`}>
                                {getLocalizedText(faq.difficulty)}
                              </span>
                              <div className="flex gap-1">
                                {faq.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 pr-8">
                              {faq.question}
                            </h3>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {openItems[faq.id] ? (
                              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </button>

                      {openItems[faq.id] && (
                        <div className="px-6 pb-6">
                          <div className="prose prose-blue max-w-none">
                            <div className="text-gray-700 whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </div>

                          {/* Metadata */}
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <ClockIcon className="h-3 w-3" />
                                {getLocalizedText('lastUpdated')}: {faq.lastUpdated}
                              </div>
                              {faq.sources && faq.sources.length > 0 && (
                                <div className="flex items-center gap-1">
                                  <TagIcon className="h-3 w-3" />
                                  {getLocalizedText('sources')}: {faq.sources[0].type}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
