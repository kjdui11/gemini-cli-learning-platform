const fs = require('fs');
const path = require('path');

// Professional translations for all languages
const professionalTranslations = {
  de: {
    examples: [
      {
        title: "JavaScript-Projekt Batch-Verarbeitung",
        description: "Umfassende Analyse und Optimierung aller JavaScript-Dateien in einem komplexen Projekt",
        code: "# Alle JS-Dateien rekursiv lesen und analysieren\ngemini read \"src/**/*.js\" --analyze --depth=full --output=analysis.json\n\n# Code nach modernen Standards formatieren\ngemini format \"src/**/*.js\" --style=prettier --config=.prettierrc\n\n# Automatische Dokumentation mit JSDoc generieren\ngemini doc \"src/**/*.js\" --format=jsdoc --output=docs/ --include-private",
        explanation: "Dieses Beispiel zeigt eine vollständige Projekt-Analyse-Pipeline. Der Parameter --analyze mit --depth=full führt eine umfassende Code-Qualitätsanalyse durch, einschließlich Komplexitätsmessungen und Sicherheitsprüfungen. Die Option --config ermöglicht projektspezifische Formatierungsregeln, während --include-private auch private Funktionen in die Dokumentation einbezieht."
      },
      {
        title: "Konfigurationsdateien-Management",
        description: "Professionelle Verwaltung und Validierung von Projekt-Konfigurationsdateien",
        code: "# Alle Konfigurationsdateien im Projekt finden\ngemini list . --type=config --recursive --include-hidden\n\n# Sicherheitsbackup vor kritischen Änderungen\ngemini backup config/*.{json,yaml,toml} --timestamp --compress\n\n# Konfiguration gegen Schema validieren\ngemini validate config/app.json --schema=schemas/app-schema.json --strict",
        explanation: "Systematisches Konfigurationsmanagement ist entscheidend für die Projektstabilität. Der Parameter --include-hidden findet auch versteckte Konfigurationsdateien wie .env. Die Option --timestamp erstellt zeitgestempelte Backups, während --strict eine strenge Schema-Validierung durchführt und auch kleinste Abweichungen meldet."
      },
      {
        title: "Log-Datei Analyse und Rotation",
        description: "Effiziente Verarbeitung und Verwaltung großer Log-Dateien für System-Monitoring",
        code: "# Große Log-Datei in Blöcken verarbeiten um Speicher zu sparen\ngemini read logs/application.log --chunk-size=10MB --stream\n\n# Kritische Fehler extrahieren und kategorisieren\ngemini search logs/ --pattern=\"(ERROR|FATAL|CRITICAL)\" --context=5 --output=kritische-fehler.log\n\n# Intelligente Log-Rotation mit Kompression\ngemini rotate logs/application.log --max-size=500MB --keep=10 --compress=gzip",
        explanation: "Effizienz ist entscheidend bei der Log-Analyse. Der Parameter --stream ermöglicht Echtzeit-Verarbeitung ohne vollständiges Laden in den Speicher. --context=5 zeigt 5 Zeilen vor und nach jeder Übereinstimmung für besseren Kontext. Rotation mit --compress=gzip spart erheblich Speicherplatz für archivierte Logs."
      }
    ],
    bestPractices: [
      {
        type: "success",
        title: "Systematische Backup-Strategie implementieren",
        content: "Entwickeln Sie eine umfassende Backup-Strategie für alle kritischen Dateien. Nutzen Sie automatisierte Backups mit der Option --backup, implementieren Sie die 3-2-1-Regel (3 Kopien, 2 verschiedene Medien, 1 externe Kopie) und testen Sie regelmäßig die Wiederherstellbarkeit Ihrer Backups. Verwenden Sie Versionierung für wichtige Konfigurationsdateien."
      },
      {
        type: "warning",
        title: "Berechtigungen und Sicherheit priorisieren",
        content: "Implementieren Sie konsequent das Prinzip der geringsten Berechtigung. Überprüfen Sie Dateiberechtigungen vor jeder Operation mit --check-permissions, vermeiden Sie Root-Rechte außer bei absoluter Notwendigkeit, und nutzen Sie Benutzergruppen für granulare Zugriffskontrolle. Aktivieren Sie Audit-Logging für alle kritischen Dateioperationen in Produktionsumgebungen."
      },
      {
        type: "info",
        title: "Versionskontrolle strategisch nutzen",
        content: "Integrieren Sie alle Dateioperationen transparent in Ihr Versionskontrollsystem. Erstellen Sie beschreibende Commit-Nachrichten mit strukturierten Formaten, nutzen Sie Feature-Branches für experimentelle Änderungen, und implementieren Sie Pre-Commit-Hooks für automatische Validierung. Verwenden Sie .gitignore strategisch für temporäre und generierte Dateien."
      },
      {
        type: "error",
        title: "Destruktive Operationen absichern",
        content: "Behandeln Sie alle destruktiven Operationen mit größter Vorsicht. Verwenden Sie immer --dry-run für Tests, implementieren Sie Bestätigungsdialoge für kritische Aktionen, und halten Sie sich strikt von Systemverzeichnissen fern. Erstellen Sie Rollback-Pläne für alle größeren Operationen und dokumentieren Sie Notfallverfahren für Datenwiederherstellung."
      }
    ],
    nextSteps: {
      title: "Nächste Schritte",
      description: "Nachdem Sie die Dateioperationen gemeistert haben, erweitern Sie Ihre Fähigkeiten mit diesen fortgeschrittenen Themen:",
      integration: "System-Integration",
      codeRefactoring: "Code-Refactoring",
      backToGuides: "Zurück zu den Leitfäden"
    }
  },
  ja: {
    examples: [
      {
        title: "JavaScriptプロジェクトバッチ処理",
        description: "複雑なプロジェクト内のすべてのJavaScriptファイルの包括的な分析と最適化",
        code: "# すべてのJSファイルを再帰的に読み取り分析\ngemini read \"src/**/*.js\" --analyze --depth=full --output=analysis.json\n\n# モダンスタンダードに従ってコードをフォーマット\ngemini format \"src/**/*.js\" --style=prettier --config=.prettierrc\n\n# JSDocで自動ドキュメント生成\ngemini doc \"src/**/*.js\" --format=jsdoc --output=docs/ --include-private",
        explanation: "この例は完全なプロジェクト分析パイプラインを示しています。--analyzeパラメータと--depth=fullは、複雑性測定とセキュリティ検証を含む包括的なコード品質分析を実行します。--configオプションはプロジェクト固有のフォーマットルールを可能にし、--include-privateはプライベート関数もドキュメントに含めます。"
      },
      {
        title: "設定ファイル管理",
        description: "プロジェクト設定ファイルの専門的な管理と検証",
        code: "# プロジェクト内のすべての設定ファイルを検索\ngemini list . --type=config --recursive --include-hidden\n\n# 重要な変更前のセキュリティバックアップ\ngemini backup config/*.{json,yaml,toml} --timestamp --compress\n\n# スキーマに対する設定の検証\ngemini validate config/app.json --schema=schemas/app-schema.json --strict",
        explanation: "体系的な設定管理はプロジェクトの安定性にとって重要です。--include-hiddenパラメータは.envのような隠し設定ファイルも見つけます。--timestampオプションはタイムスタンプ付きバックアップを作成し、--strictは厳密なスキーマ検証を実行して最小の逸脱も報告します。"
      },
      {
        title: "ログファイル分析とローテーション",
        description: "システム監視のための大きなログファイルの効率的な処理と管理",
        code: "# メモリを節約するために大きなログファイルをブロックで処理\ngemini read logs/application.log --chunk-size=10MB --stream\n\n# 重要なエラーを抽出して分類\ngemini search logs/ --pattern=\"(ERROR|FATAL|CRITICAL)\" --context=5 --output=重要エラー.log\n\n# 圧縮による知的ログローテーション\ngemini rotate logs/application.log --max-size=500MB --keep=10 --compress=gzip",
        explanation: "ログ分析では効率性が重要です。--streamパラメータはメモリに完全にロードすることなくリアルタイム処理を可能にします。--context=5は各マッチの前後5行を表示してより良いコンテキストを提供します。--compress=gzipによるローテーションはアーカイブされたログのストレージスペースを大幅に節約します。"
      }
    ],
    bestPractices: [
      {
        type: "success",
        title: "体系的なバックアップ戦略の実装",
        content: "すべての重要なファイルに対する包括的なバックアップ戦略を開発してください。--backupオプションで自動バックアップを使用し、3-2-1ルール（3つのコピー、2つの異なるメディア、1つの外部コピー）を実装し、バックアップの復旧可能性を定期的にテストしてください。重要な設定ファイルにはバージョニングを使用してください。"
      },
      {
        type: "warning",
        title: "権限とセキュリティの優先",
        content: "最小権限の原則を一貫して実装してください。--check-permissionsで各操作前にファイル権限を確認し、絶対に必要でない限りroot権限を避け、きめ細かいアクセス制御にユーザーグループを使用してください。本番環境ではすべての重要なファイル操作に対して監査ログを有効にしてください。"
      },
      {
        type: "info",
        title: "バージョン管理の戦略的使用",
        content: "すべてのファイル操作をバージョン管理システムに透明に統合してください。構造化された形式で説明的なコミットメッセージを作成し、実験的な変更にはフィーチャーブランチを使用し、自動検証のためのpre-commitフックを実装してください。一時的および生成されたファイルには.gitignoreを戦略的に使用してください。"
      },
      {
        type: "error",
        title: "破壊的操作の保護",
        content: "すべての破壊的操作を最大限の注意で扱ってください。テストには常に--dry-runを使用し、重要なアクションには確認ダイアログを実装し、システムディレクトリから厳密に離れてください。すべての主要な操作にロールバック計画を作成し、データ復旧の緊急手順を文書化してください。"
      }
    ],
    nextSteps: {
      title: "次のステップ",
      description: "ファイル操作をマスターした後、これらの高度なトピックでスキルを拡張してください：",
      integration: "システム統合",
      codeRefactoring: "コードリファクタリング",
      backToGuides: "ガイドに戻る"
    }
  },
  ko: {
    examples: [
      {
        title: "JavaScript 프로젝트 배치 처리",
        description: "복잡한 프로젝트 내 모든 JavaScript 파일의 포괄적인 분석 및 최적화",
        code: "# 모든 JS 파일을 재귀적으로 읽고 분석\ngemini read \"src/**/*.js\" --analyze --depth=full --output=analysis.json\n\n# 현대적 표준에 따라 코드 포맷\ngemini format \"src/**/*.js\" --style=prettier --config=.prettierrc\n\n# JSDoc으로 자동 문서 생성\ngemini doc \"src/**/*.js\" --format=jsdoc --output=docs/ --include-private",
        explanation: "이 예제는 완전한 프로젝트 분석 파이프라인을 보여줍니다. --analyze 매개변수와 --depth=full은 복잡성 측정 및 보안 검증을 포함한 포괄적인 코드 품질 분석을 수행합니다. --config 옵션은 프로젝트별 포맷팅 규칙을 가능하게 하며, --include-private는 비공개 함수도 문서에 포함시킵니다."
      },
      {
        title: "구성 파일 관리",
        description: "프로젝트 구성 파일의 전문적인 관리 및 검증",
        code: "# 프로젝트 내 모든 구성 파일 찾기\ngemini list . --type=config --recursive --include-hidden\n\n# 중요한 변경 전 보안 백업\ngemini backup config/*.{json,yaml,toml} --timestamp --compress\n\n# 스키마에 대한 구성 검증\ngemini validate config/app.json --schema=schemas/app-schema.json --strict",
        explanation: "체계적인 구성 관리는 프로젝트 안정성에 중요합니다. --include-hidden 매개변수는 .env와 같은 숨겨진 구성 파일도 찾습니다. --timestamp 옵션은 타임스탬프가 있는 백업을 생성하며, --strict는 엄격한 스키마 검증을 수행하여 가장 작은 편차도 보고합니다."
      },
      {
        title: "로그 파일 분석 및 순환",
        description: "시스템 모니터링을 위한 대용량 로그 파일의 효율적인 처리 및 관리",
        code: "# 메모리를 절약하기 위해 큰 로그 파일을 블록으로 처리\ngemini read logs/application.log --chunk-size=10MB --stream\n\n# 중요한 오류 추출 및 분류\ngemini search logs/ --pattern=\"(ERROR|FATAL|CRITICAL)\" --context=5 --output=중요오류.log\n\n# 압축을 통한 지능적 로그 순환\ngemini rotate logs/application.log --max-size=500MB --keep=10 --compress=gzip",
        explanation: "로그 분석에서는 효율성이 중요합니다. --stream 매개변수는 메모리에 완전히 로드하지 않고 실시간 처리를 가능하게 합니다. --context=5는 각 일치 항목의 앞뒤 5줄을 표시하여 더 나은 컨텍스트를 제공합니다. --compress=gzip을 통한 순환은 아카이브된 로그의 저장 공간을 크게 절약합니다."
      }
    ],
    bestPractices: [
      {
        type: "success",
        title: "체계적인 백업 전략 구현",
        content: "모든 중요한 파일에 대한 포괄적인 백업 전략을 개발하세요. --backup 옵션으로 자동화된 백업을 사용하고, 3-2-1 규칙(3개 복사본, 2개 다른 매체, 1개 외부 복사본)을 구현하며, 백업의 복구 가능성을 정기적으로 테스트하세요. 중요한 구성 파일에는 버전 관리를 사용하세요."
      },
      {
        type: "warning",
        title: "권한 및 보안 우선순위",
        content: "최소 권한 원칙을 일관되게 구현하세요. --check-permissions로 각 작업 전에 파일 권한을 확인하고, 절대 필요하지 않은 한 루트 권한을 피하며, 세밀한 액세스 제어를 위해 사용자 그룹을 사용하세요. 프로덕션 환경에서는 모든 중요한 파일 작업에 대해 감사 로깅을 활성화하세요."
      },
      {
        type: "info",
        title: "버전 제어 전략적 사용",
        content: "모든 파일 작업을 버전 제어 시스템에 투명하게 통합하세요. 구조화된 형식으로 설명적인 커밋 메시지를 작성하고, 실험적 변경에는 기능 브랜치를 사용하며, 자동 검증을 위한 pre-commit 훅을 구현하세요. 임시 및 생성된 파일에는 .gitignore를 전략적으로 사용하세요."
      },
      {
        type: "error",
        title: "파괴적 작업 보안",
        content: "모든 파괴적 작업을 최대한 주의하여 처리하세요. 테스트에는 항상 --dry-run을 사용하고, 중요한 작업에는 확인 대화상자를 구현하며, 시스템 디렉토리에서 엄격히 멀리 떨어져 있으세요. 모든 주요 작업에 대한 롤백 계획을 만들고 데이터 복구를 위한 응급 절차를 문서화하세요."
      }
    ],
    nextSteps: {
      title: "다음 단계",
      description: "파일 작업을 마스터한 후, 이러한 고급 주제로 기술을 확장하세요:",
      integration: "시스템 통합",
      codeRefactoring: "코드 리팩토링",
      backToGuides: "가이드로 돌아가기"
    }
  }
};

// Function to apply professional translations
function applyProfessionalTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = professionalTranslations[langCode];
    
    if (!translations || !data.guidesFileOperations) {
      console.log(`⚠️  No professional translations or guidesFileOperations found for ${langCode}`);
      return;
    }
    
    // Apply examples
    if (translations.examples) {
      translations.examples.forEach((example, index) => {
        if (data.guidesFileOperations.examples[index]) {
          Object.assign(data.guidesFileOperations.examples[index], example);
        }
      });
    }
    
    // Apply best practices
    if (translations.bestPractices) {
      translations.bestPractices.forEach((practice, index) => {
        if (data.guidesFileOperations.bestPractices[index]) {
          Object.assign(data.guidesFileOperations.bestPractices[index], practice);
        }
      });
    }
    
    // Apply next steps
    if (translations.nextSteps) {
      Object.assign(data.guidesFileOperations.nextSteps, translations.nextSteps);
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied professional translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const fileOps = newData.guidesFileOperations;
    console.log(`   - Examples: ${fileOps.examples?.length || 0}`);
    console.log(`   - Best practices: ${fileOps.bestPractices?.length || 0}`);
    console.log(`   - First example title: "${fileOps.examples?.[0]?.title || 'N/A'}"`);
    console.log(`   - First best practice title: "${fileOps.bestPractices?.[0]?.title || 'N/A'}"`);
    
  } catch (error) {
    console.error(`❌ Error applying professional translations for ${langCode}:`, error.message);
  }
}

// Apply professional translations
console.log('🌐 Applying professional translations for major languages...\n');

Object.keys(professionalTranslations).forEach(langCode => {
  const langNames = {
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean'
  };
  
  console.log(`Applying professional translations for ${langNames[langCode]}...`);
  applyProfessionalTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ All professional translations applied!');
console.log('🎯 German, Japanese, and Korean now have native professional content.');
