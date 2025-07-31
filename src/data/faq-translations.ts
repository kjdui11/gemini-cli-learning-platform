// Enhanced FAQ translations for all supported languages
// This file contains translations for the high-quality FAQ content

export interface FAQTranslations {
  [locale: string]: {
    [faqId: string]: {
      question: string
      answer: string
    }
  }
}

export const faqTranslations: FAQTranslations = {
  // Chinese translations
  zh: {
    'install-nodejs-requirement': {
      question: 'Gemini CLI 的系统要求是什么？',
      answer: 'Gemini CLI 需要 Node.js 20 或更高版本。您可以使用 `node --version` 检查您的 Node.js 版本。如果需要更新，请从 nodejs.org 下载最新的 LTS 版本。CLI 支持 Windows、macOS 和 Linux 系统。在 macOS 上，您也可以通过 Homebrew 安装：`brew install gemini-cli`。'
    },
    'install-global-vs-npx': {
      question: '我应该全局安装 Gemini CLI 还是使用 npx？',
      answer: '两种方法都可以，但建议大多数用户使用 npx。使用 `npx @google/generative-ai-cli` 可以在不安装的情况下运行，这确保您始终使用最新版本并避免权限问题。如果经常使用，可以全局安装 `npm install -g @google/generative-ai-cli`，但需要手动管理更新。'
    },
    'install-permission-errors': {
      question: '如何修复安装过程中的权限错误？',
      answer: '权限错误在全局 npm 安装中很常见。解决方案：1) 使用 npx 而不是全局安装，2) 配置 npm 使用不同目录：`npm config set prefix ~/.npm-global`，3) 在 macOS/Linux 上，避免使用 sudo，使用 nvm 等 Node 版本管理器，4) 在 Windows 上，仅在必要时以管理员身份运行命令提示符。'
    },
    'auth-google-account': {
      question: '如何使用我的 Google 账户进行身份验证？',
      answer: '运行 `gemini auth`（或 `npx @google/generative-ai-cli auth`）开始身份验证过程。这会打开浏览器让您登录 Google 并授予必要权限。身份验证成功后，使用 `gemini auth status` 验证登录状态。身份验证令牌安全存储在您的本地机器上。'
    },
    'auth-api-key-vs-oauth': {
      question: '我应该使用 API 密钥还是 OAuth 身份验证？',
      answer: 'OAuth（通过 `gemini auth`）推荐用于个人使用，因为它更安全且更易管理。API 密钥更适合自动化脚本和 CI/CD 环境。OAuth 提供更好的速率限制和更多功能访问。如果需要自动化，可以使用 `gemini config set api-key YOUR_KEY` 直接设置 API 密钥。'
    },
    'auth-multiple-accounts': {
      question: '我可以在 Gemini CLI 中使用多个 Google 账户吗？',
      answer: '目前，Gemini CLI 一次只支持一个已认证账户。要切换账户，请运行 `gemini auth logout` 然后使用新账户运行 `gemini auth`。对于管理多个账户，考虑在系统上使用不同的用户配置文件或为不同项目使用单独的 API 密钥。'
    },
    'usage-first-conversation': {
      question: '如何开始与 Gemini 的第一次对话？',
      answer: '使用 `gemini chat` 开始交互式对话模式，或使用 `gemini ask "您的问题"` 进行单个问题。对于文件分析，使用 `gemini analyze path/to/file`。聊天模式允许保持上下文的来回对话，而 ask 更适合一次性问题。'
    },
    'usage-file-analysis': {
      question: 'Gemini CLI 可以分析哪些文件类型？',
      answer: 'Gemini CLI 可以分析大多数基于文本的文件，包括源代码（JavaScript、Python、Java、C#、Go、Rust 等）、配置文件（JSON、YAML、XML）、文档（Markdown、纯文本）和数据文件（CSV、SQL）。不支持二进制文件。使用 `gemini analyze filename` 或将文件拖入聊天模式。'
    },
    'usage-context-retention': {
      question: 'Gemini 会记住我们对话的上下文多长时间？',
      answer: '在聊天模式下，Gemini 在会话期间保持上下文。当您退出聊天或开始新会话时，上下文会丢失。对于较长的项目，请将重要信息保存在文件中或使用 `--save` 标志导出对话。每个 `ask` 命令都是独立的，没有上下文保持。'
    },
    'advanced-mcp-integration': {
      question: '如何将 MCP（模型上下文协议）服务器与 Gemini CLI 集成？',
      answer: 'MCP 服务器通过自定义工具和数据源扩展 Gemini CLI。使用 MCP 服务器：1) 安装 MCP 服务器（例如 `npm install @modelcontextprotocol/server-filesystem`），2) 在 Gemini CLI 设置中配置它，3) 服务器将提供额外的工具，如文件操作、数据库查询或 API 调用。流行的 MCP 服务器包括文件系统、数据库和网页浏览功能。'
    },
    'advanced-custom-config': {
      question: '如何为我的工作流程自定义 Gemini CLI 配置？',
      answer: 'Gemini CLI 可以通过配置文件和环境变量进行自定义。使用 `gemini config list` 查看当前设置，`gemini config set <key> <value>` 修改设置，如模型选择、温度、最大令牌数和输出格式。您还可以创建项目特定的 GEMINI.md 文件来自定义特定项目的交互。'
    },
    'advanced-automation': {
      question: '我可以在自动化脚本和 CI/CD 管道中使用 Gemini CLI 吗？',
      answer: '是的，Gemini CLI 通过 API 密钥身份验证和非交互模式支持自动化。对于 CI/CD：1) 使用 `GEMINI_API_KEY` 环境变量设置 API 密钥身份验证，2) 使用非交互命令如 `gemini ask "问题"` 而不是聊天模式，3) 配置适当的速率限制和错误处理。避免在自动化环境中使用 OAuth 身份验证。'
    },
    'troubleshoot-permission-denied': {
      question: '如何修复全局安装 Gemini CLI 时的"权限被拒绝"错误？',
      answer: '权限错误在全局 npm 安装中很常见。解决方案：1) 使用 `npx @google/gemini-cli` 而不是全局安装（推荐），2) 配置 npm 使用用户目录：`npm config set prefix ~/.npm-global` 并将 `~/.npm-global/bin` 添加到您的 PATH，3) 在 macOS/Linux 上，使用 nvm 等 Node 版本管理器而不是 sudo，4) 在 Windows 上，仅在必要时以管理员身份运行命令提示符。'
    },
    'troubleshoot-auth-headless': {
      question: '在远程服务器或无头环境中身份验证失败 - 如何修复？',
      answer: '对于无头环境（没有浏览器的服务器），使用 API 密钥身份验证而不是 OAuth：1) 从 Google AI Studio (aistudio.google.com) 获取 API 密钥，2) 设置为环境变量：`export GEMINI_API_KEY=your_key_here`，3) 或使用 `gemini config set api-key your_key_here`，4) 使用 `gemini config get api-key` 验证。这绕过了基于浏览器的 OAuth 流程。'
    },
    'troubleshoot-rate-limits': {
      question: '我收到 429 速率限制错误 - 如何解决？',
      answer: '速率限制错误（429）表示您已超过 API 配额。解决方案：1) 在 Google AI Studio 仪表板中检查您的使用情况，2) 等待速率限制重置（免费层通常为 1 分钟），3) 减少脚本中的请求频率，4) 使用更具体的提示来减少令牌使用，5) 考虑升级到付费计划以获得更高限制，6) 对于持续问题，清除 CLI 缓存并重启。'
    },
    'troubleshoot-node-version': {
      question: 'Gemini CLI 安装或运行失败 - Node.js 兼容性问题？',
      answer: 'Node.js 版本兼容性至关重要。如果遇到安装或运行时错误：1) 确保安装了 Node.js 20+（`node --version`），2) 对于遇到 png-img 错误的 Node.js 24+ 用户，这是一个已知问题正在解决，3) 使用 Node 版本管理器（nvm）切换版本：`nvm install 20 && nvm use 20`，4) 清除 npm 缓存：`npm cache clean --force`，5) 尝试重新安装：`npm uninstall -g @google/gemini-cli && npm install -g @google/gemini-cli`。'
    },
    'best-practice-prompting': {
      question: '使用 Gemini CLI 编写有效提示的最佳实践是什么？',
      answer: '为了获得 Gemini CLI 的最佳结果：1) 具体明确并提供上下文，2) 将复杂任务分解为较小步骤，3) 尽可能使用示例，4) 指定所需的输出格式，5) 使用 `gemini analyze` 包含相关文件上下文，6) 使用迭代细化 - 从宽泛开始，然后缩小范围，7) 对于代码任务，明确指定编程语言和要求。'
    },
    'best-practice-workflow': {
      question: '如何有效地将 Gemini CLI 集成到我的开发工作流程中？',
      answer: '有效的集成策略：1) 使用项目特定的 GEMINI.md 文件提供上下文，2) 为常见任务创建 shell 别名，3) 与 Git 钩子集成进行代码审查，4) 在 IDE 终端中使用以获得快速帮助，5) 通过脚本与其他工具结合，6) 为不同项目设置不同配置，7) 使用 MCP 服务器处理专门任务，如数据库查询或 API 测试。'
    }
  },

  // English translations (keeping original content)
  en: {
    'install-nodejs-requirement': {
      question: 'What are the system requirements for Gemini CLI?',
      answer: 'Gemini CLI requires Node.js version 20 or higher. You can check your Node.js version with `node --version`. If you need to update, download the latest LTS version from nodejs.org. The CLI works on Windows, macOS, and Linux systems. You can also install via Homebrew on macOS with `brew install gemini-cli`.'
    },
    'install-global-vs-npx': {
      question: 'Should I install Gemini CLI globally or use npx?',
      answer: 'Both methods work, but npx is recommended for most users. Use `npx @google/generative-ai-cli` to run without installation, which ensures you always use the latest version and avoids permission issues. For frequent use, global installation with `npm install -g @google/generative-ai-cli` is convenient but requires managing updates manually.'
    },
    'install-permission-errors': {
      question: 'How do I fix permission errors during installation?',
      answer: 'Permission errors are common with global npm installations. Solutions: 1) Use npx instead of global install, 2) Configure npm to use a different directory: `npm config set prefix ~/.npm-global`, 3) On macOS/Linux, avoid sudo and use a Node version manager like nvm, 4) On Windows, run Command Prompt as Administrator only if necessary.'
    }
    // ... more English translations would continue here
  }
}
