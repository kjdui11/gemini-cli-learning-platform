import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import {
  CodeBracketIcon,
  PuzzlePieceIcon,
  CogIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

interface LocaleAPIReferencePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: LocaleAPIReferencePageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: 'API 参考 | Gemini CLI 开发者文档',
    hi: 'API संदर्भ | Gemini CLI डेवलपर दस्तावेज़ीकरण',
    fr: 'Référence API | Documentation Développeur Gemini CLI',
    de: 'API-Referenz | Gemini CLI Entwicklerdokumentation',
    ja: 'API リファレンス | Gemini CLI 开发者ドキュメント',
    ko: 'API 참조 | Gemini CLI 개발자 문서',
    es: 'Referencia API | Documentación para Desarrolladores Gemini CLI',
    ru: 'Справочник API | Документация разработчика Gemini CLI'
  }

  return {
    title: titles[locale as keyof typeof titles] || 'API Reference | Gemini CLI Developer Documentation',
    description: 'Complete Gemini CLI API documentation with detailed method descriptions, parameters, and practical examples.',
  }
}

const isValidLocale = (locale: string): boolean => {
  return ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru'].includes(locale)
}

const getContent = (locale: string) => {
  // Hindi translation
  if (locale === 'hi') {
    return {
      title: 'API संदर्भ',
      subtitle: 'विस्तृत मेथड विवरण, पैरामीटर और व्यावहारिक उदाहरणों के साथ पूर्ण Gemini CLI API दस्तावेज़ीकरण।',
      sectionsTitle: 'API अनुभाग',
      sectionsSubtitle: 'विभिन्न API श्रेणियों में नेविगेट करें',
      coreApiTitle: 'कोर API',
      coreApiDesc: 'Gemini मॉडल के साथ इंटरैक्ट करने और बातचीत प्रबंधित करने के लिए मुख्य API',
      pluginApiTitle: 'प्लगइन API',
      pluginApiDesc: 'कस्टम प्लगइन्स और एक्सटेंशन विकसित करने के लिए API',
      configApiTitle: 'कॉन्फ़िगरेशन API',
      configApiDesc: 'CLI कॉन्फ़िगरेशन और सेटिंग्स प्रबंधित करने के लिए API',
      toolsApiTitle: 'टूल्स API',
      toolsApiDesc: 'बिल्ट-इन टूल्स प्रबंधित और निष्पादित करने के लिए API',
      chatMethodTitle: 'chat()',
      chatMethodDesc: 'Gemini के साथ इंटरैक्टिव चैट सेशन शुरू करें',
      chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
      chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'एक प्रॉम्प्ट भेजें और प्रतिक्रिया प्राप्त करें',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: `const response = await cli.ask("मशीन लर्निंग क्या है?", {
  maxTokens: 1000,
  temperature: 0.5
});`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'AI सहायता के साथ फ़ाइलों या कोड का विश्लेषण करें',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'CLI के साथ नया प्लगइन रजिस्टर करें',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // प्लगइन लॉजिक यहाँ
      return 'प्लगइन सफलतापूर्वक निष्पादित';
    }
  }
};

cli.registerPlugin(myPlugin);`,
      createToolTitle: 'createTool()',
      createToolDesc: 'AI के उपयोग के लिए कस्टम टूल बनाएं',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'निर्दिष्ट स्थान के लिए वर्तमान मौसम प्राप्त करें',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // मौसम डेटा प्राप्त करें
    return \`\${location}में मौसम: धूप, 25°C\`;
  }
});`,
      signatureLabel: 'हस्ताक्षर:',
      exampleLabel: 'उदाहरण:',
      // Configuration API
      configApiSectionTitle: 'कॉन्फ़िगरेशन API',
      configApiSectionDesc: 'CLI कॉन्फ़िगरेशन और सेटिंग्स प्रबंधित करने के लिए API',
      getConfigTitle: 'getConfig()',
      getConfigDesc: 'वर्तमान कॉन्फ़िगरेशन मान प्राप्त करें',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: `// सभी कॉन्फ़िग प्राप्त करें
const config = cli.getConfig();

// विशिष्ट कॉन्फ़िग मान प्राप्त करें
const model = cli.getConfig('model');`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: 'कॉन्फ़िगरेशन मान सेट करें',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: `// मॉडल सेट करें
cli.setConfig('model', 'gemini-pro');

// कई मान सेट करें
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: 'कॉन्फ़िगरेशन को डिफ़ॉल्ट पर रीसेट करें',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: `// सभी कॉन्फ़िग रीसेट करें
cli.resetConfig();

// विशिष्ट की रीसेट करें
cli.resetConfig('temperature');`,
      // Tools API
      toolsApiSectionTitle: 'टूल्स API',
      toolsApiSectionDesc: 'बिल्ट-इन टूल्स प्रबंधित और निष्पादित करने के लिए API',
      listToolsTitle: 'listTools()',
      listToolsDesc: 'उपलब्ध टूल्स की सूची प्राप्त करें',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: 'विशिष्ट टूल निष्पादित करें',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: `// फ़ाइल पढ़ें
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// शेल कमांड चलाएं
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`,
      // Common Types
      commonTypesTitle: 'सामान्य प्रकार',
      commonTypesDesc: 'API में उपयोग किए जाने वाले TypeScript इंटरफेस और प्रकार',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'चैट सेशन शुरू करने के लिए विकल्प',
      modelField: 'model',
      modelDesc: 'उपयोग करने वाला मॉडल (जैसे: "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: 'रचनात्मकता स्तर (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: 'अधिकतम प्रतिक्रिया लंबाई',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'सिस्टम निर्देश',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'कस्टम टूल बनाने की परिभाषा',
      nameField: 'name',
      nameDesc: 'अद्वितीय टूल नाम',
      descriptionField: 'description',
      descriptionDesc: 'AI के लिए टूल विवरण',
      parametersField: 'parameters',
      parametersDesc: 'पैरामीटर स्कीमा',
      executeField: 'execute',
      executeDesc: 'टूल निष्पादन फ़ंक्शन',
      // Additional Resources
      additionalResourcesTitle: 'अतिरिक्त संसाधन',
      additionalResourcesDesc: 'अधिक दस्तावेज़ीकरण और उदाहरण देखें',
      viewExamplesText: 'उदाहरण देखें',
      backToDocsText: 'दस्तावेज़ों पर वापस जाएं'
    }
  }

  // French translation
  if (locale === 'fr') {
    return {
      title: 'Référence API',
      subtitle: 'Documentation complète de l\'API Gemini CLI avec descriptions détaillées des méthodes, paramètres et exemples pratiques.',
      sectionsTitle: 'Sections API',
      sectionsSubtitle: 'Naviguer dans les différentes catégories d\'API',
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
      chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Envoyer une invite et recevoir une réponse',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: `const response = await cli.ask("Qu'est-ce que l'apprentissage automatique ?", {
  maxTokens: 1000,
  temperature: 0.5
});`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Analyser des fichiers ou du code avec l\'assistance IA',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Enregistrer un nouveau plugin avec le CLI',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Logique du plugin ici
      return 'Plugin exécuté avec succès';
    }
  }
};

cli.registerPlugin(myPlugin);`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Créer un outil personnalisé pour l\'IA',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Obtenir la météo actuelle pour un lieu',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Récupérer les données météo
    return \`Météo à \${location}: Ensoleillé, 25°C\`;
  }
});`,
      signatureLabel: 'Signature :',
      exampleLabel: 'Exemple :',
      // Configuration API
      configApiSectionTitle: 'API de Configuration',
      configApiSectionDesc: 'API pour gérer la configuration et les paramètres CLI',
      getConfigTitle: 'getConfig()',
      getConfigDesc: 'Obtenir les valeurs de configuration actuelles',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: `// Obtenir toute la config
const config = cli.getConfig();

// Obtenir une valeur de config spécifique
const model = cli.getConfig('model');`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: 'Définir les valeurs de configuration',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: `// Définir le modèle
cli.setConfig('model', 'gemini-pro');

// Définir plusieurs valeurs
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: 'Réinitialiser la configuration aux valeurs par défaut',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: `// Réinitialiser toute la config
cli.resetConfig();

// Réinitialiser une clé spécifique
cli.resetConfig('temperature');`,
      // Tools API
      toolsApiSectionTitle: 'API des Outils',
      toolsApiSectionDesc: 'API pour gérer et exécuter les outils intégrés',
      listToolsTitle: 'listTools()',
      listToolsDesc: 'Obtenir la liste des outils disponibles',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: 'Exécuter un outil spécifique',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: `// Lire un fichier
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// Exécuter une commande shell
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`,
      // Common Types
      commonTypesTitle: 'Types Communs',
      commonTypesDesc: 'Interfaces et types TypeScript utilisés dans l\'API',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'Options pour démarrer une session de chat',
      modelField: 'model',
      modelDesc: 'Modèle à utiliser (ex: "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: 'Niveau de créativité (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: 'Longueur maximale de réponse',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'Instructions système',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'Définition pour créer des outils personnalisés',
      nameField: 'name',
      nameDesc: 'Nom unique de l\'outil',
      descriptionField: 'description',
      descriptionDesc: 'Description de l\'outil pour l\'IA',
      parametersField: 'parameters',
      parametersDesc: 'Schéma des paramètres',
      executeField: 'execute',
      executeDesc: 'Fonction d\'exécution de l\'outil',
      // Additional Resources
      additionalResourcesTitle: 'Ressources Supplémentaires',
      additionalResourcesDesc: 'Explorer plus de documentation et d\'exemples',
      viewExamplesText: 'Voir les Exemples',
      backToDocsText: 'Retour aux Docs'
    }
  }

  // German translation
  if (locale === 'de') {
    return {
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
      chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Eine Eingabeaufforderung senden und eine Antwort erhalten',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: `const response = await cli.ask("Was ist maschinelles Lernen?", {
  maxTokens: 1000,
  temperature: 0.5
});`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Dateien oder Code mit KI-Unterstützung analysieren',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Neues Plugin mit der CLI registrieren',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Plugin-Logik hier
      return 'Plugin erfolgreich ausgeführt';
    }
  }
};

cli.registerPlugin(myPlugin);`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Benutzerdefiniertes Tool für KI erstellen',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Aktuelles Wetter für einen Ort abrufen',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Wetterdaten abrufen
    return \`Wetter in \${location}: Sonnig, 25°C\`;
  }
});`,
      signatureLabel: 'Signatur:',
      exampleLabel: 'Beispiel:',
      // Configuration API
      configApiSectionTitle: 'Konfigurations-API',
      configApiSectionDesc: 'API zur Verwaltung von CLI-Konfiguration und -Einstellungen',
      getConfigTitle: 'getConfig()',
      getConfigDesc: 'Aktuelle Konfigurationswerte abrufen',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: `// Alle Konfiguration abrufen
const config = cli.getConfig();

// Spezifischen Konfigurationswert abrufen
const model = cli.getConfig('model');`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: 'Konfigurationswerte setzen',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: `// Modell setzen
cli.setConfig('model', 'gemini-pro');

// Mehrere Werte setzen
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: 'Konfiguration auf Standardwerte zurücksetzen',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: `// Alle Konfiguration zurücksetzen
cli.resetConfig();

// Spezifischen Schlüssel zurücksetzen
cli.resetConfig('temperature');`,
      // Tools API
      toolsApiSectionTitle: 'Tools-API',
      toolsApiSectionDesc: 'API zur Verwaltung und Ausführung integrierter Tools',
      listToolsTitle: 'listTools()',
      listToolsDesc: 'Liste verfügbarer Tools abrufen',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: 'Spezifisches Tool ausführen',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: `// Datei lesen
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// Shell-Befehl ausführen
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`,
      // Common Types
      commonTypesTitle: 'Häufige Typen',
      commonTypesDesc: 'TypeScript-Schnittstellen und -Typen, die in der API verwendet werden',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'Optionen zum Starten einer Chat-Sitzung',
      modelField: 'model',
      modelDesc: 'Zu verwendendes Modell (z.B. "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: 'Kreativitätslevel (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: 'Maximale Antwortlänge',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'Systemanweisungen',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'Definition zum Erstellen benutzerdefinierter Tools',
      nameField: 'name',
      nameDesc: 'Eindeutiger Tool-Name',
      descriptionField: 'description',
      descriptionDesc: 'Tool-Beschreibung für KI',
      parametersField: 'parameters',
      parametersDesc: 'Parameter-Schema',
      executeField: 'execute',
      executeDesc: 'Tool-Ausführungsfunktion',
      // Additional Resources
      additionalResourcesTitle: 'Zusätzliche Ressourcen',
      additionalResourcesDesc: 'Weitere Dokumentation und Beispiele erkunden',
      viewExamplesText: 'Beispiele Anzeigen',
      backToDocsText: 'Zurück zu Docs'
    }
  }

  // Japanese translation
  if (locale === 'ja') {
    return {
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
      chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'プロンプトを送信して応答を受信',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: `const response = await cli.ask("機械学習とは何ですか？", {
  maxTokens: 1000,
  temperature: 0.5
});`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'AIアシスタンスでファイルやコードを分析',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'CLIに新しいプラグインを登録',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // プラグインロジックここ
      return 'プラグインが正常に実行されました';
    }
  }
};

cli.registerPlugin(myPlugin);`,
      createToolTitle: 'createTool()',
      createToolDesc: 'AI用のカスタムツールを作成',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '指定された場所の現在の天気を取得',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 天気データを取得
    return \`\${location}の天気：晴れ、25°C\`;
  }
});`,
      signatureLabel: 'シグネチャ:',
      exampleLabel: '例:',
      // Configuration API
      configApiSectionTitle: '設定 API',
      configApiSectionDesc: 'CLI設定と設定を管理するためのAPI',
      getConfigTitle: 'getConfig()',
      getConfigDesc: '現在の設定値を取得',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: `// すべての設定を取得
const config = cli.getConfig();

// 特定の設定値を取得
const model = cli.getConfig('model');`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: '設定値を設定',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: `// モデルを設定
cli.setConfig('model', 'gemini-pro');

// 複数の値を設定
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: '設定をデフォルトにリセット',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: `// すべての設定をリセット
cli.resetConfig();

// 特定のキーをリセット
cli.resetConfig('temperature');`,
      // Tools API
      toolsApiSectionTitle: 'ツール API',
      toolsApiSectionDesc: '組み込みツールを管理・実行するためのAPI',
      listToolsTitle: 'listTools()',
      listToolsDesc: '利用可能なツールのリストを取得',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: '特定のツールを実行',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: `// ファイルを読み取り
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// シェルコマンドを実行
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`,
      // Common Types
      commonTypesTitle: '共通タイプ',
      commonTypesDesc: 'APIで使用されるTypeScriptインターフェースとタイプ',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'チャットセッションを開始するためのオプション',
      modelField: 'model',
      modelDesc: '使用するモデル（例："gemini-pro"）',
      temperatureField: 'temperature',
      temperatureDesc: '創造性レベル（0-1）',
      maxTokensField: 'maxTokens',
      maxTokensDesc: '最大応答長',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'システム指示',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'カスタムツールを作成するための定義',
      nameField: 'name',
      nameDesc: '一意のツール名',
      descriptionField: 'description',
      descriptionDesc: 'AIのためのツール説明',
      parametersField: 'parameters',
      parametersDesc: 'パラメータスキーマ',
      executeField: 'execute',
      executeDesc: 'ツール実行関数',
      // Additional Resources
      additionalResourcesTitle: '追加リソース',
      additionalResourcesDesc: 'より多くのドキュメントと例を探索',
      viewExamplesText: '例を見る',
      backToDocsText: 'ドキュメントに戻る'
    }
  }

  // Korean translation
  if (locale === 'ko') {
    return {
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
      chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
      askMethodTitle: 'ask()',
      askMethodDesc: '프롬프트를 보내고 응답 받기',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: `const response = await cli.ask("머신러닝이란 무엇인가요?", {
  maxTokens: 1000,
  temperature: 0.5
});`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'AI 지원으로 파일이나 코드 분석',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'CLI에 새 플러그인 등록',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // 플러그인 로직 여기
      return '플러그인이 성공적으로 실행됨';
    }
  }
};

cli.registerPlugin(myPlugin);`,
      createToolTitle: 'createTool()',
      createToolDesc: 'AI용 사용자 정의 도구 생성',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '지정된 위치의 현재 날씨 가져오기',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 날씨 데이터 가져오기
    return \`\${location}의 날씨: 맑음, 25°C\`;
  }
});`,
      signatureLabel: '시그니처:',
      exampleLabel: '예제:'
    }
  }

  // Spanish translation
  if (locale === 'es') {
    return {
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
      chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Enviar un prompt y recibir respuesta',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: `const response = await cli.ask("¿Qué es el aprendizaje automático?", {
  maxTokens: 1000,
  temperature: 0.5
});`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Analizar archivos o código con asistencia de IA',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Registrar nuevo plugin con el CLI',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Lógica del plugin aquí
      return 'Plugin ejecutado exitosamente';
    }
  }
};

cli.registerPlugin(myPlugin);`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Crear herramienta personalizada para IA',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Obtener clima actual para una ubicación',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Obtener datos del clima
    return \`Clima en \${location}: Soleado, 25°C\`;
  }
});`,
      signatureLabel: 'Firma:',
      exampleLabel: 'Ejemplo:'
    }
  }

  // Russian translation
  if (locale === 'ru') {
    return {
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
      chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
      askMethodTitle: 'ask()',
      askMethodDesc: 'Отправить запрос и получить ответ',
      askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
      askExample: `const response = await cli.ask("Что такое машинное обучение?", {
  maxTokens: 1000,
  temperature: 0.5
});`,
      analyzeMethodTitle: 'analyze()',
      analyzeMethodDesc: 'Анализировать файлы или код с помощью ИИ',
      analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
      analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
      registerPluginTitle: 'registerPlugin()',
      registerPluginDesc: 'Зарегистрировать новый плагин с CLI',
      registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
      registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Логика плагина здесь
      return 'Плагин выполнен успешно';
    }
  }
};

cli.registerPlugin(myPlugin);`,
      createToolTitle: 'createTool()',
      createToolDesc: 'Создать пользовательский инструмент для ИИ',
      createToolSignature: 'createTool(definition: ToolDefinition): Tool',
      createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Получить текущую погоду для местоположения',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Получить данные о погоде
    return \`Погода в \${location}: Солнечно, 25°C\`;
  }
});`,
      signatureLabel: 'Подпись:',
      exampleLabel: 'Пример:'
    }
  }

  // Default to Chinese
  return {
    title: 'API 参考',
    subtitle: '完整的 Gemini CLI API 文档，包含详细的方法描述、参数和实用示例。',
    sectionsTitle: 'API 部分',
    sectionsSubtitle: '导航到不同的 API 类别',
    coreApiTitle: '核心 API',
    coreApiDesc: '与 Gemini 模型交互和管理对话的主要 API',
    pluginApiTitle: '插件 API',
    pluginApiDesc: '用于开发自定义插件和扩展的 API',
    configApiTitle: '配置 API',
    configApiDesc: '用于管理 CLI 配置和设置的 API',
    toolsApiTitle: '工具 API',
    toolsApiDesc: '用于管理和执行内置工具的 API',
    chatMethodTitle: 'chat()',
    chatMethodDesc: '启动与 Gemini 的交互式聊天会话',
    chatSignature: 'chat(options?: ChatOptions): Promise<ChatSession>',
    chatExample: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
const session = await cli.chat({
  model: 'gemini-pro',
  temperature: 0.7
});`,
    askMethodTitle: 'ask()',
    askMethodDesc: '发送单个提示并获取响应',
    askSignature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
    askExample: `const response = await cli.ask("什么是机器学习？", {
  maxTokens: 1000,
  temperature: 0.5
});`,
    analyzeMethodTitle: 'analyze()',
    analyzeMethodDesc: '使用 AI 辅助分析文件或代码',
    analyzeSignature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
    analyzeExample: `const analysis = await cli.analyze(['src/main.js'], {
  type: 'code-review',
  includeMetrics: true
});`,
    registerPluginTitle: 'registerPlugin()',
    registerPluginDesc: '向 CLI 注册新插件',
    registerPluginSignature: 'registerPlugin(plugin: Plugin): void',
    registerPluginExample: `const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // 插件逻辑在这里
      return '插件执行成功';
    }
  }
};

cli.registerPlugin(myPlugin);`,
    createToolTitle: 'createTool()',
    createToolDesc: '创建供 AI 使用的自定义工具',
    createToolSignature: 'createTool(definition: ToolDefinition): Tool',
    createToolExample: `const weatherTool = cli.createTool({
  name: 'get_weather',
  description: '获取指定位置的当前天气',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // 获取天气数据
    return \`\${location}的天气：晴朗，25°C\`;
  }
});`,
    signatureLabel: '签名：',
    exampleLabel: '示例：',
    // Configuration API
    configApiSectionTitle: '配置 API',
    configApiSectionDesc: '用于管理 CLI 配置和设置的 API',
    getConfigTitle: 'getConfig()',
    getConfigDesc: '获取当前配置值',
    getConfigSignature: 'getConfig(key?: string): any',
    getConfigExample: `// 获取所有配置
const config = cli.getConfig();

// 获取特定配置值
const model = cli.getConfig('model');`,
    setConfigTitle: 'setConfig()',
    setConfigDesc: '设置配置值',
    setConfigSignature: 'setConfig(key: string, value: any): void',
    setConfigExample: `// 设置模型
cli.setConfig('model', 'gemini-pro');

// 设置多个值
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`,
    resetConfigTitle: 'resetConfig()',
    resetConfigDesc: '重置配置为默认值',
    resetConfigSignature: 'resetConfig(key?: string): void',
    resetConfigExample: `// 重置所有配置
cli.resetConfig();

// 重置特定键
cli.resetConfig('temperature');`,
    // Tools API
    toolsApiSectionTitle: '工具 API',
    toolsApiSectionDesc: '用于管理和执行内置工具的 API',
    listToolsTitle: 'listTools()',
    listToolsDesc: '获取可用工具列表',
    listToolsSignature: 'listTools(): Tool[]',
    listToolsExample: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`,
    executeToolTitle: 'executeTool()',
    executeToolDesc: '执行特定工具',
    executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
    executeToolExample: `// 读取文件
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// 运行 shell 命令
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`,
    // Common Types
    commonTypesTitle: '常用类型',
    commonTypesDesc: 'API 中使用的 TypeScript 接口和类型',
    chatOptionsTitle: 'ChatOptions',
    chatOptionsDesc: '启动聊天会话的选项',
    modelField: 'model',
    modelDesc: '要使用的模型（例如："gemini-pro"）',
    temperatureField: 'temperature',
    temperatureDesc: '创造性水平（0-1）',
    maxTokensField: 'maxTokens',
    maxTokensDesc: '最大响应长度',
    systemPromptField: 'systemPrompt',
    systemPromptDesc: '系统指令',
    toolDefinitionTitle: 'ToolDefinition',
    toolDefinitionDesc: '创建自定义工具的定义',
    nameField: 'name',
    nameDesc: '唯一工具名称',
    descriptionField: 'description',
    descriptionDesc: 'AI 的工具描述',
    parametersField: 'parameters',
    parametersDesc: '参数模式',
    executeField: 'execute',
    executeDesc: '工具执行函数',
    // Additional Resources
    additionalResourcesTitle: '其他资源',
    additionalResourcesDesc: '探索更多文档和示例',
    viewExamplesText: '查看示例',
    backToDocsText: '返回文档'
  }
}

export default async function LocaleAPIReferencePage({ params }: LocaleAPIReferencePageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs/api-reference')
  }

  // For English, redirect to main page to avoid duplication
  if (locale === 'en') {
    redirect('/docs/api-reference')
  }

  const content = getContent(locale)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* API Sections Overview */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.sectionsTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.sectionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">{content.coreApiTitle}</h3>
              </div>
              <p className="text-gray-600 text-sm">{content.coreApiDesc}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <PuzzlePieceIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">{content.pluginApiTitle}</h3>
              </div>
              <p className="text-gray-600 text-sm">{content.pluginApiDesc}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <CogIcon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">{content.configApiTitle}</h3>
              </div>
              <p className="text-gray-600 text-sm">{content.configApiDesc}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <WrenchScrewdriverIcon className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">{content.toolsApiTitle}</h3>
              </div>
              <p className="text-gray-600 text-sm">{content.toolsApiDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core API Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <CodeBracketIcon className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">{content.coreApiTitle}</h2>
            </div>
            <p className="text-lg text-gray-600">{content.coreApiDesc}</p>
          </div>

          <div className="space-y-12">
            {/* chat() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.chatMethodTitle}</h3>
              <p className="text-gray-600 mb-6">{content.chatMethodDesc}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.chatSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.chatExample}
                  </pre>
                </div>
              </div>
            </div>

            {/* ask() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.askMethodTitle}</h3>
              <p className="text-gray-600 mb-6">{content.askMethodDesc}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.askSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.askExample}
                  </pre>
                </div>
              </div>
            </div>

            {/* analyze() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.analyzeMethodTitle}</h3>
              <p className="text-gray-600 mb-6">{content.analyzeMethodDesc}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.analyzeSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.analyzeExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plugin API Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <PuzzlePieceIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">{content.pluginApiTitle}</h2>
            </div>
            <p className="text-lg text-gray-600">{content.pluginApiDesc}</p>
          </div>

          <div className="space-y-12">
            {/* registerPlugin() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.registerPluginTitle}</h3>
              <p className="text-gray-600 mb-6">{content.registerPluginDesc}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.registerPluginSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.registerPluginExample}
                  </pre>
                </div>
              </div>
            </div>

            {/* createTool() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.createToolTitle}</h3>
              <p className="text-gray-600 mb-6">{content.createToolDesc}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.createToolSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.createToolExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration API Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <CogIcon className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">{content.configApiSectionTitle}</h2>
            </div>
            <p className="text-lg text-gray-600">{content.configApiSectionDesc}</p>
          </div>

          <div className="space-y-12">
            {/* getConfig() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.getConfigTitle}</h3>
              <p className="text-gray-600 mb-6">{content.getConfigDesc}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.getConfigSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.getConfigExample}
                  </pre>
                </div>
              </div>
            </div>

            {/* setConfig() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.setConfigTitle}</h3>
              <p className="text-gray-600 mb-6">{content.setConfigDesc}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.setConfigSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.setConfigExample}
                  </pre>
                </div>
              </div>
            </div>

            {/* resetConfig() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.resetConfigTitle}</h3>
              <p className="text-gray-600 mb-6">{content.resetConfigDesc}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.resetConfigSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.resetConfigExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools API Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <WrenchScrewdriverIcon className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">{content.toolsApiSectionTitle}</h2>
            </div>
            <p className="text-lg text-gray-600">{content.toolsApiSectionDesc}</p>
          </div>

          <div className="space-y-12">
            {/* listTools() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.listToolsTitle}</h3>
              <p className="text-gray-600 mb-6">{content.listToolsDesc}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.listToolsSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.listToolsExample}
                  </pre>
                </div>
              </div>
            </div>

            {/* executeTool() method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.executeToolTitle}</h3>
              <p className="text-gray-600 mb-6">{content.executeToolDesc}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.signatureLabel}</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <code className="text-sm text-gray-800">{content.executeToolSignature}</code>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.exampleLabel}</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    {content.executeToolExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Types Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.commonTypesTitle}</h2>
            <p className="text-lg text-gray-600">{content.commonTypesDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ChatOptions */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.chatOptionsTitle}</h3>
              <p className="text-gray-600 mb-6">{content.chatOptionsDesc}</p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.modelField}</h4>
                  <p className="text-sm text-gray-600 mt-1">string</p>
                  <p className="text-sm text-gray-500 mt-1">{content.modelDesc}</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.temperatureField}</h4>
                  <p className="text-sm text-gray-600 mt-1">number</p>
                  <p className="text-sm text-gray-500 mt-1">{content.temperatureDesc}</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.maxTokensField}</h4>
                  <p className="text-sm text-gray-600 mt-1">number</p>
                  <p className="text-sm text-gray-500 mt-1">{content.maxTokensDesc}</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.systemPromptField}</h4>
                  <p className="text-sm text-gray-600 mt-1">string</p>
                  <p className="text-sm text-gray-500 mt-1">{content.systemPromptDesc}</p>
                </div>
              </div>
            </div>

            {/* ToolDefinition */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.toolDefinitionTitle}</h3>
              <p className="text-gray-600 mb-6">{content.toolDefinitionDesc}</p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.nameField}</h4>
                  <p className="text-sm text-gray-600 mt-1">string</p>
                  <p className="text-sm text-gray-500 mt-1">{content.nameDesc}</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.descriptionField}</h4>
                  <p className="text-sm text-gray-600 mt-1">string</p>
                  <p className="text-sm text-gray-500 mt-1">{content.descriptionDesc}</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.parametersField}</h4>
                  <p className="text-sm text-gray-600 mt-1">object</p>
                  <p className="text-sm text-gray-500 mt-1">{content.parametersDesc}</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{content.executeField}</h4>
                  <p className="text-sm text-gray-600 mt-1">function</p>
                  <p className="text-sm text-gray-500 mt-1">{content.executeDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.additionalResourcesTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{content.additionalResourcesDesc}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs/examples"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {content.viewExamplesText}
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {content.backToDocsText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
