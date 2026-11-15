import { l, type Session } from "./types";

export const s15: Session = {
  id: 15,
  phase: 4,
  minutes: 65,
  title: l("Risk Management, Governance and Security Frameworks", "إدارة المخاطر والحوكمة وأطر الأمن"),
  summary: l(
    "How security decisions are made rationally: identifying and rating risks, choosing treatments, policies and standards, and the major frameworks (NIST CSF, ISO 27001, CIS Controls) plus business continuity basics.",
    "كيف تُتخذ القرارات الأمنية بعقلانية: تحديد المخاطر وتقييمها، واختيار المعالجات، والسياسات والمعايير، والأطر الكبرى (NIST CSF وISO 27001 وCIS Controls) مع أساسيات استمرارية الأعمال."
  ),
  objectives: [
    l("Run the risk management process: identify, analyse, evaluate, treat, monitor.", "تنفيذ عملية إدارة المخاطر: تحديد وتحليل وتقييم ومعالجة ومراقبة."),
    l("Calculate qualitative and simple quantitative risk (SLE, ARO, ALE).", "حساب المخاطر النوعية والكمية البسيطة (SLE وARO وALE)."),
    l("Choose among mitigate, transfer, accept and avoid with justification.", "الاختيار بين التخفيف والنقل والقبول والتجنب مع التبرير."),
    l("Differentiate policy, standard, procedure and guideline and name the major frameworks.", "التمييز بين السياسة والمعيار والإجراء والإرشاد وتسمية الأطر الكبرى."),
  ],
  sections: [
    {
      h: l("1. Why manage risk instead of 'being secure'", "1. لماذا ندير المخاطر بدل «أن نكون آمنين»"),
      p: [
        l("Perfect security does not exist and budgets are finite. Risk management lets an organisation spend on the controls that reduce the most harm per unit of money, and consciously accept what remains. It turns security from a list of technical wishes into business decisions that management can understand and own. The accountable owner of a risk is a business role, not the security team: security advises and measures, the business accepts or funds treatment.", "لا وجود لأمن مثالي والميزانيات محدودة. وتتيح إدارة المخاطر للمؤسسة الإنفاق على الضوابط التي تقلل أكبر قدر من الضرر لكل وحدة مال وقبول ما يتبقى عن وعي. فهي تحوّل الأمن من قائمة أمنيات تقنية إلى قرارات أعمال تفهمها الإدارة وتتحمل مسؤوليتها. ومالك المخاطرة المسؤول دور في الأعمال لا فريق الأمن: فالأمن يستشير ويقيس والأعمال تقبل المعالجة أو تموّلها."),
        l("The process (ISO 31000, NIST SP 800-30): establish context and scope → identify risks (assets, threats, vulnerabilities) → analyse (likelihood and impact) → evaluate against the organisation's risk appetite → treat → monitor and review continuously, recording everything in a risk register with owner, rating, treatment, deadline and residual risk.", "العملية (ISO 31000 وNIST SP 800-30): تحديد السياق والنطاق ← تحديد المخاطر (أصول وتهديدات وثغرات) ← التحليل (الاحتمالية والأثر) ← التقييم مقابل شهية المؤسسة للمخاطر ← المعالجة ← المراقبة والمراجعة المستمرة مع تدوين كل شيء في سجل مخاطر بالمالك والتقييم والمعالجة والموعد والمخاطر المتبقية."),
      ],
    },
    {
      h: l("2. Measuring risk", "2. قياس المخاطر"),
      p: [
        l("Qualitative analysis rates likelihood and impact on a scale (for example 1–5) and multiplies them: Risk score = Likelihood × Impact, giving Low, Medium, High or Critical bands on a heat map. It is quick and works when numbers are unavailable. Quantitative analysis expresses risk in money: Single Loss Expectancy SLE = Asset value × Exposure factor (the percentage of the asset lost in one event); Annualised Rate of Occurrence ARO = expected events per year; Annualised Loss Expectancy ALE = SLE × ARO.", "يقيّم التحليل النوعي الاحتمالية والأثر على مقياس (مثل 1–5) ويضربهما: درجة الخطر = الاحتمالية × الأثر فيُعطي نطاقات منخفض ومتوسط وعالٍ وحرج على خريطة حرارية. وهو سريع ويصلح عند غياب الأرقام. أما التحليل الكمي فيعبّر عن الخطر بالمال: توقع الخسارة للحدث الواحد SLE = قيمة الأصل × عامل التعرض (نسبة ما يُفقد من الأصل في حدث واحد)؛ ومعدل الحدوث السنوي ARO = الأحداث المتوقعة سنويًا؛ وتوقع الخسارة السنوي ALE = SLE × ARO."),
        l("Worked example: a customer database is worth $500,000. A breach would expose 40% of its value (EF = 0.4), so SLE = $200,000. If a breach is expected once every four years, ARO = 0.25 and ALE = $50,000 per year. A control that reduces the ALE by $35,000 per year and costs $10,000 per year is worth buying (net benefit $25,000); a control costing $60,000 per year is not.", "مثال محلول: قاعدة بيانات عملاء قيمتها 500,000 دولار. ويكشف الاختراق 40% من قيمتها (EF = 0.4) فيكون SLE = 200,000 دولار. وإذا كان الاختراق متوقعًا مرة كل أربع سنوات فإن ARO = 0.25 وALE = 50,000 دولار سنويًا. وضابط يخفض ALE بمقدار 35,000 دولار سنويًا بتكلفة 10,000 دولار سنويًا يستحق الشراء (صافي الفائدة 25,000)، وضابط تكلفته 60,000 سنويًا لا يستحق."),
      ],
      callout: { kind: "key", text: l("Inherent risk is the risk before controls; residual risk is what remains after controls. Management formally accepts the residual risk.", "الخطر الكامن هو الخطر قبل الضوابط، والخطر المتبقي هو ما يبقى بعد الضوابط. وتقبل الإدارة الخطر المتبقي رسميًا.") },
    },
    {
      h: l("3. Risk treatment options", "3. خيارات معالجة المخاطر"),
      p: [l("Every risk in the register gets exactly one primary treatment decision:", "يُتخذ لكل خطر في السجل قرار معالجة رئيسي واحد:")],
      table: {
        head: [l("Option", "الخيار"), l("Meaning", "المعنى"), l("Example", "مثال")],
        rows: [
          [l("Mitigate (reduce)", "التخفيف"), l("Add controls to lower likelihood or impact", "إضافة ضوابط لخفض الاحتمالية أو الأثر"), l("Enable MFA, patch, encrypt, train staff", "تفعيل MFA وترقيع وتشفير وتدريب")],
          [l("Transfer (share)", "النقل"), l("Move the financial consequence to another party", "نقل الأثر المالي إلى طرف آخر"), l("Cyber insurance, outsourcing to a provider under contract", "تأمين سيبراني أو إسناد لمزوّد بعقد")],
          [l("Accept (retain)", "القبول"), l("Knowingly live with the risk, with approval", "التعايش مع الخطر عن علم وبموافقة"), l("Low-impact risk where control costs more than the loss", "خطر منخفض الأثر وتكلفة الضابط أعلى من الخسارة")],
          [l("Avoid (eliminate)", "التجنب"), l("Stop the risky activity", "إيقاف النشاط الخطر"), l("Do not store card numbers at all; retire a legacy system", "عدم تخزين أرقام البطاقات إطلاقًا؛ إيقاف نظام قديم")],
        ],
      },
    },
    {
      h: l("4. Governance: policies, frameworks and continuity", "4. الحوكمة: السياسات والأطر والاستمرارية"),
      p: [
        l("Governance is how direction is set and responsibility assigned. Documents form a hierarchy: a policy states management's mandatory intent (for example 'all laptops must be encrypted'); standards give specific required settings (AES-256, BitLocker); procedures give step-by-step instructions; guidelines give non-mandatory advice. Policies need executive approval, communication, training, and enforcement with a defined exception process.", "الحوكمة هي كيفية وضع التوجيه وتحديد المسؤولية. وتشكّل الوثائق تسلسلًا هرميًا: السياسة تعبّر عن مراد الإدارة الإلزامي (مثل «يجب تشفير كل الحواسيب المحمولة»)؛ والمعايير تحدد الإعدادات المطلوبة (AES-256 وBitLocker)؛ والإجراءات تعطي خطوات تفصيلية؛ والإرشادات نصائح غير إلزامية. وتحتاج السياسات إلى اعتماد تنفيذي وإبلاغ وتدريب وإنفاذ مع عملية استثناءات محددة."),
        l("Frameworks save you from inventing controls. NIST Cybersecurity Framework 2.0 organises outcomes into six functions: Govern, Identify, Protect, Detect, Respond, Recover. ISO/IEC 27001 is a certifiable standard for an Information Security Management System (ISMS) with Annex A controls. CIS Critical Security Controls are a prioritised list of practical safeguards (inventory, secure configuration, access control, continuous vulnerability management…) with implementation groups for organisations of different size.", "توفر الأطر عليك اختراع الضوابط. يرتّب إطار NIST للأمن السيبراني 2.0 النتائج في ست وظائف: الحوكمة والتعريف والحماية والكشف والاستجابة والتعافي. وISO/IEC 27001 معيار قابل للاعتماد لنظام إدارة أمن المعلومات (ISMS) مع ضوابط الملحق A. أما CIS Critical Security Controls فقائمة مرتبة الأولويات بضمانات عملية (الحصر والإعداد الآمن والتحكم بالوصول وإدارة الثغرات المستمرة…) مع مجموعات تنفيذ لمؤسسات بأحجام مختلفة."),
        l("Business continuity: a Business Impact Analysis (BIA) finds which processes matter most and how long they can be down. RTO (Recovery Time Objective) is the maximum acceptable downtime; RPO (Recovery Point Objective) is the maximum acceptable data loss measured in time (a 4-hour RPO means backups at least every 4 hours). Business Continuity and Disaster Recovery plans must be written, owned and exercised, because untested plans fail.", "استمرارية الأعمال: يحدد تحليل أثر الأعمال (BIA) أي العمليات الأهم وكم يمكن أن تتوقف. وزمن الاستعادة المستهدف RTO هو أقصى توقف مقبول؛ ونقطة الاستعادة المستهدفة RPO هي أقصى فقد بيانات مقبول مقيسًا بالزمن (RPO بأربع ساعات يعني نسخًا احتياطيًا كل أربع ساعات على الأقل). ويجب كتابة خطط استمرارية الأعمال والتعافي من الكوارث وتحديد مالكيها وتمرينها لأن الخطط غير المختبرة تفشل."),
      ],
    },
  ],
  diagram: {
    kind: "cycle",
    title: l("The risk management cycle", "دورة إدارة المخاطر"),
    caption: l("Risk is never 'done': threats, assets and business goals change, so each step is repeated and the risk register is a living document.", "المخاطر لا «تنتهي» أبدًا: فالتهديدات والأصول وأهداف الأعمال تتغير فتتكرر كل خطوة ويبقى سجل المخاطر وثيقة حية."),
    nodes: [
      { label: l("Establish context", "تحديد السياق"), desc: l("Scope, assets, risk appetite", "النطاق والأصول وشهية المخاطر") },
      { label: l("Identify risks", "تحديد المخاطر"), desc: l("Threat + vulnerability + asset", "تهديد + ثغرة + أصل") },
      { label: l("Analyse", "التحليل"), desc: l("Likelihood × impact (or ALE)", "الاحتمالية × الأثر (أو ALE)") },
      { label: l("Evaluate", "التقييم"), desc: l("Compare with appetite, rank", "المقارنة بالشهية والترتيب") },
      { label: l("Treat", "المعالجة"), desc: l("Mitigate, transfer, accept, avoid", "تخفيف ونقل وقبول وتجنب") },
      { label: l("Monitor & review", "المراقبة والمراجعة"), desc: l("Update register, track residual risk", "تحديث السجل وتتبع المخاطر المتبقية") },
    ],
  },
  lab: {
    tool: "risk",
    title: l("Lab 15 – Build and treat a small risk register", "المختبر 15 – ابنِ سجل مخاطر صغيرًا وعالجه"),
    scenario: l("A 30-person accounting firm asks you to rank five risks and recommend a treatment for each. They have a limited security budget this year.", "تطلب شركة محاسبة من 30 شخصًا ترتيب خمسة مخاطر والتوصية بمعالجة لكل منها. وميزانية الأمن لديها هذا العام محدودة."),
    safety: l("Risk registers are confidential: they list the organisation's weaknesses. Store and share them only with authorised stakeholders.", "سجلات المخاطر سرية: فهي تسرد نقاط ضعف المؤسسة. خزّنها وشاركها مع الأطراف المخوّلة فقط."),
    steps: [
      l("Review the five default risks and their scores; note the order by score.", "راجع المخاطر الخمس الافتراضية ودرجاتها ولاحظ الترتيب بحسب الدرجة."),
      l("Choose a treatment (mitigate / transfer / accept / avoid) for every risk using the dropdown.", "اختر معالجة (تخفيف / نقل / قبول / تجنب) لكل خطر من القائمة."),
      l("Re-rate the ransomware and phishing risks after imagining offline backups and MFA; record the residual scores.", "أعد تقييم خطري الفدية والتصيّد بعد تخيّل نسخ احتياطية معزولة وMFA وسجّل الدرجات المتبقية."),
      l("Calculate ALE for ransomware: asset value $300,000, EF 60%, one event every 5 years. (SLE $180,000, ARO 0.2, ALE $36,000.)", "احسب ALE للفدية: قيمة الأصل 300,000 دولار وEF 60% وحدث كل 5 سنوات. (SLE 180,000 وARO 0.2 وALE 36,000)."),
      l("Decide whether a $12,000-per-year backup and MFA programme that reduces ALE by 80% is worthwhile (benefit $28,800 − cost $12,000 = $16,800 net).", "قرر هل يستحق برنامج نسخ احتياطي وMFA بتكلفة 12,000 دولار سنويًا يخفض ALE بنسبة 80% (الفائدة 28,800 − التكلفة 12,000 = صافٍ 16,800)."),
      l("Write one sentence for management explaining which residual risk they are being asked to accept.", "اكتب جملة للإدارة توضح أي خطر متبقٍ يُطلب منها قبوله."),
    ],
    expected: l("A ranked register with a treatment for each risk, lower residual scores for the controlled risks, and a cost-benefit statement showing the backup/MFA programme is justified.", "سجل مرتب بمعالجة لكل خطر ودرجات متبقية أقل للمخاطر المضبوطة وبيان كلفة-فائدة يثبت جدوى برنامج النسخ الاحتياطي وMFA."),
  },
  quiz: [
    { q: l("Risk is commonly calculated qualitatively as…", "تُحسب المخاطر نوعيًا عادةً على أنها…"), options: [l("Likelihood × Impact", "الاحتمالية × الأثر"), l("Threat + Asset", "التهديد + الأصل"), l("Cost − Benefit", "التكلفة − الفائدة"), l("Impact ÷ Time", "الأثر ÷ الزمن")], answer: 0, why: l("A simple matrix multiplies likelihood and impact scores.", "تضرب المصفوفة البسيطة درجتي الاحتمالية والأثر.") },
    { q: l("An asset is worth $200,000, a single incident would destroy 50% of it and it is expected once every 2 years. What is the ALE?", "أصل قيمته 200,000 دولار وحادثة واحدة تدمر 50% منه ومتوقع حدوثها كل سنتين. ما قيمة ALE؟"), options: [l("$100,000", "100,000 دولار"), l("$50,000", "50,000 دولار"), l("$25,000", "25,000 دولار"), l("$200,000", "200,000 دولار")], answer: 1, why: l("SLE = 200,000 × 0.5 = 100,000; ARO = 0.5; ALE = 50,000.", "SLE = 200,000 × 0.5 = 100,000؛ ARO = 0.5؛ ALE = 50,000.") },
    { q: l("Buying cyber insurance is an example of…", "شراء التأمين السيبراني مثال على…"), options: [l("Avoiding", "التجنب"), l("Transferring", "النقل"), l("Accepting", "القبول"), l("Mitigating only", "التخفيف فقط")], answer: 1, why: l("The financial consequence is moved to the insurer; the risk itself remains.", "ينتقل الأثر المالي إلى شركة التأمين بينما يبقى الخطر نفسه.") },
    { q: l("Which document gives mandatory, high-level management intent?", "أي وثيقة تعطي مراد الإدارة الإلزامي رفيع المستوى؟"), options: [l("Guideline", "إرشاد"), l("Procedure", "إجراء"), l("Policy", "سياسة"), l("Meeting notes", "محضر اجتماع")], answer: 2, why: l("Policies state what must be done; standards and procedures say how.", "تحدد السياسات ما يجب فعله وتحدد المعايير والإجراءات كيفية ذلك.") },
    { q: l("An RPO of 4 hours means…", "يعني RPO بأربع ساعات…"), options: [l("Systems must be restored in 4 hours", "يجب استعادة الأنظمة خلال 4 ساعات"), l("No more than 4 hours of data may be lost", "لا يجوز فقد بيانات تتجاوز 4 ساعات"), l("Backups run every 4 days", "تُجرى النسخ كل 4 أيام"), l("The audit takes 4 hours", "يستغرق التدقيق 4 ساعات")], answer: 1, why: l("RPO is about data loss; RTO is about downtime.", "RPO يخص فقد البيانات وRTO يخص التوقف.") },
    { q: l("Which NIST CSF 2.0 function was added to emphasise leadership and strategy?", "أي وظيفة في NIST CSF 2.0 أُضيفت للتأكيد على القيادة والاستراتيجية؟"), options: [l("Protect", "الحماية"), l("Govern", "الحوكمة"), l("Detect", "الكشف"), l("Recover", "التعافي")], answer: 1, why: l("Govern joined Identify, Protect, Detect, Respond and Recover in version 2.0.", "انضمت الحوكمة إلى التعريف والحماية والكشف والاستجابة والتعافي في الإصدار 2.0.") },
    { q: l("Residual risk is…", "الخطر المتبقي هو…"), options: [l("Risk before any control", "الخطر قبل أي ضابط"), l("Risk remaining after controls are applied", "الخطر الباقي بعد تطبيق الضوابط"), l("A type of malware", "نوع من البرمجيات الخبيثة"), l("Risk that is transferred", "الخطر المنقول")], answer: 1, why: l("Management must formally accept it or add more treatment.", "على الإدارة قبوله رسميًا أو إضافة معالجة.") },
  ],
  homework: {
    title: l("Homework 15 – Risk register for your own life or workplace", "الواجب 15 – سجل مخاطر لحياتك أو مكان عملك"),
    tasks: [
      l("Identify eight information-security risks relevant to your home or workplace.", "حدد ثماني مخاطر لأمن المعلومات ذات صلة بمنزلك أو مكان عملك."),
      l("Rate likelihood and impact (1–5) and compute scores; sort the register.", "قيّم الاحتمالية والأثر (1–5) واحسب الدرجات ورتّب السجل."),
      l("Choose a treatment and a specific control for each risk, with an owner and date.", "اختر معالجة وضابطًا محددًا لكل خطر مع مالك وتاريخ."),
      l("Compute ALE for one risk using realistic estimates and compare with the cost of a control.", "احسب ALE لخطر واحد بتقديرات واقعية وقارنه بتكلفة ضابط."),
    ],
    deliverable: l("A completed risk register (spreadsheet or table) and a half-page recommendation to 'management'.", "سجل مخاطر مكتمل (جدول بيانات أو جدول) وتوصية بنصف صفحة إلى «الإدارة»."),
  },
  refs: [
    { title: "NIST Cybersecurity Framework 2.0", org: "NIST", url: "https://www.nist.gov/cyberframework" },
    { title: "Guide for Conducting Risk Assessments (SP 800-30 Rev.1)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final" },
    { title: "ISO/IEC 27001 – Information security management", org: "ISO", url: "https://www.iso.org/standard/27001" },
    { title: "CIS Critical Security Controls", org: "Center for Internet Security", url: "https://www.cisecurity.org/controls" },
    { title: "Risk management guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/risk-management" },
  ],
  terms: [
    { term: l("Risk register", "سجل المخاطر"), def: l("A living record of identified risks, ratings, owners and treatments.", "سجل حي بالمخاطر المحددة وتقييماتها ومالكيها ومعالجاتها.") },
    { term: l("Risk appetite", "شهية المخاطر"), def: l("The amount of risk an organisation is willing to accept.", "قدر المخاطر الذي تقبله المؤسسة.") },
    { term: l("ALE", "توقع الخسارة السنوي"), def: l("Annualised Loss Expectancy = SLE × ARO.", "توقع الخسارة السنوي = SLE × ARO.") },
    { term: l("Residual risk", "الخطر المتبقي"), def: l("Risk remaining after controls are applied.", "الخطر الباقي بعد تطبيق الضوابط.") },
    { term: l("ISMS", "نظام إدارة أمن المعلومات"), def: l("Information Security Management System: policies and processes managed as a whole.", "سياسات وعمليات تُدار كمنظومة واحدة.") },
    { term: l("BIA", "تحليل أثر الأعمال"), def: l("Business Impact Analysis identifying critical processes and tolerable downtime.", "تحليل يحدد العمليات الحرجة وفترة التوقف المقبولة.") },
    { term: l("RTO / RPO", "RTO / RPO"), def: l("Maximum tolerable downtime / maximum tolerable data loss.", "أقصى توقف مقبول / أقصى فقد بيانات مقبول.") },
    { term: l("Compliance", "الامتثال"), def: l("Meeting the requirements of laws, regulations, standards and policies.", "الوفاء بمتطلبات القوانين واللوائح والمعايير والسياسات.") },
  ],
};

export const s16: Session = {
  id: 16,
  phase: 4,
  minutes: 65,
  title: l("Security Monitoring, Logging and SIEM", "المراقبة الأمنية والتسجيل وSIEM"),
  summary: l(
    "What to log, how logs become alerts, how a Security Operations Centre triages events, and how to read authentication logs to spot a brute-force attack.",
    "ماذا نسجّل، وكيف تتحول السجلات إلى تنبيهات، وكيف يفرز مركز عمليات الأمن الأحداث، وكيف نقرأ سجلات المصادقة لاكتشاف هجوم تخمين."
  ),
  objectives: [
    l("Explain why logging and monitoring are essential for detection and investigation.", "شرح لماذا يعد التسجيل والمراقبة أساسيين للكشف والتحقيق."),
    l("List key log sources and what each reveals.", "ذكر مصادر السجلات الرئيسية وما يكشفه كل منها."),
    l("Describe how a SIEM collects, normalises, correlates and alerts.", "وصف كيف يجمع SIEM السجلات ويوحّدها ويربطها وينبّه."),
    l("Analyse an authentication log for brute-force indicators and triage the alert.", "تحليل سجل مصادقة لمؤشرات التخمين المكثف وفرز التنبيه."),
  ],
  sections: [
    {
      h: l("1. Why monitoring matters", "1. لماذا تهم المراقبة"),
      p: [
        l("Prevention eventually fails, so organisations must also detect and investigate. Studies repeatedly show that intruders stay undiscovered for weeks or months when nobody is watching, and that many victims learn of a breach from third parties. Logs are the record of what happened: who logged in, from where, what was changed, what connected to what. Without them, incident response becomes guesswork and compliance audits fail. Security monitoring is the continuous collection and analysis of that evidence to find malicious or abnormal activity quickly.", "تفشل الوقاية في النهاية لذا يجب أن تكشف المؤسسات وتحقق أيضًا. وتُظهر الدراسات مرارًا أن المتسللين يبقون دون اكتشاف أسابيع أو شهورًا حين لا يراقب أحد، وأن كثيرًا من الضحايا يعلمون بالاختراق من أطراف خارجية. والسجلات هي سجل ما حدث: من سجّل الدخول ومن أين وما الذي تغيّر وما الذي اتصل بما. وبدونها تصبح الاستجابة للحوادث تخمينًا وتفشل عمليات تدقيق الامتثال. والمراقبة الأمنية هي الجمع والتحليل المستمران لهذه الأدلة لإيجاد النشاط الخبيث أو الشاذ بسرعة."),
        l("Two key metrics: MTTD (mean time to detect) and MTTR (mean time to respond/recover). The goal is to shrink both: the shorter the dwell time of an attacker, the less damage they do.", "مقياسان رئيسيان: MTTD (متوسط زمن الكشف) وMTTR (متوسط زمن الاستجابة/التعافي). والهدف تقليلهما: فكلما قصر بقاء المهاجم قلّ ضرره."),
      ],
    },
    {
      h: l("2. What to log", "2. ماذا نسجّل"),
      p: [l("Collect logs from the places where attacks leave traces:", "اجمع السجلات من الأماكن التي تترك فيها الهجمات آثارًا:")],
      table: {
        head: [l("Source", "المصدر"), l("Example events", "أحداث نموذجية"), l("Detects", "يكشف")],
        rows: [
          [l("Authentication / identity", "المصادقة / الهوية"), l("Logins, failures, MFA prompts, account lockouts, privilege changes", "تسجيلات الدخول والفشل ومطالبات MFA وقفل الحسابات وتغيير الصلاحيات"), l("Brute force, stolen credentials, impossible travel", "التخمين، بيانات الدخول المسروقة، السفر المستحيل")],
          [l("Endpoints / EDR", "النقاط الطرفية / EDR"), l("Process starts, new services, script execution", "بدء العمليات والخدمات الجديدة وتنفيذ السكربتات"), l("Malware, persistence, lateral movement", "البرمجيات الخبيثة، الاستمرارية، الحركة الجانبية")],
          [l("Firewall / network", "الجدار الناري / الشبكة"), l("Allowed and blocked connections, unusual destinations, data volume", "الاتصالات المسموحة والمحجوبة والوجهات غير المعتادة وحجم البيانات"), l("Scanning, C2 traffic, exfiltration", "المسح وحركة التحكم وتسريب البيانات")],
          [l("DNS / proxy / web", "DNS / الوكيل / الويب"), l("Domain lookups, URLs, categories", "استعلامات النطاقات والعناوين وتصنيفاتها"), l("Phishing, malware callbacks, tunnelling", "التصيّد، ارتدادات البرمجيات الخبيثة، الأنفاق")],
          [l("E-mail gateway", "بوابة البريد"), l("Sender, attachments, URLs, verdicts", "المرسل والمرفقات والروابط والأحكام"), l("Phishing campaigns", "حملات التصيّد")],
          [l("Cloud & applications", "السحابة والتطبيقات"), l("API calls, config changes, admin actions, application errors", "استدعاءات API وتغييرات الإعدادات وإجراءات المدير وأخطاء التطبيق"), l("Misconfiguration, abuse of keys, injection attempts", "سوء الإعداد، إساءة استخدام المفاتيح، محاولات الحقن")],
        ],
      },
      callout: { kind: "tip", text: l("Make sure clocks are synchronised (NTP) and timestamps use one time zone, otherwise events from different systems cannot be put in order. Protect logs from tampering: send them to a central, write-once store, because attackers delete local logs.", "تأكد من مزامنة الساعات (NTP) وتوحيد المنطقة الزمنية وإلا تعذّر ترتيب أحداث الأنظمة المختلفة. واحمِ السجلات من العبث: أرسلها إلى مخزن مركزي للكتابة مرة واحدة لأن المهاجمين يحذفون السجلات المحلية.") },
    },
    {
      h: l("3. SIEM and the SOC", "3. SIEM ومركز العمليات الأمنية"),
      p: [
        l("A Security Information and Event Management (SIEM) platform collects logs from all sources, normalises them to a common format, stores them for search and compliance, correlates events with rules and analytics (for example '10 failed logins followed by a success from the same IP within 5 minutes'), enriches them with threat intelligence (known-bad IPs, domains and file hashes — indicators of compromise, IOCs) and raises alerts. SOAR tools can automate routine responses such as disabling an account or isolating a host.", "تجمع منصة إدارة معلومات وأحداث الأمن (SIEM) السجلات من كل المصادر وتوحّدها في صيغة مشتركة وتخزنها للبحث والامتثال وتربط الأحداث بقواعد وتحليلات (مثل «10 محاولات دخول فاشلة تتبعها محاولة ناجحة من العنوان نفسه خلال 5 دقائق») وتثريها باستخبارات التهديدات (عناوين ونطاقات وتجزئات ملفات خبيثة معروفة — مؤشرات الاختراق IOC) وتصدر تنبيهات. وتستطيع أدوات SOAR أتمتة الاستجابات الروتينية مثل تعطيل حساب أو عزل جهاز."),
        l("A Security Operations Centre (SOC) staffs the process. Tier 1 analysts triage alerts: is it real or a false positive? Tier 2 investigates confirmed incidents in depth, and Tier 3 / threat hunters proactively search for hidden attackers and improve detection rules. Alert fatigue is the enemy: too many low-quality alerts hide the real ones, so rules must be tuned continuously and every alert must have a documented playbook.", "ويضم مركز عمليات الأمن (SOC) الكوادر المشغّلة. يفرز محللو المستوى 1 التنبيهات: هل هو حقيقي أم إيجابي كاذب؟ ويحقق المستوى 2 بعمق في الحوادث المؤكدة، ويبحث المستوى 3 / صيادو التهديدات استباقيًا عن مهاجمين مخفيين ويحسّنون قواعد الكشف. وإرهاق التنبيهات هو العدو: فكثرة التنبيهات الرديئة تخفي الحقيقية، لذا يجب ضبط القواعد باستمرار ويجب أن يكون لكل تنبيه دليل تشغيل موثق."),
      ],
    },
    {
      h: l("4. Reading a log: spotting a brute-force attack", "4. قراءة سجل: اكتشاف هجوم تخمين"),
      p: [
        l("A typical SSH authentication log line contains time, host, service, the outcome (Failed/Accepted), the account name and the source IP. Brute-force patterns: many failures from one source in a short period; many different usernames tried (root, admin, test, oracle); failures from many sources against one account (distributed attack); and, most critically, a success after a long run of failures from the same IP — the attacker probably guessed the password.", "يحتوي سطر سجل مصادقة SSH نموذجي على الوقت والمضيف والخدمة والنتيجة (Failed/Accepted) واسم الحساب وعنوان IP المصدر. وأنماط التخمين: فشل كثير من مصدر واحد في فترة قصيرة؛ وتجربة أسماء مستخدمين كثيرة مختلفة (root وadmin وtest وoracle)؛ وفشل من مصادر كثيرة ضد حساب واحد (هجوم موزّع)؛ والأخطر نجاح بعد سلسلة طويلة من الفشل من العنوان نفسه — إذ على الأرجح خمّن المهاجم كلمة المرور."),
        l("Triage questions: Who is the account and is the source expected? Was the login successful, and what happened next (new accounts, privilege changes, outbound transfers)? Is the IP on a threat-intelligence list? What is the business impact? Then act: block the source, force a password reset and MFA, check the account's recent activity, escalate to incident response if compromise is likely, and record what you did. Preventive follow-up: disable password SSH in favour of keys, restrict by source IP or VPN, and enable rate-limiting.", "أسئلة الفرز: من صاحب الحساب وهل المصدر متوقع؟ وهل نجح الدخول وماذا حدث بعده (حسابات جديدة، تغيير صلاحيات، تحويلات خارجة)؟ وهل العنوان في قائمة استخبارات تهديدات؟ وما الأثر على الأعمال؟ ثم تصرّف: احجب المصدر وأجبر على إعادة تعيين كلمة المرور وMFA وافحص نشاط الحساب الأخير وصعّد إلى الاستجابة للحوادث إن كان الاختراق مرجحًا ودوّن ما فعلته. والمتابعة الوقائية: عطّل كلمة مرور SSH لصالح المفاتيح وقيّد بحسب IP المصدر أو VPN وفعّل تحديد المعدل."),
      ],
    },
  ],
  diagram: {
    kind: "flow",
    title: l("From raw logs to a response – the SIEM pipeline", "من السجلات الخام إلى الاستجابة – مسار SIEM"),
    caption: l("Each stage reduces noise and adds meaning: millions of events become a handful of prioritised alerts that analysts can act on.", "تقلل كل مرحلة الضوضاء وتضيف المعنى: ملايين الأحداث تصبح حفنة من التنبيهات المرتبة التي يستطيع المحللون التصرف بشأنها."),
    nodes: [
      { label: l("Log sources", "مصادر السجلات"), desc: l("Endpoints, network, cloud, identity", "النقاط الطرفية والشبكة والسحابة والهوية") },
      { label: l("Collect & normalise", "الجمع والتوحيد"), desc: l("One format, one clock", "صيغة واحدة وساعة واحدة") },
      { label: l("Correlate & enrich", "الربط والإثراء"), desc: l("Rules, analytics, threat intel", "قواعد وتحليلات واستخبارات") },
      { label: l("Alert & triage", "التنبيه والفرز"), desc: l("True or false positive?", "إيجابي حقيقي أم كاذب؟") },
      { label: l("Respond & improve", "الاستجابة والتحسين"), desc: l("Contain, document, tune rules", "احتواء وتوثيق وضبط القواعد") },
    ],
  },
  lab: {
    tool: "logs",
    title: l("Lab 16 – Investigate an SSH brute-force attempt", "المختبر 16 – تحقيق في محاولة تخمين SSH"),
    scenario: l("At 02:11 your SIEM raised 'multiple failed SSH logins'. Open the sample authentication log, run the analyzer and decide whether the server has been compromised.", "في الساعة 02:11 أصدر SIEM تنبيه «محاولات SSH فاشلة متعددة». افتح عينة سجل المصادقة وشغّل المحلل وقرر هل اختُرق الخادم."),
    safety: l("The log is a fabricated sample using documentation-reserved IP addresses (203.0.113.x, 198.51.100.x, 192.0.2.x). When working with real logs, treat them as sensitive: they contain usernames, IPs and sometimes personal data.", "السجل عينة مصطنعة بعناوين IP محجوزة للتوثيق (‎203.0.113.x و198.51.100.x و192.0.2.x). وعند العمل مع سجلات حقيقية تعامل معها كبيانات حساسة: فهي تحتوي أسماء مستخدمين وعناوين IP وأحيانًا بيانات شخصية."),
    steps: [
      l("Read the ten log lines and identify the three source IP addresses.", "اقرأ الأسطر العشرة وحدد عناوين IP المصدر الثلاثة."),
      l("Press Analyze and note the failure and success counts per IP.", "اضغط تحليل ولاحظ أعداد الفشل والنجاح لكل IP."),
      l("Which IP shows a brute-force pattern and which accounts did it try? (203.0.113.45: root, admin, test, oracle.)", "أي IP يظهر نمط تخمين وأي حسابات جرّب؟ (203.0.113.45: root وadmin وtest وoracle)."),
      l("Find the critical event: the accepted login for 'admin' after six failures. State what that implies.", "اعثر على الحدث الحرج: دخول ناجح لـ admin بعد ست محاولات فاشلة. اذكر ما يعنيه ذلك."),
      l("Edit the log in the box: remove the 'Accepted' line for the attacker and re-analyze – the finding changes to brute-force pattern only.", "عدّل السجل في المربع: احذف سطر «Accepted» للمهاجم وأعد التحليل — يتغير الاستنتاج إلى نمط تخمين فقط."),
      l("Write the containment steps (block IP, reset admin password, review commands run by admin, check for new accounts and keys) and three preventive fixes.", "اكتب خطوات الاحتواء (حجب IP وإعادة تعيين كلمة مرور admin ومراجعة أوامر admin وفحص حسابات ومفاتيح جديدة) وثلاثة إصلاحات وقائية."),
    ],
    expected: l("You classify 203.0.113.45 as a successful brute-force (treat as compromise), the other two IPs as normal, and produce an ordered containment and prevention plan.", "تصنّف 203.0.113.45 على أنه تخمين ناجح (يُعامل كاختراق) والعنوانين الآخرين كطبيعيين وتضع خطة احتواء ووقاية مرتبة."),
  },
  quiz: [
    { q: l("What does a SIEM do?", "ماذا يفعل SIEM؟"), options: [l("Collects, correlates and alerts on logs from many sources", "يجمع السجلات من مصادر كثيرة ويربطها وينبّه"), l("Encrypts disks", "يشفّر الأقراص"), l("Replaces the firewall", "يحل محل الجدار الناري"), l("Creates passwords", "ينشئ كلمات المرور")], answer: 0, why: l("A SIEM centralises log data and turns it into prioritised alerts.", "يمركز SIEM بيانات السجلات ويحولها إلى تنبيهات مرتبة.") },
    { q: l("Why must clocks be synchronised across systems?", "لماذا يجب مزامنة الساعات عبر الأنظمة؟"), options: [l("So events can be ordered into a timeline", "ليمكن ترتيب الأحداث في خط زمني"), l("To save electricity", "لتوفير الكهرباء"), l("To speed up Wi-Fi", "لتسريع الواي فاي"), l("It is not necessary", "ليس ضروريًا")], answer: 0, why: l("Correlation and investigation depend on accurate timestamps.", "يعتمد الربط والتحقيق على طوابع زمنية دقيقة.") },
    { q: l("Which log pattern is most alarming?", "أي نمط سجل هو الأكثر إنذارًا؟"), options: [l("One failed login by a user", "محاولة فاشلة واحدة من مستخدم"), l("Many failures followed by a success from the same IP", "فشل كثير يعقبه نجاح من العنوان نفسه"), l("A scheduled backup job", "مهمة نسخ احتياطي مجدولة"), l("A user logging out", "مستخدم يسجل الخروج")], answer: 1, why: l("It suggests the attacker eventually guessed valid credentials.", "توحي بأن المهاجم خمّن بيانات صالحة أخيرًا.") },
    { q: l("An IOC is…", "مؤشر الاختراق IOC هو…"), options: [l("A known artefact of malicious activity such as a bad IP, domain or file hash", "أثر معروف لنشاط خبيث كعنوان IP أو نطاق أو تجزئة ملف سيئة"), l("A type of firewall rule", "نوع من قواعد الجدار الناري"), l("A backup schedule", "جدول نسخ احتياطي"), l("An encryption mode", "نمط تشفير")], answer: 0, why: l("Indicators of Compromise are matched against logs to find known threats.", "تُطابق مؤشرات الاختراق مع السجلات لإيجاد التهديدات المعروفة.") },
    { q: l("What is 'alert fatigue'?", "ما «إرهاق التنبيهات»؟"), options: [l("Analysts missing real incidents because of too many low-value alerts", "إغفال المحللين لحوادث حقيقية بسبب كثرة التنبيهات قليلة القيمة"), l("A hardware failure", "عطل عتادي"), l("A training course", "دورة تدريبية"), l("Too few logs", "قلة السجلات")], answer: 0, why: l("Tuning and playbooks keep alerts meaningful.", "الضبط وأدلة التشغيل يُبقيان التنبيهات ذات معنى.") },
    { q: l("Why send logs to a central, protected store?", "لماذا نرسل السجلات إلى مخزن مركزي محمي؟"), options: [l("Attackers often delete local logs to hide their tracks", "المهاجمون يحذفون السجلات المحلية لإخفاء آثارهم"), l("To make logs larger", "لتكبير السجلات"), l("To avoid using SIEM", "لتجنب استخدام SIEM"), l("Local logs do not exist", "السجلات المحلية غير موجودة")], answer: 0, why: l("Central write-once storage preserves evidence.", "التخزين المركزي للكتابة مرة واحدة يحفظ الأدلة.") },
    { q: l("MTTD stands for…", "تعني MTTD…"), options: [l("Mean Time To Detect", "متوسط زمن الكشف"), l("Maximum Threat Type Data", "أقصى بيانات نوع تهديد"), l("Managed Traffic Tunnel Device", "جهاز نفق حركة مُدار"), l("Mean Time To Delete", "متوسط زمن الحذف")], answer: 0, why: l("It measures how quickly intrusions are discovered.", "يقيس سرعة اكتشاف الاختراقات.") },
  ],
  homework: {
    title: l("Homework 16 – Design a monitoring plan", "الواجب 16 – صمّم خطة مراقبة"),
    tasks: [
      l("List the ten most important log sources for a 50-person company that uses Microsoft 365 or Google Workspace, a firewall and ten laptops.", "اذكر أهم عشرة مصادر سجلات لشركة من 50 شخصًا تستخدم Microsoft 365 أو Google Workspace وجدارًا ناريًا وعشرة حواسيب محمولة."),
      l("Write three detection rules in plain English (for example 'admin login from a new country outside business hours').", "اكتب ثلاث قواعد كشف بالإنجليزية أو العربية البسيطة (مثل «دخول مدير من بلد جديد خارج ساعات العمل»)."),
      l("For each rule, write a short triage playbook: questions to ask, containment action, escalation criteria.", "لكل قاعدة اكتب دليل فرز قصيرًا: أسئلة وإجراء احتواء ومعايير تصعيد."),
      l("Check your own e-mail account's 'recent activity' or security page and review the last 10 sign-ins.", "افحص صفحة «النشاط الأخير» أو الأمان في بريدك وراجع آخر 10 عمليات دخول."),
    ],
    deliverable: l("A two-page monitoring plan with sources, rules, playbooks and your sign-in review findings.", "خطة مراقبة من صفحتين بالمصادر والقواعد وأدلة التشغيل ونتائج مراجعة عمليات دخولك."),
  },
  refs: [
    { title: "Guide to Computer Security Log Management (SP 800-92)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/92/final" },
    { title: "Introduction to logging for security purposes", org: "NCSC UK", url: "https://www.ncsc.gov.uk/guidance/introduction-logging-security-purposes" },
    { title: "Logging and Monitoring guidance", org: "CISA", url: "https://www.cisa.gov/resources-tools/resources/best-practices-event-logging-and-threat-detection" },
    { title: "Sigma – generic detection rule format", org: "SigmaHQ", url: "https://github.com/SigmaHQ/sigma" },
  ],
  terms: [
    { term: l("SIEM", "إدارة معلومات وأحداث الأمن"), def: l("Platform that collects, correlates and alerts on security log data.", "منصة تجمع بيانات سجلات الأمن وتربطها وتنبّه.") },
    { term: l("SOC", "مركز عمليات الأمن"), def: l("Team and facility that monitors and responds to security events 24/7.", "فريق ومرفق يراقب أحداث الأمن ويستجيب لها على مدار الساعة.") },
    { term: l("IOC", "مؤشر الاختراق"), def: l("Observable artefact (IP, domain, hash) indicating malicious activity.", "أثر ملحوظ (IP أو نطاق أو تجزئة) يدل على نشاط خبيث.") },
    { term: l("False positive / negative", "إيجابي / سلبي كاذب"), def: l("Benign event flagged / real attack missed.", "حدث سليم صُنّف هجومًا / هجوم حقيقي لم يُكتشف.") },
    { term: l("Dwell time", "زمن البقاء"), def: l("How long an attacker stays undetected in an environment.", "المدة التي يبقى فيها المهاجم دون كشف في بيئة ما.") },
    { term: l("Threat hunting", "صيد التهديدات"), def: l("Proactive search for hidden attackers rather than waiting for alerts.", "بحث استباقي عن مهاجمين مخفيين بدل انتظار التنبيهات.") },
    { term: l("SOAR", "تنسيق الأمن والأتمتة والاستجابة"), def: l("Tools automating response playbooks.", "أدوات تؤتمت أدلة الاستجابة.") },
  ],
};
