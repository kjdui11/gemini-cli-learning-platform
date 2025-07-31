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
      title: "文件操作指南",
      subtitle: "掌握 Gemini CLI 的文件读取、编辑和管理功能",
      intermediate: "中级",
      readingTime: "20 分钟阅读"
    },
    overview: {
      title: "文件操作概览",
      description: "学习如何使用 Gemini CLI 高效地处理文件和目录，包括读取、编辑、创建和管理各种文件类型。"
    },
    operationsTitle: "核心文件操作",
    operationsDescription: "掌握 Gemini CLI 提供的各种文件操作功能",
    operations: [
      {
        title: "文件读取",
        description: "读取和分析各种格式的文件内容",
        icon: "DocumentTextIcon",
        color: "from-blue-500 to-indigo-600",
        command: "gemini read file.txt",
        features: [
          "支持多种文件格式",
          "智能内容解析",
          "大文件分块处理",
          "编码自动检测"
        ]
      },
      {
        title: "目录浏览",
        description: "浏览和分析目录结构",
        icon: "FolderIcon",
        color: "from-green-500 to-emerald-600",
        command: "gemini list ./src",
        features: [
          "递归目录遍历",
          "文件类型过滤",
          "大小和权限信息",
          "隐藏文件显示"
        ]
      },
      {
        title: "文件编辑",
        description: "智能编辑和修改文件内容",
        icon: "PencilIcon",
        color: "from-purple-500 to-pink-600",
        command: "gemini edit file.js",
        features: [
          "语法感知编辑",
          "自动格式化",
          "备份创建",
          "变更追踪"
        ]
      },
      {
        title: "文件删除",
        description: "安全删除文件和目录",
        icon: "TrashIcon",
        color: "from-red-500 to-orange-600",
        command: "gemini delete old-file.txt",
        features: [
          "安全确认机制",
          "回收站支持",
          "批量删除",
          "权限检查"
        ]
      },
      {
        title: "文件同步",
        description: "同步和备份文件操作",
        icon: "ArrowPathIcon",
        color: "from-teal-500 to-cyan-600",
        command: "gemini sync ./src ./backup",
        features: [
          "增量同步",
          "冲突解决",
          "进度显示",
          "错误恢复"
        ]
      }
    ],
    examplesTitle: "实用示例",
    examplesDescription: "通过实际示例学习文件操作的最佳实践",
    explanation: "说明",
    examples: [
      {
        title: "批量处理代码文件",
        description: "对项目中的所有 JavaScript 文件进行分析和优化",
        code: `# 读取所有 JS 文件并分析
gemini read "src/**/*.js" --analyze

# 批量格式化代码
gemini format "src/**/*.js" --style=prettier

# 生成文档
gemini doc "src/**/*.js" --output=docs/`,
        explanation: "使用通配符模式批量处理文件，提高工作效率。--analyze 参数会对代码进行深度分析，--style 参数指定格式化风格。"
      },
      {
        title: "智能文件重构",
        description: "使用 AI 辅助进行代码重构和优化",
        code: `# 分析文件并提出重构建议
gemini refactor app.js --suggestions

# 自动重构代码结构
gemini refactor app.js --auto --backup

# 重命名变量和函数
gemini rename app.js --from=oldName --to=newName`,
        explanation: "AI 会分析代码结构并提出改进建议。--backup 参数确保原文件安全，--auto 参数启用自动重构模式。"
      },
      {
        title: "配置文件管理",
        description: "管理项目配置文件和环境设置",
        code: `# 读取并验证配置文件
gemini config validate package.json

# 更新依赖版本
gemini config update package.json --deps=latest

# 生成环境配置
gemini config generate --env=production`,
        explanation: "配置文件管理功能帮助维护项目设置。validate 检查配置正确性，update 更新依赖，generate 创建环境配置。"
      }
    ],
    bestPracticesTitle: "最佳实践",
    bestPracticesDescription: "文件操作的重要建议和安全注意事项",
    bestPractices: [
      {
        type: "success",
        title: "始终备份重要文件",
        content: "在进行任何修改操作前，确保创建文件备份。使用 --backup 参数自动创建备份副本。"
      },
      {
        type: "warning",
        title: "谨慎使用批量操作",
        content: "批量文件操作功能强大但需谨慎使用。建议先在小范围测试，确认效果后再大规模应用。"
      },
      {
        type: "info",
        title: "利用文件过滤功能",
        content: "使用文件类型过滤和模式匹配功能，精确定位需要处理的文件，避免误操作。"
      },
      {
        type: "success",
        title: "监控文件变更",
        content: "使用变更追踪功能监控文件修改历史，便于问题排查和版本回退。"
      }
    ],
    nextSteps: {
      title: "下一步",
      description: "掌握了文件操作后，可以学习系统集成和代码重构技巧：",
      integration: "系统集成",
      codeRefactoring: "代码重构",
      backToGuides: "返回指南首页"
    }
  },
  en: {
    hero: {
      title: "File Operations Guide",
      subtitle: "Master Gemini CLI's file reading, editing, and management capabilities",
      intermediate: "Intermediate",
      readingTime: "20 min read"
    },
    overview: {
      title: "File Operations Overview",
      description: "Learn how to efficiently handle files and directories using Gemini CLI, including reading, editing, creating, and managing various file types."
    },
    operationsTitle: "Core File Operations",
    operationsDescription: "Master the various file operation features provided by Gemini CLI",
    operations: [
      {
        title: "File Reading",
        description: "Read and analyze content from various file formats",
        icon: "DocumentTextIcon",
        color: "from-blue-500 to-indigo-600",
        command: "gemini read file.txt",
        features: [
          "Support multiple file formats",
          "Intelligent content parsing",
          "Large file chunked processing",
          "Automatic encoding detection"
        ]
      },
      {
        title: "Directory Browsing",
        description: "Browse and analyze directory structures",
        icon: "FolderIcon",
        color: "from-green-500 to-emerald-600",
        command: "gemini list ./src",
        features: [
          "Recursive directory traversal",
          "File type filtering",
          "Size and permission info",
          "Hidden file display"
        ]
      },
      {
        title: "File Editing",
        description: "Intelligently edit and modify file content",
        icon: "PencilIcon",
        color: "from-purple-500 to-pink-600",
        command: "gemini edit file.js",
        features: [
          "Syntax-aware editing",
          "Automatic formatting",
          "Backup creation",
          "Change tracking"
        ]
      },
      {
        title: "File Deletion",
        description: "Safely delete files and directories",
        icon: "TrashIcon",
        color: "from-red-500 to-orange-600",
        command: "gemini delete old-file.txt",
        features: [
          "Safe confirmation mechanism",
          "Recycle bin support",
          "Batch deletion",
          "Permission checking"
        ]
      },
      {
        title: "File Synchronization",
        description: "Synchronize and backup file operations",
        icon: "ArrowPathIcon",
        color: "from-teal-500 to-cyan-600",
        command: "gemini sync ./src ./backup",
        features: [
          "Incremental sync",
          "Conflict resolution",
          "Progress display",
          "Error recovery"
        ]
      }
    ],
    examplesTitle: "Practical Examples",
    examplesDescription: "Learn file operation best practices through real examples",
    explanation: "Explanation",
    examples: [
      {
        title: "Batch Processing Code Files",
        description: "Analyze and optimize all JavaScript files in the project",
        code: `# Read all JS files and analyze
gemini read "src/**/*.js" --analyze

# Batch format code
gemini format "src/**/*.js" --style=prettier

# Generate documentation
gemini doc "src/**/*.js" --output=docs/`,
        explanation: "Use wildcard patterns to batch process files for improved efficiency. The --analyze parameter performs deep code analysis, --style parameter specifies formatting style."
      },
      {
        title: "Intelligent File Refactoring",
        description: "Use AI assistance for code refactoring and optimization",
        code: `# Analyze file and suggest refactoring
gemini refactor app.js --suggestions

# Auto refactor code structure
gemini refactor app.js --auto --backup

# Rename variables and functions
gemini rename app.js --from=oldName --to=newName`,
        explanation: "AI analyzes code structure and provides improvement suggestions. --backup parameter ensures original file safety, --auto parameter enables automatic refactoring mode."
      },
      {
        title: "Configuration File Management",
        description: "Manage project configuration files and environment settings",
        code: `# Read and validate configuration file
gemini config validate package.json

# Update dependency versions
gemini config update package.json --deps=latest

# Generate environment configuration
gemini config generate --env=production`,
        explanation: "Configuration file management features help maintain project settings. validate checks configuration correctness, update refreshes dependencies, generate creates environment configs."
      }
    ],
    bestPracticesTitle: "Best Practices",
    bestPracticesDescription: "Important recommendations and security considerations for file operations",
    bestPractices: [
      {
        type: "success",
        title: "Always Backup Important Files",
        content: "Ensure file backups are created before any modification operations. Use the --backup parameter to automatically create backup copies."
      },
      {
        type: "warning",
        title: "Use Batch Operations Carefully",
        content: "Batch file operations are powerful but require careful use. Test on a small scale first, confirm results before large-scale application."
      },
      {
        type: "info",
        title: "Utilize File Filtering Features",
        content: "Use file type filtering and pattern matching features to precisely target files that need processing, avoiding misoperations."
      },
      {
        type: "success",
        title: "Monitor File Changes",
        content: "Use change tracking features to monitor file modification history, facilitating problem troubleshooting and version rollback."
      }
    ],
    nextSteps: {
      title: "Next Steps",
      description: "After mastering file operations, you can learn system integration and code refactoring techniques:",
      integration: "System Integration",
      codeRefactoring: "Code Refactoring",
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
    
    // Add detailed file-operations translation
    if (translations[lang.code]) {
      content.guidesFileOperations = translations[lang.code];
    } else {
      // Use base template for languages not yet translated
      content.guidesFileOperations = baseTemplate;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Added detailed file-operations translations for ${lang.name} (${lang.code})`);
  }
});

console.log('✓ All detailed file-operations translations added');
