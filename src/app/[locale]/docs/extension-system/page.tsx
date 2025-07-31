import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  PuzzlePieceIcon,
  RocketLaunchIcon,
  CogIcon,
  DocumentTextIcon,
  ShareIcon,
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
    zh: '扩展系统 - Gemini CLI 文档',
    en: 'Extension System - Gemini CLI Documentation',
    hi: 'एक्सटेंशन सिस्टम - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Système d\'Extensions - Documentation Gemini CLI',
    de: 'Erweiterungssystem - Gemini CLI Dokumentation',
    ja: '拡張システム - Gemini CLI ドキュメント',
    ko: '확장 시스템 - Gemini CLI 문서',
    es: 'Sistema de Extensiones - Documentación Gemini CLI',
    ru: 'Система расширений - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Gemini CLI 扩展系统的完整指南，包括创建、打包、发布和管理扩展。',
    en: 'Complete guide to the Gemini CLI extension system including creating, packaging, publishing, and managing extensions.',
    hi: 'एक्सटेंशन बनाने, पैकेजिंग, प्रकाशन और प्रबंधन सहित Gemini CLI एक्सटेंशन सिस्टम के लिए पूर्ण गाइड।',
    fr: 'Guide complet du système d\'extensions Gemini CLI, y compris la création, l\'empaquetage, la publication et la gestion des extensions.',
    de: 'Vollständiger Leitfaden zum Gemini CLI-Erweiterungssystem, einschließlich Erstellen, Verpacken, Veröffentlichen und Verwalten von Erweiterungen.',
    ja: '拡張機能の作成、パッケージ化、公開、管理を含む Gemini CLI 拡張システムの完全ガイド。',
    ko: '확장 생성, 패키징, 게시 및 관리를 포함한 Gemini CLI 확장 시스템에 대한 완전한 가이드.',
    es: 'Guía completa del sistema de extensiones de Gemini CLI, incluyendo creación, empaquetado, publicación y gestión de extensiones.',
    ru: 'Полное руководство по системе расширений Gemini CLI, включая создание, упаковку, публикацию и управление расширениями.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 扩展, 插件系统, 扩展开发, 包管理, 社区扩展' : 'Gemini CLI extensions, plugin system, extension development, package management, community extensions',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const extensionTypes = [
  {
    type: {
      zh: '工具扩展',
      en: 'Tool Extensions',
      hi: 'टूल एक्सटेंशन',
      fr: 'Extensions d\'Outils',
      de: 'Tool-Erweiterungen',
      ja: 'ツール拡張',
      ko: '도구 확장',
      es: 'Extensiones de Herramientas',
      ru: 'Расширения инструментов'
    },
    description: {
      zh: '添加新的工具和功能',
      en: 'Add new tools and capabilities',
      hi: 'नए टूल्स और क्षमताएं जोड़ें',
      fr: 'Ajouter de nouveaux outils et capacités',
      de: 'Neue Tools und Funktionen hinzufügen',
      ja: '新しいツールと機能を追加',
      ko: '새로운 도구와 기능 추가',
      es: 'Agregar nuevas herramientas y capacidades',
      ru: 'Добавить новые инструменты и возможности'
    },
    icon: CogIcon,
    examples: {
      zh: ['数据库连接器', 'API 集成', '文件处理器', '数据分析器'],
      en: ['Database connectors', 'API integrations', 'File processors', 'Data analyzers'],
      hi: ['डेटाबेस कनेक्टर', 'API एकीकरण', 'फ़ाइल प्रोसेसर', 'डेटा विश्लेषक'],
      fr: ['Connecteurs de base de données', 'Intégrations API', 'Processeurs de fichiers', 'Analyseurs de données'],
      de: ['Datenbankverbinder', 'API-Integrationen', 'Dateiprozessoren', 'Datenanalysatoren'],
      ja: ['データベースコネクタ', 'API統合', 'ファイルプロセッサ', 'データアナライザー'],
      ko: ['데이터베이스 커넥터', 'API 통합', '파일 프로세서', '데이터 분석기'],
      es: ['Conectores de base de datos', 'Integraciones API', 'Procesadores de archivos', 'Analizadores de datos'],
      ru: ['Коннекторы баз данных', 'API интеграции', 'Процессоры файлов', 'Анализаторы данных']
    }
  },
  {
    type: {
      zh: '命令扩展',
      en: 'Command Extensions',
      hi: 'कमांड एक्सटेंशन',
      fr: 'Extensions de Commandes',
      de: 'Befehl-Erweiterungen',
      ja: 'コマンド拡張',
      ko: '명령 확장',
      es: 'Extensiones de Comandos',
      ru: 'Расширения команд'
    },
    description: {
      zh: '添加新的 CLI 命令',
      en: 'Add new CLI commands',
      hi: 'नए CLI कमांड जोड़ें',
      fr: 'Ajouter de nouvelles commandes CLI',
      de: 'Neue CLI-Befehle hinzufügen',
      ja: '新しいCLIコマンドを追加',
      ko: '새로운 CLI 명령 추가',
      es: 'Agregar nuevos comandos CLI',
      ru: 'Добавить новые CLI команды'
    },
    icon: DocumentTextIcon,
    examples: {
      zh: ['项目生成器', '部署脚本', '测试工具', '代码格式化器'],
      en: ['Project generators', 'Deployment scripts', 'Testing utilities', 'Code formatters'],
      hi: ['प्रोजेक्ट जेनरेटर', 'डिप्लॉयमेंट स्क्रिप्ट', 'टेस्टिंग यूटिलिटीज', 'कोड फॉर्मेटर'],
      fr: ['Générateurs de projets', 'Scripts de déploiement', 'Utilitaires de test', 'Formateurs de code'],
      de: ['Projektgeneratoren', 'Deployment-Skripte', 'Test-Utilities', 'Code-Formatierer'],
      ja: ['プロジェクトジェネレータ', 'デプロイメントスクリプト', 'テストユーティリティ', 'コードフォーマッタ'],
      ko: ['프로젝트 생성기', '배포 스크립트', '테스트 유틸리티', '코드 포맷터'],
      es: ['Generadores de proyectos', 'Scripts de despliegue', 'Utilidades de prueba', 'Formateadores de código'],
      ru: ['Генераторы проектов', 'Скрипты развертывания', 'Утилиты тестирования', 'Форматировщики кода']
    }
  },
  {
    type: {
      zh: '主题扩展',
      en: 'Theme Extensions',
      hi: 'थीम एक्सटेंशन',
      fr: 'Extensions de Thèmes',
      de: 'Theme-Erweiterungen',
      ja: 'テーマ拡張',
      ko: '테마 확장',
      es: 'Extensiones de Temas',
      ru: 'Расширения тем'
    },
    description: {
      zh: '自定义 CLI 外观',
      en: 'Customize the CLI appearance',
      hi: 'CLI की उपस्थिति को कस्टमाइज़ करें',
      fr: 'Personnaliser l\'apparence du CLI',
      de: 'CLI-Erscheinungsbild anpassen',
      ja: 'CLIの外観をカスタマイズ',
      ko: 'CLI 외관 사용자 정의',
      es: 'Personalizar la apariencia del CLI',
      ru: 'Настроить внешний вид CLI'
    },
    icon: PuzzlePieceIcon,
    examples: {
      zh: ['配色方案', '输出格式', '进度指示器', '自定义提示'],
      en: ['Color schemes', 'Output formats', 'Progress indicators', 'Custom prompts'],
      hi: ['रंग योजनाएं', 'आउटपुट फॉर्मेट', 'प्रगति संकेतक', 'कस्टम प्रॉम्प्ट'],
      fr: ['Schémas de couleurs', 'Formats de sortie', 'Indicateurs de progression', 'Invites personnalisées'],
      de: ['Farbschemata', 'Ausgabeformate', 'Fortschrittsindikatoren', 'Benutzerdefinierte Eingabeaufforderungen'],
      ja: ['カラースキーム', '出力フォーマット', 'プログレスインジケータ', 'カスタムプロンプト'],
      ko: ['색상 스키마', '출력 형식', '진행률 표시기', '사용자 정의 프롬프트'],
      es: ['Esquemas de colores', 'Formatos de salida', 'Indicadores de progreso', 'Prompts personalizados'],
      ru: ['Цветовые схемы', 'Форматы вывода', 'Индикаторы прогресса', 'Пользовательские подсказки']
    }
  },
  {
    type: {
      zh: '集成扩展',
      en: 'Integration Extensions',
      hi: 'एकीकरण एक्सटेंशन',
      fr: 'Extensions d\'Intégration',
      de: 'Integrations-Erweiterungen',
      ja: '統合拡張',
      ko: '통합 확장',
      es: 'Extensiones de Integración',
      ru: 'Расширения интеграции'
    },
    description: {
      zh: '连接外部服务',
      en: 'Connect with external services',
      hi: 'बाहरी सेवाओं से कनेक्ट करें',
      fr: 'Se connecter avec des services externes',
      de: 'Mit externen Diensten verbinden',
      ja: '外部サービスと接続',
      ko: '외부 서비스와 연결',
      es: 'Conectar con servicios externos',
      ru: 'Подключение к внешним сервисам'
    },
    icon: ShareIcon,
    examples: {
      zh: ['GitHub 集成', 'Slack 通知', '邮件提醒', '云存储'],
      en: ['GitHub integration', 'Slack notifications', 'Email alerts', 'Cloud storage'],
      hi: ['GitHub एकीकरण', 'Slack नोटिफिकेशन', 'ईमेल अलर्ट', 'क्लाउड स्टोरेज'],
      fr: ['Intégration GitHub', 'Notifications Slack', 'Alertes email', 'Stockage cloud'],
      de: ['GitHub-Integration', 'Slack-Benachrichtigungen', 'E-Mail-Benachrichtigungen', 'Cloud-Speicher'],
      ja: ['GitHub統合', 'Slack通知', 'メールアラート', 'クラウドストレージ'],
      ko: ['GitHub 통합', 'Slack 알림', '이메일 알림', '클라우드 스토리지'],
      es: ['Integración GitHub', 'Notificaciones Slack', 'Alertas de email', 'Almacenamiento en la nube'],
      ru: ['Интеграция GitHub', 'Уведомления Slack', 'Email оповещения', 'Облачное хранилище']
    }
  }
]

const extensionStructure = `my-extension/
├── package.json          # Extension metadata
├── index.js              # Main entry point
├── tools/                # Custom tools
│   ├── my-tool.js
│   └── another-tool.js
├── commands/             # Custom commands
│   └── my-command.js
├── themes/               # Custom themes
│   └── my-theme.json
├── README.md             # Documentation
└── tests/                # Test files
    └── extension.test.js`

const packageJsonExample = `{
  "name": "gemini-cli-my-extension",
  "version": "1.0.0",
  "description": "My awesome Gemini CLI extension",
  "main": "index.js",
  "keywords": ["gemini-cli", "extension", "tools"],
  "author": "Your Name",
  "license": "MIT",
  "gemini-cli": {
    "version": "^2.0.0",
    "type": "extension",
    "tools": ["./tools/my-tool.js"],
    "commands": ["./commands/my-command.js"],
    "themes": ["./themes/my-theme.json"]
  },
  "dependencies": {
    "@google/generative-ai-cli": "^2.0.0"
  }
}`

const developmentSteps = [
  {
    step: 1,
    title: {
      zh: '创建扩展',
      en: 'Create Extension',
      hi: 'एक्सटेंशन बनाएं',
      fr: 'Créer une Extension',
      de: 'Erweiterung erstellen',
      ja: '拡張機能を作成',
      ko: '확장 생성',
      es: 'Crear Extensión',
      ru: 'Создать расширение'
    },
    description: {
      zh: '初始化新的扩展项目',
      en: 'Initialize a new extension project',
      hi: 'नया एक्सटेंशन प्रोजेक्ट इनिशियलाइज़ करें',
      fr: 'Initialiser un nouveau projet d\'extension',
      de: 'Ein neues Erweiterungsprojekt initialisieren',
      ja: '新しい拡張プロジェクトを初期化',
      ko: '새로운 확장 프로젝트 초기화',
      es: 'Inicializar un nuevo proyecto de extensión',
      ru: 'Инициализировать новый проект расширения'
    },
    commands: [
      'mkdir my-extension',
      'cd my-extension',
      'npm init -y',
      'npm install @google/generative-ai-cli'
    ]
  },
  {
    step: 2,
    title: {
      zh: '开发功能',
      en: 'Develop Features',
      hi: 'फीचर्स डेवलप करें',
      fr: 'Développer les Fonctionnalités',
      de: 'Funktionen entwickeln',
      ja: '機能を開発',
      ko: '기능 개발',
      es: 'Desarrollar Características',
      ru: 'Разработать функции'
    },
    description: {
      zh: '实现工具、命令或主题',
      en: 'Implement tools, commands, or themes',
      hi: 'टूल्स, कमांड या थीम को लागू करें',
      fr: 'Implémenter des outils, commandes ou thèmes',
      de: 'Tools, Befehle oder Themes implementieren',
      ja: 'ツール、コマンド、またはテーマを実装',
      ko: '도구, 명령 또는 테마 구현',
      es: 'Implementar herramientas, comandos o temas',
      ru: 'Реализовать инструменты, команды или темы'
    },
    commands: [
      'mkdir tools commands themes',
      'touch tools/my-tool.js',
      'touch commands/my-command.js',
      'touch themes/my-theme.json'
    ]
  },
  {
    step: 3,
    title: {
      zh: '测试扩展',
      en: 'Test Extension',
      hi: 'एक्सटेंशन टेस्ट करें',
      fr: 'Tester l\'Extension',
      de: 'Erweiterung testen',
      ja: '拡張機能をテスト',
      ko: '확장 테스트',
      es: 'Probar Extensión',
      ru: 'Протестировать расширение'
    },
    description: {
      zh: '本地测试您的扩展',
      en: 'Test your extension locally',
      hi: 'अपने एक्सटेंशन को स्थानीय रूप से टेस्ट करें',
      fr: 'Tester votre extension localement',
      de: 'Ihre Erweiterung lokal testen',
      ja: '拡張機能をローカルでテスト',
      ko: '확장을 로컬에서 테스트',
      es: 'Probar tu extensión localmente',
      ru: 'Протестировать расширение локально'
    },
    commands: [
      'gemini extension link .',
      'gemini extension list',
      'gemini my-command --help'
    ]
  },
  {
    step: 4,
    title: {
      zh: '发布扩展',
      en: 'Publish Extension',
      hi: 'एक्सटेंशन प्रकाशित करें',
      fr: 'Publier l\'Extension',
      de: 'Erweiterung veröffentlichen',
      ja: '拡張機能を公開',
      ko: '확장 게시',
      es: 'Publicar Extensión',
      ru: 'Опубликовать расширение'
    },
    description: {
      zh: '将扩展发布到 npm',
      en: 'Publish extension to npm',
      hi: 'एक्सटेंशन को npm पर प्रकाशित करें',
      fr: 'Publier l\'extension sur npm',
      de: 'Erweiterung auf npm veröffentlichen',
      ja: '拡張機能をnpmに公開',
      ko: '확장을 npm에 게시',
      es: 'Publicar extensión en npm',
      ru: 'Опубликовать расширение в npm'
    },
    commands: [
      'npm test',
      'npm version patch',
      'npm publish'
    ]
  }
]

const bestPractices = [
  {
    category: {
      zh: '开发',
      en: 'Development',
      hi: 'विकास',
      fr: 'Développement',
      de: 'Entwicklung',
      ja: '開発',
      ko: '개발',
      es: 'Desarrollo',
      ru: 'Разработка'
    },
    practices: {
      zh: [
        '遵循单一职责原则',
        '提供清晰的文档',
        '包含全面的测试',
        '使用语义化版本控制'
      ],
      en: [
        'Follow single responsibility principle',
        'Provide clear documentation',
        'Include comprehensive tests',
        'Use semantic versioning'
      ],
      hi: [
        'एकल जिम्मेदारी सिद्धांत का पालन करें',
        'स्पष्ट दस्तावेज़ीकरण प्रदान करें',
        'व्यापक परीक्षण शामिल करें',
        'सिमेंटिक वर्जनिंग का उपयोग करें'
      ],
      fr: [
        'Suivre le principe de responsabilité unique',
        'Fournir une documentation claire',
        'Inclure des tests complets',
        'Utiliser le versioning sémantique'
      ],
      de: [
        'Dem Single-Responsibility-Prinzip folgen',
        'Klare Dokumentation bereitstellen',
        'Umfassende Tests einschließen',
        'Semantische Versionierung verwenden'
      ],
      ja: [
        '単一責任の原則に従う',
        '明確なドキュメントを提供',
        '包括的なテストを含める',
        'セマンティックバージョニングを使用'
      ],
      ko: [
        '단일 책임 원칙 따르기',
        '명확한 문서 제공',
        '포괄적인 테스트 포함',
        '시맨틱 버전 관리 사용'
      ],
      es: [
        'Seguir el principio de responsabilidad única',
        'Proporcionar documentación clara',
        'Incluir pruebas integrales',
        'Usar versionado semántico'
      ],
      ru: [
        'Следовать принципу единственной ответственности',
        'Предоставить четкую документацию',
        'Включить комплексные тесты',
        'Использовать семантическое версионирование'
      ]
    }
  },
  {
    category: {
      zh: '性能',
      en: 'Performance',
      hi: 'प्रदर्शन',
      fr: 'Performance',
      de: 'Leistung',
      ja: 'パフォーマンス',
      ko: '성능',
      es: 'Rendimiento',
      ru: 'Производительность'
    },
    practices: {
      zh: [
        '最小化启动时间',
        '避免阻塞操作',
        '实现延迟加载',
        '优化内存使用'
      ],
      en: [
        'Minimize startup time',
        'Avoid blocking operations',
        'Implement lazy loading',
        'Optimize memory usage'
      ],
      hi: [
        'स्टार्टअप समय को कम करें',
        'ब्लॉकिंग ऑपरेशन से बचें',
        'लेज़ी लोडिंग लागू करें',
        'मेमोरी उपयोग को अनुकूलित करें'
      ],
      fr: [
        'Minimiser le temps de démarrage',
        'Éviter les opérations bloquantes',
        'Implémenter le chargement paresseux',
        'Optimiser l\'utilisation de la mémoire'
      ],
      de: [
        'Startzeit minimieren',
        'Blockierende Operationen vermeiden',
        'Lazy Loading implementieren',
        'Speichernutzung optimieren'
      ],
      ja: [
        '起動時間を最小化',
        'ブロッキング操作を避ける',
        '遅延読み込みを実装',
        'メモリ使用量を最適化'
      ],
      ko: [
        '시작 시간 최소화',
        '차단 작업 방지',
        '지연 로딩 구현',
        '메모리 사용량 최적화'
      ],
      es: [
        'Minimizar tiempo de inicio',
        'Evitar operaciones bloqueantes',
        'Implementar carga perezosa',
        'Optimizar uso de memoria'
      ],
      ru: [
        'Минимизировать время запуска',
        'Избегать блокирующих операций',
        'Реализовать ленивую загрузку',
        'Оптимизировать использование памяти'
      ]
    }
  },
  {
    category: {
      zh: '兼容性',
      en: 'Compatibility',
      hi: 'संगतता',
      fr: 'Compatibilité',
      de: 'Kompatibilität',
      ja: '互換性',
      ko: '호환성',
      es: 'Compatibilidad',
      ru: 'Совместимость'
    },
    practices: {
      zh: [
        '支持多个 CLI 版本',
        '处理向后兼容性',
        '测试不同环境',
        '提供迁移指南'
      ],
      en: [
        'Support multiple CLI versions',
        'Handle backward compatibility',
        'Test different environments',
        'Provide migration guides'
      ],
      hi: [
        'कई CLI संस्करणों का समर्थन करें',
        'पिछड़ी संगतता को संभालें',
        'विभिन्न वातावरणों का परीक्षण करें',
        'माइग्रेशन गाइड प्रदान करें'
      ],
      fr: [
        'Supporter plusieurs versions CLI',
        'Gérer la compatibilité descendante',
        'Tester différents environnements',
        'Fournir des guides de migration'
      ],
      de: [
        'Mehrere CLI-Versionen unterstützen',
        'Rückwärtskompatibilität handhaben',
        'Verschiedene Umgebungen testen',
        'Migrationsleitfäden bereitstellen'
      ],
      ja: [
        '複数のCLIバージョンをサポート',
        '後方互換性を処理',
        '異なる環境をテスト',
        'マイグレーションガイドを提供'
      ],
      ko: [
        '여러 CLI 버전 지원',
        '하위 호환성 처리',
        '다양한 환경 테스트',
        '마이그레이션 가이드 제공'
      ],
      es: [
        'Soportar múltiples versiones CLI',
        'Manejar compatibilidad hacia atrás',
        'Probar diferentes entornos',
        'Proporcionar guías de migración'
      ],
      ru: [
        'Поддерживать несколько версий CLI',
        'Обрабатывать обратную совместимость',
        'Тестировать разные среды',
        'Предоставить руководства по миграции'
      ]
    }
  },
  {
    category: {
      zh: '发布',
      en: 'Publishing',
      hi: 'प्रकाशन',
      fr: 'Publication',
      de: 'Veröffentlichung',
      ja: '公開',
      ko: '게시',
      es: 'Publicación',
      ru: 'Публикация'
    },
    practices: {
      zh: [
        '使用描述性包名',
        '包含相关关键词',
        '提供使用示例',
        '维护向后兼容性'
      ],
      en: [
        'Use descriptive package names',
        'Include relevant keywords',
        'Provide usage examples',
        'Maintain backward compatibility'
      ],
      hi: [
        'वर्णनात्मक पैकेज नामों का उपयोग करें',
        'संबंधित कीवर्ड शामिल करें',
        'उपयोग के उदाहरण प्रदान करें',
        'पिछड़ी संगतता बनाए रखें'
      ],
      fr: [
        'Utiliser des noms de packages descriptifs',
        'Inclure des mots-clés pertinents',
        'Fournir des exemples d\'utilisation',
        'Maintenir la compatibilité descendante'
      ],
      de: [
        'Beschreibende Paketnamen verwenden',
        'Relevante Schlüsselwörter einschließen',
        'Nutzungsbeispiele bereitstellen',
        'Rückwärtskompatibilität aufrechterhalten'
      ],
      ja: [
        '説明的なパッケージ名を使用',
        '関連キーワードを含める',
        '使用例を提供',
        '後方互換性を維持'
      ],
      ko: [
        '설명적인 패키지 이름 사용',
        '관련 키워드 포함',
        '사용 예제 제공',
        '하위 호환성 유지'
      ],
      es: [
        'Usar nombres de paquetes descriptivos',
        'Incluir palabras clave relevantes',
        'Proporcionar ejemplos de uso',
        'Mantener compatibilidad hacia atrás'
      ],
      ru: [
        'Использовать описательные имена пакетов',
        'Включать релевантные ключевые слова',
        'Предоставлять примеры использования',
        'Поддерживать обратную совместимость'
      ]
    }
  }
]

export default async function ExtensionSystemPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  // Helper function to get localized text
  const getLocalizedText = (textObj: any) => textObj[locale as keyof typeof textObj] || textObj.en

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {locale === 'zh' ? '扩展系统' :
               locale === 'hi' ? 'एक्सटेंशन सिस्टम' :
               locale === 'fr' ? 'Système d\'Extensions' :
               locale === 'de' ? 'Erweiterungssystem' :
               locale === 'ja' ? '拡張システム' :
               locale === 'ko' ? '확장 시스템' :
               locale === 'es' ? 'Sistema de Extensiones' :
               locale === 'ru' ? 'Система расширений' :
               'Extension System'}
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              {locale === 'zh'
                ? '构建和分享扩展来扩展 Gemini CLI 的功能。为社区创建工具、命令、主题和集成。'
                : locale === 'hi'
                ? 'Gemini CLI की कार्यक्षमता को बढ़ाने के लिए एक्सटेंशन बनाएं और साझा करें। समुदाय के लिए टूल्स, कमांड, थीम और एकीकरण बनाएं।'
                : locale === 'fr'
                ? 'Construisez et partagez des extensions pour étendre les fonctionnalités de Gemini CLI. Créez des outils, commandes, thèmes et intégrations pour la communauté.'
                : locale === 'de'
                ? 'Erstellen und teilen Sie Erweiterungen, um die Funktionalität von Gemini CLI zu erweitern. Erstellen Sie Tools, Befehle, Themes und Integrationen für die Community.'
                : locale === 'ja'
                ? 'Gemini CLI の機能を拡張するための拡張機能を構築・共有します。コミュニティのためのツール、コマンド、テーマ、統合を作成します。'
                : locale === 'ko'
                ? 'Gemini CLI의 기능을 확장하기 위한 확장을 구축하고 공유합니다. 커뮤니티를 위한 도구, 명령, 테마 및 통합을 만듭니다.'
                : locale === 'es'
                ? 'Construye y comparte extensiones para ampliar la funcionalidad de Gemini CLI. Crea herramientas, comandos, temas e integraciones para la comunidad.'
                : locale === 'ru'
                ? 'Создавайте и делитесь расширениями для расширения функциональности Gemini CLI. Создавайте инструменты, команды, темы и интеграции для сообщества.'
                : 'Build and share extensions to extend Gemini CLI\'s functionality. Create tools, commands, themes, and integrations for the community.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Extension Types */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '扩展类型' :
               locale === 'hi' ? 'एक्सटेंशन प्रकार' :
               locale === 'fr' ? 'Types d\'Extensions' :
               locale === 'de' ? 'Erweiterungstypen' :
               locale === 'ja' ? '拡張タイプ' :
               locale === 'ko' ? '확장 유형' :
               locale === 'es' ? 'Tipos de Extensiones' :
               locale === 'ru' ? 'Типы расширений' :
               'Extension Types'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '您可以创建的不同类型的扩展' :
               locale === 'hi' ? 'आप जो विभिन्न प्रकार के एक्सटेंशन बना सकते हैं' :
               locale === 'fr' ? 'Différents types d\'extensions que vous pouvez créer' :
               locale === 'de' ? 'Verschiedene Arten von Erweiterungen, die Sie erstellen können' :
               locale === 'ja' ? '作成できる様々なタイプの拡張機能' :
               locale === 'ko' ? '생성할 수 있는 다양한 유형의 확장' :
               locale === 'es' ? 'Diferentes tipos de extensiones que puedes crear' :
               locale === 'ru' ? 'Различные типы расширений, которые вы можете создать' :
               'Different types of extensions you can create'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extensionTypes.map((ext, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <ext.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {getLocalizedText(ext.type)}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {getLocalizedText(ext.description)}
                </p>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    {locale === 'zh' ? '示例：' :
                     locale === 'hi' ? 'उदाहरण:' :
                     locale === 'fr' ? 'Exemples:' :
                     locale === 'de' ? 'Beispiele:' :
                     locale === 'ja' ? '例:' :
                     locale === 'ko' ? '예제:' :
                     locale === 'es' ? 'Ejemplos:' :
                     locale === 'ru' ? 'Примеры:' :
                     'Examples:'}
                  </h4>
                  <ul className="space-y-1">
                    {getLocalizedText(ext.examples).map((example: string, exIndex: number) => (
                      <li key={exIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extension Structure */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '扩展结构' :
               locale === 'hi' ? 'एक्सटेंशन संरचना' :
               locale === 'fr' ? 'Structure d\'Extension' :
               locale === 'de' ? 'Erweiterungsstruktur' :
               locale === 'ja' ? '拡張構造' :
               locale === 'ko' ? '확장 구조' :
               locale === 'es' ? 'Estructura de Extensión' :
               locale === 'ru' ? 'Структура расширения' :
               'Extension Structure'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '如何组织您的扩展文件' :
               locale === 'hi' ? 'अपनी एक्सटेंशन फ़ाइलों को कैसे व्यवस्थित करें' :
               locale === 'fr' ? 'Comment organiser vos fichiers d\'extension' :
               locale === 'de' ? 'Wie Sie Ihre Erweiterungsdateien organisieren' :
               locale === 'ja' ? '拡張ファイルの整理方法' :
               locale === 'ko' ? '확장 파일을 구성하는 방법' :
               locale === 'es' ? 'Cómo organizar tus archivos de extensión' :
               locale === 'ru' ? 'Как организовать файлы расширения' :
               'How to organize your extension files'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '目录结构' :
                 locale === 'hi' ? 'निर्देशिका संरचना' :
                 locale === 'fr' ? 'Structure de Répertoire' :
                 locale === 'de' ? 'Verzeichnisstruktur' :
                 locale === 'ja' ? 'ディレクトリ構造' :
                 locale === 'ko' ? '디렉토리 구조' :
                 locale === 'es' ? 'Estructura de Directorio' :
                 locale === 'ru' ? 'Структура каталога' :
                 'Directory Structure'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{extensionStructure}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? 'package.json 示例' :
                 locale === 'hi' ? 'package.json उदाहरण' :
                 locale === 'fr' ? 'Exemple package.json' :
                 locale === 'de' ? 'package.json Beispiel' :
                 locale === 'ja' ? 'package.json 例' :
                 locale === 'ko' ? 'package.json 예제' :
                 locale === 'es' ? 'Ejemplo package.json' :
                 locale === 'ru' ? 'Пример package.json' :
                 'package.json Example'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{packageJsonExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Development Steps */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '开发步骤' :
               locale === 'hi' ? 'विकास चरण' :
               locale === 'fr' ? 'Étapes de Développement' :
               locale === 'de' ? 'Entwicklungsschritte' :
               locale === 'ja' ? '開発ステップ' :
               locale === 'ko' ? '개발 단계' :
               locale === 'es' ? 'Pasos de Desarrollo' :
               locale === 'ru' ? 'Этапы разработки' :
               'Development Steps'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '创建扩展的分步指南' :
               locale === 'hi' ? 'एक्सटेंशन बनाने के लिए चरणबद्ध गाइड' :
               locale === 'fr' ? 'Guide étape par étape pour créer des extensions' :
               locale === 'de' ? 'Schritt-für-Schritt-Anleitung zur Erstellung von Erweiterungen' :
               locale === 'ja' ? '拡張機能作成のステップバイステップガイド' :
               locale === 'ko' ? '확장 생성을 위한 단계별 가이드' :
               locale === 'es' ? 'Guía paso a paso para crear extensiones' :
               locale === 'ru' ? 'Пошаговое руководство по созданию расширений' :
               'Step-by-step guide to creating extensions'}
            </p>
          </div>

          <div className="space-y-8">
            {developmentSteps.map((step, index) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {getLocalizedText(step.title)}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {getLocalizedText(step.description)}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        {locale === 'zh' ? '命令：' :
                         locale === 'hi' ? 'कमांड:' :
                         locale === 'fr' ? 'Commandes:' :
                         locale === 'de' ? 'Befehle:' :
                         locale === 'ja' ? 'コマンド:' :
                         locale === 'ko' ? '명령:' :
                         locale === 'es' ? 'Comandos:' :
                         locale === 'ru' ? 'Команды:' :
                         'Commands:'}
                      </h4>
                      <div className="space-y-1">
                        {step.commands.map((command, cmdIndex) => (
                          <code key={cmdIndex} className="block bg-gray-900 text-green-400 text-sm px-3 py-1 rounded">
                            {command}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extension Management */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '扩展管理' :
               locale === 'hi' ? 'एक्सटेंशन प्रबंधन' :
               locale === 'fr' ? 'Gestion des Extensions' :
               locale === 'de' ? 'Erweiterungsverwaltung' :
               locale === 'ja' ? '拡張管理' :
               locale === 'ko' ? '확장 관리' :
               locale === 'es' ? 'Gestión de Extensiones' :
               locale === 'ru' ? 'Управление расширениями' :
               'Extension Management'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '管理扩展的命令' :
               locale === 'hi' ? 'एक्सटेंशन प्रबंधन के लिए कमांड' :
               locale === 'fr' ? 'Commandes pour gérer les extensions' :
               locale === 'de' ? 'Befehle zur Verwaltung von Erweiterungen' :
               locale === 'ja' ? '拡張機能を管理するためのコマンド' :
               locale === 'ko' ? '확장 관리를 위한 명령' :
               locale === 'es' ? 'Comandos para gestionar extensiones' :
               locale === 'ru' ? 'Команды для управления расширениями' :
               'Commands for managing extensions'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '安装命令' :
                 locale === 'hi' ? 'इंस्टॉलेशन कमांड' :
                 locale === 'fr' ? 'Commandes d\'Installation' :
                 locale === 'de' ? 'Installationsbefehle' :
                 locale === 'ja' ? 'インストールコマンド' :
                 locale === 'ko' ? '설치 명령' :
                 locale === 'es' ? 'Comandos de Instalación' :
                 locale === 'ru' ? 'Команды установки' :
                 'Installation Commands'}
              </h3>
              <div className="space-y-3">
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension install &lt;name&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">
                    {locale === 'zh' ? '从 npm 安装扩展' :
                     locale === 'hi' ? 'npm से एक्सटेंशन इंस्टॉल करें' :
                     locale === 'fr' ? 'Installer une extension depuis npm' :
                     locale === 'de' ? 'Eine Erweiterung von npm installieren' :
                     locale === 'ja' ? 'npmから拡張機能をインストール' :
                     locale === 'ko' ? 'npm에서 확장 설치' :
                     locale === 'es' ? 'Instalar una extensión desde npm' :
                     locale === 'ru' ? 'Установить расширение из npm' :
                     'Install an extension from npm'}
                  </p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension load &lt;path&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">
                    {locale === 'zh' ? '加载本地扩展' :
                     locale === 'hi' ? 'स्थानीय एक्सटेंशन लोड करें' :
                     locale === 'fr' ? 'Charger une extension locale' :
                     locale === 'de' ? 'Eine lokale Erweiterung laden' :
                     locale === 'ja' ? 'ローカル拡張機能を読み込み' :
                     locale === 'ko' ? '로컬 확장 로드' :
                     locale === 'es' ? 'Cargar una extensión local' :
                     locale === 'ru' ? 'Загрузить локальное расширение' :
                     'Load a local extension'}
                  </p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension uninstall &lt;name&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">
                    {locale === 'zh' ? '移除扩展' :
                     locale === 'hi' ? 'एक्सटेंशन हटाएं' :
                     locale === 'fr' ? 'Supprimer une extension' :
                     locale === 'de' ? 'Eine Erweiterung entfernen' :
                     locale === 'ja' ? '拡張機能を削除' :
                     locale === 'ko' ? '확장 제거' :
                     locale === 'es' ? 'Eliminar una extensión' :
                     locale === 'ru' ? 'Удалить расширение' :
                     'Remove an extension'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '管理命令' :
                 locale === 'hi' ? 'प्रबंधन कमांड' :
                 locale === 'fr' ? 'Commandes de Gestion' :
                 locale === 'de' ? 'Verwaltungsbefehle' :
                 locale === 'ja' ? '管理コマンド' :
                 locale === 'ko' ? '관리 명령' :
                 locale === 'es' ? 'Comandos de Gestión' :
                 locale === 'ru' ? 'Команды управления' :
                 'Management Commands'}
              </h3>
              <div className="space-y-3">
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension list
                  </code>
                  <p className="text-sm text-gray-600 mt-1">
                    {locale === 'zh' ? '列出已安装的扩展' :
                     locale === 'hi' ? 'इंस्टॉल किए गए एक्सटेंशन की सूची बनाएं' :
                     locale === 'fr' ? 'Lister les extensions installées' :
                     locale === 'de' ? 'Installierte Erweiterungen auflisten' :
                     locale === 'ja' ? 'インストール済み拡張機能をリスト' :
                     locale === 'ko' ? '설치된 확장 목록' :
                     locale === 'es' ? 'Listar extensiones instaladas' :
                     locale === 'ru' ? 'Список установленных расширений' :
                     'List installed extensions'}
                  </p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension info &lt;name&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">
                    {locale === 'zh' ? '显示扩展详情' :
                     locale === 'hi' ? 'एक्सटेंशन विवरण दिखाएं' :
                     locale === 'fr' ? 'Afficher les détails de l\'extension' :
                     locale === 'de' ? 'Erweiterungsdetails anzeigen' :
                     locale === 'ja' ? '拡張機能の詳細を表示' :
                     locale === 'ko' ? '확장 세부 정보 표시' :
                     locale === 'es' ? 'Mostrar detalles de extensión' :
                     locale === 'ru' ? 'Показать детали расширения' :
                     'Show extension details'}
                  </p>
                </div>
                <div>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini extension search &lt;query&gt;
                  </code>
                  <p className="text-sm text-gray-600 mt-1">
                    {locale === 'zh' ? '搜索扩展' :
                     locale === 'hi' ? 'एक्सटेंशन खोजें' :
                     locale === 'fr' ? 'Rechercher des extensions' :
                     locale === 'de' ? 'Nach Erweiterungen suchen' :
                     locale === 'ja' ? '拡張機能を検索' :
                     locale === 'ko' ? '확장 검색' :
                     locale === 'es' ? 'Buscar extensiones' :
                     locale === 'ru' ? 'Поиск расширений' :
                     'Search for extensions'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '最佳实践' :
               locale === 'hi' ? 'सर्वोत्तम प्रथाएं' :
               locale === 'fr' ? 'Meilleures Pratiques' :
               locale === 'de' ? 'Bewährte Praktiken' :
               locale === 'ja' ? 'ベストプラクティス' :
               locale === 'ko' ? '모범 사례' :
               locale === 'es' ? 'Mejores Prácticas' :
               locale === 'ru' ? 'Лучшие практики' :
               'Best Practices'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '创建高质量扩展的指导原则' :
               locale === 'hi' ? 'उच्च गुणवत्ता वाले एक्सटेंशन बनाने के लिए दिशानिर्देश' :
               locale === 'fr' ? 'Directives pour créer des extensions de haute qualité' :
               locale === 'de' ? 'Richtlinien für die Erstellung hochwertiger Erweiterungen' :
               locale === 'ja' ? '高品質な拡張機能を作成するためのガイドライン' :
               locale === 'ko' ? '고품질 확장을 만들기 위한 가이드라인' :
               locale === 'es' ? 'Pautas para crear extensiones de alta calidad' :
               locale === 'ru' ? 'Руководящие принципы создания высококачественных расширений' :
               'Guidelines for creating high-quality extensions'}
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
      <div className="bg-purple-50 py-16 sm:py-20">
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
              {locale === 'zh' ? '了解更多关于扩展开发的信息' :
               locale === 'hi' ? 'एक्सटेंशन डेवलपमेंट के बारे में और जानें' :
               locale === 'fr' ? 'En savoir plus sur le développement d\'extensions' :
               locale === 'de' ? 'Erfahren Sie mehr über die Erweiterungsentwicklung' :
               locale === 'ja' ? '拡張開発についてさらに学ぶ' :
               locale === 'ko' ? '확장 개발에 대해 더 알아보기' :
               locale === 'es' ? 'Aprende más sobre el desarrollo de extensiones' :
               locale === 'ru' ? 'Узнайте больше о разработке расширений' :
               'Learn more about extension development'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/tool-development`}
                className="rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors"
              >
                {locale === 'zh' ? '工具开发' :
                 locale === 'hi' ? 'टूल डेवलपमेंट' :
                 locale === 'fr' ? 'Développement d\'Outils' :
                 locale === 'de' ? 'Tool-Entwicklung' :
                 locale === 'ja' ? 'ツール開発' :
                 locale === 'ko' ? '도구 개발' :
                 locale === 'es' ? 'Desarrollo de Herramientas' :
                 locale === 'ru' ? 'Разработка инструментов' :
                 'Tool Development'}
              </Link>
              <Link
                href={`/${locale}/docs/plugin-api`}
                className="rounded-lg border border-purple-600 px-6 py-3 text-base font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
              >
                {locale === 'zh' ? '插件 API' :
                 locale === 'hi' ? 'प्लगइन API' :
                 locale === 'fr' ? 'API Plugin' :
                 locale === 'de' ? 'Plugin API' :
                 locale === 'ja' ? 'プラグイン API' :
                 locale === 'ko' ? '플러그인 API' :
                 locale === 'es' ? 'API de Plugin' :
                 locale === 'ru' ? 'API плагинов' :
                 'Plugin API'}
              </Link>
              <Link
                href={`/${locale}/docs/contributing-guide`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
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
