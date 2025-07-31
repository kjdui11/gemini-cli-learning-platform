import { Metadata } from 'next'
import AdvancedConfigContent from '@/components/pages/AdvancedConfigContent'
import { locales } from '@/i18n/config'

interface Props {
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    en: 'Advanced Configuration Options | Gemini CLI User Guide',
    de: 'Erweiterte Konfigurationsoptionen | Gemini CLI Benutzerhandbuch',
    fr: 'Options de Configuration Avancées | Guide Utilisateur Gemini CLI',
    ja: '高度な設定オプション | Gemini CLI ユーザーガイド',
    ko: '고급 구성 옵션 | Gemini CLI 사용자 가이드',
    es: 'Opciones de Configuración Avanzadas | Guía de Usuario de Gemini CLI',
    hi: 'उन्नत कॉन्फ़िगरेशन विकल्प | Gemini CLI उपयोगकर्ता गाइड',
    ru: 'Расширенные Параметры Конфигурации | Руководство Пользователя Gemini CLI',
    zh: '高级配置选项 | Gemini CLI 使用指南'
  }

  const descriptions = {
    en: 'Deep dive into Gemini CLI\'s advanced configuration options, including TOML config files, environment variables, custom settings, and more.',
    de: 'Tauchen Sie tief in die erweiterten Konfigurationsoptionen von Gemini CLI ein, einschließlich TOML-Konfigurationsdateien, Umgebungsvariablen, benutzerdefinierten Einstellungen und mehr.',
    fr: 'Plongez dans les options de configuration avancées de Gemini CLI, y compris les fichiers de configuration TOML, les variables d\'environnement, les paramètres personnalisés, et plus encore.',
    ja: 'TOML設定ファイル、環境変数、カスタム設定などを含む、Gemini CLIの高度な設定オプションを詳しく学びます。',
    ko: 'TOML 구성 파일, 환경 변수, 사용자 정의 설정 등을 포함한 Gemini CLI의 고급 구성 옵션을 자세히 알아봅니다.',
    es: 'Profundice en las opciones de configuración avanzadas de Gemini CLI, incluyendo archivos de configuración TOML, variables de entorno, configuraciones personalizadas y más.',
    hi: 'TOML कॉन्फ़िग फाइलों, पर्यावरण चर, कस्टम सेटिंग्स और अधिक सहित Gemini CLI के उन्नत कॉन्फ़िगरेशन विकल्पों में गहराई से जानें।',
    ru: 'Глубокое погружение в расширенные параметры конфигурации Gemini CLI, включая файлы конфигурации TOML, переменные окружения, пользовательские настройки и многое другое.',
    zh: '深入了解 Gemini CLI 的高级配置选项，包括 TOML 配置文件、环境变量、自定义设置等。'
  }

  const keywords = {
    en: 'Gemini CLI configuration, TOML config, environment variables, custom settings, CLI config file',
    de: 'Gemini CLI Konfiguration, TOML Konfiguration, Umgebungsvariablen, benutzerdefinierte Einstellungen, CLI Konfigurationsdatei',
    fr: 'configuration Gemini CLI, configuration TOML, variables d\'environnement, paramètres personnalisés, fichier de configuration CLI',
    ja: 'Gemini CLI 設定, TOML 設定, 環境変数, カスタム設定, CLI 設定ファイル',
    ko: 'Gemini CLI 구성, TOML 구성, 환경 변수, 사용자 정의 설정, CLI 구성 파일',
    es: 'configuración Gemini CLI, configuración TOML, variables de entorno, configuraciones personalizadas, archivo de configuración CLI',
    hi: 'Gemini CLI कॉन्फ़िगरेशन, TOML कॉन्फ़िग, पर्यावरण चर, कस्टम सेटिंग्स, CLI कॉन्फ़िग फाइल',
    ru: 'конфигурация Gemini CLI, конфигурация TOML, переменные окружения, пользовательские настройки, файл конфигурации CLI',
    zh: 'Gemini CLI 配置, TOML 配置, 环境变量, 自定义设置, CLI 配置文件'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: keywords[locale as keyof typeof keywords] || keywords.en,
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

export default async function AdvancedConfigPage({ params }: Props) {
  const { locale } = await params
  return <AdvancedConfigContent locale={locale} />
}
