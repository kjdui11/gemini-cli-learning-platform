const fs = require('fs');
const path = require('path');

// Fix locale indexing issues in TypeScript files
function fixLocaleIndexing(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match object[locale] that needs type assertion
    // Look for patterns like: object.property[locale] || object.property.en
    const pattern = /(\w+(?:\.\w+)*)\[locale\](\s*\|\|\s*\1\.en)/g;
    
    const newContent = content.replace(pattern, (match, objectPath, fallback) => {
      modified = true;
      return `${objectPath}[locale as keyof typeof ${objectPath}]${fallback}`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ Fixed locale indexing in: ${filePath}`);
      return true;
    } else {
      console.log(`- No changes needed in: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript files that might have locale indexing issues
function findFilesToFix(dir) {
  const files = [];
  
  function scanDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDir(dir);
  return files;
}

// Main execution
function main() {
  console.log('🔧 Fixing locale indexing issues...\n');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const files = findFilesToFix(srcDir);
  
  console.log(`Found ${files.length} TypeScript files to check:\n`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixLocaleIndexing(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} out of ${files.length} files`);
}

main();
