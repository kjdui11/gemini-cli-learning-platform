import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  CodeBracketIcon,
  CommandLineIcon,
  CogIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  ServerIcon
} from '@heroicons/react/24/outline'

interface LocaleExamplesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleExamplesPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    zh: '示例代码 - Gemini CLI 文档',
    en: 'Code Examples - Gemini CLI Documentation',
    fr: 'Exemples de Code - Documentation Gemini CLI',
    de: 'Code-Beispiele - Gemini CLI Dokumentation',
    ja: 'コード例 - Gemini CLI ドキュメント',
    ko: '코드 예제 - Gemini CLI 문서',
    es: 'Ejemplos de Código - Documentación Gemini CLI',
    hi: 'कोड उदाहरण - Gemini CLI दस्तावेज़',
    ru: 'Примеры кода - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '实用的 Gemini CLI 代码示例，包括基础使用、自动化脚本、集成示例和高级用法，帮助开发者快速上手。',
    en: 'Practical Gemini CLI code examples including basic usage, automation scripts, integration examples, and advanced usage to help developers get started quickly.',
    fr: 'Exemples de code pratiques Gemini CLI incluant l\'utilisation de base, les scripts d\'automatisation, les exemples d\'intégration et l\'utilisation avancée pour aider les développeurs à démarrer rapidement.',
    de: 'Praktische Gemini CLI Code-Beispiele einschließlich grundlegender Nutzung, Automatisierungsskripte, Integrationsbeispiele und fortgeschrittener Nutzung, um Entwicklern den schnellen Einstieg zu ermöglichen.',
    ja: '基本的な使用法、自動化スクリプト、統合例、高度な使用法を含む実用的な Gemini CLI コード例で、開発者の迅速な開始をサポートします。',
    ko: '기본 사용법, 자동화 스크립트, 통합 예제, 고급 사용법을 포함한 실용적인 Gemini CLI 코드 예제로 개발자의 빠른 시작을 지원합니다.',
    es: 'Ejemplos de código prácticos de Gemini CLI que incluyen uso básico, scripts de automatización, ejemplos de integración y uso avanzado para ayudar a los desarrolladores a comenzar rápidamente.',
    hi: 'व्यावहारिक Gemini CLI कोड उदाहरण जिसमें बुनियादी उपयोग, स्वचालन स्क्रिप्ट, एकीकरण उदाहरण और उन्नत उपयोग शामिल हैं, जो डेवलपर्स को जल्दी शुरू करने में मदद करते हैं।',
    ru: 'Практические примеры кода Gemini CLI, включая базовое использование, скрипты автоматизации, примеры интеграции и продвинутое использование для быстрого старта разработчиков.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: 'Gemini CLI examples, code samples, automation scripts, integration, advanced usage',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const getContent = (locale: string) => {
  const content = {
    zh: {
      title: '示例代码',
      subtitle: '实用的 Gemini CLI 代码示例和模板，帮助您快速开始项目开发和自动化任务。',
      categoriesTitle: '示例分类',
      categoriesSubtitle: '按用途浏览不同类型的代码示例',
      resourcesTitle: '相关资源',
      resourcesSubtitle: '探索更多文档和指南',
      viewDocs: '查看文档',
      apiReference: 'API 参考',
      categories: [
        {
          id: 'basic-usage',
          title: '基础使用',
          description: '开始使用 Gemini CLI 的基本示例',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: '简单对话',
              description: '与 Gemini 进行基本对话',
              language: 'bash',
              code: `# 启动交互式聊天
gemini chat

# 发送单个问题
gemini ask "解释什么是人工智能"

# 使用特定模型
gemini ask "写一个 Python 函数来计算斐波那契数列" --model gemini-pro`
            },
            {
              title: '文件分析',
              description: '分析和处理文件内容',
              language: 'bash',
              code: `# 分析代码文件
gemini analyze src/main.js --type code-review

# 分析多个文件
gemini analyze src/*.js --output analysis-report.md

# 生成文档
gemini analyze README.md --prompt "为这个项目生成详细的文档"`
            }
          ]
        },
        {
          id: 'automation',
          title: '自动化脚本',
          description: '用于自动化开发任务的脚本',
          icon: CogIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: '代码审查脚本',
              description: '自动化代码审查流程',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - 自动代码审查

# 获取变更的文件
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 开始代码审查..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts ]]; then
    echo "📝 审查文件: $file"

    gemini analyze "$file" \\
      --prompt "进行详细的代码审查，检查潜在问题、性能优化和最佳实践" \\
      --output "reviews/\${file}.review.md"
  fi
done

echo "✅ 代码审查完成！"`
            },
            {
              title: '文档生成',
              description: '自动生成项目文档',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - 生成文档

echo "📚 生成项目文档..."

# 生成 API 文档
gemini analyze src/api/ \\
  --prompt "生成详细的 API 文档，包括端点、参数和示例" \\
  --output docs/api.md

# 生成用户指南
gemini analyze README.md package.json \\
  --prompt "基于项目信息生成用户使用指南" \\
  --output docs/user-guide.md

echo "✅ 文档生成完成！"`
            }
          ]
        },
        {
          id: 'integration',
          title: '集成示例',
          description: '与其他工具和平台的集成',
          icon: ServerIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'GitHub Actions 工作流',
              description: '在 CI/CD 中使用 Gemini CLI',
              language: 'yaml',
              code: `name: AI 代码审查

on:
  pull_request:
    branches: [ main ]

jobs:
  ai-review:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: 安装 Gemini CLI
        run: npm install -g @google/generative-ai-cli

      - name: 配置 Gemini CLI
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: 审查变更的文件
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            gemini analyze "$file" --prompt "代码审查" --output "review-$file.md"
          done`
            }
          ]
        },
        {
          id: 'advanced',
          title: '高级用法',
          description: '高级功能和自定义工具',
          icon: RocketLaunchIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: '自定义工具开发',
              description: '创建自定义 AI 工具',
              language: 'javascript',
              code: `// custom-tool.js - 自定义工具示例
const { GeminiCLI } = require('@google/generative-ai-cli');

const cli = new GeminiCLI();

// 创建天气查询工具
const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '获取指定城市的天气信息',
  parameters: {
    city: {
      type: 'string',
      required: true,
      description: '城市名称'
    }
  },
  execute: async ({ city }) => {
    // 这里可以调用实际的天气 API
    return \`\$\{city\} 的天气：晴朗，温度 25°C\`;
  }
});

// 注册工具
cli.registerTool(weatherTool);

// 使用工具
async function main() {
  const response = await cli.ask(
    "北京今天天气怎么样？",
    { tools: ['get_weather'] }
  );
  console.log(response);
}

main();`
            }
          ]
        }
      ]
    },
    en: {
      title: 'Code Examples',
      subtitle: 'Practical Gemini CLI code examples and templates to help you get started with development and automation tasks.',
      categoriesTitle: 'Example Categories',
      categoriesSubtitle: 'Browse different types of code examples by use case',
      resourcesTitle: 'Related Resources',
      resourcesSubtitle: 'Explore more documentation and guides',
      viewDocs: 'View Documentation',
      apiReference: 'API Reference',
      categories: []
    }
  }

  return content[locale as keyof typeof content] || content.en
}

export default async function LocaleExamplesPage({ params }: LocaleExamplesPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs/examples')
  }

  // For English, redirect to main page to avoid duplication
  if (locale === 'en') {
    redirect('/docs/examples')
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

      {/* Categories Overview */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.categoriesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.categoriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Example Categories */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {content.categories.map((category) => (
              <div key={category.id} id={category.id}>
                <div className="flex items-center mb-12">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.examples.map((example, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {example.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{example.description}</p>

                        <div className="relative">
                        <div className="flex items-center justify-between bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg">
                          <span className="text-sm font-medium">{example.language}</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                            代码
                          </span>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm">
                          <code>{example.code}</code>
                        </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.resourcesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.resourcesSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {content.viewDocs}
              </Link>
              <Link
                href={`/${locale}/docs/api-reference`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {content.apiReference}
              </Link>
            </div>
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
