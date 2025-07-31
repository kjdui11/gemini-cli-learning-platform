const fs = require('fs');
const path = require('path');

// Complete MCP Protocol translations for Korean, Spanish, and Russian
const mcpProtocolTranslations = {
  ko: {
    "hero": {
      "title": "MCP 프로토콜 사용법",
      "subtitle": "Gemini CLI 기능을 확장하기 위해 Model Context Protocol을 마스터하세요",
      "advanced": "고급 기능",
      "extensible": "확장 가능"
    },
    "overview": {
      "title": "프로토콜 개요",
      "description": "Model Context Protocol (MCP)은 AI 애플리케이션이 외부 데이터 소스 및 도구와 안전하고 제어된 방식으로 통합할 수 있게 하는 오픈 표준입니다."
    },
    "concepts": {
      "overview": {
        "title": "MCP 프로토콜 개요",
        "description": "Model Context Protocol의 기본 개념과 아키텍처",
        "definition": "MCP는 AI 애플리케이션이 외부 데이터 소스 및 도구와 안전하고 제어된 방식으로 통합할 수 있게 하는 오픈 표준입니다.",
        "components": {
          "host": {
            "name": "MCP 호스트",
            "description": "AI 애플리케이션 (Gemini CLI 등)",
            "role": "연결을 시작하고 MCP 서버가 제공하는 기능을 사용합니다"
          },
          "server": {
            "name": "MCP 서버",
            "description": "특정 기능을 제공하는 독립적인 프로세스",
            "role": "호스트 사용을 위한 도구, 리소스, 프롬프트를 노출합니다"
          },
          "transport": {
            "name": "전송 계층",
            "description": "호스트와 서버 간의 통신 메커니즘",
            "role": "stdio, SSE, WebSocket과 같은 프로토콜을 지원합니다"
          }
        }
      },
      "capabilities": {
        "title": "핵심 기능",
        "description": "MCP 서버가 제공할 수 있는 세 가지 주요 기능 유형",
        "definition": "MCP 서버는 세 가지 주요 기능 유형을 통해 AI 애플리케이션에 확장 기능을 제공합니다.",
        "types": {
          "tools": {
            "name": "도구",
            "description": "AI가 작업을 수행할 수 있게 하는 실행 가능한 함수",
            "examples": "파일 작업, API 호출, 데이터베이스 쿼리 등"
          },
          "resources": {
            "name": "리소스",
            "description": "AI에 맥락 정보를 제공하는 읽기 가능한 데이터 소스",
            "examples": "파일 내용, 데이터베이스 레코드, API 응답 등"
          },
          "prompts": {
            "name": "프롬프트",
            "description": "구조화된 상호작용 방법을 제공하는 미리 정의된 프롬프트 템플릿",
            "examples": "코드 리뷰 템플릿, 문서 생성 템플릿 등"
          }
        }
      },
      "configuration": {
        "title": "구성 설정",
        "description": "MCP 서버를 구성하고 사용하는 방법",
        "definition": "MCP 서버 구성에는 세 단계가 필요합니다: 설치, 구성, 검증.",
        "steps": {
          "install": {
            "step": "1. MCP 서버 설치",
            "description": "npm 또는 다른 패키지 관리자를 사용하여 필요한 MCP 서버를 설치합니다",
            "command": "npm install -g @modelcontextprotocol/server-filesystem"
          },
          "configure": {
            "step": "2. Gemini CLI 구성",
            "description": "Gemini CLI 구성 파일에 MCP 서버 구성을 추가합니다",
            "command": "gemini config mcp add filesystem"
          },
          "verify": {
            "step": "3. 연결 확인",
            "description": "MCP 서버가 제대로 작동하는지 테스트합니다",
            "command": "gemini mcp list"
          }
        }
      }
    },
    "examples": {
      "title": "실용적인 예제",
      "filesystem": {
        "title": "파일시스템 서버",
        "description": "파일 작업을 위해 MCP 파일시스템 서버 사용",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-filesystem",
          "installDesc": "파일시스템 MCP 서버 설치",
          "configure": "gemini config mcp add filesystem --path /your/project/path",
          "configureDesc": "파일시스템 서버 경로 구성",
          "use": "프로젝트의 모든 TypeScript 파일을 분석하는 데 도움을 주세요",
          "useDesc": "AI가 이제 지정된 경로의 파일에 액세스하고 분석할 수 있습니다"
        }
      },
      "database": {
        "title": "데이터베이스 서버",
        "description": "쿼리 및 분석을 위해 데이터베이스에 연결",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-sqlite",
          "installDesc": "SQLite MCP 서버 설치",
          "configure": "gemini config mcp add sqlite --db ./data.db",
          "configureDesc": "데이터베이스 연결 구성",
          "query": "사용자 테이블에서 가장 최근에 등록된 10명의 사용자 쿼리",
          "queryDesc": "AI가 SQL 쿼리를 실행하고 결과를 분석할 수 있습니다"
        }
      }
    },
    "bestPractices": {
      "title": "모범 사례",
      "security": {
        "title": "보안 고려사항",
        "content": "신뢰할 수 있는 MCP 서버에만 연결하고, 서버 권한을 정기적으로 검토하며, 민감한 데이터 노출을 피하세요."
      },
      "performance": {
        "title": "성능 최적화",
        "content": "서버 수를 합리적으로 구성하고, 리소스 사용량을 모니터링하며, 데이터 전송 효율성을 최적화하세요."
      },
      "debugging": {
        "title": "디버깅 팁",
        "content": "상세 로깅 모드를 사용하고, 서버 상태를 확인하며, 구성 파일 형식을 검증하세요."
      }
    },
    "nextSteps": {
      "title": "다음 단계",
      "description": "이제 MCP 프로토콜을 이해했으므로 더 고급 구성 및 통합 방법을 계속 학습할 수 있습니다:",
      "advancedConfig": "고급 구성",
      "integration": "통합 가이드",
      "backToGuides": "가이드로 돌아가기"
    }
  },
  es: {
    "hero": {
      "title": "Uso del Protocolo MCP",
      "subtitle": "Domina el Model Context Protocol para extender la funcionalidad de Gemini CLI",
      "advanced": "Características Avanzadas",
      "extensible": "Extensible"
    },
    "overview": {
      "title": "Resumen del Protocolo",
      "description": "El Model Context Protocol (MCP) es un estándar abierto que permite a las aplicaciones de IA integrarse de manera segura y controlada con fuentes de datos externas y herramientas."
    },
    "concepts": {
      "overview": {
        "title": "Resumen del Protocolo MCP",
        "description": "Conceptos básicos y arquitectura del Model Context Protocol",
        "definition": "MCP es un estándar abierto que permite a las aplicaciones de IA integrarse de manera segura y controlada con fuentes de datos externas y herramientas.",
        "components": {
          "host": {
            "name": "Host MCP",
            "description": "Aplicación de IA (como Gemini CLI)",
            "role": "Inicia conexiones y utiliza funcionalidades proporcionadas por servidores MCP"
          },
          "server": {
            "name": "Servidor MCP",
            "description": "Proceso independiente que proporciona funcionalidades específicas",
            "role": "Expone herramientas, recursos y prompts para uso del host"
          },
          "transport": {
            "name": "Capa de Transporte",
            "description": "Mecanismo de comunicación entre host y servidor",
            "role": "Soporta protocolos como stdio, SSE y WebSocket"
          }
        }
      },
      "capabilities": {
        "title": "Capacidades Principales",
        "description": "Tres tipos principales de funcionalidades que los servidores MCP pueden proporcionar",
        "definition": "Los servidores MCP proporcionan capacidades de extensión a aplicaciones de IA a través de tres tipos principales de funcionalidades.",
        "types": {
          "tools": {
            "name": "Herramientas",
            "description": "Funciones ejecutables que permiten a la IA realizar operaciones",
            "examples": "Operaciones de archivos, llamadas API, consultas de base de datos, etc."
          },
          "resources": {
            "name": "Recursos",
            "description": "Fuentes de datos legibles que proporcionan información contextual a la IA",
            "examples": "Contenidos de archivos, registros de base de datos, respuestas API, etc."
          },
          "prompts": {
            "name": "Prompts",
            "description": "Plantillas de prompts predefinidas que proporcionan métodos de interacción estructurados",
            "examples": "Plantillas de revisión de código, plantillas de generación de documentación, etc."
          }
        }
      },
      "configuration": {
        "title": "Configuración Setup",
        "description": "Cómo configurar y usar servidores MCP",
        "definition": "Configurar servidores MCP requiere tres pasos: instalación, configuración y verificación.",
        "steps": {
          "install": {
            "step": "1. Instalar Servidor MCP",
            "description": "Use npm u otros gestores de paquetes para instalar servidores MCP requeridos",
            "command": "npm install -g @modelcontextprotocol/server-filesystem"
          },
          "configure": {
            "step": "2. Configurar Gemini CLI",
            "description": "Agregar configuración del servidor MCP al archivo de configuración de Gemini CLI",
            "command": "gemini config mcp add filesystem"
          },
          "verify": {
            "step": "3. Verificar Conexión",
            "description": "Probar si el servidor MCP está funcionando correctamente",
            "command": "gemini mcp list"
          }
        }
      }
    },
    "examples": {
      "title": "Ejemplos Prácticos",
      "filesystem": {
        "title": "Servidor Filesystem",
        "description": "Usar servidor filesystem MCP para operaciones de archivos",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-filesystem",
          "installDesc": "Instalar servidor MCP filesystem",
          "configure": "gemini config mcp add filesystem --path /your/project/path",
          "configureDesc": "Configurar ruta del servidor filesystem",
          "use": "Por favor ayúdame a analizar todos los archivos TypeScript en el proyecto",
          "useDesc": "La IA ahora puede acceder y analizar archivos en la ruta especificada"
        }
      },
      "database": {
        "title": "Servidor Base de Datos",
        "description": "Conectar a base de datos para consultas y análisis",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-sqlite",
          "installDesc": "Instalar servidor MCP SQLite",
          "configure": "gemini config mcp add sqlite --db ./data.db",
          "configureDesc": "Configurar conexión de base de datos",
          "query": "Consultar los 10 usuarios registrados más recientemente de la tabla usuario",
          "queryDesc": "La IA puede ejecutar consultas SQL y analizar resultados"
        }
      }
    },
    "bestPractices": {
      "title": "Mejores Prácticas",
      "security": {
        "title": "Consideraciones de Seguridad",
        "content": "Solo conectar a servidores MCP confiables, revisar regularmente permisos del servidor, evitar exponer datos sensibles."
      },
      "performance": {
        "title": "Optimización de Rendimiento",
        "content": "Configurar número de servidores razonablemente, monitorear uso de recursos, optimizar eficiencia de transmisión de datos."
      },
      "debugging": {
        "title": "Consejos de Depuración",
        "content": "Usar modo de logging detallado, verificar estado del servidor, validar formato del archivo de configuración."
      }
    },
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Ahora que entiendes el protocolo MCP, puedes continuar aprendiendo métodos de configuración e integración más avanzados:",
      "advancedConfig": "Configuración Avanzada",
      "integration": "Guía de Integración",
      "backToGuides": "Volver a las Guías"
    }
  },
  ru: {
    "hero": {
      "title": "Использование Протокола MCP",
      "subtitle": "Освойте Model Context Protocol для расширения функциональности Gemini CLI",
      "advanced": "Расширенные Функции",
      "extensible": "Расширяемый"
    },
    "overview": {
      "title": "Обзор Протокола",
      "description": "Model Context Protocol (MCP) - это открытый стандарт, который позволяет ИИ-приложениям безопасно и контролируемо интегрироваться с внешними источниками данных и инструментами."
    },
    "concepts": {
      "overview": {
        "title": "Обзор Протокола MCP",
        "description": "Основные концепции и архитектура Model Context Protocol",
        "definition": "MCP - это открытый стандарт, который позволяет ИИ-приложениям безопасно и контролируемо интегрироваться с внешними источниками данных и инструментами.",
        "components": {
          "host": {
            "name": "MCP Хост",
            "description": "ИИ-приложение (например, Gemini CLI)",
            "role": "Инициирует соединения и использует функциональность, предоставляемую MCP серверами"
          },
          "server": {
            "name": "MCP Сервер",
            "description": "Независимый процесс, предоставляющий специфическую функциональность",
            "role": "Предоставляет инструменты, ресурсы и промпты для использования хостом"
          },
          "transport": {
            "name": "Транспортный Слой",
            "description": "Механизм коммуникации между хостом и сервером",
            "role": "Поддерживает протоколы такие как stdio, SSE и WebSocket"
          }
        }
      },
      "capabilities": {
        "title": "Основные Возможности",
        "description": "Три основных типа функциональности, которые могут предоставлять MCP серверы",
        "definition": "MCP серверы предоставляют возможности расширения ИИ-приложениям через три основных типа функциональности.",
        "types": {
          "tools": {
            "name": "Инструменты",
            "description": "Исполняемые функции, которые позволяют ИИ выполнять операции",
            "examples": "Файловые операции, API вызовы, запросы к базе данных и т.д."
          },
          "resources": {
            "name": "Ресурсы",
            "description": "Читаемые источники данных, которые предоставляют контекстную информацию ИИ",
            "examples": "Содержимое файлов, записи базы данных, API ответы и т.д."
          },
          "prompts": {
            "name": "Промпты",
            "description": "Предопределенные шаблоны промптов, предоставляющие структурированные методы взаимодействия",
            "examples": "Шаблоны ревью кода, шаблоны генерации документации и т.д."
          }
        }
      },
      "configuration": {
        "title": "Настройка Конфигурации",
        "description": "Как настроить и использовать MCP серверы",
        "definition": "Настройка MCP серверов требует трех шагов: установка, конфигурация и проверка.",
        "steps": {
          "install": {
            "step": "1. Установить MCP Сервер",
            "description": "Используйте npm или другие менеджеры пакетов для установки необходимых MCP серверов",
            "command": "npm install -g @modelcontextprotocol/server-filesystem"
          },
          "configure": {
            "step": "2. Настроить Gemini CLI",
            "description": "Добавить конфигурацию MCP сервера в файл конфигурации Gemini CLI",
            "command": "gemini config mcp add filesystem"
          },
          "verify": {
            "step": "3. Проверить Соединение",
            "description": "Протестировать, работает ли MCP сервер правильно",
            "command": "gemini mcp list"
          }
        }
      }
    },
    "examples": {
      "title": "Практические Примеры",
      "filesystem": {
        "title": "Файловый Сервер",
        "description": "Использование MCP файлового сервера для операций с файлами",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-filesystem",
          "installDesc": "Установить файловый MCP сервер",
          "configure": "gemini config mcp add filesystem --path /your/project/path",
          "configureDesc": "Настроить путь файлового сервера",
          "use": "Пожалуйста, помогите мне проанализировать все TypeScript файлы в проекте",
          "useDesc": "ИИ теперь может получать доступ и анализировать файлы в указанном пути"
        }
      },
      "database": {
        "title": "Сервер Базы Данных",
        "description": "Подключение к базе данных для запросов и анализа",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-sqlite",
          "installDesc": "Установить SQLite MCP сервер",
          "configure": "gemini config mcp add sqlite --db ./data.db",
          "configureDesc": "Настроить подключение к базе данных",
          "query": "Запросить 10 недавно зарегистрированных пользователей из таблицы пользователей",
          "queryDesc": "ИИ может выполнять SQL запросы и анализировать результаты"
        }
      }
    },
    "bestPractices": {
      "title": "Лучшие Практики",
      "security": {
        "title": "Соображения Безопасности",
        "content": "Подключайтесь только к доверенным MCP серверам, регулярно проверяйте разрешения сервера, избегайте раскрытия чувствительных данных."
      },
      "performance": {
        "title": "Оптимизация Производительности",
        "content": "Разумно настраивайте количество серверов, мониторьте использование ресурсов, оптимизируйте эффективность передачи данных."
      },
      "debugging": {
        "title": "Советы по Отладке",
        "content": "Используйте подробный режим логирования, проверяйте статус сервера, валидируйте формат файла конфигурации."
      }
    },
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Теперь, когда вы понимаете протокол MCP, вы можете продолжить изучение более продвинутых методов конфигурации и интеграции:",
      "advancedConfig": "Расширенная Конфигурация",
      "integration": "Руководство по Интеграции",
      "backToGuides": "Вернуться к Руководствам"
    }
  }
};

// Function to apply MCP Protocol translations
function applyMcpProtocolTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = mcpProtocolTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No MCP Protocol translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesMcpProtocol with professional translation
    data.guidesMcpProtocol = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied MCP Protocol translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const mcpProtocol = newData.guidesMcpProtocol;
    console.log(`   - Hero title: "${mcpProtocol?.hero?.title || 'N/A'}"`);
    console.log(`   - Overview: ${mcpProtocol?.overview ? 'Yes' : 'No'}`);
    console.log(`   - Concepts: ${mcpProtocol?.concepts ? 'Yes' : 'No'}`);
    console.log(`   - Examples: ${mcpProtocol?.examples ? 'Yes' : 'No'}`);
    console.log(`   - Best practices: ${mcpProtocol?.bestPractices ? 'Yes' : 'No'}`);
    
  } catch (error) {
    console.error(`❌ Error applying MCP Protocol translations for ${langCode}:`, error.message);
  }
}

// Apply MCP Protocol translations
console.log('🚀 Applying professional MCP Protocol translations for final languages...\n');

Object.keys(mcpProtocolTranslations).forEach(langCode => {
  const langNames = {
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying MCP Protocol translations for ${langNames[langCode]}...`);
  applyMcpProtocolTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional MCP Protocol translations applied!');
console.log('🎯 Korean, Spanish, and Russian now have complete professional content.');
