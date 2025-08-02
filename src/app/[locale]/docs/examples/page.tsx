import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { 
  CodeBracketIcon, 
  DocumentTextIcon,
  CommandLineIcon,
  CogIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

interface LocaleExamplesPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: LocaleExamplesPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '代码示例 - Gemini CLI 文档',
    hi: 'कोड उदाहरण - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Exemples de Code - Documentation Gemini CLI',
    de: 'Code-Beispiele - Gemini CLI Dokumentation',
    ja: 'コード例 - Gemini CLI ドキュメント',
    ko: '코드 예제 - Gemini CLI 문서',
    es: 'Ejemplos de Código - Documentación Gemini CLI',
    ru: 'Примеры Кода - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '实用的代码示例和模板，包括基本用法、高级功能、自动化脚本和集成模式。',
    hi: 'व्यावहारिक कोड उदाहरण और टेम्प्लेट जिनमें बुनियादी उपयोग, उन्नत सुविधाएं, स्वचालन स्क्रिप्ट और एकीकरण पैटर्न शामिल हैं।',
    fr: 'Exemples de code pratiques et modèles incluant l\'utilisation de base, les fonctionnalités avancées, les scripts d\'automatisation et les modèles d\'intégration.',
    de: 'Praktische Code-Beispiele und Vorlagen einschließlich grundlegender Nutzung, erweiterte Funktionen, Automatisierungsskripte und Integrationsmuster.',
    ja: '基本的な使用法、高度な機能、自動化スクリプト、統合パターンを含む実用的なコード例とテンプレート。',
    ko: '기본 사용법, 고급 기능, 자동화 스크립트 및 통합 패턴을 포함한 실용적인 코드 예제와 템플릿.',
    es: 'Ejemplos de código prácticos y plantillas que incluyen uso básico, características avanzadas, scripts de automatización y patrones de integración.',
    ru: 'Практические примеры кода и шаблоны, включая базовое использование, расширенные функции, скрипты автоматизации и паттерны интеграции.'
  }

  return {
    title: titles[locale as keyof typeof titles] || 'Code Examples - Gemini CLI Documentation',
    description: descriptions[locale as keyof typeof descriptions] || 'Practical code examples and templates for Gemini CLI including basic usage, advanced features, automation scripts, and integration patterns.',
    keywords: 'Gemini CLI examples, code samples, templates, automation, integration, scripts',
    openGraph: {
      title: titles[locale as keyof typeof titles] || 'Gemini CLI Code Examples',
      description: descriptions[locale as keyof typeof descriptions] || 'Practical code examples and templates for developers',
      type: 'article',
    },
  }
}

const isValidLocale = (locale: string): boolean => {
  return ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru'].includes(locale)
}

const getContent = (locale: string) => {
  if (locale === 'zh') {
    return {
      heroTitle: '代码示例',
      heroSubtitle: '实用的代码示例和模板，帮助您充分利用 Gemini CLI。从基本用法到高级自动化和集成模式。',
      categoriesTitle: '示例分类',
      categoriesSubtitle: '选择一个分类来探索相关示例',
      needMoreHelpTitle: '需要更多帮助？',
      needMoreHelpSubtitle: '探索更多资源和文档',
      apiReferenceText: 'API 参考',
      userGuidesText: '用户指南',
      backToDocsText: '返回文档',
      codeLabel: '代码',
      categories: [
        {
          id: 'basic-usage',
          title: '基础使用',
          description: '开始使用 Gemini CLI 的简单示例',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: '简单聊天',
              description: '与 Gemini 开始基本对话',
              language: 'bash',
              code: `# 启动交互式聊天
gemini chat

# 询问单个问题
gemini ask "什么是机器学习？"

# 使用特定模型询问
gemini ask "解释量子计算" --model gemini-pro`
            },
            {
              title: '文件分析',
              description: '使用 AI 辅助分析代码文件',
              language: 'bash',
              code: `# 分析单个文件
gemini analyze src/main.js

# 分析多个文件
gemini analyze src/*.js --type code-review

# 获取代码建议
gemini analyze package.json --suggest-improvements`
            },
            {
              title: '配置管理',
              description: '基本配置管理',
              language: 'bash',
              code: `# 查看当前配置
gemini config list

# 设置默认模型
gemini config set model gemini-pro

# 设置温度
gemini config set temperature 0.7

# 重置为默认值
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: '自动化脚本',
          description: '自动化开发任务的脚本',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: '代码审查脚本',
              description: '自动化拉取请求的代码审查',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - 自动化代码审查脚本

# 获取更改的文件
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 开始自动化代码审查..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 审查中: $file"

    # 分析文件
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "审查此代码的错误、性能问题和最佳实践" \\
      --output review-$file.md
  fi
done

echo "✅ 代码审查完成！查看 review-*.md 文件"`
            },
            {
              title: '文档生成器',
              description: '从代码生成文档',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - 自动生成文档

echo "📚 生成文档中..."

# 生成 API 文档
gemini analyze src/api/*.js \\
  --prompt "生成包含示例的综合 API 文档" \\
  --output docs/api.md

# 生成 README
gemini ask "基于代码库为此项目创建 README.md" \\
  --context src/ \\
  --output README.md

# 生成更新日志
git log --oneline --since="1 month ago" | \\
  gemini ask "将这些 git 提交转换为更新日志" \\
  --output CHANGELOG.md

echo "✅ 文档生成完成！"`
            },
            {
              title: '测试生成器',
              description: '自动生成单元测试',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - 自动生成单元测试

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 生成单元测试中..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # 获取相对路径
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 为以下文件生成测试: $file"

  gemini analyze "$file" \\
    --prompt "生成包含边界情况的综合单元测试" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ 测试生成完成！"`
            }
          ]
        },
        {
          id: 'integration',
          title: '集成示例',
          description: '与其他工具和工作流的集成',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'GitHub Actions 工作流',
              description: 'CI/CD 与 GitHub Actions 集成',
              language: 'yaml',
              code: `name: AI 代码审查
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: 安装 Gemini CLI
        run: npm install -g @google/generative-ai-cli

      - name: 配置 Gemini CLI
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: 获取更改的文件
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: AI 代码审查
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: 评论 PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 AI 代码审查\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'VS Code 扩展',
              description: '自定义 VS Code 扩展集成',
              language: 'javascript',
              code: `// extension.js - Gemini CLI 的 VS Code 扩展
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // 命令：解释代码
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('请选择要解释的代码');
        return;
      }

      // 显示进度
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "使用 Gemini 解释代码中...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "解释这段代码"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`错误: \${error.message}\`);
                reject(error);
                return;
              }

              // 在新文档中显示解释
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  // 命令：生成测试
  let testCommand = vscode.commands.registerCommand(
    'gemini.generateTests',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const filePath = editor.document.fileName;
      const testPath = filePath.replace(/\\.(js|ts)$/, '.test.$1');

      exec(\`gemini analyze "\${filePath}" --prompt "生成单元测试" --output "\${testPath}"\`,
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(\`错误: \${error.message}\`);
            return;
          }

          vscode.window.showInformationMessage(\`测试已生成: \${testPath}\`);
          vscode.workspace.openTextDocument(testPath).then(doc => {
            vscode.window.showTextDocument(doc);
          });
        });
    }
  );

  context.subscriptions.push(explainCommand, testCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            },
            {
              title: 'Docker 集成',
              description: '在容器中使用 Gemini CLI',
              language: 'dockerfile',
              code: `# Dockerfile - Gemini CLI 容器
FROM node:18-alpine

# 安装 Gemini CLI
RUN npm install -g @google/generative-ai-cli

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 设置环境变量
ENV GEMINI_API_KEY=""

# 创建分析脚本
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\
    chmod +x /usr/local/bin/analyze-project

# 默认命令
CMD ["analyze-project"]`
            }
          ]
        },
        {
          id: 'advanced',
          title: '高级用法',
          description: '复杂场景和高级功能',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: '自定义工具开发',
              description: '为特定任务创建自定义工具',
              language: 'javascript',
              code: `// custom-tools.js - 自定义工具定义
const tools = {
  // 数据库查询工具
  database_query: {
    name: 'database_query',
    description: '在数据库上执行 SQL 查询',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`错误: \${error.message}\`;
      }
    }
  },

  // API 测试工具
  api_test: {
    name: 'api_test',
    description: '测试 API 端点',
    parameters: {
      url: { type: 'string', required: true },
      method: { type: 'string', default: 'GET' },
      headers: { type: 'object', default: {} },
      body: { type: 'object', default: null }
    },
    execute: async ({ url, method, headers, body }) => {
      const fetch = require('node-fetch');
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.text();
        return \`状态: \${response.status}\\n响应: \${data}\`;
      } catch (error) {
        return \`错误: \${error.message}\`;
      }
    }
  },

  // 代码格式化工具
  format_code: {
    name: 'format_code',
    description: '使用 prettier 格式化代码',
    parameters: {
      code: { type: 'string', required: true },
      language: { type: 'string', default: 'javascript' }
    },
    execute: async ({ code, language }) => {
      const prettier = require('prettier');
      try {
        const formatted = prettier.format(code, {
          parser: language === 'typescript' ? 'typescript' : 'babel',
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        return formatted;
      } catch (error) {
        return \`错误: \${error.message}\`;
      }
    }
  }
};

// 向 Gemini CLI 注册工具
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
            },
            {
              title: '批量处理',
              description: '批量处理多个文件或任务',
              language: 'bash',
              code: `#!/bin/bash
# batch-process.sh - 使用 Gemini CLI 进行批量处理

BATCH_SIZE=5
CONCURRENT_JOBS=3

# 处理单个文件的函数
process_file() {
  local file=$1
  local task=$2

  echo "🔄 处理中: $file"

  case $task in
    "translate")
      gemini ask "将此代码注释翻译为英文" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "优化此代码的性能" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "添加综合的 JSDoc 注释" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac

  echo "✅ 完成: $file"
}

# 主批量处理函数
batch_process() {
  local task=$1
  shift
  local files=("$@")

  echo "🚀 开始批量处理: $task"
  echo "📁 要处理的文件: \${#files[@]}"

  # 分批处理文件
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")

    echo "📦 处理批次 \$((i/BATCH_SIZE + 1))"

    # 限制并发处理批次
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done

    wait # 等待当前批次完成
  done

  echo "🎉 批量处理完成！"
}

# 使用示例
case $1 in
  "translate")
    batch_process "translate" src/**/*.js
    ;;
  "optimize")
    batch_process "optimize" src/**/*.js
    ;;
  "document")
    batch_process "document" src/**/*.js
    ;;
  *)
    echo "用法: $0 {translate|optimize|document}"
    exit 1
    ;;
esac`
            },
            {
              title: '插件系统',
              description: '创建可扩展的插件架构',
              language: 'javascript',
              code: `// plugin-system.js - 插件系统示例
const { GeminiCLI } = require('@google/generative-ai-cli');

class PluginManager {
  constructor() {
    this.cli = new GeminiCLI();
    this.plugins = new Map();
  }

  // 注册插件
  registerPlugin(plugin) {
    if (!plugin.name || !plugin.version) {
      throw new Error('插件必须有名称和版本');
    }

    this.plugins.set(plugin.name, plugin);

    // 注册插件命令
    if (plugin.commands) {
      Object.entries(plugin.commands).forEach(([cmd, handler]) => {
        this.cli.registerCommand(\`\${plugin.name}:\${cmd}\`, handler);
      });
    }

    // 注册插件工具
    if (plugin.tools) {
      plugin.tools.forEach(tool => {
        this.cli.registerTool(tool);
      });
    }

    console.log(\`✅ 插件 \${plugin.name} v\${plugin.version} 已注册\`);
  }

  // 获取插件信息
  getPlugin(name) {
    return this.plugins.get(name);
  }

  // 列出所有插件
  listPlugins() {
    return Array.from(this.plugins.values());
  }
}

// 示例插件：代码质量检查器
const codeQualityPlugin = {
  name: 'code-quality',
  version: '1.0.0',
  description: '代码质量检查插件',

  commands: {
    'check': async (args) => {
      const files = args.files || ['src/'];
      console.log(\`🔍 检查代码质量: \${files.join(', ')}\`);

      // 实现代码质量检查逻辑
      return '代码质量检查完成';
    },

    'metrics': async (args) => {
      console.log('📊 生成代码指标...');

      // 实现代码指标生成逻辑
      return {
        complexity: 'low',
        maintainability: 'high',
        coverage: '85%'
      };
    }
  },

  tools: [
    {
      name: 'complexity_analyzer',
      description: '分析代码复杂度',
      parameters: {
        file: { type: 'string', required: true }
      },
      execute: async ({ file }) => {
        // 实现复杂度分析
        return \`文件 \${file} 的复杂度: 中等\`;
      }
    }
  ]
};

// 使用示例
async function main() {
  const manager = new PluginManager();

  // 注册插件
  manager.registerPlugin(codeQualityPlugin);

  // 使用插件命令
  const result = await manager.cli.executeCommand('code-quality:check', {
    files: ['src/main.js', 'src/utils.js']
  });

  console.log('检查结果:', result);

  // 列出所有插件
  console.log('已安装的插件:', manager.listPlugins());
}

main().catch(console.error);`
            }
          ]
        }
      ]
    }
  }

  // Hindi translation
  if (locale === 'hi') {
    return {
      heroTitle: 'कोड उदाहरण',
      heroSubtitle: 'व्यावहारिक कोड उदाहरण और टेम्प्लेट जो आपको Gemini CLI का पूरा फायदा उठाने में मदद करते हैं। बुनियादी उपयोग से लेकर उन्नत स्वचालन और एकीकरण पैटर्न तक।',
      categoriesTitle: 'उदाहरण श्रेणियां',
      categoriesSubtitle: 'संबंधित उदाहरणों का पता लगाने के लिए एक श्रेणी चुनें',
      needMoreHelpTitle: 'अधिक सहायता चाहिए?',
      needMoreHelpSubtitle: 'अधिक संसाधन और दस्तावेज़ीकरण देखें',
      apiReferenceText: 'API संदर्भ',
      userGuidesText: 'उपयोगकर्ता गाइड',
      backToDocsText: 'दस्तावेज़ों पर वापस जाएं',
      codeLabel: 'कोड',
      categories: [
        {
          id: 'basic-usage',
          title: 'बुनियादी उपयोग',
          description: 'Gemini CLI के साथ शुरुआत करने के लिए सरल उदाहरण',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'सरल चैट',
              description: 'Gemini के साथ बुनियादी बातचीत शुरू करें',
              language: 'bash',
              code: `# इंटरैक्टिव चैट शुरू करें
gemini chat

# एक प्रश्न पूछें
gemini ask "मशीन लर्निंग क्या है?"

# विशिष्ट मॉडल के साथ पूछें
gemini ask "क्वांटम कंप्यूटिंग समझाएं" --model gemini-pro`
            },
            {
              title: 'फ़ाइल विश्लेषण',
              description: 'AI सहायता के साथ कोड फ़ाइलों का विश्लेषण करें',
              language: 'bash',
              code: `# एक फ़ाइल का विश्लेषण करें
gemini analyze src/main.js

# कई फ़ाइलों का विश्लेषण करें
gemini analyze src/*.js --type code-review

# कोड सुझाव प्राप्त करें
gemini analyze package.json --suggest-improvements`
            },
            {
              title: 'कॉन्फ़िगरेशन प्रबंधन',
              description: 'बुनियादी कॉन्फ़िगरेशन प्रबंधन',
              language: 'bash',
              code: `# वर्तमान कॉन्फ़िगरेशन देखें
gemini config list

# डिफ़ॉल्ट मॉडल सेट करें
gemini config set model gemini-pro

# तापमान सेट करें
gemini config set temperature 0.7

# डिफ़ॉल्ट पर रीसेट करें
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: 'स्वचालन स्क्रिप्ट',
          description: 'विकास कार्यों को स्वचालित करने के लिए स्क्रिप्ट',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: 'कोड समीक्षा स्क्रिप्ट',
              description: 'पुल अनुरोधों की स्वचालित कोड समीक्षा',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - स्वचालित कोड समीक्षा स्क्रिप्ट

# बदली गई फ़ाइलें प्राप्त करें
CHANGED_FILES=\$(git diff --name-only HEAD~1)

echo "🔍 स्वचालित कोड समीक्षा शुरू कर रहे हैं..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 समीक्षा कर रहे हैं: $file"

    # फ़ाइल का विश्लेषण करें
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "इस कोड में त्रुटियों, प्रदर्शन समस्याओं और सर्वोत्तम प्रथाओं की समीक्षा करें" \\
      --output review-$file.md
  fi
done

echo "✅ कोड समीक्षा पूर्ण! review-*.md फ़ाइलें देखें"`
            },
            {
              title: 'दस्तावेज़ जेनरेटर',
              description: 'कोड से दस्तावेज़ीकरण उत्पन्न करें',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - स्वचालित दस्तावेज़ीकरण

echo "📚 दस्तावेज़ीकरण उत्पन्न कर रहे हैं..."

# API दस्तावेज़ीकरण उत्पन्न करें
gemini analyze src/api/*.js \\
  --prompt "उदाहरणों के साथ व्यापक API दस्तावेज़ीकरण उत्पन्न करें" \\
  --output docs/api.md

# README उत्पन्न करें
gemini ask "इस प्रोजेक्ट के लिए कोडबेस के आधार पर README.md बनाएं" \\
  --context src/ \\
  --output README.md

# चेंजलॉग उत्पन्न करें
git log --oneline --since="1 month ago" | \\
  gemini ask "इन git कमिट्स को चेंजलॉग में बदलें" \\
  --output CHANGELOG.md

echo "✅ दस्तावेज़ीकरण पूर्ण!"`
            },
            {
              title: 'टेस्ट जेनरेटर',
              description: 'स्वचालित रूप से यूनिट टेस्ट उत्पन्न करें',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - स्वचालित यूनिट टेस्ट

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 यूनिट टेस्ट उत्पन्न कर रहे हैं..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # सापेक्ष पथ प्राप्त करें
  rel_path=\${file#\$SOURCE_DIR/}
  test_file="\$TEST_DIR/\${rel_path%.*}.test.\${file##*.}"

  echo "📝 इस फ़ाइल के लिए टेस्ट उत्पन्न कर रहे हैं: $file"

  gemini analyze "$file" \\
    --prompt "सीमा मामलों के साथ व्यापक यूनिट टेस्ट उत्पन्न करें" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ टेस्ट उत्पन्न पूर्ण!"`
            }
          ]
        },
        {
          id: 'integration',
          title: 'एकीकरण उदाहरण',
          description: 'अन्य उपकरणों और वर्कफ़्लो के साथ एकीकरण',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'GitHub Actions वर्कफ़्लो',
              description: 'GitHub Actions के साथ CI/CD एकीकरण',
              language: 'yaml',
              code: `name: AI कोड समीक्षा
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Node.js सेटअप करें
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Gemini CLI इंस्टॉल करें
        run: npm install -g @google/generative-ai-cli

      - name: Gemini CLI कॉन्फ़िगर करें
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: बदली गई फ़ाइलें प्राप्त करें
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: AI कोड समीक्षा
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: PR पर टिप्पणी करें
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 AI कोड समीक्षा\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'VS Code एक्सटेंशन',
              description: 'कस्टम VS Code एक्सटेंशन एकीकरण',
              language: 'javascript',
              code: `// extension.js - Gemini CLI के लिए VS Code एक्सटेंशन
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // कमांड: कोड समझाएं
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('कृपया समझाने के लिए कोड चुनें');
        return;
      }

      // प्रगति दिखाएं
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Gemini के साथ कोड समझा रहे हैं...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "इस कोड को समझाएं"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`त्रुटि: \${error.message}\`);
                reject(error);
                return;
              }

              // नए दस्तावेज़ में व्याख्या दिखाएं
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  context.subscriptions.push(explainCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            }
          ]
        },
        {
          id: 'advanced',
          title: 'उन्नत उपयोग',
          description: 'जटिल परिदृश्य और उन्नत सुविधाएं',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: 'कस्टम टूल विकास',
              description: 'विशिष्ट कार्यों के लिए कस्टम टूल बनाएं',
              language: 'javascript',
              code: `// custom-tools.js - कस्टम टूल परिभाषाएं
const tools = {
  // डेटाबेस क्वेरी टूल
  database_query: {
    name: 'database_query',
    description: 'डेटाबेस पर SQL क्वेरी निष्पादित करें',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`त्रुटि: \${error.message}\`;
      }
    }
  }
};

module.exports = tools;`
            }
          ]
        }
      ]
    }
  }

  // French translation
  if (locale === 'fr') {
    return {
      heroTitle: 'Exemples de Code',
      heroSubtitle: 'Exemples de code pratiques et modèles pour vous aider à tirer le meilleur parti de Gemini CLI. De l\'utilisation de base aux modèles d\'automatisation et d\'intégration avancés.',
      categoriesTitle: 'Catégories d\'Exemples',
      categoriesSubtitle: 'Choisissez une catégorie pour explorer les exemples connexes',
      needMoreHelpTitle: 'Besoin d\'aide supplémentaire ?',
      needMoreHelpSubtitle: 'Explorez plus de ressources et de documentation',
      apiReferenceText: 'Référence API',
      userGuidesText: 'Guides Utilisateur',
      backToDocsText: 'Retour aux Docs',
      codeLabel: 'Code',
      categories: [
        {
          id: 'basic-usage',
          title: 'Utilisation de Base',
          description: 'Exemples simples pour commencer avec Gemini CLI',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'Chat Simple',
              description: 'Commencer une conversation de base avec Gemini',
              language: 'bash',
              code: `# Démarrer un chat interactif
gemini chat

# Poser une question
gemini ask "Qu'est-ce que l'apprentissage automatique ?"

# Demander avec un modèle spécifique
gemini ask "Expliquer l'informatique quantique" --model gemini-pro`
            },
            {
              title: 'Analyse de Fichiers',
              description: 'Analyser les fichiers de code avec l\'assistance IA',
              language: 'bash',
              code: `# Analyser un seul fichier
gemini analyze src/main.js

# Analyser plusieurs fichiers
gemini analyze src/*.js --type code-review

# Obtenir des suggestions de code
gemini analyze package.json --suggest-improvements`
            },
            {
              title: 'Gestion de Configuration',
              description: 'Gestion de configuration de base',
              language: 'bash',
              code: `# Voir la configuration actuelle
gemini config list

# Définir le modèle par défaut
gemini config set model gemini-pro

# Définir la température
gemini config set temperature 0.7

# Réinitialiser aux valeurs par défaut
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: 'Scripts d\'Automatisation',
          description: 'Scripts pour automatiser les tâches de développement',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: 'Script de Révision de Code',
              description: 'Révision de code automatisée pour les pull requests',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - Script de révision de code automatisée

# Obtenir les fichiers modifiés
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 Démarrage de la révision de code automatisée..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 Révision en cours: $file"

    # Analyser le fichier
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "Réviser ce code pour les erreurs, problèmes de performance et meilleures pratiques" \\
      --output review-$file.md
  fi
done

echo "✅ Révision de code terminée! Vérifiez les fichiers review-*.md"`
            },
            {
              title: 'Générateur de Documentation',
              description: 'Générer de la documentation à partir du code',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - Génération automatique de documentation

echo "📚 Génération de la documentation..."

# Générer la documentation API
gemini analyze src/api/*.js \\
  --prompt "Générer une documentation API complète avec des exemples" \\
  --output docs/api.md

# Générer README
gemini ask "Créer un README.md pour ce projet basé sur la base de code" \\
  --context src/ \\
  --output README.md

# Générer le changelog
git log --oneline --since="1 month ago" | \\
  gemini ask "Convertir ces commits git en changelog" \\
  --output CHANGELOG.md

echo "✅ Génération de documentation terminée!"`
            },
            {
              title: 'Générateur de Tests',
              description: 'Générer automatiquement des tests unitaires',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - Génération automatique de tests unitaires

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 Génération des tests unitaires..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # Obtenir le chemin relatif
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 Génération des tests pour: $file"

  gemini analyze "$file" \\
    --prompt "Générer des tests unitaires complets avec des cas limites" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ Génération des tests terminée!"`
            }
          ]
        },
        {
          id: 'integration',
          title: 'Exemples d\'Intégration',
          description: 'Intégrer Gemini CLI avec d\'autres outils et flux de travail',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'Flux de Travail GitHub Actions',
              description: 'Intégration CI/CD avec GitHub Actions',
              language: 'yaml',
              code: `name: Révision de Code IA
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Configurer Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Installer Gemini CLI
        run: npm install -g @google/generative-ai-cli

      - name: Configurer Gemini CLI
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: Obtenir les fichiers modifiés
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: Révision de Code IA
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: Commenter la PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 Révision de Code IA\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'Extension VS Code',
              description: 'Intégration d\'extension VS Code personnalisée',
              language: 'javascript',
              code: `// extension.js - Extension VS Code pour Gemini CLI
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // Commande: Expliquer le Code
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('Veuillez sélectionner le code à expliquer');
        return;
      }

      // Afficher le progrès
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Explication du code avec Gemini...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "Expliquer ce code"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`Erreur: \${error.message}\`);
                reject(error);
                return;
              }

              // Afficher l'explication dans un nouveau document
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  context.subscriptions.push(explainCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            },
            {
              title: 'Intégration Docker',
              description: 'Utiliser Gemini CLI dans des conteneurs',
              language: 'dockerfile',
              code: `# Dockerfile - Conteneur Gemini CLI
FROM node:18-alpine

# Installer Gemini CLI
RUN npm install -g @google/generative-ai-cli

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY . .

# Définir les variables d'environnement
ENV GEMINI_API_KEY=""

# Créer un script d'analyse
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\
    chmod +x /usr/local/bin/analyze-project

# Commande par défaut
CMD ["analyze-project"]`
            }
          ]
        },
        {
          id: 'advanced',
          title: 'Utilisation Avancée',
          description: 'Scénarios complexes et fonctionnalités avancées',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: 'Développement d\'Outils Personnalisés',
              description: 'Créer des outils personnalisés pour des tâches spécifiques',
              language: 'javascript',
              code: `// custom-tools.js - Définitions d'outils personnalisés
const tools = {
  // Outil de requête de base de données
  database_query: {
    name: 'database_query',
    description: 'Exécuter des requêtes SQL sur la base de données',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`Erreur: \${error.message}\`;
      }
    }
  },

  // Outil de test d'API
  api_test: {
    name: 'api_test',
    description: 'Tester les points de terminaison API',
    parameters: {
      url: { type: 'string', required: true },
      method: { type: 'string', default: 'GET' },
      headers: { type: 'object', default: {} },
      body: { type: 'object', default: null }
    },
    execute: async ({ url, method, headers, body }) => {
      const fetch = require('node-fetch');
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.text();
        return \`Statut: \${response.status}\\nRéponse: \${data}\`;
      } catch (error) {
        return \`Erreur: \${error.message}\`;
      }
    }
  },

  // Outil de formatage de code
  format_code: {
    name: 'format_code',
    description: 'Formater le code avec prettier',
    parameters: {
      code: { type: 'string', required: true },
      language: { type: 'string', default: 'javascript' }
    },
    execute: async ({ code, language }) => {
      const prettier = require('prettier');
      try {
        const formatted = prettier.format(code, {
          parser: language === 'typescript' ? 'typescript' : 'babel',
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        return formatted;
      } catch (error) {
        return \`Erreur: \${error.message}\`;
      }
    }
  }
};

// Enregistrer les outils avec Gemini CLI
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
            },
            {
              title: 'Traitement par Lots',
              description: 'Traiter plusieurs fichiers ou tâches par lots',
              language: 'bash',
              code: `#!/bin/bash
# batch-process.sh - Traitement par lots avec Gemini CLI

BATCH_SIZE=5
CONCURRENT_JOBS=3

# Fonction pour traiter un seul fichier
process_file() {
  local file=$1
  local task=$2

  echo "🔄 Traitement: $file"

  case $task in
    "translate")
      gemini ask "Traduire les commentaires de ce code en anglais" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "Optimiser ce code pour les performances" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "Ajouter des commentaires JSDoc complets" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac

  echo "✅ Terminé: $file"
}

# Fonction principale de traitement par lots
batch_process() {
  local task=$1
  shift
  local files=("$@")

  echo "🚀 Démarrage du traitement par lots: $task"
  echo "📁 Fichiers à traiter: \${#files[@]}"

  # Traiter les fichiers par lots
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")

    echo "📦 Traitement du lot \$((i/BATCH_SIZE + 1))"

    # Traiter le lot avec concurrence limitée
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done

    wait # Attendre la fin du lot actuel
  done

  echo "🎉 Traitement par lots terminé!"
}

# Exemples d'utilisation
case $1 in
  "translate")
    batch_process "translate" src/**/*.js
    ;;
  "optimize")
    batch_process "optimize" src/**/*.js
    ;;
  "document")
    batch_process "document" src/**/*.js
    ;;
  *)
    echo "Usage: $0 {translate|optimize|document}"
    exit 1
    ;;
esac`
            }
          ]
        }
      ]
    }
  }

  // German translation
  if (locale === 'de') {
    return {
      heroTitle: 'Code-Beispiele',
      heroSubtitle: 'Praktische Code-Beispiele und Vorlagen, die Ihnen helfen, das Beste aus Gemini CLI herauszuholen. Von der grundlegenden Nutzung bis hin zu erweiterten Automatisierungs- und Integrationsmustern.',
      categoriesTitle: 'Beispiel-Kategorien',
      categoriesSubtitle: 'Wählen Sie eine Kategorie, um verwandte Beispiele zu erkunden',
      needMoreHelpTitle: 'Benötigen Sie weitere Hilfe?',
      needMoreHelpSubtitle: 'Erkunden Sie weitere Ressourcen und Dokumentation',
      apiReferenceText: 'API-Referenz',
      userGuidesText: 'Benutzerhandbücher',
      backToDocsText: 'Zurück zu Docs',
      codeLabel: 'Code',
      categories: [
        {
          id: 'basic-usage',
          title: 'Grundlegende Nutzung',
          description: 'Einfache Beispiele für den Einstieg in Gemini CLI',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'Einfacher Chat',
              description: 'Grundlegende Unterhaltung mit Gemini beginnen',
              language: 'bash',
              code: `# Interaktiven Chat starten
gemini chat

# Eine Frage stellen
gemini ask "Was ist maschinelles Lernen?"

# Mit spezifischem Modell fragen
gemini ask "Quantencomputing erklären" --model gemini-pro`
            },
            {
              title: 'Datei-Analyse',
              description: 'Code-Dateien mit KI-Unterstützung analysieren',
              language: 'bash',
              code: `# Einzelne Datei analysieren
gemini analyze src/main.js

# Mehrere Dateien analysieren
gemini analyze src/*.js --type code-review

# Code-Vorschläge erhalten
gemini analyze package.json --suggest-improvements`
            },
            {
              title: 'Konfigurationsverwaltung',
              description: 'Grundlegende Konfigurationsverwaltung',
              language: 'bash',
              code: `# Aktuelle Konfiguration anzeigen
gemini config list

# Standardmodell festlegen
gemini config set model gemini-pro

# Temperatur festlegen
gemini config set temperature 0.7

# Auf Standardwerte zurücksetzen
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: 'Automatisierungsskripte',
          description: 'Skripte zur Automatisierung von Entwicklungsaufgaben',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: 'Code-Review-Skript',
              description: 'Automatisierte Code-Überprüfung für Pull-Requests',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - Automatisiertes Code-Review-Skript

# Geänderte Dateien abrufen
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 Automatisierte Code-Überprüfung wird gestartet..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 Überprüfung läuft: $file"

    # Datei analysieren
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "Überprüfen Sie diesen Code auf Fehler, Leistungsprobleme und bewährte Praktiken" \\
      --output review-$file.md
  fi
done

echo "✅ Code-Überprüfung abgeschlossen! Überprüfen Sie die review-*.md Dateien"`
            },
            {
              title: 'Dokumentations-Generator',
              description: 'Dokumentation aus Code generieren',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - Automatische Dokumentationsgenerierung

echo "📚 Dokumentation wird generiert..."

# API-Dokumentation generieren
gemini analyze src/api/*.js \\
  --prompt "Umfassende API-Dokumentation mit Beispielen generieren" \\
  --output docs/api.md

# README generieren
gemini ask "README.md für dieses Projekt basierend auf der Codebasis erstellen" \\
  --context src/ \\
  --output README.md

# Changelog generieren
git log --oneline --since="1 month ago" | \\
  gemini ask "Diese Git-Commits in ein Changelog umwandeln" \\
  --output CHANGELOG.md

echo "✅ Dokumentationsgenerierung abgeschlossen!"`
            },
            {
              title: 'Test-Generator',
              description: 'Automatisch Unit-Tests generieren',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - Automatische Unit-Test-Generierung

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 Unit-Tests werden generiert..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # Relativen Pfad erhalten
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 Tests werden generiert für: $file"

  gemini analyze "$file" \\
    --prompt "Umfassende Unit-Tests mit Grenzfällen generieren" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ Test-Generierung abgeschlossen!"`
            }
          ]
        },
        {
          id: 'integration',
          title: 'Integrationsbeispiele',
          description: 'Gemini CLI mit anderen Tools und Workflows integrieren',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'GitHub Actions Workflow',
              description: 'CI/CD-Integration mit GitHub Actions',
              language: 'yaml',
              code: `name: KI Code-Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Node.js einrichten
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Gemini CLI installieren
        run: npm install -g @google/generative-ai-cli

      - name: Gemini CLI konfigurieren
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: Geänderte Dateien abrufen
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: KI Code-Review
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: PR kommentieren
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 KI Code-Review\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'VS Code Erweiterung',
              description: 'Benutzerdefinierte VS Code Erweiterungsintegration',
              language: 'javascript',
              code: `// extension.js - VS Code Erweiterung für Gemini CLI
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // Befehl: Code erklären
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('Bitte wählen Sie Code zum Erklären aus');
        return;
      }

      // Fortschritt anzeigen
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Code wird mit Gemini erklärt...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "Erkläre diesen Code"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`Fehler: \${error.message}\`);
                reject(error);
                return;
              }

              // Erklärung in neuem Dokument anzeigen
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  context.subscriptions.push(explainCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            },
            {
              title: 'Docker Integration',
              description: 'Gemini CLI in Containern verwenden',
              language: 'dockerfile',
              code: `# Dockerfile - Gemini CLI Container
FROM node:18-alpine

# Gemini CLI installieren
RUN npm install -g @google/generative-ai-cli

# Arbeitsverzeichnis festlegen
WORKDIR /app

# Projektdateien kopieren
COPY . .

# Umgebungsvariablen festlegen
ENV GEMINI_API_KEY=""

# Analyseskript erstellen
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\
    chmod +x /usr/local/bin/analyze-project

# Standardbefehl
CMD ["analyze-project"]`
            }
          ]
        },
        {
          id: 'advanced',
          title: 'Erweiterte Nutzung',
          description: 'Komplexe Szenarien und erweiterte Funktionen',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: 'Benutzerdefinierte Tool-Entwicklung',
              description: 'Benutzerdefinierte Tools für spezifische Aufgaben erstellen',
              language: 'javascript',
              code: `// custom-tools.js - Benutzerdefinierte Tool-Definitionen
const tools = {
  // Datenbankabfrage-Tool
  database_query: {
    name: 'database_query',
    description: 'SQL-Abfragen auf der Datenbank ausführen',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`Fehler: \${error.message}\`;
      }
    }
  },

  // API-Test-Tool
  api_test: {
    name: 'api_test',
    description: 'API-Endpunkte testen',
    parameters: {
      url: { type: 'string', required: true },
      method: { type: 'string', default: 'GET' },
      headers: { type: 'object', default: {} },
      body: { type: 'object', default: null }
    },
    execute: async ({ url, method, headers, body }) => {
      const fetch = require('node-fetch');
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.text();
        return \`Status: \${response.status}\\nAntwort: \${data}\`;
      } catch (error) {
        return \`Fehler: \${error.message}\`;
      }
    }
  },

  // Code-Formatierungs-Tool
  format_code: {
    name: 'format_code',
    description: 'Code mit prettier formatieren',
    parameters: {
      code: { type: 'string', required: true },
      language: { type: 'string', default: 'javascript' }
    },
    execute: async ({ code, language }) => {
      const prettier = require('prettier');
      try {
        const formatted = prettier.format(code, {
          parser: language === 'typescript' ? 'typescript' : 'babel',
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        return formatted;
      } catch (error) {
        return \`Fehler: \${error.message}\`;
      }
    }
  }
};

// Tools bei Gemini CLI registrieren
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
            },
            {
              title: 'Stapelverarbeitung',
              description: 'Mehrere Dateien oder Aufgaben stapelweise verarbeiten',
              language: 'bash',
              code: `#!/bin/bash
# batch-process.sh - Stapelverarbeitung mit Gemini CLI

BATCH_SIZE=5
CONCURRENT_JOBS=3

# Funktion zur Verarbeitung einer einzelnen Datei
process_file() {
  local file=$1
  local task=$2

  echo "🔄 Verarbeitung: $file"

  case $task in
    "translate")
      gemini ask "Diese Code-Kommentare ins Englische übersetzen" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "Diesen Code für Leistung optimieren" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "Umfassende JSDoc-Kommentare hinzufügen" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac

  echo "✅ Abgeschlossen: $file"
}

# Haupt-Stapelverarbeitungsfunktion
batch_process() {
  local task=$1
  shift
  local files=("$@")

  echo "🚀 Stapelverarbeitung starten: $task"
  echo "📁 Zu verarbeitende Dateien: \${#files[@]}"

  # Dateien stapelweise verarbeiten
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")

    echo "📦 Stapel \$((i/BATCH_SIZE + 1)) verarbeiten"

    # Stapel mit begrenzter Parallelität verarbeiten
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done

    wait # Auf Abschluss des aktuellen Stapels warten
  done

  echo "🎉 Stapelverarbeitung abgeschlossen!"
}

# Verwendungsbeispiele
case $1 in
  "translate")
    batch_process "translate" src/**/*.js
    ;;
  "optimize")
    batch_process "optimize" src/**/*.js
    ;;
  "document")
    batch_process "document" src/**/*.js
    ;;
  *)
    echo "Verwendung: $0 {translate|optimize|document}"
    exit 1
    ;;
esac`
            }
          ]
        }
      ]
    }
  }

  // Japanese translation
  if (locale === 'ja') {
    return {
      heroTitle: 'コード例',
      heroSubtitle: 'Gemini CLIを最大限に活用するための実用的なコード例とテンプレート。基本的な使用法から高度な自動化と統合パターンまで。',
      categoriesTitle: '例のカテゴリ',
      categoriesSubtitle: '関連する例を探索するためのカテゴリを選択してください',
      needMoreHelpTitle: 'さらにヘルプが必要ですか？',
      needMoreHelpSubtitle: 'より多くのリソースとドキュメントを探索する',
      apiReferenceText: 'APIリファレンス',
      userGuidesText: 'ユーザーガイド',
      backToDocsText: 'ドキュメントに戻る',
      codeLabel: 'コード',
      categories: [
        {
          id: 'basic-usage',
          title: '基本的な使用法',
          description: 'Gemini CLIを始めるための簡単な例',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'シンプルチャット',
              description: 'Geminiとの基本的な会話を開始',
              language: 'bash',
              code: `# インタラクティブチャットを開始
gemini chat

# 質問をする
gemini ask "機械学習とは何ですか？"

# 特定のモデルで質問
gemini ask "量子コンピューティングを説明して" --model gemini-pro`
            },
            {
              title: 'ファイル分析',
              description: 'AIアシスタンスでコードファイルを分析',
              language: 'bash',
              code: `# 単一ファイルを分析
gemini analyze src/main.js

# 複数ファイルを分析
gemini analyze src/*.js --type code-review

# コード提案を取得
gemini analyze package.json --suggest-improvements`
            },
            {
              title: '設定管理',
              description: '基本的な設定管理',
              language: 'bash',
              code: `# 現在の設定を表示
gemini config list

# デフォルトモデルを設定
gemini config set model gemini-pro

# 温度を設定
gemini config set temperature 0.7

# デフォルトにリセット
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: '自動化スクリプト',
          description: '開発タスクを自動化するスクリプト',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: 'コードレビュースクリプト',
              description: 'プルリクエストの自動化されたコードレビュー',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - 自動化されたコードレビュースクリプト

# 変更されたファイルを取得
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 自動化されたコードレビューを開始しています..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 レビュー中: $file"

    # ファイルを分析
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "このコードのエラー、パフォーマンスの問題、ベストプラクティスをレビューしてください" \\
      --output review-$file.md
  fi
done

echo "✅ コードレビュー完了！review-*.mdファイルを確認してください"`
            },
            {
              title: 'ドキュメントジェネレーター',
              description: 'コードからドキュメントを生成',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - 自動ドキュメント生成

echo "📚 ドキュメントを生成中..."

# APIドキュメントを生成
gemini analyze src/api/*.js \\
  --prompt "例を含む包括的なAPIドキュメントを生成" \\
  --output docs/api.md

# READMEを生成
gemini ask "このプロジェクトのコードベースに基づいてREADME.mdを作成" \\
  --context src/ \\
  --output README.md

# 変更履歴を生成
git log --oneline --since="1 month ago" | \\
  gemini ask "これらのgitコミットを変更履歴に変換" \\
  --output CHANGELOG.md

echo "✅ ドキュメント生成完了！"`
            },
            {
              title: 'テストジェネレーター',
              description: '自動的にユニットテストを生成',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - 自動ユニットテスト生成

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 ユニットテストを生成中..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # 相対パスを取得
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 テストを生成中: $file"

  gemini analyze "$file" \\
    --prompt "境界ケースを含む包括的なユニットテストを生成" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ テスト生成完了！"`
            }
          ]
        },
        {
          id: 'integration',
          title: '統合例',
          description: 'Gemini CLIを他のツールやワークフローと統合',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'GitHub Actionsワークフロー',
              description: 'GitHub ActionsとのCI/CD統合',
              language: 'yaml',
              code: `name: AIコードレビュー
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Node.jsセットアップ
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Gemini CLIインストール
        run: npm install -g @google/generative-ai-cli

      - name: Gemini CLI設定
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: 変更されたファイルを取得
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: AIコードレビュー
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: PRにコメント
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 AIコードレビュー\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'VS Code拡張機能',
              description: 'カスタムVS Code拡張機能統合',
              language: 'javascript',
              code: `// extension.js - Gemini CLI用VS Code拡張機能
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // コマンド：コードを説明
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('説明するコードを選択してください');
        return;
      }

      // 進行状況を表示
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Geminiでコードを説明中...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "このコードを説明してください"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`エラー: \${error.message}\`);
                reject(error);
                return;
              }

              // 新しいドキュメントで説明を表示
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  // コマンド：テストを生成
  let testCommand = vscode.commands.registerCommand(
    'gemini.generateTests',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const filePath = editor.document.fileName;
      const testPath = filePath.replace(/\\.(js|ts)$/, '.test.$1');

      exec(\`gemini analyze "\${filePath}" --prompt "ユニットテストを生成" --output "\${testPath}"\`,
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(\`エラー: \${error.message}\`);
            return;
          }

          vscode.window.showInformationMessage(\`テストが生成されました: \${testPath}\`);
          vscode.workspace.openTextDocument(testPath).then(doc => {
            vscode.window.showTextDocument(doc);
          });
        });
    }
  );

  context.subscriptions.push(explainCommand, testCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            },
            {
              title: 'Docker統合',
              description: 'コンテナでGemini CLIを使用',
              language: 'dockerfile',
              code: `# Dockerfile - Gemini CLIコンテナ
FROM node:18-alpine

# Gemini CLIをインストール
RUN npm install -g @google/generative-ai-cli

# 作業ディレクトリを設定
WORKDIR /app

# プロジェクトファイルをコピー
COPY . .

# 環境変数を設定
ENV GEMINI_API_KEY=""

# 分析スクリプトを作成
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\
    chmod +x /usr/local/bin/analyze-project

# デフォルトコマンド
CMD ["analyze-project"]`
            }
          ]
        },
        {
          id: 'advanced',
          title: '高度な使用法',
          description: '複雑なシナリオと高度な機能',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: 'カスタムツール開発',
              description: '特定のタスク用のカスタムツールを作成',
              language: 'javascript',
              code: `// custom-tools.js - カスタムツール定義
const tools = {
  // データベースクエリツール
  database_query: {
    name: 'database_query',
    description: 'データベースでSQLクエリを実行',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`エラー: \${error.message}\`;
      }
    }
  },

  // APIテストツール
  api_test: {
    name: 'api_test',
    description: 'APIエンドポイントをテスト',
    parameters: {
      url: { type: 'string', required: true },
      method: { type: 'string', default: 'GET' },
      headers: { type: 'object', default: {} },
      body: { type: 'object', default: null }
    },
    execute: async ({ url, method, headers, body }) => {
      const fetch = require('node-fetch');
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.text();
        return \`ステータス: \${response.status}\\nレスポンス: \${data}\`;
      } catch (error) {
        return \`エラー: \${error.message}\`;
      }
    }
  },

  // コードフォーマッターツール
  format_code: {
    name: 'format_code',
    description: 'prettierを使用してコードをフォーマット',
    parameters: {
      code: { type: 'string', required: true },
      language: { type: 'string', default: 'javascript' }
    },
    execute: async ({ code, language }) => {
      const prettier = require('prettier');
      try {
        const formatted = prettier.format(code, {
          parser: language === 'typescript' ? 'typescript' : 'babel',
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        return formatted;
      } catch (error) {
        return \`エラー: \${error.message}\`;
      }
    }
  }
};

// Gemini CLIにツールを登録
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
            },
            {
              title: 'バッチ処理',
              description: '複数のファイルやタスクをバッチ処理',
              language: 'bash',
              code: `#!/bin/bash
# batch-process.sh - Gemini CLIを使用したバッチ処理

BATCH_SIZE=5
CONCURRENT_JOBS=3

# 単一ファイルを処理する関数
process_file() {
  local file=$1
  local task=$2

  echo "🔄 処理中: $file"

  case $task in
    "translate")
      gemini ask "このコードコメントを英語に翻訳" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "このコードのパフォーマンスを最適化" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "包括的なJSDocコメントを追加" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac

  echo "✅ 完了: $file"
}

# メインバッチ処理関数
batch_process() {
  local task=$1
  shift
  local files=("$@")

  echo "🚀 バッチ処理開始: $task"
  echo "📁 処理するファイル数: \${#files[@]}"

  # ファイルをバッチで処理
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")

    echo "📦 バッチ \$((i/BATCH_SIZE + 1)) を処理中"

    # 制限された並行性でバッチを処理
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done

    wait # 現在のバッチの完了を待機
  done

  echo "🎉 バッチ処理完了！"
}

# 使用例
case $1 in
  "translate")
    batch_process "translate" src/**/*.js
    ;;
  "optimize")
    batch_process "optimize" src/**/*.js
    ;;
  "document")
    batch_process "document" src/**/*.js
    ;;
  *)
    echo "使用法: $0 {translate|optimize|document}"
    exit 1
    ;;
esac`
            },
            {
              title: 'プラグインシステム',
              description: '拡張可能なプラグインアーキテクチャを作成',
              language: 'javascript',
              code: `// plugin-system.js - プラグインシステムの例
const { GeminiCLI } = require('@google/generative-ai-cli');

class PluginManager {
  constructor() {
    this.cli = new GeminiCLI();
    this.plugins = new Map();
  }

  // プラグインを登録
  registerPlugin(plugin) {
    if (!plugin.name || !plugin.version) {
      throw new Error('プラグインには名前とバージョンが必要です');
    }

    this.plugins.set(plugin.name, plugin);

    // プラグインコマンドを登録
    if (plugin.commands) {
      Object.entries(plugin.commands).forEach(([cmd, handler]) => {
        this.cli.registerCommand(\`\${plugin.name}:\${cmd}\`, handler);
      });
    }

    // プラグインツールを登録
    if (plugin.tools) {
      plugin.tools.forEach(tool => {
        this.cli.registerTool(tool);
      });
    }

    console.log(\`✅ プラグイン \${plugin.name} v\${plugin.version} が登録されました\`);
  }

  // プラグイン情報を取得
  getPlugin(name) {
    return this.plugins.get(name);
  }

  // すべてのプラグインをリスト
  listPlugins() {
    return Array.from(this.plugins.values());
  }
}

// サンプルプラグイン：コード品質チェッカー
const codeQualityPlugin = {
  name: 'code-quality',
  version: '1.0.0',
  description: 'コード品質チェックプラグイン',

  commands: {
    'check': async (args) => {
      const files = args.files || ['src/'];
      console.log(\`🔍 コード品質をチェック中: \${files.join(', ')}\`);

      // コード品質チェックロジックを実装
      return 'コード品質チェック完了';
    },

    'metrics': async (args) => {
      console.log('📊 コードメトリクスを生成中...');

      // コードメトリクス生成ロジックを実装
      return {
        complexity: 'low',
        maintainability: 'high',
        coverage: '85%'
      };
    }
  },

  tools: [
    {
      name: 'complexity_analyzer',
      description: 'コードの複雑さを分析',
      parameters: {
        file: { type: 'string', required: true }
      },
      execute: async ({ file }) => {
        // 複雑さ分析を実装
        return \`ファイル \${file} の複雑さ: 中程度\`;
      }
    }
  ]
};

// 使用例
async function main() {
  const manager = new PluginManager();

  // プラグインを登録
  manager.registerPlugin(codeQualityPlugin);

  // プラグインコマンドを使用
  const result = await manager.cli.executeCommand('code-quality:check', {
    files: ['src/main.js', 'src/utils.js']
  });

  console.log('チェック結果:', result);

  // すべてのプラグインをリスト
  console.log('インストール済みプラグイン:', manager.listPlugins());
}

main().catch(console.error);`
            }
          ]
        }
      ]
    }
  }

  // Korean translation
  if (locale === 'ko') {
    return {
      heroTitle: '코드 예제',
      heroSubtitle: 'Gemini CLI를 최대한 활용하는 데 도움이 되는 실용적인 코드 예제와 템플릿. 기본 사용법부터 고급 자동화 및 통합 패턴까지.',
      categoriesTitle: '예제 카테고리',
      categoriesSubtitle: '관련 예제를 탐색할 카테고리를 선택하세요',
      needMoreHelpTitle: '더 많은 도움이 필요하신가요?',
      needMoreHelpSubtitle: '더 많은 리소스와 문서를 탐색하세요',
      apiReferenceText: 'API 참조',
      userGuidesText: '사용자 가이드',
      backToDocsText: '문서로 돌아가기',
      codeLabel: '코드',
      categories: [
        {
          id: 'basic-usage',
          title: '기본 사용법',
          description: 'Gemini CLI 시작을 위한 간단한 예제',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: '간단한 채팅',
              description: 'Gemini와 기본 대화 시작',
              language: 'bash',
              code: `# 대화형 채팅 시작
gemini chat

# 질문하기
gemini ask "머신러닝이란 무엇인가요?"

# 특정 모델로 질문
gemini ask "양자 컴퓨팅 설명해주세요" --model gemini-pro`
            },
            {
              title: '파일 분석',
              description: 'AI 지원으로 코드 파일 분석',
              language: 'bash',
              code: `# 단일 파일 분석
gemini analyze src/main.js

# 여러 파일 분석
gemini analyze src/*.js --type code-review

# 코드 제안 받기
gemini analyze package.json --suggest-improvements`
            },
            {
              title: '구성 관리',
              description: '기본 구성 관리',
              language: 'bash',
              code: `# 현재 구성 보기
gemini config list

# 기본 모델 설정
gemini config set model gemini-pro

# 온도 설정
gemini config set temperature 0.7

# 기본값으로 재설정
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: '자동화 스크립트',
          description: '개발 작업을 자동화하는 스크립트',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: '코드 리뷰 스크립트',
              description: '풀 리퀘스트의 자동화된 코드 리뷰',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - 자동화된 코드 리뷰 스크립트

# 변경된 파일 가져오기
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 자동화된 코드 리뷰를 시작합니다..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 리뷰 중: $file"

    # 파일 분석
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "이 코드의 오류, 성능 문제 및 모범 사례를 검토하세요" \\
      --output review-$file.md
  fi
done

echo "✅ 코드 리뷰 완료! review-*.md 파일을 확인하세요"`
            },
            {
              title: '문서 생성기',
              description: '코드에서 문서 생성',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - 자동 문서 생성

echo "📚 문서 생성 중..."

# API 문서 생성
gemini analyze src/api/*.js \\
  --prompt "예제가 포함된 포괄적인 API 문서 생성" \\
  --output docs/api.md

# README 생성
gemini ask "이 프로젝트의 코드베이스를 기반으로 README.md 생성" \\
  --context src/ \\
  --output README.md

# 변경 로그 생성
git log --oneline --since="1 month ago" | \\
  gemini ask "이 git 커밋들을 변경 로그로 변환" \\
  --output CHANGELOG.md

echo "✅ 문서 생성 완료!"`
            },
            {
              title: '테스트 생성기',
              description: '자동으로 단위 테스트 생성',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - 자동 단위 테스트 생성

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 단위 테스트 생성 중..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # 상대 경로 가져오기
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 테스트 생성 중: $file"

  gemini analyze "$file" \\
    --prompt "경계 사례가 포함된 포괄적인 단위 테스트 생성" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ 테스트 생성 완료!"`
            }
          ]
        },
        {
          id: 'integration',
          title: '통합 예제',
          description: 'Gemini CLI를 다른 도구 및 워크플로와 통합',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'GitHub Actions 워크플로',
              description: 'GitHub Actions와의 CI/CD 통합',
              language: 'yaml',
              code: `name: AI 코드 리뷰
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Node.js 설정
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Gemini CLI 설치
        run: npm install -g @google/generative-ai-cli

      - name: Gemini CLI 구성
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: 변경된 파일 가져오기
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: AI 코드 리뷰
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: PR에 댓글 달기
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 AI 코드 리뷰\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'VS Code 확장',
              description: '커스텀 VS Code 확장 통합',
              language: 'javascript',
              code: `// extension.js - Gemini CLI용 VS Code 확장
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // 명령: 코드 설명
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('설명할 코드를 선택하세요');
        return;
      }

      // 진행 상황 표시
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Gemini로 코드 설명 중...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "이 코드를 설명해주세요"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`오류: \${error.message}\`);
                reject(error);
                return;
              }

              // 새 문서에서 설명 표시
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  // 명령: 테스트 생성
  let testCommand = vscode.commands.registerCommand(
    'gemini.generateTests',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const filePath = editor.document.fileName;
      const testPath = filePath.replace(/\\.(js|ts)$/, '.test.$1');

      exec(\`gemini analyze "\${filePath}" --prompt "단위 테스트 생성" --output "\${testPath}"\`,
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(\`오류: \${error.message}\`);
            return;
          }

          vscode.window.showInformationMessage(\`테스트가 생성되었습니다: \${testPath}\`);
          vscode.workspace.openTextDocument(testPath).then(doc => {
            vscode.window.showTextDocument(doc);
          });
        });
    }
  );

  context.subscriptions.push(explainCommand, testCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            },
            {
              title: 'Docker 통합',
              description: '컨테이너에서 Gemini CLI 사용',
              language: 'dockerfile',
              code: `# Dockerfile - Gemini CLI 컨테이너
FROM node:18-alpine

# Gemini CLI 설치
RUN npm install -g @google/generative-ai-cli

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 파일 복사
COPY . .

# 환경 변수 설정
ENV GEMINI_API_KEY=""

# 분석 스크립트 생성
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\
    chmod +x /usr/local/bin/analyze-project

# 기본 명령
CMD ["analyze-project"]`
            }
          ]
        },
        {
          id: 'advanced',
          title: '고급 사용법',
          description: '복잡한 시나리오와 고급 기능',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: '커스텀 도구 개발',
              description: '특정 작업을 위한 커스텀 도구 생성',
              language: 'javascript',
              code: `// custom-tools.js - 커스텀 도구 정의
const tools = {
  // 데이터베이스 쿼리 도구
  database_query: {
    name: 'database_query',
    description: '데이터베이스에서 SQL 쿼리 실행',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`오류: \${error.message}\`;
      }
    }
  },

  // API 테스트 도구
  api_test: {
    name: 'api_test',
    description: 'API 엔드포인트 테스트',
    parameters: {
      url: { type: 'string', required: true },
      method: { type: 'string', default: 'GET' },
      headers: { type: 'object', default: {} },
      body: { type: 'object', default: null }
    },
    execute: async ({ url, method, headers, body }) => {
      const fetch = require('node-fetch');
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.text();
        return \`상태: \${response.status}\\n응답: \${data}\`;
      } catch (error) {
        return \`오류: \${error.message}\`;
      }
    }
  },

  // 코드 포맷터 도구
  format_code: {
    name: 'format_code',
    description: 'prettier를 사용하여 코드 포맷',
    parameters: {
      code: { type: 'string', required: true },
      language: { type: 'string', default: 'javascript' }
    },
    execute: async ({ code, language }) => {
      const prettier = require('prettier');
      try {
        const formatted = prettier.format(code, {
          parser: language === 'typescript' ? 'typescript' : 'babel',
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        return formatted;
      } catch (error) {
        return \`오류: \${error.message}\`;
      }
    }
  }
};

// Gemini CLI에 도구 등록
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
            },
            {
              title: '배치 처리',
              description: '여러 파일이나 작업을 배치로 처리',
              language: 'bash',
              code: `#!/bin/bash
# batch-process.sh - Gemini CLI를 사용한 배치 처리

BATCH_SIZE=5
CONCURRENT_JOBS=3

# 단일 파일을 처리하는 함수
process_file() {
  local file=$1
  local task=$2

  echo "🔄 처리 중: $file"

  case $task in
    "translate")
      gemini ask "이 코드 주석을 영어로 번역" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "이 코드의 성능을 최적화" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "포괄적인 JSDoc 주석 추가" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac

  echo "✅ 완료: $file"
}

# 메인 배치 처리 함수
batch_process() {
  local task=$1
  shift
  local files=("$@")

  echo "🚀 배치 처리 시작: $task"
  echo "📁 처리할 파일 수: \${#files[@]}"

  # 파일을 배치로 처리
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")

    echo "📦 배치 \$((i/BATCH_SIZE + 1)) 처리 중"

    # 제한된 동시성으로 배치 처리
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done

    wait # 현재 배치 완료 대기
  done

  echo "🎉 배치 처리 완료!"
}

# 사용 예제
case $1 in
  "translate")
    batch_process "translate" src/**/*.js
    ;;
  "optimize")
    batch_process "optimize" src/**/*.js
    ;;
  "document")
    batch_process "document" src/**/*.js
    ;;
  *)
    echo "사용법: $0 {translate|optimize|document}"
    exit 1
    ;;
esac`
            },
            {
              title: '플러그인 시스템',
              description: '확장 가능한 플러그인 아키텍처 생성',
              language: 'javascript',
              code: `// plugin-system.js - 플러그인 시스템 예제
const { GeminiCLI } = require('@google/generative-ai-cli');

class PluginManager {
  constructor() {
    this.cli = new GeminiCLI();
    this.plugins = new Map();
  }

  // 플러그인 등록
  registerPlugin(plugin) {
    if (!plugin.name || !plugin.version) {
      throw new Error('플러그인에는 이름과 버전이 필요합니다');
    }

    this.plugins.set(plugin.name, plugin);

    // 플러그인 명령 등록
    if (plugin.commands) {
      Object.entries(plugin.commands).forEach(([cmd, handler]) => {
        this.cli.registerCommand(\`\${plugin.name}:\${cmd}\`, handler);
      });
    }

    // 플러그인 도구 등록
    if (plugin.tools) {
      plugin.tools.forEach(tool => {
        this.cli.registerTool(tool);
      });
    }

    console.log(\`✅ 플러그인 \${plugin.name} v\${plugin.version} 등록됨\`);
  }

  // 플러그인 정보 가져오기
  getPlugin(name) {
    return this.plugins.get(name);
  }

  // 모든 플러그인 나열
  listPlugins() {
    return Array.from(this.plugins.values());
  }
}

// 예제 플러그인: 코드 품질 검사기
const codeQualityPlugin = {
  name: 'code-quality',
  version: '1.0.0',
  description: '코드 품질 검사 플러그인',

  commands: {
    'check': async (args) => {
      const files = args.files || ['src/'];
      console.log(\`🔍 코드 품질 검사 중: \${files.join(', ')}\`);

      // 코드 품질 검사 로직 구현
      return '코드 품질 검사 완료';
    },

    'metrics': async (args) => {
      console.log('📊 코드 메트릭 생성 중...');

      // 코드 메트릭 생성 로직 구현
      return {
        complexity: 'low',
        maintainability: 'high',
        coverage: '85%'
      };
    }
  },

  tools: [
    {
      name: 'complexity_analyzer',
      description: '코드 복잡도 분석',
      parameters: {
        file: { type: 'string', required: true }
      },
      execute: async ({ file }) => {
        // 복잡도 분석 구현
        return \`파일 \${file}의 복잡도: 보통\`;
      }
    }
  ]
};

// 사용 예제
async function main() {
  const manager = new PluginManager();

  // 플러그인 등록
  manager.registerPlugin(codeQualityPlugin);

  // 플러그인 명령 사용
  const result = await manager.cli.executeCommand('code-quality:check', {
    files: ['src/main.js', 'src/utils.js']
  });

  console.log('검사 결과:', result);

  // 모든 플러그인 나열
  console.log('설치된 플러그인:', manager.listPlugins());
}

main().catch(console.error);`
            }
          ]
        }
      ]
    }
  }

  // Spanish translation
  if (locale === 'es') {
    return {
      heroTitle: 'Ejemplos de Código',
      heroSubtitle: 'Ejemplos de código prácticos y plantillas para ayudarte a aprovechar al máximo Gemini CLI. Desde uso básico hasta patrones avanzados de automatización e integración.',
      categoriesTitle: 'Categorías de Ejemplos',
      categoriesSubtitle: 'Elige una categoría para explorar ejemplos relacionados',
      needMoreHelpTitle: '¿Necesitas más ayuda?',
      needMoreHelpSubtitle: 'Explora más recursos y documentación',
      apiReferenceText: 'Referencia API',
      userGuidesText: 'Guías de Usuario',
      backToDocsText: 'Volver a Docs',
      codeLabel: 'Código',
      categories: [
        {
          id: 'basic-usage',
          title: 'Uso Básico',
          description: 'Ejemplos simples para comenzar con Gemini CLI',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'Chat Simple',
              description: 'Iniciar conversación básica con Gemini',
              language: 'bash',
              code: `# Iniciar chat interactivo
gemini chat

# Hacer una pregunta
gemini ask "¿Qué es el aprendizaje automático?"

# Preguntar con modelo específico
gemini ask "Explicar computación cuántica" --model gemini-pro`
            },
            {
              title: 'Análisis de Archivos',
              description: 'Analizar archivos de código con asistencia IA',
              language: 'bash',
              code: `# Analizar un solo archivo
gemini analyze src/main.js

# Analizar múltiples archivos
gemini analyze src/*.js --type code-review

# Obtener sugerencias de código
gemini analyze package.json --suggest-improvements`
            },
            {
              title: 'Gestión de Configuración',
              description: 'Gestión básica de configuración',
              language: 'bash',
              code: `# Ver configuración actual
gemini config list

# Establecer modelo por defecto
gemini config set model gemini-pro

# Establecer temperatura
gemini config set temperature 0.7

# Restablecer a valores por defecto
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: 'Scripts de Automatización',
          description: 'Scripts para automatizar tareas de desarrollo',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: 'Script de Revisión de Código',
              description: 'Revisión de código automatizada para pull requests',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - Script de revisión de código automatizada

# Obtener archivos modificados
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 Iniciando revisión de código automatizada..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 Revisando: $file"

    # Analizar archivo
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "Revisar este código en busca de errores, problemas de rendimiento y mejores prácticas" \\
      --output review-$file.md
  fi
done

echo "✅ Revisión de código completada! Revisa los archivos review-*.md"`
            },
            {
              title: 'Generador de Documentación',
              description: 'Generar documentación desde código',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - Generación automática de documentación

echo "📚 Generando documentación..."

# Generar documentación API
gemini analyze src/api/*.js \\
  --prompt "Generar documentación API completa con ejemplos" \\
  --output docs/api.md

# Generar README
gemini ask "Crear README.md para este proyecto basado en la base de código" \\
  --context src/ \\
  --output README.md

# Generar changelog
git log --oneline --since="1 month ago" | \\
  gemini ask "Convertir estos commits de git en changelog" \\
  --output CHANGELOG.md

echo "✅ Generación de documentación completada!"`
            },
            {
              title: 'Generador de Pruebas',
              description: 'Generar automáticamente pruebas unitarias',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - Generación automática de pruebas unitarias

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 Generando pruebas unitarias..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # Obtener ruta relativa
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 Generando pruebas para: $file"

  gemini analyze "$file" \\
    --prompt "Generar pruebas unitarias completas con casos límite" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ Generación de pruebas completada!"`
            }
          ]
        },
        {
          id: 'integration',
          title: 'Ejemplos de Integración',
          description: 'Integrar Gemini CLI con otras herramientas y flujos de trabajo',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'Flujo de Trabajo GitHub Actions',
              description: 'Integración CI/CD con GitHub Actions',
              language: 'yaml',
              code: `name: Revisión de Código IA
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Instalar Gemini CLI
        run: npm install -g @google/generative-ai-cli

      - name: Configurar Gemini CLI
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: Obtener archivos modificados
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: Revisión de Código IA
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: Comentar PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 Revisión de Código IA\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'Extensión VS Code',
              description: 'Integración de extensión VS Code personalizada',
              language: 'javascript',
              code: `// extension.js - Extensión VS Code para Gemini CLI
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // Comando: Explicar Código
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('Por favor selecciona código para explicar');
        return;
      }

      // Mostrar progreso
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Explicando código con Gemini...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "Explica este código"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`Error: \${error.message}\`);
                reject(error);
                return;
              }

              // Mostrar explicación en nuevo documento
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  // Comando: Generar Pruebas
  let testCommand = vscode.commands.registerCommand(
    'gemini.generateTests',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const filePath = editor.document.fileName;
      const testPath = filePath.replace(/\\.(js|ts)$/, '.test.$1');

      exec(\`gemini analyze "\${filePath}" --prompt "Generar pruebas unitarias" --output "\${testPath}"\`,
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(\`Error: \${error.message}\`);
            return;
          }

          vscode.window.showInformationMessage(\`Pruebas generadas: \${testPath}\`);
          vscode.workspace.openTextDocument(testPath).then(doc => {
            vscode.window.showTextDocument(doc);
          });
        });
    }
  );

  context.subscriptions.push(explainCommand, testCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            },
            {
              title: 'Integración Docker',
              description: 'Usar Gemini CLI en contenedores',
              language: 'dockerfile',
              code: `# Dockerfile - Contenedor Gemini CLI
FROM node:18-alpine

# Instalar Gemini CLI
RUN npm install -g @google/generative-ai-cli

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY . .

# Establecer variables de entorno
ENV GEMINI_API_KEY=""

# Crear script de análisis
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\
    chmod +x /usr/local/bin/analyze-project

# Comando por defecto
CMD ["analyze-project"]`
            }
          ]
        },
        {
          id: 'advanced',
          title: 'Uso Avanzado',
          description: 'Escenarios complejos y características avanzadas',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: 'Desarrollo de Herramientas Personalizadas',
              description: 'Crear herramientas personalizadas para tareas específicas',
              language: 'javascript',
              code: `// custom-tools.js - Definiciones de herramientas personalizadas
const tools = {
  // Herramienta de consulta de base de datos
  database_query: {
    name: 'database_query',
    description: 'Ejecutar consultas SQL en la base de datos',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`Error: \${error.message}\`;
      }
    }
  },

  // Herramienta de prueba de API
  api_test: {
    name: 'api_test',
    description: 'Probar endpoints de API',
    parameters: {
      url: { type: 'string', required: true },
      method: { type: 'string', default: 'GET' },
      headers: { type: 'object', default: {} },
      body: { type: 'object', default: null }
    },
    execute: async ({ url, method, headers, body }) => {
      const fetch = require('node-fetch');
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.text();
        return \`Estado: \${response.status}\\nRespuesta: \${data}\`;
      } catch (error) {
        return \`Error: \${error.message}\`;
      }
    }
  },

  // Herramienta de formateo de código
  format_code: {
    name: 'format_code',
    description: 'Formatear código usando prettier',
    parameters: {
      code: { type: 'string', required: true },
      language: { type: 'string', default: 'javascript' }
    },
    execute: async ({ code, language }) => {
      const prettier = require('prettier');
      try {
        const formatted = prettier.format(code, {
          parser: language === 'typescript' ? 'typescript' : 'babel',
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        return formatted;
      } catch (error) {
        return \`Error: \${error.message}\`;
      }
    }
  }
};

// Registrar herramientas con Gemini CLI
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
            },
            {
              title: 'Procesamiento por Lotes',
              description: 'Procesar múltiples archivos o tareas por lotes',
              language: 'bash',
              code: `#!/bin/bash
# batch-process.sh - Procesamiento por lotes con Gemini CLI

BATCH_SIZE=5
CONCURRENT_JOBS=3

# Función para procesar un solo archivo
process_file() {
  local file=$1
  local task=$2

  echo "🔄 Procesando: $file"

  case $task in
    "translate")
      gemini ask "Traducir estos comentarios de código al inglés" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "Optimizar este código para rendimiento" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "Agregar comentarios JSDoc completos" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac

  echo "✅ Completado: $file"
}

# Función principal de procesamiento por lotes
batch_process() {
  local task=$1
  shift
  local files=("$@")

  echo "🚀 Iniciando procesamiento por lotes: $task"
  echo "📁 Archivos a procesar: \${#files[@]}"

  # Procesar archivos por lotes
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")

    echo "📦 Procesando lote \$((i/BATCH_SIZE + 1))"

    # Procesar lote con concurrencia limitada
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done

    wait # Esperar a que termine el lote actual
  done

  echo "🎉 Procesamiento por lotes completado!"
}

# Ejemplos de uso
case $1 in
  "translate")
    batch_process "translate" src/**/*.js
    ;;
  "optimize")
    batch_process "optimize" src/**/*.js
    ;;
  "document")
    batch_process "document" src/**/*.js
    ;;
  *)
    echo "Uso: $0 {translate|optimize|document}"
    exit 1
    ;;
esac`
            },
            {
              title: 'Sistema de Plugins',
              description: 'Crear arquitectura de plugins extensible',
              language: 'javascript',
              code: `// plugin-system.js - Ejemplo de sistema de plugins
const { GeminiCLI } = require('@google/generative-ai-cli');

class PluginManager {
  constructor() {
    this.cli = new GeminiCLI();
    this.plugins = new Map();
  }

  // Registrar plugin
  registerPlugin(plugin) {
    if (!plugin.name || !plugin.version) {
      throw new Error('El plugin debe tener nombre y versión');
    }

    this.plugins.set(plugin.name, plugin);

    // Registrar comandos del plugin
    if (plugin.commands) {
      Object.entries(plugin.commands).forEach(([cmd, handler]) => {
        this.cli.registerCommand(\`\${plugin.name}:\${cmd}\`, handler);
      });
    }

    // Registrar herramientas del plugin
    if (plugin.tools) {
      plugin.tools.forEach(tool => {
        this.cli.registerTool(tool);
      });
    }

    console.log(\`✅ Plugin \${plugin.name} v\${plugin.version} registrado\`);
  }

  // Obtener información del plugin
  getPlugin(name) {
    return this.plugins.get(name);
  }

  // Listar todos los plugins
  listPlugins() {
    return Array.from(this.plugins.values());
  }
}

// Plugin de ejemplo: Verificador de calidad de código
const codeQualityPlugin = {
  name: 'code-quality',
  version: '1.0.0',
  description: 'Plugin de verificación de calidad de código',

  commands: {
    'check': async (args) => {
      const files = args.files || ['src/'];
      console.log(\`🔍 Verificando calidad de código: \${files.join(', ')}\`);

      // Implementar lógica de verificación de calidad
      return 'Verificación de calidad de código completada';
    },

    'metrics': async (args) => {
      console.log('📊 Generando métricas de código...');

      // Implementar lógica de generación de métricas
      return {
        complexity: 'low',
        maintainability: 'high',
        coverage: '85%'
      };
    }
  },

  tools: [
    {
      name: 'complexity_analyzer',
      description: 'Analizar complejidad del código',
      parameters: {
        file: { type: 'string', required: true }
      },
      execute: async ({ file }) => {
        // Implementar análisis de complejidad
        return \`Complejidad del archivo \${file}: media\`;
      }
    }
  ]
};

// Ejemplo de uso
async function main() {
  const manager = new PluginManager();

  // Registrar plugin
  manager.registerPlugin(codeQualityPlugin);

  // Usar comando del plugin
  const result = await manager.cli.executeCommand('code-quality:check', {
    files: ['src/main.js', 'src/utils.js']
  });

  console.log('Resultado de verificación:', result);

  // Listar todos los plugins
  console.log('Plugins instalados:', manager.listPlugins());
}

main().catch(console.error);`
            }
          ]
        }
      ]
    }
  }

  // Russian translation
  if (locale === 'ru') {
    return {
      heroTitle: 'Примеры Кода',
      heroSubtitle: 'Практические примеры кода и шаблоны, которые помогут вам максимально использовать Gemini CLI. От базового использования до продвинутых паттернов автоматизации и интеграции.',
      categoriesTitle: 'Категории Примеров',
      categoriesSubtitle: 'Выберите категорию для изучения связанных примеров',
      needMoreHelpTitle: 'Нужна дополнительная помощь?',
      needMoreHelpSubtitle: 'Изучите больше ресурсов и документации',
      apiReferenceText: 'Справочник API',
      userGuidesText: 'Руководства Пользователя',
      backToDocsText: 'Вернуться к Документации',
      codeLabel: 'Код',
      categories: [
        {
          id: 'basic-usage',
          title: 'Базовое Использование',
          description: 'Простые примеры для начала работы с Gemini CLI',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'Простой Чат',
              description: 'Начать базовую беседу с Gemini',
              language: 'bash',
              code: `# Запустить интерактивный чат
gemini chat

# Задать вопрос
gemini ask "Что такое машинное обучение?"

# Спросить с конкретной моделью
gemini ask "Объяснить квантовые вычисления" --model gemini-pro`
            },
            {
              title: 'Анализ Файлов',
              description: 'Анализировать файлы кода с помощью ИИ',
              language: 'bash',
              code: `# Анализировать один файл
gemini analyze src/main.js

# Анализировать несколько файлов
gemini analyze src/*.js --type code-review

# Получить предложения по коду
gemini analyze package.json --suggest-improvements`
            },
            {
              title: 'Управление Конфигурацией',
              description: 'Базовое управление конфигурацией',
              language: 'bash',
              code: `# Посмотреть текущую конфигурацию
gemini config list

# Установить модель по умолчанию
gemini config set model gemini-pro

# Установить температуру
gemini config set temperature 0.7

# Сбросить к значениям по умолчанию
gemini config reset`
            }
          ]
        },
        {
          id: 'automation',
          title: 'Скрипты Автоматизации',
          description: 'Скрипты для автоматизации задач разработки',
          icon: CommandLineIcon,
          color: 'from-blue-500 to-indigo-600',
          examples: [
            {
              title: 'Скрипт Ревью Кода',
              description: 'Автоматизированное ревью кода для pull request\'ов',
              language: 'bash',
              code: `#!/bin/bash
# code-review.sh - Скрипт автоматизированного ревью кода

# Получить измененные файлы
CHANGED_FILES=\\$(git diff --name-only HEAD~1)

echo "🔍 Запуск автоматизированного ревью кода..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 Проверка: $file"

    # Анализировать файл
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "Проверить этот код на ошибки, проблемы производительности и лучшие практики" \\
      --output review-$file.md
  fi
done

echo "✅ Ревью кода завершено! Проверьте файлы review-*.md"`
            },
            {
              title: 'Генератор Документации',
              description: 'Генерация документации из кода',
              language: 'bash',
              code: `#!/bin/bash
# generate-docs.sh - Автоматическая генерация документации

echo "📚 Генерация документации..."

# Генерировать API документацию
gemini analyze src/api/*.js \\
  --prompt "Сгенерировать полную API документацию с примерами" \\
  --output docs/api.md

# Генерировать README
gemini ask "Создать README.md для этого проекта на основе кодовой базы" \\
  --context src/ \\
  --output README.md

# Генерировать changelog
git log --oneline --since="1 month ago" | \\
  gemini ask "Преобразовать эти git коммиты в changelog" \\
  --output CHANGELOG.md

echo "✅ Генерация документации завершена!"`
            },
            {
              title: 'Генератор Тестов',
              description: 'Автоматическая генерация модульных тестов',
              language: 'bash',
              code: `#!/bin/bash
# generate-tests.sh - Автоматическая генерация модульных тестов

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 Генерация модульных тестов..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # Получить относительный путь
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 Генерация тестов для: $file"

  gemini analyze "$file" \\
    --prompt "Сгенерировать полные модульные тесты с граничными случаями" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ Генерация тестов завершена!"`
            }
          ]
        },
        {
          id: 'integration',
          title: 'Примеры Интеграции',
          description: 'Интеграция Gemini CLI с другими инструментами и рабочими процессами',
          icon: CogIcon,
          color: 'from-purple-500 to-pink-600',
          examples: [
            {
              title: 'Рабочий Процесс GitHub Actions',
              description: 'CI/CD интеграция с GitHub Actions',
              language: 'yaml',
              code: `name: ИИ Ревью Кода
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Настроить Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Установить Gemini CLI
        run: npm install -g @google/generative-ai-cli

      - name: Настроить Gemini CLI
        run: |
          gemini config set api-key \\$\\{\\{ secrets.GEMINI_API_KEY \\}\\}
          gemini config set model gemini-pro

      - name: Получить измененные файлы
        id: changed-files
        run: |
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: ИИ Ревью Кода
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done

      - name: Комментировать PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));

            let comment = '## 🤖 ИИ Ревью Кода\\n\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \`### \${file}\\n\${content}\\n\\n\`;
            });

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });`
            },
            {
              title: 'Расширение VS Code',
              description: 'Интеграция пользовательского расширения VS Code',
              language: 'javascript',
              code: `// extension.js - Расширение VS Code для Gemini CLI
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // Команда: Объяснить Код
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      if (!text) {
        vscode.window.showErrorMessage('Пожалуйста, выберите код для объяснения');
        return;
      }

      // Показать прогресс
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Объяснение кода с помощью Gemini...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "Объясни этот код"\`,
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`Ошибка: \${error.message}\`);
                reject(error);
                return;
              }

              // Показать объяснение в новом документе
              vscode.workspace.openTextDocument({
                content: stdout,
                language: 'markdown'
              }).then(doc => {
                vscode.window.showTextDocument(doc);
                resolve();
              });
            });
        });
      });
    }
  );

  // Команда: Генерировать Тесты
  let testCommand = vscode.commands.registerCommand(
    'gemini.generateTests',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const filePath = editor.document.fileName;
      const testPath = filePath.replace(/\\.(js|ts)$/, '.test.$1');

      exec(\`gemini analyze "\${filePath}" --prompt "Сгенерировать модульные тесты" --output "\${testPath}"\`,
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(\`Ошибка: \${error.message}\`);
            return;
          }

          vscode.window.showInformationMessage(\`Тесты сгенерированы: \${testPath}\`);
          vscode.workspace.openTextDocument(testPath).then(doc => {
            vscode.window.showTextDocument(doc);
          });
        });
    }
  );

  context.subscriptions.push(explainCommand, testCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };`
            },
            {
              title: 'Интеграция Docker',
              description: 'Использование Gemini CLI в контейнерах',
              language: 'dockerfile',
              code: `# Dockerfile - Контейнер Gemini CLI
FROM node:18-alpine

# Установить Gemini CLI
RUN npm install -g @google/generative-ai-cli

# Установить рабочую директорию
WORKDIR /app

# Скопировать файлы проекта
COPY . .

# Установить переменные окружения
ENV GEMINI_API_KEY=""

# Создать скрипт анализа
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\
    chmod +x /usr/local/bin/analyze-project

# Команда по умолчанию
CMD ["analyze-project"]`
            }
          ]
        },
        {
          id: 'advanced',
          title: 'Продвинутое Использование',
          description: 'Сложные сценарии и продвинутые функции',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-500 to-red-600',
          examples: [
            {
              title: 'Разработка Пользовательских Инструментов',
              description: 'Создание пользовательских инструментов для конкретных задач',
              language: 'javascript',
              code: `// custom-tools.js - Определения пользовательских инструментов
const tools = {
  // Инструмент запросов к базе данных
  database_query: {
    name: 'database_query',
    description: 'Выполнение SQL запросов к базе данных',
    parameters: {
      query: { type: 'string', required: true },
      database: { type: 'string', default: 'main' }
    },
    execute: async ({ query, database }) => {
      const db = require('./db-connection');
      try {
        const result = await db.query(query, database);
        return JSON.stringify(result, null, 2);
      } catch (error) {
        return \`Ошибка: \${error.message}\`;
      }
    }
  },

  // Инструмент тестирования API
  api_test: {
    name: 'api_test',
    description: 'Тестировать API эндпоинты',
    parameters: {
      url: { type: 'string', required: true },
      method: { type: 'string', default: 'GET' },
      headers: { type: 'object', default: {} },
      body: { type: 'object', default: null }
    },
    execute: async ({ url, method, headers, body }) => {
      const fetch = require('node-fetch');
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.text();
        return \`Статус: \${response.status}\\nОтвет: \${data}\`;
      } catch (error) {
        return \`Ошибка: \${error.message}\`;
      }
    }
  },

  // Инструмент форматирования кода
  format_code: {
    name: 'format_code',
    description: 'Форматировать код с помощью prettier',
    parameters: {
      code: { type: 'string', required: true },
      language: { type: 'string', default: 'javascript' }
    },
    execute: async ({ code, language }) => {
      const prettier = require('prettier');
      try {
        const formatted = prettier.format(code, {
          parser: language === 'typescript' ? 'typescript' : 'babel',
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        return formatted;
      } catch (error) {
        return \`Ошибка: \${error.message}\`;
      }
    }
  }
};

// Зарегистрировать инструменты в Gemini CLI
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
            },
            {
              title: 'Пакетная Обработка',
              description: 'Обработка нескольких файлов или задач пакетами',
              language: 'bash',
              code: `#!/bin/bash
# batch-process.sh - Пакетная обработка с Gemini CLI

BATCH_SIZE=5
CONCURRENT_JOBS=3

# Функция для обработки одного файла
process_file() {
  local file=$1
  local task=$2

  echo "🔄 Обработка: $file"

  case $task in
    "translate")
      gemini ask "Перевести эти комментарии кода на английский" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "Оптимизировать этот код для производительности" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "Добавить полные JSDoc комментарии" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac

  echo "✅ Завершено: $file"
}

# Основная функция пакетной обработки
batch_process() {
  local task=$1
  shift
  local files=("$@")

  echo "🚀 Начало пакетной обработки: $task"
  echo "📁 Файлов для обработки: \${#files[@]}"

  # Обработка файлов пакетами
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")

    echo "📦 Обработка пакета \$((i/BATCH_SIZE + 1))"

    # Обработка пакета с ограниченной параллельностью
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done

    wait # Ожидание завершения текущего пакета
  done

  echo "🎉 Пакетная обработка завершена!"
}

# Примеры использования
case $1 in
  "translate")
    batch_process "translate" src/**/*.js
    ;;
  "optimize")
    batch_process "optimize" src/**/*.js
    ;;
  "document")
    batch_process "document" src/**/*.js
    ;;
  *)
    echo "Использование: $0 {translate|optimize|document}"
    exit 1
    ;;
esac`
            },
            {
              title: 'Система Плагинов',
              description: 'Создание расширяемой архитектуры плагинов',
              language: 'javascript',
              code: `// plugin-system.js - Пример системы плагинов
const { GeminiCLI } = require('@google/generative-ai-cli');

class PluginManager {
  constructor() {
    this.cli = new GeminiCLI();
    this.plugins = new Map();
  }

  // Регистрация плагина
  registerPlugin(plugin) {
    if (!plugin.name || !plugin.version) {
      throw new Error('Плагин должен иметь имя и версию');
    }

    this.plugins.set(plugin.name, plugin);

    // Регистрация команд плагина
    if (plugin.commands) {
      Object.entries(plugin.commands).forEach(([cmd, handler]) => {
        this.cli.registerCommand(\`\${plugin.name}:\${cmd}\`, handler);
      });
    }

    // Регистрация инструментов плагина
    if (plugin.tools) {
      plugin.tools.forEach(tool => {
        this.cli.registerTool(tool);
      });
    }

    console.log(\`✅ Плагин \${plugin.name} v\${plugin.version} зарегистрирован\`);
  }

  // Получение информации о плагине
  getPlugin(name) {
    return this.plugins.get(name);
  }

  // Список всех плагинов
  listPlugins() {
    return Array.from(this.plugins.values());
  }
}

// Пример плагина: Проверка качества кода
const codeQualityPlugin = {
  name: 'code-quality',
  version: '1.0.0',
  description: 'Плагин проверки качества кода',

  commands: {
    'check': async (args) => {
      const files = args.files || ['src/'];
      console.log(\`🔍 Проверка качества кода: \${files.join(', ')}\`);

      // Реализация логики проверки качества кода
      return 'Проверка качества кода завершена';
    },

    'metrics': async (args) => {
      console.log('📊 Генерация метрик кода...');

      // Реализация логики генерации метрик
      return {
        complexity: 'low',
        maintainability: 'high',
        coverage: '85%'
      };
    }
  },

  tools: [
    {
      name: 'complexity_analyzer',
      description: 'Анализ сложности кода',
      parameters: {
        file: { type: 'string', required: true }
      },
      execute: async ({ file }) => {
        // Реализация анализа сложности
        return \`Сложность файла \${file}: средняя\`;
      }
    }
  ]
};

// Пример использования
async function main() {
  const manager = new PluginManager();

  // Регистрация плагина
  manager.registerPlugin(codeQualityPlugin);

  // Использование команды плагина
  const result = await manager.cli.executeCommand('code-quality:check', {
    files: ['src/main.js', 'src/utils.js']
  });

  console.log('Результат проверки:', result);

  // Список всех плагинов
  console.log('Установленные плагины:', manager.listPlugins());
}

main().catch(console.error);`
            }
          ]
        }
      ]
    }
  }

  // 默认返回中文内容
  return {
    heroTitle: '代码示例',
    heroSubtitle: '实用的代码示例和模板，帮助您充分利用 Gemini CLI。从基本用法到高级自动化和集成模式。',
    categoriesTitle: '示例分类',
    categoriesSubtitle: '选择一个分类来探索相关示例',
    needMoreHelpTitle: '需要更多帮助？',
    needMoreHelpSubtitle: '探索更多资源和文档',
    apiReferenceText: 'API 参考',
    userGuidesText: '用户指南',
    backToDocsText: '返回文档',
    codeLabel: '代码',
    categories: []
  }
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.heroTitle}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {content.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.categoriesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.categoriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="space-y-16">
            {content.categories.map((category) => (
              <div key={category.id} id={category.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {category.examples.map((example, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {example.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{example.description}</p>
                      
                      <div className="relative">
                        <div className="flex items-center justify-between bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg">
                          <span className="text-sm font-medium">{example.language}</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                            {content.codeLabel}
                          </span>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm">
                          <code>{example.code}</code>
                        </pre>
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
              {content.needMoreHelpTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.needMoreHelpSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/api-reference`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {content.apiReferenceText}
              </Link>
              <Link
                href={`/${locale}/guides`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {content.userGuidesText}
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {content.backToDocsText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
