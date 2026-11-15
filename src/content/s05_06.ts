import { l, type Session } from "./types";

export const s05: Session = {
  id: 5,
  phase: 2,
  minutes: 65,
  title: l("Operating Systems for Security: Windows and Linux", "أنظمة التشغيل للأمن: ويندوز ولينكس"),
  summary: l(
    "How operating systems separate users, processes and files; how permissions work on Linux and Windows; and the first hardening steps every system needs.",
    "كيف تفصل أنظمة التشغيل بين المستخدمين والعمليات والملفات؛ وكيف تعمل الصلاحيات في لينكس وويندوز؛ وخطوات التحصين الأولى التي يحتاجها كل نظام."
  ),
  objectives: [
    l("Explain kernel space vs user space, processes, services and drivers.", "شرح فضاء النواة مقابل فضاء المستخدم، والعمليات والخدمات وبرامج التشغيل."),
    l("Read and set Linux file permissions (rwx, octal) and understand Windows NTFS permissions.", "قراءة وضبط صلاحيات ملفات لينكس (rwx والثماني) وفهم صلاحيات NTFS في ويندوز."),
    l("Recognise privileged accounts (root, Administrator) and why they must be limited.", "التعرف على الحسابات ذات الامتياز (root وAdministrator) ولماذا يجب تقييدها."),
    l("Apply baseline hardening and know where each system keeps its logs.", "تطبيق التحصين الأساسي ومعرفة أين يحفظ كل نظام سجلاته."),
  ],
  sections: [
    {
      h: l("1. What an operating system does for security", "1. ما الذي يقدمه نظام التشغيل للأمن"),
      p: [
        l("The operating system (OS) manages hardware and gives programs a controlled environment. Its security role is isolation and mediation: the kernel runs in a privileged mode and decides which process may read which file, open which network port, or touch which device. Ordinary programs run in user space with limited rights and must ask the kernel for anything sensitive.", "يدير نظام التشغيل العتاد ويمنح البرامج بيئة مضبوطة. ودوره الأمني هو العزل والوساطة: تعمل النواة بوضع ممتاز وتقرر أي عملية تقرأ أي ملف أو تفتح أي منفذ شبكة أو تلمس أي جهاز. أما البرامج العادية فتعمل في فضاء المستخدم بصلاحيات محدودة وتطلب من النواة كل ما هو حساس."),
        l("Key building blocks: processes (running programs), services/daemons (background programs such as a web server), drivers (code that talks to hardware, running with high privilege), users and groups (identities that own files and processes), and the file system (where data and configuration live). Attackers target each: malicious processes, vulnerable services, signed-but-flawed drivers, over-privileged accounts, and writable configuration files.", "اللبنات الأساسية: العمليات (البرامج الجارية)، والخدمات (برامج الخلفية مثل خادم الويب)، وبرامج التشغيل (شيفرة تتحدث مع العتاد وتعمل بامتياز عال)، والمستخدمون والمجموعات (هويات تملك الملفات والعمليات)، ونظام الملفات (حيث توجد البيانات والإعدادات). ويستهدف المهاجمون كلًا منها: عمليات خبيثة وخدمات ضعيفة وبرامج تشغيل موقّعة لكن معيبة وحسابات مفرطة الصلاحية وملفات إعداد قابلة للكتابة."),
      ],
      table: {
        head: [l("Topic", "الموضوع"), l("Linux", "لينكس"), l("Windows", "ويندوز")],
        rows: [
          [l("Superuser", "المستخدم الأعلى"), l("root (UID 0); use sudo for single tasks", "root (UID 0)؛ استخدم sudo لمهمة واحدة"), l("Administrator / SYSTEM; use UAC prompts", "Administrator / SYSTEM؛ استخدم نوافذ UAC")],
          [l("File permissions", "صلاحيات الملفات"), l("owner/group/others × read/write/execute", "مالك/مجموعة/آخرون × قراءة/كتابة/تنفيذ"), l("NTFS ACLs: Full control, Modify, Read & execute, Read, Write", "قوائم NTFS: تحكم كامل، تعديل، قراءة وتنفيذ، قراءة، كتابة")],
          [l("Services", "الخدمات"), l("systemd units (systemctl status ssh)", "وحدات systemd (systemctl status ssh)"), l("Services console, sc query, PowerShell Get-Service", "وحدة الخدمات، sc query، Get-Service")],
          [l("Configuration", "الإعدادات"), l("Text files in /etc", "ملفات نصية في /etc"), l("Registry and Group Policy", "السجل (Registry) وسياسة المجموعة")],
          [l("Main logs", "السجلات الرئيسية"), l("/var/log/auth.log (or secure), journalctl", "/var/log/auth.log (أو secure)، journalctl"), l("Event Viewer: Security, System, Application", "عارض الأحداث: الأمان والنظام والتطبيق")],
          [l("Users database", "قاعدة المستخدمين"), l("/etc/passwd, /etc/shadow (hashes)", "/etc/passwd و/etc/shadow (التجزئات)"), l("SAM / Active Directory", "SAM / أكتيف دايركتوري")],
        ],
      },
    },
    {
      h: l("2. Linux file permissions", "2. صلاحيات ملفات لينكس"),
      p: [
        l("Every Linux file has an owner, a group and three permission sets: for the owner, for the group and for everyone else (others). Each set has read (r = 4), write (w = 2) and execute (x = 1). The command ls -l shows them, for example -rw-r----- means the owner can read and write, the group can read, others have no access. The same permission in octal is 640 (6 = 4+2, 4 = 4, 0 = 0), set with chmod 640 report.txt.", "لكل ملف في لينكس مالك ومجموعة وثلاث مجموعات صلاحيات: للمالك وللمجموعة ولبقية الناس (الآخرين). وفي كل مجموعة قراءة (r = 4) وكتابة (w = 2) وتنفيذ (x = 1). يعرضها الأمر ls -l، فمثلًا -rw-r----- تعني أن المالك يقرأ ويكتب والمجموعة تقرأ والآخرين لا وصول لهم. ومكافئها الثماني 640 (6 = 4+2، 4 = 4، 0 = 0) وتُضبط بـ chmod 640 report.txt."),
        l("Dangerous patterns include world-writable files (any user can change them – 666/777), SUID programs owned by root that can be abused for privilege escalation, private keys readable by others (SSH refuses keys with loose permissions), and scripts run by root that ordinary users can edit.", "من الأنماط الخطرة: ملفات قابلة للكتابة من الجميع (666/777)، وبرامج SUID المملوكة لـ root التي قد تُساء استخدامها لرفع الصلاحيات، ومفاتيح خاصة مقروءة للآخرين (يرفض SSH المفاتيح ذات الصلاحيات الواسعة)، وسكربتات يشغلها root ويستطيع المستخدمون العاديون تعديلها."),
      ],
      callout: { kind: "tip", text: l("Safe, read-only commands to explore your own Linux system: whoami, id, ls -l, ps aux, ss -tulpn (listening ports), last (login history). Use them only on systems you own or administer.", "أوامر آمنة للقراءة فقط لاستكشاف نظام لينكس الخاص بك: whoami وid وls -l وps aux وss -tulpn (المنافذ المنصتة) وlast (سجل الدخول). استخدمها فقط على أنظمة تملكها أو تديرها.") },
    },
    {
      h: l("3. Windows security basics", "3. أساسيات أمن ويندوز"),
      p: [
        l("Windows uses accounts and groups (Users, Administrators), NTFS permissions on files and folders, and User Account Control (UAC) which asks for elevation before administrative actions. In companies, Active Directory and Group Policy centrally manage accounts, password rules, firewall settings and software restrictions. Everyday users should never work as local administrators: malware that runs with a standard user token cannot change system files or disable protections as easily.", "يستخدم ويندوز حسابات ومجموعات (Users وAdministrators) وصلاحيات NTFS على الملفات والمجلدات، والتحكم بحساب المستخدم (UAC) الذي يطلب رفع الصلاحية قبل الإجراءات الإدارية. وفي الشركات يدير أكتيف دايركتوري وسياسة المجموعة الحسابات وقواعد كلمات المرور وإعدادات الجدار الناري وقيود البرمجيات مركزيًا. ولا ينبغي للمستخدمين العاديين العمل بحساب مدير محلي: فالبرمجية الخبيثة التي تعمل برمز مستخدم عادي لا تستطيع تغيير ملفات النظام أو تعطيل الحمايات بسهولة."),
        l("Built-in protections to enable and keep on: Windows Security (Defender) real-time protection, SmartScreen, the Windows Firewall, BitLocker disk encryption, automatic updates, and Secure Boot. Review installed programs and startup items occasionally to find anything unknown.", "حمايات مدمجة يجب تفعيلها وإبقاؤها: حماية Windows Security (Defender) الفورية وSmartScreen وجدار ويندوز الناري وتشفير القرص BitLocker والتحديثات التلقائية والإقلاع الآمن. وراجع البرامج المثبتة وعناصر بدء التشغيل من حين لآخر لاكتشاف أي شيء مجهول."),
      ],
    },
    {
      h: l("4. Baseline hardening checklist", "4. قائمة التحصين الأساسية"),
      p: [l("Hardening means reducing the attack surface of a system so it is secure by default. A solid baseline applies to either OS:", "التحصين يعني تقليل سطح الهجوم لنظام ليكون آمنًا افتراضيًا. وتنطبق قاعدة أساسية جيدة على أي نظام:")],
      bullets: [
        l("Patch the OS and applications automatically; retire unsupported versions.", "حدّث النظام والتطبيقات تلقائيًا؛ وتخلَّ عن النسخ غير المدعومة."),
        l("Use a standard account daily; elevate only when needed (sudo / UAC).", "استخدم حسابًا عاديًا يوميًا؛ وارفع الصلاحية عند الحاجة فقط (sudo / UAC)."),
        l("Remove or disable unused accounts, default passwords, services and software.", "احذف أو عطّل الحسابات وكلمات المرور الافتراضية والخدمات والبرامج غير المستخدمة."),
        l("Enable the host firewall and allow only needed inbound ports.", "فعّل جدار الجهاز الناري واسمح بالمنافذ الواردة اللازمة فقط."),
        l("Encrypt disks (BitLocker / LUKS) especially on laptops.", "شفّر الأقراص (BitLocker / LUKS) خاصة في الحواسيب المحمولة."),
        l("Turn on logging and send logs to a central place; synchronise the clock (NTP) so events line up.", "فعّل التسجيل وأرسل السجلات إلى مكان مركزي، وزامن الساعة (NTP) لتتسق الأحداث."),
        l("Back up and test restores.", "انسخ احتياطيًا واختبر الاستعادة."),
      ],
      callout: { kind: "key", text: l("Benchmarks such as the CIS Benchmarks turn these ideas into detailed, vendor-neutral checklists you can audit against.", "تحوّل معايير مثل CIS Benchmarks هذه الأفكار إلى قوائم تفصيلية محايدة للمورّدين يمكن التدقيق عليها.") },
    },
  ],
  diagram: {
    kind: "layers",
    title: l("Inside an operating system – where security decisions are made", "داخل نظام التشغيل – حيث تُتخذ القرارات الأمنية"),
    caption: l("Applications cannot touch hardware directly. Every sensitive request passes through the kernel, which checks identity and permissions.", "لا تستطيع التطبيقات لمس العتاد مباشرة. يمر كل طلب حساس عبر النواة التي تفحص الهوية والصلاحيات."),
    nodes: [
      { label: l("Users & applications (user space)", "المستخدمون والتطبيقات (فضاء المستخدم)"), desc: l("Limited rights, isolated processes", "صلاحيات محدودة وعمليات معزولة") },
      { label: l("System services & daemons", "خدمات النظام"), desc: l("Web server, SSH, update service", "خادم ويب، SSH، خدمة التحديث") },
      { label: l("Kernel – access control & scheduling", "النواة – التحكم بالوصول والجدولة"), desc: l("Checks identity and permissions on every request", "تفحص الهوية والصلاحيات في كل طلب") },
      { label: l("Drivers", "برامج التشغيل"), desc: l("High privilege – keep updated and trusted", "امتياز عال – أبقها محدّثة وموثوقة") },
      { label: l("Firmware & hardware", "البرمجية الثابتة والعتاد"), desc: l("Secure Boot, TPM, disk encryption", "الإقلاع الآمن، TPM، تشفير القرص") },
    ],
  },
  lab: {
    tool: "perm",
    title: l("Lab 5 – Permissions workshop", "المختبر 5 – ورشة الصلاحيات"),
    scenario: l("You administer a small Linux file server. Management wants a payroll file readable only by the finance group, a shared policy document readable by all staff but editable only by its owner, and a deployment script that only its owner can run.", "تدير خادم ملفات لينكس صغيرًا. تريد الإدارة ملف رواتب تقرؤه مجموعة المالية فقط، ووثيقة سياسة مشتركة يقرؤها جميع الموظفين ويعدّلها مالكها وحده، وسكربت نشر لا يشغّله إلا مالكه."),
    safety: l("Practise permission commands only in a test directory or virtual machine you own. Never run chmod -R 777 on system folders – it removes protection and can break the system.", "تدرّب على أوامر الصلاحيات فقط في مجلد اختبار أو جهاز افتراضي تملكه. لا تنفذ chmod -R 777 على مجلدات النظام فهو يزيل الحماية وقد يعطل النظام."),
    steps: [
      l("Payroll file: set owner = read/write, group = read, others = none and note the octal result (640).", "ملف الرواتب: المالك قراءة/كتابة، المجموعة قراءة، الآخرون لا شيء، ودوّن الناتج الثماني (640)."),
      l("Policy document: owner read/write, group and others read-only. Note the octal (644).", "وثيقة السياسة: المالك قراءة/كتابة والمجموعة والآخرون قراءة فقط. دوّن الثماني (644)."),
      l("Deployment script: owner read/write/execute, nobody else any access. Note the octal (700).", "سكربت النشر: المالك قراءة/كتابة/تنفيذ ولا أحد غيره. دوّن الثماني (700)."),
      l("Tick the 'others write' box and read the warning – explain in one sentence why world-writable is dangerous.", "فعّل خانة «كتابة الآخرين» واقرأ التحذير — اشرح بجملة لماذا يعد السماح للجميع بالكتابة خطرًا."),
      l("On your own Linux or macOS terminal (or a VM), create a test file and compare ls -l output before and after chmod. On Windows, right-click a test file → Properties → Security to see the matching NTFS entries.", "في طرفية لينكس أو ماك (أو جهاز افتراضي) أنشئ ملف اختبار وقارن ناتج ls -l قبل chmod وبعده. وفي ويندوز انقر بزر الفأرة الأيمن على ملف اختبار ← خصائص ← الأمان لرؤية مدخلات NTFS المقابلة."),
      l("Write down your personal rule for daily accounts (standard vs administrator).", "اكتب قاعدتك الشخصية للحسابات اليومية (عادي مقابل مدير)."),
    ],
    expected: l("Three correct octal modes (640, 644, 700), a clear explanation of the world-writable risk and a screenshot or note comparing permissions before/after on a test file.", "ثلاثة أوضاع ثمانية صحيحة (640 و644 و700) وشرح واضح لخطر الكتابة للجميع ولقطة أو ملاحظة تقارن الصلاحيات قبل/بعد على ملف اختبار."),
  },
  quiz: [
    { q: l("What does chmod 640 give?", "ماذا يمنح الأمر chmod 640؟"), options: [l("Owner rw, group r, others none", "المالك rw والمجموعة r والآخرون لا شيء"), l("Owner rwx, group rw, others none", "المالك rwx والمجموعة rw والآخرون لا شيء"), l("Everyone read/write", "الجميع قراءة/كتابة"), l("Owner read only", "المالك قراءة فقط")], answer: 0, why: l("6 = 4+2 (rw), 4 = r, 0 = no access.", "6 = 4+2 (rw) و4 = r و0 = لا وصول.") },
    { q: l("Why should daily work not be done as root/Administrator?", "لماذا لا ينبغي أداء العمل اليومي بحساب root/Administrator؟"), options: [l("It is slower", "أبطأ"), l("Malware or mistakes would run with full system rights", "البرمجيات الخبيثة والأخطاء ستعمل بكل صلاحيات النظام"), l("It uses more disk", "يستهلك قرصًا أكثر"), l("It blocks the Internet", "يحجب الإنترنت")], answer: 1, why: l("Processes inherit the rights of the account; least privilege limits damage.", "ترث العمليات صلاحيات الحساب؛ وأقل صلاحية تحدّ الضرر.") },
    { q: l("Where are Linux authentication events typically logged?", "أين تُسجَّل أحداث المصادقة في لينكس عادةً؟"), options: [l("/etc/hosts", "/etc/hosts"), l("/var/log/auth.log or /var/log/secure", "/var/log/auth.log أو /var/log/secure"), l("C:\\Windows\\System32", "C:\\Windows\\System32"), l("/tmp", "/tmp")], answer: 1, why: l("Depending on the distribution, auth.log (Debian-based) or secure (Red Hat-based).", "بحسب التوزيعة: auth.log (دبيان) أو secure (ريد هات).") },
    { q: l("Which Windows feature asks for confirmation before administrative actions?", "أي ميزة في ويندوز تطلب تأكيدًا قبل الإجراءات الإدارية؟"), options: [l("BitLocker", "BitLocker"), l("UAC", "UAC"), l("NTP", "NTP"), l("DNS", "DNS")], answer: 1, why: l("User Account Control requests elevation for admin tasks.", "يطلب التحكم بحساب المستخدم رفع الصلاحية للمهام الإدارية.") },
    { q: l("A file with mode 777 means…", "ملف بالوضع 777 يعني…"), options: [l("Only the owner can use it", "المالك وحده يستخدمه"), l("Anyone can read, write and execute it", "أي شخص يقرأ ويكتب وينفذ"), l("It is encrypted", "مشفّر"), l("It is hidden", "مخفي")], answer: 1, why: l("7 = rwx for owner, group and others – almost always a mistake.", "7 = rwx للمالك والمجموعة والآخرين – وهو خطأ في الغالب.") },
    { q: l("What is the main purpose of hardening?", "ما الغرض الرئيسي من التحصين؟"), options: [l("Make the system look modern", "جعل النظام يبدو حديثًا"), l("Reduce attack surface so the system is secure by default", "تقليل سطح الهجوم ليكون النظام آمنًا افتراضيًا"), l("Increase disk speed", "زيادة سرعة القرص"), l("Replace backups", "استبدال النسخ الاحتياطي")], answer: 1, why: l("Disabling unneeded features and applying secure settings removes opportunities for attackers.", "تعطيل الميزات غير اللازمة وتطبيق إعدادات آمنة يزيل فرص المهاجمين.") },
    { q: l("Which is the best protection for data on a lost laptop?", "ما أفضل حماية لبيانات حاسوب محمول مفقود؟"), options: [l("A desktop wallpaper warning", "رسالة تحذير على الخلفية"), l("Full-disk encryption such as BitLocker or LUKS", "تشفير القرص الكامل مثل BitLocker أو LUKS"), l("Renaming files", "إعادة تسمية الملفات"), l("A long file name", "اسم ملف طويل")], answer: 1, why: l("Encryption keeps data unreadable without the key even if the disk is removed.", "يُبقي التشفير البيانات غير مقروءة دون المفتاح حتى لو نُزع القرص.") },
  ],
  homework: {
    title: l("Homework 5 – Audit your own computer", "الواجب 5 – دقّق حاسوبك الشخصي"),
    tasks: [
      l("Record your OS version and whether automatic updates are on.", "سجّل إصدار نظامك وهل التحديثات التلقائية مفعلة."),
      l("List the user accounts and mark which are administrators; remove or disable unused ones if appropriate.", "اذكر حسابات المستخدمين وحدد المديرين؛ واحذف أو عطّل غير المستخدم منها عند المناسب."),
      l("Check that the firewall, antivirus/Defender and disk encryption are enabled.", "تحقق من تفعيل الجدار الناري ومضاد الفيروسات/Defender وتشفير القرص."),
      l("List five programs that start automatically and justify each or disable it.", "اذكر خمسة برامج تبدأ تلقائيًا وبرر كل واحد أو عطّله."),
    ],
    deliverable: l("A completed one-page hardening checklist with pass/fail for each item and actions taken.", "قائمة تحصين مكتملة من صفحة واحدة بنجاح/فشل لكل بند والإجراءات المتخذة."),
  },
  refs: [
    { title: "CIS Benchmarks", org: "Center for Internet Security", url: "https://www.cisecurity.org/cis-benchmarks" },
    { title: "Windows security documentation", org: "Microsoft", url: "https://learn.microsoft.com/en-us/windows/security/" },
    { title: "Linux file permissions (chmod manual)", org: "GNU Coreutils", url: "https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html" },
    { title: "Device security guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/device-security-guidance" },
  ],
  terms: [
    { term: l("Kernel", "النواة"), def: l("The core of the OS that controls hardware and enforces access rules.", "قلب نظام التشغيل الذي يتحكم بالعتاد وينفذ قواعد الوصول.") },
    { term: l("Process", "العملية"), def: l("A running instance of a program with its own memory and identity.", "نسخة جارية من برنامج لها ذاكرتها وهويتها.") },
    { term: l("Service / daemon", "الخدمة"), def: l("A program that runs in the background, often listening on a network port.", "برنامج يعمل في الخلفية وغالبًا ينصت على منفذ شبكة.") },
    { term: l("Privilege escalation", "رفع الامتيازات"), def: l("Gaining higher rights than originally granted, often by exploiting a flaw.", "الحصول على صلاحيات أعلى مما مُنح أصلًا، غالبًا باستغلال خلل.") },
    { term: l("Hardening", "التحصين"), def: l("Configuring a system to minimise its attack surface.", "إعداد نظام لتقليل سطح الهجوم إلى الحد الأدنى.") },
    { term: l("ACL", "قائمة التحكم بالوصول"), def: l("Access Control List: entries stating who may do what to a resource.", "مدخلات تحدد من يستطيع فعل ماذا بمورد ما.") },
    { term: l("UAC", "التحكم بحساب المستخدم"), def: l("Windows prompt that requires approval for administrative actions.", "نافذة في ويندوز تتطلب موافقة للإجراءات الإدارية.") },
  ],
};

export const s06: Session = {
  id: 6,
  phase: 2,
  minutes: 70,
  title: l("Networking Fundamentals I: Models, Devices and IP Addressing", "أساسيات الشبكات 1: النماذج والأجهزة وعنونة IP"),
  summary: l(
    "How data travels: OSI and TCP/IP models, switches and routers, MAC and IP addresses, private vs public ranges, NAT and subnetting with CIDR.",
    "كيف تنتقل البيانات: نموذجا OSI وTCP/IP، والمحولات والموجهات، وعناوين MAC وIP، والنطاقات الخاصة والعامة، وNAT وتقسيم الشبكات بـ CIDR."
  ),
  objectives: [
    l("Describe the OSI and TCP/IP layers and attach a security risk to each.", "وصف طبقات OSI وTCP/IP وربط خطر أمني بكل طبقة."),
    l("Explain the roles of switches, routers, access points and gateways.", "شرح أدوار المحولات والموجهات ونقاط الوصول والبوابات."),
    l("Differentiate MAC, IPv4, IPv6, private and public addresses, and NAT.", "التمييز بين MAC وIPv4 وIPv6 والعناوين الخاصة والعامة وNAT."),
    l("Calculate network, broadcast and host ranges using CIDR notation.", "حساب عنوان الشبكة والبث ونطاق الأجهزة باستخدام صيغة CIDR."),
  ],
  sections: [
    {
      h: l("1. Network layers: OSI and TCP/IP", "1. طبقات الشبكة: OSI وTCP/IP"),
      p: [
        l("Networking is organised in layers so that each solves one problem and can be improved independently. The OSI model has seven layers (Physical, Data Link, Network, Transport, Session, Presentation, Application). The practical TCP/IP model groups them into four: Link, Internet, Transport and Application. When data is sent, each layer adds its own header (encapsulation); the receiver removes them in reverse order.", "تُنظَّم الشبكات في طبقات يحل كلٌّ منها مشكلة واحدة ويمكن تطويره باستقلال. لنموذج OSI سبع طبقات (المادية، وصلة البيانات، الشبكة، النقل، الجلسة، العرض، التطبيق). ويجمعها نموذج TCP/IP العملي في أربع: الوصلة والإنترنت والنقل والتطبيق. وعند الإرسال تضيف كل طبقة ترويستها (التغليف)، ويزيلها المستقبل بالترتيب العكسي."),
        l("Layers matter for security because attacks and defences are specific to them: a cable tap is Layer 1, MAC spoofing and ARP poisoning are Layer 2, IP spoofing is Layer 3, SYN floods are Layer 4, and SQL injection is Layer 7. A firewall that only understands Layers 3–4 cannot see a Layer 7 attack inside allowed web traffic.", "تهم الطبقات للأمن لأن الهجمات والدفاعات خاصة بها: التنصت على الكابل الطبقة 1، وانتحال MAC وتسميم ARP الطبقة 2، وانتحال IP الطبقة 3، وفيضان SYN الطبقة 4، وحقن SQL الطبقة 7. والجدار الناري الذي يفهم الطبقتين 3–4 فقط لا يرى هجوم الطبقة 7 داخل حركة ويب مسموحة."),
      ],
      table: {
        head: [l("OSI layer", "طبقة OSI"), l("Unit / example", "الوحدة / مثال"), l("Typical security concern", "قلق أمني نموذجي")],
        rows: [
          [l("7 Application", "7 التطبيق"), l("HTTP, DNS, SMTP", "HTTP وDNS وSMTP"), l("Injection, phishing sites, malicious payloads", "الحقن، مواقع التصيّد، الحمولات الخبيثة")],
          [l("6 Presentation", "6 العرض"), l("TLS, encoding", "TLS والترميز"), l("Weak ciphers, certificate abuse", "تشفير ضعيف، إساءة استخدام الشهادات")],
          [l("5 Session", "5 الجلسة"), l("Session setup/teardown", "إنشاء الجلسة وإنهاؤها"), l("Session hijacking", "اختطاف الجلسات")],
          [l("4 Transport", "4 النقل"), l("TCP / UDP – ports", "TCP / UDP – المنافذ"), l("Port scans, SYN flood", "مسح المنافذ، فيضان SYN")],
          [l("3 Network", "3 الشبكة"), l("IP packets – routers", "حزم IP – الموجهات"), l("IP spoofing, routing attacks", "انتحال IP، هجمات التوجيه")],
          [l("2 Data link", "2 وصلة البيانات"), l("Frames, MAC – switches", "الإطارات وMAC – المحولات"), l("ARP poisoning, MAC flooding", "تسميم ARP، إغراق MAC")],
          [l("1 Physical", "1 المادية"), l("Cables, radio, ports", "الكابلات والراديو والمنافذ"), l("Cable tapping, jamming, rogue devices", "التنصت على الكابل، التشويش، أجهزة دخيلة")],
        ],
      },
    },
    {
      h: l("2. Network devices", "2. أجهزة الشبكة"),
      p: [l("Each device operates at a layer and has a distinct security role:", "يعمل كل جهاز في طبقة وله دور أمني مميز:")],
      bullets: [
        l("Switch (Layer 2): connects devices in one LAN and forwards frames by MAC address. Can be configured with VLANs and port security.", "المحوّل (الطبقة 2): يربط الأجهزة في شبكة محلية واحدة ويمرر الإطارات بحسب عنوان MAC، ويمكن إعداده بـ VLAN وأمان المنافذ."),
        l("Router (Layer 3): connects different networks and forwards packets by IP address; often the first point where traffic filtering (ACLs) is applied.", "الموجّه (الطبقة 3): يربط شبكات مختلفة ويمرر الحزم بحسب عنوان IP، وغالبًا هو أول نقطة لتطبيق ترشيح الحركة (ACL)."),
        l("Access point: provides Wi-Fi; must use WPA2/WPA3 with strong keys and updated firmware.", "نقطة الوصول: توفر الواي فاي؛ ويجب أن تستخدم WPA2/WPA3 بمفاتيح قوية وبرمجية ثابتة محدّثة."),
        l("Firewall: allows or blocks traffic by rules (Session 8). Gateway: the router a LAN uses to reach other networks.", "الجدار الناري: يسمح بالحركة أو يحجبها بحسب قواعد (الجلسة 8). البوابة: الموجّه الذي تستخدمه الشبكة المحلية للوصول لشبكات أخرى."),
      ],
    },
    {
      h: l("3. MAC, IPv4, IPv6, NAT", "3. MAC وIPv4 وIPv6 وNAT"),
      p: [
        l("A MAC address (48 bits, e.g. 3C:52:82:1A:9B:04) identifies a network card on the local link and is used only inside one LAN. An IPv4 address (32 bits, e.g. 192.168.10.77) identifies a host on an IP network and can be routed globally; IPv6 uses 128 bits to solve address exhaustion. ARP maps an IP address to a MAC address on the LAN – and, because it is unauthenticated, can be abused (ARP poisoning).", "عنوان MAC (48 بتًا، مثل 3C:52:82:1A:9B:04) يعرّف بطاقة الشبكة على الوصلة المحلية ويُستخدم داخل شبكة محلية واحدة فقط. وعنوان IPv4 (32 بتًا، مثل 192.168.10.77) يعرّف مضيفًا في شبكة IP ويمكن توجيهه عالميًا؛ ويستخدم IPv6 128 بتًا لحل نفاد العناوين. ويربط ARP عنوان IP بعنوان MAC في الشبكة المحلية — ولأنه بلا مصادقة يمكن إساءة استخدامه (تسميم ARP)."),
        l("Private ranges (RFC 1918) are not routed on the Internet: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. Network Address Translation (NAT) lets many private hosts share one public address; as a side effect, unsolicited inbound connections are not delivered to internal hosts. NAT is useful but is not a firewall by itself.", "النطاقات الخاصة (RFC 1918) لا تُوجَّه على الإنترنت: 10.0.0.0/8 و172.16.0.0/12 و192.168.0.0/16. ويتيح NAT لأجهزة خاصة كثيرة مشاركة عنوان عام واحد؛ وكأثر جانبي لا تُسلَّم الاتصالات الواردة غير المطلوبة إلى الأجهزة الداخلية. وNAT مفيد لكنه ليس جدارًا ناريًا بذاته."),
      ],
    },
    {
      h: l("4. Subnets and CIDR", "4. الشبكات الفرعية وCIDR"),
      p: [
        l("CIDR notation writes an address with a prefix length: 192.168.10.77/26 means the first 26 bits identify the network and the remaining 6 bits identify hosts. The prefix gives the subnet mask (/26 = 255.255.255.192). The network address has all host bits 0, the broadcast address has all host bits 1, and usable hosts = 2^(host bits) − 2. For /26: 2^6 − 2 = 62 hosts; with a block size of 64, 192.168.10.77 belongs to the block 192.168.10.64 – 192.168.10.127 (network .64, broadcast .127, hosts .65 – .126).", "تكتب صيغة CIDR العنوان مع طول البادئة: 192.168.10.77/26 تعني أن أول 26 بتًا تعرّف الشبكة والـ6 المتبقية تعرّف الأجهزة. وتعطي البادئة قناع الشبكة (/26 = 255.255.255.192). عنوان الشبكة كل بتات الأجهزة فيه 0، وعنوان البث كلها 1، وعدد الأجهزة القابلة للاستخدام = 2^(بتات الأجهزة) − 2. في /26: 2^6 − 2 = 62 جهازًا؛ وبحجم كتلة 64 ينتمي 192.168.10.77 إلى الكتلة 192.168.10.64 – 192.168.10.127 (الشبكة .64 والبث .127 والأجهزة .65 – .126)."),
        l("Subnetting is a security tool: separating staff, servers, guests and IoT devices into different subnets lets you control traffic between them and limits how far an intruder can move.", "تقسيم الشبكات أداة أمنية: فصل الموظفين والخوادم والضيوف وأجهزة إنترنت الأشياء في شبكات فرعية مختلفة يتيح التحكم في الحركة بينها ويحدّ من تحرك المتسلل."),
      ],
      table: {
        head: [l("Prefix", "البادئة"), l("Mask", "القناع"), l("Block size (last octet)", "حجم الكتلة (الخانة الأخيرة)"), l("Usable hosts", "الأجهزة القابلة للاستخدام")],
        rows: [
          [l("/24", "/24"), l("255.255.255.0", "255.255.255.0"), l("256", "256"), l("254", "254")],
          [l("/25", "/25"), l("255.255.255.128", "255.255.255.128"), l("128", "128"), l("126", "126")],
          [l("/26", "/26"), l("255.255.255.192", "255.255.255.192"), l("64", "64"), l("62", "62")],
          [l("/27", "/27"), l("255.255.255.224", "255.255.255.224"), l("32", "32"), l("30", "30")],
          [l("/28", "/28"), l("255.255.255.240", "255.255.255.240"), l("16", "16"), l("14", "14")],
          [l("/30", "/30"), l("255.255.255.252", "255.255.255.252"), l("4", "4"), l("2", "2")],
        ],
      },
    },
  ],
  diagram: {
    kind: "layers",
    title: l("OSI model – seven layers, seven kinds of attack and defence", "نموذج OSI – سبع طبقات وسبعة أنواع من الهجوم والدفاع"),
    caption: l("Data is encapsulated down the layers on the sender and decapsulated up the layers on the receiver. Choose controls at the layer where the threat operates.", "تُغلَّف البيانات نزولًا عبر الطبقات عند المرسل وتُفك صعودًا عند المستقبل. اختر الضوابط في الطبقة التي يعمل فيها التهديد."),
    nodes: [
      { label: l("7 Application – HTTP, DNS, SMTP", "7 التطبيق – HTTP وDNS وSMTP"), desc: l("WAF, input validation", "WAF والتحقق من المدخلات") },
      { label: l("6 Presentation – TLS, encoding", "6 العرض – TLS والترميز"), desc: l("Strong ciphers, valid certificates", "تشفير قوي وشهادات صالحة") },
      { label: l("5 Session", "5 الجلسة"), desc: l("Session timeouts, secure cookies", "مهلات الجلسة وملفات ارتباط آمنة") },
      { label: l("4 Transport – TCP/UDP", "4 النقل – TCP/UDP"), desc: l("Stateful firewall, rate limiting", "جدار ناري بحالة، تحديد المعدل") },
      { label: l("3 Network – IP", "3 الشبكة – IP"), desc: l("ACLs, anti-spoofing filters", "ACL ومرشحات مكافحة الانتحال") },
      { label: l("2 Data link – Ethernet/Wi-Fi", "2 وصلة البيانات – إيثرنت/واي فاي"), desc: l("VLANs, port security, WPA3", "VLAN وأمان المنافذ وWPA3") },
      { label: l("1 Physical", "1 المادية"), desc: l("Locked cabinets, port control", "خزائن مقفلة وتحكم بالمنافذ") },
    ],
  },
  lab: {
    tool: "cidr",
    title: l("Lab 6 – Subnet design for a small office", "المختبر 6 – تصميم شبكات فرعية لمكتب صغير"),
    scenario: l("A 40-person office uses 192.168.10.0/24 on one flat network: staff PCs, servers, a guest Wi-Fi and a few IP cameras share it. You must split it into four isolated subnets of equal size.", "يستخدم مكتب من 40 شخصًا الشبكة 192.168.10.0/24 كشبكة مسطحة واحدة: حواسيب الموظفين والخوادم وواي فاي الضيوف وبعض الكاميرات تشترك فيها. عليك تقسيمها إلى أربع شبكات فرعية معزولة متساوية الحجم."),
    safety: l("Calculate on paper and in the tool only. Do not scan or probe real networks you do not own or administer – unauthorised scanning may be illegal.", "احسب على الورق وفي الأداة فقط. لا تمسح أو تفحص شبكات حقيقية لا تملكها أو تديرها — فالمسح غير المصرح به قد يكون مخالفًا للقانون."),
    steps: [
      l("Decide the prefix needed for four equal subnets from a /24 (answer: /26).", "حدد البادئة اللازمة لأربع شبكات متساوية من /24 (الجواب: /26)."),
      l("Enter 192.168.10.0 /26 and record network, broadcast, usable range and host count.", "أدخل 192.168.10.0 /26 وسجّل الشبكة والبث والنطاق وعدد الأجهزة."),
      l("Repeat for 192.168.10.64, .128 and .192 with /26.", "كرر العملية لـ 192.168.10.64 و.128 و.192 بالبادئة /26."),
      l("Assign roles: Staff, Servers, Guests, Cameras – and note which traffic between them you would allow.", "وزّع الأدوار: الموظفون والخوادم والضيوف والكاميرات — ودوّن الحركة التي ستسمح بها بينها."),
      l("Test the address 10.20.30.40/8 and 8.8.8.8/32 and note which is private and which public.", "جرّب العنوانين 10.20.30.40/8 و8.8.8.8/32 ولاحظ الخاص والعام."),
      l("Verify that 192.168.10.77 belongs to the Servers block and explain why using the block size.", "تحقق أن 192.168.10.77 ينتمي إلى كتلة الخوادم (.64) واشرح السبب بحجم الكتلة."),
    ],
    expected: l("A table of four /26 subnets (.0, .64, .128, .192) with ranges, 62 hosts each, role assignment and a short allow/deny matrix between them.", "جدول بأربع شبكات /26 (‎.0 و.64 و.128 و.192) مع النطاقات و62 جهازًا لكل منها وتوزيع الأدوار ومصفوفة سماح/منع قصيرة بينها."),
  },
  quiz: [
    { q: l("Which device forwards packets between different IP networks?", "أي جهاز يمرر الحزم بين شبكات IP مختلفة؟"), options: [l("Hub", "موزّع"), l("Layer-2 switch", "محوّل الطبقة 2"), l("Router", "موجّه"), l("Patch panel", "لوحة توصيل")], answer: 2, why: l("Routers work at Layer 3 and connect separate networks.", "الموجهات تعمل في الطبقة 3 وتربط الشبكات المنفصلة.") },
    { q: l("ARP poisoning is an attack at which OSI layer?", "تسميم ARP هجوم في أي طبقة من OSI؟"), options: [l("Layer 7", "الطبقة 7"), l("Layer 2", "الطبقة 2"), l("Layer 4", "الطبقة 4"), l("Layer 6", "الطبقة 6")], answer: 1, why: l("ARP maps IP to MAC on the local link, which is the data-link layer.", "يربط ARP عناوين IP بـ MAC على الوصلة المحلية وهي طبقة وصلة البيانات.") },
    { q: l("How many usable host addresses are in a /26 subnet?", "كم عدد عناوين الأجهزة القابلة للاستخدام في شبكة /26؟"), options: [l("30", "30"), l("62", "62"), l("64", "64"), l("126", "126")], answer: 1, why: l("32 − 26 = 6 host bits; 2^6 − 2 = 62.", "32 − 26 = 6 بتات؛ 2^6 − 2 = 62.") },
    { q: l("Which address is private (RFC 1918)?", "أي عنوان من العناوين الخاصة (RFC 1918)؟"), options: [l("8.8.8.8", "8.8.8.8"), l("172.20.4.9", "172.20.4.9"), l("172.32.0.1", "172.32.0.1"), l("193.168.1.1", "193.168.1.1")], answer: 1, why: l("172.16.0.0–172.31.255.255 is private; 172.32.x.x is public.", "النطاق 172.16.0.0–172.31.255.255 خاص؛ و172.32.x.x عام.") },
    { q: l("What is NAT mainly used for?", "فيمَ يُستخدم NAT أساسًا؟"), options: [l("Encrypting traffic", "تشفير الحركة"), l("Letting many private hosts share public addresses", "تمكين أجهزة خاصة كثيرة من مشاركة عناوين عامة"), l("Detecting malware", "كشف البرمجيات الخبيثة"), l("Storing logs", "تخزين السجلات")], answer: 1, why: l("NAT translates private to public addresses; it is not encryption or a full firewall.", "يترجم NAT العناوين الخاصة إلى عامة؛ وليس تشفيرًا ولا جدارًا ناريًا كاملًا.") },
    { q: l("Why separate guests and IoT devices into their own subnets?", "لماذا نفصل الضيوف وأجهزة إنترنت الأشياء في شبكات فرعية خاصة؟"), options: [l("To increase Wi-Fi speed only", "لزيادة سرعة الواي فاي فقط"), l("To limit how far a compromised device can reach", "للحد من مدى وصول جهاز مخترق"), l("Because IPv4 requires it", "لأن IPv4 تتطلب ذلك"), l("To avoid using passwords", "لتجنب كلمات المرور")], answer: 1, why: l("Segmentation contains compromise and allows rule-based control between zones.", "التقسيم يحصر الاختراق ويتيح تحكمًا قائمًا على القواعد بين المناطق.") },
    { q: l("Which layer do TCP and UDP belong to?", "إلى أي طبقة ينتمي TCP وUDP؟"), options: [l("Network", "الشبكة"), l("Transport", "النقل"), l("Physical", "المادية"), l("Presentation", "العرض")], answer: 1, why: l("The transport layer uses ports to deliver data to the right application.", "تستخدم طبقة النقل المنافذ لتسليم البيانات للتطبيق الصحيح.") },
  ],
  homework: {
    title: l("Homework 6 – Map your home or office network", "الواجب 6 – ارسم خريطة شبكة منزلك أو مكتبك"),
    tasks: [
      l("Find your device's IP address, subnet mask and default gateway (ipconfig on Windows; ip addr or ifconfig on Linux/macOS).", "اعثر على عنوان IP وقناع الشبكة والبوابة الافتراضية لجهازك (ipconfig في ويندوز؛ ip addr أو ifconfig في لينكس/ماك)."),
      l("Use the CIDR tool to calculate the network range of your subnet.", "استخدم أداة CIDR لحساب نطاق شبكتك الفرعية."),
      l("Draw a diagram showing modem, router, switch/Wi-Fi and at least five devices with their IP addresses.", "ارسم مخططًا يبيّن المودم والموجّه والمحوّل/الواي فاي وخمسة أجهزة على الأقل مع عناوينها."),
      l("Propose a segmentation plan (guest Wi-Fi, IoT, family/staff) and the router feature needed.", "اقترح خطة تقسيم (ضيوف، إنترنت الأشياء، العائلة/الموظفون) وميزة الموجّه اللازمة."),
    ],
    deliverable: l("A labelled network diagram with the calculated subnet range and a short segmentation proposal.", "مخطط شبكة موسوم مع نطاق الشبكة المحسوب واقتراح تقسيم قصير."),
  },
  refs: [
    { title: "Computer networking introduction", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/" },
    { title: "RFC 1918 – Address Allocation for Private Internets", org: "IETF", url: "https://www.rfc-editor.org/rfc/rfc1918" },
    { title: "RFC 4632 – CIDR", org: "IETF", url: "https://www.rfc-editor.org/rfc/rfc4632" },
    { title: "Zero trust architecture design principles", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/zero-trust-architecture" },
  ],
  terms: [
    { term: l("OSI model", "نموذج OSI"), def: l("A seven-layer reference model describing network communication.", "نموذج مرجعي من سبع طبقات يصف الاتصال الشبكي.") },
    { term: l("Switch", "المحوّل"), def: l("Layer-2 device forwarding frames by MAC address inside a LAN.", "جهاز الطبقة 2 يمرر الإطارات بحسب MAC داخل شبكة محلية.") },
    { term: l("Router", "الموجّه"), def: l("Layer-3 device forwarding packets between networks by IP address.", "جهاز الطبقة 3 يمرر الحزم بين الشبكات بحسب IP.") },
    { term: l("MAC address", "عنوان MAC"), def: l("A 48-bit hardware identifier of a network interface, used on the local link.", "معرّف عتادي من 48 بتًا لواجهة شبكة يُستخدم على الوصلة المحلية.") },
    { term: l("NAT", "ترجمة عناوين الشبكة"), def: l("Network Address Translation: mapping private addresses to public ones.", "تحويل العناوين الخاصة إلى عامة.") },
    { term: l("CIDR", "التوجيه بين النطاقات بلا فئات"), def: l("Notation like /24 that states how many bits identify the network.", "صيغة مثل /24 تحدد عدد البتات التي تعرّف الشبكة.") },
    { term: l("Subnet", "الشبكة الفرعية"), def: l("A logical subdivision of an IP network.", "تقسيم منطقي لشبكة IP.") },
    { term: l("ARP", "بروتوكول تحليل العناوين"), def: l("Protocol that resolves an IP address to a MAC address on a LAN.", "بروتوكول يحوّل عنوان IP إلى MAC في الشبكة المحلية.") },
  ],
};
