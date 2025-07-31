const fs = require('fs');
const path = require('path');

// Complete features translations for different languages
const featuresTranslations = {
  en: {
    "codeGeneration": {
      "name": "Code Understanding & Generation",
      "description": "Write code using natural language, debug issues, and optimize workflows. Supports multiple programming languages with intelligent code suggestions and error fixes."
    },
    "fileOperations": {
      "name": "File Operations & Management",
      "description": "Operate files directly in the terminal, batch process, rename, search, and edit file content, making file management more intelligent and efficient."
    },
    "googleSearch": {
      "name": "Google Search Integration",
      "description": "Built-in Google search tools to get real-time web content and latest information, providing accurate external context for your development work."
    },
    "extensible": {
      "name": "Extensible Architecture",
      "description": "Support for Model Context Protocol (MCP) and custom tools, easily integrate with various development tools and workflows."
    },
    "automation": {
      "name": "Intelligent Automation",
      "description": "Automate repetitive tasks, generate scripts, and streamline development processes with AI-powered automation capabilities."
    },
    "openSource": {
      "name": "Open Source & Transparent",
      "description": "Fully open source with Apache 2.0 license, transparent development process, and community-driven improvements."
    },
    "cta": {
      "title": "Ready to Transform Your Development Workflow?",
      "description": "Join thousands of developers who are already using Gemini CLI to supercharge their productivity.",
      "getStarted": "Get Started Now",
      "viewTutorials": "View Tutorials"
    }
  },
  ru: {
    "codeGeneration": {
      "name": "Понимание и генерация кода",
      "description": "Пишите код на естественном языке, отлаживайте проблемы и оптимизируйте рабочие процессы. Поддерживает множество языков программирования с интеллектуальными предложениями кода и исправлением ошибок."
    },
    "fileOperations": {
      "name": "Операции с файлами и управление",
      "description": "Работайте с файлами прямо в терминале, пакетная обработка, переименование, поиск и редактирование содержимого файлов, делая управление файлами более интеллектуальным и эффективным."
    },
    "googleSearch": {
      "name": "Интеграция с Google Search",
      "description": "Встроенные инструменты поиска Google для получения контента веб-страниц в реальном времени и актуальной информации, предоставляя точный внешний контекст для вашей работы по разработке."
    },
    "extensible": {
      "name": "Расширяемая архитектура",
      "description": "Поддержка Model Context Protocol (MCP) и пользовательских инструментов, легкая интеграция с различными инструментами разработки и рабочими процессами."
    },
    "automation": {
      "name": "Интеллектуальная автоматизация",
      "description": "Автоматизируйте повторяющиеся задачи, генерируйте скрипты и оптимизируйте процессы разработки с помощью возможностей автоматизации на основе ИИ."
    },
    "openSource": {
      "name": "Открытый исходный код и прозрачность",
      "description": "Полностью открытый исходный код с лицензией Apache 2.0, прозрачный процесс разработки и улучшения, управляемые сообществом."
    },
    "cta": {
      "title": "Готовы преобразовать свой рабочий процесс разработки?",
      "description": "Присоединяйтесь к тысячам разработчиков, которые уже используют Gemini CLI для повышения своей продуктивности.",
      "getStarted": "Начать сейчас",
      "viewTutorials": "Посмотреть учебные пособия"
    }
  },
  hi: {
    "codeGeneration": {
      "name": "कोड समझ और जेनरेशन",
      "description": "प्राकृतिक भाषा का उपयोग करके कोड लिखें, समस्याओं को डिबग करें, और वर्कफ़्लो को अनुकूलित करें। बुद्धिमान कोड सुझावों और त्रुटि सुधारों के साथ कई प्रोग्रामिंग भाषाओं का समर्थन करता है।"
    },
    "fileOperations": {
      "name": "फ़ाइल संचालन और प्रबंधन",
      "description": "टर्मिनल में सीधे फ़ाइलों को संचालित करें, बैच प्रोसेसिंग, नाम बदलना, खोजना और फ़ाइल सामग्री को संपादित करना, फ़ाइल प्रबंधन को अधिक बुद्धिमान और कुशल बनाना।"
    },
    "googleSearch": {
      "name": "Google खोज एकीकरण",
      "description": "वास्तविक समय वेब सामग्री और नवीनतम जानकारी प्राप्त करने के लिए अंतर्निहित Google खोज उपकरण, आपके विकास कार्य के लिए सटीक बाहरी संदर्भ प्रदान करते हैं।"
    },
    "extensible": {
      "name": "विस्तार योग्य आर्किटेक्चर",
      "description": "Model Context Protocol (MCP) और कस्टम टूल्स के लिए समर्थन, विभिन्न विकास उपकरणों और वर्कफ़्लो के साथ आसान एकीकरण।"
    },
    "automation": {
      "name": "बुद्धिमान स्वचालन",
      "description": "दोहराए जाने वाले कार्यों को स्वचालित करें, स्क्रिप्ट जेनरेट करें, और AI-संचालित स्वचालन क्षमताओं के साथ विकास प्रक्रियाओं को सुव्यवस्थित करें।"
    },
    "openSource": {
      "name": "ओपन सोर्स और पारदर्शी",
      "description": "Apache 2.0 लाइसेंस के साथ पूर्णतः ओपन सोर्स, पारदर्शी विकास प्रक्रिया, और समुदाय-संचालित सुधार।"
    },
    "cta": {
      "title": "अपने विकास वर्कफ़्लो को बदलने के लिए तैयार हैं?",
      "description": "हजारों डेवलपर्स से जुड़ें जो पहले से ही अपनी उत्पादकता बढ़ाने के लिए Gemini CLI का उपयोग कर रहे हैं।",
      "getStarted": "अभी शुरू करें",
      "viewTutorials": "ट्यूटोरियल देखें"
    }
  },
  de: {
    "codeGeneration": {
      "name": "Code-Verständnis & Generierung",
      "description": "Schreiben Sie Code in natürlicher Sprache, debuggen Sie Probleme und optimieren Sie Workflows. Unterstützt mehrere Programmiersprachen mit intelligenten Code-Vorschlägen und Fehlerbehebungen."
    },
    "fileOperations": {
      "name": "Dateioperationen & Verwaltung",
      "description": "Arbeiten Sie direkt im Terminal mit Dateien, Stapelverarbeitung, Umbenennung, Suche und Bearbeitung von Dateiinhalten, wodurch die Dateiverwaltung intelligenter und effizienter wird."
    },
    "googleSearch": {
      "name": "Google Search Integration",
      "description": "Integrierte Google-Suchtools für Echtzeit-Webinhalte und aktuelle Informationen, die genauen externen Kontext für Ihre Entwicklungsarbeit bieten."
    },
    "extensible": {
      "name": "Erweiterbare Architektur",
      "description": "Unterstützung für Model Context Protocol (MCP) und benutzerdefinierte Tools, einfache Integration mit verschiedenen Entwicklungstools und Workflows."
    },
    "automation": {
      "name": "Intelligente Automatisierung",
      "description": "Automatisieren Sie wiederkehrende Aufgaben, generieren Sie Skripte und optimieren Sie Entwicklungsprozesse mit KI-gestützten Automatisierungsfunktionen."
    },
    "openSource": {
      "name": "Open Source & Transparent",
      "description": "Vollständig Open Source mit Apache 2.0 Lizenz, transparenter Entwicklungsprozess und community-getriebene Verbesserungen."
    },
    "cta": {
      "title": "Bereit, Ihren Entwicklungsworkflow zu transformieren?",
      "description": "Schließen Sie sich Tausenden von Entwicklern an, die bereits Gemini CLI verwenden, um ihre Produktivität zu steigern.",
      "getStarted": "Jetzt loslegen",
      "viewTutorials": "Tutorials ansehen"
    }
  },
  fr: {
    "codeGeneration": {
      "name": "Compréhension et génération de code",
      "description": "Écrivez du code en langage naturel, déboguez les problèmes et optimisez les flux de travail. Prend en charge plusieurs langages de programmation avec des suggestions de code intelligentes et des corrections d'erreurs."
    },
    "fileOperations": {
      "name": "Opérations sur fichiers et gestion",
      "description": "Opérez sur les fichiers directement dans le terminal, traitement par lots, renommage, recherche et édition du contenu des fichiers, rendant la gestion des fichiers plus intelligente et efficace."
    },
    "googleSearch": {
      "name": "Intégration Google Search",
      "description": "Outils de recherche Google intégrés pour obtenir du contenu web en temps réel et des informations à jour, fournissant un contexte externe précis pour votre travail de développement."
    },
    "extensible": {
      "name": "Architecture extensible",
      "description": "Support pour Model Context Protocol (MCP) et outils personnalisés, intégration facile avec divers outils de développement et flux de travail."
    },
    "automation": {
      "name": "Automatisation intelligente",
      "description": "Automatisez les tâches répétitives, générez des scripts et rationalisez les processus de développement avec des capacités d'automatisation alimentées par l'IA."
    },
    "openSource": {
      "name": "Open Source et transparent",
      "description": "Entièrement open source avec licence Apache 2.0, processus de développement transparent et améliorations pilotées par la communauté."
    },
    "cta": {
      "title": "Prêt à transformer votre flux de travail de développement ?",
      "description": "Rejoignez des milliers de développeurs qui utilisent déjà Gemini CLI pour booster leur productivité.",
      "getStarted": "Commencer maintenant",
      "viewTutorials": "Voir les tutoriels"
    }
  }
};

// Function to update translation files
function updateTranslationFile(locale, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${locale}.json`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Update features section
    if (data.features) {
      Object.assign(data.features, translations);
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${locale}.json with complete features translations`);
  } catch (error) {
    console.error(`Error updating ${locale}.json:`, error.message);
  }
}

// Add remaining languages
const additionalFeaturesTranslations = {
  ja: {
    "codeGeneration": {
      "name": "コード理解と生成",
      "description": "自然言語を使用してコードを書き、問題をデバッグし、ワークフローを最適化します。インテリジェントなコード提案とエラー修正で複数のプログラミング言語をサポートします。"
    },
    "fileOperations": {
      "name": "ファイル操作と管理",
      "description": "ターミナルで直接ファイルを操作し、バッチ処理、名前変更、検索、ファイル内容の編集を行い、ファイル管理をより知的で効率的にします。"
    },
    "googleSearch": {
      "name": "Google検索統合",
      "description": "リアルタイムのWebコンテンツと最新情報を取得するための組み込みGoogle検索ツールで、開発作業に正確な外部コンテキストを提供します。"
    },
    "extensible": {
      "name": "拡張可能なアーキテクチャ",
      "description": "Model Context Protocol (MCP)とカスタムツールのサポート、さまざまな開発ツールとワークフローとの簡単な統合。"
    },
    "automation": {
      "name": "インテリジェント自動化",
      "description": "反復的なタスクを自動化し、スクリプトを生成し、AI駆動の自動化機能で開発プロセスを合理化します。"
    },
    "openSource": {
      "name": "オープンソースと透明性",
      "description": "Apache 2.0ライセンスで完全にオープンソース、透明な開発プロセス、コミュニティ主導の改善。"
    },
    "cta": {
      "title": "開発ワークフローを変革する準備はできていますか？",
      "description": "すでにGemini CLIを使用して生産性を向上させている何千人もの開発者に参加してください。",
      "getStarted": "今すぐ始める",
      "viewTutorials": "チュートリアルを見る"
    }
  },
  ko: {
    "codeGeneration": {
      "name": "코드 이해 및 생성",
      "description": "자연어를 사용하여 코드를 작성하고, 문제를 디버그하며, 워크플로를 최적화합니다. 지능적인 코드 제안과 오류 수정으로 여러 프로그래밍 언어를 지원합니다."
    },
    "fileOperations": {
      "name": "파일 작업 및 관리",
      "description": "터미널에서 직접 파일을 조작하고, 일괄 처리, 이름 변경, 검색 및 파일 내용 편집을 통해 파일 관리를 더욱 지능적이고 효율적으로 만듭니다."
    },
    "googleSearch": {
      "name": "Google 검색 통합",
      "description": "실시간 웹 콘텐츠와 최신 정보를 얻기 위한 내장 Google 검색 도구로, 개발 작업에 정확한 외부 컨텍스트를 제공합니다."
    },
    "extensible": {
      "name": "확장 가능한 아키텍처",
      "description": "Model Context Protocol (MCP) 및 사용자 정의 도구 지원, 다양한 개발 도구 및 워크플로와의 쉬운 통합."
    },
    "automation": {
      "name": "지능형 자동화",
      "description": "반복적인 작업을 자동화하고, 스크립트를 생성하며, AI 기반 자동화 기능으로 개발 프로세스를 간소화합니다."
    },
    "openSource": {
      "name": "오픈 소스 및 투명성",
      "description": "Apache 2.0 라이선스로 완전히 오픈 소스, 투명한 개발 프로세스 및 커뮤니티 주도 개선."
    },
    "cta": {
      "title": "개발 워크플로를 변혁할 준비가 되셨나요?",
      "description": "이미 Gemini CLI를 사용하여 생산성을 높이고 있는 수천 명의 개발자와 함께하세요.",
      "getStarted": "지금 시작하기",
      "viewTutorials": "튜토리얼 보기"
    }
  },
  es: {
    "codeGeneration": {
      "name": "Comprensión y generación de código",
      "description": "Escriba código usando lenguaje natural, depure problemas y optimice flujos de trabajo. Admite múltiples lenguajes de programación con sugerencias de código inteligentes y correcciones de errores."
    },
    "fileOperations": {
      "name": "Operaciones de archivos y gestión",
      "description": "Opere archivos directamente en el terminal, procesamiento por lotes, renombrado, búsqueda y edición de contenido de archivos, haciendo la gestión de archivos más inteligente y eficiente."
    },
    "googleSearch": {
      "name": "Integración de Google Search",
      "description": "Herramientas de búsqueda de Google integradas para obtener contenido web en tiempo real e información actualizada, proporcionando contexto externo preciso para su trabajo de desarrollo."
    },
    "extensible": {
      "name": "Arquitectura extensible",
      "description": "Soporte para Model Context Protocol (MCP) y herramientas personalizadas, fácil integración con varias herramientas de desarrollo y flujos de trabajo."
    },
    "automation": {
      "name": "Automatización inteligente",
      "description": "Automatice tareas repetitivas, genere scripts y optimice procesos de desarrollo con capacidades de automatización impulsadas por IA."
    },
    "openSource": {
      "name": "Código abierto y transparente",
      "description": "Completamente de código abierto con licencia Apache 2.0, proceso de desarrollo transparente y mejoras impulsadas por la comunidad."
    },
    "cta": {
      "title": "¿Listo para transformar su flujo de trabajo de desarrollo?",
      "description": "Únase a miles de desarrolladores que ya están usando Gemini CLI para potenciar su productividad.",
      "getStarted": "Comenzar ahora",
      "viewTutorials": "Ver tutoriales"
    }
  }
};

// Update files
Object.keys(featuresTranslations).forEach(locale => {
  updateTranslationFile(locale, featuresTranslations[locale]);
});

// Update additional languages
Object.keys(additionalFeaturesTranslations).forEach(locale => {
  updateTranslationFile(locale, additionalFeaturesTranslations[locale]);
});

console.log('Features translations update completed!');
