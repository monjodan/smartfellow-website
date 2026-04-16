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
      output: 'index.html',
      meta: {
        en: {
          title: 'Smart Fellow — Hire an AI Team Member',
          description: 'Smart Fellow is an AI colleague you hire like a new team member. Already trained, works in Slack, Telegram, KakaoTalk. Browse roles, pick one, they start this week.',
          ogTitle: 'Smart Fellow — Your Next Great Hire Is Already Trained',
          ogDescription: 'An AI colleague trained for your business. Works in Slack, Telegram and KakaoTalk. Browse roles, pick a plan, they start this week.'
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
      output: 'technology.html',
      meta: {
        en: {
          title: 'The Technology — Smart Fellow',
          description: 'How Smart Fellow works: the skills, memory, and character that make your AI colleague genuinely useful — explained without jargon.',
          ogTitle: 'The Technology Behind Smart Fellow',
          ogDescription: 'Explore the skills, memory, character, and hardware architecture behind your Smart Fellow.'
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
    }
  }
};
