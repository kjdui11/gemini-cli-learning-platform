import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  CommandLineIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CogIcon,
  DocumentTextIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '安装指南 - Gemini CLI 文档',
    en: 'Installation Guide - Gemini CLI Documentation',
    hi: 'इंस्टॉलेशन गाइड - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Guide d\'installation - Documentation Gemini CLI',
    de: 'Installationsanleitung - Gemini CLI Dokumentation',
    ja: 'インストールガイド - Gemini CLI ドキュメント',
    ko: '설치 가이드 - Gemini CLI 문서',
    es: 'Guía de instalación - Documentación Gemini CLI',
    ru: 'Руководство по установке - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '跨平台的 Gemini CLI 分步安装指南，包括 npm、Docker 和手动安装方法。',
    en: 'Step-by-step installation guide for Gemini CLI across different platforms including npm, Docker, and manual installation methods.',
    hi: 'npm, Docker और मैन्युअल इंस्टॉलेशन विधियों सहित विभिन्न प्लेटफॉर्म पर Gemini CLI के लिए चरणबद्ध इंस्टॉलेशन गाइड।',
    fr: 'Guide d\'installation étape par étape pour Gemini CLI sur différentes plateformes, y compris npm, Docker et les méthodes d\'installation manuelle.',
    de: 'Schritt-für-Schritt-Installationsanleitung für Gemini CLI auf verschiedenen Plattformen einschließlich npm, Docker und manueller Installationsmethoden.',
    ja: 'npm、Docker、手動インストール方法を含む、さまざまなプラットフォームでのGemini CLIのステップバイステップインストールガイド。',
    ko: 'npm, Docker 및 수동 설치 방법을 포함한 다양한 플랫폼에서 Gemini CLI에 대한 단계별 설치 가이드.',
    es: 'Guía de instalación paso a paso para Gemini CLI en diferentes plataformas, incluyendo npm, Docker y métodos de instalación manual.',
    ru: 'Пошаговое руководство по установке Gemini CLI на различных платформах, включая npm, Docker и методы ручной установки.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

const content = {
  zh: {
    title: '安装指南',
    subtitle: '在您的系统上安装和配置 Gemini CLI',
    requirements: {
      title: '系统要求',
      subtitle: '确保您的系统满足这些要求',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 或更高版本',
            'Node.js 18.0.0 或更高版本',
            'PowerShell 5.1 或 PowerShell Core 7+',
            'Windows Terminal（推荐）'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) 或更高版本',
            'Node.js 18.0.0 或更高版本',
            'Xcode 命令行工具',
            'Terminal 或 iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 或更高版本',
            'curl 或 wget',
            'bash 或 zsh shell'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'NPM 安装',
        description: '大多数用户推荐的方法',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: '通过 npm 全局安装',
            command: 'npm install -g @google/generative-ai-cli',
            description: '这将在您的系统上全局安装 Gemini CLI'
          },
          {
            title: '验证安装',
            command: 'gemini --version',
            description: '检查安装是否成功'
          },
          {
            title: '设置 API 密钥',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: '配置您的 Google AI API 密钥'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Docker 安装',
        description: '用于一致部署的容器化环境',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: '拉取 Docker 镜像',
            command: 'docker pull google/gemini-cli:latest',
            description: '下载官方 Docker 镜像'
          },
          {
            title: '使用 API 密钥运行',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: '使用您的 API 密钥启动容器'
          },
          {
            title: '交互模式',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: '启动交互式聊天会话'
          }
        ]
      },
      {
        id: 'source',
        title: '从源码安装',
        description: '用于开发的从源代码构建',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: '克隆仓库',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: '从 GitHub 获取源代码'
          },
          {
            title: '安装依赖',
            command: 'cd gemini-cli && npm install',
            description: '安装所有必需的依赖项'
          },
          {
            title: '构建和链接',
            command: 'npm run build && npm link',
            description: '构建项目并创建全局符号链接'
          }
        ]
      }
    ],
    apiKey: {
      title: 'API 密钥配置',
      subtitle: '设置您的 Google AI API 密钥以开始使用 Gemini CLI',
      getKey: {
        title: '获取您的 API 密钥',
        steps: [
          '访问 Google AI Studio',
          '使用您的 Google 账户登录',
          '点击"创建 API 密钥"并复制密钥'
        ]
      },
      configure: {
        title: '配置密钥',
        methods: [
          {
            name: '使用 CLI 命令',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: '使用环境变量',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: '验证安装',
      subtitle: '测试您的安装以确保一切正常工作',
      tests: [
        {
          name: '检查版本',
          command: 'gemini --version',
          expected: '应显示已安装的版本号'
        },
        {
          name: '测试 API 连接',
          command: 'gemini ask "你好，你能听到我吗？"',
          expected: '应返回来自 Gemini 的响应'
        },
        {
          name: '检查配置',
          command: 'gemini config list',
          expected: '应显示您当前的配置设置'
        }
      ]
    },
    troubleshooting: {
      title: '常见问题',
      subtitle: '常见安装问题的解决方案',
      issues: [
        {
          title: '找不到命令',
          description: '如果安装后出现"找不到命令"错误，您的 PATH 可能不包含 npm 的全局 bin 目录。',
          solution: 'npm config get prefix',
          note: '将 bin 目录添加到您的 shell 配置文件（.bashrc、.zshrc 等）中的 PATH'
        },
        {
          title: '权限被拒绝',
          description: '在 macOS/Linux 上，您可能需要使用 sudo 或配置 npm 使用不同的目录。',
          solution: 'npm config set prefix ~/.npm-global',
          note: '然后将 ~/.npm-global/bin 添加到您的 PATH'
        }
      ]
    }
  },
  en: {
    title: 'Installation Guide',
    subtitle: 'Install and configure Gemini CLI on your system',
    requirements: {
      title: 'System Requirements',
      subtitle: 'Make sure your system meets these requirements',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 or later',
            'Node.js 18.0.0 or higher',
            'PowerShell 5.1 or PowerShell Core 7+',
            'Windows Terminal (recommended)'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) or later',
            'Node.js 18.0.0 or higher',
            'Xcode Command Line Tools',
            'Terminal or iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 or higher',
            'curl or wget',
            'bash or zsh shell'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'NPM Installation',
        description: 'Recommended method for most users',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'Install globally via npm',
            command: 'npm install -g @google/generative-ai-cli',
            description: 'This installs Gemini CLI globally on your system'
          },
          {
            title: 'Verify installation',
            command: 'gemini --version',
            description: 'Check that the installation was successful'
          },
          {
            title: 'Set up API key',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'Configure your Google AI API key'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Docker Installation',
        description: 'Containerized environment for consistent deployment',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Pull the Docker image',
            command: 'docker pull google/gemini-cli:latest',
            description: 'Download the official Docker image'
          },
          {
            title: 'Run with API key',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'Start a container with your API key'
          },
          {
            title: 'Interactive mode',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: 'Start an interactive chat session'
          }
        ]
      },
      {
        id: 'source',
        title: 'From Source',
        description: 'Build from source code for development',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: 'Clone repository',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'Get the source code from GitHub'
          },
          {
            title: 'Install dependencies',
            command: 'cd gemini-cli && npm install',
            description: 'Install all required dependencies'
          },
          {
            title: 'Build and link',
            command: 'npm run build && npm link',
            description: 'Build the project and create global symlink'
          }
        ]
      }
    ],
    apiKey: {
      title: 'API Key Configuration',
      subtitle: 'Set up your Google AI API key to start using Gemini CLI',
      getKey: {
        title: 'Get Your API Key',
        steps: [
          'Visit Google AI Studio',
          'Sign in with your Google account',
          'Click "Create API Key" and copy the key'
        ]
      },
      configure: {
        title: 'Configure the Key',
        methods: [
          {
            name: 'Using CLI command',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: 'Using environment variable',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: 'Verify Installation',
      subtitle: 'Test your installation to make sure everything is working',
      tests: [
        {
          name: 'Check Version',
          command: 'gemini --version',
          expected: 'Should display the installed version number'
        },
        {
          name: 'Test API Connection',
          command: 'gemini ask "Hello, can you hear me?"',
          expected: 'Should return a response from Gemini'
        },
        {
          name: 'Check Configuration',
          command: 'gemini config list',
          expected: 'Should show your current configuration settings'
        }
      ]
    },
    troubleshooting: {
      title: 'Common Issues',
      subtitle: 'Solutions to common installation problems',
      issues: [
        {
          title: 'Command not found',
          description: 'If you get "command not found" after installation, your PATH may not include npm\'s global bin directory.',
          solution: 'npm config get prefix',
          note: 'Add the bin directory to your PATH in your shell profile (.bashrc, .zshrc, etc.)'
        },
        {
          title: 'Permission denied',
          description: 'On macOS/Linux, you might need to use sudo or configure npm to use a different directory.',
          solution: 'npm config set prefix ~/.npm-global',
          note: 'Then add ~/.npm-global/bin to your PATH'
        }
      ]
    }
  },
  hi: {
    title: 'इंस्टॉलेशन गाइड',
    subtitle: 'अपने सिस्टम पर Gemini CLI इंस्टॉल और कॉन्फ़िगर करें',
    requirements: {
      title: 'सिस्टम आवश्यकताएं',
      subtitle: 'सुनिश्चित करें कि आपका सिस्टम इन आवश्यकताओं को पूरा करता है',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 या बाद का संस्करण',
            'Node.js 18.0.0 या उच्चतर',
            'PowerShell 5.1 या PowerShell Core 7+',
            'Windows Terminal (अनुशंसित)'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) या बाद का संस्करण',
            'Node.js 18.0.0 या उच्चतर',
            'Xcode Command Line Tools',
            'Terminal या iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 या उच्चतर',
            'curl या wget',
            'bash या zsh shell'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'NPM इंस्टॉलेशन',
        description: 'अधिकांश उपयोगकर्ताओं के लिए अनुशंसित विधि',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'npm के माध्यम से ग्लोबली इंस्टॉल करें',
            command: 'npm install -g @google/generative-ai-cli',
            description: 'यह आपके सिस्टम पर Gemini CLI को ग्लोबली इंस्टॉल करता है'
          },
          {
            title: 'इंस्टॉलेशन सत्यापित करें',
            command: 'gemini --version',
            description: 'जांचें कि इंस्टॉलेशन सफल था'
          },
          {
            title: 'API कुंजी सेट करें',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'अपनी Google AI API कुंजी कॉन्फ़िगर करें'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Docker इंस्टॉलेशन',
        description: 'निरंतर तैनाती के लिए कंटेनराइज़्ड वातावरण',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Docker इमेज पुल करें',
            command: 'docker pull google/gemini-cli:latest',
            description: 'आधिकारिक Docker इमेज डाउनलोड करें'
          },
          {
            title: 'API कुंजी के साथ चलाएं',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'अपनी API कुंजी के साथ कंटेनर शुरू करें'
          },
          {
            title: 'इंटरैक्टिव मोड',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: 'इंटरैक्टिव चैट सेशन शुरू करें'
          }
        ]
      },
      {
        id: 'source',
        title: 'सोर्स से इंस्टॉल',
        description: 'विकास के लिए सोर्स कोड से बिल्ड करें',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: 'रिपॉजिटरी क्लोन करें',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'GitHub से सोर्स कोड प्राप्त करें'
          },
          {
            title: 'डिपेंडेंसी इंस्टॉल करें',
            command: 'cd gemini-cli && npm install',
            description: 'सभी आवश्यक डिपेंडेंसी इंस्टॉल करें'
          },
          {
            title: 'बिल्ड और लिंक करें',
            command: 'npm run build && npm link',
            description: 'प्रोजेक्ट बिल्ड करें और ग्लोबल सिमलिंक बनाएं'
          }
        ]
      }
    ],
    apiKey: {
      title: 'API कुंजी कॉन्फ़िगरेशन',
      subtitle: 'Gemini CLI का उपयोग शुरू करने के लिए अपनी Google AI API कुंजी सेट करें',
      getKey: {
        title: 'अपनी API कुंजी प्राप्त करें',
        steps: [
          'Google AI Studio पर जाएं',
          'अपने Google खाते से साइन इन करें',
          '"API कुंजी बनाएं" पर क्लिक करें और कुंजी कॉपी करें'
        ]
      },
      configure: {
        title: 'कुंजी कॉन्फ़िगर करें',
        methods: [
          {
            name: 'CLI कमांड का उपयोग करके',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: 'पर्यावरण चर का उपयोग करके',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: 'इंस्टॉलेशन सत्यापित करें',
      subtitle: 'सुनिश्चित करने के लिए अपने इंस्टॉलेशन का परीक्षण करें कि सब कुछ काम कर रहा है',
      tests: [
        {
          name: 'संस्करण जांचें',
          command: 'gemini --version',
          expected: 'इंस्टॉल किए गए संस्करण संख्या को प्रदर्शित करना चाहिए'
        },
        {
          name: 'API कनेक्शन परीक्षण',
          command: 'gemini ask "नमस्ते, क्या आप मुझे सुन सकते हैं?"',
          expected: 'Gemini से प्रतिक्रिया वापस करनी चाहिए'
        },
        {
          name: 'कॉन्फ़िगरेशन जांचें',
          command: 'gemini config list',
          expected: 'आपकी वर्तमान कॉन्फ़िगरेशन सेटिंग्स दिखानी चाहिए'
        }
      ]
    },
    troubleshooting: {
      title: 'सामान्य समस्याएं',
      subtitle: 'सामान्य इंस्टॉलेशन समस्याओं के समाधान',
      issues: [
        {
          title: 'कमांड नहीं मिला',
          description: 'यदि इंस्टॉलेशन के बाद "कमांड नहीं मिला" त्रुटि आती है, तो आपके PATH में npm की ग्लोबल bin डायरेक्टरी शामिल नहीं हो सकती।',
          solution: 'npm config get prefix',
          note: 'अपनी shell प्रोफ़ाइल (.bashrc, .zshrc, आदि) में bin डायरेक्टरी को अपने PATH में जोड़ें'
        },
        {
          title: 'अनुमति अस्वीकृत',
          description: 'macOS/Linux पर, आपको sudo का उपयोग करने या npm को अलग डायरेक्टरी उपयोग करने के लिए कॉन्फ़िगर करने की आवश्यकता हो सकती है।',
          solution: 'npm config set prefix ~/.npm-global',
          note: 'फिर ~/.npm-global/bin को अपने PATH में जोड़ें'
        }
      ]
    }
  },
  fr: {
    title: 'Guide d\'Installation',
    subtitle: 'Installez et configurez Gemini CLI sur votre système',
    requirements: {
      title: 'Configuration Système Requise',
      subtitle: 'Assurez-vous que votre système répond à ces exigences',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 ou version ultérieure',
            'Node.js 18.0.0 ou supérieur',
            'PowerShell 5.1 ou PowerShell Core 7+',
            'Windows Terminal (recommandé)'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) ou version ultérieure',
            'Node.js 18.0.0 ou supérieur',
            'Outils de ligne de commande Xcode',
            'Terminal ou iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 ou supérieur',
            'curl ou wget',
            'shell bash ou zsh'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'Installation NPM',
        description: 'Méthode recommandée pour la plupart des utilisateurs',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'Installer globalement via npm',
            command: 'npm install -g @google/generative-ai-cli',
            description: 'Ceci installe Gemini CLI globalement sur votre système'
          },
          {
            title: 'Vérifier l\'installation',
            command: 'gemini --version',
            description: 'Vérifiez que l\'installation a réussi'
          },
          {
            title: 'Configurer la clé API',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'Configurez votre clé API Google AI'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Installation Docker',
        description: 'Environnement conteneurisé pour un déploiement cohérent',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Télécharger l\'image Docker',
            command: 'docker pull google/gemini-cli:latest',
            description: 'Téléchargez l\'image Docker officielle'
          },
          {
            title: 'Exécuter avec la clé API',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'Démarrez un conteneur avec votre clé API'
          },
          {
            title: 'Mode interactif',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: 'Démarrez une session de chat interactive'
          }
        ]
      },
      {
        id: 'source',
        title: 'Depuis les Sources',
        description: 'Construire à partir du code source pour le développement',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: 'Cloner le dépôt',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'Obtenez le code source depuis GitHub'
          },
          {
            title: 'Installer les dépendances',
            command: 'cd gemini-cli && npm install',
            description: 'Installez toutes les dépendances requises'
          },
          {
            title: 'Construire et lier',
            command: 'npm run build && npm link',
            description: 'Construisez le projet et créez un lien symbolique global'
          }
        ]
      }
    ],
    apiKey: {
      title: 'Configuration de la Clé API',
      subtitle: 'Configurez votre clé API Google AI pour commencer à utiliser Gemini CLI',
      getKey: {
        title: 'Obtenez Votre Clé API',
        steps: [
          'Visitez Google AI Studio',
          'Connectez-vous avec votre compte Google',
          'Cliquez sur "Créer une clé API" et copiez la clé'
        ]
      },
      configure: {
        title: 'Configurer la Clé',
        methods: [
          {
            name: 'En utilisant la commande CLI',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: 'En utilisant une variable d\'environnement',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: 'Vérifier l\'Installation',
      subtitle: 'Testez votre installation pour vous assurer que tout fonctionne',
      tests: [
        {
          name: 'Vérifier la Version',
          command: 'gemini --version',
          expected: 'Devrait afficher le numéro de version installé'
        },
        {
          name: 'Tester la Connexion API',
          command: 'gemini ask "Bonjour, pouvez-vous m\'entendre ?"',
          expected: 'Devrait retourner une réponse de Gemini'
        },
        {
          name: 'Vérifier la Configuration',
          command: 'gemini config list',
          expected: 'Devrait afficher vos paramètres de configuration actuels'
        }
      ]
    },
    troubleshooting: {
      title: 'Problèmes Courants',
      subtitle: 'Solutions aux problèmes d\'installation courants',
      issues: [
        {
          title: 'Commande introuvable',
          description: 'Si vous obtenez "commande introuvable" après l\'installation, votre PATH pourrait ne pas inclure le répertoire bin global de npm.',
          solution: 'npm config get prefix',
          note: 'Ajoutez le répertoire bin à votre PATH dans votre profil shell (.bashrc, .zshrc, etc.)'
        },
        {
          title: 'Permission refusée',
          description: 'Sur macOS/Linux, vous pourriez avoir besoin d\'utiliser sudo ou configurer npm pour utiliser un répertoire différent.',
          solution: 'npm config set prefix ~/.npm-global',
          note: 'Puis ajoutez ~/.npm-global/bin à votre PATH'
        }
      ]
    }
  },
  de: {
    title: 'Installationsanleitung',
    subtitle: 'Installieren und konfigurieren Sie Gemini CLI auf Ihrem System',
    requirements: {
      title: 'Systemanforderungen',
      subtitle: 'Stellen Sie sicher, dass Ihr System diese Anforderungen erfüllt',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 oder höher',
            'Node.js 18.0.0 oder höher',
            'PowerShell 5.1 oder PowerShell Core 7+',
            'Windows Terminal (empfohlen)'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) oder höher',
            'Node.js 18.0.0 oder höher',
            'Xcode Command Line Tools',
            'Terminal oder iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 oder höher',
            'curl oder wget',
            'bash oder zsh Shell'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'NPM Installation',
        description: 'Empfohlene Methode für die meisten Benutzer',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'Global über npm installieren',
            command: 'npm install -g @google/generative-ai-cli',
            description: 'Dies installiert Gemini CLI global auf Ihrem System'
          },
          {
            title: 'Installation überprüfen',
            command: 'gemini --version',
            description: 'Überprüfen Sie, dass die Installation erfolgreich war'
          },
          {
            title: 'API-Schlüssel einrichten',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'Konfigurieren Sie Ihren Google AI API-Schlüssel'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Docker Installation',
        description: 'Containerisierte Umgebung für konsistente Bereitstellung',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Docker-Image herunterladen',
            command: 'docker pull google/gemini-cli:latest',
            description: 'Laden Sie das offizielle Docker-Image herunter'
          },
          {
            title: 'Mit API-Schlüssel ausführen',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'Starten Sie einen Container mit Ihrem API-Schlüssel'
          },
          {
            title: 'Interaktiver Modus',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: 'Starten Sie eine interaktive Chat-Sitzung'
          }
        ]
      },
      {
        id: 'source',
        title: 'Aus Quellcode',
        description: 'Aus Quellcode für Entwicklung erstellen',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: 'Repository klonen',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'Holen Sie sich den Quellcode von GitHub'
          },
          {
            title: 'Abhängigkeiten installieren',
            command: 'cd gemini-cli && npm install',
            description: 'Installieren Sie alle erforderlichen Abhängigkeiten'
          },
          {
            title: 'Erstellen und verknüpfen',
            command: 'npm run build && npm link',
            description: 'Erstellen Sie das Projekt und erstellen Sie einen globalen Symlink'
          }
        ]
      }
    ],
    apiKey: {
      title: 'API-Schlüssel Konfiguration',
      subtitle: 'Richten Sie Ihren Google AI API-Schlüssel ein, um Gemini CLI zu verwenden',
      getKey: {
        title: 'Holen Sie sich Ihren API-Schlüssel',
        steps: [
          'Besuchen Sie Google AI Studio',
          'Melden Sie sich mit Ihrem Google-Konto an',
          'Klicken Sie auf "API-Schlüssel erstellen" und kopieren Sie den Schlüssel'
        ]
      },
      configure: {
        title: 'Schlüssel konfigurieren',
        methods: [
          {
            name: 'Mit CLI-Befehl',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: 'Mit Umgebungsvariable',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: 'Installation überprüfen',
      subtitle: 'Testen Sie Ihre Installation, um sicherzustellen, dass alles funktioniert',
      tests: [
        {
          name: 'Version überprüfen',
          command: 'gemini --version',
          expected: 'Sollte die installierte Versionsnummer anzeigen'
        },
        {
          name: 'API-Verbindung testen',
          command: 'gemini ask "Hallo, können Sie mich hören?"',
          expected: 'Sollte eine Antwort von Gemini zurückgeben'
        },
        {
          name: 'Konfiguration überprüfen',
          command: 'gemini config list',
          expected: 'Sollte Ihre aktuellen Konfigurationseinstellungen anzeigen'
        }
      ]
    },
    troubleshooting: {
      title: 'Häufige Probleme',
      subtitle: 'Lösungen für häufige Installationsprobleme',
      issues: [
        {
          title: 'Befehl nicht gefunden',
          description: 'Wenn Sie nach der Installation "Befehl nicht gefunden" erhalten, enthält Ihr PATH möglicherweise nicht das globale bin-Verzeichnis von npm.',
          solution: 'npm config get prefix',
          note: 'Fügen Sie das bin-Verzeichnis zu Ihrem PATH in Ihrem Shell-Profil (.bashrc, .zshrc, etc.) hinzu'
        },
        {
          title: 'Berechtigung verweigert',
          description: 'Unter macOS/Linux müssen Sie möglicherweise sudo verwenden oder npm so konfigurieren, dass es ein anderes Verzeichnis verwendet.',
          solution: 'npm config set prefix ~/.npm-global',
          note: 'Fügen Sie dann ~/.npm-global/bin zu Ihrem PATH hinzu'
        }
      ]
    }
  },
  ja: {
    title: 'インストールガイド',
    subtitle: 'システムにGemini CLIをインストールして設定する',
    requirements: {
      title: 'システム要件',
      subtitle: 'システムがこれらの要件を満たしていることを確認してください',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10以降',
            'Node.js 18.0.0以上',
            'PowerShell 5.1またはPowerShell Core 7+',
            'Windows Terminal（推奨）'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina)以降',
            'Node.js 18.0.0以上',
            'Xcode Command Line Tools',
            'TerminalまたはiTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0以上',
            'curlまたはwget',
            'bashまたはzshシェル'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'NPMインストール',
        description: 'ほとんどのユーザーに推奨される方法',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'npmでグローバルインストール',
            command: 'npm install -g @google/generative-ai-cli',
            description: 'システムにGemini CLIをグローバルインストールします'
          },
          {
            title: 'インストールの確認',
            command: 'gemini --version',
            description: 'インストールが成功したことを確認します'
          },
          {
            title: 'APIキーの設定',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'Google AI APIキーを設定します'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Dockerインストール',
        description: '一貫したデプロイメントのためのコンテナ化環境',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Dockerイメージをプル',
            command: 'docker pull google/gemini-cli:latest',
            description: '公式Dockerイメージをダウンロードします'
          },
          {
            title: 'APIキーで実行',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'APIキーでコンテナを開始します'
          },
          {
            title: 'インタラクティブモード',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: 'インタラクティブチャットセッションを開始します'
          }
        ]
      },
      {
        id: 'source',
        title: 'ソースから',
        description: '開発用にソースコードからビルド',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: 'リポジトリをクローン',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'GitHubからソースコードを取得します'
          },
          {
            title: '依存関係をインストール',
            command: 'cd gemini-cli && npm install',
            description: '必要な依存関係をすべてインストールします'
          },
          {
            title: 'ビルドとリンク',
            command: 'npm run build && npm link',
            description: 'プロジェクトをビルドしてグローバルシンボリックリンクを作成します'
          }
        ]
      }
    ],
    apiKey: {
      title: 'APIキー設定',
      subtitle: 'Gemini CLIの使用を開始するためにGoogle AI APIキーを設定します',
      getKey: {
        title: 'APIキーを取得',
        steps: [
          'Google AI Studioにアクセス',
          'Googleアカウントでサインイン',
          '「APIキーを作成」をクリックしてキーをコピー'
        ]
      },
      configure: {
        title: 'キーを設定',
        methods: [
          {
            name: 'CLIコマンドを使用',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: '環境変数を使用',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: 'インストールの確認',
      subtitle: 'すべてが正常に動作することを確認するためにインストールをテストします',
      tests: [
        {
          name: 'バージョン確認',
          command: 'gemini --version',
          expected: 'インストールされたバージョン番号が表示されるはずです'
        },
        {
          name: 'API接続テスト',
          command: 'gemini ask "こんにちは、聞こえますか？"',
          expected: 'Geminiからの応答が返されるはずです'
        },
        {
          name: '設定確認',
          command: 'gemini config list',
          expected: '現在の設定が表示されるはずです'
        }
      ]
    },
    troubleshooting: {
      title: 'よくある問題',
      subtitle: 'よくあるインストール問題の解決策',
      issues: [
        {
          title: 'コマンドが見つかりません',
          description: 'インストール後に「コマンドが見つかりません」エラーが出る場合、PATHにnpmのグローバルbinディレクトリが含まれていない可能性があります。',
          solution: 'npm config get prefix',
          note: 'シェルプロファイル（.bashrc、.zshrcなど）のPATHにbinディレクトリを追加してください'
        },
        {
          title: '権限が拒否されました',
          description: 'macOS/Linuxでは、sudoを使用するか、npmが別のディレクトリを使用するように設定する必要がある場合があります。',
          solution: 'npm config set prefix ~/.npm-global',
          note: '次に~/.npm-global/binをPATHに追加してください'
        }
      ]
    }
  },
  ko: {
    title: '설치 가이드',
    subtitle: '시스템에 Gemini CLI를 설치하고 구성하세요',
    requirements: {
      title: '시스템 요구사항',
      subtitle: '시스템이 이러한 요구사항을 충족하는지 확인하세요',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 이상',
            'Node.js 18.0.0 이상',
            'PowerShell 5.1 또는 PowerShell Core 7+',
            'Windows Terminal (권장)'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) 이상',
            'Node.js 18.0.0 이상',
            'Xcode Command Line Tools',
            'Terminal 또는 iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 이상',
            'curl 또는 wget',
            'bash 또는 zsh 셸'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'NPM 설치',
        description: '대부분의 사용자에게 권장되는 방법',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'npm을 통해 전역 설치',
            command: 'npm install -g @google/generative-ai-cli',
            description: '시스템에 Gemini CLI를 전역으로 설치합니다'
          },
          {
            title: '설치 확인',
            command: 'gemini --version',
            description: '설치가 성공했는지 확인합니다'
          },
          {
            title: 'API 키 설정',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'Google AI API 키를 구성합니다'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Docker 설치',
        description: '일관된 배포를 위한 컨테이너화된 환경',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Docker 이미지 풀',
            command: 'docker pull google/gemini-cli:latest',
            description: '공식 Docker 이미지를 다운로드합니다'
          },
          {
            title: 'API 키로 실행',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'API 키로 컨테이너를 시작합니다'
          },
          {
            title: '대화형 모드',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: '대화형 채팅 세션을 시작합니다'
          }
        ]
      },
      {
        id: 'source',
        title: '소스에서 설치',
        description: '개발을 위해 소스 코드에서 빌드',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: '저장소 복제',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'GitHub에서 소스 코드를 가져옵니다'
          },
          {
            title: '종속성 설치',
            command: 'cd gemini-cli && npm install',
            description: '필요한 모든 종속성을 설치합니다'
          },
          {
            title: '빌드 및 링크',
            command: 'npm run build && npm link',
            description: '프로젝트를 빌드하고 전역 심볼릭 링크를 생성합니다'
          }
        ]
      }
    ],
    apiKey: {
      title: 'API 키 구성',
      subtitle: 'Gemini CLI 사용을 시작하기 위해 Google AI API 키를 설정하세요',
      getKey: {
        title: 'API 키 받기',
        steps: [
          'Google AI Studio 방문',
          'Google 계정으로 로그인',
          '"API 키 생성"을 클릭하고 키를 복사'
        ]
      },
      configure: {
        title: '키 구성',
        methods: [
          {
            name: 'CLI 명령 사용',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: '환경 변수 사용',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: '설치 확인',
      subtitle: '모든 것이 정상적으로 작동하는지 확인하기 위해 설치를 테스트하세요',
      tests: [
        {
          name: '버전 확인',
          command: 'gemini --version',
          expected: '설치된 버전 번호가 표시되어야 합니다'
        },
        {
          name: 'API 연결 테스트',
          command: 'gemini ask "안녕하세요, 들리시나요?"',
          expected: 'Gemini로부터 응답이 반환되어야 합니다'
        },
        {
          name: '구성 확인',
          command: 'gemini config list',
          expected: '현재 구성 설정이 표시되어야 합니다'
        }
      ]
    },
    troubleshooting: {
      title: '일반적인 문제',
      subtitle: '일반적인 설치 문제에 대한 해결책',
      issues: [
        {
          title: '명령을 찾을 수 없음',
          description: '설치 후 "명령을 찾을 수 없음" 오류가 발생하면 PATH에 npm의 전역 bin 디렉토리가 포함되지 않았을 수 있습니다.',
          solution: 'npm config get prefix',
          note: '셸 프로필(.bashrc, .zshrc 등)의 PATH에 bin 디렉토리를 추가하세요'
        },
        {
          title: '권한 거부됨',
          description: 'macOS/Linux에서는 sudo를 사용하거나 npm이 다른 디렉토리를 사용하도록 구성해야 할 수 있습니다.',
          solution: 'npm config set prefix ~/.npm-global',
          note: '그런 다음 ~/.npm-global/bin을 PATH에 추가하세요'
        }
      ]
    }
  },
  es: {
    title: 'Guía de Instalación',
    subtitle: 'Instale y configure Gemini CLI en su sistema',
    requirements: {
      title: 'Requisitos del Sistema',
      subtitle: 'Asegúrese de que su sistema cumple con estos requisitos',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 o posterior',
            'Node.js 18.0.0 o superior',
            'PowerShell 5.1 o PowerShell Core 7+',
            'Windows Terminal (recomendado)'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) o posterior',
            'Node.js 18.0.0 o superior',
            'Herramientas de línea de comandos de Xcode',
            'Terminal o iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 o superior',
            'curl o wget',
            'shell bash o zsh'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'Instalación NPM',
        description: 'Método recomendado para la mayoría de usuarios',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'Instalar globalmente vía npm',
            command: 'npm install -g @google/generative-ai-cli',
            description: 'Esto instala Gemini CLI globalmente en su sistema'
          },
          {
            title: 'Verificar instalación',
            command: 'gemini --version',
            description: 'Verifique que la instalación fue exitosa'
          },
          {
            title: 'Configurar clave API',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'Configure su clave API de Google AI'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Instalación Docker',
        description: 'Entorno contenedorizado para despliegue consistente',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Descargar imagen Docker',
            command: 'docker pull google/gemini-cli:latest',
            description: 'Descargue la imagen oficial de Docker'
          },
          {
            title: 'Ejecutar con clave API',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'Inicie un contenedor con su clave API'
          },
          {
            title: 'Modo interactivo',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: 'Inicie una sesión de chat interactiva'
          }
        ]
      },
      {
        id: 'source',
        title: 'Desde Código Fuente',
        description: 'Construir desde código fuente para desarrollo',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: 'Clonar repositorio',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'Obtenga el código fuente desde GitHub'
          },
          {
            title: 'Instalar dependencias',
            command: 'cd gemini-cli && npm install',
            description: 'Instale todas las dependencias requeridas'
          },
          {
            title: 'Construir y enlazar',
            command: 'npm run build && npm link',
            description: 'Construya el proyecto y cree un enlace simbólico global'
          }
        ]
      }
    ],
    apiKey: {
      title: 'Configuración de Clave API',
      subtitle: 'Configure su clave API de Google AI para comenzar a usar Gemini CLI',
      getKey: {
        title: 'Obtenga su Clave API',
        steps: [
          'Visite Google AI Studio',
          'Inicie sesión con su cuenta de Google',
          'Haga clic en "Crear Clave API" y copie la clave'
        ]
      },
      configure: {
        title: 'Configurar la Clave',
        methods: [
          {
            name: 'Usando comando CLI',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: 'Usando variable de entorno',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: 'Verificar Instalación',
      subtitle: 'Pruebe su instalación para asegurarse de que todo funciona',
      tests: [
        {
          name: 'Verificar Versión',
          command: 'gemini --version',
          expected: 'Debería mostrar el número de versión instalado'
        },
        {
          name: 'Probar Conexión API',
          command: 'gemini ask "Hola, ¿puedes oírme?"',
          expected: 'Debería devolver una respuesta de Gemini'
        },
        {
          name: 'Verificar Configuración',
          command: 'gemini config list',
          expected: 'Debería mostrar su configuración actual'
        }
      ]
    },
    troubleshooting: {
      title: 'Problemas Comunes',
      subtitle: 'Soluciones a problemas comunes de instalación',
      issues: [
        {
          title: 'Comando no encontrado',
          description: 'Si obtiene "comando no encontrado" después de la instalación, su PATH podría no incluir el directorio bin global de npm.',
          solution: 'npm config get prefix',
          note: 'Agregue el directorio bin a su PATH en su perfil de shell (.bashrc, .zshrc, etc.)'
        },
        {
          title: 'Permiso denegado',
          description: 'En macOS/Linux, podría necesitar usar sudo o configurar npm para usar un directorio diferente.',
          solution: 'npm config set prefix ~/.npm-global',
          note: 'Luego agregue ~/.npm-global/bin a su PATH'
        }
      ]
    }
  },
  ru: {
    title: 'Руководство по установке',
    subtitle: 'Установите и настройте Gemini CLI в вашей системе',
    requirements: {
      title: 'Системные требования',
      subtitle: 'Убедитесь, что ваша система соответствует этим требованиям',
      platforms: [
        {
          platform: 'Windows',
          requirements: [
            'Windows 10 или новее',
            'Node.js 18.0.0 или выше',
            'PowerShell 5.1 или PowerShell Core 7+',
            'Windows Terminal (рекомендуется)'
          ]
        },
        {
          platform: 'macOS',
          requirements: [
            'macOS 10.15 (Catalina) или новее',
            'Node.js 18.0.0 или выше',
            'Инструменты командной строки Xcode',
            'Terminal или iTerm2'
          ]
        },
        {
          platform: 'Linux',
          requirements: [
            'Ubuntu 18.04+ / CentOS 8+ / Debian 10+',
            'Node.js 18.0.0 или выше',
            'curl или wget',
            'оболочка bash или zsh'
          ]
        }
      ]
    },
    methods: [
      {
        id: 'npm',
        title: 'Установка NPM',
        description: 'Рекомендуемый метод для большинства пользователей',
        icon: CommandLineIcon,
        color: 'from-green-500 to-emerald-600',
        steps: [
          {
            title: 'Установить глобально через npm',
            command: 'npm install -g @google/generative-ai-cli',
            description: 'Это устанавливает Gemini CLI глобально в вашей системе'
          },
          {
            title: 'Проверить установку',
            command: 'gemini --version',
            description: 'Убедитесь, что установка прошла успешно'
          },
          {
            title: 'Настроить API ключ',
            command: 'gemini config set api-key YOUR_API_KEY',
            description: 'Настройте ваш API ключ Google AI'
          }
        ]
      },
      {
        id: 'docker',
        title: 'Установка Docker',
        description: 'Контейнеризованная среда для согласованного развертывания',
        icon: CloudIcon,
        color: 'from-blue-500 to-indigo-600',
        steps: [
          {
            title: 'Загрузить Docker образ',
            command: 'docker pull google/gemini-cli:latest',
            description: 'Скачайте официальный Docker образ'
          },
          {
            title: 'Запустить с API ключом',
            command: 'docker run -e GEMINI_API_KEY=your_key google/gemini-cli:latest',
            description: 'Запустите контейнер с вашим API ключом'
          },
          {
            title: 'Интерактивный режим',
            command: 'docker run -it -e GEMINI_API_KEY=your_key google/gemini-cli:latest chat',
            description: 'Запустите интерактивную сессию чата'
          }
        ]
      },
      {
        id: 'source',
        title: 'Из исходного кода',
        description: 'Сборка из исходного кода для разработки',
        icon: CogIcon,
        color: 'from-purple-500 to-pink-600',
        steps: [
          {
            title: 'Клонировать репозиторий',
            command: 'git clone https://github.com/google-gemini/gemini-cli.git',
            description: 'Получите исходный код с GitHub'
          },
          {
            title: 'Установить зависимости',
            command: 'cd gemini-cli && npm install',
            description: 'Установите все необходимые зависимости'
          },
          {
            title: 'Собрать и связать',
            command: 'npm run build && npm link',
            description: 'Соберите проект и создайте глобальную символическую ссылку'
          }
        ]
      }
    ],
    apiKey: {
      title: 'Настройка API ключа',
      subtitle: 'Настройте ваш API ключ Google AI для начала использования Gemini CLI',
      getKey: {
        title: 'Получите ваш API ключ',
        steps: [
          'Посетите Google AI Studio',
          'Войдите с вашим аккаунтом Google',
          'Нажмите "Создать API ключ" и скопируйте ключ'
        ]
      },
      configure: {
        title: 'Настроить ключ',
        methods: [
          {
            name: 'Используя CLI команду',
            command: 'gemini config set api-key YOUR_API_KEY'
          },
          {
            name: 'Используя переменную окружения',
            command: 'export GEMINI_API_KEY=YOUR_API_KEY'
          }
        ]
      }
    },
    verification: {
      title: 'Проверить установку',
      subtitle: 'Протестируйте вашу установку, чтобы убедиться, что все работает',
      tests: [
        {
          name: 'Проверить версию',
          command: 'gemini --version',
          expected: 'Должен отобразить номер установленной версии'
        },
        {
          name: 'Тест API соединения',
          command: 'gemini ask "Привет, вы меня слышите?"',
          expected: 'Должен вернуть ответ от Gemini'
        },
        {
          name: 'Проверить конфигурацию',
          command: 'gemini config list',
          expected: 'Должен показать ваши текущие настройки конфигурации'
        }
      ]
    },
    troubleshooting: {
      title: 'Распространенные проблемы',
      subtitle: 'Решения распространенных проблем установки',
      issues: [
        {
          title: 'Команда не найдена',
          description: 'Если вы получаете "команда не найдена" после установки, ваш PATH может не включать глобальную bin директорию npm.',
          solution: 'npm config get prefix',
          note: 'Добавьте bin директорию в ваш PATH в профиле оболочки (.bashrc, .zshrc, и т.д.)'
        },
        {
          title: 'Доступ запрещен',
          description: 'На macOS/Linux вам может потребоваться использовать sudo или настроить npm для использования другой директории.',
          solution: 'npm config set prefix ~/.npm-global',
          note: 'Затем добавьте ~/.npm-global/bin в ваш PATH'
        }
      ]
    }
  }
}

export default async function InstallationPage({ params }: PageProps) {
  const { locale } = await params
  const pageContent = content[locale as keyof typeof content] || content.en

  if (!pageContent) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {pageContent.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {pageContent.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.requirements.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.requirements.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.requirements.platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{platform.platform}</h3>
                <ul className="space-y-2">
                  {platform.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Methods */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '安装方法' :
               locale === 'hi' ? 'इंस्टॉलेशन विधियां' :
               locale === 'fr' ? 'Méthodes d\'Installation' :
               locale === 'de' ? 'Installationsmethoden' :
               locale === 'ja' ? 'インストール方法' :
               locale === 'ko' ? '설치 방법' :
               locale === 'es' ? 'Métodos de Instalación' :
               locale === 'ru' ? 'Методы установки' :
               'Installation Methods'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '选择最适合您需求的安装方法' :
               locale === 'hi' ? 'अपनी आवश्यकताओं के लिए सबसे उपयुक्त इंस्टॉलेशन विधि चुनें' :
               locale === 'fr' ? 'Choisissez la méthode d\'installation qui convient le mieux à vos besoins' :
               locale === 'de' ? 'Wählen Sie die Installationsmethode, die am besten zu Ihren Bedürfnissen passt' :
               locale === 'ja' ? 'ニーズに最適なインストール方法を選択してください' :
               locale === 'ko' ? '필요에 가장 적합한 설치 방법을 선택하세요' :
               locale === 'es' ? 'Elija el método de instalación que mejor se adapte a sus necesidades' :
               locale === 'ru' ? 'Выберите метод установки, который лучше всего подходит для ваших нужд' :
               'Choose the installation method that best fits your needs'}
            </p>
          </div>

          <div className="space-y-12">
            {pageContent.methods.map((method) => (
              <div key={method.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {method.steps.map((step, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {locale === 'zh' ? '步骤' :
                         locale === 'hi' ? 'चरण' :
                         locale === 'fr' ? 'Étape' :
                         locale === 'de' ? 'Schritt' :
                         locale === 'ja' ? 'ステップ' :
                         locale === 'ko' ? '단계' :
                         locale === 'es' ? 'Paso' :
                         locale === 'ru' ? 'Шаг' :
                         'Step'} {index + 1}: {step.title}
                      </h4>
                      <p className="text-gray-700 mb-3">{step.description}</p>
                      <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                        {step.command}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Key Setup */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.apiKey.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.apiKey.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {pageContent.apiKey.getKey.title}
                </h3>
                <ol className="space-y-3 text-gray-700">
                  {pageContent.apiKey.getKey.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {pageContent.apiKey.configure.title}
                </h3>
                <div className="space-y-4">
                  {pageContent.apiKey.configure.methods.map((method, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">{method.name}:</h4>
                      <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono">
                        {method.command}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification */}
      <div className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.verification.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.verification.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              {pageContent.verification.tests.map((test, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {test.name}
                  </h3>
                  <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                    {test.command}
                  </code>
                  <p className="text-gray-600 text-sm">{test.expected}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {pageContent.troubleshooting.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {pageContent.troubleshooting.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {pageContent.troubleshooting.issues.map((issue, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {issue.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{issue.description}</p>
                    <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800 mb-2">
                      {issue.solution}
                    </code>
                    <p className="text-gray-600 text-sm">{issue.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '下一步' :
               locale === 'hi' ? 'अगले चरण' :
               locale === 'fr' ? 'Prochaines Étapes' :
               locale === 'de' ? 'Nächste Schritte' :
               locale === 'ja' ? '次のステップ' :
               locale === 'ko' ? '다음 단계' :
               locale === 'es' ? 'Próximos Pasos' :
               locale === 'ru' ? 'Следующие шаги' :
               'Next Steps'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh'
                ? '现在 Gemini CLI 已安装完成，探索这些资源'
                : locale === 'hi'
                ? 'अब जब Gemini CLI इंस्टॉल हो गया है, इन संसाधनों का अन्वेषण करें'
                : locale === 'fr'
                ? 'Maintenant que Gemini CLI est installé, explorez ces ressources'
                : locale === 'de'
                ? 'Jetzt, da Gemini CLI installiert ist, erkunden Sie diese Ressourcen'
                : locale === 'ja'
                ? 'Gemini CLIがインストールされたので、これらのリソースを探索してください'
                : locale === 'ko'
                ? 'Gemini CLI가 설치되었으므로 이러한 리소스를 탐색하세요'
                : locale === 'es'
                ? 'Ahora que Gemini CLI está instalado, explore estos recursos'
                : locale === 'ru'
                ? 'Теперь, когда Gemini CLI установлен, изучите эти ресурсы'
                : 'Now that Gemini CLI is installed, explore these resources'
              }
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/configuration`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {locale === 'zh' ? '配置指南' :
                 locale === 'hi' ? 'कॉन्फ़िगरेशन गाइड' :
                 locale === 'fr' ? 'Guide de Configuration' :
                 locale === 'de' ? 'Konfigurationsanleitung' :
                 locale === 'ja' ? '設定ガイド' :
                 locale === 'ko' ? '구성 가이드' :
                 locale === 'es' ? 'Guía de Configuración' :
                 locale === 'ru' ? 'Руководство по настройке' :
                 'Configuration Guide'}
              </Link>
              <Link
                href={`/${locale}/docs/examples`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {locale === 'zh' ? '使用示例' :
                 locale === 'hi' ? 'उपयोग उदाहरण' :
                 locale === 'fr' ? 'Exemples d\'Utilisation' :
                 locale === 'de' ? 'Verwendungsbeispiele' :
                 locale === 'ja' ? '使用例' :
                 locale === 'ko' ? '사용 예제' :
                 locale === 'es' ? 'Ejemplos de Uso' :
                 locale === 'ru' ? 'Примеры использования' :
                 'Usage Examples'}
              </Link>
              <Link
                href={`/${locale}/docs/troubleshooting`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '故障排除' :
                 locale === 'hi' ? 'समस्या निवारण' :
                 locale === 'fr' ? 'Dépannage' :
                 locale === 'de' ? 'Fehlerbehebung' :
                 locale === 'ja' ? 'トラブルシューティング' :
                 locale === 'ko' ? '문제 해결' :
                 locale === 'es' ? 'Solución de Problemas' :
                 locale === 'ru' ? 'Устранение неполадок' :
                 'Troubleshooting'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'hi' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'es' },
    { locale: 'ru' }
  ]
}
