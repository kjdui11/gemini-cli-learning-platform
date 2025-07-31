const fs = require('fs');
const path = require('path');

// Complete Advanced translations for Hindi and French
const advancedTranslations = {
  hi: {
    "title": "उन्नत गाइड",
    "subtitle": "Gemini CLI में महारत हासिल करने के लिए उन्नत ट्यूटोरियल और गाइड। जटिल वर्कफ़्लो, स्वचालन, और पेशेवर विकास तकनीकों को सीखें।",
    "learnMore": "और जानें",
    "difficulty": {
      "advanced": "उन्नत",
      "expert": "विशेषज्ञ"
    },
    "guides": [
      {
        "title": "उन्नत कॉन्फ़िगरेशन",
        "description": "इष्टतम प्रदर्शन के लिए जटिल कॉन्फ़िगरेशन विकल्प, पर्यावरण चर, और कस्टम सेटिंग्स में महारत हासिल करें।",
        "estimatedTime": "30 मिनट"
      },
      {
        "title": "कोड रिफैक्टरिंग",
        "description": "बड़े पैमाने पर कोड रिफैक्टरिंग, पैटर्न पहचान, और कोड गुणवत्ता सुधार के लिए Gemini CLI का उपयोग करना सीखें।",
        "estimatedTime": "45 मिनट"
      },
      {
        "title": "कोड समीक्षा स्वचालन",
        "description": "कोड समीक्षा प्रक्रियाओं को स्वचालित करें, गुणवत्ता जांच लागू करें, और CI/CD पाइपलाइन के साथ एकीकृत करें।",
        "estimatedTime": "60 मिनट"
      },
      {
        "title": "फ़ाइल ऑपरेशन मास्टरी",
        "description": "उन्नत फ़ाइल हेरफेर, बैच प्रसंस्करण, और जटिल फ़ाइल सिस्टम ऑपरेशन।",
        "estimatedTime": "40 मिनट"
      },
      {
        "title": "कस्टम कमांड",
        "description": "अपने विकास वर्कफ़्लो को सुव्यवस्थित करने के लिए कस्टम कमांड, उपनाम, और शॉर्टकट बनाएं।",
        "estimatedTime": "50 मिनट"
      },
      {
        "title": "प्लगइन विकास",
        "description": "अपनी टीम के लिए Gemini CLI कार्यक्षमता का विस्तार करने के लिए कस्टम प्लगइन बनाएं और वितरित करें।",
        "estimatedTime": "90 मिनट"
      }
    ],
    "prerequisites": {
      "title": "पूर्वापेक्षाएं",
      "technical": {
        "title": "तकनीकी आवश्यकताएं",
        "items": [
          "Gemini CLI स्थापित और कॉन्फ़िगर किया गया",
          "कमांड लाइन इंटरफेस के साथ सहज",
          "विकास वर्कफ़्लो की बुनियादी समझ"
        ]
      },
      "knowledge": {
        "title": "ज्ञान आवश्यकताएं",
        "items": [
          "बुनियादी Gemini CLI ट्यूटोरियल पूरे किए गए",
          "AI-सहायक विकास से परिचित",
          "सॉफ्टवेयर विकास सिद्धांतों की समझ"
        ]
      }
    },
    "cta": {
      "title": "उन्नत चुनौतियों के लिए तैयार हैं?",
      "description": "इन व्यापक उन्नत गाइड के साथ अपने Gemini CLI कौशल को अगले स्तर पर ले जाएं।",
      "allGuides": "सभी गाइड",
      "examples": "उदाहरण देखें"
    }
  },
  fr: {
    "title": "Guides Avancés",
    "subtitle": "Tutoriels et guides avancés pour maîtriser Gemini CLI. Apprenez les flux de travail complexes, l'automatisation et les techniques de développement professionnel.",
    "learnMore": "En Savoir Plus",
    "difficulty": {
      "advanced": "Avancé",
      "expert": "Expert"
    },
    "guides": [
      {
        "title": "Configuration Avancée",
        "description": "Maîtrisez les options de configuration complexes, les variables d'environnement et les paramètres personnalisés pour des performances optimales.",
        "estimatedTime": "30 min"
      },
      {
        "title": "Refactorisation de Code",
        "description": "Apprenez à utiliser Gemini CLI pour la refactorisation de code à grande échelle, la reconnaissance de motifs et l'amélioration de la qualité du code.",
        "estimatedTime": "45 min"
      },
      {
        "title": "Automatisation de Révision de Code",
        "description": "Automatisez les processus de révision de code, implémentez des vérifications de qualité et intégrez avec les pipelines CI/CD.",
        "estimatedTime": "60 min"
      },
      {
        "title": "Maîtrise des Opérations de Fichiers",
        "description": "Manipulation avancée de fichiers, traitement par lots et opérations complexes du système de fichiers.",
        "estimatedTime": "40 min"
      },
      {
        "title": "Commandes Personnalisées",
        "description": "Créez des commandes personnalisées, des alias et des raccourcis pour rationaliser votre flux de travail de développement.",
        "estimatedTime": "50 min"
      },
      {
        "title": "Développement de Plugins",
        "description": "Construisez et distribuez des plugins personnalisés pour étendre les fonctionnalités de Gemini CLI pour votre équipe.",
        "estimatedTime": "90 min"
      }
    ],
    "prerequisites": {
      "title": "Prérequis",
      "technical": {
        "title": "Exigences Techniques",
        "items": [
          "Gemini CLI installé et configuré",
          "À l'aise avec les interfaces en ligne de commande",
          "Compréhension de base des flux de travail de développement"
        ]
      },
      "knowledge": {
        "title": "Exigences de Connaissances",
        "items": [
          "Tutoriels de base Gemini CLI terminés",
          "Familiarité avec le développement assisté par IA",
          "Compréhension des principes de développement logiciel"
        ]
      }
    },
    "cta": {
      "title": "Prêt pour les Défis Avancés ?",
      "description": "Amenez vos compétences Gemini CLI au niveau supérieur avec ces guides avancés complets.",
      "allGuides": "Tous les Guides",
      "examples": "Voir les Exemples"
    }
  },
  de: {
    "title": "Erweiterte Anleitungen",
    "subtitle": "Erweiterte Tutorials und Anleitungen zur Beherrschung von Gemini CLI. Lernen Sie komplexe Workflows, Automatisierung und professionelle Entwicklungstechniken.",
    "learnMore": "Mehr Erfahren",
    "difficulty": {
      "advanced": "Fortgeschritten",
      "expert": "Experte"
    },
    "guides": [
      {
        "title": "Erweiterte Konfiguration",
        "description": "Beherrschen Sie komplexe Konfigurationsoptionen, Umgebungsvariablen und benutzerdefinierte Einstellungen für optimale Leistung.",
        "estimatedTime": "30 Min"
      },
      {
        "title": "Code-Refactoring",
        "description": "Lernen Sie, wie Sie Gemini CLI für großangelegtes Code-Refactoring, Mustererkennung und Code-Qualitätsverbesserungen verwenden.",
        "estimatedTime": "45 Min"
      },
      {
        "title": "Code-Review-Automatisierung",
        "description": "Automatisieren Sie Code-Review-Prozesse, implementieren Sie Qualitätsprüfungen und integrieren Sie mit CI/CD-Pipelines.",
        "estimatedTime": "60 Min"
      },
      {
        "title": "Dateioperationen-Meisterschaft",
        "description": "Erweiterte Dateimanipulation, Stapelverarbeitung und komplexe Dateisystemoperationen.",
        "estimatedTime": "40 Min"
      },
      {
        "title": "Benutzerdefinierte Befehle",
        "description": "Erstellen Sie benutzerdefinierte Befehle, Aliase und Verknüpfungen, um Ihren Entwicklungsworkflow zu optimieren.",
        "estimatedTime": "50 Min"
      },
      {
        "title": "Plugin-Entwicklung",
        "description": "Erstellen und verteilen Sie benutzerdefinierte Plugins, um die Gemini CLI-Funktionalität für Ihr Team zu erweitern.",
        "estimatedTime": "90 Min"
      }
    ],
    "prerequisites": {
      "title": "Voraussetzungen",
      "technical": {
        "title": "Technische Anforderungen",
        "items": [
          "Gemini CLI installiert und konfiguriert",
          "Vertraut mit Befehlszeilenschnittstellen",
          "Grundverständnis von Entwicklungsworkflows"
        ]
      },
      "knowledge": {
        "title": "Wissensanforderungen",
        "items": [
          "Grundlegende Gemini CLI-Tutorials abgeschlossen",
          "Vertrautheit mit KI-unterstützter Entwicklung",
          "Verständnis von Software-Entwicklungsprinzipien"
        ]
      }
    },
    "cta": {
      "title": "Bereit für Erweiterte Herausforderungen?",
      "description": "Bringen Sie Ihre Gemini CLI-Fähigkeiten mit diesen umfassenden erweiterten Anleitungen auf die nächste Stufe.",
      "allGuides": "Alle Anleitungen",
      "examples": "Beispiele Anzeigen"
    }
  },
  ja: {
    "title": "上級ガイド",
    "subtitle": "Gemini CLIをマスターするための上級チュートリアルとガイド。複雑なワークフロー、自動化、プロフェッショナル開発技術を学びます。",
    "learnMore": "詳細を見る",
    "difficulty": {
      "advanced": "上級",
      "expert": "エキスパート"
    },
    "guides": [
      {
        "title": "高度な設定",
        "description": "最適なパフォーマンスのための複雑な設定オプション、環境変数、カスタム設定をマスターします。",
        "estimatedTime": "30分"
      },
      {
        "title": "コードリファクタリング",
        "description": "大規模なコードリファクタリング、パターン認識、コード品質向上のためのGemini CLIの使用方法を学びます。",
        "estimatedTime": "45分"
      },
      {
        "title": "コードレビュー自動化",
        "description": "コードレビュープロセスを自動化し、品質チェックを実装し、CI/CDパイプラインと統合します。",
        "estimatedTime": "60分"
      },
      {
        "title": "ファイル操作マスタリー",
        "description": "高度なファイル操作、バッチ処理、複雑なファイルシステム操作。",
        "estimatedTime": "40分"
      },
      {
        "title": "カスタムコマンド",
        "description": "開発ワークフローを合理化するためのカスタムコマンド、エイリアス、ショートカットを作成します。",
        "estimatedTime": "50分"
      },
      {
        "title": "プラグイン開発",
        "description": "チームのためにGemini CLI機能を拡張するカスタムプラグインを構築・配布します。",
        "estimatedTime": "90分"
      }
    ],
    "prerequisites": {
      "title": "前提条件",
      "technical": {
        "title": "技術要件",
        "items": [
          "Gemini CLIがインストールされ設定済み",
          "コマンドラインインターフェースに慣れている",
          "開発ワークフローの基本的な理解"
        ]
      },
      "knowledge": {
        "title": "知識要件",
        "items": [
          "基本的なGemini CLIチュートリアルを完了",
          "AI支援開発に精通",
          "ソフトウェア開発原則の理解"
        ]
      }
    },
    "cta": {
      "title": "上級チャレンジの準備はできましたか？",
      "description": "これらの包括的な上級ガイドでGemini CLIスキルを次のレベルに引き上げましょう。",
      "allGuides": "すべてのガイド",
      "examples": "例を見る"
    }
  },
  ko: {
    "title": "고급 가이드",
    "subtitle": "Gemini CLI 마스터를 위한 고급 튜토리얼과 가이드. 복잡한 워크플로우, 자동화, 전문 개발 기술을 배우세요.",
    "learnMore": "더 알아보기",
    "difficulty": {
      "advanced": "고급",
      "expert": "전문가"
    },
    "guides": [
      {
        "title": "고급 구성",
        "description": "최적의 성능을 위한 복잡한 구성 옵션, 환경 변수, 사용자 정의 설정을 마스터하세요.",
        "estimatedTime": "30분"
      },
      {
        "title": "코드 리팩토링",
        "description": "대규모 코드 리팩토링, 패턴 인식, 코드 품질 개선을 위한 Gemini CLI 사용법을 배우세요.",
        "estimatedTime": "45분"
      },
      {
        "title": "코드 리뷰 자동화",
        "description": "코드 리뷰 프로세스를 자동화하고, 품질 검사를 구현하며, CI/CD 파이프라인과 통합하세요.",
        "estimatedTime": "60분"
      },
      {
        "title": "파일 작업 마스터리",
        "description": "고급 파일 조작, 배치 처리, 복잡한 파일 시스템 작업.",
        "estimatedTime": "40분"
      },
      {
        "title": "사용자 정의 명령",
        "description": "개발 워크플로우를 간소화하기 위한 사용자 정의 명령, 별칭, 바로가기를 만드세요.",
        "estimatedTime": "50분"
      },
      {
        "title": "플러그인 개발",
        "description": "팀을 위해 Gemini CLI 기능을 확장하는 사용자 정의 플러그인을 구축하고 배포하세요.",
        "estimatedTime": "90분"
      }
    ],
    "prerequisites": {
      "title": "전제 조건",
      "technical": {
        "title": "기술 요구사항",
        "items": [
          "Gemini CLI 설치 및 구성 완료",
          "명령줄 인터페이스에 익숙함",
          "개발 워크플로우의 기본 이해"
        ]
      },
      "knowledge": {
        "title": "지식 요구사항",
        "items": [
          "기본 Gemini CLI 튜토리얼 완료",
          "AI 지원 개발에 익숙함",
          "소프트웨어 개발 원칙 이해"
        ]
      }
    },
    "cta": {
      "title": "고급 도전을 위한 준비가 되셨나요?",
      "description": "이러한 포괄적인 고급 가이드로 Gemini CLI 기술을 다음 단계로 끌어올리세요.",
      "allGuides": "모든 가이드",
      "examples": "예제 보기"
    }
  },
  es: {
    "title": "Guías Avanzadas",
    "subtitle": "Tutoriales y guías avanzadas para dominar Gemini CLI. Aprende flujos de trabajo complejos, automatización y técnicas de desarrollo profesional.",
    "learnMore": "Saber Más",
    "difficulty": {
      "advanced": "Avanzado",
      "expert": "Experto"
    },
    "guides": [
      {
        "title": "Configuración Avanzada",
        "description": "Domina opciones de configuración complejas, variables de entorno y configuraciones personalizadas para un rendimiento óptimo.",
        "estimatedTime": "30 min"
      },
      {
        "title": "Refactorización de Código",
        "description": "Aprende a usar Gemini CLI para refactorización de código a gran escala, reconocimiento de patrones y mejoras de calidad de código.",
        "estimatedTime": "45 min"
      },
      {
        "title": "Automatización de Revisión de Código",
        "description": "Automatiza procesos de revisión de código, implementa verificaciones de calidad e integra con pipelines CI/CD.",
        "estimatedTime": "60 min"
      },
      {
        "title": "Dominio de Operaciones de Archivos",
        "description": "Manipulación avanzada de archivos, procesamiento por lotes y operaciones complejas del sistema de archivos.",
        "estimatedTime": "40 min"
      },
      {
        "title": "Comandos Personalizados",
        "description": "Crea comandos personalizados, alias y atajos para optimizar tu flujo de trabajo de desarrollo.",
        "estimatedTime": "50 min"
      },
      {
        "title": "Desarrollo de Plugins",
        "description": "Construye y distribuye plugins personalizados para extender la funcionalidad de Gemini CLI para tu equipo.",
        "estimatedTime": "90 min"
      }
    ],
    "prerequisites": {
      "title": "Prerrequisitos",
      "technical": {
        "title": "Requisitos Técnicos",
        "items": [
          "Gemini CLI instalado y configurado",
          "Cómodo con interfaces de línea de comandos",
          "Comprensión básica de flujos de trabajo de desarrollo"
        ]
      },
      "knowledge": {
        "title": "Requisitos de Conocimiento",
        "items": [
          "Tutoriales básicos de Gemini CLI completados",
          "Familiaridad con desarrollo asistido por IA",
          "Comprensión de principios de desarrollo de software"
        ]
      }
    },
    "cta": {
      "title": "¿Listo para Desafíos Avanzados?",
      "description": "Lleva tus habilidades de Gemini CLI al siguiente nivel con estas guías avanzadas integrales.",
      "allGuides": "Todas las Guías",
      "examples": "Ver Ejemplos"
    }
  },
  ru: {
    "title": "Продвинутые Руководства",
    "subtitle": "Продвинутые туториалы и руководства для освоения Gemini CLI. Изучите сложные рабочие процессы, автоматизацию и профессиональные техники разработки.",
    "learnMore": "Узнать Больше",
    "difficulty": {
      "advanced": "Продвинутый",
      "expert": "Эксперт"
    },
    "guides": [
      {
        "title": "Продвинутая Конфигурация",
        "description": "Освойте сложные опции конфигурации, переменные окружения и пользовательские настройки для оптимальной производительности.",
        "estimatedTime": "30 мин"
      },
      {
        "title": "Рефакторинг Кода",
        "description": "Изучите, как использовать Gemini CLI для крупномасштабного рефакторинга кода, распознавания паттернов и улучшения качества кода.",
        "estimatedTime": "45 мин"
      },
      {
        "title": "Автоматизация Ревью Кода",
        "description": "Автоматизируйте процессы ревью кода, внедрите проверки качества и интегрируйте с CI/CD пайплайнами.",
        "estimatedTime": "60 мин"
      },
      {
        "title": "Мастерство Файловых Операций",
        "description": "Продвинутая манипуляция файлами, пакетная обработка и сложные операции файловой системы.",
        "estimatedTime": "40 мин"
      },
      {
        "title": "Пользовательские Команды",
        "description": "Создавайте пользовательские команды, псевдонимы и ярлыки для оптимизации вашего рабочего процесса разработки.",
        "estimatedTime": "50 мин"
      },
      {
        "title": "Разработка Плагинов",
        "description": "Создавайте и распространяйте пользовательские плагины для расширения функциональности Gemini CLI для вашей команды.",
        "estimatedTime": "90 мин"
      }
    ],
    "prerequisites": {
      "title": "Предварительные Требования",
      "technical": {
        "title": "Технические Требования",
        "items": [
          "Gemini CLI установлен и настроен",
          "Комфортная работа с интерфейсами командной строки",
          "Базовое понимание рабочих процессов разработки"
        ]
      },
      "knowledge": {
        "title": "Требования к Знаниям",
        "items": [
          "Завершены базовые туториалы Gemini CLI",
          "Знакомство с разработкой с помощью ИИ",
          "Понимание принципов разработки программного обеспечения"
        ]
      }
    },
    "cta": {
      "title": "Готовы к Продвинутым Вызовам?",
      "description": "Поднимите ваши навыки Gemini CLI на следующий уровень с этими всеобъемлющими продвинутыми руководствами.",
      "allGuides": "Все Руководства",
      "examples": "Посмотреть Примеры"
    }
  }
};

// Function to apply Advanced translations
function applyAdvancedTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = advancedTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Advanced translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesAdvanced with professional translation
    data.guidesAdvanced = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Advanced translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const advanced = newData.guidesAdvanced;
    console.log(`   - Title: "${advanced?.title || 'N/A'}"`);
    console.log(`   - Guides: ${advanced?.guides?.length || 0}`);
    console.log(`   - Technical prerequisites: ${advanced?.prerequisites?.technical?.items?.length || 0}`);
    console.log(`   - Knowledge prerequisites: ${advanced?.prerequisites?.knowledge?.items?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Advanced translations for ${langCode}:`, error.message);
  }
}

// Apply Advanced translations
console.log('🚀 Applying professional Advanced translations...\n');

Object.keys(advancedTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying Advanced translations for ${langNames[langCode]}...`);
  applyAdvancedTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Advanced translations applied!');
console.log('🎯 All 7 languages now have complete professional content.');
