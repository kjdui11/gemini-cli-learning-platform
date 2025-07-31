import { Metadata } from 'next'
import Link from 'next/link'
import {
  DocumentCheckIcon,
  CheckCircleIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '代码规范 | Gemini CLI 开发者文档',
  description: '详细的代码规范指南：包括编码风格、命名约定、文档要求、测试标准和最佳实践。',
  keywords: '代码规范, Gemini CLI 编码标准, 代码风格, 最佳实践, 代码质量',
  openGraph: {
    title: '代码规范 - Gemini CLI 开发者文档',
    description: '学习项目的编码标准和最佳实践',
    type: 'article',
  },
}

const codingPrinciples = [
  {
    principle: '可读性优先',
    description: '代码应该易于理解和维护',
    guidelines: [
      '使用清晰的变量和函数名',
      '保持函数简短和专注',
      '添加必要的注释',
      '遵循一致的格式'
    ]
  },
  {
    principle: '性能考虑',
    description: '编写高效的代码',
    guidelines: [
      '避免不必要的计算',
      '合理使用缓存',
      '优化算法复杂度',
      '减少内存分配'
    ]
  },
  {
    principle: '安全第一',
    description: '确保代码安全性',
    guidelines: [
      '验证所有输入',
      '避免代码注入',
      '处理敏感数据',
      '使用安全的依赖'
    ]
  },
  {
    principle: '测试驱动',
    description: '编写可测试的代码',
    guidelines: [
      '单一职责原则',
      '依赖注入',
      '避免全局状态',
      '模块化设计'
    ]
  }
]

const namingConventions = {
  variables: {
    title: '变量命名',
    description: '使用 camelCase',
    examples: [
      'const userName = "john"',
      'const isAuthenticated = true',
      'const maxRetryCount = 3',
      'const apiEndpoint = "https://api.example.com"'
    ]
  },
  functions: {
    title: '函数命名',
    description: '使用 camelCase，动词开头',
    examples: [
      'function getUserData() { }',
      'function validateInput() { }',
      'async function fetchApiData() { }',
      'function calculateTotal() { }'
    ]
  },
  classes: {
    title: '类名',
    description: '使用 PascalCase',
    examples: [
      'class UserManager { }',
      'class ApiClient { }',
      'class ConfigurationLoader { }',
      'class DatabaseConnection { }'
    ]
  },
  interfaces: {
    title: '接口名',
    description: '使用 PascalCase，可选 I 前缀',
    examples: [
      'interface User { }',
      'interface IApiResponse { }',
      'interface ConfigOptions { }',
      'interface IEventHandler { }'
    ]
  },
  constants: {
    title: '常量',
    description: '使用 UPPER_SNAKE_CASE',
    examples: [
      'const MAX_RETRY_COUNT = 3',
      'const API_BASE_URL = "https://api.example.com"',
      'const DEFAULT_TIMEOUT = 5000',
      'const ERROR_MESSAGES = { }'
    ]
  },
  enums: {
    title: '枚举',
    description: '使用 PascalCase',
    examples: [
      'enum UserRole { Admin, User, Guest }',
      'enum HttpStatus { Ok = 200, NotFound = 404 }',
      'enum LogLevel { Debug, Info, Warning, Error }',
      'enum ConnectionState { Connected, Disconnected }'
    ]
  }
}

const codeStyleGuide = `// TypeScript 代码风格指南

// 1. 缩进：使用 2 个空格
if (condition) {
  doSomething()
}

// 2. 分号：总是使用分号
const message = 'Hello, World!';

// 3. 引号：优先使用单引号
const singleQuoted = 'preferred';
const doubleQuoted = "only when needed";

// 4. 对象和数组：尾随逗号
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3, // 尾随逗号
};

// 5. 函数声明：优先使用函数表达式
const calculateSum = (a: number, b: number): number => {
  return a + b;
};

// 6. 类型注解：明确指定类型
interface UserData {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// 7. 错误处理：使用 try-catch
async function fetchUserData(id: number): Promise<UserData> {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}`

const eslintConfig = `// .eslintrc.js - ESLint 配置
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    // 代码质量
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    
    // 代码风格
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    
    // TypeScript 特定
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-const': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn'
  },
  env: {
    node: true,
    es2022: true,
    jest: true
  }
};`

const prettierConfig = `// .prettierrc.js - Prettier 配置
module.exports = {
  // 基本格式
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  
  // 尾随逗号
  trailingComma: 'es5',
  
  // 括号空格
  bracketSpacing: true,
  bracketSameLine: false,
  
  // 箭头函数括号
  arrowParens: 'avoid',
  
  // 换行符
  endOfLine: 'lf',
  
  // 嵌入语言格式化
  embeddedLanguageFormatting: 'auto'
};`

const testingStandards = [
  {
    category: '测试结构',
    description: '组织和结构化测试代码',
    standards: [
      '使用 describe 和 it 组织测试',
      '每个测试文件对应一个模块',
      '测试文件以 .test.ts 或 .spec.ts 结尾',
      '使用 beforeEach 和 afterEach 设置和清理'
    ]
  },
  {
    category: '测试命名',
    description: '清晰描述测试意图',
    standards: [
      '使用描述性的测试名称',
      '遵循 "should ... when ..." 模式',
      '包含预期行为和条件',
      '避免技术术语，使用业务语言'
    ]
  },
  {
    category: '测试覆盖',
    description: '确保充分的测试覆盖',
    standards: [
      '单元测试覆盖率 > 80%',
      '测试所有公共方法',
      '覆盖边界条件和错误情况',
      '包含集成测试'
    ]
  },
  {
    category: '测试质量',
    description: '编写高质量的测试',
    standards: [
      '每个测试只验证一个行为',
      '使用 AAA 模式（Arrange, Act, Assert）',
      '避免测试实现细节',
      '使用合适的断言方法'
    ]
  }
]

export default function CodingStandardsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <DocumentCheckIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              代码规范
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              学习项目的编码标准和最佳实践
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                编码标准
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                30 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Coding Principles */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">编码原则</h2>
            <p className="mt-4 text-lg text-gray-600">
              指导代码编写的核心原则
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codingPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{principle.principle}</h3>
                <p className="text-blue-800 text-sm mb-4">{principle.description}</p>
                
                <ul className="space-y-2">
                  {principle.guidelines.map((guideline, guidelineIndex) => (
                    <li key={guidelineIndex} className="text-sm text-blue-700 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Naming Conventions */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">命名约定</h2>
            <p className="mt-4 text-lg text-gray-600">
              统一的命名规范
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(namingConventions).map(([key, convention]) => (
              <div key={key} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{convention.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{convention.description}</p>
                
                <div className="space-y-2">
                  {convention.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-gray-900 rounded p-2">
                      <code className="text-green-400 text-xs font-mono">{example}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Style Guide */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">代码风格</h2>
            <p className="mt-4 text-lg text-gray-600">
              TypeScript 代码风格指南
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{codeStyleGuide}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* ESLint Configuration */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">ESLint 配置</h2>
            <p className="mt-4 text-lg text-gray-600">
              代码质量检查配置
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{eslintConfig}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Prettier Configuration */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Prettier 配置</h2>
            <p className="mt-4 text-lg text-gray-600">
              代码格式化配置
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{prettierConfig}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Testing Standards */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">测试标准</h2>
            <p className="mt-4 text-lg text-gray-600">
              测试代码的质量要求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <BeakerIcon className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{standard.category}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{standard.description}</p>
                
                <ul className="space-y-2">
                  {standard.standards.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              了解 Pull Request 提交流程
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/pull-request-guide"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                提交 PR 指南
              </Link>
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                贡献流程
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                返回文档首页
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
