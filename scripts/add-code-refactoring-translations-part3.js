const fs = require('fs');
const path = require('path');

// Complete Code Refactoring translations for Korean, Spanish, and Russian
const codeRefactoringTranslations = {
  ko: {
    "title": "코드 리팩토링 어시스턴트",
    "subtitle": "AI를 사용하여 기존 코드를 분석하고 리팩토링하세요",
    "description": "코드 품질, 가독성, 유지보수성을 향상시키기 위한 지능적인 코드 리팩토링에 Gemini CLI를 사용하는 방법을 배웁니다.",
    "overview": {
      "title": "리팩토링 개요",
      "description": "코드 리팩토링은 외부 동작을 변경하지 않고 기존 코드 구조를 개선하는 프로세스입니다. Gemini CLI는 코드 스멜 식별, 성능 최적화, 코드 품질 향상을 돕는 강력한 AI 지원 리팩토링 기능을 제공합니다."
    },
    "typesTitle": "리팩토링 유형",
    "typesDescription": "다양한 유형의 코드 리팩토링 기술에 대해 알아보세요",
    "types": [
      {
        "icon": "structure",
        "title": "구조적 리팩토링",
        "description": "코드 조직과 아키텍처 개선",
        "techniques": [
          { "name": "메서드 추출" },
          { "name": "클래스 추출" },
          { "name": "메서드 이동" },
          { "name": "변수 이름 변경" }
        ]
      },
      {
        "icon": "performance",
        "title": "성능 최적화",
        "description": "코드 실행 효율성과 리소스 사용량 최적화",
        "techniques": [
          { "name": "알고리즘 최적화" },
          { "name": "캐싱 전략" },
          { "name": "메모리 관리" },
          { "name": "동시성 최적화" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "유지보수성",
        "description": "코드 가독성과 유지보수성 향상",
        "techniques": [
          { "name": "조건식 단순화" },
          { "name": "중복 코드 제거" },
          { "name": "명명 개선" },
          { "name": "주석 추가" }
        ]
      },
      {
        "icon": "security",
        "title": "보안 강화",
        "description": "잠재적인 보안 취약점 식별 및 수정",
        "techniques": [
          { "name": "입력 검증" },
          { "name": "권한 확인" },
          { "name": "데이터 암호화" },
          { "name": "오류 처리" }
        ]
      }
    ],
    "workflow": {
      "title": "리팩토링 워크플로우",
      "description": "코드 품질을 보장하기 위한 체계적인 리팩토링 프로세스를 따르세요",
      "steps": [
        {
          "title": "코드 분석",
          "description": "AI를 사용하여 기존 코드를 분석하고 리팩토링 기회를 식별",
          "example": "# 코드 품질 분석\ngemini analyze --file src/main.js --type quality\n\n# 코드 스멜 감지\ngemini detect --smell --directory src/"
        },
        {
          "title": "리팩토링 계획 수립",
          "description": "분석 결과를 바탕으로 상세한 리팩토링 계획 개발",
          "example": "# 리팩토링 제안 생성\ngemini refactor --plan --file src/main.js\n\n# 리팩토링 위험 평가\ngemini assess --risk --changes planned"
        },
        {
          "title": "리팩토링 실행",
          "description": "코드 기능을 유지하면서 점진적으로 리팩토링 작업 실행",
          "example": "# 자동 리팩토링\ngemini refactor --apply --file src/main.js\n\n# 대화형 리팩토링\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "검증 및 테스트",
          "description": "리팩토링된 코드가 올바르게 작동하고 좋은 성능을 발휘하는지 확인",
          "example": "# 테스트 실행\ngemini test --after-refactor\n\n# 성능 비교\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "리팩토링 예제",
    "examplesDescription": "실제 코드 리팩토링 사례 확인",
    "beforeLabel": "이전",
    "afterLabel": "이후",
    "examples": [
      {
        "title": "함수 추출",
        "description": "복잡한 함수를 더 작고 집중된 함수로 분할",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "조건 단순화",
        "description": "복잡한 조건 로직 단순화",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "리팩토링 모범 사례",
    "bestPracticesDescription": "성공적인 리팩토링을 위한 모범 사례를 따르세요",
    "bestPractices": [
      {
        "title": "작은 단계",
        "description": "위험을 줄이고 롤백을 용이하게 하기 위해 대규모 일회성 리팩토링 대신 작고 빈번한 리팩토링을 수행하세요."
      },
      {
        "title": "테스트 우선",
        "description": "리팩토링 전에 적절한 테스트 커버리지를 확보하고 기능을 검증하기 위해 즉시 테스트를 실행하세요."
      },
      {
        "title": "버전 관리",
        "description": "명확한 변경 이력을 유지하기 위해 각 리팩토링을 버전 관리 시스템에 커밋하세요."
      },
      {
        "title": "팀 커뮤니케이션",
        "description": "여러 협력자가 관련된 코드를 리팩토링할 때는 미리 소통하고 팀 승인을 받으세요."
      }
    ],
    "nextSteps": {
      "title": "다음 단계",
      "description": "코드 품질 관련 더 많은 주제를 계속 학습하세요",
      "codeReview": "코드 리뷰",
      "advancedConfig": "고급 구성"
    }
  },
  es: {
    "title": "Asistente de Refactorización de Código",
    "subtitle": "Usa IA para analizar y refactorizar código existente",
    "description": "Aprende a usar Gemini CLI para refactorización inteligente de código para mejorar la calidad, legibilidad y mantenibilidad del código.",
    "overview": {
      "title": "Resumen de Refactorización",
      "description": "La refactorización de código es el proceso de mejorar la estructura del código existente sin cambiar su comportamiento externo. Gemini CLI proporciona poderosas capacidades de refactorización asistida por IA para ayudar a identificar code smells, optimizar rendimiento y mejorar la calidad del código."
    },
    "typesTitle": "Tipos de Refactorización",
    "typesDescription": "Aprende sobre diferentes tipos de técnicas de refactorización de código",
    "types": [
      {
        "icon": "structure",
        "title": "Refactorización Estructural",
        "description": "Mejorar la organización y arquitectura del código",
        "techniques": [
          { "name": "Extraer Método" },
          { "name": "Extraer Clase" },
          { "name": "Mover Método" },
          { "name": "Renombrar Variable" }
        ]
      },
      {
        "icon": "performance",
        "title": "Optimización de Rendimiento",
        "description": "Optimizar la eficiencia de ejecución del código y el uso de recursos",
        "techniques": [
          { "name": "Optimización de Algoritmo" },
          { "name": "Estrategia de Cache" },
          { "name": "Gestión de Memoria" },
          { "name": "Optimización de Concurrencia" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "Mantenibilidad",
        "description": "Mejorar la legibilidad y mantenibilidad del código",
        "techniques": [
          { "name": "Simplificar Expresiones Condicionales" },
          { "name": "Eliminar Código Duplicado" },
          { "name": "Mejorar Nomenclatura" },
          { "name": "Agregar Comentarios" }
        ]
      },
      {
        "icon": "security",
        "title": "Fortalecimiento de Seguridad",
        "description": "Identificar y corregir vulnerabilidades de seguridad potenciales",
        "techniques": [
          { "name": "Validación de Entrada" },
          { "name": "Verificaciones de Permisos" },
          { "name": "Cifrado de Datos" },
          { "name": "Manejo de Errores" }
        ]
      }
    ],
    "workflow": {
      "title": "Flujo de Trabajo de Refactorización",
      "description": "Sigue un proceso de refactorización sistemático para asegurar la calidad del código",
      "steps": [
        {
          "title": "Análisis de Código",
          "description": "Usa IA para analizar código existente e identificar oportunidades de refactorización",
          "example": "# Analizar calidad del código\ngemini analyze --file src/main.js --type quality\n\n# Detectar code smells\ngemini detect --smell --directory src/"
        },
        {
          "title": "Crear Plan de Refactorización",
          "description": "Desarrollar un plan de refactorización detallado basado en resultados de análisis",
          "example": "# Generar sugerencias de refactorización\ngemini refactor --plan --file src/main.js\n\n# Evaluar riesgos de refactorización\ngemini assess --risk --changes planned"
        },
        {
          "title": "Ejecutar Refactorización",
          "description": "Ejecutar operaciones de refactorización gradualmente mientras se mantiene la funcionalidad del código",
          "example": "# Refactorización automática\ngemini refactor --apply --file src/main.js\n\n# Refactorización interactiva\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "Verificar y Probar",
          "description": "Asegurar que el código refactorizado funcione correctamente y tenga buen rendimiento",
          "example": "# Ejecutar pruebas\ngemini test --after-refactor\n\n# Comparación de rendimiento\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "Ejemplos de Refactorización",
    "examplesDescription": "Ver casos reales de refactorización de código",
    "beforeLabel": "Antes",
    "afterLabel": "Después",
    "examples": [
      {
        "title": "Extracción de Función",
        "description": "Dividir funciones complejas en funciones más pequeñas y enfocadas",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "Simplificación de Condición",
        "description": "Simplificar lógica condicional compleja",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "Mejores Prácticas de Refactorización",
    "bestPracticesDescription": "Sigue estas mejores prácticas para asegurar refactorización exitosa",
    "bestPractices": [
      {
        "title": "Pasos Pequeños",
        "description": "Realiza refactorizaciones pequeñas y frecuentes en lugar de refactorización masiva de una vez para reducir riesgos y facilitar rollbacks."
      },
      {
        "title": "Pruebas Primero",
        "description": "Asegura cobertura de pruebas adecuada antes de refactorizar y ejecuta pruebas inmediatamente después para verificar funcionalidad."
      },
      {
        "title": "Control de Versiones",
        "description": "Haz commit de cada refactorización al sistema de control de versiones para mantener un historial de cambios claro."
      },
      {
        "title": "Comunicación de Equipo",
        "description": "Comunica con anticipación y obtén aprobación del equipo al refactorizar código que involucra múltiples colaboradores."
      }
    ],
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Continúa aprendiendo más temas relacionados con la calidad del código",
      "codeReview": "Revisión de Código",
      "advancedConfig": "Configuración Avanzada"
    }
  },
  ru: {
    "title": "Помощник Рефакторинга Кода",
    "subtitle": "Используйте ИИ для анализа и рефакторинга существующего кода",
    "description": "Изучите, как использовать Gemini CLI для интеллектуального рефакторинга кода для улучшения качества, читаемости и поддерживаемости кода.",
    "overview": {
      "title": "Обзор Рефакторинга",
      "description": "Рефакторинг кода - это процесс улучшения структуры существующего кода без изменения его внешнего поведения. Gemini CLI предоставляет мощные возможности рефакторинга с поддержкой ИИ для помощи в выявлении code smells, оптимизации производительности и улучшения качества кода."
    },
    "typesTitle": "Типы Рефакторинга",
    "typesDescription": "Изучите различные типы техник рефакторинга кода",
    "types": [
      {
        "icon": "structure",
        "title": "Структурный Рефакторинг",
        "description": "Улучшение организации и архитектуры кода",
        "techniques": [
          { "name": "Извлечение Метода" },
          { "name": "Извлечение Класса" },
          { "name": "Перемещение Метода" },
          { "name": "Переименование Переменной" }
        ]
      },
      {
        "icon": "performance",
        "title": "Оптимизация Производительности",
        "description": "Оптимизация эффективности выполнения кода и использования ресурсов",
        "techniques": [
          { "name": "Оптимизация Алгоритма" },
          { "name": "Стратегия Кэширования" },
          { "name": "Управление Памятью" },
          { "name": "Оптимизация Параллелизма" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "Поддерживаемость",
        "description": "Улучшение читаемости и поддерживаемости кода",
        "techniques": [
          { "name": "Упрощение Условных Выражений" },
          { "name": "Устранение Дублированного Кода" },
          { "name": "Улучшение Именования" },
          { "name": "Добавление Комментариев" }
        ]
      },
      {
        "icon": "security",
        "title": "Усиление Безопасности",
        "description": "Выявление и исправление потенциальных уязвимостей безопасности",
        "techniques": [
          { "name": "Валидация Ввода" },
          { "name": "Проверки Разрешений" },
          { "name": "Шифрование Данных" },
          { "name": "Обработка Ошибок" }
        ]
      }
    ],
    "workflow": {
      "title": "Рабочий Процесс Рефакторинга",
      "description": "Следуйте систематическому процессу рефакторинга для обеспечения качества кода",
      "steps": [
        {
          "title": "Анализ Кода",
          "description": "Используйте ИИ для анализа существующего кода и выявления возможностей рефакторинга",
          "example": "# Анализ качества кода\ngemini analyze --file src/main.js --type quality\n\n# Обнаружение code smells\ngemini detect --smell --directory src/"
        },
        {
          "title": "Создание Плана Рефакторинга",
          "description": "Разработка детального плана рефакторинга на основе результатов анализа",
          "example": "# Генерация предложений по рефакторингу\ngemini refactor --plan --file src/main.js\n\n# Оценка рисков рефакторинга\ngemini assess --risk --changes planned"
        },
        {
          "title": "Выполнение Рефакторинга",
          "description": "Постепенное выполнение операций рефакторинга с сохранением функциональности кода",
          "example": "# Автоматический рефакторинг\ngemini refactor --apply --file src/main.js\n\n# Интерактивный рефакторинг\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "Проверка и Тестирование",
          "description": "Убедитесь, что рефакторированный код работает корректно и имеет хорошую производительность",
          "example": "# Запуск тестов\ngemini test --after-refactor\n\n# Сравнение производительности\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "Примеры Рефакторинга",
    "examplesDescription": "Посмотрите реальные случаи рефакторинга кода",
    "beforeLabel": "До",
    "afterLabel": "После",
    "examples": [
      {
        "title": "Извлечение Функции",
        "description": "Разделение сложных функций на более мелкие и сфокусированные функции",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "Упрощение Условий",
        "description": "Упрощение сложной условной логики",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "Лучшие Практики Рефакторинга",
    "bestPracticesDescription": "Следуйте этим лучшим практикам для обеспечения успешного рефакторинга",
    "bestPractices": [
      {
        "title": "Маленькие Шаги",
        "description": "Выполняйте небольшие, частые рефакторинги вместо масштабного одноразового рефакторинга для снижения рисков и облегчения отката."
      },
      {
        "title": "Тесты Сначала",
        "description": "Обеспечьте адекватное покрытие тестами перед рефакторингом и запускайте тесты сразу после для проверки функциональности."
      },
      {
        "title": "Контроль Версий",
        "description": "Коммитьте каждый рефакторинг в систему контроля версий для поддержания четкой истории изменений."
      },
      {
        "title": "Командная Коммуникация",
        "description": "Общайтесь заранее и получайте одобрение команды при рефакторинге кода, затрагивающего нескольких участников."
      }
    ],
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Продолжайте изучать больше тем, связанных с качеством кода",
      "codeReview": "Ревью Кода",
      "advancedConfig": "Расширенная Конфигурация"
    }
  }
};

// Function to apply Code Refactoring translations
function applyCodeRefactoringTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = codeRefactoringTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Code Refactoring translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesCodeRefactoring with professional translation
    data.guidesCodeRefactoring = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Code Refactoring translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const codeRefactoring = newData.guidesCodeRefactoring;
    console.log(`   - Title: "${codeRefactoring?.title || 'N/A'}"`);
    console.log(`   - Types: ${codeRefactoring?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${codeRefactoring?.workflow?.steps?.length || 0}`);
    console.log(`   - Examples: ${codeRefactoring?.examples?.length || 0}`);
    console.log(`   - Best practices: ${codeRefactoring?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Code Refactoring translations for ${langCode}:`, error.message);
  }
}

// Apply Code Refactoring translations
console.log('🚀 Applying professional Code Refactoring translations for final languages...\n');

Object.keys(codeRefactoringTranslations).forEach(langCode => {
  const langNames = {
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying Code Refactoring translations for ${langNames[langCode]}...`);
  applyCodeRefactoringTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Code Refactoring translations applied!');
console.log('🎯 Korean, Spanish, and Russian now have complete professional content.');
