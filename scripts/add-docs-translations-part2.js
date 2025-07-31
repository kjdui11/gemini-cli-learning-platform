const fs = require('fs');
const path = require('path');

// Additional Docs translations for German, Japanese, Korean
const additionalTranslations = {
  de: {
    title: 'Entwicklerdokumentation',
    subtitle: 'Tauchen Sie tief in die technischen Details von Gemini CLI ein, lernen Sie, wie Sie Funktionen erweitern, das MCP-Protokoll integrieren und zum Open-Source-Projekt beitragen.',
    quickNav: {
      title: 'Schnellnavigation',
      subtitle: 'Schneller Zugriff auf häufig verwendete Entwicklungsressourcen',
      links: [
        {
          title: 'GitHub Repository',
          description: 'Quellcode anzeigen und Probleme einreichen',
          href: 'https://github.com/google-gemini/gemini-cli',
          external: true
        },
        {
          title: 'API-Referenz',
          description: 'Vollständige API-Dokumentation',
          href: '/docs/api-reference',
          external: false
        },
        {
          title: 'Code-Beispiele',
          description: 'Praktische Code-Beispiele und Vorlagen',
          href: '/docs/examples',
          external: false
        },
        {
          title: 'Änderungsprotokoll',
          description: 'Versionsupdates und Änderungsaufzeichnungen',
          href: '/docs/changelog',
          external: false
        }
      ]
    },
    techSpecs: {
      title: 'Technische Spezifikationen',
      subtitle: 'Erfahren Sie mehr über die technischen Funktionen und den Unterstützungsbereich von Gemini CLI',
      categories: [
        {
          category: 'Unterstützte Sprachen',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
        },
        {
          category: 'Plattformunterstützung',
          items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
        },
        {
          category: 'Integrationsmethoden',
          items: ['Befehlszeilenschnittstelle', 'Node.js API', 'REST API', 'WebSocket', 'MCP-Protokoll']
        },
        {
          category: 'Erweiterungstypen',
          items: ['Sprachunterstützung', 'Tool-Integration', 'Benutzerdefinierte Befehle', 'UI-Erweiterungen', 'MCP-Server']
        }
      ]
    },
    docSections: {
      title: 'Dokumentationskategorien',
      subtitle: 'Detaillierte technische Dokumentation nach Themen organisiert',
      sections: [
        {
          id: 'getting-started',
          title: 'Erste Schritte',
          description: 'Entwickler-Onboarding-Leitfaden und Umgebungseinrichtung',
          color: 'from-green-500 to-emerald-600',
          articles: [
            {
              title: 'Entwicklungsumgebung einrichten',
              description: 'Lokale Entwicklungsumgebung und Abhängigkeiten konfigurieren',
              href: '/docs/development-setup',
              tags: ['Umgebung', 'Abhängigkeiten']
            },
            {
              title: 'Projektstruktur',
              description: 'Verstehen Sie die Code-Organisationsstruktur von Gemini CLI',
              href: '/docs/project-structure',
              tags: ['Architektur', 'Organisation']
            },
            {
              title: 'Erstellen und Testen',
              description: 'Lokaler Build-, Test- und Debugging-Workflow',
              href: '/docs/build-and-test',
              tags: ['Build', 'Testen', 'Debug']
            }
          ]
        },
        {
          id: 'api-reference',
          title: 'API-Referenz',
          description: 'Detaillierte API-Dokumentation und Schnittstellenbeschreibungen',
          color: 'from-blue-500 to-indigo-600',
          articles: [
            {
              title: 'Core API',
              description: 'Kern-API-Schnittstellen und Methodenbeschreibungen',
              href: '/docs/core-api',
              tags: ['API', 'Kern']
            },
            {
              title: 'Plugin API',
              description: 'Plugin-Entwicklungs-API und Erweiterungsschnittstellen',
              href: '/docs/plugin-api',
              tags: ['Plugin', 'Erweiterung']
            },
            {
              title: 'Konfigurations-API',
              description: 'Konfigurationsverwaltungs-API und Optionsbeschreibungen',
              href: '/docs/config-api',
              tags: ['Konfiguration', 'Einstellungen']
            }
          ]
        },
        {
          id: 'mcp-protocol',
          title: 'MCP-Protokoll',
          description: 'Model Context Protocol Integrationsleitfaden',
          color: 'from-purple-500 to-pink-600',
          articles: [
            {
              title: 'MCP-Protokoll-Einführung',
              description: 'Lernen Sie die Grundkonzepte des Model Context Protocol',
              href: '/docs/mcp-introduction',
              tags: ['MCP', 'Protokoll']
            },
            {
              title: 'MCP-Server implementieren',
              description: 'Vollständiger Leitfaden zur Erstellung benutzerdefinierter MCP-Server',
              href: '/docs/mcp-server',
              tags: ['MCP', 'Server', 'Implementierung']
            },
            {
              title: 'MCP-Client-Integration',
              description: 'MCP-Client-Funktionalität in Anwendungen integrieren',
              href: '/docs/mcp-client',
              tags: ['MCP', 'Client', 'Integration']
            }
          ]
        },
        {
          id: 'extensions',
          title: 'Erweiterungsentwicklung',
          description: 'Benutzerdefinierte Erweiterungen und Plugins erstellen',
          color: 'from-orange-500 to-red-600',
          articles: [
            {
              title: 'Erweiterungsarchitektur',
              description: 'Verstehen Sie das Design und die Architektur des Erweiterungssystems',
              href: '/docs/extension-architecture',
              tags: ['Erweiterung', 'Architektur']
            },
            {
              title: 'Ihre erste Erweiterung erstellen',
              description: 'Benutzerdefinierte Erweiterungen von Grund auf erstellen',
              href: '/docs/first-extension',
              tags: ['Erweiterung', 'Tutorial']
            },
            {
              title: 'Erweiterungs-Veröffentlichungsleitfaden',
              description: 'Best Practices für das Verpacken und Veröffentlichen von Erweiterungen',
              href: '/docs/extension-publishing',
              tags: ['Erweiterung', 'Veröffentlichung']
            }
          ]
        },
        {
          id: 'contributing',
          title: 'Beitragsleitfaden',
          description: 'An der Projektentwicklung und dem Community-Beitrag teilnehmen',
          color: 'from-teal-500 to-cyan-600',
          articles: [
            {
              title: 'Beitragsprozess',
              description: 'Lernen Sie, wie Sie zum Projekt beitragen',
              href: '/docs/contributing-guide',
              tags: ['Beitrag', 'Prozess']
            },
            {
              title: 'Coding-Standards',
              description: 'Code-Stil und Qualitätsstandards',
              href: '/docs/coding-standards',
              tags: ['Standards', 'Qualität']
            },
            {
              title: 'Pull Request Leitfaden',
              description: 'Best Practices für das Erstellen und Einreichen von Pull Requests',
              href: '/docs/pull-request-guide',
              tags: ['PR', 'Best Practices']
            }
          ]
        }
      ]
    },
    community: {
      title: 'Community & Support',
      subtitle: 'Treten Sie der Entwickler-Community bei, erhalten Sie Hilfe und teilen Sie Erfahrungen',
      joinDiscussion: 'An Diskussion teilnehmen',
      reportIssue: 'Problem melden',
      contribute: 'Code beitragen'
    }
  },
  ja: {
    title: '開発者ドキュメント',
    subtitle: 'Gemini CLIの技術的詳細を深く理解し、機能の拡張、MCPプロトコルの統合、オープンソースプロジェクトへの貢献方法を学びます。',
    quickNav: {
      title: 'クイックナビゲーション',
      subtitle: 'よく使用される開発リソースへの迅速なアクセス',
      links: [
        {
          title: 'GitHubリポジトリ',
          description: 'ソースコードを表示し、問題を報告',
          href: 'https://github.com/google-gemini/gemini-cli',
          external: true
        },
        {
          title: 'APIリファレンス',
          description: '完全なAPIドキュメント',
          href: '/docs/api-reference',
          external: false
        },
        {
          title: 'コード例',
          description: '実用的なコード例とテンプレート',
          href: '/docs/examples',
          external: false
        },
        {
          title: '変更履歴',
          description: 'バージョン更新と変更記録',
          href: '/docs/changelog',
          external: false
        }
      ]
    },
    techSpecs: {
      title: '技術仕様',
      subtitle: 'Gemini CLIの技術的機能とサポート範囲について学ぶ',
      categories: [
        {
          category: 'サポート言語',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
        },
        {
          category: 'プラットフォームサポート',
          items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
        },
        {
          category: '統合方法',
          items: ['コマンドラインインターフェース', 'Node.js API', 'REST API', 'WebSocket', 'MCPプロトコル']
        },
        {
          category: '拡張タイプ',
          items: ['言語サポート', 'ツール統合', 'カスタムコマンド', 'UI拡張', 'MCPサーバー']
        }
      ]
    },
    docSections: {
      title: 'ドキュメントカテゴリ',
      subtitle: 'トピック別に整理された詳細な技術ドキュメント',
      sections: [
        {
          id: 'getting-started',
          title: '始める',
          description: '開発者オンボーディングガイドと環境セットアップ',
          color: 'from-green-500 to-emerald-600',
          articles: [
            {
              title: '開発環境セットアップ',
              description: 'ローカル開発環境と依存関係を設定',
              href: '/docs/development-setup',
              tags: ['環境', '依存関係']
            },
            {
              title: 'プロジェクト構造',
              description: 'Gemini CLIのコード組織構造を理解',
              href: '/docs/project-structure',
              tags: ['アーキテクチャ', '組織']
            },
            {
              title: 'ビルドとテスト',
              description: 'ローカルビルド、テスト、デバッグワークフロー',
              href: '/docs/build-and-test',
              tags: ['ビルド', 'テスト', 'デバッグ']
            }
          ]
        },
        {
          id: 'api-reference',
          title: 'APIリファレンス',
          description: '詳細なAPIドキュメントとインターフェース説明',
          color: 'from-blue-500 to-indigo-600',
          articles: [
            {
              title: 'Core API',
              description: 'コアAPIインターフェースとメソッド説明',
              href: '/docs/core-api',
              tags: ['API', 'コア']
            },
            {
              title: 'Plugin API',
              description: 'プラグイン開発APIと拡張インターフェース',
              href: '/docs/plugin-api',
              tags: ['プラグイン', '拡張']
            },
            {
              title: 'Configuration API',
              description: '設定管理APIとオプション説明',
              href: '/docs/config-api',
              tags: ['設定', '構成']
            }
          ]
        },
        {
          id: 'mcp-protocol',
          title: 'MCPプロトコル',
          description: 'Model Context Protocol統合ガイド',
          color: 'from-purple-500 to-pink-600',
          articles: [
            {
              title: 'MCPプロトコル紹介',
              description: 'Model Context Protocolの基本概念を学ぶ',
              href: '/docs/mcp-introduction',
              tags: ['MCP', 'プロトコル']
            },
            {
              title: 'MCPサーバー実装',
              description: 'カスタムMCPサーバー作成の完全ガイド',
              href: '/docs/mcp-server',
              tags: ['MCP', 'サーバー', '実装']
            },
            {
              title: 'MCPクライアント統合',
              description: 'アプリケーションにMCPクライアント機能を統合',
              href: '/docs/mcp-client',
              tags: ['MCP', 'クライアント', '統合']
            }
          ]
        },
        {
          id: 'extensions',
          title: '拡張開発',
          description: 'カスタム拡張とプラグインを作成',
          color: 'from-orange-500 to-red-600',
          articles: [
            {
              title: '拡張アーキテクチャ',
              description: '拡張システムの設計とアーキテクチャを理解',
              href: '/docs/extension-architecture',
              tags: ['拡張', 'アーキテクチャ']
            },
            {
              title: '最初の拡張を作成',
              description: 'ゼロからカスタム拡張を構築',
              href: '/docs/first-extension',
              tags: ['拡張', 'チュートリアル']
            },
            {
              title: '拡張公開ガイド',
              description: '拡張のパッケージ化と公開のベストプラクティス',
              href: '/docs/extension-publishing',
              tags: ['拡張', '公開']
            }
          ]
        },
        {
          id: 'contributing',
          title: '貢献ガイド',
          description: 'プロジェクト開発とコミュニティ貢献に参加',
          color: 'from-teal-500 to-cyan-600',
          articles: [
            {
              title: '貢献プロセス',
              description: 'プロジェクトへの貢献方法を学ぶ',
              href: '/docs/contributing-guide',
              tags: ['貢献', 'プロセス']
            },
            {
              title: 'コーディング標準',
              description: 'コードスタイルと品質標準',
              href: '/docs/coding-standards',
              tags: ['標準', '品質']
            },
            {
              title: 'Pull Requestガイド',
              description: 'Pull Requestの作成と提出のベストプラクティス',
              href: '/docs/pull-request-guide',
              tags: ['PR', 'ベストプラクティス']
            }
          ]
        }
      ]
    },
    community: {
      title: 'コミュニティ＆サポート',
      subtitle: '開発者コミュニティに参加し、ヘルプを得て経験を共有',
      joinDiscussion: 'ディスカッションに参加',
      reportIssue: '問題を報告',
      contribute: 'コードに貢献'
    }
  },
  ko: {
    title: '개발자 문서',
    subtitle: 'Gemini CLI의 기술적 세부사항을 깊이 이해하고, 기능 확장, MCP 프로토콜 통합, 오픈소스 프로젝트 기여 방법을 배우세요.',
    quickNav: {
      title: '빠른 탐색',
      subtitle: '자주 사용되는 개발 리소스에 빠르게 접근',
      links: [
        {
          title: 'GitHub 저장소',
          description: '소스 코드 보기 및 문제 제출',
          href: 'https://github.com/google-gemini/gemini-cli',
          external: true
        },
        {
          title: 'API 참조',
          description: '완전한 API 문서',
          href: '/docs/api-reference',
          external: false
        },
        {
          title: '코드 예제',
          description: '실용적인 코드 예제와 템플릿',
          href: '/docs/examples',
          external: false
        },
        {
          title: '변경 로그',
          description: '버전 업데이트 및 변경 기록',
          href: '/docs/changelog',
          external: false
        }
      ]
    },
    techSpecs: {
      title: '기술 사양',
      subtitle: 'Gemini CLI의 기술적 기능과 지원 범위에 대해 알아보기',
      categories: [
        {
          category: '지원 언어',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby']
        },
        {
          category: '플랫폼 지원',
          items: ['Windows 10+', 'macOS 10.15+', 'Linux (Ubuntu 18.04+)', 'Docker']
        },
        {
          category: '통합 방법',
          items: ['명령줄 인터페이스', 'Node.js API', 'REST API', 'WebSocket', 'MCP 프로토콜']
        },
        {
          category: '확장 유형',
          items: ['언어 지원', '도구 통합', '사용자 정의 명령', 'UI 확장', 'MCP 서버']
        }
      ]
    },
    docSections: {
      title: '문서 카테고리',
      subtitle: '주제별로 정리된 상세한 기술 문서',
      sections: [
        {
          id: 'getting-started',
          title: '시작하기',
          description: '개발자 온보딩 가이드 및 환경 설정',
          color: 'from-green-500 to-emerald-600',
          articles: [
            {
              title: '개발 환경 설정',
              description: '로컬 개발 환경 및 종속성 구성',
              href: '/docs/development-setup',
              tags: ['환경', '종속성']
            },
            {
              title: '프로젝트 구조',
              description: 'Gemini CLI 코드 조직 구조 이해',
              href: '/docs/project-structure',
              tags: ['아키텍처', '조직']
            },
            {
              title: '빌드 및 테스트',
              description: '로컬 빌드, 테스트 및 디버깅 워크플로우',
              href: '/docs/build-and-test',
              tags: ['빌드', '테스트', '디버그']
            }
          ]
        },
        {
          id: 'api-reference',
          title: 'API 참조',
          description: '상세한 API 문서 및 인터페이스 설명',
          color: 'from-blue-500 to-indigo-600',
          articles: [
            {
              title: 'Core API',
              description: '핵심 API 인터페이스 및 메서드 설명',
              href: '/docs/core-api',
              tags: ['API', '핵심']
            },
            {
              title: 'Plugin API',
              description: '플러그인 개발 API 및 확장 인터페이스',
              href: '/docs/plugin-api',
              tags: ['플러그인', '확장']
            },
            {
              title: 'Configuration API',
              description: '구성 관리 API 및 옵션 설명',
              href: '/docs/config-api',
              tags: ['구성', '설정']
            }
          ]
        },
        {
          id: 'mcp-protocol',
          title: 'MCP 프로토콜',
          description: 'Model Context Protocol 통합 가이드',
          color: 'from-purple-500 to-pink-600',
          articles: [
            {
              title: 'MCP 프로토콜 소개',
              description: 'Model Context Protocol의 기본 개념 학습',
              href: '/docs/mcp-introduction',
              tags: ['MCP', '프로토콜']
            },
            {
              title: 'MCP 서버 구현',
              description: '사용자 정의 MCP 서버 생성을 위한 완전한 가이드',
              href: '/docs/mcp-server',
              tags: ['MCP', '서버', '구현']
            },
            {
              title: 'MCP 클라이언트 통합',
              description: '애플리케이션에 MCP 클라이언트 기능 통합',
              href: '/docs/mcp-client',
              tags: ['MCP', '클라이언트', '통합']
            }
          ]
        },
        {
          id: 'extensions',
          title: '확장 개발',
          description: '사용자 정의 확장 및 플러그인 생성',
          color: 'from-orange-500 to-red-600',
          articles: [
            {
              title: '확장 아키텍처',
              description: '확장 시스템 설계 및 아키텍처 이해',
              href: '/docs/extension-architecture',
              tags: ['확장', '아키텍처']
            },
            {
              title: '첫 번째 확장 만들기',
              description: '처음부터 사용자 정의 확장 구축',
              href: '/docs/first-extension',
              tags: ['확장', '튜토리얼']
            },
            {
              title: '확장 게시 가이드',
              description: '확장 패키징 및 게시를 위한 모범 사례',
              href: '/docs/extension-publishing',
              tags: ['확장', '게시']
            }
          ]
        },
        {
          id: 'contributing',
          title: '기여 가이드',
          description: '프로젝트 개발 및 커뮤니티 기여에 참여',
          color: 'from-teal-500 to-cyan-600',
          articles: [
            {
              title: '기여 프로세스',
              description: '프로젝트에 기여하는 방법 학습',
              href: '/docs/contributing-guide',
              tags: ['기여', '프로세스']
            },
            {
              title: '코딩 표준',
              description: '코드 스타일 및 품질 표준',
              href: '/docs/coding-standards',
              tags: ['표준', '품질']
            },
            {
              title: 'Pull Request 가이드',
              description: 'Pull Request 생성 및 제출을 위한 모범 사례',
              href: '/docs/pull-request-guide',
              tags: ['PR', '모범 사례']
            }
          ]
        }
      ]
    },
    community: {
      title: '커뮤니티 및 지원',
      subtitle: '개발자 커뮤니티에 참여하고, 도움을 받고 경험을 공유하세요',
      joinDiscussion: '토론 참여',
      reportIssue: '문제 신고',
      contribute: '코드 기여'
    }
  }
};

// Function to add translations to DocsContent component
function addDocsTranslations() {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'pages', 'DocsContent.tsx');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the position to insert new translations (before the closing bracket of translations object)
    const insertPosition = content.lastIndexOf('    }\n    return translations[locale] || translations.en');
    
    if (insertPosition === -1) {
      console.error('❌ Could not find insertion point in DocsContent.tsx');
      return;
    }
    
    // Generate translation strings for each language
    let translationStrings = '';
    
    Object.keys(additionalTranslations).forEach(langCode => {
      const translation = additionalTranslations[langCode];
      translationStrings += `,\n      ${langCode}: ${JSON.stringify(translation, null, 8).replace(/^/gm, '      ').trim()}`;
    });
    
    // Insert the new translations
    const beforeInsert = content.substring(0, insertPosition);
    const afterInsert = content.substring(insertPosition);
    
    const newContent = beforeInsert + translationStrings + '\n' + afterInsert;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('✅ Successfully added German, Japanese, and Korean Docs translations');
    
  } catch (error) {
    console.error('❌ Error adding Docs translations:', error.message);
  }
}

// Run the function
console.log('🚀 Adding Docs translations for German, Japanese, and Korean...\n');
addDocsTranslations();
console.log('\n🎯 Docs translations update completed!');
