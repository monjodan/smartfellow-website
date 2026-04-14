/* ════════════════════════════════════════════
   Smart Fellow — i18n (English / Korean)
   ════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── TRANSLATIONS ── */
  const T = {
    en: {
      /* NAV */
      'nav.how':          'How it works',
      'nav.technology':   'The technology',
      'nav.plans':        'Plans',
      'nav.contact':      'Contact',
      'nav.cta':          'Meet your Fellow',
      'nav.lang':         '한국어',
      'nav.lang.current': 'EN',

      /* ── INDEX PAGE ── */

      /* Hero */
      'hero.badge': 'Now available across Korea',
      'hero.h1':    'Hire an AI team member. <em>Not software.</em>',
      'hero.sub':   'A Smart Fellow joins your team like any new hire. They arrive already skilled, never need briefing twice, and work inside the apps your team already uses. They get sharper the longer they stay.',
      'hero.cta':   'Meet your Fellow →',
      'hero.how':   'How it works',
      'hero.note':  'No technical knowledge needed. No IT department required. We handle everything.',

      /* Bubbles */
      'bubble.b1.role': 'Research Analyst',
      'bubble.b2.role': 'Meeting Coordinator',
      'bubble.b3.role': 'Client Relations',
      'bubble.b4.role': 'Operations Assistant',
      'bubble.b5.role': 'Document Specialist',
      'bubble.b6.role': 'Market Researcher',
      'bubble.status':  'Active',

      /* Dark band */
      'dark.eyebrow': 'The idea is simple',
      'dark.h2': 'Think of it as hiring someone. <em>Not buying software.</em>',
      'dark.p':  'You onboard a new colleague. They learn your business, your processes, your way of doing things, and they keep getting better. Unlike software, they don\'t sit in a dashboard waiting to be configured. They work, just like anyone else on your team.',

      /* Story 1 */
      's1.eyebrow': 'Works where you work',
      's1.h2': 'No new app to learn. <em>It comes to you.</em>',
      's1.p1': 'Your Smart Fellow joins the conversations your team is already having in Slack, Telegram, KakaoTalk, or email. You message it the same way you would message any colleague.',
      's1.p2': 'No dashboards. No logins to manage. No training sessions for your staff. It\'s simply there, ready to help.',

      /* Story 2 */
      's2.eyebrow': 'Gets better every week',
      's2.h2': 'It learns your business. <em>Every single day.</em>',
      's2.p1': 'Each conversation makes your Smart Fellow more useful. It remembers your clients\' names, your team\'s preferences, your way of working. It learns what good work looks like in your company.',
      's2.p2': 'After a few weeks, it starts anticipating what you need before you ask. Just like a great employee would.',

      /* Memory items */
      'mem.label':  'What your Fellow has learned',
      'mem.1.text': '<strong>Key client:</strong> Hanwha Systems. Always CC Minjun on proposals.',
      'mem.1.time': 'Learned 3 weeks ago',
      'mem.2.text': '<strong>Tone:</strong> Formal in Korean, relaxed in English',
      'mem.2.time': 'Learned 2 weeks ago',
      'mem.3.text': '<strong>Meeting notes:</strong> Always include action items with owners',
      'mem.3.time': 'Learned last week',
      'mem.4.text': '<strong>Reports:</strong> CEO prefers bullet points, max one page',
      'mem.4.time': 'Learned this week',
      'mem.new':    'New',

      /* Story 3 */
      's3.eyebrow':    'AI sovereignty, by default',
      's3.h2':         'Everything runs <em>inside your office.</em>',
      's3.p1':         'Your Smart Fellow runs on hardware we install on-site. By default, all intelligence stays in your building. Your conversations, documents, and business knowledge never touch an external server.',
      's3.p2':         'Want to optionally connect to a specific AI provider like Claude, GPT, or Naver HyperCLOVA? We add it with one toggle. You decide what is on and what isn\'t, at any time. Your data, your rules.',
      's3.vis.label':  'Where your data lives',
      's3.vis.title':  'Your office',
      's3.vis.sub':    'Local by default. Connect to external AI providers at any time. Your call.',
      's3.vis.pipa':   '✓ PIPA compliant',
      's3.vis.law':    '✓ Korean data law',
      's3.vis.api':    '✓ You control the APIs',

      /* Story 4 */
      's4.eyebrow':       'Connects to your systems',
      's4.h2':            'Ask it anything. <em>It looks it up.</em>',
      's4.p1':            'When you\'re ready, your Smart Fellow can be connected directly to the tools your business runs on: your CRM, inventory system, internal database, Google Drive, calendar.',
      's4.p2':            'You ask a question. It finds the answer. No copy-pasting. No switching tabs. Just work, done. We build all the connections. Your team doesn\'t touch a thing.',
      's4.vis.label':     'Connected to',
      's4.crm.name':      'Your CRM',
      's4.crm.desc':      'Reads and updates',
      's4.drive.name':    'Google Drive',
      's4.drive.desc':    'Reads and writes',
      's4.cal.name':      'Calendar',
      's4.cal.desc':      'Schedules and books',
      's4.internal.name': 'Your internal tools',
      's4.internal.desc': 'Custom connection',
      's4.vis.note':      'All integrations are built and maintained by Smart Fellow. Zero technical work for you.',

      /* Plans */
      'plans.h2':  'Choose your Fellow',
      'plans.sub': 'Every Smart Fellow arrives on day one with pre-trained skills, long-term memory, and the ability to learn from your team. What changes across tiers is seniority: how much they can handle and how deep they go.',

      /* Plan labels (shared) */
      'plan.label.works':    'Works in',
      'plan.label.does':     'What it does',
      'plan.label.proactive':'Proactive tasks',
      'plan.label.tools':    'Tool connections',
      'plan.label.support':  'Support',

      /* Starter */
      'plan.starter.tier':          'Starter',
      'plan.starter.role':          'The Capable Assistant',
      'plan.starter.unit':          '/month',
      'plan.starter.hw':            'Mac Studio 64GB · No setup fee · No IT required',
      'plan.starter.channels':      'Slack, Telegram, KakaoTalk, Teams, Email',
      'plan.starter.f1':            'Drafts documents, emails, and summaries',
      'plan.starter.f2':            'Reads and writes Excel, Word, and PowerPoint files',
      'plan.starter.f3':            'Browses the web to research and summarise',
      'plan.starter.f4':            'Remembers your clients, preferences, and tone',
      'plan.starter.f5':            'Runs locally — your data never leaves',
      'plan.starter.f6':            'Optional external AI (Claude, GPT, Naver)',
      'plan.starter.proactive':     '2 automated daily tasks',
      'plan.starter.proactive.eg':  'e.g. morning briefing, daily report',
      'plan.starter.tools1':        'Google Drive, Calendar, Gmail',
      'plan.starter.tools2':        'Notion, Slack, basic webhook support',
      'plan.starter.support':       'Monthly check-in and tuning session',
      'plan.starter.cta':           'Get started',

      /* Professional */
      'plan.pro.tier':         'Professional',
      'plan.pro.role':         'The Senior Specialist',
      'plan.pro.unit':         '/month',
      'plan.pro.hw':           'Mac Studio 128GB · Faster execution · More at once',
      'plan.pro.badge':        'Most popular',
      'plan.pro.works':        'Everything in Starter',
      'plan.pro.f1':           'Everything in Starter, faster and in parallel',
      'plan.pro.f2':           'Handles complex, multi-step workflows',
      'plan.pro.f3':           'Summarises meetings and drives follow-ups',
      'plan.pro.proactive':    '4 automated daily tasks',
      'plan.pro.proactive.eg': 'e.g. pipeline update, client digest, weekly report, meeting prep',
      'plan.pro.tools1':       'Everything in Starter',
      'plan.pro.tools2':       'Salesforce, HubSpot, Pipedrive',
      'plan.pro.tools3':       'Jira, Linear, Asana',
      'plan.pro.tools4':       'Custom database read access',
      'plan.pro.support1':     'Bi-weekly performance review',
      'plan.pro.support2':     'Priority support',
      'plan.pro.cta':          'Get started',

      /* Enterprise */
      'plan.ent.tier':     'Enterprise',
      'plan.ent.role':     'The Department Lead',
      'plan.ent.hw':       'Hardware specced for your operation',
      'plan.ent.works1':   'Everything in Professional',
      'plan.ent.works2':   'Any platform — we build the connector',
      'plan.ent.f1':       'Multiple Fellows across departments',
      'plan.ent.f2':       'Unlimited automated tasks',
      'plan.ent.f3':       'Reads from cameras, sensors, or any data feed',
      'plan.ent.tools1':   'Everything in Professional',
      'plan.ent.tools2':   'Custom MCP built for your internal systems',
      'plan.ent.tools3':   'ERP, inventory, manufacturing systems',
      'plan.ent.tools4':   'Physical integrations — cameras, sensors, IoT',
      'plan.ent.support1': 'Dedicated account manager',
      'plan.ent.support2': 'Custom SLA',
      'plan.ent.cta':      'Talk to us',

      /* Plans extras */
      'plans.note':         'Hardware is installed and maintained by Smart Fellow at no extra cost. Your Fellow\'s skills, memory, and integrations are always yours. Cancel with 60 days notice.',
      'plans.extra1.title': 'AI sovereignty, by default',
      'plans.extra1.p1':    'Every Fellow runs on hardware in your office. All intelligence stays local. No data reaches an external server unless you choose it.',
      'plans.extra1.p2':    'Want to connect to a specific AI provider (Claude, GPT, or Naver HyperCLOVA X)? We add it with one toggle. You decide what\'s on and what isn\'t, at any time.',
      'plans.extra2.title': 'Custom connectors and unique skills',
      'plans.extra2.p1':    'Every Fellow ships with pre-trained skills out of the box. Need something specific to your industry, ERP, or internal process? We build it.',
      'plans.extra2.p2':    'Custom development is quoted based on scope. Most integrations are live within a week. Talk to us, no obligation.',
      'plans.tech.link':    'Learn more about the technology →',

      /* How it works */
      'how.h2':       'How onboarding works',
      'how.sub':      'From your first call to your Fellow\'s first day on the job, most businesses are up and running within two weeks.',
      'how.s1.title': 'Discovery call',
      'how.s1.p':     'We learn about your team, your tools, and what you want your Fellow to handle first. In Korean or English.',
      'how.s2.title': 'We set everything up',
      'how.s2.p':     'Smart Fellow delivers the hardware, connects it to your network, and trains your Fellow on your business context.',
      'how.s3.title': 'Your team starts chatting',
      'how.s3.p':     'Your Fellow joins your Slack or preferred app. Your team works with it just like any other colleague.',
      'how.s4.title': 'It keeps getting better',
      'how.s4.p':     'We check in regularly, tune performance, and expand capabilities as your team discovers new use cases.',

      /* Quote */
      'quote.text': '"The best colleague you\'ve ever had: one who never forgets, never burns out, and always shows up."',
      'quote.attr': 'The Smart Fellow promise',

      /* CTA */
      'cta.h2':  'Ready to meet<br>your Fellow?',
      'cta.p':   'Book a free 30-minute call directly in our calendar. We will walk through your team\'s needs and see if Smart Fellow is the right fit. No technical knowledge needed, just a conversation.',
      'cta.btn': 'Book a free call →',
      'cta.note':'We work in Korean and English. No commitment required.',

      /* Footer */
      'footer.copy':    '© 2026 Smart Fellow · Seoul, Korea',
      'footer.how':     'How it works',
      'footer.tech':    'The technology',
      'footer.plans':   'Plans',
      'footer.contact': 'Contact',
      'footer.home':    'Home',

      /* Chat animation */
      'chat.user':   'Can you draft a follow-up email for the Hanwha meeting? Warm but professional.',
      'chat.bot':    'Of course. Based on your meeting notes:<br><br><em>"Hi Jisoo, great to align on Monday. We\'ll send the updated proposal by Thursday — I\'ll make sure it reflects the new Q2 targets we discussed."</em><br><br>Want a different tone, or should I also draft the Korean version?',
      'chat.typing': 'Smart Fellow is thinking',
      'chat.label.you':    'You',
      'chat.label.fellow': 'Smart Fellow',

      /* ── TECHNOLOGY PAGE ── */

      /* Tech hero */
      'tech.hero.eyebrow': 'Under the hood',
      'tech.hero.h1':      'Meet the mind behind <em>your Fellow.</em>',
      'tech.hero.p':       'When you hire a person, they bring three things: what they know how to do, the ability to remember and learn, and a consistent way of working. A Smart Fellow is built exactly the same way — deliberately, and on hardware that never leaves your office.',

      /* Skills */
      'tech.skills.eyebrow':   'Layer one',
      'tech.skills.h2':        'Skills — <em>what it already knows.</em>',
      'tech.skills.p1':        'Every Smart Fellow arrives on day one with a library of pre-trained capabilities — things it can do immediately, without any setup from your team. Drafting emails, summarising meetings, doing research, scheduling, following up with clients.',
      'tech.skills.p2':        'Skills can be deepened or extended. When a client needs their Fellow to understand a specific domain — manufacturing specs, legal contract language, medical terminology, financial reporting — we train it directly on that material. It arrives knowing the job. It gets better at your job over time.',
      'tech.skills.vis.label': 'Active skills — your Fellow',
      'tech.skill.0':          'Document drafting',
      'tech.skill.1':          'Email writing',
      'tech.skill.2':          'Meeting summaries',
      'tech.skill.3':          'Client research',
      'tech.skill.4':          'Scheduling',
      'tech.skill.5':          'Data extraction',
      'tech.skill.6':          'Translation',
      'tech.skill.7':          'Report writing',
      'tech.skills.note':      'Skills activate as tasks come in. New skills can be added at any time.',

      /* Memory */
      'tech.mem.eyebrow':      'Layer two',
      'tech.mem.h2':           'Memory — <em>what it learns about you.</em>',
      'tech.mem.p1':           'A Smart Fellow has three kinds of memory, working together. Short-term memory is the current conversation — everything said in this session. Long-term memory is the persistent store of everything learned about your business over time: client names, preferences, tone, processes, who to CC on what.',
      'tech.mem.p2':           'Episodic memory captures specific events — "last Tuesday, Minjun asked to delay the Hanwha proposal" — and uses them to inform future decisions. All three memory stores live on the hardware in your office. They are never uploaded, never synced to a cloud, never shared. The longer your Fellow stays, the richer its understanding of your business becomes.',
      'tech.mem.vis.label':    'Memory architecture',
      'tech.mem.chip.stm':     'Right now: "Draft the Hanwha follow-up"',
      'tech.mem.chip.ltm1':    'Always: CC Minjun on Hanwha proposals',
      'tech.mem.chip.ltm2':    'Always: Formal tone in Korean, casual in English',
      'tech.mem.chip.ep':      'Last Tuesday: CEO asked for shorter reports',
      'tech.mem.leg.stm':      'Short-term',
      'tech.mem.leg.ltm':      'Long-term',
      'tech.mem.leg.ep':       'Episodic',

      /* Character */
      'tech.char.eyebrow':   'Layer three',
      'tech.char.h2':        'Character — <em>how it shows up.</em>',
      'tech.char.p1':        'The third layer is what makes your Fellow feel like a colleague rather than a search engine. We call it character — the consistent values, tone, and working style that define how your Fellow approaches every task.',
      'tech.char.p2':        'During onboarding, we configure your Fellow\'s character to match your company culture. Professional and precise, or warm and conversational? Proactive or responsive? Bilingual with formal Korean defaults, or fully casual? These traits are set deliberately and remain consistent across every interaction, every day.',
      'tech.char.vis.label': 'Character profile — your Fellow',
      'tech.char.t1.label':  'Proactivity',
      'tech.char.t1.val':    'High',
      'tech.char.t2.label':  'Formality',
      'tech.char.t2.val':    'Balanced',
      'tech.char.t3.label':  'Detail level',
      'tech.char.t3.val':    'Thorough',
      'tech.char.t4.label':  'Tone',
      'tech.char.t4.val':    'Warm',
      'tech.char.t5.label':  'Languages',
      'tech.char.t5.val':    'KO + EN',
      'tech.char.note':      'Character is configured during onboarding and can be adjusted at any time.',

      /* Workflow */
      'tech.wf.eyebrow':            'Transparent by design',
      'tech.wf.h2':                 'Your team sees a reply in Slack. <em>Here\'s what happened.</em>',
      'tech.wf.sub':                'From your team\'s perspective, it\'s just a conversation — in the app they already use. Behind that reply, every step runs on hardware in your office. Nothing reaches the internet unless you\'ve chosen it.',
      'tech.wf.perimeter':          'Your office — secure perimeter',
      'tech.wf.input.label':        'Incoming',
      'tech.wf.input.waiting':      'Waiting for a message from your team…',
      'tech.wf.output.label':       'Response sent',
      'tech.wf.output.default':     'Your Fellow\'s response appears here…',
      'tech.wf.output.preparing':   'Preparing response…',
      'tech.wf.node.memory.name':   'Memory lookup',
      'tech.wf.node.memory.desc':   'Retrieves context about this client, task, and history',
      'tech.wf.node.skill.name':    'Skill selection',
      'tech.wf.node.skill.desc':    'Chooses the right capability for this request',
      'tech.wf.node.reason.name':   'Reasoning',
      'tech.wf.node.reason.desc':   'Thinks through the task using the local model',
      'tech.wf.node.tools.name':    'Tool use',
      'tech.wf.node.tools.desc':    'Connects to CRM, calendar, Drive if needed',
      'tech.wf.node.char.name':     'Character filter',
      'tech.wf.node.char.desc':     'Applies your company\'s tone and style',
      'tech.wf.node.store.name':    'Memory write',
      'tech.wf.node.store.desc':    'Stores what was learned from this interaction',
      'tech.wf.secure.1':           '✓ You own the data — always',
      'tech.wf.secure.2':           '✓ On-premise by default — no cloud dependency',
      'tech.wf.secure.3':           '✓ Air-gapped operation available',
      'tech.wf.secure.4':           '✓ PIPA compliant by design',
      'tech.wf.log.delivered':      'Response delivered to Slack.',

      /* Workflow scenarios */
      'tech.wf.s1.input':  'Can you draft the follow-up email for the Hanwha meeting this morning?',
      'tech.wf.s1.output': 'Done. Draft ready in your Slack — warm tone, references the Q2 targets you discussed. Want me to also prepare the Korean version?',
      'tech.wf.s1.log1':   'Retrieving Hanwha client profile and meeting history…',
      'tech.wf.s1.log2':   'Selecting: email drafting skill + client context…',
      'tech.wf.s1.log3':   'Reasoning through the email structure and tone…',
      'tech.wf.s1.log4':   'Applying your company tone: warm, professional, bilingual…',
      'tech.wf.s1.log5':   'Storing: follow-up sent to Hanwha, Q2 targets mentioned…',

      'tech.wf.s2.input':  'What did we agree with Samsung last Thursday? I need a summary before my 3pm call.',
      'tech.wf.s2.output': 'Here\'s your summary: Samsung agreed to a pilot of 3 units by end of Q2. Key contact is Jihoon Park. Action item: send technical specs by Friday — still outstanding.',
      'tech.wf.s2.log1':   'Searching episodic memory for Samsung — last Thursday…',
      'tech.wf.s2.log2':   'Checking calendar and meeting notes for context…',
      'tech.wf.s2.log3':   'Selecting: meeting summarisation + action item extraction…',
      'tech.wf.s2.log4':   'Compiling summary with open action items…',
      'tech.wf.s2.log5':   'Formatting for pre-call briefing — concise, structured…',

      'tech.wf.s3.input':  'Please book a 30-minute intro call with Sojung from LG for next week.',
      'tech.wf.s3.output': 'Done. Scheduled for Tuesday 10am — calendar invite sent to Sojung and added to your calendar. Brief agenda attached based on your LG notes.',
      'tech.wf.s3.log1':   'Retrieving Sojung\'s contact details and LG context…',
      'tech.wf.s3.log2':   'Checking your calendar for availability next week…',
      'tech.wf.s3.log3':   'Selecting: scheduling skill + calendar write access…',
      'tech.wf.s3.log4':   'Selecting optimal slot, drafting invite and agenda…',
      'tech.wf.s3.log5':   'Storing: LG intro call booked, Sojung confirmed…',

      /* Hardware */
      'tech.hw.eyebrow':     'The hardware layer',
      'tech.hw.h2':          'Your hardware. <em>Your data, your terms.</em>',
      'tech.hw.p1':          'The problem with most AI services isn\'t that they use cloud infrastructure — it\'s that the vendor controls the data. Their servers, their terms, their retention policies. For businesses handling sensitive client information or operating under PIPA, that\'s often not a risk worth accepting on trust.',
      'tech.hw.p2':          'Smart Fellow\'s default is a Mac Studio in your office. The model runs there. Your data stays there. You don\'t need an internet connection unless you want one — some clients operate fully air-gapped. Others connect selectively to external AI providers for specific tasks. Either way, the data ownership model is the same: yours, not ours, not a vendor\'s.',
      'tech.hw.p3':          'Apple\'s unified memory architecture also means the model and the data it\'s reasoning over share the same memory pool — no bottleneck, faster inference, and a larger context window than most cloud setups at this price point. The Starter tier\'s 64GB handles a full business-grade model comfortably. The Professional tier\'s 128GB allows parallel tasks and faster execution on complex workflows.',
      'tech.hw.vis.label':   'Data ownership — the real question',
      'tech.hw.sf.title':    'Smart Fellow',
      'tech.hw.sf.items':    'You own the hardware<br>You own the data<br>Air-gapped if you want<br>You decide what leaves',
      'tech.hw.cloud.title': 'Typical cloud AI',
      'tech.hw.cloud.items': 'Vendor owns the servers<br>Vendor sets the terms<br>Retention you can\'t audit<br>Compliance by hope',
      'tech.hw.vis.note':    'Smart Fellow can optionally connect to external AI providers for specific tasks — at your discretion, with controls you set. The data ownership model stays the same.',

      /* Differentiators */
      'tech.diff.eyebrow':  'What\'s genuinely different',
      'tech.diff.h2':       'Not a smarter chatbot. <em>A different category.</em>',
      'tech.diff.lead':     'Modern AI tools are genuinely impressive at general tasks. Smart Fellow isn\'t built to replace them — it\'s built to give your specific business an AI colleague it actually owns: trained on your domain, integrated into your tools, and running privately on hardware in your office.',
      'tech.diff.1.title':  'Skills built for your domain',
      'tech.diff.1.p':      'Your Fellow doesn\'t just respond to prompts — it arrives with pre-trained skills that deepen over time as we train it on your specific industry, processes, and terminology. It gets better at your job, not jobs in general.',
      'tech.diff.2.title':  'You own the data — not a vendor',
      'tech.diff.2.p':      'Your data belongs to you, not to whoever runs the servers. By default, everything runs on hardware in your office with no cloud dependency. Need fully air-gapped operation? Done. Want to connect selectively to an external AI for specific tasks? You control exactly what gets sent, and when. PIPA compliant by design.',
      'tech.diff.3.title':  'Integrated, not bolted on',
      'tech.diff.3.p':      'Your Fellow lives natively in Slack, KakaoTalk, or Teams. We build the connections to your CRM, calendar, and internal tools. No new interface to learn. No context-switching. No tab to open.',
      'tech.diff.4.title':  'One flat monthly cost',
      'tech.diff.4.p':      'No per-message fees. No token costs that scale with usage. One predictable monthly fee, however much your team uses it — so you\'re never penalised for getting value from it.',

      /* Why not ChatGPT */
      'tech.why.eyebrow': 'The honest answer',
      'tech.why.h2':      'Why not just <em>use ChatGPT?</em>',
      'tech.why.lead':    'It\'s the right question. Modern AI tools are genuinely good. Here\'s where the difference actually lies.',
      'tech.why.1.q':     'ChatGPT is excellent and well-priced. Why pay ₩1.5M a month?',
      'tech.why.1.a':     'ChatGPT is great for general tasks and one-off questions. The difference is ownership and depth. Your Smart Fellow is specifically trained on your domain, natively integrated into the tools your team already uses, and runs entirely on hardware you control. It\'s not a general assistant — it\'s a colleague trained for your business.',
      'tech.why.2.q':     'Can\'t I just use a team plan and share access?',
      'tech.why.2.a':     'You can — and some teams do. But shared access to a general model still means switching to a separate interface and using a tool that isn\'t connected to your CRM, calendar, or internal systems. Your Fellow is already integrated, already contextual, and already working in the apps your team uses every day.',
      'tech.why.3.q':     'Isn\'t this just about being anti-cloud?',
      'tech.why.3.a':     'Not at all. The issue isn\'t cloud infrastructure — it\'s data ownership. With most AI services, the vendor controls the servers and sets the terms for what happens to your data. Smart Fellow runs on hardware in your office, so you own the data the same way you own your own files. Some clients run fully air-gapped. Others connect selectively to external AI providers for specific tasks — your call. Either way, no vendor has access to your data without your explicit decision.',
      'tech.why.4.q':     'Is a local model as capable as GPT-4?',
      'tech.why.4.a':     'For broad general knowledge, top cloud models are hard to beat. For your specific business tasks — drafting in your tone, knowing your clients, following your processes — a model fine-tuned on your business performs better than one that knows nothing about you. And Smart Fellow can optionally connect to external models when needed, so you don\'t have to choose.',

      /* Fine tuning */
      'tech.ft.eyebrow': 'Going deeper',
      'tech.ft.h2':      'When we fine-tune — <em>and why.</em>',
      'tech.ft.lead':    'Every Fellow learns from your team through normal use. For businesses with specialised needs, we go further — training the model directly on your domain knowledge so it arrives already expert in your field.',
      'tech.ft.1.title': 'Gather',
      'tech.ft.1.p':     'We collect examples of your work — past emails, reports, decisions, documents — that represent how your business thinks and communicates.',
      'tech.ft.2.title': 'Prepare',
      'tech.ft.2.p':     'The data is cleaned, structured, and formatted into training examples. Sensitive information is handled carefully throughout.',
      'tech.ft.3.title': 'Train',
      'tech.ft.3.p':     'The base model is fine-tuned on your examples. This happens on-site or in a controlled environment — your data never touches a public training pipeline.',
      'tech.ft.4.title': 'Deploy',
      'tech.ft.4.p':     'The fine-tuned model is deployed to your Fellow. From day one it knows your domain, your terminology, and your standard of work.',
      'tech.ft.note':    'Fine-tuning is available on Professional and Enterprise plans, and quoted based on the volume and complexity of training data. Most fine-tuning projects complete within two weeks.',

      /* Tech CTA */
      'tech.cta.h2':  'Seen enough to<br>want a conversation?',
      'tech.cta.p':   'Book a free 30-minute call. We\'ll walk through your team\'s specific needs and show you exactly what a Smart Fellow would look like in your workflow.',
      'tech.cta.btn1':'Book a free call →',
      'tech.cta.btn2':'Back to main site',
    },

    ko: {
      /* NAV */
      'nav.how':          '작동 방식',
      'nav.technology':   '기술 소개',
      'nav.plans':        '요금제',
      'nav.contact':      '문의',
      'nav.cta':          'Fellow 만나기',
      'nav.lang':         'English',
      'nav.lang.current': 'KO',

      /* ── INDEX PAGE ── */

      /* Hero */
      'hero.badge': '이제 한국 전역에서 이용 가능',
      'hero.h1':    'AI 팀원을 채용하세요. <em>소프트웨어가 아니라.</em>',
      'hero.sub':   'Smart Fellow는 신규 입사자처럼 팀에 합류합니다. 이미 필요한 역량을 갖추고 있으며, 같은 내용을 두 번 교육할 필요가 없고, 팀이 이미 사용하는 앱 안에서 바로 일합니다. 함께할수록 더 능숙해집니다.',
      'hero.cta':   'Fellow 만나기 →',
      'hero.how':   '작동 방식',
      'hero.note':  '기술 지식 불필요. IT 부서도 필요 없습니다. 모든 설정은 저희가 처리합니다.',

      /* Bubbles */
      'bubble.b1.role': '리서치 애널리스트',
      'bubble.b2.role': '일정 관리자',
      'bubble.b3.role': '고객 관계',
      'bubble.b4.role': '운영 어시스턴트',
      'bubble.b5.role': '문서 전문가',
      'bubble.b6.role': '시장 조사원',
      'bubble.status':  '활성',

      /* Dark band */
      'dark.eyebrow': '아이디어는 간단합니다',
      'dark.h2': '소프트웨어 구매가 아니라, <em>사람을 고용한다고 생각하세요.</em>',
      'dark.p':  '새로운 동료를 온보딩하는 것입니다. 비즈니스, 프로세스, 일하는 방식을 배우고 계속 발전합니다. 소프트웨어와 달리 대시보드에 앉아 설정을 기다리지 않습니다. 팀의 누구처럼 그냥 일합니다.',

      /* Story 1 */
      's1.eyebrow': '이미 사용하는 곳에서 작동',
      's1.h2': '새로운 앱을 배울 필요 없습니다. <em>Fellow가 찾아옵니다.</em>',
      's1.p1': 'Smart Fellow는 Slack, Telegram, KakaoTalk 또는 이메일에서 팀이 이미 나누는 대화에 참여합니다. 동료에게 메시지를 보내듯 메시지를 보내면 됩니다.',
      's1.p2': '대시보드 없음. 관리할 로그인 없음. 직원 교육 세션 없음. 그냥 거기 있습니다, 도움을 줄 준비가 되어.',

      /* Story 2 */
      's2.eyebrow': '매주 더 나아집니다',
      's2.h2': '비즈니스를 배웁니다. <em>매일 매일.</em>',
      's2.p1': '각 대화를 통해 Smart Fellow는 더 유용해집니다. 고객 이름, 팀의 선호도, 일하는 방식을 기억합니다. 회사에서 좋은 업무가 어떤 것인지 배웁니다.',
      's2.p2': '몇 주 후에는 물어보기 전에 무엇이 필요한지 예측하기 시작합니다. 훌륭한 직원처럼요.',

      /* Memory items */
      'mem.label':  'Fellow가 학습한 내용',
      'mem.1.text': '<strong>핵심 고객:</strong> 한화시스템. 제안서에는 항상 민준 참조.',
      'mem.1.time': '3주 전에 학습',
      'mem.2.text': '<strong>톤:</strong> 한국어 격식체, 영어 편안하게',
      'mem.2.time': '2주 전에 학습',
      'mem.3.text': '<strong>회의록:</strong> 항상 담당자와 함께 액션 아이템 포함',
      'mem.3.time': '지난주 학습',
      'mem.4.text': '<strong>보고서:</strong> CEO는 글머리 기호, 최대 한 페이지 선호',
      'mem.4.time': '이번 주 학습',
      'mem.new':    '새로운',

      /* Story 3 */
      's3.eyebrow':    '기본으로 AI 주권 보장',
      's3.h2':         '모든 것이 <em>사무실 내부</em>에서 실행됩니다.',
      's3.p1':         'Smart Fellow는 현장에 설치한 하드웨어에서 실행됩니다. 기본적으로 모든 인텔리전스는 사무실 내에 있습니다. 대화, 문서, 비즈니스 지식은 외부 서버에 전달되지 않습니다.',
      's3.p2':         'Claude, GPT, 네이버 HyperCLOVA와 같은 특정 AI 제공업체에 선택적으로 연결하고 싶으신가요? 토글 하나로 추가합니다. 언제든지 무엇이 켜지고 꺼지는지 결정하세요. 데이터는 여러분의 것, 규칙도 여러분의 것.',
      's3.vis.label':  '데이터가 있는 곳',
      's3.vis.title':  '사무실',
      's3.vis.sub':    '기본적으로 로컬. 언제든지 외부 AI 제공업체에 연결 가능. 선택은 여러분이.',
      's3.vis.pipa':   '✓ PIPA 준수',
      's3.vis.law':    '✓ 한국 데이터 법규',
      's3.vis.api':    '✓ API 직접 제어',

      /* Story 4 */
      's4.eyebrow':       '시스템에 연결',
      's4.h2':            '무엇이든 물어보세요. <em>직접 찾아드립니다.</em>',
      's4.p1':            '준비가 되면 Smart Fellow를 비즈니스 운영 도구에 직접 연결할 수 있습니다: CRM, 재고 시스템, 내부 데이터베이스, Google Drive, 캘린더.',
      's4.p2':            '질문을 하면 답을 찾습니다. 복사 붙여넣기 없음. 탭 전환 없음. 그냥 완료된 작업. 모든 연결은 저희가 구축합니다. 팀은 아무것도 건드리지 않아도 됩니다.',
      's4.vis.label':     '연결된 도구',
      's4.crm.name':      'CRM',
      's4.crm.desc':      '읽기 및 업데이트',
      's4.drive.name':    'Google Drive',
      's4.drive.desc':    '읽기 및 작성',
      's4.cal.name':      '캘린더',
      's4.cal.desc':      '일정 예약',
      's4.internal.name': '내부 도구',
      's4.internal.desc': '맞춤 연결',
      's4.vis.note':      '모든 통합은 Smart Fellow가 구축하고 유지합니다. 기술적인 작업은 전혀 없습니다.',

      /* Plans */
      'plans.h2':  'Fellow를 선택하세요',
      'plans.sub': '모든 Smart Fellow는 첫날부터 사전 훈련된 기술, 장기 기억, 팀에서 배울 수 있는 능력을 갖추고 도착합니다. 티어 간 차이는 선임도입니다: 얼마나 많이 처리하고 얼마나 깊이 들어가는지.',

      /* Plan labels */
      'plan.label.works':    '작동 채널',
      'plan.label.does':     '주요 기능',
      'plan.label.proactive':'자동화 작업',
      'plan.label.tools':    '도구 연결',
      'plan.label.support':  '지원',

      /* Starter */
      'plan.starter.tier':          '스타터',
      'plan.starter.role':          '유능한 어시스턴트',
      'plan.starter.unit':          '/월',
      'plan.starter.hw':            'Mac Studio 64GB · 설치비 없음 · IT 불필요',
      'plan.starter.channels':      'Slack, Telegram, KakaoTalk, Teams, 이메일',
      'plan.starter.f1':            '문서, 이메일, 요약 작성',
      'plan.starter.f2':            'Excel, Word, PowerPoint 파일 읽기 및 쓰기',
      'plan.starter.f3':            '웹 검색 및 정보 수집',
      'plan.starter.f4':            '고객, 선호도, 톤 기억',
      'plan.starter.f5':            '로컬 실행 — 데이터 외부 전송 없음',
      'plan.starter.f6':            '선택적 외부 AI (Claude, GPT, Naver)',
      'plan.starter.proactive':     '2개의 일일 자동화 작업',
      'plan.starter.proactive.eg':  '예: 아침 브리핑, 일일 보고서',
      'plan.starter.tools1':        'Google Drive, Calendar, Gmail',
      'plan.starter.tools2':        'Notion, Slack, 기본 웹훅 지원',
      'plan.starter.support':       '월별 점검 및 조정 세션',
      'plan.starter.cta':           '시작하기',

      /* Professional */
      'plan.pro.tier':         '프로페셔널',
      'plan.pro.role':         '시니어 전문가',
      'plan.pro.unit':         '/월',
      'plan.pro.hw':           'Mac Studio 128GB · 빠른 실행 · 동시 다중 처리',
      'plan.pro.badge':        '가장 인기',
      'plan.pro.works':        '스타터의 모든 기능',
      'plan.pro.f1':           '모든 기능, 더 빠르고 병렬 처리',
      'plan.pro.f2':           '복잡한 다단계 워크플로우 처리',
      'plan.pro.f3':           '회의 요약 및 후속 조치 진행',
      'plan.pro.proactive':    '4개의 일일 자동화 작업',
      'plan.pro.proactive.eg': '예: 파이프라인 업데이트, 고객 다이제스트, 주간 보고서, 회의 준비',
      'plan.pro.tools1':       '스타터의 모든 기능',
      'plan.pro.tools2':       'Salesforce, HubSpot, Pipedrive',
      'plan.pro.tools3':       'Jira, Linear, Asana',
      'plan.pro.tools4':       '맞춤 데이터베이스 읽기 권한',
      'plan.pro.support1':     '격주 성과 검토',
      'plan.pro.support2':     '우선 지원',
      'plan.pro.cta':          '시작하기',

      /* Enterprise */
      'plan.ent.tier':     '엔터프라이즈',
      'plan.ent.role':     '부서 리더',
      'plan.ent.hw':       '운영에 맞게 사양 결정된 하드웨어',
      'plan.ent.works1':   '프로페셔널의 모든 기능',
      'plan.ent.works2':   '어떤 플랫폼이든 — 저희가 커넥터 구축',
      'plan.ent.f1':       '부서 전반에 걸친 다수의 Fellow',
      'plan.ent.f2':       '무제한 자동화 작업',
      'plan.ent.f3':       '카메라, 센서, 모든 데이터 피드에서 읽기',
      'plan.ent.tools1':   '프로페셔널의 모든 기능',
      'plan.ent.tools2':   '맞춤 MCP 내부 시스템용으로 구축',
      'plan.ent.tools3':   'ERP, 재고, 제조 시스템',
      'plan.ent.tools4':   '물리적 통합 — 카메라, 센서, IoT',
      'plan.ent.support1': '전담 계정 관리자',
      'plan.ent.support2': '맞춤 SLA',
      'plan.ent.cta':      '문의하기',

      /* Plans extras */
      'plans.note':         '하드웨어는 Smart Fellow가 추가 비용 없이 설치 및 유지합니다. Fellow의 기술, 기억, 통합은 항상 여러분의 것입니다. 60일 전 통보로 해지 가능.',
      'plans.extra1.title': '기본 AI 주권 보장',
      'plans.extra1.p1':    '모든 Fellow는 사무실의 하드웨어에서 실행됩니다. 모든 인텔리전스는 로컬에 있습니다. 직접 선택하지 않는 한 외부 서버로 데이터가 전달되지 않습니다.',
      'plans.extra1.p2':    '특정 AI 제공업체(Claude, GPT, 네이버 HyperCLOVA X)에 연결하고 싶으신가요? 토글 하나로 추가합니다. 언제든지 무엇이 켜지고 꺼지는지 결정하세요.',
      'plans.extra2.title': '맞춤 커넥터 및 특수 기술',
      'plans.extra2.p1':    '모든 Fellow는 기본적으로 사전 훈련된 기술을 갖추고 출시됩니다. 업종, ERP, 또는 내부 프로세스에 특화된 기능이 필요하신가요? 저희가 구축합니다.',
      'plans.extra2.p2':    '맞춤 개발은 범위에 따라 견적을 냅니다. 대부분의 통합은 일주일 내에 완성됩니다. 부담 없이 문의하세요.',
      'plans.tech.link':    '기술에 대해 더 알아보기 →',

      /* How it works */
      'how.h2':       '온보딩 방식',
      'how.sub':      '첫 통화부터 Fellow의 첫 출근일까지, 대부분의 기업은 2주 내에 운영을 시작합니다.',
      'how.s1.title': '탐색 통화',
      'how.s1.p':     '팀, 도구, 먼저 Fellow에게 맡길 업무에 대해 알아봅니다. 한국어 또는 영어로.',
      'how.s2.title': '모든 설정 완료',
      'how.s2.p':     'Smart Fellow가 하드웨어를 배달하고, 네트워크에 연결하고, 비즈니스 컨텍스트에 맞게 Fellow를 훈련합니다.',
      'how.s3.title': '팀이 채팅 시작',
      'how.s3.p':     'Fellow가 Slack 또는 선호하는 앱에 참여합니다. 팀은 다른 동료처럼 함께 작업합니다.',
      'how.s4.title': '계속 발전',
      'how.s4.p':     '정기적으로 점검하고, 성능을 조정하며, 팀이 새로운 사용 사례를 발견함에 따라 기능을 확장합니다.',

      /* Quote */
      'quote.text': '"여러분이 만난 최고의 동료: 잊지 않고, 지치지 않으며, 항상 나타나는 사람."',
      'quote.attr': 'Smart Fellow의 약속',

      /* CTA */
      'cta.h2':  '지금 Fellow를<br>만날 준비가 되셨나요?',
      'cta.p':   '캘린더에서 30분 무료 통화를 직접 예약하세요. 팀의 필요 사항을 살펴보고 Smart Fellow가 적합한지 확인합니다. 기술 지식이 필요 없습니다, 대화만 하면 됩니다.',
      'cta.btn': '무료 통화 예약 →',
      'cta.note':'한국어와 영어로 작업합니다. 약정 없음.',

      /* Footer */
      'footer.copy':    '© 2026 Smart Fellow · 서울, 한국',
      'footer.how':     '작동 방식',
      'footer.tech':    '기술 소개',
      'footer.plans':   '요금제',
      'footer.contact': '문의',
      'footer.home':    '홈',

      /* Chat animation */
      'chat.user':   '한화 미팅 후속 이메일을 작성해 줄 수 있나요? 따뜻하지만 전문적으로.',
      'chat.bot':    '물론입니다. 회의록에 따라:<br><br><em>"지수 씨, 월요일에 좋은 논의 감사합니다. 목요일까지 업데이트된 제안서를 보내드리겠습니다 — 논의한 새 Q2 목표를 반영하겠습니다."</em><br><br>다른 톤으로 하시겠어요, 아니면 영어 버전도 작성할까요?',
      'chat.typing': 'Smart Fellow 생각 중',
      'chat.label.you':    '나',
      'chat.label.fellow': 'Smart Fellow',

      /* ── TECHNOLOGY PAGE ── */

      /* Tech hero */
      'tech.hero.eyebrow': '내부 작동 원리',
      'tech.hero.h1':      'Fellow의 <em>두뇌를</em> 만나보세요.',
      'tech.hero.p':       '사람을 고용할 때 세 가지를 가져옵니다: 할 수 있는 것, 기억하고 배우는 능력, 일관된 업무 방식. Smart Fellow는 정확히 같은 방식으로 구축됩니다 — 의도적으로, 그리고 사무실을 떠나지 않는 하드웨어에서.',

      /* Skills */
      'tech.skills.eyebrow':   '첫 번째 레이어',
      'tech.skills.h2':        '기술 — <em>이미 알고 있는 것.</em>',
      'tech.skills.p1':        '모든 Smart Fellow는 첫날부터 사전 훈련된 역량 라이브러리를 갖추고 도착합니다 — 팀의 설정 없이 즉시 할 수 있는 것들. 이메일 작성, 회의 요약, 리서치, 일정 관리, 고객 후속 조치.',
      'tech.skills.p2':        '기술은 심화하거나 확장할 수 있습니다. 특정 도메인(제조 사양, 법률 계약 언어, 의학 용어, 재무 보고)을 이해하는 Fellow가 필요한 고객에게는 해당 자료로 직접 훈련합니다. 일을 알고 도착하고, 시간이 지남에 따라 귀사의 일을 더 잘하게 됩니다.',
      'tech.skills.vis.label': '활성 기술 — 사용 중인 Fellow',
      'tech.skill.0':          '문서 작성',
      'tech.skill.1':          '이메일 작성',
      'tech.skill.2':          '회의 요약',
      'tech.skill.3':          '고객 리서치',
      'tech.skill.4':          '일정 관리',
      'tech.skill.5':          '데이터 추출',
      'tech.skill.6':          '번역',
      'tech.skill.7':          '보고서 작성',
      'tech.skills.note':      '기술은 작업이 들어오면 활성화됩니다. 언제든지 새 기술을 추가할 수 있습니다.',

      /* Memory */
      'tech.mem.eyebrow':      '두 번째 레이어',
      'tech.mem.h2':           '기억 — <em>귀사에 대해 배우는 것.</em>',
      'tech.mem.p1':           'Smart Fellow는 세 가지 종류의 기억을 함께 사용합니다. 단기 기억은 현재 대화입니다 — 이 세션에서 말한 모든 것. 장기 기억은 시간이 지남에 따라 비즈니스에 대해 학습한 모든 것의 영구 저장소입니다: 고객 이름, 선호도, 톤, 프로세스, 무엇에 누구를 참조할지.',
      'tech.mem.p2':           '에피소드 기억은 특정 이벤트를 포착합니다 — "지난 화요일, 민준이 한화 제안 연기를 요청했습니다" — 향후 결정에 활용합니다. 세 가지 기억 저장소 모두 사무실의 하드웨어에 있습니다. 업로드되지 않고, 클라우드에 동기화되지 않으며, 공유되지 않습니다. Fellow가 함께할수록 비즈니스에 대한 이해가 깊어집니다.',
      'tech.mem.vis.label':    '기억 구조',
      'tech.mem.chip.stm':     '지금: "한화 후속 이메일 작성"',
      'tech.mem.chip.ltm1':    '항상: 한화 제안에 민준 참조',
      'tech.mem.chip.ltm2':    '항상: 한국어 격식체, 영어 편안하게',
      'tech.mem.chip.ep':      '지난 화요일: CEO가 더 짧은 보고서 요청',
      'tech.mem.leg.stm':      '단기',
      'tech.mem.leg.ltm':      '장기',
      'tech.mem.leg.ep':       '에피소드',

      /* Character */
      'tech.char.eyebrow':   '세 번째 레이어',
      'tech.char.h2':        '캐릭터 — <em>나타나는 방식.</em>',
      'tech.char.p1':        '세 번째 레이어는 Fellow가 검색 엔진이 아닌 동료처럼 느껴지게 합니다. 우리는 이것을 캐릭터라고 부릅니다 — Fellow가 모든 작업에 접근하는 방식을 정의하는 일관된 가치, 톤, 업무 스타일.',
      'tech.char.p2':        '온보딩 중에 회사 문화에 맞게 Fellow의 캐릭터를 설정합니다. 전문적이고 정확하거나 따뜻하고 대화식? 능동적이거나 반응적? 공식 한국어 기본으로 이중 언어, 또는 완전히 캐주얼? 이러한 특성은 의도적으로 설정되고 매일 모든 상호작용에서 일관되게 유지됩니다.',
      'tech.char.vis.label': '캐릭터 프로필 — 사용 중인 Fellow',
      'tech.char.t1.label':  '능동성',
      'tech.char.t1.val':    '높음',
      'tech.char.t2.label':  '격식도',
      'tech.char.t2.val':    '균형',
      'tech.char.t3.label':  '세부 수준',
      'tech.char.t3.val':    '철저',
      'tech.char.t4.label':  '톤',
      'tech.char.t4.val':    '따뜻',
      'tech.char.t5.label':  '언어',
      'tech.char.t5.val':    '한+영',
      'tech.char.note':      '캐릭터는 온보딩 중에 설정되며 언제든지 조정할 수 있습니다.',

      /* Workflow */
      'tech.wf.eyebrow':            '설계상 투명함',
      'tech.wf.h2':                 '팀은 Slack에서 답장을 봅니다. <em>이런 일이 있었습니다.</em>',
      'tech.wf.sub':                '팀의 관점에서는 이미 사용하는 앱에서 대화일 뿐입니다. 그 답장 뒤에서 모든 단계가 사무실의 하드웨어에서 실행됩니다. 직접 선택하지 않는 한 인터넷에 도달하지 않습니다.',
      'tech.wf.perimeter':          '사무실 — 보안 경계',
      'tech.wf.input.label':        '수신',
      'tech.wf.input.waiting':      '팀의 메시지를 기다리는 중…',
      'tech.wf.output.label':       '전송된 응답',
      'tech.wf.output.default':     'Fellow의 응답이 여기에 표시됩니다…',
      'tech.wf.output.preparing':   '응답 준비 중…',
      'tech.wf.node.memory.name':   '기억 검색',
      'tech.wf.node.memory.desc':   '이 고객, 작업, 기록에 대한 컨텍스트 검색',
      'tech.wf.node.skill.name':    '기술 선택',
      'tech.wf.node.skill.desc':    '이 요청에 맞는 역량 선택',
      'tech.wf.node.reason.name':   '추론',
      'tech.wf.node.reason.desc':   '로컬 모델을 사용해 작업 처리',
      'tech.wf.node.tools.name':    '도구 사용',
      'tech.wf.node.tools.desc':    '필요한 경우 CRM, 캘린더, Drive에 연결',
      'tech.wf.node.char.name':     '캐릭터 필터',
      'tech.wf.node.char.desc':     '회사의 톤과 스타일 적용',
      'tech.wf.node.store.name':    '기억 저장',
      'tech.wf.node.store.desc':    '이 상호작용에서 배운 것 저장',
      'tech.wf.secure.1':           '✓ 항상 데이터 소유권 유지',
      'tech.wf.secure.2':           '✓ 기본 온프레미스 — 클라우드 의존성 없음',
      'tech.wf.secure.3':           '✓ 에어갭 운영 가능',
      'tech.wf.secure.4':           '✓ 설계상 PIPA 준수',
      'tech.wf.log.delivered':      'Slack으로 응답 전달 완료.',

      /* Workflow scenarios */
      'tech.wf.s1.input':  '오늘 아침 한화 미팅 후속 이메일을 작성해 줄 수 있나요?',
      'tech.wf.s1.output': '완료했습니다. Slack에 초안이 준비되었습니다 — 따뜻한 톤으로 논의한 Q2 목표를 참고했습니다. 한국어 버전도 준비할까요?',
      'tech.wf.s1.log1':   '한화 고객 프로필과 미팅 기록 검색 중…',
      'tech.wf.s1.log2':   '이메일 작성 기술 + 고객 컨텍스트 선택 중…',
      'tech.wf.s1.log3':   '이메일 구조와 톤 추론 중…',
      'tech.wf.s1.log4':   '회사 톤 적용: 따뜻하고 전문적으로, 이중 언어…',
      'tech.wf.s1.log5':   '저장 중: 한화에 후속 전송, Q2 목표 언급됨…',

      'tech.wf.s2.input':  '지난 목요일 삼성과 무엇을 합의했나요? 오후 3시 통화 전에 요약이 필요합니다.',
      'tech.wf.s2.output': '요약입니다: 삼성은 Q2 말까지 3개 유닛 파일럿에 동의했습니다. 핵심 담당자는 박지훈입니다. 액션 아이템: 금요일까지 기술 사양 전송 — 아직 미완료.',
      'tech.wf.s2.log1':   '삼성 에피소드 기억 검색 — 지난 목요일…',
      'tech.wf.s2.log2':   '캘린더와 회의록에서 컨텍스트 확인 중…',
      'tech.wf.s2.log3':   '회의 요약 + 액션 아이템 추출 선택 중…',
      'tech.wf.s2.log4':   '열린 액션 아이템으로 요약 작성 중…',
      'tech.wf.s2.log5':   '통화 전 브리핑 형식화 — 간결하고 구조화…',

      'tech.wf.s3.input':  '다음 주 LG의 소정 씨와 30분 소개 통화를 예약해 주세요.',
      'tech.wf.s3.output': '완료했습니다. 화요일 오전 10시로 예약 — 소정 씨에게 일정 초대를 보내고 캘린더에 추가했습니다. LG 메모를 기반으로 간략한 의제를 첨부했습니다.',
      'tech.wf.s3.log1':   '소정 씨 연락처와 LG 컨텍스트 검색 중…',
      'tech.wf.s3.log2':   '다음 주 캘린더 가용성 확인 중…',
      'tech.wf.s3.log3':   '예약 기술 + 캘린더 쓰기 접근 선택 중…',
      'tech.wf.s3.log4':   '최적 시간 선택, 초대 및 의제 작성 중…',
      'tech.wf.s3.log5':   '저장 중: LG 소개 통화 예약, 소정 씨 확인됨…',

      /* Hardware */
      'tech.hw.eyebrow':     '하드웨어 레이어',
      'tech.hw.h2':          '귀사의 하드웨어. <em>귀사의 데이터, 귀사의 조건.</em>',
      'tech.hw.p1':          '대부분의 AI 서비스 문제는 클라우드 인프라를 사용한다는 것이 아닙니다 — 벤더가 데이터를 통제한다는 것입니다. 그들의 서버, 그들의 조건, 그들의 보존 정책. PIPA에 따라 민감한 고객 정보를 처리하거나 운영하는 기업에게 이것은 종종 신뢰로 감수할 위험이 아닙니다.',
      'tech.hw.p2':          'Smart Fellow의 기본값은 사무실의 Mac Studio입니다. 모델이 거기서 실행됩니다. 데이터가 거기에 있습니다. 원하지 않으면 인터넷 연결이 필요 없습니다 — 일부 고객은 완전히 에어갭으로 운영합니다. 다른 고객은 특정 작업을 위해 선택적으로 외부 AI 제공업체에 연결합니다. 어느 쪽이든 데이터 소유권 모델은 동일합니다: 여러분의 것, 우리 것이 아니고, 벤더의 것이 아닙니다.',
      'tech.hw.p3':          'Apple의 통합 메모리 아키텍처는 모델과 추론하는 데이터가 같은 메모리 풀을 공유한다는 것을 의미합니다 — 병목 없음, 빠른 추론, 이 가격대의 대부분의 클라우드 설정보다 큰 컨텍스트 창. 스타터 티어의 64GB는 풀 비즈니스급 모델을 편안하게 처리합니다. 프로페셔널 티어의 128GB는 복잡한 워크플로우에서 병렬 작업과 빠른 실행을 허용합니다.',
      'tech.hw.vis.label':   '데이터 소유권 — 진짜 질문',
      'tech.hw.sf.title':    'Smart Fellow',
      'tech.hw.sf.items':    '귀사가 하드웨어 소유<br>귀사가 데이터 소유<br>원하면 에어갭<br>무엇이 나가는지 결정',
      'tech.hw.cloud.title': '일반 클라우드 AI',
      'tech.hw.cloud.items': '벤더가 서버 소유<br>벤더가 조건 설정<br>감사할 수 없는 보존<br>희망에 의한 규정 준수',
      'tech.hw.vis.note':    'Smart Fellow는 선택적으로 특정 작업을 위해 외부 AI 제공업체에 연결할 수 있습니다 — 귀사의 재량에 따라, 귀사가 설정한 컨트롤로. 데이터 소유권 모델은 동일합니다.',

      /* Differentiators */
      'tech.diff.eyebrow':  '진정으로 다른 점',
      'tech.diff.h2':       '더 스마트한 챗봇이 아닙니다. <em>다른 카테고리입니다.</em>',
      'tech.diff.lead':     '현대 AI 도구는 일반 작업에서 진정으로 인상적입니다. Smart Fellow는 그것들을 대체하기 위해 만들어지지 않았습니다 — 특정 비즈니스에 실제로 소유할 수 있는 AI 동료를 제공하기 위해 만들어졌습니다: 도메인에 맞게 훈련되고, 도구에 통합되며, 사무실의 하드웨어에서 비공개로 실행됩니다.',
      'tech.diff.1.title':  '도메인에 구축된 기술',
      'tech.diff.1.p':      'Fellow는 프롬프트에 응답하는 것만이 아닙니다 — 사전 훈련된 기술로 도착하며 귀사의 업종, 프로세스, 용어에 직접 훈련함에 따라 시간이 지나면서 깊어집니다. 일반적인 직업이 아닌 귀사의 일에 더 능숙해집니다.',
      'tech.diff.2.title':  '벤더가 아닌 귀사가 데이터 소유',
      'tech.diff.2.p':      '데이터는 서버를 운영하는 사람이 아닌 귀사에 속합니다. 기본적으로 모든 것은 클라우드 의존성 없이 사무실 하드웨어에서 실행됩니다. 완전한 에어갭 운영이 필요하신가요? 됩니다. 특정 작업을 위해 선택적으로 외부 AI에 연결하고 싶으신가요? 무엇이 전송되는지, 언제 전송되는지 정확히 제어합니다. 설계상 PIPA 준수.',
      'tech.diff.3.title':  '통합됨, 추가로 붙이지 않음',
      'tech.diff.3.p':      'Fellow는 Slack, KakaoTalk, 또는 Teams에 기본 내장됩니다. CRM, 캘린더, 내부 도구에 연결을 구축합니다. 배울 새로운 인터페이스 없음. 컨텍스트 전환 없음. 열 탭 없음.',
      'tech.diff.4.title':  '월정액 하나',
      'tech.diff.4.p':      '메시지당 요금 없음. 사용량에 따라 증가하는 토큰 비용 없음. 팀이 얼마나 많이 사용하든 예측 가능한 월정액 — 가치를 얻을수록 페널티를 받지 않습니다.',

      /* Why not ChatGPT */
      'tech.why.eyebrow': '솔직한 답변',
      'tech.why.h2':      '왜 그냥 <em>ChatGPT를 쓰지 않나요?</em>',
      'tech.why.lead':    '맞는 질문입니다. 현대 AI 도구는 정말 좋습니다. 차이점이 실제로 있는 곳입니다.',
      'tech.why.1.q':     'ChatGPT는 훌륭하고 저렴합니다. 왜 월 ₩1.5M을 지불하나요?',
      'tech.why.1.a':     'ChatGPT는 일반 작업과 일회성 질문에 훌륭합니다. 차이점은 소유권과 깊이입니다. Smart Fellow는 귀사의 도메인에 맞게 특별히 훈련되고, 팀이 이미 사용하는 도구에 기본 통합되며, 완전히 귀사가 제어하는 하드웨어에서 실행됩니다. 일반 어시스턴트가 아닙니다 — 비즈니스를 위해 훈련된 동료입니다.',
      'tech.why.2.q':     '팀 플랜을 사용하고 접근 권한을 공유할 수 없나요?',
      'tech.why.2.a':     '할 수 있습니다 — 일부 팀은 그렇게 합니다. 하지만 일반 모델에 대한 공유 접근은 여전히 별도 인터페이스로 전환하고 CRM, 캘린더, 또는 내부 시스템에 연결되지 않은 도구를 사용하는 것을 의미합니다. Fellow는 이미 통합되어 있고, 이미 맥락이 있으며, 팀이 매일 사용하는 앱에서 이미 작동합니다.',
      'tech.why.3.q':     '이것은 단지 반클라우드 입장인가요?',
      'tech.why.3.a':     '전혀 아닙니다. 문제는 클라우드 인프라가 아닙니다 — 데이터 소유권입니다. 대부분의 AI 서비스에서 벤더는 서버를 통제하고 데이터에 무슨 일이 일어나는지 조건을 설정합니다. Smart Fellow는 사무실의 하드웨어에서 실행되므로 자신의 파일을 소유하는 것과 같은 방식으로 데이터를 소유합니다. 일부 고객은 완전한 에어갭으로 운영합니다. 다른 고객은 특정 작업을 위해 선택적으로 외부 AI 제공업체에 연결합니다 — 귀사의 선택. 어느 쪽이든 귀사의 명시적인 결정 없이는 어떤 벤더도 데이터에 접근할 수 없습니다.',
      'tech.why.4.q':     '로컬 모델이 GPT-4만큼 능력이 있나요?',
      'tech.why.4.a':     '광범위한 일반 지식에서 최고의 클라우드 모델은 이기기 어렵습니다. 귀사의 특정 비즈니스 작업 — 귀사의 톤으로 작성, 고객 파악, 프로세스 준수 — 에서는 비즈니스에 맞게 미세 조정된 모델이 귀사에 대해 아무것도 모르는 모델보다 더 잘 수행됩니다. Smart Fellow는 필요할 때 선택적으로 외부 모델에 연결할 수 있으므로 선택할 필요가 없습니다.',

      /* Fine tuning */
      'tech.ft.eyebrow': '더 깊이',
      'tech.ft.h2':      '미세 조정 — <em>그리고 그 이유.</em>',
      'tech.ft.lead':    '모든 Fellow는 정상적인 사용을 통해 팀에서 배웁니다. 특화된 필요가 있는 기업을 위해 더 나아갑니다 — 이미 해당 분야에서 전문가로 도착하도록 도메인 지식에 직접 모델을 훈련합니다.',
      'tech.ft.1.title': '수집',
      'tech.ft.1.p':     '업무 예시를 수집합니다 — 과거 이메일, 보고서, 결정, 문서 — 비즈니스가 생각하고 소통하는 방식을 나타내는 것들.',
      'tech.ft.2.title': '준비',
      'tech.ft.2.p':     '데이터를 정리하고 구조화하여 훈련 예시로 형식화합니다. 민감한 정보는 전 과정에서 신중하게 처리됩니다.',
      'tech.ft.3.title': '훈련',
      'tech.ft.3.p':     '기본 모델을 예시로 미세 조정합니다. 현장 또는 통제된 환경에서 수행됩니다 — 데이터는 공개 훈련 파이프라인에 닿지 않습니다.',
      'tech.ft.4.title': '배포',
      'tech.ft.4.p':     '미세 조정된 모델이 Fellow에 배포됩니다. 첫날부터 귀사의 도메인, 용어, 업무 기준을 알고 있습니다.',
      'tech.ft.note':    '미세 조정은 프로페셔널 및 엔터프라이즈 플랜에서 가능하며, 훈련 데이터의 양과 복잡도에 따라 견적을 냅니다. 대부분의 미세 조정 프로젝트는 2주 내에 완료됩니다.',

      /* Tech CTA */
      'tech.cta.h2':  '대화를 원하실 만큼<br>충분히 보셨나요?',
      'tech.cta.p':   '30분 무료 통화를 예약하세요. 팀의 특정 필요 사항을 살펴보고 Smart Fellow가 워크플로우에서 어떤 모습일지 정확히 보여드리겠습니다.',
      'tech.cta.btn1':'무료 통화 예약 →',
      'tech.cta.btn2':'메인 사이트로 →',
    }
  };

  /* ── RUNTIME ── */

  /* Detect and set language immediately (before DOM ready) */
  const _saved  = localStorage.getItem('sf-lang');
  const _browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
  let _lang = _saved || (_browser.startsWith('ko') ? 'ko' : 'en');

  const _callbacks = [];

  function t(key) {
    return (T[_lang] && T[_lang][key] !== undefined)
      ? T[_lang][key]
      : (T['en'][key] !== undefined ? T['en'][key] : key);
  }

  function apply() {
    document.documentElement.lang = _lang;

    /* Text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });

    /* HTML content (headings with <em>, items with <strong>, etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    /* Language toggle button labels */
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = t('nav.lang');
    var mobileBtn2 = document.getElementById('lang-toggle-mobile');
    if (mobileBtn2) mobileBtn2.textContent = t('nav.lang');
    /* Current language indicator */
    document.querySelectorAll('.lang-current').forEach(function (el) {
      el.textContent = t('nav.lang.current');
    });

    /* Page title */
    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = t(titleEl.dataset.i18n);

    /* Notify page scripts */
    _callbacks.forEach(function (cb) { try { cb(_lang); } catch (e) {} });
  }

  function setLang(lang, save) {
    _lang = lang;
    if (save !== false) localStorage.setItem('sf-lang', lang);
    apply();
  }

  function toggle() { setLang(_lang === 'en' ? 'ko' : 'en'); }

  /* Expose API */
  window.SF = window.SF || {};
  window.SF.i18n = {
    t: t,
    setLang: setLang,
    toggle: toggle,
    getLang: function () { return _lang; },
    onLangChange: function (cb) { _callbacks.push(cb); }
  };

  /* Apply on DOM ready */
  document.addEventListener('DOMContentLoaded', function () {
    apply();
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggle);

    /* Also wire up mobile menu toggle button if present */
    var mobileBtn = document.getElementById('lang-toggle-mobile');
    if (mobileBtn) mobileBtn.addEventListener('click', function () {
      toggle();
      /* Close mobile menu */
      var nm = document.getElementById('nav-mobile');
      var nt = document.getElementById('nav-toggle');
      if (nm) nm.classList.remove('open');
      if (nt) { nt.classList.remove('open'); nt.setAttribute('aria-expanded', 'false'); }
      document.body.style.overflow = '';
    });
  });
})();
