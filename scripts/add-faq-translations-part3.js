const fs = require('fs');
const path = require('path');

// Additional FAQ translations for remaining languages (Spanish, Russian)
const additionalTranslations = {
  es: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Preguntas comunes y soluciones para usar Gemini CLI. Encuentra respuestas rápidas para ayudarte a resolver problemas.',
    quickNav: {
      title: 'Navegación Rápida',
      subtitle: '¿No encuentras una respuesta? Prueba estos recursos',
      links: {
        installation: { title: 'Guía de Instalación', desc: 'Pasos de instalación detallados' },
        guides: { title: 'Guías de Usuario', desc: 'De principiante a avanzado' },
        commands: { title: 'Referencia de Comandos', desc: 'Lista completa de comandos' },
        issues: { title: 'Reportar Problemas', desc: 'GitHub Issues' }
      }
    },
    contact: {
      title: '¿Tienes Otras Preguntas?',
      subtitle: 'Si no has encontrado una respuesta, no dudes en contactarnos a través de los siguientes medios',
      discussion: 'Discusión Comunitaria',
      submit: 'Enviar Problema'
    },
    faqData: [
      {
        category: 'Instalación y Configuración',
        questions: [
          {
            q: '¿Cómo instalar Gemini CLI?',
            a: 'Asegúrate de que Node.js 20+ esté instalado, luego usa npx @google/generative-ai-cli para ejecutar directamente, o npm install -g @google/generative-ai-cli para instalación global.'
          },
          {
            q: '¿Qué hacer cuando se encuentran errores de permisos durante la instalación?',
            a: 'Los usuarios de Windows deben ejecutar como administrador, los usuarios de macOS/Linux usan sudo o configuran el directorio global de npm al directorio del usuario. Se recomienda usar npx para evitar problemas de permisos.'
          },
          {
            q: '¿Cómo configurar la autenticación de cuenta de Google?',
            a: 'Ejecuta npx @google/generative-ai-cli auth, inicia sesión en tu cuenta de Google en el navegador y autoriza el acceso, luego usa auth status para verificar el estado de autenticación.'
          }
        ]
      },
      {
        category: 'Problemas de Uso',
        questions: [
          {
            q: '¿Cómo iniciar la primera conversación?',
            a: 'Usa npx @google/generative-ai-cli chat para iniciar conversación interactiva, o usa ask "pregunta" para preguntar directamente, también puedes usar el comando analyze para analizar archivos.'
          },
          {
            q: '¿Qué lenguajes de programación son compatibles?',
            a: 'Gemini CLI soporta lenguajes de programación principales como JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, así como HTML/CSS, SQL, Markdown, etc.'
          },
          {
            q: '¿Cómo mejorar la calidad de las respuestas de IA?',
            a: 'Proporciona contexto claro, usa descripciones específicas de preguntas, haz preguntas complejas paso a paso, y verifica e itera los resultados generados.'
          }
        ]
      },
      {
        category: 'Configuración y Personalización',
        questions: [
          {
            q: '¿Cómo personalizar la configuración de CLI?',
            a: 'Usa config list para ver la configuración, config set para establecer parámetros (como modelo, temperatura, tokens máximos), config reset para restablecer a valores predeterminados.'
          },
          {
            q: '¿Cómo integrar en flujos de trabajo existentes?',
            a: 'Puede integrarse a través de integración de scripts, Git Hooks, pipelines CI/CD, o creando atajos personalizados y tareas en editores.'
          },
          {
            q: '¿Cómo usar el protocolo MCP para extender funcionalidad?',
            a: 'MCP es un protocolo de comunicación de modelo de IA estandarizado que soporta integración de herramientas personalizadas como consultas de base de datos, llamadas de API, operaciones de archivos.'
          }
        ]
      },
      {
        category: 'Solución de Problemas',
        questions: [
          {
            q: '¿Qué hacer cuando los comandos fallan o no responden?',
            a: 'Verifica la conexión de red, verifica el estado de autenticación, actualiza a la última versión, limpia la caché de npm, usa --verbose para ver información detallada de errores.'
          },
          {
            q: '¿Cómo resolver problemas de cuota o límite de API?',
            a: 'Entiende los tipos de límites, optimiza la frecuencia de uso y precisión de prompts, verifica el uso en Google AI Studio, considera actualizar a planes de pago.'
          },
          {
            q: '¿Cuáles son las consideraciones para uso empresarial?',
            a: 'Presta atención a la seguridad (no incluyas información sensible), configura proxy de red, asegura el cumplimiento, establece pautas de uso del equipo y mejores prácticas.'
          }
        ]
      }
    ]
  },
  ru: {
    title: 'Часто Задаваемые Вопросы',
    subtitle: 'Общие вопросы и решения по использованию Gemini CLI. Найдите быстрые ответы, которые помогут решить проблемы.',
    quickNav: {
      title: 'Быстрая Навигация',
      subtitle: 'Не нашли ответ? Попробуйте эти ресурсы',
      links: {
        installation: { title: 'Руководство по Установке', desc: 'Подробные шаги установки' },
        guides: { title: 'Руководства Пользователя', desc: 'От новичка до продвинутого' },
        commands: { title: 'Справочник Команд', desc: 'Полный список команд' },
        issues: { title: 'Сообщить о Проблеме', desc: 'GitHub Issues' }
      }
    },
    contact: {
      title: 'Есть Другие Вопросы?',
      subtitle: 'Если вы не нашли ответ, не стесняйтесь обращаться к нам следующими способами',
      discussion: 'Обсуждение в Сообществе',
      submit: 'Отправить Проблему'
    },
    faqData: [
      {
        category: 'Установка и Настройка',
        questions: [
          {
            q: 'Как установить Gemini CLI?',
            a: 'Убедитесь, что Node.js 20+ установлен, затем используйте npx @google/generative-ai-cli для прямого запуска, или npm install -g @google/generative-ai-cli для глобальной установки.'
          },
          {
            q: 'Что делать при возникновении ошибок разрешений во время установки?',
            a: 'Пользователи Windows должны запускать от имени администратора, пользователи macOS/Linux используют sudo или настраивают глобальную директорию npm в пользовательскую директорию. Рекомендуется использовать npx для избежания проблем с разрешениями.'
          },
          {
            q: 'Как настроить аутентификацию аккаунта Google?',
            a: 'Запустите npx @google/generative-ai-cli auth, войдите в свой аккаунт Google в браузере и авторизуйте доступ, затем используйте auth status для проверки статуса аутентификации.'
          }
        ]
      },
      {
        category: 'Проблемы Использования',
        questions: [
          {
            q: 'Как начать первый разговор?',
            a: 'Используйте npx @google/generative-ai-cli chat для начала интерактивного разговора, или используйте ask "вопрос" для прямого вопроса, также можете использовать команду analyze для анализа файлов.'
          },
          {
            q: 'Какие языки программирования поддерживаются?',
            a: 'Gemini CLI поддерживает основные языки программирования, такие как JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, а также HTML/CSS, SQL, Markdown и др.'
          },
          {
            q: 'Как улучшить качество ответов ИИ?',
            a: 'Предоставляйте четкий контекст, используйте конкретные описания вопросов, задавайте сложные вопросы пошагово, и проверяйте и итерируйте сгенерированные результаты.'
          }
        ]
      },
      {
        category: 'Конфигурация и Настройка',
        questions: [
          {
            q: 'Как настроить конфигурацию CLI?',
            a: 'Используйте config list для просмотра конфигурации, config set для установки параметров (таких как модель, температура, максимальные токены), config reset для сброса к значениям по умолчанию.'
          },
          {
            q: 'Как интегрировать в существующие рабочие процессы?',
            a: 'Может быть интегрирован через интеграцию скриптов, Git Hooks, CI/CD пайплайны, или создавая пользовательские ярлыки и задачи в редакторах.'
          },
          {
            q: 'Как использовать протокол MCP для расширения функциональности?',
            a: 'MCP - это стандартизированный протокол связи с моделями ИИ, который поддерживает интеграцию пользовательских инструментов, таких как запросы к базе данных, вызовы API, операции с файлами.'
          }
        ]
      },
      {
        category: 'Устранение Неполадок',
        questions: [
          {
            q: 'Что делать, когда команды не выполняются или не отвечают?',
            a: 'Проверьте сетевое подключение, проверьте статус аутентификации, обновите до последней версии, очистите кэш npm, используйте --verbose для просмотра подробной информации об ошибках.'
          },
          {
            q: 'Как решить проблемы с квотой или ограничениями API?',
            a: 'Поймите типы ограничений, оптимизируйте частоту использования и точность промптов, проверьте использование в Google AI Studio, рассмотрите обновление до платных планов.'
          },
          {
            q: 'Какие соображения для корпоративного использования?',
            a: 'Обратите внимание на безопасность (не включайте конфиденциальную информацию), настройте сетевой прокси, обеспечьте соответствие требованиям, установите руководящие принципы использования команды и лучшие практики.'
          }
        ]
      }
    ]
  }
};

// Function to add translations to FAQContent component
function addFAQTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', 'FAQContent.tsx');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the position to insert new translations (before the closing bracket of translations object)
    const insertPosition = content.lastIndexOf('    }\n    return translations[locale] || translations.en');
    
    if (insertPosition === -1) {
      console.error('❌ Could not find insertion point in FAQContent.tsx');
      return;
    }
    
    // Generate translation strings for each language
    let translationStrings = '';
    
    Object.keys(additionalTranslations).forEach(langCode => {
      const translation = additionalTranslations[langCode];
      translationStrings += `,\n      ${langCode}: ${JSON.stringify(translation, null, 8).replace(/^/gm, '      ').trim()}`;
    });
    
    // Insert the new translations
    const beforeInsert = content.substring(0, insertPosition);
    const afterInsert = content.substring(insertPosition);
    
    const newContent = beforeInsert + translationStrings + '\n' + afterInsert;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('✅ Successfully added Spanish and Russian FAQ translations');
    
  } catch (error) {
    console.error('❌ Error adding FAQ translations:', error.message);
  }
}

// Run the function
console.log('🚀 Adding FAQ translations for Spanish and Russian...\n');
addFAQTranslations();
console.log('\n🎯 FAQ translations update completed!');
