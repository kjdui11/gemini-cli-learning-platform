import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  SparklesIcon,
  BugAntIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface LocaleChangelogPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleChangelogPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    zh: '更新日志 - Gemini CLI 文档',
    en: 'Changelog - Gemini CLI Documentation',
    fr: 'Journal des modifications - Documentation Gemini CLI',
    de: 'Änderungsprotokoll - Gemini CLI Dokumentation',
    ja: '変更履歴 - Gemini CLI ドキュメント',
    ko: '변경 로그 - Gemini CLI 문서',
    es: 'Registro de cambios - Documentación Gemini CLI',
    hi: 'परिवर्तन लॉग - Gemini CLI दस्तावेज़',
    ru: 'Журнал изменений - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Gemini CLI 的版本更新和变更记录，包括新功能、错误修复、改进和重大变更。',
    en: 'Version updates and change records for Gemini CLI including new features, bug fixes, improvements, and breaking changes.',
    fr: 'Mises à jour de version et enregistrements de modifications pour Gemini CLI incluant les nouvelles fonctionnalités, corrections de bugs, améliorations et changements majeurs.',
    de: 'Versionsupdates und Änderungsaufzeichnungen für Gemini CLI einschließlich neuer Funktionen, Fehlerbehebungen, Verbesserungen und wichtiger Änderungen.',
    ja: '新機能、バグ修正、改善、重大な変更を含む Gemini CLI のバージョン更新と変更記録。',
    ko: '새로운 기능, 버그 수정, 개선 사항 및 주요 변경 사항을 포함한 Gemini CLI의 버전 업데이트 및 변경 기록.',
    es: 'Actualizaciones de versión y registros de cambios para Gemini CLI incluyendo nuevas características, correcciones de errores, mejoras y cambios importantes.',
    hi: 'नई सुविधाओं, बग फिक्स, सुधार और महत्वपूर्ण परिवर्तनों सहित Gemini CLI के लिए संस्करण अपडेट और परिवर्तन रिकॉर्ड।',
    ru: 'Обновления версий и записи изменений для Gemini CLI, включая новые функции, исправления ошибок, улучшения и критические изменения.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: 'Gemini CLI changelog, version history, updates, releases, bug fixes, new features',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const getContent = (locale: string) => {
  const content = {
    zh: {
      title: '更新日志',
      subtitle: '跟踪 Gemini CLI 的所有更新、新功能、错误修复和改进。保持对最新变更和增强功能的了解。',
      typesTitle: '变更类型',
      helpTitle: '需要升级帮助？',
      helpSubtitle: '查看我们的迁移指南和文档',
      migrationGuide: '迁移指南',
      documentation: '文档',
      allReleases: '所有版本',
      changeTypes: {
        feature: { label: '新功能', color: 'text-green-600 bg-green-100' },
        fix: { label: '错误修复', color: 'text-red-600 bg-red-100' },
        improvement: { label: '改进', color: 'text-blue-600 bg-blue-100' },
        security: { label: '安全', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: '重大变更', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: '最新',
          changes: [
            {
              type: 'feature',
              title: 'MCP 协议支持',
              description: '添加了对模型上下文协议 (MCP) 的完整支持，允许自定义工具集成和服务器通信。',
              details: [
                '实现 MCP 客户端和服务器功能',
                '添加工具注册和发现',
                '支持自定义 MCP 服务器',
                '通过上下文感知增强工具执行'
              ]
            },
            {
              type: 'feature',
              title: '增强的文件操作',
              description: '改进了文件读写功能，具有更好的错误处理和对二进制文件的支持。',
              details: [
                '支持二进制文件操作',
                '改进文件操作的错误消息',
                '添加文件类型检测',
                '增强文件访问安全性'
              ]
            },
            {
              type: 'improvement',
              title: '性能优化',
              description: '大文件处理和批处理操作的显著性能改进。',
              details: [
                '优化大文件的内存使用',
                '改进实时响应的流式传输',
                '更好的缓存机制',
                '减少启动时间'
              ]
            },
            {
              type: 'fix',
              title: '配置管理',
              description: '修复了配置持久化和环境变量处理的问题。',
              details: [
                '修复配置文件损坏问题',
                '改进环境变量优先级',
                '更好的配置值验证',
                '修复跨平台路径处理'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: '稳定',
          changes: [
            {
              type: 'breaking',
              title: '新的 CLI 架构',
              description: '完全重写 CLI 架构，以获得更好的模块化和可扩展性。',
              details: [
                '模块化插件系统',
                '改进的命令结构',
                '更好的错误处理和报告',
                '增强的配置管理'
              ]
            },
            {
              type: 'feature',
              title: '交互式 REPL 模式',
              description: '添加了交互式读取-求值-打印循环，用于与 Gemini 进行持续对话。',
              details: [
                '持久对话上下文',
                '命令历史和自动完成',
                '多行输入支持',
                '可自定义的主题和提示'
              ]
            },
            {
              type: 'feature',
              title: '高级工具系统',
              description: '引入了用于文件操作、网络访问和 shell 命令的综合工具系统。',
              details: [
                '文件系统操作（读取、写入、列表）',
                '网络获取和搜索功能',
                'Shell 命令执行',
                '对话的内存管理'
              ]
            },
            {
              type: 'security',
              title: '增强安全性',
              description: '改进了 API 密钥管理和工具执行的安全措施。',
              details: [
                '安全的 API 密钥存储',
                '沙盒化工具执行',
                '基于权限的文件访问',
                '敏感操作的审计日志'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: '旧版',
          changes: [
            {
              type: 'fix',
              title: '身份验证问题',
              description: '修复了 Google AI 服务的身份验证问题。',
              details: [
                '解决令牌刷新问题',
                '修复新用户的 OAuth 流程',
                '改进身份验证失败的错误消息'
              ]
            },
            {
              type: 'improvement',
              title: '错误处理',
              description: '更好的错误消息和恢复机制。',
              details: [
                '更具描述性的错误消息',
                '瞬态故障的自动重试',
                '更好的网络错误处理'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: '旧版',
          changes: [
            {
              type: 'feature',
              title: '批处理',
              description: '添加了在批处理模式下处理多个文件的支持。',
              details: [
                '批量文件分析',
                '并行处理能力',
                '长时间操作的进度报告'
              ]
            },
            {
              type: 'feature',
              title: '自定义模板',
              description: '支持自定义提示模板和响应格式。',
              details: [
                '提示的模板引擎',
                '自定义输出格式化程序',
                '可重用的提示库'
              ]
            },
            {
              type: 'improvement',
              title: '文档',
              description: '全面的文档更新和示例。',
              details: [
                '更新的 API 文档',
                '更多代码示例',
                '视频教程和指南'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: '旧版',
          changes: [
            {
              type: 'feature',
              title: '初始发布',
              description: 'Gemini CLI 的首个稳定版本，具有核心功能。',
              details: [
                '基本聊天功能',
                '文件分析能力',
                '配置管理',
                '跨平台支持'
              ]
            }
          ]
        }
      ]
    },
    hi: {
      title: 'चेंजलॉग',
      subtitle: 'Gemini CLI में सभी अपडेट, नई सुविधाओं, बग फिक्स और सुधारों को ट्रैक करें। नवीनतम परिवर्तनों और संवर्धनों के बारे में सूचित रहें।',
      typesTitle: 'परिवर्तन प्रकार',
      helpTitle: 'अपग्रेड सहायता चाहिए?',
      helpSubtitle: 'हमारी माइग्रेशन गाइड और दस्तावेज़ीकरण देखें',
      migrationGuide: 'माइग्रेशन गाइड',
      documentation: 'दस्तावेज़ीकरण',
      allReleases: 'सभी रिलीज़',
      changeTypes: {
        feature: { label: 'नई सुविधा', color: 'text-green-600 bg-green-100' },
        fix: { label: 'बग फिक्स', color: 'text-red-600 bg-red-100' },
        improvement: { label: 'सुधार', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'सुरक्षा अपडेट', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: 'ब्रेकिंग चेंज', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: 'नवीनतम',
          changes: [
            {
              type: 'feature',
              title: 'MCP प्रोटोकॉल समर्थन',
              description: 'मॉडल कॉन्टेक्स्ट प्रोटोकॉल (MCP) के लिए पूर्ण समर्थन जोड़ा गया जो कस्टम टूल एकीकरण और सर्वर संचार की अनुमति देता है।',
              details: [
                'MCP क्लाइंट और सर्वर क्षमताओं को लागू करें',
                'टूल पंजीकरण और खोज जोड़ें',
                'कस्टम MCP सर्वर के लिए समर्थन',
                'संदर्भ जागरूकता के साथ बेहतर टूल निष्पादन'
              ]
            },
            {
              type: 'feature',
              title: 'बेहतर फ़ाइल ऑपरेशन',
              description: 'बेहतर त्रुटि हैंडलिंग और बाइनरी फ़ाइलों के समर्थन के साथ फ़ाइल पढ़ने और लिखने की क्षमताओं में सुधार।',
              details: [
                'बाइनरी फ़ाइल ऑपरेशन के लिए समर्थन',
                'फ़ाइल ऑपरेशन के लिए बेहतर त्रुटि संदेश',
                'फ़ाइल प्रकार का पता लगाना जोड़ा गया',
                'फ़ाइल पहुंच के लिए बेहतर सुरक्षा'
              ]
            },
            {
              type: 'improvement',
              title: 'प्रदर्शन अनुकूलन',
              description: 'बड़ी फ़ाइल प्रसंस्करण और बैच ऑपरेशन के लिए महत्वपूर्ण प्रदर्शन सुधार।',
              details: [
                'बड़ी फ़ाइलों के लिए मेमोरी उपयोग अनुकूलित',
                'रीयल-टाइम प्रतिक्रियाओं के लिए बेहतर स्ट्रीमिंग',
                'बेहतर कैशिंग तंत्र',
                'स्टार्टअप समय कम किया गया'
              ]
            },
            {
              type: 'fix',
              title: 'कॉन्फ़िगरेशन प्रबंधन',
              description: 'कॉन्फ़िगरेशन स्थिरता और पर्यावरण चर हैंडलिंग के साथ समस्याओं को ठीक किया गया।',
              details: [
                'कॉन्फ़िग फ़ाइल भ्रष्टाचार की समस्याओं को ठीक किया गया',
                'पर्यावरण चर प्राथमिकता में सुधार',
                'कॉन्फ़िगरेशन मानों के लिए बेहतर सत्यापन',
                'क्रॉस-प्लेटफॉर्म पथ हैंडलिंग को ठीक किया गया'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: 'स्थिर',
          changes: [
            {
              type: 'breaking',
              title: 'नया CLI आर्किटेक्चर',
              description: 'बेहतर मॉड्यूलरिटी और एक्स्टेंसिबिलिटी के लिए CLI आर्किटेक्चर का पूर्ण पुनर्लेखन।',
              details: [
                'मॉड्यूलर प्लगइन सिस्टम',
                'बेहतर कमांड संरचना',
                'बेहतर त्रुटि हैंडलिंग और रिपोर्टिंग',
                'बेहतर कॉन्फ़िगरेशन प्रबंधन'
              ]
            },
            {
              type: 'feature',
              title: 'इंटरैक्टिव REPL मोड',
              description: 'Gemini के साथ निरंतर बातचीत के लिए इंटरैक्टिव रीड-इवैल-प्रिंट लूप जोड़ा गया।',
              details: [
                'स्थायी बातचीत संदर्भ',
                'कमांड इतिहास और ऑटो-पूर्णता',
                'मल्टी-लाइन इनपुट समर्थन',
                'अनुकूलन योग्य थीम और प्रॉम्प्ट'
              ]
            },
            {
              type: 'feature',
              title: 'उन्नत टूल सिस्टम',
              description: 'फ़ाइल ऑपरेशन, वेब एक्सेस और शेल कमांड के लिए व्यापक टूल सिस्टम पेश किया गया।',
              details: [
                'फ़ाइल सिस्टम ऑपरेशन (पढ़ना, लिखना, सूची)',
                'वेब फेचिंग और खोज क्षमताएं',
                'शेल कमांड निष्पादन',
                'बातचीत के लिए मेमोरी प्रबंधन'
              ]
            },
            {
              type: 'security',
              title: 'बेहतर सुरक्षा',
              description: 'API कुंजी प्रबंधन और टूल निष्पादन के लिए बेहतर सुरक्षा उपाय।',
              details: [
                'सुरक्षित API कुंजी भंडारण',
                'सैंडबॉक्स्ड टूल निष्पादन',
                'अनुमति-आधारित फ़ाइल पहुंच',
                'संवेदनशील ऑपरेशन के लिए ऑडिट लॉगिंग'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: 'पुराना',
          changes: [
            {
              type: 'fix',
              title: 'प्रमाणीकरण समस्याएं',
              description: 'Google AI सेवाओं के साथ प्रमाणीकरण समस्याओं को ठीक किया गया।',
              details: [
                'टोकन रिफ्रेश समस्याओं को हल किया गया',
                'नए उपयोगकर्ताओं के लिए OAuth फ्लो को ठीक किया गया',
                'प्रमाणीकरण विफलताओं के लिए बेहतर त्रुटि संदेश'
              ]
            },
            {
              type: 'improvement',
              title: 'त्रुटि हैंडलिंग',
              description: 'बेहतर त्रुटि संदेश और रिकवरी तंत्र।',
              details: [
                'अधिक वर्णनात्मक त्रुटि संदेश',
                'क्षणिक विफलताओं के लिए स्वचालित पुनः प्रयास',
                'बेहतर नेटवर्क त्रुटि हैंडलिंग'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: 'पुराना',
          changes: [
            {
              type: 'feature',
              title: 'बैच प्रोसेसिंग',
              description: 'बैच मोड में कई फ़ाइलों को प्रोसेस करने के लिए समर्थन जोड़ा गया।',
              details: [
                'बैच फ़ाइल विश्लेषण',
                'समानांतर प्रसंस्करण क्षमताएं',
                'लंबे ऑपरेशन के लिए प्रगति रिपोर्टिंग'
              ]
            },
            {
              type: 'feature',
              title: 'कस्टम टेम्प्लेट',
              description: 'कस्टम प्रॉम्प्ट टेम्प्लेट और रिस्पॉन्स फॉर्मेटिंग के लिए समर्थन।',
              details: [
                'प्रॉम्प्ट के लिए टेम्प्लेट इंजन',
                'कस्टम आउटपुट फॉर्मेटर',
                'पुन: उपयोग योग्य प्रॉम्प्ट लाइब्रेरी'
              ]
            },
            {
              type: 'improvement',
              title: 'दस्तावेज़ीकरण',
              description: 'व्यापक दस्तावेज़ीकरण अपडेट और उदाहरण।',
              details: [
                'अपडेट किया गया API दस्तावेज़ीकरण',
                'अधिक कोड उदाहरण',
                'वीडियो ट्यूटोरियल और गाइड'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: 'पुराना',
          changes: [
            {
              type: 'feature',
              title: 'प्रारंभिक रिलीज़',
              description: 'मुख्य कार्यक्षमता के साथ Gemini CLI की पहली स्थिर रिलीज़।',
              details: [
                'बुनियादी चैट कार्यक्षमता',
                'फ़ाइल विश्लेषण क्षमताएं',
                'कॉन्फ़िगरेशन प्रबंधन',
                'क्रॉस-प्लेटफॉर्म समर्थन'
              ]
            }
          ]
        }
      ]
    },
    fr: {
      title: 'Journal des Modifications',
      subtitle: 'Suivez toutes les mises à jour, nouvelles fonctionnalités, corrections de bugs et améliorations dans Gemini CLI. Restez informé des derniers changements et améliorations.',
      typesTitle: 'Types de Modifications',
      helpTitle: 'Besoin d\'aide pour la mise à niveau ?',
      helpSubtitle: 'Consultez notre guide de migration et notre documentation',
      migrationGuide: 'Guide de Migration',
      documentation: 'Documentation',
      allReleases: 'Toutes les Versions',
      changeTypes: {
        feature: { label: 'Nouvelle Fonctionnalité', color: 'text-green-600 bg-green-100' },
        fix: { label: 'Correction de Bug', color: 'text-red-600 bg-red-100' },
        improvement: { label: 'Amélioration', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'Mise à Jour de Sécurité', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: 'Changement Majeur', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: 'Dernière',
          changes: [
            {
              type: 'feature',
              title: 'Support du Protocole MCP',
              description: 'Ajout du support complet pour le Protocole de Contexte de Modèle (MCP) permettant l\'intégration d\'outils personnalisés et la communication serveur.',
              details: [
                'Implémenter les capacités client et serveur MCP',
                'Ajouter l\'enregistrement et la découverte d\'outils',
                'Support pour les serveurs MCP personnalisés',
                'Exécution d\'outils améliorée avec conscience du contexte'
              ]
            },
            {
              type: 'feature',
              title: 'Opérations de Fichiers Améliorées',
              description: 'Amélioration des capacités de lecture et d\'écriture de fichiers avec une meilleure gestion des erreurs et le support des fichiers binaires.',
              details: [
                'Support pour les opérations de fichiers binaires',
                'Messages d\'erreur améliorés pour les opérations de fichiers',
                'Détection de type de fichier ajoutée',
                'Sécurité renforcée pour l\'accès aux fichiers'
              ]
            },
            {
              type: 'improvement',
              title: 'Optimisations de Performance',
              description: 'Améliorations significatives des performances pour le traitement de gros fichiers et les opérations par lots.',
              details: [
                'Utilisation mémoire optimisée pour les gros fichiers',
                'Streaming amélioré pour les réponses en temps réel',
                'Meilleurs mécanismes de mise en cache',
                'Temps de démarrage réduit'
              ]
            },
            {
              type: 'fix',
              title: 'Gestion de Configuration',
              description: 'Correction des problèmes de persistance de configuration et de gestion des variables d\'environnement.',
              details: [
                'Correction des problèmes de corruption des fichiers de configuration',
                'Amélioration de la priorité des variables d\'environnement',
                'Meilleure validation des valeurs de configuration',
                'Correction de la gestion des chemins multi-plateformes'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: 'Stable',
          changes: [
            {
              type: 'breaking',
              title: 'Nouvelle Architecture CLI',
              description: 'Réécriture complète de l\'architecture CLI pour une meilleure modularité et extensibilité.',
              details: [
                'Système de plugins modulaire',
                'Structure de commandes améliorée',
                'Meilleure gestion et rapport d\'erreurs',
                'Gestion de configuration améliorée'
              ]
            },
            {
              type: 'feature',
              title: 'Mode REPL Interactif',
              description: 'Ajout d\'une boucle Read-Eval-Print interactive pour des conversations continues avec Gemini.',
              details: [
                'Contexte de conversation persistant',
                'Historique des commandes et auto-complétion',
                'Support d\'entrée multi-lignes',
                'Thèmes et invites personnalisables'
              ]
            },
            {
              type: 'feature',
              title: 'Système d\'Outils Avancé',
              description: 'Introduction d\'un système d\'outils complet pour les opérations de fichiers, l\'accès web et les commandes shell.',
              details: [
                'Opérations du système de fichiers (lecture, écriture, liste)',
                'Capacités de récupération et recherche web',
                'Exécution de commandes shell',
                'Gestion de la mémoire pour les conversations'
              ]
            },
            {
              type: 'security',
              title: 'Sécurité Renforcée',
              description: 'Mesures de sécurité améliorées pour la gestion des clés API et l\'exécution d\'outils.',
              details: [
                'Stockage sécurisé des clés API',
                'Exécution d\'outils en bac à sable',
                'Accès aux fichiers basé sur les permissions',
                'Journalisation d\'audit pour les opérations sensibles'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: 'Ancienne',
          changes: [
            {
              type: 'fix',
              title: 'Problèmes d\'Authentification',
              description: 'Correction des problèmes d\'authentification avec les services Google AI.',
              details: [
                'Résolution des problèmes de rafraîchissement de token',
                'Correction du flux OAuth pour les nouveaux utilisateurs',
                'Amélioration des messages d\'erreur pour les échecs d\'authentification'
              ]
            },
            {
              type: 'improvement',
              title: 'Gestion d\'Erreurs',
              description: 'Meilleurs messages d\'erreur et mécanismes de récupération.',
              details: [
                'Messages d\'erreur plus descriptifs',
                'Nouvelle tentative automatique pour les échecs transitoires',
                'Meilleure gestion des erreurs réseau'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: 'Ancienne',
          changes: [
            {
              type: 'feature',
              title: 'Traitement par Lots',
              description: 'Ajout du support pour traiter plusieurs fichiers en mode lot.',
              details: [
                'Analyse de fichiers par lots',
                'Capacités de traitement parallèle',
                'Rapport de progression pour les opérations longues'
              ]
            },
            {
              type: 'feature',
              title: 'Modèles Personnalisés',
              description: 'Support pour les modèles d\'invites personnalisés et le formatage des réponses.',
              details: [
                'Moteur de modèles pour les invites',
                'Formateurs de sortie personnalisés',
                'Bibliothèques d\'invites réutilisables'
              ]
            },
            {
              type: 'improvement',
              title: 'Documentation',
              description: 'Mises à jour complètes de la documentation et exemples.',
              details: [
                'Documentation API mise à jour',
                'Plus d\'exemples de code',
                'Tutoriels vidéo et guides'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: 'Ancienne',
          changes: [
            {
              type: 'feature',
              title: 'Version Initiale',
              description: 'Première version stable de Gemini CLI avec les fonctionnalités de base.',
              details: [
                'Fonctionnalité de chat de base',
                'Capacités d\'analyse de fichiers',
                'Gestion de configuration',
                'Support multi-plateforme'
              ]
            }
          ]
        }
      ]
    },
    de: {
      title: 'Änderungsprotokoll',
      subtitle: 'Verfolgen Sie alle Updates, neue Funktionen, Fehlerbehebungen und Verbesserungen in Gemini CLI. Bleiben Sie über die neuesten Änderungen und Verbesserungen informiert.',
      typesTitle: 'Änderungstypen',
      helpTitle: 'Benötigen Sie Upgrade-Hilfe?',
      helpSubtitle: 'Schauen Sie sich unseren Migrationsleitfaden und die Dokumentation an',
      migrationGuide: 'Migrationsleitfaden',
      documentation: 'Dokumentation',
      allReleases: 'Alle Versionen',
      changeTypes: {
        feature: { label: 'Neue Funktion', color: 'text-green-600 bg-green-100' },
        fix: { label: 'Fehlerbehebung', color: 'text-red-600 bg-red-100' },
        improvement: { label: 'Verbesserung', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'Sicherheitsupdate', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: 'Breaking Change', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: 'Neueste',
          changes: [
            {
              type: 'feature',
              title: 'MCP-Protokoll-Unterstützung',
              description: 'Vollständige Unterstützung für das Model Context Protocol (MCP) hinzugefügt, das benutzerdefinierte Tool-Integration und Server-Kommunikation ermöglicht.',
              details: [
                'MCP-Client- und Server-Funktionen implementieren',
                'Tool-Registrierung und -Erkennung hinzufügen',
                'Unterstützung für benutzerdefinierte MCP-Server',
                'Verbesserte Tool-Ausführung mit Kontextbewusstsein'
              ]
            },
            {
              type: 'feature',
              title: 'Verbesserte Dateioperationen',
              description: 'Verbesserte Datei-Lese- und Schreibfähigkeiten mit besserer Fehlerbehandlung und Unterstützung für Binärdateien.',
              details: [
                'Unterstützung für Binärdatei-Operationen',
                'Verbesserte Fehlermeldungen für Dateioperationen',
                'Dateityp-Erkennung hinzugefügt',
                'Verbesserte Sicherheit für Dateizugriff'
              ]
            },
            {
              type: 'improvement',
              title: 'Leistungsoptimierungen',
              description: 'Erhebliche Leistungsverbesserungen für die Verarbeitung großer Dateien und Batch-Operationen.',
              details: [
                'Speichernutzung für große Dateien optimiert',
                'Verbessertes Streaming für Echtzeit-Antworten',
                'Bessere Caching-Mechanismen',
                'Reduzierte Startzeit'
              ]
            },
            {
              type: 'fix',
              title: 'Konfigurationsverwaltung',
              description: 'Behebung von Problemen mit der Konfigurationspersistenz und der Behandlung von Umgebungsvariablen.',
              details: [
                'Probleme mit Konfigurationsdatei-Korruption behoben',
                'Verbesserte Priorität von Umgebungsvariablen',
                'Bessere Validierung für Konfigurationswerte',
                'Plattformübergreifende Pfadbehandlung korrigiert'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: 'Stabil',
          changes: [
            {
              type: 'breaking',
              title: 'Neue CLI-Architektur',
              description: 'Vollständige Neuentwicklung der CLI-Architektur für bessere Modularität und Erweiterbarkeit.',
              details: [
                'Modulares Plugin-System',
                'Verbesserte Befehlsstruktur',
                'Bessere Fehlerbehandlung und Berichterstattung',
                'Verbesserte Konfigurationsverwaltung'
              ]
            },
            {
              type: 'feature',
              title: 'Interaktiver REPL-Modus',
              description: 'Hinzufügung einer interaktiven Read-Eval-Print-Schleife für kontinuierliche Gespräche mit Gemini.',
              details: [
                'Persistenter Gesprächskontext',
                'Befehlshistorie und Auto-Vervollständigung',
                'Mehrzeilige Eingabeunterstützung',
                'Anpassbare Themes und Prompts'
              ]
            },
            {
              type: 'feature',
              title: 'Erweiterte Tool-System',
              description: 'Einführung eines umfassenden Tool-Systems für Dateioperationen, Web-Zugriff und Shell-Befehle.',
              details: [
                'Dateisystem-Operationen (Lesen, Schreiben, Auflisten)',
                'Web-Abruf und Suchfunktionen',
                'Shell-Befehlsausführung',
                'Speicherverwaltung für Gespräche'
              ]
            },
            {
              type: 'security',
              title: 'Verbesserte Sicherheit',
              description: 'Verbesserte Sicherheitsmaßnahmen für API-Schlüsselverwaltung und Tool-Ausführung.',
              details: [
                'Sichere API-Schlüsselspeicherung',
                'Sandboxed Tool-Ausführung',
                'Berechtigungsbasierter Dateizugriff',
                'Audit-Protokollierung für sensible Operationen'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: 'Veraltet',
          changes: [
            {
              type: 'fix',
              title: 'Authentifizierungsprobleme',
              description: 'Behebung von Authentifizierungsproblemen mit Google AI-Diensten.',
              details: [
                'Token-Aktualisierungsprobleme behoben',
                'OAuth-Flow für neue Benutzer korrigiert',
                'Verbesserte Fehlermeldungen für Authentifizierungsfehler'
              ]
            },
            {
              type: 'improvement',
              title: 'Fehlerbehandlung',
              description: 'Bessere Fehlermeldungen und Wiederherstellungsmechanismen.',
              details: [
                'Beschreibendere Fehlermeldungen',
                'Automatische Wiederholung bei vorübergehenden Fehlern',
                'Bessere Netzwerkfehlerbehandlung'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: 'Veraltet',
          changes: [
            {
              type: 'feature',
              title: 'Batch-Verarbeitung',
              description: 'Unterstützung für die Verarbeitung mehrerer Dateien im Batch-Modus hinzugefügt.',
              details: [
                'Batch-Dateianalyse',
                'Parallele Verarbeitungsfähigkeiten',
                'Fortschrittsberichte für lange Operationen'
              ]
            },
            {
              type: 'feature',
              title: 'Benutzerdefinierte Vorlagen',
              description: 'Unterstützung für benutzerdefinierte Prompt-Vorlagen und Antwortformatierung.',
              details: [
                'Template-Engine für Prompts',
                'Benutzerdefinierte Ausgabeformatierer',
                'Wiederverwendbare Prompt-Bibliotheken'
              ]
            },
            {
              type: 'improvement',
              title: 'Dokumentation',
              description: 'Umfassende Dokumentationsupdates und Beispiele.',
              details: [
                'Aktualisierte API-Dokumentation',
                'Mehr Code-Beispiele',
                'Video-Tutorials und Anleitungen'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: 'Veraltet',
          changes: [
            {
              type: 'feature',
              title: 'Erste Veröffentlichung',
              description: 'Erste stabile Veröffentlichung von Gemini CLI mit Kernfunktionalität.',
              details: [
                'Grundlegende Chat-Funktionalität',
                'Dateianalysefähigkeiten',
                'Konfigurationsverwaltung',
                'Plattformübergreifende Unterstützung'
              ]
            }
          ]
        }
      ]
    },
    ja: {
      title: '変更履歴',
      subtitle: 'Gemini CLIのすべてのアップデート、新機能、バグ修正、改善を追跡します。最新の変更と拡張について常に情報を得てください。',
      typesTitle: '変更タイプ',
      helpTitle: 'アップグレードのヘルプが必要ですか？',
      helpSubtitle: '移行ガイドとドキュメントをご確認ください',
      migrationGuide: '移行ガイド',
      documentation: 'ドキュメント',
      allReleases: 'すべてのリリース',
      changeTypes: {
        feature: { label: '新機能', color: 'text-green-600 bg-green-100' },
        fix: { label: 'バグ修正', color: 'text-red-600 bg-red-100' },
        improvement: { label: '改善', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'セキュリティアップデート', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: '破壊的変更', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: '最新',
          changes: [
            {
              type: 'feature',
              title: 'MCPプロトコルサポート',
              description: 'カスタムツール統合とサーバー通信を可能にするModel Context Protocol（MCP）の完全サポートを追加。',
              details: [
                'MCPクライアントとサーバー機能を実装',
                'ツール登録と発見を追加',
                'カスタムMCPサーバーのサポート',
                'コンテキスト認識による強化されたツール実行'
              ]
            },
            {
              type: 'feature',
              title: '強化されたファイル操作',
              description: 'より良いエラーハンドリングとバイナリファイルサポートによるファイル読み書き機能の改善。',
              details: [
                'バイナリファイル操作のサポート',
                'ファイル操作の改善されたエラーメッセージ',
                'ファイルタイプ検出を追加',
                'ファイルアクセスのセキュリティ強化'
              ]
            },
            {
              type: 'improvement',
              title: 'パフォーマンス最適化',
              description: '大きなファイル処理とバッチ操作の大幅なパフォーマンス改善。',
              details: [
                '大きなファイルのメモリ使用量を最適化',
                'リアルタイム応答のストリーミング改善',
                'より良いキャッシュメカニズム',
                '起動時間の短縮'
              ]
            },
            {
              type: 'fix',
              title: '設定管理',
              description: '設定の永続化と環境変数の処理に関する問題を修正。',
              details: [
                '設定ファイルの破損問題を修正',
                '環境変数の優先順位を改善',
                '設定値のより良い検証',
                'クロスプラットフォームパス処理を修正'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: '安定版',
          changes: [
            {
              type: 'breaking',
              title: '新しいCLIアーキテクチャ',
              description: 'より良いモジュール性と拡張性のためのCLIアーキテクチャの完全な書き直し。',
              details: [
                'モジュラープラグインシステム',
                '改善されたコマンド構造',
                'より良いエラーハンドリングとレポート',
                '強化された設定管理'
              ]
            },
            {
              type: 'feature',
              title: 'インタラクティブREPLモード',
              description: 'Geminiとの継続的な会話のためのインタラクティブRead-Eval-Printループを追加。',
              details: [
                '永続的な会話コンテキスト',
                'コマンド履歴と自動補完',
                'マルチライン入力サポート',
                'カスタマイズ可能なテーマとプロンプト'
              ]
            },
            {
              type: 'feature',
              title: '高度なツールシステム',
              description: 'ファイル操作、Web アクセス、シェルコマンドのための包括的なツールシステムを導入。',
              details: [
                'ファイルシステム操作（読み取り、書き込み、リスト）',
                'Web取得と検索機能',
                'シェルコマンド実行',
                '会話のメモリ管理'
              ]
            },
            {
              type: 'security',
              title: 'セキュリティ強化',
              description: 'APIキー管理とツール実行のセキュリティ対策を改善。',
              details: [
                'セキュアなAPIキーストレージ',
                'サンドボックス化されたツール実行',
                '権限ベースのファイルアクセス',
                '機密操作の監査ログ'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: '旧版',
          changes: [
            {
              type: 'fix',
              title: '認証問題',
              description: 'Google AIサービスの認証問題を修正。',
              details: [
                'トークンリフレッシュ問題を解決',
                '新規ユーザーのOAuthフローを修正',
                '認証失敗のエラーメッセージを改善'
              ]
            },
            {
              type: 'improvement',
              title: 'エラーハンドリング',
              description: 'より良いエラーメッセージと回復メカニズム。',
              details: [
                'より説明的なエラーメッセージ',
                '一時的な障害の自動リトライ',
                'より良いネットワークエラーハンドリング'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: '旧版',
          changes: [
            {
              type: 'feature',
              title: 'バッチ処理',
              description: 'バッチモードで複数ファイルを処理するサポートを追加。',
              details: [
                'バッチファイル分析',
                '並列処理機能',
                '長時間操作の進捗レポート'
              ]
            },
            {
              type: 'feature',
              title: 'カスタムテンプレート',
              description: 'カスタムプロンプトテンプレートとレスポンスフォーマットのサポート。',
              details: [
                'プロンプト用テンプレートエンジン',
                'カスタム出力フォーマッター',
                '再利用可能なプロンプトライブラリ'
              ]
            },
            {
              type: 'improvement',
              title: 'ドキュメント',
              description: '包括的なドキュメントの更新と例。',
              details: [
                '更新されたAPIドキュメント',
                'より多くのコード例',
                'ビデオチュートリアルとガイド'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: '旧版',
          changes: [
            {
              type: 'feature',
              title: '初回リリース',
              description: 'コア機能を持つGemini CLIの最初の安定版リリース。',
              details: [
                '基本的なチャット機能',
                'ファイル分析機能',
                '設定管理',
                'クロスプラットフォームサポート'
              ]
            }
          ]
        }
      ]
    },
    ko: {
      title: '변경 로그',
      subtitle: 'Gemini CLI의 모든 업데이트, 새로운 기능, 버그 수정 및 개선 사항을 추적하세요. 최신 변경 사항과 향상된 기능에 대한 정보를 받아보세요.',
      typesTitle: '변경 유형',
      helpTitle: '업그레이드 도움이 필요하신가요?',
      helpSubtitle: '마이그레이션 가이드와 문서를 확인하세요',
      migrationGuide: '마이그레이션 가이드',
      documentation: '문서',
      allReleases: '모든 릴리스',
      changeTypes: {
        feature: { label: '새로운 기능', color: 'text-green-600 bg-green-100' },
        fix: { label: '버그 수정', color: 'text-red-600 bg-red-100' },
        improvement: { label: '개선', color: 'text-blue-600 bg-blue-100' },
        security: { label: '보안 업데이트', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: '주요 변경', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: '최신',
          changes: [
            {
              type: 'feature',
              title: 'MCP 프로토콜 지원',
              description: '커스텀 도구 통합과 서버 통신을 가능하게 하는 Model Context Protocol (MCP)에 대한 완전한 지원을 추가했습니다.',
              details: [
                'MCP 클라이언트 및 서버 기능 구현',
                '도구 등록 및 발견 추가',
                '커스텀 MCP 서버 지원',
                '컨텍스트 인식을 통한 향상된 도구 실행'
              ]
            },
            {
              type: 'feature',
              title: '향상된 파일 작업',
              description: '더 나은 오류 처리와 바이너리 파일 지원으로 파일 읽기 및 쓰기 기능이 개선되었습니다.',
              details: [
                '바이너리 파일 작업 지원',
                '파일 작업에 대한 개선된 오류 메시지',
                '파일 유형 감지 추가',
                '파일 액세스 보안 강화'
              ]
            },
            {
              type: 'improvement',
              title: '성능 최적화',
              description: '대용량 파일 처리 및 배치 작업에 대한 상당한 성능 개선.',
              details: [
                '대용량 파일에 대한 메모리 사용량 최적화',
                '실시간 응답을 위한 스트리밍 개선',
                '더 나은 캐싱 메커니즘',
                '시작 시간 단축'
              ]
            },
            {
              type: 'fix',
              title: '구성 관리',
              description: '구성 지속성 및 환경 변수 처리 문제를 수정했습니다.',
              details: [
                '구성 파일 손상 문제 수정',
                '환경 변수 우선순위 개선',
                '구성 값에 대한 더 나은 검증',
                '크로스 플랫폼 경로 처리 수정'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: '안정',
          changes: [
            {
              type: 'breaking',
              title: '새로운 CLI 아키텍처',
              description: '더 나은 모듈성과 확장성을 위한 CLI 아키텍처의 완전한 재작성.',
              details: [
                '모듈식 플러그인 시스템',
                '개선된 명령 구조',
                '더 나은 오류 처리 및 보고',
                '향상된 구성 관리'
              ]
            },
            {
              type: 'feature',
              title: '대화형 REPL 모드',
              description: 'Gemini와의 지속적인 대화를 위한 대화형 Read-Eval-Print 루프를 추가했습니다.',
              details: [
                '지속적인 대화 컨텍스트',
                '명령 기록 및 자동 완성',
                '다중 라인 입력 지원',
                '사용자 정의 가능한 테마 및 프롬프트'
              ]
            },
            {
              type: 'feature',
              title: '고급 도구 시스템',
              description: '파일 작업, 웹 액세스 및 셸 명령을 위한 포괄적인 도구 시스템을 도입했습니다.',
              details: [
                '파일 시스템 작업 (읽기, 쓰기, 목록)',
                '웹 가져오기 및 검색 기능',
                '셸 명령 실행',
                '대화를 위한 메모리 관리'
              ]
            },
            {
              type: 'security',
              title: '보안 강화',
              description: 'API 키 관리 및 도구 실행을 위한 보안 조치를 개선했습니다.',
              details: [
                '안전한 API 키 저장',
                '샌드박스 도구 실행',
                '권한 기반 파일 액세스',
                '민감한 작업에 대한 감사 로깅'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: '이전',
          changes: [
            {
              type: 'fix',
              title: '인증 문제',
              description: 'Google AI 서비스의 인증 문제를 수정했습니다.',
              details: [
                '토큰 새로 고침 문제 해결',
                '새 사용자를 위한 OAuth 플로우 수정',
                '인증 실패에 대한 개선된 오류 메시지'
              ]
            },
            {
              type: 'improvement',
              title: '오류 처리',
              description: '더 나은 오류 메시지 및 복구 메커니즘.',
              details: [
                '더 설명적인 오류 메시지',
                '일시적 실패에 대한 자동 재시도',
                '더 나은 네트워크 오류 처리'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: '이전',
          changes: [
            {
              type: 'feature',
              title: '배치 처리',
              description: '배치 모드에서 여러 파일을 처리하는 지원을 추가했습니다.',
              details: [
                '배치 파일 분석',
                '병렬 처리 기능',
                '긴 작업에 대한 진행률 보고'
              ]
            },
            {
              type: 'feature',
              title: '사용자 정의 템플릿',
              description: '사용자 정의 프롬프트 템플릿 및 응답 형식에 대한 지원.',
              details: [
                '프롬프트용 템플릿 엔진',
                '사용자 정의 출력 포맷터',
                '재사용 가능한 프롬프트 라이브러리'
              ]
            },
            {
              type: 'improvement',
              title: '문서',
              description: '포괄적인 문서 업데이트 및 예제.',
              details: [
                '업데이트된 API 문서',
                '더 많은 코드 예제',
                '비디오 튜토리얼 및 가이드'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: '이전',
          changes: [
            {
              type: 'feature',
              title: '초기 릴리스',
              description: '핵심 기능을 갖춘 Gemini CLI의 첫 번째 안정 릴리스.',
              details: [
                '기본 채팅 기능',
                '파일 분석 기능',
                '구성 관리',
                '크로스 플랫폼 지원'
              ]
            }
          ]
        }
      ]
    },
    es: {
      title: 'Registro de Cambios',
      subtitle: 'Rastrea todas las actualizaciones, nuevas características, correcciones de errores y mejoras en Gemini CLI. Mantente informado sobre los últimos cambios y mejoras.',
      typesTitle: 'Tipos de Cambios',
      helpTitle: '¿Necesitas ayuda con la actualización?',
      helpSubtitle: 'Consulta nuestra guía de migración y documentación',
      migrationGuide: 'Guía de Migración',
      documentation: 'Documentación',
      allReleases: 'Todas las Versiones',
      changeTypes: {
        feature: { label: 'Nueva Característica', color: 'text-green-600 bg-green-100' },
        fix: { label: 'Corrección de Error', color: 'text-red-600 bg-red-100' },
        improvement: { label: 'Mejora', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'Actualización de Seguridad', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: 'Cambio Importante', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: 'Última',
          changes: [
            {
              type: 'feature',
              title: 'Soporte del Protocolo MCP',
              description: 'Se agregó soporte completo para el Protocolo de Contexto de Modelo (MCP) que permite la integración de herramientas personalizadas y comunicación con el servidor.',
              details: [
                'Implementar capacidades de cliente y servidor MCP',
                'Agregar registro y descubrimiento de herramientas',
                'Soporte para servidores MCP personalizados',
                'Ejecución de herramientas mejorada con conciencia de contexto'
              ]
            },
            {
              type: 'feature',
              title: 'Operaciones de Archivo Mejoradas',
              description: 'Capacidades mejoradas de lectura y escritura de archivos con mejor manejo de errores y soporte para archivos binarios.',
              details: [
                'Soporte para operaciones de archivos binarios',
                'Mensajes de error mejorados para operaciones de archivos',
                'Detección de tipo de archivo agregada',
                'Seguridad mejorada para acceso a archivos'
              ]
            },
            {
              type: 'improvement',
              title: 'Optimizaciones de Rendimiento',
              description: 'Mejoras significativas de rendimiento para el procesamiento de archivos grandes y operaciones por lotes.',
              details: [
                'Uso de memoria optimizado para archivos grandes',
                'Streaming mejorado para respuestas en tiempo real',
                'Mejores mecanismos de caché',
                'Tiempo de inicio reducido'
              ]
            },
            {
              type: 'fix',
              title: 'Gestión de Configuración',
              description: 'Se corrigieron problemas con la persistencia de configuración y el manejo de variables de entorno.',
              details: [
                'Se corrigieron problemas de corrupción de archivos de configuración',
                'Mejorada la precedencia de variables de entorno',
                'Mejor validación para valores de configuración',
                'Corregido el manejo de rutas multiplataforma'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: 'Estable',
          changes: [
            {
              type: 'breaking',
              title: 'Nueva Arquitectura CLI',
              description: 'Reescritura completa de la arquitectura CLI para mejor modularidad y extensibilidad.',
              details: [
                'Sistema de plugins modular',
                'Estructura de comandos mejorada',
                'Mejor manejo de errores y reportes',
                'Gestión de configuración mejorada'
              ]
            },
            {
              type: 'feature',
              title: 'Modo REPL Interactivo',
              description: 'Se agregó un bucle Read-Eval-Print interactivo para conversaciones continuas con Gemini.',
              details: [
                'Contexto de conversación persistente',
                'Historial de comandos y autocompletado',
                'Soporte de entrada multilínea',
                'Temas y prompts personalizables'
              ]
            },
            {
              type: 'feature',
              title: 'Sistema de Herramientas Avanzado',
              description: 'Se introdujo un sistema de herramientas integral para operaciones de archivos, acceso web y comandos shell.',
              details: [
                'Operaciones del sistema de archivos (leer, escribir, listar)',
                'Capacidades de búsqueda y obtención web',
                'Ejecución de comandos shell',
                'Gestión de memoria para conversaciones'
              ]
            },
            {
              type: 'security',
              title: 'Seguridad Mejorada',
              description: 'Medidas de seguridad mejoradas para la gestión de claves API y ejecución de herramientas.',
              details: [
                'Almacenamiento seguro de claves API',
                'Ejecución de herramientas en sandbox',
                'Acceso a archivos basado en permisos',
                'Registro de auditoría para operaciones sensibles'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: 'Antigua',
          changes: [
            {
              type: 'fix',
              title: 'Problemas de Autenticación',
              description: 'Se corrigieron problemas de autenticación con los servicios de Google AI.',
              details: [
                'Se resolvieron problemas de actualización de tokens',
                'Se corrigió el flujo OAuth para nuevos usuarios',
                'Mejores mensajes de error para fallos de autenticación'
              ]
            },
            {
              type: 'improvement',
              title: 'Manejo de Errores',
              description: 'Mejores mensajes de error y mecanismos de recuperación.',
              details: [
                'Mensajes de error más descriptivos',
                'Reintento automático para fallos transitorios',
                'Mejor manejo de errores de red'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: 'Antigua',
          changes: [
            {
              type: 'feature',
              title: 'Procesamiento por Lotes',
              description: 'Se agregó soporte para procesar múltiples archivos en modo lote.',
              details: [
                'Análisis de archivos por lotes',
                'Capacidades de procesamiento paralelo',
                'Reporte de progreso para operaciones largas'
              ]
            },
            {
              type: 'feature',
              title: 'Plantillas Personalizadas',
              description: 'Soporte para plantillas de prompts personalizadas y formato de respuestas.',
              details: [
                'Motor de plantillas para prompts',
                'Formateadores de salida personalizados',
                'Bibliotecas de prompts reutilizables'
              ]
            },
            {
              type: 'improvement',
              title: 'Documentación',
              description: 'Actualizaciones completas de documentación y ejemplos.',
              details: [
                'Documentación de API actualizada',
                'Más ejemplos de código',
                'Tutoriales en video y guías'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: 'Antigua',
          changes: [
            {
              type: 'feature',
              title: 'Lanzamiento Inicial',
              description: 'Primera versión estable de Gemini CLI con funcionalidad principal.',
              details: [
                'Funcionalidad básica de chat',
                'Capacidades de análisis de archivos',
                'Gestión de configuración',
                'Soporte multiplataforma'
              ]
            }
          ]
        }
      ]
    },
    ru: {
      title: 'Журнал Изменений',
      subtitle: 'Отслеживайте все обновления, новые функции, исправления ошибок и улучшения в Gemini CLI. Будьте в курсе последних изменений и улучшений.',
      typesTitle: 'Типы Изменений',
      helpTitle: 'Нужна помощь с обновлением?',
      helpSubtitle: 'Ознакомьтесь с нашим руководством по миграции и документацией',
      migrationGuide: 'Руководство по Миграции',
      documentation: 'Документация',
      allReleases: 'Все Релизы',
      changeTypes: {
        feature: { label: 'Новая Функция', color: 'text-green-600 bg-green-100' },
        fix: { label: 'Исправление Ошибки', color: 'text-red-600 bg-red-100' },
        improvement: { label: 'Улучшение', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'Обновление Безопасности', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: 'Критическое Изменение', color: 'text-orange-600 bg-orange-100' }
      },
      releases: [
        {
          version: '2.1.0',
          date: '2024-01-15',
          status: 'latest',
          statusText: 'Последняя',
          changes: [
            {
              type: 'feature',
              title: 'Поддержка Протокола MCP',
              description: 'Добавлена полная поддержка Протокола Контекста Модели (MCP), позволяющего интеграцию пользовательских инструментов и серверную коммуникацию.',
              details: [
                'Реализация клиентских и серверных возможностей MCP',
                'Добавление регистрации и обнаружения инструментов',
                'Поддержка пользовательских MCP серверов',
                'Улучшенное выполнение инструментов с учетом контекста'
              ]
            },
            {
              type: 'feature',
              title: 'Улучшенные Файловые Операции',
              description: 'Улучшенные возможности чтения и записи файлов с лучшей обработкой ошибок и поддержкой бинарных файлов.',
              details: [
                'Поддержка операций с бинарными файлами',
                'Улучшенные сообщения об ошибках для файловых операций',
                'Добавлено определение типа файла',
                'Улучшенная безопасность доступа к файлам'
              ]
            },
            {
              type: 'improvement',
              title: 'Оптимизация Производительности',
              description: 'Значительные улучшения производительности для обработки больших файлов и пакетных операций.',
              details: [
                'Оптимизировано использование памяти для больших файлов',
                'Улучшенная потоковая передача для ответов в реальном времени',
                'Лучшие механизмы кэширования',
                'Сокращенное время запуска'
              ]
            },
            {
              type: 'fix',
              title: 'Управление Конфигурацией',
              description: 'Исправлены проблемы с сохранением конфигурации и обработкой переменных окружения.',
              details: [
                'Исправлены проблемы повреждения файлов конфигурации',
                'Улучшен приоритет переменных окружения',
                'Лучшая валидация значений конфигурации',
                'Исправлена кроссплатформенная обработка путей'
              ]
            }
          ]
        },
        {
          version: '2.0.0',
          date: '2023-12-10',
          status: 'stable',
          statusText: 'Стабильная',
          changes: [
            {
              type: 'breaking',
              title: 'Новая Архитектура CLI',
              description: 'Полная переработка архитектуры CLI для лучшей модульности и расширяемости.',
              details: [
                'Модульная система плагинов',
                'Улучшенная структура команд',
                'Лучшая обработка ошибок и отчетность',
                'Улучшенное управление конфигурацией'
              ]
            },
            {
              type: 'feature',
              title: 'Интерактивный REPL Режим',
              description: 'Добавлен интерактивный цикл Read-Eval-Print для непрерывных разговоров с Gemini.',
              details: [
                'Постоянный контекст разговора',
                'История команд и автодополнение',
                'Поддержка многострочного ввода',
                'Настраиваемые темы и подсказки'
              ]
            },
            {
              type: 'feature',
              title: 'Продвинутая Система Инструментов',
              description: 'Введена комплексная система инструментов для файловых операций, веб-доступа и shell команд.',
              details: [
                'Операции файловой системы (чтение, запись, список)',
                'Возможности веб-получения и поиска',
                'Выполнение shell команд',
                'Управление памятью для разговоров'
              ]
            },
            {
              type: 'security',
              title: 'Улучшенная Безопасность',
              description: 'Улучшенные меры безопасности для управления API ключами и выполнения инструментов.',
              details: [
                'Безопасное хранение API ключей',
                'Изолированное выполнение инструментов',
                'Доступ к файлам на основе разрешений',
                'Аудит логирование для чувствительных операций'
              ]
            }
          ]
        },
        {
          version: '1.5.2',
          date: '2023-11-20',
          status: 'legacy',
          statusText: 'Устаревшая',
          changes: [
            {
              type: 'fix',
              title: 'Проблемы Аутентификации',
              description: 'Исправлены проблемы аутентификации с сервисами Google AI.',
              details: [
                'Решены проблемы обновления токенов',
                'Исправлен OAuth поток для новых пользователей',
                'Улучшены сообщения об ошибках для сбоев аутентификации'
              ]
            },
            {
              type: 'improvement',
              title: 'Обработка Ошибок',
              description: 'Лучшие сообщения об ошибках и механизмы восстановления.',
              details: [
                'Более описательные сообщения об ошибках',
                'Автоматические повторы для временных сбоев',
                'Лучшая обработка сетевых ошибок'
              ]
            }
          ]
        },
        {
          version: '1.5.0',
          date: '2023-10-15',
          status: 'legacy',
          statusText: 'Устаревшая',
          changes: [
            {
              type: 'feature',
              title: 'Пакетная Обработка',
              description: 'Добавлена поддержка обработки нескольких файлов в пакетном режиме.',
              details: [
                'Пакетный анализ файлов',
                'Возможности параллельной обработки',
                'Отчеты о прогрессе для длительных операций'
              ]
            },
            {
              type: 'feature',
              title: 'Пользовательские Шаблоны',
              description: 'Поддержка пользовательских шаблонов подсказок и форматирования ответов.',
              details: [
                'Движок шаблонов для подсказок',
                'Пользовательские форматировщики вывода',
                'Переиспользуемые библиотеки подсказок'
              ]
            },
            {
              type: 'improvement',
              title: 'Документация',
              description: 'Комплексные обновления документации и примеры.',
              details: [
                'Обновленная API документация',
                'Больше примеров кода',
                'Видео уроки и руководства'
              ]
            }
          ]
        },
        {
          version: '1.0.0',
          date: '2023-09-01',
          status: 'legacy',
          statusText: 'Устаревшая',
          changes: [
            {
              type: 'feature',
              title: 'Первоначальный Релиз',
              description: 'Первый стабильный релиз Gemini CLI с основной функциональностью.',
              details: [
                'Базовая функциональность чата',
                'Возможности анализа файлов',
                'Управление конфигурацией',
                'Кроссплатформенная поддержка'
              ]
            }
          ]
        }
      ]
    },
    en: {
      title: 'Changelog',
      subtitle: 'Track all updates, new features, bug fixes, and improvements in Gemini CLI. Stay informed about the latest changes and enhancements.',
      typesTitle: 'Change Types',
      helpTitle: 'Need upgrade help?',
      helpSubtitle: 'Check out our migration guide and documentation',
      migrationGuide: 'Migration Guide',
      documentation: 'Documentation',
      allReleases: 'All Releases',
      changeTypes: {
        feature: { label: 'New Feature', color: 'text-green-600 bg-green-100' },
        fix: { label: 'Bug Fix', color: 'text-red-600 bg-red-100' },
        improvement: { label: 'Improvement', color: 'text-blue-600 bg-blue-100' },
        security: { label: 'Security Update', color: 'text-purple-600 bg-purple-100' },
        breaking: { label: 'Breaking Change', color: 'text-orange-600 bg-orange-100' }
      },
      releases: []
    }
  }

  return content[locale as keyof typeof content] || content.en
}

export default async function LocaleChangelogPage({ params }: LocaleChangelogPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs/changelog')
  }

  // For English, redirect to main page to avoid duplication
  if (locale === 'en') {
    redirect('/docs/changelog')
  }

  const content = getContent(locale)
  const changeTypes = {
    feature: { icon: SparklesIcon, color: content.changeTypes.feature.color, label: content.changeTypes.feature.label },
    fix: { icon: BugAntIcon, color: content.changeTypes.fix.color, label: content.changeTypes.fix.label },
    improvement: { icon: RocketLaunchIcon, color: content.changeTypes.improvement.color, label: content.changeTypes.improvement.label },
    security: { icon: ShieldCheckIcon, color: content.changeTypes.security.color, label: content.changeTypes.security.label },
    breaking: { icon: ExclamationTriangleIcon, color: content.changeTypes.breaking.color, label: content.changeTypes.breaking.label }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {content.typesTitle}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(changeTypes).map(([key, type]) => (
              <div key={key} className="flex items-center space-x-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${type.color}`}>
                  <type.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-700">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Releases */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {content.releases.map((release, releaseIndex) => (
              <div key={release.version} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                {/* Release Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      v{release.version}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {release.status === 'latest' && (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {release.statusText}
                        </span>
                      )}
                      {release.status === 'stable' && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {release.statusText}
                        </span>
                      )}
                      {release.status === 'legacy' && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {release.statusText}
                        </span>
                      )}
                    </div>
                  </div>
                  <time className="text-sm text-gray-500">{release.date}</time>
                </div>

                {/* Changes */}
                <div className="space-y-6">
                  {release.changes.map((change, changeIndex) => {
                    const changeType = changeTypes[change.type as keyof typeof changeTypes]
                    return (
                      <div key={changeIndex} className="border-l-4 border-gray-200 pl-6">
                        <div className="flex items-start space-x-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${changeType.color} flex-shrink-0 mt-1`}>
                            <changeType.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {change.title}
                            </h3>
                            <p className="text-gray-700 mb-3">{change.description}</p>

                            {change.details && (
                              <ul className="space-y-1">
                                {change.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2 mt-2 flex-shrink-0"></span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Download Links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {locale === 'zh' ? '发布于' :
                       locale === 'hi' ? 'रिलीज़ की तारीख' :
                       locale === 'fr' ? 'Publié le' :
                       locale === 'de' ? 'Veröffentlicht am' :
                       locale === 'ja' ? 'リリース日' :
                       locale === 'ko' ? '출시일' :
                       locale === 'es' ? 'Publicado el' :
                       locale === 'ru' ? 'Выпущено' :
                       'Released on'} {release.date}
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        href={`https://github.com/google-gemini/gemini-cli/releases/tag/v${release.version}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                      >
                        {locale === 'zh' ? '在 GitHub 查看 →' :
                         locale === 'hi' ? 'GitHub पर देखें →' :
                         locale === 'fr' ? 'Voir sur GitHub →' :
                         locale === 'de' ? 'Auf GitHub ansehen →' :
                         locale === 'ja' ? 'GitHubで見る →' :
                         locale === 'ko' ? 'GitHub에서 보기 →' :
                         locale === 'es' ? 'Ver en GitHub →' :
                         locale === 'ru' ? 'Посмотреть на GitHub →' :
                         'View on GitHub →'}
                      </Link>
                      <Link
                        href={`https://www.npmjs.com/package/@google/generative-ai-cli/v/${release.version}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                      >
                        {locale === 'zh' ? '在 NPM 查看 →' :
                         locale === 'hi' ? 'NPM पर देखें →' :
                         locale === 'fr' ? 'Voir sur NPM →' :
                         locale === 'de' ? 'Auf NPM ansehen →' :
                         locale === 'ja' ? 'NPMで見る →' :
                         locale === 'ko' ? 'NPM에서 보기 →' :
                         locale === 'es' ? 'Ver en NPM →' :
                         locale === 'ru' ? 'Посмотреть на NPM →' :
                         'View on NPM →'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Migration Guide */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.helpTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content.helpSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/migration-guide`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {content.migrationGuide}
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {content.documentation}
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {content.allReleases}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for all locales including default for static export
  return locales.map((locale) => ({
    locale,
  }))
}
