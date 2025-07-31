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
  'McpProtocolContent.tsx',
  'GettingStartedContent.tsx'
];

componentFiles.forEach(filename => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', filename);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix unused locale parameter
    content = content.replace(
      /{ locale }: \w+ContentProps/g,
      '{ locale: _ }: $&'.replace('{ locale: _ }: { locale }: ', '{ locale: _ }: ')
    );
    
    // More specific replacement
    content = content.replace(
      /export default function (\w+)Content\(\{ locale \}: (\w+)ContentProps\)/g,
      'export default function $1Content({ locale: _ }: $2ContentProps)'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed unused locale parameter in ${filename}`);
  }
});

console.log('✓ All unused locale parameters fixed');
