import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  FolderIcon,
  DocumentTextIcon,
  CogIcon,
  CodeBracketIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: 'Project Structure - Gemini CLI Documentation',
    en: 'Project Structure - Gemini CLI Documentation',
    hi: 'प्रोजेक्ट संरचना - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Structure du Projet - Documentation Gemini CLI',
    de: 'Projektstruktur - Gemini CLI Dokumentation',
    ja: 'プロジェクト構造 - Gemini CLI ドキュメント',
    ko: '프로젝트 구조 - Gemini CLI 문서',
    es: 'Estructura del Proyecto - Documentación Gemini CLI',
    ru: 'Структура проекта - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Understanding the codebase organization and architecture of Gemini CLI including package structure, module organization, and development workflow.',
    en: 'Understanding the codebase organization and architecture of Gemini CLI including package structure, module organization, and development workflow.',
    hi: 'पैकेज संरचना, मॉड्यूल संगठन और विकास वर्कफ़्लो सहित Gemini CLI के कोडबेस संगठन और आर्किटेक्चर को समझना।',
    fr: 'Comprendre l\'organisation de la base de code et l\'architecture de Gemini CLI, y compris la structure des packages, l\'organisation des modules et le flux de travail de développement.',
    de: 'Verstehen der Codebase-Organisation und Architektur von Gemini CLI einschließlich Paketstruktur, Modulorganisation und Entwicklungsworkflow.',
    ja: 'パッケージ構造、モジュール組織、開発ワークフローを含むGemini CLIのコードベース組織とアーキテクチャの理解。',
    ko: '패키지 구조, 모듈 조직 및 개발 워크플로를 포함한 Gemini CLI의 코드베이스 조직 및 아키텍처 이해.',
    es: 'Comprensión de la organización de la base de código y la arquitectura de Gemini CLI, incluyendo la estructura de paquetes, organización de módulos y flujo de trabajo de desarrollo.',
    ru: 'Понимание организации кодовой базы и архитектуры Gemini CLI, включая структуру пакетов, организацию модулей и рабочий процесс разработки.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

const getContent = (locale: string) => {
  const isZhOrEn = locale === 'zh' || locale === 'en'

  return {
    title: isZhOrEn ? 'Project Structure' : {
      hi: 'प्रोजेक्ट संरचना',
      fr: 'Structure du Projet',
      de: 'Projektstruktur',
      ja: 'プロジェクト構造',
      ko: '프로젝트 구조',
      es: 'Estructura del Proyecto',
      ru: 'Структура проекта'
    }[locale] || 'Project Structure',

    subtitle: isZhOrEn ? 'Understanding the codebase organization and architecture of Gemini CLI' : {
      hi: 'Gemini CLI के कोडबेस संगठन और आर्किटेक्चर को समझना',
      fr: 'Comprendre l\'organisation de la base de code et l\'architecture de Gemini CLI',
      de: 'Verstehen der Codebase-Organisation und Architektur von Gemini CLI',
      ja: 'Gemini CLIのコードベース組織とアーキテクチャの理解',
      ko: 'Gemini CLI의 코드베이스 조직 및 아키텍처 이해',
      es: 'Comprensión de la organización de la base de código y la arquitectura de Gemini CLI',
      ru: 'Понимание организации кодовой базы и архитектуры Gemini CLI'
    }[locale] || 'Understanding the codebase organization and architecture of Gemini CLI',

    overview: {
      title: isZhOrEn ? 'Project Overview' : {
        hi: 'प्रोजेक्ट अवलोकन',
        fr: 'Aperçu du Projet',
        de: 'Projektübersicht',
        ja: 'プロジェクト概要',
        ko: '프로젝트 개요',
        es: 'Resumen del Proyecto',
        ru: 'Обзор проекта'
      }[locale] || 'Project Overview',

      subtitle: isZhOrEn ? 'Gemini CLI is organized as a monorepo with multiple interconnected packages' : {
        hi: 'Gemini CLI को कई परस्पर जुड़े पैकेजों के साथ एक मोनोरेपो के रूप में व्यवस्थित किया गया है',
        fr: 'Gemini CLI est organisé comme un monorepo avec plusieurs packages interconnectés',
        de: 'Gemini CLI ist als Monorepo mit mehreren miteinander verbundenen Paketen organisiert',
        ja: 'Gemini CLIは複数の相互接続されたパッケージを持つモノレポとして組織されています',
        ko: 'Gemini CLI는 여러 상호 연결된 패키지가 있는 모노레포로 구성됩니다',
        es: 'Gemini CLI está organizado como un monorepo con múltiples paquetes interconectados',
        ru: 'Gemini CLI организован как монорепо с несколькими взаимосвязанными пакетами'
      }[locale] || 'Gemini CLI is organized as a monorepo with multiple interconnected packages',

      description: isZhOrEn ? 'Gemini CLI is a Lerna-based monorepo project that modularizes functionality into independent packages for easier development, testing, and maintenance.' : {
        hi: 'Gemini CLI एक Lerna-आधारित मोनोरेपो प्रोजेक्ट है जो आसान विकास, परीक्षण और रखरखाव के लिए कार्यक्षमता को स्वतंत्र पैकेजों में मॉड्यूलराइज़ करता है।',
        fr: 'Gemini CLI est un projet monorepo basé sur Lerna qui modularise les fonctionnalités en packages indépendants pour faciliter le développement, les tests et la maintenance.',
        de: 'Gemini CLI ist ein Lerna-basiertes Monorepo-Projekt, das Funktionalitäten in unabhängige Pakete modularisiert für einfachere Entwicklung, Tests und Wartung.',
        ja: 'Gemini CLIは、開発、テスト、メンテナンスを容易にするために機能を独立したパッケージにモジュール化するLernaベースのモノレポプロジェクトです。',
        ko: 'Gemini CLI는 더 쉬운 개발, 테스트 및 유지 관리를 위해 기능을 독립적인 패키지로 모듈화하는 Lerna 기반 모노레포 프로젝트입니다.',
        es: 'Gemini CLI es un proyecto monorepo basado en Lerna que modulariza la funcionalidad en paquetes independientes para facilitar el desarrollo, las pruebas y el mantenimiento.',
        ru: 'Gemini CLI - это проект монорепо на основе Lerna, который модуляризует функциональность в независимые пакеты для упрощения разработки, тестирования и обслуживания.'
      }[locale] || 'Gemini CLI is a Lerna-based monorepo project that modularizes functionality into independent packages for easier development, testing, and maintenance.'
    },

    packages: [
      {
        name: isZhOrEn ? 'CLI Package' : {
          hi: 'CLI पैकेज',
          fr: 'Package CLI',
          de: 'CLI-Paket',
          ja: 'CLIパッケージ',
          ko: 'CLI 패키지',
          es: 'Paquete CLI',
          ru: 'CLI пакет'
        }[locale] || 'CLI Package',
        path: 'packages/cli',
        description: isZhOrEn ? 'Main command-line interface and user-facing commands' : {
          hi: 'मुख्य कमांड-लाइन इंटरफेस और उपयोगकर्ता-सामना करने वाले कमांड',
          fr: 'Interface de ligne de commande principale et commandes orientées utilisateur',
          de: 'Haupt-Kommandozeilenschnittstelle und benutzerseitige Befehle',
          ja: 'メインのコマンドラインインターフェースとユーザー向けコマンド',
          ko: '주요 명령줄 인터페이스 및 사용자 대면 명령',
          es: 'Interfaz de línea de comandos principal y comandos orientados al usuario',
          ru: 'Основной интерфейс командной строки и пользовательские команды'
        }[locale] || 'Main command-line interface and user-facing commands',
        icon: CommandLineIcon,
        color: 'from-blue-500 to-indigo-600',
        responsibilities: isZhOrEn ? [
          'Command parsing and routing',
          'User interface and interaction',
          'Configuration management',
          'Error handling and reporting',
          'Help and documentation display'
        ] : {
          hi: [
            'कमांड पार्सिंग और रूटिंग',
            'उपयोगकर्ता इंटरफेस और इंटरैक्शन',
            'कॉन्फ़िगरेशन प्रबंधन',
            'त्रुटि हैंडलिंग और रिपोर्टिंग',
            'सहायता और दस्तावेज़ीकरण प्रदर्शन'
          ],
          fr: [
            'Analyse et routage des commandes',
            'Interface utilisateur et interaction',
            'Gestion de la configuration',
            'Gestion et rapport d\'erreurs',
            'Affichage de l\'aide et de la documentation'
          ],
          de: [
            'Befehlsanalyse und -routing',
            'Benutzeroberfläche und Interaktion',
            'Konfigurationsverwaltung',
            'Fehlerbehandlung und -berichterstattung',
            'Hilfe- und Dokumentationsanzeige'
          ],
          ja: [
            'コマンドの解析とルーティング',
            'ユーザーインターフェースとインタラクション',
            '設定管理',
            'エラーハンドリングとレポート',
            'ヘルプとドキュメント表示'
          ],
          ko: [
            '명령 구문 분석 및 라우팅',
            '사용자 인터페이스 및 상호 작용',
            '구성 관리',
            '오류 처리 및 보고',
            '도움말 및 문서 표시'
          ],
          es: [
            'Análisis y enrutamiento de comandos',
            'Interfaz de usuario e interacción',
            'Gestión de configuración',
            'Manejo y reporte de errores',
            'Visualización de ayuda y documentación'
          ],
          ru: [
            'Разбор и маршрутизация команд',
            'Пользовательский интерфейс и взаимодействие',
            'Управление конфигурацией',
            'Обработка и отчетность ошибок',
            'Отображение справки и документации'
          ]
        }[locale] || [
          'Command parsing and routing',
          'User interface and interaction',
          'Configuration management',
          'Error handling and reporting',
          'Help and documentation display'
        ],
      },
      {
        name: isZhOrEn ? 'Core Package' : {
          hi: 'कोर पैकेज',
          fr: 'Package Core',
          de: 'Core-Paket',
          ja: 'コアパッケージ',
          ko: '코어 패키지',
          es: 'Paquete Core',
          ru: 'Основной пакет'
        }[locale] || 'Core Package',
        path: 'packages/core',
        description: isZhOrEn ? 'Core functionality and business logic' : {
          hi: 'मुख्य कार्यक्षमता और व्यावसायिक तर्क',
          fr: 'Fonctionnalité principale et logique métier',
          de: 'Kernfunktionalität und Geschäftslogik',
          ja: 'コア機能とビジネスロジック',
          ko: '핵심 기능 및 비즈니스 로직',
          es: 'Funcionalidad principal y lógica de negocio',
          ru: 'Основная функциональность и бизнес-логика'
        }[locale] || 'Core functionality and business logic',
        icon: CogIcon,
        color: 'from-green-500 to-emerald-600',
        responsibilities: isZhOrEn ? [
          'API client implementations',
          'Model interactions',
          'Tool management system',
          'MCP protocol handling',
          'State management'
        ] : {
          hi: [
            'API क्लाइंट कार्यान्वयन',
            'मॉडल इंटरैक्शन',
            'टूल प्रबंधन सिस्टम',
            'MCP प्रोटोकॉल हैंडलिंग',
            'स्टेट प्रबंधन'
          ],
          fr: [
            'Implémentations de client API',
            'Interactions de modèle',
            'Système de gestion d\'outils',
            'Gestion du protocole MCP',
            'Gestion d\'état'
          ],
          de: [
            'API-Client-Implementierungen',
            'Modell-Interaktionen',
            'Tool-Management-System',
            'MCP-Protokoll-Behandlung',
            'Zustandsverwaltung'
          ],
          ja: [
            'APIクライアント実装',
            'モデルインタラクション',
            'ツール管理システム',
            'MCPプロトコル処理',
            '状態管理'
          ],
          ko: [
            'API 클라이언트 구현',
            '모델 상호작용',
            '도구 관리 시스템',
            'MCP 프로토콜 처리',
            '상태 관리'
          ],
          es: [
            'Implementaciones de cliente API',
            'Interacciones de modelo',
            'Sistema de gestión de herramientas',
            'Manejo del protocolo MCP',
            'Gestión de estado'
          ],
          ru: [
            'Реализации API-клиента',
            'Взаимодействие с моделями',
            'Система управления инструментами',
            'Обработка протокола MCP',
            'Управление состоянием'
          ]
        }[locale] || [
          'API client implementations',
          'Model interactions',
          'Tool management system',
          'MCP protocol handling',
          'State management'
        ]
      },
      {
        name: isZhOrEn ? 'Tools Package' : {
          hi: 'टूल्स पैकेज',
          fr: 'Package Outils',
          de: 'Tools-Paket',
          ja: 'ツールパッケージ',
          ko: '도구 패키지',
          es: 'Paquete de Herramientas',
          ru: 'Пакет инструментов'
        }[locale] || 'Tools Package',
        path: 'packages/tools',
        description: isZhOrEn ? 'Built-in tools and utilities' : {
          hi: 'अंतर्निहित उपकरण और उपयोगिताएं',
          fr: 'Outils intégrés et utilitaires',
          de: 'Eingebaute Tools und Dienstprogramme',
          ja: '組み込みツールとユーティリティ',
          ko: '내장 도구 및 유틸리티',
          es: 'Herramientas integradas y utilidades',
          ru: 'Встроенные инструменты и утилиты'
        }[locale] || 'Built-in tools and utilities',
        icon: PuzzlePieceIcon,
        color: 'from-purple-500 to-pink-600',
        responsibilities: isZhOrEn ? [
          'File system operations',
          'Shell command execution',
          'Web requests and searches',
          'Memory management',
          'Tool registration'
        ] : {
          hi: [
            'फ़ाइल सिस्टम ऑपरेशन',
            'शेल कमांड निष्पादन',
            'वेब अनुरोध और खोज',
            'मेमोरी प्रबंधन',
            'टूल पंजीकरण'
          ],
          fr: [
            'Opérations du système de fichiers',
            'Exécution de commandes shell',
            'Requêtes web et recherches',
            'Gestion de la mémoire',
            'Enregistrement d\'outils'
          ],
          de: [
            'Dateisystem-Operationen',
            'Shell-Befehl-Ausführung',
            'Web-Anfragen und Suchen',
            'Speicherverwaltung',
            'Tool-Registrierung'
          ],
          ja: [
            'ファイルシステム操作',
            'シェルコマンド実行',
            'Webリクエストと検索',
            'メモリ管理',
            'ツール登録'
          ],
          ko: [
            '파일 시스템 작업',
            '셸 명령 실행',
            '웹 요청 및 검색',
            '메모리 관리',
            '도구 등록'
          ],
          es: [
            'Operaciones del sistema de archivos',
            'Ejecución de comandos shell',
            'Solicitudes web y búsquedas',
            'Gestión de memoria',
            'Registro de herramientas'
          ],
          ru: [
            'Операции файловой системы',
            'Выполнение команд оболочки',
            'Веб-запросы и поиск',
            'Управление памятью',
            'Регистрация инструментов'
          ]
        }[locale] || [
          'File system operations',
          'Shell command execution',
          'Web requests and searches',
          'Memory management',
          'Tool registration'
        ]
      },
      {
        name: isZhOrEn ? 'Extensions Package' : {
          hi: 'एक्सटेंशन पैकेज',
          fr: 'Package Extensions',
          de: 'Extensions-Paket',
          ja: '拡張パッケージ',
          ko: '확장 패키지',
          es: 'Paquete de Extensiones',
          ru: 'Пакет расширений'
        }[locale] || 'Extensions Package',
        path: 'packages/extensions',
        description: isZhOrEn ? 'Extension system and plugin management' : {
          hi: 'एक्सटेंशन सिस्टम और प्लगइन प्रबंधन',
          fr: 'Système d\'extension et gestion de plugins',
          de: 'Erweiterungssystem und Plugin-Verwaltung',
          ja: '拡張システムとプラグイン管理',
          ko: '확장 시스템 및 플러그인 관리',
          es: 'Sistema de extensiones y gestión de plugins',
          ru: 'Система расширений и управление плагинами'
        }[locale] || 'Extension system and plugin management',
        icon: FolderIcon,
        color: 'from-orange-500 to-red-600',
        responsibilities: isZhOrEn ? [
          'Extension loading and management',
          'Plugin registry',
          'Extension API',
          'Lifecycle management',
          'Dependency resolution'
        ] : {
          hi: [
            'एक्सटेंशन लोडिंग और प्रबंधन',
            'प्लगइन रजिस्ट्री',
            'एक्सटेंशन API',
            'लाइफसाइकल प्रबंधन',
            'डिपेंडेंसी रिज़ॉल्यूशन'
          ],
          fr: [
            'Chargement et gestion d\'extensions',
            'Registre de plugins',
            'API d\'extension',
            'Gestion du cycle de vie',
            'Résolution de dépendances'
          ],
          de: [
            'Erweiterungsladung und -verwaltung',
            'Plugin-Registry',
            'Erweiterungs-API',
            'Lebenszyklus-Verwaltung',
            'Abhängigkeitsauflösung'
          ],
          ja: [
            '拡張機能の読み込みと管理',
            'プラグインレジストリ',
            '拡張API',
            'ライフサイクル管理',
            '依存関係解決'
          ],
          ko: [
            '확장 로딩 및 관리',
            '플러그인 레지스트리',
            '확장 API',
            '라이프사이클 관리',
            '종속성 해결'
          ],
          es: [
            'Carga y gestión de extensiones',
            'Registro de plugins',
            'API de extensión',
            'Gestión del ciclo de vida',
            'Resolución de dependencias'
          ],
          ru: [
            'Загрузка и управление расширениями',
            'Реестр плагинов',
            'API расширений',
            'Управление жизненным циклом',
            'Разрешение зависимостей'
          ]
        }[locale] || [
          'Extension loading and management',
          'Plugin registry',
          'Extension API',
          'Lifecycle management',
          'Dependency resolution'
        ]
      }
    ],

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

      subtitle: isZhOrEn ? 'How to work with the codebase effectively' : {
        hi: 'कोडबेस के साथ प्रभावी रूप से कैसे काम करें',
        fr: 'Comment travailler efficacement avec la base de code',
        de: 'Wie man effektiv mit der Codebasis arbeitet',
        ja: 'コードベースと効果的に作業する方法',
        ko: '코드베이스와 효과적으로 작업하는 방법',
        es: 'Cómo trabajar eficazmente con la base de código',
        ru: 'Как эффективно работать с кодовой базой'
      }[locale] || 'How to work with the codebase effectively',

      commands: [
        {
          category: isZhOrEn ? 'Global Commands' : {
            hi: 'ग्लोबल कमांड',
            fr: 'Commandes Globales',
            de: 'Globale Befehle',
            ja: 'グローバルコマンド',
            ko: '글로벌 명령',
            es: 'Comandos Globales',
            ru: 'Глобальные команды'
          }[locale] || 'Global Commands',
          items: [
            {
              command: 'npm run bootstrap',
              description: isZhOrEn ? 'Install and link all packages' : {
                hi: 'सभी पैकेजेस इंस्टॉल और लिंक करें',
                fr: 'Installer et lier tous les packages',
                de: 'Alle Pakete installieren und verknüpfen',
                ja: 'すべてのパッケージをインストールしてリンク',
                ko: '모든 패키지 설치 및 연결',
                es: 'Instalar y enlazar todos los paquetes',
                ru: 'Установить и связать все пакеты'
              }[locale] || 'Install and link all packages'
            },
            {
              command: 'npm run build',
              description: isZhOrEn ? 'Build all packages' : {
                hi: 'सभी पैकेजेस बिल्ड करें',
                fr: 'Construire tous les packages',
                de: 'Alle Pakete erstellen',
                ja: 'すべてのパッケージをビルド',
                ko: '모든 패키지 빌드',
                es: 'Construir todos los paquetes',
                ru: 'Собрать все пакеты'
              }[locale] || 'Build all packages'
            },
            {
              command: 'npm run test',
              description: isZhOrEn ? 'Run all tests' : {
                hi: 'सभी टेस्ट चलाएं',
                fr: 'Exécuter tous les tests',
                de: 'Alle Tests ausführen',
                ja: 'すべてのテストを実行',
                ko: '모든 테스트 실행',
                es: 'Ejecutar todas las pruebas',
                ru: 'Запустить все тесты'
              }[locale] || 'Run all tests'
            },
            {
              command: 'npm run lint',
              description: isZhOrEn ? 'Lint all packages' : {
                hi: 'सभी पैकेजेस को लिंट करें',
                fr: 'Linter tous les packages',
                de: 'Alle Pakete linten',
                ja: 'すべてのパッケージをリント',
                ko: '모든 패키지 린트',
                es: 'Lintear todos los paquetes',
                ru: 'Проверить все пакеты линтером'
              }[locale] || 'Lint all packages'
            }
          ]
        },
        {
          category: isZhOrEn ? 'Package-specific Commands' : {
            hi: 'पैकेज-विशिष्ट कमांड',
            fr: 'Commandes Spécifiques aux Packages',
            de: 'Paketspezifische Befehle',
            ja: 'パッケージ固有のコマンド',
            ko: '패키지별 명령',
            es: 'Comandos Específicos de Paquete',
            ru: 'Команды для конкретных пакетов'
          }[locale] || 'Package-specific Commands',
          items: [
            {
              command: 'lerna run build --scope @gemini/cli',
              description: isZhOrEn ? 'Build specific package' : {
                hi: 'विशिष्ट पैकेज बिल्ड करें',
                fr: 'Construire un package spécifique',
                de: 'Spezifisches Paket erstellen',
                ja: '特定のパッケージをビルド',
                ko: '특정 패키지 빌드',
                es: 'Construir paquete específico',
                ru: 'Собрать конкретный пакет'
              }[locale] || 'Build specific package'
            },
            {
              command: 'lerna run test --scope @gemini/core',
              description: isZhOrEn ? 'Test specific package' : {
                hi: 'विशिष्ट पैकेज टेस्ट करें',
                fr: 'Tester un package spécifique',
                de: 'Spezifisches Paket testen',
                ja: '特定のパッケージをテスト',
                ko: '특정 패키지 테스트',
                es: 'Probar paquete específico',
                ru: 'Тестировать конкретный пакет'
              }[locale] || 'Test specific package'
            },
            {
              command: 'lerna add lodash packages/core',
              description: isZhOrEn ? 'Add dependency to package' : {
                hi: 'पैकेज में डिपेंडेंसी जोड़ें',
                fr: 'Ajouter une dépendance au package',
                de: 'Abhängigkeit zum Paket hinzufügen',
                ja: 'パッケージに依存関係を追加',
                ko: '패키지에 종속성 추가',
                es: 'Agregar dependencia al paquete',
                ru: 'Добавить зависимость в пакет'
              }[locale] || 'Add dependency to package'
            }
          ]
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
          title: isZhOrEn ? 'Build and Test' : {
            hi: 'बिल्ड और टेस्ट',
            fr: 'Construction et Test',
            de: 'Build und Test',
            ja: 'ビルドとテスト',
            ko: '빌드 및 테스트',
            es: 'Construcción y Pruebas',
            ru: 'Сборка и тестирование'
          }[locale] || 'Build and Test',
          href: '/docs/build-and-test',
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

export default async function ProjectStructurePage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  const content = getContent(locale)
  const isZhOrEn = locale === 'zh' || locale === 'en'

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.overview.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.overview.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.overview.description}
            </p>
          </div>
        </div>
      </div>

      {/* Package Structure */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {isZhOrEn ? 'Package Structure' : {
                hi: 'पैकेज संरचना',
                fr: 'Structure des Packages',
                de: 'Paketstruktur',
                ja: 'パッケージ構造',
                ko: '패키지 구조',
                es: 'Estructura de Paquetes',
                ru: 'Структура пакетов'
              }[locale] || 'Package Structure'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {isZhOrEn ? 'Core packages that make up the Gemini CLI ecosystem' : {
                hi: 'मुख्य पैकेजेस जो Gemini CLI इकोसिस्टम बनाते हैं',
                fr: 'Packages principaux qui composent l\'écosystème Gemini CLI',
                de: 'Kernpakete, die das Gemini CLI-Ökosystem ausmachen',
                ja: 'Gemini CLIエコシステムを構成するコアパッケージ',
                ko: 'Gemini CLI 생태계를 구성하는 핵심 패키지',
                es: 'Paquetes principales que conforman el ecosistema Gemini CLI',
                ru: 'Основные пакеты, составляющие экосистему Gemini CLI'
              }[locale] || 'Core packages that make up the Gemini CLI ecosystem'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${pkg.color} text-white`}>
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <code className="text-sm text-gray-500">{pkg.path}</code>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{pkg.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    {isZhOrEn ? 'Key Responsibilities:' : {
                      hi: 'मुख्य जिम्मेदारियां:',
                      fr: 'Responsabilités Clés:',
                      de: 'Hauptverantwortlichkeiten:',
                      ja: '主な責任:',
                      ko: '주요 책임:',
                      es: 'Responsabilidades Clave:',
                      ru: 'Основные обязанности:'
                    }[locale] || 'Key Responsibilities:'}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.workflow.commands.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                        {item.command}
                      </code>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
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
