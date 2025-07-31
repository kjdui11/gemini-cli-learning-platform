const fs = require('fs');
const path = require('path');

// Complete Documentation translations for Korean, Spanish, and Russian
const documentationTranslations = {
  ko: {
    "hero": {
      "title": "문서 생성기",
      "subtitle": "AI를 사용하여 고품질 프로젝트 문서를 지능적으로 생성하세요",
      "intermediate": "중급",
      "readingTime": "25분 읽기"
    },
    "overview": {
      "title": "문서 개요",
      "description": "API 문서, 사용자 매뉴얼, 기술 사양서 등을 포함한 프로젝트 문서를 자동으로 생성하고 유지하기 위해 Gemini CLI를 사용하는 방법을 배웁니다."
    },
    "typesTitle": "문서 유형",
    "typesDescription": "다양한 유형의 문서 생성 방법에 대해 알아보세요",
    "promptExample": "프롬프트 예제",
    "features": "주요 기능",
    "types": [
      {
        "id": "api-docs",
        "title": "API 문서",
        "description": "코드에서 API 문서를 자동 생성",
        "color": "from-blue-500 to-indigo-600",
        "example": {
          "prompt": "@src/api/ 이 디렉토리의 모든 API 파일에 대한 완전한 API 문서를 생성하고, 엔드포인트 설명, 매개변수 설명, 응답 형식, 사용 예제를 포함하세요",
          "features": [
            "API 엔드포인트 자동 추출",
            "매개변수 설명 테이블 생성",
            "요청/응답 예제 포함",
            "여러 인증 방법 지원",
            "대화형 문서 생성"
          ]
        }
      },
      {
        "id": "readme",
        "title": "README 문서",
        "description": "프로젝트 설명 문서 생성",
        "color": "from-green-500 to-emerald-600",
        "example": {
          "prompt": "@package.json @src/ 이 프로젝트의 구조와 기능을 분석하고, 프로젝트 소개, 설치 지침, 사용 방법, 기여 가이드라인을 포함한 완전한 README.md 문서를 생성하세요",
          "features": [
            "프로젝트 개요 및 기능",
            "설치 및 구성 지침",
            "사용 예제 및 튜토리얼",
            "기여 가이드라인",
            "라이선스 정보"
          ]
        }
      },
      {
        "id": "user-manual",
        "title": "사용자 매뉴얼",
        "description": "상세한 사용자 가이드 생성",
        "color": "from-purple-500 to-pink-600",
        "example": {
          "prompt": "@src/components/ 이러한 컴포넌트를 기반으로 사용자 매뉴얼을 생성하고, 기능 설명, 사용 단계, FAQ, 문제 해결을 포함하세요",
          "features": [
            "상세한 기능 설명",
            "단계별 조작 가이드",
            "스크린샷 및 예제",
            "자주 묻는 질문",
            "문제 해결 가이드"
          ]
        }
      },
      {
        "id": "technical-spec",
        "title": "기술 사양서",
        "description": "기술 아키텍처 및 설계 문서 생성",
        "color": "from-orange-500 to-red-600",
        "example": {
          "prompt": "@src/ @docs/architecture.md 프로젝트 아키텍처를 분석하고, 시스템 설계, 데이터 플로우, 인터페이스 정의, 배포 요구사항을 포함한 기술 사양서를 생성하세요",
          "features": [
            "시스템 아키텍처 다이어그램",
            "데이터 플로우 다이어그램",
            "인터페이스 사양",
            "배포 요구사항",
            "성능 메트릭"
          ]
        }
      }
    ],
    "workflow": {
      "title": "문서 생성 워크플로우",
      "description": "고품질 문서를 생성하기 위한 단계를 따르세요",
      "steps": [
        {
          "step": 1,
          "title": "프로젝트 구조 분석",
          "description": "AI가 프로젝트의 전체 구조와 기능을 이해하도록 하세요",
          "commands": [
            "@. 이 프로젝트의 전체 구조를 분석하세요",
            "@package.json 프로젝트의 종속성과 구성을 설명하세요",
            "@README.md 프로젝트의 기본 정보를 이해하세요"
          ]
        },
        {
          "step": 2,
          "title": "문서 유형 선택",
          "description": "요구사항에 따라 적절한 문서 유형과 템플릿을 선택하세요",
          "commands": [
            "API 문서를 생성해야 합니다",
            "사용자 매뉴얼을 만들어 주세요",
            "기술 아키텍처 문서를 생성하세요"
          ]
        },
        {
          "step": 3,
          "title": "초기 문서 생성",
          "description": "AI를 사용하여 문서의 초기 버전을 생성하세요",
          "commands": [
            "@src/api/ API 문서를 생성하세요",
            "@src/components/ 컴포넌트 문서를 생성하세요",
            "@docs/ 기존 문서를 업데이트하세요"
          ]
        },
        {
          "step": 4,
          "title": "검토 및 최적화",
          "description": "생성된 문서를 검토하고 필요한 조정을 하세요",
          "commands": [
            "문서의 완전성과 정확성을 확인하세요",
            "문서의 구조와 형식을 최적화하세요",
            "누락된 예제와 설명을 추가하세요"
          ]
        }
      ]
    },
    "practicalExamples": {
      "title": "실용적인 예제",
      "description": "구체적인 문서 생성 사례를 확인하세요"
    },
    "examples": [
      {
        "title": "React 컴포넌트 문서",
        "description": "React 컴포넌트에 대한 상세 문서 생성",
        "steps": [
          {
            "command": "@src/components/Button.tsx 이 버튼 컴포넌트에 대한 문서를 생성하세요",
            "description": "컴포넌트 props, 사용법, 예제를 분석하세요"
          },
          {
            "command": "사용 예제와 모범 사례를 추가하세요",
            "description": "실제 사용 사례와 코드 예제를 보완하세요"
          },
          {
            "command": "Storybook 스토리 파일을 생성하세요",
            "description": "대화형 컴포넌트 데모를 생성하세요"
          }
        ]
      },
      {
        "title": "REST API 문서",
        "description": "REST API에 대한 OpenAPI 사양 생성",
        "steps": [
          {
            "command": "@src/routes/ 모든 API 라우트를 분석하세요",
            "description": "엔드포인트, 매개변수, 응답 형식을 추출하세요"
          },
          {
            "command": "OpenAPI 3.0 사양 파일을 생성하세요",
            "description": "표준 API 문서 형식을 생성하세요"
          },
          {
            "command": "인증 및 오류 처리 설명을 추가하세요",
            "description": "보안 및 오류 처리 정보를 보완하세요"
          }
        ]
      }
    ],
    "bestPracticesTitle": "모범 사례",
    "bestPracticesDescription": "문서 생성을 위한 중요한 고려사항",
    "bestPractices": [
      {
        "type": "success",
        "title": "문서 동기화 유지",
        "content": "문서가 코드와 동기화를 유지하도록 정기적으로 업데이트하고, 코드 변경 시 문서 업데이트를 권장합니다."
      },
      {
        "type": "info",
        "title": "템플릿과 표준 사용",
        "content": "가독성과 전문성을 향상시키기 위해 일관된 문서 템플릿과 형식 표준을 채택하세요."
      },
      {
        "type": "warning",
        "title": "생성된 콘텐츠 검증",
        "content": "AI 생성 문서는 기술적 세부사항의 정확성과 완전성을 보장하기 위해 인간의 검토가 필요합니다."
      },
      {
        "type": "success",
        "title": "실용적인 예제 추가",
        "content": "사용자의 이해를 돕기 위해 문서에 실제 코드 예제와 사용 사례를 포함하세요."
      }
    ],
    "nextSteps": {
      "title": "다음 단계",
      "description": "문서 생성 기술을 마스터했으므로 다른 실용적인 기술을 계속 학습할 수 있습니다:",
      "codeRefactoring": "코드 리팩토링",
      "codeReview": "코드 리뷰",
      "backToGuides": "가이드로 돌아가기"
    }
  },
  es: {
    "hero": {
      "title": "Generador de Documentación",
      "subtitle": "Usa IA para generar inteligentemente documentación de proyecto de alta calidad",
      "intermediate": "Intermedio",
      "readingTime": "25 min de lectura"
    },
    "overview": {
      "title": "Resumen de Documentación",
      "description": "Aprende a usar Gemini CLI para generar y mantener automáticamente documentación de proyecto, incluyendo docs API, manuales de usuario, especificaciones técnicas, y más."
    },
    "typesTitle": "Tipos de Documentación",
    "typesDescription": "Aprende sobre diferentes tipos de métodos de generación de documentación",
    "promptExample": "Ejemplo de Prompt",
    "features": "Características Clave",
    "types": [
      {
        "id": "api-docs",
        "title": "Documentación API",
        "description": "Generar automáticamente documentación API desde código",
        "color": "from-blue-500 to-indigo-600",
        "example": {
          "prompt": "@src/api/ Generar documentación API completa para todos los archivos API en este directorio, incluyendo descripciones de endpoints, descripciones de parámetros, formatos de respuesta, y ejemplos de uso",
          "features": [
            "Extraer automáticamente endpoints API",
            "Generar tablas de descripción de parámetros",
            "Incluir ejemplos de solicitud/respuesta",
            "Soportar múltiples métodos de autenticación",
            "Generar documentación interactiva"
          ]
        }
      },
      {
        "id": "readme",
        "title": "Documentación README",
        "description": "Generar documentación de descripción del proyecto",
        "color": "from-green-500 to-emerald-600",
        "example": {
          "prompt": "@package.json @src/ Analizar la estructura y funcionalidad de este proyecto, generar un documento README.md completo incluyendo introducción del proyecto, instrucciones de instalación, métodos de uso, y directrices de contribución",
          "features": [
            "Resumen del proyecto y características",
            "Instrucciones de instalación y configuración",
            "Ejemplos de uso y tutoriales",
            "Directrices de contribución",
            "Información de licencia"
          ]
        }
      },
      {
        "id": "user-manual",
        "title": "Manual de Usuario",
        "description": "Crear guías de usuario detalladas",
        "color": "from-purple-500 to-pink-600",
        "example": {
          "prompt": "@src/components/ Crear un manual de usuario basado en estos componentes, incluyendo descripciones de características, pasos de uso, FAQ, y solución de problemas",
          "features": [
            "Descripciones detalladas de características",
            "Guías de operación paso a paso",
            "Capturas de pantalla y ejemplos",
            "Preguntas frecuentes",
            "Guías de solución de problemas"
          ]
        }
      },
      {
        "id": "technical-spec",
        "title": "Especificaciones Técnicas",
        "description": "Generar documentos de arquitectura técnica y diseño",
        "color": "from-orange-500 to-red-600",
        "example": {
          "prompt": "@src/ @docs/architecture.md Analizar la arquitectura del proyecto, generar documentos de especificación técnica incluyendo diseño del sistema, flujo de datos, definiciones de interfaz, y requisitos de despliegue",
          "features": [
            "Diagramas de arquitectura del sistema",
            "Diagramas de flujo de datos",
            "Especificaciones de interfaz",
            "Requisitos de despliegue",
            "Métricas de rendimiento"
          ]
        }
      }
    ],
    "workflow": {
      "title": "Flujo de Trabajo de Generación de Documentación",
      "description": "Sigue estos pasos para generar documentación de alta calidad",
      "steps": [
        {
          "step": 1,
          "title": "Analizar Estructura del Proyecto",
          "description": "Permite que la IA entienda la estructura general y funcionalidad del proyecto",
          "commands": [
            "@. Analizar la estructura general de este proyecto",
            "@package.json Explicar las dependencias y configuración del proyecto",
            "@README.md Entender la información básica del proyecto"
          ]
        },
        {
          "step": 2,
          "title": "Elegir Tipo de Documentación",
          "description": "Seleccionar el tipo de documentación y plantilla apropiados según los requisitos",
          "commands": [
            "Necesito generar documentación API",
            "Por favor crear un manual de usuario",
            "Generar documentación de arquitectura técnica"
          ]
        },
        {
          "step": 3,
          "title": "Generar Documentación Inicial",
          "description": "Usar IA para generar la versión inicial de la documentación",
          "commands": [
            "@src/api/ Generar documentación API",
            "@src/components/ Crear documentación de componentes",
            "@docs/ Actualizar documentación existente"
          ]
        },
        {
          "step": 4,
          "title": "Revisar y Optimizar",
          "description": "Revisar la documentación generada y hacer ajustes necesarios",
          "commands": [
            "Verificar la completitud y precisión de la documentación",
            "Optimizar la estructura y formato de la documentación",
            "Agregar ejemplos y explicaciones faltantes"
          ]
        }
      ]
    },
    "practicalExamples": {
      "title": "Ejemplos Prácticos",
      "description": "Ver casos específicos de generación de documentación"
    },
    "examples": [
      {
        "title": "Documentación de Componente React",
        "description": "Generar documentación detallada para componentes React",
        "steps": [
          {
            "command": "@src/components/Button.tsx Generar documentación para este componente botón",
            "description": "Analizar props del componente, uso, y ejemplos"
          },
          {
            "command": "Agregar ejemplos de uso y mejores prácticas",
            "description": "Complementar casos de uso reales y ejemplos de código"
          },
          {
            "command": "Generar archivos story de Storybook",
            "description": "Crear demostraciones de componentes interactivas"
          }
        ]
      },
      {
        "title": "Documentación API REST",
        "description": "Generar especificación OpenAPI para API REST",
        "steps": [
          {
            "command": "@src/routes/ Analizar todas las rutas API",
            "description": "Extraer endpoints, parámetros, y formatos de respuesta"
          },
          {
            "command": "Generar archivo de especificación OpenAPI 3.0",
            "description": "Crear formato de documentación API estándar"
          },
          {
            "command": "Agregar descripciones de autenticación y manejo de errores",
            "description": "Complementar información de seguridad y manejo de errores"
          }
        ]
      }
    ],
    "bestPracticesTitle": "Mejores Prácticas",
    "bestPracticesDescription": "Consideraciones importantes para la generación de documentación",
    "bestPractices": [
      {
        "type": "success",
        "title": "Mantener Documentación Sincronizada",
        "content": "Actualizar regularmente la documentación para asegurar que permanezca sincronizada con el código, recomendar actualizar documentación al cambiar código."
      },
      {
        "type": "info",
        "title": "Usar Plantillas y Estándares",
        "content": "Adoptar plantillas de documentación consistentes y estándares de formato para mejorar legibilidad y profesionalismo."
      },
      {
        "type": "warning",
        "title": "Validar Contenido Generado",
        "content": "La documentación generada por IA requiere revisión humana para asegurar precisión y completitud de detalles técnicos."
      },
      {
        "type": "success",
        "title": "Agregar Ejemplos Prácticos",
        "content": "Incluir ejemplos de código reales y casos de uso en la documentación para ayudar a los usuarios a entender mejor."
      }
    ],
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Ahora que has dominado las técnicas de generación de documentación, puedes continuar aprendiendo otras habilidades prácticas:",
      "codeRefactoring": "Refactorización de Código",
      "codeReview": "Revisión de Código",
      "backToGuides": "Volver a las Guías"
    }
  },
  ru: {
    "hero": {
      "title": "Генератор Документации",
      "subtitle": "Используйте ИИ для интеллектуальной генерации высококачественной проектной документации",
      "intermediate": "Средний",
      "readingTime": "25 мин чтения"
    },
    "overview": {
      "title": "Обзор Документации",
      "description": "Изучите, как использовать Gemini CLI для автоматической генерации и поддержки проектной документации, включая API документы, руководства пользователя, технические спецификации и многое другое."
    },
    "typesTitle": "Типы Документации",
    "typesDescription": "Изучите различные типы методов генерации документации",
    "promptExample": "Пример Промпта",
    "features": "Ключевые Функции",
    "types": [
      {
        "id": "api-docs",
        "title": "API Документация",
        "description": "Автоматическая генерация API документации из кода",
        "color": "from-blue-500 to-indigo-600",
        "example": {
          "prompt": "@src/api/ Сгенерировать полную API документацию для всех API файлов в этой директории, включая описания эндпоинтов, описания параметров, форматы ответов и примеры использования",
          "features": [
            "Автоматическое извлечение API эндпоинтов",
            "Генерация таблиц описания параметров",
            "Включение примеров запрос/ответ",
            "Поддержка множественных методов аутентификации",
            "Генерация интерактивной документации"
          ]
        }
      },
      {
        "id": "readme",
        "title": "README Документация",
        "description": "Генерация документации описания проекта",
        "color": "from-green-500 to-emerald-600",
        "example": {
          "prompt": "@package.json @src/ Проанализировать структуру и функциональность этого проекта, сгенерировать полный README.md документ, включая введение проекта, инструкции по установке, методы использования и руководящие принципы вклада",
          "features": [
            "Обзор проекта и функции",
            "Инструкции по установке и настройке",
            "Примеры использования и туториалы",
            "Руководящие принципы вклада",
            "Информация о лицензии"
          ]
        }
      },
      {
        "id": "user-manual",
        "title": "Руководство Пользователя",
        "description": "Создание детальных пользовательских руководств",
        "color": "from-purple-500 to-pink-600",
        "example": {
          "prompt": "@src/components/ Создать руководство пользователя на основе этих компонентов, включая описания функций, шаги использования, FAQ и устранение неполадок",
          "features": [
            "Детальные описания функций",
            "Пошаговые руководства по эксплуатации",
            "Скриншоты и примеры",
            "Часто задаваемые вопросы",
            "Руководства по устранению неполадок"
          ]
        }
      },
      {
        "id": "technical-spec",
        "title": "Технические Спецификации",
        "description": "Генерация документов технической архитектуры и дизайна",
        "color": "from-orange-500 to-red-600",
        "example": {
          "prompt": "@src/ @docs/architecture.md Проанализировать архитектуру проекта, сгенерировать документы технических спецификаций, включая системный дизайн, поток данных, определения интерфейсов и требования к развертыванию",
          "features": [
            "Диаграммы системной архитектуры",
            "Диаграммы потока данных",
            "Спецификации интерфейсов",
            "Требования к развертыванию",
            "Метрики производительности"
          ]
        }
      }
    ],
    "workflow": {
      "title": "Рабочий Процесс Генерации Документации",
      "description": "Следуйте этим шагам для генерации высококачественной документации",
      "steps": [
        {
          "step": 1,
          "title": "Анализ Структуры Проекта",
          "description": "Позвольте ИИ понять общую структуру и функциональность проекта",
          "commands": [
            "@. Проанализировать общую структуру этого проекта",
            "@package.json Объяснить зависимости и конфигурацию проекта",
            "@README.md Понять базовую информацию проекта"
          ]
        },
        {
          "step": 2,
          "title": "Выбор Типа Документации",
          "description": "Выбрать подходящий тип документации и шаблон согласно требованиям",
          "commands": [
            "Мне нужно сгенерировать API документацию",
            "Пожалуйста, создайте руководство пользователя",
            "Сгенерировать документацию технической архитектуры"
          ]
        },
        {
          "step": 3,
          "title": "Генерация Начальной Документации",
          "description": "Использовать ИИ для генерации начальной версии документации",
          "commands": [
            "@src/api/ Сгенерировать API документацию",
            "@src/components/ Создать документацию компонентов",
            "@docs/ Обновить существующую документацию"
          ]
        },
        {
          "step": 4,
          "title": "Проверка и Оптимизация",
          "description": "Проверить сгенерированную документацию и внести необходимые корректировки",
          "commands": [
            "Проверить полноту и точность документации",
            "Оптимизировать структуру и формат документации",
            "Добавить недостающие примеры и объяснения"
          ]
        }
      ]
    },
    "practicalExamples": {
      "title": "Практические Примеры",
      "description": "Посмотрите конкретные случаи генерации документации"
    },
    "examples": [
      {
        "title": "Документация React Компонента",
        "description": "Генерация детальной документации для React компонентов",
        "steps": [
          {
            "command": "@src/components/Button.tsx Сгенерировать документацию для этого компонента кнопки",
            "description": "Проанализировать props компонента, использование и примеры"
          },
          {
            "command": "Добавить примеры использования и лучшие практики",
            "description": "Дополнить реальные случаи использования и примеры кода"
          },
          {
            "command": "Сгенерировать файлы story Storybook",
            "description": "Создать интерактивные демонстрации компонентов"
          }
        ]
      },
      {
        "title": "Документация REST API",
        "description": "Генерация спецификации OpenAPI для REST API",
        "steps": [
          {
            "command": "@src/routes/ Проанализировать все API маршруты",
            "description": "Извлечь эндпоинты, параметры и форматы ответов"
          },
          {
            "command": "Сгенерировать файл спецификации OpenAPI 3.0",
            "description": "Создать стандартный формат API документации"
          },
          {
            "command": "Добавить описания аутентификации и обработки ошибок",
            "description": "Дополнить информацию о безопасности и обработке ошибок"
          }
        ]
      }
    ],
    "bestPracticesTitle": "Лучшие Практики",
    "bestPracticesDescription": "Важные соображения для генерации документации",
    "bestPractices": [
      {
        "type": "success",
        "title": "Поддержание Синхронизации Документации",
        "content": "Регулярно обновляйте документацию, чтобы обеспечить её синхронизацию с кодом, рекомендуется обновлять документацию при изменении кода."
      },
      {
        "type": "info",
        "title": "Использование Шаблонов и Стандартов",
        "content": "Принимайте последовательные шаблоны документации и стандарты форматирования для улучшения читаемости и профессионализма."
      },
      {
        "type": "warning",
        "title": "Валидация Сгенерированного Контента",
        "content": "ИИ-сгенерированная документация требует человеческого обзора для обеспечения точности и полноты технических деталей."
      },
      {
        "type": "success",
        "title": "Добавление Практических Примеров",
        "content": "Включайте реальные примеры кода и случаи использования в документацию, чтобы помочь пользователям лучше понять."
      }
    ],
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Теперь, когда вы освоили техники генерации документации, вы можете продолжить изучение других практических навыков:",
      "codeRefactoring": "Рефакторинг Кода",
      "codeReview": "Ревью Кода",
      "backToGuides": "Вернуться к Руководствам"
    }
  }
};

// Function to apply Documentation translations
function applyDocumentationTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = documentationTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Documentation translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesDocumentation with professional translation
    data.guidesDocumentation = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Documentation translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const documentation = newData.guidesDocumentation;
    console.log(`   - Hero title: "${documentation?.hero?.title || 'N/A'}"`);
    console.log(`   - Types: ${documentation?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${documentation?.workflow?.steps?.length || 0}`);
    console.log(`   - Examples: ${documentation?.examples?.length || 0}`);
    console.log(`   - Best practices: ${documentation?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Documentation translations for ${langCode}:`, error.message);
  }
}

// Apply Documentation translations
console.log('🚀 Applying professional Documentation translations for Korean, Spanish, and Russian...\n');

Object.keys(documentationTranslations).forEach(langCode => {
  const langNames = {
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying Documentation translations for ${langNames[langCode]}...`);
  applyDocumentationTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Documentation translations applied!');
console.log('🎯 Korean, Spanish, and Russian now have complete professional content.');
