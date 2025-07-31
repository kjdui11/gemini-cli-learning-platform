const fs = require('fs');
const path = require('path');

// Additional FAQ translations for remaining languages (Japanese, Korean, Spanish, Russian)
const additionalTranslations = {
  ja: {
    title: 'よくある質問',
    subtitle: 'Gemini CLIの使用に関する一般的な質問と解決策。問題解決に役立つ迅速な回答を見つけてください。',
    quickNav: {
      title: 'クイックナビゲーション',
      subtitle: '答えが見つかりませんか？これらのリソースをお試しください',
      links: {
        installation: { title: 'インストールガイド', desc: '詳細なインストール手順' },
        guides: { title: 'ユーザーガイド', desc: '初心者から上級者まで' },
        commands: { title: 'コマンドリファレンス', desc: '完全なコマンドリスト' },
        issues: { title: '問題を報告', desc: 'GitHub Issues' }
      }
    },
    contact: {
      title: '他にご質問はありますか？',
      subtitle: '回答が見つからない場合は、以下の方法でお気軽にお問い合わせください',
      discussion: 'コミュニティディスカッション',
      submit: '問題を提出'
    },
    faqData: [
      {
        category: 'インストールとセットアップ',
        questions: [
          {
            q: 'Gemini CLIをインストールするには？',
            a: 'Node.js 20+がインストールされていることを確認し、直接実行するためにnpx @google/generative-ai-cliを使用するか、グローバルインストールのためにnpm install -g @google/generative-ai-cliを使用してください。'
          },
          {
            q: 'インストール中に権限エラーが発生した場合の対処法は？',
            a: 'Windowsユーザーは管理者として実行し、macOS/Linuxユーザーはsudoを使用するか、npmグローバルディレクトリをユーザーディレクトリに設定してください。権限問題を避けるためにnpxの使用が推奨されます。'
          },
          {
            q: 'Googleアカウント認証を設定するには？',
            a: 'npx @google/generative-ai-cli authを実行し、ブラウザでGoogleアカウントにログインしてアクセスを承認し、auth statusを使用して認証状態を確認してください。'
          }
        ]
      },
      {
        category: '使用上の問題',
        questions: [
          {
            q: '最初の会話を始めるには？',
            a: 'インタラクティブな会話を開始するためにnpx @google/generative-ai-cli chatを使用するか、直接質問するためにask "質問"を使用し、ファイルを分析するためにanalyzeコマンドも使用できます。'
          },
          {
            q: 'どのプログラミング言語がサポートされていますか？',
            a: 'Gemini CLIは、JavaScript/TypeScript、Python、Java、C#、Go、Rust、PHP、Rubyなどの主流プログラミング言語、およびHTML/CSS、SQL、Markdownなどをサポートしています。'
          },
          {
            q: 'AI応答の品質を向上させるには？',
            a: '明確なコンテキストを提供し、具体的な質問記述を使用し、複雑な質問を段階的に尋ね、生成された結果を検証し反復してください。'
          }
        ]
      },
      {
        category: '設定とカスタマイズ',
        questions: [
          {
            q: 'CLI設定をカスタマイズするには？',
            a: '設定を表示するためにconfig listを使用し、パラメータを設定するためにconfig set（モデル、温度、最大トークンなど）を使用し、デフォルト値にリセットするためにconfig resetを使用してください。'
          },
          {
            q: '既存のワークフローに統合するには？',
            a: 'スクリプト統合、Git Hooks、CI/CDパイプライン統合を通じて、またはエディタでカスタムショートカットとタスクを作成することで統合できます。'
          },
          {
            q: '機能を拡張するためにMCPプロトコルを使用するには？',
            a: 'MCPは標準化されたAIモデル通信プロトコルで、データベースクエリ、API呼び出し、ファイル操作などのカスタムツール統合をサポートします。'
          }
        ]
      },
      {
        category: 'トラブルシューティング',
        questions: [
          {
            q: 'コマンドが失敗したり応答しなくなったりした場合の対処法は？',
            a: 'ネットワーク接続を確認し、認証状態を検証し、最新バージョンに更新し、npmキャッシュをクリアし、詳細なエラー情報を見るために--verboseを使用してください。'
          },
          {
            q: 'APIクォータや制限の問題を解決するには？',
            a: '制限タイプを理解し、使用頻度とプロンプトの精度を最適化し、Google AI Studioで使用状況を確認し、有料プランへのアップグレードを検討してください。'
          },
          {
            q: 'エンタープライズ使用での考慮事項は？',
            a: 'セキュリティに注意し（機密情報を含めない）、ネットワークプロキシを設定し、コンプライアンスを確保し、チーム使用ガイドラインとベストプラクティスを確立してください。'
          }
        ]
      }
    ]
  },
  ko: {
    title: '자주 묻는 질문',
    subtitle: 'Gemini CLI 사용에 대한 일반적인 질문과 해결책. 문제 해결에 도움이 되는 빠른 답변을 찾아보세요.',
    quickNav: {
      title: '빠른 탐색',
      subtitle: '답을 찾지 못하셨나요? 이 리소스들을 시도해보세요',
      links: {
        installation: { title: '설치 가이드', desc: '자세한 설치 단계' },
        guides: { title: '사용자 가이드', desc: '초급부터 고급까지' },
        commands: { title: '명령어 참조', desc: '완전한 명령어 목록' },
        issues: { title: '문제 신고', desc: 'GitHub Issues' }
      }
    },
    contact: {
      title: '다른 질문이 있으신가요?',
      subtitle: '답변을 찾지 못하셨다면, 다음 방법으로 언제든지 문의해 주세요',
      discussion: '커뮤니티 토론',
      submit: '문제 제출'
    },
    faqData: [
      {
        category: '설치 및 설정',
        questions: [
          {
            q: 'Gemini CLI를 설치하는 방법은?',
            a: 'Node.js 20+가 설치되어 있는지 확인한 후, 직접 실행하려면 npx @google/generative-ai-cli를 사용하거나, 전역 설치를 위해 npm install -g @google/generative-ai-cli를 사용하세요.'
          },
          {
            q: '설치 중 권한 오류가 발생할 때 어떻게 해야 하나요?',
            a: 'Windows 사용자는 관리자 권한으로 실행하고, macOS/Linux 사용자는 sudo를 사용하거나 npm 전역 디렉토리를 사용자 디렉토리로 구성하세요. 권한 문제를 피하기 위해 npx 사용을 권장합니다.'
          },
          {
            q: 'Google 계정 인증을 구성하는 방법은?',
            a: 'npx @google/generative-ai-cli auth를 실행하고, 브라우저에서 Google 계정에 로그인하여 액세스를 승인한 후, auth status를 사용하여 인증 상태를 확인하세요.'
          }
        ]
      },
      {
        category: '사용 문제',
        questions: [
          {
            q: '첫 번째 대화를 시작하는 방법은?',
            a: '대화형 대화를 시작하려면 npx @google/generative-ai-cli chat을 사용하거나, 직접 질문하려면 ask "질문"을 사용하고, 파일을 분석하려면 analyze 명령을 사용할 수도 있습니다.'
          },
          {
            q: '어떤 프로그래밍 언어가 지원되나요?',
            a: 'Gemini CLI는 JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby와 같은 주류 프로그래밍 언어와 HTML/CSS, SQL, Markdown 등을 지원합니다.'
          },
          {
            q: 'AI 응답 품질을 향상시키는 방법은?',
            a: '명확한 컨텍스트를 제공하고, 구체적인 질문 설명을 사용하며, 복잡한 질문을 단계별로 나누어 묻고, 생성된 결과를 검증하고 반복하세요.'
          }
        ]
      },
      {
        category: '구성 및 사용자 정의',
        questions: [
          {
            q: 'CLI 구성을 사용자 정의하는 방법은?',
            a: '구성을 보려면 config list를 사용하고, 매개변수를 설정하려면 config set(모델, 온도, 최대 토큰 등)을 사용하며, 기본값으로 재설정하려면 config reset을 사용하세요.'
          },
          {
            q: '기존 워크플로우에 통합하는 방법은?',
            a: '스크립트 통합, Git Hooks, CI/CD 파이프라인 통합을 통해 또는 편집기에서 사용자 정의 단축키와 작업을 생성하여 통합할 수 있습니다.'
          },
          {
            q: '기능을 확장하기 위해 MCP 프로토콜을 사용하는 방법은?',
            a: 'MCP는 데이터베이스 쿼리, API 호출, 파일 작업과 같은 사용자 정의 도구 통합을 지원하는 표준화된 AI 모델 통신 프로토콜입니다.'
          }
        ]
      },
      {
        category: '문제 해결',
        questions: [
          {
            q: '명령이 실패하거나 응답하지 않을 때 어떻게 해야 하나요?',
            a: '네트워크 연결을 확인하고, 인증 상태를 검증하며, 최신 버전으로 업데이트하고, npm 캐시를 지우며, 자세한 오류 정보를 보려면 --verbose를 사용하세요.'
          },
          {
            q: 'API 할당량이나 제한 문제를 해결하는 방법은?',
            a: '제한 유형을 이해하고, 사용 빈도와 프롬프트 정확도를 최적화하며, Google AI Studio에서 사용량을 확인하고, 유료 플랜으로 업그레이드를 고려하세요.'
          },
          {
            q: '기업 환경에서 사용할 때의 고려사항은?',
            a: '보안에 주의하고(민감한 정보 포함 금지), 네트워크 프록시를 구성하며, 규정 준수를 보장하고, 팀 사용 가이드라인과 모범 사례를 수립하세요.'
          }
        ]
      }
    ]
  }
};

// Function to add translations to FAQContent component
function addFAQTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', 'FAQContent.tsx');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the position to insert new translations (before the closing bracket of translations object)
    const insertPosition = content.lastIndexOf('    }\n    return translations[locale] || translations.en');
    
    if (insertPosition === -1) {
      console.error('❌ Could not find insertion point in FAQContent.tsx');
      return;
    }
    
    // Generate translation strings for each language
    let translationStrings = '';
    
    Object.keys(additionalTranslations).forEach(langCode => {
      const translation = additionalTranslations[langCode];
      translationStrings += `,\n      ${langCode}: ${JSON.stringify(translation, null, 8).replace(/^/gm, '      ').trim()}`;
    });
    
    // Insert the new translations
    const beforeInsert = content.substring(0, insertPosition);
    const afterInsert = content.substring(insertPosition);
    
    const newContent = beforeInsert + translationStrings + '\n' + afterInsert;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('✅ Successfully added Japanese and Korean FAQ translations');
    
  } catch (error) {
    console.error('❌ Error adding FAQ translations:', error.message);
  }
}

// Run the function
console.log('🚀 Adding FAQ translations for Japanese and Korean...\n');
addFAQTranslations();
console.log('\n🎯 FAQ translations update completed!');
