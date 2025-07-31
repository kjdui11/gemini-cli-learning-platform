const fs = require('fs');
const path = require('path');

// Languages to fix (excluding en and zh which should already be correct)
const languagesToFix = ['de', 'fr', 'ja', 'ko', 'es', 'hi', 'ru'];

// Complete privacy structure template
const privacyTemplate = {
  "title": "Privacy Policy",
  "subtitle": "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
  "lastUpdated": "Last updated",
  "introduction": {
    "title": "Introduction",
    "content": "This privacy policy describes how Gemini CLI Learning Platform collects, uses, and shares your information when you use our website and services. We are committed to protecting your privacy and being transparent about our data practices."
  },
  "informationWeCollect": {
    "title": "Information We Collect",
    "analytics": {
      "title": "Analytics Information",
      "description": "We use Google Analytics to understand how visitors interact with our website. This includes:",
      "items": [
        "Pages visited and time spent on each page",
        "Geographic location (country/region level)",
        "Device and browser information",
        "Referral sources (how you found our website)",
        "User interactions and navigation patterns"
      ]
    },
    "language": {
      "title": "Language Preferences",
      "description": "We store your language preference locally in your browser to provide a personalized experience. This information is not transmitted to our servers."
    },
    "technical": {
      "title": "Technical Information",
      "description": "We automatically collect certain technical information when you visit our website:",
      "items": [
        "IP address (anonymized for analytics)",
        "Browser type and version",
        "Operating system",
        "Screen resolution and device type"
      ]
    }
  },
  "howWeUse": {
    "title": "How We Use Your Information",
    "description": "We use the collected information for the following purposes:",
    "items": [
      {
        "title": "Website Analytics",
        "description": "To understand user behavior and improve our website's performance and user experience"
      },
      {
        "title": "Content Optimization",
        "description": "To determine which content is most valuable to our users and optimize our educational materials"
      },
      {
        "title": "Technical Improvements",
        "description": "To identify and fix technical issues, optimize loading times, and ensure compatibility across devices"
      },
      {
        "title": "Language Localization",
        "description": "To provide content in your preferred language and improve our translation quality"
      },
      {
        "title": "Security",
        "description": "To protect our website from abuse, spam, and malicious activities"
      }
    ]
  },
  "informationSharing": {
    "title": "Information Sharing",
    "description": "We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following limited circumstances:",
    "items": [
      {
        "title": "Service Providers",
        "description": "We share anonymized analytics data with Google Analytics to provide website analytics services"
      },
      {
        "title": "Legal Requirements",
        "description": "We may disclose information if required by law or to protect our rights and safety"
      },
      {
        "title": "Business Transfers",
        "description": "In the event of a merger or acquisition, user information may be transferred as part of the business assets"
      }
    ]
  },
  "cookies": {
    "title": "Cookies and Tracking Technologies",
    "analytics": {
      "title": "Google Analytics Cookies",
      "description": "We use Google Analytics cookies to collect usage statistics. These cookies help us understand:",
      "items": [
        "Which pages are most popular",
        "How users navigate through our site",
        "Technical performance metrics"
      ]
    },
    "localStorage": {
      "title": "Local Storage",
      "description": "We use browser local storage to remember your language preference and provide a better user experience. This data remains on your device and is not transmitted to our servers."
    }
  },
  "yourRights": {
    "title": "Your Rights and Choices",
    "description": "You have several rights regarding your information:",
    "items": [
      {
        "title": "Opt-out of Analytics",
        "description": "You can opt-out of Google Analytics tracking by using browser extensions or adjusting your browser settings"
      },
      {
        "title": "Clear Local Data",
        "description": "You can clear your language preferences and other local data by clearing your browser's local storage"
      },
      {
        "title": "Access Information",
        "description": "You can request information about what data we have collected about you"
      },
      {
        "title": "Contact Us",
        "description": "You can contact us with any privacy-related questions or concerns"
      }
    ]
  },
  "dataSecurity": {
    "title": "Data Security",
    "description": "We implement appropriate security measures to protect your information:",
    "items": [
      "HTTPS encryption for all website communications",
      "Regular security updates and monitoring",
      "Limited access to any collected data",
      "Secure hosting infrastructure"
    ]
  },
  "thirdParty": {
    "title": "Third-Party Services",
    "googleAnalytics": {
      "title": "Google Analytics",
      "description": "Our website uses Google Analytics, a web analytics service provided by Google Inc. Google Analytics uses cookies to help analyze how users use the site.",
      "moreInfo": "For more information about Google's privacy practices, please visit:",
      "linkText": "Google Privacy Policy"
    },
    "externalLinks": {
      "title": "External Links",
      "description": "Our website may contain links to external sites. We are not responsible for the privacy practices of these external websites. We encourage you to read their privacy policies."
    }
  },
  "childrens": {
    "title": "Children's Privacy",
    "description": "Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us."
  },
  "changes": {
    "title": "Changes to This Privacy Policy",
    "description": "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last updated' date. You are advised to review this privacy policy periodically for any changes."
  },
  "contact": {
    "title": "Contact Information",
    "description": "If you have any questions about this privacy policy or our privacy practices, please contact us:",
    "email": "Email",
    "github": "GitHub",
    "website": "Website",
    "contactForm": "Contact Form",
    "reportIssues": "Report Issues"
  },
  "cta": {
    "title": "Questions About Our Privacy Policy?",
    "description": "We're here to help clarify any questions you may have about our privacy practices. Feel free to reach out to us.",
    "contactUs": "Contact Us"
  }
};

// Language-specific translations
const translations = {
  de: {
    "title": "Datenschutzrichtlinie",
    "subtitle": "Ihre Privatsphäre ist uns wichtig. Diese Richtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen.",
    "lastUpdated": "Zuletzt aktualisiert",
    "introduction": {
      "title": "Einführung",
      "content": "Diese Datenschutzrichtlinie beschreibt, wie die Gemini CLI Lernplattform Ihre Informationen sammelt, verwendet und teilt, wenn Sie unsere Website und Dienste nutzen. Wir verpflichten uns, Ihre Privatsphäre zu schützen und transparent über unsere Datenpraktiken zu sein."
    },
    "informationWeCollect": {
      "title": "Informationen, die wir sammeln",
      "analytics": {
        "title": "Analyseinformationen",
        "description": "Wir verwenden Google Analytics, um zu verstehen, wie Besucher mit unserer Website interagieren. Dies umfasst:",
        "items": [
          "Besuchte Seiten und Verweildauer auf jeder Seite",
          "Geografische Lage (Land/Region-Ebene)",
          "Geräte- und Browser-Informationen",
          "Verweisquellen (wie Sie unsere Website gefunden haben)",
          "Benutzerinteraktionen und Navigationsmuster"
        ]
      },
      "language": {
        "title": "Spracheinstellungen",
        "description": "Wir speichern Ihre Spracheinstellung lokal in Ihrem Browser, um eine personalisierte Erfahrung zu bieten. Diese Informationen werden nicht an unsere Server übertragen."
      },
      "technical": {
        "title": "Technische Informationen",
        "description": "Wir sammeln automatisch bestimmte technische Informationen, wenn Sie unsere Website besuchen:",
        "items": [
          "IP-Adresse (anonymisiert für Analysen)",
          "Browser-Typ und -Version",
          "Betriebssystem",
          "Bildschirmauflösung und Gerätetyp"
        ]
      }
    }
  },
  fr: {
    "title": "Politique de confidentialité",
    "subtitle": "Votre vie privée est importante pour nous. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.",
    "lastUpdated": "Dernière mise à jour",
    "introduction": {
      "title": "Introduction",
      "content": "Cette politique de confidentialité décrit comment la plateforme d'apprentissage Gemini CLI collecte, utilise et partage vos informations lorsque vous utilisez notre site web et nos services. Nous nous engageons à protéger votre vie privée et à être transparents sur nos pratiques de données."
    },
    "informationWeCollect": {
      "title": "Informations que nous collectons",
      "analytics": {
        "title": "Informations d'analyse",
        "description": "Nous utilisons Google Analytics pour comprendre comment les visiteurs interagissent avec notre site web. Cela inclut :",
        "items": [
          "Pages visitées et temps passé sur chaque page",
          "Localisation géographique (niveau pays/région)",
          "Informations sur l'appareil et le navigateur",
          "Sources de référence (comment vous avez trouvé notre site web)",
          "Interactions utilisateur et modèles de navigation"
        ]
      },
      "language": {
        "title": "Préférences linguistiques",
        "description": "Nous stockons votre préférence linguistique localement dans votre navigateur pour fournir une expérience personnalisée. Ces informations ne sont pas transmises à nos serveurs."
      },
      "technical": {
        "title": "Informations techniques",
        "description": "Nous collectons automatiquement certaines informations techniques lorsque vous visitez notre site web :",
        "items": [
          "Adresse IP (anonymisée pour les analyses)",
          "Type et version du navigateur",
          "Système d'exploitation",
          "Résolution d'écran et type d'appareil"
        ]
      }
    }
  }
};

// Function to update privacy section for a language
function updatePrivacyForLanguage(lang) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  try {
    // Read existing file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Create the privacy section with language-specific translations
    const langTranslations = translations[lang] || {};
    const privacySection = { ...privacyTemplate };
    
    // Apply language-specific translations
    if (langTranslations.title) privacySection.title = langTranslations.title;
    if (langTranslations.subtitle) privacySection.subtitle = langTranslations.subtitle;
    if (langTranslations.lastUpdated) privacySection.lastUpdated = langTranslations.lastUpdated;
    
    if (langTranslations.introduction) {
      privacySection.introduction = { ...privacySection.introduction, ...langTranslations.introduction };
    }
    
    if (langTranslations.informationWeCollect) {
      privacySection.informationWeCollect = { 
        ...privacySection.informationWeCollect, 
        ...langTranslations.informationWeCollect 
      };
      
      if (langTranslations.informationWeCollect.analytics) {
        privacySection.informationWeCollect.analytics = {
          ...privacySection.informationWeCollect.analytics,
          ...langTranslations.informationWeCollect.analytics
        };
      }
      
      if (langTranslations.informationWeCollect.language) {
        privacySection.informationWeCollect.language = {
          ...privacySection.informationWeCollect.language,
          ...langTranslations.informationWeCollect.language
        };
      }
      
      if (langTranslations.informationWeCollect.technical) {
        privacySection.informationWeCollect.technical = {
          ...privacySection.informationWeCollect.technical,
          ...langTranslations.informationWeCollect.technical
        };
      }
    }
    
    // Update the privacy section
    data.privacy = privacySection;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Updated privacy section for ${lang}`);
    
  } catch (error) {
    console.error(`✗ Error updating ${lang}:`, error.message);
  }
}

// Update all languages
console.log('Updating privacy translations...');
languagesToFix.forEach(updatePrivacyForLanguage);
console.log('Privacy translation update completed!');
