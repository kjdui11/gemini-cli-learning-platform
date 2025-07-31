const fs = require('fs');
const path = require('path');

// Complete translations for all languages with correct structure
const allLanguageTranslations = {
  fr: {
    "hero": {
      "title": "Opérations de Commandes de Base",
      "subtitle": "Maîtrisez les commandes principales et la syntaxe d'opération de Gemini CLI",
      "comprehensive": "Couverture Complète",
      "practical": "Exemples Pratiques"
    },
    "overview": {
      "title": "Aperçu des Commandes",
      "description": "Gemini CLI fournit trois types principaux de commandes : les commandes slash pour contrôler le CLI lui-même, les commandes @ pour les opérations de fichiers, et les commandes ! pour exécuter des commandes système."
    },
    "categories": {
      "slash": {
        "title": "Commandes Slash (/)",
        "description": "Commandes de méta-niveau pour contrôler le CLI lui-même",
        "commands": {
          "help": "Afficher toutes les commandes disponibles et leur utilisation",
          "clear": "Effacer l'historique de conversation actuel",
          "quit": "Quitter Gemini CLI",
          "theme": "Changer le thème de couleur (clair/sombre/auto)"
        }
      },
      "at": {
        "title": "Commandes @ (@)",
        "description": "Commandes pour interagir avec le contenu des fichiers",
        "commands": {
          "file": "Inclure le contenu du fichier dans la conversation",
          "folder": "Analyser la structure et le contenu du dossier",
          "wildcard": "Inclure plusieurs fichiers en utilisant la correspondance de motifs"
        }
      },
      "exclamation": {
        "title": "Commandes ! (!)",
        "description": "Commandes pour exécuter des commandes système",
        "commands": {
          "system": "Exécuter n'importe quelle commande système",
          "git": "Exécuter des commandes Git",
          "npm": "Exécuter des commandes NPM"
        }
      }
    },
    "examples": {
      "title": "Exemples Pratiques",
      "description": "Comment utiliser les commandes dans des scénarios réels",
      "scenarios": [
        {
          "title": "Révision de Code",
          "description": "Lire un fichier et suggérer des améliorations",
          "command": "@src/components/Button.tsx Révisez ce composant et suggérez des améliorations"
        },
        {
          "title": "Aide au Débogage",
          "description": "Analyser les journaux d'erreur",
          "command": "@logs/error.log Analysez ce journal d'erreur et suggérez des solutions possibles"
        },
        {
          "title": "Documentation",
          "description": "Générer de la documentation pour le code",
          "command": "@src/utils/ Créez une documentation README pour ces fonctions utilitaires"
        }
      ]
    },
    "tips": {
      "title": "Conseils d'Utilisation",
      "info": {
        "title": "Combinaison de Commandes",
        "content": "Vous pouvez combiner plusieurs types de commandes dans la même conversation pour améliorer l'efficacité du travail."
      },
      "warning": {
        "title": "Rappel de Sécurité",
        "content": "Soyez prudent lors de l'utilisation des commandes !, assurez-vous de comprendre ce que fait la commande pour éviter les opérations dangereuses."
      },
      "success": {
        "title": "Meilleures Pratiques",
        "content": "Il est recommandé d'utiliser d'abord /help pour voir toutes les commandes disponibles, puis d'apprendre progressivement l'utilisation de diverses commandes."
      }
    },
    "nextSteps": {
      "title": "Prochaines Étapes",
      "description": "Maintenant que vous maîtrisez les commandes de base, vous pouvez continuer à apprendre des fonctionnalités plus avancées :",
      "fileOperations": "Détails des Opérations de Fichiers",
      "advancedConfig": "Configuration Avancée",
      "backToGuides": "Retour aux Guides"
    }
  },
  de: {
    "hero": {
      "title": "Grundlegende Befehlsoperationen",
      "subtitle": "Beherrschen Sie die Kernbefehle und Operationssyntax von Gemini CLI",
      "comprehensive": "Umfassende Abdeckung",
      "practical": "Praktische Beispiele"
    },
    "overview": {
      "title": "Befehlsübersicht",
      "description": "Gemini CLI bietet drei Haupttypen von Befehlen: Slash-Befehle zur Steuerung der CLI selbst, @-Befehle für Dateioperationen und !-Befehle zur Ausführung von Systembefehlen."
    },
    "categories": {
      "slash": {
        "title": "Slash-Befehle (/)",
        "description": "Meta-Level-Befehle zur Steuerung der CLI selbst",
        "commands": {
          "help": "Alle verfügbaren Befehle und ihre Verwendung anzeigen",
          "clear": "Aktuelle Gesprächshistorie löschen",
          "quit": "Gemini CLI beenden",
          "theme": "Farbthema ändern (hell/dunkel/auto)"
        }
      },
      "at": {
        "title": "@ Befehle (@)",
        "description": "Befehle zur Interaktion mit Dateiinhalten",
        "commands": {
          "file": "Dateiinhalt in Gespräch einbeziehen",
          "folder": "Ordnerstruktur und -inhalt analysieren",
          "wildcard": "Mehrere Dateien mit Musterabgleich einbeziehen"
        }
      },
      "exclamation": {
        "title": "! Befehle (!)",
        "description": "Befehle zur Ausführung von Systembefehlen",
        "commands": {
          "system": "Beliebige Systembefehle ausführen",
          "git": "Git-Befehle ausführen",
          "npm": "NPM-Befehle ausführen"
        }
      }
    },
    "examples": {
      "title": "Praktische Beispiele",
      "description": "Wie man Befehle in realen Szenarien verwendet",
      "scenarios": [
        {
          "title": "Code-Review",
          "description": "Datei lesen und Verbesserungen vorschlagen",
          "command": "@src/components/Button.tsx Überprüfen Sie diese Komponente und schlagen Sie Verbesserungen vor"
        },
        {
          "title": "Debugging-Hilfe",
          "description": "Fehlerprotokolle analysieren",
          "command": "@logs/error.log Analysieren Sie dieses Fehlerprotokoll und schlagen Sie mögliche Lösungen vor"
        },
        {
          "title": "Dokumentation",
          "description": "Dokumentation für Code generieren",
          "command": "@src/utils/ Erstellen Sie README-Dokumentation für diese Hilfsfunktionen"
        }
      ]
    },
    "tips": {
      "title": "Verwendungstipps",
      "info": {
        "title": "Befehlskombination",
        "content": "Sie können mehrere Befehlstypen in derselben Unterhaltung kombinieren, um die Arbeitseffizienz zu verbessern."
      },
      "warning": {
        "title": "Sicherheitserinnerung",
        "content": "Seien Sie vorsichtig bei der Verwendung von !-Befehlen, stellen Sie sicher, dass Sie verstehen, was der Befehl tut, um gefährliche Operationen zu vermeiden."
      },
      "success": {
        "title": "Beste Praktiken",
        "content": "Es wird empfohlen, zuerst /help zu verwenden, um alle verfügbaren Befehle zu sehen, und dann schrittweise die Verwendung verschiedener Befehle zu erlernen."
      }
    },
    "nextSteps": {
      "title": "Nächste Schritte",
      "description": "Nachdem Sie die grundlegenden Befehle beherrschen, können Sie erweiterte Funktionen erlernen:",
      "fileOperations": "Details zu Dateioperationen",
      "advancedConfig": "Erweiterte Konfiguration",
      "backToGuides": "Zurück zu den Anleitungen"
    }
  },
  ja: {
    "hero": {
      "title": "基本コマンド操作",
      "subtitle": "Gemini CLIのコアコマンドと操作構文をマスターする",
      "comprehensive": "包括的カバレッジ",
      "practical": "実践的な例"
    },
    "overview": {
      "title": "コマンド概要",
      "description": "Gemini CLIは3つの主要なコマンドタイプを提供します：CLI自体を制御するスラッシュコマンド、ファイル操作用の@コマンド、システムコマンド実行用の!コマンド。"
    },
    "categories": {
      "slash": {
        "title": "スラッシュコマンド (/)",
        "description": "CLI自体を制御するメタレベルコマンド",
        "commands": {
          "help": "利用可能なすべてのコマンドとその使用法を表示",
          "clear": "現在の会話履歴をクリア",
          "quit": "Gemini CLIを終了",
          "theme": "カラーテーマを変更（ライト/ダーク/オート）"
        }
      },
      "at": {
        "title": "@ コマンド (@)",
        "description": "ファイル内容と対話するためのコマンド",
        "commands": {
          "file": "ファイル内容を会話に含める",
          "folder": "フォルダ構造と内容を分析",
          "wildcard": "パターンマッチングを使用して複数ファイルを含める"
        }
      },
      "exclamation": {
        "title": "! コマンド (!)",
        "description": "システムコマンドを実行するためのコマンド",
        "commands": {
          "system": "任意のシステムコマンドを実行",
          "git": "Gitコマンドを実行",
          "npm": "NPMコマンドを実行"
        }
      }
    },
    "examples": {
      "title": "実践的な例",
      "description": "実際のシナリオでコマンドを使用する方法",
      "scenarios": [
        {
          "title": "コードレビュー",
          "description": "ファイルを読んで改善を提案",
          "command": "@src/components/Button.tsx このコンポーネントをレビューして改善を提案してください"
        },
        {
          "title": "デバッグ支援",
          "description": "エラーログを分析",
          "command": "@logs/error.log このエラーログを分析して可能な解決策を提案してください"
        },
        {
          "title": "ドキュメント作成",
          "description": "コードのドキュメントを生成",
          "command": "@src/utils/ これらのユーティリティ関数のREADMEドキュメントを作成してください"
        }
      ]
    },
    "tips": {
      "title": "使用のヒント",
      "info": {
        "title": "コマンドの組み合わせ",
        "content": "作業効率を向上させるために、同じ会話で複数のコマンドタイプを組み合わせることができます。"
      },
      "warning": {
        "title": "セキュリティリマインダー",
        "content": "!コマンドを使用する際は注意してください。危険な操作を避けるために、コマンドが何をするかを理解していることを確認してください。"
      },
      "success": {
        "title": "ベストプラクティス",
        "content": "まず/helpを使用してすべての利用可能なコマンドを確認し、その後徐々に様々なコマンドの使用法を学習することをお勧めします。"
      }
    },
    "nextSteps": {
      "title": "次のステップ",
      "description": "基本コマンドをマスターしたので、より高度な機能を学習できます：",
      "fileOperations": "ファイル操作の詳細",
      "advancedConfig": "高度な設定",
      "backToGuides": "ガイドに戻る"
    }
  },
  ko: {
    "hero": {
      "title": "기본 명령 작업",
      "subtitle": "Gemini CLI의 핵심 명령과 작업 구문을 마스터하세요",
      "comprehensive": "포괄적 커버리지",
      "practical": "실용적 예제"
    },
    "overview": {
      "title": "명령 개요",
      "description": "Gemini CLI는 세 가지 주요 명령 유형을 제공합니다: CLI 자체를 제어하는 슬래시 명령, 파일 작업용 @ 명령, 시스템 명령 실행용 ! 명령."
    },
    "categories": {
      "slash": {
        "title": "슬래시 명령 (/)",
        "description": "CLI 자체를 제어하는 메타 레벨 명령",
        "commands": {
          "help": "사용 가능한 모든 명령과 사용법 표시",
          "clear": "현재 대화 기록 지우기",
          "quit": "Gemini CLI 종료",
          "theme": "색상 테마 변경 (라이트/다크/자동)"
        }
      },
      "at": {
        "title": "@ 명령 (@)",
        "description": "파일 내용과 상호작용하는 명령",
        "commands": {
          "file": "파일 내용을 대화에 포함",
          "folder": "폴더 구조와 내용 분석",
          "wildcard": "패턴 매칭을 사용하여 여러 파일 포함"
        }
      },
      "exclamation": {
        "title": "! 명령 (!)",
        "description": "시스템 명령을 실행하는 명령",
        "commands": {
          "system": "임의의 시스템 명령 실행",
          "git": "Git 명령 실행",
          "npm": "NPM 명령 실행"
        }
      }
    },
    "examples": {
      "title": "실용적 예제",
      "description": "실제 시나리오에서 명령을 사용하는 방법",
      "scenarios": [
        {
          "title": "코드 리뷰",
          "description": "파일을 읽고 개선사항 제안",
          "command": "@src/components/Button.tsx 이 컴포넌트를 리뷰하고 개선사항을 제안해주세요"
        },
        {
          "title": "디버깅 지원",
          "description": "오류 로그 분석",
          "command": "@logs/error.log 이 오류 로그를 분석하고 가능한 해결책을 제안해주세요"
        },
        {
          "title": "문서화",
          "description": "코드용 문서 생성",
          "command": "@src/utils/ 이 유틸리티 함수들을 위한 README 문서를 작성해주세요"
        }
      ]
    },
    "tips": {
      "title": "사용 팁",
      "info": {
        "title": "명령 조합",
        "content": "작업 효율성을 향상시키기 위해 같은 대화에서 여러 명령 유형을 조합할 수 있습니다."
      },
      "warning": {
        "title": "보안 알림",
        "content": "! 명령을 사용할 때 주의하세요. 위험한 작업을 피하기 위해 명령이 무엇을 하는지 이해하고 있는지 확인하세요."
      },
      "success": {
        "title": "모범 사례",
        "content": "먼저 /help를 사용하여 모든 사용 가능한 명령을 확인한 다음 점진적으로 다양한 명령의 사용법을 학습하는 것이 좋습니다."
      }
    },
    "nextSteps": {
      "title": "다음 단계",
      "description": "기본 명령을 마스터했으므로 더 고급 기능을 학습할 수 있습니다:",
      "fileOperations": "파일 작업 세부사항",
      "advancedConfig": "고급 설정",
      "backToGuides": "가이드로 돌아가기"
    }
  }
};

// Function to completely replace basic commands structure
function replaceBasicCommandsStructure(langCode, langName, newStructure) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Completely replace the guidesBasicCommands section
    data.guidesBasicCommands = newStructure;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Completely replaced basic commands structure for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const basicCommands = newData.guidesBasicCommands;
    
    console.log(`   📊 Categories: ${Object.keys(basicCommands?.categories || {}).length}`);
    console.log(`   📝 Examples: ${basicCommands?.examples?.scenarios?.length || 0}`);
    console.log(`   💡 Tips: ${Object.keys(basicCommands?.tips || {}).filter(k => k !== 'title').length}`);
    
  } catch (error) {
    console.error(`❌ Error replacing basic commands structure for ${langCode}:`, error.message);
  }
}

// Apply fixes
console.log('🔧 Fixing basic commands structure for all languages...\n');

Object.keys(allLanguageTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean'
  };
  
  console.log(`Fixing basic commands structure for ${langNames[langCode]}...`);
  replaceBasicCommandsStructure(langCode, langNames[langCode], allLanguageTranslations[langCode]);
  console.log('');
});

console.log('✅ All basic commands structures fixed!');
console.log('🎯 French, German, Japanese, and Korean now have complete correct structure.');
