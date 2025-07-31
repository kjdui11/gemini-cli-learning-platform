const fs = require('fs');
const path = require('path');

// Additional Docs translations for Spanish and Russian
const additionalTranslations = {
  es: {
    title: 'Documentación para Desarrolladores',
    subtitle: 'Profundice en los detalles técnicos de Gemini CLI, aprenda a extender funcionalidades, integrar el protocolo MCP y contribuir al proyecto de código abierto.',
    quickNav: {
      title: 'Navegación Rápida',
      subtitle: 'Acceso rápido a recursos de desarrollo comúnmente utilizados',
      links: [
        {
          title: 'Repositorio GitHub',
          description: 'Ver código fuente y enviar problemas',
          href: 'https://github.com/google-gemini/gemini-cli',
          external: true
        },
        {
          title: 'Referencia API',
          description: 'Documentación API completa',
          href: '/docs/api-reference',
          external: false
        },
        {
          title: 'Ejemplos de Código',
          description: 'Ejemplos de código prácticos y plantillas',
          href: '/docs/examples',
          external: false
        },
        {
          title: 'Registro de Cambios',
          description: 'Actualizaciones de versión y registros de cambios',
          href: '/docs/changelog',
          external: false
        }
      ]
    },
    techSpecs: {
      title: 'Especificaciones Técnicas',
      subtitle: 'Aprenda sobre las características técnicas de Gemini CLI y el alcance del soporte',
      categories: [
        {
          category: 'Lenguajes Soportados',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
        },
        {
          category: 'Soporte de Plataforma',
          items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
        },
        {
          category: 'Métodos de Integración',
          items: ['Interfaz de Línea de Comandos', 'API Node.js', 'API REST', 'WebSocket', 'Protocolo MCP']
        },
        {
          category: 'Tipos de Extensión',
          items: ['Soporte de Lenguaje', 'Integración de Herramientas', 'Comandos Personalizados', 'Extensiones UI', 'Servidores MCP']
        }
      ]
    },
    docSections: {
      title: 'Categorías de Documentación',
      subtitle: 'Documentación técnica detallada organizada por tema',
      sections: [
        {
          id: 'getting-started',
          title: 'Comenzando',
          description: 'Guía de incorporación para desarrolladores y configuración del entorno',
          color: 'from-green-500 to-emerald-600',
          articles: [
            {
              title: 'Configuración del Entorno de Desarrollo',
              description: 'Configurar entorno de desarrollo local y dependencias',
              href: '/docs/development-setup',
              tags: ['Entorno', 'Dependencias']
            },
            {
              title: 'Estructura del Proyecto',
              description: 'Entender la estructura de organización del código de Gemini CLI',
              href: '/docs/project-structure',
              tags: ['Arquitectura', 'Organización']
            },
            {
              title: 'Construcción y Pruebas',
              description: 'Flujo de trabajo de construcción, pruebas y depuración local',
              href: '/docs/build-and-test',
              tags: ['Construcción', 'Pruebas', 'Depuración']
            }
          ]
        },
        {
          id: 'api-reference',
          title: 'Referencia API',
          description: 'Documentación API detallada y descripciones de interfaz',
          color: 'from-blue-500 to-indigo-600',
          articles: [
            {
              title: 'API Core',
              description: 'Interfaces API principales y descripciones de métodos',
              href: '/docs/core-api',
              tags: ['API', 'Core']
            },
            {
              title: 'API Plugin',
              description: 'API de desarrollo de plugins e interfaces de extensión',
              href: '/docs/plugin-api',
              tags: ['Plugin', 'Extensión']
            },
            {
              title: 'API de Configuración',
              description: 'API de gestión de configuración y descripciones de opciones',
              href: '/docs/config-api',
              tags: ['Configuración', 'Ajustes']
            }
          ]
        },
        {
          id: 'mcp-protocol',
          title: 'Protocolo MCP',
          description: 'Guía de integración del Model Context Protocol',
          color: 'from-purple-500 to-pink-600',
          articles: [
            {
              title: 'Introducción al Protocolo MCP',
              description: 'Aprender los conceptos básicos del Model Context Protocol',
              href: '/docs/mcp-introduction',
              tags: ['MCP', 'Protocolo']
            },
            {
              title: 'Implementación del Servidor MCP',
              description: 'Guía completa para crear servidores MCP personalizados',
              href: '/docs/mcp-server',
              tags: ['MCP', 'Servidor', 'Implementación']
            },
            {
              title: 'Integración del Cliente MCP',
              description: 'Integrar funcionalidad del cliente MCP en aplicaciones',
              href: '/docs/mcp-client',
              tags: ['MCP', 'Cliente', 'Integración']
            }
          ]
        },
        {
          id: 'extensions',
          title: 'Desarrollo de Extensiones',
          description: 'Crear extensiones y plugins personalizados',
          color: 'from-orange-500 to-red-600',
          articles: [
            {
              title: 'Arquitectura de Extensiones',
              description: 'Entender el diseño y arquitectura del sistema de extensiones',
              href: '/docs/extension-architecture',
              tags: ['Extensión', 'Arquitectura']
            },
            {
              title: 'Creando Tu Primera Extensión',
              description: 'Construir extensiones personalizadas desde cero',
              href: '/docs/first-extension',
              tags: ['Extensión', 'Tutorial']
            },
            {
              title: 'Guía de Publicación de Extensiones',
              description: 'Mejores prácticas para empaquetar y publicar extensiones',
              href: '/docs/extension-publishing',
              tags: ['Extensión', 'Publicación']
            }
          ]
        },
        {
          id: 'contributing',
          title: 'Guía de Contribución',
          description: 'Participar en el desarrollo del proyecto y contribución comunitaria',
          color: 'from-teal-500 to-cyan-600',
          articles: [
            {
              title: 'Proceso de Contribución',
              description: 'Aprender cómo contribuir al proyecto',
              href: '/docs/contributing-guide',
              tags: ['Contribución', 'Proceso']
            },
            {
              title: 'Estándares de Codificación',
              description: 'Estilo de código y estándares de calidad',
              href: '/docs/coding-standards',
              tags: ['Estándares', 'Calidad']
            },
            {
              title: 'Guía de Pull Request',
              description: 'Mejores prácticas para crear y enviar Pull Requests',
              href: '/docs/pull-request-guide',
              tags: ['PR', 'Mejores Prácticas']
            }
          ]
        }
      ]
    },
    community: {
      title: 'Comunidad y Soporte',
      subtitle: 'Únete a la comunidad de desarrolladores, obtén ayuda y comparte experiencias',
      joinDiscussion: 'Unirse a la Discusión',
      reportIssue: 'Reportar Problema',
      contribute: 'Contribuir Código'
    }
  },
  ru: {
    title: 'Документация для Разработчиков',
    subtitle: 'Погрузитесь в технические детали Gemini CLI, изучите расширение функциональности, интеграцию протокола MCP и вклад в проект с открытым исходным кодом.',
    quickNav: {
      title: 'Быстрая Навигация',
      subtitle: 'Быстрый доступ к часто используемым ресурсам разработки',
      links: [
        {
          title: 'GitHub Репозиторий',
          description: 'Просмотр исходного кода и отправка проблем',
          href: 'https://github.com/google-gemini/gemini-cli',
          external: true
        },
        {
          title: 'Справочник API',
          description: 'Полная документация API',
          href: '/docs/api-reference',
          external: false
        },
        {
          title: 'Примеры Кода',
          description: 'Практические примеры кода и шаблоны',
          href: '/docs/examples',
          external: false
        },
        {
          title: 'Журнал Изменений',
          description: 'Обновления версий и записи изменений',
          href: '/docs/changelog',
          external: false
        }
      ]
    },
    techSpecs: {
      title: 'Технические Спецификации',
      subtitle: 'Узнайте о технических возможностях Gemini CLI и области поддержки',
      categories: [
        {
          category: 'Поддерживаемые Языки',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
        },
        {
          category: 'Поддержка Платформ',
          items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
        },
        {
          category: 'Методы Интеграции',
          items: ['Интерфейс Командной Строки', 'API Node.js', 'REST API', 'WebSocket', 'Протокол MCP']
        },
        {
          category: 'Типы Расширений',
          items: ['Поддержка Языков', 'Интеграция Инструментов', 'Пользовательские Команды', 'UI Расширения', 'MCP Серверы']
        }
      ]
    },
    docSections: {
      title: 'Категории Документации',
      subtitle: 'Подробная техническая документация, организованная по темам',
      sections: [
        {
          id: 'getting-started',
          title: 'Начало Работы',
          description: 'Руководство по адаптации разработчиков и настройке среды',
          color: 'from-green-500 to-emerald-600',
          articles: [
            {
              title: 'Настройка Среды Разработки',
              description: 'Настройка локальной среды разработки и зависимостей',
              href: '/docs/development-setup',
              tags: ['Среда', 'Зависимости']
            },
            {
              title: 'Структура Проекта',
              description: 'Понимание структуры организации кода Gemini CLI',
              href: '/docs/project-structure',
              tags: ['Архитектура', 'Организация']
            },
            {
              title: 'Сборка и Тестирование',
              description: 'Рабочий процесс локальной сборки, тестирования и отладки',
              href: '/docs/build-and-test',
              tags: ['Сборка', 'Тестирование', 'Отладка']
            }
          ]
        },
        {
          id: 'api-reference',
          title: 'Справочник API',
          description: 'Подробная документация API и описания интерфейсов',
          color: 'from-blue-500 to-indigo-600',
          articles: [
            {
              title: 'Core API',
              description: 'Основные интерфейсы API и описания методов',
              href: '/docs/core-api',
              tags: ['API', 'Ядро']
            },
            {
              title: 'Plugin API',
              description: 'API разработки плагинов и интерфейсы расширений',
              href: '/docs/plugin-api',
              tags: ['Плагин', 'Расширение']
            },
            {
              title: 'Configuration API',
              description: 'API управления конфигурацией и описания опций',
              href: '/docs/config-api',
              tags: ['Конфигурация', 'Настройки']
            }
          ]
        },
        {
          id: 'mcp-protocol',
          title: 'Протокол MCP',
          description: 'Руководство по интеграции Model Context Protocol',
          color: 'from-purple-500 to-pink-600',
          articles: [
            {
              title: 'Введение в Протокол MCP',
              description: 'Изучение основных концепций Model Context Protocol',
              href: '/docs/mcp-introduction',
              tags: ['MCP', 'Протокол']
            },
            {
              title: 'Реализация MCP Сервера',
              description: 'Полное руководство по созданию пользовательских MCP серверов',
              href: '/docs/mcp-server',
              tags: ['MCP', 'Сервер', 'Реализация']
            },
            {
              title: 'Интеграция MCP Клиента',
              description: 'Интеграция функциональности MCP клиента в приложения',
              href: '/docs/mcp-client',
              tags: ['MCP', 'Клиент', 'Интеграция']
            }
          ]
        },
        {
          id: 'extensions',
          title: 'Разработка Расширений',
          description: 'Создание пользовательских расширений и плагинов',
          color: 'from-orange-500 to-red-600',
          articles: [
            {
              title: 'Архитектура Расширений',
              description: 'Понимание дизайна и архитектуры системы расширений',
              href: '/docs/extension-architecture',
              tags: ['Расширение', 'Архитектура']
            },
            {
              title: 'Создание Первого Расширения',
              description: 'Построение пользовательских расширений с нуля',
              href: '/docs/first-extension',
              tags: ['Расширение', 'Учебник']
            },
            {
              title: 'Руководство по Публикации Расширений',
              description: 'Лучшие практики упаковки и публикации расширений',
              href: '/docs/extension-publishing',
              tags: ['Расширение', 'Публикация']
            }
          ]
        },
        {
          id: 'contributing',
          title: 'Руководство по Вкладу',
          description: 'Участие в разработке проекта и вкладе сообщества',
          color: 'from-teal-500 to-cyan-600',
          articles: [
            {
              title: 'Процесс Вклада',
              description: 'Изучение того, как внести вклад в проект',
              href: '/docs/contributing-guide',
              tags: ['Вклад', 'Процесс']
            },
            {
              title: 'Стандарты Кодирования',
              description: 'Стиль кода и стандарты качества',
              href: '/docs/coding-standards',
              tags: ['Стандарты', 'Качество']
            },
            {
              title: 'Руководство по Pull Request',
              description: 'Лучшие практики создания и отправки Pull Requests',
              href: '/docs/pull-request-guide',
              tags: ['PR', 'Лучшие Практики']
            }
          ]
        }
      ]
    },
    community: {
      title: 'Сообщество и Поддержка',
      subtitle: 'Присоединяйтесь к сообществу разработчиков, получайте помощь и делитесь опытом',
      joinDiscussion: 'Присоединиться к Обсуждению',
      reportIssue: 'Сообщить о Проблеме',
      contribute: 'Внести Вклад в Код'
    }
  }
};

// Function to add translations to DocsContent component
function addDocsTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', 'DocsContent.tsx');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the position to insert new translations (before the closing bracket of translations object)
    const insertPosition = content.lastIndexOf('    }\n    return translations[locale] || translations.en');
    
    if (insertPosition === -1) {
      console.error('❌ Could not find insertion point in DocsContent.tsx');
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
    console.log('✅ Successfully added Spanish and Russian Docs translations');
    
  } catch (error) {
    console.error('❌ Error adding Docs translations:', error.message);
  }
}

// Run the function
console.log('🚀 Adding Docs translations for Spanish and Russian...\n');
addDocsTranslations();
console.log('\n🎯 Docs translations update completed!');
