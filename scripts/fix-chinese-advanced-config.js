const fs = require('fs');
const path = require('path');

// Complete Chinese advanced config translation with correct structure
const chineseAdvancedConfig = {
  "hero": {
    "title": "高级配置选项",
    "subtitle": "深入了解 Gemini CLI 的高级配置和自定义选项",
    "advanced": "高级",
    "readingTime": "30分钟阅读"
  },
  "overview": {
    "title": "配置概览",
    "description": "掌握 Gemini CLI 的高级配置选项，包括 TOML 配置文件、环境变量、自定义设置等。"
  },
  "configSectionsTitle": "配置文件结构",
  "configSectionsDescription": "了解不同的配置部分及其设置",
  "location": "位置",
  "structure": "结构",
  "explanation": "说明",
  "options": "选项",
  "configSections": [
    {
      "id": "toml-config",
      "title": "TOML 配置文件",
      "description": "使用 gemini.toml 文件进行详细配置",
      "color": "from-blue-500 to-indigo-600",
      "content": {
        "location": "配置文件位置：项目根目录中的 gemini.toml",
        "structure": `[model]
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
max_file_size = "10MB"`,
        "explanation": "TOML 文件允许对 Gemini CLI 的所有方面进行结构化和可读的配置。"
      }
    },
    {
      "id": "env-vars",
      "title": "环境变量",
      "description": "通过环境变量进行快速配置",
      "color": "from-green-500 to-emerald-600",
      "content": {
        "explanation": "环境变量允许快速灵活的配置",
        "options": [
          "GEMINI_API_KEY: 用于身份验证的 API 密钥",
          "GEMINI_MODEL: 要使用的默认模型",
          "GEMINI_TEMPERATURE: 创造性参数",
          "GEMINI_MAX_TOKENS: 最大令牌数",
          "GEMINI_CONFIG_PATH: 配置文件路径"
        ]
      }
    },
    {
      "id": "model-config",
      "title": "模型配置",
      "description": "AI 模型特定设置",
      "color": "from-indigo-500 to-purple-600",
      "content": {
        "explanation": "控制 AI 模型的行为和性能",
        "options": [
          "provider: 模型提供商 (google, openai)",
          "name: 特定模型名称",
          "temperature: 创造性 (0.0-2.0)",
          "max_tokens: 输出令牌限制",
          "top_p: 核采样",
          "frequency_penalty: 频率惩罚"
        ]
      }
    },
    {
      "id": "ui-config",
      "title": "UI 配置",
      "description": "自定义用户界面和交互体验",
      "color": "from-purple-500 to-pink-600",
      "content": {
        "explanation": "调整 CLI 界面的显示和交互",
        "options": [
          "theme: 主题颜色 (light, dark, auto)",
          "show_token_count: 显示令牌计数器",
          "auto_save_history: 自动保存历史记录",
          "syntax_highlighting: 语法高亮",
          "line_numbers: 显示行号",
          "word_wrap: 自动换行"
        ]
      }
    },
    {
      "id": "tools-config",
      "title": "工具配置",
      "description": "启用和配置各种工具功能",
      "color": "from-orange-500 to-red-600",
      "content": {
        "explanation": "控制 CLI 工具功能和权限",
        "options": [
          "enable_shell: 启用 Shell 命令执行",
          "enable_file_operations: 启用文件操作",
          "max_file_size: 最大文件大小",
          "allowed_extensions: 允许的文件扩展名",
          "blocked_commands: 阻止的命令列表",
          "timeout: 执行超时"
        ]
      }
    },
    {
      "id": "security-config",
      "title": "安全配置",
      "description": "安全和访问控制设置",
      "color": "from-red-500 to-pink-600",
      "content": {
        "explanation": "配置安全措施和访问控制",
        "options": [
          "enable_audit_log: 启用审计日志",
          "restrict_file_access: 限制文件访问",
          "allowed_directories: 允许的目录",
          "require_confirmation: 需要确认",
          "session_timeout: 会话超时",
          "max_concurrent_sessions: 最大并发会话数"
        ]
      }
    }
  ],
  "environmentVariablesTitle": "环境变量",
  "environmentVariablesDescription": "通过环境变量进行快速配置",
  "defaultValue": "默认值",
  "none": "无",
  "environmentVariables": [
    {
      "name": "GEMINI_API_KEY",
      "description": "用于身份验证的 Google Gemini API 密钥",
      "example": "export GEMINI_API_KEY=your_api_key_here",
      "default": null
    },
    {
      "name": "GEMINI_MODEL",
      "description": "要使用的默认模型名称",
      "example": "export GEMINI_MODEL=gemini-1.5-pro",
      "default": "gemini-1.5-flash"
    },
    {
      "name": "GEMINI_TEMPERATURE",
      "description": "模型创造性参数",
      "example": "export GEMINI_TEMPERATURE=0.7",
      "default": "0.9"
    },
    {
      "name": "GEMINI_MAX_TOKENS",
      "description": "最大输出令牌数",
      "example": "export GEMINI_MAX_TOKENS=8192",
      "default": "4096"
    },
    {
      "name": "GEMINI_CONFIG_PATH",
      "description": "自定义配置文件路径",
      "example": "export GEMINI_CONFIG_PATH=/path/to/config.toml",
      "default": "./gemini.toml"
    }
  ],
  "customizationTitle": "自定义选项",
  "customizationDescription": "针对不同使用场景的个性化配置",
  "customizationOptions": [
    {
      "title": "开发环境",
      "description": "针对开发工作流程优化的设置",
      "features": [
        "启用代码语法高亮",
        "自动保存会话历史",
        "集成版本控制系统",
        "自定义代码模板",
        "快速命令别名"
      ]
    },
    {
      "title": "生产环境",
      "description": "生产环境的安全配置",
      "features": [
        "限制文件操作权限",
        "禁用危险命令",
        "启用审计日志",
        "设置资源使用限制",
        "配置备份策略"
      ]
    },
    {
      "title": "团队协作配置",
      "description": "团队协作的共享设置",
      "features": [
        "统一配置模板",
        "共享提示库",
        "团队使用统计",
        "权限管理",
        "配置同步"
      ]
    }
  ],
  "bestPracticesTitle": "最佳实践",
  "bestPracticesDescription": "优化配置的建议",
  "bestPractices": [
    {
      "title": "配置管理",
      "description": "组织和维护您的配置文件",
      "tips": [
        "对配置文件使用版本控制",
        "记录配置更改",
        "在开发环境中测试配置",
        "定期备份配置"
      ]
    },
    {
      "title": "性能优化",
      "description": "配置以获得最佳性能",
      "tips": [
        "根据需要调整模型参数",
        "监控资源使用情况",
        "优化数据传输效率",
        "配置适当的超时"
      ]
    },
    {
      "title": "调试技巧",
      "description": "便于调试的配置",
      "tips": [
        "使用详细日志模式",
        "检查服务器状态",
        "验证配置文件格式",
        "测试环境变量"
      ]
    }
  ],
  "nextSteps": {
    "title": "下一步",
    "description": "现在您了解了高级配置，可以继续学习更高级的配置和集成方法：",
    "integration": "集成指南",
    "troubleshooting": "故障排除",
    "backToGuides": "返回指南"
  }
};

// Function to completely replace Chinese advanced config
function replaceChineseAdvancedConfig() {
  const filePath = path.join(__dirname, '..', 'src', 'messages', 'zh.json');
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Completely replace the guidesAdvancedConfig section
    data.guidesAdvancedConfig = chineseAdvancedConfig;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Completely replaced Chinese advanced config structure');
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const advancedConfig = newData.guidesAdvancedConfig;
    
    console.log('📋 Verification:');
    console.log(`   - Hero title: "${advancedConfig?.hero?.title || 'N/A'}"`);
    console.log(`   - Config sections: ${advancedConfig?.configSections?.length || 0}`);
    console.log(`   - Environment variables: ${advancedConfig?.environmentVariables?.length || 0}`);
    console.log(`   - Customization options: ${advancedConfig?.customizationOptions?.length || 0}`);
    console.log(`   - Best practices: ${advancedConfig?.bestPractices?.length || 0}`);
    
    console.log('\n🎯 Chinese advanced config structure is now complete and correct!');
    
  } catch (error) {
    console.error('❌ Error replacing Chinese advanced config:', error.message);
  }
}

// Run the replacement
console.log('🔧 Replacing Chinese advanced config structure...\n');
replaceChineseAdvancedConfig();
