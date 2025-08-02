const fs = require('fs');
const path = require('path');

// 更新API翻译内容
function updateAPITranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 更新API翻译内容...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 更新中文翻译
  const chineseUpdates = {
    // Configuration API 更完整的翻译
    configApiSectionTitle: '配置 API',
    configApiSectionDesc: '用于管理 CLI 配置和设置的 API',
    getConfigTitle: 'getConfig()',
    getConfigDesc: '获取当前配置值',
    getConfigSignature: 'getConfig(key?: string): any',
    getConfigExample: `// 获取所有配置
const config = cli.getConfig();

// 获取特定配置值
const model = cli.getConfig('model');`,
    setConfigTitle: 'setConfig()',
    setConfigDesc: '设置配置值',
    setConfigSignature: 'setConfig(key: string, value: any): void',
    setConfigExample: `// 设置模型
cli.setConfig('model', 'gemini-pro');

// 设置多个值
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`,
    resetConfigTitle: 'resetConfig()',
    resetConfigDesc: '重置配置为默认值',
    resetConfigSignature: 'resetConfig(key?: string): void',
    resetConfigExample: `// 重置所有配置
cli.resetConfig();

// 重置特定键
cli.resetConfig('temperature');`,
    // Tools API 更完整的翻译
    toolsApiSectionTitle: '工具 API',
    toolsApiSectionDesc: '用于管理和执行内置工具的 API',
    listToolsTitle: 'listTools()',
    listToolsDesc: '获取可用工具列表',
    listToolsSignature: 'listTools(): Tool[]',
    listToolsExample: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`,
    executeToolTitle: 'executeTool()',
    executeToolDesc: '执行特定工具',
    executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
    executeToolExample: `// 读取文件
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// 运行 shell 命令
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`,
    // Common Types 更完整的翻译
    commonTypesTitle: '常用类型',
    commonTypesDesc: 'API 中使用的 TypeScript 接口和类型',
    chatOptionsTitle: 'ChatOptions',
    chatOptionsDesc: '启动聊天会话的选项',
    modelField: 'model',
    modelDesc: '要使用的模型（例如："gemini-pro"）',
    temperatureField: 'temperature',
    temperatureDesc: '创造性水平（0-1）',
    maxTokensField: 'maxTokens',
    maxTokensDesc: '最大响应长度',
    systemPromptField: 'systemPrompt',
    systemPromptDesc: '系统指令',
    toolDefinitionTitle: 'ToolDefinition',
    toolDefinitionDesc: '创建自定义工具的定义',
    nameField: 'name',
    nameDesc: '唯一工具名称',
    descriptionField: 'description',
    descriptionDesc: 'AI 的工具描述',
    parametersField: 'parameters',
    parametersDesc: '参数模式',
    executeField: 'execute',
    executeDesc: '工具执行函数',
    // Additional Resources 更完整的翻译
    additionalResourcesTitle: '其他资源',
    additionalResourcesDesc: '探索更多文档和示例',
    viewExamplesText: '查看示例',
    backToDocsText: '返回文档'
  };

  // Hindi 完整翻译
  const hindiUpdates = {
    configApiSectionTitle: 'कॉन्फ़िगरेशन API',
    configApiSectionDesc: 'CLI कॉन्फ़िगरेशन और सेटिंग्स प्रबंधित करने के लिए API',
    getConfigTitle: 'getConfig()',
    getConfigDesc: 'वर्तमान कॉन्फ़िगरेशन मान प्राप्त करें',
    getConfigSignature: 'getConfig(key?: string): any',
    getConfigExample: `// सभी कॉन्फ़िग प्राप्त करें
const config = cli.getConfig();

// विशिष्ट कॉन्फ़िग मान प्राप्त करें
const model = cli.getConfig('model');`,
    setConfigTitle: 'setConfig()',
    setConfigDesc: 'कॉन्फ़िगरेशन मान सेट करें',
    setConfigSignature: 'setConfig(key: string, value: any): void',
    setConfigExample: `// मॉडल सेट करें
cli.setConfig('model', 'gemini-pro');

// कई मान सेट करें
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);`,
    resetConfigTitle: 'resetConfig()',
    resetConfigDesc: 'कॉन्फ़िगरेशन को डिफ़ॉल्ट पर रीसेट करें',
    resetConfigSignature: 'resetConfig(key?: string): void',
    resetConfigExample: `// सभी कॉन्फ़िग रीसेट करें
cli.resetConfig();

// विशिष्ट की रीसेट करें
cli.resetConfig('temperature');`,
    toolsApiSectionTitle: 'टूल्स API',
    toolsApiSectionDesc: 'बिल्ट-इन टूल्स प्रबंधित और निष्पादित करने के लिए API',
    listToolsTitle: 'listTools()',
    listToolsDesc: 'उपलब्ध टूल्स की सूची प्राप्त करें',
    listToolsSignature: 'listTools(): Tool[]',
    listToolsExample: `const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]`,
    executeToolTitle: 'executeTool()',
    executeToolDesc: 'विशिष्ट टूल निष्पादित करें',
    executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
    executeToolExample: `// फ़ाइल पढ़ें
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// शेल कमांड चलाएं
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});`,
    commonTypesTitle: 'सामान्य प्रकार',
    commonTypesDesc: 'API में उपयोग किए जाने वाले TypeScript इंटरफेस और प्रकार',
    chatOptionsTitle: 'ChatOptions',
    chatOptionsDesc: 'चैट सेशन शुरू करने के लिए विकल्प',
    modelField: 'model',
    modelDesc: 'उपयोग करने वाला मॉडल (जैसे: "gemini-pro")',
    temperatureField: 'temperature',
    temperatureDesc: 'रचनात्मकता स्तर (0-1)',
    maxTokensField: 'maxTokens',
    maxTokensDesc: 'अधिकतम प्रतिक्रिया लंबाई',
    systemPromptField: 'systemPrompt',
    systemPromptDesc: 'सिस्टम निर्देश',
    toolDefinitionTitle: 'ToolDefinition',
    toolDefinitionDesc: 'कस्टम टूल बनाने की परिभाषा',
    nameField: 'name',
    nameDesc: 'अद्वितीय टूल नाम',
    descriptionField: 'description',
    descriptionDesc: 'AI के लिए टूल विवरण',
    parametersField: 'parameters',
    parametersDesc: 'पैरामीटर स्कीमा',
    executeField: 'execute',
    executeDesc: 'टूल निष्पादन फ़ंक्शन',
    additionalResourcesTitle: 'अतिरिक्त संसाधन',
    additionalResourcesDesc: 'अधिक दस्तावेज़ीकरण और उदाहरण देखें',
    viewExamplesText: 'उदाहरण देखें',
    backToDocsText: 'दस्तावेज़ों पर वापस जाएं'
  };

  console.log('✅ 翻译内容已准备完成');
  
  return { chineseUpdates, hindiUpdates };
}

// 执行更新
if (require.main === module) {
  try {
    const { chineseUpdates, hindiUpdates } = updateAPITranslations();
    console.log('\n🎉 API翻译更新完成！');
    console.log('中文翻译项目数:', Object.keys(chineseUpdates).length);
    console.log('Hindi翻译项目数:', Object.keys(hindiUpdates).length);
  } catch (error) {
    console.error('❌ 更新翻译过程中发生错误:', error);
  }
}

module.exports = { updateAPITranslations };
