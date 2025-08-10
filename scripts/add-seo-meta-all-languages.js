const fs = require('fs');
const path = require('path');

// 语言列表
const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: 'Chinese' },
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'es', name: 'Spanish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ru', name: 'Russian' }
];

// SEO meta 翻译
const seoMetaTranslations = {
  en: {
    meta: {
      defaultTitle: "Gemini CLI Learning Platform",
      defaultDescription: "Master the powerful AI command-line interface with comprehensive tutorials, guides, and documentation.",
      keywords: "Gemini CLI, AI, command line, tutorial, documentation, guide",
      ogTitle: "Gemini CLI Learning Platform - AI-Powered Development Tool",
      ogDescription: "Professional Gemini CLI learning platform providing comprehensive AI programming tutorials, practical cases, and best practices. Learn Google's latest open-source AI command-line tool.",
      twitterTitle: "Gemini CLI Learning Platform",
      twitterDescription: "Master AI-powered development with comprehensive Gemini CLI tutorials and guides."
    }
  },
  zh: {
    meta: {
      defaultTitle: "Gemini CLI 学习平台",
      defaultDescription: "通过全面的教程、指南和文档掌握强大的 AI 命令行界面。",
      keywords: "Gemini CLI, AI, 命令行, 教程, 文档, 指南",
      ogTitle: "Gemini CLI 学习平台 - AI 驱动的开发工具",
      ogDescription: "专业的 Gemini CLI 中文学习平台，提供全面的 AI 编程教程、实战案例和最佳实践。学习 Google 最新的开源 AI 命令行工具。",
      twitterTitle: "Gemini CLI 学习平台",
      twitterDescription: "通过全面的 Gemini CLI 教程和指南掌握 AI 驱动的开发。"
    }
  },
  de: {
    meta: {
      defaultTitle: "Gemini CLI Lernplattform",
      defaultDescription: "Meistern Sie die leistungsstarke KI-Befehlszeilenschnittstelle mit umfassenden Tutorials, Anleitungen und Dokumentation.",
      keywords: "Gemini CLI, KI, Befehlszeile, Tutorial, Dokumentation, Anleitung",
      ogTitle: "Gemini CLI Lernplattform - KI-gestütztes Entwicklungstool",
      ogDescription: "Professionelle Gemini CLI Lernplattform mit umfassenden KI-Programmier-Tutorials, praktischen Fällen und bewährten Praktiken. Lernen Sie Googles neuestes Open-Source-KI-Befehlszeilentool.",
      twitterTitle: "Gemini CLI Lernplattform",
      twitterDescription: "Meistern Sie KI-gestützte Entwicklung mit umfassenden Gemini CLI Tutorials und Anleitungen."
    }
  },
  fr: {
    meta: {
      defaultTitle: "Plateforme d'apprentissage Gemini CLI",
      defaultDescription: "Maîtrisez l'interface de ligne de commande IA puissante avec des tutoriels, guides et documentation complets.",
      keywords: "Gemini CLI, IA, ligne de commande, tutoriel, documentation, guide",
      ogTitle: "Plateforme d'apprentissage Gemini CLI - Outil de développement alimenté par l'IA",
      ogDescription: "Plateforme d'apprentissage professionnelle Gemini CLI offrant des tutoriels de programmation IA complets, des cas pratiques et les meilleures pratiques. Apprenez l'outil de ligne de commande IA open-source le plus récent de Google.",
      twitterTitle: "Plateforme d'apprentissage Gemini CLI",
      twitterDescription: "Maîtrisez le développement alimenté par l'IA avec des tutoriels et guides Gemini CLI complets."
    }
  },
  ja: {
    meta: {
      defaultTitle: "Gemini CLI 学習プラットフォーム",
      defaultDescription: "包括的なチュートリアル、ガイド、ドキュメントで強力なAIコマンドラインインターフェースをマスターしましょう。",
      keywords: "Gemini CLI, AI, コマンドライン, チュートリアル, ドキュメント, ガイド",
      ogTitle: "Gemini CLI 学習プラットフォーム - AI駆動開発ツール",
      ogDescription: "包括的なAIプログラミングチュートリアル、実践的なケース、ベストプラクティスを提供するプロフェッショナルなGemini CLI学習プラットフォーム。Googleの最新オープンソースAIコマンドラインツールを学びましょう。",
      twitterTitle: "Gemini CLI 学習プラットフォーム",
      twitterDescription: "包括的なGemini CLIチュートリアルとガイドでAI駆動開発をマスターしましょう。"
    }
  },
  ko: {
    meta: {
      defaultTitle: "Gemini CLI 학습 플랫폼",
      defaultDescription: "포괄적인 튜토리얼, 가이드 및 문서로 강력한 AI 명령줄 인터페이스를 마스터하세요.",
      keywords: "Gemini CLI, AI, 명령줄, 튜토리얼, 문서, 가이드",
      ogTitle: "Gemini CLI 학습 플랫폼 - AI 기반 개발 도구",
      ogDescription: "포괄적인 AI 프로그래밍 튜토리얼, 실용적인 사례 및 모범 사례를 제공하는 전문 Gemini CLI 학습 플랫폼. Google의 최신 오픈소스 AI 명령줄 도구를 배우세요.",
      twitterTitle: "Gemini CLI 학습 플랫폼",
      twitterDescription: "포괄적인 Gemini CLI 튜토리얼과 가이드로 AI 기반 개발을 마스터하세요."
    }
  },
  es: {
    meta: {
      defaultTitle: "Plataforma de Aprendizaje Gemini CLI",
      defaultDescription: "Domina la poderosa interfaz de línea de comandos de IA con tutoriales, guías y documentación completos.",
      keywords: "Gemini CLI, IA, línea de comandos, tutorial, documentación, guía",
      ogTitle: "Plataforma de Aprendizaje Gemini CLI - Herramienta de Desarrollo Impulsada por IA",
      ogDescription: "Plataforma de aprendizaje profesional de Gemini CLI que ofrece tutoriales completos de programación con IA, casos prácticos y mejores prácticas. Aprende la herramienta de línea de comandos de IA de código abierto más reciente de Google.",
      twitterTitle: "Plataforma de Aprendizaje Gemini CLI",
      twitterDescription: "Domina el desarrollo impulsado por IA con tutoriales y guías completos de Gemini CLI."
    }
  },
  hi: {
    meta: {
      defaultTitle: "Gemini CLI सीखने का प्लेटफॉर्म",
      defaultDescription: "व्यापक ट्यूटोरियल, गाइड और दस्तावेज़ीकरण के साथ शक्तिशाली AI कमांड-लाइन इंटरफेस में महारत हासिल करें।",
      keywords: "Gemini CLI, AI, कमांड लाइन, ट्यूटोरियल, दस्तावेज़ीकरण, गाइड",
      ogTitle: "Gemini CLI सीखने का प्लेटफॉर्म - AI-संचालित विकास उपकरण",
      ogDescription: "व्यापक AI प्रोग्रामिंग ट्यूटोरियल, व्यावहारिक मामले और सर्वोत्तम प्रथाएं प्रदान करने वाला पेशेवर Gemini CLI सीखने का प्लेटफॉर्म। Google के नवीनतम ओपन-सोर्स AI कमांड-लाइन टूल को सीखें।",
      twitterTitle: "Gemini CLI सीखने का प्लेटफॉर्म",
      twitterDescription: "व्यापक Gemini CLI ट्यूटोरियल और गाइड के साथ AI-संचालित विकास में महारत हासिल करें।"
    }
  },
  ru: {
    meta: {
      defaultTitle: "Платформа обучения Gemini CLI",
      defaultDescription: "Освойте мощный интерфейс командной строки ИИ с помощью комплексных руководств, гайдов и документации.",
      keywords: "Gemini CLI, ИИ, командная строка, руководство, документация, гайд",
      ogTitle: "Платформа обучения Gemini CLI - Инструмент разработки на основе ИИ",
      ogDescription: "Профессиональная платформа обучения Gemini CLI, предоставляющая комплексные руководства по программированию с ИИ, практические случаи и лучшие практики. Изучите новейший инструмент командной строки ИИ с открытым исходным кодом от Google.",
      twitterTitle: "Платформа обучения Gemini CLI",
      twitterDescription: "Освойте разработку на основе ИИ с помощью комплексных руководств и гайдов Gemini CLI."
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
    
    // 获取对应语言的SEO翻译
    const seoTranslations = seoMetaTranslations[langCode];
    
    if (!seoTranslations) {
      console.log(`⚠️  No SEO meta translations found for ${langCode}, using English as fallback`);
      // 使用英文作为后备
      data.meta = seoMetaTranslations.en.meta;
    } else {
      // 添加或更新meta信息
      data.meta = {
        ...data.meta,
        ...seoTranslations.meta
      };
    }
    
    // 写回文件
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Updated SEO meta for ${langName} (${langCode})`);
    
  } catch (error) {
    console.error(`❌ Error updating ${langCode}.json:`, error.message);
  }
}

// 主函数
function main() {
  console.log('🚀 Adding SEO meta information to all language files...\n');
  
  languages.forEach(lang => {
    updateLanguageFile(lang.code, lang.name);
  });
  
  console.log('\n✅ All SEO meta information has been added successfully!');
  console.log('\n📋 Summary:');
  console.log('- Added defaultTitle, defaultDescription, keywords');
  console.log('- Added ogTitle, ogDescription for Open Graph');
  console.log('- Added twitterTitle, twitterDescription for Twitter Cards');
  console.log('- All languages now have optimized meta information for SEO');
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = { updateLanguageFile, seoMetaTranslations };
