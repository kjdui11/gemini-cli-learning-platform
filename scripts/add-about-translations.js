const fs = require('fs');
const path = require('path');

// About页面翻译内容
const aboutTranslations = {
  ru: {
    about: {
      title: "О нашей платформе",
      subtitle: "Мы стремимся сделать разработку с использованием ИИ доступной для разработчиков по всему миру через комплексные обучающие ресурсы и контент, созданный сообществом.",
      mission: {
        title: "Наша миссия",
        description: "Демократизировать разработку с использованием ИИ, предоставляя комплексные, доступные и практические обучающие ресурсы для Gemini CLI от Google. Мы верим, что каждый разработчик должен иметь возможность использовать силу искусственного интеллекта в своем ежедневном рабочем процессе.",
        excellence: "Образовательное превосходство",
        excellenceDesc: "Мы создаем высококачественные учебники, руководства и документацию, которые делают сложные концепции ИИ доступными для разработчиков всех уровней навыков.",
        community: "Фокус на сообществе",
        communityDesc: "Наша платформа процветает благодаря вкладу сообщества, способствуя сотрудничеству и обмену знаниями среди энтузиастов разработки ИИ.",
        practical: "Практическое обучение",
        practicalDesc: "Мы делаем акцент на практических примерах из реального мира, которые разработчики могут немедленно применить к своим проектам и рабочим процессам.",
        global: "Глобальная доступность",
        globalDesc: "Благодаря поддержке нескольких языков и инклюзивному дизайну мы обеспечиваем доступность наших ресурсов для разработчиков по всему миру."
      },
      values: {
        title: "Наши ценности",
        subtitle: "Принципы, которые направляют все, что мы делаем",
        education: {
          name: "Образование прежде всего",
          description: "Мы верим в то, что разработка ИИ должна быть доступной через комплексный, легко понимаемый образовательный контент."
        },
        communityDriven: {
          name: "Управляемый сообществом",
          description: "Наша платформа процветает благодаря вкладу сообщества, обратной связи и совместному обучению."
        },
        openSource: {
          name: "Дух открытого кода",
          description: "Мы поддерживаем и продвигаем разработку с открытым исходным кодом, прозрачность и обмен знаниями."
        },
        innovation: {
          name: "Фокус на инновациях",
          description: "Мы остаемся на переднем крае технологий ИИ, чтобы предоставлять передовые обучающие ресурсы и инструменты."
        },
        accessibility: {
          name: "Глобальная доступность",
          description: "Мы стремимся сделать наш контент доступным для разработчиков по всему миру, независимо от их происхождения."
        },
        quality: {
          name: "Качественный контент",
          description: "Мы привержены предоставлению высококачественных, точных и актуальных образовательных материалов."
        }
      },
      stats: {
        title: "Влияние платформы",
        subtitle: "Растем вместе с сообществом разработчиков",
        languages: "Поддерживаемые языки",
        guides: "Обучающие руководства",
        examples: "Примеры кода",
        members: "Участники сообщества"
      },
      story: {
        title: "Наша история",
        paragraph1: "Когда Google выпустил Gemini CLI как проект с открытым исходным кодом, мы осознали огромный потенциал, который он имел для преобразования того, как разработчики работают с ИИ. Однако мы также увидели пробел в доступных обучающих ресурсах, которые могли бы помочь разработчикам любого происхождения начать работу с этим мощным инструментом.",
        paragraph2: "Именно тогда мы решили создать эту комплексную обучающую платформу. Наша цель была простой: сделать Gemini CLI доступным для всех, независимо от их уровня опыта с ИИ или инструментами командной строки.",
        paragraph3: "То, что началось как небольшая коллекция учебников, выросло в комплексную платформу с поддержкой нескольких языков, интерактивными примерами и процветающим сообществом участников. Мы гордимся тем, что являемся частью экосистемы открытого исходного кода и поддерживаем видение Google по демократизации разработки ИИ."
      },
      disclaimer: {
        title: "Важное уведомление",
        content: "Это неофициальный веб-сайт обучающих ресурсов, созданный сообществом для поддержки образования по Gemini CLI. Хотя мы стремимся к точности и качеству, эта платформа не является официально связанной с Google или одобренной им. Весь контент основан на официальном проекте Gemini CLI с открытым исходным кодом и вкладе сообщества."
      },
      getInvolved: {
        title: "Присоединяйтесь",
        subtitle: "Присоединяйтесь к нашему сообществу и помогите сделать разработку ИИ более доступной",
        contribute: {
          title: "Внести вклад в контент",
          description: "Помогите нам улучшить наши учебники и добавить новые обучающие ресурсы.",
          link: "Руководство по участию →"
        },
        discussions: {
          title: "Присоединиться к обсуждениям",
          description: "Участвуйте в обсуждениях сообщества и делитесь своим опытом.",
          link: "Обсуждения GitHub →"
        },
        issues: {
          title: "Сообщить о проблемах",
          description: "Нашли проблему или есть предложения по улучшению?",
          link: "Связаться с нами →"
        }
      },
      cta: {
        title: "Готовы начать обучение?",
        description: "Изучите наши комплексные руководства и присоединяйтесь к тысячам разработчиков, которые уже используют Gemini CLI для улучшения своего рабочего процесса разработки.",
        getStarted: "Начать",
        browseGuides: "Просмотреть руководства"
      }
    }
  },
  hi: {
    about: {
      title: "हमारे प्लेटफॉर्म के बारे में",
      subtitle: "हम व्यापक शिक्षण संसाधनों और समुदाय-संचालित सामग्री के माध्यम से दुनिया भर के डेवलपर्स के लिए AI-संचालित विकास को सुलभ बनाने के लिए समर्पित हैं।",
      mission: {
        title: "हमारा मिशन",
        description: "Google के Gemini CLI के लिए व्यापक, सुलभ और व्यावहारिक शिक्षण संसाधन प्रदान करके AI-संचालित विकास को लोकतांत्रिक बनाना। हम मानते हैं कि हर डेवलपर को अपने दैनिक कार्यप्रवाह में कृत्रिम बुद्धिमत्ता की शक्ति का उपयोग करने का अवसर मिलना चाहिए।",
        excellence: "शैक्षिक उत्कृष्टता",
        excellenceDesc: "हम उच्च-गुणवत्ता वाले ट्यूटोरियल, गाइड और दस्तावेज़ीकरण बनाते हैं जो सभी कौशल स्तरों के डेवलपर्स के लिए जटिल AI अवधारणाओं को सुलभ बनाते हैं।",
        community: "समुदाय फोकस",
        communityDesc: "हमारा प्लेटफॉर्म समुदायिक योगदान पर फलता-फूलता है, AI विकास उत्साही लोगों के बीच सहयोग और ज्ञान साझाकरण को बढ़ावा देता है।",
        practical: "व्यावहारिक शिक्षा",
        practicalDesc: "हम व्यावहारिक, वास्तविक-दुनिया के उदाहरणों पर जोर देते हैं जिन्हें डेवलपर्स तुरंत अपनी परियोजनाओं और कार्यप्रवाह में लागू कर सकते हैं।",
        global: "वैश्विक पहुंच",
        globalDesc: "कई भाषाओं के समर्थन और समावेशी डिज़ाइन के साथ, हम सुनिश्चित करते हैं कि हमारे संसाधन दुनिया भर के डेवलपर्स तक पहुंचें।"
      },
      values: {
        title: "हमारे मूल्य",
        subtitle: "वे सिद्धांत जो हमारे सभी कार्यों का मार्गदर्शन करते हैं",
        education: {
          name: "शिक्षा पहले",
          description: "हम व्यापक, समझने में आसान शैक्षिक सामग्री के माध्यम से AI विकास को सुलभ बनाने में विश्वास करते हैं।"
        },
        communityDriven: {
          name: "समुदाय संचालित",
          description: "हमारा प्लेटफॉर्म समुदायिक योगदान, फीडबैक और सहयोगी शिक्षण अनुभवों पर फलता-फूलता है।"
        },
        openSource: {
          name: "ओपन सोर्स भावना",
          description: "हम ओपन सोर्स विकास, पारदर्शिता और ज्ञान साझाकरण का समर्थन और प्रचार करते हैं।"
        },
        innovation: {
          name: "नवाचार फोकस",
          description: "हम अत्याधुनिक शिक्षण संसाधन और उपकरण प्रदान करने के लिए AI तकनीक के अग्रणी में रहते हैं।"
        },
        accessibility: {
          name: "वैश्विक पहुंच",
          description: "हम अपनी सामग्री को दुनिया भर के डेवलपर्स के लिए सुलभ बनाने का प्रयास करते हैं, उनकी पृष्ठभूमि की परवाह किए बिना।"
        },
        quality: {
          name: "गुणवत्तापूर्ण सामग्री",
          description: "हम उच्च-गुणवत्ता, सटीक और अद्यतन शैक्षिक सामग्री प्रदान करने के लिए प्रतिबद्ध हैं।"
        }
      },
      stats: {
        title: "प्लेटफॉर्म प्रभाव",
        subtitle: "डेवलपर समुदाय के साथ मिलकर बढ़ना",
        languages: "समर्थित भाषाएं",
        guides: "शिक्षण गाइड",
        examples: "कोड उदाहरण",
        members: "समुदाय सदस्य"
      },
      story: {
        title: "हमारी कहानी",
        paragraph1: "जब Google ने Gemini CLI को एक ओपन-सोर्स प्रोजेक्ट के रूप में जारी किया, तो हमने उस अपार क्षमता को पहचाना जो इसमें डेवलपर्स के AI के साथ काम करने के तरीके को बदलने के लिए थी। हालांकि, हमने सुलभ शिक्षण संसाधनों में एक अंतर भी देखा जो सभी पृष्ठभूमि के डेवलपर्स को इस शक्तिशाली उपकरण के साथ शुरुआत करने में मदद कर सकते थे।",
        paragraph2: "तभी हमने इस व्यापक शिक्षण प्लेटफॉर्म को बनाने का फैसला किया। हमारा लक्ष्य सरल था: Gemini CLI को सभी के लिए सुलभ बनाना, चाहे AI या कमांड-लाइन टूल्स के साथ उनका अनुभव स्तर कुछ भी हो।",
        paragraph3: "जो ट्यूटोरियल के एक छोटे संग्रह के रूप में शुरू हुआ, वह अब बहु-भाषा समर्थन, इंटरैक्टिव उदाहरणों और योगदानकर्ताओं के एक फलते-फूलते समुदाय के साथ एक व्यापक प्लेटफॉर्म में विकसित हो गया है। हम ओपन-सोर्स पारिस्थितिकी तंत्र का हिस्सा होने और AI विकास को लोकतांत्रिक बनाने के Google के दृष्टिकोण का समर्थन करने पर गर्व करते हैं।"
      },
      disclaimer: {
        title: "महत्वपूर्ण सूचना",
        content: "यह Gemini CLI शिक्षा का समर्थन करने के लिए समुदाय द्वारा बनाई गई एक अनौपचारिक शिक्षण संसाधन वेबसाइट है। जबकि हम सटीकता और गुणवत्ता के लिए प्रयास करते हैं, यह प्लेटफॉर्म आधिकारिक तौर पर Google से संबद्ध या समर्थित नहीं है। सभी सामग्री आधिकारिक Gemini CLI ओपन-सोर्स प्रोजेक्ट और समुदायिक योगदान पर आधारित है।"
      },
      getInvolved: {
        title: "शामिल हों",
        subtitle: "हमारे समुदाय में शामिल हों और AI विकास को और अधिक सुलभ बनाने में मदद करें",
        contribute: {
          title: "सामग्री में योगदान करें",
          description: "हमारे ट्यूटोरियल को बेहतर बनाने और नए शिक्षण संसाधन जोड़ने में हमारी मदद करें।",
          link: "योगदान गाइड →"
        },
        discussions: {
          title: "चर्चा में शामिल हों",
          description: "समुदायिक चर्चाओं में भाग लें और अपने अनुभव साझा करें।",
          link: "GitHub चर्चा →"
        },
        issues: {
          title: "समस्याओं की रिपोर्ट करें",
          description: "कोई समस्या मिली या सुधार के लिए सुझाव हैं?",
          link: "हमसे संपर्क करें →"
        }
      },
      cta: {
        title: "सीखना शुरू करने के लिए तैयार हैं?",
        description: "हमारे व्यापक गाइड का अन्वेषण करें और हजारों डेवलपर्स में शामिल हों जो पहले से ही अपने विकास कार्यप्रवाह को बेहतर बनाने के लिए Gemini CLI का उपयोग कर रहे हैं।",
        getStarted: "शुरू करें",
        browseGuides: "गाइड ब्राउज़ करें"
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
    console.log(`Updated ${locale}.json with about translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// 更新所有语言的翻译文件
Object.keys(aboutTranslations).forEach(locale => {
  updateTranslationFile(locale, aboutTranslations[locale]);
});

// Contact页面翻译内容
const contactTranslations = {
  en: {
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
          buttonText: "Report on GitHub"
        },
        suggestImprovements: {
          title: "Suggest Improvements",
          description: "Have ideas for new content, features, or improvements to our platform?",
          buttonText: "Share Ideas"
        },
        joinDiscussions: {
          title: "Join Discussions",
          description: "Participate in community discussions, ask questions, and share experiences.",
          buttonText: "Join Community"
        },
        contributeContent: {
          title: "Contribute Content",
          description: "Want to contribute tutorials, examples, or translations? We welcome contributions!",
          buttonText: "Contributing Guide"
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to common questions",
        questions: {
          affiliation: {
            question: "Is this website officially affiliated with Google?",
            answer: "No, this is an unofficial community-driven learning platform. While we base our content on Google's official Gemini CLI documentation, we are not affiliated with or endorsed by Google Inc."
          },
          contribute: {
            question: "How can I contribute to the platform?",
            answer: "We welcome contributions! You can help by reporting issues, suggesting improvements, contributing content, or helping with translations. Check our",
            linkText: "Contributing Guide",
            answerEnd: " for more details."
          },
          reportError: {
            question: "I found an error in the documentation. How do I report it?",
            answer: "Please report any errors or issues on our",
            linkText: "GitHub Issues page",
            answerEnd: ". Include as much detail as possible about the error and where you found it."
          },
          requestContent: {
            question: "Can I request new tutorials or content?",
            answer: "Absolutely! We encourage content requests. Please share your ideas on our",
            linkText: "GitHub Discussions",
            answerEnd: " page, and the community can help prioritize and create the content."
          },
          getHelp: {
            question: "How do I get help with Gemini CLI installation or usage?",
            answer: "Start with our",
            installationLink: "Installation Guide",
            and: " and",
            guidesLink: "Usage Guides",
            middle: ". If you still need help, check our",
            faqLink: "FAQ section",
            answerEnd: " or ask the community on GitHub Discussions."
          }
        }
      },
      responseTime: {
        title: "Response Times",
        description: "As a community-driven platform, response times may vary depending on volunteer availability and the complexity of your request.",
        bugReports: {
          time: "24-48h",
          label: "Bug Reports"
        },
        featureRequests: {
          time: "1-3 days",
          label: "Feature Requests"
        },
        contentContributions: {
          time: "Varies",
          label: "Content Contributions"
        }
      },
      guidelines: {
        title: "Community Guidelines",
        subtitle: "Help us maintain a welcoming and productive community",
        respectful: {
          title: "Be Respectful",
          points: [
            "Treat all community members with respect",
            "Use inclusive and welcoming language",
            "Be patient with beginners",
            "Provide constructive feedback"
          ]
        },
        helpful: {
          title: "Be Helpful",
          points: [
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
    }
  },
  zh: {
    contact: {
      title: "联系我们",
      subtitle: "我们很乐意听到您的声音！无论您有问题、建议，还是想要贡献，都有多种方式与我们的社区取得联系。",
      howCanWeHelp: {
        title: "我们如何帮助您？",
        subtitle: "选择最适合您需求的选项"
      },
      options: {
        reportIssues: {
          title: "报告问题",
          description: "发现了错误、损坏的链接或技术问题？请告诉我们，以便我们修复。",
          buttonText: "在GitHub上报告"
        },
        suggestImprovements: {
          title: "建议改进",
          description: "对新内容、功能或平台改进有想法吗？",
          buttonText: "分享想法"
        },
        joinDiscussions: {
          title: "参与讨论",
          description: "参与社区讨论，提出问题，分享经验。",
          buttonText: "加入社区"
        },
        contributeContent: {
          title: "贡献内容",
          description: "想要贡献教程、示例或翻译吗？我们欢迎贡献！",
          buttonText: "贡献指南"
        }
      },
      faq: {
        title: "常见问题",
        subtitle: "常见问题的快速答案",
        questions: {
          affiliation: {
            question: "这个网站是否与Google官方有关联？",
            answer: "不，这是一个非官方的社区驱动学习平台。虽然我们的内容基于Google官方的Gemini CLI文档，但我们与Google Inc.没有关联或认可关系。"
          },
          contribute: {
            question: "我如何为平台做贡献？",
            answer: "我们欢迎贡献！您可以通过报告问题、建议改进、贡献内容或帮助翻译来帮助我们。查看我们的",
            linkText: "贡献指南",
            answerEnd: "了解更多详情。"
          },
          reportError: {
            question: "我在文档中发现了错误。如何报告？",
            answer: "请在我们的",
            linkText: "GitHub问题页面",
            answerEnd: "上报告任何错误或问题。请尽可能详细地描述错误和发现位置。"
          },
          requestContent: {
            question: "我可以请求新的教程或内容吗？",
            answer: "当然可以！我们鼓励内容请求。请在我们的",
            linkText: "GitHub讨论",
            answerEnd: "页面分享您的想法，社区可以帮助优先考虑和创建内容。"
          },
          getHelp: {
            question: "如何获得Gemini CLI安装或使用帮助？",
            answer: "从我们的",
            installationLink: "安装指南",
            and: "和",
            guidesLink: "使用指南",
            middle: "开始。如果您仍需要帮助，请查看我们的",
            faqLink: "FAQ部分",
            answerEnd: "或在GitHub讨论中询问社区。"
          }
        }
      },
      responseTime: {
        title: "响应时间",
        description: "作为社区驱动的平台，响应时间可能因志愿者可用性和请求复杂性而有所不同。",
        bugReports: {
          time: "24-48小时",
          label: "错误报告"
        },
        featureRequests: {
          time: "1-3天",
          label: "功能请求"
        },
        contentContributions: {
          time: "不定",
          label: "内容贡献"
        }
      },
      guidelines: {
        title: "社区准则",
        subtitle: "帮助我们维护一个友好和高效的社区",
        respectful: {
          title: "保持尊重",
          points: [
            "尊重所有社区成员",
            "使用包容和友好的语言",
            "对初学者保持耐心",
            "提供建设性反馈"
          ]
        },
        helpful: {
          title: "乐于助人",
          points: [
            "提供清晰详细的信息",
            "尽可能分享相关示例",
            "发布前搜索现有讨论",
            "跟进您的问题和请求"
          ]
        }
      },
      cta: {
        title: "准备参与了吗？",
        description: "加入我们不断增长的开发者社区，学习和构建Gemini CLI。每一个贡献，无论多小，都有助于让AI开发更加易于访问。",
        joinDiscussions: "加入讨论",
        startContributing: "开始贡献"
      }
    }
  }
};

// 更新contact翻译
Object.keys(contactTranslations).forEach(locale => {
  updateTranslationFile(locale, contactTranslations[locale]);
});

console.log('About and Contact page translations update completed!');
