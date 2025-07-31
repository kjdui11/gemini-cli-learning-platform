'use client'

import { useState, useMemo } from 'react'
import { 
  MagnifyingGlassIcon,
  CommandLineIcon,
  DocumentDuplicateIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  CogIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import { commands, commandCategories, searchCommands, getCommandsByCategory, type Command } from '@/data/commands'
import { commandsTranslations } from '@/data/commands-translations'

interface EnhancedCommandsContentProps {
  locale: string
}

export default function EnhancedCommandsContent({ locale }: EnhancedCommandsContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedCommands, setExpandedCommands] = useState<Record<string, boolean>>({})

  // Get translations for current locale
  const t = commandsTranslations[locale] || commandsTranslations['en']

  // Get translated command content
  const getTranslatedCommand = (command: Command) => {
    if (locale === 'en' || !t.commandDescriptions) {
      return command
    }

    const translated = t.commandDescriptions[command.id]
    if (translated) {
      return {
        ...command,
        description: translated.description,
        examples: translated.examples.map((ex, index) => ({
          ...command.examples[index],
          description: ex.description,
          command: ex.command
        })),
        notes: translated.notes || command.notes
      }
    }
    return command
  }

  // Filter commands based on search and category
  const filteredCommands = useMemo(() => {
    let result = commands

    if (searchQuery.trim()) {
      result = searchCommands(searchQuery)
    }

    if (selectedCategory !== 'all') {
      result = result.filter(cmd => cmd.category === selectedCategory)
    }

    return result.map(getTranslatedCommand)
  }, [searchQuery, selectedCategory, locale])

  const toggleCommand = (commandId: string) => {
    setExpandedCommands(prev => ({
      ...prev,
      [commandId]: !prev[commandId]
    }))
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      core: BoltIcon,
      auth: ShieldCheckIcon,
      config: CogIcon,
      analysis: MagnifyingGlassIcon,
      advanced: RocketLaunchIcon
    }
    return icons[category] || CommandLineIcon
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      core: 'bg-blue-100 text-blue-800 border-blue-200',
      auth: 'bg-green-100 text-green-800 border-green-200',
      config: 'bg-purple-100 text-purple-800 border-purple-200',
      analysis: 'bg-orange-100 text-orange-800 border-orange-200',
      advanced: 'bg-red-100 text-red-800 border-red-200'
    }
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <CommandLineIcon className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.subtitle}
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
                placeholder={t.searchPlaceholder}
              />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {t.allCommands}
                </button>
                {Object.entries(commandCategories).map(([key, category]) => {
                  const IconComponent = getCategoryIcon(key)
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        selectedCategory === key
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {t.categories[key as keyof typeof t.categories].name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-sm text-gray-600">
              {filteredCommands.length} {filteredCommands.length === 1 ? t.command : t.commands} {t.commandsFound}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      {selectedCategory === 'all' && !searchQuery && (
        <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.quickStartTitle}</h2>
                <p className="text-lg text-gray-600">{t.quickStartSubtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.step1Title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm">npm install -g @google/gemini-cli</code>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm">gemini auth</code>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{t.step1Desc}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.step2Title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm">gemini chat</code>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm">gemini ask "How do I...?"</code>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{t.step2Desc}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.step3Title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm">gemini analyze app.js</code>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm">gemini analyze . --recursive</code>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{t.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Commands List */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {filteredCommands.length === 0 ? (
              <div className="text-center py-12">
                <CommandLineIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">{t.noCommandsFound}</h3>
                <p className="mt-1 text-sm text-gray-500">{t.noCommandsDesc}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredCommands.map((command) => {
                  const IconComponent = getCategoryIcon(command.category)
                  const isExpanded = expandedCommands[command.id]
                  
                  return (
                    <div key={command.id} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                      <button
                        onClick={() => toggleCommand(command.id)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <IconComponent className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(command.category)}`}>
                                {t.categories[command.category as keyof typeof t.categories].name}
                              </span>
                              {command.aliases && (
                                <div className="flex gap-1">
                                  {command.aliases.slice(0, 2).map(alias => (
                                    <span key={alias} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                      {alias}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-gray-900 font-mono">
                                gemini {command.name}
                              </h3>
                            </div>
                            <p className="text-gray-600 mb-2">{command.description}</p>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <code className="text-sm text-gray-800 font-mono">{command.syntax}</code>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {isExpanded ? (
                              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6">
                          {/* Options */}
                          {command.options && command.options.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <CogIcon className="h-5 w-5" />
                                {t.options}
                              </h4>
                              <div className="space-y-3">
                                {command.options.map((option, index) => (
                                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                          <code className="text-sm font-mono text-blue-600">{option.name}</code>
                                          <span className="text-xs text-gray-500">({option.type})</span>
                                          {option.required && (
                                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{t.required}</span>
                                          )}
                                        </div>
                                        <p className="text-sm text-gray-600">{option.description}</p>
                                        {option.default && (
                                          <p className="text-xs text-gray-500 mt-1">{t.default}: {option.default}</p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Examples */}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <BookOpenIcon className="h-5 w-5" />
                              {t.examples}
                            </h4>
                            <div className="space-y-4">
                              {command.examples.map((example, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4">
                                  <p className="text-sm text-gray-700 mb-2">{example.description}</p>
                                  <div className="bg-gray-900 rounded-lg p-3 relative group">
                                    <code className="text-green-400 text-sm font-mono">{example.command}</code>
                                    <button
                                      onClick={() => copyToClipboard(example.command)}
                                      className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                      title="Copy command"
                                    >
                                      <DocumentDuplicateIcon className="h-4 w-4" />
                                    </button>
                                  </div>
                                  {example.output && (
                                    <div className="mt-2 bg-gray-100 rounded-lg p-3">
                                      <p className="text-xs text-gray-600 mb-1">{t.output}:</p>
                                      <code className="text-sm text-gray-800">{example.output}</code>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Notes */}
                          {command.notes && command.notes.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <InformationCircleIcon className="h-5 w-5" />
                                {t.notes}
                              </h4>
                              <ul className="space-y-2">
                                {command.notes.map((note, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span className="text-sm text-gray-700">{note}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Related Commands */}
                          {command.relatedCommands && command.relatedCommands.length > 0 && (
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">{t.relatedCommands}</h4>
                              <div className="flex flex-wrap gap-2">
                                {command.relatedCommands.map((relatedId) => (
                                  <button
                                    key={relatedId}
                                    onClick={() => {
                                      setSearchQuery('')
                                      setSelectedCategory('all')
                                      setTimeout(() => toggleCommand(relatedId), 100)
                                    }}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                                  >
                                    gemini {relatedId}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* Command Cheat Sheet */}
            {selectedCategory === 'all' && !searchQuery && (
              <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t.cheatSheetTitle}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <BoltIcon className="h-5 w-5 text-blue-600" />
                      {t.essentialCommands}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-blue-600">gemini chat</code>
                        <span className="text-sm text-gray-600">Interactive AI session</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-blue-600">gemini ask "question"</code>
                        <span className="text-sm text-gray-600">Quick question</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-blue-600">gemini analyze file</code>
                        <span className="text-sm text-gray-600">Analyze code</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-blue-600">gemini auth</code>
                        <span className="text-sm text-gray-600">Authenticate</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CommandLineIcon className="h-5 w-5 text-purple-600" />
                      {t.chatCommands}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-purple-600">/model name</code>
                        <span className="text-sm text-gray-600">Switch AI model</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-purple-600">/load file</code>
                        <span className="text-sm text-gray-600">Load file context</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-purple-600">/save file</code>
                        <span className="text-sm text-gray-600">Save conversation</span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <code className="text-sm font-mono text-purple-600">/clear</code>
                        <span className="text-sm text-gray-600">Clear history</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    💡 {t.tip} <code className="bg-white px-2 py-1 rounded text-blue-600">gemini help</code> or <code className="bg-white px-2 py-1 rounded text-blue-600">gemini --help</code> for more information
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
