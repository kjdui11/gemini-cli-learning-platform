const fs = require('fs');
const path = require('path');

// Complete English advanced config translation with correct structure
const englishAdvancedConfig = {
  "hero": {
    "title": "Advanced Configuration Options",
    "subtitle": "Dive deep into Gemini CLI's advanced configuration and customization options",
    "advanced": "Advanced",
    "readingTime": "30 min read"
  },
  "overview": {
    "title": "Configuration Overview",
    "description": "Master Gemini CLI's advanced configuration options, including TOML config files, environment variables, custom settings, and more."
  },
  "configSectionsTitle": "Configuration File Structure",
  "configSectionsDescription": "Learn about different configuration sections and their settings",
  "location": "Location",
  "structure": "Structure",
  "explanation": "Explanation",
  "options": "Options",
  "configSections": [
    {
      "id": "toml-config",
      "title": "TOML Configuration File",
      "description": "Use gemini.toml file for detailed configuration",
      "color": "from-blue-500 to-indigo-600",
      "content": {
        "location": "Configuration file location: gemini.toml in project root directory",
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
        "explanation": "The TOML file allows structured and readable configuration of all aspects of Gemini CLI."
      }
    },
    {
      "id": "env-vars",
      "title": "Environment Variables",
      "description": "Quick configuration through environment variables",
      "color": "from-green-500 to-emerald-600",
      "content": {
        "explanation": "Environment variables allow quick and flexible configuration",
        "options": [
          "GEMINI_API_KEY: API key for authentication",
          "GEMINI_MODEL: Default model to use",
          "GEMINI_TEMPERATURE: Creativity parameter",
          "GEMINI_MAX_TOKENS: Maximum token count",
          "GEMINI_CONFIG_PATH: Configuration file path"
        ]
      }
    },
    {
      "id": "model-config",
      "title": "Model Configuration",
      "description": "AI model-specific settings",
      "color": "from-indigo-500 to-purple-600",
      "content": {
        "explanation": "Control AI model behavior and performance",
        "options": [
          "provider: Model provider (google, openai)",
          "name: Specific model name",
          "temperature: Creativity (0.0-2.0)",
          "max_tokens: Output token limit",
          "top_p: Nucleus sampling",
          "frequency_penalty: Frequency penalty"
        ]
      }
    },
    {
      "id": "ui-config",
      "title": "UI Configuration",
      "description": "Customize user interface and interaction experience",
      "color": "from-purple-500 to-pink-600",
      "content": {
        "explanation": "Adjust CLI interface display and interaction",
        "options": [
          "theme: Theme color (light, dark, auto)",
          "show_token_count: Show token counter",
          "auto_save_history: Auto-save history",
          "syntax_highlighting: Syntax highlighting",
          "line_numbers: Show line numbers",
          "word_wrap: Automatic line wrap"
        ]
      }
    },
    {
      "id": "tools-config",
      "title": "Tools Configuration",
      "description": "Enable and configure various tool features",
      "color": "from-orange-500 to-red-600",
      "content": {
        "explanation": "Control CLI tool features and permissions",
        "options": [
          "enable_shell: Enable Shell command execution",
          "enable_file_operations: Enable file operations",
          "max_file_size: Maximum file size",
          "allowed_extensions: Allowed file extensions",
          "blocked_commands: Blocked commands list",
          "timeout: Execution timeout"
        ]
      }
    },
    {
      "id": "security-config",
      "title": "Security Configuration",
      "description": "Security and access control settings",
      "color": "from-red-500 to-pink-600",
      "content": {
        "explanation": "Configure security measures and access controls",
        "options": [
          "enable_audit_log: Enable audit logging",
          "restrict_file_access: Restrict file access",
          "allowed_directories: Allowed directories",
          "require_confirmation: Require confirmation",
          "session_timeout: Session timeout",
          "max_concurrent_sessions: Max concurrent sessions"
        ]
      }
    }
  ],
  "environmentVariablesTitle": "Environment Variables",
  "environmentVariablesDescription": "Quick configuration through environment variables",
  "defaultValue": "Default Value",
  "none": "None",
  "environmentVariables": [
    {
      "name": "GEMINI_API_KEY",
      "description": "Google Gemini API key for authentication",
      "example": "export GEMINI_API_KEY=your_api_key_here",
      "default": null
    },
    {
      "name": "GEMINI_MODEL",
      "description": "Default model name to use",
      "example": "export GEMINI_MODEL=gemini-1.5-pro",
      "default": "gemini-1.5-flash"
    },
    {
      "name": "GEMINI_TEMPERATURE",
      "description": "Model creativity parameter",
      "example": "export GEMINI_TEMPERATURE=0.7",
      "default": "0.9"
    },
    {
      "name": "GEMINI_MAX_TOKENS",
      "description": "Maximum output token count",
      "example": "export GEMINI_MAX_TOKENS=8192",
      "default": "4096"
    },
    {
      "name": "GEMINI_CONFIG_PATH",
      "description": "Custom configuration file path",
      "example": "export GEMINI_CONFIG_PATH=/path/to/config.toml",
      "default": "./gemini.toml"
    }
  ],
  "customizationTitle": "Customization Options",
  "customizationDescription": "Personalized configuration for different use cases",
  "customizationOptions": [
    {
      "title": "Development Environment",
      "description": "Optimized settings for development workflows",
      "features": [
        "Enable code syntax highlighting",
        "Auto-save session history",
        "Integrate version control systems",
        "Custom code templates",
        "Quick command aliases"
      ]
    },
    {
      "title": "Production Environment",
      "description": "Security configuration for production environments",
      "features": [
        "Restrict file operation permissions",
        "Disable dangerous commands",
        "Enable audit logging",
        "Set resource usage limits",
        "Configure backup strategies"
      ]
    },
    {
      "title": "Team Collaboration Configuration",
      "description": "Shared settings for team collaboration",
      "features": [
        "Unified configuration templates",
        "Shared prompt library",
        "Team usage statistics",
        "Permission management",
        "Configuration synchronization"
      ]
    }
  ],
  "bestPracticesTitle": "Best Practices",
  "bestPracticesDescription": "Recommendations for optimal configuration",
  "bestPractices": [
    {
      "title": "Configuration Management",
      "description": "Organize and maintain your configuration files",
      "tips": [
        "Use version control for configuration files",
        "Document configuration changes",
        "Test configurations in development environment",
        "Backup configurations regularly"
      ]
    },
    {
      "title": "Performance Optimization",
      "description": "Configure for optimal performance",
      "tips": [
        "Adjust model parameters according to your needs",
        "Monitor resource usage",
        "Optimize data transmission efficiency",
        "Configure appropriate timeouts"
      ]
    },
    {
      "title": "Debugging Tips",
      "description": "Configuration to facilitate debugging",
      "tips": [
        "Use verbose logging mode",
        "Check server status",
        "Validate configuration file format",
        "Test environment variables"
      ]
    }
  ],
  "nextSteps": {
    "title": "Next Steps",
    "description": "Now that you understand advanced configuration, you can continue learning more advanced configuration and integration methods:",
    "integration": "Integration Guide",
    "troubleshooting": "Troubleshooting",
    "backToGuides": "Back to Guides"
  }
};

// Function to completely replace English advanced config
function replaceEnglishAdvancedConfig() {
  const filePath = path.join(__dirname, '..', 'src', 'messages', 'en.json');
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Completely replace the guidesAdvancedConfig section
    data.guidesAdvancedConfig = englishAdvancedConfig;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Completely replaced English advanced config structure');
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const advancedConfig = newData.guidesAdvancedConfig;
    
    console.log('📋 Verification:');
    console.log(`   - Hero title: "${advancedConfig?.hero?.title || 'N/A'}"`);
    console.log(`   - Config sections: ${advancedConfig?.configSections?.length || 0}`);
    console.log(`   - Environment variables: ${advancedConfig?.environmentVariables?.length || 0}`);
    console.log(`   - Customization options: ${advancedConfig?.customizationOptions?.length || 0}`);
    console.log(`   - Best practices: ${advancedConfig?.bestPractices?.length || 0}`);
    
    console.log('\n🎯 English advanced config structure is now complete and correct!');
    
  } catch (error) {
    console.error('❌ Error replacing English advanced config:', error.message);
  }
}

// Run the replacement
console.log('🔧 Replacing English advanced config structure...\n');
replaceEnglishAdvancedConfig();
