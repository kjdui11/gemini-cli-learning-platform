const fs = require('fs');
const path = require('path');

// 更新API参考页面的完整翻译
function updateAPIReferenceComplete() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'api-reference', 'page.tsx');
  
  console.log('🔧 更新API参考页面的完整翻译...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 为每种语言添加完整的API部分
  const languages = {
    hi: {
      coreApi: 'कोर API',
      coreApiDesc: 'Gemini मॉडल के साथ इंटरैक्ट करने और बातचीत प्रबंधित करने के लिए मुख्य API',
      pluginApi: 'प्लगइन API',
      pluginApiDesc: 'कस्टम प्लगइन्स और एक्सटेंशन विकसित करने के लिए API',
      configApi: 'कॉन्फ़िगरेशन API',
      configApiDesc: 'CLI कॉन्फ़िगरेशन और सेटिंग्स प्रबंधित करने के लिए API',
      toolsApi: 'टूल्स API',
      toolsApiDesc: 'बिल्ट-इन टूल्स प्रबंधित और निष्पादित करने के लिए API',
      
      chatDesc: 'Gemini के साथ इंटरैक्टिव चैट सेशन शुरू करें',
      askDesc: 'एक प्रॉम्प्ट भेजें और प्रतिक्रिया प्राप्त करें',
      analyzeDesc: 'AI सहायता के साथ फ़ाइलों या कोड का विश्लेषण करें',
      registerPluginDesc: 'CLI के साथ नया प्लगइन रजिस्टर करें',
      createToolDesc: 'AI के उपयोग के लिए कस्टम टूल बनाएं',
      getConfigDesc: 'वर्तमान कॉन्फ़िगरेशन सेटिंग्स प्राप्त करें',
      setConfigDesc: 'कॉन्फ़िगरेशन मान सेट करें',
      listToolsDesc: 'सभी उपलब्ध टूल्स की सूची बनाएं',
      executeToolDesc: 'निर्दिष्ट टूल निष्पादित करें',
      
      askExample: '"मशीन लर्निंग क्या है?"',
      analyzeExample: "'src/main.js'",
      pluginComment: '// प्लगइन लॉजिक यहाँ',
      pluginReturn: "'प्लगइन सफलतापूर्वक निष्पादित'",
      weatherDesc: "'निर्दिष्ट स्थान के लिए वर्तमान मौसम प्राप्त करें'",
      weatherComment: '// मौसम डेटा प्राप्त करें',
      weatherReturn: '`${location}में मौसम: धूप, 25°C`',
      configComment1: '// सभी कॉन्फ़िगरेशन प्राप्त करें',
      configComment2: '// विशिष्ट कॉन्फ़िगरेशन प्राप्त करें',
      toolsComment: "'उपलब्ध टूल्स:'"
    },
    fr: {
      coreApi: 'API Principale',
      coreApiDesc: 'API principale pour interagir avec les modèles Gemini et gérer les conversations',
      pluginApi: 'API Plugin',
      pluginApiDesc: 'API pour développer des plugins et extensions personnalisés',
      configApi: 'API de Configuration',
      configApiDesc: 'API pour gérer la configuration et les paramètres CLI',
      toolsApi: 'API des Outils',
      toolsApiDesc: 'API pour gérer et exécuter les outils intégrés',
      
      chatDesc: 'Démarrer une session de chat interactive avec Gemini',
      askDesc: 'Envoyer une invite et recevoir une réponse',
      analyzeDesc: 'Analyser des fichiers ou du code avec l\'assistance IA',
      registerPluginDesc: 'Enregistrer un nouveau plugin avec le CLI',
      createToolDesc: 'Créer un outil personnalisé pour l\'IA',
      getConfigDesc: 'Obtenir les paramètres de configuration actuels',
      setConfigDesc: 'Définir une valeur de configuration',
      listToolsDesc: 'Lister tous les outils disponibles',
      executeToolDesc: 'Exécuter l\'outil spécifié',
      
      askExample: '"Qu\'est-ce que l\'apprentissage automatique ?"',
      analyzeExample: "'src/main.js'",
      pluginComment: '// Logique du plugin ici',
      pluginReturn: "'Plugin exécuté avec succès'",
      weatherDesc: "'Obtenir la météo actuelle pour un lieu'",
      weatherComment: '// Récupérer les données météo',
      weatherReturn: '`Météo à ${location}: Ensoleillé, 25°C`',
      configComment1: '// Obtenir toute la configuration',
      configComment2: '// Obtenir une configuration spécifique',
      toolsComment: "'Outils disponibles:'"
    },
    de: {
      coreApi: 'Kern-API',
      coreApiDesc: 'Haupt-API für die Interaktion mit Gemini-Modellen und die Verwaltung von Gesprächen',
      pluginApi: 'Plugin-API',
      pluginApiDesc: 'API für die Entwicklung benutzerdefinierter Plugins und Erweiterungen',
      configApi: 'Konfigurations-API',
      configApiDesc: 'API zur Verwaltung von CLI-Konfiguration und -Einstellungen',
      toolsApi: 'Tools-API',
      toolsApiDesc: 'API zur Verwaltung und Ausführung integrierter Tools',
      
      chatDesc: 'Interaktive Chat-Sitzung mit Gemini starten',
      askDesc: 'Eine Eingabeaufforderung senden und eine Antwort erhalten',
      analyzeDesc: 'Dateien oder Code mit KI-Unterstützung analysieren',
      registerPluginDesc: 'Neues Plugin mit der CLI registrieren',
      createToolDesc: 'Benutzerdefiniertes Tool für KI erstellen',
      getConfigDesc: 'Aktuelle Konfigurationseinstellungen abrufen',
      setConfigDesc: 'Konfigurationswert festlegen',
      listToolsDesc: 'Alle verfügbaren Tools auflisten',
      executeToolDesc: 'Angegebenes Tool ausführen',
      
      askExample: '"Was ist maschinelles Lernen?"',
      analyzeExample: "'src/main.js'",
      pluginComment: '// Plugin-Logik hier',
      pluginReturn: "'Plugin erfolgreich ausgeführt'",
      weatherDesc: "'Aktuelles Wetter für einen Ort abrufen'",
      weatherComment: '// Wetterdaten abrufen',
      weatherReturn: '`Wetter in ${location}: Sonnig, 25°C`',
      configComment1: '// Alle Konfigurationen abrufen',
      configComment2: '// Spezifische Konfiguration abrufen',
      toolsComment: "'Verfügbare Tools:'"
    }
  };
  
  // 为每种语言更新API部分
  Object.keys(languages).forEach(lang => {
    const translations = languages[lang];
    
    // 更新analyze方法
    const analyzePattern = new RegExp(`(${lang}:[\\s\\S]*?name: 'ask\\(\\)',[\\s\\S]*?\\}\\s*)(\\]\\s*\\}\\s*,\\s*\\{\\s*id: 'plugin-api')`, 'g');
    content = content.replace(analyzePattern, (match, beforePlugin, afterAsk) => {
      return beforePlugin + `,
            {
              name: 'analyze()',
              description: '${translations.analyzeDesc}',
              signature: 'analyze(files: string[], options?: AnalyzeOptions): Promise<AnalysisResult>',
              example: \`const analysis = await cli.analyze([${translations.analyzeExample}], {
  type: 'code-review',
  includeMetrics: true
});\`
            }` + afterAsk;
    });
    
    // 更新插件API方法
    const pluginPattern = new RegExp(`(${lang}:[\\s\\S]*?id: 'plugin-api'[\\s\\S]*?methods: \\[[\\s\\S]*?name: 'registerPlugin\\(\\)',[\\s\\S]*?\\}\\s*)(\\]\\s*\\}\\s*(?:,\\s*\\{\\s*id: 'config-api'|\\]\\s*\\}\\s*,\\s*commonTypes))`, 'g');
    content = content.replace(pluginPattern, (match, beforeEnd, afterPlugin) => {
      return beforeEnd + `,
            {
              name: 'createTool()',
              description: '${translations.createToolDesc}',
              signature: 'createTool(definition: ToolDefinition): Tool',
              example: \`const weatherTool = cli.createTool({
  name: 'get_weather',
  description: ${translations.weatherDesc},
  parameters: {
    location: { type: 'string', required: true }
  },
  execute: async ({ location }) => {
    ${translations.weatherComment}
    return ${translations.weatherReturn};
  }
});\`
            }` + afterPlugin;
    });
  });
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功更新了所有语言的完整API翻译');
  
  return true;
}

// 执行更新
if (require.main === module) {
  try {
    updateAPIReferenceComplete();
    console.log('\n🎉 API参考页面完整翻译更新完成！');
  } catch (error) {
    console.error('❌ 更新过程中发生错误:', error);
  }
}

module.exports = { updateAPIReferenceComplete };
