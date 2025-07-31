const fs = require('fs');
const path = require('path');

// Complete about structure for all languages
const aboutTranslations = {
  de: {
    title: "Über unsere Plattform",
    subtitle: "Wir sind bestrebt, KI-gestützte Entwicklung für Entwickler weltweit durch umfassende Lernressourcen und von der Community erstellte Inhalte zugänglich zu machen.",
    mission: {
      title: "Unsere Mission",
      description: "KI-gestützte Entwicklung zu demokratisieren, indem wir umfassende, zugängliche und praktische Lernressourcen für Googles Gemini CLI bereitstellen. Wir glauben, dass jeder Entwickler die Möglichkeit haben sollte, die Kraft der künstlichen Intelligenz in seinem täglichen Arbeitsablauf zu nutzen.",
      excellence: "Bildungsexzellenz",
      excellenceDesc: "Wir erstellen hochwertige Tutorials, Anleitungen und Dokumentationen, die komplexe KI-Konzepte für Entwickler aller Fähigkeitsstufen verständlich machen.",
      community: "Community-Fokus",
      communityDesc: "Unsere Plattform gedeiht durch Community-Beiträge und fördert Zusammenarbeit und Wissensaustausch unter KI-Entwicklungsbegeisterten.",
      practical: "Praktisches Lernen",
      practicalDesc: "Wir betonen praktische, reale Beispiele, die Entwickler sofort in ihren Projekten und Arbeitsabläufen anwenden können.",
      global: "Globale Zugänglichkeit",
      globalDesc: "Durch die Unterstützung mehrerer Sprachen und inklusives Design stellen wir sicher, dass unsere Ressourcen für Entwickler weltweit zugänglich sind."
    },
    values: {
      title: "Unsere Werte",
      subtitle: "Die Prinzipien, die alles leiten, was wir tun",
      education: {
        name: "Bildung zuerst",
        description: "Wir glauben daran, KI-Entwicklung durch umfassende, verständliche Bildungsinhalte zugänglich zu machen."
      },
      communityDriven: {
        name: "Community-getrieben",
        description: "Unsere Plattform gedeiht durch Community-Beiträge, Feedback und kollaborative Lernerfahrungen."
      },
      openSource: {
        name: "Open-Source-Geist",
        description: "Wir unterstützen und fördern Open-Source-Entwicklung, Transparenz und Wissensaustausch."
      },
      innovation: {
        name: "Innovationsfokus",
        description: "Wir bleiben an der Spitze der KI-Technologie und bieten modernste Lernressourcen und Tools."
      },
      accessibility: {
        name: "Globale Zugänglichkeit",
        description: "Wir bemühen uns, unsere Inhalte für Entwickler weltweit zugänglich zu machen, unabhängig von ihrem Hintergrund."
      },
      quality: {
        name: "Qualitätsinhalt",
        description: "Wir sind verpflichtet, hochwertige, genaue und aktuelle Bildungsmaterialien bereitzustellen."
      }
    },
    stats: {
      title: "Plattform-Impact",
      subtitle: "Wachsen mit der Entwicklergemeinschaft",
      languages: "Unterstützte Sprachen",
      guides: "Lernanleitungen",
      examples: "Code-Beispiele",
      members: "Community-Mitglieder"
    },
    story: {
      title: "Unsere Geschichte",
      paragraph1: "Als Google Gemini CLI als Open-Source-Projekt veröffentlichte, erkannten wir sein enormes Potenzial, die Art und Weise zu verändern, wie Entwickler mit KI arbeiten. Wir sahen jedoch auch eine Lücke bei zugänglichen Lernressourcen, die Entwicklern verschiedener Hintergründe helfen könnten, mit diesem mächtigen Tool zu beginnen.",
      paragraph2: "Deshalb beschlossen wir, diese umfassende Lernplattform zu erstellen. Unser Ziel ist einfach: Gemini CLI für alle zugänglich zu machen, unabhängig von ihrer Erfahrung mit KI oder Kommandozeilen-Tools.",
      paragraph3: "Von einer kleinen Sammlung von Tutorials ausgehend, sind wir zu einer umfassenden Plattform mit mehrsprachiger Unterstützung, interaktiven Beispielen und einer blühenden Gemeinschaft von Mitwirkenden gewachsen. Wir sind stolz darauf, Teil des Open-Source-Ökosystems zu sein und Googles Vision zur Demokratisierung der KI-Entwicklung zu unterstützen."
    },
    disclaimer: {
      title: "Wichtiger Hinweis",
      content: "Dies ist eine inoffizielle, von der Community erstellte Lernressource zur Unterstützung der Gemini CLI-Bildung. Obwohl wir uns um Genauigkeit und Qualität bemühen, ist diese Plattform nicht mit Google verbunden oder von Google unterstützt. Alle Inhalte basieren auf dem offiziellen Open-Source-Projekt Gemini CLI und Community-Beiträgen."
    },
    getInvolved: {
      title: "Mitmachen",
      subtitle: "Treten Sie unserer Community bei und helfen Sie dabei, KI-Entwicklung zugänglicher zu machen",
      contribute: {
        title: "Inhalte beitragen",
        description: "Helfen Sie uns, Tutorials zu verbessern und neue Lernressourcen hinzuzufügen.",
        link: "Beitragsleitfaden →"
      },
      discussions: {
        title: "An Diskussionen teilnehmen",
        description: "Beteiligen Sie sich an Community-Diskussionen und teilen Sie Ihre Erfahrungen.",
        link: "GitHub-Diskussionen →"
      },
      issues: {
        title: "Problem melden",
        description: "Ein Problem gefunden oder einen Verbesserungsvorschlag?",
        link: "Kontaktieren Sie uns →"
      }
    },
    cta: {
      title: "Bereit zum Lernen?",
      description: "Erkunden Sie unsere umfassenden Anleitungen und schließen Sie sich Tausenden von Entwicklern an, die bereits Gemini CLI verwenden, um ihre Entwicklungsworkflows zu verbessern.",
      getStarted: "Loslegen",
      browseGuides: "Anleitungen durchsuchen"
    }
  },
  fr: {
    title: "À propos de notre plateforme",
    subtitle: "Nous nous efforçons de rendre le développement alimenté par l'IA accessible aux développeurs du monde entier grâce à des ressources d'apprentissage complètes et du contenu créé par la communauté.",
    mission: {
      title: "Notre mission",
      description: "Démocratiser le développement alimenté par l'IA en fournissant des ressources d'apprentissage complètes, accessibles et pratiques pour Gemini CLI de Google. Nous croyons que chaque développeur devrait avoir l'opportunité d'exploiter la puissance de l'intelligence artificielle dans son flux de travail quotidien.",
      excellence: "Excellence éducative",
      excellenceDesc: "Nous créons des tutoriels, guides et documentation de haute qualité qui rendent les concepts d'IA complexes compréhensibles pour les développeurs de tous niveaux.",
      community: "Focus communautaire",
      communityDesc: "Notre plateforme prospère grâce aux contributions de la communauté, favorisant la collaboration et le partage de connaissances parmi les passionnés de développement IA.",
      practical: "Apprentissage pratique",
      practicalDesc: "Nous mettons l'accent sur des exemples pratiques du monde réel que les développeurs peuvent immédiatement appliquer à leurs projets et flux de travail.",
      global: "Accessibilité mondiale",
      globalDesc: "En supportant plusieurs langues et une conception inclusive, nous nous assurons que nos ressources sont accessibles aux développeurs du monde entier."
    },
    values: {
      title: "Nos valeurs",
      subtitle: "Les principes qui guident tout ce que nous faisons",
      education: {
        name: "L'éducation d'abord",
        description: "Nous croyons à rendre le développement IA accessible grâce à un contenu éducatif complet et compréhensible."
      },
      communityDriven: {
        name: "Dirigé par la communauté",
        description: "Notre plateforme prospère grâce aux contributions de la communauté, aux retours et aux expériences d'apprentissage collaboratives."
      },
      openSource: {
        name: "Esprit open source",
        description: "Nous soutenons et promouvons le développement open source, la transparence et le partage de connaissances."
      },
      innovation: {
        name: "Focus sur l'innovation",
        description: "Nous restons à la pointe de la technologie IA, fournissant des ressources d'apprentissage et des outils de pointe."
      },
      accessibility: {
        name: "Accessibilité mondiale",
        description: "Nous nous efforçons de rendre notre contenu accessible aux développeurs du monde entier, quel que soit leur origine."
      },
      quality: {
        name: "Contenu de qualité",
        description: "Nous nous engageons à fournir des matériaux éducatifs de haute qualité, précis et à jour."
      }
    },
    stats: {
      title: "Impact de la plateforme",
      subtitle: "Grandir avec la communauté des développeurs",
      languages: "Langues supportées",
      guides: "Guides d'apprentissage",
      examples: "Exemples de code",
      members: "Membres de la communauté"
    },
    story: {
      title: "Notre histoire",
      paragraph1: "Quand Google a publié Gemini CLI comme projet open source, nous avons reconnu son énorme potentiel pour changer la façon dont les développeurs travaillent avec l'IA. Cependant, nous avons aussi vu un manque de ressources d'apprentissage accessibles qui pourraient aider les développeurs de divers horizons à commencer avec cet outil puissant.",
      paragraph2: "C'est pourquoi nous avons décidé de créer cette plateforme d'apprentissage complète. Notre objectif est simple : rendre Gemini CLI accessible à tous, quel que soit leur niveau d'expérience avec l'IA ou les outils en ligne de commande.",
      paragraph3: "Partant d'une petite collection de tutoriels, nous avons grandi pour devenir une plateforme complète avec support multilingue, exemples interactifs et une communauté florissante de contributeurs. Nous sommes fiers de faire partie de l'écosystème open source et de soutenir la vision de Google de démocratiser le développement IA."
    },
    disclaimer: {
      title: "Avis important",
      content: "Ceci est une ressource d'apprentissage non officielle créée par la communauté pour soutenir l'éducation Gemini CLI. Bien que nous nous efforcions d'assurer l'exactitude et la qualité, cette plateforme n'est pas affiliée à ou approuvée par Google. Tout le contenu est basé sur le projet open source officiel Gemini CLI et les contributions de la communauté."
    },
    getInvolved: {
      title: "S'impliquer",
      subtitle: "Rejoignez notre communauté et aidez à rendre le développement IA plus accessible",
      contribute: {
        title: "Contribuer au contenu",
        description: "Aidez-nous à améliorer les tutoriels et à ajouter de nouvelles ressources d'apprentissage.",
        link: "Guide de contribution →"
      },
      discussions: {
        title: "Rejoindre les discussions",
        description: "Participez aux discussions de la communauté et partagez vos expériences.",
        link: "Discussions GitHub →"
      },
      issues: {
        title: "Signaler un problème",
        description: "Trouvé un problème ou avez une suggestion d'amélioration ?",
        link: "Nous contacter →"
      }
    },
    cta: {
      title: "Prêt à apprendre ?",
      description: "Explorez nos guides complets et rejoignez des milliers de développeurs qui utilisent déjà Gemini CLI pour améliorer leurs flux de travail de développement.",
      getStarted: "Commencer",
      browseGuides: "Parcourir les guides"
    }
  }
};

// Function to update about section for a language
function updateAboutSection(langCode, aboutData) {
  const filePath = path.join(__dirname, `../src/messages/${langCode}.json`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Replace the about section
  content.about = aboutData;
  
  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Updated about section for ${langCode}`);
}

// Japanese about structure
const jaAbout = {
  title: "私たちのプラットフォームについて",
  subtitle: "包括的な学習リソースとコミュニティ作成コンテンツを通じて、世界中の開発者にAI駆動開発を利用可能にすることに取り組んでいます。",
  mission: {
    title: "私たちの使命",
    description: "GoogleのGemini CLIに包括的で利用しやすく実用的な学習リソースを提供することで、AI駆動開発を民主化することです。すべての開発者が日常のワークフローで人工知能の力を活用する機会を持つべきだと信じています。",
    excellence: "教育の卓越性",
    excellenceDesc: "あらゆるスキルレベルの開発者に複雑なAI概念を理解可能にする高品質なチュートリアル、ガイド、ドキュメントを作成しています。",
    community: "コミュニティフォーカス",
    communityDesc: "私たちのプラットフォームはコミュニティの貢献によって繁栄し、AI開発愛好者間のコラボレーションと知識共有を促進しています。",
    practical: "実践的学習",
    practicalDesc: "開発者がプロジェクトやワークフローにすぐに適用できる実世界の実践的な例を重視しています。",
    global: "グローバルアクセシビリティ",
    globalDesc: "複数言語のサポートと包括的なデザインにより、世界中の開発者がリソースにアクセスできることを保証しています。"
  },
  values: {
    title: "私たちの価値観",
    subtitle: "私たちの行動すべてを導く原則",
    education: {
      name: "教育第一",
      description: "包括的で理解しやすい教育コンテンツを通じてAI開発をアクセシブルにすることを信じています。"
    },
    communityDriven: {
      name: "コミュニティ主導",
      description: "私たちのプラットフォームはコミュニティの貢献、フィードバック、協力的な学習体験によって繁栄しています。"
    },
    openSource: {
      name: "オープンソース精神",
      description: "オープンソース開発、透明性、知識共有を支持し推進しています。"
    },
    innovation: {
      name: "イノベーションフォーカス",
      description: "AI技術の最前線に留まり、最先端の学習リソースとツールを提供しています。"
    },
    accessibility: {
      name: "グローバルアクセシビリティ",
      description: "背景に関係なく、世界中の開発者がコンテンツにアクセスできるよう努めています。"
    },
    quality: {
      name: "品質コンテンツ",
      description: "高品質で正確かつ最新の教育材料を提供することにコミットしています。"
    }
  },
  stats: {
    title: "プラットフォームの影響",
    subtitle: "開発者コミュニティと共に成長",
    languages: "サポート言語",
    guides: "学習ガイド",
    examples: "コード例",
    members: "コミュニティメンバー"
  },
  story: {
    title: "私たちのストーリー",
    paragraph1: "GoogleがGemini CLIをオープンソースプロジェクトとしてリリースしたとき、開発者がAIと働く方法を変える巨大な可能性を認識しました。しかし、様々な背景の開発者がこの強力なツールを始めるのに役立つアクセシブルな学習リソースの不足も見ました。",
    paragraph2: "そのため、この包括的な学習プラットフォームを作成することを決めました。私たちの目標はシンプルです：AIやコマンドラインツールの経験レベルに関係なく、すべての人にGemini CLIをアクセシブルにすることです。",
    paragraph3: "小さなチュートリアルコレクションから始まり、多言語サポート、インタラクティブな例、繁栄するコントリビューターコミュニティを持つ包括的なプラットフォームに成長しました。オープンソースエコシステムの一部であり、AI開発を民主化するGoogleのビジョンをサポートしていることを誇りに思います。"
  },
  disclaimer: {
    title: "重要な免責事項",
    content: "これはGemini CLI教育をサポートするためにコミュニティが作成した非公式学習リソースです。正確性と品質に努めていますが、このプラットフォームはGoogleと提携または承認されていません。すべてのコンテンツは公式Gemini CLIオープンソースプロジェクトとコミュニティ貢献に基づいています。"
  },
  getInvolved: {
    title: "参加する",
    subtitle: "コミュニティに参加し、AI開発をよりアクセシブルにするのを手伝ってください",
    contribute: {
      title: "コンテンツに貢献",
      description: "チュートリアルの改善と新しい学習リソースの追加を手伝ってください。",
      link: "貢献ガイド →"
    },
    discussions: {
      title: "ディスカッションに参加",
      description: "コミュニティディスカッションに参加し、経験を共有してください。",
      link: "GitHubディスカッション →"
    },
    issues: {
      title: "問題を報告",
      description: "問題を見つけたり改善提案がありますか？",
      link: "お問い合わせ →"
    }
  },
  cta: {
    title: "学習を始める準備はできましたか？",
    description: "包括的なガイドを探索し、開発ワークフローを強化するためにすでにGemini CLIを使用している何千人もの開発者に参加してください。",
    getStarted: "始める",
    browseGuides: "ガイドを閲覧"
  }
};

// Korean about structure
const koAbout = {
  title: "우리 플랫폼에 대해",
  subtitle: "포괄적인 학습 리소스와 커뮤니티 제작 콘텐츠를 통해 전 세계 개발자들이 AI 기반 개발에 접근할 수 있도록 노력하고 있습니다.",
  mission: {
    title: "우리의 사명",
    description: "Google의 Gemini CLI를 위한 포괄적이고 접근 가능하며 실용적인 학습 리소스를 제공하여 AI 기반 개발을 민주화하는 것입니다. 모든 개발자가 일상적인 워크플로에서 인공지능의 힘을 활용할 기회를 가져야 한다고 믿습니다.",
    excellence: "교육 우수성",
    excellenceDesc: "모든 기술 수준의 개발자가 복잡한 AI 개념을 이해할 수 있도록 하는 고품질 튜토리얼, 가이드 및 문서를 만들고 있습니다.",
    community: "커뮤니티 중심",
    communityDesc: "우리 플랫폼은 커뮤니티 기여를 통해 번영하며, AI 개발 애호가들 간의 협업과 지식 공유를 촉진합니다.",
    practical: "실용적 학습",
    practicalDesc: "개발자가 프로젝트와 워크플로에 즉시 적용할 수 있는 실제 실용적인 예제를 강조합니다.",
    global: "글로벌 접근성",
    globalDesc: "다국어 지원과 포용적 디자인을 통해 전 세계 개발자가 우리 리소스에 접근할 수 있도록 보장합니다."
  },
  values: {
    title: "우리의 가치",
    subtitle: "우리가 하는 모든 일을 이끄는 원칙들",
    education: {
      name: "교육 우선",
      description: "포괄적이고 이해하기 쉬운 교육 콘텐츠를 통해 AI 개발을 접근 가능하게 만드는 것을 믿습니다."
    },
    communityDriven: {
      name: "커뮤니티 주도",
      description: "우리 플랫폼은 커뮤니티 기여, 피드백 및 협력적 학습 경험을 통해 번영합니다."
    },
    openSource: {
      name: "오픈소스 정신",
      description: "오픈소스 개발, 투명성 및 지식 공유를 지지하고 촉진합니다."
    },
    innovation: {
      name: "혁신 중심",
      description: "AI 기술의 최전선에 머물며 최첨단 학습 리소스와 도구를 제공합니다."
    },
    accessibility: {
      name: "글로벌 접근성",
      description: "배경에 관계없이 전 세계 개발자가 우리 콘텐츠에 접근할 수 있도록 노력합니다."
    },
    quality: {
      name: "품질 콘텐츠",
      description: "고품질의 정확하고 최신 교육 자료를 제공하는 데 전념합니다."
    }
  },
  stats: {
    title: "플랫폼 영향",
    subtitle: "개발자 커뮤니티와 함께 성장",
    languages: "지원 언어",
    guides: "학습 가이드",
    examples: "코드 예제",
    members: "커뮤니티 멤버"
  },
  story: {
    title: "우리의 이야기",
    paragraph1: "Google이 Gemini CLI를 오픈소스 프로젝트로 출시했을 때, 개발자들이 AI와 작업하는 방식을 바꿀 엄청난 잠재력을 인식했습니다. 그러나 다양한 배경의 개발자들이 이 강력한 도구를 시작하는 데 도움이 될 접근 가능한 학습 리소스의 부족도 보았습니다.",
    paragraph2: "그래서 이 포괄적인 학습 플랫폼을 만들기로 결정했습니다. 우리의 목표는 간단합니다: AI나 명령줄 도구에 대한 경험 수준에 관계없이 모든 사람이 Gemini CLI에 접근할 수 있도록 하는 것입니다.",
    paragraph3: "작은 튜토리얼 모음에서 시작하여 다국어 지원, 대화형 예제 및 번영하는 기여자 커뮤니티를 갖춘 포괄적인 플랫폼으로 성장했습니다. 오픈소스 생태계의 일부가 되고 AI 개발을 민주화하려는 Google의 비전을 지원하는 것을 자랑스럽게 생각합니다."
  },
  disclaimer: {
    title: "중요한 면책조항",
    content: "이것은 Gemini CLI 교육을 지원하기 위해 커뮤니티에서 만든 비공식 학습 리소스입니다. 정확성과 품질을 위해 노력하지만, 이 플랫폼은 Google과 제휴하거나 승인받지 않았습니다. 모든 콘텐츠는 공식 Gemini CLI 오픈소스 프로젝트와 커뮤니티 기여를 기반으로 합니다."
  },
  getInvolved: {
    title: "참여하기",
    subtitle: "우리 커뮤니티에 참여하고 AI 개발을 더 접근 가능하게 만드는 데 도움을 주세요",
    contribute: {
      title: "콘텐츠 기여",
      description: "튜토리얼 개선과 새로운 학습 리소스 추가를 도와주세요.",
      link: "기여 가이드 →"
    },
    discussions: {
      title: "토론 참여",
      description: "커뮤니티 토론에 참여하고 경험을 공유하세요.",
      link: "GitHub 토론 →"
    },
    issues: {
      title: "문제 신고",
      description: "문제를 발견했거나 개선 제안이 있나요?",
      link: "문의하기 →"
    }
  },
  cta: {
    title: "학습을 시작할 준비가 되셨나요?",
    description: "포괄적인 가이드를 탐색하고 개발 워크플로를 향상시키기 위해 이미 Gemini CLI를 사용하고 있는 수천 명의 개발자들과 함께하세요.",
    getStarted: "시작하기",
    browseGuides: "가이드 둘러보기"
  }
};

// Update all language about sections
updateAboutSection('de', aboutTranslations.de);
updateAboutSection('fr', aboutTranslations.fr);
updateAboutSection('ja', jaAbout);
updateAboutSection('ko', koAbout);

console.log('About sections updated successfully!');
