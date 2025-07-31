const fs = require('fs');
const path = require('path');

// 页面翻译内容
const pageTranslations = {
  en: {
    about: {
      title: "About Our Platform",
      subtitle: "We're dedicated to making AI-powered development accessible to developers worldwide through comprehensive learning resources and community-driven content.",
      mission: {
        title: "Our Mission",
        description: "To democratize AI-powered development by providing comprehensive, accessible, and practical learning resources for Google's Gemini CLI. We believe that every developer should have the opportunity to harness the power of artificial intelligence in their daily workflow.",
        excellence: "Educational Excellence",
        excellenceDesc: "We create high-quality tutorials, guides, and documentation that make complex AI concepts accessible to developers of all skill levels.",
        community: "Community Focus",
        communityDesc: "Our platform thrives on community contributions, fostering collaboration and knowledge sharing among AI development enthusiasts.",
        practical: "Practical Learning",
        practicalDesc: "We emphasize hands-on, real-world examples that developers can immediately apply to their projects and workflows.",
        global: "Global Accessibility",
        globalDesc: "With support for multiple languages and inclusive design, we ensure our resources reach developers worldwide."
      },
      values: {
        title: "Our Values",
        subtitle: "The principles that guide everything we do",
        education: {
          name: "Education First",
          description: "We believe in making AI development accessible through comprehensive, easy-to-understand educational content."
        },
        communityDriven: {
          name: "Community Driven",
          description: "Our platform thrives on community contributions, feedback, and collaborative learning experiences."
        },
        openSource: {
          name: "Open Source Spirit",
          description: "We support and promote open source development, transparency, and knowledge sharing."
        },
        innovation: {
          name: "Innovation Focus",
          description: "We stay at the forefront of AI technology to provide cutting-edge learning resources and tools."
        },
        accessibility: {
          name: "Global Accessibility",
          description: "We strive to make our content accessible to developers worldwide, regardless of their background."
        },
        quality: {
          name: "Quality Content",
          description: "We are committed to providing high-quality, accurate, and up-to-date educational materials."
        }
      },
      stats: {
        title: "Platform Impact",
        subtitle: "Growing together with the developer community",
        languages: "Languages Supported",
        guides: "Learning Guides",
        examples: "Code Examples",
        members: "Community Members"
      },
      story: {
        title: "Our Story",
        paragraph1: "When Google released Gemini CLI as an open-source project, we recognized the immense potential it held for transforming how developers work with AI. However, we also saw a gap in accessible learning resources that could help developers of all backgrounds get started with this powerful tool.",
        paragraph2: "That's when we decided to create this comprehensive learning platform. Our goal was simple: make Gemini CLI accessible to everyone, regardless of their experience level with AI or command-line tools.",
        paragraph3: "What started as a small collection of tutorials has grown into a comprehensive platform featuring multi-language support, interactive examples, and a thriving community of contributors. We're proud to be part of the open-source ecosystem and to support Google's vision of democratizing AI development."
      },
      disclaimer: {
        title: "Important Notice",
        content: "This is an unofficial learning resource website created by the community to support Gemini CLI education. While we strive for accuracy and quality, this platform is not officially affiliated with or endorsed by Google. All content is based on the official Gemini CLI open-source project and community contributions."
      },
      getInvolved: {
        title: "Get Involved",
        subtitle: "Join our community and help make AI development more accessible",
        contribute: {
          title: "Contribute Content",
          description: "Help us improve our tutorials and add new learning resources.",
          link: "Contributing Guide →"
        },
        discussions: {
          title: "Join Discussions",
          description: "Participate in community discussions and share your experiences.",
          link: "GitHub Discussions →"
        },
        issues: {
          title: "Report Issues",
          description: "Found a problem or have suggestions for improvement?",
          link: "Contact Us →"
        }
      },
      cta: {
        title: "Ready to Start Learning?",
        description: "Explore our comprehensive guides and join thousands of developers who are already using Gemini CLI to enhance their development workflow.",
        getStarted: "Get Started",
        browseGuides: "Browse Guides"
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you! Whether you have questions, suggestions, or want to contribute, there are several ways to get in touch with our community.",
      howCanWeHelp: {
        title: "How Can We Help?",
        subtitle: "Choose the option that best fits your needs"
      },
      options: {
        reportIssues: {
          title: "Report Issues",
          description: "Found a bug, broken link, or technical problem? Let us know so we can fix it.",
          button: "Report on GitHub"
        },
        suggest: {
          title: "Suggest Improvements",
          description: "Have ideas for new content, features, or improvements to our platform?",
          button: "Share Ideas"
        },
        discussions: {
          title: "Join Discussions",
          description: "Participate in community discussions, ask questions, and share experiences.",
          button: "Join Community"
        },
        contribute: {
          title: "Contribute Content",
          description: "Want to contribute tutorials, examples, or translations? We welcome contributions!",
          button: "Contributing Guide"
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to common questions",
        q1: {
          question: "Is this website officially affiliated with Google?",
          answer: "No, this is an unofficial community-driven learning platform. While we base our content on Google's official Gemini CLI documentation, we are not affiliated with or endorsed by Google Inc."
        },
        q2: {
          question: "How can I contribute to the platform?",
          answer: "We welcome contributions! You can help by reporting issues, suggesting improvements, contributing content, or helping with translations. Check our Contributing Guide for more details."
        },
        q3: {
          question: "I found an error in the documentation. How do I report it?",
          answer: "Please report any errors or issues on our GitHub Issues page. Include as much detail as possible about the error and where you found it."
        },
        q4: {
          question: "Can I request new tutorials or content?",
          answer: "Absolutely! We encourage content requests. Please share your ideas on our GitHub Discussions page, and the community can help prioritize and create the content."
        },
        q5: {
          question: "How do I get help with Gemini CLI installation or usage?",
          answer: "Start with our Installation Guide and Usage Guides. If you still need help, check our FAQ section or ask the community on GitHub Discussions."
        }
      },
      responseTime: {
        title: "Response Times",
        description: "As a community-driven platform, response times may vary depending on volunteer availability and the complexity of your request.",
        bugReports: "Bug Reports",
        featureRequests: "Feature Requests",
        contributions: "Content Contributions"
      },
      guidelines: {
        title: "Community Guidelines",
        subtitle: "Help us maintain a welcoming and productive community",
        respectful: {
          title: "Be Respectful",
          items: [
            "Treat all community members with respect",
            "Use inclusive and welcoming language",
            "Be patient with beginners",
            "Provide constructive feedback"
          ]
        },
        helpful: {
          title: "Be Helpful",
          items: [
            "Provide clear and detailed information",
            "Share relevant examples when possible",
            "Search existing discussions before posting",
            "Follow up on your questions and requests"
          ]
        }
      },
      cta: {
        title: "Ready to Get Involved?",
        description: "Join our growing community of developers learning and building with Gemini CLI. Every contribution, no matter how small, helps make AI development more accessible.",
        joinDiscussions: "Join Discussions",
        startContributing: "Start Contributing"
      }
    },
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
          "Improve User Experience: Understand how users navigate our site to improve content and design",
          "Content Optimization: Identify popular content and areas for improvement",
          "Language Localization: Provide appropriate language content based on user preferences",
          "Technical Optimization: Monitor site performance and fix technical issues",
          "Usage Analytics: Generate aggregate statistics about site usage"
        ]
      },
      sharing: {
        title: "Information Sharing",
        description: "We do not sell, trade, or otherwise transfer your personal information to third parties, except:",
        items: [
          "Google Analytics: Anonymous usage data is shared with Google Analytics for analysis",
          "Legal Requirements: If required by law or to protect our rights",
          "Service Providers: With trusted service providers who assist in operating our website"
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
          "Opt-out of Analytics: Disable cookies in your browser or use Google Analytics opt-out tools",
          "Clear Local Data: Clear your browser's local storage to remove saved preferences",
          "Access Information: Request information about data we may have collected",
          "Data Deletion: Request deletion of any personal information we may have"
        ]
      },
      security: {
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
          description: "Our website uses Google Analytics, a web analytics service provided by Google Inc. Google Analytics uses cookies to help analyze how users use the site. For more information about Google Analytics privacy practices, visit: Google Privacy Policy"
        },
        externalLinks: {
          title: "External Links",
          description: "Our website contains links to external sites (such as GitHub, Google AI Studio). We are not responsible for the privacy practices of these external sites."
        }
      },
      children: {
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
        email: "Email:",
        github: "GitHub:",
        website: "Website:"
      },
      cta: {
        title: "Questions About Privacy?",
        description: "We're committed to transparency. If you have any questions about how we handle your data, don't hesitate to reach out.",
        contactUs: "Contact Us"
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
    console.log(`Updated ${locale}.json with page translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// 更新英文翻译文件
updateTranslationFile('en', pageTranslations.en);

console.log('Page translations update completed!');
