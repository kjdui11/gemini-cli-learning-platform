const fs = require('fs');
const path = require('path');

// Complete Code Review translations for German and Japanese
const codeReviewTranslations = {
  de: {
    "title": "Code-Review-Assistent",
    "subtitle": "Verwenden Sie KI für Code-Qualitätsprüfung",
    "description": "Nutzen Sie die Kraft der KI für umfassende Code-Reviews zur Verbesserung von Code-Qualität, Sicherheit und Team-Kollaborationseffizienz.",
    "overview": {
      "title": "Review-Übersicht",
      "description": "Code-Review ist ein kritischer Teil des Software-Entwicklungsprozesses, der Code systematisch überprüft, um potenzielle Probleme zu identifizieren und die Code-Qualität zu verbessern. Gemini CLI bietet intelligente Code-Review-Fähigkeiten, um Ihnen zu helfen, Probleme schnell zu identifizieren und Verbesserungsvorschläge zu liefern."
    },
    "typesTitle": "Review-Typen",
    "typesDescription": "Lernen Sie verschiedene Arten von Code-Review-Schwerpunkten kennen",
    "types": [
      {
        "icon": "security",
        "title": "Sicherheits-Review",
        "description": "Überprüfung auf Sicherheitslücken und Risiken im Code",
        "checks": [
          {
            "name": "SQL-Injection-Erkennung"
          },
          {
            "name": "XSS-Schwachstellen-Scan"
          },
          {
            "name": "Berechtigungsverifizierung"
          },
          {
            "name": "Leckage sensibler Informationen"
          }
        ]
      },
      {
        "icon": "bugs",
        "title": "Bug-Erkennung",
        "description": "Identifikation potenzieller Bugs und logischer Fehler",
        "checks": [
          {
            "name": "Null-Pointer-Exception"
          },
          {
            "name": "Array-Grenzüberschreitung"
          },
          {
            "name": "Ressourcen-Lecks"
          },
          {
            "name": "Deadlock-Erkennung"
          }
        ]
      },
      {
        "icon": "performance",
        "title": "Performance-Analyse",
        "description": "Analyse der Code-Performance und Optimierungsmöglichkeiten",
        "checks": [
          {
            "name": "Algorithmus-Komplexität"
          },
          {
            "name": "Speicherverbrauch"
          },
          {
            "name": "Datenbank-Abfragen"
          },
          {
            "name": "Caching-Strategie"
          }
        ]
      },
      {
        "icon": "style",
        "title": "Code-Stil",
        "description": "Überprüfung von Code-Standards und Konsistenz",
        "checks": [
          {
            "name": "Namenskonventionen"
          },
          {
            "name": "Code-Formatierung"
          },
          {
            "name": "Kommentar-Qualität"
          },
          {
            "name": "Funktionslänge"
          }
        ]
      }
    ],
    "workflow": {
      "title": "Review-Workflow",
      "description": "Folgen Sie einem systematischen Code-Review-Prozess",
      "steps": [
        {
          "title": "Review Vorbereiten",
          "description": "Review-Regeln und Prüfbereich konfigurieren",
          "example": "# Review-Regeln konfigurieren\ngemini review config --rules security,performance\n\n# Prüfbereich festlegen\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "Review Ausführen",
          "description": "Automatisiertes Code-Review durchführen",
          "example": "# Umfassendes Review\ngemini review --comprehensive --output report.json\n\n# Inkrementelles Review\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "Ergebnisse Analysieren",
          "description": "Review-Bericht anzeigen und Probleme analysieren",
          "example": "# Review-Bericht anzeigen\ngemini review report --format html\n\n# Nach Schweregrad sortieren\ngemini review list --severity high"
        },
        {
          "title": "Probleme Beheben",
          "description": "Identifizierte Probleme basierend auf Vorschlägen beheben",
          "example": "# Automatische Behebung\ngemini review fix --auto --safe-only\n\n# Interaktive Behebung\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "Review-Checkpoints",
    "checkpointsDescription": "Wichtige Code-Review-Prüfpunkte",
    "checkpoints": [
      {
        "severity": "high",
        "title": "Sicherheitslücken",
        "description": "Code-Defekte, die zu Sicherheitsproblemen führen können",
        "items": [
          {
            "text": "Unvalidierte Benutzereingaben"
          },
          {
            "text": "Hartcodierte Passwörter oder Schlüssel"
          },
          {
            "text": "Unsichere Verschlüsselungsalgorithmen"
          },
          {
            "text": "Berechtigungs-Bypass-Schwachstellen"
          }
        ]
      },
      {
        "severity": "high",
        "title": "Kritische Fehler",
        "description": "Schwerwiegende Probleme, die Programmabstürze verursachen können",
        "items": [
          {
            "text": "Null-Pointer-Dereferenzierung"
          },
          {
            "text": "Array-Grenzüberschreitung"
          },
          {
            "text": "Speicher-Lecks"
          },
          {
            "text": "Deadlock-Risiken"
          }
        ]
      },
      {
        "severity": "medium",
        "title": "Performance-Probleme",
        "description": "Code-Probleme, die die Programmleistung beeinträchtigen",
        "items": [
          {
            "text": "Ineffiziente Algorithmus-Implementierung"
          },
          {
            "text": "Unnötige Datenbankabfragen"
          },
          {
            "text": "Fehlende Caching-Mechanismen"
          },
          {
            "text": "Unsachgemäße Ressourcennutzung"
          }
        ]
      },
      {
        "severity": "low",
        "title": "Code-Qualität",
        "description": "Probleme, die Code-Lesbarkeit und Wartbarkeit beeinträchtigen",
        "items": [
          {
            "text": "Funktionen zu lang oder komplex"
          },
          {
            "text": "Nicht-standardmäßige Variablenbenennung"
          },
          {
            "text": "Fehlende notwendige Kommentare"
          },
          {
            "text": "Code-Duplikation"
          }
        ]
      }
    ],
    "aiFeatures": {
      "title": "KI-Review-Features",
      "description": "Nutzen Sie künstliche Intelligenz zur Verbesserung der Code-Review-Effizienz und -Genauigkeit",
      "automated": {
        "title": "Automatisierte Erkennung",
        "features": [
          {
            "name": "Intelligentes Schwachstellen-Scanning"
          },
          {
            "name": "Performance-Engpass-Identifikation"
          },
          {
            "name": "Code-Smell-Erkennung"
          },
          {
            "name": "Best-Practice-Vorschläge"
          }
        ]
      },
      "intelligent": {
        "title": "Intelligente Analyse",
        "features": [
          {
            "name": "Kontext-Verständnis"
          },
          {
            "name": "Geschäftslogik-Analyse"
          },
          {
            "name": "Architektur-Muster-Erkennung"
          },
          {
            "name": "Personalisierte Empfehlungen"
          }
        ]
      }
    },
    "bestPracticesTitle": "Review-Best-Practices",
    "bestPracticesDescription": "Befolgen Sie diese Best Practices zur Verbesserung der Code-Review-Effektivität",
    "bestPractices": [
      {
        "title": "Regelmäßige Reviews",
        "description": "Etablieren Sie regelmäßige Code-Review-Mechanismen, warten Sie nicht bis zum Projektabschluss für Reviews."
      },
      {
        "title": "Fokus auf Schlüsselbereiche",
        "description": "Priorisieren Sie Sicherheit, Performance und Wartbarkeit, vermeiden Sie Überfokussierung auf Details."
      },
      {
        "title": "Team-Kollaboration",
        "description": "Ermutigen Sie Teammitglieder zur Teilnahme am Review-Prozess, teilen Sie Wissen und Erfahrung."
      },
      {
        "title": "Kontinuierliche Verbesserung",
        "description": "Verbessern Sie kontinuierlich Entwicklungsprozesse und Coding-Standards basierend auf Review-Ergebnissen."
      }
    ],
    "nextSteps": {
      "title": "Nächste Schritte",
      "description": "Lernen Sie weiterhin mehr Entwicklungstools und Best Practices",
      "integration": "Tool-Integration",
      "advancedConfig": "Erweiterte Konfiguration"
    }
  },
  ja: {
    "title": "コードレビューアシスタント",
    "subtitle": "コード品質検査にAIを使用する",
    "description": "コード品質、セキュリティ、チーム協力効率を向上させるための包括的なコードレビューにAIの力を活用します。",
    "overview": {
      "title": "レビュー概要",
      "description": "コードレビューはソフトウェア開発プロセスの重要な部分であり、潜在的な問題を特定し、コード品質を向上させるためにコードを体系的にチェックします。Gemini CLIは、問題を迅速に特定し、改善提案を提供するのに役立つインテリジェントなコードレビュー機能を提供します。"
    },
    "typesTitle": "レビュータイプ",
    "typesDescription": "さまざまなタイプのコードレビューフォーカスについて学ぶ",
    "types": [
      {
        "icon": "security",
        "title": "セキュリティレビュー",
        "description": "コード内のセキュリティ脆弱性とリスクをチェック",
        "checks": [
          {
            "name": "SQLインジェクション検出"
          },
          {
            "name": "XSS脆弱性スキャン"
          },
          {
            "name": "権限検証チェック"
          },
          {
            "name": "機密情報漏洩"
          }
        ]
      },
      {
        "icon": "bugs",
        "title": "バグ検出",
        "description": "潜在的なバグと論理エラーを特定",
        "checks": [
          {
            "name": "ヌルポインタ例外"
          },
          {
            "name": "配列境界外アクセス"
          },
          {
            "name": "リソースリーク"
          },
          {
            "name": "デッドロック検出"
          }
        ]
      },
      {
        "icon": "performance",
        "title": "パフォーマンス分析",
        "description": "コードパフォーマンスと最適化機会を分析",
        "checks": [
          {
            "name": "アルゴリズム複雑度"
          },
          {
            "name": "メモリ使用量"
          },
          {
            "name": "データベースクエリ"
          },
          {
            "name": "キャッシュ戦略"
          }
        ]
      },
      {
        "icon": "style",
        "title": "コードスタイル",
        "description": "コード標準と一貫性をチェック",
        "checks": [
          {
            "name": "命名規則"
          },
          {
            "name": "コードフォーマット"
          },
          {
            "name": "コメント品質"
          },
          {
            "name": "関数の長さ"
          }
        ]
      }
    ],
    "workflow": {
      "title": "レビューワークフロー",
      "description": "体系的なコードレビュープロセスに従う",
      "steps": [
        {
          "title": "レビュー準備",
          "description": "レビュールールとチェック範囲を設定",
          "example": "# レビュールールを設定\ngemini review config --rules security,performance\n\n# チェック範囲を設定\ngemini review setup --files src/ --exclude tests/"
        },
        {
          "title": "レビュー実行",
          "description": "自動化されたコードレビューを実行",
          "example": "# 包括的レビュー\ngemini review --comprehensive --output report.json\n\n# 増分レビュー\ngemini review --diff HEAD~1..HEAD"
        },
        {
          "title": "結果分析",
          "description": "レビューレポートを表示し、問題を分析",
          "example": "# レビューレポートを表示\ngemini review report --format html\n\n# 重要度でソート\ngemini review list --severity high"
        },
        {
          "title": "問題修正",
          "description": "提案に基づいて特定された問題を修正",
          "example": "# 自動修正\ngemini review fix --auto --safe-only\n\n# インタラクティブ修正\ngemini review fix --interactive"
        }
      ]
    },
    "checkpointsTitle": "レビューチェックポイント",
    "checkpointsDescription": "重要なコードレビューチェック項目",
    "checkpoints": [
      {
        "severity": "high",
        "title": "セキュリティ脆弱性",
        "description": "セキュリティ問題につながる可能性のあるコード欠陥",
        "items": [
          {
            "text": "検証されていないユーザー入力"
          },
          {
            "text": "ハードコードされたパスワードやキー"
          },
          {
            "text": "安全でない暗号化アルゴリズム"
          },
          {
            "text": "権限バイパス脆弱性"
          }
        ]
      },
      {
        "severity": "high",
        "title": "重大なエラー",
        "description": "プログラムクラッシュを引き起こす可能性のある深刻な問題",
        "items": [
          {
            "text": "ヌルポインタ参照"
          },
          {
            "text": "配列境界外アクセス"
          },
          {
            "text": "メモリリーク"
          },
          {
            "text": "デッドロックリスク"
          }
        ]
      },
      {
        "severity": "medium",
        "title": "パフォーマンス問題",
        "description": "プログラムパフォーマンスに影響するコード問題",
        "items": [
          {
            "text": "非効率なアルゴリズム実装"
          },
          {
            "text": "不要なデータベースクエリ"
          },
          {
            "text": "キャッシュメカニズムの欠如"
          },
          {
            "text": "不適切なリソース使用"
          }
        ]
      },
      {
        "severity": "low",
        "title": "コード品質",
        "description": "コードの可読性と保守性に影響する問題",
        "items": [
          {
            "text": "関数が長すぎるか複雑すぎる"
          },
          {
            "text": "非標準の変数命名"
          },
          {
            "text": "必要なコメントの欠如"
          },
          {
            "text": "コードの重複"
          }
        ]
      }
    ],
    "aiFeatures": {
      "title": "AIレビュー機能",
      "description": "人工知能を活用してコードレビューの効率性と精度を向上させる",
      "automated": {
        "title": "自動検出",
        "features": [
          {
            "name": "インテリジェント脆弱性スキャン"
          },
          {
            "name": "パフォーマンスボトルネック特定"
          },
          {
            "name": "コードスメル検出"
          },
          {
            "name": "ベストプラクティス提案"
          }
        ]
      },
      "intelligent": {
        "title": "インテリジェント分析",
        "features": [
          {
            "name": "コンテキスト理解"
          },
          {
            "name": "ビジネスロジック分析"
          },
          {
            "name": "アーキテクチャパターン認識"
          },
          {
            "name": "パーソナライズされた推奨事項"
          }
        ]
      }
    },
    "bestPracticesTitle": "レビューベストプラクティス",
    "bestPracticesDescription": "コードレビューの効果を向上させるためのベストプラクティスに従う",
    "bestPractices": [
      {
        "title": "定期的なレビュー",
        "description": "定期的なコードレビューメカニズムを確立し、プロジェクト完了まで待ってレビューを行わないでください。"
      },
      {
        "title": "重要な領域に焦点を当てる",
        "description": "セキュリティ、パフォーマンス、保守性を優先し、詳細に過度に焦点を当てることを避けてください。"
      },
      {
        "title": "チーム協力",
        "description": "チームメンバーがレビュープロセスに参加することを奨励し、知識と経験を共有してください。"
      },
      {
        "title": "継続的改善",
        "description": "レビュー結果に基づいて開発プロセスとコーディング標準を継続的に改善してください。"
      }
    ],
    "nextSteps": {
      "title": "次のステップ",
      "description": "より多くの開発ツールとベストプラクティスを学び続ける",
      "integration": "ツール統合",
      "advancedConfig": "高度な設定"
    }
  }
};

// Function to apply Code Review translations
function applyCodeReviewTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = codeReviewTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Code Review translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesCodeReview with professional translation
    data.guidesCodeReview = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Code Review translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const codeReview = newData.guidesCodeReview;
    console.log(`   - Title: "${codeReview?.title || 'N/A'}"`);
    console.log(`   - Types: ${codeReview?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${codeReview?.workflow?.steps?.length || 0}`);
    console.log(`   - Checkpoints: ${codeReview?.checkpoints?.length || 0}`);
    console.log(`   - Best practices: ${codeReview?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Code Review translations for ${langCode}:`, error.message);
  }
}

// Apply Code Review translations
console.log('🚀 Applying professional Code Review translations for German and Japanese...\n');

Object.keys(codeReviewTranslations).forEach(langCode => {
  const langNames = {
    de: 'German',
    ja: 'Japanese'
  };
  
  console.log(`Applying Code Review translations for ${langNames[langCode]}...`);
  applyCodeReviewTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Code Review translations applied!');
console.log('🎯 German and Japanese now have complete professional content.');
