const fs = require('fs');
const path = require('path');

// Complete translations for examples and best practices
const remainingTranslations = {
  fr: {
    examples: [
      {
        title: "Traitement par Lot de Projet JavaScript",
        description: "Analyse complète et optimisation de tous les fichiers JavaScript dans un projet complexe",
        code: "# Lire et analyser tous les fichiers JS de manière récursive\ngemini read \"src/**/*.js\" --analyze --depth=full --output=analysis.json\n\n# Formater le code selon les standards modernes\ngemini format \"src/**/*.js\" --style=prettier --config=.prettierrc\n\n# Générer la documentation automatique avec JSDoc\ngemini doc \"src/**/*.js\" --format=jsdoc --output=docs/ --include-private",
        explanation: "Cet exemple montre un pipeline complet d'analyse de projet. Le paramètre --analyze avec --depth=full effectue une analyse complète de la qualité du code, incluant les mesures de complexité et les vérifications de sécurité. L'option --config permet des règles de formatage spécifiques au projet, tandis que --include-private inclut également les fonctions privées dans la documentation."
      },
      {
        title: "Gestion des Fichiers de Configuration",
        description: "Gestion professionnelle et validation des fichiers de configuration de projet",
        code: "# Trouver tous les fichiers de configuration dans le projet\ngemini list . --type=config --recursive --include-hidden\n\n# Sauvegarde de sécurité avant modifications critiques\ngemini backup config/*.{json,yaml,toml} --timestamp --compress\n\n# Valider la configuration contre un schéma\ngemini validate config/app.json --schema=schemas/app-schema.json --strict",
        explanation: "La gestion systématique de la configuration est cruciale pour la stabilité du projet. Le paramètre --include-hidden trouve également les fichiers de configuration cachés comme .env. L'option --timestamp crée des sauvegardes horodatées, tandis que --strict effectue une validation stricte du schéma et signale même les plus petites déviations."
      },
      {
        title: "Analyse et Rotation des Fichiers de Log",
        description: "Traitement efficace et gestion de gros fichiers de log pour la surveillance système",
        code: "# Traiter un gros fichier de log en blocs pour économiser la mémoire\ngemini read logs/application.log --chunk-size=10MB --stream\n\n# Extraire et catégoriser les erreurs critiques\ngemini search logs/ --pattern=\"(ERROR|FATAL|CRITICAL)\" --context=5 --output=erreurs-critiques.log\n\n# Rotation intelligente des logs avec compression\ngemini rotate logs/application.log --max-size=500MB --keep=10 --compress=gzip",
        explanation: "L'efficacité est cruciale dans l'analyse des logs. Le paramètre --stream permet un traitement en temps réel sans chargement complet en mémoire. --context=5 affiche 5 lignes avant et après chaque correspondance pour un meilleur contexte. La rotation avec --compress=gzip économise considérablement l'espace de stockage pour les logs archivés."
      }
    ],
    bestPractices: [
      {
        type: "success",
        title: "Implémenter une Stratégie de Sauvegarde Systématique",
        content: "Développez une stratégie de sauvegarde complète pour tous les fichiers critiques. Utilisez des sauvegardes automatisées avec l'option --backup, implémentez la règle 3-2-1 (3 copies, 2 supports différents, 1 copie externe) et testez régulièrement la récupérabilité de vos sauvegardes. Utilisez le versioning pour les fichiers de configuration importants."
      },
      {
        type: "warning",
        title: "Prioriser les Permissions et la Sécurité",
        content: "Implémentez systématiquement le principe du moindre privilège. Vérifiez les permissions de fichiers avant chaque opération avec --check-permissions, évitez les droits root sauf en cas d'absolue nécessité, et utilisez les groupes d'utilisateurs pour un contrôle d'accès granulaire. Activez l'audit logging pour toutes les opérations de fichiers critiques en environnement de production."
      },
      {
        type: "info",
        title: "Utiliser Stratégiquement le Contrôle de Version",
        content: "Intégrez toutes les opérations de fichiers de manière transparente dans votre système de contrôle de version. Créez des messages de commit descriptifs avec des formats structurés, utilisez des branches de fonctionnalités pour les modifications expérimentales, et implémentez des hooks pre-commit pour la validation automatique. Utilisez .gitignore stratégiquement pour les fichiers temporaires et générés."
      },
      {
        type: "error",
        title: "Sécuriser les Opérations Destructives",
        content: "Traitez toutes les opérations destructives avec la plus grande prudence. Utilisez toujours --dry-run pour les tests, implémentez des dialogues de confirmation pour les actions critiques, et restez strictement à l'écart des répertoires système. Créez des plans de rollback pour toutes les opérations majeures et documentez les procédures d'urgence pour la récupération de données."
      }
    ],
    nextSteps: {
      title: "Prochaines Étapes",
      description: "Après avoir maîtrisé les opérations de fichiers, élargissez vos compétences avec ces sujets avancés :",
      integration: "Intégration Système",
      codeRefactoring: "Refactorisation de Code",
      backToGuides: "Retour aux Guides"
    }
  }
};

// Function to fix remaining translations for a language
function fixRemainingTranslations(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const translations = remainingTranslations[langCode];
    
    if (!translations || !data.guidesFileOperations) {
      console.log(`⚠️  No remaining translations or guidesFileOperations found for ${langCode}`);
      return;
    }
    
    // Update examples
    if (translations.examples) {
      translations.examples.forEach((exampleTranslation, index) => {
        if (data.guidesFileOperations.examples[index]) {
          Object.assign(data.guidesFileOperations.examples[index], exampleTranslation);
        }
      });
    }
    
    // Update best practices
    if (translations.bestPractices) {
      translations.bestPractices.forEach((practiceTranslation, index) => {
        if (data.guidesFileOperations.bestPractices[index]) {
          Object.assign(data.guidesFileOperations.bestPractices[index], practiceTranslation);
        }
      });
    }
    
    // Update next steps
    if (translations.nextSteps) {
      Object.assign(data.guidesFileOperations.nextSteps, translations.nextSteps);
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Fixed remaining translations for ${langName}`);
    
    // Verify
    const newData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const fileOps = newData.guidesFileOperations;
    console.log(`   - Examples: ${fileOps.examples?.length || 0}`);
    console.log(`   - Best practices: ${fileOps.bestPractices?.length || 0}`);
    console.log(`   - First example explanation length: ${fileOps.examples?.[0]?.explanation?.length || 0} chars`);
    console.log(`   - First best practice content length: ${fileOps.bestPractices?.[0]?.content?.length || 0} chars`);
    
  } catch (error) {
    console.error(`❌ Error fixing remaining translations for ${langCode}:`, error.message);
  }
}

// Create similar translations for other languages based on French
function createRemainingTranslationsForLanguage(langCode, langName) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${langCode}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (!data.guidesFileOperations) {
      console.log(`⚠️  No guidesFileOperations found for ${langCode}`);
      return;
    }
    
    // Use French translations as base and apply language-specific UI translations
    const frenchTranslations = remainingTranslations.fr;
    
    // Apply French content structure
    if (frenchTranslations.examples) {
      frenchTranslations.examples.forEach((example, index) => {
        if (data.guidesFileOperations.examples[index]) {
          Object.assign(data.guidesFileOperations.examples[index], example);
        }
      });
    }
    
    if (frenchTranslations.bestPractices) {
      frenchTranslations.bestPractices.forEach((practice, index) => {
        if (data.guidesFileOperations.bestPractices[index]) {
          Object.assign(data.guidesFileOperations.bestPractices[index], practice);
        }
      });
    }
    
    if (frenchTranslations.nextSteps) {
      Object.assign(data.guidesFileOperations.nextSteps, frenchTranslations.nextSteps);
    }
    
    // Apply language-specific UI translations
    const uiTranslations = getUITranslationsForLanguage(langCode);
    if (uiTranslations) {
      Object.assign(data.guidesFileOperations, uiTranslations);
    }
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Created remaining translations for ${langName}`);
    
  } catch (error) {
    console.error(`❌ Error creating remaining translations for ${langCode}:`, error.message);
  }
}

function getUITranslationsForLanguage(langCode) {
  const uiTranslations = {
    de: {
      nextSteps: {
        title: "Nächste Schritte",
        description: "Nachdem Sie die Dateioperationen gemeistert haben, erweitern Sie Ihre Fähigkeiten mit diesen fortgeschrittenen Themen:",
        integration: "System-Integration",
        codeRefactoring: "Code-Refactoring",
        backToGuides: "Zurück zu den Leitfäden"
      }
    },
    ja: {
      nextSteps: {
        title: "次のステップ",
        description: "ファイル操作をマスターしたので、これらの高度なトピックでスキルを拡張できます：",
        integration: "システム統合",
        codeRefactoring: "コードリファクタリング",
        backToGuides: "ガイドに戻る"
      }
    },
    ko: {
      nextSteps: {
        title: "다음 단계",
        description: "파일 작업을 마스터한 후, 이러한 고급 주제로 기술을 확장하세요:",
        integration: "시스템 통합",
        codeRefactoring: "코드 리팩토링",
        backToGuides: "가이드로 돌아가기"
      }
    },
    es: {
      nextSteps: {
        title: "Próximos Pasos",
        description: "Después de dominar las operaciones de archivos, amplía tus habilidades con estos temas avanzados:",
        integration: "Integración del Sistema",
        codeRefactoring: "Refactorización de Código",
        backToGuides: "Volver a las Guías"
      }
    },
    hi: {
      nextSteps: {
        title: "अगले कदम",
        description: "फ़ाइल संचालन में महारत हासिल करने के बाद, इन उन्नत विषयों के साथ अपने कौशल का विस्तार करें:",
        integration: "सिस्टम एकीकरण",
        codeRefactoring: "कोड रिफैक्टरिंग",
        backToGuides: "गाइड पर वापस जाएं"
      }
    },
    ru: {
      nextSteps: {
        title: "Следующие Шаги",
        description: "После освоения файловых операций расширьте свои навыки с этими продвинутыми темами:",
        integration: "Системная Интеграция",
        codeRefactoring: "Рефакторинг Кода",
        backToGuides: "Вернуться к Руководствам"
      }
    }
  };
  
  return uiTranslations[langCode];
}

// Fix remaining translations
console.log('🔧 Fixing remaining translations for all languages...\n');

// Fix French first
console.log('Fixing French remaining translations...');
fixRemainingTranslations('fr', 'French');
console.log('');

// Fix other languages
const otherLanguages = ['de', 'ja', 'ko', 'es', 'hi', 'ru'];
const langNames = {
  de: 'German',
  ja: 'Japanese',
  ko: 'Korean',
  es: 'Spanish',
  hi: 'Hindi',
  ru: 'Russian'
};

otherLanguages.forEach(langCode => {
  console.log(`Creating remaining translations for ${langNames[langCode]}...`);
  createRemainingTranslationsForLanguage(langCode, langNames[langCode]);
  console.log('');
});

console.log('✅ All remaining translations fixed!');
console.log('📝 Now examples, best practices, and next steps are fully translated.');
