const fs = require('fs');
const path = require('path');

// List of all guides sub-pages that need fixing
const guidesPages = [
  'advanced-config',
  'basic-commands', 
  'code-refactoring',
  'code-review',
  'documentation',
  'getting-started',
  'integration',
  'mcp-protocol',
  'advanced',
  'examples'
];

function fixGenerateStaticParams(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the problematic generateStaticParams function
    const oldPattern = /export async function generateStaticParams\(\) \{\s*return locales\.filter\(locale => locale !== 'zh'\)\.map\(\(locale\) => \(\{\s*locale,\s*\}\)\)\s*\}/;
    const newPattern = `export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}`;
    
    if (oldPattern.test(content)) {
      content = content.replace(oldPattern, newPattern);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`⚠️  Pattern not found in: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Fixing generateStaticParams functions in guides pages...\n');
  
  let fixedCount = 0;
  let totalCount = 0;
  
  for (const page of guidesPages) {
    const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'guides', page, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
      totalCount++;
      if (fixGenerateStaticParams(filePath)) {
        fixedCount++;
      }
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalCount}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`   Files skipped: ${totalCount - fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n✅ generateStaticParams functions have been fixed!');
    console.log('   All locale-aware pages should now include all locales in static generation.');
  }
}

main();
