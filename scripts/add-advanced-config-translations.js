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
      title: "高级配置选项",
      subtitle: "深入了解 Gemini CLI 的高级配置和自定义选项",
      advanced: "高级",
      readingTime: "30 分钟阅读"
    },
    overview: {
      title: "配置概览",
      description: "掌握 Gemini CLI 的高级配置选项，包括 TOML 配置文件、环境变量、自定义设置等。"
    },
    configSectionsTitle: "配置文件结构",
    configSectionsDescription: "了解不同配置段的作用和设置方法",
    location: "位置",
    structure: "结构",
    explanation: "说明",
    options: "选项",
    configSections: [
      {
        id: "toml-config",
        title: "TOML 配置文件",
        description: "使用 gemini.toml 文件进行详细配置",
        color: "from-blue-500 to-indigo-600",
        content: {
          location: "配置文件位置：项目根目录下的 gemini.toml",
          structure: `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"

[memory]
max_context_length = 32000
auto_summarize = true`,
          explanation: "配置文件采用 TOML 格式，支持模型、界面、工具和内存等多个配置段"
        }
      },
      {
        id: "model-config",
        title: "模型配置",
        description: "自定义 AI 模型参数和行为",
        color: "from-green-500 to-emerald-600",
        content: {
          explanation: "配置 AI 模型的核心参数，影响生成质量和性能",
          options: [
            "provider: 模型提供商 (google, openai, anthropic)",
            "name: 具体模型名称",
            "temperature: 创造性参数 (0.0-2.0)",
            "max_tokens: 最大输出长度",
            "top_p: 核采样参数",
            "frequency_penalty: 频率惩罚"
          ]
        }
      },
      {
        id: "ui-config",
        title: "界面配置",
        description: "自定义用户界面和交互体验",
        color: "from-purple-500 to-pink-600",
        content: {
          explanation: "调整 CLI 界面的显示和交互方式",
          options: [
            "theme: 主题颜色 (light, dark, auto)",
            "show_token_count: 显示令牌计数",
            "auto_save_history: 自动保存历史",
            "syntax_highlighting: 语法高亮",
            "line_numbers: 显示行号",
            "word_wrap: 自动换行"
          ]
        }
      },
      {
        id: "tools-config",
        title: "工具配置",
        description: "启用和配置各种工具功能",
        color: "from-orange-500 to-red-600",
        content: {
          explanation: "控制 CLI 工具的功能和权限",
          options: [
            "enable_shell: 启用 Shell 命令执行",
            "enable_file_operations: 启用文件操作",
            "max_file_size: 最大文件大小限制",
            "allowed_extensions: 允许的文件扩展名",
            "blocked_commands: 禁用的命令列表",
            "timeout: 命令执行超时时间"
          ]
        }
      }
    ],
    environmentVariablesTitle: "环境变量",
    environmentVariablesDescription: "通过环境变量进行快速配置",
    defaultValue: "默认值",
    none: "无",
    environmentVariables: [
      {
        name: "GEMINI_API_KEY",
        description: "Google Gemini API 密钥，用于身份验证",
        example: "export GEMINI_API_KEY=your_api_key_here",
        default: null
      },
      {
        name: "GEMINI_MODEL",
        description: "默认使用的模型名称",
        example: "export GEMINI_MODEL=gemini-1.5-pro",
        default: "gemini-1.5-flash"
      },
      {
        name: "GEMINI_TEMPERATURE",
        description: "模型创造性参数",
        example: "export GEMINI_TEMPERATURE=0.7",
        default: "0.9"
      },
      {
        name: "GEMINI_MAX_TOKENS",
        description: "最大输出令牌数",
        example: "export GEMINI_MAX_TOKENS=8192",
        default: "4096"
      },
      {
        name: "GEMINI_CONFIG_PATH",
        description: "自定义配置文件路径",
        example: "export GEMINI_CONFIG_PATH=/path/to/config.toml",
        default: "./gemini.toml"
      }
    ],
    customizationTitle: "自定义选项",
    customizationDescription: "个性化配置以适应不同的使用场景",
    customizationOptions: [
      {
        title: "开发环境配置",
        description: "针对开发工作流程的优化设置",
        features: [
          "启用代码语法高亮",
          "自动保存会话历史",
          "集成版本控制系统",
          "自定义代码模板",
          "快速命令别名"
        ]
      },
      {
        title: "生产环境配置",
        description: "适用于生产环境的安全配置",
        features: [
          "限制文件操作权限",
          "禁用危险命令",
          "启用审计日志",
          "设置资源使用限制",
          "配置备份策略"
        ]
      },
      {
        title: "团队协作配置",
        description: "支持团队协作的共享设置",
        features: [
          "统一配置模板",
          "共享提示词库",
          "团队使用统计",
          "权限管理",
          "配置同步"
        ]
      }
    ],
    bestPracticesTitle: "最佳实践",
    bestPracticesDescription: "配置管理的重要建议和技巧",
    bestPractices: [
      {
        type: "success",
        title: "版本控制配置文件",
        content: "将配置文件纳入版本控制，但要排除包含敏感信息的部分，使用环境变量存储密钥。"
      },
      {
        type: "info",
        title: "分环境配置",
        content: "为不同环境（开发、测试、生产）创建不同的配置文件，避免配置冲突。"
      },
      {
        type: "warning",
        title: "安全配置",
        content: "谨慎配置工具权限，特别是文件操作和 Shell 命令执行，避免安全风险。"
      },
      {
        type: "success",
        title: "定期备份配置",
        content: "定期备份重要的配置文件和自定义设置，防止意外丢失。"
      }
    ],
    nextSteps: {
      title: "下一步",
      description: "现在您已经掌握了高级配置技巧，可以继续学习其他实用功能：",
      fileOperations: "文件操作",
      integration: "系统集成",
      backToGuides: "返回指南首页"
    }
  },
  en: {
    hero: {
      title: "Advanced Configuration Options",
      subtitle: "Deep dive into Gemini CLI's advanced configuration and customization options",
      advanced: "Advanced",
      readingTime: "30 min read"
    },
    overview: {
      title: "Configuration Overview",
      description: "Master Gemini CLI's advanced configuration options, including TOML config files, environment variables, custom settings, and more."
    },
    configSectionsTitle: "Configuration File Structure",
    configSectionsDescription: "Learn about different configuration sections and their settings",
    location: "Location",
    structure: "Structure",
    explanation: "Explanation",
    options: "Options",
    configSections: [
      {
        id: "toml-config",
        title: "TOML Configuration File",
        description: "Use gemini.toml file for detailed configuration",
        color: "from-blue-500 to-indigo-600",
        content: {
          location: "Configuration file location: gemini.toml in project root directory",
          structure: `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"

[memory]
max_context_length = 32000
auto_summarize = true`,
          explanation: "Configuration file uses TOML format, supporting multiple sections for model, UI, tools, and memory"
        }
      },
      {
        id: "model-config",
        title: "Model Configuration",
        description: "Customize AI model parameters and behavior",
        color: "from-green-500 to-emerald-600",
        content: {
          explanation: "Configure core AI model parameters that affect generation quality and performance",
          options: [
            "provider: Model provider (google, openai, anthropic)",
            "name: Specific model name",
            "temperature: Creativity parameter (0.0-2.0)",
            "max_tokens: Maximum output length",
            "top_p: Nucleus sampling parameter",
            "frequency_penalty: Frequency penalty"
          ]
        }
      },
      {
        id: "ui-config",
        title: "UI Configuration",
        description: "Customize user interface and interaction experience",
        color: "from-purple-500 to-pink-600",
        content: {
          explanation: "Adjust CLI interface display and interaction methods",
          options: [
            "theme: Theme color (light, dark, auto)",
            "show_token_count: Display token count",
            "auto_save_history: Auto-save history",
            "syntax_highlighting: Syntax highlighting",
            "line_numbers: Show line numbers",
            "word_wrap: Auto word wrap"
          ]
        }
      },
      {
        id: "tools-config",
        title: "Tools Configuration",
        description: "Enable and configure various tool functions",
        color: "from-orange-500 to-red-600",
        content: {
          explanation: "Control CLI tool functions and permissions",
          options: [
            "enable_shell: Enable shell command execution",
            "enable_file_operations: Enable file operations",
            "max_file_size: Maximum file size limit",
            "allowed_extensions: Allowed file extensions",
            "blocked_commands: Disabled command list",
            "timeout: Command execution timeout"
          ]
        }
      }
    ],
    environmentVariablesTitle: "Environment Variables",
    environmentVariablesDescription: "Quick configuration through environment variables",
    defaultValue: "Default Value",
    none: "None",
    environmentVariables: [
      {
        name: "GEMINI_API_KEY",
        description: "Google Gemini API key for authentication",
        example: "export GEMINI_API_KEY=your_api_key_here",
        default: null
      },
      {
        name: "GEMINI_MODEL",
        description: "Default model name to use",
        example: "export GEMINI_MODEL=gemini-1.5-pro",
        default: "gemini-1.5-flash"
      },
      {
        name: "GEMINI_TEMPERATURE",
        description: "Model creativity parameter",
        example: "export GEMINI_TEMPERATURE=0.7",
        default: "0.9"
      },
      {
        name: "GEMINI_MAX_TOKENS",
        description: "Maximum output token count",
        example: "export GEMINI_MAX_TOKENS=8192",
        default: "4096"
      },
      {
        name: "GEMINI_CONFIG_PATH",
        description: "Custom configuration file path",
        example: "export GEMINI_CONFIG_PATH=/path/to/config.toml",
        default: "./gemini.toml"
      }
    ],
    customizationTitle: "Customization Options",
    customizationDescription: "Personalized configuration for different use cases",
    customizationOptions: [
      {
        title: "Development Environment",
        description: "Optimized settings for development workflows",
        features: [
          "Enable code syntax highlighting",
          "Auto-save session history",
          "Integrate version control systems",
          "Custom code templates",
          "Quick command aliases"
        ]
      },
      {
        title: "Production Environment",
        description: "Security configuration for production environments",
        features: [
          "Restrict file operation permissions",
          "Disable dangerous commands",
          "Enable audit logging",
          "Set resource usage limits",
          "Configure backup strategies"
        ]
      },
      {
        title: "Team Collaboration",
        description: "Shared settings for team collaboration",
        features: [
          "Unified configuration templates",
          "Shared prompt libraries",
          "Team usage statistics",
          "Permission management",
          "Configuration synchronization"
        ]
      }
    ],
    bestPracticesTitle: "Best Practices",
    bestPracticesDescription: "Important recommendations and tips for configuration management",
    bestPractices: [
      {
        type: "success",
        title: "Version Control Configuration Files",
        content: "Include configuration files in version control, but exclude sensitive information parts, use environment variables to store keys."
      },
      {
        type: "info",
        title: "Environment-Specific Configuration",
        content: "Create different configuration files for different environments (development, testing, production) to avoid configuration conflicts."
      },
      {
        type: "warning",
        title: "Security Configuration",
        content: "Carefully configure tool permissions, especially file operations and shell command execution, to avoid security risks."
      },
      {
        type: "success",
        title: "Regular Configuration Backup",
        content: "Regularly backup important configuration files and custom settings to prevent accidental loss."
      }
    ],
    nextSteps: {
      title: "Next Steps",
      description: "Now that you've mastered advanced configuration techniques, you can continue learning other practical features:",
      fileOperations: "File Operations",
      integration: "System Integration",
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
    
    // Add detailed advanced-config translation
    if (translations[lang.code]) {
      content.guidesAdvancedConfig = translations[lang.code];
    } else {
      // Use base template for languages not yet translated
      content.guidesAdvancedConfig = baseTemplate;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Added detailed advanced-config translations for ${lang.name} (${lang.code})`);
  }
});

console.log('✓ All detailed advanced-config translations added');
