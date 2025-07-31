import type { Metadata } from "next";
import { type Locale } from '@/i18n/config';

// SEO metadata for different locales
const seoMetadata: Record<Locale, {
  title: string;
  description: string;
  keywords: string;
}> = {
  en: {
    title: "Gemini CLI - Open Source AI Agent for Terminal",
    description: "Learn to use Gemini CLI effectively with comprehensive tutorials, guides, and documentation. From basic commands to advanced integrations with Google's open-source AI command-line tool.",
    keywords: "Gemini CLI, AI, command line, tutorial, documentation, guide, Google AI, open source"
  },
  zh: {
    title: "Gemini CLI 学习平台 - AI 驱动的命令行工具教程",
    description: "通过全面的教程、指南和文档掌握强大的 AI 命令行界面。从基础命令到高级集成，学习使用 Google 开源 AI 命令行工具。",
    keywords: "Gemini CLI, AI, 命令行, 教程, 文档, 指南, Google AI, 开源"
  },
  ru: {
    title: "Gemini CLI - Платформа обучения ИИ инструментам командной строки",
    description: "Изучите эффективное использование Gemini CLI с помощью комплексных руководств, гайдов и документации. От базовых команд до продвинутых интеграций.",
    keywords: "Gemini CLI, ИИ, командная строка, руководство, документация, гайд, Google AI, открытый исходный код"
  },
  hi: {
    title: "Gemini CLI लर्निंग प्लेटफॉर्म - AI कमांड लाइन टूल ट्यूटोरियल",
    description: "व्यापक ट्यूटोरियल, गाइड और दस्तावेज़ीकरण के साथ शक्तिशाली AI कमांड-लाइन इंटरफेस में महारत हासिल करें।",
    keywords: "Gemini CLI, AI, कमांड लाइन, ट्यूटोरियल, दस्तावेज़, गाइड, Google AI, ओपन सोर्स"
  },
  de: {
    title: "Gemini CLI Lernplattform - KI-gesteuerte Befehlszeilen-Tool-Tutorials",
    description: "Meistern Sie die leistungsstarke KI-Befehlszeile mit umfassenden Tutorials, Anleitungen und Dokumentation.",
    keywords: "Gemini CLI, KI, Befehlszeile, Tutorial, Dokumentation, Anleitung, Google AI, Open Source"
  },
  fr: {
    title: "Plateforme d'apprentissage Gemini CLI - Tutoriels d'outils en ligne de commande IA",
    description: "Maîtrisez l'interface de ligne de commande IA puissante avec des tutoriels, guides et documentation complets.",
    keywords: "Gemini CLI, IA, ligne de commande, tutoriel, documentation, guide, Google AI, open source"
  },
  ja: {
    title: "Gemini CLI 学習プラットフォーム - AI コマンドラインツールチュートリアル",
    description: "包括的なチュートリアル、ガイド、ドキュメントで強力なAIコマンドラインインターフェースをマスターしましょう。",
    keywords: "Gemini CLI, AI, コマンドライン, チュートリアル, ドキュメント, ガイド, Google AI, オープンソース"
  },
  ko: {
    title: "Gemini CLI 학습 플랫폼 - AI 명령줄 도구 튜토리얼",
    description: "포괄적인 튜토리얼, 가이드 및 문서를 통해 강력한 AI 명령줄 인터페이스를 마스터하세요.",
    keywords: "Gemini CLI, AI, 명령줄, 튜토리얼, 문서, 가이드, Google AI, 오픈 소스"
  },
  es: {
    title: "Plataforma de aprendizaje Gemini CLI - Tutoriales de herramientas de línea de comandos IA",
    description: "Domina la poderosa interfaz de línea de comandos de IA con tutoriales, guías y documentación integral.",
    keywords: "Gemini CLI, IA, línea de comandos, tutorial, documentación, guía, Google AI, código abierto"
  }
};

export function generateLocalizedMetadata(
  locale: Locale,
  pageTitle?: string,
  pageDescription?: string,
  pageKeywords?: string
): Metadata {
  const baseMeta = seoMetadata[locale];
  const title = pageTitle ? `${pageTitle} | ${baseMeta.title}` : baseMeta.title;
  const description = pageDescription || baseMeta.description;
  const keywords = pageKeywords ? `${pageKeywords}, ${baseMeta.keywords}` : baseMeta.keywords;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : locale,
      siteName: baseMeta.title,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}/`,
      languages: Object.fromEntries(
        Object.keys(seoMetadata).map(loc => [
          loc,
          loc === 'en' ? '/' : `/${loc}/`
        ])
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Page-specific metadata generators
export const pageMetadata: Record<string, Record<Locale, {
  title: string;
  description: string;
  keywords: string;
}>> = {
  installation: {
    en: {
      title: "Installation & Setup",
      description: "Complete guide to installing and setting up Gemini CLI on your system. Step-by-step instructions for all platforms.",
      keywords: "installation, setup, configuration, requirements"
    },
    zh: {
      title: "安装与设置",
      description: "在您的系统上安装和设置 Gemini CLI 的完整指南。所有平台的分步说明。",
      keywords: "安装, 设置, 配置, 系统要求"
    },
    ru: {
      title: "Установка и настройка",
      description: "Полное руководство по установке и настройке Gemini CLI в вашей системе.",
      keywords: "установка, настройка, конфигурация, требования"
    },
    hi: {
      title: "इंस्टॉलेशन और सेटअप",
      description: "आपके सिस्टम पर Gemini CLI इंस्टॉल और सेटअप करने के लिए पूरी गाइड।",
      keywords: "इंस्टॉलेशन, सेटअप, कॉन्फ़िगरेशन, आवश्यकताएं"
    },
    de: {
      title: "Installation & Einrichtung",
      description: "Vollständige Anleitung zur Installation und Einrichtung von Gemini CLI auf Ihrem System.",
      keywords: "Installation, Einrichtung, Konfiguration, Anforderungen"
    },
    fr: {
      title: "Installation et configuration",
      description: "Guide complet pour installer et configurer Gemini CLI sur votre système.",
      keywords: "installation, configuration, paramétrage, exigences"
    },
    ja: {
      title: "インストールとセットアップ",
      description: "システムでGemini CLIをインストールおよびセットアップするための完全ガイド。",
      keywords: "インストール, セットアップ, 設定, 要件"
    },
    ko: {
      title: "설치 및 설정",
      description: "시스템에서 Gemini CLI를 설치하고 설정하는 완전한 가이드.",
      keywords: "설치, 설정, 구성, 요구사항"
    },
    es: {
      title: "Instalación y configuración",
      description: "Guía completa para instalar y configurar Gemini CLI en su sistema.",
      keywords: "instalación, configuración, ajustes, requisitos"
    }
  },
  guides: {
    en: {
      title: "User Guides",
      description: "Comprehensive user guides for Gemini CLI. Learn best practices, advanced techniques, and real-world examples.",
      keywords: "guides, tutorials, best practices, examples"
    },
    zh: {
      title: "使用指南",
      description: "Gemini CLI 的综合用户指南。学习最佳实践、高级技术和实际示例。",
      keywords: "指南, 教程, 最佳实践, 示例"
    },
    ru: {
      title: "Руководство пользователя",
      description: "Комплексные руководства пользователя для Gemini CLI. Изучите лучшие практики и продвинутые техники.",
      keywords: "руководства, учебники, лучшие практики, примеры"
    },
    hi: {
      title: "उपयोगकर्ता गाइड",
      description: "Gemini CLI के लिए व्यापक उपयोगकर्ता गाइड। सर्वोत्तम प्रथाओं और उन्नत तकनीकों को सीखें।",
      keywords: "गाइड, ट्यूटोरियल, सर्वोत्तम प्रथाएं, उदाहरण"
    },
    de: {
      title: "Benutzerhandbuch",
      description: "Umfassende Benutzerhandbücher für Gemini CLI. Lernen Sie bewährte Praktiken und fortgeschrittene Techniken.",
      keywords: "Handbücher, Tutorials, bewährte Praktiken, Beispiele"
    },
    fr: {
      title: "Guides utilisateur",
      description: "Guides utilisateur complets pour Gemini CLI. Apprenez les meilleures pratiques et techniques avancées.",
      keywords: "guides, tutoriels, meilleures pratiques, exemples"
    },
    ja: {
      title: "ユーザーガイド",
      description: "Gemini CLIの包括的なユーザーガイド。ベストプラクティスと高度なテクニックを学びましょう。",
      keywords: "ガイド, チュートリアル, ベストプラクティス, 例"
    },
    ko: {
      title: "사용자 가이드",
      description: "Gemini CLI를 위한 포괄적인 사용자 가이드. 모범 사례와 고급 기술을 배우세요.",
      keywords: "가이드, 튜토리얼, 모범 사례, 예제"
    },
    es: {
      title: "Guías de usuario",
      description: "Guías de usuario completas para Gemini CLI. Aprenda mejores prácticas y técnicas avanzadas.",
      keywords: "guías, tutoriales, mejores prácticas, ejemplos"
    }
  }
};

export function generateSEOMetadata({
  title,
  description,
  keywords,
  locale = 'en',
  noIndex = false,
}: {
  title?: string
  description?: string
  keywords?: string[]
  locale?: string
  noIndex?: boolean
} = {}): Metadata {
  const siteUrl = 'https://www.geminicli.cloud'
  const siteName = locale === 'zh' ? 'Gemini CLI学习平台' : 'Gemini CLI Learning Platform'

  const metaTitle = title || (locale === 'zh' ? 'Gemini CLI学习平台' : 'Gemini CLI Learning Platform')
  const metaDescription = description || (locale === 'zh'
    ? '专为开发者打造的Gemini CLI学习平台，提供详细教程、指南和文档，帮助您掌握这个强大的AI命令行工具。'
    : 'Learn to use Gemini CLI effectively with comprehensive tutorials, guides, and documentation. Master this powerful AI command-line tool.')

  const metaKeywords = keywords || (locale === 'zh'
    ? ['Gemini CLI', 'AI', '命令行', '教程', '文档', '指南', 'Google AI', '开源']
    : ['Gemini CLI', 'AI', 'command line', 'tutorial', 'documentation', 'guide', 'Google AI', 'open source'])

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      url: siteUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteName,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ['/og-image.png'],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteUrl}/${locale === 'en' ? '' : locale}`,
      languages: {
        'en': `${siteUrl}/`,
        'zh': `${siteUrl}/zh`,
        'ru': `${siteUrl}/ru`,
        'hi': `${siteUrl}/hi`,
        'de': `${siteUrl}/de`,
        'fr': `${siteUrl}/fr`,
        'ja': `${siteUrl}/ja`,
        'ko': `${siteUrl}/ko`,
        'es': `${siteUrl}/es`,
      },
    },
  }
}
