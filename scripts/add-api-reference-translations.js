const fs = require('fs');
const path = require('path');

// 添加API参考页面的其他语言翻译
function addAPIReferenceTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 添加API参考页面的其他语言翻译...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 定义其他语言的翻译
  const additionalTranslations = `    },
    de: {
      title: 'API-Referenz',
      subtitle: 'Vollständige Gemini CLI API-Dokumentation mit detaillierten Methodenbeschreibungen, Parametern und praktischen Beispielen.',
      sectionsTitle: 'API-Bereiche',
      sectionsSubtitle: 'Navigieren Sie durch verschiedene API-Kategorien',
      typesTitle: 'Häufige Typen',
      typesSubtitle: 'TypeScript-Schnittstellen und -Typen, die in der API verwendet werden',
      resourcesTitle: 'Verwandte Ressourcen',
      resourcesSubtitle: 'Entdecken Sie weitere Dokumentation und Beispiele',
      viewExamples: 'Beispiele Anzeigen',
      backToDocs: 'Zurück zur Dokumentation',
      apiSections: [
        {
          id: 'core-api',
          title: 'Kern-API',
          description: 'Haupt-API für die Interaktion mit Gemini-Modellen und die Verwaltung von Gesprächen',
          methods: [
            {
              name: 'chat()',
              description: 'Interaktive Chat-Sitzung mit Gemini starten',
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
              description: 'Eine Eingabeaufforderung senden und eine Antwort erhalten',
              signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
              example: \`const response = await cli.ask("Was ist maschinelles Lernen?", {
  maxTokens: 1000,
  temperature: 0.5
});\`
            }
          ]
        },
        {
          id: 'plugin-api',
          title: 'Plugin-API',
          description: 'API für die Entwicklung benutzerdefinierter Plugins und Erweiterungen',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'Neues Plugin registrieren',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`cli.registerPlugin({
  name: 'my-plugin',
  version: '1.0.0',
  commands: ['custom-command']
});\`
            }
          ]
        }
      ],
      commonTypes: [
        {
          name: 'ChatOptions',
          description: 'Chat-Sitzungs-Konfigurationsoptionen',
          properties: [
            { name: 'model', type: 'string', description: 'Das zu verwendende Gemini-Modell' },
            { name: 'temperature', type: 'number', description: 'Kreativität der Antwort (0-1)' },
            { name: 'maxTokens', type: 'number', description: 'Maximales Token-Limit' }
          ]
        }
      ],
      resources: [
        { title: 'Code-Beispiele', description: 'Praktische Beispiele und Vorlagen', href: '/docs/examples' },
        { title: 'Tutorials', description: 'Schritt-für-Schritt-Anleitungen und Tutorials', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'Quellcode und Beiträge', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]
    },
    ja: {
      title: 'API リファレンス',
      subtitle: '詳細なメソッドの説明、パラメータ、実用的な例を含む完全なGemini CLI APIドキュメント。',
      sectionsTitle: 'API セクション',
      sectionsSubtitle: '異なるAPIカテゴリをナビゲート',
      typesTitle: '共通タイプ',
      typesSubtitle: 'APIで使用されるTypeScriptインターフェースとタイプ',
      resourcesTitle: '関連リソース',
      resourcesSubtitle: 'より多くのドキュメントと例を探索',
      viewExamples: '例を見る',
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
              description: '新しいプラグインを登録',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`cli.registerPlugin({
  name: 'my-plugin',
  version: '1.0.0',
  commands: ['custom-command']
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
        }
      ],
      resources: [
        { title: 'コード例', description: '実用的な例とテンプレート', href: '/docs/examples' },
        { title: 'チュートリアル', description: 'ステップバイステップガイドとチュートリアル', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'ソースコードと貢献', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]
    },
    ko: {
      title: 'API 참조',
      subtitle: '상세한 메서드 설명, 매개변수 및 실용적인 예제가 포함된 완전한 Gemini CLI API 문서.',
      sectionsTitle: 'API 섹션',
      sectionsSubtitle: '다양한 API 카테고리 탐색',
      typesTitle: '공통 타입',
      typesSubtitle: 'API에서 사용되는 TypeScript 인터페이스 및 타입',
      resourcesTitle: '관련 리소스',
      resourcesSubtitle: '더 많은 문서와 예제 탐색',
      viewExamples: '예제 보기',
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
              description: '새 플러그인 등록',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`cli.registerPlugin({
  name: 'my-plugin',
  version: '1.0.0',
  commands: ['custom-command']
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
        }
      ],
      resources: [
        { title: '코드 예제', description: '실용적인 예제와 템플릿', href: '/docs/examples' },
        { title: '튜토리얼', description: '단계별 가이드와 튜토리얼', href: '/docs/tutorials' },
        { title: 'GitHub', description: '소스 코드와 기여', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]
    },
    es: {
      title: 'Referencia API',
      subtitle: 'Documentación completa de la API de Gemini CLI con descripciones detalladas de métodos, parámetros y ejemplos prácticos.',
      sectionsTitle: 'Secciones API',
      sectionsSubtitle: 'Navegar por diferentes categorías de API',
      typesTitle: 'Tipos Comunes',
      typesSubtitle: 'Interfaces y tipos TypeScript utilizados en la API',
      resourcesTitle: 'Recursos Relacionados',
      resourcesSubtitle: 'Explorar más documentación y ejemplos',
      viewExamples: 'Ver Ejemplos',
      backToDocs: 'Volver a la Documentación',
      apiSections: [
        {
          id: 'core-api',
          title: 'API Principal',
          description: 'API principal para interactuar con modelos Gemini y gestionar conversaciones',
          methods: [
            {
              name: 'chat()',
              description: 'Iniciar sesión de chat interactiva con Gemini',
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
              description: 'Enviar un prompt y recibir respuesta',
              signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
              example: \`const response = await cli.ask("¿Qué es el aprendizaje automático?", {
  maxTokens: 1000,
  temperature: 0.5
});\`
            }
          ]
        },
        {
          id: 'plugin-api',
          title: 'API de Plugin',
          description: 'API para desarrollar plugins y extensiones personalizados',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'Registrar nuevo plugin',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`cli.registerPlugin({
  name: 'my-plugin',
  version: '1.0.0',
  commands: ['custom-command']
});\`
            }
          ]
        }
      ],
      commonTypes: [
        {
          name: 'ChatOptions',
          description: 'Opciones de configuración de sesión de chat',
          properties: [
            { name: 'model', type: 'string', description: 'El modelo Gemini a utilizar' },
            { name: 'temperature', type: 'number', description: 'Creatividad de la respuesta (0-1)' },
            { name: 'maxTokens', type: 'number', description: 'Límite máximo de tokens' }
          ]
        }
      ],
      resources: [
        { title: 'Ejemplos de Código', description: 'Ejemplos prácticos y plantillas', href: '/docs/examples' },
        { title: 'Tutoriales', description: 'Guías paso a paso y tutoriales', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'Código fuente y contribuciones', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]
    },
    ru: {
      title: 'Справочник API',
      subtitle: 'Полная документация API Gemini CLI с подробными описаниями методов, параметрами и практическими примерами.',
      sectionsTitle: 'Разделы API',
      sectionsSubtitle: 'Навигация по различным категориям API',
      typesTitle: 'Общие Типы',
      typesSubtitle: 'TypeScript интерфейсы и типы, используемые в API',
      resourcesTitle: 'Связанные Ресурсы',
      resourcesSubtitle: 'Изучите больше документации и примеров',
      viewExamples: 'Посмотреть Примеры',
      backToDocs: 'Вернуться к Документации',
      apiSections: [
        {
          id: 'core-api',
          title: 'Основной API',
          description: 'Основной API для взаимодействия с моделями Gemini и управления разговорами',
          methods: [
            {
              name: 'chat()',
              description: 'Начать интерактивную сессию чата с Gemini',
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
              description: 'Отправить запрос и получить ответ',
              signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
              example: \`const response = await cli.ask("Что такое машинное обучение?", {
  maxTokens: 1000,
  temperature: 0.5
});\`
            }
          ]
        },
        {
          id: 'plugin-api',
          title: 'API Плагинов',
          description: 'API для разработки пользовательских плагинов и расширений',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'Зарегистрировать новый плагин',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`cli.registerPlugin({
  name: 'my-plugin',
  version: '1.0.0',
  commands: ['custom-command']
});\`
            }
          ]
        }
      ],
      commonTypes: [
        {
          name: 'ChatOptions',
          description: 'Опции конфигурации сессии чата',
          properties: [
            { name: 'model', type: 'string', description: 'Модель Gemini для использования' },
            { name: 'temperature', type: 'number', description: 'Креативность ответа (0-1)' },
            { name: 'maxTokens', type: 'number', description: 'Максимальный лимит токенов' }
          ]
        }
      ],
      resources: [
        { title: 'Примеры Кода', description: 'Практические примеры и шаблоны', href: '/docs/examples' },
        { title: 'Учебники', description: 'Пошаговые руководства и учебники', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'Исходный код и вклады', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]`;

  // 在法语翻译后添加其他语言翻译
  content = content.replace(
    '      ]\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.hi',
    `      ]\n${additionalTranslations}\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.hi`
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功添加了德语、日语、韩语、西班牙语和俄语翻译');
  
  return true;
}

// 执行添加翻译
if (require.main === module) {
  try {
    addAPIReferenceTranslations();
    console.log('\n🎉 API参考页面翻译添加完成！');
  } catch (error) {
    console.error('❌ 添加翻译过程中发生错误:', error);
  }
}

module.exports = { addAPIReferenceTranslations };
