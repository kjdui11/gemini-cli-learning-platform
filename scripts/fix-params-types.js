const fs = require('fs');
const path = require('path');

// Find all files in [locale] directory that need fixing
function findFilesToFix(dir) {
  const files = [];
  
  function scanDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (item === 'page.tsx' && fullPath.includes('[locale]')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDir(dir);
  return files;
}

// Fix the params type in a file
function fixParamsType(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern 1: interface PageProps with non-Promise params
    const pattern1 = /interface\s+PageProps\s*\{\s*params:\s*\{\s*locale:\s*string\s*\}\s*\}/g;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, 'interface PageProps {\n  params: Promise<{\n    locale: string\n  }>\n}');
      modified = true;
    }
    
    // Pattern 2: type Props with non-Promise params
    const pattern2 = /type\s+Props\s*=\s*\{\s*params:\s*\{\s*locale:\s*string\s*\}\s*\}/g;
    if (pattern2.test(content)) {
      content = content.replace(pattern2, 'type Props = {\n  params: Promise<{ locale: string }>\n}');
      modified = true;
    }
    
    // Pattern 3: Other interface patterns
    const pattern3 = /interface\s+\w+PageProps\s*\{\s*params:\s*\{\s*locale:\s*string\s*\}\s*\}/g;
    if (pattern3.test(content)) {
      content = content.replace(pattern3, (match) => {
        return match.replace('params: {', 'params: Promise<{').replace('}\n}', '}>\n}');
      });
      modified = true;
    }
    
    // Fix function calls that don't await params
    const pattern4 = /const\s*\{\s*locale\s*\}\s*=\s*params(?!\s*\.)/g;
    if (pattern4.test(content)) {
      content = content.replace(pattern4, 'const { locale } = await params');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`- Skipped: ${filePath} (no changes needed)`);
      return false;
    }
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🔧 Fixing params types in [locale] pages...\n');
  
  const srcDir = path.join(__dirname, '..', 'src', 'app');
  const files = findFilesToFix(srcDir);
  
  console.log(`Found ${files.length} files to check:\n`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixParamsType(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} out of ${files.length} files`);
}

main();
