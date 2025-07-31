const fs = require('fs');
const path = require('path');

// Complete translations for remaining languages
const remainingLanguageTranslations = {
  ja: {
    "title": "プライバシーポリシー",
    "subtitle": "あなたのプライバシーは私たちにとって重要です。このポリシーでは、私たちがあなたの情報をどのように収集、使用、保護するかを説明します。",
    "lastUpdated": "最終更新",
    "introduction": {
      "title": "はじめに",
      "content": "このプライバシーポリシーは、Gemini CLI学習プラットフォームが、あなたが私たちのウェブサイトやサービスを使用する際に、あなたの情報をどのように収集、使用、共有するかを説明しています。私たちはあなたのプライバシーを保護し、データの取り扱いについて透明性を保つことをお約束します。"
    },
    "informationWeCollect": {
      "title": "収集する情報",
      "analytics": {
        "title": "分析情報",
        "description": "私たちはGoogle Analyticsを使用して、訪問者が私たちのウェブサイトとどのように相互作用するかを理解しています。これには以下が含まれます：",
        "items": [
          "訪問したページと各ページでの滞在時間",
          "地理的位置（国/地域レベル）",
          "デバイスとブラウザの情報",
          "参照元（私たちのウェブサイトをどのように見つけたか）",
          "ユーザーの相互作用とナビゲーションパターン"
        ]
      },
      "language": {
        "title": "言語設定",
        "description": "パーソナライズされた体験を提供するために、あなたの言語設定をブラウザにローカルに保存します。この情報は私たちのサーバーに送信されません。"
      },
      "technical": {
        "title": "技術情報",
        "description": "あなたが私たちのウェブサイトを訪問する際に、特定の技術情報を自動的に収集します：",
        "items": [
          "IPアドレス（分析用に匿名化）",
          "ブラウザの種類とバージョン",
          "オペレーティングシステム",
          "画面解像度とデバイスタイプ"
        ]
      }
    },
    "howWeUse": {
      "title": "情報の使用方法",
      "description": "収集した情報を以下の目的で使用します：",
      "items": [
        {
          "title": "ウェブサイト分析",
          "description": "ユーザーの行動を理解し、ウェブサイトのパフォーマンスとユーザーエクスペリエンスを向上させるため"
        },
        {
          "title": "コンテンツ最適化",
          "description": "ユーザーにとって最も価値のあるコンテンツを特定し、教育資料を最適化するため"
        },
        {
          "title": "技術的改善",
          "description": "技術的問題を特定・修正し、読み込み時間を最適化し、デバイス間の互換性を確保するため"
        },
        {
          "title": "言語ローカライゼーション",
          "description": "お好みの言語でコンテンツを提供し、翻訳品質を向上させるため"
        },
        {
          "title": "セキュリティ",
          "description": "ウェブサイトを悪用、スパム、悪意のある活動から保護するため"
        }
      ]
    },
    "informationSharing": {
      "title": "情報の共有",
      "description": "以下の限定的な状況を除き、個人情報を第三者に販売、取引、または譲渡することはありません：",
      "items": [
        {
          "title": "サービスプロバイダー",
          "description": "ウェブサイト分析サービスを提供するために、匿名化された分析データをGoogle Analyticsと共有します"
        },
        {
          "title": "法的要件",
          "description": "法律で要求された場合、または私たちの権利と安全を保護するために情報を開示する場合があります"
        },
        {
          "title": "事業譲渡",
          "description": "合併や買収の場合、ユーザー情報は事業資産の一部として譲渡される可能性があります"
        }
      ]
    },
    "cookies": {
      "title": "Cookieと追跡技術",
      "analytics": {
        "title": "Google Analytics Cookie",
        "description": "使用統計を収集するためにGoogle Analytics Cookieを使用します。これらのCookieは以下を理解するのに役立ちます：",
        "items": [
          "最も人気のあるページ",
          "ユーザーがサイト内をどのようにナビゲートするか",
          "技術的パフォーマンス指標"
        ]
      },
      "localStorage": {
        "title": "ローカルストレージ",
        "description": "あなたの言語設定を記憶し、より良いユーザーエクスペリエンスを提供するために、ブラウザのローカルストレージを使用します。このデータはあなたのデバイスに残り、私たちのサーバーに送信されません。"
      }
    },
    "yourRights": {
      "title": "あなたの権利と選択",
      "description": "あなたの情報に関していくつかの権利があります：",
      "items": [
        {
          "title": "分析のオプトアウト",
          "description": "ブラウザ拡張機能を使用するか、ブラウザ設定を調整することで、Google Analytics追跡をオプトアウトできます"
        },
        {
          "title": "ローカルデータの削除",
          "description": "ブラウザのローカルストレージをクリアすることで、言語設定やその他のローカルデータを削除できます"
        },
        {
          "title": "情報へのアクセス",
          "description": "私たちがあなたについて収集したデータに関する情報を要求できます"
        },
        {
          "title": "お問い合わせ",
          "description": "プライバシーに関する質問や懸念について私たちに連絡できます"
        }
      ]
    },
    "dataSecurity": {
      "title": "データセキュリティ",
      "description": "あなたの情報を保護するために適切なセキュリティ対策を実装しています：",
      "items": [
        "すべてのウェブサイト通信のHTTPS暗号化",
        "定期的なセキュリティ更新と監視",
        "収集されたデータへの限定的なアクセス",
        "安全なホスティングインフラストラクチャ"
      ]
    },
    "thirdParty": {
      "title": "第三者サービス",
      "googleAnalytics": {
        "title": "Google Analytics",
        "description": "私たちのウェブサイトは、Google Inc.が提供するウェブ分析サービスであるGoogle Analyticsを使用しています。Google Analyticsは、ユーザーがサイトをどのように使用するかを分析するためにCookieを使用します。",
        "moreInfo": "Googleのプライバシー慣行の詳細については、以下をご覧ください：",
        "linkText": "Googleプライバシーポリシー"
      },
      "externalLinks": {
        "title": "外部リンク",
        "description": "私たちのウェブサイトには外部サイトへのリンクが含まれている場合があります。これらの外部ウェブサイトのプライバシー慣行については責任を負いません。それらのプライバシーポリシーを読むことをお勧めします。"
      }
    },
    "childrens": {
      "title": "子供のプライバシー",
      "description": "私たちのウェブサイトは13歳未満の子供を対象としていません。13歳未満の子供から故意に個人情報を収集することはありません。あなたが親または保護者で、お子様が私たちに個人情報を提供したと思われる場合は、私たちにご連絡ください。"
    },
    "changes": {
      "title": "このプライバシーポリシーの変更",
      "description": "このプライバシーポリシーを随時更新する場合があります。このページに新しいプライバシーポリシーを投稿し、「最終更新」日付を更新することで、変更をお知らせします。変更について定期的にこのプライバシーポリシーを確認することをお勧めします。"
    },
    "contact": {
      "title": "連絡先情報",
      "description": "このプライバシーポリシーまたは私たちのプライバシー慣行について質問がある場合は、私たちにご連絡ください：",
      "email": "メール",
      "github": "GitHub",
      "website": "ウェブサイト",
      "contactForm": "お問い合わせフォーム",
      "reportIssues": "問題を報告"
    },
    "cta": {
      "title": "プライバシーポリシーについて質問がありますか？",
      "description": "私たちのプライバシー慣行について質問がある場合は、お気軽にお問い合わせください。",
      "contactUs": "お問い合わせ"
    }
  }
};

// Function to completely replace privacy section
function replacePrivacySection(lang, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  try {
    // Read existing file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Replace the entire privacy section
    data.privacy = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Replaced complete privacy section for ${lang}`);
    
  } catch (error) {
    console.error(`✗ Error updating ${lang}:`, error.message);
  }
}

// Replace privacy section for remaining languages
console.log('Replacing complete privacy translations for remaining languages...');
Object.keys(remainingLanguageTranslations).forEach(lang => {
  replacePrivacySection(lang, remainingLanguageTranslations[lang]);
});
console.log('Complete privacy translation replacement completed!');
