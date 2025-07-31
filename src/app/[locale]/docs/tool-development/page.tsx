import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
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
    zh: '工具开发 - Gemini CLI 文档',
    en: 'Tool Development - Gemini CLI Documentation',
    hi: 'टूल डेवलपमेंट - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Développement d\'Outils - Documentation Gemini CLI',
    de: 'Tool-Entwicklung - Gemini CLI Dokumentation',
    ja: 'ツール開発 - Gemini CLI ドキュメント',
    ko: '도구 개발 - Gemini CLI 문서',
    es: 'Desarrollo de Herramientas - Documentación Gemini CLI',
    ru: 'Разработка инструментов - Документация Gemini CLI'
  }

  const descriptions = {
    zh: '开发 Gemini CLI 自定义工具的完整指南，包括工具定义、实现、测试和最佳实践。',
    en: 'Complete guide to developing custom tools for Gemini CLI including tool definition, implementation, testing, and best practices.',
    hi: 'टूल परिभाषा, कार्यान्वयन, परीक्षण और सर्वोत्तम प्रथाओं सहित Gemini CLI के लिए कस्टम टूल्स विकसित करने के लिए पूर्ण गाइड।',
    fr: 'Guide complet pour développer des outils personnalisés pour Gemini CLI, y compris la définition d\'outils, l\'implémentation, les tests et les meilleures pratiques.',
    de: 'Vollständiger Leitfaden zur Entwicklung benutzerdefinierter Tools für Gemini CLI, einschließlich Tool-Definition, Implementierung, Tests und bewährte Praktiken.',
    ja: 'ツール定義、実装、テスト、ベストプラクティスを含む、Gemini CLI 用カスタムツール開発の完全ガイド。',
    ko: '도구 정의, 구현, 테스트 및 모범 사례를 포함한 Gemini CLI용 사용자 정의 도구 개발에 대한 완전한 가이드.',
    es: 'Guía completa para desarrollar herramientas personalizadas para Gemini CLI, incluyendo definición de herramientas, implementación, pruebas y mejores prácticas.',
    ru: 'Полное руководство по разработке пользовательских инструментов для Gemini CLI, включая определение инструментов, реализацию, тестирование и лучшие практики.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 工具开发, 自定义工具, 工具创建, 插件开发, API 集成' : 'Gemini CLI tool development, custom tools, tool creation, plugin development, API integration',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const developmentSteps = [
  {
    step: 1,
    title: {
      zh: '定义工具接口',
      en: 'Define Tool Interface',
      hi: 'टूल इंटरफेस परिभाषित करें',
      fr: 'Définir l\'Interface de l\'Outil',
      de: 'Tool-Interface definieren',
      ja: 'ツールインターフェースを定義',
      ko: '도구 인터페이스 정의',
      es: 'Definir Interfaz de Herramienta',
      ru: 'Определить интерфейс инструмента'
    },
    description: {
      zh: '创建包含参数和描述的工具定义',
      en: 'Create the tool definition with parameters and description',
      hi: 'पैरामीटर और विवरण के साथ टूल परिभाषा बनाएं',
      fr: 'Créer la définition de l\'outil avec les paramètres et la description',
      de: 'Erstellen Sie die Tool-Definition mit Parametern und Beschreibung',
      ja: 'パラメータと説明を含むツール定義を作成',
      ko: '매개변수와 설명이 포함된 도구 정의 생성',
      es: 'Crear la definición de herramienta con parámetros y descripción',
      ru: 'Создать определение инструмента с параметрами и описанием'
    },
    icon: CodeBracketIcon,
    example: `const toolDefinition = {
  name: 'calculate_age',
  description: 'Calculate age based on birth date',
  parameters: {
    type: 'object',
    properties: {
      birthDate: {
        type: 'string',
        format: 'date',
        description: 'Birth date in YYYY-MM-DD format'
      },
      currentDate: {
        type: 'string',
        format: 'date',
        description: 'Current date (optional, defaults to today)'
      }
    },
    required: ['birthDate']
  }
};`
  },
  {
    step: 2,
    title: {
      zh: '实现工具逻辑',
      en: 'Implement Tool Logic',
      hi: 'टूल लॉजिक लागू करें',
      fr: 'Implémenter la Logique de l\'Outil',
      de: 'Tool-Logik implementieren',
      ja: 'ツールロジックを実装',
      ko: '도구 로직 구현',
      es: 'Implementar Lógica de Herramienta',
      ru: 'Реализовать логику инструмента'
    },
    description: {
      zh: '编写执行工具任务的执行函数',
      en: 'Write the execution function that performs the tool\'s task',
      hi: 'टूल के कार्य को निष्पादित करने वाला निष्पादन फ़ंक्शन लिखें',
      fr: 'Écrire la fonction d\'exécution qui effectue la tâche de l\'outil',
      de: 'Schreiben Sie die Ausführungsfunktion, die die Aufgabe des Tools ausführt',
      ja: 'ツールのタスクを実行する実行関数を書く',
      ko: '도구의 작업을 수행하는 실행 함수 작성',
      es: 'Escribir la función de ejecución que realiza la tarea de la herramienta',
      ru: 'Написать функцию выполнения, которая выполняет задачу инструмента'
    },
    icon: CogIcon,
    example: `const executeFunction = async ({ birthDate, currentDate }) => {
  try {
    const birth = new Date(birthDate);
    const current = currentDate ? new Date(currentDate) : new Date();
    
    if (birth > current) {
      throw new Error('Birth date cannot be in the future');
    }
    
    const ageMs = current.getTime() - birth.getTime();
    const ageYears = Math.floor(ageMs / (1000 * 60 * 60 * 24 * 365.25));
    
    return \`Age: \${ageYears} years old\`;
  } catch (error) {
    return \`Error: \${error.message}\`;
  }
};`
  },
  {
    step: 3,
    title: {
      zh: '注册工具',
      en: 'Register the Tool',
      hi: 'टूल पंजीकृत करें',
      fr: 'Enregistrer l\'Outil',
      de: 'Tool registrieren',
      ja: 'ツールを登録',
      ko: '도구 등록',
      es: 'Registrar la Herramienta',
      ru: 'Зарегистрировать инструмент'
    },
    description: {
      zh: '将工具添加到 Gemini CLI 的工具注册表',
      en: 'Add the tool to Gemini CLI\'s tool registry',
      hi: 'टूल को Gemini CLI के टूल रजिस्ट्री में जोड़ें',
      fr: 'Ajouter l\'outil au registre d\'outils de Gemini CLI',
      de: 'Das Tool zur Tool-Registry von Gemini CLI hinzufügen',
      ja: 'ツールをGemini CLIのツールレジストリに追加',
      ko: '도구를 Gemini CLI의 도구 레지스트리에 추가',
      es: 'Agregar la herramienta al registro de herramientas de Gemini CLI',
      ru: 'Добавить инструмент в реестр инструментов Gemini CLI'
    },
    icon: RocketLaunchIcon,
    example: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();

// Create complete tool
const ageTool = {
  ...toolDefinition,
  execute: executeFunction
};

// Register the tool
cli.registerTool(ageTool);

// Verify registration
console.log('Registered tools:', cli.listTools().map(t => t.name));`
  },
  {
    step: 4,
    title: {
      zh: '测试工具',
      en: 'Test the Tool',
      hi: 'टूल का परीक्षण करें',
      fr: 'Tester l\'Outil',
      de: 'Tool testen',
      ja: 'ツールをテスト',
      ko: '도구 테스트',
      es: 'Probar la Herramienta',
      ru: 'Протестировать инструмент'
    },
    description: {
      zh: '测试您的工具以确保其正常工作',
      en: 'Test your tool to ensure it works correctly',
      hi: 'यह सुनिश्चित करने के लिए अपने टूल का परीक्षण करें कि यह सही तरीके से काम करता है',
      fr: 'Testez votre outil pour vous assurer qu\'il fonctionne correctement',
      de: 'Testen Sie Ihr Tool, um sicherzustellen, dass es korrekt funktioniert',
      ja: 'ツールが正しく動作することを確認するためにテスト',
      ko: '도구가 올바르게 작동하는지 확인하기 위해 테스트',
      es: 'Prueba tu herramienta para asegurar que funciona correctamente',
      ru: 'Протестируйте ваш инструмент, чтобы убедиться, что он работает правильно'
    },
    icon: CheckCircleIcon,
    example: `// Test the tool directly
const result = await cli.executeTool('calculate_age', {
  birthDate: '1990-05-15'
});
console.log(result); // "Age: 34 years old"

// Test with AI
const response = await cli.ask(
  "How old would someone born on May 15, 1990 be today?",
  { tools: ['calculate_age'] }
);`
  }
]

const toolTemplate = `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

export const myCustomTool: ToolDefinition = {
  name: 'my_custom_tool',
  description: 'Description of what this tool does',
  parameters: {
    type: 'object',
    properties: {
      // Define your parameters here
      input: {
        type: 'string',
        description: 'Input parameter description'
      }
    },
    required: ['input']
  },
  execute: async (params) => {
    try {
      // Your tool logic here
      const { input } = params;
      
      // Process the input
      const result = processInput(input);
      
      // Return the result
      return result;
    } catch (error) {
      // Handle errors gracefully
      return \`Error: \${error.message}\`;
    }
  }
};

function processInput(input: string): string {
  // Your processing logic
  return \`Processed: \${input}\`;
}`

const bestPractices = [
  {
    category: {
      zh: '工具设计',
      en: 'Tool Design',
      hi: 'टूल डिज़ाइन',
      fr: 'Conception d\'Outil',
      de: 'Tool-Design',
      ja: 'ツール設計',
      ko: '도구 설계',
      es: 'Diseño de Herramienta',
      ru: 'Дизайн инструмента'
    },
    practices: {
      zh: [
        '保持工具专注于单一职责',
        '使用清晰、描述性的名称和描述',
        '定义全面的参数模式',
        '在参数描述中包含示例',
        '优雅地处理边缘情况'
      ],
      en: [
        'Keep tools focused on a single responsibility',
        'Use clear, descriptive names and descriptions',
        'Define comprehensive parameter schemas',
        'Include examples in parameter descriptions',
        'Handle edge cases gracefully'
      ],
      hi: [
        'टूल्स को एकल जिम्मेदारी पर केंद्रित रखें',
        'स्पष्ट, वर्णनात्मक नाम और विवरण का उपयोग करें',
        'व्यापक पैरामीटर स्कीमा परिभाषित करें',
        'पैरामीटर विवरण में उदाहरण शामिल करें',
        'किनारे के मामलों को सुंदर तरीके से संभालें'
      ],
      fr: [
        'Gardez les outils concentrés sur une seule responsabilité',
        'Utilisez des noms et descriptions clairs et descriptifs',
        'Définissez des schémas de paramètres complets',
        'Incluez des exemples dans les descriptions de paramètres',
        'Gérez les cas limites avec élégance'
      ],
      de: [
        'Halten Sie Tools auf eine einzige Verantwortung fokussiert',
        'Verwenden Sie klare, beschreibende Namen und Beschreibungen',
        'Definieren Sie umfassende Parameter-Schemas',
        'Fügen Sie Beispiele in Parameterbeschreibungen ein',
        'Behandeln Sie Grenzfälle elegant'
      ],
      ja: [
        'ツールを単一の責任に集中させる',
        '明確で説明的な名前と説明を使用',
        '包括的なパラメータスキーマを定義',
        'パラメータ説明に例を含める',
        'エッジケースを優雅に処理'
      ],
      ko: [
        '도구를 단일 책임에 집중시키기',
        '명확하고 설명적인 이름과 설명 사용',
        '포괄적인 매개변수 스키마 정의',
        '매개변수 설명에 예제 포함',
        '엣지 케이스를 우아하게 처리'
      ],
      es: [
        'Mantener las herramientas enfocadas en una sola responsabilidad',
        'Usar nombres y descripciones claros y descriptivos',
        'Definir esquemas de parámetros integrales',
        'Incluir ejemplos en las descripciones de parámetros',
        'Manejar casos límite con elegancia'
      ],
      ru: [
        'Держите инструменты сосредоточенными на одной ответственности',
        'Используйте четкие, описательные имена и описания',
        'Определите комплексные схемы параметров',
        'Включите примеры в описания параметров',
        'Изящно обрабатывайте крайние случаи'
      ]
    }
  },
  {
    category: {
      zh: '错误处理',
      en: 'Error Handling',
      hi: 'त्रुटि प्रबंधन',
      fr: 'Gestion d\'Erreurs',
      de: 'Fehlerbehandlung',
      ja: 'エラー処理',
      ko: '오류 처리',
      es: 'Manejo de Errores',
      ru: 'Обработка ошибок'
    },
    practices: {
      zh: [
        '始终在 try-catch 块中包装执行',
        '返回有意义的错误消息',
        '验证输入参数',
        '处理网络超时和失败',
        '记录错误以便调试'
      ],
      en: [
        'Always wrap execution in try-catch blocks',
        'Return meaningful error messages',
        'Validate input parameters',
        'Handle network timeouts and failures',
        'Log errors for debugging'
      ],
      hi: [
        'हमेशा try-catch ब्लॉक में निष्पादन को लपेटें',
        'अर्थपूर्ण त्रुटि संदेश वापस करें',
        'इनपुट पैरामीटर को मान्य करें',
        'नेटवर्क टाइमआउट और विफलताओं को संभालें',
        'डिबगिंग के लिए त्रुटियों को लॉग करें'
      ],
      fr: [
        'Toujours envelopper l\'exécution dans des blocs try-catch',
        'Retourner des messages d\'erreur significatifs',
        'Valider les paramètres d\'entrée',
        'Gérer les timeouts et échecs réseau',
        'Enregistrer les erreurs pour le débogage'
      ],
      de: [
        'Ausführung immer in try-catch-Blöcke einschließen',
        'Aussagekräftige Fehlermeldungen zurückgeben',
        'Eingabeparameter validieren',
        'Netzwerk-Timeouts und -Fehler behandeln',
        'Fehler für Debugging protokollieren'
      ],
      ja: [
        '実行を常にtry-catchブロックで囲む',
        '意味のあるエラーメッセージを返す',
        '入力パラメータを検証',
        'ネットワークタイムアウトと失敗を処理',
        'デバッグのためにエラーをログ'
      ],
      ko: [
        '항상 try-catch 블록으로 실행을 감싸기',
        '의미 있는 오류 메시지 반환',
        '입력 매개변수 검증',
        '네트워크 타임아웃 및 실패 처리',
        '디버깅을 위한 오류 로깅'
      ],
      es: [
        'Siempre envolver la ejecución en bloques try-catch',
        'Devolver mensajes de error significativos',
        'Validar parámetros de entrada',
        'Manejar timeouts y fallos de red',
        'Registrar errores para depuración'
      ],
      ru: [
        'Всегда оборачивайте выполнение в блоки try-catch',
        'Возвращайте осмысленные сообщения об ошибках',
        'Проверяйте входные параметры',
        'Обрабатывайте сетевые таймауты и сбои',
        'Логируйте ошибки для отладки'
      ]
    }
  },
  {
    category: {
      zh: '性能',
      en: 'Performance',
      hi: 'प्रदर्शन',
      fr: 'Performance',
      de: 'Leistung',
      ja: 'パフォーマンス',
      ko: '성능',
      es: 'Rendimiento',
      ru: 'Производительность'
    },
    practices: {
      zh: [
        '正确实现异步操作',
        '为长时间操作添加超时处理',
        '在适当时缓存结果',
        '最小化外部依赖',
        '对大响应使用流式传输'
      ],
      en: [
        'Implement async operations properly',
        'Add timeout handling for long operations',
        'Cache results when appropriate',
        'Minimize external dependencies',
        'Use streaming for large responses'
      ],
      hi: [
        'एसिंक ऑपरेशन को सही तरीके से लागू करें',
        'लंबे ऑपरेशन के लिए टाइमआउट हैंडलिंग जोड़ें',
        'उपयुक्त होने पर परिणामों को कैश करें',
        'बाहरी निर्भरताओं को कम करें',
        'बड़े रिस्पॉन्स के लिए स्ट्रीमिंग का उपयोग करें'
      ],
      fr: [
        'Implémenter correctement les opérations asynchrones',
        'Ajouter la gestion des timeouts pour les opérations longues',
        'Mettre en cache les résultats quand approprié',
        'Minimiser les dépendances externes',
        'Utiliser le streaming pour les grandes réponses'
      ],
      de: [
        'Asynchrone Operationen korrekt implementieren',
        'Timeout-Behandlung für lange Operationen hinzufügen',
        'Ergebnisse bei Bedarf zwischenspeichern',
        'Externe Abhängigkeiten minimieren',
        'Streaming für große Antworten verwenden'
      ],
      ja: [
        '非同期操作を適切に実装',
        '長時間の操作にタイムアウト処理を追加',
        '適切な場合に結果をキャッシュ',
        '外部依存関係を最小化',
        '大きなレスポンスにストリーミングを使用'
      ],
      ko: [
        '비동기 작업을 올바르게 구현',
        '장시간 작업에 타임아웃 처리 추가',
        '적절한 경우 결과 캐싱',
        '외부 종속성 최소화',
        '큰 응답에 스트리밍 사용'
      ],
      es: [
        'Implementar operaciones asíncronas correctamente',
        'Agregar manejo de timeout para operaciones largas',
        'Cachear resultados cuando sea apropiado',
        'Minimizar dependencias externas',
        'Usar streaming para respuestas grandes'
      ],
      ru: [
        'Правильно реализовать асинхронные операции',
        'Добавить обработку таймаутов для длительных операций',
        'Кэшировать результаты при необходимости',
        'Минимизировать внешние зависимости',
        'Использовать потоковую передачу для больших ответов'
      ]
    }
  },
  {
    category: {
      zh: '安全',
      en: 'Security',
      hi: 'सुरक्षा',
      fr: 'Sécurité',
      de: 'Sicherheit',
      ja: 'セキュリティ',
      ko: '보안',
      es: 'Seguridad',
      ru: 'Безопасность'
    },
    practices: {
      zh: [
        '验证和清理所有输入',
        '避免执行任意代码',
        '限制文件系统访问',
        '使用安全的 API 端点',
        '小心处理敏感数据'
      ],
      en: [
        'Validate and sanitize all inputs',
        'Avoid executing arbitrary code',
        'Limit file system access',
        'Use secure API endpoints',
        'Handle sensitive data carefully'
      ],
      hi: [
        'सभी इनपुट को मान्य और साफ करें',
        'मनमाने कोड निष्पादन से बचें',
        'फ़ाइल सिस्टम एक्सेस को सीमित करें',
        'सुरक्षित API एंडपॉइंट का उपयोग करें',
        'संवेदनशील डेटा को सावधानी से संभालें'
      ],
      fr: [
        'Valider et nettoyer toutes les entrées',
        'Éviter d\'exécuter du code arbitraire',
        'Limiter l\'accès au système de fichiers',
        'Utiliser des points de terminaison API sécurisés',
        'Gérer les données sensibles avec précaution'
      ],
      de: [
        'Alle Eingaben validieren und bereinigen',
        'Ausführung von beliebigem Code vermeiden',
        'Dateisystemzugriff begrenzen',
        'Sichere API-Endpunkte verwenden',
        'Sensible Daten vorsichtig behandeln'
      ],
      ja: [
        'すべての入力を検証・サニタイズ',
        '任意のコード実行を避ける',
        'ファイルシステムアクセスを制限',
        'セキュアなAPIエンドポイントを使用',
        '機密データを慎重に処理'
      ],
      ko: [
        '모든 입력을 검증하고 정리',
        '임의 코드 실행 방지',
        '파일 시스템 액세스 제한',
        '보안 API 엔드포인트 사용',
        '민감한 데이터를 신중하게 처리'
      ],
      es: [
        'Validar y limpiar todas las entradas',
        'Evitar ejecutar código arbitrario',
        'Limitar el acceso al sistema de archivos',
        'Usar endpoints de API seguros',
        'Manejar datos sensibles con cuidado'
      ],
      ru: [
        'Проверять и очищать все входные данные',
        'Избегать выполнения произвольного кода',
        'Ограничить доступ к файловой системе',
        'Использовать безопасные API-эндпоинты',
        'Осторожно обрабатывать конфиденциальные данные'
      ]
    }
  }
]

export default async function ToolDevelopmentPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  // Helper function to get localized text
  const getLocalizedText = (textObj: any) => textObj[locale as keyof typeof textObj] || textObj.en

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {locale === 'zh' ? '工具开发' :
               locale === 'hi' ? 'टूल डेवलपमेंट' :
               locale === 'fr' ? 'Développement d\'Outils' :
               locale === 'de' ? 'Tool-Entwicklung' :
               locale === 'ja' ? 'ツール開発' :
               locale === 'ko' ? '도구 개발' :
               locale === 'es' ? 'Desarrollo de Herramientas' :
               locale === 'ru' ? 'Разработка инструментов' :
               'Tool Development'}
            </h1>
            <p className="mt-6 text-xl leading-8 text-orange-100">
              {locale === 'zh'
                ? '创建自定义工具来扩展 Gemini CLI 的功能。学习如何设计、实现、测试和部署与 AI 对话无缝集成的工具。'
                : locale === 'hi'
                ? 'Gemini CLI की क्षमताओं को बढ़ाने के लिए कस्टम टूल्स बनाएं। AI बातचीत के साथ निर्बाध रूप से एकीकृत होने वाले टूल्स को डिज़ाइन, लागू, परीक्षण और तैनात करना सीखें।'
                : locale === 'fr'
                ? 'Créez des outils personnalisés pour étendre les capacités de Gemini CLI. Apprenez à concevoir, implémenter, tester et déployer des outils qui s\'intègrent parfaitement aux conversations IA.'
                : locale === 'de'
                ? 'Erstellen Sie benutzerdefinierte Tools, um die Fähigkeiten von Gemini CLI zu erweitern. Lernen Sie, wie Sie Tools entwerfen, implementieren, testen und bereitstellen, die sich nahtlos in KI-Gespräche integrieren.'
                : locale === 'ja'
                ? 'Gemini CLI の機能を拡張するカスタムツールを作成します。AI 会話とシームレスに統合するツールの設計、実装、テスト、デプロイ方法を学びます。'
                : locale === 'ko'
                ? 'Gemini CLI의 기능을 확장하는 사용자 정의 도구를 만듭니다. AI 대화와 원활하게 통합되는 도구를 설계, 구현, 테스트 및 배포하는 방법을 배웁니다.'
                : locale === 'es'
                ? 'Crea herramientas personalizadas para extender las capacidades de Gemini CLI. Aprende a diseñar, implementar, probar y desplegar herramientas que se integren perfectamente con conversaciones de IA.'
                : locale === 'ru'
                ? 'Создавайте пользовательские инструменты для расширения возможностей Gemini CLI. Изучите, как проектировать, реализовывать, тестировать и развертывать инструменты, которые бесшовно интегрируются с ИИ-разговорами.'
                : 'Create custom tools to extend Gemini CLI\'s capabilities. Learn how to design, implement, test, and deploy tools that integrate seamlessly with AI conversations.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '开发流程' :
               locale === 'hi' ? 'विकास प्रक्रिया' :
               locale === 'fr' ? 'Processus de Développement' :
               locale === 'de' ? 'Entwicklungsprozess' :
               locale === 'ja' ? '開発プロセス' :
               locale === 'ko' ? '개발 프로세스' :
               locale === 'es' ? 'Proceso de Desarrollo' :
               locale === 'ru' ? 'Процесс разработки' :
               'Development Process'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '创建自定义工具的分步指南' :
               locale === 'hi' ? 'कस्टम टूल्स बनाने के लिए चरणबद्ध गाइड' :
               locale === 'fr' ? 'Guide étape par étape pour créer des outils personnalisés' :
               locale === 'de' ? 'Schritt-für-Schritt-Anleitung zur Erstellung benutzerdefinierter Tools' :
               locale === 'ja' ? 'カスタムツール作成のステップバイステップガイド' :
               locale === 'ko' ? '사용자 정의 도구 생성을 위한 단계별 가이드' :
               locale === 'es' ? 'Guía paso a paso para crear herramientas personalizadas' :
               locale === 'ru' ? 'Пошаговое руководство по созданию пользовательских инструментов' :
               'Step-by-step guide to creating custom tools'}
            </p>
          </div>

          <div className="space-y-12">
            {developmentSteps.map((step, index) => (
              <div key={step.step} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <step.icon className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {getLocalizedText(step.title)}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {getLocalizedText(step.description)}
                    </p>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        {locale === 'zh' ? '示例：' :
                         locale === 'hi' ? 'उदाहरण:' :
                         locale === 'fr' ? 'Exemple:' :
                         locale === 'de' ? 'Beispiel:' :
                         locale === 'ja' ? '例:' :
                         locale === 'ko' ? '예제:' :
                         locale === 'es' ? 'Ejemplo:' :
                         locale === 'ru' ? 'Пример:' :
                         'Example:'}
                      </h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{step.example}</code>
                      </pre>
                    </div>
                  </div>
                </div>
                {index < developmentSteps.length - 1 && (
                  <div className="ml-6 mt-6">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Template */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '工具模板' :
               locale === 'hi' ? 'टूल टेम्प्लेट' :
               locale === 'fr' ? 'Modèle d\'Outil' :
               locale === 'de' ? 'Tool-Vorlage' :
               locale === 'ja' ? 'ツールテンプレート' :
               locale === 'ko' ? '도구 템플릿' :
               locale === 'es' ? 'Plantilla de Herramienta' :
               locale === 'ru' ? 'Шаблон инструмента' :
               'Tool Template'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '使用此模板快速开始您的自定义工具开发' :
               locale === 'hi' ? 'अपने कस्टम टूल डेवलपमेंट को जल्दी शुरू करने के लिए इस टेम्प्लेट का उपयोग करें' :
               locale === 'fr' ? 'Utilisez ce modèle pour commencer rapidement votre développement d\'outils personnalisés' :
               locale === 'de' ? 'Verwenden Sie diese Vorlage, um schnell mit Ihrer benutzerdefinierten Tool-Entwicklung zu beginnen' :
               locale === 'ja' ? 'このテンプレートを使用してカスタムツール開発を素早く開始' :
               locale === 'ko' ? '이 템플릿을 사용하여 사용자 정의 도구 개발을 빠르게 시작' :
               locale === 'es' ? 'Usa esta plantilla para comenzar rápidamente tu desarrollo de herramientas personalizadas' :
               locale === 'ru' ? 'Используйте этот шаблон для быстрого начала разработки пользовательских инструментов' :
               'Use this template to quickly start your custom tool development'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? '基础工具模板' :
                 locale === 'hi' ? 'बेसिक टूल टेम्प्लेट' :
                 locale === 'fr' ? 'Modèle d\'Outil de Base' :
                 locale === 'de' ? 'Basis-Tool-Vorlage' :
                 locale === 'ja' ? '基本ツールテンプレート' :
                 locale === 'ko' ? '기본 도구 템플릿' :
                 locale === 'es' ? 'Plantilla de Herramienta Básica' :
                 locale === 'ru' ? 'Базовый шаблон инструмента' :
                 'Basic Tool Template'}
              </h3>
              <p className="text-gray-600">
                {locale === 'zh'
                  ? '复制此模板并根据您的需求进行修改。确保更新名称、描述、参数和执行逻辑。'
                  : locale === 'hi'
                  ? 'इस टेम्प्लेट को कॉपी करें और अपनी आवश्यकताओं के अनुसार इसे संशोधित करें। नाम, विवरण, पैरामीटर और निष्पादन तर्क को अपडेट करना सुनिश्चित करें।'
                  : locale === 'fr'
                  ? 'Copiez ce modèle et modifiez-le selon vos besoins. Assurez-vous de mettre à jour le nom, la description, les paramètres et la logique d\'exécution.'
                  : locale === 'de'
                  ? 'Kopieren Sie diese Vorlage und ändern Sie sie entsprechend Ihren Bedürfnissen. Stellen Sie sicher, dass Sie Name, Beschreibung, Parameter und Ausführungslogik aktualisieren.'
                  : locale === 'ja'
                  ? 'このテンプレートをコピーして、ニーズに応じて変更してください。名前、説明、パラメータ、実行ロジックを更新することを確認してください。'
                  : locale === 'ko'
                  ? '이 템플릿을 복사하고 필요에 따라 수정하세요. 이름, 설명, 매개변수 및 실행 로직을 업데이트해야 합니다.'
                  : locale === 'es'
                  ? 'Copia esta plantilla y modifícala según tus necesidades. Asegúrate de actualizar el nombre, descripción, parámetros y lógica de ejecución.'
                  : locale === 'ru'
                  ? 'Скопируйте этот шаблон и измените его в соответствии с вашими потребностями. Убедитесь, что обновили имя, описание, параметры и логику выполнения.'
                  : 'Copy this template and modify it according to your needs. Make sure to update the name, description, parameters, and execution logic.'
                }
              </p>
            </div>

            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{toolTemplate}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '最佳实践' :
               locale === 'hi' ? 'सर्वोत्तम प्रथाएं' :
               locale === 'fr' ? 'Meilleures Pratiques' :
               locale === 'de' ? 'Bewährte Praktiken' :
               locale === 'ja' ? 'ベストプラクティス' :
               locale === 'ko' ? '모범 사례' :
               locale === 'es' ? 'Mejores Prácticas' :
               locale === 'ru' ? 'Лучшие практики' :
               'Best Practices'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '遵循这些指导原则创建高质量、可靠的工具' :
               locale === 'hi' ? 'उच्च गुणवत्ता, विश्वसनीय टूल्स बनाने के लिए इन दिशानिर्देशों का पालन करें' :
               locale === 'fr' ? 'Suivez ces directives pour créer des outils de haute qualité et fiables' :
               locale === 'de' ? 'Befolgen Sie diese Richtlinien, um hochwertige, zuverlässige Tools zu erstellen' :
               locale === 'ja' ? '高品質で信頼性の高いツールを作成するためのガイドラインに従ってください' :
               locale === 'ko' ? '고품질의 신뢰할 수 있는 도구를 만들기 위해 이러한 지침을 따르세요' :
               locale === 'es' ? 'Sigue estas pautas para crear herramientas de alta calidad y confiables' :
               locale === 'ru' ? 'Следуйте этим рекомендациям для создания высококачественных, надежных инструментов' :
               'Follow these guidelines to create high-quality, reliable tools'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    {index === 0 && <WrenchScrewdriverIcon className="h-6 w-6" />}
                    {index === 1 && <ExclamationTriangleIcon className="h-6 w-6" />}
                    {index === 2 && <RocketLaunchIcon className="h-6 w-6" />}
                    {index === 3 && <CheckCircleIcon className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">
                    {getLocalizedText(section.category)}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {getLocalizedText(section.practices).map((practice: string, practiceIndex: number) => (
                    <li key={practiceIndex} className="text-gray-700 flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testing Your Tools */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '测试您的工具' :
               locale === 'hi' ? 'अपने टूल्स का परीक्षण करें' :
               locale === 'fr' ? 'Tester Vos Outils' :
               locale === 'de' ? 'Testen Sie Ihre Tools' :
               locale === 'ja' ? 'ツールをテスト' :
               locale === 'ko' ? '도구 테스트' :
               locale === 'es' ? 'Probar Sus Herramientas' :
               locale === 'ru' ? 'Тестирование ваших инструментов' :
               'Testing Your Tools'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '确保您的工具在部署前正常工作' :
               locale === 'hi' ? 'तैनाती से पहले सुनिश्चित करें कि आपके टूल्स सही तरीके से काम करते हैं' :
               locale === 'fr' ? 'Assurez-vous que vos outils fonctionnent correctement avant le déploiement' :
               locale === 'de' ? 'Stellen Sie sicher, dass Ihre Tools vor der Bereitstellung korrekt funktionieren' :
               locale === 'ja' ? 'デプロイ前にツールが正しく動作することを確認' :
               locale === 'ko' ? '배포 전에 도구가 올바르게 작동하는지 확인' :
               locale === 'es' ? 'Asegúrate de que tus herramientas funcionen correctamente antes del despliegue' :
               locale === 'ru' ? 'Убедитесь, что ваши инструменты работают правильно перед развертыванием' :
               'Ensure your tools work correctly before deployment'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '单元测试' :
                 locale === 'hi' ? 'यूनिट टेस्टिंग' :
                 locale === 'fr' ? 'Tests Unitaires' :
                 locale === 'de' ? 'Unit-Tests' :
                 locale === 'ja' ? 'ユニットテスト' :
                 locale === 'ko' ? '단위 테스트' :
                 locale === 'es' ? 'Pruebas Unitarias' :
                 locale === 'ru' ? 'Модульное тестирование' :
                 'Unit Testing'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{`// ${locale === 'zh' ? '直接测试工具执行' : 'Test tool execution directly'}
import { myCustomTool } from './my-tool';

describe('myCustomTool', () => {
  test('${locale === 'zh' ? '应该正确处理输入' : 'should process input correctly'}', async () => {
    const result = await myCustomTool.execute({
      input: 'test data'
    });

    expect(result).toBe('${locale === 'zh' ? '已处理: test data' : 'Processed: test data'}');
  });

  test('${locale === 'zh' ? '应该优雅地处理错误' : 'should handle errors gracefully'}', async () => {
    const result = await myCustomTool.execute({
      input: null
    });

    expect(result).toMatch(/${locale === 'zh' ? '错误' : 'Error'}:/);
  });
});`}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '集成测试' :
                 locale === 'hi' ? 'एकीकरण परीक्षण' :
                 locale === 'fr' ? 'Tests d\'Intégration' :
                 locale === 'de' ? 'Integrationstests' :
                 locale === 'ja' ? '統合テスト' :
                 locale === 'ko' ? '통합 테스트' :
                 locale === 'es' ? 'Pruebas de Integración' :
                 locale === 'ru' ? 'Интеграционное тестирование' :
                 'Integration Testing'}
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{`// ${locale === 'zh' ? '使用 Gemini CLI 测试工具' : 'Test tool with Gemini CLI'}
import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
cli.registerTool(myCustomTool);

// ${locale === 'zh' ? '测试工具注册' : 'Test tool registration'}
const tools = cli.listTools();
expect(tools.find(t => t.name === 'my_custom_tool')).toBeDefined();

// ${locale === 'zh' ? '测试工具执行' : 'Test tool execution'}
const result = await cli.executeTool('my_custom_tool', {
  input: 'test'
});
expect(result).toBeDefined();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Testing and Debugging */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '测试和调试' :
               locale === 'hi' ? 'परीक्षण और डिबगिंग' :
               locale === 'fr' ? 'Tests et Débogage' :
               locale === 'de' ? 'Testen und Debugging' :
               locale === 'ja' ? 'テストとデバッグ' :
               locale === 'ko' ? '테스트 및 디버깅' :
               locale === 'es' ? 'Pruebas y Depuración' :
               locale === 'ru' ? 'Тестирование и отладка' :
               'Testing and Debugging'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '确保您的工具可靠运行的技巧' :
               locale === 'hi' ? 'आपके टूल्स को विश्वसनीय रूप से चलाने के लिए टिप्स' :
               locale === 'fr' ? 'Conseils pour assurer le fonctionnement fiable de vos outils' :
               locale === 'de' ? 'Tipps, um sicherzustellen, dass Ihre Tools zuverlässig laufen' :
               locale === 'ja' ? 'ツールが確実に動作するためのヒント' :
               locale === 'ko' ? '도구가 안정적으로 실행되도록 하는 팁' :
               locale === 'es' ? 'Consejos para asegurar que tus herramientas funcionen de manera confiable' :
               locale === 'ru' ? 'Советы для обеспечения надежной работы ваших инструментов' :
               'Tips to ensure your tools run reliably'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '测试策略' :
                 locale === 'hi' ? 'परीक्षण रणनीतियां' :
                 locale === 'fr' ? 'Stratégies de Test' :
                 locale === 'de' ? 'Test-Strategien' :
                 locale === 'ja' ? 'テスト戦略' :
                 locale === 'ko' ? '테스트 전략' :
                 locale === 'es' ? 'Estrategias de Prueba' :
                 locale === 'ru' ? 'Стратегии тестирования' :
                 'Testing Strategies'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '单独测试工具函数' :
                   locale === 'hi' ? 'टूल फ़ंक्शन को अलग से टेस्ट करें' :
                   locale === 'fr' ? 'Tester les fonctions d\'outils en isolation' :
                   locale === 'de' ? 'Tool-Funktionen isoliert testen' :
                   locale === 'ja' ? 'ツール関数を単独でテスト' :
                   locale === 'ko' ? '도구 함수를 독립적으로 테스트' :
                   locale === 'es' ? 'Probar funciones de herramientas en aislamiento' :
                   locale === 'ru' ? 'Тестировать функции инструментов изолированно' :
                   'Test tool functions in isolation'}
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '使用各种输入参数进行测试' :
                   locale === 'hi' ? 'विभिन्न इनपुट पैरामीटर के साथ टेस्ट करें' :
                   locale === 'fr' ? 'Tester avec divers paramètres d\'entrée' :
                   locale === 'de' ? 'Mit verschiedenen Eingabeparametern testen' :
                   locale === 'ja' ? '様々な入力パラメータでテスト' :
                   locale === 'ko' ? '다양한 입력 매개변수로 테스트' :
                   locale === 'es' ? 'Probar con varios parámetros de entrada' :
                   locale === 'ru' ? 'Тестировать с различными входными параметрами' :
                   'Test with various input parameters'}
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '测试错误条件和边缘情况' :
                   locale === 'hi' ? 'त्रुटि स्थितियों और एज केसेस का परीक्षण करें' :
                   locale === 'fr' ? 'Tester les conditions d\'erreur et les cas limites' :
                   locale === 'de' ? 'Fehlerbedingungen und Grenzfälle testen' :
                   locale === 'ja' ? 'エラー条件とエッジケースをテスト' :
                   locale === 'ko' ? '오류 조건 및 엣지 케이스 테스트' :
                   locale === 'es' ? 'Probar condiciones de error y casos límite' :
                   locale === 'ru' ? 'Тестировать условия ошибок и крайние случаи' :
                   'Test error conditions and edge cases'}
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '验证与 AI 的集成' :
                   locale === 'hi' ? 'AI के साथ एकीकरण को सत्यापित करें' :
                   locale === 'fr' ? 'Vérifier l\'intégration avec l\'IA' :
                   locale === 'de' ? 'Integration mit KI verifizieren' :
                   locale === 'ja' ? 'AIとの統合を検証' :
                   locale === 'ko' ? 'AI와의 통합 검증' :
                   locale === 'es' ? 'Verificar integración con IA' :
                   locale === 'ru' ? 'Проверить интеграцию с ИИ' :
                   'Verify integration with AI'}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? '调试技巧' :
                 locale === 'hi' ? 'डिबगिंग टिप्स' :
                 locale === 'fr' ? 'Conseils de Débogage' :
                 locale === 'de' ? 'Debugging-Tipps' :
                 locale === 'ja' ? 'デバッグのヒント' :
                 locale === 'ko' ? '디버깅 팁' :
                 locale === 'es' ? 'Consejos de Depuración' :
                 locale === 'ru' ? 'Советы по отладке' :
                 'Debugging Tips'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '添加详细的日志记录' :
                   locale === 'hi' ? 'विस्तृत लॉगिंग जोड़ें' :
                   locale === 'fr' ? 'Ajouter une journalisation détaillée' :
                   locale === 'de' ? 'Detaillierte Protokollierung hinzufügen' :
                   locale === 'ja' ? '詳細なログ記録を追加' :
                   locale === 'ko' ? '상세한 로깅 추가' :
                   locale === 'es' ? 'Agregar registro detallado' :
                   locale === 'ru' ? 'Добавить подробное логирование' :
                   'Add detailed logging'}
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '使用 console.log 进行调试' :
                   locale === 'hi' ? 'डिबगिंग के लिए console.log का उपयोग करें' :
                   locale === 'fr' ? 'Utiliser console.log pour le débogage' :
                   locale === 'de' ? 'console.log für Debugging verwenden' :
                   locale === 'ja' ? 'デバッグにconsole.logを使用' :
                   locale === 'ko' ? '디버깅을 위해 console.log 사용' :
                   locale === 'es' ? 'Usar console.log para depuración' :
                   locale === 'ru' ? 'Использовать console.log для отладки' :
                   'Use console.log for debugging'}
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '检查参数验证' :
                   locale === 'hi' ? 'पैरामीटर सत्यापन की जांच करें' :
                   locale === 'fr' ? 'Vérifier la validation des paramètres' :
                   locale === 'de' ? 'Parametervalidierung überprüfen' :
                   locale === 'ja' ? 'パラメータ検証をチェック' :
                   locale === 'ko' ? '매개변수 검증 확인' :
                   locale === 'es' ? 'Verificar validación de parámetros' :
                   locale === 'ru' ? 'Проверить валидацию параметров' :
                   'Check parameter validation'}
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  {locale === 'zh' ? '监控性能指标' :
                   locale === 'hi' ? 'प्रदर्शन मेट्रिक्स की निगरानी करें' :
                   locale === 'fr' ? 'Surveiller les métriques de performance' :
                   locale === 'de' ? 'Leistungsmetriken überwachen' :
                   locale === 'ja' ? 'パフォーマンスメトリクスを監視' :
                   locale === 'ko' ? '성능 메트릭 모니터링' :
                   locale === 'es' ? 'Monitorear métricas de rendimiento' :
                   locale === 'ru' ? 'Мониторить метрики производительности' :
                   'Monitor performance metrics'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Common Tool Patterns */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '常见工具模式' :
               locale === 'hi' ? 'सामान्य टूल पैटर्न' :
               locale === 'fr' ? 'Modèles d\'Outils Communs' :
               locale === 'de' ? 'Häufige Tool-Muster' :
               locale === 'ja' ? '一般的なツールパターン' :
               locale === 'ko' ? '일반적인 도구 패턴' :
               locale === 'es' ? 'Patrones de Herramientas Comunes' :
               locale === 'ru' ? 'Общие шаблоны инструментов' :
               'Common Tool Patterns'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '不同类型工具的可重用模式' :
               locale === 'hi' ? 'विभिन्न प्रकार के टूल्स के लिए पुन: उपयोग योग्य पैटर्न' :
               locale === 'fr' ? 'Modèles réutilisables pour différents types d\'outils' :
               locale === 'de' ? 'Wiederverwendbare Muster für verschiedene Tool-Typen' :
               locale === 'ja' ? '異なるタイプのツール用の再利用可能なパターン' :
               locale === 'ko' ? '다양한 유형의 도구를 위한 재사용 가능한 패턴' :
               locale === 'es' ? 'Patrones reutilizables para diferentes tipos de herramientas' :
               locale === 'ru' ? 'Многоразовые шаблоны для различных типов инструментов' :
               'Reusable patterns for different types of tools'}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? 'API 集成工具' :
                 locale === 'hi' ? 'API एकीकरण टूल' :
                 locale === 'fr' ? 'Outil d\'Intégration API' :
                 locale === 'de' ? 'API-Integrations-Tool' :
                 locale === 'ja' ? 'API統合ツール' :
                 locale === 'ko' ? 'API 통합 도구' :
                 locale === 'es' ? 'Herramienta de Integración API' :
                 locale === 'ru' ? 'Инструмент интеграции API' :
                 'API Integration Tool'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh' ? '与外部 API 集成的工具模式' :
                 locale === 'hi' ? 'बाहरी API के साथ एकीकृत होने वाले टूल्स के लिए पैटर्न' :
                 locale === 'fr' ? 'Modèle pour les outils qui s\'intègrent avec des API externes' :
                 locale === 'de' ? 'Muster für Tools, die sich in externe APIs integrieren' :
                 locale === 'ja' ? '外部APIと統合するツールのパターン' :
                 locale === 'ko' ? '외부 API와 통합하는 도구의 패턴' :
                 locale === 'es' ? 'Patrón para herramientas que se integran con APIs externas' :
                 locale === 'ru' ? 'Шаблон для инструментов, интегрирующихся с внешними API' :
                 'Pattern for tools that integrate with external APIs'}
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`const apiTool = {
  name: 'api_call',
  description: '${locale === 'zh' ? '调用外部服务的 API' : 'Make API calls to external services'}',
  parameters: {
    type: 'object',
    properties: {
      endpoint: { type: 'string', description: '${locale === 'zh' ? 'API 端点 URL' : 'API endpoint URL'}' },
      method: { type: 'string', enum: ['GET', 'POST'], default: 'GET' },
      data: { type: 'object', description: '${locale === 'zh' ? '请求负载' : 'Request payload'}' }
    },
    required: ['endpoint']
  },
  execute: async ({ endpoint, method = 'GET', data }) => {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : undefined
      });

      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }

      return await response.json();
    } catch (error) {
      return \`${locale === 'zh' ? 'API 错误' : 'API Error'}: \${error.message}\`;
    }
  }
};`}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? '数据处理工具' :
                 locale === 'hi' ? 'डेटा प्रोसेसिंग टूल' :
                 locale === 'fr' ? 'Outil de Traitement de Données' :
                 locale === 'de' ? 'Datenverarbeitungs-Tool' :
                 locale === 'ja' ? 'データ処理ツール' :
                 locale === 'ko' ? '데이터 처리 도구' :
                 locale === 'es' ? 'Herramienta de Procesamiento de Datos' :
                 locale === 'ru' ? 'Инструмент обработки данных' :
                 'Data Processing Tool'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'zh' ? '处理和转换数据的工具模式' :
                 locale === 'hi' ? 'डेटा को प्रोसेस और ट्रांसफॉर्म करने वाले टूल्स के लिए पैटर्न' :
                 locale === 'fr' ? 'Modèle pour les outils qui traitent et transforment les données' :
                 locale === 'de' ? 'Muster für Tools, die Daten verarbeiten und transformieren' :
                 locale === 'ja' ? 'データを処理・変換するツールのパターン' :
                 locale === 'ko' ? '데이터를 처리하고 변환하는 도구의 패턴' :
                 locale === 'es' ? 'Patrón para herramientas que procesan y transforman datos' :
                 locale === 'ru' ? 'Шаблон для инструментов, обрабатывающих и преобразующих данные' :
                 'Pattern for tools that process and transform data'}
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`const processingTool = {
  name: 'data_processor',
  description: '${locale === 'zh' ? '处理和转换数据' : 'Process and transform data'}',
  parameters: {
    type: 'object',
    properties: {
      data: { type: 'array', description: '${locale === 'zh' ? '要处理的数据' : 'Data to process'}' },
      operation: {
        type: 'string',
        enum: ['sort', 'filter', 'map', 'reduce'],
        description: '${locale === 'zh' ? '要执行的操作' : 'Operation to perform'}'
      },
      criteria: { type: 'string', description: '${locale === 'zh' ? '处理条件' : 'Processing criteria'}' }
    },
    required: ['data', 'operation']
  },
  execute: async ({ data, operation, criteria }) => {
    try {
      switch (operation) {
        case 'sort':
          return data.sort();
        case 'filter':
          return data.filter(item => item.includes(criteria));
        case 'map':
          return data.map(item => \`\${criteria}: \${item}\`);
        case 'reduce':
          return data.reduce((acc, item) => acc + item, '');
        default:
          throw new Error(\`${locale === 'zh' ? '未知操作' : 'Unknown operation'}: \${operation}\`);
      }
    } catch (error) {
      return \`${locale === 'zh' ? '处理错误' : 'Processing Error'}: \${error.message}\`;
    }
  }
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-orange-50 py-16 sm:py-20">
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
              {locale === 'zh' ? '深入了解工具开发和 API 集成' :
               locale === 'hi' ? 'टूल डेवलपमेंट और API एकीकरण में गहराई से जानें' :
               locale === 'fr' ? 'Approfondissez le développement d\'outils et l\'intégration API' :
               locale === 'de' ? 'Vertiefen Sie sich in Tool-Entwicklung und API-Integration' :
               locale === 'ja' ? 'ツール開発とAPI統合についてより深く学ぶ' :
               locale === 'ko' ? '도구 개발 및 API 통합에 대해 더 깊이 알아보기' :
               locale === 'es' ? 'Profundiza en el desarrollo de herramientas e integración de API' :
               locale === 'ru' ? 'Углубитесь в разработку инструментов и интеграцию API' :
               'Dive deeper into tool development and API integration'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/tools-api`}
                className="rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors"
              >
                {locale === 'zh' ? '工具 API' :
                 locale === 'hi' ? 'टूल्स API' :
                 locale === 'fr' ? 'API Outils' :
                 locale === 'de' ? 'Tools API' :
                 locale === 'ja' ? 'ツール API' :
                 locale === 'ko' ? '도구 API' :
                 locale === 'es' ? 'API de Herramientas' :
                 locale === 'ru' ? 'API инструментов' :
                 'Tools API'}
              </Link>
              <Link
                href={`/${locale}/docs/built-in-tools`}
                className="rounded-lg border border-orange-600 px-6 py-3 text-base font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
              >
                {locale === 'zh' ? '内置工具' :
                 locale === 'hi' ? 'अंतर्निहित उपकरण' :
                 locale === 'fr' ? 'Outils Intégrés' :
                 locale === 'de' ? 'Eingebaute Tools' :
                 locale === 'ja' ? '組み込みツール' :
                 locale === 'ko' ? '내장 도구' :
                 locale === 'es' ? 'Herramientas Integradas' :
                 locale === 'ru' ? 'Встроенные инструменты' :
                 'Built-in Tools'}
              </Link>
              <Link
                href={`/${locale}/docs/plugin-api`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '插件 API' :
                 locale === 'hi' ? 'प्लगइन API' :
                 locale === 'fr' ? 'API Plugin' :
                 locale === 'de' ? 'Plugin API' :
                 locale === 'ja' ? 'プラグイン API' :
                 locale === 'ko' ? '플러그인 API' :
                 locale === 'es' ? 'API de Plugin' :
                 locale === 'ru' ? 'API плагинов' :
                 'Plugin API'}
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
