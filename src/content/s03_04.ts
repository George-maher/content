import { l, type Session } from "./types";

export const s03: Session = {
  id: 3,
  phase: 1,
  minutes: 60,
  title: l("Malware Fundamentals", "أساسيات البرمجيات الخبيثة"),
  summary: l(
    "The main families of malicious software, how they spread and persist, how ransomware works, and how layered defences stop them.",
    "العائلات الرئيسية للبرمجيات الخبيثة، وكيف تنتشر وتستمر، وكيف تعمل برمجيات الفدية، وكيف توقفها الدفاعات متعددة الطبقات."
  ),
  objectives: [
    l("Classify malware by behaviour: virus, worm, trojan, ransomware, spyware, rootkit, botnet.", "تصنيف البرمجيات الخبيثة حسب سلوكها: فيروس، دودة، حصان طروادة، فدية، تجسس، حزمة جذرية، شبكة بوت."),
    l("Explain common infection paths and persistence methods.", "شرح مسارات العدوى الشائعة وأساليب الاستمرارية."),
    l("Describe the stages of a modern ransomware incident and how to be resilient.", "وصف مراحل حادثة فدية حديثة وكيفية بناء المرونة."),
    l("List prevention, detection and response measures for malware.", "سرد إجراءات الوقاية والكشف والاستجابة للبرمجيات الخبيثة."),
  ],
  sections: [
    {
      h: l("1. What is malware?", "1. ما هي البرمجيات الخبيثة؟"),
      p: [
        l("Malware (malicious software) is any program or code designed to harm, spy on, or take control of a system without the owner's informed consent. It is classified mainly by what it does and how it spreads, not by what it is called in the news.", "البرمجية الخبيثة هي أي برنامج أو شيفرة صُممت لإلحاق الضرر بنظام أو التجسس عليه أو السيطرة عليه دون موافقة مالكه المستنيرة. وتُصنَّف أساسًا بحسب ما تفعله وكيف تنتشر، لا بحسب اسمها في الأخبار."),
        l("Modern malware is usually built as a business: authors sell kits and access, 'loaders' install further payloads, and affiliates run the attacks and split the profit. Many attacks combine several types – for example a trojan delivers a loader that later deploys ransomware.", "تُبنى البرمجيات الخبيثة الحديثة غالبًا كعمل تجاري: يبيع المؤلفون الأدوات والوصول، وتثبّت «المحمِّلات» حمولات إضافية، ويشغّل الشركاء الهجمات ويقتسمون الربح. وتجمع هجمات كثيرة بين أنواع عدة — كأن يوصل حصان طروادة محمِّلًا ينشر الفدية لاحقًا."),
      ],
      table: {
        head: [l("Type", "النوع"), l("How it behaves", "سلوكه"), l("Example effect", "أثر نموذجي")],
        rows: [
          [l("Virus", "فيروس"), l("Attaches to a legitimate file and spreads when the file is run/shared.", "يلتصق بملف سليم وينتشر عند تشغيل الملف أو مشاركته."), l("Corrupts documents, spreads via shared drives", "يتلف المستندات وينتشر عبر الأقراص المشتركة")],
          [l("Worm", "دودة"), l("Self-replicates across networks without user action, often via a vulnerability.", "تنسخ نفسها عبر الشبكات دون تدخل المستخدم، غالبًا عبر ثغرة."), l("Whole network infected in minutes", "إصابة الشبكة كلها في دقائق")],
          [l("Trojan", "حصان طروادة"), l("Pretends to be useful software; the user installs it voluntarily.", "يتظاهر ببرنامج مفيد ويثبّته المستخدم طوعًا."), l("Fake 'PDF converter' opens a backdoor", "«محوّل PDF» مزيف يفتح بابًا خلفيًا")],
          [l("Ransomware", "برمجية فدية"), l("Encrypts data (and often steals it) and demands payment.", "تشفّر البيانات (وغالبًا تسرقها) وتطلب مالًا."), l("Business stops until restored", "توقف العمل حتى الاستعادة")],
          [l("Spyware / infostealer", "برمجية تجسس / سارق معلومات"), l("Secretly collects keystrokes, browser passwords, cookies, screenshots.", "تجمع سرًا ضغطات المفاتيح وكلمات مرور المتصفح وملفات الارتباط ولقطات الشاشة."), l("Account takeover", "الاستيلاء على الحسابات")],
          [l("Rootkit", "حزمة جذرية"), l("Hides itself and other malware deep in the OS or firmware.", "تخفي نفسها وبرمجيات أخرى في عمق نظام التشغيل أو البرمجية الثابتة."), l("Antivirus cannot see it; reinstall needed", "مضاد الفيروسات لا يراها؛ يلزم إعادة التثبيت")],
          [l("Botnet", "شبكة بوت"), l("Many infected devices controlled remotely as an army.", "أجهزة مصابة كثيرة يُتحكم بها عن بُعد كجيش."), l("DDoS, spam, proxying attacks", "حجب الخدمة، البريد المزعج، تمرير الهجمات")],
        ],
      },
    },
    {
      h: l("2. Infection paths and persistence", "2. مسارات العدوى والاستمرارية"),
      p: [
        l("Malware needs a way in. The most common paths are phishing attachments and links, drive-by downloads from compromised or malicious websites, cracked software and fake updates, infected USB drives, exploitation of unpatched internet-facing services, stolen remote-access credentials (RDP, VPN) and compromised software suppliers.", "تحتاج البرمجية الخبيثة إلى منفذ. أشيع المسارات: مرفقات وروابط التصيّد، والتنزيل التلقائي من مواقع مخترقة أو خبيثة، والبرمجيات المقرصنة والتحديثات المزيفة، ووحدات USB المصابة، واستغلال الخدمات المكشوفة غير المحدّثة، وبيانات الدخول المسروقة للوصول البعيد (RDP وVPN)، والموردين المخترقين."),
        l("Once inside, malware tries to survive reboots (persistence): adding startup entries, scheduled tasks or services, creating hidden accounts, or modifying system files. It also tries to evade detection by disabling security tools, hiding in legitimate processes, or encrypting its own code.", "وبعد الدخول تحاول البرمجية البقاء بعد إعادة التشغيل (الاستمرارية): بإضافة عناصر بدء تشغيل أو مهام مجدولة أو خدمات، وإنشاء حسابات مخفية، أو تعديل ملفات النظام. كما تحاول تفادي الكشف بتعطيل أدوات الأمن أو الاختباء داخل عمليات سليمة أو تشفير شيفرتها."),
      ],
      callout: { kind: "tip", text: l("Signs of infection: unexpected slowness, antivirus turned off, unknown programs at startup, strange outbound connections, files renamed with odd extensions, browser redirects. Isolate first, investigate second.", "علامات العدوى: بطء غير متوقع، إيقاف مضاد الفيروسات، برامج مجهولة عند الإقلاع، اتصالات خارجية غريبة، ملفات بامتدادات غريبة، تحويلات في المتصفح. اعزل أولًا ثم حقّق.") },
    },
    {
      h: l("3. Anatomy of a ransomware incident", "3. تشريح حادثة فدية"),
      p: [
        l("Modern ransomware is rarely a single click. Operators gain initial access (phishing, exposed RDP, a vulnerable VPN), explore the network, steal credentials, move laterally to servers, copy sensitive data out (double extortion), delete or encrypt backups, and only then encrypt widely, often at night or on a holiday.", "نادرًا ما تكون الفدية الحديثة نقرة واحدة. يحصل المشغّلون على دخول أولي (تصيّد، RDP مكشوف، VPN ضعيف)، ثم يستكشفون الشبكة ويسرقون بيانات الدخول ويتحركون جانبيًا نحو الخوادم وينسخون البيانات الحساسة للخارج (ابتزاز مزدوج) ويحذفون النسخ الاحتياطية أو يشفّرونها، وبعد ذلك فقط يشفّرون على نطاق واسع، غالبًا ليلًا أو في عطلة."),
        l("The best protection is resilience: tested offline or immutable backups (the 3-2-1 rule: three copies, two media types, one off-site/offline), prompt patching, multi-factor authentication on all remote access, least-privilege accounts, network segmentation and monitoring that catches the early stages. Paying does not guarantee data recovery and funds further crime; decisions about payment belong to management, legal advisers and law enforcement.", "أفضل حماية هي المرونة: نسخ احتياطية مُختبَرة معزولة أو غير قابلة للتعديل (قاعدة 3-2-1: ثلاث نسخ، ووسيطان مختلفان، ونسخة خارج الموقع/معزولة)، وتحديثات سريعة، ومصادقة متعددة العوامل لكل وصول بعيد، وحسابات بأقل صلاحية، وتقسيم الشبكة، ومراقبة تلتقط المراحل المبكرة. الدفع لا يضمن استعادة البيانات ويموّل جرائم أخرى؛ وقرار الدفع من اختصاص الإدارة والمستشارين القانونيين وجهات إنفاذ القانون."),
      ],
      callout: { kind: "warn", text: l("A backup that has never been restored is only a hope. Test restores regularly and keep at least one copy disconnected from the network.", "النسخة الاحتياطية التي لم تُستعَد قط مجرد أمل. اختبر الاستعادة بانتظام وأبقِ نسخة واحدة على الأقل منفصلة عن الشبكة.") },
    },
    {
      h: l("4. Prevention, detection and response", "4. الوقاية والكشف والاستجابة"),
      p: [l("No single tool stops all malware, so combine layers:", "لا توجد أداة واحدة توقف كل البرمجيات الخبيثة، لذا اجمع بين الطبقات:")],
      bullets: [
        l("Prevent: patch OS and applications, restrict admin rights, allow-list software, block macros from the Internet, filter e-mail and web, train users.", "الوقاية: تحديث النظام والتطبيقات، تقييد صلاحيات المدير، قائمة بيضاء للبرمجيات، حظر وحدات الماكرو القادمة من الإنترنت، ترشيح البريد والويب، تدريب المستخدمين."),
        l("Detect: endpoint protection (EDR/anti-malware), DNS and proxy logs, alerts on mass file changes, network monitoring for unusual outbound traffic.", "الكشف: حماية النقاط الطرفية (EDR/مكافحة البرمجيات الخبيثة)، سجلات DNS والوكيل، تنبيهات التغيير الجماعي للملفات، مراقبة الشبكة للحركة الخارجية غير المعتادة."),
        l("Respond: disconnect the device from the network (do not power off if forensic evidence matters), report to the security team, preserve evidence, reset credentials, rebuild from known-good media, restore from clean backups.", "الاستجابة: افصل الجهاز عن الشبكة (لا تُطفئه إن كانت الأدلة مهمة)، أبلغ فريق الأمن، احفظ الأدلة، أعد تعيين بيانات الدخول، أعد البناء من وسائط سليمة، واستعد من نسخ نظيفة."),
        l("Learn: find the initial access path and fix it, or the attacker returns.", "التعلّم: اعثر على مسار الدخول الأول وأصلحه وإلا عاد المهاجم."),
      ],
    },
  ],
  diagram: {
    kind: "grid",
    title: l("Malware family map", "خريطة عائلات البرمجيات الخبيثة"),
    caption: l("Families overlap in practice: a trojan may drop spyware first and ransomware later. Classify by observed behaviour.", "تتداخل العائلات عمليًا: قد يسقط حصان طروادة برمجية تجسس أولًا ثم فدية لاحقًا. صنّف حسب السلوك الملاحظ."),
    nodes: [
      { label: l("Spreads by itself", "ينتشر ذاتيًا"), desc: l("Worm – network propagation; Botnet nodes – recruited devices", "الدودة – انتشار عبر الشبكة؛ عقد البوت – أجهزة مجنَّدة") },
      { label: l("Needs a host / user", "يحتاج مضيفًا / مستخدمًا"), desc: l("Virus (file infector); Trojan (user installs voluntarily)", "الفيروس (يصيب الملفات)؛ حصان طروادة (يثبّته المستخدم طوعًا)") },
      { label: l("Steals", "يسرق"), desc: l("Spyware, keyloggers, infostealers – credentials and secrets", "التجسس ومسجلات المفاتيح وسارقو المعلومات – بيانات الدخول والأسرار") },
      { label: l("Extorts", "يبتز"), desc: l("Ransomware – encrypts and threatens to leak data", "الفدية – تشفّر وتهدد بتسريب البيانات") },
      { label: l("Hides", "يختفي"), desc: l("Rootkits, bootkits – conceal presence deep in the system", "الحزم الجذرية – تخفي الوجود في عمق النظام") },
      { label: l("Defends", "الدفاع"), desc: l("Patch · least privilege · EDR · e-mail filtering · offline backups", "التحديث · أقل صلاحية · EDR · ترشيح البريد · نسخ معزولة") },
    ],
  },
  lab: {
    tool: "match",
    title: l("Lab 3 – Identify the malware family", "المختبر 3 – تحديد عائلة البرمجية الخبيثة"),
    scenario: l("The help desk forwards six symptom descriptions from different employees. Decide which malware family each most likely represents so the security team can pick the right response.", "يحوّل مكتب المساعدة ستة أوصاف أعراض من موظفين مختلفين. حدّد العائلة الأرجح لكل وصف ليختار فريق الأمن الاستجابة المناسبة."),
    safety: l("Never run, download or open real malware samples in this course. This lab uses text descriptions only. Real malware analysis is done in isolated, specially prepared environments by trained staff.", "لا تشغّل أو تنزّل أو تفتح عينات برمجيات خبيثة حقيقية في هذه الدورة. يستخدم هذا المختبر أوصافًا نصية فقط. يجري تحليل البرمجيات الخبيثة الحقيقية في بيئات معزولة ومجهزة خصيصًا بواسطة مختصين."),
    steps: [
      l("Review the malware table and the 'how it spreads' column.", "راجع جدول البرمجيات الخبيثة وعمود طريقة الانتشار."),
      l("Match each description to a family in the tool.", "طابق كل وصف مع عائلة في الأداة."),
      l("Check your answers and read the corrections.", "تحقق من إجاباتك واقرأ التصحيحات."),
      l("For ransomware, write the three immediate response actions in order.", "بالنسبة للفدية، اكتب إجراءات الاستجابة الفورية الثلاثة بالترتيب."),
      l("Write which of your own devices would be hardest to restore and what backup you would need.", "اكتب أي أجهزتك سيكون الأصعب استعادة وما النسخة الاحتياطية التي تحتاجها."),
    ],
    expected: l("Six correct matches plus a written three-step first-response plan for a ransomware infection.", "ست مطابقات صحيحة مع خطة مكتوبة من ثلاث خطوات للاستجابة الأولى لإصابة بالفدية."),
    match: {
      prompt: l("Match each symptom to the most likely malware family", "طابق كل عَرَض مع أرجح عائلة"),
      options: [l("Worm", "دودة"), l("Trojan", "حصان طروادة"), l("Ransomware", "فدية"), l("Spyware / infostealer", "تجسس / سارق معلومات"), l("Rootkit", "حزمة جذرية"), l("Botnet client", "عميل شبكة بوت")],
      items: [
        { text: l("Within ten minutes, hundreds of unpatched PCs on the LAN are infected without anyone opening a file.", "خلال عشر دقائق تُصاب مئات الأجهزة غير المحدّثة في الشبكة دون أن يفتح أحد ملفًا."), answer: 0 },
        { text: l("A user installs a free 'video codec' and later finds a hidden remote-control service running.", "يثبّت مستخدم «مشفّر فيديو» مجانيًا ثم يجد خدمة تحكم بعيد مخفية تعمل."), answer: 1 },
        { text: l("All documents show a '.locked' extension and a note demands cryptocurrency.", "كل المستندات بامتداد «.locked» وملاحظة تطلب عملة مشفّرة."), answer: 2 },
        { text: l("Browser-saved passwords and session cookies are uploaded to an unknown server; accounts get hijacked.", "تُرفع كلمات المرور المحفوظة في المتصفح وملفات الجلسة إلى خادم مجهول وتُختطف الحسابات."), answer: 3 },
        { text: l("Antivirus scans find nothing, yet a forensic boot from clean media reveals hidden processes.", "لا يجد مضاد الفيروسات شيئًا، لكن الإقلاع من وسائط نظيفة يكشف عمليات مخفية."), answer: 4 },
        { text: l("An idle office PC quietly sends thousands of requests to a victim website on command from an unknown server.", "حاسوب مكتبي خامل يرسل بصمت آلاف الطلبات إلى موقع ضحية بأمر من خادم مجهول."), answer: 5 },
      ],
    },
  },
  quiz: [
    { q: l("Which malware spreads automatically across a network without user action?", "أي برمجية خبيثة تنتشر تلقائيًا عبر الشبكة دون تدخل المستخدم؟"), options: [l("Worm", "دودة"), l("Trojan", "حصان طروادة"), l("Adware", "برمجية إعلانات"), l("Keylogger", "مسجّل مفاتيح")], answer: 0, why: l("Worms self-replicate, often exploiting vulnerabilities.", "الديدان تنسخ نفسها غالبًا باستغلال الثغرات.") },
    { q: l("What distinguishes a Trojan from a virus?", "ما الذي يميز حصان طروادة عن الفيروس؟"), options: [l("It encrypts files", "يشفّر الملفات"), l("It disguises itself as legitimate software", "يتنكر في هيئة برنامج سليم"), l("It only runs on servers", "يعمل على الخوادم فقط"), l("It cannot steal data", "لا يستطيع سرقة البيانات")], answer: 1, why: l("Trojans rely on deception: the user installs them believing they are useful.", "تعتمد أحصنة طروادة على الخداع: يثبتها المستخدم ظانًا أنها مفيدة.") },
    { q: l("What is 'double extortion' in ransomware?", "ما «الابتزاز المزدوج» في الفدية؟"), options: [l("Encrypting twice", "التشفير مرتين"), l("Demanding payment from two victims", "طلب الدفع من ضحيتين"), l("Encrypting data and also threatening to leak stolen copies", "تشفير البيانات والتهديد بتسريب نسخ مسروقة أيضًا"), l("Charging double after a deadline", "مضاعفة المبلغ بعد المهلة")], answer: 2, why: l("Attackers steal data first so they can pressure victims who restore from backup.", "يسرق المهاجمون البيانات أولًا ليضغطوا على الضحايا الذين يستعيدون من النسخ.") },
    { q: l("The 3-2-1 backup rule means…", "قاعدة النسخ الاحتياطي 3-2-1 تعني…"), options: [l("3 copies, 2 media types, 1 off-site or offline", "3 نسخ، ووسيطان، ونسخة خارجية أو معزولة"), l("3 servers, 2 admins, 1 password", "3 خوادم، ومديران، وكلمة مرور واحدة"), l("3 days, 2 weeks, 1 month retention", "احتفاظ 3 أيام و2 أسبوع وشهر"), l("3 antivirus, 2 firewalls, 1 VPN", "3 مضادات، وجداران، وVPN واحد")], answer: 0, why: l("Diversity and isolation ensure one event cannot destroy every copy.", "التنوع والعزل يضمنان ألا يدمر حدث واحد كل النسخ.") },
    { q: l("An employee suspects ransomware on their laptop. First action?", "اشتبه موظف بوجود فدية على حاسوبه. ما أول إجراء؟"), options: [l("Keep working and ignore it", "يواصل العمل ويتجاهل"), l("Pay immediately", "يدفع فورًا"), l("Disconnect from the network and report to security", "يفصل عن الشبكة ويبلّغ الأمن"), l("Delete all files", "يحذف كل الملفات")], answer: 2, why: l("Isolation limits spread; reporting starts the response process and preserves evidence.", "العزل يحد من الانتشار والإبلاغ يبدأ الاستجابة ويحفظ الأدلة.") },
    { q: l("Which malware is designed mainly to hide deep in the operating system?", "أي برمجية مصممة أساسًا للاختباء في عمق نظام التشغيل؟"), options: [l("Rootkit", "حزمة جذرية"), l("Worm", "دودة"), l("Ransomware", "فدية"), l("Spam bot", "بوت بريد مزعج")], answer: 0, why: l("Rootkits conceal themselves and other malware from normal tools.", "تخفي الحزم الجذرية نفسها وبرمجيات أخرى عن الأدوات العادية.") },
    { q: l("Which measure best reduces the impact of an infected user account?", "أي إجراء يقلل أكثر أثر حساب مستخدم مصاب؟"), options: [l("Giving everyone administrator rights", "منح الجميع صلاحيات المدير"), l("Least-privilege accounts", "حسابات بأقل صلاحية"), l("Disabling updates", "تعطيل التحديثات"), l("Using one shared password", "استخدام كلمة مرور مشتركة")], answer: 1, why: l("Malware inherits the rights of the user who ran it; fewer rights means less damage.", "ترث البرمجية صلاحيات المستخدم الذي شغّلها؛ صلاحيات أقل تعني ضررًا أقل.") },
  ],
  homework: {
    title: l("Homework 3 – Build a personal ransomware-resilience plan", "الواجب 3 – خطة مرونة شخصية ضد الفدية"),
    tasks: [
      l("Inventory your important files and where each is stored (phone, laptop, cloud).", "احصر ملفاتك المهمة ومكان تخزين كل منها (الهاتف، الحاسوب، السحابة)."),
      l("Describe how each would be backed up following 3-2-1.", "صف كيف ستُنسخ كل مجموعة وفق قاعدة 3-2-1."),
      l("Check that automatic updates are enabled on every device and record the result.", "تحقق من تفعيل التحديثات التلقائية في كل جهاز وسجّل النتيجة."),
      l("Write a five-line 'what I do in the first ten minutes' response card.", "اكتب بطاقة استجابة من خمسة أسطر: «ماذا أفعل في أول عشر دقائق»."),
    ],
    deliverable: l("A one-page plan with a backup table, update checklist and the response card.", "خطة من صفحة واحدة تضم جدول النسخ وقائمة التحديثات وبطاقة الاستجابة."),
  },
  refs: [
    { title: "Stop Ransomware guide", org: "CISA", url: "https://www.cisa.gov/stopransomware" },
    { title: "No More Ransom project", org: "Europol & partners", url: "https://www.nomoreransom.org/" },
    { title: "Malware – Software (ATT&CK)", org: "MITRE", url: "https://attack.mitre.org/software/" },
    { title: "Mitigating malware and ransomware attacks", org: "NCSC UK", url: "https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks" },
  ],
  terms: [
    { term: l("Malware", "البرمجية الخبيثة"), def: l("Software designed to harm or take unauthorised control of a system.", "برمجية مصممة لإلحاق الضرر بنظام أو السيطرة عليه دون تصريح.") },
    { term: l("Ransomware", "برمجية الفدية"), def: l("Malware that encrypts data and demands payment for its release.", "برمجية خبيثة تشفّر البيانات وتطلب مقابلًا لإطلاقها.") },
    { term: l("Botnet", "شبكة البوت"), def: l("A network of infected devices controlled remotely by an attacker.", "شبكة أجهزة مصابة يتحكم بها مهاجم عن بُعد.") },
    { term: l("Persistence", "الاستمرارية"), def: l("Techniques that let malware survive reboots and cleanup attempts.", "تقنيات تتيح للبرمجية الخبيثة البقاء بعد إعادة التشغيل ومحاولات التنظيف.") },
    { term: l("Lateral movement", "الحركة الجانبية"), def: l("Spreading from one compromised system to others inside a network.", "الانتشار من نظام مخترق إلى أنظمة أخرى داخل الشبكة.") },
    { term: l("EDR", "كشف الاستجابة للنقاط الطرفية"), def: l("Endpoint Detection and Response: tooling that monitors devices for malicious behaviour and enables response.", "أدوات تراقب الأجهزة بحثًا عن سلوك خبيث وتتيح الاستجابة.") },
    { term: l("Drive-by download", "التنزيل التلقائي"), def: l("Malware installed just by visiting a malicious or compromised web page.", "تثبيت برمجية خبيثة بمجرد زيارة صفحة ويب خبيثة أو مخترقة.") },
  ],
};

export const s04: Session = {
  id: 4,
  phase: 1,
  minutes: 60,
  title: l("Social Engineering and Phishing", "الهندسة الاجتماعية والتصيّد الاحتيالي"),
  summary: l(
    "How attackers manipulate human psychology, the main phishing variants, how to inspect a suspicious message, and how organisations build a human firewall.",
    "كيف يتلاعب المهاجمون بالنفسية البشرية، وأنواع التصيّد الرئيسية، وكيف تفحص رسالة مشبوهة، وكيف تبني المؤسسات «جدارًا بشريًا»."
  ),
  objectives: [
    l("Explain the psychological levers used in social engineering.", "شرح الروافع النفسية المستخدمة في الهندسة الاجتماعية."),
    l("Differentiate phishing, spear phishing, whaling, smishing, vishing and BEC.", "التمييز بين التصيّد والتصيّد الموجّه وصيد الحيتان والرسائل النصية والصوتية واحتيال البريد التجاري."),
    l("Inspect a message's sender, links, attachments and tone systematically.", "فحص مرسل الرسالة وروابطها ومرفقاتها ونبرتها بشكل منهجي."),
    l("Apply the right reporting and response actions after a click.", "تطبيق إجراءات الإبلاغ والاستجابة الصحيحة بعد النقر."),
  ],
  sections: [
    {
      h: l("1. Why attackers target people", "1. لماذا يستهدف المهاجمون الأشخاص"),
      p: [
        l("Social engineering is manipulating people into giving up information or performing actions that help an attacker. It works because it is usually cheaper and easier to trick a person than to defeat a well-configured system. Human error is involved in a very large share of breaches.", "الهندسة الاجتماعية هي التلاعب بالأشخاص لدفعهم إلى كشف معلومات أو تنفيذ إجراءات تخدم المهاجم. وهي فعّالة لأن خداع شخص أرخص وأسهل عادةً من اختراق نظام جيد الإعداد. ويدخل الخطأ البشري في نسبة كبيرة جدًا من الاختراقات."),
        l("Attackers exploit predictable psychological levers: authority (the 'CEO' orders it), urgency (act in 30 minutes), fear (your account will be closed), greed or curiosity (you won a prize), helpfulness (a colleague needs a quick favour) and social proof ('everyone has already done it').", "يستغل المهاجمون روافع نفسية متوقعة: السلطة (المدير العام يأمر)، والاستعجال (خلال 30 دقيقة)، والخوف (سيُغلق حسابك)، والطمع أو الفضول (ربحت جائزة)، والرغبة في المساعدة (زميل يحتاج خدمة سريعة)، والدليل الاجتماعي («الجميع فعلها بالفعل»)."),
      ],
    },
    {
      h: l("2. Forms of phishing and social engineering", "2. صور التصيّد والهندسة الاجتماعية"),
      p: [l("Phishing is fraudulent communication that imitates a trusted party to steal credentials, money or to deliver malware.", "التصيّد رسالة احتيالية تنتحل صفة جهة موثوقة لسرقة بيانات الدخول أو المال أو لتوصيل برمجية خبيثة.")],
      table: {
        head: [l("Variant", "الصورة"), l("Channel / target", "القناة / الهدف"), l("Typical trick", "الحيلة المعتادة")],
        rows: [
          [l("Mass phishing", "تصيّد جماعي"), l("E-mail to thousands", "بريد لآلاف الأشخاص"), l("Fake bank or delivery notice with a link", "إشعار مزيف من بنك أو شركة شحن برابط")],
          [l("Spear phishing", "تصيّد موجّه"), l("A specific person, researched", "شخص محدد بعد دراسته"), l("Mentions real colleagues, projects, suppliers", "يذكر زملاء ومشاريع وموردين حقيقيين")],
          [l("Whaling", "صيد الحيتان"), l("Senior executives", "كبار التنفيذيين"), l("Fake legal or board documents", "وثائق قانونية أو لمجلس الإدارة مزيفة")],
          [l("Business E-mail Compromise (BEC)", "اختراق البريد التجاري"), l("Finance staff", "موظفو المالية"), l("'Change our bank details' – invoice fraud", "«غيّروا بياناتنا المصرفية» – احتيال فواتير")],
          [l("Smishing / Vishing", "تصيّد الرسائل النصية / الصوتي"), l("SMS / phone calls", "رسائل نصية / مكالمات"), l("'Bank fraud team' asks for the one-time code", "«فريق الاحتيال بالبنك» يطلب رمز التحقق")],
          [l("Pretexting / Baiting / Tailgating", "الذريعة / الطُعم / التسلل المادي"), l("Phone, USB, doors", "الهاتف، وحدات USB، الأبواب"), l("Fake IT support; USB 'Salaries 2025'; following staff into a building", "دعم تقني مزيف؛ USB باسم «الرواتب»؛ اتباع الموظفين لدخول مبنى")],
        ],
      },
      callout: { kind: "warn", text: l("Real-time AI voice and video imitation now makes 'urgent call from the boss' scams more convincing. Always verify payment or credential requests through a second, known channel.", "أصبح تقليد الصوت والفيديو بالذكاء الاصطناعي في الزمن الحقيقي يجعل احتيال «مكالمة عاجلة من المدير» أكثر إقناعًا. تحقق دائمًا من طلبات الدفع أو بيانات الدخول عبر قناة ثانية معروفة.") },
    },
    {
      h: l("3. How to inspect a suspicious message", "3. كيف تفحص رسالة مشبوهة"),
      p: [l("Use a repeatable checklist rather than relying on gut feeling. Stop, then examine:", "استخدم قائمة فحص متكررة بدل الاعتماد على الحدس. توقّف ثم افحص:")],
      bullets: [
        l("Sender – is the exact domain correct? Look for look-alikes (paypa1.com, micros0ft-support.net) and a display name that hides the real address.", "المرسل – هل النطاق صحيح تمامًا؟ ابحث عن التشابه (paypa1.com) واسم عرض يخفي العنوان الحقيقي."),
        l("Links – hover (or long-press) to see the real destination; the visible text can lie. Prefer typing the known address yourself.", "الروابط – مرّر المؤشر (أو اضغط مطولًا) لرؤية الوجهة الحقيقية؛ فالنص الظاهر قد يكذب. والأفضل كتابة العنوان المعروف بنفسك."),
        l("Attachments – unexpected invoices, double extensions (.pdf.exe), password-protected archives and macro-enabled Office files are red flags.", "المرفقات – الفواتير غير المتوقعة والامتدادات المزدوجة (.pdf.exe) والأرشيفات المحمية بكلمة مرور وملفات أوفيس المفعّلة بالماكرو علامات خطر."),
        l("Tone – urgency, threats, secrecy ('do not tell anyone'), generic greetings, unusual requests for money, gift cards or codes.", "النبرة – الاستعجال والتهديد والسرية («لا تخبر أحدًا») والتحية العامة وطلبات غير معتادة لمال أو بطاقات هدايا أو رموز."),
        l("Context – were you expecting this? Does it fit how this person or company normally communicates?", "السياق – هل كنت تتوقعها؟ وهل تتفق مع أسلوب هذا الشخص أو الشركة المعتاد؟"),
      ],
      callout: { kind: "key", text: l("Rule of thumb: legitimate organisations do not ask for your password, PIN or one-time code by e-mail, SMS or phone – ever.", "قاعدة عامة: المؤسسات الشرعية لا تطلب كلمة مرورك أو رقمك السري أو رمز التحقق عبر البريد أو الرسائل أو الهاتف — أبدًا.") },
    },
    {
      h: l("4. If you clicked – and building a human firewall", "4. إذا نقرت – وبناء الجدار البشري"),
      p: [
        l("Everyone eventually clicks something. What matters is speed of reporting. If you opened a link or attachment: disconnect from the network if you ran a file, do not try to hide it, report immediately to IT/security, change the password of any account you entered (from a different, clean device) and watch for unusual account activity. A no-blame culture produces faster reports and smaller incidents.", "كل شخص ينقر على شيء في النهاية. المهم هو سرعة الإبلاغ. إذا فتحت رابطًا أو مرفقًا: افصل عن الشبكة إن شغّلت ملفًا، ولا تحاول إخفاء الأمر، وأبلغ فورًا قسم تقنية المعلومات/الأمن، وغيّر كلمة مرور أي حساب أدخلته (من جهاز آخر نظيف) وراقب النشاط غير المعتاد. وثقافة عدم اللوم تنتج بلاغات أسرع وحوادث أصغر."),
        l("Organisations reduce risk with layered measures: e-mail filtering and link rewriting, multi-factor authentication (preferably phishing-resistant FIDO2/passkeys), a one-click 'report phishing' button, simulated phishing exercises used for learning rather than punishment, and strict verification procedures for payment changes (call-back to a known number, two-person approval).", "تخفض المؤسسات المخاطر بإجراءات متعددة الطبقات: ترشيح البريد وإعادة كتابة الروابط، ومصادقة متعددة العوامل (ويفضل المقاومة للتصيّد مثل FIDO2 ومفاتيح المرور)، وزر «أبلغ عن تصيّد» بنقرة واحدة، وتمارين تصيّد محاكاة للتعلم لا للعقاب، وإجراءات تحقق صارمة لتغيير بيانات الدفع (اتصال بالرقم المعروف وموافقة شخصين)."),
      ],
    },
  ],
  diagram: {
    kind: "cycle",
    title: l("The phishing decision loop – STOP · LOOK · VERIFY · REPORT", "حلقة قرار التصيّد – توقّف · تفحّص · تحقّق · أبلغ"),
    caption: l("Every unexpected request goes through the same loop. Reporting feeds the filter and protects colleagues, so it closes the loop.", "كل طلب غير متوقع يمر بالحلقة نفسها. والإبلاغ يغذّي المرشّحات ويحمي الزملاء فيغلق الحلقة."),
    nodes: [
      { label: l("Message arrives", "وصول الرسالة"), desc: l("Unexpected request, link or attachment", "طلب أو رابط أو مرفق غير متوقع") },
      { label: l("STOP", "توقّف"), desc: l("Resist urgency; do not click yet", "قاوم الاستعجال ولا تنقر بعد") },
      { label: l("LOOK", "تفحّص"), desc: l("Sender domain, real link, attachment, tone", "نطاق المرسل والرابط الحقيقي والمرفق والنبرة") },
      { label: l("VERIFY", "تحقّق"), desc: l("Use a second, known channel", "استخدم قناة ثانية معروفة") },
      { label: l("REPORT", "أبلغ"), desc: l("Report button / security team, then delete", "زر الإبلاغ أو فريق الأمن ثم احذف") },
    ],
  },
  lab: {
    tool: "phish",
    title: l("Lab 4 – Dissect a phishing e-mail", "المختبر 4 – تشريح رسالة تصيّد"),
    scenario: l("You receive the e-mail shown below at work. Mark every element you consider suspicious, reveal the analysis, and then decide how you would respond.", "وصلتك الرسالة المعروضة أدناه في العمل. ضع علامة على كل عنصر تراه مشبوهًا ثم اكشف التحليل وقرر كيف ستتصرف."),
    safety: l("The e-mail is a safe simulation with non-working addresses. In real life never click links in suspicious messages, and never forward live phishing mails to colleagues – use the report button or send them to the security team.", "الرسالة محاكاة آمنة بعناوين غير عاملة. في الواقع لا تنقر الروابط في الرسائل المشبوهة ولا تعيد توجيه رسائل تصيّد حية للزملاء — استخدم زر الإبلاغ أو أرسلها لفريق الأمن."),
    steps: [
      l("Examine the sender address character by character.", "افحص عنوان المرسل حرفًا حرفًا."),
      l("Mark all elements you believe are suspicious.", "ضع علامة على كل العناصر التي تراها مشبوهة."),
      l("Reveal the analysis and compare it with your selections.", "اكشف التحليل وقارنه باختياراتك."),
      l("Notice the two 'neutral' elements – explain why they do not prove the e-mail is safe.", "لاحظ العنصرين «المحايدين» – اشرح لماذا لا يثبتان أن الرسالة آمنة."),
      l("Write the exact steps you would take: do not click, report, delete, and check the account directly by typing the known website.", "اكتب الخطوات بدقة: لا تنقر، أبلغ، احذف، وتحقق من الحساب مباشرة بكتابة الموقع المعروف."),
    ],
    expected: l("You identify the five clearly malicious indicators, avoid false alarms on the neutral items and write a correct response procedure.", "تحدد المؤشرات الخبيثة الخمسة بوضوح وتتجنب الإنذار الكاذب على العناصر المحايدة وتكتب إجراء استجابة صحيحًا."),
  },
  quiz: [
    { q: l("Which is the strongest sign of a phishing e-mail?", "أي مما يلي أقوى علامة على رسالة تصيّد؟"), options: [l("It arrives on a Monday", "تصل يوم الاثنين"), l("It creates urgency and asks you to log in through a link", "تخلق استعجالًا وتطلب تسجيل الدخول عبر رابط"), l("It has a company logo", "تحمل شعار شركة"), l("It is long", "طويلة")], answer: 1, why: l("Artificial urgency plus a credential link is the classic pattern; logos are trivially copied.", "الاستعجال المصطنع مع رابط لبيانات الدخول هو النمط الكلاسيكي؛ والشعارات تُنسخ بسهولة.") },
    { q: l("A message targeting the CFO with a fake legal notice is…", "رسالة تستهدف المدير المالي بإشعار قانوني مزيف هي…"), options: [l("Smishing", "تصيّد نصي"), l("Whaling", "صيد الحيتان"), l("Tailgating", "تسلل مادي"), l("Baiting", "طُعم")], answer: 1, why: l("Whaling is spear phishing aimed at senior executives.", "صيد الحيتان تصيّد موجّه لكبار التنفيذيين.") },
    { q: l("How should you verify an urgent request to change a supplier's bank account?", "كيف تتحقق من طلب عاجل لتغيير حساب مصرفي لمورّد؟"), options: [l("Reply to the same e-mail", "الرد على الرسالة نفسها"), l("Call the supplier on a number you already have on file", "الاتصال بالمورّد على رقم لديك مسبقًا في السجلات"), l("Use the phone number in the e-mail", "استخدام الرقم الوارد في الرسالة"), l("Ignore the policy because it is urgent", "تجاوز السياسة لأن الأمر عاجل")], answer: 1, why: l("An out-of-band call to a known number defeats BEC because the attacker controls only the e-mail channel.", "الاتصال خارج القناة برقم معروف يُفشل احتيال البريد التجاري لأن المهاجم يتحكم في قناة البريد فقط.") },
    { q: l("You entered your password on a fake login page. What first?", "أدخلت كلمة مرورك في صفحة دخول مزيفة. ما أول خطوة؟"), options: [l("Do nothing and hope", "لا شيء وأتمنى الخير"), l("Change that password from a clean device, enable MFA, and report it", "تغيير كلمة المرور من جهاز نظيف وتفعيل MFA والإبلاغ"), l("Restart the browser", "إعادة تشغيل المتصفح"), l("Reply to the sender", "الرد على المرسل")], answer: 1, why: l("The credential is exposed; change it quickly, add a second factor, and tell security so related abuse can be found.", "تعرضت بيانات الدخول؛ غيّرها بسرعة وأضف عاملًا ثانيًا وأبلغ الأمن للبحث عن إساءة مرتبطة.") },
    { q: l("Following an employee through a secured door without badging is called…", "اتباع موظف عبر باب مؤمّن دون تمرير البطاقة يسمى…"), options: [l("Vishing", "تصيّد صوتي"), l("Pretexting", "ذريعة"), l("Tailgating", "تسلل مادي"), l("Phishing", "تصيّد")], answer: 2, why: l("Tailgating is a physical social engineering technique.", "التسلل المادي أسلوب هندسة اجتماعية مادي.") },
    { q: l("Which authentication is most resistant to phishing?", "أي مصادقة هي الأكثر مقاومة للتصيّد؟"), options: [l("SMS codes", "رموز الرسائل النصية"), l("Security questions", "أسئلة الأمان"), l("FIDO2 security keys / passkeys", "مفاتيح FIDO2 / مفاتيح المرور"), l("Longer passwords only", "كلمات مرور أطول فقط")], answer: 2, why: l("FIDO2 binds the login to the real website, so a look-alike site cannot capture a usable credential.", "يربط FIDO2 تسجيل الدخول بالموقع الحقيقي فلا يستطيع موقع مشابه التقاط بيانات صالحة.") },
    { q: l("Which statement about simulated phishing exercises is best practice?", "أي عبارة عن تمارين التصيّد المحاكاة تمثل أفضل ممارسة؟"), options: [l("Publicly shame those who click", "التشهير بمن ينقر علنًا"), l("Use them to teach and measure reporting rate, without punishment", "استخدامها للتعليم وقياس معدل الإبلاغ دون عقاب"), l("Run them only once a decade", "إجراؤها مرة كل عقد"), l("Never tell users afterwards", "عدم إخبار المستخدمين بعدها")], answer: 1, why: l("Blame discourages reporting; learning and quick reporting are the goals.", "اللوم يثني عن الإبلاغ؛ والهدف التعلم وسرعة الإبلاغ.") },
  ],
  homework: {
    title: l("Homework 4 – Awareness mini-campaign", "الواجب 4 – حملة توعية مصغّرة"),
    tasks: [
      l("Collect three real phishing examples from public sources (anti-phishing sites) and note their indicators.", "اجمع ثلاثة أمثلة تصيّد حقيقية من مصادر عامة (مواقع مكافحة التصيّد) ودوّن مؤشراتها."),
      l("Design a one-page poster with the STOP-LOOK-VERIFY-REPORT loop for non-technical staff.", "صمّم ملصقًا من صفحة واحدة لحلقة توقّف-تفحّص-تحقّق-أبلغ للموظفين غير التقنيين."),
      l("Write a 'payment change' verification procedure of at least four steps.", "اكتب إجراء تحقق لـ«تغيير بيانات الدفع» من أربع خطوات على الأقل."),
      l("Review your own social media privacy: list information an attacker could use for a spear-phishing pretext.", "راجع خصوصية حساباتك الاجتماعية: اذكر معلومات يمكن للمهاجم استخدامها لذريعة تصيّد موجّه."),
    ],
    deliverable: l("Poster, procedure and a short table of three analysed phishing examples.", "الملصق والإجراء وجدول قصير لثلاثة أمثلة تصيّد محلَّلة."),
  },
  refs: [
    { title: "Phishing guidance: stopping the attack cycle", org: "NCSC UK", url: "https://www.ncsc.gov.uk/guidance/phishing" },
    { title: "Avoiding social engineering and phishing attacks", org: "CISA", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" },
    { title: "Anti-Phishing Working Group trends reports", org: "APWG", url: "https://apwg.org/trendsreports/" },
    { title: "Report fraud and phishing", org: "FTC", url: "https://reportfraud.ftc.gov/" },
  ],
  terms: [
    { term: l("Social engineering", "الهندسة الاجتماعية"), def: l("Manipulating people into revealing information or taking harmful actions.", "التلاعب بالأشخاص لكشف معلومات أو اتخاذ إجراءات ضارة.") },
    { term: l("Phishing", "التصيّد الاحتيالي"), def: l("Fraudulent messages imitating a trusted party to steal data or deliver malware.", "رسائل احتيالية تنتحل جهة موثوقة لسرقة البيانات أو توصيل برمجيات خبيثة.") },
    { term: l("Spear phishing", "التصيّد الموجّه"), def: l("Phishing tailored to a specific person or organisation.", "تصيّد مفصّل لشخص أو مؤسسة بعينها.") },
    { term: l("BEC", "اختراق البريد التجاري"), def: l("Business E-mail Compromise: impersonation of executives or suppliers to redirect payments.", "انتحال المدراء أو الموردين لتحويل المدفوعات.") },
    { term: l("Pretexting", "الذريعة"), def: l("Inventing a believable story to obtain information or access.", "اختلاق قصة مقنعة للحصول على معلومات أو وصول.") },
    { term: l("Vishing / Smishing", "التصيّد الصوتي / النصي"), def: l("Phishing by voice call or by text message.", "تصيّد عبر مكالمة صوتية أو رسالة نصية.") },
    { term: l("Tailgating", "التسلل المادي"), def: l("Gaining physical entry by following an authorised person.", "الدخول المادي باتباع شخص مصرّح له.") },
  ],
};
