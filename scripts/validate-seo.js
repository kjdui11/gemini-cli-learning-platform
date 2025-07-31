#!/usr/bin/env node

/**
 * SEO Validation Script
 * 
 * This script validates the SEO configuration including:
 * - Sitemap completeness
 * - Robots.txt configuration
 * - Manifest.json validity
 * - Structured data presence
 * 
 * Usage: node scripts/validate-seo.js
 */

const fs = require('fs')
const path = require('path')

// Configuration
const CONFIG = {
  baseUrl: 'https://geminicli.cloud',
  supportedLocales: ['en', 'zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru'],
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

class SEOValidator {
  constructor() {
    this.errors = []
    this.warnings = []
    this.successes = []
  }

  // Validate sitemap configuration
  validateSitemapConfig() {
    console.log('🔍 Validating Sitemap Configuration...\n')
    
    try {
      const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts')
      if (!fs.existsSync(sitemapPath)) {
        this.errors.push('Sitemap file not found: src/app/sitemap.ts')
        return
      }

      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
      
      // Check for required imports
      if (!sitemapContent.includes('import { locales')) {
        this.errors.push('Sitemap missing locales import')
      } else {
        this.successes.push('✅ Sitemap includes locale configuration')
      }

      // Check for alternate languages
      if (!sitemapContent.includes('alternates')) {
        this.errors.push('Sitemap missing hreflang alternates')
      } else {
        this.successes.push('✅ Sitemap includes hreflang alternates')
      }

      // Check for priority and changeFrequency
      if (!sitemapContent.includes('priority') || !sitemapContent.includes('changeFrequency')) {
        this.warnings.push('⚠️  Sitemap may be missing priority or changeFrequency settings')
      } else {
        this.successes.push('✅ Sitemap includes priority and changeFrequency')
      }

      // Estimate total URLs
      const totalPages = CONFIG.expectedPages.length
      const totalLocales = CONFIG.supportedLocales.length
      const estimatedUrls = totalPages * totalLocales
      
      console.log(`📊 Expected sitemap entries: ${estimatedUrls} URLs`)
      console.log(`   - ${totalPages} pages × ${totalLocales} locales`)
      this.successes.push(`✅ Sitemap should generate ~${estimatedUrls} URLs`)

    } catch (error) {
      this.errors.push(`Error validating sitemap: ${error.message}`)
    }
  }

  // Validate robots.txt configuration
  validateRobotsConfig() {
    console.log('\n🤖 Validating Robots.txt Configuration...\n')
    
    try {
      const robotsPath = path.join(__dirname, '../src/app/robots.ts')
      if (!fs.existsSync(robotsPath)) {
        this.errors.push('Robots file not found: src/app/robots.ts')
        return
      }

      const robotsContent = fs.readFileSync(robotsPath, 'utf8')
      
      // Check for sitemap reference
      if (!robotsContent.includes('sitemap:')) {
        this.errors.push('Robots.txt missing sitemap reference')
      } else {
        this.successes.push('✅ Robots.txt includes sitemap reference')
      }

      // Check for user agent rules
      if (!robotsContent.includes('userAgent:')) {
        this.errors.push('Robots.txt missing user agent rules')
      } else {
        this.successes.push('✅ Robots.txt includes user agent rules')
      }

      // Check for disallow rules
      if (!robotsContent.includes('disallow:')) {
        this.warnings.push('⚠️  Robots.txt may be missing disallow rules')
      } else {
        this.successes.push('✅ Robots.txt includes disallow rules')
      }

      // Check for specific bot rules
      if (robotsContent.includes('Googlebot') && robotsContent.includes('Bingbot')) {
        this.successes.push('✅ Robots.txt includes specific search engine rules')
      } else {
        this.warnings.push('⚠️  Consider adding specific rules for major search engines')
      }

    } catch (error) {
      this.errors.push(`Error validating robots.txt: ${error.message}`)
    }
  }

  // Validate manifest configuration
  validateManifestConfig() {
    console.log('\n📱 Validating Manifest Configuration...\n')
    
    try {
      const manifestPath = path.join(__dirname, '../src/app/manifest.ts')
      if (!fs.existsSync(manifestPath)) {
        this.errors.push('Manifest file not found: src/app/manifest.ts')
        return
      }

      const manifestContent = fs.readFileSync(manifestPath, 'utf8')
      
      // Check for required fields
      const requiredFields = ['name', 'short_name', 'description', 'start_url', 'display', 'theme_color', 'background_color']
      requiredFields.forEach(field => {
        if (!manifestContent.includes(`${field}:`)) {
          this.errors.push(`Manifest missing required field: ${field}`)
        }
      })

      if (this.errors.filter(e => e.includes('Manifest missing')).length === 0) {
        this.successes.push('✅ Manifest includes all required fields')
      }

      // Check for icons
      if (!manifestContent.includes('icons:')) {
        this.errors.push('Manifest missing icons configuration')
      } else {
        this.successes.push('✅ Manifest includes icons configuration')
      }

      // Check for shortcuts
      if (!manifestContent.includes('shortcuts:')) {
        this.warnings.push('⚠️  Consider adding shortcuts for better UX')
      } else {
        this.successes.push('✅ Manifest includes shortcuts')
      }

    } catch (error) {
      this.errors.push(`Error validating manifest: ${error.message}`)
    }
  }

  // Validate structured data component
  validateStructuredData() {
    console.log('\n📊 Validating Structured Data...\n')
    
    try {
      const structuredDataPath = path.join(__dirname, '../src/components/seo/StructuredData.tsx')
      if (!fs.existsSync(structuredDataPath)) {
        this.errors.push('StructuredData component not found')
        return
      }

      const structuredDataContent = fs.readFileSync(structuredDataPath, 'utf8')
      
      // Check for schema types
      const schemaTypes = ['website', 'article', 'faq', 'howto', 'software']
      schemaTypes.forEach(type => {
        if (!structuredDataContent.includes(`'${type}'`)) {
          this.warnings.push(`⚠️  StructuredData missing support for: ${type}`)
        }
      })

      if (this.warnings.filter(w => w.includes('StructuredData missing')).length === 0) {
        this.successes.push('✅ StructuredData supports all major schema types')
      }

      // Check for Schema.org context
      if (!structuredDataContent.includes('schema.org')) {
        this.errors.push('StructuredData missing Schema.org context')
      } else {
        this.successes.push('✅ StructuredData includes Schema.org context')
      }

    } catch (error) {
      this.errors.push(`Error validating structured data: ${error.message}`)
    }
  }

  // Check for locale configuration
  validateLocaleConfig() {
    console.log('\n🌍 Validating Locale Configuration...\n')
    
    try {
      const localeConfigPath = path.join(__dirname, '../src/i18n/config.ts')
      if (!fs.existsSync(localeConfigPath)) {
        this.errors.push('Locale config not found: src/i18n/config.ts')
        return
      }

      const localeContent = fs.readFileSync(localeConfigPath, 'utf8')
      
      // Check if all expected locales are present
      CONFIG.supportedLocales.forEach(locale => {
        if (!localeContent.includes(`'${locale}'`)) {
          this.errors.push(`Missing locale in config: ${locale}`)
        }
      })

      if (this.errors.filter(e => e.includes('Missing locale')).length === 0) {
        this.successes.push(`✅ All ${CONFIG.supportedLocales.length} locales configured`)
      }

      // Check for locale names
      if (!localeContent.includes('localeNames')) {
        this.warnings.push('⚠️  Consider adding locale display names')
      } else {
        this.successes.push('✅ Locale display names configured')
      }

    } catch (error) {
      this.errors.push(`Error validating locale config: ${error.message}`)
    }
  }

  // Generate SEO recommendations
  generateRecommendations() {
    console.log('\n💡 SEO Recommendations...\n')
    
    const recommendations = [
      '1. Submit sitemap to Google Search Console and Bing Webmaster Tools',
      '2. Verify robots.txt accessibility at /robots.txt',
      '3. Test structured data with Google Rich Results Test',
      '4. Validate PWA manifest with Lighthouse',
      '5. Monitor Core Web Vitals for performance',
      '6. Set up Google Analytics for traffic tracking',
      '7. Configure Search Console for international targeting',
      '8. Test hreflang implementation with international SEO tools',
      '9. Optimize images with alt text and proper formats',
      '10. Ensure all pages have unique meta descriptions'
    ]

    recommendations.forEach(rec => {
      console.log(`   ${rec}`)
    })
  }

  // Run all validations
  run() {
    console.log('🚀 Starting SEO Configuration Validation...\n')
    console.log('=' .repeat(60))
    
    this.validateSitemapConfig()
    this.validateRobotsConfig()
    this.validateManifestConfig()
    this.validateStructuredData()
    this.validateLocaleConfig()
    
    console.log('\n' + '=' .repeat(60))
    console.log('📋 Validation Summary\n')
    
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
    
    if (this.errors.length > 0) {
      console.log('❌ Errors:')
      this.errors.forEach(error => console.log(`   ${error}`))
      console.log()
    }
    
    // Overall status
    if (this.errors.length === 0) {
      console.log('🎉 SEO Configuration: PASSED')
      console.log(`   ${this.successes.length} checks passed, ${this.warnings.length} warnings`)
    } else {
      console.log('❌ SEO Configuration: FAILED')
      console.log(`   ${this.errors.length} errors, ${this.warnings.length} warnings`)
    }
    
    this.generateRecommendations()
    
    console.log('\n' + '=' .repeat(60))
    console.log('🔗 Useful URLs:')
    console.log(`   Sitemap: ${CONFIG.baseUrl}/sitemap.xml`)
    console.log(`   Robots: ${CONFIG.baseUrl}/robots.txt`)
    console.log(`   Manifest: ${CONFIG.baseUrl}/manifest.json`)
    
    return this.errors.length === 0
  }
}

// Run validation
if (require.main === module) {
  const validator = new SEOValidator()
  const success = validator.run()
  process.exit(success ? 0 : 1)
}

module.exports = SEOValidator
