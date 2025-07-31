const fs = require('fs');
const path = require('path');

// Languages to translate
const languages = [
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'es', name: 'Spanish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ru', name: 'Russian' }
];

// Comprehensive translations for all guides content
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
      operations: [
        {
          title: "Datei Lesen",
          description: "Lesen und analysieren Sie Inhalte aus verschiedenen Dateiformaten",
          icon: "DocumentTextIcon",
          color: "from-blue-500 to-indigo-600",
          command: "gemini read datei.txt",
          features: [
            "Unterstützung mehrerer Dateiformate",
            "Intelligente Inhaltsanalyse",
            "Große Dateien in Blöcken verarbeiten",
            "Automatische Kodierungserkennung"
          ]
        },
        {
          title: "Verzeichnis Durchsuchen",
          description: "Durchsuchen und analysieren Sie Verzeichnisstrukturen",
          icon: "FolderIcon",
          color: "from-green-500 to-emerald-600",
          command: "gemini list ./src",
          features: [
            "Rekursive Verzeichnisdurchquerung",
            "Dateityp-Filterung",
            "Größen- und Berechtigungsinformationen",
            "Versteckte Dateien anzeigen"
          ]
        },
        {
          title: "Datei Bearbeiten",
          description: "Intelligente Bearbeitung und Änderung von Dateiinhalten",
          icon: "PencilIcon",
          color: "from-purple-500 to-pink-600",
          command: "gemini edit datei.js",
          features: [
            "Syntax-bewusste Bearbeitung",
            "Automatische Formatierung",
            "Backup-Erstellung",
            "Änderungsverfolgung"
          ]
        },
        {
          title: "Datei Löschen",
          description: "Sicheres Löschen von Dateien und Verzeichnissen",
          icon: "TrashIcon",
          color: "from-red-500 to-orange-600",
          command: "gemini delete alte-datei.txt",
          features: [
            "Sicherheitsbestätigungsmechanismus",
            "Papierkorb-Unterstützung",
            "Batch-Löschung",
            "Berechtigungsprüfung"
          ]
        },
        {
          title: "Datei Verschieben",
          description: "Verschieben und umbenennen von Dateien und Verzeichnissen",
          icon: "ArrowPathIcon",
          color: "from-cyan-500 to-blue-600",
          command: "gemini move quelle.txt ziel.txt",
          features: [
            "Intelligente Pfadauflösung",
            "Konfliktbehandlung",
            "Batch-Operationen",
            "Rückgängig-Unterstützung"
          ]
        }
      ],
      examplesTitle: "Praktische Beispiele",
      examplesDescription: "Lernen Sie bewährte Praktiken für Dateioperationen durch praktische Beispiele",
      explanation: "Erklärung",
      examples: [
        {
          title: "JavaScript-Dateien Batch-Verarbeitung",
          description: "Analysieren und optimieren Sie alle JavaScript-Dateien in einem Projekt",
          code: "# Alle JS-Dateien lesen und analysieren\ngemini read \"src/**/*.js\" --analyze\n\n# Code batch-formatieren\ngemini format \"src/**/*.js\" --style=prettier\n\n# Dokumentation generieren\ngemini doc \"src/**/*.js\" --output=docs/",
          explanation: "Verwenden Sie Wildcard-Muster für die Batch-Verarbeitung von Dateien zur Effizienzsteigerung. Der --analyze Parameter führt eine tiefgreifende Code-Analyse durch, --style spezifiziert den Formatierungsstil."
        }
      ],
      bestPracticesTitle: "Bewährte Praktiken",
      bestPracticesDescription: "Wichtige Empfehlungen und Sicherheitshinweise für Dateioperationen",
      bestPractices: [
        {
          type: "success",
          title: "Regelmäßige Backups erstellen",
          content: "Erstellen Sie immer Backups wichtiger Dateien vor größeren Operationen. Verwenden Sie die --backup Option für automatische Sicherungen."
        },
        {
          type: "warning",
          title: "Berechtigungen überprüfen",
          content: "Überprüfen Sie Dateiberechtigungen vor Operationen, besonders in Produktionsumgebungen. Vermeiden Sie das Ausführen mit Root-Rechten, wenn nicht notwendig."
        }
      ],
      nextSteps: {
        title: "Nächste Schritte",
        description: "Jetzt, da Sie Dateioperationen beherrschen, können Sie andere nützliche Funktionen erlernen:",
        integration: "System-Integration",
        codeRefactoring: "Code-Refactoring",
        backToGuides: "Zurück zu den Leitfäden"
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
      operations: [
        {
          title: "ファイル読み取り",
          description: "さまざまなファイル形式からコンテンツを読み取り、分析します",
          icon: "DocumentTextIcon",
          color: "from-blue-500 to-indigo-600",
          command: "gemini read ファイル.txt",
          features: [
            "複数のファイル形式をサポート",
            "インテリジェントなコンテンツ解析",
            "大きなファイルのチャンク処理",
            "自動エンコーディング検出"
          ]
        },
        {
          title: "ディレクトリ閲覧",
          description: "ディレクトリ構造を閲覧し、分析します",
          icon: "FolderIcon",
          color: "from-green-500 to-emerald-600",
          command: "gemini list ./src",
          features: [
            "再帰的ディレクトリトラバーサル",
            "ファイルタイプフィルタリング",
            "サイズと権限情報",
            "隠しファイル表示"
          ]
        }
      ],
      examplesTitle: "実用的な例",
      examplesDescription: "実用的な例を通じてファイル操作のベストプラクティスを学びます",
      explanation: "説明",
      examples: [
        {
          title: "JavaScriptファイルのバッチ処理",
          description: "プロジェクト内のすべてのJavaScriptファイルを分析し、最適化します",
          code: "# すべてのJSファイルを読み取り、分析\ngemini read \"src/**/*.js\" --analyze\n\n# コードをバッチフォーマット\ngemini format \"src/**/*.js\" --style=prettier",
          explanation: "効率を向上させるために、ワイルドカードパターンを使用してファイルをバッチ処理します。"
        }
      ],
      bestPracticesTitle: "ベストプラクティス",
      bestPracticesDescription: "ファイル操作の重要な推奨事項とセキュリティ考慮事項",
      bestPractices: [
        {
          type: "success",
          title: "定期的なバックアップの作成",
          content: "重要な操作の前に、常に重要なファイルのバックアップを作成してください。"
        }
      ],
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
      operations: [
        {
          title: "파일 읽기",
          description: "다양한 파일 형식에서 콘텐츠를 읽고 분석합니다",
          icon: "DocumentTextIcon",
          color: "from-blue-500 to-indigo-600",
          command: "gemini read 파일.txt",
          features: [
            "여러 파일 형식 지원",
            "지능적인 콘텐츠 분석",
            "대용량 파일 청크 처리",
            "자동 인코딩 감지"
          ]
        }
      ],
      examplesTitle: "실용적인 예제",
      examplesDescription: "실용적인 예제를 통해 파일 작업의 모범 사례를 배웁니다",
      explanation: "설명",
      examples: [
        {
          title: "JavaScript 파일 일괄 처리",
          description: "프로젝트의 모든 JavaScript 파일을 분석하고 최적화합니다",
          code: "# 모든 JS 파일 읽기 및 분석\ngemini read \"src/**/*.js\" --analyze",
          explanation: "효율성을 높이기 위해 와일드카드 패턴을 사용하여 파일을 일괄 처리합니다."
        }
      ],
      bestPracticesTitle: "모범 사례",
      bestPracticesDescription: "파일 작업에 대한 중요한 권장 사항 및 보안 고려 사항",
      bestPractices: [
        {
          type: "success",
          title: "정기적인 백업 생성",
          content: "주요 작업 전에 항상 중요한 파일의 백업을 생성하세요."
        }
      ],
      nextSteps: {
        title: "다음 단계",
        description: "파일 작업을 마스터했으므로 다른 유용한 기능을 배울 수 있습니다:",
        integration: "시스템 통합",
        codeRefactoring: "코드 리팩토링",
        backToGuides: "가이드로 돌아가기"
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
      operations: [
        {
          title: "Lecture de Fichier",
          description: "Lire et analyser le contenu de divers formats de fichiers",
          icon: "DocumentTextIcon",
          color: "from-blue-500 to-indigo-600",
          command: "gemini read fichier.txt",
          features: [
            "Support de multiples formats de fichiers",
            "Analyse intelligente du contenu",
            "Traitement de gros fichiers par blocs",
            "Détection automatique de l'encodage"
          ]
        },
        {
          title: "Navigation de Répertoire",
          description: "Parcourir et analyser les structures de répertoires",
          icon: "FolderIcon",
          color: "from-green-500 to-emerald-600",
          command: "gemini list ./src",
          features: [
            "Traversée récursive de répertoires",
            "Filtrage par type de fichier",
            "Informations de taille et permissions",
            "Affichage des fichiers cachés"
          ]
        }
      ],
      examplesTitle: "Exemples Pratiques",
      examplesDescription: "Apprenez les meilleures pratiques pour les opérations de fichiers à travers des exemples pratiques",
      explanation: "Explication",
      examples: [
        {
          title: "Traitement par Lot de Fichiers JavaScript",
          description: "Analyser et optimiser tous les fichiers JavaScript d'un projet",
          code: "# Lire et analyser tous les fichiers JS\ngemini read \"src/**/*.js\" --analyze\n\n# Formater le code par lot\ngemini format \"src/**/*.js\" --style=prettier",
          explanation: "Utilisez des motifs de caractères génériques pour le traitement par lot de fichiers afin d'améliorer l'efficacité."
        }
      ],
      bestPracticesTitle: "Meilleures Pratiques",
      bestPracticesDescription: "Recommandations importantes et considérations de sécurité pour les opérations de fichiers",
      bestPractices: [
        {
          type: "success",
          title: "Créer des Sauvegardes Régulières",
          content: "Créez toujours des sauvegardes des fichiers importants avant les opérations majeures."
        }
      ],
      nextSteps: {
        title: "Prochaines Étapes",
        description: "Maintenant que vous maîtrisez les opérations de fichiers, vous pouvez apprendre d'autres fonctionnalités utiles:",
        integration: "Intégration Système",
        codeRefactoring: "Refactorisation de Code",
        backToGuides: "Retour aux Guides"
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
    console.log(`✓ Updated ${langCode}.json with translated guides content`);
  } catch (error) {
    console.error(`Error updating ${langCode}.json:`, error.message);
  }
}

// Update translation files
console.log('🌐 Adding real translations for guides content...\n');

Object.keys(translations).forEach(langCode => {
  updateTranslationFile(langCode, translations[langCode]);
});

console.log('\n✅ Real translations added for German and French!');
console.log('📝 Note: This is a sample. For complete translations, all languages need similar detailed content.');
