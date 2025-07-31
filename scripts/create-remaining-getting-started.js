const fs = require('fs');
const path = require('path');

// Remaining professional translations for getting-started page
const remainingTranslations = {
  hi: {
    title: "Gemini CLI का पहला उपयोग",
    subtitle: "AI सहायक प्रोग्रामिंग यात्रा शुरू करने के लिए 10 मिनट की त्वरित शुरुआत",
    description: "यह ट्यूटोरियल आपको Gemini CLI के साथ तुरंत शुरुआत करने में मदद करेगा, बुनियादी संचालन और मुख्य अवधारणाओं को सीखने में।",
    meta: {
      level: "शुरुआती लोगों के लिए उपयुक्त",
      duration: "पूरा करने के लिए 10 मिनट"
    },
    prerequisites: {
      title: "शुरू करने से पहले",
      nodejs: "Node.js 18 या उससे अधिक स्थापित होना चाहिए",
      terminal: "बुनियादी कमांड लाइन संचालन से परिचित होना चाहिए",
      google: "Google खाता (प्रमाणीकरण के लिए)"
    },
    steps: {
      install: {
        title: "Gemini CLI स्थापित करें",
        description: "अपने लिए उपयुक्त स्थापना विधि चुनें",
        methods: {
          npx: {
            name: "NPX (अनुशंसित)",
            description: "स्थापना की आवश्यकता नहीं, नवीनतम संस्करण सीधे चलाएं"
          },
          npm: {
            name: "NPM ग्लोबल स्थापना",
            description: "कहीं भी gemini कमांड का उपयोग करने के लिए ग्लोबल स्थापना"
          },
          homebrew: {
            name: "Homebrew (macOS)",
            description: "Homebrew का उपयोग करने वाले macOS उपयोगकर्ताओं के लिए अनुशंसित"
          }
        }
      },
      firstRun: {
        title: "पहला चलाना",
        description: "Gemini CLI चलाएं और प्रारंभिक कॉन्फ़िगरेशन पूरा करें",
        steps: {
          command: {
            title: "कमांड चलाएं",
            description: "शुरू करने के लिए टर्मिनल में gemini कमांड दर्ज करें"
          },
          theme: {
            title: "थीम चुनें",
            description: "पहला चलाना रंग थीम चुनने के लिए कहेगा, अपनी पसंदीदा शैली चुनें"
          },
          auth: {
            title: "प्रमाणीकरण",
            description: "मुफ्त उपयोग कोटा प्राप्त करने के लिए अपने Google खाते से लॉगिन करें"
          }
        }
      },
      firstChat: {
        title: "पहली बातचीत",
        description: "AI के साथ बातचीत शुरू करें",
        examples: {
          greeting: {
            title: "सरल अभिवादन",
            command: "> नमस्ते, क्या आप अपना परिचय दे सकते हैं?",
            description: "बुनियादी बातचीत कार्यक्षमता का परीक्षण करें"
          },
          code: {
            title: "कोड संबंधी प्रश्न",
            command: "> समझाएं कि रिकर्सिव फ़ंक्शन क्या है",
            description: "प्रोग्रामिंग संबंधी प्रश्न पूछें"
          },
          file: {
            title: "फ़ाइल संचालन",
            command: "> @README.md इस फ़ाइल की सामग्री का सारांश दें",
            description: "फ़ाइल सामग्री पढ़ने के लिए @ प्रतीक का उपयोग करें"
          }
        }
      }
    },
    tips: {
      title: "महत्वपूर्ण सुझाव",
      success: {
        title: "सफलता का सुझाव",
        content: "यदि आप Gemini CLI का स्वागत इंटरफ़ेस और प्रॉम्प्ट देखते हैं, तो स्थापना सफल है!"
      },
      warning: {
        title: "महत्वपूर्ण नोट्स",
        content: "पहले उपयोग के लिए प्रमाणीकरण और मॉडल पहुंच के लिए नेटवर्क कनेक्शन की आवश्यकता होती है।"
      },
      info: {
        title: "उपयोग के सुझाव",
        content: "उपलब्ध कमांड और सुविधाओं को देखने के लिए आप कभी भी /help दर्ज कर सकते हैं।"
      }
    },
    commands: {
      help: "सहायता जानकारी और उपलब्ध कमांड दिखाएं",
      clear: "स्क्रीन सामग्री साफ़ करें",
      quit: "Gemini CLI से बाहर निकलें",
      theme: "इंटरफ़ेस थीम बदलें",
      file: "फ़ाइल सामग्री को बातचीत में पढ़ें",
      system: "सिस्टम कमांड निष्पादित करें"
    },
    commandsTitle: "सामान्य कमांड का त्वरित संदर्भ",
    nextSteps: {
      title: "अगले कदम",
      description: "बधाई हो! आपने Gemini CLI का परिचय सफलतापूर्वक पूरा कर लिया है। अब आप और अधिक सुविधाएं सीख सकते हैं:",
      basicCommands: "बुनियादी कमांड सीखें",
      fileOperations: "फ़ाइल संचालन परिचय",
      backToGuides: "गाइड होम पर वापस जाएं"
    }
  },
  ru: {
    title: "Первое Использование Gemini CLI",
    subtitle: "10-минутный быстрый старт для начала вашего путешествия в ИИ-программирование",
    description: "Этот учебник поможет вам быстро начать работу с Gemini CLI, изучая основные операции и ключевые концепции.",
    meta: {
      level: "Подходит для начинающих",
      duration: "10 минут для завершения"
    },
    prerequisites: {
      title: "Перед Началом",
      nodejs: "Установлен Node.js 18 или выше",
      terminal: "Знакомство с основными операциями командной строки",
      google: "Аккаунт Google (для аутентификации)"
    },
    steps: {
      install: {
        title: "Установить Gemini CLI",
        description: "Выберите подходящий для вас метод установки",
        methods: {
          npx: {
            name: "NPX (Рекомендуется)",
            description: "Установка не требуется, запускает напрямую последнюю версию"
          },
          npm: {
            name: "Глобальная Установка NPM",
            description: "Глобальная установка для использования команды gemini везде"
          },
          homebrew: {
            name: "Homebrew (macOS)",
            description: "Рекомендуется для пользователей macOS, использующих Homebrew"
          }
        }
      },
      firstRun: {
        title: "Первый Запуск",
        description: "Запустите Gemini CLI и завершите начальную настройку",
        steps: {
          command: {
            title: "Выполнить Команду",
            description: "Введите команду gemini в терминале для запуска"
          },
          theme: {
            title: "Выбрать Тему",
            description: "Первый запуск предложит выбрать цветовую тему, выберите предпочитаемый стиль"
          },
          auth: {
            title: "Аутентификация",
            description: "Войдите с вашим аккаунтом Google для получения бесплатной квоты использования"
          }
        }
      },
      firstChat: {
        title: "Первый Разговор",
        description: "Начните взаимодействие с ИИ",
        examples: {
          greeting: {
            title: "Простое Приветствие",
            command: "> Привет, можете представиться?",
            description: "Протестируйте базовую функциональность разговора"
          },
          code: {
            title: "Вопросы о Коде",
            command: "> Объясните, что такое рекурсивная функция",
            description: "Задавайте вопросы, связанные с программированием"
          },
          file: {
            title: "Операции с Файлами",
            command: "> @README.md резюмируйте содержимое этого файла",
            description: "Используйте символ @ для чтения содержимого файлов"
          }
        }
      }
    },
    tips: {
      title: "Важные Советы",
      success: {
        title: "Совет об Успехе",
        content: "Если вы видите приветственный интерфейс Gemini CLI и приглашение, установка прошла успешно!"
      },
      warning: {
        title: "Важные Заметки",
        content: "Первое использование требует сетевого подключения для аутентификации и доступа к модели."
      },
      info: {
        title: "Советы по Использованию",
        content: "Вы можете ввести /help в любое время, чтобы увидеть доступные команды и функции."
      }
    },
    commands: {
      help: "Показать справочную информацию и доступные команды",
      clear: "Очистить содержимое экрана",
      quit: "Выйти из Gemini CLI",
      theme: "Изменить тему интерфейса",
      file: "Прочитать содержимое файла в разговор",
      system: "Выполнить системные команды"
    },
    commandsTitle: "Быстрая Справка по Общим Командам",
    nextSteps: {
      title: "Следующие Шаги",
      description: "Поздравляем! Вы успешно завершили введение в Gemini CLI. Теперь вы можете продолжить изучение дополнительных функций:",
      basicCommands: "Изучить Основные Команды",
      fileOperations: "Введение в Операции с Файлами",
      backToGuides: "Вернуться на Главную Руководств"
    }
  }
};

// Function to apply remaining translations
function applyRemainingTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = remainingTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No remaining translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesGettingStarted with professional translation
    data.guidesGettingStarted = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied remaining translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const gettingStarted = newData.guidesGettingStarted;
    console.log(`   - Title: "${gettingStarted?.title || 'N/A'}"`);
    console.log(`   - Steps: ${Object.keys(gettingStarted?.steps || {}).length}`);
    console.log(`   - Commands: ${Object.keys(gettingStarted?.commands || {}).length}`);
    
  } catch (error) {
    console.error(`❌ Error applying remaining translations for ${langCode}:`, error.message);
  }
}

// Apply remaining translations
console.log('🌐 Applying remaining getting-started translations...\n');

Object.keys(remainingTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    ru: 'Russian'
  };
  
  console.log(`Applying remaining translations for ${langNames[langCode]}...`);
  applyRemainingTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ All remaining getting-started translations applied!');
console.log('🎯 Hindi and Russian now have complete professional content.');
