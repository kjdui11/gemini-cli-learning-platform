#!/usr/bin/env node

/**
 * 自动提交 Sitemap 到搜索引擎
 */

const https = require('https');

const SITEMAP_URL = 'https://www.geminicli.cloud/sitemap.xml';

// 提交到 Google
function submitToGoogle() {
  return new Promise((resolve) => {
    const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    
    console.log('📤 提交到 Google Search Console...');
    console.log(`🔗 URL: ${url}`);
    
    const request = https.get(url, (response) => {
      const statusCode = response.statusCode;
      if (statusCode === 200) {
        console.log('✅ Google 提交成功');
      } else {
        console.log(`⚠️  Google 提交状态: ${statusCode}`);
      }
      resolve(statusCode === 200);
    });

    request.on('error', (error) => {
      console.log(`❌ Google 提交失败: ${error.message}`);
      resolve(false);
    });

    request.setTimeout(10000, () => {
      request.destroy();
      console.log('❌ Google 提交超时');
      resolve(false);
    });
  });
}

// 提交到 Bing
function submitToBing() {
  return new Promise((resolve) => {
    const url = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    
    console.log('\n📤 提交到 Bing Webmaster Tools...');
    console.log(`🔗 URL: ${url}`);
    
    const request = https.get(url, (response) => {
      const statusCode = response.statusCode;
      if (statusCode === 200) {
        console.log('✅ Bing 提交成功');
      } else {
        console.log(`⚠️  Bing 提交状态: ${statusCode}`);
      }
      resolve(statusCode === 200);
    });

    request.on('error', (error) => {
      console.log(`❌ Bing 提交失败: ${error.message}`);
      resolve(false);
    });

    request.setTimeout(10000, () => {
      request.destroy();
      console.log('❌ Bing 提交超时');
      resolve(false);
    });
  });
}

// 验证 sitemap 可访问性
function verifySitemap() {
  return new Promise((resolve) => {
    console.log('🔍 验证 Sitemap 可访问性...');
    
    const request = https.get(SITEMAP_URL, (response) => {
      const statusCode = response.statusCode;
      if (statusCode === 200) {
        console.log('✅ Sitemap 可正常访问');
        resolve(true);
      } else {
        console.log(`❌ Sitemap 访问失败: ${statusCode}`);
        resolve(false);
      }
    });

    request.on('error', (error) => {
      console.log(`❌ Sitemap 验证失败: ${error.message}`);
      resolve(false);
    });

    request.setTimeout(5000, () => {
      request.destroy();
      console.log('❌ Sitemap 验证超时');
      resolve(false);
    });
  });
}

// 主函数
async function main() {
  console.log('🚀 自动提交 Sitemap 到搜索引擎');
  console.log('================================');
  console.log(`📋 Sitemap URL: ${SITEMAP_URL}\n`);
  
  // 首先验证 sitemap 可访问性
  const sitemapOk = await verifySitemap();
  
  if (!sitemapOk) {
    console.log('\n❌ Sitemap 不可访问，请检查网站部署状态');
    process.exit(1);
  }
  
  // 提交到搜索引擎
  const googleSuccess = await submitToGoogle();
  const bingSuccess = await submitToBing();
  
  console.log('\n📊 提交结果总结:');
  console.log(`Google Search Console: ${googleSuccess ? '✅ 成功' : '❌ 失败'}`);
  console.log(`Bing Webmaster Tools: ${bingSuccess ? '✅ 成功' : '❌ 失败'}`);
  
  if (googleSuccess || bingSuccess) {
    console.log('\n🎉 Sitemap 提交完成！');
    console.log('\n📋 后续步骤:');
    console.log('1. 在 Google Search Console 检查 sitemap 处理状态');
    console.log('2. 在 Bing Webmaster Tools 检查 sitemap 处理状态');
    console.log('3. 监控索引进度和搜索表现');
    console.log('4. 定期重新提交以确保最新内容被索引');
  } else {
    console.log('\n⚠️  所有提交都失败了');
    console.log('请手动访问以下链接提交:');
    console.log(`Google: https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    console.log(`Bing: https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
  }
  
  console.log('\n📖 详细提交指南请查看: seo-submission-guide.md');
}

// 运行主函数
main().catch(console.error);
