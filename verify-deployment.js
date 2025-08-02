#!/usr/bin/env node

/**
 * 部署验证脚本
 * 验证网站的关键功能和页面是否正常工作
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.geminicli.cloud';
const LANGUAGES = ['en', 'zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru'];
const PAGES = ['', '/installation', '/guides', '/commands', '/docs', '/faq'];

// 验证页面是否可访问
function checkPage(url) {
  return new Promise((resolve) => {
    const request = https.get(url, (response) => {
      const statusCode = response.statusCode;
      const isSuccess = statusCode >= 200 && statusCode < 300;
      resolve({
        url,
        status: statusCode,
        success: isSuccess,
        message: isSuccess ? '✅ 成功' : `❌ 失败 (${statusCode})`
      });
    });

    request.on('error', (error) => {
      resolve({
        url,
        status: 0,
        success: false,
        message: `❌ 错误: ${error.message}`
      });
    });

    request.setTimeout(10000, () => {
      request.destroy();
      resolve({
        url,
        status: 0,
        success: false,
        message: '❌ 超时'
      });
    });
  });
}

// 验证静态文件
async function verifyStaticFiles() {
  console.log('\n🔍 验证静态文件...');
  
  const staticFiles = [
    '/sitemap.xml',
    '/robots.txt',
    '/favicon.ico'
  ];

  for (const file of staticFiles) {
    const result = await checkPage(`${DOMAIN}${file}`);
    console.log(`${result.message} ${result.url}`);
  }
}

// 验证多语言页面
async function verifyLanguagePages() {
  console.log('\n🌍 验证多语言页面...');
  
  let totalPages = 0;
  let successPages = 0;

  for (const lang of LANGUAGES) {
    console.log(`\n📝 验证 ${lang.toUpperCase()} 版本:`);
    
    for (const page of PAGES) {
      const url = lang === 'en' 
        ? `${DOMAIN}${page}` 
        : `${DOMAIN}/${lang}${page}`;
      
      const result = await checkPage(url);
      console.log(`  ${result.message} ${result.url}`);
      
      totalPages++;
      if (result.success) successPages++;
    }
  }

  console.log(`\n📊 页面验证统计:`);
  console.log(`  总页面数: ${totalPages}`);
  console.log(`  成功页面: ${successPages}`);
  console.log(`  失败页面: ${totalPages - successPages}`);
  console.log(`  成功率: ${((successPages / totalPages) * 100).toFixed(1)}%`);
}

// 验证 SEO 配置
async function verifySEO() {
  console.log('\n🔍 验证 SEO 配置...');
  
  // 检查 sitemap.xml
  const sitemapResult = await checkPage(`${DOMAIN}/sitemap.xml`);
  console.log(`${sitemapResult.message} Sitemap`);
  
  // 检查 robots.txt
  const robotsResult = await checkPage(`${DOMAIN}/robots.txt`);
  console.log(`${robotsResult.message} Robots.txt`);
  
  // 检查首页是否包含必要的 meta 标签
  console.log('\n📋 建议手动验证的 SEO 项目:');
  console.log('  - Google Analytics 跟踪代码');
  console.log('  - Meta 描述和标题');
  console.log('  - 结构化数据 (JSON-LD)');
  console.log('  - hreflang 标记');
  console.log('  - Open Graph 标签');
}

// 验证本地构建文件
function verifyLocalBuild() {
  console.log('\n📁 验证本地构建文件...');
  
  const outDir = path.join(__dirname, 'out');
  
  if (!fs.existsSync(outDir)) {
    console.log('❌ out/ 目录不存在，请先运行 npm run build');
    return false;
  }
  
  // 检查关键文件
  const keyFiles = [
    'index.html',
    'sitemap.xml',
    'robots.txt',
    'zh/index.html',
    'zh/commands/index.html',
    'hi/index.html',
    'hi/commands/index.html'
  ];
  
  let allFilesExist = true;
  
  for (const file of keyFiles) {
    const filePath = path.join(outDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`❌ ${file} 缺失`);
      allFilesExist = false;
    }
  }
  
  // 统计文件数量
  const countFiles = (dir) => {
    let count = 0;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const itemPath = path.join(dir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        count += countFiles(itemPath);
      } else {
        count++;
      }
    }
    return count;
  };
  
  const totalFiles = countFiles(outDir);
  console.log(`\n📊 构建统计:`);
  console.log(`  总文件数: ${totalFiles}`);
  console.log(`  关键文件: ${allFilesExist ? '✅ 完整' : '❌ 缺失'}`);
  
  return allFilesExist;
}

// 主函数
async function main() {
  console.log('🚀 Gemini CLI 学习平台 - 部署验证');
  console.log('=====================================');
  
  // 验证本地构建
  const localBuildOk = verifyLocalBuild();
  
  if (!localBuildOk) {
    console.log('\n❌ 本地构建验证失败，请修复后再部署');
    process.exit(1);
  }
  
  // 如果提供了域名参数，验证在线部署
  if (process.argv.includes('--online')) {
    console.log(`\n🌐 验证在线部署: ${DOMAIN}`);
    
    await verifyStaticFiles();
    await verifyLanguagePages();
    await verifySEO();
    
    console.log('\n✅ 部署验证完成！');
    console.log('\n📋 后续步骤:');
    console.log('  1. 在 Google Search Console 提交 sitemap');
    console.log('  2. 验证 Google Analytics 数据');
    console.log('  3. 测试移动端响应式设计');
    console.log('  4. 监控网站性能和错误');
  } else {
    console.log('\n✅ 本地构建验证完成！');
    console.log('\n🚀 准备部署到 Vercel:');
    console.log('  运行: vercel --prod');
    console.log('  或者: npm run deploy');
    console.log('\n🌐 部署后验证在线版本:');
    console.log('  运行: node verify-deployment.js --online');
  }
}

// 运行验证
main().catch(console.error);
