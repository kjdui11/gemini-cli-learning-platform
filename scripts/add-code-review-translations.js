const fs = require('fs');
const path = require('path');

// Code Review translations for Chinese
const codeReviewTranslationsZh = {
  "guidesCodeReview": {
    "title": "代码审查助手",
    "subtitle": "使用 AI 进行代码质量检查",
    "description": "利用 AI 的力量进行全面的代码审查，提升代码质量、安全性和团队协作效率。",
    "overview": {
      "title": "审查概述",
      "description": "代码审查是软件开发过程中的关键环节，通过系统性检查代码来发现潜在问题、提升代码质量。Gemini CLI 提供智能化的代码审查功能，帮助您快速识别问题并提供改进建议。"
    },
    "typesTitle": "审查类型",
    "typesDescription": "了解不同类型的代码审查重点",
    "types": [
      {
        "icon": "security",
        "title": "安全审查",
        "description": "检查代码中的安全漏洞和风险",
        "checks": [
          { "name": "SQL 注入检测" },
          { "name": "XSS 漏洞扫描" },
          { "name": "权限验证检查" },
          { "name": "敏感信息泄露" }
        ]
      },
      {
        "icon": "bugs",
        "title": "错误检测",
        "description": "识别潜在的 bug 和逻辑错误",
        "checks": [
          { "name": "空指针异常" },
          { "name": "数组越界" },
          { "name": "资源泄露" },
          { "name": "死锁检测" }
        ]
      },
      {
        "icon": "performance",
        "title": "性能分析",
        "description": "分析代码性能和优化机会",
        "checks": [
          { "name": "算法复杂度" },
          { "name": "内存使用" },
          { "name": "数据库查询" },
          { "name": "缓存策略" }
        ]
      },
      {
        "icon": "style",
        "title": "代码风格",
        "description": "检查代码规范和一致性",
        "checks": [
          { "name": "命名规范" },
          { "name": "代码格式" },
          { "name": "注释质量" },
          { "name": "函数长度" }
        ]
      }
    ],
    "workflow": {
      "title": "审查工作流程",
      "description": "遵循系统化的代码审查流程",
      "steps": [
        {
          "title": "准备审查",
          "description": "配置审查规则和检查范围",
          "example": "# 配置审查规则\ngemini review config --rules security,performance\n\n# 设置检查范围\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "执行审查",
          "description": "运行自动化代码审查",
          "example": "# 全面审查\ngemini review --comprehensive --output report.json\n\n# 增量审查\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "分析结果",
          "description": "查看审查报告并分析问题",
          "example": "# 查看审查报告\ngemini review report --format html\n\n# 按严重程度排序\ngemini review list --severity high"
        },
        {
          "title": "修复问题",
          "description": "根据建议修复发现的问题",
          "example": "# 自动修复\ngemini review fix --auto --safe-only\n\n# 交互式修复\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "审查检查点",
    "checkpointsDescription": "重要的代码审查检查项目",
    "checkpoints": [
      {
        "severity": "high",
        "title": "安全漏洞",
        "description": "可能导致安全问题的代码缺陷",
        "items": [
          { "text": "未验证的用户输入" },
          { "text": "硬编码的密码或密钥" },
          { "text": "不安全的加密算法" },
          { "text": "权限绕过漏洞" }
        ]
      },
      {
        "severity": "high",
        "title": "关键错误",
        "description": "可能导致程序崩溃的严重问题",
        "items": [
          { "text": "空指针解引用" },
          { "text": "数组越界访问" },
          { "text": "内存泄露" },
          { "text": "死锁风险" }
        ]
      },
      {
        "severity": "medium",
        "title": "性能问题",
        "description": "影响程序性能的代码问题",
        "items": [
          { "text": "低效的算法实现" },
          { "text": "不必要的数据库查询" },
          { "text": "缺少缓存机制" },
          { "text": "资源使用不当" }
        ]
      },
      {
        "severity": "low",
        "title": "代码质量",
        "description": "影响代码可读性和维护性的问题",
        "items": [
          { "text": "函数过长或过于复杂" },
          { "text": "变量命名不规范" },
          { "text": "缺少必要的注释" },
          { "text": "代码重复" }
        ]
      }
    ],
    "aiFeatures": {
      "title": "AI 审查功能",
      "description": "利用人工智能提升代码审查效率和准确性",
      "automated": {
        "title": "自动化检测",
        "features": [
          { "name": "智能漏洞扫描" },
          { "name": "性能瓶颈识别" },
          { "name": "代码异味检测" },
          { "name": "最佳实践建议" }
        ]
      },
      "intelligent": {
        "title": "智能分析",
        "features": [
          { "name": "上下文理解" },
          { "name": "业务逻辑分析" },
          { "name": "架构模式识别" },
          { "name": "个性化建议" }
        ]
      }
    },
    "bestPracticesTitle": "审查最佳实践",
    "bestPracticesDescription": "遵循这些最佳实践提升代码审查效果",
    "bestPractices": [
      {
        "title": "定期审查",
        "description": "建立定期的代码审查机制，不要等到项目结束才进行审查。"
      },
      {
        "title": "关注重点",
        "description": "优先关注安全性、性能和可维护性等关键方面，避免过度关注细节。"
      },
      {
        "title": "团队协作",
        "description": "鼓励团队成员参与审查过程，分享知识和经验。"
      },
      {
        "title": "持续改进",
        "description": "根据审查结果不断改进开发流程和编码规范。"
      }
    ],
    "nextSteps": {
      "title": "下一步",
      "description": "继续学习更多开发工具和最佳实践",
      "integration": "工具集成",
      "advancedConfig": "高级配置"
    }
  }
};

// Code Review translations for English
const codeReviewTranslationsEn = {
  "guidesCodeReview": {
    "title": "Code Review Assistant",
    "subtitle": "Use AI for code quality inspection",
    "description": "Leverage the power of AI for comprehensive code reviews to improve code quality, security, and team collaboration efficiency.",
    "overview": {
      "title": "Review Overview",
      "description": "Code review is a critical part of the software development process, systematically checking code to identify potential issues and improve code quality. Gemini CLI provides intelligent code review capabilities to help you quickly identify problems and provide improvement suggestions."
    },
    "typesTitle": "Review Types",
    "typesDescription": "Learn about different types of code review focuses",
    "types": [
      {
        "icon": "security",
        "title": "Security Review",
        "description": "Check for security vulnerabilities and risks in code",
        "checks": [
          { "name": "SQL Injection Detection" },
          { "name": "XSS Vulnerability Scan" },
          { "name": "Permission Verification Check" },
          { "name": "Sensitive Information Leakage" }
        ]
      },
      {
        "icon": "bugs",
        "title": "Bug Detection",
        "description": "Identify potential bugs and logical errors",
        "checks": [
          { "name": "Null Pointer Exception" },
          { "name": "Array Out of Bounds" },
          { "name": "Resource Leaks" },
          { "name": "Deadlock Detection" }
        ]
      },
      {
        "icon": "performance",
        "title": "Performance Analysis",
        "description": "Analyze code performance and optimization opportunities",
        "checks": [
          { "name": "Algorithm Complexity" },
          { "name": "Memory Usage" },
          { "name": "Database Queries" },
          { "name": "Caching Strategy" }
        ]
      },
      {
        "icon": "style",
        "title": "Code Style",
        "description": "Check code standards and consistency",
        "checks": [
          { "name": "Naming Conventions" },
          { "name": "Code Formatting" },
          { "name": "Comment Quality" },
          { "name": "Function Length" }
        ]
      }
    ],
    "workflow": {
      "title": "Review Workflow",
      "description": "Follow a systematic code review process",
      "steps": [
        {
          "title": "Prepare Review",
          "description": "Configure review rules and check scope",
          "example": "# Configure review rules\ngemini review config --rules security,performance\n\n# Set check scope\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "Execute Review",
          "description": "Run automated code review",
          "example": "# Comprehensive review\ngemini review --comprehensive --output report.json\n\n# Incremental review\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "Analyze Results",
          "description": "View review report and analyze issues",
          "example": "# View review report\ngemini review report --format html\n\n# Sort by severity\ngemini review list --severity high"
        },
        {
          "title": "Fix Issues",
          "description": "Fix identified issues based on suggestions",
          "example": "# Auto fix\ngemini review fix --auto --safe-only\n\n# Interactive fix\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "Review Checkpoints",
    "checkpointsDescription": "Important code review check items",
    "checkpoints": [
      {
        "severity": "high",
        "title": "Security Vulnerabilities",
        "description": "Code defects that may lead to security issues",
        "items": [
          { "text": "Unvalidated user input" },
          { "text": "Hardcoded passwords or keys" },
          { "text": "Insecure encryption algorithms" },
          { "text": "Permission bypass vulnerabilities" }
        ]
      },
      {
        "severity": "high",
        "title": "Critical Errors",
        "description": "Serious issues that may cause program crashes",
        "items": [
          { "text": "Null pointer dereference" },
          { "text": "Array out of bounds access" },
          { "text": "Memory leaks" },
          { "text": "Deadlock risks" }
        ]
      },
      {
        "severity": "medium",
        "title": "Performance Issues",
        "description": "Code issues affecting program performance",
        "items": [
          { "text": "Inefficient algorithm implementation" },
          { "text": "Unnecessary database queries" },
          { "text": "Missing caching mechanisms" },
          { "text": "Improper resource usage" }
        ]
      },
      {
        "severity": "low",
        "title": "Code Quality",
        "description": "Issues affecting code readability and maintainability",
        "items": [
          { "text": "Functions too long or complex" },
          { "text": "Non-standard variable naming" },
          { "text": "Missing necessary comments" },
          { "text": "Code duplication" }
        ]
      }
    ],
    "aiFeatures": {
      "title": "AI Review Features",
      "description": "Leverage artificial intelligence to improve code review efficiency and accuracy",
      "automated": {
        "title": "Automated Detection",
        "features": [
          { "name": "Intelligent Vulnerability Scanning" },
          { "name": "Performance Bottleneck Identification" },
          { "name": "Code Smell Detection" },
          { "name": "Best Practice Suggestions" }
        ]
      },
      "intelligent": {
        "title": "Intelligent Analysis",
        "features": [
          { "name": "Context Understanding" },
          { "name": "Business Logic Analysis" },
          { "name": "Architecture Pattern Recognition" },
          { "name": "Personalized Recommendations" }
        ]
      }
    },
    "bestPracticesTitle": "Review Best Practices",
    "bestPracticesDescription": "Follow these best practices to improve code review effectiveness",
    "bestPractices": [
      {
        "title": "Regular Reviews",
        "description": "Establish regular code review mechanisms, don't wait until project completion to conduct reviews."
      },
      {
        "title": "Focus on Key Areas",
        "description": "Prioritize security, performance, and maintainability, avoid over-focusing on details."
      },
      {
        "title": "Team Collaboration",
        "description": "Encourage team members to participate in the review process, sharing knowledge and experience."
      },
      {
        "title": "Continuous Improvement",
        "description": "Continuously improve development processes and coding standards based on review results."
      }
    ],
    "nextSteps": {
      "title": "Next Steps",
      "description": "Continue learning more development tools and best practices",
      "integration": "Tool Integration",
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
addTranslationsToFile(zhPath, codeReviewTranslationsZh);

// Add English translations
const enPath = path.join(__dirname, '..', 'src', 'messages', 'en.json');
addTranslationsToFile(enPath, codeReviewTranslationsEn);

// Add basic translations for other languages (using English as template)
const otherLanguages = ['de', 'fr', 'ja', 'ko', 'es', 'hi', 'ru'];
otherLanguages.forEach(lang => {
  const langPath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  addTranslationsToFile(langPath, codeReviewTranslationsEn);
});

console.log('Code review translations added successfully!');
