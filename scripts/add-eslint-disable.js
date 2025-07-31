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
    
    // Add ESLint disable comment before function declaration
    content = content.replace(
      /export default function (\w+)Content\(\{ locale: _ \}: (\w+)ContentProps\)/g,
      '// eslint-disable-next-line @typescript-eslint/no-unused-vars\nexport default function $1Content({ locale: _ }: $2ContentProps)'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Added ESLint disable comment to ${filename}`);
  }
});

console.log('✓ All ESLint disable comments added');
