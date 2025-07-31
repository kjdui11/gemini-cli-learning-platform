const fs = require('fs');
const path = require('path');

// Complete Code Refactoring translations for German and Japanese
const codeRefactoringTranslations = {
  de: {
    "title": "Code-Refactoring-Assistent",
    "subtitle": "Verwenden Sie KI zur Analyse und Refactoring von bestehendem Code",
    "description": "Lernen Sie, wie Sie Gemini CLI für intelligentes Code-Refactoring verwenden, um Codequalität, Lesbarkeit und Wartbarkeit zu verbessern.",
    "overview": {
      "title": "Refactoring-Übersicht",
      "description": "Code-Refactoring ist der Prozess der Verbesserung bestehender Code-Struktur ohne Änderung des externen Verhaltens. Gemini CLI bietet mächtige KI-unterstützte Refactoring-Fähigkeiten, um Code-Smells zu identifizieren, Performance zu optimieren und Code-Qualität zu verbessern."
    },
    "typesTitle": "Refactoring-Typen",
    "typesDescription": "Lernen Sie verschiedene Arten von Code-Refactoring-Techniken kennen",
    "types": [
      {
        "icon": "structure",
        "title": "Strukturelles Refactoring",
        "description": "Code-Organisation und -Architektur verbessern",
        "techniques": [
          { "name": "Methode Extrahieren" },
          { "name": "Klasse Extrahieren" },
          { "name": "Methode Verschieben" },
          { "name": "Variable Umbenennen" }
        ]
      },
      {
        "icon": "performance",
        "title": "Performance-Optimierung",
        "description": "Code-Ausführungseffizienz und Ressourcennutzung optimieren",
        "techniques": [
          { "name": "Algorithmus-Optimierung" },
          { "name": "Caching-Strategie" },
          { "name": "Speicherverwaltung" },
          { "name": "Parallelitäts-Optimierung" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "Wartbarkeit",
        "description": "Code-Lesbarkeit und Wartbarkeit verbessern",
        "techniques": [
          { "name": "Bedingte Ausdrücke Vereinfachen" },
          { "name": "Duplizierten Code Eliminieren" },
          { "name": "Benennung Verbessern" },
          { "name": "Kommentare Hinzufügen" }
        ]
      },
      {
        "icon": "security",
        "title": "Sicherheitshärtung",
        "description": "Potenzielle Sicherheitslücken identifizieren und beheben",
        "techniques": [
          { "name": "Eingabevalidierung" },
          { "name": "Berechtigungsprüfungen" },
          { "name": "Datenverschlüsselung" },
          { "name": "Fehlerbehandlung" }
        ]
      }
    ],
    "workflow": {
      "title": "Refactoring-Workflow",
      "description": "Folgen Sie einem systematischen Refactoring-Prozess zur Sicherstellung der Code-Qualität",
      "steps": [
        {
          "title": "Code-Analyse",
          "description": "Verwenden Sie KI zur Analyse bestehenden Codes und Identifikation von Refactoring-Möglichkeiten",
          "example": "# Code-Qualität analysieren\ngemini analyze --file src/main.js --type quality\n\n# Code-Smells erkennen\ngemini detect --smell --directory src/"
        },
        {
          "title": "Refactoring-Plan Erstellen",
          "description": "Entwickeln Sie einen detaillierten Refactoring-Plan basierend auf Analyseergebnissen",
          "example": "# Refactoring-Vorschläge generieren\ngemini refactor --plan --file src/main.js\n\n# Refactoring-Risiken bewerten\ngemini assess --risk --changes planned"
        },
        {
          "title": "Refactoring Ausführen",
          "description": "Führen Sie Refactoring-Operationen schrittweise aus, während Sie die Code-Funktionalität beibehalten",
          "example": "# Automatisches Refactoring\ngemini refactor --apply --file src/main.js\n\n# Interaktives Refactoring\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "Verifizieren und Testen",
          "description": "Stellen Sie sicher, dass refactorierter Code korrekt funktioniert und gut performt",
          "example": "# Tests ausführen\ngemini test --after-refactor\n\n# Performance-Vergleich\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "Refactoring-Beispiele",
    "examplesDescription": "Sehen Sie echte Code-Refactoring-Fälle",
    "beforeLabel": "Vorher",
    "afterLabel": "Nachher",
    "examples": [
      {
        "title": "Funktions-Extraktion",
        "description": "Komplexe Funktionen in kleinere, fokussiertere Funktionen aufteilen",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "Bedingungsvereinfachung",
        "description": "Komplexe bedingte Logik vereinfachen",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "Refactoring-Best-Practices",
    "bestPracticesDescription": "Befolgen Sie diese Best Practices für erfolgreiches Refactoring",
    "bestPractices": [
      {
        "title": "Kleine Schritte",
        "description": "Machen Sie kleine, häufige Refactorings anstatt großangelegter einmaliger Refactorings, um Risiken zu reduzieren und Rollbacks zu erleichtern."
      },
      {
        "title": "Tests Zuerst",
        "description": "Stellen Sie angemessene Testabdeckung vor dem Refactoring sicher und führen Sie Tests sofort danach aus, um Funktionalität zu verifizieren."
      },
      {
        "title": "Versionskontrolle",
        "description": "Committen Sie jedes Refactoring ins Versionskontrollsystem, um eine klare Änderungshistorie zu erhalten."
      },
      {
        "title": "Team-Kommunikation",
        "description": "Kommunizieren Sie im Voraus und holen Sie Team-Genehmigung ein, wenn Sie Code refactorieren, der mehrere Mitarbeiter betrifft."
      }
    ],
    "nextSteps": {
      "title": "Nächste Schritte",
      "description": "Lernen Sie weiterhin mehr Code-Qualitäts-bezogene Themen",
      "codeReview": "Code-Review",
      "advancedConfig": "Erweiterte Konfiguration"
    }
  },
  ja: {
    "title": "コードリファクタリングアシスタント",
    "subtitle": "AIを使用して既存のコードを分析・リファクタリングする",
    "description": "コード品質、可読性、保守性を向上させるためのインテリジェントなコードリファクタリングにGemini CLIを使用する方法を学びます。",
    "overview": {
      "title": "リファクタリング概要",
      "description": "コードリファクタリングは、外部動作を変更することなく既存のコード構造を改善するプロセスです。Gemini CLIは、コードスメルの特定、パフォーマンスの最適化、コード品質の向上を支援する強力なAI支援リファクタリング機能を提供します。"
    },
    "typesTitle": "リファクタリングタイプ",
    "typesDescription": "さまざまなタイプのコードリファクタリング技術について学ぶ",
    "types": [
      {
        "icon": "structure",
        "title": "構造的リファクタリング",
        "description": "コードの組織とアーキテクチャを改善",
        "techniques": [
          { "name": "メソッドの抽出" },
          { "name": "クラスの抽出" },
          { "name": "メソッドの移動" },
          { "name": "変数の名前変更" }
        ]
      },
      {
        "icon": "performance",
        "title": "パフォーマンス最適化",
        "description": "コード実行効率とリソース使用量を最適化",
        "techniques": [
          { "name": "アルゴリズム最適化" },
          { "name": "キャッシュ戦略" },
          { "name": "メモリ管理" },
          { "name": "並行性最適化" }
        ]
      },
      {
        "icon": "maintainability",
        "title": "保守性",
        "description": "コードの可読性と保守性を向上",
        "techniques": [
          { "name": "条件式の簡素化" },
          { "name": "重複コードの除去" },
          { "name": "命名の改善" },
          { "name": "コメントの追加" }
        ]
      },
      {
        "icon": "security",
        "title": "セキュリティ強化",
        "description": "潜在的なセキュリティ脆弱性を特定・修正",
        "techniques": [
          { "name": "入力検証" },
          { "name": "権限チェック" },
          { "name": "データ暗号化" },
          { "name": "エラーハンドリング" }
        ]
      }
    ],
    "workflow": {
      "title": "リファクタリングワークフロー",
      "description": "コード品質を確保するための体系的なリファクタリングプロセスに従う",
      "steps": [
        {
          "title": "コード分析",
          "description": "AIを使用して既存のコードを分析し、リファクタリングの機会を特定",
          "example": "# コード品質を分析\ngemini analyze --file src/main.js --type quality\n\n# コードスメルを検出\ngemini detect --smell --directory src/"
        },
        {
          "title": "リファクタリング計画の作成",
          "description": "分析結果に基づいて詳細なリファクタリング計画を策定",
          "example": "# リファクタリング提案を生成\ngemini refactor --plan --file src/main.js\n\n# リファクタリングリスクを評価\ngemini assess --risk --changes planned"
        },
        {
          "title": "リファクタリングの実行",
          "description": "コード機能を維持しながら段階的にリファクタリング操作を実行",
          "example": "# 自動リファクタリング\ngemini refactor --apply --file src/main.js\n\n# インタラクティブリファクタリング\ngemini refactor --interactive --directory src/"
        },
        {
          "title": "検証とテスト",
          "description": "リファクタリングされたコードが正しく機能し、良好なパフォーマンスを発揮することを確認",
          "example": "# テストを実行\ngemini test --after-refactor\n\n# パフォーマンス比較\ngemini benchmark --before-after"
        }
      ]
    },
    "examplesTitle": "リファクタリング例",
    "examplesDescription": "実際のコードリファクタリングケースを確認",
    "beforeLabel": "前",
    "afterLabel": "後",
    "examples": [
      {
        "title": "関数の抽出",
        "description": "複雑な関数をより小さく、焦点を絞った関数に分割",
        "before": "function processUserData(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18 && users[i].active) {\n      const formatted = {\n        id: users[i].id,\n        name: users[i].name.toUpperCase(),\n        email: users[i].email.toLowerCase()\n      };\n      result.push(formatted);\n    }\n  }\n  return result;\n}",
        "after": "function isEligibleUser(user) {\n  return user.age >= 18 && user.active;\n}\n\nfunction formatUser(user) {\n  return {\n    id: user.id,\n    name: user.name.toUpperCase(),\n    email: user.email.toLowerCase()\n  };\n}\n\nfunction processUserData(users) {\n  return users\n    .filter(isEligibleUser)\n    .map(formatUser);\n}"
      },
      {
        "title": "条件の簡素化",
        "description": "複雑な条件ロジックを簡素化",
        "before": "function getDiscount(user) {\n  if (user.type === 'premium') {\n    if (user.yearsActive >= 5) {\n      return 0.2;\n    } else if (user.yearsActive >= 2) {\n      return 0.15;\n    } else {\n      return 0.1;\n    }\n  } else if (user.type === 'regular') {\n    if (user.yearsActive >= 3) {\n      return 0.05;\n    } else {\n      return 0;\n    }\n  }\n  return 0;\n}",
        "after": "const DISCOUNT_RATES = {\n  premium: { 5: 0.2, 2: 0.15, 0: 0.1 },\n  regular: { 3: 0.05, 0: 0 }\n};\n\nfunction getDiscount(user) {\n  const rates = DISCOUNT_RATES[user.type];\n  if (!rates) return 0;\n  \n  const thresholds = Object.keys(rates)\n    .map(Number)\n    .sort((a, b) => b - a);\n  \n  const threshold = thresholds\n    .find(t => user.yearsActive >= t);\n  \n  return rates[threshold] || 0;\n}"
      }
    ],
    "bestPracticesTitle": "リファクタリングベストプラクティス",
    "bestPracticesDescription": "成功するリファクタリングのためのベストプラクティスに従う",
    "bestPractices": [
      {
        "title": "小さなステップ",
        "description": "リスクを減らし、ロールバックを容易にするため、大規模な一度のリファクタリングではなく、小さく頻繁なリファクタリングを行う。"
      },
      {
        "title": "テストファースト",
        "description": "リファクタリング前に適切なテストカバレッジを確保し、機能を検証するために直後にテストを実行する。"
      },
      {
        "title": "バージョン管理",
        "description": "明確な変更履歴を維持するため、各リファクタリングをバージョン管理システムにコミットする。"
      },
      {
        "title": "チームコミュニケーション",
        "description": "複数の協力者が関わるコードをリファクタリングする際は、事前にコミュニケーションを取り、チームの承認を得る。"
      }
    ],
    "nextSteps": {
      "title": "次のステップ",
      "description": "コード品質関連のより多くのトピックを学び続ける",
      "codeReview": "コードレビュー",
      "advancedConfig": "高度な設定"
    }
  }
};

// Function to apply Code Refactoring translations
function applyCodeRefactoringTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = codeRefactoringTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Code Refactoring translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesCodeRefactoring with professional translation
    data.guidesCodeRefactoring = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Code Refactoring translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const codeRefactoring = newData.guidesCodeRefactoring;
    console.log(`   - Title: "${codeRefactoring?.title || 'N/A'}"`);
    console.log(`   - Types: ${codeRefactoring?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${codeRefactoring?.workflow?.steps?.length || 0}`);
    console.log(`   - Examples: ${codeRefactoring?.examples?.length || 0}`);
    console.log(`   - Best practices: ${codeRefactoring?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Code Refactoring translations for ${langCode}:`, error.message);
  }
}

// Apply Code Refactoring translations
console.log('🚀 Applying professional Code Refactoring translations for German and Japanese...\n');

Object.keys(codeRefactoringTranslations).forEach(langCode => {
  const langNames = {
    de: 'German',
    ja: 'Japanese'
  };
  
  console.log(`Applying Code Refactoring translations for ${langNames[langCode]}...`);
  applyCodeRefactoringTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Code Refactoring translations applied!');
console.log('🎯 German and Japanese now have complete professional content.');
