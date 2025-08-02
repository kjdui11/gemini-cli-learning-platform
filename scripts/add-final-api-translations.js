const fs = require('fs');
const path = require('path');

// 添加最后的API参考翻译（西班牙语和俄语）
function addFinalAPITranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 添加最后的API参考翻译（西班牙语和俄语）...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 西班牙语翻译
  const spanishTranslation = `    },
    es: {
      title: 'Referencia API',
      subtitle: 'Documentación completa de la API de Gemini CLI con descripciones detalladas de métodos, parámetros y ejemplos prácticos.',
      sectionsTitle: 'Secciones API',
      sectionsSubtitle: 'Navegar por diferentes categorías de API',
      typesTitle: 'Tipos Comunes',
      typesSubtitle: 'Interfaces y tipos TypeScript utilizados en la API',
      resourcesTitle: 'Recursos Relacionados',
      resourcesSubtitle: 'Explorar más documentación y ejemplos',
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
            },
            {
              name: 'analyze()',
              description: 'Analizar archivos o código con asistencia de IA',
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
          title: 'API de Plugin',
          description: 'API para desarrollar plugins y extensiones personalizados',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'Registrar nuevo plugin con el CLI',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Lógica del plugin aquí
      return 'Plugin ejecutado exitosamente';
    }
  }
};

cli.registerPlugin(myPlugin);\`
            },
            {
              name: 'createTool()',
              description: 'Crear herramienta personalizada para IA',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Obtener clima actual para una ubicación',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Obtener datos del clima
    return \\\`Clima en \\\${location}: Soleado, 25°C\\\`;
  }
});\`
            }
          ]
        },
        {
          id: 'config-api',
          title: 'API de Configuración',
          description: 'API para gestionar configuración y ajustes del CLI',
          methods: [
            {
              name: 'getConfig()',
              description: 'Obtener configuraciones actuales',
              signature: 'getConfig(key?: string): any',
              example: \`// Obtener toda la configuración
const config = cli.getConfig();

// Obtener configuración específica
const apiKey = cli.getConfig('apiKey');\`
            },
            {
              name: 'setConfig()',
              description: 'Establecer valor de configuración',
              signature: 'setConfig(key: string, value: any): void',
              example: \`cli.setConfig('temperature', 0.8);
cli.setConfig('model', 'gemini-pro');\`
            }
          ]
        },
        {
          id: 'tools-api',
          title: 'API de Herramientas',
          description: 'API para gestionar y ejecutar herramientas integradas',
          methods: [
            {
              name: 'listTools()',
              description: 'Listar todas las herramientas disponibles',
              signature: 'listTools(): Tool[]',
              example: \`const tools = cli.listTools();
console.log('Herramientas disponibles:', tools.map(t => t.name));\`
            },
            {
              name: 'executeTool()',
              description: 'Ejecutar herramienta especificada',
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
          description: 'Opciones de configuración de sesión de chat',
          properties: [
            { name: 'model', type: 'string', description: 'El modelo Gemini a utilizar' },
            { name: 'temperature', type: 'number', description: 'Creatividad de la respuesta (0-1)' },
            { name: 'maxTokens', type: 'number', description: 'Límite máximo de tokens' }
          ]
        },
        {
          name: 'AskOptions',
          description: 'Opciones de configuración para consulta única',
          properties: [
            { name: 'maxTokens', type: 'number', description: 'Número máximo de tokens' },
            { name: 'temperature', type: 'number', description: 'Nivel de creatividad' },
            { name: 'stream', type: 'boolean', description: 'Si la respuesta es streaming' }
          ]
        },
        {
          name: 'AnalyzeOptions',
          description: 'Opciones de configuración de análisis de código',
          properties: [
            { name: 'type', type: 'string', description: 'Tipo de análisis (code-review, security, performance)' },
            { name: 'includeMetrics', type: 'boolean', description: 'Incluir métricas de código' },
            { name: 'language', type: 'string', description: 'Lenguaje de programación' }
          ]
        }
      ],
      resources: [
        { title: 'Ejemplos de Código', description: 'Ejemplos prácticos y plantillas', href: '/docs/examples' },
        { title: 'Tutoriales', description: 'Guías paso a paso y tutoriales', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'Código fuente y contribuciones', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]`;

  // 俄语翻译
  const russianTranslation = `    },
    ru: {
      title: 'Справочник API',
      subtitle: 'Полная документация API Gemini CLI с подробными описаниями методов, параметрами и практическими примерами.',
      sectionsTitle: 'Разделы API',
      sectionsSubtitle: 'Навигация по различным категориям API',
      typesTitle: 'Общие Типы',
      typesSubtitle: 'TypeScript интерфейсы и типы, используемые в API',
      resourcesTitle: 'Связанные Ресурсы',
      resourcesSubtitle: 'Изучите больше документации и примеров',
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
            },
            {
              name: 'analyze()',
              description: 'Анализировать файлы или код с помощью ИИ',
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
          title: 'API Плагинов',
          description: 'API для разработки пользовательских плагинов и расширений',
          methods: [
            {
              name: 'registerPlugin()',
              description: 'Зарегистрировать новый плагин с CLI',
              signature: 'registerPlugin(plugin: Plugin): void',
              example: \`const myPlugin = {
  name: 'my-custom-plugin',
  version: '1.0.0',
  commands: {
    'custom-command': async (args) => {
      // Логика плагина здесь
      return 'Плагин выполнен успешно';
    }
  }
};

cli.registerPlugin(myPlugin);\`
            },
            {
              name: 'createTool()',
              description: 'Создать пользовательский инструмент для ИИ',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: 'Получить текущую погоду для местоположения',
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    // Получить данные о погоде
    return \\\`Погода в \\\${location}: Солнечно, 25°C\\\`;
  }
});\`
            }
          ]
        },
        {
          id: 'config-api',
          title: 'API Конфигурации',
          description: 'API для управления конфигурацией и настройками CLI',
          methods: [
            {
              name: 'getConfig()',
              description: 'Получить текущие настройки конфигурации',
              signature: 'getConfig(key?: string): any',
              example: \`// Получить всю конфигурацию
const config = cli.getConfig();

// Получить конкретную конфигурацию
const apiKey = cli.getConfig('apiKey');\`
            },
            {
              name: 'setConfig()',
              description: 'Установить значение конфигурации',
              signature: 'setConfig(key: string, value: any): void',
              example: \`cli.setConfig('temperature', 0.8);
cli.setConfig('model', 'gemini-pro');\`
            }
          ]
        },
        {
          id: 'tools-api',
          title: 'API Инструментов',
          description: 'API для управления и выполнения встроенных инструментов',
          methods: [
            {
              name: 'listTools()',
              description: 'Перечислить все доступные инструменты',
              signature: 'listTools(): Tool[]',
              example: \`const tools = cli.listTools();
console.log('Доступные инструменты:', tools.map(t => t.name));\`
            },
            {
              name: 'executeTool()',
              description: 'Выполнить указанный инструмент',
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
          description: 'Опции конфигурации сессии чата',
          properties: [
            { name: 'model', type: 'string', description: 'Модель Gemini для использования' },
            { name: 'temperature', type: 'number', description: 'Креативность ответа (0-1)' },
            { name: 'maxTokens', type: 'number', description: 'Максимальный лимит токенов' }
          ]
        },
        {
          name: 'AskOptions',
          description: 'Опции конфигурации для одного запроса',
          properties: [
            { name: 'maxTokens', type: 'number', description: 'Максимальное количество токенов' },
            { name: 'temperature', type: 'number', description: 'Уровень креативности' },
            { name: 'stream', type: 'boolean', description: 'Потоковый ответ или нет' }
          ]
        },
        {
          name: 'AnalyzeOptions',
          description: 'Опции конфигурации анализа кода',
          properties: [
            { name: 'type', type: 'string', description: 'Тип анализа (code-review, security, performance)' },
            { name: 'includeMetrics', type: 'boolean', description: 'Включать метрики кода' },
            { name: 'language', type: 'string', description: 'Язык программирования' }
          ]
        }
      ],
      resources: [
        { title: 'Примеры Кода', description: 'Практические примеры и шаблоны', href: '/docs/examples' },
        { title: 'Учебники', description: 'Пошаговые руководства и учебники', href: '/docs/tutorials' },
        { title: 'GitHub', description: 'Исходный код и вклады', href: 'https://github.com/google-gemini/gemini-cli', external: true }
      ]`;

  // 在韩语翻译后添加西班牙语和俄语翻译
  content = content.replace(
    '      ]\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh',
    `      ]\n    }${spanishTranslation}\n    }${russianTranslation}\n    }\n  }\n\n  return content[locale as keyof typeof content] || content.zh`
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功添加了西班牙语和俄语的完整翻译');
  
  return true;
}

// 执行添加翻译
if (require.main === module) {
  try {
    addFinalAPITranslations();
    console.log('\n🎉 所有语言的API参考翻译添加完成！');
  } catch (error) {
    console.error('❌ 添加翻译过程中发生错误:', error);
  }
}

module.exports = { addFinalAPITranslations };
