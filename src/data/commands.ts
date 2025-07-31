// Gemini CLI Commands Reference Data
// Based on official documentation and community usage

export interface CommandExample {
  description: string
  command: string
  output?: string
}

export interface CommandOption {
  name: string
  description: string
  type: 'string' | 'boolean' | 'number'
  required?: boolean
  default?: string
}

export interface Command {
  id: string
  name: string
  category: 'core' | 'auth' | 'config' | 'analysis' | 'advanced'
  description: string
  syntax: string
  options?: CommandOption[]
  examples: CommandExample[]
  aliases?: string[]
  notes?: string[]
  relatedCommands?: string[]
}

export const commandCategories = {
  core: {
    name: 'Core Commands',
    description: 'Essential commands for daily AI-assisted development',
    icon: '⚡'
  },
  auth: {
    name: 'Authentication',
    description: 'Commands for managing authentication and API access',
    icon: '🔐'
  },
  config: {
    name: 'Configuration',
    description: 'Commands for configuring CLI settings and preferences',
    icon: '⚙️'
  },
  analysis: {
    name: 'Code Analysis',
    description: 'Commands for analyzing and understanding code',
    icon: '🔍'
  },
  advanced: {
    name: 'Advanced Features',
    description: 'Advanced commands for power users and automation',
    icon: '🚀'
  }
}

export const commands: Command[] = [
  // Core Commands
  {
    id: 'chat',
    name: 'chat',
    category: 'core',
    description: 'Start an interactive conversation with Gemini AI',
    syntax: 'gemini chat [options]',
    options: [
      {
        name: '--model',
        description: 'Specify the AI model to use',
        type: 'string',
        default: 'gemini-2.0-flash-exp'
      },
      {
        name: '--save',
        description: 'Save the conversation to a file',
        type: 'string'
      }
    ],
    examples: [
      {
        description: 'Start a basic chat session',
        command: 'gemini chat'
      },
      {
        description: 'Start chat with a specific model',
        command: 'gemini chat --model gemini-pro'
      },
      {
        description: 'Start chat and save conversation',
        command: 'gemini chat --save my-session.md'
      }
    ],
    notes: [
      'Chat mode maintains context throughout the session',
      'Use Ctrl+C or type "exit" to end the session',
      'You can drag and drop files into the chat for analysis'
    ],
    relatedCommands: ['ask', 'analyze']
  },
  {
    id: 'ask',
    name: 'ask',
    category: 'core',
    description: 'Ask a single question to Gemini AI',
    syntax: 'gemini ask "your question" [options]',
    options: [
      {
        name: '--model',
        description: 'Specify the AI model to use',
        type: 'string'
      },
      {
        name: '--output',
        description: 'Save response to a file',
        type: 'string'
      }
    ],
    examples: [
      {
        description: 'Ask a simple question',
        command: 'gemini ask "How do I install Node.js?"'
      },
      {
        description: 'Ask about code and save response',
        command: 'gemini ask "Explain this function" --output explanation.md'
      },
      {
        description: 'Ask with context from a file',
        command: 'gemini ask "Review this code for bugs" < app.js'
      }
    ],
    notes: [
      'Each ask command is independent with no context retention',
      'Best for one-off questions and quick queries',
      'Can pipe file content or command output as input'
    ],
    relatedCommands: ['chat', 'analyze']
  },
  {
    id: 'analyze',
    name: 'analyze',
    category: 'analysis',
    description: 'Analyze files, directories, or code for insights',
    syntax: 'gemini analyze <path> [options]',
    options: [
      {
        name: '--type',
        description: 'Type of analysis to perform',
        type: 'string',
        default: 'general'
      },
      {
        name: '--output',
        description: 'Save analysis to a file',
        type: 'string'
      },
      {
        name: '--recursive',
        description: 'Analyze directories recursively',
        type: 'boolean'
      }
    ],
    examples: [
      {
        description: 'Analyze a single file',
        command: 'gemini analyze app.js'
      },
      {
        description: 'Analyze entire project directory',
        command: 'gemini analyze . --recursive'
      },
      {
        description: 'Perform security analysis',
        command: 'gemini analyze src/ --type security'
      },
      {
        description: 'Analyze and save report',
        command: 'gemini analyze package.json --output analysis-report.md'
      }
    ],
    notes: [
      'Supports most text-based file formats',
      'Can analyze code quality, security, and performance',
      'Binary files are not supported'
    ],
    relatedCommands: ['ask', 'chat']
  },

  // Authentication Commands
  {
    id: 'auth',
    name: 'auth',
    category: 'auth',
    description: 'Authenticate with Google account',
    syntax: 'gemini auth [subcommand]',
    examples: [
      {
        description: 'Start authentication process',
        command: 'gemini auth'
      },
      {
        description: 'Check authentication status',
        command: 'gemini auth status'
      },
      {
        description: 'Logout from current account',
        command: 'gemini auth logout'
      }
    ],
    notes: [
      'Opens browser for OAuth authentication',
      'Credentials are stored securely locally',
      'Required for accessing Gemini API'
    ],
    relatedCommands: ['config']
  },

  // Configuration Commands
  {
    id: 'config',
    name: 'config',
    category: 'config',
    description: 'Manage CLI configuration settings',
    syntax: 'gemini config <action> [key] [value]',
    examples: [
      {
        description: 'List all configuration settings',
        command: 'gemini config list'
      },
      {
        description: 'Get a specific setting',
        command: 'gemini config get model'
      },
      {
        description: 'Set a configuration value',
        command: 'gemini config set model gemini-pro'
      },
      {
        description: 'Set API key for automation',
        command: 'gemini config set api-key YOUR_API_KEY'
      },
      {
        description: 'Reset to default settings',
        command: 'gemini config reset'
      }
    ],
    notes: [
      'Configuration is stored per user',
      'API key setting bypasses OAuth authentication',
      'Use reset to restore default settings'
    ],
    relatedCommands: ['auth']
  },

  // Advanced Commands
  {
    id: 'version',
    name: 'version',
    category: 'advanced',
    description: 'Display version information',
    syntax: 'gemini version [options]',
    aliases: ['--version', '-v'],
    options: [
      {
        name: '--verbose',
        description: 'Show detailed version information',
        type: 'boolean'
      }
    ],
    examples: [
      {
        description: 'Show version number',
        command: 'gemini version'
      },
      {
        description: 'Show detailed version info',
        command: 'gemini --version --verbose'
      }
    ],
    relatedCommands: ['help']
  },
  {
    id: 'help',
    name: 'help',
    category: 'advanced',
    description: 'Display help information for commands',
    syntax: 'gemini help [command]',
    aliases: ['--help', '-h'],
    examples: [
      {
        description: 'Show general help',
        command: 'gemini help'
      },
      {
        description: 'Show help for specific command',
        command: 'gemini help chat'
      },
      {
        description: 'Show help using flag',
        command: 'gemini chat --help'
      }
    ],
    notes: [
      'Available for all commands',
      'Shows syntax, options, and examples',
      'Use --help flag with any command'
    ],
    relatedCommands: ['version']
  },

  // Additional Core Commands
  {
    id: 'init',
    name: 'init',
    category: 'config',
    description: 'Initialize Gemini CLI in a new project',
    syntax: 'gemini init [options]',
    options: [
      {
        name: '--template',
        description: 'Use a specific project template',
        type: 'string'
      },
      {
        name: '--force',
        description: 'Overwrite existing configuration',
        type: 'boolean'
      }
    ],
    examples: [
      {
        description: 'Initialize in current directory',
        command: 'gemini init'
      },
      {
        description: 'Initialize with template',
        command: 'gemini init --template react'
      },
      {
        description: 'Force initialization',
        command: 'gemini init --force'
      }
    ],
    notes: [
      'Creates a GEMINI.md file for project-specific context',
      'Sets up default configuration for the project',
      'Can be customized with templates'
    ],
    relatedCommands: ['config']
  },

  // Interactive Commands (Slash Commands)
  {
    id: 'slash-commands',
    name: '/ (Slash Commands)',
    category: 'core',
    description: 'Interactive commands available within chat sessions',
    syntax: '/command [arguments]',
    examples: [
      {
        description: 'Switch authentication method',
        command: '/auth'
      },
      {
        description: 'Change AI model',
        command: '/model gemini-pro'
      },
      {
        description: 'Clear conversation history',
        command: '/clear'
      },
      {
        description: 'Save current conversation',
        command: '/save conversation.md'
      },
      {
        description: 'Load file for analysis',
        command: '/load src/app.js'
      },
      {
        description: 'Exit chat session',
        command: '/exit'
      }
    ],
    notes: [
      'Only available within interactive chat sessions',
      'Commands are executed immediately',
      'Use /help to see all available slash commands'
    ],
    relatedCommands: ['chat']
  },

  // File Operations
  {
    id: 'diff',
    name: 'diff',
    category: 'analysis',
    description: 'Compare files or analyze changes',
    syntax: 'gemini diff <file1> <file2> [options]',
    options: [
      {
        name: '--context',
        description: 'Number of context lines to show',
        type: 'number',
        default: '3'
      },
      {
        name: '--format',
        description: 'Output format (unified, side-by-side)',
        type: 'string',
        default: 'unified'
      }
    ],
    examples: [
      {
        description: 'Compare two files',
        command: 'gemini diff old-file.js new-file.js'
      },
      {
        description: 'Compare with more context',
        command: 'gemini diff file1.py file2.py --context 5'
      },
      {
        description: 'Side-by-side comparison',
        command: 'gemini diff app.js app-new.js --format side-by-side'
      }
    ],
    notes: [
      'Provides AI-powered analysis of differences',
      'Explains the impact of changes',
      'Suggests improvements or identifies issues'
    ],
    relatedCommands: ['analyze']
  },

  // Project Management
  {
    id: 'status',
    name: 'status',
    category: 'analysis',
    description: 'Show project status and health check',
    syntax: 'gemini status [options]',
    options: [
      {
        name: '--detailed',
        description: 'Show detailed status information',
        type: 'boolean'
      },
      {
        name: '--check',
        description: 'Run specific health checks',
        type: 'string'
      }
    ],
    examples: [
      {
        description: 'Basic project status',
        command: 'gemini status'
      },
      {
        description: 'Detailed status report',
        command: 'gemini status --detailed'
      },
      {
        description: 'Check dependencies',
        command: 'gemini status --check dependencies'
      }
    ],
    notes: [
      'Analyzes project structure and dependencies',
      'Identifies potential issues or improvements',
      'Provides recommendations for optimization'
    ],
    relatedCommands: ['analyze', 'init']
  }
]

// Helper functions
export function getCommandsByCategory(category: keyof typeof commandCategories): Command[] {
  return commands.filter(cmd => cmd.category === category)
}

export function searchCommands(query: string): Command[] {
  const lowercaseQuery = query.toLowerCase()
  return commands.filter(cmd => 
    cmd.name.toLowerCase().includes(lowercaseQuery) ||
    cmd.description.toLowerCase().includes(lowercaseQuery) ||
    cmd.examples.some(ex => ex.description.toLowerCase().includes(lowercaseQuery))
  )
}

export function getCommandById(id: string): Command | undefined {
  return commands.find(cmd => cmd.id === id)
}
