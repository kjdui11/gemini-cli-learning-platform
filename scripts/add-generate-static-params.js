const fs = require('fs');
const path = require('path');

// List of locale-aware guides sub-pages that need generateStaticParams
const subPages = [
  'mcp-protocol',
  'documentation', 
  'advanced-config',
  'file-operations',
  'advanced',
  'examples'
];

const generateStaticParamsCode = `
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}`;

subPages.forEach(subPage => {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'guides', subPage, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if generateStaticParams already exists
    if (content.includes('generateStaticParams')) {
      console.log(`${subPage}: generateStaticParams already exists, skipping`);
      return;
    }
    
    // Check if locales import exists
    if (!content.includes('import { locales }')) {
      // Add locales import
      if (content.includes("import { Metadata } from 'next'")) {
        content = content.replace(
          "import { Metadata } from 'next'",
          "import { Metadata } from 'next'\nimport { locales } from '@/i18n/config'"
        );
      }
    }
    
    // Find the interface declaration and add generateStaticParams after it
    const interfaceMatch = content.match(/(interface\s+\w+\s*{[^}]+})/);
    if (interfaceMatch) {
      const interfaceDeclaration = interfaceMatch[0];
      content = content.replace(
        interfaceDeclaration,
        interfaceDeclaration + generateStaticParamsCode
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`${subPage}: Added generateStaticParams function`);
    } else {
      console.log(`${subPage}: Could not find interface declaration`);
    }
  } else {
    console.log(`${subPage}: File does not exist at ${filePath}`);
  }
});

console.log('Finished adding generateStaticParams to locale-aware guides sub-pages');
