const fs = require('fs');
const path = require('path');

// Professional translations for additional languages
const additionalTranslations = {
  es: {
    examples: [
      {
        title: "Procesamiento por Lotes de Proyecto JavaScript",
        description: "Análisis integral y optimización de todos los archivos JavaScript en un proyecto complejo",
        code: "# Leer y analizar todos los archivos JS de forma recursiva\ngemini read \"src/**/*.js\" --analyze --depth=full --output=analysis.json\n\n# Formatear código según estándares modernos\ngemini format \"src/**/*.js\" --style=prettier --config=.prettierrc\n\n# Generar documentación automática con JSDoc\ngemini doc \"src/**/*.js\" --format=jsdoc --output=docs/ --include-private",
        explanation: "Este ejemplo muestra un pipeline completo de análisis de proyecto. El parámetro --analyze con --depth=full realiza un análisis integral de calidad de código, incluyendo mediciones de complejidad y verificaciones de seguridad. La opción --config permite reglas de formateo específicas del proyecto, mientras que --include-private incluye también funciones privadas en la documentación."
      },
      {
        title: "Gestión de Archivos de Configuración",
        description: "Gestión profesional y validación de archivos de configuración de proyecto",
        code: "# Encontrar todos los archivos de configuración en el proyecto\ngemini list . --type=config --recursive --include-hidden\n\n# Respaldo de seguridad antes de cambios críticos\ngemini backup config/*.{json,yaml,toml} --timestamp --compress\n\n# Validar configuración contra esquema\ngemini validate config/app.json --schema=schemas/app-schema.json --strict",
        explanation: "La gestión sistemática de configuración es crucial para la estabilidad del proyecto. El parámetro --include-hidden encuentra también archivos de configuración ocultos como .env. La opción --timestamp crea respaldos con marca de tiempo, mientras que --strict realiza validación estricta del esquema y reporta incluso las desviaciones más pequeñas."
      },
      {
        title: "Análisis y Rotación de Archivos de Log",
        description: "Procesamiento eficiente y gestión de archivos de log grandes para monitoreo del sistema",
        code: "# Procesar archivo de log grande en bloques para ahorrar memoria\ngemini read logs/application.log --chunk-size=10MB --stream\n\n# Extraer y categorizar errores críticos\ngemini search logs/ --pattern=\"(ERROR|FATAL|CRITICAL)\" --context=5 --output=errores-criticos.log\n\n# Rotación inteligente de logs con compresión\ngemini rotate logs/application.log --max-size=500MB --keep=10 --compress=gzip",
        explanation: "La eficiencia es crucial en el análisis de logs. El parámetro --stream permite procesamiento en tiempo real sin carga completa en memoria. --context=5 muestra 5 líneas antes y después de cada coincidencia para mejor contexto. La rotación con --compress=gzip ahorra considerablemente espacio de almacenamiento para logs archivados."
      }
    ],
    bestPractices: [
      {
        type: "success",
        title: "Implementar Estrategia de Respaldo Sistemática",
        content: "Desarrolle una estrategia de respaldo integral para todos los archivos críticos. Use respaldos automatizados con la opción --backup, implemente la regla 3-2-1 (3 copias, 2 medios diferentes, 1 copia externa) y pruebe regularmente la recuperabilidad de sus respaldos. Use versionado para archivos de configuración importantes."
      },
      {
        type: "warning",
        title: "Priorizar Permisos y Seguridad",
        content: "Implemente consistentemente el principio de menor privilegio. Verifique permisos de archivos antes de cada operación con --check-permissions, evite derechos root excepto en caso de absoluta necesidad, y use grupos de usuarios para control de acceso granular. Active audit logging para todas las operaciones de archivos críticas en entornos de producción."
      },
      {
        type: "info",
        title: "Usar Control de Versiones Estratégicamente",
        content: "Integre todas las operaciones de archivos de manera transparente en su sistema de control de versiones. Cree mensajes de commit descriptivos con formatos estructurados, use ramas de características para cambios experimentales, e implemente hooks pre-commit para validación automática. Use .gitignore estratégicamente para archivos temporales y generados."
      },
      {
        type: "error",
        title: "Asegurar Operaciones Destructivas",
        content: "Trate todas las operaciones destructivas con la máxima precaución. Use siempre --dry-run para pruebas, implemente diálogos de confirmación para acciones críticas, y manténgase estrictamente alejado de directorios del sistema. Cree planes de rollback para todas las operaciones mayores y documente procedimientos de emergencia para recuperación de datos."
      }
    ],
    nextSteps: {
      title: "Próximos Pasos",
      description: "Después de dominar las operaciones de archivos, amplía tus habilidades con estos temas avanzados:",
      integration: "Integración del Sistema",
      codeRefactoring: "Refactorización de Código",
      backToGuides: "Volver a las Guías"
    }
  },
  hi: {
    examples: [
      {
        title: "JavaScript प्रोजेक्ट बैच प्रोसेसिंग",
        description: "जटिल प्रोजेक्ट में सभी JavaScript फ़ाइलों का व्यापक विश्लेषण और अनुकूलन",
        code: "# सभी JS फ़ाइलों को पुनरावर्ती रूप से पढ़ें और विश्लेषण करें\ngemini read \"src/**/*.js\" --analyze --depth=full --output=analysis.json\n\n# आधुनिक मानकों के अनुसार कोड को फॉर्मेट करें\ngemini format \"src/**/*.js\" --style=prettier --config=.prettierrc\n\n# JSDoc के साथ स्वचालित दस्तावेज़ीकरण उत्पन्न करें\ngemini doc \"src/**/*.js\" --format=jsdoc --output=docs/ --include-private",
        explanation: "यह उदाहरण एक पूर्ण प्रोजेक्ट विश्लेषण पाइपलाइन दिखाता है। --analyze पैरामीटर --depth=full के साथ जटिलता माप और सुरक्षा सत्यापन सहित व्यापक कोड गुणवत्ता विश्लेषण करता है। --config विकल्प प्रोजेक्ट-विशिष्ट फॉर्मेटिंग नियमों की अनुमति देता है, जबकि --include-private निजी फ़ंक्शन को भी दस्तावेज़ीकरण में शामिल करता है।"
      },
      {
        title: "कॉन्फ़िगरेशन फ़ाइल प्रबंधन",
        description: "प्रोजेक्ट कॉन्फ़िगरेशन फ़ाइलों का पेशेवर प्रबंधन और सत्यापन",
        code: "# प्रोजेक्ट में सभी कॉन्फ़िगरेशन फ़ाइलें खोजें\ngemini list . --type=config --recursive --include-hidden\n\n# महत्वपूर्ण परिवर्तनों से पहले सुरक्षा बैकअप\ngemini backup config/*.{json,yaml,toml} --timestamp --compress\n\n# स्कीमा के विरुद्ध कॉन्फ़िगरेशन को मान्य करें\ngemini validate config/app.json --schema=schemas/app-schema.json --strict",
        explanation: "व्यवस्थित कॉन्फ़िगरेशन प्रबंधन प्रोजेक्ट स्थिरता के लिए महत्वपूर्ण है। --include-hidden पैरामीटर .env जैसी छुपी हुई कॉन्फ़िगरेशन फ़ाइलें भी खोजता है। --timestamp विकल्प टाइमस्टैम्प के साथ बैकअप बनाता है, जबकि --strict सख्त स्कीमा सत्यापन करता है और सबसे छोटे विचलन की भी रिपोर्ट करता है।"
      },
      {
        title: "लॉग फ़ाइल विश्लेषण और रोटेशन",
        description: "सिस्टम निगरानी के लिए बड़ी लॉग फ़ाइलों की कुशल प्रसंस्करण और प्रबंधन",
        code: "# मेमोरी बचाने के लिए बड़ी लॉग फ़ाइल को ब्लॉक में प्रोसेस करें\ngemini read logs/application.log --chunk-size=10MB --stream\n\n# महत्वपूर्ण त्रुटियों को निकालें और वर्गीकृत करें\ngemini search logs/ --pattern=\"(ERROR|FATAL|CRITICAL)\" --context=5 --output=महत्वपूर्ण-त्रुटियां.log\n\n# संपीड़न के साथ बुद्धिमान लॉग रोटेशन\ngemini rotate logs/application.log --max-size=500MB --keep=10 --compress=gzip",
        explanation: "लॉग विश्लेषण में दक्षता महत्वपूर्ण है। --stream पैरामीटर मेमोरी में पूर्ण लोडिंग के बिना रीयल-टाइम प्रसंस्करण की अनुमति देता है। --context=5 बेहतर संदर्भ के लिए प्रत्येक मैच के पहले और बाद में 5 लाइनें दिखाता है। --compress=gzip के साथ रोटेशन संग्रहीत लॉग के लिए भंडारण स्थान की काफी बचत करता है।"
      }
    ],
    bestPractices: [
      {
        type: "success",
        title: "व्यवस्थित बैकअप रणनीति लागू करें",
        content: "सभी महत्वपूर्ण फ़ाइलों के लिए एक व्यापक बैकअप रणनीति विकसित करें। --backup विकल्प के साथ स्वचालित बैकअप का उपयोग करें, 3-2-1 नियम (3 प्रतियां, 2 अलग मीडिया, 1 बाहरी प्रति) लागू करें और अपने बैकअप की पुनर्प्राप्ति क्षमता का नियमित परीक्षण करें। महत्वपूर्ण कॉन्फ़िगरेशन फ़ाइलों के लिए वर्जनिंग का उपयोग करें।"
      },
      {
        type: "warning",
        title: "अनुमतियों और सुरक्षा को प्राथमिकता दें",
        content: "न्यूनतम विशेषाधिकार के सिद्धांत को लगातार लागू करें। --check-permissions के साथ प्रत्येक ऑपरेशन से पहले फ़ाइल अनुमतियों की जांच करें, पूर्ण आवश्यकता के अलावा रूट अधिकारों से बचें, और विस्तृत पहुंच नियंत्रण के लिए उपयोगकर्ता समूहों का उपयोग करें। उत्पादन वातावरण में सभी महत्वपूर्ण फ़ाइल ऑपरेशन के लिए ऑडिट लॉगिंग सक्रिय करें।"
      },
      {
        type: "info",
        title: "संस्करण नियंत्रण का रणनीतिक उपयोग",
        content: "सभी फ़ाइल ऑपरेशन को अपने संस्करण नियंत्रण सिस्टम में पारदर्शी रूप से एकीकृत करें। संरचित प्रारूपों के साथ वर्णनात्मक कमिट संदेश बनाएं, प्रयोगात्मक परिवर्तनों के लिए फीचर शाखाओं का उपयोग करें, और स्वचालित सत्यापन के लिए प्री-कमिट हुक लागू करें। अस्थायी और उत्पन्न फ़ाइलों के लिए .gitignore का रणनीतिक उपयोग करें।"
      },
      {
        type: "error",
        title: "विनाशकारी ऑपरेशन को सुरक्षित करें",
        content: "सभी विनाशकारी ऑपरेशन को अत्यधिक सावधानी के साथ संभालें। परीक्षण के लिए हमेशा --dry-run का उपयोग करें, महत्वपूर्ण कार्यों के लिए पुष्टिकरण संवाद लागू करें, और सिस्टम निर्देशिकाओं से सख्ती से दूर रहें। सभी प्रमुख ऑपरेशन के लिए रोलबैक योजनाएं बनाएं और डेटा पुनर्प्राप्ति के लिए आपातकालीन प्रक्रियाओं का दस्तावेजीकरण करें।"
      }
    ],
    nextSteps: {
      title: "अगले कदम",
      description: "फ़ाइल संचालन में महारत हासिल करने के बाद, इन उन्नत विषयों के साथ अपने कौशल का विस्तार करें:",
      integration: "सिस्टम एकीकरण",
      codeRefactoring: "कोड रिफैक्टरिंग",
      backToGuides: "गाइड पर वापस जाएं"
    }
  },
  ru: {
    examples: [
      {
        title: "Пакетная Обработка JavaScript Проекта",
        description: "Комплексный анализ и оптимизация всех JavaScript файлов в сложном проекте",
        code: "# Читать и анализировать все JS файлы рекурсивно\ngemini read \"src/**/*.js\" --analyze --depth=full --output=analysis.json\n\n# Форматировать код согласно современным стандартам\ngemini format \"src/**/*.js\" --style=prettier --config=.prettierrc\n\n# Генерировать автоматическую документацию с JSDoc\ngemini doc \"src/**/*.js\" --format=jsdoc --output=docs/ --include-private",
        explanation: "Этот пример показывает полный конвейер анализа проекта. Параметр --analyze с --depth=full выполняет комплексный анализ качества кода, включая измерения сложности и проверки безопасности. Опция --config позволяет использовать специфичные для проекта правила форматирования, в то время как --include-private включает также приватные функции в документацию."
      },
      {
        title: "Управление Файлами Конфигурации",
        description: "Профессиональное управление и валидация файлов конфигурации проекта",
        code: "# Найти все файлы конфигурации в проекте\ngemini list . --type=config --recursive --include-hidden\n\n# Резервное копирование перед критическими изменениями\ngemini backup config/*.{json,yaml,toml} --timestamp --compress\n\n# Валидировать конфигурацию против схемы\ngemini validate config/app.json --schema=schemas/app-schema.json --strict",
        explanation: "Систематическое управление конфигурацией критично для стабильности проекта. Параметр --include-hidden находит также скрытые файлы конфигурации как .env. Опция --timestamp создает резервные копии с временными метками, в то время как --strict выполняет строгую валидацию схемы и сообщает даже о малейших отклонениях."
      },
      {
        title: "Анализ и Ротация Лог Файлов",
        description: "Эффективная обработка и управление большими лог файлами для системного мониторинга",
        code: "# Обрабатывать большой лог файл блоками для экономии памяти\ngemini read logs/application.log --chunk-size=10MB --stream\n\n# Извлекать и категоризировать критические ошибки\ngemini search logs/ --pattern=\"(ERROR|FATAL|CRITICAL)\" --context=5 --output=критические-ошибки.log\n\n# Интеллектуальная ротация логов с сжатием\ngemini rotate logs/application.log --max-size=500MB --keep=10 --compress=gzip",
        explanation: "Эффективность критична в анализе логов. Параметр --stream позволяет обработку в реальном времени без полной загрузки в память. --context=5 показывает 5 строк до и после каждого совпадения для лучшего контекста. Ротация с --compress=gzip значительно экономит место хранения для архивированных логов."
      }
    ],
    bestPractices: [
      {
        type: "success",
        title: "Реализовать Систематическую Стратегию Резервного Копирования",
        content: "Разработайте комплексную стратегию резервного копирования для всех критических файлов. Используйте автоматизированные резервные копии с опцией --backup, реализуйте правило 3-2-1 (3 копии, 2 разных носителя, 1 внешняя копия) и регулярно тестируйте восстанавливаемость ваших резервных копий. Используйте версионирование для важных файлов конфигурации."
      },
      {
        type: "warning",
        title: "Приоритизировать Разрешения и Безопасность",
        content: "Последовательно реализуйте принцип наименьших привилегий. Проверяйте разрешения файлов перед каждой операцией с --check-permissions, избегайте root прав кроме случаев абсолютной необходимости, и используйте группы пользователей для гранулярного контроля доступа. Активируйте аудит логирование для всех критических файловых операций в продакшн средах."
      },
      {
        type: "info",
        title: "Стратегически Использовать Контроль Версий",
        content: "Интегрируйте все файловые операции прозрачно в вашу систему контроля версий. Создавайте описательные commit сообщения со структурированными форматами, используйте feature ветки для экспериментальных изменений, и реализуйте pre-commit хуки для автоматической валидации. Используйте .gitignore стратегически для временных и сгенерированных файлов."
      },
      {
        type: "error",
        title: "Обезопасить Деструктивные Операции",
        content: "Обращайтесь со всеми деструктивными операциями с максимальной осторожностью. Всегда используйте --dry-run для тестов, реализуйте диалоги подтверждения для критических действий, и строго держитесь подальше от системных директорий. Создавайте планы отката для всех крупных операций и документируйте экстренные процедуры для восстановления данных."
      }
    ],
    nextSteps: {
      title: "Следующие Шаги",
      description: "После освоения файловых операций расширьте свои навыки с этими продвинутыми темами:",
      integration: "Системная Интеграция",
      codeRefactoring: "Рефакторинг Кода",
      backToGuides: "Вернуться к Руководствам"
    }
  }
};

// Function to apply additional translations
function applyAdditionalTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = additionalTranslations[langCode];
    
    if (!translations || !data.guidesFileOperations) {
      console.log(`⚠️  No additional translations or guidesFileOperations found for ${langCode}`);
      return;
    }
    
    // Apply examples
    if (translations.examples) {
      translations.examples.forEach((example, index) => {
        if (data.guidesFileOperations.examples[index]) {
          Object.assign(data.guidesFileOperations.examples[index], example);
        }
      });
    }
    
    // Apply best practices
    if (translations.bestPractices) {
      translations.bestPractices.forEach((practice, index) => {
        if (data.guidesFileOperations.bestPractices[index]) {
          Object.assign(data.guidesFileOperations.bestPractices[index], practice);
        }
      });
    }
    
    // Apply next steps
    if (translations.nextSteps) {
      Object.assign(data.guidesFileOperations.nextSteps, translations.nextSteps);
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied additional translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const fileOps = newData.guidesFileOperations;
    console.log(`   - Examples: ${fileOps.examples?.length || 0}`);
    console.log(`   - Best practices: ${fileOps.bestPractices?.length || 0}`);
    console.log(`   - First example title: "${fileOps.examples?.[0]?.title?.substring(0, 30) || 'N/A'}..."`);
    console.log(`   - First best practice title: "${fileOps.bestPractices?.[0]?.title?.substring(0, 30) || 'N/A'}..."`);
    
  } catch (error) {
    console.error(`❌ Error applying additional translations for ${langCode}:`, error.message);
  }
}

// Apply additional translations
console.log('🌐 Applying additional professional translations...\n');

Object.keys(additionalTranslations).forEach(langCode => {
  const langNames = {
    es: 'Spanish',
    hi: 'Hindi',
    ru: 'Russian'
  };
  
  console.log(`Applying additional translations for ${langNames[langCode]}...`);
  applyAdditionalTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ All additional translations applied!');
console.log('🎯 Spanish, Hindi, and Russian now have native professional content.');
