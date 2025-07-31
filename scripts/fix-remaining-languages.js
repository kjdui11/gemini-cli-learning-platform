const fs = require('fs');
const path = require('path');

// Complete translations for Spanish and Russian
const remainingLanguageTranslations = {
  es: {
    "hero": {
      "title": "Operaciones de Comandos Básicos",
      "subtitle": "Domina los comandos principales y la sintaxis de operación de Gemini CLI",
      "comprehensive": "Cobertura Integral",
      "practical": "Ejemplos Prácticos"
    },
    "overview": {
      "title": "Resumen de Comandos",
      "description": "Gemini CLI proporciona tres tipos principales de comandos: comandos slash para controlar el CLI mismo, comandos @ para operaciones de archivos, y comandos ! para ejecutar comandos del sistema."
    },
    "categories": {
      "slash": {
        "title": "Comandos Slash (/)",
        "description": "Comandos de meta-nivel para controlar el CLI mismo",
        "commands": {
          "help": "Mostrar todos los comandos disponibles y su uso",
          "clear": "Limpiar el historial de conversación actual",
          "quit": "Salir de Gemini CLI",
          "theme": "Cambiar tema de color (claro/oscuro/auto)"
        }
      },
      "at": {
        "title": "Comandos @ (@)",
        "description": "Comandos para interactuar con contenido de archivos",
        "commands": {
          "file": "Incluir contenido de archivo en conversación",
          "folder": "Analizar estructura y contenido de carpeta",
          "wildcard": "Incluir múltiples archivos usando coincidencia de patrones"
        }
      },
      "exclamation": {
        "title": "Comandos ! (!)",
        "description": "Comandos para ejecutar comandos del sistema",
        "commands": {
          "system": "Ejecutar cualquier comando del sistema",
          "git": "Ejecutar comandos Git",
          "npm": "Ejecutar comandos NPM"
        }
      }
    },
    "examples": {
      "title": "Ejemplos Prácticos",
      "description": "Cómo usar comandos en escenarios reales",
      "scenarios": [
        {
          "title": "Revisión de Código",
          "description": "Leer archivo y sugerir mejoras",
          "command": "@src/components/Button.tsx Revisa este componente y sugiere mejoras"
        },
        {
          "title": "Ayuda de Depuración",
          "description": "Analizar registros de errores",
          "command": "@logs/error.log Analiza este registro de errores y sugiere posibles soluciones"
        },
        {
          "title": "Documentación",
          "description": "Generar documentación para código",
          "command": "@src/utils/ Crea documentación README para estas funciones utilitarias"
        }
      ]
    },
    "tips": {
      "title": "Consejos de Uso",
      "info": {
        "title": "Combinación de Comandos",
        "content": "Puedes combinar múltiples tipos de comandos en la misma conversación para mejorar la eficiencia del trabajo."
      },
      "warning": {
        "title": "Recordatorio de Seguridad",
        "content": "Ten cuidado al usar comandos !, asegúrate de entender lo que hace el comando para evitar operaciones peligrosas."
      },
      "success": {
        "title": "Mejores Prácticas",
        "content": "Se recomienda usar primero /help para ver todos los comandos disponibles, luego aprender gradualmente el uso de varios comandos."
      }
    },
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Ahora que dominas los comandos básicos, puedes continuar aprendiendo funciones más avanzadas:",
      "fileOperations": "Detalles de Operaciones de Archivo",
      "advancedConfig": "Configuración Avanzada",
      "backToGuides": "Volver a las Guías"
    }
  },
  ru: {
    "hero": {
      "title": "Основные Операции с Командами",
      "subtitle": "Освойте основные команды и синтаксис операций Gemini CLI",
      "comprehensive": "Полное Покрытие",
      "practical": "Практические Примеры"
    },
    "overview": {
      "title": "Обзор Команд",
      "description": "Gemini CLI предоставляет три основных типа команд: slash-команды для управления самим CLI, @-команды для операций с файлами и !-команды для выполнения системных команд."
    },
    "categories": {
      "slash": {
        "title": "Slash-команды (/)",
        "description": "Мета-уровневые команды для управления самим CLI",
        "commands": {
          "help": "Показать все доступные команды и их использование",
          "clear": "Очистить текущую историю разговора",
          "quit": "Выйти из Gemini CLI",
          "theme": "Изменить цветовую тему (светлая/темная/авто)"
        }
      },
      "at": {
        "title": "@ Команды (@)",
        "description": "Команды для взаимодействия с содержимым файлов",
        "commands": {
          "file": "Включить содержимое файла в разговор",
          "folder": "Анализировать структуру и содержимое папки",
          "wildcard": "Включить несколько файлов используя сопоставление шаблонов"
        }
      },
      "exclamation": {
        "title": "! Команды (!)",
        "description": "Команды для выполнения системных команд",
        "commands": {
          "system": "Выполнить любую системную команду",
          "git": "Выполнить Git-команды",
          "npm": "Выполнить NPM-команды"
        }
      }
    },
    "examples": {
      "title": "Практические Примеры",
      "description": "Как использовать команды в реальных сценариях",
      "scenarios": [
        {
          "title": "Ревью Кода",
          "description": "Прочитать файл и предложить улучшения",
          "command": "@src/components/Button.tsx Проверьте этот компонент и предложите улучшения"
        },
        {
          "title": "Помощь в Отладке",
          "description": "Анализировать журналы ошибок",
          "command": "@logs/error.log Проанализируйте этот журнал ошибок и предложите возможные решения"
        },
        {
          "title": "Документация",
          "description": "Генерировать документацию для кода",
          "command": "@src/utils/ Создайте README документацию для этих утилитарных функций"
        }
      ]
    },
    "tips": {
      "title": "Советы по Использованию",
      "info": {
        "title": "Комбинация Команд",
        "content": "Вы можете комбинировать несколько типов команд в одном разговоре для повышения эффективности работы."
      },
      "warning": {
        "title": "Напоминание о Безопасности",
        "content": "Будьте осторожны при использовании !-команд, убедитесь, что понимаете, что делает команда, чтобы избежать опасных операций."
      },
      "success": {
        "title": "Лучшие Практики",
        "content": "Рекомендуется сначала использовать /help для просмотра всех доступных команд, а затем постепенно изучать использование различных команд."
      }
    },
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Теперь, когда вы освоили основные команды, можете продолжить изучение более продвинутых функций:",
      "fileOperations": "Подробности Операций с Файлами",
      "advancedConfig": "Продвинутая Конфигурация",
      "backToGuides": "Вернуться к Руководствам"
    }
  }
};

// Function to completely replace basic commands structure
function replaceBasicCommandsStructure(langCode, langName, newStructure) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Completely replace the guidesBasicCommands section
    data.guidesBasicCommands = newStructure;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Completely replaced basic commands structure for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const basicCommands = newData.guidesBasicCommands;
    
    console.log(`   📊 Categories: ${Object.keys(basicCommands?.categories || {}).length}`);
    console.log(`   📝 Examples: ${basicCommands?.examples?.scenarios?.length || 0}`);
    console.log(`   💡 Tips: ${Object.keys(basicCommands?.tips || {}).filter(k => k !== 'title').length}`);
    
  } catch (error) {
    console.error(`❌ Error replacing basic commands structure for ${langCode}:`, error.message);
  }
}

// Apply fixes
console.log('🔧 Fixing basic commands structure for remaining languages...\n');

Object.keys(remainingLanguageTranslations).forEach(langCode => {
  const langNames = {
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Fixing basic commands structure for ${langNames[langCode]}...`);
  replaceBasicCommandsStructure(langCode, langNames[langCode], remainingLanguageTranslations[langCode]);
  console.log('');
});

console.log('✅ All remaining basic commands structures fixed!');
console.log('🎯 Spanish and Russian now have complete correct structure.');
