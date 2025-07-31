import { Metadata } from 'next'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon, 
  CodeBracketIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '代码重构助手 | Gemini CLI 实战案例',
  description: '学习如何使用 Gemini CLI 作为代码重构助手，包括代码分析、重构建议、自动化重构等实战技巧。',
  keywords: 'Gemini CLI 代码重构, AI 代码分析, 自动重构, 代码优化, 重构实战案例',
  openGraph: {
    title: '代码重构助手 - Gemini CLI 实战案例',
    description: '使用 AI 智能分析和重构代码，提升代码质量',
    type: 'article',
  },
}

const refactoringScenarios = [
  {
    id: 'legacy-code',
    title: '遗留代码现代化',
    description: '将老旧代码升级到现代标准',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-indigo-600',
    example: {
      before: `// 旧版 JavaScript 代码
function getUserData(userId) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/users/' + userId, false);
  xhr.send();
  
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    return data;
  } else {
    return null;
  }
}

function processUsers(userIds) {
  var results = [];
  for (var i = 0; i < userIds.length; i++) {
    var userData = getUserData(userIds[i]);
    if (userData) {
      results.push(userData);
    }
  }
  return results;
}`,
      after: `// 现代化后的代码
async function getUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}

async function processUsers(userIds) {
  const promises = userIds.map(id => getUserData(id));
  const results = await Promise.allSettled(promises);
  
  return results
    .filter(result => result.status === 'fulfilled' && result.value)
    .map(result => result.value);
}`,
      improvements: [
        '使用现代 fetch API 替代 XMLHttpRequest',
        '异步处理替代同步阻塞',
        '使用 const/let 替代 var',
        '模板字符串替代字符串拼接',
        '并行处理提升性能',
        '更好的错误处理'
      ]
    }
  },
  {
    id: 'performance',
    title: '性能优化重构',
    description: '识别和解决性能瓶颈',
    icon: SparklesIcon,
    color: 'from-green-500 to-emerald-600',
    example: {
      before: `// 性能问题代码
function findUsersByRole(users, targetRole) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].roles.length; j++) {
      if (users[i].roles[j].name === targetRole) {
        result.push(users[i]);
        break;
      }
    }
  }
  return result;
}

function processUserData(users) {
  const processed = [];
  for (const user of users) {
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: findUsersByRole([user], 'admin').length > 0 ? 'admin' : 'user'
    };
    processed.push(userData);
  }
  return processed;
}`,
      after: `// 优化后的代码
function findUsersByRole(users, targetRole) {
  return users.filter(user => 
    user.roles.some(role => role.name === targetRole)
  );
}

function processUserData(users) {
  // 预计算管理员用户集合
  const adminUsers = new Set(
    findUsersByRole(users, 'admin').map(user => user.id)
  );
  
  return users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    roles: adminUsers.has(user.id) ? 'admin' : 'user'
  }));
}`,
      improvements: [
        '使用数组方法替代手动循环',
        '避免重复计算',
        '使用 Set 提升查找性能',
        '减少嵌套循环复杂度',
        '更简洁的函数式编程风格'
      ]
    }
  }
]

const refactoringWorkflow = [
  {
    step: 1,
    title: '代码分析',
    description: '使用 AI 分析现有代码的问题和改进空间',
    commands: [
      '@src/legacy-module.js 分析这个模块的代码质量问题',
      '@src/utils/ 识别这个目录中的性能瓶颈',
      '@package.json @src/ 分析项目的技术债务'
    ],
    tips: '提供具体的分析维度，如性能、可维护性、安全性等'
  },
  {
    step: 2,
    title: '重构规划',
    description: '制定详细的重构计划和优先级',
    commands: [
      '基于分析结果，制定重构计划和优先级',
      '评估重构的风险和收益',
      '建议分阶段重构的策略'
    ],
    tips: '考虑业务影响和团队资源，制定可执行的计划'
  },
  {
    step: 3,
    title: '代码重构',
    description: '逐步执行重构，保持功能不变',
    commands: [
      '@src/old-component.js 重构这个组件，使用现代 React 模式',
      '@src/api.js 优化这个 API 模块的性能',
      '@src/utils.js 提取公共函数并改进命名'
    ],
    tips: '每次重构保持小步快跑，确保测试通过'
  },
  {
    step: 4,
    title: '测试验证',
    description: '确保重构后功能正确性',
    commands: [
      '@tests/ @src/refactored-module.js 为重构后的代码生成测试用例',
      '比较重构前后的性能差异',
      '验证重构是否引入新的问题'
    ],
    tips: '重构前后都要有充分的测试覆盖'
  }
]

const practicalExamples = [
  {
    title: '组件重构示例',
    description: '将类组件重构为函数组件',
    prompt: '@src/components/UserProfile.js 将这个类组件重构为使用 Hooks 的函数组件，保持相同的功能',
    expectedOutput: [
      '分析现有类组件的状态和生命周期',
      '转换为函数组件和相应的 Hooks',
      '保持 props 接口不变',
      '优化性能和可读性'
    ]
  },
  {
    title: 'API 重构示例',
    description: '重构 API 调用逻辑',
    prompt: '@src/services/api.js 重构这个 API 服务，添加错误处理、重试机制和类型安全',
    expectedOutput: [
      '添加统一的错误处理',
      '实现自动重试机制',
      '添加 TypeScript 类型定义',
      '改进 API 响应处理'
    ]
  },
  {
    title: '数据结构优化',
    description: '优化数据处理逻辑',
    prompt: '@src/utils/dataProcessor.js 优化这个数据处理模块的性能，减少时间复杂度',
    expectedOutput: [
      '分析当前算法复杂度',
      '建议更高效的数据结构',
      '重写关键算法',
      '添加性能基准测试'
    ]
  }
]

const bestPractices = [
  {
    category: '重构原则',
    practices: [
      '小步快跑，频繁提交',
      '保持测试覆盖率',
      '一次只做一种类型的重构',
      '重构前确保有完整的测试'
    ]
  },
  {
    category: 'AI 协助技巧',
    practices: [
      '提供充分的上下文信息',
      '明确重构目标和约束',
      '要求解释重构理由',
      '验证 AI 建议的正确性'
    ]
  },
  {
    category: '质量保证',
    practices: [
      '重构后运行完整测试套件',
      '检查性能指标变化',
      '进行代码审查',
      '更新相关文档'
    ]
  }
]

export default function CodeRefactoringPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <WrenchScrewdriverIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              代码重构助手
            </h1>
            <p className="mt-4 text-lg text-purple-100">
              使用 AI 智能分析和重构代码，提升代码质量
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-purple-100">
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

      {/* Refactoring Scenarios */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">重构场景</h2>
            <p className="mt-4 text-lg text-gray-600">
              常见的代码重构场景和解决方案
            </p>
          </div>

          <div className="space-y-16">
            {refactoringScenarios.map((scenario) => (
              <div key={scenario.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${scenario.color} text-white`}>
                    <scenario.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{scenario.title}</h3>
                    <p className="text-gray-600">{scenario.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">重构前：</h4>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <pre className="text-red-800 text-xs font-mono whitespace-pre-wrap overflow-x-auto">
                        {scenario.example.before}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">重构后：</h4>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <pre className="text-green-800 text-xs font-mono whitespace-pre-wrap overflow-x-auto">
                        {scenario.example.after}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">改进点：</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scenario.example.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">重构工作流</h2>
            <p className="mt-4 text-lg text-gray-600">
              系统化的代码重构流程
            </p>
          </div>

          <div className="space-y-8">
            {refactoringWorkflow.map((workflow, index) => (
              <div key={workflow.step} className="relative">
                {index < refactoringWorkflow.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-0.5 bg-purple-200"></div>
                )}
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold">
                    {workflow.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{workflow.title}</h3>
                    <p className="text-gray-600 mb-4">{workflow.description}</p>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">示例命令：</h4>
                      <div className="space-y-2">
                        {workflow.commands.map((command, cmdIndex) => (
                          <div key={cmdIndex} className="bg-gray-900 rounded p-2">
                            <code className="text-green-400 text-xs font-mono">{command}</code>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-blue-800 text-sm"><strong>提示：</strong> {workflow.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practical Examples */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">实战示例</h2>
            <p className="mt-4 text-lg text-gray-600">
              具体的重构任务和 AI 提示词
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practicalExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">AI 提示词：</h4>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <code className="text-green-400 text-xs font-mono">{example.prompt}</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">期望输出：</h4>
                  <ul className="space-y-1">
                    {example.expectedOutput.map((output, outputIndex) => (
                      <li key={outputIndex} className="text-sm text-gray-600 flex items-start">
                        <ArrowRightIcon className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        {output}
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
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">最佳实践</h2>
            <p className="mt-4 text-lg text-gray-600">
              代码重构的重要原则和技巧
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">{practice.category}</h3>
                <ul className="space-y-2">
                  {practice.practices.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
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
      <div className="bg-purple-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">继续学习</h2>
            <p className="text-lg text-gray-600 mb-8">
              探索更多 AI 辅助开发的实战案例
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides/documentation"
                className="rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white hover:bg-purple-500 transition-colors"
              >
                文档生成案例
              </Link>
              <Link
                href="/guides/code-review"
                className="rounded-lg border border-purple-600 px-6 py-3 text-base font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
              >
                代码审查助手
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
