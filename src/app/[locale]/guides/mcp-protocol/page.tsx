import { Metadata } from 'next'
import { locales } from '@/i18n/config'
import MCPProtocolContent from '@/components/pages/McpProtocolContent'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: 'MCP 协议使用 | Gemini CLI 使用指南',
    en: 'MCP Protocol Usage | Gemini CLI Guide',
    de: 'MCP-Protokoll-Nutzung | Gemini CLI Anleitung',
    fr: 'Utilisation du protocole MCP | Guide Gemini CLI',
    ja: 'MCPプロトコル使用 | Gemini CLI ガイド',
    ko: 'MCP 프로토콜 사용 | Gemini CLI 가이드',
    es: 'Uso del protocolo MCP | Guía de Gemini CLI',
    hi: 'MCP प्रोटोकॉल उपयोग | Gemini CLI गाइड',
    ru: 'Использование протокола MCP | Руководство Gemini CLI'
  }

  const descriptions = {
    zh: '深入了解 Model Context Protocol (MCP) 的使用方法，包括服务器配置、工具扩展、自定义功能开发等。',
    en: 'Learn in-depth about Model Context Protocol (MCP) usage, including server configuration, tool extensions, and custom functionality development.',
    de: 'Erfahren Sie mehr über die Verwendung des Model Context Protocol (MCP), einschließlich Serverkonfiguration, Tool-Erweiterungen und benutzerdefinierter Funktionsentwicklung.',
    fr: 'Apprenez en profondeur l\'utilisation du Model Context Protocol (MCP), y compris la configuration du serveur, les extensions d\'outils et le développement de fonctionnalités personnalisées.',
    ja: 'Model Context Protocol (MCP) の使用方法について詳しく学びます。サーバー設定、ツール拡張、カスタム機能開発などを含みます。',
    ko: 'Model Context Protocol (MCP) 사용 방법에 대해 자세히 알아보세요. 서버 구성, 도구 확장, 사용자 정의 기능 개발 등을 포함합니다.',
    es: 'Aprenda en profundidad sobre el uso del Model Context Protocol (MCP), incluyendo configuración del servidor, extensiones de herramientas y desarrollo de funcionalidades personalizadas.',
    hi: 'Model Context Protocol (MCP) के उपयोग के बारे में गहराई से जानें, जिसमें सर्वर कॉन्फ़िगरेशन, टूल एक्सटेंशन और कस्टम फ़ंक्शनैलिटी डेवलपमेंट शामिल है।',
    ru: 'Изучите подробно использование Model Context Protocol (MCP), включая конфигурацию сервера, расширения инструментов и разработку пользовательских функций.'
  }

  const keywords = {
    zh: 'MCP 协议, Model Context Protocol, Gemini CLI 扩展, 服务器配置, 工具开发',
    en: 'MCP protocol, Model Context Protocol, Gemini CLI extensions, server configuration, tool development',
    de: 'MCP-Protokoll, Model Context Protocol, Gemini CLI-Erweiterungen, Serverkonfiguration, Tool-Entwicklung',
    fr: 'protocole MCP, Model Context Protocol, extensions Gemini CLI, configuration serveur, développement d\'outils',
    ja: 'MCPプロトコル, Model Context Protocol, Gemini CLI拡張, サーバー設定, ツール開発',
    ko: 'MCP 프로토콜, Model Context Protocol, Gemini CLI 확장, 서버 구성, 도구 개발',
    es: 'protocolo MCP, Model Context Protocol, extensiones Gemini CLI, configuración del servidor, desarrollo de herramientas',
    hi: 'MCP प्रोटोकॉल, Model Context Protocol, Gemini CLI एक्सटेंशन, सर्वर कॉन्फ़िगरेशन, टूल डेवलपमेंट',
    ru: 'протокол MCP, Model Context Protocol, расширения Gemini CLI, конфигурация сервера, разработка инструментов'
  }

  const ogTitles = {
    zh: 'MCP 协议使用 - Gemini CLI 使用指南',
    en: 'MCP Protocol Usage - Gemini CLI Guide',
    de: 'MCP-Protokoll-Nutzung - Gemini CLI Anleitung',
    fr: 'Utilisation du protocole MCP - Guide Gemini CLI',
    ja: 'MCPプロトコル使用 - Gemini CLI ガイド',
    ko: 'MCP 프로토콜 사용 - Gemini CLI 가이드',
    es: 'Uso del protocolo MCP - Guía de Gemini CLI',
    hi: 'MCP प्रोटोकॉल उपयोग - Gemini CLI गाइड',
    ru: 'Использование протокола MCP - Руководство Gemini CLI'
  }

  const ogDescriptions = {
    zh: '掌握 Model Context Protocol 扩展 Gemini CLI 功能',
    en: 'Master Model Context Protocol to extend Gemini CLI functionality',
    de: 'Meistern Sie das Model Context Protocol zur Erweiterung der Gemini CLI-Funktionalität',
    fr: 'Maîtrisez le Model Context Protocol pour étendre les fonctionnalités de Gemini CLI',
    ja: 'Model Context Protocol をマスターして Gemini CLI の機能を拡張する',
    ko: 'Model Context Protocol을 마스터하여 Gemini CLI 기능을 확장하세요',
    es: 'Domina el Model Context Protocol para extender la funcionalidad de Gemini CLI',
    hi: 'Gemini CLI कार्यक्षमता का विस्तार करने के लिए Model Context Protocol में महारत हासिल करें',
    ru: 'Освойте Model Context Protocol для расширения функциональности Gemini CLI'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: keywords[locale as keyof typeof keywords] || keywords.en,
    openGraph: {
      title: ogTitles[locale as keyof typeof ogTitles] || ogTitles.en,
      description: ogDescriptions[locale as keyof typeof ogDescriptions] || ogDescriptions.en,
      type: 'article',
    },
  }
}

export default async function MCPProtocolPage({ params }: Props) {
  const { locale } = await params
  return <MCPProtocolContent locale={locale} />
}
