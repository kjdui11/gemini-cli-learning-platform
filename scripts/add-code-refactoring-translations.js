const fs = require('fs');
const path = require('path');

// Code Refactoring translations for Chinese
const codeRefactoringTranslationsZh = {
  "guidesCodeRefactoring": {
    "title": "代码重构助手",
    "subtitle": "使用 AI 分析和重构现有代码",
    "description": "学习如何使用 Gemini CLI 进行智能代码重构，提升代码质量、可读性和维护性。",
    "overview": {
      "title": "重构概述",
      "description": "代码重构是改善现有代码结构而不改变其外部行为的过程。Gemini CLI 提供强大的 AI 辅助重构功能，帮助您识别代码异味、优化性能并提升代码质量。"
    },
    "typesTitle": "重构类型",
    "typesDescription": "了解不同类型的代码重构技术",
    "types": [
      {
        "icon": "structure",
        "title": "结构重构",
        "description": "改善代码的组织结构和架构",
        "techniques": [
          { "name": "提取方法" },
          { "name": "提取类" },
          { "name": "移动方法" },
          { "name": "重命名变量" }
        ]
      },
      {
        "icon": "performance",
        "title": "性能优化",
        "description": "优化代码执行效率和资源使用",
        "techniques": [
          { "name": "算法优化" },
          { "name": "缓存策略" },
          { "name": "内存管理" },
          { "name": "并发优化" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "可维护性",
        "description": "提升代码的可读性和维护性",
        "techniques": [
          { "name": "简化条件表达式" },
          { "name": "消除重复代码" },
          { "name": "改善命名" },
          { "name": "添加注释" }
        ]
      },
      {
        "icon": "security",
        "title": "安全加固",
        "description": "识别和修复潜在的安全漏洞",
        "techniques": [
          { "name": "输入验证" },
          { "name": "权限检查" },
          { "name": "数据加密" },
          { "name": "错误处理" }
        ]
      }
    ],
    "workflow": {
      "title": "重构工作流程",
      "description": "遵循系统化的重构流程确保代码质量",
      "steps": [
        {
          "title": "代码分析",
          "description": "使用 AI 分析现有代码，识别重构机会",
          "example": "# 分析代码质量\ngemini analyze --file src/main.js --type quality\n\n# 检测代码异味\ngemini detect --smell --directory src/"
        },
        {
          "title": "制定重构计划",
          "description": "基于分析结果制定详细的重构计划",
          "example": "# 生成重构建议\ngemini refactor --plan --file src/main.js\n\n# 评估重构风险\ngemini assess --risk --changes planned"
        },
        {
          "title": "执行重构",
          "description": "逐步执行重构操作，保持代码功能不变",
          "example": "# 自动重构\ngemini refactor --apply --file src/main.js\n\n# 交互式重构\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "验证和测试",
          "description": "确保重构后的代码功能正确且性能良好",
          "example": "# 运行测试\ngemini test --after-refactor\n\n# 性能对比\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "重构示例",
    "examplesDescription": "查看实际的代码重构案例",
    "beforeLabel": "重构前",
    "afterLabel": "重构后",
    "examples": [
      {
        "title": "函数提取",
        "description": "将复杂函数拆分为更小、更专注的函数",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "条件简化",
        "description": "简化复杂的条件判断逻辑",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "重构最佳实践",
    "bestPracticesDescription": "遵循这些最佳实践确保重构成功",
    "bestPractices": [
      {
        "title": "小步快跑",
        "description": "进行小而频繁的重构，而不是大规模的一次性重构，降低风险并便于回滚。"
      },
      {
        "title": "测试先行",
        "description": "在重构前确保有充分的测试覆盖，重构后立即运行测试验证功能正确性。"
      },
      {
        "title": "版本控制",
        "description": "每次重构都要提交到版本控制系统，保持清晰的变更历史记录。"
      },
      {
        "title": "团队沟通",
        "description": "重构涉及多人协作的代码时，要提前沟通并获得团队成员的认可。"
      }
    ],
    "nextSteps": {
      "title": "下一步",
      "description": "继续学习更多代码质量相关的主题",
      "codeReview": "代码审查",
      "advancedConfig": "高级配置"
    }
  }
};

// Code Refactoring translations for English
const codeRefactoringTranslationsEn = {
  "guidesCodeRefactoring": {
    "title": "Code Refactoring Assistant",
    "subtitle": "Use AI to analyze and refactor existing code",
    "description": "Learn how to use Gemini CLI for intelligent code refactoring to improve code quality, readability, and maintainability.",
    "overview": {
      "title": "Refactoring Overview",
      "description": "Code refactoring is the process of improving existing code structure without changing its external behavior. Gemini CLI provides powerful AI-assisted refactoring capabilities to help you identify code smells, optimize performance, and enhance code quality."
    },
    "typesTitle": "Refactoring Types",
    "typesDescription": "Learn about different types of code refactoring techniques",
    "types": [
      {
        "icon": "structure",
        "title": "Structural Refactoring",
        "description": "Improve code organization and architecture",
        "techniques": [
          { "name": "Extract Method" },
          { "name": "Extract Class" },
          { "name": "Move Method" },
          { "name": "Rename Variable" }
        ]
      },
      {
        "icon": "performance",
        "title": "Performance Optimization",
        "description": "Optimize code execution efficiency and resource usage",
        "techniques": [
          { "name": "Algorithm Optimization" },
          { "name": "Caching Strategy" },
          { "name": "Memory Management" },
          { "name": "Concurrency Optimization" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "Maintainability",
        "description": "Enhance code readability and maintainability",
        "techniques": [
          { "name": "Simplify Conditional Expressions" },
          { "name": "Eliminate Duplicate Code" },
          { "name": "Improve Naming" },
          { "name": "Add Comments" }
        ]
      },
      {
        "icon": "security",
        "title": "Security Hardening",
        "description": "Identify and fix potential security vulnerabilities",
        "techniques": [
          { "name": "Input Validation" },
          { "name": "Permission Checks" },
          { "name": "Data Encryption" },
          { "name": "Error Handling" }
        ]
      }
    ],
    "workflow": {
      "title": "Refactoring Workflow",
      "description": "Follow a systematic refactoring process to ensure code quality",
      "steps": [
        {
          "title": "Code Analysis",
          "description": "Use AI to analyze existing code and identify refactoring opportunities",
          "example": "# Analyze code quality\ngemini analyze --file src/main.js --type quality\n\n# Detect code smells\ngemini detect --smell --directory src/"
        },
        {
          "title": "Create Refactoring Plan",
          "description": "Develop a detailed refactoring plan based on analysis results",
          "example": "# Generate refactoring suggestions\ngemini refactor --plan --file src/main.js\n\n# Assess refactoring risks\ngemini assess --risk --changes planned"
        },
        {
          "title": "Execute Refactoring",
          "description": "Gradually execute refactoring operations while maintaining code functionality",
          "example": "# Automatic refactoring\ngemini refactor --apply --file src/main.js\n\n# Interactive refactoring\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "Verify and Test",
          "description": "Ensure refactored code functions correctly and performs well",
          "example": "# Run tests\ngemini test --after-refactor\n\n# Performance comparison\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "Refactoring Examples",
    "examplesDescription": "View real code refactoring cases",
    "beforeLabel": "Before",
    "afterLabel": "After",
    "examples": [
      {
        "title": "Function Extraction",
        "description": "Split complex functions into smaller, more focused functions",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "Condition Simplification",
        "description": "Simplify complex conditional logic",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "Refactoring Best Practices",
    "bestPracticesDescription": "Follow these best practices to ensure successful refactoring",
    "bestPractices": [
      {
        "title": "Small Steps",
        "description": "Make small, frequent refactorings rather than large-scale one-time refactoring to reduce risk and facilitate rollback."
      },
      {
        "title": "Test First",
        "description": "Ensure adequate test coverage before refactoring and run tests immediately after to verify functionality."
      },
      {
        "title": "Version Control",
        "description": "Commit each refactoring to version control system to maintain clear change history."
      },
      {
        "title": "Team Communication",
        "description": "Communicate in advance and get team approval when refactoring code involving multiple collaborators."
      }
    ],
    "nextSteps": {
      "title": "Next Steps",
      "description": "Continue learning more code quality related topics",
      "codeReview": "Code Review",
      "advancedConfig": "Advanced Configuration"
    }
  }
};

// Function to add translations to a language file
function addTranslationsToFile(filePath, translations) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(content);
    
    // Merge translations
    Object.assign(jsonData, translations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
}

// Add Chinese translations
const zhPath = path.join(__dirname, '..', 'src', 'messages', 'zh.json');
addTranslationsToFile(zhPath, codeRefactoringTranslationsZh);

// Add English translations
const enPath = path.join(__dirname, '..', 'src', 'messages', 'en.json');
addTranslationsToFile(enPath, codeRefactoringTranslationsEn);

// Add basic translations for other languages (using English as template)
const otherLanguages = ['de', 'fr', 'ja', 'ko', 'es', 'hi', 'ru'];
otherLanguages.forEach(lang => {
  const langPath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  addTranslationsToFile(langPath, codeRefactoringTranslationsEn);
});

console.log('Code refactoring translations added successfully!');
