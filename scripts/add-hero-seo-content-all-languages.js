const fs = require('fs');
const path = require('path');

// 语言列表（排除已经手动更新的德语和法语）
const languages = [
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'es', name: 'Spanish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ru', name: 'Russian' }
];

// Hero section SEO内容翻译
const heroSeoTranslations = {
  ja: {
    title: { part1: "マスターする", part2: "Gemini CLI" },
    subtitle: "開発者の働き方を変革するAI駆動のコマンドラインツール",
    description: "ツール間の切り替えをやめましょう。Gemini CLIはGoogleの最先端AIを直接ターミナルに導入 - 大規模なコードベースを分析し、スケッチからコードを生成し、ワークフローを自動化し、1M+トークンコンテキストウィンドウで開発を加速します。",
    problemStatement: "IDE、ブラウザ、AIツール間のコンテキスト切り替えに疲れましたか？",
    solutionStatement: "一つのターミナル。無制限のAIパワー。完全なワークフロー自動化。",
    getStarted: "無料で始める",
    learnMore: "ドキュメントを見る",
    badge: { text: "🚀 Googleの公式オープンソースAIエージェント" },
    useCases: {
      title: "以下が必要な開発者に最適：",
      cases: [
        "大規模なコードベースを迅速に分析",
        "PDFやスケッチからコードを生成",
        "反復的な開発タスクを自動化",
        "ターミナルを離れることなくAIサポートを取得"
      ]
    },
    trustSignals: {
      title: "世界中の開発者に信頼されています",
      subtitle: "すでにGemini CLIを使用している数千人の開発者に参加しましょう",
      cta: "無料で始める - サインアップ不要"
    }
  },
  ko: {
    title: { part1: "마스터하세요", part2: "Gemini CLI" },
    subtitle: "개발자의 작업 방식을 변화시키는 AI 기반 명령줄 도구",
    description: "도구 간 전환을 멈추세요. Gemini CLI는 Google의 가장 진보된 AI를 터미널에 직접 제공합니다 - 대규모 코드베이스를 분석하고, 스케치에서 코드를 생성하며, 워크플로를 자동화하고, 1M+ 토큰 컨텍스트 창으로 개발을 가속화합니다.",
    problemStatement: "IDE, 브라우저, AI 도구 간의 컨텍스트 전환에 지치셨나요?",
    solutionStatement: "하나의 터미널. 무제한 AI 파워. 완전한 워크플로 자동화.",
    getStarted: "무료로 시작",
    learnMore: "문서 보기",
    badge: { text: "🚀 Google의 공식 오픈소스 AI 에이전트" },
    useCases: {
      title: "다음이 필요한 개발자에게 완벽:",
      cases: [
        "대규모 코드베이스를 빠르게 분석",
        "PDF나 스케치에서 코드 생성",
        "반복적인 개발 작업 자동화",
        "터미널을 떠나지 않고 AI 지원 받기"
      ]
    },
    trustSignals: {
      title: "전 세계 개발자들의 신뢰",
      subtitle: "이미 Gemini CLI를 사용하고 있는 수천 명의 개발자와 함께하세요",
      cta: "무료로 시작 - 가입 불필요"
    }
  },
  es: {
    title: { part1: "Domina", part2: "Gemini CLI" },
    subtitle: "La herramienta de línea de comandos impulsada por IA que transforma cómo trabajan los desarrolladores",
    description: "Deja de cambiar entre herramientas. Gemini CLI trae la IA más avanzada de Google directamente a tu terminal - analiza bases de código masivas, genera código desde bocetos, automatiza flujos de trabajo y acelera el desarrollo con ventanas de contexto de 1M+ tokens.",
    problemStatement: "¿Cansado de cambiar contexto entre IDE, navegador y herramientas de IA?",
    solutionStatement: "Una terminal. Poder de IA ilimitado. Automatización completa del flujo de trabajo.",
    getStarted: "Comenzar gratis",
    learnMore: "Ver documentación",
    badge: { text: "🚀 Agente de IA de código abierto oficial de Google" },
    useCases: {
      title: "Perfecto para desarrolladores que necesitan:",
      cases: [
        "Analizar bases de código grandes rápidamente",
        "Generar código desde PDFs o bocetos",
        "Automatizar tareas de desarrollo repetitivas",
        "Obtener asistencia de IA sin salir del terminal"
      ]
    },
    trustSignals: {
      title: "Confiado por desarrolladores en todo el mundo",
      subtitle: "Únete a miles de desarrolladores que ya usan Gemini CLI",
      cta: "Comenzar gratis - no se requiere registro"
    }
  },
  hi: {
    title: { part1: "मास्टर करें", part2: "Gemini CLI" },
    subtitle: "AI-संचालित कमांड लाइन टूल जो डेवलपर्स के काम करने के तरीके को बदल देता है",
    description: "टूल्स के बीच स्विच करना बंद करें। Gemini CLI Google की सबसे उन्नत AI को सीधे आपके टर्मिनल में लाता है - बड़े कोडबेस का विश्लेषण करें, स्केच से कोड जेनरेट करें, वर्कफ़्लो को स्वचालित करें, और 1M+ टोकन कॉन्टेक्स्ट विंडो के साथ विकास को तेज़ करें।",
    problemStatement: "IDE, ब्राउज़र और AI टूल्स के बीच कॉन्टेक्स्ट स्विचिंग से थक गए हैं?",
    solutionStatement: "एक टर्मिनल। असीमित AI शक्ति। पूर्ण वर्कफ़्लो स्वचालन।",
    getStarted: "मुफ्त में शुरू करें",
    learnMore: "दस्तावेज़ देखें",
    badge: { text: "🚀 Google का आधिकारिक ओपन सोर्स AI एजेंट" },
    useCases: {
      title: "उन डेवलपर्स के लिए परफेक्ट जिन्हें चाहिए:",
      cases: [
        "बड़े कोडबेस का तुरंत विश्लेषण",
        "PDF या स्केच से कोड जेनरेट करना",
        "दोहराए जाने वाले विकास कार्यों को स्वचालित करना",
        "टर्मिनल छोड़े बिना AI सहायता प्राप्त करना"
      ]
    },
    trustSignals: {
      title: "दुनिया भर के डेवलपर्स द्वारा भरोसा किया गया",
      subtitle: "हजारों डेवलपर्स के साथ जुड़ें जो पहले से ही Gemini CLI का उपयोग कर रहे हैं",
      cta: "मुफ्त में शुरू करें - साइन अप की आवश्यकता नहीं"
    }
  },
  ru: {
    title: { part1: "Освойте", part2: "Gemini CLI" },
    subtitle: "Инструмент командной строки на основе ИИ, который меняет способ работы разработчиков",
    description: "Прекратите переключаться между инструментами. Gemini CLI приносит самый продвинутый ИИ Google прямо в ваш терминал - анализируйте массивные кодовые базы, генерируйте код из эскизов, автоматизируйте рабочие процессы и ускоряйте разработку с окнами контекста 1M+ токенов.",
    problemStatement: "Устали от переключения контекста между IDE, браузером и инструментами ИИ?",
    solutionStatement: "Один терминал. Неограниченная мощь ИИ. Полная автоматизация рабочего процесса.",
    getStarted: "Начать бесплатно",
    learnMore: "Посмотреть документацию",
    badge: { text: "🚀 Официальный ИИ-агент с открытым исходным кодом от Google" },
    useCases: {
      title: "Идеально для разработчиков, которым нужно:",
      cases: [
        "Быстро анализировать большие кодовые базы",
        "Генерировать код из PDF или эскизов",
        "Автоматизировать повторяющиеся задачи разработки",
        "Получать помощь ИИ, не покидая терминал"
      ]
    },
    trustSignals: {
      title: "Доверие разработчиков по всему миру",
      subtitle: "Присоединяйтесь к тысячам разработчиков, которые уже используют Gemini CLI",
      cta: "Начать бесплатно - регистрация не требуется"
    }
  }
};

// 函数：更新语言文件
function updateLanguageFile(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    // 读取现有文件
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // 获取对应语言的翻译
    const translations = heroSeoTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No hero SEO translations found for ${langCode}`);
      return;
    }
    
    // 更新hero section
    if (data.hero) {
      data.hero.title = translations.title;
      data.hero.subtitle = translations.subtitle;
      data.hero.description = translations.description;
      data.hero.problemStatement = translations.problemStatement;
      data.hero.solutionStatement = translations.solutionStatement;
      data.hero.getStarted = translations.getStarted;
      data.hero.learnMore = translations.learnMore;
      data.hero.badge.text = translations.badge.text;
      data.hero.useCases = translations.useCases;
    }
    
    // 更新featuresStats.trustSignals
    if (data.featuresStats) {
      data.featuresStats.trustSignals = translations.trustSignals;
    }
    
    // 写回文件
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Updated hero SEO content for ${langName} (${langCode})`);
    
  } catch (error) {
    console.error(`❌ Error updating ${langCode}.json:`, error.message);
  }
}

// 主函数
function main() {
  console.log('🚀 Adding hero SEO content to remaining language files...\n');
  
  languages.forEach(lang => {
    updateLanguageFile(lang.code, lang.name);
  });
  
  console.log('\n✅ All hero SEO content has been added successfully!');
  console.log('\n📋 Summary:');
  console.log('- Updated hero.title with SEO-optimized titles');
  console.log('- Added hero.problemStatement and hero.solutionStatement');
  console.log('- Enhanced hero.description with key benefits');
  console.log('- Added hero.useCases for better value proposition');
  console.log('- Added featuresStats.trustSignals for social proof');
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = { updateLanguageFile, heroSeoTranslations };
