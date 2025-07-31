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
      title: "基本命令操作",
      subtitle: "掌握 Gemini CLI 的核心命令和操作语法",
      comprehensive: "全面覆盖",
      practical: "实用示例"
    },
    overview: {
      title: "命令概览",
      description: "Gemini CLI 提供三类主要命令：斜杠命令用于控制 CLI 本身，@ 命令用于文件操作，! 命令用于执行系统命令。"
    },
    categories: {
      slash: {
        title: "斜杠命令 (/)",
        description: "用于控制 CLI 本身的元级命令",
        commands: {
          help: "显示帮助信息和可用命令列表",
          clear: "清除屏幕内容",
          quit: "退出 Gemini CLI",
          theme: "更改界面主题"
        }
      },
      at: {
        title: "@ 命令",
        description: "用于读取和操作文件内容",
        commands: {
          file: "读取指定文件内容到对话中",
          folder: "读取文件夹中的文件列表",
          wildcard: "使用通配符匹配多个文件"
        }
      },
      exclamation: {
        title: "! 命令",
        description: "执行系统命令并显示结果",
        commands: {
          system: "执行任意系统命令",
          git: "执行 Git 命令",
          npm: "执行 NPM 命令"
        }
      }
    },
    tips: {
      title: "使用技巧",
      info: {
        title: "命令组合",
        content: "可以在同一个对话中组合使用多种命令类型，提高工作效率。"
      },
      warning: {
        title: "安全提醒",
        content: "使用 ! 命令时要谨慎，确保了解命令的作用，避免执行危险操作。"
      },
      success: {
        title: "最佳实践",
        content: "建议先使用 /help 查看所有可用命令，然后逐步学习各种命令的用法。"
      }
    },
    nextSteps: {
      title: "下一步",
      description: "现在您已经掌握了基本命令，可以继续学习更高级的功能：",
      fileOperations: "文件操作详解",
      advancedConfig: "高级配置",
      backToGuides: "返回指南首页"
    }
  },
  en: {
    hero: {
      title: "Basic Command Operations",
      subtitle: "Master the core commands and operation syntax of Gemini CLI",
      comprehensive: "Comprehensive Coverage",
      practical: "Practical Examples"
    },
    overview: {
      title: "Command Overview",
      description: "Gemini CLI provides three main types of commands: slash commands for controlling the CLI itself, @ commands for file operations, and ! commands for executing system commands."
    },
    categories: {
      slash: {
        title: "Slash Commands (/)",
        description: "Meta-level commands for controlling the CLI itself",
        commands: {
          help: "Show help information and available command list",
          clear: "Clear screen content",
          quit: "Exit Gemini CLI",
          theme: "Change interface theme"
        }
      },
      at: {
        title: "@ Commands",
        description: "Used for reading and manipulating file content",
        commands: {
          file: "Read specified file content into conversation",
          folder: "Read file list in folder",
          wildcard: "Use wildcards to match multiple files"
        }
      },
      exclamation: {
        title: "! Commands",
        description: "Execute system commands and display results",
        commands: {
          system: "Execute any system command",
          git: "Execute Git commands",
          npm: "Execute NPM commands"
        }
      }
    },
    tips: {
      title: "Usage Tips",
      info: {
        title: "Command Combination",
        content: "You can combine multiple command types in the same conversation to improve work efficiency."
      },
      warning: {
        title: "Security Reminder",
        content: "Be cautious when using ! commands, make sure you understand what the command does to avoid dangerous operations."
      },
      success: {
        title: "Best Practices",
        content: "It's recommended to use /help first to view all available commands, then gradually learn the usage of various commands."
      }
    },
    nextSteps: {
      title: "Next Steps",
      description: "Now that you've mastered the basic commands, you can continue learning more advanced features:",
      fileOperations: "File Operations Details",
      advancedConfig: "Advanced Configuration",
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

    // Add detailed basic-commands translation
    if (translations[lang.code]) {
      content.guidesBasicCommands = translations[lang.code];
    } else {
      // Use base template for languages not yet translated
      content.guidesBasicCommands = baseTemplate;
    }

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Added detailed basic-commands translations for ${lang.name} (${lang.code})`);
  }
});

console.log('✓ All detailed basic-commands translations added');
