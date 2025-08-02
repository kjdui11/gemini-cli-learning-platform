// Commands translations for all supported languages
export interface CommandTranslations {
  [locale: string]: {
    title: string
    subtitle: string
    searchPlaceholder: string
    allCommands: string
    commandsFound: string
    command: string
    commands: string
    noCommandsFound: string
    noCommandsDesc: string
    quickStartTitle: string
    quickStartSubtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    syntax: string
    options: string
    examples: string
    notes: string
    relatedCommands: string
    required: string
    default: string
    output: string
    cheatSheetTitle: string
    essentialCommands: string
    chatCommands: string
    tip: string
    interactiveAISession: string
    quickQuestion: string
    analyzeCode: string
    authenticate: string
    switchAIModel: string
    loadFileContext: string
    saveConversation: string
    clearHistory: string
    categories: {
      core: { name: string; description: string }
      auth: { name: string; description: string }
      config: { name: string; description: string }
      analysis: { name: string; description: string }
      advanced: { name: string; description: string }
    }
    commandDescriptions?: {
      [commandId: string]: {
        description: string
        examples: Array<{ description: string; command: string }>
        notes: string[]
      }
    }
  }
}

export const commandsTranslations: CommandTranslations = {
  en: {
    title: 'Command Reference',
    subtitle: 'Complete reference for all Gemini CLI commands with syntax, options, and practical examples',
    searchPlaceholder: 'Search commands...',
    allCommands: 'All Commands',
    commandsFound: 'commands found',
    command: 'command',
    commands: 'commands',
    noCommandsFound: 'No commands found',
    noCommandsDesc: 'Try adjusting your search terms or browse different categories',
    quickStartTitle: 'Quick Start Guide',
    quickStartSubtitle: 'Get started with Gemini CLI in just a few commands',
    step1Title: 'Install & Authenticate',
    step1Desc: 'Install the CLI and authenticate with your Google account',
    step2Title: 'Start Chatting',
    step2Desc: 'Start an interactive session or ask quick questions',
    step3Title: 'Analyze Code',
    step3Desc: 'Analyze files and projects for insights and improvements',
    syntax: 'Syntax',
    options: 'Options',
    examples: 'Examples',
    notes: 'Notes',
    relatedCommands: 'Related Commands',
    required: 'required',
    default: 'Default',
    output: 'Output',
    cheatSheetTitle: 'Command Cheat Sheet',
    essentialCommands: 'Essential Commands',
    chatCommands: 'Chat Commands',
    tip: 'Tip: Use',
    interactiveAISession: 'Interactive AI session',
    quickQuestion: 'Quick question',
    analyzeCode: 'Analyze code',
    authenticate: 'Authenticate',
    switchAIModel: 'Switch AI model',
    loadFileContext: 'Load file context',
    saveConversation: 'Save conversation',
    clearHistory: 'Clear history',
    categories: {
      core: { name: 'Core Commands', description: 'Essential commands for daily AI-assisted development' },
      auth: { name: 'Authentication', description: 'Commands for managing authentication and API access' },
      config: { name: 'Configuration', description: 'Commands for configuring CLI settings and preferences' },
      analysis: { name: 'Code Analysis', description: 'Commands for analyzing and understanding code' },
      advanced: { name: 'Advanced Features', description: 'Advanced commands for power users and automation' }
    }
  },
  zh: {
    title: '命令参考',
    subtitle: '完整的 Gemini CLI 命令参考，包含语法、选项和实用示例',
    searchPlaceholder: '搜索命令...',
    allCommands: '所有命令',
    commandsFound: '个命令',
    command: '个命令',
    commands: '个命令',
    noCommandsFound: '未找到命令',
    noCommandsDesc: '尝试调整搜索条件或浏览不同分类',
    quickStartTitle: '快速入门指南',
    quickStartSubtitle: '通过几个简单命令快速上手 Gemini CLI',
    step1Title: '安装和认证',
    step1Desc: '安装 CLI 工具并使用 Google 账户进行认证',
    step2Title: '开始对话',
    step2Desc: '启动交互式会话或快速提问',
    step3Title: '分析代码',
    step3Desc: '分析文件和项目，获取洞察和改进建议',
    syntax: '语法',
    options: '选项',
    examples: '示例',
    notes: '注意事项',
    relatedCommands: '相关命令',
    required: '必需',
    default: '默认值',
    output: '输出',
    cheatSheetTitle: '命令速查表',
    essentialCommands: '基础命令',
    chatCommands: '聊天命令',
    tip: '提示：使用',
    interactiveAISession: '交互式 AI 会话',
    quickQuestion: '快速提问',
    analyzeCode: '分析代码',
    authenticate: '身份认证',
    switchAIModel: '切换 AI 模型',
    loadFileContext: '加载文件上下文',
    saveConversation: '保存对话',
    clearHistory: '清除历史记录',
    categories: {
      core: { name: '核心命令', description: '日常 AI 辅助开发的基础命令' },
      auth: { name: '身份认证', description: '管理身份认证和 API 访问的命令' },
      config: { name: '配置管理', description: '配置 CLI 设置和偏好的命令' },
      analysis: { name: '代码分析', description: '分析和理解代码的命令' },
      advanced: { name: '高级功能', description: '面向高级用户和自动化的命令' }
    },
    commandDescriptions: {
      chat: {
        description: '与 Gemini AI 开始交互式对话',
        examples: [
          { description: '开始基础聊天会话', command: 'gemini chat' },
          { description: '使用特定模型开始聊天', command: 'gemini chat --model gemini-pro' },
          { description: '开始聊天并保存对话', command: 'gemini chat --save my-session.md' }
        ],
        notes: [
          '聊天模式在整个会话期间保持上下文',
          '使用 Ctrl+C 或输入 "exit" 结束会话',
          '您可以将文件拖放到聊天中进行分析'
        ]
      },
      ask: {
        description: '向 Gemini AI 提出单个问题',
        examples: [
          { description: '提出简单问题', command: 'gemini ask "如何安装 Node.js？"' },
          { description: '询问代码并保存答案', command: 'gemini ask "解释这个函数" --output explanation.md' },
          { description: '使用文件内容提问', command: 'gemini ask "检查这段代码的错误" < app.js' }
        ],
        notes: [
          '每个 ask 命令都是独立的，不保持上下文',
          '最适合一次性问题和快速查询',
          '可以通过管道传输文件内容或命令输出'
        ]
      },
      analyze: {
        description: '分析文件、目录或代码以获取洞察',
        examples: [
          { description: '分析单个文件', command: 'gemini analyze app.js' },
          { description: '分析整个项目目录', command: 'gemini analyze . --recursive' },
          { description: '进行安全分析', command: 'gemini analyze src/ --type security' },
          { description: '分析并保存报告', command: 'gemini analyze package.json --output analysis-report.md' }
        ],
        notes: [
          '支持大多数基于文本的文件格式',
          '可以分析代码质量、安全性和性能',
          '不支持二进制文件'
        ]
      },
      auth: {
        description: '使用 Google 账户进行身份验证',
        examples: [
          { description: '开始身份验证过程', command: 'gemini auth' },
          { description: '检查身份验证状态', command: 'gemini auth status' },
          { description: '从当前账户注销', command: 'gemini auth logout' }
        ],
        notes: [
          '为 OAuth 身份验证打开浏览器',
          '凭据安全地存储在本地',
          '访问 Gemini API 所必需'
        ]
      },
      config: {
        description: '管理 CLI 配置设置',
        examples: [
          { description: '列出所有配置设置', command: 'gemini config list' },
          { description: '获取特定设置', command: 'gemini config get model' },
          { description: '设置配置值', command: 'gemini config set model gemini-pro' },
          { description: '为自动化设置 API 密钥', command: 'gemini config set api-key YOUR_API_KEY' },
          { description: '重置为默认设置', command: 'gemini config reset' }
        ],
        notes: [
          '配置按用户存储',
          'API 密钥设置绕过 OAuth 身份验证',
          '使用 reset 恢复默认设置'
        ]
      },
      version: {
        description: '显示版本信息',
        examples: [
          { description: '显示当前版本', command: 'gemini version' },
          { description: '显示详细版本信息', command: 'gemini version --verbose' },
          { description: '检查更新', command: 'gemini version --check-updates' }
        ],
        notes: [
          '显示 CLI 和相关组件的版本',
          '可以检查是否有可用更新',
          '包含构建信息和依赖版本'
        ]
      },
      help: {
        description: '显示命令帮助信息',
        examples: [
          { description: '显示一般帮助', command: 'gemini help' },
          { description: '显示特定命令帮助', command: 'gemini help chat' },
          { description: '显示所有可用命令', command: 'gemini help --all' }
        ],
        notes: [
          '提供详细的命令使用说明',
          '包含选项和示例',
          '可以获取特定命令的详细帮助'
        ]
      },
      init: {
        description: '在新项目中初始化 Gemini CLI',
        examples: [
          { description: '在当前目录初始化', command: 'gemini init' },
          { description: '使用特定模板初始化', command: 'gemini init --template typescript' },
          { description: '初始化并设置配置', command: 'gemini init --config' }
        ],
        notes: [
          '创建项目配置文件',
          '设置项目特定的设置',
          '可以选择不同的项目模板'
        ]
      },
      slash: {
        description: '聊天会话中可用的交互式命令',
        examples: [
          { description: '切换 AI 模型', command: '/model gemini-pro' },
          { description: '加载文件上下文', command: '/load app.js' },
          { description: '保存对话', command: '/save conversation.md' },
          { description: '清除历史记录', command: '/clear' }
        ],
        notes: [
          '仅在聊天模式中可用',
          '提供会话内的快速操作',
          '不需要退出聊天即可执行'
        ]
      },
      diff: {
        description: '比较文件或分析变更',
        examples: [
          { description: '比较两个文件', command: 'gemini diff file1.js file2.js' },
          { description: '分析 Git 变更', command: 'gemini diff --git' },
          { description: '比较目录', command: 'gemini diff dir1/ dir2/' }
        ],
        notes: [
          '支持文件和目录比较',
          '可以集成 Git 变更分析',
          '提供智能差异分析'
        ]
      },
      status: {
        description: '显示项目状态和健康检查',
        examples: [
          { description: '检查项目状态', command: 'gemini status' },
          { description: '详细状态报告', command: 'gemini status --verbose' },
          { description: '检查特定组件', command: 'gemini status --component auth' }
        ],
        notes: [
          '显示项目健康状况',
          '检查配置和依赖',
          '提供故障排除信息'
        ]
      }
    }
  },
  hi: {
    title: 'कमांड संदर्भ',
    subtitle: 'सिंटैक्स, विकल्प और व्यावहारिक उदाहरणों के साथ सभी Gemini CLI कमांड का पूरा संदर्भ',
    searchPlaceholder: 'कमांड खोजें...',
    allCommands: 'सभी कमांड',
    commandsFound: 'कमांड मिले',
    command: 'कमांड',
    commands: 'कमांड',
    noCommandsFound: 'कोई कमांड नहीं मिला',
    noCommandsDesc: 'अपने खोज शब्दों को समायोजित करने या विभिन्न श्रेणियों को ब्राउज़ करने का प्रयास करें',
    quickStartTitle: 'त्वरित प्रारंभ गाइड',
    quickStartSubtitle: 'कुछ ही कमांड में Gemini CLI के साथ शुरुआत करें',
    step1Title: 'इंस्टॉल और प्रमाणीकरण',
    step1Desc: 'CLI इंस्टॉल करें और अपने Google खाते से प्रमाणीकरण करें',
    step2Title: 'चैट शुरू करें',
    step2Desc: 'एक इंटरैक्टिव सत्र शुरू करें या त्वरित प्रश्न पूछें',
    step3Title: 'कोड का विश्लेषण करें',
    step3Desc: 'अंतर्दृष्टि और सुधार के लिए फ़ाइलों और परियोजनाओं का विश्लेषण करें',
    syntax: 'सिंटैक्स',
    options: 'विकल्प',
    examples: 'उदाहरण',
    notes: 'नोट्स',
    relatedCommands: 'संबंधित कमांड',
    required: 'आवश्यक',
    default: 'डिफ़ॉल्ट',
    output: 'आउटपुट',
    cheatSheetTitle: 'कमांड चीट शीट',
    essentialCommands: 'आवश्यक कमांड',
    chatCommands: 'चैट कमांड',
    tip: 'सुझाव: उपयोग करें',
    interactiveAISession: 'इंटरैक्टिव AI सत्र',
    quickQuestion: 'त्वरित प्रश्न',
    analyzeCode: 'कोड का विश्लेषण',
    authenticate: 'प्रमाणीकरण',
    switchAIModel: 'AI मॉडल स्विच करें',
    loadFileContext: 'फ़ाइल संदर्भ लोड करें',
    saveConversation: 'बातचीत सहेजें',
    clearHistory: 'इतिहास साफ़ करें',
    categories: {
      core: { name: 'मुख्य कमांड', description: 'दैनिक AI-सहायक विकास के लिए आवश्यक कमांड' },
      auth: { name: 'प्रमाणीकरण', description: 'प्रमाणीकरण और API पहुंच प्रबंधन के लिए कमांड' },
      config: { name: 'कॉन्फ़िगरेशन', description: 'CLI सेटिंग्स और प्राथमिकताओं को कॉन्फ़िगर करने के लिए कमांड' },
      analysis: { name: 'कोड विश्लेषण', description: 'कोड का विश्लेषण और समझने के लिए कमांड' },
      advanced: { name: 'उन्नत सुविधाएं', description: 'पावर उपयोगकर्ताओं और स्वचालन के लिए उन्नत कमांड' }
    },
    commandDescriptions: {
      chat: {
        description: 'Gemini AI के साथ इंटरैक्टिव बातचीत शुरू करें',
        examples: [
          { description: 'बुनियादी चैट सत्र शुरू करें', command: 'gemini chat' },
          { description: 'विशिष्ट मॉडल के साथ चैट शुरू करें', command: 'gemini chat --model gemini-pro' },
          { description: 'चैट शुरू करें और बातचीत सहेजें', command: 'gemini chat --save my-session.md' }
        ],
        notes: [
          'चैट मोड पूरे सत्र में संदर्भ बनाए रखता है',
          'सत्र समाप्त करने के लिए Ctrl+C या "exit" टाइप करें',
          'आप विश्लेषण के लिए चैट में फ़ाइलें खींच और छोड़ सकते हैं'
        ]
      },
      ask: {
        description: 'Gemini AI से एक प्रश्न पूछें',
        examples: [
          { description: 'सरल प्रश्न पूछें', command: 'gemini ask "Node.js कैसे इंस्टॉल करें?"' },
          { description: 'कोड के बारे में पूछें और उत्तर सहेजें', command: 'gemini ask "इस फ़ंक्शन की व्याख्या करें" --output explanation.md' },
          { description: 'फ़ाइल सामग्री के साथ प्रश्न पूछें', command: 'gemini ask "इस कोड में त्रुटियों की जांच करें" < app.js' }
        ],
        notes: [
          'प्रत्येक ask कमांड स्वतंत्र है, संदर्भ बनाए नहीं रखता',
          'एक बार के प्रश्न और त्वरित क्वेरी के लिए सबसे अच्छा',
          'फ़ाइल सामग्री या कमांड आउटपुट को पाइप कर सकते हैं'
        ]
      },
      analyze: {
        description: 'अंतर्दृष्टि के लिए फ़ाइलों, निर्देशिकाओं या कोड का विश्लेषण करें',
        examples: [
          { description: 'एकल फ़ाइल का विश्लेषण करें', command: 'gemini analyze app.js' },
          { description: 'पूरी प्रोजेक्ट निर्देशिका का विश्लेषण करें', command: 'gemini analyze . --recursive' },
          { description: 'सुरक्षा विश्लेषण करें', command: 'gemini analyze src/ --type security' },
          { description: 'विश्लेषण करें और रिपोर्ट सहेजें', command: 'gemini analyze package.json --output analysis-report.md' }
        ],
        notes: [
          'अधिकांश टेक्स्ट-आधारित फ़ाइल प्रारूपों का समर्थन करता है',
          'कोड गुणवत्ता, सुरक्षा और प्रदर्शन का विश्लेषण कर सकता है',
          'बाइनरी फ़ाइलों का समर्थन नहीं करता'
        ]
      },
      auth: {
        description: 'Google खाते के साथ प्रमाणीकरण करें',
        examples: [
          { description: 'प्रमाणीकरण प्रक्रिया शुरू करें', command: 'gemini auth' },
          { description: 'प्रमाणीकरण स्थिति जांचें', command: 'gemini auth status' },
          { description: 'वर्तमान खाते से लॉग आउट करें', command: 'gemini auth logout' }
        ],
        notes: [
          'OAuth प्रमाणीकरण के लिए ब्राउज़र खोलता है',
          'क्रेडेंशियल स्थानीय रूप से सुरक्षित रूप से संग्रहीत होते हैं',
          'Gemini API तक पहुंच के लिए आवश्यक'
        ]
      },
      config: {
        description: 'CLI कॉन्फ़िगरेशन सेटिंग्स प्रबंधित करें',
        examples: [
          { description: 'सभी कॉन्फ़िगरेशन सेटिंग्स सूचीबद्ध करें', command: 'gemini config list' },
          { description: 'विशिष्ट सेटिंग प्राप्त करें', command: 'gemini config get model' },
          { description: 'कॉन्फ़िगरेशन मान सेट करें', command: 'gemini config set model gemini-pro' },
          { description: 'स्वचालन के लिए API कुंजी सेट करें', command: 'gemini config set api-key YOUR_API_KEY' },
          { description: 'डिफ़ॉल्ट सेटिंग्स पर रीसेट करें', command: 'gemini config reset' }
        ],
        notes: [
          'कॉन्फ़िगरेशन प्रति उपयोगकर्ता संग्रहीत होती है',
          'API कुंजी सेटिंग OAuth प्रमाणीकरण को बायपास करती है',
          'डिफ़ॉल्ट सेटिंग्स को पुनर्स्थापित करने के लिए reset का उपयोग करें'
        ]
      },
      version: {
        description: 'संस्करण जानकारी प्रदर्शित करें',
        examples: [
          { description: 'वर्तमान संस्करण दिखाएं', command: 'gemini version' },
          { description: 'विस्तृत संस्करण जानकारी दिखाएं', command: 'gemini version --verbose' },
          { description: 'अपडेट की जांच करें', command: 'gemini version --check-updates' }
        ],
        notes: [
          'CLI और संबंधित घटकों का संस्करण दिखाता है',
          'उपलब्ध अपडेट की जांच कर सकता है',
          'बिल्ड जानकारी और निर्भरता संस्करण शामिल करता है'
        ]
      },
      help: {
        description: 'कमांड के लिए सहायता जानकारी प्रदर्शित करें',
        examples: [
          { description: 'सामान्य सहायता दिखाएं', command: 'gemini help' },
          { description: 'विशिष्ट कमांड सहायता दिखाएं', command: 'gemini help chat' },
          { description: 'सभी उपलब्ध कमांड दिखाएं', command: 'gemini help --all' }
        ],
        notes: [
          'कमांड उपयोग के लिए विस्तृत निर्देश प्रदान करता है',
          'विकल्प और उदाहरण शामिल करता है',
          'विशिष्ट कमांड के लिए विस्तृत सहायता प्राप्त कर सकते हैं'
        ]
      },
      init: {
        description: 'नई परियोजना में Gemini CLI को प्रारंभ करें',
        examples: [
          { description: 'वर्तमान निर्देशिका में प्रारंभ करें', command: 'gemini init' },
          { description: 'विशिष्ट टेम्प्लेट के साथ प्रारंभ करें', command: 'gemini init --template typescript' },
          { description: 'प्रारंभ करें और कॉन्फ़िगरेशन सेट करें', command: 'gemini init --config' }
        ],
        notes: [
          'परियोजना कॉन्फ़िगरेशन फ़ाइल बनाता है',
          'परियोजना-विशिष्ट सेटिंग्स सेट करता है',
          'विभिन्न परियोजना टेम्प्लेट चुन सकते हैं'
        ]
      },
      slash: {
        description: 'चैट सत्र के भीतर उपलब्ध इंटरैक्टिव कमांड',
        examples: [
          { description: 'AI मॉडल स्विच करें', command: '/model gemini-pro' },
          { description: 'फ़ाइल संदर्भ लोड करें', command: '/load app.js' },
          { description: 'बातचीत सहेजें', command: '/save conversation.md' },
          { description: 'इतिहास साफ़ करें', command: '/clear' }
        ],
        notes: [
          'केवल चैट मोड में उपलब्ध',
          'सत्र के भीतर त्वरित संचालन प्रदान करता है',
          'चैट से बाहर निकले बिना निष्पादित कर सकते हैं'
        ]
      },
      diff: {
        description: 'फ़ाइलों की तुलना करें या परिवर्तनों का विश्लेषण करें',
        examples: [
          { description: 'दो फ़ाइलों की तुलना करें', command: 'gemini diff file1.js file2.js' },
          { description: 'Git परिवर्तनों का विश्लेषण करें', command: 'gemini diff --git' },
          { description: 'निर्देशिकाओं की तुलना करें', command: 'gemini diff dir1/ dir2/' }
        ],
        notes: [
          'फ़ाइल और निर्देशिका तुलना का समर्थन करता है',
          'Git परिवर्तन विश्लेषण को एकीकृत कर सकता है',
          'बुद्धिमान अंतर विश्लेषण प्रदान करता है'
        ]
      },
      status: {
        description: 'परियोजना स्थिति और स्वास्थ्य जांच दिखाएं',
        examples: [
          { description: 'परियोजना स्थिति जांचें', command: 'gemini status' },
          { description: 'विस्तृत स्थिति रिपोर्ट', command: 'gemini status --verbose' },
          { description: 'विशिष्ट घटक जांचें', command: 'gemini status --component auth' }
        ],
        notes: [
          'परियोजना स्वास्थ्य स्थिति दिखाता है',
          'कॉन्फ़िगरेशन और निर्भरताओं की जांच करता है',
          'समस्या निवारण जानकारी प्रदान करता है'
        ]
      }
    }
  }
}