const fs = require('fs');
const path = require('path');

// 添加所有语言的API参考翻译
function addAPIReferenceAllLanguages() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 添加所有语言的API参考翻译...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 法语翻译
  const frenchTranslation = `    },
    fr: {
      title: 'Référence API',
      subtitle: 'Documentation complète de l\\'API Gemini CLI avec descriptions détaillées des méthodes, paramètres et exemples pratiques.',
      sectionsTitle: 'Sections API',
      sectionsSubtitle: 'Naviguer dans les différentes catégories d\\'API',
      coreApiTitle: 'API Principale',
      coreApiDesc: 'API principale pour interagir avec les modèles Gemini et gérer les conversations',
      pluginApiTitle: 'API Plugin',
      pluginApiDesc: 'API pour développer des plugins et extensions personnalisés',
      configApiTitle: 'API de Configuration',
      configApiDesc: 'API pour gérer la configuration et les paramètres CLI',
      toolsApiTitle: 'API des Outils',
      toolsApiDesc: 'API pour gérer et exécuter les outils intégrés',
      chatMethodTitle: 'chat()',
      chatMethodDesc: 'Démarrer une session de chat interactive avec Gemini',
      chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
      chatExample: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Envoyer une invite et recevoir une réponse',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: \`const response = await cli.ask("Qu'est-ce que l'apprentissage automatique ?", {
  maxTokens: 1000,
  temperature: 0.5
});\`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Analyser des fichiers ou du code avec l\\'assistance IA',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Enregistrer un nouveau plugin avec le CLI',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Logique du plugin ici
      return 'Plugin exécuté avec succès';
    }
  }
};

cli.registerPlugin(myPlugin);\`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Créer un outil personnalisé pour l\\'IA',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Obtenir la météo actuelle pour un lieu',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Récupérer les données météo
    return \\\`Météo à \\\${location}: Ensoleillé, 25°C\\\`;
  }
});\`,
      signatureLabel: 'Signature :',
      exampleLabel: 'Exemple :'
    },
    de: {
      title: 'API-Referenz',
      subtitle: 'Vollständige Gemini CLI API-Dokumentation mit detaillierten Methodenbeschreibungen, Parametern und praktischen Beispielen.',
      sectionsTitle: 'API-Bereiche',
      sectionsSubtitle: 'Navigieren Sie durch verschiedene API-Kategorien',
      coreApiTitle: 'Kern-API',
      coreApiDesc: 'Haupt-API für die Interaktion mit Gemini-Modellen und die Verwaltung von Gesprächen',
      pluginApiTitle: 'Plugin-API',
      pluginApiDesc: 'API für die Entwicklung benutzerdefinierter Plugins und Erweiterungen',
      configApiTitle: 'Konfigurations-API',
      configApiDesc: 'API zur Verwaltung von CLI-Konfiguration und -Einstellungen',
      toolsApiTitle: 'Tools-API',
      toolsApiDesc: 'API zur Verwaltung und Ausführung integrierter Tools',
      chatMethodTitle: 'chat()',
      chatMethodDesc: 'Interaktive Chat-Sitzung mit Gemini starten',
      chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
      chatExample: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Eine Eingabeaufforderung senden und eine Antwort erhalten',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: \`const response = await cli.ask("Was ist maschinelles Lernen?", {
  maxTokens: 1000,
  temperature: 0.5
});\`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Dateien oder Code mit KI-Unterstützung analysieren',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Neues Plugin mit der CLI registrieren',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Plugin-Logik hier
      return 'Plugin erfolgreich ausgeführt';
    }
  }
};

cli.registerPlugin(myPlugin);\`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Benutzerdefiniertes Tool für KI erstellen',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Aktuelles Wetter für einen Ort abrufen',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Wetterdaten abrufen
    return \\\`Wetter in \\\${location}: Sonnig, 25°C\\\`;
  }
});\`,
      signatureLabel: 'Signatur:',
      exampleLabel: 'Beispiel:'
    },
    ja: {
      title: 'API リファレンス',
      subtitle: '詳細なメソッドの説明、パラメータ、実用的な例を含む完全なGemini CLI APIドキュメント。',
      sectionsTitle: 'API セクション',
      sectionsSubtitle: '異なるAPIカテゴリをナビゲート',
      coreApiTitle: 'コア API',
      coreApiDesc: 'Geminiモデルとの相互作用と会話管理のためのメインAPI',
      pluginApiTitle: 'プラグイン API',
      pluginApiDesc: 'カスタムプラグインと拡張機能を開発するためのAPI',
      configApiTitle: '設定 API',
      configApiDesc: 'CLI設定と設定を管理するためのAPI',
      toolsApiTitle: 'ツール API',
      toolsApiDesc: '組み込みツールを管理・実行するためのAPI',
      chatMethodTitle: 'chat()',
      chatMethodDesc: 'Geminiとのインタラクティブチャットセッションを開始',
      chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
      chatExample: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'プロンプトを送信して応答を受信',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: \`const response = await cli.ask("機械学習とは何ですか？", {
  maxTokens: 1000,
  temperature: 0.5
});\`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'AIアシスタンスでファイルやコードを分析',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'CLIに新しいプラグインを登録',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // プラグインロジックここ
      return 'プラグインが正常に実行されました';
    }
  }
};

cli.registerPlugin(myPlugin);\`,
      createToolTitle: 'createTool()',
      createToolDesc: 'AI用のカスタムツールを作成',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '指定された場所の現在の天気を取得',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 天気データを取得
    return \\\`\\\${location}の天気：晴れ、25°C\\\`;
  }
});\`,
      signatureLabel: 'シグネチャ:',
      exampleLabel: '例:'
    },
    ko: {
      title: 'API 참조',
      subtitle: '상세한 메서드 설명, 매개변수 및 실용적인 예제가 포함된 완전한 Gemini CLI API 문서.',
      sectionsTitle: 'API 섹션',
      sectionsSubtitle: '다양한 API 카테고리 탐색',
      coreApiTitle: '핵심 API',
      coreApiDesc: 'Gemini 모델과 상호작용하고 대화를 관리하기 위한 주요 API',
      pluginApiTitle: '플러그인 API',
      pluginApiDesc: '사용자 정의 플러그인 및 확장 개발을 위한 API',
      configApiTitle: '구성 API',
      configApiDesc: 'CLI 구성 및 설정 관리를 위한 API',
      toolsApiTitle: '도구 API',
      toolsApiDesc: '내장 도구 관리 및 실행을 위한 API',
      chatMethodTitle: 'chat()',
      chatMethodDesc: 'Gemini와 대화형 채팅 세션 시작',
      chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
      chatExample: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`,
      askMethodTitle: 'ask()',
      askMethodDesc: '프롬프트를 보내고 응답 받기',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: \`const response = await cli.ask("머신러닝이란 무엇인가요?", {
  maxTokens: 1000,
  temperature: 0.5
});\`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'AI 지원으로 파일이나 코드 분석',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'CLI에 새 플러그인 등록',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // 플러그인 로직 여기
      return '플러그인이 성공적으로 실행됨';
    }
  }
};

cli.registerPlugin(myPlugin);\`,
      createToolTitle: 'createTool()',
      createToolDesc: 'AI용 사용자 정의 도구 생성',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '지정된 위치의 현재 날씨 가져오기',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 날씨 데이터 가져오기
    return \\\`\\\${location}의 날씨: 맑음, 25°C\\\`;
  }
});\`,
      signatureLabel: '시그니처:',
      exampleLabel: '예제:'
    },
    es: {
      title: 'Referencia API',
      subtitle: 'Documentación completa de la API de Gemini CLI con descripciones detalladas de métodos, parámetros y ejemplos prácticos.',
      sectionsTitle: 'Secciones API',
      sectionsSubtitle: 'Navegar por diferentes categorías de API',
      coreApiTitle: 'API Principal',
      coreApiDesc: 'API principal para interactuar con modelos Gemini y gestionar conversaciones',
      pluginApiTitle: 'API de Plugin',
      pluginApiDesc: 'API para desarrollar plugins y extensiones personalizados',
      configApiTitle: 'API de Configuración',
      configApiDesc: 'API para gestionar configuración y ajustes del CLI',
      toolsApiTitle: 'API de Herramientas',
      toolsApiDesc: 'API para gestionar y ejecutar herramientas integradas',
      chatMethodTitle: 'chat()',
      chatMethodDesc: 'Iniciar sesión de chat interactiva con Gemini',
      chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
      chatExample: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Enviar un prompt y recibir respuesta',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: \`const response = await cli.ask("¿Qué es el aprendizaje automático?", {
  maxTokens: 1000,
  temperature: 0.5
});\`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Analizar archivos o código con asistencia de IA',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Registrar nuevo plugin con el CLI',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Lógica del plugin aquí
      return 'Plugin ejecutado exitosamente';
    }
  }
};

cli.registerPlugin(myPlugin);\`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Crear herramienta personalizada para IA',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Obtener clima actual para una ubicación',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Obtener datos del clima
    return \\\`Clima en \\\${location}: Soleado, 25°C\\\`;
  }
});\`,
      signatureLabel: 'Firma:',
      exampleLabel: 'Ejemplo:'
    },
    ru: {
      title: 'Справочник API',
      subtitle: 'Полная документация API Gemini CLI с подробными описаниями методов, параметрами и практическими примерами.',
      sectionsTitle: 'Разделы API',
      sectionsSubtitle: 'Навигация по различным категориям API',
      coreApiTitle: 'Основной API',
      coreApiDesc: 'Основной API для взаимодействия с моделями Gemini и управления разговорами',
      pluginApiTitle: 'API Плагинов',
      pluginApiDesc: 'API для разработки пользовательских плагинов и расширений',
      configApiTitle: 'API Конфигурации',
      configApiDesc: 'API для управления конфигурацией и настройками CLI',
      toolsApiTitle: 'API Инструментов',
      toolsApiDesc: 'API для управления и выполнения встроенных инструментов',
      chatMethodTitle: 'chat()',
      chatMethodDesc: 'Начать интерактивную сессию чата с Gemini',
      chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
      chatExample: \`import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});\`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Отправить запрос и получить ответ',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: \`const response = await cli.ask("Что такое машинное обучение?", {
  maxTokens: 1000,
  temperature: 0.5
});\`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Анализировать файлы или код с помощью ИИ',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: \`const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});\`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Зарегистрировать новый плагин с CLI',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Логика плагина здесь
      return 'Плагин выполнен успешно';
    }
  }
};

cli.registerPlugin(myPlugin);\`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Создать пользовательский инструмент для ИИ',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Получить текущую погоду для местоположения',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Получить данные о погоде
    return \\\`Погода в \\\${location}: Солнечно, 25°C\\\`;
  }
});\`,
      signatureLabel: 'Подпись:',
      exampleLabel: 'Пример:'
    }`;

  // 在Hindi翻译后添加其他语言翻译
  content = content.replace(
    '      signatureLabel: \'हस्ताक्षर:\',\n      exampleLabel: \'उदाहरण:\'\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh',
    `      signatureLabel: 'हस्ताक्षर:',\n      exampleLabel: 'उदाहरण:'\n    }${frenchTranslation}\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh`
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功添加了所有语言的完整翻译');
  
  return true;
}

// 执行添加翻译
if (require.main === module) {
  try {
    addAPIReferenceAllLanguages();
    console.log('\n🎉 所有语言的API参考翻译添加完成！');
  } catch (error) {
    console.error('❌ 添加翻译过程中发生错误:', error);
  }
}

module.exports = { addAPIReferenceAllLanguages };
