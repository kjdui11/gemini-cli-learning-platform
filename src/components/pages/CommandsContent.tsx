'use client'

import { useState } from 'react'
import {
  CommandLineIcon,
  DocumentTextIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

interface CommandsContentProps {
  locale: string
}

export default function CommandsContent({ locale }: CommandsContentProps) {
  const [searchTerm, setSearchTerm] = useState('')

  // Get translations based on locale
  const getTranslations = (locale: string) => {
    const translations: Record<string, any> = {
      en: {
        title: 'Command Reference',
        subtitle: 'Complete reference for all built-in Gemini CLI commands and features',
        searchPlaceholder: 'Search commands...',
        categories: {
          basic: 'Slash Commands (/)',
          advanced: 'At Commands (@)',
          configuration: 'Shell Commands (!)',
          utilities: 'Custom Commands'
        },
        descriptions: {
          basic: 'Core commands for daily use',
          advanced: 'Advanced file and content operations',
          configuration: 'System configuration and settings',
          utilities: 'Helper tools and utilities'
        },
        comingSoon: {
          title: 'Detailed Documentation Coming Soon',
          description: 'We are preparing comprehensive command reference documentation with detailed parameter descriptions, usage examples, and best practices.',
          quickRef: {
            title: '💡 Quick Reference',
            content: 'Use gemini --help to see available commands'
          },
          getHelp: {
            title: '📚 Get Help',
            content: 'Use gemini help [command] for specific command help'
          }
        }
      },
      zh: {
        title: '命令参考',
        subtitle: '所有内置 Gemini CLI 命令和功能的完整参考',
        searchPlaceholder: '搜索命令...',
        categories: {
          basic: '斜杠命令 (/)',
          advanced: 'At 命令 (@)',
          configuration: 'Shell 命令 (!)',
          utilities: '自定义命令'
        },
        descriptions: {
          basic: '日常使用的核心命令',
          advanced: '高级文件和内容操作',
          configuration: '系统配置和设置',
          utilities: '辅助工具和实用功能'
        },
        comingSoon: {
          title: '详细文档即将推出',
          description: '我们正在准备完整的命令参考文档，包括详细的参数说明、使用示例和最佳实践。',
          quickRef: {
            title: '💡 临时参考',
            content: '使用 gemini --help 查看可用命令列表'
          },
          getHelp: {
            title: '📚 获取帮助',
            content: '使用 gemini help [command] 获取特定命令的帮助'
          }
        }
      },
      hi: {
        title: 'कमांड संदर्भ',
        subtitle: 'सभी अंतर्निहित Gemini CLI कमांड और सुविधाओं के लिए पूर्ण संदर्भ',
        searchPlaceholder: 'कमांड खोजें...',
        categories: {
          basic: 'स्लैश कमांड (/)',
          advanced: 'एट कमांड (@)',
          configuration: 'शेल कमांड (!)',
          utilities: 'कस्टम कमांड'
        },
        descriptions: {
          basic: 'दैनिक उपयोग के लिए मुख्य कमांड',
          advanced: 'उन्नत फ़ाइल और सामग्री संचालन',
          configuration: 'सिस्टम कॉन्फ़िगरेशन और सेटिंग्स',
          utilities: 'सहायक उपकरण और उपयोगिताएं'
        },
        comingSoon: {
          title: 'विस्तृत दस्तावेज़ीकरण जल्द आ रहा है',
          description: 'हम विस्तृत पैरामीटर विवरण, उपयोग उदाहरण और सर्वोत्तम प्रथाओं के साथ व्यापक कमांड संदर्भ दस्तावेज़ीकरण तैयार कर रहे हैं।',
          quickRef: {
            title: '💡 त्वरित संदर्भ',
            content: 'उपलब्ध कमांड देखने के लिए gemini --help का उपयोग करें'
          },
          getHelp: {
            title: '📚 सहायता प्राप्त करें',
            content: 'विशिष्ट कमांड सहायता के लिए gemini help [command] का उपयोग करें'
          }
        }
      },
      fr: {
        title: 'Référence des Commandes',
        subtitle: 'Référence complète pour toutes les commandes et fonctionnalités intégrées de Gemini CLI',
        searchPlaceholder: 'Rechercher des commandes...',
        categories: {
          basic: 'Commandes Slash (/)',
          advanced: 'Commandes At (@)',
          configuration: 'Commandes Shell (!)',
          utilities: 'Commandes Personnalisées'
        },
        descriptions: {
          basic: 'Commandes principales pour un usage quotidien',
          advanced: 'Opérations avancées de fichiers et de contenu',
          configuration: 'Configuration système et paramètres',
          utilities: 'Outils d\'aide et utilitaires'
        },
        comingSoon: {
          title: 'Documentation Détaillée Bientôt Disponible',
          description: 'Nous préparons une documentation de référence complète avec des descriptions détaillées des paramètres, des exemples d\'utilisation et les meilleures pratiques.',
          quickRef: {
            title: '💡 Référence Rapide',
            content: 'Utilisez gemini --help pour voir les commandes disponibles'
          },
          getHelp: {
            title: '📚 Obtenir de l\'Aide',
            content: 'Utilisez gemini help [command] pour l\'aide spécifique à une commande'
          }
        }
      },
      de: {
        title: 'Befehlsreferenz',
        subtitle: 'Vollständige Referenz für alle integrierten Gemini CLI-Befehle und -Funktionen',
        searchPlaceholder: 'Befehle suchen...',
        categories: {
          basic: 'Slash-Befehle (/)',
          advanced: 'At-Befehle (@)',
          configuration: 'Shell-Befehle (!)',
          utilities: 'Benutzerdefinierte Befehle'
        },
        descriptions: {
          basic: 'Kernbefehle für den täglichen Gebrauch',
          advanced: 'Erweiterte Datei- und Inhaltsoperationen',
          configuration: 'Systemkonfiguration und Einstellungen',
          utilities: 'Hilfswerkzeuge und Dienstprogramme'
        },
        comingSoon: {
          title: 'Detaillierte Dokumentation Kommt Bald',
          description: 'Wir bereiten eine umfassende Befehlsreferenz-Dokumentation mit detaillierten Parameterbeschreibungen, Verwendungsbeispielen und bewährten Praktiken vor.',
          quickRef: {
            title: '💡 Schnellreferenz',
            content: 'Verwenden Sie gemini --help, um verfügbare Befehle zu sehen'
          },
          getHelp: {
            title: '📚 Hilfe Erhalten',
            content: 'Verwenden Sie gemini help [command] für spezifische Befehlshilfe'
          }
        }
      },
      ja: {
        title: 'コマンドリファレンス',
        subtitle: 'すべての組み込みGemini CLIコマンドと機能の完全なリファレンス',
        searchPlaceholder: 'コマンドを検索...',
        categories: {
          basic: 'スラッシュコマンド (/)',
          advanced: 'アットコマンド (@)',
          configuration: 'シェルコマンド (!)',
          utilities: 'カスタムコマンド'
        },
        descriptions: {
          basic: '日常使用のためのコアコマンド',
          advanced: '高度なファイルとコンテンツ操作',
          configuration: 'システム設定と構成',
          utilities: 'ヘルパーツールとユーティリティ'
        },
        comingSoon: {
          title: '詳細ドキュメント近日公開',
          description: '詳細なパラメータ説明、使用例、ベストプラクティスを含む包括的なコマンドリファレンスドキュメントを準備中です。',
          quickRef: {
            title: '💡 クイックリファレンス',
            content: '利用可能なコマンドを見るには gemini --help を使用してください'
          },
          getHelp: {
            title: '📚 ヘルプを取得',
            content: '特定のコマンドのヘルプには gemini help [command] を使用してください'
          }
        }
      },
      ko: {
        title: '명령어 참조',
        subtitle: '모든 내장 Gemini CLI 명령어와 기능에 대한 완전한 참조',
        searchPlaceholder: '명령어 검색...',
        categories: {
          basic: '슬래시 명령어 (/)',
          advanced: '앳 명령어 (@)',
          configuration: '셸 명령어 (!)',
          utilities: '사용자 정의 명령어'
        },
        descriptions: {
          basic: '일상 사용을 위한 핵심 명령어',
          advanced: '고급 파일 및 콘텐츠 작업',
          configuration: '시스템 구성 및 설정',
          utilities: '도우미 도구 및 유틸리티'
        },
        comingSoon: {
          title: '상세 문서 곧 출시',
          description: '상세한 매개변수 설명, 사용 예제 및 모범 사례가 포함된 포괄적인 명령어 참조 문서를 준비 중입니다.',
          quickRef: {
            title: '💡 빠른 참조',
            content: '사용 가능한 명령어를 보려면 gemini --help를 사용하세요'
          },
          getHelp: {
            title: '📚 도움말 받기',
            content: '특정 명령어 도움말은 gemini help [command]를 사용하세요'
          }
        }
      },
      es: {
        title: 'Referencia de Comandos',
        subtitle: 'Referencia completa para todos los comandos y características integradas de Gemini CLI',
        searchPlaceholder: 'Buscar comandos...',
        categories: {
          basic: 'Comandos Slash (/)',
          advanced: 'Comandos At (@)',
          configuration: 'Comandos Shell (!)',
          utilities: 'Comandos Personalizados'
        },
        descriptions: {
          basic: 'Comandos principales para uso diario',
          advanced: 'Operaciones avanzadas de archivos y contenido',
          configuration: 'Configuración del sistema y ajustes',
          utilities: 'Herramientas de ayuda y utilidades'
        },
        comingSoon: {
          title: 'Documentación Detallada Próximamente',
          description: 'Estamos preparando documentación de referencia completa con descripciones detalladas de parámetros, ejemplos de uso y mejores prácticas.',
          quickRef: {
            title: '💡 Referencia Rápida',
            content: 'Use gemini --help para ver comandos disponibles'
          },
          getHelp: {
            title: '📚 Obtener Ayuda',
            content: 'Use gemini help [command] para ayuda específica del comando'
          }
        }
      },
      ru: {
        title: 'Справочник Команд',
        subtitle: 'Полный справочник по всем встроенным командам и функциям Gemini CLI',
        searchPlaceholder: 'Поиск команд...',
        categories: {
          basic: 'Slash Команды (/)',
          advanced: 'At Команды (@)',
          configuration: 'Shell Команды (!)',
          utilities: 'Пользовательские Команды'
        },
        descriptions: {
          basic: 'Основные команды для ежедневного использования',
          advanced: 'Продвинутые операции с файлами и контентом',
          configuration: 'Конфигурация системы и настройки',
          utilities: 'Вспомогательные инструменты и утилиты'
        },
        comingSoon: {
          title: 'Подробная Документация Скоро',
          description: 'Мы готовим комплексную справочную документацию с подробными описаниями параметров, примерами использования и лучшими практиками.',
          quickRef: {
            title: '💡 Быстрая Справка',
            content: 'Используйте gemini --help для просмотра доступных команд'
          },
          getHelp: {
            title: '📚 Получить Помощь',
            content: 'Используйте gemini help [command] для получения помощи по конкретной команде'
          }
        }
      }
    }
    return translations[locale as keyof typeof translations] || translations.en
  }

  const t = getTranslations(locale)

  const categoryIcons = {
    basic: CommandLineIcon,
    advanced: DocumentTextIcon,
    configuration: CogIcon,
    utilities: QuestionMarkCircleIcon
  }

  const categories = [
    {
      id: 'basic',
      title: t.categories.basic,
      icon: categoryIcons.basic
    },
    {
      id: 'advanced',
      title: t.categories.advanced,
      icon: categoryIcons.advanced
    },
    {
      id: 'configuration',
      title: t.categories.configuration,
      icon: categoryIcons.configuration
    },
    {
      id: 'utilities',
      title: t.categories.utilities,
      icon: categoryIcons.utilities
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-lg"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Command Categories */}
      <div className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <category.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {t.descriptions[category.id as keyof typeof t.descriptions]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.comingSoon.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.comingSoon.description}
            </p>
            <div className="mt-8 space-y-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t.comingSoon.quickRef.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.comingSoon.quickRef.content}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t.comingSoon.getHelp.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.comingSoon.getHelp.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
