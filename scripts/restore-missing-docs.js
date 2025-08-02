const fs = require('fs');
const path = require('path');

// 缺失的文档页面
const missingPages = [
  'coding-standards',
  'config-api', 
  'extension-architecture',
  'extension-publishing',
  'first-extension',
  'mcp-client',
  'mcp-server',
  'pull-request-guide'
];

// 页面标题映射
const pageTitles = {
  'coding-standards': {
    en: 'Coding Standards',
    zh: '编码规范',
    hi: 'कोडिंग मानक',
    fr: 'Normes de codage',
    de: 'Codierungsstandards',
    ja: 'コーディング規約',
    ko: '코딩 표준',
    es: 'Estándares de codificación',
    ru: 'Стандарты кодирования'
  },
  'config-api': {
    en: 'Configuration API',
    zh: '配置 API',
    hi: 'कॉन्फ़िगरेशन API',
    fr: 'API de configuration',
    de: 'Konfigurations-API',
    ja: '設定 API',
    ko: '구성 API',
    es: 'API de configuración',
    ru: 'API конфигурации'
  },
  'extension-architecture': {
    en: 'Extension Architecture',
    zh: '扩展架构',
    hi: 'एक्सटेंशन आर्किटेक्चर',
    fr: 'Architecture d\'extension',
    de: 'Erweiterungsarchitektur',
    ja: '拡張アーキテクチャ',
    ko: '확장 아키텍처',
    es: 'Arquitectura de extensión',
    ru: 'Архитектура расширений'
  },
  'extension-publishing': {
    en: 'Extension Publishing',
    zh: '扩展发布',
    hi: 'एक्सटेंशन प्रकाशन',
    fr: 'Publication d\'extension',
    de: 'Erweiterungsveröffentlichung',
    ja: '拡張の公開',
    ko: '확장 게시',
    es: 'Publicación de extensión',
    ru: 'Публикация расширений'
  },
  'first-extension': {
    en: 'First Extension',
    zh: '第一个扩展',
    hi: 'पहला एक्सटेंशन',
    fr: 'Première extension',
    de: 'Erste Erweiterung',
    ja: '最初の拡張',
    ko: '첫 번째 확장',
    es: 'Primera extensión',
    ru: 'Первое расширение'
  },
  'mcp-client': {
    en: 'MCP Client',
    zh: 'MCP 客户端',
    hi: 'MCP क्लाइंट',
    fr: 'Client MCP',
    de: 'MCP-Client',
    ja: 'MCP クライアント',
    ko: 'MCP 클라이언트',
    es: 'Cliente MCP',
    ru: 'MCP клиент'
  },
  'mcp-server': {
    en: 'MCP Server',
    zh: 'MCP 服务器',
    hi: 'MCP सर्वर',
    fr: 'Serveur MCP',
    de: 'MCP-Server',
    ja: 'MCP サーバー',
    ko: 'MCP 서버',
    es: 'Servidor MCP',
    ru: 'MCP сервер'
  },
  'pull-request-guide': {
    en: 'Pull Request Guide',
    zh: '拉取请求指南',
    hi: 'पुल रिक्वेस्ट गाइड',
    fr: 'Guide de demande de tirage',
    de: 'Pull-Request-Leitfaden',
    ja: 'プルリクエストガイド',
    ko: '풀 리퀘스트 가이드',
    es: 'Guía de solicitud de extracción',
    ru: 'Руководство по pull request'
  }
};

// 页面描述映射
const pageDescriptions = {
  'coding-standards': {
    en: 'Learn about coding standards and best practices for Gemini CLI development',
    zh: '了解 Gemini CLI 开发的编码规范和最佳实践',
    hi: 'Gemini CLI विकास के लिए कोडिंग मानकों और सर्वोत्तम प्रथाओं के बारे में जानें',
    fr: 'Découvrez les normes de codage et les meilleures pratiques pour le développement Gemini CLI',
    de: 'Erfahren Sie mehr über Codierungsstandards und bewährte Verfahren für die Gemini CLI-Entwicklung',
    ja: 'Gemini CLI 開発のコーディング規約とベストプラクティスについて学ぶ',
    ko: 'Gemini CLI 개발을 위한 코딩 표준 및 모범 사례에 대해 알아보기',
    es: 'Aprende sobre estándares de codificación y mejores prácticas para el desarrollo de Gemini CLI',
    ru: 'Изучите стандарты кодирования и лучшие практики для разработки Gemini CLI'
  },
  'config-api': {
    en: 'Configuration API documentation for managing Gemini CLI settings',
    zh: '用于管理 Gemini CLI 设置的配置 API 文档',
    hi: 'Gemini CLI सेटिंग्स प्रबंधित करने के लिए कॉन्फ़िगरेशन API दस्तावेज़',
    fr: 'Documentation de l\'API de configuration pour gérer les paramètres Gemini CLI',
    de: 'Konfigurations-API-Dokumentation zur Verwaltung von Gemini CLI-Einstellungen',
    ja: 'Gemini CLI 設定を管理するための設定 API ドキュメント',
    ko: 'Gemini CLI 설정 관리를 위한 구성 API 문서',
    es: 'Documentación de la API de configuración para gestionar la configuración de Gemini CLI',
    ru: 'Документация API конфигурации для управления настройками Gemini CLI'
  }
  // 其他页面的描述...
};

// 生成页面模板
function generatePageTemplate(pageName, locale) {
  const titles = pageTitles[pageName] || {};
  const descriptions = pageDescriptions[pageName] || {};
  
  const title = titles[locale] || titles.en || pageName;
  const description = descriptions[locale] || descriptions.en || `${title} documentation`;
  
  return `import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface ${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = ${JSON.stringify(titles, null, 4)}

  const descriptions = ${JSON.stringify(descriptions, null, 4)}

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function Locale${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page({ params }: ${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}PageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/${pageName}')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}`;
}

// 创建缺失的页面
function createMissingPages() {
  console.log('🔧 开始恢复缺失的文档页面...\n');
  
  let createdCount = 0;
  
  for (const pageName of missingPages) {
    const dirPath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', pageName);
    const filePath = path.join(dirPath, 'page.tsx');
    
    // 检查目录是否存在，不存在则创建
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`📁 创建目录: ${dirPath}`);
    }
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      const content = generatePageTemplate(pageName, 'en');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ 创建页面: ${pageName}`);
      createdCount++;
    } else {
      console.log(`⏭️  页面已存在: ${pageName}`);
    }
  }
  
  console.log(`\n🎉 完成！创建了 ${createdCount} 个缺失的页面`);
}

// 执行脚本
if (require.main === module) {
  createMissingPages();
}

module.exports = { createMissingPages };
