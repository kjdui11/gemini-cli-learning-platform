import { Metadata } from 'next'
import BasicCommandsContent from '@/components/pages/BasicCommandsContent'
import { locales } from '@/i18n/config'

interface BasicCommandsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: BasicCommandsPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '基本命令操作 | Gemini CLI 使用指南',
    en: 'Basic Commands | Gemini CLI Guide',
    de: 'Grundbefehle | Gemini CLI Anleitung',
    fr: 'Commandes de Base | Guide Gemini CLI',
    ja: '基本コマンド | Gemini CLI ガイド',
    ko: '기본 명령어 | Gemini CLI 가이드',
    es: 'Comandos Básicos | Guía Gemini CLI',
    hi: 'बेसिक कमांड | Gemini CLI गाइड',
    ru: 'Основные Команды | Руководство Gemini CLI'
  }
  
  const descriptions = {
    zh: '学习 Gemini CLI 的基本命令和语法，包括斜杠命令、@命令和!命令的使用方法。掌握核心功能操作。',
    en: 'Learn the basic commands and syntax of Gemini CLI, including slash commands, @ commands, and ! commands. Master core functionality operations.',
    de: 'Lernen Sie die grundlegenden Befehle und Syntax von Gemini CLI, einschließlich Schrägstrich-Befehle, @-Befehle und !-Befehle. Beherrschen Sie die Kernfunktionen.',
    fr: 'Apprenez les commandes de base et la syntaxe de Gemini CLI, y compris les commandes slash, les commandes @ et les commandes !. Maîtrisez les opérations de fonctionnalité de base.',
    ja: 'Gemini CLI の基本コマンドと構文を学習します。スラッシュコマンド、@コマンド、!コマンドの使用方法を含みます。コア機能の操作をマスターします。',
    ko: 'Gemini CLI의 기본 명령어와 구문을 배웁니다. 슬래시 명령어, @ 명령어, ! 명령어 사용법을 포함합니다. 핵심 기능 작업을 마스터합니다.',
    es: 'Aprende los comandos básicos y la sintaxis de Gemini CLI, incluyendo comandos de barra, comandos @ y comandos !. Domina las operaciones de funcionalidad principal.',
    hi: 'Gemini CLI के बेसिक कमांड और सिंटैक्स सीखें, जिसमें स्लैश कमांड, @ कमांड और ! कमांड का उपयोग शामिल है। मुख्य कार्यक्षमता संचालन में महारत हासिल करें।',
    ru: 'Изучите основные команды и синтаксис Gemini CLI, включая команды с косой чертой, команды @ и команды !. Освойте операции основной функциональности.'
  }
  
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function BasicCommandsPage({ params }: BasicCommandsPageProps) {
  const { locale } = await params
  return <BasicCommandsContent locale={locale} />
}
