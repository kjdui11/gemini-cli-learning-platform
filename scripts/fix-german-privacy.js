const fs = require('fs');
const path = require('path');

// Read the German translation file
const germanFilePath = path.join(__dirname, '..', 'src', 'messages', 'de.json');
const germanData = JSON.parse(fs.readFileSync(germanFilePath, 'utf8'));

// Complete German privacy translation with missing fields
const completeGermanPrivacy = {
  "title": "Datenschutzrichtlinie",
  "subtitle": "Ihre Privatsphäre ist uns wichtig. Diese Richtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen.",
  "lastUpdated": "Zuletzt aktualisiert",
  "introduction": {
    "title": "Einführung",
    "content": "Diese Datenschutzrichtlinie beschreibt, wie die Gemini CLI Lernplattform Ihre Informationen sammelt, verwendet und teilt, wenn Sie unsere Website und Dienste nutzen. Wir verpflichten uns, Ihre Privatsphäre zu schützen und transparent über unsere Datenpraktiken zu sein."
  },
  "informationWeCollect": germanData.privacy.informationWeCollect,
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
        "description": "Um technische Probleme zu identifizieren und zu beheben, Ladezeiten zu optimieren und geräteübergreifende Kompatibilität sicherzustellen"
      },
      {
        "title": "Sprachlokalisierung",
        "description": "Um Inhalte in Ihrer bevorzugten Sprache bereitzustellen und die Qualität unserer Übersetzungen zu verbessern"
      },
      {
        "title": "Sicherheit",
        "description": "Um unsere Website vor Missbrauch, Spam und bösartigen Aktivitäten zu schützen"
      }
    ]
  },
  "informationSharing": germanData.privacy.informationSharing,
  "cookies": germanData.privacy.cookies,
  "yourRights": germanData.privacy.yourRights,
  "dataSecurity": germanData.privacy.dataSecurity,
  "thirdParty": germanData.privacy.thirdParty,
  "childrens": germanData.privacy.childrens,
  "changes": germanData.privacy.changes,
  "contact": germanData.privacy.contact,
  "cta": germanData.privacy.cta
};

// Replace the privacy section
germanData.privacy = completeGermanPrivacy;

// Write back to file
fs.writeFileSync(germanFilePath, JSON.stringify(germanData, null, 2), 'utf8');
console.log('✓ Fixed German privacy translation with missing fields');
