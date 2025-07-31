const fs = require('fs');
const path = require('path');

// 需要添加的翻译内容模板
const translationsToAdd = {
  es: {
    about: {
      title: "Acerca de",
      subtitle: "Aprende más sobre la plataforma de aprendizaje Gemini CLI y nuestra misión de democratizar las herramientas de IA para desarrolladores.",
      mission: {
        title: "Nuestra Misión",
        description: "Nos esforzamos por hacer que las poderosas herramientas de IA sean accesibles para todos los desarrolladores, proporcionando recursos educativos integrales y guías prácticas."
      },
      features: {
        title: "Lo que ofrecemos",
        items: [
          {
            title: "Guías Integrales",
            description: "Instrucciones paso a paso desde la instalación básica hasta técnicas avanzadas."
          },
          {
            title: "Ejemplos Prácticos", 
            description: "Casos de uso del mundo real y ejemplos de proyectos para aprender."
          },
          {
            title: "Soporte Comunitario",
            description: "Una comunidad activa de desarrolladores listos para ayudar y compartir conocimientos."
          }
        ]
      },
      team: {
        title: "Nuestro Equipo",
        description: "Somos un equipo de desarrolladores y educadores apasionados comprometidos a hacer que las tecnologías de IA sean accesibles para todos."
      }
    },
    contact: {
      title: "Contáctanos",
      subtitle: "¿Tienes preguntas, sugerencias o necesitas ayuda? ¡Estamos aquí para ayudar!",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar mensaje"
      },
      info: {
        title: "Ponte en contacto",
        description: "Valoramos tus comentarios y estamos felices de ayudar con cualquier pregunta sobre Gemini CLI.",
        response: "Nos esforzamos por responder a todas las consultas dentro de 24 horas."
      },
      community: {
        title: "Únete a la comunidad",
        description: "Únete a nuestra creciente comunidad de desarrolladores:",
        github: "GitHub",
        discord: "Discord", 
        twitter: "Twitter"
      }
    },
    privacy: {
      title: "Política de Privacidad",
      subtitle: "Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu información.",
      lastUpdated: "Última actualización",
      dataCollection: {
        title: "1. Recopilación de Datos",
        description: "Recopilamos información que proporcionas directamente y datos de uso para mejorar nuestros servicios.",
        types: [
          "Información de cuenta (nombre, correo electrónico)",
          "Datos de uso y análisis",
          "Cookies y tecnologías de seguimiento",
          "Información del dispositivo y navegador"
        ]
      },
      dataUse: {
        title: "2. Uso de Datos",
        description: "Utilizamos la información recopilada para:",
        purposes: [
          "Proporcionar y mejorar nuestros servicios",
          "Personalizar tu experiencia",
          "Comunicarnos contigo sobre actualizaciones",
          "Analizar el uso y rendimiento"
        ]
      },
      dataSharing: {
        title: "3. Compartir Datos",
        description: "No vendemos tus datos personales. Solo podemos compartir información en casos limitados:",
        cases: [
          "Con tu consentimiento explícito",
          "Para cumplir con obligaciones legales",
          "Para proteger nuestros derechos y seguridad",
          "Con proveedores de servicios de confianza"
        ]
      },
      rights: {
        title: "4. Tus Derechos",
        description: "Tienes derecho a:",
        list: [
          "Acceder a tus datos",
          "Corregir información inexacta",
          "Eliminar tus datos",
          "Restringir el procesamiento",
          "Portabilidad de datos"
        ]
      },
      contact: {
        title: "5. Contáctanos",
        description: "Si tienes preguntas sobre esta política de privacidad, contáctanos en privacy@geminicli.cloud"
      }
    },
    terms: {
      title: "Términos de Uso",
      subtitle: "Por favor, lee cuidadosamente estos términos de uso antes de usar nuestro servicio.",
      lastUpdated: "Última actualización",
      acceptance: {
        title: "1. Aceptación de Términos",
        description: "Al acceder y usar este sitio web, aceptas y te comprometes a cumplir con los términos y condiciones de este acuerdo."
      },
      useTerms: {
        title: "2. Términos de Uso",
        description: "Puedes usar nuestro servicio para:",
        allowed: [
          "Propósitos de aprendizaje y educación",
          "Proyectos personales y comerciales",
          "Compartir conocimientos con la comunidad",
          "Contribuir a proyectos de código abierto"
        ],
        prohibited: "Tienes prohibido:",
        notAllowed: [
          "Violar cualquier ley aplicable",
          "Transmitir código malicioso",
          "Infringir derechos de propiedad intelectual",
          "Participar en spam o abuso"
        ]
      },
      liability: {
        title: "3. Limitación de Responsabilidad",
        description: "El servicio se proporciona \"tal como está\" sin garantías de ningún tipo. No somos responsables de ningún daño directo, indirecto o incidental."
      },
      changes: {
        title: "4. Cambios en los Términos",
        description: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigor inmediatamente después de la publicación."
      }
    },
    guidesAdvanced: {
      title: "Guías Avanzadas",
      subtitle: "Guías en profundidad para usuarios experimentados de Gemini CLI",
      sections: {
        customization: {
          title: "Personalización y Configuración",
          description: "Aprende cómo personalizar Gemini CLI para tus necesidades específicas y flujos de trabajo.",
          topics: [
            "Archivos de configuración personalizados",
            "Variables de entorno",
            "Configuración de alias de comandos",
            "Integración con IDE"
          ]
        },
        automation: {
          title: "Automatización y Scripts",
          description: "Automatiza tareas repetitivas y crea flujos de trabajo poderosos con Gemini CLI.",
          topics: [
            "Procesamiento por lotes de archivos",
            "Integración CI/CD",
            "Scripts personalizados",
            "Programación de tareas"
          ]
        },
        performance: {
          title: "Optimización de Rendimiento",
          description: "Consejos y técnicas para maximizar el rendimiento y eficiencia de Gemini CLI.",
          topics: [
            "Gestión de memoria",
            "Estrategias de caché",
            "Procesamiento paralelo",
            "Monitoreo de rendimiento"
          ]
        }
      }
    },
    guidesExamples: {
      title: "Ejemplos Prácticos",
      subtitle: "Ejemplos del mundo real y casos de uso de Gemini CLI",
      categories: {
        webDev: {
          title: "Desarrollo Web",
          description: "Ejemplos de uso de Gemini CLI en proyectos de desarrollo web",
          examples: [
            {
              title: "Generación de Componentes React",
              description: "Creación automática de componentes React con TypeScript"
            },
            {
              title: "Documentación de API",
              description: "Generación de documentación de API desde código"
            },
            {
              title: "Refactorización de Código",
              description: "Refactorización automática de bases de código grandes"
            }
          ]
        },
        dataScience: {
          title: "Ciencia de Datos",
          description: "Aplicación de Gemini CLI en proyectos de ciencia de datos",
          examples: [
            {
              title: "Análisis de Datos",
              description: "Automatización de análisis y visualización de datos"
            },
            {
              title: "Aprendizaje Automático",
              description: "Generación y optimización de modelos ML"
            },
            {
              title: "Procesamiento de Datos",
              description: "Automatización de pipelines de procesamiento de datos"
            }
          ]
        },
        devOps: {
          title: "DevOps",
          description: "Integración de Gemini CLI en flujos de trabajo DevOps",
          examples: [
            {
              title: "Automatización de Despliegue",
              description: "Automatización de procesos de despliegue y configuración"
            },
            {
              title: "Monitoreo de Infraestructura",
              description: "Creación automática de scripts de monitoreo"
            },
            {
              title: "Gestión de Configuración",
              description: "Generación y gestión de archivos de configuración"
            }
          ]
        }
      }
    }
  }
};

// 语言列表（除了已经完成的 en, zh, ru, de）
const languagesToUpdate = ['es', 'fr', 'hi', 'ja', 'ko'];

// 更新语言文件的函数
function updateLanguageFile(lang) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  try {
    // 读取现有文件
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // 添加新的翻译（这里只添加西班牙语的翻译作为示例）
    if (lang === 'es' && translationsToAdd.es) {
      Object.assign(data, translationsToAdd.es);
    }
    
    // 写回文件
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${lang}.json successfully`);
    
  } catch (error) {
    console.error(`Error updating ${lang}.json:`, error.message);
  }
}

// 执行更新
console.log('Starting translation updates...');
languagesToUpdate.forEach(updateLanguageFile);
console.log('Translation updates completed!');
