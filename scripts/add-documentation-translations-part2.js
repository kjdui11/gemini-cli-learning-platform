const fs = require('fs');
const path = require('path');

// Complete Documentation translations for German and Japanese
const documentationTranslations = {
  de: {
    "hero": {
      "title": "Dokumentations-Generator",
      "subtitle": "Verwenden Sie KI zur intelligenten Generierung hochwertiger Projektdokumentation",
      "intermediate": "Fortgeschritten",
      "readingTime": "25 Min Lesezeit"
    },
    "overview": {
      "title": "Dokumentations-Übersicht",
      "description": "Lernen Sie, wie Sie Gemini CLI verwenden, um automatisch Projektdokumentation zu generieren und zu pflegen, einschließlich API-Docs, Benutzerhandbücher, technische Spezifikationen und mehr."
    },
    "typesTitle": "Dokumentationstypen",
    "typesDescription": "Lernen Sie verschiedene Arten von Dokumentationsgenerierungsmethoden kennen",
    "promptExample": "Prompt-Beispiel",
    "features": "Hauptfunktionen",
    "types": [
      {
        "id": "api-docs",
        "title": "API-Dokumentation",
        "description": "Automatische Generierung von API-Dokumentation aus Code",
        "color": "from-blue-500 to-indigo-600",
        "example": {
          "prompt": "@src/api/ Generiere vollständige API-Dokumentation für alle API-Dateien in diesem Verzeichnis, einschließlich Endpoint-Beschreibungen, Parameter-Beschreibungen, Antwortformaten und Verwendungsbeispielen",
          "features": [
            "Automatisches Extrahieren von API-Endpoints",
            "Generierung von Parameter-Beschreibungstabellen",
            "Einbeziehung von Request/Response-Beispielen",
            "Unterstützung mehrerer Authentifizierungsmethoden",
            "Generierung interaktiver Dokumentation"
          ]
        }
      },
      {
        "id": "readme",
        "title": "README-Dokumentation",
        "description": "Generierung von Projektbeschreibungsdokumentation",
        "color": "from-green-500 to-emerald-600",
        "example": {
          "prompt": "@package.json @src/ Analysiere die Struktur und Funktionalität dieses Projekts, generiere ein vollständiges README.md-Dokument einschließlich Projekteinführung, Installationsanweisungen, Verwendungsmethoden und Beitragsleitlinien",
          "features": [
            "Projektübersicht und Features",
            "Installations- und Konfigurationsanweisungen",
            "Verwendungsbeispiele und Tutorials",
            "Beitragsleitlinien",
            "Lizenzinformationen"
          ]
        }
      },
      {
        "id": "user-manual",
        "title": "Benutzerhandbuch",
        "description": "Detaillierte Benutzerführer erstellen",
        "color": "from-purple-500 to-pink-600",
        "example": {
          "prompt": "@src/components/ Erstelle ein Benutzerhandbuch basierend auf diesen Komponenten, einschließlich Feature-Beschreibungen, Verwendungsschritte, FAQ und Fehlerbehebung",
          "features": [
            "Detaillierte Feature-Beschreibungen",
            "Schritt-für-Schritt-Bedienungsanleitungen",
            "Screenshots und Beispiele",
            "Häufig gestellte Fragen",
            "Fehlerbehebungsanleitungen"
          ]
        }
      },
      {
        "id": "technical-spec",
        "title": "Technische Spezifikationen",
        "description": "Technische Architektur- und Design-Dokumente generieren",
        "color": "from-orange-500 to-red-600",
        "example": {
          "prompt": "@src/ @docs/architecture.md Analysiere die Projektarchitektur, generiere technische Spezifikationsdokumente einschließlich Systemdesign, Datenfluss, Interface-Definitionen und Deployment-Anforderungen",
          "features": [
            "System-Architektur-Diagramme",
            "Datenfluss-Diagramme",
            "Interface-Spezifikationen",
            "Deployment-Anforderungen",
            "Performance-Metriken"
          ]
        }
      }
    ],
    "workflow": {
      "title": "Dokumentationsgenerierungs-Workflow",
      "description": "Befolgen Sie diese Schritte zur Generierung hochwertiger Dokumentation",
      "steps": [
        {
          "step": 1,
          "title": "Projektstruktur Analysieren",
          "description": "Lassen Sie die KI die Gesamtstruktur und Funktionalität des Projekts verstehen",
          "commands": [
            "@. Analysiere die Gesamtstruktur dieses Projekts",
            "@package.json Erkläre die Abhängigkeiten und Konfiguration des Projekts",
            "@README.md Verstehe die Grundinformationen des Projekts"
          ]
        },
        {
          "step": 2,
          "title": "Dokumentationstyp Wählen",
          "description": "Wählen Sie den geeigneten Dokumentationstyp und die Vorlage basierend auf den Anforderungen",
          "commands": [
            "Ich muss API-Dokumentation generieren",
            "Bitte erstelle ein Benutzerhandbuch",
            "Generiere technische Architekturdokumentation"
          ]
        },
        {
          "step": 3,
          "title": "Initiale Dokumentation Generieren",
          "description": "Verwenden Sie KI zur Generierung der ersten Version der Dokumentation",
          "commands": [
            "@src/api/ Generiere API-Dokumentation",
            "@src/components/ Erstelle Komponentendokumentation",
            "@docs/ Aktualisiere bestehende Dokumentation"
          ]
        },
        {
          "step": 4,
          "title": "Überprüfen und Optimieren",
          "description": "Überprüfen Sie die generierte Dokumentation und nehmen Sie notwendige Anpassungen vor",
          "commands": [
            "Überprüfe die Vollständigkeit und Genauigkeit der Dokumentation",
            "Optimiere die Struktur und das Format der Dokumentation",
            "Füge fehlende Beispiele und Erklärungen hinzu"
          ]
        }
      ]
    },
    "practicalExamples": {
      "title": "Praktische Beispiele",
      "description": "Sehen Sie spezifische Dokumentationsgenerierungsfälle"
    },
    "examples": [
      {
        "title": "React-Komponenten-Dokumentation",
        "description": "Detaillierte Dokumentation für React-Komponenten generieren",
        "steps": [
          {
            "command": "@src/components/Button.tsx Generiere Dokumentation für diese Button-Komponente",
            "description": "Analysiere Komponenten-Props, Verwendung und Beispiele"
          },
          {
            "command": "Füge Verwendungsbeispiele und Best Practices hinzu",
            "description": "Ergänze echte Anwendungsfälle und Code-Beispiele"
          },
          {
            "command": "Generiere Storybook-Story-Dateien",
            "description": "Erstelle interaktive Komponenten-Demonstrationen"
          }
        ]
      },
      {
        "title": "REST-API-Dokumentation",
        "description": "OpenAPI-Spezifikation für REST-API generieren",
        "steps": [
          {
            "command": "@src/routes/ Analysiere alle API-Routen",
            "description": "Extrahiere Endpoints, Parameter und Antwortformate"
          },
          {
            "command": "Generiere OpenAPI 3.0 Spezifikationsdatei",
            "description": "Erstelle Standard-API-Dokumentationsformat"
          },
          {
            "command": "Füge Authentifizierungs- und Fehlerbehandlungsbeschreibungen hinzu",
            "description": "Ergänze Sicherheits- und Fehlerbehandlungsinformationen"
          }
        ]
      }
    ],
    "bestPracticesTitle": "Best Practices",
    "bestPracticesDescription": "Wichtige Überlegungen für die Dokumentationsgenerierung",
    "bestPractices": [
      {
        "type": "success",
        "title": "Dokumentation Synchron Halten",
        "content": "Aktualisieren Sie die Dokumentation regelmäßig, um sicherzustellen, dass sie mit dem Code synchron bleibt. Empfehlen Sie, die Dokumentation bei Code-Änderungen zu aktualisieren."
      },
      {
        "type": "info",
        "title": "Vorlagen und Standards Verwenden",
        "content": "Verwenden Sie konsistente Dokumentationsvorlagen und Formatstandards zur Verbesserung der Lesbarkeit und Professionalität."
      },
      {
        "type": "warning",
        "title": "Generierten Inhalt Validieren",
        "content": "KI-generierte Dokumentation benötigt menschliche Überprüfung, um Genauigkeit und Vollständigkeit technischer Details sicherzustellen."
      },
      {
        "type": "success",
        "title": "Praktische Beispiele Hinzufügen",
        "content": "Fügen Sie echte Code-Beispiele und Anwendungsfälle in die Dokumentation ein, um Benutzern beim besseren Verständnis zu helfen."
      }
    ],
    "nextSteps": {
      "title": "Nächste Schritte",
      "description": "Nachdem Sie die Dokumentationsgenerierungstechniken gemeistert haben, können Sie weiterhin andere praktische Fähigkeiten erlernen:",
      "codeRefactoring": "Code-Refactoring",
      "codeReview": "Code-Review",
      "backToGuides": "Zurück zu den Leitfäden"
    }
  },
  ja: {
    "hero": {
      "title": "ドキュメント生成器",
      "subtitle": "AIを使用して高品質なプロジェクトドキュメントを知的に生成する",
      "intermediate": "中級",
      "readingTime": "25分読了"
    },
    "overview": {
      "title": "ドキュメント概要",
      "description": "API ドキュメント、ユーザーマニュアル、技術仕様書などを含むプロジェクトドキュメントを自動的に生成・維持するためのGemini CLIの使用方法を学びます。"
    },
    "typesTitle": "ドキュメントタイプ",
    "typesDescription": "さまざまなタイプのドキュメント生成方法について学ぶ",
    "promptExample": "プロンプト例",
    "features": "主要機能",
    "types": [
      {
        "id": "api-docs",
        "title": "APIドキュメント",
        "description": "コードからAPIドキュメントを自動生成",
        "color": "from-blue-500 to-indigo-600",
        "example": {
          "prompt": "@src/api/ このディレクトリ内のすべてのAPIファイルの完全なAPIドキュメントを生成し、エンドポイント説明、パラメータ説明、レスポンス形式、使用例を含める",
          "features": [
            "APIエンドポイントの自動抽出",
            "パラメータ説明テーブルの生成",
            "リクエスト/レスポンス例の包含",
            "複数の認証方法のサポート",
            "インタラクティブドキュメントの生成"
          ]
        }
      },
      {
        "id": "readme",
        "title": "READMEドキュメント",
        "description": "プロジェクト説明ドキュメントの生成",
        "color": "from-green-500 to-emerald-600",
        "example": {
          "prompt": "@package.json @src/ このプロジェクトの構造と機能を分析し、プロジェクト紹介、インストール手順、使用方法、貢献ガイドラインを含む完全なREADME.mdドキュメントを生成",
          "features": [
            "プロジェクト概要と機能",
            "インストールと設定手順",
            "使用例とチュートリアル",
            "貢献ガイドライン",
            "ライセンス情報"
          ]
        }
      },
      {
        "id": "user-manual",
        "title": "ユーザーマニュアル",
        "description": "詳細なユーザーガイドの作成",
        "color": "from-purple-500 to-pink-600",
        "example": {
          "prompt": "@src/components/ これらのコンポーネントに基づいてユーザーマニュアルを作成し、機能説明、使用手順、FAQ、トラブルシューティングを含める",
          "features": [
            "詳細な機能説明",
            "ステップバイステップの操作ガイド",
            "スクリーンショットと例",
            "よくある質問",
            "トラブルシューティングガイド"
          ]
        }
      },
      {
        "id": "technical-spec",
        "title": "技術仕様書",
        "description": "技術アーキテクチャと設計ドキュメントの生成",
        "color": "from-orange-500 to-red-600",
        "example": {
          "prompt": "@src/ @docs/architecture.md プロジェクトアーキテクチャを分析し、システム設計、データフロー、インターフェース定義、デプロイメント要件を含む技術仕様書を生成",
          "features": [
            "システムアーキテクチャ図",
            "データフロー図",
            "インターフェース仕様",
            "デプロイメント要件",
            "パフォーマンスメトリクス"
          ]
        }
      }
    ],
    "workflow": {
      "title": "ドキュメント生成ワークフロー",
      "description": "高品質なドキュメントを生成するためのステップに従ってください",
      "steps": [
        {
          "step": 1,
          "title": "プロジェクト構造の分析",
          "description": "AIにプロジェクトの全体構造と機能を理解させる",
          "commands": [
            "@. このプロジェクトの全体構造を分析",
            "@package.json プロジェクトの依存関係と設定を説明",
            "@README.md プロジェクトの基本情報を理解"
          ]
        },
        {
          "step": 2,
          "title": "ドキュメントタイプの選択",
          "description": "要件に基づいて適切なドキュメントタイプとテンプレートを選択",
          "commands": [
            "APIドキュメントを生成する必要があります",
            "ユーザーマニュアルを作成してください",
            "技術アーキテクチャドキュメントを生成"
          ]
        },
        {
          "step": 3,
          "title": "初期ドキュメントの生成",
          "description": "AIを使用してドキュメントの初期バージョンを生成",
          "commands": [
            "@src/api/ APIドキュメントを生成",
            "@src/components/ コンポーネントドキュメントを作成",
            "@docs/ 既存のドキュメントを更新"
          ]
        },
        {
          "step": 4,
          "title": "レビューと最適化",
          "description": "生成されたドキュメントをチェックし、必要な調整を行う",
          "commands": [
            "ドキュメントの完全性と正確性をチェック",
            "ドキュメントの構造と形式を最適化",
            "不足している例と説明を追加"
          ]
        }
      ]
    },
    "practicalExamples": {
      "title": "実践例",
      "description": "具体的なドキュメント生成ケースを確認"
    },
    "examples": [
      {
        "title": "Reactコンポーネントドキュメント",
        "description": "Reactコンポーネントの詳細ドキュメントを生成",
        "steps": [
          {
            "command": "@src/components/Button.tsx このボタンコンポーネントのドキュメントを生成",
            "description": "コンポーネントのprops、使用法、例を分析"
          },
          {
            "command": "使用例とベストプラクティスを追加",
            "description": "実際の使用ケースとコード例を補完"
          },
          {
            "command": "Storybookストーリーファイルを生成",
            "description": "インタラクティブなコンポーネントデモを作成"
          }
        ]
      },
      {
        "title": "REST APIドキュメント",
        "description": "REST APIのOpenAPI仕様を生成",
        "steps": [
          {
            "command": "@src/routes/ すべてのAPIルートを分析",
            "description": "エンドポイント、パラメータ、レスポンス形式を抽出"
          },
          {
            "command": "OpenAPI 3.0仕様ファイルを生成",
            "description": "標準APIドキュメント形式を作成"
          },
          {
            "command": "認証とエラーハンドリングの説明を追加",
            "description": "セキュリティとエラーハンドリング情報を補完"
          }
        ]
      }
    ],
    "bestPracticesTitle": "ベストプラクティス",
    "bestPracticesDescription": "ドキュメント生成の重要な考慮事項",
    "bestPractices": [
      {
        "type": "success",
        "title": "ドキュメントの同期を保つ",
        "content": "ドキュメントがコードと同期を保つよう定期的に更新し、コード変更時にドキュメントを更新することを推奨します。"
      },
      {
        "type": "info",
        "title": "テンプレートと標準の使用",
        "content": "読みやすさと専門性を向上させるため、一貫したドキュメントテンプレートと形式標準を採用してください。"
      },
      {
        "type": "warning",
        "title": "生成コンテンツの検証",
        "content": "AI生成ドキュメントは技術詳細の正確性と完全性を確保するため、人間によるレビューが必要です。"
      },
      {
        "type": "success",
        "title": "実践例の追加",
        "content": "ユーザーの理解を助けるため、ドキュメントに実際のコード例と使用ケースを含めてください。"
      }
    ],
    "nextSteps": {
      "title": "次のステップ",
      "description": "ドキュメント生成技術をマスターしたので、他の実践的なスキルを学び続けることができます：",
      "codeRefactoring": "コードリファクタリング",
      "codeReview": "コードレビュー",
      "backToGuides": "ガイドに戻る"
    }
  }
};

// Function to apply Documentation translations
function applyDocumentationTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = documentationTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Documentation translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesDocumentation with professional translation
    data.guidesDocumentation = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Documentation translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const documentation = newData.guidesDocumentation;
    console.log(`   - Hero title: "${documentation?.hero?.title || 'N/A'}"`);
    console.log(`   - Types: ${documentation?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${documentation?.workflow?.steps?.length || 0}`);
    console.log(`   - Examples: ${documentation?.examples?.length || 0}`);
    console.log(`   - Best practices: ${documentation?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Documentation translations for ${langCode}:`, error.message);
  }
}

// Apply Documentation translations
console.log('🚀 Applying professional Documentation translations for German and Japanese...\n');

Object.keys(documentationTranslations).forEach(langCode => {
  const langNames = {
    de: 'German',
    ja: 'Japanese'
  };
  
  console.log(`Applying Documentation translations for ${langNames[langCode]}...`);
  applyDocumentationTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Documentation translations applied!');
console.log('🎯 German and Japanese now have complete professional content.');
