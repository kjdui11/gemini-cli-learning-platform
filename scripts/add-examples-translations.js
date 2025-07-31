const fs = require('fs');
const path = require('path');

// Complete Examples translations for all 7 languages
const examplesTranslations = {
  hi: {
    "title": "व्यावहारिक उदाहरण",
    "subtitle": "Gemini CLI के लिए वास्तविक दुनिया के उदाहरण और केस स्टडी। व्यावहारिक परिदृश्यों और हैंड्स-ऑन प्रोजेक्ट्स के माध्यम से सीखें।",
    "tryExample": "उदाहरण आज़माएं",
    "difficulty": {
      "beginner": "शुरुआती",
      "intermediate": "मध्यम",
      "advanced": "उन्नत"
    },
    "categories": [
      {
        "title": "कोड जेनरेशन उदाहरण",
        "description": "विभिन्न प्रोग्रामिंग भाषाओं और फ्रेमवर्क के लिए व्यावहारिक कोड जेनरेशन परिदृश्य",
        "examples": [
          {
            "title": "React कंपोनेंट जेनरेटर",
            "description": "TypeScript, props, और स्टाइलिंग के साथ React कंपोनेंट जेनरेट करें",
            "command": "gemini \"अवतार, नाम, और बायो के साथ एक उपयोगकर्ता प्रोफ़ाइल कार्ड के लिए React कंपोनेंट बनाएं\""
          },
          {
            "title": "API एंडपॉइंट निर्माण",
            "description": "सत्यापन और त्रुटि हैंडलिंग के साथ REST API एंडपॉइंट जेनरेट करें",
            "command": "gemini \"JWT के साथ उपयोगकर्ता प्रमाणीकरण के लिए Node.js Express एंडपॉइंट बनाएं\""
          },
          {
            "title": "डेटाबेस स्कीमा डिज़ाइन",
            "description": "डेटाबेस स्कीमा और माइग्रेशन स्क्रिप्ट जेनरेट करें",
            "command": "gemini \"ई-कॉमर्स प्लेटफॉर्म के लिए PostgreSQL स्कीमा डिज़ाइन करें\""
          }
        ]
      },
      {
        "title": "फ़ाइल ऑपरेशन उदाहरण",
        "description": "बैच प्रसंस्करण, फ़ाइल हेरफेर, और सामग्री रूपांतरण कार्य",
        "examples": [
          {
            "title": "बैच फ़ाइल नामकरण",
            "description": "पैटर्न और मेटाडेटा के आधार पर कई फ़ाइलों का नाम बदलें",
            "command": "gemini \"इस डायरेक्टरी में सभी .jpg फ़ाइलों का नाम बदलकर निर्माण तिथि शामिल करें\""
          },
          {
            "title": "सामग्री माइग्रेशन",
            "description": "विभिन्न प्रारूपों के बीच सामग्री को कनवर्ट और माइग्रेट करें",
            "command": "gemini \"सभी Markdown फ़ाइलों को कस्टम स्टाइलिंग के साथ HTML में कनवर्ट करें\""
          },
          {
            "title": "लॉग फ़ाइल विश्लेषण",
            "description": "अंतर्दृष्टि और पैटर्न के लिए लॉग फ़ाइलों को पार्स और विश्लेषित करें",
            "command": "gemini \"इस Apache लॉग फ़ाइल का विश्लेषण करें और ट्रैफ़िक पैटर्न को सारांशित करें\""
          }
        ]
      },
      {
        "title": "दस्तावेज़ीकरण उदाहरण",
        "description": "व्यापक दस्तावेज़ीकरण और तकनीकी लेखन जेनरेट करें",
        "examples": [
          {
            "title": "API दस्तावेज़ीकरण",
            "description": "कोड से पूर्ण API दस्तावेज़ीकरण जेनरेट करें",
            "command": "gemini \"इस Express.js API के लिए OpenAPI दस्तावेज़ीकरण जेनरेट करें\""
          },
          {
            "title": "README जेनरेशन",
            "description": "प्रोजेक्ट्स के लिए विस्तृत README फ़ाइलें बनाएं",
            "command": "gemini \"इस Python प्रोजेक्ट के लिए एक व्यापक README बनाएं\""
          }
        ]
      }
    ],
    "tips": {
      "title": "बेहतर परिणामों के लिए प्रो टिप्स",
      "items": [
        {
          "title": "विशिष्ट बनें",
          "description": "बेहतर AI प्रतिक्रियाओं के लिए संदर्भ और आवश्यकताओं के साथ स्पष्ट, विस्तृत प्रॉम्प्ट प्रदान करें।"
        },
        {
          "title": "उदाहरण का उपयोग करें",
          "description": "AI को आपके वांछित आउटपुट प्रारूप की ओर मार्गदर्शन करने के लिए अपने प्रॉम्प्ट में उदाहरण शामिल करें।"
        },
        {
          "title": "पुनरावृत्ति और परिष्कृत करें",
          "description": "बुनियादी प्रॉम्प्ट से शुरू करें और आपको मिलने वाले परिणामों के आधार पर उन्हें परिष्कृत करें।"
        },
        {
          "title": "संदर्भ मायने रखता है",
          "description": "अपने प्रोजेक्ट, टेक स्टैक, और बाधाओं के बारे में प्रासंगिक संदर्भ प्रदान करें।"
        }
      ]
    },
    "cta": {
      "title": "इन उदाहरणों को आज़माने के लिए तैयार हैं?",
      "description": "इन व्यावहारिक उदाहरणों के साथ प्रयोग करना शुरू करें और जानें कि Gemini CLI आपके विकास वर्कफ़्लो को कैसे तेज़ कर सकता है।",
      "allGuides": "सभी गाइड",
      "advancedGuides": "उन्नत गाइड"
    }
  },
  fr: {
    "title": "Exemples Pratiques",
    "subtitle": "Exemples du monde réel et études de cas pour Gemini CLI. Apprenez à travers des scénarios pratiques et des projets pratiques.",
    "tryExample": "Essayer l'Exemple",
    "difficulty": {
      "beginner": "Débutant",
      "intermediate": "Intermédiaire",
      "advanced": "Avancé"
    },
    "categories": [
      {
        "title": "Exemples de Génération de Code",
        "description": "Scénarios pratiques de génération de code pour différents langages de programmation et frameworks",
        "examples": [
          {
            "title": "Générateur de Composant React",
            "description": "Générer des composants React avec TypeScript, props et styling",
            "command": "gemini \"Créer un composant React pour une carte de profil utilisateur avec avatar, nom et bio\""
          },
          {
            "title": "Création d'Endpoint API",
            "description": "Générer des endpoints API REST avec validation et gestion d'erreurs",
            "command": "gemini \"Créer un endpoint Node.js Express pour l'authentification utilisateur avec JWT\""
          },
          {
            "title": "Conception de Schéma de Base de Données",
            "description": "Générer des schémas de base de données et des scripts de migration",
            "command": "gemini \"Concevoir un schéma PostgreSQL pour une plateforme e-commerce\""
          }
        ]
      },
      {
        "title": "Exemples d'Opérations de Fichiers",
        "description": "Traitement par lots, manipulation de fichiers et tâches de transformation de contenu",
        "examples": [
          {
            "title": "Renommage de Fichiers par Lots",
            "description": "Renommer plusieurs fichiers basés sur des motifs et métadonnées",
            "command": "gemini \"Renommer tous les fichiers .jpg de ce répertoire pour inclure la date de création\""
          },
          {
            "title": "Migration de Contenu",
            "description": "Convertir et migrer le contenu entre différents formats",
            "command": "gemini \"Convertir tous les fichiers Markdown en HTML avec un style personnalisé\""
          },
          {
            "title": "Analyse de Fichiers de Log",
            "description": "Parser et analyser les fichiers de log pour des insights et motifs",
            "command": "gemini \"Analyser ce fichier de log Apache et résumer les motifs de trafic\""
          }
        ]
      },
      {
        "title": "Exemples de Documentation",
        "description": "Générer une documentation complète et de la rédaction technique",
        "examples": [
          {
            "title": "Documentation API",
            "description": "Générer une documentation API complète à partir du code",
            "command": "gemini \"Générer la documentation OpenAPI pour cette API Express.js\""
          },
          {
            "title": "Génération de README",
            "description": "Créer des fichiers README détaillés pour les projets",
            "command": "gemini \"Créer un README complet pour ce projet Python\""
          }
        ]
      }
    ],
    "tips": {
      "title": "Conseils Pro pour de Meilleurs Résultats",
      "items": [
        {
          "title": "Soyez Spécifique",
          "description": "Fournissez des prompts clairs et détaillés avec contexte et exigences pour de meilleures réponses IA."
        },
        {
          "title": "Utilisez des Exemples",
          "description": "Incluez des exemples dans vos prompts pour guider l'IA vers votre format de sortie désiré."
        },
        {
          "title": "Itérez et Affinez",
          "description": "Commencez avec des prompts basiques et affinez-les basés sur les résultats que vous obtenez."
        },
        {
          "title": "Le Contexte Compte",
          "description": "Fournissez un contexte pertinent sur votre projet, stack technique et contraintes."
        }
      ]
    },
    "cta": {
      "title": "Prêt à Essayer Ces Exemples ?",
      "description": "Commencez à expérimenter avec ces exemples pratiques et découvrez comment Gemini CLI peut accélérer votre flux de travail de développement.",
      "allGuides": "Tous les Guides",
      "advancedGuides": "Guides Avancés"
    }
  },
  de: {
    "title": "Praktische Beispiele",
    "subtitle": "Reale Beispiele und Fallstudien für Gemini CLI. Lernen Sie durch praktische Szenarien und praktische Projekte.",
    "tryExample": "Beispiel Ausprobieren",
    "difficulty": {
      "beginner": "Anfänger",
      "intermediate": "Fortgeschritten",
      "advanced": "Experte"
    },
    "categories": [
      {
        "title": "Code-Generierung Beispiele",
        "description": "Praktische Code-Generierungsszenarien für verschiedene Programmiersprachen und Frameworks",
        "examples": [
          {
            "title": "React-Komponenten-Generator",
            "description": "React-Komponenten mit TypeScript, Props und Styling generieren",
            "command": "gemini \"Erstelle eine React-Komponente für eine Benutzerprofilkarte mit Avatar, Name und Bio\""
          },
          {
            "title": "API-Endpoint-Erstellung",
            "description": "REST-API-Endpoints mit Validierung und Fehlerbehandlung generieren",
            "command": "gemini \"Erstelle einen Node.js Express-Endpoint für Benutzerauthentifizierung mit JWT\""
          },
          {
            "title": "Datenbank-Schema-Design",
            "description": "Datenbank-Schemas und Migrationsskripte generieren",
            "command": "gemini \"Entwerfe ein PostgreSQL-Schema für eine E-Commerce-Plattform\""
          }
        ]
      },
      {
        "title": "Dateioperationen Beispiele",
        "description": "Stapelverarbeitung, Dateimanipulation und Inhaltstransformationsaufgaben",
        "examples": [
          {
            "title": "Stapel-Dateiumbenennung",
            "description": "Mehrere Dateien basierend auf Mustern und Metadaten umbenennen",
            "command": "gemini \"Benenne alle .jpg-Dateien in diesem Verzeichnis um, um das Erstellungsdatum einzuschließen\""
          },
          {
            "title": "Inhaltsmigration",
            "description": "Inhalte zwischen verschiedenen Formaten konvertieren und migrieren",
            "command": "gemini \"Konvertiere alle Markdown-Dateien zu HTML mit benutzerdefiniertem Styling\""
          },
          {
            "title": "Log-Datei-Analyse",
            "description": "Log-Dateien für Einblicke und Muster parsen und analysieren",
            "command": "gemini \"Analysiere diese Apache-Log-Datei und fasse Traffic-Muster zusammen\""
          }
        ]
      },
      {
        "title": "Dokumentations-Beispiele",
        "description": "Umfassende Dokumentation und technisches Schreiben generieren",
        "examples": [
          {
            "title": "API-Dokumentation",
            "description": "Vollständige API-Dokumentation aus Code generieren",
            "command": "gemini \"Generiere OpenAPI-Dokumentation für diese Express.js-API\""
          },
          {
            "title": "README-Generierung",
            "description": "Detaillierte README-Dateien für Projekte erstellen",
            "command": "gemini \"Erstelle eine umfassende README für dieses Python-Projekt\""
          }
        ]
      }
    ],
    "tips": {
      "title": "Profi-Tipps für Bessere Ergebnisse",
      "items": [
        {
          "title": "Seien Sie Spezifisch",
          "description": "Geben Sie klare, detaillierte Prompts mit Kontext und Anforderungen für bessere KI-Antworten."
        },
        {
          "title": "Verwenden Sie Beispiele",
          "description": "Fügen Sie Beispiele in Ihre Prompts ein, um die KI zu Ihrem gewünschten Ausgabeformat zu führen."
        },
        {
          "title": "Iterieren und Verfeinern",
          "description": "Beginnen Sie mit grundlegenden Prompts und verfeinern Sie sie basierend auf den Ergebnissen, die Sie erhalten."
        },
        {
          "title": "Kontext Ist Wichtig",
          "description": "Geben Sie relevanten Kontext über Ihr Projekt, Tech-Stack und Einschränkungen an."
        }
      ]
    },
    "cta": {
      "title": "Bereit, Diese Beispiele Auszuprobieren?",
      "description": "Beginnen Sie mit diesen praktischen Beispielen zu experimentieren und entdecken Sie, wie Gemini CLI Ihren Entwicklungsworkflow beschleunigen kann.",
      "allGuides": "Alle Anleitungen",
      "advancedGuides": "Erweiterte Anleitungen"
    }
  },
  ja: {
    "title": "実践的な例",
    "subtitle": "Gemini CLIの実世界の例とケーススタディ。実践的なシナリオとハンズオンプロジェクトを通して学習します。",
    "tryExample": "例を試す",
    "difficulty": {
      "beginner": "初心者",
      "intermediate": "中級",
      "advanced": "上級"
    },
    "categories": [
      {
        "title": "コード生成の例",
        "description": "さまざまなプログラミング言語とフレームワークの実践的なコード生成シナリオ",
        "examples": [
          {
            "title": "Reactコンポーネントジェネレーター",
            "description": "TypeScript、props、スタイリングを含むReactコンポーネントを生成",
            "command": "gemini \"アバター、名前、経歴を含むユーザープロフィールカードのReactコンポーネントを作成\""
          },
          {
            "title": "APIエンドポイント作成",
            "description": "バリデーションとエラーハンドリングを含むREST APIエンドポイントを生成",
            "command": "gemini \"JWTを使用したユーザー認証のためのNode.js Expressエンドポイントを作成\""
          },
          {
            "title": "データベーススキーマ設計",
            "description": "データベーススキーマとマイグレーションスクリプトを生成",
            "command": "gemini \"eコマースプラットフォーム用のPostgreSQLスキーマを設計\""
          }
        ]
      },
      {
        "title": "ファイル操作の例",
        "description": "バッチ処理、ファイル操作、コンテンツ変換タスク",
        "examples": [
          {
            "title": "バッチファイル名変更",
            "description": "パターンとメタデータに基づいて複数のファイル名を変更",
            "command": "gemini \"このディレクトリ内のすべての.jpgファイルの名前を変更して作成日を含める\""
          },
          {
            "title": "コンテンツ移行",
            "description": "異なる形式間でコンテンツを変換・移行",
            "command": "gemini \"すべてのMarkdownファイルをカスタムスタイリングでHTMLに変換\""
          },
          {
            "title": "ログファイル分析",
            "description": "洞察とパターンのためにログファイルを解析・分析",
            "command": "gemini \"このApacheログファイルを分析してトラフィックパターンを要約\""
          }
        ]
      },
      {
        "title": "ドキュメントの例",
        "description": "包括的なドキュメントと技術文書を生成",
        "examples": [
          {
            "title": "APIドキュメント",
            "description": "コードから完全なAPIドキュメントを生成",
            "command": "gemini \"このExpress.js APIのOpenAPIドキュメントを生成\""
          },
          {
            "title": "README生成",
            "description": "プロジェクト用の詳細なREADMEファイルを作成",
            "command": "gemini \"このPythonプロジェクトの包括的なREADMEを作成\""
          }
        ]
      }
    ],
    "tips": {
      "title": "より良い結果のためのプロのヒント",
      "items": [
        {
          "title": "具体的に",
          "description": "より良いAI応答のために、コンテキストと要件を含む明確で詳細なプロンプトを提供してください。"
        },
        {
          "title": "例を使用",
          "description": "AIを望ましい出力形式に導くために、プロンプトに例を含めてください。"
        },
        {
          "title": "反復と改良",
          "description": "基本的なプロンプトから始めて、得られる結果に基づいて改良してください。"
        },
        {
          "title": "コンテキストが重要",
          "description": "プロジェクト、技術スタック、制約について関連するコンテキストを提供してください。"
        }
      ]
    },
    "cta": {
      "title": "これらの例を試す準備はできましたか？",
      "description": "これらの実践的な例で実験を始めて、Gemini CLIがあなたの開発ワークフローをどのように加速できるかを発見してください。",
      "allGuides": "すべてのガイド",
      "advancedGuides": "上級ガイド"
    }
  },
  ko: {
    "title": "실용적인 예제",
    "subtitle": "Gemini CLI의 실제 예제와 케이스 스터디. 실용적인 시나리오와 실습 프로젝트를 통해 학습하세요.",
    "tryExample": "예제 시도",
    "difficulty": {
      "beginner": "초급",
      "intermediate": "중급",
      "advanced": "고급"
    },
    "categories": [
      {
        "title": "코드 생성 예제",
        "description": "다양한 프로그래밍 언어와 프레임워크를 위한 실용적인 코드 생성 시나리오",
        "examples": [
          {
            "title": "React 컴포넌트 생성기",
            "description": "TypeScript, props, 스타일링을 포함한 React 컴포넌트 생성",
            "command": "gemini \"아바타, 이름, 소개가 포함된 사용자 프로필 카드용 React 컴포넌트 생성\""
          },
          {
            "title": "API 엔드포인트 생성",
            "description": "검증과 오류 처리를 포함한 REST API 엔드포인트 생성",
            "command": "gemini \"JWT를 사용한 사용자 인증을 위한 Node.js Express 엔드포인트 생성\""
          },
          {
            "title": "데이터베이스 스키마 설계",
            "description": "데이터베이스 스키마와 마이그레이션 스크립트 생성",
            "command": "gemini \"전자상거래 플랫폼을 위한 PostgreSQL 스키마 설계\""
          }
        ]
      },
      {
        "title": "파일 작업 예제",
        "description": "배치 처리, 파일 조작, 콘텐츠 변환 작업",
        "examples": [
          {
            "title": "배치 파일 이름 변경",
            "description": "패턴과 메타데이터를 기반으로 여러 파일 이름 변경",
            "command": "gemini \"이 디렉토리의 모든 .jpg 파일 이름을 생성 날짜를 포함하도록 변경\""
          },
          {
            "title": "콘텐츠 마이그레이션",
            "description": "다른 형식 간 콘텐츠 변환 및 마이그레이션",
            "command": "gemini \"모든 Markdown 파일을 사용자 정의 스타일링으로 HTML로 변환\""
          },
          {
            "title": "로그 파일 분석",
            "description": "인사이트와 패턴을 위한 로그 파일 파싱 및 분석",
            "command": "gemini \"이 Apache 로그 파일을 분석하고 트래픽 패턴을 요약\""
          }
        ]
      },
      {
        "title": "문서화 예제",
        "description": "포괄적인 문서화와 기술 문서 생성",
        "examples": [
          {
            "title": "API 문서화",
            "description": "코드에서 완전한 API 문서 생성",
            "command": "gemini \"이 Express.js API에 대한 OpenAPI 문서 생성\""
          },
          {
            "title": "README 생성",
            "description": "프로젝트를 위한 상세한 README 파일 생성",
            "command": "gemini \"이 Python 프로젝트에 대한 포괄적인 README 생성\""
          }
        ]
      }
    ],
    "tips": {
      "title": "더 나은 결과를 위한 프로 팁",
      "items": [
        {
          "title": "구체적으로 작성",
          "description": "더 나은 AI 응답을 위해 컨텍스트와 요구사항이 포함된 명확하고 상세한 프롬프트를 제공하세요."
        },
        {
          "title": "예제 사용",
          "description": "AI가 원하는 출력 형식으로 안내하도록 프롬프트에 예제를 포함하세요."
        },
        {
          "title": "반복과 개선",
          "description": "기본 프롬프트로 시작하여 얻는 결과를 바탕으로 개선하세요."
        },
        {
          "title": "컨텍스트가 중요",
          "description": "프로젝트, 기술 스택, 제약사항에 대한 관련 컨텍스트를 제공하세요."
        }
      ]
    },
    "cta": {
      "title": "이 예제들을 시도할 준비가 되셨나요?",
      "description": "이러한 실용적인 예제로 실험을 시작하고 Gemini CLI가 개발 워크플로우를 어떻게 가속화할 수 있는지 발견하세요.",
      "allGuides": "모든 가이드",
      "advancedGuides": "고급 가이드"
    }
  },
  es: {
    "title": "Ejemplos Prácticos",
    "subtitle": "Ejemplos del mundo real y estudios de caso para Gemini CLI. Aprende a través de escenarios prácticos y proyectos prácticos.",
    "tryExample": "Probar Ejemplo",
    "difficulty": {
      "beginner": "Principiante",
      "intermediate": "Intermedio",
      "advanced": "Avanzado"
    },
    "categories": [
      {
        "title": "Ejemplos de Generación de Código",
        "description": "Escenarios prácticos de generación de código para diferentes lenguajes de programación y frameworks",
        "examples": [
          {
            "title": "Generador de Componentes React",
            "description": "Generar componentes React con TypeScript, props y styling",
            "command": "gemini \"Crear un componente React para una tarjeta de perfil de usuario con avatar, nombre y biografía\""
          },
          {
            "title": "Creación de Endpoint API",
            "description": "Generar endpoints API REST con validación y manejo de errores",
            "command": "gemini \"Crear un endpoint Node.js Express para autenticación de usuario con JWT\""
          },
          {
            "title": "Diseño de Esquema de Base de Datos",
            "description": "Generar esquemas de base de datos y scripts de migración",
            "command": "gemini \"Diseñar un esquema PostgreSQL para una plataforma de comercio electrónico\""
          }
        ]
      },
      {
        "title": "Ejemplos de Operaciones de Archivos",
        "description": "Procesamiento por lotes, manipulación de archivos y tareas de transformación de contenido",
        "examples": [
          {
            "title": "Renombrado de Archivos por Lotes",
            "description": "Renombrar múltiples archivos basados en patrones y metadatos",
            "command": "gemini \"Renombrar todos los archivos .jpg en este directorio para incluir la fecha de creación\""
          },
          {
            "title": "Migración de Contenido",
            "description": "Convertir y migrar contenido entre diferentes formatos",
            "command": "gemini \"Convertir todos los archivos Markdown a HTML con estilo personalizado\""
          },
          {
            "title": "Análisis de Archivos de Log",
            "description": "Parsear y analizar archivos de log para insights y patrones",
            "command": "gemini \"Analizar este archivo de log de Apache y resumir patrones de tráfico\""
          }
        ]
      },
      {
        "title": "Ejemplos de Documentación",
        "description": "Generar documentación completa y escritura técnica",
        "examples": [
          {
            "title": "Documentación API",
            "description": "Generar documentación API completa desde código",
            "command": "gemini \"Generar documentación OpenAPI para esta API Express.js\""
          },
          {
            "title": "Generación de README",
            "description": "Crear archivos README detallados para proyectos",
            "command": "gemini \"Crear un README completo para este proyecto Python\""
          }
        ]
      }
    ],
    "tips": {
      "title": "Consejos Pro para Mejores Resultados",
      "items": [
        {
          "title": "Sé Específico",
          "description": "Proporciona prompts claros y detallados con contexto y requisitos para mejores respuestas de IA."
        },
        {
          "title": "Usa Ejemplos",
          "description": "Incluye ejemplos en tus prompts para guiar a la IA hacia tu formato de salida deseado."
        },
        {
          "title": "Itera y Refina",
          "description": "Comienza con prompts básicos y refínalos basándote en los resultados que obtienes."
        },
        {
          "title": "El Contexto Importa",
          "description": "Proporciona contexto relevante sobre tu proyecto, stack tecnológico y restricciones."
        }
      ]
    },
    "cta": {
      "title": "¿Listo para Probar Estos Ejemplos?",
      "description": "Comienza a experimentar con estos ejemplos prácticos y descubre cómo Gemini CLI puede acelerar tu flujo de trabajo de desarrollo.",
      "allGuides": "Todas las Guías",
      "advancedGuides": "Guías Avanzadas"
    }
  },
  ru: {
    "title": "Практические Примеры",
    "subtitle": "Реальные примеры и кейсы для Gemini CLI. Изучайте через практические сценарии и практические проекты.",
    "tryExample": "Попробовать Пример",
    "difficulty": {
      "beginner": "Начинающий",
      "intermediate": "Средний",
      "advanced": "Продвинутый"
    },
    "categories": [
      {
        "title": "Примеры Генерации Кода",
        "description": "Практические сценарии генерации кода для различных языков программирования и фреймворков",
        "examples": [
          {
            "title": "Генератор React Компонентов",
            "description": "Генерация React компонентов с TypeScript, props и стилизацией",
            "command": "gemini \"Создать React компонент для карточки профиля пользователя с аватаром, именем и биографией\""
          },
          {
            "title": "Создание API Endpoint",
            "description": "Генерация REST API endpoints с валидацией и обработкой ошибок",
            "command": "gemini \"Создать Node.js Express endpoint для аутентификации пользователя с JWT\""
          },
          {
            "title": "Дизайн Схемы Базы Данных",
            "description": "Генерация схем базы данных и скриптов миграции",
            "command": "gemini \"Спроектировать PostgreSQL схему для платформы электронной коммерции\""
          }
        ]
      },
      {
        "title": "Примеры Файловых Операций",
        "description": "Пакетная обработка, манипуляция файлами и задачи трансформации контента",
        "examples": [
          {
            "title": "Пакетное Переименование Файлов",
            "description": "Переименование нескольких файлов на основе паттернов и метаданных",
            "command": "gemini \"Переименовать все .jpg файлы в этой директории, включив дату создания\""
          },
          {
            "title": "Миграция Контента",
            "description": "Конвертация и миграция контента между различными форматами",
            "command": "gemini \"Конвертировать все Markdown файлы в HTML с пользовательской стилизацией\""
          },
          {
            "title": "Анализ Лог Файлов",
            "description": "Парсинг и анализ лог файлов для получения инсайтов и паттернов",
            "command": "gemini \"Проанализировать этот Apache лог файл и суммировать паттерны трафика\""
          }
        ]
      },
      {
        "title": "Примеры Документации",
        "description": "Генерация комплексной документации и технического письма",
        "examples": [
          {
            "title": "API Документация",
            "description": "Генерация полной API документации из кода",
            "command": "gemini \"Сгенерировать OpenAPI документацию для этого Express.js API\""
          },
          {
            "title": "Генерация README",
            "description": "Создание детальных README файлов для проектов",
            "command": "gemini \"Создать комплексный README для этого Python проекта\""
          }
        ]
      }
    ],
    "tips": {
      "title": "Профессиональные Советы для Лучших Результатов",
      "items": [
        {
          "title": "Будьте Конкретными",
          "description": "Предоставляйте четкие, детальные промпты с контекстом и требованиями для лучших ответов ИИ."
        },
        {
          "title": "Используйте Примеры",
          "description": "Включайте примеры в ваши промпты, чтобы направить ИИ к желаемому формату вывода."
        },
        {
          "title": "Итерируйте и Улучшайте",
          "description": "Начинайте с базовых промптов и улучшайте их на основе получаемых результатов."
        },
        {
          "title": "Контекст Важен",
          "description": "Предоставляйте релевантный контекст о вашем проекте, технологическом стеке и ограничениях."
        }
      ]
    },
    "cta": {
      "title": "Готовы Попробовать Эти Примеры?",
      "description": "Начните экспериментировать с этими практическими примерами и откройте, как Gemini CLI может ускорить ваш рабочий процесс разработки.",
      "allGuides": "Все Руководства",
      "advancedGuides": "Продвинутые Руководства"
    }
  }
};

// Function to apply Examples translations
function applyExamplesTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = examplesTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No Examples translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesExamples with professional translation
    data.guidesExamples = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied Examples translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const examples = newData.guidesExamples;
    console.log(`   - Title: "${examples?.title || 'N/A'}"`);
    console.log(`   - Categories: ${examples?.categories?.length || 0}`);
    console.log(`   - Tips: ${examples?.tips?.items?.length || 0}`);
    console.log(`   - Total examples: ${examples?.categories?.reduce((sum, cat) => sum + (cat.examples?.length || 0), 0) || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying Examples translations for ${langCode}:`, error.message);
  }
}

// Apply Examples translations
console.log('🚀 Applying professional Examples translations...\n');

Object.keys(examplesTranslations).forEach(langCode => {
  const langNames = {
    hi: 'Hindi',
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying Examples translations for ${langNames[langCode]}...`);
  applyExamplesTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional Examples translations applied!');
console.log('🎯 All 7 languages now have complete professional content.');
