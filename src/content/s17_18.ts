import { l, type Session } from "./types";

export const s17: Session = {
  id: 17,
  phase: 4,
  minutes: 65,
  title: l("Incident Response and Digital Forensics Basics", "الاستجابة للحوادث وأساسيات التحقيق الجنائي الرقمي"),
  summary: l(
    "What to do when prevention fails: the incident response lifecycle, roles and severity, containment decisions, evidence handling and the lessons-learned loop.",
    "ماذا نفعل حين تفشل الوقاية: دورة الاستجابة للحوادث، والأدوار والشدة، وقرارات الاحتواء، والتعامل مع الأدلة، وحلقة الدروس المستفادة."
  ),
  objectives: [
    l("Distinguish an event, an incident and a breach.", "التمييز بين الحدث والحادثة والاختراق."),
    l("Describe the phases of the NIST incident response lifecycle in order.", "وصف مراحل دورة الاستجابة للحوادث وفق NIST بالترتيب."),
    l("Make sensible containment decisions and know who to involve.", "اتخاذ قرارات احتواء سليمة ومعرفة من يجب إشراكه."),
    l("Explain evidence handling: order of volatility, chain of custody and hashing.", "شرح التعامل مع الأدلة: ترتيب التطاير وسلسلة الحيازة والتجزئة."),
  ],
  sections: [
    {
      h: l("1. Events, incidents and preparation", "1. الأحداث والحوادث والاستعداد"),
      p: [
        l("An event is any observable occurrence (a login, a blocked packet). An incident is an event, or series of events, that actually or potentially compromises confidentiality, integrity or availability or violates policy. A breach is an incident in which protected data was accessed or disclosed without authorisation – often triggering legal notification duties. Not every alert is an incident; triage separates them.", "الحدث هو أي واقعة ملحوظة (تسجيل دخول، حزمة محجوبة). والحادثة حدث أو سلسلة أحداث تنتهك فعليًا أو احتماليًا السرية أو السلامة أو التوافر أو تخالف السياسة. والاختراق حادثة وصل فيها إلى بيانات محمية أو كُشفت دون تصريح — وغالبًا ما يستوجب التزامات إخطار قانونية. وليس كل تنبيه حادثة؛ والفرز يفصل بينهما."),
        l("Preparation decides how the incident goes. Before anything happens: write an incident response plan and playbooks (ransomware, phishing, lost device, data leak), name an incident commander and team roles (technical lead, communications, legal, HR, executive sponsor), keep an out-of-band contact list (the e-mail may be down), prepare forensic and communication tools, make sure logging and backups work, and run tabletop exercises so people practise before the real crisis.", "يقرر الاستعداد كيف ستجري الحادثة. قبل حدوث أي شيء: اكتب خطة استجابة وأدلة تشغيل (فدية، تصيّد، جهاز مفقود، تسريب بيانات)، وسمِّ قائد الحادثة وأدوار الفريق (القيادة التقنية والاتصال والقانونية والموارد البشرية والراعي التنفيذي)، وأبقِ قائمة اتصال خارج القناة (فقد يكون البريد معطلًا)، وجهّز أدوات التحقيق والاتصال، وتأكد من عمل التسجيل والنسخ الاحتياطي، ونفّذ تمارين طاولة ليتدرب الناس قبل الأزمة الحقيقية."),
      ],
    },
    {
      h: l("2. The NIST incident response lifecycle", "2. دورة الاستجابة للحوادث وفق NIST"),
      p: [l("NIST SP 800-61 describes four phases, often expanded into six steps in practice:", "يصف NIST SP 800-61 أربع مراحل غالبًا ما تُوسَّع عمليًا إلى ست خطوات:")],
      table: {
        head: [l("Phase", "المرحلة"), l("Goal", "الهدف"), l("Typical actions", "إجراءات نموذجية")],
        rows: [
          [l("1 Preparation", "1 الاستعداد"), l("Be ready", "أن نكون جاهزين"), l("Plans, tools, training, contacts, backups", "خطط وأدوات وتدريب وجهات اتصال ونسخ احتياطية")],
          [l("2 Detection & analysis", "2 الكشف والتحليل"), l("Confirm and scope the incident", "تأكيد الحادثة وتحديد نطاقها"), l("Triage alerts, determine severity, what/when/who, start a timeline and case log", "فرز التنبيهات وتحديد الشدة وماذا ومتى ومن وبدء خط زمني وسجل حالة")],
          [l("3a Containment", "3أ الاحتواء"), l("Stop the spread", "إيقاف الانتشار"), l("Isolate hosts, disable accounts, block IPs/domains", "عزل الأجهزة وتعطيل الحسابات وحجب العناوين/النطاقات")],
          [l("3b Eradication", "3ب الاستئصال"), l("Remove the cause", "إزالة السبب"), l("Delete malware, close the entry point, patch, reset credentials", "حذف البرمجية وإغلاق نقطة الدخول والترقيع وإعادة تعيين بيانات الدخول")],
          [l("3c Recovery", "3ج التعافي"), l("Return to normal safely", "العودة للوضع الطبيعي بأمان"), l("Rebuild/restore from clean backups, monitor closely for re-infection", "إعادة بناء/استعادة من نسخ نظيفة ومراقبة لصيقة لإعادة الإصابة")],
          [l("4 Post-incident activity", "4 ما بعد الحادثة"), l("Learn and improve", "التعلم والتحسين"), l("Lessons-learned meeting, report, update plans and controls", "اجتماع الدروس وتقرير وتحديث الخطط والضوابط")],
        ],
      },
      callout: { kind: "key", text: l("Contain before you eradicate, and eradicate before you recover. Restoring systems while the attacker still has access only gives them new machines to control.", "احتوِ قبل أن تستأصل واستأصل قبل أن تتعافى. فاستعادة الأنظمة بينما لا يزال المهاجم يملك الوصول لا تعطيه سوى أجهزة جديدة ليتحكم بها.") },
    },
    {
      h: l("3. Containment decisions, severity and communication", "3. قرارات الاحتواء والشدة والاتصال"),
      p: [
        l("Containment is a trade-off: pulling a server offline stops damage but interrupts the business and may destroy volatile evidence or alert a sophisticated attacker. Short-term containment (network isolation, disabling accounts) buys time; long-term containment (temporary patches, rebuilt segments) keeps operations running while the clean-up is done. Classify severity (for example P1 critical – active data theft or ransomware spreading; P2 high; P3 medium; P4 low) so that response speed and escalation match the impact.", "الاحتواء مفاضلة: فإخراج خادم من الخدمة يوقف الضرر لكنه يقطع الأعمال وقد يتلف أدلة متطايرة أو ينبّه مهاجمًا متمرسًا. والاحتواء قصير الأمد (عزل الشبكة وتعطيل الحسابات) يكسب وقتًا؛ والاحتواء طويل الأمد (رقع مؤقتة وقطاعات أُعيد بناؤها) يبقي العمليات جارية أثناء التنظيف. وصنّف الشدة (مثلًا P1 حرجة – سرقة بيانات نشطة أو فدية تنتشر؛ P2 عالية؛ P3 متوسطة؛ P4 منخفضة) لتتناسب سرعة الاستجابة والتصعيد مع الأثر."),
        l("Communication is part of response: keep an accurate log; speak through designated spokespeople; involve legal counsel early because data-protection laws (such as GDPR – notification to the regulator within 72 hours of becoming aware of a personal-data breach) and contracts may require notification; do not discuss the incident on possibly compromised channels; and be factual, never speculative, with customers and media.", "الاتصال جزء من الاستجابة: أبقِ سجلًا دقيقًا؛ وتحدث عبر متحدثين محددين؛ وأشرك المستشار القانوني مبكرًا لأن قوانين حماية البيانات (مثل GDPR – إخطار الجهة التنظيمية خلال 72 ساعة من العلم بتسريب بيانات شخصية) والعقود قد تتطلب الإخطار؛ ولا تناقش الحادثة عبر قنوات قد تكون مخترقة؛ وكن واقعيًا لا تخمينيًا مع العملاء والإعلام."),
      ],
    },
    {
      h: l("4. Digital forensics basics: evidence handling", "4. أساسيات التحقيق الجنائي الرقمي: التعامل مع الأدلة"),
      p: [
        l("Digital forensics collects and analyses evidence so that conclusions are reliable and, if necessary, admissible in court. Principles: do not work on the original — create a forensic image (bit-for-bit copy) and analyse the copy; record a cryptographic hash (SHA-256) of the original and the copy to prove they are identical and unchanged; document who handled evidence, when, and why (chain of custody); and keep notes of every action taken.", "يجمع التحقيق الجنائي الرقمي الأدلة ويحللها لتكون الاستنتاجات موثوقة ومقبولة قضائيًا عند اللزوم. المبادئ: لا تعمل على الأصل — أنشئ صورة جنائية (نسخة بت ببت) وحلّل النسخة؛ وسجّل تجزئة تشفيرية (SHA-256) للأصل والنسخة لإثبات تطابقهما وعدم تغيّرهما؛ ووثّق من تعامل مع الأدلة ومتى ولماذا (سلسلة الحيازة)؛ وسجّل ملاحظات بكل إجراء اتُّخذ."),
        l("Collect evidence in order of volatility, most fleeting first: CPU registers and cache → memory (RAM: running processes, network connections, encryption keys) → network state → running processes → disk → remote logs and backups → physical configuration and archival media. This is why you usually isolate a suspect machine from the network but do not power it off before memory is captured. Never run tools that modify the evidence, and do not 'clean up' before the investigation is complete.", "اجمع الأدلة بحسب ترتيب التطاير، الأسرع زوالًا أولًا: سجلات المعالج والذاكرة المخبأة ← الذاكرة (RAM: العمليات الجارية والاتصالات الشبكية ومفاتيح التشفير) ← حالة الشبكة ← العمليات الجارية ← القرص ← السجلات البعيدة والنسخ الاحتياطية ← الإعداد المادي ووسائط الأرشفة. ولهذا نعزل الجهاز المشتبه به عادةً عن الشبكة لكن لا نطفئه قبل التقاط الذاكرة. ولا تشغّل أبدًا أدوات تغيّر الدليل ولا «تنظّف» قبل اكتمال التحقيق."),
      ],
    },
  ],
  diagram: {
    kind: "cycle",
    title: l("NIST incident response lifecycle", "دورة الاستجابة للحوادث وفق NIST"),
    caption: l("Lessons learned feed back into preparation, so each incident makes the organisation harder to attack next time.", "تغذي الدروس المستفادة الاستعداد فتجعل كل حادثة المؤسسة أصعب اختراقًا في المرة التالية."),
    nodes: [
      { label: l("Preparation", "الاستعداد"), desc: l("Plans, team, tools, backups, exercises", "خطط وفريق وأدوات ونسخ وتمارين") },
      { label: l("Detection & analysis", "الكشف والتحليل"), desc: l("Confirm, scope, set severity", "تأكيد وتحديد النطاق وضبط الشدة") },
      { label: l("Containment", "الاحتواء"), desc: l("Stop the spread, preserve evidence", "إيقاف الانتشار وحفظ الأدلة") },
      { label: l("Eradication", "الاستئصال"), desc: l("Remove cause, fix entry point", "إزالة السبب وإصلاح نقطة الدخول") },
      { label: l("Recovery", "التعافي"), desc: l("Restore clean, monitor", "استعادة نظيفة ومراقبة") },
      { label: l("Lessons learned", "الدروس المستفادة"), desc: l("Report, improve controls and plans", "تقرير وتحسين الضوابط والخطط") },
    ],
  },
  lab: {
    tool: "order",
    title: l("Lab 17 – Run the first hour of a ransomware incident", "المختبر 17 – إدارة الساعة الأولى من حادثة فدية"),
    scenario: l("At 07:50 several staff report that files on the shared drive have changed extension to '.locked' and a ransom note is on the screen. You are the on-call analyst. Put the response actions in the correct order.", "في الساعة 07:50 يبلّغ عدة موظفين أن ملفات القرص المشترك تغيّر امتدادها إلى «.locked» وأن رسالة فدية تظهر على الشاشة. أنت المحلل المناوب. رتّب إجراءات الاستجابة بالترتيب الصحيح."),
    safety: l("This is a tabletop simulation. In real incidents follow your organisation's plan, involve management and legal counsel, and never contact the attackers or pay a ransom on your own authority.", "هذه محاكاة على الطاولة. في الحوادث الحقيقية اتبع خطة مؤسستك وأشرك الإدارة والمستشار القانوني ولا تتواصل مع المهاجمين ولا تدفع فدية بسلطتك الخاصة."),
    steps: [
      l("Read the six response actions and decide which phase each belongs to.", "اقرأ إجراءات الاستجابة الستة وحدد المرحلة التي ينتمي إليها كل إجراء."),
      l("Click the actions in your chosen order and press Check.", "انقر على الإجراءات بالترتيب الذي اخترته واضغط تحقق."),
      l("Correct any misplaced action and explain in one sentence why order matters (e.g. recovering before containing).", "صحّح أي إجراء في غير موضعه واشرح بجملة لماذا يهم الترتيب (مثل التعافي قبل الاحتواء)."),
      l("List which evidence you would preserve first and why you would not power off the infected machines immediately.", "اذكر الأدلة التي ستحفظها أولًا ولماذا لن تطفئ الأجهزة المصابة فورًا."),
      l("Write the first message to management: what is known, what is not known, current actions, next update time.", "اكتب أول رسالة للإدارة: المعروف وغير المعروف والإجراءات الحالية وموعد التحديث التالي."),
      l("Draft three lessons-learned questions (How did they get in? Why was it not detected earlier? Did backups work?).", "صُغ ثلاثة أسئلة للدروس المستفادة (كيف دخلوا؟ لماذا لم يُكتشف مبكرًا؟ هل عملت النسخ الاحتياطية؟)."),
    ],
    expected: l("Correct order: Prepared plan & team activated → Detect & confirm scope → Contain → Eradicate → Recover from clean backups → Lessons learned, plus a short management message and evidence list.", "الترتيب الصحيح: تفعيل الخطة والفريق المعدّين ← الكشف وتأكيد النطاق ← الاحتواء ← الاستئصال ← التعافي من نسخ نظيفة ← الدروس المستفادة، مع رسالة قصيرة للإدارة وقائمة بالأدلة."),
    order: {
      prompt: l("Put the incident response steps in the correct order", "رتّب خطوات الاستجابة للحوادث بالترتيب الصحيح"),
      items: [
        { text: l("Activate the prepared incident response plan, open a case log and assign roles.", "تفعيل خطة الاستجابة المعدّة وفتح سجل حالة وتوزيع الأدوار."), hint: l("Preparation comes first.", "الاستعداد أولًا.") },
        { text: l("Confirm it is ransomware and identify affected systems, the first infected host and the severity.", "تأكيد أنها فدية وتحديد الأنظمة المتأثرة وأول جهاز مصاب والشدة."), hint: l("Analyse before acting at scale.", "حلّل قبل التصرف على نطاق واسع.") },
        { text: l("Isolate infected machines from the network, disable compromised accounts and protect backups.", "عزل الأجهزة المصابة عن الشبكة وتعطيل الحسابات المخترقة وحماية النسخ الاحتياطية."), hint: l("Contain to stop the spread.", "احتوِ لإيقاف الانتشار.") },
        { text: l("Remove the malware, close the initial entry point (e.g. exposed RDP), patch and reset credentials.", "إزالة البرمجية الخبيثة وإغلاق نقطة الدخول الأولى (مثل RDP مكشوف) والترقيع وإعادة تعيين بيانات الدخول."), hint: l("Eradicate before restoring.", "استأصل قبل الاستعادة.") },
        { text: l("Rebuild systems and restore data from verified clean backups; monitor closely.", "إعادة بناء الأنظمة واستعادة البيانات من نسخ نظيفة موثّقة والمراقبة اللصيقة."), hint: l("Recover only when the attacker is out.", "تعافَ فقط بعد خروج المهاجم.") },
        { text: l("Hold a lessons-learned review, write the report and update the plan and controls.", "عقد مراجعة دروس مستفادة وكتابة التقرير وتحديث الخطة والضوابط."), hint: l("Learn last, feed back to preparation.", "التعلّم أخيرًا وتغذية الاستعداد.") },
      ],
    },
  },
  quiz: [
    { q: l("Which is the correct order of response phases?", "ما الترتيب الصحيح لمراحل الاستجابة؟"), options: [l("Recovery → Containment → Detection", "التعافي ← الاحتواء ← الكشف"), l("Preparation → Detection & analysis → Containment/Eradication/Recovery → Post-incident", "الاستعداد ← الكشف والتحليل ← الاحتواء/الاستئصال/التعافي ← ما بعد الحادثة"), l("Eradication → Preparation → Detection", "الاستئصال ← الاستعداد ← الكشف"), l("Lessons learned → Preparation → Recovery", "الدروس ← الاستعداد ← التعافي")], answer: 1, why: l("This follows NIST SP 800-61.", "يتبع ذلك NIST SP 800-61.") },
    { q: l("Why create a forensic image instead of examining the original disk?", "لماذا ننشئ صورة جنائية بدل فحص القرص الأصلي؟"), options: [l("To preserve the original evidence unchanged", "للحفاظ على الدليل الأصلي دون تغيير"), l("To save disk space", "لتوفير مساحة القرص"), l("To speed up the computer", "لتسريع الحاسوب"), l("It is not important", "ليس مهمًا")], answer: 0, why: l("Working on a copy with matching hashes keeps the original admissible and unaltered.", "العمل على نسخة بتجزئات متطابقة يُبقي الأصل سليمًا ومقبولًا.") },
    { q: l("What does 'chain of custody' document?", "ماذا توثّق «سلسلة الحيازة»؟"), options: [l("Who handled the evidence, when and why", "من تعامل مع الدليل ومتى ولماذا"), l("The firewall rules", "قواعد الجدار الناري"), l("Employee salaries", "رواتب الموظفين"), l("The network topology", "طوبولوجيا الشبكة")], answer: 0, why: l("It proves the evidence was not tampered with.", "تثبت أن الدليل لم يُعبث به.") },
    { q: l("Which is MOST volatile and should be captured first?", "أي مما يلي هو الأكثر تطايرًا ويُلتقط أولًا؟"), options: [l("Hard disk", "القرص الصلب"), l("Memory (RAM) contents", "محتويات الذاكرة (RAM)"), l("Printed reports", "التقارير المطبوعة"), l("Backup tapes", "أشرطة النسخ الاحتياطي")], answer: 1, why: l("RAM is lost at power-off and holds processes, connections and keys.", "تضيع الذاكرة عند الإطفاء وتحتوي العمليات والاتصالات والمفاتيح.") },
    { q: l("Containment should come…", "ينبغي أن يأتي الاحتواء…"), options: [l("After full recovery", "بعد التعافي الكامل"), l("Before eradication and recovery", "قبل الاستئصال والتعافي"), l("Never", "أبدًا"), l("After the press release", "بعد البيان الصحفي")], answer: 1, why: l("Stop the spread first; otherwise cleanup and restore are undone.", "أوقف الانتشار أولًا وإلا ضاع التنظيف والاستعادة.") },
    { q: l("Under GDPR, a personal-data breach must generally be reported to the regulator within…", "وفق GDPR يجب الإبلاغ عن تسريب البيانات الشخصية إلى الجهة التنظيمية عمومًا خلال…"), options: [l("72 hours of becoming aware", "72 ساعة من العلم به"), l("1 year", "سنة"), l("7 days after the audit", "7 أيام بعد التدقيق"), l("Never", "أبدًا")], answer: 0, why: l("Article 33 sets a 72-hour notification window where feasible.", "تحدد المادة 33 نافذة إخطار مدتها 72 ساعة حيثما أمكن.") },
    { q: l("The main purpose of a lessons-learned review is…", "الغرض الرئيسي من مراجعة الدروس المستفادة هو…"), options: [l("To assign blame", "تحديد اللوم"), l("To improve plans, controls and detection", "تحسين الخطط والضوابط والكشف"), l("To delete logs", "حذف السجلات"), l("To skip documentation", "تجاوز التوثيق")], answer: 1, why: l("Blameless review turns incidents into improvements.", "تحوّل المراجعة بلا لوم الحوادث إلى تحسينات.") },
  ],
  homework: {
    title: l("Homework 17 – Write a one-page incident playbook", "الواجب 17 – اكتب دليل حادثة من صفحة واحدة"),
    tasks: [
      l("Choose one scenario: lost laptop, phishing click, or compromised social-media account.", "اختر سيناريو واحدًا: حاسوب مفقود أو نقرة تصيّد أو حساب تواصل اجتماعي مخترق."),
      l("Write the playbook steps for each NIST phase with specific actions and owners.", "اكتب خطوات الدليل لكل مرحلة من NIST بإجراءات محددة ومالكين."),
      l("Add an escalation table (who to call, when, how) and a communication template.", "أضف جدول تصعيد (من نتصل به ومتى وكيف) وقالب اتصال."),
      l("Run a 15-minute tabletop with a friend or colleague and record what was unclear.", "نفّذ تمرين طاولة لمدة 15 دقيقة مع صديق أو زميل وسجّل ما لم يكن واضحًا."),
    ],
    deliverable: l("The playbook, the escalation table and a short note on improvements found during the tabletop.", "الدليل وجدول التصعيد وملاحظة قصيرة عن التحسينات التي ظهرت أثناء التمرين."),
  },
  refs: [
    { title: "Computer Security Incident Handling Guide (SP 800-61 Rev.2)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
    { title: "Incident response plan basics", org: "CISA", url: "https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf" },
    { title: "Incident management guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/incident-management" },
    { title: "Guide to Integrating Forensic Techniques into Incident Response (SP 800-86)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/86/final" },
  ],
  terms: [
    { term: l("Incident", "الحادثة"), def: l("An event that compromises or threatens security, or violates policy.", "حدث يهدد الأمن أو ينتهكه أو يخالف السياسة.") },
    { term: l("Breach", "الاختراق / التسريب"), def: l("An incident where protected data is accessed or disclosed without authorisation.", "حادثة يُطّلع فيها على بيانات محمية أو تُكشف دون تصريح.") },
    { term: l("Playbook", "دليل التشغيل"), def: l("A documented set of steps for handling a specific incident type.", "مجموعة خطوات موثقة للتعامل مع نوع محدد من الحوادث.") },
    { term: l("Containment", "الاحتواء"), def: l("Actions that stop an incident from spreading or causing more damage.", "إجراءات توقف انتشار الحادثة أو زيادة ضررها.") },
    { term: l("Chain of custody", "سلسلة الحيازة"), def: l("Documented trail of who handled evidence and when.", "سجل موثق لمن تعامل مع الدليل ومتى.") },
    { term: l("Order of volatility", "ترتيب التطاير"), def: l("Collecting the most short-lived evidence first.", "جمع الأدلة الأسرع زوالًا أولًا.") },
    { term: l("Tabletop exercise", "تمرين الطاولة"), def: l("A discussion-based simulation of an incident to test plans.", "محاكاة قائمة على النقاش لحادثة لاختبار الخطط.") },
  ],
};

export const s19: Session = {
  id: 19,
  phase: 5,
  minutes: 60,
  title: l("Cloud, Mobile and IoT Security Basics", "أساسيات أمن السحابة والجوال وإنترنت الأشياء"),
  summary: l(
    "Securing modern environments: the shared responsibility model, common cloud misconfigurations, mobile and BYOD controls and the weak spots of IoT devices.",
    "تأمين البيئات الحديثة: نموذج المسؤولية المشتركة، وأخطاء الإعداد الشائعة في السحابة، وضوابط الجوال وBYOD، ونقاط ضعف أجهزة إنترنت الأشياء."
  ),
  objectives: [
    l("Explain IaaS, PaaS and SaaS and the shared responsibility model.", "شرح IaaS وPaaS وSaaS ونموذج المسؤولية المشتركة."),
    l("List the most common cloud security failures and their fixes.", "سرد أكثر إخفاقات أمن السحابة شيوعًا وإصلاحاتها."),
    l("Apply mobile device and BYOD security controls.", "تطبيق ضوابط أمن الأجهزة المحمولة وBYOD."),
    l("Identify IoT risks and secure a smart device or network.", "تحديد مخاطر إنترنت الأشياء وتأمين جهاز أو شبكة ذكية."),
  ],
  sections: [
    {
      h: l("1. Cloud service models and shared responsibility", "1. نماذج الخدمة السحابية والمسؤولية المشتركة"),
      p: [
        l("Cloud computing rents IT resources over the Internet. In Infrastructure as a Service (IaaS, e.g. virtual machines) the provider runs the data centre, hardware and virtualisation while the customer manages the operating system, applications, network rules, identities and data. In Platform as a Service (PaaS) the provider also manages the operating system and runtime; the customer manages the application and data. In Software as a Service (SaaS, e.g. webmail, CRM) the provider runs everything except the customer's data, user accounts, access settings and how the service is used.", "تؤجّر الحوسبة السحابية موارد تقنية المعلومات عبر الإنترنت. في البنية التحتية كخدمة (IaaS مثل الأجهزة الافتراضية) يشغّل المزوّد مركز البيانات والعتاد والمحاكاة الافتراضية بينما يدير العميل نظام التشغيل والتطبيقات وقواعد الشبكة والهويات والبيانات. وفي المنصة كخدمة (PaaS) يدير المزوّد نظام التشغيل وبيئة التشغيل أيضًا؛ ويدير العميل التطبيق والبيانات. وفي البرمجيات كخدمة (SaaS مثل البريد وإدارة العملاء) يشغّل المزوّد كل شيء عدا بيانات العميل وحسابات المستخدمين وإعدادات الوصول وطريقة استخدام الخدمة."),
        l("This is the shared responsibility model: the provider secures the cloud itself; the customer is always responsible for security in the cloud — at minimum their data, identities and configuration. Moving to the cloud does not outsource accountability.", "هذا هو نموذج المسؤولية المشتركة: يؤمّن المزوّد السحابة نفسها؛ ويظل العميل مسؤولًا دائمًا عن الأمن داخل السحابة — على الأقل بياناته وهوياته وإعداداته. والانتقال إلى السحابة لا يُسند المساءلة للخارج."),
      ],
      table: {
        head: [l("Layer", "الطبقة"), l("IaaS", "IaaS"), l("PaaS", "PaaS"), l("SaaS", "SaaS")],
        rows: [
          [l("Data, users, access settings", "البيانات والمستخدمون وإعدادات الوصول"), l("Customer", "العميل"), l("Customer", "العميل"), l("Customer", "العميل")],
          [l("Application", "التطبيق"), l("Customer", "العميل"), l("Customer", "العميل"), l("Provider", "المزوّد")],
          [l("Operating system / runtime", "نظام التشغيل / بيئة التشغيل"), l("Customer", "العميل"), l("Provider", "المزوّد"), l("Provider", "المزوّد")],
          [l("Virtualisation, hardware, data centre", "المحاكاة والعتاد ومركز البيانات"), l("Provider", "المزوّد"), l("Provider", "المزوّد"), l("Provider", "المزوّد")],
        ],
      },
    },
    {
      h: l("2. Common cloud security failures", "2. إخفاقات أمن السحابة الشائعة"),
      p: [l("Most cloud breaches are customer-side misconfigurations, not provider hacks:", "معظم اختراقات السحابة أخطاء إعداد من جهة العميل لا اختراقات للمزوّد:")],
      bullets: [
        l("Publicly exposed storage buckets or databases containing sensitive data → default private, block public access, review sharing links.", "حاويات تخزين أو قواعد بيانات مكشوفة علنًا تحوي بيانات حساسة ← خاصة افتراضيًا وحجب الوصول العام ومراجعة روابط المشاركة."),
        l("Over-privileged identities and no MFA on admin/root accounts → least privilege, MFA, separate admin accounts, no root for daily use.", "هويات مفرطة الصلاحية وبلا MFA لحسابات المدير/الجذر ← أقل صلاحية وMFA وحسابات إدارة منفصلة وعدم استخدام الجذر يوميًا."),
        l("Access keys and secrets committed to code repositories or left in chat → secrets manager, short-lived credentials, automated secret scanning, immediate rotation after exposure.", "مفاتيح وصول وأسرار تُرفع إلى مستودعات الشيفرة أو تُترك في المحادثات ← مدير أسرار وبيانات دخول قصيرة العمر وفحص أسرار آلي وتدوير فوري بعد الانكشاف."),
        l("Open management ports (SSH/RDP) and permissive security groups → restrict by source IP, use VPN or bastion/identity-aware access.", "منافذ إدارة مفتوحة (SSH/RDP) ومجموعات أمان متساهلة ← تقييد بحسب IP المصدر واستخدام VPN أو وصول مبني على الهوية."),
        l("No logging or monitoring of API calls → enable audit logging (e.g. CloudTrail-style), alert on suspicious admin actions.", "غياب تسجيل ومراقبة استدعاءات API ← تفعيل تسجيل التدقيق والتنبيه على إجراءات المدير المشبوهة."),
        l("Unencrypted data and no backups → encrypt at rest and in transit, manage keys, keep tested backups in a separate account.", "بيانات غير مشفّرة وبلا نسخ احتياطية ← تشفير في السكون وأثناء النقل وإدارة المفاتيح ونسخ مختبرة في حساب منفصل."),
      ],
      callout: { kind: "tip", text: l("Cloud Security Posture Management (CSPM) tools continuously compare your configuration with best-practice baselines and alert on drift. Infrastructure-as-code lets you review and test configuration before deploying it.", "تقارن أدوات إدارة وضع أمن السحابة (CSPM) إعداداتك بخطوط الأساس الجيدة باستمرار وتنبّه عند الانحراف. ويتيح تعريف البنية كشيفرة مراجعة الإعدادات واختبارها قبل نشرها.") },
    },
    {
      h: l("3. Mobile devices and BYOD", "3. الأجهزة المحمولة وBYOD"),
      p: [
        l("Phones and tablets hold e-mail, authentication apps, photos and banking, and they are easily lost. Baseline controls: a strong passcode with biometrics, automatic screen lock, device encryption (enabled by default on modern devices), automatic OS and app updates, apps only from official stores with minimal permissions (does a torch app need your contacts?), remote locate/lock/wipe, and avoiding jailbreaking/rooting. Be careful with public Wi-Fi and unknown charging cables or ports; use a VPN where appropriate and never accept unexpected MFA prompts.", "تحمل الهواتف والأجهزة اللوحية البريد وتطبيقات المصادقة والصور والمعاملات المصرفية ويسهل فقدانها. ضوابط أساسية: رمز مرور قوي مع القياسات الحيوية وقفل شاشة تلقائي وتشفير الجهاز (مفعّل افتراضيًا في الأجهزة الحديثة) وتحديثات نظام وتطبيقات تلقائية وتطبيقات من المتاجر الرسمية فقط بأقل أذونات (هل يحتاج تطبيق مصباح إلى جهات اتصالك؟) وتحديد الموقع/القفل/المسح عن بُعد وتجنب كسر الحماية (jailbreak/root). وكن حذرًا مع الواي فاي العام وكابلات ومنافذ الشحن المجهولة؛ واستخدم VPN عند اللزوم ولا تقبل أبدًا طلبات MFA غير المتوقعة."),
        l("Organisations use Mobile Device Management (MDM) or Mobile Application Management (MAM) to enforce these settings, separate work from personal data (work profile / containers) and wipe only corporate data when a device is lost. Bring Your Own Device (BYOD) needs a clear policy: what is allowed, what the company may monitor, what is wiped on departure, and minimum security requirements for access.", "وتستخدم المؤسسات إدارة الأجهزة المحمولة (MDM) أو إدارة تطبيقاتها (MAM) لفرض هذه الإعدادات وفصل بيانات العمل عن الشخصية (ملف العمل/الحاويات) ومسح بيانات الشركة فقط عند فقدان الجهاز. ويحتاج إحضار جهازك الخاص (BYOD) إلى سياسة واضحة: ما المسموح وما الذي يحق للشركة مراقبته وما الذي يُمسح عند المغادرة وأدنى متطلبات الأمن للوصول."),
      ],
    },
    {
      h: l("4. Internet of Things (IoT) security", "4. أمن إنترنت الأشياء (IoT)"),
      p: [
        l("IoT devices — cameras, smart speakers, thermostats, printers, medical and industrial sensors — are often built cheaply with little security: default or hard-coded passwords, unpatched firmware that is never updated, unnecessary open services, unencrypted communication and no support after a few years. Botnets such as Mirai were built from tens of thousands of exposed cameras and routers. Because the owner cannot install security software on them, protection must come from the network and from careful buying and configuration.", "أجهزة إنترنت الأشياء — الكاميرات والمكبرات الذكية والمنظمات الحرارية والطابعات والمستشعرات الطبية والصناعية — تُبنى غالبًا بتكلفة منخفضة وأمن ضئيل: كلمات مرور افتراضية أو مضمنة وبرمجية ثابتة غير محدّثة وخدمات مفتوحة غير لازمة واتصال غير مشفّر وانعدام الدعم بعد سنوات قليلة. وقد بُنيت شبكات بوت مثل Mirai من عشرات آلاف الكاميرات والموجهات المكشوفة. ولأن المالك لا يستطيع تثبيت برمجيات أمن عليها فيجب أن تأتي الحماية من الشبكة ومن الشراء والإعداد بعناية."),
        l("Good practice: change default passwords immediately; update firmware and enable auto-update; disable remote access, UPnP and unused features; put IoT on a separate VLAN/guest network with no access to computers and file shares; buy from vendors that publish security support periods; and retire devices that no longer get updates. In industrial settings (OT/ICS) availability and safety come first, so changes are made carefully with strict network segmentation from the corporate network.", "الممارسة الجيدة: غيّر كلمات المرور الافتراضية فورًا؛ وحدّث البرمجية الثابتة وفعّل التحديث التلقائي؛ وعطّل الوصول عن بُعد وUPnP والميزات غير المستخدمة؛ وضع إنترنت الأشياء في VLAN/شبكة ضيوف منفصلة دون وصول للحواسيب ومشاركات الملفات؛ واشترِ من موردين ينشرون فترات دعم أمني؛ وأحِل إلى التقاعد الأجهزة التي لم تعد تتلقى تحديثات. وفي البيئات الصناعية (OT/ICS) تأتي التوافرية والسلامة أولًا لذا تُجرى التغييرات بحذر مع تقسيم صارم عن شبكة الشركة."),
      ],
    },
  ],
  diagram: {
    kind: "grid",
    title: l("Who secures what? Shared responsibility by service model", "من يؤمّن ماذا؟ المسؤولية المشتركة بحسب نموذج الخدمة"),
    caption: l("The more the provider manages, the fewer layers you secure – but the data, identities and configuration are always yours.", "كلما زاد ما يديره المزوّد قلّت الطبقات التي تؤمّنها — لكن البيانات والهويات والإعدادات لك دائمًا."),
    nodes: [
      { label: l("On-premises", "داخل المؤسسة"), desc: l("You secure everything from the building to the data.", "تؤمّن كل شيء من المبنى إلى البيانات.") },
      { label: l("IaaS", "IaaS"), desc: l("Provider: data centre, hardware, hypervisor. You: OS, apps, network rules, identities, data.", "المزوّد: مركز البيانات والعتاد والمحاكي. أنت: النظام والتطبيقات وقواعد الشبكة والهويات والبيانات.") },
      { label: l("PaaS", "PaaS"), desc: l("Provider adds OS and runtime. You: application code, configuration, identities, data.", "يضيف المزوّد النظام وبيئة التشغيل. أنت: شيفرة التطبيق والإعدادات والهويات والبيانات.") },
      { label: l("SaaS", "SaaS"), desc: l("Provider runs the application. You: users, access settings, MFA, data and how it is shared.", "يشغّل المزوّد التطبيق. أنت: المستخدمون وإعدادات الوصول وMFA والبيانات وطريقة مشاركتها.") },
      { label: l("Mobile / BYOD", "الجوال / BYOD"), desc: l("Device owner and organisation share: passcode, updates, MDM, wipe.", "يتشارك المالك والمؤسسة: رمز المرور والتحديثات وMDM والمسح.") },
      { label: l("IoT", "إنترنت الأشياء"), desc: l("Owner: passwords, updates, segmentation. Vendor: secure design and support.", "المالك: كلمات المرور والتحديثات والتقسيم. المورّد: التصميم الآمن والدعم.") },
    ],
  },
  lab: {
    tool: "match",
    title: l("Lab 18 – Who is responsible? Shared responsibility drill", "المختبر 18 – من المسؤول؟ تمرين المسؤولية المشتركة"),
    scenario: l("Your company is moving a web shop to the cloud, using IaaS virtual machines, a SaaS e-mail suite and a cloud storage bucket. For each security task decide whether the cloud provider, the customer, or both are responsible.", "تنقل شركتك متجر ويب إلى السحابة باستخدام أجهزة IaaS افتراضية وحزمة بريد SaaS وحاوية تخزين سحابي. لكل مهمة أمنية قرر هل المسؤول مزوّد السحابة أم العميل أم كلاهما."),
    safety: l("Do not experiment on cloud accounts you do not own, and never put real secrets into screenshots or documents you share. For practice, use free-tier accounts with billing alerts and MFA enabled.", "لا تجرّب على حسابات سحابية لا تملكها ولا تضع أسرارًا حقيقية في لقطات أو وثائق تشاركها. للتدرب استخدم حسابات الطبقة المجانية مع تنبيهات الفوترة وMFA مفعّل."),
    steps: [
      l("Review the shared-responsibility table in the lesson.", "راجع جدول المسؤولية المشتركة في الدرس."),
      l("Choose Provider, Customer or Shared for each of the seven tasks in the tool.", "اختر المزوّد أو العميل أو مشترك لكل مهمة من المهام السبع في الأداة."),
      l("Check your answers and correct the mistakes.", "تحقق من إجاباتك وصحّح الأخطاء."),
      l("Write a five-item cloud security checklist for the web shop (MFA on root, private storage, least-privilege roles, logging on, encrypted backups).", "اكتب قائمة من خمسة بنود لأمن السحابة للمتجر (MFA للجذر وتخزين خاص وأدوار بأقل صلاحية وتسجيل مفعّل ونسخ مشفّرة)."),
      l("For your own phone, go through the mobile baseline: passcode, encryption, updates, app permissions, find-my-device; fix any gap.", "لهاتفك الخاص راجع خط الأساس للجوال: رمز المرور والتشفير والتحديثات وأذونات التطبيقات وتحديد الجهاز؛ وأصلح أي ثغرة."),
      l("List every smart device at home or work and write one hardening action for each.", "اذكر كل جهاز ذكي في المنزل أو العمل واكتب إجراء تحصين واحدًا لكل منها."),
    ],
    expected: l("All seven responsibility assignments are correct, with a cloud checklist, a hardened phone and an IoT device list with actions.", "تكون إسنادات المسؤولية السبعة صحيحة مع قائمة فحص سحابية وهاتف محصّن وقائمة أجهزة ذكية بإجراءاتها."),
    match: {
      prompt: l("Who is responsible for each task in the IaaS / SaaS setup?", "من المسؤول عن كل مهمة في إعداد IaaS / SaaS؟"),
      options: [l("Cloud provider", "مزوّد السحابة"), l("Customer", "العميل"), l("Shared", "مشترك")],
      items: [
        { text: l("Physical security of the data centre buildings and hardware.", "الأمن المادي لمباني مركز البيانات وعتاده."), answer: 0 },
        { text: l("Patching the operating system inside the customer's IaaS virtual machines.", "ترقيع نظام التشغيل داخل الأجهزة الافتراضية للعميل في IaaS."), answer: 1 },
        { text: l("Deciding who may read or share files in the customer's storage bucket.", "تحديد من يحق له قراءة الملفات أو مشاركتها في حاوية تخزين العميل."), answer: 1 },
        { text: l("Keeping the SaaS e-mail application software itself patched and available.", "إبقاء برنامج تطبيق البريد SaaS نفسه محدّثًا ومتاحًا."), answer: 0 },
        { text: l("Turning on and enforcing MFA for the company's own SaaS users.", "تفعيل وفرض MFA لمستخدمي الشركة في SaaS."), answer: 1 },
        { text: l("Overall patch management across the whole IaaS stack (host, hypervisor and guest systems).", "إدارة الترقيع الشاملة عبر كامل مكدس IaaS (المضيف والمحاكي والأنظمة الضيفة)."), answer: 2 },
        { text: l("Classifying the data and deciding which data may be stored in the cloud at all.", "تصنيف البيانات وتحديد أي بيانات يجوز تخزينها في السحابة أصلًا."), answer: 1 },
      ],
    },
  },
  quiz: [
    { q: l("In IaaS, who patches the guest operating system?", "في IaaS من يرقّع نظام التشغيل الضيف؟"), options: [l("The cloud provider", "مزوّد السحابة"), l("The customer", "العميل"), l("The ISP", "مزوّد الإنترنت"), l("No one", "لا أحد")], answer: 1, why: l("In IaaS the customer manages everything above the hypervisor.", "في IaaS يدير العميل كل ما فوق المحاكي.") },
    { q: l("What is the most common cause of cloud data exposure?", "ما أكثر أسباب انكشاف بيانات السحابة شيوعًا؟"), options: [l("Customer misconfiguration such as public storage", "أخطاء إعداد العميل مثل التخزين العام"), l("Cosmic rays", "الأشعة الكونية"), l("Fibre cuts", "قطع الألياف"), l("Provider employees guessing passwords", "تخمين موظفي المزوّد لكلمات المرور")], answer: 0, why: l("Provider-side breaches are rare compared with customer misconfigurations.", "اختراقات جهة المزوّد نادرة مقارنة بأخطاء إعداد العميل.") },
    { q: l("Where should cloud access keys never be stored?", "أين يجب ألا تُخزَّن مفاتيح الوصول السحابية أبدًا؟"), options: [l("In a secrets manager", "في مدير أسرار"), l("In a public code repository", "في مستودع شيفرة عام"), l("In short-lived role credentials", "في بيانات دخول أدوار قصيرة العمر"), l("In a hardware vault", "في خزنة عتادية")], answer: 1, why: l("Exposed keys are scanned for and abused within minutes.", "تُفحص المفاتيح المكشوفة وتُستغل خلال دقائق.") },
    { q: l("Which is a good first step to secure a new smart camera?", "ما الخطوة الأولى الجيدة لتأمين كاميرا ذكية جديدة؟"), options: [l("Keep the default password", "إبقاء كلمة المرور الافتراضية"), l("Change the default password, update firmware and place it on a separate network", "تغيير كلمة المرور الافتراضية وتحديث البرمجية ووضعها على شبكة منفصلة"), l("Expose it to the Internet directly", "تعريضها للإنترنت مباشرة"), l("Disable updates", "تعطيل التحديثات")], answer: 1, why: l("Default credentials and unpatched firmware were the basis of the Mirai botnet.", "كلمات المرور الافتراضية والبرمجية غير المحدّثة كانت أساس شبكة Mirai.") },
    { q: l("MDM helps organisations to…", "تساعد MDM المؤسسات على…"), options: [l("Enforce passcodes, encryption and updates and remotely wipe devices", "فرض رموز المرور والتشفير والتحديثات ومسح الأجهزة عن بُعد"), l("Design logos", "تصميم الشعارات"), l("Replace the firewall", "استبدال الجدار الناري"), l("Increase battery life", "إطالة عمر البطارية")], answer: 0, why: l("Mobile Device Management applies and verifies security policy on phones and tablets.", "تطبّق إدارة الأجهزة المحمولة السياسة الأمنية وتتحقق منها على الهواتف واللوحيات.") },
    { q: l("In SaaS, the customer is still always responsible for…", "في SaaS يظل العميل مسؤولًا دائمًا عن…"), options: [l("The data centre cooling", "تبريد مركز البيانات"), l("Data, user accounts and access settings", "البيانات وحسابات المستخدمين وإعدادات الوصول"), l("The provider's servers", "خوادم المزوّد"), l("The Internet backbone", "عمود الإنترنت الفقري")], answer: 1, why: l("Even the most managed model leaves identity, data and configuration to the customer.", "حتى أكثر النماذج إدارةً تترك الهوية والبيانات والإعدادات للعميل.") },
    { q: l("Why should IoT devices be on a separate network segment?", "لماذا ينبغي وضع أجهزة IoT في قطاع شبكة منفصل؟"), options: [l("To contain compromise so it cannot reach computers and file shares", "لاحتواء الاختراق فلا يصل إلى الحواسيب ومشاركات الملفات"), l("To make them faster", "لجعلها أسرع"), l("Because they cannot use IP", "لأنها لا تستطيع استخدام IP"), l("To avoid power use", "لتجنب استهلاك الطاقة")], answer: 0, why: l("They are hard to patch and monitor, so isolate them.", "يصعب ترقيعها ومراقبتها لذا تُعزل.") },
  ],
  homework: {
    title: l("Homework 18 – Secure a cloud account and a smart device", "الواجب 18 – أمّن حسابًا سحابيًا وجهازًا ذكيًا"),
    tasks: [
      l("Review the sharing settings of your cloud storage (Drive, OneDrive, iCloud, Dropbox): list files shared by public link and remove unneeded shares.", "راجع إعدادات المشاركة في تخزينك السحابي (Drive أو OneDrive أو iCloud أو Dropbox): اذكر الملفات المشاركة برابط عام وأزل غير الضروري."),
      l("Review third-party apps connected to your Google/Microsoft/Apple account and revoke those you do not use.", "راجع التطبيقات الخارجية المرتبطة بحساب Google/Microsoft/Apple وألغِ ما لا تستخدمه."),
      l("Audit your phone's app permissions (location, microphone, camera, contacts) and remove excessive ones.", "دقّق أذونات تطبيقات هاتفك (الموقع والميكروفون والكاميرا وجهات الاتصال) وأزل الزائد."),
      l("Choose one IoT device at home, change its password, update firmware and move it to a guest network if possible.", "اختر جهاز IoT واحدًا في المنزل وغيّر كلمة مروره وحدّث برمجيته وانقله إلى شبكة الضيوف إن أمكن."),
    ],
    deliverable: l("A short report listing what you found, what you changed and which items remain open.", "تقرير قصير يسرد ما وجدته وما غيّرته وما بقي مفتوحًا."),
  },
  refs: [
    { title: "Shared responsibility in the cloud", org: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility" },
    { title: "AWS Shared Responsibility Model", org: "Amazon Web Services", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
    { title: "Cloud security guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/cloud" },
    { title: "Securing the Internet of Things", org: "CISA", url: "https://www.cisa.gov/news-events/news/securing-internet-things" },
    { title: "OWASP Mobile Application Security", org: "OWASP", url: "https://owasp.org/www-project-mobile-app-security/" },
  ],
  terms: [
    { term: l("Shared responsibility model", "نموذج المسؤولية المشتركة"), def: l("Division of security duties between cloud provider and customer.", "تقسيم المهام الأمنية بين مزوّد السحابة والعميل.") },
    { term: l("IaaS / PaaS / SaaS", "IaaS / PaaS / SaaS"), def: l("Infrastructure, Platform and Software as a Service cloud models.", "نماذج السحابة: البنية التحتية والمنصة والبرمجيات كخدمة.") },
    { term: l("CSPM", "إدارة وضع أمن السحابة"), def: l("Tools that continuously check cloud configuration against best practice.", "أدوات تفحص إعدادات السحابة باستمرار مقابل أفضل الممارسات.") },
    { term: l("BYOD", "أحضر جهازك الخاص"), def: l("Bring Your Own Device: employees using personal devices for work.", "استخدام الموظفين لأجهزتهم الشخصية في العمل.") },
    { term: l("MDM", "إدارة الأجهزة المحمولة"), def: l("Software that enforces policy on phones and tablets.", "برمجيات تفرض السياسات على الهواتف واللوحيات.") },
    { term: l("IoT", "إنترنت الأشياء"), def: l("Internet-connected everyday devices and sensors.", "أجهزة ومستشعرات يومية متصلة بالإنترنت.") },
    { term: l("Secrets manager", "مدير الأسرار"), def: l("A service that securely stores and rotates passwords, keys and tokens.", "خدمة تخزّن كلمات المرور والمفاتيح والرموز بأمان وتدوّرها.") },
  ],
};
