import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ExclamationTriangleIcon,
  BugAntIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  CloudIcon,
  CogIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '故障排除 - Gemini CLI 文档',
    en: 'Troubleshooting - Gemini CLI Documentation',
    hi: 'समस्या निवारण - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Dépannage - Documentation Gemini CLI',
    de: 'Fehlerbehebung - Gemini CLI Dokumentation',
    ja: 'トラブルシューティング - Gemini CLI ドキュメント',
    ko: '문제 해결 - Gemini CLI 문서',
    es: 'Solución de Problemas - Documentación Gemini CLI',
    ru: 'Устранение неполадок - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Gemini CLI 常见问题和常见问题解答的解决方案，包括安装问题、API 错误、配置问题和性能优化。',
    en: 'Solutions to common problems and FAQs for Gemini CLI including installation issues, API errors, configuration problems, and performance optimization.',
    hi: 'इंस्टॉलेशन समस्याओं, API त्रुटियों, कॉन्फ़िगरेशन समस्याओं और प्रदर्शन अनुकूलन सहित Gemini CLI के लिए सामान्य समस्याओं और FAQ के समाधान।',
    fr: 'Solutions aux problèmes courants et FAQ pour Gemini CLI, y compris les problèmes d\'installation, les erreurs d\'API, les problèmes de configuration et l\'optimisation des performances.',
    de: 'Lösungen für häufige Probleme und FAQs für Gemini CLI, einschließlich Installationsproblemen, API-Fehlern, Konfigurationsproblemen und Leistungsoptimierung.',
    ja: 'インストールの問題、API エラー、設定の問題、パフォーマンスの最適化を含む、Gemini CLI の一般的な問題と FAQ の解決策。',
    ko: '설치 문제, API 오류, 구성 문제 및 성능 최적화를 포함한 Gemini CLI의 일반적인 문제 및 FAQ에 대한 솔루션.',
    es: 'Soluciones a problemas comunes y preguntas frecuentes para Gemini CLI, incluyendo problemas de instalación, errores de API, problemas de configuración y optimización del rendimiento.',
    ru: 'Решения распространенных проблем и часто задаваемых вопросов для Gemini CLI, включая проблемы установки, ошибки API, проблемы конфигурации и оптимизацию производительности.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 故障排除, 常见问题, FAQ, 安装问题, API 错误, 配置, 性能' : 'Gemini CLI troubleshooting, common problems, FAQ, installation issues, API errors, configuration, performance',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const troubleshootingCategories = [
  {
    id: 'installation',
    title: {
      zh: '安装问题',
      en: 'Installation Issues',
      hi: 'इंस्टॉलेशन समस्याएं',
      fr: 'Problèmes d\'Installation',
      de: 'Installationsprobleme',
      ja: 'インストールの問題',
      ko: '설치 문제',
      es: 'Problemas de Instalación',
      ru: 'Проблемы установки'
    },
    description: {
      zh: '安装和设置过程中的问题',
      en: 'Problems during installation and setup',
      hi: 'इंस्टॉलेशन और सेटअप के दौरान समस्याएं',
      fr: 'Problèmes lors de l\'installation et de la configuration',
      de: 'Probleme bei Installation und Einrichtung',
      ja: 'インストールとセットアップ中の問題',
      ko: '설치 및 설정 중 문제',
      es: 'Problemas durante la instalación y configuración',
      ru: 'Проблемы при установке и настройке'
    },
    icon: CommandLineIcon,
    color: 'from-blue-500 to-indigo-600',
    issues: [
      {
        problem: {
          zh: 'npm install 因权限错误失败',
          en: 'npm install fails with permission errors',
          hi: 'npm install अनुमति त्रुटियों के साथ विफल हो जाता है',
          fr: 'npm install échoue avec des erreurs de permission',
          de: 'npm install schlägt mit Berechtigungsfehlern fehl',
          ja: 'npm install が権限エラーで失敗する',
          ko: 'npm install이 권한 오류로 실패함',
          es: 'npm install falla con errores de permisos',
          ru: 'npm install завершается с ошибками разрешений'
        },
        solution: {
          zh: '使用带有 --global 标志的 npm 或配置 npm 使用不同的目录。在 macOS/Linux 上，您可能需要使用 sudo 或正确配置 npm。',
          en: 'Use npm with --global flag or configure npm to use a different directory. On macOS/Linux, you may need to use sudo or configure npm properly.',
          hi: '--global फ्लैग के साथ npm का उपयोग करें या npm को अलग डायरेक्टरी उपयोग करने के लिए कॉन्फ़िगर करें। macOS/Linux पर, आपको sudo का उपयोग करना पड़ सकता है या npm को सही तरीके से कॉन्फ़िगर करना पड़ सकता है।',
          fr: 'Utilisez npm avec le flag --global ou configurez npm pour utiliser un répertoire différent. Sur macOS/Linux, vous devrez peut-être utiliser sudo ou configurer npm correctement.',
          de: 'Verwenden Sie npm mit dem --global Flag oder konfigurieren Sie npm für ein anderes Verzeichnis. Auf macOS/Linux müssen Sie möglicherweise sudo verwenden oder npm ordnungsgemäß konfigurieren.',
          ja: '--global フラグ付きで npm を使用するか、npm を別のディレクトリを使用するように設定します。macOS/Linux では、sudo を使用するか npm を適切に設定する必要があります。',
          ko: '--global 플래그와 함께 npm을 사용하거나 npm이 다른 디렉토리를 사용하도록 구성하세요. macOS/Linux에서는 sudo를 사용하거나 npm을 올바르게 구성해야 할 수 있습니다.',
          es: 'Use npm con la bandera --global o configure npm para usar un directorio diferente. En macOS/Linux, es posible que necesite usar sudo o configurar npm correctamente.',
          ru: 'Используйте npm с флагом --global или настройте npm для использования другого каталога. На macOS/Linux вам может потребоваться использовать sudo или правильно настроить npm.'
        },
        code: 'npm install -g @google/generative-ai-cli'
      },
      {
        problem: {
          zh: '安装后找不到命令',
          en: 'Command not found after installation',
          hi: 'इंस्टॉलेशन के बाद कमांड नहीं मिला',
          fr: 'Commande introuvable après l\'installation',
          de: 'Befehl nach Installation nicht gefunden',
          ja: 'インストール後にコマンドが見つからない',
          ko: '설치 후 명령을 찾을 수 없음',
          es: 'Comando no encontrado después de la instalación',
          ru: 'Команда не найдена после установки'
        },
        solution: {
          zh: '确保 npm 全局 bin 目录在您的 PATH 中。使用 `npm config get prefix` 检查并将 bin 目录添加到您的 PATH。',
          en: 'Ensure npm global bin directory is in your PATH. Check with `npm config get prefix` and add the bin directory to your PATH.',
          hi: 'सुनिश्चित करें कि npm ग्लोबल bin डायरेक्टरी आपके PATH में है। `npm config get prefix` से जांचें और bin डायरेक्टरी को अपने PATH में जोड़ें।',
          fr: 'Assurez-vous que le répertoire bin global npm est dans votre PATH. Vérifiez avec `npm config get prefix` et ajoutez le répertoire bin à votre PATH.',
          de: 'Stellen Sie sicher, dass das npm global bin-Verzeichnis in Ihrem PATH ist. Überprüfen Sie mit `npm config get prefix` und fügen Sie das bin-Verzeichnis zu Ihrem PATH hinzu.',
          ja: 'npm グローバル bin ディレクトリが PATH に含まれていることを確認してください。`npm config get prefix` で確認し、bin ディレクトリを PATH に追加してください。',
          ko: 'npm 글로벌 bin 디렉토리가 PATH에 있는지 확인하세요. `npm config get prefix`로 확인하고 bin 디렉토리를 PATH에 추가하세요.',
          es: 'Asegúrese de que el directorio bin global de npm esté en su PATH. Verifique con `npm config get prefix` y agregue el directorio bin a su PATH.',
          ru: 'Убедитесь, что глобальный каталог bin npm находится в вашем PATH. Проверьте с помощью `npm config get prefix` и добавьте каталог bin в ваш PATH.'
        },
        code: 'export PATH=$PATH:$(npm config get prefix)/bin'
      },
      {
        problem: {
          zh: 'Node.js 版本兼容性问题',
          en: 'Node.js version compatibility issues',
          hi: 'Node.js संस्करण संगतता समस्याएं',
          fr: 'Problèmes de compatibilité de version Node.js',
          de: 'Node.js Versionskompatibilitätsprobleme',
          ja: 'Node.js バージョン互換性の問題',
          ko: 'Node.js 버전 호환성 문제',
          es: 'Problemas de compatibilidad de versión Node.js',
          ru: 'Проблемы совместимости версий Node.js'
        },
        solution: {
          zh: 'Gemini CLI 需要 Node.js 16 或更高版本。使用 nvm 更新 Node.js 或从 nodejs.org 下载。',
          en: 'Gemini CLI requires Node.js 16 or higher. Update Node.js using nvm or download from nodejs.org.',
          hi: 'Gemini CLI को Node.js 16 या उससे अधिक की आवश्यकता है। nvm का उपयोग करके Node.js अपडेट करें या nodejs.org से डाउनलोड करें।',
          fr: 'Gemini CLI nécessite Node.js 16 ou supérieur. Mettez à jour Node.js en utilisant nvm ou téléchargez depuis nodejs.org.',
          de: 'Gemini CLI erfordert Node.js 16 oder höher. Aktualisieren Sie Node.js mit nvm oder laden Sie es von nodejs.org herunter.',
          ja: 'Gemini CLI には Node.js 16 以上が必要です。nvm を使用して Node.js を更新するか、nodejs.org からダウンロードしてください。',
          ko: 'Gemini CLI는 Node.js 16 이상이 필요합니다. nvm을 사용하여 Node.js를 업데이트하거나 nodejs.org에서 다운로드하세요.',
          es: 'Gemini CLI requiere Node.js 16 o superior. Actualice Node.js usando nvm o descárguelo desde nodejs.org.',
          ru: 'Gemini CLI требует Node.js 16 или выше. Обновите Node.js с помощью nvm или загрузите с nodejs.org.'
        },
        code: 'node --version  # Should be 16.0.0 or higher'
      }
    ]
  },
  {
    id: 'authentication',
    title: {
      zh: '身份验证和 API 问题',
      en: 'Authentication & API Issues',
      hi: 'प्रमाणीकरण और API समस्याएं',
      fr: 'Problèmes d\'Authentification et d\'API',
      de: 'Authentifizierungs- und API-Probleme',
      ja: '認証とAPIの問題',
      ko: '인증 및 API 문제',
      es: 'Problemas de Autenticación y API',
      ru: 'Проблемы аутентификации и API'
    },
    description: {
      zh: 'API 密钥和身份验证问题',
      en: 'Problems with API keys and authentication',
      hi: 'API कीज़ और प्रमाणीकरण की समस्याएं',
      fr: 'Problèmes avec les clés API et l\'authentification',
      de: 'Probleme mit API-Schlüsseln und Authentifizierung',
      ja: 'APIキーと認証の問題',
      ko: 'API 키 및 인증 문제',
      es: 'Problemas con claves API y autenticación',
      ru: 'Проблемы с API-ключами и аутентификацией'
    },
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-pink-600',
    issues: [
      {
        problem: {
          zh: '无效的 API 密钥错误',
          en: 'Invalid API key error',
          hi: 'अमान्य API कुंजी त्रुटि',
          fr: 'Erreur de clé API invalide',
          de: 'Ungültiger API-Schlüssel-Fehler',
          ja: '無効なAPIキーエラー',
          ko: '유효하지 않은 API 키 오류',
          es: 'Error de clave API inválida',
          ru: 'Ошибка недействительного API-ключа'
        },
        solution: {
          zh: '验证您的 API 密钥是否正确并具有适当的权限。如果需要，从 Google AI Studio 获取新密钥。',
          en: 'Verify your API key is correct and has proper permissions. Get a new key from Google AI Studio if needed.',
          hi: 'सत्यापित करें कि आपकी API कुंजी सही है और उसके पास उचित अनुमतियां हैं। यदि आवश्यक हो तो Google AI Studio से नई कुंजी प्राप्त करें।',
          fr: 'Vérifiez que votre clé API est correcte et dispose des autorisations appropriées. Obtenez une nouvelle clé depuis Google AI Studio si nécessaire.',
          de: 'Überprüfen Sie, ob Ihr API-Schlüssel korrekt ist und die entsprechenden Berechtigungen hat. Holen Sie sich bei Bedarf einen neuen Schlüssel von Google AI Studio.',
          ja: 'APIキーが正しく、適切な権限を持っていることを確認してください。必要に応じてGoogle AI Studioから新しいキーを取得してください。',
          ko: 'API 키가 올바르고 적절한 권한을 가지고 있는지 확인하세요. 필요한 경우 Google AI Studio에서 새 키를 받으세요.',
          es: 'Verifique que su clave API sea correcta y tenga los permisos apropiados. Obtenga una nueva clave de Google AI Studio si es necesario.',
          ru: 'Убедитесь, что ваш API-ключ правильный и имеет соответствующие разрешения. При необходимости получите новый ключ из Google AI Studio.'
        },
        code: 'gemini config set api-key YOUR_API_KEY'
      },
      {
        problem: {
          zh: 'API 配额超出',
          en: 'API quota exceeded',
          hi: 'API कोटा पार हो गया',
          fr: 'Quota API dépassé',
          de: 'API-Kontingent überschritten',
          ja: 'APIクォータ超過',
          ko: 'API 할당량 초과',
          es: 'Cuota de API excedida',
          ru: 'Превышена квота API'
        },
        solution: {
          zh: '在 Google AI Studio 中检查您的使用限制。考虑升级您的计划或实施速率限制。',
          en: 'Check your usage limits in Google AI Studio. Consider upgrading your plan or implementing rate limiting.',
          hi: 'Google AI Studio में अपनी उपयोग सीमाएं जांचें। अपनी योजना को अपग्रेड करने या दर सीमा लागू करने पर विचार करें।',
          fr: 'Vérifiez vos limites d\'utilisation dans Google AI Studio. Envisagez de mettre à niveau votre plan ou d\'implémenter une limitation de débit.',
          de: 'Überprüfen Sie Ihre Nutzungslimits in Google AI Studio. Erwägen Sie ein Upgrade Ihres Plans oder die Implementierung einer Ratenbegrenzung.',
          ja: 'Google AI Studioで使用制限を確認してください。プランのアップグレードまたはレート制限の実装を検討してください。',
          ko: 'Google AI Studio에서 사용 한도를 확인하세요. 플랜 업그레이드 또는 속도 제한 구현을 고려하세요.',
          es: 'Verifique sus límites de uso en Google AI Studio. Considere actualizar su plan o implementar limitación de velocidad.',
          ru: 'Проверьте ваши лимиты использования в Google AI Studio. Рассмотрите возможность обновления плана или внедрения ограничения скорости.'
        },
        code: 'gemini config set rate-limit 10  # Requests per minute'
      },
      {
        problem: {
          zh: '网络连接问题',
          en: 'Network connectivity issues',
          hi: 'नेटवर्क कनेक्टिविटी समस्याएं',
          fr: 'Problèmes de connectivité réseau',
          de: 'Netzwerkverbindungsprobleme',
          ja: 'ネットワーク接続の問題',
          ko: '네트워크 연결 문제',
          es: 'Problemas de conectividad de red',
          ru: 'Проблемы с сетевым подключением'
        },
        solution: {
          zh: '检查互联网连接和防火墙设置。如果在企业防火墙后面，请验证代理配置。',
          en: 'Check internet connection and firewall settings. Verify proxy configuration if behind corporate firewall.',
          hi: 'इंटरनेट कनेक्शन और फ़ायरवॉल सेटिंग्स जांचें। यदि कॉर्पोरेट फ़ायरवॉल के पीछे हैं तो प्रॉक्सी कॉन्फ़िगरेशन सत्यापित करें।',
          fr: 'Vérifiez la connexion Internet et les paramètres du pare-feu. Vérifiez la configuration du proxy si vous êtes derrière un pare-feu d\'entreprise.',
          de: 'Überprüfen Sie die Internetverbindung und Firewall-Einstellungen. Überprüfen Sie die Proxy-Konfiguration, wenn Sie sich hinter einer Unternehmens-Firewall befinden.',
          ja: 'インターネット接続とファイアウォール設定を確認してください。企業ファイアウォールの背後にいる場合は、プロキシ設定を確認してください。',
          ko: '인터넷 연결 및 방화벽 설정을 확인하세요. 기업 방화벽 뒤에 있는 경우 프록시 구성을 확인하세요.',
          es: 'Verifique la conexión a Internet y la configuración del firewall. Verifique la configuración del proxy si está detrás de un firewall corporativo.',
          ru: 'Проверьте интернет-соединение и настройки брандмауэра. Проверьте конфигурацию прокси, если находитесь за корпоративным брандмауэром.'
        },
        code: 'gemini config set proxy http://proxy.company.com:8080'
      }
    ]
  },
  {
    id: 'configuration',
    title: {
      zh: '配置问题',
      en: 'Configuration Problems'
    },
    description: {
      zh: 'CLI 配置和设置问题',
      en: 'Issues with CLI configuration and settings'
    },
    icon: CogIcon,
    color: 'from-green-500 to-emerald-600',
    issues: [
      {
        problem: {
          zh: '配置文件损坏或丢失',
          en: 'Configuration file corrupted or missing',
          hi: 'कॉन्फ़िगरेशन फ़ाइल दूषित या गुम',
          fr: 'Fichier de configuration corrompu ou manquant',
          de: 'Konfigurationsdatei beschädigt oder fehlt',
          ja: '設定ファイルが破損または欠落',
          ko: '구성 파일이 손상되었거나 누락됨',
          es: 'Archivo de configuración corrupto o faltante',
          ru: 'Файл конфигурации поврежден или отсутствует'
        },
        solution: {
          zh: '将配置重置为默认值并重新配置。首先备份重要设置。',
          en: 'Reset configuration to defaults and reconfigure. Backup important settings first.',
          hi: 'कॉन्फ़िगरेशन को डिफ़ॉल्ट पर रीसेट करें और पुनः कॉन्फ़िगर करें। पहले महत्वपूर्ण सेटिंग्स का बैकअप लें।',
          fr: 'Réinitialisez la configuration aux valeurs par défaut et reconfigurez. Sauvegardez d\'abord les paramètres importants.',
          de: 'Setzen Sie die Konfiguration auf die Standardwerte zurück und konfigurieren Sie sie neu. Sichern Sie zuerst wichtige Einstellungen.',
          ja: '設定をデフォルトにリセットして再設定してください。まず重要な設定をバックアップしてください。',
          ko: '구성을 기본값으로 재설정하고 다시 구성하세요. 먼저 중요한 설정을 백업하세요.',
          es: 'Restablezca la configuración a los valores predeterminados y reconfigure. Haga una copia de seguridad de la configuración importante primero.',
          ru: 'Сбросьте конфигурацию к значениям по умолчанию и перенастройте. Сначала создайте резервную копию важных настроек.'
        },
        code: 'gemini config reset\ngemini config set api-key YOUR_API_KEY'
      },
      {
        problem: {
          zh: '模型不可用或已弃用',
          en: 'Model not available or deprecated',
          hi: 'मॉडल उपलब्ध नहीं है या पुराना है',
          fr: 'Modèle non disponible ou obsolète',
          de: 'Modell nicht verfügbar oder veraltet',
          ja: 'モデルが利用できないか廃止予定',
          ko: '모델을 사용할 수 없거나 더 이상 사용되지 않음',
          es: 'Modelo no disponible o obsoleto',
          ru: 'Модель недоступна или устарела'
        },
        solution: {
          zh: '检查可用模型并更新配置。某些模型可能有地区限制。',
          en: 'Check available models and update configuration. Some models may have regional restrictions.',
          hi: 'उपलब्ध मॉडल जांचें और कॉन्फ़िगरेशन अपडेट करें। कुछ मॉडल में क्षेत्रीय प्रतिबंध हो सकते हैं।',
          fr: 'Vérifiez les modèles disponibles et mettez à jour la configuration. Certains modèles peuvent avoir des restrictions régionales.',
          de: 'Überprüfen Sie verfügbare Modelle und aktualisieren Sie die Konfiguration. Einige Modelle können regionale Beschränkungen haben.',
          ja: '利用可能なモデルを確認し、設定を更新してください。一部のモデルには地域制限がある場合があります。',
          ko: '사용 가능한 모델을 확인하고 구성을 업데이트하세요. 일부 모델에는 지역 제한이 있을 수 있습니다.',
          es: 'Verifique los modelos disponibles y actualice la configuración. Algunos modelos pueden tener restricciones regionales.',
          ru: 'Проверьте доступные модели и обновите конфигурацию. Некоторые модели могут иметь региональные ограничения.'
        },
        code: 'gemini models list\ngemini config set model gemini-pro'
      },
      {
        problem: {
          zh: '环境变量未被识别',
          en: 'Environment variables not recognized',
          hi: 'पर्यावरण चर पहचाने नहीं गए',
          fr: 'Variables d\'environnement non reconnues',
          de: 'Umgebungsvariablen nicht erkannt',
          ja: '環境変数が認識されない',
          ko: '환경 변수가 인식되지 않음',
          es: 'Variables de entorno no reconocidas',
          ru: 'Переменные окружения не распознаны'
        },
        solution: {
          zh: '确保环境变量已正确设置和导出。检查变量名称和值。',
          en: 'Ensure environment variables are properly set and exported. Check variable names and values.',
          hi: 'सुनिश्चित करें कि पर्यावरण चर सही तरीके से सेट और एक्सपोर्ट किए गए हैं। चर नाम और मान जांचें।',
          fr: 'Assurez-vous que les variables d\'environnement sont correctement définies et exportées. Vérifiez les noms et valeurs des variables.',
          de: 'Stellen Sie sicher, dass Umgebungsvariablen ordnungsgemäß gesetzt und exportiert sind. Überprüfen Sie Variablennamen und -werte.',
          ja: '環境変数が適切に設定およびエクスポートされていることを確認してください。変数名と値を確認してください。',
          ko: '환경 변수가 올바르게 설정되고 내보내졌는지 확인하세요. 변수 이름과 값을 확인하세요.',
          es: 'Asegúrese de que las variables de entorno estén configuradas y exportadas correctamente. Verifique los nombres y valores de las variables.',
          ru: 'Убедитесь, что переменные окружения правильно установлены и экспортированы. Проверьте имена и значения переменных.'
        },
        code: 'export GEMINI_API_KEY=your_key_here\nexport GEMINI_MODEL=gemini-pro'
      }
    ]
  },
  {
    id: 'performance',
    title: {
      zh: '性能问题',
      en: 'Performance Issues',
      hi: 'प्रदर्शन समस्याएं',
      fr: 'Problèmes de Performance',
      de: 'Leistungsprobleme',
      ja: 'パフォーマンスの問題',
      ko: '성능 문제',
      es: 'Problemas de Rendimiento',
      ru: 'Проблемы производительности'
    },
    description: {
      zh: '响应缓慢和性能问题',
      en: 'Slow responses and performance problems',
      hi: 'धीमी प्रतिक्रियाएं और प्रदर्शन समस्याएं',
      fr: 'Réponses lentes et problèmes de performance',
      de: 'Langsame Antworten und Leistungsprobleme',
      ja: '応答の遅延とパフォーマンスの問題',
      ko: '느린 응답 및 성능 문제',
      es: 'Respuestas lentas y problemas de rendimiento',
      ru: 'Медленные ответы и проблемы производительности'
    },
    icon: CloudIcon,
    color: 'from-orange-500 to-red-600',
    issues: [
      {
        problem: {
          zh: '响应时间慢',
          en: 'Slow response times',
          hi: 'धीमा प्रतिक्रिया समय',
          fr: 'Temps de réponse lents',
          de: 'Langsame Antwortzeiten',
          ja: '応答時間が遅い',
          ko: '느린 응답 시간',
          es: 'Tiempos de respuesta lentos',
          ru: 'Медленное время отклика'
        },
        solution: {
          zh: '检查网络连接，减少请求大小，或尝试不同的模型。考虑对长响应使用流式传输。',
          en: 'Check network connection, reduce request size, or try a different model. Consider using streaming for long responses.',
          hi: 'नेटवर्क कनेक्शन जांचें, अनुरोध का आकार कम करें, या अलग मॉडल आज़माएं। लंबी प्रतिक्रियाओं के लिए स्ट्रीमिंग का उपयोग करने पर विचार करें।',
          fr: 'Vérifiez la connexion réseau, réduisez la taille de la requête ou essayez un modèle différent. Envisagez d\'utiliser le streaming pour les longues réponses.',
          de: 'Überprüfen Sie die Netzwerkverbindung, reduzieren Sie die Anfragegröße oder versuchen Sie ein anderes Modell. Erwägen Sie Streaming für lange Antworten.',
          ja: 'ネットワーク接続を確認し、リクエストサイズを減らすか、別のモデルを試してください。長い応答にはストリーミングの使用を検討してください。',
          ko: '네트워크 연결을 확인하고, 요청 크기를 줄이거나, 다른 모델을 시도하세요. 긴 응답에는 스트리밍 사용을 고려하세요.',
          es: 'Verifique la conexión de red, reduzca el tamaño de la solicitud o pruebe un modelo diferente. Considere usar streaming para respuestas largas.',
          ru: 'Проверьте сетевое соединение, уменьшите размер запроса или попробуйте другую модель. Рассмотрите использование потоковой передачи для длинных ответов.'
        },
        code: 'gemini config set stream true\ngemini config set max-tokens 1000'
      },
      {
        problem: {
          zh: '内存使用率高',
          en: 'High memory usage',
          hi: 'उच्च मेमोरी उपयोग',
          fr: 'Utilisation mémoire élevée',
          de: 'Hoher Speicherverbrauch',
          ja: 'メモリ使用量が多い',
          ko: '높은 메모리 사용량',
          es: 'Alto uso de memoria',
          ru: 'Высокое использование памяти'
        },
        solution: {
          zh: '限制对话历史记录，减少批处理大小，或定期重启 CLI 会话。',
          en: 'Limit conversation history, reduce batch sizes, or restart the CLI session periodically.',
          hi: 'बातचीत इतिहास सीमित करें, बैच आकार कम करें, या समय-समय पर CLI सत्र पुनः आरंभ करें।',
          fr: 'Limitez l\'historique des conversations, réduisez les tailles de lot ou redémarrez périodiquement la session CLI.',
          de: 'Begrenzen Sie den Gesprächsverlauf, reduzieren Sie Batch-Größen oder starten Sie die CLI-Sitzung regelmäßig neu.',
          ja: '会話履歴を制限し、バッチサイズを減らすか、CLIセッションを定期的に再起動してください。',
          ko: '대화 기록을 제한하고, 배치 크기를 줄이거나, CLI 세션을 주기적으로 재시작하세요.',
          es: 'Limite el historial de conversaciones, reduzca los tamaños de lote o reinicie la sesión CLI periódicamente.',
          ru: 'Ограничьте историю разговоров, уменьшите размеры пакетов или периодически перезапускайте CLI-сессию.'
        },
        code: 'gemini config set history-limit 10\ngemini session clear'
      },
      {
        problem: {
          zh: '超时错误',
          en: 'Timeout errors',
          hi: 'टाइमआउट त्रुटियां',
          fr: 'Erreurs de délai d\'attente',
          de: 'Timeout-Fehler',
          ja: 'タイムアウトエラー',
          ko: '시간 초과 오류',
          es: 'Errores de tiempo de espera',
          ru: 'Ошибки тайм-аута'
        },
        solution: {
          zh: '增加超时设置或将大请求分解为较小的块。',
          en: 'Increase timeout settings or break large requests into smaller chunks.',
          hi: 'टाइमआउट सेटिंग्स बढ़ाएं या बड़े अनुरोधों को छोटे भागों में विभाजित करें।',
          fr: 'Augmentez les paramètres de délai d\'attente ou divisez les grandes requêtes en plus petits morceaux.',
          de: 'Erhöhen Sie die Timeout-Einstellungen oder teilen Sie große Anfragen in kleinere Teile auf.',
          ja: 'タイムアウト設定を増やすか、大きなリクエストを小さなチャンクに分割してください。',
          ko: '시간 초과 설정을 늘리거나 큰 요청을 작은 청크로 나누세요.',
          es: 'Aumente la configuración de tiempo de espera o divida las solicitudes grandes en fragmentos más pequeños.',
          ru: 'Увеличьте настройки тайм-аута или разбейте большие запросы на меньшие части.'
        },
        code: 'gemini config set timeout 60000  # 60 seconds'
      }
    ]
  },
  {
    id: 'tools',
    title: {
      zh: '工具和插件问题',
      en: 'Tool & Plugin Issues',
      hi: 'टूल और प्लगइन समस्याएं',
      fr: 'Problèmes d\'Outils et de Plugins',
      de: 'Tool- und Plugin-Probleme',
      ja: 'ツールとプラグインの問題',
      ko: '도구 및 플러그인 문제',
      es: 'Problemas de Herramientas y Plugins',
      ru: 'Проблемы с инструментами и плагинами'
    },
    description: {
      zh: '工具和插件功能问题',
      en: 'Problems with tools and plugin functionality',
      hi: 'टूल और प्लगइन कार्यक्षमता की समस्याएं',
      fr: 'Problèmes avec les fonctionnalités des outils et plugins',
      de: 'Probleme mit Tool- und Plugin-Funktionalität',
      ja: 'ツールとプラグイン機能の問題',
      ko: '도구 및 플러그인 기능 문제',
      es: 'Problemas con la funcionalidad de herramientas y plugins',
      ru: 'Проблемы с функциональностью инструментов и плагинов'
    },
    icon: BugAntIcon,
    color: 'from-purple-500 to-pink-600',
    issues: [
      {
        problem: {
          zh: '工具执行失败',
          en: 'Tool execution fails',
          hi: 'टूल निष्पादन विफल',
          fr: 'Échec d\'exécution de l\'outil',
          de: 'Tool-Ausführung schlägt fehl',
          ja: 'ツールの実行が失敗',
          ko: '도구 실행 실패',
          es: 'Falla la ejecución de la herramienta',
          ru: 'Сбой выполнения инструмента'
        },
        solution: {
          zh: '检查工具权限、文件路径和依赖项。验证工具是否已正确安装和配置。',
          en: 'Check tool permissions, file paths, and dependencies. Verify tool is properly installed and configured.',
          hi: 'टूल अनुमतियां, फ़ाइल पथ और निर्भरताएं जांचें। सत्यापित करें कि टूल सही तरीके से स्थापित और कॉन्फ़िगर किया गया है।',
          fr: 'Vérifiez les permissions de l\'outil, les chemins de fichiers et les dépendances. Vérifiez que l\'outil est correctement installé et configuré.',
          de: 'Überprüfen Sie Tool-Berechtigungen, Dateipfade und Abhängigkeiten. Stellen Sie sicher, dass das Tool ordnungsgemäß installiert und konfiguriert ist.',
          ja: 'ツールの権限、ファイルパス、依存関係を確認してください。ツールが適切にインストールおよび設定されていることを確認してください。',
          ko: '도구 권한, 파일 경로 및 종속성을 확인하세요. 도구가 올바르게 설치되고 구성되었는지 확인하세요.',
          es: 'Verifique los permisos de la herramienta, las rutas de archivos y las dependencias. Verifique que la herramienta esté correctamente instalada y configurada.',
          ru: 'Проверьте разрешения инструмента, пути к файлам и зависимости. Убедитесь, что инструмент правильно установлен и настроен.'
        },
        code: 'gemini tools list\ngemini tools test tool-name'
      },
      {
        problem: {
          zh: '插件未加载',
          en: 'Plugin not loading',
          hi: 'प्लगइन लोड नहीं हो रहा',
          fr: 'Plugin ne se charge pas',
          de: 'Plugin lädt nicht',
          ja: 'プラグインが読み込まれない',
          ko: '플러그인이 로드되지 않음',
          es: 'Plugin no se carga',
          ru: 'Плагин не загружается'
        },
        solution: {
          zh: '验证插件路径，检查语法错误，并确保安装了所有依赖项。',
          en: 'Verify plugin path, check for syntax errors, and ensure all dependencies are installed.',
          hi: 'प्लगइन पथ सत्यापित करें, सिंटैक्स त्रुटियों की जांच करें, और सुनिश्चित करें कि सभी निर्भरताएं स्थापित हैं।',
          fr: 'Vérifiez le chemin du plugin, recherchez les erreurs de syntaxe et assurez-vous que toutes les dépendances sont installées.',
          de: 'Überprüfen Sie den Plugin-Pfad, suchen Sie nach Syntaxfehlern und stellen Sie sicher, dass alle Abhängigkeiten installiert sind.',
          ja: 'プラグインパスを確認し、構文エラーをチェックし、すべての依存関係がインストールされていることを確認してください。',
          ko: '플러그인 경로를 확인하고, 구문 오류를 검사하며, 모든 종속성이 설치되었는지 확인하세요.',
          es: 'Verifique la ruta del plugin, busque errores de sintaxis y asegúrese de que todas las dependencias estén instaladas.',
          ru: 'Проверьте путь к плагину, проверьте синтаксические ошибки и убедитесь, что все зависимости установлены.'
        },
        code: 'gemini plugins list\ngemini plugins reload plugin-name'
      },
      {
        problem: {
          zh: 'MCP 服务器连接问题',
          en: 'MCP server connection issues',
          hi: 'MCP सर्वर कनेक्शन समस्याएं',
          fr: 'Problèmes de connexion au serveur MCP',
          de: 'MCP-Server-Verbindungsprobleme',
          ja: 'MCPサーバー接続の問題',
          ko: 'MCP 서버 연결 문제',
          es: 'Problemas de conexión del servidor MCP',
          ru: 'Проблемы подключения к серверу MCP'
        },
        solution: {
          zh: '检查服务器状态、网络连接和协议版本兼容性。',
          en: 'Check server status, network connectivity, and protocol version compatibility.',
          hi: 'सर्वर स्थिति, नेटवर्क कनेक्टिविटी और प्रोटोकॉल संस्करण संगतता जांचें।',
          fr: 'Vérifiez l\'état du serveur, la connectivité réseau et la compatibilité des versions de protocole.',
          de: 'Überprüfen Sie den Serverstatus, die Netzwerkverbindung und die Protokollversionskompatibilität.',
          ja: 'サーバーステータス、ネットワーク接続、プロトコルバージョンの互換性を確認してください。',
          ko: '서버 상태, 네트워크 연결 및 프로토콜 버전 호환성을 확인하세요.',
          es: 'Verifique el estado del servidor, la conectividad de red y la compatibilidad de versiones de protocolo.',
          ru: 'Проверьте состояние сервера, сетевое подключение и совместимость версий протокола.'
        },
        code: 'gemini mcp status\ngemini mcp reconnect server-name'
      }
    ]
  }
]

const commonCommands = [
  {
    command: 'gemini --version',
    description: {
      zh: '检查 CLI 版本和构建信息',
      en: 'Check CLI version and build information',
      hi: 'CLI संस्करण और बिल्ड जानकारी जांचें',
      fr: 'Vérifier la version CLI et les informations de build',
      de: 'CLI-Version und Build-Informationen überprüfen',
      ja: 'CLIバージョンとビルド情報を確認',
      ko: 'CLI 버전 및 빌드 정보 확인',
      es: 'Verificar versión CLI e información de compilación',
      ru: 'Проверить версию CLI и информацию о сборке'
    }
  },
  {
    command: 'gemini config list',
    description: {
      zh: '显示当前配置设置',
      en: 'Display current configuration settings',
      hi: 'वर्तमान कॉन्फ़िगरेशन सेटिंग्स प्रदर्शित करें',
      fr: 'Afficher les paramètres de configuration actuels',
      de: 'Aktuelle Konfigurationseinstellungen anzeigen',
      ja: '現在の設定を表示',
      ko: '현재 구성 설정 표시',
      es: 'Mostrar configuraciones actuales',
      ru: 'Показать текущие настройки конфигурации'
    }
  },
  {
    command: 'gemini config reset',
    description: {
      zh: '重置配置为默认值',
      en: 'Reset configuration to default values',
      hi: 'कॉन्फ़िगरेशन को डिफ़ॉल्ट मानों पर रीसेट करें',
      fr: 'Réinitialiser la configuration aux valeurs par défaut',
      de: 'Konfiguration auf Standardwerte zurücksetzen',
      ja: '設定をデフォルト値にリセット',
      ko: '구성을 기본값으로 재설정',
      es: 'Restablecer configuración a valores predeterminados',
      ru: 'Сбросить конфигурацию к значениям по умолчанию'
    }
  },
  {
    command: 'gemini logs',
    description: {
      zh: '查看最近的错误日志和调试信息',
      en: 'View recent error logs and debug information',
      hi: 'हाल की त्रुटि लॉग और डिबग जानकारी देखें',
      fr: 'Voir les journaux d\'erreurs récents et les informations de débogage',
      de: 'Aktuelle Fehlerlogs und Debug-Informationen anzeigen',
      ja: '最近のエラーログとデバッグ情報を表示',
      ko: '최근 오류 로그 및 디버그 정보 보기',
      es: 'Ver registros de errores recientes e información de depuración',
      ru: 'Просмотреть последние журналы ошибок и отладочную информацию'
    }
  },
  {
    command: 'gemini doctor',
    description: {
      zh: '运行诊断检查和健康验证',
      en: 'Run diagnostic checks and health verification',
      hi: 'डायग्नोस्टिक जांच और स्वास्थ्य सत्यापन चलाएं',
      fr: 'Exécuter les vérifications de diagnostic et de santé',
      de: 'Diagnosechecks und Gesundheitsüberprüfung ausführen',
      ja: '診断チェックとヘルス検証を実行',
      ko: '진단 검사 및 상태 확인 실행',
      es: 'Ejecutar verificaciones de diagnóstico y salud',
      ru: 'Запустить диагностические проверки и проверку работоспособности'
    }
  },
  {
    command: 'gemini cache clear',
    description: {
      zh: '清除缓存数据和临时文件',
      en: 'Clear cached data and temporary files',
      hi: 'कैश्ड डेटा और अस्थायी फाइलें साफ करें',
      fr: 'Effacer les données en cache et les fichiers temporaires',
      de: 'Zwischengespeicherte Daten und temporäre Dateien löschen',
      ja: 'キャッシュデータと一時ファイルをクリア',
      ko: '캐시된 데이터 및 임시 파일 지우기',
      es: 'Limpiar datos en caché y archivos temporales',
      ru: 'Очистить кэшированные данные и временные файлы'
    }
  }
]



export default async function TroubleshootingPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  const isZh = locale === 'zh'

  // Helper function to get localized text
  const getLocalizedText = (textObj: any) => {
    return textObj[locale as keyof typeof textObj] || textObj.en || textObj.zh
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {locale === 'zh' ? '故障排除指南' :
               locale === 'hi' ? 'समस्या निवारण गाइड' :
               locale === 'fr' ? 'Guide de Dépannage' :
               locale === 'de' ? 'Fehlerbehebungsanleitung' :
               locale === 'ja' ? 'トラブルシューティングガイド' :
               locale === 'ko' ? '문제 해결 가이드' :
               locale === 'es' ? 'Guía de Solución de Problemas' :
               locale === 'ru' ? 'Руководство по устранению неполадок' :
               'Troubleshooting Guide'}
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100">
              {locale === 'zh'
                ? '关于 Gemini CLI 常见问题和常见问题解答的解决方案。查找各种问题的快速修复和详细指导。'
                : locale === 'hi'
                ? 'Gemini CLI के बारे में सामान्य समस्याओं और अक्सर पूछे जाने वाले प्रश्नों के समाधान। विभिन्न समस्याओं के लिए त्वरित समाधान और विस्तृत मार्गदर्शन खोजें।'
                : locale === 'fr'
                ? 'Solutions aux problèmes courants et questions fréquemment posées sur Gemini CLI. Trouvez des corrections rapides et des conseils détaillés pour divers problèmes.'
                : locale === 'de'
                ? 'Lösungen für häufige Probleme und häufig gestellte Fragen zu Gemini CLI. Finden Sie schnelle Korrekturen und detaillierte Anleitungen für verschiedene Probleme.'
                : locale === 'ja'
                ? 'Gemini CLIの一般的な問題とよくある質問の解決策。さまざまな問題に対する迅速な修正と詳細なガイダンスを見つけてください。'
                : locale === 'ko'
                ? 'Gemini CLI에 대한 일반적인 문제와 자주 묻는 질문에 대한 솔루션. 다양한 문제에 대한 빠른 수정 및 자세한 지침을 찾아보세요.'
                : locale === 'es'
                ? 'Soluciones a problemas comunes y preguntas frecuentes sobre Gemini CLI. Encuentre correcciones rápidas y orientación detallada para varios problemas.'
                : locale === 'ru'
                ? 'Решения распространенных проблем и часто задаваемых вопросов о Gemini CLI. Найдите быстрые исправления и подробные руководства для различных проблем.'
                : 'Solutions to common problems and frequently asked questions about Gemini CLI. Find quick fixes and detailed guidance for various issues.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Quick Diagnostic Commands */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '快速诊断命令' :
               locale === 'hi' ? 'त्वरित डायग्नोस्टिक कमांड' :
               locale === 'fr' ? 'Commandes de Diagnostic Rapide' :
               locale === 'de' ? 'Schnelle Diagnosebefehle' :
               locale === 'ja' ? 'クイック診断コマンド' :
               locale === 'ko' ? '빠른 진단 명령' :
               locale === 'es' ? 'Comandos de Diagnóstico Rápido' :
               locale === 'ru' ? 'Быстрые диагностические команды' :
               'Quick Diagnostic Commands'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '从这些命令开始诊断常见问题' :
               locale === 'hi' ? 'सामान्य समस्याओं का निदान करने के लिए इन कमांड से शुरुआत करें' :
               locale === 'fr' ? 'Commencez par ces commandes pour diagnostiquer les problèmes courants' :
               locale === 'de' ? 'Beginnen Sie mit diesen Befehlen zur Diagnose häufiger Probleme' :
               locale === 'ja' ? '一般的な問題を診断するためにこれらのコマンドから始めてください' :
               locale === 'ko' ? '일반적인 문제를 진단하려면 이러한 명령으로 시작하세요' :
               locale === 'es' ? 'Comience con estos comandos para diagnosticar problemas comunes' :
               locale === 'ru' ? 'Начните с этих команд для диагностики распространенных проблем' :
               'Start with these commands to diagnose common issues'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonCommands.map((cmd, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm font-mono mb-2">
                  {cmd.command}
                </code>
                <p className="text-sm text-gray-600">{getLocalizedText(cmd.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting Categories */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '常见问题和解决方案' :
               locale === 'hi' ? 'सामान्य समस्याएं और समाधान' :
               locale === 'fr' ? 'Problèmes Courants et Solutions' :
               locale === 'de' ? 'Häufige Probleme und Lösungen' :
               locale === 'ja' ? '一般的な問題と解決策' :
               locale === 'ko' ? '일반적인 문제 및 해결책' :
               locale === 'es' ? 'Problemas Comunes y Soluciones' :
               locale === 'ru' ? 'Распространенные проблемы и решения' :
               'Common Issues & Solutions'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '按类别浏览以查找特定问题的解决方案' :
               locale === 'hi' ? 'विशिष्ट समस्याओं के समाधान खोजने के लिए श्रेणी के अनुसार ब्राउज़ करें' :
               locale === 'fr' ? 'Parcourez par catégorie pour trouver des solutions à des problèmes spécifiques' :
               locale === 'de' ? 'Durchsuchen Sie nach Kategorie, um Lösungen für spezifische Probleme zu finden' :
               locale === 'ja' ? 'カテゴリ別に閲覧して特定の問題の解決策を見つけてください' :
               locale === 'ko' ? '특정 문제에 대한 해결책을 찾으려면 카테고리별로 찾아보세요' :
               locale === 'es' ? 'Navegue por categoría para encontrar soluciones a problemas específicos' :
               locale === 'ru' ? 'Просматривайте по категориям, чтобы найти решения конкретных проблем' :
               'Browse by category to find solutions to specific problems'}
            </p>
          </div>

          <div className="space-y-12">
            {troubleshootingCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{getLocalizedText(category.title)}</h3>
                    <p className="text-gray-600">{getLocalizedText(category.description)}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.issues.map((issue, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <ExclamationTriangleIcon className="h-5 w-5 inline mr-2 text-orange-500" />
                        {getLocalizedText(issue.problem)}
                      </h4>
                      <p className="text-gray-700 mb-3">{getLocalizedText(issue.solution)}</p>

                      {issue.code && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2">
                            {locale === 'zh' ? '解决方案：' :
                             locale === 'hi' ? 'समाधान:' :
                             locale === 'fr' ? 'Solution:' :
                             locale === 'de' ? 'Lösung:' :
                             locale === 'ja' ? '解決策:' :
                             locale === 'ko' ? '해결책:' :
                             locale === 'es' ? 'Solución:' :
                             locale === 'ru' ? 'Решение:' :
                             'Solution:'}
                          </h5>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                            <code>{issue.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Getting Help */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '仍需要帮助？' :
               locale === 'hi' ? 'अभी भी मदद चाहिए?' :
               locale === 'fr' ? 'Besoin d\'aide supplémentaire?' :
               locale === 'de' ? 'Benötigen Sie weitere Hilfe?' :
               locale === 'ja' ? 'まだヘルプが必要ですか？' :
               locale === 'ko' ? '여전히 도움이 필요하신가요?' :
               locale === 'es' ? '¿Aún necesita ayuda?' :
               locale === 'ru' ? 'Все еще нужна помощь?' :
               'Still Need Help?'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh'
                ? '如果您在这里找不到解决方案，请尝试这些资源'
                : locale === 'hi'
                ? 'यदि आपको यहां समाधान नहीं मिल रहा है, तो इन संसाधनों को आज़माएं'
                : locale === 'fr'
                ? 'Si vous ne trouvez pas de solution ici, essayez ces ressources'
                : locale === 'de'
                ? 'Wenn Sie hier keine Lösung finden, versuchen Sie diese Ressourcen'
                : locale === 'ja'
                ? 'ここで解決策が見つからない場合は、これらのリソースを試してください'
                : locale === 'ko'
                ? '여기서 해결책을 찾을 수 없다면 이러한 리소스를 시도해보세요'
                : locale === 'es'
                ? 'Si no puede encontrar una solución aquí, pruebe estos recursos'
                : locale === 'ru'
                ? 'Если вы не можете найти решение здесь, попробуйте эти ресурсы'
                : 'If you can\'t find a solution here, try these resources'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                <DocumentTextIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? '文档' :
                 locale === 'hi' ? 'दस्तावेज़ीकरण' :
                 locale === 'fr' ? 'Documentation' :
                 locale === 'de' ? 'Dokumentation' :
                 locale === 'ja' ? 'ドキュメント' :
                 locale === 'ko' ? '문서' :
                 locale === 'es' ? 'Documentación' :
                 locale === 'ru' ? 'Документация' :
                 'Documentation'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '查看完整文档以获取详细指南和示例。'
                  : locale === 'hi'
                  ? 'विस्तृत गाइड और उदाहरणों के लिए पूरा दस्तावेज़ीकरण देखें।'
                  : locale === 'fr'
                  ? 'Consultez la documentation complète pour des guides détaillés et des exemples.'
                  : locale === 'de'
                  ? 'Schauen Sie sich die vollständige Dokumentation für detaillierte Anleitungen und Beispiele an.'
                  : locale === 'ja'
                  ? '詳細なガイドと例については、完全なドキュメントをご確認ください。'
                  : locale === 'ko'
                  ? '자세한 가이드와 예제는 전체 문서를 확인하세요.'
                  : locale === 'es'
                  ? 'Consulte la documentación completa para guías detalladas y ejemplos.'
                  : locale === 'ru'
                  ? 'Ознакомьтесь с полной документацией для подробных руководств и примеров.'
                  : 'Check the complete documentation for detailed guides and examples.'
                }
              </p>
              <Link
                href={`/${locale}/docs`}
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                {locale === 'zh' ? '浏览文档 →' :
                 locale === 'hi' ? 'दस्तावेज़ ब्राउज़ करें →' :
                 locale === 'fr' ? 'Parcourir la Documentation →' :
                 locale === 'de' ? 'Dokumentation durchsuchen →' :
                 locale === 'ja' ? 'ドキュメントを閲覧 →' :
                 locale === 'ko' ? '문서 찾아보기 →' :
                 locale === 'es' ? 'Explorar Documentación →' :
                 locale === 'ru' ? 'Просмотреть документацию →' :
                 'Browse Docs →'}
              </Link>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                <QuestionMarkCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? 'GitHub Issues' :
                 locale === 'hi' ? 'GitHub Issues' :
                 locale === 'fr' ? 'GitHub Issues' :
                 locale === 'de' ? 'GitHub Issues' :
                 locale === 'ja' ? 'GitHub Issues' :
                 locale === 'ko' ? 'GitHub Issues' :
                 locale === 'es' ? 'GitHub Issues' :
                 locale === 'ru' ? 'GitHub Issues' :
                 'GitHub Issues'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '在我们的 GitHub 仓库上报告错误或请求功能。'
                  : locale === 'hi'
                  ? 'हमारे GitHub रिपॉजिटरी पर बग रिपोर्ट करें या फीचर्स का अनुरोध करें।'
                  : locale === 'fr'
                  ? 'Signalez des bugs ou demandez des fonctionnalités sur notre dépôt GitHub.'
                  : locale === 'de'
                  ? 'Melden Sie Bugs oder fordern Sie Features in unserem GitHub-Repository an.'
                  : locale === 'ja'
                  ? 'GitHubリポジトリでバグを報告したり機能をリクエストしたりしてください。'
                  : locale === 'ko'
                  ? 'GitHub 저장소에서 버그를 신고하거나 기능을 요청하세요.'
                  : locale === 'es'
                  ? 'Reporte errores o solicite características en nuestro repositorio de GitHub.'
                  : locale === 'ru'
                  ? 'Сообщайте об ошибках или запрашивайте функции в нашем GitHub-репозитории.'
                  : 'Report bugs or request features on our GitHub repository.'
                }
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-500 font-medium"
              >
                {locale === 'zh' ? '报告问题 →' :
                 locale === 'hi' ? 'समस्या रिपोर्ट करें →' :
                 locale === 'fr' ? 'Signaler un Problème →' :
                 locale === 'de' ? 'Problem melden →' :
                 locale === 'ja' ? '問題を報告 →' :
                 locale === 'ko' ? '문제 신고 →' :
                 locale === 'es' ? 'Reportar Problema →' :
                 locale === 'ru' ? 'Сообщить о проблеме →' :
                 'Report Issue →'}
              </Link>
            </div>

            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto mb-4">
                <BugAntIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? '社区' :
                 locale === 'hi' ? 'समुदाय' :
                 locale === 'fr' ? 'Communauté' :
                 locale === 'de' ? 'Community' :
                 locale === 'ja' ? 'コミュニティ' :
                 locale === 'ko' ? '커뮤니티' :
                 locale === 'es' ? 'Comunidad' :
                 locale === 'ru' ? 'Сообщество' :
                 'Community'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh'
                  ? '加入我们的社区讨论，从其他用户那里获得帮助。'
                  : locale === 'hi'
                  ? 'हमारी समुदायिक चर्चाओं में शामिल हों और अन्य उपयोगकर्ताओं से मदद प्राप्त करें।'
                  : locale === 'fr'
                  ? 'Rejoignez nos discussions communautaires et obtenez de l\'aide d\'autres utilisateurs.'
                  : locale === 'de'
                  ? 'Nehmen Sie an unseren Community-Diskussionen teil und erhalten Sie Hilfe von anderen Benutzern.'
                  : locale === 'ja'
                  ? 'コミュニティディスカッションに参加して、他のユーザーからヘルプを得てください。'
                  : locale === 'ko'
                  ? '커뮤니티 토론에 참여하고 다른 사용자로부터 도움을 받으세요.'
                  : locale === 'es'
                  ? 'Únase a nuestras discusiones comunitarias y obtenga ayuda de otros usuarios.'
                  : locale === 'ru'
                  ? 'Присоединяйтесь к нашим обсуждениям в сообществе и получайте помощь от других пользователей.'
                  : 'Join our community discussions and get help from other users.'
                }
              </p>
              <Link
                href="https://github.com/google-gemini/gemini-cli/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-500 font-medium"
              >
                {locale === 'zh' ? '加入讨论 →' :
                 locale === 'hi' ? 'चर्चा में शामिल हों →' :
                 locale === 'fr' ? 'Rejoindre la Discussion →' :
                 locale === 'de' ? 'An Diskussion teilnehmen →' :
                 locale === 'ja' ? 'ディスカッションに参加 →' :
                 locale === 'ko' ? '토론 참여 →' :
                 locale === 'es' ? 'Unirse a la Discusión →' :
                 locale === 'ru' ? 'Присоединиться к обсуждению →' :
                 'Join Discussion →'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '相关资源' :
               locale === 'hi' ? 'संबंधित संसाधन' :
               locale === 'fr' ? 'Ressources Connexes' :
               locale === 'de' ? 'Verwandte Ressourcen' :
               locale === 'ja' ? '関連リソース' :
               locale === 'ko' ? '관련 리소스' :
               locale === 'es' ? 'Recursos Relacionados' :
               locale === 'ru' ? 'Связанные ресурсы' :
               'Related Resources'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '探索更多文档和指南' :
               locale === 'hi' ? 'अधिक दस्तावेज़ीकरण और गाइड का अन्वेषण करें' :
               locale === 'fr' ? 'Explorez plus de documentation et de guides' :
               locale === 'de' ? 'Erkunden Sie weitere Dokumentation und Anleitungen' :
               locale === 'ja' ? 'より多くのドキュメントとガイドを探索してください' :
               locale === 'ko' ? '더 많은 문서와 가이드를 탐색하세요' :
               locale === 'es' ? 'Explore más documentación y guías' :
               locale === 'ru' ? 'Изучите больше документации и руководств' :
               'Explore more documentation and guides'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/contributing-guide`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {locale === 'zh' ? '贡献指南' :
                 locale === 'hi' ? 'योगदान गाइड' :
                 locale === 'fr' ? 'Guide de Contribution' :
                 locale === 'de' ? 'Beitragsleitfaden' :
                 locale === 'ja' ? '貢献ガイド' :
                 locale === 'ko' ? '기여 가이드' :
                 locale === 'es' ? 'Guía de Contribución' :
                 locale === 'ru' ? 'Руководство по участию' :
                 'Contributing Guide'}
              </Link>
              <Link
                href={`/${locale}/docs/api-reference`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {locale === 'zh' ? 'API 参考' :
                 locale === 'hi' ? 'API संदर्भ' :
                 locale === 'fr' ? 'Référence API' :
                 locale === 'de' ? 'API-Referenz' :
                 locale === 'ja' ? 'APIリファレンス' :
                 locale === 'ko' ? 'API 참조' :
                 locale === 'es' ? 'Referencia API' :
                 locale === 'ru' ? 'Справочник API' :
                 'API Reference'}
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '返回文档' :
                 locale === 'hi' ? 'दस्तावेज़ों पर वापस जाएं' :
                 locale === 'fr' ? 'Retour aux Documents' :
                 locale === 'de' ? 'Zurück zu den Dokumenten' :
                 locale === 'ja' ? 'ドキュメントに戻る' :
                 locale === 'ko' ? '문서로 돌아가기' :
                 locale === 'es' ? 'Volver a Documentos' :
                 locale === 'ru' ? 'Вернуться к документации' :
                 'Back to Docs'}
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
