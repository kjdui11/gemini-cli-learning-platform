import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  CogIcon,
  DocumentTextIcon,
  CommandLineIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '工具 API - Gemini CLI 文档',
    en: 'Tools API - Gemini CLI Documentation',
    hi: 'टूल्स API - Gemini CLI दस्तावेज़ीकरण',
    fr: 'API des outils - Documentation Gemini CLI',
    de: 'Tools API - Gemini CLI Dokumentation',
    ja: 'ツール API - Gemini CLI ドキュメント',
    ko: '도구 API - Gemini CLI 문서',
    es: 'API de herramientas - Documentación Gemini CLI',
    ru: 'API инструментов - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '完整的 Gemini CLI 工具 API 参考，包括工具注册、执行、管理和自定义工具开发。',
    en: 'Complete Gemini CLI Tools API reference including tool registration, execution, management, and custom tool development.',
    hi: 'टूल पंजीकरण, निष्पादन, प्रबंधन और कस्टम टूल विकास सहित पूर्ण Gemini CLI टूल्स API संदर्भ।',
    fr: 'Référence complète de l\'API des outils Gemini CLI, y compris l\'enregistrement des outils, l\'exécution, la gestion et le développement d\'outils personnalisés.',
    de: 'Vollständige Gemini CLI Tools API-Referenz einschließlich Tool-Registrierung, Ausführung, Verwaltung und benutzerdefinierter Tool-Entwicklung.',
    ja: 'ツールの登録、実行、管理、カスタムツール開発を含む完全なGemini CLI Tools APIリファレンス。',
    ko: '도구 등록, 실행, 관리 및 사용자 정의 도구 개발을 포함한 완전한 Gemini CLI Tools API 참조.',
    es: 'Referencia completa de la API de herramientas de Gemini CLI, incluyendo registro de herramientas, ejecución, gestión y desarrollo de herramientas personalizadas.',
    ru: 'Полный справочник по API инструментов Gemini CLI, включая регистрацию инструментов, выполнение, управление и разработку пользовательских инструментов.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

const toolCategories = [
  {
    id: 'file-system',
    title: {
      zh: '文件系统工具',
      en: 'File System Tools',
      hi: 'फ़ाइल सिस्टम टूल्स',
      fr: 'Outils de Système de Fichiers',
      de: 'Dateisystem-Tools',
      ja: 'ファイルシステムツール',
      ko: '파일 시스템 도구',
      es: 'Herramientas del Sistema de Archivos',
      ru: 'Инструменты файловой системы'
    },
    description: {
      zh: '用于读取、写入和管理文件的工具',
      en: 'Tools for reading, writing, and managing files',
      hi: 'फ़ाइलों को पढ़ने, लिखने और प्रबंधित करने के लिए टूल्स',
      fr: 'Outils pour lire, écrire et gérer les fichiers',
      de: 'Tools zum Lesen, Schreiben und Verwalten von Dateien',
      ja: 'ファイルの読み取り、書き込み、管理のためのツール',
      ko: '파일 읽기, 쓰기 및 관리를 위한 도구',
      es: 'Herramientas para leer, escribir y gestionar archivos',
      ru: 'Инструменты для чтения, записи и управления файлами'
    },
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-indigo-600',
    tools: [
      {
        name: 'read_file',
        description: {
          zh: '从文件读取内容',
          en: 'Read content from a file',
          hi: 'फ़ाइल से सामग्री पढ़ें',
          fr: 'Lire le contenu d\'un fichier',
          de: 'Inhalt aus einer Datei lesen',
          ja: 'ファイルからコンテンツを読み取る',
          ko: '파일에서 내용 읽기',
          es: 'Leer contenido de un archivo',
          ru: 'Читать содержимое из файла'
        },
        signature: 'read_file(path: string): Promise<string>',
        example: `const content = await tools.read_file('./package.json');
console.log(content);`
      },
      {
        name: 'write_file',
        description: {
          zh: '将内容写入文件',
          en: 'Write content to a file',
          hi: 'फ़ाइल में सामग्री लिखें',
          fr: 'Écrire du contenu dans un fichier',
          de: 'Inhalt in eine Datei schreiben',
          ja: 'ファイルにコンテンツを書き込む',
          ko: '파일에 내용 쓰기',
          es: 'Escribir contenido en un archivo',
          ru: 'Записать содержимое в файл'
        },
        signature: 'write_file(path: string, content: string): Promise<void>',
        example: `await tools.write_file('./output.txt', 'Hello, World!');`
      },
      {
        name: 'list_files',
        description: {
          zh: '列出目录中的文件',
          en: 'List files in a directory',
          hi: 'डायरेक्टरी में फ़ाइलों की सूची बनाएं',
          fr: 'Lister les fichiers dans un répertoire',
          de: 'Dateien in einem Verzeichnis auflisten',
          ja: 'ディレクトリ内のファイルをリストする',
          ko: '디렉토리의 파일 목록 표시',
          es: 'Listar archivos en un directorio',
          ru: 'Список файлов в директории'
        },
        signature: 'list_files(path: string): Promise<string[]>',
        example: `const files = await tools.list_files('./src');
console.log(files);`
      }
    ]
  },
  {
    id: 'shell',
    title: {
      zh: 'Shell 工具',
      en: 'Shell Tools',
      hi: 'शेल टूल्स',
      fr: 'Outils Shell',
      de: 'Shell-Tools',
      ja: 'シェルツール',
      ko: '셸 도구',
      es: 'Herramientas Shell',
      ru: 'Инструменты Shell'
    },
    description: {
      zh: '用于执行 shell 命令的工具',
      en: 'Tools for executing shell commands',
      hi: 'शेल कमांड निष्पादित करने के लिए टूल्स',
      fr: 'Outils pour exécuter des commandes shell',
      de: 'Tools zur Ausführung von Shell-Befehlen',
      ja: 'シェルコマンドを実行するためのツール',
      ko: '셸 명령을 실행하기 위한 도구',
      es: 'Herramientas para ejecutar comandos shell',
      ru: 'Инструменты для выполнения команд shell'
    },
    icon: CommandLineIcon,
    color: 'from-green-500 to-emerald-600',
    tools: [
      {
        name: 'run_shell_command',
        description: {
          zh: '执行 shell 命令',
          en: 'Execute a shell command',
          hi: 'शेल कमांड निष्पादित करें',
          fr: 'Exécuter une commande shell',
          de: 'Shell-Befehl ausführen',
          ja: 'シェルコマンドを実行',
          ko: '셸 명령 실행',
          es: 'Ejecutar un comando shell',
          ru: 'Выполнить команду shell'
        },
        signature: 'run_shell_command(command: string, options?: ShellOptions): Promise<ShellResult>',
        example: `const result = await tools.run_shell_command('ls -la');
console.log(result.stdout);`
      },
      {
        name: 'run_script',
        description: {
          zh: '执行脚本文件',
          en: 'Execute a script file',
          hi: 'स्क्रिप्ट फ़ाइल निष्पादित करें',
          fr: 'Exécuter un fichier de script',
          de: 'Skriptdatei ausführen',
          ja: 'スクリプトファイルを実行',
          ko: '스크립트 파일 실행',
          es: 'Ejecutar un archivo de script',
          ru: 'Выполнить файл скрипта'
        },
        signature: 'run_script(scriptPath: string, args?: string[]): Promise<ShellResult>',
        example: `const result = await tools.run_script('./build.sh', ['--production']);`
      }
    ]
  },
  {
    id: 'web',
    title: {
      zh: 'Web 工具',
      en: 'Web Tools',
      hi: 'वेब टूल्स',
      fr: 'Outils Web',
      de: 'Web-Tools',
      ja: 'Webツール',
      ko: '웹 도구',
      es: 'Herramientas Web',
      ru: 'Веб-инструменты'
    },
    description: {
      zh: '用于网络请求和搜索的工具',
      en: 'Tools for web requests and search',
      hi: 'वेब अनुरोध और खोज के लिए टूल्स',
      fr: 'Outils pour les requêtes web et la recherche',
      de: 'Tools für Web-Anfragen und Suche',
      ja: 'Webリクエストと検索のためのツール',
      ko: '웹 요청 및 검색을 위한 도구',
      es: 'Herramientas para solicitudes web y búsqueda',
      ru: 'Инструменты для веб-запросов и поиска'
    },
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-pink-600',
    tools: [
      {
        name: 'web_fetch',
        description: {
          zh: '从 URL 获取内容',
          en: 'Fetch content from a URL',
          hi: 'URL से सामग्री प्राप्त करें',
          fr: 'Récupérer le contenu d\'une URL',
          de: 'Inhalt von einer URL abrufen',
          ja: 'URLからコンテンツを取得',
          ko: 'URL에서 콘텐츠 가져오기',
          es: 'Obtener contenido de una URL',
          ru: 'Получить содержимое с URL'
        },
        signature: 'web_fetch(url: string, options?: FetchOptions): Promise<string>',
        example: `const content = await tools.web_fetch('https://api.example.com/data');
console.log(content);`
      },
      {
        name: 'web_search',
        description: {
          zh: '在网络上搜索信息',
          en: 'Search the web for information',
          hi: 'जानकारी के लिए वेब खोजें',
          fr: 'Rechercher des informations sur le web',
          de: 'Im Web nach Informationen suchen',
          ja: 'ウェブで情報を検索',
          ko: '웹에서 정보 검색',
          es: 'Buscar información en la web',
          ru: 'Поиск информации в интернете'
        },
        signature: 'web_search(query: string, options?: SearchOptions): Promise<SearchResult[]>',
        example: `const results = await tools.web_search('Gemini CLI documentation');
console.log(results);`
      }
    ]
  }
]

const customToolExample = {
  zh: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// 定义自定义工具
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: '获取指定位置的当前天气',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: '城市和州，例如 北京, 中国'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: '温度单位'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // 您的天气 API 逻辑
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`\${location} 的当前天气: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// 注册工具
gemini.registerTool(weatherTool);

// 在对话中使用工具
const response = await gemini.ask("北京的天气怎么样？", {
  tools: ['get_weather']
});`,
  en: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// Define a custom tool
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'The city and state, e.g. San Francisco, CA'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: 'Temperature unit'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'fahrenheit' }) => {
    // Your weather API logic here
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`Current weather in \${location}: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// Register the tool
gemini.registerTool(weatherTool);

// Use the tool in a conversation
const response = await gemini.ask("What's the weather like in New York?", {
  tools: ['get_weather']
});`,
  hi: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// कस्टम टूल परिभाषित करें
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: 'किसी स्थान के लिए वर्तमान मौसम प्राप्त करें',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'शहर और राज्य, जैसे मुंबई, भारत'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: 'तापमान इकाई'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // आपका मौसम API लॉजिक यहाँ
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`\${location} में वर्तमान मौसम: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// टूल पंजीकृत करें
gemini.registerTool(weatherTool);

// बातचीत में टूल का उपयोग करें
const response = await gemini.ask("दिल्ली में मौसम कैसा है?", {
  tools: ['get_weather']
});`,
  fr: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// Définir un outil personnalisé
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: 'Obtenir la météo actuelle pour un lieu',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'La ville et l\'état, par ex. Paris, France'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: 'Unité de température'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // Votre logique API météo ici
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`Météo actuelle à \${location}: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// Enregistrer l'outil
gemini.registerTool(weatherTool);

// Utiliser l'outil dans une conversation
const response = await gemini.ask("Quel temps fait-il à Paris?", {
  tools: ['get_weather']
});`,
  de: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// Benutzerdefiniertes Tool definieren
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: 'Aktuelles Wetter für einen Ort abrufen',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'Stadt und Staat, z.B. Berlin, Deutschland'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: 'Temperatureinheit'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // Ihre Wetter-API-Logik hier
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`Aktuelles Wetter in \${location}: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// Tool registrieren
gemini.registerTool(weatherTool);

// Tool in einem Gespräch verwenden
const response = await gemini.ask("Wie ist das Wetter in Berlin?", {
  tools: ['get_weather']
});`,
  ja: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// カスタムツールを定義
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: '場所の現在の天気を取得',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: '都市と州、例：東京、日本'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: '温度単位'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // あなたの天気APIロジックをここに
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`\${location}の現在の天気: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// ツールを登録
gemini.registerTool(weatherTool);

// 会話でツールを使用
const response = await gemini.ask("東京の天気はどうですか？", {
  tools: ['get_weather']
});`,
  ko: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// 사용자 정의 도구 정의
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: '위치의 현재 날씨 가져오기',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: '도시와 주, 예: 서울, 한국'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: '온도 단위'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // 여기에 날씨 API 로직
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`\${location}의 현재 날씨: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// 도구 등록
gemini.registerTool(weatherTool);

// 대화에서 도구 사용
const response = await gemini.ask("서울 날씨는 어떤가요?", {
  tools: ['get_weather']
});`,
  es: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// Definir una herramienta personalizada
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: 'Obtener el clima actual para una ubicación',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'La ciudad y estado, ej. Madrid, España'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: 'Unidad de temperatura'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // Su lógica de API del clima aquí
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`Clima actual en \${location}: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// Registrar la herramienta
gemini.registerTool(weatherTool);

// Usar la herramienta en una conversación
const response = await gemini.ask("¿Cómo está el clima en Madrid?", {
  tools: ['get_weather']
});`,
  ru: `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

// Определить пользовательский инструмент
const weatherTool: ToolDefinition = {
  name: 'get_weather',
  description: 'Получить текущую погоду для местоположения',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'Город и область, например Москва, Россия'
      },
      unit: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        description: 'Единица температуры'
      }
    },
    required: ['location']
  },
  execute: async ({ location, unit = 'celsius' }) => {
    // Ваша логика API погоды здесь
    const response = await fetch(\`https://api.weather.com/v1/current?location=\${location}&unit=\${unit}\`);
    const data = await response.json();
    return \`Текущая погода в \${location}: \${data.temperature}°\${unit === 'celsius' ? 'C' : 'F'}, \${data.description}\`;
  }
};

// Зарегистрировать инструмент
gemini.registerTool(weatherTool);

// Использовать инструмент в разговоре
const response = await gemini.ask("Какая погода в Москве?", {
  tools: ['get_weather']
});`
}

const content = {
  zh: {
    title: '工具 API',
    subtitle: '为 AI 交互创建和管理自定义工具。使用强大的文件操作、shell 命令、网络请求等工具扩展 Gemini CLI。',
    customToolTitle: '自定义工具开发',
    customToolSubtitle: '创建您自己的工具来扩展 Gemini CLI 功能',
    customToolDescription: '以下是创建自定义天气工具的完整示例：',
    registrationTitle: '工具注册和管理',
    registrationSubtitle: '在您的 Gemini CLI 实例中管理工具',
    bestPracticesTitle: '最佳实践',
    bestPracticesSubtitle: '创建有效工具的指南',
    relatedResourcesTitle: '相关资源',
    relatedResourcesSubtitle: '探索更多关于工具开发和使用的内容'
  },
  en: {
    title: 'Tools API',
    subtitle: 'Create and manage custom tools for AI interactions. Extend Gemini CLI with powerful tools for file operations, shell commands, web requests, and more.',
    customToolTitle: 'Custom Tool Development',
    customToolSubtitle: 'Create your own tools to extend Gemini CLI functionality',
    customToolDescription: 'Here\'s a complete example of creating a custom weather tool:',
    registrationTitle: 'Tool Registration & Management',
    registrationSubtitle: 'Managing tools in your Gemini CLI instance',
    bestPracticesTitle: 'Best Practices',
    bestPracticesSubtitle: 'Guidelines for creating effective tools',
    relatedResourcesTitle: 'Related Resources',
    relatedResourcesSubtitle: 'Explore more about tool development and usage'
  },
  hi: {
    title: 'टूल्स API',
    subtitle: 'AI इंटरैक्शन के लिए कस्टम टूल्स बनाएं और प्रबंधित करें। फ़ाइल ऑपरेशन, शेल कमांड, वेब अनुरोध और अधिक के लिए शक्तिशाली टूल्स के साथ Gemini CLI का विस्तार करें।',
    customToolTitle: 'कस्टम टूल विकास',
    customToolSubtitle: 'Gemini CLI कार्यक्षमता का विस्तार करने के लिए अपने स्वयं के टूल्स बनाएं',
    customToolDescription: 'यहाँ एक कस्टम मौसम टूल बनाने का पूरा उदाहरण है:',
    registrationTitle: 'टूल पंजीकरण और प्रबंधन',
    registrationSubtitle: 'आपके Gemini CLI इंस्टेंस में टूल्स का प्रबंधन',
    bestPracticesTitle: 'सर्वोत्तम प्रथाएं',
    bestPracticesSubtitle: 'प्रभावी टूल्स बनाने के लिए दिशानिर्देश',
    relatedResourcesTitle: 'संबंधित संसाधन',
    relatedResourcesSubtitle: 'टूल विकास और उपयोग के बारे में और जानें'
  },
  fr: {
    title: 'API des Outils',
    subtitle: 'Créez et gérez des outils personnalisés pour les interactions IA. Étendez Gemini CLI avec des outils puissants pour les opérations de fichiers, les commandes shell, les requêtes web et plus encore.',
    customToolTitle: 'Développement d\'Outils Personnalisés',
    customToolSubtitle: 'Créez vos propres outils pour étendre les fonctionnalités de Gemini CLI',
    customToolDescription: 'Voici un exemple complet de création d\'un outil météo personnalisé:',
    registrationTitle: 'Enregistrement et Gestion des Outils',
    registrationSubtitle: 'Gestion des outils dans votre instance Gemini CLI',
    bestPracticesTitle: 'Meilleures Pratiques',
    bestPracticesSubtitle: 'Directives pour créer des outils efficaces',
    relatedResourcesTitle: 'Ressources Connexes',
    relatedResourcesSubtitle: 'Explorez davantage le développement et l\'utilisation des outils'
  },
  de: {
    title: 'Tools API',
    subtitle: 'Erstellen und verwalten Sie benutzerdefinierte Tools für KI-Interaktionen. Erweitern Sie Gemini CLI mit leistungsstarken Tools für Dateioperationen, Shell-Befehle, Web-Anfragen und mehr.',
    customToolTitle: 'Benutzerdefinierte Tool-Entwicklung',
    customToolSubtitle: 'Erstellen Sie Ihre eigenen Tools, um die Gemini CLI-Funktionalität zu erweitern',
    customToolDescription: 'Hier ist ein vollständiges Beispiel für die Erstellung eines benutzerdefinierten Wetter-Tools:',
    registrationTitle: 'Tool-Registrierung und -Verwaltung',
    registrationSubtitle: 'Verwaltung von Tools in Ihrer Gemini CLI-Instanz',
    bestPracticesTitle: 'Best Practices',
    bestPracticesSubtitle: 'Richtlinien für die Erstellung effektiver Tools',
    relatedResourcesTitle: 'Verwandte Ressourcen',
    relatedResourcesSubtitle: 'Erfahren Sie mehr über Tool-Entwicklung und -Nutzung'
  },
  ja: {
    title: 'ツール API',
    subtitle: 'AI インタラクション用のカスタムツールを作成・管理します。ファイル操作、シェルコマンド、ウェブリクエストなどの強力なツールでGemini CLIを拡張しましょう。',
    customToolTitle: 'カスタムツール開発',
    customToolSubtitle: 'Gemini CLI機能を拡張する独自のツールを作成',
    customToolDescription: 'カスタム天気ツールを作成する完全な例です:',
    registrationTitle: 'ツール登録と管理',
    registrationSubtitle: 'Gemini CLIインスタンスでのツール管理',
    bestPracticesTitle: 'ベストプラクティス',
    bestPracticesSubtitle: '効果的なツールを作成するためのガイドライン',
    relatedResourcesTitle: '関連リソース',
    relatedResourcesSubtitle: 'ツール開発と使用についてさらに詳しく'
  },
  ko: {
    title: '도구 API',
    subtitle: 'AI 상호작용을 위한 사용자 정의 도구를 생성하고 관리합니다. 파일 작업, 셸 명령, 웹 요청 등을 위한 강력한 도구로 Gemini CLI를 확장하세요.',
    customToolTitle: '사용자 정의 도구 개발',
    customToolSubtitle: 'Gemini CLI 기능을 확장하는 자체 도구 생성',
    customToolDescription: '사용자 정의 날씨 도구를 만드는 완전한 예제입니다:',
    registrationTitle: '도구 등록 및 관리',
    registrationSubtitle: 'Gemini CLI 인스턴스에서 도구 관리',
    bestPracticesTitle: '모범 사례',
    bestPracticesSubtitle: '효과적인 도구 생성을 위한 가이드라인',
    relatedResourcesTitle: '관련 리소스',
    relatedResourcesSubtitle: '도구 개발 및 사용에 대해 더 알아보기'
  },
  es: {
    title: 'API de Herramientas',
    subtitle: 'Cree y gestione herramientas personalizadas para interacciones de IA. Extienda Gemini CLI con herramientas potentes para operaciones de archivos, comandos shell, solicitudes web y más.',
    customToolTitle: 'Desarrollo de Herramientas Personalizadas',
    customToolSubtitle: 'Cree sus propias herramientas para extender la funcionalidad de Gemini CLI',
    customToolDescription: 'Aquí hay un ejemplo completo de creación de una herramienta meteorológica personalizada:',
    registrationTitle: 'Registro y Gestión de Herramientas',
    registrationSubtitle: 'Gestión de herramientas en su instancia de Gemini CLI',
    bestPracticesTitle: 'Mejores Prácticas',
    bestPracticesSubtitle: 'Pautas para crear herramientas efectivas',
    relatedResourcesTitle: 'Recursos Relacionados',
    relatedResourcesSubtitle: 'Explore más sobre desarrollo y uso de herramientas'
  },
  ru: {
    title: 'API Инструментов',
    subtitle: 'Создавайте и управляйте пользовательскими инструментами для взаимодействия с ИИ. Расширьте Gemini CLI мощными инструментами для файловых операций, команд shell, веб-запросов и многого другого.',
    customToolTitle: 'Разработка Пользовательских Инструментов',
    customToolSubtitle: 'Создайте собственные инструменты для расширения функциональности Gemini CLI',
    customToolDescription: 'Вот полный пример создания пользовательского инструмента погоды:',
    registrationTitle: 'Регистрация и Управление Инструментами',
    registrationSubtitle: 'Управление инструментами в вашем экземпляре Gemini CLI',
    bestPracticesTitle: 'Лучшие Практики',
    bestPracticesSubtitle: 'Руководство по созданию эффективных инструментов',
    relatedResourcesTitle: 'Связанные Ресурсы',
    relatedResourcesSubtitle: 'Узнайте больше о разработке и использовании инструментов'
  }
}

export default async function ToolsAPIPage({ params }: PageProps) {
  const { locale } = await params
  const pageContent = content[locale as keyof typeof content] || content.en

  if (!pageContent) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {pageContent.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              {pageContent.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Built-in Tools */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '内置工具' :
               locale === 'hi' ? 'अंतर्निहित टूल्स' :
               locale === 'fr' ? 'Outils Intégrés' :
               locale === 'de' ? 'Eingebaute Tools' :
               locale === 'ja' ? '組み込みツール' :
               locale === 'ko' ? '내장 도구' :
               locale === 'es' ? 'Herramientas Integradas' :
               locale === 'ru' ? 'Встроенные Инструменты' :
               'Built-in Tools'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? 'Gemini CLI 中可立即使用的强大工具' :
               locale === 'hi' ? 'Gemini CLI में तुरंत उपयोग के लिए तैयार शक्तिशाली टूल्स' :
               locale === 'fr' ? 'Outils puissants prêts à utiliser dans Gemini CLI' :
               locale === 'de' ? 'Leistungsstarke Tools, die sofort in Gemini CLI verwendet werden können' :
               locale === 'ja' ? 'Gemini CLIですぐに使える強力なツール' :
               locale === 'ko' ? 'Gemini CLI에서 즉시 사용할 수 있는 강력한 도구' :
               locale === 'es' ? 'Herramientas potentes listas para usar en Gemini CLI' :
               locale === 'ru' ? 'Мощные инструменты, готовые к использованию в Gemini CLI' :
               'Ready-to-use tools available in Gemini CLI'}
            </p>
          </div>

          <div className="space-y-12">
            {toolCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title[locale as keyof typeof category.title]}
                    </h3>
                    <p className="text-gray-600">
                      {category.description[locale as keyof typeof category.description]}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {tool.name}
                        </code>
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">
                        {tool.description[locale as keyof typeof tool.description]}
                      </p>

                      <div className="mb-4">
                        <h5 className="text-xs font-medium text-gray-900 mb-2">
                          {locale === 'zh' ? '方法签名' :
                           locale === 'hi' ? 'हस्ताक्षर' :
                           locale === 'fr' ? 'Signature' :
                           locale === 'de' ? 'Signatur' :
                           locale === 'ja' ? 'シグネチャ' :
                           locale === 'ko' ? '시그니처' :
                           locale === 'es' ? 'Firma' :
                           locale === 'ru' ? 'Сигнатура' :
                           'Signature'}:
                        </h5>
                        <code className="block bg-gray-900 text-green-400 p-2 rounded text-xs font-mono">
                          {tool.signature}
                        </code>
                      </div>

                      <div>
                        <h5 className="text-xs font-medium text-gray-900 mb-2">
                          {locale === 'zh' ? '示例' :
                           locale === 'hi' ? 'उदाहरण' :
                           locale === 'fr' ? 'Exemple' :
                           locale === 'de' ? 'Beispiel' :
                           locale === 'ja' ? '例' :
                           locale === 'ko' ? '예제' :
                           locale === 'es' ? 'Ejemplo' :
                           locale === 'ru' ? 'Пример' :
                           'Example'}:
                        </h5>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono overflow-x-auto">
                          <code>{tool.example}</code>
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
      {/* Custom Tool Development */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.customToolTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.customToolSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {locale === 'zh' ? '创建自定义工具' :
               locale === 'hi' ? 'कस्टम टूल बनाना' :
               locale === 'fr' ? 'Créer un Outil Personnalisé' :
               locale === 'de' ? 'Benutzerdefiniertes Tool Erstellen' :
               locale === 'ja' ? 'カスタムツールの作成' :
               locale === 'ko' ? '사용자 정의 도구 생성' :
               locale === 'es' ? 'Crear una Herramienta Personalizada' :
               locale === 'ru' ? 'Создание Пользовательского Инструмента' :
               'Creating a Custom Tool'}
            </h3>
            <p className="text-gray-700 mb-6">
              {pageContent.customToolDescription}
            </p>

            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{customToolExample[locale as keyof typeof customToolExample]}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Tool Registration */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.registrationTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.registrationSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '注册工具' :
                 locale === 'hi' ? 'टूल्स पंजीकृत करें' :
                 locale === 'fr' ? 'Enregistrer les Outils' :
                 locale === 'de' ? 'Tools Registrieren' :
                 locale === 'ja' ? 'ツールを登録' :
                 locale === 'ko' ? '도구 등록' :
                 locale === 'es' ? 'Registrar Herramientas' :
                 locale === 'ru' ? 'Регистрация Инструментов' :
                 'Register Tools'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{locale === 'zh' ? `// 注册单个工具
gemini.registerTool(myTool);

// 注册多个工具
gemini.registerTools([tool1, tool2, tool3]);

// 从插件加载
gemini.loadPlugin('./my-tools-plugin');` :
locale === 'hi' ? `// एक टूल पंजीकृत करें
gemini.registerTool(myTool);

// कई टूल्स पंजीकृत करें
gemini.registerTools([tool1, tool2, tool3]);

// प्लगइन से लोड करें
gemini.loadPlugin('./my-tools-plugin');` :
locale === 'fr' ? `// Enregistrer un seul outil
gemini.registerTool(myTool);

// Enregistrer plusieurs outils
gemini.registerTools([tool1, tool2, tool3]);

// Charger depuis un plugin
gemini.loadPlugin('./my-tools-plugin');` :
locale === 'de' ? `// Ein einzelnes Tool registrieren
gemini.registerTool(myTool);

// Mehrere Tools registrieren
gemini.registerTools([tool1, tool2, tool3]);

// Von einem Plugin laden
gemini.loadPlugin('./my-tools-plugin');` :
locale === 'ja' ? `// 単一のツールを登録
gemini.registerTool(myTool);

// 複数のツールを登録
gemini.registerTools([tool1, tool2, tool3]);

// プラグインから読み込み
gemini.loadPlugin('./my-tools-plugin');` :
locale === 'ko' ? `// 단일 도구 등록
gemini.registerTool(myTool);

// 여러 도구 등록
gemini.registerTools([tool1, tool2, tool3]);

// 플러그인에서 로드
gemini.loadPlugin('./my-tools-plugin');` :
locale === 'es' ? `// Registrar una sola herramienta
gemini.registerTool(myTool);

// Registrar múltiples herramientas
gemini.registerTools([tool1, tool2, tool3]);

// Cargar desde un plugin
gemini.loadPlugin('./my-tools-plugin');` :
locale === 'ru' ? `// Зарегистрировать один инструмент
gemini.registerTool(myTool);

// Зарегистрировать несколько инструментов
gemini.registerTools([tool1, tool2, tool3]);

// Загрузить из плагина
gemini.loadPlugin('./my-tools-plugin');` :
`// Register a single tool
gemini.registerTool(myTool);

// Register multiple tools
gemini.registerTools([tool1, tool2, tool3]);

// Register from a plugin
gemini.loadPlugin('./my-tools-plugin');`}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '列出和管理工具' :
                 locale === 'hi' ? 'टूल्स सूचीबद्ध करें और प्रबंधित करें' :
                 locale === 'fr' ? 'Lister et Gérer les Outils' :
                 locale === 'de' ? 'Tools Auflisten und Verwalten' :
                 locale === 'ja' ? 'ツールのリストと管理' :
                 locale === 'ko' ? '도구 목록 및 관리' :
                 locale === 'es' ? 'Listar y Gestionar Herramientas' :
                 locale === 'ru' ? 'Список и Управление Инструментами' :
                 'List & Manage Tools'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{locale === 'zh' ? `// 列出所有可用工具
const tools = gemini.listTools();

// 获取工具信息
const toolInfo = gemini.getTool('tool_name');

// 注销工具
gemini.unregisterTool('tool_name');` :
locale === 'hi' ? `// सभी उपलब्ध टूल्स सूचीबद्ध करें
const tools = gemini.listTools();

// टूल जानकारी प्राप्त करें
const toolInfo = gemini.getTool('tool_name');

// टूल को अपंजीकृत करें
gemini.unregisterTool('tool_name');` :
locale === 'fr' ? `// Lister tous les outils disponibles
const tools = gemini.listTools();

// Obtenir les informations de l'outil
const toolInfo = gemini.getTool('tool_name');

// Désenregistrer un outil
gemini.unregisterTool('tool_name');` :
locale === 'de' ? `// Alle verfügbaren Tools auflisten
const tools = gemini.listTools();

// Tool-Informationen abrufen
const toolInfo = gemini.getTool('tool_name');

// Tool deregistrieren
gemini.unregisterTool('tool_name');` :
locale === 'ja' ? `// 利用可能なすべてのツールをリスト
const tools = gemini.listTools();

// ツール情報を取得
const toolInfo = gemini.getTool('tool_name');

// ツールの登録を解除
gemini.unregisterTool('tool_name');` :
locale === 'ko' ? `// 사용 가능한 모든 도구 나열
const tools = gemini.listTools();

// 도구 정보 가져오기
const toolInfo = gemini.getTool('tool_name');

// 도구 등록 해제
gemini.unregisterTool('tool_name');` :
locale === 'es' ? `// Listar todas las herramientas disponibles
const tools = gemini.listTools();

// Obtener información de la herramienta
const toolInfo = gemini.getTool('tool_name');

// Desregistrar una herramienta
gemini.unregisterTool('tool_name');` :
locale === 'ru' ? `// Список всех доступных инструментов
const tools = gemini.listTools();

// Получить информацию об инструменте
const toolInfo = gemini.getTool('tool_name');

// Отменить регистрацию инструмента
gemini.unregisterTool('tool_name');` :
`// List all available tools
const tools = gemini.listTools();

// Get tool information
const toolInfo = gemini.getTool('tool_name');

// Unregister a tool
gemini.unregisterTool('tool_name');`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      {/* Best Practices */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.bestPracticesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.bestPracticesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? '工具设计' :
                 locale === 'hi' ? 'टूल डिज़ाइन' :
                 locale === 'fr' ? 'Conception d\'Outils' :
                 locale === 'de' ? 'Tool-Design' :
                 locale === 'ja' ? 'ツール設計' :
                 locale === 'ko' ? '도구 설계' :
                 locale === 'es' ? 'Diseño de Herramientas' :
                 locale === 'ru' ? 'Дизайн Инструментов' :
                 'Tool Design'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {locale === 'zh' ? '保持工具专注于单一职责' :
                       locale === 'hi' ? 'टूल्स को एकल जिम्मेदारी पर केंद्रित रखें' :
                       locale === 'fr' ? 'Gardez les outils concentrés sur une seule responsabilité' :
                       locale === 'de' ? 'Halten Sie Tools auf eine einzige Verantwortung fokussiert' :
                       locale === 'ja' ? 'ツールを単一の責任に集中させる' :
                       locale === 'ko' ? '도구를 단일 책임에 집중시키기' :
                       locale === 'es' ? 'Mantenga las herramientas enfocadas en una sola responsabilidad' :
                       locale === 'ru' ? 'Сосредоточьте инструменты на одной ответственности' :
                       'Keep tools focused on a single responsibility'}</li>
                <li>• {locale === 'zh' ? '提供清晰、描述性的名称和说明' :
                       locale === 'hi' ? 'स्पष्ट, वर्णनात्मक नाम और विवरण प्रदान करें' :
                       locale === 'fr' ? 'Fournissez des noms et descriptions clairs et descriptifs' :
                       locale === 'de' ? 'Stellen Sie klare, beschreibende Namen und Beschreibungen bereit' :
                       locale === 'ja' ? '明確で説明的な名前と説明を提供する' :
                       locale === 'ko' ? '명확하고 설명적인 이름과 설명 제공' :
                       locale === 'es' ? 'Proporcione nombres y descripciones claros y descriptivos' :
                       locale === 'ru' ? 'Предоставьте четкие, описательные имена и описания' :
                       'Provide clear, descriptive names and descriptions'}</li>
                <li>• {locale === 'zh' ? '定义全面的参数模式' :
                       locale === 'hi' ? 'व्यापक पैरामीटर स्कीमा परिभाषित करें' :
                       locale === 'fr' ? 'Définissez des schémas de paramètres complets' :
                       locale === 'de' ? 'Definieren Sie umfassende Parameter-Schemas' :
                       locale === 'ja' ? '包括的なパラメータスキーマを定義する' :
                       locale === 'ko' ? '포괄적인 매개변수 스키마 정의' :
                       locale === 'es' ? 'Defina esquemas de parámetros completos' :
                       locale === 'ru' ? 'Определите комплексные схемы параметров' :
                       'Define comprehensive parameter schemas'}</li>
                <li>• {locale === 'zh' ? '优雅地处理错误并提供有意义的消息' :
                       locale === 'hi' ? 'त्रुटियों को सुंदरता से संभालें और अर्थपूर्ण संदेश प्रदान करें' :
                       locale === 'fr' ? 'Gérez les erreurs avec élégance et fournissez des messages significatifs' :
                       locale === 'de' ? 'Behandeln Sie Fehler elegant und stellen Sie aussagekräftige Nachrichten bereit' :
                       locale === 'ja' ? 'エラーを優雅に処理し、意味のあるメッセージを提供する' :
                       locale === 'ko' ? '오류를 우아하게 처리하고 의미 있는 메시지 제공' :
                       locale === 'es' ? 'Maneje los errores con elegancia y proporcione mensajes significativos' :
                       locale === 'ru' ? 'Обрабатывайте ошибки изящно и предоставляйте значимые сообщения' :
                       'Handle errors gracefully with meaningful messages'}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? '性能' :
                 locale === 'hi' ? 'प्रदर्शन' :
                 locale === 'fr' ? 'Performance' :
                 locale === 'de' ? 'Leistung' :
                 locale === 'ja' ? 'パフォーマンス' :
                 locale === 'ko' ? '성능' :
                 locale === 'es' ? 'Rendimiento' :
                 locale === 'ru' ? 'Производительность' :
                 'Performance'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {locale === 'zh' ? '正确实现异步操作' :
                       locale === 'hi' ? 'एसिंक ऑपरेशन को सही तरीके से लागू करें' :
                       locale === 'fr' ? 'Implémentez correctement les opérations asynchrones' :
                       locale === 'de' ? 'Implementieren Sie asynchrone Operationen korrekt' :
                       locale === 'ja' ? '非同期操作を適切に実装する' :
                       locale === 'ko' ? '비동기 작업을 올바르게 구현' :
                       locale === 'es' ? 'Implemente las operaciones asíncronas correctamente' :
                       locale === 'ru' ? 'Правильно реализуйте асинхронные операции' :
                       'Implement async operations properly'}</li>
                <li>• {locale === 'zh' ? '为长时间操作添加超时处理' :
                       locale === 'hi' ? 'लंबे ऑपरेशन के लिए टाइमआउट हैंडलिंग जोड़ें' :
                       locale === 'fr' ? 'Ajoutez la gestion des délais d\'expiration pour les opérations longues' :
                       locale === 'de' ? 'Fügen Sie Timeout-Behandlung für lange Operationen hinzu' :
                       locale === 'ja' ? '長時間の操作にタイムアウト処理を追加する' :
                       locale === 'ko' ? '장시간 작업에 대한 타임아웃 처리 추가' :
                       locale === 'es' ? 'Agregue manejo de tiempo de espera para operaciones largas' :
                       locale === 'ru' ? 'Добавьте обработку таймаутов для длительных операций' :
                       'Add timeout handling for long operations'}</li>
                <li>• {locale === 'zh' ? '在适当时缓存结果' :
                       locale === 'hi' ? 'उपयुक्त होने पर परिणामों को कैश करें' :
                       locale === 'fr' ? 'Mettez en cache les résultats quand c\'est approprié' :
                       locale === 'de' ? 'Cachen Sie Ergebnisse wenn angemessen' :
                       locale === 'ja' ? '適切な場合は結果をキャッシュする' :
                       locale === 'ko' ? '적절할 때 결과 캐시' :
                       locale === 'es' ? 'Almacene en caché los resultados cuando sea apropiado' :
                       locale === 'ru' ? 'Кэшируйте результаты когда это уместно' :
                       'Cache results when appropriate'}</li>
                <li>• {locale === 'zh' ? '在处理前验证输入' :
                       locale === 'hi' ? 'प्रसंस्करण से पहले इनपुट को मान्य करें' :
                       locale === 'fr' ? 'Validez les entrées avant le traitement' :
                       locale === 'de' ? 'Validieren Sie Eingaben vor der Verarbeitung' :
                       locale === 'ja' ? '処理前に入力を検証する' :
                       locale === 'ko' ? '처리 전에 입력 검증' :
                       locale === 'es' ? 'Valide las entradas antes del procesamiento' :
                       locale === 'ru' ? 'Проверяйте входные данные перед обработкой' :
                       'Validate inputs before processing'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Related Resources */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.relatedResourcesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.relatedResourcesSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/tool-development`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {locale === 'zh' ? '工具开发指南' :
                 locale === 'hi' ? 'टूल विकास गाइड' :
                 locale === 'fr' ? 'Guide de Développement d\'Outils' :
                 locale === 'de' ? 'Tool-Entwicklungshandbuch' :
                 locale === 'ja' ? 'ツール開発ガイド' :
                 locale === 'ko' ? '도구 개발 가이드' :
                 locale === 'es' ? 'Guía de Desarrollo de Herramientas' :
                 locale === 'ru' ? 'Руководство по Разработке Инструментов' :
                 'Tool Development Guide'}
              </Link>
              <Link
                href={`/${locale}/docs/built-in-tools`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {locale === 'zh' ? '内置工具参考' :
                 locale === 'hi' ? 'अंतर्निहित टूल्स संदर्भ' :
                 locale === 'fr' ? 'Référence des Outils Intégrés' :
                 locale === 'de' ? 'Eingebaute Tools Referenz' :
                 locale === 'ja' ? '組み込みツールリファレンス' :
                 locale === 'ko' ? '내장 도구 참조' :
                 locale === 'es' ? 'Referencia de Herramientas Integradas' :
                 locale === 'ru' ? 'Справочник Встроенных Инструментов' :
                 'Built-in Tools Reference'}
              </Link>
              <Link
                href={`/${locale}/docs/core-api`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '核心 API' :
                 locale === 'hi' ? 'कोर API' :
                 locale === 'fr' ? 'API Core' :
                 locale === 'de' ? 'Core API' :
                 locale === 'ja' ? 'コアAPI' :
                 locale === 'ko' ? '코어 API' :
                 locale === 'es' ? 'API Core' :
                 locale === 'ru' ? 'Core API' :
                 'Core API'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'hi' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'es' },
    { locale: 'ru' }
  ]
}
