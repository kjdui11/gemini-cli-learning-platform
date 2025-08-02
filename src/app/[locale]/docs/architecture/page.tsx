import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface ArchitecturePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ArchitecturePageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    en: 'Architecture - Gemini CLI Documentation',
    zh: '架构设计 - Gemini CLI 文档',
    hi: 'आर्किटेक्चर - Gemini CLI दस्तावेज़',
    fr: 'Architecture - Documentation Gemini CLI',
    de: 'Architektur - Gemini CLI Dokumentation',
    ja: 'アーキテクチャ - Gemini CLI ドキュメント',
    ko: '아키텍처 - Gemini CLI 문서',
    es: 'Arquitectura - Documentación Gemini CLI',
    ru: 'Архитектура - Документация Gemini CLI'
  }

  const descriptions = {
    en: 'Learn about Gemini CLI architecture, design patterns, and system components',
    zh: '了解 Gemini CLI 的架构设计、设计模式和系统组件',
    hi: 'Gemini CLI आर्किटेक्चर, डिज़ाइन पैटर्न और सिस्टम घटकों के बारे में जानें',
    fr: 'Découvrez l\'architecture Gemini CLI, les modèles de conception et les composants système',
    de: 'Erfahren Sie mehr über die Gemini CLI-Architektur, Designmuster und Systemkomponenten',
    ja: 'Gemini CLI のアーキテクチャ、デザインパターン、システムコンポーネントについて学ぶ',
    ko: 'Gemini CLI 아키텍처, 디자인 패턴 및 시스템 구성 요소에 대해 알아보기',
    es: 'Aprende sobre la arquitectura de Gemini CLI, patrones de diseño y componentes del sistema',
    ru: 'Изучите архитектуру Gemini CLI, шаблоны проектирования и системные компоненты'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocaleArchitecturePage({ params }: ArchitecturePageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/architecture')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}
