const fs = require('fs');
const path = require('path');

// 修复development-setup页面的isZhOrEn问题
function fixDevelopmentSetup() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'development-setup', 'page.tsx');
  
  console.log('🔧 修复development-setup页面的isZhOrEn问题...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 替换所有isZhOrEn ? 'English text' : { ... }[locale] || 'English text' 模式
  // 替换为 { en: 'English text', zh: 'Chinese text', ... }[locale as keyof typeof getContent] || 'English text'
  
  // 定义替换映射
  const replacements = [
    {
      pattern: /isZhOrEn \? '18\.0\.0 or higher' : \{[\s\S]*?\}\[locale\] \|\| '18\.0\.0 or higher'/,
      replacement: `{
              en: '18.0.0 or higher',
              zh: '18.0.0 或更高版本',
              hi: '18.0.0 या उससे अधिक',
              fr: '18.0.0 ou supérieur',
              de: '18.0.0 oder höher',
              ja: '18.0.0以上',
              ko: '18.0.0 이상',
              es: '18.0.0 o superior',
              ru: '18.0.0 या выше'
            }[locale as keyof typeof getContent] || '18.0.0 or higher'`
    },
    {
      pattern: /isZhOrEn \? 'JavaScript runtime environment' : \{[\s\S]*?\}\[locale\] \|\| 'JavaScript runtime environment'/,
      replacement: `{
              en: 'JavaScript runtime environment',
              zh: 'JavaScript 运行时环境',
              hi: 'JavaScript रनटाइम एनवायरनमेंट',
              fr: 'Environnement d\\'exécution JavaScript',
              de: 'JavaScript-Laufzeitumgebung',
              ja: 'JavaScript実行環境',
              ko: 'JavaScript 런타임 환경',
              es: 'Entorno de ejecución JavaScript',
              ru: 'Среда выполнения JavaScript'
            }[locale as keyof typeof getContent] || 'JavaScript runtime environment'`
    },
    {
      pattern: /isZhOrEn \? '8\.0\.0 or higher' : \{[\s\S]*?\}\[locale\] \|\| '8\.0\.0 or higher'/,
      replacement: `{
              en: '8.0.0 or higher',
              zh: '8.0.0 或更高版本',
              hi: '8.0.0 या उससे अधिक',
              fr: '8.0.0 ou supérieur',
              de: '8.0.0 oder höher',
              ja: '8.0.0以上',
              ko: '8.0.0 이상',
              es: '8.0.0 o superior',
              ru: '8.0.0 या выше'
            }[locale as keyof typeof getContent] || '8.0.0 or higher'`
    },
    {
      pattern: /isZhOrEn \? 'Node\.js package manager' : \{[\s\S]*?\}\[locale\] \|\| 'Node\.js package manager'/,
      replacement: `{
              en: 'Node.js package manager',
              zh: 'Node.js 包管理器',
              hi: 'Node.js पैकेज मैनेजर',
              fr: 'Gestionnaire de paquets Node.js',
              de: 'Node.js-Paketmanager',
              ja: 'Node.jsパッケージマネージャー',
              ko: 'Node.js 패키지 관리자',
              es: 'Gestor de paquetes Node.js',
              ru: 'Менеджер пакетов Node.js'
            }[locale as keyof typeof getContent] || 'Node.js package manager'`
    }
  ];
  
  // 应用替换
  let modifiedCount = 0;
  for (const { pattern, replacement } of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modifiedCount++;
    }
  }
  
  // 简单的替换模式 - 替换所有剩余的isZhOrEn
  const simpleReplacements = [
    // 替换简单的条件表达式
    { from: /isZhOrEn \? '([^']+)' : \{([^}]+)\}\[locale\] \|\| '\1'/g, to: '{ en: \'$1\', zh: \'$1\', $2 }[locale as keyof typeof getContent] || \'$1\'' },
    
    // 替换Thunder Client特殊情况
    { from: /isZhOrEn \? 'Thunder Client \(API testing\)' : \{[\s\S]*?\}\[locale\] \|\| 'Thunder Client \(API testing\)'/,
      to: `{
                en: 'Thunder Client (API testing)',
                zh: 'Thunder Client (API 测试)',
                hi: 'Thunder Client (API टेस्टिंग)',
                fr: 'Thunder Client (test d\\'API)',
                de: 'Thunder Client (API-Tests)',
                ja: 'Thunder Client (APIテスト)',
                ko: 'Thunder Client (API 테스트)',
                es: 'Thunder Client (pruebas de API)',
                ru: 'Thunder Client (тестирование API)'
              }[locale as keyof typeof getContent] || 'Thunder Client (API testing)'`
    }
  ];
  
  for (const { from, to } of simpleReplacements) {
    if (content.match(from)) {
      content = content.replace(from, to);
      modifiedCount++;
    }
  }
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ 修复完成！应用了 ${modifiedCount} 个替换`);
  console.log('📝 请手动检查文件并完成剩余的修复');
  
  return modifiedCount;
}

// 执行修复
if (require.main === module) {
  try {
    const count = fixDevelopmentSetup();
    console.log(`\n🎉 修复脚本执行完成！修改了 ${count} 处`);
  } catch (error) {
    console.error('❌ 修复过程中发生错误:', error);
  }
}

module.exports = { fixDevelopmentSetup };
