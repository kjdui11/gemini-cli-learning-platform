const fs = require('fs');
const path = require('path');

// Japanese translations for new pages
const japaneseTranslations = {
  about: {
    title: "私たちについて",
    subtitle: "Gemini CLI学習プラットフォームについて",
    mission: {
      title: "私たちの使命",
      description: "Gemini CLIの力を開発者に提供し、AI駆動開発の未来を形作ることです。"
    },
    story: {
      title: "私たちのストーリー",
      description: "Gemini CLIが開発者コミュニティに革命をもたらす方法を発見してください。"
    },
    team: {
      title: "私たちのチーム",
      description: "Gemini CLI学習プラットフォームを支える情熱的な開発者たち。"
    },
    values: {
      title: "私たちの価値観",
      items: [
        {
          title: "オープンソース",
          description: "透明性とコミュニティ主導の開発を信じています。"
        },
        {
          title: "イノベーション",
          description: "AI技術の最前線で革新を続けています。"
        },
        {
          title: "教育",
          description: "知識の共有と学習の促進に取り組んでいます。"
        }
      ]
    }
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "ご質問やフィードバックをお聞かせください",
    form: {
      name: "お名前",
      email: "メールアドレス",
      subject: "件名",
      message: "メッセージ",
      submit: "送信"
    },
    info: {
      title: "連絡先情報",
      email: "メール",
      response: "24時間以内に返信いたします"
    },
    support: {
      title: "サポート",
      description: "技術的な問題やバグ報告については、GitHubのIssuesをご利用ください。"
    }
  },
  privacy: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日",
    sections: [
      {
        title: "情報の収集",
        content: "当サイトでは、サービス向上のために最小限の情報を収集します。"
      },
      {
        title: "情報の使用",
        content: "収集した情報は、サービスの提供と改善のためにのみ使用されます。"
      },
      {
        title: "情報の保護",
        content: "お客様の個人情報は適切なセキュリティ対策により保護されています。"
      }
    ]
  },
  terms: {
    title: "利用規約",
    lastUpdated: "最終更新日",
    sections: [
      {
        title: "サービスの利用",
        content: "本サービスは教育目的で提供されており、適切な利用が求められます。"
      },
      {
        title: "知的財産権",
        content: "コンテンツの著作権は当プラットフォームまたは各権利者に帰属します。"
      },
      {
        title: "免責事項",
        content: "サービスの利用により生じた損害について、当方は責任を負いません。"
      }
    ]
  },
  guidesAdvanced: {
    title: "高度なガイド",
    subtitle: "Gemini CLIの高度な機能をマスターしよう",
    sections: [
      {
        title: "高度な設定",
        description: "カスタム設定とワークフローの最適化"
      },
      {
        title: "自動化",
        description: "タスクの自動化とスクリプト作成"
      },
      {
        title: "統合",
        description: "他のツールやサービスとの統合"
      }
    ]
  },
  guidesExamples: {
    title: "実用例",
    subtitle: "実際のプロジェクトでGemini CLIを活用する方法",
    examples: [
      {
        title: "Webアプリケーション開発",
        description: "Gemini CLIを使用したモダンWebアプリの構築"
      },
      {
        title: "データ分析",
        description: "AIを活用したデータ分析ワークフロー"
      },
      {
        title: "コード生成",
        description: "自動コード生成とリファクタリング"
      }
    ]
  }
};

// Read current Japanese translations
const jaPath = path.join(__dirname, '../src/messages/ja.json');
const jaContent = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

// Add new translations
Object.assign(jaContent, japaneseTranslations);

// Write back to file
fs.writeFileSync(jaPath, JSON.stringify(jaContent, null, 2), 'utf8');

console.log('Japanese translations added successfully!');
