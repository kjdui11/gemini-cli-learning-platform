#!/usr/bin/env node

/**
 * SEO Analysis Script
 * 
 * This script analyzes the SEO quality of sitemap.xml and provides recommendations
 * 
 * Usage: node scripts/analyze-seo.js
 */

const https = require('https')
const http = require('http')

// Configuration
const CONFIG = {
  baseUrl: 'http://localhost:3001',
  expectedLocales: ['en', 'zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru'],
  expectedPages: [
    '',
    '/installation',
    '/guides',
    '/commands',
    '/docs',
    '/faq',
    '/docs/introduction',
    '/docs/basic-commands',
    '/docs/advanced-usage',
    '/docs/configuration',
    '/docs/troubleshooting',
    '/docs/migration-guide',
    '/guides/file-operations',
    '/guides/advanced-config',
    '/guides/integration',
    '/guides/code-refactoring',
    '/guides/documentation',
    '/guides/code-review'
  ]
}

class SEOAnalyzer {
  constructor() {
    this.issues = []
    this.warnings = []
    this.successes = []
  }

  // Fetch content from URL
  async fetchContent(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http
      client.get(url, (res) => {
        let data = ''
        res.on('data', chunk => data += chunk)
        res.on('end', () => resolve(data))
      }).on('error', reject)
    })
  }

  // Analyze sitemap.xml
  async analyzeSitemap() {
    console.log('🔍 Analyzing Sitemap.xml...\n')
    
    try {
      const sitemapUrl = `${CONFIG.baseUrl}/sitemap.xml`
      const sitemapContent = await this.fetchContent(sitemapUrl)
      
      // Check XML structure
      if (!sitemapContent.includes('<?xml version="1.0"')) {
        this.issues.push('❌ Missing XML declaration')
      } else {
        this.successes.push('✅ Valid XML declaration')
      }

      if (!sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
        this.issues.push('❌ Missing or incorrect sitemap namespace')
      } else {
        this.successes.push('✅ Correct sitemap namespace')
      }

      // Check hreflang namespace
      if (!sitemapContent.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) {
        this.issues.push('❌ Missing hreflang namespace')
      } else {
        this.successes.push('✅ Hreflang namespace present')
      }

      // Count URLs
      const urlCount = (sitemapContent.match(/<url>/g) || []).length
      const expectedUrlCount = CONFIG.expectedPages.length * CONFIG.expectedLocales.length
      
      console.log(`📊 URL Analysis:`)
      console.log(`   Expected URLs: ${expectedUrlCount}`)
      console.log(`   Found URLs: ${urlCount}`)
      
      if (urlCount === expectedUrlCount) {
        this.successes.push('✅ Correct number of URLs')
      } else if (urlCount < expectedUrlCount) {
        this.issues.push(`❌ Missing URLs: expected ${expectedUrlCount}, found ${urlCount}`)
      } else {
        this.warnings.push(`⚠️  Extra URLs: expected ${expectedUrlCount}, found ${urlCount}`)
      }

      // Check hreflang implementation
      const hreflangCount = (sitemapContent.match(/hreflang="/g) || []).length
      const expectedHreflangCount = urlCount * (CONFIG.expectedLocales.length + 1) // +1 for x-default
      
      console.log(`\n🌍 Hreflang Analysis:`)
      console.log(`   Expected hreflang tags: ${expectedHreflangCount}`)
      console.log(`   Found hreflang tags: ${hreflangCount}`)
      
      if (hreflangCount >= expectedHreflangCount * 0.9) {
        this.successes.push('✅ Comprehensive hreflang implementation')
      } else {
        this.issues.push('❌ Insufficient hreflang tags')
      }

      // Check for x-default
      if (sitemapContent.includes('hreflang="x-default"')) {
        this.successes.push('✅ x-default hreflang present')
      } else {
        this.warnings.push('⚠️  Missing x-default hreflang (recommended for international sites)')
      }

      // Check required elements
      const requiredElements = ['<loc>', '<lastmod>', '<changefreq>', '<priority>']
      requiredElements.forEach(element => {
        if (sitemapContent.includes(element)) {
          this.successes.push(`✅ ${element} elements present`)
        } else {
          this.issues.push(`❌ Missing ${element} elements`)
        }
      })

      // Check priority values
      const priorities = sitemapContent.match(/<priority>([\d.]+)<\/priority>/g) || []
      const validPriorities = priorities.every(p => {
        const value = parseFloat(p.match(/>([\d.]+)</)[1])
        return value >= 0 && value <= 1
      })
      
      if (validPriorities && priorities.length > 0) {
        this.successes.push('✅ Valid priority values (0.0-1.0)')
      } else {
        this.issues.push('❌ Invalid priority values')
      }

      // Check changefreq values
      const validChangefreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']
      const changefreqs = sitemapContent.match(/<changefreq>(\w+)<\/changefreq>/g) || []
      const validChangefreqValues = changefreqs.every(cf => {
        const value = cf.match(/>(\w+)</)[1]
        return validChangefreqs.includes(value)
      })
      
      if (validChangefreqValues && changefreqs.length > 0) {
        this.successes.push('✅ Valid changefreq values')
      } else {
        this.issues.push('❌ Invalid changefreq values')
      }

    } catch (error) {
      this.issues.push(`❌ Error fetching sitemap: ${error.message}`)
    }
  }

  // Analyze robots.txt
  async analyzeRobots() {
    console.log('\n🤖 Analyzing Robots.txt...\n')
    
    try {
      const robotsUrl = `${CONFIG.baseUrl}/robots.txt`
      const robotsContent = await this.fetchContent(robotsUrl)
      
      // Check basic structure
      if (robotsContent.includes('User-agent:')) {
        this.successes.push('✅ User-agent directives present')
      } else {
        this.issues.push('❌ Missing User-agent directives')
      }

      if (robotsContent.includes('Sitemap:')) {
        this.successes.push('✅ Sitemap reference present')
      } else {
        this.issues.push('❌ Missing sitemap reference')
      }

      // Check for common search engines
      const searchEngines = ['Googlebot', 'Bingbot']
      searchEngines.forEach(bot => {
        if (robotsContent.includes(bot)) {
          this.successes.push(`✅ ${bot} specific rules`)
        } else {
          this.warnings.push(`⚠️  Consider adding ${bot} specific rules`)
        }
      })

      // Check for security
      const protectedPaths = ['/api/', '/admin/', '/private/']
      protectedPaths.forEach(path => {
        if (robotsContent.includes(`Disallow: ${path}`)) {
          this.successes.push(`✅ Protected path: ${path}`)
        } else {
          this.warnings.push(`⚠️  Consider protecting: ${path}`)
        }
      })

    } catch (error) {
      this.issues.push(`❌ Error fetching robots.txt: ${error.message}`)
    }
  }

  // Generate SEO recommendations
  generateRecommendations() {
    console.log('\n💡 SEO Recommendations...\n')
    
    const recommendations = [
      {
        category: 'Sitemap Optimization',
        items: [
          'Submit sitemap to Google Search Console',
          'Submit sitemap to Bing Webmaster Tools',
          'Monitor sitemap errors in search console',
          'Update lastmod dates when content changes',
          'Ensure all important pages are included'
        ]
      },
      {
        category: 'International SEO',
        items: [
          'Verify hreflang implementation with Google Search Console',
          'Test language targeting with international SEO tools',
          'Monitor organic traffic by country/language',
          'Ensure content quality across all languages',
          'Use proper locale-specific URLs'
        ]
      },
      {
        category: 'Technical SEO',
        items: [
          'Monitor Core Web Vitals performance',
          'Implement structured data markup',
          'Optimize page loading speeds',
          'Ensure mobile-friendly design',
          'Use HTTPS for all pages'
        ]
      },
      {
        category: 'Content SEO',
        items: [
          'Write unique meta descriptions for each page',
          'Use descriptive, keyword-rich URLs',
          'Implement proper heading hierarchy (H1-H6)',
          'Add alt text to all images',
          'Create high-quality, original content'
        ]
      }
    ]

    recommendations.forEach(category => {
      console.log(`📋 ${category.category}:`)
      category.items.forEach(item => {
        console.log(`   • ${item}`)
      })
      console.log()
    })
  }

  // Generate SEO score
  calculateSEOScore() {
    const totalChecks = this.successes.length + this.warnings.length + this.issues.length
    const successWeight = 1
    const warningWeight = 0.5
    const issueWeight = 0
    
    const score = Math.round(
      ((this.successes.length * successWeight) + 
       (this.warnings.length * warningWeight) + 
       (this.issues.length * issueWeight)) / totalChecks * 100
    )
    
    return score
  }

  // Run complete analysis
  async run() {
    console.log('🚀 Starting SEO Analysis...\n')
    console.log('=' .repeat(60))
    
    await this.analyzeSitemap()
    await this.analyzeRobots()
    
    console.log('\n' + '=' .repeat(60))
    console.log('📋 Analysis Summary\n')
    
    // Display results
    if (this.successes.length > 0) {
      console.log('✅ Successes:')
      this.successes.forEach(success => console.log(`   ${success}`))
      console.log()
    }
    
    if (this.warnings.length > 0) {
      console.log('⚠️  Warnings:')
      this.warnings.forEach(warning => console.log(`   ${warning}`))
      console.log()
    }
    
    if (this.issues.length > 0) {
      console.log('❌ Issues:')
      this.issues.forEach(issue => console.log(`   ${issue}`))
      console.log()
    }
    
    // Calculate and display SEO score
    const score = this.calculateSEOScore()
    console.log(`🎯 SEO Score: ${score}/100`)
    
    if (score >= 90) {
      console.log('🎉 Excellent SEO configuration!')
    } else if (score >= 75) {
      console.log('👍 Good SEO configuration with room for improvement')
    } else if (score >= 60) {
      console.log('⚠️  Fair SEO configuration - needs attention')
    } else {
      console.log('❌ Poor SEO configuration - requires immediate fixes')
    }
    
    this.generateRecommendations()
    
    console.log('\n' + '=' .repeat(60))
    console.log('🔗 Test URLs:')
    console.log(`   Sitemap: ${CONFIG.baseUrl}/sitemap.xml`)
    console.log(`   Robots: ${CONFIG.baseUrl}/robots.txt`)
    console.log(`   Manifest: ${CONFIG.baseUrl}/manifest.json`)
    
    return score >= 75
  }
}

// Run analysis
if (require.main === module) {
  const analyzer = new SEOAnalyzer()
  analyzer.run().then(success => {
    process.exit(success ? 0 : 1)
  }).catch(error => {
    console.error('Analysis failed:', error)
    process.exit(1)
  })
}

module.exports = SEOAnalyzer
