const fs = require('fs');
const path = require('path');

// Examples category translations for all languages
const examplesTranslations = {
  fr: {
    "title": "Cas Pratiques",
    "description": "Scénarios d'application et solutions dans des projets réels",
    "tutorials": [
      {
        "title": "Assistant de Refactorisation de Code",
        "description": "Utiliser l'IA pour analyser et refactoriser le code existant",
        "duration": "40 minutes",
        "level": "Pratique"
      },
      {
        "title": "Génération de Documentation de Projet",
        "description": "Générer automatiquement la documentation de projet et README",
        "duration": "30 minutes",
        "level": "Pratique"
      },
      {
        "title": "Assistant de Révision de Code",
        "description": "Utiliser l'IA pour l'inspection de la qualité du code",
        "duration": "35 minutes",
        "level": "Pratique"
      }
    ]
  },
  de: {
    "title": "Praktische Fälle",
    "description": "Anwendungsszenarien und Lösungen in realen Projekten",
    "tutorials": [
      {
        "title": "Code-Refactoring-Assistent",
        "description": "KI zur Analyse und Refactorierung bestehenden Codes verwenden",
        "duration": "40 Minuten",
        "level": "Praktisch"
      },
      {
        "title": "Projekt-Dokumentationsgenerierung",
        "description": "Projektdokumentation und README automatisch generieren",
        "duration": "30 Minuten",
        "level": "Praktisch"
      },
      {
        "title": "Code-Review-Assistent",
        "description": "KI für Code-Qualitätsprüfung verwenden",
        "duration": "35 Minuten",
        "level": "Praktisch"
      }
    ]
  },
  ja: {
    "title": "実践的ケース",
    "description": "実際のプロジェクトでのアプリケーションシナリオと解決策",
    "tutorials": [
      {
        "title": "コードリファクタリングアシスタント",
        "description": "既存のコードを分析・リファクタリングするためのAI活用",
        "duration": "40分",
        "level": "実践的"
      },
      {
        "title": "プロジェクト文書生成",
        "description": "プロジェクト文書とREADMEを自動生成",
        "duration": "30分",
        "level": "実践的"
      },
      {
        "title": "コードレビューアシスタント",
        "description": "コード品質検査のためのAI活用",
        "duration": "35分",
        "level": "実践的"
      }
    ]
  },
  ko: {
    "title": "실용적 사례",
    "description": "실제 프로젝트의 응용 시나리오와 솔루션",
    "tutorials": [
      {
        "title": "코드 리팩토링 도우미",
        "description": "기존 코드를 분석하고 리팩토링하기 위한 AI 사용",
        "duration": "40분",
        "level": "실용적"
      },
      {
        "title": "프로젝트 문서 생성",
        "description": "프로젝트 문서와 README를 자동으로 생성",
        "duration": "30분",
        "level": "실용적"
      },
      {
        "title": "코드 리뷰 도우미",
        "description": "코드 품질 검사를 위한 AI 사용",
        "duration": "35분",
        "level": "실용적"
      }
    ]
  },
  es: {
    "title": "Casos Prácticos",
    "description": "Escenarios de aplicación y soluciones en proyectos reales",
    "tutorials": [
      {
        "title": "Asistente de Refactorización de Código",
        "description": "Usar IA para analizar y refactorizar código existente",
        "duration": "40 minutos",
        "level": "Práctico"
      },
      {
        "title": "Generación de Documentación de Proyecto",
        "description": "Generar automáticamente documentación de proyecto y README",
        "duration": "30 minutos",
        "level": "Práctico"
      },
      {
        "title": "Asistente de Revisión de Código",
        "description": "Usar IA para inspección de calidad de código",
        "duration": "35 minutos",
        "level": "Práctico"
      }
    ]
  },
  ru: {
    "title": "Практические Случаи",
    "description": "Сценарии применения и решения в реальных проектах",
    "tutorials": [
      {
        "title": "Помощник Рефакторинга Кода",
        "description": "Использование ИИ для анализа и рефакторинга существующего кода",
        "duration": "40 минут",
        "level": "Практический"
      },
      {
        "title": "Генерация Документации Проекта",
        "description": "Автоматическая генерация документации проекта и README",
        "duration": "30 минут",
        "level": "Практический"
      },
      {
        "title": "Помощник Ревью Кода",
        "description": "Использование ИИ для проверки качества кода",
        "duration": "35 минут",
        "level": "Практический"
      }
    ]
  }
};

// Function to add examples category to a language file
function addExamplesCategory(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translation = examplesTranslations[langCode];
    
    if (!translation) {
      console.log(`⚠️  No examples translation found for ${langCode}`);
      return;
    }

    if (!data.guidesMain || !data.guidesMain.categories) {
      console.log(`⚠️  guidesMain.categories not found in ${langCode}`);
      return;
    }

    // Check if examples category already exists
    if (data.guidesMain.categories.examples) {
      console.log(`ℹ️  Examples category already exists for ${langName}`);
      return;
    }

    // Add the examples category
    data.guidesMain.categories.examples = translation;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Added examples category for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const examples = newData.guidesMain?.categories?.examples;
    console.log(`   - Title: "${examples?.title || 'N/A'}"`);
    console.log(`   - Tutorials: ${examples?.tutorials?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error adding examples category for ${langCode}:`, error.message);
  }
}

// Apply to all languages
console.log('🔧 Adding examples category to all languages...\n');

Object.keys(examplesTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Adding examples category for ${langNames[langCode]}...`);
  addExamplesCategory(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ All examples categories added!');
console.log('🎯 All languages now have complete guides categories.');
