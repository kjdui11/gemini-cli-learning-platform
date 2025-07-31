const fs = require('fs');
const path = require('path');

// Missing homepage translations for different languages
const missingTranslations = {
  en: {
    "featuresStats": {
      "freeExperience": {
        "unit": "minutes of free development experience",
        "title": "Unmatched usage limits",
        "description": "Personal Google accounts get 60 model requests per minute and 1000 requests per day for an exceptional free experience."
      },
      "tokenContext": {
        "unit": "Token Context",
        "title": "Powerful model capabilities",
        "description": "Based on Gemini 2.5 Pro model with 1 million token large context window, supporting real code analysis and generation."
      },
      "openSource": {
        "unit": "Open Source Code",
        "title": "Open and Extensible",
        "description": "Supports Model Context Protocol (MCP) and custom tools, easily configurable in various development tools and workflows."
      }
    },
    "heroShowcase": {
      "title": "Your Terminal AI Assistant",
      "description": "Gemini CLI integrates Google's most advanced AI technology directly into your command line, providing developers with an unparalleled intelligent programming experience."
    }
  },
  ru: {
    "featuresStats": {
      "freeExperience": {
        "unit": "минут бесплатного опыта разработки",
        "title": "Непревзойденные лимиты использования",
        "description": "Личные аккаунты Google получают 60 запросов к модели в минуту и 1000 запросов в день для исключительного бесплатного опыта."
      },
      "tokenContext": {
        "unit": "Токен Контекст",
        "title": "Мощные возможности модели",
        "description": "Основан на модели Gemini 2.5 Pro с большим контекстным окном в 1 миллион токенов, поддерживающим реальный анализ и генерацию кода."
      },
      "openSource": {
        "unit": "Открытый исходный код",
        "title": "Открытый и расширяемый",
        "description": "Поддерживает Model Context Protocol (MCP) и пользовательские инструменты, легко настраивается в различных инструментах разработки и рабочих процессах."
      }
    },
    "heroShowcase": {
      "title": "Ваш ИИ-помощник в терминале",
      "description": "Gemini CLI интегрирует самые передовые ИИ-технологии Google прямо в вашу командную строку, предоставляя разработчикам непревзойденный опыт интеллектуального программирования."
    }
  },
  hi: {
    "featuresStats": {
      "freeExperience": {
        "unit": "मिनट मुफ्त विकास अनुभव",
        "title": "बेजोड़ उपयोग सीमाएं",
        "description": "व्यक्तिगत Google खाते प्रति मिनट 60 मॉडल अनुरोध और प्रति दिन 1000 अनुरोध असाधारण मुफ्त अनुभव के लिए प्राप्त करते हैं।"
      },
      "tokenContext": {
        "unit": "टोकन संदर्भ",
        "title": "शक्तिशाली मॉडल क्षमताएं",
        "description": "Gemini 2.5 Pro मॉडल पर आधारित 1 मिलियन टोकन बड़े संदर्भ विंडो के साथ, वास्तविक कोड विश्लेषण और पीढ़ी का समर्थन करता है।"
      },
      "openSource": {
        "unit": "ओपन सोर्स कोड",
        "title": "खुला और विस्तार योग्य",
        "description": "Model Context Protocol (MCP) और कस्टम टूल्स का समर्थन करता है, विभिन्न विकास उपकरणों और वर्कफ़्लो में आसानी से कॉन्फ़िगर किया जा सकता है।"
      }
    },
    "heroShowcase": {
      "title": "आपका टर्मिनल AI सहायक",
      "description": "Gemini CLI Google की सबसे उन्नत AI तकनीक को सीधे आपकी कमांड लाइन में एकीकृत करता है, डेवलपर्स को बेजोड़ बुद्धिमान प्रोग्रामिंग अनुभव प्रदान करता है।"
    }
  },
  de: {
    "featuresStats": {
      "freeExperience": {
        "unit": "Minuten kostenlose Entwicklungserfahrung",
        "title": "Unübertroffene Nutzungslimits",
        "description": "Persönliche Google-Konten erhalten 60 Modellanfragen pro Minute und 1000 Anfragen pro Tag für eine außergewöhnliche kostenlose Erfahrung."
      },
      "tokenContext": {
        "unit": "Token-Kontext",
        "title": "Leistungsstarke Modellfähigkeiten",
        "description": "Basierend auf dem Gemini 2.5 Pro-Modell mit 1 Million Token großem Kontextfenster, unterstützt echte Code-Analyse und -Generierung."
      },
      "openSource": {
        "unit": "Open-Source-Code",
        "title": "Offen und erweiterbar",
        "description": "Unterstützt Model Context Protocol (MCP) und benutzerdefinierte Tools, einfach konfigurierbar in verschiedenen Entwicklungstools und Workflows."
      }
    },
    "heroShowcase": {
      "title": "Ihr Terminal-KI-Assistent",
      "description": "Gemini CLI integriert Googles fortschrittlichste KI-Technologie direkt in Ihre Befehlszeile und bietet Entwicklern eine unvergleichliche intelligente Programmiererfahrung."
    }
  },
  fr: {
    "featuresStats": {
      "freeExperience": {
        "unit": "minutes d'expérience de développement gratuite",
        "title": "Limites d'utilisation inégalées",
        "description": "Les comptes Google personnels obtiennent 60 requêtes de modèle par minute et 1000 requêtes par jour pour une expérience gratuite exceptionnelle."
      },
      "tokenContext": {
        "unit": "Contexte de jeton",
        "title": "Capacités de modèle puissantes",
        "description": "Basé sur le modèle Gemini 2.5 Pro avec une grande fenêtre de contexte de 1 million de jetons, prenant en charge l'analyse et la génération de code réelles."
      },
      "openSource": {
        "unit": "Code open source",
        "title": "Ouvert et extensible",
        "description": "Prend en charge le Model Context Protocol (MCP) et les outils personnalisés, facilement configurable dans divers outils de développement et flux de travail."
      }
    },
    "heroShowcase": {
      "title": "Votre assistant IA de terminal",
      "description": "Gemini CLI intègre la technologie IA la plus avancée de Google directement dans votre ligne de commande, offrant aux développeurs une expérience de programmation intelligente inégalée."
    }
  },
  ja: {
    "featuresStats": {
      "freeExperience": {
        "unit": "分の無料開発体験",
        "title": "比類のない使用制限",
        "description": "個人のGoogleアカウントは、毎分60回のモデルリクエストと1日1000回のリクエストで、卓越した無料体験を得られます。"
      },
      "tokenContext": {
        "unit": "トークンコンテキスト",
        "title": "強力なモデル機能",
        "description": "100万トークンの大きなコンテキストウィンドウを持つGemini 2.5 Proモデルに基づき、実際のコード分析と生成をサポートします。"
      },
      "openSource": {
        "unit": "オープンソースコード",
        "title": "オープンで拡張可能",
        "description": "Model Context Protocol (MCP)とカスタムツールをサポートし、さまざまな開発ツールとワークフローで簡単に設定できます。"
      }
    },
    "heroShowcase": {
      "title": "あなたのターミナルAIアシスタント",
      "description": "Gemini CLIは、Googleの最も先進的なAI技術をコマンドラインに直接統合し、開発者に比類のないインテリジェントなプログラミング体験を提供します。"
    }
  },
  ko: {
    "featuresStats": {
      "freeExperience": {
        "unit": "분의 무료 개발 경험",
        "title": "비교할 수 없는 사용 한도",
        "description": "개인 Google 계정은 분당 60회 모델 요청과 하루 1000회 요청으로 뛰어난 무료 경험을 얻습니다."
      },
      "tokenContext": {
        "unit": "토큰 컨텍스트",
        "title": "강력한 모델 기능",
        "description": "100만 토큰의 큰 컨텍스트 창을 가진 Gemini 2.5 Pro 모델을 기반으로 실제 코드 분석 및 생성을 지원합니다."
      },
      "openSource": {
        "unit": "오픈 소스 코드",
        "title": "개방적이고 확장 가능",
        "description": "Model Context Protocol (MCP)과 사용자 정의 도구를 지원하며, 다양한 개발 도구와 워크플로에서 쉽게 구성할 수 있습니다."
      }
    },
    "heroShowcase": {
      "title": "당신의 터미널 AI 어시스턴트",
      "description": "Gemini CLI는 Google의 가장 진보된 AI 기술을 명령줄에 직접 통합하여 개발자에게 비교할 수 없는 지능형 프로그래밍 경험을 제공합니다."
    }
  },
  es: {
    "featuresStats": {
      "freeExperience": {
        "unit": "minutos de experiencia de desarrollo gratuita",
        "title": "Límites de uso incomparables",
        "description": "Las cuentas personales de Google obtienen 60 solicitudes de modelo por minuto y 1000 solicitudes por día para una experiencia gratuita excepcional."
      },
      "tokenContext": {
        "unit": "Contexto de token",
        "title": "Capacidades de modelo potentes",
        "description": "Basado en el modelo Gemini 2.5 Pro con una gran ventana de contexto de 1 millón de tokens, compatible con análisis y generación de código real."
      },
      "openSource": {
        "unit": "Código abierto",
        "title": "Abierto y extensible",
        "description": "Admite Model Context Protocol (MCP) y herramientas personalizadas, fácilmente configurable en varias herramientas de desarrollo y flujos de trabajo."
      }
    },
    "heroShowcase": {
      "title": "Su asistente de IA de terminal",
      "description": "Gemini CLI integra la tecnología de IA más avanzada de Google directamente en su línea de comandos, proporcionando a los desarrolladores una experiencia de programación inteligente incomparable."
    }
  }
};

// Function to update translation files
function updateTranslationFile(locale, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${locale}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Add missing translations
    Object.assign(data, translations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${locale}.json with missing homepage translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// Update files
Object.keys(missingTranslations).forEach(locale => {
  updateTranslationFile(locale, missingTranslations[locale]);
});

console.log('Missing homepage translations update completed!');
