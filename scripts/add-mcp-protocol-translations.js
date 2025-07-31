const fs = require('fs');
const path = require('path');

const languages = [
  { code: 'zh', name: 'Chinese' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'es', name: 'Spanish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ru', name: 'Russian' }
];

const translations = {
  zh: {
    hero: {
      title: "MCP 协议使用",
      subtitle: "掌握 Model Context Protocol 扩展 Gemini CLI 功能",
      advanced: "高级功能",
      extensible: "可扩展性"
    },
    overview: {
      title: "协议概览",
      description: "Model Context Protocol (MCP) 是一个开放标准，允许 AI 应用程序与外部数据源和工具进行安全、受控的集成。"
    },
    concepts: {
      overview: {
        title: "MCP 协议概述",
        description: "Model Context Protocol 的基本概念和架构",
        definition: "MCP 是一个开放标准，允许 AI 应用程序与外部数据源和工具进行安全、受控的集成。",
        components: {
          host: {
            name: "MCP 主机",
            description: "AI 应用程序（如 Gemini CLI）",
            role: "发起连接并使用 MCP 服务器提供的功能"
          },
          server: {
            name: "MCP 服务器",
            description: "提供特定功能的独立进程",
            role: "暴露工具、资源和提示给主机使用"
          },
          transport: {
            name: "传输层",
            description: "主机和服务器之间的通信机制",
            role: "支持 stdio、SSE 和 WebSocket 等协议"
          }
        }
      },
      capabilities: {
        title: "核心功能",
        description: "MCP 服务器可以提供的三种主要功能类型",
        definition: "MCP 服务器通过三种主要功能类型为 AI 应用程序提供扩展能力。",
        types: {
          tools: {
            name: "工具 (Tools)",
            description: "可执行的函数，允许 AI 执行操作",
            examples: "文件操作、API 调用、数据库查询等"
          },
          resources: {
            name: "资源 (Resources)",
            description: "可读取的数据源，为 AI 提供上下文信息",
            examples: "文件内容、数据库记录、API 响应等"
          },
          prompts: {
            name: "提示 (Prompts)",
            description: "预定义的提示模板，提供结构化的交互方式",
            examples: "代码审查模板、文档生成模板等"
          }
        }
      },
      configuration: {
        title: "配置设置",
        description: "如何配置和使用 MCP 服务器",
        definition: "配置 MCP 服务器需要安装、配置和验证三个步骤。",
        steps: {
          install: {
            step: "1. 安装 MCP 服务器",
            description: "使用 npm 或其他包管理器安装所需的 MCP 服务器",
            command: "npm install -g @modelcontextprotocol/server-filesystem"
          },
          configure: {
            step: "2. 配置 Gemini CLI",
            description: "在 Gemini CLI 配置文件中添加 MCP 服务器配置",
            command: "gemini config mcp add filesystem"
          },
          verify: {
            step: "3. 验证连接",
            description: "测试 MCP 服务器是否正常工作",
            command: "gemini mcp list"
          }
        }
      }
    },
    examples: {
      title: "实际应用示例",
      filesystem: {
        title: "文件系统服务器",
        description: "使用 MCP 文件系统服务器进行文件操作",
        steps: {
          install: "npm install -g @modelcontextprotocol/server-filesystem",
          installDesc: "安装文件系统 MCP 服务器",
          configure: "gemini config mcp add filesystem --path /your/project/path",
          configureDesc: "配置文件系统服务器路径",
          use: "请帮我分析项目中的所有 TypeScript 文件",
          useDesc: "AI 现在可以访问和分析指定路径下的文件"
        }
      },
      database: {
        title: "数据库服务器",
        description: "连接数据库进行查询和分析",
        steps: {
          install: "npm install -g @modelcontextprotocol/server-sqlite",
          installDesc: "安装 SQLite MCP 服务器",
          configure: "gemini config mcp add sqlite --db ./data.db",
          configureDesc: "配置数据库连接",
          query: "查询用户表中最近注册的10个用户",
          queryDesc: "AI 可以执行 SQL 查询并分析结果"
        }
      }
    },
    bestPractices: {
      title: "最佳实践",
      security: {
        title: "安全考虑",
        content: "只连接信任的 MCP 服务器，定期审查服务器权限，避免暴露敏感数据。"
      },
      performance: {
        title: "性能优化",
        content: "合理配置服务器数量，监控资源使用情况，优化数据传输效率。"
      },
      debugging: {
        title: "调试技巧",
        content: "使用详细日志模式，检查服务器状态，验证配置文件格式。"
      }
    },
    nextSteps: {
      title: "下一步",
      description: "现在您已经了解了 MCP 协议，可以继续学习更高级的配置和集成方法：",
      advancedConfig: "高级配置",
      integration: "集成指南",
      backToGuides: "返回指南首页"
    }
  },
  en: {
    hero: {
      title: "MCP Protocol Usage",
      subtitle: "Master Model Context Protocol to extend Gemini CLI functionality",
      advanced: "Advanced Features",
      extensible: "Extensible"
    },
    overview: {
      title: "Protocol Overview",
      description: "Model Context Protocol (MCP) is an open standard that allows AI applications to securely and controllably integrate with external data sources and tools."
    },
    concepts: {
      overview: {
        title: "MCP Protocol Overview",
        description: "Basic concepts and architecture of Model Context Protocol",
        definition: "MCP is an open standard that allows AI applications to securely and controllably integrate with external data sources and tools.",
        components: {
          host: {
            name: "MCP Host",
            description: "AI application (such as Gemini CLI)",
            role: "Initiates connections and uses functionality provided by MCP servers"
          },
          server: {
            name: "MCP Server",
            description: "Independent process providing specific functionality",
            role: "Exposes tools, resources, and prompts for host usage"
          },
          transport: {
            name: "Transport Layer",
            description: "Communication mechanism between host and server",
            role: "Supports protocols like stdio, SSE, and WebSocket"
          }
        }
      },
      capabilities: {
        title: "Core Capabilities",
        description: "Three main types of functionality that MCP servers can provide",
        definition: "MCP servers provide extension capabilities to AI applications through three main functionality types.",
        types: {
          tools: {
            name: "Tools",
            description: "Executable functions that allow AI to perform operations",
            examples: "File operations, API calls, database queries, etc."
          },
          resources: {
            name: "Resources",
            description: "Readable data sources that provide contextual information to AI",
            examples: "File contents, database records, API responses, etc."
          },
          prompts: {
            name: "Prompts",
            description: "Predefined prompt templates providing structured interaction methods",
            examples: "Code review templates, documentation generation templates, etc."
          }
        }
      },
      configuration: {
        title: "Configuration Setup",
        description: "How to configure and use MCP servers",
        definition: "Configuring MCP servers requires three steps: installation, configuration, and verification.",
        steps: {
          install: {
            step: "1. Install MCP Server",
            description: "Use npm or other package managers to install required MCP servers",
            command: "npm install -g @modelcontextprotocol/server-filesystem"
          },
          configure: {
            step: "2. Configure Gemini CLI",
            description: "Add MCP server configuration to Gemini CLI config file",
            command: "gemini config mcp add filesystem"
          },
          verify: {
            step: "3. Verify Connection",
            description: "Test if MCP server is working properly",
            command: "gemini mcp list"
          }
        }
      }
    },
    examples: {
      title: "Practical Examples",
      filesystem: {
        title: "Filesystem Server",
        description: "Use MCP filesystem server for file operations",
        steps: {
          install: "npm install -g @modelcontextprotocol/server-filesystem",
          installDesc: "Install filesystem MCP server",
          configure: "gemini config mcp add filesystem --path /your/project/path",
          configureDesc: "Configure filesystem server path",
          use: "Please help me analyze all TypeScript files in the project",
          useDesc: "AI can now access and analyze files in the specified path"
        }
      },
      database: {
        title: "Database Server",
        description: "Connect to database for queries and analysis",
        steps: {
          install: "npm install -g @modelcontextprotocol/server-sqlite",
          installDesc: "Install SQLite MCP server",
          configure: "gemini config mcp add sqlite --db ./data.db",
          configureDesc: "Configure database connection",
          query: "Query the 10 most recently registered users from the user table",
          queryDesc: "AI can execute SQL queries and analyze results"
        }
      }
    },
    bestPractices: {
      title: "Best Practices",
      security: {
        title: "Security Considerations",
        content: "Only connect to trusted MCP servers, regularly review server permissions, avoid exposing sensitive data."
      },
      performance: {
        title: "Performance Optimization",
        content: "Configure server count reasonably, monitor resource usage, optimize data transmission efficiency."
      },
      debugging: {
        title: "Debugging Tips",
        content: "Use verbose logging mode, check server status, verify configuration file format."
      }
    },
    nextSteps: {
      title: "Next Steps",
      description: "Now that you understand the MCP protocol, you can continue learning more advanced configuration and integration methods:",
      advancedConfig: "Advanced Configuration",
      integration: "Integration Guide",
      backToGuides: "Back to Guides"
    }
  }
};

// Create a base template for all languages
const baseTemplate = translations.en;

languages.forEach(lang => {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang.code}.json`);
  
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add detailed mcp-protocol translation
    if (translations[lang.code]) {
      content.guidesMcpProtocol = translations[lang.code];
    } else {
      // Use base template for languages not yet translated
      content.guidesMcpProtocol = baseTemplate;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Added detailed mcp-protocol translations for ${lang.name} (${lang.code})`);
  }
});

console.log('✓ All detailed mcp-protocol translations added');
