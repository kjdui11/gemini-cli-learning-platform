const fs = require('fs');
const path = require('path');

// Complete footer translations for different languages
const footerTranslations = {
  en: {
    "footer": {
      "learning": {
        "title": "Learning Resources",
        "installation": "Installation & Setup Guide",
        "guides": "Getting Started Tutorials",
        "advanced": "Advanced Usage Tips",
        "faq": "Frequently Asked Questions",
        "examples": "Practical Case Studies"
      },
      "tools": {
        "title": "Development Tools",
        "download": "Gemini CLI Download",
        "commands": "Command Reference Manual",
        "docs": "Developer Documentation",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Gemini API Documentation"
      },
      "community": {
        "title": "Community & Support",
        "github": "GitHub Project Homepage",
        "discussions": "GitHub Discussions",
        "issues": "Issue Feedback",
        "troubleshooting": "Installation Troubleshooting",
        "contributing": "Contributing Guide"
      },
      "company": {
        "title": "About Us",
        "about": "Website Introduction",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "contact": "Contact Us",
        "sitemap": "Site Map"
      },
      "seo": {
        "title": "Gemini CLI Learning Platform - AI-Powered Development Tool Tutorials",
        "description": "Professional Gemini CLI learning platform providing comprehensive AI programming tutorials, practical cases, and best practices. Learn how to use Google's latest open-source AI command-line tool, master artificial intelligence-assisted programming techniques, and improve development efficiency. Supports powerful features like code generation, file operations, and Google Search integration.",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#AIProgramming",
          "commandLine": "#CommandLineTool",
          "googleAI": "#GoogleAI",
          "openSource": "#OpenSource"
        }
      },
      "social": {
        "visitLabel": "Visit {name}"
      },
      "copyright": {
        "main": "© 2025 Gemini CLI Learning Platform. This is an unofficial learning resource website dedicated to promoting AI programming technology.",
        "basedOn": "Based on Google's official open-source project",
        "license": "Built | Apache 2.0 Open Source License"
      }
    }
  },
  ru: {
    "footer": {
      "learning": {
        "title": "Обучающие ресурсы",
        "installation": "Руководство по установке и настройке",
        "guides": "Учебные пособия для начинающих",
        "advanced": "Советы по продвинутому использованию",
        "faq": "Часто задаваемые вопросы",
        "examples": "Анализ практических случаев"
      },
      "tools": {
        "title": "Инструменты разработки",
        "download": "Скачать Gemini CLI",
        "commands": "Справочник команд",
        "docs": "Документация для разработчиков",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Документация Gemini API"
      },
      "community": {
        "title": "Сообщество и поддержка",
        "github": "Главная страница проекта GitHub",
        "discussions": "Обсуждения GitHub",
        "issues": "Обратная связь по проблемам",
        "troubleshooting": "Устранение проблем установки",
        "contributing": "Руководство по участию"
      },
      "company": {
        "title": "О нас",
        "about": "Описание сайта",
        "privacy": "Политика конфиденциальности",
        "terms": "Условия использования",
        "contact": "Связаться с нами",
        "sitemap": "Карта сайта"
      },
      "seo": {
        "title": "Платформа обучения Gemini CLI - Учебные пособия по инструментам разработки на основе ИИ",
        "description": "Профессиональная платформа обучения Gemini CLI, предоставляющая комплексные учебные пособия по программированию ИИ, практические случаи и лучшие практики. Изучите, как использовать новейший инструмент командной строки ИИ с открытым исходным кодом от Google, освойте техники программирования с помощью искусственного интеллекта и повысьте эффективность разработки.",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#ПрограммированиеИИ",
          "commandLine": "#ИнструментКоманднойСтроки",
          "googleAI": "#GoogleAI",
          "openSource": "#ОткрытыйИсходныйКод"
        }
      },
      "social": {
        "visitLabel": "Посетить {name}"
      },
      "copyright": {
        "main": "© 2025 Платформа обучения Gemini CLI. Это неофициальный сайт обучающих ресурсов, посвященный продвижению технологий программирования ИИ.",
        "basedOn": "Основан на официальном проекте Google с открытым исходным кодом",
        "license": "Построен | Лицензия Apache 2.0 с открытым исходным кодом"
      }
    }
  },
  hi: {
    "footer": {
      "learning": {
        "title": "शिक्षण संसाधन",
        "installation": "इंस्टॉलेशन और सेटअप गाइड",
        "guides": "शुरुआती ट्यूटोरियल",
        "advanced": "उन्नत उपयोग टिप्स",
        "faq": "अक्सर पूछे जाने वाले प्रश्न",
        "examples": "व्यावहारिक केस स्टडी"
      },
      "tools": {
        "title": "विकास उपकरण",
        "download": "Gemini CLI डाउनलोड",
        "commands": "कमांड संदर्भ मैनुअल",
        "docs": "डेवलपर दस्तावेज़",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Gemini API दस्तावेज़"
      },
      "community": {
        "title": "समुदाय और सहायता",
        "github": "GitHub प्रोजेक्ट होमपेज",
        "discussions": "GitHub चर्चा",
        "issues": "समस्या फीडबैक",
        "troubleshooting": "इंस्टॉलेशन समस्या निवारण",
        "contributing": "योगदान गाइड"
      },
      "company": {
        "title": "हमारे बारे में",
        "about": "वेबसाइट परिचय",
        "privacy": "गोपनीयता नीति",
        "terms": "सेवा की शर्तें",
        "contact": "हमसे संपर्क करें",
        "sitemap": "साइट मैप"
      },
      "seo": {
        "title": "Gemini CLI शिक्षण प्लेटफॉर्म - AI-संचालित विकास उपकरण ट्यूटोरियल",
        "description": "व्यापक AI प्रोग्रामिंग ट्यूटोरियल, व्यावहारिक मामले और सर्वोत्तम प्रथाएं प्रदान करने वाला पेशेवर Gemini CLI शिक्षण प्लेटफॉर्म। Google के नवीनतम ओपन-सोर्स AI कमांड-लाइन टूल का उपयोग करना सीखें।",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#AIप्रोग्रामिंग",
          "commandLine": "#कमांडलाइनटूल",
          "googleAI": "#GoogleAI",
          "openSource": "#ओपनसोर्स"
        }
      },
      "social": {
        "visitLabel": "{name} पर जाएं"
      },
      "copyright": {
        "main": "© 2025 Gemini CLI शिक्षण प्लेटफॉर्म। यह AI प्रोग्रामिंग तकनीक को बढ़ावा देने के लिए समर्पित एक अनौपचारिक शिक्षण संसाधन वेबसाइट है।",
        "basedOn": "Google के आधिकारिक ओपन-सोर्स प्रोजेक्ट पर आधारित",
        "license": "निर्मित | Apache 2.0 ओपन सोर्स लाइसेंस"
      }
    }
  },
  de: {
    "footer": {
      "learning": {
        "title": "Lernressourcen",
        "installation": "Installations- und Einrichtungsanleitung",
        "guides": "Erste Schritte Tutorials",
        "advanced": "Erweiterte Nutzungstipps",
        "faq": "Häufig gestellte Fragen",
        "examples": "Praktische Fallstudien"
      },
      "tools": {
        "title": "Entwicklungstools",
        "download": "Gemini CLI Download",
        "commands": "Befehlsreferenz-Handbuch",
        "docs": "Entwicklerdokumentation",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Gemini API Dokumentation"
      },
      "community": {
        "title": "Community & Support",
        "github": "GitHub Projekt-Homepage",
        "discussions": "GitHub Diskussionen",
        "issues": "Problem-Feedback",
        "troubleshooting": "Installations-Fehlerbehebung",
        "contributing": "Beitragsleitfaden"
      },
      "company": {
        "title": "Über uns",
        "about": "Website-Einführung",
        "privacy": "Datenschutzrichtlinie",
        "terms": "Nutzungsbedingungen",
        "contact": "Kontaktieren Sie uns",
        "sitemap": "Sitemap"
      },
      "seo": {
        "title": "Gemini CLI Lernplattform - KI-gestützte Entwicklungstools-Tutorials",
        "description": "Professionelle Gemini CLI Lernplattform mit umfassenden KI-Programmier-Tutorials, praktischen Fällen und bewährten Praktiken. Lernen Sie, wie Sie Googles neuestes Open-Source-KI-Kommandozeilen-Tool verwenden.",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#KIProgrammierung",
          "commandLine": "#Kommandozeilen-Tool",
          "googleAI": "#GoogleAI",
          "openSource": "#OpenSource"
        }
      },
      "social": {
        "visitLabel": "{name} besuchen"
      },
      "copyright": {
        "main": "© 2025 Gemini CLI Lernplattform. Dies ist eine inoffizielle Lernressourcen-Website, die sich der Förderung der KI-Programmierungstechnologie widmet.",
        "basedOn": "Basierend auf Googles offiziellem Open-Source-Projekt",
        "license": "Erstellt | Apache 2.0 Open-Source-Lizenz"
      }
    }
  }
};

// Function to update translation files
function updateTranslationFile(locale, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${locale}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Replace footer section completely
    Object.assign(data, translations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${locale}.json with complete footer translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// Add footer translations for French, Japanese, Korean, Spanish
const additionalFooterTranslations = {
  fr: {
    "footer": {
      "learning": {
        "title": "Ressources d'apprentissage",
        "installation": "Guide d'installation et de configuration",
        "guides": "Tutoriels de démarrage",
        "advanced": "Conseils d'utilisation avancée",
        "faq": "Questions fréquemment posées",
        "examples": "Études de cas pratiques"
      },
      "tools": {
        "title": "Outils de développement",
        "download": "Téléchargement Gemini CLI",
        "commands": "Manuel de référence des commandes",
        "docs": "Documentation développeur",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Documentation API Gemini"
      },
      "community": {
        "title": "Communauté et support",
        "github": "Page d'accueil du projet GitHub",
        "discussions": "Discussions GitHub",
        "issues": "Retour de problèmes",
        "troubleshooting": "Dépannage d'installation",
        "contributing": "Guide de contribution"
      },
      "company": {
        "title": "À propos de nous",
        "about": "Introduction du site web",
        "privacy": "Politique de confidentialité",
        "terms": "Conditions d'utilisation",
        "contact": "Nous contacter",
        "sitemap": "Plan du site"
      },
      "seo": {
        "title": "Plateforme d'apprentissage Gemini CLI - Tutoriels d'outils de développement alimentés par l'IA",
        "description": "Plateforme d'apprentissage professionnelle Gemini CLI fournissant des tutoriels de programmation IA complets, des cas pratiques et les meilleures pratiques.",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#ProgrammationIA",
          "commandLine": "#OutilLigneCommande",
          "googleAI": "#GoogleAI",
          "openSource": "#OpenSource"
        }
      },
      "social": {
        "visitLabel": "Visiter {name}"
      },
      "copyright": {
        "main": "© 2025 Plateforme d'apprentissage Gemini CLI. Il s'agit d'un site web de ressources d'apprentissage non officiel dédié à la promotion de la technologie de programmation IA.",
        "basedOn": "Basé sur le projet open source officiel de Google",
        "license": "Construit | Licence open source Apache 2.0"
      }
    }
  },
  ja: {
    "footer": {
      "learning": {
        "title": "学習リソース",
        "installation": "インストールとセットアップガイド",
        "guides": "入門チュートリアル",
        "advanced": "高度な使用方法のヒント",
        "faq": "よくある質問",
        "examples": "実践的なケーススタディ"
      },
      "tools": {
        "title": "開発ツール",
        "download": "Gemini CLI ダウンロード",
        "commands": "コマンドリファレンスマニュアル",
        "docs": "開発者ドキュメント",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Gemini API ドキュメント"
      },
      "community": {
        "title": "コミュニティとサポート",
        "github": "GitHub プロジェクトホームページ",
        "discussions": "GitHub ディスカッション",
        "issues": "問題のフィードバック",
        "troubleshooting": "インストールのトラブルシューティング",
        "contributing": "貢献ガイド"
      },
      "company": {
        "title": "私たちについて",
        "about": "ウェブサイト紹介",
        "privacy": "プライバシーポリシー",
        "terms": "利用規約",
        "contact": "お問い合わせ",
        "sitemap": "サイトマップ"
      },
      "seo": {
        "title": "Gemini CLI 学習プラットフォーム - AI駆動開発ツールチュートリアル",
        "description": "包括的なAIプログラミングチュートリアル、実践的なケース、ベストプラクティスを提供するプロフェッショナルなGemini CLI学習プラットフォーム。",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#AIプログラミング",
          "commandLine": "#コマンドラインツール",
          "googleAI": "#GoogleAI",
          "openSource": "#オープンソース"
        }
      },
      "social": {
        "visitLabel": "{name}を訪問"
      },
      "copyright": {
        "main": "© 2025 Gemini CLI 学習プラットフォーム。これはAIプログラミング技術の普及に専念する非公式の学習リソースウェブサイトです。",
        "basedOn": "Googleの公式オープンソースプロジェクトに基づく",
        "license": "構築 | Apache 2.0 オープンソースライセンス"
      }
    }
  },
  ko: {
    "footer": {
      "learning": {
        "title": "학습 리소스",
        "installation": "설치 및 설정 가이드",
        "guides": "시작하기 튜토리얼",
        "advanced": "고급 사용 팁",
        "faq": "자주 묻는 질문",
        "examples": "실용적인 사례 연구"
      },
      "tools": {
        "title": "개발 도구",
        "download": "Gemini CLI 다운로드",
        "commands": "명령어 참조 매뉴얼",
        "docs": "개발자 문서",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Gemini API 문서"
      },
      "community": {
        "title": "커뮤니티 및 지원",
        "github": "GitHub 프로젝트 홈페이지",
        "discussions": "GitHub 토론",
        "issues": "문제 피드백",
        "troubleshooting": "설치 문제 해결",
        "contributing": "기여 가이드"
      },
      "company": {
        "title": "회사 소개",
        "about": "웹사이트 소개",
        "privacy": "개인정보 보호정책",
        "terms": "이용 약관",
        "contact": "문의하기",
        "sitemap": "사이트맵"
      },
      "seo": {
        "title": "Gemini CLI 학습 플랫폼 - AI 기반 개발 도구 튜토리얼",
        "description": "포괄적인 AI 프로그래밍 튜토리얼, 실용적인 사례 및 모범 사례를 제공하는 전문 Gemini CLI 학습 플랫폼입니다.",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#AI프로그래밍",
          "commandLine": "#명령줄도구",
          "googleAI": "#GoogleAI",
          "openSource": "#오픈소스"
        }
      },
      "social": {
        "visitLabel": "{name} 방문"
      },
      "copyright": {
        "main": "© 2025 Gemini CLI 학습 플랫폼. AI 프로그래밍 기술 홍보에 전념하는 비공식 학습 리소스 웹사이트입니다.",
        "basedOn": "Google의 공식 오픈 소스 프로젝트 기반",
        "license": "구축됨 | Apache 2.0 오픈 소스 라이선스"
      }
    }
  },
  es: {
    "footer": {
      "learning": {
        "title": "Recursos de aprendizaje",
        "installation": "Guía de instalación y configuración",
        "guides": "Tutoriales de inicio",
        "advanced": "Consejos de uso avanzado",
        "faq": "Preguntas frecuentes",
        "examples": "Estudios de casos prácticos"
      },
      "tools": {
        "title": "Herramientas de desarrollo",
        "download": "Descarga de Gemini CLI",
        "commands": "Manual de referencia de comandos",
        "docs": "Documentación para desarrolladores",
        "aiStudio": "Google AI Studio",
        "apiDocs": "Documentación de la API de Gemini"
      },
      "community": {
        "title": "Comunidad y soporte",
        "github": "Página principal del proyecto GitHub",
        "discussions": "Discusiones de GitHub",
        "issues": "Comentarios sobre problemas",
        "troubleshooting": "Solución de problemas de instalación",
        "contributing": "Guía de contribución"
      },
      "company": {
        "title": "Acerca de nosotros",
        "about": "Introducción del sitio web",
        "privacy": "Política de privacidad",
        "terms": "Términos de servicio",
        "contact": "Contáctanos",
        "sitemap": "Mapa del sitio"
      },
      "seo": {
        "title": "Plataforma de aprendizaje Gemini CLI - Tutoriales de herramientas de desarrollo impulsadas por IA",
        "description": "Plataforma de aprendizaje profesional de Gemini CLI que proporciona tutoriales integrales de programación de IA, casos prácticos y mejores prácticas.",
        "tags": {
          "geminiCLI": "#GeminiCLI",
          "aiProgramming": "#ProgramaciónIA",
          "commandLine": "#HerramientaLíneaComandos",
          "googleAI": "#GoogleAI",
          "openSource": "#CódigoAbierto"
        }
      },
      "social": {
        "visitLabel": "Visitar {name}"
      },
      "copyright": {
        "main": "© 2025 Plataforma de aprendizaje Gemini CLI. Este es un sitio web de recursos de aprendizaje no oficial dedicado a promover la tecnología de programación de IA.",
        "basedOn": "Basado en el proyecto de código abierto oficial de Google",
        "license": "Construido | Licencia de código abierto Apache 2.0"
      }
    }
  }
};

// Update files for languages that need footer fixes
const languagesToUpdate = ['en', 'ru', 'hi', 'de'];
languagesToUpdate.forEach(locale => {
  if (footerTranslations[locale]) {
    updateTranslationFile(locale, footerTranslations[locale]);
  }
});

// Update additional languages
Object.keys(additionalFooterTranslations).forEach(locale => {
  updateTranslationFile(locale, additionalFooterTranslations[locale]);
});

console.log('Footer translations update completed!');
