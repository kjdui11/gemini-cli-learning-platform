const fs = require('fs');
const path = require('path');

// 支持的语言
const locales = ['en', 'zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru'];

// 需要检查的文档页面
const docPages = [
  'api-reference',
  'architecture', 
  'build-and-test',
  'built-in-tools',
  'changelog',
  'coding-standards',
  'config-api',
  'configuration',
  'contributing-guide',
  'core-api',
  'development-setup',
  'examples',
  'extension-architecture',
  'extension-publishing',
  'extension-system',
  'first-extension',
  'installation',
  'mcp-client',
  'mcp-introduction',
  'mcp-server',
  'migration-guide',
  'plugin-api',
  'project-management',
  'project-structure',
  'pull-request-guide',
  'tool-development',
  'tools-api',
  'troubleshooting'
];

// 检查页面是否存在
function checkPageExists(locale, page) {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', page, 'page.tsx');
  return fs.existsSync(filePath);
}

// 检查英文版本是否存在
function checkEnglishPageExists(page) {
  const filePath = path.join(__dirname, '..', 'src', 'app', 'docs', page, 'page.tsx');
  return fs.existsSync(filePath);
}

// 验证多语言链接
function verifyMultilingualLinks() {
  console.log('🔍 验证多语言文档链接...\n');
  
  const results = {
    total: 0,
    missing: [],
    existing: [],
    summary: {}
  };
  
  // 检查每个语言的每个页面
  for (const locale of locales) {
    results.summary[locale] = { total: 0, existing: 0, missing: 0 };
    
    for (const page of docPages) {
      results.total++;
      results.summary[locale].total++;
      
      if (locale === 'en') {
        // 英文版本在不同的路径
        const exists = checkEnglishPageExists(page);
        if (exists) {
          results.existing.push(`${locale}/${page}`);
          results.summary[locale].existing++;
        } else {
          results.missing.push(`${locale}/${page}`);
          results.summary[locale].missing++;
        }
      } else {
        // 其他语言版本
        const exists = checkPageExists(locale, page);
        if (exists) {
          results.existing.push(`${locale}/${page}`);
          results.summary[locale].existing++;
        } else {
          results.missing.push(`${locale}/${page}`);
          results.summary[locale].missing++;
        }
      }
    }
  }
  
  // 输出结果
  console.log('📊 验证结果:\n');
  
  // 按语言显示统计
  for (const locale of locales) {
    const stats = results.summary[locale];
    const percentage = ((stats.existing / stats.total) * 100).toFixed(1);
    const status = stats.missing === 0 ? '✅' : '⚠️';
    
    console.log(`${status} ${locale.toUpperCase()}: ${stats.existing}/${stats.total} (${percentage}%)`);
    
    if (stats.missing > 0) {
      const missingPages = results.missing
        .filter(item => item.startsWith(`${locale}/`))
        .map(item => item.replace(`${locale}/`, ''));
      console.log(`   缺失: ${missingPages.join(', ')}`);
    }
  }
  
  console.log('\n📈 总体统计:');
  console.log(`总页面数: ${results.total}`);
  console.log(`存在页面: ${results.existing.length}`);
  console.log(`缺失页面: ${results.missing.length}`);
  console.log(`完整率: ${((results.existing.length / results.total) * 100).toFixed(1)}%`);
  
  if (results.missing.length > 0) {
    console.log('\n❌ 缺失的页面:');
    results.missing.forEach(page => {
      console.log(`   - ${page}`);
    });
  } else {
    console.log('\n🎉 所有多语言页面都存在！');
  }
  
  return results;
}

// 生成缺失页面的创建脚本
function generateMissingPagesScript(results) {
  if (results.missing.length === 0) {
    return;
  }
  
  console.log('\n🔧 生成缺失页面创建脚本...');
  
  const script = `// 自动生成的缺失页面创建脚本
const fs = require('fs');
const path = require('path');

const missingPages = ${JSON.stringify(results.missing, null, 2)};

// 页面模板
function generatePageTemplate(locale, pageName) {
  return \`import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface \${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: \${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}PageProps): Promise<Metadata> {
  return {
    title: '\${pageName} - Gemini CLI Documentation',
    description: 'Gemini CLI \${pageName} documentation',
  }
}

export default async function Locale\${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page({ params }: \${pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}PageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/\${pageName}')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}\`;
}

// 创建缺失页面
missingPages.forEach(pageInfo => {
  const [locale, pageName] = pageInfo.split('/');
  
  if (locale === 'en') {
    // 英文版本跳过，因为应该已经存在
    return;
  }
  
  const dirPath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', pageName);
  const filePath = path.join(dirPath, 'page.tsx');
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  if (!fs.existsSync(filePath)) {
    const content = generatePageTemplate(locale, pageName);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(\`✅ 创建页面: \${pageInfo}\`);
  }
});

console.log('🎉 缺失页面创建完成！');
`;
  
  fs.writeFileSync(path.join(__dirname, 'create-missing-pages.js'), script, 'utf8');
  console.log('📝 脚本已保存到: scripts/create-missing-pages.js');
}

// 执行验证
if (require.main === module) {
  const results = verifyMultilingualLinks();
  generateMissingPagesScript(results);
}

module.exports = { verifyMultilingualLinks };
