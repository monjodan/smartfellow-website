module.exports = {
  site: {
    name: 'Smart Fellow',
    baseUrl: 'https://smartfellow.ai'
  },
  localeOrder: ['en', 'fr', 'ko'],
  languageNames: {
    en: 'English',
    fr: 'Français',
    ko: '한국어'
  },
  localeMeta: {
    en: { lang: 'en', ogLocale: 'en_US' },
    fr: { lang: 'fr', ogLocale: 'fr_FR' },
    ko: { lang: 'ko', ogLocale: 'ko_KR' }
  },
  ui: {
    en: { openMenu: 'Open menu', chooseLanguage: 'Choose language' },
    fr: { openMenu: 'Ouvrir le menu', chooseLanguage: 'Choisir la langue' },
    ko: { openMenu: '메뉴 열기', chooseLanguage: '언어 선택' }
  },
  pages: {
    home: {
      path: '/',
      template: 'index.template.html',
      output: 'index.html',
      meta: {
        en: {
          title: 'Smart Fellow — Managed AI for Sensitive Work',
          description: 'Managed local-first AI for firms that need a serious operating model: Slack-native workflows, business context kept in your environment, and cloud use only when you approve it.',
          ogTitle: 'Smart Fellow — Managed AI for Sensitive Work',
          ogDescription: 'A serious AI colleague for firms that need control over context, deployment, and data boundaries.'
        },
        fr: {
          title: 'Smart Fellow — Recrutez un coéquipier IA',
          description: 'Smart Fellow est un collègue IA que vous recrutez comme un nouveau membre d\'équipe. Déjà formé, il travaille dans Slack, Telegram et KakaoTalk. Parcourez les rôles, choisissez-en un, il commence cette semaine.',
          ogTitle: 'Smart Fellow — Votre prochaine grande recrue est déjà formée',
          ogDescription: 'Un collègue IA formé pour votre entreprise. Il travaille dans Slack, Telegram et KakaoTalk. Parcourez les rôles, choisissez une formule, il commence cette semaine.'
        },
        ko: {
          title: 'Smart Fellow — AI 팀원을 채용하세요',
          description: 'Smart Fellow는 신규 입사자처럼 채용하는 AI 동료입니다. 이미 훈련되어 있고 Slack, Telegram, KakaoTalk에서 바로 일합니다. 포지션을 고르고 이번 주에 시작하세요.',
          ogTitle: 'Smart Fellow — 다음 채용, 이미 훈련이 끝났습니다',
          ogDescription: '귀사에 맞춰 훈련된 AI 동료. Slack, Telegram, KakaoTalk에서 바로 일합니다. 포지션을 보고 플랜을 고르면 이번 주에 시작합니다.'
        }
      }
    },
    technology: {
      path: '/technology.html',
      template: 'technology.template.html',
      output: 'technology.html',
      meta: {
        en: {
          title: 'The Architecture — Smart Fellow',
          description: 'A clearer explanation of how Smart Fellow works: local-first deployment, retained business memory, optional cloud use, and an operating model serious teams can defend internally.',
          ogTitle: 'The Architecture Behind Smart Fellow',
          ogDescription: 'See how Smart Fellow combines managed deployment, local context, and controlled workflow design.'
        },
        fr: {
          title: 'La technologie — Smart Fellow',
          description: 'Comment Smart Fellow fonctionne : les compétences, la mémoire et la personnalité qui rendent votre collègue IA vraiment utile, expliquées sans jargon.',
          ogTitle: 'La technologie derrière Smart Fellow',
          ogDescription: 'Explorez les compétences, la mémoire, la personnalité et l\'architecture matérielle qui donnent vie à votre Smart Fellow.'
        },
        ko: {
          title: '기술 소개 — Smart Fellow',
          description: 'Smart Fellow가 어떻게 작동하는지, AI 동료를 실제로 유용하게 만드는 기술, 기억, 캐릭터를 쉽게 설명합니다.',
          ogTitle: 'Smart Fellow를 움직이는 기술',
          ogDescription: 'Smart Fellow를 구성하는 기술, 기억, 캐릭터, 그리고 하드웨어 아키텍처를 살펴보세요.'
        }
      }
    },
    sovereign: {
      path: '/sovereign/',
      template: 'sovereign.template.html',
      output: 'sovereign/index.html',
      meta: {
        en: {
          title: 'Smart Fellow Sovereign — Offline AI for Controlled Work',
          description: 'An offline-capable AI deployment for legal, diligence, R&D, and other high-sensitivity workflows that require approved inputs, scoped memory, and a clear containment model.',
          ogTitle: 'Smart Fellow Sovereign — Offline AI for Controlled Work',
          ogDescription: 'Use AI in high-sensitivity workflows without treating the cloud as the default place where the work has to go.'
        },
        fr: {
          title: 'Smart Fellow Sovereign — IA hors ligne pour le travail confidentiel',
          description: 'Une machine IA dédiée et hors ligne pour les documents confidentiels, l’analyse interne, la R&D et le travail multilingue. Traitement local, mémoire chiffrée, entrées approuvées uniquement.',
          ogTitle: 'Smart Fellow Sovereign — IA hors ligne pour le travail confidentiel',
          ogDescription: 'Faites entrer l’IA dans les workflows sensibles sans faire sortir le travail confidentiel de votre environnement contrôlé.'
        },
        ko: {
          title: 'Smart Fellow Sovereign — 기밀 업무를 위한 오프라인 AI',
          description: '기밀 문서, 내부 분석, R&D, 다국어 업무를 위한 전용 오프라인 AI 머신. 로컬 처리, 암호화된 메모리, 승인된 입력만 사용합니다.',
          ogTitle: 'Smart Fellow Sovereign — 기밀 업무를 위한 오프라인 AI',
          ogDescription: '기밀 업무를 통제된 환경 밖으로 보내지 않고도 AI를 도입하세요.'
        }
      }
    }
  }
};
