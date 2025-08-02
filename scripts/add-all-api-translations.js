const fs = require('fs');
const path = require('path');

// 添加所有语言的API参考翻译
function addAllAPITranslations() {
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
      typesTitle: 'Types Communs',
      typesSubtitle: 'Interfaces et types TypeScript utilisés dans l\\'API',
      resourcesTitle: 'Ressources Connexes',
      resourcesSubtitle: 'Explorer plus de documentation et d\\'exemples',
      backToDocs: 'Retour à la Documentation',
      apiSections: [
        {
          id: 'core-api',
          title: 'API Principale',
          description: 'API principale pour interagir avec les modèles Gemini et gérer les conversations',
          methods: [
            {
              name: 'chat()',
              description: 'Démarrer une session de chat interactive avec Gemini',
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
              description: 'Envoyer une invite et recevoir une réponse',
              signature: 'ask(prompt: string, options?: AskOptions): Promise<string>',
              example: \`const response = await cli.ask("Qu'est-ce que l'apprentissage automatique ?", {
  maxTokens: 1000,
  temperature: 0.5
});\`
            },
            {
              name: 'analyze()',
              description: 'Analyser des fichiers ou du code avec l\\'assistance IA',
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
          title: 'API Plugin',
          description: 'API pour développer des plugins et extensions personnalisés',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'Enregistrer un nouveau plugin avec le CLI',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Logique du plugin ici
      return 'Plugin exécuté avec succès';
    }
  }
};

cli.registerPlugin(myPlugin);\`
            },
            {
              name: 'createTool()',
              description: 'Créer un outil personnalisé pour l\\'IA',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Obtenir la météo actuelle pour un lieu',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Récupérer les données météo
    return \\\`Météo à \\\${location}: Ensoleillé, 25°C\\\`;
  }
});\`
            }
          ]
        },
        {
          id: 'config-api',
          title: 'API de Configuration',
          description: 'API pour gérer la configuration et les paramètres CLI',
          methods: [
            {
              name: 'getConfig()',
              description: 'Obtenir les paramètres de configuration actuels',
              signature: 'getConfig(key?: string): any',
              example: \`// Obtenir toute la configuration
const config = cli.getConfig();

// Obtenir une configuration spécifique
const apiKey = cli.getConfig('apiKey');\`
            },
            {
              name: 'setConfig()',
              description: 'Définir une valeur de configuration',
              signature: 'setConfig(key: string, value: any): void',
              example: \`cli.setConfig('temperature', 0.8);
cli.setConfig('model', 'gemini-pro');\`
            }
          ]
        },
        {
          id: 'tools-api',
          title: 'API des Outils',
          description: 'API pour gérer et exécuter les outils intégrés',
          methods: [
            {
              name: 'listTools()',
              description: 'Lister tous les outils disponibles',
              signature: 'listTools(): Tool[]',
              example: \`const tools = cli.listTools();
console.log('Outils disponibles:', tools.map(t => t.name));\`
            },
            {
              name: 'executeTool()',
              description: 'Exécuter l\\'outil spécifié',
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
          description: 'Options de configuration de session de chat',
          properties: [
            { name: 'model', type: 'string', description: 'Le modèle Gemini à utiliser' },
            { name: 'temperature', type: 'number', description: 'Créativité de la réponse (0-1)' },
            { name: 'maxTokens', type: 'number', description: 'Limite maximale de tokens' }
          ]
        },
        {
          name: 'AskOptions',
          description: 'Options de configuration pour une seule question',
          properties: [
            { name: 'maxTokens', type: 'number', description: 'Nombre maximum de tokens' },
            { name: 'temperature', type: 'number', description: 'Niveau de créativité' },
            { name: 'stream', type: 'boolean', description: 'Si la réponse est en streaming' }
          ]
        },
        {
          name: 'AnalyzeOptions',
          description: 'Options de configuration d\\'analyse de code',
          properties: [
            { name: 'type', type: 'string', description: 'Type d\\'analyse (code-review, security, performance)' },
            { name: 'includeMetrics', type: 'boolean', description: 'Inclure les métriques de code' },
            { name: 'language', type: 'string', description: 'Langage de programmation' }
          ]
        }
      ],
      resources: [
        { title: 'Exemples de Code', description: 'Exemples pratiques et modèles', href: '/docs/examples' },
        { title: 'Tutoriels', description: 'Guides étape par étape et tutoriels', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'Code source et contributions', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]`;

  // 德语翻译
  const germanTranslation = `    },
    de: {
      title: 'API-Referenz',
      subtitle: 'Vollständige Gemini CLI API-Dokumentation mit detaillierten Methodenbeschreibungen, Parametern und praktischen Beispielen.',
      sectionsTitle: 'API-Bereiche',
      sectionsSubtitle: 'Navigieren Sie durch verschiedene API-Kategorien',
      typesTitle: 'Häufige Typen',
      typesSubtitle: 'TypeScript-Schnittstellen und -Typen, die in der API verwendet werden',
      resourcesTitle: 'Verwandte Ressourcen',
      resourcesSubtitle: 'Entdecken Sie weitere Dokumentation und Beispiele',
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
            },
            {
              name: 'analyze()',
              description: 'Dateien oder Code mit KI-Unterstützung analysieren',
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
          title: 'Plugin-API',
          description: 'API für die Entwicklung benutzerdefinierter Plugins und Erweiterungen',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'Neues Plugin mit der CLI registrieren',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Plugin-Logik hier
      return 'Plugin erfolgreich ausgeführt';
    }
  }
};

cli.registerPlugin(myPlugin);\`
            },
            {
              name: 'createTool()',
              description: 'Benutzerdefiniertes Tool für KI erstellen',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Aktuelles Wetter für einen Ort abrufen',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Wetterdaten abrufen
    return \\\`Wetter in \\\${location}: Sonnig, 25°C\\\`;
  }
});\`
            }
          ]
        },
        {
          id: 'config-api',
          title: 'Konfigurations-API',
          description: 'API zur Verwaltung von CLI-Konfiguration und -Einstellungen',
          methods: [
            {
              name: 'getConfig()',
              description: 'Aktuelle Konfigurationseinstellungen abrufen',
              signature: 'getConfig(key?: string): any',
              example: \`// Alle Konfigurationen abrufen
const config = cli.getConfig();

// Spezifische Konfiguration abrufen
const apiKey = cli.getConfig('apiKey');\`
            },
            {
              name: 'setConfig()',
              description: 'Konfigurationswert festlegen',
              signature: 'setConfig(key: string, value: any): void',
              example: \`cli.setConfig('temperature', 0.8);
cli.setConfig('model', 'gemini-pro');\`
            }
          ]
        },
        {
          id: 'tools-api',
          title: 'Tools-API',
          description: 'API zur Verwaltung und Ausführung integrierter Tools',
          methods: [
            {
              name: 'listTools()',
              description: 'Alle verfügbaren Tools auflisten',
              signature: 'listTools(): Tool[]',
              example: \`const tools = cli.listTools();
console.log('Verfügbare Tools:', tools.map(t => t.name));\`
            },
            {
              name: 'executeTool()',
              description: 'Angegebenes Tool ausführen',
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
          description: 'Chat-Sitzungs-Konfigurationsoptionen',
          properties: [
            { name: 'model', type: 'string', description: 'Das zu verwendende Gemini-Modell' },
            { name: 'temperature', type: 'number', description: 'Kreativität der Antwort (0-1)' },
            { name: 'maxTokens', type: 'number', description: 'Maximales Token-Limit' }
          ]
        },
        {
          name: 'AskOptions',
          description: 'Konfigurationsoptionen für einzelne Anfragen',
          properties: [
            { name: 'maxTokens', type: 'number', description: 'Maximale Anzahl von Tokens' },
            { name: 'temperature', type: 'number', description: 'Kreativitätslevel' },
            { name: 'stream', type: 'boolean', description: 'Ob Streaming-Antwort' }
          ]
        },
        {
          name: 'AnalyzeOptions',
          description: 'Code-Analyse-Konfigurationsoptionen',
          properties: [
            { name: 'type', type: 'string', description: 'Analysetyp (code-review, security, performance)' },
            { name: 'includeMetrics', type: 'boolean', description: 'Code-Metriken einschließen' },
            { name: 'language', type: 'string', description: 'Programmiersprache' }
          ]
        }
      ],
      resources: [
        { title: 'Code-Beispiele', description: 'Praktische Beispiele und Vorlagen', href: '/docs/examples' },
        { title: 'Tutorials', description: 'Schritt-für-Schritt-Anleitungen und Tutorials', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'Quellcode und Beiträge', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]`;

  // 在Hindi翻译后添加法语和德语翻译
  content = content.replace(
    '      ]\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh',
    `      ]\n    }${frenchTranslation}\n    }${germanTranslation}\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh`
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功添加了法语和德语的完整翻译');
  
  return true;
}

// 执行添加翻译
if (require.main === module) {
  try {
    addAllAPITranslations();
    console.log('\n🎉 法语和德语翻译添加完成！');
  } catch (error) {
    console.error('❌ 添加翻译过程中发生错误:', error);
  }
}

module.exports = { addAllAPITranslations };
