'use client'

import Link from 'next/link'
import {
  CodeBracketIcon,
  CogIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

interface DocsContentProps {
  locale: string
}

export default function DocsContent({ locale }: DocsContentProps) {
  // Helper function to generate locale-aware links
  const getLocalizedHref = (path: string) => {
    // For English, use the default path without locale prefix
    if (locale === 'en') {
      return path
    }
    // For other languages, add locale prefix
    return `/${locale}${path}`
  }

  // Get translations based on locale
  const getTranslations = (locale: string, getLocalizedHref: (path: string) => string) => {
    const translations: Record<string, any> = {
      zh: {
        title: '开发者文档',
        subtitle: '深入了解 Gemini CLI 的技术细节，学习如何扩展功能、集成 MCP 协议，并为开源项目做出贡献。',
        quickNav: {
          title: '快速导航',
          subtitle: '快速访问常用的开发资源',
          links: [
            {
              title: 'GitHub 仓库',
              description: '查看源代码和提交问题',
              href: 'https://github.com/google-gemini/gemini-cli',
              external: true
            },
            {
              title: 'API 参考',
              description: '完整的 API 文档',
              href: getLocalizedHref('/docs/api-reference'),
              external: false
            },
            {
              title: '示例代码',
              description: '实用的代码示例和模板',
              href: getLocalizedHref('/docs/examples'),
              external: false
            },
            {
              title: '更新日志',
              description: '版本更新和变更记录',
              href: getLocalizedHref('/docs/changelog'),
              external: false
            }
          ]
        },
        techSpecs: {
          title: '系统架构',
          subtitle: '了解 Gemini CLI 的核心组件和架构设计',
          categories: [
            {
              category: 'CLI 包',
              items: ['输入处理', '历史管理', '显示渲染', '主题定制', '配置设置']
            },
            {
              category: '核心包',
              items: ['API 客户端', '提示管理', '工具注册', '状态管理', '服务器配置']
            },
            {
              category: '可用工具',
              items: ['文件系统操作', 'Shell 命令', 'Web 获取', 'Web 搜索', '内存管理']
            },
            {
              category: '执行模式',
              items: ['交互式 REPL', '非交互模式', '脚本支持', '自动化就绪', '管道集成']
            }
          ]
        },
        docSections: {
          title: '开发者文档',
          subtitle: '面向开发者和贡献者的全面技术文档',
          sections: [
            {
              id: 'getting-started',
              title: '开发环境',
              description: '环境设置、项目结构和构建流程',
              color: 'from-green-500 to-emerald-600',
              articles: [
                {
                  title: '开发环境设置',
                  description: '配置本地开发环境和依赖项',
                  href: getLocalizedHref('/docs/development-setup'),
                  tags: ['环境', '设置']
                },
                {
                  title: '项目结构',
                  description: '理解代码库组织和架构',
                  href: getLocalizedHref('/docs/project-structure'),
                  tags: ['架构', '结构']
                },
                {
                  title: '构建和测试',
                  description: '项目构建、测试和调试',
                  href: getLocalizedHref('/docs/build-and-test'),
                  tags: ['构建', '测试']
                }
              ]
            },
            {
              id: 'api-reference',
              title: '核心开发',
              description: '核心 API、工具开发和系统集成',
              color: 'from-blue-500 to-indigo-600',
              articles: [
                {
                  title: '核心 API',
                  description: '与 Gemini 模型交互的主要 API 接口',
                  href: getLocalizedHref('/docs/core-api'),
                  tags: ['API', '核心']
                },
                {
                  title: '工具 API',
                  description: '创建和管理 AI 交互的自定义工具',
                  href: getLocalizedHref('/docs/tools-api'),
                  tags: ['工具', 'API']
                },
                {
                  title: '插件开发',
                  description: '为 Gemini CLI 构建插件和扩展',
                  href: getLocalizedHref('/docs/plugin-api'),
                  tags: ['插件', '开发']
                }
              ]
            },
            {
              id: 'mcp-protocol',
              title: '部署与集成',
              description: '生产部署、配置和系统集成',
              color: 'from-purple-500 to-pink-600',
              articles: [
                {
                  title: '安装与设置',
                  description: '分步安装和初始配置指南',
                  href: getLocalizedHref('/docs/installation'),
                  tags: ['安装', '设置']
                },
                {
                  title: '配置管理',
                  description: '高级配置选项和环境设置',
                  href: getLocalizedHref('/docs/configuration'),
                  tags: ['配置', '环境']
                },
                {
                  title: 'MCP 集成',
                  description: 'Model Context Protocol 实现和使用',
                  href: getLocalizedHref('/docs/mcp-introduction'),
                  tags: ['MCP', '集成']
                },
                {
                  title: '迁移指南',
                  description: '从旧版本升级到最新版本的完整指南',
                  href: getLocalizedHref('/docs/migration-guide'),
                  tags: ['迁移', '升级']
                }
              ]
            },
            {
              id: 'extensions',
              title: '工具与扩展',
              description: '内置工具和创建自定义扩展',
              color: 'from-orange-500 to-red-600',
              articles: [
                {
                  title: '内置工具',
                  description: '文件系统、Shell 和 Web 工具文档',
                  href: getLocalizedHref('/docs/built-in-tools'),
                  tags: ['工具', '内置']
                },
                {
                  title: '自定义工具开发',
                  description: '为特定用例创建自定义工具',
                  href: getLocalizedHref('/docs/tool-development'),
                  tags: ['工具', '开发']
                },
                {
                  title: '扩展系统',
                  description: '为社区构建和发布扩展',
                  href: getLocalizedHref('/docs/extension-system'),
                  tags: ['扩展', '发布']
                }
              ]
            },
            {
              id: 'contributing',
              title: '贡献与维护',
              description: '为项目贡献和维护代码质量',
              color: 'from-teal-500 to-cyan-600',
              articles: [
                {
                  title: '贡献指南',
                  description: '如何贡献代码、文档和错误报告',
                  href: getLocalizedHref('/docs/contributing-guide'),
                  tags: ['贡献', '指南']
                },
                {
                  title: '项目管理',
                  description: 'NPM 工作空间、包管理和发布流程',
                  href: getLocalizedHref('/docs/project-management'),
                  tags: ['NPM', '管理']
                },
                {
                  title: '故障排除',
                  description: '常见问题、调试技巧和问题解决',
                  href: getLocalizedHref('/docs/troubleshooting'),
                  tags: ['调试', '问题']
                }
              ]
            }
          ]
        },
        community: {
          title: '社区与支持',
          subtitle: '加入开发者社区，获取帮助和分享经验',
          joinDiscussion: '加入讨论',
          reportIssue: '报告问题',
          contribute: '贡献代码'
        }
      },
      en: {
        title: 'Gemini CLI Documentation',
        subtitle: 'Comprehensive guide to installing, using, and developing Gemini CLI. This tool lets you interact with Gemini models through a command-line interface.',
        quickNav: {
          title: 'Quick Navigation',
          subtitle: 'Essential resources for developers and users',
          links: [
            {
              title: 'GitHub Repository',
              description: 'View source code and submit issues',
              href: 'https://github.com/google-gemini/gemini-cli',
              external: true
            },
            {
              title: 'API Reference',
              description: 'Complete API documentation',
              href: getLocalizedHref('/docs/api-reference'),
              external: false
            },
            {
              title: 'Code Examples',
              description: 'Practical code examples and templates',
              href: getLocalizedHref('/docs/examples'),
              external: false
            },
            {
              title: 'Changelog',
              description: 'Version updates and change records',
              href: getLocalizedHref('/docs/changelog'),
              external: false
            }
          ]
        },
        techSpecs: {
          title: 'System Architecture',
          subtitle: 'Understanding the core components and architecture of Gemini CLI',
          categories: [
            {
              category: 'CLI Package',
              items: ['Input Processing', 'History Management', 'Display Rendering', 'Theme Customization', 'Configuration Settings']
            },
            {
              category: 'Core Package',
              items: ['API Client', 'Prompt Management', 'Tool Registration', 'State Management', 'Server Configuration']
            },
            {
              category: 'Available Tools',
              items: ['File System Operations', 'Shell Commands', 'Web Fetching', 'Web Search', 'Memory Management']
            },
            {
              category: 'Execution Modes',
              items: ['Interactive REPL', 'Non-interactive Mode', 'Scripting Support', 'Automation Ready', 'Pipeline Integration']
            }
          ]
        },
        docSections: {
          title: 'Developer Documentation',
          subtitle: 'Comprehensive technical documentation for developers and contributors',
          sections: [
            {
              id: 'getting-started',
              title: 'Development Setup',
              description: 'Environment setup, project structure, and build processes',
              color: 'from-green-500 to-emerald-600',
              articles: [
                {
                  title: 'Development Environment',
                  description: 'Setting up local development environment and dependencies',
                  href: getLocalizedHref('/docs/development-setup'),
                  tags: ['Environment', 'Setup']
                },
                {
                  title: 'Project Structure',
                  description: 'Understanding codebase organization and architecture',
                  href: getLocalizedHref('/docs/project-structure'),
                  tags: ['Architecture', 'Structure']
                },
                {
                  title: 'Build and Test',
                  description: 'Building, testing, and debugging the project',
                  href: getLocalizedHref('/docs/build-and-test'),
                  tags: ['Build', 'Testing']
                }
              ]
            },
            {
              id: 'api-reference',
              title: 'Core Development',
              description: 'Core APIs, tool development, and system integration',
              color: 'from-blue-500 to-indigo-600',
              articles: [
                {
                  title: 'Core API',
                  description: 'Main API interfaces for interacting with Gemini models',
                  href: getLocalizedHref('/docs/core-api'),
                  tags: ['API', 'Core']
                },
                {
                  title: 'Tools API',
                  description: 'Creating and managing custom tools for AI interactions',
                  href: getLocalizedHref('/docs/tools-api'),
                  tags: ['Tools', 'API']
                },
                {
                  title: 'Plugin Development',
                  description: 'Building plugins and extensions for Gemini CLI',
                  href: getLocalizedHref('/docs/plugin-api'),
                  tags: ['Plugin', 'Development']
                }
              ]
            },
            {
              id: 'mcp-protocol',
              title: 'Deployment & Integration',
              description: 'Production deployment, configuration, and system integration',
              color: 'from-purple-500 to-pink-600',
              articles: [
                {
                  title: 'Installation & Setup',
                  description: 'Step-by-step installation and initial configuration',
                  href: getLocalizedHref('/docs/installation'),
                  tags: ['Installation', 'Setup']
                },
                {
                  title: 'Configuration Management',
                  description: 'Advanced configuration options and environment setup',
                  href: getLocalizedHref('/docs/configuration'),
                  tags: ['Configuration', 'Environment']
                },
                {
                  title: 'MCP Integration',
                  description: 'Model Context Protocol implementation and usage',
                  href: getLocalizedHref('/docs/mcp-introduction'),
                  tags: ['MCP', 'Integration']
                },
                {
                  title: 'Migration Guide',
                  description: 'Complete guide for upgrading from older versions',
                  href: getLocalizedHref('/docs/migration-guide'),
                  tags: ['Migration', 'Upgrade']
                }
              ]
            },
            {
              id: 'extensions',
              title: 'Tools & Extensions',
              description: 'Built-in tools and creating custom extensions',
              color: 'from-orange-500 to-red-600',
              articles: [
                {
                  title: 'Built-in Tools',
                  description: 'File system, shell, and web tools documentation',
                  href: getLocalizedHref('/docs/built-in-tools'),
                  tags: ['Tools', 'Built-in']
                },
                {
                  title: 'Custom Tool Development',
                  description: 'Creating custom tools for specific use cases',
                  href: getLocalizedHref('/docs/tool-development'),
                  tags: ['Tools', 'Development']
                },
                {
                  title: 'Extension System',
                  description: 'Building and publishing extensions for the community',
                  href: getLocalizedHref('/docs/extension-system'),
                  tags: ['Extensions', 'Publishing']
                }
              ]
            },
            {
              id: 'contributing',
              title: 'Contributing & Maintenance',
              description: 'Contributing to the project and maintaining code quality',
              color: 'from-teal-500 to-cyan-600',
              articles: [
                {
                  title: 'Contributing Guide',
                  description: 'How to contribute code, documentation, and bug reports',
                  href: getLocalizedHref('/docs/contributing-guide'),
                  tags: ['Contributing', 'Guide']
                },
                {
                  title: 'Project Management',
                  description: 'NPM workspaces, package management, and release process',
                  href: getLocalizedHref('/docs/project-management'),
                  tags: ['NPM', 'Management']
                },
                {
                  title: 'Troubleshooting',
                  description: 'Common issues, debugging tips, and problem resolution',
                  href: getLocalizedHref('/docs/troubleshooting'),
                  tags: ['Debug', 'Issues']
                }
              ]
            }
          ]
        },
        community: {
          title: 'Community & Support',
          subtitle: 'Join the developer community, get help and share experiences',
          joinDiscussion: 'Join Discussion',
          reportIssue: 'Report Issue',
          contribute: 'Contribute Code'
        }
      },
      hi: {
              "title": "डेवलपर दस्तावेज़ीकरण",
              "subtitle": "Gemini CLI की तकनीकी विवरणों में गहराई से जाएं, कार्यक्षमता का विस्तार करना, MCP प्रोटोकॉल को एकीकृत करना, और ओपन सोर्स प्रोजेक्ट में योगदान करना सीखें।",
              "quickNav": {
                      "title": "त्वरित नेविगेशन",
                      "subtitle": "आमतौर पर उपयोग किए जाने वाले विकास संसाधनों तक त्वरित पहुंच",
                      "links": [
                              {
                                      "title": "GitHub रिपॉजिटरी",
                                      "description": "स्रोत कोड देखें और समस्याएं सबमिट करें",
                                      "href": "https://github.com/google-gemini/gemini-cli",
                                      "external": true
                              },
                              {
                                      "title": "API संदर्भ",
                                      "description": "पूर्ण API दस्तावेज़ीकरण",
                                      "href": getLocalizedHref("/docs/api-reference"),
                                      "external": false
                              },
                              {
                                      "title": "कोड उदाहरण",
                                      "description": "व्यावहारिक कोड उदाहरण और टेम्प्लेट",
                                      "href": getLocalizedHref("/docs/examples"),
                                      "external": false
                              },
                              {
                                      "title": "चेंजलॉग",
                                      "description": "संस्करण अपडेट और परिवर्तन रिकॉर्ड",
                                      "href": getLocalizedHref("/docs/changelog"),
                                      "external": false
                              }
                      ]
              },
              "techSpecs": {
                      "title": "तकनीकी विनिर्देश",
                      "subtitle": "Gemini CLI की तकनीकी विशेषताओं और समर्थन क्षेत्र के बारे में जानें",
                      "categories": [
                              {
                                      "category": "समर्थित भाषाएं",
                                      "items": [
                                              "JavaScript/TypeScript",
                                              "Python",
                                              "Java",
                                              "C#",
                                              "Go",
                                              "Rust",
                                              "PHP",
                                              "Ruby"
                                      ]
                              },
                              {
                                      "category": "प्लेटफॉर्म समर्थन",
                                      "items": [
                                              "Windows 10+",
                                              "macOS 10.15+",
                                              "Linux (Ubuntu 18.04+)",
                                              "Docker"
                                      ]
                              },
                              {
                                      "category": "एकीकरण विधियां",
                                      "items": [
                                              "कमांड लाइन इंटरफेस",
                                              "Node.js API",
                                              "REST API",
                                              "WebSocket",
                                              "MCP प्रोटोकॉल"
                                      ]
                              },
                              {
                                      "category": "एक्सटेंशन प्रकार",
                                      "items": [
                                              "भाषा समर्थन",
                                              "टूल एकीकरण",
                                              "कस्टम कमांड",
                                              "UI एक्सटेंशन",
                                              "MCP सर्वर"
                                      ]
                              }
                      ]
              },
              "docSections": {
                      "title": "दस्तावेज़ीकरण श्रेणियां",
                      "subtitle": "विषय के अनुसार व्यवस्थित विस्तृत तकनीकी दस्तावेज़ीकरण",
                      "sections": [
                              {
                                      "id": "getting-started",
                                      "title": "शुरुआत करना",
                                      "description": "डेवलपर ऑनबोर्डिंग गाइड और वातावरण सेटअप",
                                      "color": "from-green-500 to-emerald-600",
                                      "articles": [
                                              {
                                                      "title": "विकास वातावरण सेटअप",
                                                      "description": "स्थानीय विकास वातावरण और निर्भरताओं को कॉन्फ़िगर करें",
                                                      "href": getLocalizedHref("/docs/development-setup"),
                                                      "tags": [
                                                              "वातावरण",
                                                              "निर्भरताएं"
                                                      ]
                                              },
                                              {
                                                      "title": "प्रोजेक्ट संरचना",
                                                      "description": "Gemini CLI कोड संगठन संरचना को समझें",
                                                      "href": getLocalizedHref("/docs/project-structure"),
                                                      "tags": [
                                                              "आर्किटेक्चर",
                                                              "संगठन"
                                                      ]
                                              },
                                              {
                                                      "title": "बिल्ड और टेस्ट",
                                                      "description": "स्थानीय बिल्ड, टेस्ट और डिबगिंग वर्कफ़्लो",
                                                      "href": getLocalizedHref("/docs/build-and-test"),
                                                      "tags": [
                                                              "बिल्ड",
                                                              "टेस्टिंग",
                                                              "डिबग"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "api-reference",
                                      "title": "API संदर्भ",
                                      "description": "विस्तृत API दस्तावेज़ीकरण और इंटरफेस विवरण",
                                      "color": "from-blue-500 to-indigo-600",
                                      "articles": [
                                              {
                                                      "title": "कोर API",
                                                      "description": "मुख्य API इंटरफेस और विधि विवरण",
                                                      "href": getLocalizedHref("/docs/core-api"),
                                                      "tags": [
                                                              "API",
                                                              "मुख्य"
                                                      ]
                                              },
                                              {
                                                      "title": "प्लगइन API",
                                                      "description": "प्लगइन विकास API और एक्सटेंशन इंटरफेस",
                                                      "href": getLocalizedHref("/docs/plugin-api"),
                                                      "tags": [
                                                              "प्लगइन",
                                                              "एक्सटेंशन"
                                                      ]
                                              },
                                              {
                                                      "title": "कॉन्फ़िगरेशन API",
                                                      "description": "कॉन्फ़िगरेशन प्रबंधन API और विकल्प विवरण",
                                                      "href": getLocalizedHref("/docs/config-api"),
                                                      "tags": [
                                                              "कॉन्फ़िग",
                                                              "सेटिंग्स"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "mcp-protocol",
                                      "title": "MCP प्रोटोकॉल",
                                      "description": "Model Context Protocol एकीकरण गाइड",
                                      "color": "from-purple-500 to-pink-600",
                                      "articles": [
                                              {
                                                      "title": "MCP प्रोटोकॉल परिचय",
                                                      "description": "Model Context Protocol की बुनियादी अवधारणाएं सीखें",
                                                      "href": getLocalizedHref("/docs/mcp-introduction"),
                                                      "tags": [
                                                              "MCP",
                                                              "प्रोटोकॉल"
                                                      ]
                                              },
                                              {
                                                      "title": "MCP सर्वर का कार्यान्वयन",
                                                      "description": "कस्टम MCP सर्वर बनाने के लिए पूर्ण गाइड",
                                                      "href": getLocalizedHref("/docs/mcp-server"),
                                                      "tags": [
                                                              "MCP",
                                                              "सर्वर",
                                                              "कार्यान्वयन"
                                                      ]
                                              },
                                              {
                                                      "title": "MCP क्लाइंट एकीकरण",
                                                      "description": "एप्लिकेशन में MCP क्लाइंट कार्यक्षमता को एकीकृत करें",
                                                      "href": getLocalizedHref("/docs/mcp-client"),
                                                      "tags": [
                                                              "MCP",
                                                              "क्लाइंट",
                                                              "एकीकरण"
                                                      ]
                                              },
                                              {
                                                      "title": "माइग्रेशन गाइड",
                                                      "description": "पुराने संस्करणों से अपग्रेड करने के लिए पूर्ण गाइड",
                                                      "href": getLocalizedHref("/docs/migration-guide"),
                                                      "tags": [
                                                              "माइग्रेशन",
                                                              "अपग्रेड"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "extensions",
                                      "title": "एक्सटेंशन विकास",
                                      "description": "कस्टम एक्सटेंशन और प्लगइन बनाएं",
                                      "color": "from-orange-500 to-red-600",
                                      "articles": [
                                              {
                                                      "title": "एक्सटेंशन आर्किटेक्चर",
                                                      "description": "एक्सटेंशन सिस्टम डिज़ाइन और आर्किटेक्चर को समझें",
                                                      "href": getLocalizedHref("/docs/extension-architecture"),
                                                      "tags": [
                                                              "एक्सटेंशन",
                                                              "आर्किटेक्चर"
                                                      ]
                                              },
                                              {
                                                      "title": "अपना पहला एक्सटेंशन बनाना",
                                                      "description": "शुरुआत से कस्टम एक्सटेंशन बनाएं",
                                                      "href": getLocalizedHref("/docs/first-extension"),
                                                      "tags": [
                                                              "एक्सटेंशन",
                                                              "ट्यूटोरियल"
                                                      ]
                                              },
                                              {
                                                      "title": "एक्सटेंशन प्रकाशन गाइड",
                                                      "description": "एक्सटेंशन पैकेजिंग और प्रकाशन के लिए सर्वोत्तम प्रथाएं",
                                                      "href": getLocalizedHref("/docs/extension-publishing"),
                                                      "tags": [
                                                              "एक्सटेंशन",
                                                              "प्रकाशन"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "contributing",
                                      "title": "योगदान गाइड",
                                      "description": "प्रोजेक्ट विकास और समुदायिक योगदान में भाग लें",
                                      "color": "from-teal-500 to-cyan-600",
                                      "articles": [
                                              {
                                                      "title": "योगदान प्रक्रिया",
                                                      "description": "प्रोजेक्ट में योगदान करना सीखें",
                                                      "href": getLocalizedHref("/docs/contributing-guide"),
                                                      "tags": [
                                                              "योगदान",
                                                              "प्रक्रिया"
                                                      ]
                                              },
                                              {
                                                      "title": "कोडिंग मानक",
                                                      "description": "कोड शैली और गुणवत्ता मानक",
                                                      "href": getLocalizedHref("/docs/coding-standards"),
                                                      "tags": [
                                                              "मानक",
                                                              "गुणवत्ता"
                                                      ]
                                              },
                                              {
                                                      "title": "Pull Request गाइड",
                                                      "description": "Pull Request बनाने और सबमिट करने की सर्वोत्तम प्रथाएं",
                                                      "href": getLocalizedHref("/docs/pull-request-guide"),
                                                      "tags": [
                                                              "PR",
                                                              "सर्वोत्तम प्रथाएं"
                                                      ]
                                              }
                                      ]
                              }
                      ]
              },
              "community": {
                      "title": "समुदाय और समर्थन",
                      "subtitle": "डेवलपर समुदाय में शामिल हों, सहायता प्राप्त करें और अनुभव साझा करें",
                      "joinDiscussion": "चर्चा में शामिल हों",
                      "reportIssue": "समस्या रिपोर्ट करें",
                      "contribute": "कोड योगदान करें"
              }
      },
      fr: {
              "title": "Documentation Développeur",
              "subtitle": "Plongez dans les détails techniques de Gemini CLI, apprenez à étendre les fonctionnalités, intégrer le protocole MCP et contribuer au projet open source.",
              "quickNav": {
                      "title": "Navigation Rapide",
                      "subtitle": "Accès rapide aux ressources de développement couramment utilisées",
                      "links": [
                              {
                                      "title": "Dépôt GitHub",
                                      "description": "Voir le code source et soumettre des problèmes",
                                      "href": "https://github.com/google-gemini/gemini-cli",
                                      "external": true
                              },
                              {
                                      "title": "Référence API",
                                      "description": "Documentation API complète",
                                      "href": getLocalizedHref("/docs/api-reference"),
                                      "external": false
                              },
                              {
                                      "title": "Exemples de Code",
                                      "description": "Exemples de code pratiques et modèles",
                                      "href": getLocalizedHref("/docs/examples"),
                                      "external": false
                              },
                              {
                                      "title": "Journal des Modifications",
                                      "description": "Mises à jour de version et enregistrements de modifications",
                                      "href": getLocalizedHref("/docs/changelog"),
                                      "external": false
                              }
                      ]
              },
              "techSpecs": {
                      "title": "Spécifications Techniques",
                      "subtitle": "Découvrez les fonctionnalités techniques de Gemini CLI et la portée du support",
                      "categories": [
                              {
                                      "category": "Langages Supportés",
                                      "items": [
                                              "JavaScript/TypeScript",
                                              "Python",
                                              "Java",
                                              "C#",
                                              "Go",
                                              "Rust",
                                              "PHP",
                                              "Ruby"
                                      ]
                              },
                              {
                                      "category": "Support de Plateforme",
                                      "items": [
                                              "Windows 10+",
                                              "macOS 10.15+",
                                              "Linux (Ubuntu 18.04+)",
                                              "Docker"
                                      ]
                              },
                              {
                                      "category": "Méthodes d'Intégration",
                                      "items": [
                                              "Interface en Ligne de Commande",
                                              "API Node.js",
                                              "API REST",
                                              "WebSocket",
                                              "Protocole MCP"
                                      ]
                              },
                              {
                                      "category": "Types d'Extension",
                                      "items": [
                                              "Support de Langage",
                                              "Intégration d'Outils",
                                              "Commandes Personnalisées",
                                              "Extensions UI",
                                              "Serveurs MCP"
                                      ]
                              }
                      ]
              },
              "docSections": {
                      "title": "Catégories de Documentation",
                      "subtitle": "Documentation technique détaillée organisée par sujet",
                      "sections": [
                              {
                                      "id": "getting-started",
                                      "title": "Commencer",
                                      "description": "Guide d'intégration développeur et configuration d'environnement",
                                      "color": "from-green-500 to-emerald-600",
                                      "articles": [
                                              {
                                                      "title": "Configuration de l'Environnement de Développement",
                                                      "description": "Configurer l'environnement de développement local et les dépendances",
                                                      "href": getLocalizedHref("/docs/development-setup"),
                                                      "tags": [
                                                              "Environnement",
                                                              "Dépendances"
                                                      ]
                                              },
                                              {
                                                      "title": "Structure du Projet",
                                                      "description": "Comprendre la structure d'organisation du code Gemini CLI",
                                                      "href": getLocalizedHref("/docs/project-structure"),
                                                      "tags": [
                                                              "Architecture",
                                                              "Organisation"
                                                      ]
                                              },
                                              {
                                                      "title": "Construction et Test",
                                                      "description": "Flux de travail de construction, test et débogage local",
                                                      "href": getLocalizedHref("/docs/build-and-test"),
                                                      "tags": [
                                                              "Construction",
                                                              "Test",
                                                              "Débogage"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "api-reference",
                                      "title": "Référence API",
                                      "description": "Documentation API détaillée et descriptions d'interface",
                                      "color": "from-blue-500 to-indigo-600",
                                      "articles": [
                                              {
                                                      "title": "API Principale",
                                                      "description": "Interfaces API principales et descriptions de méthodes",
                                                      "href": getLocalizedHref("/docs/core-api"),
                                                      "tags": [
                                                              "API",
                                                              "Principale"
                                                      ]
                                              },
                                              {
                                                      "title": "API de Plugin",
                                                      "description": "API de développement de plugin et interfaces d'extension",
                                                      "href": getLocalizedHref("/docs/plugin-api"),
                                                      "tags": [
                                                              "Plugin",
                                                              "Extension"
                                                      ]
                                              },
                                              {
                                                      "title": "API de Configuration",
                                                      "description": "API de gestion de configuration et descriptions d'options",
                                                      "href": getLocalizedHref("/docs/config-api"),
                                                      "tags": [
                                                              "Config",
                                                              "Paramètres"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "mcp-protocol",
                                      "title": "Protocole MCP",
                                      "description": "Guide d'intégration du Model Context Protocol",
                                      "color": "from-purple-500 to-pink-600",
                                      "articles": [
                                              {
                                                      "title": "Introduction au Protocole MCP",
                                                      "description": "Apprendre les concepts de base du Model Context Protocol",
                                                      "href": getLocalizedHref("/docs/mcp-introduction"),
                                                      "tags": [
                                                              "MCP",
                                                              "Protocole"
                                                      ]
                                              },
                                              {
                                                      "title": "Implémentation du Serveur MCP",
                                                      "description": "Guide complet pour créer des serveurs MCP personnalisés",
                                                      "href": getLocalizedHref("/docs/mcp-server"),
                                                      "tags": [
                                                              "MCP",
                                                              "Serveur",
                                                              "Implémentation"
                                                      ]
                                              },
                                              {
                                                      "title": "Intégration Client MCP",
                                                      "description": "Intégrer la fonctionnalité client MCP dans les applications",
                                                      "href": getLocalizedHref("/docs/mcp-client"),
                                                      "tags": [
                                                              "MCP",
                                                              "Client",
                                                              "Intégration"
                                                      ]
                                              },
                                              {
                                                      "title": "Guide de Migration",
                                                      "description": "Guide complet pour la mise à niveau depuis les anciennes versions",
                                                      "href": getLocalizedHref("/docs/migration-guide"),
                                                      "tags": [
                                                              "Migration",
                                                              "Mise à niveau"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "extensions",
                                      "title": "Développement d'Extensions",
                                      "description": "Créer des extensions et plugins personnalisés",
                                      "color": "from-orange-500 to-red-600",
                                      "articles": [
                                              {
                                                      "title": "Architecture d'Extension",
                                                      "description": "Comprendre la conception et l'architecture du système d'extension",
                                                      "href": getLocalizedHref("/docs/extension-architecture"),
                                                      "tags": [
                                                              "Extension",
                                                              "Architecture"
                                                      ]
                                              },
                                              {
                                                      "title": "Créer Votre Première Extension",
                                                      "description": "Construire des extensions personnalisées à partir de zéro",
                                                      "href": getLocalizedHref("/docs/first-extension"),
                                                      "tags": [
                                                              "Extension",
                                                              "Tutoriel"
                                                      ]
                                              },
                                              {
                                                      "title": "Guide de Publication d'Extension",
                                                      "description": "Meilleures pratiques pour empaqueter et publier des extensions",
                                                      "href": getLocalizedHref("/docs/extension-publishing"),
                                                      "tags": [
                                                              "Extension",
                                                              "Publication"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "contributing",
                                      "title": "Guide de Contribution",
                                      "description": "Participer au développement du projet et à la contribution communautaire",
                                      "color": "from-teal-500 to-cyan-600",
                                      "articles": [
                                              {
                                                      "title": "Processus de Contribution",
                                                      "description": "Apprendre comment contribuer au projet",
                                                      "href": getLocalizedHref("/docs/contributing-guide"),
                                                      "tags": [
                                                              "Contribution",
                                                              "Processus"
                                                      ]
                                              },
                                              {
                                                      "title": "Standards de Codage",
                                                      "description": "Style de code et standards de qualité",
                                                      "href": getLocalizedHref("/docs/coding-standards"),
                                                      "tags": [
                                                              "Standards",
                                                              "Qualité"
                                                      ]
                                              },
                                              {
                                                      "title": "Guide Pull Request",
                                                      "description": "Meilleures pratiques pour créer et soumettre des Pull Requests",
                                                      "href": getLocalizedHref("/docs/pull-request-guide"),
                                                      "tags": [
                                                              "PR",
                                                              "Meilleures Pratiques"
                                                      ]
                                              }
                                      ]
                              }
                      ]
              },
              "community": {
                      "title": "Communauté et Support",
                      "subtitle": "Rejoignez la communauté des développeurs, obtenez de l'aide et partagez des expériences",
                      "joinDiscussion": "Rejoindre la Discussion",
                      "reportIssue": "Signaler un Problème",
                      "contribute": "Contribuer au Code"
              }
      }
,
      de: {
              "title": "Entwicklerdokumentation",
              "subtitle": "Tauchen Sie tief in die technischen Details von Gemini CLI ein, lernen Sie, wie Sie Funktionen erweitern, das MCP-Protokoll integrieren und zum Open-Source-Projekt beitragen.",
              "quickNav": {
                      "title": "Schnellnavigation",
                      "subtitle": "Schneller Zugriff auf häufig verwendete Entwicklungsressourcen",
                      "links": [
                              {
                                      "title": "GitHub Repository",
                                      "description": "Quellcode anzeigen und Probleme einreichen",
                                      "href": "https://github.com/google-gemini/gemini-cli",
                                      "external": true
                              },
                              {
                                      "title": "API-Referenz",
                                      "description": "Vollständige API-Dokumentation",
                                      "href": getLocalizedHref("/docs/api-reference"),
                                      "external": false
                              },
                              {
                                      "title": "Code-Beispiele",
                                      "description": "Praktische Code-Beispiele und Vorlagen",
                                      "href": getLocalizedHref("/docs/examples"),
                                      "external": false
                              },
                              {
                                      "title": "Änderungsprotokoll",
                                      "description": "Versionsupdates und Änderungsaufzeichnungen",
                                      "href": getLocalizedHref("/docs/changelog"),
                                      "external": false
                              }
                      ]
              },
              "techSpecs": {
                      "title": "Technische Spezifikationen",
                      "subtitle": "Erfahren Sie mehr über die technischen Funktionen und den Unterstützungsbereich von Gemini CLI",
                      "categories": [
                              {
                                      "category": "Unterstützte Sprachen",
                                      "items": [
                                              "JavaScript/TypeScript",
                                              "Python",
                                              "Java",
                                              "C#",
                                              "Go",
                                              "Rust",
                                              "PHP",
                                              "Ruby"
                                      ]
                              },
                              {
                                      "category": "Plattformunterstützung",
                                      "items": [
                                              "Windows 10+",
                                              "macOS 10.15+",
                                              "Linux (Ubuntu 18.04+)",
                                              "Docker"
                                      ]
                              },
                              {
                                      "category": "Integrationsmethoden",
                                      "items": [
                                              "Befehlszeilenschnittstelle",
                                              "Node.js API",
                                              "REST API",
                                              "WebSocket",
                                              "MCP-Protokoll"
                                      ]
                              },
                              {
                                      "category": "Erweiterungstypen",
                                      "items": [
                                              "Sprachunterstützung",
                                              "Tool-Integration",
                                              "Benutzerdefinierte Befehle",
                                              "UI-Erweiterungen",
                                              "MCP-Server"
                                      ]
                              }
                      ]
              },
              "docSections": {
                      "title": "Dokumentationskategorien",
                      "subtitle": "Detaillierte technische Dokumentation nach Themen organisiert",
                      "sections": [
                              {
                                      "id": "getting-started",
                                      "title": "Erste Schritte",
                                      "description": "Entwickler-Onboarding-Leitfaden und Umgebungseinrichtung",
                                      "color": "from-green-500 to-emerald-600",
                                      "articles": [
                                              {
                                                      "title": "Entwicklungsumgebung einrichten",
                                                      "description": "Lokale Entwicklungsumgebung und Abhängigkeiten konfigurieren",
                                                      "href": getLocalizedHref("/docs/development-setup"),
                                                      "tags": [
                                                              "Umgebung",
                                                              "Abhängigkeiten"
                                                      ]
                                              },
                                              {
                                                      "title": "Projektstruktur",
                                                      "description": "Verstehen Sie die Code-Organisationsstruktur von Gemini CLI",
                                                      "href": getLocalizedHref("/docs/project-structure"),
                                                      "tags": [
                                                              "Architektur",
                                                              "Organisation"
                                                      ]
                                              },
                                              {
                                                      "title": "Erstellen und Testen",
                                                      "description": "Lokaler Build-, Test- und Debugging-Workflow",
                                                      "href": getLocalizedHref("/docs/build-and-test"),
                                                      "tags": [
                                                              "Build",
                                                              "Testen",
                                                              "Debug"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "api-reference",
                                      "title": "API-Referenz",
                                      "description": "Detaillierte API-Dokumentation und Schnittstellenbeschreibungen",
                                      "color": "from-blue-500 to-indigo-600",
                                      "articles": [
                                              {
                                                      "title": "Kern-API",
                                                      "description": "Kern-API-Schnittstellen und Methodenbeschreibungen",
                                                      "href": getLocalizedHref("/docs/core-api"),
                                                      "tags": [
                                                              "API",
                                                              "Kern"
                                                      ]
                                              },
                                              {
                                                      "title": "Plugin-API",
                                                      "description": "Plugin-Entwicklungs-API und Erweiterungsschnittstellen",
                                                      "href": getLocalizedHref("/docs/plugin-api"),
                                                      "tags": [
                                                              "Plugin",
                                                              "Erweiterung"
                                                      ]
                                              },
                                              {
                                                      "title": "Konfigurations-API",
                                                      "description": "Konfigurationsverwaltungs-API und Optionsbeschreibungen",
                                                      "href": getLocalizedHref("/docs/config-api"),
                                                      "tags": [
                                                              "Konfiguration",
                                                              "Einstellungen"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "mcp-protocol",
                                      "title": "MCP-Protokoll",
                                      "description": "Model Context Protocol Integrationsleitfaden",
                                      "color": "from-purple-500 to-pink-600",
                                      "articles": [
                                              {
                                                      "title": "MCP-Protokoll-Einführung",
                                                      "description": "Lernen Sie die Grundkonzepte des Model Context Protocol",
                                                      "href": getLocalizedHref("/docs/mcp-introduction"),
                                                      "tags": [
                                                              "MCP",
                                                              "Protokoll"
                                                      ]
                                              },
                                              {
                                                      "title": "MCP-Server implementieren",
                                                      "description": "Vollständiger Leitfaden zur Erstellung benutzerdefinierter MCP-Server",
                                                      "href": getLocalizedHref("/docs/mcp-server"),
                                                      "tags": [
                                                              "MCP",
                                                              "Server",
                                                              "Implementierung"
                                                      ]
                                              },
                                              {
                                                      "title": "MCP-Client-Integration",
                                                      "description": "MCP-Client-Funktionalität in Anwendungen integrieren",
                                                      "href": getLocalizedHref("/docs/mcp-client"),
                                                      "tags": [
                                                              "MCP",
                                                              "Client",
                                                              "Integration"
                                                      ]
                                              },
                                              {
                                                      "title": "Migrationsleitfaden",
                                                      "description": "Vollständiger Leitfaden für das Upgrade von älteren Versionen",
                                                      "href": getLocalizedHref("/docs/migration-guide"),
                                                      "tags": [
                                                              "Migration",
                                                              "Upgrade"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "extensions",
                                      "title": "Erweiterungsentwicklung",
                                      "description": "Benutzerdefinierte Erweiterungen und Plugins erstellen",
                                      "color": "from-orange-500 to-red-600",
                                      "articles": [
                                              {
                                                      "title": "Erweiterungsarchitektur",
                                                      "description": "Verstehen Sie das Design und die Architektur des Erweiterungssystems",
                                                      "href": getLocalizedHref("/docs/extension-architecture"),
                                                      "tags": [
                                                              "Erweiterung",
                                                              "Architektur"
                                                      ]
                                              },
                                              {
                                                      "title": "Ihre erste Erweiterung erstellen",
                                                      "description": "Benutzerdefinierte Erweiterungen von Grund auf erstellen",
                                                      "href": getLocalizedHref("/docs/first-extension"),
                                                      "tags": [
                                                              "Erweiterung",
                                                              "Tutorial"
                                                      ]
                                              },
                                              {
                                                      "title": "Erweiterungs-Veröffentlichungsleitfaden",
                                                      "description": "Best Practices für das Verpacken und Veröffentlichen von Erweiterungen",
                                                      "href": getLocalizedHref("/docs/extension-publishing"),
                                                      "tags": [
                                                              "Erweiterung",
                                                              "Veröffentlichung"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "contributing",
                                      "title": "Beitragsleitfaden",
                                      "description": "An der Projektentwicklung und dem Community-Beitrag teilnehmen",
                                      "color": "from-teal-500 to-cyan-600",
                                      "articles": [
                                              {
                                                      "title": "Beitragsprozess",
                                                      "description": "Lernen Sie, wie Sie zum Projekt beitragen",
                                                      "href": getLocalizedHref("/docs/contributing-guide"),
                                                      "tags": [
                                                              "Beitrag",
                                                              "Prozess"
                                                      ]
                                              },
                                              {
                                                      "title": "Coding-Standards",
                                                      "description": "Code-Stil und Qualitätsstandards",
                                                      "href": getLocalizedHref("/docs/coding-standards"),
                                                      "tags": [
                                                              "Standards",
                                                              "Qualität"
                                                      ]
                                              },
                                              {
                                                      "title": "Pull Request Leitfaden",
                                                      "description": "Best Practices für das Erstellen und Einreichen von Pull Requests",
                                                      "href": getLocalizedHref("/docs/pull-request-guide"),
                                                      "tags": [
                                                              "PR",
                                                              "Best Practices"
                                                      ]
                                              }
                                      ]
                              }
                      ]
              },
              "community": {
                      "title": "Community & Support",
                      "subtitle": "Treten Sie der Entwickler-Community bei, erhalten Sie Hilfe und teilen Sie Erfahrungen",
                      "joinDiscussion": "An Diskussion teilnehmen",
                      "reportIssue": "Problem melden",
                      "contribute": "Code beitragen"
              }
      },
      ja: {
              "title": "開発者ドキュメント",
              "subtitle": "Gemini CLIの技術的詳細を深く理解し、機能の拡張、MCPプロトコルの統合、オープンソースプロジェクトへの貢献方法を学びます。",
              "quickNav": {
                      "title": "クイックナビゲーション",
                      "subtitle": "よく使用される開発リソースへの迅速なアクセス",
                      "links": [
                              {
                                      "title": "GitHubリポジトリ",
                                      "description": "ソースコードを表示し、問題を報告",
                                      "href": "https://github.com/google-gemini/gemini-cli",
                                      "external": true
                              },
                              {
                                      "title": "APIリファレンス",
                                      "description": "完全なAPIドキュメント",
                                      "href": getLocalizedHref("/docs/api-reference"),
                                      "external": false
                              },
                              {
                                      "title": "コード例",
                                      "description": "実用的なコード例とテンプレート",
                                      "href": getLocalizedHref("/docs/examples"),
                                      "external": false
                              },
                              {
                                      "title": "変更履歴",
                                      "description": "バージョン更新と変更記録",
                                      "href": getLocalizedHref("/docs/changelog"),
                                      "external": false
                              }
                      ]
              },
              "techSpecs": {
                      "title": "技術仕様",
                      "subtitle": "Gemini CLIの技術的機能とサポート範囲について学ぶ",
                      "categories": [
                              {
                                      "category": "サポート言語",
                                      "items": [
                                              "JavaScript/TypeScript",
                                              "Python",
                                              "Java",
                                              "C#",
                                              "Go",
                                              "Rust",
                                              "PHP",
                                              "Ruby"
                                      ]
                              },
                              {
                                      "category": "プラットフォームサポート",
                                      "items": [
                                              "Windows 10+",
                                              "macOS 10.15+",
                                              "Linux (Ubuntu 18.04+)",
                                              "Docker"
                                      ]
                              },
                              {
                                      "category": "統合方法",
                                      "items": [
                                              "コマンドラインインターフェース",
                                              "Node.js API",
                                              "REST API",
                                              "WebSocket",
                                              "MCPプロトコル"
                                      ]
                              },
                              {
                                      "category": "拡張タイプ",
                                      "items": [
                                              "言語サポート",
                                              "ツール統合",
                                              "カスタムコマンド",
                                              "UI拡張",
                                              "MCPサーバー"
                                      ]
                              }
                      ]
              },
              "docSections": {
                      "title": "ドキュメントカテゴリ",
                      "subtitle": "トピック別に整理された詳細な技術ドキュメント",
                      "sections": [
                              {
                                      "id": "getting-started",
                                      "title": "始める",
                                      "description": "開発者オンボーディングガイドと環境セットアップ",
                                      "color": "from-green-500 to-emerald-600",
                                      "articles": [
                                              {
                                                      "title": "開発環境セットアップ",
                                                      "description": "ローカル開発環境と依存関係を設定",
                                                      "href": getLocalizedHref("/docs/development-setup"),
                                                      "tags": [
                                                              "環境",
                                                              "依存関係"
                                                      ]
                                              },
                                              {
                                                      "title": "プロジェクト構造",
                                                      "description": "Gemini CLIのコード組織構造を理解",
                                                      "href": getLocalizedHref("/docs/project-structure"),
                                                      "tags": [
                                                              "アーキテクチャ",
                                                              "組織"
                                                      ]
                                              },
                                              {
                                                      "title": "ビルドとテスト",
                                                      "description": "ローカルビルド、テスト、デバッグワークフロー",
                                                      "href": getLocalizedHref("/docs/build-and-test"),
                                                      "tags": [
                                                              "ビルド",
                                                              "テスト",
                                                              "デバッグ"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "api-reference",
                                      "title": "APIリファレンス",
                                      "description": "詳細なAPIドキュメントとインターフェース説明",
                                      "color": "from-blue-500 to-indigo-600",
                                      "articles": [
                                              {
                                                      "title": "コアAPI",
                                                      "description": "コアAPIインターフェースとメソッド説明",
                                                      "href": getLocalizedHref("/docs/core-api"),
                                                      "tags": [
                                                              "API",
                                                              "コア"
                                                      ]
                                              },
                                              {
                                                      "title": "プラグインAPI",
                                                      "description": "プラグイン開発APIと拡張インターフェース",
                                                      "href": getLocalizedHref("/docs/plugin-api"),
                                                      "tags": [
                                                              "プラグイン",
                                                              "拡張"
                                                      ]
                                              },
                                              {
                                                      "title": "設定API",
                                                      "description": "設定管理APIとオプション説明",
                                                      "href": getLocalizedHref("/docs/config-api"),
                                                      "tags": [
                                                              "設定",
                                                              "構成"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "mcp-protocol",
                                      "title": "MCPプロトコル",
                                      "description": "Model Context Protocol統合ガイド",
                                      "color": "from-purple-500 to-pink-600",
                                      "articles": [
                                              {
                                                      "title": "MCPプロトコル紹介",
                                                      "description": "Model Context Protocolの基本概念を学ぶ",
                                                      "href": getLocalizedHref("/docs/mcp-introduction"),
                                                      "tags": [
                                                              "MCP",
                                                              "プロトコル"
                                                      ]
                                              },
                                              {
                                                      "title": "MCPサーバー実装",
                                                      "description": "カスタムMCPサーバー作成の完全ガイド",
                                                      "href": getLocalizedHref("/docs/mcp-server"),
                                                      "tags": [
                                                              "MCP",
                                                              "サーバー",
                                                              "実装"
                                                      ]
                                              },
                                              {
                                                      "title": "MCPクライアント統合",
                                                      "description": "アプリケーションにMCPクライアント機能を統合",
                                                      "href": getLocalizedHref("/docs/mcp-client"),
                                                      "tags": [
                                                              "MCP",
                                                              "クライアント",
                                                              "統合"
                                                      ]
                                              },
                                              {
                                                      "title": "移行ガイド",
                                                      "description": "古いバージョンからのアップグレードのための完全ガイド",
                                                      "href": getLocalizedHref("/docs/migration-guide"),
                                                      "tags": [
                                                              "移行",
                                                              "アップグレード"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "extensions",
                                      "title": "拡張開発",
                                      "description": "カスタム拡張とプラグインを作成",
                                      "color": "from-orange-500 to-red-600",
                                      "articles": [
                                              {
                                                      "title": "拡張アーキテクチャ",
                                                      "description": "拡張システムの設計とアーキテクチャを理解",
                                                      "href": getLocalizedHref("/docs/extension-architecture"),
                                                      "tags": [
                                                              "拡張",
                                                              "アーキテクチャ"
                                                      ]
                                              },
                                              {
                                                      "title": "最初の拡張を作成",
                                                      "description": "ゼロからカスタム拡張を構築",
                                                      "href": getLocalizedHref("/docs/first-extension"),
                                                      "tags": [
                                                              "拡張",
                                                              "チュートリアル"
                                                      ]
                                              },
                                              {
                                                      "title": "拡張公開ガイド",
                                                      "description": "拡張のパッケージ化と公開のベストプラクティス",
                                                      "href": getLocalizedHref("/docs/extension-publishing"),
                                                      "tags": [
                                                              "拡張",
                                                              "公開"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "contributing",
                                      "title": "貢献ガイド",
                                      "description": "プロジェクト開発とコミュニティ貢献に参加",
                                      "color": "from-teal-500 to-cyan-600",
                                      "articles": [
                                              {
                                                      "title": "貢献プロセス",
                                                      "description": "プロジェクトへの貢献方法を学ぶ",
                                                      "href": getLocalizedHref("/docs/contributing-guide"),
                                                      "tags": [
                                                              "貢献",
                                                              "プロセス"
                                                      ]
                                              },
                                              {
                                                      "title": "コーディング標準",
                                                      "description": "コードスタイルと品質標準",
                                                      "href": getLocalizedHref("/docs/coding-standards"),
                                                      "tags": [
                                                              "標準",
                                                              "品質"
                                                      ]
                                              },
                                              {
                                                      "title": "Pull Requestガイド",
                                                      "description": "Pull Requestの作成と提出のベストプラクティス",
                                                      "href": getLocalizedHref("/docs/pull-request-guide"),
                                                      "tags": [
                                                              "PR",
                                                              "ベストプラクティス"
                                                      ]
                                              }
                                      ]
                              }
                      ]
              },
              "community": {
                      "title": "コミュニティ＆サポート",
                      "subtitle": "開発者コミュニティに参加し、ヘルプを得て経験を共有",
                      "joinDiscussion": "ディスカッションに参加",
                      "reportIssue": "問題を報告",
                      "contribute": "コードに貢献"
              }
      },
      ko: {
              "title": "개발자 문서",
              "subtitle": "Gemini CLI의 기술적 세부사항을 깊이 이해하고, 기능 확장, MCP 프로토콜 통합, 오픈소스 프로젝트 기여 방법을 배우세요.",
              "quickNav": {
                      "title": "빠른 탐색",
                      "subtitle": "자주 사용되는 개발 리소스에 빠르게 접근",
                      "links": [
                              {
                                      "title": "GitHub 저장소",
                                      "description": "소스 코드 보기 및 문제 제출",
                                      "href": "https://github.com/google-gemini/gemini-cli",
                                      "external": true
                              },
                              {
                                      "title": "API 참조",
                                      "description": "완전한 API 문서",
                                      "href": getLocalizedHref("/docs/api-reference"),
                                      "external": false
                              },
                              {
                                      "title": "코드 예제",
                                      "description": "실용적인 코드 예제와 템플릿",
                                      "href": getLocalizedHref("/docs/examples"),
                                      "external": false
                              },
                              {
                                      "title": "변경 로그",
                                      "description": "버전 업데이트 및 변경 기록",
                                      "href": getLocalizedHref("/docs/changelog"),
                                      "external": false
                              }
                      ]
              },
              "techSpecs": {
                      "title": "기술 사양",
                      "subtitle": "Gemini CLI의 기술적 기능과 지원 범위에 대해 알아보기",
                      "categories": [
                              {
                                      "category": "지원 언어",
                                      "items": [
                                              "JavaScript/TypeScript",
                                              "Python",
                                              "Java",
                                              "C#",
                                              "Go",
                                              "Rust",
                                              "PHP",
                                              "Ruby"
                                      ]
                              },
                              {
                                      "category": "플랫폼 지원",
                                      "items": [
                                              "Windows 10+",
                                              "macOS 10.15+",
                                              "Linux (Ubuntu 18.04+)",
                                              "Docker"
                                      ]
                              },
                              {
                                      "category": "통합 방법",
                                      "items": [
                                              "명령줄 인터페이스",
                                              "Node.js API",
                                              "REST API",
                                              "WebSocket",
                                              "MCP 프로토콜"
                                      ]
                              },
                              {
                                      "category": "확장 유형",
                                      "items": [
                                              "언어 지원",
                                              "도구 통합",
                                              "사용자 정의 명령",
                                              "UI 확장",
                                              "MCP 서버"
                                      ]
                              }
                      ]
              },
              "docSections": {
                      "title": "문서 카테고리",
                      "subtitle": "주제별로 정리된 상세한 기술 문서",
                      "sections": [
                              {
                                      "id": "getting-started",
                                      "title": "시작하기",
                                      "description": "개발자 온보딩 가이드 및 환경 설정",
                                      "color": "from-green-500 to-emerald-600",
                                      "articles": [
                                              {
                                                      "title": "개발 환경 설정",
                                                      "description": "로컬 개발 환경 및 종속성 구성",
                                                      "href": getLocalizedHref("/docs/development-setup"),
                                                      "tags": [
                                                              "환경",
                                                              "종속성"
                                                      ]
                                              },
                                              {
                                                      "title": "프로젝트 구조",
                                                      "description": "Gemini CLI 코드 조직 구조 이해",
                                                      "href": getLocalizedHref("/docs/project-structure"),
                                                      "tags": [
                                                              "아키텍처",
                                                              "조직"
                                                      ]
                                              },
                                              {
                                                      "title": "빌드 및 테스트",
                                                      "description": "로컬 빌드, 테스트 및 디버깅 워크플로우",
                                                      "href": getLocalizedHref("/docs/build-and-test"),
                                                      "tags": [
                                                              "빌드",
                                                              "테스트",
                                                              "디버그"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "api-reference",
                                      "title": "API 참조",
                                      "description": "상세한 API 문서 및 인터페이스 설명",
                                      "color": "from-blue-500 to-indigo-600",
                                      "articles": [
                                              {
                                                      "title": "핵심 API",
                                                      "description": "핵심 API 인터페이스 및 메서드 설명",
                                                      "href": getLocalizedHref("/docs/core-api"),
                                                      "tags": [
                                                              "API",
                                                              "핵심"
                                                      ]
                                              },
                                              {
                                                      "title": "플러그인 API",
                                                      "description": "플러그인 개발 API 및 확장 인터페이스",
                                                      "href": getLocalizedHref("/docs/plugin-api"),
                                                      "tags": [
                                                              "플러그인",
                                                              "확장"
                                                      ]
                                              },
                                              {
                                                      "title": "구성 API",
                                                      "description": "구성 관리 API 및 옵션 설명",
                                                      "href": getLocalizedHref("/docs/config-api"),
                                                      "tags": [
                                                              "구성",
                                                              "설정"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "mcp-protocol",
                                      "title": "MCP 프로토콜",
                                      "description": "Model Context Protocol 통합 가이드",
                                      "color": "from-purple-500 to-pink-600",
                                      "articles": [
                                              {
                                                      "title": "MCP 프로토콜 소개",
                                                      "description": "Model Context Protocol의 기본 개념 학습",
                                                      "href": getLocalizedHref("/docs/mcp-introduction"),
                                                      "tags": [
                                                              "MCP",
                                                              "프로토콜"
                                                      ]
                                              },
                                              {
                                                      "title": "MCP 서버 구현",
                                                      "description": "사용자 정의 MCP 서버 생성을 위한 완전한 가이드",
                                                      "href": getLocalizedHref("/docs/mcp-server"),
                                                      "tags": [
                                                              "MCP",
                                                              "서버",
                                                              "구현"
                                                      ]
                                              },
                                              {
                                                      "title": "MCP 클라이언트 통합",
                                                      "description": "애플리케이션에 MCP 클라이언트 기능 통합",
                                                      "href": getLocalizedHref("/docs/mcp-client"),
                                                      "tags": [
                                                              "MCP",
                                                              "클라이언트",
                                                              "통합"
                                                      ]
                                              },
                                              {
                                                      "title": "마이그레이션 가이드",
                                                      "description": "이전 버전에서 업그레이드하기 위한 완전한 가이드",
                                                      "href": getLocalizedHref("/docs/migration-guide"),
                                                      "tags": [
                                                              "마이그레이션",
                                                              "업그레이드"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "extensions",
                                      "title": "확장 개발",
                                      "description": "사용자 정의 확장 및 플러그인 생성",
                                      "color": "from-orange-500 to-red-600",
                                      "articles": [
                                              {
                                                      "title": "확장 아키텍처",
                                                      "description": "확장 시스템 설계 및 아키텍처 이해",
                                                      "href": getLocalizedHref("/docs/extension-architecture"),
                                                      "tags": [
                                                              "확장",
                                                              "아키텍처"
                                                      ]
                                              },
                                              {
                                                      "title": "첫 번째 확장 만들기",
                                                      "description": "처음부터 사용자 정의 확장 구축",
                                                      "href": getLocalizedHref("/docs/first-extension"),
                                                      "tags": [
                                                              "확장",
                                                              "튜토리얼"
                                                      ]
                                              },
                                              {
                                                      "title": "확장 게시 가이드",
                                                      "description": "확장 패키징 및 게시를 위한 모범 사례",
                                                      "href": getLocalizedHref("/docs/extension-publishing"),
                                                      "tags": [
                                                              "확장",
                                                              "게시"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "contributing",
                                      "title": "기여 가이드",
                                      "description": "프로젝트 개발 및 커뮤니티 기여에 참여",
                                      "color": "from-teal-500 to-cyan-600",
                                      "articles": [
                                              {
                                                      "title": "기여 프로세스",
                                                      "description": "프로젝트에 기여하는 방법 학습",
                                                      "href": getLocalizedHref("/docs/contributing-guide"),
                                                      "tags": [
                                                              "기여",
                                                              "프로세스"
                                                      ]
                                              },
                                              {
                                                      "title": "코딩 표준",
                                                      "description": "코드 스타일 및 품질 표준",
                                                      "href": getLocalizedHref("/docs/coding-standards"),
                                                      "tags": [
                                                              "표준",
                                                              "품질"
                                                      ]
                                              },
                                              {
                                                      "title": "Pull Request 가이드",
                                                      "description": "Pull Request 생성 및 제출을 위한 모범 사례",
                                                      "href": getLocalizedHref("/docs/pull-request-guide"),
                                                      "tags": [
                                                              "PR",
                                                              "모범 사례"
                                                      ]
                                              }
                                      ]
                              }
                      ]
              },
              "community": {
                      "title": "커뮤니티 및 지원",
                      "subtitle": "개발자 커뮤니티에 참여하고, 도움을 받고 경험을 공유하세요",
                      "joinDiscussion": "토론 참여",
                      "reportIssue": "문제 신고",
                      "contribute": "코드 기여"
              }
      }
,
      es: {
              "title": "Documentación para Desarrolladores",
              "subtitle": "Profundice en los detalles técnicos de Gemini CLI, aprenda a extender funcionalidades, integrar el protocolo MCP y contribuir al proyecto de código abierto.",
              "quickNav": {
                      "title": "Navegación Rápida",
                      "subtitle": "Acceso rápido a recursos de desarrollo comúnmente utilizados",
                      "links": [
                              {
                                      "title": "Repositorio GitHub",
                                      "description": "Ver código fuente y enviar problemas",
                                      "href": "https://github.com/google-gemini/gemini-cli",
                                      "external": true
                              },
                              {
                                      "title": "Referencia API",
                                      "description": "Documentación API completa",
                                      "href": getLocalizedHref("/docs/api-reference"),
                                      "external": false
                              },
                              {
                                      "title": "Ejemplos de Código",
                                      "description": "Ejemplos de código prácticos y plantillas",
                                      "href": getLocalizedHref("/docs/examples"),
                                      "external": false
                              },
                              {
                                      "title": "Registro de Cambios",
                                      "description": "Actualizaciones de versión y registros de cambios",
                                      "href": getLocalizedHref("/docs/changelog"),
                                      "external": false
                              }
                      ]
              },
              "techSpecs": {
                      "title": "Especificaciones Técnicas",
                      "subtitle": "Aprenda sobre las características técnicas de Gemini CLI y el alcance del soporte",
                      "categories": [
                              {
                                      "category": "Lenguajes Soportados",
                                      "items": [
                                              "JavaScript/TypeScript",
                                              "Python",
                                              "Java",
                                              "C#",
                                              "Go",
                                              "Rust",
                                              "PHP",
                                              "Ruby"
                                      ]
                              },
                              {
                                      "category": "Soporte de Plataforma",
                                      "items": [
                                              "Windows 10+",
                                              "macOS 10.15+",
                                              "Linux (Ubuntu 18.04+)",
                                              "Docker"
                                      ]
                              },
                              {
                                      "category": "Métodos de Integración",
                                      "items": [
                                              "Interfaz de Línea de Comandos",
                                              "API Node.js",
                                              "API REST",
                                              "WebSocket",
                                              "Protocolo MCP"
                                      ]
                              },
                              {
                                      "category": "Tipos de Extensión",
                                      "items": [
                                              "Soporte de Lenguaje",
                                              "Integración de Herramientas",
                                              "Comandos Personalizados",
                                              "Extensiones UI",
                                              "Servidores MCP"
                                      ]
                              }
                      ]
              },
              "docSections": {
                      "title": "Categorías de Documentación",
                      "subtitle": "Documentación técnica detallada organizada por tema",
                      "sections": [
                              {
                                      "id": "getting-started",
                                      "title": "Comenzando",
                                      "description": "Guía de incorporación para desarrolladores y configuración del entorno",
                                      "color": "from-green-500 to-emerald-600",
                                      "articles": [
                                              {
                                                      "title": "Configuración del Entorno de Desarrollo",
                                                      "description": "Configurar entorno de desarrollo local y dependencias",
                                                      "href": getLocalizedHref("/docs/development-setup"),
                                                      "tags": [
                                                              "Entorno",
                                                              "Dependencias"
                                                      ]
                                              },
                                              {
                                                      "title": "Estructura del Proyecto",
                                                      "description": "Entender la estructura de organización del código de Gemini CLI",
                                                      "href": getLocalizedHref("/docs/project-structure"),
                                                      "tags": [
                                                              "Arquitectura",
                                                              "Organización"
                                                      ]
                                              },
                                              {
                                                      "title": "Construcción y Pruebas",
                                                      "description": "Flujo de trabajo de construcción, pruebas y depuración local",
                                                      "href": getLocalizedHref("/docs/build-and-test"),
                                                      "tags": [
                                                              "Construcción",
                                                              "Pruebas",
                                                              "Depuración"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "api-reference",
                                      "title": "Referencia API",
                                      "description": "Documentación API detallada y descripciones de interfaz",
                                      "color": "from-blue-500 to-indigo-600",
                                      "articles": [
                                              {
                                                      "title": "API Principal",
                                                      "description": "Interfaces API principales y descripciones de métodos",
                                                      "href": getLocalizedHref("/docs/core-api"),
                                                      "tags": [
                                                              "API",
                                                              "Principal"
                                                      ]
                                              },
                                              {
                                                      "title": "API de Plugin",
                                                      "description": "API de desarrollo de plugins e interfaces de extensión",
                                                      "href": getLocalizedHref("/docs/plugin-api"),
                                                      "tags": [
                                                              "Plugin",
                                                              "Extensión"
                                                      ]
                                              },
                                              {
                                                      "title": "API de Configuración",
                                                      "description": "API de gestión de configuración y descripciones de opciones",
                                                      "href": getLocalizedHref("/docs/config-api"),
                                                      "tags": [
                                                              "Configuración",
                                                              "Ajustes"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "mcp-protocol",
                                      "title": "Protocolo MCP",
                                      "description": "Guía de integración del Model Context Protocol",
                                      "color": "from-purple-500 to-pink-600",
                                      "articles": [
                                              {
                                                      "title": "Introducción al Protocolo MCP",
                                                      "description": "Aprender los conceptos básicos del Model Context Protocol",
                                                      "href": getLocalizedHref("/docs/mcp-introduction"),
                                                      "tags": [
                                                              "MCP",
                                                              "Protocolo"
                                                      ]
                                              },
                                              {
                                                      "title": "Implementación del Servidor MCP",
                                                      "description": "Guía completa para crear servidores MCP personalizados",
                                                      "href": getLocalizedHref("/docs/mcp-server"),
                                                      "tags": [
                                                              "MCP",
                                                              "Servidor",
                                                              "Implementación"
                                                      ]
                                              },
                                              {
                                                      "title": "Integración del Cliente MCP",
                                                      "description": "Integrar funcionalidad del cliente MCP en aplicaciones",
                                                      "href": getLocalizedHref("/docs/mcp-client"),
                                                      "tags": [
                                                              "MCP",
                                                              "Cliente",
                                                              "Integración"
                                                      ]
                                              },
                                              {
                                                      "title": "Guía de Migración",
                                                      "description": "Guía completa para actualizar desde versiones anteriores",
                                                      "href": getLocalizedHref("/docs/migration-guide"),
                                                      "tags": [
                                                              "Migración",
                                                              "Actualización"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "extensions",
                                      "title": "Desarrollo de Extensiones",
                                      "description": "Crear extensiones y plugins personalizados",
                                      "color": "from-orange-500 to-red-600",
                                      "articles": [
                                              {
                                                      "title": "Arquitectura de Extensiones",
                                                      "description": "Entender el diseño y arquitectura del sistema de extensiones",
                                                      "href": getLocalizedHref("/docs/extension-architecture"),
                                                      "tags": [
                                                              "Extensión",
                                                              "Arquitectura"
                                                      ]
                                              },
                                              {
                                                      "title": "Creando Tu Primera Extensión",
                                                      "description": "Construir extensiones personalizadas desde cero",
                                                      "href": getLocalizedHref("/docs/first-extension"),
                                                      "tags": [
                                                              "Extensión",
                                                              "Tutorial"
                                                      ]
                                              },
                                              {
                                                      "title": "Guía de Publicación de Extensiones",
                                                      "description": "Mejores prácticas para empaquetar y publicar extensiones",
                                                      "href": getLocalizedHref("/docs/extension-publishing"),
                                                      "tags": [
                                                              "Extensión",
                                                              "Publicación"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "contributing",
                                      "title": "Guía de Contribución",
                                      "description": "Participar en el desarrollo del proyecto y contribución comunitaria",
                                      "color": "from-teal-500 to-cyan-600",
                                      "articles": [
                                              {
                                                      "title": "Proceso de Contribución",
                                                      "description": "Aprender cómo contribuir al proyecto",
                                                      "href": getLocalizedHref("/docs/contributing-guide"),
                                                      "tags": [
                                                              "Contribución",
                                                              "Proceso"
                                                      ]
                                              },
                                              {
                                                      "title": "Estándares de Codificación",
                                                      "description": "Estilo de código y estándares de calidad",
                                                      "href": getLocalizedHref("/docs/coding-standards"),
                                                      "tags": [
                                                              "Estándares",
                                                              "Calidad"
                                                      ]
                                              },
                                              {
                                                      "title": "Guía de Pull Request",
                                                      "description": "Mejores prácticas para crear y enviar Pull Requests",
                                                      "href": getLocalizedHref("/docs/pull-request-guide"),
                                                      "tags": [
                                                              "PR",
                                                              "Mejores Prácticas"
                                                      ]
                                              }
                                      ]
                              }
                      ]
              },
              "community": {
                      "title": "Comunidad y Soporte",
                      "subtitle": "Únete a la comunidad de desarrolladores, obtén ayuda y comparte experiencias",
                      "joinDiscussion": "Unirse a la Discusión",
                      "reportIssue": "Reportar Problema",
                      "contribute": "Contribuir Código"
              }
      },
      ru: {
              "title": "Документация для Разработчиков",
              "subtitle": "Погрузитесь в технические детали Gemini CLI, изучите расширение функциональности, интеграцию протокола MCP и вклад в проект с открытым исходным кодом.",
              "quickNav": {
                      "title": "Быстрая Навигация",
                      "subtitle": "Быстрый доступ к часто используемым ресурсам разработки",
                      "links": [
                              {
                                      "title": "GitHub Репозиторий",
                                      "description": "Просмотр исходного кода и отправка проблем",
                                      "href": "https://github.com/google-gemini/gemini-cli",
                                      "external": true
                              },
                              {
                                      "title": "Справочник API",
                                      "description": "Полная документация API",
                                      "href": getLocalizedHref("/docs/api-reference"),
                                      "external": false
                              },
                              {
                                      "title": "Примеры Кода",
                                      "description": "Практические примеры кода и шаблоны",
                                      "href": getLocalizedHref("/docs/examples"),
                                      "external": false
                              },
                              {
                                      "title": "Журнал Изменений",
                                      "description": "Обновления версий и записи изменений",
                                      "href": getLocalizedHref("/docs/changelog"),
                                      "external": false
                              }
                      ]
              },
              "techSpecs": {
                      "title": "Технические Спецификации",
                      "subtitle": "Узнайте о технических возможностях Gemini CLI и области поддержки",
                      "categories": [
                              {
                                      "category": "Поддерживаемые Языки",
                                      "items": [
                                              "JavaScript/TypeScript",
                                              "Python",
                                              "Java",
                                              "C#",
                                              "Go",
                                              "Rust",
                                              "PHP",
                                              "Ruby"
                                      ]
                              },
                              {
                                      "category": "Поддержка Платформ",
                                      "items": [
                                              "Windows 10+",
                                              "macOS 10.15+",
                                              "Linux (Ubuntu 18.04+)",
                                              "Docker"
                                      ]
                              },
                              {
                                      "category": "Методы Интеграции",
                                      "items": [
                                              "Интерфейс Командной Строки",
                                              "API Node.js",
                                              "REST API",
                                              "WebSocket",
                                              "Протокол MCP"
                                      ]
                              },
                              {
                                      "category": "Типы Расширений",
                                      "items": [
                                              "Поддержка Языков",
                                              "Интеграция Инструментов",
                                              "Пользовательские Команды",
                                              "UI Расширения",
                                              "MCP Серверы"
                                      ]
                              }
                      ]
              },
              "docSections": {
                      "title": "Категории Документации",
                      "subtitle": "Подробная техническая документация, организованная по темам",
                      "sections": [
                              {
                                      "id": "getting-started",
                                      "title": "Начало Работы",
                                      "description": "Руководство по адаптации разработчиков и настройке среды",
                                      "color": "from-green-500 to-emerald-600",
                                      "articles": [
                                              {
                                                      "title": "Настройка Среды Разработки",
                                                      "description": "Настройка локальной среды разработки и зависимостей",
                                                      "href": getLocalizedHref("/docs/development-setup"),
                                                      "tags": [
                                                              "Среда",
                                                              "Зависимости"
                                                      ]
                                              },
                                              {
                                                      "title": "Структура Проекта",
                                                      "description": "Понимание структуры организации кода Gemini CLI",
                                                      "href": getLocalizedHref("/docs/project-structure"),
                                                      "tags": [
                                                              "Архитектура",
                                                              "Организация"
                                                      ]
                                              },
                                              {
                                                      "title": "Сборка и Тестирование",
                                                      "description": "Рабочий процесс локальной сборки, тестирования и отладки",
                                                      "href": getLocalizedHref("/docs/build-and-test"),
                                                      "tags": [
                                                              "Сборка",
                                                              "Тестирование",
                                                              "Отладка"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "api-reference",
                                      "title": "Справочник API",
                                      "description": "Подробная документация API и описания интерфейсов",
                                      "color": "from-blue-500 to-indigo-600",
                                      "articles": [
                                              {
                                                      "title": "Основной API",
                                                      "description": "Основные интерфейсы API и описания методов",
                                                      "href": getLocalizedHref("/docs/core-api"),
                                                      "tags": [
                                                              "API",
                                                              "Ядро"
                                                      ]
                                              },
                                              {
                                                      "title": "API Плагинов",
                                                      "description": "API разработки плагинов и интерфейсы расширений",
                                                      "href": getLocalizedHref("/docs/plugin-api"),
                                                      "tags": [
                                                              "Плагин",
                                                              "Расширение"
                                                      ]
                                              },
                                              {
                                                      "title": "API Конфигурации",
                                                      "description": "API управления конфигурацией и описания опций",
                                                      "href": getLocalizedHref("/docs/config-api"),
                                                      "tags": [
                                                              "Конфигурация",
                                                              "Настройки"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "mcp-protocol",
                                      "title": "Протокол MCP",
                                      "description": "Руководство по интеграции Model Context Protocol",
                                      "color": "from-purple-500 to-pink-600",
                                      "articles": [
                                              {
                                                      "title": "Введение в Протокол MCP",
                                                      "description": "Изучение основных концепций Model Context Protocol",
                                                      "href": getLocalizedHref("/docs/mcp-introduction"),
                                                      "tags": [
                                                              "MCP",
                                                              "Протокол"
                                                      ]
                                              },
                                              {
                                                      "title": "Реализация MCP Сервера",
                                                      "description": "Полное руководство по созданию пользовательских MCP серверов",
                                                      "href": getLocalizedHref("/docs/mcp-server"),
                                                      "tags": [
                                                              "MCP",
                                                              "Сервер",
                                                              "Реализация"
                                                      ]
                                              },
                                              {
                                                      "title": "Интеграция MCP Клиента",
                                                      "description": "Интеграция функциональности MCP клиента в приложения",
                                                      "href": getLocalizedHref("/docs/mcp-client"),
                                                      "tags": [
                                                              "MCP",
                                                              "Клиент",
                                                              "Интеграция"
                                                      ]
                                              },
                                              {
                                                      "title": "Руководство по Миграции",
                                                      "description": "Полное руководство по обновлению со старых версий",
                                                      "href": getLocalizedHref("/docs/migration-guide"),
                                                      "tags": [
                                                              "Миграция",
                                                              "Обновление"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "extensions",
                                      "title": "Разработка Расширений",
                                      "description": "Создание пользовательских расширений и плагинов",
                                      "color": "from-orange-500 to-red-600",
                                      "articles": [
                                              {
                                                      "title": "Архитектура Расширений",
                                                      "description": "Понимание дизайна и архитектуры системы расширений",
                                                      "href": getLocalizedHref("/docs/extension-architecture"),
                                                      "tags": [
                                                              "Расширение",
                                                              "Архитектура"
                                                      ]
                                              },
                                              {
                                                      "title": "Создание Первого Расширения",
                                                      "description": "Построение пользовательских расширений с нуля",
                                                      "href": getLocalizedHref("/docs/first-extension"),
                                                      "tags": [
                                                              "Расширение",
                                                              "Учебник"
                                                      ]
                                              },
                                              {
                                                      "title": "Руководство по Публикации Расширений",
                                                      "description": "Лучшие практики упаковки и публикации расширений",
                                                      "href": getLocalizedHref("/docs/extension-publishing"),
                                                      "tags": [
                                                              "Расширение",
                                                              "Публикация"
                                                      ]
                                              }
                                      ]
                              },
                              {
                                      "id": "contributing",
                                      "title": "Руководство по Вкладу",
                                      "description": "Участие в разработке проекта и вкладе сообщества",
                                      "color": "from-teal-500 to-cyan-600",
                                      "articles": [
                                              {
                                                      "title": "Процесс Вклада",
                                                      "description": "Изучение того, как внести вклад в проект",
                                                      "href": getLocalizedHref("/docs/contributing-guide"),
                                                      "tags": [
                                                              "Вклад",
                                                              "Процесс"
                                                      ]
                                              },
                                              {
                                                      "title": "Стандарты Кодирования",
                                                      "description": "Стиль кода и стандарты качества",
                                                      "href": getLocalizedHref("/docs/coding-standards"),
                                                      "tags": [
                                                              "Стандарты",
                                                              "Качество"
                                                      ]
                                              },
                                              {
                                                      "title": "Руководство по Pull Request",
                                                      "description": "Лучшие практики создания и отправки Pull Requests",
                                                      "href": getLocalizedHref("/docs/pull-request-guide"),
                                                      "tags": [
                                                              "PR",
                                                              "Лучшие Практики"
                                                      ]
                                              }
                                      ]
                              }
                      ]
              },
              "community": {
                      "title": "Сообщество и Поддержка",
                      "subtitle": "Присоединяйтесь к сообществу разработчиков, получайте помощь и делитесь опытом",
                      "joinDiscussion": "Присоединиться к Обсуждению",
                      "reportIssue": "Сообщить о Проблеме",
                      "contribute": "Внести Вклад в Код"
              }
      }
    }
    return translations[locale as keyof typeof translations] || translations.en
  }

  const t = getTranslations(locale, getLocalizedHref)

  const sectionIcons = {
    'getting-started': RocketLaunchIcon,
    'api-reference': CodeBracketIcon,
    'mcp-protocol': PuzzlePieceIcon,
    'extensions': CogIcon,
    'contributing': ShieldCheckIcon
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.quickNav.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.quickNav.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.quickNav.links.map((link: any, index: number) => (
              <Link
                key={index}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link.title}
                  {link.external && (
                    <span className="ml-1 text-gray-400">↗</span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.techSpecs.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.techSpecs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.techSpecs.categories.map((spec: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.docSections.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.docSections.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {t.docSections.sections.map((section: any) => {
              const IconComponent = sectionIcons[section.id as keyof typeof sectionIcons]
              return (
                <div key={section.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${section.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.articles.map((article: any, index: number) => (
                      <Link
                        key={index}
                        href={article.href}
                        className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {article.tags.map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Community and Support */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.community.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.community.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/google-gemini/gemini-cli/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {t.community.joinDiscussion}
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {t.community.reportIssue}
              </Link>
              <Link
                href={getLocalizedHref("/docs/contributing-guide")}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t.community.contribute}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
