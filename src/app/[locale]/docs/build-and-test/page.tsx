import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  WrenchScrewdriverIcon,
  BeakerIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CommandLineIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: 'Build and Test - Gemini CLI Documentation',
    en: 'Build and Test - Gemini CLI Documentation',
    hi: 'बिल्ड और टेस्ट - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Construction et Test - Documentation Gemini CLI',
    de: 'Build und Test - Gemini CLI Dokumentation',
    ja: 'ビルドとテスト - Gemini CLI ドキュメント',
    ko: '빌드 및 테스트 - Gemini CLI 문서',
    es: 'Construcción y Pruebas - Documentación Gemini CLI',
    ru: 'Сборка и тестирование - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Complete guide to building, testing, and debugging Gemini CLI including development workflows, testing strategies, and CI/CD processes.',
    en: 'Complete guide to building, testing, and debugging Gemini CLI including development workflows, testing strategies, and CI/CD processes.',
    hi: 'विकास वर्कफ़्लो, परीक्षण रणनीतियों और CI/CD प्रक्रियाओं सहित Gemini CLI के निर्माण, परीक्षण और डिबगिंग के लिए पूर्ण गाइड।',
    fr: 'Guide complet pour construire, tester et déboguer Gemini CLI, y compris les flux de travail de développement, les stratégies de test et les processus CI/CD.',
    de: 'Vollständiger Leitfaden zum Erstellen, Testen und Debuggen von Gemini CLI einschließlich Entwicklungsworkflows, Teststrategien und CI/CD-Prozessen.',
    ja: '開発ワークフロー、テスト戦略、CI/CDプロセスを含むGemini CLIの構築、テスト、デバッグの完全ガイド。',
    ko: '개발 워크플로, 테스트 전략 및 CI/CD 프로세스를 포함한 Gemini CLI 빌드, 테스트 및 디버깅에 대한 완전한 가이드.',
    es: 'Guía completa para construir, probar y depurar Gemini CLI, incluyendo flujos de trabajo de desarrollo, estrategias de prueba y procesos CI/CD.',
    ru: 'Полное руководство по сборке, тестированию и отладке Gemini CLI, включая рабочие процессы разработки, стратегии тестирования и процессы CI/CD.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

const getContent = (locale: string) => {
  const isZhOrEn = locale === 'zh' || locale === 'en'

  return {
    title: isZhOrEn ? 'Build and Test' : {
      hi: 'बिल्ड और टेस्ट',
      fr: 'Construction et Test',
      de: 'Build und Test',
      ja: 'ビルドとテスト',
      ko: '빌드 및 테스트',
      es: 'Construcción y Pruebas',
      ru: 'Сборка и тестирование'
    }[locale] || 'Build and Test',

    subtitle: isZhOrEn ? 'Complete guide to building, testing, and debugging Gemini CLI' : {
      hi: 'Gemini CLI के निर्माण, परीक्षण और डिबगिंग के लिए पूर्ण गाइड',
      fr: 'Guide complet pour construire, tester et déboguer Gemini CLI',
      de: 'Vollständiger Leitfaden zum Erstellen, Testen und Debuggen von Gemini CLI',
      ja: 'Gemini CLIの構築、テスト、デバッグの完全ガイド',
      ko: 'Gemini CLI 빌드, 테스트 및 디버깅에 대한 완전한 가이드',
      es: 'Guía completa para construir, probar y depurar Gemini CLI',
      ru: 'Полное руководство по сборке, тестированию и отладке Gemini CLI'
    }[locale] || 'Complete guide to building, testing, and debugging Gemini CLI',

    buildProcess: {
      title: isZhOrEn ? 'Build Process' : {
        hi: 'बिल्ड प्रक्रिया',
        fr: 'Processus de Construction',
        de: 'Build-Prozess',
        ja: 'ビルドプロセス',
        ko: '빌드 프로세스',
        es: 'Proceso de Construcción',
        ru: 'Процесс сборки'
      }[locale] || 'Build Process',

      subtitle: isZhOrEn ? 'Understanding the build system and development workflow' : {
        hi: 'बिल्ड सिस्टम और विकास वर्कफ़्लो को समझना',
        fr: 'Comprendre le système de construction et le flux de travail de développement',
        de: 'Verstehen des Build-Systems und Entwicklungsworkflows',
        ja: 'ビルドシステムと開発ワークフローの理解',
        ko: '빌드 시스템 및 개발 워크플로 이해',
        es: 'Comprensión del sistema de construcción y flujo de trabajo de desarrollo',
        ru: 'Понимание системы сборки и рабочего процесса разработки'
      }[locale] || 'Understanding the build system and development workflow',

      commands: [
        {
          command: 'npm run bootstrap',
          description: isZhOrEn ? 'Install dependencies and link packages' : {
            hi: 'डिपेंडेंसीज इंस्टॉल करें और पैकेजेस लिंक करें',
            fr: 'Installer les dépendances et lier les packages',
            de: 'Abhängigkeiten installieren und Pakete verknüpfen',
            ja: '依存関係をインストールしてパッケージをリンク',
            ko: '종속성 설치 및 패키지 연결',
            es: 'Instalar dependencias y enlazar paquetes',
            ru: 'Установить зависимости и связать пакеты'
          }[locale] || 'Install dependencies and link packages',
          usage: isZhOrEn ? 'Initial setup and after adding new dependencies' : {
            hi: 'प्रारंभिक सेटअप और नई डिपेंडेंसीज जोड़ने के बाद',
            fr: 'Configuration initiale et après ajout de nouvelles dépendances',
            de: 'Ersteinrichtung und nach Hinzufügen neuer Abhängigkeiten',
            ja: '初期設定と新しい依存関係を追加した後',
            ko: '초기 설정 및 새 종속성 추가 후',
            es: 'Configuración inicial y después de agregar nuevas dependencias',
            ru: 'Первоначальная настройка и после добавления новых зависимостей'
          }[locale] || 'Initial setup and after adding new dependencies'
        },
        {
          command: 'npm run build',
          description: isZhOrEn ? 'Build all packages in dependency order' : {
            hi: 'डिपेंडेंसी क्रम में सभी पैकेजेस बिल्ड करें',
            fr: 'Construire tous les packages dans l\'ordre des dépendances',
            de: 'Alle Pakete in Abhängigkeitsreihenfolge erstellen',
            ja: '依存関係の順序ですべてのパッケージをビルド',
            ko: '종속성 순서로 모든 패키지 빌드',
            es: 'Construir todos los paquetes en orden de dependencia',
            ru: 'Собрать все пакеты в порядке зависимостей'
          }[locale] || 'Build all packages in dependency order',
          usage: isZhOrEn ? 'Before testing or releasing' : {
            hi: 'टेस्टिंग या रिलीज़ से पहले',
            fr: 'Avant les tests ou la publication',
            de: 'Vor Tests oder Veröffentlichung',
            ja: 'テストまたはリリース前',
            ko: '테스트 또는 릴리스 전',
            es: 'Antes de probar o lanzar',
            ru: 'Перед тестированием или выпуском'
          }[locale] || 'Before testing or releasing'
        },
        {
          command: 'npm run build:watch',
          description: isZhOrEn ? 'Build packages in watch mode' : {
            hi: 'वॉच मोड में पैकेजेस बिल्ड करें',
            fr: 'Construire les packages en mode surveillance',
            de: 'Pakete im Watch-Modus erstellen',
            ja: 'ウォッチモードでパッケージをビルド',
            ko: '워치 모드에서 패키지 빌드',
            es: 'Construir paquetes en modo vigilancia',
            ru: 'Собрать пакеты в режиме наблюдения'
          }[locale] || 'Build packages in watch mode',
          usage: isZhOrEn ? 'During active development' : {
            hi: 'सक्रिय विकास के दौरान',
            fr: 'Pendant le développement actif',
            de: 'Während der aktiven Entwicklung',
            ja: 'アクティブな開発中',
            ko: '활발한 개발 중',
            es: 'Durante el desarrollo activo',
            ru: 'Во время активной разработки'
          }[locale] || 'During active development'
        },
        {
          command: 'npm run clean',
          description: isZhOrEn ? 'Clean build artifacts and node_modules' : {
            hi: 'बिल्ड आर्टिफैक्ट्स और node_modules साफ़ करें',
            fr: 'Nettoyer les artefacts de construction et node_modules',
            de: 'Build-Artefakte und node_modules bereinigen',
            ja: 'ビルドアーティファクトとnode_modulesをクリーン',
            ko: '빌드 아티팩트 및 node_modules 정리',
            es: 'Limpiar artefactos de construcción y node_modules',
            ru: 'Очистить артефакты сборки и node_modules'
          }[locale] || 'Clean build artifacts and node_modules',
          usage: isZhOrEn ? 'When encountering build issues' : {
            hi: 'बिल्ड समस्याओं का सामना करते समय',
            fr: 'Lors de problèmes de construction',
            de: 'Bei Build-Problemen',
            ja: 'ビルドの問題に遭遇したとき',
            ko: '빌드 문제 발생 시',
            es: 'Al encontrar problemas de construcción',
            ru: 'При возникновении проблем со сборкой'
          }[locale] || 'When encountering build issues'
        }
      ]
    },

    testFramework: {
      title: isZhOrEn ? 'Testing Framework' : {
        hi: 'टेस्टिंग फ्रेमवर्क',
        fr: 'Framework de Test',
        de: 'Test-Framework',
        ja: 'テストフレームワーク',
        ko: '테스트 프레임워크',
        es: 'Framework de Pruebas',
        ru: 'Тестовый фреймворк'
      }[locale] || 'Testing Framework',

      subtitle: isZhOrEn ? 'Comprehensive testing with Jest and TypeScript' : {
        hi: 'Jest और TypeScript के साथ व्यापक परीक्षण',
        fr: 'Tests complets avec Jest et TypeScript',
        de: 'Umfassende Tests mit Jest und TypeScript',
        ja: 'JestとTypeScriptによる包括的テスト',
        ko: 'Jest 및 TypeScript를 사용한 포괄적 테스트',
        es: 'Pruebas integrales con Jest y TypeScript',
        ru: 'Комплексное тестирование с Jest и TypeScript'
      }[locale] || 'Comprehensive testing with Jest and TypeScript',

      commands: [
        {
          command: 'npm run test',
          description: isZhOrEn ? 'Run all tests across packages' : {
            hi: 'सभी पैकेजेस में टेस्ट चलाएं',
            fr: 'Exécuter tous les tests sur les packages',
            de: 'Alle Tests über Pakete ausführen',
            ja: 'すべてのパッケージでテストを実行',
            ko: '모든 패키지에서 테스트 실행',
            es: 'Ejecutar todas las pruebas en los paquetes',
            ru: 'Запустить все тесты по пакетам'
          }[locale] || 'Run all tests across packages',
          usage: isZhOrEn ? 'Full test suite execution' : {
            hi: 'पूर्ण टेस्ट सूट निष्पादन',
            fr: 'Exécution complète de la suite de tests',
            de: 'Vollständige Testsuite-Ausführung',
            ja: '完全なテストスイートの実行',
            ko: '전체 테스트 스위트 실행',
            es: 'Ejecución completa de la suite de pruebas',
            ru: 'Выполнение полного набора тестов'
          }[locale] || 'Full test suite execution'
        },
        {
          command: 'npm run test:watch',
          description: isZhOrEn ? 'Run tests in watch mode' : {
            hi: 'वॉच मोड में टेस्ट चलाएं',
            fr: 'Exécuter les tests en mode surveillance',
            de: 'Tests im Watch-Modus ausführen',
            ja: 'ウォッチモードでテストを実行',
            ko: '워치 모드에서 테스트 실행',
            es: 'Ejecutar pruebas en modo vigilancia',
            ru: 'Запустить тесты в режиме наблюдения'
          }[locale] || 'Run tests in watch mode',
          usage: isZhOrEn ? 'During development' : {
            hi: 'विकास के दौरान',
            fr: 'Pendant le développement',
            de: 'Während der Entwicklung',
            ja: '開発中',
            ko: '개발 중',
            es: 'Durante el desarrollo',
            ru: 'Во время разработки'
          }[locale] || 'During development'
        },
        {
          command: 'npm run test:coverage',
          description: isZhOrEn ? 'Generate test coverage reports' : {
            hi: 'टेस्ट कवरेज रिपोर्ट जेनरेट करें',
            fr: 'Générer des rapports de couverture de test',
            de: 'Testabdeckungsberichte generieren',
            ja: 'テストカバレッジレポートを生成',
            ko: '테스트 커버리지 보고서 생성',
            es: 'Generar informes de cobertura de pruebas',
            ru: 'Генерировать отчеты о покрытии тестами'
          }[locale] || 'Generate test coverage reports',
          usage: isZhOrEn ? 'Quality assurance and CI/CD' : {
            hi: 'गुणवत्ता आश्वासन और CI/CD',
            fr: 'Assurance qualité et CI/CD',
            de: 'Qualitätssicherung und CI/CD',
            ja: '品質保証とCI/CD',
            ko: '품질 보증 및 CI/CD',
            es: 'Aseguramiento de calidad y CI/CD',
            ru: 'Обеспечение качества и CI/CD'
          }[locale] || 'Quality assurance and CI/CD'
        },
        {
          command: 'lerna run test --scope @gemini/core',
          description: isZhOrEn ? 'Run tests for specific package' : {
            hi: 'विशिष्ट पैकेज के लिए टेस्ट चलाएं',
            fr: 'Exécuter les tests pour un package spécifique',
            de: 'Tests für spezifisches Paket ausführen',
            ja: '特定のパッケージのテストを実行',
            ko: '특정 패키지에 대한 테스트 실행',
            es: 'Ejecutar pruebas para paquete específico',
            ru: 'Запустить тесты для конкретного пакета'
          }[locale] || 'Run tests for specific package',
          usage: isZhOrEn ? 'Focused testing' : {
            hi: 'केंद्रित परीक्षण',
            fr: 'Tests ciblés',
            de: 'Fokussierte Tests',
            ja: '集中テスト',
            ko: '집중 테스트',
            es: 'Pruebas enfocadas',
            ru: 'Целенаправленное тестирование'
          }[locale] || 'Focused testing'
        }
      ]
    },

    workflow: {
      title: isZhOrEn ? 'Development Workflow' : {
        hi: 'विकास वर्कफ़्लो',
        fr: 'Flux de Travail de Développement',
        de: 'Entwicklungsworkflow',
        ja: '開発ワークフロー',
        ko: '개발 워크플로',
        es: 'Flujo de Trabajo de Desarrollo',
        ru: 'Рабочий процесс разработки'
      }[locale] || 'Development Workflow',

      subtitle: isZhOrEn ? 'Recommended development and testing workflow' : {
        hi: 'अनुशंसित विकास और परीक्षण वर्कफ़्लो',
        fr: 'Flux de travail de développement et de test recommandé',
        de: 'Empfohlener Entwicklungs- und Test-Workflow',
        ja: '推奨される開発およびテストワークフロー',
        ko: '권장 개발 및 테스트 워크플로',
        es: 'Flujo de trabajo de desarrollo y pruebas recomendado',
        ru: 'Рекомендуемый рабочий процесс разработки и тестирования'
      }[locale] || 'Recommended development and testing workflow',

      steps: [
        {
          title: isZhOrEn ? 'Initial Setup' : {
            hi: 'प्रारंभिक सेटअप',
            fr: 'Configuration Initiale',
            de: 'Ersteinrichtung',
            ja: '初期設定',
            ko: '초기 설정',
            es: 'Configuración Inicial',
            ru: 'Первоначальная настройка'
          }[locale] || 'Initial Setup',
          description: isZhOrEn ? 'Set up development environment and install dependencies' : {
            hi: 'विकास वातावरण सेट करें और निर्भरताएं स्थापित करें',
            fr: 'Configurer l\'environnement de développement et installer les dépendances',
            de: 'Entwicklungsumgebung einrichten und Abhängigkeiten installieren',
            ja: '開発環境をセットアップして依存関係をインストール',
            ko: '개발 환경 설정 및 종속성 설치',
            es: 'Configurar entorno de desarrollo e instalar dependencias',
            ru: 'Настроить среду разработки и установить зависимости'
          }[locale] || 'Set up development environment and install dependencies',
          command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
        },
        {
          title: isZhOrEn ? 'Development Mode' : {
            hi: 'विकास मोड',
            fr: 'Mode Développement',
            de: 'Entwicklungsmodus',
            ja: '開発モード',
            ko: '개발 모드',
            es: 'Modo de Desarrollo',
            ru: 'Режим разработки'
          }[locale] || 'Development Mode',
          description: isZhOrEn ? 'Start watch mode for automatic rebuilding' : {
            hi: 'स्वचालित पुनर्निर्माण के लिए वॉच मोड शुरू करें',
            fr: 'Démarrer le mode surveillance pour la reconstruction automatique',
            de: 'Watch-Modus für automatisches Neuerstellen starten',
            ja: '自動再構築のためのウォッチモードを開始',
            ko: '자동 재빌드를 위한 워치 모드 시작',
            es: 'Iniciar modo vigilancia para reconstrucción automática',
            ru: 'Запустить режим наблюдения для автоматической пересборки'
          }[locale] || 'Start watch mode for automatic rebuilding',
          command: 'npm run build:watch'
        },
        {
          title: isZhOrEn ? 'Testing' : {
            hi: 'परीक्षण',
            fr: 'Tests',
            de: 'Testen',
            ja: 'テスト',
            ko: '테스트',
            es: 'Pruebas',
            ru: 'Тестирование'
          }[locale] || 'Testing',
          description: isZhOrEn ? 'Continuously run tests during development' : {
            hi: 'विकास के दौरान निरंतर परीक्षण चलाएं',
            fr: 'Exécuter continuellement les tests pendant le développement',
            de: 'Tests kontinuierlich während der Entwicklung ausführen',
            ja: '開発中に継続的にテストを実行',
            ko: '개발 중 지속적으로 테스트 실행',
            es: 'Ejecutar pruebas continuamente durante el desarrollo',
            ru: 'Непрерывно запускать тесты во время разработки'
          }[locale] || 'Continuously run tests during development',
          command: 'npm run test:watch'
        },
        {
          title: isZhOrEn ? 'Quality Check' : {
            hi: 'गुणवत्ता जांच',
            fr: 'Contrôle Qualité',
            de: 'Qualitätsprüfung',
            ja: '品質チェック',
            ko: '품질 검사',
            es: 'Control de Calidad',
            ru: 'Проверка качества'
          }[locale] || 'Quality Check',
          description: isZhOrEn ? 'Run code checks, formatting, and type checking before committing' : {
            hi: 'कमिट करने से पहले कोड चेक, फॉर्मेटिंग और टाइप चेकिंग चलाएं',
            fr: 'Exécuter les vérifications de code, le formatage et la vérification de type avant de committer',
            de: 'Code-Checks, Formatierung und Typprüfung vor dem Commit ausführen',
            ja: 'コミット前にコードチェック、フォーマット、型チェックを実行',
            ko: '커밋 전에 코드 검사, 포맷팅 및 타입 검사 실행',
            es: 'Ejecutar verificaciones de código, formateo y verificación de tipos antes de confirmar',
            ru: 'Запустить проверки кода, форматирование и проверку типов перед коммитом'
          }[locale] || 'Run code checks, formatting, and type checking before committing',
          command: 'npm run lint && npm run type-check && npm run test:coverage'
        }
      ]
    },

    relatedResources: {
      title: isZhOrEn ? 'Related Resources' : {
        hi: 'संबंधित संसाधन',
        fr: 'Ressources Connexes',
        de: 'Verwandte Ressourcen',
        ja: '関連リソース',
        ko: '관련 리소스',
        es: 'Recursos Relacionados',
        ru: 'Связанные ресурсы'
      }[locale] || 'Related Resources',

      subtitle: isZhOrEn ? 'Continue exploring the development documentation' : {
        hi: 'विकास दस्तावेज़ीकरण की खोज जारी रखें',
        fr: 'Continuez à explorer la documentation de développement',
        de: 'Setzen Sie die Erkundung der Entwicklungsdokumentation fort',
        ja: '開発ドキュメントの探索を続ける',
        ko: '개발 문서 탐색 계속하기',
        es: 'Continúe explorando la documentación de desarrollo',
        ru: 'Продолжите изучение документации по разработке'
      }[locale] || 'Continue exploring the development documentation',

      links: [
        {
          title: isZhOrEn ? 'Development Setup' : {
            hi: 'डेवलपमेंट सेटअप',
            fr: 'Configuration de Développement',
            de: 'Entwicklungsumgebung',
            ja: '開発環境セットアップ',
            ko: '개발 환경 설정',
            es: 'Configuración de Desarrollo',
            ru: 'Настройка разработки'
          }[locale] || 'Development Setup',
          href: 'development-setup',
          primary: true
        },
        {
          title: isZhOrEn ? 'Project Structure' : {
            hi: 'प्रोजेक्ट संरचना',
            fr: 'Structure du Projet',
            de: 'Projektstruktur',
            ja: 'プロジェクト構造',
            ko: '프로젝트 구조',
            es: 'Estructura del Proyecto',
            ru: 'Структура проекта'
          }[locale] || 'Project Structure',
          href: 'project-structure',
          primary: false
        },
        {
          title: isZhOrEn ? 'Contributing Guide' : {
            hi: 'योगदान गाइड',
            fr: 'Guide de Contribution',
            de: 'Beitragsleitfaden',
            ja: '貢献ガイド',
            ko: '기여 가이드',
            es: 'Guía de Contribución',
            ru: 'Руководство по участию'
          }[locale] || 'Contributing Guide',
          href: 'contributing-guide',
          primary: false
        }
      ]
    }
  }
}

export default async function BuildAndTestPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  const content = getContent(locale)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-green-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Build Process */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.buildProcess.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.buildProcess.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.buildProcess.commands.map((cmd, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-green-400 text-sm font-mono">
                        {cmd.command}
                      </code>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {cmd.description}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Usage: </span>
                      {cmd.usage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testing Framework */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.testFramework.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.testFramework.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testFramework.commands.map((cmd, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-3 mb-4">
                  <BeakerIcon className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                        {cmd.command}
                      </code>
                    </h3>
                    <p className="text-gray-700 mb-2">{cmd.description}</p>
                    <p className="text-sm text-gray-600">
                      <strong>Usage:</strong> {cmd.usage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Workflow */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.workflow.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.workflow.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.workflow.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{step.description}</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm font-mono">
                        {step.command}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.relatedResources.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.relatedResources.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {content.relatedResources.links.map((link, index) => (
                <Link
                  key={index}
                  href={`/${locale}/docs/${link.href}`}
                  className={`rounded-lg px-6 py-3 text-base font-semibold transition-colors ${
                    link.primary
                      ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                      : index === 1
                      ? 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'hi' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'es' },
    { locale: 'ru' }
  ]
}
