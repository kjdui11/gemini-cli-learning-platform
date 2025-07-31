import { Metadata } from 'next'
import DocumentationContent from '@/components/pages/DocumentationContent'
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
    en: 'Documentation Generator | Gemini CLI Practical Cases',
    de: 'Dokumentationsgenerator | Gemini CLI Praktische Fälle',
    fr: 'Générateur de Documentation | Cas Pratiques Gemini CLI',
    ja: 'ドキュメント生成ツール | Gemini CLI 実践事例',
    ko: '문서 생성기 | Gemini CLI 실전 사례',
    es: 'Generador de Documentación | Casos Prácticos de Gemini CLI',
    hi: 'डॉक्यूमेंटेशन जेनरेटर | Gemini CLI व्यावहारिक मामले',
    ru: 'Генератор Документации | Практические Случаи Gemini CLI',
    zh: '文档生成助手 | Gemini CLI 实战案例'
  }

  const descriptions = {
    en: 'Learn how to use Gemini CLI to automatically generate and maintain project documentation, including API docs, user manuals, technical specifications, and more.',
    de: 'Lernen Sie, wie Sie Gemini CLI verwenden, um automatisch Projektdokumentation zu generieren und zu pflegen, einschließlich API-Dokumentation, Benutzerhandbücher, technische Spezifikationen und mehr.',
    fr: 'Apprenez à utiliser Gemini CLI pour générer et maintenir automatiquement la documentation de projet, y compris la documentation API, les manuels utilisateur, les spécifications techniques, et plus encore.',
    ja: 'Gemini CLI を使用してプロジェクトドキュメントを自動生成・維持する方法を学びます。API ドキュメント、ユーザーマニュアル、技術仕様書などが含まれます。',
    ko: 'Gemini CLI를 사용하여 API 문서, 사용자 매뉴얼, 기술 사양 등을 포함한 프로젝트 문서를 자동으로 생성하고 유지하는 방법을 배웁니다.',
    es: 'Aprende a usar Gemini CLI para generar y mantener automáticamente documentación de proyectos, incluyendo documentación de API, manuales de usuario, especificaciones técnicas y más.',
    hi: 'जानें कि Gemini CLI का उपयोग करके प्रोजेक्ट डॉक्यूमेंटेशन को स्वचालित रूप से कैसे जेनरेट और बनाए रखें, जिसमें API डॉक्स, यूजर मैन्युअल, तकनीकी विनिर्देश और बहुत कुछ शामिल है।',
    ru: 'Узнайте, как использовать Gemini CLI для автоматической генерации и поддержки проектной документации, включая API документацию, руководства пользователя, технические спецификации и многое другое.',
    zh: '学习如何使用 Gemini CLI 自动生成和维护项目文档，包括 API 文档、用户手册、技术规范等。'
  }

  const keywords = {
    en: 'Gemini CLI documentation generation, AI documentation writing, automated documentation, API documentation, technical documentation',
    de: 'Gemini CLI Dokumentationsgenerierung, KI-Dokumentationsschreibung, automatisierte Dokumentation, API-Dokumentation, technische Dokumentation',
    fr: 'génération de documentation Gemini CLI, rédaction de documentation IA, documentation automatisée, documentation API, documentation technique',
    ja: 'Gemini CLI ドキュメント生成, AI ドキュメント作成, 自動化ドキュメント, API ドキュメント, 技術ドキュメント',
    ko: 'Gemini CLI 문서 생성, AI 문서 작성, 자동화 문서, API 문서, 기술 문서',
    es: 'generación de documentación Gemini CLI, escritura de documentación IA, documentación automatizada, documentación API, documentación técnica',
    hi: 'Gemini CLI डॉक्यूमेंटेशन जेनरेशन, AI डॉक्यूमेंटेशन राइटिंग, स्वचालित डॉक्यूमेंटेशन, API डॉक्यूमेंटेशन, तकनीकी डॉक्यूमेंटेशन',
    ru: 'генерация документации Gemini CLI, написание документации ИИ, автоматизированная документация, API документация, техническая документация',
    zh: 'Gemini CLI 文档生成, AI 文档写作, 自动化文档, API 文档, 技术文档'
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

export default async function DocumentationPage({ params }: Props) {
  const { locale } = await params
  return <DocumentationContent locale={locale} />
}
