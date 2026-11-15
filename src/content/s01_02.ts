import { l, type Session } from "./types";
import { careerSections, careerObjectives, careerTerms, careerRefs, careerQuiz } from "./careers-s01";

export const s01: Session = {
  id: 1,
  phase: 1,
  minutes: 90,
  title: l("Introduction to Cybersecurity & the CIA Triad", "مدخل إلى الأمن السيبراني وCIA Triad"),
  summary: l(
    "What cybersecurity is, why it matters, and the three goals — Confidentiality, Integrity, Availability — that every control is designed to protect.",
    "ما هو الأمن السيبراني ولماذا يهم، والأهداف الثلاثة — السرية والسلامة والتوافر — التي صُمّمت كل الضوابط لحمايتها."
  ),
  objectives: [
    l("Define cybersecurity and distinguish it from information security and IT operations.", "تعريف الأمن السيبراني والتمييز بينه وبين أمن المعلومات وعمليات تقنية المعلومات."),
    l("Explain Confidentiality, Integrity and Availability with real examples.", "شرح السرية والسلامة والتوافر بأمثلة واقعية."),
    l("Use the terms asset, threat, vulnerability, risk and control correctly.", "استخدام مصطلحات الأصل والتهديد والثغرة والمخاطر والضابط بشكل صحيح."),
    l("Describe defense in depth and the types of security controls.", "وصف مبدأ الدفاع المتعمّق وأنواع الضوابط الأمنية."),
    ...careerObjectives,
  ],
  sections: [
    {
      h: l("1. What is cybersecurity?", "1. ما هو الأمن السيبراني؟"),
      p: [
        l("Cybersecurity is the practice of protecting systems, networks, applications and data from digital attacks, damage and unauthorised access. It combines technology (firewalls, encryption), processes (incident response, patching) and people (awareness, clear responsibilities).", "الأمن السيبراني هو ممارسة حماية الأنظمة والشبكات والتطبيقات والبيانات من الهجمات الرقمية والضرر والوصول غير المصرّح به. وهو يجمع بين التقنية (الجدران النارية والتشفير) والعمليات (الاستجابة للحوادث والتحديثات) والأشخاص (الوعي وتحديد المسؤوليات)."),
        l("Security matters because almost every organisation now depends on digital systems. A single incident can stop production, expose personal data, trigger legal penalties and destroy customer trust. Attackers need to succeed once; defenders must be right continuously — which is why security is managed as an ongoing programme, not a one-time product purchase.", "تكمن أهمية الأمن في أن كل مؤسسة تقريبًا تعتمد اليوم على الأنظمة الرقمية. فحادثة واحدة قد توقف الإنتاج وتكشف بيانات شخصية وتجلب عقوبات قانونية وتهدم ثقة العملاء. المهاجم يحتاج إلى النجاح مرة واحدة، بينما على المدافع أن يصيب باستمرار — ولهذا يُدار الأمن كبرنامج مستمر لا كمنتج يُشترى مرة واحدة."),
      ],
      bullets: [
        l("Information security protects information in any form (paper, spoken, digital).", "أمن المعلومات يحمي المعلومات بأي شكل (ورقي أو شفهي أو رقمي)."),
        l("Cybersecurity focuses on information and systems reachable through digital networks.", "الأمن السيبراني يركّز على المعلومات والأنظمة المتاحة عبر الشبكات الرقمية."),
        l("IT operations keeps systems running; security makes sure they run safely. The two must cooperate.", "عمليات تقنية المعلومات تُبقي الأنظمة تعمل، والأمن يضمن أنها تعمل بأمان. ويجب أن يتعاونا."),
      ],
    },
    {
      h: l("2. The CIA Triad", "2. CIA Triad"),
      p: [
        l("The CIA Triad is the foundation model of security. Every control you will meet in this course exists to protect at least one of these three properties. When you analyse an incident, first ask: which of the three was harmed?", "CIA Triad هو النموذج الأساسي للأمن. كل ضابط ستقابله في هذه الدورة موجود لحماية خاصية واحدة على الأقل من هذه الثلاث. وعند تحليل أي حادثة اسأل أولًا: أي خاصية تضررت؟"),
      ],
      table: {
        head: [l("Property", "الخاصية"), l("Meaning", "المعنى"), l("Typical attack", "هجوم نموذجي"), l("Typical controls", "ضوابط نموذجية")],
        rows: [
          [l("Confidentiality", "السرية"), l("Only authorised parties can read the data.", "الاطلاع على البيانات لا يكون إلا للمصرّح لهم."), l("Data theft, eavesdropping, shoulder surfing", "سرقة البيانات، التنصت، التلصص البصري"), l("Encryption, access control, classification", "التشفير، التحكم بالوصول، تصنيف البيانات")],
          [l("Integrity", "السلامة"), l("Data and systems are accurate and unaltered except by authorised changes.", "البيانات والأنظمة دقيقة ولا تتغير إلا بتغييرات مصرّح بها."), l("Tampering, malware that edits files, forged records", "العبث، برمجيات تعدّل الملفات، تزوير السجلات"), l("Hashing, digital signatures, change control, backups", "التجزئة، التواقيع الرقمية، إدارة التغيير، النسخ الاحتياطي")],
          [l("Availability", "التوافر"), l("Systems and data are usable when needed.", "الأنظمة والبيانات متاحة عند الحاجة."), l("DDoS, ransomware, hardware failure, power loss", "هجمات حجب الخدمة، الفدية، أعطال العتاد، انقطاع الكهرباء"), l("Redundancy, backups, DDoS protection, disaster recovery", "التكرار، النسخ الاحتياطي، الحماية من حجب الخدمة، التعافي من الكوارث")],
        ],
      },
      callout: { kind: "key", text: l("Controls often trade off against each other: very strict confidentiality (many approvals, heavy encryption) can reduce availability. Good security finds the right balance for the business, not the maximum for one property.", "كثيرًا ما تتعارض الضوابط: فالسرية المشددة جدًا (موافقات كثيرة وتشفير ثقيل) قد تقلل التوافر. الأمن الجيد يجد التوازن المناسب للأعمال لا الحد الأقصى لخاصية واحدة.") },
    },
    {
      h: l("3. Beyond the triad", "3. ما بعد triad"),
      p: [l("Modern frameworks add supporting concepts that explain how the triad is achieved and proven:", "تضيف الأطر الحديثة مفاهيم داعمة تشرح كيف يتحقق الثالوث وكيف يُثبَت:")],
      bullets: [
        l("Authenticity – the user, device or message is genuinely who/what it claims to be.", "الأصالة – المستخدم أو الجهاز أو الرسالة هو فعلًا ما يدّعي."),
        l("Accountability – actions can be traced to an identity (logging, unique accounts).", "المساءلة – يمكن ربط الإجراءات بهوية (التسجيل، الحسابات الفردية)."),
        l("Non-repudiation – a person cannot credibly deny having performed an action (digital signatures, audit trails).", "عدم الإنكار – لا يستطيع شخص إنكار فعل قام به بشكل مقنع (التواقيع الرقمية، سجلات التدقيق)."),
        l("Privacy – personal data is collected and used only for legitimate, declared purposes.", "الخصوصية – تُجمع البيانات الشخصية وتُستخدم فقط لأغراض مشروعة ومعلنة."),
      ],
    },
    {
      h: l("4. Core vocabulary: asset, threat, vulnerability, risk, control", "4. المفردات الأساسية: الأصل والتهديد والثغرة والمخاطر والضابط"),
      p: [
        l("Precise language prevents confusion. An asset is anything of value (data, servers, reputation). A threat is something that could cause harm (a ransomware gang, a flood). A vulnerability is a weakness that a threat can use (unpatched software, weak password). Risk is the likelihood that a threat exploits a vulnerability multiplied by the impact on the asset. A control is anything that reduces risk.", "اللغة الدقيقة تمنع الالتباس. الأصل هو كل ما له قيمة (بيانات، خوادم، سمعة). والتهديد هو ما قد يسبب ضررًا (عصابة فدية، فيضان). والثغرة هي ضعف يمكن للتهديد استغلاله (برنامج غير محدّث، كلمة مرور ضعيفة). أما المخاطر فهي احتمال استغلال التهديد للثغرة مضروبًا في الأثر على الأصل. والضابط هو كل ما يقلل المخاطر."),
        l("Example: the asset is a customer database; the threat is a criminal group; the vulnerability is an unpatched web server; the risk is a data breach; the control is patching plus a web application firewall.", "مثال: الأصل قاعدة بيانات العملاء؛ التهديد مجموعة إجرامية؛ الثغرة خادم ويب غير محدّث؛ الخطر تسريب بيانات؛ والضابط التحديث مع جدار حماية تطبيقات الويب."),
      ],
      callout: { kind: "tip", text: l("You cannot remove a threat you do not control (you cannot stop criminals existing) — but you can remove vulnerabilities and reduce impact. That is where defenders focus.", "لا يمكنك إزالة تهديد لا تتحكم فيه (لا تستطيع منع وجود المجرمين) — لكن يمكنك إزالة الثغرات وتقليل الأثر. وهنا يركّز المدافعون.") },
    },
    {
      h: l("5. Defense in depth and control types", "5. الدفاع المتعمّق وأنواع الضوابط"),
      p: [
        l("No single control is perfect. Defense in depth places several independent layers so that when one fails, another still protects the asset. A phishing e-mail may pass the mail filter, but multi-factor authentication, endpoint protection and monitoring can still stop the attacker.", "لا يوجد ضابط واحد مثالي. الدفاع المتعمّق يضع عدة طبقات مستقلة بحيث إذا فشلت إحداها تبقى أخرى تحمي الأصل. قد تتجاوز رسالة التصيّد مرشّح البريد، لكن المصادقة متعددة العوامل وحماية الأجهزة والمراقبة قد توقف المهاجم."),
        l("Controls are classified by nature (administrative = policies and training; technical = software and hardware; physical = locks and cameras) and by function (preventive stops, detective notices, corrective repairs, deterrent discourages, compensating substitutes).", "تُصنَّف الضوابط حسب طبيعتها (إدارية = سياسات وتدريب؛ تقنية = برمجيات وعتاد؛ مادية = أقفال وكاميرات) وحسب وظيفتها (وقائي يمنع، كاشف يلاحظ، تصحيحي يصلح، رادع يثني، تعويضي يحلّ محل ضابط آخر)."),
      ],
    },
    ...careerSections,
  ],
  diagram: {
    kind: "layers",
    title: l("Defense in depth – layers protecting the data", "الدفاع المتعمّق – طبقات تحمي البيانات"),
    caption: l("An attacker must defeat every layer from the outside in. Weakness in one layer is covered by the others.", "على المهاجم اختراق كل الطبقات من الخارج إلى الداخل. ويُعوَّض ضعف طبقة بالطبقات الأخرى."),
    nodes: [
      { label: l("Policies, awareness & governance", "السياسات والوعي والحوكمة"), desc: l("Rules, training, responsibilities", "القواعد والتدريب والمسؤوليات") },
      { label: l("Physical security", "الأمن المادي"), desc: l("Locks, badges, cameras", "الأقفال والبطاقات والكاميرات") },
      { label: l("Perimeter & network", "المحيط والشبكة"), desc: l("Firewall, segmentation, IDS/IPS", "جدار ناري، تقسيم، كشف/منع التسلل") },
      { label: l("Host / endpoint", "الجهاز / النقطة الطرفية"), desc: l("Patching, anti-malware, hardening", "التحديثات، مكافحة البرمجيات الخبيثة، التحصين") },
      { label: l("Application", "التطبيق"), desc: l("Secure coding, input validation", "البرمجة الآمنة، التحقق من المدخلات") },
      { label: l("Data", "البيانات"), desc: l("Encryption, access control, backup", "التشفير، التحكم بالوصول، النسخ الاحتياطي") },
    ],
  },
  lab: {
    tool: "cia",
    title: l("Lab 1 – Classify incidents with the CIA Triad", "المختبر 1 – تصنيف الحوادث بـ CIA Triad"),
    scenario: l("You join a small clinic's IT team. The manager hands you six incident summaries and asks which security property each one mainly damaged so the right fix can be chosen.", "انضممت إلى فريق تقنية المعلومات في عيادة صغيرة. يعطيك المدير ستة ملخصات لحوادث ويطلب تحديد الخاصية الأمنية الأكثر تضررًا في كل منها لاختيار الإصلاح المناسب."),
    safety: l("This lab is purely analytical – no systems are touched. Use only data you are authorised to use, and never test security on systems you do not own or have written permission to assess.", "هذا المختبر تحليلي بحت ولا يمسّ أي نظام. استخدم فقط بيانات مصرّح لك بها، ولا تختبر الأمن على أنظمة لا تملكها أو ليس لديك إذن كتابي بتقييمها."),
    steps: [
      l("Read each incident carefully and underline what exactly went wrong.", "اقرأ كل حادثة بعناية وضع خطًا تحت ما حدث بالضبط."),
      l("Choose Confidentiality, Integrity or Availability in the tool for all six incidents.", "اختر السرية أو السلامة أو التوافر في الأداة للحوادث الستة."),
      l("For every wrong answer, read the correction and write one sentence explaining your original mistake.", "لكل إجابة خاطئة اقرأ التصحيح واكتب جملة تشرح خطأك الأول."),
      l("Pick two incidents and name one preventive and one detective control for each.", "اختر حادثتين وسمِّ ضابطًا وقائيًا وآخر كاشفًا لكل منهما."),
      l("Identify one case where two properties are harmed at once (for example ransomware: availability and confidentiality if data is also stolen).", "حدّد حالة تتضرر فيها خاصيتان معًا (مثل الفدية: التوافر والسرية إذا سُرقت البيانات أيضًا)."),
      l("Score 6/6 in the tool.", "احصل على 6/6 في الأداة."),
    ],
    expected: l("You reach 6/6 and can justify each classification in one sentence, including why some incidents touch more than one property.", "تصل إلى 6/6 وتستطيع تبرير كل تصنيف بجملة واحدة، بما في ذلك سبب مساس بعض الحوادث بأكثر من خاصية."),
  },
  quiz: [
    { q: l("Which property is violated when an attacker secretly changes the amount in a bank transfer record?", "أي خاصية تُنتهك عندما يغيّر مهاجم سرًا مبلغ تحويل في سجل مصرفي؟"), options: [l("Confidentiality", "السرية"), l("Integrity", "السلامة"), l("Availability", "التوافر"), l("Non-repudiation only", "عدم الإنكار فقط")], answer: 1, why: l("The data was altered without authorisation – that is an integrity violation.", "تم تعديل البيانات دون تصريح – وهذا انتهاك للسلامة.") },
    { q: l("A DDoS attack that makes a website unreachable primarily attacks…", "هجوم حجب الخدمة الموزّع الذي يجعل موقعًا غير قابل للوصول يستهدف أساسًا…"), options: [l("Confidentiality", "السرية"), l("Integrity", "السلامة"), l("Accountability", "المساءلة"), l("Availability", "التوافر")], answer: 3, why: l("Legitimate users cannot reach the service when they need it.", "لا يستطيع المستخدمون الشرعيون الوصول للخدمة عند الحاجة.") },
    { q: l("Which statement defines 'risk' most accurately?", "أي عبارة تعرّف «المخاطر» بدقة أكبر؟"), options: [l("Any weakness in a system", "أي ضعف في النظام"), l("Anyone who wants to harm an organisation", "أي شخص يريد إيذاء المؤسسة"), l("The likelihood of a threat exploiting a vulnerability, combined with the impact", "احتمال استغلال تهديد لثغرة مع الأثر الناتج"), l("A tool that blocks attacks", "أداة تمنع الهجمات")], answer: 2, why: l("Risk combines likelihood and impact. A weakness alone is a vulnerability; an actor is a threat; a blocker is a control.", "المخاطر تجمع الاحتمالية والأثر. الضعف وحده ثغرة، والفاعل تهديد، والمانع ضابط.") },
    { q: l("Several independent protection layers so that one failure does not expose the asset is called…", "وجود عدة طبقات حماية مستقلة بحيث لا يكشف فشل إحداها الأصل يسمى…"), options: [l("Security through obscurity", "الأمن بالغموض"), l("Defense in depth", "الدفاع المتعمّق"), l("Single sign-on", "تسجيل الدخول الموحد"), l("Risk acceptance", "قبول المخاطر")], answer: 1, why: l("Defense in depth is layered security with no single point of failure.", "الدفاع المتعمّق أمن متعدد الطبقات دون نقطة فشل واحدة.") },
    { q: l("A security camera in a server room is best described as which control?", "كاميرا مراقبة في غرفة الخوادم تُصنَّف بأفضل شكل ضمن أي ضابط؟"), options: [l("Technical and corrective", "تقني وتصحيحي"), l("Administrative and preventive", "إداري ووقائي"), l("Physical and detective/deterrent", "مادي وكاشف/رادع"), l("Compensating only", "تعويضي فقط")], answer: 2, why: l("It is a physical control that records events (detective) and discourages misuse (deterrent).", "هي ضابط مادي يسجّل الأحداث (كاشف) ويثني عن إساءة الاستخدام (رادع).") },
    { q: l("Digital signatures mainly help provide…", "تساعد التواقيع الرقمية أساسًا على توفير…"), options: [l("Availability", "التوافر"), l("Non-repudiation and integrity", "عدم الإنكار والسلامة"), l("Physical safety", "السلامة المادية"), l("Faster networks", "شبكات أسرع")], answer: 1, why: l("A valid signature proves who signed and that the content was not changed.", "التوقيع الصحيح يثبت من وقّع وأن المحتوى لم يتغير.") },
  ],
  homework: {
    title: l("Homework 1 – Your personal CIA map", "الواجب 1 – خريطة CIA الشخصية"),
    tasks: [
      l("List five digital assets you personally own (e-mail, phone, photos, bank app, social account).", "اذكر خمسة أصول رقمية تملكها شخصيًا (بريد، هاتف، صور، تطبيق بنكي، حساب اجتماعي)."),
      l("For each asset write which CIA property matters most to you and why.", "لكل أصل اكتب الخاصية الأهم لك ولماذا."),
      l("For each asset name one threat, one vulnerability and one control you already use or should add.", "لكل أصل سمِّ تهديدًا وثغرة وضابطًا تستخدمه أو يجب أن تضيفه."),
      l("Draw your own defense-in-depth layers for your e-mail account.", "ارسم طبقات الدفاع المتعمّق الخاصة ببريدك الإلكتروني."),
    ],
    deliverable: l("A one-page table (asset | key CIA property | threat | vulnerability | control) plus a short layer diagram.", "جدول من صفحة واحدة (الأصل | الخاصية الأهم | التهديد | الثغرة | الضابط) مع مخطط قصير للطبقات."),
  },
  refs: [
    { title: "NIST Glossary of cybersecurity terms (CSRC)", org: "NIST", url: "https://csrc.nist.gov/glossary" },
    { title: "NIST Cybersecurity Framework 2.0", org: "NIST", url: "https://www.nist.gov/cyberframework" },
    { title: "Cybersecurity basics", org: "CISA", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
    ...careerRefs,
  ],
  careerQuiz,
  terms: [
    { term: l("Confidentiality", "السرية"), def: l("Ensuring information is accessible only to authorised parties.", "ضمان أن المعلومات لا يصل إليها إلا المصرّح لهم.") },
    { term: l("Integrity", "السلامة"), def: l("Ensuring information and systems are accurate and not altered without authorisation.", "ضمان دقة المعلومات والأنظمة وعدم تغييرها دون تصريح.") },
    { term: l("Availability", "التوافر"), def: l("Ensuring systems and data are accessible when needed.", "ضمان إتاحة الأنظمة والبيانات عند الحاجة.") },
    { term: l("Asset", "الأصل"), def: l("Anything of value to the organisation that needs protection.", "كل ما له قيمة للمؤسسة ويحتاج إلى حماية.") },
    { term: l("Threat", "التهديد"), def: l("A potential cause of harm to an asset.", "سبب محتمل لإلحاق ضرر بأصل.") },
    { term: l("Vulnerability", "الثغرة"), def: l("A weakness that a threat can exploit.", "ضعف يمكن للتهديد استغلاله.") },
    { term: l("Risk", "المخاطر"), def: l("Likelihood of a threat exploiting a vulnerability, multiplied by the impact.", "احتمال استغلال تهديد لثغرة مضروبًا في الأثر.") },
    { term: l("Defense in depth", "الدفاع المتعمّق"), def: l("Layering independent controls so no single failure exposes an asset.", "تراكب ضوابط مستقلة بحيث لا يكشف فشل واحد الأصل.") },
    ...careerTerms,
  ],
};

export const s02: Session = {
  id: 2,
  phase: 1,
  minutes: 60,
  title: l("The Threat Landscape: Actors, Motives and Attack Types", "مشهد التهديدات: الفاعلون والدوافع وأنواع الهجمات"),
  summary: l(
    "Who attacks, why they attack, how an intrusion unfolds step by step, and the most common attack families defenders face.",
    "من يهاجم ولماذا، وكيف يتطور الاختراق خطوة بخطوة، وأكثر عائلات الهجمات شيوعًا التي يواجهها المدافعون."
  ),
  objectives: [
    l("Differentiate threat actors by motive, capability and typical targets.", "التمييز بين الفاعلين المهددين حسب الدافع والقدرة والأهداف المعتادة."),
    l("Describe the stages of an intrusion using the Cyber Kill Chain.", "وصف مراحل الاختراق باستخدام سلسلة القتل السيبرانية."),
    l("Recognise common attack families and the attack surface they target.", "التعرف على عائلات الهجمات الشائعة وسطح الهجوم الذي تستهدفه."),
    l("Explain why breaking the chain early is cheaper than reacting late.", "شرح لماذا يكون قطع السلسلة مبكرًا أرخص من الاستجابة المتأخرة."),
  ],
  sections: [
    {
      h: l("1. Threat actors", "1. الفاعلون المهدِّدون"),
      p: [l("A threat actor is a person or group that attempts to harm your assets. Their motive and resources determine how they attack, so understanding the actor helps you choose proportionate defences.", "الفاعل المهدِّد شخص أو جماعة تحاول الإضرار بأصولك. ويحدد دافعه وموارده طريقة هجومه، وفهمه يساعدك على اختيار دفاعات متناسبة.")],
      table: {
        head: [l("Actor", "الفاعل"), l("Main motive", "الدافع الرئيسي"), l("Resources / skill", "الموارد / المهارة"), l("Typical example", "مثال نموذجي")],
        rows: [
          [l("Cybercriminals", "المجرمون السيبرانيون"), l("Money", "المال"), l("Medium–high, organised, sell services (RaaS)", "متوسطة–عالية، منظّمة، تبيع خدماتها"), l("Ransomware gang, card fraud", "عصابة فدية، احتيال بطاقات")],
          [l("Nation-state / APT", "دول / تهديد مستمر متقدم"), l("Espionage, sabotage, influence", "تجسس، تخريب، تأثير"), l("Very high, patient, custom tools", "عالية جدًا، صبورة، أدوات مخصصة"), l("Long-term theft of government or industrial secrets", "سرقة طويلة الأمد لأسرار حكومية أو صناعية")],
          [l("Hacktivists", "ناشطون مخترقون"), l("Ideology, publicity", "أيديولوجيا، دعاية"), l("Low–medium, often crowd-sourced", "منخفضة–متوسطة، غالبًا جماعية"), l("Website defacement, DDoS on a controversial company", "تشويه موقع، حجب خدمة لشركة مثيرة للجدل")],
          [l("Insiders", "المطّلعون من الداخل"), l("Revenge, profit — or simple error", "انتقام، ربح — أو خطأ بسيط"), l("Already have legitimate access", "لديهم وصول مشروع أصلًا"), l("Employee copies customer list before resigning", "موظف ينسخ قائمة العملاء قبل الاستقالة")],
          [l("Script kiddies", "المبتدئون"), l("Curiosity, bragging", "الفضول، التباهي"), l("Low – use ready-made tools", "منخفضة – يستخدمون أدوات جاهزة"), l("Running a downloaded scanner against random sites", "تشغيل ماسح محمّل ضد مواقع عشوائية")],
        ],
      },
      callout: { kind: "key", text: l("Most real-world incidents are opportunistic: criminals scan the Internet for any unpatched or badly configured system. Basic hygiene defeats the majority of attacks.", "معظم الحوادث الواقعية انتهازية: يمسح المجرمون الإنترنت بحثًا عن أي نظام غير محدّث أو سيئ الإعداد. والنظافة الأمنية الأساسية تهزم أغلب الهجمات.") },
    },
    {
      h: l("2. The Cyber Kill Chain", "2. سلسلة القتل السيبرانية"),
      p: [
        l("An intrusion is rarely a single act. The Cyber Kill Chain (Lockheed Martin) describes the usual stages: reconnaissance, weaponisation and delivery, exploitation, installation (persistence), command and control, and finally actions on objectives such as stealing data or encrypting files.", "الاختراق نادرًا ما يكون فعلًا واحدًا. تصف سلسلة القتل السيبرانية (لوكهيد مارتن) المراحل المعتادة: الاستطلاع، والتسليح والتسليم، والاستغلال، والتثبيت (الاستمرارية)، والتحكم والسيطرة، وأخيرًا تنفيذ الأهداف كسرقة البيانات أو تشفير الملفات."),
        l("The defender's advantage: the chain has many links. Stopping the attacker at any one — blocking the phishing e-mail, patching the exploited flaw, detecting the unusual outbound connection — breaks the whole attack. The earlier you stop it, the lower the cost.", "ميزة المدافع: السلسلة ذات حلقات كثيرة. إيقاف المهاجم عند أي حلقة — حجب رسالة التصيّد، أو ترقيع الثغرة المستغلة، أو كشف الاتصال الخارجي غير المعتاد — يكسر الهجوم كله. وكلما أوقفته مبكرًا قلّت التكلفة."),
        l("MITRE ATT&CK is a complementary, much more detailed public knowledge base of real attacker tactics and techniques, widely used for detection engineering and threat reports.", "إطار MITRE ATT&CK قاعدة معرفة عامة مكمّلة وأكثر تفصيلًا لتكتيكات المهاجمين وتقنياتهم الفعلية، ويُستخدم على نطاق واسع في هندسة الكشف وتقارير التهديدات."),
      ],
    },
    {
      h: l("3. Common attack families", "3. عائلات الهجمات الشائعة"),
      p: [l("You will study many of these in depth later; here is the map.", "ستدرس كثيرًا منها بتعمّق لاحقًا؛ وهذه هي الخريطة.")],
      bullets: [
        l("Social engineering and phishing – tricking people (Session 4).", "الهندسة الاجتماعية والتصيّد – خداع الأشخاص (الجلسة 4)."),
        l("Malware, including ransomware – hostile software (Session 3).", "البرمجيات الخبيثة ومنها الفدية – برمجيات عدائية (الجلسة 3)."),
        l("Credential attacks – password guessing, stuffing with leaked passwords, spraying (Session 11).", "هجمات بيانات الدخول – تخمين كلمات المرور وحشو الكلمات المسرّبة والرش (الجلسة 11)."),
        l("Network attacks – eavesdropping, man-in-the-middle, spoofing, denial of service (Sessions 6–8).", "هجمات الشبكة – التنصت، الوسيط، الانتحال، حجب الخدمة (الجلسات 6–8)."),
        l("Web application attacks – SQL injection, XSS (Session 13).", "هجمات تطبيقات الويب – حقن SQL وXSS (الجلسة 13)."),
        l("Supply-chain attacks – compromising a trusted vendor or software update to reach many victims.", "هجمات سلسلة التوريد – اختراق مورّد موثوق أو تحديث برمجي للوصول إلى ضحايا كثيرين."),
        l("Insider misuse and simple mistakes such as misconfigured cloud storage.", "إساءة استخدام المطّلعين والأخطاء البسيطة مثل تخزين سحابي سيئ الإعداد."),
      ],
    },
    {
      h: l("4. Attack surface and attack vectors", "4. سطح الهجوم ونواقله"),
      p: [
        l("The attack surface is the total set of points where an attacker can try to enter or extract data: exposed servers and ports, web applications, e-mail inboxes, employee devices, cloud accounts, third-party vendors and even physical doors. An attack vector is the specific path used, such as a malicious attachment or an exposed remote desktop service.", "سطح الهجوم هو مجموع النقاط التي قد يحاول المهاجم الدخول أو استخراج البيانات منها: الخوادم والمنافذ المكشوفة، وتطبيقات الويب، وصناديق البريد، وأجهزة الموظفين، والحسابات السحابية، والموردون الخارجيون، وحتى الأبواب المادية. أما ناقل الهجوم فهو المسار المحدد المستخدم، كمرفق خبيث أو خدمة سطح مكتب بعيد مكشوفة."),
        l("Reducing the attack surface — turning off unused services, removing old accounts, closing unnecessary ports — is one of the cheapest and most effective security measures.", "تقليل سطح الهجوم — بإيقاف الخدمات غير المستخدمة وحذف الحسابات القديمة وإغلاق المنافذ غير الضرورية — من أرخص التدابير الأمنية وأكثرها فعالية."),
      ],
      callout: { kind: "tip", text: l("Ask of every system: 'Does this really need to be reachable from the Internet?' Often the answer is no.", "اسأل عن كل نظام: «هل يحتاج فعلًا إلى أن يكون متاحًا من الإنترنت؟» وغالبًا يكون الجواب لا.") },
    },
  ],
  diagram: {
    kind: "flow",
    title: l("The Cyber Kill Chain – break any link, stop the attack", "سلسلة القتل السيبرانية – اكسر أي حلقة توقف الهجوم"),
    caption: l("Each stage offers a defensive opportunity: awareness and filtering early, patching and hardening in the middle, monitoring and segmentation late.", "كل مرحلة تتيح فرصة دفاعية: الوعي والترشيح مبكرًا، والتحديث والتحصين في الوسط، والمراقبة والتقسيم متأخرًا."),
    nodes: [
      { label: l("1 Reconnaissance", "1 الاستطلاع"), desc: l("Gather info on the target", "جمع معلومات عن الهدف") },
      { label: l("2 Delivery", "2 التسليم"), desc: l("Phishing, USB, web link", "تصيّد، USB، رابط ويب") },
      { label: l("3 Exploitation", "3 الاستغلال"), desc: l("Use a flaw or a user's trust", "استغلال ثغرة أو ثقة مستخدم") },
      { label: l("4 Persistence", "4 الاستمرارية"), desc: l("Install backdoor, new account", "تثبيت باب خلفي أو حساب جديد") },
      { label: l("5 Command & control", "5 التحكم والسيطرة"), desc: l("Remote channel to attacker", "قناة بعيدة للمهاجم") },
      { label: l("6 Objectives", "6 الأهداف"), desc: l("Steal, encrypt, destroy", "سرقة، تشفير، تدمير") },
    ],
  },
  lab: {
    tool: "match",
    title: l("Lab 2 – Profile the attacker", "المختبر 2 – تحليل ملف المهاجم"),
    scenario: l("You are a junior analyst reading six short incident reports. For each, decide which type of threat actor is the most probable based on motive, method and target.", "أنت محلل مبتدئ تقرأ ستة تقارير حوادث قصيرة. لكل تقرير حدّد نوع الفاعل الأكثر احتمالًا بناءً على الدافع والأسلوب والهدف."),
    safety: l("Attribution in real life is difficult and often uncertain. Treat the labels as hypotheses, never as accusations against real people or countries.", "في الواقع يصعب نسب الهجمات وغالبًا ما تكون غير مؤكدة. تعامل مع التصنيفات كفرضيات لا كاتهامات لأشخاص أو دول حقيقية."),
    steps: [
      l("Read the actor table in the lesson again.", "أعد قراءة جدول الفاعلين في الدرس."),
      l("Match all six reports to an actor using the selectors.", "طابق التقارير الستة مع الفاعلين باستخدام القوائم."),
      l("Click Check and review the explanation for any mismatch.", "اضغط تحقق وراجع أي عدم تطابق."),
      l("For two reports, name one Kill Chain stage where the victim could have stopped the attack.", "لتقريرين اثنين، سمِّ مرحلة من السلسلة كان يمكن للضحية إيقاف الهجوم عندها."),
      l("Write down which report suggests an attack surface that should simply have been closed.", "دوّن أي تقرير يشير إلى سطح هجوم كان ينبغي إغلاقه ببساطة."),
    ],
    expected: l("All six reports matched correctly and a short note per report on the stage where the attack could have been broken.", "تطابق التقارير الستة بشكل صحيح مع ملاحظة قصيرة لكل تقرير عن المرحلة التي كان يمكن كسر الهجوم عندها."),
    match: {
      prompt: l("Match each report with the most likely threat actor", "طابق كل تقرير مع الفاعل الأكثر احتمالًا"),
      options: [l("Cybercriminal", "مجرم سيبراني"), l("Nation-state (APT)", "دولة (APT)"), l("Hacktivist", "ناشط مخترق"), l("Insider", "مطّلع داخلي"), l("Script kiddie", "مبتدئ")],
      items: [
        { text: l("A hospital's files are encrypted and a Bitcoin payment is demanded within 72 hours.", "تُشفَّر ملفات مستشفى ويُطلب دفع بيتكوين خلال 72 ساعة."), answer: 0 },
        { text: l("For 18 months an unknown group quietly copies design documents from an aerospace supplier using custom tools.", "طوال 18 شهرًا تنسخ مجموعة مجهولة بصمت وثائق تصميم من مورّد طيران باستخدام أدوات مخصصة."), answer: 1 },
        { text: l("A company's homepage is replaced with a political slogan the day after a controversial announcement.", "يُستبدل الموقع الرئيسي لشركة بشعار سياسي في اليوم التالي لإعلان مثير للجدل."), answer: 2 },
        { text: l("A sales manager who was just dismissed downloads the whole customer list the night before leaving.", "مدير مبيعات فُصل للتو يحمّل قائمة العملاء كاملة في الليلة السابقة لمغادرته."), answer: 3 },
        { text: l("A teenager runs a downloaded vulnerability scanner against random websites and posts screenshots online.", "مراهق يشغّل ماسح ثغرات محمّلًا ضد مواقع عشوائية وينشر لقطات الشاشة."), answer: 4 },
        { text: l("Thousands of users' cards are sold on a forum after a web shop was compromised.", "تُباع بطاقات آلاف المستخدمين في منتدى بعد اختراق متجر إلكتروني."), answer: 0 },
      ],
    },
  },
  quiz: [
    { q: l("Which actor is typically the most patient and best resourced?", "أي فاعل يكون عادةً الأكثر صبرًا والأفضل موردًا؟"), options: [l("Script kiddie", "مبتدئ"), l("Hacktivist", "ناشط مخترق"), l("Nation-state APT", "تهديد دولة مستمر متقدم"), l("Opportunistic thief", "لص انتهازي")], answer: 2, why: l("APTs are state-backed, run long campaigns and develop custom tools.", "التهديدات المتقدمة مدعومة من دول وتنفذ حملات طويلة وتطوّر أدوات مخصصة.") },
    { q: l("What is the main motive of most cybercriminals?", "ما الدافع الرئيسي لمعظم المجرمين السيبرانيين؟"), options: [l("Financial gain", "الربح المالي"), l("Political change", "التغيير السياسي"), l("Curiosity only", "الفضول فقط"), l("Revenge", "الانتقام")], answer: 0, why: l("Most organised cybercrime — ransomware, fraud, data sale — is profit driven.", "معظم الجرائم السيبرانية المنظمة — الفدية والاحتيال وبيع البيانات — مدفوعة بالربح.") },
    { q: l("Which is NOT a stage of the Cyber Kill Chain?", "أي مما يلي ليس مرحلة من سلسلة القتل السيبرانية؟"), options: [l("Reconnaissance", "الاستطلاع"), l("Exploitation", "الاستغلال"), l("Command and control", "التحكم والسيطرة"), l("Disaster recovery planning", "تخطيط التعافي من الكوارث")], answer: 3, why: l("Disaster recovery is a defensive process, not an attacker stage.", "التعافي من الكوارث عملية دفاعية وليس مرحلة للمهاجم.") },
    { q: l("An 'attack surface' is…", "«سطح الهجوم» هو…"), options: [l("The software the attacker writes", "البرمجيات التي يكتبها المهاجم"), l("All points where an attacker could try to enter or extract data", "كل النقاط التي يمكن للمهاجم محاولة الدخول أو استخراج البيانات منها"), l("The area covered by Wi-Fi", "المنطقة التي تغطيها شبكة الواي فاي"), l("The firewall's rule list", "قائمة قواعد الجدار الناري")], answer: 1, why: l("The surface is every exposed entry or exit point; reducing it reduces risk.", "السطح هو كل نقطة دخول أو خروج مكشوفة؛ وتقليله يقلل المخاطر.") },
    { q: l("An employee who accidentally e-mails a spreadsheet to the wrong customer is an example of…", "موظف يرسل بالخطأ جدولًا إلى عميل خاطئ هو مثال على…"), options: [l("A nation-state attack", "هجوم دولة"), l("A malicious insider only", "مطّلع خبيث فقط"), l("An accidental insider threat", "تهديد داخلي غير مقصود"), l("Hacktivism", "نشاط مخترق")], answer: 2, why: l("Insider threats include honest mistakes, which are among the most common causes of breaches.", "التهديدات الداخلية تشمل الأخطاء البريئة وهي من أكثر أسباب التسريب شيوعًا.") },
    { q: l("Why is stopping an attack early in the kill chain preferable?", "لماذا يُفضَّل إيقاف الهجوم مبكرًا في السلسلة؟"), options: [l("It is less costly and limits damage", "أقل تكلفة ويحدّ من الضرر"), l("Later stages cannot be detected", "المراحل اللاحقة لا يمكن كشفها"), l("Attackers give up after reconnaissance", "المهاجمون يتوقفون بعد الاستطلاع"), l("It removes the need for backups", "يلغي الحاجة للنسخ الاحتياطي")], answer: 0, why: l("Early disruption prevents persistence and data loss, reducing cleanup cost.", "الإيقاف المبكر يمنع الاستمرارية وفقدان البيانات ويقلل كلفة المعالجة.") },
  ],
  homework: {
    title: l("Homework 2 – Read a real threat report", "الواجب 2 – قراءة تقرير تهديدات حقيقي"),
    tasks: [
      l("Open a public annual threat report (see references) and read its executive summary.", "افتح تقرير تهديدات سنويًا عامًا (انظر المراجع) واقرأ ملخصه التنفيذي."),
      l("Write down the three most common initial attack vectors it reports.", "دوّن أكثر ثلاثة نواقل هجوم أولية شيوعًا يذكرها."),
      l("Map one described attack to the six kill-chain stages.", "اربط أحد الهجمات الموصوفة بمراحل السلسلة الست."),
      l("Propose one low-cost control for each of the three vectors.", "اقترح ضابطًا منخفض التكلفة لكل ناقل من النواقل الثلاثة."),
    ],
    deliverable: l("A half-page summary: vectors, kill-chain mapping and three recommended controls, with the report cited.", "ملخص بنصف صفحة: النواقل، وربطها بالسلسلة، وثلاثة ضوابط موصى بها، مع ذكر التقرير المرجعي."),
  },
  refs: [
    { title: "MITRE ATT&CK knowledge base", org: "MITRE", url: "https://attack.mitre.org/" },
    { title: "Data Breach Investigations Report (DBIR)", org: "Verizon", url: "https://www.verizon.com/business/resources/reports/dbir/" },
    { title: "ENISA Threat Landscape", org: "ENISA", url: "https://www.enisa.europa.eu/topics/cyber-threats/threats-and-trends" },
    { title: "Cyber Kill Chain", org: "Lockheed Martin", url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html" },
  ],
  terms: [
    { term: l("Threat actor", "الفاعل المهدِّد"), def: l("A person or group that attempts to harm an organisation's assets.", "شخص أو جماعة تحاول الإضرار بأصول مؤسسة.") },
    { term: l("APT", "التهديد المستمر المتقدم"), def: l("Advanced Persistent Threat: a well-resourced, long-term, targeted intrusion campaign.", "حملة اختراق مستهدفة طويلة الأمد جيدة الموارد.") },
    { term: l("Cyber Kill Chain", "سلسلة القتل السيبرانية"), def: l("A model of the stages of an intrusion from reconnaissance to objectives.", "نموذج لمراحل الاختراق من الاستطلاع إلى تحقيق الأهداف.") },
    { term: l("Attack surface", "سطح الهجوم"), def: l("The sum of all exposed points where an attacker may try to enter.", "مجموع كل النقاط المكشوفة التي قد يحاول المهاجم الدخول منها.") },
    { term: l("Attack vector", "ناقل الهجوم"), def: l("The specific path or method used to deliver an attack.", "المسار أو الأسلوب المحدد المستخدم لتنفيذ هجوم.") },
    { term: l("Supply-chain attack", "هجوم سلسلة التوريد"), def: l("Compromising a supplier or update channel to reach its customers.", "اختراق مورّد أو قناة تحديث للوصول إلى عملائه.") },
    { term: l("Insider threat", "التهديد الداخلي"), def: l("Risk from people with legitimate access, malicious or accidental.", "خطر ناتج عن أشخاص لديهم وصول مشروع، متعمدين أو غير متعمدين.") },
  ],
};