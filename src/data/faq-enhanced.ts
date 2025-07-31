// Enhanced FAQ data with content sourced from official docs and community
// All content is rewritten and enhanced with original insights

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  lastUpdated: string
  sources?: {
    type: 'official' | 'community' | 'original'
    url?: string
    description?: string
  }[]
  relatedQuestions?: string[]
}

export interface FAQCategory {
  id: string
  name: string
  description: string
  icon: string
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'installation',
    name: 'Installation & Setup',
    description: 'Getting started with Gemini CLI installation and initial configuration',
    icon: '⚙️'
  },
  {
    id: 'authentication',
    name: 'Authentication & API Keys',
    description: 'Setting up Google account authentication and API access',
    icon: '🔐'
  },
  {
    id: 'basic-usage',
    name: 'Basic Usage',
    description: 'Core commands and everyday usage patterns',
    icon: '💬'
  },
  {
    id: 'advanced-features',
    name: 'Advanced Features',
    description: 'MCP integration, custom configurations, and power user features',
    icon: '🚀'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    description: 'Common issues, error messages, and debugging techniques',
    icon: '🔧'
  },
  {
    id: 'best-practices',
    name: 'Best Practices',
    description: 'Tips, tricks, and recommended workflows for optimal results',
    icon: '✨'
  }
]

export const enhancedFAQData: FAQItem[] = [
  // Installation & Setup
  {
    id: 'install-nodejs-requirement',
    question: 'What are the system requirements for Gemini CLI?',
    answer: 'Gemini CLI requires Node.js version 20 or higher. You can check your Node.js version with `node --version`. If you need to update, download the latest LTS version from nodejs.org. The CLI works on Windows, macOS, and Linux systems. You can also install via Homebrew on macOS with `brew install gemini-cli`.',
    category: 'installation',
    difficulty: 'beginner',
    tags: ['nodejs', 'requirements', 'system', 'homebrew'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'official',
        url: 'https://github.com/google-gemini/gemini-cli',
        description: 'Based on official repository requirements and installation methods'
      }
    ],
    relatedQuestions: ['install-global-vs-npx', 'install-permission-errors']
  },
  {
    id: 'install-global-vs-npx',
    question: 'Should I install Gemini CLI globally or use npx?',
    answer: 'Both methods work, but npx is recommended for most users. Use `npx @google/generative-ai-cli` to run without installation, which ensures you always use the latest version and avoids permission issues. For frequent use, global installation with `npm install -g @google/generative-ai-cli` is convenient but requires managing updates manually.',
    category: 'installation',
    difficulty: 'beginner',
    tags: ['npm', 'npx', 'installation'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'original',
        description: 'Based on community best practices and user feedback'
      }
    ],
    relatedQuestions: ['install-nodejs-requirement', 'install-permission-errors']
  },
  {
    id: 'install-permission-errors',
    question: 'How do I fix permission errors during installation?',
    answer: 'Permission errors are common with global npm installations. Solutions: 1) Use npx instead of global install, 2) Configure npm to use a different directory: `npm config set prefix ~/.npm-global`, 3) On macOS/Linux, avoid sudo and use a Node version manager like nvm, 4) On Windows, run Command Prompt as Administrator only if necessary.',
    category: 'installation',
    difficulty: 'intermediate',
    tags: ['permissions', 'npm', 'sudo', 'windows', 'macos', 'linux'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'community',
        description: 'Compiled from common GitHub issues and Stack Overflow solutions'
      }
    ],
    relatedQuestions: ['install-global-vs-npx', 'install-nodejs-requirement']
  },

  // Authentication & API Keys
  {
    id: 'auth-google-account',
    question: 'How do I authenticate with my Google account?',
    answer: 'Run `gemini auth` (or `npx @google/generative-ai-cli auth`) to start the authentication process. This opens your browser to sign in with Google and grant necessary permissions. After successful authentication, use `gemini auth status` to verify your login status. The authentication token is stored securely on your local machine.',
    category: 'authentication',
    difficulty: 'beginner',
    tags: ['authentication', 'google', 'login'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'official',
        url: 'https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md',
        description: 'Based on official authentication documentation'
      }
    ],
    relatedQuestions: ['auth-api-key-vs-oauth', 'auth-multiple-accounts']
  },
  {
    id: 'auth-api-key-vs-oauth',
    question: 'Should I use API key or OAuth authentication?',
    answer: 'OAuth (via `gemini auth`) is recommended for personal use as it\'s more secure and easier to manage. API keys are better for automated scripts and CI/CD environments. OAuth provides better rate limits and access to more features. You can set an API key directly with `gemini config set api-key YOUR_KEY` if needed for automation.',
    category: 'authentication',
    difficulty: 'intermediate',
    tags: ['api-key', 'oauth', 'security', 'automation'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'original',
        description: 'Analysis of authentication methods and use cases'
      }
    ],
    relatedQuestions: ['auth-google-account', 'auth-multiple-accounts']
  },
  {
    id: 'auth-multiple-accounts',
    question: 'Can I use multiple Google accounts with Gemini CLI?',
    answer: 'Currently, Gemini CLI supports one authenticated account at a time. To switch accounts, run `gemini auth logout` followed by `gemini auth` with the new account. For managing multiple accounts, consider using different user profiles on your system or separate API keys for different projects.',
    category: 'authentication',
    difficulty: 'intermediate',
    tags: ['multiple-accounts', 'logout', 'profiles'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'community',
        description: 'Based on user questions and current CLI limitations'
      }
    ],
    relatedQuestions: ['auth-google-account', 'auth-api-key-vs-oauth']
  },

  // Basic Usage
  {
    id: 'usage-first-conversation',
    question: 'How do I start my first conversation with Gemini?',
    answer: 'Use `gemini chat` to start an interactive conversation mode, or `gemini ask "your question"` for a single question. For file analysis, use `gemini analyze path/to/file`. The chat mode allows back-and-forth conversation with context retention, while ask is better for one-off questions.',
    category: 'basic-usage',
    difficulty: 'beginner',
    tags: ['chat', 'ask', 'conversation', 'analyze'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'official',
        description: 'Core commands from official documentation'
      }
    ],
    relatedQuestions: ['usage-file-analysis', 'usage-context-retention']
  },
  {
    id: 'usage-file-analysis',
    question: 'What file types can Gemini CLI analyze?',
    answer: 'Gemini CLI can analyze most text-based files including source code (JavaScript, Python, Java, C#, Go, Rust, etc.), configuration files (JSON, YAML, XML), documentation (Markdown, plain text), and data files (CSV, SQL). Binary files are not supported. Use `gemini analyze filename` or drag files into chat mode.',
    category: 'basic-usage',
    difficulty: 'beginner',
    tags: ['file-analysis', 'supported-formats', 'code-review'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'official',
        description: 'File support capabilities from official docs'
      }
    ],
    relatedQuestions: ['usage-first-conversation', 'usage-context-retention']
  },
  {
    id: 'usage-context-retention',
    question: 'How long does Gemini remember our conversation context?',
    answer: 'In chat mode, Gemini retains context for the duration of the session. Context is lost when you exit the chat or start a new session. For longer projects, save important information in files or use the `--save` flag to export conversations. Each `ask` command is independent with no context retention.',
    category: 'basic-usage',
    difficulty: 'intermediate',
    tags: ['context', 'memory', 'session', 'save'],
    lastUpdated: '2024-01-15',
    sources: [
      {
        type: 'original',
        description: 'Analysis of context handling behavior'
      }
    ],
    relatedQuestions: ['usage-first-conversation', 'usage-file-analysis']
  },

  // Advanced Features
  {
    id: 'advanced-mcp-integration',
    question: 'How do I integrate MCP (Model Context Protocol) servers with Gemini CLI?',
    answer: 'MCP servers extend Gemini CLI with custom tools and data sources. To use MCP servers: 1) Install the MCP server (e.g., `npm install @modelcontextprotocol/server-filesystem`), 2) Configure it in your Gemini CLI settings, 3) The server will provide additional tools like file operations, database queries, or API calls. Popular MCP servers include filesystem, database, and web browsing capabilities.',
    category: 'advanced-features',
    difficulty: 'advanced',
    tags: ['mcp', 'integration', 'tools', 'extensions'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'official',
        url: 'https://github.com/google-gemini/gemini-cli',
        description: 'Based on official MCP integration documentation'
      }
    ],
    relatedQuestions: ['advanced-custom-config', 'advanced-automation']
  },
  {
    id: 'advanced-custom-config',
    question: 'How can I customize Gemini CLI configuration for my workflow?',
    answer: 'Gemini CLI can be customized through configuration files and environment variables. Use `gemini config list` to see current settings, `gemini config set <key> <value>` to modify settings like model selection, temperature, max tokens, and output format. You can also create project-specific GEMINI.md files to customize interactions for specific projects.',
    category: 'advanced-features',
    difficulty: 'intermediate',
    tags: ['configuration', 'customization', 'workflow', 'gemini.md'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'official',
        description: 'Based on configuration documentation and user guides'
      }
    ],
    relatedQuestions: ['advanced-mcp-integration', 'advanced-automation']
  },
  {
    id: 'advanced-automation',
    question: 'Can I use Gemini CLI in automated scripts and CI/CD pipelines?',
    answer: 'Yes, Gemini CLI supports automation through API key authentication and non-interactive modes. For CI/CD: 1) Set up API key authentication with `GEMINI_API_KEY` environment variable, 2) Use non-interactive commands like `gemini ask "question"` instead of chat mode, 3) Configure appropriate rate limits and error handling. Avoid using OAuth authentication in automated environments.',
    category: 'advanced-features',
    difficulty: 'advanced',
    tags: ['automation', 'ci-cd', 'api-key', 'scripting'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'community',
        description: 'Based on automation use cases and best practices from community discussions'
      }
    ],
    relatedQuestions: ['auth-api-key-vs-oauth', 'advanced-custom-config']
  },

  // Troubleshooting - Real Issues with Solutions
  {
    id: 'troubleshoot-permission-denied',
    question: 'How do I fix "permission denied" errors when installing Gemini CLI globally?',
    answer: 'Permission errors are common with global npm installations. Solutions: 1) Use `npx @google/gemini-cli` instead of global install (recommended), 2) Configure npm to use a user directory: `npm config set prefix ~/.npm-global` and add `~/.npm-global/bin` to your PATH, 3) On macOS/Linux, use a Node version manager like nvm instead of sudo, 4) On Windows, run Command Prompt as Administrator only if necessary.',
    category: 'troubleshooting',
    difficulty: 'intermediate',
    tags: ['permission-denied', 'npm', 'installation', 'sudo', 'windows', 'macos'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'community',
        url: 'https://github.com/google-gemini/gemini-cli/issues',
        description: 'Compiled from GitHub issues and Stack Overflow solutions'
      }
    ],
    relatedQuestions: ['install-global-vs-npx', 'troubleshoot-node-version']
  },
  {
    id: 'troubleshoot-auth-headless',
    question: 'Authentication fails on remote servers or headless environments - how to fix?',
    answer: 'For headless environments (servers without browsers), use API key authentication instead of OAuth: 1) Get an API key from Google AI Studio (aistudio.google.com), 2) Set it as environment variable: `export GEMINI_API_KEY=your_key_here`, 3) Or use `gemini config set api-key your_key_here`, 4) Verify with `gemini config get api-key`. This bypasses the browser-based OAuth flow.',
    category: 'troubleshooting',
    difficulty: 'intermediate',
    tags: ['authentication', 'headless', 'server', 'api-key', 'oauth'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'community',
        url: 'https://github.com/google-gemini/gemini-cli/issues/1696',
        description: 'Based on reported authentication issues in headless environments'
      }
    ],
    relatedQuestions: ['auth-api-key-vs-oauth', 'troubleshoot-rate-limits']
  },
  {
    id: 'troubleshoot-rate-limits',
    question: 'I\'m getting 429 rate limit errors - how can I resolve this?',
    answer: 'Rate limit errors (429) indicate you\'ve exceeded API quotas. Solutions: 1) Check your usage in Google AI Studio dashboard, 2) Wait for the rate limit to reset (usually 1 minute for free tier), 3) Reduce request frequency in your scripts, 4) Use more specific prompts to reduce token usage, 5) Consider upgrading to a paid plan for higher limits, 6) For persistent issues, clear CLI cache and restart.',
    category: 'troubleshooting',
    difficulty: 'intermediate',
    tags: ['rate-limits', '429-error', 'quota', 'api-limits'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'community',
        url: 'https://github.com/google-gemini/gemini-cli/issues/1644',
        description: 'Based on rate limiting issues and solutions from community'
      }
    ],
    relatedQuestions: ['auth-api-key-vs-oauth', 'troubleshoot-auth-headless']
  },
  {
    id: 'troubleshoot-node-version',
    question: 'Gemini CLI fails to install or run - Node.js compatibility issues?',
    answer: 'Node.js version compatibility is crucial. If you encounter installation or runtime errors: 1) Ensure Node.js 20+ is installed (`node --version`), 2) For Node.js 24+ users experiencing png-img errors, this is a known issue being resolved, 3) Use Node Version Manager (nvm) to switch versions: `nvm install 20 && nvm use 20`, 4) Clear npm cache: `npm cache clean --force`, 5) Try reinstalling: `npm uninstall -g @google/gemini-cli && npm install -g @google/gemini-cli`.',
    category: 'troubleshooting',
    difficulty: 'intermediate',
    tags: ['nodejs', 'compatibility', 'installation', 'png-img', 'nvm'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'community',
        url: 'https://github.com/google-gemini/gemini-cli/issues/2802',
        description: 'Based on Node.js compatibility issues reported in GitHub'
      }
    ],
    relatedQuestions: ['install-nodejs-requirement', 'troubleshoot-permission-denied']
  },

  // Best Practices
  {
    id: 'best-practice-prompting',
    question: 'What are the best practices for writing effective prompts with Gemini CLI?',
    answer: 'For optimal results with Gemini CLI: 1) Be specific and provide context, 2) Break complex tasks into smaller steps, 3) Use examples when possible, 4) Specify the desired output format, 5) Include relevant file context with `gemini analyze`, 6) Use iterative refinement - start broad, then narrow down, 7) For code tasks, specify the programming language and requirements clearly.',
    category: 'best-practices',
    difficulty: 'beginner',
    tags: ['prompting', 'tips', 'effectiveness', 'context'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'original',
        description: 'Compiled from user experiences and effective prompting techniques'
      }
    ],
    relatedQuestions: ['usage-file-analysis', 'best-practice-workflow']
  },
  {
    id: 'best-practice-workflow',
    question: 'How can I integrate Gemini CLI into my development workflow effectively?',
    answer: 'Effective integration strategies: 1) Use project-specific GEMINI.md files for context, 2) Create shell aliases for common tasks, 3) Integrate with Git hooks for code review, 4) Use in IDE terminals for quick assistance, 5) Combine with other tools via scripts, 6) Set up different configurations for different projects, 7) Use MCP servers for specialized tasks like database queries or API testing.',
    category: 'best-practices',
    difficulty: 'intermediate',
    tags: ['workflow', 'integration', 'productivity', 'git', 'ide'],
    lastUpdated: '2025-01-31',
    sources: [
      {
        type: 'original',
        description: 'Based on developer workflow optimization and community best practices'
      }
    ],
    relatedQuestions: ['advanced-custom-config', 'best-practice-prompting']
  }
]

// Helper functions for FAQ management
export function getFAQsByCategory(categoryId: string): FAQItem[] {
  return enhancedFAQData.filter(faq => faq.category === categoryId)
}

export function getFAQsByDifficulty(difficulty: FAQItem['difficulty']): FAQItem[] {
  return enhancedFAQData.filter(faq => faq.difficulty === difficulty)
}

export function searchFAQs(query: string): FAQItem[] {
  const lowercaseQuery = query.toLowerCase()
  return enhancedFAQData.filter(faq => 
    faq.question.toLowerCase().includes(lowercaseQuery) ||
    faq.answer.toLowerCase().includes(lowercaseQuery) ||
    faq.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export function getRelatedFAQs(faqId: string): FAQItem[] {
  const faq = enhancedFAQData.find(f => f.id === faqId)
  if (!faq || !faq.relatedQuestions) return []
  
  return enhancedFAQData.filter(f => faq.relatedQuestions!.includes(f.id))
}
