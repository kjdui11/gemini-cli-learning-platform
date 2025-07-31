const fs = require('fs');
const path = require('path');

// Languages to update (excluding zh and en which are already complete)
const languages = [
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'es', name: 'Spanish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ru', name: 'Russian' }
];

// Language-specific translations for guides content
const translations = {
  de: {
    // German translations
    guidesFileOperations: {
      hero: {
        title: "Dateioperationen Leitfaden",
        subtitle: "Meistern Sie Gemini CLIs Dateilesung, -bearbeitung und -verwaltungsfunktionen",
        intermediate: "Fortgeschritten",
        readingTime: "20 Min Lesezeit"
      },
      overview: {
        title: "Dateioperationen Übersicht",
        description: "Lernen Sie, wie Sie Gemini CLI effizient für die Verarbeitung von Dateien und Verzeichnissen verwenden, einschließlich Lesen, Bearbeiten, Erstellen und Verwalten verschiedener Dateitypen."
      },
      operationsTitle: "Kern-Dateioperationen",
      operationsDescription: "Meistern Sie die verschiedenen Dateioperationsfunktionen von Gemini CLI",
      examplesTitle: "Praktische Beispiele",
      examplesDescription: "Lernen Sie bewährte Praktiken für Dateioperationen durch praktische Beispiele",
      explanation: "Erklärung",
      bestPracticesTitle: "Bewährte Praktiken",
      bestPracticesDescription: "Wichtige Empfehlungen und Sicherheitshinweise für Dateioperationen",
      nextSteps: {
        title: "Nächste Schritte",
        description: "Jetzt, da Sie Dateioperationen beherrschen, können Sie andere nützliche Funktionen erlernen:",
        integration: "System-Integration",
        codeRefactoring: "Code-Refactoring",
        backToGuides: "Zurück zu den Leitfäden"
      }
    }
  },
  fr: {
    // French translations
    guidesFileOperations: {
      hero: {
        title: "Guide des Opérations de Fichiers",
        subtitle: "Maîtrisez les fonctions de lecture, d'édition et de gestion de fichiers de Gemini CLI",
        intermediate: "Intermédiaire",
        readingTime: "20 min de lecture"
      },
      overview: {
        title: "Aperçu des Opérations de Fichiers",
        description: "Apprenez à utiliser Gemini CLI efficacement pour traiter les fichiers et répertoires, y compris la lecture, l'édition, la création et la gestion de divers types de fichiers."
      },
      operationsTitle: "Opérations de Fichiers Principales",
      operationsDescription: "Maîtrisez les diverses fonctionnalités d'opérations de fichiers fournies par Gemini CLI",
      examplesTitle: "Exemples Pratiques",
      examplesDescription: "Apprenez les meilleures pratiques pour les opérations de fichiers à travers des exemples pratiques",
      explanation: "Explication",
      bestPracticesTitle: "Meilleures Pratiques",
      bestPracticesDescription: "Recommandations importantes et considérations de sécurité pour les opérations de fichiers",
      nextSteps: {
        title: "Prochaines Étapes",
        description: "Maintenant que vous maîtrisez les opérations de fichiers, vous pouvez apprendre d'autres fonctionnalités utiles:",
        integration: "Intégration Système",
        codeRefactoring: "Refactorisation de Code",
        backToGuides: "Retour aux Guides"
      }
    }
  },
  ja: {
    // Japanese translations
    guidesFileOperations: {
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
      }
    }
  },
  ko: {
    // Korean translations
    guidesFileOperations: {
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
      }
    }
  },
  es: {
    // Spanish translations
    guidesFileOperations: {
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
      }
    }
  },
  hi: {
    // Hindi translations
    guidesFileOperations: {
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
      }
    }
  },
  ru: {
    // Russian translations
    guidesFileOperations: {
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
      }
    }
  }
};

// Function to update translation files
function updateTranslationFile(langCode, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Merge new translations
    Object.assign(data, translations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Updated ${langCode}.json with complete guides translations`);
  } catch (error) {
    console.error(`Error updating ${langCode}.json:`, error.message);
  }
}

// Update all language files
console.log('🌐 Completing guides translations for all languages...\n');

Object.keys(translations).forEach(langCode => {
  updateTranslationFile(langCode, translations[langCode]);
});

console.log('\n✅ All guides translations completed!');
console.log('📝 Note: This script added basic translations. For production, consider professional translation services.');
