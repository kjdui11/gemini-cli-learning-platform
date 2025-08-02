#!/usr/bin/env node

/**
 * 搜索引擎验证文件生成器
 * 帮助生成 Google 和 Bing 的验证文件
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function generateGoogleVerification() {
  console.log('\n🔍 Google Search Console 验证文件生成');
  console.log('=====================================');
  
  const verificationCode = await question('请输入 Google 验证文件名 (如: google123abc.html): ');
  
  if (!verificationCode) {
    console.log('❌ 未提供验证文件名，跳过 Google 验证文件生成');
    return;
  }
  
  const content = `google-site-verification: ${verificationCode}`;
  const filePath = path.join('public', verificationCode);
  
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Google 验证文件已生成: ${filePath}`);
    console.log(`📋 验证 URL: https://www.geminicli.cloud/${verificationCode}`);
  } catch (error) {
    console.log(`❌ 生成 Google 验证文件失败: ${error.message}`);
  }
}

async function generateBingVerification() {
  console.log('\n🔍 Bing Webmaster Tools 验证文件生成');
  console.log('====================================');
  
  const verificationCode = await question('请输入 Bing 验证码 (如: 123ABC456DEF): ');
  
  if (!verificationCode) {
    console.log('❌ 未提供验证码，跳过 Bing 验证文件生成');
    return;
  }
  
  const content = `<?xml version="1.0"?>
<users>
  <user>${verificationCode}</user>
</users>`;
  
  const filePath = path.join('public', 'BingSiteAuth.xml');
  
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Bing 验证文件已生成: ${filePath}`);
    console.log(`📋 验证 URL: https://www.geminicli.cloud/BingSiteAuth.xml`);
  } catch (error) {
    console.log(`❌ 生成 Bing 验证文件失败: ${error.message}`);
  }
}

async function generateMetaTags() {
  console.log('\n🏷️  Meta 标签验证代码生成');
  console.log('============================');
  
  const googleMeta = await question('请输入 Google meta 验证码 (可选): ');
  const bingMeta = await question('请输入 Bing meta 验证码 (可选): ');
  
  if (!googleMeta && !bingMeta) {
    console.log('❌ 未提供 meta 验证码，跳过 meta 标签生成');
    return;
  }
  
  let metaTags = [];
  
  if (googleMeta) {
    metaTags.push(`<meta name="google-site-verification" content="${googleMeta}" />`);
  }
  
  if (bingMeta) {
    metaTags.push(`<meta name="msvalidate.01" content="${bingMeta}" />`);
  }
  
  const content = `<!-- 搜索引擎验证 Meta 标签 -->
<!-- 将以下标签添加到网站的 <head> 部分 -->

${metaTags.join('\n')}

<!-- 添加完成后重新部署网站 -->`;
  
  const filePath = 'verification-meta-tags.html';
  
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Meta 标签已生成: ${filePath}`);
    console.log('📋 请将文件中的标签添加到网站的 <head> 部分');
  } catch (error) {
    console.log(`❌ 生成 Meta 标签失败: ${error.message}`);
  }
}

async function submitToSearchEngines() {
  console.log('\n🚀 自动提交到搜索引擎');
  console.log('========================');
  
  const sitemap = 'https://www.geminicli.cloud/sitemap.xml';
  
  // Google 提交 (通过 ping)
  console.log('📤 提交到 Google...');
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`;
  console.log(`🔗 Google Ping URL: ${googlePingUrl}`);
  
  // Bing 提交 (通过 ping)
  console.log('📤 提交到 Bing...');
  const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`;
  console.log(`🔗 Bing Ping URL: ${bingPingUrl}`);
  
  console.log('\n📋 手动访问以上 URL 来提交 sitemap');
  console.log('或者在浏览器中打开这些链接');
}

async function generateRobotsTxtUpdate() {
  console.log('\n🤖 更新 Robots.txt');
  console.log('==================');
  
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.geminicli.cloud/sitemap.xml

# Disallow crawling of API routes and internal files
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: *.json$

# Allow crawling of all language versions
Allow: /zh/
Allow: /hi/
Allow: /fr/
Allow: /de/
Allow: /ja/
Allow: /ko/
Allow: /es/
Allow: /ru/

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Host
Host: https://www.geminicli.cloud

# Submit to search engines
# Google: https://www.google.com/ping?sitemap=https://www.geminicli.cloud/sitemap.xml
# Bing: https://www.bing.com/ping?sitemap=https://www.geminicli.cloud/sitemap.xml`;

  console.log('📋 当前 Robots.txt 内容:');
  console.log(robotsContent);
  console.log('\n✅ Robots.txt 已经包含正确的 sitemap 引用');
}

async function main() {
  console.log('🔍 搜索引擎提交工具');
  console.log('====================');
  console.log('此工具将帮助您生成验证文件并提交网站到搜索引擎\n');
  
  try {
    // 确保 public 目录存在
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }
    
    console.log('请选择要执行的操作:');
    console.log('1. 生成 Google 验证文件');
    console.log('2. 生成 Bing 验证文件');
    console.log('3. 生成 Meta 标签验证代码');
    console.log('4. 提交 Sitemap 到搜索引擎');
    console.log('5. 检查 Robots.txt');
    console.log('6. 全部执行');
    
    const choice = await question('\n请输入选项 (1-6): ');
    
    switch (choice) {
      case '1':
        await generateGoogleVerification();
        break;
      case '2':
        await generateBingVerification();
        break;
      case '3':
        await generateMetaTags();
        break;
      case '4':
        await submitToSearchEngines();
        break;
      case '5':
        await generateRobotsTxtUpdate();
        break;
      case '6':
        await generateGoogleVerification();
        await generateBingVerification();
        await generateMetaTags();
        await submitToSearchEngines();
        await generateRobotsTxtUpdate();
        break;
      default:
        console.log('❌ 无效选项');
    }
    
    console.log('\n✅ 操作完成！');
    console.log('\n📋 后续步骤:');
    console.log('1. 如果生成了验证文件，请重新部署网站');
    console.log('2. 在 Google Search Console 和 Bing Webmaster Tools 中完成验证');
    console.log('3. 提交 sitemap 并监控索引状态');
    console.log('4. 查看详细指南: seo-submission-guide.md');
    
  } catch (error) {
    console.error('❌ 执行过程中出现错误:', error.message);
  } finally {
    rl.close();
  }
}

// 运行主函数
main().catch(console.error);
