const fs = require('fs');
const path = require('path');

// 修复DocsContent.tsx中的硬编码链接
function fixDocsLinks() {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', 'DocsContent.tsx');
  
  console.log('🔧 修复DocsContent.tsx中的硬编码链接...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 定义需要修复的链接模式
  const linkPatterns = [
    // API reference links
    { from: '"href": "/docs/api-reference"', to: '"href": getLocalizedHref("/docs/api-reference")' },
    { from: '"href": "/docs/examples"', to: '"href": getLocalizedHref("/docs/examples")' },
    { from: '"href": "/docs/changelog"', to: '"href": getLocalizedHref("/docs/changelog")' },
    
    // Development setup links
    { from: '"href": "/docs/development-setup"', to: '"href": getLocalizedHref("/docs/development-setup")' },
    { from: '"href": "/docs/project-structure"', to: '"href": getLocalizedHref("/docs/project-structure")' },
    { from: '"href": "/docs/build-and-test"', to: '"href": getLocalizedHref("/docs/build-and-test")' },
    
    // Core API links
    { from: '"href": "/docs/core-api"', to: '"href": getLocalizedHref("/docs/core-api")' },
    { from: '"href": "/docs/plugin-api"', to: '"href": getLocalizedHref("/docs/plugin-api")' },
    { from: '"href": "/docs/config-api"', to: '"href": getLocalizedHref("/docs/config-api")' },
    { from: '"href": "/docs/tools-api"', to: '"href": getLocalizedHref("/docs/tools-api")' },
    
    // MCP links
    { from: '"href": "/docs/mcp-introduction"', to: '"href": getLocalizedHref("/docs/mcp-introduction")' },
    { from: '"href": "/docs/mcp-server"', to: '"href": getLocalizedHref("/docs/mcp-server")' },
    { from: '"href": "/docs/mcp-client"', to: '"href": getLocalizedHref("/docs/mcp-client")' },
    { from: '"href": "/docs/migration-guide"', to: '"href": getLocalizedHref("/docs/migration-guide")' },
    
    // Extension links
    { from: '"href": "/docs/extension-architecture"', to: '"href": getLocalizedHref("/docs/extension-architecture")' },
    { from: '"href": "/docs/first-extension"', to: '"href": getLocalizedHref("/docs/first-extension")' },
    { from: '"href": "/docs/extension-publishing"', to: '"href": getLocalizedHref("/docs/extension-publishing")' },
    { from: '"href": "/docs/extension-system"', to: '"href": getLocalizedHref("/docs/extension-system")' },
    { from: '"href": "/docs/tool-development"', to: '"href": getLocalizedHref("/docs/tool-development")' },
    { from: '"href": "/docs/built-in-tools"', to: '"href": getLocalizedHref("/docs/built-in-tools")' },
    
    // Contributing links
    { from: '"href": "/docs/contributing-guide"', to: '"href": getLocalizedHref("/docs/contributing-guide")' },
    { from: '"href": "/docs/coding-standards"', to: '"href": getLocalizedHref("/docs/coding-standards")' },
    { from: '"href": "/docs/pull-request-guide"', to: '"href": getLocalizedHref("/docs/pull-request-guide")' },
    { from: '"href": "/docs/project-management"', to: '"href": getLocalizedHref("/docs/project-management")' },
    { from: '"href": "/docs/troubleshooting"', to: '"href": getLocalizedHref("/docs/troubleshooting")' },
    
    // Other links
    { from: '"href": "/docs/installation"', to: '"href": getLocalizedHref("/docs/installation")' },
    { from: '"href": "/docs/configuration"', to: '"href": getLocalizedHref("/docs/configuration")' }
  ];
  
  // 应用替换
  let modifiedCount = 0;
  for (const { from, to } of linkPatterns) {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, to);
      modifiedCount += matches.length;
      console.log(`✅ 修复了 ${matches.length} 个 "${from}" 链接`);
    }
  }
  
  // 修复底部的贡献链接
  content = content.replace(
    'href="/docs/contributing-guide"',
    'href={getLocalizedHref("/docs/contributing-guide")}'
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ 修复完成！总共修改了 ${modifiedCount} 个链接`);
  
  return modifiedCount;
}

// 执行修复
if (require.main === module) {
  try {
    const count = fixDocsLinks();
    console.log(`\n🎉 链接修复脚本执行完成！修改了 ${count} 处`);
  } catch (error) {
    console.error('❌ 修复过程中发生错误:', error);
  }
}

module.exports = { fixDocsLinks };
