const fs = require('fs');
const path = require('path');

// Advanced config translations for remaining languages
const remainingAdvancedConfigTranslations = {
  ja: {
    "hero": {
      "title": "高度な設定オプション",
      "subtitle": "Gemini CLIの高度な設定とカスタマイズオプションを詳しく学ぶ",
      "advanced": "高度",
      "readingTime": "30分で読める"
    },
    "overview": {
      "title": "設定概要",
      "description": "TOMLコンフィグファイル、環境変数、カスタム設定など、Gemini CLIの高度な設定オプションをマスターしましょう。"
    },
    "configSectionsTitle": "設定ファイル構造",
    "configSectionsDescription": "異なる設定セクションとその設定について学ぶ",
    "location": "場所",
    "structure": "構造",
    "explanation": "説明",
    "options": "オプション",
    "configSections": [
      {
        "id": "toml-config",
        "title": "TOML設定ファイル",
        "description": "詳細な設定にはgemini.tomlファイルを使用",
        "color": "from-blue-500 to-indigo-600",
        "content": {
          "location": "設定ファイルの場所：プロジェクトルートディレクトリのgemini.toml",
          "structure": `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"`,
          "explanation": "TOMLファイルにより、Gemini CLIのすべての側面を構造化され読みやすい形で設定できます。"
        }
      },
      {
        "id": "env-vars",
        "title": "環境変数",
        "description": "環境変数による迅速な設定",
        "color": "from-green-500 to-emerald-600",
        "content": {
          "explanation": "環境変数により迅速で柔軟な設定が可能",
          "options": [
            "GEMINI_API_KEY: 認証用APIキー",
            "GEMINI_MODEL: 使用するデフォルトモデル",
            "GEMINI_TEMPERATURE: 創造性パラメータ",
            "GEMINI_MAX_TOKENS: 最大トークン数",
            "GEMINI_CONFIG_PATH: 設定ファイルパス"
          ]
        }
      },
      {
        "id": "model-config",
        "title": "モデル設定",
        "description": "AIモデル固有の設定",
        "color": "from-indigo-500 to-purple-600",
        "content": {
          "explanation": "AIモデルの動作とパフォーマンスを制御",
          "options": [
            "provider: モデルプロバイダー (google, openai)",
            "name: 特定のモデル名",
            "temperature: 創造性 (0.0-2.0)",
            "max_tokens: 出力トークン制限",
            "top_p: ニュークリアスサンプリング",
            "frequency_penalty: 頻度ペナルティ"
          ]
        }
      },
      {
        "id": "ui-config",
        "title": "UI設定",
        "description": "ユーザーインターフェースと操作体験をカスタマイズ",
        "color": "from-purple-500 to-pink-600",
        "content": {
          "explanation": "CLIインターフェースの表示と操作を調整",
          "options": [
            "theme: テーマカラー (light, dark, auto)",
            "show_token_count: トークンカウンターを表示",
            "auto_save_history: 履歴の自動保存",
            "syntax_highlighting: シンタックスハイライト",
            "line_numbers: 行番号を表示",
            "word_wrap: 自動改行"
          ]
        }
      },
      {
        "id": "tools-config",
        "title": "ツール設定",
        "description": "様々なツール機能を有効化・設定",
        "color": "from-orange-500 to-red-600",
        "content": {
          "explanation": "CLIツールの機能と権限を制御",
          "options": [
            "enable_shell: シェルコマンド実行を有効化",
            "enable_file_operations: ファイル操作を有効化",
            "max_file_size: 最大ファイルサイズ",
            "allowed_extensions: 許可されるファイル拡張子",
            "blocked_commands: 禁止コマンドリスト",
            "timeout: 実行タイムアウト"
          ]
        }
      },
      {
        "id": "security-config",
        "title": "セキュリティ設定",
        "description": "セキュリティとアクセス制御設定",
        "color": "from-red-500 to-pink-600",
        "content": {
          "explanation": "セキュリティ対策とアクセス制御を設定",
          "options": [
            "enable_audit_log: 監査ログを有効化",
            "restrict_file_access: ファイルアクセスを制限",
            "allowed_directories: 許可されるディレクトリ",
            "require_confirmation: 確認を要求",
            "session_timeout: セッションタイムアウト",
            "max_concurrent_sessions: 最大同時セッション数"
          ]
        }
      }
    ],
    "environmentVariablesTitle": "環境変数",
    "environmentVariablesDescription": "環境変数による迅速な設定",
    "defaultValue": "デフォルト値",
    "none": "なし",
    "environmentVariables": [
      {
        "name": "GEMINI_API_KEY",
        "description": "認証用Google Gemini APIキー",
        "example": "export GEMINI_API_KEY=your_api_key_here",
        "default": null
      },
      {
        "name": "GEMINI_MODEL",
        "description": "使用するデフォルトモデル名",
        "example": "export GEMINI_MODEL=gemini-1.5-pro",
        "default": "gemini-1.5-flash"
      },
      {
        "name": "GEMINI_TEMPERATURE",
        "description": "モデルの創造性パラメータ",
        "example": "export GEMINI_TEMPERATURE=0.7",
        "default": "0.9"
      },
      {
        "name": "GEMINI_MAX_TOKENS",
        "description": "最大出力トークン数",
        "example": "export GEMINI_MAX_TOKENS=8192",
        "default": "4096"
      },
      {
        "name": "GEMINI_CONFIG_PATH",
        "description": "カスタム設定ファイルパス",
        "example": "export GEMINI_CONFIG_PATH=/path/to/config.toml",
        "default": "./gemini.toml"
      }
    ],
    "customizationTitle": "カスタマイズオプション",
    "customizationDescription": "異なる使用ケースに対応した個人設定",
    "customizationOptions": [
      {
        "title": "開発環境",
        "description": "開発ワークフロー向けの最適化設定",
        "features": [
          "コードシンタックスハイライトを有効化",
          "セッション履歴の自動保存",
          "バージョン管理システムとの統合",
          "カスタムコードテンプレート",
          "クイックコマンドエイリアス"
        ]
      },
      {
        "title": "本番環境",
        "description": "本番環境向けのセキュリティ設定",
        "features": [
          "ファイル操作権限の制限",
          "危険なコマンドの無効化",
          "監査ログの有効化",
          "リソース使用制限の設定",
          "バックアップ戦略の設定"
        ]
      },
      {
        "title": "チーム協業設定",
        "description": "チーム協業のための共有設定",
        "features": [
          "統一設定テンプレート",
          "共有プロンプトライブラリ",
          "チーム使用統計",
          "権限管理",
          "設定同期"
        ]
      }
    ],
    "bestPracticesTitle": "ベストプラクティス",
    "bestPracticesDescription": "最適な設定のための推奨事項",
    "bestPractices": [
      {
        "title": "設定管理",
        "description": "設定ファイルの整理と保守",
        "tips": [
          "設定ファイルにバージョン管理を使用",
          "設定変更を文書化",
          "開発環境で設定をテスト",
          "設定を定期的にバックアップ"
        ]
      },
      {
        "title": "パフォーマンス最適化",
        "description": "最適なパフォーマンスのための設定",
        "tips": [
          "ニーズに応じてモデルパラメータを調整",
          "リソース使用量を監視",
          "データ転送効率を最適化",
          "適切なタイムアウトを設定"
        ]
      },
      {
        "title": "デバッグのヒント",
        "description": "デバッグを容易にする設定",
        "tips": [
          "詳細ログモードを使用",
          "サーバーステータスを確認",
          "設定ファイル形式を検証",
          "環境変数をテスト"
        ]
      }
    ],
    "nextSteps": {
      "title": "次のステップ",
      "description": "高度な設定を理解したので、より高度な設定と統合方法を学習できます：",
      "integration": "統合ガイド",
      "troubleshooting": "トラブルシューティング",
      "backToGuides": "ガイドに戻る"
    }
  },
  ko: {
    "hero": {
      "title": "고급 설정 옵션",
      "subtitle": "Gemini CLI의 고급 설정 및 사용자 정의 옵션에 대해 자세히 알아보기",
      "advanced": "고급",
      "readingTime": "30분 읽기"
    },
    "overview": {
      "title": "설정 개요",
      "description": "TOML 설정 파일, 환경 변수, 사용자 정의 설정 등을 포함한 Gemini CLI의 고급 설정 옵션을 마스터하세요."
    },
    "configSectionsTitle": "설정 파일 구조",
    "configSectionsDescription": "다양한 설정 섹션과 그 설정에 대해 알아보기",
    "location": "위치",
    "structure": "구조",
    "explanation": "설명",
    "options": "옵션",
    "configSections": [
      {
        "id": "toml-config",
        "title": "TOML 설정 파일",
        "description": "상세한 설정을 위해 gemini.toml 파일 사용",
        "color": "from-blue-500 to-indigo-600",
        "content": {
          "location": "설정 파일 위치: 프로젝트 루트 디렉토리의 gemini.toml",
          "structure": `[model]
provider = "google"
name = "gemini-1.5-pro"
temperature = 0.7
max_tokens = 8192

[ui]
theme = "dark"
show_token_count = true
auto_save_history = true

[tools]
enable_shell = true
enable_file_operations = true
max_file_size = "10MB"`,
          "explanation": "TOML 파일을 통해 Gemini CLI의 모든 측면을 구조화되고 읽기 쉬운 방식으로 설정할 수 있습니다."
        }
      },
      {
        "id": "env-vars",
        "title": "환경 변수",
        "description": "환경 변수를 통한 빠른 설정",
        "color": "from-green-500 to-emerald-600",
        "content": {
          "explanation": "환경 변수를 통해 빠르고 유연한 설정이 가능합니다",
          "options": [
            "GEMINI_API_KEY: 인증용 API 키",
            "GEMINI_MODEL: 사용할 기본 모델",
            "GEMINI_TEMPERATURE: 창의성 매개변수",
            "GEMINI_MAX_TOKENS: 최대 토큰 수",
            "GEMINI_CONFIG_PATH: 설정 파일 경로"
          ]
        }
      },
      {
        "id": "model-config",
        "title": "모델 설정",
        "description": "AI 모델별 설정",
        "color": "from-indigo-500 to-purple-600",
        "content": {
          "explanation": "AI 모델의 동작과 성능을 제어합니다",
          "options": [
            "provider: 모델 제공업체 (google, openai)",
            "name: 특정 모델 이름",
            "temperature: 창의성 (0.0-2.0)",
            "max_tokens: 출력 토큰 제한",
            "top_p: 핵 샘플링",
            "frequency_penalty: 빈도 페널티"
          ]
        }
      },
      {
        "id": "ui-config",
        "title": "UI 설정",
        "description": "사용자 인터페이스 및 상호작용 경험 사용자 정의",
        "color": "from-purple-500 to-pink-600",
        "content": {
          "explanation": "CLI 인터페이스의 표시 및 상호작용을 조정합니다",
          "options": [
            "theme: 테마 색상 (light, dark, auto)",
            "show_token_count: 토큰 카운터 표시",
            "auto_save_history: 자동 히스토리 저장",
            "syntax_highlighting: 구문 강조",
            "line_numbers: 줄 번호 표시",
            "word_wrap: 자동 줄 바꿈"
          ]
        }
      },
      {
        "id": "tools-config",
        "title": "도구 설정",
        "description": "다양한 도구 기능 활성화 및 설정",
        "color": "from-orange-500 to-red-600",
        "content": {
          "explanation": "CLI 도구 기능과 권한을 제어합니다",
          "options": [
            "enable_shell: 셸 명령 실행 활성화",
            "enable_file_operations: 파일 작업 활성화",
            "max_file_size: 최대 파일 크기",
            "allowed_extensions: 허용되는 파일 확장자",
            "blocked_commands: 차단된 명령 목록",
            "timeout: 실행 타임아웃"
          ]
        }
      },
      {
        "id": "security-config",
        "title": "보안 설정",
        "description": "보안 및 접근 제어 설정",
        "color": "from-red-500 to-pink-600",
        "content": {
          "explanation": "보안 조치 및 접근 제어를 설정합니다",
          "options": [
            "enable_audit_log: 감사 로그 활성화",
            "restrict_file_access: 파일 접근 제한",
            "allowed_directories: 허용되는 디렉토리",
            "require_confirmation: 확인 필요",
            "session_timeout: 세션 타임아웃",
            "max_concurrent_sessions: 최대 동시 세션 수"
          ]
        }
      }
    ],
    "environmentVariablesTitle": "환경 변수",
    "environmentVariablesDescription": "환경 변수를 통한 빠른 설정",
    "defaultValue": "기본값",
    "none": "없음",
    "environmentVariables": [
      {
        "name": "GEMINI_API_KEY",
        "description": "인증용 Google Gemini API 키",
        "example": "export GEMINI_API_KEY=your_api_key_here",
        "default": null
      },
      {
        "name": "GEMINI_MODEL",
        "description": "사용할 기본 모델 이름",
        "example": "export GEMINI_MODEL=gemini-1.5-pro",
        "default": "gemini-1.5-flash"
      },
      {
        "name": "GEMINI_TEMPERATURE",
        "description": "모델 창의성 매개변수",
        "example": "export GEMINI_TEMPERATURE=0.7",
        "default": "0.9"
      },
      {
        "name": "GEMINI_MAX_TOKENS",
        "description": "최대 출력 토큰 수",
        "example": "export GEMINI_MAX_TOKENS=8192",
        "default": "4096"
      },
      {
        "name": "GEMINI_CONFIG_PATH",
        "description": "사용자 정의 설정 파일 경로",
        "example": "export GEMINI_CONFIG_PATH=/path/to/config.toml",
        "default": "./gemini.toml"
      }
    ],
    "customizationTitle": "사용자 정의 옵션",
    "customizationDescription": "다양한 사용 사례에 맞는 개인화된 설정",
    "customizationOptions": [
      {
        "title": "개발 환경",
        "description": "개발 워크플로우에 최적화된 설정",
        "features": [
          "코드 구문 강조 활성화",
          "세션 히스토리 자동 저장",
          "버전 제어 시스템 통합",
          "사용자 정의 코드 템플릿",
          "빠른 명령 별칭"
        ]
      },
      {
        "title": "프로덕션 환경",
        "description": "프로덕션 환경을 위한 보안 설정",
        "features": [
          "파일 작업 권한 제한",
          "위험한 명령 비활성화",
          "감사 로깅 활성화",
          "리소스 사용 제한 설정",
          "백업 전략 구성"
        ]
      },
      {
        "title": "팀 협업 설정",
        "description": "팀 협업을 위한 공유 설정",
        "features": [
          "통합 설정 템플릿",
          "공유 프롬프트 라이브러리",
          "팀 사용 통계",
          "권한 관리",
          "설정 동기화"
        ]
      }
    ],
    "bestPracticesTitle": "모범 사례",
    "bestPracticesDescription": "최적 설정을 위한 권장사항",
    "bestPractices": [
      {
        "title": "설정 관리",
        "description": "설정 파일 정리 및 유지보수",
        "tips": [
          "설정 파일에 버전 제어 사용",
          "설정 변경사항 문서화",
          "개발 환경에서 설정 테스트",
          "설정을 정기적으로 백업"
        ]
      },
      {
        "title": "성능 최적화",
        "description": "최적 성능을 위한 설정",
        "tips": [
          "필요에 따라 모델 매개변수 조정",
          "리소스 사용량 모니터링",
          "데이터 전송 효율성 최적화",
          "적절한 타임아웃 설정"
        ]
      },
      {
        "title": "디버깅 팁",
        "description": "디버깅을 용이하게 하는 설정",
        "tips": [
          "상세 로깅 모드 사용",
          "서버 상태 확인",
          "설정 파일 형식 검증",
          "환경 변수 테스트"
        ]
      }
    ],
    "nextSteps": {
      "title": "다음 단계",
      "description": "고급 설정을 이해했으므로 더 고급 설정 및 통합 방법을 학습할 수 있습니다:",
      "integration": "통합 가이드",
      "troubleshooting": "문제 해결",
      "backToGuides": "가이드로 돌아가기"
    }
  }
};

// Function to apply advanced config translations
function applyAdvancedConfigTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = remainingAdvancedConfigTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No advanced config translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesAdvancedConfig with professional translation
    data.guidesAdvancedConfig = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied advanced config translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const advancedConfig = newData.guidesAdvancedConfig;
    console.log(`   - Hero title: "${advancedConfig?.hero?.title || 'N/A'}"`);
    console.log(`   - Config sections: ${advancedConfig?.configSections?.length || 0}`);
    console.log(`   - Environment variables: ${advancedConfig?.environmentVariables?.length || 0}`);
    console.log(`   - Customization options: ${advancedConfig?.customizationOptions?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying advanced config translations for ${langCode}:`, error.message);
  }
}

// Apply advanced config translations
console.log('🚀 Applying professional advanced config translations for remaining languages...\n');

Object.keys(remainingAdvancedConfigTranslations).forEach(langCode => {
  const langNames = {
    ja: 'Japanese',
    ko: 'Korean'
  };
  
  console.log(`Applying advanced config translations for ${langNames[langCode]}...`);
  applyAdvancedConfigTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional advanced config translations applied!');
console.log('🎯 Japanese and Korean now have complete professional content.');
