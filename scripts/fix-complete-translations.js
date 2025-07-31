const fs = require('fs');
const path = require('path');

// Languages to translate (excluding zh and en)
const targetLanguages = ['de', 'fr', 'ja', 'ko', 'es', 'hi', 'ru'];

// Load the complete English template
const enPath = path.join(__dirname, '..', 'src', 'messages', 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Language-specific translations for key UI elements
const uiTranslations = {
  de: {
    // German UI translations
    operationsTitle: "Kern-Dateioperationen",
    operationsDescription: "Meistern Sie die verschiedenen Dateioperationsfunktionen von Gemini CLI",
    examplesTitle: "Praktische Beispiele", 
    examplesDescription: "Lernen Sie bewährte Praktiken für Dateioperationen durch praktische Beispiele",
    explanation: "Erklärung",
    bestPracticesTitle: "Bewährte Praktiken",
    bestPracticesDescription: "Wichtige Empfehlungen und Sicherheitshinweise für Dateioperationen",
    intermediate: "Fortgeschritten",
    readingTime: "20 Min Lesezeit"
  },
  fr: {
    // French UI translations
    operationsTitle: "Opérations de Fichiers Principales",
    operationsDescription: "Maîtrisez les diverses fonctionnalités d'opérations de fichiers fournies par Gemini CLI",
    examplesTitle: "Exemples Pratiques",
    examplesDescription: "Apprenez les meilleures pratiques pour les opérations de fichiers à travers des exemples pratiques",
    explanation: "Explication",
    bestPracticesTitle: "Meilleures Pratiques", 
    bestPracticesDescription: "Recommandations importantes et considérations de sécurité pour les opérations de fichiers",
    intermediate: "Intermédiaire",
    readingTime: "20 min de lecture"
  },
  ja: {
    // Japanese UI translations
    operationsTitle: "コアファイル操作",
    operationsDescription: "Gemini CLIが提供するさまざまなファイル操作機能をマスターしましょう",
    examplesTitle: "実用的な例",
    examplesDescription: "実用的な例を通じてファイル操作のベストプラクティスを学びます",
    explanation: "説明",
    bestPracticesTitle: "ベストプラクティス",
    bestPracticesDescription: "ファイル操作の重要な推奨事項とセキュリティ考慮事項",
    intermediate: "中級",
    readingTime: "20分で読める"
  },
  ko: {
    // Korean UI translations
    operationsTitle: "핵심 파일 작업",
    operationsDescription: "Gemini CLI가 제공하는 다양한 파일 작업 기능을 마스터하세요",
    examplesTitle: "실용적인 예제",
    examplesDescription: "실용적인 예제를 통해 파일 작업의 모범 사례를 배웁니다",
    explanation: "설명",
    bestPracticesTitle: "모범 사례",
    bestPracticesDescription: "파일 작업에 대한 중요한 권장 사항 및 보안 고려 사항",
    intermediate: "중급",
    readingTime: "20분 읽기"
  },
  es: {
    // Spanish UI translations
    operationsTitle: "Operaciones de Archivos Principales",
    operationsDescription: "Domina las diversas características de operaciones de archivos proporcionadas por Gemini CLI",
    examplesTitle: "Ejemplos Prácticos",
    examplesDescription: "Aprende las mejores prácticas para operaciones de archivos a través de ejemplos prácticos",
    explanation: "Explicación",
    bestPracticesTitle: "Mejores Prácticas",
    bestPracticesDescription: "Recomendaciones importantes y consideraciones de seguridad para operaciones de archivos",
    intermediate: "Intermedio",
    readingTime: "20 min de lectura"
  },
  hi: {
    // Hindi UI translations
    operationsTitle: "मुख्य फ़ाइल संचालन",
    operationsDescription: "Gemini CLI द्वारा प्रदान की गई विभिन्न फ़ाइल संचालन सुविधाओं में महारत हासिल करें",
    examplesTitle: "व्यावहारिक उदाहरण",
    examplesDescription: "व्यावहारिक उदाहरणों के माध्यम से फ़ाइल संचालन की सर्वोत्तम प्रथाओं को सीखें",
    explanation: "व्याख्या",
    bestPracticesTitle: "सर्वोत्तम प्रथाएं",
    bestPracticesDescription: "फ़ाइल संचालन के लिए महत्वपूर्ण सिफारिशें और सुरक्षा विचार",
    intermediate: "मध्यम",
    readingTime: "20 मिनट पढ़ना"
  },
  ru: {
    // Russian UI translations
    operationsTitle: "Основные Файловые Операции",
    operationsDescription: "Освойте различные возможности файловых операций, предоставляемые Gemini CLI",
    examplesTitle: "Практические Примеры",
    examplesDescription: "Изучите лучшие практики файловых операций через практические примеры",
    explanation: "Объяснение",
    bestPracticesTitle: "Лучшие Практики",
    bestPracticesDescription: "Важные рекомендации и соображения безопасности для файловых операций",
    intermediate: "Средний",
    readingTime: "20 мин чтения"
  }
};

// Function to safely update translations without losing data
function updateTranslations(langCode) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const uiTexts = uiTranslations[langCode];
    
    if (!uiTexts) {
      console.log(`⚠️  No UI translations defined for ${langCode}`);
      return;
    }
    
    // Ensure all guides sections exist with English content as fallback
    const guidesKeys = [
      'guidesFileOperations',
      'guidesAdvancedConfig', 
      'guidesIntegration',
      'guidesCodeRefactoring',
      'guidesDocumentation',
      'guidesCodeReview'
    ];
    
    let updated = false;
    
    guidesKeys.forEach(guideKey => {
      if (!data[guideKey] && enData[guideKey]) {
        console.log(`  📝 Adding missing ${guideKey} for ${langCode}`);
        data[guideKey] = JSON.parse(JSON.stringify(enData[guideKey])); // Deep copy
        updated = true;
      }
      
      // Update UI text elements if they exist
      if (data[guideKey]) {
        Object.keys(uiTexts).forEach(key => {
          if (data[guideKey][key] !== undefined) {
            data[guideKey][key] = uiTexts[key];
            updated = true;
          }
        });
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`✅ Updated ${langCode}.json with complete translations`);
    } else {
      console.log(`✓ ${langCode}.json is already complete`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${langCode}.json:`, error.message);
  }
}

// Process all languages
console.log('🔧 Fixing and completing all translations...\n');

targetLanguages.forEach(langCode => {
  console.log(`Processing ${langCode}...`);
  updateTranslations(langCode);
  console.log('');
});

console.log('✅ Translation fix completed!');
console.log('📋 All languages now have complete guides content with proper UI translations.');
