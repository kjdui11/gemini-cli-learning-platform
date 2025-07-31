const fs = require('fs');
const path = require('path');

const gettingStartedTranslations = {
  zh: {
    guidesGettingStarted: {
      title: "第一次使用 Gemini CLI",
      subtitle: "10分钟快速入门，开始您的 AI 辅助编程之旅",
      description: "本教程将带您快速上手 Gemini CLI，学习基本操作和核心概念。",
      meta: {
        level: "适合初学者",
        duration: "10 分钟完成"
      },
      prerequisites: {
        title: "开始之前",
        nodejs: "已安装 Node.js 18 或更高版本",
        terminal: "熟悉基本的命令行操作",
        google: "拥有 Google 账户（用于身份验证）"
      },
      steps: {
        install: {
          title: "安装 Gemini CLI",
          description: "选择适合您的安装方式",
          methods: {
            npx: {
              name: "NPX (推荐)",
              description: "无需安装，直接运行最新版本"
            },
            npm: {
              name: "NPM 全局安装",
              description: "全局安装后可在任何地方使用 gemini 命令"
            },
            homebrew: {
              name: "Homebrew (macOS)",
              description: "macOS 用户推荐使用 Homebrew 安装"
            }
          }
        },
        firstRun: {
          title: "首次启动",
          description: "运行 Gemini CLI 并完成初始配置",
          steps: {
            command: {
              title: "运行命令",
              description: "在终端中输入 gemini 命令启动"
            },
            theme: {
              title: "选择主题",
              description: "首次启动会提示选择颜色主题，选择您喜欢的样式"
            },
            auth: {
              title: "身份验证",
              description: "使用 Google 账户登录，获得免费的使用额度"
            }
          }
        },
        firstChat: {
          title: "第一次对话",
          description: "开始与 AI 进行交互",
          examples: {
            greeting: {
              title: "简单问候",
              command: "> 你好，请介绍一下你自己",
              description: "测试基本对话功能"
            },
            code: {
              title: "代码相关问题",
              command: "> 解释一下什么是递归函数",
              description: "询问编程相关问题"
            },
            file: {
              title: "文件操作",
              command: "> @README.md 总结这个文件的内容",
              description: "使用 @ 符号读取文件内容"
            }
          }
        }
      },
      tips: {
        title: "重要提示",
        success: {
          title: "成功提示",
          content: "如果看到 Gemini CLI 的欢迎界面和提示符，说明安装成功！"
        },
        warning: {
          title: "注意事项",
          content: "首次使用需要网络连接进行身份验证和模型访问。"
        },
        info: {
          title: "使用技巧",
          content: "可以随时输入 /help 查看可用命令和功能。"
        }
      },
      commands: {
        help: "显示帮助信息和可用命令",
        clear: "清除屏幕内容",
        quit: "退出 Gemini CLI",
        theme: "更改界面主题",
        file: "读取文件内容到对话中",
        system: "执行系统命令"
      },
      commandsTitle: "常用命令速查",
      nextSteps: {
        title: "下一步",
        description: "恭喜！您已经成功完成了 Gemini CLI 的入门。现在可以继续学习更多功能：",
        basicCommands: "学习基本命令",
        fileOperations: "文件操作入门",
        backToGuides: "返回指南首页"
      }
    }
  },
  en: {
    guidesGettingStarted: {
      title: "First Time Using Gemini CLI",
      subtitle: "10-minute quick start to begin your AI-assisted programming journey",
      description: "This tutorial will help you quickly get started with Gemini CLI, learning basic operations and core concepts.",
      meta: {
        level: "Beginner friendly",
        duration: "10 minutes to complete"
      },
      prerequisites: {
        title: "Before You Start",
        nodejs: "Node.js 18 or higher installed",
        terminal: "Familiar with basic command line operations",
        google: "Google account (for authentication)"
      },
      steps: {
        install: {
          title: "Install Gemini CLI",
          description: "Choose the installation method that suits you",
          methods: {
            npx: {
              name: "NPX (Recommended)",
              description: "No installation required, run the latest version directly"
            },
            npm: {
              name: "NPM Global Install",
              description: "After global installation, use gemini command anywhere"
            },
            homebrew: {
              name: "Homebrew (macOS)",
              description: "Recommended for macOS users using Homebrew"
            }
          }
        },
        firstRun: {
          title: "First Launch",
          description: "Run Gemini CLI and complete initial configuration",
          steps: {
            command: {
              title: "Run Command",
              description: "Enter gemini command in terminal to start"
            },
            theme: {
              title: "Choose Theme",
              description: "First launch will prompt to choose color theme, select your preferred style"
            },
            auth: {
              title: "Authentication",
              description: "Login with Google account to get free usage quota"
            }
          }
        },
        firstChat: {
          title: "First Conversation",
          description: "Start interacting with AI",
          examples: {
            greeting: {
              title: "Simple Greeting",
              command: "> Hello, please introduce yourself",
              description: "Test basic conversation functionality"
            },
            code: {
              title: "Code-related Questions",
              command: "> Explain what a recursive function is",
              description: "Ask programming-related questions"
            },
            file: {
              title: "File Operations",
              command: "> @README.md Summarize the content of this file",
              description: "Use @ symbol to read file content"
            }
          }
        }
      },
      tips: {
        title: "Important Tips",
        success: {
          title: "Success Tip",
          content: "If you see Gemini CLI's welcome interface and prompt, installation is successful!"
        },
        warning: {
          title: "Important Notes",
          content: "First use requires network connection for authentication and model access."
        },
        info: {
          title: "Usage Tips",
          content: "You can enter /help anytime to view available commands and features."
        }
      },
      commands: {
        help: "Show help information and available commands",
        clear: "Clear screen content",
        quit: "Exit Gemini CLI",
        theme: "Change interface theme",
        file: "Read file content into conversation",
        system: "Execute system commands"
      },
      commandsTitle: "Common Commands Quick Reference",
      nextSteps: {
        title: "Next Steps",
        description: "Congratulations! You have successfully completed the Gemini CLI introduction. Now you can continue learning more features:",
        basicCommands: "Learn Basic Commands",
        fileOperations: "File Operations Basics",
        backToGuides: "Back to Guides"
      }
    }
  }
};

// Add translations to language files
Object.keys(gettingStartedTranslations).forEach(lang => {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Replace the existing guidesGettingStarted with detailed version
    Object.assign(data, gettingStartedTranslations[lang]);
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Updated detailed getting-started translations for ${lang}`);
  }
});

console.log('✓ All detailed getting-started translations added');
