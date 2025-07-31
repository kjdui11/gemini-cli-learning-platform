import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  PuzzlePieceIcon, 
  CogIcon, 
  CheckCircleIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  PlayIcon,
  ServerIcon,
  CommandLineIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '插件 API 文档 | Gemini CLI 开发者文档',
    en: 'Plugin API Documentation | Gemini CLI Developer Documentation',
    hi: 'प्लगइन API दस्तावेज़ीकरण | Gemini CLI डेवलपर दस्तावेज़ीकरण',
    fr: 'Documentation API Plugin | Documentation Développeur Gemini CLI',
    de: 'Plugin API Dokumentation | Gemini CLI Entwicklerdokumentation',
    ja: 'プラグイン API ドキュメント | Gemini CLI 開発者ドキュメント',
    ko: '플러그인 API 문서 | Gemini CLI 개발자 문서',
    es: 'Documentación API Plugin | Documentación Desarrollador Gemini CLI',
    ru: 'Документация API плагинов | Документация разработчика Gemini CLI'
  }

  const descriptions = {
    zh: '完整的 Gemini CLI 插件开发指南，包括 MCP 服务器、自定义工具和插件开发。',
    en: 'Complete guide to extending Gemini CLI with MCP servers, custom tools, and plugin development.',
    hi: 'MCP सर्वर, कस्टम टूल्स और प्लगइन डेवलपमेंट के साथ Gemini CLI को बढ़ाने के लिए पूर्ण गाइड।',
    fr: 'Guide complet pour étendre Gemini CLI avec des serveurs MCP, des outils personnalisés et le développement de plugins.',
    de: 'Vollständiger Leitfaden zur Erweiterung von Gemini CLI mit MCP-Servern, benutzerdefinierten Tools und Plugin-Entwicklung.',
    ja: 'MCP サーバー、カスタムツール、プラグイン開発で Gemini CLI を拡張するための完全ガイド。',
    ko: 'MCP 서버, 사용자 정의 도구 및 플러그인 개발로 Gemini CLI를 확장하는 완전한 가이드.',
    es: 'Guía completa para extender Gemini CLI con servidores MCP, herramientas personalizadas y desarrollo de plugins.',
    ru: 'Полное руководство по расширению Gemini CLI с помощью MCP-серверов, пользовательских инструментов и разработки плагинов.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 插件 API, MCP 服务器, 模型上下文协议, 插件开发, 扩展, 工具' : 'Gemini CLI Plugin API, MCP servers, Model Context Protocol, plugin development, extensions, tools',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

// MCP Server Types
const mcpServerTypes = [
  {
    id: 'filesystem',
    name: {
      zh: '文件系统服务器',
      en: 'File System Servers',
      hi: 'फ़ाइल सिस्टम सर्वर',
      fr: 'Serveurs de Système de Fichiers',
      de: 'Dateisystem-Server',
      ja: 'ファイルシステムサーバー',
      ko: '파일 시스템 서버',
      es: 'Servidores de Sistema de Archivos',
      ru: 'Серверы файловой системы'
    },
    description: {
      zh: '提供文件系统访问和操作的服务器',
      en: 'Servers that provide file system access and operations',
      hi: 'फ़ाइल सिस्टम एक्सेस और ऑपरेशन प्रदान करने वाले सर्वर',
      fr: 'Serveurs qui fournissent l\'accès et les opérations du système de fichiers',
      de: 'Server, die Dateisystemzugriff und -operationen bereitstellen',
      ja: 'ファイルシステムアクセスと操作を提供するサーバー',
      ko: '파일 시스템 액세스 및 작업을 제공하는 서버',
      es: 'Servidores que proporcionan acceso y operaciones del sistema de archivos',
      ru: 'Серверы, предоставляющие доступ к файловой системе и операции'
    },
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-indigo-600',
    examples: [
      {
        name: 'filesystem',
        description: {
          zh: '读取、写入和管理文件和目录',
          en: 'Read, write, and manage files and directories',
          hi: 'फ़ाइलों और डायरेक्टरियों को पढ़ें, लिखें और प्रबंधित करें',
          fr: 'Lire, écrire et gérer les fichiers et répertoires',
          de: 'Dateien und Verzeichnisse lesen, schreiben und verwalten',
          ja: 'ファイルとディレクトリの読み取り、書き込み、管理',
          ko: '파일 및 디렉토리 읽기, 쓰기 및 관리',
          es: 'Leer, escribir y gestionar archivos y directorios',
          ru: 'Чтение, запись и управление файлами и каталогами'
        },
        capabilities: ['read_file', 'write_file', 'list_directory', 'create_directory']
      },
      {
        name: 'git',
        description: {
          zh: 'Git 仓库操作和版本控制',
          en: 'Git repository operations and version control',
          hi: 'Git रिपॉजिटरी ऑपरेशन और वर्जन कंट्रोल',
          fr: 'Opérations de dépôt Git et contrôle de version',
          de: 'Git-Repository-Operationen und Versionskontrolle',
          ja: 'Gitリポジトリ操作とバージョン管理',
          ko: 'Git 저장소 작업 및 버전 제어',
          es: 'Operaciones de repositorio Git y control de versiones',
          ru: 'Операции Git-репозитория и контроль версий'
        },
        capabilities: ['git_status', 'git_commit', 'git_branch', 'git_log']
      }
    ]
  },
  {
    id: 'web',
    name: {
      zh: 'Web 和 API 服务器',
      en: 'Web & API Servers',
      hi: 'वेब और API सर्वर',
      fr: 'Serveurs Web et API',
      de: 'Web- und API-Server',
      ja: 'WebおよびAPIサーバー',
      ko: '웹 및 API 서버',
      es: 'Servidores Web y API',
      ru: 'Веб и API серверы'
    },
    description: {
      zh: '与 Web 服务和 API 交互的服务器',
      en: 'Servers that interact with web services and APIs',
      hi: 'वेब सेवाओं और API के साथ इंटरैक्ट करने वाले सर्वर',
      fr: 'Serveurs qui interagissent avec les services web et les API',
      de: 'Server, die mit Webdiensten und APIs interagieren',
      ja: 'WebサービスやAPIと連携するサーバー',
      ko: '웹 서비스 및 API와 상호 작용하는 서버',
      es: 'Servidores que interactúan con servicios web y APIs',
      ru: 'Серверы, взаимодействующие с веб-сервисами и API'
    },
    icon: GlobeAltIcon,
    color: 'from-green-500 to-emerald-600',
    examples: [
      {
        name: 'web-search',
        description: {
          zh: '搜索网络并检索信息',
          en: 'Search the web and retrieve information',
          hi: 'वेब खोजें और जानकारी प्राप्त करें',
          fr: 'Rechercher sur le web et récupérer des informations',
          de: 'Das Web durchsuchen und Informationen abrufen',
          ja: 'ウェブを検索して情報を取得',
          ko: '웹 검색 및 정보 검색',
          es: 'Buscar en la web y recuperar información',
          ru: 'Поиск в интернете и получение информации'
        },
        capabilities: ['web_search', 'fetch_url', 'extract_content']
      },
      {
        name: 'github',
        description: {
          zh: 'GitHub API 集成用于仓库管理',
          en: 'GitHub API integration for repository management',
          hi: 'रिपॉजिटरी प्रबंधन के लिए GitHub API एकीकरण',
          fr: 'Intégration API GitHub pour la gestion de dépôts',
          de: 'GitHub API-Integration für Repository-Management',
          ja: 'リポジトリ管理のためのGitHub API統合',
          ko: '저장소 관리를 위한 GitHub API 통합',
          es: 'Integración de API de GitHub para gestión de repositorios',
          ru: 'Интеграция GitHub API для управления репозиториями'
        },
        capabilities: ['list_repos', 'create_issue', 'get_pull_requests']
      }
    ]
  },
  {
    id: 'database',
    name: {
      zh: '数据库服务器',
      en: 'Database Servers',
      hi: 'डेटाबेस सर्वर',
      fr: 'Serveurs de Base de Données',
      de: 'Datenbankserver',
      ja: 'データベースサーバー',
      ko: '데이터베이스 서버',
      es: 'Servidores de Base de Datos',
      ru: 'Серверы баз данных'
    },
    description: {
      zh: '提供数据库连接和操作的服务器',
      en: 'Servers that provide database connectivity and operations',
      hi: 'डेटाबेस कनेक्टिविटी और ऑपरेशन प्रदान करने वाले सर्वर',
      fr: 'Serveurs qui fournissent la connectivité et les opérations de base de données',
      de: 'Server, die Datenbankverbindungen und -operationen bereitstellen',
      ja: 'データベース接続と操作を提供するサーバー',
      ko: '데이터베이스 연결 및 작업을 제공하는 서버',
      es: 'Servidores que proporcionan conectividad y operaciones de base de datos',
      ru: 'Серверы, предоставляющие подключение к базе данных и операции'
    },
    icon: ServerIcon,
    color: 'from-purple-500 to-pink-600',
    examples: [
      {
        name: 'sqlite',
        description: {
          zh: 'SQLite 数据库操作',
          en: 'SQLite database operations',
          hi: 'SQLite डेटाबेस ऑपरेशन',
          fr: 'Opérations de base de données SQLite',
          de: 'SQLite-Datenbankoperationen',
          ja: 'SQLiteデータベース操作',
          ko: 'SQLite 데이터베이스 작업',
          es: 'Operaciones de base de datos SQLite',
          ru: 'Операции базы данных SQLite'
        },
        capabilities: ['execute_query', 'create_table', 'insert_data']
      },
      {
        name: 'postgres',
        description: {
          zh: 'PostgreSQL 数据库集成',
          en: 'PostgreSQL database integration',
          hi: 'PostgreSQL डेटाबेस एकीकरण',
          fr: 'Intégration de base de données PostgreSQL',
          de: 'PostgreSQL-Datenbankintegration',
          ja: 'PostgreSQLデータベース統合',
          ko: 'PostgreSQL 데이터베이스 통합',
          es: 'Integración de base de datos PostgreSQL',
          ru: 'Интеграция базы данных PostgreSQL'
        },
        capabilities: ['query', 'transaction', 'schema_info']
      }
    ]
  }
]

// MCP Configuration Examples
const mcpConfigExamples = {
  basic: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
    },
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git", "--repository", "/path/to/repo"]
    },
    "web-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-web-search"]
    }
  }
}`,
  advanced: `{
  "mcpServers": {
    "custom-database": {
      "command": "node",
      "args": ["./custom-mcp-server.js"],
      "env": {
        "DATABASE_URL": "postgresql://localhost:5432/mydb",
        "API_KEY": "your-api-key"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-github-token"
      }
    }
  }
}`,
  development: `{
  "mcpServers": {
    "local-dev": {
      "command": "node",
      "args": ["./dev-server.js"],
      "cwd": "/path/to/development/server",
      "env": {
        "NODE_ENV": "development",
        "DEBUG": "mcp:*"
      }
    }
  }
}`
}

// Custom MCP Server Development Example
const customMcpServerExample = {
  zh: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // 列出可用工具
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: '执行特定操作的自定义工具',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: '自定义操作的输入',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // 处理工具调用
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`自定义操作结果: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`未知工具: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // 您的自定义逻辑在这里
    return \`已处理: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('自定义 MCP 服务器在 stdio 上运行');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  en: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: 'A custom tool that performs specific operations',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'Input for the custom operation',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`Custom operation result: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`Unknown tool: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // Your custom logic here
    return \`Processed: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Custom MCP server running on stdio');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  hi: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // उपलब्ध टूल्स की सूची बनाएं
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: 'विशिष्ट ऑपरेशन करने वाला कस्टम टूल',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'कस्टम ऑपरेशन के लिए इनपुट',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // टूल कॉल्स को हैंडल करें
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`कस्टम ऑपरेशन परिणाम: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`अज्ञात टूल: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // आपका कस्टम लॉजिक यहाँ
    return \`प्रोसेस किया गया: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('कस्टम MCP सर्वर stdio पर चल रहा है');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  fr: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // Lister les outils disponibles
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: 'Un outil personnalisé qui effectue des opérations spécifiques',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'Entrée pour l\'opération personnalisée',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // Gérer les appels d'outils
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`Résultat de l'opération personnalisée: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`Outil inconnu: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // Votre logique personnalisée ici
    return \`Traité: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Serveur MCP personnalisé en cours d\'exécution sur stdio');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  de: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // Verfügbare Tools auflisten
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: 'Ein benutzerdefiniertes Tool, das spezifische Operationen durchführt',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'Eingabe für die benutzerdefinierte Operation',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // Tool-Aufrufe behandeln
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`Ergebnis der benutzerdefinierten Operation: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`Unbekanntes Tool: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // Ihre benutzerdefinierte Logik hier
    return \`Verarbeitet: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Benutzerdefinierter MCP-Server läuft auf stdio');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  ja: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // 利用可能なツールをリスト
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: '特定の操作を実行するカスタムツール',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'カスタム操作の入力',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // ツール呼び出しを処理
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`カスタム操作の結果: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`不明なツール: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // あなたのカスタムロジックをここに
    return \`処理済み: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('カスタムMCPサーバーがstdioで実行中');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  ko: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // 사용 가능한 도구 나열
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: '특정 작업을 수행하는 사용자 정의 도구',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: '사용자 정의 작업을 위한 입력',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // 도구 호출 처리
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`사용자 정의 작업 결과: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`알 수 없는 도구: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // 여기에 사용자 정의 로직
    return \`처리됨: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('사용자 정의 MCP 서버가 stdio에서 실행 중');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  es: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // Listar herramientas disponibles
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: 'Una herramienta personalizada que realiza operaciones específicas',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'Entrada para la operación personalizada',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // Manejar llamadas de herramientas
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`Resultado de operación personalizada: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`Herramienta desconocida: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // Su lógica personalizada aquí
    return \`Procesado: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Servidor MCP personalizado ejecutándose en stdio');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`,
  ru: `#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class CustomMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'custom-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // Список доступных инструментов
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'custom_tool',
            description: 'Пользовательский инструмент, выполняющий специфические операции',
            inputSchema: {
              type: 'object',
              properties: {
                input: {
                  type: 'string',
                  description: 'Входные данные для пользовательской операции',
                },
              },
              required: ['input'],
            },
          },
        ],
      };
    });

    // Обработка вызовов инструментов
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'custom_tool') {
        const result = await this.performCustomOperation(args.input);
        return {
          content: [
            {
              type: 'text',
              text: \`Результат пользовательской операции: \${result}\`,
            },
          ],
        };
      }

      throw new Error(\`Неизвестный инструмент: \${name}\`);
    });
  }

  async performCustomOperation(input) {
    // Ваша пользовательская логика здесь
    return \`Обработано: \${input}\`;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Пользовательский MCP сервер работает на stdio');
  }
}

const server = new CustomMCPServer();
server.run().catch(console.error);`
}

export default async function PluginAPIPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {locale === 'zh' ? '插件 API' :
               locale === 'hi' ? 'प्लगइन API' :
               locale === 'fr' ? 'API Plugin' :
               locale === 'de' ? 'Plugin API' :
               locale === 'ja' ? 'プラグイン API' :
               locale === 'ko' ? '플러그인 API' :
               locale === 'es' ? 'API Plugin' :
               locale === 'ru' ? 'API плагинов' :
               'Plugin API'}
            </h1>
            <p className="mt-6 text-xl leading-8 text-purple-100">
              {locale === 'zh'
                ? '使用 MCP 服务器、自定义工具和强大的集成扩展 Gemini CLI。通过模型上下文协议连接到数据库、API、文件系统等。'
                : locale === 'hi'
                ? 'MCP सर्वर, कस्टम टूल्स और शक्तिशाली एकीकरण के साथ Gemini CLI का विस्तार करें। मॉडल कॉन्टेक्स्ट प्रोटोकॉल का उपयोग करके डेटाबेस, API, फ़ाइल सिस्टम और अधिक से कनेक्ट करें।'
                : locale === 'fr'
                ? 'Étendez Gemini CLI avec des serveurs MCP, des outils personnalisés et des intégrations puissantes. Connectez-vous aux bases de données, API, systèmes de fichiers et plus encore en utilisant le protocole de contexte de modèle.'
                : locale === 'de'
                ? 'Erweitern Sie Gemini CLI mit MCP-Servern, benutzerdefinierten Tools und leistungsstarken Integrationen. Verbinden Sie sich mit Datenbanken, APIs, Dateisystemen und mehr über das Model Context Protocol.'
                : locale === 'ja'
                ? 'MCPサーバー、カスタムツール、強力な統合でGemini CLIを拡張します。Model Context Protocolを使用してデータベース、API、ファイルシステムなどに接続します。'
                : locale === 'ko'
                ? 'MCP 서버, 사용자 정의 도구 및 강력한 통합으로 Gemini CLI를 확장하세요. Model Context Protocol을 사용하여 데이터베이스, API, 파일 시스템 등에 연결하세요.'
                : locale === 'es'
                ? 'Extienda Gemini CLI con servidores MCP, herramientas personalizadas e integraciones potentes. Conéctese a bases de datos, APIs, sistemas de archivos y más usando el Protocolo de Contexto de Modelo.'
                : locale === 'ru'
                ? 'Расширьте Gemini CLI с помощью MCP-серверов, пользовательских инструментов и мощных интеграций. Подключайтесь к базам данных, API, файловым системам и многому другому, используя протокол контекста модели.'
                : 'Extend Gemini CLI with MCP servers, custom tools, and powerful integrations. Connect to databases, APIs, file systems, and more using the Model Context Protocol.'
              }
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-purple-100">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? 'MCP 协议' :
                 locale === 'hi' ? 'MCP प्रोटोकॉल' :
                 locale === 'fr' ? 'Protocole MCP' :
                 locale === 'de' ? 'MCP-Protokoll' :
                 locale === 'ja' ? 'MCPプロトコル' :
                 locale === 'ko' ? 'MCP 프로토콜' :
                 locale === 'es' ? 'Protocolo MCP' :
                 locale === 'ru' ? 'Протокол MCP' :
                 'MCP Protocol'}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? '自定义服务器' :
                 locale === 'hi' ? 'कस्टम सर्वर' :
                 locale === 'fr' ? 'Serveurs Personnalisés' :
                 locale === 'de' ? 'Benutzerdefinierte Server' :
                 locale === 'ja' ? 'カスタムサーバー' :
                 locale === 'ko' ? '사용자 정의 서버' :
                 locale === 'es' ? 'Servidores Personalizados' :
                 locale === 'ru' ? 'Пользовательские серверы' :
                 'Custom Servers'}
              </span>
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? '工具集成' :
                 locale === 'hi' ? 'टूल एकीकरण' :
                 locale === 'fr' ? 'Intégration d\'Outils' :
                 locale === 'de' ? 'Tool-Integration' :
                 locale === 'ja' ? 'ツール統合' :
                 locale === 'ko' ? '도구 통합' :
                 locale === 'es' ? 'Integración de Herramientas' :
                 locale === 'ru' ? 'Интеграция инструментов' :
                 'Tool Integration'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '扩展架构' :
               locale === 'hi' ? 'एक्सटेंशन आर्किटेक्चर' :
               locale === 'fr' ? 'Architecture d\'Extension' :
               locale === 'de' ? 'Erweiterungsarchitektur' :
               locale === 'ja' ? '拡張アーキテクチャ' :
               locale === 'ko' ? '확장 아키텍처' :
               locale === 'es' ? 'Arquitectura de Extensión' :
               locale === 'ru' ? 'Архитектура расширений' :
               'Extension Architecture'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh'
                ? 'Gemini CLI 使用模型上下文协议 (MCP) 提供标准化的方式来连接 AI 助手与外部工具和数据源。'
                : locale === 'hi'
                ? 'Gemini CLI मॉडल कॉन्टेक्स्ट प्रोटोकॉल (MCP) का उपयोग करके AI असिस्टेंट को बाहरी टूल्स और डेटा स्रोतों से जोड़ने का मानकीकृत तरीका प्रदान करता है।'
                : locale === 'fr'
                ? 'Gemini CLI utilise le protocole de contexte de modèle (MCP) pour fournir un moyen standardisé de connecter les assistants IA avec des outils externes et des sources de données.'
                : locale === 'de'
                ? 'Gemini CLI verwendet das Model Context Protocol (MCP), um eine standardisierte Möglichkeit zu bieten, KI-Assistenten mit externen Tools und Datenquellen zu verbinden.'
                : locale === 'ja'
                ? 'Gemini CLIはModel Context Protocol (MCP)を使用して、AIアシスタントを外部ツールやデータソースと接続する標準化された方法を提供します。'
                : locale === 'ko'
                ? 'Gemini CLI는 Model Context Protocol (MCP)을 사용하여 AI 어시스턴트를 외부 도구 및 데이터 소스와 연결하는 표준화된 방법을 제공합니다.'
                : locale === 'es'
                ? 'Gemini CLI utiliza el Protocolo de Contexto de Modelo (MCP) para proporcionar una forma estandarizada de conectar asistentes de IA con herramientas externas y fuentes de datos.'
                : locale === 'ru'
                ? 'Gemini CLI использует протокол контекста модели (MCP) для предоставления стандартизированного способа подключения ИИ-помощников к внешним инструментам и источникам данных.'
                : 'Gemini CLI uses the Model Context Protocol (MCP) to provide a standardized way to connect AI assistants with external tools and data sources.'
              }
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mx-auto mb-4">
                  <ServerIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'zh' ? 'MCP 服务器' :
                   locale === 'hi' ? 'MCP सर्वर' :
                   locale === 'fr' ? 'Serveurs MCP' :
                   locale === 'de' ? 'MCP-Server' :
                   locale === 'ja' ? 'MCPサーバー' :
                   locale === 'ko' ? 'MCP 서버' :
                   locale === 'es' ? 'Servidores MCP' :
                   locale === 'ru' ? 'MCP серверы' :
                   'MCP Servers'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh'
                    ? '通过模型上下文协议公开工具和资源的独立进程'
                    : locale === 'hi'
                    ? 'मॉडल कॉन्टेक्स्ट प्रोटोकॉल के माध्यम से टूल्स और संसाधनों को उजागर करने वाली स्वतंत्र प्रक्रियाएं'
                    : locale === 'fr'
                    ? 'Processus autonomes qui exposent des outils et des ressources via le protocole de contexte de modèle'
                    : locale === 'de'
                    ? 'Eigenständige Prozesse, die Tools und Ressourcen über das Model Context Protocol bereitstellen'
                    : locale === 'ja'
                    ? 'Model Context Protocolを通じてツールとリソースを公開するスタンドアロンプロセス'
                    : locale === 'ko'
                    ? 'Model Context Protocol을 통해 도구와 리소스를 노출하는 독립적인 프로세스'
                    : locale === 'es'
                    ? 'Procesos independientes que exponen herramientas y recursos a través del Protocolo de Contexto de Modelo'
                    : locale === 'ru'
                    ? 'Автономные процессы, которые предоставляют инструменты и ресурсы через протокол контекста модели'
                    : 'Standalone processes that expose tools and resources through the Model Context Protocol'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mx-auto mb-4">
                  <PuzzlePieceIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'zh' ? '工具集成' :
                   locale === 'hi' ? 'टूल एकीकरण' :
                   locale === 'fr' ? 'Intégration d\'Outils' :
                   locale === 'de' ? 'Tool-Integration' :
                   locale === 'ja' ? 'ツール統合' :
                   locale === 'ko' ? '도구 통합' :
                   locale === 'es' ? 'Integración de Herramientas' :
                   locale === 'ru' ? 'Интеграция инструментов' :
                   'Tool Integration'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh'
                    ? '将外部工具和服务无缝集成到您的 AI 工作流程中'
                    : locale === 'hi'
                    ? 'बाहरी टूल्स और सेवाओं को अपने AI वर्कफ़्लो में निर्बाध रूप से एकीकृत करें'
                    : locale === 'fr'
                    ? 'Intégrez de manière transparente des outils et services externes dans vos flux de travail IA'
                    : locale === 'de'
                    ? 'Integrieren Sie externe Tools und Services nahtlos in Ihre KI-Workflows'
                    : locale === 'ja'
                    ? '外部ツールやサービスをAIワークフローにシームレスに統合'
                    : locale === 'ko'
                    ? '외부 도구와 서비스를 AI 워크플로우에 원활하게 통합'
                    : locale === 'es'
                    ? 'Integre sin problemas herramientas y servicios externos en sus flujos de trabajo de IA'
                    : locale === 'ru'
                    ? 'Бесшовно интегрируйте внешние инструменты и сервисы в ваши ИИ-рабочие процессы'
                    : 'Seamlessly integrate external tools and services into your AI workflows'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white mx-auto mb-4">
                  <CodeBracketIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {locale === 'zh' ? '自定义开发' :
                   locale === 'hi' ? 'कस्टम डेवलपमेंट' :
                   locale === 'fr' ? 'Développement Personnalisé' :
                   locale === 'de' ? 'Benutzerdefinierte Entwicklung' :
                   locale === 'ja' ? 'カスタム開発' :
                   locale === 'ko' ? '사용자 정의 개발' :
                   locale === 'es' ? 'Desarrollo Personalizado' :
                   locale === 'ru' ? 'Пользовательская разработка' :
                   'Custom Development'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh'
                    ? '构建您自己的 MCP 服务器以使用自定义功能扩展 Gemini CLI'
                    : locale === 'hi'
                    ? 'कस्टम कार्यक्षमता के साथ Gemini CLI का विस्तार करने के लिए अपने स्वयं के MCP सर्वर बनाएं'
                    : locale === 'fr'
                    ? 'Construisez vos propres serveurs MCP pour étendre Gemini CLI avec des fonctionnalités personnalisées'
                    : locale === 'de'
                    ? 'Erstellen Sie Ihre eigenen MCP-Server, um Gemini CLI mit benutzerdefinierten Funktionen zu erweitern'
                    : locale === 'ja'
                    ? 'カスタム機能でGemini CLIを拡張するための独自のMCPサーバーを構築'
                    : locale === 'ko'
                    ? '사용자 정의 기능으로 Gemini CLI를 확장하기 위한 자체 MCP 서버 구축'
                    : locale === 'es'
                    ? 'Construya sus propios servidores MCP para extender Gemini CLI con funcionalidad personalizada'
                    : locale === 'ru'
                    ? 'Создавайте собственные MCP-серверы для расширения Gemini CLI пользовательской функциональностью'
                    : 'Build your own MCP servers to extend Gemini CLI with custom functionality'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MCP Server Types */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? 'MCP 服务器类型' :
               locale === 'hi' ? 'MCP सर्वर प्रकार' :
               locale === 'fr' ? 'Types de Serveurs MCP' :
               locale === 'de' ? 'MCP-Server-Typen' :
               locale === 'ja' ? 'MCPサーバータイプ' :
               locale === 'ko' ? 'MCP 서버 유형' :
               locale === 'es' ? 'Tipos de Servidores MCP' :
               locale === 'ru' ? 'Типы MCP серверов' :
               'MCP Server Types'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '探索不同类型的 MCP 服务器及其功能' :
               locale === 'hi' ? 'विभिन्न प्रकार के MCP सर्वर और उनकी क्षमताओं का अन्वेषण करें' :
               locale === 'fr' ? 'Explorez différents types de serveurs MCP et leurs capacités' :
               locale === 'de' ? 'Erkunden Sie verschiedene Arten von MCP-Servern und ihre Fähigkeiten' :
               locale === 'ja' ? '異なるタイプのMCPサーバーとその機能を探索' :
               locale === 'ko' ? '다양한 유형의 MCP 서버와 그 기능 탐색' :
               locale === 'es' ? 'Explore diferentes tipos de servidores MCP y sus capacidades' :
               locale === 'ru' ? 'Изучите различные типы MCP-серверов и их возможности' :
               'Explore different types of MCP servers and their capabilities'}
            </p>
          </div>

          <div className="space-y-12">
            {mcpServerTypes.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.name[locale as keyof typeof category.name]}
                    </h3>
                    <p className="text-gray-600">
                      {category.description[locale as keyof typeof category.description]}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {example.name}
                        </code>
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">
                        {example.description[locale as keyof typeof example.description]}
                      </p>

                      <div>
                        <h5 className="text-xs font-medium text-gray-900 mb-2">
                          {locale === 'zh' ? '功能:' :
                           locale === 'hi' ? 'क्षमताएं:' :
                           locale === 'fr' ? 'Capacités:' :
                           locale === 'de' ? 'Fähigkeiten:' :
                           locale === 'ja' ? '機能:' :
                           locale === 'ko' ? '기능:' :
                           locale === 'es' ? 'Capacidades:' :
                           locale === 'ru' ? 'Возможности:' :
                           'Capabilities:'}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {example.capabilities.map((capability, capIndex) => (
                            <span key={capIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                              {capability}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration Examples */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '配置示例' :
               locale === 'hi' ? 'कॉन्फ़िगरेशन उदाहरण' :
               locale === 'fr' ? 'Exemples de Configuration' :
               locale === 'de' ? 'Konfigurationsbeispiele' :
               locale === 'ja' ? '設定例' :
               locale === 'ko' ? '구성 예제' :
               locale === 'es' ? 'Ejemplos de Configuración' :
               locale === 'ru' ? 'Примеры конфигурации' :
               'Configuration Examples'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '了解如何在 Gemini CLI 设置中配置 MCP 服务器' :
               locale === 'hi' ? 'अपने Gemini CLI सेटअप में MCP सर्वर को कॉन्फ़िगर करना सीखें' :
               locale === 'fr' ? 'Apprenez à configurer les serveurs MCP dans votre configuration Gemini CLI' :
               locale === 'de' ? 'Erfahren Sie, wie Sie MCP-Server in Ihrer Gemini CLI-Einrichtung konfigurieren' :
               locale === 'ja' ? 'Gemini CLI設定でMCPサーバーを設定する方法を学ぶ' :
               locale === 'ko' ? 'Gemini CLI 설정에서 MCP 서버를 구성하는 방법 알아보기' :
               locale === 'es' ? 'Aprenda a configurar servidores MCP en su configuración de Gemini CLI' :
               locale === 'ru' ? 'Узнайте, как настроить MCP-серверы в вашей конфигурации Gemini CLI' :
               'Learn how to configure MCP servers in your Gemini CLI setup'}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '基本配置' :
                 locale === 'hi' ? 'बुनियादी कॉन्फ़िगरेशन' :
                 locale === 'fr' ? 'Configuration de Base' :
                 locale === 'de' ? 'Grundkonfiguration' :
                 locale === 'ja' ? '基本設定' :
                 locale === 'ko' ? '기본 구성' :
                 locale === 'es' ? 'Configuración Básica' :
                 locale === 'ru' ? 'Базовая конфигурация' :
                 'Basic Configuration'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '将 MCP 服务器添加到您的 '
                  : locale === 'hi'
                  ? 'अपनी '
                  : locale === 'fr'
                  ? 'Ajoutez des serveurs MCP à votre fichier '
                  : locale === 'de'
                  ? 'Fügen Sie MCP-Server zu Ihrer '
                  : locale === 'ja'
                  ? 'MCPサーバーを '
                  : locale === 'ko'
                  ? 'MCP 서버를 '
                  : locale === 'es'
                  ? 'Agregue servidores MCP a su archivo '
                  : locale === 'ru'
                  ? 'Добавьте MCP-серверы в ваш файл '
                  : 'Add MCP servers to your '
                }
                <code className="bg-gray-100 px-2 py-1 rounded">.gemini/config.json</code>
                {locale === 'zh' ? ' 文件:' :
                 locale === 'hi' ? ' फ़ाइल में MCP सर्वर जोड़ें:' :
                 locale === 'fr' ? ' :' :
                 locale === 'de' ? '-Datei hinzu:' :
                 locale === 'ja' ? 'ファイルに追加:' :
                 locale === 'ko' ? ' 파일에 추가:' :
                 locale === 'es' ? ' :' :
                 locale === 'ru' ? ' :' :
                 ' file:'}
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{mcpConfigExamples.basic}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '高级配置' :
                 locale === 'hi' ? 'उन्नत कॉन्फ़िगरेशन' :
                 locale === 'fr' ? 'Configuration Avancée' :
                 locale === 'de' ? 'Erweiterte Konfiguration' :
                 locale === 'ja' ? '高度な設定' :
                 locale === 'ko' ? '고급 구성' :
                 locale === 'es' ? 'Configuración Avanzada' :
                 locale === 'ru' ? 'Расширенная конфигурация' :
                 'Advanced Configuration'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '使用环境变量和高级选项配置自定义服务器:'
                  : locale === 'hi'
                  ? 'पर्यावरण चर और उन्नत विकल्पों के साथ कस्टम सर्वर कॉन्फ़िगर करें:'
                  : locale === 'fr'
                  ? 'Configurez des serveurs personnalisés avec des variables d\'environnement et des options avancées :'
                  : locale === 'de'
                  ? 'Konfigurieren Sie benutzerdefinierte Server mit Umgebungsvariablen und erweiterten Optionen:'
                  : locale === 'ja'
                  ? '環境変数と高度なオプションでカスタムサーバーを設定:'
                  : locale === 'ko'
                  ? '환경 변수 및 고급 옵션으로 사용자 정의 서버 구성:'
                  : locale === 'es'
                  ? 'Configure servidores personalizados con variables de entorno y opciones avanzadas:'
                  : locale === 'ru'
                  ? 'Настройте пользовательские серверы с переменными окружения и расширенными опциями:'
                  : 'Configure custom servers with environment variables and advanced options:'
                }
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{mcpConfigExamples.advanced}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '开发配置' :
                 locale === 'hi' ? 'डेवलपमेंट कॉन्फ़िगरेशन' :
                 locale === 'fr' ? 'Configuration de Développement' :
                 locale === 'de' ? 'Entwicklungskonfiguration' :
                 locale === 'ja' ? '開発設定' :
                 locale === 'ko' ? '개발 구성' :
                 locale === 'es' ? 'Configuración de Desarrollo' :
                 locale === 'ru' ? 'Конфигурация разработки' :
                 'Development Configuration'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '用于本地开发和调试的配置:'
                  : locale === 'hi'
                  ? 'स्थानीय विकास और डिबगिंग के लिए कॉन्फ़िगरेशन:'
                  : locale === 'fr'
                  ? 'Configuration pour le développement local et le débogage :'
                  : locale === 'de'
                  ? 'Konfiguration für lokale Entwicklung und Debugging:'
                  : locale === 'ja'
                  ? 'ローカル開発とデバッグのための設定:'
                  : locale === 'ko'
                  ? '로컬 개발 및 디버깅을 위한 구성:'
                  : locale === 'es'
                  ? 'Configuración para desarrollo local y depuración:'
                  : locale === 'ru'
                  ? 'Конфигурация для локальной разработки и отладки:'
                  : 'Configuration for local development and debugging:'
                }
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{mcpConfigExamples.development}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Custom MCP Server Development */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '自定义 MCP 服务器开发' :
               locale === 'hi' ? 'कस्टम MCP सर्वर डेवलपमेंट' :
               locale === 'fr' ? 'Développement de Serveur MCP Personnalisé' :
               locale === 'de' ? 'Benutzerdefinierte MCP-Server-Entwicklung' :
               locale === 'ja' ? 'カスタムMCPサーバー開発' :
               locale === 'ko' ? '사용자 정의 MCP 서버 개발' :
               locale === 'es' ? 'Desarrollo de Servidor MCP Personalizado' :
               locale === 'ru' ? 'Разработка пользовательского MCP-сервера' :
               'Custom MCP Server Development'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh'
                ? '构建您自己的 MCP 服务器以使用自定义功能扩展 Gemini CLI'
                : locale === 'hi'
                ? 'कस्टम कार्यक्षमता के साथ Gemini CLI का विस्तार करने के लिए अपना स्वयं का MCP सर्वर बनाएं'
                : locale === 'fr'
                ? 'Construisez votre propre serveur MCP pour étendre Gemini CLI avec des fonctionnalités personnalisées'
                : locale === 'de'
                ? 'Erstellen Sie Ihren eigenen MCP-Server, um Gemini CLI mit benutzerdefinierten Funktionen zu erweitern'
                : locale === 'ja'
                ? 'カスタム機能でGemini CLIを拡張するための独自のMCPサーバーを構築'
                : locale === 'ko'
                ? '사용자 정의 기능으로 Gemini CLI를 확장하기 위한 자체 MCP 서버 구축'
                : locale === 'es'
                ? 'Construya su propio servidor MCP para extender Gemini CLI con funcionalidad personalizada'
                : locale === 'ru'
                ? 'Создайте собственный MCP-сервер для расширения Gemini CLI пользовательской функциональностью'
                : 'Build your own MCP server to extend Gemini CLI with custom functionality'
              }
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {locale === 'zh' ? '完整的 MCP 服务器示例' :
               locale === 'hi' ? 'पूर्ण MCP सर्वर उदाहरण' :
               locale === 'fr' ? 'Exemple Complet de Serveur MCP' :
               locale === 'de' ? 'Vollständiges MCP-Server-Beispiel' :
               locale === 'ja' ? '完全なMCPサーバーの例' :
               locale === 'ko' ? '완전한 MCP 서버 예제' :
               locale === 'es' ? 'Ejemplo Completo de Servidor MCP' :
               locale === 'ru' ? 'Полный пример MCP-сервера' :
               'Complete MCP Server Example'}
            </h3>
            <p className="text-gray-700 mb-6">
              {locale === 'zh'
                ? '这是一个完整的自定义 MCP 服务器示例，您可以将其用作起点:'
                : locale === 'hi'
                ? 'यहाँ एक पूर्ण कस्टम MCP सर्वर का उदाहरण है जिसे आप शुरुआती बिंदु के रूप में उपयोग कर सकते हैं:'
                : locale === 'fr'
                ? 'Voici un exemple complet d\'un serveur MCP personnalisé que vous pouvez utiliser comme point de départ :'
                : locale === 'de'
                ? 'Hier ist ein vollständiges Beispiel eines benutzerdefinierten MCP-Servers, den Sie als Ausgangspunkt verwenden können:'
                : locale === 'ja'
                ? 'カスタムMCPサーバーの完全な例で、出発点として使用できます:'
                : locale === 'ko'
                ? '시작점으로 사용할 수 있는 사용자 정의 MCP 서버의 완전한 예제입니다:'
                : locale === 'es'
                ? 'Aquí hay un ejemplo completo de un servidor MCP personalizado que puede usar como punto de partida:'
                : locale === 'ru'
                ? 'Вот полный пример пользовательского MCP-сервера, который вы можете использовать в качестве отправной точки:'
                : 'Here\'s a complete example of a custom MCP server that you can use as a starting point:'
              }
            </p>

            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{customMcpServerExample[locale as keyof typeof customMcpServerExample]}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '入门指南' :
               locale === 'hi' ? 'शुरुआत करना' :
               locale === 'fr' ? 'Commencer' :
               locale === 'de' ? 'Erste Schritte' :
               locale === 'ja' ? '始め方' :
               locale === 'ko' ? '시작하기' :
               locale === 'es' ? 'Comenzar' :
               locale === 'ru' ? 'Начало работы' :
               'Getting Started'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '开始使用和开发 MCP 服务器的快速步骤' :
               locale === 'hi' ? 'MCP सर्वर का उपयोग और विकास शुरू करने के लिए त्वरित चरण' :
               locale === 'fr' ? 'Étapes rapides pour commencer à utiliser et développer des serveurs MCP' :
               locale === 'de' ? 'Schnelle Schritte zum Einstieg in die Nutzung und Entwicklung von MCP-Servern' :
               locale === 'ja' ? 'MCPサーバーの使用と開発を始めるための簡単なステップ' :
               locale === 'ko' ? 'MCP 서버 사용 및 개발을 시작하는 빠른 단계' :
               locale === 'es' ? 'Pasos rápidos para comenzar a usar y desarrollar servidores MCP' :
               locale === 'ru' ? 'Быстрые шаги для начала использования и разработки MCP-серверов' :
               'Quick steps to start using and developing MCP servers'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '使用现有服务器' :
                 locale === 'hi' ? 'मौजूदा सर्वर का उपयोग' :
                 locale === 'fr' ? 'Utiliser des Serveurs Existants' :
                 locale === 'de' ? 'Vorhandene Server Verwenden' :
                 locale === 'ja' ? '既存のサーバーを使用' :
                 locale === 'ko' ? '기존 서버 사용' :
                 locale === 'es' ? 'Usar Servidores Existentes' :
                 locale === 'ru' ? 'Использование существующих серверов' :
                 'Using Existing Servers'}
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">1</span>
                  <span>
                    {locale === 'zh' ? '安装 MCP 服务器包: ' :
                     locale === 'hi' ? 'MCP सर्वर पैकेज इंस्टॉल करें: ' :
                     locale === 'fr' ? 'Installez un package de serveur MCP : ' :
                     locale === 'de' ? 'Installieren Sie ein MCP-Server-Paket: ' :
                     locale === 'ja' ? 'MCPサーバーパッケージをインストール: ' :
                     locale === 'ko' ? 'MCP 서버 패키지 설치: ' :
                     locale === 'es' ? 'Instale un paquete de servidor MCP: ' :
                     locale === 'ru' ? 'Установите пакет MCP-сервера: ' :
                     'Install an MCP server package: '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install -g @modelcontextprotocol/server-filesystem</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">2</span>
                  <span>
                    {locale === 'zh' ? '将服务器添加到您的 ' :
                     locale === 'hi' ? 'सर्वर को अपनी ' :
                     locale === 'fr' ? 'Ajoutez le serveur à votre ' :
                     locale === 'de' ? 'Fügen Sie den Server zu Ihrer ' :
                     locale === 'ja' ? 'サーバーを ' :
                     locale === 'ko' ? '서버를 ' :
                     locale === 'es' ? 'Agregue el servidor a su ' :
                     locale === 'ru' ? 'Добавьте сервер в ваш ' :
                     'Add the server to your '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">.gemini/config.json</code>
                    {locale === 'hi' ? ' फ़ाइल में जोड़ें' :
                     locale === 'ja' ? 'ファイルに追加' :
                     locale === 'ko' ? ' 파일에 추가' :
                     locale === 'de' ? '-Datei hinzu' :
                     locale === 'ru' ? ' файл' : ''}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">3</span>
                  <span>{locale === 'zh' ? '重启 Gemini CLI 以加载新服务器' :
                        locale === 'hi' ? 'नए सर्वर को लोड करने के लिए Gemini CLI को पुनः आरंभ करें' :
                        locale === 'fr' ? 'Redémarrez Gemini CLI pour charger le nouveau serveur' :
                        locale === 'de' ? 'Starten Sie Gemini CLI neu, um den neuen Server zu laden' :
                        locale === 'ja' ? '新しいサーバーを読み込むためにGemini CLIを再起動' :
                        locale === 'ko' ? '새 서버를 로드하기 위해 Gemini CLI 재시작' :
                        locale === 'es' ? 'Reinicie Gemini CLI para cargar el nuevo servidor' :
                        locale === 'ru' ? 'Перезапустите Gemini CLI для загрузки нового сервера' :
                        'Restart Gemini CLI to load the new server'}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold mr-3 mt-0.5">4</span>
                  <span>
                    {locale === 'zh' ? '使用 ' :
                     locale === 'hi' ? 'उपलब्ध सर्वर सूचीबद्ध करने के लिए ' :
                     locale === 'fr' ? 'Utilisez la commande ' :
                     locale === 'de' ? 'Verwenden Sie den Befehl ' :
                     locale === 'ja' ? '利用可能なサーバーをリストするために ' :
                     locale === 'ko' ? '사용 가능한 서버를 나열하려면 ' :
                     locale === 'es' ? 'Use el comando ' :
                     locale === 'ru' ? 'Используйте команду ' :
                     'Use '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">/mcp</code>
                    {locale === 'zh' ? ' 命令列出可用服务器' :
                     locale === 'hi' ? ' कमांड का उपयोग करें' :
                     locale === 'fr' ? ' pour lister les serveurs disponibles' :
                     locale === 'de' ? ' um verfügbare Server aufzulisten' :
                     locale === 'ja' ? ' コマンドを使用' :
                     locale === 'ko' ? ' 명령 사용' :
                     locale === 'es' ? ' para listar servidores disponibles' :
                     locale === 'ru' ? ' для списка доступных серверов' :
                     ' command to list available servers'}
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '开发自定义服务器' :
                 locale === 'hi' ? 'कस्टम सर्वर विकसित करना' :
                 locale === 'fr' ? 'Développer des Serveurs Personnalisés' :
                 locale === 'de' ? 'Benutzerdefinierte Server Entwickeln' :
                 locale === 'ja' ? 'カスタムサーバーの開発' :
                 locale === 'ko' ? '사용자 정의 서버 개발' :
                 locale === 'es' ? 'Desarrollar Servidores Personalizados' :
                 locale === 'ru' ? 'Разработка пользовательских серверов' :
                 'Developing Custom Servers'}
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">1</span>
                  <span>
                    {locale === 'zh' ? '安装 MCP SDK: ' :
                     locale === 'hi' ? 'MCP SDK इंस्टॉल करें: ' :
                     locale === 'fr' ? 'Installez le SDK MCP : ' :
                     locale === 'de' ? 'Installieren Sie das MCP SDK: ' :
                     locale === 'ja' ? 'MCP SDKをインストール: ' :
                     locale === 'ko' ? 'MCP SDK 설치: ' :
                     locale === 'es' ? 'Instale el SDK MCP: ' :
                     locale === 'ru' ? 'Установите MCP SDK: ' :
                     'Install the MCP SDK: '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install @modelcontextprotocol/sdk</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">2</span>
                  <span>{locale === 'zh' ? '使用上面的示例创建您的服务器' :
                        locale === 'hi' ? 'ऊपर दिए गए उदाहरण का उपयोग करके अपना सर्वर बनाएं' :
                        locale === 'fr' ? 'Créez votre serveur en utilisant l\'exemple ci-dessus' :
                        locale === 'de' ? 'Erstellen Sie Ihren Server mit dem obigen Beispiel' :
                        locale === 'ja' ? '上記の例を使用してサーバーを作成' :
                        locale === 'ko' ? '위의 예제를 사용하여 서버 생성' :
                        locale === 'es' ? 'Cree su servidor usando el ejemplo anterior' :
                        locale === 'ru' ? 'Создайте свой сервер, используя приведенный выше пример' :
                        'Create your server using the example above'}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">3</span>
                  <span>{locale === 'zh' ? '使用 MCP 检查器测试您的服务器' :
                        locale === 'hi' ? 'MCP इंस्पेक्टर के साथ अपने सर्वर का परीक्षण करें' :
                        locale === 'fr' ? 'Testez votre serveur avec l\'inspecteur MCP' :
                        locale === 'de' ? 'Testen Sie Ihren Server mit dem MCP-Inspektor' :
                        locale === 'ja' ? 'MCPインスペクターでサーバーをテスト' :
                        locale === 'ko' ? 'MCP 검사기로 서버 테스트' :
                        locale === 'es' ? 'Pruebe su servidor con el inspector MCP' :
                        locale === 'ru' ? 'Протестируйте свой сервер с помощью MCP-инспектора' :
                        'Test your server with the MCP inspector'}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold mr-3 mt-0.5">4</span>
                  <span>{locale === 'zh' ? '在 Gemini CLI 中配置它并开始使用' :
                        locale === 'hi' ? 'इसे Gemini CLI में कॉन्फ़िगर करें और उपयोग शुरू करें' :
                        locale === 'fr' ? 'Configurez-le dans Gemini CLI et commencez à l\'utiliser' :
                        locale === 'de' ? 'Konfigurieren Sie es in Gemini CLI und beginnen Sie mit der Nutzung' :
                        locale === 'ja' ? 'Gemini CLIで設定して使用開始' :
                        locale === 'ko' ? 'Gemini CLI에서 구성하고 사용 시작' :
                        locale === 'es' ? 'Configúrelo en Gemini CLI y comience a usarlo' :
                        locale === 'ru' ? 'Настройте его в Gemini CLI и начните использовать' :
                        'Configure it in Gemini CLI and start using it'}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '相关资源' :
               locale === 'hi' ? 'संबंधित संसाधन' :
               locale === 'fr' ? 'Ressources Connexes' :
               locale === 'de' ? 'Verwandte Ressourcen' :
               locale === 'ja' ? '関連リソース' :
               locale === 'ko' ? '관련 리소스' :
               locale === 'es' ? 'Recursos Relacionados' :
               locale === 'ru' ? 'Связанные ресурсы' :
               'Related Resources'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '探索更多关于 MCP 服务器和插件开发的内容' :
               locale === 'hi' ? 'MCP सर्वर और प्लगइन विकास के बारे में और जानें' :
               locale === 'fr' ? 'Explorez davantage le développement de serveurs MCP et de plugins' :
               locale === 'de' ? 'Erfahren Sie mehr über MCP-Server und Plugin-Entwicklung' :
               locale === 'ja' ? 'MCPサーバーとプラグイン開発についてさらに詳しく' :
               locale === 'ko' ? 'MCP 서버 및 플러그인 개발에 대해 더 알아보기' :
               locale === 'es' ? 'Explore más sobre el desarrollo de servidores MCP y plugins' :
               locale === 'ru' ? 'Узнайте больше о разработке MCP-серверов и плагинов' :
               'Explore more about MCP servers and plugin development'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {locale === 'zh' ? 'MCP 协议文档' :
                 locale === 'hi' ? 'MCP प्रोटोकॉल दस्तावेज़ीकरण' :
                 locale === 'fr' ? 'Documentation du Protocole MCP' :
                 locale === 'de' ? 'MCP-Protokoll-Dokumentation' :
                 locale === 'ja' ? 'MCPプロトコルドキュメント' :
                 locale === 'ko' ? 'MCP 프로토콜 문서' :
                 locale === 'es' ? 'Documentación del Protocolo MCP' :
                 locale === 'ru' ? 'Документация протокола MCP' :
                 'MCP Protocol Documentation'}
              </Link>
              <Link
                href={`/${locale}/docs/tools-api`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {locale === 'zh' ? '工具 API 参考' :
                 locale === 'hi' ? 'टूल्स API संदर्भ' :
                 locale === 'fr' ? 'Référence API des Outils' :
                 locale === 'de' ? 'Tools API Referenz' :
                 locale === 'ja' ? 'ツールAPIリファレンス' :
                 locale === 'ko' ? '도구 API 참조' :
                 locale === 'es' ? 'Referencia API de Herramientas' :
                 locale === 'ru' ? 'Справочник API инструментов' :
                 'Tools API Reference'}
              </Link>
              <Link
                href={`/${locale}/docs/core-api`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '核心 API 文档' :
                 locale === 'hi' ? 'कोर API दस्तावेज़ीकरण' :
                 locale === 'fr' ? 'Documentation API Core' :
                 locale === 'de' ? 'Core API Dokumentation' :
                 locale === 'ja' ? 'コアAPIドキュメント' :
                 locale === 'ko' ? '코어 API 문서' :
                 locale === 'es' ? 'Documentación API Core' :
                 locale === 'ru' ? 'Документация Core API' :
                 'Core API Documentation'}
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
