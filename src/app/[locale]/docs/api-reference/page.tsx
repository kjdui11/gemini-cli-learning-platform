import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  CodeBracketIcon,
  CogIcon,
  CommandLineIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ServerIcon
} from '@heroicons/react/24/outline'

interface LocaleAPIReferencePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleAPIReferencePageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    zh: 'API 参考 - Gemini CLI 文档',
    en: 'API Reference - Gemini CLI Documentation',
    fr: 'Référence API - Documentation Gemini CLI',
    de: 'API-Referenz - Gemini CLI Dokumentation',
    ja: 'API リファレンス - Gemini CLI ドキュメント',
    ko: 'API 참조 - Gemini CLI 문서',
    es: 'Referencia API - Documentación Gemini CLI',
    hi: 'API संदर्भ - Gemini CLI दस्तावेज़',
    ru: 'Справочник API - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '完整的 Gemini CLI API 文档，包括核心 API、插件 API、配置 API 和工具 API，提供详细的方法描述和示例。',
    en: 'Complete API documentation for Gemini CLI including Core API, Plugin API, Configuration API, and Tools API with detailed method descriptions and examples.',
    fr: 'Documentation API complète pour Gemini CLI incluant l\'API Core, l\'API Plugin, l\'API Configuration et l\'API Tools avec des descriptions détaillées des méthodes et des exemples.',
    de: 'Vollständige API-Dokumentation für Gemini CLI einschließlich Core API, Plugin API, Configuration API und Tools API mit detaillierten Methodenbeschreibungen und Beispielen.',
    ja: 'Core API、Plugin API、Configuration API、Tools API を含む Gemini CLI の完全な API ドキュメント。詳細なメソッドの説明と例を提供。',
    ko: 'Core API, Plugin API, Configuration API, Tools API를 포함한 Gemini CLI의 완전한 API 문서. 자세한 메서드 설명과 예제 제공.',
    es: 'Documentación API completa para Gemini CLI incluyendo Core API, Plugin API, Configuration API y Tools API con descripciones detalladas de métodos y ejemplos.',
    hi: 'Gemini CLI के लिए पूर्ण API दस्तावेज़ीकरण जिसमें Core API, Plugin API, Configuration API और Tools API शामिल हैं, विस्तृत विधि विवरण और उदाहरणों के साथ।',
    ru: 'Полная документация API для Gemini CLI, включая Core API, Plugin API, Configuration API и Tools API с подробными описаниями методов и примерами.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: 'Gemini CLI API, Core API, Plugin API, Configuration API, Tools API, method reference, documentation',
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
      title: 'API 参考',
      subtitle: '完整的 Gemini CLI API 文档，包含详细的方法描述、参数和实用示例。',
      sectionsTitle: 'API 部分',
      sectionsSubtitle: '导航到不同的 API 类别',
      typesTitle: '常用类型',
      typesSubtitle: 'API 中使用的 TypeScript 接口和类型',
      resourcesTitle: '相关资源',
      resourcesSubtitle: '探索更多文档和示例',
      viewExamples: '查看示例',
      backToDocs: '返回文档',
      apiSections: [
        {
          id: 'core-api',
          title: '核心 API',
          description: '与 Gemini 模型交互和管理对话的主要 API',
          methods: [
            {
              name: 'chat()',
              description: '启动与 Gemini 的交互式聊天会话',
              signature: 'chat(options?: ChatOptions): Promise<ChatSession>',
              example: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`
            },
            {
              name: 'ask()',
              description: '发送单个提示并获取响应',
              signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
              example: `const response = await cli.ask("什么是机器学习？", {
  maxTokens: 1000,
  temperature: 0.5
});`
            },
            {
              name: 'analyze()',
              description: '使用 AI 辅助分析文件或代码',
              signature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
              example: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`
            }
          ]
        },
        {
          id: 'plugin-api',
          title: '插件 API',
          description: '用于开发自定义插件和扩展的 API',
          methods: [
            {
              name: 'registerPlugin()',
              description: '向 CLI 注册新插件',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // 插件逻辑
      return '插件执行成功';
    }
  }
};

cli.registerPlugin(myPlugin);`
            },
            {
              name: 'createTool()',
              description: '创建供 AI 使用的自定义工具',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '获取指定位置的当前天气',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 获取天气数据
    return \`\$\{location\} 的天气：晴朗，25°C\`;
  }
});`
            }
          ]
        },
        {
          id: 'config-api',
          title: '配置 API',
          description: '用于管理 CLI 配置和设置的 API',
          methods: [
            {
              name: 'getConfig()',
              description: '获取当前配置值',
              signature: 'getConfig(key?: string): any',
              example: `// 获取所有配置
const config = cli.getConfig();

// 获取特定配置值
const model = cli.getConfig('model');`
            },
            {
              name: 'setConfig()',
              description: '设置配置值',
              signature: 'setConfig(key: string, value: any): void',
              example: `// 设置模型
cli.setConfig('model', 'gemini-pro');

// 设置多个值
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`
            },
            {
              name: 'resetConfig()',
              description: '重置配置为默认值',
              signature: 'resetConfig(key?: string): void',
              example: `// 重置所有配置
cli.resetConfig();

// 重置特定键
cli.resetConfig('temperature');`
            }
          ]
        },
        {
          id: 'tools-api',
          title: '工具 API',
          description: '用于管理和执行内置工具的 API',
          methods: [
            {
              name: 'listTools()',
              description: '获取可用工具列表',
              signature: 'listTools(): Tool[]',
              example: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`
            },
            {
              name: 'executeTool()',
              description: '执行特定工具',
              signature: 'executeTool(name: string, args: any): Promise<any>',
              example: `// 读取文件
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// 运行 shell 命令
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`
            }
          ]
        }
      ],
      commonTypes: [
        {
          name: 'ChatOptions',
          description: '启动聊天会话的选项',
          properties: [
            { name: 'model', type: 'string', description: '要使用的模型（例如 "gemini-pro"）' },
            { name: 'temperature', type: 'number', description: '创造性级别（0-1）' },
            { name: 'maxTokens', type: 'number', description: '最大响应长度' },
            { name: 'systemPrompt', type: 'string', description: '系统指令' }
          ]
        },
        {
          name: 'ToolDefinition',
          description: '创建自定义工具的定义',
          properties: [
            { name: 'name', type: 'string', description: '唯一工具名称' },
            { name: 'description', type: 'string', description: 'AI 的工具描述' },
            { name: 'parameters', type: 'object', description: '参数模式' },
            { name: 'execute', type: 'function', description: '工具执行函数' }
          ]
        }
      ]
    },
    en: {
      title: 'API Reference',
      subtitle: 'Complete API documentation for Gemini CLI with detailed method descriptions, parameters, and practical examples.',
      sectionsTitle: 'API Sections',
      sectionsSubtitle: 'Navigate to different API categories',
      typesTitle: 'Common Types',
      typesSubtitle: 'TypeScript interfaces and types used in the API',
      resourcesTitle: 'Related Resources',
      resourcesSubtitle: 'Explore more documentation and examples',
      viewExamples: 'View Examples',
      backToDocs: 'Back to Docs',
      apiSections: [],
      commonTypes: []
    }
  }

  return content[locale as keyof typeof content] || content.en
}

export default async function LocaleAPIReferencePage({ params }: LocaleAPIReferencePageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs/api-reference')
  }

  // For English, redirect to main page to avoid duplication
  if (locale === 'en') {
    redirect('/docs/api-reference')
  }

  const content = getContent(locale)
  const colors = ['from-blue-500 to-indigo-600', 'from-purple-500 to-pink-600', 'from-green-500 to-emerald-600', 'from-orange-500 to-red-600']
  const icons = [CodeBracketIcon, CogIcon, WrenchScrewdriverIcon, ServerIcon]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
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

      {/* Quick Navigation */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sectionsTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sectionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.apiSections.map((section, index) => {
              const Icon = icons[index]
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${colors[index]} text-white mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{section.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* API Sections */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {content.apiSections.map((section, sectionIndex) => {
              const Icon = icons[sectionIndex]
              return (
                <div key={section.id} id={section.id} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${colors[sectionIndex]} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {section.methods.map((method, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">
                            {method.name}
                          </code>
                        </h3>
                        <p className="text-gray-700 mb-3">{method.description}</p>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">签名：</h4>
                          <code className="block bg-gray-100 p-3 rounded text-sm text-gray-800">
                            {method.signature}
                          </code>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">示例：</h4>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                            <code>{method.example}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Common Types */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.typesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.typesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.commonTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {type.name}
                  </code>
                </h3>
                <p className="text-gray-600 mb-4">{type.description}</p>

                <div className="space-y-2">
                  {type.properties.map((prop, propIndex) => (
                    <div key={propIndex} className="flex items-start space-x-3">
                      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                        {prop.name}
                      </code>
                      <div className="flex-1">
                        <span className="text-sm text-blue-600 font-medium">{prop.type}</span>
                        <p className="text-sm text-gray-600">{prop.description}</p>
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
                href={`/${locale}/docs/examples`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {content.viewExamples}
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {content.backToDocs}
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
