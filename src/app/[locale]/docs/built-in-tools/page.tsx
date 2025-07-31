import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  DocumentTextIcon,
  CommandLineIcon,
  GlobeAltIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    zh: '内置工具 - Gemini CLI 文档',
    en: 'Built-in Tools - Gemini CLI Documentation',
    hi: 'अंतर्निहित उपकरण - Gemini CLI दस्तावेज़ीकरण',
    fr: 'Outils Intégrés - Documentation Gemini CLI',
    de: 'Eingebaute Tools - Gemini CLI Dokumentation',
    ja: '組み込みツール - Gemini CLI ドキュメント',
    ko: '내장 도구 - Gemini CLI 문서',
    es: 'Herramientas Integradas - Documentación Gemini CLI',
    ru: 'Встроенные инструменты - Документация Gemini CLI'
  }

  const descriptions = {
    zh: 'Gemini CLI 中所有内置工具的完整参考，包括文件系统操作、Shell 命令、Web 工具和内存管理。',
    en: 'Complete reference for all built-in tools in Gemini CLI including file system operations, shell commands, web tools, and memory management.',
    hi: 'फ़ाइल सिस्टम ऑपरेशन, शेल कमांड, वेब टूल्स और मेमोरी मैनेजमेंट सहित Gemini CLI में सभी अंतर्निहित उपकरणों के लिए पूर्ण संदर्भ।',
    fr: 'Référence complète pour tous les outils intégrés dans Gemini CLI, y compris les opérations du système de fichiers, les commandes shell, les outils web et la gestion de la mémoire.',
    de: 'Vollständige Referenz für alle eingebauten Tools in Gemini CLI, einschließlich Dateisystemoperationen, Shell-Befehle, Web-Tools und Speicherverwaltung.',
    ja: 'ファイルシステム操作、シェルコマンド、Webツール、メモリ管理を含む、Gemini CLI のすべての組み込みツールの完全なリファレンス。',
    ko: '파일 시스템 작업, 셸 명령, 웹 도구 및 메모리 관리를 포함한 Gemini CLI의 모든 내장 도구에 대한 완전한 참조.',
    es: 'Referencia completa para todas las herramientas integradas en Gemini CLI, incluyendo operaciones del sistema de archivos, comandos shell, herramientas web y gestión de memoria.',
    ru: 'Полный справочник по всем встроенным инструментам в Gemini CLI, включая операции файловой системы, команды оболочки, веб-инструменты и управление памятью.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'zh' ? 'Gemini CLI 内置工具, 文件系统工具, Shell 命令, Web 工具, 内存管理' : 'Gemini CLI built-in tools, file system tools, shell commands, web tools, memory management',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

const toolCategories = [
  {
    id: 'file-system',
    title: {
      zh: '文件系统工具',
      en: 'File System Tools',
      hi: 'फ़ाइल सिस्टम टूल्स',
      fr: 'Outils de Système de Fichiers',
      de: 'Dateisystem-Tools',
      ja: 'ファイルシステムツール',
      ko: '파일 시스템 도구',
      es: 'Herramientas del Sistema de Archivos',
      ru: 'Инструменты файловой системы'
    },
    description: {
      zh: '用于读取、写入和管理文件和目录的工具',
      en: 'Tools for reading, writing, and managing files and directories',
      hi: 'फ़ाइलों और निर्देशिकाओं को पढ़ने, लिखने और प्रबंधित करने के लिए उपकरण',
      fr: 'Outils pour lire, écrire et gérer les fichiers et répertoires',
      de: 'Tools zum Lesen, Schreiben und Verwalten von Dateien und Verzeichnissen',
      ja: 'ファイルとディレクトリの読み取り、書き込み、管理用ツール',
      ko: '파일과 디렉토리를 읽고, 쓰고, 관리하는 도구',
      es: 'Herramientas para leer, escribir y gestionar archivos y directorios',
      ru: 'Инструменты для чтения, записи и управления файлами и каталогами'
    },
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-indigo-600',
    tools: [
      {
        name: 'read_file',
        description: {
          zh: '读取文件内容',
          en: 'Read the contents of a file',
          hi: 'फ़ाइल की सामग्री पढ़ें',
          fr: 'Lire le contenu d\'un fichier',
          de: 'Den Inhalt einer Datei lesen',
          ja: 'ファイルの内容を読み取る',
          ko: '파일의 내용을 읽기',
          es: 'Leer el contenido de un archivo',
          ru: 'Прочитать содержимое файла'
        },
        parameters: [
          { 
            name: 'path', 
            type: 'string', 
            required: true, 
            description: {
              zh: '要读取的文件路径',
              en: 'Path to the file to read',
              hi: 'पढ़ने के लिए फ़ाइल का पथ',
              fr: 'Chemin vers le fichier à lire',
              de: 'Pfad zur zu lesenden Datei',
              ja: '読み取るファイルのパス',
              ko: '읽을 파일의 경로',
              es: 'Ruta al archivo a leer',
              ru: 'Путь к файлу для чтения'
            }
          }
        ],
        returns: {
          zh: 'string - 文件内容',
          en: 'string - The file contents',
          hi: 'string - फ़ाइल सामग्री',
          fr: 'string - Le contenu du fichier',
          de: 'string - Der Dateiinhalt',
          ja: 'string - ファイルの内容',
          ko: 'string - 파일 내용',
          es: 'string - El contenido del archivo',
          ru: 'string - Содержимое файла'
        },
        example: {
          zh: `AI: 我来为您读取 package.json 文件。

工具调用: read_file
参数: {"path": "./package.json"}

结果: {
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  }
}`,
          en: `AI: I'll read the package.json file for you.

Tool call: read_file
Parameters: {"path": "./package.json"}

Result: {
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  }
}`
        }
      },
      {
        name: 'write_file',
        description: {
          zh: '将内容写入文件',
          en: 'Write content to a file',
          hi: 'फ़ाइल में सामग्री लिखें',
          fr: 'Écrire du contenu dans un fichier',
          de: 'Inhalt in eine Datei schreiben',
          ja: 'ファイルにコンテンツを書き込む',
          ko: '파일에 내용 쓰기',
          es: 'Escribir contenido en un archivo',
          ru: 'Записать содержимое в файл'
        },
        parameters: [
          { 
            name: 'path', 
            type: 'string', 
            required: true, 
            description: {
              zh: '写入文件的路径',
              en: 'Path where to write the file',
              hi: 'फ़ाइल लिखने का पथ',
              fr: 'Chemin où écrire le fichier',
              de: 'Pfad, wo die Datei geschrieben werden soll',
              ja: 'ファイルを書き込むパス',
              ko: '파일을 쓸 경로',
              es: 'Ruta donde escribir el archivo',
              ru: 'Путь для записи файла'
            }
          },
          { 
            name: 'content', 
            type: 'string', 
            required: true, 
            description: {
              zh: '要写入文件的内容',
              en: 'Content to write to the file',
              hi: 'फ़ाइल में लिखने के लिए सामग्री',
              fr: 'Contenu à écrire dans le fichier',
              de: 'Inhalt, der in die Datei geschrieben werden soll',
              ja: 'ファイルに書き込むコンテンツ',
              ko: '파일에 쓸 내용',
              es: 'Contenido a escribir en el archivo',
              ru: 'Содержимое для записи в файл'
            }
          }
        ],
        returns: {
          zh: 'string - 成功确认',
          en: 'string - Success confirmation',
          hi: 'string - सफलता की पुष्टि',
          fr: 'string - Confirmation de succès',
          de: 'string - Erfolgsbestätigung',
          ja: 'string - 成功確認',
          ko: 'string - 성공 확인',
          es: 'string - Confirmación de éxito',
          ru: 'string - Подтверждение успеха'
        },
        example: {
          zh: `AI: 我来为您创建一个新的 README 文件。

工具调用: write_file
参数: {
  "path": "./README.md",
  "content": "# 我的项目\\n\\n这是一个示例项目。"
}

结果: 文件已成功写入 ./README.md`,
          en: `AI: I'll create a new README file for you.

Tool call: write_file
Parameters: {
  "path": "./README.md",
  "content": "# My Project\\n\\nThis is a sample project."
}

Result: File written successfully to ./README.md`
        }
      },
      {
        name: 'list_files',
        description: {
          zh: '列出指定路径中的文件和目录',
          en: 'List files and directories in a given path',
          hi: 'दिए गए पथ में फ़ाइलों और निर्देशिकाओं की सूची बनाएं',
          fr: 'Lister les fichiers et répertoires dans un chemin donné',
          de: 'Dateien und Verzeichnisse in einem gegebenen Pfad auflisten',
          ja: '指定されたパスのファイルとディレクトリを一覧表示',
          ko: '주어진 경로의 파일과 디렉토리 나열',
          es: 'Listar archivos y directorios en una ruta dada',
          ru: 'Список файлов и каталогов по указанному пути'
        },
        parameters: [
          { 
            name: 'path', 
            type: 'string', 
            required: true, 
            description: {
              zh: '要列出的目录路径',
              en: 'Directory path to list',
              hi: 'सूची बनाने के लिए निर्देशिका पथ',
              fr: 'Chemin du répertoire à lister',
              de: 'Verzeichnispfad zum Auflisten',
              ja: '一覧表示するディレクトリパス',
              ko: '나열할 디렉토리 경로',
              es: 'Ruta del directorio a listar',
              ru: 'Путь каталога для списка'
            }
          },
          { 
            name: 'recursive', 
            type: 'boolean', 
            required: false, 
            description: {
              zh: '是否递归列出',
              en: 'Whether to list recursively',
              hi: 'क्या पुनरावर्ती रूप से सूची बनाना है',
              fr: 'S\'il faut lister récursivement',
              de: 'Ob rekursiv aufgelistet werden soll',
              ja: '再帰的に一覧表示するかどうか',
              ko: '재귀적으로 나열할지 여부',
              es: 'Si listar recursivamente',
              ru: 'Нужно ли перечислять рекурсивно'
            }
          }
        ],
        returns: {
          zh: 'array - 文件和目录列表',
          en: 'array - List of files and directories',
          hi: 'array - फ़ाइलों और निर्देशिकाओं की सूची',
          fr: 'array - Liste des fichiers et répertoires',
          de: 'array - Liste von Dateien und Verzeichnissen',
          ja: 'array - ファイルとディレクトリのリスト',
          ko: 'array - 파일과 디렉토리 목록',
          es: 'array - Lista de archivos y directorios',
          ru: 'array - Список файлов и каталогов'
        },
        example: {
          zh: `AI: 让我列出 src 目录中的文件。

工具调用: list_files
参数: {"path": "./src", "recursive": false}

结果: [
  "index.js",
  "utils.js",
  "components/",
  "styles/"
]`,
          en: `AI: Let me list the files in the src directory.

Tool call: list_files
Parameters: {"path": "./src", "recursive": false}

Result: [
  "index.js",
  "utils.js",
  "components/",
  "styles/"
]`
        }
      }
    ]
  },
  {
    id: 'shell',
    title: {
      zh: 'Shell 工具',
      en: 'Shell Tools',
      hi: 'शेल टूल्स',
      fr: 'Outils Shell',
      de: 'Shell-Tools',
      ja: 'シェルツール',
      ko: '셸 도구',
      es: 'Herramientas Shell',
      ru: 'Shell инструменты'
    },
    description: {
      zh: '用于执行 Shell 命令和脚本的工具',
      en: 'Tools for executing shell commands and scripts',
      hi: 'शेल कमांड और स्क्रिप्ट निष्पादित करने के लिए उपकरण',
      fr: 'Outils pour exécuter des commandes shell et des scripts',
      de: 'Tools zur Ausführung von Shell-Befehlen und Skripten',
      ja: 'シェルコマンドとスクリプトを実行するためのツール',
      ko: '셸 명령과 스크립트를 실행하는 도구',
      es: 'Herramientas para ejecutar comandos shell y scripts',
      ru: 'Инструменты для выполнения shell команд и скриптов'
    },
    icon: CommandLineIcon,
    color: 'from-green-500 to-emerald-600',
    tools: [
      {
        name: 'run_shell_command',
        description: {
          zh: '执行 Shell 命令',
          en: 'Execute a shell command',
          hi: 'शेल कमांड निष्पादित करें',
          fr: 'Exécuter une commande shell',
          de: 'Einen Shell-Befehl ausführen',
          ja: 'シェルコマンドを実行',
          ko: '셸 명령 실행',
          es: 'Ejecutar un comando shell',
          ru: 'Выполнить shell команду'
        },
        parameters: [
          { 
            name: 'command', 
            type: 'string', 
            required: true, 
            description: {
              zh: '要执行的 Shell 命令',
              en: 'The shell command to execute',
              hi: 'निष्पादित करने के लिए शेल कमांड',
              fr: 'La commande shell à exécuter',
              de: 'Der auszuführende Shell-Befehl',
              ja: '実行するシェルコマンド',
              ko: '실행할 셸 명령',
              es: 'El comando shell a ejecutar',
              ru: 'Shell команда для выполнения'
            }
          },
          { 
            name: 'cwd', 
            type: 'string', 
            required: false, 
            description: {
              zh: '命令的工作目录',
              en: 'Working directory for the command',
              hi: 'कमांड के लिए कार्यकारी निर्देशिका',
              fr: 'Répertoire de travail pour la commande',
              de: 'Arbeitsverzeichnis für den Befehl',
              ja: 'コマンドの作業ディレクトリ',
              ko: '명령의 작업 디렉토리',
              es: 'Directorio de trabajo para el comando',
              ru: 'Рабочий каталог для команды'
            }
          }
        ],
        returns: {
          zh: 'object - 包含 stdout、stderr 和退出代码的命令结果',
          en: 'object - Command result with stdout, stderr, and exit code',
          hi: 'object - stdout, stderr और exit code के साथ कमांड परिणाम',
          fr: 'object - Résultat de commande avec stdout, stderr et code de sortie',
          de: 'object - Befehlsergebnis mit stdout, stderr und Exit-Code',
          ja: 'object - stdout、stderr、終了コードを含むコマンド結果',
          ko: 'object - stdout, stderr 및 종료 코드가 포함된 명령 결과',
          es: 'object - Resultado del comando con stdout, stderr y código de salida',
          ru: 'object - Результат команды с stdout, stderr и кодом выхода'
        },
        example: {
          zh: `AI: 我来检查当前的 Git 状态。

工具调用: run_shell_command
参数: {"command": "git status --porcelain"}

结果: {
  "stdout": " M src/index.js\\n?? new-file.txt",
  "stderr": "",
  "exitCode": 0
}`,
          en: `AI: I'll check the current Git status.

Tool call: run_shell_command
Parameters: {"command": "git status --porcelain"}

Result: {
  "stdout": " M src/index.js\\n?? new-file.txt",
  "stderr": "",
  "exitCode": 0
}`
        }
      },
      {
        name: 'run_script',
        description: {
          zh: '执行脚本文件',
          en: 'Execute a script file',
          hi: 'स्क्रिप्ट फ़ाइल निष्पादित करें',
          fr: 'Exécuter un fichier de script',
          de: 'Eine Skriptdatei ausführen',
          ja: 'スクリプトファイルを実行',
          ko: '스크립트 파일 실행',
          es: 'Ejecutar un archivo de script',
          ru: 'Выполнить файл скрипта'
        },
        parameters: [
          { 
            name: 'script_path', 
            type: 'string', 
            required: true, 
            description: {
              zh: '脚本文件的路径',
              en: 'Path to the script file',
              hi: 'स्क्रिप्ट फ़ाइल का पथ',
              fr: 'Chemin vers le fichier de script',
              de: 'Pfad zur Skriptdatei',
              ja: 'スクリプトファイルのパス',
              ko: '스크립트 파일의 경로',
              es: 'Ruta al archivo de script',
              ru: 'Путь к файлу скрипта'
            }
          },
          { 
            name: 'args', 
            type: 'array', 
            required: false, 
            description: {
              zh: '传递给脚本的参数',
              en: 'Arguments to pass to the script',
              hi: 'स्क्रिप्ट को पास करने के लिए तर्क',
              fr: 'Arguments à passer au script',
              de: 'Argumente, die an das Skript übergeben werden',
              ja: 'スクリプトに渡す引数',
              ko: '스크립트에 전달할 인수',
              es: 'Argumentos a pasar al script',
              ru: 'Аргументы для передачи скрипту'
            }
          }
        ],
        returns: {
          zh: 'object - 脚本执行结果',
          en: 'object - Script execution result',
          hi: 'object - स्क्रिप्ट निष्पादन परिणाम',
          fr: 'object - Résultat d\'exécution du script',
          de: 'object - Skript-Ausführungsergebnis',
          ja: 'object - スクリプト実行結果',
          ko: 'object - 스크립트 실행 결과',
          es: 'object - Resultado de ejecución del script',
          ru: 'object - Результат выполнения скрипта'
        },
        example: {
          zh: `AI: 我来运行带有生产标志的构建脚本。

工具调用: run_script
参数: {
  "script_path": "./scripts/build.sh",
  "args": ["--production"]
}

结果: {
  "stdout": "正在为生产环境构建...\\n构建成功完成！",
  "stderr": "",
  "exitCode": 0
}`,
          en: `AI: I'll run the build script with production flag.

Tool call: run_script
Parameters: {
  "script_path": "./scripts/build.sh",
  "args": ["--production"]
}

Result: {
  "stdout": "Building for production...\\nBuild completed successfully!",
  "stderr": "",
  "exitCode": 0
}`
        }
      }
    ]
  },
  {
    id: 'web',
    title: {
      zh: 'Web 工具',
      en: 'Web Tools',
      hi: 'वेब टूल्स',
      fr: 'Outils Web',
      de: 'Web-Tools',
      ja: 'Webツール',
      ko: '웹 도구',
      es: 'Herramientas Web',
      ru: 'Веб-инструменты'
    },
    description: {
      zh: '用于 Web 请求、搜索和在线内容的工具',
      en: 'Tools for web requests, searches, and online content',
      hi: 'वेब अनुरोध, खोज और ऑनलाइन सामग्री के लिए उपकरण',
      fr: 'Outils pour les requêtes web, les recherches et le contenu en ligne',
      de: 'Tools für Web-Anfragen, Suchen und Online-Inhalte',
      ja: 'Webリクエスト、検索、オンラインコンテンツ用ツール',
      ko: '웹 요청, 검색 및 온라인 콘텐츠를 위한 도구',
      es: 'Herramientas para solicitudes web, búsquedas y contenido en línea',
      ru: 'Инструменты для веб-запросов, поиска и онлайн-контента'
    },
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-pink-600',
    tools: [
      {
        name: 'web_fetch',
        description: {
          zh: '从 URL 获取内容',
          en: 'Fetch content from a URL',
          hi: 'URL से सामग्री प्राप्त करें',
          fr: 'Récupérer le contenu d\'une URL',
          de: 'Inhalt von einer URL abrufen',
          ja: 'URLからコンテンツを取得',
          ko: 'URL에서 콘텐츠 가져오기',
          es: 'Obtener contenido de una URL',
          ru: 'Получить содержимое с URL'
        },
        parameters: [
          {
            name: 'url',
            type: 'string',
            required: true,
            description: {
              zh: '要获取的 URL',
              en: 'URL to fetch content from',
              hi: 'सामग्री प्राप्त करने के लिए URL',
              fr: 'URL pour récupérer le contenu',
              de: 'URL, von der Inhalt abgerufen werden soll',
              ja: 'コンテンツを取得するURL',
              ko: '콘텐츠를 가져올 URL',
              es: 'URL para obtener contenido',
              ru: 'URL для получения содержимого'
            }
          },
          {
            name: 'headers',
            type: 'object',
            required: false,
            description: {
              zh: '请求头',
              en: 'Request headers',
              hi: 'अनुरोध हेडर',
              fr: 'En-têtes de requête',
              de: 'Anfrage-Header',
              ja: 'リクエストヘッダー',
              ko: '요청 헤더',
              es: 'Cabeceras de solicitud',
              ru: 'Заголовки запроса'
            }
          }
        ],
        returns: {
          zh: 'object - 包含内容、状态和头部的响应',
          en: 'object - Response with content, status, and headers',
          hi: 'object - सामग्री, स्थिति और हेडर के साथ प्रतिक्रिया',
          fr: 'object - Réponse avec contenu, statut et en-têtes',
          de: 'object - Antwort mit Inhalt, Status und Headern',
          ja: 'object - コンテンツ、ステータス、ヘッダーを含むレスポンス',
          ko: 'object - 콘텐츠, 상태 및 헤더가 포함된 응답',
          es: 'object - Respuesta con contenido, estado y cabeceras',
          ru: 'object - Ответ с содержимым, статусом и заголовками'
        },
        example: {
          zh: `AI: 我来获取 API 端点的数据。

工具调用: web_fetch
参数: {"url": "https://api.github.com/repos/google-gemini/gemini-cli"}

结果: {
  "status": 200,
  "content": "{\\"name\\": \\"gemini-cli\\", \\"description\\": \\"...\\"}"
}`,
          en: `AI: I'll fetch data from the API endpoint.

Tool call: web_fetch
Parameters: {"url": "https://api.github.com/repos/google-gemini/gemini-cli"}

Result: {
  "status": 200,
  "content": "{\\"name\\": \\"gemini-cli\\", \\"description\\": \\"...\\"}"
}`
        }
      },
      {
        name: 'web_search',
        description: {
          zh: '在网络上搜索信息',
          en: 'Search for information on the web',
          hi: 'वेब पर जानकारी खोजें',
          fr: 'Rechercher des informations sur le web',
          de: 'Informationen im Web suchen',
          ja: 'ウェブ上で情報を検索',
          ko: '웹에서 정보 검색',
          es: 'Buscar información en la web',
          ru: 'Поиск информации в интернете'
        },
        parameters: [
          {
            name: 'query',
            type: 'string',
            required: true,
            description: {
              zh: '搜索查询',
              en: 'Search query',
              hi: 'खोज क्वेरी',
              fr: 'Requête de recherche',
              de: 'Suchanfrage',
              ja: '検索クエリ',
              ko: '검색 쿼리',
              es: 'Consulta de búsqueda',
              ru: 'Поисковый запрос'
            }
          },
          {
            name: 'num_results',
            type: 'number',
            required: false,
            description: {
              zh: '返回的结果数量',
              en: 'Number of results to return',
              hi: 'वापस करने के लिए परिणामों की संख्या',
              fr: 'Nombre de résultats à retourner',
              de: 'Anzahl der zurückzugebenden Ergebnisse',
              ja: '返す結果の数',
              ko: '반환할 결과 수',
              es: 'Número de resultados a devolver',
              ru: 'Количество результатов для возврата'
            }
          }
        ],
        returns: {
          zh: 'array - 搜索结果列表',
          en: 'array - List of search results',
          hi: 'array - खोज परिणामों की सूची',
          fr: 'array - Liste des résultats de recherche',
          de: 'array - Liste der Suchergebnisse',
          ja: 'array - 検索結果のリスト',
          ko: 'array - 검색 결과 목록',
          es: 'array - Lista de resultados de búsqueda',
          ru: 'array - Список результатов поиска'
        },
        example: {
          zh: `AI: 我来搜索关于 Gemini CLI 的信息。

工具调用: web_search
参数: {"query": "Gemini CLI documentation", "num_results": 5}

结果: [
  {
    "title": "Gemini CLI 官方文档",
    "url": "https://docs.geminicli.cloud",
    "snippet": "Gemini CLI 的完整文档..."
  }
]`,
          en: `AI: I'll search for information about Gemini CLI.

Tool call: web_search
Parameters: {"query": "Gemini CLI documentation", "num_results": 5}

Result: [
  {
    "title": "Gemini CLI Official Documentation",
    "url": "https://docs.geminicli.cloud",
    "snippet": "Complete documentation for Gemini CLI..."
  }
]`
        }
      }
    ]
  },
  {
    id: 'memory',
    title: {
      zh: '内存工具',
      en: 'Memory Tools',
      hi: 'मेमोरी टूल्स',
      fr: 'Outils Mémoire',
      de: 'Speicher-Tools',
      ja: 'メモリツール',
      ko: '메모리 도구',
      es: 'Herramientas de Memoria',
      ru: 'Инструменты памяти'
    },
    description: {
      zh: '用于存储和检索会话信息的工具',
      en: 'Tools for storing and retrieving session information',
      hi: 'सत्र जानकारी संग्रहीत करने और पुनर्प्राप्त करने के लिए उपकरण',
      fr: 'Outils pour stocker et récupérer les informations de session',
      de: 'Tools zum Speichern und Abrufen von Sitzungsinformationen',
      ja: 'セッション情報を保存・取得するためのツール',
      ko: '세션 정보를 저장하고 검색하는 도구',
      es: 'Herramientas para almacenar y recuperar información de sesión',
      ru: 'Инструменты для хранения и извлечения информации сеанса'
    },
    icon: ClockIcon,
    color: 'from-orange-500 to-red-600',
    tools: [
      {
        name: 'remember',
        description: {
          zh: '存储信息以供后续使用',
          en: 'Store information for later use',
          hi: 'बाद में उपयोग के लिए जानकारी संग्रहीत करें',
          fr: 'Stocker des informations pour une utilisation ultérieure',
          de: 'Informationen für späteren Gebrauch speichern',
          ja: '後で使用するために情報を保存',
          ko: '나중에 사용하기 위해 정보 저장',
          es: 'Almacenar información para uso posterior',
          ru: 'Сохранить информацию для последующего использования'
        },
        parameters: [
          {
            name: 'key',
            type: 'string',
            required: true,
            description: {
              zh: '存储信息的键',
              en: 'Key to store the information under',
              hi: 'जानकारी संग्रहीत करने के लिए कुंजी',
              fr: 'Clé sous laquelle stocker l\'information',
              de: 'Schlüssel, unter dem die Information gespeichert wird',
              ja: '情報を保存するキー',
              ko: '정보를 저장할 키',
              es: 'Clave bajo la cual almacenar la información',
              ru: 'Ключ для хранения информации'
            }
          },
          {
            name: 'value',
            type: 'string',
            required: true,
            description: {
              zh: '要存储的值',
              en: 'Value to store',
              hi: 'संग्रहीत करने के लिए मान',
              fr: 'Valeur à stocker',
              de: 'Zu speichernder Wert',
              ja: '保存する値',
              ko: '저장할 값',
              es: 'Valor a almacenar',
              ru: 'Значение для хранения'
            }
          }
        ],
        returns: {
          zh: 'string - 存储确认',
          en: 'string - Storage confirmation',
          hi: 'string - भंडारण पुष्टि',
          fr: 'string - Confirmation de stockage',
          de: 'string - Speicherbestätigung',
          ja: 'string - 保存確認',
          ko: 'string - 저장 확인',
          es: 'string - Confirmación de almacenamiento',
          ru: 'string - Подтверждение сохранения'
        },
        example: {
          zh: `AI: 我来记住您的偏好设置。

工具调用: remember
参数: {"key": "user_preference", "value": "使用 TypeScript 进行开发"}

结果: 信息已存储在键 'user_preference' 下`,
          en: `AI: I'll remember your preference.

Tool call: remember
Parameters: {"key": "user_preference", "value": "prefer TypeScript for development"}

Result: Information stored under key 'user_preference'`
        }
      },
      {
        name: 'recall',
        description: {
          zh: '检索之前存储的信息',
          en: 'Retrieve previously stored information',
          hi: 'पहले संग्रहीत जानकारी पुनर्प्राप्त करें',
          fr: 'Récupérer des informations précédemment stockées',
          de: 'Zuvor gespeicherte Informationen abrufen',
          ja: '以前に保存された情報を取得',
          ko: '이전에 저장된 정보 검색',
          es: 'Recuperar información previamente almacenada',
          ru: 'Извлечь ранее сохраненную информацию'
        },
        parameters: [
          {
            name: 'key',
            type: 'string',
            required: true,
            description: {
              zh: '要检索信息的键',
              en: 'Key to retrieve information for',
              hi: 'जानकारी पुनर्प्राप्त करने के लिए कुंजी',
              fr: 'Clé pour récupérer l\'information',
              de: 'Schlüssel zum Abrufen der Information',
              ja: '情報を取得するキー',
              ko: '정보를 검색할 키',
              es: 'Clave para recuperar información',
              ru: 'Ключ для извлечения информации'
            }
          }
        ],
        returns: {
          zh: 'string - 存储的值',
          en: 'string - Stored value',
          hi: 'string - संग्रहीत मान',
          fr: 'string - Valeur stockée',
          de: 'string - Gespeicherter Wert',
          ja: 'string - 保存された値',
          ko: 'string - 저장된 값',
          es: 'string - Valor almacenado',
          ru: 'string - Сохраненное значение'
        },
        example: {
          zh: `AI: 让我检索您的偏好设置。

工具调用: recall
参数: {"key": "user_preference"}

结果: "使用 TypeScript 进行开发"`,
          en: `AI: Let me retrieve your preference.

Tool call: recall
Parameters: {"key": "user_preference"}

Result: "prefer TypeScript for development"`
        }
      }
    ]
  },
  {
    id: 'directory',
    title: {
      zh: '目录工具',
      en: 'Directory Tools',
      hi: 'निर्देशिका टूल्स',
      fr: 'Outils de Répertoire',
      de: 'Verzeichnis-Tools',
      ja: 'ディレクトリツール',
      ko: '디렉토리 도구',
      es: 'Herramientas de Directorio',
      ru: 'Инструменты каталогов'
    },
    description: {
      zh: '用于目录操作和导航的工具',
      en: 'Tools for directory operations and navigation',
      hi: 'निर्देशिका संचालन और नेविगेशन के लिए उपकरण',
      fr: 'Outils pour les opérations de répertoire et la navigation',
      de: 'Tools für Verzeichnisoperationen und Navigation',
      ja: 'ディレクトリ操作とナビゲーション用ツール',
      ko: '디렉토리 작업 및 탐색을 위한 도구',
      es: 'Herramientas para operaciones de directorio y navegación',
      ru: 'Инструменты для операций с каталогами и навигации'
    },
    icon: FolderIcon,
    color: 'from-teal-500 to-cyan-600',
    tools: [
      {
        name: 'create_directory',
        description: {
          zh: '创建新目录',
          en: 'Create a new directory',
          hi: 'नई निर्देशिका बनाएं',
          fr: 'Créer un nouveau répertoire',
          de: 'Ein neues Verzeichnis erstellen',
          ja: '新しいディレクトリを作成',
          ko: '새 디렉토리 생성',
          es: 'Crear un nuevo directorio',
          ru: 'Создать новый каталог'
        },
        parameters: [
          {
            name: 'path',
            type: 'string',
            required: true,
            description: {
              zh: '要创建的目录路径',
              en: 'Path of the directory to create',
              hi: 'बनाने के लिए निर्देशिका का पथ',
              fr: 'Chemin du répertoire à créer',
              de: 'Pfad des zu erstellenden Verzeichnisses',
              ja: '作成するディレクトリのパス',
              ko: '생성할 디렉토리의 경로',
              es: 'Ruta del directorio a crear',
              ru: 'Путь каталога для создания'
            }
          },
          {
            name: 'recursive',
            type: 'boolean',
            required: false,
            description: {
              zh: '是否递归创建父目录',
              en: 'Whether to create parent directories recursively',
              hi: 'क्या पैरेंट निर्देशिकाओं को पुनरावर्ती रूप से बनाना है',
              fr: 'S\'il faut créer les répertoires parents récursivement',
              de: 'Ob übergeordnete Verzeichnisse rekursiv erstellt werden sollen',
              ja: '親ディレクトリを再帰的に作成するかどうか',
              ko: '상위 디렉토리를 재귀적으로 생성할지 여부',
              es: 'Si crear directorios padre recursivamente',
              ru: 'Нужно ли рекурсивно создавать родительские каталоги'
            }
          }
        ],
        returns: {
          zh: 'string - 创建确认',
          en: 'string - Creation confirmation',
          hi: 'string - निर्माण पुष्टि',
          fr: 'string - Confirmation de création',
          de: 'string - Erstellungsbestätigung',
          ja: 'string - 作成確認',
          ko: 'string - 생성 확인',
          es: 'string - Confirmación de creación',
          ru: 'string - Подтверждение создания'
        },
        example: {
          zh: `AI: 我来创建一个新的项目目录。

工具调用: create_directory
参数: {"path": "./src/components", "recursive": true}

结果: 目录 './src/components' 创建成功`,
          en: `AI: I'll create a new project directory.

Tool call: create_directory
Parameters: {"path": "./src/components", "recursive": true}

Result: Directory './src/components' created successfully`
        }
      },
      {
        name: 'get_current_directory',
        description: {
          zh: '获取当前工作目录',
          en: 'Get the current working directory',
          hi: 'वर्तमान कार्यकारी निर्देशिका प्राप्त करें',
          fr: 'Obtenir le répertoire de travail actuel',
          de: 'Das aktuelle Arbeitsverzeichnis abrufen',
          ja: '現在の作業ディレクトリを取得',
          ko: '현재 작업 디렉토리 가져오기',
          es: 'Obtener el directorio de trabajo actual',
          ru: 'Получить текущий рабочий каталог'
        },
        parameters: [],
        returns: {
          zh: 'string - 当前目录路径',
          en: 'string - Current directory path',
          hi: 'string - वर्तमान निर्देशिका पथ',
          fr: 'string - Chemin du répertoire actuel',
          de: 'string - Aktueller Verzeichnispfad',
          ja: 'string - 現在のディレクトリパス',
          ko: 'string - 현재 디렉토리 경로',
          es: 'string - Ruta del directorio actual',
          ru: 'string - Путь текущего каталога'
        },
        example: {
          zh: `AI: 让我检查当前工作目录。

工具调用: get_current_directory
参数: {}

结果: "/Users/username/projects/my-app"`,
          en: `AI: Let me check the current working directory.

Tool call: get_current_directory
Parameters: {}

Result: "/Users/username/projects/my-app"`
        }
      }
    ]
  }
]

export default async function BuiltInToolsPage({ params }: PageProps) {
  const { locale } = await params

  if (!locale) {
    notFound()
  }

  // Helper function to get localized text
  const getLocalizedText = (textObj: any) => textObj[locale as keyof typeof textObj] || textObj.en

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {locale === 'zh' ? '内置工具' :
               locale === 'hi' ? 'अंतर्निहित उपकरण' :
               locale === 'fr' ? 'Outils Intégrés' :
               locale === 'de' ? 'Eingebaute Tools' :
               locale === 'ja' ? '組み込みツール' :
               locale === 'ko' ? '내장 도구' :
               locale === 'es' ? 'Herramientas Integradas' :
               locale === 'ru' ? 'Встроенные инструменты' :
               'Built-in Tools'}
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              {locale === 'zh'
                ? 'Gemini CLI 提供的强大内置工具完整参考'
                : locale === 'hi'
                ? 'Gemini CLI द्वारा प्रदान किए गए शक्तिशाली अंतर्निहित उपकरणों का पूर्ण संदर्भ'
                : locale === 'fr'
                ? 'Référence complète des outils intégrés puissants fournis par Gemini CLI'
                : locale === 'de'
                ? 'Vollständige Referenz für leistungsstarke eingebaute Tools von Gemini CLI'
                : locale === 'ja'
                ? 'Gemini CLI が提供する強力な組み込みツールの完全なリファレンス'
                : locale === 'ko'
                ? 'Gemini CLI에서 제공하는 강력한 내장 도구의 완전한 참조'
                : locale === 'es'
                ? 'Referencia completa de las potentes herramientas integradas proporcionadas por Gemini CLI'
                : locale === 'ru'
                ? 'Полный справочник мощных встроенных инструментов, предоставляемых Gemini CLI'
                : 'Complete reference for powerful built-in tools provided by Gemini CLI'
              }
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-blue-100">
              <span className="flex items-center">
                <DocumentTextIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? '文件系统' :
                 locale === 'hi' ? 'फ़ाइल सिस्टम' :
                 locale === 'fr' ? 'Système de Fichiers' :
                 locale === 'de' ? 'Dateisystem' :
                 locale === 'ja' ? 'ファイルシステム' :
                 locale === 'ko' ? '파일 시스템' :
                 locale === 'es' ? 'Sistema de Archivos' :
                 locale === 'ru' ? 'Файловая система' :
                 'File System'}
              </span>
              <span className="flex items-center">
                <CommandLineIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? 'Shell 命令' :
                 locale === 'hi' ? 'शेल कमांड' :
                 locale === 'fr' ? 'Commandes Shell' :
                 locale === 'de' ? 'Shell-Befehle' :
                 locale === 'ja' ? 'シェルコマンド' :
                 locale === 'ko' ? '셸 명령' :
                 locale === 'es' ? 'Comandos Shell' :
                 locale === 'ru' ? 'Shell команды' :
                 'Shell Commands'}
              </span>
              <span className="flex items-center">
                <GlobeAltIcon className="h-4 w-4 mr-1" />
                {locale === 'zh' ? 'Web 工具' :
                 locale === 'hi' ? 'वेब टूल्स' :
                 locale === 'fr' ? 'Outils Web' :
                 locale === 'de' ? 'Web-Tools' :
                 locale === 'ja' ? 'Webツール' :
                 locale === 'ko' ? '웹 도구' :
                 locale === 'es' ? 'Herramientas Web' :
                 locale === 'ru' ? 'Веб-инструменты' :
                 'Web Tools'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Categories */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '工具类别' :
               locale === 'hi' ? 'उपकरण श्रेणियां' :
               locale === 'fr' ? 'Catégories d\'Outils' :
               locale === 'de' ? 'Tool-Kategorien' :
               locale === 'ja' ? 'ツールカテゴリ' :
               locale === 'ko' ? '도구 카테고리' :
               locale === 'es' ? 'Categorías de Herramientas' :
               locale === 'ru' ? 'Категории инструментов' :
               'Tool Categories'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh'
                ? '按功能分类的内置工具，帮助您完成各种任务'
                : locale === 'hi'
                ? 'विभिन्न कार्यों को पूरा करने में आपकी सहायता के लिए कार्यक्षमता के अनुसार व्यवस्थित अंतर्निहित उपकरण'
                : locale === 'fr'
                ? 'Outils intégrés organisés par fonctionnalité pour vous aider à accomplir diverses tâches'
                : locale === 'de'
                ? 'Eingebaute Tools nach Funktionalität organisiert, um Ihnen bei verschiedenen Aufgaben zu helfen'
                : locale === 'ja'
                ? '様々なタスクを達成するのに役立つ、機能別に整理された組み込みツール'
                : locale === 'ko'
                ? '다양한 작업을 수행하는 데 도움이 되는 기능별로 구성된 내장 도구'
                : locale === 'es'
                ? 'Herramientas integradas organizadas por funcionalidad para ayudarte a realizar diversas tareas'
                : locale === 'ru'
                ? 'Встроенные инструменты, организованные по функциональности, чтобы помочь вам выполнять различные задачи'
                : 'Built-in tools organized by functionality to help you accomplish various tasks'
              }
            </p>
          </div>

          <div className="space-y-16">
            {toolCategories.map((category, categoryIndex) => (
              <div key={category.id} className="relative">
                <div className="text-center mb-12">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {getLocalizedText(category.title)}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {getLocalizedText(category.description)}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={tool.name} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            <code className="bg-gray-100 text-blue-600 px-3 py-1 rounded text-lg">
                              {tool.name}
                            </code>
                          </h4>
                          <p className="text-gray-600">
                            {getLocalizedText(tool.description)}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-3">
                            {locale === 'zh' ? '参数：' :
                             locale === 'hi' ? 'पैरामीटर:' :
                             locale === 'fr' ? 'Paramètres:' :
                             locale === 'de' ? 'Parameter:' :
                             locale === 'ja' ? 'パラメータ:' :
                             locale === 'ko' ? '매개변수:' :
                             locale === 'es' ? 'Parámetros:' :
                             locale === 'ru' ? 'Параметры:' :
                             'Parameters:'}
                          </h5>
                          {tool.parameters.length > 0 ? (
                            <div className="space-y-3">
                              {tool.parameters.map((param, paramIndex) => (
                                <div key={paramIndex} className="bg-gray-50 rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <code className="text-sm font-mono text-blue-600">{param.name}</code>
                                    <span className="text-xs text-gray-500">({param.type})</span>
                                    {param.required && (
                                      <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                                        {locale === 'zh' ? '必需' :
                                         locale === 'hi' ? 'आवश्यक' :
                                         locale === 'fr' ? 'requis' :
                                         locale === 'de' ? 'erforderlich' :
                                         locale === 'ja' ? '必須' :
                                         locale === 'ko' ? '필수' :
                                         locale === 'es' ? 'requerido' :
                                         locale === 'ru' ? 'обязательно' :
                                         'required'}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    {getLocalizedText(param.description)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500 italic">
                              {locale === 'zh' ? '无参数' :
                               locale === 'hi' ? 'कोई पैरामीटर नहीं' :
                               locale === 'fr' ? 'Aucun paramètre' :
                               locale === 'de' ? 'Keine Parameter' :
                               locale === 'ja' ? 'パラメータなし' :
                               locale === 'ko' ? '매개변수 없음' :
                               locale === 'es' ? 'Sin parámetros' :
                               locale === 'ru' ? 'Нет параметров' :
                               'No parameters'}
                            </p>
                          )}

                          <h5 className="font-medium text-gray-900 mb-2 mt-6">
                            {locale === 'zh' ? '返回值：' :
                             locale === 'hi' ? 'रिटर्न:' :
                             locale === 'fr' ? 'Retourne:' :
                             locale === 'de' ? 'Rückgabe:' :
                             locale === 'ja' ? '戻り値:' :
                             locale === 'ko' ? '반환값:' :
                             locale === 'es' ? 'Devuelve:' :
                             locale === 'ru' ? 'Возвращает:' :
                             'Returns:'}
                          </h5>
                          <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                            {getLocalizedText(tool.returns)}
                          </p>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-900 mb-3">
                            {locale === 'zh' ? '使用示例：' :
                             locale === 'hi' ? 'उपयोग उदाहरण:' :
                             locale === 'fr' ? 'Exemple d\'Utilisation:' :
                             locale === 'de' ? 'Verwendungsbeispiel:' :
                             locale === 'ja' ? '使用例:' :
                             locale === 'ko' ? '사용 예제:' :
                             locale === 'es' ? 'Ejemplo de Uso:' :
                             locale === 'ru' ? 'Пример использования:' :
                             'Usage Example:'}
                          </h5>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                              {getLocalizedText(tool.example)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Configuration */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === 'zh' ? '工具配置' :
               locale === 'hi' ? 'उपकरण कॉन्फ़िगरेशन' :
               locale === 'fr' ? 'Configuration des Outils' :
               locale === 'de' ? 'Tool-Konfiguration' :
               locale === 'ja' ? 'ツール設定' :
               locale === 'ko' ? '도구 구성' :
               locale === 'es' ? 'Configuración de Herramientas' :
               locale === 'ru' ? 'Конфигурация инструментов' :
               'Tool Configuration'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {locale === 'zh' ? '配置工具行为和权限' :
               locale === 'hi' ? 'उपकरण व्यवहार और अनुमतियों को कॉन्फ़िगर करें' :
               locale === 'fr' ? 'Configurer le comportement et les permissions des outils' :
               locale === 'de' ? 'Tool-Verhalten und Berechtigungen konfigurieren' :
               locale === 'ja' ? 'ツールの動作と権限を設定' :
               locale === 'ko' ? '도구 동작 및 권한 구성' :
               locale === 'es' ? 'Configurar comportamiento y permisos de herramientas' :
               locale === 'ru' ? 'Настройка поведения и разрешений инструментов' :
               'Configure tool behavior and permissions'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {locale === 'zh' ? '启用/禁用工具' :
                   locale === 'hi' ? 'उपकरण सक्षम/अक्षम करें' :
                   locale === 'fr' ? 'Activer/Désactiver les Outils' :
                   locale === 'de' ? 'Tools Aktivieren/Deaktivieren' :
                   locale === 'ja' ? 'ツールの有効/無効' :
                   locale === 'ko' ? '도구 활성화/비활성화' :
                   locale === 'es' ? 'Habilitar/Deshabilitar Herramientas' :
                   locale === 'ru' ? 'Включить/Отключить инструменты' :
                   'Enable/Disable Tools'}
                </h3>
                <div className="space-y-3">
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set tools-enabled true
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set file-tools-enabled false
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set web-tools-enabled true
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {locale === 'zh' ? '工具超时设置' :
                   locale === 'hi' ? 'उपकरण टाइमआउट' :
                   locale === 'fr' ? 'Délais d\'Expiration des Outils' :
                   locale === 'de' ? 'Tool-Timeouts' :
                   locale === 'ja' ? 'ツールタイムアウト' :
                   locale === 'ko' ? '도구 타임아웃' :
                   locale === 'es' ? 'Tiempos de Espera de Herramientas' :
                   locale === 'ru' ? 'Таймауты инструментов' :
                   'Tool Timeouts'}
                </h3>
                <div className="space-y-3">
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set tool-timeout 30
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set web-timeout 10
                  </code>
                  <code className="block bg-gray-100 p-2 rounded text-sm text-gray-800">
                    gemini config set shell-timeout 60
                  </code>
                </div>
              </div>
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
              {locale === 'zh' ? '了解更多关于工具和自定义的信息' :
               locale === 'hi' ? 'उपकरण और अनुकूलन के बारे में और जानें' :
               locale === 'fr' ? 'En savoir plus sur les outils et la personnalisation' :
               locale === 'de' ? 'Erfahren Sie mehr über Tools und Anpassungen' :
               locale === 'ja' ? 'ツールとカスタマイズについて詳しく学ぶ' :
               locale === 'ko' ? '도구 및 사용자 정의에 대해 자세히 알아보기' :
               locale === 'es' ? 'Aprende más sobre herramientas y personalización' :
               locale === 'ru' ? 'Узнайте больше об инструментах и настройке' :
               'Learn more about tools and customization'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/tools-api`}
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
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
                href={`/${locale}/docs/plugin-api`}
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {locale === 'zh' ? '自定义工具' :
                 locale === 'hi' ? 'कस्टम टूल्स' :
                 locale === 'fr' ? 'Outils Personnalisés' :
                 locale === 'de' ? 'Benutzerdefinierte Tools' :
                 locale === 'ja' ? 'カスタムツール' :
                 locale === 'ko' ? '사용자 정의 도구' :
                 locale === 'es' ? 'Herramientas Personalizadas' :
                 locale === 'ru' ? 'Пользовательские инструменты' :
                 'Custom Tools'}
              </Link>
              <Link
                href={`/${locale}/docs/configuration`}
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {locale === 'zh' ? '配置' :
                 locale === 'hi' ? 'कॉन्फ़िगरेशन' :
                 locale === 'fr' ? 'Configuration' :
                 locale === 'de' ? 'Konfiguration' :
                 locale === 'ja' ? '設定' :
                 locale === 'ko' ? '구성' :
                 locale === 'es' ? 'Configuración' :
                 locale === 'ru' ? 'Конфигурация' :
                 'Configuration'}
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
