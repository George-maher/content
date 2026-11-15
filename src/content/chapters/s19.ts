import { l, type Session } from "../types";

export const s19: Session = {
  id: 19,
  phase: 5,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Cloud, Mobile and IoT Security: Shared Responsibility, Misconfiguration, Identity and Segmentation",
    "أمن السحابة والجوال وإنترنت الأشياء: المسؤولية المشتركة وأخطاء الإعداد والهوية والتقسيم",
  ),
  summary: l(
    "Securing modern environments: the cloud service models and shared responsibility model, the common misconfigurations that cause most breaches, identity and secrets management, data protection and backups, mobile and BYOD controls, IoT hardening and network segmentation, and the governance tools that keep cloud configuration safe.",
    "تأمين البيئات الحديثة: نماذج الخدمة السحابية ونموذج المسؤولية المشتركة، وأخطاء الإعداد الشائعة التي تسبب معظم الاختراقات، وإدارة الهوية والأسرار، وحماية البيانات والنسخ الاحتياطية، وضوابط الجوال وBYOD، وتحصين إنترنت الأشياء وتقسيم الشبكة، وأدوات الحوكمة التي تحافظ على أمان إعداد السحابة.",
  ),
  overview: l(
    "Cloud computing rents IT resources over the Internet, shifting where security responsibility sits. The shared responsibility model means the provider secures the cloud itself, but the customer is always responsible for security in the cloud — at minimum their data, identities and configuration. Most cloud breaches are customer-side misconfigurations, not provider hacks: publicly exposed storage, over-privileged identities, leaked secrets and unmonitored APIs. This session covers the IaaS, PaaS and SaaS models and the shared responsibility they create; the common cloud failures and their fixes; identity, access and secrets management; data protection, encryption and backups; mobile device and BYOD controls; IoT security and network segmentation; and the governance tools — such as CSPM and infrastructure-as-code — that keep configuration safe. The session closes with a lab where you assign each security task to the provider, the customer, or both.",
    "تؤجّر الحوسبة السحابية موارد تقنية المعلومات عبر الإنترنت، فتُغيّر مكان مسؤولية الأمن. ويعني نموذج المسؤولية المشتركة أن يؤمّن المزوّد السحابة نفسها، لكن العميل مسؤول دائمًا عن الأمن داخل السحابة — على الأقل بياناته وهوياته وإعداداته. ومعظم اختراقات السحابة أخطاء إعداد من جهة العميل لا اختراقات للمزوّد: حاويات تخزين مكشوفة وهويات مفرطة الصلاحية وأسرار مسربة وواجهات برمجية غير مراقبة. وتغطي هذه الجلسة نماذج IaaS وPaaS وSaaS والمسؤولية المشتركة التي تخلقها؛ وإخفاقات السحابة الشائعة وإصلاحاتها؛ وإدارة الهوية والوصول والأسرار؛ وحماية البيانات والتشفير والنسخ الاحتياطية؛ وضوابط الأجهزة المحمولة وBYOD؛ وأمن إنترنت الأشياء وتقسيم الشبكة؛ وأدوات الحوكمة — مثل CSPM وتعريف البنية كشيفرة — التي تحافظ على سلامة الإعداد. وتنتهي الجلسة بمختبر تُسند فيه كل مهمة أمنية إلى المزوّد أو العميل أو كليهما.",
  ),
  whyItMatters: l(
    "The cloud does not outsource accountability. When a storage bucket is left public or an admin account lacks MFA, the breach is almost always the customer's misconfiguration, not the provider's failure — yet the organisation still bears the data-protection, legal and reputational consequences. Modern environments add more weak devices: phones that are easily lost, and IoT devices that cannot run security software. Understanding who secures what, and applying the baseline controls for cloud, mobile and IoT, is how organisations gain the benefits of modern infrastructure without becoming the next breach headline.",
    "لا يُسند الانتقال إلى السحابة المساءلة إلى الخارج. فعندما تُترك حاوية تخزين عامة أو يفتقر حساب مدير إلى MFA، يكون الاختراق عادة خطأ إعداد العميل لا إخفاق المزوّد — ومع ذلك تتحمل المؤسسة تبعات حماية البيانات والقانون والسمعة. وتُضيف البيئات الحديثة أجهزة أكثر ضعفًا: هواتف يسهل فقدانها، وأجهزة إنترنتأشياء لا تستطيع تشغيل برمجيات أمن. وفهم من يؤمّن ماذا، وتطبيق ضوابط خط الأساس للسحابة والجوال وإنترنت الأشياء، هو كيف تحصل المؤسسات على مزايا البنية الحديثة دون أن تصبح الخبر التالي للاختراق.",
  ),
  prerequisites: [
    l(
      "Session 13, IAM: how access control, least privilege and MFA apply to cloud identities and accounts.",
      "الجلسة 13، إدارة الهوية والوصول: كيف يطبق التحكم بالوصول وأقل صلاحية وMFA على هويات وحسابات السحابة.",
    ),
    l(
      "Session 14, Vulnerability Management: how patching and configuration baselines apply to cloud systems.",
      "الجلسة 14، إدارة الثغرات: كيف يطبق الترقيع وخطوط أساس الإعدادات على أنظمة السحابة.",
    ),
    l(
      "Session 18, Risk Management & Privacy: how shared responsibility is a risk and privacy decision.",
      "الجلسة 18، إدارة المخاطر والخصوصية: كيف تُعد المسؤولية المشتركة قرار مخاطر وخصوصية.",
    ),
    l(
      "A legal and ethical mindset: practise only on cloud accounts and devices you own or are authorised to use, and never expose real secrets.",
      "عقلية قانونية وأخلاقية: تدرب فقط على حسابات وأجهزة سحابية تملكها أو لديك إذن باستخدامها، ولا تكشّف أسرارًا حقيقية أبدًا.",
    ),
  ],
  objectives: [
    l(
      "Explain IaaS, PaaS and SaaS and the shared responsibility model.",
      "شرح IaaS وPaaS وSaaS ونموذج المسؤولية المشتركة.",
    ),
    l(
      "List the most common cloud security failures and their fixes.",
      "سرد أكثر إخفاقات أمن السحابة شيوعًا وإصلاحاتها.",
    ),
    l(
      "Apply identity, access and secrets management in the cloud.",
      "تطبيق إدارة الهوية والوصول والأسرار في السحابة.",
    ),
    l(
      "Protect data in the cloud with encryption, backups and key management.",
      "حماية البيانات في السحابة بالتشفير والنسخ الاحتياطية وإدارة المفاتيح.",
    ),
    l(
      "Apply mobile and BYOD controls and harden IoT devices through segmentation.",
      "تطبيق ضوابط الجوال وBYOD وتحصين أجهزة إنترنت الأشياء عبر التقسيم.",
    ),
    l(
      "Assign each cloud security task to the provider, the customer, or both.",
      "إسناد كل مهمة أمنية سحابية إلى المزوّد أو العميل أو كليهما.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Cloud models and shared responsibility", "نماذج السحابة والمسؤولية المشتركة"), minutes: 11 },
    { label: l("Common cloud failures and fixes", "إخفاقات السحابة الشائعة وإصلاحاتها"), minutes: 12 },
    { label: l("Identity, access and secrets", "الهوية والوصول والأسرار"), minutes: 12 },
    { label: l("Data, encryption and backups", "البيانات والتشفير والنسخ"), minutes: 12 },
    { label: l("Mobile devices and BYOD", "الأجهزة المحمولة وBYOD"), minutes: 12 },
    { label: l("IoT security and segmentation", "أمن إنترنت الأشياء والتقسيم"), minutes: 13 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 13 },
  ],
  introduction: l(
    "Cloud computing rents IT resources over the Internet, shifting where security responsibility sits. The shared responsibility model means the provider secures the cloud itself, but the customer is always responsible for security in the cloud — at minimum their data, identities and configuration. Most cloud breaches are customer-side misconfigurations, not provider hacks. This session covers the cloud service models, the common failures and fixes, identity and secrets, data protection, mobile and BYOD, IoT and segmentation, and the governance tools that keep configuration safe. The session closes with a lab where you assign each security task to the provider, the customer, or both.",
    "تؤجّر الحوسبة السحابية موارد تقنية المعلومات عبر الإنترنت، فتُغيّر مكان مسؤولية الأمن. ويعني نموذج المسؤولية المشتركة أن يؤمّن المزوّد السحابة نفسها، لكن العميل مسؤول دائمًا عن الأمن داخل السحابة — على الأقل بياناته وهوياته وإعداداته. ومعظم اختراقات السحابة أخطاء إعداد من جهة العميل لا اختراقات للمزوّد. وتغطي هذه الجلسة نماذج الخدمة السحابية، والإخفاقات الشائعة وإصلاحاتها، والهوية والأسرار، وحماية البيانات، والجوال وBYOD، وإنترنت الأشياء والتقسيم، وأدوات الحوكمة التي تحافظ على سلامة الإعداد. وتنتهي الجلسة بمختبر تُسند فيه كل مهمة أمنية إلى المزوّد أو العميل أو كليهما.",
  ),
  sections: [
    {
      h: l("1. Cloud models and shared responsibility", "1. نماذج السحابة والمسؤولية المشتركة"),
      p: [
        l(
          "Cloud computing rents IT resources over the Internet. In Infrastructure as a Service (IaaS, for example virtual machines) the provider runs the data centre, hardware and virtualisation, while the customer manages the operating system, applications, network rules, identities and data. In Platform as a Service (PaaS) the provider also manages the operating system and runtime; the customer manages the application and data. In Software as a Service (SaaS, for example webmail or CRM) the provider runs everything except the customer's data, user accounts, access settings and how the service is used.",
          "تؤجّر الحوسبة السحابية موارد تقنية المعلومات عبر الإنترنت. ففي البنية التحتية كخدمة (IaaS مثل الأجهزة الافتراضية) يشغّل المزوّد مركز البيانات والعتاد والمحاكاة الافتراضية، بينما يدير العميل نظام التشغيل والتطبيقات وقواعد الشبكة والهويات والبيانات. وفي المنصة كخدمة (PaaS) يدير المزوّد نظام التشغيل وبيئة التشغيل أيضًا؛ ويدير العميل التطبيق والبيانات. وفي البرمجيات كخدمة (SaaS مثل البريد أو إدارة العملاء) يشغّل المزوّد كل شيء عدا بيانات العميل وحسابات المستخدمين وإعدادات الوصول وطريقة استخدام الخدمة.",
        ),
        l(
          "This is the shared responsibility model: the provider secures the cloud itself; the customer is always responsible for security in the cloud — at minimum their data, identities and configuration. Moving to the cloud does not outsource accountability. The table shows how the responsibility boundary shifts across the three models: the more the provider manages, the fewer layers you secure — but data, identities and configuration are always yours.",
          "هذا هو نموذج المسؤولية المشتركة: يؤمّن المزوّد السحابة نفسها؛ ويظل العميل مسؤولًا دائمًا عن الأمن داخل السحابة — على الأقل بياناته وهوياته وإعداداته. والانتقال إلى السحابة لا يُسند المساءلة للخارج. ويوضح الجدول كيف تتحرك حد المسؤولية عبر النماذج الثلاثة: كلما زاد ما يديره المزوّد قلّت الطبقات التي تؤمّنها — لكن البيانات والهويات والإعدادات لك دائمًا.",
        ),
      ],
      table: {
        head: [l("Layer", "الطبقة"), l("IaaS", "IaaS"), l("PaaS", "PaaS"), l("SaaS", "SaaS")],
        rows: [
          [l("Data, users, access settings", "البيانات والمستخدمون وإعدادات الوصول"), l("Customer", "العميل"), l("Customer", "العميل"), l("Customer", "العميل")],
          [l("Application", "التطبيق"), l("Customer", "العميل"), l("Customer", "العميل"), l("Provider", "المزوّد")],
          [l("Operating system / runtime", "نظام التشغيل / بيئة التشغيل"), l("Customer", "العميل"), l("Provider", "المزوّد"), l("Provider", "المزوّد")],
          [l("Virtualisation, hardware, data centre", "المحاكاة والعتاد ومركز البيانات"), l("Provider", "المزوّد"), l("Provider", "المزوّد"), l("Provider", "المزوّد")],
        ],
      },
      callout: { kind: "key", text: l("The provider secures the cloud; the customer is always responsible for security in the cloud. Moving to the cloud does not outsource accountability.", "يؤمّن المزوّد السحابة؛ ويظل العميل مسؤولًا دائمًا عن الأمن داخل السحابة. فالانتقال إلى السحابة لا يُسند المساءلة للخارج.") },
    },
    {
      h: l("2. Common cloud failures and fixes", "2. إخفاقات السحابة الشائعة وإصلاحاتها"),
      p: [
        l(
          "Most cloud breaches are customer-side misconfigurations, not provider hacks. The most common failures — and their fixes — are the ones below. Each is a small change in configuration that prevents a large breach, and most are discoverable with continuous monitoring of configuration against best-practice baselines.",
          "معظم اختراقات السحابة أخطاء إعداد من جهة العميل لا اختراقات للمزوّد. فأشيع الإخفاقات — وإصلاحاتها — هي الآتية. وكل منها تغيير صغير في الإعداد يمنع اختراقًا كبيرًا، ويمكن اكتشاف معظمها بمراقبة الإعداد باستمرار مقابل خطوط الأساس الجيدة.",
        ),
      ],
      bullets: [
        l("Publicly exposed storage buckets or databases containing sensitive data → default private, block public access, review sharing links.", "حاويات تخزين أو قواعد بيانات مكشوفة علنًا تحوي بيانات حساسة ← خاصة افتراضيًا وحجب الوصول العام ومراجعة روابط المشاركة."),
        l("Over-privileged identities and no MFA on admin/root accounts → least privilege, MFA, separate admin accounts, no root for daily use.", "هويات مفرطة الصلاحية وبلا MFA لحسابات المدير/الجذر ← أقل صلاحية وMFA وحسابات إدارة منفصلة وعدم استخدام الجذر يوميًا."),
        l("Access keys and secrets committed to code repositories or left in chat → secrets manager, short-lived credentials, automated secret scanning, immediate rotation after exposure.", "مفاتيح وصول وأسرار تُرفع إلى مستودعات الشيفرة أو تُترك في المحادثات ← مدير أسرار وبيانات دخول قصيرة العمر وفحص أسرار آلي وتدوير فوري بعد الانكشاف."),
        l("Open management ports (SSH/RDP) and permissive security groups → restrict by source IP, use VPN or bastion/identity-aware access.", "منافذ إدارة مفتوحة (SSH/RDP) ومجموعات أمان متساهلة ← تقييد بحسب عنوان المصدر واستخدام VPN أو وصول مبني على الهوية."),
        l("No logging or monitoring of API calls → enable audit logging and alert on suspicious admin actions.", "غياب تسجيل ومراقبة استدعاءات واجهات البرمجية ← تفعيل تسجيل التدقيق والتنبيه على إجراءات المدير المشبوهة."),
        l("Unencrypted data and no backups → encrypt at rest and in transit, manage keys, keep tested backups in a separate account.", "بيانات غير مشفّرة وبلا نسخ احتياطية ← تشفير في السكون وأثناء النقل وإدارة المفاتيح ونسخ مختبرة في حساب منفصل."),
      ],
      callout: { kind: "tip", text: l("Cloud Security Posture Management (CSPM) tools continuously compare your configuration with best-practice baselines and alert on drift. Infrastructure-as-code lets you review and test configuration before deploying it.", "تقارن أدوات إدارة وضع أمن السحابة (CSPM) إعداداتك بخطوط الأساس الجيدة باستمرار وتنبّه عند الانحراف. ويتيح تعريف البنية كشيفرة مراجعة الإعدادات واختبارها قبل نشرها.") },
    },
    {
      h: l("3. Identity, access and secrets", "3. الهوية والوصول والأسرار"),
      p: [
        l(
          "Identity is the new perimeter in the cloud. Because access is granted to accounts and roles rather than to a physical network, controlling who can do what — and with which credentials — is the core of cloud security. Apply least privilege: grant each identity only the permissions it needs, use separate admin accounts, and never use the root or admin account for daily work. Enforce MFA on every administrative and remote-access account, because a stolen password alone should never be enough to gain entry.",
          "الهوية هي الحافة الجديدة في السحابة. ولأن الوصول يُمنح للحسابات والأدوار لا للشبكة المادية، فإن التحكم بمن يستطيع ماذا — وبأي بيانات دخول — هو جوهر أمن السحابة. فطبّق أقل صلاحية: امنح كل هوية فقط الأذونات التي تحتاجها، واستخدم حسابات إدارة منفصلة، ولا تستخدم حساب الجذر أو المدير في العمل اليومي. وفرض MFA على كل حساب إداري وحساب وصول عن بُعد، لأن سرقة كلمة المرور وحدها يجب ألا تكفي للدخول.",
        ),
        l(
          "Secrets — passwords, API keys, tokens and connection strings — are the credentials that cloud applications use to authenticate. They must never be committed to code repositories, pasted into chat, or left in configuration files visible to others. Use a secrets manager to store and rotate them, prefer short-lived role-based credentials over long-lived keys, enable automated secret scanning in your code pipeline, and rotate any key immediately after it is exposed. A leaked key is scanned for and abused within minutes.",
          "الأسرار — كلمات المرور ومفاتيح واجهات البرمجية والرموز وسلاسل الاتصال — هي بيانات الدخول التي تستخدمها تطبيقات السحابة للمصادقة. ويجب ألا تُرفع إلى مستودعات الشيفرة أو تُلصق في المحادثات أو تُترك في ملفات الإعداد الظاهرة للآخرين. فاستخدم مدير أسرار لتخزينها وتدويرها، وافضّل بيانات دخول أدوار قصيرة العمر على المفاتيح طويلة العمر، وفعّل فحص الأسرار الآلي في مسار الشيفرة، ودوّر أي مفتاح فور انكشافه. فالمفتاح المكشوف يُفحص ويُستغل خلال دقائق.",
        ),
      ],
      callout: { kind: "key", text: l("Identity is the new perimeter. Least privilege, MFA on every administrative account, and a secrets manager with short-lived credentials are the core of cloud access control.", "الهوية هي الحافة الجديدة. فأقل صلاحية وMFA على كل حساب إداري ومدير أسرار ببيانات دخول قصيرة العمر هي جوهر التحكم بالوصول في السحابة.") },
    },
    {
      h: l("4. Data, encryption and backups", "4. البيانات والتشفير والنسخ"),
      p: [
        l(
          "Data in the cloud must be protected both at rest and in transit. Encryption at rest protects stored data if storage is compromised; encryption in transit (TLS) protects data as it moves between systems. Manage the keys: keep them under your control, rotate them, and restrict who can use them — because a key that is as exposed as the data it protects offers no protection. Classify your data so that the most sensitive information gets the strongest controls and the tightest access.",
          "يجب حماية البيانات في السحابة في السكون وأثناء النقل. فتشفير السكون يحمي البيانات المخزّنة إذا تم اختراق التخزين؛ وتشفير النقل (TLS) يحمي البيانات أثناء انتقالها بين الأنظمة. وأدِر المفاتيح: أبقها تحت سيطرتك، ودوّرها، وقِّد من يستطيع استخدامها — فالمفتاح المكشوف بقدر البيانات التي يحميها لا يوفّر حماية. وصنّف بياناتك لكي تحصل أكثر البيانات حساسية على أقوى الضوابط وأضيق الوصول.",
        ),
        l(
          "Backups are the last line of recovery, but a cloud backup is only useful if it is tested, encrypted and isolated. Keep tested backups in a separate account or region so that an attacker who compromises the primary account cannot also wipe or encrypt the backups. Verify that backups can actually be restored before you need them — untested backups fail when they are most needed.",
          "النسخ الاحتياطية هي خط الاسترداد الأخير، لكن النسخة السحابية لا تفيد إلا إذا كانت مختبرة ومشفّرة ومعزولة. فاحفظ النسخ المختبرة في حساب أو منطقة منفصلة كي لا يتمكن المهاجم الذي يخترق الحساب الأساسي من محو أو تشفير النسخ أيضًا. وتحقق من إمكانية استعادة النسخ فعليًا قبل أن تحتاجها — فالنسخ غير المختبرة تفشل حين تكون الحاجة إليها أشد.",
        ),
      ],
      callout: { kind: "key", text: l("Encrypt data at rest and in transit, manage the keys, and keep tested, encrypted, isolated backups in a separate account — because untested backups fail when needed.", "شفر البيانات في السكون والنقل، وأدِر المفاتيح، واحفظ نسخًا مختبرة ومشفّرة ومعزولة في حساب منفصل — فالنسخة غير المختبرة تفشل عند الحاجة.") },
    },
    {
      h: l("5. Mobile devices and BYOD", "5. الأجهزة المحمولة وBYOD"),
      p: [
        l(
          "Phones and tablets hold e-mail, authentication apps, photos and banking, and they are easily lost. Baseline controls: a strong passcode with biometrics, automatic screen lock, device encryption (enabled by default on modern devices), automatic OS and app updates, apps only from official stores with minimal permissions (does a torch app need your contacts?), remote locate, lock and wipe, and avoiding jailbreaking or rooting. Be careful with public Wi-Fi and unknown charging cables or ports; use a VPN where appropriate and never accept unexpected MFA prompts.",
          "تحمل الهواتف والأجهزة اللوحية البريد وتطبيقات المصادقة والصور والمعاملات المصرفية ويسهل فقدانها. وضوابط خط الأساس: رمز مرور قوي مع القياسات الحيوية وقفل شاشة تلقائي وتشفير الجهاز (مفعّل افتراضيًا في الأجهزة الحديثة) وتحديثات نظام وتطبيقات تلقائية وتطبيقات من المتاجر الرسمية فقط بأقل أذونات (هل يحتاج تطبيق مصباح إلى جهات اتصالك؟) وتحديد الموقع والقفل والمسح عن بُعد وتجنب كسر الحماية. وكن حذرًا مع الواي فاي العام وكابلات ومنافذ الشحن المجهولة؛ واستخدم VPN عند اللزوم ولا تقبل أبدًا طلبات MFA غير المتوقعة.",
        ),
        l(
          "Organisations use Mobile Device Management (MDM) or Mobile Application Management (MAM) to enforce these settings, separate work from personal data (work profile or containers), and wipe only corporate data when a device is lost. Bring Your Own Device (BYOD) needs a clear policy: what is allowed, what the company may monitor, what is wiped on departure, and the minimum security requirements for access. A BYOD policy turns personal devices into managed, bounded work tools.",
          "وتستخدم المؤسسات إدارة الأجهزة المحمولة (MDM) أو إدارة تطبيقاتها (MAM) لفرض هذه الإعدادات وفصل بيانات العمل عن الشخصية (ملف العمل أو الحاويات) ومسح بيانات الشركة فقط عند فقدان الجهاز. ويحتاج إحضار جهازك الخاص (BYOD) إلى سياسة واضحة: ما المسموح وما الذي يحق للشركة مراقبته وما الذي يُمسح عند المغادرة وأدنى متطلبات الأمن للوصول. فسياسة BYOD تحوّل الأجهزة الشخصية إلى أدوات عمل مدارة ومحدودة.",
        ),
      ],
      callout: { kind: "key", text: l("Mobile baseline: strong passcode, encryption, updates, minimal app permissions, remote wipe — and a clear BYOD policy that separates work from personal data.", "خط أساس الجوال: رمز مرور قوي وتشفير وتحديثات وأقل أذونات للتطبيقات ومسح عن بُعد — وسياسة BYOD واضحة تفصل عمل عن شخصي.") },
    },
    {
      h: l("6. IoT security and segmentation", "6. أمن إنترنت الأشياء والتقسيم"),
      p: [
        l(
          "IoT devices — cameras, smart speakers, thermostats, printers and sensors — are often built cheaply with little security: default or hard-coded passwords, unpatched firmware that is never updated, unnecessary open services, unencrypted communication, and no support after a few years. Botnets such as Mirai were built from tens of thousands of exposed cameras and routers. Because the owner cannot install security software on them, protection must come from the network and from careful buying and configuration.",
          "أجهزة إنترنت الأشياء — الكاميرات والمكبرات الذكية والمنظمات الحرارية والطابعات والمستشعرات — تُبنى غالبًا بتكلفة منخفضة وأمن ضئيل: كلمات مرور افتراضية أو مضمنة وبرمجية ثابتة غير محدّثة وخدمات مفتوحة غير لازمة واتصال غير مشفّر وانعدام الدعم بعد سنوات قليلة. وقد بُنيت شبكات بوت مثل Mirai من عشرات آلاف الكاميرات والموجهات المكشوفة. ولأن المالك لا يستطيع تثبيت برمجيات أمن عليها، فيجب أن تأتي الحماية من الشبكة ومن الشراء والإعداد بعناية.",
        ),
        l(
          "Good practice: change default passwords immediately; update firmware and enable auto-update; disable remote access, UPnP and unused features; put IoT on a separate VLAN or guest network with no access to computers and file shares; buy from vendors that publish security support periods; and retire devices that no longer get updates. Segmentation contains a compromised device so it cannot reach the systems that matter. In industrial settings (OT/ICS), availability and safety come first, so changes are made carefully with strict network segmentation from the corporate network.",
          "الممارسة الجيدة: غيّر كلمات المرور الافتراضية فورًا؛ وحدّث البرمجية الثابتة وفعّل التحديث التلقائي؛ وعطّل الوصول عن بُعد وUPnP والميزات غير المستخدمة؛ وضع إنترنت الأشياء في شبكة VLAN أو شبكة ضيوف منفصلة دون وصول للحواسيب ومشاركات الملفات؛ واشترِ من موردين ينشرون فترات دعم أمني؛ وأحِل إلى التقاعد الأجهزة التي لم تعد تتلقى تحديثات. فالتقسيم يحتوي الجهاز المخترق فلا يصل إلى الأنظمة المهمة. وفي البيئات الصناعية (OT/ICS) تأتي التوافرية والسلامة أولًا، لذا تُجرى التغييرات بحذر مع تقسيم صارم عن شبكة الشركة.",
        ),
      ],
      callout: { kind: "key", text: l("You cannot install security software on most IoT devices, so isolate them on a separate network segment to contain any compromise and keep it away from critical systems.", "لا يمكنك تثبيت برمجيات أمن على معظم أجهزة إنترنت الأشياء، لذا اعزلها في قطاع شبكة منفصل لاحتواء أي اختراق وإبعاده عن الأنظمة الحرجة.") },
    },
    {
      h: l("7. Cloud governance and secure development", "7. حوكمة السحابة والتطوير الآمن"),
      p: [
        l(
          "Cloud security is also a governance and development discipline. Infrastructure-as-code means cloud resources are defined in versioned, reviewable files: configuration is reviewed and tested before it is deployed, changes are tracked, and the same secure configuration can be reproduced. This removes the drift and forgotten settings that cause misconfigurations, and lets security rules be enforced automatically in the pipeline.",
          "أمن السحابة هو أيضًا تخصص حوكمة وتطوير. فتعريف البنية كشيفرة يعني أن موارد السحابة تُحدّد في ملفات مرقمة الإصدار وقابلة للمراجعة: يُراجع الإعداد ويُختبر قبل نشره، وتُتابع التغييرات، ويمكن إعادة إنتاج نفس الإعداد الآمن. فيزيل هذا الانحراف والإعدادات المنسية التي تسبب أخطاء الإعداد، ويتيح فرض قواعد الأمن آليًا في مسار التطوير.",
        ),
        l(
          "Governance ties the pieces together: a policy states the mandatory controls (all cloud storage private by default, MFA on every admin account, encryption required); standards give the specific settings; and continuous monitoring — such as CSPM and audit logging — verifies that the configuration stays compliant and alerts on drift. Review sharing settings, third-party app connections and permissions regularly, because a permission granted once can become a permanent hole. Cloud security is continuous, not a one-time setup.",
          "تربط الحوكمة الأجزاء معًا: تحدد السياسة الضوابط الإلزامية (كل تخزين سحابي خاص افتراضيًا، وMFA على كل حساب إداري، والتشفير مطلوب)؛ وتعطي المعايير الإعدادات المحددة؛ وتضمن المراقبة المستمرة — مثل CSPM وتسجيل التدقيق — بقاء الإعداد ممتثلًا وتنبّه عند الانحراف. وافحص إعدادات المشاركة والتطبيقات الخارجية والأذونات بانتظام، لأن الإذن الممنوح مرة قد يصبح ثغرة دائمة. فأمن السحابة مستمر لا إعداد لمرة واحدة.",
        ),
      ],
      callout: { kind: "key", text: l("Define cloud infrastructure as code, review and test configuration before deployment, and monitor continuously — cloud security is continuous governance, not a one-time setup.", "حدّد بنية السحابة كشيفرة، وابحث واختبر الإعداد قبل النشر، و راقب باستمرار — فأمن السحابة حوكمة مستمرة لا إعداد لمرة واحدة.") },
    },
    {
      h: l("8. Bringing it together: securing modern environments", "8. جمع الأفكار: تأمين البيئات الحديثة"),
      p: [
        l(
          "Modern environments are a mix of cloud, mobile and IoT, and the unifying principle is shared responsibility: the provider secures the cloud, but you are always responsible for your data, identities and configuration. Most breaches come from a small, fixable misconfiguration — a public bucket, a leaked key, a missing MFA, an unsegmented device. Apply the baseline controls: least privilege and MFA for identities, a secrets manager, encryption and tested backups, mobile hardening and a BYOD policy, and IoT segmentation. Govern it all with infrastructure-as-code and continuous monitoring. Practising the responsibility model — as you will in the lab — is how you secure modern environments without giving up their benefits.",
          "البيئات الحديثة مزيج من السحابة والجوال وإنترنت الأشياء، والمبدأ الجامع هو المسؤولية المشتركة: يؤمّن المزوّد السحابة، لكنك مسؤول دائمًا عن بياناتك وهوياتك وإعدادك. ومعظم الاختراقات تأتي من خطأ إعداد صغير وقابل للإصلاح — حاوية عامة أو مفتاح مكشوف أو MFA ناقص أو جهاز غير مقسّم. فطبّق ضوابط خط الأساس: أقل صلاحية وMFA للهويات، ومدير أسرار، وتشفير ونسخ مختبرة، وتحصين الجوال وسياسة BYOD، وتقسيم إنترنت الأشياء. وأدِر كل ذلك بتعريف البنية كشيفرة والمراقبة المستمرة. ومجربة نموذج المسؤولية — كما ستفعل في المختبر — هو كيف تؤمّن البيئات الحديثة دون التضحية بمزاياها.",
        ),
      ],
    },
  ],
  diagram: {
    kind: "grid",
    title: l("Who secures what? Shared responsibility by service model", "من يؤمّن ماذا؟ المسؤولية المشتركة بحسب نموذج الخدمة"),
    caption: l("The more the provider manages, the fewer layers you secure — but the data, identities and configuration are always yours.", "كلما زاد ما يديره المزوّد قلّت الطبقات التي تؤمّنها — لكن البيانات والهويات والإعدادات لك دائمًا."),
    nodes: [
      { label: l("On-premises", "داخل المؤسسة"), desc: l("You secure everything from the building to the data.", "تؤمّن كل شيء من المبنى إلى البيانات.") },
      { label: l("IaaS", "IaaS"), desc: l("Provider: data centre, hardware, hypervisor. You: OS, apps, network rules, identities, data.", "المزوّد: مركز البيانات والعتاد والمحاكي. أنت: النظام والتطبيقات وقواعد الشبكة والهويات والبيانات.") },
      { label: l("PaaS", "PaaS"), desc: l("Provider adds OS and runtime. You: application code, configuration, identities, data.", "يضيف المزوّد النظام وبيئة التشغيل. أنت: شيفرة التطبيق والإعدادات والهويات والبيانات.") },
      { label: l("SaaS", "SaaS"), desc: l("Provider runs the application. You: users, access settings, MFA, data and sharing.", "يشغّل المزوّد التطبيق. أنت: المستخدمون وإعدادات الوصول وMFA والبيانات وطريقة المشاركة.") },
      { label: l("Mobile / BYOD", "الجوال / BYOD"), desc: l("Device owner and organisation share: passcode, updates, MDM, wipe.", "يتشارك المالك والمؤسسة: رمز المرور والتحديثات وMDM والمسح.") },
      { label: l("IoT", "إنترنت الأشياء"), desc: l("Owner: passwords, updates, segmentation. Vendor: secure design and support.", "المالك: كلمات المرور والتحديثات والتقسيم. المورّد: التصميم الآمن والدعم.") },
    ],
  },
  examples: [
    l(
      "A storage bucket holding customer records is left with public access by mistake. Within hours the records are downloaded by an attacker. The fix is simple — make storage private by default, block public access, and review sharing links — but the breach is entirely the customer's misconfiguration, not the provider's failure.",
      "تُترك حاوية تخزين تحوي سجلات عملاء مع وصول عام بالخطأ. وخلال ساعات تُنزّل السجلات من قبل مهاجم. والإصلاح بسيط — اجعل التخزين خاصًا افتراضيًا وحجب الوصول العام وراجع روابط المشاركة — لكن الاختراق كله خطأ إعداد العميل لا إخفاق المزوّد.",
    ),
    l(
      "An API key is committed to a public code repository. Automated scanners find it within minutes and the key is used to access the cloud account. The fix is a secrets manager, short-lived credentials, automated secret scanning in the pipeline, and immediate rotation after exposure.",
      "يُرفَع مفتاح واجهات برمجية إلى مستودع شيفرة عام. وتعثر عليه الماسحات الآلية خلال دقائق ويُستخدم المفتاح للوصول إلى حساب السحابة. والإصلاح هو مدير أسرار وبيانات دخول قصيرة العمر وفحص أسرار آلي في مسار التطوير وتدوير فوري بعد الانكشاف.",
    ),
    l(
      "A smart camera with a default password is left on the same network as a computer holding company files. An attacker compromises the camera and moves laterally to the files. Isolating IoT on a separate guest network contains the compromise and prevents the lateral movement.",
      "تُترك كاميرا ذكية بكلمة مرور افتراضية على نفس شبكة حاسوب يحوي ملفات الشركة. فيخترق المهاجم الكاميرا وينتقل جانبيًا إلى الملفات. فالعزل في شبكة ضيوف منفصلة يحتوي الاختراق ويمنع الحركة الجانبية.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A company moves a web shop to the cloud using IaaS virtual machines, a SaaS e-mail suite and a cloud storage bucket. The team must decide for each security task whether the provider, the customer, or both are responsible — and discover that most of the critical tasks fall to the customer.",
      "تنقل شركة متجر ويب إلى السحابة باستخدام أجهزة IaaS افتراضية وحزمة بريد SaaS وحاوية تخزين سحابي. ويجب على الفريق أن يقرر لكل مهمة أمنية هل المسؤول المزوّد أم العميل أم كلاهما — ويكتشف أن معظم المهام الحرجة تقع على العميل.",
    ),
    l(
      "An employee loses a personal phone used for work under BYOD. Because the organisation uses MDM with a work container, it wipes only the corporate data, leaving the employee's personal photos and apps untouched — a BYOD policy that protects the company without erasing the individual's life.",
      "يفقد موظف هاتفًا شخصيًا استُخدم للعمل ضمن BYOD. ولأن المؤسسة تستخدم MDM بحاوية عمل، فإنها تمسح بيانات الشركة فقط، تاركة الصور والتطبيقات الشخصية للموظف دون مساس — وهي سياسة BYOD تحمي الشركة دون محو حياة الفرد.",
    ),
    l(
      "A botnet built from tens of thousands of exposed cameras and routers launches a massive attack. The common factor is not a sophisticated exploit but default passwords and unpatched firmware on IoT devices that were never segmented or updated — a failure of basic hygiene, not of advanced technology.",
      "تشن شبكة بوت بُنيت من عشرات آلاف الكاميرات والموجهات المكشوفة هجومًا واسعًا. والعامل المشترك ليس استغلالًا متقدمًا، بل كلمات مرور افتراضية وبرمجية ثابتة غير محدّثة على أجهزة إنترنتأشياء لم تُقسَّم أو تُحدَّث — وهو إخفاق في النظافة الأساسية لا في التقنية المتقدمة.",
    ),
  ],
  instructorDemo: l(
    "Demonstrate the lab's matching tool live: present the shared-responsibility table, then take the first two or three security tasks and reason aloud about whether each is the provider's, the customer's, or a shared responsibility. Emphasise that the data, identities and configuration are always the customer's, even in the most managed SaaS model.",
    "اعرض أداة المطابقة في المختبر مباشرةً: اعرض جدول المسؤولية المشتركة، ثم تناول أول مهمة أمنية أو اثنتين أو ثلاثة وسِّر بصوت عالٍ هل هي مسؤولية المزوّد أو العميل أو مشتركة. وركّز على أن البيانات والهويات والإعدادات للعميل دائمًا، حتى في أكثر نماذج SaaS إدارةً.",
  ),
  exercises: [
    {
      title: l("Assign shared responsibility", "إسناد المسؤولية المشتركة"),
      instructions: l(
        "In the lab, read each security task in the IaaS/SaaS setup and match it to the cloud provider, the customer, or both. After checking, review the corrections and explain why the data, identities and configuration are always the customer's responsibility.",
        "في المختبر، اقرأ كل مهمة أمنية في إعداد IaaS/SaaS وزاوجها بمزوّد السحابة أو العميل أو كليهما. وبعد التحقق، راجع التصحيحات واشرح لماذا تكون البيانات والهويات والإعدادات مسؤولية العميل دائمًا.",
      ),
      expected: l("Correct assignment of each task, with an explanation that the provider secures the cloud but the customer is always responsible for security in the cloud.", "إسناد صحيح لكل مهمة، مع شرح أن المزوّد يؤمّن السحابة لكن العميل مسؤول دائمًا عن الأمن داخل السحابة."),
    },
    {
      title: l("Build a cloud security checklist", "بناء قائمة فحص لأمن السحابة"),
      instructions: l(
        "Write a five-item cloud security checklist for a small web shop: MFA on the root account, private storage, least-privilege roles, audit logging enabled, and encrypted tested backups in a separate account. Justify each item.",
        "اكتب قائمة من خمسة بنود لأمن السحابة لمتجر ويب صغير: MFA لحساب الجذر، وتخزين خاص، وأدوار بأقل صلاحية، وتسجيل تدقيق مفعّل، ونسخ مشفّرة مختبرة في حساب منفصل. وبرّر كل بند.",
      ),
      expected: l("A checklist covering identity, storage, privilege, logging and backups, with a justification for each item tied to a common cloud failure.", "قائمة تغطي الهوية والتخزين والصلاحية والتسجيل والنسخ، مع تبرير كل بند مرتبط بأحد إخفاقات السحابة الشائعة."),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can explain the IaaS, PaaS and SaaS models and the shared responsibility model, list and fix the common cloud failures, apply identity, access and secrets management, protect data with encryption and backups, apply mobile and BYOD controls, harden IoT through segmentation, and correctly assign each cloud security task to the provider, the customer, or both.",
    "بنهاية الجلسة يستطيع المتعلمون شرح نماذج IaaS وPaaS وSaaS ونموذج المسؤولية المشتركة، وسرد إخفاقات السحابة الشائعة وإصلاحاتها، وتطبيق إدارة الهوية والوصول والأسرار، وحماية البيانات بالتشفير والنسخ، وتطبيق ضوابط الجوال وBYOD، وتحصين إنترنت الأشياء عبر التقسيم، وإسناد كل مهمة أمنية سحابية بشكل صحيح إلى المزوّد أو العميل أو كليهما.",
  ),
  commonMistakes: [
    l(
      "Assuming the cloud provider is responsible for all security, forgetting that data, identities and configuration are always the customer's responsibility.",
      "افتراض أن مزوّد السحابة مسؤول عن كل الأمن، ونسيان أن البيانات والهويات والإعدادات مسؤولية العميل دائمًا.",
    ),
    l(
      "Leaving storage public or over-privileged identities without MFA, the most common cause of cloud data exposure.",
      "ترك التخزين عامًا أو هويات مفرطة الصلاحية بلا MFA، وهو أكثر أسباب انكشاف بيانات السحابة شيوعًا.",
    ),
    l(
      "Committing secrets and access keys to code repositories or leaving them in chat, where they are found and abused within minutes.",
      "رفع الأسرار ومفاتيح الوصول إلى مستودعات الشيفرة أو تركها في المحادثات، حيث تُعثر عليها وتُستغل خلال دقائق.",
    ),
    l(
      "Treating IoT devices as ordinary computers: leaving default passwords, not updating firmware, and leaving them on the main network.",
      "التعامل مع أجهزة إنترنت الأشياء كحواسيب عادية: إبقاء كلمات المرور الافتراضية وعدم تحديث البرمجية الثابتة وإبقاؤها على الشبكة الرئيسية.",
    ),
    l(
      "Relying on untested backups or backups stored in the same account as the primary data, so a compromise can wipe them too.",
      "الاعتماد على نسخ غير مختبرة أو نسخ مخزّنة في نفس حساب البيانات الأساسية، فيمكن للاختراق محوها أيضًا.",
    ),
  ],
  bestPractices: [
    l(
      "Know the shared responsibility model: the provider secures the cloud, the customer secures in the cloud — especially data, identities and configuration.",
      "اعرف نموذج المسؤولية المشتركة: المزوّد يؤمّن السحابة، والعميل يؤمّن داخل السحابة — خاصة البيانات والهويات والإعدادات.",
    ),
    l(
      "Make storage private by default, apply least privilege, enforce MFA on every administrative account, and use a secrets manager.",
      "اجعل التخزين خاصًا افتراضيًا، وطبّق أقل صلاحية، وفرض MFA على كل حساب إداري، واستخدم مدير أسرار.",
    ),
    l(
      "Encrypt data at rest and in transit, manage the keys, and keep tested, encrypted, isolated backups in a separate account.",
      "شفر البيانات في السكون والنقل، وأدِر المفاتيح، واحفظ نسخًا مختبرة ومشفّرة ومعزولة في حساب منفصل.",
    ),
    l(
      "Harden mobile devices with the baseline (passcode, encryption, updates, minimal permissions, remote wipe) and enforce a clear BYOD policy.",
      "حصّن الأجهزة المحمولة بخط الأساس (رمز المرور والتشفير والتحديثات وأقل الأذونات والمسح عن بُعد) وفرض سياسة BYOD واضحة.",
    ),
    l(
      "Isolate IoT on a separate network segment, change default passwords, update firmware, and define infrastructure as code with continuous monitoring.",
      "اعزل إنترنت الأشياء في قطاع شبكة منفصل، وغيّر كلمات المرور الافتراضية، وحدّث البرمجية الثابتة، وحدّد البنية كشيفرة مع مراقبة مستمرة.",
    ),
  ],
  keyTakeaways: [
    l("The provider secures the cloud; the customer is always responsible for security in the cloud — data, identities and configuration.", "يؤمّن المزوّد السحابة؛ ويظل العميل مسؤولًا دائمًا عن الأمن داخل السحابة — البيانات والهويات والإعدادات."),
    l("Most cloud breaches are customer misconfigurations: public storage, over-privileged identities, leaked secrets, unmonitored APIs.", "معظم اختراقات السحابة أخطاء إعداد العميل: تخزين عام، هويات مفرطة الصلاحية، أسرار مسربة، واجهات برمجية غير مراقبة."),
    l("Identity is the new perimeter: least privilege, MFA on every admin account, and a secrets manager with short-lived credentials.", "الهوية هي الحافة الجديدة: أقل صلاحية وMFA على كل حساب إداري ومدير أسرار ببيانات دخول قصيرة العمر."),
    l("Protect data with encryption at rest and in transit, managed keys, and tested backups isolated in a separate account.", "احمِ البيانات بتشفير السكون والنقل، ومفاتيح مُدارة، ونسخ مختبرة معزولة في حساب منفصل."),
    l("You cannot install security software on most IoT devices, so isolate them on a separate network segment and define cloud infrastructure as code.", "لا يمكنك تثبيت برمجيات أمن على معظم أجهزة إنترنت الأشياء، لذا اعزلها في قطاع شبكة منفصل وحدّد بنية السحابة كشيفرة."),
  ],
  lab: {
    title: l("Lab 19 — Who is Responsible? Shared Responsibility Drill", "المختبر 19 — من المسؤول؟ تمرين المسؤولية المشتركة"),
    scenario: l(
      "Your company is moving a web shop to the cloud, using IaaS virtual machines, a SaaS e-mail suite and a cloud storage bucket. For each security task, use the matching simulator (display only; nothing is configured or changed on a real system) to decide whether the cloud provider, the customer, or both are responsible.",
      "تنقل شركتك متجر ويب إلى السحابة باستخدام أجهزة IaaS افتراضية وحزمة بريد SaaS وحاوية تخزين سحابي. لكل مهمة أمنية، استخدم محاكي المطابقة (عرض فقط؛ لا يُضبط أو يُغيّر شيء على أي نظام حقيقي) لتقرير هل المسؤول مزوّد السحابة أم العميل أم كلاهما.",
    ),
    safety: l(
      "Do not experiment on cloud accounts you do not own, and never put real secrets into screenshots or documents you share. For practice, use free-tier accounts with billing alerts and MFA enabled. The simulator only matches text you read; nothing is configured or changed on any real system.",
      "لا تجرّب على حسابات سحابية لا تملكها ولا تضع أسرارًا حقيقية في لقطات أو وثائق تشاركها. للتدرب استخدم حسابات الطبقة المجانية مع تنبيهات الفوترة وMFA مفعّل. والمحاكي يزاوج فقط النص الذي تقرؤه؛ ولا يُضبط أو يُغيّر أي شيء على أي نظام حقيقي.",
    ),
    steps: [
      l("Review the shared-responsibility table in the lesson", "راجع جدول المسؤولية المشتركة في الدرس"),
      l("Choose Provider, Customer or Shared for each of the seven tasks in the tool", "اختر المزوّد أو العميل أو مشترك لكل مهمة من المهام السبع في الأداة"),
      l("Check your answers and correct the mistakes", "تحقق من إجاباتك وصحّح الأخطاء"),
      l("Write a five-item cloud security checklist for the web shop", "اكتب قائمة من خمسة بنود لأمن السحابة للمتجر"),
      l("For your own phone, go through the mobile baseline and fix any gap", "لهاتفك الخاص راجع خط الأساس للجوال وأصلح أي ثغرة"),
      l("List every smart device at home or work and write one hardening action for each", "اذكر كل جهاز ذكي في المنزل أو العمل واكتب إجراء تحصين واحدًا لكل منها"),
    ],
    expected: l(
      "All seven responsibility assignments are correct, with a cloud security checklist, a hardened phone and an IoT device list with actions — and a clear understanding that data, identities and configuration are always the customer's responsibility.",
      "تكون إسنادات المسؤولية السبعة صحيحة، مع قائمة فحص أمنية سحابية وهاتف محصّن وقائمة أجهزة ذكية بإجراءاتها — وفهم واضح أن البيانات والهويات والإعدادات مسؤولية العميل دائمًا.",
    ),
    tool: "match",
    match: {
      prompt: l("Who is responsible for each task in the IaaS / SaaS setup?", "من المسؤول عن كل مهمة في إعداد IaaS / SaaS؟"),
      options: [l("Cloud provider", "مزوّد السحابة"), l("Customer", "العميل"), l("Shared", "مشترك")],
      items: [
        { text: l("Physical security of the data centre buildings and hardware.", "الأمن المادي لمباني مركز البيانات وعتاده."), answer: 0 },
        { text: l("Patching the operating system inside the customer's IaaS virtual machines.", "ترقيع نظام التشغيل داخل الأجهزة الافتراضية للعميل في IaaS."), answer: 1 },
        { text: l("Deciding who may read or share files in the customer's storage bucket.", "تحديد من يحق له قراءة الملفات أو مشاركتها في حاوية تخزين العميل."), answer: 1 },
        { text: l("Keeping the SaaS e-mail application software itself patched and available.", "إبقاء برنامج تطبيق البريد SaaS نفسه محدّثًا ومتاحًا."), answer: 0 },
        { text: l("Turning on and enforcing MFA for the company's own SaaS users.", "تفعيل وفرض MFA لمستخدمي الشركة في SaaS."), answer: 1 },
        { text: l("Overall patch management across the whole IaaS stack (host, hypervisor and guest systems).", "إدارة الترقيع الشاملة عبر كامل مكدس IaaS (المضيف والمحاكي والأنظمة الضيفة)."), answer: 2 },
        { text: l("Classifying the data and deciding which data may be stored in the cloud at all.", "تصنيف البيانات وتحديد أي بيانات يجوز تخزينها في السحابة أصلًا."), answer: 1 },
      ],
    },
    objectives: [
      l("Assign each security task to the provider, the customer, or both", "إسناد كل مهمة أمنية إلى المزوّد أو العميل أو كليهما"),
      l("Explain how the responsibility boundary shifts across IaaS, PaaS and SaaS", "شرح كيف تتحرك حد المسؤولية عبر IaaS وPaaS وSaaS"),
      l("State which layers are always the customer's responsibility", "ذكر أي الطبقات مسؤولية العميل دائمًا"),
      l("Build a cloud security checklist from the common failures", "بناء قائمة فحص أمنية سحابية من الإخفاقات الشائعة"),
      l("Apply mobile and IoT hardening baselines", "تطبيق خطوط أساس تحصين الجوال وإنترنت الأشياء"),
    ],
    prerequisites: [
      l("Session 13: how access control and MFA apply to cloud identities", "الجلسة 13: كيف يطبق التحكم بالوصول وMFA على هويات السحابة"),
      l("Session 18: how shared responsibility is a risk and privacy decision", "الجلسة 18: كيف تُعد المسؤولية المشتركة قرار مخاطر وخصوصية"),
    ],
    environment: l(
      "The companion matching simulator in a browser (display only). No real cloud accounts are configured, scanned or changed. All responsibility assignments are performed on the text you read, and all matches are simulated on screen.",
      "محاكي المطابقة المرافق في متصفح (عرض فقط). لا تُضبط أو تُفحص أو تُغيّر حسابات سحابية حقيقية. وجميع إسنادات المسؤولية تُجرى على النص الذي تقرؤه، وجميع المطابقات محاكاة على الشاشة.",
    ),
    tools: [
      l("Shared-responsibility matching simulator (companion browser tool, display only)", "محاكي مطابقة المسؤولية المشتركة (أداة متصفح مساندة، عرض فقط"),
      l("Shared-responsibility table and CSPM reference (for the classification discussion)", "جدول المسؤولية المشتركة ومرجع CSPM (لنقاش التصنيف"),
    ],
    authorization: l(
      "Scope: use the display-only simulator to classify responsibility. Prohibited: configuring, scanning or changing any real cloud account, or exposing real secrets in shared documents. Stop condition: if asked to configure or test a real cloud account, stop and confirm authorization first.",
      "النطاق: استخدم محاكٍ العرض فقط لتصنيف المسؤولية. المحظور: ضبط أو فحص أو تغيير أي حساب سحابي حقيقي، أو كشف أسرار حقيقية في وثائق مشتركة. شرط التوقف: إذا طُلب منك ضبط أو اختبار حساب سحابي حقيقي، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Review the shared-responsibility table", "راجع جدول المسؤولية المشتركة"),
        command: "Lesson: shared-responsibility table",
        explanation: l(
          "Review the table showing which layers the provider and the customer secure in IaaS, PaaS and SaaS. Note that data, users, access settings and configuration are the customer's responsibility in every model, while the provider secures the data centre, hardware and virtualisation — and more, the higher the service model.",
          "راجع الجدول الذي يُظهر أي الطبقات يؤمّنها المزوّد والعميل في IaaS وPaaS وSaaS. ولاحظ أن البيانات والمستخدمين وإعدادات الوصول والإعدادات مسؤولية العميل في كل نموذج، بينما يؤمّن المزوّد مركز البيانات والعتاد والمحاكاة — وأكثر، كلما ارتفع نموذج الخدمة.",
        ),
        expected: l("You can state which layers each party secures across the three models.", "يمكنك ذكر أي الطبقات يؤمّنها كل طرف عبر النماذج الثلاثة."),
      },
      {
        title: l("Assign each task", "أسند كل مهمة"),
        command: "Matching simulator: match each task",
        explanation: l(
          "Read each security task in the IaaS/SaaS setup and match it to the cloud provider, the customer, or shared. For each, decide whether the task falls on the side that runs that layer (provider) or the side that controls the data, identity or configuration (customer), or whether both share it.",
          "اقرأ كل مهمة أمنية في إعداد IaaS/SaaS وزاوجها بمزوّد السحابة أو العميل أو مشترك. ولكل مهمة قرر هل تقع على الجانب الذي يُشغّل تلك الطبقة (المزوّد) أو الجانب الذي يسيطر على البيانات أو الهوية أو الإعداد (العميل)، أو هل يشتركان فيها.",
        ),
        expected: l("You can match all seven tasks to the correct responsible party.", "يمكنك مطابقة المهام السبع جميعها بالطرف المسؤول الصحيح."),
      },
      {
        title: l("Check and review", "تحقق وراجع"),
        command: "Matching simulator: check answers",
        explanation: l(
          "Check your assignments and review the corrections for any you placed incorrectly. For each correction, note the rule: the party that runs a layer secures it (for example the provider secures the data centre), while the party that controls data, identity or configuration is always responsible for it.",
          "تحقق من إسناداتك وراجع التصحيحات لكل مهمة وضعتها خطأ. ولكل تصحيح، لاحظ القاعدة: الطرف الذي يُشغّل طبقة يؤمّنها (مثل أن المزوّد يؤمّن مركز البيانات)، بينما الطرف الذي يسيطر على البيانات أو الهوية أو الإعداد مسؤول عنها دائمًا.",
        ),
        expected: l("You can reach the correct assignments and explain the rule behind each.", "يمكنك الوصول إلى الإسنادات الصحيحة وشرح القاعدة خلف كل منها."),
      },
      {
        title: l("Build the cloud checklist", "ابنِ قائمة الفحص السحابية"),
        command: "Case log: cloud security checklist",
        explanation: l(
          "Write a five-item cloud security checklist for the web shop: MFA on the root account, private storage, least-privilege roles, audit logging enabled, and encrypted tested backups in a separate account. Justify each item by naming the common cloud failure it prevents.",
          "اكتب قائمة من خمسة بنود لأمن السحابة للمتجر: MFA لحساب الجذر، وتخزين خاص، وأدوار بأقل صلاحية، وتسجيل تدقيق مفعّل، ونسخ مشفّرة مختبرة في حساب منفصل. وبرّر كل بند بذكر إخفاق السحابة الشائع الذي يمنعه.",
        ),
        expected: l("You can write a five-item checklist with a justification for each item.", "يمكنك كتابة قائمة من خمسة بنود مع تبرير لكل بند."),
      },
      {
        title: l("Harden a phone and list IoT devices", "حصّن هاتفًا وسرد أجهزة إنترنت الأشياء"),
        command: "Case log: mobile baseline and IoT list",
        explanation: l(
          "For your own phone, go through the mobile baseline — passcode, encryption, updates, minimal app permissions, find-my-device — and fix any gap you find. Then list every smart device at home or work and write one hardening action for each (for example change the default password or move it to a guest network).",
          "لهاتفك الخاص، راجع خط الأساس للجوال — رمز المرور والتشفير والتحديثات وأقل أذونات للتطبيقات وتحديد الجهاز — وأصلح أي ثغرة تجدها. ثم اذكر كل جهاز ذكي في المنزل أو العمل واكتب إجراء تحصين واحدًا لكل منها (مثل تغيير كلمة المرور الافتراضية أو نقله إلى شبكة ضيوف).",
        ),
        expected: l("You can review the mobile baseline and produce an IoT device list with one action each.", "يمكنك مراجعة خط الأساس للجوال وإعداد قائمة أجهزة إنترنتأشياء بإجراء واحد لكل منها."),
      },
      {
        title: l("State the unifying principle", "اذكر المبدأ الجامع"),
        command: "Case log: shared-responsibility summary",
        explanation: l(
          "Write a short summary of the unifying principle: the provider secures the cloud, the customer is always responsible for security in the cloud. Explain why, even in the most managed SaaS model, the data, identities and configuration remain the customer's responsibility.",
          "اكتب ملخصًا قصيرًا للمبدأ الجامع: المزوّد يؤمّن السحابة، والعميل مسؤول دائمًا عن الأمن داخل السحابة. واشرح لماذا، حتى في أكثر نماذج SaaS إدارةً، تبقى البيانات والهويات والإعدادات مسؤولية العميل.",
        ),
        expected: l("You can state the shared-responsibility principle and explain the customer's non-delegable duties.", "يمكنك ذكر مبدأ المسؤولية المشتركة وشرح واجبات العميل غير القابلة للتفويض."),
      },
    ],
    troubleshooting: [
      {
        problem: l("Unsure whether a task is the provider's or the customer's", "لست متأكدًا هل مهمة ما للمزوّد أم للعميل"),
        fix: l("Ask: which party runs the layer the task belongs to? If the task is about the data centre, hardware or virtualisation, it is the provider's. If it is about data, identities, access settings or configuration, it is the customer's. Some span the whole stack and are shared.", "اسأل: أي طرف يُشغّل الطبقة التي تنتمي إليها المهمة؟ إذا كانت المهمة عن مركز البيانات أو العتاد أو المحاكاة فهي للمزوّد. وإذا كانت عن البيانات أو الهوية أو إعدادات الوصول أو الإعداد فهي للعميل. وبعض المهام تمتد عبر المكدس كله فتكون مشتركة."),
      },
      {
        problem: l("Forgetting that configuration is always the customer's", "نسيان أن الإعداد مسؤولية العميل دائمًا"),
        fix: l("Even when the provider runs the application (SaaS) or the operating system (PaaS), the customer still controls who can access the service, what data is stored and how it is shared. Data, identities and configuration never move to the provider's side.", "حتى عندما يُشغّل المزوّد التطبيق (SaaS) أو نظام التشغيل (PaaS)، لا يزال العميل يسيطر على من يستطيع الوصول إلى الخدمة وما البيانات التي تُخزّن وكيف تُشارك. فالبياناتا والهويات والإعدادات لا تنتقل إلى جانب المزوّد أبدًا."),
      },
      {
        problem: l("Confusing provider security with total responsibility", "الخلط بين أمن المزوّد والمسؤولية الكاملة"),
        fix: l("The provider secures the cloud itself — physical, hardware and virtualisation — but that does not cover security in the cloud. The customer's data, identities and configuration remain the customer's responsibility regardless of the service model.", "يؤمّن المزوّد السحابة نفسها — المادي والعتاد والمحاكاة — لكن هذا لا يغطي الأمن داخل السحابة. فتبقى بيانات العميل وهوياته وإعدادته مسؤولية العميل بغض النظر عن نموذج الخدمة."),
      },
    ],
    deliverables: [
      l("The correct responsibility assignment for each of the seven tasks", "إسناد المسؤولية الصحيح لكل مهمة من المهام السبع"),
      l("A note of the rule applied to each assignment", "ملاحظة بالقاعدة المطبقة على كل إسناد"),
      l("A five-item cloud security checklist with justifications", "قائمة فحص أمنية سحابية من خمسة بنود مع تبريرات"),
      l("A hardened mobile baseline review and an IoT device list", "مراجعة خط أساس الجوال المحصّن وقائمة أجهزة إنترنت الأشياء"),
      l("A short summary of the shared-responsibility principle", "ملخص قصير لمبدأ المسؤولية المشتركة"),
      l("A note on practising only on authorised cloud accounts and devices", "ملاحظة عن التدرب فقط على حسابات وأجهزة سحابية مصرح بها"),
    ],
    rubric: [
      { criterion: l("Correct responsibility assignment for all seven tasks", "إسناد مسؤولية صحيح لجميع المهام السبع"), weight: 30 },
      { criterion: l("Accurate application of the shared-responsibility rule", "تطبيق دقيق لقاعدة المسؤولية المشتركة"), weight: 20 },
      { criterion: l("Well-justified five-item cloud security checklist", "قائمة فحص أمنية سحابية من خمسة بنود مبررة جيدًا"), weight: 20 },
      { criterion: l("Complete mobile baseline and IoT hardening list", "قائمة كاملة بخط أساس الجوال وتحصين إنترنت الأشياء"), weight: 15 },
      { criterion: l("Clear summary of the customer's non-delegable duties", "ملخص واضح لواجبات العميل غير القابلة للتفويض"), weight: 15 },
    ],
  },
  quiz: [
    {
      q: l("In IaaS, who patches the guest operating system?", "في IaaS من يرقّع نظام التشغيل الضيف؟"),
      options: [
        l("The cloud provider", "مزوّد السحابة"),
        l("The customer", "العميل"),
        l("The ISP", "مزوّد الإنترنت"),
        l("No one", "لا أحد"),
      ],
      answer: 1,
      why: l("In IaaS the customer manages everything above the hypervisor.", "في IaaS يدير العميل كل ما فوق المحاكي."),
    },
    {
      q: l("What is the most common cause of cloud data exposure?", "ما أكثر أسباب انكشاف بيانات السحابة شيوعًا؟"),
      options: [
        l("Customer misconfiguration such as public storage", "أخطاء إعداد العميل مثل التخزين العام"),
        l("Cosmic rays", "الأشعة الكونية"),
        l("Fibre cuts", "قطع الألياف"),
        l("Provider employees guessing passwords", "تخمين موظفي المزوّد لكلمات المرور"),
      ],
      answer: 0,
      why: l("Provider-side breaches are rare compared with customer misconfigurations.", "اختراقات جهة المزوّد نادرة مقارنة بأخطاء إعداد العميل."),
    },
    {
      q: l("Where should cloud access keys never be stored?", "أين يجب ألا تُخزَّن مفاتيح الوصول السحابية أبدًا؟"),
      options: [
        l("In a secrets manager", "في مدير أسرار"),
        l("In a public code repository", "في مستودع شيفرة عام"),
        l("In short-lived role credentials", "في بيانات دخول أدوار قصيرة العمر"),
        l("In a hardware vault", "في خزنة عتادية"),
      ],
      answer: 1,
      why: l("Exposed keys are scanned for and abused within minutes.", "تُفحص المفاتيح المكشوفة وتُستغل خلال دقائق."),
    },
    {
      q: l("Which is a good first step to secure a new smart camera?", "ما الخطوة الأولى الجيدة لتأمين كاميرا ذكية جديدة؟"),
      options: [
        l("Keep the default password", "إبقاء كلمة المرور الافتراضية"),
        l("Change the default password, update firmware and place it on a separate network", "تغيير كلمة المرور الافتراضية وتحديث البرمجية ووضعها على شبكة منفصلة"),
        l("Expose it to the Internet directly", "تعريضها للإنترنت مباشرة"),
        l("Disable updates", "تعطيل التحديثات"),
      ],
      answer: 1,
      why: l("Default credentials and unpatched firmware were the basis of the Mirai botnet.", "كلمات المرور الافتراضية والبرمجية غير المحدّثة كانت أساس شبكة Mirai."),
    },
    {
      q: l("MDM helps organisations to…", "تساعد MDM المؤسسات على…"),
      options: [
        l("Enforce passcodes, encryption and updates and remotely wipe devices", "فرض رموز المرور والتشفير والتحديثات ومسح الأجهزة عن بُعد"),
        l("Design logos", "تصميم الشعارات"),
        l("Replace the firewall", "استبدال الجدار الناري"),
        l("Increase battery life", "إطالة عمر البطارية"),
      ],
      answer: 0,
      why: l("Mobile Device Management applies and verifies security policy on phones and tablets.", "تطبّق إدارة الأجهزة المحمولة السياسة الأمنية وتتحقق منها على الهواتف واللوحيات."),
    },
    {
      q: l("In SaaS, the customer is still always responsible for…", "في SaaS يظل العميل مسؤولًا دائمًا عن…"),
      options: [
        l("The data centre cooling", "تبريد مركز البيانات"),
        l("Data, user accounts and access settings", "البيانات وحسابات المستخدمين وإعدادات الوصول"),
        l("The provider's servers", "خوادم المزوّد"),
        l("The Internet backbone", "عمود الإنترنت الفقري"),
      ],
      answer: 1,
      why: l("Even the most managed model leaves identity, data and configuration to the customer.", "حتى أكثر النماذج إدارةً تترك الهوية والبيانات والإعداد للعميل."),
    },
    {
      q: l("Why should IoT devices be on a separate network segment?", "لماذا ينبغي وضع أجهزة IoT في قطاع شبكة منفصل؟"),
      options: [
        l("To contain compromise so it cannot reach computers and file shares", "لاحتواء الاختراق فلا يصل إلى الحواسيب ومشاركات الملفات"),
        l("To make them faster", "لجعلها أسرع"),
        l("Because they cannot use IP", "لأنها لا تستطيع استخدام IP"),
        l("To avoid power use", "لتجنب استهلاك الطاقة"),
      ],
      answer: 0,
      why: l("They are hard to patch and monitor, so isolate them.", "يصعب ترقيعها ومراقبتها لذا تُعزل."),
    },
    {
      q: l("Which layer is the customer's responsibility in every cloud model?", "أي طبقة مسؤولية العميل في كل نموذج سحابي؟"),
      options: [
        l("Data, identities and configuration", "البيانات والهويات والإعدادات"),
        l("Data centre hardware", "عتاد مركز البيانات"),
        l("Virtualisation", "المحاكاة الافتراضية"),
        l("Physical security", "الأمن المادي"),
      ],
      answer: 0,
      why: l("Data, identities and configuration are always the customer's, regardless of the model.", "البيانات والهويات والإعدادات للعميل دائمًا، بغض النظر عن النموذج."),
    },
    {
      q: l("What is the purpose of a secrets manager?", "ما الغرض من مدير الأسرار؟"),
      options: [
        l("To store and rotate passwords, keys and tokens securely", "تخزين كلمات المرور والمفاتيح والرموز بأمان وتدويرها"),
        l("To back up hard disks", "نسخ الأقراص الصلبة احتياطيًا"),
        l("To design logos", "تصميم الشعارات"),
        l("To replace MFA", "استبدال MFA"),
      ],
      answer: 0,
      why: l("Secrets managers store and rotate credentials so they are not hard-coded or exposed.", "تخزن مديرات الأسرار بيانات الدخول وتدوّرها لئلا تكون مضمنة أو مكشوفة."),
    },
    {
      q: l("What does infrastructure-as-code improve?", "ما الذي يحسنه تعريف البنية كشيفرة؟"),
      options: [
        l("Reviewing and testing configuration before deployment", "مراجعة واختبار الإعداد قبل النشر"),
        l("Increasing cloud costs", "زيادة تكاليف السحابة"),
        l("Removing the need for MFA", "إزالة الحاجة لMFA"),
        l("Replacing backups", "استبدال النسخ"),
      ],
      answer: 0,
      why: l("It lets configuration be reviewed, tested and reproduced, removing drift and forgotten settings.", "يتيح مراجعة الإعداد واختباره وإعادة إنتاجه، فيزيل الانحراف والإعدادات المنسية."),
    },
  ],
  trueFalse: [
    {
      q: l("Moving to the cloud outsources all security responsibility to the provider.", "يُسند الانتقال إلى السحابة كل مسؤولية الأمن إلى المزوّد."),
      answer: false,
      why: l("The customer remains responsible for security in the cloud — data, identities and configuration.", "يبقى العميل مسؤولًا عن الأمن داخل السحابة — البيانات والهويات والإعدادات."),
    },
    {
      q: l("Most cloud breaches are caused by customer misconfiguration, not provider failures.", "معظم اختراقات السحابة ناجمة عن خطأ إعداد العميل، لا إخفاقات المزوّد."),
      answer: true,
      why: l("Provider-side breaches are rare; public storage and over-privileged identities cause most exposures.", "اختراقات جهة المزوّد نادرة؛ فالتخزين العام والهويات المفرطة الصلاحية تسبب معظم الانكشافات."),
    },
    {
      q: l("In SaaS, the customer is still responsible for data and access settings.", "في SaaS يظل العميل مسؤولًا عن البيانات وإعدادات الوصول."),
      answer: true,
      why: l("Even the most managed model leaves identity, data and configuration to the customer.", "حتى أكثر النماذج إدارةً تترك الهوية والبيانات والإعداد للعميل."),
    },
    {
      q: l("Access keys committed to a public repository are safe if the repository is later made private.", "مفاتيح الوصول المُرفَعة إلى مستودع عام آمنة إذا صار المستودع خاصًا لاحقًا."),
      answer: false,
      why: l("Exposed keys are scanned and abused within minutes, before the repository is made private.", "تُفحص المفاتيح المكشوفة وتُستغل خلال دقائق، قبل أن يصبح المستودع خاصًا."),
    },
    {
      q: l("IoT devices should be isolated on a separate network segment.", "يجب عزل أجهزة إنترنت الأشياء في قطاع شبكة منفصل."),
      answer: true,
      why: l("They are hard to patch and monitor, so segmentation contains a compromise.", "يصعب ترقيعها ومراقبتها، لذا يحتوي التقسيم أي اختراق."),
    },
    {
      q: l("A tested, encrypted backup in a separate account is the last line of recovery.", "النسخة المختبرة والمشفّرة في حساب منفصل هي خط الاسترداد الأخير.",
      ),
      answer: true,
      why: l("Isolation prevents an attacker who compromises the primary account from wiping the backups too.", "يحمي العزل المهاجم الذي يخترق الحساب الأساسي من محو النسخ أيضًا."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each layer by who secures it in IaaS", "صنّف كل طبقة بحسب من يؤمّنها في IaaS"),
      categories: [
        l("Provider", "المزوّد"),
        l("Customer", "العميل"),
      ],
      items: [
        { text: l("Data centre hardware", "عتاد مركز البيانات"), answer: 0 },
        { text: l("Operating system in the VM", "نظام التشغيل في الجهاز الافتراضي"), answer: 1 },
        { text: l("Virtualisation / hypervisor", "المحاكاة / المحاكي"), answer: 0 },
        { text: l("Applications and data", "التطبيقات والبيانات"), answer: 1 },
      ],
      why: l("In IaaS the provider secures the data centre and virtualisation; the customer secures the operating system and above.", "في IaaS يؤمّن المزوّد مركز البيانات والمحاكاة؛ ويؤمّن العميل نظام التشغيل وما فوقه."),
    },
    {
      prompt: l("Classify each cloud failure by its fix", "صنّف كل إخفاق سحابي بحسب إصلاحه"),
      categories: [
        l("Access control", "التحكم بالوصول"),
        l("Configuration", "الإعداد"),
        l("Secrets", "الأسرار"),
      ],
      items: [
        { text: l("Public storage bucket", "حاوية تخزين عامة"), answer: 1 },
        { text: l("Over-privileged identity", "هوية مفرطة الصلاحية"), answer: 0 },
        { text: l("API key in code repository", "مفتاح واجهات برمجية في مستودع شيفرة"), answer: 2 },
        { text: l("Open management port", "منفذ إدارة مفتوح"), answer: 1 },
      ],
      why: l("Public storage and open ports are configuration fixes; over-privileged identities are access-control fixes; leaked keys are secrets fixes.", "التخزين العام والمنافذ المفتوحة إصلاحات إعداد؛ والهويات المفرطة الصلاحية إصلاحات تحكم بالوصول؛ والمفاتيح المسربة إصلاحات أسرار."),
    },
    {
      prompt: l("Match each device category to its main protection approach", "زاوج كل فئة أجهزة بنهج الحماية الرئيسي لها"),
      categories: [
        l("Cloud", "السحابة"),
        l("Mobile", "الجوال"),
        l("IoT", "إنترنت الأشياء"),
      ],
      items: [
        { text: l("Least privilege, MFA, secrets manager", "أقل صلاحية وMFA ومدير أسرار"), answer: 0 },
        { text: l("Passcode, encryption, updates, remote wipe", "رمز المرور والتشفير والتحديثات والمسح عن بُعد"), answer: 1 },
        { text: l("Default-password change, firmware update, segmentation", "تغيير كلمة المرور الافتراضية وتحديث البرمجية والتقسيم"), answer: 2 },
      ],
      why: l("Cloud is secured through identity and secrets; mobile through device baselines; IoT through configuration and segmentation.", "تُؤمّن السحابة عبر الهوية والأسرار؛ والجوال عبر خطوط أساس الجهاز؛ وإنترنت الأشياء عبر الإعداد والتقسيم."),
    },
    {
      prompt: l("Classify each statement as correct or a common cloud mistake", "صنّف كل عبارة كصحيحة أو خطأ سحابي شائع"),
      categories: [
        l("Correct", "صحيح"),
        l("Mistake", "خطأ"),
      ],
      items: [
        { text: l("Make storage private by default", "اجعل التخزين خاصًا افتراضيًا"), answer: 0 },
        { text: l("Use the root account for daily work", "استخدم حساب الجذر في العمل اليومي"), answer: 1 },
        { text: l("Store keys in a secrets manager", "خزّن المفاتيح في مدير أسرار"), answer: 0 },
        { text: l("Put IoT on the main network", "ضع إنترنت الأشياء على الشبكة الرئيسية"), answer: 1 },
      ],
      why: l("Private-by-default and secrets managers are correct; daily root use and IoT on the main network are common mistakes.", "الخصوصية افتراضيًا ومديرو الأسرار صحيحان؛ واستخدام الجذر يوميًا وإنترنت الأشياء على الشبكة الرئيسية خطآن شائعان."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "Your company is moving a web shop to the cloud with IaaS virtual machines, a SaaS e-mail suite and a cloud storage bucket. You must assign each security task to the provider, the customer, or both.",
        "تنقل شركتك متجر ويب إلى السحابة بأجهزة IaaS افتراضية وحزمة بريد SaaS وحاوية تخزين سحابي. وعليك إسناد كل مهمة أمنية إلى المزوّد أو العميل أو كليهما.",
      ),
      question: l("Who is responsible for patching the operating system inside the IaaS virtual machines?", "من المسؤول عن ترقيع نظام التشغيل داخل الأجهزة الافتراضية في IaaS؟"),
      options: [
        l("The cloud provider", "مزوّد السحابة"),
        l("The customer", "العميل"),
        l("Both", "كلاهما"),
        l("No one", "لا أحد"),
      ],
      answer: 1,
      why: l("In IaaS the customer manages everything above the hypervisor, including the guest operating system.", "في IaaS يدير العميل كل ما فوق المحاكي، بما في ذلك نظام التشغيل الضيف."),
    },
    {
      scenario: l(
        "A developer commits a cloud API key to a public code repository by mistake. Within minutes, an automated scanner finds and uses the key to access the cloud account.",
        "يُرفَع مطور مفتاح واجهات برمجية سحابية إلى مستودع شيفرة عام بالخطأ. وخلال دقائق تعثر عليه ماسحة آلية وتستخدمه للوصول إلى حساب السحابة.",
      ),
      question: l("What should have been done, and what is the fix?", "ماذا كان يجب فعله، وما الإصلاح؟"),
      options: [
        l("Nothing; keys in code are normal", "لا شيء؛ فالمفاتيح في الشيفرة أمر طبيعي"),
        l("Use a secrets manager, short-lived credentials and automated scanning; rotate the exposed key immediately", "استخدام مدير أسرار وبيانات دخول قصيرة العمر وفحص آلي؛ وتدوير المفتاح المكشوف فورًا"),
        l("Make the repository private and leave the key", "جعل المستودع خاصًا وترك المفتاح"),
        l("Delete the repository", "حذف المستودع"),
      ],
      answer: 1,
      why: l("A leaked key must be rotated immediately, and a secrets manager with scanning prevents recurrence.", "يجب تدوير المفتاح المكشوف فورًا، ويمنع مدير الأسرار مع الفحص تكراره."),
    },
    {
      scenario: l(
        "A smart camera with a default password sits on the same network as a computer holding company files. You want to reduce the risk it poses.",
        "تُترك كاميرا ذكية بكلمة مرور افتراضية على نفس شبكة حاسوب يحوي ملفات الشركة. تريد تقليل الخطر الذي تشكله.",
      ),
      question: l("What is the best action?", "ما أفضل إجراء؟"),
      options: [
        l("Leave it; cameras are harmless", "اتركها؛ فالكاميرات لا ضرر منها"),
        l("Change the default password, update firmware and move it to a separate guest network", "تغيير كلمة المرور الافتراضية وتحديث البرمجية ونقلها إلى شبكة ضيوف منفصلة"),
        l("Expose it to the Internet for remote viewing", "تعريضها للإنترنت للمشاهدة عن بُعد"),
        l("Disable all updates", "تعطيل كل التحديثات"),
      ],
      answer: 1,
      why: l("Changing credentials, updating firmware and segmenting the device contains the risk.", "تغيير بيانات الدخول وتحديث البرمجية وتقسيم الجهاز يحتوي الخطر."),
    },
  ],
  practicalChecks: [
    {
      task: l("State the shared responsibility model in one sentence", "ذكر نموذج المسؤولية المشتركة في جملة واحدة"),
      expected: l("The provider secures the cloud; the customer is always responsible for security in the cloud — data, identities and configuration.", "يؤمّن المزوّد السحابة؛ ويظل العميل مسؤولًا دائمًا عن الأمن داخل السحابة — البيانات والهويات والإعدادات."),
    },
    {
      task: l("List the three cloud service models", "اذكر نماذج الخدمة السحابية الثلاثة"),
      expected: l("IaaS (infrastructure), PaaS (platform) and SaaS (software).", "IaaS (البنية التحتية) وPaaS (المنصة) وSaaS (البرمجيات)."),
    },
    {
      task: l("State the three cloud layers that are always the customer's responsibility", "ذكر الطبقات السحابية الثلاث التي تكون مسؤولية العميل دائمًا"),
      expected: l("Data, identities (user accounts and access settings) and configuration.", "البيانات والهويات (حسابات المستخدمين وإعدادات الوصول) والإعدادات."),
    },
  ],
  homework: {
    title: l("Homework 19 — Secure a cloud account and a smart device", "الواجب 19 — أمّن حسابًا سحابيًا وجهازًا ذكيًا"),
    tasks: [
      l("Review the sharing settings of your cloud storage (Drive, OneDrive, iCloud, Dropbox): list files shared by public link and remove unneeded shares.", "راجع إعدادات المشاركة في تخزينك السحابي (Drive أو OneDrive أو iCloud أو Dropbox): اذكر الملفات المشاركة برابط عام وأزل غير الضروري."),
      l("Review third-party apps connected to your Google/Microsoft/Apple account and revoke those you do not use.", "راجع التطبيقات الخارجية المرتبطة بحساب Google/Microsoft/Apple وألغِ ما لا تستخدمه."),
      l("Audit your phone's app permissions (location, microphone, camera, contacts) and remove excessive ones.", "دقّق أذونات تطبيقات هاتفك (الموقع والميكروفون والكاميرا وجهات الاتصال) وأزل الزائد."),
      l("Choose one IoT device at home, change its password, update firmware and move it to a guest network if possible.", "اختر جهاز إنترنتأشياء واحدًا في المنزل وغيّر كلمة مروره وحدّث برمجيته وانقله إلى شبكة الضيوف إن أمكن."),
    ],
    deliverable: l("A short report listing what you found, what you changed and which items remain open.", "تقرير قصير يسرد ما وجدته وما غيّرته وما بقي مفتوحًا."),
    criteria: [
      l("A review of cloud sharing settings with unneeded shares removed", "مراجعة إعدادات المشاركة السحابية مع إزالة غير الضروري"),
      l("Third-party app connections reviewed and unused ones revoked", "مراجعة تطبيقات خارجية وإلغاء غير المستخدمة"),
      l("Phone app permissions audited and excessive ones removed", "تدقيق أذونات تطبيقات الهاتف وإزالة الزائد"),
      l("An IoT device hardened (password, firmware, segmentation)", "جهاز إنترنتأشياء محصّن (كلمة مرور وبرمجية وتقسيم"),
      l("A clear report of findings, changes and open items", "تقرير واضح بالنتائج والتغييرات والبنود المفتوحة"),
    ],
    challenge: l(
      "Optional challenge: draw the shared-responsibility boundary for a service you use (for example a cloud photo backup, a SaaS mailbox or a smart speaker) and label, for each layer, whether the provider, the customer, or both secure it.",
      "مهمة تحدٍ اختيارية: ارسم حد المسؤولية المشتركة لخدمة تستخدمها (مثل نسخ صور سحابية أو صندوق بريد SaaS أو متكلم ذكي) وسمِّ، لكل طبقة، هل يؤمّنها المزوّد أم العميل أم كلاهما.",
    ),
  },
  refs: [
    { title: "Shared responsibility in the cloud", org: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility" },
    { title: "AWS Shared Responsibility Model", org: "Amazon Web Services", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
    { title: "Cloud security guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/cloud" },
    { title: "Securing the Internet of Things", org: "CISA", url: "https://www.cisa.gov/news-events/news/securing-internet-things" },
    { title: "OWASP Mobile Application Security", org: "OWASP", url: "https://owasp.org/www-project-mobile-app-security/" },
    { title: "Cloud Security Posture Management (CSPM)", org: "CIS", url: "https://www.cisecurity.org/controls" },
  ],
  terms: [
    { term: l("Cloud computing", "الحوسبة السحابية"), def: l("Renting IT resources — compute, storage, software — over the Internet.", "تأجير موارد تقنية المعلومات — الحوسبة والتخزين والبرمجيات — عبر الإنترنت.") },
    { term: l("IaaS", "البنية التحتية كخدمة"), def: l("Cloud model where the customer manages the OS, apps, network, identities and data.", "نموذج سحابي يدير فيه العميل النظام والتطبيقات والشبكة والهويات والبيانات.") },
    { term: l("PaaS", "المنصة كخدمة"), def: l("Cloud model where the provider manages the OS and runtime; the customer manages apps and data.", "نموذج سحابي يدير فيه المزوّد النظام وبيئة التشغيل؛ ويدير العميل التطبيق والبيانات.") },
    { term: l("SaaS", "البرمجيات كخدمة"), def: l("Cloud model where the provider runs the application; the customer manages users and data.", "نموذج سحابي يُشغّل فيه المزوّد التطبيق؛ ويدير العميل المستخدمين والبيانات.") },
    { term: l("Shared responsibility model", "نموذج المسؤولية المشتركة"), def: l("Division of security duties between cloud provider and customer.", "تقسيم المهام الأمنية بين مزوّد السحابة والعميل.") },
    { term: l("Misconfiguration", "خطأ الإعداد"), def: l("A setting that leaves a resource exposed, such as public storage or an open port.", "إعداد يترك موردًا مكشوفًا، مثل التخزين العام أو المنفذ المفتوح.") },
    { term: l("Least privilege", "أقل صلاحية"), def: l("Granting each identity only the permissions it needs.", "منح كل هوية فقط الأذونات التي تحتاجها.") },
    { term: l("MFA", "المصادقة متعددة العوامل"), def: l("Requiring more than one proof of identity to access an account.", "اشتراط أكثر من دليل للهوية للوصول إلى حساب.") },
    { term: l("Secrets manager", "مدير الأسرار"), def: l("A service that securely stores and rotates passwords, keys and tokens.", "خدمة تخزّن كلمات المرور والمفاتيح والرموز بأمان وتدوّرها.") },
    { term: l("Encryption at rest", "التشفير في السكون"), def: l("Encrypting stored data so it is unreadable if storage is compromised.", "تشفير البيانات المخزّنة لجعلها غير قابلة للقراءة إذا تم اختراق التخزين.") },
    { term: l("Encryption in transit", "التشفير أثناء النقل"), def: l("Encrypting data as it moves between systems (for example TLS).", "تشفير البيانات أثناء انتقالها بين الأنظمة (مثل TLS).") },
    { term: l("Backup", "النسخة الاحتياطية"), def: l("A copy of data kept to restore after loss or compromise.", "نسخة من البيانات تُحفظ للاستعادة بعد الفقد أو الاختراق.") },
    { term: l("CSPM", "إدارة وضع أمن السحابة"), def: l("Tools that continuously check cloud configuration against best practice.", "أدوات تفحص إعداد السحابة باستمرار مقابل أفضل الممارسات.") },
    { term: l("Infrastructure as code", "تعريف البنية كشيفرة"), def: l("Defining cloud resources in reviewable, versioned files.", "تحديد موارد السحابة في ملفات قابلة للمراجعة ومرقمة الإصدار.") },
    { term: l("BYOD", "أحضر جهازك الخاص"), def: l("Employees using personal devices for work.", "استخدام الموظفين لأجهزتهم الشخصية في العمل.") },
    { term: l("MDM", "إدارة الأجهزة المحمولة"), def: l("Software that enforces security policy on phones and tablets.", "برمجيات تفرض السياسة الأمنية على الهواتف واللوحيات.") },
    { term: l("IoT", "إنترنت الأشياء"), def: l("Internet-connected everyday devices and sensors.", "أجهزة ومستشعرات يومية متصلة بالإنترنت.") },
    { term: l("Firmware", "البرمجية الثابتة"), def: l("Low-level software built into a device's hardware.", "برمجية منخفضة المستوى مدمجة في عتاد الجهاز.") },
    { term: l("Segmentation", "التقسيم"), def: l("Dividing a network into isolated parts to contain a compromise.", "تقسيم الشبكة إلى أجزاء معزولة لاحتواء الاختراق.") },
    { term: l("VLAN", "شبكة محلية افتراضية"), def: l("A logically separate network segment on shared infrastructure.", "قطاع شبكة منفصل منطقيًا على بنية مشتركة.") },
    { term: l("Audit logging", "تسجيل التدقيق"), def: l("Recording actions for later review and detection.", "تسجيل الإجراءات لمراجعتها لاحقًا والكشف عنها.") },
  ],
};
