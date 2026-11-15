import { l, type Session } from "../types";

export const s04: Session = {
  id: 4,
  phase: 2,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Operating System Foundations: Kernel, Processes and Services",
    "أساسيات أنظمة التشغيل: النواة والعمليات والخدمات",
  ),
  summary: l(
    "How an operating system mediates access to hardware, why kernel mode and user mode matter, how processes, services and drivers are structured, and how to inspect a system safely without changing it.",
    "كيف يتوسط نظام التشغيل في الوصول إلى العتاد، ولماذا يهم فضاء النواة وفضاء المستخدم، وكيف تُبنى العمليات والخدمات وبرامج التشغيل، وكيف تفحص نظامًا بأمان دون تغييره.",
  ),
  overview: l(
    "Every security control eventually depends on the operating system. File permissions, network listeners, logging, encryption and malware containment all rely on the boundary between ordinary programs and the privileged kernel. This session builds a correct mental model of that boundary before later sessions teach permission rules and hardening checklists. You will examine kernel and user mode, processes and threads, services and drivers, identity context, the boot chain and system logs, then practise read-only inspection on a system you own.",
    "يعتمد كل ضابط أمني في النهاية على نظام التشغيل. فحماية الملفات والمستمعات الشبكية والتسجيل والتشفير واحتواء البرمجيات الخبيثة تعتمد جميعًا على الحد بين البرامج العادية والنواة ذات الامتياز. تبني هذه الجلسة نموذجًا ذهنيًا صحيحًا لهذا الحد قبل أن تعلّم الجلسات اللاحقة قواعد الصلاحيات وقوائم التحصين. ستفحص وضع النواة ووضع المستخدم، والعمليات والخيوط، والخدمات وبرامج التشغيل، وسياق الهوية، وسلسلة الإقلاع وسجلات النظام، ثم تتدرّب على فحص للقراءة فقط على نظام تملكه.",
  ),
  whyItMatters: l(
    "Many incidents are described as 'the server was compromised' without explaining what that means. Did the attacker gain a normal user process, a service account, an administrator token or the kernel itself? The answer determines how much damage is possible and how the system must be rebuilt. Understanding operating-system structure also explains why least privilege, patching and logging work, and why a single missed configuration can silently remove all three.",
    "تُوصف حوادث كثيرة بأن «الخادم قد اخْتُرق» دون توضيح معنى ذلك. فهل حصل المهاجم على عملية مستخدم عادية، أو حساب خدمة، أو رمز مسؤول، أو النواة نفسها؟ تحدد الإجابة حجم الضرر الممكن وطريقة إعادة بناء النظام. ويفسر فهم بنية نظام التشغيل أيضًا سبب نجاح أقل الامتياز والتحديث والتسجيل، وسبب قدرة إعداد واحد فائت على إزالة الثلاثة بهدوء.",
  ),
  prerequisites: [
    l(
      "Session 1: assets, threats, vulnerabilities, risk and controls.",
      "الجلسة 1: الأصول والتهديدات والثغرات والمخاطر والضوابط.",
    ),
    l(
      "Session 2: threat actors, attack vectors and the Cyber Kill Chain.",
      "الجلسة 2: الفاعلون المهددون ونواقل الهجوم وسلسلة القتل السيبراني.",
    ),
    l(
      "Access to a computer you own or administer, with permission to run read-only inspection commands.",
      "الوصول إلى حاسوب تملكه أو تديره، مع إذن بتشغيل أوامر فحص للقراءة فقط.",
    ),
  ],
  objectives: [
    l(
      "Explain how the operating system mediates access to hardware, files, processes and networks.",
      "شرح كيف يتوسط نظام التشغيل في الوصول إلى العتاد والملفات والعمليات والشبكات.",
    ),
    l(
      "Distinguish kernel mode from user mode and describe why the boundary is a security control.",
      "التمييز بين وضع النواة ووضع المستخدم ووصف سبب كون هذا الحد ضابطًا أمنيًا.",
    ),
    l(
      "Describe processes, threads, services, daemons and drivers using concrete observable properties.",
      "وصف العمليات والخيوط والخدمات والبرامج الخدمية وبرامج التشغيل باستخدام خصائص ملموسة قابلة للملاحظة.",
    ),
    l(
      "Read an identity context, including user, group, token and privilege information, on Linux and Windows.",
      "قراءة سياق الهوية، بما فيه المستخدم والمجموعة والرمز والامتيازات، في لينكس وويندوز.",
    ),
    l(
      "Trace the boot chain from firmware to the init system and identify where trust is established.",
      "تتبع سلسلة الإقلاع من البرمجية الثابتة إلى نظام التهيئة وتحديد موضع تأسيس الثقة.",
    ),
    l(
      "Locate the main system logs and explain why accurate time and central collection matter.",
      "تحديد السجلات النظامية الرئيسية وشرح أهمية الوقت الدقيق والجمع المركزي.",
    ),
    l(
      "Perform a safe, read-only baseline of a system you own and report anomalies without changing it.",
      "إجراء خط أساس آمن للقراءة فقط لنظام تملكه والإبلاغ عن الشذوذ دون تغييره.",
    ),
  ],
  agenda: [
    { label: l("Recap, objectives and the operating-system security model", "المراجعة والأهداف ونموذج أمن نظام التشغيل"), minutes: 5 },
    { label: l("Kernel mode, user mode and system calls", "وضع النواة ووضع المستخدم واستدعاءات النظام"), minutes: 14 },
    { label: l("Processes, threads and the process tree", "العمليات والخيوط وشجرة العمليات"), minutes: 13 },
    { label: l("Services, daemons, drivers and service accounts", "الخدمات والبرامج الخدمية وبرامج التشغيل وحسابات الخدمة"), minutes: 14 },
    { label: l("Identity context, privileges and elevation", "سياق الهوية والامتيازات ورفع الصلاحية"), minutes: 12 },
    { label: l("Boot chain, logging and time", "سلسلة الإقلاع والتسجيل والوقت"), minutes: 12 },
    { label: l("Instructor demonstration and safe inspection lab", "عرض المدرب ومختبر الفحص الآمن"), minutes: 12 },
    { label: l("Assessment, recap and homework briefing", "التقييم والمراجعة وإحاطة الواجب"), minutes: 8 },
  ],
  introduction: l(
    "When you open a file, start a browser or connect to a website, your program does not touch the hardware directly. It asks the operating system, which checks who you are, what you are allowed to do and whether the request is well formed. That single design decision is the foundation of every permission model, every endpoint security product and every forensic investigation. If you do not understand who is allowed to ask, you cannot interpret what a log entry, a process list or a permission error actually means.",
    "عندما تفتح ملفًا أو تبدأ متصفحًا أو تتصل بموقع، لا يلمس برنامجك العتاد مباشرة. بل يطلب من نظام التشغيل، الذي يفحص من أنت، وما المسموح لك به، وهل الطلب سليم. وهذا القرار التصميمي الواحد هو أساس كل نموذج صلاحيات وكل منتج أمني للأجهزة وكل تحقيق جنائي رقمي. وإذا لم تفهم من يُسمح له بالطلب، فلن تستطيع تفسير معنى مدخل سجل أو قائمة عمليات أو خطأ صلاحية.",
  ),
  sections: [
    {
      h: l("1. What an operating system does for security", "1. ما الذي يقدمه نظام التشغيل للأمن"),
      p: [
        l(
          "An operating system is the layer between applications and hardware. It schedules processor time, allocates memory, stores files, drives network interfaces and enforces access rules. Its security value comes from four functions: isolation, so one process cannot freely read another's memory; mediation, so every sensitive request passes through a checking point; abstraction, so programs use files and sockets instead of raw devices; and accounting, so actions can be attributed to an identity and a time.",
          "نظام التشغيل هو الطبقة بين التطبيقات والعتاد. يجدول وقت المعالج، ويخصص الذاكرة، ويخزن الملفات، ويشغّل واجهات الشبكة، وينفذ قواعد الوصول. وتأتي قيمته الأمنية من أربع وظائف: العزل، فلا تستطيع عملية قراءة ذاكرة عملية أخرى بحرية؛ والوساطة، فيمر كل طلب حساس عبر نقطة فحص؛ والتجريد، فتستخدم البرامج الملفات والمقابس بدل الأجهزة الخام؛ والمحاسبة، فيمكن نسب الإجراءات إلى هوية ووقت.",
        ),
        l(
          "These functions are not optional features bolted onto the side. They are the reason a standard user account is safer than an administrator account, the reason a compromised web server should not run as the system superuser, and the reason a log entry with a process identifier can be tied to a specific executable. When one of the four functions is weakened, every control above it becomes less trustworthy.",
          "هذه الوظائف ليست ميزات اختيارية مضافة إلى الجانب. فهي سبب كون حساب المستخدم العادي أكثر أمانًا من حساب المسؤول، وسبب عدم تشغيل خادم ويب مخترق بصلاحيات المستخدم الأعلى للنظام، وسبب إمكان ربط مدخل سجل يحمل معرّف عملية ببرنامج تنفيذي محدد. وعندما تضعف إحدى الوظائف الأربع، يصبح كل ضابط فوقها أقل موثوقية.",
        ),
        l(
          "A useful way to study the topic is to follow one request. A user double-clicks a document, the file manager asks the kernel to open the file, the kernel checks the user's identity and the file's permissions, the storage driver reads the blocks, and the application receives a handle. Each step has an owner, a privilege level and an evidence trail. Security failures usually appear where one of those steps was skipped, misconfigured or trusted too broadly.",
          "من المفيد دراسة الموضوع بتتبع طلب واحد. ينقر المستخدم نقرًا مزدوجًا على مستند، فيطلب مدير الملفات من النواة فتح الملف، وتفحص النواة هوية المستخدم وصلاحيات الملف، ويقرأ برنامج تشغيل التخزين الكتل، ويستلم التطبيق مقبضًا. ولكل خطوة مالك ومستوى امتياز وأثر دليلي. وتظهر إخفاقات الأمن عادةً حيث أُلغيت إحدى هذه الخطوات أو أُسيء إعدادها أو وُثقت بها ثقة واسعة.",
        ),
      ],
      callout: {
        kind: "key",
        text: l(
          "The kernel is not a security product; it is the place where the operating system's security decisions are enforced.",
          "النواة ليست منتجًا أمنيًا؛ بل هي الموضع الذي تُنفَّذ فيه قرارات الأمن في نظام التشغيل.",
        ),
      },
    },
    {
      h: l("2. Kernel mode, user mode and system calls", "2. وضع النواة ووضع المستخدم واستدعاءات النظام"),
      p: [
        l(
          "Modern processors provide at least two privilege levels. Kernel mode can execute privileged instructions, access all memory and program hardware. User mode is restricted: a program cannot directly read another process's memory, change page tables or disable interrupts. To do anything sensitive, a user-mode program makes a system call, which transfers control to the kernel through a controlled entry point. The kernel validates the request, performs it on the program's behalf and returns a result.",
          "توفر المعالجات الحديثة مستويين للامتياز على الأقل. يستطيع وضع النواة تنفيذ تعليمات مميزة والوصول إلى كل الذاكرة وبرمجة العتاد. أما وضع المستخدم فمقيد: لا يستطيع البرنامج قراءة ذاكرة عملية أخرى مباشرة، ولا تغيير جداول الصفحات، ولا تعطيل المقاطعات. وللقيام بأي أمر حساس، يجري برنامج المستخدم استدعاء نظام ينقل التحكم إلى النواة عبر نقطة دخول مضبوطة. وتتحقق النواة من الطلب وتنفذه نيابة عن البرنامج وتعيد النتيجة.",
        ),
        l(
          "This boundary explains a great deal of security advice. A browser exploit that stays in user mode may steal that browser's data but should not be able to rewrite kernel memory. A malicious driver, by contrast, already runs with kernel privilege and can hide files, tamper with security tools or crash the machine. That is why driver installation is restricted, why driver signatures and blocklists matter, and why a vulnerable signed driver is a serious supply-chain risk.",
          "يفسر هذا الحد قدرًا كبيرًا من النصائح الأمنية. فاستغلال متصفح يبقى في وضع المستخدم قد يسرق بيانات ذلك المتصفح لكنه لا ينبغي أن يستطيع إعادة كتابة ذاكرة النواة. أما برنامج تشغيل خبيث فيعمل أصلًا بامتياز النواة ويستطيع إخفاء ملفات أو العبث بأدوات الأمن أو إسقاط الجهاز. ولهذا يقيَّد تثبيت برامج التشغيل، وتهم تواقيعها وقوائم حظرها، ويعد برنامج تشغيل موقّع لكنه ضعيف خطرًا جديرًا بالاهتمام في سلسلة التوريد.",
        ),
        l(
          "System calls are also an evidence source. Endpoint detection tools hook or monitor them to observe file writes, process creation and network connections. Attackers may try to evade this monitoring by using direct system calls, living off legitimate tools or loading unsigned code into signed processes. Defenders respond with kernel-level telemetry, memory integrity features and application control rather than relying on file names alone.",
          "استدعاءات النظام مصدر أدلة أيضًا. تعترض أدوات كشف الأجهزة هذه الاستدعاءات أو تراقبها لملاحظة كتابة الملفات وإنشاء العمليات والاتصالات الشبكية. وقد يحاول المهاجمون التهرب من هذه المراقبة باستخدام استدعاءات مباشرة، أو الاستفادة من أدوات مشروعة، أو تحميل شيفرة غير موقعة داخل عمليات موقعة. ويرد المدافعون بقياس عن بعد على مستوى النواة وميزات سلامة الذاكرة وتقييد التطبيقات بدل الاعتماد على أسماء الملفات وحدها.",
        ),
      ],
      table: {
        head: [l("Concept", "المفهوم"), l("Kernel mode", "وضع النواة"), l("User mode", "وضع المستخدم")],
        rows: [
          [l("Memory access", "الوصول إلى الذاكرة"), l("All physical and virtual memory", "كل الذاكرة الفعلية والظاهرية"), l("Only its own mapped address space", "مساحة عناوينه المعينة فقط")],
          [l("Privileged instructions", "التعليمات المميزة"), l("Allowed", "مسموحة"), l("Blocked by the processor", "محجوبة بواسطة المعالج")],
          [l("Hardware access", "الوصول إلى العتاد"), l("Direct through drivers", "مباشر عبر برامج التشغيل"), l("Only through system calls", "عبر استدعاءات النظام فقط")],
          [l("Typical code", "الشيفرة النموذجية"), l("Kernel, drivers, hypervisor", "النواة وبرامج التشغيل والمراقب الافتراضي"), l("Browsers, office tools, servers", "المتصفحات وأدوات المكتب والخوادم")],
          [l("Failure impact", "أثر الفشل"), l("System-wide crash or full compromise", "انهيار شامل أو اختراق كامل"), l("Usually limited to one process", "عادةً محدد بعملية واحدة")],
        ],
      },
      callout: {
        kind: "warn",
        text: l(
          "Kernel-level malware defeats tools that run inside the same kernel. Integrity monitoring, Secure Boot and rebuilding from trusted media are stronger responses than cleaning an infected kernel in place.",
          "البرمجيات الخبيثة على مستوى النواة تهزم الأدوات التي تعمل داخل النواة نفسها. ومراقبة السلامة والإقلاع الآمن وإعادة البناء من وسائط موثوقة استجابات أقوى من تنظيف نواة مصابة في مكانها.",
        ),
      },
    },
    {
      h: l("3. Processes, threads and the process tree", "3. العمليات والخيوط وشجرة العمليات"),
      p: [
        l(
          "A process is a running instance of a program. It owns an address space, a security context, open handles, environment variables and at least one thread of execution. A thread is the unit the scheduler runs; threads inside one process share memory and handles. The process identifier, often called the PID, is temporary and can be reused, so a PID alone is not a stable identity. The executable path, start time, parent process and user context together provide a much stronger picture.",
          "العملية هي نسخة جارية من برنامج. تملك مساحة عناوين وسياقًا أمنيًا ومقابض مفتوحة ومتغيرات بيئة وخيط تنفيذ واحدًا على الأقل. والخيط هو الوحدة التي يجدولها نظام التشغيل؛ وتتشارك الخيوط داخل العملية نفسها الذاكرة والمقابض. ومعرّف العملية، ويُسمى غالبًا PID، مؤقت وقابل لإعادة الاستخدام، لذا لا يعد PID وحده هوية مستقرة. أما مسار الملف التنفيذي ووقت البدء والعملية الأب وسياق المستخدم فتعطي صورة أقوى بكثير.",
        ),
        l(
          "Processes form a tree. On Linux, the init system or a service manager becomes the ancestor of most long-running processes. On Windows, services are hosted by service host processes and user applications descend from the shell. A word processor that suddenly starts a command shell is suspicious not because shells are bad, but because the parent-child relationship does not match normal behaviour. This is why defenders record process trees rather than isolated process names.",
          "تشكل العمليات شجرة. في لينكس يصبح نظام التهيئة أو مدير الخدمات سلف معظم العمليات طويلة التشغيل. وفي ويندوز تستضيف عمليات مضيف الخدمة الخدمات، وتنحدر تطبيقات المستخدم من صدفة النظام. فمعالج نصوص يبدأ فجأة صدفة أوامر مريب لا لأن الصدفات سيئة، بل لأن علاقة الأب بالابن لا تطابق السلوك المعتاد. ولهذا يسجل المدافعون أشجار العمليات لا أسماء العمليات المنفصلة.",
        ),
        l(
          "Processes also carry a security context. On Linux that includes a real and effective user identifier, group identifiers and supplementary groups. On Windows it includes a security token with a user security identifier, group memberships, integrity level and privileges. When a process creates a child, the child usually inherits that context. Privilege escalation is therefore often the story of obtaining a more powerful context, not merely running a different program.",
          "تحمل العمليات أيضًا سياقًا أمنيًا. في لينكس يشمل معرّف مستخدم حقيقيًا وفعليًا، ومعرّفات مجموعات، ومجموعات إضافية. وفي ويندوز يشمل رمز أمان يحوي معرّف أمان المستخدم وعضويات المجموعات ومستوى السلامة والامتيازات. وعندما تنشئ عملية عملية فرعية، ترث الأخيرة ذلك السياق عادةً. ولهذا تكون زيادة الامتيازات غالبًا قصة الحصول على سياق أقوى، لا مجرد تشغيل برنامج مختلف.",
        ),
      ],
      bullets: [
        l("Record the executable path, not only the image name.", "سجّل مسار الملف التنفيذي لا اسم الصورة فقط."),
        l("Record the parent process and the user context.", "سجّل العملية الأب وسياق المستخدم."),
        l("Compare start time with login time and patch time.", "قارن وقت البدء بوقت تسجيل الدخول ووقت التحديث."),
        l("Check command-line arguments for encoded or downloaded content.", "افحص وسائط سطر الأوامر بحثًا عن محتوى مشفر أو منزّل."),
        l("Look for unusual children of office, browser or server processes.", "ابحث عن أبناء غير معتادين لعمليات المكتب أو المتصفح أو الخادم."),
      ],
      callout: {
        kind: "tip",
        text: l(
          "A process name can be forged; a process tree, a file path and a signature are harder to fake together.",
          "يمكن تزوير اسم العملية؛ لكن تزوير شجرة العمليات ومسار الملف والتوقيع معًا أصعب.",
        ),
      },
    },
    {
      h: l("4. Services, daemons, drivers and service accounts", "4. الخدمات والبرامج الخدمية وبرامج التشغيل وحسابات الخدمة"),
      p: [
        l(
          "A service, often called a daemon on Linux, is a long-running program that usually starts without an interactive login. Web servers, database engines, remote-access tools, backup agents and update services are all services. Because they must keep working when no user is signed in, they need an account and a start-up configuration. That combination is a frequent security problem: a service may run with far more privilege than its function requires, or it may load configuration from a directory that ordinary users can write to.",
          "الخدمة، وتُسمى غالبًا برنامجًا خدميًا في لينكس، برنامج طويل التشغيل يبدأ عادةً دون تسجيل دخول تفاعلي. وخوادم الويب ومحركات قواعد البيانات وأدوات الوصول البعيد ووكلاء النسخ الاحتياطي وخدمات التحديث كلها خدمات. ولأنها يجب أن تستمر في العمل دون مستخدم مسجل، تحتاج إلى حساب وإعداد بدء. وهذا المزيج مشكلة أمنية متكررة: فقد تعمل الخدمة بامتياز أكبر بكثير من وظيفتها، أو تحمّل إعداداتها من مجلد يستطيع المستخدمون العاديون الكتابة فيه.",
        ),
        l(
          "On Linux, systemd manages units that describe services, sockets, timers and targets. A unit file states which executable runs, which user it runs as, what it depends on and how it should restart. On Windows, the Service Control Manager starts services according to their start type and logon account; many run as LocalSystem, LocalService or NetworkService, while others use a dedicated service account. In both systems, the interesting questions are the same: which binary, which identity, which start trigger and which writable paths?",
          "في لينكس، يدير systemd وحدات تصف الخدمات والمقابس والمؤقتات والأهداف. ويحدد ملف الوحدة الملف التنفيذي والمستخدم الذي يعمل به والاعتماديات وطريقة إعادة التشغيل. وفي ويندوز، يبدأ مدير التحكم بالخدمات الخدمات وفق نوع بدئها وحساب دخولها؛ وكثير منها يعمل بحساب النظام المحلي أو الخدمة المحلية أو خدمة الشبكة، بينما تستخدم أخرى حساب خدمة مخصصًا. وفي النظامين، الأسئلة المهمة واحدة: أي ملف تنفيذي، وأي هوية، وأي محفز بدء، وأي مسارات قابلة للكتابة؟",
        ),
        l(
          "Drivers are a special category because they execute in kernel mode. A driver bug can crash the system; a malicious driver can subvert it. Windows uses signature enforcement and a vulnerable-driver blocklist, while Linux depends on kernel module signing, secure boot and distribution controls. Reducing driver attack surface means removing unused devices, blocking unsigned or known-vulnerable drivers, keeping firmware updated and monitoring for new kernel modules or services that appear without a change record.",
          "برامج التشغيل فئة خاصة لأنها تُنفَّذ في وضع النواة. فخطأ في برنامج تشغيل قد يسقط النظام؛ وبرنامج تشغيل خبيث قد يقوّضه. ويستخدم ويندوز فرض التوقيع وقائمة حظر لبرامج التشغيل الضعيفة، بينما يعتمد لينكس على توقيع وحدات النواة والإقلاع الآمن وضوابط التوزيع. ويعني تقليل سطح هجوم برامج التشغيل إزالة الأجهزة غير المستخدمة، وحظر البرامج غير الموقعة أو المعروفة بالضعف، وإبقاء البرمجية الثابتة محدثة، ومراقبة ظهور وحدات نواة أو خدمات جديدة دون سجل تغيير.",
        ),
      ],
      table: {
        head: [l("Property", "الخاصية"), l("Linux", "لينكس"), l("Windows", "ويندوز")],
        rows: [
          [l("Service manager", "مدير الخدمات"), l("systemd or another init system", "systemd أو نظام تهيئة آخر"), l("Service Control Manager", "مدير التحكم بالخدمات")],
          [l("Inspect status", "فحص الحالة"), l("systemctl status <unit>", "systemctl status <unit>"), l("Get-Service or sc query", "Get-Service أو sc query")],
          [l("Configuration", "الإعدادات"), l("Unit files under /etc/systemd/system", "ملفات وحدات في /etc/systemd/system"), l("Registry and service configuration", "السجل وإعدادات الخدمة")],
          [l("Default privileged identity", "الهوية المميزة الافتراضية"), l("root, unless User= is set", "root، ما لم يُضبط User="), l("LocalSystem or a configured account", "النظام المحلي أو حساب مضبوط")],
          [l("Binary location", "موضع الملف التنفيذي"), l("ExecStart= path in the unit", "مسار ExecStart في الوحدة"), l("ImagePath registry value", "قيمة ImagePath في السجل")],
        ],
      },
      callout: {
        kind: "warn",
        text: l(
          "A service binary or configuration file that a standard user can modify is effectively a privilege-escalation path. Check ownership and write permissions on both.",
          "الملف التنفيذي للخدمة أو ملف إعداداتها إذا استطاع مستخدم عادي تعديله فهو مسار فعلي لرفع الامتيازات. افحص الملكية وصلاحيات الكتابة على كليهما.",
        ),
      },
    },
    {
      h: l("5. Identity context, privileges and elevation", "5. سياق الهوية والامتيازات ورفع الصلاحية"),
      p: [
        l(
          "Authentication proves who you are; authorization decides what you may do. The operating system represents the result as an identity context. Linux uses numeric user and group identifiers, while Windows uses security identifiers and an access token. Two processes may run under the same human user but with different contexts: one elevated, one not, one with a restricted token, or one with a different integrity level. Security decisions follow the context, not the person's name.",
          "المصادقة تثبت من أنت؛ والتصريح يقرر ما يجوز لك فعله. ويمثل نظام التشغيل النتيجة كسياق هوية. يستخدم لينكس معرّفات رقمية للمستخدمين والمجموعات، ويستخدم ويندوز معرّفات أمان ورمز وصول. وقد تعمل عمليتان تحت المستخدم البشري نفسه بسياقين مختلفين: إحداهما مرفوعة والأخرى لا، أو واحدة برمز مقيد، أو بمستوى سلامة مختلف. وتتبع القرارات الأمنية السياق لا اسم الشخص.",
        ),
        l(
          "Elevation should be deliberate and temporary. On Linux, sudo runs one command with another user's rights after checking a policy; on Windows, User Account Control asks for consent or credentials before granting an administrator token. Neither mechanism is a substitute for least privilege. If every user is a local administrator and every support task requires domain administrator rights, the approval prompt becomes a reflex rather than a control.",
          "يجب أن يكون رفع الصلاحية مدروسًا ومؤقتًا. في لينكس يشغّل sudo أمرًا واحدًا بصلاحيات مستخدم آخر بعد فحص سياسة؛ وفي ويندوز يطلب التحكم بحساب المستخدم الموافقة أو بيانات الاعتماد قبل منح رمز مسؤول. ولا يعوض أي من الآليتين عن أقل امتياز. فإذا كان كل مستخدم مسؤولًا محليًا وكل مهمة دعم تتطلب صلاحيات مسؤول النطاق، تحولت نافذة الموافقة إلى رد فعل تلقائي لا ضابط.",
        ),
        l(
          "Privileged accounts need separate handling: dedicated administrative accounts, separate workstations, just-in-time access, strong phishing-resistant authentication and full logging. Service accounts need the same discipline, with unique identities, documented owners and rotation of secrets. Shared local administrator passwords are especially dangerous because one compromised host can unlock every other host that uses the same password.",
          "تحتاج الحسابات المميزة معالجة منفصلة: حسابات إدارية مخصصة، وأجهزة عمل منفصلة، ووصول عند الحاجة، ومصادقة قوية مقاومة للتصيّد، وتسجيل كامل. وتحتاج حسابات الخدمة الانضباط نفسه، بهويات فريدة ومالكين موثقين وتدوير للأسرار. وتعد كلمات مرور المسؤول المحلي المشتركة خطرة بشكل خاص لأن اختراق جهاز واحد قد يفتح كل جهاز آخر يستخدم الكلمة نفسها.",
        ),
      ],
      bullets: [
        l("Use a standard account for email, browsing and documents.", "استخدم حسابًا عاديًا للبريد والتصفح والمستندات."),
        l("Use separate administrative accounts and dedicated admin workstations.", "استخدم حسابات إدارية منفصلة وأجهزة عمل مخصصة للإدارة."),
        l("Prefer just-in-time elevation with an expiry and a reason.", "فضّل رفع الصلاحية عند الحاجة مع انتهاء صلاحية وسبب."),
        l("Give service accounts only the rights their function needs.", "امنح حسابات الخدمة الصلاحيات التي تحتاجها وظيفتها فقط."),
        l("Log every elevation and review unusual times or targets.", "سجّل كل رفع صلاحية وراجع الأوقات أو الأهداف غير المعتادة."),
      ],
    },
    {
      h: l("6. The boot chain and the root of trust", "6. سلسلة الإقلاع وجذر الثقة"),
      p: [
        l(
          "Security does not begin when the login screen appears. It begins with firmware. The boot chain runs from platform firmware to the bootloader, then the kernel, then the init system and finally user services. Each stage loads the next, so a compromise at an early stage can hide from everything that follows. Secure Boot checks signatures on boot components; a TPM can record measurements of what was loaded; disk encryption protects data at rest but does not prove that the running system is clean.",
          "لا يبدأ الأمن عند ظهور شاشة الدخول. بل يبدأ من البرمجية الثابتة. تمتد سلسلة الإقلاع من برمجية المنصة إلى محمّل الإقلاع، ثم النواة، ثم نظام التهيئة، وأخيرًا خدمات المستخدم. وكل مرحلة تحمّل التالية، لذا يمكن لاختراق في مرحلة مبكرة أن يختفي عن كل ما يليها. ويتحقق الإقلاع الآمن من تواقيع مكونات الإقلاع؛ ويمكن لوحدة منصة موثوقة تسجيل قياسات ما حُمّل؛ ويحمي تشفير القرص البيانات المخزنة لكنه لا يثبت أن النظام العامل نظيف.",
        ),
        l(
          "This is why incident responders may rebuild rather than clean a deeply compromised host. If an attacker modified the bootloader, a kernel module or firmware, removing a user-mode file may leave the persistence intact. It is also why firmware updates, Secure Boot enforcement and TPM-backed integrity reporting belong in a baseline. These controls are not exotic; they are the difference between trusting a machine because it booted and trusting it because its boot was verified.",
          "ولهذا قد يعيد المستجيبون للحوادث بناء جهاز مخترق بعمق بدل تنظيفه. فإذا عدّل مهاجم محمّل الإقلاع أو وحدة نواة أو البرمجية الثابتة، فقد تبقى الاستمرارية بعد حذف ملف في وضع المستخدم. ولهذا أيضًا تنتمي تحديثات البرمجية الثابتة وفرض الإقلاع الآمن وتقارير السلامة المدعومة بوحدة المنصة الموثوقة إلى خط الأساس. وهذه الضوابط ليست غريبة؛ بل هي الفرق بين الثقة بالجهاز لأنه أقلع والثقة به لأن إقلاعه تم التحقق منه.",
        ),
        l(
          "The chain also has operational links. Bootloader passwords or restricted boot menus prevent trivial single-user-mode changes. Full-disk encryption with pre-boot authentication blocks offline access to the disk. Centralized boot logging and endpoint attestation reveal a device that suddenly reports a different configuration. Each link is modest on its own, but together they make persistence at the lowest layer much harder to achieve and much easier to detect.",
          "وللسلسلة حلقات تشغيلية أيضًا. فكلمات مرور محمّل الإقلاع أو قوائم الإقلاع المقيدة تمنع تغييرات وضع المستخدم الواحد التافهة. ويحجب تشفير القرص الكامل مع مصادقة ما قبل الإقلاع الوصول غير المتصل إلى القرص. ويكشف تسجيل الإقلاع المركزي وإثبات حالة الجهاز جهازًا يبلّغ فجأة عن إعداد مختلف. وكل حلقة متواضعة وحدها، لكنها معًا تجعل الاستمرارية في أدنى طبقة أصعب بكثير وأسهل كشفًا.",
        ),
      ],
      table: {
        head: [l("Stage", "المرحلة"), l("What it loads", "ما تحمله"), l("Security question", "السؤال الأمني")],
        rows: [
          [l("Firmware", "البرمجية الثابتة"), l("Hardware initialization and bootloader", "تهيئة العتاد ومحمّل الإقلاع"), l("Is it updated, signed and administratively protected?", "هل هي محدثة وموقعة ومحمية إداريًا؟")],
          [l("Bootloader", "محمّل الإقلاع"), l("Kernel and initial boot environment", "النواة وبيئة الإقلاع الأولية"), l("Are boot entries and kernel arguments controlled?", "هل مدخلات الإقلاع ووسائط النواة مضبوطة؟")],
          [l("Kernel", "النواة"), l("Drivers and the init system", "برامج التشغيل ونظام التهيئة"), l("Are modules signed and integrity checks enabled?", "هل الوحدات موقعة وفحوص السلامة مفعلة؟")],
          [l("Init system", "نظام التهيئة"), l("Services, sockets and timers", "الخدمات والمقابس والمؤقتات"), l("Which units are enabled and who can modify them?", "أي الوحدات مفعلة ومن يستطيع تعديلها؟")],
          [l("User session", "جلسة المستخدم"), l("Applications and background agents", "التطبيقات والوكلاء الخلفيون"), l("What starts automatically and under which identity?", "ما يبدأ تلقائيًا وتحت أي هوية؟")],
        ],
      },
      callout: {
        kind: "key",
        text: l(
          "Secure Boot verifies the boot path, not the behaviour of every application after login. Both layers are required.",
          "يتحقق الإقلاع الآمن من مسار الإقلاع لا من سلوك كل تطبيق بعد الدخول. والطبقتان مطلوبتان معًا.",
        ),
      },
    },
    {
      h: l("7. Logs, telemetry and the importance of time", "7. السجلات والقياس عن بعد وأهمية الوقت"),
      p: [
        l(
          "The operating system records evidence in several places. Linux distributions typically keep authentication events in /var/log/auth.log or /var/log/secure, service and kernel messages in the systemd journal, and command auditing in the audit subsystem when configured. Windows keeps security events, system events and application events in separate logs, with security auditing disabled or minimal by default on many systems unless policy enables it. The exact locations vary, so a defender must know the platform rather than memorise one path.",
          "يسجل نظام التشغيل الأدلة في عدة مواضع. فتحتفظ توزيعات لينكس عادةً بأحداث المصادقة في /var/log/auth.log أو /var/log/secure، وبرسائل الخدمات والنواة في سجل systemd، وتدقيق الأوامر في نظام التدقيق عند إعداده. ويحتفظ ويندوز بأحداث الأمان وأحداث النظام وأحداث التطبيقات في سجلات منفصلة، مع تعطيل تدقيق الأمان أو تقليله افتراضيًا في أنظمة كثيرة ما لم تفرض السياسة تفعيله. وتختلف المواضع الدقيقة، لذا يجب أن يعرف المدافع المنصة لا أن يحفظ مسارًا واحدًا.",
        ),
        l(
          "Time is the connective tissue of an investigation. An event at 10:14 on a workstation and an event at 10:13 on a server may be the same action if the clocks disagree. Network Time Protocol keeps systems close to a trusted reference, and consistent time zone or UTC logging makes correlation possible. Without accurate time, a timeline becomes speculation and an alibi becomes impossible to test.",
          "الوقت هو النسيج الرابط في التحقيق. فقد يكون حدث الساعة 10:14 على محطة عمل وحدث الساعة 10:13 على خادم الفعل نفسه إذا اختلفت الساعات. ويبقي بروتوكول وقت الشبكة الأنظمة قريبة من مرجع موثوق، ويجعل التسجيل الموحد للمنطقة الزمنية أو بتوقيت UTC الربط ممكنًا. فبدون وقت دقيق يصبح الخط الزمني تخمينًا ويستحيل اختبار أي حجة.",
        ),
        l(
          "Logging only helps if it is protected and used. Local logs can be deleted by an attacker with sufficient rights, so high-value systems should forward events to a central collector that uses separate credentials and append-only storage. Retention should match legal and operational needs, and access to logs should itself be audited. A log that nobody reviews is storage cost, not detection.",
          "لا يفيد التسجيل إلا إذا كان محميًا ومستخدمًا. فالمهاجم ذو الصلاحيات الكافية قد يحذف السجلات المحلية، لذا ينبغي للأنظمة عالية القيمة إرسال الأحداث إلى مجمع مركزي يستخدم بيانات اعتماد منفصلة وتخزينًا للإضافة فقط. وينبغي أن تطابق مدة الاحتفاظ الاحتياجات القانونية والتشغيلية، وأن يُدقق الوصول إلى السجلات نفسه. والسجل الذي لا يراجعه أحد تكلفة تخزين لا كشف.",
        ),
      ],
      bullets: [
        l("Authentication: logins, failures, sudo use and remote sessions.", "المصادقة: عمليات الدخول والفشل واستخدام sudo والجلسات البعيدة."),
        l("Process and service changes: new services, drivers, scheduled tasks and startup entries.", "تغييرات العمليات والخدمات: خدمات وبرامج تشغيل ومهام مجدولة ومدخلات بدء جديدة."),
        l("Network: listening ports, outbound connections and firewall decisions.", "الشبكة: المنافذ المنصتة والاتصالات الصادرة وقرارات الجدار الناري."),
        l("Integrity: file changes, signature failures and security-tool health.", "السلامة: تغييرات الملفات وفشل التواقيع وصحة أدوات الأمن."),
        l("Time source: NTP status, drift and time-zone configuration.", "مصدر الوقت: حالة بروتوكول وقت الشبكة والانحراف وإعداد المنطقة الزمنية."),
      ],
    },
    {
      h: l("8. A safe read-only inspection workflow", "8. سير عمل آمن للفحص للقراءة فقط"),
      p: [
        l(
          "A baseline is a record of what normal looks like. Before you can recognise an anomaly, you need to know the operating system version, the signed-in user, the running processes, the listening services, the startup items and the log health. The safest first pass uses read-only commands and changes nothing. Save the output with a timestamp and the command that produced it, so another person can reproduce your observation.",
          "خط الأساس سجل لما يبدو عليه الوضع الطبيعي. وقبل أن تتعرف على الشذوذ، تحتاج إلى معرفة إصدار نظام التشغيل والمستخدم المسجل والعمليات الجارية والخدمات المنصتة وعناصر بدء التشغيل وصحة السجلات. ويستخدم أول مرور آمن أوامر للقراءة فقط ولا يغيّر شيئًا. واحفظ الناتج مع طابع زمني والأمر الذي أنتجه، ليتمكن شخص آخر من إعادة ملاحظتك.",
        ),
        l(
          "On Linux, whoami and id establish identity; ps and top show processes; systemctl lists services and their state; ss or netstat shows listening sockets; and journalctl or the authentication log shows recent events. On Windows, whoami /all shows the token and groups; Get-Process and Get-Service list activity; Get-NetTCPConnection shows connections; and Event Viewer or Get-WinEvent reads logs. These commands are diagnostic, not offensive, but they still belong only on systems you own or are authorised to administer.",
          "في لينكس، يثبت whoami وid الهوية؛ ويعرض ps وtop العمليات؛ ويسرد systemctl الخدمات وحالتها؛ ويعرض ss أو netstat المقابس المنصتة؛ ويعرض journalctl أو سجل المصادقة الأحداث الأخيرة. وفي ويندوز، يعرض whoami /all الرمز والمجموعات؛ ويسرد Get-Process وGet-Service النشاط؛ ويعرض Get-NetTCPConnection الاتصالات؛ ويقرأ عارض الأحداث أو Get-WinEvent السجلات. هذه الأوامر تشخيصية لا هجومية، لكنها تبقى مقصورة على أنظمة تملكها أو مصرح لك بإدارتها.",
        ),
        l(
          "The workflow has four steps: establish context, capture inventory, compare with expectation and record questions. Establish context by naming the host, the operator, the time and the authorization. Capture inventory without remediation. Compare each item with the documented baseline or vendor expectation. Record questions instead of jumping to conclusions. Only after that should anyone propose a change, and the change should follow a separate approval and rollback process.",
          "لسير العمل أربع خطوات: تأسيس السياق، والتقاط الجرد، والمقارنة بالتوقعات، وتسجيل الأسئلة. أسس السياق بتسمية المضيف والمشغل والوقت والتصريح. والتقط الجرد دون إصلاح. وقارن كل عنصر بخط الأساس الموثق أو توقعات المورّد. وسجّل الأسئلة بدل القفز إلى الاستنتاجات. وبعد ذلك فقط ينبغي لأي شخص اقتراح تغيير، ويتبع التغيير عملية موافقة وتراجع منفصلة.",
        ),
      ],
      callout: {
        kind: "tip",
        text: l(
          "Read-only does not mean risk-free. Process lists and logs can contain personal data, so collect only what the task requires and store it securely.",
          "القراءة فقط لا تعني بلا مخاطر. فقد تحتوي قوائم العمليات والسجلات بيانات شخصية، لذا اجمع ما تتطلبه المهمة فقط واحفظه بأمان.",
        ),
      },
    },
    {
      h: l("9. Common failure modes and the defender mindset", "9. أنماط الفشل الشائعة وعقلية المدافع"),
      p: [
        l(
          "Most operating-system compromises do not begin with a kernel exploit. They begin with a service exposed to the internet, a weak or reused password, an unpatched application, a misconfigured permission or a user who ran something they should not have. The kernel boundary limits what the attacker can do next, but it does not compensate for an administrative decision that granted too much access in the first place.",
          "لا تبدأ معظم اختراقات أنظمة التشغيل باستغلال للنواة. بل تبدأ بخدمة مكشوفة على الإنترنت، أو كلمة مرور ضعيفة أو معاد استخدامها، أو تطبيق غير محدث، أو صلاحية سيئة الإعداد، أو مستخدم شغّل شيئًا ما كان ينبغي له تشغيله. ويحد حد النواة مما يستطيع المهاجم فعله لاحقًا، لكنه لا يعوض قرارًا إداريًا منح وصولًا أكثر مما ينبغي من البداية.",
        ),
        l(
          "A defender therefore asks four questions about every system: what is running, under which identity, who can change it, and what evidence would prove a change? These questions apply to a laptop, a server, a container host and a virtual machine. They also expose the most common gaps: unknown services, overprivileged accounts, writable binaries and missing logs. Answering them is more valuable than memorising a long list of attack names.",
          "لذا يسأل المدافع أربعة أسئلة عن كل نظام: ما الذي يعمل، وتحت أي هوية، ومن يستطيع تغييره، وما الدليل الذي يثبت التغيير؟ تنطبق هذه الأسئلة على حاسوب محمول وخادم ومضيف حاويات وجهاز افتراضي. وتكشف أيضًا الفجوات الأكثر شيوعًا: خدمات مجهولة، وحسابات مفرطة الامتياز، وملفات تنفيذية قابلة للكتابة، وسجلات ناقصة. والإجابة عنها أنفع من حفظ قائمة طويلة بأسماء الهجمات.",
        ),
        l(
          "Finally, resilience matters as much as prevention. A system with tested backups, documented rebuild steps, centralized logs and a known owner can recover from a bad patch or a missed configuration. A system with none of those turns a small mistake into an outage. Operating-system security is therefore both a technical discipline and an operational habit: know the baseline, limit the privilege, verify the boot, keep the evidence and practise recovery.",
          "أخيرًا، المرونة لا تقل أهمية عن المنع. فالنظام الذي يملك نسخًا احتياطية مختبرة وخطوات إعادة بناء موثقة وسجلات مركزية ومالكًا معروفًا يستطيع التعافي من تحديث سيئ أو إعداد فائت. أما النظام الخالي من ذلك فيحوّل خطأ صغيرًا إلى انقطاع. لذا فأمن نظام التشغيل انضباط تقني وعادة تشغيلية معًا: اعرف خط الأساس، وحدّ الامتياز، وتحقق من الإقلاع، واحفظ الأدلة، وتدرّب على الاستعادة.",
        ),
      ],
      table: {
        head: [l("Failure mode", "نمط الفشل"), l("Why it happens", "لماذا يحدث"), l("First control", "أول ضابط")],
        rows: [
          [l("Exposed service", "خدمة مكشوفة"), l("Default install or forgotten test service", "تثبيت افتراضي أو خدمة اختبار منسية"), l("Inventory listeners and close what is not needed", "اجرد المنصتات وأغلق غير اللازم")],
          [l("Overprivileged service", "خدمة مفرطة الامتياز"), l("Convenience or copied configuration", "راحة أو إعدادات منسوخة"), l("Dedicated service account and least privilege", "حساب خدمة مخصص وأقل امتياز")],
          [l("Writable binary", "ملف تنفيذي قابل للكتابة"), l("Loose directory permissions", "صلاحيات مجلد واسعة"), l("Restrict ownership and write access", "قيّد الملكية والكتابة")],
          [l("Unpatched driver", "برنامج تشغيل غير محدث"), l("Update process excludes firmware and drivers", "عملية تحديث تستثني البرمجية الثابتة وبرامج التشغيل"), l("Include drivers in patch and vulnerability management", "أدرج برامج التشغيل في إدارة التحديث والثغرات")],
          [l("Missing evidence", "دليل ناقص"), l("Auditing disabled or logs only local", "تدقيق معطل أو سجلات محلية فقط"), l("Enable policy, forward logs and sync time", "فعّل السياسة وأرسل السجلات وزامن الوقت")],
        ],
      },
    },
  ],
  examples: [
    l(
      "A web server runs as root. A flaw in the application lets an attacker run a command, and that command can read every file on the host. Running the service as a dedicated unprivileged account would have limited the same flaw to the files that account can reach.",
      "خادم ويب يعمل بصلاحيات المستخدم الأعلى. وتتيح ثغرة في التطبيق للمهاجم تشغيل أمر، فيقرأ ذلك الأمر كل ملف على المضيف. وكان تشغيل الخدمة بحساب مخصص بلا امتياز سيحد الثغرة نفسها بالملفات التي يصل إليها ذلك الحساب.",
    ),
    l(
      "A document viewer starts a command shell. The process tree is the evidence: a viewer should not normally be the parent of a shell. The image name may look legitimate, but the parent-child relationship reveals the anomaly.",
      "قارئ مستندات يبدأ صدفة أوامر. وشجرة العمليات هي الدليل: لا ينبغي لقارئ المستندات أن يكون أبًا لصدفة الأوامر عادةً. وقد يبدو اسم الصورة مشروعًا، لكن علاقة الأب بالابن تكشف الشذوذ.",
    ),
    l(
      "A scheduled backup runs at 02:00, but the server clock is four hours ahead after a time-zone change. The backup log and the file timestamps no longer align, so an investigator cannot tell whether the backup completed before or after an incident.",
      "تعمل نسخة احتياطية مجدولة عند الساعة 02:00، لكن ساعة الخادم متقدمة أربع ساعات بعد تغيير المنطقة الزمنية. فلا تتوافق سجلات النسخ وأوقات الملفات، ولا يستطيع المحقق تحديد ما إذا اكتملت النسخة قبل الحادث أم بعده.",
    ),
    l(
      "A help-desk technician uses a shared local administrator password to fix laptops. When one laptop is compromised, the same password works on every other laptop in the fleet, turning a single incident into a widespread one.",
      "يستخدم فني دعم كلمة مرور مسؤول محلي مشتركة لإصلاح الحواسيب المحمولة. وعند اختراق حاسوب واحد، تعمل الكلمة نفسها على كل حاسوب آخر في الأسطول، فتحوّل حادثًا واحدًا إلى حادث واسع.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A small company exposes a remote-desktop service to the internet so staff can work from home. The service uses a shared password and has no multi-factor authentication. An attacker logs in with a leaked password, creates a new local administrator and disables the endpoint agent. The incident is detected only when files are encrypted.",
      "تعرّض شركة صغيرة خدمة سطح مكتب بعيد على الإنترنت ليعمل الموظفون من المنزل. وتستخدم الخدمة كلمة مرور مشتركة وبلا مصادقة متعددة العوامل. فيسجل مهاجم الدخول بكلمة مرور مسربة، وينشئ مسؤولًا محليًا جديدًا، ويعطّل وكيل الأجهزة. ولا يُكتشف الحادث إلا عندما تُشفَّر الملفات.",
    ),
    l(
      "A university lab computer is shared by students. One student installs a signed but vulnerable driver from a gaming peripheral. The driver allows ordinary code to run in kernel mode, and malware uses it to hide a service. The lab's antivirus reports nothing because it runs at a level the driver can influence.",
      "حاسوب مختبر جامعي مشترك بين الطلاب. يثبت أحدهم برنامج تشغيل موقّعًا لكنه ضعيف من ملحق ألعاب. ويتيح برنامج التشغيل لشيفرة عادية العمل في وضع النواة، وتستخدمه برمجية خبيثة لإخفاء خدمة. ولا تبلغ مكافحة الفيروسات في المختبر بشيء لأنها تعمل في مستوى يستطيع برنامج التشغيل التأثير فيه.",
    ),
    l(
      "After an acquisition, two companies merge their directories. A service account from the acquired company keeps domain-wide rights because nobody documented its owner. Months later, a penetration test finds that the account's password never expires and is stored in a script on a public file share.",
      "بعد استحواذ، تدمج شركتان أدلتهما. ويحتفظ حساب خدمة من الشركة المستحوذ عليها بصلاحيات على مستوى النطاق لأن أحدًا لم يوثق مالكه. وبعد أشهر، يجد اختبار اختراق أن كلمة مرور الحساب لا تنتهي صلاحيتها وأنها محفوظة في سكربت على مشاركة ملفات عامة.",
    ),
  ],
  diagram: {
    kind: "layers",
    title: l(
      "The operating-system trust stack",
      "مكدس الثقة في نظام التشغيل",
    ),
    caption: l(
      "Each layer depends on the one below it. Verification at the bottom limits what a compromise above can hide.",
      "تعتمد كل طبقة على ما تحتها. والتحقق في الأسفل يحد مما يستطيع اختراق في الأعلى إخفاءه.",
    ),
    nodes: [
      { label: l("Firmware and hardware", "البرمجية الثابتة والعتاد"), desc: l("Secure Boot, TPM measurements", "الإقلاع الآمن وقياسات وحدة المنصة الموثوقة") },
      { label: l("Bootloader and kernel", "محمّل الإقلاع والنواة"), desc: l("Signed components, module policy", "مكونات موقعة وسياسة وحدات") },
      { label: l("Drivers", "برامج التشغيل"), desc: l("Kernel privilege, blocklists", "امتياز النواة وقوائم الحظر") },
      { label: l("Services and init", "الخدمات والتهيئة"), desc: l("Identity, start type, configuration", "الهوية ونوع البدء والإعدادات") },
      { label: l("User applications", "تطبيقات المستخدم"), desc: l("Standard token, sandboxing", "رمز عادي وعزل") },
      { label: l("Logs and telemetry", "السجلات والقياس عن بعد"), desc: l("Evidence, time and central collection", "الأدلة والوقت والجمع المركزي") },
    ],
  },
  instructorDemo: l(
    "The instructor opens a virtual machine they own and performs a read-only baseline in front of the class. They run whoami and id, show a process tree, list a service with systemctl status, and then repeat the same questions on a Windows host using whoami /all and Get-Service. For each command, the instructor points to the field that answers one of the four questions: what is running, under which identity, who can change it and what evidence exists. No exploit is run, no permission is changed and no real organizational system is accessed.",
    "يفتح المدرب جهازًا افتراضيًا يملكه ويجري خط أساس للقراءة فقط أمام الصف. يشغّل whoami وid، ويعرض شجرة عمليات، ويسرد خدمة بـ systemctl status، ثم يكرر الأسئلة نفسها على مضيف ويندوز باستخدام whoami /all وGet-Service. ولكل أمر، يشير المدرب إلى الحقل الذي يجيب عن أحد الأسئلة الأربعة: ما الذي يعمل، وتحت أي هوية، ومن يستطيع تغييره، وما الدليل الموجود. ولا يُشغَّل أي استغلال ولا تُغيَّر أي صلاحية ولا يُوصل إلى أي نظام مؤسسي حقيقي.",
  ),
  exercises: [
    {
      title: l("Map one request end to end", "ارسم طلبًا واحدًا من البداية إلى النهاية"),
      instructions: l(
        "Choose an action you perform daily, such as opening a document or loading a web page. Write the path from the application to the kernel, the identity checked at each step and the evidence that would exist afterward. Keep it to one page.",
        "اختر إجراءً تجريه يوميًا، مثل فتح مستند أو تحميل صفحة ويب. واكتب المسار من التطبيق إلى النواة، والهوية التي تُفحص في كل خطوة، والدليل الذي سيبقى بعد ذلك. واجعل الطول صفحة واحدة.",
      ),
      expected: l(
        "A one-page diagram or list with at least five steps, the privilege level at each step and one evidence source.",
        "مخطط أو قائمة من صفحة واحدة بخمس خطوات على الأقل ومستوى الامتياز في كل خطوة ومصدر دليل واحد.",
      ),
    },
    {
      title: l("Compare two service identities", "قارن هويتَي خدمة"),
      instructions: l(
        "On a system you own, inspect two services. Record the executable path, the account they run as, whether the account is privileged and whether the executable or its configuration is writable by ordinary users. Explain which service presents the larger risk.",
        "على نظام تملكه، افحص خدمتين. سجّل مسار الملف التنفيذي والحساب الذي تعملان به وهل الحساب مميز وهل الملف التنفيذي أو إعداداته قابل للكتابة بواسطة مستخدمين عاديين. واشرح أي خدمة تمثل خطرًا أكبر.",
      ),
      expected: l(
        "A two-row comparison table with paths, identities, privilege level, write access and a justified risk ranking.",
        "جدول مقارنة من صفين بالمسارات والهويات ومستوى الامتياز ووصول الكتابة وترتيب مخاطر مبرر.",
      ),
    },
    {
      title: l("Build a five-line incident note", "اكتب ملاحظة حادث من خمسة أسطر"),
      instructions: l(
        "Assume a colleague reports an unknown service on a server. Write five lines: what is known, what is suspected, what evidence to collect, what not to change and who decides the next step.",
        "افترض أن زميلًا يبلغ عن خدمة مجهولة على خادم. اكتب خمسة أسطر: ما هو معروف، وما هو مشتبه به، وما الأدلة الواجب جمعها، وما لا يجب تغييره، ومن يقرر الخطوة التالية.",
      ),
      expected: l(
        "Five clear lines that separate fact from inference and preserve evidence before remediation.",
        "خمسة أسطر واضحة تفصل الحقيقة عن الاستنتاج وتحفظ الأدلة قبل الإصلاح.",
      ),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can explain how the kernel mediates access, distinguish kernel and user mode, describe processes, threads, services and drivers using observable evidence, read a basic identity context on Linux and Windows, trace the boot chain, locate the main logs and complete a safe read-only baseline without modifying the system.",
    "بنهاية الجلسة، يستطيع المتعلمون شرح كيفية توسط النواة في الوصول، والتمييز بين وضع النواة ووضع المستخدم، ووصف العمليات والخيوط والخدمات وبرامج التشغيل بأدلة قابلة للملاحظة، وقراءة سياق هوية أساسي في لينكس وويندوز، وتتبع سلسلة الإقلاع، وتحديد السجلات الرئيسية، وإكمال خط أساس آمن للقراءة فقط دون تعديل النظام.",
  ),
  commonMistakes: [
    l(
      "Judging a process by its image name alone instead of its path, parent, signature and start time.",
      "الحكم على عملية باسم صورتها وحده بدل مسارها وأبيها وتوقيعها ووقت بدئها.",
    ),
    l(
      "Running a service as root or LocalSystem because it is convenient, then treating the service as low risk.",
      "تشغيل خدمة بصلاحيات المستخدم الأعلى أو حساب النظام المحلي للراحة، ثم اعتبار الخدمة منخفضة الخطورة.",
    ),
    l(
      "Confusing authentication with authorization: a successful login does not mean the account should reach every resource.",
      "الخلط بين المصادقة والتصريح: فنجاح تسجيل الدخول لا يعني أن الحساب ينبغي أن يصل إلى كل مورد.",
    ),
    l(
      "Assuming Secure Boot proves the running system is clean after login.",
      "افتراض أن الإقلاع الآمن يثبت أن النظام العامل نظيف بعد تسجيل الدخول.",
    ),
    l(
      "Collecting logs without checking time synchronization, then building a timeline from inconsistent clocks.",
      "جمع السجلات دون فحص مزامنة الوقت، ثم بناء خط زمني من ساعات غير متسقة.",
    ),
    l(
      "Changing or restarting a service during triage before evidence is captured.",
      "تغيير خدمة أو إعادة تشغيلها أثناء الفرز قبل التقاط الأدلة.",
    ),
  ],
  bestPractices: [
    l("Record the executable path, parent, identity and start time for every process you investigate.", "سجّل المسار والأب والهوية ووقت البدء لكل عملية تفحصها."),
    l("Run each service under a dedicated account with only the rights it needs.", "شغّل كل خدمة بحساب مخصص وبالصلاحيات التي تحتاجها فقط."),
    l("Keep boot components, drivers and firmware in the patch and vulnerability process.", "أدرج مكونات الإقلاع وبرامج التشغيل والبرمجية الثابتة في عملية التحديث والثغرات."),
    l("Enable auditing before an incident and forward high-value logs to a separate collector.", "فعّل التدقيق قبل الحادث وأرسل السجلات عالية القيمة إلى مجمع منفصل."),
    l("Synchronize time and log in UTC or a documented local time zone.", "زامن الوقت وسجّل بتوقيت UTC أو منطقة زمنية محلية موثقة."),
    l("Use read-only inspection first, then change through an approved and reversible process.", "استخدم الفحص للقراءة فقط أولًا، ثم غيّر عبر عملية معتمدة وقابلة للتراجع."),
  ],
  keyTakeaways: [
    l(
      "The operating system enforces security through isolation, mediation, abstraction and accounting.",
      "ينفذ نظام التشغيل الأمن عبر العزل والوساطة والتجريد والمحاسبة.",
    ),
    l(
      "Kernel mode is powerful and dangerous; user mode limits the blast radius of ordinary applications.",
      "وضع النواة قوي وخطير؛ ووضع المستخدم يحد نطاق أثر التطبيقات العادية.",
    ),
    l(
      "A process is identified by its context and tree, not by its name or PID alone.",
      "تُعرَّف العملية بسياقها وشجرتها لا باسمها أو معرّفها وحده.",
    ),
    l(
      "Services and drivers are common privilege-escalation paths when their binaries, configuration or identities are weak.",
      "الخدمات وبرامج التشغيل مسارات شائعة لرفع الامتيازات عندما تكون ملفاتها أو إعداداتها أو هوياتها ضعيفة.",
    ),
    l(
      "The boot chain and time-synchronized logs turn a collection of events into trustworthy evidence.",
      "سلسلة الإقلاع والسجلات المتزامنة زمنيًا تحوّل مجموعة الأحداث إلى أدلة موثوقة.",
    ),
    l(
      "A safe baseline asks what runs, under which identity, who can change it and what evidence proves it.",
      "يسأل خط الأساس الآمن عما يعمل وتحت أي هوية ومن يستطيع تغييره وما الدليل الذي يثبته.",
    ),
  ],
  lab: {
    title: l(
      "Lab 4 — Read-only baseline of an owned workstation",
      "المختبر 4 — خط أساس للقراءة فقط لمحطة عمل تملكها",
    ),
    scenario: l(
      "You are the first security hire at a small design studio. Before changing anything, the owner asks you to document what is normal on one workstation: who uses it, what runs at startup, which services listen, which accounts are privileged and whether the logs are usable. You have written permission to inspect the machine but not to modify it.",
      "أنت أول موظف أمن في استوديو تصميم صغير. وقبل تغيير أي شيء، يطلب المالك توثيق ما هو طبيعي على محطة عمل واحدة: من يستخدمها، وما يعمل عند بدء التشغيل، وأي الخدمات تنصت، وأي الحسابات مميزة، وهل السجلات صالحة للاستخدام. لديك إذن كتابي بفحص الجهاز لكن ليس بتعديله.",
    ),
    safety: l(
      "Inspect only a computer you own or have explicit written permission to administer. Use read-only commands, do not install tools, do not change services or permissions, and do not copy personal files. Store your notes securely and remove any personal data that is not needed for the exercise. If you find evidence of a real compromise, stop, preserve what you have and report it through the proper channel.",
      "افحص فقط حاسوبًا تملكه أو لديك إذن كتابي صريح بإدارته. استخدم أوامر للقراءة فقط، ولا تثبت أدوات، ولا تغيّر الخدمات أو الصلاحيات، ولا تنسخ ملفات شخصية. واحفظ ملاحظاتك بأمان واحذف أي بيانات شخصية لا تلزم للتمرين. وإذا وجدت دليلًا على اختراق حقيقي، توقف واحفظ ما لديك وأبلغ عبر القناة المناسبة.",
    ),
    steps: [
      l("Record the host name, operating-system version, current user, date and authorization reference.", "سجّل اسم المضيف وإصدار نظام التشغيل والمستخدم الحالي والتاريخ ومرجع التصريح."),
      l("Capture identity and privilege information with whoami, id or whoami /all.", "التقط معلومات الهوية والامتياز باستخدام whoami وid أو whoami /all."),
      l("List processes with their paths, owners and parents; save the output with a timestamp.", "اسرد العمليات بمساراتها ومالكيها وآبائها؛ واحفظ الناتج مع طابع زمني."),
      l("List services, their start type and the account each one uses.", "اسرد الخدمات ونوع بدئها والحساب الذي تستخدمه كل واحدة."),
      l("List listening ports and explain which ones are expected for this workstation.", "اسرد المنافذ المنصتة واشرح أيها متوقع لمحطة العمل هذه."),
      l("Inspect the main authentication and system logs, and check time synchronization.", "افحص سجلات المصادقة والنظام الرئيسية، وتحقق من مزامنة الوقت."),
      l("Write a baseline table, three anomalies or open questions and three hardening recommendations that require separate approval.", "اكتب جدول خط أساس وثلاثة شذوذات أو أسئلة مفتوحة وثلاث توصيات تحصين تتطلب موافقة منفصلة."),
    ],
    expected: l(
      "A timestamped, read-only baseline covering identity, processes, services, listening ports, startup items and log health, plus three evidence-based anomalies and three recommendations that were not implemented during the lab.",
      "خط أساس موقّت للقراءة فقط يغطي الهوية والعمليات والخدمات والمنافذ المنصتة وعناصر بدء التشغيل وصحة السجلات، مع ثلاثة شذوذات مبنية على الأدلة وثلاث توصيات لم تُنفذ أثناء المختبر.",
    ),
    tool: "logs",
    objectives: [
      l("Establish the identity and privilege context of a workstation.", "تأسيس سياق الهوية والامتياز لمحطة عمل."),
      l("Inventory processes, services and listening ports without changing the system.", "جرد العمليات والخدمات والمنافذ المنصتة دون تغيير النظام."),
      l("Locate authentication and system logs and judge whether they are usable.", "تحديد سجلات المصادقة والنظام والحكم على صلاحيتها للاستخدام."),
      l("Separate observed facts from hypotheses in a short baseline report.", "فصل الحقائق المرصودة عن الفرضيات في تقرير خط أساس قصير."),
      l("Propose hardening actions through an approval process rather than applying them during triage.", "اقتراح إجراءات تحصين عبر عملية موافقة بدل تطبيقها أثناء الفرز."),
    ],
    prerequisites: [
      l("Session 1: risk, controls and the concept of a security baseline.", "الجلسة 1: المخاطر والضوابط ومفهوم خط الأساس الأمني."),
      l("Session 3: phishing, malware behavior and first-response isolation.", "الجلسة 3: التصيّد وسلوك البرمجيات الخبيثة والعزل في الاستجابة الأولى."),
      l("Session 4 theory: kernel, processes, services, identity and logging.", "نظرية الجلسة 4: النواة والعمليات والخدمات والهوية والتسجيل."),
      l("A workstation you own, with permission to run read-only diagnostic commands.", "محطة عمل تملكها، مع إذن بتشغيل أوامر تشخيصية للقراءة فقط."),
    ],
    environment: l(
      "A local Windows or Linux workstation or virtual machine that you own. No internet scanning, no remote systems and no administrative changes are required. Use a text editor or spreadsheet for the baseline table and a trusted local folder for the saved output.",
      "محطة عمل أو جهاز افتراضي محلي يعمل بنظام ويندوز أو لينكس وتملكه. لا يلزم مسح للإنترنت ولا أنظمة بعيدة ولا تغييرات إدارية. استخدم محرر نصوص أو جدول بيانات لجدول خط الأساس ومجلدًا محليًا موثوقًا لحفظ الناتج.",
    ),
    tools: [
      l("Built-in command shell (PowerShell, Bash or another shell)", "صدفة أوامر مدمجة (PowerShell أو Bash أو غيرها)"),
      l("Text editor or spreadsheet for the baseline table", "محرر نصوص أو جدول بيانات لجدول خط الأساس"),
      l("System log viewer (Event Viewer or journalctl)", "عارض سجلات النظام (عارض الأحداث أو journalctl)"),
      l("Timer for the 30-minute exercise", "مؤقت لتمرين الثلاثين دقيقة"),
    ],
    authorization: l(
      "Scope: one workstation that you own or administer, read-only commands only, local output only. Do not scan the network, access other users' files, install software, change services, modify permissions or upload output to an external service. Stop if a command would require rights you do not have or if you encounter evidence of a real incident.",
      "النطاق: محطة عمل واحدة تملكها أو تديرها، وأوامر للقراءة فقط، وناتج محلي فقط. لا تمسح الشبكة ولا تصل إلى ملفات مستخدمين آخرين ولا تثبت برمجيات ولا تغيّر الخدمات أو الصلاحيات ولا ترفع الناتج إلى خدمة خارجية. توقف إذا تطلب أمر صلاحيات لا تملكها أو إذا صادفت دليلًا على حادث حقيقي.",
    ),
    detailedSteps: [
      {
        title: l("Record scope and authorization", "سجّل النطاق والتصريح"),
        explanation: l(
          "Write the host name, operating-system version, your user name, the date and the authorization reference before running anything. This step prevents the common mistake of investigating a machine without a clear scope and creates the context a reviewer needs.",
          "اكتب اسم المضيف وإصدار نظام التشغيل واسم المستخدم والتاريخ ومرجع التصريح قبل تشغيل أي شيء. وتمنع هذه الخطوة الخطأ الشائع المتمثل في فحص جهاز دون نطاق واضح، وتنشئ السياق الذي يحتاجه المراجع.",
        ),
        expected: l("A header with five scope fields and a named owner of the machine.", "ترويسة بخمسة حقول نطاق ومالك مسمى للجهاز."),
      },
      {
        title: l("Capture the identity context", "التقط سياق الهوية"),
        command: "whoami /all",
        explanation: l(
          "On Windows, whoami /all shows the user, security identifiers, group memberships, integrity level and privileges. The equivalent Linux commands are whoami, id and groups. Record whether the session is elevated and which groups could change system configuration.",
          "في ويندوز، يعرض whoami /all المستخدم ومعرّفات الأمان وعضويات المجموعات ومستوى السلامة والامتيازات. والأوامر المكافئة في لينكس هي whoami وid وgroups. وسجّل هل الجلسة مرفوعة وأي المجموعات تستطيع تغيير إعدادات النظام.",
        ),
        expected: l("A short identity summary with elevation state and privileged groups.", "ملخص هوية قصير بحالة رفع الصلاحية والمجموعات المميزة."),
      },
      {
        title: l("Inventory processes and parents", "اجرد العمليات وآباءها"),
        command: "Get-Process | Select-Object Id,ProcessName,Path,StartTime",
        explanation: l(
          "List processes with their identifiers, names, executable paths and start times. On Linux, use ps -eo pid,ppid,user,comm,args or a similar read-only form. Identify at least three processes whose path, parent or start time you cannot explain.",
          "اسرد العمليات بمعرّفاتها وأسمائها ومساراتها وأوقات بدئها. وفي لينكس استخدم ps -eo pid,ppid,user,comm,args أو صيغة مماثلة للقراءة فقط. وحدد ثلاث عمليات على الأقل لا تستطيع تفسير مسارها أو أبيها أو وقت بدئها.",
        ),
        expected: l("A process table with paths and parents, plus three questions about unexplained entries.", "جدول عمليات بالمسارات والآباء، مع ثلاثة أسئلة عن مدخلات غير مفسرة."),
      },
      {
        title: l("Inventory services and listening ports", "اجرد الخدمات والمنافذ المنصتة"),
        command: "Get-Service | Select-Object Name,Status,StartType",
        explanation: l(
          "Record the services that start automatically and the account each one uses. Then list listening sockets with Get-NetTCPConnection -State Listen on Windows or ss -tulpn on Linux. Match each listener to a service and mark any listener you cannot justify as an open question.",
          "سجّل الخدمات التي تبدأ تلقائيًا والحساب الذي تستخدمه كل واحدة. ثم اسرد المقابس المنصتة بـ Get-NetTCPConnection -State Listen في ويندوز أو ss -tulpn في لينكس. وطابق كل منصت مع خدمة وعلّم أي منصت لا تستطيع تبريره كسؤال مفتوح.",
        ),
        expected: l("A service table with start types and a listener table mapped to owning services.", "جدول خدمات بأنواع البدء وجدول منصتات مرتبط بالخدمات المالكة."),
      },
      {
        title: l("Inspect startup items and recent changes", "افحص عناصر بدء التشغيل والتغييرات الأخيرة"),
        explanation: l(
          "Review startup folders, scheduled tasks or timers, and recently installed software. Record the name, path, publisher or signature and install date. Do not disable anything during the lab; the purpose is to create a baseline and note differences from the vendor image or the last known good state.",
          "راجع مجلدات بدء التشغيل والمهام المجدولة أو المؤقتات والبرمجيات المثبتة حديثًا. وسجّل الاسم والمسار والناشر أو التوقيع وتاريخ التثبيت. ولا تعطّل أي شيء أثناء المختبر؛ فالغرض إنشاء خط أساس وملاحظة الاختلافات عن صورة المورّد أو آخر حالة جيدة معروفة.",
        ),
        expected: l("A startup list with paths, publishers and dates, plus any unexplained item.", "قائمة بدء تشغيل بالمسارات والناشرين والتواريخ، مع أي عنصر غير مفسر."),
      },
      {
        title: l("Check logs and time health", "افحص السجلات وصحة الوقت"),
        command: "Get-WinEvent -LogName Security -MaxEvents 20",
        explanation: l(
          "Read the last authentication and system events. On Linux, use journalctl -n 50 or read the authentication log. Record whether auditing is enabled, whether the log is local only and whether the clock is synchronized. A workstation with no usable authentication log cannot support an investigation.",
          "اقرأ آخر أحداث المصادقة والنظام. وفي لينكس استخدم journalctl -n 50 أو اقرأ سجل المصادقة. وسجّل هل التدقيق مفعل، وهل السجل محلي فقط، وهل الساعة متزامنة. فمحطة عمل بلا سجل مصادقة صالح لا تستطيع دعم تحقيق.",
        ),
        expected: l("A log-health row stating audit status, retention, collection destination and time source.", "صف صحة سجلات يوضح حالة التدقيق والاحتفاظ ووجهة الجمع ومصدر الوقت."),
      },
      {
        title: l("Write the baseline and recommendations", "اكتب خط الأساس والتوصيات"),
        explanation: l(
          "Summarize the observed state in one table, list three anomalies or open questions with evidence, and propose three hardening actions with an owner and an approval step. Do not claim that a recommendation was applied. Finish with a one-line statement of what you did not inspect.",
          "لخص الحالة المرصودة في جدول واحد، واسرد ثلاثة شذوذات أو أسئلة مفتوحة مع الأدلة، واقترح ثلاثة إجراءات تحصين بمالك وخطوة موافقة. ولا تدّع أن توصية طُبقت. واختم بجملة واحدة لما لم تفحصه.",
        ),
        expected: l("A one-page baseline with anomalies, recommendations, owners and explicit limitations.", "خط أساس من صفحة واحدة بالشذوذات والتوصيات والمالكين والقيود الصريحة."),
      },
    ],
    troubleshooting: [
      {
        problem: l("A command is blocked by policy or requires administrator rights.", "أمر محجوب بسياسة أو يتطلب صلاحيات مسؤول."),
        fix: l("Do not bypass the policy. Record the command, the error and the missing right, then use a read-only alternative or ask the system owner for an approved method.", "لا تتجاوز السياسة. سجّل الأمر والخطأ والصلاحية الناقصة، ثم استخدم بديلًا للقراءة فقط أو اطلب من مالك النظام طريقة معتمدة."),
      },
      {
        problem: l("The process list contains many unfamiliar names.", "قائمة العمليات تحتوي أسماء كثيرة غير مألوفة."),
        fix: l("Check path, publisher, signature and parent before judging. A strange name may be a legitimate component; a familiar name with an unusual path is often more suspicious.", "افحص المسار والناشر والتوقيع والأب قبل الحكم. فقد يكون الاسم الغريب مكونًا مشروعًا؛ والاسم المألوف بمسار غير معتاد غالبًا أكثر إثارة للشك."),
      },
      {
        problem: l("The authentication log is empty or has very little history.", "سجل المصادقة فارغ أو تاريخه قصير جدًا."),
        fix: l("Record the gap as a finding. Check whether auditing is disabled, retention is too short or logs are forwarded elsewhere. Do not enable auditing during the lab without approval.", "سجّل الفجوة كملاحظة. وافحص هل التدقيق معطل أو مدة الاحتفاظ قصيرة أو السجلات مرسلة إلى مكان آخر. ولا تفعّل التدقيق أثناء المختبر دون موافقة."),
      },
    ],
    deliverables: [
      l("A timestamped baseline table covering identity, processes, services, listeners, startup items and logs.", "جدول خط أساس موقّت يغطي الهوية والعمليات والخدمات والمنصتات وعناصر البدء والسجلات."),
      l("Three anomalies or open questions, each linked to a specific observation.", "ثلاثة شذوذات أو أسئلة مفتوحة، كل منها مرتبط بملاحظة محددة."),
      l("Three hardening recommendations with owners and approval steps, not applied during the lab.", "ثلاث توصيات تحصين بمالكين وخطوات موافقة، غير مطبقة أثناء المختبر."),
      l("A one-line limitations statement and a list of commands used.", "جملة قيود واحدة وقائمة بالأوامر المستخدمة."),
    ],
    rubric: [
      { criterion: l("Scope, authorization and evidence handling", "النطاق والتصريح والتعامل مع الأدلة"), weight: 20 },
      { criterion: l("Completeness and accuracy of the baseline inventory", "اكتمال جرد خط الأساس ودقته"), weight: 25 },
      { criterion: l("Quality of anomaly analysis and separation of fact from inference", "جودة تحليل الشذوذ والفصل بين الحقيقة والاستنتاج"), weight: 25 },
      { criterion: l("Proportionate, approval-based recommendations", "توصيات متناسبة قائمة على الموافقة"), weight: 20 },
      { criterion: l("Clarity, limitations and reproducibility", "الوضوح والقيود وقابلية إعادة الإنتاج"), weight: 10 },
    ],
  },
  quiz: [
    {
      q: l("What is the main security purpose of separating kernel mode from user mode?", "ما الغرض الأمني الرئيسي من فصل وضع النواة عن وضع المستخدم؟"),
      options: [
        l("To make applications run faster", "جعل التطبيقات أسرع"),
        l("To limit what ordinary programs can do to memory and hardware", "الحد مما تستطيع البرامج العادية فعله بالذاكرة والعتاد"),
        l("To remove the need for user accounts", "إلغاء الحاجة إلى حسابات المستخدمين"),
        l("To encrypt network traffic automatically", "تشفير حركة الشبكة تلقائيًا"),
      ],
      answer: 1,
      why: l("User-mode code must request sensitive operations through the kernel, which checks the request and limits the damage a faulty or malicious program can cause.", "يجب أن تطلب شيفرة وضع المستخدم العمليات الحساسة عبر النواة، التي تفحص الطلب وتحد من الضرر الذي يمكن لبرنامج معيب أو خبيث إحداثه."),
    },
    {
      q: l("What is a system call?", "ما استدعاء النظام؟"),
      options: [
        l("A phone call to the vendor's support line", "مكالمة هاتفية إلى دعم المورّد"),
        l("A controlled request from a user-mode program to the kernel", "طلب مضبوط من برنامج في وضع المستخدم إلى النواة"),
        l("A scheduled task that starts at boot", "مهمة مجدولة تبدأ عند الإقلاع"),
        l("A log entry written by the firewall", "مدخل سجل يكتبه الجدار الناري"),
      ],
      answer: 1,
      why: l("System calls are the controlled entry points through which user-mode programs ask the kernel to open files, create processes or use the network.", "استدعاءات النظام هي نقاط الدخول المضبوطة التي تطلب عبرها برامج وضع المستخدم من النواة فتح الملفات أو إنشاء العمليات أو استخدام الشبكة."),
    },
    {
      q: l("Which property makes a PID unreliable as a long-term identity?", "أي خاصية تجعل معرّف العملية غير موثوق كهوية طويلة الأمد؟"),
      options: [
        l("It is always encrypted", "إنه مشفر دائمًا"),
        l("It is reused after the process exits", "يعاد استخدامه بعد انتهاء العملية"),
        l("It changes every second", "يتغير كل ثانية"),
        l("It is shared by all users", "يتشاركه جميع المستخدمين"),
      ],
      answer: 1,
      why: l("Process identifiers are temporary and can be assigned to a different process later, so combine the PID with start time, path, parent and user context.", "معرّفات العمليات مؤقتة ويمكن منحها لعملية أخرى لاحقًا، لذا اجمع المعرّف مع وقت البدء والمسار والأب وسياق المستخدم."),
    },
    {
      q: l("A document viewer starts a command shell. Why is this suspicious?", "قارئ مستندات يبدأ صدفة أوامر. لماذا يعد هذا مريبًا؟"),
      options: [
        l("Shells are always malicious", "الصدفات خبيثة دائمًا"),
        l("The parent-child relationship does not match normal behavior", "علاقة الأب بالابن لا تطابق السلوك المعتاد"),
        l("Document viewers cannot open files", "قارئات المستندات لا تستطيع فتح الملفات"),
        l("It uses too much memory", "يستهلك ذاكرة أكثر من اللازم"),
      ],
      answer: 1,
      why: l("Process trees reveal behavior. A viewer spawning a shell is unusual and may indicate exploitation, a malicious macro or a malicious plugin.", "تكشف أشجار العمليات السلوك. فبدء قارئ المستندات لصدفة أمر غير معتاد وقد يدل على استغلال أو ماكرو خبيث أو إضافة خبيثة."),
    },
    {
      q: l("Why should a network-facing service not run as root or LocalSystem?", "لماذا لا ينبغي لخدمة موجهة للشبكة أن تعمل بصلاحيات المستخدم الأعلى أو حساب النظام المحلي؟"),
      options: [
        l("It makes the service slower", "يجعل الخدمة أبطأ"),
        l("A service compromise would inherit very broad rights", "سيرث اختراق الخدمة صلاحيات واسعة جدًا"),
        l("It prevents the service from logging", "يمنع الخدمة من التسجيل"),
        l("It disables the firewall", "يعطّل الجدار الناري"),
      ],
      answer: 1,
      why: l("The service process runs with the rights of its account. Least privilege limits what an attacker can do after exploiting the service.", "تعمل عملية الخدمة بصلاحيات حسابها. ويحد أقل امتياز مما يستطيع المهاجم فعله بعد استغلال الخدمة."),
    },
    {
      q: l("What does Secure Boot verify?", "ما الذي يتحقق منه الإقلاع الآمن؟"),
      options: [
        l("Every application opened after login", "كل تطبيق يُفتح بعد تسجيل الدخول"),
        l("Signatures of boot components before they run", "تواقيع مكونات الإقلاع قبل تشغيلها"),
        l("The strength of user passwords", "قوة كلمات مرور المستخدمين"),
        l("The confidentiality of network traffic", "سرية حركة الشبكة"),
      ],
      answer: 1,
      why: l("Secure Boot checks the boot path. It does not monitor every user application or replace endpoint detection.", "يتحقق الإقلاع الآمن من مسار الإقلاع. ولا يراقب كل تطبيق مستخدم ولا يستبدل كشف الأجهزة."),
    },
    {
      q: l("Why is accurate time important in an investigation?", "لماذا الوقت الدقيق مهم في التحقيق؟"),
      options: [
        l("It makes files smaller", "يجعل الملفات أصغر"),
        l("It allows events from different systems to be correlated", "يتيح ربط الأحداث من أنظمة مختلفة"),
        l("It encrypts logs automatically", "يشفر السجلات تلقائيًا"),
        l("It replaces the need for backups", "يستبدل الحاجة إلى النسخ الاحتياطي"),
      ],
      answer: 1,
      why: l("A timeline is only reliable when clocks agree. Time synchronization and a documented time zone make correlation possible.", "لا يكون الخط الزمني موثوقًا إلا عندما تتفق الساعات. والمزامنة والمنطقة الزمنية الموثقة تجعلان الربط ممكنًا."),
    },
    {
      q: l("Which Linux command shows the groups and identifiers of the current user?", "أي أمر في لينكس يعرض مجموعات المستخدم الحالي ومعرّفاته؟"),
      options: [
        l("id", "id"),
        l("chmod", "chmod"),
        l("mount", "mount"),
        l("systemctl restart", "systemctl restart"),
      ],
      answer: 0,
      why: l("The id command displays the real and effective user and group identifiers, including supplementary groups.", "يعرض الأمر id معرّفات المستخدم والمجموعة الحقيقية والفعلية، بما فيها المجموعات الإضافية."),
    },
    {
      q: l("What does a Windows access token contain?", "ماذا يحتوي رمز الوصول في ويندوز؟"),
      options: [
        l("Only the user's display name", "اسم العرض للمستخدم فقط"),
        l("Security identifier, group memberships, integrity level and privileges", "معرّف الأمان وعضويات المجموعات ومستوى السلامة والامتيازات"),
        l("The user's browser history", "سجل تصفح المستخدم"),
        l("The contents of the registry", "محتويات السجل"),
      ],
      answer: 1,
      why: l("The token is the process security context. Authorization decisions use the token rather than the account's friendly name.", "الرمز هو سياق أمان العملية. وتستخدم قرارات التصريح الرمز لا الاسم الودي للحساب."),
    },
    {
      q: l("Which activity is appropriate during a read-only baseline?", "أي نشاط مناسب أثناء خط أساس للقراءة فقط؟"),
      options: [
        l("Disabling services that look unusual", "تعطيل الخدمات التي تبدو غير معتادة"),
        l("Saving command output with timestamps and the command used", "حفظ ناتج الأوامر مع الطوابع الزمنية والأمر المستخدم"),
        l("Changing file permissions to test them", "تغيير صلاحيات الملفات لاختبارها"),
        l("Deleting suspicious startup entries", "حذف مدخلات بدء التشغيل المشبوهة"),
      ],
      answer: 1,
      why: l("A baseline must be reproducible. Record the command and time, and defer changes to an approved process.", "يجب أن يكون خط الأساس قابلًا لإعادة الإنتاج. سجّل الأمر والوقت، وأجّل التغييرات إلى عملية معتمدة."),
    },
    {
      q: l("Why should high-value logs be forwarded to a central collector?", "لماذا ينبغي إرسال السجلات عالية القيمة إلى مجمع مركزي؟"),
      options: [
        l("To make the local disk faster", "لجعل القرص المحلي أسرع"),
        l("Because local logs can be deleted by an attacker with sufficient rights", "لأن السجلات المحلية قد يحذفها مهاجم ذو صلاحيات كافية"),
        l("To avoid synchronizing time", "لتجنب مزامنة الوقت"),
        l("Because Windows cannot store logs", "لأن ويندوز لا يستطيع تخزين السجلات"),
      ],
      answer: 1,
      why: l("Central collection with separate credentials and append-only storage preserves evidence even if the host is compromised.", "الجمع المركزي ببيانات اعتماد منفصلة وتخزين للإضافة فقط يحفظ الأدلة حتى إذا اختُرق المضيف."),
    },
    {
      q: l("A service binary is writable by the Everyone group. What is the main risk?", "الملف التنفيذي لخدمة قابل للكتابة من مجموعة الجميع. ما الخطر الرئيسي؟"),
      options: [
        l("The service will use more memory", "ستستخدم الخدمة ذاكرة أكثر"),
        l("A standard user could replace the binary and gain the service's rights on restart", "قد يستبدل مستخدم عادي الملف التنفيذي ويحصل على صلاحيات الخدمة عند إعادة التشغيل"),
        l("The service will lose its log file", "ستفقد الخدمة ملف سجلها"),
        l("The network will become slower", "ستصبح الشبكة أبطأ"),
      ],
      answer: 1,
      why: l("If a lower-privileged user can modify code that runs under a higher-privileged service, the service becomes a privilege-escalation path.", "إذا استطاع مستخدم أقل صلاحية تعديل شيفرة تعمل تحت خدمة أعلى صلاحية، أصبحت الخدمة مسارًا لرفع الامتيازات."),
    },
  ],
  trueFalse: [
    {
      q: l("A user-mode program can directly modify kernel memory without a system call.", "يستطيع برنامج في وضع المستخدم تعديل ذاكرة النواة مباشرة دون استدعاء نظام."),
      answer: false,
      why: l("The processor prevents user-mode code from accessing kernel memory; a controlled system call is required.", "يمنع المعالج شيفرة وضع المستخدم من الوصول إلى ذاكرة النواة؛ ويلزم استدعاء نظام مضبوط."),
    },
    {
      q: l("A process identifier is a permanent and unique identity for an executable.", "معرّف العملية هوية دائمة وفريدة للملف التنفيذي."),
      answer: false,
      why: l("PIDs are temporary and reused. Use the path, start time, parent and user context for identification.", "معرّفات العمليات مؤقتة ويعاد استخدامها. استخدم المسار ووقت البدء والأب وسياق المستخدم للتعريف."),
    },
    {
      q: l("A service account should have only the rights required by the service's function.", "ينبغي أن يملك حساب الخدمة الصلاحيات التي تتطلبها وظيفة الخدمة فقط."),
      answer: true,
      why: l("Least privilege limits the damage if the service is exploited or misconfigured.", "يحد أقل امتياز من الضرر إذا استُغلت الخدمة أو أُسيء إعدادها."),
    },
    {
      q: l("Secure Boot guarantees that no malware is running after a user logs in.", "يضمن الإقلاع الآمن عدم تشغيل أي برمجية خبيثة بعد تسجيل دخول المستخدم."),
      answer: false,
      why: l("Secure Boot verifies boot components only. Runtime protection requires endpoint controls and monitoring.", "يتحقق الإقلاع الآمن من مكونات الإقلاع فقط. وتتطلب الحماية أثناء التشغيل ضوابط ومراقبة على الأجهزة."),
    },
    {
      q: l("Time synchronization makes it easier to correlate events from different systems.", "تسهّل مزامنة الوقت ربط الأحداث من أنظمة مختلفة."),
      answer: true,
      why: l("Consistent clocks allow investigators to place events in a reliable order.", "تتيح الساعات المتسقة للمحققين ترتيب الأحداث ترتيبًا موثوقًا."),
    },
    {
      q: l("Read-only inspection means the collected output can never contain sensitive data.", "الفحص للقراءة فقط يعني أن الناتج المجموع لا يمكن أن يحتوي بيانات حساسة."),
      answer: false,
      why: l("Process lists, command lines and logs may contain personal or confidential data and must be handled securely.", "قد تحتوي قوائم العمليات وسطور الأوامر والسجلات بيانات شخصية أو سرية ويجب التعامل معها بأمان."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each component as kernel mode or user mode.", "صنّف كل مكون كوضع نواة أو وضع مستخدم."),
      categories: [
        l("Kernel mode", "وضع النواة"),
        l("User mode", "وضع المستخدم"),
      ],
      items: [
        { text: l("A device driver", "برنامج تشغيل جهاز"), answer: 0 },
        { text: l("A web browser", "متصفح ويب"), answer: 1 },
        { text: l("The memory manager", "مدير الذاكرة"), answer: 0 },
        { text: l("A spreadsheet application", "تطبيق جدول بيانات"), answer: 1 },
        { text: l("The system call handler", "معالج استدعاءات النظام"), answer: 0 },
      ],
      why: l("Drivers and core memory functions run with kernel privilege; ordinary applications run in user mode.", "تعمل برامج التشغيل ووظائف الذاكرة الأساسية بامتياز النواة؛ والتطبيقات العادية تعمل في وضع المستخدم."),
    },
    {
      prompt: l("Classify each action as read-only, a change or unsafe for this lab.", "صنّف كل إجراء كقراءة فقط أو تغيير أو غير آمن لهذا المختبر."),
      categories: [
        l("Read-only", "قراءة فقط"),
        l("Change", "تغيير"),
        l("Unsafe", "غير آمن"),
      ],
      items: [
        { text: l("Running whoami /all", "تشغيل whoami /all"), answer: 0 },
        { text: l("Restarting a service to see what happens", "إعادة تشغيل خدمة لرؤية ما يحدث"), answer: 1 },
        { text: l("Scanning the office network", "مسح شبكة المكتب"), answer: 2 },
        { text: l("Reading recent authentication events", "قراءة أحداث المصادقة الأخيرة"), answer: 0 },
        { text: l("Disabling the firewall for troubleshooting", "تعطيل الجدار الناري لاستكشاف الأخطاء"), answer: 2 },
      ],
      why: l("The baseline permits observation only. Changes require approval, and scanning or disabling controls exceeds the authorized scope.", "يسمح خط الأساس بالملاحظة فقط. وتتطلب التغييرات موافقة، أما المسح أو تعطيل الضوابط فيتجاوز النطاق المصرح به."),
    },
    {
      prompt: l("Classify each log source as authentication, system/service or security auditing.", "صنّف كل مصدر سجل كمصادقة أو نظام وخدمات أو تدقيق أمني."),
      categories: [
        l("Authentication", "المصادقة"),
        l("System or service", "النظام أو الخدمة"),
        l("Security auditing", "التدقيق الأمني"),
      ],
      items: [
        { text: l("Linux /var/log/auth.log", "ملف /var/log/auth.log في لينكس"), answer: 0 },
        { text: l("The systemd journal", "سجل systemd"), answer: 1 },
        { text: l("Windows Security log", "سجل الأمان في ويندوز"), answer: 2 },
        { text: l("Windows System log", "سجل النظام في ويندوز"), answer: 1 },
        { text: l("Linux audit records for command execution", "سجلات تدقيق لينكس لتنفيذ الأوامر"), answer: 2 },
      ],
      why: l("The source determines what evidence it can provide and how long it is retained.", "يحدد المصدر نوع الدليل الذي يقدمه ومدة الاحتفاظ به."),
    },
    {
      prompt: l("Classify each identity as standard user, administrator or service account.", "صنّف كل هوية كمستخدم عادي أو مسؤول أو حساب خدمة."),
      categories: [
        l("Standard user", "مستخدم عادي"),
        l("Administrator", "مسؤول"),
        l("Service account", "حساب خدمة"),
      ],
      items: [
        { text: l("A help-desk employee who uses email and finance applications", "موظف دعم يستخدم البريد وتطبيقات المالية"), answer: 0 },
        { text: l("A dedicated account used only by the backup agent", "حساب مخصص يستخدمه وكيل النسخ الاحتياطي فقط"), answer: 2 },
        { text: l("A named account used only for server administration", "حساب مسمى يستخدم لإدارة الخوادم فقط"), answer: 1 },
        { text: l("The account running a web server process", "الحساب الذي يشغّل عملية خادم الويب"), answer: 2 },
      ],
      why: l("Separating daily, administrative and service identities limits the reach of any single compromised credential.", "فصل الهويات اليومية والإدارية والخدمية يحد من وصول أي بيانات اعتماد مخترقة واحدة."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A web server runs under the root account because the previous administrator found it easier. A vulnerability in the web application lets an attacker run commands. The attacker reads configuration files and attempts to disable the endpoint agent.",
        "خادم ويب يعمل بحساب المستخدم الأعلى لأن المسؤول السابق وجد ذلك أسهل. وتتيح ثغرة في تطبيق الويب للمهاجم تشغيل أوامر. فيقرأ المهاجم ملفات الإعداد ويحاول تعطيل وكيل الأجهزة.",
      ),
      question: l("Which change would most reduce the impact of the same vulnerability?", "أي تغيير يقلل أكثر من أثر الثغرة نفسها؟"),
      options: [
        l("Giving the service a larger memory limit", "منح الخدمة حد ذاكرة أكبر"),
        l("Running the service under a dedicated unprivileged account", "تشغيل الخدمة بحساب مخصص بلا امتياز"),
        l("Disabling application logging", "تعطيل تسجيل التطبيق"),
        l("Renaming the server", "إعادة تسمية الخادم"),
      ],
      answer: 1,
      why: l("Least privilege would limit the files and actions available to the attacker who exploits the web application.", "يحد أقل امتياز من الملفات والإجراءات المتاحة للمهاجم الذي يستغل تطبيق الويب."),
    },
    {
      scenario: l(
        "A workstation has an unknown service that starts automatically as LocalSystem. Its binary is stored in a folder that all domain users can modify. The service works normally, so nobody has investigated it.",
        "محطة عمل بها خدمة مجهولة تبدأ تلقائيًا بحساب النظام المحلي. وملفها التنفيذي مخزن في مجلد يستطيع جميع مستخدمي النطاق تعديله. والخدمة تعمل بشكل طبيعي، لذا لم يحقق فيها أحد.",
      ),
      question: l("What is the most serious finding?", "ما أخطر ملاحظة؟"),
      options: [
        l("The service starts automatically", "الخدمة تبدأ تلقائيًا"),
        l("The binary is writable by ordinary users and runs with high privilege", "الملف التنفيذي قابل للكتابة بواسطة مستخدمين عاديين ويعمل بامتياز عال"),
        l("The service has no description", "لا يوجد وصف للخدمة"),
        l("The workstation is a laptop", "محطة العمل حاسوب محمول"),
      ],
      answer: 1,
      why: l("A writable binary executed under LocalSystem is a direct privilege-escalation path, even if the service currently behaves normally.", "الملف التنفيذي القابل للكتابة والذي يُنفَّذ بحساب النظام المحلي مسار مباشر لرفع الامتيازات، حتى لو كانت الخدمة تتصرف طبيعيًا حاليًا."),
    },
    {
      scenario: l(
        "After a suspected intrusion, an analyst finds that the workstation clock is 37 minutes behind the server clock and that authentication logging was disabled three weeks earlier. The user insists they saw a suspicious login.",
        "بعد اختراق مشتبه به، يجد محلل أن ساعة محطة العمل متأخرة 37 دقيقة عن ساعة الخادم وأن تسجيل المصادقة كان معطلًا منذ ثلاثة أسابيع. ويؤكد المستخدم أنه رأى دخولًا مشبوهًا.",
      ),
      question: l("What is the most defensible next step?", "ما الخطوة التالية الأكثر قابلية للدفاع؟"),
      options: [
        l("Declare that no intrusion occurred because there are no logs", "إعلان عدم حدوث اختراق لعدم وجود سجلات"),
        l("Record the evidence gaps, preserve available sources and reconstruct the timeline with explicit uncertainty", "تسجيل فجوات الأدلة وحفظ المصادر المتاحة وإعادة بناء الخط الزمني مع عدم يقين صريح"),
        l("Change the clock and continue as normal", "تغيير الساعة والاستمرار بشكل طبيعي"),
        l("Delete the user's account immediately", "حذف حساب المستخدم فورًا"),
      ],
      answer: 1,
      why: l("Missing and inconsistent evidence must be documented rather than hidden. Preserve what exists and state uncertainty explicitly.", "يجب توثيق الأدلة الناقصة وغير المتسقة لا إخفاؤها. احفظ ما هو موجود واذكر عدم اليقين صراحة."),
    },
  ],
  practicalChecks: [
    {
      task: l(
        "On a system you own, run whoami /all on Windows or id on Linux. Identify whether your current session is elevated, list two privileged groups or capabilities and state one action you should not perform in this session.",
        "على نظام تملكه، شغّل whoami /all في ويندوز أو id في لينكس. وحدد هل جلستك الحالية مرفوعة، واسرد مجموعتين مميزتين أو قدرتين، واذكر إجراءً واحدًا لا ينبغي القيام به في هذه الجلسة.",
      ),
      expected: l(
        "A correct statement of elevation state, two actual groups or capabilities from the output and a prohibited action justified by least privilege.",
        "بيان صحيح لحالة رفع الصلاحية، ومجموعتان أو قدرتان فعليتان من الناتج، وإجراء محظور مبرر بأقل امتياز.",
      ),
      hint: l("Look for administrator or sudo-related groups and compare them with your daily tasks.", "ابحث عن المجموعات المرتبطة بالمسؤول أو sudo وقارنها بمهامك اليومية."),
    },
    {
      task: l(
        "List three services on your system. For each, record the executable path, the account it runs as and whether an ordinary user can modify the executable or its configuration. Rank the three by risk and justify the ranking.",
        "اسرد ثلاث خدمات على نظامك. ولكل واحدة، سجّل مسار الملف التنفيذي والحساب الذي تعمل به وهل يستطيع مستخدم عادي تعديل الملف التنفيذي أو إعداداته. ورتب الخدمات الثلاث حسب الخطورة وبرر الترتيب.",
      ),
      expected: l(
        "A three-row table with paths, identities and write-access findings, plus a risk ranking based on privilege and modifiability rather than service names.",
        "جدول من ثلاثة صفوف بالمسارات والهويات ونتائج وصول الكتابة، مع ترتيب مخاطر قائم على الامتياز وقابلية التعديل لا أسماء الخدمات.",
      ),
      hint: l("The highest risk combines a high-privilege identity with a writable binary or configuration path.", "أعلى خطر يجمع هوية عالية الامتياز مع ملف تنفيذي أو مسار إعدادات قابل للكتابة."),
    },
  ],
  homework: {
    title: l("Homework 4 — Document your own system baseline", "الواجب 4 — وثّق خط أساس نظامك"),
    tasks: [
      l("Create a one-page inventory of your operating system, patch level, disk encryption, firewall and antivirus status.", "أنشئ جردًا من صفحة واحدة لنظام التشغيل ومستوى التحديث وتشفير القرص والجدار الناري وحالة مكافحة الفيروسات."),
      l("List the accounts on the device, mark administrators and identify any unused account that should be reviewed.", "اسرد الحسابات على الجهاز، وحدد المسؤولين، واذكر أي حساب غير مستخدم ينبغي مراجعته."),
      l("Record five startup items and five services with their paths and identities; flag anything you cannot explain.", "سجّل خمسة عناصر بدء تشغيل وخمس خدمات بمساراتها وهوياتها؛ وعلّم أي شيء لا تستطيع تفسيره."),
      l("Check whether authentication logging is enabled, where logs are stored and whether the clock is synchronized.", "تحقق من تفعيل تسجيل المصادقة ومكان تخزين السجلات ومزامنة الساعة."),
      l("Write three recommendations that would reduce risk without breaking your daily work, each with an owner and an approval step.", "اكتب ثلاث توصيات تقلل المخاطر دون تعطيل عملك اليومي، لكل منها مالك وخطوة موافقة."),
      l("Test one backup or restore step on a harmless file and record the result and the time it took.", "اختبر خطوة نسخ احتياطي أو استعادة واحدة على ملف غير ضار، وسجّل النتيجة والوقت المستغرق."),
    ],
    deliverable: l(
      "A two-page baseline report with an inventory table, five startup items, five services, log and time findings, three approval-based recommendations and one restore-test result.",
      "تقرير خط أساس من صفحتين بجدول جرد وخمسة عناصر بدء تشغيل وخمس خدمات ونتائج السجلات والوقت وثلاث توصيات قائمة على الموافقة ونتيجة اختبار استعادة واحدة.",
    ),
    criteria: [
      l("The inventory is specific, timestamped and reproducible.", "الجرد محدد وموقّت وقابل لإعادة الإنتاج."),
      l("Facts and hypotheses are clearly separated.", "الحقائق والفرضيات مفصولة بوضوح."),
      l("Recommendations address the observed risks and include owners.", "تعالج التوصيات المخاطر المرصودة وتشمل مالكين."),
      l("The restore test is real and its limitations are stated.", "اختبار الاستعادة حقيقي وقيوده مذكورة."),
      l("No unauthorized changes were made during data collection.", "لم تُجر أي تغييرات غير مصرح بها أثناء جمع البيانات."),
    ],
    challenge: l(
      "Add a comparison between your baseline and a vendor or organizational reference configuration, and explain each difference as expected, risky or unknown.",
      "أضف مقارنة بين خط أساسك وتكوين مرجعي من المورّد أو المؤسسة، واشرح كل اختلاف كمتوقع أو خطير أو مجهول.",
    ),
  },
  refs: [
    {
      title: "Windows security documentation",
      org: "Microsoft",
      url: "https://learn.microsoft.com/en-us/windows/security/",
      desc: l("Official guidance on Windows security features, identity, auditing and hardening.", "إرشادات رسمية حول ميزات أمن ويندوز والهوية والتدقيق والتحصين."),
    },
    {
      title: "The Linux Kernel documentation",
      org: "The Linux Kernel Project",
      url: "https://docs.kernel.org/",
      desc: l("Primary documentation for kernel subsystems, memory management, drivers and security features.", "الوثائق الأساسية لوحدات النواة وإدارة الذاكرة وبرامج التشغيل وميزات الأمن."),
    },
    {
      title: "systemd documentation",
      org: "systemd project",
      url: "https://www.freedesktop.org/software/systemd/man/latest/systemd.html",
      desc: l("Reference for units, services, targets and the init system.", "مرجع للوحدات والخدمات والأهداف ونظام التهيئة."),
    },
    {
      title: "Guide to General Server Security (SP 800-123)",
      org: "NIST",
      url: "https://csrc.nist.gov/pubs/sp/800/123/final",
      desc: l("NIST guidance on securing general-purpose servers, including patching, accounts and logging.", "إرشادات NIST لتأمين الخوادم العامة، بما فيها التحديث والحسابات والتسجيل."),
    },
    {
      title: "CIS Benchmarks",
      org: "Center for Internet Security",
      url: "https://www.cisecurity.org/cis-benchmarks",
      desc: l("Consensus-based configuration benchmarks for operating systems and applications.", "معايير إعداد قائمة على التوافق لأنظمة التشغيل والتطبيقات."),
    },
    {
      title: "Device security guidance",
      org: "NCSC UK",
      url: "https://www.ncsc.gov.uk/collection/device-security-guidance",
      desc: l("Practical guidance for securing laptops, desktops and mobile devices.", "إرشادات عملية لتأمين الحواسيب المحمولة والمكتبية والأجهزة المحمولة."),
    },
    {
      title: "Sysinternals",
      org: "Microsoft",
      url: "https://learn.microsoft.com/en-us/sysinternals/",
      desc: l("Advanced Windows utilities for process, service, startup and log analysis.", "أدوات ويندوز متقدمة لتحليل العمليات والخدمات وبدء التشغيل والسجلات."),
    },
  ],
  terms: [
    {
      term: l("Operating system", "نظام التشغيل"),
      def: l("The software layer that manages hardware and mediates access for applications.", "طبقة البرمجيات التي تدير العتاد وتتوسط في الوصول للتطبيقات."),
      example: l("Windows, Linux and macOS are operating systems.", "ويندوز ولينكس وماك هي أنظمة تشغيل."),
    },
    {
      term: l("Kernel", "النواة"),
      def: l("The privileged core that schedules work, manages memory and enforces access rules.", "القلب المميز الذي يجدول العمل ويدير الذاكرة وينفذ قواعد الوصول."),
      example: l("A kernel panic stops the whole system.", "توقف النواة يوقف النظام كله."),
    },
    {
      term: l("User space", "فضاء المستخدم"),
      def: l("The restricted environment where ordinary applications run.", "البيئة المقيدة التي تعمل فيها التطبيقات العادية."),
      example: l("A browser runs in user space and requests files through system calls.", "يعمل المتصفح في فضاء المستخدم ويطلب الملفات عبر استدعاءات النظام."),
    },
    {
      term: l("System call", "استدعاء النظام"),
      def: l("A controlled request from a user-mode program to the kernel.", "طلب مضبوط من برنامج في وضع المستخدم إلى النواة."),
      example: l("Opening a file requires an open system call.", "يتطلب فتح ملف استدعاء نظام للفتح."),
    },
    {
      term: l("Process", "العملية"),
      def: l("A running program with its own address space and security context.", "برنامج جارٍ له مساحة عناوين وسياق أمني خاصان."),
      example: l("Each browser tab may run in a separate process.", "قد يعمل كل تبويب متصفح في عملية منفصلة."),
    },
    {
      term: l("Thread", "الخيط"),
      def: l("The unit of execution scheduled inside a process; threads share memory.", "وحدة التنفيذ المجدولة داخل العملية؛ وتتشارك الخيوط الذاكرة."),
      example: l("A web server uses a thread pool to handle requests.", "يستخدم خادم ويب مجموعة خيوط لمعالجة الطلبات."),
    },
    {
      term: l("Process identifier (PID)", "معرّف العملية"),
      def: l("A temporary numeric identifier assigned to a running process.", "معرّف رقمي مؤقت يُمنح لعملية جارية."),
      example: l("The PID can be reused after the process exits.", "يمكن إعادة استخدام المعرّف بعد انتهاء العملية."),
    },
    {
      term: l("Process tree", "شجرة العمليات"),
      def: l("The parent-child relationships between running processes.", "علاقات الأب بالابن بين العمليات الجارية."),
      example: l("An office application spawning a shell is visible in the tree.", "يظهر في الشجرة تطبيق مكتبي يبدأ صدفة أوامر."),
    },
    {
      term: l("Service", "الخدمة"),
      def: l("A long-running background program managed by the operating system.", "برنامج خلفي طويل التشغيل يديره نظام التشغيل."),
      example: l("A database engine runs as a service.", "يعمل محرك قواعد البيانات كخدمة."),
    },
    {
      term: l("Daemon", "البرنامج الخدمي"),
      def: l("The Unix term for a background service without an interactive terminal.", "مصطلح يونكس لخدمة خلفية بلا طرفية تفاعلية."),
      example: l("The SSH daemon accepts remote login connections.", "يقبل برنامج SSH الخدمي اتصالات الدخول البعيد."),
    },
    {
      term: l("Driver", "برنامج التشغيل"),
      def: l("Kernel-mode code that controls a hardware device or provides a system interface.", "شيفرة في وضع النواة تتحكم بجهاز عتاد أو توفر واجهة نظام."),
      example: l("A graphics driver translates commands for the GPU.", "يترجم برنامج تشغيل الرسومات الأوامر لمعالج الرسومات."),
    },
    {
      term: l("Service account", "حساب الخدمة"),
      def: l("A dedicated identity used by a service rather than by a person.", "هوية مخصصة تستخدمها خدمة لا شخص."),
      example: l("The backup agent uses a service account with read access to backup paths.", "يستخدم وكيل النسخ الاحتياطي حساب خدمة بوصول قراءة إلى مسارات النسخ."),
    },
    {
      term: l("UID and GID", "معرّف المستخدم والمجموعة"),
      def: l("Numeric identifiers for a Linux user and group.", "معرّفات رقمية لمستخدم ومجموعة في لينكس."),
      example: l("UID 0 is the root account.", "المعرّف 0 هو حساب المستخدم الأعلى."),
    },
    {
      term: l("Security identifier (SID)", "معرّف الأمان"),
      def: l("A Windows identifier for a user, group or other security principal.", "معرّف في ويندوز لمستخدم أو مجموعة أو كيان أمني آخر."),
      example: l("Group membership is recorded using SIDs.", "تُسجل عضوية المجموعات باستخدام معرّفات الأمان."),
    },
    {
      term: l("Access token", "رمز الوصول"),
      def: l("The Windows structure that carries a process's identity, groups, integrity level and privileges.", "بنية ويندوز التي تحمل هوية العملية ومجموعاتها ومستوى سلامتها وامتيازاتها."),
      example: l("An elevated process has a different token from a standard process.", "لعملية مرفوعة رمز مختلف عن عملية عادية."),
    },
    {
      term: l("Privilege", "الامتياز"),
      def: l("A specific right to perform a sensitive system action.", "حق محدد لتنفيذ إجراء نظامي حساس."),
      example: l("The right to load a driver is a powerful privilege.", "حق تحميل برنامج تشغيل امتياز قوي."),
    },
    {
      term: l("User Account Control (UAC)", "التحكم بحساب المستخدم"),
      def: l("The Windows mechanism that requests consent or credentials before elevation.", "آلية ويندوز التي تطلب الموافقة أو بيانات الاعتماد قبل رفع الصلاحية."),
      example: l("UAC prompts before an installer changes system files.", "يظهر طلب التحكم قبل أن يغيّر المثبت ملفات النظام."),
    },
    {
      term: l("sudo", "سودو"),
      def: l("A Linux command that runs a single command with another user's rights under a policy.", "أمر في لينكس يشغّل أمرًا واحدًا بصلاحيات مستخدم آخر وفق سياسة."),
      example: l("sudo systemctl restart sshd restarts the SSH service.", "يعيد الأمر sudo systemctl restart sshd تشغيل خدمة SSH."),
    },
    {
      term: l("Boot chain", "سلسلة الإقلاع"),
      def: l("The sequence from firmware to bootloader, kernel, init system and user services.", "التسلسل من البرمجية الثابتة إلى محمّل الإقلاع والنواة ونظام التهيئة وخدمات المستخدم."),
      example: l("A tampered bootloader can undermine later security controls.", "قد يقوّض محمّل الإقلاع المعبوث به الضوابط الأمنية اللاحقة."),
    },
    {
      term: l("Secure Boot", "الإقلاع الآمن"),
      def: l("A firmware feature that verifies signatures of boot components before execution.", "ميزة في البرمجية الثابتة تتحقق من تواقيع مكونات الإقلاع قبل تنفيذها."),
      example: l("Secure Boot blocks an unsigned bootloader.", "يحجب الإقلاع الآمن محمّل إقلاع غير موقّع."),
    },
    {
      term: l("Trusted Platform Module (TPM)", "وحدة المنصة الموثوقة"),
      def: l("A hardware component that stores keys and records integrity measurements.", "مكون عتادي يخزن المفاتيح ويسجل قياسات السلامة."),
      example: l("A TPM can seal a disk-encryption key to a verified boot state.", "يمكن لوحدة المنصة الموثوقة ربط مفتاح تشفير القرص بحالة إقلاع متحقق منها."),
    },
    {
      term: l("Init system", "نظام التهيئة"),
      def: l("The first user-space process that starts and manages services.", "أول عملية في فضاء المستخدم تبدأ الخدمات وتديرها."),
      example: l("systemd is a common init system on Linux.", "systemd نظام تهيئة شائع في لينكس."),
    },
    {
      term: l("Unit file", "ملف الوحدة"),
      def: l("A systemd configuration file describing a service, socket, timer or target.", "ملف إعدادات في systemd يصف خدمة أو مقبسًا أو مؤقتًا أو هدفًا."),
      example: l("The unit file names the executable and the service account.", "يحدد ملف الوحدة الملف التنفيذي وحساب الخدمة."),
    },
    {
      term: l("Event log", "سجل الأحداث"),
      def: l("A structured record of system, application or security events.", "سجل منظم لأحداث النظام أو التطبيقات أو الأمان."),
      example: l("The Windows Security log records logon events when auditing is enabled.", "يسجل سجل الأمان في ويندوز أحداث الدخول عند تفعيل التدقيق."),
    },
    {
      term: l("Audit trail", "أثر التدقيق"),
      def: l("A chronological record that allows actions to be attributed and reviewed.", "سجل زمني يتيح نسب الإجراءات ومراجعتها."),
      example: l("An audit trail links a change to a user, a time and a process.", "يربط أثر التدقيق تغييرًا بمستخدم ووقت وعملية."),
    },
    {
      term: l("Network Time Protocol (NTP)", "بروتوكول وقت الشبكة"),
      def: l("A protocol that synchronizes computer clocks to a reference time source.", "بروتوكول يزامن ساعات الحواسيب مع مصدر وقت مرجعي."),
      example: l("NTP keeps workstation and server logs aligned.", "يبقي بروتوكول وقت الشبكة سجلات محطات العمل والخوادم متوافقة."),
    },
  ],
};
