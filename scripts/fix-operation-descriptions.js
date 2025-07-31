const fs = require('fs');
const path = require('path');

// Complete operation descriptions translations for all languages
const operationDescriptionsTranslations = {
  fr: {
    operations: [
      {
        title: "Lecture de Fichier",
        description: "Lire et analyser le contenu de divers formats de fichiers avec reconnaissance intelligente"
      },
      {
        title: "Navigation de Répertoire", 
        description: "Navigation efficace et analyse des structures de répertoires avec options de filtrage avancées"
      },
      {
        title: "Édition de Fichier",
        description: "Édition intelligente et contextuelle du contenu des fichiers avec mesures de sécurité automatiques"
      },
      {
        title: "Suppression de Fichier",
        description: "Suppression sécurisée et contrôlée de fichiers avec mesures de protection complètes"
      },
      {
        title: "Déplacement de Fichier",
        description: "Déplacement et renommage fiables avec résolution intelligente des conflits"
      }
    ]
  },
  de: {
    operations: [
      {
        title: "Datei Lesen",
        description: "Lesen und analysieren Sie Inhalte aus verschiedenen Dateiformaten mit intelligenter Erkennung"
      },
      {
        title: "Verzeichnis Durchsuchen",
        description: "Effiziente Navigation und Analyse von Verzeichnisstrukturen mit erweiterten Filteroptionen"
      },
      {
        title: "Datei Bearbeiten",
        description: "Intelligente und kontextbewusste Bearbeitung von Dateiinhalten mit automatischen Sicherheitsmaßnahmen"
      },
      {
        title: "Datei Löschen",
        description: "Sichere und kontrollierte Löschung von Dateien mit umfassenden Schutzmaßnahmen"
      },
      {
        title: "Datei Verschieben",
        description: "Zuverlässiges Verschieben und Umbenennen mit intelligenter Konfliktauflösung"
      }
    ]
  },
  ja: {
    operations: [
      {
        title: "ファイル読み取り",
        description: "インテリジェント認識機能を備えたさまざまなファイル形式のコンテンツ読み取りと分析"
      },
      {
        title: "ディレクトリ閲覧",
        description: "高度なフィルタリングオプションを備えた効率的なディレクトリ構造のナビゲーションと分析"
      },
      {
        title: "ファイル編集",
        description: "自動セキュリティ対策を備えたファイルコンテンツのインテリジェントでコンテキスト対応編集"
      },
      {
        title: "ファイル削除",
        description: "包括的な保護対策を備えたファイルの安全で制御された削除"
      },
      {
        title: "ファイル移動",
        description: "インテリジェント競合解決機能を備えた信頼性の高いファイル移動と名前変更"
      }
    ]
  },
  ko: {
    operations: [
      {
        title: "파일 읽기",
        description: "지능적 인식 기능을 갖춘 다양한 파일 형식의 콘텐츠 읽기 및 분석"
      },
      {
        title: "디렉토리 탐색",
        description: "고급 필터링 옵션을 갖춘 디렉토리 구조의 효율적인 탐색 및 분석"
      },
      {
        title: "파일 편집",
        description: "자동 보안 조치를 갖춘 파일 콘텐츠의 지능적이고 상황 인식적 편집"
      },
      {
        title: "파일 삭제",
        description: "포괄적인 보호 조치를 갖춘 파일의 안전하고 제어된 삭제"
      },
      {
        title: "파일 이동",
        description: "지능적 충돌 해결 기능을 갖춘 신뢰할 수 있는 파일 이동 및 이름 변경"
      }
    ]
  },
  es: {
    operations: [
      {
        title: "Lectura de Archivo",
        description: "Leer y analizar contenido de varios formatos de archivo con reconocimiento inteligente"
      },
      {
        title: "Navegación de Directorio",
        description: "Navegación eficiente y análisis de estructuras de directorios con opciones de filtrado avanzadas"
      },
      {
        title: "Edición de Archivo",
        description: "Edición inteligente y contextual del contenido de archivos con medidas de seguridad automáticas"
      },
      {
        title: "Eliminación de Archivo",
        description: "Eliminación segura y controlada de archivos con medidas de protección integrales"
      },
      {
        title: "Movimiento de Archivo",
        description: "Movimiento y renombrado confiable con resolución inteligente de conflictos"
      }
    ]
  },
  hi: {
    operations: [
      {
        title: "फ़ाइल पढ़ना",
        description: "बुद्धिमान पहचान के साथ विभिन्न फ़ाइल प्रारूपों की सामग्री पढ़ना और विश्लेषण करना"
      },
      {
        title: "निर्देशिका नेविगेशन",
        description: "उन्नत फ़िल्टरिंग विकल्पों के साथ निर्देशिका संरचनाओं का कुशल नेविगेशन और विश्लेषण"
      },
      {
        title: "फ़ाइल संपादन",
        description: "स्वचालित सुरक्षा उपायों के साथ फ़ाइल सामग्री का बुद्धिमान और संदर्भ-जागरूक संपादन"
      },
      {
        title: "फ़ाइल हटाना",
        description: "व्यापक सुरक्षा उपायों के साथ फ़ाइलों का सुरक्षित और नियंत्रित हटाना"
      },
      {
        title: "फ़ाइल स्थानांतरण",
        description: "बुद्धिमान संघर्ष समाधान के साथ विश्वसनीय फ़ाइल स्थानांतरण और नाम बदलना"
      }
    ]
  },
  ru: {
    operations: [
      {
        title: "Чтение Файла",
        description: "Чтение и анализ содержимого различных форматов файлов с интеллектуальным распознаванием"
      },
      {
        title: "Навигация по Каталогу",
        description: "Эффективная навигация и анализ структур каталогов с расширенными опциями фильтрации"
      },
      {
        title: "Редактирование Файла",
        description: "Интеллектуальное и контекстное редактирование содержимого файлов с автоматическими мерами безопасности"
      },
      {
        title: "Удаление Файла",
        description: "Безопасное и контролируемое удаление файлов с комплексными мерами защиты"
      },
      {
        title: "Перемещение Файла",
        description: "Надежное перемещение и переименование с интеллектуальным разрешением конфликтов"
      }
    ]
  }
};

// Function to fix operation descriptions for a language
function fixOperationDescriptions(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = operationDescriptionsTranslations[langCode];
    
    if (!translations || !data.guidesFileOperations) {
      console.log(`⚠️  No operation descriptions translations or guidesFileOperations found for ${langCode}`);
      return;
    }
    
    // Update title and description for each operation
    translations.operations.forEach((opTranslation, index) => {
      if (data.guidesFileOperations.operations[index]) {
        if (opTranslation.title) {
          data.guidesFileOperations.operations[index].title = opTranslation.title;
        }
        if (opTranslation.description) {
          data.guidesFileOperations.operations[index].description = opTranslation.description;
        }
      }
    });
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Fixed operation descriptions for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const firstOp = newData.guidesFileOperations.operations[0];
    console.log(`   - First operation title: "${firstOp?.title || 'N/A'}"`);
    console.log(`   - First operation description: "${firstOp?.description?.substring(0, 50) || 'N/A'}..."`);
    
  } catch (error) {
    console.error(`❌ Error fixing operation descriptions for ${langCode}:`, error.message);
  }
}

// Fix operation descriptions for all languages
console.log('🔧 Fixing operation descriptions for all languages...\n');

Object.keys(operationDescriptionsTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German', 
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    hi: 'Hindi',
    ru: 'Russian'
  };
  
  console.log(`Fixing ${langNames[langCode]} operation descriptions...`);
  fixOperationDescriptions(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ All operation descriptions fixed!');
console.log('📝 Now all operation titles and descriptions are properly translated in all languages.');
