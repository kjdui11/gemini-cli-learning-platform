#!/usr/bin/env node

/**
 * FAQ Content Collector
 * 
 * This script helps collect and organize FAQ content from various sources
 * in a compliant and ethical manner.
 * 
 * Usage: node scripts/faq-content-collector.js [command]
 * 
 * Commands:
 *   github-issues  - Analyze GitHub issues for common problems
 *   validate       - Validate existing FAQ content
 *   generate       - Generate FAQ template from collected data
 *   stats          - Show content statistics
 */

const fs = require('fs')
const path = require('path')

// Configuration
const CONFIG = {
  githubRepo: 'google-gemini/gemini-cli',
  outputDir: './content/faq-drafts',
  sources: {
    official: 'https://github.com/google-gemini/gemini-cli',
    docs: 'https://github.com/google-gemini/gemini-cli/blob/main/docs/',
    issues: 'https://github.com/google-gemini/gemini-cli/issues'
  }
}

// FAQ Template Generator
class FAQContentCollector {
  constructor() {
    this.ensureOutputDir()
  }

  ensureOutputDir() {
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true })
    }
  }

  // Analyze common patterns in issues (manual review required)
  generateIssueAnalysisTemplate() {
    const template = {
      title: 'GitHub Issues Analysis Template',
      instructions: [
        '1. Visit: ' + CONFIG.sources.issues,
        '2. Filter by: is:issue is:closed label:question',
        '3. Look for recurring themes and problems',
        '4. Manually extract and rewrite common issues',
        '5. Always add original value and context'
      ],
      categories: [
        {
          name: 'Installation Issues',
          searchTerms: ['install', 'npm', 'node', 'permission'],
          commonPatterns: [
            'Permission denied errors',
            'Node.js version compatibility',
            'Global vs local installation',
            'Windows-specific issues'
          ]
        },
        {
          name: 'Authentication Problems',
          searchTerms: ['auth', 'login', 'api key', 'google'],
          commonPatterns: [
            'OAuth flow issues',
            'API key configuration',
            'Account switching',
            'Token expiration'
          ]
        },
        {
          name: 'Usage Questions',
          searchTerms: ['how to', 'usage', 'command', 'help'],
          commonPatterns: [
            'First-time usage confusion',
            'Command syntax questions',
            'File format support',
            'Output formatting'
          ]
        }
      ],
      template: {
        id: 'generated-from-issue-{number}',
        question: '[Rewrite the issue title as a clear question]',
        answer: '[Provide a comprehensive answer based on the solution, but rewritten in your own words]',
        category: '[Choose appropriate category]',
        difficulty: '[beginner|intermediate|advanced]',
        tags: ['[relevant-tags]'],
        sources: [
          {
            type: 'community',
            url: '[GitHub issue URL]',
            description: 'Based on community issue and solution'
          }
        ]
      }
    }

    const outputPath = path.join(CONFIG.outputDir, 'github-issues-analysis.json')
    fs.writeFileSync(outputPath, JSON.stringify(template, null, 2))
    console.log(`✅ Generated issue analysis template: ${outputPath}`)
  }

  // Generate content collection checklist
  generateContentChecklist() {
    const checklist = {
      title: 'FAQ Content Collection Checklist',
      legalCompliance: {
        required: [
          '✅ Content is rewritten in original language',
          '✅ Sources are properly attributed',
          '✅ Original value is added to each answer',
          '✅ Fair use principles are followed',
          '✅ No direct copying of substantial portions'
        ],
        recommended: [
          '📝 Include personal experience and insights',
          '🔗 Link back to original sources',
          '💡 Add practical examples and use cases',
          '🎯 Focus on user problems, not just features'
        ]
      },
      contentSources: {
        official: {
          name: 'Official Documentation',
          url: CONFIG.sources.docs,
          approach: 'Extract concepts, rewrite explanations, add practical context',
          examples: [
            'Installation steps → Troubleshooting guide',
            'Command reference → Usage scenarios',
            'Configuration options → Best practices'
          ]
        },
        community: {
          name: 'Community Discussions',
          sources: [
            'GitHub Issues (closed, with solutions)',
            'Stack Overflow questions',
            'Reddit discussions',
            'Discord/Slack conversations'
          ],
          approach: 'Identify common problems, create comprehensive solutions'
        },
        original: {
          name: 'Original Content',
          sources: [
            'Personal testing and experimentation',
            'User feedback from your website',
            'Integration experiences',
            'Performance observations'
          ],
          approach: 'Document real-world usage patterns and solutions'
        }
      },
      qualityStandards: {
        content: [
          'Each answer solves a real user problem',
          'Solutions are tested and verified',
          'Code examples are included where helpful',
          'Answers are beginner-friendly but comprehensive',
          'Related questions are cross-referenced'
        ],
        seo: [
          'Questions use natural language patterns',
          'Keywords are naturally integrated',
          'Content is scannable with clear structure',
          'Meta descriptions are compelling',
          'Internal linking is strategic'
        ]
      }
    }

    const outputPath = path.join(CONFIG.outputDir, 'content-collection-checklist.json')
    fs.writeFileSync(outputPath, JSON.stringify(checklist, null, 2))
    console.log(`✅ Generated content checklist: ${outputPath}`)
  }

  // Validate existing FAQ content
  validateFAQContent() {
    try {
      const faqPath = path.join(__dirname, '../src/data/faq-enhanced.ts')
      if (!fs.existsSync(faqPath)) {
        console.log('❌ FAQ data file not found')
        return
      }

      // Basic validation (would need more sophisticated parsing for real validation)
      const content = fs.readFileSync(faqPath, 'utf8')
      
      const stats = {
        totalQuestions: (content.match(/question:/g) || []).length,
        categories: (content.match(/category:/g) || []).length,
        sources: (content.match(/sources:/g) || []).length,
        relatedQuestions: (content.match(/relatedQuestions:/g) || []).length
      }

      console.log('📊 FAQ Content Statistics:')
      console.log(`   Questions: ${stats.totalQuestions}`)
      console.log(`   Categories: ${stats.categories}`)
      console.log(`   Sourced items: ${stats.sources}`)
      console.log(`   Cross-references: ${stats.relatedQuestions}`)

      // Check for potential issues
      const issues = []
      if (stats.totalQuestions < 10) {
        issues.push('Consider adding more questions for comprehensive coverage')
      }
      if (stats.sources < stats.totalQuestions * 0.8) {
        issues.push('Consider adding source attribution to more questions')
      }

      if (issues.length > 0) {
        console.log('\n⚠️  Recommendations:')
        issues.forEach(issue => console.log(`   • ${issue}`))
      } else {
        console.log('\n✅ FAQ content looks good!')
      }

    } catch (error) {
      console.error('❌ Error validating FAQ content:', error.message)
    }
  }

  // Generate FAQ template for new content
  generateFAQTemplate() {
    const template = {
      id: 'new-faq-{timestamp}',
      question: '[Clear, specific question that users actually ask]',
      answer: '[Comprehensive answer with practical value]',
      category: '[installation|authentication|basic-usage|advanced-features|troubleshooting|best-practices]',
      difficulty: '[beginner|intermediate|advanced]',
      tags: ['[relevant]', '[searchable]', '[keywords]'],
      lastUpdated: new Date().toISOString().split('T')[0],
      sources: [
        {
          type: '[official|community|original]',
          url: '[source URL if applicable]',
          description: '[How this content was derived]'
        }
      ],
      relatedQuestions: ['[id-of-related-faq]'],
      notes: {
        contentGuidelines: [
          'Rewrite in your own words',
          'Add practical examples',
          'Include code snippets if helpful',
          'Test solutions before publishing',
          'Consider user skill level'
        ],
        seoConsiderations: [
          'Use natural question phrasing',
          'Include relevant keywords',
          'Structure for featured snippets',
          'Link to related content'
        ]
      }
    }

    const outputPath = path.join(CONFIG.outputDir, 'faq-template.json')
    fs.writeFileSync(outputPath, JSON.stringify(template, null, 2))
    console.log(`✅ Generated FAQ template: ${outputPath}`)
  }
}

// CLI Interface
function main() {
  const command = process.argv[2] || 'help'
  const collector = new FAQContentCollector()

  switch (command) {
    case 'github-issues':
      collector.generateIssueAnalysisTemplate()
      break
    
    case 'validate':
      collector.validateFAQContent()
      break
    
    case 'generate':
      collector.generateFAQTemplate()
      break
    
    case 'checklist':
      collector.generateContentChecklist()
      break
    
    case 'all':
      collector.generateIssueAnalysisTemplate()
      collector.generateContentChecklist()
      collector.generateFAQTemplate()
      collector.validateFAQContent()
      break
    
    case 'help':
    default:
      console.log(`
FAQ Content Collector

Usage: node scripts/faq-content-collector.js [command]

Commands:
  github-issues  Generate template for analyzing GitHub issues
  checklist      Generate content collection checklist
  generate       Generate FAQ template for new content
  validate       Validate existing FAQ content
  all           Run all generation commands
  help          Show this help message

Examples:
  node scripts/faq-content-collector.js github-issues
  node scripts/faq-content-collector.js validate
  node scripts/faq-content-collector.js all
      `)
      break
  }
}

if (require.main === module) {
  main()
}

module.exports = FAQContentCollector
