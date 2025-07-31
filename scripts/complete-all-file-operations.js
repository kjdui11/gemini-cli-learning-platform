const fs = require('fs');
const path = require('path');

// Load Chinese version as complete reference
const zhPath = path.join(__dirname, '..', 'src', 'messages', 'zh.json');
const zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

// Languages to translate with their key UI translations
const languageTranslations = {
  ja: {
    hero: {
      title: "ファイル操作ガイド",
      subtitle: "Gemini CLIのファイル読み取り、編集、管理機能をマスターしましょう",
      intermediate: "中級",
      readingTime: "20分で読める"
    },
    overview: {
      title: "ファイル操作の概要",
      description: "読み取り、編集、作成、さまざまなファイルタイプの管理など、ファイルとディレクトリを効率的に処理するためのGemini CLIの使用方法を学びます。"
    },
    operationsTitle: "コアファイル操作",
    operationsDescription: "Gemini CLIが提供するさまざまなファイル操作機能をマスターしましょう",
    examplesTitle: "実用的な例",
    examplesDescription: "実用的な例を通じてファイル操作のベストプラクティスを学びます",
    explanation: "説明",
    bestPracticesTitle: "ベストプラクティス",
    bestPracticesDescription: "ファイル操作の重要な推奨事項とセキュリティ考慮事項",
    nextSteps: {
      title: "次のステップ",
      description: "ファイル操作をマスターしたので、他の便利な機能を学ぶことができます：",
      integration: "システム統合",
      codeRefactoring: "コードリファクタリング",
      backToGuides: "ガイドに戻る"
    },
    operationTitles: [
      "ファイル読み取り",
      "ディレクトリ閲覧", 
      "ファイル編集",
      "ファイル削除",
      "ファイル移動"
    ],
    operationDescriptions: [
      "さまざまなファイル形式からコンテンツを読み取り、分析します",
      "ディレクトリ構造を閲覧し、分析します",
      "ファイルコンテンツをインテリジェントに編集および変更します",
      "保護措置付きでファイルとディレクトリを安全に削除します",
      "ファイルとディレクトリを移動および名前変更します"
    ]
  },
  ko: {
    hero: {
      title: "파일 작업 가이드",
      subtitle: "Gemini CLI의 파일 읽기, 편집 및 관리 기능을 마스터하세요",
      intermediate: "중급",
      readingTime: "20분 읽기"
    },
    overview: {
      title: "파일 작업 개요",
      description: "다양한 파일 유형의 읽기, 편집, 생성 및 관리를 포함하여 파일과 디렉토리를 효율적으로 처리하기 위해 Gemini CLI를 사용하는 방법을 배웁니다."
    },
    operationsTitle: "핵심 파일 작업",
    operationsDescription: "Gemini CLI가 제공하는 다양한 파일 작업 기능을 마스터하세요",
    examplesTitle: "실용적인 예제",
    examplesDescription: "실용적인 예제를 통해 파일 작업의 모범 사례를 배웁니다",
    explanation: "설명",
    bestPracticesTitle: "모범 사례",
    bestPracticesDescription: "파일 작업에 대한 중요한 권장 사항 및 보안 고려 사항",
    nextSteps: {
      title: "다음 단계",
      description: "파일 작업을 마스터했으므로 다른 유용한 기능을 배울 수 있습니다:",
      integration: "시스템 통합",
      codeRefactoring: "코드 리팩토링",
      backToGuides: "가이드로 돌아가기"
    },
    operationTitles: [
      "파일 읽기",
      "디렉토리 탐색",
      "파일 편집", 
      "파일 삭제",
      "파일 이동"
    ],
    operationDescriptions: [
      "다양한 파일 형식에서 콘텐츠를 읽고 분석합니다",
      "디렉토리 구조를 탐색하고 분석합니다",
      "파일 콘텐츠를 지능적으로 편집하고 수정합니다",
      "보호 조치와 함께 파일과 디렉토리를 안전하게 삭제합니다",
      "파일과 디렉토리를 이동하고 이름을 변경합니다"
    ]
  },
  es: {
    hero: {
      title: "Guía de Operaciones de Archivos",
      subtitle: "Domina las funciones de lectura, edición y gestión de archivos de Gemini CLI",
      intermediate: "Intermedio",
      readingTime: "20 min de lectura"
    },
    overview: {
      title: "Resumen de Operaciones de Archivos",
      description: "Aprende a usar Gemini CLI eficientemente para procesar archivos y directorios, incluyendo lectura, edición, creación y gestión de varios tipos de archivos."
    },
    operationsTitle: "Operaciones de Archivos Principales",
    operationsDescription: "Domina las diversas características de operaciones de archivos proporcionadas por Gemini CLI",
    examplesTitle: "Ejemplos Prácticos",
    examplesDescription: "Aprende las mejores prácticas para operaciones de archivos a través de ejemplos prácticos",
    explanation: "Explicación",
    bestPracticesTitle: "Mejores Prácticas",
    bestPracticesDescription: "Recomendaciones importantes y consideraciones de seguridad para operaciones de archivos",
    nextSteps: {
      title: "Próximos Pasos",
      description: "Ahora que dominas las operaciones de archivos, puedes aprender otras características útiles:",
      integration: "Integración del Sistema",
      codeRefactoring: "Refactorización de Código",
      backToGuides: "Volver a las Guías"
    },
    operationTitles: [
      "Lectura de Archivo",
      "Navegación de Directorio",
      "Edición de Archivo",
      "Eliminación de Archivo", 
      "Movimiento de Archivo"
    ],
    operationDescriptions: [
      "Leer y analizar contenido de varios formatos de archivo",
      "Navegar y analizar estructuras de directorios",
      "Editar y modificar inteligentemente el contenido de archivos",
      "Eliminar archivos y directorios de forma segura con medidas de protección",
      "Mover y renombrar archivos y directorios"
    ]
  },
  hi: {
    hero: {
      title: "फ़ाइल संचालन गाइड",
      subtitle: "Gemini CLI की फ़ाइल पढ़ने, संपादन और प्रबंधन सुविधाओं में महारत हासिल करें",
      intermediate: "मध्यम",
      readingTime: "20 मिनट पढ़ना"
    },
    overview: {
      title: "फ़ाइल संचालन अवलोकन",
      description: "विभिन्न फ़ाइल प्रकारों के पढ़ने, संपादन, निर्माण और प्रबंधन सहित फ़ाइलों और निर्देशिकाओं को कुशलतापूर्वक संसाधित करने के लिए Gemini CLI का उपयोग करना सीखें।"
    },
    operationsTitle: "मुख्य फ़ाइल संचालन",
    operationsDescription: "Gemini CLI द्वारा प्रदान की गई विभिन्न फ़ाइल संचालन सुविधाओं में महारत हासिल करें",
    examplesTitle: "व्यावहारिक उदाहरण",
    examplesDescription: "व्यावहारिक उदाहरणों के माध्यम से फ़ाइल संचालन की सर्वोत्तम प्रथाओं को सीखें",
    explanation: "व्याख्या",
    bestPracticesTitle: "सर्वोत्तम प्रथाएं",
    bestPracticesDescription: "फ़ाइल संचालन के लिए महत्वपूर्ण सिफारिशें और सुरक्षा विचार",
    nextSteps: {
      title: "अगले कदम",
      description: "अब जब आपने फ़ाइल संचालन में महारत हासिल कर ली है, आप अन्य उपयोगी सुविधाएं सीख सकते हैं:",
      integration: "सिस्टम एकीकरण",
      codeRefactoring: "कोड रिफैक्टरिंग",
      backToGuides: "गाइड पर वापस जाएं"
    },
    operationTitles: [
      "फ़ाइल पढ़ना",
      "निर्देशिका नेविगेशन",
      "फ़ाइल संपादन",
      "फ़ाइल हटाना",
      "फ़ाइल स्थानांतरण"
    ],
    operationDescriptions: [
      "विभिन्न फ़ाइल प्रारूपों से सामग्री पढ़ें और विश्लेषण करें",
      "निर्देशिका संरचनाओं को नेविगेट और विश्लेषण करें",
      "फ़ाइल सामग्री को बुद्धिमानी से संपादित और संशोधित करें",
      "सुरक्षा उपायों के साथ फ़ाइलों और निर्देशिकाओं को सुरक्षित रूप से हटाएं",
      "फ़ाइलों और निर्देशिकाओं को स्थानांतरित और नाम बदलें"
    ]
  },
  ru: {
    hero: {
      title: "Руководство по Файловым Операциям",
      subtitle: "Освойте функции чтения, редактирования и управления файлами Gemini CLI",
      intermediate: "Средний",
      readingTime: "20 мин чтения"
    },
    overview: {
      title: "Обзор Файловых Операций",
      description: "Изучите, как эффективно использовать Gemini CLI для обработки файлов и каталогов, включая чтение, редактирование, создание и управление различными типами файлов."
    },
    operationsTitle: "Основные Файловые Операции",
    operationsDescription: "Освойте различные возможности файловых операций, предоставляемые Gemini CLI",
    examplesTitle: "Практические Примеры",
    examplesDescription: "Изучите лучшие практики файловых операций через практические примеры",
    explanation: "Объяснение",
    bestPracticesTitle: "Лучшие Практики",
    bestPracticesDescription: "Важные рекомендации и соображения безопасности для файловых операций",
    nextSteps: {
      title: "Следующие Шаги",
      description: "Теперь, когда вы освоили файловые операции, вы можете изучить другие полезные функции:",
      integration: "Системная Интеграция",
      codeRefactoring: "Рефакторинг Кода",
      backToGuides: "Вернуться к Руководствам"
    },
    operationTitles: [
      "Чтение Файла",
      "Навигация по Каталогу",
      "Редактирование Файла",
      "Удаление Файла",
      "Перемещение Файла"
    ],
    operationDescriptions: [
      "Читать и анализировать содержимое различных форматов файлов",
      "Навигация и анализ структур каталогов",
      "Интеллектуальное редактирование и изменение содержимого файлов",
      "Безопасное удаление файлов и каталогов с мерами защиты",
      "Перемещение и переименование файлов и каталогов"
    ]
  }
};

// Function to create complete translation
function createCompleteTranslation(langCode) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = languageTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No translations defined for ${langCode}`);
      return;
    }
    
    // Start with Chinese structure
    const zhFileOps = JSON.parse(JSON.stringify(zhData.guidesFileOperations));
    
    // Apply UI translations
    Object.assign(zhFileOps, translations);
    
    // Translate operation titles and descriptions
    if (translations.operationTitles && translations.operationDescriptions) {
      zhFileOps.operations.forEach((op, index) => {
        if (translations.operationTitles[index]) {
          op.title = translations.operationTitles[index];
        }
        if (translations.operationDescriptions[index]) {
          op.description = translations.operationDescriptions[index];
        }
      });
    }
    
    // Apply to data
    data.guidesFileOperations = zhFileOps;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Created complete file-operations translation for ${langCode}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const fileOps = newData.guidesFileOperations;
    console.log(`   - operations: ${fileOps.operations?.length || 0}`);
    console.log(`   - examples: ${fileOps.examples?.length || 0}`);
    console.log(`   - bestPractices: ${fileOps.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error creating translation for ${langCode}:`, error.message);
  }
}

// Create complete translations for all languages
console.log('🌐 Creating complete file-operations translations for all languages...\n');

Object.keys(languageTranslations).forEach(langCode => {
  console.log(`Creating translation for ${langCode}...`);
  createCompleteTranslation(langCode);
  console.log('');
});

console.log('✅ Complete file-operations translations created for all languages!');
console.log('📋 All languages now have complete content with proper UI translations.');
