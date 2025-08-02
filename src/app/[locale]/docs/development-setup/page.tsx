import { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import {
  CogIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    zh: '开发环境设置 | Gemini CLI 开发者文档',
    hi: 'डेवलपमेंट सेटअप | Gemini CLI डेवलपर दस्तावेज़ीकरण',
    fr: 'Configuration de Développement | Documentation Développeur Gemini CLI',
    de: 'Entwicklungsumgebung | Gemini CLI Entwicklerdokumentation',
    ja: '開発環境セットアップ | Gemini CLI 開発者ドキュメント',
    ko: '개발 환경 설정 | Gemini CLI 개발자 문서',
    es: 'Configuración de Desarrollo | Documentación para Desarrolladores Gemini CLI',
    ru: 'Настройка разработки | Документация разработчика Gemini CLI'
  }

  const descriptions = {
    zh: '设置本地开发环境和依赖项，包括 Node.js 安装、项目设置、开发工具配置和环境变量管理。',
    hi: 'Node.js इंस्टॉलेशन, प्रोजेक्ट सेटअप, डेवलपमेंट टूल्स कॉन्फ़िगरेशन और एनवायरनमेंट वेरिएबल्स मैनेजमेंट सहित स्थानीय डेवलपमेंट एनवायरनमेंट और डिपेंडेंसीज सेट करना।',
    fr: 'Configuration de l\'environnement de développement local et des dépendances, y compris l\'installation de Node.js, la configuration du projet, la configuration des outils de développement et la gestion des variables d\'environnement.',
    de: 'Einrichtung der lokalen Entwicklungsumgebung und Abhängigkeiten einschließlich Node.js-Installation, Projekteinrichtung, Konfiguration von Entwicklungstools und Verwaltung von Umgebungsvariablen.',
    ja: 'Node.jsのインストール、プロジェクトセットアップ、開発ツールの設定、環境変数の管理を含む、ローカル開発環境と依存関係のセットアップ。',
    ko: 'Node.js 설치, 프로젝트 설정, 개발 도구 구성 및 환경 변수 관리를 포함한 로컬 개발 환경 및 종속성 설정.',
    es: 'Configuración del entorno de desarrollo local y dependencias, incluyendo instalación de Node.js, configuración del proyecto, configuración de herramientas de desarrollo y gestión de variables de entorno.',
    ru: 'Настройка локальной среды разработки и зависимостей, включая установку Node.js, настройку проекта, конфигурацию инструментов разработки и управление переменными окружения.'
  }

  const keywords = {
    zh: 'Gemini CLI 开发环境, 本地开发, 环境配置, 依赖安装, 开发工具',
    hi: 'Gemini CLI डेवलपमेंट एनवायरनमेंट, लोकल डेवलपमेंट, एनवायरनमेंट कॉन्फ़िगरेशन, डिपेंडेंसी इंस्टॉलेशन, डेवलपमेंट टूल्स',
    fr: 'environnement de développement Gemini CLI, développement local, configuration environnement, installation dépendances, outils développement',
    de: 'Gemini CLI Entwicklungsumgebung, lokale Entwicklung, Umgebungskonfiguration, Abhängigkeitsinstallation, Entwicklungstools',
    ja: 'Gemini CLI開発環境, ローカル開発, 環境設定, 依存関係インストール, 開発ツール',
    ko: 'Gemini CLI 개발 환경, 로컬 개발, 환경 구성, 종속성 설치, 개발 도구',
    es: 'entorno desarrollo Gemini CLI, desarrollo local, configuración entorno, instalación dependencias, herramientas desarrollo',
    ru: 'среда разработки Gemini CLI, локальная разработка, конфигурация среды, установка зависимостей, инструменты разработки'
  }

  return {
    title: titles[locale as keyof typeof titles] || 'Development Setup | Gemini CLI Developer Documentation',
    description: descriptions[locale as keyof typeof descriptions] || 'Setting up local development environment and dependencies including Node.js installation, project setup, development tools configuration, and environment variables management.',
    keywords: keywords[locale as keyof typeof keywords] || 'Gemini CLI development environment, local development, environment configuration, dependency installation, development tools',
    openGraph: {
      title: titles[locale as keyof typeof titles] || 'Development Setup - Gemini CLI Developer Documentation',
      description: descriptions[locale as keyof typeof descriptions] || 'Configure local development environment and dependencies for Gemini CLI development',
      type: 'article',
    },
  }
}

const getContent = (locale: string) => {
  return {
    title: {
      zh: '开发环境设置',
      hi: 'डेवलपमेंट सेटअप',
      fr: 'Configuration de Développement',
      de: 'Entwicklungsumgebung',
      ja: '開発環境セットアップ',
      ko: '개발 환경 설정',
      es: 'Configuración de Desarrollo',
      ru: 'Настройка разработки'
    }[locale] || 'Development Setup',

    subtitle: {
      zh: '为 Gemini CLI 开发设置本地开发环境和依赖项',
      hi: 'Gemini CLI डेवलपमेंट के लिए स्थानीय डेवलपमेंट एनवायरनमेंट और डिपेंडेंसीज सेट करना',
      fr: 'Configuration de l\'environnement de développement local et des dépendances pour le développement Gemini CLI',
      de: 'Einrichtung der lokalen Entwicklungsumgebung und Abhängigkeiten für die Gemini CLI-Entwicklung',
      ja: 'Gemini CLI開発のためのローカル開発環境と依存関係のセットアップ',
      ko: 'Gemini CLI 개발을 위한 로컬 개발 환경 및 종속성 설정',
      es: 'Configuración del entorno de desarrollo local y dependencias para el desarrollo de Gemini CLI',
      ru: 'Настройка локальной среды разработки и зависимостей для разработки Gemini CLI'
    }[locale] || 'Setting up local development environment and dependencies for Gemini CLI development',

    sections: {
      prerequisites: {
        title: {
          zh: '系统要求',
          hi: 'सिस्टम आवश्यकताएं',
          fr: 'Exigences Système',
          de: 'Systemanforderungen',
          ja: 'システム要件',
          ko: '시스템 요구사항',
          es: 'Requisitos del Sistema',
          ru: 'Системные требования'
        }[locale] || 'System Requirements',

        subtitle: {
          zh: '开始之前，请确保您的系统满足这些要求',
          hi: 'शुरू करने से पहले सुनिश्चित करें कि आपका सिस्टम इन आवश्यकताओं को पूरा करता है',
          fr: 'Assurez-vous que votre système répond à ces exigences avant de commencer',
          de: 'Stellen Sie sicher, dass Ihr System diese Anforderungen erfüllt, bevor Sie beginnen',
          ja: '開始する前に、システムがこれらの要件を満たしていることを確認してください',
          ko: '시작하기 전에 시스템이 이러한 요구사항을 충족하는지 확인하세요',
          es: 'Asegúrese de que su sistema cumple con estos requisitos antes de comenzar',
          ru: 'Убедитесь, что ваша система соответствует этим требованиям перед началом'
        }[locale] || 'Ensure your system meets these requirements before starting',

        requirements: [
          {
            name: 'Node.js',
            version: {
              zh: '18.0.0 或更高版本',
              hi: '18.0.0 या उससे अधिक',
              fr: '18.0.0 ou supérieur',
              de: '18.0.0 oder höher',
              ja: '18.0.0以上',
              ko: '18.0.0 이상',
              es: '18.0.0 o superior',
              ru: '18.0.0 या выше'
            }[locale] || '18.0.0 or higher',
            description: {
              zh: 'JavaScript 运行时环境',
              hi: 'JavaScript रनटाइम एनवायरनमेंट',
              fr: 'Environnement d\'exécution JavaScript',
              de: 'JavaScript-Laufzeitumgebung',
              ja: 'JavaScript実行環境',
              ko: 'JavaScript 런타임 환경',
              es: 'Entorno de ejecución JavaScript',
              ru: 'Среда выполнения JavaScript'
            }[locale] || 'JavaScript runtime environment',
            checkCommand: 'node --version'
          },
          {
            name: 'npm',
            version: {
              zh: '8.0.0 或更高版本',
              hi: '8.0.0 या उससे अधिक',
              fr: '8.0.0 ou supérieur',
              de: '8.0.0 oder höher',
              ja: '8.0.0以上',
              ko: '8.0.0 이상',
              es: '8.0.0 o superior',
              ru: '8.0.0 या выше'
            }[locale] || '8.0.0 or higher',
            description: {
              zh: 'Node.js 包管理器',
              hi: 'Node.js पैकेज मैनेजर',
              fr: 'Gestionnaire de paquets Node.js',
              de: 'Node.js-Paketmanager',
              ja: 'Node.jsパッケージマネージャー',
              ko: 'Node.js 패키지 관리자',
              es: 'Gestor de paquetes Node.js',
              ru: 'Менеджер пакетов Node.js'
            }[locale] || 'Node.js package manager',
            checkCommand: 'npm --version'
          },
          {
            name: 'Git',
            version: {
              zh: '2.20.0 或更高版本',
              hi: '2.20.0 या उससे अधिक',
              fr: '2.20.0 ou supérieur',
              de: '2.20.0 oder höher',
              ja: '2.20.0以上',
              ko: '2.20.0 이상',
              es: '2.20.0 o superior',
              ru: '2.20.0 या выше'
            }[locale] || '2.20.0 or higher',
            description: {
              zh: '版本控制系统',
              hi: 'वर्जन कंट्रोल सिस्टम',
              fr: 'Système de contrôle de version',
              de: 'Versionskontrollsystem',
              ja: 'バージョン管理システム',
              ko: '버전 관리 시스템',
              es: 'Sistema de control de versiones',
              ru: 'Система контроля версий'
            }[locale] || 'Version control system',
            checkCommand: 'git --version'
          },
          {
            name: 'VS Code',
            version: {
              zh: '最新版本（推荐）',
              hi: 'नवीनतम (अनुशंसित)',
              fr: 'Dernière version (recommandée)',
              de: 'Neueste Version (empfohlen)',
              ja: '最新版（推奨）',
              ko: '최신 버전 (권장)',
              es: 'Última versión (recomendada)',
              ru: 'Последняя версия (рекомендуется)'
            }[locale] || 'Latest (recommended)',
            description: {
              zh: '代码编辑器',
              hi: 'कोड एडिटर',
              fr: 'Éditeur de code',
              de: 'Code-Editor',
              ja: 'コードエディター',
              ko: '코드 에디터',
              es: 'Editor de código',
              ru: 'Редактор кода'
            }[locale] || 'Code editor',
            checkCommand: 'code --version'
          }
        ]
      },

      installation: {
        title: {
          zh: '安装步骤',
          hi: 'इंस्टॉलेशन चरण',
          fr: 'Étapes d\'Installation',
          de: 'Installationsschritte',
          ja: 'インストール手順',
          ko: '설치 단계',
          es: 'Pasos de Instalación',
          ru: 'Шаги установки'
        }[locale] || 'Installation Steps',

        subtitle: {
          zh: '按照以下步骤设置您的开发环境',
          hi: 'अपना डेवलपमेंट एनवायरनमेंट सेट करने के लिए इन चरणों का पालन करें',
          fr: 'Suivez ces étapes pour configurer votre environnement de développement',
          de: 'Befolgen Sie diese Schritte, um Ihre Entwicklungsumgebung einzurichten',
          ja: '開発環境をセットアップするには、これらの手順に従ってください',
          ko: '개발 환경을 설정하려면 다음 단계를 따르세요',
          es: 'Siga estos pasos para configurar su entorno de desarrollo',
          ru: 'Следуйте этим шагам для настройки среды разработки'
        }[locale] || 'Follow these steps to set up your development environment',

        steps: [
          {
            title: {
              zh: '克隆仓库',
              hi: 'रिपॉजिटरी क्लोन करें',
              fr: 'Cloner le Dépôt',
              de: 'Repository klonen',
              ja: 'リポジトリをクローン',
              ko: '저장소 복제',
              es: 'Clonar Repositorio',
              ru: 'Клонировать репозиторий'
            }[locale] || 'Clone Repository',
            description: {
              zh: '从 GitHub 获取 Gemini CLI 源代码',
              hi: 'GitHub से Gemini CLI सोर्स कोड प्राप्त करें',
              fr: 'Obtenez le code source Gemini CLI depuis GitHub',
              de: 'Holen Sie sich den Gemini CLI-Quellcode von GitHub',
              ja: 'GitHubからGemini CLIのソースコードを取得',
              ko: 'GitHub에서 Gemini CLI 소스 코드 가져오기',
              es: 'Obtener el código fuente de Gemini CLI desde GitHub',
              ru: 'Получить исходный код Gemini CLI с GitHub'
            }[locale] || 'Get the Gemini CLI source code from GitHub',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git\ncd gemini-cli'
          },
          {
            title: {
              zh: '安装依赖项',
              hi: 'डिपेंडेंसीज इंस्टॉल करें',
              fr: 'Installer les Dépendances',
              de: 'Abhängigkeiten installieren',
              ja: '依存関係をインストール',
              ko: '종속성 설치',
              es: 'Instalar Dependencias',
              ru: 'Установить зависимости'
            }[locale] || 'Install Dependencies',
            description: {
              zh: '安装所有必需的项目依赖项',
              hi: 'सभी आवश्यक प्रोजेक्ट डिपेंडेंसीज इंस्टॉल करें',
              fr: 'Installer toutes les dépendances de projet requises',
              de: 'Alle erforderlichen Projektabhängigkeiten installieren',
              ja: '必要なプロジェクトの依存関係をすべてインストール',
              ko: '필요한 모든 프로젝트 종속성 설치',
              es: 'Instalar todas las dependencias del proyecto requeridas',
              ru: 'Установить все необходимые зависимости проекта'
            }[locale] || 'Install all required project dependencies',
            command: 'npm install'
          },
          {
            title: {
              zh: '引导项目',
              hi: 'प्रोजेक्ट बूटस्ट्रैप करें',
              fr: 'Amorcer le Projet',
              de: 'Projekt bootstrappen',
              ja: 'プロジェクトをブートストラップ',
              ko: '프로젝트 부트스트랩',
              es: 'Inicializar Proyecto',
              ru: 'Инициализировать проект'
            }[locale] || 'Bootstrap Project',
            description: {
              zh: '设置单体仓库并链接包',
              hi: 'मोनोरेपो सेट करें और पैकेजेस लिंक करें',
              fr: 'Configurer le monorepo et lier les paquets',
              de: 'Monorepo einrichten und Pakete verknüpfen',
              ja: 'モノレポをセットアップしてパッケージをリンク',
              ko: '모노레포 설정 및 패키지 연결',
              es: 'Configurar monorepo y enlazar paquetes',
              ru: 'Настроить монорепо и связать пакеты'
            }[locale] || 'Set up monorepo and link packages',
            command: 'npm run bootstrap'
          },
          {
            title: {
              zh: '构建项目',
              hi: 'प्रोजेक्ट बिल्ड करें',
              fr: 'Construire le Projet',
              de: 'Projekt erstellen',
              ja: 'プロジェクトをビルド',
              ko: '프로젝트 빌드',
              es: 'Construir Proyecto',
              ru: 'Собрать проект'
            }[locale] || 'Build Project',
            description: {
              zh: '编译 TypeScript 代码',
              hi: 'TypeScript कोड कंपाइल करें',
              fr: 'Compiler le code TypeScript',
              de: 'TypeScript-Code kompilieren',
              ja: 'TypeScriptコードをコンパイル',
              ko: 'TypeScript 코드 컴파일',
              es: 'Compilar código TypeScript',
              ru: 'Скомпилировать код TypeScript'
            }[locale] || 'Compile TypeScript code',
            command: 'npm run build'
          }
        ]
      },

      configuration: {
        title: {
          zh: '环境配置',
          hi: 'एनवायरनमेंट कॉन्फ़िगरेशन',
          fr: 'Configuration d\'Environnement',
          de: 'Umgebungskonfiguration',
          ja: '環境設定',
          ko: '환경 구성',
          es: 'Configuración del Entorno',
          ru: 'Конфигурация окружения'
        }[locale] || 'Environment Configuration',

        subtitle: {
          zh: '配置开发环境和工具',
          hi: 'डेवलपमेंट एनवायरनमेंट और टूल्स कॉन्फ़िगर करें',
          fr: 'Configurer l\'environnement de développement et les outils',
          de: 'Entwicklungsumgebung und Tools konfigurieren',
          ja: '開発環境とツールを設定',
          ko: '개발 환경 및 도구 구성',
          es: 'Configurar entorno de desarrollo y herramientas',
          ru: 'Настроить среду разработки и инструменты'
        }[locale] || 'Configure development environment and tools',

        configs: [
          {
            name: {
              zh: 'VS Code 扩展',
              hi: 'VS Code एक्सटेंशन',
              fr: 'Extensions VS Code',
              de: 'VS Code-Erweiterungen',
              ja: 'VS Code拡張機能',
              ko: 'VS Code 확장',
              es: 'Extensiones de VS Code',
              ru: 'Расширения VS Code'
            }[locale] || 'VS Code Extensions',
            description: {
              zh: '推荐的 VS Code 扩展',
              hi: 'अनुशंसित VS Code एक्सटेंशन',
              fr: 'Extensions VS Code recommandées',
              de: 'Empfohlene VS Code-Erweiterungen',
              ja: '推奨VS Code拡張機能',
              ko: '권장 VS Code 확장',
              es: 'Extensiones recomendadas de VS Code',
              ru: 'Рекомендуемые расширения VS Code'
            }[locale] || 'Recommended VS Code extensions',
            items: [
              'TypeScript and JavaScript Language Features',
              'ESLint',
              'Prettier - Code formatter',
              'GitLens',
              {
                zh: 'Thunder Client (API 测试)',
                hi: 'Thunder Client (API टेस्टिंग)',
                fr: 'Thunder Client (test d\'API)',
                de: 'Thunder Client (API-Tests)',
                ja: 'Thunder Client (APIテスト)',
                ko: 'Thunder Client (API 테스트)',
                es: 'Thunder Client (pruebas de API)',
                ru: 'Thunder Client (тестирование API)'
              }[locale] || 'Thunder Client (API testing)'
            ]
          },
          {
            name: {
              zh: '环境变量',
              hi: 'एनवायरनमेंट वेरिएबल्स',
              fr: 'Variables d\'Environnement',
              de: 'Umgebungsvariablen',
              ja: '環境変数',
              ko: '환경 변수',
              es: 'Variables de Entorno',
              ru: 'Переменные окружения'
            }[locale] || 'Environment Variables',
            description: {
              zh: '设置必要的环境变量',
              hi: 'आवश्यक एनवायरनमेंट वेरिएबल्स सेट करें',
              fr: 'Configurer les variables d\'environnement nécessaires',
              de: 'Notwendige Umgebungsvariablen einrichten',
              ja: '必要な環境変数を設定',
              ko: '필요한 환경 변수 설정',
              es: 'Configurar variables de entorno necesarias',
              ru: 'Настроить необходимые переменные окружения'
            }[locale] || 'Set up necessary environment variables',
            items: [
              'GEMINI_API_KEY=your_api_key',
              'NODE_ENV=development',
              'DEBUG=gemini:*',
              'LOG_LEVEL=debug'
            ]
          }
        ]
      },

      verification: {
        title: {
          zh: '验证安装',
          hi: 'इंस्टॉलेशन सत्यापित करें',
          fr: 'Vérifier l\'Installation',
          de: 'Installation überprüfen',
          ja: 'インストールを確認',
          ko: '설치 확인',
          es: 'Verificar Instalación',
          ru: 'Проверить установку'
        }[locale] || 'Verify Installation',

        subtitle: {
          zh: '确认您的开发环境已正确设置',
          hi: 'पुष्टि करें कि आपका डेवलपमेंट एनवायरनमेंट सही तरीके से सेट है',
          fr: 'Confirmez que votre environnement de développement est correctement configuré',
          de: 'Bestätigen Sie, dass Ihre Entwicklungsumgebung korrekt eingerichtet ist',
          ja: '開発環境が正しく設定されていることを確認',
          ko: '개발 환경이 올바르게 설정되었는지 확인',
          es: 'Confirme que su entorno de desarrollo está configurado correctamente',
          ru: 'Подтвердите, что ваша среда разработки настроена правильно'
        }[locale] || 'Confirm your development environment is set up correctly',

        tests: [
          {
            name: {
              zh: '运行测试',
              hi: 'टेस्ट चलाएं',
              fr: 'Exécuter les Tests',
              de: 'Tests ausführen',
              ja: 'テストを実行',
              ko: '테스트 실행',
              es: 'Ejecutar Pruebas',
              ru: 'Запустить тесты'
            }[locale] || 'Run Tests',
            command: 'npm test',
            expected: {
              zh: '所有测试都应该通过',
              hi: 'सभी टेस्ट पास होने चाहिए',
              fr: 'Tous les tests doivent réussir',
              de: 'Alle Tests sollten bestehen',
              ja: 'すべてのテストが成功するはず',
              ko: '모든 테스트가 통과해야 함',
              es: 'Todas las pruebas deben pasar',
              ru: 'Все тесты должны пройти'
            }[locale] || 'All tests should pass'
          },
          {
            name: {
              zh: '启动开发模式',
              hi: 'डेवलपमेंट मोड शुरू करें',
              fr: 'Démarrer le Mode Développement',
              de: 'Entwicklungsmodus starten',
              ja: '開発モードを開始',
              ko: '개발 모드 시작',
              es: 'Iniciar Modo de Desarrollo',
              ru: 'Запустить режим разработки'
            }[locale] || 'Start Development Mode',
            command: 'npm run dev',
            expected: {
              zh: '应该启动开发服务器',
              hi: 'डेवलपमेंट सर्वर शुरू होना चाहिए',
              fr: 'Devrait démarrer le serveur de développement',
              de: 'Sollte den Entwicklungsserver starten',
              ja: '開発サーバーが起動するはず',
              ko: '개발 서버가 시작되어야 함',
              es: 'Debería iniciar el servidor de desarrollo',
              ru: 'Должен запустить сервер разработки'
            }[locale] || 'Should start development server'
          },
          {
            name: {
              zh: '检查代码质量',
              hi: 'कोड क्वालिटी चेक करें',
              fr: 'Vérifier la Qualité du Code',
              de: 'Code-Qualität prüfen',
              ja: 'コード品質をチェック',
              ko: '코드 품질 확인',
              es: 'Verificar Calidad del Código',
              ru: 'Проверить качество кода'
            }[locale] || 'Check Code Quality',
            command: 'npm run lint',
            expected: {
              zh: '应该没有代码检查错误',
              hi: 'कोई लिंटिंग एरर नहीं होना चाहिए',
              fr: 'Ne devrait avoir aucune erreur de linting',
              de: 'Sollte keine Linting-Fehler haben',
              ja: 'リンティングエラーがないはず',
              ko: '린팅 오류가 없어야 함',
              es: 'No debería tener errores de linting',
              ru: 'Не должно быть ошибок линтинга'
            }[locale] || 'Should have no linting errors'
          }
        ]
      }
    }
  };
};

export default async function DevelopmentSetupPage({ params }: PageProps) {
  const { locale } = await params

  // Redirect English to the original English page
  if (locale === 'en') {
    redirect('/docs/development-setup')
  }

  // Validate locale
  const validLocales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  if (!validLocales.includes(locale)) {
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

      {/* Prerequisites */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.prerequisites.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.prerequisites.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.sections.prerequisites.requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {req.name}
                    </h3>
                    <p className="text-sm text-blue-600 mb-2">{req.version}</p>
                    <p className="text-gray-700 mb-3">{req.description}</p>
                    <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                      {req.checkCommand}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.installation.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.installation.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.sections.installation.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                        {step.command}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.configuration.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.configuration.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.sections.configuration.configs.map((config, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{config.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{config.description}</p>
                <div className="space-y-2">
                  {config.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded p-2">
                      <code className="text-sm text-gray-800">{item}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verification */}
      <div className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.verification.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.verification.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              {content.sections.verification.tests.map((test, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h3>
                  <div className="bg-gray-900 rounded-lg p-3 mb-2">
                    <code className="text-green-400 text-sm font-mono">{test.command}</code>
                  </div>
                  <p className="text-gray-600 text-sm">{test.expected}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '下一步' :
               locale === 'hi' ? 'अगले चरण' :
               locale === 'fr' ? 'Prochaines Étapes' :
               locale === 'de' ? 'Nächste Schritte' :
               locale === 'ja' ? '次のステップ' :
               locale === 'ko' ? '다음 단계' :
               locale === 'es' ? 'Próximos Pasos' :
               locale === 'ru' ? 'Следующие шаги' : 'Next Steps'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '通过这些资源继续您的开发之旅' :
               locale === 'hi' ? 'इन संसाधनों के साथ अपनी डेवलपमेंट यात्रा जारी रखें' :
               locale === 'fr' ? 'Continuez votre parcours de développement avec ces ressources' :
               locale === 'de' ? 'Setzen Sie Ihre Entwicklungsreise mit diesen Ressourcen fort' :
               locale === 'ja' ? 'これらのリソースで開発の旅を続けてください' :
               locale === 'ko' ? '이러한 리소스로 개발 여정을 계속하세요' :
               locale === 'es' ? 'Continúa tu viaje de desarrollo con estos recursos' :
               locale === 'ru' ? 'Продолжите свой путь разработки с этими ресурсами' : 'Continue your development journey with these resources'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href={`/${locale}/docs/project-structure`} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <RocketLaunchIcon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {locale === 'zh' ? '项目结构' :
                   locale === 'hi' ? 'प्रोजेक्ट संरचना' :
                   locale === 'fr' ? 'Structure du Projet' :
                   locale === 'de' ? 'Projektstruktur' :
                   locale === 'ja' ? 'プロジェクト構造' :
                   locale === 'ko' ? '프로젝트 구조' :
                   locale === 'es' ? 'Estructura del Proyecto' :
                   locale === 'ru' ? 'Структура проекта' : 'Project Structure'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '了解代码库组织和架构' :
                   locale === 'hi' ? 'कोडबेस संगठन और आर्किटेक्चर को समझना' :
                   locale === 'fr' ? 'Comprendre l\'organisation et l\'architecture de la base de code' :
                   locale === 'de' ? 'Verstehen der Codebase-Organisation und -Architektur' :
                   locale === 'ja' ? 'コードベースの構成とアーキテクチャの理解' :
                   locale === 'ko' ? '코드베이스 구성 및 아키텍처 이해' :
                   locale === 'es' ? 'Entender la organización y arquitectura del código' :
                   locale === 'ru' ? 'Понимание организации и архитектуры кодовой базы' : 'Understanding codebase organization and architecture'}
                </p>
              </div>
            </Link>

            <Link href="/docs/build-and-test" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <CommandLineIcon className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  {locale === 'zh' ? '构建和测试' :
                   locale === 'hi' ? 'बिल्ड और टेस्ट' :
                   locale === 'fr' ? 'Construction et Test' :
                   locale === 'de' ? 'Build und Test' :
                   locale === 'ja' ? 'ビルドとテスト' :
                   locale === 'ko' ? '빌드 및 테스트' :
                   locale === 'es' ? 'Construcción y Pruebas' :
                   locale === 'ru' ? 'Сборка и тестирование' : 'Build and Test'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '构建、测试和调试项目' :
                   locale === 'hi' ? 'प्रोजेक्ट बिल्ड, टेस्ट और डिबग करना' :
                   locale === 'fr' ? 'Construire, tester et déboguer le projet' :
                   locale === 'de' ? 'Projekt erstellen, testen und debuggen' :
                   locale === 'ja' ? 'プロジェクトのビルド、テスト、デバッグ' :
                   locale === 'ko' ? '프로젝트 빌드, 테스트 및 디버깅' :
                   locale === 'es' ? 'Construir, probar y depurar el proyecto' :
                   locale === 'ru' ? 'Сборка, тестирование и отладка проекта' : 'Building, testing, and debugging the project'}
                </p>
              </div>
            </Link>

            <Link href={`/${locale}/docs/core-api`} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <DocumentTextIcon className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  {locale === 'zh' ? '核心 API' :
                   locale === 'hi' ? 'कोर API' :
                   locale === 'fr' ? 'API Principale' :
                   locale === 'de' ? 'Kern-API' :
                   locale === 'ja' ? 'コア API' :
                   locale === 'ko' ? '핵심 API' :
                   locale === 'es' ? 'API Principal' :
                   locale === 'ru' ? 'Основной API' : 'Core API'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '探索核心 API 文档' :
                   locale === 'hi' ? 'कोर API दस्तावेज़ीकरण का अन्वेषण करें' :
                   locale === 'fr' ? 'Explorer la documentation de l\'API principale' :
                   locale === 'de' ? 'Erkunden Sie die Kern-API-Dokumentation' :
                   locale === 'ja' ? 'コア API ドキュメントを探索' :
                   locale === 'ko' ? '핵심 API 문서 탐색' :
                   locale === 'es' ? 'Explorar la documentación de la API principal' :
                   locale === 'ru' ? 'Изучите документацию основного API' : 'Explore the core API documentation'}
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/docs`}
              className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {locale === 'zh' ? '返回文档' :
               locale === 'hi' ? 'दस्तावेज़ीकरण पर वापस जाएं' :
               locale === 'fr' ? 'Retour à la Documentation' :
               locale === 'de' ? 'Zurück zur Dokumentation' :
               locale === 'ja' ? 'ドキュメントに戻る' :
               locale === 'ko' ? '문서로 돌아가기' :
               locale === 'es' ? 'Volver a la Documentación' :
               locale === 'ru' ? 'Вернуться к документации' : 'Back to Documentation'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
