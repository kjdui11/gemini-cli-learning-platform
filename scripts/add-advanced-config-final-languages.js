const fs = require('fs');
const path = require('path');

// Advanced config translations for final languages
const finalAdvancedConfigTranslations = {
  es: {
    "hero": {
      "title": "Opciones de Configuración Avanzada",
      "subtitle": "Profundiza en las opciones de configuración y personalización avanzadas de Gemini CLI",
      "advanced": "Avanzado",
      "readingTime": "30 min de lectura"
    },
    "overview": {
      "title": "Resumen de Configuración",
      "description": "Domina las opciones de configuración avanzadas de Gemini CLI, incluyendo archivos de configuración TOML, variables de entorno, configuraciones personalizadas y más."
    },
    "configSectionsTitle": "Estructura del Archivo de Configuración",
    "configSectionsDescription": "Aprende sobre diferentes secciones de configuración y sus ajustes",
    "location": "Ubicación",
    "structure": "Estructura",
    "explanation": "Explicación",
    "options": "Opciones",
    "configSections": [
      {
        "id": "toml-config",
        "title": "Archivo de Configuración TOML",
        "description": "Usa el archivo gemini.toml para configuración detallada",
        "color": "from-blue-500 to-indigo-600",
        "content": {
          "location": "Ubicación del archivo de configuración: gemini.toml en el directorio raíz del proyecto",
          "structure": `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"`,
          "explanation": "El archivo TOML permite una configuración estructurada y legible de todos los aspectos de Gemini CLI."
        }
      },
      {
        "id": "env-vars",
        "title": "Variables de Entorno",
        "description": "Configuración rápida a través de variables de entorno",
        "color": "from-green-500 to-emerald-600",
        "content": {
          "explanation": "Las variables de entorno permiten una configuración rápida y flexible",
          "options": [
            "GEMINI_API_KEY: Clave API para autenticación",
            "GEMINI_MODEL: Modelo predeterminado a usar",
            "GEMINI_TEMPERATURE: Parámetro de creatividad",
            "GEMINI_MAX_TOKENS: Número máximo de tokens",
            "GEMINI_CONFIG_PATH: Ruta del archivo de configuración"
          ]
        }
      },
      {
        "id": "model-config",
        "title": "Configuración del Modelo",
        "description": "Configuraciones específicas del modelo de IA",
        "color": "from-indigo-500 to-purple-600",
        "content": {
          "explanation": "Controla el comportamiento y rendimiento del modelo de IA",
          "options": [
            "provider: Proveedor del modelo (google, openai)",
            "name: Nombre específico del modelo",
            "temperature: Creatividad (0.0-2.0)",
            "max_tokens: Límite de tokens de salida",
            "top_p: Muestreo nucleus",
            "frequency_penalty: Penalización de frecuencia"
          ]
        }
      },
      {
        "id": "ui-config",
        "title": "Configuración de Interfaz",
        "description": "Personaliza la interfaz de usuario y experiencia de interacción",
        "color": "from-purple-500 to-pink-600",
        "content": {
          "explanation": "Ajusta la visualización e interacción de la interfaz CLI",
          "options": [
            "theme: Color del tema (light, dark, auto)",
            "show_token_count: Mostrar contador de tokens",
            "auto_save_history: Guardado automático del historial",
            "syntax_highlighting: Resaltado de sintaxis",
            "line_numbers: Mostrar números de línea",
            "word_wrap: Ajuste automático de línea"
          ]
        }
      },
      {
        "id": "tools-config",
        "title": "Configuración de Herramientas",
        "description": "Habilita y configura varias funciones de herramientas",
        "color": "from-orange-500 to-red-600",
        "content": {
          "explanation": "Controla las funciones y permisos de las herramientas CLI",
          "options": [
            "enable_shell: Habilitar ejecución de comandos Shell",
            "enable_file_operations: Habilitar operaciones de archivo",
            "max_file_size: Tamaño máximo de archivo",
            "allowed_extensions: Extensiones de archivo permitidas",
            "blocked_commands: Lista de comandos bloqueados",
            "timeout: Tiempo de espera de ejecución"
          ]
        }
      },
      {
        "id": "security-config",
        "title": "Configuración de Seguridad",
        "description": "Configuraciones de seguridad y control de acceso",
        "color": "from-red-500 to-pink-600",
        "content": {
          "explanation": "Configura medidas de seguridad y controles de acceso",
          "options": [
            "enable_audit_log: Habilitar registro de auditoría",
            "restrict_file_access: Restringir acceso a archivos",
            "allowed_directories: Directorios permitidos",
            "require_confirmation: Requerir confirmación",
            "session_timeout: Tiempo de espera de sesión",
            "max_concurrent_sessions: Máximo de sesiones concurrentes"
          ]
        }
      }
    ],
    "environmentVariablesTitle": "Variables de Entorno",
    "environmentVariablesDescription": "Configuración rápida a través de variables de entorno",
    "defaultValue": "Valor Predeterminado",
    "none": "Ninguno",
    "environmentVariables": [
      {
        "name": "GEMINI_API_KEY",
        "description": "Clave API de Google Gemini para autenticación",
        "example": "export GEMINI_API_KEY=tu_clave_api_aqui",
        "default": null
      },
      {
        "name": "GEMINI_MODEL",
        "description": "Nombre del modelo predeterminado a usar",
        "example": "export GEMINI_MODEL=gemini-1.5-pro",
        "default": "gemini-1.5-flash"
      },
      {
        "name": "GEMINI_TEMPERATURE",
        "description": "Parámetro de creatividad del modelo",
        "example": "export GEMINI_TEMPERATURE=0.7",
        "default": "0.9"
      },
      {
        "name": "GEMINI_MAX_TOKENS",
        "description": "Número máximo de tokens de salida",
        "example": "export GEMINI_MAX_TOKENS=8192",
        "default": "4096"
      },
      {
        "name": "GEMINI_CONFIG_PATH",
        "description": "Ruta del archivo de configuración personalizado",
        "example": "export GEMINI_CONFIG_PATH=/ruta/a/config.toml",
        "default": "./gemini.toml"
      }
    ],
    "customizationTitle": "Opciones de Personalización",
    "customizationDescription": "Configuración personalizada para diferentes casos de uso",
    "customizationOptions": [
      {
        "title": "Entorno de Desarrollo",
        "description": "Configuraciones optimizadas para flujos de trabajo de desarrollo",
        "features": [
          "Habilitar resaltado de sintaxis de código",
          "Guardado automático del historial de sesión",
          "Integrar sistemas de control de versiones",
          "Plantillas de código personalizadas",
          "Alias de comandos rápidos"
        ]
      },
      {
        "title": "Entorno de Producción",
        "description": "Configuración de seguridad para entornos de producción",
        "features": [
          "Restringir permisos de operación de archivos",
          "Deshabilitar comandos peligrosos",
          "Habilitar registro de auditoría",
          "Establecer límites de uso de recursos",
          "Configurar estrategias de respaldo"
        ]
      },
      {
        "title": "Configuración de Colaboración en Equipo",
        "description": "Configuraciones compartidas para colaboración en equipo",
        "features": [
          "Plantillas de configuración unificadas",
          "Biblioteca de prompts compartida",
          "Estadísticas de uso del equipo",
          "Gestión de permisos",
          "Sincronización de configuración"
        ]
      }
    ],
    "bestPracticesTitle": "Mejores Prácticas",
    "bestPracticesDescription": "Recomendaciones para configuración óptima",
    "bestPractices": [
      {
        "title": "Gestión de Configuración",
        "description": "Organiza y mantén tus archivos de configuración",
        "tips": [
          "Usar control de versiones para archivos de configuración",
          "Documentar cambios de configuración",
          "Probar configuraciones en entorno de desarrollo",
          "Respaldar configuraciones regularmente"
        ]
      },
      {
        "title": "Optimización de Rendimiento",
        "description": "Configurar para rendimiento óptimo",
        "tips": [
          "Ajustar parámetros del modelo según necesidades",
          "Monitorear uso de recursos",
          "Optimizar eficiencia de transmisión de datos",
          "Configurar tiempos de espera apropiados"
        ]
      },
      {
        "title": "Consejos de Depuración",
        "description": "Configuración para facilitar la depuración",
        "tips": [
          "Usar modo de registro detallado",
          "Verificar estado del servidor",
          "Validar formato del archivo de configuración",
          "Probar variables de entorno"
        ]
      }
    ],
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Ahora que entiendes la configuración avanzada, puedes continuar aprendiendo métodos de configuración e integración más avanzados:",
      "integration": "Guía de Integración",
      "troubleshooting": "Solución de Problemas",
      "backToGuides": "Volver a las Guías"
    }
  },
  ru: {
    "hero": {
      "title": "Расширенные Опции Конфигурации",
      "subtitle": "Глубокое погружение в расширенные опции конфигурации и настройки Gemini CLI",
      "advanced": "Расширенный",
      "readingTime": "30 мин чтения"
    },
    "overview": {
      "title": "Обзор Конфигурации",
      "description": "Освойте расширенные опции конфигурации Gemini CLI, включая файлы конфигурации TOML, переменные окружения, пользовательские настройки и многое другое."
    },
    "configSectionsTitle": "Структура Файла Конфигурации",
    "configSectionsDescription": "Изучите различные разделы конфигурации и их настройки",
    "location": "Расположение",
    "structure": "Структура",
    "explanation": "Объяснение",
    "options": "Опции",
    "configSections": [
      {
        "id": "toml-config",
        "title": "Файл Конфигурации TOML",
        "description": "Используйте файл gemini.toml для детальной конфигурации",
        "color": "from-blue-500 to-indigo-600",
        "content": {
          "location": "Расположение файла конфигурации: gemini.toml в корневой директории проекта",
          "structure": `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"`,
          "explanation": "Файл TOML позволяет структурированную и читаемую конфигурацию всех аспектов Gemini CLI."
        }
      },
      {
        "id": "env-vars",
        "title": "Переменные Окружения",
        "description": "Быстрая конфигурация через переменные окружения",
        "color": "from-green-500 to-emerald-600",
        "content": {
          "explanation": "Переменные окружения позволяют быструю и гибкую конфигурацию",
          "options": [
            "GEMINI_API_KEY: API ключ для аутентификации",
            "GEMINI_MODEL: Модель по умолчанию для использования",
            "GEMINI_TEMPERATURE: Параметр креативности",
            "GEMINI_MAX_TOKENS: Максимальное количество токенов",
            "GEMINI_CONFIG_PATH: Путь к файлу конфигурации"
          ]
        }
      },
      {
        "id": "model-config",
        "title": "Конфигурация Модели",
        "description": "Настройки, специфичные для AI модели",
        "color": "from-indigo-500 to-purple-600",
        "content": {
          "explanation": "Управляйте поведением и производительностью AI модели",
          "options": [
            "provider: Поставщик модели (google, openai)",
            "name: Конкретное имя модели",
            "temperature: Креативность (0.0-2.0)",
            "max_tokens: Лимит выходных токенов",
            "top_p: Nucleus sampling",
            "frequency_penalty: Штраф за частоту"
          ]
        }
      },
      {
        "id": "ui-config",
        "title": "Конфигурация Интерфейса",
        "description": "Настройте пользовательский интерфейс и опыт взаимодействия",
        "color": "from-purple-500 to-pink-600",
        "content": {
          "explanation": "Настройте отображение и взаимодействие CLI интерфейса",
          "options": [
            "theme: Цвет темы (light, dark, auto)",
            "show_token_count: Показать счетчик токенов",
            "auto_save_history: Автосохранение истории",
            "syntax_highlighting: Подсветка синтаксиса",
            "line_numbers: Показать номера строк",
            "word_wrap: Автоперенос строк"
          ]
        }
      },
      {
        "id": "tools-config",
        "title": "Конфигурация Инструментов",
        "description": "Включите и настройте различные функции инструментов",
        "color": "from-orange-500 to-red-600",
        "content": {
          "explanation": "Управляйте функциями и разрешениями CLI инструментов",
          "options": [
            "enable_shell: Включить выполнение Shell команд",
            "enable_file_operations: Включить файловые операции",
            "max_file_size: Максимальный размер файла",
            "allowed_extensions: Разрешенные расширения файлов",
            "blocked_commands: Список заблокированных команд",
            "timeout: Таймаут выполнения"
          ]
        }
      },
      {
        "id": "security-config",
        "title": "Конфигурация Безопасности",
        "description": "Настройки безопасности и контроля доступа",
        "color": "from-red-500 to-pink-600",
        "content": {
          "explanation": "Настройте меры безопасности и контроль доступа",
          "options": [
            "enable_audit_log: Включить журнал аудита",
            "restrict_file_access: Ограничить доступ к файлам",
            "allowed_directories: Разрешенные директории",
            "require_confirmation: Требовать подтверждение",
            "session_timeout: Таймаут сессии",
            "max_concurrent_sessions: Макс. одновременных сессий"
          ]
        }
      }
    ],
    "environmentVariablesTitle": "Переменные Окружения",
    "environmentVariablesDescription": "Быстрая конфигурация через переменные окружения",
    "defaultValue": "Значение по Умолчанию",
    "none": "Нет",
    "environmentVariables": [
      {
        "name": "GEMINI_API_KEY",
        "description": "API ключ Google Gemini для аутентификации",
        "example": "export GEMINI_API_KEY=ваш_api_ключ_здесь",
        "default": null
      },
      {
        "name": "GEMINI_MODEL",
        "description": "Имя модели по умолчанию для использования",
        "example": "export GEMINI_MODEL=gemini-1.5-pro",
        "default": "gemini-1.5-flash"
      },
      {
        "name": "GEMINI_TEMPERATURE",
        "description": "Параметр креативности модели",
        "example": "export GEMINI_TEMPERATURE=0.7",
        "default": "0.9"
      },
      {
        "name": "GEMINI_MAX_TOKENS",
        "description": "Максимальное количество выходных токенов",
        "example": "export GEMINI_MAX_TOKENS=8192",
        "default": "4096"
      },
      {
        "name": "GEMINI_CONFIG_PATH",
        "description": "Путь к пользовательскому файлу конфигурации",
        "example": "export GEMINI_CONFIG_PATH=/путь/к/config.toml",
        "default": "./gemini.toml"
      }
    ],
    "customizationTitle": "Опции Настройки",
    "customizationDescription": "Персонализированная конфигурация для различных случаев использования",
    "customizationOptions": [
      {
        "title": "Среда Разработки",
        "description": "Оптимизированные настройки для рабочих процессов разработки",
        "features": [
          "Включить подсветку синтаксиса кода",
          "Автосохранение истории сессии",
          "Интеграция с системами контроля версий",
          "Пользовательские шаблоны кода",
          "Быстрые псевдонимы команд"
        ]
      },
      {
        "title": "Производственная Среда",
        "description": "Конфигурация безопасности для производственных сред",
        "features": [
          "Ограничить разрешения файловых операций",
          "Отключить опасные команды",
          "Включить журналирование аудита",
          "Установить лимиты использования ресурсов",
          "Настроить стратегии резервного копирования"
        ]
      },
      {
        "title": "Конфигурация Командной Работы",
        "description": "Общие настройки для командной работы",
        "features": [
          "Унифицированные шаблоны конфигурации",
          "Общая библиотека промптов",
          "Статистика использования команды",
          "Управление разрешениями",
          "Синхронизация конфигурации"
        ]
      }
    ],
    "bestPracticesTitle": "Лучшие Практики",
    "bestPracticesDescription": "Рекомендации для оптимальной конфигурации",
    "bestPractices": [
      {
        "title": "Управление Конфигурацией",
        "description": "Организуйте и поддерживайте ваши файлы конфигурации",
        "tips": [
          "Используйте контроль версий для файлов конфигурации",
          "Документируйте изменения конфигурации",
          "Тестируйте конфигурации в среде разработки",
          "Регулярно создавайте резервные копии конфигураций"
        ]
      },
      {
        "title": "Оптимизация Производительности",
        "description": "Настройте для оптимальной производительности",
        "tips": [
          "Настройте параметры модели согласно вашим потребностям",
          "Мониторьте использование ресурсов",
          "Оптимизируйте эффективность передачи данных",
          "Настройте подходящие таймауты"
        ]
      },
      {
        "title": "Советы по Отладке",
        "description": "Конфигурация для облегчения отладки",
        "tips": [
          "Используйте подробный режим журналирования",
          "Проверяйте статус сервера",
          "Валидируйте формат файла конфигурации",
          "Тестируйте переменные окружения"
        ]
      }
    ],
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Теперь, когда вы понимаете расширенную конфигурацию, вы можете продолжить изучение более продвинутых методов конфигурации и интеграции:",
      "integration": "Руководство по Интеграции",
      "troubleshooting": "Устранение Неполадок",
      "backToGuides": "Вернуться к Руководствам"
    }
  }
};

// Function to apply advanced config translations
function applyAdvancedConfigTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = finalAdvancedConfigTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No advanced config translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesAdvancedConfig with professional translation
    data.guidesAdvancedConfig = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied advanced config translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const advancedConfig = newData.guidesAdvancedConfig;
    console.log(`   - Hero title: "${advancedConfig?.hero?.title || 'N/A'}"`);
    console.log(`   - Config sections: ${advancedConfig?.configSections?.length || 0}`);
    console.log(`   - Environment variables: ${advancedConfig?.environmentVariables?.length || 0}`);
    console.log(`   - Customization options: ${advancedConfig?.customizationOptions?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying advanced config translations for ${langCode}:`, error.message);
  }
}

// Apply advanced config translations
console.log('🚀 Applying professional advanced config translations for final languages...\n');

Object.keys(finalAdvancedConfigTranslations).forEach(langCode => {
  const langNames = {
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying advanced config translations for ${langNames[langCode]}...`);
  applyAdvancedConfigTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional advanced config translations applied!');
console.log('🎯 Spanish and Russian now have complete professional content.');
