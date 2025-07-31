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
      title: "文档生成助手",
      subtitle: "使用 AI 智能生成高质量的项目文档",
      intermediate: "中级",
      readingTime: "25 分钟阅读"
    },
    overview: {
      title: "文档生成概览",
      description: "学习如何使用 Gemini CLI 自动生成和维护项目文档，包括 API 文档、用户手册、技术规范等。"
    },
    typesTitle: "文档类型",
    typesDescription: "了解不同类型的文档生成方法",
    promptExample: "提示示例",
    features: "主要功能",
    types: [
      {
        id: "api-docs",
        title: "API 文档生成",
        description: "从代码自动生成 API 文档",
        color: "from-blue-500 to-indigo-600",
        example: {
          prompt: "@src/api/ 为这个目录下的所有 API 文件生成完整的 API 文档，包括端点说明、参数描述、响应格式和使用示例",
          features: [
            "自动提取 API 端点",
            "生成参数说明表格",
            "包含请求/响应示例",
            "支持多种认证方式",
            "生成交互式文档"
          ]
        }
      },
      {
        id: "readme",
        title: "README 文档",
        description: "生成项目说明文档",
        color: "from-green-500 to-emerald-600",
        example: {
          prompt: "@package.json @src/ 分析这个项目的结构和功能，生成一个完整的 README.md 文档，包括项目介绍、安装说明、使用方法和贡献指南",
          features: [
            "项目概述和特性",
            "安装和配置说明",
            "使用示例和教程",
            "贡献指南",
            "许可证信息"
          ]
        }
      },
      {
        id: "user-manual",
        title: "用户手册",
        description: "创建详细的用户使用指南",
        color: "from-purple-500 to-pink-600",
        example: {
          prompt: "@src/components/ 基于这些组件创建用户手册，包括功能说明、使用步骤、常见问题和故障排除",
          features: [
            "功能详细说明",
            "步骤式操作指南",
            "截图和示例",
            "常见问题解答",
            "故障排除指南"
          ]
        }
      },
      {
        id: "technical-spec",
        title: "技术规范",
        description: "生成技术架构和设计文档",
        color: "from-orange-500 to-red-600",
        example: {
          prompt: "@src/ @docs/architecture.md 分析项目架构，生成技术规范文档，包括系统设计、数据流、接口定义和部署要求",
          features: [
            "系统架构图",
            "数据流程图",
            "接口规范",
            "部署要求",
            "性能指标"
          ]
        }
      }
    ],
    workflow: {
      title: "文档生成流程",
      description: "按照以下步骤生成高质量文档",
      steps: [
        {
          step: 1,
          title: "分析项目结构",
          description: "让 AI 了解项目的整体结构和功能",
          commands: [
            "@. 分析这个项目的整体结构",
            "@package.json 解释项目的依赖和配置",
            "@README.md 了解项目的基本信息"
          ]
        },
        {
          step: 2,
          title: "选择文档类型",
          description: "根据需求选择合适的文档类型和模板",
          commands: [
            "我需要生成 API 文档",
            "请创建用户使用手册",
            "生成技术架构文档"
          ]
        },
        {
          step: 3,
          title: "生成初始文档",
          description: "使用 AI 生成文档的初始版本",
          commands: [
            "@src/api/ 生成 API 文档",
            "@src/components/ 创建组件文档",
            "@docs/ 更新现有文档"
          ]
        },
        {
          step: 4,
          title: "审查和优化",
          description: "检查生成的文档并进行必要的调整",
          commands: [
            "检查文档的完整性和准确性",
            "优化文档的结构和格式",
            "添加缺失的示例和说明"
          ]
        }
      ]
    },
    practicalExamples: {
      title: "实际应用示例",
      description: "查看具体的文档生成案例"
    },
    examples: [
      {
        title: "React 组件文档",
        description: "为 React 组件生成详细文档",
        steps: [
          {
            command: "@src/components/Button.tsx 生成这个按钮组件的文档",
            description: "分析组件的 props、用法和示例"
          },
          {
            command: "添加使用示例和最佳实践",
            description: "补充实际使用场景和代码示例"
          },
          {
            command: "生成 Storybook 故事文件",
            description: "创建交互式组件演示"
          }
        ]
      },
      {
        title: "REST API 文档",
        description: "为 REST API 生成 OpenAPI 规范",
        steps: [
          {
            command: "@src/routes/ 分析所有 API 路由",
            description: "提取端点、参数和响应格式"
          },
          {
            command: "生成 OpenAPI 3.0 规范文件",
            description: "创建标准的 API 文档格式"
          },
          {
            command: "添加认证和错误处理说明",
            description: "补充安全和错误处理信息"
          }
        ]
      }
    ],
    bestPracticesTitle: "最佳实践",
    bestPracticesDescription: "文档生成的重要注意事项",
    bestPractices: [
      {
        type: "success",
        title: "保持文档同步",
        content: "定期更新文档以确保与代码保持同步，建议在代码变更时同时更新文档。"
      },
      {
        type: "info",
        title: "使用模板和标准",
        content: "采用一致的文档模板和格式标准，提高文档的可读性和专业性。"
      },
      {
        type: "warning",
        title: "验证生成内容",
        content: "AI 生成的文档需要人工审查，确保技术细节的准确性和完整性。"
      },
      {
        type: "success",
        title: "添加实际示例",
        content: "在文档中包含真实的代码示例和使用场景，帮助用户更好地理解。"
      }
    ],
    nextSteps: {
      title: "下一步",
      description: "现在您已经掌握了文档生成技巧，可以继续学习其他实战技能：",
      codeRefactoring: "代码重构",
      codeReview: "代码审查",
      backToGuides: "返回指南首页"
    }
  },
  en: {
    hero: {
      title: "Documentation Generator",
      subtitle: "Use AI to intelligently generate high-quality project documentation",
      intermediate: "Intermediate",
      readingTime: "25 min read"
    },
    overview: {
      title: "Documentation Overview",
      description: "Learn how to use Gemini CLI to automatically generate and maintain project documentation, including API docs, user manuals, technical specifications, and more."
    },
    typesTitle: "Documentation Types",
    typesDescription: "Learn about different types of documentation generation methods",
    promptExample: "Prompt Example",
    features: "Key Features",
    types: [
      {
        id: "api-docs",
        title: "API Documentation",
        description: "Automatically generate API documentation from code",
        color: "from-blue-500 to-indigo-600",
        example: {
          prompt: "@src/api/ Generate complete API documentation for all API files in this directory, including endpoint descriptions, parameter descriptions, response formats, and usage examples",
          features: [
            "Automatically extract API endpoints",
            "Generate parameter description tables",
            "Include request/response examples",
            "Support multiple authentication methods",
            "Generate interactive documentation"
          ]
        }
      },
      {
        id: "readme",
        title: "README Documentation",
        description: "Generate project description documentation",
        color: "from-green-500 to-emerald-600",
        example: {
          prompt: "@package.json @src/ Analyze this project's structure and functionality, generate a complete README.md document including project introduction, installation instructions, usage methods, and contribution guidelines",
          features: [
            "Project overview and features",
            "Installation and configuration instructions",
            "Usage examples and tutorials",
            "Contribution guidelines",
            "License information"
          ]
        }
      },
      {
        id: "user-manual",
        title: "User Manual",
        description: "Create detailed user guides",
        color: "from-purple-500 to-pink-600",
        example: {
          prompt: "@src/components/ Create a user manual based on these components, including feature descriptions, usage steps, FAQs, and troubleshooting",
          features: [
            "Detailed feature descriptions",
            "Step-by-step operation guides",
            "Screenshots and examples",
            "Frequently asked questions",
            "Troubleshooting guides"
          ]
        }
      },
      {
        id: "technical-spec",
        title: "Technical Specifications",
        description: "Generate technical architecture and design documents",
        color: "from-orange-500 to-red-600",
        example: {
          prompt: "@src/ @docs/architecture.md Analyze project architecture, generate technical specification documents including system design, data flow, interface definitions, and deployment requirements",
          features: [
            "System architecture diagrams",
            "Data flow diagrams",
            "Interface specifications",
            "Deployment requirements",
            "Performance metrics"
          ]
        }
      }
    ],
    workflow: {
      title: "Documentation Generation Workflow",
      description: "Follow these steps to generate high-quality documentation",
      steps: [
        {
          step: 1,
          title: "Analyze Project Structure",
          description: "Let AI understand the overall structure and functionality of the project",
          commands: [
            "@. Analyze the overall structure of this project",
            "@package.json Explain the project's dependencies and configuration",
            "@README.md Understand the basic information of the project"
          ]
        },
        {
          step: 2,
          title: "Choose Documentation Type",
          description: "Select appropriate documentation type and template based on requirements",
          commands: [
            "I need to generate API documentation",
            "Please create a user manual",
            "Generate technical architecture documentation"
          ]
        },
        {
          step: 3,
          title: "Generate Initial Documentation",
          description: "Use AI to generate the initial version of documentation",
          commands: [
            "@src/api/ Generate API documentation",
            "@src/components/ Create component documentation",
            "@docs/ Update existing documentation"
          ]
        },
        {
          step: 4,
          title: "Review and Optimize",
          description: "Check the generated documentation and make necessary adjustments",
          commands: [
            "Check the completeness and accuracy of documentation",
            "Optimize the structure and format of documentation",
            "Add missing examples and explanations"
          ]
        }
      ]
    },
    practicalExamples: {
      title: "Practical Examples",
      description: "View specific documentation generation cases"
    },
    examples: [
      {
        title: "React Component Documentation",
        description: "Generate detailed documentation for React components",
        steps: [
          {
            command: "@src/components/Button.tsx Generate documentation for this button component",
            description: "Analyze component props, usage, and examples"
          },
          {
            command: "Add usage examples and best practices",
            description: "Supplement actual use cases and code examples"
          },
          {
            command: "Generate Storybook story files",
            description: "Create interactive component demonstrations"
          }
        ]
      },
      {
        title: "REST API Documentation",
        description: "Generate OpenAPI specification for REST API",
        steps: [
          {
            command: "@src/routes/ Analyze all API routes",
            description: "Extract endpoints, parameters, and response formats"
          },
          {
            command: "Generate OpenAPI 3.0 specification file",
            description: "Create standard API documentation format"
          },
          {
            command: "Add authentication and error handling descriptions",
            description: "Supplement security and error handling information"
          }
        ]
      }
    ],
    bestPracticesTitle: "Best Practices",
    bestPracticesDescription: "Important considerations for documentation generation",
    bestPractices: [
      {
        type: "success",
        title: "Keep Documentation Synchronized",
        content: "Regularly update documentation to ensure it stays synchronized with code, recommend updating documentation when code changes."
      },
      {
        type: "info",
        title: "Use Templates and Standards",
        content: "Adopt consistent documentation templates and format standards to improve readability and professionalism."
      },
      {
        type: "warning",
        title: "Validate Generated Content",
        content: "AI-generated documentation needs human review to ensure accuracy and completeness of technical details."
      },
      {
        type: "success",
        title: "Add Practical Examples",
        content: "Include real code examples and use cases in documentation to help users better understand."
      }
    ],
    nextSteps: {
      title: "Next Steps",
      description: "Now that you've mastered documentation generation techniques, you can continue learning other practical skills:",
      codeRefactoring: "Code Refactoring",
      codeReview: "Code Review",
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
    
    // Add detailed documentation translation
    if (translations[lang.code]) {
      content.guidesDocumentation = translations[lang.code];
    } else {
      // Use base template for languages not yet translated
      content.guidesDocumentation = baseTemplate;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✓ Added detailed documentation translations for ${lang.name} (${lang.code})`);
  }
});

console.log('✓ All detailed documentation translations added');
