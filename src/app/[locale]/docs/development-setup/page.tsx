import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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
    zh: 'Development Setup - Gemini CLI Documentation',
    en: 'Development Setup - Gemini CLI Documentation',
    hi: 'डेवलपमेंट सेटअप - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Configuration de Développement - Documentation Gemini CLI',
    de: 'Entwicklungsumgebung - Gemini CLI Dokumentation',
    ja: '開発環境セットアップ - Gemini CLI ドキュメント',
    ko: '개발 환경 설정 - Gemini CLI 문서',
    es: 'Configuración de Desarrollo - Documentación Gemini CLI',
    ru: 'Настройка разработки - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Setting up local development environment and dependencies including Node.js installation, project setup, development tools configuration, and environment variables management.',
    en: 'Setting up local development environment and dependencies including Node.js installation, project setup, development tools configuration, and environment variables management.',
    hi: 'Node.js इंस्टॉलेशन, प्रोजेक्ट सेटअप, डेवलपमेंट टूल्स कॉन्फ़िगरेशन और एनवायरनमेंट वेरिएबल्स मैनेजमेंट सहित स्थानीय डेवलपमेंट एनवायरनमेंट और डिपेंडेंसीज सेट करना।',
    fr: 'Configuration de l\'environnement de développement local et des dépendances, y compris l\'installation de Node.js, la configuration du projet, la configuration des outils de développement et la gestion des variables d\'environnement.',
    de: 'Einrichtung der lokalen Entwicklungsumgebung und Abhängigkeiten einschließlich Node.js-Installation, Projekteinrichtung, Konfiguration von Entwicklungstools und Verwaltung von Umgebungsvariablen.',
    ja: 'Node.jsのインストール、プロジェクトセットアップ、開発ツールの設定、環境変数の管理を含む、ローカル開発環境と依存関係のセットアップ。',
    ko: 'Node.js 설치, 프로젝트 설정, 개발 도구 구성 및 환경 변수 관리를 포함한 로컬 개발 환경 및 종속성 설정.',
    es: 'Configuración del entorno de desarrollo local y dependencias, incluyendo instalación de Node.js, configuración del proyecto, configuración de herramientas de desarrollo y gestión de variables de entorno.',
    ru: 'Настройка локальной среды разработки и зависимостей, включая установку Node.js, настройку проекта, конфигурацию инструментов разработки и управление переменными окружения.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

const getContent = (locale: string) => {
  const isZhOrEn = locale === 'zh' || locale === 'en'

  return {
    title: isZhOrEn ? 'Development Setup' : {
      hi: 'डेवलपमेंट सेटअप',
      fr: 'Configuration de Développement',
      de: 'Entwicklungsumgebung',
      ja: '開発環境セットアップ',
      ko: '개발 환경 설정',
      es: 'Configuración de Desarrollo',
      ru: 'Настройка разработки'
    }[locale] || 'Development Setup',

    subtitle: isZhOrEn ? 'Setting up local development environment and dependencies for Gemini CLI development' : {
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
        title: isZhOrEn ? 'System Requirements' : {
          hi: 'सिस्टम आवश्यकताएं',
          fr: 'Exigences Système',
          de: 'Systemanforderungen',
          ja: 'システム要件',
          ko: '시스템 요구사항',
          es: 'Requisitos del Sistema',
          ru: 'Системные требования'
        }[locale] || 'System Requirements',

        subtitle: isZhOrEn ? 'Ensure your system meets these requirements before starting' : {
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
            version: isZhOrEn ? '18.0.0 or higher' : {
              hi: '18.0.0 या उससे अधिक',
              fr: '18.0.0 ou supérieur',
              de: '18.0.0 oder höher',
              ja: '18.0.0以上',
              ko: '18.0.0 이상',
              es: '18.0.0 o superior',
              ru: '18.0.0 или выше'
            }[locale] || '18.0.0 or higher',
            description: isZhOrEn ? 'JavaScript runtime environment' : {
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
            version: isZhOrEn ? '8.0.0 or higher' : {
              hi: '8.0.0 या उससे अधिक',
              fr: '8.0.0 ou supérieur',
              de: '8.0.0 oder höher',
              ja: '8.0.0以上',
              ko: '8.0.0 이상',
              es: '8.0.0 o superior',
              ru: '8.0.0 или выше'
            }[locale] || '8.0.0 or higher',
            description: isZhOrEn ? 'Node.js package manager' : {
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
            version: isZhOrEn ? '2.20.0 or higher' : {
              hi: '2.20.0 या उससे अधिक',
              fr: '2.20.0 ou supérieur',
              de: '2.20.0 oder höher',
              ja: '2.20.0以上',
              ko: '2.20.0 이상',
              es: '2.20.0 o superior',
              ru: '2.20.0 или выше'
            }[locale] || '2.20.0 or higher',
            description: isZhOrEn ? 'Version control system' : {
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
            version: isZhOrEn ? 'Latest (recommended)' : {
              hi: 'नवीनतम (अनुशंसित)',
              fr: 'Dernière version (recommandée)',
              de: 'Neueste Version (empfohlen)',
              ja: '最新版（推奨）',
              ko: '최신 버전 (권장)',
              es: 'Última versión (recomendada)',
              ru: 'Последняя версия (рекомендуется)'
            }[locale] || 'Latest (recommended)',
            description: isZhOrEn ? 'Code editor' : {
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
        title: isZhOrEn ? 'Installation Steps' : {
          hi: 'इंस्टॉलेशन चरण',
          fr: 'Étapes d\'Installation',
          de: 'Installationsschritte',
          ja: 'インストール手順',
          ko: '설치 단계',
          es: 'Pasos de Instalación',
          ru: 'Шаги установки'
        }[locale] || 'Installation Steps',

        subtitle: isZhOrEn ? 'Follow these steps to set up your development environment' : {
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
            title: isZhOrEn ? 'Clone Repository' : {
              hi: 'रिपॉजिटरी क्लोन करें',
              fr: 'Cloner le Dépôt',
              de: 'Repository klonen',
              ja: 'リポジトリをクローン',
              ko: '저장소 복제',
              es: 'Clonar Repositorio',
              ru: 'Клонировать репозиторий'
            }[locale] || 'Clone Repository',
            description: isZhOrEn ? 'Get the Gemini CLI source code from GitHub' : {
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
            title: isZhOrEn ? 'Install Dependencies' : {
              hi: 'डिपेंडेंसीज इंस्टॉल करें',
              fr: 'Installer les Dépendances',
              de: 'Abhängigkeiten installieren',
              ja: '依存関係をインストール',
              ko: '종속성 설치',
              es: 'Instalar Dependencias',
              ru: 'Установить зависимости'
            }[locale] || 'Install Dependencies',
            description: isZhOrEn ? 'Install all required project dependencies' : {
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
            title: isZhOrEn ? 'Bootstrap Project' : {
              hi: 'प्रोजेक्ट बूटस्ट्रैप करें',
              fr: 'Amorcer le Projet',
              de: 'Projekt bootstrappen',
              ja: 'プロジェクトをブートストラップ',
              ko: '프로젝트 부트스트랩',
              es: 'Inicializar Proyecto',
              ru: 'Инициализировать проект'
            }[locale] || 'Bootstrap Project',
            description: isZhOrEn ? 'Set up monorepo and link packages' : {
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
            title: isZhOrEn ? 'Build Project' : {
              hi: 'प्रोजेक्ट बिल्ड करें',
              fr: 'Construire le Projet',
              de: 'Projekt erstellen',
              ja: 'プロジェクトをビルド',
              ko: '프로젝트 빌드',
              es: 'Construir Proyecto',
              ru: 'Собрать проект'
            }[locale] || 'Build Project',
            description: isZhOrEn ? 'Compile TypeScript code' : {
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
        title: isZhOrEn ? 'Environment Configuration' : {
          hi: 'एनवायरनमेंट कॉन्फ़िगरेशन',
          fr: 'Configuration d\'Environnement',
          de: 'Umgebungskonfiguration',
          ja: '環境設定',
          ko: '환경 구성',
          es: 'Configuración del Entorno',
          ru: 'Конфигурация окружения'
        }[locale] || 'Environment Configuration',

        subtitle: isZhOrEn ? 'Configure development environment and tools' : {
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
            name: isZhOrEn ? 'VS Code Extensions' : {
              hi: 'VS Code एक्सटेंशन',
              fr: 'Extensions VS Code',
              de: 'VS Code-Erweiterungen',
              ja: 'VS Code拡張機能',
              ko: 'VS Code 확장',
              es: 'Extensiones de VS Code',
              ru: 'Расширения VS Code'
            }[locale] || 'VS Code Extensions',
            description: isZhOrEn ? 'Recommended VS Code extensions' : {
              hi: 'अनुशंसित VS Code एक्सटेंशन',
              fr: 'Extensions VS Code recommandées',
              de: 'Empfohlene VS Code-Erweiterungen',
              ja: '推奨VS Code拡張機能',
              ko: '권장 VS Code 확장',
              es: 'Extensiones de VS Code recomendadas',
              ru: 'Рекомендуемые расширения VS Code'
            }[locale] || 'Recommended VS Code extensions',
            items: [
              'TypeScript and JavaScript Language Features',
              'ESLint',
              'Prettier - Code formatter',
              'GitLens',
              isZhOrEn ? 'Thunder Client (API testing)' : {
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
            name: isZhOrEn ? 'Environment Variables' : {
              hi: 'एनवायरनमेंट वेरिएबल्स',
              fr: 'Variables d\'Environnement',
              de: 'Umgebungsvariablen',
              ja: '環境変数',
              ko: '환경 변수',
              es: 'Variables de Entorno',
              ru: 'Переменные окружения'
            }[locale] || 'Environment Variables',
            description: isZhOrEn ? 'Set up necessary environment variables' : {
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
        title: isZhOrEn ? 'Verify Installation' : {
          hi: 'इंस्टॉलेशन सत्यापित करें',
          fr: 'Vérifier l\'Installation',
          de: 'Installation überprüfen',
          ja: 'インストールを確認',
          ko: '설치 확인',
          es: 'Verificar Instalación',
          ru: 'Проверить установку'
        }[locale] || 'Verify Installation',

        subtitle: isZhOrEn ? 'Confirm your development environment is set up correctly' : {
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
            name: isZhOrEn ? 'Run Tests' : {
              hi: 'टेस्ट चलाएं',
              fr: 'Exécuter les Tests',
              de: 'Tests ausführen',
              ja: 'テストを実行',
              ko: '테스트 실행',
              es: 'Ejecutar Pruebas',
              ru: 'Запустить тесты'
            }[locale] || 'Run Tests',
            command: 'npm test',
            expected: isZhOrEn ? 'All tests should pass' : {
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
            name: isZhOrEn ? 'Start Development Mode' : {
              hi: 'डेवलपमेंट मोड शुरू करें',
              fr: 'Démarrer le Mode Développement',
              de: 'Entwicklungsmodus starten',
              ja: '開発モードを開始',
              ko: '개발 모드 시작',
              es: 'Iniciar Modo de Desarrollo',
              ru: 'Запустить режим разработки'
            }[locale] || 'Start Development Mode',
            command: 'npm run dev',
            expected: isZhOrEn ? 'Should start development server' : {
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
            name: isZhOrEn ? 'Check Code Quality' : {
              hi: 'कोड क्वालिटी चेक करें',
              fr: 'Vérifier la Qualité du Code',
              de: 'Code-Qualität prüfen',
              ja: 'コード品質をチェック',
              ko: '코드 품질 확인',
              es: 'Verificar Calidad del Código',
              ru: 'Проверить качество кода'
            }[locale] || 'Check Code Quality',
            command: 'npm run lint',
            expected: isZhOrEn ? 'Should have no linting errors' : {
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

      subtitle: isZhOrEn ? 'Continue with these guides after setting up your development environment' : {
        hi: 'अपना डेवलपमेंट एनवायरनमेंट सेट करने के बाद इन गाइडों के साथ जारी रखें',
        fr: 'Continuez avec ces guides après avoir configuré votre environnement de développement',
        de: 'Setzen Sie mit diesen Leitfäden fort, nachdem Sie Ihre Entwicklungsumgebung eingerichtet haben',
        ja: '開発環境をセットアップした後、これらのガイドを続けてください',
        ko: '개발 환경을 설정한 후 이러한 가이드를 계속 진행하세요',
        es: 'Continúe con estas guías después de configurar su entorno de desarrollo',
        ru: 'Продолжите с этими руководствами после настройки среды разработки'
      }[locale] || 'Continue with these guides after setting up your development environment',

      links: [
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
          href: 'build-and-test',
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

export default async function DevelopmentSetupPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  const content = getContent(locale)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* System Requirements */}
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
                <div className="flex items-center mb-4">
                  <CogIcon className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{req.name}</h3>
                    <p className="text-sm text-gray-600">{req.version}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{req.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <code className="text-sm text-gray-800">{req.checkCommand}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.installation.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.installation.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.sections.installation.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm font-mono">
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

      {/* Environment Configuration */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.configuration.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.configuration.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.sections.configuration.configs.map((config, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{config.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{config.description}</p>
                <ul className="space-y-2">
                  {config.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">{item}</code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verify Installation */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sections.verification.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sections.verification.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {content.sections.verification.tests.map((test, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h3>
                    <div className="bg-gray-900 rounded-lg p-3 mb-3">
                      <code className="text-green-400 text-sm font-mono">{test.command}</code>
                    </div>
                    <p className="text-gray-600 text-sm">{test.expected}</p>
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
