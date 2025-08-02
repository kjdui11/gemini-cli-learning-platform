const https = require('https');
const fs = require('fs');

// 网站配置
const SITE_URL = 'https://gemini-cli-learning-platform.vercel.app';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// 搜索引擎提交端点
const SEARCH_ENGINES = {
  google: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  bing: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  yandex: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
};

// 提交sitemap到搜索引擎
async function submitToSearchEngine(name, url) {
  return new Promise((resolve, reject) => {
    console.log(`🔄 正在提交到 ${name}...`);
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`✅ ${name} 提交成功!`);
          resolve({ engine: name, status: 'success', response: data });
        } else {
          console.log(`❌ ${name} 提交失败: ${res.statusCode}`);
          resolve({ engine: name, status: 'failed', statusCode: res.statusCode });
        }
      });
    }).on('error', (err) => {
      console.log(`❌ ${name} 提交错误:`, err.message);
      reject({ engine: name, status: 'error', error: err.message });
    });
  });
}

// 验证sitemap可访问性
async function verifySitemap() {
  return new Promise((resolve, reject) => {
    console.log('🔍 验证sitemap可访问性...');
    
    https.get(SITEMAP_URL, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Sitemap可正常访问');
        resolve(true);
      } else {
        console.log(`❌ Sitemap访问失败: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log('❌ Sitemap验证错误:', err.message);
      reject(err);
    });
  });
}

// 生成提交报告
function generateReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    siteUrl: SITE_URL,
    sitemapUrl: SITEMAP_URL,
    results: results,
    summary: {
      total: results.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status !== 'success').length
    }
  };
  
  // 保存报告
  fs.writeFileSync('sitemap-submission-report.json', JSON.stringify(report, null, 2));
  console.log('\n📊 提交报告已保存到: sitemap-submission-report.json');
  
  return report;
}

// 主函数
async function main() {
  console.log('🚀 开始提交sitemap到搜索引擎...\n');
  console.log(`📍 网站URL: ${SITE_URL}`);
  console.log(`🗺️  Sitemap URL: ${SITEMAP_URL}\n`);
  
  try {
    // 验证sitemap
    const isAccessible = await verifySitemap();
    if (!isAccessible) {
      console.log('❌ Sitemap不可访问，请检查网站部署状态');
      return;
    }
    
    console.log('\n🔄 开始提交到各搜索引擎...\n');
    
    // 提交到所有搜索引擎
    const results = [];
    for (const [name, url] of Object.entries(SEARCH_ENGINES)) {
      try {
        const result = await submitToSearchEngine(name, url);
        results.push(result);
      } catch (error) {
        results.push(error);
      }
      
      // 添加延迟避免请求过快
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // 生成报告
    console.log('\n📊 生成提交报告...');
    const report = generateReport(results);
    
    console.log('\n🎉 Sitemap提交完成!');
    console.log(`✅ 成功: ${report.summary.successful}/${report.summary.total}`);
    console.log(`❌ 失败: ${report.summary.failed}/${report.summary.total}`);
    
    if (report.summary.failed > 0) {
      console.log('\n💡 提示: 某些搜索引擎可能需要手动提交或账号验证');
    }
    
  } catch (error) {
    console.error('❌ 提交过程中发生错误:', error);
  }
}

// 执行脚本
if (require.main === module) {
  main();
}

module.exports = { submitToSearchEngine, verifySitemap, generateReport };
