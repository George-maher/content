import { l, type Session } from "../types";

export const s18: Session = {
  id: 18,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Risk Management and Privacy: Rating Risk, Governing Security and Respecting Individuals",
    "إدارة المخاطر والخصوصية: تقييم المخاطر والحوكمة الأمنية واحترام الأفراد",
  ),
  summary: l(
    "How security decisions are made rationally and lawfully: the risk management process and how to measure risk, treatments and governance frameworks, and the privacy principles, individual rights, compliance duties and ethical rules that bound every security decision.",
    "كيف تُتخذ القرارات الأمنية بعقلانية وقانونية: عملية إدارة المخاطر وكيفية قياسها، ومعالجات المخاطر وأطر الحوكمة، ومبادئ الخصوصية وحقوق الأفراد وواجبات الامتثال والقواعد الأخلاقية التي تحد كل قرار أمني.",
  ),
  overview: l(
    "Perfect security does not exist and budgets are finite, so organisations manage risk: they identify what could harm them, measure it, decide how to treat it, and keep reviewing. But risk management happens inside a legal and ethical frame — privacy law, individual rights and the rules of ethical security work shape what risks can be taken and how controls may be applied. This session merges two governing disciplines. It covers the risk management process (identify, analyse, evaluate, treat, monitor), qualitative and quantitative measurement (likelihood × impact, SLE, ARO, ALE), treatments (mitigate, transfer, accept, avoid) and governance frameworks (NIST CSF, ISO 27001, CIS Controls); then privacy versus security, data-protection principles and individual rights, compliance and audits, and the law and ethics of authorised security testing and responsible disclosure. The session closes with a lab where you classify real situations as permitted, requiring authorisation, or illegal/unethical.",
    "لا وجود لأمن مثالي والميزانيات محدودة، لذا تُدير المنظمات المخاطر: تحدد ما قد يضرّها وتقيسه وتقرر كيف تعالجه وتراجعه باستمرار. لكن إدارة المخاطر تقع داخل إطار قانوني وأخلاقي — فقوانين الخصوصية وحقوق الأفراد وقواعد العمل الأمني الأخلاقي تُحدد ما المخاطر المسموح بأخذها وكيف تُطبق الضوابط. وتدمج هذه الجلسة تخصصي الحوكمة. وتغطي عملية إدارة المخاطر (التحديد والتحليل والتقييم والمعالجة والمراقبة)، والقياس النوعي والكمّي (الاحتمالية × الأثر، وSLE وARO وALE)، والمعالجات (تخفيف ونقل وقبول وتجنب) وأطر الحوكمة (NIST CSF وISO 27001 وضوابط CIS)؛ ثم الخصوصية مقابل الأمن ومبادئ حماية البيانات وحقوق الأفراد والامتثال والتدقيق، وقانون وأخلاقيات اختبار الأمن المصرح به والإفصاح المسؤول. وتنتهي الجلسة بمختبر تصنّف فيه مواقف حقيقية كمسموح أو يحتاج تفويضًا أو مخالف للقانون/الأخلاق.",
  ),
  whyItMatters: l(
    "Security decisions are not made in a vacuum. Management must decide where limited budget reduces the most harm, and must be able to justify those decisions — that is risk management. But those decisions are bounded by law and ethics: privacy obligations limit what data may be collected and kept, compliance duties require proof of controls, and the line between an authorised security professional and a criminal is written authorisation. Understanding both disciplines turns security from unbounded technical effort into defensible, lawful, business-owned decisions that protect the organisation and respect the people whose data it holds.",
    "لا تُتخذ القرارات الأمنية في فراغ. فعلى الإدارة أن تقرر أي ميزانية محدودة تقلل أكبر قدر من الضرر، وأن تكون قادرة على تبرير تلك القرارات — وهذا هو إدارة المخاطر. لكن هذه القرارات مقيدة بالقانون والأخلاقيات: فالتزامات الخصوصية تحد ما البيانات التي يجوز جمعها وحفظها، وتتطلب واجبات الامتثال إثبات الضوابط، والفرق بين المتخصص الأمني المصرح له والمجرم هو التفويض الكتابي. وفهم التخصصين معًا يحوّل الأمن من جهد تقني غير مقيد إلى قرارات أعمال مملوكة وقابلة للدفاع تحمي المؤسسة وتحترم الأفراد الذين تحتفظ ببياناتهم.",
  ),
  prerequisites: [
    l(
      "Session 14, Vulnerability Management: how risks are identified from vulnerabilities and scored.",
      "الجلسة 14، إدارة الثغرات: كيف تُحدد المخاطر من الثغرات وتُسجّل.",
    ),
    l(
      "Session 15, Security Monitoring & SIEM: how detection and response inform risk treatment decisions.",
      "الجلسة 15، المراقبة الأمنية وSIEM: كيف يُغني الكشف والاستجابة قرارات معالجة المخاطر.",
    ),
    l(
      "Session 16, Incident Response: how GDPR breach notification and legal duties arise during an incident.",
      "الجلسة 16، الاستجابة للحوادث: كيف تنشأ واجبات إخطار GDPR والواجبات القانونية أثناء الحادثة.",
    ),
    l(
      "A legal and ethical mindset: manage risk only within authorised scope, and respect privacy and individual rights.",
      "عقلية قانونية وأخلاقية: أدرِ المخاطر فقط ضمن النطاق المصرح به، واحترم الخصوصية وحقوق الأفراد.",
    ),
  ],
  objectives: [
    l(
      "Run the risk management process: establish context, identify, analyse, evaluate, treat and monitor.",
      "تنفيذ عملية إدارة المخاطر: تحديد السياق والتحديد والتحليل والتقييم والمعالجة والمراقبة.",
    ),
    l(
      "Measure risk qualitatively (likelihood × impact) and quantitatively (SLE, ARO, ALE).",
      "قياس المخاطر نوعيًا (الاحتمالية × الأثر) وكميًا (SLE وARO وALE).",
    ),
    l(
      "Choose among mitigate, transfer, accept and avoid, and apply governance frameworks.",
      "الاختيار بين التخفيف والنقل والقبول والتجنب، وتطبيق أطر الحوكمة.",
    ),
    l(
      "Distinguish privacy from security and state the core data-protection principles and individual rights.",
      "التمييز بين الخصوصية والأمن وذكر مبادئ حماية البيانات الأساسية وحقوق الأفراد.",
    ),
    l(
      "Explain compliance, audits and the lawful, ethical rules of authorised security testing.",
      "شرح الامتثال والتدقيق والقواعد القانونية والأخلاقية لاختبار الأمن المصرح به.",
    ),
    l(
      "Classify real security and privacy situations as permitted, requiring authorisation, or illegal/unethical.",
      "تصنيف مواقف أمنية وخصوصية حقيقية كمسموح أو يحتاج تفويضًا أو مخالف للقانون/الأخلاق.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Why risk management and privacy matter", "لماذا تهم إدارة المخاطر والخصوصية"), minutes: 12 },
    { label: l("The risk process and measuring risk", "عملية المخاطر وقياسها"), minutes: 13 },
    { label: l("Treatments and governance frameworks", "المعالجات وأطر الحوكمة"), minutes: 12 },
    { label: l("Privacy versus security and principles", "الخصوصية مقابل الأمن والمبادئ"), minutes: 13 },
    { label: l("Individual rights, compliance and audits", "حقوق الأفراد والامتثال والتدقيق"), minutes: 12 },
    { label: l("Law, ethical hacking and disclosure", "القانون والاختراق الأخلاقي والإفصاح"), minutes: 12 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 11 },
  ],
  introduction: l(
    "Perfect security does not exist and budgets are finite, so organisations manage risk: they identify what could harm them, measure it, decide how to treat it, and keep reviewing. But risk management happens inside a legal and ethical frame — privacy law, individual rights and the rules of ethical security work shape what risks can be taken and how controls may be applied. This session merges risk management and privacy: the process and measurement of risk, treatments and governance frameworks, then privacy principles, individual rights, compliance, and the law and ethics of authorised testing. The session closes with a lab where you classify real situations as permitted, requiring authorisation, or illegal/unethical.",
    "لا وجود لأمن مثالي والميزانيات محدودة، لذا تُدير المنظمات المخاطر: تحدد ما قد يضرّها وتقيسه وتقرر كيف تعالجه وتراجعه باستمرار. لكن إدارة المخاطر تقع داخل إطار قانوني وأخلاقي — فقوانين الخصوصية وحقوق الأفراد وقواعد العمل الأمني الأخلاقي تُحدد ما المخاطر المسموح بأخذها وكيف تُطبق الضوابط. وتدمج هذه الجلسة إدارة المخاطر والخصوصية: عملية المخاطر وقياسها، والمعالجات وأطر الحوكمة، ثم مبادئ الخصوصية وحقوق الأفراد والامتثال وقانون وأخلاقيات الاختبار المصرح به. وتنتهي الجلسة بمختبر تصنّف فيه مواقف حقيقية كمسموح أو يحتاج تفويضًا أو مخالف للقانون/الأخلاق.",
  ),
  sections: [
    {
      h: l("1. Why risk management and privacy matter", "1. لماذا تهم إدارة المخاطر والخصوصية"),
      p: [
        l(
          "Perfect security does not exist and budgets are finite. Risk management lets an organisation spend on the controls that reduce the most harm per unit of money, and consciously accept what remains. It turns security from a list of technical wishes into business decisions that management can understand and own: the accountable owner of a risk is a business role, not the security team — security advises and measures, the business accepts or funds treatment. Without this, security becomes unbounded, unmeasurable, and unowned.",
          "لا وجود لأمن مثالي والميزانيات محدودة. وتتيح إدارة المخاطر للمؤسسة الإنفاق على الضوابط التي تقلل أكبر قدر من الضرر لكل وحدة مال وقبول ما يتبقى عن وعي. فهي تحوّل الأمن من قائمة أمنيات تقنية إلى قرارات أعمال تفهمها الإدارة وتتحمل مسؤوليتها. فمالك المخاطرة المسؤول دور في الأعمال لا فريق الأمن: فالأمن يستشير ويقيس والأعمال تقبل المعالجة أو تموّلها. وبدون ذلك يصبح الأمن غير مقيد وغير قابل للقياس وغير مملوك.",
        ),
        l(
          "Risk management does not operate in a vacuum. Every risk decision is bounded by privacy and law: what data may be collected and kept, how it may be protected, what must be reported, and what testing is permitted. Privacy is about the rights of individuals over their personal data — what is collected, why, how long it is kept, and who sees it. You can have security without privacy (a well-protected database of data that should never have been collected), but you cannot have privacy without security. The two disciplines meet in every governance decision: risk tells you what to protect and how to prioritise; privacy tells you what you may hold and how you must treat it.",
          "لا تعمل إدارة المخاطر في فراغ. فكل قرار مخاطر مقيد بالخصوصية والقانون: ما البيانات التي يجوز جمعها وحفظها، وكيف تُحمي، وما يجب الإبلاغ عنه، وأي اختبار مسموح. أما الخصوصية فتتعلق بحقوق الأفراد في بياناتهم الشخصية — ما يُجمع ولماذا وكم يُحفظ ومن يطّلع عليه. ويمكن وجود أمن بلا خصوصية (قاعدة بيانات محمية جيدًا لبيانات ما كان ينبغي جمعها أصلًا) لكن لا خصوصية بلا أمن. ويلتقي التخصصان في كل قرار حوكمة: فالمخاطر تخبرك ما تحمي وكيف ترتب الأولويات؛ والخصوصية تخبرك ما يجوز حوزته وكيف يجب معاملته.",
        ),
      ],
      callout: { kind: "key", text: l("Risk management makes security a measurable, owned business decision; privacy and law define the boundary within which those decisions must be made.", "تجعل إدارة المخاطر الأمن قرار أعمال قابلًا للقياس ومملوكًا؛ وتحد الخصوصية والقانون الحدود التي يجب أن تُتخذ داخلها تلك القرارات.") },
    },
    {
      h: l("2. The risk management process and measuring risk", "2. عملية إدارة المخاطر وقياسها"),
      p: [
        l(
          "The risk management process (ISO 31000, NIST SP 800-30) is a cycle: establish context and scope → identify risks (assets, threats, vulnerabilities) → analyse them (likelihood and impact) → evaluate against the organisation's risk appetite → treat → monitor and review continuously, recording everything in a risk register with owner, rating, treatment, deadline and residual risk. Risk is never 'done': threats, assets and business goals change, so each step repeats and the register stays a living document.",
          "دورة إدارة المخاطر (ISO 31000 وNIST SP 800-30): تحديد السياق والنطاق ← تحديد المخاطر (أصول وتهديدات وثغرات) ← تحليلها (الاحتمالية والأثر) ← التقييم مقابل شهية المؤسسة للمخاطر ← المعالجة ← المراقبة والمراجعة المستمرة مع تدوين كل شيء في سجل مخاطر بالمالك والتقييم والمعالجة والموعد والخطر المتبقي. والمخاطر لا «تنتهي» أبدًا: فالتهديدات والأصول وأهداف الأعمال تتغير فتتكرر كل خطوة ويبقى السجل وثيقة حية.",
        ),
        l(
          "Qualitative analysis rates likelihood and impact on a scale (for example 1–5) and multiplies them: Risk score = Likelihood × Impact, giving Low, Medium, High or Critical bands on a heat map. It is quick and works when numbers are unavailable. Quantitative analysis expresses risk in money: Single Loss Expectancy SLE = Asset value × Exposure factor (the percentage of the asset lost in one event); Annualised Rate of Occurrence ARO = expected events per year; Annualised Loss Expectancy ALE = SLE × ARO. Worked example: a customer database worth $500,000, a breach exposing 40% (EF = 0.4) gives SLE = $200,000; if breach is expected once every four years, ARO = 0.25 and ALE = $50,000 per year. A control that reduces ALE by $35,000 per year and costs $10,000 is worth buying (net benefit $25,000); one costing $60,000 is not.",
          "يُقيس التحليل النوعي الاحتمالية والأثر على مقياس (مثل 1–5) ويضربهما: درجة الخطر = الاحتمالية × الأثر فيُعطي نطاقات منخفض ومتوسط وعالٍ وحرج على خريطة حرارية. وهو سريع ويصلح عند غياب الأرقام. أما التحليل الكمي فيعبّر عن الخطر بالمال: توقع الخسارة للحدث الواحد SLE = قيمة الأصل × عامل التعرض (نسبة ما يُفقد من الأصل في حدث واحد)؛ ومعدل الحدوث السنوي ARO = الأحداث المتوقعة سنويًا؛ وتوقع الخسارة السنوي ALE = SLE × ARO. ومثال محلول: قاعدة بيانات عملاء قيمتها 500,000 دولار، ويكشف الاختراق 40% من قيمتها (EF = 0.4) فيكون SLE = 200,000 دولار. وإذا كان الاختراق متوقعًا مرة كل أربع سنوات فإن ARO = 0.25 وALE = 50,000 دولار سنويًا. وضابط يخفض ALE بمقدار 35,000 دولار سنويًا بتكلفة 10,000 دولار يستحق الشراء (صافي الفائدة 25,000)، وضابط تكلفته 60,000 لا يستحق.",
        ),
      ],
      callout: { kind: "key", text: l("Inherent risk is the risk before controls; residual risk is what remains after controls. Management formally accepts the residual risk that remains after treatment.", "الخطر الكامن هو الخطر قبل الضوابط، والخطر المتبقي هو ما يبقى بعد الضوابط. وتقبل الإدارة رسميًا الخطر المتبقي بعد المعالجة.") },
    },
    {
      h: l("3. Risk treatment and governance frameworks", "3. معالجات المخاطر وأطر الحوكمة"),
      p: [
        l(
          "Every risk in the register gets exactly one primary treatment decision: Mitigate (add controls to lower likelihood or impact, such as MFA, patching, encryption, training); Transfer (move the financial consequence to another party, such as cyber insurance or outsourced provider); Accept (knowingly live with the risk, with approval, when control costs more than the loss); or Avoid (stop the risky activity, such as not storing card numbers or retiring a legacy system). The choice is a business decision with a cost, and it must be justified and owned.",
          "يُتخذ لكل خطر في السجل قرار معالجة رئيسي واحد: تخفيف (إضافة ضوابط لخفض الاحتمالية أو الأثر مثل MFA والترقيع والتشفير والتدريب)؛ أو نقل (تحويل الأثر المالي إلى طرف آخر كالتأمين السيبراني أو المزوّد الخارجي)؛ أو قبول (التعايش مع الخطر عن علم وبموافقة عندما تزيد تكلفة الضابط عن الخسارة)؛ أو تجنب (إيقاف النشاط الخطر كعدم تخزين أرقام البطاقات أو إيقاف نظام قديم). والاختيار قرار أعمال له تكلفة، ويجب تبريره وتحديد مالكه.",
        ),
      ],
      table: {
        head: [l("Option", "الخيار"), l("Meaning", "المعنى"), l("Example", "مثال")],
        rows: [
          [l("Mitigate (reduce)", "التخفيف"), l("Add controls to lower likelihood or impact", "إضافة ضوابط لخفض الاحتمالية أو الأثر"), l("Enable MFA, patch, encrypt, train staff", "تفعيل MFA وترقيع وتشفير وتدريب")],
          [l("Transfer (share)", "النقل"), l("Move the financial consequence to another party", "نقل الأثر المالي إلى طرف آخر"), l("Cyber insurance, outsourcing under contract", "تأمين سيبراني أو إسناد لمزوّد بعقد")],
          [l("Accept (retain)", "القبول"), l("Knowingly live with the risk, with approval", "التعايش مع الخطر عن علم وبموافقة"), l("Low-impact risk where control costs more than loss", "خطر منخفض الأثر وتكلفة الضابط أعلى من الخسارة")],
          [l("Avoid (eliminate)", "التجنب"), l("Stop the risky activity", "إيقاف النشاط الخطر"), l("Do not store card numbers; retire a legacy system", "عدم تخزين أرقام البطاقات؛ إيقاف نظام قديم")],
        ],
      },
      callout: { kind: "key", text: l("Frameworks save you from inventing controls: NIST CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover), ISO/IEC 27001 for a certifiable ISMS, and CIS Critical Security Controls as a prioritised practical list.", "توفر الأطر عليك اختراع الضوابط: NIST CSF 2.0 (الحوكمة والتعريف والحماية والكشف والاستجابة والتعافي)، وISO/IEC 27001 لنظام إدارة أمن معلومات قابل للاعتماد، وضوابط CIS الأمنية الحرجة كقائمة عملية مرتبة الأولويات.") },
    },
    {
      h: l("4. Privacy versus security and data-protection principles", "4. الخصوصية مقابل الأمن ومبادئ حماية البيانات"),
      p: [
        l(
          "Security protects data from unauthorised access, change and loss. Privacy is about the rights of individuals over their personal data: what is collected, why, how long it is kept, and who sees it. Personal data is any information relating to an identifiable person — name, ID number, e-mail, phone, IP address, location, photos. Special categories (health, biometric and genetic data, religion, political opinion, sexual orientation, children's data) need extra protection. You can have security without privacy, but not privacy without security: unprotected data cannot be kept private, yet secure data may still have been over-collected.",
          "يحمي الأمن البيانات من الوصول غير المصرح به والتغيير والفقد. أما الخصوصية فتتعلق بحقوق الأفراد في بياناتهم الشخصية: ما يُجمع ولماذا وكم يُحفظ ومن يطّلع عليه. والبيانات الشخصية هي أي معلومة تتعلق بشخص يمكن تحديده — الاسم ورقم الهوية والبريد والهاتف وعنوان IP والموقع والصور. وتحتاج الفئات الخاصة (الصحة والبيانات الحيوية والجينية والدين والرأي السياسي والميول وبيانات الأطفال) إلى حماية إضافية. ويمكن وجود أمن بلا خصوصية، لكن لا خصوصية بلا أمن: فالبياناتا غير المحمية لا يمكن إبقاؤها خاصة، مع أن البيانات الآمنة قد تكون جُملت بإفراط.",
        ),
        l(
          "The EU General Data Protection Regulation (GDPR) shaped data-protection law worldwide, and many countries have similar laws (such as personal data protection laws in Saudi Arabia, the UAE and Egypt, California's CCPA/CPRA, and Brazil's LGPD). Details differ by jurisdiction, so always check the law that applies to you and your data subjects. Common principles: lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality (security); and accountability. Data minimisation is the cheapest security control: data you never collect — or delete on time — cannot be breached.",
          "شكّلت اللائحة الأوروبية العامة لحماية البيانات (GDPR) قوانين حماية البيانات عالميًا وللعديد من الدول قوانين مماثلة (مثل أنظمة حماية البيانات الشخصية في السعودية والإمارات ومصر وCCPA/CPRA في كاليفورنيا وLGPD في البرازيل). وتختلف التفاصيل بحسب الاختصاص القضائي لذا تحقق دائمًا من القانون المنطبق عليك وعلى أصحاب بياناتك. المبادئ المشتركة: المشروعية والعدالة والشفافية؛ وتحديد الغرض؛ وتقليل البيانات؛ والدقة؛ وتحديد مدة التخزين؛ والسلامة والسرية (الأمن)؛ والمساءلة. وتقليل البيانات أرخص ضابط أمني: فالبياناتا التي لا تجمعها — أو تحذفها في الوقت المناسب — لا يمكن اختراقها.",
        ),
      ],
      callout: { kind: "key", text: l("Data minimisation is the cheapest security control: data you never collect — or delete on time — cannot be breached.", "تقليل البيانات أرخص ضابط أمني: فالبياناتا التي لا تجمعها — أو تحذفها في الوقت المناسب — لا يمكن اختراقها.") },
    },
    {
      h: l("5. Individual rights, compliance and audits", "5. حقوق الأفراد والامتثال والتدقيق"),
      p: [
        l(
          "Individuals typically have rights to be informed, to access their data, to correct it, to have it erased in certain cases, to restrict or object to processing, and to data portability. Organisations must have a legal basis for processing (consent, contract, legal obligation, legitimate interest), keep records of processing, run impact assessments for high-risk processing, build 'privacy by design and by default', sign data-processing agreements with vendors, and report personal-data breaches to the regulator (under GDPR within 72 hours of awareness) and, when risk is high, to the affected people. Fines can reach 4% of global annual turnover or €20 million under GDPR.",
          "يتمتع الأفراد عادةً بحقوق الإعلام والاطلاع على بياناتهم وتصحيحها ومحوها في حالات معينة والحد من المعالجة أو الاعتراض عليها ونقل البيانات. ويجب على المؤسسات امتلاك أساس قانوني للمعالجة (موافقة أو عقد أو التزام قانوني أو مصلحة مشروعة) والاحتفاظ بسجلات المعالجة وإجراء تقييمات أثر للمعالجة عالية المخاطر وبناء «الخصوصية بالتصميم وبالافتراضي» وتوقيع اتفاقيات معالجة بيانات مع الموردين والإبلاغ عن اختراقات البيانات الشخصية للجهة التنظيمية (وفق GDPR خلال 72 ساعة من العلم) ولأصحاب البيانات المتأثرين عند ارتفاع الخطر. وقد تصل الغرامات إلى 4% من الإيراد السنوي العالمي أو 20 مليون يورو وفق GDPR.",
        ),
        l(
          "Compliance means meeting the requirements of laws, regulations, contracts and standards — for example PCI DSS for payment-card data, HIPAA for US health information, SOX for financial reporting, ISO/IEC 27001 certification, and SOC 2 reports for service providers. Compliance is evidence that required controls existed at a point in time; security is the real, continuous ability to resist attackers. A company can pass an audit and still be breached (checklist mentality), or be secure but unable to prove it (poor documentation). Audits compare reality with requirements: internal audits find gaps early, external audits give independent assurance, and findings are tracked to closure. Aim for security first, and use compliance as a framework and a proof.",
          "الامتثال يعني الوفاء بمتطلبات القوانين واللوائح والعقود والمعايير — مثل PCI DSS لبيانات بطاقات الدفع وHIPAA للمعلومات الصحية الأمريكية وSOX للتقارير المالية وشهادة ISO/IEC 27001 وتقارير SOC 2 لمزودي الخدمات. والامتثال دليل على وجود الضوابط المطلوبة في لحظة معينة؛ والأمن هو القدرة الحقيقية والمستمرة على مقاومة المهاجمين. وقد تنجح شركة في التدقيق وتُخترق مع ذلك (عقلية قائمة الفحص)، أو تكون آمنة لكنها عاجزة عن الإثبات (توثيق ضعيف). وتقارن عمليات التدقيق الواقع بالمتطلبات: فالتدقيق الداخلي يكشف الثغرات مبكرًا والتدقيق الخارجي يمنح ضمانًا مستقلًا، وتُتابع الملاحظات حتى الإغلاق. اسعَ إلى الأمن أولًا واستخدم الامتثال كإطار وكدليل.",
        ),
      ],
      callout: { kind: "key", text: l("Compliance is evidence at a point in time; security is continuous. Aim for security first and use compliance as a framework and proof — not as a substitute for it.", "الامتثال دليل في لحظة زمنية والأمن مستمر. اسعَ إلى الأمن أولًا واستخدم الامتثال كإطار وكدليل — لا كبديل عنه.") },
    },
    {
      h: l("6. Law, ethical hacking and responsible disclosure", "6. القانون والاختراق الأخلاقي والإفصاح المسؤول"),
      p: [
        l(
          "Almost every country criminalises unauthorised access to computer systems (for example the US Computer Fraud and Abuse Act, the UK Computer Misuse Act, and national cybercrime laws across the Arab world and the EU). Good intentions are not a legal defence: scanning, probing or logging into a system without permission can be an offence even if you cause no damage and report what you found. The difference between a security professional and a criminal is authorisation. Never test, scan or 'just look' at systems you do not own or have written authorisation for — including your school, employer, neighbours and websites.",
          "تجرّم كل دولة تقريبًا الوصول غير المصرح به إلى أنظمة الحاسوب (مثل قانون الاحتيال وإساءة استخدام الحاسوب الأمريكي وقانون إساءة استخدام الحاسوب البريطاني وقوانين الجرائم المعلوماتية الوطنية في العالم العربي والاتحاد الأوروبي). وحسن النية ليس دفاعًا قانونيًا: فمسح نظام أو فحصه أو الدخول إليه دون إذن قد يكون جريمة حتى لو لم تسبب ضررًا وأبلغت عمّا وجدت. والفرق بين المتخصص الأمني والمجرم هو التفويض. ولا تختبر أو تمسح أو «تتفرج فقط» على أنظمة لا تملكها أو ليس لديك تفويض كتابي بشأنها — ومنها مدرستك وجهة عملك وجيرانك والمواقع.",
        ),
        l(
          "Ethical (authorised) security testing follows strict rules: written permission from someone with authority; a defined scope (which systems, which dates, which techniques); rules of engagement (no denial of service, no data destruction, stop and report if real sensitive data or a crime is found); confidentiality of findings; a report with remediation advice; and, for vulnerabilities found by chance, responsible (coordinated) disclosure — privately inform the owner, allow reasonable time to fix, do not exploit, copy data or publish details prematurely. Use legal practice environments: your own virtual machines, intentionally vulnerable training labs, and bug-bounty programmes within their published rules.",
          "يتبع اختبار الأمن الأخلاقي (المصرح به) قواعد صارمة: إذن كتابي من صاحب صلاحية؛ ونطاق محدد (أي الأنظمة وأي التواريخ وأي التقنيات)؛ وقواعد الاشتباك (لا حجب خدمة ولا إتلاف بيانات وتوقف وأبلغ إن وجدت بيانات حساسة حقيقية أو جريمة)؛ وسرية النتائج؛ وتقرير بنصائح المعالجة؛ وبالنسبة للثغرات المكتشفة بالصدفة الإفصاح المسؤول (المنسَّق) — أبلغ المالك سرًا وامنحه وقتًا معقولًا للإصلاح ولا تستغل ولا تنسخ بيانات ولا تنشر التفاصيل قبل الأوان. واستخدم بيئات تدريب قانونية: أجهزتك الافتراضية ومختبرات تدريب ضعيفة عمدًا وبرامج مكافآت الثغرات ضمن قواعدها المنشورة.",
        ),
      ],
      callout: { kind: "warn", text: l("Authorisation — not intent or skill — defines ethical security work. Written permission, defined scope and rules of engagement make the same technical actions lawful.", "التفويض — لا النية أو المهارة — هو ما يحدد العمل الأمني الأخلاقي. فالإذن الكتابي والنطاق المحدد وقواعد الاشتباك تجعل الأفعال التقنية نفسها قانونية.") },
    },
    {
      h: l("7. Governance, risk and privacy in practice", "7. الحوكمة والمخاطر والخصوصية في التطبيق"),
      p: [
        l(
          "Risk management and privacy come together in governance. Documents form a hierarchy: a policy states management's mandatory intent (for example 'all laptops must be encrypted'); standards give specific required settings (AES-256, BitLocker); procedures give step-by-step instructions; guidelines give non-mandatory advice. Policies need executive approval, communication, training, and enforcement with a defined exception process. Governance is how direction is set and responsibility assigned, and it is where risk decisions and privacy obligations are recorded, owned and enforced.",
          "تلتقي إدارة المخاطر والخصوصية في الحوكمة. فتشكّل الوثائق تسلسلًا هرميًا: السياسة تعبّر عن مراد الإدارة الإلزامي (مثل «يجب تشفير كل الحواسيب المحمولة»)؛ والمعايير تحدد الإعدادات المطلوبة (AES-256 وBitLocker)؛ والإجراءات تعطي خطوات تفصيلية؛ والإرشادات نصائح غير إلزامية. وتحتاج السياسات إلى اعتماد تنفيذي وإبلاغ وتدريب وإنفاذ مع عملية استثناءات محددة. والحوكمة هي كيفية وضع التوجيه وتحديد المسؤولية، وهي حيث تُسجل قرارات المخاطر والتزامات الخصوصية وتُحدد مالكوها وتُنفّذ.",
        ),
        l(
          "Business continuity completes the picture. A Business Impact Analysis (BIA) finds which processes matter most and how long they can be down. RTO (Recovery Time Objective) is the maximum acceptable downtime; RPO (Recovery Point Objective) is the maximum acceptable data loss measured in time (a 4-hour RPO means backups at least every 4 hours). Plans must be written, owned and exercised, because untested plans fail. Every continuity decision is also a risk and privacy decision: what data you must keep to recover, and for how long, must respect storage limitation and minimisation.",
          "تكمل استمرارية الأعمال الصورة. فتحليل أثر الأعمال (BIA) يحدد أي العمليات الأهم وكم يمكن أن تتوقف. وزمن الاستعادة المستهدف RTO هو أقصى توقف مقبول؛ ونقطة الاستعادة المستهدفة RPO هي أقصى فقد بيانات مقبول مقيسًا بالزمن (RPO بأربع ساعات يعني نسخًا احتياطيًا كل أربع ساعات على الأقل). ويجب كتابة الخطط وتحديد مالكيها وتمرينها لأن الخطط غير المختبرة تفشل. وكل قرار استمرارية هو أيضًا قرار مخاطر وخصوصية: ما البيانات التي يجب الاحتفاظ بها للتعافي، ومدى久ٍ، يجب أن يحترم تحديد مدة التخزين وتقليل البيانات.",
        ),
      ],
      callout: { kind: "key", text: l("Governance turns risk and privacy from principles into owned, enforced, measurable practice — policies, standards, continuity and accountability working together.", "تحوّل الحوكمة المخاطر والخصوصية من مبادئ إلى تطبيق مملوك ومُنفّذ وقابل للقياس — سياسات ومعايير واستمرارية ومساءلة تعمل معًا.") },
    },
    {
      h: l("8. Bringing it together: defensible decisions", "8. جمع الأفكار: قرارات قابلة للدفاع"),
      p: [
        l(
          "Risk management and privacy are two halves of one discipline: deciding, lawfully and ethically, what to protect and how. Risk tells you what could harm the organisation and how to prioritise limited resources, through a repeatable process of identify, analyse, evaluate, treat and monitor, measured qualitatively and quantitatively. Privacy and law tell you the boundary: what data you may hold, what rights individuals have, what compliance demands, and what testing is authorised. A security professional who can rate a risk, justify a treatment, name a framework, and recognise when an action crosses into the illegal or unethical, makes decisions that are defensible to management, to regulators and to the individuals whose data is held. Practising that judgement — as you will in the lab — is the heart of this session.",
          "إدارة المخاطر والخصوصية نصفا تخصص واحد: تقرير ما تحمي وكيف، بقانونية وأخلاقية. فالمخاطر تخبرك ما قد يضرّ المؤسسة وكيف ترتب الموارد المحدودة، عبر عملية متكررة من التحديد والتحليل والتقييم والمعالجة والمراقبة، تُقاس نوعيًا وكميًا. وتخبرك الخصوصية والقانون الحد: ما البيانات التي يجوز حوزتها، وما حقوق الأفراد، وما يفرض الامتثال، وأي اختبار مصرح به. والمتخصص الأمني الذي يستطيع تسجيل مخاطر وتبرير معالجة وتسمية إطار ومعرفة متى يتجاوز الفعل إلى غير القانوني أو غير الأخلاقي، يتخذ قرارات قابلة للدفاع أمام الإدارة والجهات التنظيمية والأفراد الذين تُحتفظ ببياناتهم. ومجربة هذا الحكم — كما ستفعل في المختبر — هو قلب هذه الجلسة.",
        ),
      ],
    },
  ],
  diagram: {
    kind: "cycle",
    title: l("The risk management cycle", "دورة إدارة المخاطر"),
    caption: l("Risk is never 'done': threats, assets and business goals change, so each step repeats and the risk register stays a living document — bounded by privacy and law.", "المخاطر لا «تنتهي» أبدًا: فالتهديدات والأصول وأهداف الأعمال تتغير فتتكرر كل خطوة ويبقى سجل المخاطر وثيقة حية — ضمن حدود الخصوصية والقانون."),
    nodes: [
      { label: l("Establish context", "تحديد السياق"), desc: l("Scope, assets, risk appetite", "النطاق والأصول وشهية المخاطر") },
      { label: l("Identify risks", "تحديد المخاطر"), desc: l("Threat + vulnerability + asset", "تهديد + ثغرة + أصل") },
      { label: l("Analyse", "التحليل"), desc: l("Likelihood × impact (or ALE)", "الاحتمالية × الأثر (أو ALE)") },
      { label: l("Evaluate", "التقييم"), desc: l("Compare with appetite, rank", "المقارنة بالشهية والترتيب") },
      { label: l("Treat", "المعالجة"), desc: l("Mitigate, transfer, accept, avoid", "تخفيف ونقل وقبول وتجنب") },
      { label: l("Monitor & review", "المراقبة والمراجعة"), desc: l("Update register, track residual", "تحديث السجل وتتبع المتبقي") },
    ],
  },
  examples: [
    l(
      "A control that reduces annualised loss expectancy (ALE) by $35,000 per year and costs $10,000 per year is worth buying (net benefit $25,000); a control costing $60,000 per year is not. Quantifying risk in money turns a technical preference into a business decision management can fund or decline.",
      "ضابط يخفض توقع الخسارة السنوي (ALE) بمقدار 35,000 دولار سنويًا بتكلفة 10,000 دولار يستحق الشراء (صافي الفائدة 25,000)، وضابط تكلفته 60,000 لا يستحق. فقياس المخاطر بالمال يحوّل التفضيل التقني إلى قرار أعمال تستطيع الإدارة تمويله أو رفضه.",
    ),
    l(
      "Buying cyber insurance does not remove the risk of a breach; it transfers the financial consequence to the insurer while the risk itself remains. The organisation still must mitigate, because a transferred risk that materialises still damages reputation, operations and customers.",
      "لا يزيل شراء التأمين السيبراني خطر الاختراق؛ بل ينقل الأثر المالي إلى شركة التأمين بينما يبقى الخطر نفسه. ولا تزال المؤسسة يجب أن تخفف، لأن الخطر المنقول الذي يتحقق لا يزال يضر بالسمعة والعمليات والعملاء.",
    ),
    l(
      "Data minimisation is the cheapest control: a customer database that never collects payment card numbers cannot be breached through card data, and deleting data when its purpose is fulfilled removes future exposure and obligation at no technical cost.",
      "تقليل البيانات أرخص ضابط: فقاعدة بيانات عملاء لا تجمع أرقام بطاقات الدفع أبدًا لا يمكن اختراقها عبر بيانات البطاقات، وحذف البيانات عند انفاء الغرض يزيل التعرض والالتزام المستقبلي بلا تكلفة تقنية.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A company passes a PCI DSS audit but is later breached through an unpatched server. Compliance proved controls existed at a point in time, but security — continuous patching and detection — was not strong enough. The lesson: use compliance as a framework and proof, not as a substitute for real security.",
      "تنجح شركة في تدقيق PCI DSS لكنها تُخترق لاحقًا عبر خادم غير محدّث. فقد أثبت الامتثال وجود الضوابط في لحظة زمنية، لكن الأمن — الترقيع المستمر والكشف — لم يكن قويًا بما يكفي. والدرس: استخدم الامتثال كإطار وكدليل، لا كبديل عن الأمن الحقيقي.",
    ),
    l(
      "A security researcher finds an exposed customer database by accident. Ethical response: report it privately through the vendor's disclosure channel, allow time to fix, and do not download or exploit the data. This responsible disclosure protects the users and keeps the researcher on the lawful side of the line.",
      "يكتشف باحث أمني قاعدة بيانات عملاء مكشوفة بالصدفة. والاستجابة الأخلاقية: الإبلاغ عنها سرًا عبر قناة الإفصاح لدى المورّد وإتاحة وقت للإصلاح دون تنزيل البيانات أو استغلالها. فيحمي الإفصاح المسؤول المستخدمين ويبقي الباحث في الجانب القانوني من الخط.",
    ),
    l(
      "A risk register records a ransomware risk rated Critical with a decision to mitigate via offline backups and MFA, and the residual risk formally accepted by management with a review date. The decision is owned, costed, justified and bounded — a defensible governance outcome, not an ad hoc reaction.",
      "يسجل سجل مخاطر خطر فدية مُصنَّف حرج مع قرار التخفيف عبر نسخ احتياطية معزولة وMFA، ويُقبل الخطر المتبقي رسميًا من الإدارة مع تاريخ مراجعة. فالقرار مملوك ومكلف ومُبرَّر ومحدود — نتيجة حوكمة قابلة للدفاع، لا رد فعل عشوائي.",
    ),
  ],
  instructorDemo: l(
    "Demonstrate the lab's matching tool live: present the first two or three situations and reason aloud about whether each is permitted as described, needs written authorisation first, or is illegal/unethical. Emphasise the decision rule — authorisation, defined scope and rules of engagement — and why intent or skill does not make an unauthorised action lawful.",
    "اعرض أداة المطابقة في المختبر مباشرةً: اعرض أول موقفين أو ثلاثة وسِّر بصوت عالٍ لماذا يُسمح بكل منها كما وُصف أو يحتاج تفويضًا كتابيًا أولًا أو هو مخالف للقانون/الأخلاق. وركّز على قاعدة القرار — التفويض والنطاق المحدد وقواعد الاشتباك — ولماذا لا تجعل النية أو المهارة الفعل غير المصرح قانونيًا.",
  ),
  exercises: [
    {
      title: l("Classify ethical and legal situations", "تصنيف المواقف الأخلاقية والقانونية"),
      instructions: l(
        "In the lab, read each situation and classify it as permitted as described, needing written authorisation first, or illegal/unethical. After checking, review the corrections and explain the rule behind each classification.",
        "في المختبر، اقرأ كل موقف وصنّفه كمسموح كما وُصف أو يحتاج تفويضًا كتابيًا أولًا أو مخالف للقانون/الأخلاق. وبعد التحقق، راجع التصحيحات واشرح القاعدة خلف كل تصنيف.",
      ),
      expected: l("Correct classification of each situation, with an explanation that authorisation, defined scope and rules of engagement — not intent or skill — define lawful, ethical security work.", "تصنيف صحيح لكل موقف، مع شرح أن التفويض والنطاق المحدد وقواعد الاشتباك — لا النية أو المهارة — هي ما يحدد العمل الأمني القانوني الأخلاقي."),
    },
    {
      title: l("Treat a risk and state the privacy boundary", "معالجة مخاطر وذكر حد الخصوصية"),
      instructions: l(
        "Choose one risk from a small register, pick a treatment (mitigate, transfer, accept or avoid), justify it, and state the privacy principle that constrains how the risk and any data involved must be handled.",
        "اختر مخاطرة واحدة من سجل صغير، واختر معالجة (تخفيف أو نقل أو قبول أو تجنب)، وبررها، واذكر مبدأ الخصوصية الذي يحد كيفية معالجة الخطر وأي بيانات متضمنة.",
      ),
      expected: l("A justified treatment and a correct privacy principle (for example data minimisation or storage limitation) that bounds how the risk is handled.", "معالجة مبررة ومبدأ خصوصية صحيح (مثل تقليل البيانات أو تحديد مدة التخزين) يحد كيفية معالجة الخطر."),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can run the risk management process, measure risk qualitatively and quantitatively, choose and justify treatments within governance frameworks, distinguish privacy from security, state data-protection principles and individual rights, explain compliance and audits, apply the rules of ethical hacking and responsible disclosure, and classify real situations as permitted, requiring authorisation, or illegal/unethical.",
    "بنهاية الجلسة يستطيع المتعلمون تنفيذ عملية إدارة المخاطر، وقياس المخاطر نوعيًا وكميًا، واختيار المعالجات وتبريرها ضمن أطر الحوكمة، والتمييز بين الخصوصية والأمن، وذكر مبادئ حماية البيانات وحقوق الأفراد، وشرح الامتثال والتدقيق، وتطبيق قواعد الاختراق الأخلاقي والإفصاح المسؤول، وتصنيف مواقف حقيقية كمسموح أو يحتاج تفويضًا أو مخالف للقانون/الأخلاق.",
  ),
  commonMistakes: [
    l(
      "Treating risk management as a one-off exercise instead of a continuous cycle, leaving the register stale and treatments unreviewed.",
      "التعامل مع إدارة المخاطر كنشاط لمرة واحدة بدل دورة مستمرة، فيبقى السجل قديمًا والمعالجات غير مُراجعة.",
    ),
    l(
      "Choosing a treatment without justification or ownership, so the decision is neither defensible nor funded.",
      "اختيار معالجة دون تبرير أو ملكية، فيصبح القرار غير قابل للدفاع وغير ممول.",
    ),
    l(
      "Confusing compliance with security: assuming passing an audit means the organisation cannot be breached.",
      "الخلط بين الامتثال والأمن: افتراض أن اجتياز التدقيق يعني أن المؤسسة لا يمكن اختراقها.",
    ),
    l(
      "Assuming good intentions make unauthorised access lawful, or testing systems without written permission and defined scope.",
      "افتراض أن حسن النية يجعل الوصول غير المصرح قانونيًا، أو اختبار أنظمة دون إذن كتابي ونطاق محدد.",
    ),
    l(
      "Over-collecting and keeping personal data indefinitely, ignoring data minimisation and storage limitation.",
      "جمع البيانات الشخصية بإفراط والاحتفاظ بها إلى ما لا نهاية، متجاهلاً تقليل البيانات وتحديد مدة التخزين.",
    ),
  ],
  bestPractices: [
    l(
      "Run risk management as a continuous cycle: identify, analyse, evaluate, treat and monitor, with a living risk register.",
      "أدِر المخاطر كدورة مستمرة: تحديد وتحليل وتقييم ومعالجة ومراقبة، مع سجل مخاطر حي.",
    ),
    l(
      "Measure risk both qualitatively and quantitatively, and justify every treatment with a cost and an owner.",
      "اقبض المخاطر نوعيًا وكميًا، وبرر كل معالجة بتكلفة ومالك.",
    ),
    l(
      "Use governance frameworks (NIST CSF, ISO 27001, CIS Controls) to avoid inventing controls, and treat compliance as proof, not a substitute for security.",
      "استخدم أطر الحوكمة (NIST CSF وISO 27001 وضوابط CIS) لتجنب اختراع الضوابط، واعتبر الامتثال دليلًا لا بديلًا عن الأمن.",
    ),
    l(
      "Apply data minimisation and storage limitation: collect and keep only what is necessary, for as long as necessary.",
      "طبّق تقليل البيانات وتحديد مدة التخزين: اجمع واحفظ ما هو ضروري فقط، وللضرورة فقط.",
    ),
    l(
      "Never test or access systems without written authorisation and a defined scope; disclose vulnerabilities responsibly.",
      "لا تختبر أو تصل إلى أنظمة دون تفويض كتابي ونطاق محدد؛ وأفصِح عن الثغرات بمسؤولية.",
    ),
  ],
  keyTakeaways: [
    l("Risk management makes security a measurable, owned business decision through a continuous identify–analyse–evaluate–treat–monitor cycle.", "تجعل إدارة المخاطر الأمن قرار أعمال قابلًا للقياس ومملوكًا عبر دورة مستمرة من التحديد والتحليل والتقييم والمعالجة والمراقبة."),
    l("Measure risk qualitatively (likelihood × impact) and quantitatively (SLE, ARO, ALE); treat by mitigating, transferring, accepting or avoiding.", "اقبض المخاطر نوعيًا (الاحتمالية × الأثر) وكميًا (SLE وARO وALE)؛ وعالجه بالتخفيف أو النقل أو القبول أو التجنب."),
    l("Privacy is about individual rights over personal data; you cannot have privacy without security, but security alone does not justify over-collection.", "الخصوصية تتعلق بحقوق الأفراد في بياناتهم الشخصية؛ ولا خصوصية بلا أمن، لكن الأمن وحده لا يبرر الجمع المفرط."),
    l("Compliance is evidence at a point in time; security is continuous. Use compliance as a framework and proof, not a substitute.", "الامتثال دليل في لحظة زمنية والأمن مستمر. فاستخدم الامتثال كإطار وكدليل، لا كبديل."),
    l("Authorisation — not intent or skill — defines ethical security work. Written permission, defined scope and rules of engagement are non-negotiable.", "التفويض — لا النية أو المهارة — هو ما يحدد العمل الأمني الأخلاقي. فالإذن الكتابي والنطاق المحدد وقواعد الاشتباك غير قابلة للمساومة."),
  ],
  lab: {
    title: l("Lab 18 — Legal or Not? Risk, Privacy and Ethical Decision Drill", "المختبر 18 — قانوني أم لا؟ تمرين اتخاذ القرار للمخاطر والخصوصية والأخلاق"),
    scenario: l(
      "As a security analyst you face several situations that combine risk, privacy and ethics. For each, decide whether the action is permitted as described, requires written authorisation first, or is illegal/unethical. Use the matching simulator (display only; nothing is executed or changed on a real system) to classify each situation and review the reasoning.",
      "بصفتك محلل أمن تواجه عدة مواقف تجمع المخاطر والخصوصية والأخلاق. لكل موقف قرر هل الفعل مسموح كما وُصف أم يتطلب تفويضًا كتابيًا أولًا أم هو مخالف للقانون/الأخلاق. استخدم محاكي المطابقة (عرض فقط؛ لا يُنفذ أو يُغيّر شيء على أي نظام حقيقي) لتصنيف كل موقف ومراجعة التعليل.",
    ),
    safety: l(
      "This lab is about judgement, not technique. It is general education and not legal advice: laws differ between countries, so consult qualified legal counsel for real situations. The simulator only classifies text you read; nothing is scanned, tested or changed on any real system.",
      "يتناول هذا المختبر الحكم لا التقنية. وهو تعليم عام وليس استشارة قانونية: فالقوانين تختلف بين الدول لذا استشر مستشارًا قانونيًا مؤهلًا في المواقف الحقيقية. والمحاكي يصنّف فقط النص الذي تقرؤه؛ ولا يُفحص أو يُختبر أو يُغيّر أي شيء على أي نظام حقيقي.",
    ),
    steps: [
      l("Re-read the principle of authorisation: written permission + defined scope + rules of engagement", "أعد قراءة مبدأ التفويض: إذن كتابي + نطاق محدد + قواعد اشتباك"),
      l("Classify each situation as permitted, needs authorisation, or illegal/unethical", "صنّف كل موقف كمسموح أو يحتاج تفويضًا أو مخالف للقانون/الأخلاق"),
      l("Check your answers and read the corrections", "تحقق من إجاباتك واقرأ التصحيحات"),
      l("For the illegal/unethical items, write the ethical alternative", "للبنود المخالفة اكتب البديل الأخلاقي"),
      l("Draft a one-paragraph rules-of-engagement summary for an authorised test", "صُغ فقرة قصيرة لقواعد الاشتباك لاختبار مصرح به"),
      l("State which privacy principle most constrains how you would handle each risk", "اذكر أي مبدأ خصوصية يحد أكثر كيفية تعاملاك مع كل خطر"),
    ],
    expected: l(
      "Correct classification of each situation, a short rules-of-engagement paragraph, and a clear understanding that authorisation and defined scope — not intent or skill — define lawful, ethical security and privacy decisions.",
      "تصنيف صحيح لكل موقف، وفقرة قصيرة لقواعد الاشتباك، وفهم واضح أن التفويض والنطاق المحدد — لا النية أو المهارة — هما ما يحدد قرارات الأمن والخصوصية القانونية والأخلاقية.",
    ),
    tool: "match",
    match: {
      prompt: l("Decide for each situation", "قرر لكل موقف"),
      options: [l("Permitted as described", "مسموح كما وُصف"), l("Needs written authorisation first", "يحتاج تفويضًا كتابيًا أولًا"), l("Illegal or unethical", "مخالف للقانون أو للأخلاق")],
      items: [
        { text: l("Running a vulnerability scan on your employer's servers exactly as assigned in a signed scope document, during the agreed window.", "تشغيل فحص ثغرات على خوادم جهة عملك تمامًا كما أُسند في وثيقة نطاق موقّعة وخلال الوقت المتفق عليه."), answer: 0 },
        { text: l("Scanning a neighbour's Wi-Fi router 'out of curiosity' to see if it is secure.", "مسح موجّه واي فاي جارك «بدافع الفضول» لمعرفة إن كان آمنًا."), answer: 2 },
        { text: l("Performing a penetration test of a client's public website.", "تنفيذ اختبار اختراق لموقع عميل عام."), answer: 1 },
        { text: l("Finding an exposed customer database on the Internet and downloading records to 'prove' the problem.", "العثور على قاعدة بيانات عملاء مكشوفة على الإنترنت وتنزيل سجلات «لإثبات» المشكلة."), answer: 2 },
        { text: l("Privately reporting an accidentally noticed vulnerability to the vendor via its disclosure policy, without exploiting it further.", "الإبلاغ سرًا عن ثغرة لوحظت بالصدفة إلى المورّد عبر سياسة الإفصاح لديه دون استغلالها أكثر."), answer: 0 },
        { text: l("Reading a colleague's HR file out of curiosity because your admin account technically allows it.", "قراءة ملف موارد بشرية لزميل بدافع الفضول لأن حساب المدير لديك يسمح بذلك تقنيًا."), answer: 2 },
        { text: l("Sending a simulated phishing campaign to all staff to measure awareness.", "إرسال حملة تصيّد محاكاة إلى كل الموظفين لقياس الوعي."), answer: 1 },
      ],
    },
    objectives: [
      l("Classify each situation as permitted, needing authorisation, or illegal/unethical", "تصنيف كل موقف كمسموح أو يحتاج تفويضًا أو مخالف للقانون/الأخلاق"),
      l("Apply the decision rule: authorisation, defined scope and rules of engagement", "تطبيق قاعدة القرار: التفويض والنطاق المحدد وقواعد الاشتباك"),
      l("Distinguish lawful, ethical security work from unauthorised access", "التمييز بين العمل الأمني القانوني الأخلاقي والوصول غير المصرح به"),
      l("Write the ethical alternative for each illegal/unethical action", "كتابة البديل الأخلاقي لكل فعل مخالف للقانون/الأخلاق"),
      l("State the privacy principle constraining each risk-handling decision", "ذكر مبدأ الخصوصية الذي يحد كل قرار معالجة مخاطر"),
    ],
    prerequisites: [
      l("Session 14: how risks are identified from vulnerabilities and scored", "الجلسة 14: كيف تُحدد المخاطر من الثغرات وتُسجّل"),
      l("Session 16: how legal duties such as breach notification arise during incidents", "الجلسة 16: كيف تنشأ الواجبات القانونية مثل إخطار الاختراق أثناء الحوادث"),
    ],
    environment: l(
      "The companion matching simulator in a browser (display only). No real systems are scanned, tested or changed. All classification is performed on the text you read, and all answers are simulated on screen.",
      "محاكي المطابقة المرافق في متصفح (عرض فقط). لا تُفحص أو تُختبر أو تُغيّر أنظمة حقيقية. وجميع التصنيفات تُجرى على النص الذي تقرؤه، وجميع الإجابات محاكاة على الشاشة.",
    ),
    tools: [
      l("Legal/ethical decision matching simulator (companion browser tool, display only)", "محاكي مطابقة القرار القانوني/الأخلاقي (أداة متصفح مساندة، عرض فقط"),
      l("Risk-treatment and privacy-principles reference (for the classification discussion)", "مرجع معالجات المخاطر ومبادئ الخصوصية (لنقاش التصنيف"),
    ],
    authorization: l(
      "Scope: use the display-only simulator to classify situations. Prohibited: scanning, testing, accessing or changing any real system without written authorization and a defined scope. Stop condition: if asked to perform or justify any real action on a system, stop and confirm authorization and legal advice first.",
      "النطاق: استخدم محاكٍ العرض فقط لتصنيف المواقف. المحظور: فحص أو اختبار أو الوصول إلى أو تغيير أي نظام حقيقي دون تصريح كتابي ونطاق محدد. شرط التوقف: إذا طُلب منك تنفيذ أو تبرير أي فعل حقيقي على نظام، توقف وتحقق من التصريح والمشورة القانونية أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Re-read the authorisation principle", "أعد قراءة مبدأ التفويض"),
        command: "Matching simulator: review the decision rule",
        explanation: l(
          "Re-read the decision rule: an action is permitted only with written permission, a defined scope and agreed rules of engagement. Without these, even well-intentioned technical acts can be unlawful. Fix this rule in mind before classifying the situations.",
          "أعد قراءة قاعدة القرار: لا يُسمح بأي فعل إلا بإذن كتابي ونطاق محدد وقواعد اشتباك متفق عليها. وبدونها قد تكون الأفعال التقنية ذات النيات الحسنة غير قانونية. فثبّت هذه القاعدة في ذهنك قبل تصنيف المواقف.",
        ),
        expected: l("You can state the three conditions that make a security action lawful and ethical.", "يمكنك ذكر الشروط الثلاثة التي تجعل الفعل الأمني قانونيًا وأخلاقيًا."),
      },
      {
        title: l("Classify the situations", "تصنيف المواقف"),
        command: "Matching simulator: match each situation",
        explanation: l(
          "Read each situation and classify it into one of the three categories: permitted as described (authorisation already in place), needs written authorisation first (technically possible but not yet authorised), or illegal/unethical (no authorisation or the act itself is harmful). Match each situation to its category.",
          "اقرأ كل موقف وصنّفه في إحدى الفئات الثلاث: مسموح كما وُصف (التفويض موجود بالفعل)، أو يحتاج تفويضًا كتابيًا أولًا (ممكن تقنيًا لكن لم يُصرّح به بعد)، أو مخالف للقانون/الأخلاق (لا تفويض أو الفعل نفسه ضار). وزاوج كل موقف بفئته.",
        ),
        expected: l("You can classify each situation into the correct category.", "يمكنك تصنيف كل موقف في الفئة الصحيحة."),
      },
      {
        title: l("Check and review", "تحقق وراجع"),
        command: "Matching simulator: check answers",
        explanation: l(
          "Check your classifications and review the corrections for any you placed incorrectly. For each correction, note the rule that determined the right category — for example, that a signed scope document makes an assigned scan permitted, while curiosity-driven scanning of a neighbour's router is not.",
          "تحقق من تصنيفاتك وراجع التصحيحات لكل موقف وضعته خطأ. ولكل تصحيح، لاحظ القاعدة التي حددت الفئة الصحيحة — مثل أن وثيقة نطاق موقّعة تجعل الفحص المسند مسموحًا، بينما مسح موجّه الجار بدافع الفضول غير مسموح.",
        ),
        expected: l("You can reach the correct classifications and explain the rule behind each.", "يمكنك الوصول إلى التصنيفات الصحيحة وشرح القاعدة خلف كل منها."),
      },
      {
        title: l("Write the ethical alternative", "اكتب البديل الأخلاقي"),
        command: "Case log: ethical alternatives",
        explanation: l(
          "For each situation you classified as illegal or unethical, write the ethical alternative. For example, instead of downloading an exposed database to 'prove' the problem, report it privately through the vendor's disclosure channel without exploiting or copying data.",
          "لكل موقف صنّفته كمخالف للقانون أو للأخلاق، اكتب البديل الأخلاقي. مثلًا، بدل تنزيل قاعدة بيانات مكشوفة «لإثبات» المشكلة، أبلغ عنها سرًا عبر قناة الإفصاح لدى المورّد دون استغلال أو نسخ بيانات.",
        ),
        expected: l("You can write a lawful, ethical alternative for each illegal/unethical action.", "يمكنك كتابة بديل قانوني أخلاقي لكل فعل مخالف للقانون/الأخلاق."),
      },
      {
        title: l("Draft rules of engagement", "صُغ قواعد الاشتباك"),
        command: "Case log: rules-of-engagement paragraph",
        explanation: l(
          "Draft a one-paragraph rules-of-engagement summary for an authorised penetration test of a small web shop: the scope, the dates, the forbidden actions (no denial of service, no data destruction), the contacts and the reporting route. This is the document that makes the test lawful and ethical.",
          "صُغ فقرة قصيرة لقواعد الاشتباك لاختبار اختراق مصرح به لمتجر ويب صغير: النطاق والتواريخ والأفعال المحظورة (لا حجب خدمة ولا إتلاف بيانات) وجهات الاتصال وطريق الإبلاغ. فهذه الوثيقة هي ما يجعل الاختبار قانونيًا وأخلاقيًا.",
        ),
        expected: l("You can draft a rules-of-engagement paragraph covering scope, dates, forbidden actions, contacts and reporting.", "يمكنك صياغة فقرة قواعد اشتباك تغطي النطاق والتواريخ والأفعال المحظورة وجهات الاتصال والإبلاغ."),
      },
      {
        title: l("State the privacy constraint", "اذكر قيد الخصوصية"),
        command: "Case log: privacy principle per risk",
        explanation: l(
          "For a risk you might treat, state the privacy principle that constrains how you handle it — for example, data minimisation (collect only what is necessary) or storage limitation (delete when the purpose ends). Explain why the principle applies and how it changes the treatment.",
          "لمخاطرة قد تعالجها، اذكر مبدأ الخصوصية الذي يحد كيفية تعاملاك معها — مثل تقليل البيانات (اجمع ما هو ضروري فقط) أو تحديد مدة التخزين (احذف عند انفاء الغرض). واشرح سبب انطباق المبدأ وكيف يغيّر المعالجة.",
        ),
        expected: l("You can name a privacy principle and explain how it constrains a risk-handling decision.", "يمكنك تسمية مبدأ خصوصية وشرح كيف يحد قرار معالجة المخاطر."),
      },
    ],
    troubleshooting: [
      {
        problem: l("A situation seems both permitted and needing authorisation", "يبدو موقف ما مسموحًا ويحتاج تفويضًا في آن"),
        fix: l("Ask: is written permission and a defined scope already in place? If yes, it is permitted as described; if the action is merely technically possible but not yet authorised, it needs authorisation first. Intent or skill never substitutes for the document.", "اسأل: هل الإذن الكتابي والنطاق المحدد موجودان بالفعل؟ إذا كان الجواب نعم فالفعل مسموح كما وُصف؛ وإذا كان ممكنًا تقنيًا فقط لكن لم يُصرّح به بعد فهو يحتاج تفويضًا أولًا. ولا تُعوض النية أو المهارة الوثيقة أبدًا."),
      },
      {
        problem: l("Confusing a vulnerability found by accident with licence to exploit it", "الخلط بين ثغرة وُجدت بالصدفة وترخيص لاستغلالها"),
        fix: l("Finding a flaw does not authorise exploiting it, copying data or publishing it. The ethical path is responsible disclosure: report privately, allow time to fix, and do not exploit or publish prematurely.", "اكتشاف ثغرة لا يصرّح باستغلالها أو نسخ بياناتها أو نشرها. فالبضع الأخلاقي هو الإفصاح المسؤول: الإبلاغ سرًا وإتاحة وقت للإصلاح دون استغلال أو نشر قبل الأوان."),
      },
      {
        problem: l("Unsure which privacy principle applies", "لست متأكدًا أي مبدأ خصوصية ينطبق"),
        fix: l("Match the principle to the decision: if the issue is how much data to hold, it is data minimisation; if how long to keep it, storage limitation; if who may see it, integrity and confidentiality. Each risk-handling decision is bounded by at least one principle.", "زاوج المبدأ بالقرار: إذا كانت المشكلة كم البيانات التي تُحوز فالمبدأ هو تقليل البيانات؛ وإذا كانت المدة فتحديد مدة التخزين؛ وإذا كانت من يطّلع فسلامة وسرية. فكل قرار معالجة مخاطر يقيد بأحد المبادئ على الأقل."),
      },
    ],
    deliverables: [
      l("The correct classification of each situation into the three categories", "التصنيف الصحيح لكل موقف في الفئات الثلاث"),
      l("A note of the decision rule applied to each classification", "ملاحظة بقاعدة القرار المطبقة على كل تصنيف"),
      l("Ethical alternatives written for each illegal/unethical action", "بدائل أخلاقية مكتوبة لكل فعل مخالف للقانون/الأخلاق"),
      l("A one-paragraph rules-of-engagement summary", "فقرة قصيرة لقواعد الاشتباك"),
      l("The privacy principle constraining a chosen risk treatment", "مبدأ الخصوصية الذي يحد معالجة مخاطر مختارة"),
      l("A short reflection linking authorisation, risk and privacy", "تأمل قصير يربط التفويض والمخاطر والخصوصية"),
    ],
    rubric: [
      { criterion: l("Correct classification of each situation", "تصنيف صحيح لكل موقف"), weight: 30 },
      { criterion: l("Accurate application of the authorisation rule", "تطبيق دقيق لقاعدة التفويض"), weight: 20 },
      { criterion: l("Well-reasoned ethical alternatives for illegal actions", "بدائل أخلاقية مبررة جيدًا للأفعال المخالفة"), weight: 20 },
      { criterion: l("Complete rules-of-engagement paragraph", "فقرة قواعد اشتباك كاملة"), weight: 15 },
      { criterion: l("Correct privacy principle and risk-treatment linkage", "مبدأ خصوصية صحيح وربط بمعالجة المخاطر"), weight: 15 },
    ],
  },
  quiz: [
    {
      q: l("Risk is commonly calculated qualitatively as…", "تُحسب المخاطر نوعيًا عادةً على أنها…"),
      options: [
        l("Likelihood × Impact", "الاحتمالية × الأثر"),
        l("Threat + Asset", "التهديد + الأصل"),
        l("Cost − Benefit", "التكلفة − الفائدة"),
        l("Impact ÷ Time", "الأثر ÷ الزمن"),
      ],
      answer: 0,
      why: l("A simple matrix multiplies likelihood and impact scores.", "تضرب المصفوفة البسيطة درجتي الاحتمالية والأثر."),
    },
    {
      q: l("An asset is worth $200,000, a single incident would destroy 50% of it and it is expected once every 2 years. What is the ALE?", "أصل قيمته 200,000 دولار وحادثة واحدة تدمر 50% منه ومتوقع حدوثها كل سنتين. ما قيمة ALE؟"),
      options: [
        l("$100,000", "100,000 دولار"),
        l("$50,000", "50,000 دولار"),
        l("$25,000", "25,000 دولار"),
        l("$200,000", "200,000 دولار"),
      ],
      answer: 1,
      why: l("SLE = 200,000 × 0.5 = 100,000; ARO = 0.5; ALE = 50,000.", "SLE = 200,000 × 0.5 = 100,000؛ ARO = 0.5؛ ALE = 50,000."),
    },
    {
      q: l("Buying cyber insurance is an example of…", "شراء التأمين السيبراني مثال على…"),
      options: [
        l("Avoiding", "التجنب"),
        l("Transferring", "النقل"),
        l("Accepting", "القبول"),
        l("Mitigating only", "التخفيف فقط"),
      ],
      answer: 1,
      why: l("The financial consequence is moved to the insurer; the risk itself remains.", "ينتقل الأثر المالي إلى شركة التأمين بينما يبقى الخطر نفسه."),
    },
    {
      q: l("Which statement about privacy and security is correct?", "أي عبارة عن الخصوصية والأمن صحيحة؟"),
      options: [
        l("They are identical", "هما متطابقان"),
        l("You cannot have privacy without security", "لا خصوصية بلا أمن"),
        l("Privacy is only for lawyers", "الخصوصية للمحامين فقط"),
        l("Security always guarantees privacy", "الأمن يضمن الخصوصية دائمًا"),
      ],
      answer: 1,
      why: l("Unprotected data cannot be kept private; but secure data can still be over-collected.", "البيانات غير المحمية لا يمكن إبقاؤها خاصة؛ لكن البيانات الآمنة قد تُجمع بإفراط."),
    },
    {
      q: l("'Data minimisation' means…", "«تقليل البيانات» يعني…"),
      options: [
        l("Compressing files", "ضغط الملفات"),
        l("Collecting and keeping only what is necessary", "جمع وحفظ ما هو ضروري فقط"),
        l("Deleting backups", "حذف النسخ الاحتياطية"),
        l("Using small hard disks", "استخدام أقراص صغيرة"),
      ],
      answer: 1,
      why: l("Less data means less exposure and less obligation.", "بيانات أقل تعني تعرضًا والتزامًا أقل."),
    },
    {
      q: l("What is the usual GDPR deadline for notifying the regulator of a personal-data breach?", "ما المهلة المعتادة في GDPR لإخطار الجهة التنظيمية باختراق بيانات شخصية؟"),
      options: [
        l("72 hours after becoming aware", "72 ساعة بعد العلم به"),
        l("30 days", "30 يومًا"),
        l("1 year", "سنة"),
        l("No deadline", "لا مهلة"),
      ],
      answer: 0,
      why: l("Article 33 requires notification without undue delay and where feasible within 72 hours.", "تتطلب المادة 33 الإخطار دون تأخير لا مبرر له وحيثما أمكن خلال 72 ساعة."),
    },
    {
      q: l("Which is the key difference between an ethical hacker and a criminal?", "ما الفرق الجوهري بين المخترق الأخلاقي والمجرم؟"),
      options: [
        l("Better tools", "أدوات أفضل"),
        l("Authorisation and defined scope", "التفويض والنطاق المحدد"),
        l("Faster typing", "سرعة الكتابة"),
        l("More experience", "خبرة أكثر"),
      ],
      answer: 1,
      why: l("Written permission and scope make the same technical actions legal and ethical.", "الإذن الكتابي والنطاق يجعلان الأفعال التقنية نفسها قانونية وأخلاقية."),
    },
    {
      q: l("Passing a compliance audit means…", "اجتياز تدقيق امتثال يعني…"),
      options: [
        l("The organisation cannot be breached", "أن المؤسسة لا يمكن اختراقها"),
        l("Required controls existed at the time of audit, not a guarantee of security", "أن الضوابط المطلوبة كانت موجودة وقت التدقيق، وليس ضمانًا للأمن"),
        l("Security is unnecessary", "أن الأمن غير ضروري"),
        l("All employees are trained", "أن كل الموظفين مدرَّبون"),
      ],
      answer: 1,
      why: l("Compliance is evidence at a point in time; security is continuous.", "الامتثال دليل في لحظة زمنية والأمن مستمر."),
    },
    {
      q: l("You discover a vulnerability on a company's website by accident. The ethical response is…", "اكتشفت بالصدفة ثغرة في موقع شركة. الاستجابة الأخلاقية هي…"),
      options: [
        l("Publish details immediately", "نشر التفاصيل فورًا"),
        l("Download data to prove it", "تنزيل بيانات لإثباتها"),
        l("Report privately via their disclosure channel and allow time to fix", "الإبلاغ سرًا عبر قناة الإفصاح وإتاحة وقت للإصلاح"),
        l("Sell it", "بيعها"),
      ],
      answer: 2,
      why: l("Responsible disclosure protects users and the finder.", "الإفصاح المسؤول يحمي المستخدمين والمكتشف."),
    },
    {
      q: l("Which NIST CSF 2.0 function emphasises leadership and strategy?", "أي وظيفة في NIST CSF 2.0 تؤكد على القيادة والاستراتيجية؟"),
      options: [
        l("Protect", "الحماية"),
        l("Govern", "الحوكمة"),
        l("Detect", "الكشف"),
        l("Recover", "التعافي"),
      ],
      answer: 1,
      why: l("Govern joined Identify, Protect, Detect, Respond and Recover in version 2.0.", "انضمت الحوكمة إلى التعريف والحماية والكشف والاستجابة والتعافي في الإصدار 2.0."),
    },
    {
      q: l("Residual risk is…", "الخطر المتبقي هو…"),
      options: [
        l("Risk before any control", "الخطر قبل أي ضابط"),
        l("Risk remaining after controls are applied", "الخطر الباقي بعد تطبيق الضوابط"),
        l("A type of malware", "نوع من البرمجيات الخبيثة"),
        l("Risk that is transferred", "الخطر المنقول"),
      ],
      answer: 1,
      why: l("Management must formally accept it or add more treatment.", "على الإدارة قبوله رسميًا أو إضافة معالجة."),
    },
  ],
  trueFalse: [
    {
      q: l("You can have privacy without security.", "يمكن وجود خصوصية بلا أمن."),
      answer: false,
      why: l("Unprotected data cannot be kept private; security is a precondition of privacy.", "البيانات غير المحمية لا يمكن إبقاؤها خاصة؛ فالأمن شرط مسبق للخصوصية."),
    },
    {
      q: l("A 4-hour RPO means backups must run at least every 4 hours.", "RPO بأربع ساعات يعني أن النسخ يجب أن تُجرى كل أربع ساعات على الأقل."),
      answer: true,
      why: l("RPO is the maximum tolerable data loss, so backups must be at least that frequent.", "RPO هو أقصى فقد بيانات مقبول، لذا يجب أن تكون النسخ على الأقل بهذا التكرار."),
    },
    {
      q: l("Good intentions are a legal defence for accessing a system without permission.", "حسن النية دفاع قانوني للوصول إلى نظام دون إذن."),
      answer: false,
      why: l("Unauthorised access can be an offence regardless of intent or whether damage occurs.", "قد يكون الوصول غير المصرح جريمة بغض النظر عن النية أو وقوع ضرر."),
    },
    {
      q: l("Residual risk is the risk that remains after controls are applied.", "الخطر المتبقي هو الخطر الباقي بعد تطبيق الضوابط."),
      answer: true,
      why: l("Management formally accepts the residual risk, or adds more treatment.", "تقبل الإدارة رسميًا الخطر المتبقي أو تضيف معالجة."),
    },
    {
      q: l("Passing a compliance audit guarantees the organisation cannot be breached.", "اجتياز تدقيق الامتثال يضمن أن المؤسسة لا يمكن اختراقها."),
      answer: false,
      why: l("Compliance is evidence at a point in time; security is continuous and may still be weak.", "الامتثال دليل في لحظة زمنية؛ والأمن مستمر وقد يكون ضعيفًا مع ذلك."),
    },
    {
      q: l("Data minimisation reduces exposure because data not collected cannot be breached.", "يقلل تقليل البيانات التعرض لأن البيانات غير المجمعة لا يمكن اختراقها."),
      answer: true,
      why: l("It is the cheapest control: no data means no breach of that data.", "هو أرخص ضابط: فلا بيانات تعني لا اختراق لتلك البيانات."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each item as a risk treatment or a privacy principle", "صنّف كل عنصر كمعالجة مخاطر أو مبدأ خصوصية"),
      categories: [
        l("Treatment", "معالجة"),
        l("Privacy principle", "مبدأ خصوصية"),
      ],
      items: [
        { text: l("Mitigate", "تخفيف"), answer: 0 },
        { text: l("Data minimisation", "تقليل البيانات"), answer: 1 },
        { text: l("Transfer", "نقل"), answer: 0 },
        { text: l("Storage limitation", "تحديد مدة التخزين"), answer: 1 },
      ],
      why: l("Mitigate and transfer are risk treatments; data minimisation and storage limitation are privacy principles.", "التخفيف والنقل معالجات مخاطر؛ وتقليل البيانات وتحديد مدة التخزين مبادئ خصوصية."),
    },
    {
      prompt: l("Classify each situation by its authorisation status", "صنّف كل موقف بحسب حالة تفويضه"),
      categories: [
        l("Permitted", "مسموح"),
        l("Needs authorisation", "يحتاج تفويضًا"),
        l("Illegal / unethical", "مخالف / غير أخلاقي"),
      ],
      items: [
        { text: l("Scanning your own test server in your lab", "مسح خادم اختبار خاص بك في مختبر"), answer: 0 },
        { text: l("Penetration testing a client's site with a signed contract", "اختبار اختراق موقع عميل بعقد موقّع"), answer: 0 },
        { text: l("Testing a company's live site without permission", "اختبار موقع شركة عامل دون إذن"), answer: 2 },
        { text: l("Running an assigned scan within a signed scope", "تشغيل فحص مسند ضمن نطاق موقّع"), answer: 0 },
      ],
      why: l("Own labs and signed-scope work are permitted; unauthorised testing of a live system is illegal; a signed contract makes client testing permitted.", "المختبرات الخاصة والعمل ضمن نطاق موقّع مسموح؛ واختبار نظام عامل دون تصريح مخالف؛ والعقد الموقّع يجعل اختبار العميل مسموحًا."),
    },
    {
      prompt: l("Match each risk-measure term to its formula or meaning", "زاوج كل مصطلح لقياس المخاطر بصيغته أو معناه"),
      categories: [
        l("SLE", "SLE"),
        l("ARO", "ARO"),
        l("ALE", "ALE"),
      ],
      items: [
        { text: l("Asset value × Exposure factor", "قيمة الأصل × عامل التعرض"), answer: 0 },
        { text: l("Expected events per year", "الأحداث المتوقعة سنويًا"), answer: 1 },
        { text: l("SLE × ARO", "SLE × ARO"), answer: 2 },
      ],
      why: l("SLE is the single-loss amount, ARO the annual rate, and ALE the annualised loss (SLE × ARO).", "SLE هو توقع الخسارة للحدث الواحد، وARO معدل الحدوث السنوي، وALE توقع الخسارة السنوي (SLE × ARO)."),
    },
    {
      prompt: l("Classify each document by its role in governance", "صنّف كل وثيقة بحسب دورها في الحوكمة"),
      categories: [
        l("Policy", "سياسة"),
        l("Standard", "معيار"),
        l("Procedure", "إجراء"),
      ],
      items: [
        { text: l("All laptops must be encrypted", "يجب تشفير كل الحواسيب المحمولة"), answer: 0 },
        { text: l("Use AES-256 and BitLocker for full-disk encryption", "استخدم AES-256 وBitLocker للتشفير الكامل للقرص"), answer: 1 },
        { text: l("Step-by-step steps to enable encryption on a new laptop", "خطوات تفصيلية لتفعيل التشفير على حاسوب محمول جديد"), answer: 2 },
      ],
      why: l("Policies state intent, standards give required settings, procedures give step-by-step instructions.", "تحدد السياسات المراد، وتعطي المعايير الإعدادات المطلوبة، وتعطي الإجراءات الخطوات التفصيلية."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A customer database is worth $500,000. A breach would expose 40% of its value, and a breach is expected once every four years. A control would reduce the annualised loss by $35,000 per year and costs $10,000 per year.",
        "قاعدة بيانات عملاء قيمتها 500,000 دولار. ويكشف الاختراق 40% من قيمتها، ومتوقع حدوثه مرة كل أربع سنوات. ويقلل ضابط الخسارة السنوية بمقدار 35,000 دولار سنويًا بتكلفة 10,000 دولار سنويًا.",
      ),
      question: l("Is the control worth buying, and why?", "هل الضابط يستحق الشراء، ولماذا؟"),
      options: [
        l("No; the control costs too much", "لا؛ فالضابط مكلف جدًا"),
        l("Yes; the net benefit is $25,000 per year (benefit $35,000 − cost $10,000)", "نعم؛ فصافي الفائدة 25,000 دولار سنويًا (الفائدة 35,000 − التكلفة 10,000)"),
        l("No; ALE cannot be calculated", "لا؛ فلا يمكن حساب ALE"),
        l("Yes; it removes the risk entirely", "نعم؛ فهو يزيل الخطر تمامًا"),
      ],
      answer: 1,
      why: l("The control's benefit exceeds its cost, giving a positive net benefit of $25,000 per year.", "تفوق فائدة الضابط تكلفته، محققًا صافي فائدة 25,000 دولار سنويًا."),
    },
    {
      scenario: l(
        "You discover an exposed customer database on the Internet by accident while browsing. You want to prove the problem is real.",
        "تكتشف بالصدفة أثناء التصفح قاعدة بيانات عملاء مكشوفة على الإنترنت. تريد إثبات أن المشكلة حقيقية.",
      ),
      question: l("What is the ethical and lawful response?", "ما الاستجابة الأخلاقية والقانونية؟"),
      options: [
        l("Download records to prove the problem", "تنزيل سجلات لإثبات المشكلة"),
        l("Publish the details on social media", "نشر التفاصيل على وسائل التواصل"),
        l("Report privately via the vendor's disclosure channel without exploiting or copying data", "الإبلاغ سرًا عبر قناة الإفصاح لدى المورّد دون استغلال أو نسخ بيانات"),
        l("Sell the findings to a competitor", "بيع النتائج لمنافس"),
      ],
      answer: 2,
      why: l("Responsible disclosure protects the users and keeps the finder on the lawful side of the line.", "يحمي الإفصاح المسؤول المستخدمين ويبقي المكتشف في الجانب القانوني من الخط."),
    },
    {
      scenario: l(
        "Your administrative account technically allows you to read a colleague's HR file. You are curious about a rumor and consider reading it.",
        "يسمح حساب المدير لديك تقنيًا بقراءة ملف موارد بشرية لزميل. أنت فضولي بشأن إشاعة وتفكر في قراءته.",
      ),
      question: l("What should you do?", "ماذا يجب أن تفعل؟"),
      options: [
        l("Read it; your account allows it", "اقرأه؛ فحسابك يسمح بذلك"),
        l("Do not read it: technical ability is not authorisation, and it breaches privacy", "لا تقرأه: فالقدرة التقنية ليست تفويضًا، وهو ينتهك الخصوصية"),
        l("Read only the parts you need", "اقرأ الأجزاء التي تحتاجها فقط"),
        l("Ask the colleague to share it", "اطلب من الزميل مشاركته"),
      ],
      answer: 1,
      why: l("Authorisation, not technical access, defines what may be read; reading it would breach privacy and ethics.", "التفويض لا الوصول التقني هو ما يحدد ما يجوز قراءته؛ وقراءته تنتهي الخصوصية والأخلاق."),
    },
  ],
  practicalChecks: [
    {
      task: l("State the qualitative formula for risk and the three quantitative terms", "ذكر الصيغة النوعية للمخاطر وثلاثة مصطلحات كمية"),
      expected: l("Risk = Likelihood × Impact; SLE (single loss expectancy), ARO (annualised rate of occurrence), ALE = SLE × ARO.", "الخطر = الاحتمالية × الأثر؛ وSLE (توقع الخسارة للحدث الواحد)، وARO (معدل الحدوث السنوي)، وALE = SLE × ARO."),
    },
    {
      task: l("List the four risk treatments", "اذكر المعالجات الأربعة للمخاطر"),
      expected: l("Mitigate, Transfer, Accept, Avoid.", "تخفيف، ونقل، وقبول، وتجنب."),
    },
    {
      task: l("State the three conditions that make a security action lawful and ethical", "ذكر الشروط الثلاثة التي تجعل الفعل الأمني قانونيًا وأخلاقيًا"),
      expected: l("Written permission, a defined scope, and agreed rules of engagement.", "إذن كتابي، ونطاق محدد، وقواعد اشتباك متفق عليها."),
    },
  ],
  homework: {
    title: l("Homework 18 — Risk register, privacy review and ethics statement", "الواجب 18 — سجل مخاطر ومراجعة خصوصية وبيان أخلاقي"),
    tasks: [
      l("Identify six information-security risks relevant to your home or workplace and rate each Likelihood × Impact (1–5).", "حدد ست مخاطر لأمن المعلومات ذات صلة بمنزلك أو مكان عملك وسجّل كل منها كاحتمالية × أثر (1–5)."),
      l("Choose a treatment for each risk and name the control and owner.", "اختر معالجة لكل خطر وسمّ الضابط والمالك."),
      l("Compute ALE for one risk with realistic estimates and compare it with a control's cost.", "احسب ALE لخطر واحد بتقديرات واقعية وقارنه بتكلفة ضابط."),
      l("Read a privacy notice of a service you use and summarise what data it collects and for how long it keeps it.", "اقرأ إشعار خصوصية لخدمة تستخدمها ولخّص ما تجمعه من بيانات ومدة احتفاظها."),
      l("Write a half-page personal code of ethics for your future security and privacy work.", "اكتب مدونة سلوك شخصية بنصف صفحة لعملك الأمني والخصوصي المستقبلي."),
    ],
    deliverable: l("A risk register with treatments, an ALE calculation, a privacy-notice summary and the personal ethics statement.", "سجل مخاطر مع معالجات، وحساب ALE، وملخص إشعار خصوصية، والبيان الأخلاقي الشخصي."),
    criteria: [
      l("Correct Likelihood × Impact scoring and sorted register", "تسجيل صحيح للاحتمالية × الأثر وسجل مرتب"),
      l("Appropriate, owned treatments with named controls", "معالجات مناسبة ومملوكة بضوابط مسماة"),
      l("Correct ALE calculation and cost comparison", "حساب ALE صحيح ومقارنة بالتكلفة"),
      l("Accurate privacy-notice summary", "ملخص دقيق لإشعار الخصوصية"),
      l("A personal ethics statement reflecting authorisation and privacy", "بيان أخلاقي شخصي يعكس التفويض والخصوصية"),
    ],
    challenge: l(
      "Optional challenge: research one real fine or breach caused by ignoring data minimisation or storage limitation, and explain which principle was violated and what control would have prevented it.",
      "مهمة تحدٍ اختيارية: ابحث في غرامة أو اختراق حقيقي نجم عن تجاهل تقليل البيانات أو تحديد مدة التخزين، واشرح أي مبدأ انتُهك وما الضابط الذي كان سيمنع ذلك.",
    ),
  },
  refs: [
    { title: "NIST Cybersecurity Framework 2.0", org: "NIST", url: "https://www.nist.gov/cyberframework" },
    { title: "Guide for Conducting Risk Assessments (SP 800-30 Rev.1)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final" },
    { title: "ISO/IEC 27001 — Information security management", org: "ISO", url: "https://www.iso.org/standard/27001" },
    { title: "CIS Critical Security Controls", org: "Center for Internet Security", url: "https://www.cisecurity.org/controls" },
    { title: "General Data Protection Regulation — official text", org: "European Union", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    { title: "Code of Ethics", org: "ISC2", url: "https://www.isc2.org/ethics" },
    { title: "Coordinated Vulnerability Disclosure guidance", org: "CISA", url: "https://www.cisa.gov/coordinated-vulnerability-disclosure-process" },
  ],
  terms: [
    { term: l("Risk", "الخطر / المخاطر"), def: l("The effect of uncertainty on objectives, often scored as likelihood × impact.", "أثر عدم اليقين على الأهداف، يُسجّل كثيرًا كاحتمالية × أثر.") },
    { term: l("Risk register", "سجل المخاطر"), def: l("A living record of identified risks, ratings, owners and treatments.", "سجل حي بالمخاطر المحددة وتقييماتها ومالكيها ومعالجاتها.") },
    { term: l("Risk appetite", "شهية المخاطر"), def: l("The amount of risk an organisation is willing to accept.", "قدر المخاطر الذي تقبله المؤسسة.") },
    { term: l("Inherent risk", "الخطر الكامن"), def: l("The risk before any controls are applied.", "الخطر قبل تطبيق أي ضوابط.") },
    { term: l("Residual risk", "الخطر المتبقي"), def: l("The risk remaining after controls are applied.", "الخطر الباقي بعد تطبيق الضوابط.") },
    { term: l("SLE", "توقع الخسارة للحدث الواحد"), def: l("Single Loss Expectancy: asset value × exposure factor.", "توقع الخسارة للحدث الواحد: قيمة الأصل × عامل التعرض.") },
    { term: l("ARO", "معدل الحدوث السنوي"), def: l("Annualised Rate of Occurrence: expected events per year.", "معدل الحدوث السنوي: الأحداث المتوقعة سنويًا.") },
    { term: l("ALE", "توقع الخسارة السنوي"), def: l("Annualised Loss Expectancy = SLE × ARO.", "توقع الخسارة السنوي = SLE × ARO.") },
    { term: l("Mitigate", "تخفيف"), def: l("Add controls to lower the likelihood or impact of a risk.", "إضافة ضوابط لخفض احتمالية أو أثر الخطر.") },
    { term: l("Transfer", "نقل"), def: l("Move the financial consequence of a risk to another party.", "نقل الأثر المالي للخطر إلى طرف آخر.") },
    { term: l("Accept", "قبول"), def: l("Knowingly live with a risk, with approval.", "التعايش مع الخطر عن علم وبموافقة.") },
    { term: l("Avoid", "تجنب"), def: l("Stop the activity that causes the risk.", "إيقاف النشاط المسبب للخطر.") },
    { term: l("Privacy", "الخصوصية"), def: l("The rights of individuals over their personal data.", "حقوق الأفراد في بياناتهم الشخصية.") },
    { term: l("Personal data", "البيانات الشخصية"), def: l("Any information relating to an identified or identifiable person.", "أي معلومة تتعلق بشخص محدد أو يمكن تحديده.") },
    { term: l("GDPR", "اللائحة العامة لحماية البيانات"), def: l("EU regulation governing personal-data processing and individual rights.", "لائحة أوروبية تنظم معالجة البيانات الشخصية وحقوق الأفراد.") },
    { term: l("Data minimisation", "تقليل البيانات"), def: l("Collecting and keeping only the data that is necessary.", "جمع وحفظ البيانات الضرورية فقط.") },
    { term: l("Storage limitation", "تحديد مدة التخزين"), def: l("Keeping data only as long as necessary, then deleting it.", "حفظ البيانات فقط طالما لزم، ثم حذفها.") },
    { term: l("Compliance", "الامتثال"), def: l("Meeting legal, regulatory, contractual and policy requirements.", "الوفاء بالمتطلبات القانونية والتنظيمية والتعاقدية وسياسات المؤسسة.") },
    { term: l("Audit", "التدقيق"), def: l("Comparing reality with requirements to verify controls.", "مقارنة الواقع بالمتطلبات للتحقق من الضوابط.") },
    { term: l("Authorisation", "التفويض"), def: l("Written permission that makes a security action lawful and ethical.", "الإذن الكتابي الذي يجعل الفعل الأمني قانونيًا وأخلاقيًا.") },
    { term: l("Rules of engagement", "قواعد الاشتباك"), def: l("Agreed limits and procedures for an authorised security test.", "الحدود والإجراءات المتفق عليها لاختبار أمني مصرح به.") },
    { term: l("Responsible disclosure", "الإفصاح المسؤول"), def: l("Privately reporting a flaw to its owner and allowing time to fix it.", "إبلاغ المالك بالثغرة سرًا وإتاحة وقت لإصلاحها.") },
    { term: l("Privacy by design", "الخصوصية بالتصميم"), def: l("Building privacy protections into systems from the start.", "دمج حمايات الخصوصية في الأنظمة منذ البداية.") },
    { term: l("Data classification", "تصنيف البيانات"), def: l("Labelling data by sensitivity to drive handling rules.", "وسم البيانات بحسب حساسيتها لتحديد قواعد التعامل.") },
  ],
};
