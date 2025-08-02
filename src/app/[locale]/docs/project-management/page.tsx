import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  FolderIcon,
  CogIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CommandLineIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '项目管理 - Gemini CLI 文档',
    en: 'Project Management - Gemini CLI Documentation',
    hi: 'प्रोजेक्ट मैनेजमेंट - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Gestion de Projet - Documentation Gemini CLI',
    de: 'Projektmanagement - Gemini CLI Dokumentation',
    ja: 'プロジェクト管理 - Gemini CLI ドキュメント',
    ko: '프로젝트 관리 - Gemini CLI 문서',
    es: 'Gestión de Proyectos - Documentación Gemini CLI',
    ru: 'Управление проектом - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Gemini CLI 项目管理指南，包括 NPM 工作区、包管理、发布流程和开发工作流。',
    en: 'Guide to project management in Gemini CLI including NPM workspaces, package management, release processes, and development workflows.',
    hi: 'NPM वर्कस्पेस, पैकेज मैनेजमेंट, रिलीज़ प्रक्रियाओं और डेवलपमेंट वर्कफ़्लो सहित Gemini CLI में प्रोजेक्ट मैनेजमेंट के लिए गाइड।',
    fr: 'Guide de gestion de projet dans Gemini CLI, y compris les espaces de travail NPM, la gestion des packages, les processus de publication et les flux de travail de développement.',
    de: 'Leitfaden für Projektmanagement in Gemini CLI, einschließlich NPM-Arbeitsbereichen, Paketverwaltung, Release-Prozessen und Entwicklungsworkflows.',
    ja: 'NPM ワークスペース、パッケージ管理、リリースプロセス、開発ワークフローを含む Gemini CLI のプロジェクト管理ガイド。',
    ko: 'NPM 워크스페이스, 패키지 관리, 릴리스 프로세스 및 개발 워크플로를 포함한 Gemini CLI의 프로젝트 관리 가이드.',
    es: 'Guía de gestión de proyectos en Gemini CLI, incluyendo espacios de trabajo NPM, gestión de paquetes, procesos de lanzamiento y flujos de trabajo de desarrollo.',
    ru: 'Руководство по управлению проектами в Gemini CLI, включая рабочие области NPM, управление пакетами, процессы выпуска и рабочие процессы разработки.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 项目管理, NPM 工作区, 包管理, 发布流程, 开发工作流' : 'Gemini CLI project management, NPM workspaces, package management, release process, development workflow',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const workspaceStructure = `gemini-cli/
├── packages/
│   ├── cli/                 # Main CLI package
│   │   ├── package.json
│   │   ├── src/
│   │   └── dist/
│   ├── core/                # Core functionality
│   │   ├── package.json
│   │   ├── src/
│   │   └── dist/
│   ├── tools/               # Built-in tools
│   │   ├── package.json
│   │   ├── src/
│   │   └── dist/
│   └── extensions/          # Extension system
│       ├── package.json
│       ├── src/
│       └── dist/
├── package.json             # Root workspace config
├── lerna.json              # Lerna configuration
├── tsconfig.json           # TypeScript config
└── .github/                # CI/CD workflows
    └── workflows/
        ├── test.yml
        ├── build.yml
        └── release.yml`

const packageJsonRoot = `{
  "name": "gemini-cli-workspace",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "lerna run build",
    "test": "lerna run test",
    "lint": "lerna run lint",
    "clean": "lerna clean",
    "bootstrap": "lerna bootstrap",
    "version": "lerna version",
    "publish": "lerna publish"
  },
  "devDependencies": {
    "lerna": "^6.0.0",
    "typescript": "^5.0.0",
    "@types/node": "^18.0.0"
  }
}`

const releaseWorkflow = `name: Release

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - run: npm run lint

  release:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
          token: \${{ secrets.GITHUB_TOKEN }}
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          registry-url: 'https://registry.npmjs.org'
      
      - run: npm ci
      - run: npm run build
      
      - name: Configure Git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
      
      - name: Version and Publish
        run: |
          npm run version -- --conventional-commits --yes
          npm run publish -- --yes
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}`

const managementAreas = [
  {
    title: {
      zh: 'NPM 工作区',
      en: 'NPM Workspaces',
      hi: 'NPM वर्कस्पेस',
      fr: 'Espaces de Travail NPM',
      de: 'NPM-Arbeitsbereiche',
      ja: 'NPM ワークスペース',
      ko: 'NPM 워크스페이스',
      es: 'Espacios de Trabajo NPM',
      ru: 'Рабочие области NPM'
    },
    description: {
      zh: '使用 NPM 工作区管理多包项目',
      en: 'Managing multi-package projects with NPM workspaces',
      hi: 'NPM वर्कस्पेस के साथ मल्टी-पैकेज प्रोजेक्ट्स का प्रबंधन',
      fr: 'Gestion de projets multi-packages avec les espaces de travail NPM',
      de: 'Verwaltung von Multi-Package-Projekten mit NPM-Arbeitsbereichen',
      ja: 'NPM ワークスペースを使用したマルチパッケージプロジェクトの管理',
      ko: 'NPM 워크스페이스를 사용한 멀티 패키지 프로젝트 관리',
      es: 'Gestión de proyectos multi-paquete con espacios de trabajo NPM',
      ru: 'Управление многопакетными проектами с рабочими областями NPM'
    },
    icon: FolderIcon,
    features: {
      zh: [
        '统一依赖管理',
        '包间依赖解析',
        '共享开发工具',
        '简化构建流程'
      ],
      en: [
        'Unified dependency management',
        'Inter-package dependency resolution',
        'Shared development tools',
        'Simplified build processes'
      ],
      hi: [
        'एकीकृत निर्भरता प्रबंधन',
        'पैकेज-अंतर निर्भरता समाधान',
        'साझा विकास उपकरण',
        'सरलीकृत निर्माण प्रक्रियाएं'
      ],
      fr: [
        'Gestion unifiée des dépendances',
        'Résolution des dépendances inter-packages',
        'Outils de développement partagés',
        'Processus de construction simplifiés'
      ],
      de: [
        'Einheitliche Abhängigkeitsverwaltung',
        'Paketübergreifende Abhängigkeitsauflösung',
        'Gemeinsame Entwicklungstools',
        'Vereinfachte Build-Prozesse'
      ],
      ja: [
        '統一された依存関係管理',
        'パッケージ間依存関係解決',
        '共有開発ツール',
        '簡素化されたビルドプロセス'
      ],
      ko: [
        '통합 종속성 관리',
        '패키지 간 종속성 해결',
        '공유 개발 도구',
        '간소화된 빌드 프로세스'
      ],
      es: [
        'Gestión unificada de dependencias',
        'Resolución de dependencias entre paquetes',
        'Herramientas de desarrollo compartidas',
        'Procesos de construcción simplificados'
      ],
      ru: [
        'Единое управление зависимостями',
        'Разрешение межпакетных зависимостей',
        'Общие инструменты разработки',
        'Упрощенные процессы сборки'
      ]
    }
  },
  {
    title: {
      zh: 'Lerna 集成',
      en: 'Lerna Integration',
      hi: 'Lerna एकीकरण',
      fr: 'Intégration Lerna',
      de: 'Lerna-Integration',
      ja: 'Lerna 統合',
      ko: 'Lerna 통합',
      es: 'Integración Lerna',
      ru: 'Интеграция Lerna'
    },
    description: {
      zh: '使用 Lerna 进行版本控制和发布',
      en: 'Version control and publishing with Lerna',
      hi: 'Lerna के साथ संस्करण नियंत्रण और प्रकाशन',
      fr: 'Contrôle de version et publication avec Lerna',
      de: 'Versionskontrolle und Veröffentlichung mit Lerna',
      ja: 'Lerna を使用したバージョン管理と公開',
      ko: 'Lerna를 사용한 버전 관리 및 게시',
      es: 'Control de versiones y publicación con Lerna',
      ru: 'Управление версиями и публикация с Lerna'
    },
    icon: CogIcon,
    features: {
      zh: [
        '自动版本管理',
        '变更日志生成',
        '批量发布包',
        '依赖关系追踪'
      ],
      en: [
        'Automatic version management',
        'Changelog generation',
        'Batch package publishing',
        'Dependency tracking'
      ],
      hi: [
        'स्वचालित संस्करण प्रबंधन',
        'चेंजलॉग जेनरेशन',
        'बैच पैकेज प्रकाशन',
        'निर्भरता ट्रैकिंग'
      ],
      fr: [
        'Gestion automatique des versions',
        'Génération de changelog',
        'Publication de packages en lot',
        'Suivi des dépendances'
      ],
      de: [
        'Automatische Versionsverwaltung',
        'Changelog-Generierung',
        'Batch-Paket-Veröffentlichung',
        'Abhängigkeitsverfolgung'
      ],
      ja: [
        '自動バージョン管理',
        'チェンジログ生成',
        'バッチパッケージ公開',
        '依存関係追跡'
      ],
      ko: [
        '자동 버전 관리',
        '변경 로그 생성',
        '배치 패키지 게시',
        '종속성 추적'
      ],
      es: [
        'Gestión automática de versiones',
        'Generación de changelog',
        'Publicación de paquetes en lote',
        'Seguimiento de dependencias'
      ],
      ru: [
        'Автоматическое управление версиями',
        'Генерация журнала изменений',
        'Пакетная публикация пакетов',
        'Отслеживание зависимостей'
      ]
    }
  },
  {
    title: {
      zh: 'CI/CD 流水线',
      en: 'CI/CD Pipeline',
      hi: 'CI/CD पाइपलाइन',
      fr: 'Pipeline CI/CD',
      de: 'CI/CD-Pipeline',
      ja: 'CI/CD パイプライン',
      ko: 'CI/CD 파이프라인',
      es: 'Pipeline CI/CD',
      ru: 'CI/CD конвейер'
    },
    description: {
      zh: '自动化测试、构建和部署流程',
      en: 'Automated testing, building, and deployment',
      hi: 'स्वचालित परीक्षण, निर्माण और तैनाती',
      fr: 'Tests automatisés, construction et déploiement',
      de: 'Automatisierte Tests, Erstellung und Bereitstellung',
      ja: '自動化されたテスト、ビルド、デプロイメント',
      ko: '자동화된 테스트, 빌드 및 배포',
      es: 'Pruebas automatizadas, construcción y despliegue',
      ru: 'Автоматизированное тестирование, сборка и развертывание'
    },
    icon: RocketLaunchIcon,
    features: {
      zh: [
        '自动化测试',
        '代码质量检查',
        '自动发布',
        '部署监控'
      ],
      en: [
        'Automated testing',
        'Code quality checks',
        'Automatic releases',
        'Deployment monitoring'
      ],
      hi: [
        'स्वचालित परीक्षण',
        'कोड गुणवत्ता जांच',
        'स्वचालित रिलीज़',
        'तैनाती निगरानी'
      ],
      fr: [
        'Tests automatisés',
        'Vérifications de qualité du code',
        'Versions automatiques',
        'Surveillance du déploiement'
      ],
      de: [
        'Automatisierte Tests',
        'Code-Qualitätsprüfungen',
        'Automatische Releases',
        'Deployment-Überwachung'
      ],
      ja: [
        '自動化テスト',
        'コード品質チェック',
        '自動リリース',
        'デプロイメント監視'
      ],
      ko: [
        '자동화된 테스트',
        '코드 품질 검사',
        '자동 릴리스',
        '배포 모니터링'
      ],
      es: [
        'Pruebas automatizadas',
        'Verificaciones de calidad del código',
        'Lanzamientos automáticos',
        'Monitoreo de despliegue'
      ],
      ru: [
        'Автоматизированное тестирование',
        'Проверки качества кода',
        'Автоматические релизы',
        'Мониторинг развертывания'
      ]
    }
  },
  {
    title: {
      zh: '文档管理',
      en: 'Documentation Management',
      hi: 'दस्तावेज़ीकरण प्रबंधन',
      fr: 'Gestion de la Documentation',
      de: 'Dokumentationsverwaltung',
      ja: 'ドキュメント管理',
      ko: '문서 관리',
      es: 'Gestión de Documentación',
      ru: 'Управление документацией'
    },
    description: {
      zh: '维护项目文档和 API 参考',
      en: 'Maintaining project documentation and API references',
      hi: 'प्रोजेक्ट दस्तावेज़ीकरण और API संदर्भों का रखरखाव',
      fr: 'Maintenance de la documentation du projet et des références API',
      de: 'Wartung der Projektdokumentation und API-Referenzen',
      ja: 'プロジェクトドキュメントとAPIリファレンスの保守',
      ko: '프로젝트 문서 및 API 참조 유지 관리',
      es: 'Mantenimiento de documentación del proyecto y referencias API',
      ru: 'Поддержка проектной документации и API-справочников'
    },
    icon: DocumentTextIcon,
    features: {
      zh: [
        'API 文档生成',
        '用户指南维护',
        '示例代码管理',
        '多语言支持'
      ],
      en: [
        'API documentation generation',
        'User guide maintenance',
        'Example code management',
        'Multi-language support'
      ],
      hi: [
        'API दस्तावेज़ीकरण जेनरेशन',
        'उपयोगकर्ता गाइड रखरखाव',
        'उदाहरण कोड प्रबंधन',
        'बहुभाषी समर्थन'
      ],
      fr: [
        'Génération de documentation API',
        'Maintenance du guide utilisateur',
        'Gestion du code d\'exemple',
        'Support multilingue'
      ],
      de: [
        'API-Dokumentationsgenerierung',
        'Benutzerhandbuch-Wartung',
        'Beispielcode-Verwaltung',
        'Mehrsprachige Unterstützung'
      ],
      ja: [
        'APIドキュメント生成',
        'ユーザーガイド保守',
        'サンプルコード管理',
        '多言語サポート'
      ],
      ko: [
        'API 문서 생성',
        '사용자 가이드 유지 관리',
        '예제 코드 관리',
        '다국어 지원'
      ],
      es: [
        'Generación de documentación API',
        'Mantenimiento de guía de usuario',
        'Gestión de código de ejemplo',
        'Soporte multiidioma'
      ],
      ru: [
        'Генерация API документации',
        'Поддержка руководства пользователя',
        'Управление примерами кода',
        'Многоязычная поддержка'
      ]
    }
  }
]

const developmentCommands = [
  {
    category: {
      zh: '开发命令',
      en: 'Development Commands',
      hi: 'विकास कमांड',
      fr: 'Commandes de Développement',
      de: 'Entwicklungsbefehle',
      ja: '開発コマンド',
      ko: '개발 명령',
      es: 'Comandos de Desarrollo',
      ru: 'Команды разработки'
    },
    commands: [
      {
        command: 'npm run bootstrap',
        description: {
          zh: '安装所有包的依赖',
          en: 'Install dependencies for all packages',
          hi: 'सभी पैकेजों के लिए निर्भरताएं स्थापित करें',
          fr: 'Installer les dépendances pour tous les packages',
          de: 'Abhängigkeiten für alle Pakete installieren',
          ja: 'すべてのパッケージの依存関係をインストール',
          ko: '모든 패키지의 종속성 설치',
          es: 'Instalar dependencias para todos los paquetes',
          ru: 'Установить зависимости для всех пакетов'
        }
      },
      {
        command: 'npm run build',
        description: {
          zh: '构建所有包',
          en: 'Build all packages',
          hi: 'सभी पैकेज बिल्ड करें',
          fr: 'Construire tous les packages',
          de: 'Alle Pakete erstellen',
          ja: 'すべてのパッケージをビルド',
          ko: '모든 패키지 빌드',
          es: 'Construir todos los paquetes',
          ru: 'Собрать все пакеты'
        }
      },
      {
        command: 'npm run test',
        description: {
          zh: '运行所有测试',
          en: 'Run all tests',
          hi: 'सभी टेस्ट चलाएं',
          fr: 'Exécuter tous les tests',
          de: 'Alle Tests ausführen',
          ja: 'すべてのテストを実行',
          ko: '모든 테스트 실행',
          es: 'Ejecutar todas las pruebas',
          ru: 'Запустить все тесты'
        }
      },
      {
        command: 'npm run lint',
        description: {
          zh: '检查代码风格',
          en: 'Check code style',
          hi: 'कोड स्टाइल जांचें',
          fr: 'Vérifier le style de code',
          de: 'Code-Stil überprüfen',
          ja: 'コードスタイルをチェック',
          ko: '코드 스타일 검사',
          es: 'Verificar estilo de código',
          ru: 'Проверить стиль кода'
        }
      }
    ]
  },
  {
    category: {
      zh: '发布命令',
      en: 'Release Commands',
      hi: 'रिलीज़ कमांड',
      fr: 'Commandes de Publication',
      de: 'Release-Befehle',
      ja: 'リリースコマンド',
      ko: '릴리스 명령',
      es: 'Comandos de Lanzamiento',
      ru: 'Команды релиза'
    },
    commands: [
      {
        command: 'npm run version',
        description: {
          zh: '更新包版本',
          en: 'Update package versions',
          hi: 'पैकेज संस्करण अपडेट करें',
          fr: 'Mettre à jour les versions des packages',
          de: 'Paketversionen aktualisieren',
          ja: 'パッケージバージョンを更新',
          ko: '패키지 버전 업데이트',
          es: 'Actualizar versiones de paquetes',
          ru: 'Обновить версии пакетов'
        }
      },
      {
        command: 'npm run publish',
        description: {
          zh: '发布包到 NPM',
          en: 'Publish packages to NPM',
          hi: 'NPM पर पैकेज प्रकाशित करें',
          fr: 'Publier les packages sur NPM',
          de: 'Pakete auf NPM veröffentlichen',
          ja: 'NPMにパッケージを公開',
          ko: 'NPM에 패키지 게시',
          es: 'Publicar paquetes en NPM',
          ru: 'Опубликовать пакеты в NPM'
        }
      },
      {
        command: 'npm run changelog',
        description: {
          zh: '生成变更日志',
          en: 'Generate changelog',
          hi: 'चेंजलॉग जेनरेट करें',
          fr: 'Générer le changelog',
          de: 'Changelog generieren',
          ja: 'チェンジログを生成',
          ko: '변경 로그 생성',
          es: 'Generar changelog',
          ru: 'Сгенерировать журнал изменений'
        }
      },
      {
        command: 'npm run clean',
        description: {
          zh: '清理构建文件',
          en: 'Clean build files',
          hi: 'बिल्ड फाइलें साफ करें',
          fr: 'Nettoyer les fichiers de construction',
          de: 'Build-Dateien bereinigen',
          ja: 'ビルドファイルをクリーン',
          ko: '빌드 파일 정리',
          es: 'Limpiar archivos de construcción',
          ru: 'Очистить файлы сборки'
        }
      }
    ]
  }
]

const bestPractices = [
  {
    category: {
      zh: '代码质量',
      en: 'Code Quality',
      hi: 'कोड गुणवत्ता',
      fr: 'Qualité du Code',
      de: 'Code-Qualität',
      ja: 'コード品質',
      ko: '코드 품질',
      es: 'Calidad del Código',
      ru: 'Качество кода'
    },
    practices: {
      zh: [
        '遵循约定式提交消息',
        '保持测试覆盖率在 80% 以上',
        '使用 TypeScript 确保类型安全',
        '运行代码检查和格式化'
      ],
      en: [
        'Follow conventional commit messages',
        'Maintain test coverage above 80%',
        'Use TypeScript for type safety',
        'Run linting and formatting checks'
      ],
      hi: [
        'पारंपरिक कमिट संदेशों का पालन करें',
        'टेस्ट कवरेज को 80% से ऊपर बनाए रखें',
        'टाइप सुरक्षा के लिए TypeScript का उपयोग करें',
        'लिंटिंग और फॉर्मेटिंग चेक चलाएं'
      ],
      fr: [
        'Suivre les messages de commit conventionnels',
        'Maintenir la couverture de test au-dessus de 80%',
        'Utiliser TypeScript pour la sécurité des types',
        'Exécuter les vérifications de linting et de formatage'
      ],
      de: [
        'Konventionelle Commit-Nachrichten befolgen',
        'Testabdeckung über 80% halten',
        'TypeScript für Typsicherheit verwenden',
        'Linting- und Formatierungsprüfungen ausführen'
      ],
      ja: [
        '慣例的なコミットメッセージに従う',
        'テストカバレッジを80%以上に保つ',
        '型安全性のためにTypeScriptを使用',
        'リンティングとフォーマットチェックを実行'
      ],
      ko: [
        '관례적인 커밋 메시지 따르기',
        '테스트 커버리지를 80% 이상 유지',
        '타입 안전성을 위해 TypeScript 사용',
        '린팅 및 포맷팅 검사 실행'
      ],
      es: [
        'Seguir mensajes de commit convencionales',
        'Mantener cobertura de pruebas por encima del 80%',
        'Usar TypeScript para seguridad de tipos',
        'Ejecutar verificaciones de linting y formateo'
      ],
      ru: [
        'Следовать конвенциональным сообщениям коммитов',
        'Поддерживать покрытие тестами выше 80%',
        'Использовать TypeScript для типобезопасности',
        'Запускать проверки линтинга и форматирования'
      ]
    }
  },
  {
    category: {
      zh: '发布管理',
      en: 'Release Management',
      hi: 'रिलीज़ प्रबंधन',
      fr: 'Gestion des Versions',
      de: 'Release-Management',
      ja: 'リリース管理',
      ko: '릴리스 관리',
      es: 'Gestión de Lanzamientos',
      ru: 'Управление релизами'
    },
    practices: {
      zh: [
        '使用语义化版本控制',
        '自动生成变更日志',
        '在预发布环境测试',
        '监控发布后指标'
      ],
      en: [
        'Use semantic versioning',
        'Generate changelogs automatically',
        'Test releases in staging environment',
        'Monitor post-release metrics'
      ],
      hi: [
        'सिमेंटिक वर्जनिंग का उपयोग करें',
        'चेंजलॉग स्वचालित रूप से जेनरेट करें',
        'स्टेजिंग एनवायरनमेंट में रिलीज़ टेस्ट करें',
        'रिलीज़ के बाद मेट्रिक्स की निगरानी करें'
      ],
      fr: [
        'Utiliser le versioning sémantique',
        'Générer automatiquement les changelogs',
        'Tester les versions dans l\'environnement de staging',
        'Surveiller les métriques post-version'
      ],
      de: [
        'Semantische Versionierung verwenden',
        'Changelogs automatisch generieren',
        'Releases in Staging-Umgebung testen',
        'Post-Release-Metriken überwachen'
      ],
      ja: [
        'セマンティックバージョニングを使用',
        'チェンジログを自動生成',
        'ステージング環境でリリースをテスト',
        'リリース後のメトリクスを監視'
      ],
      ko: [
        '시맨틱 버저닝 사용',
        '변경 로그 자동 생성',
        '스테이징 환경에서 릴리스 테스트',
        '릴리스 후 메트릭 모니터링'
      ],
      es: [
        'Usar versionado semántico',
        'Generar changelogs automáticamente',
        'Probar lanzamientos en entorno de staging',
        'Monitorear métricas post-lanzamiento'
      ],
      ru: [
        'Использовать семантическое версионирование',
        'Автоматически генерировать журналы изменений',
        'Тестировать релизы в staging-среде',
        'Мониторить метрики после релиза'
      ]
    }
  }
]

export default async function ProjectManagementPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  const isZh = locale === 'zh'

  // Helper function to get localized text
  const getLocalizedText = (textObj: any) => {
    return textObj[locale as keyof typeof textObj] || textObj.en || textObj.zh
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {locale === 'zh' ? '项目管理' :
               locale === 'hi' ? 'प्रोजेक्ट प्रबंधन' :
               locale === 'fr' ? 'Gestion de Projet' :
               locale === 'de' ? 'Projektmanagement' :
               locale === 'ja' ? 'プロジェクト管理' :
               locale === 'ko' ? '프로젝트 관리' :
               locale === 'es' ? 'Gestión de Proyectos' :
               locale === 'ru' ? 'Управление проектами' :
               'Project Management'}
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              {locale === 'zh'
                ? '了解 Gemini CLI 如何使用 NPM 工作区、Lerna 和自动化 CI/CD 流程来管理其包、发布和开发工作流。'
                : locale === 'hi'
                ? 'जानें कि Gemini CLI कैसे NPM वर्कस्पेस, Lerna और स्वचालित CI/CD प्रक्रियाओं का उपयोग करके अपने पैकेज, रिलीज़ और डेवलपमेंट वर्कफ़्लो का प्रबंधन करता है।'
                : locale === 'fr'
                ? 'Découvrez comment Gemini CLI gère ses packages, versions et flux de travail de développement en utilisant les espaces de travail NPM, Lerna et les processus CI/CD automatisés.'
                : locale === 'de'
                ? 'Erfahren Sie, wie Gemini CLI seine Pakete, Releases und Entwicklungsworkflows mit NPM-Arbeitsbereichen, Lerna und automatisierten CI/CD-Prozessen verwaltet.'
                : locale === 'ja'
                ? 'Gemini CLIがNPMワークスペース、Lerna、自動化されたCI/CDプロセスを使用してパッケージ、リリース、開発ワークフローを管理する方法を学びます。'
                : locale === 'ko'
                ? 'Gemini CLI가 NPM 워크스페이스, Lerna 및 자동화된 CI/CD 프로세스를 사용하여 패키지, 릴리스 및 개발 워크플로를 관리하는 방법을 알아보세요.'
                : locale === 'es'
                ? 'Aprende cómo Gemini CLI gestiona sus paquetes, lanzamientos y flujo de trabajo de desarrollo usando espacios de trabajo NPM, Lerna y procesos CI/CD automatizados.'
                : locale === 'ru'
                ? 'Узнайте, как Gemini CLI управляет своими пакетами, релизами и рабочим процессом разработки, используя рабочие области NPM, Lerna и автоматизированные CI/CD процессы.'
                : 'Learn how Gemini CLI manages its packages, releases, and development workflow using NPM workspaces, Lerna, and automated CI/CD processes.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Management Areas */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '管理领域' :
               locale === 'hi' ? 'प्रबंधन क्षेत्र' :
               locale === 'fr' ? 'Domaines de Gestion' :
               locale === 'de' ? 'Verwaltungsbereiche' :
               locale === 'ja' ? '管理領域' :
               locale === 'ko' ? '관리 영역' :
               locale === 'es' ? 'Áreas de Gestión' :
               locale === 'ru' ? 'Области управления' :
               'Management Areas'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '项目管理的关键领域' :
               locale === 'hi' ? 'प्रोजेक्ट प्रबंधन के मुख्य क्षेत्र' :
               locale === 'fr' ? 'Domaines clés de la gestion de projet' :
               locale === 'de' ? 'Schlüsselbereiche des Projektmanagements' :
               locale === 'ja' ? 'プロジェクト管理の主要領域' :
               locale === 'ko' ? '프로젝트 관리의 주요 영역' :
               locale === 'es' ? 'Áreas clave de la gestión de proyectos' :
               locale === 'ru' ? 'Ключевые области управления проектами' :
               'Key areas of project management'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <area.icon className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {getLocalizedText(area.title)}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {getLocalizedText(area.description)}
                </p>
                <ul className="space-y-2">
                  {getLocalizedText(area.features).map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workspace Structure */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '工作区结构' :
               locale === 'hi' ? 'वर्कस्पेस संरचना' :
               locale === 'fr' ? 'Structure de l\'Espace de Travail' :
               locale === 'de' ? 'Arbeitsbereich-Struktur' :
               locale === 'ja' ? 'ワークスペース構造' :
               locale === 'ko' ? '워크스페이스 구조' :
               locale === 'es' ? 'Estructura del Espacio de Trabajo' :
               locale === 'ru' ? 'Структура рабочего пространства' :
               'Workspace Structure'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? 'Gemini CLI 项目的组织结构' :
               locale === 'hi' ? 'Gemini CLI प्रोजेक्ट कैसे व्यवस्थित है' :
               locale === 'fr' ? 'Comment le projet Gemini CLI est organisé' :
               locale === 'de' ? 'Wie das Gemini CLI-Projekt organisiert ist' :
               locale === 'ja' ? 'Gemini CLIプロジェクトの構成方法' :
               locale === 'ko' ? 'Gemini CLI 프로젝트가 어떻게 구성되어 있는지' :
               locale === 'es' ? 'Cómo está organizado el proyecto Gemini CLI' :
               locale === 'ru' ? 'Как организован проект Gemini CLI' :
               'How the Gemini CLI project is organized'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '目录结构' :
                 locale === 'hi' ? 'डायरेक्टरी संरचना' :
                 locale === 'fr' ? 'Structure des Répertoires' :
                 locale === 'de' ? 'Verzeichnisstruktur' :
                 locale === 'ja' ? 'ディレクトリ構造' :
                 locale === 'ko' ? '디렉토리 구조' :
                 locale === 'es' ? 'Estructura de Directorios' :
                 locale === 'ru' ? 'Структура каталогов' :
                 'Directory Structure'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{workspaceStructure}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '根 package.json' :
                 locale === 'hi' ? 'रूट package.json' :
                 locale === 'fr' ? 'package.json Racine' :
                 locale === 'de' ? 'Root package.json' :
                 locale === 'ja' ? 'ルート package.json' :
                 locale === 'ko' ? '루트 package.json' :
                 locale === 'es' ? 'package.json Raíz' :
                 locale === 'ru' ? 'Корневой package.json' :
                 'Root package.json'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{packageJsonRoot}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Development Commands */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '开发命令' :
               locale === 'hi' ? 'विकास कमांड' :
               locale === 'fr' ? 'Commandes de Développement' :
               locale === 'de' ? 'Entwicklungsbefehle' :
               locale === 'ja' ? '開発コマンド' :
               locale === 'ko' ? '개발 명령' :
               locale === 'es' ? 'Comandos de Desarrollo' :
               locale === 'ru' ? 'Команды разработки' :
               'Development Commands'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '管理项目的常用命令' :
               locale === 'hi' ? 'प्रोजेक्ट प्रबंधन के लिए सामान्य कमांड' :
               locale === 'fr' ? 'Commandes courantes pour gérer le projet' :
               locale === 'de' ? 'Häufige Befehle zur Projektverwaltung' :
               locale === 'ja' ? 'プロジェクト管理の一般的なコマンド' :
               locale === 'ko' ? '프로젝트 관리를 위한 일반적인 명령' :
               locale === 'es' ? 'Comandos comunes para gestionar el proyecto' :
               locale === 'ru' ? 'Общие команды для управления проектом' :
               'Common commands for managing the project'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentCommands.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {getLocalizedText(section.category)}
                </h3>
                <div className="space-y-3">
                  {section.commands.map((cmd, cmdIndex) => (
                    <div key={cmdIndex} className="border-l-4 border-indigo-500 pl-4">
                      <code className="block bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm font-mono">
                        {cmd.command}
                      </code>
                      <p className="text-sm text-gray-600 mt-1">
                        {getLocalizedText(cmd.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Release Workflow */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '发布工作流' :
               locale === 'hi' ? 'रिलीज़ वर्कफ़्लो' :
               locale === 'fr' ? 'Flux de Travail de Publication' :
               locale === 'de' ? 'Release-Workflow' :
               locale === 'ja' ? 'リリースワークフロー' :
               locale === 'ko' ? '릴리스 워크플로' :
               locale === 'es' ? 'Flujo de Trabajo de Lanzamiento' :
               locale === 'ru' ? 'Рабочий процесс релиза' :
               'Release Workflow'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '自动化 CI/CD 流水线配置' :
               locale === 'hi' ? 'स्वचालित CI/CD पाइपलाइन कॉन्फ़िगरेशन' :
               locale === 'fr' ? 'Configuration du pipeline CI/CD automatisé' :
               locale === 'de' ? 'Automatisierte CI/CD-Pipeline-Konfiguration' :
               locale === 'ja' ? '自動化されたCI/CDパイプライン設定' :
               locale === 'ko' ? '자동화된 CI/CD 파이프라인 구성' :
               locale === 'es' ? 'Configuración de pipeline CI/CD automatizado' :
               locale === 'ru' ? 'Конфигурация автоматизированного CI/CD конвейера' :
               'Automated CI/CD pipeline configuration'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {locale === 'zh' ? 'GitHub Actions 工作流' :
               locale === 'hi' ? 'GitHub Actions वर्कफ़्लो' :
               locale === 'fr' ? 'Flux de Travail GitHub Actions' :
               locale === 'de' ? 'GitHub Actions Workflow' :
               locale === 'ja' ? 'GitHub Actions ワークフロー' :
               locale === 'ko' ? 'GitHub Actions 워크플로' :
               locale === 'es' ? 'Flujo de Trabajo GitHub Actions' :
               locale === 'ru' ? 'Рабочий процесс GitHub Actions' :
               'GitHub Actions Workflow'}
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{releaseWorkflow}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '最佳实践' :
               locale === 'hi' ? 'सर्वोत्तम प्रथाएं' :
               locale === 'fr' ? 'Meilleures Pratiques' :
               locale === 'de' ? 'Best Practices' :
               locale === 'ja' ? 'ベストプラクティス' :
               locale === 'ko' ? '모범 사례' :
               locale === 'es' ? 'Mejores Prácticas' :
               locale === 'ru' ? 'Лучшие практики' :
               'Best Practices'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '有效项目管理的指导原则' :
               locale === 'hi' ? 'प्रभावी प्रोजेक्ट प्रबंधन के लिए दिशानिर्देश' :
               locale === 'fr' ? 'Directives pour une gestion de projet efficace' :
               locale === 'de' ? 'Richtlinien für effektives Projektmanagement' :
               locale === 'ja' ? '効果的なプロジェクト管理のガイドライン' :
               locale === 'ko' ? '효과적인 프로젝트 관리를 위한 가이드라인' :
               locale === 'es' ? 'Pautas para una gestión de proyectos efectiva' :
               locale === 'ru' ? 'Руководящие принципы для эффективного управления проектами' :
               'Guidelines for effective project management'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((section, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {getLocalizedText(section.category)}
                </h3>
                <ul className="space-y-2">
                  {getLocalizedText(section.practices).map((practice: string, practiceIndex: number) => (
                    <li key={practiceIndex} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-indigo-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '相关资源' :
               locale === 'hi' ? 'संबंधित संसाधन' :
               locale === 'fr' ? 'Ressources Connexes' :
               locale === 'de' ? 'Verwandte Ressourcen' :
               locale === 'ja' ? '関連リソース' :
               locale === 'ko' ? '관련 리소스' :
               locale === 'es' ? 'Recursos Relacionados' :
               locale === 'ru' ? 'Связанные ресурсы' :
               'Related Resources'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '了解更多关于贡献和开发的信息' :
               locale === 'hi' ? 'योगदान और विकास के बारे में और जानें' :
               locale === 'fr' ? 'En savoir plus sur la contribution et le développement' :
               locale === 'de' ? 'Erfahren Sie mehr über Beiträge und Entwicklung' :
               locale === 'ja' ? '貢献と開発についてもっと学ぶ' :
               locale === 'ko' ? '기여 및 개발에 대해 자세히 알아보기' :
               locale === 'es' ? 'Aprende más sobre contribución y desarrollo' :
               locale === 'ru' ? 'Узнайте больше о вкладе и разработке' :
               'Learn more about contributing and development'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/contributing-guide`}
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                {locale === 'zh' ? '贡献指南' :
                 locale === 'hi' ? 'योगदान गाइड' :
                 locale === 'fr' ? 'Guide de Contribution' :
                 locale === 'de' ? 'Beitragsleitfaden' :
                 locale === 'ja' ? '貢献ガイド' :
                 locale === 'ko' ? '기여 가이드' :
                 locale === 'es' ? 'Guía de Contribución' :
                 locale === 'ru' ? 'Руководство по участию' :
                 'Contributing Guide'}
              </Link>
              <Link
                href={`/${locale}/docs/development-setup`}
                className="rounded-lg border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {locale === 'zh' ? '开发设置' :
                 locale === 'hi' ? 'डेवलपमेंट सेटअप' :
                 locale === 'fr' ? 'Configuration de Développement' :
                 locale === 'de' ? 'Entwicklungseinrichtung' :
                 locale === 'ja' ? '開発セットアップ' :
                 locale === 'ko' ? '개발 설정' :
                 locale === 'es' ? 'Configuración de Desarrollo' :
                 locale === 'ru' ? 'Настройка разработки' :
                 'Development Setup'}
              </Link>
              <Link
                href="/docs/build-and-test"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '构建和测试' :
                 locale === 'hi' ? 'बिल्ड और टेस्ट' :
                 locale === 'fr' ? 'Construction et Tests' :
                 locale === 'de' ? 'Erstellen und Testen' :
                 locale === 'ja' ? 'ビルドとテスト' :
                 locale === 'ko' ? '빌드 및 테스트' :
                 locale === 'es' ? 'Construcción y Pruebas' :
                 locale === 'ru' ? 'Сборка и тестирование' :
                 'Build and Test'}
              </Link>
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
