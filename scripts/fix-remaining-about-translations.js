const fs = require('fs');
const path = require('path');

// Spanish about structure
const esAbout = {
  title: "Acerca de nuestra plataforma",
  subtitle: "Nos esforzamos por hacer que el desarrollo impulsado por IA sea accesible para desarrolladores de todo el mundo a través de recursos de aprendizaje integrales y contenido creado por la comunidad.",
  mission: {
    title: "Nuestra misión",
    description: "Democratizar el desarrollo impulsado por IA proporcionando recursos de aprendizaje integrales, accesibles y prácticos para Gemini CLI de Google. Creemos que cada desarrollador debería tener la oportunidad de aprovechar el poder de la inteligencia artificial en su flujo de trabajo diario.",
    excellence: "Excelencia educativa",
    excellenceDesc: "Creamos tutoriales, guías y documentación de alta calidad que hacen que los conceptos complejos de IA sean comprensibles para desarrolladores de todos los niveles de habilidad.",
    community: "Enfoque comunitario",
    communityDesc: "Nuestra plataforma prospera a través de contribuciones de la comunidad, fomentando la colaboración y el intercambio de conocimientos entre entusiastas del desarrollo de IA.",
    practical: "Aprendizaje práctico",
    practicalDesc: "Enfatizamos ejemplos prácticos del mundo real que los desarrolladores pueden aplicar inmediatamente a sus proyectos y flujos de trabajo.",
    global: "Accesibilidad global",
    globalDesc: "Al soportar múltiples idiomas y diseño inclusivo, aseguramos que nuestros recursos sean accesibles para desarrolladores de todo el mundo."
  },
  values: {
    title: "Nuestros valores",
    subtitle: "Los principios que guían todo lo que hacemos",
    education: {
      name: "Educación primero",
      description: "Creemos en hacer que el desarrollo de IA sea accesible a través de contenido educativo integral y comprensible."
    },
    communityDriven: {
      name: "Impulsado por la comunidad",
      description: "Nuestra plataforma prospera a través de contribuciones de la comunidad, retroalimentación y experiencias de aprendizaje colaborativo."
    },
    openSource: {
      name: "Espíritu de código abierto",
      description: "Apoyamos y promovemos el desarrollo de código abierto, la transparencia y el intercambio de conocimientos."
    },
    innovation: {
      name: "Enfoque en la innovación",
      description: "Nos mantenemos a la vanguardia de la tecnología de IA, proporcionando recursos de aprendizaje y herramientas de vanguardia."
    },
    accessibility: {
      name: "Accesibilidad global",
      description: "Nos esforzamos por hacer que nuestro contenido sea accesible para desarrolladores de todo el mundo, independientemente de su origen."
    },
    quality: {
      name: "Contenido de calidad",
      description: "Estamos comprometidos a proporcionar materiales educativos de alta calidad, precisos y actualizados."
    }
  },
  stats: {
    title: "Impacto de la plataforma",
    subtitle: "Creciendo con la comunidad de desarrolladores",
    languages: "Idiomas soportados",
    guides: "Guías de aprendizaje",
    examples: "Ejemplos de código",
    members: "Miembros de la comunidad"
  },
  story: {
    title: "Nuestra historia",
    paragraph1: "Cuando Google lanzó Gemini CLI como un proyecto de código abierto, reconocimos su enorme potencial para cambiar la forma en que los desarrolladores trabajan con IA. Sin embargo, también vimos una brecha en los recursos de aprendizaje accesibles que podrían ayudar a desarrolladores de diversos orígenes a comenzar con esta poderosa herramienta.",
    paragraph2: "Por eso decidimos crear esta plataforma de aprendizaje integral. Nuestro objetivo es simple: hacer que Gemini CLI sea accesible para todos, independientemente de su nivel de experiencia con IA o herramientas de línea de comandos.",
    paragraph3: "Comenzando con una pequeña colección de tutoriales, hemos crecido hasta convertirse en una plataforma integral con soporte multiidioma, ejemplos interactivos y una próspera comunidad de contribuyentes. Estamos orgullosos de ser parte del ecosistema de código abierto y apoyar la visión de Google de democratizar el desarrollo de IA."
  },
  disclaimer: {
    title: "Aviso importante",
    content: "Este es un recurso de aprendizaje no oficial creado por la comunidad para apoyar la educación de Gemini CLI. Aunque nos esforzamos por la precisión y calidad, esta plataforma no está afiliada o respaldada por Google. Todo el contenido se basa en el proyecto oficial de código abierto Gemini CLI y contribuciones de la comunidad."
  },
  getInvolved: {
    title: "Involucrarse",
    subtitle: "Únete a nuestra comunidad y ayuda a hacer que el desarrollo de IA sea más accesible",
    contribute: {
      title: "Contribuir contenido",
      description: "Ayúdanos a mejorar los tutoriales y agregar nuevos recursos de aprendizaje.",
      link: "Guía de contribución →"
    },
    discussions: {
      title: "Unirse a las discusiones",
      description: "Participa en discusiones de la comunidad y comparte tus experiencias.",
      link: "Discusiones de GitHub →"
    },
    issues: {
      title: "Reportar un problema",
      description: "¿Encontraste un problema o tienes una sugerencia de mejora?",
      link: "Contáctanos →"
    }
  },
  cta: {
    title: "¿Listo para empezar a aprender?",
    description: "Explora nuestras guías integrales y únete a miles de desarrolladores que ya están usando Gemini CLI para mejorar sus flujos de trabajo de desarrollo.",
    getStarted: "Comenzar",
    browseGuides: "Explorar guías"
  }
};

// Hindi about structure
const hiAbout = {
  title: "हमारे प्लेटफॉर्म के बारे में",
  subtitle: "हम व्यापक शिक्षण संसाधनों और समुदाय-निर्मित सामग्री के माध्यम से दुनिया भर के डेवलपर्स के लिए AI-संचालित विकास को सुलभ बनाने का प्रयास करते हैं।",
  mission: {
    title: "हमारा मिशन",
    description: "Google के Gemini CLI के लिए व्यापक, सुलभ और व्यावहारिक शिक्षण संसाधन प्रदान करके AI-संचालित विकास को लोकतांत्रिक बनाना। हम मानते हैं कि हर डेवलपर को अपने दैनिक वर्कफ़्लो में कृत्रिम बुद्धिमत्ता की शक्ति का लाभ उठाने का अवसर मिलना चाहिए।",
    excellence: "शैक्षिक उत्कृष्टता",
    excellenceDesc: "हम उच्च गुणवत्ता वाले ट्यूटोरियल, गाइड और दस्तावेज़ीकरण बनाते हैं जो सभी कौशल स्तरों के डेवलपर्स के लिए जटिल AI अवधारणाओं को समझने योग्य बनाते हैं।",
    community: "समुदायिक फोकस",
    communityDesc: "हमारा प्लेटफॉर्म समुदायिक योगदान के माध्यम से फलता-फूलता है, AI विकास उत्साही लोगों के बीच सहयोग और ज्ञान साझाकरण को बढ़ावा देता है।",
    practical: "व्यावहारिक शिक्षा",
    practicalDesc: "हम वास्तविक दुनिया के व्यावहारिक उदाहरणों पर जोर देते हैं जिन्हें डेवलपर्स तुरंत अपनी परियोजनाओं और वर्कफ़्लो में लागू कर सकते हैं।",
    global: "वैश्विक पहुंच",
    globalDesc: "कई भाषाओं का समर्थन और समावेशी डिज़ाइन के माध्यम से, हम सुनिश्चित करते हैं कि हमारे संसाधन दुनिया भर के डेवलपर्स के लिए सुलभ हैं।"
  },
  values: {
    title: "हमारे मूल्य",
    subtitle: "वे सिद्धांत जो हमारे सभी कार्यों का मार्गदर्शन करते हैं",
    education: {
      name: "शिक्षा पहले",
      description: "हम व्यापक, समझने योग्य शैक्षिक सामग्री के माध्यम से AI विकास को सुलभ बनाने में विश्वास करते हैं।"
    },
    communityDriven: {
      name: "समुदाय-संचालित",
      description: "हमारा प्लेटफॉर्म समुदायिक योगदान, फीडबैक और सहयोगी शिक्षण अनुभवों के माध्यम से फलता-फूलता है।"
    },
    openSource: {
      name: "ओपन सोर्स भावना",
      description: "हम ओपन सोर्स विकास, पारदर्शिता और ज्ञान साझाकरण का समर्थन और प्रचार करते हैं।"
    },
    innovation: {
      name: "नवाचार फोकस",
      description: "हम AI तकनीक के अग्रणी में रहते हैं, अत्याधुनिक शिक्षण संसाधन और उपकरण प्रदान करते हैं।"
    },
    accessibility: {
      name: "वैश्विक पहुंच",
      description: "हम अपनी सामग्री को दुनिया भर के डेवलपर्स के लिए सुलभ बनाने का प्रयास करते हैं, उनकी पृष्ठभूमि की परवाह किए बिना।"
    },
    quality: {
      name: "गुणवत्तापूर्ण सामग्री",
      description: "हम उच्च गुणवत्ता, सटीक और अद्यतन शैक्षिक सामग्री प्रदान करने के लिए प्रतिबद्ध हैं।"
    }
  },
  stats: {
    title: "प्लेटफॉर्म प्रभाव",
    subtitle: "डेवलपर समुदाय के साथ बढ़ना",
    languages: "समर्थित भाषाएं",
    guides: "शिक्षण गाइड",
    examples: "कोड उदाहरण",
    members: "समुदाय सदस्य"
  },
  story: {
    title: "हमारी कहानी",
    paragraph1: "जब Google ने Gemini CLI को एक ओपन सोर्स प्रोजेक्ट के रूप में लॉन्च किया, तो हमने डेवलपर्स के AI के साथ काम करने के तरीके को बदलने की इसकी विशाल क्षमता को पहचाना। हालांकि, हमने सुलभ शिक्षण संसाधनों में एक अंतर भी देखा जो विभिन्न पृष्ठभूमि के डेवलपर्स को इस शक्तिशाली उपकरण के साथ शुरुआत करने में मदद कर सकते थे।",
    paragraph2: "इसीलिए हमने इस व्यापक शिक्षण प्लेटफॉर्म को बनाने का फैसला किया। हमारा लक्ष्य सरल है: AI या कमांड लाइन टूल्स के साथ उनके अनुभव के स्तर की परवाह किए बिना, सभी के लिए Gemini CLI को सुलभ बनाना।",
    paragraph3: "ट्यूटोरियल के एक छोटे संग्रह से शुरू करके, हम बहुभाषी समर्थन, इंटरैक्टिव उदाहरणों और योगदानकर्ताओं के एक फलते-फूलते समुदाय के साथ एक व्यापक प्लेटफॉर्म में विकसित हुए हैं। हम ओपन सोर्स इकोसिस्टम का हिस्सा होने और AI विकास को लोकतांत्रिक बनाने के Google के दृष्टिकोण का समर्थन करने पर गर्व करते हैं।"
  },
  disclaimer: {
    title: "महत्वपूर्ण अस्वीकरण",
    content: "यह Gemini CLI शिक्षा का समर्थन करने के लिए समुदाय द्वारा बनाया गया एक अनौपचारिक शिक्षण संसाधन है। जबकि हम सटीकता और गुणवत्ता के लिए प्रयास करते हैं, यह प्लेटफॉर्म Google से संबद्ध या समर्थित नहीं है। सभी सामग्री आधिकारिक Gemini CLI ओपन सोर्स प्रोजेक्ट और समुदायिक योगदान पर आधारित है।"
  },
  getInvolved: {
    title: "शामिल हों",
    subtitle: "हमारे समुदाय में शामिल हों और AI विकास को अधिक सुलभ बनाने में मदद करें",
    contribute: {
      title: "सामग्री में योगदान करें",
      description: "ट्यूटोरियल में सुधार और नए शिक्षण संसाधन जोड़ने में हमारी मदद करें।",
      link: "योगदान गाइड →"
    },
    discussions: {
      title: "चर्चाओं में शामिल हों",
      description: "समुदायिक चर्चाओं में भाग लें और अपने अनुभव साझा करें।",
      link: "GitHub चर्चाएं →"
    },
    issues: {
      title: "समस्या रिपोर्ट करें",
      description: "कोई समस्या मिली या सुधार का सुझाव है?",
      link: "हमसे संपर्क करें →"
    }
  },
  cta: {
    title: "सीखना शुरू करने के लिए तैयार हैं?",
    description: "हमारे व्यापक गाइड का अन्वेषण करें और हजारों डेवलपर्स के साथ जुड़ें जो पहले से ही अपने विकास वर्कफ़्लो को बेहतर बनाने के लिए Gemini CLI का उपयोग कर रहे हैं।",
    getStarted: "शुरू करें",
    browseGuides: "गाइड ब्राउज़ करें"
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

// Update Spanish and Hindi about sections
updateAboutSection('es', esAbout);
updateAboutSection('hi', hiAbout);

console.log('Remaining about sections updated successfully!');
