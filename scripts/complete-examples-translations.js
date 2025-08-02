const fs = require('fs');
const path = require('path');

// 为examples页面补全所有语言的集成示例和高级用法翻译
function completeExamplesTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'examples', 'page.tsx');
  
  console.log('🔧 补全examples页面的集成示例和高级用法翻译...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Hindi - 添加集成示例和高级用法
  const hindiIntegrationAndAdvanced = `            },
            {
              title: 'दस्तावेज़ जेनरेटर',
              description: 'कोड से दस्तावेज़ीकरण उत्पन्न करें',
              language: 'bash',
              code: \`#!/bin/bash
# generate-docs.sh - स्वचालित दस्तावेज़ीकरण

echo "📚 दस्तावेज़ीकरण उत्पन्न कर रहे हैं..."

# API दस्तावेज़ीकरण उत्पन्न करें
gemini analyze src/api/*.js \\\\
  --prompt "उदाहरणों के साथ व्यापक API दस्तावेज़ीकरण उत्पन्न करें" \\\\
  --output docs/api.md

# README उत्पन्न करें
gemini ask "इस प्रोजेक्ट के लिए कोडबेस के आधार पर README.md बनाएं" \\\\
  --context src/ \\\\
  --output README.md

# चेंजलॉग उत्पन्न करें
git log --oneline --since="1 month ago" | \\\\
  gemini ask "इन git कमिट्स को चेंजलॉग में बदलें" \\\\
  --output CHANGELOG.md

echo "✅ दस्तावेज़ीकरण पूर्ण!"\`
            },
            {
              title: 'टेस्ट जेनरेटर',
              description: 'स्वचालित रूप से यूनिट टेस्ट उत्पन्न करें',
              language: 'bash',
              code: \`#!/bin/bash
# generate-tests.sh - स्वचालित यूनिट टेस्ट

SOURCE_DIR="src"
TEST_DIR="tests"

echo "🧪 यूनिट टेस्ट उत्पन्न कर रहे हैं..."

find $SOURCE_DIR -name "*.js" -o -name "*.ts" | while read file; do
  # सापेक्ष पथ प्राप्त करें
  rel_path=\\$\\{file#\\$SOURCE_DIR/\\}
  test_file="\\$TEST_DIR/\\$\\{rel_path%.*\\}.test.\\$\\{file##*.\\}"

  echo "📝 इस फ़ाइल के लिए टेस्ट उत्पन्न कर रहे हैं: $file"

  gemini analyze "$file" \\\\
    --prompt "सीमा मामलों के साथ व्यापक यूनिट टेस्ट उत्पन्न करें" \\\\
    --template jest \\\\
    --output "$test_file"
done

echo "✅ टेस्ट उत्पन्न पूर्ण!"\`
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
              code: \`name: AI कोड समीक्षा
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
          echo "files=\\$(git diff --name-only HEAD~1 | tr '\\\\n' ' ')" >> $GITHUB_OUTPUT
      
      - name: AI कोड समीक्षा
        run: |
          for file in \\$\\{\\{ steps.changed-files.outputs.files \\}\\}; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              gemini analyze "$file" \\\\
                --type code-review \\\\
                --output "review-$file.md"
            fi
          done
      
      - name: PR पर टिप्पणी करें
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const reviews = fs.readdirSync('.').filter(f => f.startsWith('review-'));
            
            let comment = '## 🤖 AI कोड समीक्षा\\\\n\\\\n';
            reviews.forEach(file => {
              const content = fs.readFileSync(file, 'utf8');
              comment += \\`### \\$\\{file\\}\\\\n\\$\\{content\\}\\\\n\\\\n\\`;
            });
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });\`
            },
            {
              title: 'VS Code एक्सटेंशन',
              description: 'कस्टम VS Code एक्सटेंशन एकीकरण',
              language: 'javascript',
              code: \`// extension.js - Gemini CLI के लिए VS Code एक्सटेंशन
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
          exec(\\`echo "\\$\\{text\\}" | gemini ask "इस कोड को समझाएं"\\`, 
            (error, stdout, stderr) => {
              if (error) {
                vscode.window.showErrorMessage(\\`त्रुटि: \\$\\{error.message\\}\\`);
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

  // कमांड: टेस्ट जेनरेट करें
  let testCommand = vscode.commands.registerCommand(
    'gemini.generateTests',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const filePath = editor.document.fileName;
      const testPath = filePath.replace(/\\\\.(js|ts)$/, '.test.$1');

      exec(\\`gemini analyze "\\$\\{filePath\\}" --prompt "यूनिट टेस्ट जेनरेट करें" --output "\\$\\{testPath\\}"\\`,
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(\\`त्रुटि: \\$\\{error.message\\}\\`);
            return;
          }
          
          vscode.window.showInformationMessage(\\`टेस्ट जेनरेट किए गए: \\$\\{testPath\\}\\`);
          vscode.workspace.openTextDocument(testPath).then(doc => {
            vscode.window.showTextDocument(doc);
          });
        });
    }
  );

  context.subscriptions.push(explainCommand, testCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };\`
            },
            {
              title: 'Docker एकीकरण',
              description: 'कंटेनर में Gemini CLI का उपयोग',
              language: 'dockerfile',
              code: \`# Dockerfile - Gemini CLI कंटेनर
FROM node:18-alpine

# Gemini CLI इंस्टॉल करें
RUN npm install -g @google/generative-ai-cli

# कार्य निर्देशिका सेट करें
WORKDIR /app

# प्रोजेक्ट फ़ाइलें कॉपी करें
COPY . .

# पर्यावरण चर सेट करें
ENV GEMINI_API_KEY=""

# विश्लेषण स्क्रिप्ट बनाएं
RUN echo '#!/bin/sh' > /usr/local/bin/analyze-project && \\\\
    echo 'gemini analyze src/ --output analysis.md' >> /usr/local/bin/analyze-project && \\\\
    chmod +x /usr/local/bin/analyze-project

# डिफ़ॉल्ट कमांड
CMD ["analyze-project"]\`
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
              code: \`// custom-tools.js - कस्टम टूल परिभाषाएं
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
        return \\`त्रुटि: \\$\\{error.message\\}\\`;
      }
    }
  },

  // API परीक्षण टूल
  api_test: {
    name: 'api_test',
    description: 'API एंडपॉइंट्स का परीक्षण करें',
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
        return \\`स्थिति: \\$\\{response.status\\}\\\\nप्रतिक्रिया: \\$\\{data\\}\\`;
      } catch (error) {
        return \\`त्रुटि: \\$\\{error.message\\}\\`;
      }
    }
  },

  // कोड फॉर्मेटर टूल
  format_code: {
    name: 'format_code',
    description: 'prettier का उपयोग करके कोड फॉर्मेट करें',
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
        return \\`त्रुटि: \\$\\{error.message\\}\\`;
      }
    }
  }
};

// Gemini CLI के साथ टूल्स रजिस्टर करें
Object.values(tools).forEach(tool => {
  process.env.GEMINI_TOOLS = JSON.stringify([
    ...(JSON.parse(process.env.GEMINI_TOOLS || '[]')),
    tool
  ]);
});

module.exports = tools;\`
            }
          ]
        }`;

  // 在Hindi基础使用后添加完整的集成和高级用法
  content = content.replace(
    /(\s+)(\}\s+\]\s+\}\s+\}\s+\/\/ French translation)/,
    `$1${hindiIntegrationAndAdvanced}$2`
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功补全了Hindi的集成示例和高级用法翻译');
  
  return true;
}

// 执行补全翻译
if (require.main === module) {
  try {
    completeExamplesTranslations();
    console.log('\n🎉 Hindi语言的examples完整翻译补全完成！');
  } catch (error) {
    console.error('❌ 补全翻译过程中发生错误:', error);
  }
}

module.exports = { completeExamplesTranslations };
