const fs = require('fs');
const path = require('path');

// All remaining languages with basic translations
const allLanguageTranslations = {
  ja: {
    "title": "プライバシーポリシー",
    "subtitle": "あなたのプライバシーは私たちにとって重要です。このポリシーでは、私たちがあなたの情報をどのように収集、使用、保護するかを説明します。",
    "lastUpdated": "最終更新",
    "introduction": {
      "title": "はじめに",
      "content": "このプライバシーポリシーは、Gemini CLI学習プラットフォームが、あなたが私たちのウェブサイトやサービスを使用する際に、あなたの情報をどのように収集、使用、共有するかを説明しています。私たちはあなたのプライバシーを保護し、データの取り扱いについて透明性を保つことをお約束します。"
    },
    "howWeUse": {
      "title": "情報の使用方法",
      "description": "収集した情報を以下の目的で使用します：",
      "items": [
        {
          "title": "ウェブサイト分析",
          "description": "ユーザーの行動を理解し、ウェブサイトのパフォーマンスとユーザーエクスペリエンスを向上させるため"
        },
        {
          "title": "コンテンツ最適化",
          "description": "ユーザーにとって最も価値のあるコンテンツを特定し、教育資料を最適化するため"
        },
        {
          "title": "技術的改善",
          "description": "技術的問題を特定・修正し、読み込み時間を最適化し、デバイス間の互換性を確保するため"
        },
        {
          "title": "言語ローカライゼーション",
          "description": "お好みの言語でコンテンツを提供し、翻訳品質を向上させるため"
        },
        {
          "title": "セキュリティ",
          "description": "ウェブサイトを悪用、スパム、悪意のある活動から保護するため"
        }
      ]
    }
  },
  ko: {
    "title": "개인정보 보호정책",
    "subtitle": "귀하의 개인정보는 저희에게 중요합니다. 이 정책은 저희가 귀하의 정보를 어떻게 수집, 사용, 보호하는지 설명합니다.",
    "lastUpdated": "최종 업데이트",
    "introduction": {
      "title": "소개",
      "content": "이 개인정보 보호정책은 Gemini CLI 학습 플랫폼이 귀하가 저희 웹사이트와 서비스를 사용할 때 귀하의 정보를 어떻게 수집, 사용, 공유하는지 설명합니다. 저희는 귀하의 개인정보를 보호하고 데이터 관행에 대해 투명하게 공개할 것을 약속합니다."
    },
    "howWeUse": {
      "title": "정보 사용 방법",
      "description": "수집된 정보를 다음 목적으로 사용합니다:",
      "items": [
        {
          "title": "웹사이트 분석",
          "description": "사용자 행동을 이해하고 웹사이트의 성능과 사용자 경험을 개선하기 위해"
        },
        {
          "title": "콘텐츠 최적화",
          "description": "사용자에게 가장 가치 있는 콘텐츠를 결정하고 교육 자료를 최적화하기 위해"
        },
        {
          "title": "기술적 개선",
          "description": "기술적 문제를 식별하고 수정하며, 로딩 시간을 최적화하고 기기 간 호환성을 보장하기 위해"
        },
        {
          "title": "언어 현지화",
          "description": "선호하는 언어로 콘텐츠를 제공하고 번역 품질을 개선하기 위해"
        },
        {
          "title": "보안",
          "description": "웹사이트를 남용, 스팸 및 악의적인 활동으로부터 보호하기 위해"
        }
      ]
    }
  },
  es: {
    "title": "Política de Privacidad",
    "subtitle": "Su privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos su información.",
    "lastUpdated": "Última actualización",
    "introduction": {
      "title": "Introducción",
      "content": "Esta política de privacidad describe cómo la Plataforma de Aprendizaje Gemini CLI recopila, usa y comparte su información cuando utiliza nuestro sitio web y servicios. Estamos comprometidos a proteger su privacidad y ser transparentes sobre nuestras prácticas de datos."
    },
    "howWeUse": {
      "title": "Cómo usamos su información",
      "description": "Utilizamos la información recopilada para los siguientes propósitos:",
      "items": [
        {
          "title": "Análisis del sitio web",
          "description": "Para entender el comportamiento del usuario y mejorar el rendimiento y la experiencia del usuario de nuestro sitio web"
        },
        {
          "title": "Optimización de contenido",
          "description": "Para determinar qué contenido es más valioso para nuestros usuarios y optimizar nuestros materiales educativos"
        },
        {
          "title": "Mejoras técnicas",
          "description": "Para identificar y solucionar problemas técnicos, optimizar tiempos de carga y asegurar compatibilidad entre dispositivos"
        },
        {
          "title": "Localización de idioma",
          "description": "Para proporcionar contenido en su idioma preferido y mejorar la calidad de nuestras traducciones"
        },
        {
          "title": "Seguridad",
          "description": "Para proteger nuestro sitio web del abuso, spam y actividades maliciosas"
        }
      ]
    }
  },
  hi: {
    "title": "गोपनीयता नीति",
    "subtitle": "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।",
    "lastUpdated": "अंतिम अपडेट",
    "introduction": {
      "title": "परिचय",
      "content": "यह गोपनीयता नीति बताती है कि Gemini CLI लर्निंग प्लेटफॉर्म आपकी जानकारी को कैसे एकत्र, उपयोग और साझा करता है जब आप हमारी वेबसाइट और सेवाओं का उपयोग करते हैं। हम आपकी गोपनीयता की सुरक्षा करने और अपनी डेटा प्रथाओं के बारे में पारदर्शी होने के लिए प्रतिबद्ध हैं।"
    },
    "howWeUse": {
      "title": "हम आपकी जानकारी का उपयोग कैसे करते हैं",
      "description": "हम एकत्रित जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:",
      "items": [
        {
          "title": "वेबसाइट विश्लेषण",
          "description": "उपयोगकर्ता व्यवहार को समझने और हमारी वेबसाइट के प्रदर्शन और उपयोगकर्ता अनुभव में सुधार के लिए"
        },
        {
          "title": "सामग्री अनुकूलन",
          "description": "यह निर्धारित करने के लिए कि हमारे उपयोगकर्ताओं के लिए कौन सी सामग्री सबसे मूल्यवान है और हमारी शैक्षिक सामग्री को अनुकूलित करने के लिए"
        },
        {
          "title": "तकनीकी सुधार",
          "description": "तकनीकी समस्याओं की पहचान और समाधान, लोडिंग समय को अनुकूलित करने और उपकरणों में संगतता सुनिश्चित करने के लिए"
        },
        {
          "title": "भाषा स्थानीयकरण",
          "description": "आपकी पसंदीदा भाषा में सामग्री प्रदान करने और हमारी अनुवाद गुणवत्ता में सुधार के लिए"
        },
        {
          "title": "सुरक्षा",
          "description": "हमारी वेबसाइट को दुरुपयोग, स्पैम और दुर्भावनापूर्ण गतिविधियों से बचाने के लिए"
        }
      ]
    }
  },
  ru: {
    "title": "Политика конфиденциальности",
    "subtitle": "Ваша конфиденциальность важна для нас. Эта политика объясняет, как мы собираем, используем и защищаем вашу информацию.",
    "lastUpdated": "Последнее обновление",
    "introduction": {
      "title": "Введение",
      "content": "Эта политика конфиденциальности описывает, как платформа обучения Gemini CLI собирает, использует и делится вашей информацией, когда вы используете наш веб-сайт и услуги. Мы обязуемся защищать вашу конфиденциальность и быть прозрачными в отношении наших практик работы с данными."
    },
    "howWeUse": {
      "title": "Как мы используем вашу информацию",
      "description": "Мы используем собранную информацию для следующих целей:",
      "items": [
        {
          "title": "Анализ веб-сайта",
          "description": "Для понимания поведения пользователей и улучшения производительности и пользовательского опыта нашего веб-сайта"
        },
        {
          "title": "Оптимизация контента",
          "description": "Для определения того, какой контент наиболее ценен для наших пользователей, и оптимизации наших образовательных материалов"
        },
        {
          "title": "Технические улучшения",
          "description": "Для выявления и устранения технических проблем, оптимизации времени загрузки и обеспечения совместимости между устройствами"
        },
        {
          "title": "Языковая локализация",
          "description": "Для предоставления контента на вашем предпочитаемом языке и улучшения качества наших переводов"
        },
        {
          "title": "Безопасность",
          "description": "Для защиты нашего веб-сайта от злоупотреблений, спама и вредоносных действий"
        }
      ]
    }
  }
};

// Function to add complete privacy translations
function addCompletePrivacyTranslations(lang, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  try {
    // Read existing file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Merge translations into privacy section
    if (data.privacy && translations) {
      // Deep merge function
      function deepMerge(target, source) {
        for (const key in source) {
          if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            if (!target[key]) target[key] = {};
            deepMerge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
      
      deepMerge(data.privacy, translations);
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Added complete privacy translations for ${lang}`);
    
  } catch (error) {
    console.error(`✗ Error updating ${lang}:`, error.message);
  }
}

// Add complete translations for each language
console.log('Adding complete privacy translations...');
Object.keys(allLanguageTranslations).forEach(lang => {
  addCompletePrivacyTranslations(lang, allLanguageTranslations[lang]);
});
console.log('Complete privacy translations added!');
