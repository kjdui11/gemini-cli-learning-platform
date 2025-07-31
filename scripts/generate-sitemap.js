#!/usr/bin/env node

/**
 * Sitemap Generator Script
 * 
 * This script generates a complete, SEO-friendly sitemap.xml file
 * 
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs')
const path = require('path')

// Configuration
const CONFIG = {
  baseUrl: 'https://gemini-cli-learning-platform.vercel.app',
  locales: ['en', 'zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru'],
  defaultLocale: 'en',
  pages: [
    // Main pages
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/installation', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/guides', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/commands', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/docs', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'weekly' },
    
    // Docs sub-pages
    { path: '/docs/introduction', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/docs/basic-commands', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/docs/advanced-usage', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/docs/configuration', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/docs/troubleshooting', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/docs/migration-guide', priority: 0.6, changeFrequency: 'monthly' },
    
    // Guides sub-pages
    { path: '/guides/file-operations', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/guides/advanced-config', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/guides/integration', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/guides/code-refactoring', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/guides/documentation', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/guides/code-review', priority: 0.6, changeFrequency: 'monthly' },
  ]
}

class SitemapGenerator {
  constructor() {
    this.currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  }

  // Generate hreflang alternates for a page
  generateHreflangAlternates(pagePath) {
    const alternates = []
    
    // Add all language versions
    CONFIG.locales.forEach(locale => {
      const url = locale === CONFIG.defaultLocale 
        ? `${CONFIG.baseUrl}${pagePath}`
        : `${CONFIG.baseUrl}/${locale}${pagePath}`
      alternates.push(`    <xhtml:link rel="alternate" hreflang="${locale}" href="${url}"/>`)
    })
    
    // Add x-default
    alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${CONFIG.baseUrl}${pagePath}"/>`)
    
    return alternates.join('\n')
  }

  // Generate URL entry
  generateUrlEntry(pagePath, locale, page) {
    const url = locale === CONFIG.defaultLocale 
      ? `${CONFIG.baseUrl}${pagePath}`
      : `${CONFIG.baseUrl}/${locale}${pagePath}`
    
    const priority = locale === CONFIG.defaultLocale 
      ? page.priority 
      : page.priority * 0.9

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${this.currentDate}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${priority.toFixed(2)}</priority>
${this.generateHreflangAlternates(pagePath)}
  </url>`
  }

  // Generate complete sitemap
  generateSitemap() {
    const xmlParts = []
    
    // XML declaration and opening
    xmlParts.push('<?xml version="1.0" encoding="UTF-8"?>')
    xmlParts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">')
    
    // Generate entries for each page and locale
    CONFIG.pages.forEach(page => {
      CONFIG.locales.forEach(locale => {
        xmlParts.push(this.generateUrlEntry(page.path, locale, page))
      })
    })
    
    // Close urlset
    xmlParts.push('</urlset>')
    
    return xmlParts.join('\n')
  }

  // Save sitemap to file
  saveSitemap() {
    const sitemap = this.generateSitemap()
    const outputPath = path.join(__dirname, '../public/sitemap.xml')
    
    fs.writeFileSync(outputPath, sitemap, 'utf8')
    
    console.log('✅ Sitemap generated successfully!')
    console.log(`📁 Saved to: ${outputPath}`)
    console.log(`📊 Total URLs: ${CONFIG.pages.length * CONFIG.locales.length}`)
    console.log(`🌍 Languages: ${CONFIG.locales.length}`)
    console.log(`📄 Pages: ${CONFIG.pages.length}`)
    
    return sitemap
  }

  // Validate sitemap
  validateSitemap(sitemap) {
    const issues = []
    
    // Check XML structure
    if (!sitemap.includes('<?xml version="1.0"')) {
      issues.push('Missing XML declaration')
    }
    
    if (!sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
      issues.push('Missing sitemap namespace')
    }
    
    if (!sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) {
      issues.push('Missing hreflang namespace')
    }
    
    // Count elements
    const urlCount = (sitemap.match(/<url>/g) || []).length
    const expectedUrlCount = CONFIG.pages.length * CONFIG.locales.length
    
    if (urlCount !== expectedUrlCount) {
      issues.push(`URL count mismatch: expected ${expectedUrlCount}, found ${urlCount}`)
    }
    
    // Check hreflang
    const hreflangCount = (sitemap.match(/hreflang="/g) || []).length
    const expectedHreflangCount = urlCount * (CONFIG.locales.length + 1) // +1 for x-default
    
    if (hreflangCount !== expectedHreflangCount) {
      issues.push(`Hreflang count mismatch: expected ${expectedHreflangCount}, found ${hreflangCount}`)
    }
    
    if (issues.length === 0) {
      console.log('✅ Sitemap validation passed!')
    } else {
      console.log('❌ Sitemap validation issues:')
      issues.forEach(issue => console.log(`   - ${issue}`))
    }
    
    return issues.length === 0
  }

  // Run generator
  run() {
    console.log('🚀 Generating SEO-friendly sitemap...\n')
    
    const sitemap = this.saveSitemap()
    
    console.log('\n🔍 Validating sitemap...')
    const isValid = this.validateSitemap(sitemap)
    
    console.log('\n📋 Sitemap Statistics:')
    console.log(`   Total file size: ${(sitemap.length / 1024).toFixed(2)} KB`)
    console.log(`   Average URL size: ${(sitemap.length / (CONFIG.pages.length * CONFIG.locales.length)).toFixed(0)} bytes`)
    
    console.log('\n🔗 Next steps:')
    console.log('   1. Test sitemap: http://localhost:3001/sitemap.xml')
    console.log('   2. Submit to Google Search Console')
    console.log('   3. Submit to Bing Webmaster Tools')
    console.log('   4. Monitor indexing status')
    
    return isValid
  }
}

// Run generator
if (require.main === module) {
  const generator = new SitemapGenerator()
  const success = generator.run()
  process.exit(success ? 0 : 1)
}

module.exports = SitemapGenerator
