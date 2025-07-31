const fs = require('fs');
const path = require('path');

// Complete translations for final languages
const finalLanguageTranslations = {
  ko: {
    "title": "개인정보 보호정책",
    "subtitle": "귀하의 개인정보는 저희에게 중요합니다. 이 정책은 저희가 귀하의 정보를 어떻게 수집, 사용, 보호하는지 설명합니다.",
    "lastUpdated": "최종 업데이트",
    "introduction": {
      "title": "소개",
      "content": "이 개인정보 보호정책은 Gemini CLI 학습 플랫폼이 귀하가 저희 웹사이트와 서비스를 사용할 때 귀하의 정보를 어떻게 수집, 사용, 공유하는지 설명합니다. 저희는 귀하의 개인정보를 보호하고 데이터 관행에 대해 투명하게 공개할 것을 약속합니다."
    },
    "informationWeCollect": {
      "title": "수집하는 정보",
      "analytics": {
        "title": "분석 정보",
        "description": "저희는 방문자가 저희 웹사이트와 어떻게 상호작용하는지 이해하기 위해 Google Analytics를 사용합니다. 여기에는 다음이 포함됩니다:",
        "items": [
          "방문한 페이지와 각 페이지에서 보낸 시간",
          "지리적 위치 (국가/지역 수준)",
          "기기 및 브라우저 정보",
          "참조 소스 (저희 웹사이트를 어떻게 찾았는지)",
          "사용자 상호작용 및 탐색 패턴"
        ]
      },
      "language": {
        "title": "언어 설정",
        "description": "개인화된 경험을 제공하기 위해 귀하의 언어 설정을 브라우저에 로컬로 저장합니다. 이 정보는 저희 서버로 전송되지 않습니다."
      },
      "technical": {
        "title": "기술 정보",
        "description": "귀하가 저희 웹사이트를 방문할 때 특정 기술 정보를 자동으로 수집합니다:",
        "items": [
          "IP 주소 (분석용으로 익명화)",
          "브라우저 유형 및 버전",
          "운영 체제",
          "화면 해상도 및 기기 유형"
        ]
      }
    },
    "howWeUse": {
      "title": "정보 사용 방법",
      "description": "수집된 정보를 다음 목적으로 사용합니다:",
      "items": [
        {
          "title": "웹사이트 분석",
          "description": "사용자 행동을 이해하고 웹사이트의 성능과 사용자 경험을 개선하기 위해"
        },
        {
          "title": "콘텐츠 최적화",
          "description": "사용자에게 가장 가치 있는 콘텐츠를 결정하고 교육 자료를 최적화하기 위해"
        },
        {
          "title": "기술적 개선",
          "description": "기술적 문제를 식별하고 수정하며, 로딩 시간을 최적화하고 기기 간 호환성을 보장하기 위해"
        },
        {
          "title": "언어 현지화",
          "description": "선호하는 언어로 콘텐츠를 제공하고 번역 품질을 개선하기 위해"
        },
        {
          "title": "보안",
          "description": "웹사이트를 남용, 스팸 및 악의적인 활동으로부터 보호하기 위해"
        }
      ]
    },
    "informationSharing": {
      "title": "정보 공유",
      "description": "다음과 같은 제한적인 상황을 제외하고는 개인정보를 제3자에게 판매, 거래 또는 양도하지 않습니다:",
      "items": [
        {
          "title": "서비스 제공업체",
          "description": "웹사이트 분석 서비스를 제공하기 위해 익명화된 분석 데이터를 Google Analytics와 공유합니다"
        },
        {
          "title": "법적 요구사항",
          "description": "법률에 의해 요구되거나 저희의 권리와 안전을 보호하기 위해 정보를 공개할 수 있습니다"
        },
        {
          "title": "사업 양도",
          "description": "합병이나 인수의 경우, 사용자 정보가 사업 자산의 일부로 양도될 수 있습니다"
        }
      ]
    },
    "cookies": {
      "title": "쿠키 및 추적 기술",
      "analytics": {
        "title": "Google Analytics 쿠키",
        "description": "사용 통계를 수집하기 위해 Google Analytics 쿠키를 사용합니다. 이러한 쿠키는 다음을 이해하는 데 도움이 됩니다:",
        "items": [
          "가장 인기 있는 페이지",
          "사용자가 사이트를 어떻게 탐색하는지",
          "기술적 성능 지표"
        ]
      },
      "localStorage": {
        "title": "로컬 저장소",
        "description": "언어 설정을 기억하고 더 나은 사용자 경험을 제공하기 위해 브라우저 로컬 저장소를 사용합니다. 이 데이터는 귀하의 기기에 남아 있으며 저희 서버로 전송되지 않습니다."
      }
    },
    "yourRights": {
      "title": "귀하의 권리와 선택",
      "description": "귀하의 정보에 관해 여러 권리가 있습니다:",
      "items": [
        {
          "title": "분석 거부",
          "description": "브라우저 확장 프로그램을 사용하거나 브라우저 설정을 조정하여 Google Analytics 추적을 거부할 수 있습니다"
        },
        {
          "title": "로컬 데이터 삭제",
          "description": "브라우저의 로컬 저장소를 지워서 언어 설정 및 기타 로컬 데이터를 삭제할 수 있습니다"
        },
        {
          "title": "정보 접근",
          "description": "저희가 귀하에 대해 수집한 데이터에 대한 정보를 요청할 수 있습니다"
        },
        {
          "title": "문의하기",
          "description": "개인정보 관련 질문이나 우려사항이 있으시면 저희에게 연락할 수 있습니다"
        }
      ]
    },
    "dataSecurity": {
      "title": "데이터 보안",
      "description": "귀하의 정보를 보호하기 위해 적절한 보안 조치를 구현합니다:",
      "items": [
        "모든 웹사이트 통신에 대한 HTTPS 암호화",
        "정기적인 보안 업데이트 및 모니터링",
        "수집된 데이터에 대한 제한적 접근",
        "안전한 호스팅 인프라"
      ]
    },
    "thirdParty": {
      "title": "제3자 서비스",
      "googleAnalytics": {
        "title": "Google Analytics",
        "description": "저희 웹사이트는 Google Inc.에서 제공하는 웹 분석 서비스인 Google Analytics를 사용합니다. Google Analytics는 사용자가 사이트를 어떻게 사용하는지 분석하는 데 도움이 되는 쿠키를 사용합니다.",
        "moreInfo": "Google의 개인정보 보호 관행에 대한 자세한 내용은 다음을 참조하십시오:",
        "linkText": "Google 개인정보처리방침"
      },
      "externalLinks": {
        "title": "외부 링크",
        "description": "저희 웹사이트에는 외부 사이트로의 링크가 포함될 수 있습니다. 저희는 이러한 외부 웹사이트의 개인정보 보호 관행에 대해 책임지지 않습니다. 해당 개인정보처리방침을 읽어보시기 바랍니다."
      }
    },
    "childrens": {
      "title": "아동 개인정보 보호",
      "description": "저희 웹사이트는 13세 미만의 아동을 대상으로 하지 않습니다. 저희는 13세 미만의 아동으로부터 고의로 개인정보를 수집하지 않습니다. 귀하가 부모 또는 보호자이고 귀하의 자녀가 저희에게 개인정보를 제공했다고 생각되시면 저희에게 연락해 주십시오."
    },
    "changes": {
      "title": "이 개인정보처리방침의 변경",
      "description": "저희는 때때로 이 개인정보처리방침을 업데이트할 수 있습니다. 이 페이지에 새로운 개인정보처리방침을 게시하고 '최종 업데이트' 날짜를 업데이트하여 변경사항을 알려드립니다. 변경사항에 대해 이 개인정보처리방침을 주기적으로 검토하시기 바랍니다."
    },
    "contact": {
      "title": "연락처 정보",
      "description": "이 개인정보처리방침이나 저희의 개인정보 보호 관행에 대해 질문이 있으시면 저희에게 연락해 주십시오:",
      "email": "이메일",
      "github": "GitHub",
      "website": "웹사이트",
      "contactForm": "문의 양식",
      "reportIssues": "문제 신고"
    },
    "cta": {
      "title": "개인정보처리방침에 대한 질문이 있으신가요?",
      "description": "저희의 개인정보 보호 관행에 대해 궁금한 점이 있으시면 언제든지 저희에게 연락해 주십시오.",
      "contactUs": "문의하기"
    }
  }
};

// Function to completely replace privacy section
function replacePrivacySection(lang, translations) {
  const filePath = path.join(__dirname, '..', 'src', 'messages', `${lang}.json`);
  
  try {
    // Read existing file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Replace the entire privacy section
    data.privacy = translations;
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Replaced complete privacy section for ${lang}`);
    
  } catch (error) {
    console.error(`✗ Error updating ${lang}:`, error.message);
  }
}

// Replace privacy section for final languages
console.log('Replacing complete privacy translations for final languages...');
Object.keys(finalLanguageTranslations).forEach(lang => {
  replacePrivacySection(lang, finalLanguageTranslations[lang]);
});
console.log('Final privacy translation replacement completed!');
