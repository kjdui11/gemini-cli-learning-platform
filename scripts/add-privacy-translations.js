const fs = require('fs');
const path = require('path');

// Privacy页面翻译内容
const privacyTranslations = {
  en: {
    privacy: {
      title: "Privacy Policy",
      subtitle: "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
      lastUpdated: "Last updated",
      introduction: {
        title: "Introduction",
        content: "This Privacy Policy describes how the Gemini CLI Learning Platform (\"we,\" \"our,\" or \"us\") collects, uses, and shares information about you when you use our website and services. We are committed to protecting your privacy and being transparent about our data practices."
      },
      informationWeCollect: {
        title: "Information We Collect",
        analytics: {
          title: "Analytics Information",
          description: "We use Google Analytics to understand how visitors interact with our website. This includes:",
          items: [
            "Pages visited and time spent on each page",
            "Geographic location (country/region level)",
            "Device and browser information",
            "Referral sources (how you found our site)",
            "User interactions and navigation patterns"
          ]
        },
        language: {
          title: "Language Preferences",
          description: "We store your language preference locally in your browser to provide a personalized experience across visits. This information is not transmitted to our servers."
        },
        technical: {
          title: "Technical Information",
          description: "We automatically collect certain technical information when you visit our site, including:",
          items: [
            "IP address (for geographic location detection)",
            "Browser type and version",
            "Operating system",
            "Screen resolution and device type"
          ]
        }
      },
      howWeUse: {
        title: "How We Use Information",
        description: "We use the collected information for the following purposes:",
        items: [
          {
            title: "Improve User Experience",
            description: "Understand how users navigate our site to improve content and design"
          },
          {
            title: "Content Optimization",
            description: "Identify popular content and areas for improvement"
          },
          {
            title: "Language Localization",
            description: "Provide appropriate language content based on user preferences"
          },
          {
            title: "Technical Optimization",
            description: "Monitor site performance and fix technical issues"
          },
          {
            title: "Usage Analytics",
            description: "Generate aggregate statistics about site usage"
          }
        ]
      },
      informationSharing: {
        title: "Information Sharing",
        description: "We do not sell, trade, or otherwise transfer your personal information to third parties, except:",
        items: [
          {
            title: "Google Analytics",
            description: "Anonymous usage data is shared with Google Analytics for analysis"
          },
          {
            title: "Legal Requirements",
            description: "If required by law or to protect our rights"
          },
          {
            title: "Service Providers",
            description: "With trusted service providers who assist in operating our website"
          }
        ]
      },
      cookies: {
        title: "Cookies and Tracking Technologies",
        analytics: {
          title: "Google Analytics Cookies",
          description: "We use Google Analytics cookies to track website usage. These cookies:",
          items: [
            "Help us understand user behavior and preferences",
            "Are anonymous and do not contain personal information",
            "Can be disabled through your browser settings"
          ]
        },
        localStorage: {
          title: "Local Storage",
          description: "We use browser local storage to save your language preferences. This data remains on your device and is not transmitted to our servers."
        }
      },
      yourRights: {
        title: "Your Rights and Choices",
        description: "You have the following rights regarding your information:",
        items: [
          {
            title: "Opt-out of Analytics",
            description: "Disable cookies in your browser or use Google Analytics opt-out tools"
          },
          {
            title: "Clear Local Data",
            description: "Clear your browser's local storage to remove saved preferences"
          },
          {
            title: "Access Information",
            description: "Request information about data we may have collected"
          },
          {
            title: "Data Deletion",
            description: "Request deletion of any personal information we may have"
          }
        ]
      },
      dataSecurity: {
        title: "Data Security",
        description: "We implement appropriate security measures to protect your information:",
        items: [
          "HTTPS encryption for all data transmission",
          "Regular security updates and monitoring",
          "Limited access to any collected data",
          "Secure hosting infrastructure"
        ]
      },
      thirdParty: {
        title: "Third-Party Services",
        googleAnalytics: {
          title: "Google Analytics",
          description: "Our website uses Google Analytics, a web analytics service provided by Google Inc. Google Analytics uses cookies to help analyze how users use the site.",
          moreInfo: "For more information about Google Analytics privacy practices, visit:",
          linkText: "Google Privacy Policy"
        },
        externalLinks: {
          title: "External Links",
          description: "Our website contains links to external sites (such as GitHub, Google AI Studio). We are not responsible for the privacy practices of these external sites."
        }
      },
      childrens: {
        title: "Children's Privacy",
        description: "Our website is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us."
      },
      changes: {
        title: "Changes to This Privacy Policy",
        description: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date at the top of this policy."
      },
      contact: {
        title: "Contact Us",
        description: "If you have any questions about this Privacy Policy or our data practices, please contact us:",
        email: "Email",
        contactForm: "Contact Form",
        github: "GitHub",
        reportIssues: "Report Issues",
        website: "Website"
      },
      cta: {
        title: "Questions About Privacy?",
        description: "We're committed to transparency. If you have any questions about how we handle your data, don't hesitate to reach out.",
        contactUs: "Contact Us"
      }
    }
  },
  zh: {
    privacy: {
      title: "隐私政策",
      subtitle: "您的隐私对我们很重要。本政策解释了我们如何收集、使用和保护您的信息。",
      lastUpdated: "最后更新",
      introduction: {
        title: "介绍",
        content: "本隐私政策描述了Gemini CLI学习平台（\"我们\"、\"我们的\"或\"我们\"）在您使用我们的网站和服务时如何收集、使用和分享您的信息。我们致力于保护您的隐私并对我们的数据实践保持透明。"
      },
      informationWeCollect: {
        title: "我们收集的信息",
        analytics: {
          title: "分析信息",
          description: "我们使用Google Analytics来了解访问者如何与我们的网站互动。这包括：",
          items: [
            "访问的页面和在每个页面上花费的时间",
            "地理位置（国家/地区级别）",
            "设备和浏览器信息",
            "推荐来源（您如何找到我们的网站）",
            "用户交互和导航模式"
          ]
        },
        language: {
          title: "语言偏好",
          description: "我们在您的浏览器中本地存储您的语言偏好，以在访问期间提供个性化体验。此信息不会传输到我们的服务器。"
        },
        technical: {
          title: "技术信息",
          description: "当您访问我们的网站时，我们会自动收集某些技术信息，包括：",
          items: [
            "IP地址（用于地理位置检测）",
            "浏览器类型和版本",
            "操作系统",
            "屏幕分辨率和设备类型"
          ]
        }
      },
      howWeUse: {
        title: "我们如何使用信息",
        description: "我们将收集的信息用于以下目的：",
        items: [
          {
            title: "改善用户体验",
            description: "了解用户如何浏览我们的网站以改进内容和设计"
          },
          {
            title: "内容优化",
            description: "识别热门内容和需要改进的领域"
          },
          {
            title: "语言本地化",
            description: "根据用户偏好提供适当的语言内容"
          },
          {
            title: "技术优化",
            description: "监控网站性能并修复技术问题"
          },
          {
            title: "使用分析",
            description: "生成关于网站使用情况的汇总统计信息"
          }
        ]
      },
      informationSharing: {
        title: "信息共享",
        description: "我们不会向第三方出售、交易或以其他方式转让您的个人信息，除非：",
        items: [
          {
            title: "Google Analytics",
            description: "匿名使用数据与Google Analytics共享以进行分析"
          },
          {
            title: "法律要求",
            description: "如果法律要求或为了保护我们的权利"
          },
          {
            title: "服务提供商",
            description: "与协助运营我们网站的可信服务提供商"
          }
        ]
      },
      cookies: {
        title: "Cookie和跟踪技术",
        analytics: {
          title: "Google Analytics Cookie",
          description: "我们使用Google Analytics cookie来跟踪网站使用情况。这些cookie：",
          items: [
            "帮助我们了解用户行为和偏好",
            "是匿名的，不包含个人信息",
            "可以通过您的浏览器设置禁用"
          ]
        },
        localStorage: {
          title: "本地存储",
          description: "我们使用浏览器本地存储来保存您的语言偏好。此数据保留在您的设备上，不会传输到我们的服务器。"
        }
      },
      yourRights: {
        title: "您的权利和选择",
        description: "您对您的信息拥有以下权利：",
        items: [
          {
            title: "退出分析",
            description: "在浏览器中禁用cookie或使用Google Analytics退出工具"
          },
          {
            title: "清除本地数据",
            description: "清除浏览器的本地存储以删除保存的偏好"
          },
          {
            title: "访问信息",
            description: "请求我们可能收集的数据信息"
          },
          {
            title: "数据删除",
            description: "请求删除我们可能拥有的任何个人信息"
          }
        ]
      },
      dataSecurity: {
        title: "数据安全",
        description: "我们实施适当的安全措施来保护您的信息：",
        items: [
          "所有数据传输的HTTPS加密",
          "定期安全更新和监控",
          "对任何收集数据的有限访问",
          "安全的托管基础设施"
        ]
      },
      thirdParty: {
        title: "第三方服务",
        googleAnalytics: {
          title: "Google Analytics",
          description: "我们的网站使用Google Analytics，这是Google Inc.提供的网络分析服务。Google Analytics使用cookie来帮助分析用户如何使用网站。",
          moreInfo: "有关Google Analytics隐私实践的更多信息，请访问：",
          linkText: "Google隐私政策"
        },
        externalLinks: {
          title: "外部链接",
          description: "我们的网站包含指向外部网站的链接（如GitHub、Google AI Studio）。我们不对这些外部网站的隐私实践负责。"
        }
      },
      childrens: {
        title: "儿童隐私",
        description: "我们的网站不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您是父母或监护人，并且认为您的孩子向我们提供了个人信息，请联系我们。"
      },
      changes: {
        title: "本隐私政策的变更",
        description: "我们可能会不时更新本隐私政策。我们将通过在此页面上发布新的隐私政策并更新政策顶部的"最后更新"日期来通知您任何变更。"
      },
      contact: {
        title: "联系我们",
        description: "如果您对本隐私政策或我们的数据实践有任何疑问，请联系我们：",
        email: "邮箱",
        contactForm: "联系表单",
        github: "GitHub",
        reportIssues: "报告问题",
        website: "网站"
      },
      cta: {
        title: "对隐私有疑问？",
        description: "我们致力于透明度。如果您对我们如何处理您的数据有任何疑问，请随时联系我们。",
        contactUs: "联系我们"
      }
    }
  }
};

// 函数：更新翻译文件
function updateTranslationFile(locale, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${locale}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // 合并新的翻译内容
    Object.assign(data, translations);
    
    // 写回文件
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${locale}.json with privacy translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// 更新所有语言的翻译文件
Object.keys(privacyTranslations).forEach(locale => {
  updateTranslationFile(locale, privacyTranslations[locale]);
});

console.log('Privacy page translations update completed!');
