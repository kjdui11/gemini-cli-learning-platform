const fs = require('fs');
const path = require('path');

// Complete translations for last three languages
const lastLanguageTranslations = {
  es: {
    "title": "Política de Privacidad",
    "subtitle": "Su privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos su información.",
    "lastUpdated": "Última actualización",
    "introduction": {
      "title": "Introducción",
      "content": "Esta política de privacidad describe cómo la Plataforma de Aprendizaje Gemini CLI recopila, usa y comparte su información cuando utiliza nuestro sitio web y servicios. Estamos comprometidos a proteger su privacidad y ser transparentes sobre nuestras prácticas de datos."
    },
    "informationWeCollect": {
      "title": "Información que recopilamos",
      "analytics": {
        "title": "Información de análisis",
        "description": "Utilizamos Google Analytics para entender cómo los visitantes interactúan con nuestro sitio web. Esto incluye:",
        "items": [
          "Páginas visitadas y tiempo pasado en cada página",
          "Ubicación geográfica (nivel de país/región)",
          "Información del dispositivo y navegador",
          "Fuentes de referencia (cómo encontró nuestro sitio web)",
          "Interacciones del usuario y patrones de navegación"
        ]
      },
      "language": {
        "title": "Preferencias de idioma",
        "description": "Almacenamos su preferencia de idioma localmente en su navegador para proporcionar una experiencia personalizada. Esta información no se transmite a nuestros servidores."
      },
      "technical": {
        "title": "Información técnica",
        "description": "Recopilamos automáticamente cierta información técnica cuando visita nuestro sitio web:",
        "items": [
          "Dirección IP (anonimizada para análisis)",
          "Tipo y versión del navegador",
          "Sistema operativo",
          "Resolución de pantalla y tipo de dispositivo"
        ]
      }
    },
    "howWeUse": {
      "title": "Cómo usamos su información",
      "description": "Utilizamos la información recopilada para los siguientes propósitos:",
      "items": [
        {
          "title": "Análisis del sitio web",
          "description": "Para entender el comportamiento del usuario y mejorar el rendimiento y la experiencia del usuario de nuestro sitio web"
        },
        {
          "title": "Optimización de contenido",
          "description": "Para determinar qué contenido es más valioso para nuestros usuarios y optimizar nuestros materiales educativos"
        },
        {
          "title": "Mejoras técnicas",
          "description": "Para identificar y solucionar problemas técnicos, optimizar tiempos de carga y asegurar compatibilidad entre dispositivos"
        },
        {
          "title": "Localización de idioma",
          "description": "Para proporcionar contenido en su idioma preferido y mejorar la calidad de nuestras traducciones"
        },
        {
          "title": "Seguridad",
          "description": "Para proteger nuestro sitio web del abuso, spam y actividades maliciosas"
        }
      ]
    },
    "informationSharing": {
      "title": "Compartir información",
      "description": "No vendemos, intercambiamos o transferimos su información personal a terceros, excepto en las siguientes circunstancias limitadas:",
      "items": [
        {
          "title": "Proveedores de servicios",
          "description": "Compartimos datos de análisis anonimizados con Google Analytics para proporcionar servicios de análisis web"
        },
        {
          "title": "Requisitos legales",
          "description": "Podemos divulgar información si es requerido por ley o para proteger nuestros derechos y seguridad"
        },
        {
          "title": "Transferencias comerciales",
          "description": "En caso de fusión o adquisición, la información del usuario puede transferirse como parte de los activos comerciales"
        }
      ]
    },
    "cookies": {
      "title": "Cookies y tecnologías de seguimiento",
      "analytics": {
        "title": "Cookies de Google Analytics",
        "description": "Utilizamos cookies de Google Analytics para recopilar estadísticas de uso. Estas cookies nos ayudan a entender:",
        "items": [
          "Qué páginas son más populares",
          "Cómo los usuarios navegan por nuestro sitio",
          "Métricas de rendimiento técnico"
        ]
      },
      "localStorage": {
        "title": "Almacenamiento local",
        "description": "Utilizamos el almacenamiento local del navegador para recordar su preferencia de idioma y proporcionar una mejor experiencia de usuario. Estos datos permanecen en su dispositivo y no se transmiten a nuestros servidores."
      }
    },
    "yourRights": {
      "title": "Sus derechos y opciones",
      "description": "Tiene varios derechos con respecto a su información:",
      "items": [
        {
          "title": "Exclusión de análisis",
          "description": "Puede excluirse del seguimiento de Google Analytics usando extensiones del navegador o ajustando la configuración de su navegador"
        },
        {
          "title": "Borrar datos locales",
          "description": "Puede borrar sus preferencias de idioma y otros datos locales limpiando el almacenamiento local de su navegador"
        },
        {
          "title": "Acceder a la información",
          "description": "Puede solicitar información sobre qué datos hemos recopilado sobre usted"
        },
        {
          "title": "Contáctenos",
          "description": "Puede contactarnos con cualquier pregunta o inquietud relacionada con la privacidad"
        }
      ]
    },
    "dataSecurity": {
      "title": "Seguridad de datos",
      "description": "Implementamos medidas de seguridad apropiadas para proteger su información:",
      "items": [
        "Cifrado HTTPS para todas las comunicaciones del sitio web",
        "Actualizaciones de seguridad y monitoreo regulares",
        "Acceso limitado a cualquier dato recopilado",
        "Infraestructura de alojamiento segura"
      ]
    },
    "thirdParty": {
      "title": "Servicios de terceros",
      "googleAnalytics": {
        "title": "Google Analytics",
        "description": "Nuestro sitio web utiliza Google Analytics, un servicio de análisis web proporcionado por Google Inc. Google Analytics utiliza cookies para ayudar a analizar cómo los usuarios usan el sitio.",
        "moreInfo": "Para más información sobre las prácticas de privacidad de Google, visite:",
        "linkText": "Política de Privacidad de Google"
      },
      "externalLinks": {
        "title": "Enlaces externos",
        "description": "Nuestro sitio web puede contener enlaces a sitios externos. No somos responsables de las prácticas de privacidad de estos sitios web externos. Le recomendamos leer sus políticas de privacidad."
      }
    },
    "childrens": {
      "title": "Privacidad de los niños",
      "description": "Nuestro sitio web no está destinado a niños menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años. Si usted es padre o tutor y cree que su hijo nos ha proporcionado información personal, contáctenos."
    },
    "changes": {
      "title": "Cambios a esta política de privacidad",
      "description": "Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página y actualizando la fecha de 'Última actualización'. Se le aconseja revisar esta política de privacidad periódicamente para cualquier cambio."
    },
    "contact": {
      "title": "Información de contacto",
      "description": "Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos:",
      "email": "Correo electrónico",
      "github": "GitHub",
      "website": "Sitio web",
      "contactForm": "Formulario de contacto",
      "reportIssues": "Reportar problemas"
    },
    "cta": {
      "title": "¿Preguntas sobre nuestra política de privacidad?",
      "description": "Estamos aquí para aclarar cualquier pregunta que pueda tener sobre nuestras prácticas de privacidad. No dude en contactarnos.",
      "contactUs": "Contáctenos"
    }
  }
};

// Function to completely replace privacy section
function replacePrivacySection(lang, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  try {
    // Read existing file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Replace the entire privacy section
    data.privacy = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Replaced complete privacy section for ${lang}`);
    
  } catch (error) {
    console.error(`✗ Error updating ${lang}:`, error.message);
  }
}

// Replace privacy section for last languages
console.log('Replacing complete privacy translations for last languages...');
Object.keys(lastLanguageTranslations).forEach(lang => {
  replacePrivacySection(lang, lastLanguageTranslations[lang]);
});
console.log('Last privacy translation replacement completed!');
