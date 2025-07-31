import { Metadata } from 'next'
import GettingStartedContent from '@/components/pages/GettingStartedContent'
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
    en: 'Getting Started with Gemini CLI | Quick Start Guide',
    de: 'Erste Schritte mit Gemini CLI | Schnellstart-Anleitung',
    fr: 'Commencer avec Gemini CLI | Guide de Démarrage Rapide',
    ja: 'Gemini CLI を始める | クイックスタートガイド',
    ko: 'Gemini CLI 시작하기 | 빠른 시작 가이드',
    es: 'Comenzar con Gemini CLI | Guía de Inicio Rápido',
    hi: 'Gemini CLI के साथ शुरुआत | त्वरित प्रारंभ गाइड',
    ru: 'Начало работы с Gemini CLI | Руководство по быстрому старту',
    zh: '第一次使用 Gemini CLI | 快速入门指南'
  }

  const descriptions = {
    en: 'Learn how to use Gemini CLI for the first time, including installation, configuration, and basic conversations. Get started with AI command-line tools in 10 minutes.',
    de: 'Lernen Sie, wie Sie Gemini CLI zum ersten Mal verwenden, einschließlich Installation, Konfiguration und grundlegender Gespräche. Starten Sie in 10 Minuten mit KI-Kommandozeilen-Tools.',
    fr: 'Apprenez à utiliser Gemini CLI pour la première fois, y compris l\'installation, la configuration et les conversations de base. Commencez avec les outils de ligne de commande IA en 10 minutes.',
    ja: 'インストール、設定、基本的な会話を含む、Gemini CLIの初回使用方法を学びます。10分でAIコマンドラインツールを始めましょう。',
    ko: '설치, 구성 및 기본 대화를 포함하여 Gemini CLI를 처음 사용하는 방법을 배웁니다. 10분 만에 AI 명령줄 도구를 시작하세요.',
    es: 'Aprenda a usar Gemini CLI por primera vez, incluyendo instalación, configuración y conversaciones básicas. Comience con herramientas de línea de comandos de IA en 10 minutos.',
    hi: 'इंस्टॉलेशन, कॉन्फ़िगरेशन और बुनियादी बातचीत सहित पहली बार Gemini CLI का उपयोग करना सीखें। 10 मिनट में AI कमांड-लाइन टूल्स के साथ शुरुआत करें।',
    ru: 'Изучите, как использовать Gemini CLI в первый раз, включая установку, настройку и базовые разговоры. Начните работу с инструментами командной строки ИИ за 10 минут.',
    zh: '学习如何第一次使用 Gemini CLI，包括安装、配置和基本对话。10分钟快速上手 AI 命令行工具。'
  }

  const keywords = {
    en: 'Gemini CLI getting started, first time use, quick start, AI command line tool, Google Gemini CLI tutorial',
    de: 'Gemini CLI Erste Schritte, erste Verwendung, Schnellstart, KI-Kommandozeilen-Tool, Google Gemini CLI Tutorial',
    fr: 'Gemini CLI commencer, première utilisation, démarrage rapide, outil de ligne de commande IA, tutoriel Google Gemini CLI',
    ja: 'Gemini CLI 入門, 初回使用, クイックスタート, AI コマンドラインツール, Google Gemini CLI チュートリアル',
    ko: 'Gemini CLI 시작, 첫 사용, 빠른 시작, AI 명령줄 도구, Google Gemini CLI 튜토리얼',
    es: 'Gemini CLI comenzar, primer uso, inicio rápido, herramienta de línea de comandos IA, tutorial Google Gemini CLI',
    hi: 'Gemini CLI शुरुआत, पहली बार उपयोग, त्वरित प्रारंभ, AI कमांड लाइन टूल, Google Gemini CLI ट्यूटोरियल',
    ru: 'Gemini CLI начало работы, первое использование, быстрый старт, инструмент командной строки ИИ, учебник Google Gemini CLI',
    zh: 'Gemini CLI 入门, 第一次使用, 快速开始, AI 命令行工具, Google Gemini CLI 教程'
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

export default async function GettingStartedPage({ params }: Props) {
  const { locale } = await params
  return <GettingStartedContent locale={locale} />
}
