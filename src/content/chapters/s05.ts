import { l, type Session } from "../types";

export const s05: Session = {
  id: 5,
  phase: 2,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Linux Fundamentals & Administration",
    "أساسيات إدارة لينكس",
  ),
  summary: l(
    "How to work inside a Linux system: the shell, the filesystem hierarchy, files and directories, users and groups, permissions, processes, services, packages, networking and logs, plus the first steps of hardening.",
    "كيف تعمل داخل نظام لينكس: الصدفة، وتسلسل الملفات، والملفات والمجلدات، والمستخدمين والمجموعات، والصلاحيات، والعمليات، والخدمات، والحزم، وشبكات لينكس والسجلات، بالإضافة إلى الخطوات الأولى لتقوية النظام.",
  ),
  overview: l(
    "Linux is the operating system behind most web servers, cloud hosts and security tools, so a cybersecurity student must be comfortable inside it. This session takes you from the first terminal command to a practical understanding of how a Linux system is organized, who can do what, and how it starts, serves and records activity. You will not write scripts here; you will learn to navigate, inspect, manage and secure a Linux system one command at a time.",
    "لينكس هو نظام التشغيل الذي يشغّل معظم خوادم الويب والاستضافة السحابية وأدوات الأمن، لذا يجب على طالب الأمن السيبراني أن يشعر بالراحة داخله. تأخذك هذه الجلسة من أول أمر في الصدفة إلى فهم عملي لكيفية تنظيم نظام لينكس، ومن الذي يمكنه فعل ماذا، وكيف يبدأ النظام ويخدم الأنشطة ويسجّلها. لن تكتب برامج نصية هنا؛ ستتعلم التنقل والتدقيق والإدارة وتأمين نظام لينكس أمرًا تلو الآخر.",
  ),
  whyItMatters: l(
    "Almost every security investigation touches a Linux machine: a web server, a log host, a cloud instance or a firewall. When you understand the filesystem, permissions, processes and services, you can tell whether a machine is healthy or compromised. A wrong permission can expose data; an unknown process can hide malware; a missing service can break monitoring. Linux literacy is the difference between guessing and actually investigating.",
    "تتعرّض تقريبًا كل تحقيق أمني لجهاز لينكس: خادم ويب، أو مضيف للسجلات، أو instance سحابية، أو جدار ناري. عندما تفهم تسلسل الملفات والصلاحيات والعمليات والخدمات، يمكنك معرفة ما إذا كان الجهاز سليمًا أم مخترقًا. فالصلاحية الخاطئة قد تكشف البيانات، والعملية المجهولة قد تخفي برمجيات خبيثة، والخدمة المفقودة قد تعطّل المراقبة. معرفة لينكس هي الفارق بين التخمين والتحقيق الفعلي.",
  ),
  prerequisites: [
    l(
      "Session 4, Operating System Foundations: you should understand what an operating system, kernel, process and service are.",
      "الجلسة 4، أساسيات أنظمة التشغيل: ينبغي أن تفهم ما هو نظام التشغيل، والنواة، والعملية، والخدمة.",
    ),
    l(
      "Comfort with a computer and basic file management; no programming or previous Linux experience is required.",
      "الراحة في استخدام الحاسوب والإدارة الأساسية للملفات؛ لا تُشترط أي خبرة سابقة في البرمجة أو لينكس.",
    ),
    l(
      "A legal and ethical mindset: only practice on a Linux machine you own or are authorized to use.",
      "عقلية قانونية وأخلاقية: تدرب فقط على جهاز لينكس تملكه أو لديك إذن باستخدامه.",
    ),
  ],
  objectives: [
    l(
      "Explain what Linux is, what a distribution is, and how the kernel and user space fit together.",
      "شرح ماهية لينكس وما هي التوزيعة وكيف تترابط النواة ومساحة المستخدم.",
    ),
    l(
      "Use the terminal, the shell and Bash to run commands, navigate and manage files and directories.",
      "استخدام الصدفة وBash لتنفيذ الأوامر والتنقل وإدارة الملفات والمجلدات.",
    ),
    l(
      "Describe the Linux filesystem hierarchy and the purpose of the main directories.",
      "وصف تسلسل ملفات لينكس والغرض من أهم المجلدات.",
    ),
    l(
      "Create and manage users and groups and understand the ownership model.",
      "إنشاء وإدارة المستخدمين والمجموعات وفهم نموذج الملكية.",
    ),
    l(
      "Apply and interpret file permissions with chmod and chown, and reason about safe defaults.",
      "تطبيق وتفسير صلاحيات الملفات باستخدام chmod وchown، والتفكير في القيم الافتراضية الآمنة.",
    ),
    l(
      "Inspect processes and services with systemd, manage packages, read logs and apply first-step hardening.",
      "تدقيق العمليات والخدمات عبر systemd، وإدارة الحزم، وقراءة السجلات، وتطبيق خطوات التقوية الأولى.",
    ),
  ],
  agenda: [
    { label: l("Welcome, overview and prior-knowledge check", "الترحيب والنظرة العامة والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Linux history, distributions and architecture", "تاريخ لينكس والتوزيعات والبنية"), minutes: 10 },
    { label: l("Terminal, shell and Bash basics", "أساسيات الصدفة وBash"), minutes: 10 },
    { label: l("The Linux filesystem hierarchy", "تسلسل ملفات لينكس"), minutes: 12 },
    { label: l("Files, directories and navigation", "الملفات والمجلدات والتنقل"), minutes: 8 },
    { label: l("Users, groups and permissions (chmod / chown)", "المستخدمون والمجموعات والصلاحيات (chmod / chown)"), minutes: 15 },
    { label: l("Processes, services and systemd", "العمليات والخدمات وsystemd"), minutes: 8 },
    { label: l("Packages, networking commands and logs", "الحزم وأوامر الشبكات والسجلات"), minutes: 7 },
    { label: l("Instructor demonstration: terminal walkthrough", "عرض المدرب: جولة في الصدفة"), minutes: 5 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 10 },
  ],
  introduction: l(
    "Think of Linux as the engine room of the modern internet. When you load a website, connect to a cloud service, or read a security alert produced by a log server, a Linux machine is almost certainly working in the background. Because security professionals spend so much time on Linux, this session builds a working, practical literacy in it. We start with what Linux is and how its parts fit together, move through the filesystem and permissions that control who can read and change what, and finish with processes, services, packages, logs and the first hardening steps that make a system safer by default.",
    "تخيّل لينكس كغرفة محركات الإنترنت الحديث. فعندما تُحمّل موقعًا، أو تتصل بخدمة سحابية، أو تقرأ تنبيهًا أمنيًا أنتجته خادم سجلات، يكون جهاز لينكس يعمل في الخلفية في كل الأرجاء. وبما أن المتخصصين في الأمن يقضون وقتًا طويلًا على لينكس، تبني هذه الجلسة معرفة عملية به. نبدأ بما هو لينكس وكيف تتكامل أجزاؤه، ثم ننتقل إلى تسلسل الملفات والصلاحيات التي تحدد من يمكنه القراءة والتغيير، ونختم بالعمليات والخدمات والحزم والسجلات وخطوات التقوية الأولى التي تجعل النظام أكثر أمانًا افتراضيًا.",
  ),
  sections: [
    {
      h: l("1. Linux introduction, history and distributions", "1. مقدمة لينكس وتاريخه وتوزيعاته"),
      p: [
        l(
          "Linux is a family of open-source operating systems built around a Linux kernel, the core program that manages hardware and resources. It was created by Linus Torvalds in 1991 and grew from a hobby project into the engine behind most web servers, cloud platforms and embedded devices. Linux is not one single product; it is a kernel that many organizations combine with software tools, desktop environments and configuration policies to produce a complete operating system called a distribution, or distro.",
          "لينكس عائلة من أنظمة التشغيل مفتوحة المصدر مبنية حول نواة لينكس، وهي البرنامج الأساسي الذي يدير العتاد والموارد. أنشأه لينوس تورفالدس عام 1991 وتطور من مشروع هواة إلى المحرك الذي يشغّل معظم خوادم الويب والمنصات السحابية والأجهزة المضمنة. لينكس ليس منتجًا واحدًا؛ بل هو نواة تدمجها مؤسسات كثيرة مع أدوات برمجية وواجهات مكتبية وسياسات إعداد لإنتاج نظام تشغيل متكامل يسمى توزيعة أو distro.",
        ),
        l(
          "Common distributions include Ubuntu and Debian, which are beginner-friendly and widely used on cloud and desktop; Red Hat Enterprise Linux and Fedora, strong in enterprise servers; CentOS Stream as a streamlined server option; and Arch Linux for users who want full control. Distributions differ in how they install software, manage updates and configure defaults, but the commands you learn in this session work across all of them because they share the same kernel and filesystem conventions.",
          "من التوزيعات الشائعة أوبنتو وديبيان، وهما سهلتا الاستخدام ومستخدمتان على نطاق واسع في السحابة وسطح المكتب؛ وريد هات إنتربرايز لينكس وفيدورا، وهما قويتان في خوادم المؤسسات؛ وCentOS Stream كخيار خادم مبسط؛ وآرك لينكس للمستخدمين الذين يريدون سيطرة كاملة. تختلف التوزيعات في طريقة تثبيت البرمجيات وإدارة التحديثات وإعداد القيم الافتراضية، لكن الأوامر التي تتعلمها في هذه الجلسة تعمل في جميعها لأنها تشترك في النواة نفسها وقفارات الملفات نفسها.",
        ),
      ],
    },
    {
      h: l("2. Linux architecture: kernel and user space", "2. بنية لينكس: النواة ومساحة المستخدم"),
      p: [
        l(
          "A Linux system is split into two broad regions. The kernel is the part that runs in privileged kernel mode: it talks directly to hardware, manages memory, schedules processes and provides the system calls that everything else uses. User space is where ordinary programs run: your shell, editors, services and applications. Programs in user space cannot touch hardware or another process's memory directly; they must ask the kernel to do it through a system call.",
          "ينقسم نظام لينكس إلى منطقتين واسعتين. النواة هي الجزء الذي يعمل في وضع النواة المحصّن: تتحدث مباشرة مع العتاد، وتدير الذاكرة، وتجدول العمليات، وتوفر استمرارات النظام التي يستخدمها كل شيء آخر. مساحة المستخدم هي المكان الذي تعمل فيه البرامج العادية: الصدفة والمحررات والخدمات والتطبيقات. لا تستطيع البرامج في مساحة المستخدم الوصول مباشرة إلى العتاد أو ذاكرة عملية أخرى؛ بل يجب أن تطلب من النواة فعل ذلك عبر استمرار نظام.",
        ),
        l(
          "This split matters for security. Because user-space programs run with restricted privileges, a compromised application does not automatically control the whole machine. The one account that can cross into kernel territory is root, the superuser, which is why protecting the root account and avoiding unnecessary root use is a core Linux security habit.",
          "هذا الانقسام مهم للأمن. لأن برامج مساحة المستخدم تعمل بصلاحيات مقيّدة، فإن التطبيق المخترق لا يسيطر تلقائيًا على الجهاز كله. والحساب الوحيد الذي يمكنه تجاوز ذلك إلى منطقة النواة هو root أو الجذر، وهو المستخدم الخارق، وهذا ما يجعل حماية حساب الجذر وتجنب استخدامه دون ضرورة عادة أساسية في أمن لينكس.",
        ),
      ],
    },
    {
      h: l("3. Terminal, shell and Bash", "3. الصدفة وBash"),
      p: [
        l(
          "The terminal is the window that lets you type commands; the shell is the program that reads those commands, interprets them and runs them. On most Linux systems the default shell is Bash, the Bourne Again Shell, a powerful command interpreter with a long history. You interact with Bash by typing a command, pressing Enter, and reading the output it prints. Commands follow a simple pattern: a program name, optional arguments that modify its behavior, and optional flags that switch options on or off.",
          "الصدفة هي النافذة التي تسمح لك بكتابة الأوامر؛ أما الـ shell فهو البرنامج الذي يقرأ هذه الأوامر ويفسرها وينفذها. في معظم أنظمة لينكس يكون الـ shell الافتراضي هو Bash، وهو مترجم أوامر قوي ذو تاريخ طويل. تتعامل مع Bash بكتابة أمر والضغط على Enter ثم قراءة الناتج الذي يطبعته. تتبع الأوامر نمطًا بسيطًا: اسم البرنامج، ثم وسيطات اختيارية تتعديل سلوكه، ثم علامات اختيارية تُفعّل أو تُعطّل الخيارات.",
        ),
        l(
          "You will use a small set of commands constantly: pwd prints the current directory, ls lists files, cd changes directory, mkdir creates a directory, touch creates an empty file, cat reads a file, and echo prints text. Learning to combine them with paths and options gives you precise control over the system without needing a graphical interface.",
          "ستستخدم مجموعة صغيرة من الأوامر باستمرار: pwd يطبع المجلد الحالي، وls يعرض الملفات، وcd يغيّر المجلد، وmkdir ينشئ مجلدًا، وtouch ينشئ ملفًا فارغًا، وcat يقرأ ملفًا، وecho يطبع نصًا. تعلّم دمجها مع المسارات والخيارات يمنحك سيطرة دقيقة على النظام دون الحاجة إلى واجهة رسومية.",
        ),
      ],
    },
    {
      h: l("4. The Linux filesystem hierarchy", "4. تسلسل ملفات لينكس"),
      p: [
        l(
          "Linux uses a single unified tree of directories rooted at /, the root directory. Every file, folder, device and program lives somewhere under this tree, which is what makes the system predictable. Understanding the main directories lets you find configuration, logs, programs and user data quickly during an investigation.",
          "يستخدم لينكس شجرة موحدة من المجلدات متجذرة عند /، وهو المجلد الجذر. يعيش كل ملف ومجلد وجهاز وبرنامج في مكان ما تحت هذه الشجرة، وهو ما يجعل النظام قابلًا للتنبؤ. ويساعد فهم المجلدات الرئيسية على تحديد الإعدادات والسجلات والبرامج وبيانات المستخدم بسرعة أثناء التحقيق.",
        ),
        l(
          "/home holds each user's personal directory, such as /home/amelia, where desktop files and personal configuration live. /etc contains system-wide configuration files, the most important place to look when a service misbehaves. /var holds variable data that changes often, including /var/log for logs and /var/spool for queues. /bin and /usr/bin hold executable programs available to all users. /root is the superuser's home directory, which must stay restricted. /tmp is for temporary files that should be cleared on reboot.",
          "/home يحتوي على المجلد الشخصي لكل مستخدم، مثل /home/amelia، حيث توجد ملفات سطح المكتب والإعدادات الشخصية. ويحتوي /etc على ملفات الإعداد النظامية الشاملة، وهو أهم مكان للبحث عندما تتصرف خدمة بشكل خاطئ. ويحوي /var البيانات المتغيرة التي تتغير كثيرًا، بما في ذلك /var/log للسجلات و/var/spool للقوائم المنتظرة. ويوجد /bin و/usr/bin للبرامج القابلة للتنفيذ المتاحة لجميع المستخدمين. /root هو المجلد الرئيسي للمستخدم الخارق ويجب أن يبقى مقيدًا. /tmp للملفات المؤقتة التي ينبغي إزالتها عند إعادة التشغيل.",
        ),
      ],
      table: {
        head: [l("Directory", "المجلد"), l("Typical contents", "محتويات نموذجية")],
        rows: [
          [l("/", "الجذر"), l("The root of the whole filesystem", "جذر نظام الملفات بأكمله")],
          [l("/home", "المستخدمون"), l("Personal directories for each user", "المجلدات الشخصية لكل مستخدم")],
          [l("/etc", "الإعدادات"), l("System-wide configuration files", "ملفات الإعداد النظامية الشاملة")],
          [l("/var", "المتغير"), l("Logs, spools and changing data", "السجلات والقوائم والبيانات المتغيرة")],
          [l("/usr", "البرامج"), l("Programs and shared libraries", "البرامج والمكتبات المشتركة")],
          [l("/root", "الجذر"), l("Superuser home directory (restricted)", "المجلد الرئيسي للمستخدم الخارق (مقيد)")],
          [l("/tmp", "مؤقت"), l("Temporary files cleared on reboot", "ملفات مؤقتة تُزال عند إعادة التشغيل")],
        ],
      },
    },
    {
      h: l("5. Files, directories and navigation", "5. الملفات والمجلدات والتنقل"),
      p: [
        l(
          "Working with files in Linux is mostly about paths. An absolute path starts at the root, such as /etc/ssh/sshd_config, and is unambiguous. A relative path is given from your current location, such as ../logs/auth.log, where .. moves up one directory and . refers to the current directory. Combined with commands like cd, ls, cat, head, tail, cp, mv and rm, paths give you precise control over where files are created, copied, moved or removed.",
          "التعامل مع الملفات في لينكس يتمحور في الغالب حول المسارات. المسار المطلق يبدأ من الجذر، مثل /etc/ssh/sshd_config، وهو غير قابل للالتباس. المسار النسبي يُعطى من موقعك الحالي، مثل ../logs/auth.log، حيث ينتقل .. بمقدار مجلد واحد للأعلى ويشير . إلى المجلد الحالي. ومع الأوامر مثل cd وls وcat وhead وtail وcp وmv وrm، تمنحك المسارات سيطرة دقيقة على مكان إنشاء الملفات أو نسخها أو نقلها أو حذفها.",
        ),
        l(
          "Two habits keep you safe while navigating. First, run ls before you act so you see what exists and avoid overwriting or deleting the wrong file. Second, remember that rm removes files permanently with no recycle bin; a typo in a path can delete the wrong thing. In a production or lab system, double-check paths before destructive commands and prefer moving a file aside before removing it.",
          "هناك عادتان تحافظان على سلامتك أثناء التنقل. الأولى: نفذ ls قبل أن تتصرف لترا ما هو موجود وتتجنب الكتابة فوق الملف الخاطئ أو حذفه. الثانية: تذكّر أن rm يحذف الملفات نهائيًا دون سلة محذوفات؛ فقد يؤدي خطأ إملائيًا في المسار إلى حذف الشيء الخاطئ. في النظام الإنتاجي أو المختبري، راجع المسارات قبل الأوامر المدمرة وفضل نقل الملف إلى جانب قبل حذفه.",
        ),
      ],
    },
    {
      h: l("6. Users, groups and the account model", "6. المستخدمون والمجموعات ونموذج الحسابات"),
      p: [
        l(
          "Linux is multi-user: every action is performed by an account, and every file and directory belongs to one owner and one group. The owner is the account that created or was granted the file; the group is a collection of accounts that share a set of permissions. This owner-group-others model is the foundation of Linux access control. A standard user account is meant for everyday work, while root is the privileged account that can do anything.",
          "لينكس متعدد المستخدمين: يُنفذ كل إجراء بواسطة حساب، وكل ملف ومجلد يملكه مستخدم واحد وينتمي إلى مجموعة واحدة. المالك هو الحساب الذي أنشأ الملف أو مُنح إياه؛ والمجموعة هي مجموعة من الحسابات تشترك في مجموعة من الصلاحيات. ونموذج المالك-المجموعة-الآخرين هو أساس التحكم بالوصول في لينكس. حساب المستخدم العادي مخصص للعمل اليومي، بينما الجذر هو الحساب المحصّن الذي يمكنه فعل أي شيء.",
        ),
        l(
          "Groups make administration manageable. Instead of setting permissions on dozens of individual files, you place users in a group such as developers or operators and grant the group access in one place. The commands to manage accounts are useradd or adduser to create a user, usermod to modify one, groupadd to create a group, and passwd to set a password. Good practice is to give each person their own account rather than sharing logins, so actions are traceable to a person.",
          "تجعل المجموعات الإدارة قابلة للتنفيذ. فبدلًا من إعداد الصلاحيات على عشرات الملفات الفردية، تضع المستخدمين في مجموعة مثل المطورين أو المشغلين وتمنح المجموعة الوصول في مكان واحد. أوامر إدارة الحسابات هي useradd أو adduser لإنشاء المستخدم، وusermod لتعديله، وgroupadd لإنشاء المجموعة، وpasswd لتعيين كلمة المرور. والممارسة الجيدة هي منح كل شخص حسابه الخاص بدلًا من مشاركة تسجيلات الدخول، حتى تُعزى الإجراءات إلى شخص بعينه.",
        ),
      ],
    },
    {
      h: l("7. File permissions: chmod and chown", "7. صلاحيات الملفات: chmod وchown"),
      p: [
        l(
          "Every Linux file and directory carries three sets of permissions: read (r), write (w) and execute (x), each applied to the owner, the group, and everyone else. These permissions decide who can open a file, change it, or run it as a program. You read permissions from an ls -l listing, where a string like -rw-r--r-- means the owner can read and write, the group can read, and others can read.",
          "يحمل كل ملف ومجلد في لينكس ثلاث مجموعات من الصلاحيات: القراءة (r) والكتابة (w) والتنفيذ (x)، وتُطبّق كل منها على المالك والمجموعة والجميع. وتحدد هذه الصلاحيات من الذي يمكنه فتح الملف أو تغييره أو تشغيله كبرنامج. تقرأ الصلاحيات من عرض ls -l، حيث يعني المقطع -rw-r--r-- أن المالك يمكنه القراءة والكتابة، والمجموعة يمكنها القراءة، والآخرون يمكنهم القراءة.",
        ),
        l(
          "chmod changes permissions. You can set them symbolically, as in chmod u+x script.sh to add execute for the owner, or numerically using the octal mode, where each of read, write and execute is a bit: 4 for read, 2 for write, 1 for execute, summed per group. For example, chmod 750 app.conf grants the owner read, write and execute (7), the group read and execute (5), and no access to others (0). chown changes ownership and group, as in chown amelia:operators report.log.",
          "يغيّر chmod الصلاحيات. يمكنك تعيينها رمزيًا، مثل chmod u+x script.sh لإضافة التنفيذ للمالك، أو رقميًا باستخدام الوضع الثماني، حيث تكون كل من القراءة والكتابة والتنفيذ خانة: 4 للقراءة و2 للكتابة و1 للتنفيذ، وتُجمع لكل مجموعة. فعلى سبيل المثال، يمنح chmod 750 app.conf المالك القراءة والكتابة والتنفيذ (7)، والمجموعة القراءة والتنفيذ (5)، ولا يمنح الآخرين أي وصول (0). ويغيّر chown الملكية والمجموعة، مثل chown amelia:operators report.log.",
        ),
        l(
          "Permissions are a security tool, not just housekeeping. Granting execute to a file that should only be read, or world-writable access to a configuration file, creates real risk. When you change permissions, ask what each bit allows and who is in each group, and prefer the minimum access that still lets the system work.",
          "الصلاحيات أداة أمن وليست مجرد تنظيم. فمنح التنفيذ لملف ينبغي أن يُقرأ فقط، أو منح وصول قابل للكتابة من الجميع لملف إعداد، يخلق خطرًا حقيقيًا. عند تغيير الصلاحيات، اسأل عما يسمح به كل خانة ومن هم أعضاء كل مجموعة، وافضّل الحد الأدنى من الوصول الذي يظل النظام يعمل به.",
        ),
      ],
    },
    {
      h: l("8. Processes, services and systemd", "8. العمليات والخدمات وsystemd"),
      p: [
        l(
          "A process is a running program with its own memory, user and process identifier. Every command you run, every service, and the shell itself are processes. You inspect them with ps, list the process tree with ps aux, find a process by name with pgrep, and stop one with kill. Understanding processes helps you spot something unexpected running on a machine, which is a common sign of a problem.",
          "العملية هي برنامج قيد التشغيل له ذاكرة خاصة ومستخدم ومعرف خاص. كل أمر تنفذه وكل خدمة والصدفة نفسها هي عمليات. تدقيقها عبر ps، وعرض شجرة العمليات عبر ps aux، والبحث عن عملية بالاسم عبر pgrep، وإيقاف عملية عبر kill. يساعدك فهم العمليات على اكتشاف شيء غير متوقع يعمل على الجهاز، وهو علامة شائعة على وجود مشكلة.",
        ),
        l(
          "A service is a process that runs in the background to provide a function, such as a web server, SSH access or logging. On modern Linux, systemd is the init system and service manager: it starts services at boot, keeps them running and gives you a uniform way to control them. The core commands are systemctl status to view a service, systemctl start or stop to change its running state, systemctl enable to make it start at boot, and journalctl to read its logs.",
          "الخدمة هي عملية تعمل في الخلفية لتقديم وظيفة، مثل خادم الويب أو الوصول عبر SSH أو التسجيل. في لينكس الحديث، systemd هو نظام التهيئة ومدير الخدمات: يبدأ الخدمات عند الإقلاع ويحافظ عليها ويمنحك طريقة موحدة للتحكم فيها. والأوامر الأساسية هي systemctl status لعرض الخدمة، وsystemctl start أو stop لتغيير حالة تشغيلها، وsystemctl enable لجعلها تبدأ عند الإقلاع، وjournalctl لقراءة سجلاتها.",
        ),
      ],
    },
    {
      h: l("9. Package management, networking commands and logs", "9. إدارة الحزم وأوامر الشبكات والسجلات"),
      p: [
        l(
          "Software on Linux is installed in packages, which bundle a program with its files and dependencies. The package manager installs, updates and removes them and resolves dependencies automatically. On Debian and Ubuntu the manager is apt, where apt update refreshes the package lists, apt install adds a program, and apt upgrade applies updates. On Red Hat and Fedora the manager is dnf. Keeping packages patched is one of the most effective ways to reduce vulnerabilities, so package updates belong in your security routine.",
          "تُثبّت البرمجيات على لينكس في حزم تجمع البرنامج مع ملفاته واعتمادياته. ويدير مدير الحزم تثبيتها وتحديثها وإزالتها ويحل الاعتماديات تلقائيًا. في ديبيان وأوبنتو يكون المدير هو apt، حيث يُجدّد apt update قوائم الحزم، وapt install يضيف برنامجًا، وapt upgrade يطبق التحديثات. في رد هات وفيدورا يكون المدير هو dnf. ويعد الحفاظ على الحزم محدّثة من أكثر الطرق فعالية لخفض الثغرات، لذا تنتمي تحديثات الحزم إلى روتينك الأمني.",
        ),
        l(
          "Linux includes commands to inspect the network: ip addr shows network interfaces and addresses, ip route shows the routing table, ss lists listening ports, and dig or nslookup query DNS. Combined with logs, these give you a picture of how a machine communicates. The most important log locations are /var/log/syslog or journalctl for general system activity, /var/log/auth.log for authentication, and /var/log/kern.log for the kernel. Logs are the raw material of detection, so knowing where to look is essential.",
          "يحتوي لينكس على أوامر لتدقيق الشبكة: ip addr يعرض واجهات الشبكات والعناوين، وip route يعرض جدول التوجيه، وss يعرض المنافذ المنصتة، وdig أو nslookup يستعلم عن DNS. ومع السجلات، تمنحك هذه رؤية لكيفية تواصل الجهاز. وأما مواقع السجلات الأكثر أهمية فهي /var/log/syslog أو journalctl للنشاط العام، و/var/log/auth.log للمصادقة، و/var/log/kern.log للنواة. السجلات هي المادة الخام للكشف، لذا فإن معرفة مكان البحث ضرورة.",
        ),
      ],
    },
    {
      h: l("10. Basic Linux security and hardening", "10. أمن لينكس الأساسي وتقويته"),
      p: [
        l(
          "Hardening is the process of reducing a system's attack surface by tightening defaults. First steps on a Linux host include disabling unused services, removing or locking unused accounts, keeping packages and the kernel updated, restricting root login over remote access, and using the firewall. Linux provides firewall front-ends such as ufw on Ubuntu and firewalld on Red Hat, which manage iptables or nftables rules that control which traffic is allowed.",
          "التقوية هي عملية تقليل سطح الهجوم للنظام عبر تشديد القيم الافتراضية. وتشمل الخطوات الأولى على مضيف لينكس إيقاف الخدمات غير المستخدمة، وإزالة الحسابات غير المستخدمة أو تعطيلها، والحفاظ على تحديث الحزم والنواة، وتقييد تسجيل دخول الجذر عبر الوصول عن بُعد، واستخدام جدار الحماية. يوفر لينكس واجهات لجدران الحماية مثل ufw على أوبنتو وfirewalld على رد هات، والتي تدير قواعد iptables أو nftables التي تتحكم في المرور المسموح به.",
        ),
        l(
          "A disciplined workflow matters more than any single command. Define a baseline of what should be running, compare the machine against it, and investigate deviations. Enable logging and time synchronization, review authentication logs regularly, and apply the principle of least privilege: every account and service gets only the access it needs. These habits turn Linux from a machine you merely use into a system you can defend and investigate.",
          "الانضباط في أسلوب العمل أهم من أي أمر منفرد. عرّف خط أساس لما ينبغي أن يعمل، وقارن الجهاز به، وتحقق من الانحرافات. فعّل التسجيل ومزامنة الوقت، وراجع سجلات المصادقة بانتظام، وطبّق مبدأ أقل صلاحية: يحصل كل حساب وخدمة فقط على الوصول الذي يحتاجه. هذه العادات تحول لينكس من جهاز تستخدمه فقط إلى نظام يمكنك الدفاع عنه والتحقيق فيه.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "To list the contents of the current directory in detail, run ls -l. The first character of each line shows the type, the next nine characters show owner, group and others permissions, then the owner, group, size, date and name follow. Reading this line is the fastest way to spot an unexpected world-writable file.",
      "لعرض محتويات المجلد الحالي بتفاصيل، نفذ ls -l. يظهر الحرف الأول من كل سطر نوع الملف، وتظهر الأحرف التسعة التالية صلاحيات المالك والمجموعة والآخرين، ثم يتبع المالك والمجموعة والحجم والتاريخ والاسم. وقراءة هذا السطر هي أسرع طريقة لاكتشاف ملف غير متوقع وقابل للكتابة من الجميع.",
    ),
    l(
      "To make a script executable only by its owner, run chmod 700 deploy.sh. This grants the owner read, write and execute, and grants no permissions to the group or others, which is the safe default for a private tool.",
      "لجعل برنامج نصي قابل للتنفيذ من صاحبه فقط، نفذ chmod 700 deploy.sh. يمنح هذا المالك القراءة والكتابة والتنفيذ، ولا يمنح المجموعة أو الآخرين أي صلاحية، وهو الافتراض الآمن لأداة خاصة.",
    ),
    l(
      "To see whether the SSH service is running and enabled at boot, run systemctl status ssh. The output tells you if it is active, inactive or failed, and whether it is enabled to start automatically, which is exactly what you need during a first inspection of a server.",
      "لمعرفة ما إذا كانت خدمة SSH تعمل ومفعّلة عند الإقلاع، نفذ systemctl status ssh. يوضح الناتج ما إذا كانت نشطة أو غير نشطة أو فشلت، وما إذا كانت مفعّلة للبدء تلقائيًا، وهو بالضبط ما تحتاجه أثناء التدقيق الأول لأي خادم.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A web server stops serving requests after an update. You log in, run ps aux and see an unexpected process consuming all memory, then check systemctl status for the web service and find it failed. The logs point to a corrupted configuration file under /etc, and after restoring it and applying a correct permission, the service returns to normal.",
      "يتوقف خادم الويب عن خدمة الطلبات بعد تحديث. تسجّل الدخول، وتنفذ ps aux فترى عملية غير متوقعة تستهلك كل الذاكرة، ثم تتحقق من systemctl status لخدمة الويب فتجد أنها فشلت. وتشير السجلات إلى ملف إعداد معطوب تحت /etc، وبعد استبداله وتطبيق صلاحية صحيحة تعود الخدمة إلى حالتها الطبيعية.",
    ),
    l(
      "During a routine review you find a configuration file under /etc that is world-writable. Because any local account could alter it, an attacker who compromises one low-privilege account could change how a critical service starts. You tighten it with chmod 640, restrict it to the owning service account, and note the change as a finding.",
      "أثناء مراجعة روتينية تجد ملف إعداد تحت /etc قابل للكتابة من الجميع. وبما أن أي حساب محلي يمكنه تعديله، فإن المهاجم الذي يخترق حسابًا منخفض الصلاحية يمكنه تغيير الطريقة التي تبدأ بها خدمة حاسمة. فتشدد الصلاحية بأمر chmod 640، وتقيدها بحساب الخدمة المالك، وتسجل التغيير كنتيجة.",
    ),
    l(
      "A server is configured so that root can log in over SSH with a password. An attacker who guesses or obtains that password gains full control. You harden the system by disabling root SSH login, enforcing key-based authentication for administrators, and confirming the change in the authentication logs.",
      "يُعدّ خادم بحيث يمكن للجذر تسجيل الدخول عبر SSH بكلمة مرور. يكتسب المهاجم الذي يخمن أو يحصل على تلك كلمة المرور سيطرة كاملة. تقوّي النظام بتعطيل تسجيل دخول الجذر عبر SSH، وفرض المصادقة المعتمدة على المفاتيح للمسؤولين، وتأكيد التغيير في سجلات المصادقة.",
    ),
  ],
  diagram: {
    kind: "layers",
    title: l("Linux system layers", "طبقات نظام لينكس"),
    caption: l(
      "From the kernel at the base to user programs at the top; each layer asks the one below it for access.",
      "من النواة في القاع إلى برامج المستخدم في الأعلى؛ يطلب كل طبقة من الطبقة التي تحتها الوصول.",
    ),
    nodes: [
      { label: l("User programs & shell", "برامج المستخدم والصدفة"), desc: l("Editors, services, applications", "المحررات والخدمات والتطبيقات") },
      { label: l("System libraries & tools", "المكتبات والأدوات النظامية"), desc: l("libc, coreutils, package manager", "libc وcoreutils ومدير الحزم") },
      { label: l("Kernel", "النواة"), desc: l("Hardware, memory, processes, system calls", "العتاد والذاكرة والعمليات واستمرارات النظام") },
      { label: l("Hardware", "العتاد"), desc: l("CPU, memory, disk, network", "المعالج والذاكرة والقرص والشبكة") },
    ],
  },
  instructorDemo: l(
    "Demonstrate a short, safe terminal walkthrough on a lab Linux machine. Show pwd and ls to orient, then mkdir and touch to create a practice file, cat to read it, and ls -l to display permissions. Change a permission with chmod 600 and show how the listing changes. Finish with systemctl status for a service and journalctl for its recent logs, narrating what each command reveals and why a security professional cares. Emphasize that every command is being run on an isolated lab system, not a real production host.",
    "عرض جولة قصيرة وآمنة في الصدفة على جهاز لينكس مختبري. اعرض pwd وls للتوجيه، ثم mkdir وtouch لإنشاء ملف للتدرّب، وcat لقراءته، وls -l لعرض الصلاحيات. غيِّر صلاحية بأمر chmod 600 وأظهر كيف يتغير العرض. اختم بـ systemctl status لخدمة ما وjournalctl لسجلاتها الحديثة، مع شرح ما يكشفه كل أمر ولماذا يهتم المتخصص الأمني به. شدّد على أن كل أمر يُنفذ على نظام مختبري معزول وليس على مضيف إنتاجي حقيقي.",
  ),
  exercises: [
    {
      title: l("Map the filesystem", "رسم خريطة نظام الملفات"),
      instructions: l(
        "On a lab Linux machine, list the root directory with ls /, then for each of /home, /etc, /var, /usr, /root and /tmp, run ls and write one sentence describing what each contains and why it matters for security.",
        "على جهاز لينكس مختبري، عرض المجلد الجذر بأمر ls /، ثم لكل من /home و/etc و/var و/usr و/root و/tmp نفذ ls واكتب جملة واحدة تصف ما يحتوي كل منها ولماذا يهم الأمن.",
      ),
      expected: l(
        "A short written map that correctly describes the purpose of each directory and connects at least two of them to a security concern, such as logs in /var/log or configuration in /etc.",
        "خريطة مكتوبة قصيرة تصف بدقة غرض كل مجلد وتربط اثنين منها على الأقل بمسألة أمنية، مثل السجلات في /var/log أو الإعدادات في /etc.",
      ),
    },
    {
      title: l("Practice permissions", "التدرّب على الصلاحيات"),
      instructions: l(
        "Create a file with touch report.txt, inspect it with ls -l, then apply chmod 640 and chown to a chosen user and group, and re-list to confirm the change. Record the before and after permission strings and explain what each value allows.",
        "أنشئ ملفًا بأمر touch report.txt، وتحقق منه بـ ls -l، ثم طبّق chmod 640 وchown لمستخدم ومجموعة تختاره، وأعد العرض للتأكيد. سجّل سلاسل الصلاحيات قبل التغيير وبعده واشرح ما يسمح به كل قيمة.",
      ),
      expected: l(
        "A recorded before-and-after comparison showing the correct permission string for 640, with a correct explanation that the owner can read and write, the group can read, and others have no access.",
        "مقارنة مسجلة قبل التغيير وبعده تظهر سلسلة الصلاحيات الصحيحة للقيمة 640، مع شرح دقيق أن المالك يمكنه القراءة والكتابة، والمجموعة يمكنها القراءة، ولا يمتلك الآخرون أي وصول.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can open a terminal, navigate the Linux filesystem, create and inspect files, create users and groups, apply and read permissions with chmod and chown, inspect processes and services, manage packages, read logs, and apply the first hardening steps. You can describe what each major directory holds and explain why Linux permissions and account hygiene matter for security.",
    "بعد هذه الجلسة يمكنك فتح الصدفة، والتنقل في نظام ملفات لينكس، وإنشاء الملفات وتدقيقها، وإنشاء المستخدمين والمجموعات، وتطبيق الصلاحيات وقراءتها باستخدام chmod وchown، وتدقيق العمليات والخدمات، وإدارة الحزم، وقراءة السجلات، وتطبيق خطوات التقوية الأولى. ويمكنك وصف ما يحتويه كل مجلد رئيسي وشرح سبب أهمية صلاحيات لينكس ونظافة الحسابات للأمن.",
  ),
  commonMistakes: [
    l(
      "Running commands as root when a normal account is sufficient; this risks accidental damage and hides which account performed an action.",
      "تنفيذ الأوامر بصلاحية الجذر عندما يكفي حساب عادي؛ فهذا يخاطر بإتلاف عرضي ويحجب معرفة الحساب الذي قام بالإجراء.",
    ),
    l(
      "Using destructive commands such as rm without first listing the directory or double-checking the path, which can delete the wrong file.",
      "استخدام الأوامر المدمرة مثل rm دون عرض المجلد أولًا أو مراجعة المسار مرتين، مما قد يحذف الملف الخاطئ.",
    ),
    l(
      "Granting too broad permissions, such as world-writable access to a configuration file, because it is convenient in a lab but dangerous in reality.",
      "منح صلاحيات واسعة جدًا، مثل وصول قابل للكتابة من الجميع لملف إعداد، لأنه مريح في المختبر لكنه خطر في الواقع.",
    ),
    l(
      "Forgetting that a service disabled now will not start again after a reboot unless you also disable it for startup, or forgetting that a service enabled now will persist.",
      "النسيان أن الخدمة التي توقفها الآن لن تبدأ مجددًا بعد إعادة التشغيل ما لم تعطّلها أيضًا عند الإقلاع، أو نسيان أن الخدمة التي فعّلتها الآن ستستمر.",
    ),
  ],
  bestPractices: [
    l(
      "Use a standard account for everyday work and escalate only when a task truly requires elevated privileges.",
      "استخدم حسابًا عاديًا للعمل اليومي وقفز إلى الصلاحيات العليا فقط عندما تتطلب المهمة ذلك حقًا.",
    ),
    l(
      "Assign each person their own account and use groups to share access, so actions are traceable and permissions stay minimal.",
      "امنح كل شخص حسابه الخاص واستخدم المجموعات لمشاركة الوصول، حتى تُعزى الإجراءات وتَبقى الصلاحيات في حدها الأدنى.",
    ),
    l(
      "Apply the least-privilege permission that still lets the system work, and review permissions on sensitive configuration and log files.",
      "طبّق صلاحية الأقل التي تظل النظام يعمل بها، وراجع صلاحيات ملفات الإعداد والسجلات الحساسة.",
    ),
    l(
      "Keep packages and the kernel updated, enable the firewall, restrict remote root login and keep time and logging enabled.",
      "حافظ على تحديث الحزم والنواة، وفعّل جدار الحماية، وقيد تسجيل دخول الجذر عن بُعد، وأبقِ الوقت والتسجيل مفعّلين.",
    ),
  ],
  keyTakeaways: [
    l(
      "Linux is a kernel-based, multi-user operating system whose predictability comes from a single filesystem tree rooted at /.",
      "لينكس نظام تشغيل متعدد المستخدمين قائم على النواة، وتأتي قابلية التنبؤ به من شجرة ملفات موحدة متجذرة عند /.",
    ),
    l(
      "The shell, especially Bash, is the primary interface; a small set of commands gives you precise control.",
      "الصدفة، وخاصة Bash، هي الواجهة الأساسية؛ ومجموعة صغيرة من الأوامر تمنحك سيطرة دقيقة.",
    ),
    l(
      "Ownership and permissions (chmod, chown) are the core mechanism controlling who can read, write or execute.",
      "الملكية والصلاحيات (chmod وchown) هي الآلية الأساسية التي تتحكم في من يمكنه القراءة أو الكتابة أو التنفيذ.",
    ),
    l(
      "Processes and services are inspected with ps, pgrep, kill and systemctl; logs live under /var/log and journalctl.",
      "تُدقّق العمليات والخدمات عبر ps وpgrep وkill وsystemctl؛ وتوجد السجلات تحت /var/log وjournalctl.",
    ),
    l(
      "Hardening means fewer services, fewer accounts, updated packages, restricted root access and a firewall.",
      "التقوية تعني خدمات أقل وحسابات أقل وحزمًا محدّثة ووصولًا مقيدًا للجذر وجدار حماية.",
    ),
  ],
  lab: {
    title: l("Lab 2 — Linux Command Line & Permissions", "المختبر 2 — سطر أوامر لينكس والصلاحيات"),
    scenario: l(
      "You are a junior administrator joining a small company that runs its web platform on Linux. Your first task is to build a safe working baseline: orient yourself in the filesystem, create a practice area, set up a small team account and group, apply correct permissions, and inspect the running services and logs. This lab builds the hands-on Linux skills you will use in every later lab and investigation.",
      "أنت مسؤول مبتدئ تنضم إلى شركة صغيرة تشغّل منصتها على لينكس. مهمتك الأولى هي بناء خط أساس آمن للعمل: التوجيه في نظام الملفات، وإنشاء منطقة للتدرّب، وإعداد حساب ومجموعة لفريق صغير، وتطبيق صلاحيات صحيحة، وتدقيق الخدمات العاملة والسجلات. يبني هذا المختبر مهارات لينكس العملية التي ستستخدمها في كل لاحق من المختبر والتحقيق.",
    ),
    safety: l(
      "Run this lab only on an isolated Linux virtual machine or a container that you own or are explicitly authorized to use. Do not run any command against a real production server, a public host, or a machine you do not control. Commands shown here are safe and non-destructive when practiced in the lab area you create. Never disable security controls, delete system files, or modify other users' accounts. If a command fails or looks unexpected, stop and record what you see rather than retrying blindly.",
      "نفّذ هذا المختبر فقط على جهاز لينكس افتراضي معزول أو حاوية تملكها أو لديك إذن صريح باستخدامها. لا تنفذ أي أمر على خادم إنتاجي حقيقي أو مضيف عام أو جهاز لا تتحكم به. الأوامر المعروضة هنا آمنة وغير مدمرة عند التدرّب عليها في منطقة المختبر التي تنشئها. لا تُعطّل أبدًا ضوابط الأمن أو تحذف ملفات النظام أو تغيّر حسابات مستخدمين آخرين. إذا فشل أمر أو بدا غير متوقع، توقّف وسجّل ما تراه بدلًا من إعادة المحاولة بشكل أعمى.",
    ),
    steps: [
      l("Open a terminal and orient yourself with pwd and ls", "افتح صدفة ووجّه نفسك بأمر pwd وls"),
      l("Explore the filesystem hierarchy and note key directories", "استكشف تسلسل الملفات وسجّل المجلدات الرئيسية"),
      l("Create a practice directory and files", "أنشئ مجلدًا للتدرّب وملفات"),
      l("Create a user and a group for the practice team", "أنشئ مستخدمًا ومجموعة للفريق المختبري"),
      l("Apply and verify permissions with chmod and chown", "طبّق الصلاحيات وتحقق منها بـ chmod وchown"),
      l("Inspect processes and a service with systemctl", "دقّق العمليات وخدمة ما بـ systemctl"),
      l("Read recent logs and write a short baseline note", "اقرأ السجلات الحديثة واكتب ملاحظة خط أساس قصيرة"),
    ],
    expected: l(
      "You produce a working baseline: a recorded filesystem map, a practice directory with correctly permissioned files, a created user and group with verified access, an inspection of at least one running service, and a short written note describing what each command revealed. The permissions you apply follow least privilege, and your note identifies nothing running that you did not expect.",
      "تنتج خط أساس عملي: خريطة مسجلة لنظام الملفات، ومجلد للتدريب بملفات ذات صلاحيات صحيحة، ومستخدمًا ومجموعة مع تحقق من الوصول، وتدقيقًا لخدمة عاملة واحدة على الأقل، وملاحظة مكتوبة قصيرة تصف ما كشفه كل أمر. وتكون الصلاحيات التي تطبقها متوافقة مع مبدأ أقل صلاحية، وتحدد ملاحظتك أي شيء يعمل لم تتوقعه.",
    ),
    tool: "perm",
    objectives: [
      l("Use the Linux terminal to navigate and manage files and directories", "استخدام سطر أوامر لينكس للتنقل وإدارة الملفات والمجلدات"),
      l("Create and manage users and groups", "إنشاء وإدارة المستخدمين والمجموعات"),
      l("Apply and interpret file permissions with chmod and chown", "تطبيق وتفسير صلاحيات الملفات بـ chmod وchown"),
      l("Inspect processes, services and logs", "تدقيق العمليات والخدمات والسجلات"),
      l("Apply least-privilege and hardening habits", "تطبيق عادات أقل صلاحية والتقوية"),
    ],
    prerequisites: [
      l("Session 4: operating system fundamentals (kernel, processes, services)", "الجلسة 4: أساسيات أنظمة التشغيل (النواة والعمليات والخدمات)"),
      l("Comfort with a command-line interface is helpful but not required", "الراحة في واجهة سطر الأوامر مفيدة لكنها ليست شرطًا"),
    ],
    environment: l(
      "An isolated Linux virtual machine (for example Ubuntu Server 24.04) or a container, with a snapshot taken before starting. A separate practice directory under /home or /tmp is used for all changes. No connection to a real production network.",
      "جهاز لينكس افتراضي معزول (مثل Ubuntu Server 24.04) أو حاوية، مع أخذ لقطة قبل البدء. ويُستخدم مجلد تدريب منفصل تحت /home أو /tmp لجميع التغييرات. ولا يوجد اتصال بشبكة إنتاجية حقيقية.",
    ),
    tools: [
      l("Linux terminal and Bash shell", "الصدفة وBash في لينكس"),
      l("ls, pwd, cd, mkdir, touch, cat, cp, mv", "ls وpwd وcd وmkdir وtouch وcat وcp وmv"),
      l("chmod, chown, useradd, groupadd, passwd", "chmod وchown وuseradd وgroupadd وpasswd"),
      l("ps, pgrep, kill, systemctl, journalctl", "ps وpgrep وkill وsystemctl وjournalctl"),
      l("apt (or dnf), ip, ss, ufw", "apt أو dnf، وip وss وufw"),
    ],
    authorization: l(
      "Scope: an isolated lab virtual machine or container that you own or have written permission to use. Prohibited: any real production system, public host, or machine outside the lab. Stop condition: if a command produces unexpected output, affects a service you did not intend to change, or you are unsure of the effect, stop and revert to the snapshot.",
      "النطاق: جهاز افتراضي أو حاوية مختبر معزول تملكه أو لديك إذن كتابي باستخدامه. المحظور: أي نظام إنتاجي حقيقي أو مضيف عام أو جهاز خارج المختبر. شرط التوقف: إذا أنتج أمر ناتجًا غير متوقع، أو أثر على خدمة لم تقصد تغييرها، أو لم تكن متأكدًا من التأثير، توقف وعد إلى اللقطة.",
    ),
    detailedSteps: [
      {
        title: l("Open the terminal and confirm your location", "افتح الصدفة وتحقق من موقعك"),
        command: "pwd && ls -la",
        explanation: l(
          "pwd prints the absolute path of the directory you are in, and ls -la lists all entries including hidden ones with details. This is the first step of any inspection: know exactly where you are before you act.",
          "يطبع pwd المسار المطلق للمجلد الذي أنت فيه، ويعرض ls -la جميع العناصر بما في ذلك المخفية مع التفاصيل. وهذه أول خطوة في أي تدقيق: اعرف بالضبط مكانك قبل أن تتصرف.",
        ),
        expected: l("The current directory path is printed, followed by a detailed listing of its contents.", "يُطبع مسار المجلد الحالي متبوعًا بقائمة مفصلة لمحتوياته."),
      },
      {
        title: l("Explore the filesystem hierarchy", "استكشف تسلسل الملفات"),
        command: "ls -la /",
        explanation: l(
          "Listing the root directory shows the top-level structure of the whole filesystem. Note the standard directories such as /home, /etc, /var, /usr and /tmp that you learned in the theory section.",
          "عرض المجلد الجذر يظهر البنية العليا لنظام الملفات بأكمله. لاحظ المجلدات القياسية مثل /home و/etc و/var و/usr و/tmp التي تعلمتها في الجزء النظري.",
        ),
        expected: l("A short list of the standard top-level directories is displayed.", "يُعرض قائمة قصيرة للمجلدات العليا القياسية."),
      },
      {
        title: l("Create a practice directory", "أنشئ مجلدًا للتدريب"),
        command: "mkdir -p ~/lab-permissions && cd ~/lab-permissions",
        explanation: l(
          "mkdir -p creates the directory and any missing parent directories, and the tilde (~) is a shortcut for the current user's home directory. cd moves you into the new practice area so all changes stay contained.",
          "يقوم mkdir -p بإنشاء المجلد وأي مجلدات أب مفقودة، ويمثل ~ اختصارًا للمجلد الرئيسي للمستخدم الحالي. وينقلك cd إلى منطقة التدريب الجديدة حتى تبقى جميع التغييرات محصورة.",
        ),
        expected: l("A new directory named lab-permissions is created under your home, and you are now inside it.", "يُنشأ مجلد جديد باسم lab-permissions تحت مجلدك الرئيسي، وتصبح داخله."),
      },
      {
        title: l("Create practice files and inspect permissions", "أنشئ ملفات للتدريب وتحقق من الصلاحيات"),
        command: "touch report.txt && ls -l report.txt",
        explanation: l(
          "touch creates an empty file without opening an editor, and ls -l shows its permission string, owner and group. This is how you read the three permission sets for a file.",
          "يقوم touch بإنشاء ملف فارغ دون فتح محرر، ويعرض ls -l سلسلة الصلاحيات والمالك والمجموعة. وبهذه الطريقة تقرأ مجموعات الصلاحيات الثلاث للملف.",
        ),
        expected: l("An empty file is created, and its permission string, owner and group are displayed.", "يُنشأ ملف فارغ، ويُعرض سلسلة الصلاحيات والمالك والمجموعة."),
      },
      {
        title: l("Create a user and a group", "أنشئ مستخدمًا ومجموعة"),
        command: "sudo groupadd labteam && sudo useradd -m -G labteam labuser",
        explanation: l(
          "groupadd creates a group named labteam, and useradd with -m creates a home directory and -G adds the user to the labteam group. This mirrors how administrators organize access in real systems.",
          "يقوم groupadd بإنشاء مجموعة باسم labteam، ويقوم useradd مع -m بإنشاء مجلد رئيسي، و-G يضيف المستخدم إلى مجموعة labteam. ويحاكي هذا كيف ينظم المسؤولون الوصول في الأنظمة الحقيقية.",
        ),
        expected: l("The group and user are created, and the new user is a member of the labteam group.", "تُنشأ المجموعة والمستخدم، ويصبح المستخدم الجديد عضوًا في مجموعة labteam."),
      },
      {
        title: l("Apply least-privilege permissions", "طبّق صلاحيات أقل صلاحية"),
        command: "chmod 640 report.txt && chown labuser:labteam report.txt && ls -l report.txt",
        explanation: l(
          "chmod 640 grants the owner read and write, the group read, and others nothing. chown sets the owner to labuser and the group to labteam. Re-listing confirms the change and lets you verify exactly what each class of user can do.",
          "يمنح chmod 640 المالك القراءة والكتابة، والمجموعة القراءة، ولا يمنح الآخرين أي شيء. ويحدد chown المالك بـ labuser والمجموعة بـ labteam. ويؤكد العرض مجددًا التغيير ويتيح التحقق بالضبط من ما يمكن لكل فئة من المستخدمين فعله.",
        ),
        expected: l("The permission string becomes -rw-r-----, owned by labuser and group labteam, confirming others have no access.", "تصبح سلسلة الصلاحيات -rw-r----- مملوكة لـ labuser ومجموعة labteam، مما يؤكد أن الآخرين لا يملكون أي وصول."),
      },
      {
        title: l("Inspect a running service", "دقّق خدمة عاملة"),
        command: "systemctl status ssh",
        explanation: l(
          "systemctl status shows whether the SSH service is active, inactive or failed, along with recent log lines. This is how you confirm a core service is healthy and gather evidence of its behavior.",
          "يُظهر systemctl status ما إذا كانت خدمة SSH نشطة أو غير نشطة أو فشلت، مع خطوط سجل حديثة. وبهذه الطريقة تؤكد صحة خدمة أساسية وتجمع أدلة على سلوكها.",
        ),
        expected: l("The service state is shown as active or inactive, with recent log output beneath it.", "تُعرض حالة الخدمة نشطة أو غير نشطة، مع سجل حديث أسفلها."),
      },
      {
        title: l("Read recent logs", "اقرأ السجلات الحديثة"),
        command: "journalctl -u ssh --no-pager | tail -n 20",
        explanation: l(
          "journalctl reads the logs for a service; --no-pager prints everything without waiting for interaction, and tail -n 20 shows only the most recent twenty lines. This is a focused way to review recent activity for a service.",
          "يقرأ journalctl سجلات خدمة ما؛ و--no-pager يطبع كل شيء دون انتظار تفاعل، وtail -n 20 يعرض آخر عشرين سطرًا فقط. وهي طريقة مركزة لمراجعة النشاط الحديث لخدمة ما.",
        ),
        expected: l("The most recent twenty log lines for the SSH service are displayed.", "تُعرض آخر عشرين سطرًا من سجلات خدمة SSH."),
      },
      {
        title: l("Check listening ports", "تحقق من المنافذ المنصتة"),
        command: "ss -tlnp",
        explanation: l(
          "ss lists sockets; with -tlnp it shows listening TCP ports, the programs and process identifiers behind them. This reveals which services are actually reachable on the machine.",
          "يعرض ss sockets؛ ومع -tlnp يعرض منافذ TCP المنصتة والبرامج ومعرفات العمليات خلفها. ويكشف هذا أي الخدمات قابلة للوصول فعليًا على الجهاز.",
        ),
        expected: l("A list of listening TCP ports and the processes that own them is displayed.", "يُعرض قائمة بمنافذ TCP المنصتة والعمليات التي تملكها."),
      },
    ],
    troubleshooting: [
      {
        problem: l("A command reports command not found", "يعرض أمر رسالة command not found"),
        fix: l("Check the spelling and that the program is installed; use which or command -v to confirm its location, and install it with the package manager if it is missing.", "تحقق من صحة الإملاء ومن أن البرنامج مثبّت؛ استخدم which أو command -v للتأكيد على موقعه، وثبّته عبر مدير الحزم إذا كان مفقودًا."),
      },
      {
        problem: l("chmod or chown fails with a permission error", "يفشل chmod أو chown بخطأ صلاحية"),
        fix: l("You are likely not the owner and not root. Run the command with sudo if you are authorized, or ask the owner to perform the change. Do not escalate without a reason.", "من المرجح أنك لست المالك ولست الجذر. شغّل الأمر مع sudo إذا كنت مخوّلًا، أو اطلب من المالك إجراء التغيير. ولا ترفع الصلاحيات دون سبب."),
      },
      {
        problem: l("The service status shows failed or inactive unexpectedly", "تظهر حالة الخدمة failed أو inactive بشكل غير متوقع"),
        fix: l("Read the logs with journalctl -u <service> to find the cause, confirm the service name with systemctl list-units, and do not restart repeatedly without understanding the failure.", "اقرأ السجلات بأمر journalctl -u <service> لمعرفة السبب، وتأكد من اسم الخدمة بـ systemctl list-units، ولا تعيد التشغيل مرارًا دون فهم الفشل."),
      },
      {
        problem: l("You created or changed something by mistake", "أنشأت أو غيّرت شيئًا عن طريق الخطأ"),
        fix: l("Do not continue making changes. Remove only the files you created in your practice directory, or restore the machine from its snapshot, and record what happened in your notes.", "لا تواصل إجراء المزيد من التغييرات. احذف فقط الملفات التي أنشأتها في منطقة التدريب، أو أعد الجهاز من لقطة، وسجّل ما حدث في ملاحظاتك."),
      },
    ],
    deliverables: [
      l("A short filesystem map listing the purpose of /home, /etc, /var, /usr, /root and /tmp", "خريطة مختصرة لنظام الملفات توضح غرض /home و/etc و/var و/usr و/root و/tmp"),
      l("Screenshots or recorded output of the practice directory, permission changes and ls -l results", "لقطات شاشة أو نواتج مسجلة للمجلد التدريبي وتغييرات الصلاحيات ونتائج ls -l"),
      l("The commands you ran and the permission strings before and after chmod and chown", "الأوامر التي نفذتها وسلاسل الصلاحيات قبل وبعد chmod وchown"),
      l("The created user and group, and the service and log inspection output", "المستخدم والمجموعة التي أنشأتها، وناتج تدقيق الخدمة والسجلات"),
      l("A one-paragraph baseline note describing what runs on the machine and any unexpected findings", "ملاحظة خط أساس من فقرة واحدة تصف ما يعمل على الجهاز وأي نتائج غير متوقعة"),
    ],
    rubric: [
      { criterion: l("Correct and complete command execution", "التنفيذ الصحيح والكامل للأوامر"), weight: 30 },
      { criterion: l("Correct permission values and clear before/after reasoning", "قيم صلاحيات صحيحة وتفكير واضح قبل/بعد"), weight: 25 },
      { criterion: l("Safe user and group setup following least privilege", "إعداد آمن للمستخدمين والمجموعات وفق أقل صلاحية"), weight: 20 },
      { criterion: l("Accurate service and log inspection with interpretation", "تدقيق دقيق للخدمات والسجلات مع تفسير"), weight: 15 },
      { criterion: l("Clear baseline note and clean documentation", "ملاحظة خط أساس واضحة وتوثيق منظم"), weight: 10 },
    ],
  },
  majorLabId: "lab-02",
  quiz: [
    {
      q: l("What is the main purpose of the Linux kernel?", "ما الغرض الرئيسي من نواة لينكس؟"),
      options: [
        l("To manage hardware and system resources and provide system calls", "لإدارة العتاد والموارد النظامية وتوفير استمرارات النظام"),
        l("To provide a graphical desktop environment", "لتوفير واجهة رسومية للمستخدم"),
        l("To install software packages automatically", "لتثبيت حزم البرمجيات تلقائيًا"),
        l("To act as a web server for websites", "لتعمل كخادم ويب للمواقع"),
      ],
      answer: 0,
      why: l("The kernel is the core that talks to hardware, manages memory and processes, and exposes system calls that user-space programs use.", "النواة هي القلب الذي يتحدث إلى العتاد، ويدير الذاكرة والعمليات، ويوفر استمرارات النظام التي تستخدمها برامج مساحة المستخدم."),
    },
    {
      q: l("Which of the following is a Linux distribution?", "أي مما يلي يعد توزيعة لينكس؟"),
      options: [
        l("Windows Server", "ويندوز سيرفر"),
        l("macOS", "ماك أو إس"),
        l("Ubuntu", "أوبنتو"),
        l("iOS", "آي أو إس"),
      ],
      answer: 2,
      why: l("Ubuntu is a Linux distribution that bundles the kernel with software and configuration; the others are different operating systems.", "أوبنتو توزيعة لينكس تجمع النواة مع البرمجيات والإعدادات؛ أما البقية فهي أنظمة تشغيل مختلفة."),
    },
    {
      q: l("What does the command pwd do?", "ما الذي يفعله أمر pwd؟"),
      options: [
        l("Lists files in the current directory", "يعرض الملفات في المجلد الحالي"),
        l("Creates a new directory", "ينشئ مجلدًا جديدًا"),
        l("Removes the current directory", "يحذف المجلد الحالي"),
        l("Prints the current working directory path", "يطبع مسار المجلد الحالي"),
      ],
      answer: 3,
      why: l("pwd stands for print working directory and prints the absolute path of the directory you are currently in.", "pwd اختصار لـ print working directory ويطبع المسار المطلق للمجلد الذي أنت فيه حاليًا."),
    },
    {
      q: l("Which directory is the standard location for system-wide configuration files?", "أي مجلد هو الموقع القياسي لملفات الإعداد النظامية الشاملة؟"),
      options: [
        l("/home", "/home"),
        l("/etc", "/etc"),
        l("/tmp", "/tmp"),
        l("/var/run", "/var/run"),
      ],
      answer: 1,
      why: l("/etc holds system-wide configuration files and is the first place to look when a service misbehaves.", "يحتوي /etc على ملفات الإعداد النظامية الشاملة وهو أول مكان للبحث عندما تتصرف خدمة بشكل خاطئ."),
    },
    {
      q: l("In the permission string -rw-r--r--, what can the group do?", "في سلسلة الصلاحيات -rw-r--r--، ما الذي يمكن للمجموعة فعله؟"),
      options: [
        l("Read only", "القراءة فقط"),
        l("Read and write", "القراءة والكتابة"),
        l("Execute only", "التنفيذ فقط"),
        l("Nothing", "لا شيء"),
      ],
      answer: 0,
      why: l("The group portion r-- grants read permission only; the owner has read and write, and others have read.", "تمنح مجموعة المجموعة r-- صلاحية القراءة فقط؛ المالك يملك القراءة والكتابة، والآخرون يملكون القراءة."),
    },
    {
      q: l("What does chmod 750 grant to the owner, group and others respectively?", "ما الذي يمنحه chmod 750 للمالك والمجموعة والآخرين على الترتيب؟"),
      options: [
        l("Owner read only, group execute, others nothing", "المالك قراءة فقط، والمجموعة تنفيذ، والآخرون لا شيء"),
        l("Everyone full access", "الجميع وصول كامل"),
        l("Owner full access, group full access, others read", "المالك وصول كامل، والمجموعة وصول كامل، والآخرون قراءة"),
        l("Owner full access, group read and execute, others nothing", "المالك وصول كامل، والمجموعة قراءة وتنفيذ، والآخرون لا شيء"),
      ],
      answer: 3,
      why: l("7 = read, write, execute for the owner; 5 = read and execute for the group; 0 = no access for others.", "7 تعني القراءة والكتابة والتنفيذ للمالك؛ 5 تعني القراءة والتنفيذ للمجموعة؛ 0 تعني لا وصول للآخرين."),
    },
    {
      q: l("Which command changes the owner and group of a file?", "أي أمر يغيّر مالك ومستخدم مجموعة الملف؟"),
      options: [
        l("chmod", "chmod"),
        l("chgrp", "chgrp"),
        l("chown", "chown"),
        l("ls", "ls"),
      ],
      answer: 2,
      why: l("chown changes both the owner and the group of a file or directory; chmod only changes permissions.", "يغيّر chown كل من المالك والمجموعة للملف أو المجلد؛ أما chmod فيغيّر الصلاحيات فقط."),
    },
    {
      q: l("Which command is used to inspect the status of a service managed by systemd?", "أي أمر يُستخدم لتدقيق حالة خدمة يديرها systemd؟"),
      options: [
        l("systemctl status", "systemctl status"),
        l("ps aux", "ps aux"),
        l("ls -l", "ls -l"),
        l("apt update", "apt update"),
      ],
      answer: 0,
      why: l("systemctl status shows whether a service is active, inactive or failed and includes recent log lines.", "يُظهر systemctl status ما إذا كانت الخدمة نشطة أو غير نشطة أو فشلت، ويشمل خطوط سجل حديثة."),
    },
    {
      q: l("Where do most Linux system logs typically live?", "أين توجد معظم سجلات لينكس النظامية عادةً؟"),
      options: [
        l("/home directory", "مجلد /home"),
        l("/etc", "/etc"),
        l("/root", "/root"),
        l("/var/log", "/var/log"),
      ],
      answer: 3,
      why: l("/var/log is the standard location for log files, with auth.log, syslog and kern.log among the common ones.", "/var/log هو الموقع القياسي لملفات السجلات، ويوجد ضمنه auth.log وsyslog وkern.log بين الشائعات."),
    },
    {
      q: l("What is the safest default account practice on a Linux server?", "ما أفضل ممارسة افتراضية للحسابات على خادم لينكس؟"),
      options: [
        l("Share one root login among the team", "مشاركة تسجيل دخول جذر واحدة بين الفريق"),
        l("Give every person a separate standard account and escalate only when needed", "امنح كل شخص حسابًا عاديًا منفصلًا وارفع الصلاحيات فقط عند الحاجة"),
        l("Disable all logins permanently", "تعطيل جميع تسجيلات الدخول نهائيًا"),
        l("Use root for every daily task", "استخدام الجذر في كل مهمة يومية"),
      ],
      answer: 1,
      why: l("Separate accounts make actions traceable and follow least privilege; root is reserved for tasks that truly require it.", "تجعل الحسابات المنفصلة الإجراءات قابلة للتتبع وتتبع مبدأ أقل صلاحية؛ ويُحتفظ بالجذر للمهام التي تتطلب ذلك حقًا."),
    },
    {
      q: l("Which command lists listening TCP ports and their owning processes?", "أي أمر يعرض منافذ TCP المنصتة والعمليات التي تملكها؟"),
      options: [
        l("ls -l", "ls -l"),
        l("cat /etc/hosts", "cat /etc/hosts"),
        l("ss -tlnp", "ss -tlnp"),
        l("chmod 640", "chmod 640"),
      ],
      answer: 2,
      why: l("ss with -tlnp shows listening TCP sockets together with the program and process identifier that owns each.", "يعرض ss مع -tlnp sockets TCP المنصتة مع البرنامج ومعرف العملية الذي يملك كل منها."),
    },
    {
      q: l("What is the main security risk of making a configuration file world-writable?", "ما الخطر الأمني الرئيسي لجعل ملف إعداد قابلًا للكتابة من الجميع؟"),
      options: [
        l("Any local account can modify it, enabling privilege escalation or service tampering", "يمكن لأي حساب محلي تعديله، مما يتيح رفع الصلاحيات أو التلاعب بالخدمة"),
        l("The file becomes larger", "يصبح الملف أكبر"),
        l("The file cannot be read", "لا يمكن قراءة الملف"),
        l("The file is deleted on reboot", "يُحذف الملف عند إعادة التشغيل"),
      ],
      answer: 0,
      why: l("World-writable configuration lets any local account alter how a service runs, which is a common path to privilege escalation and tampering.", "يتيح الإعداد القابل للكتابة من الجميع لأي حساب محلي تغيير كيفية تشغيل خدمة، وهو مسار شائع لرفع الصلاحيات والتلاعب."),
    },
  ],
  trueFalse: [
    {
      q: l("The Linux kernel runs in user space.", "تعمل نواة لينكس في مساحة المستخدم."),
      answer: false,
      why: l("The kernel runs in privileged kernel mode, separate from user space where ordinary programs run.", "تعمل النواة في وضع النواة المحصّن، منفصلة عن مساحة المستخدم حيث تعمل البرامج العادية."),
    },
    {
      q: l("/etc is the standard directory for system-wide configuration files.", "/etc هو المجلد القياسي لملفات الإعداد النظامية الشاملة."),
      answer: true,
      why: l("/etc holds system-wide configuration and is a key location for investigating service behavior.", "يحتوي /etc على الإعدادات النظامية الشاملة وهو موقع أساسي للتحقيق في سلوك الخدمات."),
    },
    {
      q: l("chmod changes the owner of a file.", "يغيّر chmod مالك الملف."),
      answer: false,
      why: l("chmod changes permissions only; chown changes ownership.", "يغيّر chmod الصلاحيات فقط؛ أما chown فيغيّر الملكية."),
    },
    {
      q: l("The root account can perform any action on a Linux system.", "يمكن لحساب الجذر تنفيذ أي إجراء على نظام لينكس."),
      answer: true,
      why: l("Root is the superuser with full privileges, which is why it must be protected and used sparingly.", "الجذر هو المستخدم الخارق ذو الصلاحيات الكاملة، ولهذا يجب حمايته واستخدامه بحكمة."),
    },
    {
      q: l("Linux logs are stored under /var/log.", "تُخزن سجلات لينكس تحت /var/log."),
      answer: true,
      why: l("/var/log is the standard location for system, authentication and kernel logs.", "/var/log هو الموقع القياسي للسجلات النظامية وسجلات المصادقة والنواة."),
    },
    {
      q: l("It is always safe to run rm on a path you have not double-checked.", "من الآمن دائمًا تنفيذ rm على مسار لم تتحقق منه مرتين."),
      answer: false,
      why: l("rm removes files permanently with no recycle bin, so an unchecked path can delete the wrong file.", "يحذف rm الملفات نهائيًا دون سلة محذوفات، لذا قد يحذف المسار غير المراجع الملف الخاطئ."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each Linux directory by its typical role", "صنّف كل مجلد لينكس بحسب وظيفته النموذجية"),
      categories: [
        l("User personal data", "البيانات الشخصية للمستخدم"),
        l("System configuration", "إعدادات النظام"),
        l("Variable data & logs", "البيانات المتغيرة والسجلات"),
        l("Executable programs", "البرامج القابلة للتنفيذ"),
      ],
      items: [
        { text: l("/home", "/home"), answer: 0 },
        { text: l("/etc", "/etc"), answer: 1 },
        { text: l("/var/log", "/var/log"), answer: 2 },
        { text: l("/usr/bin", "/usr/bin"), answer: 3 },
      ],
      why: l("/home holds user directories, /etc holds configuration, /var holds variable data and logs, and /usr/bin holds executable programs.", "يحتوي /home على مجلدات المستخدم، و/etc على الإعدادات، و/var على البيانات المتغيرة والسجلات، و/usr/bin على البرامج القابلة للتنفيذ."),
    },
    {
      prompt: l("Match each permission value to its meaning", "زاوج كل قيمة صلاحية مع معناها"),
      categories: [
        l("Read, write and execute", "القراءة والكتابة والتنفيذ"),
        l("Read and execute", "القراءة والتنفيذ"),
        l("No access", "لا وصول"),
        l("Read and write", "القراءة والكتابة"),
      ],
      items: [
        { text: l("7", "7"), answer: 0 },
        { text: l("5", "5"), answer: 1 },
        { text: l("0", "0"), answer: 2 },
        { text: l("6", "6"), answer: 3 },
      ],
      why: l("7 = 4+2+1 (read, write, execute); 5 = 4+1 (read, execute); 0 = none; 6 = 4+2 (read, write).", "7 = 4+2+1 (قراءة وكتابة وتنفيذ)؛ 5 = 4+1 (قراءة وتنفيذ)؛ 0 = لا شيء؛ 6 = 4+2 (قراءة وكتابة)."),
    },
    {
      prompt: l("Classify each item as kernel-space or user-space", "صنّف كل عنصر إلى مساحة النواة أو مساحة المستخدم"),
      categories: [
        l("Kernel space", "مساحة النواة"),
        l("User space", "مساحة المستخدم"),
      ],
      items: [
        { text: l("Kernel", "النواة"), answer: 0 },
        { text: l("Bash shell", "صدفة Bash"), answer: 1 },
        { text: l("systemd service manager", "مدير الخدمات systemd"), answer: 0 },
        { text: l("Web server application", "تطبيق خادم الويب"), answer: 1 },
      ],
      why: l("The kernel and systemd's core run in kernel space; the shell and ordinary applications run in user space.", "تعمل النواة ونواة systemd في مساحة النواة؛ وتعمل الصدفة والتطبيقات العادية في مساحة المستخدم."),
    },
    {
      prompt: l("Classify each command by its primary purpose", "صنّف كل أمر بحسب وظيفته الأساسية"),
      categories: [
        l("Navigation", "التنقل"),
        l("Permissions", "الصلاحيات"),
        l("Processes & services", "العمليات والخدمات"),
        l("File listing", "عرض الملفات"),
      ],
      items: [
        { text: l("cd", "cd"), answer: 0 },
        { text: l("chmod", "chmod"), answer: 1 },
        { text: l("systemctl", "systemctl"), answer: 2 },
        { text: l("ls", "ls"), answer: 3 },
      ],
      why: l("cd changes directory, chmod changes permissions, systemctl controls services, and ls lists files.", "يغيّر cd المجلد، ويغيّر chmod الصلاحيات، ويتحكم systemctl في الخدمات، ويعرض ls الملفات."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "You inspect a Linux server and find a configuration file under /etc that is writable by all users. The file controls how a critical service starts.",
        "تدقّق خادم لينكس فتجد ملف إعداد تحت /etc قابلًا للكتابة من جميع المستخدمين. ويتحكم هذا الملف في كيفية بدء خدمة حاسمة.",
      ),
      question: l("What is the best first action?", "ما أفضل إجراء أول؟"),
      options: [
        l("Leave it, since it is only a lab machine", "اتركه لأنه مجرد جهاز مختبري"),
        l("Tighten it with chmod to restrict access to the owning service account", "تشديده بأمر chmod لتقييد الوصول بحساب الخدمة المالك"),
        l("Delete the file to remove the risk", "حذف الملف لإزالة الخطر"),
        l("Grant all users execute permission to balance access", "منح جميع المستخدمين صلاحية التنفيذ لموازنة الوصول"),
      ],
      answer: 1,
      why: l("Restricting the file to the owning service account removes the unnecessary exposure while keeping the service working, which follows least privilege.", "تقييد الملف بحساب الخدمة المالك يزيل التعرض غير الضروري مع بقاء الخدمة تعمل، وهو ما يتبع مبدأ أقل صلاحية."),
    },
    {
      scenario: l(
        "A team member asks you to share one root login so everyone can manage the server quickly.",
        "يطلب أحد أفراد الفريق مشاركة تسجيل دخول جذر واحدة ليتمكن الجميع من إدارة الخادم بسرعة.",
      ),
      question: l("What is the correct response?", "ما الرد الصحيح؟"),
      options: [
        l("Agree, because it is faster", "وافق لأنه أسرع"),
        l("Refuse and instead give each person a separate account with escalated access only when needed", "رفض وإعطاء كل شخص حسابًا منفصلًا مع رفع الصلاحيات فقط عند الحاجة"),
        l("Agree but write down who used it", "وافق لكن سجّل من استخدمه"),
        l("Disable root entirely and use no authentication", "تعطيل الجذر بالكامل واستخدام بدون مصادقة"),
      ],
      answer: 1,
      why: l("Shared root logins destroy traceability and violate least privilege; separate accounts with controlled escalation are the correct practice.", "تدمر تسجيلات الدخول الم المشتركة للجذر إمكانية التتبع وتخالف مبدأ أقل صلاحية؛ الحسابات المنفصلة مع الترقية الخاضعة للرقابة هي الممارسة الصحيحة."),
    },
    {
      scenario: l(
        "After an update, a service on your lab machine will not start and systemctl status shows it as failed.",
        "بعد تحديث، لم تعد خدمة على جهازك المختبري تبدأ، ويظهر systemctl status أنها فشلت.",
      ),
      question: l("What is the most logical next step?", "ما الخطوة التالية الأكثر منطقية؟"),
      options: [
        l("Repeatedly restart the service without looking at anything", "إعادة تشغيل الخدمة مرارًا دون النظر إلى أي شيء"),
        l("Read the service logs with journalctl to find the cause", "قراءة سجلات الخدمة بأمر journalctl لمعرفة السبب"),
        l("Delete the service files to force a clean state", "حذف ملفات الخدمة لإجبار حالة نظيفة"),
        l("Reinstall the entire operating system", "إعادة تثبيت نظام التشغيل بالكامل"),
      ],
      answer: 1,
      why: l("The logs for the service usually state why it failed, so reading them with journalctl is the correct diagnostic first step.", "تشير سجلات الخدمة عادة إلى سبب الفشل، لذا فإن قراءتها بأمر journalctl هي الخطوة التشخيصية الأولى الصحيحة."),
    },
  ],
  practicalChecks: [
    {
      task: l("Given the mode 640, state what the owner, group and others can do", "بالنظر إلى القيمة 640، حدد ما يمكن للمالك والمجموعة والآخرين فعله"),
      expected: l("Owner can read and write, the group can read, and others have no access.", "المالك يمكنه القراءة والكتابة، والمجموعة يمكنها القراءة، والآخرون لا يملكون أي وصول."),
      hint: l("Add the bits: 4 = read, 2 = write, 1 = execute, per group.", "اجمع الخانات: 4 = قراءة، 2 = كتابة، 1 = تنفيذ، لكل مجموعة."),
    },
    {
      task: l("Explain why a world-writable file under /etc is a security concern", "اشرح سبب أن الملف القابل للكتابة من الجميع تحت /etc يمثل خطرًا أمنيًا"),
      expected: l("Any local account could modify it to change service behavior or gain privileges, enabling tampering or escalation.", "يمكن لأي حساب محلي تعديله لتغيير سلوك الخدمة أو اكتساب صلاحيات، مما يتيح التلاعب أو رفع الصلاحيات."),
    },
  ],
  homework: {
    title: l("Homework 5 — Build a Linux baseline and a permissions plan", "الواجب 5 — بناء خط أساس لينكس وخطة صلاحيات"),
    tasks: [
      l("On an isolated Linux lab machine or container, run a short inspection and record the output of pwd, ls /, and systemctl status for at least two services.", "على جهاز لينكس مختبري معزول أو حاوية، نفذ تدقيقًا قصيرًا وسجّل نواتج pwd وls / وsystemctl status لخدمتين على الأقل."),
      l("Create a practice directory and a file, then document the permission string before and after applying chmod 640 and a chown to a user and group you choose.", "أنشئ مجلدًا للتدريب وملفًا، ثم وثّق سلسلة الصلاحيات قبل وبعد تطبيق chmod 640 وchown لمستخدم ومجموعة تختاره."),
      l("List the listening TCP ports with ss -tlnp and note which services they correspond to.", "اعرض منافذ TCP المنصتة بأمر ss -tlnp وسجّل الخدمات التي تقابلها."),
      l("Write a short paragraph describing two hardening steps you would apply to a Linux server and why each matters.", "اكتب فقرة قصيرة تصف خطوتين من خطوات التقوية ستطبقها على خادم لينكس وسبب أهمية كل منهما."),
    ],
    deliverable: l(
      "A single short document (or a set of screenshots with notes) containing the recorded inspection outputs, the before/after permission comparison, the listening-port list, and the two-step hardening paragraph.",
      "وثيقة قصيرة واحدة (أو مجموعة لقطات مع ملاحظات) تحتوي على نواتج التدقيق المسجلة، ومقارنة الصلاحيات قبل/بعد، وقائمة المنافذ المنصتة، وفقرة التقوية ذات الخطوتين.",
    ),
    criteria: [
      l("Commands are executed correctly and outputs are recorded accurately", "تُنفذ الأوامر بصورة صحيحة وتُسجّل النواتج بدقة"),
      l("The permission reasoning is correct and the before/after comparison is clear", "يكون التفكير في الصلاحيات صحيحًا وتكون المقارنة قبل/بعد واضحة"),
      l("The listening-port list is correct and correctly linked to services", "تكون قائمة المنافذ المنصتة صحيحة ومرتبطة بالخدمات بشكل صحيح"),
      l("The hardening steps are practical and justified", "تكون خطوات التقوية عملية ومبررة"),
    ],
    challenge: l(
      "Optional challenge: create a small group, add two users, and set up a shared directory where the group can read and write but others cannot. Document the exact commands and verify the result by switching to each user.",
      "مهمة تحدٍ اختيارية: أنشئ مجموعة صغيرة، وأضف مستخدمين، وأعدّ مجلدًا مشتركًا يمكن للمجموعة قراءته وكتابته لكن لا يمكن للآخرين. ووثّق الأوامر الدقيقة وتحقق من النتيجة بالتبديل إلى كل مستخدم.",
    ),
  },
  refs: [
    { title: "The Linux Kernel documentation", org: "kernel.org", url: "https://www.kernel.org/doc/html/latest/" },
    { title: "GNU Coreutils manual", org: "GNU", url: "https://www.gnu.org/software/coreutils/" },
    { title: "systemd documentation", org: "Freedesktop", url: "https://www.freedesktop.org/wiki/Software/systemd/" },
    { title: "Ubuntu Server documentation", org: "Ubuntu", url: "https://documentation.ubuntu.com/server/" },
    { title: "Red Hat Enterprise Linux documentation", org: "Red Hat", url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/" },
    { title: "CIS Benchmarks", org: "Center for Internet Security", url: "https://www.cisecurity.org/benchmark" },
  ],
  terms: [
    { term: l("Linux", "لينكس"), def: l("A family of open-source operating systems built around the Linux kernel.", "عائلة من أنظمة التشغيل مفتوحة المصدر مبنية حول نواة لينكس."), example: l("Most web servers and cloud hosts run Linux.", "يعمل معظم خوادم الويب والاستضافة السحابية بلينكس.") },
    { term: l("Kernel", "النواة"), def: l("The core program that manages hardware, memory and processes and provides system calls.", "البرنامج الأساسي الذي يدير العتاد والذاكرة والعمليات ويوفر استمرارات النظام."), example: l("The Linux kernel schedules all running processes.", "تجدول نواة لينكس جميع العمليات العاملة.") },
    { term: l("Distribution (distro)", "التوزيعة"), def: l("A complete operating system built from the Linux kernel plus software, tools and configuration.", "نظام تشغيل متكامل مبني من نواة لينكس مع البرمجيات والأدوات والإعدادات."), example: l("Ubuntu and Red Hat are two popular distributions.", "أوبنتو وريد هات توزيعتان شائعتان.") },
    { term: l("Shell", "الصدفة"), def: l("The program that reads, interprets and runs commands entered in the terminal.", "البرنامج الذي يقرأ الأوامر ويفسرها وينفذها المدخلة في الصدفة."), example: l("Bash is the default shell on most Linux systems.", "Bash هو الصدفة الافتراضية على معظم أنظمة لينكس.") },
    { term: l("Bash", "Bash"), def: l("The Bourne Again Shell, the default command interpreter on most Linux distributions.", "صدفة Bourne Again، وهي مترجم الأوامر الافتراضي على معظم توزيعات لينكس."), example: l("You can write commands directly in Bash.", "يمكنك كتابة الأوامر مباشرة في Bash.") },
    { term: l("Terminal", "الطرفية"), def: l("The window or interface in which you type commands for the shell to execute.", "النافذة أو الواجهة التي تكتب فيها الأوامر لتنفيذها عبر الصدفة."), example: l("Open a terminal to start working on Linux.", "افتح طرفية لتبدأ العمل على لينكس.") },
    { term: l("Filesystem hierarchy", "تسلسل الملفات"), def: l("The unified tree of directories rooted at / that organizes all files on Linux.", "شجرة موحدة من المجلدات متجذرة عند / تنظم جميع الملفات على لينكس.") },
    { term: l("Root directory (/)", "المجلد الجذر"), def: l("The single top-level directory from which every other directory and file hangs.", "المجلد العلوي الوحيد الذي تتفرع منه جميع المجلدات والملفات الأخرى."), example: l("Everything on Linux lives under /.", "كل شيء على لينكس يعيش تحت /.") },
    { term: l("/home", "/home"), def: l("The directory holding each user's personal files and configuration.", "المجلد الذي يحتوي على الملفات الشخصية والإعدادات لكل مستخدم.") },
    { term: l("/etc", "/etc"), def: l("The directory holding system-wide configuration files.", "المجلد الذي يحتوي على ملفات الإعداد النظامية الشاملة.") },
    { term: l("/var", "/var"), def: l("The directory holding variable data such as logs and spools.", "المجلد الذي يحتوي على البيانات المتغيرة مثل السجلات والقوائم.") },
    { term: l("/var/log", "/var/log"), def: l("The standard location for system, authentication and kernel log files.", "الموقع القياسي لملفات السجلات النظامية وسجلات المصادقة والنواة.") },
    { term: l("/usr/bin", "/usr/bin"), def: l("A directory containing executable programs available to all users.", "مجلد يحتوي على برامج قابلة للتنفيذ متاحة لجميع المستخدمين.") },
    { term: l("/root", "/root"), def: l("The superuser home directory, which must be kept restricted.", "المجلد الرئيسي للمستخدم الخارق الذي يجب أن يبقى مقيدًا.") },
    { term: l("/tmp", "/tmp"), def: l("The directory for temporary files, typically cleared on reboot.", "المجلد للملفات المؤقتة، ويُزال عادةً عند إعادة التشغيل.") },
    { term: l("Absolute path", "المسار المطلق"), def: l("A path that starts at the root and unambiguously identifies a location.", "مسار يبدأ من الجذر ويحدد موقعًا دون التباس."), example: l("/etc/ssh/sshd_config is an absolute path.", "/etc/ssh/sshd_config مسار مطلق.") },
    { term: l("Relative path", "المسار النسبي"), def: l("A path given relative to the current directory.", "مسار يُعطى نسبيًا إلى المجلد الحالي."), example: l("../logs/auth.log is a relative path.", "../logs/auth.log مسار نسبي.") },
    { term: l("User account", "حساب المستخدم"), def: l("A named identity that can log in and perform actions on the system.", "هوية مسمّاة يمكنها تسجيل الدخول وتنفيذ إجراءات على النظام.") },
    { term: l("Group", "المجموعة"), def: l("A collection of user accounts that share a set of permissions.", "مجموعة من حسابات المستخدم تشترك في مجموعة من الصلاحيات.") },
    { term: l("Owner", "المالك"), def: l("The user account that owns a file or directory and controls its permissions.", "حساب المستخدم الذي يملك ملفًا أو مجلدًا ويتحكم في صلاحياته.") },
    { term: l("chmod", "chmod"), def: l("The command that changes the read, write and execute permissions of a file.", "الأمر الذي يغيّر صلاحيات القراءة والكتابة والتنفيذ للملف."), example: l("chmod 640 report.txt sets safe permissions.", "يضع chmod 640 report.txt صلاحيات آمنة.") },
    { term: l("chown", "chown"), def: l("The command that changes the owner and group of a file or directory.", "الأمر الذي يغيّر مالك ومستخدم مجموعة الملف أو المجلد.") },
    { term: l("Permission", "الصلاحية"), def: l("A setting that controls who can read, write or execute a file or directory.", "إعداد يتحكم في من يمكنه القراءة أو الكتابة أو التنفيذ لملف أو مجلد.") },
    { term: l("Process", "العملية"), def: l("A running program with its own memory and process identifier.", "برنامج قيد التشغيل له ذاكرة خاصة ومعرف عملية."), example: l("Every command you run is a process.", "كل أمر تنفذه هو عملية.") },
    { term: l("Service", "الخدمة"), def: l("A process that runs in the background to provide a function such as web or logging.", "عملية تعمل في الخلفية لتقديم وظيفة مثل الويب أو التسجيل.") },
    { term: l("systemd", "systemd"), def: l("The init system and service manager that starts and controls services on modern Linux.", "نظام التهيئة ومدير الخدمات الذي يبدأ الخدمات ويتحكم فيها على لينكس الحديث.") },
    { term: l("Package manager", "مدير الحزم"), def: l("The tool that installs, updates and removes software packages and resolves dependencies.", "الأداة التي تثبت الحزم وتحديثها وإزالتها وتحل الاعتماديات."), example: l("apt and dnf are package managers.", "apt وdnf مديران للحزم.") },
    { term: l("Firewall", "جدار الحماية"), def: l("A control that filters network traffic according to a set of rules.", "ضابط يقفل مرور الشبكة وفق مجموعة من القواعد."), example: l("ufw and firewalld manage Linux firewall rules.", "يدير ufw وfirewalld قواعد جدار حماية لينكس.") },
    { term: l("Hardening", "التقوية"), def: l("Reducing a system's attack surface by tightening defaults and reducing unnecessary access.", "تقليل سطح الهجوم للنظام عبر تشديد القيم الافتراضية وتقليل الوصول غير الضروري.") },
    { term: l("Least privilege", "أقل صلاحية"), def: l("The principle of granting only the minimum access needed to perform a task.", "مبدأ منح الحد الأدنى من الوصول اللازم لأداء مهمة.") },
  ],
};
