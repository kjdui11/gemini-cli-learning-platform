import { Metadata } from 'next'
import FileOperationsContent from '@/components/pages/FileOperationsContent'
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
    en: 'File Operations Guide | Gemini CLI User Guide',
    de: 'Dateioperationen Leitfaden | Gemini CLI Benutzerhandbuch',
    fr: 'Guide des Opérations de Fichiers | Guide Utilisateur Gemini CLI',
    ja: 'ファイル操作ガイド | Gemini CLI ユーザーガイド',
    ko: '파일 작업 가이드 | Gemini CLI 사용자 가이드',
    es: 'Guía de Operaciones de Archivos | Guía de Usuario de Gemini CLI',
    hi: 'फ़ाइल संचालन गाइड | Gemini CLI उपयोगकर्ता गाइड',
    ru: 'Руководство по Файловым Операциям | Руководство Пользователя Gemini CLI',
    zh: '文件操作 | Gemini CLI 使用指南'
  }

  const descriptions = {
    en: 'Learn how to use Gemini CLI for file reading, editing, creating, and management operations.',
    de: 'Lernen Sie, wie Sie Gemini CLI für Dateilesen, -bearbeitung, -erstellung und -verwaltung verwenden.',
    fr: 'Apprenez à utiliser Gemini CLI pour la lecture, l\'édition, la création et la gestion de fichiers.',
    ja: 'Gemini CLIを使用してファイルの読み取り、編集、作成、管理操作を行う方法を学びます。',
    ko: 'Gemini CLI를 사용하여 파일 읽기, 편집, 생성 및 관리 작업을 수행하는 방법을 배웁니다.',
    es: 'Aprenda a usar Gemini CLI para operaciones de lectura, edición, creación y gestión de archivos.',
    hi: 'फ़ाइल पढ़ने, संपादन, निर्माण और प्रबंधन संचालन के लिए Gemini CLI का उपयोग करना सीखें।',
    ru: 'Изучите, как использовать Gemini CLI для чтения, редактирования, создания и управления файлами.',
    zh: '学习如何使用 Gemini CLI 进行文件读取、编辑、创建和管理操作。'
  }

  const keywords = {
    en: 'Gemini CLI file operations, file reading, file editing, file management, CLI tools',
    de: 'Gemini CLI Dateioperationen, Dateilesen, Dateibearbeitung, Dateiverwaltung, CLI-Tools',
    fr: 'opérations de fichiers Gemini CLI, lecture de fichiers, édition de fichiers, gestion de fichiers, outils CLI',
    ja: 'Gemini CLI ファイル操作, ファイル読み取り, ファイル編集, ファイル管理, CLI ツール',
    ko: 'Gemini CLI 파일 작업, 파일 읽기, 파일 편집, 파일 관리, CLI 도구',
    es: 'operaciones de archivos Gemini CLI, lectura de archivos, edición de archivos, gestión de archivos, herramientas CLI',
    hi: 'Gemini CLI फ़ाइल संचालन, फ़ाइल पढ़ना, फ़ाइल संपादन, फ़ाइल प्रबंधन, CLI उपकरण',
    ru: 'файловые операции Gemini CLI, чтение файлов, редактирование файлов, управление файлами, инструменты CLI',
    zh: 'Gemini CLI 文件操作, 文件读取, 文件编辑, 文件管理, CLI 工具'
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

export default async function FileOperationsPage({ params }: Props) {
  const { locale } = await params
  return <FileOperationsContent locale={locale} />
}
