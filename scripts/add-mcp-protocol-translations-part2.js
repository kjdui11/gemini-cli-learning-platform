const fs = require('fs');
const path = require('path');

// Complete MCP Protocol translations for German and Japanese
const mcpProtocolTranslations = {
  de: {
    "hero": {
      "title": "MCP-Protokoll Verwendung",
      "subtitle": "Meistern Sie das Model Context Protocol zur Erweiterung der Gemini CLI-Funktionalität",
      "advanced": "Erweiterte Features",
      "extensible": "Erweiterbar"
    },
    "overview": {
      "title": "Protokoll-Übersicht",
      "description": "Das Model Context Protocol (MCP) ist ein offener Standard, der es KI-Anwendungen ermöglicht, sich sicher und kontrolliert mit externen Datenquellen und Tools zu integrieren."
    },
    "concepts": {
      "overview": {
        "title": "MCP-Protokoll Übersicht",
        "description": "Grundlegende Konzepte und Architektur des Model Context Protocol",
        "definition": "MCP ist ein offener Standard, der es KI-Anwendungen ermöglicht, sich sicher und kontrolliert mit externen Datenquellen und Tools zu integrieren.",
        "components": {
          "host": {
            "name": "MCP-Host",
            "description": "KI-Anwendung (wie Gemini CLI)",
            "role": "Initiiert Verbindungen und nutzt von MCP-Servern bereitgestellte Funktionalitäten"
          },
          "server": {
            "name": "MCP-Server",
            "description": "Unabhängiger Prozess, der spezifische Funktionalitäten bereitstellt",
            "role": "Stellt Tools, Ressourcen und Prompts für die Host-Nutzung bereit"
          },
          "transport": {
            "name": "Transport-Schicht",
            "description": "Kommunikationsmechanismus zwischen Host und Server",
            "role": "Unterstützt Protokolle wie stdio, SSE und WebSocket"
          }
        }
      },
      "capabilities": {
        "title": "Kernfähigkeiten",
        "description": "Drei Haupttypen von Funktionalitäten, die MCP-Server bereitstellen können",
        "definition": "MCP-Server bieten KI-Anwendungen Erweiterungsfähigkeiten durch drei Hauptfunktionalitätstypen.",
        "types": {
          "tools": {
            "name": "Tools",
            "description": "Ausführbare Funktionen, die der KI ermöglichen, Operationen durchzuführen",
            "examples": "Dateioperationen, API-Aufrufe, Datenbankabfragen, etc."
          },
          "resources": {
            "name": "Ressourcen",
            "description": "Lesbare Datenquellen, die der KI kontextuelle Informationen bereitstellen",
            "examples": "Dateiinhalte, Datenbankeinträge, API-Antworten, etc."
          },
          "prompts": {
            "name": "Prompts",
            "description": "Vordefinierte Prompt-Vorlagen, die strukturierte Interaktionsmethoden bereitstellen",
            "examples": "Code-Review-Vorlagen, Dokumentationsgenerierungs-Vorlagen, etc."
          }
        }
      },
      "configuration": {
        "title": "Konfiguration Setup",
        "description": "Wie MCP-Server konfiguriert und verwendet werden",
        "definition": "Die Konfiguration von MCP-Servern erfordert drei Schritte: Installation, Konfiguration und Verifikation.",
        "steps": {
          "install": {
            "step": "1. MCP-Server Installieren",
            "description": "Verwenden Sie npm oder andere Paketmanager, um erforderliche MCP-Server zu installieren",
            "command": "npm install -g @modelcontextprotocol/server-filesystem"
          },
          "configure": {
            "step": "2. Gemini CLI Konfigurieren",
            "description": "MCP-Server-Konfiguration zur Gemini CLI-Konfigurationsdatei hinzufügen",
            "command": "gemini config mcp add filesystem"
          },
          "verify": {
            "step": "3. Verbindung Verifizieren",
            "description": "Testen, ob der MCP-Server ordnungsgemäß funktioniert",
            "command": "gemini mcp list"
          }
        }
      }
    },
    "examples": {
      "title": "Praktische Beispiele",
      "filesystem": {
        "title": "Filesystem-Server",
        "description": "MCP-Filesystem-Server für Dateioperationen verwenden",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-filesystem",
          "installDesc": "Filesystem MCP-Server installieren",
          "configure": "gemini config mcp add filesystem --path /your/project/path",
          "configureDesc": "Filesystem-Server-Pfad konfigurieren",
          "use": "Bitte helfen Sie mir, alle TypeScript-Dateien im Projekt zu analysieren",
          "useDesc": "KI kann nun auf Dateien im angegebenen Pfad zugreifen und sie analysieren"
        }
      },
      "database": {
        "title": "Datenbank-Server",
        "description": "Mit Datenbank für Abfragen und Analysen verbinden",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-sqlite",
          "installDesc": "SQLite MCP-Server installieren",
          "configure": "gemini config mcp add sqlite --db ./data.db",
          "configureDesc": "Datenbankverbindung konfigurieren",
          "query": "Die 10 zuletzt registrierten Benutzer aus der Benutzertabelle abfragen",
          "queryDesc": "KI kann SQL-Abfragen ausführen und Ergebnisse analysieren"
        }
      }
    },
    "bestPractices": {
      "title": "Best Practices",
      "security": {
        "title": "Sicherheitsüberlegungen",
        "content": "Nur mit vertrauenswürdigen MCP-Servern verbinden, Server-Berechtigungen regelmäßig überprüfen, Exposition sensibler Daten vermeiden."
      },
      "performance": {
        "title": "Performance-Optimierung",
        "content": "Server-Anzahl vernünftig konfigurieren, Ressourcenverbrauch überwachen, Datenübertragungseffizienz optimieren."
      },
      "debugging": {
        "title": "Debugging-Tipps",
        "content": "Ausführlichen Logging-Modus verwenden, Server-Status überprüfen, Konfigurationsdatei-Format verifizieren."
      }
    },
    "nextSteps": {
      "title": "Nächste Schritte",
      "description": "Nachdem Sie das MCP-Protokoll verstehen, können Sie weiterhin erweiterte Konfigurations- und Integrationsmethoden lernen:",
      "advancedConfig": "Erweiterte Konfiguration",
      "integration": "Integrationsleitfaden",
      "backToGuides": "Zurück zu den Leitfäden"
    }
  },
  ja: {
    "hero": {
      "title": "MCPプロトコル使用法",
      "subtitle": "Gemini CLIの機能を拡張するためにModel Context Protocolをマスターする",
      "advanced": "高度な機能",
      "extensible": "拡張可能"
    },
    "overview": {
      "title": "プロトコル概要",
      "description": "Model Context Protocol (MCP)は、AIアプリケーションが外部データソースやツールと安全かつ制御された方法で統合できるオープンスタンダードです。"
    },
    "concepts": {
      "overview": {
        "title": "MCPプロトコル概要",
        "description": "Model Context Protocolの基本概念とアーキテクチャ",
        "definition": "MCPは、AIアプリケーションが外部データソースやツールと安全かつ制御された方法で統合できるオープンスタンダードです。",
        "components": {
          "host": {
            "name": "MCPホスト",
            "description": "AIアプリケーション（Gemini CLIなど）",
            "role": "接続を開始し、MCPサーバーが提供する機能を使用します"
          },
          "server": {
            "name": "MCPサーバー",
            "description": "特定の機能を提供する独立したプロセス",
            "role": "ホストが使用するためのツール、リソース、プロンプトを公開します"
          },
          "transport": {
            "name": "トランスポート層",
            "description": "ホストとサーバー間の通信メカニズム",
            "role": "stdio、SSE、WebSocketなどのプロトコルをサポートします"
          }
        }
      },
      "capabilities": {
        "title": "コア機能",
        "description": "MCPサーバーが提供できる3つの主要な機能タイプ",
        "definition": "MCPサーバーは、3つの主要な機能タイプを通じてAIアプリケーションに拡張機能を提供します。",
        "types": {
          "tools": {
            "name": "ツール",
            "description": "AIが操作を実行できる実行可能な関数",
            "examples": "ファイル操作、API呼び出し、データベースクエリなど"
          },
          "resources": {
            "name": "リソース",
            "description": "AIにコンテキスト情報を提供する読み取り可能なデータソース",
            "examples": "ファイル内容、データベースレコード、APIレスポンスなど"
          },
          "prompts": {
            "name": "プロンプト",
            "description": "構造化された相互作用方法を提供する事前定義されたプロンプトテンプレート",
            "examples": "コードレビューテンプレート、ドキュメント生成テンプレートなど"
          }
        }
      },
      "configuration": {
        "title": "設定セットアップ",
        "description": "MCPサーバーの設定と使用方法",
        "definition": "MCPサーバーの設定には3つのステップが必要です：インストール、設定、検証。",
        "steps": {
          "install": {
            "step": "1. MCPサーバーをインストール",
            "description": "npmや他のパッケージマネージャーを使用して必要なMCPサーバーをインストールします",
            "command": "npm install -g @modelcontextprotocol/server-filesystem"
          },
          "configure": {
            "step": "2. Gemini CLIを設定",
            "description": "Gemini CLI設定ファイルにMCPサーバー設定を追加します",
            "command": "gemini config mcp add filesystem"
          },
          "verify": {
            "step": "3. 接続を検証",
            "description": "MCPサーバーが正常に動作しているかテストします",
            "command": "gemini mcp list"
          }
        }
      }
    },
    "examples": {
      "title": "実践的な例",
      "filesystem": {
        "title": "ファイルシステムサーバー",
        "description": "ファイル操作にMCPファイルシステムサーバーを使用",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-filesystem",
          "installDesc": "ファイルシステムMCPサーバーをインストール",
          "configure": "gemini config mcp add filesystem --path /your/project/path",
          "configureDesc": "ファイルシステムサーバーパスを設定",
          "use": "プロジェクト内のすべてのTypeScriptファイルの分析を手伝ってください",
          "useDesc": "AIは指定されたパス内のファイルにアクセスして分析できるようになります"
        }
      },
      "database": {
        "title": "データベースサーバー",
        "description": "クエリと分析のためにデータベースに接続",
        "steps": {
          "install": "npm install -g @modelcontextprotocol/server-sqlite",
          "installDesc": "SQLite MCPサーバーをインストール",
          "configure": "gemini config mcp add sqlite --db ./data.db",
          "configureDesc": "データベース接続を設定",
          "query": "ユーザーテーブルから最近登録された10人のユーザーをクエリ",
          "queryDesc": "AIはSQLクエリを実行し、結果を分析できます"
        }
      }
    },
    "bestPractices": {
      "title": "ベストプラクティス",
      "security": {
        "title": "セキュリティの考慮事項",
        "content": "信頼できるMCPサーバーにのみ接続し、サーバー権限を定期的に確認し、機密データの露出を避けてください。"
      },
      "performance": {
        "title": "パフォーマンス最適化",
        "content": "サーバー数を合理的に設定し、リソース使用量を監視し、データ転送効率を最適化してください。"
      },
      "debugging": {
        "title": "デバッグのヒント",
        "content": "詳細ログモードを使用し、サーバーステータスを確認し、設定ファイル形式を検証してください。"
      }
    },
    "nextSteps": {
      "title": "次のステップ",
      "description": "MCPプロトコルを理解したので、より高度な設定と統合方法を学び続けることができます：",
      "advancedConfig": "高度な設定",
      "integration": "統合ガイド",
      "backToGuides": "ガイドに戻る"
    }
  }
};

// Function to apply MCP Protocol translations
function applyMcpProtocolTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = mcpProtocolTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No MCP Protocol translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesMcpProtocol with professional translation
    data.guidesMcpProtocol = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied MCP Protocol translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const mcpProtocol = newData.guidesMcpProtocol;
    console.log(`   - Hero title: "${mcpProtocol?.hero?.title || 'N/A'}"`);
    console.log(`   - Overview: ${mcpProtocol?.overview ? 'Yes' : 'No'}`);
    console.log(`   - Concepts: ${mcpProtocol?.concepts ? 'Yes' : 'No'}`);
    console.log(`   - Examples: ${mcpProtocol?.examples ? 'Yes' : 'No'}`);
    console.log(`   - Best practices: ${mcpProtocol?.bestPractices ? 'Yes' : 'No'}`);
    
  } catch (error) {
    console.error(`❌ Error applying MCP Protocol translations for ${langCode}:`, error.message);
  }
}

// Apply MCP Protocol translations
console.log('🚀 Applying professional MCP Protocol translations for German and Japanese...\n');

Object.keys(mcpProtocolTranslations).forEach(langCode => {
  const langNames = {
    de: 'German',
    ja: 'Japanese'
  };
  
  console.log(`Applying MCP Protocol translations for ${langNames[langCode]}...`);
  applyMcpProtocolTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional MCP Protocol translations applied!');
console.log('🎯 German and Japanese now have complete professional content.');
