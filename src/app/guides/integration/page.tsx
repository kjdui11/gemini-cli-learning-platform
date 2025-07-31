import { Metadata } from 'next'
import Link from 'next/link'
import { 
  PuzzlePieceIcon, 
  CommandLineIcon, 
  CheckCircleIcon,
  CodeBracketIcon,
  CubeIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '与其他工具集成 | Gemini CLI 使用指南',
  description: '学习如何将 Gemini CLI 集成到现有开发工作流程中，包括 IDE 集成、CI/CD 流水线、脚本自动化等。',
  keywords: 'Gemini CLI 集成, IDE 集成, CI/CD, 脚本自动化, 开发工作流, VS Code 集成',
  openGraph: {
    title: '与其他工具集成 - Gemini CLI 使用指南',
    description: '将 Gemini CLI 无缝集成到您的开发工作流程中',
    type: 'article',
  },
}

const integrationTypes = [
  {
    id: 'ide',
    title: 'IDE 集成',
    description: '在代码编辑器中直接使用 Gemini CLI',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-indigo-600',
    integrations: [
      {
        name: 'VS Code',
        description: '通过终端集成或扩展使用',
        setup: [
          '在 VS Code 终端中直接运行 gemini',
          '配置自定义任务和快捷键',
          '使用工作区配置文件'
        ],
        example: `// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Gemini Code Review",
      "type": "shell",
      "command": "gemini",
      "args": ["@\${file}", "请审查这个文件的代码质量"],
      "group": "build"
    }
  ]
}`
      },
      {
        name: 'JetBrains IDEs',
        description: '通过外部工具配置集成',
        setup: [
          '配置外部工具指向 gemini 可执行文件',
          '设置参数模板和快捷键',
          '创建自定义工具栏按钮'
        ],
        example: `# 外部工具配置
Program: gemini
Arguments: @$FilePath$ 分析这个文件
Working directory: $ProjectFileDir$`
      }
    ]
  },
  {
    id: 'cicd',
    title: 'CI/CD 集成',
    description: '在持续集成流水线中使用 AI 辅助',
    icon: CubeIcon,
    color: 'from-green-500 to-emerald-600',
    integrations: [
      {
        name: 'GitHub Actions',
        description: '在 GitHub 工作流中集成代码审查',
        setup: [
          '配置 GitHub Actions 工作流',
          '设置 API 密钥环境变量',
          '创建自动化代码审查步骤'
        ],
        example: `name: AI Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      - name: Install Gemini CLI
        run: npm install -g @google/gemini-cli
      - name: Run Code Review
        env:
          GEMINI_API_KEY: \${{ secrets.GEMINI_API_KEY }}
        run: |
          gemini @src/ "请审查这次 PR 的代码变更，重点关注安全性和性能"`
      },
      {
        name: 'GitLab CI',
        description: '在 GitLab 流水线中集成',
        setup: [
          '配置 .gitlab-ci.yml 文件',
          '设置项目级环境变量',
          '创建代码质量检查阶段'
        ],
        example: `code_review:
  stage: test
  image: node:20
  before_script:
    - npm install -g @google/gemini-cli
  script:
    - gemini @src/ "分析代码质量并生成报告"
  variables:
    GEMINI_API_KEY: $GEMINI_API_KEY
  only:
    - merge_requests`
      }
    ]
  },
  {
    id: 'scripts',
    title: '脚本自动化',
    description: '创建自动化脚本和工作流',
    icon: CommandLineIcon,
    color: 'from-purple-500 to-pink-600',
    integrations: [
      {
        name: 'Bash 脚本',
        description: '创建 Shell 脚本自动化常见任务',
        setup: [
          '编写可重用的 Bash 脚本',
          '配置环境变量和参数',
          '添加错误处理和日志'
        ],
        example: `#!/bin/bash
# code-review.sh - 自动代码审查脚本

if [ -z "$1" ]; then
  echo "用法: $0 <文件或目录>"
  exit 1
fi

echo "正在审查: $1"
gemini "@$1" "请进行详细的代码审查，包括：
1. 代码质量和可读性
2. 潜在的安全问题
3. 性能优化建议
4. 最佳实践检查"

echo "审查完成！"`
      },
      {
        name: 'Python 脚本',
        description: '使用 Python 创建更复杂的自动化',
        setup: [
          '安装 subprocess 模块调用 gemini',
          '处理输入输出和错误',
          '集成到现有 Python 工具链'
        ],
        example: `import subprocess
import sys

def gemini_review(file_path, prompt):
    """使用 Gemini CLI 审查文件"""
    try:
        cmd = ['gemini', f'@{file_path}', prompt]
        result = subprocess.run(cmd, capture_output=True, text=True)
        return result.stdout
    except Exception as e:
        print(f"错误: {e}")
        return None

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("用法: python review.py <文件路径>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    prompt = "请审查这个文件的代码质量"
    result = gemini_review(file_path, prompt)
    
    if result:
        print(result)
    else:
        print("审查失败")`
      }
    ]
  }
]

const workflowExamples = [
  {
    title: '代码审查工作流',
    description: '自动化的代码审查流程',
    steps: [
      '开发者提交代码到分支',
      'CI/CD 触发 Gemini CLI 代码审查',
      'AI 生成审查报告和建议',
      '结果发送到 PR 评论或通知'
    ],
    benefits: ['提高代码质量', '减少人工审查时间', '一致的审查标准']
  },
  {
    title: '文档生成工作流',
    description: '自动生成和更新项目文档',
    steps: [
      '检测代码变更',
      '使用 Gemini CLI 分析新增功能',
      '自动生成或更新文档',
      '提交文档更新到仓库'
    ],
    benefits: ['文档始终保持最新', '减少文档维护工作', '提高文档质量']
  },
  {
    title: '错误诊断工作流',
    description: '智能错误分析和解决建议',
    steps: [
      '监控系统错误和异常',
      '收集相关代码和日志',
      '使用 AI 分析错误原因',
      '生成修复建议和方案'
    ],
    benefits: ['快速定位问题', '智能解决方案', '减少调试时间']
  }
]

const bestPractices = [
  {
    title: '安全考虑',
    items: [
      '使用环境变量存储 API 密钥',
      '限制 CI/CD 中的文件访问权限',
      '定期轮换 API 密钥',
      '避免在日志中暴露敏感信息'
    ]
  },
  {
    title: '性能优化',
    items: [
      '合理设置 token 限制',
      '使用文件过滤减少不必要的处理',
      '实现结果缓存机制',
      '并行处理多个文件'
    ]
  },
  {
    title: '错误处理',
    items: [
      '实现重试机制',
      '处理网络超时和 API 限制',
      '提供有意义的错误消息',
      '记录详细的操作日志'
    ]
  }
]

export default function IntegrationPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <PuzzlePieceIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              与其他工具集成
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              将 Gemini CLI 无缝集成到您的开发工作流程中
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                进阶级别
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                30 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Types */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">集成方式</h2>
            <p className="mt-4 text-lg text-gray-600">
              了解不同的集成方法和配置选项
            </p>
          </div>

          <div className="space-y-16">
            {integrationTypes.map((type) => (
              <div key={type.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${type.color} text-white`}>
                    <type.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {type.integrations.map((integration, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{integration.name}</h4>
                      <p className="text-gray-600 mb-4">{integration.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">设置步骤：</h5>
                          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                            {integration.setup.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ol>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">配置示例：</h5>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-green-400 text-xs font-mono whitespace-pre">
                              {integration.example}
                            </pre>
                          </div>
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

      {/* Workflow Examples */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">工作流示例</h2>
            <p className="mt-4 text-lg text-gray-600">
              实际应用中的集成工作流程
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowExamples.map((workflow, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{workflow.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">流程步骤：</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    {workflow.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">主要优势：</h4>
                  <ul className="space-y-1">
                    {workflow.benefits.map((benefit, benefitIndex) => (
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

      {/* Best Practices */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">最佳实践</h2>
            <p className="mt-4 text-lg text-gray-600">
              集成过程中的重要注意事项
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">{practice.title}</h3>
                <ul className="space-y-2">
                  {practice.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-blue-800 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
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
              了解更多高级功能和协议支持
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/mcp-protocol"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                MCP 协议使用
              </Link>
              <Link
                href="/guides/code-refactoring"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                实战案例
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
