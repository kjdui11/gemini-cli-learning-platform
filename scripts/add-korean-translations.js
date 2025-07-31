const fs = require('fs');
const path = require('path');

// Korean translations for new pages
const koreanTranslations = {
  about: {
    title: "회사 소개",
    subtitle: "Gemini CLI 학습 플랫폼에 대해",
    mission: {
      title: "우리의 사명",
      description: "개발자들에게 Gemini CLI의 힘을 제공하고 AI 기반 개발의 미래를 만들어가는 것입니다."
    },
    story: {
      title: "우리의 이야기",
      description: "Gemini CLI가 개발자 커뮤니티에 혁명을 일으키는 방법을 발견하세요."
    },
    team: {
      title: "우리 팀",
      description: "Gemini CLI 학습 플랫폼을 지원하는 열정적인 개발자들."
    },
    values: {
      title: "우리의 가치",
      items: [
        {
          title: "오픈 소스",
          description: "투명성과 커뮤니티 주도 개발을 믿습니다."
        },
        {
          title: "혁신",
          description: "AI 기술의 최전선에서 혁신을 계속합니다."
        },
        {
          title: "교육",
          description: "지식 공유와 학습 촉진에 전념합니다."
        }
      ]
    }
  },
  contact: {
    title: "문의하기",
    subtitle: "질문이나 피드백을 보내주세요",
    form: {
      name: "이름",
      email: "이메일 주소",
      subject: "제목",
      message: "메시지",
      submit: "보내기"
    },
    info: {
      title: "연락처 정보",
      email: "이메일",
      response: "24시간 이내에 답변드립니다"
    },
    support: {
      title: "지원",
      description: "기술적 문제나 버그 신고는 GitHub Issues를 이용해 주세요."
    }
  },
  privacy: {
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트",
    sections: [
      {
        title: "정보 수집",
        content: "저희 사이트는 서비스 개선을 위해 최소한의 정보를 수집합니다."
      },
      {
        title: "정보 사용",
        content: "수집된 정보는 서비스 제공 및 개선 목적으로만 사용됩니다."
      },
      {
        title: "정보 보호",
        content: "고객의 개인정보는 적절한 보안 조치로 보호됩니다."
      }
    ]
  },
  terms: {
    title: "이용약관",
    lastUpdated: "최종 업데이트",
    sections: [
      {
        title: "서비스 이용",
        content: "본 서비스는 교육 목적으로 제공되며, 적절한 이용이 요구됩니다."
      },
      {
        title: "지적재산권",
        content: "콘텐츠의 저작권은 당 플랫폼 또는 각 권리자에게 귀속됩니다."
      },
      {
        title: "면책조항",
        content: "서비스 이용으로 인해 발생한 손해에 대해 당사는 책임지지 않습니다."
      }
    ]
  },
  guidesAdvanced: {
    title: "고급 가이드",
    subtitle: "Gemini CLI의 고급 기능을 마스터하세요",
    sections: [
      {
        title: "고급 설정",
        description: "사용자 정의 설정 및 워크플로 최적화"
      },
      {
        title: "자동화",
        description: "작업 자동화 및 스크립트 작성"
      },
      {
        title: "통합",
        description: "다른 도구 및 서비스와의 통합"
      }
    ]
  },
  guidesExamples: {
    title: "실용 예제",
    subtitle: "실제 프로젝트에서 Gemini CLI를 활용하는 방법",
    examples: [
      {
        title: "웹 애플리케이션 개발",
        description: "Gemini CLI를 사용한 모던 웹앱 구축"
      },
      {
        title: "데이터 분석",
        description: "AI를 활용한 데이터 분석 워크플로"
      },
      {
        title: "코드 생성",
        description: "자동 코드 생성 및 리팩토링"
      }
    ]
  }
};

// Read current Korean translations
const koPath = path.join(__dirname, '../src/messages/ko.json');
const koContent = JSON.parse(fs.readFileSync(koPath, 'utf8'));

// Add new translations
Object.assign(koContent, koreanTranslations);

// Write back to file
fs.writeFileSync(koPath, JSON.stringify(koContent, null, 2), 'utf8');

console.log('Korean translations added successfully!');
