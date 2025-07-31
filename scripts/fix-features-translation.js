const fs = require('fs');
const path = require('path');

// Complete features translations for all languages
const featuresTranslations = {
  fr: {
    operations: [
      {
        features: [
          "Support de multiples formats de fichiers (TXT, JSON, CSV, MD, YAML)",
          "Analyse intelligente du contenu et reconnaissance automatique de structure",
          "Traitement efficace de gros fichiers par lecture en blocs",
          "Détection automatique de l'encodage de caractères (UTF-8, ASCII, ISO-8859-1)",
          "Coloration syntaxique et formatage pour les fichiers de code"
        ]
      },
      {
        features: [
          "Traversée récursive de répertoires avec contrôle de profondeur configurable",
          "Filtrage avancé par type de fichier selon les extensions et types MIME",
          "Métadonnées détaillées : taille, permissions, dates de création et modification",
          "Affichage des fichiers cachés et système avec avertissements de sécurité",
          "Visualisation interactive en arbre pour une navigation améliorée"
        ]
      },
      {
        features: [
          "Édition consciente de la syntaxe pour plus de 50 langages de programmation",
          "Formatage automatique du code, indentation et cohérence de style",
          "Création intelligente de sauvegardes avec versioning avant chaque modification",
          "Suivi des modifications en temps réel avec affichage visuel des différences",
          "Édition simultanée de plusieurs fichiers avec opérations par lot"
        ]
      },
      {
        features: [
          "Mécanisme de confirmation de sécurité multi-niveaux pour fichiers critiques",
          "Fonctionnalité de corbeille intégrée pour récupération facile",
          "Suppression par lot performante avec support de caractères génériques et regex",
          "Vérification automatique des permissions et validation d'accès",
          "Protection intelligente contre la suppression accidentelle de fichiers système importants"
        ]
      },
      {
        features: [
          "Résolution intelligente de chemin avec support des chemins relatifs et absolus",
          "Gestion automatique des conflits avec stratégies de résolution personnalisables",
          "Opérations par lot efficaces pour de grandes quantités de fichiers",
          "Fonctionnalité d'annulation complète pour les déplacements accidentels",
          "Indicateur de progression en temps réel avec estimations de vitesse et de temps"
        ]
      }
    ]
  },
  de: {
    operations: [
      {
        features: [
          "Unterstützung für mehrere Dateiformate (TXT, JSON, CSV, MD, YAML)",
          "Intelligente Inhaltsanalyse und automatische Strukturerkennung",
          "Effiziente Verarbeitung großer Dateien durch Chunk-basiertes Lesen",
          "Automatische Zeichenkodierung-Erkennung (UTF-8, ASCII, ISO-8859-1)",
          "Syntax-Highlighting und Formatierung für Code-Dateien"
        ]
      },
      {
        features: [
          "Rekursive Verzeichnisdurchquerung mit konfigurierbarer Tiefenkontrolle",
          "Erweiterte Dateityp-Filterung nach Erweiterungen und MIME-Typen",
          "Detaillierte Metadaten: Größe, Berechtigungen, Erstellungs- und Änderungsdatum",
          "Anzeige versteckter Dateien und Systemdateien mit Sicherheitshinweisen",
          "Interaktive Baumstruktur-Visualisierung für bessere Navigation"
        ]
      },
      {
        features: [
          "Syntax-bewusste Bearbeitung für über 50 Programmiersprachen",
          "Automatische Code-Formatierung, Einrückung und Stil-Konsistenz",
          "Intelligente Backup-Erstellung mit Versionierung vor jeder Änderung",
          "Echtzeit-Änderungsverfolgung mit visueller Diff-Anzeige",
          "Gleichzeitige Bearbeitung mehrerer Dateien mit Batch-Operationen"
        ]
      },
      {
        features: [
          "Mehrstufiger Sicherheitsbestätigungsmechanismus für kritische Dateien",
          "Integrierte Papierkorb-Funktionalität für einfache Wiederherstellung",
          "Leistungsstarke Batch-Löschung mit Wildcard- und Regex-Unterstützung",
          "Automatische Berechtigungsprüfung und Zugriffsvalidierung",
          "Intelligenter Schutz vor versehentlichem Löschen wichtiger Systemdateien"
        ]
      },
      {
        features: [
          "Intelligente Pfadauflösung mit Unterstützung für relative und absolute Pfade",
          "Automatische Konfliktbehandlung mit benutzerdefinierten Auflösungsstrategien",
          "Effiziente Batch-Operationen für große Dateimengen",
          "Vollständige Rückgängig-Funktionalität für versehentliche Verschiebungen",
          "Echtzeit-Fortschrittsanzeige mit Geschwindigkeits- und Zeitschätzungen"
        ]
      }
    ]
  },
  ja: {
    operations: [
      {
        features: [
          "複数のファイル形式のサポート（TXT、JSON、CSV、MD、YAML）",
          "インテリジェントなコンテンツ分析と自動構造認識",
          "チャンクベースの読み取りによる大きなファイルの効率的な処理",
          "自動文字エンコーディング検出（UTF-8、ASCII、ISO-8859-1）",
          "コードファイルのシンタックスハイライトとフォーマット"
        ]
      },
      {
        features: [
          "設定可能な深度制御による再帰的ディレクトリトラバーサル",
          "拡張子とMIMEタイプによる高度なファイルタイプフィルタリング",
          "詳細なメタデータ：サイズ、権限、作成日時と変更日時",
          "セキュリティ警告付きの隠しファイルとシステムファイルの表示",
          "ナビゲーション向上のためのインタラクティブなツリー構造可視化"
        ]
      },
      {
        features: [
          "50以上のプログラミング言語に対応したシンタックス対応編集",
          "自動コードフォーマット、インデント、スタイル一貫性",
          "各変更前のバージョニング付きインテリジェントバックアップ作成",
          "視覚的差分表示によるリアルタイム変更追跡",
          "バッチ操作による複数ファイルの同時編集"
        ]
      },
      {
        features: [
          "重要ファイル用の多段階セキュリティ確認メカニズム",
          "簡単な復元のための統合ゴミ箱機能",
          "ワイルドカードと正規表現サポートによる高性能バッチ削除",
          "自動権限チェックとアクセス検証",
          "重要なシステムファイルの誤削除に対するインテリジェント保護"
        ]
      },
      {
        features: [
          "相対パスと絶対パスサポートによるインテリジェントパス解決",
          "カスタマイズ可能な解決戦略による自動競合処理",
          "大量ファイルに対する効率的なバッチ操作",
          "誤った移動に対する完全な元に戻す機能",
          "速度と時間推定付きのリアルタイム進捗表示"
        ]
      }
    ]
  },
  ko: {
    operations: [
      {
        features: [
          "다중 파일 형식 지원 (TXT, JSON, CSV, MD, YAML)",
          "지능적인 콘텐츠 분석 및 자동 구조 인식",
          "청크 기반 읽기를 통한 대용량 파일의 효율적 처리",
          "자동 문자 인코딩 감지 (UTF-8, ASCII, ISO-8859-1)",
          "코드 파일을 위한 구문 강조 및 포맷팅"
        ]
      },
      {
        features: [
          "구성 가능한 깊이 제어를 통한 재귀적 디렉토리 순회",
          "확장자 및 MIME 타입에 따른 고급 파일 타입 필터링",
          "상세한 메타데이터: 크기, 권한, 생성 및 수정 날짜",
          "보안 경고와 함께 숨김 파일 및 시스템 파일 표시",
          "향상된 탐색을 위한 대화형 트리 구조 시각화"
        ]
      },
      {
        features: [
          "50개 이상의 프로그래밍 언어를 위한 구문 인식 편집",
          "자동 코드 포맷팅, 들여쓰기 및 스타일 일관성",
          "각 수정 전 버전 관리를 통한 지능적 백업 생성",
          "시각적 차이 표시를 통한 실시간 변경 추적",
          "배치 작업을 통한 여러 파일 동시 편집"
        ]
      },
      {
        features: [
          "중요 파일을 위한 다단계 보안 확인 메커니즘",
          "쉬운 복구를 위한 통합 휴지통 기능",
          "와일드카드 및 정규식 지원을 통한 고성능 배치 삭제",
          "자동 권한 확인 및 액세스 검증",
          "중요한 시스템 파일의 우발적 삭제에 대한 지능적 보호"
        ]
      },
      {
        features: [
          "상대 및 절대 경로 지원을 통한 지능적 경로 해결",
          "사용자 정의 해결 전략을 통한 자동 충돌 처리",
          "대량 파일을 위한 효율적인 배치 작업",
          "우발적 이동에 대한 완전한 실행 취소 기능",
          "속도 및 시간 추정을 통한 실시간 진행률 표시"
        ]
      }
    ]
  },
  es: {
    operations: [
      {
        features: [
          "Soporte para múltiples formatos de archivo (TXT, JSON, CSV, MD, YAML)",
          "Análisis inteligente de contenido y reconocimiento automático de estructura",
          "Procesamiento eficiente de archivos grandes mediante lectura por chunks",
          "Detección automática de codificación de caracteres (UTF-8, ASCII, ISO-8859-1)",
          "Resaltado de sintaxis y formateo para archivos de código"
        ]
      },
      {
        features: [
          "Recorrido recursivo de directorios con control de profundidad configurable",
          "Filtrado avanzado por tipo de archivo según extensiones y tipos MIME",
          "Metadatos detallados: tamaño, permisos, fechas de creación y modificación",
          "Visualización de archivos ocultos y del sistema con advertencias de seguridad",
          "Visualización interactiva en árbol para navegación mejorada"
        ]
      },
      {
        features: [
          "Edición consciente de sintaxis para más de 50 lenguajes de programación",
          "Formateo automático de código, indentación y consistencia de estilo",
          "Creación inteligente de respaldos con versionado antes de cada modificación",
          "Seguimiento de cambios en tiempo real con visualización de diferencias",
          "Edición simultánea de múltiples archivos con operaciones por lotes"
        ]
      },
      {
        features: [
          "Mecanismo de confirmación de seguridad multinivel para archivos críticos",
          "Funcionalidad de papelera integrada para recuperación fácil",
          "Eliminación por lotes de alto rendimiento con soporte de comodines y regex",
          "Verificación automática de permisos y validación de acceso",
          "Protección inteligente contra eliminación accidental de archivos del sistema importantes"
        ]
      },
      {
        features: [
          "Resolución inteligente de rutas con soporte para rutas relativas y absolutas",
          "Manejo automático de conflictos con estrategias de resolución personalizables",
          "Operaciones por lotes eficientes para grandes cantidades de archivos",
          "Funcionalidad completa de deshacer para movimientos accidentales",
          "Indicador de progreso en tiempo real con estimaciones de velocidad y tiempo"
        ]
      }
    ]
  },
  hi: {
    operations: [
      {
        features: [
          "कई फ़ाइल प्रारूपों का समर्थन (TXT, JSON, CSV, MD, YAML)",
          "बुद्धिमान सामग्री विश्लेषण और स्वचालित संरचना पहचान",
          "चंक-आधारित पढ़ने के माध्यम से बड़ी फ़ाइलों की कुशल प्रसंस्करण",
          "स्वचालित वर्ण एन्कोडिंग का पता लगाना (UTF-8, ASCII, ISO-8859-1)",
          "कोड फ़ाइलों के लिए सिंटैक्स हाइलाइटिंग और फॉर्मेटिंग"
        ]
      },
      {
        features: [
          "कॉन्फ़िगरेबल गहराई नियंत्रण के साथ पुनरावर्ती निर्देशिका ट्रैवर्सल",
          "एक्सटेंशन और MIME प्रकारों के अनुसार उन्नत फ़ाइल प्रकार फ़िल्टरिंग",
          "विस्तृत मेटाडेटा: आकार, अनुमतियां, निर्माण और संशोधन दिनांक",
          "सुरक्षा चेतावनियों के साथ छुपी हुई फ़ाइलों और सिस्टम फ़ाइलों का प्रदर्शन",
          "बेहतर नेविगेशन के लिए इंटरैक्टिव ट्री संरचना विज़ुअलाइज़ेशन"
        ]
      },
      {
        features: [
          "50 से अधिक प्रोग्रामिंग भाषाओं के लिए सिंटैक्स-जागरूक संपादन",
          "स्वचालित कोड फॉर्मेटिंग, इंडेंटेशन और स्टाइल स्थिरता",
          "प्रत्येक संशोधन से पहले वर्जनिंग के साथ बुद्धिमान बैकअप निर्माण",
          "दृश्य अंतर प्रदर्शन के साथ वास्तविक समय परिवर्तन ट्रैकिंग",
          "बैच ऑपरेशन के साथ कई फ़ाइलों का एक साथ संपादन"
        ]
      },
      {
        features: [
          "महत्वपूर्ण फ़ाइलों के लिए बहु-स्तरीय सुरक्षा पुष्टि तंत्र",
          "आसान रिकवरी के लिए एकीकृत ट्रैश कार्यक्षमता",
          "वाइल्डकार्ड और रेगेक्स समर्थन के साथ उच्च प्रदर्शन बैच हटाना",
          "स्वचालित अनुमति जांच और पहुंच सत्यापन",
          "महत्वपूर्ण सिस्टम फ़ाइलों के आकस्मिक हटाने के खिलाफ बुद्धिमान सुरक्षा"
        ]
      },
      {
        features: [
          "सापेक्ष और निरपेक्ष पथ समर्थन के साथ बुद्धिमान पथ समाधान",
          "अनुकूलन योग्य समाधान रणनीतियों के साथ स्वचालित संघर्ष प्रबंधन",
          "बड़ी मात्रा में फ़ाइलों के लिए कुशल बैच ऑपरेशन",
          "आकस्मिक चालों के लिए पूर्ण पूर्ववत कार्यक्षमता",
          "गति और समय अनुमान के साथ वास्तविक समय प्रगति संकेतक"
        ]
      }
    ]
  },
  ru: {
    operations: [
      {
        features: [
          "Поддержка множественных форматов файлов (TXT, JSON, CSV, MD, YAML)",
          "Интеллектуальный анализ содержимого и автоматическое распознавание структуры",
          "Эффективная обработка больших файлов через чтение по блокам",
          "Автоматическое определение кодировки символов (UTF-8, ASCII, ISO-8859-1)",
          "Подсветка синтаксиса и форматирование для файлов кода"
        ]
      },
      {
        features: [
          "Рекурсивный обход каталогов с настраиваемым контролем глубины",
          "Расширенная фильтрация по типу файлов согласно расширениям и MIME-типам",
          "Подробные метаданные: размер, разрешения, даты создания и изменения",
          "Отображение скрытых и системных файлов с предупреждениями безопасности",
          "Интерактивная визуализация древовидной структуры для улучшенной навигации"
        ]
      },
      {
        features: [
          "Синтаксис-осознанное редактирование для более 50 языков программирования",
          "Автоматическое форматирование кода, отступы и согласованность стиля",
          "Интеллектуальное создание резервных копий с версионированием перед каждым изменением",
          "Отслеживание изменений в реальном времени с визуальным отображением различий",
          "Одновременное редактирование нескольких файлов с пакетными операциями"
        ]
      },
      {
        features: [
          "Многоуровневый механизм подтверждения безопасности для критических файлов",
          "Интегрированная функциональность корзины для легкого восстановления",
          "Высокопроизводительное пакетное удаление с поддержкой подстановочных знаков и regex",
          "Автоматическая проверка разрешений и валидация доступа",
          "Интеллектуальная защита от случайного удаления важных системных файлов"
        ]
      },
      {
        features: [
          "Интеллектуальное разрешение путей с поддержкой относительных и абсолютных путей",
          "Автоматическое управление конфликтами с настраиваемыми стратегиями разрешения",
          "Эффективные пакетные операции для больших объемов файлов",
          "Полная функциональность отмены для случайных перемещений",
          "Индикатор прогресса в реальном времени с оценками скорости и времени"
        ]
      }
    ]
  }
};

// Function to fix features translation for a language
function fixFeaturesTranslation(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = featuresTranslations[langCode];
    
    if (!translations || !data.guidesFileOperations) {
      console.log(`⚠️  No features translations or guidesFileOperations found for ${langCode}`);
      return;
    }
    
    // Update features for each operation
    translations.operations.forEach((opTranslation, index) => {
      if (data.guidesFileOperations.operations[index] && opTranslation.features) {
        data.guidesFileOperations.operations[index].features = opTranslation.features;
      }
    });
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Fixed features translation for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const firstOpFeatures = newData.guidesFileOperations.operations[0].features;
    console.log(`   - First operation features count: ${firstOpFeatures?.length || 0}`);
    console.log(`   - First feature text: "${firstOpFeatures?.[0]?.substring(0, 50) || 'N/A'}..."`);
    
  } catch (error) {
    console.error(`❌ Error fixing features translation for ${langCode}:`, error.message);
  }
}

// Fix features translations for all languages
console.log('🔧 Fixing features translations for all languages...\n');

Object.keys(featuresTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German', 
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    hi: 'Hindi',
    ru: 'Russian'
  };
  
  console.log(`Fixing ${langNames[langCode]} features...`);
  fixFeaturesTranslation(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ All features translations fixed!');
console.log('📝 Now all operation features are properly translated in all languages.');
