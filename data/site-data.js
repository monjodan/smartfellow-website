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
          title: 'Smart Fellow — A private AI team, built for your company',
          description: 'We build private AI systems for companies that care about their data. Free assessment, fixed-scope build on hardware you own, and ongoing maintenance. PIPA-compliant by design.',
          ogTitle: 'Smart Fellow — A private AI team, built for your company',
          ogDescription: 'We assess your workflows for free, build a private AI team on hardware you own, and maintain it. Tailored, not templated. Private, not published.'
        },
        fr: {
          title: 'Smart Fellow — Une équipe IA privée, construite pour votre entreprise',
          description: 'Nous construisons des systèmes IA privés pour les entreprises qui tiennent à leurs données. Évaluation gratuite, développement à prix fixe sur du matériel que vous possédez, maintenance continue. Conforme RGPD par construction.',
          ogTitle: 'Smart Fellow — Une équipe IA privée, construite pour votre entreprise',
          ogDescription: 'Nous évaluons gratuitement vos flux de travail, construisons une équipe IA privée sur du matériel que vous possédez, et en assurons la maintenance. Sur mesure, pas par défaut. Privé, pas publié.'
        },
        ko: {
          title: 'Smart Fellow — 귀사를 위한 전용 AI 팀',
          description: '데이터 보호를 중요하게 생각하는 기업을 위해 전용 AI 시스템을 구축합니다. 무료 진단, 고정 견적 기반 구축, 귀사가 소유하는 하드웨어 위에서 운영, 지속적인 유지관리. PIPA를 기본으로 준수합니다.',
          ogTitle: 'Smart Fellow — 귀사를 위한 전용 AI 팀',
          ogDescription: '워크플로우를 무료로 진단하고, 귀사가 소유한 하드웨어 위에 전용 AI 팀을 구축하고, 유지관리까지 책임집니다. 맞춤 설계, 사내 운영, 데이터 주권 보장.'
        }
      }
    },
    'how-we-work': {
      path: '/how-we-work.html',
      template: 'how-we-work.template.html',
      output: 'how-we-work.html',
      meta: {
        en: {
          title: 'How we work — Smart Fellow',
          description: 'Our four-phase engagement: a free AI Readiness Review, a fixed-scope design and quote, an on-site build, and an ongoing monthly maintenance partnership.',
          ogTitle: 'How Smart Fellow engagements work',
          ogDescription: 'Assess, design, build, maintain. One clear process from the first conversation to the ongoing relationship.'
        },
        fr: {
          title: 'Comment nous travaillons — Smart Fellow',
          description: "Notre engagement en quatre phases : un diagnostic IA gratuit, un devis à périmètre fixe, un déploiement sur site, et un partenariat mensuel de maintenance.",
          ogTitle: 'Comment Smart Fellow travaille',
          ogDescription: 'Évaluer, concevoir, construire, maintenir. Un processus clair, de la première conversation à la relation continue.'
        },
        ko: {
          title: '우리의 진행 방식 — Smart Fellow',
          description: '네 단계로 구성된 협업: 무료 AI 도입 진단, 고정 범위 설계 및 견적, 현장 구축, 월간 유지관리 파트너십.',
          ogTitle: 'Smart Fellow 협업 방식',
          ogDescription: '진단, 설계, 구축, 유지. 첫 대화부터 지속적 관계까지 하나의 명확한 프로세스입니다.'
        }
      }
    },
    technology: {
      path: '/technology.html',
      template: 'technology.template.html',
      output: 'technology.html',
      meta: {
        en: {
          title: 'The architecture — Smart Fellow',
          description: 'How the private AI systems we build work: fine-tuned local models, on-prem hardware, document memory that stays inside your office, and cloud use only when you approve it.',
          ogTitle: 'The architecture behind Smart Fellow',
          ogDescription: 'Fine-tuned local models, on-prem hardware, retained business memory, optional cloud use — an operating model serious teams can defend internally.'
        },
        fr: {
          title: 'L’architecture — Smart Fellow',
          description: 'Comment fonctionnent les systèmes IA privés que nous construisons : modèles locaux affinés, matériel sur site, mémoire documentaire qui ne sort pas du bureau, et cloud uniquement si vous l’approuvez.',
          ogTitle: 'L’architecture derrière Smart Fellow',
          ogDescription: 'Modèles locaux affinés, matériel sur site, mémoire métier conservée, cloud optionnel — un modèle d’exploitation défendable en interne.'
        },
        ko: {
          title: '아키텍처 — Smart Fellow',
          description: '우리가 구축하는 전용 AI 시스템의 작동 방식: 미세 조정된 로컬 모델, 사내 하드웨어, 사무실을 벗어나지 않는 문서 메모리, 승인 기반의 선택적 클라우드 사용.',
          ogTitle: 'Smart Fellow를 움직이는 아키텍처',
          ogDescription: '미세 조정된 로컬 모델, 사내 하드웨어, 사내 보존 메모리, 선택적 클라우드 사용 — 내부적으로 납득시킬 수 있는 운영 모델.'
        }
      }
    },
    sovereign: {
      path: '/sovereign/',
      template: 'sovereign.template.html',
      output: 'sovereign/index.html',
      meta: {
        en: {
          title: 'Sovereign — offline AI for high-sensitivity work — Smart Fellow',
          description: 'A dedicated, air-gapped AI workstation for confidential workflows. Runs locally, without internet, on hardware you own. Designed for trade secrets, regulated work, and material that must never leave the building.',
          ogTitle: 'Sovereign — offline AI for high-sensitivity work',
          ogDescription: 'A dedicated AI machine for confidential documents. Local models, encrypted storage, no internet required. For work that must stay confidential.'
        },
        fr: {
          title: 'Sovereign — IA hors ligne pour les travaux très sensibles — Smart Fellow',
          description: "Une station IA dédiée et air-gapped pour les flux confidentiels. Fonctionne en local, sans internet, sur du matériel que vous possédez. Pour les secrets industriels, les dossiers réglementés et les documents qui ne doivent jamais quitter le bureau.",
          ogTitle: 'Sovereign — IA hors ligne pour les travaux très sensibles',
          ogDescription: 'Une machine IA dédiée pour les documents confidentiels. Modèles locaux, stockage chiffré, aucun internet requis. Pour le travail qui doit rester confidentiel.'
        },
        ko: {
          title: 'Sovereign — 고민감 업무를 위한 오프라인 AI — Smart Fellow',
          description: '기밀 워크플로우를 위한 전용 에어갭 AI 워크스테이션. 인터넷 없이 로컬에서, 귀사가 소유한 하드웨어 위에서 작동합니다. 영업 비밀, 규제 대상 업무, 외부로 나가면 안 되는 자료를 위해 설계되었습니다.',
          ogTitle: 'Sovereign — 고민감 업무를 위한 오프라인 AI',
          ogDescription: '기밀 문서를 위한 전용 AI 머신. 로컬 모델, 암호화 저장, 인터넷 불필요. 반드시 기밀로 남아야 하는 업무를 위해.'
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
          description: 'A free, structured review of how a private AI team could help your company. Workshop, interviews, written report delivered within 48 hours, and a fixed quote if it is worth building.',
          ogTitle: 'Free AI readiness review — Smart Fellow',
          ogDescription: 'Tell us about your workflows. If there is a fit, we run a short structured review and deliver a written plan within 48 hours — whether or not you build anything.'
        },
        fr: {
          title: 'Diagnostic IA gratuit — Smart Fellow',
          description: 'Un diagnostic gratuit et structuré pour voir comment une équipe IA privée pourrait aider votre entreprise. Atelier, entretiens, rapport écrit livré sous 48 heures, et devis à prix fixe si le projet a du sens.',
          ogTitle: 'Diagnostic IA gratuit — Smart Fellow',
          ogDescription: "Parlez-nous de vos flux de travail. Si la piste tient, nous menons un diagnostic structuré et livrons un plan écrit sous 48 heures — que vous décidiez ou non de construire."
        },
        ko: {
          title: '무료 AI 도입 진단 — Smart Fellow',
          description: '전용 AI 팀이 귀사에 어떻게 도움이 될 수 있는지 구조적으로 점검해 드리는 무료 진단입니다. 워크숍, 인터뷰, 48시간 이내 서면 보고서, 그리고 필요시 고정 견적.',
          ogTitle: '무료 AI 도입 진단 — Smart Fellow',
          ogDescription: '워크플로우를 알려주세요. 적합하다고 판단되면 짧은 구조적 진단을 진행하고, 48시간 이내에 서면 계획서를 드립니다.'
        }
      }
    }
  }
};
