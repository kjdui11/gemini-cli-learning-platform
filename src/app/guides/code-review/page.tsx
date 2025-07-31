import { Metadata } from 'next'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  BugAntIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '代码审查助手 | Gemini CLI 实战案例',
  description: '学习如何使用 Gemini CLI 进行智能代码审查，包括安全检查、性能分析、代码质量评估等。',
  keywords: 'Gemini CLI 代码审查, AI 代码分析, 安全检查, 性能分析, 代码质量',
  openGraph: {
    title: '代码审查助手 - Gemini CLI 实战案例',
    description: '使用 AI 进行全面的代码审查和质量分析',
    type: 'article',
  },
}

const reviewCategories = [
  {
    id: 'security',
    title: '安全性审查',
    description: '识别潜在的安全漏洞和风险',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-pink-600',
    checkpoints: [
      'SQL 注入漏洞',
      'XSS 攻击防护',
      '身份验证缺陷',
      '敏感信息泄露',
      '权限控制问题',
      '加密算法使用'
    ],
    example: {
      prompt: '@src/auth/ 审查这个认证模块的安全性，重点检查身份验证、权限控制和敏感信息处理',
      findings: [
        '密码未进行哈希处理',
        '缺少 CSRF 保护',
        'JWT 密钥硬编码',
        '用户输入未验证'
      ]
    }
  },
  {
    id: 'performance',
    title: '性能分析',
    description: '发现性能瓶颈和优化机会',
    icon: BugAntIcon,
    color: 'from-yellow-500 to-orange-600',
    checkpoints: [
      '算法复杂度',
      '数据库查询优化',
      '内存使用效率',
      '网络请求优化',
      '缓存策略',
      '资源加载'
    ],
    example: {
      prompt: '@src/api/ 分析这个 API 模块的性能，识别可能的瓶颈和优化点',
      findings: [
        'N+1 查询问题',
        '缺少数据库索引',
        '未使用连接池',
        '大量同步操作'
      ]
    }
  },
  {
    id: 'quality',
    title: '代码质量',
    description: '评估代码的可维护性和可读性',
    icon: MagnifyingGlassIcon,
    color: 'from-blue-500 to-indigo-600',
    checkpoints: [
      '代码结构清晰度',
      '命名规范',
      '注释完整性',
      '函数复杂度',
      '重复代码',
      '错误处理'
    ],
    example: {
      prompt: '@src/utils/ 评估这个工具模块的代码质量，包括可读性、可维护性和最佳实践',
      findings: [
        '函数过于复杂',
        '变量命名不清晰',
        '缺少错误处理',
        '存在重复代码'
      ]
    }
  }
]

const reviewWorkflow = [
  {
    step: 1,
    title: '准备审查',
    description: '确定审查范围和重点',
    actions: [
      '明确审查目标（安全、性能、质量）',
      '选择要审查的文件或模块',
      '了解项目的技术栈和架构',
      '准备审查清单和标准'
    ],
    command: '@package.json @README.md 了解项目基本信息和技术栈'
  },
  {
    step: 2,
    title: '执行审查',
    description: '使用 AI 进行全面的代码分析',
    actions: [
      '逐个模块进行详细审查',
      '关注关键功能和敏感操作',
      '检查代码与最佳实践的符合度',
      '识别潜在的问题和风险'
    ],
    command: '@src/critical-module.js 进行全面的代码审查，包括安全性、性能和代码质量'
  },
  {
    step: 3,
    title: '生成报告',
    description: '整理审查结果并生成报告',
    actions: [
      '汇总发现的问题和建议',
      '按优先级对问题进行分类',
      '提供具体的修复建议',
      '生成可执行的改进计划'
    ],
    command: '基于审查结果生成详细的代码审查报告，包括问题分类、优先级和修复建议'
  },
  {
    step: 4,
    title: '跟踪改进',
    description: '监督问题修复和改进实施',
    actions: [
      '验证修复方案的有效性',
      '检查是否引入新的问题',
      '更新代码审查清单',
      '记录经验教训'
    ],
    command: '@src/fixed-module.js 验证修复后的代码是否解决了之前发现的问题'
  }
]

const reviewTemplates = [
  {
    title: '新功能审查',
    description: '审查新开发的功能模块',
    prompt: '@src/new-feature/ 审查这个新功能的实现，重点关注：\n1. 功能完整性和正确性\n2. 安全性和权限控制\n3. 性能和资源使用\n4. 代码质量和可维护性\n5. 测试覆盖率',
    focus: ['功能正确性', '安全性', '性能', '可维护性', '测试覆盖']
  },
  {
    title: 'Bug 修复审查',
    description: '审查 Bug 修复的代码变更',
    prompt: '@src/bugfix.patch 审查这个 Bug 修复，确认：\n1. 是否正确解决了原问题\n2. 是否引入了新的问题\n3. 修复方案是否合理\n4. 是否需要添加测试用例',
    focus: ['问题解决', '副作用检查', '方案合理性', '测试补充']
  },
  {
    title: '重构代码审查',
    description: '审查代码重构的质量',
    prompt: '@src/refactored/ 审查重构后的代码，对比重构前后的差异：\n1. 代码结构是否更清晰\n2. 性能是否有改善\n3. 功能是否保持一致\n4. 是否遵循最佳实践',
    focus: ['结构改善', '性能提升', '功能一致性', '最佳实践']
  },
  {
    title: '第三方集成审查',
    description: '审查第三方库或服务的集成',
    prompt: '@src/integration/ 审查第三方服务集成，检查：\n1. 集成方式是否安全\n2. 错误处理是否完善\n3. 依赖管理是否合理\n4. 是否有备用方案',
    focus: ['安全集成', '错误处理', '依赖管理', '容错设计']
  }
]

const automatedReview = {
  title: '自动化代码审查',
  description: '将 AI 代码审查集成到开发流程中',
  implementations: [
    {
      name: 'Pre-commit Hook',
      description: '在代码提交前自动审查',
      setup: `#!/bin/bash
# .git/hooks/pre-commit
echo "正在进行 AI 代码审查..."
changed_files=$(git diff --cached --name-only --diff-filter=ACM | grep -E "\\.(js|ts|py|java)$")

if [ -n "$changed_files" ]; then
  for file in $changed_files; do
    echo "审查文件: $file"
    gemini "@$file" "快速审查这个文件的代码质量和潜在问题"
  done
fi`,
      benefits: ['提交前发现问题', '保持代码质量', '减少后期修复成本']
    },
    {
      name: 'Pull Request 审查',
      description: '在 PR 中自动进行代码审查',
      setup: `name: AI Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: AI Code Review
        env:
          GEMINI_API_KEY: \${{ secrets.GEMINI_API_KEY }}
        run: |
          git diff origin/main...HEAD --name-only | while read file; do
            gemini "@$file" "审查这个文件的变更，提供改进建议"
          done`,
      benefits: ['自动化审查流程', '一致的审查标准', '减少人工审查时间']
    }
  ]
}

const reviewMetrics = [
  {
    metric: '代码覆盖率',
    description: '测试覆盖的代码比例',
    target: '> 80%',
    command: '@tests/ @src/ 分析测试覆盖率，识别未覆盖的关键代码路径'
  },
  {
    metric: '圈复杂度',
    description: '代码的复杂程度',
    target: '< 10',
    command: '@src/ 计算各函数的圈复杂度，识别过于复杂的函数'
  },
  {
    metric: '重复代码率',
    description: '重复代码的比例',
    target: '< 5%',
    command: '@src/ 检测重复代码，建议重构和抽取公共函数'
  },
  {
    metric: '技术债务',
    description: '需要重构的代码量',
    target: '持续减少',
    command: '@src/ 评估技术债务，制定重构优先级和计划'
  }
]

export default function CodeReviewPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MagnifyingGlassIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              代码审查助手
            </h1>
            <p className="mt-4 text-lg text-indigo-100">
              使用 AI 进行全面的代码审查和质量分析
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-indigo-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                实战级别
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                40 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Review Categories */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">审查维度</h2>
            <p className="mt-4 text-lg text-gray-600">
              全方位的代码审查分析
            </p>
          </div>

          <div className="space-y-12">
            {reviewCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">检查要点：</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.checkpoints.map((checkpoint, index) => (
                        <span key={index} className="bg-white text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200">
                          {checkpoint}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">审查示例：</h4>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                      <div className="bg-gray-900 rounded p-3 mb-3">
                        <code className="text-green-400 text-xs font-mono">{category.example.prompt}</code>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">常见发现：</h5>
                        <ul className="space-y-1">
                          {category.example.findings.map((finding, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <ExclamationTriangleIcon className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                              {finding}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Workflow */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">审查流程</h2>
            <p className="mt-4 text-lg text-gray-600">
              系统化的代码审查工作流程
            </p>
          </div>

          <div className="space-y-8">
            {reviewWorkflow.map((workflow, index) => (
              <div key={workflow.step} className="relative">
                {index < reviewWorkflow.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-indigo-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white text-sm font-semibold">
                    {workflow.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{workflow.title}</h3>
                    <p className="text-gray-600 mb-4">{workflow.description}</p>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">关键行动：</h4>
                      <ul className="space-y-1 mb-3">
                        {workflow.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="text-sm text-gray-600 flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                            {action}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gray-900 rounded p-3">
                        <code className="text-green-400 text-xs font-mono">{workflow.command}</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Templates */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">审查模板</h2>
            <p className="mt-4 text-lg text-gray-600">
              针对不同场景的审查模板
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewTemplates.map((template, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">AI 提示词：</h4>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">{template.prompt}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">关注重点：</h4>
                  <div className="flex flex-wrap gap-2">
                    {template.focus.map((focus, focusIndex) => (
                      <span key={focusIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automated Review */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{automatedReview.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{automatedReview.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automatedReview.implementations.map((impl, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{impl.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{impl.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">配置示例：</h4>
                  <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-green-400 text-xs font-mono whitespace-pre">{impl.setup}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">主要优势：</h4>
                  <ul className="space-y-1">
                    {impl.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Metrics */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">质量指标</h2>
            <p className="mt-4 text-lg text-gray-600">
              衡量代码质量的关键指标
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-indigo-900">{metric.metric}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded">{metric.target}</span>
                </div>
                <p className="text-indigo-800 text-sm mb-4">{metric.description}</p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <code className="text-green-400 text-xs font-mono">{metric.command}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-indigo-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              探索更多 AI 辅助开发的实战案例
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/code-refactoring"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                代码重构实战
              </Link>
              <Link
                href="/guides/documentation"
                className="rounded-lg border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                文档生成案例
              </Link>
              <Link
                href="/guides"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                返回指南首页
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
