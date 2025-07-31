const fs = require('fs');
const path = require('path');

// Complete Commands translations for all 7 languages
const commandsTranslations = {
  hi: {
    "title": "कमांड संदर्भ",
    "subtitle": "सभी अंतर्निहित Gemini CLI कमांड और सुविधाओं के लिए पूर्ण संदर्भ",
    "searchPlaceholder": "कमांड खोजें...",
    "categories": {
      "basic": "स्लैश कमांड (/)",
      "advanced": "एट कमांड (@)",
      "configuration": "शेल कमांड (!)",
      "utilities": "कस्टम कमांड"
    }
  },
  fr: {
    "title": "Référence des Commandes",
    "subtitle": "Référence complète pour toutes les commandes et fonctionnalités intégrées de Gemini CLI",
    "searchPlaceholder": "Rechercher des commandes...",
    "categories": {
      "basic": "Commandes Slash (/)",
      "advanced": "Commandes At (@)",
      "configuration": "Commandes Shell (!)",
      "utilities": "Commandes Personnalisées"
    }
  },
  de: {
    "title": "Befehlsreferenz",
    "subtitle": "Vollständige Referenz für alle integrierten Gemini CLI-Befehle und -Funktionen",
    "searchPlaceholder": "Befehle suchen...",
    "categories": {
      "basic": "Slash-Befehle (/)",
      "advanced": "At-Befehle (@)",
      "configuration": "Shell-Befehle (!)",
      "utilities": "Benutzerdefinierte Befehle"
    }
  },
  ja: {
    "title": "コマンドリファレンス",
    "subtitle": "すべての組み込みGemini CLIコマンドと機能の完全なリファレンス",
    "searchPlaceholder": "コマンドを検索...",
    "categories": {
      "basic": "スラッシュコマンド (/)",
      "advanced": "アットコマンド (@)",
      "configuration": "シェルコマンド (!)",
      "utilities": "カスタムコマンド"
    }
  },
  ko: {
    "title": "명령어 참조",
    "subtitle": "모든 내장 Gemini CLI 명령어와 기능에 대한 완전한 참조",
    "searchPlaceholder": "명령어 검색...",
    "categories": {
      "basic": "슬래시 명령어 (/)",
      "advanced": "앳 명령어 (@)",
      "configuration": "셸 명령어 (!)",
      "utilities": "사용자 정의 명령어"
    }
  },
  es: {
    "title": "Referencia de Comandos",
    "subtitle": "Referencia completa para todos los comandos y características integradas de Gemini CLI",
    "searchPlaceholder": "Buscar comandos...",
    "categories": {
      "basic": "Comandos Slash (/)",
      "advanced": "Comandos At (@)",
      "configuration": "Comandos Shell (!)",
      "utilities": "Comandos Personalizados"
    }
  },
  ru: {
    "title": "Справочник Команд",
    "subtitle": "Полный справочник по всем встроенным командам и функциям Gemini CLI",
    "searchPlaceholder": "Поиск команд...",
    "categories": {
      "basic": "Slash Команды (/)",
      "advanced": "At Команды (@)",
      "configuration": "Shell Команды (!)",
      "utilities": "Пользовательские Команды"
    }
  }
};

// Function to apply Commands translations
function applyCommandsTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = commandsTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Commands translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing commands with professional translation
    data.commands = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Commands translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const commands = newData.commands;
    console.log(`   - Title: "${commands?.title || 'N/A'}"`);
    console.log(`   - Categories: ${Object.keys(commands?.categories || {}).length}`);
    console.log(`   - Search placeholder: "${commands?.searchPlaceholder || 'N/A'}"`);
    
  } catch (error) {
    console.error(`❌ Error applying Commands translations for ${langCode}:`, error.message);
  }
}

// Apply Commands translations
console.log('🚀 Applying professional Commands translations...\n');

Object.keys(commandsTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying Commands translations for ${langNames[langCode]}...`);
  applyCommandsTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Commands translations applied!');
console.log('🎯 All 7 languages now have complete professional content.');
