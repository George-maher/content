import { l, type Session } from "../types";

export const s06: Session = {
  id: 6,
  phase: 2,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Windows Administration & Active Directory Fundamentals",
    "إدارة ويندوز وأساسيات مجال Active Directory",
  ),
  summary: l(
    "How Windows is organized, how local users, groups and NTFS permissions work, how to inspect processes and services, and how organizations centrally manage identities and access with Active Directory, Organizational Units and Group Policy.",
    "كيف يُنظّم ويندوز، وكيف تعمل المستخدمات والمجموعات المحلية وصلاحيات NTFS، وكيف تتأكد من العمليات والخدمات، وكيف تدير المؤسسات الهويات والوصول مركزيًا عبر Active Directory والمجلدات التنظيمية وسياسة المجموعة.",
  ),
  overview: l(
    "Windows dominates the desktops and servers of most organizations, and the identity system that protects them is Active Directory. This session gives you a working understanding of Windows as an administrator: the filesystem and permissions, the tools you use to inspect a machine, and the core ideas behind Active Directory Domain Services. You will learn how a domain centralizes users, groups and policies so that a change made once applies everywhere it should. The goal is administrative literacy, not advanced administration.",
    "يهيمن ويندوز على أجهزة سطح المكتب والخوادم في معظم المؤسسات، ونظام الهوية الذي يحميها هو Active Directory. تمنحك هذه الجلسة فهمًا عمليًا لويندوز من منظور المسؤول: نظام الملفات والصلاحيات، والأدوات التي تستخدمها لتدقيق الجهاز، والأفكار الأساسية خلف خدمات مجال Active Directory. ستتعلم كيف يمركز المجال المستخدمين والمجموعات والسياسات بحيث يطبق التغيير الذي يُجرى مرة واحدة في كل مكان يجب أن يُطبق. والهدف هو معرفة إدارية، لا إدارة متقدمة.",
  ),
  whyItMatters: l(
    "Most real attacks on organizations begin with a compromised account or a misconfigured permission, and most of those accounts live in Active Directory. When you understand how Windows identities, groups and policies work, you can see why a weak password, an over-broad group or a poorly scoped policy creates risk across the entire network. Active Directory literacy is essential for anyone moving into SOC, identity or penetration-testing work.",
    "تبدأ معظم الهجمات الحقيقية على المؤسسات بحساب مخترق أو صلاحية مضبوطة بشكل خاطئ، وأغلب تلك الحسابات تعيش في Active Directory. عندما تفهم كيف تعمل هويات ويندوز ومجموعاته وسياساته، يمكنك رؤية سبب أن كلمة المرور الضعيفة أو المجموعة الواسعة جدًا أو السياسة غير الموسومة جيدًا تخلق خطرًا على الشبكة بأكملها. معرفة Active Directory ضرورية لأي شخص يتجه إلى عمل SOC أو الهوية أو اختبار الاختراق.",
  ),
  prerequisites: [
    l(
      "Session 4, Operating System Foundations: understand processes, services, users and permissions at a conceptual level.",
      "الجلسة 4، أساسيات أنظمة التشغيل: افهم العمليات والخدمات والمستخدمين والصلاحيات بمستوى مفاهيمي.",
    ),
    l(
      "Comfort using a Windows computer; no previous Windows Server or Active Directory experience is required.",
      "الراحة في استخدام حاسوب ويندوز؛ لا تُشترط أي خبرة سابقة بـ Windows Server أو Active Directory.",
    ),
    l(
      "A legal and ethical mindset: only practice on Windows machines you own or are authorized to use.",
      "عقلية قانونية وأخلاقية: تدرب فقط على أجهزة ويندوز تملكها أو لديك إذن باستخدامها.",
    ),
  ],
  objectives: [
    l(
      "Describe the main components of Windows architecture and how NTFS organizes files and permissions.",
      "وصف المكونات الرئيسية لبنية ويندوز وكيف ينظم NTFS الملفات والصلاحيات.",
    ),
    l(
      "Use Task Manager, Services and Event Viewer to inspect a Windows machine.",
      "استخدام Task Manager والخدمات ومعرض الأحداث لتدقيق جهاز ويندوز.",
    ),
    l(
      "Explain local users, groups, permissions and the principle of least privilege on Windows.",
      "شرح المستخدمين والمجموعات المحلية والصلاحيات ومبدأ أقل صلاحية على ويندوز.",
    ),
    l(
      "Describe Active Directory Domain Services: domains, Domain Controllers, users, groups and Organizational Units.",
      "وصف خدمات مجال Active Directory: المجالات، وأجهزة التحكم بالمجال، والمستخدمين، والمجموعات، والمجلدات التنظيمية.",
    ),
    l(
      "Explain Group Policy, domain authentication and the role of Kerberos and NTLM at an introductory level.",
      "شرح سياسة المجموعة والمصادقة في المجال ودور Kerberos وNTLM بمستوى مبتدئ.",
    ),
    l(
      "Apply first-step Windows hardening and understand the admin's daily security habits.",
      "تطبيق خطوات التقوية الأولى على ويندوز وفهم عاداته الأمنية اليومية للمسؤول.",
    ),
  ],
  agenda: [
    { label: l("Welcome, overview and prior-knowledge check", "الترحيب والنظرة العامة والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Windows architecture and the NTFS filesystem", "بنية ويندوز ونظام ملفات NTFS"), minutes: 12 },
    { label: l("Local users, groups and Windows permissions", "المستخدمون والمجموعات المحلية وصلاحيات ويندوز"), minutes: 12 },
    { label: l("Processes, services, Task Manager and Event Viewer", "العمليات والخدمات وTask Manager ومعرض الأحداث"), minutes: 12 },
    { label: l("Windows Defender, firewall and basic hardening", "Windows Defender وجدار الحماية والتقوية الأساسية"), minutes: 10 },
    { label: l("Windows Server and Active Directory Domain Services", "Windows Server وخدمات مجال Active Directory"), minutes: 14 },
    { label: l("Users, groups, Organizational Units and Group Policy", "المستخدمون والمجموعات والمجلدات التنظيمية وسياسة المجموعة"), minutes: 11 },
    { label: l("Domain authentication and hardening in practice", "المصادقة في المجال والتقوية عمليًا"), minutes: 6 },
    { label: l("Instructor demonstration and practical exercise", "عرض المدرب والتمرين العملي"), minutes: 8 },
  ],
  introduction: l(
    "Windows is the operating system most people encounter first, and it is also the identity backbone of countless organizations. This session moves from the machine you sit at to the system that governs it. We begin with how Windows is organized, how its filesystem and permissions control access, and the built-in tools that let you inspect what is running and what has happened. We then reach the heart of the matter: Active Directory, the directory service that stores user and computer accounts and lets an organization manage them from one place. By the end you will understand domains, Organizational Units, Group Policy and authentication enough to reason about security decisions on a Windows network.",
    "ويندوز هو نظام التشغيل الذي يواجهه معظم الناس أولًا، وهو أيضًا العمود الفقري للهوية في عدد لا يحصى من المؤسسات. تنتقل هذه الجلسة من الجهاز الذي تجلس أمامه إلى النظام الذي يحكمه. نبدأ بكيفية تنظيم ويندوز، وكيف يتحكم نظام الملفات والصلاحيات في الوصول، والأدوات المدمجة التي تتيح لك تدقيق ما يعمل وما الذي حدث. ثم نصل إلى جوهر الأمر: Active Directory، خدمة الدليل التي تخزن حسابات المستخدمين وأجهزة الحاسوب وتتيح للمؤسسة إدارتها من مكان واحد. وبنهاية الجلسة ستفهم المجالات والمجلدات التنظيمية وسياسة المجموعة والمصادقة بما يكفي للتفكير في القرارات الأمنية على شبكة ويندوز.",
  ),
  sections: [
    {
      h: l("1. Windows architecture", "1. بنية ويندوز"),
      p: [
        l(
          "Windows is a layered operating system built around the Windows NT kernel. Above the kernel sit the executive services, the security subsystem that handles authentication and authorization, and the subsystems that run applications. Windows is designed around the idea of accounts and security identifiers (SIDs): every user, group and computer has a unique identifier, and access decisions are made by comparing these identifiers against the permissions on resources. This account-and-permission model is the foundation of everything in this session.",
          "ويندوز نظام تشغيل متعدد الطبقات مبني حول نواة Windows NT. فوق النواة توجد الخدمات التنفيذية، والنظام الفرعي للأمن الذي يعالج المصادقة والتفويض، والأنظمة الفرعية التي تشغل التطبيقات. صُمم ويندوز حول فكرة الحسابات والمعرفات الأمنية (SIDs): لكل مستخدم ومجموعة وجهاز حاسوب معرف فريد، وتتخذ قرارات الوصول بمضاهاة هذه المعرفات مع الصلاحيات على الموارد. ونموذج الحسابات والصلاحيات هذا هو أساس كل ما في هذه الجلسة.",
        ),
        l(
          "Two architectural distinctions matter for security. First, there is a difference between a workstation, which is a single user's desktop, and a server, which provides services to other computers. Second, there is a difference between local accounts, which exist on one machine, and domain accounts, which exist in Active Directory and can be used across the network. Understanding which type of account you are dealing with tells you where to look and how broad an impact a change will have.",
          "تفارقين معماريين يهمّان الأمن. الأول: الفرق بين جهاز العمل، وهو سطح مكتب مستخدم واحد، وبين الخادم، الذي يوفر خدمات لأجهزة أخرى. الثاني: الفرق بين الحسابات المحلية، التي توجد على جهاز واحد، وحسابات المجال، التي توجد في Active Directory ويمكن استخدامها عبر الشبكة. وفهم نوع الحساب الذي تتعامل معه يحدد أين تبحث ومدى اتساع تأثير التغيير.",
        ),
      ],
    },
    {
      h: l("2. Windows filesystem and NTFS", "2. نظام ملفات ويندوز وNTFS"),
      p: [
        l(
          "The default filesystem on modern Windows is NTFS, the New Technology File System. NTFS organizes files in directories and supports a rich permission model: each file and folder can have an access-control list (ACL) that specifies which users and groups can read, modify, or take ownership. NTFS permissions are inherited, meaning a permission set on a parent folder flows down to the files and subfolders within it unless you explicitly block inheritance.",
          "نظام الملفات الافتراضي على ويندوز الحديث هو NTFS، نظام ملفات التقنية الجديدة. ينظم NTFS الملفات في مجلدات ويدعم نموذج صلاحيات غنيًا: يمكن لكل ملف ومجلد أن يحتوي على قائمة تحكم بالوصول (ACL) تحدد أي المستخدمين والمجموعات يمكنهم القراءة أو التعديل أو الاستيلاء على الملكية. وتكون صلاحيات NTFS قابلة للوراثة، أي إن الصلاحية المضبوطة على مجلد أب تتدفق إلى الملفات والمجلدات الفرعية داخله ما لم تمنع الوراثة صراحةً.",
        ),
        l(
          "Key locations to know include C:\\Windows for the operating system, C:\\Program Files for installed applications, and C:\\Users for each user's profile and personal files. Configuration is stored under C:\\Windows\\System32\\config and in the registry, a central database of settings. When investigating, you look in these locations to understand what is installed, what is configured, and who has been using the machine.",
          "تشمل المواقع الرئيسية التي ينبغي معرفتها C:\\Windows للنظام، وC:\\Program Files للتطبيقات المثبّتة، وC:\\Users لملف تعريف كل مستخدم وملفاته الشخصية. وتُخزن الإعدادات تحت C:\\Windows\\System32\\config وفي السجل، وهو قاعدة بيانات مركزية للإعدادات. وعند التحقيق، تبحث في هذه المواقع لفهم ما هو مثبّت وما هو مضبوط ومن الذي استخدم الجهاز.",
        ),
      ],
    },
    {
      h: l("3. Local users and groups", "3. المستخدمون والمجموعات المحلية"),
      p: [
        l(
          "Every Windows machine maintains local accounts. There are two important types: standard user accounts, which have limited permissions for everyday tasks, and administrator accounts, which can install software and change system settings. There is also the built-in Administrator account, a powerful account that should normally be disabled or renamed because it is a prime target. Local groups, such as Administrators, Users and Remote Desktop Users, collect accounts so you can grant permissions to many at once.",
          "يحافظ كل جهاز ويندوز على حسابات محلية. وهناك نوعان مهمان: حسابات المستخدم العادي، التي لها صلاحيات محدودة للمهام اليومية، وحسابات المسؤول، التي يمكنها تثبيت البرمجيات وتغيير إعدادات النظام. وهناك أيضًا حساب Administrator المدمج، وهو حساب قوي ينبغي عادةً تعطيله أو تغيير اسمه لأنه هدف رئيسي. وتجمع المجموعات المحلية، مثل Administrators وUsers وRemote Desktop Users، الحسابات لتتمكن من منح صلاحيات للكثيرين دفعة واحدة.",
        ),
        l(
          "Adding and managing accounts is done through the Users settings or with the net user command, such as net user amelia password /add, and adding a user to a group with net localgroup Administrators amelia /add. The security habit is to give each person a unique standard account, grant administrator rights only when necessary, and avoid sharing logins so that every action is attributable to a person.",
          "يُنفذ إنشاء الحسابات وإدارتها عبر إعدادات المستخدمين أو بأمر net user، مثل net user amelia password /add، ويُضاف المستخدم إلى مجموعة بأمر net localgroup Administrators amelia /add. والعادة الأمنية هي منح كل شخص حسابًا عاديًا فريدًا، ومنح صلاحيات المسؤول فقط عند الضرورة، وتجنب مشاركة تسجيلات الدخول حتى تُنسب كل إجراء إلى شخص بعينه.",
        ),
      ],
    },
    {
      h: l("4. Windows permissions and the principle of least privilege", "4. صلاحيات ويندوز ومبدأ أقل صلاحية"),
      p: [
        l(
          "Windows permissions work on the same idea as the access-control lists you saw on Linux: they define who can read, write, modify or take ownership of a resource. You inspect and change them in the file properties' Security tab, where you see a list of users and groups and their allowed actions. The principle of least privilege applies directly: every account should have only the permissions it needs to do its job, no more.",
          "تعمل صلاحيات ويندوز على الفكرة نفسها التي رأيتها في قوائم التحكم بالوصول على لينكس: فهي تحدد من يمكنه قراءة مورد أو الكتابة فيه أو تعديله أو الاستيلاء على ملكيته. وتدققها وتغيرها في تبويبات الأمان ضمن خصائص الملف، حيث ترى قائمة بالمستخدمين والمجموعات والإجراءات المسموح بها. ويُطبق مبدأ أقل صلاحية مباشرة: يجب أن يحصل كل حساب فقط على الصلاحيات التي يحتاجها لأداء وظيفته، لا أكثر.",
        ),
        l(
          "Permission mistakes are common and dangerous. Granting a standard user administrative rights on a workstation, or adding a whole department to an over-broad group, gives more access than the job requires. If that account or group is later compromised, the attacker inherits that excess access. A disciplined permission review, done when someone joins, moves or leaves, is one of the highest-value security controls on a Windows network.",
          "أخطاء الصلاحيات شائعة وخطيرة. فمنح مستخدم عادي صلاحيات مسؤول على جهاز العمل، أو إضافة قسم كامل إلى مجموعة واسعة جدًا، يمنح وصولًا أكثر مما تتطلب الوظيفة. وإذا تم اختراق ذلك الحساب أو المجموعة لاحقًا، يكتسب المهاجم ذلك الوصول الزائد. ومراجعة الصلاحيات المنضبطة، التي تُجرى عند انضمام شخص أو انتقاله أو مغادرته، هي أحد أهم ضوابط الأمن على شبكة ويندوز.",
        ),
      ],
    },
    {
      h: l("5. Processes, services, Task Manager and Event Viewer", "5. العمليات والخدمات وTask Manager ومعرض الأحداث"),
      p: [
        l(
          "Task Manager is the primary tool for seeing what is running on a Windows machine. It shows applications, the CPU, memory and disk usage, and a detailed list of processes with the user who owns each one. If a program is unresponsive or consuming too much resource, Task Manager lets you see it and, if needed, end it. Reading the process list is also a quick way to spot something unexpected running under a user account.",
          "Task Manager هو الأداة الأساسية لرؤية ما يعمل على جهاز ويندوز. يُظهر التطبيقات، واستخدام المعالج والذاكرة والقرص، وقائمة مفصلة بالعمليات مع المستخدم الذي يملك كل منها. وإذا كان برنامج لا يستجيب أو يستهلك موارد زائدة، يتيح لك Task Manager رؤيته، وإذا لزم الأمر إنهاءه. كما أن قراءة قائمة العمليات طريقة سريعة لاكتشاف شيء غير متوقع يعمل تحت حساب مستخدم.",
        ),
        l(
          "The Services management tool (services.msc) shows the background services that start at boot, similar to systemd on Linux. Each service has a status, a start type and a log-on account. Event Viewer (eventvwr.msc) is where Windows records important events: security events such as logons, application errors and system changes. Reviewing Security logs for successful and failed logons is a fundamental detection skill, because a burst of failed logons often signals a password attack.",
          "تُظهر أداة إدارة الخدمات (services.msc) الخدمات الخلفية التي تبدأ عند الإقلاع، على غرار systemd على لينكس. ولكل خدمة حالة ونوع بدء وحساب تسجيل دخول. ومعرض الأحداث (eventvwr.msc) هو المكان الذي يسجل فيه ويندوز الأحداث المهمة: الأحداث الأمنية مثل تسجيلات الدخول وأخطاء التطبيقات وتغييرات النظام. وتُعد مراجعة سجلات الأمان لتسجيلات الدخول الناجحة والفاشلة مهارة كشف أساسية، لأن سلسلة من تسجيلات الدخول الفاشلة تشير غالبًا إلى هجوم بكلمة المرور.",
        ),
      ],
    },
    {
      h: l("6. Windows Defender, firewall and basic hardening", "6. Windows Defender وجدار الحماية والتقوية الأساسية"),
      p: [
        l(
          "Windows includes built-in protection. Windows Defender provides antivirus and anti-malware scanning, and the Windows Firewall filters network traffic based on rules, controlling which programs and connections are allowed. Both run by default, but their effectiveness depends on keeping them enabled and up to date, and on not disabling them casually.",
          "يحتوي ويندوز على حماية مدمجة. يوفر Windows Defender فحصًا لمكافحة الفيروسات والبرمجيات الخبيثة، ويقوم جدار حماية ويندوز بتصفية مرور الشبكة وفق القواعد، متحكّمًا في البرامج والاتصالات المسموح بها. يعمل كلاهما افتراضيًا، لكن فعاليتهما تعتمد على إبقائهما مفعّلين وحديثين، وعدم تعطيلهما بلا مبرر.",
        ),
        l(
          "First-step hardening on Windows means enabling automatic updates, keeping antivirus current, ensuring the firewall is on, restricting remote desktop access to trusted users, enforcing strong passwords and multi-factor authentication, and disabling unnecessary services and accounts. Like Linux, the goal is to reduce the attack surface: fewer running services, fewer open ports, fewer privileged accounts and stronger authentication.",
          "تعني التقوية الأولى على ويندوز تفعيل التحديثات التلقائية، والحفاظ على مكافحة الفيروسات حديثة، والتأكد من تشغيل جدار الحماية، وتقييد الوصول عن بُعد عبر سطح المكتب للمستخدمين الموثوقين، وفرض كلمات مرور قوية والمصادقة متعددة العوامل، وتعطيل الخدمات والحسابات غير الضرورية. وكما في لينكس، الهدف هو تقليل سطح الهجوم: خدمات أقل، ومنافذ مفتوحة أقل، وحسابات محصّنة أقل، ومصادقة أقوى.",
      ),
      ],
    },
    {
      h: l("7. Windows Server and Active Directory Domain Services", "7. Windows Server وخدمات مجال Active Directory"),
      p: [
        l(
          "Active Directory Domain Services (AD DS) is the directory service that stores and manages identities for a Windows network. It runs on a Windows Server machine that has been configured as a Domain Controller, the authoritative server for the domain. AD DS stores objects: user accounts, computer accounts, groups and the policies that govern them. Because these objects live in one central place, an administrator can add a user once and that user can log in to any computer in the domain.",
          "خدمات مجال Active Directory (AD DS) هي خدمة الدليل التي تخزن وتدير الهويات لشبكة ويندوز. تعمل على خادم Windows Server تم إعداده كجهاز تحكم بالمجال، وهو الخادم المعتمد للمجال. وتخزن AD DS كائنات: حسابات المستخدمين، وحسابات الأجهزة، والمجموعات، والسياسات التي تحكمها. وبما أن هذه الكائنات تعيش في مكان مركزي واحد، يمكن للمسؤول إضافة مستخدم مرة واحدة ويمكن ذلك المستخدم تسجيل الدخول إلى أي جهاز في المجال.",
        ),
        l(
          "A domain is a network of computers and devices that share a common identity and a common set of security policies, identified by a domain name such as corp.example.com. The Domain Controller authenticates users and computers and applies policy. This centralization is both the strength and the risk: a single well-protected Domain Controller secures the whole network, but a compromise of it can affect every account in the domain, which is why Domain Controllers are hardened and monitored more strictly than ordinary servers.",
          "المجال هو شبكة من أجهزة الحاسوب والأجهزة التي تشترك في هوية مشتركة ومجموعة مشتركة من السياسات الأمنية، ويُعرَّف باسم مجال مثل corp.example.com. يقوم جهاز التحكم بالمجال بمصادقة المستخدمين وأجهزة الحاسوب ويطبق السياسة. ويكون هذا المركز القوة والخطر معًا: فجهاز تحكم مجال واحد محمي جيدًا يؤمّن الشبكة بأكملها، لكن اختراقه يمكن أن يؤثر على كل حساب في المجال، ولهذا يتم تقوية أجهزة التحكم بالمجال ومراقبتها بصرامة أكبر من الخوادم العادية.",
        ),
      ],
      diagram: {
        kind: "layers",
        title: l("Active Directory domain structure", "بنية مجال Active Directory"),
        caption: l(
          "The domain holds the Domain Controller; within it, Organizational Units organize users, groups and computers, and Group Policy applies settings to each.",
          "يحتوي المجال على جهاز التحكم بالمجال؛ وداخله تنظم المجلدات التنظيمية المستخدمين والمجموعات وأجهزة الحاسوب، وتطبق سياسة المجموعة الإعدادات على كل منها.",
        ),
        nodes: [
          { label: l("Domain (corp.example.com)", "المجال (corp.example.com)"), desc: l("The shared identity boundary", "حدّ الهوية المشترك") },
          { label: l("Domain Controller", "جهاز التحكم بالمجال"), desc: l("Authenticates users and computers, stores AD", "يقوم بمصادقة المستخدمين والأجهزة ويخزن Active Directory") },
          { label: l("Organizational Units", "المجلدات التنظيمية"), desc: l("Organize users, groups and computers", "تنظم المستخدمين والمجموعات وأجهزة الحاسوب") },
          { label: l("Group Policy", "سياسة المجموعة"), desc: l("Applies settings and controls to OUs", "تطبق الإعدادات والضوابط على المجلدات التنظيمية") },
        ],
      },
    },
    {
      h: l("8. Users, groups, Organizational Units and Group Policy", "8. المستخدمون والمجموعات والمجلدات التنظيمية وسياسة المجموعة"),
      p: [
        l(
          "Administrators organize Active Directory using Organizational Units (OUs), which are containers for users, groups and computers. OUs give structure and, more importantly, a place to apply Group Policy. Group Policy (GPO) is the mechanism that sets and enforces configuration across the objects in an OU, such as password requirements, software restrictions or desktop settings. An OU for finance might get stricter password and screen-lock policies than an OU for a public lab.",
          "يدير المسؤولون Active Directory باستخدام المجلدات التنظيمية (OUs)، وهي حاويات للمستخدمين والمجموعات وأجهزة الحاسوب. وتمنح المجلدات التنظيمية بنية، والأهم من ذلك مكانًا لتطبيق سياسة المجموعة. وسياسة المجموعة (GPO) هي الآلية التي تضبط الإعدادات وتفرضها على الكائنات في المجلد التنظيمي، مثل متطلبات كلمات المرور أو قيود البرمجيات أو إعدادات سطح المكتب. فقد يحصل المجلد التنظيمي للمالية على سياسات كلمات مرور وإغلاق شاشة أشد من المجلد التنظيمي لموقع عام.",
        ),
        l(
          "Groups in Active Directory collect users so access is granted to the group, not to individuals. Security groups control access to resources; distribution groups are used for email. By placing users in the right groups and OUs, an administrator defines both who can do what and which policies apply. The discipline is to assign group membership when someone joins, moves or leaves, and to review it regularly so access does not quietly accumulate.",
          "تجمع المجموعات في Active Directory المستخدمين بحيث يُمنح الوصول إلى المجموعة لا إلى الأفراد. وتتحكم مجموعات الأمان في الوصول إلى الموارد؛ وتُستخدم مجموعات التوزيع للبريد. وبوضع المستخدمين في المجموعات والمجلدات التنظيمية الصحيحة، يحدد المسؤول من يمكنه فعل ماذا وأي السياسات تنطبق. وتنضبط الممارسة بتعيين عضوية المجموعة عند انضمام شخص أو انتقاله أو مغادرته، ومراجعتها بانتظام حتى لا يتراكم الوصول بصمت.",
        ),
      ],
    },
    {
      h: l("9. Domain authentication and hardening in practice", "9. المصادقة في المجال والتقوية عمليًا"),
      p: [
        l(
          "When a user logs in to a domain, Windows authenticates the account against Active Directory. Two authentication protocols are important to know at an introductory level. Kerberos is the default modern protocol: it uses tickets to verify identity securely and supports strong features such as mutual authentication. NTLM is an older challenge-response protocol still found in some environments. Understanding that Kerberos is the default and why it is preferred helps you reason about authentication security and legacy compatibility.",
          "عند تسجيل دخول مستخدم إلى مجال، يصادق ويندوز الحساب مع Active Directory. وهناك بروتوكولان مهمان للمعرفة بمستوى مبتدئ. Kerberos هو البروتوكول الحديث الافتراضي: يستخدم تذاكر للتحقق من الهوية بأمان ويدعم ميزات قوية مثل المصادقة المتبادلة. وNTLM بروتوكول أقدم قائم على التحدي والاستجابة لا يزال موجودًا في بعض البيئات. ويساعد فهم أن Kerberos هو الافتراضي وسبب تفضيله على التفكير في أمن المصادقة والتوافق مع الأنظمة القديمة.",
        ),
        l(
          "Hardening Active Directory means protecting the accounts and structure that everything depends on. Enable strong password policies and multi-factor authentication, especially for administrators. Use the principle of least privilege by separating administrative accounts from everyday accounts, restrict which accounts can log in to a Domain Controller, and protect the Domain Controllers themselves with updates, logging and monitoring. Because a compromise of Active Directory can cascade through the whole network, identity infrastructure deserves more care than ordinary servers.",
          "تعني تقوية Active Directory حماية الحسابات والبنية التي يعتمد عليها كل شيء. فعّل سياسات كلمات المرور القوية والمصادقة متعددة العوامل، وخاصة للمسؤولين. وطبّق مبدأ أقل صلاحية بفصل حسابات الإدارة عن حسابات الاستخدام اليومي، وقيد الحسابات التي يمكنها تسجيل الدخول إلى جهاز التحكم بالمجال، واحمِ أجهزة التحكم بالمجال نفسها بالتحديثات والتسجيل والمراقبة. ولأن اختراق Active Directory يمكن أن ينتشر عبر الشبكة بأكملها، فإن بنية الهوية تستحق عناية أكبر من الخوادم العادية.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "To see what is using resources on a Windows machine, open Task Manager (Ctrl+Shift+Esc), switch to the Processes tab, and sort by CPU or Memory. Each row shows the process name and the user who owns it, letting you spot an unexpected program running under a standard account.",
      "لرؤية ما يستهلك الموارد على جهاز ويندوز، افتح Task Manager (Ctrl+Shift+Esc)، وانتقل إلى تبويبات العمليات، ورتب حسب المعالج أو الذاكرة. يُظهر كل سطر اسم العملية والمستخدم الذي يملكها، مما يتيح اكتشاف برنامج غير متوقع يعمل تحت حساب عادي.",
    ),
    l(
      "To check a Windows Firewall rule, open Windows Security > Firewall & network protection and review the allowed apps and ports. This shows which programs and connections the firewall permits, which is the first place to look when you want to know what is reachable on the machine.",
      "للتحقق من قاعدة جدار حماية ويندوز، افتح Windows Security ثم Firewall & network protection واراجع التطبيقات والمنافذ المسموح بها. ويُظهر هذا البرامج والاتصالات التي يسمح بها جدار الحماية، وهو أول مكان للبحث عندما تريد معرفة ما هو قابل للوصول على الجهاز.",
    ),
    l(
      "In Active Directory Users and Computers, an administrator creates an OU called Finance, places finance user accounts and a finance computer account inside it, links a Group Policy that requires a strong password and a short screen-lock time, and the policy applies to every object in the OU automatically.",
      "في Active Directory Users and Computers، ينشئ المسؤول مجلدًا تنظيميًا باسم Finance، ويضع حسابات مستخدمي المالية وحساب جهاز المالية داخله، ويربط سياسة مجموعة تشترط كلمة مرور قوية ووقت قفل شاشة قصير، وتنطبق السياسة تلقائيًا على كل كائن في المجلد.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A finance employee receives a phishing email and clicks a link, then enters credentials on a fake login page. Because the credentials are domain credentials, the attacker uses them to log in to the real system. Reviewing Event Viewer security logs reveals a successful logon from an unfamiliar location, which is the first evidence of the compromise.",
      "يتلقى موظف مالي رسالة تصيّد ويضغط على رابط ثم يدخل بيانات الاعتماد على صفحة تسجيل دخول وهمية. ولأن بيانات الاعتماد هي بيانات مجال، يستخدمها المهاجم لتسجيل الدخول إلى النظام الحقيقي. وتكشف مراجعة سجلات الأمان في معرض الأحداث تسجيل دخول ناجحًا من موقع غير معروف، وهو أول دليل على الاختراق.",
    ),
    l(
      "A new employee joins the sales team. The administrator creates a user account, places it in the Sales OU, adds the user to the appropriate security group for file access, and links the Sales Group Policy. Because the account is created once in Active Directory and policy applies automatically, the new user can work immediately with exactly the access the role requires.",
      "ينضم موظف جديد إلى فريق المبيعات. ينشئ المسؤول حساب مستخدم، ويضعته في مجلد Sales التنظيمي، ويضيف المستخدم إلى مجموعة الأمان المناسبة للوصول إلى الملفات، ويربط سياسة مجموعة المبيعات. ولأن الحساب يُنشأ مرة واحدة في Active Directory وتُطبق السياسة تلقائيًا، يمكن للمستخدم الجديد العمل فورًا بالوصول بالضبط الذي تتطلبه المهمة.",
    ),
    l(
      "An attacker repeatedly tries to log in to a user account over the network. A burst of failed logon events appears in the Security log in Event Viewer. Recognizing the pattern, an administrator alerts the SOC, the account is temporarily locked, and the source is investigated before the attacker can guess a valid password.",
      "يحاول مهاجم تسجيل الدخول إلى حساب مستخدم عبر الشبكة مرارًا. وتظهر سلسلة من أحداث تسجيل الدخول الفاشلة في سجل الأمان في معرض الأحداث. وبالتعرف على هذا النمط، يبلغ المسؤول فريق SOC، ويُغلق الحساب مؤقتًا، ويُتحقق من المصدر قبل أن يتمكن المهاجم من تخمين كلمة مرور صحيحة.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("A user logs in to a domain", "تسجيل دخول مستخدم إلى مجال"),
    caption: l(
      "The user's account is checked by the Domain Controller using Active Directory, and policy is applied from the user's Organizational Unit.",
      "يتم التحقق من حساب المستخدم بواسطة جهاز التحكم بالمجال باستخدام Active Directory، وتُطبق السياسة من المجلد التنظيمي للمستخدم.",
    ),
    nodes: [
      { label: l("User signs in", "يقوم المستخدم بتسجيل الدخول"), desc: l("Enters credentials on a domain computer", "يدخل بيانات الاعتماد على جهاز مجال") },
      { label: l("Domain Controller", "جهاز التحكم بالمجال"), desc: l("Authenticates against Active Directory", "يقوم بالمصادقة عبر Active Directory") },
      { label: l("Active Directory", "Active Directory"), desc: l("Checks the account and its group membership", "يتحقق من الحساب وعضوية مجموعته") },
      { label: l("Group Policy applied", "تطبيق سياسة المجموعة"), desc: l("Settings from the user's OU are enforced", "تُفرض الإعدادات من المجلد التنظيمي للمستخدم") },
    ],
  },
  instructorDemo: l(
    "Demonstrate on a Windows lab machine. Open Task Manager and point out a running process and its owning user. Open Services and show a service's status and start type. Open Event Viewer and navigate to Windows Logs > Security, and highlight a successful and a failed logon event, explaining what each tells you. If a Windows Server lab is available, open Active Directory Users and Computers, show an OU and a Group Policy link, and describe how a new user would be created and placed. Narrate every step and keep the demonstration on an isolated lab system.",
    "عرض على جهاز ويندوز مختبري. افتح Task Manager وأشر إلى عملية عاملة والمستخدم الذي يملكها. وافتح الخدمات وأظهر حالة خدمة ونوع بدءها. وافتح معرض الأحداث وانتقل إلى Windows Logs ثم Security، وأبرز حدث تسجيل دخول ناجح وآخر فاشل، واشرح ما الذي يخبرك به كل منهما. وإذا كان هناك خادم ويندوز مختبري، فافتح Active Directory Users and Computers، وأظهر مجلدًا تنظيميًا ورباط سياسة مجموعة، ووصف كيف سيُنشأ مستخدم جديد ويُوضع. وروِّ كل خطوة واحتفظ بالعرض على نظام مختبري معزول.",
  ),
  exercises: [
    {
      title: l("Inspect a Windows machine", "تدقيق جهاز ويندوز"),
      instructions: l(
        "On a lab Windows machine, open Task Manager and record three running processes with their owning users, open Services and note the status of two services, and open Event Viewer and find one successful and one failed logon event.",
        "على جهاز ويندوز مختبري، افتح Task Manager وسجّل ثلاث عمليات عاملة مع المستخدمين الذين يملكونها، وافتح الخدمات وسجّل حالة خدمتين، وافتح معرض الأحداث وابحث عن حدث تسجيل دخول ناجح وآخر فاشل.",
      ),
      expected: l(
        "A short record of the three processes with owners, the two service statuses, and the two logon events, with a sentence explaining what each type of event indicates.",
        "سجل قصير للثلاث عمليات مع المالكين، وحالة الخدمتين، وحدثي تسجيل الدخول، مع جملة تشرح ما يشير إليه كل نوع من الأحداث.",
      ),
    },
    {
      title: l("Reason about Active Directory structure", "التفكير في بنية Active Directory"),
      instructions: l(
        "Draw a simple Active Directory diagram for a small company: one domain, three Organizational Units (for example Finance, Engineering and Labs), and note where a new user and a Group Policy would be placed for the Finance team.",
        "ارسم مخططًا بسيطًا لـ Active Directory لشركة صغيرة: مجال واحد، وثلاثة مجلدات تنظيمية (مثل المالية والهندسة والمختبرات)، وحدد مكان المستخدم الجديد وسياسة المجموعة لفريق المالية.",
      ),
      expected: l(
        "A clear diagram showing the domain, the three OUs, the new user placed in the Finance OU, and the Group Policy linked to the Finance OU so it applies to the user.",
        "مخطط واضح يظهر المجال والمجلدات التنظيمية الثلاثة والمستخدم الجديد الموضوع في مجلد المالية وسياسة المجموعة المرتبطة بمجلد المالية لتطبق على المستخدم.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can describe Windows architecture and NTFS, inspect a machine with Task Manager, Services and Event Viewer, reason about local users, groups and permissions, and explain how Active Directory, Organizational Units and Group Policy centrally manage identities and access. You can describe domain authentication with Kerberos and NTLM and apply first-step Windows and Active Directory hardening.",
    "بعد هذه الجلسة يمكنك وصف بنية ويندوز وNTFS، وتدقيق الجهاز بـ Task Manager والخدمات ومعرض الأحداث، والتفكير في المستخدمين والمجموعات المحلية والصلاحيات، وشرح كيف تمركز Active Directory والمجلدات التنظيمية وسياسة المجموعة الهويات والوصول. ويمكنك وصف المصادقة في المجال باستخدام Kerberos وNTLM وتطبيق خطوات التقوية الأولى على ويندوز وActive Directory.",
  ),
  commonMistakes: [
    l(
      "Granting standard users administrative rights on workstations for convenience, which turns a single compromised account into full machine control.",
      "منح المستخدمين العاديين صلاحيات مسؤول على أجهزة العمل من أجل الراحة، مما يحول حسابًا واحدًا مخترقًا إلى سيطرة كاملة على الجهاز.",
    ),
    l(
      "Sharing or leaving enabled the built-in Administrator account, which is a well-known target and should be renamed or disabled.",
      "مشاركة أو إبقاء حساب Administrator المدمج مفعّلًا، وهو هدف معروف ويجب تغيير اسمه أو تعطيله.",
    ),
    l(
      "Applying over-broad group membership, such as adding a whole department to an administrative group, so a change in one role grants excessive access to many.",
      "تطبيق عضوية مجموعات واسعة جدًا، مثل إضافة قسم كامل إلى مجموعة إدارة، مما يجعل تغييرًا في دور واحد يمنح وصولًا زائدًا للكثيرين.",
    ),
    l(
      "Ignoring the Security log in Event Viewer, which holds the failed and successful logon evidence that is often the first sign of an attack.",
      "تجاهل سجل الأمان في معرض الأحداث، الذي يحتوي على أدلة تسجيلات الدخول الفاشلة والناجحة التي تكون غالبًا أول علامة على هجوم.",
    ),
    l(
      "Treating the Domain Controller like an ordinary server, when a compromise of it can affect every account in the domain.",
      "التعامل مع جهاز التحكم بالمجال كخادم عادي، بينما يمكن لاختراقه أن يؤثر على كل حساب في المجال.",
    ),
  ],
  bestPractices: [
    l(
      "Give every user a unique standard account and grant administrator rights only when a task truly requires them.",
      "امنح كل مستخدم حسابًا عاديًا فريدًا وامنح صلاحيات المسؤول فقط عندما تتطلب المهمة ذلك حقًا.",
    ),
    l(
      "Rename or disable the built-in Administrator account and protect privileged accounts with strong, unique credentials and multi-factor authentication.",
      "غيّر اسم حساب Administrator المدمج أو عطّله، واحمِ الحسابات المحصّنة ببيانات اعتماد قوية وفريدة وبالمصادقة متعددة العوامل.",
    ),
    l(
      "Organize users into appropriate Organizational Units and apply Group Policy to enforce configuration consistently.",
      "نظّم المستخدمين في مجلدات تنظيمية مناسبة وطبّق سياسة المجموعة لفرض الإعدادات بشكل متسق.",
    ),
    l(
      "Review group membership and permissions when people join, move or leave, and keep the Security log enabled and reviewed.",
      "راجع عضوية المجموعات والصلاحيات عند انضمام الأشخاص أو انتقالهم أو مغادرتهم، وأبقِ سجل الأمان مفعّلًا وتمت مراجعته.",
    ),
    l(
      "Harden Domain Controllers with updates, logging and monitoring, and separate administrative accounts from everyday accounts.",
      "عزّز أجهزة التحكم بالمجال بالتحديثات والتسجيل والمراقبة، وفصل حسابات الإدارة عن حسابات الاستخدام اليومي.",
    ),
  ],
  keyTakeaways: [
    l(
      "Windows is an account-and-permission operating system where every user, group and computer has a unique security identifier.",
      "ويندوز نظام تشغيل يعتمد على الحسابات والصلاحيات حيث يكون لكل مستخدم ومجموعة وجهاز معرف أمني فريد.",
    ),
    l(
      "NTFS permissions and ACLs control who can read, modify or own files, and they are inherited from parent folders.",
      "تتحكم صلاحيات NTFS وقوائم التحكم بالوصول في من يمكنه قراءة الملفات أو تعديلها أو امتلاكها، وهي تنتقل وراثة من المجلدات الأب.",
    ),
    l(
      "Task Manager, Services and Event Viewer are the core inspection tools for processes, services and security events.",
      "Task Manager والخدمات ومعرض الأحداث هي أدوات التدقيق الأساسية للعمليات والخدمات والأحداث الأمنية.",
    ),
    l(
      "Active Directory Domain Services stores identities on a Domain Controller and lets a user log in anywhere in the domain.",
      "تخزن خدمات مجال Active Directory الهويات على جهاز التحكم بالمجال وتتيح للمستخدم تسجيل الدخول في أي مكان في المجال.",
    ),
    l(
      "Organizational Units organize objects and give a place to apply Group Policy; Kerberos is the default domain authentication protocol.",
      "تنظم المجلدات التنظيمية الكائنات وتمنح مكانًا لتطبيق سياسة المجموعة؛ وKerberos هو بروتوكول المصادقة الافتراضي في المجال.",
    ),
  ],
  lab: {
    title: l("Lab 3 — Windows Administration & Active Directory", "المختبر 3 — إدارة ويندوز ومجال Active Directory"),
    scenario: l(
      "You are a junior administrator joining a company that runs a Windows Server domain with Active Directory. Your first task is to orient yourself on a Windows machine, inspect the running processes and services, review the security log, and then understand the domain structure by creating an Organizational Unit and planning a Group Policy for a new team. This lab builds the practical Windows and Active Directory skills you will use in identity and security work.",
      "أنت مسؤول مبتدئ تنضم إلى شركة تدير مجال Windows Server مع Active Directory. مهمتك الأولى هي التوجيه على جهاز ويندوز، وتدقيق العمليات والخدمات العاملة، ومراجعة سجل الأمان، ثم فهم بنية المجال بإنشاء مجلد تنظيمي والتخطيط لسياسة مجموعة لفريق جديد. يبني هذا المختبر المهارات العملية لويندوز وActive Directory التي ستستخدمها في عمل الهوية والأمن.",
    ),
    safety: l(
      "Run this lab only on an isolated Windows machine or a Windows Server lab environment that you own or are explicitly authorized to use. Do not perform any action against a real production domain, a public host, or a machine you do not control. Creating test users and Organizational Units is safe only in a lab domain. Never change or disable security controls, do not modify production account passwords, and do not disable services or the firewall outside the lab. If a step produces unexpected output or you are unsure of the effect, stop and record what you see rather than continuing.",
      "نفّذ هذا المختبر فقط على جهاز ويندوز معزول أو بيئة مختبر Windows Server تملكها أو لديك إذن صريح باستخدامها. لا تقم بأي إجراء على مجال إنتاجي حقيقي أو مضيف عام أو جهاز لا تتحكم به. فإنشاء مستخدمين للاختبار ومجلدات تنظيمية آمن فقط في مجال مختبري. ولا تُعطّل أبدًا ضوابط الأمن أو تغيّر كلمات مرور حسابات الإنتاج أو تُعطّل الخدمات أو جدار الحماية خارج المختبر. إذا أنتجت خطوة ناتجًا غير متوقع أو لم تكن متأكدًا من التأثير، توقف وسجّل ما تراه بدلًا من الاستمرار.",
    ),
    steps: [
      l("Open Task Manager and record running processes with their owning users", "افتح Task Manager وسجّل العمليات العاملة مع المستخدمين المالكين"),
      l("Inspect Services and note the status and start type of two services", "تدقق الخدمات وسجّل حالة ونوع بدء خدمتين"),
      l("Review the Security log in Event Viewer for successful and failed logons", "راجع سجل الأمان في معرض الأحداث لتسجيلات الدخول الناجحة والفاشلة"),
      l("Inspect local users and groups and identify account types", "تدقق المستخدمين والمجموعات المحلية وحدد أنواع الحسابات"),
      l("Examine file permissions on a sample file or folder", "افحص صلاحيات ملف أو مجلد نموذجي"),
      l("Map an Active Directory domain structure with OUs and Group Policy", "ارسم بنية مجال Active Directory بمجلدات تنظيمية وسياسة مجموعة"),
      l("Plan and document a least-privilege setup for a new team", "خطّط ووثّق إعدادًا بأقل صلاحية لفريق جديد"),
    ],
    expected: l(
      "You produce a working baseline: a recorded process and service inspection, a review of the security log with at least one successful and one failed logon event, an identification of local account types, a permission inspection, a mapped Active Directory structure with Organizational Units and Group Policy, and a documented least-privilege plan for a new team.",
      "تنتج خط أساس عملي: تدقيقًا مسجلًا للعمليات والخدمات، ومراجعة لسجل الأمان تشمل حدث تسجيل دخول ناجحًا واحدًا وآخر فاشلًا على الأقل، وتحديدًا لأنواع الحسابات المحلية، وفحصًا للصلاحيات، ومخططًا لبنية مجال Active Directory بمجلدات تنظيمية وسياسة مجموعة، وخطة موثقة بأقل صلاحية لفريق جديد.",
    ),
    tool: "rbac",
    objectives: [
      l("Inspect a Windows machine with Task Manager, Services and Event Viewer", "تدقيق جهاز ويندوز بـ Task Manager والخدمات ومعرض الأحداث"),
      l("Identify local users, groups and account types", "تحديد المستخدمين والمجموعات المحلية وأنواع الحسابات"),
      l("Interpret file permissions and apply least privilege", "تفسير صلاحيات الملفات وتطبيق أقل صلاحية"),
      l("Describe Active Directory domains, OUs and Group Policy", "وصف مجالات Active Directory والمجلدات التنظيمية وسياسة المجموعة"),
      l("Plan a least-privilege identity setup for a new team", "التخطيط لإعداد هوية بأقل صلاحية لفريق جديد"),
    ],
    prerequisites: [
      l("Session 4: operating system fundamentals (processes, services, permissions)", "الجلسة 4: أساسيات أنظمة التشغيل (العمليات والخدمات والصلاحيات)"),
      l("Session 5: comfort with accounts, groups and least privilege", "الجلسة 5: الراحة مع الحسابات والمجموعات وأقل صلاحية"),
    ],
    environment: l(
      "An isolated Windows 10/11 workstation and, where available, a Windows Server lab domain with Active Directory. All account and OU creation is done in a lab domain only. No connection to a real production domain or network.",
      "جهاز ويندوز 10/11 معزول، وحيث يكون متاحًا، مجال مختبري Windows Server مع Active Directory. ويُنفذ إنشاء الحسابات والمجلدات التنظيمية في مجال مختبري فقط. ولا يوجد اتصال بمجال أو شبكة إنتاجية حقيقية.",
    ),
    tools: [
      l("Task Manager (Ctrl+Shift+Esc)", "مدير المهام (Ctrl+Shift+Esc)"),
      l("Services (services.msc)", "الخدمات (services.msc)"),
      l("Event Viewer (eventvwr.msc)", "معرض الأحداث (eventvwr.msc)"),
      l("Active Directory Users and Computers (dsa.msc)", "مستخدمي وأجهزة Active Directory (dsa.msc)"),
      l("File Properties > Security tab", "خصائص الملف > تبويبات الأمان"),
    ],
    authorization: l(
      "Scope: an isolated Windows workstation and a Windows Server lab domain that you own or have written permission to use. Prohibited: any real production domain, public host, or machine outside the lab. Stop condition: if a step produces unexpected output, affects an account or service you did not intend to change, or you are unsure of the effect, stop and revert the change.",
      "النطاق: جهاز ويندوز معزول ومجال مختبري Windows Server تملكه أو لديك إذن كتابي باستخدامه. المحظور: أي مجال إنتاجي حقيقي أو مضيف عام أو جهاز خارج المختبر. شرط التوقف: إذا أنتجت خطوة ناتجًا غير متوقع، أو أثرت على حساب أو خدمة لم تقصد تغييرها، أو لم تكن متأكدًا من التأثير، توقف واردِ التغيير.",
    ),
    detailedSteps: [
      {
        title: l("Inspect running processes", "تدقيق العمليات العاملة"),
        command: "Task Manager (Ctrl+Shift+Esc) → Processes",
        explanation: l(
          "Open Task Manager and switch to the Processes tab. Each row shows the process name and the user who owns it. Record a few processes and their owners to build a picture of what is running on the machine.",
          "افتح Task Manager وانتقل إلى تبويبات العمليات. يُظهر كل سطر اسم العملية والمستخدم الذي يملكها. سجّل بعض العمليات ومالكيها لتكوين صورة عما يعمل على الجهاز.",
        ),
        expected: l("A recorded list of processes with their owning users is captured.", "تُسجّل قائمة بالعمليات مع المستخدمين المالكين."),
      },
      {
        title: l("Inspect services", "تدقيق الخدمات"),
        command: "services.msc",
        explanation: l(
          "Open Services, find two services such as Windows Update and the Print Spooler, and note each service's status (Running/Stopped) and start type (Automatic/Manual/Disabled). This shows how services are configured to start.",
          "افتح الخدمات، وابحث عن خدمتين مثل Windows Update وPrint Spooler، وسجّل حالة كل خدمة (Running/Stopped) ونوع بدءها (Automatic/Manual/Disabled). ويُظهر هذا كيفية إعداد الخدمات للبدء.",
        ),
        expected: l("The status and start type of the two services are recorded.", "تُسجّل حالة ونوع بدء الخدمتين."),
      },
      {
        title: l("Review the security log", "مراجعة سجل الأمان"),
        command: "eventvwr.msc → Windows Logs → Security",
        explanation: l(
          "Open Event Viewer, go to Windows Logs > Security, and filter for Authentication events. Look for event IDs 4624 (successful logon) and 4625 (failed logon). A successful logon shows who signed in and from where; failed logons are the key signal of a password attack.",
          "افتح معرض الأحداث، وانتقل إلى Windows Logs ثم Security، وصفّ حسب أحداث المصادقة. ابحث عن معرّفات الأحداث 4624 (تسجيل دخول ناجح) و4625 (تسجيل دخول فاشل). يُظهر تسجيل الدخول الناجح من الذي سجّل الدخول ومن أين؛ وتعتبر تسجيلات الدخول الفاشلة الإشارة الأساسية لهجوم كلمة المرور.",
        ),
        expected: l("At least one successful and one failed logon event are located and recorded.", "يُحدد ويُسجّل حدث تسجيل دخول ناجح وآخر فاشل على الأقل."),
      },
      {
        title: l("Inspect local users and groups", "تدقق المستخدمين والمجموعات المحلية"),
        command: "lusrmgr.msc",
        explanation: l(
          "Open Local Users and Groups and review the user accounts and groups. Identify which accounts are standard users and which are administrators, and check whether the built-in Administrator account is enabled. This is a quick security baseline check.",
          "افتح Local Users and Groups وابحث في حسابات المستخدمين والمجموعات. حدد أي الحسابات مستخدمون عاديون وأيها مسؤولون، وتحقق مما إذا كان حساب Administrator المدمج مفعّلًا. وهي مراجعة سريعة لخط الأساس الأمني.",
        ),
        expected: l("The local user accounts and group memberships are reviewed and the built-in Administrator status noted.", "تُراجع حسابات المستخدمين المحلية وعضوية المجموعات ويُلاحظ وضع حساب Administrator المدمج."),
      },
      {
        title: l("Inspect file permissions", "افحص صلاحيات الملفات"),
        command: "Right-click a file → Properties → Security tab",
        explanation: l(
          "Open the Security tab on a sample file or folder and read the list of users and groups and their allowed actions. This is how you see which accounts can read, modify or control the resource.",
          "افتح تبويبات الأمان على ملف أو مجلد نموذجي واقرأ قائمة المستخدمين والمجموعات والإجراءات المسموح بها. وبهذه الطريقة ترى أي الحسابات يمكنها قراءة المورد أو تعديله أو التحكم فيه.",
        ),
        expected: l("The file's access-control list and the permissions for each user and group are read and recorded.", "تُقرأ قائمة التحكم بالوصول للملف والصلاحيات لكل مستخدم ومجموعة وتُسجّل."),
      },
      {
        title: l("Map an Active Directory structure", "ارسم بنية Active Directory"),
        command: "dsa.msc",
        explanation: l(
          "Open Active Directory Users and Computers and examine the domain structure. Note the domain, the default containers and any existing Organizational Units. This is where users, groups and computers are organized and where Group Policy is applied.",
          "افتح Active Directory Users and Computers وافحص بنية المجال. لاحظ المجال والحاويات الافتراضية وأي مجلدات تنظيمية موجودة. وهنا يُنظّم المستخدمون والمجموعات وأجهزة الحاسوب وتُطبق سياسة المجموعة.",
        ),
        expected: l("The domain structure, containers and Organizational Units are mapped and recorded.", "تُرسم بنية المجال والحاويات والمجلدات التنظيمية وتُسجّل."),
      },
      {
        title: l("Plan a least-privilege setup", "خطّط إعدادًا بأقل صلاحية"),
        command: "Plan (no command): new OU + group + GPO",
        explanation: l(
          "Design, on paper, a least-privilege setup for a new team: which OU the users go into, which group grants the access they need, and which Group Policy enforces configuration. Document the plan and explain why each choice follows least privilege.",
          "صمّم على الورق إعدادًا بأقل صلاحية لفريق جديد: أي مجلد تنظيمي يوضع فيه المستخدمون، وأي مجموعة تمنح الوصول الذي يحتاجونه، وأي سياسة مجموعة تفرض الإعدادات. ووثّق الخطة واشرح سبب اتباع كل اختيار لمبدأ أقل صلاحية.",
        ),
        expected: l("A documented plan showing the OU, the group membership and the Group Policy, with a justification for least privilege.", "خطة موثقة تُظهر المجلد التنظيمي وعضوية المجموعة وسياسة المجموعة، مع تبرير لمبدأ أقل صلاحية."),
      },
    ],
    troubleshooting: [
      {
        problem: l("Task Manager shows an unexpected process consuming high resources", "يعرض Task Manager عملية غير متوقعة تستهلك موارد عالية"),
        fix: l("Note the process name, owning user and location, end it in Task Manager if it is not essential, and investigate the source; do not delete system files or processes you do not recognize without research.", "سجّل اسم العملية والمستخدم المالك وموقعها، وانهِها في Task Manager إذا لم تكن ضرورية، وتحقق من المصدر؛ ولا تحذف ملفات أو عمليات نظام لا تعرفها دون بحث."),
      },
      {
        problem: l("Event Viewer Security log is empty or missing", "سجل الأمان في معرض الأحداث فارغ أو مفقود"),
        fix: l("Security logging may not be enabled or you may need administrator rights. Confirm the log is enabled and that you are viewing Windows Logs > Security with elevated rights.", "قد لا يكون تسجيل الأمان مفعّلًا أو قد تحتاج إلى صلاحيات مسؤول. تأكد من أن السجل مفعّل وأنك تشاهد Windows Logs ثم Security بصلاحيات مرتفعة."),
      },
      {
        problem: l("You cannot open Active Directory Users and Computers", "لا يمكنك فتح Active Directory Users and Computers"),
        fix: l("AD DS management tools are only available on a Windows Server domain controller or a machine with the admin tools installed, and you need administrative rights. Use a properly provisioned lab server or install the admin tools.", "أدوات إدارة AD DS متاحة فقط على جهاز تحكم مجال بـ Windows Server أو جهاز مثبت عليه أدوات الإدارة، وتحتاج إلى صلاحيات مسؤول. استخدم خادم مختبر مناسبًا أو ثبّت أدوات الإدارة."),
      },
      {
        problem: l("You are unsure whether a change will affect other users", "لست متأكدًا مما إذا كان التغيير سيؤثر على مستخدمين آخرين"),
        fix: l("Stop and test the change on a single test account or in an isolated OU first. Group Policy and permission changes can cascade, so verify scope before applying it broadly, and revert if the effect is not as expected.", "توقف وجرّب التغيير على حساب اختبار واحد أو في مجلد تنظيمي معزول أولًا. فقد تنتشر تغييرات سياسة المجموعة والصلاحيات، لذا تحقق من النطاق قبل تطبيقه على نطاق واسع، واردِه إذا لم يكن التأثير كما هو متوقع."),
      },
    ],
    deliverables: [
      l("Recorded process and service inspection outputs", "نواتج تدقيق مسجلة للعمليات والخدمات"),
      l("The successful and failed logon events found in the Security log", "أحداث تسجيل الدخول الناجحة والفاشلة الموجودة في سجل الأمان"),
      l("A review of local users, groups and account types", "مراجعة للمستخدمين والمجموعات المحلية وأنواع الحسابات"),
      l("The file permission list with the recorded access-control list", "قائمة صلاحيات الملفات مع قائمة التحكم بالوصول المسجلة"),
      l("A mapped Active Directory structure with OUs and Group Policy", "مخطط لبنية Active Directory بمجلدات تنظيمية وسياسة مجموعة"),
      l("A documented least-privilege plan for a new team", "خطة موثقة بأقل صلاحية لفريق جديد"),
    ],
    rubric: [
      { criterion: l("Correct use of Task Manager, Services and Event Viewer", "الاستخدام الصحيح لـ Task Manager والخدمات ومعرض الأحداث"), weight: 25 },
      { criterion: l("Accurate interpretation of logon events and permissions", "تفسير دقيق لتسجيلات الدخول والصلاحيات"), weight: 20 },
      { criterion: l("Correct understanding of Active Directory, OUs and Group Policy", "فهم صحيح لـ Active Directory والمجلدات التنظيمية وسياسة المجموعة"), weight: 25 },
      { criterion: l("A sound least-privilege plan with justification", "خطة سليمة بأقل صلاحية مع تبرير"), weight: 20 },
      { criterion: l("Clear documentation and safety awareness", "توثيق واضح ووعي بالسلامة"), weight: 10 },
    ],
  },
  majorLabId: "lab-03",
  quiz: [
    {
      q: l("What is the primary role of NTFS on a Windows system?", "ما الدور الرئيسي لـ NTFS على نظام ويندوز؟"),
      options: [
        l("To provide a graphical desktop", "لتوفير سطح مكتب رسومي"),
        l("To organize files and support access-control permissions", "لتنظيم الملفات ودعم صلاحيات التحكم بالوصول"),
        l("To manage email delivery", "لإدارة تسليم البريد الإلكتروني"),
        l("To compress all files automatically", "لضغط جميع الملفات تلقائيًا"),
      ],
      answer: 1,
      why: l("NTFS is the filesystem that organizes files and provides the permission model through access-control lists.", "NTFS هو نظام الملفات الذي ينظم الملفات ويوفر نموذج الصلاحيات عبر قوائم التحكم بالوصول."),
    },
    {
      q: l("Which tool shows the running processes and their owning users on Windows?", "أي أداة تُظهر العمليات العاملة والمستخدمين المالكين لها على ويندوز؟"),
      options: [
        l("Task Manager", "Task Manager"),
        l("Event Viewer", "معرض الأحداث"),
        l("Active Directory Users and Computers", "مستخدمي وأجهزة Active Directory"),
        l("Control Panel", "لوحة التحكم"),
      ],
      answer: 0,
      why: l("Task Manager lists running processes along with the user who owns each one, making it the primary inspection tool.", "يعرض Task Manager قائمة بالعمليات العاملة مع المستخدم الذي يملك كل منها، مما يجعله أداة التدقيق الأساسية."),
    },
    {
      q: l("Where in Event Viewer would you look for successful and failed logon events?", "أين تبحث في معرض الأحداث عن أحداث تسجيل الدخول الناجحة والفاشلة؟"),
      options: [
        l("Windows Logs > Security", "Windows Logs > Security"),
        l("Applications log", "سجل التطبيقات"),
        l("System log", "سجل النظام"),
        l("Setup log", "سجل الإعداد"),
      ],
      answer: 0,
      why: l("The Security log under Windows Logs records authentication events including successful (4624) and failed (4625) logons.", "يسجّل سجل الأمان تحت Windows Logs أحداث المصادقة بما في ذلك تسجيلات الدخول الناجحة (4624) والفاشلة (4625)."),
    },
    {
      q: l("What is an Organizational Unit (OU) in Active Directory?", "ما المقصود بالمجلد التنظيمي (OU) في Active Directory؟"),
      options: [
        l("A type of user password", "نوع من كلمات مرور المستخدم"),
        l("A container for users, groups and computers to organize and apply policy", "حاوية للمستخدمين والمجموعات وأجهزة الحاسوب لتنظيمها وتطبيق السياسة"),
        l("A network cable standard", "معيار لكابلات الشبكة"),
        l("A backup device", "جهاز نسخ احتياطي"),
      ],
      answer: 1,
      why: l("An OU is a container that organizes users, groups and computers and provides a place to link and apply Group Policy.", "المجلد التنظيمي حاوية تنظم المستخدمين والمجموعات وأجهزة الحاسوب وتوفر مكانًا لربط سياسة المجموعة وتطبيقها."),
    },
    {
      q: l("Which protocol is the default modern authentication protocol in an Active Directory domain?", "أي بروتوكول هو بروتوكول المصادقة الحديث الافتراضي في مجال Active Directory؟"),
      options: [
        l("NTLM", "NTLM"),
        l("Kerberos", "Kerberos"),
        l("FTP", "FTP"),
        l("SNMP", "SNMP"),
      ],
      answer: 1,
      why: l("Kerberos is the default authentication protocol for Active Directory domains, using tickets to verify identity securely.", "Kerberos هو بروتوكول المصادقة الافتراضي لمجالات Active Directory، ويستخدم تذاكر للتحقق من الهوية بأمان."),
    },
    {
      q: l("What is a Domain Controller in Active Directory?", "ما جهاز التحكم بالمجال في Active Directory؟"),
      options: [
        l("A type of backup server", "نوع من خوادم النسخ الاحتياطي"),
        l("The server that authenticates users and computers and stores Active Directory", "الخادم الذي يقوم بمصادقة المستخدمين وأجهزة الحاسوب ويخزن Active Directory"),
        l("A network router", "جهاز توجيهشبكي"),
        l("A user account group", "مجموعة حسابات مستخدمين"),
      ],
      answer: 1,
      why: l("A Domain Controller authenticates users and computers against Active Directory and holds the directory database.", "يقوم جهاز التحكم بالمجال بمصادقة المستخدمين وأجهزة الحاسوب عبر Active Directory ويحتوي على قاعدة بيانات الدليل."),
    },
    {
      q: l("What is the main purpose of Group Policy (GPO)?", "ما الغرض الرئيسي من سياسة المجموعة (GPO)؟"),
      options: [
        l("To store user passwords", "لتخزين كلمات مرور المستخدمين"),
        l("To apply and enforce configuration settings across objects in an OU", "لتطبيق الإعدادات وفرضها على الكائنات في المجلد التنظيمي"),
        l("To route network traffic", "لتوجيه مرور الشبكة"),
        l("To install printers only", "لتثبيت الطابعات فقط"),
      ],
      answer: 1,
      why: l("Group Policy applies and enforces configuration settings, such as password requirements or software restrictions, across the objects in an OU.", "تُطبق سياسة المجموعة الإعدادات وتفرضها، مثل متطلبات كلمات المرور أو قيود البرمجيات، على الكائنات في المجلد التنظيمي."),
    },
    {
      q: l("Which of the following is the safest default for the built-in Administrator account?", "أي مما يلي هو الأكثر أمانًا كافتراض لحساب Administrator المدمج؟"),
      options: [
        l("Leave it enabled with a simple password", "اتركه مفعّلًا بكلمة مرور بسيطة"),
        l("Rename it or disable it and use standard accounts with controlled elevation", "غيّر اسمه أو عطّله واستخدم حسابات عادية مع رفع صلاحية خاضع للرقابة"),
        l("Share it with all administrators", "شاركه مع جميع المسؤولين"),
        l("Delete the operating system", "احذف نظام التشغيل"),
      ],
      answer: 1,
      why: l("The built-in Administrator is a well-known target, so it should be renamed or disabled and replaced with controlled standard accounts that get elevated rights only when needed.", "حساب Administrator المدمج هدف معروف، لذا يجب تغيير اسمه أو تعطيله واستبداله بحسابات عادية مضبوطة تحصل على صلاحيات مرتفعة فقط عند الحاجة."),
    },
    {
      q: l("Windows Firewall's main function is to:", "الوظيفة الرئيسية لجدار حماية ويندوز هي:"),
      options: [
        l("Compress files on disk", "ضغط الملفات على القرص"),
        l("Filter network traffic based on a set of rules", "تصفية مرور الشبكة وفق مجموعة من القواعد"),
        l("Manage user email", "إدارة بريد المستخدمين"),
        l("Install applications", "تثبيت التطبيقات"),
      ],
      answer: 1,
      why: l("The Windows Firewall filters network traffic according to rules, controlling which programs and connections are allowed.", "يقوم جدار حماية ويندوز بتصفية مرور الشبكة وفق القواعد، متحكّمًا في البرامج والاتصالات المسموح بها."),
    },
    {
      q: l("A user needs access to a shared folder. Which approach follows least privilege?", "يحتاج مستخدم إلى الوصول إلى مجلد مشترك. أي نهج يتبع مبدأ أقل صلاحية؟"),
      options: [
        l("Add the user to the Administrators group", "إضافة المستخدم إلى مجموعة Administrators"),
        l("Add the user to a group that has exactly the access the role requires", "إضافة المستخدم إلى مجموعة تملك بالضبط الوصول الذي تتطلبه المهمة"),
        l("Grant the user full control of the whole drive", "منح المستخدم سيطرة كاملة على القرص بأكمله"),
        l("Disable the firewall so the folder is reachable", "تعطيل جدار الحماية ليكون المجلد قابلًا للوصول"),
      ],
      answer: 1,
      why: l("Adding the user to a group with exactly the required access follows least privilege, unlike broad administrative or full-drive access.", "تضيف المستخدم إلى مجموعة تملك بالضبط الوصول المطلوب يتبع مبدأ أقل صلاحية، على عكس الوصول الإداري الواسع أو الوصول الكامل للقرص."),
    },
    {
      q: l("A burst of failed logon events in the Security log most likely indicates:", "تشير سلسلة من أحداث تسجيل الدخول الفاشلة في سجل الأمان غالبًا إلى:"),
      options: [
        l("A successful software update", "تحديث برمجي ناجح"),
        l("A password guessing or brute-force attack", "هجوم تخمين أو قوة غاشمة لكلمة المرور"),
        l("Normal backup activity", "نشاط نسخ احتياطي طبيعي"),
        l("A hardware failure", "فشل في العتاد"),
      ],
      answer: 1,
      why: l("Repeated failed logons are the classic indicator of a password attack such as guessing or brute force.", "تُعد تسجيلات الدخول الفاشلة المتكررة العلامة الكلاسيكية لهجوم كلمة المرور مثل التخمين أو القوة الغاشمة."),
    },
    {
      q: l("Why is a compromised Domain Controller a serious risk?", "لماذا يعد اختراق جهاز التحكم بالمجال خطرًا كبيرًا؟"),
      options: [
        l("Because it is slow", "لأنه بطيء"),
        l("Because it can affect every account and computer in the domain", "لأنه يمكن أن يؤثر على كل حساب وجهاز في المجال"),
        l("Because it stores no data", "لأنه لا يخزن أي بيانات"),
        l("Because it is a type of printer", "لأنه نوع من الطابعات"),
      ],
      answer: 1,
      why: l("A Domain Controller holds the identity data for the whole domain, so compromising it can expose or affect every account and computer.", "يحتوي جهاز التحكم بالمجال على بيانات الهوية للمجال بأكمله، لذا فإن اختراقه يمكن أن يكشف أو يؤثر على كل حساب وجهاز."),
    },
  ],
  trueFalse: [
    {
      q: l("NTFS permissions can be inherited from parent folders.", "يمكن أن تنتقل صلاحيات NTFS وراثة من المجلدات الأب."),
      answer: true,
      why: l("NTFS permissions flow down from a parent folder to its files and subfolders unless inheritance is blocked.", "تتدفق صلاحيات NTFS من المجلد الأب إلى ملفاته ومجلداته الفرعية ما لم تمنع الوراثة."),
    },
    {
      q: l("Kerberos is the default authentication protocol for Active Directory domains.", "Kerberos هو بروتوكول المصادقة الافتراضي لمجالات Active Directory."),
      answer: true,
      why: l("Kerberos is the modern default, using tickets to verify identity securely and supporting mutual authentication.", "Kerberos هو الافتراضي الحديث، ويستخدم تذاكر للتحقق من الهوية بأمان ويدعم المصادقة المتبادلة."),
    },
    {
      q: l("It is good practice to keep the built-in Administrator account enabled for convenience.", "من الممارسات الجيدة إبقاء حساب Administrator المدمج مفعّلًا من أجل الراحة."),
      answer: false,
      why: l("The built-in Administrator is a well-known target and should be renamed or disabled.", "حساب Administrator المدمج هدف معروف ويجب تغيير اسمه أو تعطيله."),
    },
    {
      q: l("Group Policy is used to apply configuration settings across objects in an Organizational Unit.", "تُستخدم سياسة المجموعة لتطبيق إعدادات التكوين على الكائنات في مجلد تنظيمي."),
      answer: true,
      why: l("Group Policy enforces settings such as password requirements or software restrictions across the objects in an OU.", "تفرض سياسة المجموعة الإعدادات مثل متطلبات كلمات المرور أو قيود البرمجيات على الكائنs في المجلد التنظيمي."),
    },
    {
      q: l("Task Manager can show which user owns each running process.", "يمكن لـ Task Manager أن يُظهر المستخدم الذي يملك كل عملية عاملة."),
      answer: true,
      why: l("Task Manager lists each process with its owning user, which helps spot unexpected activity.", "يعرض Task Manager كل عملية مع المستخدم المالك، مما يساعد على اكتشاف النشاط غير المتوقع."),
    },
    {
      q: l("A Domain Controller is just an ordinary server with no special risk.", "جهاز التحكم بالمجال مجرد خادم عادي دون خطر خاص."),
      answer: false,
      why: l("A Domain Controller holds the domain's identity data, so a compromise can affect the entire network and must be hardened and monitored strictly.", "يحتوي جهاز التحكم بالمجال على بيانات الهوية للمجال، لذا يمكن أن يؤثر اختراقه على الشبكة بأكملها ويجب تقويته ومراقبته بصرامة."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each Windows tool by its primary purpose", "صنّف كل أداة من أدوات ويندوز بحسب وظيفتها الأساسية"),
      categories: [
        l("Process inspection", "تدقيق العمليات"),
        l("Event/log review", "مراجعة الأحداث والسجلات"),
        l("Identity management", "إدارة الهوية"),
        l("Permission review", "مراجعة الصلاحيات"),
      ],
      items: [
        { text: l("Task Manager", "Task Manager"), answer: 0 },
        { text: l("Event Viewer", "معرض الأحداث"), answer: 1 },
        { text: l("Active Directory Users and Computers", "مستخدمي وأجهزة Active Directory"), answer: 2 },
        { text: l("File Security tab", "تبويبات أمان الملف"), answer: 3 },
      ],
      why: l("Task Manager inspects processes, Event Viewer reviews logs, AD Users and Computers manages identities, and the Security tab reviews permissions.", "يدقق Task Manager العمليات، ويراجع معرض الأحداث السجلات، وتدير Active Directory Users and Computers الهويات، وتُراجع تبويبات الأمان الصلاحيات."),
    },
    {
      prompt: l("Classify each item as local or domain identity", "صنّف كل عنصر إلى هوية محلية أو هوية مجال"),
      categories: [
        l("Local account", "حساب محلي"),
        l("Domain identity", "هوية مجال"),
      ],
      items: [
        { text: l("Account on a single workstation", "حساب على جهاز عمل واحد"), answer: 0 },
        { text: l("User stored in Active Directory", "مستخدم مخزون في Active Directory"), answer: 1 },
        { text: l("Built-in Administrator", "Administrator المدمج"), answer: 0 },
        { text: l("Domain Controller account store", "مخزن حسابات جهاز التحكم بالمجال"), answer: 1 },
      ],
      why: l("Local accounts exist on one machine; domain identities are stored in Active Directory and used across the network.", "توجد الحسابات المحلية على جهاز واحد؛ أما هويات المجال فتُخزن في Active Directory وتُستخدم عبر الشبكة."),
    },
    {
      prompt: l("Match each Active Directory concept to its role", "زاوج كل مفهوم من Active Directory بدوره"),
      categories: [
        l("Stores identities and authenticates", "تخزن الهويات وتقوم بالمصادقة"),
        l("Organizes objects", "تنظم الكائنات"),
        l("Applies configuration", "تطبق الإعدادات"),
        l("Unique identity for each object", "معرف فريد لكل كائن"),
      ],
      items: [
        { text: l("Domain Controller", "جهاز التحكم بالمجال"), answer: 0 },
        { text: l("Organizational Unit", "المجلد التنظيمي"), answer: 1 },
        { text: l("Group Policy", "سياسة المجموعة"), answer: 2 },
        { text: l("Security identifier (SID)", "المعرف الأمني (SID)"), answer: 3 },
      ],
      why: l("The Domain Controller authenticates and stores identities, the OU organizes objects, Group Policy applies configuration, and the SID uniquely identifies each object.", "يقوم جهاز التحكم بالمجال بالمصادقة ويخزن الهويات، وينظم المجلد التنظيمي الكائنات، وتطبق سياسة المجموعة الإعدادات، ويحدد المعرف الأمني كل كائن بمعريف فريد."),
    },
    {
      prompt: l("Classify each hardening action by its goal", "صنّف كل إجراء تقوية بحسب  هدفه"),
      categories: [
        l("Reduce privileged access", "تقليل الوصول المحصّن"),
        l("Strengthen authentication", "تقوية المصادقة"),
        l("Reduce attack surface", "تقليل سطح الهجوم"),
        l("Improve visibility", "تحسين الرؤية"),
      ],
      items: [
        { text: l("Disable the built-in Administrator", "تعطيل Administrator المدمج"), answer: 0 },
        { text: l("Enable multi-factor authentication", "تفعيل المصادقة متعددة العوامل"), answer: 1 },
        { text: l("Disable unnecessary services", "تعطيل الخدمات غير الضرورية"), answer: 2 },
        { text: l("Enable and review the Security log", "تفعيل سجل الأمان ومراجعته"), answer: 3 },
      ],
      why: l("Disabling the built-in Administrator reduces privileged access, MFA strengthens authentication, disabling services reduces the attack surface, and reviewing the log improves visibility.", "يقلل تعطيل Administrator المدمج الوصول المحصّن، وتقوي المصادقة متعددة العوامل المصادقة، ويقلل تعطيل الخدمات سطح الهجوم، وتحسن مراجعة السجل الرؤية."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "You review the Security log and notice dozens of failed logon attempts for one user account followed by one successful logon from an unusual location.",
        "تراجع سجل الأمان فتلاحظ عشرات محاولات تسجيل الدخول الفاشلة لحساب مستخدم، تليها تسجيل دخول ناجح من موقع غير مألوف.",
      ),
      question: l("What is the most likely explanation and best response?", "ما التفسير الأكثر ترجيحًا وأفضل استجابة؟"),
      options: [
        l("It is a normal backup; ignore it", "إنه نسخ احتياطي طبيعي؛ تجاهله"),
        l("It is a password attack that may have succeeded; alert the SOC and secure the account", "إنه هجوم بكلمة المرور قد يكون نجح؛ أبلغ فريق SOC واحمِ الحساب"),
        l("Restart the server", "أعد تشغيل الخادم"),
        l("Disable the firewall to stop the activity", "تعطيل جدار الحماية لإيقاف النشاط"),
      ],
      answer: 1,
      why: l("A burst of failed logons followed by a success from an unusual location is the classic pattern of a password attack, so the account should be secured and the SOC alerted.", "تُعد سلسلة تسجيلات الدخول الفاشلة التي تليها نجاح من موقع غير مألوف النمط الكلاسيكي لهجوم كلمة المرور، لذا يجب حماية الحساب وإبلاغ فريق SOC."),
    },
    {
      scenario: l(
        "A manager asks you to add a new team member to the Administrators group so they can install software easily.",
        "يطلب منك مدير إضافة عضو جديد إلى مجموعة Administrators ليتمكن من تثبيت البرمجيات بسهولة.",
      ),
      question: l("What is the correct response?", "ما الرد الصحيح؟"),
      options: [
        l("Agree, since it is only one account", "وافق، لأنه مجرد حساب واحد"),
        l("Refuse and instead grant only the specific permissions the role needs, escalating temporarily if required", "رفض وإمنح فقط الصلاحيات المحددة التي تحتاجها المهمة، مع رفع الصلاحية مؤقتًا عند الحاجة"),
        l("Give them the Administrator password", "امنحهم كلمة مرور المسؤول"),
        l("Delete all other accounts to reduce confusion", "احذف جميع الحسابات الأخرى لتقليل الالتباس"),
      ],
      answer: 1,
      why: l("Administrator rights are far broader than needed for installing software; grant only the specific permissions required and escalate temporarily, following least privilege.", "صلاحيات المسؤول أوسع بكثير مما تتطلبه تثبيت البرمجيات؛ فامنح فقط الصلاحيات المحددة المطلوبة وارفع الصلاحية مؤقتًا، متبعًا مبدأ أقل صلاحية."),
    },
    {
      scenario: l(
        "The company opens a new branch and you need to create accounts and apply security settings for the branch users.",
        "تفتتح الشركة فرعًا جديدًا وتحتاج إلى إنشاء حسابات وتطبيق إعدادات أمنية لمستخدمي الفرع.",
      ),
      question: l("What is the best way to manage this in Active Directory?", "ما أفضل طريقة لإدارة ذلك في Active Directory؟"),
      options: [
        l("Create a new Organizational Unit for the branch and link an appropriate Group Policy", "إنشاء مجلد تنظيمي جديد للفرع وربط سياسة مجموعة مناسبة"),
        l("Give every user administrator rights", "منح كل مستخدم صلاحيات مسؤول"),
        l("Create users with no policy and no groups", "إنشاء مستخدمين دون سياسة أو مجموعات"),
        l("Disable the firewall for the branch", "تعطيل جدار الحماية للفرع"),
      ],
      answer: 0,
      why: l("Creating an OU for the branch and linking a Group Policy applies the right settings consistently and keeps management centralized.", "يؤدي إنشاء مجلد تنظيمي للفرع وربط سياسة مجموعة إلى تطبيق الإعدادات الصحيحة بشكل متسق ويحافظ على مركزية الإدارة."),
    },
  ],
  practicalChecks: [
    {
      task: l("Explain why a burst of failed logons in the Security log matters", "اشرح سبب أهمية سلسلة تسجيلات الدخول الفاشلة في سجل الأمان"),
      expected: l("It is a strong indicator of a password guessing or brute-force attack, and may precede or accompany a successful compromise.", "إنه مؤشر قوي على هجوم تخمين أو قوة غاشمة لكلمة المرور، وقد يسبق اختراقًا ناجحًا أو يصاحبه."),
      hint: l("Think about what an attacker does before or when a password is guessed.", "فكّر فيما يفعله المهاجم قبل أو عند تخمين كلمة المرور."),
    },
    {
      task: l("Given a new employee in the Finance team, describe the least-privilege steps to set them up in Active Directory", "بالنظر إلى موظف جديد في فريق المالية، وصف خطوات أقل صلاحية لإعداده في Active Directory"),
      expected: l("Create a user account, place it in the Finance OU, add the user to the group that grants exactly the required access, and link the Finance Group Policy.", "أنشئ حساب مستخدم، وضعته في مجلد المالية التنظيمي، وأضف المستخدم إلى المجموعة التي تمنح بالضبط الوصول المطلوب، واربط سياسة مجموعة المالية."),
    },
  ],
  homework: {
    title: l("Homework 6 — Plan a Windows and Active Directory baseline", "الواجب 6 — التخطيط لخط أساس لويندوز وActive Directory"),
    tasks: [
      l("On a lab Windows machine, record the output of Task Manager processes, the status of two services, and one successful and one failed logon event from Event Viewer.", "على جهاز ويندوز مختبري، سجّل نواتج عمليات Task Manager، وحالة خدمتين، وحدث تسجيل دخول ناجح وآخر فاشل من معرض الأحداث."),
      l("Review local users and groups and write a short note on which accounts are standard and which are administrative, and whether the built-in Administrator is enabled.", "راجع المستخدمين والمجموعات المحلية واكتب ملاحظة قصيرة عن أي الحسابات عادية وأيها إدارية، وما إذا كان حساب Administrator المدمج مفعّلًا."),
      l("Draw a simple Active Directory structure for a small company with at least two Organizational Units and note where a Group Policy would be linked.", "ارسم بنية بسيطة لـ Active Directory لشركة صغيرة مع مجلدين تنظيميين على الأقل، وحدّد مكان ربط سياسة مجموعة."),
      l("Write a short paragraph describing two Windows or Active Directory hardening steps you would apply and why each matters.", "اكتب فقرة قصيرة تصف خطوتين من خطوات تقوية ويندوز أو Active Directory ستطبقهما وسبب أهمية كل منهما."),
    ],
    deliverable: l(
      "A single short document (or screenshots with notes) containing the recorded inspection outputs, the local account review, the Active Directory structure diagram, and the two-step hardening paragraph.",
      "وثيقة قصيرة واحدة (أو لقطات مع ملاحظات) تحتوي على نواتج التدقيق المسجلة، ومراجعة الحسابات المحلية، ومخطط بنية Active Directory، وفقرة التقوية ذات الخطوتين.",
    ),
    criteria: [
      l("Inspection outputs are recorded accurately and correctly interpreted", "تُسجّل نواتج التدقيق بدقة ويُفسَّر بشكل صحيح"),
      l("The account review correctly identifies account types and the Administrator status", "تُحدد مراجعة الحسابات أنواع الحسابات ووضع Administrator بشكل صحيح"),
      l("The Active Directory diagram is correct and shows OUs and Group Policy placement", "يكون مخطط Active Directory صحيحًا ويظهر المجلدات التنظيمية ومكان سياسة المجموعة"),
      l("The hardening steps are practical and justified", "تكون خطوات التقوية عملية ومبررة"),
    ],
    challenge: l(
      "Optional challenge: design a least-privilege setup for a new team, specifying the OU, the group membership, and the Group Policy settings, and explain how you would verify that a user gets exactly the intended access.",
      "مهمة تحدٍ اختيارية: صمم إعدادًا بأقل صلاحية لفريق جديد، محددًا المجلد التنظيمي وعضوية المجموعة وإعدادات سياسة المجموعة، واشرح كيف ستتحقق من أن المستخدم يحصل بالضبط على الوصول المقصود.",
    ),
  },
  refs: [
    { title: "Windows security documentation", org: "Microsoft Learn", url: "https://learn.microsoft.com/windows/security/" },
    { title: "Active Directory Domain Services overview", org: "Microsoft Learn", url: "https://learn.microsoft.com/windows-server/identity/ad-ds/" },
    { title: "Active Directory Users and Computers", org: "Microsoft Learn", url: "https://learn.microsoft.com/windows-server/identity/ad-ds/ad-users-and-computers-container" },
    { title: "Group Policy overview", org: "Microsoft Learn", url: "https://learn.microsoft.com/windows/security/application-security/application-control/app-locker/group-policy" },
    { title: "Kerberos authentication overview", org: "Microsoft Learn", url: "https://learn.microsoft.com/windows/security/authentication/kerberos-authentication/" },
    { title: "NTFS access control overview", org: "Microsoft Learn", url: "https://learn.microsoft.com/windows/win32/secauthz/access-control" },
  ],
  terms: [
    { term: l("Windows", "ويندوز"), def: l("A layered operating system built around the Windows NT kernel with an account-and-permission security model.", "نظام تشغيل متعدد الطبقات مبني حول نواة Windows NT مع نموذج أمن يعتمد على الحسابات والصلاحيات.") },
    { term: l("NT kernel", "نواة NT"), def: l("The core of Windows that manages hardware and provides the base for all other components.", "نواة ويندوز التي تدير العتاد وتوفر الأساس لجميع المكونات الأخرى.") },
    { term: l("NTFS", "NTFS"), def: l("The default Windows filesystem that organizes files and supports access-control permissions.", "نظام ملفات ويندوز الافتراضي الذي ينظم الملفات ويدعم صلاحيات التحكم بالوصول.") },
    { term: l("Access Control List (ACL)", "قائمة التحكم بالوصول"), def: l("A list defining which users and groups can read, modify or own a resource.", "قائمة تحدد أي المستخدمين والمجموعات يمكنهم قراءة مورد أو تعديله أو امتلاكه.") },
    { term: l("Inheritance", "الوراثة"), def: l("The behavior where permissions flow from a parent folder to its files and subfolders.", "السلوك الذي تنتقل فيه الصلاحيات من مجلد أب إلى ملفاته ومجلداته الفرعية.") },
    { term: l("Security identifier (SID)", "المعرف الأمني (SID)"), def: l("A unique identifier assigned to every user, group and computer account.", "معرف فريد يُمنح لكل حساب مستخدم ومجموعة وجهاز حاسوب.") },
    { term: l("Standard user", "مستخدم عادي"), def: l("An account with limited permissions for everyday tasks.", "حساب له صلاحيات محدودة للمهام اليومية.") },
    { term: l("Administrator account", "حساب المسؤول"), def: l("An account that can install software and change system settings.", "حساب يمكنه تثبيت البرمجيات وتغيير إعدادات النظام.") },
    { term: l("Built-in Administrator", "Administrator المدمج"), def: l("The powerful built-in account that should normally be renamed or disabled.", "الحساب المدمج القوي الذي ينبغي عادةً تغيير اسمه أو تعطيله.") },
    { term: l("Local group", "المجموعة المحلية"), def: l("A group of accounts that exists on a single machine, such as Administrators or Users.", "مجموعة من الحسابات توجد على جهاز واحد، مثل Administrators أو Users.") },
    { term: l("Task Manager", "Task Manager"), def: l("The Windows tool that shows running processes, resource usage and owning users.", "أداة ويندوز التي تُظهر العمليات العاملة واستخدام الموارد والمستخدمين المالكين.") },
    { term: l("Process", "العملية"), def: l("A running program on Windows with its own resource usage and owning user.", "برنامج قيد التشغيل على ويندوز باستخدام موارد خاص ومستخدم مالك.") },
    { term: l("Service", "الخدمة"), def: l("A background process that runs to provide a function and has a status and start type.", "عملية خلفية تعمل لتقديم وظيفة ولديها حالة ونوع بدء.") },
    { term: l("Event Viewer", "معرض الأحداث"), def: l("The Windows tool that records important events including security and logon events.", "أداة ويندوز التي تسجّل الأحداث المهمة بما في ذلك الأحداث الأمنية وتسجيلات الدخول.") },
    { term: l("Security log", "سجل الأمان"), def: l("The event log that records authentication events such as successful and failed logons.", "سجل الأحداث الذي يسجّل أحداث المصادقة مثل تسجيلات الدخول الناجحة والفاشلة.") },
    { term: l("Windows Defender", "Windows Defender"), def: l("The built-in antivirus and anti-malware protection on Windows.", "الحماية المدمجة لمكافحة الفيروسات والبرمجيات الخبيثة على ويندوز.") },
    { term: l("Windows Firewall", "جدار حماية ويندوز"), def: l("The built-in firewall that filters network traffic based on rules.", "جدار الحماية المدمج الذي يصفي مرور الشبكة وفق القواعد.") },
    { term: l("Windows Server", "Windows Server"), def: l("The server version of Windows used to run services such as Active Directory.", "إصدار الخادم من ويندوز المستخدم لتشغيل خدمات مثل Active Directory.") },
    { term: l("Active Directory Domain Services (AD DS)", "خدمات مجال Active Directory (AD DS)"), def: l("The directory service that stores and manages identities for a Windows network.", "خدمة الدليل التي تخزن وتدير الهويات لشبكة ويندوز.") },
    { term: l("Domain", "المجال"), def: l("A network of computers and devices that share a common identity and security policies.", "شبكة من أجهزة الحاسوب والأجهزة تشترك في هوية مشتركة وسياسات أمنية.") },
    { term: l("Domain Controller", "جهاز التحكم بالمجال"), def: l("The server that authenticates users and computers and stores Active Directory.", "الخادم الذي يقوم بمصادقة المستخدمين وأجهزة الحاسوب ويخزن Active Directory.") },
    { term: l("Organizational Unit (OU)", "المجلد التنظيمي (OU)"), def: l("A container that organizes users, groups and computers and provides a place for Group Policy.", "حاوية تنظم المستخدمين والمجموعات وأجهزة الحاسوب وتوفر مكانًا لسياسة المجموعة.") },
    { term: l("Group Policy (GPO)", "سياسة المجموعة (GPO)"), def: l("The mechanism that applies and enforces configuration settings across objects in an OU.", "الآلية التي تطبق الإعدادات وتفرضها على الكائنات في مجلد تنظيمي.") },
    { term: l("Security group", "مجموعة الأمان"), def: l("A group used to grant access to resources.", "مجموعة تُستخدم لمنح الوصول إلى الموارد.") },
    { term: l("Distribution group", "مجموعة التوزيع"), def: l("A group used for sending email rather than controlling access.", "مجموعة تُستخدم لإرسال البريد بدلًا من التحكم بالوصول.") },
    { term: l("Kerberos", "Kerberos"), def: l("The default modern authentication protocol that uses tickets to verify identity.", "بروتوكول المصادقة الحديث الافتراضي الذي يستخدم تذاكر للتحقق من الهوية.") },
    { term: l("NTLM", "NTLM"), def: l("An older challenge-response authentication protocol still found in some environments.", "بروتوكول مصادقة أقدم قائم على التحدي والاستجابة لا يزال موجودًا في بعض البيئات.") },
    { term: l("Least privilege", "أقل صلاحية"), def: l("The principle of granting only the minimum access needed to perform a task.", "مبدأ منح الحد الأدنى من الوصول اللازم لأداء مهمة.") },
    { term: l("Hardening", "التقوية"), def: l("Reducing a system's attack surface by tightening defaults and reducing unnecessary access.", "تقليل سطح الهجوم للنظام عبر تشديد القيم الافتراضية وتقليل الوصول غير الضروري.") },
  ],
};
