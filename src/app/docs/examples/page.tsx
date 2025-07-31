import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CodeBracketIcon, 
  DocumentTextIcon,
  CommandLineIcon,
  CogIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Code Examples - Gemini CLI Documentation',
  description: 'Practical code examples and templates for Gemini CLI including basic usage, advanced features, automation scripts, and integration patterns.',
  keywords: 'Gemini CLI examples, code samples, templates, automation, integration, scripts',
  openGraph: {
    title: 'Gemini CLI Code Examples',
    description: 'Practical code examples and templates for developers',
    type: 'article',
  },
}

const exampleCategories = [
  {
    id: 'basic-usage',
    title: 'Basic Usage',
    description: 'Simple examples to get started with Gemini CLI',
    icon: RocketLaunchIcon,
    color: 'from-green-500 to-emerald-600',
    examples: [
      {
        title: 'Simple Chat',
        description: 'Start a basic conversation with Gemini',
        language: 'bash',
        code: `# Start interactive chat
gemini chat

# Ask a single question
gemini ask "What is machine learning?"

# Ask with specific model
gemini ask "Explain quantum computing" --model gemini-pro`
      },
      {
        title: 'File Analysis',
        description: 'Analyze code files with AI assistance',
        language: 'bash',
        code: `# Analyze a single file
gemini analyze src/main.js

# Analyze multiple files
gemini analyze src/*.js --type code-review

# Get code suggestions
gemini analyze package.json --suggest-improvements`
      },
      {
        title: 'Configuration',
        description: 'Basic configuration management',
        language: 'bash',
        code: `# View current configuration
gemini config list

# Set default model
gemini config set model gemini-pro

# Set temperature
gemini config set temperature 0.7

# Reset to defaults
gemini config reset`
      }
    ]
  },
  {
    id: 'automation',
    title: 'Automation Scripts',
    description: 'Scripts for automating development tasks',
    icon: CommandLineIcon,
    color: 'from-blue-500 to-indigo-600',
    examples: [
      {
        title: 'Code Review Script',
        description: 'Automated code review for pull requests',
        language: 'bash',
        code: `#!/bin/bash
# code-review.sh - Automated code review script

# Get changed files
CHANGED_FILES=\$(git diff --name-only HEAD~1)

echo "🔍 Starting automated code review..."

for file in $CHANGED_FILES; do
  if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
    echo "📝 Reviewing: $file"
    
    # Analyze the file
    gemini analyze "$file" \\
      --type code-review \\
      --prompt "Review this code for bugs, performance issues, and best practices" \\
      --output review-$file.md
  fi
done

echo "✅ Code review complete! Check review-*.md files"`
      },
      {
        title: 'Documentation Generator',
        description: 'Generate documentation from code',
        language: 'bash',
        code: `#!/bin/bash
# generate-docs.sh - Auto-generate documentation

echo "📚 Generating documentation..."

# Generate API docs
gemini analyze src/api/*.js \\
  --prompt "Generate comprehensive API documentation with examples" \\
  --output docs/api.md

# Generate README
gemini ask "Create a README.md for this project based on the codebase" \\
  --context src/ \\
  --output README.md

# Generate changelog
git log --oneline --since="1 month ago" | \\
  gemini ask "Convert these git commits into a changelog" \\
  --output CHANGELOG.md

echo "✅ Documentation generated!"`
      },
      {
        title: 'Test Generator',
        description: 'Generate unit tests automatically',
        language: 'bash',
        code: `#!/bin/bash
# generate-tests.sh - Auto-generate unit tests

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 Generating unit tests..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # Get relative path
  rel_path=\$\{file#\$SOURCE_DIR/\}
  test_file="\$TEST_DIR/\$\{rel_path%.*\}.test.\$\{file##*.\}"

  echo "📝 Generating tests for: $file"

  gemini analyze "$file" \\
    --prompt "Generate comprehensive unit tests with edge cases" \\
    --template jest \\
    --output "$test_file"
done

echo "✅ Test generation complete!"`
      }
    ]
  },
  {
    id: 'integration',
    title: 'Integration Examples',
    description: 'Integrate Gemini CLI with other tools and workflows',
    icon: CogIcon,
    color: 'from-purple-500 to-pink-600',
    examples: [
      {
        title: 'GitHub Actions Workflow',
        description: 'CI/CD integration with GitHub Actions',
        language: 'yaml',
        code: `name: AI Code Review
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
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Gemini CLI
        run: npm install -g @google/generative-ai-cli
      
      - name: Configure Gemini CLI
        run: |
          gemini config set api-key \$\{\{ secrets.GEMINI_API_KEY \}\}
          gemini config set model gemini-pro
      
      - name: Get changed files
        id: changed-files
        run: |
          echo "files=\$(git diff --name-only HEAD~1 | tr '\\n' ' ')" >> $GITHUB_OUTPUT
      
      - name: AI Code Review
        run: |
          for file in \$\{\{ steps.changed-files.outputs.files \}\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\
                --type code-review \\
                --output "review-$file.md"
            fi
          done
      
      - name: Comment PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));
            
            let comment = '## 🤖 AI Code Review\\n\\n';
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
        title: 'VS Code Extension',
        description: 'Custom VS Code extension integration',
        language: 'javascript',
        code: `// extension.js - VS Code extension for Gemini CLI
const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  // Command: Explain Code
  let explainCommand = vscode.commands.registerCommand(
    'gemini.explainCode', 
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);
      
      if (!text) {
        vscode.window.showErrorMessage('Please select code to explain');
        return;
      }

      // Show progress
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Explaining code with Gemini...",
        cancellable: false
      }, async () => {
        return new Promise((resolve, reject) => {
          exec(\`echo "\${text}" | gemini ask "Explain this code"\`, 
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\`Error: \${error.message}\`);
                reject(error);
                return;
              }
              
              // Show explanation in new document
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

  // Command: Generate Tests
  let testCommand = vscode.commands.registerCommand(
    'gemini.generateTests',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const filePath = editor.document.fileName;
      const testPath = filePath.replace(/\\.(js|ts)$/, '.test.$1');

      exec(\`gemini analyze "\${filePath}" --prompt "Generate unit tests" --output "\${testPath}"\`,
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(\`Error: \${error.message}\`);
            return;
          }
          
          vscode.window.showInformationMessage(\`Tests generated: \${testPath}\`);
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
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Usage',
    description: 'Complex scenarios and advanced features',
    icon: WrenchScrewdriverIcon,
    color: 'from-orange-500 to-red-600',
    examples: [
      {
        title: 'Custom Tool Development',
        description: 'Create custom tools for specific tasks',
        language: 'javascript',
        code: `// custom-tools.js - Custom tool definitions
const tools = {
  // Database query tool
  database_query: {
    name: 'database_query',
    description: 'Execute SQL queries on the database',
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

  // API testing tool
  api_test: {
    name: 'api_test',
    description: 'Test API endpoints',
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
        return \`Status: \${response.status}\\nResponse: \${data}\`;
      } catch (error) {
        return \`Error: \${error.message}\`;
      }
    }
  },

  // Code formatter tool
  format_code: {
    name: 'format_code',
    description: 'Format code using prettier',
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

// Register tools with Gemini CLI
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;`
      },
      {
        title: 'Batch Processing',
        description: 'Process multiple files or tasks in batch',
        language: 'bash',
        code: `#!/bin/bash
# batch-process.sh - Batch processing with Gemini CLI

BATCH_SIZE=5
CONCURRENT_JOBS=3

# Function to process a single file
process_file() {
  local file=$1
  local task=$2
  
  echo "🔄 Processing: $file"
  
  case $task in
    "translate")
      gemini ask "Translate this code comments to English" \\
        --file "$file" \\
        --output "\${file%.js}.en.js"
      ;;
    "optimize")
      gemini analyze "$file" \\
        --prompt "Optimize this code for performance" \\
        --output "\${file%.js}.optimized.js"
      ;;
    "document")
      gemini analyze "$file" \\
        --prompt "Add comprehensive JSDoc comments" \\
        --output "\${file%.js}.documented.js"
      ;;
  esac
  
  echo "✅ Completed: $file"
}

# Main batch processing function
batch_process() {
  local task=$1
  shift
  local files=("$@")
  
  echo "🚀 Starting batch processing: $task"
  echo "📁 Files to process: \${#files[@]}"

  # Process files in batches
  for ((i=0; i<\${#files[@]}; i+=BATCH_SIZE)); do
    batch=("\${files[@]:i:BATCH_SIZE}")
    
    echo "📦 Processing batch \$((i/BATCH_SIZE + 1))"
    
    # Process batch with limited concurrency
    for file in "\${batch[@]}"; do
      ((\$(jobs -r | wc -l) >= CONCURRENT_JOBS)) && wait
      process_file "$file" "$task" &
    done
    
    wait # Wait for current batch to complete
  done
  
  echo "🎉 Batch processing complete!"
}

# Usage examples
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

export default function ExamplesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Code Examples
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Practical code examples and templates to help you get the most out of Gemini CLI. 
              From basic usage to advanced automation and integration patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Example Categories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose a category to explore relevant examples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exampleCategories.map((category) => (
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
            {exampleCategories.map((category) => (
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
                            Code
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
              Need More Help?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore additional resources and documentation
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/api-reference"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                API Reference
              </Link>
              <Link
                href="/guides"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                User Guides
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
