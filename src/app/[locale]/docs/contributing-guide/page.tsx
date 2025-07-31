import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  HandRaisedIcon, 
  CodeBracketIcon, 
  CheckCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BugAntIcon,
  ClipboardDocumentListIcon,
  CommandLineIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '贡献指南 - Gemini CLI 文档',
    en: 'Contributing Guide - Gemini CLI Documentation',
    hi: 'योगदान गाइड - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Guide de Contribution - Documentation Gemini CLI',
    de: 'Beitragsleitfaden - Gemini CLI Dokumentation',
    ja: '貢献ガイド - Gemini CLI ドキュメント',
    ko: '기여 가이드 - Gemini CLI 문서',
    es: 'Guía de Contribución - Documentación Gemini CLI',
    ru: 'Руководство по участию - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '如何为 Gemini CLI 项目做出贡献的完整指南，包括代码贡献、文档改进、问题报告和社区参与。',
    en: 'Complete guide on how to contribute to the Gemini CLI project, including code contributions, documentation improvements, issue reporting, and community participation.',
    hi: 'कोड योगदान, दस्तावेज़ीकरण सुधार, समस्या रिपोर्टिंग और सामुदायिक भागीदारी सहित Gemini CLI प्रोजेक्ट में योगदान करने के लिए पूर्ण गाइड।',
    fr: 'Guide complet sur la façon de contribuer au projet Gemini CLI, y compris les contributions de code, les améliorations de documentation, les rapports de problèmes et la participation communautaire.',
    de: 'Vollständiger Leitfaden zur Mitwirkung am Gemini CLI-Projekt, einschließlich Code-Beiträgen, Dokumentationsverbesserungen, Problemberichten und Community-Beteiligung.',
    ja: 'コード貢献、ドキュメント改善、問題報告、コミュニティ参加を含む、Gemini CLI プロジェクトへの貢献方法の完全ガイド。',
    ko: '코드 기여, 문서 개선, 문제 보고 및 커뮤니티 참여를 포함한 Gemini CLI 프로젝트에 기여하는 방법에 대한 완전한 가이드.',
    es: 'Guía completa sobre cómo contribuir al proyecto Gemini CLI, incluyendo contribuciones de código, mejoras de documentación, informes de problemas y participación comunitaria.',
    ru: 'Полное руководство по участию в проекте Gemini CLI, включая вклад в код, улучшение документации, отчеты о проблемах и участие в сообществе.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? '贡献指南, Gemini CLI 贡献, 开源贡献, 代码贡献, 社区参与' : 'contributing guide, Gemini CLI contribution, open source contribution, code contribution, community participation',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const prGuidelines = [
  {
    step: 1,
    title: {
      zh: '链接到现有 Issue',
      en: 'Link to an Existing Issue',
      hi: 'मौजूदा Issue से लिंक करें',
      fr: 'Lier à un Issue Existant',
      de: 'Mit einem bestehenden Issue verknüpfen',
      ja: '既存のIssueにリンク',
      ko: '기존 Issue에 링크',
      es: 'Enlazar a un Issue Existente',
      ru: 'Связать с существующим Issue'
    },
    description: {
      zh: '所有 PR 都应该链接到现有的 Issue。对于 Bug 修复，链接到 Bug 报告。对于功能，链接到已批准的功能请求。',
      en: 'All PRs should be linked to an existing issue. For bug fixes, link to the bug report. For features, link to an approved feature request.',
      hi: 'सभी PR को मौजूदा issue से लिंक किया जाना चाहिए। बग फिक्स के लिए, बग रिपोर्ट से लिंक करें। फीचर्स के लिए, अनुमोदित फीचर अनुरोध से लिंक करें।'
    },
    icon: ClipboardDocumentListIcon
  },
  {
    step: 2,
    title: {
      zh: '保持小而专注',
      en: 'Keep It Small and Focused',
      hi: 'छोटा और केंद्रित रखें',
      fr: 'Gardez-le Petit et Ciblé',
      de: 'Klein und fokussiert halten',
      ja: '小さく集中的に保つ',
      ko: '작고 집중적으로 유지',
      es: 'Manténlo Pequeño y Enfocado',
      ru: 'Держите маленьким и сфокусированным'
    },
    description: {
      zh: '创建小的、原子性的 PR，解决单个问题。不要将多个不相关的更改捆绑在一起。',
      en: 'Create small, atomic PRs that address a single issue. Don\'t bundle multiple unrelated changes.',
      hi: 'छोटे, परमाणु PR बनाएं जो एक ही समस्या को संबोधित करते हैं। कई असंबंधित परिवर्तनों को एक साथ न बांधें।'
    },
    icon: CheckCircleIcon
  },
  {
    step: 3,
    title: {
      zh: '使用草稿 PR 进行进展中的工作',
      en: 'Use Draft PRs for Work in Progress',
      hi: 'Work in Progress के लिए Draft PR का उपयोग करें',
      fr: 'Utilisez les PR Brouillons pour le Travail en Cours',
      de: 'Verwenden Sie Entwurfs-PRs für laufende Arbeiten',
      ja: '進行中の作業にはドラフトPRを使用',
      ko: '진행 중인 작업에 대해 초안 PR 사용',
      es: 'Usa PR Borrador para Trabajo en Progreso',
      ru: 'Используйте черновые PR для работы в процессе'
    },
    description: {
      zh: '使用 GitHub 的草稿 Pull Request 功能在正式审查前获得早期反馈。',
      en: 'Use GitHub\'s Draft Pull Request feature for early feedback before formal review.',
      hi: 'औपचारिक समीक्षा से पहले प्रारंभिक फीडबैक के लिए GitHub की Draft Pull Request सुविधा का उपयोग करें।'
    },
    icon: DocumentTextIcon
  },
  {
    step: 4,
    title: {
      zh: '确保所有检查通过',
      en: 'Ensure All Checks Pass',
      hi: 'सुनिश्चित करें कि सभी Checks Pass हों',
      fr: 'Assurez-vous que Toutes les Vérifications Passent',
      de: 'Stellen Sie sicher, dass alle Prüfungen bestehen',
      ja: 'すべてのチェックが通ることを確認',
      ko: '모든 검사가 통과하는지 확인',
      es: 'Asegúrate de que Todas las Verificaciones Pasen',
      ru: 'Убедитесь, что все проверки проходят'
    },
    description: {
      zh: '提交前运行 npm run preflight 确保所有测试、代码检查和样式检查通过。',
      en: 'Run npm run preflight before submitting to ensure all tests, linting, and style checks pass.',
      hi: 'सबमिट करने से पहले npm run preflight चलाएं ताकि सभी टेस्ट, लिंटिंग, और स्टाइल चेक पास हों।'
    },
    icon: ExclamationTriangleIcon
  },
  {
    step: 5,
    title: {
      zh: '更新文档',
      en: 'Update Documentation',
      hi: 'दस्तावेज़ीकरण अपडेट करें',
      fr: 'Mettre à Jour la Documentation',
      de: 'Dokumentation aktualisieren',
      ja: 'ドキュメントを更新',
      ko: '문서 업데이트',
      es: 'Actualizar Documentación',
      ru: 'Обновить документацию'
    },
    description: {
      zh: '如果您的 PR 引入了面向用户的更改，请更新 /docs 目录中的相关文档。',
      en: 'If your PR introduces user-facing changes, update the relevant documentation in the /docs directory.',
      hi: 'यदि आपका PR उपयोगकर्ता-सामना करने वाले परिवर्तन पेश करता है, तो /docs निर्देशिका में संबंधित दस्तावेज़ीकरण को अपडेट करें।'
    },
    icon: DocumentTextIcon
  },
  {
    step: 6,
    title: {
      zh: '编写清晰的提交消息',
      en: 'Write Clear Commit Messages',
      hi: 'स्पष्ट Commit Messages लिखें',
      fr: 'Écrire des Messages de Commit Clairs',
      de: 'Klare Commit-Nachrichten schreiben',
      ja: '明確なコミットメッセージを書く',
      ko: '명확한 커밋 메시지 작성',
      es: 'Escribir Mensajes de Commit Claros',
      ru: 'Писать четкие сообщения коммитов'
    },
    description: {
      zh: '遵循约定式提交标准编写提交消息和 PR 描述。',
      en: 'Follow Conventional Commits standard for your commit messages and PR descriptions.',
      hi: 'अपने कमिट संदेशों और PR विवरणों के लिए Conventional Commits मानक का पालन करें।'
    },
    icon: CodeBracketIcon
  }
]

const developmentSteps = [
  {
    step: 1,
    title: {
      zh: '先决条件',
      en: 'Prerequisites',
      hi: 'पूर्वापेक्षाएं',
      fr: 'Prérequis',
      de: 'Voraussetzungen',
      ja: '前提条件',
      ko: '전제 조건',
      es: 'Prerrequisitos',
      ru: 'Предварительные требования'
    },
    description: {
      zh: '设置您的开发环境',
      en: 'Set up your development environment',
      hi: 'अपना विकास वातावरण सेट करें'
    },
    commands: [
      '# Install Node.js ~20.19.0 (required for development)',
      '# Use nvm to manage Node.js versions',
      'nvm install 20.19.0',
      'nvm use 20.19.0'
    ]
  },
  {
    step: 2,
    title: {
      zh: '克隆和设置',
      en: 'Clone and Setup',
      hi: 'क्लोन और सेटअप'
    },
    description: {
      zh: '获取源代码并安装依赖',
      en: 'Get the source code and install dependencies',
      hi: 'स्रोत कोड प्राप्त करें और निर्भरताएं स्थापित करें'
    },
    commands: [
      'git clone https://github.com/google-gemini/gemini-cli.git',
      'cd gemini-cli',
      'npm install',
      'npm run build'
    ]
  },
  {
    step: 3,
    title: {
      zh: '启用沙箱（可选）',
      en: 'Enable Sandboxing (Optional)',
      hi: 'सैंडबॉक्सिंग सक्षम करें (वैकल्पिक)'
    },
    description: {
      zh: '设置沙箱以增强安全性',
      en: 'Set up sandboxing for enhanced security',
      hi: 'बेहतर सुरक्षा के लिए सैंडबॉक्सिंग सेट करें'
    },
    commands: [
      '# Add to your ~/.env file',
      'echo "GEMINI_SANDBOX=true" >> ~/.env',
      '# Build with sandbox container',
      'npm run build:all'
    ]
  },
  {
    step: 4,
    title: {
      zh: '运行和测试',
      en: 'Run and Test',
      hi: 'चलाएं और टेस्ट करें'
    },
    description: {
      zh: '启动 CLI 并运行测试',
      en: 'Start the CLI and run tests',
      hi: 'CLI शुरू करें और टेस्ट चलाएं'
    },
    commands: [
      '# Start Gemini CLI from source',
      'npm start',
      '# Run all tests',
      'npm run test',
      '# Run integration tests',
      'npm run test:e2e'
    ]
  },
  {
    step: 5,
    title: {
      zh: '质量检查',
      en: 'Quality Checks',
      hi: 'गुणवत्ता जांच'
    },
    description: {
      zh: '提交前确保代码质量',
      en: 'Ensure code quality before submitting',
      hi: 'सबमिट करने से पहले कोड गुणवत्ता सुनिश्चित करें'
    },
    commands: [
      '# Run all quality checks',
      'npm run preflight',
      '# Format code',
      'npm run format',
      '# Lint code',
      'npm run lint'
    ]
  }
]

const contributionTypes = [
  {
    type: {
      zh: '代码贡献',
      en: 'Code Contributions',
      hi: 'कोड योगदान',
      fr: 'Contributions de Code',
      de: 'Code-Beiträge',
      ja: 'コード貢献',
      ko: '코드 기여',
      es: 'Contribuciones de Código',
      ru: 'Вклад в код'
    },
    description: {
      zh: '修复 Bug、添加功能、提升性能',
      en: 'Fix bugs, add features, improve performance',
      hi: 'बग ठीक करें, फीचर्स जोड़ें, प्रदर्शन में सुधार करें'
    },
    icon: CodeBracketIcon,
    examples: {
      zh: [
        'Bug 修复和补丁',
        '新的 CLI 命令',
        '性能优化',
        '代码重构',
        '测试改进',
        '错误处理增强'
      ],
      en: [
        'Bug fixes and patches',
        'New CLI commands',
        'Performance optimizations',
        'Code refactoring',
        'Test improvements',
        'Error handling enhancements'
      ],
      hi: [
        'बग फिक्स और पैच',
        'नए CLI कमांड',
        'प्रदर्शन अनुकूलन',
        'कोड रिफैक्टरिंग',
        'टेस्ट सुधार',
        'त्रुटि हैंडलिंग वृद्धि'
      ],
      fr: [
        'Corrections de bugs et correctifs',
        'Nouvelles commandes CLI',
        'Optimisations de performance',
        'Refactorisation de code',
        'Améliorations de tests',
        'Améliorations de gestion d\'erreurs'
      ],
      de: [
        'Bug-Fixes und Patches',
        'Neue CLI-Befehle',
        'Leistungsoptimierungen',
        'Code-Refactoring',
        'Test-Verbesserungen',
        'Verbesserungen der Fehlerbehandlung'
      ],
      ja: [
        'バグ修正とパッチ',
        '新しいCLIコマンド',
        'パフォーマンス最適化',
        'コードリファクタリング',
        'テスト改善',
        'エラーハンドリング強化'
      ],
      ko: [
        '버그 수정 및 패치',
        '새로운 CLI 명령',
        '성능 최적화',
        '코드 리팩토링',
        '테스트 개선',
        '오류 처리 향상'
      ],
      es: [
        'Correcciones de bugs y parches',
        'Nuevos comandos CLI',
        'Optimizaciones de rendimiento',
        'Refactorización de código',
        'Mejoras de pruebas',
        'Mejoras en manejo de errores'
      ],
      ru: [
        'Исправления багов и патчи',
        'Новые CLI команды',
        'Оптимизации производительности',
        'Рефакторинг кода',
        'Улучшения тестов',
        'Улучшения обработки ошибок'
      ]
    }
  },
  {
    type: {
      zh: '文档',
      en: 'Documentation',
      hi: 'दस्तावेज़ीकरण',
      fr: 'Documentation',
      de: 'Dokumentation',
      ja: 'ドキュメント',
      ko: '문서',
      es: 'Documentación',
      ru: 'Документация'
    },
    description: {
      zh: '改进文档、添加示例、创建教程',
      en: 'Improve docs, add examples, create tutorials',
      hi: 'दस्तावेज़ सुधारें, उदाहरण जोड़ें, ट्यूटोरियल बनाएं'
    },
    icon: DocumentTextIcon,
    examples: {
      zh: [
        '修复文档错误',
        '添加使用示例',
        '改进 API 文档',
        '创建教程和指南',
        '更新 README 文件',
        '添加代码注释'
      ],
      en: [
        'Fix documentation errors',
        'Add usage examples',
        'Improve API documentation',
        'Create tutorials and guides',
        'Update README files',
        'Add code comments'
      ],
      hi: [
        'दस्तावेज़ीकरण त्रुटियां ठीक करें',
        'उपयोग उदाहरण जोड़ें',
        'API दस्तावेज़ीकरण सुधारें',
        'ट्यूटोरियल और गाइड बनाएं',
        'README फाइलें अपडेट करें',
        'कोड टिप्पणियां जोड़ें'
      ],
      fr: [
        'Corriger les erreurs de documentation',
        'Ajouter des exemples d\'utilisation',
        'Améliorer la documentation API',
        'Créer des tutoriels et guides',
        'Mettre à jour les fichiers README',
        'Ajouter des commentaires de code'
      ],
      de: [
        'Dokumentationsfehler beheben',
        'Nutzungsbeispiele hinzufügen',
        'API-Dokumentation verbessern',
        'Tutorials und Leitfäden erstellen',
        'README-Dateien aktualisieren',
        'Code-Kommentare hinzufügen'
      ],
      ja: [
        'ドキュメントエラーの修正',
        '使用例の追加',
        'APIドキュメントの改善',
        'チュートリアルとガイドの作成',
        'READMEファイルの更新',
        'コードコメントの追加'
      ],
      ko: [
        '문서 오류 수정',
        '사용 예제 추가',
        'API 문서 개선',
        '튜토리얼 및 가이드 생성',
        'README 파일 업데이트',
        '코드 주석 추가'
      ],
      es: [
        'Corregir errores de documentación',
        'Agregar ejemplos de uso',
        'Mejorar documentación API',
        'Crear tutoriales y guías',
        'Actualizar archivos README',
        'Agregar comentarios de código'
      ],
      ru: [
        'Исправление ошибок документации',
        'Добавление примеров использования',
        'Улучшение API документации',
        'Создание руководств и гайдов',
        'Обновление README файлов',
        'Добавление комментариев к коду'
      ]
    }
  },
  {
    type: {
      zh: '问题报告',
      en: 'Issue Reporting',
      hi: 'Issue Reporting',
      fr: 'Signalement de Problèmes',
      de: 'Problem-Meldung',
      ja: '問題報告',
      ko: '문제 보고',
      es: 'Reporte de Problemas',
      ru: 'Отчеты о проблемах'
    },
    description: {
      zh: '报告 Bug、建议功能、提供反馈',
      en: 'Report bugs, suggest features, provide feedback',
      hi: 'बग रिपोर्ट करें, फीचर्स सुझाएं, फीडबैक प्रदान करें'
    },
    icon: BugAntIcon,
    examples: {
      zh: [
        '带有重现步骤的 Bug 报告',
        '功能请求和提案',
        '性能问题报告',
        '安全漏洞报告',
        '用户体验反馈',
        '兼容性问题'
      ],
      en: [
        'Bug reports with reproduction steps',
        'Feature requests and proposals',
        'Performance issue reports',
        'Security vulnerability reports',
        'User experience feedback',
        'Compatibility issues'
      ],
      hi: [
        'पुनरुत्पादन चरणों के साथ बग रिपोर्ट',
        'फीचर अनुरोध और प्रस्ताव',
        'प्रदर्शन समस्या रिपोर्ट',
        'सुरक्षा भेद्यता रिपोर्ट',
        'उपयोगकर्ता अनुभव फीडबैक',
        'संगतता समस्याएं'
      ],
      fr: [
        'Rapports de bugs avec étapes de reproduction',
        'Demandes de fonctionnalités et propositions',
        'Rapports de problèmes de performance',
        'Rapports de vulnérabilités de sécurité',
        'Commentaires sur l\'expérience utilisateur',
        'Problèmes de compatibilité'
      ],
      de: [
        'Bug-Berichte mit Reproduktionsschritten',
        'Feature-Anfragen und Vorschläge',
        'Leistungsproblem-Berichte',
        'Sicherheitslücken-Berichte',
        'Benutzererfahrungs-Feedback',
        'Kompatibilitätsprobleme'
      ],
      ja: [
        '再現手順付きのバグレポート',
        '機能リクエストと提案',
        'パフォーマンス問題レポート',
        'セキュリティ脆弱性レポート',
        'ユーザーエクスペリエンスフィードバック',
        '互換性問題'
      ],
      ko: [
        '재현 단계가 포함된 버그 보고서',
        '기능 요청 및 제안',
        '성능 문제 보고서',
        '보안 취약점 보고서',
        '사용자 경험 피드백',
        '호환성 문제'
      ],
      es: [
        'Reportes de bugs con pasos de reproducción',
        'Solicitudes de características y propuestas',
        'Reportes de problemas de rendimiento',
        'Reportes de vulnerabilidades de seguridad',
        'Retroalimentación de experiencia de usuario',
        'Problemas de compatibilidad'
      ],
      ru: [
        'Отчеты о багах с шагами воспроизведения',
        'Запросы функций и предложения',
        'Отчеты о проблемах производительности',
        'Отчеты об уязвимостях безопасности',
        'Отзывы о пользовательском опыте',
        'Проблемы совместимости'
      ]
    }
  },
  {
    type: {
      zh: '社区支持',
      en: 'Community Support',
      hi: 'Community Support',
      fr: 'Support Communautaire',
      de: 'Community-Unterstützung',
      ja: 'コミュニティサポート',
      ko: '커뮤니티 지원',
      es: 'Soporte Comunitario',
      ru: 'Поддержка сообщества'
    },
    description: {
      zh: '帮助用户、参与讨论',
      en: 'Help users, participate in discussions',
      hi: 'उपयोगकर्ताओं की सहायता करें, चर्चाओं में भाग लें'
    },
    icon: UserGroupIcon,
    examples: {
      zh: [
        '在 Issue 中回答问题',
        '帮助故障排除',
        '审查 Pull Request',
        '测试 Beta 版本',
        '分享使用示例',
        '指导新贡献者'
      ],
      en: [
        'Answer questions in issues',
        'Help with troubleshooting',
        'Review pull requests',
        'Test beta versions',
        'Share usage examples',
        'Mentor new contributors'
      ],
      hi: [
        'Issues में प्रश्नों का उत्तर दें',
        'समस्या निवारण में सहायता करें',
        'Pull requests की समीक्षा करें',
        'बीटा संस्करणों का परीक्षण करें',
        'उपयोग उदाहरण साझा करें',
        'नए योगदानकर्ताओं को मार्गदर्शन दें'
      ],
      fr: [
        'Répondre aux questions dans les issues',
        'Aider au dépannage',
        'Réviser les pull requests',
        'Tester les versions bêta',
        'Partager des exemples d\'utilisation',
        'Encadrer les nouveaux contributeurs'
      ],
      de: [
        'Fragen in Issues beantworten',
        'Bei der Fehlerbehebung helfen',
        'Pull Requests überprüfen',
        'Beta-Versionen testen',
        'Nutzungsbeispiele teilen',
        'Neue Mitwirkende betreuen'
      ],
      ja: [
        'Issueでの質問回答',
        'トラブルシューティングの支援',
        'Pull Requestのレビュー',
        'ベータ版のテスト',
        '使用例の共有',
        '新しい貢献者の指導'
      ],
      ko: [
        'Issue에서 질문 답변',
        '문제 해결 도움',
        'Pull Request 검토',
        '베타 버전 테스트',
        '사용 예제 공유',
        '새로운 기여자 멘토링'
      ],
      es: [
        'Responder preguntas en issues',
        'Ayudar con solución de problemas',
        'Revisar pull requests',
        'Probar versiones beta',
        'Compartir ejemplos de uso',
        'Mentorear nuevos contribuidores'
      ],
      ru: [
        'Отвечать на вопросы в issues',
        'Помогать с устранением неполадок',
        'Рецензировать pull requests',
        'Тестировать бета-версии',
        'Делиться примерами использования',
        'Наставлять новых участников'
      ]
    }
  }
]

export default async function ContributingGuidePage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  // Helper function to get localized text
  const getLocalizedText = (textObj: any) => textObj[locale as keyof typeof textObj] || textObj.en

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {locale === 'zh' ? '贡献指南' :
               locale === 'hi' ? 'योगदान गाइड' :
               locale === 'fr' ? 'Guide de Contribution' :
               locale === 'de' ? 'Beitragsleitfaden' :
               locale === 'ja' ? '貢献ガイド' :
               locale === 'ko' ? '기여 가이드' :
               locale === 'es' ? 'Guía de Contribución' :
               locale === 'ru' ? 'Руководство по участию' :
               'Contributing Guide'}
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              {locale === 'zh'
                ? '我们很乐意接受您对这个项目的补丁和贡献。了解如何开始并做出您的第一个贡献。'
                : locale === 'hi'
                ? 'हम इस प्रोजेक्ट में आपके patches और contributions को स्वीकार करने में खुश होंगे। जानें कि कैसे शुरुआत करें और अपना पहला contribution करें।'
                : locale === 'fr'
                ? 'Nous serions ravis d\'accepter vos correctifs et contributions à ce projet. Apprenez comment commencer et faire votre première contribution.'
                : locale === 'de'
                ? 'Wir würden uns freuen, Ihre Patches und Beiträge zu diesem Projekt zu akzeptieren. Erfahren Sie, wie Sie anfangen und Ihren ersten Beitrag leisten können.'
                : locale === 'ja'
                ? 'このプロジェクトへのパッチと貢献を喜んで受け入れます。始め方と最初の貢献の仕方を学びましょう。'
                : locale === 'ko'
                ? '이 프로젝트에 대한 패치와 기여를 기꺼이 받아들이겠습니다. 시작하는 방법과 첫 번째 기여를 하는 방법을 배워보세요.'
                : locale === 'es'
                ? 'Nos encantaría aceptar tus parches y contribuciones a este proyecto. Aprende cómo empezar y hacer tu primera contribución.'
                : locale === 'ru'
                ? 'Мы будем рады принять ваши патчи и вклад в этот проект. Узнайте, как начать и сделать свой первый вклад.'
                : 'We would love to accept your patches and contributions to this project. Learn how to get started and make your first contribution.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Before You Begin */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '开始之前' :
               locale === 'hi' ? 'शुरू करने से पहले' :
               locale === 'fr' ? 'Avant de Commencer' :
               locale === 'de' ? 'Bevor Sie Beginnen' :
               locale === 'ja' ? '始める前に' :
               locale === 'ko' ? '시작하기 전에' :
               locale === 'es' ? 'Antes de Comenzar' :
               locale === 'ru' ? 'Перед началом' :
               'Before You Begin'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '贡献前的重要要求' :
               locale === 'hi' ? 'योगदान से पहले महत्वपूर्ण आवश्यकताएं' :
               locale === 'fr' ? 'Exigences importantes avant de contribuer' :
               locale === 'de' ? 'Wichtige Anforderungen vor dem Beitragen' :
               locale === 'ja' ? '貢献前の重要な要件' :
               locale === 'ko' ? '기여하기 전의 중요한 요구사항' :
               locale === 'es' ? 'Requisitos importantes antes de contribuir' :
               locale === 'ru' ? 'Важные требования перед участием' :
               'Important requirements before contributing'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <HandRaisedIcon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {locale === 'zh' ? '签署 CLA' :
                   locale === 'hi' ? 'CLA साइन करें' :
                   'Sign the CLA'}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '贡献必须附有贡献者许可协议 (CLA)。您保留对贡献的版权。'
                  : locale === 'hi'
                  ? 'योगदान के साथ योगदानकर्ता लाइसेंस समझौता (CLA) होना चाहिए। आप अपने योगदान का कॉपीराइट बनाए रखते हैं।'
                  : 'Contributions must be accompanied by a Contributor License Agreement (CLA). You retain the copyright to your contribution.'
                }
              </p>
              <Link
                href="https://cla.developers.google.com/about"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh' ? '签署 CLA →' :
                 locale === 'hi' ? 'CLA साइन करें →' :
                 'Sign the CLA →'}
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {locale === 'zh' ? '社区指南' :
                   locale === 'hi' ? 'समुदायिक दिशानिर्देश' :
                   'Community Guidelines'}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '此项目遵循 Google 的开源社区指南。请在贡献前查看它们。'
                  : locale === 'hi'
                  ? 'यह प्रोजेक्ट Google के ओपन सोर्स समुदायिक दिशानिर्देशों का पालन करता है। योगदान से पहले कृपया उन्हें देखें।'
                  : 'This project follows Google\'s Open Source Community Guidelines. Please review them before contributing.'
                }
              </p>
              <Link
                href="https://opensource.google/conduct/"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh' ? '阅读指南 →' :
                 locale === 'hi' ? 'दिशानिर्देश पढ़ें →' :
                 'Read Guidelines →'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution Types */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '贡献方式' :
               locale === 'hi' ? 'योगदान के तरीके' :
               locale === 'fr' ? 'Façons de Contribuer' :
               locale === 'de' ? 'Möglichkeiten beizutragen' :
               locale === 'ja' ? '貢献方法' :
               locale === 'ko' ? '기여 방법' :
               locale === 'es' ? 'Formas de Contribuir' :
               locale === 'ru' ? 'Способы участия' :
               'Ways to Contribute'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '有很多方式可以为 Gemini CLI 项目做出贡献' :
               locale === 'hi' ? 'Gemini CLI प्रोजेक्ट में योगदान करने के कई तरीके हैं' :
               locale === 'fr' ? 'Il existe de nombreuses façons de contribuer au projet Gemini CLI' :
               locale === 'de' ? 'Es gibt viele Möglichkeiten, zum Gemini CLI-Projekt beizutragen' :
               locale === 'ja' ? 'Gemini CLIプロジェクトに貢献する方法はたくさんあります' :
               locale === 'ko' ? 'Gemini CLI 프로젝트에 기여할 수 있는 많은 방법이 있습니다' :
               locale === 'es' ? 'Hay muchas formas de contribuir al proyecto Gemini CLI' :
               locale === 'ru' ? 'Есть много способов внести вклад в проект Gemini CLI' :
               'There are many ways to contribute to the Gemini CLI project'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributionTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {getLocalizedText(type.type)}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {getLocalizedText(type.description)}
                </p>
                <ul className="space-y-2">
                  {getLocalizedText(type.examples).map((example: string, exIndex: number) => (
                    <li key={exIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pull Request Guidelines */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? 'Pull Request 指南' :
               locale === 'hi' ? 'Pull Request Guidelines' :
               locale === 'fr' ? 'Directives Pull Request' :
               locale === 'de' ? 'Pull Request Richtlinien' :
               locale === 'ja' ? 'Pull Requestガイドライン' :
               locale === 'ko' ? 'Pull Request 가이드라인' :
               locale === 'es' ? 'Pautas de Pull Request' :
               locale === 'ru' ? 'Руководящие принципы Pull Request' :
               'Pull Request Guidelines'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '遵循这些指南帮助我们快速审查和合并您的 PR' :
               locale === 'hi' ? 'इन guidelines का पालन करें ताकि हम आपके PR को जल्दी review और merge कर सकें' :
               locale === 'fr' ? 'Suivez ces directives pour nous aider à réviser et fusionner vos PR rapidement' :
               locale === 'de' ? 'Befolgen Sie diese Richtlinien, um uns zu helfen, Ihre PRs schnell zu überprüfen und zu mergen' :
               locale === 'ja' ? 'これらのガイドラインに従って、PRの迅速なレビューとマージにご協力ください' :
               locale === 'ko' ? '이 가이드라인을 따라 PR을 빠르게 검토하고 병합할 수 있도록 도와주세요' :
               locale === 'es' ? 'Sigue estas pautas para ayudarnos a revisar y fusionar tus PR rápidamente' :
               locale === 'ru' ? 'Следуйте этим руководящим принципам, чтобы помочь нам быстро рассмотреть и объединить ваши PR' :
               'Follow these guidelines to help us review and merge your PRs quickly'}
            </p>
          </div>

          <div className="space-y-6">
            {prGuidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                    {guideline.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <guideline.icon className="h-5 w-5 text-indigo-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {getLocalizedText(guideline.title)}
                      </h3>
                    </div>
                    <p className="text-gray-600">{getLocalizedText(guideline.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Setup */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '开发环境设置' :
               locale === 'hi' ? 'डेवलपमेंट एनवायरनमेंट सेटअप' :
               locale === 'fr' ? 'Configuration de l\'Environnement de Développement' :
               locale === 'de' ? 'Entwicklungsumgebung Einrichten' :
               locale === 'ja' ? '開発環境セットアップ' :
               locale === 'ko' ? '개발 환경 설정' :
               locale === 'es' ? 'Configuración del Entorno de Desarrollo' :
               locale === 'ru' ? 'Настройка среды разработки' :
               'Development Setup'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '设置开发环境的分步指南' :
               locale === 'hi' ? 'अपना डेवलपमेंट एनवायरनमेंट सेटअप करने के लिए चरणबद्ध गाइड' :
               locale === 'fr' ? 'Guide étape par étape pour configurer votre environnement de développement' :
               locale === 'de' ? 'Schritt-für-Schritt-Anleitung zur Einrichtung Ihrer Entwicklungsumgebung' :
               locale === 'ja' ? '開発環境をセットアップするためのステップバイステップガイド' :
               locale === 'ko' ? '개발 환경을 설정하기 위한 단계별 가이드' :
               locale === 'es' ? 'Guía paso a paso para configurar tu entorno de desarrollo' :
               locale === 'ru' ? 'Пошаговое руководство по настройке среды разработки' :
               'Step-by-step guide to set up your development environment'}
            </p>
          </div>

          <div className="space-y-8">
            {developmentSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {getLocalizedText(step.title)}
                    </h3>
                    <p className="text-gray-600 mb-4">{getLocalizedText(step.description)}</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm font-mono">
                        {step.commands.join('\n')}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Debugging and Testing */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '调试和测试' :
               locale === 'hi' ? 'डिबगिंग और टेस्टिंग' :
               locale === 'fr' ? 'Débogage et Tests' :
               locale === 'de' ? 'Debugging und Testen' :
               locale === 'ja' ? 'デバッグとテスト' :
               locale === 'ko' ? '디버깅 및 테스트' :
               locale === 'es' ? 'Depuración y Pruebas' :
               locale === 'ru' ? 'Отладка и тестирование' :
               'Debugging and Testing'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '调试和测试贡献的工具和技术' :
               locale === 'hi' ? 'आपके योगदान को डिबग और टेस्ट करने के लिए टूल्स और तकनीकें' :
               locale === 'fr' ? 'Outils et techniques pour déboguer et tester vos contributions' :
               locale === 'de' ? 'Tools und Techniken zum Debuggen und Testen Ihrer Beiträge' :
               locale === 'ja' ? '貢献をデバッグ・テストするためのツールと技術' :
               locale === 'ko' ? '기여를 디버깅하고 테스트하기 위한 도구와 기술' :
               locale === 'es' ? 'Herramientas y técnicas para depurar y probar tus contribuciones' :
               locale === 'ru' ? 'Инструменты и методы для отладки и тестирования ваших вкладов' :
               'Tools and techniques for debugging and testing your contributions'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? 'VS Code 调试' :
                 locale === 'hi' ? 'VS Code डिबगिंग' :
                 locale === 'fr' ? 'Débogage VS Code' :
                 locale === 'de' ? 'VS Code Debugging' :
                 locale === 'ja' ? 'VS Code デバッグ' :
                 locale === 'ko' ? 'VS Code 디버깅' :
                 locale === 'es' ? 'Depuración VS Code' :
                 locale === 'ru' ? 'Отладка VS Code' :
                 'VS Code Debugging'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '在 VS Code 中使用 F5 或调试配置交互式调试 CLI。'
                  : locale === 'hi'
                  ? 'VS Code में F5 या डिबग कॉन्फ़िगरेशन का उपयोग करके CLI को इंटरैक्टिव रूप से डिबग करें।'
                  : locale === 'fr'
                  ? 'Déboguez le CLI de manière interactive dans VS Code avec F5 ou utilisez la configuration de débogage.'
                  : locale === 'de'
                  ? 'Debuggen Sie die CLI interaktiv in VS Code mit F5 oder verwenden Sie die Debug-Konfiguration.'
                  : locale === 'ja'
                  ? 'VS CodeでF5またはデバッグ設定を使用してCLIを対話的にデバッグします。'
                  : locale === 'ko'
                  ? 'VS Code에서 F5 또는 디버그 구성을 사용하여 CLI를 대화식으로 디버깅합니다.'
                  : locale === 'es'
                  ? 'Depura el CLI de forma interactiva en VS Code con F5 o usa la configuración de depuración.'
                  : locale === 'ru'
                  ? 'Отлаживайте CLI интерактивно в VS Code с помощью F5 или используйте конфигурацию отладки.'
                  : 'Debug the CLI interactively in VS Code with F5 or use the debug configuration.'
                }
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# ${locale === 'zh' ? '以调试模式启动' :
      locale === 'hi' ? 'डिबग मोड में शुरू करें' :
      locale === 'fr' ? 'Démarrer en mode débogage' :
      locale === 'de' ? 'Im Debug-Modus starten' :
      locale === 'ja' ? 'デバッグモードで開始' :
      locale === 'ko' ? '디버그 모드로 시작' :
      locale === 'es' ? 'Iniciar en modo depuración' :
      locale === 'ru' ? 'Запустить в режиме отладки' :
      'Start in debug mode'}
npm run debug

# ${locale === 'zh' ? '或使用 VS Code F5 键' :
      locale === 'hi' ? 'या VS Code F5 key का उपयोग करें' :
      locale === 'fr' ? 'Ou utilisez la touche F5 de VS Code' :
      locale === 'de' ? 'Oder verwenden Sie VS Code F5-Taste' :
      locale === 'ja' ? 'またはVS Code F5キーを使用' :
      locale === 'ko' ? '또는 VS Code F5 키 사용' :
      locale === 'es' ? 'O usa la tecla F5 de VS Code' :
      locale === 'ru' ? 'Или используйте клавишу F5 VS Code' :
      'Or use VS Code F5 key'}
# ${locale === 'zh' ? '使用 "Attach" 配置' :
      locale === 'hi' ? '"Attach" कॉन्फ़िगरेशन के साथ' :
      locale === 'fr' ? 'avec la configuration "Attach"' :
      locale === 'de' ? 'mit "Attach"-Konfiguration' :
      locale === 'ja' ? '"Attach"設定で' :
      locale === 'ko' ? '"Attach" 구성으로' :
      locale === 'es' ? 'con configuración "Attach"' :
      locale === 'ru' ? 'с конфигурацией "Attach"' :
      'with "Attach" configuration'}`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                React DevTools
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '使用 React DevTools 4.x 版本调试 CLI 基于 React 的 UI。'
                  : locale === 'hi'
                  ? 'React DevTools 4.x का उपयोग करके CLI के React-आधारित UI को डिबग करें।'
                  : locale === 'fr'
                  ? 'Déboguez l\'interface utilisateur basée sur React du CLI en utilisant React DevTools version 4.x.'
                  : locale === 'de'
                  ? 'Debuggen Sie die React-basierte Benutzeroberfläche der CLI mit React DevTools Version 4.x.'
                  : locale === 'ja'
                  ? 'React DevTools 4.xを使用してCLIのReactベースUIをデバッグします。'
                  : locale === 'ko'
                  ? 'React DevTools 4.x를 사용하여 CLI의 React 기반 UI를 디버깅합니다.'
                  : locale === 'es'
                  ? 'Depura la interfaz de usuario basada en React del CLI usando React DevTools versión 4.x.'
                  : locale === 'ru'
                  ? 'Отлаживайте React-интерфейс CLI с помощью React DevTools версии 4.x.'
                  : 'Debug the CLI\'s React-based UI using React DevTools version 4.x.'
                }
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# ${locale === 'zh' ? '以开发模式启动' :
      locale === 'hi' ? 'डेवलपमेंट मोड में शुरू करें' :
      locale === 'fr' ? 'Démarrer en mode développement' :
      locale === 'de' ? 'Im Entwicklungsmodus starten' :
      locale === 'ja' ? '開発モードで開始' :
      locale === 'ko' ? '개발 모드로 시작' :
      locale === 'es' ? 'Iniciar en modo desarrollo' :
      locale === 'ru' ? 'Запустить в режиме разработки' :
      'Start in development mode'}
DEV=true npm start

# ${locale === 'zh' ? '安装 React DevTools' :
      locale === 'hi' ? 'React DevTools इंस्टॉल करें' :
      locale === 'fr' ? 'Installer React DevTools' :
      locale === 'de' ? 'React DevTools installieren' :
      locale === 'ja' ? 'React DevToolsをインストール' :
      locale === 'ko' ? 'React DevTools 설치' :
      locale === 'es' ? 'Instalar React DevTools' :
      locale === 'ru' ? 'Установить React DevTools' :
      'Install React DevTools'}
npm install -g react-devtools@4.28.5
react-devtools`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '沙箱调试' :
                 locale === 'hi' ? 'सैंडबॉक्स डिबगिंग' :
                 locale === 'fr' ? 'Débogage Sandbox' :
                 locale === 'de' ? 'Sandbox-Debugging' :
                 locale === 'ja' ? 'サンドボックスデバッグ' :
                 locale === 'ko' ? '샌드박스 디버깅' :
                 locale === 'es' ? 'Depuración Sandbox' :
                 locale === 'ru' ? 'Отладка в песочнице' :
                 'Sandbox Debugging'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '在沙箱容器内调试，用于安全相关的开发。'
                  : locale === 'hi'
                  ? 'सिक्योरिटी-संबंधित डेवलपमेंट के लिए सैंडबॉक्स कंटेनर के अंदर डिबग करें।'
                  : locale === 'fr'
                  ? 'Déboguez à l\'intérieur du conteneur sandbox pour le développement lié à la sécurité.'
                  : locale === 'de'
                  ? 'Debuggen Sie im Sandbox-Container für sicherheitsbezogene Entwicklung.'
                  : locale === 'ja'
                  ? 'セキュリティ関連の開発のためにサンドボックスコンテナ内でデバッグします。'
                  : locale === 'ko'
                  ? '보안 관련 개발을 위해 샌드박스 컨테이너 내에서 디버깅합니다。'
                  : locale === 'es'
                  ? 'Depura dentro del contenedor sandbox para desarrollo relacionado con seguridad.'
                  : locale === 'ru'
                  ? 'Отлаживайте внутри контейнера песочницы для разработки, связанной с безопасностью.'
                  : 'Debug inside the sandbox container for security-related development.'
                }
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# ${locale === 'zh' ? '在沙箱内调试' :
      locale === 'hi' ? 'सैंडबॉक्स के अंदर डिबग करें' :
      locale === 'fr' ? 'Déboguer dans le sandbox' :
      locale === 'de' ? 'In der Sandbox debuggen' :
      locale === 'ja' ? 'サンドボックス内でデバッグ' :
      locale === 'ko' ? '샌드박스 내에서 디버깅' :
      locale === 'es' ? 'Depurar dentro del sandbox' :
      locale === 'ru' ? 'Отладка внутри песочницы' :
      'Debug inside sandbox'}
DEBUG=1 gemini

# ${locale === 'zh' ? '启用沙箱调试' :
      locale === 'hi' ? 'सैंडबॉक्स डिबगिंग सक्षम करें' :
      locale === 'fr' ? 'Activer le débogage sandbox' :
      locale === 'de' ? 'Sandbox-Debugging aktivieren' :
      locale === 'ja' ? 'サンドボックスデバッグを有効化' :
      locale === 'ko' ? '샌드박스 디버깅 활성화' :
      locale === 'es' ? 'Habilitar depuración sandbox' :
      locale === 'ru' ? 'Включить отладку песочницы' :
      'Enable sandbox debugging'}
GEMINI_SANDBOX=true npm start`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '测试类型' :
                 locale === 'hi' ? 'टेस्टिंग के प्रकार' :
                 locale === 'fr' ? 'Types de Tests' :
                 locale === 'de' ? 'Test-Typen' :
                 locale === 'ja' ? 'テストの種類' :
                 locale === 'ko' ? '테스트 유형' :
                 locale === 'es' ? 'Tipos de Pruebas' :
                 locale === 'ru' ? 'Типы тестов' :
                 'Testing Types'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '运行不同类型的测试以确保您的更改正常工作。'
                  : locale === 'hi'
                  ? 'अपने बदलावों के सही तरीके से काम करने को सुनिश्चित करने के लिए विभिन्न प्रकार के टेस्ट चलाएं।'
                  : locale === 'fr'
                  ? 'Exécutez différents types de tests pour vous assurer que vos modifications fonctionnent correctement.'
                  : locale === 'de'
                  ? 'Führen Sie verschiedene Arten von Tests aus, um sicherzustellen, dass Ihre Änderungen korrekt funktionieren.'
                  : locale === 'ja'
                  ? '変更が正しく動作することを確認するために、さまざまな種類のテストを実行します。'
                  : locale === 'ko'
                  ? '변경사항이 올바르게 작동하는지 확인하기 위해 다양한 유형의 테스트를 실행합니다.'
                  : locale === 'es'
                  ? 'Ejecuta diferentes tipos de pruebas para asegurar que tus cambios funcionen correctamente.'
                  : locale === 'ru'
                  ? 'Запускайте различные типы тестов, чтобы убедиться, что ваши изменения работают правильно.'
                  : 'Run different types of tests to ensure your changes work correctly.'
                }
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`# ${locale === 'zh' ? '单元测试' :
      locale === 'hi' ? 'यूनिट टेस्ट' :
      locale === 'fr' ? 'Tests unitaires' :
      locale === 'de' ? 'Unit-Tests' :
      locale === 'ja' ? 'ユニットテスト' :
      locale === 'ko' ? '단위 테스트' :
      locale === 'es' ? 'Pruebas unitarias' :
      locale === 'ru' ? 'Модульные тесты' :
      'Unit tests'}
npm run test

# ${locale === 'zh' ? '集成测试' :
      locale === 'hi' ? 'इंटीग्रेशन टेस्ट' :
      locale === 'fr' ? 'Tests d\'intégration' :
      locale === 'de' ? 'Integrationstests' :
      locale === 'ja' ? '統合テスト' :
      locale === 'ko' ? '통합 테스트' :
      locale === 'es' ? 'Pruebas de integración' :
      locale === 'ru' ? 'Интеграционные тесты' :
      'Integration tests'}
npm run test:e2e

# ${locale === 'zh' ? '所有质量检查' :
      locale === 'hi' ? 'सभी क्वालिटी चेक' :
      locale === 'fr' ? 'Toutes les vérifications qualité' :
      locale === 'de' ? 'Alle Qualitätsprüfungen' :
      locale === 'ja' ? 'すべての品質チェック' :
      locale === 'ko' ? '모든 품질 검사' :
      locale === 'es' ? 'Todas las verificaciones de calidad' :
      locale === 'ru' ? 'Все проверки качества' :
      'All quality checks'}
npm run preflight`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-indigo-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '准备好贡献了吗？' :
               locale === 'hi' ? 'योगदान के लिए तैयार हैं?' :
               locale === 'fr' ? 'Prêt à Contribuer ?' :
               locale === 'de' ? 'Bereit beizutragen?' :
               locale === 'ja' ? '貢献する準備はできましたか？' :
               locale === 'ko' ? '기여할 준비가 되셨나요?' :
               locale === 'es' ? '¿Listo para Contribuir?' :
               locale === 'ru' ? 'Готовы внести вклад?' :
               'Ready to Contribute?'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '使用这些资源开始您的贡献之旅' :
               locale === 'hi' ? 'इन संसाधनों के साथ अपनी योगदान यात्रा शुरू करें' :
               locale === 'fr' ? 'Commencez votre parcours de contribution avec ces ressources' :
               locale === 'de' ? 'Beginnen Sie Ihre Beitragsreise mit diesen Ressourcen' :
               locale === 'ja' ? 'これらのリソースで貢献の旅を始めましょう' :
               locale === 'ko' ? '이러한 리소스로 기여 여정을 시작하세요' :
               locale === 'es' ? 'Comienza tu viaje de contribución con estos recursos' :
               locale === 'ru' ? 'Начните свой путь участия с этими ресурсами' :
               'Start your contribution journey with these resources'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/google-gemini/gemini-cli"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh' ? '在 GitHub 上查看' :
                 locale === 'hi' ? 'GitHub पर देखें' :
                 locale === 'fr' ? 'Voir sur GitHub' :
                 locale === 'de' ? 'Auf GitHub ansehen' :
                 locale === 'ja' ? 'GitHubで表示' :
                 locale === 'ko' ? 'GitHub에서 보기' :
                 locale === 'es' ? 'Ver en GitHub' :
                 locale === 'ru' ? 'Посмотреть на GitHub' :
                 'View on GitHub'}
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                className="rounded-lg border border-indigo-600 px-6 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh' ? '浏览 Issues' :
                 locale === 'hi' ? 'Issues ब्राउज़ करें' :
                 locale === 'fr' ? 'Parcourir les Issues' :
                 locale === 'de' ? 'Issues durchsuchen' :
                 locale === 'ja' ? 'Issuesを閲覧' :
                 locale === 'ko' ? 'Issues 탐색' :
                 locale === 'es' ? 'Explorar Issues' :
                 locale === 'ru' ? 'Просмотреть Issues' :
                 'Browse Issues'}
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh' ? '完整贡献指南' :
                 locale === 'hi' ? 'पूर्ण योगदान गाइड' :
                 locale === 'fr' ? 'Guide de Contribution Complet' :
                 locale === 'de' ? 'Vollständiger Beitragsleitfaden' :
                 locale === 'ja' ? '完全な貢献ガイド' :
                 locale === 'ko' ? '전체 기여 가이드' :
                 locale === 'es' ? 'Guía de Contribución Completa' :
                 locale === 'ru' ? 'Полное руководство по участию' :
                 'Full Contributing Guide'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '额外资源' :
               locale === 'hi' ? 'अतिरिक्त संसाधन' :
               locale === 'fr' ? 'Ressources Supplémentaires' :
               locale === 'de' ? 'Zusätzliche Ressourcen' :
               locale === 'ja' ? '追加リソース' :
               locale === 'ko' ? '추가 리소스' :
               locale === 'es' ? 'Recursos Adicionales' :
               locale === 'ru' ? 'Дополнительные ресурсы' :
               'Additional Resources'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '对贡献者有用的链接和文档' :
               locale === 'hi' ? 'योगदानकर्ताओं के लिए उपयोगी लिंक और दस्तावेज़' :
               locale === 'fr' ? 'Liens utiles et documentation pour les contributeurs' :
               locale === 'de' ? 'Nützliche Links und Dokumentation für Mitwirkende' :
               locale === 'ja' ? '貢献者向けの有用なリンクとドキュメント' :
               locale === 'ko' ? '기여자를 위한 유용한 링크와 문서' :
               locale === 'es' ? 'Enlaces útiles y documentación para contribuidores' :
               locale === 'ru' ? 'Полезные ссылки и документация для участников' :
               'Helpful links and documentation for contributors'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <DocumentTextIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? '架构文档' :
                 locale === 'hi' ? 'आर्किटेक्चर डॉक्स' :
                 locale === 'fr' ? 'Documentation Architecture' :
                 locale === 'de' ? 'Architektur-Dokumentation' :
                 locale === 'ja' ? 'アーキテクチャドキュメント' :
                 locale === 'ko' ? '아키텍처 문서' :
                 locale === 'es' ? 'Documentación de Arquitectura' :
                 locale === 'ru' ? 'Документация архитектуры' :
                 'Architecture Docs'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh' ? '了解项目结构和架构' :
                 locale === 'hi' ? 'प्रोजेक्ट संरचना और आर्किटेक्चर के बारे में जानें' :
                 locale === 'fr' ? 'Apprenez la structure et l\'architecture du projet' :
                 locale === 'de' ? 'Erfahren Sie mehr über Projektstruktur und Architektur' :
                 locale === 'ja' ? 'プロジェクトの構造とアーキテクチャについて学ぶ' :
                 locale === 'ko' ? '프로젝트 구조와 아키텍처에 대해 알아보기' :
                 locale === 'es' ? 'Aprende sobre la estructura y arquitectura del proyecto' :
                 locale === 'ru' ? 'Изучите структуру и архитектуру проекта' :
                 'Learn about the project structure and architecture'}
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/docs/architecture.md"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh' ? '阅读架构 →' :
                 locale === 'hi' ? 'आर्किटेक्चर पढ़ें →' :
                 locale === 'fr' ? 'Lire l\'Architecture →' :
                 locale === 'de' ? 'Architektur lesen →' :
                 locale === 'ja' ? 'アーキテクチャを読む →' :
                 locale === 'ko' ? '아키텍처 읽기 →' :
                 locale === 'es' ? 'Leer Arquitectura →' :
                 locale === 'ru' ? 'Читать архитектуру →' :
                 'Read Architecture →'}
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <CommandLineIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? '集成测试' :
                 locale === 'hi' ? 'इंटीग्रेशन टेस्ट' :
                 locale === 'fr' ? 'Tests d\'Intégration' :
                 locale === 'de' ? 'Integrationstests' :
                 locale === 'ja' ? '統合テスト' :
                 locale === 'ko' ? '통합 테스트' :
                 locale === 'es' ? 'Pruebas de Integración' :
                 locale === 'ru' ? 'Интеграционные тесты' :
                 'Integration Tests'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh' ? '了解集成测试框架' :
                 locale === 'hi' ? 'इंटीग्रेशन टेस्टिंग फ्रेमवर्क के बारे में जानें' :
                 locale === 'fr' ? 'Apprenez le framework de tests d\'intégration' :
                 locale === 'de' ? 'Erfahren Sie mehr über das Integrationstesting-Framework' :
                 locale === 'ja' ? '統合テストフレームワークについて学ぶ' :
                 locale === 'ko' ? '통합 테스트 프레임워크에 대해 알아보기' :
                 locale === 'es' ? 'Aprende sobre el framework de pruebas de integración' :
                 locale === 'ru' ? 'Изучите фреймворк интеграционного тестирования' :
                 'Learn about the integration testing framework'}
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/docs/integration-tests.md"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh' ? '测试指南 →' :
                 locale === 'hi' ? 'टेस्टिंग गाइड →' :
                 locale === 'fr' ? 'Guide de Tests →' :
                 locale === 'de' ? 'Test-Leitfaden →' :
                 locale === 'ja' ? 'テストガイド →' :
                 locale === 'ko' ? '테스트 가이드 →' :
                 locale === 'es' ? 'Guía de Pruebas →' :
                 locale === 'ru' ? 'Руководство по тестированию →' :
                 'Testing Guide →'}
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <CodeBracketIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? 'AI 开发' :
                 locale === 'hi' ? 'AI डेवलपमेंट' :
                 locale === 'fr' ? 'Développement IA' :
                 locale === 'de' ? 'KI-Entwicklung' :
                 locale === 'ja' ? 'AI開発' :
                 locale === 'ko' ? 'AI 개발' :
                 locale === 'es' ? 'Desarrollo de IA' :
                 locale === 'ru' ? 'Разработка ИИ' :
                 'AI Development'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh' ? 'AI 辅助开发指南' :
                 locale === 'hi' ? 'AI-सहायक डेवलपमेंट के लिए दिशानिर्देश' :
                 locale === 'fr' ? 'Directives pour le développement assisté par IA' :
                 locale === 'de' ? 'Richtlinien für KI-unterstützte Entwicklung' :
                 locale === 'ja' ? 'AI支援開発のガイドライン' :
                 locale === 'ko' ? 'AI 지원 개발을 위한 가이드라인' :
                 locale === 'es' ? 'Pautas para desarrollo asistido por IA' :
                 locale === 'ru' ? 'Руководящие принципы для разработки с помощью ИИ' :
                 'Guidelines for AI-assisted development'}
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/blob/main/GEMINI.md"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GEMINI.md →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'hi' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'es' },
    { locale: 'ru' }
  ]
}
