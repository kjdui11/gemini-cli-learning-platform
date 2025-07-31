import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  CogIcon,
  DocumentTextIcon,
  KeyIcon,
  PaintBrushIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '配置指南 - Gemini CLI 文档',
    en: 'Configuration Guide - Gemini CLI Documentation',
    hi: 'कॉन्फ़िगरेशन गाइड - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Guide de configuration - Documentation Gemini CLI',
    de: 'Konfigurationsanleitung - Gemini CLI Dokumentation',
    ja: '設定ガイド - Gemini CLI ドキュメント',
    ko: '구성 가이드 - Gemini CLI 문서',
    es: 'Guía de configuración - Documentación Gemini CLI',
    ru: 'Руководство по настройке - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '完整的 Gemini CLI 配置指南，包括 API 设置、模型选择、主题和高级选项。',
    en: 'Complete configuration guide for Gemini CLI including API settings, model selection, themes, and advanced options.',
    hi: 'API सेटिंग्स, मॉडल चयन, थीम और उन्नत विकल्पों सहित Gemini CLI के लिए पूर्ण कॉन्फ़िगरेशन गाइड।',
    fr: 'Guide de configuration complet pour Gemini CLI, y compris les paramètres API, la sélection de modèles, les thèmes et les options avancées.',
    de: 'Vollständiger Konfigurationsleitfaden für Gemini CLI einschließlich API-Einstellungen, Modellauswahl, Themes und erweiterte Optionen.',
    ja: 'API設定、モデル選択、テーマ、高度なオプションを含むGemini CLIの完全な設定ガイド。',
    ko: 'API 설정, 모델 선택, 테마 및 고급 옵션을 포함한 Gemini CLI의 완전한 구성 가이드.',
    es: 'Guía de configuración completa para Gemini CLI, incluyendo configuraciones de API, selección de modelos, temas y opciones avanzadas.',
    ru: 'Полное руководство по настройке Gemini CLI, включая настройки API, выбор модели, темы и расширенные параметры.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

const content = {
  zh: {
    title: '配置指南',
    subtitle: '自定义 Gemini CLI 以适应您的工作流程',
    commands: {
      title: '配置命令',
      subtitle: '管理配置的基本命令',
      list: [
        { command: 'gemini config list', description: '显示所有当前配置设置' },
        { command: 'gemini config get <key>', description: '获取特定设置的值' },
        { command: 'gemini config set <key> <value>', description: '设置配置值' },
        { command: 'gemini config unset <key>', description: '删除配置设置（恢复为默认值）' },
        { command: 'gemini config reset', description: '将所有设置重置为默认值' },
        { command: 'gemini config export', description: '将配置导出到文件' },
        { command: 'gemini config import <file>', description: '从文件导入配置' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'API 配置',
        description: '配置 API 密钥和模型设置',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: '您的 Google AI API 密钥',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: '要使用的默认模型',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: '创造性级别（0.0 到 1.0）',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: '最大响应长度',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: '界面设置',
        description: '自定义 CLI 外观和行为',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'CLI 的颜色主题',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: '默认输出格式',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: '启用流式响应',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: '要记住的对话轮数',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      },
      {
        id: 'tools',
        title: '工具和扩展',
        description: '配置工具和插件设置',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        settings: [
          {
            key: 'tools-enabled',
            description: '启用工具使用',
            type: 'boolean',
            example: 'gemini config set tools-enabled true',
            default: 'true'
          },
          {
            key: 'tool-timeout',
            description: '工具执行超时（秒）',
            type: 'number',
            example: 'gemini config set tool-timeout 30',
            default: '30'
          },
          {
            key: 'plugins-dir',
            description: '自定义插件目录',
            type: 'string',
            example: 'gemini config set plugins-dir ~/.gemini/plugins',
            default: '~/.gemini/plugins'
          }
        ]
      },
      {
        id: 'security',
        title: '安全设置',
        description: '安全和隐私配置',
        icon: ShieldCheckIcon,
        color: 'from-red-500 to-pink-600',
        settings: [
          {
            key: 'safe-mode',
            description: '为工具执行启用安全模式',
            type: 'boolean',
            example: 'gemini config set safe-mode true',
            default: 'true'
          },
          {
            key: 'log-level',
            description: '日志详细级别',
            type: 'string',
            example: 'gemini config set log-level info',
            default: 'info',
            options: ['error', 'warn', 'info', 'debug']
          },
          {
            key: 'data-collection',
            description: '允许匿名使用数据收集',
            type: 'boolean',
            example: 'gemini config set data-collection false',
            default: 'false'
          }
        ]
      }
    ],
    envVars: {
      title: '环境变量',
      subtitle: '使用环境变量的替代配置',
      common: {
        title: '常用环境变量',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: '用于身份验证的 API 密钥' },
          { name: 'GEMINI_MODEL=gemini-pro', description: '要使用的默认模型' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: '配置目录' }
        ]
      },
      setting: {
        title: '设置环境变量',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: '.env 文件', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: '配置文件',
      subtitle: '了解配置文件位置和格式',
      locations: [
        { name: '全局配置', path: '~/.config/gemini/config.json' },
        { name: '项目配置', path: '.gemini/config.json' },
        { name: '环境文件', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: '最佳实践',
      subtitle: '安全有效配置的建议',
      security: [
        '永远不要将 API 密钥提交到版本控制',
        '对敏感数据使用环境变量',
        '为工具执行启用安全模式',
        '定期轮换您的 API 密钥',
        '审查和限制工具权限'
      ],
      performance: [
        '根据用例调整温度',
        '设置适当的令牌限制',
        '启用流式传输以获得更好的用户体验',
        '配置合理的超时',
        '限制对话历史大小'
      ]
    }
  },
  en: {
    title: 'Configuration Guide',
    subtitle: 'Customize Gemini CLI to fit your workflow',
    commands: {
      title: 'Configuration Commands',
      subtitle: 'Essential commands for managing your configuration',
      list: [
        { command: 'gemini config list', description: 'Show all current configuration settings' },
        { command: 'gemini config get <key>', description: 'Get the value of a specific setting' },
        { command: 'gemini config set <key> <value>', description: 'Set a configuration value' },
        { command: 'gemini config unset <key>', description: 'Remove a configuration setting (revert to default)' },
        { command: 'gemini config reset', description: 'Reset all settings to default values' },
        { command: 'gemini config export', description: 'Export configuration to a file' },
        { command: 'gemini config import <file>', description: 'Import configuration from a file' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'API Configuration',
        description: 'Configure API keys and model settings',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'Your Google AI API key',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: 'Default model to use',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: 'Creativity level (0.0 to 1.0)',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: 'Maximum response length',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: 'Interface Settings',
        description: 'Customize the CLI appearance and behavior',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'Color theme for the CLI',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: 'Default output format',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: 'Enable streaming responses',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: 'Number of conversation turns to remember',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      },
      {
        id: 'tools',
        title: 'Tools & Extensions',
        description: 'Configure tools and plugin settings',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        settings: [
          {
            key: 'tools-enabled',
            description: 'Enable tool usage',
            type: 'boolean',
            example: 'gemini config set tools-enabled true',
            default: 'true'
          },
          {
            key: 'tool-timeout',
            description: 'Tool execution timeout (seconds)',
            type: 'number',
            example: 'gemini config set tool-timeout 30',
            default: '30'
          },
          {
            key: 'plugins-dir',
            description: 'Directory for custom plugins',
            type: 'string',
            example: 'gemini config set plugins-dir ~/.gemini/plugins',
            default: '~/.gemini/plugins'
          }
        ]
      },
      {
        id: 'security',
        title: 'Security Settings',
        description: 'Security and privacy configurations',
        icon: ShieldCheckIcon,
        color: 'from-red-500 to-pink-600',
        settings: [
          {
            key: 'safe-mode',
            description: 'Enable safe mode for tool execution',
            type: 'boolean',
            example: 'gemini config set safe-mode true',
            default: 'true'
          },
          {
            key: 'log-level',
            description: 'Logging verbosity level',
            type: 'string',
            example: 'gemini config set log-level info',
            default: 'info',
            options: ['error', 'warn', 'info', 'debug']
          },
          {
            key: 'data-collection',
            description: 'Allow anonymous usage data collection',
            type: 'boolean',
            example: 'gemini config set data-collection false',
            default: 'false'
          }
        ]
      }
    ],
    envVars: {
      title: 'Environment Variables',
      subtitle: 'Alternative configuration using environment variables',
      common: {
        title: 'Common Environment Variables',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: 'API key for authentication' },
          { name: 'GEMINI_MODEL=gemini-pro', description: 'Default model to use' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: 'Configuration directory' }
        ]
      },
      setting: {
        title: 'Setting Environment Variables',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: '.env file', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: 'Configuration Files',
      subtitle: 'Understanding configuration file locations and formats',
      locations: [
        { name: 'Global Config', path: '~/.config/gemini/config.json' },
        { name: 'Project Config', path: '.gemini/config.json' },
        { name: 'Environment File', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Recommendations for secure and effective configuration',
      security: [
        'Never commit API keys to version control',
        'Use environment variables for sensitive data',
        'Enable safe mode for tool execution',
        'Regularly rotate your API keys',
        'Review and limit tool permissions'
      ],
      performance: [
        'Adjust temperature based on use case',
        'Set appropriate token limits',
        'Enable streaming for better UX',
        'Configure reasonable timeouts',
        'Limit conversation history size'
      ]
    }
  },
  hi: {
    title: 'कॉन्फ़िगरेशन गाइड',
    subtitle: 'अपने वर्कफ़्लो के अनुकूल Gemini CLI को कस्टमाइज़ करें',
    commands: {
      title: 'कॉन्फ़िगरेशन कमांड',
      subtitle: 'आपकी कॉन्फ़िगरेशन प्रबंधित करने के लिए आवश्यक कमांड',
      list: [
        { command: 'gemini config list', description: 'सभी वर्तमान कॉन्फ़िगरेशन सेटिंग्स दिखाएं' },
        { command: 'gemini config get <key>', description: 'किसी विशिष्ट सेटिंग का मान प्राप्त करें' },
        { command: 'gemini config set <key> <value>', description: 'कॉन्फ़िगरेशन मान सेट करें' },
        { command: 'gemini config unset <key>', description: 'कॉन्फ़िगरेशन सेटिंग हटाएं (डिफ़ॉल्ट पर वापस करें)' },
        { command: 'gemini config reset', description: 'सभी सेटिंग्स को डिफ़ॉल्ट मानों पर रीसेट करें' },
        { command: 'gemini config export', description: 'कॉन्फ़िगरेशन को फ़ाइल में एक्सपोर्ट करें' },
        { command: 'gemini config import <file>', description: 'फ़ाइल से कॉन्फ़िगरेशन इम्पोर्ट करें' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'API कॉन्फ़िगरेशन',
        description: 'API कुंजी और मॉडल सेटिंग्स कॉन्फ़िगर करें',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'आपकी Google AI API कुंजी',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: 'उपयोग करने के लिए डिफ़ॉल्ट मॉडल',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: 'रचनात्मकता स्तर (0.0 से 1.0)',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: 'अधिकतम प्रतिक्रिया लंबाई',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: 'इंटरफ़ेस सेटिंग्स',
        description: 'CLI की उपस्थिति और व्यवहार को कस्टमाइज़ करें',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'CLI के लिए रंग थीम',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: 'डिफ़ॉल्ट आउटपुट प्रारूप',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: 'स्ट्रीमिंग प्रतिक्रियाएं सक्षम करें',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: 'याद रखने वाले बातचीत के मोड़ों की संख्या',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      },
      {
        id: 'tools',
        title: 'टूल्स और एक्सटेंशन',
        description: 'टूल्स और प्लगइन सेटिंग्स कॉन्फ़िगर करें',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        settings: [
          {
            key: 'tools-enabled',
            description: 'टूल उपयोग सक्षम करें',
            type: 'boolean',
            example: 'gemini config set tools-enabled true',
            default: 'true'
          },
          {
            key: 'tool-timeout',
            description: 'टूल निष्पादन टाइमआउट (सेकंड)',
            type: 'number',
            example: 'gemini config set tool-timeout 30',
            default: '30'
          },
          {
            key: 'plugins-dir',
            description: 'कस्टम प्लगइन्स के लिए डायरेक्टरी',
            type: 'string',
            example: 'gemini config set plugins-dir ~/.gemini/plugins',
            default: '~/.gemini/plugins'
          }
        ]
      },
      {
        id: 'security',
        title: 'सुरक्षा सेटिंग्स',
        description: 'सुरक्षा और गोपनीयता कॉन्फ़िगरेशन',
        icon: ShieldCheckIcon,
        color: 'from-red-500 to-pink-600',
        settings: [
          {
            key: 'safe-mode',
            description: 'टूल निष्पादन के लिए सुरक्षित मोड सक्षम करें',
            type: 'boolean',
            example: 'gemini config set safe-mode true',
            default: 'true'
          },
          {
            key: 'log-level',
            description: 'लॉगिंग विस्तार स्तर',
            type: 'string',
            example: 'gemini config set log-level info',
            default: 'info',
            options: ['error', 'warn', 'info', 'debug']
          },
          {
            key: 'data-collection',
            description: 'गुमनाम उपयोग डेटा संग्रह की अनुमति दें',
            type: 'boolean',
            example: 'gemini config set data-collection false',
            default: 'false'
          }
        ]
      }
    ],
    envVars: {
      title: 'पर्यावरण चर',
      subtitle: 'पर्यावरण चरों का उपयोग करके वैकल्पिक कॉन्फ़िगरेशन',
      common: {
        title: 'सामान्य पर्यावरण चर',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: 'प्रमाणीकरण के लिए API कुंजी' },
          { name: 'GEMINI_MODEL=gemini-pro', description: 'उपयोग करने के लिए डिफ़ॉल्ट मॉडल' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: 'कॉन्फ़िगरेशन डायरेक्टरी' }
        ]
      },
      setting: {
        title: 'पर्यावरण चर सेट करना',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: '.env फ़ाइल', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: 'कॉन्फ़िगरेशन फ़ाइलें',
      subtitle: 'कॉन्फ़िगरेशन फ़ाइल स्थानों और प्रारूपों को समझना',
      locations: [
        { name: 'ग्लोबल कॉन्फ़िग', path: '~/.config/gemini/config.json' },
        { name: 'प्रोजेक्ट कॉन्फ़िग', path: '.gemini/config.json' },
        { name: 'पर्यावरण फ़ाइल', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: 'सर्वोत्तम प्रथाएं',
      subtitle: 'सुरक्षित और प्रभावी कॉन्फ़िगरेशन के लिए सिफारिशें',
      security: [
        'API कुंजियों को कभी भी वर्जन कंट्रोल में कमिट न करें',
        'संवेदनशील डेटा के लिए पर्यावरण चरों का उपयोग करें',
        'टूल निष्पादन के लिए सुरक्षित मोड सक्षम करें',
        'नियमित रूप से अपनी API कुंजियों को रोटेट करें',
        'टूल अनुमतियों की समीक्षा और सीमा करें'
      ],
      performance: [
        'उपयोग के मामले के आधार पर तापमान समायोजित करें',
        'उपयुक्त टोकन सीमा निर्धारित करें',
        'बेहतर UX के लिए स्ट्रीमिंग सक्षम करें',
        'उचित टाइमआउट कॉन्फ़िगर करें',
        'बातचीत इतिहास का आकार सीमित करें'
      ]
    }
  },
  fr: {
    title: 'Guide de Configuration',
    subtitle: 'Personnalisez Gemini CLI pour s\'adapter à votre flux de travail',
    commands: {
      title: 'Commandes de Configuration',
      subtitle: 'Commandes essentielles pour gérer votre configuration',
      list: [
        { command: 'gemini config list', description: 'Afficher tous les paramètres de configuration actuels' },
        { command: 'gemini config get <key>', description: 'Obtenir la valeur d\'un paramètre spécifique' },
        { command: 'gemini config set <key> <value>', description: 'Définir une valeur de configuration' },
        { command: 'gemini config unset <key>', description: 'Supprimer un paramètre de configuration (revenir à la valeur par défaut)' },
        { command: 'gemini config reset', description: 'Réinitialiser tous les paramètres aux valeurs par défaut' },
        { command: 'gemini config export', description: 'Exporter la configuration vers un fichier' },
        { command: 'gemini config import <file>', description: 'Importer la configuration depuis un fichier' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'Configuration API',
        description: 'Configurer les clés API et les paramètres de modèle',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'Votre clé API Google AI',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: 'Modèle par défaut à utiliser',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: 'Niveau de créativité (0.0 à 1.0)',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: 'Longueur maximale de réponse',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: 'Paramètres d\'Interface',
        description: 'Personnaliser l\'apparence et le comportement du CLI',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'Thème de couleur pour le CLI',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: 'Format de sortie par défaut',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: 'Activer les réponses en streaming',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: 'Nombre de tours de conversation à retenir',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      }
    ],
    envVars: {
      title: 'Variables d\'Environnement',
      subtitle: 'Configuration alternative utilisant les variables d\'environnement',
      common: {
        title: 'Variables d\'Environnement Communes',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: 'Clé API pour l\'authentification' },
          { name: 'GEMINI_MODEL=gemini-pro', description: 'Modèle par défaut à utiliser' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: 'Répertoire de configuration' }
        ]
      },
      setting: {
        title: 'Définir les Variables d\'Environnement',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: 'Fichier .env', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: 'Fichiers de Configuration',
      subtitle: 'Comprendre les emplacements et formats des fichiers de configuration',
      locations: [
        { name: 'Config Globale', path: '~/.config/gemini/config.json' },
        { name: 'Config Projet', path: '.gemini/config.json' },
        { name: 'Fichier Environnement', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: 'Meilleures Pratiques',
      subtitle: 'Recommandations pour une configuration sécurisée et efficace',
      security: [
        'Ne jamais commiter les clés API dans le contrôle de version',
        'Utiliser les variables d\'environnement pour les données sensibles',
        'Activer le mode sécurisé pour l\'exécution d\'outils',
        'Faire tourner régulièrement vos clés API',
        'Examiner et limiter les permissions d\'outils'
      ],
      performance: [
        'Ajuster la température selon le cas d\'usage',
        'Définir des limites de tokens appropriées',
        'Activer le streaming pour une meilleure UX',
        'Configurer des timeouts raisonnables',
        'Limiter la taille de l\'historique de conversation'
      ]
    }
  },
  de: {
    title: 'Konfigurationsanleitung',
    subtitle: 'Passen Sie Gemini CLI an Ihren Workflow an',
    commands: {
      title: 'Konfigurationsbefehle',
      subtitle: 'Wesentliche Befehle zur Verwaltung Ihrer Konfiguration',
      list: [
        { command: 'gemini config list', description: 'Alle aktuellen Konfigurationseinstellungen anzeigen' },
        { command: 'gemini config get <key>', description: 'Den Wert einer bestimmten Einstellung abrufen' },
        { command: 'gemini config set <key> <value>', description: 'Einen Konfigurationswert setzen' },
        { command: 'gemini config unset <key>', description: 'Eine Konfigurationseinstellung entfernen (auf Standard zurücksetzen)' },
        { command: 'gemini config reset', description: 'Alle Einstellungen auf Standardwerte zurücksetzen' },
        { command: 'gemini config export', description: 'Konfiguration in eine Datei exportieren' },
        { command: 'gemini config import <file>', description: 'Konfiguration aus einer Datei importieren' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'API-Konfiguration',
        description: 'API-Schlüssel und Modelleinstellungen konfigurieren',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'Ihr Google AI API-Schlüssel',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: 'Standardmodell zur Verwendung',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: 'Kreativitätslevel (0.0 bis 1.0)',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: 'Maximale Antwortlänge',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: 'Interface-Einstellungen',
        description: 'Aussehen und Verhalten der CLI anpassen',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'Farbthema für die CLI',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: 'Standard-Ausgabeformat',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: 'Streaming-Antworten aktivieren',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: 'Anzahl der zu merkenden Gesprächsrunden',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      }
    ],
    envVars: {
      title: 'Umgebungsvariablen',
      subtitle: 'Alternative Konfiguration mit Umgebungsvariablen',
      common: {
        title: 'Häufige Umgebungsvariablen',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: 'API-Schlüssel für die Authentifizierung' },
          { name: 'GEMINI_MODEL=gemini-pro', description: 'Standardmodell zur Verwendung' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: 'Konfigurationsverzeichnis' }
        ]
      },
      setting: {
        title: 'Umgebungsvariablen setzen',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: '.env Datei', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: 'Konfigurationsdateien',
      subtitle: 'Konfigurationsdatei-Standorte und -Formate verstehen',
      locations: [
        { name: 'Globale Konfiguration', path: '~/.config/gemini/config.json' },
        { name: 'Projekt-Konfiguration', path: '.gemini/config.json' },
        { name: 'Umgebungsdatei', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: 'Best Practices',
      subtitle: 'Empfehlungen für sichere und effektive Konfiguration',
      security: [
        'API-Schlüssel niemals in die Versionskontrolle committen',
        'Umgebungsvariablen für sensible Daten verwenden',
        'Sicheren Modus für Tool-Ausführung aktivieren',
        'API-Schlüssel regelmäßig rotieren',
        'Tool-Berechtigungen überprüfen und begrenzen'
      ],
      performance: [
        'Temperatur je nach Anwendungsfall anpassen',
        'Angemessene Token-Limits setzen',
        'Streaming für bessere UX aktivieren',
        'Vernünftige Timeouts konfigurieren',
        'Gesprächshistorie-Größe begrenzen'
      ]
    }
  },
  ja: {
    title: '設定ガイド',
    subtitle: 'ワークフローに合わせてGemini CLIをカスタマイズ',
    commands: {
      title: '設定コマンド',
      subtitle: '設定管理に必要なコマンド',
      list: [
        { command: 'gemini config list', description: '現在の設定をすべて表示' },
        { command: 'gemini config get <key>', description: '特定の設定値を取得' },
        { command: 'gemini config set <key> <value>', description: '設定値を設定' },
        { command: 'gemini config unset <key>', description: '設定を削除（デフォルトに戻す）' },
        { command: 'gemini config reset', description: 'すべての設定をデフォルト値にリセット' },
        { command: 'gemini config export', description: '設定をファイルにエクスポート' },
        { command: 'gemini config import <file>', description: 'ファイルから設定をインポート' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'API設定',
        description: 'APIキーとモデル設定を構成',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'Google AI APIキー',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: '使用するデフォルトモデル',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: '創造性レベル（0.0から1.0）',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: '最大応答長',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: 'インターフェース設定',
        description: 'CLIの外観と動作をカスタマイズ',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'CLIのカラーテーマ',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: 'デフォルト出力形式',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: 'ストリーミング応答を有効化',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: '記憶する会話ターン数',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      }
    ],
    envVars: {
      title: '環境変数',
      subtitle: '環境変数を使用した代替設定',
      common: {
        title: '一般的な環境変数',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: '認証用APIキー' },
          { name: 'GEMINI_MODEL=gemini-pro', description: '使用するデフォルトモデル' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: '設定ディレクトリ' }
        ]
      },
      setting: {
        title: '環境変数の設定',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: '.envファイル', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: '設定ファイル',
      subtitle: '設定ファイルの場所と形式を理解',
      locations: [
        { name: 'グローバル設定', path: '~/.config/gemini/config.json' },
        { name: 'プロジェクト設定', path: '.gemini/config.json' },
        { name: '環境ファイル', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: 'ベストプラクティス',
      subtitle: '安全で効果的な設定のための推奨事項',
      security: [
        'APIキーをバージョン管理にコミットしない',
        '機密データには環境変数を使用',
        'ツール実行にはセーフモードを有効化',
        'APIキーを定期的にローテーション',
        'ツール権限を確認・制限'
      ],
      performance: [
        'ユースケースに応じて温度を調整',
        '適切なトークン制限を設定',
        'より良いUXのためストリーミングを有効化',
        '合理的なタイムアウトを設定',
        '会話履歴サイズを制限'
      ]
    }
  },
  ko: {
    title: '구성 가이드',
    subtitle: '워크플로우에 맞게 Gemini CLI 사용자 정의',
    commands: {
      title: '구성 명령',
      subtitle: '구성 관리를 위한 필수 명령',
      list: [
        { command: 'gemini config list', description: '모든 현재 구성 설정 표시' },
        { command: 'gemini config get <key>', description: '특정 설정 값 가져오기' },
        { command: 'gemini config set <key> <value>', description: '구성 값 설정' },
        { command: 'gemini config unset <key>', description: '구성 설정 제거 (기본값으로 되돌리기)' },
        { command: 'gemini config reset', description: '모든 설정을 기본값으로 재설정' },
        { command: 'gemini config export', description: '구성을 파일로 내보내기' },
        { command: 'gemini config import <file>', description: '파일에서 구성 가져오기' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'API 구성',
        description: 'API 키 및 모델 설정 구성',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'Google AI API 키',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: '사용할 기본 모델',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: '창의성 수준 (0.0에서 1.0)',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: '최대 응답 길이',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: '인터페이스 설정',
        description: 'CLI의 모양과 동작 사용자 정의',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'CLI용 색상 테마',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: '기본 출력 형식',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: '스트리밍 응답 활성화',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: '기억할 대화 턴 수',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      }
    ],
    envVars: {
      title: '환경 변수',
      subtitle: '환경 변수를 사용한 대체 구성',
      common: {
        title: '일반적인 환경 변수',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: '인증용 API 키' },
          { name: 'GEMINI_MODEL=gemini-pro', description: '사용할 기본 모델' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: '구성 디렉토리' }
        ]
      },
      setting: {
        title: '환경 변수 설정',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: '.env 파일', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: '구성 파일',
      subtitle: '구성 파일 위치 및 형식 이해',
      locations: [
        { name: '전역 구성', path: '~/.config/gemini/config.json' },
        { name: '프로젝트 구성', path: '.gemini/config.json' },
        { name: '환경 파일', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: '모범 사례',
      subtitle: '안전하고 효과적인 구성을 위한 권장사항',
      security: [
        'API 키를 버전 관리에 커밋하지 마세요',
        '민감한 데이터에는 환경 변수 사용',
        '도구 실행을 위해 안전 모드 활성화',
        'API 키를 정기적으로 순환',
        '도구 권한 검토 및 제한'
      ],
      performance: [
        '사용 사례에 따라 온도 조정',
        '적절한 토큰 제한 설정',
        '더 나은 UX를 위해 스트리밍 활성화',
        '합리적인 타임아웃 구성',
        '대화 기록 크기 제한'
      ]
    }
  },
  es: {
    title: 'Guía de Configuración',
    subtitle: 'Personalice Gemini CLI para adaptarse a su flujo de trabajo',
    commands: {
      title: 'Comandos de Configuración',
      subtitle: 'Comandos esenciales para gestionar su configuración',
      list: [
        { command: 'gemini config list', description: 'Mostrar todas las configuraciones actuales' },
        { command: 'gemini config get <key>', description: 'Obtener el valor de una configuración específica' },
        { command: 'gemini config set <key> <value>', description: 'Establecer un valor de configuración' },
        { command: 'gemini config unset <key>', description: 'Eliminar una configuración (volver al valor por defecto)' },
        { command: 'gemini config reset', description: 'Restablecer todas las configuraciones a valores por defecto' },
        { command: 'gemini config export', description: 'Exportar configuración a un archivo' },
        { command: 'gemini config import <file>', description: 'Importar configuración desde un archivo' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'Configuración API',
        description: 'Configurar claves API y ajustes de modelo',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'Su clave API de Google AI',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: 'Modelo por defecto a usar',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: 'Nivel de creatividad (0.0 a 1.0)',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: 'Longitud máxima de respuesta',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: 'Configuración de Interfaz',
        description: 'Personalizar la apariencia y comportamiento del CLI',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'Tema de color para el CLI',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: 'Formato de salida por defecto',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: 'Habilitar respuestas en streaming',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: 'Número de turnos de conversación a recordar',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      }
    ],
    envVars: {
      title: 'Variables de Entorno',
      subtitle: 'Configuración alternativa usando variables de entorno',
      common: {
        title: 'Variables de Entorno Comunes',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: 'Clave API para autenticación' },
          { name: 'GEMINI_MODEL=gemini-pro', description: 'Modelo por defecto a usar' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: 'Directorio de configuración' }
        ]
      },
      setting: {
        title: 'Configurar Variables de Entorno',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: 'Archivo .env', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: 'Archivos de Configuración',
      subtitle: 'Entender ubicaciones y formatos de archivos de configuración',
      locations: [
        { name: 'Config Global', path: '~/.config/gemini/config.json' },
        { name: 'Config Proyecto', path: '.gemini/config.json' },
        { name: 'Archivo Entorno', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: 'Mejores Prácticas',
      subtitle: 'Recomendaciones para configuración segura y efectiva',
      security: [
        'Nunca hacer commit de claves API al control de versiones',
        'Usar variables de entorno para datos sensibles',
        'Habilitar modo seguro para ejecución de herramientas',
        'Rotar regularmente sus claves API',
        'Revisar y limitar permisos de herramientas'
      ],
      performance: [
        'Ajustar temperatura según el caso de uso',
        'Establecer límites de tokens apropiados',
        'Habilitar streaming para mejor UX',
        'Configurar timeouts razonables',
        'Limitar el tamaño del historial de conversación'
      ]
    }
  },
  ru: {
    title: 'Руководство по настройке',
    subtitle: 'Настройте Gemini CLI под ваш рабочий процесс',
    commands: {
      title: 'Команды настройки',
      subtitle: 'Основные команды для управления вашей конфигурацией',
      list: [
        { command: 'gemini config list', description: 'Показать все текущие настройки конфигурации' },
        { command: 'gemini config get <key>', description: 'Получить значение определенной настройки' },
        { command: 'gemini config set <key> <value>', description: 'Установить значение конфигурации' },
        { command: 'gemini config unset <key>', description: 'Удалить настройку конфигурации (вернуть к значению по умолчанию)' },
        { command: 'gemini config reset', description: 'Сбросить все настройки к значениям по умолчанию' },
        { command: 'gemini config export', description: 'Экспортировать конфигурацию в файл' },
        { command: 'gemini config import <file>', description: 'Импортировать конфигурацию из файла' }
      ]
    },
    categories: [
      {
        id: 'api',
        title: 'Настройка API',
        description: 'Настроить API ключи и параметры модели',
        icon: KeyIcon,
        color: 'from-blue-500 to-indigo-600',
        settings: [
          {
            key: 'api-key',
            description: 'Ваш API ключ Google AI',
            type: 'string',
            example: 'gemini config set api-key YOUR_API_KEY',
            required: true
          },
          {
            key: 'model',
            description: 'Модель по умолчанию для использования',
            type: 'string',
            example: 'gemini config set model gemini-pro',
            default: 'gemini-pro'
          },
          {
            key: 'temperature',
            description: 'Уровень креативности (от 0.0 до 1.0)',
            type: 'number',
            example: 'gemini config set temperature 0.7',
            default: '0.7'
          },
          {
            key: 'max-tokens',
            description: 'Максимальная длина ответа',
            type: 'number',
            example: 'gemini config set max-tokens 2048',
            default: '2048'
          }
        ]
      },
      {
        id: 'interface',
        title: 'Настройки интерфейса',
        description: 'Настроить внешний вид и поведение CLI',
        icon: PaintBrushIcon,
        color: 'from-green-500 to-emerald-600',
        settings: [
          {
            key: 'theme',
            description: 'Цветовая тема для CLI',
            type: 'string',
            example: 'gemini config set theme dark',
            default: 'auto',
            options: ['auto', 'light', 'dark']
          },
          {
            key: 'output-format',
            description: 'Формат вывода по умолчанию',
            type: 'string',
            example: 'gemini config set output-format markdown',
            default: 'text',
            options: ['text', 'markdown', 'json']
          },
          {
            key: 'stream',
            description: 'Включить потоковые ответы',
            type: 'boolean',
            example: 'gemini config set stream true',
            default: 'true'
          },
          {
            key: 'history-limit',
            description: 'Количество поворотов разговора для запоминания',
            type: 'number',
            example: 'gemini config set history-limit 20',
            default: '10'
          }
        ]
      }
    ],
    envVars: {
      title: 'Переменные окружения',
      subtitle: 'Альтернативная конфигурация с использованием переменных окружения',
      common: {
        title: 'Общие переменные окружения',
        vars: [
          { name: 'GEMINI_API_KEY=your_api_key', description: 'API ключ для аутентификации' },
          { name: 'GEMINI_MODEL=gemini-pro', description: 'Модель по умолчанию для использования' },
          { name: 'GEMINI_CONFIG_DIR=~/.config/gemini', description: 'Директория конфигурации' }
        ]
      },
      setting: {
        title: 'Установка переменных окружения',
        methods: [
          { name: 'Bash/Zsh', command: 'export GEMINI_API_KEY=your_key' },
          { name: 'PowerShell', command: '$env:GEMINI_API_KEY="your_key"' },
          { name: 'Файл .env', command: 'GEMINI_API_KEY=your_key' }
        ]
      }
    },
    files: {
      title: 'Файлы конфигурации',
      subtitle: 'Понимание расположения и форматов файлов конфигурации',
      locations: [
        { name: 'Глобальная конфигурация', path: '~/.config/gemini/config.json' },
        { name: 'Конфигурация проекта', path: '.gemini/config.json' },
        { name: 'Файл окружения', path: '.env' }
      ],
      example: `{
  "api-key": "your_api_key",
  "model": "gemini-pro",
  "temperature": 0.7,
  "max-tokens": 2048,
  "theme": "dark",
  "stream": true,
  "tools-enabled": true,
  "safe-mode": true
}`
    },
    bestPractices: {
      title: 'Лучшие практики',
      subtitle: 'Рекомендации для безопасной и эффективной конфигурации',
      security: [
        'Никогда не коммитьте API ключи в систему контроля версий',
        'Используйте переменные окружения для чувствительных данных',
        'Включите безопасный режим для выполнения инструментов',
        'Регулярно меняйте ваши API ключи',
        'Проверяйте и ограничивайте разрешения инструментов'
      ],
      performance: [
        'Настройте температуру в зависимости от случая использования',
        'Установите подходящие лимиты токенов',
        'Включите потоковую передачу для лучшего UX',
        'Настройте разумные таймауты',
        'Ограничьте размер истории разговора'
      ]
    }
  }
}

export default async function ConfigurationPage({ params }: PageProps) {
  const { locale } = await params
  const pageContent = content[locale as keyof typeof content] || content.en

  if (!pageContent) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {pageContent.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              {pageContent.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Commands */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.commands.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.commands.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageContent.commands.list.map((cmd, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                  {cmd.command}
                </code>
                <p className="text-sm text-gray-600">{cmd.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuration Categories */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '配置选项' :
               locale === 'hi' ? 'कॉन्फ़िगरेशन विकल्प' :
               locale === 'fr' ? 'Options de Configuration' :
               locale === 'de' ? 'Konfigurationsoptionen' :
               locale === 'ja' ? '設定オプション' :
               locale === 'ko' ? '구성 옵션' :
               locale === 'es' ? 'Opciones de Configuración' :
               locale === 'ru' ? 'Опции конфигурации' :
               'Configuration Options'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '按类别组织的详细设置' :
               locale === 'hi' ? 'श्रेणी के अनुसार व्यवस्थित विस्तृत सेटिंग्स' :
               locale === 'fr' ? 'Paramètres détaillés organisés par catégorie' :
               locale === 'de' ? 'Detaillierte Einstellungen nach Kategorien organisiert' :
               locale === 'ja' ? 'カテゴリ別に整理された詳細設定' :
               locale === 'ko' ? '카테고리별로 정리된 세부 설정' :
               locale === 'es' ? 'Configuraciones detalladas organizadas por categoría' :
               locale === 'ru' ? 'Подробные настройки, организованные по категориям' :
               'Detailed settings organized by category'}
            </p>
          </div>

          <div className="space-y-12">
            {pageContent.categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.settings.map((setting, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {setting.key}
                          </code>
                        </h4>
                        {'required' in setting && setting.required && (
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                            {locale === 'zh' ? '必需' :
                             locale === 'hi' ? 'आवश्यक' :
                             locale === 'fr' ? 'Requis' :
                             locale === 'de' ? 'Erforderlich' :
                             locale === 'ja' ? '必須' :
                             locale === 'ko' ? '필수' :
                             locale === 'es' ? 'Requerido' :
                             locale === 'ru' ? 'Обязательно' :
                             'Required'}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-3">{setting.description}</p>
                      
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-600">
                            {locale === 'zh' ? '类型' :
                             locale === 'hi' ? 'प्रकार' :
                             locale === 'fr' ? 'Type' :
                             locale === 'de' ? 'Typ' :
                             locale === 'ja' ? 'タイプ' :
                             locale === 'ko' ? '유형' :
                             locale === 'es' ? 'Tipo' :
                             locale === 'ru' ? 'Тип' :
                             'Type'}:
                          </span>
                          <span className="text-sm text-blue-600">{setting.type}</span>
                        </div>
                        
                        {'default' in setting && setting.default && (
                          <div>
                            <span className="text-sm font-medium text-gray-600">
                              {locale === 'zh' ? '默认值' :
                               locale === 'hi' ? 'डिफ़ॉल्ट' :
                               locale === 'fr' ? 'Défaut' :
                               locale === 'de' ? 'Standard' :
                               locale === 'ja' ? 'デフォルト' :
                               locale === 'ko' ? '기본값' :
                               locale === 'es' ? 'Por defecto' :
                               locale === 'ru' ? 'По умолчанию' :
                               'Default'}:
                            </span>
                            <code className="text-sm bg-gray-100 px-1 rounded">{setting.default}</code>
                          </div>
                        )}

                        {'options' in setting && setting.options && (
                          <div>
                            <span className="text-sm font-medium text-gray-600">
                              {locale === 'zh' ? '选项' :
                               locale === 'hi' ? 'विकल्प' :
                               locale === 'fr' ? 'Options' :
                               locale === 'de' ? 'Optionen' :
                               locale === 'ja' ? 'オプション' :
                               locale === 'ko' ? '옵션' :
                               locale === 'es' ? 'Opciones' :
                               locale === 'ru' ? 'Опции' :
                               'Options'}:
                            </span>
                            <span className="text-sm text-gray-700">{setting.options.join(', ')}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">
                          {locale === 'zh' ? '示例' : 'Example'}:
                        </h5>
                        <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                          {setting.example}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.envVars.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.envVars.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {pageContent.envVars.common.title}
                </h3>
                <div className="space-y-3">
                  {pageContent.envVars.common.vars.map((envVar, index) => (
                    <div key={index}>
                      <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                        {envVar.name}
                      </code>
                      <p className="text-sm text-gray-600 mt-1">{envVar.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {pageContent.envVars.setting.title}
                </h3>
                <div className="space-y-4">
                  {pageContent.envVars.setting.methods.map((method, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">{method.name}:</h4>
                      <code className="block bg-gray-900 text-green-400 p-2 rounded text-sm font-mono">
                        {method.command}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Files */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.files.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.files.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '文件位置' : 'File Locations'}
              </h3>
              <div className="space-y-3">
                {pageContent.files.locations.map((location, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium text-gray-900">{location.name}:</h4>
                    <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800 mt-1">
                      {location.path}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '示例配置文件' : 'Example Config File'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{pageContent.files.example}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.bestPractices.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.bestPractices.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? '安全' : 'Security'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {pageContent.bestPractices.security.map((practice, index) => (
                  <li key={index} className="text-sm">• {practice}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? '性能' : 'Performance'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {pageContent.bestPractices.performance.map((practice, index) => (
                  <li key={index} className="text-sm">• {practice}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-blue-50 py-16 sm:py-20">
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
              {locale === 'zh'
                ? '探索更多配置和设置指南'
                : locale === 'hi'
                ? 'अधिक कॉन्फ़िगरेशन और सेटअप गाइड का अन्वेषण करें'
                : locale === 'fr'
                ? 'Explorez plus de guides de configuration et d\'installation'
                : locale === 'de'
                ? 'Erkunden Sie weitere Konfigurations- und Setup-Anleitungen'
                : locale === 'ja'
                ? 'より多くの設定とセットアップガイドを探索'
                : locale === 'ko'
                ? '더 많은 구성 및 설정 가이드 탐색'
                : locale === 'es'
                ? 'Explore más guías de configuración y configuración'
                : locale === 'ru'
                ? 'Изучите больше руководств по настройке и установке'
                : 'Explore more configuration and setup guides'
              }
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/installation`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {locale === 'zh' ? '安装指南' :
                 locale === 'hi' ? 'इंस्टॉलेशन गाइड' :
                 locale === 'fr' ? 'Guide d\'Installation' :
                 locale === 'de' ? 'Installationsanleitung' :
                 locale === 'ja' ? 'インストールガイド' :
                 locale === 'ko' ? '설치 가이드' :
                 locale === 'es' ? 'Guía de Instalación' :
                 locale === 'ru' ? 'Руководство по установке' :
                 'Installation Guide'}
              </Link>
              <Link
                href={`/${locale}/docs/examples`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {locale === 'zh' ? '使用示例' :
                 locale === 'hi' ? 'उपयोग उदाहरण' :
                 locale === 'fr' ? 'Exemples d\'Utilisation' :
                 locale === 'de' ? 'Verwendungsbeispiele' :
                 locale === 'ja' ? '使用例' :
                 locale === 'ko' ? '사용 예제' :
                 locale === 'es' ? 'Ejemplos de Uso' :
                 locale === 'ru' ? 'Примеры использования' :
                 'Usage Examples'}
              </Link>
              <Link
                href={`/${locale}/docs/troubleshooting`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '故障排除' :
                 locale === 'hi' ? 'समस्या निवारण' :
                 locale === 'fr' ? 'Dépannage' :
                 locale === 'de' ? 'Fehlerbehebung' :
                 locale === 'ja' ? 'トラブルシューティング' :
                 locale === 'ko' ? '문제 해결' :
                 locale === 'es' ? 'Solución de Problemas' :
                 locale === 'ru' ? 'Устранение неполадок' :
                 'Troubleshooting'}
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
