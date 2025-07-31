import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowPathIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '提交 PR 指南 | Gemini CLI 开发者文档',
  description: '详细的 Pull Request 提交指南：包括 PR 准备、提交流程、代码审查和合并要求。',
  keywords: 'Pull Request, PR 指南, Gemini CLI 代码提交, 代码审查, 合并流程',
  openGraph: {
    title: '提交 PR 指南 - Gemini CLI 开发者文档',
    description: '学习如何正确提交 Pull Request',
    type: 'article',
  },
}

const prWorkflow = [
  {
    step: 1,
    title: '准备工作',
    description: '确保代码质量和完整性',
    tasks: [
      '运行所有测试并确保通过',
      '检查代码风格和 ESLint 规则',
      '更新相关文档',
      '确保提交信息清晰'
    ],
    icon: CheckCircleIcon
  },
  {
    step: 2,
    title: '创建 PR',
    description: '在 GitHub 上创建 Pull Request',
    tasks: [
      '推送分支到个人仓库',
      '创建 Pull Request',
      '填写 PR 模板',
      '添加相关标签'
    ],
    icon: DocumentTextIcon
  },
  {
    step: 3,
    title: '代码审查',
    description: '参与代码审查过程',
    tasks: [
      '响应审查意见',
      '修改代码问题',
      '更新测试用例',
      '解决冲突'
    ],
    icon: UserGroupIcon
  },
  {
    step: 4,
    title: '合并发布',
    description: 'PR 被接受并合并',
    tasks: [
      '通过所有检查',
      '获得审查批准',
      '合并到主分支',
      '清理分支'
    ],
    icon: ArrowPathIcon
  }
]

const prChecklist = [
  {
    category: '代码质量',
    items: [
      '所有测试通过',
      '代码覆盖率达标',
      '遵循编码规范',
      '没有 ESLint 错误',
      '性能影响评估',
      '安全性检查'
    ]
  },
  {
    category: '文档更新',
    items: [
      'API 文档更新',
      'README 文件更新',
      '变更日志记录',
      '示例代码更新',
      '配置说明更新',
      '迁移指南（如需要）'
    ]
  },
  {
    category: '测试覆盖',
    items: [
      '新功能有测试',
      '边界情况测试',
      '错误处理测试',
      '集成测试更新',
      '性能测试（如需要）',
      '回归测试通过'
    ]
  },
  {
    category: '兼容性',
    items: [
      '向后兼容性',
      '跨平台兼容',
      '版本依赖检查',
      '破坏性变更标记',
      'API 变更说明',
      '升级路径清晰'
    ]
  }
]

const commitMessageGuide = `# Git 提交信息规范

## 格式
<type>(<scope>): <subject>

<body>

<footer>

## 类型 (type)
- feat: 新功能
- fix: 修复 Bug
- docs: 文档更新
- style: 代码格式（不影响功能）
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动
- perf: 性能优化
- ci: CI/CD 相关

## 范围 (scope)
- cli: 命令行界面
- core: 核心功能
- api: API 相关
- config: 配置相关
- docs: 文档
- test: 测试

## 示例
feat(cli): add new command for user management

Add support for creating, updating, and deleting users
through the CLI interface.

- Add create-user command
- Add update-user command  
- Add delete-user command
- Update help documentation

Closes #123
Fixes #456

## 规则
1. 使用英文编写
2. 首行不超过 50 字符
3. 正文每行不超过 72 字符
4. 使用现在时态
5. 首字母小写
6. 不要以句号结尾`

const prTemplate = `## 变更描述
简要描述此 PR 的变更内容和目的。

## 变更类型
请删除不适用的选项：
- [ ] Bug 修复（不破坏现有功能的变更）
- [ ] 新功能（添加功能的变更）
- [ ] 破坏性变更（会导致现有功能不工作的修复或功能）
- [ ] 文档更新
- [ ] 性能改进
- [ ] 代码重构
- [ ] 依赖更新

## 测试
描述你如何测试了这些变更：
- [ ] 单元测试
- [ ] 集成测试
- [ ] 手动测试
- [ ] 现有测试通过
- [ ] 添加了新的测试

## 检查清单
- [ ] 我的代码遵循项目的代码风格
- [ ] 我已经进行了自我审查
- [ ] 我已经添加了必要的注释
- [ ] 我已经添加了测试来证明我的修复有效或功能正常工作
- [ ] 新的和现有的单元测试都通过了
- [ ] 我已经更新了相关文档
- [ ] 我的变更不会产生新的警告
- [ ] 我已经检查了我的代码，没有拼写错误

## 相关 Issue
修复 #(issue 编号)
关联 #(issue 编号)

## 破坏性变更
如果此 PR 包含破坏性变更，请描述：
- 什么被改变了
- 为什么需要这个变更
- 如何迁移现有代码

## 截图（如果适用）
添加截图来帮助解释你的变更。

## 附加信息
添加任何其他相关信息。`

const reviewGuidelines = [
  {
    aspect: '代码逻辑',
    description: '检查代码的正确性和逻辑',
    checkpoints: [
      '算法实现是否正确',
      '边界条件处理',
      '错误处理是否完整',
      '性能是否合理',
      '安全性考虑',
      '代码复用性'
    ]
  },
  {
    aspect: '代码风格',
    description: '确保代码风格一致',
    checkpoints: [
      '遵循项目编码规范',
      '命名是否清晰',
      '注释是否充分',
      '代码结构是否清晰',
      '格式是否一致',
      '无多余代码'
    ]
  },
  {
    aspect: '测试质量',
    description: '评估测试的完整性',
    checkpoints: [
      '测试覆盖率充分',
      '测试用例有意义',
      '边界情况测试',
      '错误情况测试',
      '集成测试完整',
      '测试代码质量'
    ]
  },
  {
    aspect: '文档更新',
    description: '确保文档同步更新',
    checkpoints: [
      'API 文档更新',
      '使用示例更新',
      '配置说明更新',
      '变更日志记录',
      'README 更新',
      '迁移指南完整'
    ]
  }
]

const cicdChecks = [
  {
    check: '代码质量检查',
    description: '自动化代码质量验证',
    tools: [
      'ESLint 代码检查',
      'TypeScript 编译',
      'Prettier 格式检查',
      'SonarQube 质量分析'
    ]
  },
  {
    check: '测试执行',
    description: '运行所有测试套件',
    tools: [
      'Jest 单元测试',
      'Cypress E2E 测试',
      '集成测试',
      '性能测试'
    ]
  },
  {
    check: '安全扫描',
    description: '安全漏洞检测',
    tools: [
      'npm audit 依赖检查',
      'Snyk 安全扫描',
      'CodeQL 代码分析',
      'SAST 静态分析'
    ]
  },
  {
    check: '构建验证',
    description: '验证构建过程',
    tools: [
      'TypeScript 构建',
      '打包验证',
      '部署测试',
      '兼容性检查'
    ]
  }
]

const commonIssues = [
  {
    issue: '合并冲突',
    description: '分支与主分支存在冲突',
    solutions: [
      '拉取最新的主分支代码',
      '解决冲突文件',
      '重新测试修改的代码',
      '推送解决冲突后的代码'
    ],
    commands: [
      'git fetch upstream',
      'git rebase upstream/main',
      '# 解决冲突',
      'git add .',
      'git rebase --continue',
      'git push --force-with-lease'
    ]
  },
  {
    issue: 'CI 检查失败',
    description: '自动化检查未通过',
    solutions: [
      '查看 CI 日志找出问题',
      '本地复现并修复问题',
      '更新测试用例',
      '重新推送代码'
    ],
    commands: [
      'npm run lint',
      'npm run test',
      'npm run build',
      'git add .',
      'git commit -m "fix: resolve CI issues"',
      'git push'
    ]
  },
  {
    issue: '代码审查反馈',
    description: '审查者提出修改建议',
    solutions: [
      '仔细阅读审查意见',
      '逐一回应每个建议',
      '修改代码并解释原因',
      '请求重新审查'
    ],
    commands: [
      '# 修改代码',
      'git add .',
      'git commit -m "address review feedback"',
      'git push',
      '# 在 GitHub 上回复审查意见'
    ]
  },
  {
    issue: '测试覆盖率不足',
    description: '新代码缺少测试',
    solutions: [
      '分析覆盖率报告',
      '为未覆盖代码添加测试',
      '确保边界情况测试',
      '验证测试质量'
    ],
    commands: [
      'npm run test:coverage',
      '# 查看覆盖率报告',
      '# 添加测试文件',
      'npm run test',
      'git add .',
      'git commit -m "test: improve test coverage"'
    ]
  }
]

const bestPractices = [
  {
    practice: '保持 PR 小而专注',
    description: '每个 PR 只解决一个问题',
    benefits: [
      '更容易审查',
      '降低出错风险',
      '加快合并速度',
      '便于回滚'
    ]
  },
  {
    practice: '编写清晰的描述',
    description: '详细说明变更内容和原因',
    benefits: [
      '帮助审查者理解',
      '记录变更历史',
      '便于后续维护',
      '提高沟通效率'
    ]
  },
  {
    practice: '及时响应反馈',
    description: '积极参与代码审查讨论',
    benefits: [
      '加快审查进度',
      '提高代码质量',
      '增进团队协作',
      '学习最佳实践'
    ]
  },
  {
    practice: '保持代码同步',
    description: '定期同步主分支代码',
    benefits: [
      '减少合并冲突',
      '及时发现问题',
      '保持代码最新',
      '简化合并过程'
    ]
  }
]

export default function PullRequestGuidePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ArrowPathIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              提交 PR 指南
            </h1>
            <p className="mt-4 text-lg text-emerald-100">
              学习如何正确提交 Pull Request
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-emerald-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                PR 流程
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                25 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PR Workflow */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">PR 流程</h2>
            <p className="mt-4 text-lg text-gray-600">
              从准备到合并的完整流程
            </p>
          </div>

          <div className="space-y-8">
            {prWorkflow.map((step, index) => (
              <div key={index} className="relative">
                {index < prWorkflow.length - 1 && (
                  <div className="absolute left-6 top-16 h-full w-0.5 bg-emerald-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-emerald-600 mr-2">步骤 {step.step}</span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PR Checklist */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">PR 检查清单</h2>
            <p className="mt-4 text-lg text-gray-600">
              提交前的必要检查项目
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prChecklist.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 text-emerald-600 border-gray-300 rounded mr-3 mt-0.5"
                        readOnly
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commit Message Guide */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">提交信息规范</h2>
            <p className="mt-4 text-lg text-gray-600">
              标准化的 Git 提交信息格式
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{commitMessageGuide}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* PR Template */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">PR 模板</h2>
            <p className="mt-4 text-lg text-gray-600">
              标准的 Pull Request 模板
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{prTemplate}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Review Guidelines */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">代码审查要点</h2>
            <p className="mt-4 text-lg text-gray-600">
              审查者关注的重点领域
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewGuidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{guideline.aspect}</h3>
                <p className="text-gray-600 text-sm mb-4">{guideline.description}</p>
                
                <ul className="space-y-2">
                  {guideline.checkpoints.map((checkpoint, checkpointIndex) => (
                    <li key={checkpointIndex} className="text-sm text-gray-600 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      {checkpoint}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CI/CD Checks */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">自动化检查</h2>
            <p className="mt-4 text-lg text-gray-600">
              CI/CD 流水线的检查项目
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cicdChecks.map((check, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-emerald-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{check.check}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{check.description}</p>
                
                <ul className="space-y-2">
                  {check.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="text-sm text-gray-600 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Issues */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">常见问题解决</h2>
            <p className="mt-4 text-lg text-gray-600">
              PR 过程中的常见问题和解决方案
            </p>
          </div>

          <div className="space-y-8">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <ExclamationTriangleIcon className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.issue}</h3>
                    <p className="text-gray-600 text-sm mb-4">{issue.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">解决步骤：</h4>
                    <ol className="space-y-2">
                      {issue.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-semibold mr-3 flex-shrink-0 mt-0.5">
                            {solutionIndex + 1}
                          </span>
                          {solution}
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">命令示例：</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      {issue.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="text-green-400 text-sm font-mono">
                          {command}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">最佳实践</h2>
            <p className="mt-4 text-lg text-gray-600">
              提高 PR 质量的建议
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{practice.practice}</h3>
                <p className="text-gray-600 text-sm mb-4">{practice.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">优势：</h4>
                  <ul className="space-y-2">
                    {practice.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Next Steps */}
      <div className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">开始贡献</h2>
            <p className="text-lg text-gray-600 mb-8">
              现在你已经了解了完整的贡献流程
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/contributing-guide"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                贡献流程
              </Link>
              <Link
                href="/docs/coding-standards"
                className="rounded-lg border border-emerald-600 px-6 py-3 text-base font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                代码规范
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
