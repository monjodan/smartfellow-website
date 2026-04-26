module.exports = {
  site: {
    name: 'Smart Fellow',
    baseUrl: 'https://smartfellow.ai',
    ogImage: '/og-image.png'
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
  // Old URL paths kept as redirect-only stubs so search-engine inbound links
  // and any external links survive the rename. The build script writes a tiny
  // HTML redirect file at each, pointing to the canonical clean URL.
  legacyRedirects: [
    { from: '/how-we-work.html', to: '/how-we-work/' },
    { from: '/technology.html', to: '/technology/' }
  ],
  pages: {
    home: {
      path: '/',
      template: 'index.template.html',
      output: 'index.html',
      meta: {
        en: {
          title: 'Smart Fellow — Private AI teams for Korean companies',
          description: 'Private AI built on hardware you own, fine-tuned on your data, kept inside your office. PIPA-compliant by design. Free AI readiness review.',
          ogTitle: 'Smart Fellow — Private AI teams for Korean companies',
          ogDescription: 'Private AI on hardware you own, fine-tuned on your data. PIPA-compliant by design. Tailored, not templated.'
        },
        fr: {
          title: 'Smart Fellow — Équipes IA privées pour la Corée',
          description: "IA privée sur du matériel que vous possédez, affinée sur vos données, hébergée chez vous. Conforme RGPD. Diagnostic IA gratuit.",
          ogTitle: 'Smart Fellow — Équipes IA privées pour la Corée',
          ogDescription: "IA privée sur du matériel que vous possédez, affinée sur vos données. Sur mesure, pas par défaut. Privée, pas publiée."
        },
        ko: {
          title: 'Smart Fellow — 한국 기업을 위한 전용 AI 팀',
          description: '귀사가 소유한 하드웨어 위에서, 귀사의 데이터로 미세 조정된 전용 AI 팀. PIPA 기본 준수. 무료 AI 도입 진단을 시작하세요.',
          ogTitle: 'Smart Fellow — 한국 기업을 위한 전용 AI 팀',
          ogDescription: '귀사가 소유한 하드웨어 위, 귀사의 데이터로 미세 조정된 전용 AI 팀. 맞춤 설계, 사내 운영, 데이터 주권 보장.'
        }
      }
    },
    'how-we-work': {
      path: '/how-we-work/',
      template: 'how-we-work.template.html',
      output: 'how-we-work/index.html',
      meta: {
        en: {
          title: 'How we work — Smart Fellow',
          description: 'Four phases: free AI readiness review, fixed-scope quote, on-site build with the tools your team already uses, monthly maintenance partnership.',
          ogTitle: 'How Smart Fellow engagements work',
          ogDescription: 'Assess, design, build, maintain. One clear process from the first conversation to the ongoing relationship.'
        },
        fr: {
          title: 'Comment nous travaillons — Smart Fellow',
          description: "Quatre phases : diagnostic IA gratuit, devis à périmètre fixe, déploiement sur site avec vos outils, partenariat mensuel de maintenance.",
          ogTitle: 'Comment Smart Fellow travaille',
          ogDescription: 'Évaluer, concevoir, construire, maintenir. Un processus clair, de la première conversation à la relation continue.'
        },
        ko: {
          title: '진행 방식 — Smart Fellow',
          description: '네 단계: 무료 AI 도입 진단, 고정 범위 견적, 귀사가 이미 쓰는 도구 위에서의 현장 구축, 월간 유지관리 파트너십.',
          ogTitle: 'Smart Fellow 협업 방식',
          ogDescription: '진단, 설계, 구축, 유지. 첫 대화부터 지속적 관계까지 하나의 명확한 프로세스입니다.'
        }
      }
    },
    technology: {
      path: '/technology/',
      template: 'technology.template.html',
      output: 'technology/index.html',
      meta: {
        en: {
          title: 'Architecture — On-prem private AI — Smart Fellow',
          description: 'How private AI systems built by Smart Fellow work: fine-tuned local models, on-prem hardware, document memory that stays in your office.',
          ogTitle: 'The architecture behind Smart Fellow',
          ogDescription: 'Fine-tuned local models, on-prem hardware, retained business memory, optional cloud — an operating model serious teams can defend.'
        },
        fr: {
          title: "L'architecture — IA privée sur site — Smart Fellow",
          description: "Comment fonctionnent les systèmes IA privés Smart Fellow : modèles locaux affinés, matériel sur site, mémoire documentaire interne au bureau.",
          ogTitle: "L'architecture derrière Smart Fellow",
          ogDescription: "Modèles locaux affinés, matériel sur site, mémoire métier conservée, cloud optionnel — un modèle d'exploitation défendable en interne."
        },
        ko: {
          title: '아키텍처 — 사내 전용 AI — Smart Fellow',
          description: 'Smart Fellow 전용 AI 시스템의 작동 방식: 미세 조정된 로컬 모델, 사내 하드웨어, 사무실을 벗어나지 않는 문서 메모리, 승인 기반 클라우드.',
          ogTitle: 'Smart Fellow를 움직이는 아키텍처',
          ogDescription: '미세 조정된 로컬 모델, 사내 하드웨어, 사내 보존 메모리, 선택적 클라우드 — 내부적으로 납득시킬 수 있는 운영 모델.'
        }
      }
    },
    sovereign: {
      path: '/sovereign/',
      template: 'sovereign.template.html',
      output: 'sovereign/index.html',
      meta: {
        en: {
          title: 'Sovereign — offline AI for confidential work — Smart Fellow',
          description: 'A dedicated air-gapped AI workstation for trade secrets, regulated work, and material that must never leave the building. Hardware you own.',
          ogTitle: 'Sovereign — offline AI for confidential work',
          ogDescription: 'A dedicated AI machine for confidential documents. Local models, encrypted storage, no internet required.'
        },
        fr: {
          title: 'Sovereign — IA hors ligne confidentielle — Smart Fellow',
          description: "Une station IA dédiée et air-gappée pour secrets industriels, dossiers réglementés et documents qui ne doivent jamais quitter le bureau.",
          ogTitle: 'Sovereign — IA hors ligne pour travaux sensibles',
          ogDescription: "Une machine IA dédiée pour documents confidentiels. Modèles locaux, stockage chiffré, aucun internet requis."
        },
        ko: {
          title: 'Sovereign — 기밀 업무용 오프라인 AI — Smart Fellow',
          description: '기밀 워크플로우를 위한 전용 에어갭 AI 워크스테이션. 영업 비밀, 규제 대상 업무, 사무실 밖으로 절대 나가면 안 되는 자료를 위해.',
          ogTitle: 'Sovereign — 기밀 업무용 오프라인 AI',
          ogDescription: '기밀 문서를 위한 전용 AI 머신. 로컬 모델, 암호화 저장, 인터넷 불필요. 반드시 기밀로 남아야 하는 업무를 위해.'
        }
      }
    },
    'use-cases-studio-monjo': {
      path: '/use-cases/studio-monjo/',
      template: 'use-cases-studio-monjo.template.html',
      output: 'use-cases/studio-monjo/index.html',
      meta: {
        en: {
          title: 'Studio Monjo — AI team for a Seoul studio — Smart Fellow',
          description: 'Studio Monjo runs a Seoul studio on one Smart Fellow machine — five AI teammates working in Telegram, Notion, Drive, KakaoMap, and law.go.kr.',
          ogTitle: 'Studio Monjo — AI team for a Seoul studio',
          ogDescription: 'Five named AI teammates running a Seoul studio on one local Smart Fellow machine. Telegram, Notion, Drive, KakaoMap, law.go.kr.'
        },
        fr: {
          title: 'Studio Monjo — équipe IA à Séoul — Smart Fellow',
          description: "Studio Monjo fait tourner un studio de Séoul sur une seule machine Smart Fellow — cinq coéquipiers IA dans Telegram, Notion, Drive, KakaoMap.",
          ogTitle: 'Studio Monjo — équipe IA pour un studio à Séoul',
          ogDescription: "Cinq coéquipiers IA nommés font tourner un studio de Séoul sur une machine locale Smart Fellow."
        },
        ko: {
          title: 'Studio Monjo — 서울 스튜디오의 AI 팀 — Smart Fellow',
          description: 'Studio Monjo는 한 대의 Smart Fellow 머신으로 서울 스튜디오를 운영합니다. Telegram, Notion, Drive, 카카오맵, law.go.kr에서 일하는 5명의 AI 팀원.',
          ogTitle: 'Studio Monjo — 서울 스튜디오의 AI 팀',
          ogDescription: '서울의 한 스튜디오를 5명의 이름 있는 AI 팀원과 한 대의 로컬 Smart Fellow 머신으로 운영하는 방식.'
        }
      }
    },
    assessment: {
      path: '/assessment/',
      template: 'assessment.template.html',
      output: 'assessment/index.html',
      meta: {
        en: {
          title: 'Free AI readiness review — Smart Fellow',
          description: 'Tell us about your workflow. We deliver a written plan and a fixed quote within 48 hours — whether or not you choose to build.',
          ogTitle: 'Free AI readiness review — Smart Fellow',
          ogDescription: 'Workshop, interviews, written report within 48 hours. Free. No commitment. Korean, English, French.'
        },
        fr: {
          title: 'Diagnostic IA gratuit — Smart Fellow',
          description: "Parlez-nous de vos flux. Nous livrons un plan écrit et un devis fixe sous 48 heures — que vous décidiez ou non de construire.",
          ogTitle: 'Diagnostic IA gratuit — Smart Fellow',
          ogDescription: "Atelier, entretiens, rapport écrit sous 48 heures. Gratuit. Sans engagement. Coréen, anglais, français."
        },
        ko: {
          title: '무료 AI 도입 진단 — Smart Fellow',
          description: '워크플로우를 알려주세요. 48시간 이내에 서면 계획서와 고정 견적을 드립니다. 구축 여부와 상관없이.',
          ogTitle: '무료 AI 도입 진단 — Smart Fellow',
          ogDescription: '워크숍, 인터뷰, 48시간 이내 서면 보고서. 무료, 약정 없음. 한국어 · 영어 · 프랑스어.'
        }
      }
    }
  }
};
