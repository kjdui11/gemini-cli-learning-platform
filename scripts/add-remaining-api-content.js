const fs = require('fs');
const path = require('path');

// 为剩余语言添加额外的API内容
function addRemainingAPIContent() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 为剩余语言添加额外的API内容...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 韩语额外内容
  const koreanAddition = `,
      // Configuration API
      configApiSectionTitle: '구성 API',
      configApiSectionDesc: 'CLI 구성 및 설정 관리를 위한 API',
      getConfigTitle: 'getConfig()',
      getConfigDesc: '현재 구성 값 가져오기',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: \`// 모든 구성 가져오기
const config = cli.getConfig();

// 특정 구성 값 가져오기
const model = cli.getConfig('model');\`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: '구성 값 설정',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: \`// 모델 설정
cli.setConfig('model', 'gemini-pro');

// 여러 값 설정
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);\`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: '구성을 기본값으로 재설정',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: \`// 모든 구성 재설정
cli.resetConfig();

// 특정 키 재설정
cli.resetConfig('temperature');\`,
      // Tools API
      toolsApiSectionTitle: '도구 API',
      toolsApiSectionDesc: '내장 도구 관리 및 실행을 위한 API',
      listToolsTitle: 'listTools()',
      listToolsDesc: '사용 가능한 도구 목록 가져오기',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: \`const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]\`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: '특정 도구 실행',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: \`// 파일 읽기
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// 셸 명령 실행
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});\`,
      // Common Types
      commonTypesTitle: '공통 타입',
      commonTypesDesc: 'API에서 사용되는 TypeScript 인터페이스 및 타입',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: '채팅 세션 시작을 위한 옵션',
      modelField: 'model',
      modelDesc: '사용할 모델 (예: "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: '창의성 수준 (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: '최대 응답 길이',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: '시스템 지시사항',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: '사용자 정의 도구 생성을 위한 정의',
      nameField: 'name',
      nameDesc: '고유한 도구 이름',
      descriptionField: 'description',
      descriptionDesc: 'AI를 위한 도구 설명',
      parametersField: 'parameters',
      parametersDesc: '매개변수 스키마',
      executeField: 'execute',
      executeDesc: '도구 실행 함수',
      // Additional Resources
      additionalResourcesTitle: '추가 리소스',
      additionalResourcesDesc: '더 많은 문서와 예제 탐색',
      viewExamplesText: '예제 보기',
      backToDocsText: '문서로 돌아가기'`;

  // 西班牙语额外内容
  const spanishAddition = `,
      // Configuration API
      configApiSectionTitle: 'API de Configuración',
      configApiSectionDesc: 'API para gestionar configuración y ajustes del CLI',
      getConfigTitle: 'getConfig()',
      getConfigDesc: 'Obtener valores de configuración actuales',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: \`// Obtener toda la configuración
const config = cli.getConfig();

// Obtener valor de configuración específico
const model = cli.getConfig('model');\`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: 'Establecer valores de configuración',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: \`// Establecer modelo
cli.setConfig('model', 'gemini-pro');

// Establecer múltiples valores
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);\`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: 'Restablecer configuración a valores predeterminados',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: \`// Restablecer toda la configuración
cli.resetConfig();

// Restablecer clave específica
cli.resetConfig('temperature');\`,
      // Tools API
      toolsApiSectionTitle: 'API de Herramientas',
      toolsApiSectionDesc: 'API para gestionar y ejecutar herramientas integradas',
      listToolsTitle: 'listTools()',
      listToolsDesc: 'Obtener lista de herramientas disponibles',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: \`const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]\`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: 'Ejecutar herramienta específica',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: \`// Leer archivo
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// Ejecutar comando shell
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});\`,
      // Common Types
      commonTypesTitle: 'Tipos Comunes',
      commonTypesDesc: 'Interfaces y tipos TypeScript utilizados en la API',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'Opciones para iniciar sesión de chat',
      modelField: 'model',
      modelDesc: 'Modelo a usar (ej: "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: 'Nivel de creatividad (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: 'Longitud máxima de respuesta',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'Instrucciones del sistema',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'Definición para crear herramientas personalizadas',
      nameField: 'name',
      nameDesc: 'Nombre único de herramienta',
      descriptionField: 'description',
      descriptionDesc: 'Descripción de herramienta para IA',
      parametersField: 'parameters',
      parametersDesc: 'Esquema de parámetros',
      executeField: 'execute',
      executeDesc: 'Función de ejecución de herramienta',
      // Additional Resources
      additionalResourcesTitle: 'Recursos Adicionales',
      additionalResourcesDesc: 'Explorar más documentación y ejemplos',
      viewExamplesText: 'Ver Ejemplos',
      backToDocsText: 'Volver a Docs'`;

  // 俄语额外内容
  const russianAddition = `,
      // Configuration API
      configApiSectionTitle: 'API Конфигурации',
      configApiSectionDesc: 'API для управления конфигурацией и настройками CLI',
      getConfigTitle: 'getConfig()',
      getConfigDesc: 'Получить текущие значения конфигурации',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: \`// Получить всю конфигурацию
const config = cli.getConfig();

// Получить конкретное значение конфигурации
const model = cli.getConfig('model');\`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: 'Установить значения конфигурации',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: \`// Установить модель
cli.setConfig('model', 'gemini-pro');

// Установить несколько значений
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);\`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: 'Сбросить конфигурацию к значениям по умолчанию',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: \`// Сбросить всю конфигурацию
cli.resetConfig();

// Сбросить конкретный ключ
cli.resetConfig('temperature');\`,
      // Tools API
      toolsApiSectionTitle: 'API Инструментов',
      toolsApiSectionDesc: 'API для управления и выполнения встроенных инструментов',
      listToolsTitle: 'listTools()',
      listToolsDesc: 'Получить список доступных инструментов',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: \`const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]\`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: 'Выполнить конкретный инструмент',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: \`// Прочитать файл
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// Выполнить команду shell
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});\`,
      // Common Types
      commonTypesTitle: 'Общие Типы',
      commonTypesDesc: 'Интерфейсы и типы TypeScript, используемые в API',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'Опции для запуска сессии чата',
      modelField: 'model',
      modelDesc: 'Модель для использования (например: "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: 'Уровень креативности (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: 'Максимальная длина ответа',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'Системные инструкции',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'Определение для создания пользовательских инструментов',
      nameField: 'name',
      nameDesc: 'Уникальное имя инструмента',
      descriptionField: 'description',
      descriptionDesc: 'Описание инструмента для ИИ',
      parametersField: 'parameters',
      parametersDesc: 'Схема параметров',
      executeField: 'execute',
      executeDesc: 'Функция выполнения инструмента',
      // Additional Resources
      additionalResourcesTitle: 'Дополнительные Ресурсы',
      additionalResourcesDesc: 'Изучить больше документации и примеров',
      viewExamplesText: 'Посмотреть Примеры',
      backToDocsText: 'Вернуться к Документации'`;

  // 添加韩语内容
  content = content.replace(
    "      signatureLabel: '시그니처:',\n      exampleLabel: '예제:'\n    }",
    `      signatureLabel: '시그니처:',\n      exampleLabel: '예제:'${koreanAddition}\n    }`
  );

  // 添加西班牙语内容
  content = content.replace(
    "      signatureLabel: 'Firma:',\n      exampleLabel: 'Ejemplo:'\n    }",
    `      signatureLabel: 'Firma:',\n      exampleLabel: 'Ejemplo:'${spanishAddition}\n    }`
  );

  // 添加俄语内容
  content = content.replace(
    "      signatureLabel: 'Подпись:',\n      exampleLabel: 'Пример:'\n    }",
    `      signatureLabel: 'Подпись:',\n      exampleLabel: 'Пример:'${russianAddition}\n    }`
  );

  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功为韩语、西班牙语和俄语添加了额外的API内容');
  
  return true;
}

// 执行添加内容
if (require.main === module) {
  try {
    addRemainingAPIContent();
    console.log('\n🎉 剩余语言的额外API内容添加完成！');
  } catch (error) {
    console.error('❌ 添加内容过程中发生错误:', error);
  }
}

module.exports = { addRemainingAPIContent };
