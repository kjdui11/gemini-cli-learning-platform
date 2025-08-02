import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import {
  CogIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface LocaleBuildAndTestPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleBuildAndTestPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '构建和测试 - Gemini CLI 开发者文档',
    en: 'Build and Test - Gemini CLI Developer Documentation',
    hi: 'बिल्ड और टेस्ट - Gemini CLI डेवलपर दस्तावेज़ीकरण',
    fr: 'Construction et Test - Documentation Développeur Gemini CLI',
    de: 'Erstellen und Testen - Gemini CLI Entwicklerdokumentation',
    ja: 'ビルドとテスト - Gemini CLI 開発者ドキュメント',
    ko: '빌드 및 테스트 - Gemini CLI 개발자 문서',
    es: 'Construcción y Pruebas - Documentación para Desarrolladores Gemini CLI',
    ru: 'Сборка и Тестирование - Документация для Разработчиков Gemini CLI'
  }

  const descriptions = {
    zh: '完整的 Gemini CLI 构建、测试和调试指南，包括构建过程、测试框架、调试工具和 CI/CD。',
    en: 'Complete guide to building, testing, and debugging Gemini CLI including build process, testing framework, debugging tools, and CI/CD.',
    hi: 'बिल्ड प्रक्रिया, टेस्टिंग फ्रेमवर्क, डिबगिंग टूल्स और CI/CD सहित Gemini CLI के बिल्डिंग, टेस्टिंग और डिबगिंग के लिए पूर्ण गाइड।',
    fr: 'Guide complet pour construire, tester et déboguer Gemini CLI incluant le processus de construction, le framework de test, les outils de débogage et CI/CD.',
    de: 'Vollständiger Leitfaden zum Erstellen, Testen und Debuggen von Gemini CLI einschließlich Build-Prozess, Test-Framework, Debugging-Tools und CI/CD.',
    ja: 'ビルドプロセス、テストフレームワーク、デバッグツール、CI/CDを含むGemini CLIのビルド、テスト、デバッグの完全ガイド。',
    ko: '빌드 프로세스, 테스팅 프레임워크, 디버깅 도구 및 CI/CD를 포함한 Gemini CLI 빌드, 테스트 및 디버깅에 대한 완전한 가이드.',
    es: 'Guía completa para construir, probar y depurar Gemini CLI incluyendo proceso de construcción, framework de pruebas, herramientas de depuración y CI/CD.',
    ru: 'Полное руководство по сборке, тестированию и отладке Gemini CLI, включая процесс сборки, тестовый фреймворк, инструменты отладки и CI/CD.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 构建, 测试, 调试, 单元测试, 集成测试, CI/CD' : 'Gemini CLI build, testing, debugging, unit testing, integration testing, CI/CD',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const getContent = (locale: string) => {
  if (locale === 'zh') {
    return {
      title: '构建和测试',
      subtitle: '完整的 Gemini CLI 构建、测试和调试指南',
      buildProcess: {
        title: '构建过程',
        subtitle: '了解构建系统和开发工作流程',
        commands: [
          {
            command: 'npm run bootstrap',
            description: '安装依赖项并链接包',
            usage: '初始设置和添加新依赖项后'
          },
          {
            command: 'npm run build',
            description: '按依赖顺序构建所有包',
            usage: '测试或发布之前'
          },
          {
            command: 'npm run build:watch',
            description: '在监视模式下构建包',
            usage: '活跃开发期间'
          },
          {
            command: 'npm run clean',
            description: '清理构建产物和 node_modules',
            usage: '遇到构建问题时'
          }
        ]
      },
      testFramework: {
        title: '测试框架',
        subtitle: '使用 Jest 和 TypeScript 进行全面测试',
        commands: [
          {
            command: 'npm run test',
            description: '运行所有包的测试',
            usage: '完整测试套件执行'
          },
          {
            command: 'npm run test:watch',
            description: '在监视模式下运行测试',
            usage: '开发期间'
          },
          {
            command: 'npm run test:coverage',
            description: '生成测试覆盖率报告',
            usage: '质量保证和 CI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: '运行特定包的测试',
            usage: '专注测试'
          }
        ]
      },
      workflow: {
        title: '开发工作流程',
        subtitle: '推荐的开发和测试工作流程',
        steps: [
          {
            title: '初始设置',
            description: '设置开发环境并安装依赖项',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: '开发模式',
            description: '启动监视模式以自动重新构建',
            command: 'npm run build:watch'
          },
          {
            title: '测试',
            description: '在开发期间持续运行测试',
            command: 'npm run test:watch'
          },
          {
            title: '质量检查',
            description: '在提交前运行代码检查、格式化和类型检查',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: '调试',
        subtitle: '调试问题的工具和技术',
        techniques: [
          {
            name: '调试模式',
            description: '启用调试日志以获得详细输出',
            command: 'DEBUG=gemini:* gemini ask "你好"',
            note: '这将显示所有 Gemini CLI 操作的详细日志'
          },
          {
            name: 'VS Code 调试',
            description: '使用提供的 VS Code 启动配置',
            command: '.vscode/launch.json',
            note: '设置断点并直接在 VS Code 中调试'
          },
          {
            name: '测试调试',
            description: '调试特定测试',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: '运行和调试特定测试用例'
          },
          {
            name: '性能分析',
            description: '分析性能问题',
            command: 'node --prof packages/cli/bin/gemini',
            note: '生成性能分析文件用于分析'
          }
        ]
      },
      ci: {
        title: '持续集成',
        subtitle: '自动化测试和质量保证',
        stages: [
          {
            name: '构建',
            description: '编译 TypeScript 并构建所有包',
            icon: CheckCircleIcon
          },
          {
            name: '测试',
            description: '运行单元测试并生成覆盖率报告',
            icon: BeakerIcon
          },
          {
            name: '部署',
            description: '发布包并部署文档',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: '常见问题',
        subtitle: '常见构建和测试问题的解决方案',
        issues: [
          {
            title: '构建失败',
            description: '如果拉取更改后构建失败，请尝试清理并重新安装',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: '测试失败',
            description: '对于间歇性测试失败，使用增加的超时时间运行测试',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: '内存问题',
            description: '如果在构建期间遇到内存不足错误',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: '下一步',
        subtitle: '通过这些资源继续您的开发之旅',
        links: [
          {
            title: '核心 API',
            description: '探索核心 API 文档',
            href: '/zh/docs/core-api'
          },
          {
            title: '开发环境设置',
            description: '设置本地开发环境和依赖项',
            href: '/zh/docs/development-setup'
          },
          {
            title: '项目结构',
            description: '了解代码库组织和架构',
            href: '/zh/docs/project-structure'
          }
        ],
        backToDocsText: '返回文档'
      }
    }
  }

  if (locale === 'ru') {
    return {
      title: 'Сборка и Тестирование',
      subtitle: 'Полное руководство по сборке, тестированию и отладке Gemini CLI',
      buildProcess: {
        title: 'Процесс Сборки',
        subtitle: 'Понимание системы сборки и рабочего процесса разработки',
        commands: [
          {
            command: 'npm run bootstrap',
            description: 'Установить зависимости и связать пакеты',
            usage: 'Первоначальная настройка и после добавления новых зависимостей'
          },
          {
            command: 'npm run build',
            description: 'Собрать все пакеты в порядке зависимостей',
            usage: 'Перед тестированием или выпуском'
          },
          {
            command: 'npm run build:watch',
            description: 'Собрать пакеты в режиме наблюдения',
            usage: 'Во время активной разработки'
          },
          {
            command: 'npm run clean',
            description: 'Очистить артефакты сборки и node_modules',
            usage: 'При возникновении проблем со сборкой'
          }
        ]
      },
      testFramework: {
        title: 'Фреймворк Тестирования',
        subtitle: 'Комплексное тестирование с Jest и TypeScript',
        commands: [
          {
            command: 'npm run test',
            description: 'Запустить все тесты во всех пакетах',
            usage: 'Выполнение полного набора тестов'
          },
          {
            command: 'npm run test:watch',
            description: 'Запустить тесты в режиме наблюдения',
            usage: 'Во время разработки'
          },
          {
            command: 'npm run test:coverage',
            description: 'Сгенерировать отчеты о покрытии тестами',
            usage: 'Обеспечение качества и CI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: 'Запустить тесты для конкретного пакета',
            usage: 'Целенаправленное тестирование'
          }
        ]
      },
      workflow: {
        title: 'Рабочий Процесс Разработки',
        subtitle: 'Рекомендуемый рабочий процесс разработки и тестирования',
        steps: [
          {
            title: 'Первоначальная Настройка',
            description: 'Настроить среду разработки и установить зависимости',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: 'Режим Разработки',
            description: 'Запустить режим наблюдения для автоматической пересборки',
            command: 'npm run build:watch'
          },
          {
            title: 'Тестирование',
            description: 'Непрерывно запускать тесты во время разработки',
            command: 'npm run test:watch'
          },
          {
            title: 'Проверка Качества',
            description: 'Запустить проверки кода, форматирование и проверку типов перед коммитом',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: 'Отладка',
        subtitle: 'Инструменты и методы для отладки проблем',
        techniques: [
          {
            name: 'Режим Отладки',
            description: 'Включить журналирование отладки для подробного вывода',
            command: 'DEBUG=gemini:* gemini ask "Привет"',
            note: 'Это покажет подробные журналы для всех операций Gemini CLI'
          },
          {
            name: 'Отладка VS Code',
            description: 'Использовать предоставленную конфигурацию запуска VS Code',
            command: '.vscode/launch.json',
            note: 'Установить точки останова и отлаживать прямо в VS Code'
          },
          {
            name: 'Отладка Тестов',
            description: 'Отладить конкретные тесты',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: 'Запустить и отладить конкретные тестовые случаи'
          },
          {
            name: 'Профилирование Производительности',
            description: 'Профилировать проблемы производительности',
            command: 'node --prof packages/cli/bin/gemini',
            note: 'Сгенерировать профили производительности для анализа'
          }
        ]
      },
      ci: {
        title: 'Непрерывная Интеграция',
        subtitle: 'Автоматизированное тестирование и обеспечение качества',
        stages: [
          {
            name: 'Сборка',
            description: 'Скомпилировать TypeScript и собрать все пакеты',
            icon: CheckCircleIcon
          },
          {
            name: 'Тестирование',
            description: 'Запустить модульные тесты и сгенерировать отчеты о покрытии',
            icon: BeakerIcon
          },
          {
            name: 'Развертывание',
            description: 'Опубликовать пакеты и развернуть документацию',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: 'Распространенные Проблемы',
        subtitle: 'Решения распространенных проблем сборки и тестирования',
        issues: [
          {
            title: 'Сбои Сборки',
            description: 'Если сборка не удается после получения изменений, попробуйте очистить и переустановить',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: 'Сбои Тестов',
            description: 'Для периодических сбоев тестов запустите тесты с увеличенным таймаутом',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: 'Проблемы с Памятью',
            description: 'Если вы сталкиваетесь с ошибками нехватки памяти во время сборки',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: 'Следующие Шаги',
        subtitle: 'Продолжите свое путешествие в разработке с этими ресурсами',
        links: [
          {
            title: 'Основной API',
            description: 'Изучить документацию основного API',
            href: `/${locale}/docs/core-api`
          },
          {
            title: 'Настройка Разработки',
            description: 'Настройка локальной среды разработки и зависимостей',
            href: `/${locale}/docs/development-setup`
          },
          {
            title: 'Структура Проекта',
            description: 'Понимание организации кодовой базы и архитектуры',
            href: `/${locale}/docs/project-structure`
          }
        ],
        backToDocsText: 'Назад к Документации'
      }
    }
  }

  if (locale === 'hi') {
    return {
      title: 'बिल्ड और टेस्ट',
      subtitle: 'Gemini CLI के बिल्डिंग, टेस्टिंग और डिबगिंग के लिए पूर्ण गाइड',
      buildProcess: {
        title: 'बिल्ड प्रक्रिया',
        subtitle: 'बिल्ड सिस्टम और डेवलपमेंट वर्कफ़्लो को समझना',
        commands: [
          {
            command: 'npm run bootstrap',
            description: 'डिपेंडेंसी इंस्टॉल करें और पैकेज लिंक करें',
            usage: 'प्रारंभिक सेटअप और नई डिपेंडेंसी जोड़ने के बाद'
          },
          {
            command: 'npm run build',
            description: 'डिपेंडेंसी क्रम में सभी पैकेज बिल्ड करें',
            usage: 'टेस्टिंग या रिलीज़ से पहले'
          },
          {
            command: 'npm run build:watch',
            description: 'वॉच मोड में पैकेज बिल्ड करें',
            usage: 'सक्रिय डेवलपमेंट के दौरान'
          },
          {
            command: 'npm run clean',
            description: 'बिल्ड आर्टिफैक्ट्स और node_modules साफ़ करें',
            usage: 'बिल्ड समस्याओं का सामना करते समय'
          }
        ]
      },
      testFramework: {
        title: 'टेस्टिंग फ्रेमवर्क',
        subtitle: 'Jest और TypeScript के साथ व्यापक टेस्टिंग',
        commands: [
          {
            command: 'npm run test',
            description: 'सभी पैकेज में सभी टेस्ट चलाएं',
            usage: 'पूर्ण टेस्ट सूट निष्पादन'
          },
          {
            command: 'npm run test:watch',
            description: 'वॉच मोड में टेस्ट चलाएं',
            usage: 'डेवलपमेंट के दौरान'
          },
          {
            command: 'npm run test:coverage',
            description: 'टेस्ट कवरेज रिपोर्ट जेनरेट करें',
            usage: 'गुणवत्ता आश्वासन और CI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: 'विशिष्ट पैकेज के लिए टेस्ट चलाएं',
            usage: 'केंद्रित टेस्टिंग'
          }
        ]
      },
      workflow: {
        title: 'डेवलपमेंट वर्कफ़्लो',
        subtitle: 'अनुशंसित डेवलपमेंट और टेस्टिंग वर्कफ़्लो',
        steps: [
          {
            title: 'प्रारंभिक सेटअप',
            description: 'डेवलपमेंट एनवायरनमेंट सेट करें और डिपेंडेंसी इंस्टॉल करें',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: 'डेवलपमेंट मोड',
            description: 'ऑटोमैटिक रीबिल्डिंग के लिए वॉच मोड शुरू करें',
            command: 'npm run build:watch'
          },
          {
            title: 'टेस्टिंग',
            description: 'डेवलपमेंट के दौरान लगातार टेस्ट चलाएं',
            command: 'npm run test:watch'
          },
          {
            title: 'गुणवत्ता जांच',
            description: 'कमिट करने से पहले कोड चेक, फॉर्मेटिंग और टाइप चेकिंग चलाएं',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: 'डिबगिंग',
        subtitle: 'समस्याओं को डिबग करने के लिए टूल्स और तकनीकें',
        techniques: [
          {
            name: 'डिबग मोड',
            description: 'विस्तृत आउटपुट के लिए डिबग लॉगिंग सक्षम करें',
            command: 'DEBUG=gemini:* gemini ask "नमस्ते"',
            note: 'यह सभी Gemini CLI ऑपरेशन के लिए विस्तृत लॉग दिखाएगा'
          },
          {
            name: 'VS Code डिबगिंग',
            description: 'प्रदान की गई VS Code लॉन्च कॉन्फ़िगरेशन का उपयोग करें',
            command: '.vscode/launch.json',
            note: 'ब्रेकपॉइंट सेट करें और VS Code में सीधे डिबग करें'
          },
          {
            name: 'टेस्ट डिबगिंग',
            description: 'विशिष्ट टेस्ट डिबग करें',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: 'विशिष्ट टेस्ट केस चलाएं और डिबग करें'
          },
          {
            name: 'परफॉर्मेंस प्रोफाइलिंग',
            description: 'परफॉर्मेंस समस्याओं को प्रोफाइल करें',
            command: 'node --prof packages/cli/bin/gemini',
            note: 'विश्लेषण के लिए परफॉर्मेंस प्रोफाइल जेनरेट करें'
          }
        ]
      },
      ci: {
        title: 'निरंतर एकीकरण',
        subtitle: 'स्वचालित टेस्टिंग और गुणवत्ता आश्वासन',
        stages: [
          {
            name: 'बिल्ड',
            description: 'TypeScript कंपाइल करें और सभी पैकेज बिल्ड करें',
            icon: CheckCircleIcon
          },
          {
            name: 'टेस्ट',
            description: 'यूनिट टेस्ट चलाएं और कवरेज रिपोर्ट जेनरेट करें',
            icon: BeakerIcon
          },
          {
            name: 'डिप्लॉय',
            description: 'पैकेज प्रकाशित करें और डॉक्यूमेंटेशन डिप्लॉय करें',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: 'सामान्य समस्याएं',
        subtitle: 'सामान्य बिल्ड और टेस्ट समस्याओं के समाधान',
        issues: [
          {
            title: 'बिल्ड विफलताएं',
            description: 'यदि परिवर्तन खींचने के बाद बिल्ड विफल हो जाते हैं, तो साफ़ करने और पुनः इंस्टॉल करने का प्रयास करें',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: 'टेस्ट विफलताएं',
            description: 'रुक-रुक कर होने वाली टेस्ट विफलताओं के लिए, बढ़े हुए टाइमआउट के साथ टेस्ट चलाएं',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: 'मेमोरी समस्याएं',
            description: 'यदि आप बिल्ड के दौरान आउट-ऑफ-मेमोरी एरर का सामना करते हैं',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: 'अगले कदम',
        subtitle: 'इन संसाधनों के साथ अपनी डेवलपमेंट यात्रा जारी रखें',
        links: [
          {
            title: 'कोर API',
            description: 'कोर API डॉक्यूमेंटेशन एक्सप्लोर करें',
            href: `/${locale}/docs/core-api`
          },
          {
            title: 'डेवलपमेंट सेटअप',
            description: 'स्थानीय डेवलपमेंट एनवायरनमेंट और डिपेंडेंसी सेट करना',
            href: `/${locale}/docs/development-setup`
          },
          {
            title: 'प्रोजेक्ट स्ट्रक्चर',
            description: 'कोडबेस संगठन और आर्किटेक्चर को समझना',
            href: `/${locale}/docs/project-structure`
          }
        ],
        backToDocsText: 'डॉक्यूमेंटेशन पर वापस जाएं'
      }
    }
  }

  if (locale === 'de') {
    return {
      title: 'Erstellen und Testen',
      subtitle: 'Vollständiger Leitfaden zum Erstellen, Testen und Debuggen von Gemini CLI',
      buildProcess: {
        title: 'Build-Prozess',
        subtitle: 'Das Build-System und den Entwicklungsworkflow verstehen',
        commands: [
          {
            command: 'npm run bootstrap',
            description: 'Abhängigkeiten installieren und Pakete verknüpfen',
            usage: 'Ersteinrichtung und nach dem Hinzufügen neuer Abhängigkeiten'
          },
          {
            command: 'npm run build',
            description: 'Alle Pakete in Abhängigkeitsreihenfolge erstellen',
            usage: 'Vor dem Testen oder Veröffentlichen'
          },
          {
            command: 'npm run build:watch',
            description: 'Pakete im Watch-Modus erstellen',
            usage: 'Während der aktiven Entwicklung'
          },
          {
            command: 'npm run clean',
            description: 'Build-Artefakte und node_modules bereinigen',
            usage: 'Bei Build-Problemen'
          }
        ]
      },
      testFramework: {
        title: 'Test-Framework',
        subtitle: 'Umfassendes Testen mit Jest und TypeScript',
        commands: [
          {
            command: 'npm run test',
            description: 'Alle Tests in allen Paketen ausführen',
            usage: 'Vollständige Testsuite-Ausführung'
          },
          {
            command: 'npm run test:watch',
            description: 'Tests im Watch-Modus ausführen',
            usage: 'Während der Entwicklung'
          },
          {
            command: 'npm run test:coverage',
            description: 'Test-Coverage-Berichte generieren',
            usage: 'Qualitätssicherung und CI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: 'Tests für spezifisches Paket ausführen',
            usage: 'Fokussiertes Testen'
          }
        ]
      },
      workflow: {
        title: 'Entwicklungsworkflow',
        subtitle: 'Empfohlener Entwicklungs- und Test-Workflow',
        steps: [
          {
            title: 'Ersteinrichtung',
            description: 'Entwicklungsumgebung einrichten und Abhängigkeiten installieren',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: 'Entwicklungsmodus',
            description: 'Watch-Modus für automatisches Neuerstellen starten',
            command: 'npm run build:watch'
          },
          {
            title: 'Testen',
            description: 'Tests kontinuierlich während der Entwicklung ausführen',
            command: 'npm run test:watch'
          },
          {
            title: 'Qualitätsprüfung',
            description: 'Code-Checks, Formatierung und Typprüfung vor dem Commit ausführen',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: 'Debugging',
        subtitle: 'Tools und Techniken zum Debuggen von Problemen',
        techniques: [
          {
            name: 'Debug-Modus',
            description: 'Debug-Logging für detaillierte Ausgabe aktivieren',
            command: 'DEBUG=gemini:* gemini ask "Hallo"',
            note: 'Dies zeigt detaillierte Logs für alle Gemini CLI-Operationen'
          },
          {
            name: 'VS Code Debugging',
            description: 'Die bereitgestellte VS Code Launch-Konfiguration verwenden',
            command: '.vscode/launch.json',
            note: 'Breakpoints setzen und direkt in VS Code debuggen'
          },
          {
            name: 'Test-Debugging',
            description: 'Spezifische Tests debuggen',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: 'Spezifische Testfälle ausführen und debuggen'
          },
          {
            name: 'Performance-Profiling',
            description: 'Performance-Probleme profilieren',
            command: 'node --prof packages/cli/bin/gemini',
            note: 'Performance-Profile für die Analyse generieren'
          }
        ]
      },
      ci: {
        title: 'Kontinuierliche Integration',
        subtitle: 'Automatisiertes Testen und Qualitätssicherung',
        stages: [
          {
            name: 'Erstellen',
            description: 'TypeScript kompilieren und alle Pakete erstellen',
            icon: CheckCircleIcon
          },
          {
            name: 'Testen',
            description: 'Unit-Tests ausführen und Coverage-Berichte generieren',
            icon: BeakerIcon
          },
          {
            name: 'Bereitstellen',
            description: 'Pakete veröffentlichen und Dokumentation bereitstellen',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: 'Häufige Probleme',
        subtitle: 'Lösungen für häufige Build- und Test-Probleme',
        issues: [
          {
            title: 'Build-Fehler',
            description: 'Wenn Builds nach dem Ziehen von Änderungen fehlschlagen, versuchen Sie zu bereinigen und neu zu installieren',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: 'Test-Fehler',
            description: 'Für intermittierende Test-Fehler führen Sie Tests mit erhöhtem Timeout aus',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: 'Speicherprobleme',
            description: 'Wenn Sie während der Builds auf Out-of-Memory-Fehler stoßen',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: 'Nächste Schritte',
        subtitle: 'Setzen Sie Ihre Entwicklungsreise mit diesen Ressourcen fort',
        links: [
          {
            title: 'Kern-API',
            description: 'Die Kern-API-Dokumentation erkunden',
            href: `/${locale}/docs/core-api`
          },
          {
            title: 'Entwicklungssetup',
            description: 'Lokale Entwicklungsumgebung und Abhängigkeiten einrichten',
            href: `/${locale}/docs/development-setup`
          },
          {
            title: 'Projektstruktur',
            description: 'Codebase-Organisation und Architektur verstehen',
            href: `/${locale}/docs/project-structure`
          }
        ],
        backToDocsText: 'Zurück zur Dokumentation'
      }
    }
  }

  if (locale === 'fr') {
    return {
      title: 'Construction et Test',
      subtitle: 'Guide complet pour construire, tester et déboguer Gemini CLI',
      buildProcess: {
        title: 'Processus de Construction',
        subtitle: 'Comprendre le système de construction et le flux de travail de développement',
        commands: [
          {
            command: 'npm run bootstrap',
            description: 'Installer les dépendances et lier les packages',
            usage: 'Configuration initiale et après ajout de nouvelles dépendances'
          },
          {
            command: 'npm run build',
            description: 'Construire tous les packages dans l\'ordre des dépendances',
            usage: 'Avant les tests ou la publication'
          },
          {
            command: 'npm run build:watch',
            description: 'Construire les packages en mode surveillance',
            usage: 'Pendant le développement actif'
          },
          {
            command: 'npm run clean',
            description: 'Nettoyer les artefacts de construction et node_modules',
            usage: 'Lors de problèmes de construction'
          }
        ]
      },
      testFramework: {
        title: 'Framework de Test',
        subtitle: 'Tests complets avec Jest et TypeScript',
        commands: [
          {
            command: 'npm run test',
            description: 'Exécuter tous les tests dans tous les packages',
            usage: 'Exécution complète de la suite de tests'
          },
          {
            command: 'npm run test:watch',
            description: 'Exécuter les tests en mode surveillance',
            usage: 'Pendant le développement'
          },
          {
            command: 'npm run test:coverage',
            description: 'Générer des rapports de couverture de tests',
            usage: 'Assurance qualité et CI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: 'Exécuter les tests pour un package spécifique',
            usage: 'Tests ciblés'
          }
        ]
      },
      workflow: {
        title: 'Flux de Travail de Développement',
        subtitle: 'Flux de travail de développement et de test recommandé',
        steps: [
          {
            title: 'Configuration Initiale',
            description: 'Configurer l\'environnement de développement et installer les dépendances',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: 'Mode Développement',
            description: 'Démarrer le mode surveillance pour la reconstruction automatique',
            command: 'npm run build:watch'
          },
          {
            title: 'Tests',
            description: 'Exécuter continuellement les tests pendant le développement',
            command: 'npm run test:watch'
          },
          {
            title: 'Vérification Qualité',
            description: 'Exécuter les vérifications de code, le formatage et la vérification de type avant le commit',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: 'Débogage',
        subtitle: 'Outils et techniques pour déboguer les problèmes',
        techniques: [
          {
            name: 'Mode Débogage',
            description: 'Activer la journalisation de débogage pour une sortie détaillée',
            command: 'DEBUG=gemini:* gemini ask "Bonjour"',
            note: 'Cela affichera des journaux détaillés pour toutes les opérations Gemini CLI'
          },
          {
            name: 'Débogage VS Code',
            description: 'Utiliser la configuration de lancement VS Code fournie',
            command: '.vscode/launch.json',
            note: 'Définir des points d\'arrêt et déboguer directement dans VS Code'
          },
          {
            name: 'Débogage de Tests',
            description: 'Déboguer des tests spécifiques',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: 'Exécuter et déboguer des cas de test spécifiques'
          },
          {
            name: 'Profilage de Performance',
            description: 'Profiler les problèmes de performance',
            command: 'node --prof packages/cli/bin/gemini',
            note: 'Générer des profils de performance pour l\'analyse'
          }
        ]
      },
      ci: {
        title: 'Intégration Continue',
        subtitle: 'Tests automatisés et assurance qualité',
        stages: [
          {
            name: 'Construction',
            description: 'Compiler TypeScript et construire tous les packages',
            icon: CheckCircleIcon
          },
          {
            name: 'Test',
            description: 'Exécuter les tests unitaires et générer des rapports de couverture',
            icon: BeakerIcon
          },
          {
            name: 'Déploiement',
            description: 'Publier les packages et déployer la documentation',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: 'Problèmes Courants',
        subtitle: 'Solutions aux problèmes courants de construction et de test',
        issues: [
          {
            title: 'Échecs de Construction',
            description: 'Si les constructions échouent après avoir tiré des changements, essayez de nettoyer et réinstaller',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: 'Échecs de Tests',
            description: 'Pour les échecs de tests intermittents, exécutez les tests avec un timeout augmenté',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: 'Problèmes de Mémoire',
            description: 'Si vous rencontrez des erreurs de mémoire insuffisante pendant les constructions',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: 'Prochaines Étapes',
        subtitle: 'Continuez votre parcours de développement avec ces ressources',
        links: [
          {
            title: 'API Principal',
            description: 'Explorer la documentation de l\'API principal',
            href: `/${locale}/docs/core-api`
          },
          {
            title: 'Configuration de Développement',
            description: 'Configuration de l\'environnement de développement local et des dépendances',
            href: `/${locale}/docs/development-setup`
          },
          {
            title: 'Structure du Projet',
            description: 'Comprendre l\'organisation de la base de code et l\'architecture',
            href: `/${locale}/docs/project-structure`
          }
        ],
        backToDocsText: 'Retour à la Documentation'
      }
    }
  }

  if (locale === 'ja') {
    return {
      title: 'ビルドとテスト',
      subtitle: 'Gemini CLIのビルド、テスト、デバッグの完全ガイド',
      buildProcess: {
        title: 'ビルドプロセス',
        subtitle: 'ビルドシステムと開発ワークフローの理解',
        commands: [
          {
            command: 'npm run bootstrap',
            description: '依存関係をインストールしてパッケージをリンクする',
            usage: '初期セットアップと新しい依存関係追加後'
          },
          {
            command: 'npm run build',
            description: '依存関係の順序ですべてのパッケージをビルドする',
            usage: 'テストまたはリリース前'
          },
          {
            command: 'npm run build:watch',
            description: 'ウォッチモードでパッケージをビルドする',
            usage: 'アクティブな開発中'
          },
          {
            command: 'npm run clean',
            description: 'ビルドアーティファクトとnode_modulesをクリーンアップする',
            usage: 'ビルド問題に遭遇した時'
          }
        ]
      },
      testFramework: {
        title: 'テストフレームワーク',
        subtitle: 'JestとTypeScriptによる包括的なテスト',
        commands: [
          {
            command: 'npm run test',
            description: 'すべてのパッケージのすべてのテストを実行する',
            usage: '完全なテストスイートの実行'
          },
          {
            command: 'npm run test:watch',
            description: 'ウォッチモードでテストを実行する',
            usage: '開発中'
          },
          {
            command: 'npm run test:coverage',
            description: 'テストカバレッジレポートを生成する',
            usage: '品質保証とCI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: '特定のパッケージのテストを実行する',
            usage: '集中的なテスト'
          }
        ]
      },
      workflow: {
        title: '開発ワークフロー',
        subtitle: '推奨される開発とテストのワークフロー',
        steps: [
          {
            title: '初期セットアップ',
            description: '開発環境をセットアップし、依存関係をインストールする',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: '開発モード',
            description: '自動再ビルドのためのウォッチモードを開始する',
            command: 'npm run build:watch'
          },
          {
            title: 'テスト',
            description: '開発中に継続的にテストを実行する',
            command: 'npm run test:watch'
          },
          {
            title: '品質チェック',
            description: 'コミット前にコードチェック、フォーマット、型チェックを実行する',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: 'デバッグ',
        subtitle: '問題をデバッグするためのツールとテクニック',
        techniques: [
          {
            name: 'デバッグモード',
            description: '詳細な出力のためにデバッグログを有効にする',
            command: 'DEBUG=gemini:* gemini ask "こんにちは"',
            note: 'これによりすべてのGemini CLI操作の詳細なログが表示されます'
          },
          {
            name: 'VS Codeデバッグ',
            description: '提供されたVS Code起動設定を使用する',
            command: '.vscode/launch.json',
            note: 'ブレークポイントを設定してVS Codeで直接デバッグする'
          },
          {
            name: 'テストデバッグ',
            description: '特定のテストをデバッグする',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: '特定のテストケースを実行してデバッグする'
          },
          {
            name: 'パフォーマンスプロファイリング',
            description: 'パフォーマンス問題をプロファイルする',
            command: 'node --prof packages/cli/bin/gemini',
            note: '分析用のパフォーマンスプロファイルを生成する'
          }
        ]
      },
      ci: {
        title: '継続的インテグレーション',
        subtitle: '自動化されたテストと品質保証',
        stages: [
          {
            name: 'ビルド',
            description: 'TypeScriptをコンパイルしてすべてのパッケージをビルドする',
            icon: CheckCircleIcon
          },
          {
            name: 'テスト',
            description: 'ユニットテストを実行してカバレッジレポートを生成する',
            icon: BeakerIcon
          },
          {
            name: 'デプロイ',
            description: 'パッケージを公開してドキュメントをデプロイする',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: '一般的な問題',
        subtitle: '一般的なビルドとテストの問題の解決策',
        issues: [
          {
            title: 'ビルド失敗',
            description: '変更をプルした後にビルドが失敗する場合は、クリーンアップして再インストールを試してください',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: 'テスト失敗',
            description: '断続的なテスト失敗の場合は、タイムアウトを増やしてテストを実行してください',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: 'メモリ問題',
            description: 'ビルド中にメモリ不足エラーが発生した場合',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: '次のステップ',
        subtitle: 'これらのリソースで開発の旅を続けてください',
        links: [
          {
            title: 'コアAPI',
            description: 'コアAPIドキュメントを探索する',
            href: `/${locale}/docs/core-api`
          },
          {
            title: '開発セットアップ',
            description: 'ローカル開発環境と依存関係のセットアップ',
            href: `/${locale}/docs/development-setup`
          },
          {
            title: 'プロジェクト構造',
            description: 'コードベースの組織とアーキテクチャの理解',
            href: `/${locale}/docs/project-structure`
          }
        ],
        backToDocsText: 'ドキュメントに戻る'
      }
    }
  }

  if (locale === 'ko') {
    return {
      title: '빌드 및 테스트',
      subtitle: 'Gemini CLI 빌드, 테스트 및 디버깅에 대한 완전한 가이드',
      buildProcess: {
        title: '빌드 프로세스',
        subtitle: '빌드 시스템과 개발 워크플로우 이해하기',
        commands: [
          {
            command: 'npm run bootstrap',
            description: '종속성을 설치하고 패키지를 연결합니다',
            usage: '초기 설정 및 새로운 종속성 추가 후'
          },
          {
            command: 'npm run build',
            description: '종속성 순서대로 모든 패키지를 빌드합니다',
            usage: '테스트 또는 릴리스 전'
          },
          {
            command: 'npm run build:watch',
            description: '감시 모드에서 패키지를 빌드합니다',
            usage: '활발한 개발 중'
          },
          {
            command: 'npm run clean',
            description: '빌드 아티팩트와 node_modules를 정리합니다',
            usage: '빌드 문제가 발생했을 때'
          }
        ]
      },
      testFramework: {
        title: '테스팅 프레임워크',
        subtitle: 'Jest와 TypeScript를 사용한 포괄적인 테스팅',
        commands: [
          {
            command: 'npm run test',
            description: '모든 패키지의 모든 테스트를 실행합니다',
            usage: '전체 테스트 스위트 실행'
          },
          {
            command: 'npm run test:watch',
            description: '감시 모드에서 테스트를 실행합니다',
            usage: '개발 중'
          },
          {
            command: 'npm run test:coverage',
            description: '테스트 커버리지 보고서를 생성합니다',
            usage: '품질 보증 및 CI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: '특정 패키지의 테스트를 실행합니다',
            usage: '집중적인 테스팅'
          }
        ]
      },
      workflow: {
        title: '개발 워크플로우',
        subtitle: '권장되는 개발 및 테스트 워크플로우',
        steps: [
          {
            title: '초기 설정',
            description: '개발 환경을 설정하고 종속성을 설치합니다',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: '개발 모드',
            description: '자동 재빌드를 위한 감시 모드를 시작합니다',
            command: 'npm run build:watch'
          },
          {
            title: '테스팅',
            description: '개발 중에 지속적으로 테스트를 실행합니다',
            command: 'npm run test:watch'
          },
          {
            title: '품질 검사',
            description: '커밋 전에 코드 검사, 포맷팅 및 타입 검사를 실행합니다',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: '디버깅',
        subtitle: '문제를 디버깅하기 위한 도구와 기법',
        techniques: [
          {
            name: '디버그 모드',
            description: '상세한 출력을 위해 디버그 로깅을 활성화합니다',
            command: 'DEBUG=gemini:* gemini ask "안녕하세요"',
            note: '이것은 모든 Gemini CLI 작업에 대한 상세한 로그를 보여줍니다'
          },
          {
            name: 'VS Code 디버깅',
            description: '제공된 VS Code 실행 구성을 사용합니다',
            command: '.vscode/launch.json',
            note: '중단점을 설정하고 VS Code에서 직접 디버깅합니다'
          },
          {
            name: '테스트 디버깅',
            description: '특정 테스트를 디버깅합니다',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: '특정 테스트 케이스를 실행하고 디버깅합니다'
          },
          {
            name: '성능 프로파일링',
            description: '성능 문제를 프로파일링합니다',
            command: 'node --prof packages/cli/bin/gemini',
            note: '분석을 위한 성능 프로파일을 생성합니다'
          }
        ]
      },
      ci: {
        title: '지속적 통합',
        subtitle: '자동화된 테스팅 및 품질 보증',
        stages: [
          {
            name: '빌드',
            description: 'TypeScript를 컴파일하고 모든 패키지를 빌드합니다',
            icon: CheckCircleIcon
          },
          {
            name: '테스트',
            description: '단위 테스트를 실행하고 커버리지 보고서를 생성합니다',
            icon: BeakerIcon
          },
          {
            name: '배포',
            description: '패키지를 게시하고 문서를 배포합니다',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: '일반적인 문제',
        subtitle: '일반적인 빌드 및 테스트 문제에 대한 해결책',
        issues: [
          {
            title: '빌드 실패',
            description: '변경사항을 가져온 후 빌드가 실패하면 정리하고 재설치를 시도하세요',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: '테스트 실패',
            description: '간헐적인 테스트 실패의 경우 증가된 타임아웃으로 테스트를 실행하세요',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: '메모리 문제',
            description: '빌드 중 메모리 부족 오류가 발생하는 경우',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: '다음 단계',
        subtitle: '이러한 리소스로 개발 여정을 계속하세요',
        links: [
          {
            title: '코어 API',
            description: '코어 API 문서를 탐색하세요',
            href: `/${locale}/docs/core-api`
          },
          {
            title: '개발 설정',
            description: '로컬 개발 환경 및 종속성 설정',
            href: `/${locale}/docs/development-setup`
          },
          {
            title: '프로젝트 구조',
            description: '코드베이스 조직 및 아키텍처 이해',
            href: `/${locale}/docs/project-structure`
          }
        ],
        backToDocsText: '문서로 돌아가기'
      }
    }
  }

  if (locale === 'es') {
    return {
      title: 'Construcción y Pruebas',
      subtitle: 'Guía completa para construir, probar y depurar Gemini CLI',
      buildProcess: {
        title: 'Proceso de Construcción',
        subtitle: 'Entender el sistema de construcción y el flujo de trabajo de desarrollo',
        commands: [
          {
            command: 'npm run bootstrap',
            description: 'Instalar dependencias y enlazar paquetes',
            usage: 'Configuración inicial y después de agregar nuevas dependencias'
          },
          {
            command: 'npm run build',
            description: 'Construir todos los paquetes en orden de dependencias',
            usage: 'Antes de probar o publicar'
          },
          {
            command: 'npm run build:watch',
            description: 'Construir paquetes en modo vigilancia',
            usage: 'Durante el desarrollo activo'
          },
          {
            command: 'npm run clean',
            description: 'Limpiar artefactos de construcción y node_modules',
            usage: 'Al encontrar problemas de construcción'
          }
        ]
      },
      testFramework: {
        title: 'Marco de Pruebas',
        subtitle: 'Pruebas integrales con Jest y TypeScript',
        commands: [
          {
            command: 'npm run test',
            description: 'Ejecutar todas las pruebas en todos los paquetes',
            usage: 'Ejecución completa de la suite de pruebas'
          },
          {
            command: 'npm run test:watch',
            description: 'Ejecutar pruebas en modo vigilancia',
            usage: 'Durante el desarrollo'
          },
          {
            command: 'npm run test:coverage',
            description: 'Generar informes de cobertura de pruebas',
            usage: 'Aseguramiento de calidad y CI/CD'
          },
          {
            command: 'lerna run test --scope @gemini/core',
            description: 'Ejecutar pruebas para paquete específico',
            usage: 'Pruebas enfocadas'
          }
        ]
      },
      workflow: {
        title: 'Flujo de Trabajo de Desarrollo',
        subtitle: 'Flujo de trabajo de desarrollo y pruebas recomendado',
        steps: [
          {
            title: 'Configuración Inicial',
            description: 'Configurar el entorno de desarrollo e instalar dependencias',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
          },
          {
            title: 'Modo Desarrollo',
            description: 'Iniciar modo vigilancia para reconstrucción automática',
            command: 'npm run build:watch'
          },
          {
            title: 'Pruebas',
            description: 'Ejecutar pruebas continuamente durante el desarrollo',
            command: 'npm run test:watch'
          },
          {
            title: 'Verificación de Calidad',
            description: 'Ejecutar verificaciones de código, formateo y verificación de tipos antes del commit',
            command: 'npm run lint && npm run type-check && npm run test:coverage'
          }
        ]
      },
      debugging: {
        title: 'Depuración',
        subtitle: 'Herramientas y técnicas para depurar problemas',
        techniques: [
          {
            name: 'Modo Depuración',
            description: 'Habilitar registro de depuración para salida detallada',
            command: 'DEBUG=gemini:* gemini ask "Hola"',
            note: 'Esto mostrará registros detallados para todas las operaciones de Gemini CLI'
          },
          {
            name: 'Depuración VS Code',
            description: 'Usar la configuración de lanzamiento de VS Code proporcionada',
            command: '.vscode/launch.json',
            note: 'Establecer puntos de interrupción y depurar directamente en VS Code'
          },
          {
            name: 'Depuración de Pruebas',
            description: 'Depurar pruebas específicas',
            command: 'npm run test -- --testNamePattern="API Client"',
            note: 'Ejecutar y depurar casos de prueba específicos'
          },
          {
            name: 'Perfilado de Rendimiento',
            description: 'Perfilar problemas de rendimiento',
            command: 'node --prof packages/cli/bin/gemini',
            note: 'Generar perfiles de rendimiento para análisis'
          }
        ]
      },
      ci: {
        title: 'Integración Continua',
        subtitle: 'Pruebas automatizadas y aseguramiento de calidad',
        stages: [
          {
            name: 'Construcción',
            description: 'Compilar TypeScript y construir todos los paquetes',
            icon: CheckCircleIcon
          },
          {
            name: 'Pruebas',
            description: 'Ejecutar pruebas unitarias y generar informes de cobertura',
            icon: BeakerIcon
          },
          {
            name: 'Despliegue',
            description: 'Publicar paquetes y desplegar documentación',
            icon: RocketLaunchIcon
          }
        ]
      },
      troubleshooting: {
        title: 'Problemas Comunes',
        subtitle: 'Soluciones a problemas comunes de construcción y pruebas',
        issues: [
          {
            title: 'Fallos de Construcción',
            description: 'Si las construcciones fallan después de obtener cambios, intenta limpiar y reinstalar',
            command: 'npm run clean && npm run bootstrap && npm run build'
          },
          {
            title: 'Fallos de Pruebas',
            description: 'Para fallos intermitentes de pruebas, ejecuta pruebas con tiempo de espera aumentado',
            command: 'npm run test -- --testTimeout=10000'
          },
          {
            title: 'Problemas de Memoria',
            description: 'Si encuentras errores de memoria insuficiente durante las construcciones',
            command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
          }
        ]
      },
      nextSteps: {
        title: 'Próximos Pasos',
        subtitle: 'Continúa tu viaje de desarrollo con estos recursos',
        links: [
          {
            title: 'API Principal',
            description: 'Explorar la documentación de la API principal',
            href: `/${locale}/docs/core-api`
          },
          {
            title: 'Configuración de Desarrollo',
            description: 'Configurar entorno de desarrollo local y dependencias',
            href: `/${locale}/docs/development-setup`
          },
          {
            title: 'Estructura del Proyecto',
            description: 'Entender la organización del código base y la arquitectura',
            href: `/${locale}/docs/project-structure`
          }
        ],
        backToDocsText: 'Volver a la Documentación'
      }
    }
  }

  // Default to English content for other locales
  return {
    title: 'Build and Test',
    subtitle: 'Complete guide to building, testing, and debugging Gemini CLI',
    buildProcess: {
      title: 'Build Process',
      subtitle: 'Understanding the build system and development workflow',
      commands: [
        {
          command: 'npm run bootstrap',
          description: 'Install dependencies and link packages',
          usage: 'Initial setup and after adding new dependencies'
        },
        {
          command: 'npm run build',
          description: 'Build all packages in dependency order',
          usage: 'Before testing or releasing'
        },
        {
          command: 'npm run build:watch',
          description: 'Build packages in watch mode',
          usage: 'During active development'
        },
        {
          command: 'npm run clean',
          description: 'Clean build artifacts and node_modules',
          usage: 'When encountering build issues'
        }
      ]
    },
    testFramework: {
      title: 'Testing Framework',
      subtitle: 'Comprehensive testing with Jest and TypeScript',
      commands: [
        {
          command: 'npm run test',
          description: 'Run all tests across packages',
          usage: 'Full test suite execution'
        },
        {
          command: 'npm run test:watch',
          description: 'Run tests in watch mode',
          usage: 'During development'
        },
        {
          command: 'npm run test:coverage',
          description: 'Generate test coverage reports',
          usage: 'Quality assurance and CI/CD'
        },
        {
          command: 'lerna run test --scope @gemini/core',
          description: 'Run tests for specific package',
          usage: 'Focused testing'
        }
      ]
    },
    workflow: {
      title: 'Development Workflow',
      subtitle: 'Recommended development and testing workflow',
      steps: [
        {
          title: 'Initial Setup',
          description: 'Set up development environment and install dependencies',
          command: 'git clone https://github.com/google-gemini/gemini-cli.git && cd gemini-cli && npm run bootstrap'
        },
        {
          title: 'Development Mode',
          description: 'Start watch mode for automatic rebuilding',
          command: 'npm run build:watch'
        },
        {
          title: 'Testing',
          description: 'Continuously run tests during development',
          command: 'npm run test:watch'
        },
        {
          title: 'Quality Check',
          description: 'Run code checks, formatting, and type checking before committing',
          command: 'npm run lint && npm run type-check && npm run test:coverage'
        }
      ]
    },
    debugging: {
      title: 'Debugging',
      subtitle: 'Tools and techniques for debugging issues',
      techniques: [
        {
          name: 'Debug Mode',
          description: 'Enable debug logging for detailed output',
          command: 'DEBUG=gemini:* gemini ask "Hello"',
          note: 'This will show detailed logs for all Gemini CLI operations'
        },
        {
          name: 'VS Code Debugging',
          description: 'Use the provided VS Code launch configuration',
          command: '.vscode/launch.json',
          note: 'Set breakpoints and debug directly in VS Code'
        },
        {
          name: 'Test Debugging',
          description: 'Debug specific tests',
          command: 'npm run test -- --testNamePattern="API Client"',
          note: 'Run and debug specific test cases'
        },
        {
          name: 'Performance Profiling',
          description: 'Profile performance issues',
          command: 'node --prof packages/cli/bin/gemini',
          note: 'Generate performance profiles for analysis'
        }
      ]
    },
    ci: {
      title: 'Continuous Integration',
      subtitle: 'Automated testing and quality assurance',
      stages: [
        {
          name: 'Build',
          description: 'Compile TypeScript and build all packages',
          icon: CheckCircleIcon
        },
        {
          name: 'Test',
          description: 'Run unit tests and generate coverage reports',
          icon: BeakerIcon
        },
        {
          name: 'Deploy',
          description: 'Publish packages and deploy documentation',
          icon: RocketLaunchIcon
        }
      ]
    },
    troubleshooting: {
      title: 'Common Issues',
      subtitle: 'Solutions to common build and test problems',
      issues: [
        {
          title: 'Build Failures',
          description: 'If builds fail after pulling changes, try cleaning and reinstalling',
          command: 'npm run clean && npm run bootstrap && npm run build'
        },
        {
          title: 'Test Failures',
          description: 'For intermittent test failures, run tests with increased timeout',
          command: 'npm run test -- --testTimeout=10000'
        },
        {
          title: 'Memory Issues',
          description: 'If you encounter out-of-memory errors during builds',
          command: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build'
        }
      ]
    },
    nextSteps: {
      title: 'Next Steps',
      subtitle: 'Continue your development journey with these resources',
      links: [
        {
          title: 'Core API',
          description: 'Explore the core API documentation',
          href: `/${locale}/docs/core-api`
        },
        {
          title: 'Development Setup',
          description: 'Setting up local development environment and dependencies',
          href: `/${locale}/docs/development-setup`
        },
        {
          title: 'Project Structure',
          description: 'Understanding codebase organization and architecture',
          href: `/${locale}/docs/project-structure`
        }
      ],
      backToDocsText: 'Back to Documentation'
    }
  }
}

export default async function LocaleBuildAndTestPage({ params }: LocaleBuildAndTestPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs/build-and-test')
  }

  // For English, redirect to main page to avoid duplication
  if (locale === 'en') {
    redirect('/docs/build-and-test')
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
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-green-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                {locale === 'zh' ? '构建' : 'Build'}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                {locale === 'zh' ? '测试' : 'Testing'}
              </span>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.buildProcess.commands.map((cmd, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{cmd.command}</h3>
                </div>
                <p className="text-gray-700 mb-3">{cmd.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    {locale === 'zh' ? '用法：' : 'Usage:'}
                  </h4>
                  <p className="text-sm text-gray-600">{cmd.usage}</p>
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
                <div className="flex items-center mb-4">
                  <BeakerIcon className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{cmd.command}</h3>
                </div>
                <p className="text-gray-700 mb-3">{cmd.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    {locale === 'zh' ? '用法：' : 'Usage:'}
                  </h4>
                  <p className="text-sm text-gray-600">{cmd.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Workflow */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.workflow.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.workflow.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.workflow.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
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

      {/* Debugging */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.debugging.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.debugging.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.debugging.techniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500 text-white mr-6">
                    <CommandLineIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{technique.name}</h3>
                    <p className="text-gray-700 mb-4">{technique.description}</p>
                    <div className="bg-gray-900 rounded-lg p-3 mb-3">
                      <code className="text-green-400 text-sm font-mono">{technique.command}</code>
                    </div>
                    <p className="text-gray-600 text-sm">{technique.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CI/CD Pipeline */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.ci.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.ci.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.ci.stages.map((stage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white mx-auto mb-4">
                  <stage.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{stage.name}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.troubleshooting.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.troubleshooting.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {content.troubleshooting.issues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                    <p className="text-gray-700 mb-3">{issue.description}</p>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm font-mono">{issue.command}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.nextSteps.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.nextSteps.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.nextSteps.links.map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  {index === 0 && <DocumentTextIcon className="h-8 w-8 text-purple-500 mb-4" />}
                  {index === 1 && <RocketLaunchIcon className="h-8 w-8 text-blue-500 mb-4" />}
                  {index === 2 && <CogIcon className="h-8 w-8 text-green-500 mb-4" />}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/docs`}
              className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {content.nextSteps.backToDocsText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for all locales including default for static export
  return locales.map((locale) => ({
    locale,
  }))
}
