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
    
    // Fix useTranslation call
    content = content.replace(
      /const { t } = useTranslation\(locale\)/g,
      'const { t } = useTranslation()'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filename}`);
  }
});

console.log('✓ All component translation calls fixed');
