'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

interface FAQContentProps {
  locale: string
}

export default function FAQContent({ locale }: FAQContentProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  // Get translations based on locale
  const getTranslations = (locale: string) => {
    const translations: Record<string, any> = {
      zh: {
        title: '常见问题解答',
        subtitle: '收集了 Gemini CLI 使用过程中的常见问题和解决方案，帮助您快速找到答案并解决问题。',
        quickNav: {
          title: '快速导航',
          subtitle: '没找到答案？试试这些资源',
          links: {
            installation: { title: '安装指南', desc: '详细的安装步骤' },
            guides: { title: '使用教程', desc: '从入门到进阶' },
            commands: { title: '命令参考', desc: '完整命令列表' },
            issues: { title: '报告问题', desc: 'GitHub Issues' }
          }
        },
        contact: {
          title: '还有其他问题？',
          subtitle: '如果您没有找到答案，欢迎通过以下方式联系我们',
          discussion: '社区讨论',
          submit: '提交问题'
        },
        faqData: [
          {
            category: '安装与设置',
            questions: [
              {
                q: '如何安装 Gemini CLI？',
                a: '确保已安装 Node.js 20+，然后使用 npx @google/generative-ai-cli 直接运行，或使用 npm install -g @google/generative-ai-cli 全局安装。'
              },
              {
                q: '安装时遇到权限错误怎么办？',
                a: 'Windows 用户以管理员身份运行，macOS/Linux 用户使用 sudo 或配置 npm 全局目录到用户目录。推荐使用 npx 避免权限问题。'
              },
              {
                q: '如何配置 Google 账户认证？',
                a: '运行 npx @google/generative-ai-cli auth，在浏览器中登录 Google 账户并授权访问，然后使用 auth status 验证认证状态。'
              }
            ]
          },
          {
            category: '使用问题',
            questions: [
              {
                q: '如何开始第一次对话？',
                a: '使用 npx @google/generative-ai-cli chat 开始交互式对话，或使用 ask "问题" 直接提问，也可以用 analyze 命令分析文件。'
              },
              {
                q: '支持哪些编程语言？',
                a: 'Gemini CLI 支持 JavaScript/TypeScript、Python、Java、C#、Go、Rust、PHP、Ruby 等主流编程语言，以及 HTML/CSS、SQL、Markdown 等。'
              },
              {
                q: '如何提高 AI 回答的质量？',
                a: '提供清晰的上下文，使用具体的问题描述，分步骤提问复杂问题，并验证和迭代生成的结果。'
              }
            ]
          },
          {
            category: '配置与自定义',
            questions: [
              {
                q: '如何自定义 CLI 配置？',
                a: '使用 config list 查看配置，config set 设置参数（如模型、温度、最大令牌数），config reset 重置到默认值。'
              },
              {
                q: '如何集成到现有工作流程？',
                a: '可以通过脚本集成、Git Hooks、CI/CD 流水线集成，或在编辑器中创建自定义快捷键和任务来使用。'
              },
              {
                q: '如何使用 MCP 协议扩展功能？',
                a: 'MCP 是标准化的 AI 模型通信协议，支持数据库查询、API 调用、文件操作等自定义工具集成。'
              }
            ]
          },
          {
            category: '故障排除',
            questions: [
              {
                q: '命令执行失败或无响应怎么办？',
                a: '检查网络连接，验证认证状态，更新到最新版本，清除 npm 缓存，使用 --verbose 查看详细错误信息。'
              },
              {
                q: 'API 配额或限制问题如何解决？',
                a: '了解限制类型，优化使用频率和提示精确度，在 Google AI Studio 查看使用情况，考虑升级付费计划。'
              },
              {
                q: '在企业环境中使用有什么注意事项？',
                a: '注意安全性（不包含敏感信息），配置网络代理，确保合规性，建立团队使用规范和最佳实践。'
              }
            ]
          }
        ]
      },
      en: {
        title: 'Frequently Asked Questions',
        subtitle: 'Common questions and solutions for using Gemini CLI. Find quick answers to help you resolve issues.',
        quickNav: {
          title: 'Quick Navigation',
          subtitle: 'Can\'t find an answer? Try these resources',
          links: {
            installation: { title: 'Installation Guide', desc: 'Detailed installation steps' },
            guides: { title: 'User Guides', desc: 'From beginner to advanced' },
            commands: { title: 'Command Reference', desc: 'Complete command list' },
            issues: { title: 'Report Issues', desc: 'GitHub Issues' }
          }
        },
        contact: {
          title: 'Have Other Questions?',
          subtitle: 'If you haven\'t found an answer, feel free to contact us through the following ways',
          discussion: 'Community Discussion',
          submit: 'Submit Issue'
        },
        faqData: [
          {
            category: 'Installation & Setup',
            questions: [
              {
                q: 'How to install Gemini CLI?',
                a: 'Ensure Node.js 20+ is installed, then use npx @google/generative-ai-cli to run directly, or npm install -g @google/generative-ai-cli for global installation.'
              },
              {
                q: 'What to do when encountering permission errors during installation?',
                a: 'Windows users should run as administrator, macOS/Linux users use sudo or configure npm global directory to user directory. Using npx is recommended to avoid permission issues.'
              },
              {
                q: 'How to configure Google account authentication?',
                a: 'Run npx @google/generative-ai-cli auth, log in to your Google account in the browser and authorize access, then use auth status to verify authentication status.'
              }
            ]
          },
          {
            category: 'Usage Issues',
            questions: [
              {
                q: 'How to start the first conversation?',
                a: 'Use npx @google/generative-ai-cli chat to start interactive conversation, or use ask "question" to ask directly, you can also use analyze command to analyze files.'
              },
              {
                q: 'Which programming languages are supported?',
                a: 'Gemini CLI supports mainstream programming languages like JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, as well as HTML/CSS, SQL, Markdown, etc.'
              },
              {
                q: 'How to improve AI response quality?',
                a: 'Provide clear context, use specific question descriptions, ask complex questions step by step, and verify and iterate generated results.'
              }
            ]
          },
          {
            category: 'Configuration & Customization',
            questions: [
              {
                q: 'How to customize CLI configuration?',
                a: 'Use config list to view configuration, config set to set parameters (like model, temperature, max tokens), config reset to reset to default values.'
              },
              {
                q: 'How to integrate into existing workflows?',
                a: 'Can be integrated through scripts, Git Hooks, CI/CD pipelines, or by creating custom shortcuts and tasks in editors.'
              },
              {
                q: 'How to use MCP protocol to extend functionality?',
                a: 'MCP is a standardized AI model communication protocol that supports custom tool integration like database queries, API calls, file operations.'
              }
            ]
          },
          {
            category: 'Troubleshooting',
            questions: [
              {
                q: 'What to do when commands fail or become unresponsive?',
                a: 'Check network connection, verify authentication status, update to latest version, clear npm cache, use --verbose to see detailed error information.'
              },
              {
                q: 'How to resolve API quota or limit issues?',
                a: 'Understand limit types, optimize usage frequency and prompt precision, check usage in Google AI Studio, consider upgrading to paid plans.'
              },
              {
                q: 'What are the considerations for enterprise use?',
                a: 'Pay attention to security (don\'t include sensitive information), configure network proxy, ensure compliance, establish team usage guidelines and best practices.'
              }
            ]
          }
        ]
      },
      hi: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        subtitle: 'Gemini CLI का उपयोग करने के लिए सामान्य प्रश्न और समाधान। समस्याओं को हल करने में मदद के लिए त्वरित उत्तर खोजें।',
        quickNav: {
          title: 'त्वरित नेविगेशन',
          subtitle: 'उत्तर नहीं मिला? इन संसाधनों को आज़माएं',
          links: {
            installation: { title: 'स्थापना गाइड', desc: 'विस्तृत स्थापना चरण' },
            guides: { title: 'उपयोगकर्ता गाइड', desc: 'शुरुआती से उन्नत तक' },
            commands: { title: 'कमांड संदर्भ', desc: 'पूर्ण कमांड सूची' },
            issues: { title: 'समस्या रिपोर्ट करें', desc: 'GitHub Issues' }
          }
        },
        contact: {
          title: 'अन्य प्रश्न हैं?',
          subtitle: 'यदि आपको उत्तर नहीं मिला है, तो निम्नलिखित तरीकों से हमसे संपर्क करने में संकोच न करें',
          discussion: 'समुदायिक चर्चा',
          submit: 'समस्या सबमिट करें'
        },
        faqData: [
          {
            category: 'स्थापना और सेटअप',
            questions: [
              {
                q: 'Gemini CLI कैसे स्थापित करें?',
                a: 'सुनिश्चित करें कि Node.js 20+ स्थापित है, फिर सीधे चलाने के लिए npx @google/generative-ai-cli का उपयोग करें, या वैश्विक स्थापना के लिए npm install -g @google/generative-ai-cli का उपयोग करें।'
              },
              {
                q: 'स्थापना के दौरान अनुमति त्रुटियों का सामना करने पर क्या करें?',
                a: 'Windows उपयोगकर्ताओं को व्यवस्थापक के रूप में चलाना चाहिए, macOS/Linux उपयोगकर्ता sudo का उपयोग करें या npm वैश्विक निर्देशिका को उपयोगकर्ता निर्देशिका में कॉन्फ़िगर करें। अनुमति समस्याओं से बचने के लिए npx का उपयोग करने की सिफारिश की जाती है।'
              },
              {
                q: 'Google खाता प्रमाणीकरण कैसे कॉन्फ़िगर करें?',
                a: 'npx @google/generative-ai-cli auth चलाएं, ब्राउज़र में अपने Google खाते में लॉग इन करें और पहुंच को अधिकृत करें, फिर प्रमाणीकरण स्थिति सत्यापित करने के लिए auth status का उपयोग करें।'
              }
            ]
          },
          {
            category: 'उपयोग की समस्याएं',
            questions: [
              {
                q: 'पहली बातचीत कैसे शुरू करें?',
                a: 'इंटरैक्टिव बातचीत शुरू करने के लिए npx @google/generative-ai-cli chat का उपयोग करें, या सीधे पूछने के लिए ask "प्रश्न" का उपयोग करें, आप फ़ाइलों का विश्लेषण करने के लिए analyze कमांड का भी उपयोग कर सकते हैं।'
              },
              {
                q: 'कौन सी प्रोग्रामिंग भाषाएं समर्थित हैं?',
                a: 'Gemini CLI मुख्यधारा की प्रोग्रामिंग भाषाओं जैसे JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby के साथ-साथ HTML/CSS, SQL, Markdown आदि का समर्थन करता है।'
              },
              {
                q: 'AI प्रतिक्रिया की गुणवत्ता कैसे सुधारें?',
                a: 'स्पष्ट संदर्भ प्रदान करें, विशिष्ट प्रश्न विवरण का उपयोग करें, जटिल प्रश्नों को चरणबद्ध तरीके से पूछें, और उत्पन्न परिणामों को सत्यापित और पुनरावृत्त करें।'
              }
            ]
          },
          {
            category: 'कॉन्फ़िगरेशन और अनुकूलन',
            questions: [
              {
                q: 'CLI कॉन्फ़िगरेशन को कैसे अनुकूलित करें?',
                a: 'कॉन्फ़िगरेशन देखने के लिए config list का उपयोग करें, पैरामीटर सेट करने के लिए config set (जैसे मॉडल, तापमान, अधिकतम टोकन), डिफ़ॉल्ट मानों पर रीसेट करने के लिए config reset का उपयोग करें।'
              },
              {
                q: 'मौजूदा वर्कफ़्लो में कैसे एकीकृत करें?',
                a: 'स्क्रिप्ट एकीकरण, Git Hooks, CI/CD पाइपलाइन एकीकरण के माध्यम से, या संपादकों में कस्टम शॉर्टकट और कार्य बनाकर एकीकृत किया जा सकता है।'
              },
              {
                q: 'कार्यक्षमता का विस्तार करने के लिए MCP प्रोटोकॉल का उपयोग कैसे करें?',
                a: 'MCP एक मानकीकृत AI मॉडल संचार प्रोटोकॉल है जो डेटाबेस क्वेरी, API कॉल, फ़ाइल ऑपरेशन जैसे कस्टम टूल एकीकरण का समर्थन करता है।'
              }
            ]
          },
          {
            category: 'समस्या निवारण',
            questions: [
              {
                q: 'जब कमांड विफल हो जाते हैं या अनुत्तरदायी हो जाते हैं तो क्या करें?',
                a: 'नेटवर्क कनेक्शन जांचें, प्रमाणीकरण स्थिति सत्यापित करें, नवीनतम संस्करण में अपडेट करें, npm कैश साफ़ करें, विस्तृत त्रुटि जानकारी देखने के लिए --verbose का उपयोग करें।'
              },
              {
                q: 'API कोटा या सीमा समस्याओं को कैसे हल करें?',
                a: 'सीमा प्रकारों को समझें, उपयोग आवृत्ति और प्रॉम्प्ट सटीकता को अनुकूलित करें, Google AI Studio में उपयोग की जांच करें, भुगतान योजनाओं में अपग्रेड करने पर विचार करें।'
              },
              {
                q: 'एंटरप्राइज़ उपयोग के लिए क्या विचार हैं?',
                a: 'सुरक्षा पर ध्यान दें (संवेदनशील जानकारी शामिल न करें), नेटवर्क प्रॉक्सी कॉन्फ़िगर करें, अनुपालन सुनिश्चित करें, टीम उपयोग दिशानिर्देश और सर्वोत्तम प्रथाएं स्थापित करें।'
              }
            ]
          }
        ]
      }
,
      fr: {
              "title": "Questions Fréquemment Posées",
              "subtitle": "Questions courantes et solutions pour utiliser Gemini CLI. Trouvez des réponses rapides pour vous aider à résoudre les problèmes.",
              "quickNav": {
                      "title": "Navigation Rapide",
                      "subtitle": "Vous ne trouvez pas de réponse ? Essayez ces ressources",
                      "links": {
                              "installation": {
                                      "title": "Guide d'Installation",
                                      "desc": "Étapes d'installation détaillées"
                              },
                              "guides": {
                                      "title": "Guides Utilisateur",
                                      "desc": "Du débutant à l'avancé"
                              },
                              "commands": {
                                      "title": "Référence des Commandes",
                                      "desc": "Liste complète des commandes"
                              },
                              "issues": {
                                      "title": "Signaler des Problèmes",
                                      "desc": "GitHub Issues"
                              }
                      }
              },
              "contact": {
                      "title": "Avez-vous d'Autres Questions ?",
                      "subtitle": "Si vous n'avez pas trouvé de réponse, n'hésitez pas à nous contacter par les moyens suivants",
                      "discussion": "Discussion Communautaire",
                      "submit": "Soumettre un Problème"
              },
              "faqData": [
                      {
                              "category": "Installation et Configuration",
                              "questions": [
                                      {
                                              "q": "Comment installer Gemini CLI ?",
                                              "a": "Assurez-vous que Node.js 20+ est installé, puis utilisez npx @google/generative-ai-cli pour exécuter directement, ou npm install -g @google/generative-ai-cli pour une installation globale."
                                      },
                                      {
                                              "q": "Que faire en cas d'erreurs de permissions lors de l'installation ?",
                                              "a": "Les utilisateurs Windows doivent exécuter en tant qu'administrateur, les utilisateurs macOS/Linux utilisent sudo ou configurent le répertoire global npm vers le répertoire utilisateur. L'utilisation de npx est recommandée pour éviter les problèmes de permissions."
                                      },
                                      {
                                              "q": "Comment configurer l'authentification du compte Google ?",
                                              "a": "Exécutez npx @google/generative-ai-cli auth, connectez-vous à votre compte Google dans le navigateur et autorisez l'accès, puis utilisez auth status pour vérifier le statut d'authentification."
                                      }
                              ]
                      },
                      {
                              "category": "Problèmes d'Utilisation",
                              "questions": [
                                      {
                                              "q": "Comment commencer la première conversation ?",
                                              "a": "Utilisez npx @google/generative-ai-cli chat pour commencer une conversation interactive, ou utilisez ask \"question\" pour poser directement, vous pouvez aussi utiliser la commande analyze pour analyser des fichiers."
                                      },
                                      {
                                              "q": "Quels langages de programmation sont supportés ?",
                                              "a": "Gemini CLI supporte les langages de programmation mainstream comme JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, ainsi que HTML/CSS, SQL, Markdown, etc."
                                      },
                                      {
                                              "q": "Comment améliorer la qualité des réponses IA ?",
                                              "a": "Fournissez un contexte clair, utilisez des descriptions de questions spécifiques, posez des questions complexes étape par étape, et vérifiez et itérez les résultats générés."
                                      }
                              ]
                      },
                      {
                              "category": "Configuration et Personnalisation",
                              "questions": [
                                      {
                                              "q": "Comment personnaliser la configuration CLI ?",
                                              "a": "Utilisez config list pour voir la configuration, config set pour définir les paramètres (comme le modèle, la température, les tokens max), config reset pour réinitialiser aux valeurs par défaut."
                                      },
                                      {
                                              "q": "Comment intégrer dans les flux de travail existants ?",
                                              "a": "Peut être intégré via l'intégration de scripts, Git Hooks, pipelines CI/CD, ou en créant des raccourcis personnalisés et des tâches dans les éditeurs."
                                      },
                                      {
                                              "q": "Comment utiliser le protocole MCP pour étendre les fonctionnalités ?",
                                              "a": "MCP est un protocole de communication de modèle IA standardisé qui supporte l'intégration d'outils personnalisés comme les requêtes de base de données, les appels d'API, les opérations de fichiers."
                                      }
                              ]
                      },
                      {
                              "category": "Dépannage",
                              "questions": [
                                      {
                                              "q": "Que faire quand les commandes échouent ou deviennent non réactives ?",
                                              "a": "Vérifiez la connexion réseau, vérifiez le statut d'authentification, mettez à jour vers la dernière version, videz le cache npm, utilisez --verbose pour voir les informations d'erreur détaillées."
                                      },
                                      {
                                              "q": "Comment résoudre les problèmes de quota ou de limite d'API ?",
                                              "a": "Comprenez les types de limites, optimisez la fréquence d'utilisation et la précision des prompts, vérifiez l'utilisation dans Google AI Studio, considérez la mise à niveau vers des plans payants."
                                      },
                                      {
                                              "q": "Quelles sont les considérations pour l'utilisation en entreprise ?",
                                              "a": "Attention à la sécurité (n'incluez pas d'informations sensibles), configurez le proxy réseau, assurez la conformité, établissez des directives d'utilisation d'équipe et les meilleures pratiques."
                                      }
                              ]
                      }
              ]
      },
      de: {
              "title": "Häufig Gestellte Fragen",
              "subtitle": "Häufige Fragen und Lösungen zur Verwendung von Gemini CLI. Finden Sie schnelle Antworten, um Probleme zu lösen.",
              "quickNav": {
                      "title": "Schnellnavigation",
                      "subtitle": "Keine Antwort gefunden? Versuchen Sie diese Ressourcen",
                      "links": {
                              "installation": {
                                      "title": "Installationsanleitung",
                                      "desc": "Detaillierte Installationsschritte"
                              },
                              "guides": {
                                      "title": "Benutzerhandbücher",
                                      "desc": "Von Anfänger bis Fortgeschritten"
                              },
                              "commands": {
                                      "title": "Befehlsreferenz",
                                      "desc": "Vollständige Befehlsliste"
                              },
                              "issues": {
                                      "title": "Probleme Melden",
                                      "desc": "GitHub Issues"
                              }
                      }
              },
              "contact": {
                      "title": "Haben Sie Andere Fragen?",
                      "subtitle": "Wenn Sie keine Antwort gefunden haben, zögern Sie nicht, uns über die folgenden Wege zu kontaktieren",
                      "discussion": "Community-Diskussion",
                      "submit": "Problem Einreichen"
              },
              "faqData": [
                      {
                              "category": "Installation und Einrichtung",
                              "questions": [
                                      {
                                              "q": "Wie installiert man Gemini CLI?",
                                              "a": "Stellen Sie sicher, dass Node.js 20+ installiert ist, verwenden Sie dann npx @google/generative-ai-cli für direkte Ausführung oder npm install -g @google/generative-ai-cli für globale Installation."
                                      },
                                      {
                                              "q": "Was tun bei Berechtigungsfehlern während der Installation?",
                                              "a": "Windows-Benutzer sollten als Administrator ausführen, macOS/Linux-Benutzer verwenden sudo oder konfigurieren das npm-Globalverzeichnis zum Benutzerverzeichnis. Die Verwendung von npx wird empfohlen, um Berechtigungsprobleme zu vermeiden."
                                      },
                                      {
                                              "q": "Wie konfiguriert man die Google-Konto-Authentifizierung?",
                                              "a": "Führen Sie npx @google/generative-ai-cli auth aus, melden Sie sich in Ihrem Google-Konto im Browser an und autorisieren Sie den Zugriff, verwenden Sie dann auth status zur Überprüfung des Authentifizierungsstatus."
                                      }
                              ]
                      },
                      {
                              "category": "Nutzungsprobleme",
                              "questions": [
                                      {
                                              "q": "Wie startet man das erste Gespräch?",
                                              "a": "Verwenden Sie npx @google/generative-ai-cli chat für interaktive Gespräche oder ask \"Frage\" für direkte Fragen, Sie können auch den analyze-Befehl zur Dateianalyse verwenden."
                                      },
                                      {
                                              "q": "Welche Programmiersprachen werden unterstützt?",
                                              "a": "Gemini CLI unterstützt Mainstream-Programmiersprachen wie JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby sowie HTML/CSS, SQL, Markdown usw."
                                      },
                                      {
                                              "q": "Wie verbessert man die Qualität der KI-Antworten?",
                                              "a": "Bieten Sie klaren Kontext, verwenden Sie spezifische Fragebeschreibungen, stellen Sie komplexe Fragen schrittweise und überprüfen und iterieren Sie generierte Ergebnisse."
                                      }
                              ]
                      },
                      {
                              "category": "Konfiguration und Anpassung",
                              "questions": [
                                      {
                                              "q": "Wie passt man die CLI-Konfiguration an?",
                                              "a": "Verwenden Sie config list zur Anzeige der Konfiguration, config set zum Setzen von Parametern (wie Modell, Temperatur, Max-Token), config reset zum Zurücksetzen auf Standardwerte."
                                      },
                                      {
                                              "q": "Wie integriert man in bestehende Workflows?",
                                              "a": "Kann über Skript-Integration, Git Hooks, CI/CD-Pipelines integriert werden oder durch Erstellen benutzerdefinierter Verknüpfungen und Aufgaben in Editoren."
                                      },
                                      {
                                              "q": "Wie verwendet man das MCP-Protokoll zur Funktionserweiterung?",
                                              "a": "MCP ist ein standardisiertes KI-Modell-Kommunikationsprotokoll, das benutzerdefinierte Tool-Integration wie Datenbankabfragen, API-Aufrufe, Dateioperationen unterstützt."
                                      }
                              ]
                      },
                      {
                              "category": "Fehlerbehebung",
                              "questions": [
                                      {
                                              "q": "Was tun, wenn Befehle fehlschlagen oder nicht reagieren?",
                                              "a": "Überprüfen Sie die Netzwerkverbindung, verifizieren Sie den Authentifizierungsstatus, aktualisieren Sie auf die neueste Version, leeren Sie den npm-Cache, verwenden Sie --verbose für detaillierte Fehlerinformationen."
                                      },
                                      {
                                              "q": "Wie löst man API-Kontingent- oder Limitprobleme?",
                                              "a": "Verstehen Sie Limittypen, optimieren Sie Nutzungshäufigkeit und Prompt-Präzision, überprüfen Sie die Nutzung in Google AI Studio, erwägen Sie ein Upgrade auf kostenpflichtige Pläne."
                                      },
                                      {
                                              "q": "Was sind die Überlegungen für den Unternehmenseinsatz?",
                                              "a": "Achten Sie auf Sicherheit (keine sensiblen Informationen einschließen), konfigurieren Sie Netzwerk-Proxy, stellen Sie Compliance sicher, etablieren Sie Team-Nutzungsrichtlinien und Best Practices."
                                      }
                              ]
                      }
              ]
      }
,
      ja: {
              "title": "よくある質問",
              "subtitle": "Gemini CLIの使用に関する一般的な質問と解決策。問題解決に役立つ迅速な回答を見つけてください。",
              "quickNav": {
                      "title": "クイックナビゲーション",
                      "subtitle": "答えが見つかりませんか？これらのリソースをお試しください",
                      "links": {
                              "installation": {
                                      "title": "インストールガイド",
                                      "desc": "詳細なインストール手順"
                              },
                              "guides": {
                                      "title": "ユーザーガイド",
                                      "desc": "初心者から上級者まで"
                              },
                              "commands": {
                                      "title": "コマンドリファレンス",
                                      "desc": "完全なコマンドリスト"
                              },
                              "issues": {
                                      "title": "問題を報告",
                                      "desc": "GitHub Issues"
                              }
                      }
              },
              "contact": {
                      "title": "他にご質問はありますか？",
                      "subtitle": "回答が見つからない場合は、以下の方法でお気軽にお問い合わせください",
                      "discussion": "コミュニティディスカッション",
                      "submit": "問題を提出"
              },
              "faqData": [
                      {
                              "category": "インストールとセットアップ",
                              "questions": [
                                      {
                                              "q": "Gemini CLIをインストールするには？",
                                              "a": "Node.js 20+がインストールされていることを確認し、直接実行するためにnpx @google/generative-ai-cliを使用するか、グローバルインストールのためにnpm install -g @google/generative-ai-cliを使用してください。"
                                      },
                                      {
                                              "q": "インストール中に権限エラーが発生した場合の対処法は？",
                                              "a": "Windowsユーザーは管理者として実行し、macOS/Linuxユーザーはsudoを使用するか、npmグローバルディレクトリをユーザーディレクトリに設定してください。権限問題を避けるためにnpxの使用が推奨されます。"
                                      },
                                      {
                                              "q": "Googleアカウント認証を設定するには？",
                                              "a": "npx @google/generative-ai-cli authを実行し、ブラウザでGoogleアカウントにログインしてアクセスを承認し、auth statusを使用して認証状態を確認してください。"
                                      }
                              ]
                      },
                      {
                              "category": "使用上の問題",
                              "questions": [
                                      {
                                              "q": "最初の会話を始めるには？",
                                              "a": "インタラクティブな会話を開始するためにnpx @google/generative-ai-cli chatを使用するか、直接質問するためにask \"質問\"を使用し、ファイルを分析するためにanalyzeコマンドも使用できます。"
                                      },
                                      {
                                              "q": "どのプログラミング言語がサポートされていますか？",
                                              "a": "Gemini CLIは、JavaScript/TypeScript、Python、Java、C#、Go、Rust、PHP、Rubyなどの主流プログラミング言語、およびHTML/CSS、SQL、Markdownなどをサポートしています。"
                                      },
                                      {
                                              "q": "AI応答の品質を向上させるには？",
                                              "a": "明確なコンテキストを提供し、具体的な質問記述を使用し、複雑な質問を段階的に尋ね、生成された結果を検証し反復してください。"
                                      }
                              ]
                      },
                      {
                              "category": "設定とカスタマイズ",
                              "questions": [
                                      {
                                              "q": "CLI設定をカスタマイズするには？",
                                              "a": "設定を表示するためにconfig listを使用し、パラメータを設定するためにconfig set（モデル、温度、最大トークンなど）を使用し、デフォルト値にリセットするためにconfig resetを使用してください。"
                                      },
                                      {
                                              "q": "既存のワークフローに統合するには？",
                                              "a": "スクリプト統合、Git Hooks、CI/CDパイプライン統合を通じて、またはエディタでカスタムショートカットとタスクを作成することで統合できます。"
                                      },
                                      {
                                              "q": "機能を拡張するためにMCPプロトコルを使用するには？",
                                              "a": "MCPは標準化されたAIモデル通信プロトコルで、データベースクエリ、API呼び出し、ファイル操作などのカスタムツール統合をサポートします。"
                                      }
                              ]
                      },
                      {
                              "category": "トラブルシューティング",
                              "questions": [
                                      {
                                              "q": "コマンドが失敗したり応答しなくなったりした場合の対処法は？",
                                              "a": "ネットワーク接続を確認し、認証状態を検証し、最新バージョンに更新し、npmキャッシュをクリアし、詳細なエラー情報を見るために--verboseを使用してください。"
                                      },
                                      {
                                              "q": "APIクォータや制限の問題を解決するには？",
                                              "a": "制限タイプを理解し、使用頻度とプロンプトの精度を最適化し、Google AI Studioで使用状況を確認し、有料プランへのアップグレードを検討してください。"
                                      },
                                      {
                                              "q": "エンタープライズ使用での考慮事項は？",
                                              "a": "セキュリティに注意し（機密情報を含めない）、ネットワークプロキシを設定し、コンプライアンスを確保し、チーム使用ガイドラインとベストプラクティスを確立してください。"
                                      }
                              ]
                      }
              ]
      },
      ko: {
              "title": "자주 묻는 질문",
              "subtitle": "Gemini CLI 사용에 대한 일반적인 질문과 해결책. 문제 해결에 도움이 되는 빠른 답변을 찾아보세요.",
              "quickNav": {
                      "title": "빠른 탐색",
                      "subtitle": "답을 찾지 못하셨나요? 이 리소스들을 시도해보세요",
                      "links": {
                              "installation": {
                                      "title": "설치 가이드",
                                      "desc": "자세한 설치 단계"
                              },
                              "guides": {
                                      "title": "사용자 가이드",
                                      "desc": "초급부터 고급까지"
                              },
                              "commands": {
                                      "title": "명령어 참조",
                                      "desc": "완전한 명령어 목록"
                              },
                              "issues": {
                                      "title": "문제 신고",
                                      "desc": "GitHub Issues"
                              }
                      }
              },
              "contact": {
                      "title": "다른 질문이 있으신가요?",
                      "subtitle": "답변을 찾지 못하셨다면, 다음 방법으로 언제든지 문의해 주세요",
                      "discussion": "커뮤니티 토론",
                      "submit": "문제 제출"
              },
              "faqData": [
                      {
                              "category": "설치 및 설정",
                              "questions": [
                                      {
                                              "q": "Gemini CLI를 설치하는 방법은?",
                                              "a": "Node.js 20+가 설치되어 있는지 확인한 후, 직접 실행하려면 npx @google/generative-ai-cli를 사용하거나, 전역 설치를 위해 npm install -g @google/generative-ai-cli를 사용하세요."
                                      },
                                      {
                                              "q": "설치 중 권한 오류가 발생할 때 어떻게 해야 하나요?",
                                              "a": "Windows 사용자는 관리자 권한으로 실행하고, macOS/Linux 사용자는 sudo를 사용하거나 npm 전역 디렉토리를 사용자 디렉토리로 구성하세요. 권한 문제를 피하기 위해 npx 사용을 권장합니다."
                                      },
                                      {
                                              "q": "Google 계정 인증을 구성하는 방법은?",
                                              "a": "npx @google/generative-ai-cli auth를 실행하고, 브라우저에서 Google 계정에 로그인하여 액세스를 승인한 후, auth status를 사용하여 인증 상태를 확인하세요."
                                      }
                              ]
                      },
                      {
                              "category": "사용 문제",
                              "questions": [
                                      {
                                              "q": "첫 번째 대화를 시작하는 방법은?",
                                              "a": "대화형 대화를 시작하려면 npx @google/generative-ai-cli chat을 사용하거나, 직접 질문하려면 ask \"질문\"을 사용하고, 파일을 분석하려면 analyze 명령을 사용할 수도 있습니다."
                                      },
                                      {
                                              "q": "어떤 프로그래밍 언어가 지원되나요?",
                                              "a": "Gemini CLI는 JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby와 같은 주류 프로그래밍 언어와 HTML/CSS, SQL, Markdown 등을 지원합니다."
                                      },
                                      {
                                              "q": "AI 응답 품질을 향상시키는 방법은?",
                                              "a": "명확한 컨텍스트를 제공하고, 구체적인 질문 설명을 사용하며, 복잡한 질문을 단계별로 나누어 묻고, 생성된 결과를 검증하고 반복하세요."
                                      }
                              ]
                      },
                      {
                              "category": "구성 및 사용자 정의",
                              "questions": [
                                      {
                                              "q": "CLI 구성을 사용자 정의하는 방법은?",
                                              "a": "구성을 보려면 config list를 사용하고, 매개변수를 설정하려면 config set(모델, 온도, 최대 토큰 등)을 사용하며, 기본값으로 재설정하려면 config reset을 사용하세요."
                                      },
                                      {
                                              "q": "기존 워크플로우에 통합하는 방법은?",
                                              "a": "스크립트 통합, Git Hooks, CI/CD 파이프라인 통합을 통해 또는 편집기에서 사용자 정의 단축키와 작업을 생성하여 통합할 수 있습니다."
                                      },
                                      {
                                              "q": "기능을 확장하기 위해 MCP 프로토콜을 사용하는 방법은?",
                                              "a": "MCP는 데이터베이스 쿼리, API 호출, 파일 작업과 같은 사용자 정의 도구 통합을 지원하는 표준화된 AI 모델 통신 프로토콜입니다."
                                      }
                              ]
                      },
                      {
                              "category": "문제 해결",
                              "questions": [
                                      {
                                              "q": "명령이 실패하거나 응답하지 않을 때 어떻게 해야 하나요?",
                                              "a": "네트워크 연결을 확인하고, 인증 상태를 검증하며, 최신 버전으로 업데이트하고, npm 캐시를 지우며, 자세한 오류 정보를 보려면 --verbose를 사용하세요."
                                      },
                                      {
                                              "q": "API 할당량이나 제한 문제를 해결하는 방법은?",
                                              "a": "제한 유형을 이해하고, 사용 빈도와 프롬프트 정확도를 최적화하며, Google AI Studio에서 사용량을 확인하고, 유료 플랜으로 업그레이드를 고려하세요."
                                      },
                                      {
                                              "q": "기업 환경에서 사용할 때의 고려사항은?",
                                              "a": "보안에 주의하고(민감한 정보 포함 금지), 네트워크 프록시를 구성하며, 규정 준수를 보장하고, 팀 사용 가이드라인과 모범 사례를 수립하세요."
                                      }
                              ]
                      }
              ]
      }
,
      es: {
              "title": "Preguntas Frecuentes",
              "subtitle": "Preguntas comunes y soluciones para usar Gemini CLI. Encuentra respuestas rápidas para ayudarte a resolver problemas.",
              "quickNav": {
                      "title": "Navegación Rápida",
                      "subtitle": "¿No encuentras una respuesta? Prueba estos recursos",
                      "links": {
                              "installation": {
                                      "title": "Guía de Instalación",
                                      "desc": "Pasos de instalación detallados"
                              },
                              "guides": {
                                      "title": "Guías de Usuario",
                                      "desc": "De principiante a avanzado"
                              },
                              "commands": {
                                      "title": "Referencia de Comandos",
                                      "desc": "Lista completa de comandos"
                              },
                              "issues": {
                                      "title": "Reportar Problemas",
                                      "desc": "GitHub Issues"
                              }
                      }
              },
              "contact": {
                      "title": "¿Tienes Otras Preguntas?",
                      "subtitle": "Si no has encontrado una respuesta, no dudes en contactarnos a través de los siguientes medios",
                      "discussion": "Discusión Comunitaria",
                      "submit": "Enviar Problema"
              },
              "faqData": [
                      {
                              "category": "Instalación y Configuración",
                              "questions": [
                                      {
                                              "q": "¿Cómo instalar Gemini CLI?",
                                              "a": "Asegúrate de que Node.js 20+ esté instalado, luego usa npx @google/generative-ai-cli para ejecutar directamente, o npm install -g @google/generative-ai-cli para instalación global."
                                      },
                                      {
                                              "q": "¿Qué hacer cuando se encuentran errores de permisos durante la instalación?",
                                              "a": "Los usuarios de Windows deben ejecutar como administrador, los usuarios de macOS/Linux usan sudo o configuran el directorio global de npm al directorio del usuario. Se recomienda usar npx para evitar problemas de permisos."
                                      },
                                      {
                                              "q": "¿Cómo configurar la autenticación de cuenta de Google?",
                                              "a": "Ejecuta npx @google/generative-ai-cli auth, inicia sesión en tu cuenta de Google en el navegador y autoriza el acceso, luego usa auth status para verificar el estado de autenticación."
                                      }
                              ]
                      },
                      {
                              "category": "Problemas de Uso",
                              "questions": [
                                      {
                                              "q": "¿Cómo iniciar la primera conversación?",
                                              "a": "Usa npx @google/generative-ai-cli chat para iniciar conversación interactiva, o usa ask \"pregunta\" para preguntar directamente, también puedes usar el comando analyze para analizar archivos."
                                      },
                                      {
                                              "q": "¿Qué lenguajes de programación son compatibles?",
                                              "a": "Gemini CLI soporta lenguajes de programación principales como JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, así como HTML/CSS, SQL, Markdown, etc."
                                      },
                                      {
                                              "q": "¿Cómo mejorar la calidad de las respuestas de IA?",
                                              "a": "Proporciona contexto claro, usa descripciones específicas de preguntas, haz preguntas complejas paso a paso, y verifica e itera los resultados generados."
                                      }
                              ]
                      },
                      {
                              "category": "Configuración y Personalización",
                              "questions": [
                                      {
                                              "q": "¿Cómo personalizar la configuración de CLI?",
                                              "a": "Usa config list para ver la configuración, config set para establecer parámetros (como modelo, temperatura, tokens máximos), config reset para restablecer a valores predeterminados."
                                      },
                                      {
                                              "q": "¿Cómo integrar en flujos de trabajo existentes?",
                                              "a": "Puede integrarse a través de integración de scripts, Git Hooks, pipelines CI/CD, o creando atajos personalizados y tareas en editores."
                                      },
                                      {
                                              "q": "¿Cómo usar el protocolo MCP para extender funcionalidad?",
                                              "a": "MCP es un protocolo de comunicación de modelo de IA estandarizado que soporta integración de herramientas personalizadas como consultas de base de datos, llamadas de API, operaciones de archivos."
                                      }
                              ]
                      },
                      {
                              "category": "Solución de Problemas",
                              "questions": [
                                      {
                                              "q": "¿Qué hacer cuando los comandos fallan o no responden?",
                                              "a": "Verifica la conexión de red, verifica el estado de autenticación, actualiza a la última versión, limpia la caché de npm, usa --verbose para ver información detallada de errores."
                                      },
                                      {
                                              "q": "¿Cómo resolver problemas de cuota o límite de API?",
                                              "a": "Entiende los tipos de límites, optimiza la frecuencia de uso y precisión de prompts, verifica el uso en Google AI Studio, considera actualizar a planes de pago."
                                      },
                                      {
                                              "q": "¿Cuáles son las consideraciones para uso empresarial?",
                                              "a": "Presta atención a la seguridad (no incluyas información sensible), configura proxy de red, asegura el cumplimiento, establece pautas de uso del equipo y mejores prácticas."
                                      }
                              ]
                      }
              ]
      },
      ru: {
              "title": "Часто Задаваемые Вопросы",
              "subtitle": "Общие вопросы и решения по использованию Gemini CLI. Найдите быстрые ответы, которые помогут решить проблемы.",
              "quickNav": {
                      "title": "Быстрая Навигация",
                      "subtitle": "Не нашли ответ? Попробуйте эти ресурсы",
                      "links": {
                              "installation": {
                                      "title": "Руководство по Установке",
                                      "desc": "Подробные шаги установки"
                              },
                              "guides": {
                                      "title": "Руководства Пользователя",
                                      "desc": "От новичка до продвинутого"
                              },
                              "commands": {
                                      "title": "Справочник Команд",
                                      "desc": "Полный список команд"
                              },
                              "issues": {
                                      "title": "Сообщить о Проблеме",
                                      "desc": "GitHub Issues"
                              }
                      }
              },
              "contact": {
                      "title": "Есть Другие Вопросы?",
                      "subtitle": "Если вы не нашли ответ, не стесняйтесь обращаться к нам следующими способами",
                      "discussion": "Обсуждение в Сообществе",
                      "submit": "Отправить Проблему"
              },
              "faqData": [
                      {
                              "category": "Установка и Настройка",
                              "questions": [
                                      {
                                              "q": "Как установить Gemini CLI?",
                                              "a": "Убедитесь, что Node.js 20+ установлен, затем используйте npx @google/generative-ai-cli для прямого запуска, или npm install -g @google/generative-ai-cli для глобальной установки."
                                      },
                                      {
                                              "q": "Что делать при возникновении ошибок разрешений во время установки?",
                                              "a": "Пользователи Windows должны запускать от имени администратора, пользователи macOS/Linux используют sudo или настраивают глобальную директорию npm в пользовательскую директорию. Рекомендуется использовать npx для избежания проблем с разрешениями."
                                      },
                                      {
                                              "q": "Как настроить аутентификацию аккаунта Google?",
                                              "a": "Запустите npx @google/generative-ai-cli auth, войдите в свой аккаунт Google в браузере и авторизуйте доступ, затем используйте auth status для проверки статуса аутентификации."
                                      }
                              ]
                      },
                      {
                              "category": "Проблемы Использования",
                              "questions": [
                                      {
                                              "q": "Как начать первый разговор?",
                                              "a": "Используйте npx @google/generative-ai-cli chat для начала интерактивного разговора, или используйте ask \"вопрос\" для прямого вопроса, также можете использовать команду analyze для анализа файлов."
                                      },
                                      {
                                              "q": "Какие языки программирования поддерживаются?",
                                              "a": "Gemini CLI поддерживает основные языки программирования, такие как JavaScript/TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, а также HTML/CSS, SQL, Markdown и др."
                                      },
                                      {
                                              "q": "Как улучшить качество ответов ИИ?",
                                              "a": "Предоставляйте четкий контекст, используйте конкретные описания вопросов, задавайте сложные вопросы пошагово, и проверяйте и итерируйте сгенерированные результаты."
                                      }
                              ]
                      },
                      {
                              "category": "Конфигурация и Настройка",
                              "questions": [
                                      {
                                              "q": "Как настроить конфигурацию CLI?",
                                              "a": "Используйте config list для просмотра конфигурации, config set для установки параметров (таких как модель, температура, максимальные токены), config reset для сброса к значениям по умолчанию."
                                      },
                                      {
                                              "q": "Как интегрировать в существующие рабочие процессы?",
                                              "a": "Может быть интегрирован через интеграцию скриптов, Git Hooks, CI/CD пайплайны, или создавая пользовательские ярлыки и задачи в редакторах."
                                      },
                                      {
                                              "q": "Как использовать протокол MCP для расширения функциональности?",
                                              "a": "MCP - это стандартизированный протокол связи с моделями ИИ, который поддерживает интеграцию пользовательских инструментов, таких как запросы к базе данных, вызовы API, операции с файлами."
                                      }
                              ]
                      },
                      {
                              "category": "Устранение Неполадок",
                              "questions": [
                                      {
                                              "q": "Что делать, когда команды не выполняются или не отвечают?",
                                              "a": "Проверьте сетевое подключение, проверьте статус аутентификации, обновите до последней версии, очистите кэш npm, используйте --verbose для просмотра подробной информации об ошибках."
                                      },
                                      {
                                              "q": "Как решить проблемы с квотой или ограничениями API?",
                                              "a": "Поймите типы ограничений, оптимизируйте частоту использования и точность промптов, проверьте использование в Google AI Studio, рассмотрите обновление до платных планов."
                                      },
                                      {
                                              "q": "Какие соображения для корпоративного использования?",
                                              "a": "Обратите внимание на безопасность (не включайте конфиденциальную информацию), настройте сетевой прокси, обеспечьте соответствие требованиям, установите руководящие принципы использования команды и лучшие практики."
                                      }
                              ]
                      }
              ]
      }
    }
    return translations[locale as keyof typeof translations] || translations.en
  }

  const t = getTranslations(locale)

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onToggle: () => void
  }

  function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
      <div className="border border-gray-200 rounded-lg">
        <button
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          onClick={onToggle}
        >
          <span className="text-lg font-medium text-gray-900">{question}</span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
          )}
        </button>
        {isOpen && (
          <div className="px-6 pb-4">
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.quickNav.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.quickNav.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link
              href="/installation"
              className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-blue-900">{t.quickNav.links.installation.title}</h3>
              <p className="text-sm text-blue-700 mt-2">{t.quickNav.links.installation.desc}</p>
            </Link>
            <Link
              href="/guides"
              className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-green-900">{t.quickNav.links.guides.title}</h3>
              <p className="text-sm text-green-700 mt-2">{t.quickNav.links.guides.desc}</p>
            </Link>
            <Link
              href="/commands"
              className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-purple-900">{t.quickNav.links.commands.title}</h3>
              <p className="text-sm text-purple-700 mt-2">{t.quickNav.links.commands.desc}</p>
            </Link>
            <Link
              href="https://github.com/google-gemini/gemini-cli/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">{t.quickNav.links.issues.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{t.quickNav.links.issues.desc}</p>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {t.faqData.map((category: any, categoryIndex: number) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq: any, questionIndex: number) => (
                    <FAQItem
                      key={questionIndex}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openItems[`${categoryIndex}-${questionIndex}`] || false}
                      onToggle={() => toggleItem(categoryIndex, questionIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.contact.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/google-gemini/gemini-cli/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {t.contact.discussion}
              </Link>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {t.contact.submit}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
