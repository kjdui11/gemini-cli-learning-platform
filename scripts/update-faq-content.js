#!/usr/bin/env node

/**
 * FAQ Content Update Script
 * 
 * This script helps manage and update FAQ content based on new information
 * from official sources and community feedback.
 * 
 * Usage: node scripts/update-faq-content.js [command] [options]
 * 
 * Commands:
 *   add-question    - Add a new FAQ question
 *   update-answer   - Update an existing answer
 *   add-translation - Add translation for a question
 *   validate        - Validate all FAQ content
 *   export          - Export FAQ data for review
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')

class FAQContentUpdater {
  constructor() {
    this.faqDataPath = path.join(__dirname, '../src/data/faq-enhanced.ts')
    this.translationsPath = path.join(__dirname, '../src/data/faq-translations.ts')
  }

  // Interactive question addition
  async addQuestion() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve))

    try {
      console.log('\n📝 Adding New FAQ Question\n')
      
      const id = await question('Question ID (e.g., troubleshoot-new-issue): ')
      const questionText = await question('Question: ')
      const answer = await question('Answer: ')
      const category = await question('Category (installation/authentication/basic-usage/advanced-features/troubleshooting/best-practices): ')
      const difficulty = await question('Difficulty (beginner/intermediate/advanced): ')
      const tags = await question('Tags (comma-separated): ')
      const sourceType = await question('Source type (official/community/original): ')
      const sourceUrl = await question('Source URL (optional): ')
      const sourceDesc = await question('Source description: ')

      const newFAQ = {
        id,
        question: questionText,
        answer,
        category,
        difficulty,
        tags: tags.split(',').map(tag => tag.trim()),
        lastUpdated: new Date().toISOString().split('T')[0],
        sources: [
          {
            type: sourceType,
            ...(sourceUrl && { url: sourceUrl }),
            description: sourceDesc
          }
        ]
      }

      console.log('\n✅ New FAQ Question:')
      console.log(JSON.stringify(newFAQ, null, 2))
      
      const confirm = await question('\nAdd this question? (y/n): ')
      if (confirm.toLowerCase() === 'y') {
        console.log('\n📋 Copy this object and add it to src/data/faq-enhanced.ts:')
        console.log('\n' + this.formatFAQForTypeScript(newFAQ))
        
        // Also generate translation template
        console.log('\n📋 Translation template for src/data/faq-translations.ts:')
        console.log(`\n'${id}': {`)
        console.log(`  question: '${questionText}',`)
        console.log(`  answer: '${answer}'`)
        console.log(`},`)
      }

    } catch (error) {
      console.error('Error adding question:', error)
    } finally {
      rl.close()
    }
  }

  formatFAQForTypeScript(faq) {
    return `{
    id: '${faq.id}',
    question: '${faq.question.replace(/'/g, "\\'")}',
    answer: '${faq.answer.replace(/'/g, "\\'")}',
    category: '${faq.category}',
    difficulty: '${faq.difficulty}',
    tags: [${faq.tags.map(tag => `'${tag}'`).join(', ')}],
    lastUpdated: '${faq.lastUpdated}',
    sources: [
      {
        type: '${faq.sources[0].type}',${faq.sources[0].url ? `\n        url: '${faq.sources[0].url}',` : ''}
        description: '${faq.sources[0].description}'
      }
    ]
  },`
  }

  // Validate existing content
  validateContent() {
    try {
      console.log('🔍 Validating FAQ content...\n')

      // Read and parse FAQ data file
      const faqContent = fs.readFileSync(this.faqDataPath, 'utf8')
      
      // Basic validation checks
      const checks = {
        'Questions with answers': (faqContent.match(/question:/g) || []).length,
        'Categories defined': (faqContent.match(/category:/g) || []).length,
        'Sources attributed': (faqContent.match(/sources:/g) || []).length,
        'Last updated dates': (faqContent.match(/lastUpdated:/g) || []).length,
        'Difficulty levels': (faqContent.match(/difficulty:/g) || []).length
      }

      console.log('📊 Content Statistics:')
      Object.entries(checks).forEach(([check, count]) => {
        console.log(`   ${check}: ${count}`)
      })

      // Quality checks
      const issues = []
      if (checks['Questions with answers'] < 15) {
        issues.push('Consider adding more questions for comprehensive coverage')
      }
      if (checks['Sources attributed'] < checks['Questions with answers'] * 0.9) {
        issues.push('Some questions may be missing source attribution')
      }

      if (issues.length > 0) {
        console.log('\n⚠️  Recommendations:')
        issues.forEach(issue => console.log(`   • ${issue}`))
      } else {
        console.log('\n✅ FAQ content quality looks good!')
      }

      // Check for recent updates
      const oneMonthAgo = new Date()
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
      const recentUpdatePattern = new RegExp(`lastUpdated: '${new Date().getFullYear()}-`, 'g')
      const recentUpdates = (faqContent.match(recentUpdatePattern) || []).length
      
      console.log(`\n📅 Recent updates (this year): ${recentUpdates}`)
      if (recentUpdates === 0) {
        console.log('   💡 Consider reviewing and updating content for accuracy')
      }

    } catch (error) {
      console.error('❌ Error validating content:', error.message)
    }
  }

  // Export FAQ data for review
  exportContent() {
    try {
      const outputDir = path.join(__dirname, '../content/faq-exports')
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      const timestamp = new Date().toISOString().split('T')[0]
      const exportPath = path.join(outputDir, `faq-export-${timestamp}.json`)

      // Read current FAQ data
      const faqContent = fs.readFileSync(this.faqDataPath, 'utf8')
      
      // Extract FAQ data (simplified - would need proper parsing for production)
      const exportData = {
        exportDate: new Date().toISOString(),
        totalQuestions: (faqContent.match(/question:/g) || []).length,
        categories: (faqContent.match(/category:/g) || []).length,
        note: 'This is a simplified export. For full data, review the source files.',
        sourceFiles: [
          'src/data/faq-enhanced.ts',
          'src/data/faq-translations.ts'
        ]
      }

      fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2))
      console.log(`✅ FAQ content exported to: ${exportPath}`)

    } catch (error) {
      console.error('❌ Error exporting content:', error.message)
    }
  }

  // Show update instructions
  showUpdateInstructions() {
    console.log(`
📚 FAQ Content Update Instructions

When you want to update FAQ content, you can:

1. 🆕 Add New Questions:
   node scripts/update-faq-content.js add-question
   
2. ✅ Validate Content:
   node scripts/update-faq-content.js validate
   
3. 📤 Export for Review:
   node scripts/update-faq-content.js export

4. 🔄 Manual Updates:
   - Edit src/data/faq-enhanced.ts for new questions
   - Edit src/data/faq-translations.ts for translations
   - Update lastUpdated dates when modifying content

5. 📋 Content Guidelines:
   - Only include questions with verified answers
   - Rewrite content in your own words
   - Add practical examples and context
   - Include source attribution
   - Test solutions before publishing

6. 🌍 Translation Process:
   - Add English content first
   - Use translation tools for initial drafts
   - Review and refine translations
   - Ensure cultural appropriateness

For major updates or new content collection, contact the development team.
    `)
  }
}

// CLI Interface
function main() {
  const command = process.argv[2] || 'help'
  const updater = new FAQContentUpdater()

  switch (command) {
    case 'add-question':
      updater.addQuestion()
      break
    
    case 'validate':
      updater.validateContent()
      break
    
    case 'export':
      updater.exportContent()
      break
    
    case 'instructions':
      updater.showUpdateInstructions()
      break
    
    case 'help':
    default:
      console.log(`
FAQ Content Update Tool

Usage: node scripts/update-faq-content.js [command]

Commands:
  add-question    Add a new FAQ question interactively
  validate        Validate existing FAQ content
  export          Export FAQ data for review
  instructions    Show detailed update instructions
  help           Show this help message

Examples:
  node scripts/update-faq-content.js add-question
  node scripts/update-faq-content.js validate
      `)
      break
  }
}

if (require.main === module) {
  main()
}

module.exports = FAQContentUpdater
