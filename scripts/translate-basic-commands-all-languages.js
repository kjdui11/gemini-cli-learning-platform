const fs = require('fs');
const path = require('path');

// Complete professional translations for basic-commands page
const basicCommandsTranslations = {
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
          "help": {
            "command": "/help",
            "description": "Afficher toutes les commandes disponibles et leur utilisation"
          },
          "clear": {
            "command": "/clear",
            "description": "Effacer l'historique de conversation actuel"
          },
          "quit": {
            "command": "/quit",
            "description": "Quitter Gemini CLI"
          },
          "theme": {
            "command": "/theme [light|dark|auto]",
            "description": "Changer le thème de couleur (clair/sombre/auto)"
          }
        }
      },
      "file": {
        "title": "Commandes de Fichier (@)",
        "description": "Commandes pour interagir avec le contenu des fichiers",
        "commands": {
          "single": {
            "command": "@filename.ext",
            "description": "Inclure le contenu du fichier dans la conversation"
          },
          "folder": {
            "command": "@folder/",
            "description": "Analyser la structure et le contenu du dossier"
          },
          "pattern": {
            "command": "@**/*.js",
            "description": "Inclure plusieurs fichiers en utilisant la correspondance de motifs"
          }
        }
      },
      "system": {
        "title": "Commandes Système (!)",
        "description": "Commandes pour exécuter des commandes système",
        "commands": {
          "list": {
            "command": "!ls -la",
            "description": "Lister le contenu du répertoire actuel"
          },
          "git": {
            "command": "!git status",
            "description": "Vérifier le statut du dépôt Git"
          },
          "test": {
            "command": "!npm test",
            "description": "Exécuter les tests du projet"
          }
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
      "items": [
        {
          "title": "Combinaison de Commandes",
          "description": "Utilisez plusieurs commandes dans le même message"
        },
        {
          "title": "Maintien du Contexte",
          "description": "Le contenu des fichiers reste dans le contexte de conversation"
        },
        {
          "title": "Accès Rapide",
          "description": "Utilisez la touche Tab pour compléter les noms de fichiers"
        }
      ]
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
          "help": {
            "command": "/help",
            "description": "Alle verfügbaren Befehle und ihre Verwendung anzeigen"
          },
          "clear": {
            "command": "/clear",
            "description": "Aktuelle Gesprächshistorie löschen"
          },
          "quit": {
            "command": "/quit",
            "description": "Gemini CLI beenden"
          },
          "theme": {
            "command": "/theme [light|dark|auto]",
            "description": "Farbthema ändern (hell/dunkel/auto)"
          }
        }
      },
      "file": {
        "title": "Dateibefehle (@)",
        "description": "Befehle zur Interaktion mit Dateiinhalten",
        "commands": {
          "single": {
            "command": "@filename.ext",
            "description": "Dateiinhalt in Gespräch einbeziehen"
          },
          "folder": {
            "command": "@folder/",
            "description": "Ordnerstruktur und -inhalt analysieren"
          },
          "pattern": {
            "command": "@**/*.js",
            "description": "Mehrere Dateien mit Musterabgleich einbeziehen"
          }
        }
      },
      "system": {
        "title": "Systembefehle (!)",
        "description": "Befehle zur Ausführung von Systembefehlen",
        "commands": {
          "list": {
            "command": "!ls -la",
            "description": "Inhalt des aktuellen Verzeichnisses auflisten"
          },
          "git": {
            "command": "!git status",
            "description": "Git-Repository-Status überprüfen"
          },
          "test": {
            "command": "!npm test",
            "description": "Projekttests ausführen"
          }
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
      "items": [
        {
          "title": "Befehlskombination",
          "description": "Verwenden Sie mehrere Befehle in derselben Nachricht"
        },
        {
          "title": "Kontext beibehalten",
          "description": "Dateiinhalt bleibt im Gesprächskontext"
        },
        {
          "title": "Schnellzugriff",
          "description": "Verwenden Sie die Tab-Taste zur Vervollständigung von Dateinamen"
        }
      ]
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
          "help": {
            "command": "/help",
            "description": "利用可能なすべてのコマンドとその使用法を表示"
          },
          "clear": {
            "command": "/clear",
            "description": "現在の会話履歴をクリア"
          },
          "quit": {
            "command": "/quit",
            "description": "Gemini CLIを終了"
          },
          "theme": {
            "command": "/theme [light|dark|auto]",
            "description": "カラーテーマを変更（ライト/ダーク/オート）"
          }
        }
      },
      "file": {
        "title": "ファイルコマンド (@)",
        "description": "ファイル内容と対話するためのコマンド",
        "commands": {
          "single": {
            "command": "@filename.ext",
            "description": "ファイル内容を会話に含める"
          },
          "folder": {
            "command": "@folder/",
            "description": "フォルダ構造と内容を分析"
          },
          "pattern": {
            "command": "@**/*.js",
            "description": "パターンマッチングを使用して複数ファイルを含める"
          }
        }
      },
      "system": {
        "title": "システムコマンド (!)",
        "description": "システムコマンドを実行するためのコマンド",
        "commands": {
          "list": {
            "command": "!ls -la",
            "description": "現在のディレクトリの内容をリスト"
          },
          "git": {
            "command": "!git status",
            "description": "Gitリポジトリのステータスを確認"
          },
          "test": {
            "command": "!npm test",
            "description": "プロジェクトテストを実行"
          }
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
      "items": [
        {
          "title": "コマンドの組み合わせ",
          "description": "同じメッセージで複数のコマンドを使用"
        },
        {
          "title": "コンテキストの維持",
          "description": "ファイル内容は会話コンテキストに残る"
        },
        {
          "title": "クイックアクセス",
          "description": "Tabキーを使用してファイル名を補完"
        }
      ]
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
          "help": {
            "command": "/help",
            "description": "사용 가능한 모든 명령과 사용법 표시"
          },
          "clear": {
            "command": "/clear",
            "description": "현재 대화 기록 지우기"
          },
          "quit": {
            "command": "/quit",
            "description": "Gemini CLI 종료"
          },
          "theme": {
            "command": "/theme [light|dark|auto]",
            "description": "색상 테마 변경 (라이트/다크/자동)"
          }
        }
      },
      "file": {
        "title": "파일 명령 (@)",
        "description": "파일 내용과 상호작용하는 명령",
        "commands": {
          "single": {
            "command": "@filename.ext",
            "description": "파일 내용을 대화에 포함"
          },
          "folder": {
            "command": "@folder/",
            "description": "폴더 구조와 내용 분석"
          },
          "pattern": {
            "command": "@**/*.js",
            "description": "패턴 매칭을 사용하여 여러 파일 포함"
          }
        }
      },
      "system": {
        "title": "시스템 명령 (!)",
        "description": "시스템 명령을 실행하는 명령",
        "commands": {
          "list": {
            "command": "!ls -la",
            "description": "현재 디렉토리 내용 나열"
          },
          "git": {
            "command": "!git status",
            "description": "Git 저장소 상태 확인"
          },
          "test": {
            "command": "!npm test",
            "description": "프로젝트 테스트 실행"
          }
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
      "items": [
        {
          "title": "명령 조합",
          "description": "같은 메시지에서 여러 명령 사용"
        },
        {
          "title": "컨텍스트 유지",
          "description": "파일 내용이 대화 컨텍스트에 유지됨"
        },
        {
          "title": "빠른 접근",
          "description": "Tab 키를 사용하여 파일명 자동완성"
        }
      ]
    },
    "nextSteps": {
      "title": "다음 단계",
      "description": "기본 명령을 마스터했으므로 더 고급 기능을 학습할 수 있습니다:",
      "fileOperations": "파일 작업 세부사항",
      "advancedConfig": "고급 설정",
      "backToGuides": "가이드로 돌아가기"
    }
  },
  es: {
    "hero": {
      "title": "Operaciones de Comandos Básicos",
      "subtitle": "Domina los comandos principales y la sintaxis de operación de Gemini CLI",
      "comprehensive": "Cobertura Integral",
      "practical": "Ejemplos Prácticos"
    },
    "overview": {
      "title": "Resumen de Comandos",
      "description": "Gemini CLI proporciona tres tipos principales de comandos: comandos slash para controlar el CLI mismo, comandos @ para operaciones de archivos, y comandos ! para ejecutar comandos del sistema."
    },
    "categories": {
      "slash": {
        "title": "Comandos Slash (/)",
        "description": "Comandos de meta-nivel para controlar el CLI mismo",
        "commands": {
          "help": {
            "command": "/help",
            "description": "Mostrar todos los comandos disponibles y su uso"
          },
          "clear": {
            "command": "/clear",
            "description": "Limpiar el historial de conversación actual"
          },
          "quit": {
            "command": "/quit",
            "description": "Salir de Gemini CLI"
          },
          "theme": {
            "command": "/theme [light|dark|auto]",
            "description": "Cambiar tema de color (claro/oscuro/auto)"
          }
        }
      },
      "file": {
        "title": "Comandos de Archivo (@)",
        "description": "Comandos para interactuar con contenido de archivos",
        "commands": {
          "single": {
            "command": "@filename.ext",
            "description": "Incluir contenido de archivo en conversación"
          },
          "folder": {
            "command": "@folder/",
            "description": "Analizar estructura y contenido de carpeta"
          },
          "pattern": {
            "command": "@**/*.js",
            "description": "Incluir múltiples archivos usando coincidencia de patrones"
          }
        }
      },
      "system": {
        "title": "Comandos del Sistema (!)",
        "description": "Comandos para ejecutar comandos del sistema",
        "commands": {
          "list": {
            "command": "!ls -la",
            "description": "Listar contenido del directorio actual"
          },
          "git": {
            "command": "!git status",
            "description": "Verificar estado del repositorio Git"
          },
          "test": {
            "command": "!npm test",
            "description": "Ejecutar pruebas del proyecto"
          }
        }
      }
    },
    "examples": {
      "title": "Ejemplos Prácticos",
      "description": "Cómo usar comandos en escenarios reales",
      "scenarios": [
        {
          "title": "Revisión de Código",
          "description": "Leer archivo y sugerir mejoras",
          "command": "@src/components/Button.tsx Revisa este componente y sugiere mejoras"
        },
        {
          "title": "Ayuda de Depuración",
          "description": "Analizar registros de errores",
          "command": "@logs/error.log Analiza este registro de errores y sugiere posibles soluciones"
        },
        {
          "title": "Documentación",
          "description": "Generar documentación para código",
          "command": "@src/utils/ Crea documentación README para estas funciones utilitarias"
        }
      ]
    },
    "tips": {
      "title": "Consejos de Uso",
      "items": [
        {
          "title": "Combinación de Comandos",
          "description": "Usa múltiples comandos en el mismo mensaje"
        },
        {
          "title": "Mantener Contexto",
          "description": "El contenido de archivos permanece en el contexto de conversación"
        },
        {
          "title": "Acceso Rápido",
          "description": "Usa la tecla Tab para completar nombres de archivos"
        }
      ]
    },
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Ahora que dominas los comandos básicos, puedes continuar aprendiendo funciones más avanzadas:",
      "fileOperations": "Detalles de Operaciones de Archivo",
      "advancedConfig": "Configuración Avanzada",
      "backToGuides": "Volver a las Guías"
    }
  },
  ru: {
    "hero": {
      "title": "Основные Операции с Командами",
      "subtitle": "Освойте основные команды и синтаксис операций Gemini CLI",
      "comprehensive": "Полное Покрытие",
      "practical": "Практические Примеры"
    },
    "overview": {
      "title": "Обзор Команд",
      "description": "Gemini CLI предоставляет три основных типа команд: slash-команды для управления самим CLI, @-команды для операций с файлами и !-команды для выполнения системных команд."
    },
    "categories": {
      "slash": {
        "title": "Slash-команды (/)",
        "description": "Мета-уровневые команды для управления самим CLI",
        "commands": {
          "help": {
            "command": "/help",
            "description": "Показать все доступные команды и их использование"
          },
          "clear": {
            "command": "/clear",
            "description": "Очистить текущую историю разговора"
          },
          "quit": {
            "command": "/quit",
            "description": "Выйти из Gemini CLI"
          },
          "theme": {
            "command": "/theme [light|dark|auto]",
            "description": "Изменить цветовую тему (светлая/темная/авто)"
          }
        }
      },
      "file": {
        "title": "Файловые Команды (@)",
        "description": "Команды для взаимодействия с содержимым файлов",
        "commands": {
          "single": {
            "command": "@filename.ext",
            "description": "Включить содержимое файла в разговор"
          },
          "folder": {
            "command": "@folder/",
            "description": "Анализировать структуру и содержимое папки"
          },
          "pattern": {
            "command": "@**/*.js",
            "description": "Включить несколько файлов используя сопоставление шаблонов"
          }
        }
      },
      "system": {
        "title": "Системные Команды (!)",
        "description": "Команды для выполнения системных команд",
        "commands": {
          "list": {
            "command": "!ls -la",
            "description": "Список содержимого текущего каталога"
          },
          "git": {
            "command": "!git status",
            "description": "Проверить статус Git-репозитория"
          },
          "test": {
            "command": "!npm test",
            "description": "Запустить тесты проекта"
          }
        }
      }
    },
    "examples": {
      "title": "Практические Примеры",
      "description": "Как использовать команды в реальных сценариях",
      "scenarios": [
        {
          "title": "Ревью Кода",
          "description": "Прочитать файл и предложить улучшения",
          "command": "@src/components/Button.tsx Проверьте этот компонент и предложите улучшения"
        },
        {
          "title": "Помощь в Отладке",
          "description": "Анализировать журналы ошибок",
          "command": "@logs/error.log Проанализируйте этот журнал ошибок и предложите возможные решения"
        },
        {
          "title": "Документация",
          "description": "Генерировать документацию для кода",
          "command": "@src/utils/ Создайте README документацию для этих утилитарных функций"
        }
      ]
    },
    "tips": {
      "title": "Советы по Использованию",
      "items": [
        {
          "title": "Комбинация Команд",
          "description": "Используйте несколько команд в одном сообщении"
        },
        {
          "title": "Сохранение Контекста",
          "description": "Содержимое файлов остается в контексте разговора"
        },
        {
          "title": "Быстрый Доступ",
          "description": "Используйте клавишу Tab для автодополнения имен файлов"
        }
      ]
    },
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Теперь, когда вы освоили основные команды, можете продолжить изучение более продвинутых функций:",
      "fileOperations": "Подробности Операций с Файлами",
      "advancedConfig": "Продвинутая Конфигурация",
      "backToGuides": "Вернуться к Руководствам"
    }
  }
};

// Function to apply basic commands translations
function applyBasicCommandsTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = basicCommandsTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No basic commands translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesBasicCommands with professional translation
    data.guidesBasicCommands = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied basic commands translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const basicCommands = newData.guidesBasicCommands;
    console.log(`   - Hero title: "${basicCommands?.hero?.title || 'N/A'}"`);
    console.log(`   - Categories: ${Object.keys(basicCommands?.categories || {}).length}`);
    console.log(`   - Examples: ${basicCommands?.examples?.scenarios?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying basic commands translations for ${langCode}:`, error.message);
  }
}

// Function to fix English and Chinese structure
function fixEnglishChineseStructure() {
  // Fix English
  const enPath = path.join(__dirname, '..', 'src', 'messages', 'en.json');
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

  if (!enData.guidesBasicCommands.examples) {
    enData.guidesBasicCommands.examples = {
      "title": "Practical Examples",
      "description": "How to use commands in real scenarios",
      "scenarios": [
        {
          "title": "Code Review",
          "description": "Read file and suggest improvements",
          "command": "@src/components/Button.tsx Review this component and suggest improvements"
        },
        {
          "title": "Debugging Help",
          "description": "Analyze error logs",
          "command": "@logs/error.log Analyze this error log and suggest possible solutions"
        },
        {
          "title": "Documentation",
          "description": "Generate documentation for code",
          "command": "@src/utils/ Create README documentation for these utility functions"
        }
      ]
    };
    fs.writeFileSync(enPath, JSON.stringify(enData, null, 2), 'utf8');
    console.log('✅ Fixed English examples structure');
  }

  // Fix Chinese
  const zhPath = path.join(__dirname, '..', 'src', 'messages', 'zh.json');
  const zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

  if (!zhData.guidesBasicCommands.examples) {
    zhData.guidesBasicCommands.examples = {
      "title": "实用示例",
      "description": "如何在真实场景中使用命令",
      "scenarios": [
        {
          "title": "代码审查",
          "description": "读取文件并建议改进",
          "command": "@src/components/Button.tsx 审查这个组件并建议改进"
        },
        {
          "title": "调试帮助",
          "description": "分析错误日志",
          "command": "@logs/error.log 分析这个错误日志并建议可能的解决方案"
        },
        {
          "title": "文档生成",
          "description": "为代码生成文档",
          "command": "@src/utils/ 为这些工具函数创建 README 文档"
        }
      ]
    };
    fs.writeFileSync(zhPath, JSON.stringify(zhData, null, 2), 'utf8');
    console.log('✅ Fixed Chinese examples structure');
  }
}

// Apply basic commands translations
console.log('🚀 Applying professional basic commands translations...\n');

// First fix English and Chinese
fixEnglishChineseStructure();

Object.keys(basicCommandsTranslations).forEach(langCode => {
  const langNames = {
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };

  console.log(`Applying basic commands translations for ${langNames[langCode]}...`);
  applyBasicCommandsTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional basic commands translations applied!');
console.log('🎯 All languages now have complete professional basic commands content.');
