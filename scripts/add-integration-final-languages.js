const fs = require('fs');
const path = require('path');

// Complete integration translations for final languages (Japanese, Korean, Spanish, Russian)
const integrationTranslations = {
  ja: {
    "title": "他のツールとの統合",
    "subtitle": "開発ワークフローにGemini CLIを統合する",
    "description": "既存の開発ツールチェーン、IDE、自動化プロセスにGemini CLIをシームレスに統合して生産性を向上させる方法を学びます。",
    "overview": {
      "title": "統合の概要",
      "description": "Gemini CLIは複数の統合方法を提供し、あらゆる開発環境でAIの強力な機能を最大限に活用できます。IDEプラグイン、CI/CDパイプライン、自動化スクリプトなど、統合は簡単です。"
    },
    "typesTitle": "統合タイプ",
    "typesDescription": "ワークフローに最適な統合方法を選択してください",
    "types": [
      {
        "icon": "ide",
        "title": "IDE統合",
        "description": "お気に入りのコードエディターでGemini CLIを直接使用",
        "features": [
          { "name": "VS Code拡張機能" },
          { "name": "IntelliJプラグイン" },
          { "name": "Vim/Neovim統合" },
          { "name": "Sublime Textサポート" }
        ]
      },
      {
        "icon": "ci",
        "title": "CI/CD統合",
        "description": "継続的インテグレーションとデプロイメントパイプラインでAIアシスタンスを使用",
        "features": [
          { "name": "GitHub Actions" },
          { "name": "GitLab CI" },
          { "name": "Jenkinsプラグイン" },
          { "name": "Azure DevOps" }
        ]
      },
      {
        "icon": "automation",
        "title": "自動化スクリプト",
        "description": "スクリプトとツールを通じて開発タスクを自動化",
        "features": [
          { "name": "シェルスクリプト統合" },
          { "name": "Python自動化" },
          { "name": "Node.jsツール" },
          { "name": "Makefileサポート" }
        ]
      },
      {
        "icon": "deployment",
        "title": "デプロイメント統合",
        "description": "デプロイメント中のコード分析と最適化にAIを活用",
        "features": [
          { "name": "Docker統合" },
          { "name": "Kubernetesサポート" },
          { "name": "クラウドプラットフォーム統合" },
          { "name": "監視とログ記録" }
        ]
      }
    ],
    "workflow": {
      "title": "統合ワークフロー",
      "description": "開発プロセスにGemini CLIを統合するためのステップに従ってください",
      "steps": [
        {
          "title": "環境セットアップ",
          "description": "開発環境でGemini CLIが適切に設定されていることを確認",
          "example": "# インストールを確認\ngemini --version\n\n# APIキーを設定\ngemini config set api-key YOUR_API_KEY"
        },
        {
          "title": "統合方法の選択",
          "description": "ニーズに基づいて最適な統合方法を選択",
          "example": "# IDE統合の例\n# VS Code拡張機能をインストール\ncode --install-extension gemini-cli\n\n# またはコマンドラインエイリアスを設定\nalias ai='gemini chat'"
        },
        {
          "title": "ワークフローの設定",
          "description": "自動化スクリプトとワークフローをセットアップ",
          "example": "# GitHub Actionsの例\nname: AI Code Review\non: [pull_request]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: AI Review\n        run: gemini review --files changed"
        },
        {
          "title": "テストと最適化",
          "description": "統合の効果をテストし、必要に応じて調整",
          "example": "# 統合をテスト\ngemini test-integration\n\n# 使用統計を表示\ngemini stats --integration"
        }
      ]
    },
    "toolsTitle": "人気ツール統合",
    "toolsDescription": "人気の開発ツールとの統合方法を学ぶ",
    "tools": [
      {
        "name": "VS Code",
        "description": "Visual Studio CodeでGemini CLIを使用",
        "steps": [
          { "text": "Gemini CLI拡張機能をインストール" },
          { "text": "APIキーを設定" },
          { "text": "キーボードショートカットでAI機能を呼び出し" },
          { "text": "コマンドと設定をカスタマイズ" }
        ]
      },
      {
        "name": "Git Hooks",
        "description": "GitワークフローにAIチェックを統合",
        "steps": [
          { "text": "pre-commitフックを作成" },
          { "text": "コード品質チェックを設定" },
          { "text": "自動テストをセットアップ" },
          { "text": "コミットメッセージ生成を統合" }
        ]
      },
      {
        "name": "Docker",
        "description": "コンテナ化環境でGemini CLIを使用",
        "steps": [
          { "text": "Gemini CLIでイメージを作成" },
          { "text": "環境変数を設定" },
          { "text": "ボリュームマウントをセットアップ" },
          { "text": "コンテナパフォーマンスを最適化" }
        ]
      }
    ],
    "bestPracticesTitle": "統合のベストプラクティス",
    "bestPracticesDescription": "最適な統合体験のためのベストプラクティスに従ってください",
    "bestPractices": [
      {
        "title": "セキュリティ設定",
        "description": "環境変数やキー管理サービスを使用してAPIキーと機密情報の安全な保存を確保してください。"
      },
      {
        "title": "パフォーマンス最適化",
        "description": "開発体験に影響を与える可能性のある過度なAPI呼び出しを避けるため、キャッシュと並行性設定を適切に設定してください。"
      },
      {
        "title": "エラーハンドリング",
        "description": "統合の失敗が通常の開発ワークフローに影響しないよう、包括的なエラーハンドリングメカニズムを実装してください。"
      },
      {
        "title": "チーム協力",
        "description": "すべてのメンバーが適切に使用できるよう、チーム向けの統一された統合標準と設定を確立してください。"
      }
    ],
    "nextSteps": {
      "title": "次のステップ",
      "description": "より高度な機能とベストプラクティスを学び続けてください",
      "advancedConfig": "高度な設定",
      "codeRefactoring": "コードリファクタリング"
    }
  },
  ko: {
    "title": "다른 도구와의 통합",
    "subtitle": "개발 워크플로우에 Gemini CLI 통합하기",
    "description": "기존 개발 도구체인, IDE, 자동화 프로세스에 Gemini CLI를 원활하게 통합하여 생산성을 향상시키는 방법을 배웁니다.",
    "overview": {
      "title": "통합 개요",
      "description": "Gemini CLI는 여러 통합 방법을 제공하여 모든 개발 환경에서 AI의 강력한 기능을 최대한 활용할 수 있습니다. IDE 플러그인, CI/CD 파이프라인, 자동화 스크립트 등 통합은 간단합니다."
    },
    "typesTitle": "통합 유형",
    "typesDescription": "워크플로우에 가장 적합한 통합 방법을 선택하세요",
    "types": [
      {
        "icon": "ide",
        "title": "IDE 통합",
        "description": "선호하는 코드 에디터에서 Gemini CLI를 직접 사용",
        "features": [
          { "name": "VS Code 확장" },
          { "name": "IntelliJ 플러그인" },
          { "name": "Vim/Neovim 통합" },
          { "name": "Sublime Text 지원" }
        ]
      },
      {
        "icon": "ci",
        "title": "CI/CD 통합",
        "description": "지속적 통합 및 배포 파이프라인에서 AI 지원 사용",
        "features": [
          { "name": "GitHub Actions" },
          { "name": "GitLab CI" },
          { "name": "Jenkins 플러그인" },
          { "name": "Azure DevOps" }
        ]
      },
      {
        "icon": "automation",
        "title": "자동화 스크립트",
        "description": "스크립트와 도구를 통해 개발 작업 자동화",
        "features": [
          { "name": "셸 스크립트 통합" },
          { "name": "Python 자동화" },
          { "name": "Node.js 도구" },
          { "name": "Makefile 지원" }
        ]
      },
      {
        "icon": "deployment",
        "title": "배포 통합",
        "description": "배포 중 코드 분석 및 최적화를 위해 AI 활용",
        "features": [
          { "name": "Docker 통합" },
          { "name": "Kubernetes 지원" },
          { "name": "클라우드 플랫폼 통합" },
          { "name": "모니터링 및 로깅" }
        ]
      }
    ],
    "workflow": {
      "title": "통합 워크플로우",
      "description": "개발 프로세스에 Gemini CLI를 통합하기 위한 단계를 따르세요",
      "steps": [
        {
          "title": "환경 설정",
          "description": "개발 환경에서 Gemini CLI가 올바르게 구성되었는지 확인",
          "example": "# 설치 확인\ngemini --version\n\n# API 키 구성\ngemini config set api-key YOUR_API_KEY"
        },
        {
          "title": "통합 방법 선택",
          "description": "필요에 따라 가장 적합한 통합 방법 선택",
          "example": "# IDE 통합 예제\n# VS Code 확장 설치\ncode --install-extension gemini-cli\n\n# 또는 명령줄 별칭 구성\nalias ai='gemini chat'"
        },
        {
          "title": "워크플로우 구성",
          "description": "자동화 스크립트와 워크플로우 설정",
          "example": "# GitHub Actions 예제\nname: AI Code Review\non: [pull_request]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: AI Review\n        run: gemini review --files changed"
        },
        {
          "title": "테스트 및 최적화",
          "description": "통합 효과를 테스트하고 필요에 따라 조정",
          "example": "# 통합 테스트\ngemini test-integration\n\n# 사용 통계 보기\ngemini stats --integration"
        }
      ]
    },
    "toolsTitle": "인기 도구 통합",
    "toolsDescription": "인기 개발 도구와의 통합 방법 학습",
    "tools": [
      {
        "name": "VS Code",
        "description": "Visual Studio Code에서 Gemini CLI 사용",
        "steps": [
          { "text": "Gemini CLI 확장 설치" },
          { "text": "API 키 구성" },
          { "text": "키보드 단축키로 AI 기능 호출" },
          { "text": "명령 및 설정 사용자 정의" }
        ]
      },
      {
        "name": "Git Hooks",
        "description": "Git 워크플로우에 AI 검사 통합",
        "steps": [
          { "text": "pre-commit 훅 생성" },
          { "text": "코드 품질 검사 구성" },
          { "text": "자동화된 테스트 설정" },
          { "text": "커밋 메시지 생성 통합" }
        ]
      },
      {
        "name": "Docker",
        "description": "컨테이너화된 환경에서 Gemini CLI 사용",
        "steps": [
          { "text": "Gemini CLI로 이미지 생성" },
          { "text": "환경 변수 구성" },
          { "text": "볼륨 마운트 설정" },
          { "text": "컨테이너 성능 최적화" }
        ]
      }
    ],
    "bestPracticesTitle": "통합 모범 사례",
    "bestPracticesDescription": "최적의 통합 경험을 위한 모범 사례를 따르세요",
    "bestPractices": [
      {
        "title": "보안 구성",
        "description": "환경 변수나 키 관리 서비스를 사용하여 API 키와 민감한 정보의 안전한 저장을 보장하세요."
      },
      {
        "title": "성능 최적화",
        "description": "개발 경험에 영향을 줄 수 있는 과도한 API 호출을 피하기 위해 캐싱 및 동시성 설정을 올바르게 구성하세요."
      },
      {
        "title": "오류 처리",
        "description": "통합 실패가 정상적인 개발 워크플로우에 영향을 주지 않도록 포괄적인 오류 처리 메커니즘을 구현하세요."
      },
      {
        "title": "팀 협업",
        "description": "모든 구성원이 올바르게 사용할 수 있도록 팀을 위한 통합된 통합 표준과 구성을 확립하세요."
      }
    ],
    "nextSteps": {
      "title": "다음 단계",
      "description": "더 고급 기능과 모범 사례를 계속 학습하세요",
      "advancedConfig": "고급 구성",
      "codeRefactoring": "코드 리팩토링"
    }
  },
  es: {
    "title": "Integración con Otras Herramientas",
    "subtitle": "Integra Gemini CLI en tu flujo de trabajo de desarrollo",
    "description": "Aprende a integrar sin problemas Gemini CLI en tu cadena de herramientas de desarrollo existente, IDEs y procesos de automatización para aumentar la productividad.",
    "overview": {
      "title": "Resumen de Integración",
      "description": "Gemini CLI proporciona múltiples métodos de integración, permitiéndote aprovechar al máximo las poderosas capacidades de IA en cualquier entorno de desarrollo. Ya sean plugins de IDE, pipelines CI/CD o scripts de automatización, la integración es sencilla."
    },
    "typesTitle": "Tipos de Integración",
    "typesDescription": "Elige el método de integración que mejor se adapte a tu flujo de trabajo",
    "types": [
      {
        "icon": "ide",
        "title": "Integración IDE",
        "description": "Usa Gemini CLI directamente en tu editor de código favorito",
        "features": [
          { "name": "Extensión VS Code" },
          { "name": "Plugin IntelliJ" },
          { "name": "Integración Vim/Neovim" },
          { "name": "Soporte Sublime Text" }
        ]
      },
      {
        "icon": "ci",
        "title": "Integración CI/CD",
        "description": "Usa asistencia IA en pipelines de integración continua y despliegue",
        "features": [
          { "name": "GitHub Actions" },
          { "name": "GitLab CI" },
          { "name": "Plugin Jenkins" },
          { "name": "Azure DevOps" }
        ]
      },
      {
        "icon": "automation",
        "title": "Scripts de Automatización",
        "description": "Automatiza tus tareas de desarrollo a través de scripts y herramientas",
        "features": [
          { "name": "Integración Script Shell" },
          { "name": "Automatización Python" },
          { "name": "Herramientas Node.js" },
          { "name": "Soporte Makefile" }
        ]
      },
      {
        "icon": "deployment",
        "title": "Integración de Despliegue",
        "description": "Aprovecha IA para análisis y optimización de código durante el despliegue",
        "features": [
          { "name": "Integración Docker" },
          { "name": "Soporte Kubernetes" },
          { "name": "Integración Plataforma Cloud" },
          { "name": "Monitoreo y Logging" }
        ]
      }
    ],
    "workflow": {
      "title": "Flujo de Trabajo de Integración",
      "description": "Sigue estos pasos para integrar Gemini CLI en tu proceso de desarrollo",
      "steps": [
        {
          "title": "Configuración del Entorno",
          "description": "Asegúrate de que tu entorno de desarrollo tenga Gemini CLI configurado correctamente",
          "example": "# Verificar instalación\ngemini --version\n\n# Configurar clave API\ngemini config set api-key YOUR_API_KEY"
        },
        {
          "title": "Elegir Método de Integración",
          "description": "Selecciona el método de integración más adecuado según tus necesidades",
          "example": "# Ejemplo de integración IDE\n# Instalar extensión VS Code\ncode --install-extension gemini-cli\n\n# O configurar alias de línea de comandos\nalias ai='gemini chat'"
        },
        {
          "title": "Configurar Flujo de Trabajo",
          "description": "Configura scripts de automatización y flujos de trabajo",
          "example": "# Ejemplo GitHub Actions\nname: AI Code Review\non: [pull_request]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: AI Review\n        run: gemini review --files changed"
        },
        {
          "title": "Probar y Optimizar",
          "description": "Prueba la efectividad de la integración y ajusta según sea necesario",
          "example": "# Probar integración\ngemini test-integration\n\n# Ver estadísticas de uso\ngemini stats --integration"
        }
      ]
    },
    "toolsTitle": "Integraciones de Herramientas Populares",
    "toolsDescription": "Aprende a integrar con herramientas de desarrollo populares",
    "tools": [
      {
        "name": "VS Code",
        "description": "Usa Gemini CLI en Visual Studio Code",
        "steps": [
          { "text": "Instalar extensión Gemini CLI" },
          { "text": "Configurar clave API" },
          { "text": "Usar atajos de teclado para invocar funciones IA" },
          { "text": "Personalizar comandos y configuraciones" }
        ]
      },
      {
        "name": "Git Hooks",
        "description": "Integra verificaciones IA en el flujo de trabajo Git",
        "steps": [
          { "text": "Crear hook pre-commit" },
          { "text": "Configurar verificaciones de calidad de código" },
          { "text": "Configurar pruebas automatizadas" },
          { "text": "Integrar generación de mensajes de commit" }
        ]
      },
      {
        "name": "Docker",
        "description": "Usa Gemini CLI en entornos contenedorizados",
        "steps": [
          { "text": "Crear imagen con Gemini CLI" },
          { "text": "Configurar variables de entorno" },
          { "text": "Configurar montajes de volumen" },
          { "text": "Optimizar rendimiento del contenedor" }
        ]
      }
    ],
    "bestPracticesTitle": "Mejores Prácticas de Integración",
    "bestPracticesDescription": "Sigue estas mejores prácticas para una experiencia de integración óptima",
    "bestPractices": [
      {
        "title": "Configuración de Seguridad",
        "description": "Asegura el almacenamiento seguro de claves API e información sensible usando variables de entorno o servicios de gestión de claves."
      },
      {
        "title": "Optimización de Rendimiento",
        "description": "Configura correctamente los ajustes de caché y concurrencia para evitar llamadas API excesivas que podrían impactar la experiencia de desarrollo."
      },
      {
        "title": "Manejo de Errores",
        "description": "Implementa mecanismos completos de manejo de errores para asegurar que los fallos de integración no afecten el flujo de trabajo de desarrollo normal."
      },
      {
        "title": "Colaboración en Equipo",
        "description": "Establece estándares de integración unificados y configuraciones para el equipo para que todos los miembros puedan usarlo correctamente."
      }
    ],
    "nextSteps": {
      "title": "Próximos Pasos",
      "description": "Continúa aprendiendo funciones más avanzadas y mejores prácticas",
      "advancedConfig": "Configuración Avanzada",
      "codeRefactoring": "Refactorización de Código"
    }
  },
  ru: {
    "title": "Интеграция с Другими Инструментами",
    "subtitle": "Интегрируйте Gemini CLI в ваш рабочий процесс разработки",
    "description": "Изучите, как бесшовно интегрировать Gemini CLI в вашу существующую цепочку инструментов разработки, IDE и процессы автоматизации для повышения продуктивности.",
    "overview": {
      "title": "Обзор Интеграции",
      "description": "Gemini CLI предоставляет несколько методов интеграции, позволяя вам полностью использовать мощные возможности ИИ в любой среде разработки. Будь то плагины IDE, CI/CD пайплайны или скрипты автоматизации - интеграция проста."
    },
    "typesTitle": "Типы Интеграции",
    "typesDescription": "Выберите метод интеграции, который лучше всего подходит вашему рабочему процессу",
    "types": [
      {
        "icon": "ide",
        "title": "Интеграция IDE",
        "description": "Используйте Gemini CLI напрямую в вашем любимом редакторе кода",
        "features": [
          { "name": "Расширение VS Code" },
          { "name": "Плагин IntelliJ" },
          { "name": "Интеграция Vim/Neovim" },
          { "name": "Поддержка Sublime Text" }
        ]
      },
      {
        "icon": "ci",
        "title": "Интеграция CI/CD",
        "description": "Используйте ИИ-помощь в пайплайнах непрерывной интеграции и развертывания",
        "features": [
          { "name": "GitHub Actions" },
          { "name": "GitLab CI" },
          { "name": "Плагин Jenkins" },
          { "name": "Azure DevOps" }
        ]
      },
      {
        "icon": "automation",
        "title": "Скрипты Автоматизации",
        "description": "Автоматизируйте ваши задачи разработки через скрипты и инструменты",
        "features": [
          { "name": "Интеграция Shell-скриптов" },
          { "name": "Автоматизация Python" },
          { "name": "Инструменты Node.js" },
          { "name": "Поддержка Makefile" }
        ]
      },
      {
        "icon": "deployment",
        "title": "Интеграция Развертывания",
        "description": "Используйте ИИ для анализа и оптимизации кода во время развертывания",
        "features": [
          { "name": "Интеграция Docker" },
          { "name": "Поддержка Kubernetes" },
          { "name": "Интеграция Облачных Платформ" },
          { "name": "Мониторинг и Логирование" }
        ]
      }
    ],
    "workflow": {
      "title": "Рабочий Процесс Интеграции",
      "description": "Следуйте этим шагам для интеграции Gemini CLI в ваш процесс разработки",
      "steps": [
        {
          "title": "Настройка Окружения",
          "description": "Убедитесь, что ваша среда разработки имеет правильно настроенный Gemini CLI",
          "example": "# Проверить установку\ngemini --version\n\n# Настроить API ключ\ngemini config set api-key YOUR_API_KEY"
        },
        {
          "title": "Выбор Метода Интеграции",
          "description": "Выберите наиболее подходящий метод интеграции в зависимости от ваших потребностей",
          "example": "# Пример интеграции IDE\n# Установить расширение VS Code\ncode --install-extension gemini-cli\n\n# Или настроить псевдоним командной строки\nalias ai='gemini chat'"
        },
        {
          "title": "Настройка Рабочего Процесса",
          "description": "Настройте скрипты автоматизации и рабочие процессы",
          "example": "# Пример GitHub Actions\nname: AI Code Review\non: [pull_request]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: AI Review\n        run: gemini review --files changed"
        },
        {
          "title": "Тестирование и Оптимизация",
          "description": "Протестируйте эффективность интеграции и настройте по необходимости",
          "example": "# Тестировать интеграцию\ngemini test-integration\n\n# Просмотреть статистику использования\ngemini stats --integration"
        }
      ]
    },
    "toolsTitle": "Интеграции Популярных Инструментов",
    "toolsDescription": "Изучите интеграцию с популярными инструментами разработки",
    "tools": [
      {
        "name": "VS Code",
        "description": "Используйте Gemini CLI в Visual Studio Code",
        "steps": [
          { "text": "Установить расширение Gemini CLI" },
          { "text": "Настроить API ключ" },
          { "text": "Использовать горячие клавиши для вызова ИИ функций" },
          { "text": "Настроить команды и параметры" }
        ]
      },
      {
        "name": "Git Hooks",
        "description": "Интегрируйте ИИ проверки в рабочий процесс Git",
        "steps": [
          { "text": "Создать pre-commit хук" },
          { "text": "Настроить проверки качества кода" },
          { "text": "Настроить автоматизированное тестирование" },
          { "text": "Интегрировать генерацию сообщений коммитов" }
        ]
      },
      {
        "name": "Docker",
        "description": "Используйте Gemini CLI в контейнеризованных средах",
        "steps": [
          { "text": "Создать образ с Gemini CLI" },
          { "text": "Настроить переменные окружения" },
          { "text": "Настроить монтирование томов" },
          { "text": "Оптимизировать производительность контейнера" }
        ]
      }
    ],
    "bestPracticesTitle": "Лучшие Практики Интеграции",
    "bestPracticesDescription": "Следуйте этим лучшим практикам для оптимального опыта интеграции",
    "bestPractices": [
      {
        "title": "Конфигурация Безопасности",
        "description": "Обеспечьте безопасное хранение API ключей и конфиденциальной информации, используя переменные окружения или сервисы управления ключами."
      },
      {
        "title": "Оптимизация Производительности",
        "description": "Правильно настройте параметры кэширования и параллелизма, чтобы избежать чрезмерных API вызовов, которые могут повлиять на опыт разработки."
      },
      {
        "title": "Обработка Ошибок",
        "description": "Реализуйте комплексные механизмы обработки ошибок, чтобы убедиться, что сбои интеграции не влияют на нормальный рабочий процесс разработки."
      },
      {
        "title": "Командная Работа",
        "description": "Установите единые стандарты интеграции и конфигурации для команды, чтобы все участники могли правильно их использовать."
      }
    ],
    "nextSteps": {
      "title": "Следующие Шаги",
      "description": "Продолжайте изучать более продвинутые функции и лучшие практики",
      "advancedConfig": "Расширенная Конфигурация",
      "codeRefactoring": "Рефакторинг Кода"
    }
  }
};

// Function to apply integration translations
function applyIntegrationTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = integrationTranslations[langCode];
    
    if (!translations) {
      console.log(`⚠️  No integration translations found for ${langCode}`);
      return;
    }
    
    // Replace the existing guidesIntegration with professional translation
    data.guidesIntegration = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Applied integration translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const integration = newData.guidesIntegration;
    console.log(`   - Title: "${integration?.title || 'N/A'}"`);
    console.log(`   - Types: ${integration?.types?.length || 0}`);
    console.log(`   - Workflow steps: ${integration?.workflow?.steps?.length || 0}`);
    console.log(`   - Tools: ${integration?.tools?.length || 0}`);
    console.log(`   - Best practices: ${integration?.bestPractices?.length || 0}`);
    
  } catch (error) {
    console.error(`❌ Error applying integration translations for ${langCode}:`, error.message);
  }
}

// Apply integration translations
console.log('🚀 Applying professional integration translations for final languages...\n');

Object.keys(integrationTranslations).forEach(langCode => {
  const langNames = {
    ja: 'Japanese',
    ko: 'Korean',
    es: 'Spanish',
    ru: 'Russian'
  };
  
  console.log(`Applying integration translations for ${langNames[langCode]}...`);
  applyIntegrationTranslations(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ Professional integration translations applied!');
console.log('🎯 Japanese, Korean, Spanish, and Russian now have complete professional content.');
