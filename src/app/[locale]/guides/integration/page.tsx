import { Metadata } from 'next'
import IntegrationContent from '@/components/pages/IntegrationContent'
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
    en: 'Gemini CLI Integration | Connect with Your Workflow',
    de: 'Gemini CLI Integration | Mit Ihrem Workflow verbinden',
    fr: 'Intégration Gemini CLI | Connectez-vous à votre flux de travail',
    ja: 'Gemini CLI 統合 | ワークフローとの接続',
    ko: 'Gemini CLI 통합 | 워크플로우와 연결',
    es: 'Integración Gemini CLI | Conectar con su flujo de trabajo',
    hi: 'Gemini CLI एकीकरण | अपने वर्कफ़्लो से कनेक्ट करें',
    ru: 'Интеграция Gemini CLI | Подключение к вашему рабочему процессу',
    zh: 'Gemini CLI 集成 | 连接您的工作流程'
  }

  const descriptions = {
    en: 'Learn how to integrate Gemini CLI with your development workflow, IDEs, and automation tools for maximum productivity.',
    de: 'Erfahren Sie, wie Sie Gemini CLI in Ihren Entwicklungsworkflow, IDEs und Automatisierungstools für maximale Produktivität integrieren.',
    fr: 'Apprenez à intégrer Gemini CLI avec votre flux de travail de développement, vos IDE et vos outils d\'automatisation pour une productivité maximale.',
    ja: '最大の生産性を得るために、Gemini CLIを開発ワークフロー、IDE、自動化ツールと統合する方法を学びます。',
    ko: '최대 생산성을 위해 Gemini CLI를 개발 워크플로우, IDE 및 자동화 도구와 통합하는 방법을 배웁니다.',
    es: 'Aprenda a integrar Gemini CLI con su flujo de trabajo de desarrollo, IDE y herramientas de automatización para máxima productividad.',
    hi: 'अधिकतम उत्पादकता के लिए Gemini CLI को अपने विकास वर्कफ़्लो, IDE और स्वचालन उपकरणों के साथ एकीकृत करना सीखें।',
    ru: 'Узнайте, как интегрировать Gemini CLI с вашим рабочим процессом разработки, IDE и инструментами автоматизации для максимальной продуктивности.',
    zh: '学习如何将 Gemini CLI 与您的开发工作流程、IDE 和自动化工具集成，以获得最大生产力。'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

export default async function IntegrationPage({ params }: Props) {
  const { locale } = await params
  return <IntegrationContent locale={locale} />
}
