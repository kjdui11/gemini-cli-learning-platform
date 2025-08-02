const fs = require('fs');
const path = require('path');

// 为所有语言添加额外的API内容
function addAPIAdditionalContent() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 为所有语言添加额外的API内容...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 法语额外内容
  const frenchAddition = `,
      // Configuration API
      configApiSectionTitle: 'API de Configuration',
      configApiSectionDesc: 'API pour gérer la configuration et les paramètres CLI',
      getConfigTitle: 'getConfig()',
      getConfigDesc: 'Obtenir les valeurs de configuration actuelles',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: \`// Obtenir toute la config
const config = cli.getConfig();

// Obtenir une valeur de config spécifique
const model = cli.getConfig('model');\`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: 'Définir les valeurs de configuration',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: \`// Définir le modèle
cli.setConfig('model', 'gemini-pro');

// Définir plusieurs valeurs
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);\`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: 'Réinitialiser la configuration aux valeurs par défaut',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: \`// Réinitialiser toute la config
cli.resetConfig();

// Réinitialiser une clé spécifique
cli.resetConfig('temperature');\`,
      // Tools API
      toolsApiSectionTitle: 'API des Outils',
      toolsApiSectionDesc: 'API pour gérer et exécuter les outils intégrés',
      listToolsTitle: 'listTools()',
      listToolsDesc: 'Obtenir la liste des outils disponibles',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: \`const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]\`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: 'Exécuter un outil spécifique',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: \`// Lire un fichier
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// Exécuter une commande shell
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});\`,
      // Common Types
      commonTypesTitle: 'Types Communs',
      commonTypesDesc: 'Interfaces et types TypeScript utilisés dans l\\'API',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'Options pour démarrer une session de chat',
      modelField: 'model',
      modelDesc: 'Modèle à utiliser (ex: "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: 'Niveau de créativité (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: 'Longueur maximale de réponse',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'Instructions système',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'Définition pour créer des outils personnalisés',
      nameField: 'name',
      nameDesc: 'Nom unique de l\\'outil',
      descriptionField: 'description',
      descriptionDesc: 'Description de l\\'outil pour l\\'IA',
      parametersField: 'parameters',
      parametersDesc: 'Schéma des paramètres',
      executeField: 'execute',
      executeDesc: 'Fonction d\\'exécution de l\\'outil',
      // Additional Resources
      additionalResourcesTitle: 'Ressources Supplémentaires',
      additionalResourcesDesc: 'Explorer plus de documentation et d\\'exemples',
      viewExamplesText: 'Voir les Exemples',
      backToDocsText: 'Retour aux Docs'`;

  // 德语额外内容
  const germanAddition = `,
      // Configuration API
      configApiSectionTitle: 'Konfigurations-API',
      configApiSectionDesc: 'API zur Verwaltung von CLI-Konfiguration und -Einstellungen',
      getConfigTitle: 'getConfig()',
      getConfigDesc: 'Aktuelle Konfigurationswerte abrufen',
      getConfigSignature: 'getConfig(key?: string): any',
      getConfigExample: \`// Alle Konfiguration abrufen
const config = cli.getConfig();

// Spezifischen Konfigurationswert abrufen
const model = cli.getConfig('model');\`,
      setConfigTitle: 'setConfig()',
      setConfigDesc: 'Konfigurationswerte setzen',
      setConfigSignature: 'setConfig(key: string, value: any): void',
      setConfigExample: \`// Modell setzen
cli.setConfig('model', 'gemini-pro');

// Mehrere Werte setzen
cli.setConfig('temperature', 0.8);
cli.setConfig('maxTokens', 2000);\`,
      resetConfigTitle: 'resetConfig()',
      resetConfigDesc: 'Konfiguration auf Standardwerte zurücksetzen',
      resetConfigSignature: 'resetConfig(key?: string): void',
      resetConfigExample: \`// Alle Konfiguration zurücksetzen
cli.resetConfig();

// Spezifischen Schlüssel zurücksetzen
cli.resetConfig('temperature');\`,
      // Tools API
      toolsApiSectionTitle: 'Tools-API',
      toolsApiSectionDesc: 'API zur Verwaltung und Ausführung integrierter Tools',
      listToolsTitle: 'listTools()',
      listToolsDesc: 'Liste verfügbarer Tools abrufen',
      listToolsSignature: 'listTools(): Tool[]',
      listToolsExample: \`const tools = cli.listTools();
console.log(tools.map(t => t.name));
// ['read_file', 'write_file', 'run_shell_command', ...]\`,
      executeToolTitle: 'executeTool()',
      executeToolDesc: 'Spezifisches Tool ausführen',
      executeToolSignature: 'executeTool(name: string, args: any): Promise<any>',
      executeToolExample: \`// Datei lesen
const content = await cli.executeTool('read_file', {
  path: './package.json'
});

// Shell-Befehl ausführen
const result = await cli.executeTool('run_shell_command', {
  command: 'ls -la'
});\`,
      // Common Types
      commonTypesTitle: 'Häufige Typen',
      commonTypesDesc: 'TypeScript-Schnittstellen und -Typen, die in der API verwendet werden',
      chatOptionsTitle: 'ChatOptions',
      chatOptionsDesc: 'Optionen zum Starten einer Chat-Sitzung',
      modelField: 'model',
      modelDesc: 'Zu verwendendes Modell (z.B. "gemini-pro")',
      temperatureField: 'temperature',
      temperatureDesc: 'Kreativitätslevel (0-1)',
      maxTokensField: 'maxTokens',
      maxTokensDesc: 'Maximale Antwortlänge',
      systemPromptField: 'systemPrompt',
      systemPromptDesc: 'Systemanweisungen',
      toolDefinitionTitle: 'ToolDefinition',
      toolDefinitionDesc: 'Definition zum Erstellen benutzerdefinierter Tools',
      nameField: 'name',
      nameDesc: 'Eindeutiger Tool-Name',
      descriptionField: 'description',
      descriptionDesc: 'Tool-Beschreibung für KI',
      parametersField: 'parameters',
      parametersDesc: 'Parameter-Schema',
      executeField: 'execute',
      executeDesc: 'Tool-Ausführungsfunktion',
      // Additional Resources
      additionalResourcesTitle: 'Zusätzliche Ressourcen',
      additionalResourcesDesc: 'Weitere Dokumentation und Beispiele erkunden',
      viewExamplesText: 'Beispiele Anzeigen',
      backToDocsText: 'Zurück zu Docs'`;

  // 添加法语内容
  content = content.replace(
    "      signatureLabel: 'Signature :',\n      exampleLabel: 'Exemple :'\n    }",
    `      signatureLabel: 'Signature :',\n      exampleLabel: 'Exemple :'${frenchAddition}\n    }`
  );

  // 添加德语内容
  content = content.replace(
    "      signatureLabel: 'Signatur:',\n      exampleLabel: 'Beispiel:'\n    }",
    `      signatureLabel: 'Signatur:',\n      exampleLabel: 'Beispiel:'${germanAddition}\n    }`
  );

  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功为法语和德语添加了额外的API内容');
  
  return true;
}

// 执行添加内容
if (require.main === module) {
  try {
    addAPIAdditionalContent();
    console.log('\n🎉 额外的API内容添加完成！');
  } catch (error) {
    console.error('❌ 添加内容过程中发生错误:', error);
  }
}

module.exports = { addAPIAdditionalContent };
