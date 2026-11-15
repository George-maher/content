import { l, type Session } from "../types";

export const s02: Session = {
  id: 2,
  phase: 1,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "The Threat Landscape: Actors, Motives and Attack Lifecycles",
    "مشهد التهديدات: الفاعلون والدوافع ودورات حياة الهجوم",
  ),
  summary: l(
    "Who attacks, why they attack, how an intrusion unfolds across the seven-stage Cyber Kill Chain, and how defenders reduce the attack surface before damage occurs.",
    "من يهاجم، ولماذا، وكيف يتطور الاختراق عبر سلسلة القتل السيبرانية ذات المراحل السبع، وكيف يقلل المدافعون سطح الهجوم قبل حدوث الضرر.",
  ),
  overview: l(
    "This session turns the risk vocabulary from Session 1 into a working picture of real adversaries. You will compare criminal groups, nation-state actors, hacktivists, insiders and opportunistic attackers, then follow an intrusion from reconnaissance to its final objective. The goal is not to memorise a list of attacks; it is to recognise where an attack can be interrupted and which basic controls buy the most protection.",
    "تحوّل هذه الجلسة مفردات المخاطر من الجلسة الأولى إلى صورة عملية للمهاجمين الحقيقيين. ستقارن بين المجموعات الإجرامية والفاعلين التابعين للدول والنشطاء والمخترقين الداخليين والمهاجمين الانتهازيين، ثم تتبع اختراقًا من الاستطلاع إلى هدفه النهائي. والهدف ليس حفظ قائمة هجمات؛ بل التعرف على الموضع الذي يمكن عنده إيقاف الهجوم والضوابط الأساسية التي توفر أكبر حماية.",
  ),
  whyItMatters: l(
    "Defenders who do not understand adversaries waste money on the wrong controls. A small clinic and a defence contractor face different actors, different patience levels and different consequences. Knowing the likely threat helps you choose proportionate defenses, explain risk to management, and recognize the early signals of an intrusion before data is stolen or systems are locked.",
    "يضيّع المدافعون الذين لا يفهمون المهاجمين أموالهم على الضوابط الخاطئة. فالعيادة الصغيرة والمتعاقد الدفاعي يواجهان فاعلين مختلفين ومستويات صبر مختلفة وعواقب مختلفة. ومعرفة التهديد المحتمل تساعدك على اختيار دفاعات متناسبة، وشرح الخطر للإدارة، والتعرف على الإشارات المبكرة للاختراق قبل سرقة البيانات أو قفل الأنظمة.",
  ),
  prerequisites: [
    l(
      "Session 1: assets, threats, vulnerabilities, risk and controls.",
      "الجلسة 1: الأصول والتهديدات والثغرات والمخاطر والضوابط.",
    ),
    l(
      "Ability to read a simple table and write a short evidence-based explanation.",
      "القدرة على قراءة جدول بسيط وكتابة شرح قصير قائم على الأدلة.",
    ),
    l(
      "A strict ethical rule: analyse attacks only from public reports or isolated training environments you are authorized to use.",
      "قاعدة أخلاقية صارمة: حلّل الهجمات فقط من تقارير عامة أو بيئات تدريب معزولة ومصرح لك باستخدامها.",
    ),
  ],
  objectives: [
    l(
      "Differentiate threat actors by motive, capability, patience and typical target.",
      "التمييز بين الفاعلين المهددين حسب الدافع والقدرة والصبر والهدف المعتاد.",
    ),
    l(
      "Describe the seven stages of the Cyber Kill Chain in the correct order.",
      "وصف مراحل سلسلة القتل السيبراني السبع بالترتيب الصحيح.",
    ),
    l(
      "Distinguish an attack surface from an attack vector and give examples of each.",
      "التمييز بين سطح الهجوم وناقل الهجوم مع أمثلة على كل منهما.",
    ),
    l(
      "Explain how common attack families target people, identities, networks and applications.",
      "شرح كيفية استهداف عائلات الهجمات الشائعة للأشخاص والهويات والشبكات والتطبيقات.",
    ),
    l(
      "Use threat intelligence and MITRE ATT&CK responsibly to support detection.",
      "استخدام استخبارات التهديدات وإطار MITRE ATT&CK بمسؤولية لدعم الكشف.",
    ),
    l(
      "Recommend at least one defensive interruption for every Kill Chain stage.",
      "اقتراح تدخل دفاعي واحد على الأقل لكل مرحلة من سلسلة القتل.",
    ),
  ],
  agenda: [
    { label: l("Recap, objectives and threat-vocabulary check", "المراجعة والأهداف والتحقق من مفردات التهديد"), minutes: 5 },
    { label: l("Threat actors, motives and capability", "الفاعلون المهددون والدوافع والقدرة"), minutes: 20 },
    { label: l("The seven-stage Cyber Kill Chain", "سلسلة القتل السيبراني ذات المراحل السبع"), minutes: 20 },
    { label: l("Attack surface, vectors and common attack families", "سطح الهجوم والنواقل وعائلات الهجمات الشائعة"), minutes: 15 },
    { label: l("Instructor demonstration: break one intrusion at three stages", "عرض المدرب: إيقاف اختراق واحد في ثلاث مراحل"), minutes: 10 },
    { label: l("Practical exercise and threat-profile lab briefing", "التمرين العملي وإحاطة مختبر ملف التهديد"), minutes: 15 },
    { label: l("Assessment, recap and homework", "التقييم والمراجعة والواجب"), minutes: 5 },
  ],
  introduction: l(
    "A ransomware incident rarely begins with ransomware. It often begins with a stolen password from a phishing page, a remote desktop service exposed to the internet, or a vendor account that was never disabled. Weeks may pass before files are encrypted. If the defender can recognize the early stages, the attack can be stopped before the expensive final stage. This session builds that early-warning mindset by studying adversaries and the sequence they usually follow.",
    "نادرًا ما يبدأ حادث برمجية الفدية ببرمجية الفدية نفسها. فغالبًا يبدأ بكلمة مرور مسروقة من صفحة تصيّد، أو خدمة سطح مكتب بعيد مكشوفة على الإنترنت، أو حساب مورّد لم يُعطّل قط. وقد تمر أسابيع قبل تشفير الملفات. وإذا استطاع المدافع التعرف على المراحل المبكرة، أمكن إيقاف الهجوم قبل المرحلة النهائية المكلفة. تبني هذه الجلسة عقلية الإنذار المبكر عبر دراسة المهاجمين والتسلسل الذي يتبعونه عادة.",
  ),
  sections: [
    {
      h: l("1. What the threat landscape includes", "1. ماذا يشمل مشهد التهديدات"),
      p: [
        l(
          "The threat landscape is the combined picture of who may attack an organization, what they want, which methods they use and how those methods change over time. It is not a static list. New vulnerabilities, criminal business models, cloud configurations, regulations and attacker tools all shift the picture, which is why security teams review threat information continuously.",
          "مشهد التهديدات هو الصورة المجتمعة لمن قد يهاجم المؤسسة، وماذا يريد، وأي أساليب يستخدم، وكيف تتغير هذه الأساليب بمرور الوقت. وهو ليس قائمة ثابتة. فالثغرات الجديدة ونماذج الأعمال الإجرامية وإعدادات السحابة والأنظمة والقوانين وأدوات المهاجمين تغيّر الصورة، ولهذا تراجع فرق الأمن معلومات التهديد باستمرار.",
        ),
        l(
          "A useful threat picture combines external information with local context. External information includes public incident reports, government advisories, vulnerability feeds and industry warnings. Local context includes the organization's assets, exposed services, business partners, previous incidents and the data it holds. Neither half is enough alone: a global ransomware campaign matters little to an organization with no internet-facing systems, while a local misconfiguration matters enormously even if no report mentions it.",
          "تجمع صورة التهديد المفيدة بين المعلومات الخارجية والسياق المحلي. وتشمل المعلومات الخارجية تقارير الحوادث العامة والتنبيهات الحكومية وتغذيات الثغرات وتحذيرات القطاع. ويشمل السياق المحلي أصول المؤسسة وخدماتها المكشوفة وشركاءها وحوادثها السابقة وبياناتها. ولا يكفي أي نصف وحده: فحملة فدية عالمية لا تعني كثيرًا لمؤسسة بلا أنظمة متصلة بالإنترنت، بينما يعني إعداد محلي خاطئ كثيرًا حتى لو لم يذكره أي تقرير.",
        ),
        l(
          "Threat modeling is the disciplined version of this thinking. For a specific system, the team asks what it stores, who can reach it, what an attacker would gain by compromising it, which paths are available and which controls reduce the most likely paths. The output is a prioritized set of assumptions and mitigations, not a guarantee that every attack has been predicted.",
          "نمذجة التهديدات هي النسخة المنهجية من هذا التفكير. فبالنسبة لنظام محدد، يسأل الفريق عما يخزنه، ومن يستطيع الوصول إليه، وما الذي سيكسبه المهاجم باختراقه، وما المسارات المتاحة، وما الضوابط التي تقلل المسارات الأكثر احتمالًا. والناتج مجموعة مرتبة من الافتراضات والتخفيفات، لا ضمان بالتنبؤ بكل هجوم.",
        ),
      ],
      callout: {
        kind: "key",
        text: l(
          "Threat information without asset context creates fear; asset context without threat information creates false comfort. Combine both.",
          "معلومات التهديد بلا سياق الأصول تصنع الخوف؛ وسياق الأصول بلا معلومات التهديد يصنع طمأنينة زائفة. اجمع بينهما.",
        ),
      },
    },
    {
      h: l("2. Threat actors and their motives", "2. الفاعلون المهددون ودوافعهم"),
      p: [
        l(
          "A threat actor is a person or group that may cause harm. Criminals usually seek money through ransomware, fraud, data sale or extortion. Nation-state groups seek intelligence, disruption, influence or strategic advantage and can sustain campaigns for months or years. Hacktivists seek publicity or political impact. Insiders already possess legitimate access and may act maliciously, negligently or under coercion. Opportunistic attackers use ready-made tools against any system that looks vulnerable.",
          "الفاعل المهدد هو شخص أو مجموعة قد تسبب ضررًا. ويسعى المجرمون عادة إلى المال عبر الفدية أو الاحتيال أو بيع البيانات أو الابتزاز. وتسعى مجموعات الدول إلى المعلومات أو التعطيل أو التأثير أو الميزة الاستراتيجية، وتستطيع مواصلة حملات لأشهر أو سنوات. ويسعى النشطاء إلى الشهرة أو التأثير السياسي. ويملك المخترقون الداخليون وصولًا مشروعًا أصلًا وقد يتصرفون بخبث أو إهمال أو تحت إكراه. ويستخدم المهاجمون الانتهازيون أدوات جاهزة ضد أي نظام يبدو ضعيفًا.",
        ),
        l(
          "Capability matters as much as motive. A low-skilled attacker may rent an attack service, buy stolen credentials or download a scanner. A well-resourced group may develop custom malware, compromise a software supplier, study a target for weeks and hide in normal administrative traffic. Defenses that stop an opportunistic scanner may not stop a patient, targeted intrusion, so organizations handling valuable data need layered monitoring as well as basic hygiene.",
          "القدرة لا تقل أهمية عن الدافع. فقد يستأجر مهاجم قليل المهارة خدمة هجوم، أو يشتري بيانات اعتماد مسروقة، أو ينزّل ماسحًا. وقد تطوّر مجموعة غنية الموارد برمجية خبيثة مخصصة، أو تخترق مورّد برمجيات، أو تدرس هدفًا لأسابيع، أو تختبئ في حركة إدارية طبيعية. والدفاعات التي توقف ماسحًا انتهازيًا قد لا توقف اختراقًا صبورًا مستهدفًا، لذا تحتاج المؤسسات التي تحمل بيانات قيّمة إلى مراقبة متعددة الطبقات إضافة إلى النظافة الأساسية.",
        ),
        l(
          "Attribution is the attempt to identify the responsible actor. It is difficult, often uncertain and sometimes politically sensitive. Defenders should distinguish between a technical observation, a hypothesis and a formal attribution. Writing that an indicator 'looks like a known criminal toolkit' is not the same as proving a specific group carried out an attack. Overconfident attribution can damage relationships and distract from containment.",
          "نسبة الهجوم هي محاولة تحديد الفاعل المسؤول. وهي صعبة وغالبًا غير مؤكدة وأحيانًا حساسة سياسيًا. ويجب أن يميز المدافعون بين الملاحظة التقنية والفرضية والنسبة الرسمية. فكتابة أن مؤشرًا 'يشبه مجموعة أدوات إجرامية معروفة' ليست إثباتًا أن مجموعة محددة نفذت الهجوم. والنسبة المفرطة في الثقة قد تضر بالعلاقات وتشتت الانتباه عن الاحتواء.",
        ),
      ],
      table: {
        head: [l("Actor", "الفاعل"), l("Primary motive", "الدافع الأساسي"), l("Typical capability", "القدرة النموذجية"), l("Defensive implication", "الأثر الدفاعي")],
        rows: [
          [l("Cybercriminal", "مجرم سيبراني"), l("Profit", "الربح"), l("Ransomware, fraud, stolen data, rented services", "فدية، احتيال، بيانات مسروقة، خدمات مستأجرة"), l("Backups, MFA, patching, payment controls", "نسخ احتياطي، مصادقة متعددة العوامل، تحديث، ضوابط دفع")],
          [l("Nation-state / APT", "دولة / تهديد مستمر متقدم"), l("Espionage, disruption, influence", "تجسس، تعطيل، تأثير"), l("Custom tools, long campaigns, supply-chain access", "أدوات مخصصة، حملات طويلة، وصول عبر سلسلة التوريد"), l("Segmentation, monitoring, identity hardening, intelligence", "تقسيم، مراقبة، تحصين الهوية، استخبارات")],
          [l("Hacktivist", "ناشط مخترق"), l("Ideology and publicity", "الأيديولوجيا والشهرة"), l("Defacement, DDoS, leaked credentials", "تشويه، حجب خدمة، بيانات اعتماد مسربة"), l("Resilience, public communication, account monitoring", "مرونة، تواصل عام، مراقبة الحسابات")],
          [l("Insider", "مخترق داخلي"), l("Revenge, money, error or coercion", "انتقام، مال، خطأ أو إكراه"), l("Legitimate access and knowledge of internal systems", "وصول مشروع ومعرفة بالأنظمة الداخلية"), l("Least privilege, separation of duties, logging, exit process", "أقل امتياز، فصل الواجبات، تسجيل، إجراءات المغادرة")],
          [l("Opportunistic attacker", "مهاجم انتهازي"), l("Curiosity, bragging, quick profit", "فضول، تباهٍ، ربح سريع"), l("Ready-made scanners and exploits", "ماسحات واستغلالات جاهزة"), l("Asset inventory, patching, closed ports, default-password removal", "جرد الأصول، تحديث، إغلاق المنافذ، إزالة كلمات المرور الافتراضية")],
        ],
      },
    },
    {
      h: l("3. The seven-stage Cyber Kill Chain", "3. سلسلة القتل السيبراني ذات المراحل السبع"),
      p: [
        l(
          "The Cyber Kill Chain, popularized by Lockheed Martin, describes a typical intrusion as seven stages: reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives. Real attacks may combine, repeat or skip stages, but the model gives defenders a shared language for discussing where an intrusion is and where it can be broken.",
          "تصف سلسلة القتل السيبراني، التي شاعت عبر لوكهيد مارتن، الاختراق النموذجي في سبع مراحل: الاستطلاع، والتسليح، والتسليم، والاستغلال، والتثبيت، والتحكم والسيطرة، وتنفيذ الأهداف. وقد تجمع الهجمات الحقيقية مراحل أو تكررها أو تتجاوزها، لكن النموذج يمنح المدافعين لغة مشتركة لمناقشة موقع الاختراق وأين يمكن كسره.",
        ),
        l(
          "Reconnaissance is information gathering: public websites, job posts, DNS records, exposed services and social media can reveal technologies, people and relationships. Weaponization combines an exploit with a payload, often a document or installer that appears useful. Delivery transports the weapon, for example through phishing email, a malicious website, a USB device or a compromised vendor update.",
          "الاستطلاع هو جمع المعلومات: فقد تكشف المواقع العامة وإعلانات الوظائف وسجلات DNS والخدمات المكشوفة ووسائل التواصل التقنيات والأشخاص والعلاقات. ويجمع التسليح بين استغلال وحمولة، غالبًا مستند أو مثبّت يبدو مفيدًا. وينقل التسليم السلاح، مثلًا عبر بريد تصيّد أو موقع خبيث أو جهاز USB أو تحديث مورّد مخترق.",
        ),
        l(
          "Exploitation uses a vulnerability, misconfiguration or human trust to execute attacker code or gain access. Installation establishes persistence so the attacker survives reboots and password changes. Command and control provides a channel for instructions and data movement. Actions on objectives is the final purpose: stealing data, encrypting files, disrupting services, committing fraud or using the access to attack another organization.",
          "يستخدم الاستغلال ثغرة أو إعدادًا خاطئًا أو ثقة بشرية لتنفيذ شيفرة المهاجم أو الحصول على وصول. ويؤسس التثبيت استمرارية تبقى بعد إعادة التشغيل وتغيير كلمات المرور. ويوفر التحكم والسيطرة قناة للأوامر ونقل البيانات. وتنفيذ الأهداف هو الغرض النهائي: سرقة بيانات أو تشفير ملفات أو تعطيل خدمات أو احتيال أو استخدام الوصول لمهاجمة مؤسسة أخرى.",
        ),
        l(
          "The defensive value is in the break points. Early stages are cheaper to stop: user awareness and email filtering can block delivery; patching and secure configuration can stop exploitation; application control and endpoint monitoring can prevent installation; egress filtering and network monitoring can interrupt command and control; backups and access controls can limit actions on objectives. No single control covers all seven stages.",
          "تكمن القيمة الدفاعية في نقاط الكسر. فالمراحل المبكرة أرخص في الإيقاف: يمكن للتوعية وتصفية البريد أن تحجب التسليم؛ ويمكن للتحديث والإعداد الآمن أن يوقف الاستغلال؛ ويمكن لتقييد التطبيقات ومراقبة الأجهزة أن يمنع التثبيت؛ ويمكن لتصفية الخروج ومراقبة الشبكة أن يعطلا التحكم والسيطرة؛ ويمكن للنسخ الاحتياطي وضوابط الوصول أن تحدّا من تنفيذ الأهداف. ولا يغطي ضابط واحد المراحل السبع كلها.",
        ),
      ],
      table: {
        head: [l("Stage", "المرحلة"), l("Attacker activity", "نشاط المهاجم"), l("Defensive opportunity", "الفرصة الدفاعية")],
        rows: [
          [l("1. Reconnaissance", "1. الاستطلاع"), l("Collect public and technical information", "جمع المعلومات العامة والتقنية"), l("Minimize public detail; inventory exposed services; monitor scans", "تقليل التفاصيل العامة؛ جرد الخدمات المكشوفة؛ مراقبة المسح")],
          [l("2. Weaponization", "2. التسليح"), l("Build or obtain an exploit and payload", "بناء أو الحصول على استغلال وحمولة"), l("Threat intelligence; block known malicious infrastructure", "استخبارات التهديدات؛ حجب البنية الخبيثة المعروفة")],
          [l("3. Delivery", "3. التسليم"), l("Send phishing, host a lure, ship infected media", "إرسال تصيّد، استضافة طُعم، شحن وسائط مصابة"), l("Email filtering, web filtering, awareness, removable-media policy", "تصفية البريد والويب، التوعية، سياسة الوسائط القابلة للإزالة")],
          [l("4. Exploitation", "4. الاستغلال"), l("Trigger a vulnerability or deceive a user", "تفعيل ثغرة أو خداع مستخدم"), l("Patching, secure configuration, MFA, least privilege", "التحديث، الإعداد الآمن، المصادقة متعددة العوامل، أقل امتياز")],
          [l("5. Installation", "5. التثبيت"), l("Install malware, persistence or a rogue account", "تثبيت برمجية خبيثة أو استمرارية أو حساب دخيل"), l("Application allow-listing, endpoint protection, account monitoring", "قائمة تطبيقات مسموحة، حماية الأجهزة، مراقبة الحسابات")],
          [l("6. Command and control", "6. التحكم والسيطرة"), l("Maintain a remote channel", "الحفاظ على قناة بعيدة"), l("Egress filtering, DNS monitoring, network detection", "تصفية الخروج، مراقبة DNS، كشف الشبكة")],
          [l("7. Actions on objectives", "7. تنفيذ الأهداف"), l("Steal, encrypt, disrupt or commit fraud", "سرقة أو تشفير أو تعطيل أو احتيال"), l("Backups, data-loss prevention, segmentation, incident response", "نسخ احتياطي، منع تسرب البيانات، تقسيم، استجابة للحوادث")],
        ],
      },
      callout: {
        kind: "warn",
        text: l(
          "Do not treat the kill chain as seven mandatory boxes. A credential-stuffing attack may jump from delivery to objectives with very little installation. Map the model to observed evidence, not the reverse.",
          "لا تتعامل مع سلسلة القتل كسبعة صناديق إلزامية. فقد ينتقل هجوم حشو بيانات الاعتماد من التسليم إلى الأهداف مع تثبيت ضئيل جدًا. اربط النموذج بالأدلة المرصودة، لا العكس.",
        ),
      },
    },
    {
      h: l("4. Attack surface and attack vectors", "4. سطح الهجوم ونواقل الهجوم"),
      p: [
        l(
          "The attack surface is everything an attacker can try to reach or influence: internet-facing services, web applications, email inboxes, employee devices, cloud identities, remote-access tools, vendors, physical entrances and even the information employees share publicly. The attack surface grows whenever a new service, account, integration or device is added without review.",
          "سطح الهجوم هو كل ما يمكن للمهاجم محاولة الوصول إليه أو التأثير فيه: الخدمات المتصلة بالإنترنت، وتطبيقات الويب، وصناديق البريد، وأجهزة الموظفين، وهويات السحابة، وأدوات الوصول البعيد، والموردون، والمداخل المادية، وحتى المعلومات التي يشاركها الموظفون علنًا. وينمو سطح الهجوم كلما أضيفت خدمة أو حساب أو تكامل أو جهاز دون مراجعة.",
        ),
        l(
          "An attack vector is the specific path used to reach the target. Phishing email, stolen credentials, an exposed remote-desktop port, a malicious advertisement, a compromised software update and a careless cloud storage permission are different vectors. The same threat actor may try several vectors at once and keep the one that works.",
          "ناقل الهجوم هو المسار المحدد المستخدم للوصول إلى الهدف. فبريد التصيّد وبيانات الاعتماد المسروقة ومنفذ سطح المكتب البعيد المكشوف وإعلان خبيث وتحديث برمجي مخترق وإذن تخزين سحابي مهمل نواقل مختلفة. وقد يجرب الفاعل نفسه عدة نواقل معًا ويحتفظ بما ينجح.",
        ),
        l(
          "Reducing the surface is often the most economical defense. Close unused ports, remove abandoned accounts, retire unsupported software, disable unnecessary remote access, separate guest and production networks, and review public cloud storage. Each removed entry point is one less path that must be monitored and patched, and one less service that can be forgotten during an incident.",
          "غالبًا ما يكون تقليل السطح أكثر الدفاعات اقتصادية. أغلق المنافذ غير المستخدمة، واحذف الحسابات المهجورة، وتخلَّ عن البرمجيات غير المدعومة، وعطّل الوصول البعيد غير الضروري، وافصل شبكات الضيوف والإنتاج، وراجع تخزين السحابة العام. وكل نقطة دخول تُزال هي مسار أقل يجب مراقبته وتحديثه، وخدمة أقل قد تُنسى أثناء حادث.",
        ),
      ],
      bullets: [
        l("External surface: public websites, DNS, email, VPN, remote desktop and cloud APIs.", "السطح الخارجي: المواقع العامة وDNS والبريد وVPN وسطح المكتب البعيد وواجهات السحابة."),
        l("Internal surface: user accounts, servers, shares, administrative tools and network devices.", "السطح الداخلي: حسابات المستخدمين والخوادم والمشاركات والأدوات الإدارية وأجهزة الشبكة."),
        l("Human surface: trust, habits, urgency and authority relationships that attackers can exploit.", "السطح البشري: الثقة والعادات والاستعجال وعلاقات السلطة التي قد يستغلها المهاجم."),
        l("Supply-chain surface: vendors, contractors, software dependencies and update channels.", "سطح سلسلة التوريد: الموردون والمتعاقدون وتبعيات البرمجيات وقنوات التحديث."),
      ],
    },
    {
      h: l("5. Common attack families", "5. عائلات الهجمات الشائعة"),
      p: [
        l(
          "Social engineering targets people rather than devices. Phishing, vishing, smishing and pretexting use authority, urgency, fear or curiosity to make a person reveal information, approve a payment, click a link or run a file. Because the request often arrives through a legitimate service, technical filters cannot catch every attempt; verification habits and reporting culture are essential.",
          "تستهدف الهندسة الاجتماعية الأشخاص لا الأجهزة. ويستخدم التصيّد عبر البريد والهاتف والرسائل النصية والذرائع السلطة أو الاستعجال أو الخوف أو الفضول لجعل الشخص يكشف معلومة أو يوافق على دفع أو ينقر رابطًا أو يشغّل ملفًا. ولأن الطلب يصل غالبًا عبر خدمة مشروعة، لا تستطيع المرشحات التقنية التقاط كل محاولة؛ لذا تكون عادات التحقق وثقافة الإبلاغ أساسية.",
        ),
        l(
          "Malware is software designed to harm, spy, steal or persist. Ransomware encrypts data and demands payment; information stealers collect credentials and session cookies; remote-access trojans provide control; botnets recruit devices for DDoS or spam; worms spread automatically. A single incident can involve several families, such as an initial phishing loader that later installs ransomware.",
          "البرمجيات الخبيثة برمجيات مصممة للضرر أو التجسس أو السرقة أو البقاء. فبرمجيات الفدية تشفر البيانات وتطلب دفعًا؛ وسارقات المعلومات تجمع بيانات الاعتماد وملفات ارتباط الجلسات؛ وأحصنة الوصول البعيد توفر التحكم؛ وشبكات البوتات تجنّد الأجهزة لحجب الخدمة أو البريد المزعج؛ والديدان تنتشر تلقائيًا. وقد يشمل حادث واحد عدة عائلات، مثل محمّل تصيّد أولي يثبت الفدية لاحقًا.",
        ),
        l(
          "Identity attacks target passwords, tokens and authentication flows. Credential stuffing reuses leaked username-password pairs; password spraying tries a few common passwords across many accounts; phishing kits capture one-time codes; session hijacking steals a valid cookie. These attacks are attractive because they may avoid malware entirely and look like normal logins.",
          "تستهدف هجمات الهوية كلمات المرور والرموز وتدفقات المصادقة. فحشو بيانات الاعتماد يعيد استخدام أزواج اسم المستخدم وكلمة المرور المسربة؛ ورش كلمات المرور يجرب كلمات شائعة قليلة عبر حسابات كثيرة؛ وأطقم التصيّد تلتقط رموز الاستخدام لمرة واحدة؛ واختطاف الجلسات يسرق ملف ارتباط صالحًا. وهذه الهجمات جاذبة لأنها قد تتجنب البرمجيات الخبيثة كليًا وتبدو كعمليات دخول طبيعية.",
        ),
        l(
          "Network and application attacks exploit exposed protocols and software behavior. Denial-of-service floods exhaust resources; man-in-the-middle attacks intercept traffic; SQL injection and cross-site scripting abuse unsafe input handling; vulnerable APIs expose data or actions. Later sessions examine these in depth, but the threat landscape view is enough to see why segmentation, patching, input validation and monitoring work together.",
          "تستغل هجمات الشبكة والتطبيقات البروتوكولات المكشوفة وسلوك البرمجيات. فحجب الخدمة يستنزف الموارد؛ وهجمات الوسيط تعترض الحركة؛ وحقن SQL والبرمجة عبر المواقع تسيء استخدام معالجة المدخلات غير الآمنة؛ وواجهات API الضعيفة تكشف بيانات أو إجراءات. وتدرس الجلسات اللاحقة هذه الهجمات بعمق، لكن نظرة مشهد التهديدات تكفي لرؤية سبب تكامل التقسيم والتحديث والتحقق من المدخلات والمراقبة.",
        ),
      ],
      table: {
        head: [l("Family", "العائلة"), l("Typical entry", "المدخل النموذجي"), l("Primary goal", "الهدف الأساسي"), l("First defensive move", "أول خطوة دفاعية")],
        rows: [
          [l("Phishing / social engineering", "التصيّد / الهندسة الاجتماعية"), l("Email, phone, message, fake login page", "بريد، هاتف، رسالة، صفحة دخول مزيفة"), l("Credentials, approval, malware execution", "بيانات اعتماد، موافقة، تنفيذ برمجية"), l("MFA, verification procedure, reporting culture", "مصادقة متعددة العوامل، إجراء تحقق، ثقافة إبلاغ")],
          [l("Ransomware", "برمجيات الفدية"), l("Phishing, exposed RDP, vulnerable service", "تصيّد، RDP مكشوف، خدمة ضعيفة"), l("Encrypt data and extort payment", "تشفير البيانات وابتزاز الدفع"), l("Tested offline backups, patching, segmentation", "نسخ احتياطي مختبر دون اتصال، تحديث، تقسيم")],
          [l("Credential attack", "هجوم بيانات الاعتماد"), l("Leaked passwords, guessing, phishing", "كلمات مسربة، تخمين، تصيّد"), l("Account takeover", "الاستيلاء على الحساب"), l("Unique passwords, MFA, lockout monitoring", "كلمات فريدة، مصادقة متعددة العوامل، مراقبة القفل")],
          [l("DDoS", "حجب الخدمة الموزع"), l("Botnet traffic", "حركة شبكة بوتات"), l("Make a service unavailable", "جعل الخدمة غير متاحة"), l("DDoS protection, rate limits, scaling", "حماية من حجب الخدمة، حدود معدل، توسع")],
          [l("Web injection", "حقن الويب"), l("Unvalidated input", "مدخلات غير متحقق منها"), l("Read or change application data", "قراءة بيانات التطبيق أو تغييرها"), l("Input validation, parameterized queries, WAF", "تحقق من المدخلات، استعلامات معلمة، WAF")],
          [l("Supply-chain compromise", "اختراق سلسلة التوريد"), l("Vendor access or software update", "وصول مورّد أو تحديث برمجي"), l("Reach many victims through trust", "الوصول إلى ضحايا كثيرين عبر الثقة"), l("Vendor risk review, least privilege, monitoring", "مراجعة مخاطر الموردين، أقل امتياز، مراقبة")],
        ],
      },
    },
    {
      h: l("6. Vulnerability, exposure and exploitability", "6. الثغرة والانكشاف وقابلية الاستغلال"),
      p: [
        l(
          "A vulnerability is a weakness. Exposure is whether an attacker can actually reach it. Exploitability is how easily the weakness can be used in the current configuration. A critical vulnerability on an isolated test server with no network path is less urgent than a moderate vulnerability on an internet-facing payment system with a public exploit. Effective prioritization considers all three, not only the severity label.",
          "الثغرة ضعف. والانكشاف هو ما إذا كان المهاجم يستطيع الوصول إليه فعلًا. وقابلية الاستغلال هي سهولة استخدام الضعف في الإعداد الحالي. فثغرة حرجة على خادم اختبار معزول بلا مسار شبكي أقل إلحاحًا من ثغرة متوسطة على نظام دفع متصل بالإنترنت ولها استغلال عام. ويراعي ترتيب الأولويات الفعال هذه الثلاثة لا تصنيف الشدة وحده.",
        ),
        l(
          "Vulnerability management is a continuous cycle: discover assets, identify weaknesses, assess risk, remediate or mitigate, and verify. Scanners help, but they miss business-logic flaws, misconfigurations and social weaknesses. Asset owners must validate findings, because a scanner may report a service version that is patched backported, or miss a shadow system that was never inventoried.",
          "إدارة الثغرات دورة مستمرة: اكتشاف الأصول، وتحديد نقاط الضعف، وتقييم الخطر، والمعالجة أو التخفيف، والتحقق. تساعد الماسحات، لكنها تفوت عيوب منطق الأعمال والإعدادات الخاطئة ونقاط الضعف البشرية. ويجب أن يتحقق مالكو الأصول من النتائج، فقد يبلغ الماسح عن إصدار خدمة تم تحديثه بتحديث خلفي، أو يفوت نظامًا ظليًا لم يُجرد قط.",
        ),
        l(
          "Compensating controls can reduce urgency when patching is impossible: isolate the system, restrict access, add virtual patching at a web application firewall, disable the vulnerable feature or increase monitoring. These are temporary risk reductions, not permanent fixes. The organization should document the exception, the owner, the expiry date and the plan to remove it.",
          "يمكن للضوابط التعويضية تقليل الإلحاح عندما يكون التحديث مستحيلًا: عزل النظام، أو تقييد الوصول، أو إضافة تحديث افتراضي عند جدار حماية التطبيقات، أو تعطيل الميزة الضعيفة، أو زيادة المراقبة. وهذه تخفيضات مؤقتة للخطر لا إصلاحات دائمة. ويجب أن توثق المؤسسة الاستثناء ومالكه وتاريخ انتهائه وخطة إزالته.",
        ),
      ],
    },
    {
      h: l("7. Threat intelligence and MITRE ATT&CK", "7. استخبارات التهديدات وإطار MITRE ATT&CK"),
      p: [
        l(
          "Threat intelligence is information about adversaries, their infrastructure, tools, targets and techniques, collected and analyzed to support decisions. Strategic intelligence helps leaders understand risk; operational intelligence helps teams plan defenses; tactical intelligence provides indicators such as domains, hashes or IP addresses. Indicators expire quickly, so context and behavior matter more than a long blocklist.",
          "استخبارات التهديدات معلومات عن المهاجمين وبنيتهم وأدواتهم وأهدافهم وتقنياتهم، تُجمع وتحلل لدعم القرارات. فالاستخبارات الاستراتيجية تساعد القادة على فهم الخطر؛ والتشغيلية تساعد الفرق على تخطيط الدفاعات؛ والتكتيكية توفر مؤشرات مثل النطاقات أو التجزئات أو عناوين IP. وتنتهي صلاحية المؤشرات سريعًا، لذا يكون السياق والسلوك أهم من قائمة حجب طويلة.",
        ),
        l(
          "MITRE ATT&CK is a public knowledge base of adversary tactics and techniques observed in real intrusions. Tactics describe the attacker's goal, such as initial access or credential access; techniques describe how the goal is achieved. Defenders use ATT&CK to map detections, identify coverage gaps and describe incidents consistently. It complements the Kill Chain: the Kill Chain shows the broad sequence, while ATT&CK provides detailed behaviors within it.",
          "إطار MITRE ATT&CK قاعدة معرفة عامة لتكتيكات المهاجمين وتقنياتهم المرصودة في اختراقات حقيقية. وتصف التكتيكات هدف المهاجم مثل الوصول الأولي أو الوصول إلى بيانات الاعتماد؛ وتصف التقنيات كيفية تحقيق الهدف. ويستخدم المدافعون ATT&CK لربط الكشف وتحديد فجوات التغطية ووصف الحوادث باتساق. وهو يكمل سلسلة القتل: تعرض السلسلة التسلسل العام، ويوفر ATT&CK سلوكيات تفصيلية داخلها.",
        ),
        l(
          "Threat intelligence must be actionable and lawful. Do not download or test malware outside an authorized isolated lab. Do not publish unverified attribution or personal data. Verify the source, date, confidence and applicability of every feed. A report about a different industry, region or technology may still be useful, but it should not automatically change priorities.",
          "يجب أن تكون استخبارات التهديدات قابلة للتنفيذ وقانونية. لا تنزّل البرمجيات الخبيثة أو تختبرها خارج مختبر معزول ومصرح به. ولا تنشر نسبة غير مؤكدة أو بيانات شخصية. وتحقق من مصدر كل تغذية وتاريخها وثقتها وملاءمتها. وقد يكون تقرير عن قطاع أو منطقة أو تقنية مختلفة مفيدًا، لكنه لا ينبغي أن يغيّر الأولويات تلقائيًا.",
        ),
      ],
    },
    {
      h: l("8. Defending across the chain", "8. الدفاع عبر السلسلة"),
      p: [
        l(
          "A practical defense plan combines prevention, detection and recovery, and assigns each control to a stage. Awareness and email filtering reduce delivery; patching and MFA reduce exploitation; endpoint protection and application control reduce installation; network monitoring and egress filtering reduce command and control; backups and data protection reduce the impact of actions on objectives. The plan should name an owner and a test method for each control.",
          "تجمع خطة الدفاع العملية بين المنع والكشف والتعافي، وتخصص كل ضابط لمرحلة. فالتوعية وتصفية البريد تقللان التسليم؛ والتحديث والمصادقة متعددة العوامل يقللان الاستغلال؛ وحماية الأجهزة وتقييد التطبيقات يقللان التثبيت؛ ومراقبة الشبكة وتصفية الخروج يقللان التحكم والسيطرة؛ والنسخ الاحتياطي وحماية البيانات يقللان أثر تنفيذ الأهداف. ويجب أن تحدد الخطة مالكًا وطريقة اختبار لكل ضابط.",
        ),
        l(
          "Detection is not the same as prevention. Sensors such as endpoint telemetry, authentication logs, DNS logs and network flow records reveal behavior that prevention missed. Detection content should be tested with safe simulations, not by running real malware. Alerts need triage procedures, escalation paths and a way to preserve evidence without contaminating it.",
          "الكشف ليس المنع. فالمستشعرات مثل القياس عن بعد للأجهزة وسجلات المصادقة وسجلات DNS وسجلات تدفق الشبكة تكشف سلوكًا فات المنع. ويجب اختبار محتوى الكشف بمحاكاة آمنة لا بتشغيل برمجيات خبيثة حقيقية. وتحتاج التنبيهات إلى إجراءات فرز ومسارات تصعيد وطريقة لحفظ الأدلة دون تلويثها.",
        ),
        l(
          "Metrics make the plan honest. Track patching coverage, MFA adoption, backup restoration success, mean time to detect, mean time to contain and the number of exposed services. Avoid vanity metrics such as the number of alerts generated. A control that is deployed but unused or untested is not a real improvement.",
          "تجعل المقاييس الخطة صادقة. تتبع تغطية التحديث، واعتماد المصادقة متعددة العوامل، ونجاح استعادة النسخ الاحتياطي، ومتوسط زمن الكشف، ومتوسط زمن الاحتواء، وعدد الخدمات المكشوفة. وتجنب المقاييس المظهرية مثل عدد التنبيهات المولدة. فالضابط المنشور لكن غير المستخدم أو غير المختبر ليس تحسينًا حقيقيًا.",
        ),
      ],
      callout: {
        kind: "tip",
        text: l(
          "Ask for every control: which stage does it interrupt, which evidence proves it works, and who owns it when it fails?",
          "اسأل عن كل ضابط: أي مرحلة يعطل، وما الدليل على أنه يعمل، ومن يملكه عندما يفشل؟",
        ),
      },
    },
    {
      h: l("9. Legal, ethical and communication responsibilities", "9. المسؤوليات القانونية والأخلاقية والتواصلية"),
      p: [
        l(
          "Threat analysis can create fear and blame if it is not communicated carefully. Report facts, uncertainty and impact separately. Avoid naming a suspect without evidence. Protect personal data in incident notes and share information only with those who need it. A security team that exaggerates attribution or hides uncertainty loses credibility when the investigation changes direction.",
          "قد يخلق تحليل التهديدات خوفًا ولومًا إذا لم يُنقل بعناية. افصل بين الحقائق وعدم اليقين والأثر. وتجنب تسمية مشتبه به دون دليل. واحمِ البيانات الشخصية في ملاحظات الحادث وشارك المعلومات فقط مع من يحتاجها. وفريق الأمن الذي يبالغ في النسبة أو يخفي عدم اليقين يفقد المصداقية عندما يتغير اتجاه التحقيق.",
        ),
        l(
          "Only test, scan or simulate against systems you own or have explicit written authorization to assess. Public scans, credential use against real accounts and malware detonation outside a lab are prohibited. If you discover a vulnerability accidentally, stop, preserve evidence, notify the owner through a responsible channel and do not access more data than necessary.",
          "لا تختبر أو تمسح أو تحاكي إلا أنظمة تملكها أو لديك تصريح كتابي صريح بتقييمها. ويُحظر المسح العام واستخدام بيانات الاعتماد على حسابات حقيقية وتفجير البرمجيات الخبيثة خارج مختبر. وإذا اكتشفت ثغرة بالخطأ، توقف واحفظ الأدلة وأبلغ المالك عبر قناة مسؤولة ولا تصل إلى بيانات أكثر من اللازم.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "A criminal group sends an invoice-themed email. The attachment exploits an old office application, installs a loader, contacts a command-and-control domain and later deploys ransomware. Each stage offers a different defensive opportunity.",
      "ترسل مجموعة إجرامية بريدًا بطابع فاتورة. يستغل المرفق تطبيق مكتبيًا قديمًا، ويثبّت محمّلًا، ويتصل بنطاق تحكم وسيطرة، ثم ينشر برمجية فدية لاحقًا. وكل مرحلة توفر فرصة دفاعية مختلفة.",
    ),
    l(
      "A nation-state group spends months mapping a supplier's public job posts and extranet. It steals a contractor credential, moves slowly and copies design documents. The long dwell time makes anomaly detection and least privilege more valuable than a single firewall.",
      "تقضي مجموعة تابعة لدولة أشهرًا في رسم إعلانات الوظائف والشبكة الخارجية لمورّد. وتسرق بيانات اعتماد متعاقد، وتتحرك ببطء، وتنسخ وثائق تصميم. ويجعل زمن البقاء الطويل كشف الشذوذ وأقل امتياز أكثر قيمة من جدار ناري واحد.",
    ),
    l(
      "An attacker uses credentials from an old data breach against a VPN. MFA blocks the login, but the attempt reveals that the account is still active and the password should be changed. The failed attack becomes a useful control test.",
      "يستخدم مهاجم بيانات اعتماد من تسريب قديم ضد VPN. تحجب المصادقة متعددة العوامل تسجيل الدخول، لكن المحاولة تكشف أن الحساب ما زال نشطًا وأن كلمة المرور يجب تغييرها. فيصبح الهجوم الفاشل اختبارًا مفيدًا للضوابط.",
    ),
    l(
      "A researcher finds an exposed cloud storage bucket containing backups. The organization removes public access, rotates credentials, reviews logs and adds a configuration check. The attack surface is reduced before anyone exploits it.",
      "يجد باحث حاوية تخزين سحابي مكشوفة تحتوي نسخًا احتياطية. تزيل المؤسسة الوصول العام، وتدير بيانات الاعتماد، وتراجع السجلات، وتضيف فحص إعدادات. فيُقلل سطح الهجوم قبل أن يستغله أحد.",
    ),
    l(
      "A help-desk employee receives a call from someone claiming to be an executive who needs a password reset urgently. The employee follows the callback procedure and discovers the request is fraudulent.",
      "يتلقى موظف دعم مكالمة من شخص يدعي أنه مسؤول تنفيذي ويحتاج إعادة تعيين كلمة مرور بشكل عاجل. يتبع الموظف إجراء الاتصال العكسي ويكتشف أن الطلب احتيالي.",
    ),
    l(
      "A retailer uses the Kill Chain to review an incident: phishing delivery was blocked, but a user later ran a file from a personal USB drive. The review identifies removable-media policy and endpoint control as gaps, even though the first attack failed.",
      "يراجع متجر حادثًا باستخدام سلسلة القتل: حُجب تسليم التصيّد، لكن مستخدمًا شغّل لاحقًا ملفًا من ذاكرة USB شخصية. ويحدد المراجعة سياسة الوسائط القابلة للإزالة وتحكم الأجهزة كفجوات، رغم فشل الهجوم الأول.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A regional logistics company discovers that a former contractor's VPN account is still active. The contractor had legitimate access and copied route-planning files before leaving. This is an insider and access-lifecycle incident, not a sophisticated malware attack. The response reviews onboarding, offboarding, least privilege and file-access logging.",
      "تكتشف شركة لوجستيات إقليمية أن حساب VPN لمتعاقد سابق ما زال نشطًا. كان للمتعاقد وصول مشروع ونسخ ملفات تخطيط مسارات قبل مغادرته. هذا حادث مخترق داخلي ودورة حياة وصول، لا هجوم برمجيات خبيثة متقدم. وتراجع الاستجابة إجراءات الانضمام والمغادرة وأقل امتياز وتسجيل الوصول إلى الملفات.",
    ),
    l(
      "A hospital is targeted by a ransomware group that steals patient data before encrypting it. The incident combines availability and confidentiality impact, creates regulatory obligations and raises patient-safety concerns. The response must coordinate clinical staff, legal counsel, communications, forensic investigators and backup restoration.",
      "تستهدف مجموعة فدية مستشفى وتسرق بيانات المرضى قبل تشفيرها. ويجمع الحادث بين أثر التوافر والسرية، وينشئ التزامات تنظيمية ويثير مخاوف سلامة المرضى. ويجب أن تنسق الاستجابة بين الموظفين السريريين والمستشار القانوني والتواصل والمحققين الجنائيين واستعادة النسخ الاحتياطي.",
    ),
    l(
      "A software vendor's update channel is compromised. Customers install a signed update that contains attacker code. Because the update comes from a trusted source, traditional reputation checks may not help. Supply-chain monitoring, least privilege and behavioral detection become critical.",
      "تُخترق قناة تحديث مورّد برمجيات. ويثبت العملاء تحديثًا موقّعًا يحتوي شيفرة مهاجم. ولأن التحديث يأتي من مصدر موثوق، قد لا تساعد فحوص السمعة التقليدية. وتصبح مراقبة سلسلة التوريد وأقل امتياز والكشف السلوكي حاسمة.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("Seven-stage Cyber Kill Chain", "سلسلة القتل السيبراني ذات المراحل السبع"),
    caption: l(
      "Each stage is a chance to detect or stop the intrusion. Early interruption prevents persistence, data theft and ransom.",
      "كل مرحلة فرصة للكشف عن الاختراق أو إيقافه. والإيقاف المبكر يمنع الاستمرارية وسرقة البيانات والفدية.",
    ),
    nodes: [
      { label: l("1 Reconnaissance", "1 الاستطلاع"), desc: l("Collect target information", "جمع معلومات الهدف") },
      { label: l("2 Weaponization", "2 التسليح"), desc: l("Prepare exploit and payload", "إعداد الاستغلال والحمولة") },
      { label: l("3 Delivery", "3 التسليم"), desc: l("Phishing, web, USB, vendor", "تصيّد، ويب، USB، مورّد") },
      { label: l("4 Exploitation", "4 الاستغلال"), desc: l("Use a flaw or human trust", "استغلال ثغرة أو ثقة بشرية") },
      { label: l("5 Installation", "5 التثبيت"), desc: l("Persistence and tooling", "استمرارية وأدوات") },
      { label: l("6 Command & control", "6 التحكم والسيطرة"), desc: l("Remote channel", "قناة بعيدة") },
      { label: l("7 Actions on objectives", "7 تنفيذ الأهداف"), desc: l("Steal, encrypt, disrupt", "سرقة، تشفير، تعطيل") },
    ],
  },
  instructorDemo: l(
    "The instructor draws a simple email-to-ransomware intrusion on the board and marks three break points: email filtering before delivery, MFA and patching during exploitation, and tested backups at the final stage. Learners then suggest one detective control for each break point and explain what evidence it would produce. The instructor stresses that no single control is sufficient and that the goal is to make the attack expensive and visible at several stages.",
    "يرسم المدرب على السبورة اختراقًا بسيطًا من البريد إلى الفدية ويحدد ثلاث نقاط كسر: تصفية البريد قبل التسليم، والمصادقة متعددة العوامل والتحديث أثناء الاستغلال، والنسخ الاحتياطي المختبر في المرحلة النهائية. ثم يقترح المتعلمون ضابطًا كاشفًا واحدًا لكل نقطة ويشرحون الدليل الذي سينتجه. ويؤكد المدرب أن ضابطًا واحدًا لا يكفي وأن الهدف جعل الهجوم مكلفًا وظاهرًا في عدة مراحل.",
  ),
  exercises: [
    {
      title: l("Break the chain", "اكسر السلسلة"),
      instructions: l(
        "Choose one public incident summary from a trusted vendor or government report. Map it to the seven Kill Chain stages. For three stages, name one control that could have interrupted the attack and the evidence that control would have produced.",
        "اختر ملخص حادث عام من تقرير موثوق لمورّد أو جهة حكومية. اربطه بمراحل سلسلة القتل السبع. ولثلاث مراحل، سمِّ ضابطًا كان يمكن أن يوقف الهجوم والدليل الذي كان سينتجه ذلك الضابط.",
      ),
      expected: l(
        "A seven-row table with evidence-based mapping, three interruption points, and a clear distinction between what is known and what is inferred.",
        "جدول من سبعة صفوف بربط قائم على الأدلة، وثلاث نقاط إيقاف، وتمييز واضح بين المعروف والمستنتج.",
      ),
    },
    {
      title: l("Shrink the attack surface", "قلّل سطح الهجوم"),
      instructions: l(
        "For a fictional 20-person company, list ten exposed points across people, identities, networks, applications and vendors. Mark each as remove, restrict, monitor or accept, and justify every acceptance decision.",
        "لشركة خيالية من 20 شخصًا، اذكر عشرة نقاط مكشوفة عبر الأشخاص والهويات والشبكات والتطبيقات والموردين. صنّف كلًا منها كإزالة أو تقييد أو مراقبة أو قبول، وبرر كل قرار قبول.",
      ),
      expected: l(
        "A prioritized list with at least three removals and no unexplained acceptance of a high-impact exposure.",
        "قائمة مرتبة حسب الأولوية بثلاث عمليات إزالة على الأقل ودون قبول غير مبرر لانكشاف عالي الأثر.",
      ),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can distinguish five threat actor types, name the seven Kill Chain stages in order, explain the difference between attack surface and attack vector, map common attack families to likely defenses, and produce a basic threat-informed defense plan with named controls and evidence.",
    "بنهاية الجلسة، يستطيع المتعلمون التمييز بين خمسة أنواع من الفاعلين المهددين، وتسمية مراحل سلسلة القتل السبع بالترتيب، وشرح الفرق بين سطح الهجوم وناقل الهجوم، وربط عائلات الهجمات الشائعة بالدفاعات المحتملة، وإنتاج خطة دفاع أساسية مستنيرة بالتهديدات بضوابط وأدلة محددة.",
  ),
  commonMistakes: [
    l(
      "Treating every attacker as a sophisticated nation-state actor and ignoring basic hygiene that stops most opportunistic attacks.",
      "التعامل مع كل مهاجم كفاعل دولة متقدم وتجاهل النظافة الأساسية التي توقف معظم الهجمات الانتهازية.",
    ),
    l(
      "Memorising the Kill Chain without connecting each stage to a control and a piece of evidence.",
      "حفظ سلسلة القتل دون ربط كل مرحلة بضابط ودليل.",
    ),
    l(
      "Confusing an attack surface with an attack vector. The surface is the set of exposed points; the vector is the path used.",
      "الخلط بين سطح الهجوم وناقل الهجوم. فالسطح مجموعة النقاط المكشوفة؛ والناقل المسار المستخدم.",
    ),
    l(
      "Publishing confident attribution based on a single indicator or a vendor nickname.",
      "نشر نسبة واثقة بناءً على مؤشر واحد أو اسم مختصر من مورّد.",
    ),
    l(
      "Buying a detection tool without assigning triage ownership, escalation and evidence handling.",
      "شراء أداة كشف دون تحديد مالك للفرز ومسار تصعيد ومعالجة أدلة.",
    ),
  ],
  bestPractices: [
    l("Maintain an asset and service inventory so the real attack surface is known.", "احتفظ بجرد للأصول والخدمات لتُعرف مساحة الهجوم الحقيقية."),
    l("Close or restrict unnecessary exposure before adding more monitoring.", "أغلق الانكشاف غير الضروري أو قيّده قبل إضافة مزيد من المراقبة."),
    l("Map controls to Kill Chain stages and test each control's evidence.", "اربط الضوابط بمراحل سلسلة القتل واختبر دليل كل ضابط."),
    l("Use MFA, patching and least privilege to interrupt credential and exploitation paths.", "استخدم المصادقة متعددة العوامل والتحديث وأقل امتياز لتعطيل مسارات بيانات الاعتماد والاستغلال."),
    l("Keep tested offline backups and rehearse restoration under time pressure.", "احتفظ بنسخ احتياطية مختبرة دون اتصال وتدرّب على الاستعادة تحت ضغط الوقت."),
    l("Document uncertainty and attribution confidence explicitly in reports.", "وثّق عدم اليقين ودرجة الثقة في النسبة صراحة في التقارير."),
  ],
  keyTakeaways: [
    l(
      "Threat actors differ in motive, capability and patience; defenses must match the likely adversary and the value of the asset.",
      "يختلف الفاعلون المهددون في الدافع والقدرة والصبر؛ ويجب أن تناسب الدفاعات المهاجم المحتمل وقيمة الأصل.",
    ),
    l(
      "The seven Kill Chain stages are reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives.",
      "مراحل سلسلة القتل السبع هي الاستطلاع والتسليح والتسليم والاستغلال والتثبيت والتحكم والسيطرة وتنفيذ الأهداف.",
    ),
    l(
      "Every stage offers a defensive opportunity; early interruption is cheaper and limits damage.",
      "كل مرحلة توفر فرصة دفاعية؛ والإيقاف المبكر أرخص ويحد من الضرر.",
    ),
    l(
      "Reducing the attack surface removes paths before attackers can use them.",
      "تقليل سطح الهجوم يزيل المسارات قبل أن يستخدمها المهاجمون.",
    ),
    l(
      "Common attack families often combine, such as phishing delivering a loader that later installs ransomware.",
      "تتحد عائلات الهجمات الشائعة غالبًا، مثل تصيّد يوصل محمّلًا يثبت الفدية لاحقًا.",
    ),
    l(
      "Threat intelligence and ATT&CK support decisions only when they are verified, contextual and lawful.",
      "تدعم استخبارات التهديدات وATT&CK القرارات فقط عندما تكون موثقة وسياقية وقانونية.",
    ),
  ],
  lab: {
    title: l("Lab 2 — Threat profile and Kill Chain map", "المختبر 2 — ملف التهديد وخريطة سلسلة القتل"),
    scenario: l(
      "You are a junior analyst at a regional accounting firm. Six short incident summaries arrive from different clients. For each one, identify the most likely actor type, the initial vector and the earliest Kill Chain stage where the attack could have been interrupted.",
      "أنت محلل مبتدئ في شركة محاسبة إقليمية. تصل ستة ملخصات حوادث قصيرة من عملاء مختلفين. لكل واحد، حدد نوع الفاعل الأكثر احتمالًا، والناقل الأولي، وأبكر مرحلة في سلسلة القتل كان يمكن عندها إيقاف الهجوم.",
    ),
    safety: l(
      "This is a paper and browser-based analysis exercise using fictional summaries. Do not scan, contact or test any real organization. Do not search for stolen data or malware. Treat every actor label as a hypothesis, not an accusation.",
      "هذا تمرين تحليلي ورقي وفي المتصفح باستخدام ملخصات خيالية. لا تمسح أو تتصل أو تختبر أي مؤسسة حقيقية. لا تبحث عن بيانات مسروقة أو برمجيات خبيثة. وتعامل مع كل تصنيف فاعل كفرضية لا اتهام.",
    ),
    steps: [
      l("Read all six summaries and underline the observable evidence.", "اقرأ الملخصات الستة وضع خطًا تحت الأدلة القابلة للملاحظة."),
      l("Match each summary to the most likely actor type using the companion tool.", "طابق كل ملخص مع نوع الفاعل الأكثر احتمالًا باستخدام الأداة المساندة."),
      l("Record the initial attack vector for each case.", "سجّل ناقل الهجوم الأولي لكل حالة."),
      l("Map each case to at least four Kill Chain stages.", "اربط كل حالة بأربع مراحل على الأقل من سلسلة القتل."),
      l("Choose the earliest practical interruption point and one control for it.", "اختر أبكر نقطة إيقاف عملية وضابطًا واحدًا لها."),
      l("Write a short evidence-versus-inference note for one case.", "اكتب ملاحظة قصيرة عن الدليل مقابل الاستنتاج لحالة واحدة."),
    ],
    expected: l(
      "A six-row table with actor hypothesis, vector, Kill Chain mapping, earliest interruption point, proposed control and an explicit note about uncertainty.",
      "جدول من ستة صفوف بفرضية الفاعل والناقل وربط سلسلة القتل وأبكر نقطة إيقاف والضابط المقترح وملاحظة صريحة عن عدم اليقين.",
    ),
    tool: "match",
    objectives: [
      l("Classify threat actors from behavioral evidence.", "تصنيف الفاعلين المهددين من الأدلة السلوكية."),
      l("Identify initial access vectors in short incident summaries.", "تحديد نواقل الوصول الأولي في ملخصات حوادث قصيرة."),
      l("Map incidents to the seven-stage Cyber Kill Chain.", "ربط الحوادث بسلسلة القتل السيبراني ذات المراحل السبع."),
      l("Select an early interruption point with a proportionate control.", "اختيار نقطة إيقاف مبكرة بضابط متناسب."),
      l("Separate observation, inference and attribution in a written note.", "الفصل بين الملاحظة والاستنتاج والنسبة في ملاحظة مكتوبة."),
    ],
    prerequisites: [
      l("Session 1: risk, assets and controls.", "الجلسة 1: المخاطر والأصول والضوابط."),
      l("Session 2 theory: actor types, attack surface and Kill Chain.", "نظرية الجلسة 2: أنواع الفاعلين وسطح الهجوم وسلسلة القتل."),
      l("A text editor or spreadsheet for the evidence table.", "محرر نصوص أو جدول بيانات لجدول الأدلة."),
    ],
    environment: l(
      "No virtual machines or network access are required. Use the browser-based matching tool, a text editor or paper. All incident summaries are fictional.",
      "لا تُشترط أجهزة افتراضية أو اتصال بالشبكة. استخدم أداة المطابقة في المتصفح أو محرر نصوص أو ورقًا. جميع ملخصات الحوادث خيالية.",
    ),
    tools: [
      l("Companion actor-matching tool", "أداة مطابقة الفاعلين المساندة"),
      l("Text editor or spreadsheet", "محرر نصوص أو جدول بيانات"),
      l("Timer for the 20-minute analysis", "مؤقت لتحليل العشرين دقيقة"),
    ],
    authorization: l(
      "Scope: six fictional summaries and the local companion tool only. No real systems, no scanning, no malware download, no stolen data, no contact with any organization. Stop if an action would require access you do not have.",
      "النطاق: ستة ملخصات خيالية والأداة المساندة المحلية فقط. لا أنظمة حقيقية، ولا مسح، ولا تنزيل برمجيات خبيثة، ولا بيانات مسروقة، ولا تواصل مع أي مؤسسة. توقف إذا كان الإجراء يتطلب وصولًا لا تملكه.",
    ),
    detailedSteps: [
      {
        title: l("Prepare the evidence table", "جهّز جدول الأدلة"),
        explanation: l(
          "Create columns for case, observed evidence, actor hypothesis, confidence, initial vector, Kill Chain stages, earliest interruption and control.",
          "أنشئ أعمدة للحالة والدليل المرصود وفرضية الفاعل والثقة والناقل الأولي ومراحل سلسلة القتل وأبكر إيقاف والضابط.",
        ),
        expected: l("A table with one row per case and a confidence column.", "جدول بصف لكل حالة وعمود ثقة."),
      },
      {
        title: l("Read without jumping to conclusions", "اقرأ دون قفز إلى الاستنتاجات"),
        explanation: l(
          "Read all six summaries once. Underline only facts stated in the text, such as timing, target, demand, tool behavior or account used. Do not add facts from imagination.",
          "اقرأ الملخصات الستة مرة واحدة. ضع خطًا فقط تحت الحقائق المذكورة في النص، مثل التوقيت أو الهدف أو الطلب أو سلوك الأداة أو الحساب المستخدم. لا تضف حقائق من الخيال.",
        ),
        expected: l("Each row has at least two quoted or paraphrased observations.", "لكل صف ملاحظتان مقتبستان أو معاد صياغتهما على الأقل."),
      },
      {
        title: l("Assign actor hypotheses", "حدد فرضيات الفاعل"),
        explanation: l(
          "Use the companion tool to match each case to cybercriminal, nation-state, hacktivist, insider or opportunistic attacker. Record a confidence level and the evidence that supports it.",
          "استخدم الأداة المساندة لمطابقة كل حالة مع مجرم سيبراني أو دولة أو ناشط أو مخترق داخلي أو مهاجم انتهازي. سجّل مستوى الثقة والدليل الداعم.",
        ),
        expected: l("Six hypotheses, each with a confidence level and at least one supporting observation.", "ست فرضيات، لكل منها مستوى ثقة وملاحظة داعمة واحدة على الأقل."),
      },
      {
        title: l("Map the Kill Chain", "اربط سلسلة القتل"),
        explanation: l(
          "For each case, place the observed activity into at least four of the seven stages. Use 'not observed' rather than guessing when the summary provides no evidence.",
          "لكل حالة، ضع النشاط المرصود في أربع مراحل على الأقل من السبع. استخدم 'غير مرصود' بدلًا من التخمين عندما لا يوفر الملخص دليلًا.",
        ),
        expected: l("A consistent seven-stage mapping with explicit gaps.", "ربط متسق بالمراحل السبع مع فجوات صريحة."),
      },
      {
        title: l("Choose the earliest interruption", "اختر أبكر إيقاف"),
        explanation: l(
          "Identify the earliest stage where the defender had enough information and authority to act. Name one preventive or detective control and the evidence it would produce.",
          "حدد أبكر مرحلة كان لدى المدافع فيها معلومات وسلطة كافية للتصرف. سمِّ ضابطًا وقائيًا أو كاشفًا واحدًا والدليل الذي سينتجه.",
        ),
        expected: l("One realistic control per case, not a generic 'buy a firewall'.", "ضابط واقعي واحد لكل حالة، لا 'اشترِ جدارًا ناريًا' عامًا."),
      },
      {
        title: l("Write the uncertainty note", "اكتب ملاحظة عدم اليقين"),
        explanation: l(
          "For one case, write three sentences: what is directly observed, what you infer, and what additional evidence would change your hypothesis.",
          "لحالة واحدة، اكتب ثلاث جمل: ما هو مرصود مباشرة، وما تستنتجه، وما الدليل الإضافي الذي سيغيّر فرضيتك.",
        ),
        expected: l("A clear separation between observation, inference and attribution.", "فصل واضح بين الملاحظة والاستنتاج والنسبة."),
      },
    ],
    troubleshooting: [
      {
        problem: l("Every case looks like a nation-state attack.", "كل حالة تبدو هجوم دولة."),
        fix: l("Check motive, scale, patience and targeting. Most common incidents are criminal or opportunistic; reserve APT hypotheses for sustained, targeted evidence.", "تحقق من الدافع والحجم والصبر والاستهداف. معظم الحوادث الشائعة إجرامية أو انتهازية؛ واحفظ فرضية APT للأدلة المستهدفة المستمرة."),
      },
      {
        problem: l("The Kill Chain map has no gaps.", "خريطة سلسلة القتل بلا فجوات."),
        fix: l("Only mark a stage when the summary supports it. 'Not observed' is a valid and useful finding.", "لا تعلّم مرحلة إلا إذا دعمها الملخص. و'غير مرصود' نتيجة صحيحة ومفيدة."),
      },
      {
        problem: l("The proposed control is too expensive or impossible.", "الضابط المقترح مكلف جدًا أو مستحيل."),
        fix: l("Start with removing exposure, enabling MFA, patching a known service or improving reporting. Match the control to the organization's size.", "ابدأ بإزالة الانكشاف أو تفعيل المصادقة متعددة العوامل أو تحديث خدمة معروفة أو تحسين الإبلاغ. وطابق الضابط مع حجم المؤسسة."),
      },
    ],
    deliverables: [
      l("A six-row evidence and threat-profile table.", "جدول أدلة وملف تهديد من ستة صفوف."),
      l("A Kill Chain map for each case with explicit gaps.", "خريطة سلسلة قتل لكل حالة بفجوات صريحة."),
      l("One earliest interruption point and control per case.", "نقطة إيقاف مبكرة وضابط واحد لكل حالة."),
      l("A three-sentence observation, inference and attribution note.", "ملاحظة من ثلاث جمل للاحظة والاستنتاج والنسبة."),
    ],
    rubric: [
      { criterion: l("Evidence quality and avoidance of invented facts", "جودة الأدلة وتجنب الحقائق المختلقة"), weight: 20 },
      { criterion: l("Actor hypotheses and confidence reasoning", "فرضيات الفاعل وتعليل الثقة"), weight: 20 },
      { criterion: l("Kill Chain mapping accuracy and explicit gaps", "دقة ربط سلسلة القتل والفجوات الصريحة"), weight: 25 },
      { criterion: l("Earliest interruption and control feasibility", "جدوى أبكر إيقاف والضابط"), weight: 20 },
      { criterion: l("Clarity of uncertainty note and presentation", "وضوح ملاحظة عدم اليقين والعرض"), weight: 15 },
    ],
    match: {
      prompt: l("Match each fictional report with the most likely threat actor", "طابق كل تقرير خيالي مع الفاعل الأكثر احتمالًا"),
      options: [
        l("Cybercriminal", "مجرم سيبراني"),
        l("Nation-state (APT)", "دولة (APT)"),
        l("Hacktivist", "ناشط مخترق"),
        l("Insider", "مخترق داخلي"),
        l("Opportunistic attacker", "مهاجم انتهازي"),
      ],
      items: [
        { text: l("A clinic's files are encrypted and a payment is demanded within 72 hours.", "تُشفَّر ملفات عيادة ويُطلب دفع خلال 72 ساعة."), answer: 0 },
        { text: l("For 18 months a group quietly copies design documents from a supplier using custom tools.", "طوال 18 شهرًا تنسخ مجموعة بصمت وثائق تصميم من مورّد باستخدام أدوات مخصصة."), answer: 1 },
        { text: l("A company homepage is replaced with a political slogan after a controversial announcement.", "يُستبدل موقع شركة بشعار سياسي بعد إعلان مثير للجدل."), answer: 2 },
        { text: l("A dismissed sales manager downloads the customer list the night before leaving.", "مدير مبيعات مفصول يحمّل قائمة العملاء في الليلة السابقة لمغادرته."), answer: 3 },
        { text: l("A teenager runs a downloaded scanner against random websites and posts screenshots.", "مراهق يشغّل ماسحًا محمّلًا ضد مواقع عشوائية وينشر لقطات الشاشة."), answer: 4 },
        { text: l("Thousands of payment cards are sold after a small shop's web server is compromised.", "تُباع آلاف بطاقات الدفع بعد اختراق خادم ويب لمتجر صغير."), answer: 0 },
      ],
    },
  },
  majorLabId: "lab-02",
  quiz: [
    {
      q: l("Which actor is usually the most patient and best resourced?", "أي فاعل يكون عادةً الأكثر صبرًا والأفضل موارد؟"),
      options: [
        l("Script kiddie", "مبتدئ"),
        l("Hacktivist", "ناشط مخترق"),
        l("Nation-state APT", "تهديد دولة مستمر متقدم"),
        l("Opportunistic thief", "لص انتهازي"),
      ],
      answer: 2,
      why: l("Nation-state groups can sustain long campaigns and develop custom tools.", "تستطيع مجموعات الدول مواصلة حملات طويلة وتطوير أدوات مخصصة."),
    },
    {
      q: l("What is the main motive of most organized cybercriminals?", "ما الدافع الرئيسي لمعظم المجرمين السيبرانيين المنظمين؟"),
      options: [l("Financial gain", "الربح المالي"), l("Political change", "التغيير السياسي"), l("Curiosity only", "الفضول فقط"), l("Scientific research", "البحث العلمي")],
      answer: 0,
      why: l("Ransomware, fraud and data sale are primarily profit driven.", "الفدية والاحتيال وبيع البيانات مدفوعة أساسًا بالربح."),
    },
    {
      q: l("Which sequence lists the Cyber Kill Chain stages in the correct order?", "أي تسلسل يذكر مراحل سلسلة القتل بالترتيب الصحيح؟"),
      options: [
        l("Reconnaissance, weaponization, delivery, exploitation, installation, command and control, actions on objectives", "الاستطلاع، التسليح، التسليم، الاستغلال، التثبيت، التحكم والسيطرة، تنفيذ الأهداف"),
        l("Delivery, reconnaissance, exploitation, installation, weaponization, command and control, actions on objectives", "التسليم، الاستطلاع، الاستغلال، التثبيت، التسليح، التحكم والسيطرة، تنفيذ الأهداف"),
        l("Reconnaissance, delivery, command and control, exploitation, installation, weaponization, actions on objectives", "الاستطلاع، التسليم، التحكم والسيطرة، الاستغلال، التثبيت، التسليح، تنفيذ الأهداف"),
        l("Exploitation, reconnaissance, delivery, weaponization, installation, actions on objectives, command and control", "الاستغلال، الاستطلاع، التسليم، التسليح، التثبيت، تنفيذ الأهداف، التحكم والسيطرة"),
      ],
      answer: 0,
      why: l("The seven stages begin with reconnaissance and end with actions on objectives.", "تبدأ المراحل السبع بالاستطلاع وتنتهي بتنفيذ الأهداف."),
    },
    {
      q: l("What is the difference between an attack surface and an attack vector?", "ما الفرق بين سطح الهجوم وناقل الهجوم؟"),
      options: [
        l("They are the same thing", "هما الشيء نفسه"),
        l("The surface is all exposed points; the vector is the specific path used", "السطح كل النقاط المكشوفة؛ والناقل المسار المحدد المستخدم"),
        l("The surface is software; the vector is hardware", "السطح برمجيات؛ والناقل عتاد"),
        l("The surface is internal; the vector is always external", "السطح داخلي؛ والناقل خارجي دائمًا"),
      ],
      answer: 1,
      why: l("The surface is the total reachable set; the vector is the route an attacker chooses through it.", "السطح مجموعة النقاط القابلة للوصول؛ والناقل المسار الذي يختاره المهاجم عبرها."),
    },
    {
      q: l("A phishing email that installs a loader is primarily which stage of the Kill Chain?", "بريد تصيّد يثبت محمّلًا هو أساسًا أي مرحلة من سلسلة القتل؟"),
      options: [l("Delivery", "التسليم"), l("Reconnaissance", "الاستطلاع"), l("Actions on objectives", "تنفيذ الأهداف"), l("Weaponization", "التسليح")],
      answer: 0,
      why: l("The email transports the weapon to the victim. Installation happens after the user runs it.", "ينقل البريد السلاح إلى الضحية. ويحدث التثبيت بعد تشغيل المستخدم له."),
    },
    {
      q: l("Which control best interrupts command and control?", "أي ضابط يعطّل التحكم والسيطرة بشكل أفضل؟"),
      options: [
        l("Egress filtering and DNS monitoring", "تصفية الخروج ومراقبة DNS"),
        l("A stronger password policy only", "سياسة كلمات مرور أقوى فقط"),
        l("A public website banner", "لافتة على موقع عام"),
        l("Renaming administrator accounts", "إعادة تسمية حسابات المسؤول"),
      ],
      answer: 0,
      why: l("Command and control depends on outbound communication, so egress and DNS controls can expose or block it.", "يعتمد التحكم والسيطرة على اتصال صادر، لذا يمكن لضوابط الخروج وDNS كشفه أو حجبه."),
    },
    {
      q: l("Why is early interruption preferable?", "لماذا يُفضّل الإيقاف المبكر؟"),
      options: [
        l("It is cheaper and prevents persistence and data loss", "أرخص ويمنع الاستمرارية وفقدان البيانات"),
        l("Later stages cannot be detected", "المراحل اللاحقة لا يمكن كشفها"),
        l("Attackers always stop after reconnaissance", "المهاجمون يتوقفون دائمًا بعد الاستطلاع"),
        l("It removes the need for backups", "يلغي الحاجة للنسخ الاحتياطي"),
      ],
      answer: 0,
      why: l("Stopping before installation prevents the attacker from establishing a durable foothold and reaching valuable data.", "الإيقاف قبل التثبيت يمنع المهاجم من تأسيس موطئ قدم دائم والوصول إلى بيانات قيّمة."),
    },
    {
      q: l("Which statement about attribution is safest?", "أي عبارة عن نسبة الهجوم هي الأكثر أمانًا؟"),
      options: [
        l("One domain proves a specific group did it", "نطاق واحد يثبت أن مجموعة محددة فعلتها"),
        l("Attribution is often uncertain and should separate observation from inference", "النسبة غالبًا غير مؤكدة ويجب فصل الملاحظة عن الاستنتاج"),
        l("A vendor nickname is legal evidence", "الاسم المختصر من مورّد دليل قانوني"),
        l("Attribution is unnecessary for response", "النسبة غير ضرورية للاستجابة"),
      ],
      answer: 1,
      why: l("Indicators can be shared or faked. Responsible reporting states confidence and evidence separately.", "قد تكون المؤشرات مشتركة أو مزيفة. والإبلاغ المسؤول يذكر الثقة والأدلة بشكل منفصل."),
    },
    {
      q: l("What is the main purpose of MITRE ATT&CK?", "ما الغرض الرئيسي من إطار MITRE ATT&CK؟"),
      options: [
        l("To replace backups", "استبدال النسخ الاحتياطي"),
        l("To describe observed adversary tactics and techniques for defense", "وصف تكتيكات المهاجمين وتقنياتهم المرصودة للدفاع"),
        l("To guarantee attribution", "ضمان نسبة الهجوم"),
        l("To encrypt network traffic", "تشفير حركة الشبكة"),
      ],
      answer: 1,
      why: l("ATT&CK organizes real adversary behavior so defenders can map detection and find coverage gaps.", "ينظم ATT&CK سلوك المهاجمين الحقيقي ليربط المدافعون الكشف ويكتشفوا فجوات التغطية."),
    },
    {
      q: l("Which combination best reduces the impact of ransomware's final stage?", "أي مزيج يقلل أثر المرحلة النهائية لبرمجية الفدية بشكل أفضل؟"),
      options: [
        l("Tested offline backups and segmentation", "نسخ احتياطية مختبرة دون اتصال وتقسيم"),
        l("A longer password only", "كلمة مرور أطول فقط"),
        l("Hiding the server name", "إخفاء اسم الخادم"),
        l("Disabling all logs", "تعطيل كل السجلات"),
      ],
      answer: 0,
      why: l("Backups allow restoration and segmentation limits how far encryption and lateral movement can spread.", "تتيح النسخ الاحتياطي الاستعادة ويحد التقسيم من انتشار التشفير والحركة الجانبية."),
    },
    {
      q: l("Which is an example of a supply-chain attack vector?", "أي مما يلي مثال على ناقل هجوم سلسلة التوريد؟"),
      options: [
        l("A compromised software update from a trusted vendor", "تحديث برمجي مخترق من مورّد موثوق"),
        l("A user choosing a weak password", "مستخدم يختار كلمة مرور ضعيفة"),
        l("A failed hard disk", "قرص صلب معطل"),
        l("A firewall rule blocking a port", "قاعدة جدار ناري تحجب منفذًا"),
      ],
      answer: 0,
      why: l("The attacker reaches many customers through trust in a vendor's update channel.", "يصل المهاجم إلى عملاء كثيرين عبر الثقة في قناة تحديث مورّد."),
    },
    {
      q: l("Which metric is most meaningful for a backup control?", "أي مقياس هو الأكثر معنى لضابط النسخ الاحتياطي؟"),
      options: [
        l("The number of backup files created", "عدد ملفات النسخ الاحتياطي المنشأة"),
        l("The success rate of tested restorations", "معدل نجاح عمليات الاستعادة المختبرة"),
        l("The size of the backup server", "حجم خادم النسخ الاحتياطي"),
        l("The number of backup administrators", "عدد مسؤولي النسخ الاحتياطي"),
      ],
      answer: 1,
      why: l("A backup is only useful if it can be restored. Tested restoration success is the evidence that matters.", "النسخة الاحتياطية مفيدة فقط إذا أمكن استعادتها. ومعدل نجاح الاستعادة المختبرة هو الدليل المهم."),
    },
  ],
  trueFalse: [
    {
      q: l("The Cyber Kill Chain has seven stages.", "لسلسلة القتل السيبراني سبع مراحل."),
      answer: true,
      why: l("The seven stages run from reconnaissance to actions on objectives.", "تمتد المراحل السبع من الاستطلاع إلى تنفيذ الأهداف."),
    },
    {
      q: l("A vulnerability is always high risk if its severity score is high.", "الثغرة دائمًا عالية الخطر إذا كانت درجة شدتها عالية."),
      answer: false,
      why: l("Risk also depends on exposure, exploitability and business impact, not severity alone.", "يعتمد الخطر أيضًا على الانكشاف وقابلية الاستغلال وأثر العمل، لا على الشدة وحدها."),
    },
    {
      q: l("Most cybercriminal activity is driven primarily by financial gain.", "معظم النشاط الإجرامي السيبراني مدفوع أساسًا بالربح المالي."),
      answer: true,
      why: l("Ransomware, fraud, card theft and data sale are profit-oriented.", "الفدية والاحتيال وسرقة البطاقات وبيع البيانات موجهة للربح."),
    },
    {
      q: l("Attribution can be stated with complete certainty from a single indicator.", "يمكن الجزم بنسبة الهجوم بشكل كامل من مؤشر واحد."),
      answer: false,
      why: l("Indicators can be shared, reused or faked. Attribution requires multiple evidence sources and confidence language.", "قد تكون المؤشرات مشتركة أو معاد استخدامها أو مزيفة. وتتطلب النسبة مصادر أدلة متعددة ولغة ثقة."),
    },
    {
      q: l("Closing unnecessary services reduces the attack surface.", "إغلاق الخدمات غير الضرورية يقلل سطح الهجوم."),
      answer: true,
      why: l("Every removed service is an entry point that no longer needs monitoring or patching.", "كل خدمة مزالة نقطة دخول لم تعد تحتاج إلى مراقبة أو تحديث."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each activity into the correct Kill Chain stage.", "صنّف كل نشاط في مرحلة سلسلة القتل الصحيحة."),
      categories: [
        l("Reconnaissance", "الاستطلاع"),
        l("Delivery", "التسليم"),
        l("Installation", "التثبيت"),
        l("Actions on objectives", "تنفيذ الأهداف"),
      ],
      items: [
        { text: l("Enumerating public DNS records", "حصر سجلات DNS العامة"), answer: 0 },
        { text: l("Sending a phishing email with an attachment", "إرسال بريد تصيّد بمرفق"), answer: 1 },
        { text: l("Creating a scheduled task for persistence", "إنشاء مهمة مجدولة للاستمرارية"), answer: 2 },
        { text: l("Encrypting a file server", "تشفير خادم ملفات"), answer: 3 },
      ],
      why: l("The activities follow the attack sequence from information gathering to impact.", "تتبع الأنشطة تسلسل الهجوم من جمع المعلومات إلى الأثر."),
    },
    {
      prompt: l("Classify each actor as primarily criminal, state-backed, hacktivist or insider.", "صنّف كل فاعل كإجرامي أو مدعوم من دولة أو ناشط أو داخلي أساسًا."),
      categories: [l("Criminal", "إجرامي"), l("State-backed", "مدعوم من دولة"), l("Hacktivist", "ناشط"), l("Insider", "داخلي")],
      items: [
        { text: l("A group demanding ransom from hospitals", "مجموعة تطلب فدية من مستشفيات"), answer: 0 },
        { text: l("A long-term espionage campaign against a ministry", "حملة تجسس طويلة ضد وزارة"), answer: 1 },
        { text: l("A group defacing sites after a political decision", "مجموعة تشوه مواقع بعد قرار سياسي"), answer: 2 },
        { text: l("An employee copying client files before resigning", "موظف ينسخ ملفات عملاء قبل الاستقالة"), answer: 3 },
      ],
      why: l("Motive and access pattern are the strongest clues, though attribution remains a hypothesis.", "الدافع ونمط الوصول أقوى الأدلة، رغم بقاء النسبة فرضية."),
    },
    {
      prompt: l("Classify each exposure as people, identity, network or application.", "صنّف كل انكشاف كبشري أو هوية أو شبكة أو تطبيق."),
      categories: [l("People", "بشري"), l("Identity", "هوية"), l("Network", "شبكة"), l("Application", "تطبيق")],
      items: [
        { text: l("An employee who approves payments without callback", "موظف يوافق على مدفوعات دون اتصال تحقق"), answer: 0 },
        { text: l("A dormant administrator account", "حساب مسؤول خامل"), answer: 1 },
        { text: l("An exposed remote-desktop port", "منفذ سطح مكتب بعيد مكشوف"), answer: 2 },
        { text: l("A login form vulnerable to injection", "نموذج دخول معرض للحقن"), answer: 3 },
      ],
      why: l("Exposures exist across human behavior, credentials, network paths and software.", "توجد الانكشافات عبر السلوك البشري وبيانات الاعتماد ومسارات الشبكة والبرمجيات."),
    },
    {
      prompt: l("Classify each defensive action by its primary purpose.", "صنّف كل إجراء دفاعي حسب غرضه الأساسي."),
      categories: [l("Reduce surface", "تقليل السطح"), l("Prevent exploitation", "منع الاستغلال"), l("Detect activity", "كشف النشاط"), l("Recover", "التعافي")],
      items: [
        { text: l("Disable an unused VPN service", "تعطيل خدمة VPN غير مستخدمة"), answer: 0 },
        { text: l("Patch an internet-facing server", "تحديث خادم متصل بالإنترنت"), answer: 1 },
        { text: l("Review DNS logs for unusual domains", "مراجعة سجلات DNS للنطاقات غير المعتادة"), answer: 2 },
        { text: l("Restore clean data from a backup", "استعادة بيانات نظيفة من نسخة احتياطية"), answer: 3 },
      ],
      why: l("Surface reduction, prevention, detection and recovery are distinct but complementary.", "تقليل السطح والمنع والكشف والتعافي متميزة لكنها متكاملة."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A hospital employee receives an email that appears to be a patient invoice. The attachment installs ransomware. The appointment server becomes unavailable, and attackers claim they copied patient data.",
        "يتلقى موظف مستشفى بريدًا يبدو أنه فاتورة مريض. يثبت المرفق برمجية فدية. يصبح خادم المواعيد غير متاح، ويدعي المهاجمون أنهم نسخوا بيانات المرضى.",
      ),
      question: l("Which option best describes the threat, vector and impact?", "أي خيار يصف التهديد والناقل والأثر بشكل أفضل؟"),
      options: [
        l("Threat: missing patch; vector: hospital; impact: only integrity", "التهديد: تحديث مفقود؛ الناقل: المستشفى؛ الأثر: السلامة فقط"),
        l("Threat: criminal group; vector: phishing attachment; impact: availability and confidentiality", "التهديد: مجموعة إجرامية؛ الناقل: مرفق تصيّد؛ الأثر: التوافر والسرية"),
        l("Threat: backup; vector: patient record; impact: only privacy", "التهديد: نسخة احتياطية؛ الناقل: سجل مريض؛ الأثر: الخصوصية فقط"),
        l("Threat: appointment server; vector: email; impact: only availability", "التهديد: خادم المواعيد؛ الناقل: البريد؛ الأثر: التوافر فقط"),
      ],
      answer: 1,
      why: l("The criminal group is the threat, the phishing attachment is the vector and the incident affects access to systems and exposure of data.", "المجموعة الإجرامية هي التهديد، ومرفق التصيّد هو الناقل، ويؤثر الحادث في الوصول إلى الأنظمة وكشف البيانات."),
    },
    {
      scenario: l(
        "A retailer is hit by a large traffic flood during a promotion. The website becomes unavailable, but the database remains intact and no data is leaked.",
        "يتعرض متجر إلكتروني لسيل زيارات كبير أثناء عرض. يصبح الموقع غير متاح، لكن قاعدة البيانات سليمة ولا تُكشف بيانات.",
      ),
      question: l("Which control is most directly relevant to this incident?", "أي ضابط هو الأكثر ارتباطًا بهذا الحادث؟"),
      options: [
        l("DDoS mitigation and capacity scaling", "التخفيف من حجب الخدمة وتوسيع السعة"),
        l("Disk encryption", "تشفير القرص"),
        l("Password manager", "مدير كلمات المرور"),
        l("Source-code review", "مراجعة الشيفرة المصدرية"),
      ],
      answer: 0,
      why: l("The primary impact is availability from traffic volume. DDoS mitigation, rate limiting, caching and scaling address it directly.", "الأثر الأساسي هو التوافر بسبب حجم الزيارات. وتعالجه الحماية من حجب الخدمة وتحديد المعدل والتخزين المؤقت والتوسع مباشرة."),
    },
    {
      scenario: l(
        "A payroll administrator changes an employee's salary and bank account without approval. The change is made from a legitimate account and is discovered during an audit months later.",
        "يغيّر مسؤول رواتب راتب موظف وحسابه البنكي دون موافقة. ويُجرى التغيير من حساب مشروع ويُكتشف أثناء تدقيق بعد أشهر.",
      ),
      question: l("Which control would best detect this change earlier?", "أي ضابط سيكشف هذا التغيير مبكرًا بشكل أفضل؟"),
      options: [
        l("Antivirus on the administrator's laptop", "مكافحة فيروسات على حاسوب المسؤول"),
        l("Audit logs, approval workflow and reconciliation", "سجلات التدقيق ومسار الموافقة والمطابقة"),
        l("A stronger firewall rule", "قاعدة جدار ناري أقوى"),
        l("An uninterruptible power supply", "مزود طاقة غير منقطع"),
      ],
      answer: 1,
      why: l("The issue is authorized-looking misuse, so integrity and accountability controls are key.", "المشكلة إساءة استخدام تبدو مصرحًا بها، لذا تكون ضوابط السلامة والمساءلة أساسية."),
    },
  ],
  practicalChecks: [
    {
      task: l(
        "A server is exposed to the internet with an outdated VPN service and an administrator account that has not been used for six months. Which two actions should come first, and why?",
        "خادم مكشوف على الإنترنت بخدمة VPN قديمة وحساب مسؤول لم يُستخدم ستة أشهر. أي إجراءين يجب أن يأتي أولًا، ولماذا؟",
      ),
      expected: l(
        "Disable the dormant account and remove or restrict the exposed VPN service first. Both reduce the attack surface immediately. Patching and monitoring follow, but closing an unnecessary path is faster and cheaper.",
        "عطّل الحساب الخامل وأزل خدمة VPN المكشوفة أو قيّدها أولًا. فكلاهما يقلل سطح الهجوم فورًا. ويأتي التحديث والمراقبة بعد ذلك، لكن إغلاق مسار غير ضروري أسرع وأرخص.",
      ),
      hint: l("Ask which exposures can be removed rather than merely monitored.", "اسأل أي انكشافات يمكن إزالتها لا مجرد مراقبتها."),
    },
    {
      task: l(
        "Map a phishing-to-ransomware attack to the seven Kill Chain stages and name one detective control for delivery, installation and command and control.",
        "اربط هجومًا من التصيّد إلى الفدية بمراحل سلسلة القتل السبع وسمِّ ضابطًا كاشفًا واحدًا للتسليم والتثبيت والتحكم والسيطرة.",
      ),
      expected: l(
        "Delivery: email gateway or user report. Installation: endpoint telemetry or file-integrity monitoring. Command and control: DNS or network-flow monitoring. Each produces evidence such as a message header, process tree or outbound connection record.",
        "التسليم: بوابة بريد أو إبلاغ مستخدم. التثبيت: قياس عن بعد للأجهزة أو مراقبة سلامة الملفات. التحكم والسيطرة: مراقبة DNS أو تدفقات الشبكة. وينتج كل منها دليلًا مثل ترويسة رسالة أو شجرة عمليات أو سجل اتصال صادر.",
      ),
    },
  ],
  homework: {
    title: l("Threat-informed defense brief for a small organization", "موجز دفاع مستنير بالتهديدات لمؤسسة صغيرة"),
    tasks: [
      l("Choose a fictional organization and describe its three most valuable assets.", "اختر مؤسسة خيالية وصف أهم ثلاثة أصول لديها."),
      l("Identify two likely threat actors and justify each hypothesis with motive and capability.", "حدد فاعلين مهددين محتملين وبرر كل فرضية بالدافع والقدرة."),
      l("Map one realistic attack to all seven Kill Chain stages, marking stages with no evidence as 'not observed'.", "اربط هجومًا واقعيًا بمراحل سلسلة القتل السبع كلها، وعلّم المراحل بلا دليل بـ'غير مرصودة'."),
      l("List the ten most exposed points and classify each as remove, restrict, monitor or accept.", "اذكر عشر نقاط هي الأكثر انكشافًا وصنّف كلًا منها كإزالة أو تقييد أو مراقبة أو قبول."),
      l("Propose one preventive and one detective control for three different Kill Chain stages.", "اقترح ضابطًا وقائيًا وآخر كاشفًا لثلاث مراحل مختلفة من سلسلة القتل."),
      l("Write a five-sentence executive summary that separates facts, assumptions and recommendations.", "اكتب ملخصًا تنفيذيًا من خمس جمل يفصل الحقائق والافتراضات والتوصيات."),
    ],
    deliverable: l(
      "A two-page brief: asset summary, actor hypotheses, seven-stage attack map, ten-item exposure table, six controls and a five-sentence executive summary.",
      "موجز من صفحتين: ملخص الأصول، وفرضيات الفاعلين، وخريطة هجوم من سبع مراحل، وجدول عشرة انكشافات، وستة ضوابط، وملخص تنفيذي من خمس جمل.",
    ),
    criteria: [
      l("Actor hypotheses are evidence-based and include uncertainty.", "فرضيات الفاعل قائمة على الأدلة وتشمل عدم اليقين."),
      l("The Kill Chain mapping is complete and marks evidence gaps.", "ربط سلسلة القتل مكتمل ويحدد فجوات الأدلة."),
      l("Exposures are prioritized by impact and feasibility.", "الانكشافات مرتبة حسب الأثر والجدوى."),
      l("Controls are specific, owned and testable.", "الضوابط محددة ولها مالك وقابلة للاختبار."),
      l("The executive summary is concise and avoids unsupported attribution.", "الملخص التنفيذي موجز ويتجنب النسبة غير المدعومة."),
    ],
    challenge: l(
      "Add a one-page table that maps each proposed control to a MITRE ATT&CK tactic and explains what evidence would prove the control works.",
      "أضف جدولًا من صفحة واحدة يربط كل ضابط مقترح بتكتيك من MITRE ATT&CK ويشرح الدليل الذي سيثبت عمل الضابط.",
    ),
  },
  refs: [
    {
      title: "Cyber Kill Chain",
      org: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html",
      desc: l("The original seven-stage intrusion model and its defensive rationale.", "نموذج الاختراق الأصلي ذو المراحل السبع وتعليله الدفاعي."),
    },
    {
      title: "MITRE ATT&CK",
      org: "MITRE",
      url: "https://attack.mitre.org/",
      desc: l("A public knowledge base of adversary tactics and techniques for detection mapping.", "قاعدة معرفة عامة لتكتيكات المهاجمين وتقنياتهم لربط الكشف."),
    },
    {
      title: "Data Breach Investigations Report",
      org: "Verizon",
      url: "https://www.verizon.com/business/resources/reports/dbir/",
      desc: l("Annual evidence about breach patterns, actors and initial vectors.", "أدلة سنوية عن أنماط الاختراق والفاعلين والنواقل الأولية."),
    },
    {
      title: "ENISA Threat Landscape",
      org: "ENISA",
      url: "https://www.enisa.europa.eu/topics/cyber-threats/threats-and-trends",
      desc: l("European threat trends, actor reports and sector context.", "اتجاهات التهديدات الأوروبية وتقارير الفاعلين وسياق القطاعات."),
    },
    {
      title: "CISA Known Exploited Vulnerabilities Catalog",
      org: "CISA",
      url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
      desc: l("A verified list of vulnerabilities exploited in the wild, useful for prioritization.", "قائمة موثقة بالثغرات المستغلة فعليًا، مفيدة لترتيب الأولويات."),
    },
    {
      title: "NIST Cybersecurity Framework 2.0",
      org: "NIST",
      url: "https://www.nist.gov/cyberframework",
      desc: l("A framework for governing, identifying, protecting, detecting, responding and recovering.", "إطار للحوكمة والتحديد والحماية والكشف والاستجابة والتعافي."),
    },
  ],
  terms: [
    { term: l("Threat actor", "الفاعل المهدد"), def: l("A person or group that may cause harm to an organization.", "شخص أو مجموعة قد تسبب ضررًا لمؤسسة."), example: l("A ransomware group is a threat actor.", "مجموعة فدية فاعل مهدد.") },
    { term: l("Advanced persistent threat (APT)", "التهديد المستمر المتقدم"), def: l("A well-resourced, patient and targeted intrusion campaign, often state-backed.", "حملة اختراق مستهدفة وصبورة وغنية الموارد، غالبًا مدعومة من دولة."), example: l("A multi-year espionage campaign against a ministry.", "حملة تجسس لسنوات ضد وزارة.") },
    { term: l("Cyber Kill Chain", "سلسلة القتل السيبراني"), def: l("A seven-stage model of an intrusion from reconnaissance to actions on objectives.", "نموذج من سبع مراحل للاختراق من الاستطلاع إلى تنفيذ الأهداف."), example: l("Phishing is a delivery-stage activity.", "التصيّد نشاط في مرحلة التسليم.") },
    { term: l("Reconnaissance", "الاستطلاع"), def: l("Collecting information about a target before attacking.", "جمع معلومات عن الهدف قبل الهجوم."), example: l("Reading public job posts to identify technologies.", "قراءة إعلانات الوظائف العامة لتحديد التقنيات.") },
    { term: l("Weaponization", "التسليح"), def: l("Preparing an exploit and payload for use.", "إعداد استغلال وحمولة للاستخدام."), example: l("Embedding a malicious macro in a document.", "تضمين ماكرو خبيث في مستند.") },
    { term: l("Delivery", "التسليم"), def: l("Transmitting the weapon to the target.", "نقل السلاح إلى الهدف."), example: l("Sending a phishing email with an attachment.", "إرسال بريد تصيّد بمرفق.") },
    { term: l("Exploitation", "الاستغلال"), def: l("Using a weakness or human trust to execute attacker code or gain access.", "استخدام ضعف أو ثقة بشرية لتنفيذ شيفرة المهاجم أو الحصول على وصول."), example: l("Opening a document that triggers a software flaw.", "فتح مستند يفعّل ثغرة برمجية.") },
    { term: l("Installation", "التثبيت"), def: l("Establishing persistence and attacker tools on a system.", "تأسيس استمرارية وأدوات المهاجم على نظام."), example: l("Creating a scheduled task that survives reboot.", "إنشاء مهمة مجدولة تبقى بعد إعادة التشغيل.") },
    { term: l("Command and control (C2)", "التحكم والسيطرة"), def: l("A channel used by an attacker to send instructions and receive data.", "قناة يستخدمها المهاجم لإرسال الأوامر وتلقي البيانات."), example: l("Malware contacting a remote domain periodically.", "برمجية خبيثة تتصل بنطاق بعيد دوريًا.") },
    { term: l("Actions on objectives", "تنفيذ الأهداف"), def: l("The attacker's final goal, such as theft, encryption or disruption.", "هدف المهاجم النهائي مثل السرقة أو التشفير أو التعطيل."), example: l("Encrypting a file server for ransom.", "تشفير خادم ملفات لفدية.") },
    { term: l("Attack surface", "سطح الهجوم"), def: l("All points an attacker can try to reach or influence.", "كل النقاط التي يمكن للمهاجم محاولة الوصول إليها أو التأثير فيها."), example: l("Public websites, VPNs, email and employee devices.", "المواقع العامة وVPN والبريد وأجهزة الموظفين.") },
    { term: l("Attack vector", "ناقل الهجوم"), def: l("The specific path used to deliver or carry out an attack.", "المسار المحدد المستخدم لتسليم الهجوم أو تنفيذه."), example: l("A phishing attachment or exposed RDP port.", "مرفق تصيّد أو منفذ RDP مكشوف.") },
    { term: l("Threat intelligence", "استخبارات التهديدات"), def: l("Information about adversaries, tools, targets and techniques used to support decisions.", "معلومات عن المهاجمين والأدوات والأهداف والتقنيات لدعم القرارات."), example: l("A verified advisory about an active campaign.", "تنبيه موثق عن حملة نشطة.") },
    { term: l("Indicator of compromise (IOC)", "مؤشر اختراق"), def: l("A technical artifact suggesting an intrusion, such as a domain or file hash.", "أثر تقني يشير إلى اختراق مثل نطاق أو تجزئة ملف."), example: l("A known malicious domain in DNS logs.", "نطاق خبيث معروف في سجلات DNS.") },
    { term: l("Attribution", "نسبة الهجوم"), def: l("The attempt to identify the actor responsible for an attack.", "محاولة تحديد الفاعل المسؤول عن هجوم."), example: l("Linking evidence to a known group with stated confidence.", "ربط الأدلة بمجموعة معروفة بثقة معلنة.") },
    { term: l("Ransomware", "برمجيات الفدية"), def: l("Malware that encrypts or steals data and demands payment.", "برمجية خبيثة تشفر البيانات أو تسرقها وتطلب دفعًا."), example: l("A hospital's records are encrypted with a payment demand.", "تُشفَّر سجلات مستشفى مع طلب دفع.") },
    { term: l("Phishing", "التصيّد الاحتيالي"), def: l("A deceptive message that tricks a person into revealing information or running code.", "رسالة خادعة تدفع شخصًا لكشف معلومات أو تشغيل شيفرة."), example: l("A fake invoice attachment.", "مرفق فاتورة مزيف.") },
    { term: l("Credential stuffing", "حشو بيانات الاعتماد"), def: l("Trying leaked username-password pairs across many services.", "تجربة أزواج اسم مستخدم وكلمة مرور مسربة عبر خدمات كثيرة."), example: l("Reusing a breached password on a VPN.", "إعادة استخدام كلمة مرور مسربة على VPN.") },
    { term: l("Supply-chain attack", "هجوم سلسلة التوريد"), def: l("Compromising a vendor or update channel to reach its customers.", "اختراق مورّد أو قناة تحديث للوصول إلى عملائه."), example: l("A malicious update delivered by trusted software.", "تحديث خبيث يقدمه برنامج موثوق.") },
    { term: l("Insider threat", "التهديد الداخلي"), def: l("Risk from a person with legitimate access, whether malicious or accidental.", "خطر من شخص لديه وصول مشروع، خبيثًا كان أو غير متعمد."), example: l("An employee copying client files before leaving.", "موظف ينسخ ملفات عملاء قبل مغادرته.") },
    { term: l("Exposure", "الانكشاف"), def: l("Whether an attacker can actually reach a weakness or asset.", "ما إذا كان المهاجم يستطيع الوصول فعلًا إلى ضعف أو أصل."), example: l("A vulnerable service reachable from the internet.", "خدمة ضعيفة يمكن الوصول إليها من الإنترنت.") },
    { term: l("Exploitability", "قابلية الاستغلال"), def: l("How easily a weakness can be used in its current configuration.", "سهولة استخدام ضعف في إعداده الحالي."), example: l("A public exploit with no authentication required.", "استغلال عام لا يتطلب مصادقة.") },
    { term: l("Vulnerability management", "إدارة الثغرات"), def: l("A continuous cycle of discovery, assessment, remediation and verification.", "دورة مستمرة من الاكتشاف والتقييم والمعالجة والتحقق."), example: l("Scanning, validating and patching an exposed server.", "فحص خادم مكشوف والتحقق منه وتحديثه.") },
    { term: l("Defense in depth", "الدفاع المتعمق"), def: l("Using independent layers so one failure does not expose everything.", "استخدام طبقات مستقلة بحيث لا يكشف إخفاق واحد كل شيء."), example: l("Filtering, MFA, patching, monitoring and backups.", "تصفية ومصادقة وتحديث ومراقبة ونسخ احتياطي.") },
  ],
};
