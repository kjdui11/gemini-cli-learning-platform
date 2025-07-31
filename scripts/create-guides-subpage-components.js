const fs = require('fs');
const path = require('path');

const guidesSubpages = [
  'getting-started',
  'basic-commands', 
  'file-operations',
  'advanced-config',
  'integration',
  'mcp-protocol',
  'code-refactoring',
  'documentation',
  'code-review'
];

// Create content components for each guides subpage
guidesSubpages.forEach(subpage => {
  const componentName = subpage.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Content';
  
  const componentContent = `'use client'

import { useTranslation } from '@/hooks/useTranslation'

interface ${componentName}Props {
  locale: string
}

export default function ${componentName}({ locale }: ${componentName}Props) {
  const { t } = useTranslation(locale)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('guides${subpage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}.title')}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {t('guides${subpage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content will be added based on the specific subpage */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-gray-600 mb-8">
              {t('guides${subpage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}.description')}
            </p>
            
            {/* Placeholder for specific content */}
            <div className="prose prose-lg max-w-none">
              <p>Content for ${subpage} will be implemented here with full internationalization support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`;

  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', `${componentName}.tsx`);
  fs.writeFileSync(filePath, componentContent, 'utf8');
  console.log(`✓ Created ${componentName}.tsx`);
});

console.log('✓ All guides subpage components created');
