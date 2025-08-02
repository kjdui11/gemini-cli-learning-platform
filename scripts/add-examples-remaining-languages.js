const fs = require('fs');
const path = require('path');

// 为examples页面添加剩余语言翻译
function addExamplesRemainingLanguages() {
  const filePath = path.join(__dirname, '..', 'src', 'app', '[locale]', 'docs', 'examples', 'page.tsx');
  
  console.log('🔧 为examples页面添加剩余语言翻译...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 韩语翻译
  const koreanTranslation = `  }

  // Korean translation
  if (locale === 'ko') {
    return {
      heroTitle: '코드 예제',
      heroSubtitle: 'Gemini CLI를 최대한 활용하는 데 도움이 되는 실용적인 코드 예제와 템플릿. 기본 사용법부터 고급 자동화 및 통합 패턴까지.',
      categoriesTitle: '예제 카테고리',
      categoriesSubtitle: '관련 예제를 탐색할 카테고리를 선택하세요',
      needMoreHelpTitle: '더 많은 도움이 필요하신가요?',
      needMoreHelpSubtitle: '더 많은 리소스와 문서를 탐색하세요',
      apiReferenceText: 'API 참조',
      userGuidesText: '사용자 가이드',
      backToDocsText: '문서로 돌아가기',
      codeLabel: '코드',
      categories: [
        {
          id: 'basic-usage',
          title: '기본 사용법',
          description: 'Gemini CLI 시작을 위한 간단한 예제',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: '간단한 채팅',
              description: 'Gemini와 기본 대화 시작',
              language: 'bash',
              code: \`# 대화형 채팅 시작
gemini chat

# 질문하기
gemini ask "머신러닝이란 무엇인가요?"

# 특정 모델로 질문
gemini ask "양자 컴퓨팅 설명해주세요" --model gemini-pro\`
            },
            {
              title: '파일 분석',
              description: 'AI 지원으로 코드 파일 분석',
              language: 'bash',
              code: \`# 단일 파일 분석
gemini analyze src/main.js

# 여러 파일 분석
gemini analyze src/*.js --type code-review

# 코드 제안 받기
gemini analyze package.json --suggest-improvements\`
            },
            {
              title: '구성 관리',
              description: '기본 구성 관리',
              language: 'bash',
              code: \`# 현재 구성 보기
gemini config list

# 기본 모델 설정
gemini config set model gemini-pro

# 온도 설정
gemini config set temperature 0.7

# 기본값으로 재설정
gemini config reset\`
            }
          ]
        }
      ]
    }
  }

  // Spanish translation
  if (locale === 'es') {
    return {
      heroTitle: 'Ejemplos de Código',
      heroSubtitle: 'Ejemplos de código prácticos y plantillas para ayudarte a aprovechar al máximo Gemini CLI. Desde uso básico hasta patrones avanzados de automatización e integración.',
      categoriesTitle: 'Categorías de Ejemplos',
      categoriesSubtitle: 'Elige una categoría para explorar ejemplos relacionados',
      needMoreHelpTitle: '¿Necesitas más ayuda?',
      needMoreHelpSubtitle: 'Explora más recursos y documentación',
      apiReferenceText: 'Referencia API',
      userGuidesText: 'Guías de Usuario',
      backToDocsText: 'Volver a Docs',
      codeLabel: 'Código',
      categories: [
        {
          id: 'basic-usage',
          title: 'Uso Básico',
          description: 'Ejemplos simples para comenzar con Gemini CLI',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'Chat Simple',
              description: 'Iniciar conversación básica con Gemini',
              language: 'bash',
              code: \`# Iniciar chat interactivo
gemini chat

# Hacer una pregunta
gemini ask "¿Qué es el aprendizaje automático?"

# Preguntar con modelo específico
gemini ask "Explicar computación cuántica" --model gemini-pro\`
            },
            {
              title: 'Análisis de Archivos',
              description: 'Analizar archivos de código con asistencia IA',
              language: 'bash',
              code: \`# Analizar un solo archivo
gemini analyze src/main.js

# Analizar múltiples archivos
gemini analyze src/*.js --type code-review

# Obtener sugerencias de código
gemini analyze package.json --suggest-improvements\`
            },
            {
              title: 'Gestión de Configuración',
              description: 'Gestión básica de configuración',
              language: 'bash',
              code: \`# Ver configuración actual
gemini config list

# Establecer modelo por defecto
gemini config set model gemini-pro

# Establecer temperatura
gemini config set temperature 0.7

# Restablecer a valores por defecto
gemini config reset\`
            }
          ]
        }
      ]
    }
  }

  // Russian translation
  if (locale === 'ru') {
    return {
      heroTitle: 'Примеры Кода',
      heroSubtitle: 'Практические примеры кода и шаблоны, которые помогут вам максимально использовать Gemini CLI. От базового использования до продвинутых паттернов автоматизации и интеграции.',
      categoriesTitle: 'Категории Примеров',
      categoriesSubtitle: 'Выберите категорию для изучения связанных примеров',
      needMoreHelpTitle: 'Нужна дополнительная помощь?',
      needMoreHelpSubtitle: 'Изучите больше ресурсов и документации',
      apiReferenceText: 'Справочник API',
      userGuidesText: 'Руководства Пользователя',
      backToDocsText: 'Вернуться к Документации',
      codeLabel: 'Код',
      categories: [
        {
          id: 'basic-usage',
          title: 'Базовое Использование',
          description: 'Простые примеры для начала работы с Gemini CLI',
          icon: RocketLaunchIcon,
          color: 'from-green-500 to-emerald-600',
          examples: [
            {
              title: 'Простой Чат',
              description: 'Начать базовую беседу с Gemini',
              language: 'bash',
              code: \`# Запустить интерактивный чат
gemini chat

# Задать вопрос
gemini ask "Что такое машинное обучение?"

# Спросить с конкретной моделью
gemini ask "Объяснить квантовые вычисления" --model gemini-pro\`
            },
            {
              title: 'Анализ Файлов',
              description: 'Анализировать файлы кода с помощью ИИ',
              language: 'bash',
              code: \`# Анализировать один файл
gemini analyze src/main.js

# Анализировать несколько файлов
gemini analyze src/*.js --type code-review

# Получить предложения по коду
gemini analyze package.json --suggest-improvements\`
            },
            {
              title: 'Управление Конфигурацией',
              description: 'Базовое управление конфигурацией',
              language: 'bash',
              code: \`# Посмотреть текущую конфигурацию
gemini config list

# Установить модель по умолчанию
gemini config set model gemini-pro

# Установить температуру
gemini config set temperature 0.7

# Сбросить к значениям по умолчанию
gemini config reset\`
            }
          ]
        }
      ]
    }`;

  // 在日语翻译后添加其他语言翻译
  content = content.replace(
    '  }\n\n  // 默认返回中文内容',
    koreanTranslation + '\n\n  // 默认返回中文内容'
  );
  
  // 写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log('✅ 成功添加了韩语、西班牙语和俄语翻译');
  
  return true;
}

// 执行添加翻译
if (require.main === module) {
  try {
    addExamplesRemainingLanguages();
    console.log('\n🎉 所有剩余语言的examples翻译添加完成！');
  } catch (error) {
    console.error('❌ 添加翻译过程中发生错误:', error);
  }
}

module.exports = { addExamplesRemainingLanguages };
