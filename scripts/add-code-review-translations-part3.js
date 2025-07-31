const fs = require('fs');
const path = require('path');

// Complete Code Review translations for Korean, Spanish, and Russian
const codeReviewTranslations = {
  ko: {
    "title": "코드 리뷰 어시스턴트",
    "subtitle": "코드 품질 검사에 AI를 사용하세요",
    "description": "코드 품질, 보안, 팀 협업 효율성을 향상시키기 위한 포괄적인 코드 리뷰에 AI의 힘을 활용하세요.",
    "overview": {
      "title": "리뷰 개요",
      "description": "코드 리뷰는 소프트웨어 개발 프로세스의 중요한 부분으로, 잠재적인 문제를 식별하고 코드 품질을 향상시키기 위해 코드를 체계적으로 검사합니다. Gemini CLI는 문제를 빠르게 식별하고 개선 제안을 제공하는 데 도움이 되는 지능적인 코드 리뷰 기능을 제공합니다."
    },
    "typesTitle": "리뷰 유형",
    "typesDescription": "다양한 유형의 코드 리뷰 초점에 대해 알아보세요",
    "types": [
      {
        "icon": "security",
        "title": "보안 리뷰",
        "description": "코드의 보안 취약점과 위험을 확인",
        "checks": [
          {
            "name": "SQL 인젝션 탐지"
          },
          {
            "name": "XSS 취약점 스캔"
          },
          {
            "name": "권한 검증 확인"
          },
          {
            "name": "민감한 정보 누출"
          }
        ]
      },
      {
        "icon": "bugs",
        "title": "버그 탐지",
        "description": "잠재적인 버그와 논리적 오류 식별",
        "checks": [
          {
            "name": "널 포인터 예외"
          },
          {
            "name": "배열 경계 초과"
          },
          {
            "name": "리소스 누수"
          },
          {
            "name": "데드락 탐지"
          }
        ]
      },
      {
        "icon": "performance",
        "title": "성능 분석",
        "description": "코드 성능과 최적화 기회 분석",
        "checks": [
          {
            "name": "알고리즘 복잡도"
          },
          {
            "name": "메모리 사용량"
          },
          {
            "name": "데이터베이스 쿼리"
          },
          {
            "name": "캐싱 전략"
          }
        ]
      },
      {
        "icon": "style",
        "title": "코드 스타일",
        "description": "코드 표준과 일관성 확인",
        "checks": [
          {
            "name": "명명 규칙"
          },
          {
            "name": "코드 포맷팅"
          },
          {
            "name": "주석 품질"
          },
          {
            "name": "함수 길이"
          }
        ]
      }
    ],
    "workflow": {
      "title": "리뷰 워크플로우",
      "description": "체계적인 코드 리뷰 프로세스를 따르세요",
      "steps": [
        {
          "title": "리뷰 준비",
          "description": "리뷰 규칙과 검사 범위 구성",
          "example": "# 리뷰 규칙 구성\ngemini review config --rules security,performance\n\n# 검사 범위 설정\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "리뷰 실행",
          "description": "자동화된 코드 리뷰 실행",
          "example": "# 포괄적 리뷰\ngemini review --comprehensive --output report.json\n\n# 증분 리뷰\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "결과 분석",
          "description": "리뷰 보고서 확인 및 문제 분석",
          "example": "# 리뷰 보고서 확인\ngemini review report --format html\n\n# 심각도별 정렬\ngemini review list --severity high"
        },
        {
          "title": "문제 수정",
          "description": "제안에 따라 식별된 문제 수정",
          "example": "# 자동 수정\ngemini review fix --auto --safe-only\n\n# 대화형 수정\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "리뷰 체크포인트",
    "checkpointsDescription": "중요한 코드 리뷰 검사 항목",
    "checkpoints": [
      {
        "severity": "high",
        "title": "보안 취약점",
        "description": "보안 문제로 이어질 수 있는 코드 결함",
        "items": [
          {
            "text": "검증되지 않은 사용자 입력"
          },
          {
            "text": "하드코딩된 패스워드나 키"
          },
          {
            "text": "안전하지 않은 암호화 알고리즘"
          },
          {
            "text": "권한 우회 취약점"
          }
        ]
      },
      {
        "severity": "high",
        "title": "치명적 오류",
        "description": "프로그램 충돌을 일으킬 수 있는 심각한 문제",
        "items": [
          {
            "text": "널 포인터 역참조"
          },
          {
            "text": "배열 경계 초과 접근"
          },
          {
            "text": "메모리 누수"
          },
          {
            "text": "데드락 위험"
          }
        ]
      },
      {
        "severity": "medium",
        "title": "성능 문제",
        "description": "프로그램 성능에 영향을 미치는 코드 문제",
        "items": [
          {
            "text": "비효율적인 알고리즘 구현"
          },
          {
            "text": "불필요한 데이터베이스 쿼리"
          },
          {
            "text": "캐싱 메커니즘 부족"
          },
          {
            "text": "부적절한 리소스 사용"
          }
        ]
      },
      {
        "severity": "low",
        "title": "코드 품질",
        "description": "코드 가독성과 유지보수성에 영향을 미치는 문제",
        "items": [
          {
            "text": "함수가 너무 길거나 복잡함"
          },
          {
            "text": "비표준 변수 명명"
          },
          {
            "text": "필요한 주석 누락"
          },
          {
            "text": "코드 중복"
          }
        ]
      }
    ],
    "aiFeatures": {
      "title": "AI 리뷰 기능",
      "description": "인공지능을 활용하여 코드 리뷰 효율성과 정확성을 향상시키세요",
      "automated": {
        "title": "자동화된 탐지",
        "features": [
          {
            "name": "지능적 취약점 스캔"
          },
          {
            "name": "성능 병목 지점 식별"
          },
          {
            "name": "코드 스멜 탐지"
          },
          {
            "name": "모범 사례 제안"
          }
        ]
      },
      "intelligent": {
        "title": "지능적 분석",
        "features": [
          {
            "name": "컨텍스트 이해"
          },
          {
            "name": "비즈니스 로직 분석"
          },
          {
            "name": "아키텍처 패턴 인식"
          },
          {
            "name": "개인화된 추천"
          }
        ]
      }
    },
    "bestPracticesTitle": "리뷰 모범 사례",
    "bestPracticesDescription": "코드 리뷰 효과를 향상시키기 위한 모범 사례를 따르세요",
    "bestPractices": [
      {
        "title": "정기적인 리뷰",
        "description": "정기적인 코드 리뷰 메커니즘을 구축하고, 프로젝트 완료까지 기다리지 말고 리뷰를 수행하세요."
      },
      {
        "title": "핵심 영역에 집중",
        "description": "보안, 성능, 유지보수성을 우선시하고, 세부사항에 과도하게 집중하는 것을 피하세요."
      },
      {
        "title": "팀 협업",
        "description": "팀 구성원들이 리뷰 프로세스에 참여하도록 격려하고, 지식과 경험을 공유하세요."
      },
      {
        "title": "지속적인 개선",
        "description": "리뷰 결과를 바탕으로 개발 프로세스와 코딩 표준을 지속적으로 개선하세요."
      }
    ],
    "nextSteps": {
      "title": "다음 단계",
      "description": "더 많은 개발 도구와 모범 사례를 계속 학습하세요",
      "integration": "도구 통합",
      "advancedConfig": "고급 구성"
    }
  },
  es: {
    "title": "Asistente de Revisión de Código",
    "subtitle": "Usa IA para inspección de calidad de código",
    "description": "Aprovecha el poder de la IA para revisiones de código integrales para mejorar la calidad del código, seguridad y eficiencia de colaboración en equipo.",
    "overview": {
      "title": "Resumen de Revisión",
      "description": "La revisión de código es una parte crítica del proceso de desarrollo de software, verificando sistemáticamente el código para identificar problemas potenciales y mejorar la calidad del código. Gemini CLI proporciona capacidades de revisión de código inteligentes para ayudarte a identificar rápidamente problemas y proporcionar sugerencias de mejora."
    },
    "typesTitle": "Tipos de Revisión",
    "typesDescription": "Aprende sobre diferentes tipos de enfoques de revisión de código",
    "types": [
      {
        "icon": "security",
        "title": "Revisión de Seguridad",
        "description": "Verificar vulnerabilidades y riesgos de seguridad en el código",
        "checks": [
          {
            "name": "Detección de Inyección SQL"
          },
          {
            "name": "Escaneo de Vulnerabilidad XSS"
          },
          {
            "name": "Verificación de Permisos"
          },
          {
            "name": "Filtración de Información Sensible"
          }
        ]
      },
      {
        "icon": "bugs",
        "title": "Detección de Bugs",
        "description": "Identificar bugs potenciales y errores lógicos",
        "checks": [
          {
            "name": "Excepción de Puntero Nulo"
          },
          {
            "name": "Desbordamiento de Array"
          },
          {
            "name": "Fugas de Recursos"
          },
          {
            "name": "Detección de Deadlock"
          }
        ]
      },
      {
        "icon": "performance",
        "title": "Análisis de Rendimiento",
        "description": "Analizar rendimiento del código y oportunidades de optimización",
        "checks": [
          {
            "name": "Complejidad de Algoritmo"
          },
          {
            "name": "Uso de Memoria"
          },
          {
            "name": "Consultas de Base de Datos"
          },
          {
            "name": "Estrategia de Cache"
          }
        ]
      },
      {
        "icon": "style",
        "title": "Estilo de Código",
        "description": "Verificar estándares y consistencia del código",
        "checks": [
          {
            "name": "Convenciones de Nomenclatura"
          },
          {
            "name": "Formato de Código"
          },
          {
            "name": "Calidad de Comentarios"
          },
          {
            "name": "Longitud de Función"
          }
        ]
      }
    ],
    "workflow": {
      "title": "Flujo de Trabajo de Revisión",
      "description": "Sigue un proceso de revisión de código sistemático",
      "steps": [
        {
          "title": "Preparar Revisión",
          "description": "Configurar reglas de revisión y alcance de verificación",
          "example": "# Configurar reglas de revisión\ngemini review config --rules security,performance\n\n# Establecer alcance de verificación\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "Ejecutar Revisión",
          "description": "Ejecutar revisión de código automatizada",
          "example": "# Revisión integral\ngemini review --comprehensive --output report.json\n\n# Revisión incremental\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "Analizar Resultados",
          "description": "Ver reporte de revisión y analizar problemas",
          "example": "# Ver reporte de revisión\ngemini review report --format html\n\n# Ordenar por severidad\ngemini review list --severity high"
        },
        {
          "title": "Corregir Problemas",
          "description": "Corregir problemas identificados basándose en sugerencias",
          "example": "# Corrección automática\ngemini review fix --auto --safe-only\n\n# Corrección interactiva\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "Puntos de Control de Revisión",
    "checkpointsDescription": "Elementos importantes de verificación de revisión de código",
    "checkpoints": [
      {
        "severity": "high",
        "title": "Vulnerabilidades de Seguridad",
        "description": "Defectos de código que pueden llevar a problemas de seguridad",
        "items": [
          {
            "text": "Entrada de usuario no validada"
          },
          {
            "text": "Contraseñas o claves codificadas"
          },
          {
            "text": "Algoritmos de cifrado inseguros"
          },
          {
            "text": "Vulnerabilidades de bypass de permisos"
          }
        ]
      },
      {
        "severity": "high",
        "title": "Errores Críticos",
        "description": "Problemas serios que pueden causar fallos del programa",
        "items": [
          {
            "text": "Desreferencia de puntero nulo"
          },
          {
            "text": "Acceso fuera de límites de array"
          },
          {
            "text": "Fugas de memoria"
          },
          {
            "text": "Riesgos de deadlock"
          }
        ]
      },
      {
        "severity": "medium",
        "title": "Problemas de Rendimiento",
        "description": "Problemas de código que afectan el rendimiento del programa",
        "items": [
          {
            "text": "Implementación de algoritmo ineficiente"
          },
          {
            "text": "Consultas de base de datos innecesarias"
          },
          {
            "text": "Mecanismos de cache faltantes"
          },
          {
            "text": "Uso inapropiado de recursos"
          }
        ]
      },
      {
        "severity": "low",
        "title": "Calidad de Código",
        "description": "Problemas que afectan la legibilidad y mantenibilidad del código",
        "items": [
          {
            "text": "Funciones demasiado largas o complejas"
          },
          {
            "text": "Nomenclatura de variables no estándar"
          },
          {
            "text": "Comentarios necesarios faltantes"
          },
          {
            "text": "Duplicación de código"
          }
        ]
      }
    ],
    "aiFeatures": {
      "title": "Características de Revisión IA",
      "description": "Aprovecha la inteligencia artificial para mejorar la eficiencia y precisión de la revisión de código",
      "automated": {
        "title": "Detección Automatizada",
        "features": [
          {
            "name": "Escaneo Inteligente de Vulnerabilidades"
          },
          {
            "name": "Identificación de Cuellos de Botella"
          },
          {
            "name": "Detección de Code Smell"
          },
          {
            "name": "Sugerencias de Mejores Prácticas"
          }
        ]
      },
      "intelligent": {
        "title": "Análisis Inteligente",
        "features": [
          {
            "name": "Comprensión de Contexto"
          },
          {
            "name": "Análisis de Lógica de Negocio"
          },
          {
            "name": "Reconocimiento de Patrones de Arquitectura"
          },
          {
            "name": "Recomendaciones Personalizadas"
          }
        ]
      }
    },
    "bestPracticesTitle": "Mejores Prácticas de Revisión",
    "bestPracticesDescription": "Sigue estas mejores prácticas para mejorar la efectividad de la revisión de código",
    "bestPractices": [
      {
        "title": "Revisiones Regulares",
        "description": "Establece mecanismos de revisión de código regulares, no esperes hasta la finalización del proyecto para realizar revisiones."
      },
      {
        "title": "Enfoque en Áreas Clave",
        "description": "Prioriza seguridad, rendimiento y mantenibilidad, evita enfocarte demasiado en detalles."
      },
      {
        "title": "Colaboración de Equipo",
        "description": "Anima a los miembros del equipo a participar en el proceso de revisión, compartiendo conocimiento y experiencia."
      },
      {
        "title": "Mejora Continua",
        "description": "Mejora continuamente los procesos de desarrollo y estándares de codificación basándose en los resultados de revisión."
      }
    ],
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Continúa aprendiendo más herramientas de desarrollo y mejores prácticas",
      "integration": "Integración de Herramientas",
      "advancedConfig": "Configuración Avanzada"
    }
  },
  ru: {
    "title": "Помощник Ревью Кода",
    "subtitle": "Используйте ИИ для проверки качества кода",
    "description": "Используйте мощь ИИ для комплексного ревью кода для улучшения качества кода, безопасности и эффективности командной работы.",
    "overview": {
      "title": "Обзор Ревью",
      "description": "Ревью кода является критической частью процесса разработки программного обеспечения, систематически проверяя код для выявления потенциальных проблем и улучшения качества кода. Gemini CLI предоставляет интеллектуальные возможности ревью кода, чтобы помочь вам быстро выявлять проблемы и предоставлять предложения по улучшению."
    },
    "typesTitle": "Типы Ревью",
    "typesDescription": "Изучите различные типы фокуса ревью кода",
    "types": [
      {
        "icon": "security",
        "title": "Ревью Безопасности",
        "description": "Проверка уязвимостей безопасности и рисков в коде",
        "checks": [
          {
            "name": "Обнаружение SQL-инъекций"
          },
          {
            "name": "Сканирование XSS-уязвимостей"
          },
          {
            "name": "Проверка разрешений"
          },
          {
            "name": "Утечка конфиденциальной информации"
          }
        ]
      },
      {
        "icon": "bugs",
        "title": "Обнаружение Багов",
        "description": "Выявление потенциальных багов и логических ошибок",
        "checks": [
          {
            "name": "Исключение нулевого указателя"
          },
          {
            "name": "Выход за границы массива"
          },
          {
            "name": "Утечки ресурсов"
          },
          {
            "name": "Обнаружение взаимоблокировок"
          }
        ]
      },
      {
        "icon": "performance",
        "title": "Анализ Производительности",
        "description": "Анализ производительности кода и возможностей оптимизации",
        "checks": [
          {
            "name": "Сложность алгоритма"
          },
          {
            "name": "Использование памяти"
          },
          {
            "name": "Запросы к базе данных"
          },
          {
            "name": "Стратегия кэширования"
          }
        ]
      },
      {
        "icon": "style",
        "title": "Стиль Кода",
        "description": "Проверка стандартов и согласованности кода",
        "checks": [
          {
            "name": "Соглашения об именовании"
          },
          {
            "name": "Форматирование кода"
          },
          {
            "name": "Качество комментариев"
          },
          {
            "name": "Длина функций"
          }
        ]
      }
    ],
    "workflow": {
      "title": "Рабочий Процесс Ревью",
      "description": "Следуйте систематическому процессу ревью кода",
      "steps": [
        {
          "title": "Подготовка Ревью",
          "description": "Настройка правил ревью и области проверки",
          "example": "# Настройка правил ревью\ngemini review config --rules security,performance\n\n# Установка области проверки\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "Выполнение Ревью",
          "description": "Запуск автоматизированного ревью кода",
          "example": "# Комплексное ревью\ngemini review --comprehensive --output report.json\n\n# Инкрементальное ревью\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "Анализ Результатов",
          "description": "Просмотр отчета ревью и анализ проблем",
          "example": "# Просмотр отчета ревью\ngemini review report --format html\n\n# Сортировка по серьезности\ngemini review list --severity high"
        },
        {
          "title": "Исправление Проблем",
          "description": "Исправление выявленных проблем на основе предложений",
          "example": "# Автоматическое исправление\ngemini review fix --auto --safe-only\n\n# Интерактивное исправление\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "Контрольные Точки Ревью",
    "checkpointsDescription": "Важные элементы проверки ревью кода",
    "checkpoints": [
      {
        "severity": "high",
        "title": "Уязвимости Безопасности",
        "description": "Дефекты кода, которые могут привести к проблемам безопасности",
        "items": [
          {
            "text": "Непроверенный пользовательский ввод"
          },
          {
            "text": "Жестко закодированные пароли или ключи"
          },
          {
            "text": "Небезопасные алгоритмы шифрования"
          },
          {
            "text": "Уязвимости обхода разрешений"
          }
        ]
      },
      {
        "severity": "high",
        "title": "Критические Ошибки",
        "description": "Серьезные проблемы, которые могут вызвать сбои программы",
        "items": [
          {
            "text": "Разыменование нулевого указателя"
          },
          {
            "text": "Доступ за границы массива"
          },
          {
            "text": "Утечки памяти"
          },
          {
            "text": "Риски взаимоблокировки"
          }
        ]
      },
      {
        "severity": "medium",
        "title": "Проблемы Производительности",
        "description": "Проблемы кода, влияющие на производительность программы",
        "items": [
          {
            "text": "Неэффективная реализация алгоритма"
          },
          {
            "text": "Ненужные запросы к базе данных"
          },
          {
            "text": "Отсутствующие механизмы кэширования"
          },
          {
            "text": "Неправильное использование ресурсов"
          }
        ]
      },
      {
        "severity": "low",
        "title": "Качество Кода",
        "description": "Проблемы, влияющие на читаемость и поддерживаемость кода",
        "items": [
          {
            "text": "Функции слишком длинные или сложные"
          },
          {
            "text": "Нестандартное именование переменных"
          },
          {
            "text": "Отсутствующие необходимые комментарии"
          },
          {
            "text": "Дублирование кода"
          }
        ]
      }
    ],
    "aiFeatures": {
      "title": "Функции ИИ-Ревью",
      "description": "Используйте искусственный интеллект для повышения эффективности и точности ревью кода",
      "automated": {
        "title": "Автоматизированное Обнаружение",
        "features": [
          {
            "name": "Интеллектуальное сканирование уязвимостей"
          },
          {
            "name": "Выявление узких мест производительности"
          },
          {
            "name": "Обнаружение запахов кода"
          },
          {
            "name": "Предложения лучших практик"
          }
        ]
      },
      "intelligent": {
        "title": "Интеллектуальный Анализ",
        "features": [
          {
            "name": "Понимание контекста"
          },
          {
            "name": "Анализ бизнес-логики"
          },
          {
            "name": "Распознавание архитектурных паттернов"
          },
          {
            "name": "Персонализированные рекомендации"
          }
        ]
      }
    },
    "bestPracticesTitle": "Лучшие Практики Ревью",
    "bestPracticesDescription": "Следуйте этим лучшим практикам для повышения эффективности ревью кода",
    "bestPractices": [
      {
        "title": "Регулярные Ревью",
        "description": "Установите регулярные механизмы ревью кода, не ждите завершения проекта для проведения ревью."
      },
      {
        "title": "Фокус на Ключевых Областях",
        "description": "Приоритизируйте безопасность, производительность и поддерживаемость, избегайте чрезмерного фокуса на деталях."
      },
      {
        "title": "Командная Работа",
        "description": "Поощряйте участие членов команды в процессе ревью, делитесь знаниями и опытом."
      },
      {
        "title": "Непрерывное Улучшение",
        "description": "Непрерывно улучшайте процессы разработки и стандарты кодирования на основе результатов ревью."
      }
    ],
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Продолжайте изучать больше инструментов разработки и лучших практик",
      "integration": "Интеграция Инструментов",
      "advancedConfig": "Расширенная Конфигурация"
    }
  }
};

// Function to apply Code Review translations
function applyCodeReviewTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = codeReviewTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Code Review translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesCodeReview with professional translation
    data.guidesCodeReview = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Code Review translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const codeReview = newData.guidesCodeReview;
    console.log(`   - Title: "${codeReview?.title || 'N/A'}"`);
    console.log(`   - Types: ${codeReview?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${codeReview?.workflow?.steps?.length || 0}`);
    console.log(`   - Checkpoints: ${codeReview?.checkpoints?.length || 0}`);
    console.log(`   - Best practices: ${codeReview?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Code Review translations for ${langCode}:`, error.message);
  }
}

// Apply Code Review translations
console.log('🚀 Applying professional Code Review translations for Korean, Spanish, and Russian...\n');

Object.keys(codeReviewTranslations).forEach(langCode => {
  const langNames = {
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying Code Review translations for ${langNames[langCode]}...`);
  applyCodeReviewTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Code Review translations applied!');
console.log('🎯 Korean, Spanish, and Russian now have complete professional content.');
