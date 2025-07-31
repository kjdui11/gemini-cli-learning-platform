const fs = require('fs');
const path = require('path');

// Complete translations for all privacy sections
const completeTranslations = {
  de: {
    "howWeUse": {
      "title": "Wie wir Ihre Informationen verwenden",
      "description": "Wir verwenden die gesammelten Informationen für folgende Zwecke:",
      "items": [
        {
          "title": "Website-Analyse",
          "description": "Um das Benutzerverhalten zu verstehen und die Leistung und Benutzererfahrung unserer Website zu verbessern"
        },
        {
          "title": "Inhaltsoptimierung",
          "description": "Um zu bestimmen, welche Inhalte für unsere Benutzer am wertvollsten sind und unsere Bildungsmaterialien zu optimieren"
        },
        {
          "title": "Technische Verbesserungen",
          "description": "Um technische Probleme zu identifizieren und zu beheben, Ladezeiten zu optimieren und die Kompatibilität zwischen Geräten sicherzustellen"
        },
        {
          "title": "Sprachlokalisierung",
          "description": "Um Inhalte in Ihrer bevorzugten Sprache bereitzustellen und unsere Übersetzungsqualität zu verbessern"
        },
        {
          "title": "Sicherheit",
          "description": "Um unsere Website vor Missbrauch, Spam und böswilligen Aktivitäten zu schützen"
        }
      ]
    },
    "informationSharing": {
      "title": "Informationsaustausch",
      "description": "Wir verkaufen, handeln oder übertragen Ihre persönlichen Informationen nicht an Dritte, außer unter folgenden begrenzten Umständen:",
      "items": [
        {
          "title": "Dienstanbieter",
          "description": "Wir teilen anonymisierte Analysedaten mit Google Analytics, um Website-Analysedienste bereitzustellen"
        },
        {
          "title": "Rechtliche Anforderungen",
          "description": "Wir können Informationen preisgeben, wenn dies gesetzlich vorgeschrieben ist oder um unsere Rechte und Sicherheit zu schützen"
        },
        {
          "title": "Geschäftsübertragungen",
          "description": "Im Falle einer Fusion oder Übernahme können Benutzerinformationen als Teil der Geschäftsvermögen übertragen werden"
        }
      ]
    },
    "cookies": {
      "title": "Cookies und Tracking-Technologien",
      "analytics": {
        "title": "Google Analytics Cookies",
        "description": "Wir verwenden Google Analytics Cookies, um Nutzungsstatistiken zu sammeln. Diese Cookies helfen uns zu verstehen:",
        "items": [
          "Welche Seiten am beliebtesten sind",
          "Wie Benutzer durch unsere Website navigieren",
          "Technische Leistungsmetriken"
        ]
      },
      "localStorage": {
        "title": "Lokaler Speicher",
        "description": "Wir verwenden den lokalen Browser-Speicher, um Ihre Spracheinstellung zu merken und eine bessere Benutzererfahrung zu bieten. Diese Daten bleiben auf Ihrem Gerät und werden nicht an unsere Server übertragen."
      }
    },
    "yourRights": {
      "title": "Ihre Rechte und Wahlmöglichkeiten",
      "description": "Sie haben mehrere Rechte bezüglich Ihrer Informationen:",
      "items": [
        {
          "title": "Analyse-Opt-out",
          "description": "Sie können das Google Analytics-Tracking durch Browser-Erweiterungen oder Anpassung Ihrer Browser-Einstellungen deaktivieren"
        },
        {
          "title": "Lokale Daten löschen",
          "description": "Sie können Ihre Spracheinstellungen und andere lokale Daten löschen, indem Sie den lokalen Speicher Ihres Browsers leeren"
        },
        {
          "title": "Informationen abrufen",
          "description": "Sie können Informationen darüber anfordern, welche Daten wir über Sie gesammelt haben"
        },
        {
          "title": "Kontaktieren Sie uns",
          "description": "Sie können uns bei datenschutzbezogenen Fragen oder Bedenken kontaktieren"
        }
      ]
    },
    "dataSecurity": {
      "title": "Datensicherheit",
      "description": "Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer Informationen:",
      "items": [
        "HTTPS-Verschlüsselung für alle Website-Kommunikationen",
        "Regelmäßige Sicherheitsupdates und -überwachung",
        "Begrenzter Zugang zu gesammelten Daten",
        "Sichere Hosting-Infrastruktur"
      ]
    },
    "thirdParty": {
      "title": "Drittanbieter-Dienste",
      "googleAnalytics": {
        "title": "Google Analytics",
        "description": "Unsere Website verwendet Google Analytics, einen Webanalysedienst von Google Inc. Google Analytics verwendet Cookies, um zu analysieren, wie Benutzer die Website nutzen.",
        "moreInfo": "Weitere Informationen zu Googles Datenschutzpraktiken finden Sie unter:",
        "linkText": "Google Datenschutzrichtlinie"
      },
      "externalLinks": {
        "title": "Externe Links",
        "description": "Unsere Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken dieser externen Websites. Wir ermutigen Sie, deren Datenschutzrichtlinien zu lesen."
      }
    },
    "childrens": {
      "title": "Datenschutz für Kinder",
      "description": "Unsere Website ist nicht für Kinder unter 13 Jahren bestimmt. Wir sammeln wissentlich keine persönlichen Informationen von Kindern unter 13 Jahren. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und glauben, dass Ihr Kind uns persönliche Informationen zur Verfügung gestellt hat, kontaktieren Sie uns bitte."
    },
    "changes": {
      "title": "Änderungen an dieser Datenschutzrichtlinie",
      "description": "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen und das Datum 'Zuletzt aktualisiert' aktualisieren. Es wird empfohlen, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen."
    },
    "contact": {
      "title": "Kontaktinformationen",
      "description": "Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte:",
      "email": "E-Mail",
      "github": "GitHub",
      "website": "Website",
      "contactForm": "Kontaktformular",
      "reportIssues": "Probleme melden"
    },
    "cta": {
      "title": "Fragen zu unserer Datenschutzrichtlinie?",
      "description": "Wir sind hier, um alle Fragen zu klären, die Sie zu unseren Datenschutzpraktiken haben könnten. Zögern Sie nicht, uns zu kontaktieren.",
      "contactUs": "Kontaktieren Sie uns"
    }
  },
  fr: {
    "howWeUse": {
      "title": "Comment nous utilisons vos informations",
      "description": "Nous utilisons les informations collectées aux fins suivantes :",
      "items": [
        {
          "title": "Analyse du site web",
          "description": "Pour comprendre le comportement des utilisateurs et améliorer les performances et l'expérience utilisateur de notre site web"
        },
        {
          "title": "Optimisation du contenu",
          "description": "Pour déterminer quel contenu est le plus précieux pour nos utilisateurs et optimiser nos matériels éducatifs"
        },
        {
          "title": "Améliorations techniques",
          "description": "Pour identifier et corriger les problèmes techniques, optimiser les temps de chargement et assurer la compatibilité entre les appareils"
        },
        {
          "title": "Localisation linguistique",
          "description": "Pour fournir du contenu dans votre langue préférée et améliorer la qualité de nos traductions"
        },
        {
          "title": "Sécurité",
          "description": "Pour protéger notre site web contre les abus, le spam et les activités malveillantes"
        }
      ]
    },
    "informationSharing": {
      "title": "Partage d'informations",
      "description": "Nous ne vendons, n'échangeons ou ne transférons pas vos informations personnelles à des tiers, sauf dans les circonstances limitées suivantes :",
      "items": [
        {
          "title": "Fournisseurs de services",
          "description": "Nous partageons des données d'analyse anonymisées avec Google Analytics pour fournir des services d'analyse de site web"
        },
        {
          "title": "Exigences légales",
          "description": "Nous pouvons divulguer des informations si requis par la loi ou pour protéger nos droits et notre sécurité"
        },
        {
          "title": "Transferts d'entreprise",
          "description": "En cas de fusion ou d'acquisition, les informations utilisateur peuvent être transférées dans le cadre des actifs commerciaux"
        }
      ]
    },
    "cookies": {
      "title": "Cookies et technologies de suivi",
      "analytics": {
        "title": "Cookies Google Analytics",
        "description": "Nous utilisons les cookies Google Analytics pour collecter des statistiques d'utilisation. Ces cookies nous aident à comprendre :",
        "items": [
          "Quelles pages sont les plus populaires",
          "Comment les utilisateurs naviguent sur notre site",
          "Les métriques de performance technique"
        ]
      },
      "localStorage": {
        "title": "Stockage local",
        "description": "Nous utilisons le stockage local du navigateur pour mémoriser votre préférence linguistique et fournir une meilleure expérience utilisateur. Ces données restent sur votre appareil et ne sont pas transmises à nos serveurs."
      }
    },
    "yourRights": {
      "title": "Vos droits et choix",
      "description": "Vous avez plusieurs droits concernant vos informations :",
      "items": [
        {
          "title": "Désactiver l'analyse",
          "description": "Vous pouvez désactiver le suivi Google Analytics en utilisant des extensions de navigateur ou en ajustant les paramètres de votre navigateur"
        },
        {
          "title": "Effacer les données locales",
          "description": "Vous pouvez effacer vos préférences linguistiques et autres données locales en vidant le stockage local de votre navigateur"
        },
        {
          "title": "Accéder aux informations",
          "description": "Vous pouvez demander des informations sur les données que nous avons collectées à votre sujet"
        },
        {
          "title": "Nous contacter",
          "description": "Vous pouvez nous contacter pour toute question ou préoccupation liée à la confidentialité"
        }
      ]
    },
    "dataSecurity": {
      "title": "Sécurité des données",
      "description": "Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations :",
      "items": [
        "Chiffrement HTTPS pour toutes les communications du site web",
        "Mises à jour de sécurité et surveillance régulières",
        "Accès limité aux données collectées",
        "Infrastructure d'hébergement sécurisée"
      ]
    },
    "thirdParty": {
      "title": "Services tiers",
      "googleAnalytics": {
        "title": "Google Analytics",
        "description": "Notre site web utilise Google Analytics, un service d'analyse web fourni par Google Inc. Google Analytics utilise des cookies pour aider à analyser comment les utilisateurs utilisent le site.",
        "moreInfo": "Pour plus d'informations sur les pratiques de confidentialité de Google, veuillez visiter :",
        "linkText": "Politique de confidentialité de Google"
      },
      "externalLinks": {
        "title": "Liens externes",
        "description": "Notre site web peut contenir des liens vers des sites externes. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites web externes. Nous vous encourageons à lire leurs politiques de confidentialité."
      }
    },
    "childrens": {
      "title": "Confidentialité des enfants",
      "description": "Notre site web n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous êtes un parent ou tuteur et croyez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter."
    },
    "changes": {
      "title": "Modifications de cette politique de confidentialité",
      "description": "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date 'Dernière mise à jour'. Il vous est conseillé de consulter périodiquement cette politique de confidentialité pour tout changement."
    },
    "contact": {
      "title": "Informations de contact",
      "description": "Si vous avez des questions sur cette politique de confidentialité ou nos pratiques de confidentialité, veuillez nous contacter :",
      "email": "E-mail",
      "github": "GitHub",
      "website": "Site web",
      "contactForm": "Formulaire de contact",
      "reportIssues": "Signaler des problèmes"
    },
    "cta": {
      "title": "Questions sur notre politique de confidentialité ?",
      "description": "Nous sommes là pour clarifier toute question que vous pourriez avoir sur nos pratiques de confidentialité. N'hésitez pas à nous contacter.",
      "contactUs": "Nous contacter"
    }
  }
};

// Function to add missing translations
function addMissingTranslations(lang, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  try {
    // Read existing file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Add missing translations to privacy section
    if (data.privacy && translations) {
      Object.keys(translations).forEach(key => {
        if (!data.privacy[key]) {
          data.privacy[key] = translations[key];
        } else if (typeof translations[key] === 'object' && !Array.isArray(translations[key])) {
          // Merge nested objects
          data.privacy[key] = { ...data.privacy[key], ...translations[key] };
        }
      });
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Added missing translations for ${lang}`);
    
  } catch (error) {
    console.error(`✗ Error updating ${lang}:`, error.message);
  }
}

// Add missing translations for each language
console.log('Adding missing privacy translations...');
Object.keys(completeTranslations).forEach(lang => {
  addMissingTranslations(lang, completeTranslations[lang]);
});
console.log('Missing privacy translations added!');
