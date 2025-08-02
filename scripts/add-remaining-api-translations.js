const fs = require('fs');
const path = require('path');

// 添加剩余语言的API参考翻译
function addRemainingAPITranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 添加剩余语言的API参考翻译...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 日语翻译
  const japaneseTranslation = `    },
    ja: {
      title: 'API リファレンス',
      subtitle: '詳細なメソッドの説明、パラメータ、実用的な例を含む完全なGemini CLI APIドキュメント。',
      sectionsTitle: 'API セクション',
      sectionsSubtitle: '異なるAPIカテゴリをナビゲート',
      typesTitle: '共通タイプ',
      typesSubtitle: 'APIで使用されるTypeScriptインターフェースとタイプ',
      resourcesTitle: '関連リソース',
      resourcesSubtitle: 'より多くのドキュメントと例を探索',
      backToDocs: 'ドキュメントに戻る',
      apiSections: [
        {
          id: 'core-api',
          title: 'コア API',
          description: 'Geminiモデルとの相互作用と会話管理のためのメインAPI',
          methods: [
            {
              name: 'chat()',
              description: 'Geminiとのインタラクティブチャットセッションを開始',
              signature: 'chat(options?: ChatOptions): Promise<ChatSession>',
              example: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`
            },
            {
              name: 'ask()',
              description: 'プロンプトを送信して応答を受信',
              signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
              example: \`const response = await cli.ask("機械学習とは何ですか？", {
  maxTokens: 1000,
  temperature: 0.5
});\`
            },
            {
              name: 'analyze()',
              description: 'AIアシスタンスでファイルやコードを分析',
              signature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
              example: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`
            }
          ]
        },
        {
          id: 'plugin-api',
          title: 'プラグイン API',
          description: 'カスタムプラグインと拡張機能を開発するためのAPI',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'CLIに新しいプラグインを登録',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // プラグインロジックここ
      return 'プラグインが正常に実行されました';
    }
  }
};

cli.registerPlugin(myPlugin);\`
            },
            {
              name: 'createTool()',
              description: 'AI用のカスタムツールを作成',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '指定された場所の現在の天気を取得',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 天気データを取得
    return \\\`\\\${location}の天気：晴れ、25°C\\\`;
  }
});\`
            }
          ]
        },
        {
          id: 'config-api',
          title: '設定 API',
          description: 'CLI設定と設定を管理するためのAPI',
          methods: [
            {
              name: 'getConfig()',
              description: '現在の設定を取得',
              signature: 'getConfig(key?: string): any',
              example: \`// すべての設定を取得
const config = cli.getConfig();

// 特定の設定を取得
const apiKey = cli.getConfig('apiKey');\`
            },
            {
              name: 'setConfig()',
              description: '設定値を設定',
              signature: 'setConfig(key: string, value: any): void',
              example: \`cli.setConfig('temperature', 0.8);
cli.setConfig('model', 'gemini-pro');\`
            }
          ]
        },
        {
          id: 'tools-api',
          title: 'ツール API',
          description: '組み込みツールを管理・実行するためのAPI',
          methods: [
            {
              name: 'listTools()',
              description: '利用可能なすべてのツールをリスト',
              signature: 'listTools(): Tool[]',
              example: \`const tools = cli.listTools();
console.log('利用可能なツール:', tools.map(t => t.name));\`
            },
            {
              name: 'executeTool()',
              description: '指定されたツールを実行',
              signature: 'executeTool(name: string, params: any): Promise<any>',
              example: \`const result = await cli.executeTool('file_reader', {
  path: './README.md'
});\`
            }
          ]
        }
      ],
      commonTypes: [
        {
          name: 'ChatOptions',
          description: 'チャットセッション設定オプション',
          properties: [
            { name: 'model', type: 'string', description: '使用するGeminiモデル' },
            { name: 'temperature', type: 'number', description: '応答の創造性 (0-1)' },
            { name: 'maxTokens', type: 'number', description: '最大トークン制限' }
          ]
        },
        {
          name: 'AskOptions',
          description: '単一クエリ設定オプション',
          properties: [
            { name: 'maxTokens', type: 'number', description: '最大トークン数' },
            { name: 'temperature', type: 'number', description: '創造性レベル' },
            { name: 'stream', type: 'boolean', description: 'ストリーミング応答かどうか' }
          ]
        },
        {
          name: 'AnalyzeOptions',
          description: 'コード分析設定オプション',
          properties: [
            { name: 'type', type: 'string', description: '分析タイプ (code-review, security, performance)' },
            { name: 'includeMetrics', type: 'boolean', description: 'コードメトリクスを含むかどうか' },
            { name: 'language', type: 'string', description: 'プログラミング言語' }
          ]
        }
      ],
      resources: [
        { title: 'コード例', description: '実用的な例とテンプレート', href: '/docs/examples' },
        { title: 'チュートリアル', description: 'ステップバイステップガイドとチュートリアル', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'ソースコードと貢献', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]`;

  // 韩语翻译
  const koreanTranslation = `    },
    ko: {
      title: 'API 참조',
      subtitle: '상세한 메서드 설명, 매개변수 및 실용적인 예제가 포함된 완전한 Gemini CLI API 문서.',
      sectionsTitle: 'API 섹션',
      sectionsSubtitle: '다양한 API 카테고리 탐색',
      typesTitle: '공통 타입',
      typesSubtitle: 'API에서 사용되는 TypeScript 인터페이스 및 타입',
      resourcesTitle: '관련 리소스',
      resourcesSubtitle: '더 많은 문서와 예제 탐색',
      backToDocs: '문서로 돌아가기',
      apiSections: [
        {
          id: 'core-api',
          title: '핵심 API',
          description: 'Gemini 모델과 상호작용하고 대화를 관리하기 위한 주요 API',
          methods: [
            {
              name: 'chat()',
              description: 'Gemini와 대화형 채팅 세션 시작',
              signature: 'chat(options?: ChatOptions): Promise<ChatSession>',
              example: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`
            },
            {
              name: 'ask()',
              description: '프롬프트를 보내고 응답 받기',
              signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
              example: \`const response = await cli.ask("머신러닝이란 무엇인가요?", {
  maxTokens: 1000,
  temperature: 0.5
});\`
            },
            {
              name: 'analyze()',
              description: 'AI 지원으로 파일이나 코드 분석',
              signature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
              example: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`
            }
          ]
        },
        {
          id: 'plugin-api',
          title: '플러그인 API',
          description: '사용자 정의 플러그인 및 확장 개발을 위한 API',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'CLI에 새 플러그인 등록',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // 플러그인 로직 여기
      return '플러그인이 성공적으로 실행됨';
    }
  }
};

cli.registerPlugin(myPlugin);\`
            },
            {
              name: 'createTool()',
              description: 'AI용 사용자 정의 도구 생성',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '지정된 위치의 현재 날씨 가져오기',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 날씨 데이터 가져오기
    return \\\`\\\${location}의 날씨: 맑음, 25°C\\\`;
  }
});\`
            }
          ]
        },
        {
          id: 'config-api',
          title: '구성 API',
          description: 'CLI 구성 및 설정 관리를 위한 API',
          methods: [
            {
              name: 'getConfig()',
              description: '현재 구성 설정 가져오기',
              signature: 'getConfig(key?: string): any',
              example: \`// 모든 구성 가져오기
const config = cli.getConfig();

// 특정 구성 가져오기
const apiKey = cli.getConfig('apiKey');\`
            },
            {
              name: 'setConfig()',
              description: '구성 값 설정',
              signature: 'setConfig(key: string, value: any): void',
              example: \`cli.setConfig('temperature', 0.8);
cli.setConfig('model', 'gemini-pro');\`
            }
          ]
        },
        {
          id: 'tools-api',
          title: '도구 API',
          description: '내장 도구 관리 및 실행을 위한 API',
          methods: [
            {
              name: 'listTools()',
              description: '사용 가능한 모든 도구 나열',
              signature: 'listTools(): Tool[]',
              example: \`const tools = cli.listTools();
console.log('사용 가능한 도구:', tools.map(t => t.name));\`
            },
            {
              name: 'executeTool()',
              description: '지정된 도구 실행',
              signature: 'executeTool(name: string, params: any): Promise<any>',
              example: \`const result = await cli.executeTool('file_reader', {
  path: './README.md'
});\`
            }
          ]
        }
      ],
      commonTypes: [
        {
          name: 'ChatOptions',
          description: '채팅 세션 구성 옵션',
          properties: [
            { name: 'model', type: 'string', description: '사용할 Gemini 모델' },
            { name: 'temperature', type: 'number', description: '응답의 창의성 (0-1)' },
            { name: 'maxTokens', type: 'number', description: '최대 토큰 제한' }
          ]
        },
        {
          name: 'AskOptions',
          description: '단일 쿼리 구성 옵션',
          properties: [
            { name: 'maxTokens', type: 'number', description: '최대 토큰 수' },
            { name: 'temperature', type: 'number', description: '창의성 수준' },
            { name: 'stream', type: 'boolean', description: '스트리밍 응답 여부' }
          ]
        },
        {
          name: 'AnalyzeOptions',
          description: '코드 분석 구성 옵션',
          properties: [
            { name: 'type', type: 'string', description: '분석 유형 (code-review, security, performance)' },
            { name: 'includeMetrics', type: 'boolean', description: '코드 메트릭 포함 여부' },
            { name: 'language', type: 'string', description: '프로그래밍 언어' }
          ]
        }
      ],
      resources: [
        { title: '코드 예제', description: '실용적인 예제와 템플릿', href: '/docs/examples' },
        { title: '튜토리얼', description: '단계별 가이드와 튜토리얼', href: '/docs/tutorials' },
        { title: 'GitHub', description: '소스 코드와 기여', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]`;

  // 在德语翻译后添加日语和韩语翻译
  content = content.replace(
    '      ]\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh',
    `      ]\n    }${japaneseTranslation}\n    }${koreanTranslation}\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh`
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功添加了日语和韩语的完整翻译');
  
  return true;
}

// 执行添加翻译
if (require.main === module) {
  try {
    addRemainingAPITranslations();
    console.log('\n🎉 日语和韩语翻译添加完成！');
  } catch (error) {
    console.error('❌ 添加翻译过程中发生错误:', error);
  }
}

module.exports = { addRemainingAPITranslations };
