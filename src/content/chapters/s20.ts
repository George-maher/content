import { l, type Session } from "../types";

export const s20: Session = {
  id: 20,
  phase: 5,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Capstone: Secure a Small Business, Build a Roadmap and Plan Your Next Steps",
    "المشروع الختامي: أمّن شركة صغيرة، وابن خارطة طريق، وخطط لخطواتك التالية",
  ),
  summary: l(
    "Bring the whole course together: assess a small business as a professional would, prioritise a 90-day security roadmap, measure progress, map your skills to cybersecurity careers, and plan how to keep learning with authorisation and integrity.",
    "اجمع الدورة كلها: قيّم شركة صغيرة كما يفعل المحترف، ورتّب خارطة طريق أمنية لمدة 90 يومًا، واقياس التقدم، واربط مهاراتك بالمسارات المهنية في الأمن السيبراني، وخطط لمواصلة التعلم بتفويض ونزاهة.",
  ),
  overview: l(
    "This capstone session asks you to act as a security professional for a small business and apply everything from the course. You will read a realistic brief, think in terms of assets, threats, vulnerabilities and controls, map each course session to a concrete control, build a justified 30-60-90-day roadmap, choose measurable indicators, and produce a one-page summary for the owner. The session also looks forward: cybersecurity offers many career paths, and the habits that matter — layered defences, risk thinking, assuming breach, and acting with authorisation and integrity — are what carry you beyond this foundation. The session closes with a lab where you use a risk register to score and prioritise the risks facing a small business.",
    "تطلب منك هذه الجلسة الختامية أن تتصرف كمتخصص أمني لشركة صغيرة وتطبق كل ما في الدورة. فستقرأ ملخصًا واقعيًا، وتفكر بدلالة الأصول والتهديدات والثغرات والضوابط، وتربط كل جلسة في الدورة بضابط ملموس، وتبني خارطة طريق مبررة لمدة 30-60-90 يومًا، وتختار مؤشرات قابلة للقياس، وتقدم ملخصًا من صفحة للمالك. كما تنظر الجلسة إلى الأمام: فالأمن السيبراني يوفّر مسارات مهنية كثيرة، والعادات المهمة — الدفاع المتعمّق وتفكير المخاطر وافتراض الاختراق والتصرف بتفويض ونزاهة — هي ما يحمل تفاصيلك بعد هذه الدورة التأسيسية. وتنتهي الجلسة بمختبر تستخدم فيه سجل مخاطر لتسجيل وترتيب مخاطر تواجه شركة صغيرة.",
  ),
  whyItMatters: l(
    "A course of isolated lessons becomes a real skill only when you can apply it to a messy, real situation. Businesses do not buy 'security' in one product; they reduce risk over time, choosing what to do first, how to justify it, and how to measure whether it worked. This capstone trains exactly that judgement: what to protect, what to do first, how to sequence controls, and how to communicate progress to a non-technical owner. It also connects the skills you have built to the careers where they are used — because the mindset, not just the tool list, is what makes a security professional effective and trustworthy.",
    "لا تصبح دورة من الدروس المنفصلة مهارة حقيقية إلا إذا استطعت تطبيقها على موقف فعلي وفوضوي. فالمنظمات لا تشتري «أمنًا» في منتج واحد؛ بل تقلل المخاطر مع الوقت، وتختار ما تفعله أولًا، وكيف تبرره، وكيف تقيس هل نجح. ويدرّب هذا المشروع الختامي بالضبط هذا الحكم: ما تحمي، وما تفعله أولًا، وكيف تترتيب الضوابط، وكيف تبلغ عن التقدم لصاحب غير تقني. ويربط أيضًا المهارات التي بناها بالوظائف التي تُستخدم فيها — لأن العقلية، لا قائمة الأدوات وحدها، هي ما يجعل المتخصص الأمني فعالًا وموثوقًا.",
  ),
  prerequisites: [
    l(
      "The whole Level 1 course: this capstone applies sessions 1–19 to a realistic business.",
      "دورة المستوى الأول كاملة: يطبّق هذا المشروع الختامي الجلسات 1–19 على أعمال واقعية.",
    ),
    l(
      "Session 14, Vulnerability Management and Session 18, Risk Management: how to identify, score and treat risks.",
      "الجلسة 14، إدارة الثغرات والجلسة 18، إدارة المخاطر: كيفية تحديد المخاطر وتسجيلها ومعالجتها.",
    ),
    l(
      "Session 16, Incident Response and Session 19, Cloud Security: how readiness and modern environments shape the plan.",
      "الجلسة 16، الاستجابة للحوادث والجلسة 19، أمن السحابة: كيف تُشكّل الجاهزية والبيئات الحديثة الخطة.",
    ),
    l(
      "A professional mindset: treat the business's weaknesses as confidential, and act only within authorised scope.",
      "عقلية مهنية: تعامل مع نقاط ضعف المؤسسة بسرية، وتصرف فقط ضمن النطاق المصرح به.",
    ),
  ],
  objectives: [
    l(
      "Apply risk thinking and frameworks to assess a realistic small organisation.",
      "تطبيق التفكير القائم على المخاطر والأطر لتقييم مؤسسة صغيرة واقعية.",
    ),
    l(
      "Map each foundation session to the concrete control it enables.",
      "ربط كل جلسة تأسيسية بالضابط الملموس الذي تتيح.",
    ),
    l(
      "Prioritise controls into a justified 30-60-90-day roadmap.",
      "ترتيب الضوابط في خارطة طريق مبررة لمدة 30-60-90 يومًا.",
    ),
    l(
      "Choose measurable indicators and report progress to a non-technical owner.",
      "اختيار مؤشرات قابلة للقياس وإبلاغ التقدم لصاحب غير تقني.",
    ),
    l(
      "Identify cybersecurity career paths, certifications and practice resources.",
      "تحديد المسارات المهنية في الأمن السيبراني والشهادات وموارد التدريب.",
    ),
    l(
      "Score and prioritise a small business's risks with a risk register.",
      "تسجيل مخاطر شركة صغيرة وترتيبها بسجل مخاطر.",
    ),
  ],
  agenda: [
    { label: l("Welcome and the capstone brief", "الترحيب وملخص المشروع الختامي"), minutes: 5 },
    { label: l("Thinking in risk: assets, threats, controls", "التفكير في المخاطر: الأصول والتهديدات والضوابط"), minutes: 12 },
    { label: l("Mapping the course to concrete controls", "ربط الدورة بضوابط ملموسة"), minutes: 13 },
    { label: l("Building the 30-60-90-day roadmap", "بناء خارطة طريق 30-60-90 يومًا"), minutes: 13 },
    { label: l("Layered defences and resilience", "الدفاعات المتعمّقة والمرونة"), minutes: 12 },
    { label: l("Measuring progress and proving security", "قياس التقدم وإثبات الأمن"), minutes: 12 },
    { label: l("Career paths and keeping learning", "المسارات المهنية ومواصلة التعلم"), minutes: 12 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 11 },
  ],
  introduction: l(
    "This capstone session asks you to act as a security professional for a small business and apply everything from the course. You will read a realistic brief, think in terms of assets, threats, vulnerabilities and controls, map each session to a control, build a justified 30-60-90-day roadmap, choose measurable indicators, and produce a one-page summary for the owner. The session also looks forward to career paths and the habits that matter beyond this foundation. The session closes with a lab where you use a risk register to score and prioritise the risks facing a small business.",
    "تطلب منك هذه الجلسة الختامية أن تتصرف كمتخصص أمني لشركة صغيرة وتطبق كل ما في الدورة. فستقرأ ملخصًا واقعيًا، وتفكر بدلالة الأصول والتهديدات والثغرات والضوابط، وتربط كل جلسة بضابط، وتبني خارطة طريق مبررة لمدة 30-60-90 يومًا، وتختار مؤشرات قابلة للقياس، وتقدم ملخصًا من صفحة للمالك. كما تنظر الجلسة إلى المستقبل: المسارات المهنية والعادات المهمة بعد هذه الدورة التأسيسية. وتنتهي الجلسة بمختبر تستخدم فيه سجل مخاطر لتسجيل وترتيب مخاطر تواجه شركة صغيرة.",
  ),
  sections: [
    {
      h: l("1. The capstone brief: Nova Accounting Ltd.", "1. ملخص المشروع الختامي: شركة نوفا للمحاسبة"),
      p: [
        l(
          "Nova Accounting has 25 employees, an office with a flat network (staff PCs, a file server, printers, guest Wi-Fi and cameras on one subnet), Microsoft 365 or Google Workspace for e-mail, a cloud accounting application, and laptops used from home. Administrators use their everyday accounts. Backups run to a USB disk plugged into the file server. Staff have never had security training. The owner wants to know: what should we do first, what will it cost in effort, and how will we know we are safer?",
          "لدى شركة نوفا للمحاسبة 25 موظفًا ومكتبًا بشبكة مسطحة (حواسيب الموظفين وخادم ملفات وطابعات وواي فاي ضيوف وكاميرات في شبكة فرعية واحدة) وMicrosoft 365 أو Google Workspace للبريد وتطبيق محاسبة سحابي وحواسيب محمولة تُستخدم من المنزل. ويستخدم المديرون حساباتهم اليومية. وتُجرى النسخ الاحتياطية إلى قرص USB موصول بخادم الملفات. ولم يتلق الموظفون أي تدريب أمني. ويريد المالك أن يعرف: ماذا نفعل أولًا، وكم سيكلف من جهد، وكيف سنعرف أننا أصبحنا أكثر أمانًا؟",
        ),
        l(
          "Your task is to produce a short, professional security plan. Approach it the way professionals do: understand the business and what it must protect — client financial data, availability of the accounting system, reputation. List the most likely threats: phishing, ransomware, credential theft, a lost laptop, supplier compromise. Find the weaknesses in the description above, rate the risks, choose treatments, and schedule them. The brief is the kind of realistic, imperfect situation a professional meets every day: no neat list of controls, just assets, threats and a budget.",
          "مهمتك إعداد خطة أمنية موجزة ومهنية. وعامل معها كما يفعل المحترفون: افهم الأعمال وما يجب حمايته — بيانات العملاء المالية وتوافر نظام المحاسبة والسمعة. واذكر أرجح التهديدات: التصيّد والفدية وسرقة بيانات الدخول وفقدان حاسوب محمول واختراق مورد. واعثر على نقاط الضعف في الوصف أعلاه وقيّم المخاطر واختر المعالجات وجدولها. والملخص هو نوع الموقف الواقعي غير المثالي الذي يواجهه المحترف كل يوم: لا قائمة مرتبة من الضوابط، بل أصول وتهديدات وميزانية.",
        ),
      ],
      callout: { kind: "key", text: l("A professional plan answers three questions the owner asked: what to do first, what it costs in effort, and how you will know it worked — all driven by risk, not by products.", "تجيب الخطة المهنية عن ثلاثة أسئلة طرحها المالك: ماذا نفعل أولًا، وكم يكلف من جهد، وكيف سنعرف أنه نجح — وكلها مدفوعة بالمخاطر لا بالمنتجات.") },
    },
    {
      h: l("2. Thinking in risk: assets, threats, controls", "2. التفكير في المخاطر: الأصول والتهديدات والضوابط"),
      p: [
        l(
          "The capstone is an exercise in risk thinking. An asset is what the business must protect — here, client financial data, the accounting system's availability and the firm's reputation. A threat is something that could harm an asset — phishing, ransomware, credential theft, a lost laptop, supplier compromise. A vulnerability is a weakness that a threat could exploit — no MFA, a flat network, an attached USB backup, unpatched laptops. A control is what reduces the risk — a control lowers the likelihood or the impact. Professionals reason in this chain: identify what matters, what threatens it, where it is weak, and what reduces the risk — then choose treatments and schedule them by risk reduction per effort.",
          "المشروع الختامي تدريب على التفكير في المخاطر. فالأصل ما يجب على الأعمال حمايته — هنا بيانات العملاء المالية وتوافر نظام المحاسبة وسمعة الشركة. والتهديد ما قد يضرّ بالأصل — التصيّد والفدية وسرقة بيانات الدخول وفقدان حاسوب محمول واختراق المورد. والثغرة ضعف يمكن للتهديد استغلاله — غياب MFA وشبكة مسطحة ونسخة USB موصولة وحواسيب غير محدّثة. والضابط ما يقلل الخطر — فيضلل الضابط الاحتمالية أو الأثر. ويفكّر المحترفون في هذا السلسلة: حدد ما يهم، وما يهدده، وأين هو ضعيف، وما يقلل الخطر — ثم اختر المعالجات وجدولها بحسب خفض الخطر لكل جهد.",
        ),
        l(
          "This is the mindset the whole course tried to build: think in terms of assets, threats, vulnerabilities and controls; layer your defences; assume that prevention will sometimes fail; and always act with authorisation and integrity. A single product does not make a business secure, and a checklist does not make it safe — a reasoned, layered, measured plan does. The owner is not buying security; the owner is buying reduced risk, and that is what you deliver.",
          "هذه هي العقلية التي حاولت الدورة كلها بناؤها: فكّر بدلالة الأصول والتهديدات والثغرات والضوابط؛ وضع دفاعاتك في طبقات؛ وافترض أن الوقاية ستفشل أحيانًا؛ وتصرّف دائمًا بتفويض ونزاهة. فالمنتج الواحد لا يجعل المؤسسة آمنة، والقائمة لا تجعلها آمنة — بل الخطة المدروسة المتعمّقة والمقاسة. فالمالك لا يشتري أمنًا؛ يشتري خطرًا مخفّضًا، وهذا ما تقدمه.",
        ),
      ],
      callout: { kind: "key", text: l("Think in the chain assets → threats → vulnerabilities → controls → treatments. The owner buys reduced risk, delivered through a layered, measured plan — not a single product.", "فكّر في السلسلة: أصول ← تهديدات ← ثغرات ← ضوابط ← معالجات. فالمالك يشتري خطرًا مخفّضًا، يُقدَّم عبر خطة متعمّقة ومقاسة — لا منتجًا واحدًا.") },
    },
    {
      h: l("3. Mapping the course to concrete controls", "3. ربط الدورة بضوابط ملموسة"),
      p: [
        l(
          "Every session in the course contributes at least one control to the Nova plan. The table maps each weakness at Nova to a concrete control and to the sessions that enable it. This mapping is the heart of the capstone: it shows how the course's topics combine into a coherent defence, and it justifies every action in the roadmap by the risk it reduces.",
          "كل جلسة في الدورة تسهم بضابط واحد على الأقل في خطة نوفا. ويربط الجدول كل نقطة ضعف في نوفا بضابط ملموس والجلسات التي تتيح هذا الضعف. فهذا الربط هو قلب المشروع الختامي: يُظهر كيف تدمج مواضيع الدورة في دفاع متسق، ويبرر كل إجراء في خارطة الطريق بالخطر الذي يخفضه.",
        ),
      ],
      table: {
        head: [l("Weakness at Nova", "نقطة الضعف في نوفا"), l("Control", "الضابط"), l("Course session", "جلسة الدورة")],
        rows: [
          [l("Staff click phishing links", "الموظفون ينقرون روابط التصيّد"), l("Awareness training, report button, e-mail filtering, SPF/DKIM/DMARC", "تدريب توعوي وزر إبلاغ وترشيح بريد وSPF/DKIM/DMARC"), l("4, 6", "4، 6")],
          [l("Single passwords, no MFA", "كلمات مرور فقط وبلا MFA"), l("Password manager + MFA for e-mail, admin and accounting app", "مدير كلمات مرور + MFA للبريد والمدير وتطبيق المحاسبة"), l("12", "12")],
          [l("Admins use daily accounts", "المديرون يستخدمون حساباتهم اليومية"), l("Separate admin accounts, least privilege, access reviews", "حسابات إدارة منفصلة وأقل صلاحية ومراجعات وصول"), l("5, 9", "5، 9")],
          [l("Flat network", "شبكة مسطحة"), l("Segment staff, servers, guests and cameras; firewall rules; secure Wi-Fi", "تقسيم الموظفين والخوادم والضيوف والكاميرات؛ قواعد جدار ناري؛ واي فاي آمن"), l("10, 7", "10، 7")],
          [l("USB backup on the server", "نسخة USB على الخادم"), l("3-2-1 backups with an offline/cloud copy and restore tests", "نسخ 3-2-1 مع نسخة معزولة/سحابية واختبارات استعادة"), l("3, 15", "3، 15")],
          [l("Unpatched laptops and servers", "حواسيب وخوادم غير محدّثة"), l("Asset inventory, automatic updates, EDR, disk encryption", "حصر الأصول وتحديثات تلقائية وEDR وتشفير الأقراص"), l("5, 8, 14", "5، 8، 14")],
          [l("Cloud sharing and SaaS settings", "المشاركة السحابية وإعدادات SaaS"), l("Review sharing links, enforce MFA, conditional access, audit logs", "مراجعة روابط المشاركة وفرض MFA والوصول المشروط وسجلات التدقيق"), l("9, 18", "9، 18")],
          [l("No visibility or plan", "لا رؤية ولا خطة"), l("Central logging and alerts; incident response playbooks; contacts", "تسجيل مركزي وتنبيهات؛ أدلة استجابة للحوادث؛ جهات اتصال"), l("16, 17", "16، 17")],
          [l("Client data obligations", "التزامات بيانات العملاء"), l("Data classification, retention, breach-notification procedure", "تصنيف البيانات والاحتفاظ وإجراء إخطار الاختراق"), l("1, 19", "1، 19")],
          [l("Web-facing portal", "بوابة مواجهة للويب"), l("Vendor security questions, secure configuration, WAF, OWASP checks", "أسئلة أمن للمورد وإعداد آمن وWAF وفحوص OWASP"), l("13", "13")],
        ],
      },
      callout: { kind: "key", text: l("The course is not a list of topics but a set of controls that combine: each weakness at Nova has a control, and each control traces back to sessions you have learned.", "ليست الدورة قائمة مواضيع بل مجموعة ضوابط تدمج: فلكل ضعف في نوفا ضابط، ولكل ضابط مسار يعود إلى جلسات تعلمتها.") },
    },
    {
      h: l("4. Building the 30-60-90-day roadmap", "4. بناء خارطة طريق 30-60-90 يومًا"),
      p: [
        l(
          "Prioritise by risk reduction per effort, and sequence the work in three phases. Days 1–30, foundations and quick wins: inventory devices, accounts and data; enable MFA on e-mail, admin and finance systems; turn on automatic updates; fix backups (an offsite or offline copy and a first restore test); remove unused accounts. These are low-effort, high-impact actions that close the biggest holes first.",
          "رتّب الأولويات بحسب خفض المخاطر لكل جهد، وحدّد تسلسل العمل في ثلاث مراحل. الأيام 1–30 الأسس والمكاسب السريعة: حصر الأجهزة والحسابات والبيانات؛ وتفعيل MFA للبريد والمدير والأنظمة المالية؛ وتشغيل التحديثات التلقائية؛ وإصلاح النسخ الاحتياطية (نسخة خارجية أو معزولة وأول اختبار استعادة)؛ وإزالة الحسابات غير المستخدمة. فهذه إجراءات قليلة الجهد عظيمة الأثر تغلق أكبر الثغرات أولًا.",
        ),
        l(
          "Days 31–60, protect and detect: separate admin accounts; segment the network (guests and cameras first); deploy endpoint protection and disk encryption; start phishing training and the report button; review cloud sharing; turn on audit logging and alerts for key systems. Days 61–90, prove and improve: write the incident response plan and run a tabletop exercise; document policies (acceptable use, password, data classification, backup); run a vulnerability scan and fix the highest items; measure and report progress to the owner. The roadmap is a justified sequence, not a random list — each phase builds on the last and each action reduces a named risk.",
          "الأيام 31–60 الحماية والكشف: حسابات إدارة منفصلة؛ وتقسيم الشبكة (الضيوف والكاميرات أولًا)؛ ونشر حماية النقاط الطرفية وتشفير الأقراص؛ وبدء التدريب على التصيّد وزر الإبلاغ؛ ومراجعة المشاركة السحابية؛ وتفعيل تسجيل التدقيق والتنبيهات للأنظمة الرئيسية. والأيام 61–90 الإثبات والتحسين: كتابة خطة الاستجابة للحوادث وتنفيذ تمرين طاولة؛ وتوثيق السياسات (الاستخدام المقبول وكلمات المرور وتصنيف البيانات والنسخ الاحتياطي)؛ وإجراء فحص ثغرات وإصلاح الأعلى خطرًا؛ وقياس التقدم ورفع تقرير للمالك. فخارطة الطريق تسلسل مبرر لا قائمة عشوائية — كل مرحلة تبني على السابقة وكل إجراء يخفض خطرًا مسميًا.",
        ),
      ],
      callout: { kind: "key", text: l("Sequence by risk reduction per effort: quick wins first (inventory, MFA, updates, backups), then protect and detect, then prove and improve — each phase building on the last.", "رتّب بحسب خفض الخطر لكل جهد: المكاسب السريعة أولًا (الحصر وMFA والتحديثات والنسخ)، ثم الحماية والكشف، ثم الإثبات والتحسين — كل مرحلة تبني على السابقة.") },
    },
    {
      h: l("5. Layered defences and resilience", "5. الدفاعات المتعمّقة والمرونة"),
      p: [
        l(
          "No single control is enough, so defences are layered. If one layer fails, another holds. At Nova the layers are: prevent (MFA, patching, segmentation, encryption), detect (logging, alerts, endpoint protection), respond (incident response plan, playbooks, contacts) and recover (tested, isolated backups). A layered plan assumes that prevention will sometimes fail — a phishing email gets through, a device is lost, a vulnerability is exploited — and ensures that detection, response and recovery limit the damage.",
          "لا يكفي ضابط واحد، لذا تُوضع الدفاعات في طبقات. فإذا فشلت طبقة واحدة تمسك أخرى. وفي نوفا تكون الطبقات: وقاية (MFA والترقيع والتقسيم والتشفير)، وكشف (التسجيل والتنبيهات وحماية النقاط الطرفية)، واستجابة (خطة الاستجابة للحوادث وأدلة التشغيل وجهات الاتصال)، واستشفاء (نسخ مختبرة ومعزولة). وتفترض الخطة المتعمّقة أن الوقاية ستفشل أحيانًا — فتُمرر رسالة تصيّد أو يُفقد جهاز أو تُستغل ثغرة — وتتأكد من أن الكشف والاستجابة والاستشفاء يحد من الضرر.",
        ),
        l(
          "Resilience comes from backups and readiness. Backups must follow a 3-2-1 approach — three copies, two different media, one offsite or offline — and must be tested by restoring, because an untested backup fails when needed most. A USB disk permanently attached to the server is not resilient: ransomware encrypts the server and its attached backup together. Readiness means the incident response plan is written, owners are named, contacts are out-of-band, and the team has rehearsed — because an untested plan fails in a real incident.",
          "تأتي المرونة من النسخ والجاهزية. ويجب أن تتبع النسخ نهج 3-2-1 — ثلاث نسخ ووسيطان مختلفان ونسخة خارجية أو معزولة — ويجب اختبارها بالاستعادة، لأن النسخة غير المختبرة تفشل عند الحاجة الأشد. فقرص USB موصول بالخادم دائمًا ليس مرنًا: فتشفر الفدية الخادم ونسخة الملحق به معًا. وتعني الجاهزية أن خطة الاستجابة مكتوبة ومالكوها محددون وجهات الاتصال خارج القناة والفريق مُثلّ عليها — لأن الخطة غير المختبرة تفشل في حادثة حقيقية.",
        ),
      ],
      callout: { kind: "key", text: l("Layer your defences — prevent, detect, respond, recover — and assume prevention will sometimes fail. Resilience comes from tested 3-2-1 backups and a rehearsed response plan.", "ضع دفاعاتك في طبقات — وقاية وكشف واستجابة واستشفاء — وافترض أن الوقاية ستفشل أحيانًا. وتأتي المرونة من نسخ 3-2-1 مختبرة وخطة استجابة مُثل عليها.") },
    },
    {
      h: l("6. Measuring progress and proving security", "6. قياس التقدم وإثبات الأمن"),
      p: [
        l(
          "The owner asked how they will know they are safer. Choose measurable indicators tied to each control's goal, so progress is visible and honest: percentage of accounts with MFA enabled; percentage of devices patched within the target window; time to restore the file server in a test; the phishing report rate (a higher rate means staff are reporting, not ignoring); the number of open critical findings from a scan; and the date of the last tabletop exercise. Good metrics are specific, measurable, and directly linked to a control.",
          "سأل المالك كيف سيعرف أنه أصبح أكثر أمانًا. فاختار مؤشرات قابلة للقياس مرتبطة بهدف كل ضابط، لكي يكون التقدم ظاهرًا وصادقًا: نسبة الحسابات التي فعّلت MFA؛ ونسبة الأجهزة المحدّثة خلال المدة المستهدفة؛ وزمن استعادة خادم الملفات في اختبار؛ ومعدل الإبلاغ عن التصيّد (فالرقم الأعلى يعني أن الموظفين يُبلغون لا يتجاهلون)؛ وعدد النتائج الحرجة المفتوحة من الفحص؛ وتاريخ آخر تمرين طاولة. فالمقاييس الجيدة محددة وقابلة للقياس ومرتبطة مباشرة بضابط.",
        ),
        l(
          "Report progress in plain language, tied to risk. A one-page summary for the owner should state the top risks, the top actions taken and planned, the effort or cost, and the metrics showing movement — for example 'MFA now enabled on 90% of accounts (was 0%), critical findings reduced from 12 to 3, file server restored in a test within the target.' Proving security is not a feeling; it is a measurable, reported reduction in risk over time, and that is what lets the owner trust the plan and fund the next phase.",
          "أبلغ عن التقدم بلغة واضحة مرتبطة بالمخاطر. فيجب أن يذكر الملخص من صفحة للمالك أهم المخاطر وأهم الإجراءات المتخذة والمخطط بها والجهد أو التكلفة والمقاييس التي تُظهر الحركة — مثل «فُعّل MFA الآن على 90% من الحسابات (كان 0%)، وخُفضت النتائج الحرجة من 12 إلى 3، واستردّ خادم الملفات في اختبار ضمن المدة المستهدفة». فإثبات الأمن ليس شعورًا؛ بل هو خفض خطر قابل للقياس ومُبلاغ عنه مع الوقت، وهذا ما يتيح للمالك الثقة في الخطة وتمويل المرحلة التالية.",
        ),
      ],
      callout: { kind: "key", text: l("Prove security with measurable, plain-language metrics tied to controls — not a feeling. Progress is a reported reduction in risk over time.", "أثبت الأمن بمؤشرات قابلة للقياس ولغة واضحة مرتبطة بالضوابط — لا بشعور. فالتقدم خفض خطر مُبلاغ عنه مع الوقت.") },
    },
    {
      h: l("7. Career paths and keeping learning", "7. المسارات المهنية ومواصلة التعلم"),
      p: [
        l(
          "Cybersecurity is a broad field with room for many personalities. Common entry and growth paths include: SOC analyst (monitoring, triage, investigation — Sessions 7, 15, 16); incident responder and digital forensics (Sessions 16, 17); vulnerability management and penetration tester (offensive, always authorised — Sessions 13, 14, 19); security engineer and architect (network, cloud and endpoint defences — Sessions 5–12, 18); identity and access management specialist (Sessions 9, 12 and 13); governance, risk and compliance (GRC) analyst (Sessions 14, 18); security awareness and training; and application security (Session 12). Non-technical strengths — communication, writing, curiosity, integrity — matter as much as tools.",
          "الأمن السيبراني مجال واسع يتسع لشخصيات كثيرة. ومن مسارات الدخول والنمو الشائعة: محلل SOC (المراقبة والفرز والتحقيق — الجلسات 7 و15 و16)؛ ومستجيب الحوادث والتحقيق الجنائي الرقمي (الجلستان 16 و17)؛ وإدارة الثغرات واختبار الاختراق (هجومي ومصرح به دائمًا — الجلسات 13 و14 و19)؛ ومهندس ومعماري أمن (دفاعات الشبكة والسحابة والنقاط الطرفية — الجلسات 5–12 و18)؛ ومتخصص إدارة الهوية والوصول (الجلسات 9 و12 و13)؛ ومحلل الحوكمة والمخاطر والامتثال (GRC) (الجلستان 14 و18)؛ والتوعية والتدريب الأمني؛ وأمن التطبيقات (الجلسة 12). والقدرات غير التقنية — التواصل والكتابة والفضول والنزاهة — لا تقل أهمية عن الأدوات.",
        ),
        l(
          "Next steps: build a safe home lab with virtual machines on your own computer; practise on legal, intentionally vulnerable training platforms and capture-the-flag events; follow reputable sources (CISA, NCSC, vendor security blogs, the SANS Internet Storm Center); read incident post-mortems; document what you learn in a portfolio; and consider an entry-level certification that matches your path (for example CompTIA Security+, ISC2 Certified in Cybersecurity, or a vendor-neutral networking or cloud-fundamentals certificate). Deeper technical specialisations, including hands-on tool development, belong in later courses beyond this foundation. Whatever path you choose, keep acting with authorisation and integrity — they are the difference between a professional and a criminal.",
          "الخطوات التالية: ابنِ مختبرًا منزليًا آمنًا بأجهزة افتراضية على حاسوبك؛ وتدرّب على منصات تدريب قانونية ضعيفة عمدًا وفعاليات التقاط العلم؛ وتابع مصادر موثوقة (CISA وNCSC ومدونات أمن المورّدين ومركز SANS Internet Storm Center)؛ واقرأ تقارير ما بعد الحوادث؛ ووثّق ما تتعلمه في ملف أعمال؛ وفكّر في شهادة مبتدئة تناسب مسارك (مثل CompTIA Security+ أو ISC2 Certified in Cybersecurity أو شهادة أساسيات شبكات أو سحابة محايدة للمورّدين). أما التخصصات التقنية الأعمق ومنها تطوير الأدوات العملية فمكانها دورات لاحقة بعد هذه الدورة التأسيسية. وأيًا كان المسار الذي تختاره، استمر في التصرف بتفويض ونزاهة — فهما الفارق بين المحترف والمجرم.",
        ),
      ],
      callout: { kind: "key", text: l("The habit this course tried to build: think in assets, threats, vulnerabilities and controls; layer defences; assume breach; act with authorisation and integrity — and keep learning in a safe, legal practice environment.", "العادة التي حاولت هذه الدورة بناءها: فكّر في الأصول والتهديدات والثغرات والضوابط؛ وضع دفاعاتك في طبقات؛ وافترض الاختراق؛ وتصرّف بتفويض ونزاهة — وواصل التعلم في بيئة تدريب آمنة وقانونية.") },
    },
    {
      h: l("8. Bringing it together: your security plan", "8. جمع الأفكار: خطتك الأمنية"),
      p: [
        l(
          "The capstone comes down to a plan you can defend. You have read the brief, identified the assets, threats and vulnerabilities, mapped each session to a control, built a justified 30-60-90-day roadmap, chosen measurable indicators, and identified a career path and a way to keep learning. In the lab you will put the core of it into practice — score the small business's risks in a risk register, prioritise the treatments, and justify what to do first. The professional habit this course tried to build is now yours to carry forward: think in risk, layer your defences, assume breach, measure progress, and act with authorisation and integrity. That habit, applied consistently, is what makes a business safer and a security professional trustworthy.",
          "يؤول المشروع الختامي إلى خطة يمكنك الدفاع عنها. فلقد قرأت الملخص، وحددتَ الأصول والتهديدات والثغرات، وربطتَ كل جلسة بضابط، وبنيتَ خارطة طريق مبررة لمدة 30-60-90 يومًا، واخترتَ مؤشرات قابلة للقياس، وحددتَ مسارًا مهنيًا ووسيلة لمواصلة التعلم. وفي المختبر ستطبق جوهر ذلك — تُسجّل مخاطر الشركة الصغيرة في سجل مخاطر، وترتب المعالجات، وتبرر ما تفعله أولًا. والعقلية المهنية التي حاولت الدورة بناءها هي الآن ملكك تحملها معك: فكّر في المخاطر، وضع دفاعاتك في طبقات، وافترض الاختراق، واقياس التقدم، وتصرّف بتفويض ونزاهة. فهذه العقلية، إذا طُبقت باستمرار، تجعل المؤسسة أكثر أمانًا والمتخصص الأمني موثوقًا.",
        ),
      ],
    },
  ],
  diagram: {
    kind: "flow",
    title: l("Capstone roadmap — 30 / 60 / 90 days and beyond", "خارطة طريق المشروع الختامي — 30 / 60 / 90 يومًا وما بعدها"),
    caption: l("Quick wins first, then layered protection and detection, then proof and continuous improvement — the risk cycle repeats every quarter.", "المكاسب السريعة أولًا ثم الحماية والكشف متعددا الطبقات ثم الإثبات والتحسين المستمر — وتتكرر دورة المخاطر كل ربع سنة."),
    nodes: [
      { label: l("Days 1–30: Foundations", "الأيام 1–30: الأسس"), desc: l("Inventory · MFA · updates · backups", "الحصر · MFA · التحديثات · النسخ") },
      { label: l("Days 31–60: Protect & detect", "الأيام 31–60: الحماية والكشف"), desc: l("Segmentation · EDR · training · logging", "التقسيم · EDR · التدريب · التسجيل") },
      { label: l("Days 61–90: Prove & improve", "الأيام 61–90: الإثبات والتحسين"), desc: l("IR plan · policies · scan · metrics", "خطة IR · السياسات · الفحص · المقاييس") },
      { label: l("Quarterly review", "المراجعة ربع السنوية"), desc: l("Re-assess risks, update the plan", "إعادة تقييم المخاطر وتحديث الخطة") },
    ],
  },
  examples: [
    l(
      "Enabling MFA on e-mail, admin and finance accounts is a low-effort, high-impact quick win: it blocks most credential-based attacks, including phishing that steals a password. It is almost always the first action in a small business's roadmap because it reduces risk more than almost any other control for the effort spent.",
      "تفعيل MFA على البريد وحسابات المدير والمالية مكسب سريع قليل الجهد عظيم الأثر: فهو يحجب معظم هجمات بيانات الدخول، بما فيها التصيّد الذي يسرق كلمة المرور. وهو عادة أول إجراء في خارطة طريق الشركة الصغيرة لأنه يخفض الخطر أكثر من أي ضابط آخر تقريبًا للجهد المبذول.",
    ),
    l(
      "A USB backup permanently attached to the file server is not resilient: when ransomware encrypts the server, it encrypts the attached backup too, leaving nothing to restore from. A 3-2-1 design with an offline or cloud copy and a tested restore is what makes recovery possible after a ransomware event.",
      "نسخة USB موصولة بخادم الملفات دائمًا ليست مرنة: فعندما تشفر الفدية الخادم، تشفر النسخة الملحقة به أيضًا، فلا يبقى ما يُستعاد منه. وتصميم 3-2-1 مع نسخة معزولة أو سحابية واستعادة مختبرة هو ما يجعل الاستشفاء ممكنًا بعد حادثة فدية.",
    ),
    l(
      "A one-page summary for the owner that says 'MFA enabled on 90% of accounts (was 0%), critical findings reduced from 12 to 3, file server restored in a test within target' proves security in terms the owner can act on — a measurable, reported reduction in risk, not a vague promise of safety.",
      "يثبت ملخص من صفحة للمالك يقول «فُعّل MFA على 90% من الحسابات (كان 0%)، وخُفضت النتائج الحرجة من 12 إلى 3، واستردّ خادم الملفات في اختبار ضمن المدة» الأمن بلغة يستطيع المالك التصرف بها — خفض خطر قابل للقياس ومبلاغ عنه، لا وعد مبهمل بالسلامة.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A small accounting firm with a flat network, daily admin accounts and an attached USB backup faces exactly the risks the capstone describes. A professional does not sell a product; they produce a prioritised roadmap — MFA and backups first, then segmentation and logging — and report progress with metrics the owner can understand.",
      "تواجه شركة محاسبة صغيرة ذات شبكة مسطحة وحسابات مدير يومية ونسخة USB موصولة بالخادم بالضبط المخاطر التي يصفها المشروع الختامي. فلا يبيع المحترف منتجًا؛ بل يُنتج خارطة طريق مرتبة الأولويات — MFA والنسخ أولًا، ثم التقسيم والتسجيل — ويبلغ عن التقدم بمؤشرات يستطيع المالك فهمها.",
    ),
    l(
      "A beginner who wants to grow into security builds a home lab of virtual machines, practises on legal vulnerable platforms, reads incident post-mortems, and documents what they learn — while always testing only systems they own or are authorised to use. The authorisation boundary, not skill, keeps the learning lawful and ethical.",
      "المبتدئ الذي يريد النمو في مجال الأمن يبني مختبرًا منزليًا من الأجهزة الافتراضية، ويتدرب على منصات ضعيفة قانونية، ويقرأ تقارير ما بعد الحوادث، ويوثّق ما يتعلمه — مع اختبار أنظمة يملكها أو مصرح بها فقط دائمًا. فحد التفويض، لا المهارة، هو ما يجعل التعلم قانونيًا وأخلاقيًا.",
    ),
    l(
      "After a quarter, the owner reviews the metrics: MFA coverage, patching cadence, restore time, phishing reports and open findings. The numbers show what worked and what did not, so the next quarter's plan targets the remaining gaps — risk management as a continuous, measurable cycle, not a one-time project.",
      "بعد ربع سنة، يراجع المالك المقاييس: تغطية MFA ووتيرة الترقيع وزمن الاستعادة ومعدل الإبلاغ عن التصيّد والنتائج المفتوحة. فتُظهر الأرقام ما نجح وما لم ينجح، فتستهدف خطة الربع التالي الثغرات المتبقية — إدارة المخاطر كدورة مستمرة وقابلة للقياس، لا مشروعًا لمرة واحدة.",
    ),
  ],
  instructorDemo: l(
    "Demonstrate the lab's risk-register tool live: walk through scoring a risk as Likelihood × Impact, reading the rating, choosing a treatment, and re-scoring after imagining a control. Emphasise how the same register drives the capstone roadmap — highest-scoring risks get treated first, and every treatment is a justified, owned action in the 30-60-90-day plan.",
    "اعرض أداة سجل المخاطر في المختبر مباشرةً: استعرض تسجيل مخاطر كاحتمالية × أثر، وقراءة التصنيف، واختيار معالجة، وإعادة التسجيل بعد تخيّل ضابط. وركّز على كيف يقود نفس السجل خارطة طريق المشروع الختامي — فتُعالج المخاطر الأعلى درجة أولًا، وكل معالجة إجراء مبرر ومملوك في خطة 30-60-90 يومًا.",
  ),
  exercises: [
    {
      title: l("Score and prioritise Nova's risks", "تسجيل مخاطر نوفا وترتيبها"),
      instructions: l(
        "In the lab, use the risk register to score each risk for Nova Accounting as Likelihood × Impact, read the rating, choose a treatment, and decide what to treat first based on the score.",
        "في المختبر، استخدم سجل المخاطر لتسجيل كل خطر لشركة نوفا كاحتمالية × أثر، واقرأ التصنيف، واختر معالجة، وقرر ما تُعالج أولًا بناءً على الدرجة.",
      ),
      expected: l("You can score each risk, read its rating, choose an appropriate treatment, and prioritise the highest-scoring risks first with justification.", "يمكنك تسجيل كل خطر وقراءة تصنيفه واختيار معالجة مناسبة وترتيب المخاطر الأعلى درجة أولًا مع التبرير."),
    },
    {
      title: l("Write the one-page owner summary", "اكتب ملخص المالك من صفحة"),
      instructions: l(
        "Draft a one-page, non-technical summary for the owner of Nova Accounting: the top five risks, the top five actions, the effort or cost, and the metrics that will show progress.",
        "صغ ملخصًا من صفحة وغير تقني لصاحب شركة نوفا للمحاسبة: أهم خمسة مخاطر وأهم خمسة إجراءات والجهد أو التكلفة والمقاييس التي تُظهر التقدم.",
      ),
      expected: l("A summary that names five risks, five actions, the effort and measurable metrics, in plain language a non-technical owner can act on.", "ملخص يذكر خمسة مخاطر وخمسة إجراءات والجهد ومقاييس قابلة للقياس، بلغة واضحة يستطيع صاحب غير تقني التصرف بها."),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can apply risk thinking to assess a small business, map each course session to a concrete control, build a justified 30-60-90-day roadmap, choose measurable indicators and report progress to a non-technical owner, identify cybersecurity career paths and learning resources, and score and prioritise a small business's risks with a risk register.",
    "بنهاية الجلسة يستطيع المتعلمون تطبيق التفكير القائم على المخاطر لتقييم شركة صغيرة، وربط كل جلسة في الدورة بضابط ملموس، وبناء خارطة طريق مبررة لمدة 30-60-90 يومًا، واختيار مؤشرات قابلة للقياس وإبلاغ التقدم لصاحب غير تقني، وتحديد المسارات المهنية في الأمن السيبراني وموارد التعلم، وتسجيل مخاطر شركة صغيرة وترتيبها بسجل مخاطر.",
  ),
  commonMistakes: [
    l(
      "Buying a single product and assuming the business is now secure, instead of a layered, measured plan.",
      "شراء منتج واحد وافتراض أن المؤسسة أصبحت آمنة، بدل خطة متعمّقة ومقاسة.",
    ),
    l(
      "Prioritising actions without justification, so the roadmap is a random list rather than a risk-driven sequence.",
      "ترتيب الإجراءات دون تبرير، فتكون خارطة الطريق قائمة عشوائية لا تسلسلًا مدفوعًا بالمخاطر.",
    ),
    l(
      "Relying on an attached, untested backup that ransomware encrypts together with the data it was meant to protect.",
      "الاعتماد على نسخة موصولة غير مختبرة تشفر الفدية مع البيانات التي كان من المفترض أن تحميها.",
    ),
    l(
      "Reporting progress vaguely ('we are safer') instead of with measurable metrics tied to controls.",
      "الإبلاغ عن التقدم بشكل مبهمل («نحن أكثر أمانًا») بدل مؤشرات قابلة للقياس مرتبطة بالضوابط.",
    ),
    l(
      "Practising security techniques on systems without authorisation, crossing the line between learning and unlawful access.",
      "التدريب على تقنيات الأمن على أنظمة دون تفويض، متجاوزًا الحد بين التعلم والوصول غير القانوني.",
    ),
  ],
  bestPractices: [
    l(
      "Think in the chain assets → threats → vulnerabilities → controls → treatments, and prioritise by risk reduction per effort.",
      "فكّر في السلسلة أصول ← تهديدات ← ثغرات ← ضوابط ← معالجات، ورتّب بحسب خفض الخطر لكل جهد.",
    ),
    l(
      "Build a layered plan: prevent, detect, respond and recover, assuming prevention will sometimes fail.",
      "ابنِ خطة متعمّقة: وقاية وكشف واستجابة واستشفاء، مع افتراض أن الوقاية ستفشل أحيانًا.",
    ),
    l(
      "Use 3-2-1 backups with an offline or cloud copy and tested restores for resilience.",
      "استخدم نسخ 3-2-1 مع نسخة معزولة أو سحابية واستعادات مختبرة للمرونة.",
    ),
    l(
      "Prove progress with measurable, plain-language metrics tied to each control's goal.",
      "أثبت التقدم بمؤشرات قابلة للقياس ولغة واضحة مرتبطة بهدف كل ضابط.",
    ),
    l(
      "Keep learning in a safe, legal environment and always act with authorisation and integrity.",
      "واصل التعلم في بيئة آمنة وقانونية وتصرّف دائمًا بتفويض ونزاهة.",
    ),
  ],
  keyTakeaways: [
    l("Think in assets, threats, vulnerabilities and controls — the professional habit the whole course builds.", "فكّر في الأصول والتهديدات والثغرات والضوابط — العادة المهنية التي تبنيها الدورة كلها."),
    l("Prioritise by risk reduction per effort: quick wins (inventory, MFA, updates, backups) come first.", "رتّب بحسب خفض الخطر لكل جهد: فالمكاسب السريعة (الحصر وMFA والتحديثات والنسخ) أولًا."),
    l("Layer defences — prevent, detect, respond, recover — and assume prevention will sometimes fail.", "ضع الدفاعات في طبقات — وقاية وكشف واستجابة واستشفاء — وافترض أن الوقاية ستفشل أحيانًا."),
    l("Prove security with measurable metrics tied to controls, reported in plain language to the owner.", "أثبت الأمن بمؤشرات قابلة للقياس مرتبطة بالضوابط، مبلاغًا عنها بلغة واضحة للمالك."),
    l("Keep learning in a safe, legal environment and always act with authorisation and integrity.", "واصل التعلم في بيئة آمنة وقانونية وتصرّف دائمًا بتفويض ونزاهة."),
  ],
  lab: {
    title: l("Lab 10 — Capstone: Score and Prioritise Nova Accounting's Risks", "المختبر 10 — المشروع الختامي: تسجيل مخاطر نوفا وترتيبها"),
    scenario: l(
      "You are the security consultant for Nova Accounting. Use the risk-register simulator (display only; nothing is scanned or changed on a real system) to score each risk as Likelihood × Impact, read the rating, choose a treatment, re-score after imagining a control, and decide what to treat first — the core of the capstone roadmap.",
      "أنت المستشار الأمني لشركة نوفا للمحاسبة. استخدم محاكي سجل المخاطر (عرض فقط؛ لا يُفحص أو يُغيّر شيء على أي نظام حقيقي) لتسجيل كل خطر كاحتمالية × أثر، واقرأ التصنيف، واختر معالجة، وأعد التسجيل بعد تخيّل ضابط، وقرر ما تُعالج أولًا — وهو جوهر خارطة طريق المشروع الختامي.",
    ),
    safety: l(
      "The simulator only displays a risk register and computed scores; nothing is scanned, patched or changed on any real system. In real engagements, any assessment of a business needs a signed agreement defining scope and confidentiality, and the business's weaknesses are highly confidential.",
      "يعرض المحاكي فقط سجل مخاطر ودرجات محسوبة؛ ولا يُفحص أو يُرقَّع أو يُغيّر شيء على أي نظام حقيقي. وفي التعاقدات الحقيقية، يحتاج أي تقييم لشركة إلى اتفاق موقّع يحدد النطاق والسرية، وتكون نقاط ضعف المؤسسة سرية للغاية.",
    ),
    steps: [
      l("Read the risks facing Nova Accounting in the register", "اقرأ المخاطر التي تواجه شركة نوفا في السجل"),
      l("Score each risk as Likelihood × Impact (1–5)", "سجّل كل خطر كاحتمالية × أثر (1–5)"),
      l("Observe the risk score and rating", "لاحظ درجة المخاطرة والتصنيف"),
      l("Choose a treatment for each risk", "اختر معالجة لكل خطر"),
      l("Re-score after imagining a control", "أعد التسجيل بعد تخيّل ضابط"),
      l("Use the sort order to decide what to treat first", "استخدم ترتيب التهيئة لتقرير ما تُعالج أولًا"),
    ],
    expected: l(
      "You can score each risk as Likelihood × Impact, read the Critical/High/Medium/Low rating, choose an appropriate treatment, re-score after a control, and explain which risks to treat first and why — the prioritisation that drives the 30-60-90-day roadmap.",
      "يمكنك تسجيل كل خطر كاحتمالية × أثر، وقراءة تصنيف حرج/مرتفع/متوسط/منخفض، واختيار معالجة مناسبة، وإعادة التسجيل بعد ضابط، وشرح أي المخاطر تُعالج أولًا ولماذا — وهو الترتيب الذي يقود خارطة طريق 30-60-90 يومًا.",
    ),
    tool: "risk",
    objectives: [
      l("Score Nova Accounting's risks as Likelihood × Impact (1–5)", "تسجيل مخاطر نوفا كاحتمالية × أثر (1–5)"),
      l("Read and interpret the risk rating", "قراءة تصنيف المخاطر وتفسيره"),
      l("Choose a treatment: mitigate, transfer, accept or avoid", "اختيار معالجة: تخفيف أو نقل أو قبول أو تجنب"),
      l("Re-score a risk after imagining a control", "إعادة تسجيل المخاطر بعد تخيّل ضابط"),
      l("Prioritise risks using the register's sort order", "ترتيب المخاطر باستخدام ترتيب التهيئة في السجل"),
    ],
    prerequisites: [
      l("Session 14: how risks are identified from vulnerabilities and scored", "الجلسة 14: كيف تُحدد المخاطر من الثغرات وتُسجّل"),
      l("Session 18: how to choose treatments and build a roadmap", "الجلسة 18: كيف تختار المعالجات وتبني خارطة طريق"),
    ],
    environment: l(
      "The companion risk-register simulator in a browser (display only). No real systems are scanned, patched or changed. All scores shown are simulated, and the risks are fictional.",
      "محاكي سجل المخاطر المرافق في متصفح (عرض فقط). لا تُفحص أو تُرقَّع أو تُغيّر أنظمة حقيقية. وجميع الدرجات المعروضة محاكاة، والمخاطر وهمية.",
    ),
    tools: [
      l("Risk-register simulator (companion browser tool, display only)", "محاكي سجل المخاطر (أداة متصفح مساندة، عرض فقط"),
      l("Capstone brief and risk-treatment reference (for the prioritisation discussion)", "ملخص المشروع الختامي ومرجع معالجات المخاطر (لنقاش ترتيب الأولويات"),
    ],
    authorization: l(
      "Scope: use the display-only simulator. Prohibited: scanning, patching or changing any real system without a signed agreement, and disclosing a client's weaknesses. Stop condition: if asked to assess or change a real system, stop and confirm a signed scope and confidentiality agreement first.",
      "النطاق: استخدم محاكٍ العرض فقط. المحظور: فحص أو ترقيع أو تغيير أي نظام حقيقي دون اتفاق موقّع، وإفشاء نقاط ضعف عميل. شرط التوقف: إذا طُلب منك تقييم أو تغيير نظام حقيقي، توقف وتحقق من اتفاق نطاق وسرية موقّع أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Read the risks facing Nova", "اقرأ المخاطر التي تواجه نوفا"),
        command: "Risk register: initial risks",
        explanation: l(
          "Read the preset risks in the register for Nova Accounting: phishing, an unpatched public-facing system, ransomware on a file server, a lost laptop with client data, and a power outage in the server room. Note what each risk is and which asset it threatens — client financial data, availability or reputation.",
          "اقرأ المخاطر المسبقة في السجل لشركة نوفا للمحاسبة: التصيّد، ونظام مواجهة عام غير محدّث، وفدية على خادم ملفات، وفقدان حاسوب محمول ببيانات عملاء، وانقطاع كهرباء عن غرفة الخوادم. ولاحظ ما هي كل مخاطرة وأي أصل تهدد — بيانات العملاء المالية أو التوافر أو السمعة.",
        ),
        expected: l("You can list the risks and describe which asset each one threatens.", "يمكنك سرد المخاطر ووصف أي أصل تهدد كل مخاطرة."),
      },
      {
        title: l("Score each risk", "سجّل كل خطر"),
        command: "Risk register: set Likelihood and Impact sliders",
        explanation: l(
          "For each risk, set the Likelihood (1–5) and Impact (1–5) sliders to your estimate. Observe the computed score, which is Likelihood × Impact, and the rating: Critical (17+), High (10–16), Medium (5–9), Low (1–4). Think about how likely each risk is at Nova and how much damage it would cause.",
          "لكل مخاطرة، ضبط مؤشري الاحتمالية (1–5) والأثر (1–5) على تقديرك. ولاحظ الدرجة المحسوبة، وهي الاحتمالية × الأثر، والتصنيف: حرج (17 فما فوق)، ومرتفع (10–16)، ومتوسط (5–9)، ومنخفض (1–4). وفكّر في مدى احتمال كل خطر في نوفا وكم الضرر الذي يسببه.",
        ),
        expected: l("You can set Likelihood and Impact for each risk and read the resulting score and rating.", "يمكنك ضبط الاحتمالية والأثر لكل خطر وقراءة الدرجة والتصنيف الناتجين."),
      },
      {
        title: l("Observe the rating", "لاحظ التصنيف"),
        command: "Risk register: read the rating badge",
        explanation: l(
          "Read the rating badge next to each risk. Confirm that a risk with high likelihood and high impact scores high and is rated Critical, while a risk with low likelihood and low impact scores low. Explain how the rating helps you see which risks need attention first.",
          "اقرأ شارة التصنيف بجانب كل مخاطرة. وتحقق من أن المخاطرة ذات الاحتمالية العالية والأثر العالي تسجل درجة عالية وتُصنَّف حرجًا، بينما المخاطرة ذات الاحتمالية المنخفضة والأثر المنخفض تسجل درجة منخفضة. واشرح كيف يساعدك التصنيف على رؤية المخاطر التي تحتاج اهتمامًا أولًا.",
        ),
        expected: l("You can match high scores to Critical ratings and low scores to Low ratings, and explain the value of the rating.", "يمكنك مطابقة الدرجات العالية مع تصنيف حرج والدرجات المنخفضة مع تصنيف منخفض، وشرح قيمة التصنيف."),
      },
      {
        title: l("Choose a treatment", "اختر معالجة"),
        command: "Risk register: select a treatment",
        explanation: l(
          "For each risk, choose a treatment: Mitigate (reduce likelihood or impact with a control, such as MFA or backups), Transfer (shift the risk, for example insurance), Accept (take the risk knowingly), or Avoid (stop the risky activity). Justify your choice for at least two risks.",
          "لكل مخاطرة اختر معالجة: تخفيف (تقليل الاحتمالية أو الأثر بضابط مثل MFA أو النسخ)، أو نقل (تحويل المخاطرة كالتأمين)، أو قبول (القبول بالخطر عن قصد)، أو تجنب (إيقاف النشاط الخطر). وبرّر اختيارك لمخاطرتين على الأقل.",
        ),
        expected: l("You can select an appropriate treatment for each risk and justify at least two choices.", "يمكنك اختيار معالجة مناسبة لكل خطر وتبرير اختيارين على الأقل."),
      },
      {
        title: l("Re-score after a control", "أعد التسجيل بعد ضابط"),
        command: "Risk register: re-rate after imagining a control",
        explanation: l(
          "Imagine a control for a risk — for example, enabling MFA lowers the impact of the phishing risk, and offline 3-2-1 backups lower the impact of the ransomware risk. Lower the Impact slider to reflect the control and observe the score and rating drop. Explain how a control changes the risk.",
          "تخيّل ضابطًا لمخاطرة — مثلًا يُخفّض تفعيل MFA أثر مخاطر التصيّد، وتُخفّض نسخ 3-2-1 المعزولة أثر مخاطر الفدية. وخفض مؤشر الأثر ليعكس الضابط ولاحظ انخفاض الدرجة والتصنيف. واشرح كيف يغيّر الضابط المخاطرة.",
        ),
        expected: l("You can lower the Impact for a risk to reflect a control and show the score and rating decrease.", "يمكنك خفض الأثر لمخاطرة ليعكس ضابطًا وإظهار انخفاض الدرجة والتصنيف."),
      },
      {
        title: l("Prioritise using the sort order", "ترتيب الأولويات باستخدام ترتيب التهيئة"),
        command: "Risk register: use the sorted list",
        explanation: l(
          "The register sorts risks by score, highest first. Use this order to decide what to treat first — the start of the 30-60-90-day roadmap. Explain why the highest-scoring risks are addressed before lower-scoring ones, and note that a treatment can change the order by lowering a score.",
          "يرتب السجل المخاطر حسب الدرجة، الأعلى أولًا. واستخدم هذا الترتيب لتقرير ما تُعالج أولًا — بداية خارطة طريق 30-60-90 يومًا. واشرح سبب وجوب معالجة المخاطر الأعلى درجة قبل الأدنى، ونبه إلى أن المعالجة قد تغيّر الترتيب بخفض الدرجة.",
        ),
        expected: l("You can use the sorted order to prioritise risks and explain why higher scores come first.", "يمكنك استخدام ترتيب التهيئة لترتيب المخاطر وشرح سبب تقديم الدرجات الأعلى."),
      },
    ],
    troubleshooting: [
      {
        problem: l("The score does not match the rating I expect", "الدرجة لا تطابق التصنيف الذي أتوقعه"),
        fix: l("Remember the thresholds: Critical 17+, High 10–16, Medium 5–9, Low 1–4. Check that you multiplied Likelihood by Impact, not added them.", "تذكّر العتبات: حرج 17 فما فوق، ومرتفع 10–16، ومتوسط 5–9، ومنخفض 1–4. وتحقق أنك ضاعفت الاحتمالية في الأثر لا جمعتها."),
      },
      {
        problem: l("Unsure how to choose a treatment", "لست متأكدًا من كيفية اختيار معالجة"),
        fix: l("Ask: can a control reduce the likelihood or impact (Mitigate)? Can the risk be shifted (Transfer)? Is it small enough to accept knowingly (Accept)? Or should the activity stop (Avoid)? Most risks get Mitigate.", "اسأل: هل يمكن لضابط أن يقلل الاحتمالية أو الأثر (تخفيف)؟ وهل يمكن تحويل المخاطرة (نقل)؟ وهل هي صغيرة بما يكفي للقبول عن قصد (قبول)؟ أو هل يجب إيقاف النشاط (تجنب)؟ فتُعالج معظم المخاطر بالتخفيف."),
      },
      {
        problem: l("Forgetting to re-score after a control", "نسيان إعادة التسجيل بعد الضابط"),
        fix: l("A control is only real if it changes the score. After imagining a control, lower the relevant slider and re-read the rating — that drop is the value the control delivers.", "لا يكون الضابط حقيقيًا إلا إذا غيّر الدرجة. فبعد تخيّل ضابط، اخفض المؤشر المناسب وأعد قراءة التصنيف — فهذا الانخفاض هو القيمة التي يقدّمها الضابط."),
      },
    ],
    deliverables: [
      l("The Likelihood × Impact score and rating for each of Nova's risks", "درجة وتصنيف الاحتمالية × الأثر لكل مخاطر نوفا"),
      l("A chosen, justified treatment for each risk", "معالجة مختارة مبررة لكل خطر"),
      l("Re-scored risks showing the effect of an imagined control", "مخاطر معاد تسجيلها تُظهر أثر الضابط المتخيّلة"),
      l("A prioritised treatment order with reasoning", "ترتيب معالج مرتب مع التعليل"),
      l("A link from the prioritisation to the 30-60-90-day roadmap", "ربط ترتيب الأولويات بخارطة طريق 30-60-90 يومًا"),
      l("A note on confidentiality and authorised scope", "ملاحظة عن السرية والنطاق المصرح به"),
    ],
    rubric: [
      { criterion: l("Correct Likelihood × Impact scoring and ratings", "تسجيل صحيح للاحتمالية × الأثر والتصنيفات"), weight: 25 },
      { criterion: l("Appropriate, justified treatments", "معالجات مناسبة مبررة"), weight: 20 },
      { criterion: l("Correct re-scoring after a control", "إعادة تسجيل صحيح بعد الضابط"), weight: 20 },
      { criterion: l("Sound prioritisation linked to the roadmap", "ترتيب أولويات سليم مرتبط بخارطة الطريق"), weight: 20 },
      { criterion: l("Clear link to the capstone and confidentiality awareness", "ربط واضح بالمشروع الختامي والوعي بالسرية"), weight: 15 },
    ],
  },
  majorLabId: "lab-10",
  quiz: [
    {
      q: l("Which action gives the biggest account-takeover risk reduction for the lowest effort?", "أي إجراء يعطي أكبر خفض لخطر الاستيلاء على الحسابات بأقل جهد؟"),
      options: [
        l("Enabling MFA on e-mail and admin accounts", "تفعيل MFA على البريد وحسابات المدير"),
        l("Buying a second router", "شراء موجّه ثانٍ"),
        l("Changing wallpaper", "تغيير الخلفية"),
        l("Longer meetings", "اجتماعات أطول"),
      ],
      answer: 0,
      why: l("MFA blocks most credential-based attacks.", "يحجب MFA معظم هجمات بيانات الدخول."),
    },
    {
      q: l("Why is an asset inventory the first step in a security programme?", "لماذا يعد حصر الأصول الخطوة الأولى في برنامج الأمن؟"),
      options: [
        l("You cannot protect or patch what you do not know exists", "لا يمكنك حماية أو ترقيع ما لا تعلم بوجوده"),
        l("It is required by law everywhere", "مطلوب قانونًا في كل مكان"),
        l("It stops phishing", "يمنع التصيّد"),
        l("It encrypts data", "يشفّر البيانات"),
      ],
      answer: 0,
      why: l("Every other control depends on knowing the scope.", "كل ضابط آخر يعتمد على معرفة النطاق."),
    },
    {
      q: l("Which backup design best protects against ransomware?", "أي تصميم نسخ احتياطي يحمي أفضل من الفدية؟"),
      options: [
        l("A USB disk permanently attached to the server", "قرص USB موصول بالخادم دائمًا"),
        l("3-2-1 with an offline or immutable copy and tested restores", "3-2-1 مع نسخة معزولة أو غير قابلة للتعديل واستعادات مختبرة"),
        l("One copy on the same server", "نسخة واحدة على الخادم نفسه"),
        l("No backups, rely on antivirus", "لا نسخ والاعتماد على مضاد الفيروسات"),
      ],
      answer: 1,
      why: l("Attached backups get encrypted together with the data.", "تُشفَّر النسخ الموصولة مع البيانات."),
    },
    {
      q: l("Which metric tells an owner whether patching is working?", "أي مقياس يخبر المالك هل الترقيع يعمل؟"),
      options: [
        l("Percentage of devices patched within the target time", "نسبة الأجهزة المرقّعة خلال المدة المستهدفة"),
        l("Number of printers", "عدد الطابعات"),
        l("Office size", "حجم المكتب"),
        l("Staff happiness only", "سعادة الموظفين فقط"),
      ],
      answer: 0,
      why: l("Good metrics are measurable and tied to a control's goal.", "المقاييس الجيدة قابلة للقياس ومرتبطة بهدف الضابط."),
    },
    {
      q: l("A penetration tester's work is ethical only if…", "عمل مختبر الاختراق أخلاقي فقط إذا…"),
      options: [
        l("It is authorised in writing with a defined scope", "كان مصرحًا به كتابيًا بنطاق محدد"),
        l("The target is a big company", "كان الهدف شركة كبيرة"),
        l("The tester means well", "كانت نية المختبر حسنة"),
        l("No data is read", "لم تُقرأ بيانات"),
      ],
      answer: 0,
      why: l("Authorisation is the legal and ethical boundary.", "التفويض هو الحد القانوني والأخلاقي."),
    },
    {
      q: l("Which statement best summarises the foundation mindset?", "أي عبارة تلخص أفضل عقلية الأساسيات؟"),
      options: [
        l("Buy one product and you are safe", "اشترِ منتجًا واحدًا فتكون آمنًا"),
        l("Layer defences, manage risk, assume breach and act ethically", "ضع دفاعات في طبقات وأدر المخاطر وافترض الاختراق وتصرف بأخلاق"),
        l("Security is only IT's problem", "الأمن مشكلة تقنية المعلومات وحدها"),
        l("Attackers never change", "المهاجمون لا يتغيرون"),
      ],
      answer: 1,
      why: l("Defense in depth, risk management, incident readiness and ethics tie the course together.", "الدفاع المتعمّق وإدارة المخاطر والجاهزية للحوادث والأخلاقيات تربط الدورة معًا."),
    },
    {
      q: l("Which sequence correctly orders the first 90-day roadmap phases?", "أي تسلسل يرتّب مراحل خارطة طريق التسعين يومًا الأولى ترتيبًا صحيحًا؟"),
      options: [
        l("Foundations → protect & detect → prove & improve", "الأسس ← الحماية والكشف ← الإثبات والتحسين"),
        l("Prove & improve → protect & detect → foundations", "الإثبات والتحسين ← الحماية والكشف ← الأسس"),
        l("Protect & detect → foundations → prove & improve", "الحماية والكشف ← الأسس ← الإثبات والتحسين"),
        l("All phases in random order", "كل المراحل بترتيب عشوائي"),
      ],
      answer: 0,
      why: l("Quick wins come first, then layered protection, then proof and continuous improvement.", "تأتي المكاسب السريعة أولًا، ثم الحماية المتعمّقة، ثم الإثبات والتحسين المستمر."),
    },
    {
      q: l("The owner asked 'how will we know we are safer?'. The best answer is…", "سأل المالك «كيف سنعرف أننا أكثر أمانًا؟». أفضل إجابة هي…"),
      options: [
        l("Measurable metrics tied to each control, reported over time", "مؤشرات قابلة للقياس مرتبطة بكل ضابط ومبلاغ عنها مع الوقت"),
        l("A feeling of safety", "شعور بالسلامة"),
        l("Buying more products", "شراء منتجات أكثر"),
        l("Waiting for an incident", "انتظار حادثة"),
      ],
      answer: 0,
      why: l("Progress is a measurable, reported reduction in risk, not a feeling.", "التقدم خفض خطر قابل للقياس ومبلاغ عنه، لا شعورًا."),
    },
    {
      q: l("In the risk chain, a control is…", "في سلسلة المخاطر، الضابط هو…"),
      options: [
        l("Something that reduces the likelihood or impact of a risk", "شيء يقلل احتمالية أو أثر الخطر"),
        l("An asset to protect", "أصل يجب حمايته"),
        l("A type of threat", "نوع من التهديد"),
        l("A vulnerability to exploit", "ثغرة للاستغلال"),
      ],
      answer: 0,
      why: l("Controls lower likelihood or impact; assets, threats and vulnerabilities are the other links in the chain.", "تخفض الضوابط الاحتمالية أو الأثر؛ أما الأصول والتهديدات والثغرات فهي الروابط الأخرى في السلسلة."),
    },
    {
      q: l("Which is the cheapest, highest-impact quick win for a small business's account security?", "ما المكسب السريع الأرخص والأعلى أثرًا لأمن حسابات شركة صغيرة؟"),
      options: [
        l("Enabling MFA on e-mail and admin accounts", "تفعيل MFA على البريد وحسابات المدير"),
        l("Repainting the office", "تجديد طلاء المكتب"),
        l("Buying a bigger firewall", "شراء جدار ناري أكبر"),
        l("Hiring more staff", "توظيف موظفين أكثر"),
      ],
      answer: 0,
      why: l("MFA blocks most credential-based attacks for minimal effort and cost.", "يحجب MFA معظم هجمات بيانات الدخول بأقل جهد وتكلفة."),
    },
    {
      q: l("A beginner building a home lab should…", "يجب على المبتدئ الذي يبني مختبرًا منزليًا أن…"),
      options: [
        l("Practise only on virtual machines and authorised platforms", "يتدرب فقط على الأجهزة الافتراضية والمنصات المصرح بها"),
        l("Test the neighbour's router to gain skill", "يختبر موجّه الجار ليكتسب المهارة"),
        l("Avoid all practice", "يتجنب كل التدريب"),
        l("Only read books", "يكتفي بقراءة الكتب"),
      ],
      answer: 0,
      why: l("Authorisation keeps practice lawful and ethical; virtual machines and legal platforms are the safe way to learn.", "يحفظ التفويض التدريب قانونيًا وأخلاقيًا؛ والأجهزة الافتراضية والمنصات القانونية هي الطريقة الآمنة للتعلم."),
    },
  ],
  trueFalse: [
    {
      q: l("A single product can make a small business fully secure.", "يمكن لمنتج واحد أن يجعل الشركة الصغيرة آمنة بالكامل."),
      answer: false,
      why: l("Security requires a layered, measured plan — no single control is sufficient.", "يتطلب الأمن خطة متعمّقة ومقاسة — فلا ضابط واحد كافٍ."),
    },
    {
      q: l("An asset inventory is the first step of a security programme.", "حصر الأصول هو الخطوة الأولى في برنامج الأمن."),
      answer: true,
      why: l("You cannot protect or patch what you do not know exists.", "لا يمكنك حماية أو ترقيع ما لا تعلم بوجوده."),
    },
    {
      q: l("A USB backup permanently attached to the server is resilient against ransomware.", "نسخة USB موصولة بالخادم دائمًا مرنة ضد الفدية."),
      answer: false,
      why: l("Ransomware encrypts the attached backup together with the server's data.", "تشفر الفدية النسخة الملحقة مع بيانات الخادم."),
    },
    {
      q: l("Good security metrics are specific, measurable and tied to a control's goal.", "مؤشرات الأمن الجيدة محددة وقابلة للقياس ومرتبطة بهدف الضابط."),
      answer: true,
      why: l("Metrics show whether a control is actually working, not just that it exists.", "تُظهر المقاييس هل الضابط يعمل فعلًا، لا أنه موجود فقط."),
    },
    {
      q: l("Penetration testing is ethical regardless of authorisation if the tester means well.", "اختبار الاختراق أخلاقي بغض النظر عن التفويض إذا كانت نية المختبر حسنة."),
      answer: false,
      why: l("Authorisation, not intent, defines lawful and ethical security testing.", "التفويض لا النية هو ما يحدد اختبار الأمن القانوني والأخلاقي."),
    },
    {
      q: l("The 30-60-90-day roadmap sequences quick wins before layered protection and proof.", "يُرتب خارطة طريق 30-60-90 يومًا المكاسب السريعة قبل الحماية المتعمّقة والإثبات."),
      answer: true,
      why: l("Foundations and quick wins come first, then protect and detect, then prove and improve.", "تأتي الأسس والمكاسب السريعة أولًا، ثم الحماية والكشف، ثم الإثبات والتحسين."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each item as an asset, a threat, a vulnerability or a control", "صنّف كل عنصر كأصل أو تهديد أو ثغرة أو ضابط"),
      categories: [
        l("Asset", "أصل"),
        l("Threat", "تهديد"),
        l("Vulnerability", "ثغرة"),
        l("Control", "ضابط"),
      ],
      items: [
        { text: l("Client financial data", "بيانات العملاء المالية"), answer: 0 },
        { text: l("Ransomware", "الفدية"), answer: 1 },
        { text: l("No MFA on admin accounts", "غياب MFA على حسابات المدير"), answer: 2 },
        { text: l("Segmentation of the network", "تقسيم الشبكة"), answer: 3 },
      ],
      why: l("Data is an asset; ransomware is a threat; missing MFA is a vulnerability; segmentation is a control.", "البيانات أصل؛ والفدية تهديد؛ وغياب MFA ثغرة؛ والتقسيم ضابط."),
    },
    {
      prompt: l("Classify each roadmap action by its 30-60-90 phase", "صنّف كل إجراء في خارطة الطريق بحسب مرحلة 30-60-90"),
      categories: [
        l("Days 1–30 Foundations", "الأيام 1–30 الأسس"),
        l("Days 31–60 Protect & detect", "الأيام 31–60 الحماية والكشف"),
        l("Days 61–90 Prove & improve", "الأيام 61–90 الإثبات والتحسين"),
      ],
      items: [
        { text: l("Enable MFA on e-mail and admin accounts", "تفعيل MFA على البريد وحسابات المدير"), answer: 0 },
        { text: l("Segment the network and deploy endpoint protection", "تقسيم الشبكة ونشر حماية النقاط الطرفية"), answer: 1 },
        { text: l("Run a vulnerability scan and fix the highest items", "إجراء فحص ثغرات وإصلاح الأعلى خطرًا"), answer: 2 },
      ],
      why: l("MFA is a foundation quick win; segmentation and endpoint protection are protection and detection; scanning and fixing are proof and improvement.", "MFA مكسب سريع أساسي؛ والتقسيم وحماية النقاط الطرفية حماية وكشف؛ والفحص والإصلاح إثبات وتحسين."),
    },
    {
      prompt: l("Match each risk treatment to its meaning", "زاوج كل معالجة مخاطر بمعنىها"),
      categories: [
        l("Mitigate", "تخفيف"),
        l("Transfer", "نقل"),
        l("Accept", "قبول"),
        l("Avoid", "تجنب"),
      ],
      items: [
        { text: l("Apply a control to reduce likelihood or impact", "تطبيق ضابط لتقليل الاحتمالية أو الأثر"), answer: 0 },
        { text: l("Shift the risk to another party", "تحويل المخاطرة إلى طرف آخر"), answer: 1 },
        { text: l("Take the risk knowingly", "القبول بالخطر عن قصد"), answer: 2 },
        { text: l("Stop the activity that causes the risk", "إيقاف النشاط المسبب للمخاطرة"), answer: 3 },
      ],
      why: l("These are the four standard risk treatments used in a risk register.", "هذه المعالجات الأربعة المعتادة للمخاطر في سجل المخاطر."),
    },
    {
      prompt: l("Classify each statement as a professional habit or a mistake", "صنّف كل عبارة كعادة مهنية أو خطأ"),
      categories: [
        l("Professional habit", "عادة مهنية"),
        l("Mistake", "خطأ"),
      ],
      items: [
        { text: l("Layer defences and assume prevention will sometimes fail", "وضع دفاعات في طبقات وافتراض أن الوقاية ستفشل أحيانًا"), answer: 0 },
        { text: l("Assume one product makes the business fully secure", "افتراض أن منتجًا واحدًا يجعل المؤسسة آمنة تمامًا"), answer: 1 },
        { text: l("Report progress with measurable metrics", "الإبلاغ عن التقدم بمؤشرات قابلة للقياس"), answer: 0 },
        { text: l("Test systems without authorisation to gain skill", "اختبار أنظمة دون تفويض لاكتساب المهارة"), answer: 1 },
      ],
      why: l("Layering, assuming breach and measuring progress are habits; single-product security and unauthorised testing are mistakes.", "وضع الطبقات وافتراض الاختراق وقياس التقدم عادات؛ وأمن المنتج الواحد والاختبار غير المصرح خطآن."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "The owner of Nova Accounting asks what to do first, given limited budget and time. You must choose the highest-impact, lowest-effort action to start the 90-day roadmap.",
        "يسأل صاحب شركة نوفا للمحاسبة ماذا نفعل أولًا، في ظل ميزانية ووقت محدودين. ويجب أن تختار الإجراء الأعلى أثرًا والأقل جهدًا لبدء خارطة طريق التسعين يومًا.",
      ),
      question: l("What is the best first action?", "ما أفضل إجراء أول؟"),
      options: [
        l("Enable MFA on e-mail, admin and finance accounts", "تفعيل MFA على البريد والمدير والحسابات المالية"),
        l("Buy a new firewall", "شراء جدار ناري جديد"),
        l("Repaint the office", "تجديد طلاء المكتب"),
        l("Wait and see", "الانتظار والترقب"),
      ],
      answer: 0,
      why: l("MFA blocks most credential-based attacks for minimal effort — the classic high-impact quick win.", "يحجب MFA معظم هجمات بيانات الدخول بأقل جهد — وهو المكسب السريع النمطي الأثر."),
    },
    {
      scenario: l(
        "Nova's backups run to a USB disk permanently plugged into the file server. You are reviewing the resilience of the plan against a ransomware risk.",
        "تُجرى نسخ نوفا إلى قرص USB موصول بخادم الملفات دائمًا. وأنت تراجع مرونة الخطة ضد خطر الفدية.",
      ),
      question: l("What is the problem and the fix?", "ما المشكلة وما الإصلاح؟"),
      options: [
        l("No problem; USB backups are always safe", "لا مشكلة؛ فنسخة USB آمنة دائمًا"),
        l("The attached backup is encrypted with the server; move to 3-2-1 with an offline copy and tested restores", "تُشفَّر النسخة الملحقة مع الخادم؛ فانتقل إلى 3-2-1 مع نسخة معزولة واستعادات مختبرة"),
        l("Delete all backups", "احذف كل النسخ"),
        l("Buy a second USB disk", "اشترِ قرص USB ثانٍ"),
      ],
      answer: 1,
      why: l("An attached backup is encrypted together with the data; 3-2-1 with an offline copy is resilient.", "تُشفَّر النسخة الملحقة مع البيانات؛ و3-2-1 مع نسخة معزولة مرن."),
    },
    {
      scenario: l(
        "You want to practise the security skills you have learned and grow toward a career. You have a home computer and some free time.",
        "تريد التدريب على مهارات الأمن التي تعلمتها والنمو نحو مهنة. لديك حاسوب منزلي وبعض الوقت الحر.",
      ),
      question: l("What is the right approach?", "ما النهج الصحيح؟"),
      options: [
        l("Build a home lab of virtual machines and practise on legal, authorised platforms", "ابنِ مختبرًا منزليًا من الأجهزة الافتراضية و تدرّب على منصات قانونية مصرح بها"),
        l("Test the neighbour's Wi-Fi to gain real experience", "اختبر واي فاي الجار لاكتساب خبرة حقيقية"),
        l("Skip practice and only read", "تجاوز التدريب واكتفِ بالقراءة"),
        l("Buy expensive tools without practising", "اشترِ أدوات باهظة دون تدريب"),
      ],
      answer: 0,
      why: l("Authorised virtual machines and legal platforms keep practice lawful, ethical and effective.", "تحفظ الأجهزة الافتراضية المصرح بها والمنصات القانونية التدريب قانونيًا وأخلاقيًا وفعالًا."),
    },
  ],
  practicalChecks: [
    {
      task: l("State the risk-prioritisation principle for a small business", "ذكر مبدأ ترتيب أولويات المخاطر لشركة صغيرة"),
      expected: l("Prioritise by risk reduction per effort: score risks, then treat the highest-scoring, highest-impact risks first with quick wins.", "رتّب بحسب خفض الخطر لكل جهد: فسجّل المخاطر، ثم عالج المخاطر الأعلى درجة والأعلى أثرًا أولًا بالمكاسب السريعة."),
    },
    {
      task: l("State the three phases of the 30-60-90-day roadmap", "ذكر مراحل خارطة طريق 30-60-90 يومًا الثلاث"),
      expected: l("Days 1–30 foundations and quick wins; days 31–60 protect and detect; days 61–90 prove and improve.", "الأيام 1–30 الأسس والمكاسب السريعة؛ والأيام 31–60 الحماية والكشف؛ والأيام 61–90 الإثبات والتحسين."),
    },
    {
      task: l("State the four layers of a defence-in-depth plan", "ذكر طبقات خطة الدفاع المتعمّق الأربعة"),
      expected: l("Prevent, detect, respond and recover.", "الوقاية والكشف والاستجابة والاستشفاء."),
    },
  ],
  homework: {
    title: l("Homework 20 — Final capstone deliverable", "الواجب 20 — المخرج الختامي للمشروع"),
    tasks: [
      l("Write a risk register of at least ten Nova Accounting risks with likelihood, impact, score and chosen treatment.", "اكتب سجل مخاطر لعشر مخاطر على الأقل لشركة نوفا بالاحتمالية والأثر والدرجة والمعالجة المختارة."),
      l("Produce the 30-60-90-day roadmap with owner, effort estimate and success measure for every action.", "أنتج خارطة طريق 30-60-90 يومًا بمالك وتقدير جهد ومقياس نجاح لكل إجراء."),
      l("Draw the target network diagram (segments, firewall rules summary, cloud services, backup flow).", "ارسم مخطط الشبكة المستهدف (القطاعات وملخص قواعد الجدار الناري والخدمات السحابية ومسار النسخ)."),
      l("Write a one-page non-technical summary for the owner: top five risks, top five actions, cost/effort and metrics.", "اكتب ملخصًا غير تقني من صفحة للمالك: أهم خمسة مخاطر وأهم خمسة إجراءات والتكلفة/الجهد والمقاييس."),
      l("Write your personal learning plan for the next six months with at least three resources and one certification goal.", "اكتب خطتك الشخصية للتعلم للأشهر الستة القادمة بثلاثة موارد على الأقل وهدف شهادة واحد."),
    ],
    deliverable: l("A complete capstone pack: risk register, roadmap, network diagram, owner summary and personal learning plan.", "حزمة مشروع ختامي كاملة: سجل المخاطر وخارطة الطريق ومخطط الشبكة وملخص المالك وخطة التعلم الشخصية."),
    criteria: [
      l("A risk register of at least ten risks with scores and treatments", "سجل مخاطر من عشر مخاطر على الأقل بدرجات ومعالجات"),
      l("A 30-60-90-day roadmap with owners and success measures", "خارطة طريق 30-60-90 يومًا بمالكين ومقاييس نجاح"),
      l("A target network diagram with segments and backup flow", "مخطط شبكة مستهدف بقطاعات ومسار نسخ"),
      l("A one-page owner summary with risks, actions and metrics", "ملخص من صفحة للمالك بالمخاطر والإجراءات والمقاييس"),
      l("A personal learning plan with resources and a certification goal", "خطة تعلم شخصية بموارد وهدف شهادة"),
    ],
    challenge: l(
      "Optional challenge: choose one career path from the session and research two entry-level certifications for it, writing how each maps to the skills you have already built in this course.",
      "مهمة تحدٍ اختيارية: اختر مسارًا مهنيًا واحدًا من الجلسة وابحث في شهادتين مبتدئتين له، واكتب كيف تربط كل منهما بالمهارات التي بنيتها بالفعل في هذه الدورة.",
    ),
  },
  refs: [
    { title: "Cybersecurity Framework Quick-Start Guide for Small Businesses", org: "NIST", url: "https://www.nist.gov/itl/smallbusinesscyber" },
    { title: "Small Business Cyber Action Plan", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/small-business-guide" },
    { title: "Cyber Essentials (guide for small businesses)", org: "CISA", url: "https://www.cisa.gov/cyber-essentials" },
    { title: "NICE Workforce Framework for Cybersecurity", org: "NIST", url: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center" },
    { title: "Internet Storm Center", org: "SANS", url: "https://isc.sans.edu/" },
    { title: "3-2-1 backup strategy guidance", org: "CISA", url: "https://www.cisa.gov/topics/cyber-hygiene/backup" },
  ],
  terms: [
    { term: l("Capstone", "المشروع الختامي"), def: l("A culminating project that applies everything learned.", "مشروع ختامي يطبّق كل ما تم تعلمه.") },
    { term: l("Asset", "أصل"), def: l("Something the business must protect, such as data or availability.", "شيء يجب على الأعمال حمايته، مثل البيانات أو التوافر.") },
    { term: l("Threat", "تهديد"), def: l("Something that could harm an asset, such as ransomware or phishing.", "شيء قد يضرّ بالأصل، مثل الفدية أو التصيّد.") },
    { term: l("Vulnerability", "ثغرة"), def: l("A weakness that a threat could exploit, such as missing MFA.", "ضعف يمكن لتهديد استغلاله، مثل غياب MFA.") },
    { term: l("Control", "ضابط"), def: l("Something that reduces the likelihood or impact of a risk.", "شيء يقلل احتمالية أو أثر الخطر.") },
    { term: l("Defense in depth", "الدفاع المتعمّق"), def: l("Layering multiple controls so one failure is not fatal.", "وضع عدة ضوابط في طبقات لئلا يكون فشل واحد قاتلًا.") },
    { term: l("Quick win", "مكسب سريع"), def: l("A low-effort action with a large risk reduction.", "إجراء قليل الجهد يخفض المخاطر كثيرًا.") },
    { term: l("Roadmap", "خارطة الطريق"), def: l("A prioritised, time-boxed plan of security improvements.", "خطة محسّنات أمنية مرتبة الأولويات ومحددة بزمن.") },
    { term: l("3-2-1 backup", "نسخة 3-2-1"), def: l("Three copies, two media, one offsite or offline copy.", "ثلاث نسخ ووسيطان ونسخة خارجية أو معزولة.") },
    { term: l("Security metric", "المقياس الأمني"), def: l("A measurable indicator of control effectiveness or progress.", "مؤشر قابل للقياس لفعالية الضابط أو التقدم.") },
    { term: l("Resilience", "المرونة"), def: l("The ability to recover after a disruption using tested backups and readiness.", "القدرة على التعافي بعد اضطراب باستخدام نسخ مختبرة وجاهزية.") },
    { term: l("Readiness", "الجاهزية"), def: l("Being prepared for an incident through a written, rehearsed plan.", "الاستعداد لحادثة عبر خطة مكتوبة ومُثل عليها.") },
    { term: l("GRC", "الحوكمة والمخاطر والامتثال"), def: l("Governance, Risk and Compliance: the management side of security.", "الجانب الإداري للأمن.") },
    { term: l("Home lab", "المختبر المنزلي"), def: l("A safe, personal environment of virtual machines for practice.", "بيئة شخصية آمنة من الأجهزة الافتراضية للتدريب.") },
    { term: l("Capture the flag (CTF)", "التقاط العلم"), def: l("A legal security competition solving challenges to earn points.", "مسابقة أمنية قانونية بحل تحديات لجمع النقاط.") },
    { term: l("Portfolio", "ملف الأعمال"), def: l("A documented record of what you have learned and built.", "سجل موثق بما تعلمته وبنيته.") },
    { term: l("Certification", "الشهادة"), def: l("A formal credential that validates skills in a domain.", "وثيقة رسمية تُثبت المهارات في مجال.") },
    { term: l("Authorisation", "التفويض"), def: l("Written permission that makes security work lawful and ethical.", "الإذن الكتابي الذي يجعل العمل الأمني قانونيًا وأخلاقيًا."), },
    { term: l("Incident response plan", "خطة الاستجابة للحوادث"), def: l("A written, owned plan for handling incidents, rehearsed in advance.", "خطة مكتوبة ومملوكة للتعامل مع الحوادث، مُثل عليها مسبقًا."), },
    { term: l("Tabletop exercise", "تمرين الطاولة"), def: l("A discussion-based simulation of an incident to test the plan.", "محاكاة قائمة على النقاش لحادثة لاختبار الخطة."), },
    { term: l("Segmentation", "التقسيم"), def: l("Dividing a network into isolated parts to contain a compromise.", "تقسيم الشبكة إلى أجزاء معزولة لاحتواء الاختراق."), },
  ],
};
