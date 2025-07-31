const fs = require('fs');
const path = require('path');

const componentFiles = [
  'AdvancedConfigContent.tsx',
  'BasicCommandsContent.tsx',
  'CodeRefactoringContent.tsx',
  'CodeReviewContent.tsx',
  'DocumentationContent.tsx',
  'FileOperationsContent.tsx',
  'IntegrationContent.tsx',
  'McpProtocolContent.tsx'
];

componentFiles.forEach(filename => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', filename);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the malformed parameter syntax
    content = content.replace(
      /export default function (\w+)Content\(\{ locale: _ \}: \{ locale \}: (\w+)ContentProps\)/g,
      'export default function $1Content({ locale: _ }: $2ContentProps)'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed parameter syntax in ${filename}`);
  }
});

console.log('✓ All component parameter syntax fixed');
