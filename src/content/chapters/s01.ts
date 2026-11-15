import { l, type Session } from "../types";

export const s01: Session = {
  id: 1,
  phase: 1,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Introduction to Cybersecurity & Security Principles",
    "مدخل إلى الأمن السيبراني ومبادئ الأمن",
  ),
  summary: l(
    "What cybersecurity is, why it matters, how the CIA Triad and risk thinking guide every security decision, and where the main career paths lead.",
    "ما هو الأمن السيبراني، ولماذا يهم، وكيف يوجّه مثلث CIA والتفكير القائم على المخاطر كل قرار أمني، وإلى أين تؤدي المسارات المهنية الرئيسية.",
  ),
  overview: l(
    "This opening session builds the mental model for the whole Foundation program. You will learn what cybersecurity protects, how professionals reason about assets, threats, vulnerabilities and risk, and why security is layered rather than a single product. The session ends with a practical asset-and-control exercise that prepares you for the first major lab.",
    "تبني هذه الجلسة الافتتاحية النموذج الذهني للبرنامج التأسيسي بأكمله. ستتعلم ما الذي يحميه الأمن السيبراني، وكيف يفكر المتخصصون في الأصول والتهديدات والثغرات والمخاطر، ولماذا يكون الأمن طبقات لا منتجًا واحدًا. وتنتهي الجلسة بتمرين عملي للأصول والضوابط يهيّئك للمختبر الرئيسي الأول.",
  ),
  whyItMatters: l(
    "Every organization now depends on digital systems. A security failure can stop patient care, interrupt payments, expose personal data, or shut down a small business. You do not need to become a security engineer today, but you do need to recognize risk, ask better questions, and understand why controls exist. These ideas recur in every later session, from Linux permissions to incident response.",
    "تعتمد كل مؤسسة اليوم على الأنظمة الرقمية. وقد يؤدي أي إخفاق أمني إلى توقف رعاية المرضى، أو انقطاع المدفوعات، أو كشف البيانات الشخصية، أو إغلاق شركة صغيرة. لا يُطلب منك أن تصبح مهندس أمن اليوم، لكن يُطلب منك أن تتعرف على المخاطر، وتطرح أسئلة أفضل، وتفهم سبب وجود الضوابط. هذه الأفكار تتكرر في كل جلسة لاحقة، من صلاحيات لينكس إلى الاستجابة للحوادث.",
  ),
  prerequisites: [
    l(
      "Comfort using a computer, a browser and files; no programming or previous cybersecurity knowledge is required.",
      "القدرة على استخدام الحاسوب والمتصفح والملفات؛ لا تُشترط أي معرفة بالبرمجة أو بالأمن السيبراني.",
    ),
    l(
      "Willingness to write short notes and complete a paper-based asset exercise.",
      "الاستعداد لكتابة ملاحظات قصيرة وإنجاز تمرين ورقي عن الأصول.",
    ),
    l(
      "A legal and ethical mindset: only test systems you own or have explicit written permission to test.",
      "عقلية قانونية وأخلاقية: لا تختبر إلا الأنظمة التي تملكها أو لديك إذن كتابي صريح باختبارها.",
    ),
  ],
  objectives: [
    l(
      "Define cybersecurity and distinguish it from information security and IT operations.",
      "تعريف الأمن السيبراني والتمييز بينه وبين أمن المعلومات وعمليات تقنية المعلومات.",
    ),
    l(
      "Explain confidentiality, integrity and availability with realistic examples.",
      "شرح السرية والسلامة والتوافر بأمثلة واقعية.",
    ),
    l(
      "Use the terms asset, threat, vulnerability, exploit, risk and control correctly.",
      "استخدام مصطلحات الأصل والتهديد والثغرة والاستغلال والخطر والضابط استخدامًا صحيحًا.",
    ),
    l(
      "Describe the main control types and the principle of defense in depth.",
      "وصف أنواع الضوابط الرئيسية ومبدأ الدفاع المتعمق.",
    ),
    l(
      "Identify the major cybersecurity domains and what professionals in each domain do.",
      "تحديد مجالات الأمن السيبراني الرئيسية وما يفعله المتخصصون في كل مجال.",
    ),
    l(
      "Map a small organization's assets, threats and controls in a structured table.",
      "ربط أصول مؤسسة صغيرة وتهديداتها وضوابطها في جدول منظم.",
    ),
  ],
  agenda: [
    { label: l("Welcome, overview and prior-knowledge check", "الترحيب والنظرة العامة والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Core theory: cybersecurity, CIA Triad, assets and risk", "النظرية الأساسية: الأمن السيبراني ومثلث CIA والأصول والمخاطر"), minutes: 25 },
    { label: l("Detailed explanation: controls, defense in depth and architecture", "الشرح التفصيلي: الضوابط والدفاع المتعمق والهندسة الأمنية"), minutes: 20 },
    { label: l("Instructor demonstration: mapping a small business", "عرض المدرب: تحليل شركة صغيرة"), minutes: 10 },
    { label: l("Practical exercise: asset, threat and control worksheet", "تمرين عملي: ورقة عمل للأصول والتهديدات والضوابط"), minutes: 20 },
    { label: l("Knowledge assessment, recap and homework briefing", "تقييم المعرفة والمراجعة وإحاطة الواجب"), minutes: 10 },
  ],
  introduction: l(
    "Imagine a small dental clinic. It has patient records, appointment software, a Wi-Fi network, a payment terminal, and staff who use email every day. Nothing about that clinic looks like a military target, yet a single phishing email or an unpatched computer could expose patient data or stop appointments for a week. Cybersecurity starts by seeing that ordinary organization as a set of valuable assets with real threats around them. In this session we build that view, then use it to explain why the CIA Triad, risk, and layered controls are the foundation of every later topic.",
    "تخيّل عيادة أسنان صغيرة. لديها سجلات مرضى، وبرنامج مواعيد، وشبكة Wi-Fi، وجهاز دفع، وموظفون يستخدمون البريد الإلكتروني يوميًا. لا يبدو في ذلك أي هدف عسكري، ومع ذلك قد تؤدي رسالة تصيّد واحدة أو حاسوب غير محدّث إلى كشف بيانات المرضى أو إيقاف المواعيد لأسبوع. يبدأ الأمن السيبراني برؤية تلك المؤسسة العادية كمجموعة من الأصول القيّمة المحاطة بتهديدات حقيقية. في هذه الجلسة نبني هذه الرؤية، ثم نستخدمها لشرح لماذا يُعدّ مثلث CIA والمخاطر والضوابط متعددة الطبقات أساس كل موضوع لاحق.",
  ),
  sections: [
    {
      h: l("1. What is cybersecurity?", "1. ما هو الأمن السيبراني؟"),
      p: [
        l(
          "Cybersecurity is the practice of protecting systems, networks, applications, data and people from digital attacks. It is not a single product or a checklist. It combines technology, processes and human behavior, and its purpose is to reduce the likelihood and impact of harm while allowing the organization to keep working.",
          "الأمن السيبراني هو ممارسة حماية الأنظمة والشبكات والتطبيقات والبيانات والأشخاص من الهجمات الرقمية. وهو ليس منتجًا واحدًا أو قائمة تحقق. بل يجمع بين التقنية والعمليات وسلوك البشر، وهدفه تقليل احتمال الضرر وأثره مع السماح للمؤسسة بمواصلة عملها.",
        ),
        l(
          "Information security protects information in any form: paper, spoken, digital, or stored on a device. Cybersecurity focuses on information and systems that are reachable through digital networks. The two overlap heavily. A stolen printed patient file is an information-security incident; a ransomware attack on the appointment server is a cybersecurity incident that also affects information security.",
          "يحمي أمن المعلومات المعلومات بأي شكل: ورقية أو منطوقة أو رقمية أو مخزّنة على جهاز. ويركز الأمن السيبراني على المعلومات والأنظمة التي يمكن الوصول إليها عبر الشبكات الرقمية. ويتداخل المجالان بشدة. فسرقة ملف مرضى مطبوع حادث أمن معلومات، بينما هجوم فدية على خادم المواعيد حادث أمن سيبراني يؤثر أيضًا في أمن المعلومات.",
        ),
        l(
          "IT operations keeps systems running: servers, updates, accounts, backups and support. Security makes sure they run safely. The two must cooperate. A security team that blocks every update without understanding operations creates outages; an operations team that ignores security creates breaches. Mature organizations design security into normal operations rather than adding it at the end.",
          "تُبقي عمليات تقنية المعلومات الأنظمة عاملة: الخوادم والتحديثات والحسابات والنسخ الاحتياطي والدعم. ويضمن الأمن عملها بأمان. ويجب أن يتعاونا. ففريق الأمن الذي يمنع كل تحديث دون فهم العمليات يسبب انقطاعات، وفريق العمليات الذي يتجاهل الأمن يسبب اختراقات. وتصمم المؤسسات الناضجة الأمن داخل العمليات الطبيعية بدلًا من إضافته في النهاية.",
        ),
      ],
      callout: {
        kind: "key",
        text: l(
          "Security is risk management, not perfection. No organization can remove every risk; it prioritizes the risks that matter most and verifies that controls actually work.",
          "الأمن إدارة مخاطر وليس كمالًا. لا تستطيع أي مؤسسة إزالة كل المخاطر؛ بل ترتب أولوياتها بحسب الأهمية وتتحقق من أن الضوابط تعمل فعليًا.",
        ),
      },
    },
    {
      h: l("2. Why cybersecurity matters", "2. لماذا يهم الأمن السيبراني؟"),
      p: [
        l(
          "Modern organizations depend on digital systems for patient care, payments, payroll, communication, logistics and safety. When those systems stop, the business stops. A hospital may postpone operations; a shop may lose sales; a factory may halt production; a school may expose student records. The impact is measured in money, time, privacy, reputation and sometimes physical safety.",
          "تعتمد المؤسسات الحديثة على الأنظمة الرقمية في رعاية المرضى والمدفوعات والرواتب والاتصالات والخدمات اللوجستية والسلامة. وعندما تتوقف هذه الأنظمة يتوقف العمل. فقد تؤجل مستشفى عملياتها، أو تخسر متجرًا مبيعاته، أو يتوقف مصنع عن الإنتاج، أو تكشف مدرسة سجلات طلابها. ويُقاس الأثر بالمال والوقت والخصوصية والسمعة وأحيانًا بالسلامة الجسدية.",
        ),
        l(
          "Attackers are not all the same. Some are criminals seeking ransom or payment-card data. Some are nation-state groups collecting intelligence or disrupting infrastructure. Some are hacktivists with a political message. Some are insiders, employees or contractors who misuse legitimate access. Others are opportunistic individuals using ready-made tools. Each type has different motives, resources and patience, which changes the defenses you need.",
          "ليس المهاجمون جميعًا متشابهين. فبعضهم مجرمون يسعون إلى فدية أو بيانات بطاقات الدفع. وبعضهم مجموعات تابعة لدول تجمع معلومات أو تعطل البنية التحتية. وبعضهم قراصنة نشطاء لديهم رسالة سياسية. وبعضهم مخترقون داخليون من الموظفين أو المتعاقدين يسيئون استخدام وصول مشروع. وآخرون أفراد انتهازيون يستخدمون أدوات جاهزة. ولكل نوع دوافع وموارد وصبر مختلف، وهذا يغيّر الضوابط التي تحتاجها.",
        ),
        l(
          "Individuals are targets too. Phishing, account takeover, identity theft and fraud affect real people. A reused password on a shopping site can expose an email account, which can then reset passwords for banking and social media. Security is therefore both an organizational and a personal skill. The habits you build in this course apply to your own devices and accounts.",
          "الأفراد أيضًا أهداف. فالتصيّد والاستيلاء على الحسابات وسرقة الهوية والاحتيال تؤثر في أشخاص حقيقيين. وقد تكشف كلمة مرور معاد استخدامها في موقع تسوق حساب بريد إلكتروني، ثم تُستخدم لإعادة تعيين كلمات مرور الخدمات المصرفية ووسائل التواصل. لذلك يكون الأمن مهارة مؤسسية وشخصية في الوقت نفسه. والعادات التي تبنيها في هذه الدورة تنطبق على أجهزتك وحساباتك.",
        ),
      ],
    },
    {
      h: l("3. The CIA Triad", "3. مثلث CIA"),
      p: [
        l(
          "The CIA Triad is a simple model for three security goals: Confidentiality, Integrity and Availability. It is not the only model, but it is the most useful starting point because almost every control can be explained by which goal it protects and which goal it may complicate.",
          "مثلث CIA نموذج بسيط لثلاثة أهداف أمنية: السرية والسلامة والتوافر. وهو ليس النموذج الوحيد، لكنه أفضل نقطة بداية لأن كل ضابط تقريبًا يمكن تفسيره بالهدف الذي يحميه والهدف الذي قد يعقّده.",
        ),
        l(
          "Confidentiality means only authorized people, devices or services can access information. Controls include access control, encryption, multi-factor authentication, data classification and secure disposal. A stolen unencrypted laptop, an exposed database, or an email sent to the wrong recipient are confidentiality failures.",
          "تعني السرية أن الأشخاص أو الأجهزة أو الخدمات المصرح لها فقط تستطيع الوصول إلى المعلومات. وتشمل الضوابط التحكم في الوصول والتشفير والمصادقة متعددة العوامل وتصنيف البيانات والتخلص الآمن منها. وسرقة حاسوب محمول غير مشفر، أو كشف قاعدة بيانات، أو إرسال بريد إلى مستلم خاطئ هي إخفاقات في السرية.",
        ),
        l(
          "Integrity means data is accurate, complete and has not been changed improperly. Controls include hashing, digital signatures, change control, backups, audit logs and separation of duties. An attacker quietly changing a salary amount, a corrupted backup, or an unauthorized edit to a medical record are integrity failures.",
          "تعني السلامة أن البيانات دقيقة وكاملة ولم تُغيّر بشكل غير مشروع. وتشمل الضوابط التجزئة والتوقيعات الرقمية وضبط التغيير والنسخ الاحتياطي وسجلات التدقيق وفصل الواجبات. وتغيير مهاجم لمبلغ راتب بصمت، أو تلف نسخة احتياطية، أو تعديل غير مصرح به في سجل طبي هي إخفاقات في السلامة.",
        ),
        l(
          "Availability means systems and data are accessible to authorized users when needed. Controls include redundancy, backups, denial-of-service protection, patching, capacity planning and disaster recovery. Ransomware that encrypts a hospital server, a failed disk without a backup, or a flood of traffic that takes a shop offline are availability failures.",
          "يعني التوافر أن الأنظمة والبيانات متاحة للمستخدمين المصرح لهم عند الحاجة. وتشمل الضوابط التكرار والنسخ الاحتياطي والحماية من حجب الخدمة والتحديث وتخطيط السعة والتعافي من الكوارث. وبرمجية فدية تشفر خادم مستشفى، أو قرص معطل دون نسخة احتياطية، أو سيل من الزيارات يُخرج متجرًا عن الخدمة هي إخفاقات في التوافر.",
        ),
      ],
      table: {
        head: [l("Goal", "الهدف"), l("Question it answers", "السؤال الذي يجيب عنه"), l("Example attack", "مثال على هجوم"), l("Example control", "مثال على ضابط")],
        rows: [
          [
            l("Confidentiality", "السرية"),
            l("Who may see this?", "من يحق له رؤية هذا؟"),
            l("Data leak, stolen laptop", "تسريب بيانات، سرقة حاسوب"),
            l("Encryption, access control", "التشفير، التحكم في الوصول"),
          ],
          [
            l("Integrity", "السلامة"),
            l("Is the data correct and unchanged?", "هل البيانات صحيحة ولم تتغير؟"),
            l("Invoice tampering, ransomware", "التلاعب بالفاتورة، برمجية فدية"),
            l("Hashing, signatures, audit logs", "التجزئة، التوقيعات، سجلات التدقيق"),
          ],
          [
            l("Availability", "التوافر"),
            l("Can authorized users reach it now?", "هل يستطيع المصرح لهم الوصول الآن؟"),
            l("DDoS, disk failure", "حجب الخدمة، تعطل القرص"),
            l("Backups, redundancy, DDoS protection", "النسخ الاحتياطي، التكرار، الحماية من حجب الخدمة"),
          ],
        ],
      },
      callout: {
        kind: "tip",
        text: l(
          "The three goals trade off. Strong encryption protects confidentiality but can hurt availability if the key is lost. Frequent backups help availability but create another copy that must be protected.",
          "تتبادل الأهداف الثلاثة التأثير. فالتشفير القوي يحمي السرية لكنه قد يضر بالتوافر إذا فُقد المفتاح. والنسخ الاحتياطي المتكرر يساعد التوافر لكنه ينشئ نسخة أخرى يجب حمايتها.",
        ),
      },
    },
    {
      h: l("4. Beyond the CIA Triad", "4. ما بعد مثلث CIA"),
      p: [
        l(
          "Authenticity means a user, device or message is genuinely who or what it claims to be. Digital certificates, multi-factor authentication and digital signatures support authenticity. Without it, confidentiality and integrity decisions may be based on a false identity.",
          "تعني الأصالة أن المستخدم أو الجهاز أو الرسالة هو فعلًا من يدّعي أنه هو. وتدعم الشهادات الرقمية والمصادقة متعددة العوامل والتوقيعات الرقمية الأصالة. وبدونها قد تُبنى قرارات السرية والسلامة على هوية مزيفة.",
        ),
        l(
          "Accountability means actions can be traced to an identity. Audit logs, unique accounts, time synchronization and non-repudiation make it possible to investigate what happened. Shared administrator accounts destroy accountability because multiple people can perform the same action without a clear record.",
          "تعني المساءلة إمكانية تتبع الأفعال إلى هوية معينة. وتجعل سجلات التدقيق والحسابات الفريدة ومزامنة الوقت وعدم الإنكار التحقيق فيما حدث ممكنًا. وتدمّر حسابات المسؤول المشتركة المساءلة لأن عدة أشخاص يستطيعون تنفيذ الفعل نفسه دون سجل واضح.",
        ),
        l(
          "Privacy is about the proper handling of personal data: collecting only what is needed, limiting access, retaining it only as long as necessary, and being transparent with people. Privacy is related to confidentiality but is not identical. A company can keep data confidential and still misuse it.",
          "تتعلق الخصوصية بالتعامل السليم مع البيانات الشخصية: جمع ما يلزم فقط، وتقييد الوصول، والاحتفاظ بها للمدة اللازمة فقط، والشفافية مع الأشخاص. وترتبط الخصوصية بالسرية لكنها ليست مطابقة لها. فقد تحافظ الشركة على سرية البيانات ومع ذلك تسيء استخدامها.",
        ),
        l(
          "Resilience and safety complete the picture. Organizations must recover from failures, not only prevent them. In hospitals, industrial systems and transport, a security decision can affect physical safety. A control that prevents an attack but blocks an emergency service is not a good control.",
          "تكمل المرونة والسلامة الصورة. يجب أن تتعافى المؤسسات من الإخفاقات لا أن تمنعها فقط. وفي المستشفيات والأنظمة الصناعية والنقل قد يؤثر القرار الأمني في السلامة الجسدية. والضابط الذي يمنع هجومًا لكنه يعطل خدمة طوارئ ليس ضابطًا جيدًا.",
        ),
      ],
      bullets: [
        l("Authenticity — prove identity before trusting.", "الأصالة — إثبات الهوية قبل الثقة."),
        l("Accountability — trace actions to a real account.", "المساءلة — تتبع الأفعال إلى حساب حقيقي."),
        l("Privacy — collect and use personal data lawfully and minimally.", "الخصوصية — جمع البيانات الشخصية واستخدامها قانونيًا وبالحد الأدنى."),
        l("Resilience — detect, respond and recover.", "المرونة — الاكتشاف والاستجابة والتعافي."),
      ],
    },
    {
      h: l("5. Assets and security goals", "5. الأصول والأهداف الأمنية"),
      p: [
        l(
          "An asset is anything of value to the organization. Assets include data, devices, accounts, services, networks, software, people, intellectual property and reputation. A patient record, a payroll database, a Wi-Fi access point and the trust of customers are all assets, even though only some of them are physical.",
          "الأصل هو كل ما له قيمة للمؤسسة. وتشمل الأصول البيانات والأجهزة والحسابات والخدمات والشبكات والبرمجيات والأشخاص والملكية الفكرية والسمعة. فسجل المريض وقاعدة بيانات الرواتب ونقطة وصول Wi-Fi وثقة العملاء كلها أصول، رغم أن بعضها فقط مادي.",
        ),
        l(
          "You cannot protect what you cannot see. An asset inventory records what exists, who owns it, where it is, how critical it is and what data it holds. Asset owners are accountable for classification and access decisions. Without an inventory, vulnerability management, incident response and risk assessment become guesses.",
          "لا يمكنك حماية ما لا تراه. ويسجل جرد الأصول ما هو موجود، ومن يملكه، وأين يوجد، ومدى أهميته، وما البيانات التي يحتويها. ومالكو الأصول مسؤولون عن التصنيف وقرارات الوصول. وبدون جرد تصبح إدارة الثغرات والاستجابة للحوادث وتقييم المخاطر تخمينًا.",
        ),
        l(
          "Different assets have different primary goals. A public website prioritizes availability and integrity; a patient record prioritizes confidentiality and integrity; a backup prioritizes availability and integrity; an admin account prioritizes confidentiality and authenticity. Mapping assets to CIA helps prioritize controls and spending.",
          "تختلف الأصول في أهدافها الأساسية. فالموقع العام يعطي الأولوية للتوافر والسلامة؛ وسجل المريض يعطي الأولوية للسرية والسلامة؛ والنسخة الاحتياطية تعطي الأولوية للتوافر والسلامة؛ وحساب المسؤول يعطي الأولوية للسرية والأصالة. وربط الأصول بمثلث CIA يساعد على ترتيب الضوابط والإنفاق.",
        ),
      ],
      table: {
        head: [l("Asset type", "نوع الأصل"), l("Examples", "أمثلة"), l("Primary goal", "الهدف الأساسي")],
        rows: [
          [l("Data", "البيانات"), l("Patient records, invoices, source code", "سجلات المرضى، الفواتير، الشيفرة المصدرية"), l("Confidentiality and integrity", "السرية والسلامة")],
          [l("Device", "الجهاز"), l("Laptop, server, phone, router", "حاسوب محمول، خادم، هاتف، موجه"), l("Availability and integrity", "التوافر والسلامة")],
          [l("Account", "الحساب"), l("Domain admin, email, cloud console", "مسؤول النطاق، البريد، وحدة التحكم السحابية"), l("Confidentiality and authenticity", "السرية والأصالة")],
          [l("Service", "الخدمة"), l("Website, payment API, DNS", "موقع، واجهة دفع، DNS"), l("Availability and integrity", "التوافر والسلامة")],
          [l("People and reputation", "الأشخاص والسمعة"), l("Staff, customers, brand trust", "الموظفون، العملاء، ثقة العلامة"), l("Safety, privacy and trust", "السلامة والخصوصية والثقة")],
        ],
      },
    },
    {
      h: l("6. Threats, vulnerabilities, exploits and risk", "6. التهديدات والثغرات والاستغلال والمخاطر"),
      p: [
        l(
          "A threat is a potential cause of harm. It can be a person, a group, a natural event or a technical failure. A vulnerability is a weakness that can be exploited, such as an unpatched server, a weak password, a missing access check or an untrained employee. An exploit is the method or code that takes advantage of the vulnerability.",
          "التهديد هو سبب محتمل للضرر. وقد يكون شخصًا أو مجموعة أو حدثًا طبيعيًا أو عطلًا تقنيًا. والثغرة ضعف يمكن استغلاله، مثل خادم غير محدّث أو كلمة مرور ضعيفة أو غياب فحص وصول أو موظف غير مدرّب. والاستغلال هو الأسلوب أو الشيفرة التي تستفيد من الثغرة.",
        ),
        l(
          "Risk is the likelihood and impact of a threat exploiting a vulnerability. A vulnerability with no relevant threat may be low risk; a critical vulnerability on an internet-facing server with known exploits is high risk. Risk is not the same as a vulnerability, and it is not the same as a threat. This distinction prevents wasted effort and panic.",
          "الخطر هو احتمال أن يستغل تهديدٌ ثغرةً ما، وحجم الأثر الناتج. وقد تكون ثغرة بلا تهديد ذي صلة منخفضة الخطر؛ أما ثغرة حرجة على خادم متصل بالإنترنت ولها استغلالات معروفة فهي عالية الخطر. والخطر ليس الثغرة وليس التهديد. ويساعد هذا التمييز على تجنب الجهد المهدر والذعر.",
        ),
        l(
          "Controls reduce likelihood, impact or both. Risk treatment options are mitigation (reduce), avoidance (stop the activity), transfer (insurance or contract) and acceptance (documented decision to live with it). After controls, some residual risk always remains. Management accepts that residual risk explicitly, not accidentally.",
          "تقلل الضوابط الاحتمال أو الأثر أو كليهما. وخيارات معالجة الخطر هي التخفيف (التقليل)، والتجنب (إيقاف النشاط)، والنقل (التأمين أو العقد)، والقبول (قرار موثق بالتعايش معه). وبعد الضوابط يبقى دائمًا خطر متبقٍ. وتقبله الإدارة صراحة لا بالمصادفة.",
        ),
        l(
          "A simple qualitative scale is often enough for Foundation work: likelihood from 1 (rare) to 5 (almost certain), impact from 1 (minor) to 5 (severe), and risk score = likelihood × impact. The numbers are not precise mathematics; they are a way to make assumptions visible and compare priorities consistently.",
          "غالبًا ما يكفي مقياس نوعي بسيط في المستوى التأسيسي: الاحتمال من 1 (نادر) إلى 5 (شبه مؤكد)، والأثر من 1 (طفيف) إلى 5 (شديد)، ودرجة الخطر = الاحتمال × الأثر. والأرقام ليست رياضيات دقيقة؛ بل وسيلة لإظهار الافتراضات ومقارنة الأولويات باتساق.",
        ),
      ],
      table: {
        head: [l("Term", "المصطلح"), l("Meaning", "المعنى"), l("Clinic example", "مثال العيادة")],
        rows: [
          [l("Asset", "الأصل"), l("Something of value", "شيء ذو قيمة"), l("Patient records", "سجلات المرضى")],
          [l("Threat", "التهديد"), l("Potential cause of harm", "سبب محتمل للضرر"), l("Ransomware criminal group", "مجموعة إجرامية تستخدم برمجيات الفدية")],
          [l("Vulnerability", "الثغرة"), l("Weakness that can be exploited", "ضعف يمكن استغلاله"), l("Unpatched appointment server", "خادم مواعيد غير محدّث")],
          [l("Exploit", "الاستغلال"), l("Method or code that abuses a weakness", "أسلوب أو شيفرة تستغل الضعف"), l("Phishing attachment that installs malware", "مرفق تصيّد يثبّت برمجية خبيثة")],
          [l("Risk", "الخطر"), l("Likelihood and impact of harm", "احتمال الضرر وأثره"), l("Appointments stop and data is exposed", "توقف المواعيد وكشف البيانات")],
          [l("Control", "الضابط"), l("Safeguard that reduces risk", "إجراء حماية يقلل الخطر"), l("MFA, backups, patching, training", "المصادقة متعددة العوامل، النسخ الاحتياطي، التحديث، التدريب")],
        ],
      },
    },
    {
      h: l("7. Security controls and defense in depth", "7. الضوابط الأمنية والدفاع المتعمق"),
      p: [
        l(
          "Controls are grouped by purpose. Preventive controls stop an action before it happens, such as MFA or a firewall rule. Detective controls identify activity after or during it, such as IDS alerts or audit logs. Corrective controls restore normal operation, such as backups or incident response. Deterrent controls discourage an attacker, and compensating controls provide an alternative when the primary control is not feasible.",
          "تُصنّف الضوابط حسب الغرض. فالضوابط الوقائية تمنع الفعل قبل حدوثه، مثل المصادقة متعددة العوامل أو قاعدة جدار ناري. والضوابط الكاشفة تحدد النشاط أثناءه أو بعده، مثل تنبيهات IDS أو سجلات التدقيق. والضوابط التصحيحية تعيد التشغيل الطبيعي، مثل النسخ الاحتياطي أو الاستجابة للحوادث. والضوابط الرادعة تثني المهاجم، والضوابط التعويضية توفر بديلًا عندما لا يكون الضابط الأساسي ممكنًا.",
        ),
        l(
          "Controls also have a nature: administrative (policies, training, procedures), technical (encryption, access control, logging) and physical (locks, guards, cameras). A strong technical control can fail because of a weak administrative process, and a strong policy can fail because no one enforces it. Effective programs combine all three.",
          "وللضوابط أيضًا طبيعة: إدارية (السياسات والتدريب والإجراءات)، وتقنية (التشفير والتحكم في الوصول والتسجيل)، ومادية (الأقفال والحراس والكاميرات). وقد يفشل ضابط تقني قوي بسبب عملية إدارية ضعيفة، وقد تفشل سياسة قوية لأن لا أحد يطبقها. وتجمع البرامج الفعالة بين الأنواع الثلاثة.",
        ),
        l(
          "Defense in depth means using multiple independent layers so that one failure does not compromise everything. For a clinic, that could mean MFA for email, patching, endpoint protection, network segmentation, least-privilege accounts, tested backups and monitoring. If phishing bypasses email filtering, MFA may stop the login; if malware runs, endpoint protection may block it; if files are encrypted, backups restore them.",
          "يعني الدفاع المتعمق استخدام طبقات متعددة مستقلة بحيث لا يؤدي إخفاق واحد إلى اختراق كل شيء. فبالنسبة للعيادة قد يعني ذلك المصادقة متعددة العوامل للبريد، والتحديث، وحماية الأجهزة الطرفية، وتقسيم الشبكة، وحسابات أقل امتيازًا، ونسخًا احتياطية مختبرة، ومراقبة. فإذا تجاوز التصيّد تصفية البريد فقد توقف المصادقة تسجيل الدخول؛ وإذا عملت البرمجية الخبيثة فقد تمنعها حماية الأجهزة الطرفية؛ وإذا شُفرت الملفات تستعيدها النسخ الاحتياطية.",
        ),
        l(
          "A control must be proportional, usable, tested and monitored. A control that is too restrictive will be bypassed; a control that is never tested may fail when needed; a control without logs cannot support an investigation. Security teams therefore measure control coverage and effectiveness, not just whether a product was purchased.",
          "يجب أن يكون الضابط متناسبًا وقابلًا للاستخدام ومختبرًا ومراقبًا. فالضابط المقيّد جدًا سيتجاوزه الناس؛ والضابط غير المختبر قد يفشل عند الحاجة؛ والضابط بلا سجلات لا يدعم التحقيق. لذلك تقيس فرق الأمن تغطية الضوابط وفعاليتها، لا مجرد شراء منتج.",
        ),
      ],
      table: {
        head: [l("Control type", "نوع الضابط"), l("Purpose", "الغرض"), l("Example", "مثال")],
        rows: [
          [l("Preventive", "وقائي"), l("Stop an action before it happens", "منع الفعل قبل حدوثه"), l("MFA, firewall rule, least privilege", "المصادقة متعددة العوامل، قاعدة جدار ناري، أقل امتياز")],
          [l("Detective", "كاشف"), l("Find activity during or after it", "اكتشاف النشاط أثناءه أو بعده"), l("IDS, audit logs, file integrity monitoring", "IDS، سجلات التدقيق، مراقبة سلامة الملفات")],
          [l("Corrective", "تصحيحي"), l("Restore normal operation", "إعادة التشغيل الطبيعي"), l("Backups, incident response, patching", "النسخ الاحتياطي، الاستجابة للحوادث، التحديث")],
          [l("Deterrent", "رادع"), l("Discourage an attacker", "ثني المهاجم"), l("Warning banners, visible cameras", "لافتات التحذير، الكاميرات الظاهرة")],
          [l("Compensating", "تعويضي"), l("Alternative when the primary control is not feasible", "بديل عندما لا يكون الضابط الأساسي ممكنًا"), l("Network segmentation instead of an upgrade", "تقسيم الشبكة بدلًا من ترقية")],
        ],
      },
    },
    {
      h: l("8. Introduction to security architecture", "8. مقدمة في الهندسة الأمنية"),
      p: [
        l(
          "Security architecture is the arrangement of components, trust boundaries and controls. It answers questions such as: where does the internet meet our systems, which systems may talk to each other, where are the most valuable data stores, and what happens if a boundary fails? A clear architecture makes controls easier to place and incidents easier to investigate.",
          "الهندسة الأمنية هي ترتيب المكونات وحدود الثقة والضوابط. وتجيب عن أسئلة مثل: أين يلتقي الإنترنت بأنظمتنا، وأي الأنظمة يحق لها التحدث إلى بعضها، وأين توجد أهم مخازن البيانات، وماذا يحدث إذا فشل حدّ ما؟ وتجعل الهندسة الواضحة وضع الضوابط أسهل والتحقيق في الحوادث أبسط.",
        ),
        l(
          "Common patterns include network zones (internet, DMZ, internal, management), segmentation, least privilege, deny-by-default and minimization of the attack surface. A DMZ holds public-facing services away from internal systems. Segmentation limits lateral movement: if a workstation is infected, it should not be able to reach every server.",
          "تشمل الأنماط الشائعة مناطق الشبكة (الإنترنت، DMZ، الداخل، الإدارة)، والتقسيم، وأقل امتياز، والرفض افتراضيًا، وتقليل سطح الهجوم. وتحتوي DMZ الخدمات العامة بعيدًا عن الأنظمة الداخلية. ويحد التقسيم من الحركة الجانبية: فإذا أُصيب جهاز عمل فلا ينبغي أن يصل إلى كل الخوادم.",
        ),
        l(
          "Zero Trust is a modern principle: never trust a request only because it comes from inside the network; verify identity and device explicitly, grant least privilege, and assume breach. Foundation students do not need to implement Zero Trust, but they should recognize the idea. It replaces the old assumption that everything inside the perimeter is automatically trustworthy.",
          "الثقة الصفرية مبدأ حديث: لا تثق بطلب لمجرد أنه يأتي من داخل الشبكة؛ بل تحقق من الهوية والجهاز صراحة، وامنح أقل امتياز، وافترض حدوث اختراق. لا يحتاج طالب المستوى التأسيسي إلى تنفيذ الثقة الصفرية، لكنه يجب أن يتعرف على الفكرة. فهي تستبدل الافتراض القديم بأن كل ما داخل المحيط موثوق تلقائيًا.",
        ),
        l(
          "Frameworks help organize architecture and governance. The NIST Cybersecurity Framework 2.0 groups outcomes into Govern, Identify, Protect, Detect, Respond and Recover. CIS Controls provide prioritized safeguards. Neither framework is a magic checklist; they are structures for making decisions and measuring progress.",
          "تساعد الأطر على تنظيم الهندسة والحوكمة. ويجمع إطار NIST للأمن السيبراني 2.0 النتائج في الحوكمة والتحديد والحماية والكشف والاستجابة والتعافي. وتوفر ضوابط CIS تدابير حماية مرتبة حسب الأولوية. وليس أي من الإطارين قائمة سحرية؛ بل هما هيكلان لاتخاذ القرارات وقياس التقدم.",
        ),
      ],
      callout: {
        kind: "warn",
        text: l(
          "Do not confuse a diagram with reality. An architecture diagram is a model; verify the actual network, accounts and data flows before trusting it.",
          "لا تخلط بين المخطط والواقع. فمخطط الهندسة نموذج؛ تحقق من الشبكة والحسابات وتدفقات البيانات الفعلية قبل الثقة به.",
        ),
      },
    },
    {
      h: l("9. Cybersecurity domains and specializations", "9. مجالات الأمن السيبراني والتخصصات"),
      p: [
        l(
          "Security operations, often called the SOC or blue team, monitors systems, investigates alerts and responds to incidents. Analysts need strong fundamentals in operating systems, networking, logs and communication. The goal is to detect and contain harm quickly.",
          "تراقب عمليات الأمن، التي تُسمى غالبًا مركز العمليات الأمنية SOC أو الفريق الأزرق، الأنظمة وتحقق في التنبيهات وتستجيب للحوادث. ويحتاج المحللون إلى أساس قوي في أنظمة التشغيل والشبكات والسجلات والتواصل. والهدف اكتشاف الضرر واحتواؤه بسرعة.",
        ),
        l(
          "Penetration testing and red teams test defenses with authorization. They enumerate systems, find weaknesses, exploit them safely in scope, and report how to fix them. This work requires deep knowledge and strict ethics; it is not the same as running a scanner against a random website.",
          "يختبر مختبرو الاختراق والفرق الحمراء الدفاعات بتصريح. فيحصرون الأنظمة ويكتشفون نقاط الضعف ويستغلونها بأمان داخل النطاق ويبلغون بكيفية إصلاحها. ويتطلب هذا العمل معرفة عميقة وأخلاقيات صارمة؛ وهو ليس مجرد تشغيل ماسح على موقع عشوائي.",
        ),
        l(
          "Application security (AppSec) helps teams build secure software through threat modeling, secure design, code review, dependency management and testing. Cloud security focuses on identity, configuration, storage, networking and shared responsibility in cloud platforms. DevSecOps integrates security into development and deployment pipelines.",
          "يساعد أمن التطبيقات (AppSec) الفرق على بناء برمجيات آمنة عبر نمذجة التهديدات والتصميم الآمن ومراجعة الشيفرة وإدارة التبعيات والاختبار. ويركز أمن السحابة على الهوية والإعداد والتخزين والشبكات والمسؤولية المشتركة في منصات السحابة. ويدمج DevSecOps الأمن في خطوط التطوير والنشر.",
        ),
        l(
          "Digital forensics and incident response (DFIR) investigate what happened, preserve evidence and support recovery. Threat intelligence collects and analyzes information about attackers and campaigns. Governance, risk and compliance (GRC) aligns security with business objectives, laws and standards. Identity and access management, network security and security architecture are cross-cutting domains.",
          "يحقق التحقيق الجنائي الرقمي والاستجابة للحوادث (DFIR) فيما حدث ويحفظ الأدلة ويدعم التعافي. وتجمع استخبارات التهديدات معلومات عن المهاجمين والحملات وتحللها. وتوائم الحوكمة والمخاطر والامتثال (GRC) الأمن مع أهداف العمل والقوانين والمعايير. وتُعد إدارة الهوية والوصول وأمن الشبكات والهندسة الأمنية مجالات شاملة.",
        ),
      ],
      table: {
        head: [l("Domain", "المجال"), l("Main focus", "التركيز الرئيسي"), l("Typical tasks", "المهام النموذجية")],
        rows: [
          [l("SOC / blue team", "مركز العمليات / الفريق الأزرق"), l("Detect and respond", "الاكتشاف والاستجابة"), l("Monitor alerts, triage, contain", "مراقبة التنبيهات، الفرز، الاحتواء")],
          [l("Penetration testing", "اختبار الاختراق"), l("Authorized offensive testing", "اختبار هجومي مصرح به"), l("Enumerate, test, report", "الحصر، الاختبار، التقرير")],
          [l("Application security", "أمن التطبيقات"), l("Secure software", "برمجيات آمنة"), l("Threat modeling, code review", "نمذجة التهديدات، مراجعة الشيفرة")],
          [l("Cloud security", "أمن السحابة"), l("Cloud identity and configuration", "هوية السحابة والإعداد"), l("IAM review, misconfiguration checks", "مراجعة IAM، فحص الإعدادات الخاطئة")],
          [l("DFIR", "التحقيق الجنائي والاستجابة"), l("Investigate and recover", "التحقيق والتعافي"), l("Evidence, timeline, containment", "الأدلة، الخط الزمني، الاحتواء")],
          [l("GRC", "الحوكمة والمخاطر والامتثال"), l("Risk, policy, compliance", "المخاطر والسياسات والامتثال"), l("Risk register, audits, policies", "سجل المخاطر، التدقيق، السياسات")],
        ],
      },
    },
    {
      h: l("10. Career paths and how to choose", "10. المسارات المهنية وكيف تختار"),
      p: [
        l(
          "All specializations share the same foundation: operating systems, networking, security principles, risk, communication and ethics. Do not rush into a job title. Build the foundation first, then try small labs in several domains and notice which problems you enjoy solving.",
          "تشترك جميع التخصصات في الأساس نفسه: أنظمة التشغيل والشبكات ومبادئ الأمن والمخاطر والتواصل والأخلاقيات. لا تتسرع في اختيار المسمى الوظيفي. ابنِ الأساس أولًا، ثم جرّب مختبرات صغيرة في عدة مجالات ولاحظ المشكلات التي تستمتع بحلها.",
        ),
        l(
          "SOC analyst is a common entry point because it exposes you to many technologies and incidents. Penetration testing requires deeper systems, network and web knowledge plus strong reporting skills. AppSec usually benefits from software development understanding. Cloud security requires cloud platform experience. GRC rewards clear writing, risk reasoning and communication.",
          "يُعدّ محلل SOC نقطة دخول شائعة لأنه يعرّضك لتقنيات وحوادث كثيرة. ويتطلب اختبار الاختراق معرفة أعمق بالأنظمة والشبكات والويب ومهارات تقرير قوية. ويستفيد أمن التطبيقات عادة من فهم تطوير البرمجيات. ويتطلب أمن السحابة خبرة في منصات السحابة. وتُكافئ GRC الكتابة الواضحة والتفكير في المخاطر والتواصل.",
        ),
        l(
          "A practical roadmap is: master the Foundation sessions, complete every lab, write short reports, build a home lab, practice on legal training platforms, learn one cloud platform, and document your work. Certifications can help later, but they do not replace hands-on evidence and clear explanations.",
          "خارطة طريق عملية: أتقن جلسات المستوى التأسيسي، وأكمل كل مختبر، واكتب تقارير قصيرة، وابنِ مختبرًا منزليًا، وتدرّب على منصات تدريب قانونية، وتعلم منصة سحابة واحدة، ووثّق عملك. قد تساعد الشهادات لاحقًا، لكنها لا تعوض الأدلة العملية والشرح الواضح.",
        ),
        l(
          "Session 19 returns to careers in depth, including a self-assessment and a learning plan. For now, focus on the shared foundation. The best security professionals are curious, methodical, honest about uncertainty, and able to explain risk to people who are not technical.",
          "تعود الجلسة 19 إلى المسارات المهنية بعمق، بما في ذلك تقييم ذاتي وخطة تعلم. ركّز الآن على الأساس المشترك. وأفضل متخصصي الأمن فضوليون ومنهجيون وصادقون بشأن عدم اليقين وقادرون على شرح المخاطر لغير التقنيين.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "A hospital encrypts patient records at rest. An attacker steals a backup disk but cannot read the data without the key. Confidentiality is protected, although the organization must still investigate the theft and review physical access.",
      "يشفر مستشفى سجلات المرضى في حالة السكون. يسرق مهاجم قرص نسخة احتياطية لكنه لا يستطيع قراءة البيانات دون المفتاح. تُحمى السرية، وإن كان على المؤسسة التحقيق في السرقة ومراجعة الوصول المادي.",
    ),
    l(
      "A payment system uses digital signatures and reconciliation checks. When an attacker changes an invoice amount, the alteration is detected before payment. Integrity controls turn a silent fraud into a visible exception.",
      "يستخدم نظام دفع التوقيعات الرقمية وفحوص المطابقة. عندما يغيّر مهاجم مبلغ فاتورة، يُكتشف التغيير قبل الدفع. فتحوّل ضوابط السلامة الاحتيال الصامت إلى استثناء ظاهر.",
    ),
    l(
      "An online store uses a content delivery network, rate limiting and automatic scaling. A volumetric attack is absorbed and legitimate customers can still browse. Availability controls reduce the impact of the attack.",
      "يستخدم متجر إلكتروني شبكة توصيل محتوى وتحديد معدل وتوسعًا تلقائيًا. يُمتص الهجوم الحجمي ويستطيع العملاء الشرعيون مواصلة التصفح. فضوابط التوافر تقلل أثر الهجوم.",
    ),
    l(
      "An employee receives an email that appears to come from the finance director and asks for an urgent bank-transfer change. The employee verifies the request through a separate phone call. This is a control against business email compromise.",
      "يتلقى موظف بريدًا يبدو أنه من مدير المالية ويطلب تغييرًا عاجلًا في الحساب البنكي. يتحقق الموظف من الطلب عبر مكالمة هاتفية منفصلة. وهذا ضابط ضد اختراق البريد التجاري.",
    ),
    l(
      "A clinic uses MFA, patching, endpoint protection, network segmentation and tested backups. A phishing email still reaches an employee, but the layers limit the damage and the clinic restores service from a clean backup.",
      "تستخدم عيادة المصادقة متعددة العوامل والتحديث وحماية الأجهزة الطرفية وتقسيم الشبكة ونسخًا احتياطية مختبرة. تصل رسالة تصيّد إلى موظف رغم ذلك، لكن الطبقات تحد من الضرر وتستعيد العيادة الخدمة من نسخة احتياطية نظيفة.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A regional hospital is hit by ransomware. Appointment systems stop, staff fall back to paper, and attackers threaten to publish patient data. The incident affects availability immediately and confidentiality later. The response requires isolation, forensic evidence, communication, backups and a decision about whether to pay. Foundation thinking helps you see that this is not only an IT problem: it is a patient-safety, legal and business problem.",
      "تتعرض مستشفى إقليمي لهجوم فدية. تتوقف أنظمة المواعيد، ويعود الموظفون إلى الورق، ويهدد المهاجمون بنشر بيانات المرضى. يؤثر الحادث في التوافر فورًا وفي السرية لاحقًا. وتتطلب الاستجابة العزل وجمع الأدلة الجنائية والتواصل والنسخ الاحتياطي وقرارًا بشأن الدفع. تساعدك طريقة التفكير التأسيسية على رؤية أن هذه ليست مشكلة تقنية فقط: بل مشكلة سلامة مرضى وقانون وأعمال.",
    ),
    l(
      "An online store is flooded with traffic during a sale. The site becomes slow, then unavailable. Customers complain, the payment provider sees errors, and the business loses revenue. The team enables DDoS protection and scaling, then reviews whether the attack was volumetric or application-layer. Availability is the primary goal, but integrity of orders and customer trust are also at stake.",
      "يتعرض متجر إلكتروني لسيل من الزيارات أثناء عرض. يصبح الموقع بطيئًا ثم غير متاح. يشتكي العملاء، ويرى مزود الدفع أخطاء، وتخسر الشركة إيرادات. يفعّل الفريق الحماية من حجب الخدمة والتوسع، ثم يراجع ما إذا كان الهجوم حجميًا أو على طبقة التطبيق. التوافر هو الهدف الأساسي، لكن سلامة الطلبات وثقة العملاء أيضًا في خطر.",
    ),
    l(
      "A payroll administrator changes an employee's bank account and salary without approval. The change looks legitimate because it came from a real account. Months later, an audit finds the discrepancy. Integrity and accountability controls — approval workflows, separation of duties, audit logs and reconciliation — determine whether the fraud is prevented or discovered late.",
      "يغيّر مسؤول رواتب حساب بنكي وراتب موظف دون موافقة. يبدو التغيير مشروعًا لأنه جاء من حساب حقيقي. وبعد أشهر يكتشف التدقيق التباين. وتحدد ضوابط السلامة والمساءلة — مسارات الموافقة وفصل الواجبات وسجلات التدقيق والمطابقة — ما إذا كان الاحتيال سيُمنع أو يُكتشف متأخرًا.",
    ),
  ],
  diagram: {
    kind: "layers",
    title: l("Defense in depth for a small organization", "الدفاع المتعمق لمؤسسة صغيرة"),
    caption: l(
      "Each layer reduces a different risk. A failure in one layer should not give an attacker unrestricted access to the next.",
      "كل طبقة تقلل خطرًا مختلفًا. ولا ينبغي أن يمنح إخفاق طبقة واحدة المهاجم وصولًا غير مقيد إلى الطبقة التالية.",
    ),
    nodes: [
      { label: l("Governance, risk and policies", "الحوكمة والمخاطر والسياسات"), desc: l("Decisions, ownership, training and acceptable use.", "القرارات والملكية والتدريب والاستخدام المقبول.") },
      { label: l("Identity and access", "الهوية والوصول"), desc: l("MFA, least privilege, unique accounts and reviews.", "المصادقة متعددة العوامل، أقل امتياز، حسابات فريدة ومراجعات.") },
      { label: l("Network security", "أمن الشبكة"), desc: l("Firewalls, segmentation, DMZ, VPN and secure Wi-Fi.", "جدران نارية، تقسيم، DMZ، VPN وWi-Fi آمن.") },
      { label: l("Endpoint security", "أمن الأجهزة الطرفية"), desc: l("Patching, endpoint protection, disk encryption and hardening.", "التحديث، حماية الأجهزة الطرفية، تشفير القرص والتحصين.") },
      { label: l("Application and data", "التطبيقات والبيانات"), desc: l("Secure coding, validation, backups and data classification.", "برمجة آمنة، تحقق، نسخ احتياطي وتصنيف بيانات.") },
      { label: l("Monitoring and response", "المراقبة والاستجابة"), desc: l("Logs, SIEM, alerts, incident response and recovery.", "السجلات، SIEM، التنبيهات، الاستجابة للحوادث والتعافي.") },
    ],
  },
  instructorDemo: l(
    "The instructor draws a fictional dental clinic on a whiteboard: reception laptop, appointment server, Wi-Fi router, payment terminal, patient records and email accounts. In ten minutes, the class labels each asset, marks the primary CIA goal, identifies two threats and two vulnerabilities, and places at least one preventive and one detective control per layer. The instructor emphasizes that the diagram is a teaching model, not a real network map, and that assumptions must be verified before being trusted.",
    "يرسم المدرب عيادة أسنان خيالية على السبورة: حاسوب الاستقبال، وخادم المواعيد، وموجه Wi-Fi، وجهاز الدفع، وسجلات المرضى، وحسابات البريد. وفي عشر دقائق يسمّي الصف كل أصل، ويحدد هدف CIA الأساسي، ويحدد تهديدين وثغرتين، ويضع ضابطًا وقائيًا وآخر كاشفًا على الأقل لكل طبقة. ويؤكد المدرب أن المخطط نموذج تعليمي لا خريطة شبكة حقيقية، وأن الافتراضات يجب التحقق منها قبل الثقة بها.",
  ),
  exercises: [
    {
      title: l("Asset and control inventory", "جرد الأصول والضوابط"),
      instructions: l(
        "Work in pairs. Choose a fictional small business (clinic, bakery, repair shop or online store). List eight assets, classify each as data, device, account, service or people, and write the primary CIA goal. Then add one threat, one vulnerability and one control for the three most important assets.",
        "اعملوا في أزواج. اختاروا شركة صغيرة خيالية (عيادة أو مخبز أو ورشة إصلاح أو متجر إلكتروني). اذكروا ثمانية أصول، وصنفوا كلًا منها كبيانات أو جهاز أو حساب أو خدمة أو أشخاص، واكتبوا هدف CIA الأساسي. ثم أضيفوا تهديدًا واحدًا وثغرة واحدة وضابطًا واحدًا لأهم ثلاثة أصول.",
      ),
      expected: l(
        "A completed table with eight assets, clear ownership, primary goals, and at least three threat/vulnerability/control rows. The reasoning should explain why each asset matters to the business.",
        "جدول مكتمل بثمانية أصول، وملكية واضحة، وأهداف أساسية، وثلاثة صفوف على الأقل للتهديد والثغرة والضابط. ويجب أن يشرح التعليل سبب أهمية كل أصل للعمل.",
      ),
    },
    {
      title: l("CIA impact triage", "فرز أثر CIA"),
      instructions: l(
        "For each event, decide which CIA goal is most directly affected and name one control that would reduce the impact: (1) a public website is unavailable for six hours; (2) an attacker changes a vaccination record; (3) a backup tape is stolen; (4) an employee shares a password with a colleague.",
        "لكل حدث، حدد هدف CIA الأكثر تأثرًا مباشرة واذكر ضابطًا واحدًا يقلل الأثر: (1) موقع عام غير متاح ست ساعات؛ (2) مهاجم يغيّر سجل تطعيم؛ (3) سرقة شريط نسخة احتياطية؛ (4) موظف يشارك كلمة مروره مع زميل.",
      ),
      expected: l(
        "Availability with DDoS protection or redundancy; integrity with audit logs and change control; confidentiality with encryption and physical access control; confidentiality and accountability with unique accounts, MFA and policy.",
        "التوافر مع الحماية من حجب الخدمة أو التكرار؛ السلامة مع سجلات التدقيق وضبط التغيير؛ السرية مع التشفير والتحكم في الوصول المادي؛ السرية والمساءلة مع الحسابات الفريدة والمصادقة متعددة العوامل والسياسة.",
      ),
    },
  ],
  expectedResults: l(
    "By the end of the session, students can explain the CIA Triad in their own words, distinguish assets, threats, vulnerabilities, exploits, risks and controls, identify preventive and detective controls, and produce a basic asset-and-control table for a fictional organization. They can also describe at least four career paths and the shared foundation behind them.",
    "بنهاية الجلسة، يستطيع الطلاب شرح مثلث CIA بكلماتهم، والتمييز بين الأصول والتهديدات والثغرات والاستغلالات والمخاطر والضوابط، وتحديد الضوابط الوقائية والكاشفة، وإنتاج جدول أساسي للأصول والضوابط لمؤسسة خيالية. ويستطيعون أيضًا وصف أربعة مسارات مهنية على الأقل والأساس المشترك بينها.",
  ),
  commonMistakes: [
    l(
      "Treating cybersecurity as a product to buy rather than a risk-management process that combines people, process and technology.",
      "التعامل مع الأمن السيبراني كمنتج يُشترى بدلًا من عملية لإدارة المخاطر تجمع الأشخاص والعمليات والتقنية.",
    ),
    l(
      "Confusing a threat with a vulnerability. A threat is a potential cause of harm; a vulnerability is a weakness that may be exploited.",
      "الخلط بين التهديد والثغرة. فالتهديد سبب محتمل للضرر؛ والثغرة ضعف قد يُستغل.",
    ),
    l(
      "Believing that a single strong control is enough. Defense in depth assumes that controls can fail.",
      "الاعتقاد بأن ضابطًا واحدًا قويًا يكفي. فالدفاع المتعمق يفترض أن الضوابط قد تفشل.",
    ),
    l(
      "Giving everyone administrator access because it is convenient. Least privilege reduces both accidental damage and attacker movement.",
      "منح الجميع صلاحيات المسؤول لأن ذلك مريح. فأقل امتياز يقلل الضرر العرضي وحركة المهاجم.",
    ),
    l(
      "Writing a risk assessment without documenting assumptions. A score without context cannot be defended or compared.",
      "كتابة تقييم مخاطر دون توثيق الافتراضات. فالدرجة بلا سياق لا يمكن الدفاع عنها أو مقارنتها.",
    ),
  ],
  bestPractices: [
    l(
      "Inventory assets and assign an owner before choosing controls.",
      "اجرد الأصول وحدد مالكًا لها قبل اختيار الضوابط.",
    ),
    l(
      "Map each control to a risk and a CIA goal so you can explain why it exists.",
      "اربط كل ضابط بخطر وهدف CIA لتستطيع شرح سبب وجوده.",
    ),
    l(
      "Use multiple independent layers and test them regularly.",
      "استخدم طبقات متعددة مستقلة واختبرها بانتظام.",
    ),
    l(
      "Apply least privilege and unique accounts; never share administrator credentials.",
      "طبّق أقل امتياز والحسابات الفريدة؛ ولا تشارك بيانات اعتماد المسؤول أبدًا.",
    ),
    l(
      "Keep tested backups offline or immutable, and verify restoration.",
      "احتفظ بنسخ احتياطية مختبرة دون اتصال أو غير قابلة للتغيير، وتحقق من الاستعادة.",
    ),
    l(
      "Write down assumptions, decisions and residual risk so the organization can review them.",
      "وثّق الافتراضات والقرارات والخطر المتبقي لتتمكن المؤسسة من مراجعتها.",
    ),
  ],
  keyTakeaways: [
    l(
      "Cybersecurity protects systems, networks, applications, data and people by managing risk, not by achieving perfect prevention.",
      "يحمي الأمن السيبراني الأنظمة والشبكات والتطبيقات والبيانات والأشخاص عبر إدارة المخاطر، لا عبر تحقيق منع كامل.",
    ),
    l(
      "Confidentiality, integrity and availability are the three core security goals; authenticity, accountability, privacy and resilience extend them.",
      "السرية والسلامة والتوافر هي الأهداف الأمنية الثلاثة الأساسية؛ وتوسعها الأصالة والمساءلة والخصوصية والمرونة.",
    ),
    l(
      "Assets are what you protect; threats and vulnerabilities create risk; controls reduce likelihood or impact.",
      "الأصول هي ما تحميه؛ والتهديدات والثغرات تنشئ المخاطر؛ والضوابط تقلل الاحتمال أو الأثر.",
    ),
    l(
      "Defense in depth uses independent layers so that one failure does not compromise everything.",
      "يستخدم الدفاع المتعمق طبقات مستقلة بحيث لا يخترق إخفاق واحد كل شيء.",
    ),
    l(
      "Security architecture defines trust boundaries, zones and least-privilege paths; Zero Trust verifies every request.",
      "تحدد الهندسة الأمنية حدود الثقة والمناطق ومسارات أقل امتياز؛ وتتحقق الثقة الصفرية من كل طلب.",
    ),
    l(
      "Every specialization shares the same foundation: systems, networks, risk, communication and ethics.",
      "تشترك كل التخصصات في الأساس نفسه: الأنظمة والشبكات والمخاطر والتواصل والأخلاقيات.",
    ),
  ],
  lab: {
    title: l("Lab 1 — CIA triad and risk register", "المختبر 1 — مثلث CIA وسجل المخاطر"),
    scenario: l(
      "A fictional dental clinic has six staff, one reception laptop, one appointment server, a Wi-Fi router, a payment terminal, patient records, email accounts and a cloud backup. The owner wants a one-page security picture and a prioritized risk register before buying any new tools.",
      "لدى عيادة أسنان خيالية ستة موظفين، وحاسوب استقبال واحد، وخادم مواعيد، وموجه Wi-Fi، وجهاز دفع، وسجلات مرضى، وحسابات بريد، ونسخة احتياطية سحابية. ويريد المالك صورة أمنية من صفحة واحدة وسجل مخاطر مرتبًا حسب الأولوية قبل شراء أي أدوات جديدة.",
    ),
    safety: l(
      "This is a paper-based exercise using a fictional organization. Do not inspect, scan or test any real clinic, network or account. Do not include real patient data. Keep all examples fictional and anonymized.",
      "هذا تمرين ورقي لمؤسسة خيالية. لا تفحص أو تمسح أو تختبر أي عيادة أو شبكة أو حساب حقيقي. لا تُدرج بيانات مرضى حقيقية. أبقِ كل الأمثلة خيالية ومجهولة الهوية.",
    ),
    steps: [
      l("List at least eight assets from the scenario.", "اذكر ثمانية أصول على الأقل من السيناريو."),
      l("Assign an owner and a primary CIA goal to each asset.", "حدد مالكًا وهدف CIA أساسيًا لكل أصل."),
      l("Identify at least five threats and five vulnerabilities.", "حدد خمسة تهديدات وخمس ثغرات على الأقل."),
      l("Build a risk register with likelihood, impact and score.", "ابنِ سجل مخاطر بالاحتمال والأثر والدرجة."),
      l("Choose a treatment and at least one control for each risk.", "اختر معالجة وضابطًا واحدًا على الأقل لكل خطر."),
      l("Record residual risk, an owner and a review date.", "سجّل الخطر المتبقي ومالكًا وتاريخ مراجعة."),
      l("Produce a one-page register and a short recommendation.", "أنتج سجلًا من صفحة واحدة وتوصية قصيرة."),
    ],
    expected: l(
      "A one-page asset table and a risk register with at least five scored risks, a treatment decision, controls, residual risk, owners, review dates, and a short recommendation that prioritizes the appointment server and patient records.",
      "جدول أصول من صفحة واحدة وسجل مخاطر بخمسة مخاطر مسجلة على الأقل، وقرار معالجة وضوابط وخطر متبقٍ ومالكين وتواريخ مراجعة، مع توصية قصيرة تعطي الأولوية لخادم المواعيد وسجلات المرضى.",
    ),
    tool: "cia",
    objectives: [
      l("Identify and classify assets in a small organization.", "تحديد أصول مؤسسة صغيرة وتصنيفها."),
      l("Distinguish threats, vulnerabilities and risks.", "التمييز بين التهديدات والثغرات والمخاطر."),
      l("Build a risk register with likelihood, impact and a consistent score.", "بناء سجل مخاطر بالاحتمال والأثر ودرجة متسقة."),
      l("Map controls to CIA goals and control types.", "ربط الضوابط بأهداف CIA وأنواع الضوابط."),
      l("Choose and justify risk treatments, including residual risk.", "اختيار معالجات المخاطر وتبريرها، بما فيها الخطر المتبقي."),
      l("Write a clear, prioritized security recommendation.", "كتابة توصية أمنية واضحة ومرتبة حسب الأولوية."),
    ],
    prerequisites: [
      l("Session 1 theory: CIA Triad, assets, risk and controls.", "نظرية الجلسة 1: مثلث CIA والأصول والمخاطر والضوابط."),
      l("Ability to use a text editor or spreadsheet.", "القدرة على استخدام محرر نصوص أو جدول بيانات."),
    ],
    environment: l(
      "No virtual machines or network access are required. Use a text editor, spreadsheet or paper. The companion CIA classifier below is optional practice.",
      "لا تُشترط أجهزة افتراضية أو اتصال بالشبكة. استخدم محرر نصوص أو جدول بيانات أو ورقًا. ومصنف CIA أدناه تدريب اختياري.",
    ),
    tools: [
      l("Text editor or spreadsheet", "محرر نصوص أو جدول بيانات"),
      l("Companion CIA classifier", "مصنف CIA المساند"),
      l("Timer for the 20-minute exercise", "مؤقت لتمرين العشرين دقيقة"),
    ],
    authorization: l(
      "Scope: one fictional clinic and fictional data only. No real systems, no scanning, no credential use, no patient information. Stop if you are unsure whether an action is authorized.",
      "النطاق: عيادة خيالية واحدة وبيانات خيالية فقط. لا أنظمة حقيقية، ولا مسح، ولا استخدام بيانات اعتماد، ولا معلومات مرضى. توقف إذا لم تكن متأكدًا من تصريح الإجراء.",
    ),
    detailedSteps: [
      {
        title: l("Create the asset table", "أنشئ جدول الأصول"),
        explanation: l(
          "Open a spreadsheet or text file and create columns for asset, type, owner, primary CIA goal and criticality (high, medium, low).",
          "افتح جدول بيانات أو ملف نص وأنشئ أعمدة للأصل والنوع والمالك وهدف CIA الأساسي والأهمية (عالية، متوسطة، منخفضة).",
        ),
        expected: l("A table with columns ready for at least eight rows.", "جدول بأعمدة جاهزة لثمانية صفوف على الأقل."),
      },
      {
        title: l("Add the eight assets", "أضف الأصول الثمانية"),
        explanation: l(
          "Add the reception laptop, appointment server, Wi-Fi router, payment terminal, patient records, email accounts, cloud backup and staff knowledge. Classify each one.",
          "أضف حاسوب الاستقبال، وخادم المواعيد، وموجه Wi-Fi، وجهاز الدفع، وسجلات المرضى، وحسابات البريد، والنسخة الاحتياطية السحابية، ومعرفة الموظفين. وصنف كلًا منها.",
        ),
        expected: l("Eight rows with a type, owner and primary goal.", "ثمانية صفوف بنوع ومالك وهدف أساسي."),
      },
      {
        title: l("Identify threats and vulnerabilities", "حدد التهديدات والثغرات"),
        explanation: l(
          "For each high-criticality asset, write one threat (who or what could cause harm) and one vulnerability (what weakness could be exploited). Do not confuse the two.",
          "لكل أصل عالي الأهمية، اكتب تهديدًا واحدًا (من أو ما الذي قد يسبب الضرر) وثغرة واحدة (أي ضعف قد يُستغل). لا تخلط بينهما.",
        ),
        expected: l("At least three threat/vulnerability pairs with clear reasoning.", "ثلاثة أزواج تهديد/ثغرة على الأقل مع تعليل واضح."),
      },
      {
        title: l("Build the risk register", "ابنِ سجل المخاطر"),
        explanation: l(
          "Create a register with columns for risk ID, asset, threat, vulnerability, likelihood (1–5), impact (1–5), score, treatment, control, residual risk, owner and review date. Keep the asset table as the first sheet and the register as the second.",
          "أنشئ سجلًا بأعمدة لمعرّف الخطر والأصل والتهديد والثغرة والاحتمال (1–5) والأثر (1–5) والدرجة والمعالجة والضابط والخطر المتبقي والمالك وتاريخ المراجعة. واحفظ جدول الأصول في الورقة الأولى والسجل في الثانية.",
        ),
        expected: l("A register with twelve columns and one header row ready for at least five risks.", "سجل باثني عشر عمودًا وصف ترويسة جاهز لخمسة مخاطر على الأقل."),
      },
      {
        title: l("Write and score five risks", "اكتب خمسة مخاطر وسجّلها"),
        explanation: l(
          "Use the form: 'If [threat] exploits [vulnerability], [asset] may suffer [impact].' Assign likelihood and impact from 1 to 5, multiply them for the score, and state the assumption behind each number.",
          "استخدم الصيغة: 'إذا استغل [تهديد] [ثغرة]، فقد يتعرض [أصل] لـ[أثر].' وأعطِ الاحتمال والأثر درجة من 1 إلى 5، واضربهما للحصول على الدرجة، واذكر الافتراض وراء كل رقم.",
        ),
        expected: l("Five risk statements with scores and a stated assumption for each.", "خمسة بيانات خطر بدرجات وافتراض مذكور لكل منها."),
      },
      {
        title: l("Choose treatments and controls", "اختر المعالجات والضوابط"),
        explanation: l(
          "For each risk, choose mitigate, avoid, transfer or accept. Select one preventive and one detective control for the top two risks, and explain which CIA goal each control supports. Avoid generic answers such as 'buy a firewall'.",
          "لكل خطر، اختر التخفيف أو التجنب أو النقل أو القبول. واختر ضابطًا وقائيًا وآخر كاشفًا لأعلى خطرين، واشرح هدف CIA الذي يدعمه كل ضابط. وتجنب الإجابات العامة مثل 'اشترِ جدارًا ناريًا'.",
        ),
        expected: l("A treatment decision per risk and four specific controls for the top two risks.", "قرار معالجة لكل خطر وأربعة ضوابط محددة لأعلى خطرين."),
      },
      {
        title: l("Record residual risk and ownership", "سجّل الخطر المتبقي والملكية"),
        explanation: l(
          "After the control, state what risk remains, who accepts it, and when it will be reviewed. A risk with no owner and no review date is an unresolved finding, not a managed risk.",
          "بعد الضابط، اذكر الخطر المتبقي ومن يقبله ومتى ستتم مراجعته. فالخطر بلا مالك وبلا تاريخ مراجعة ملاحظة غير محلولة لا خطرًا مُدارًا.",
        ),
        expected: l("A named owner, a residual-risk statement and a review date for every row.", "مالك مسمى وبيان خطر متبقٍ وتاريخ مراجعة لكل صف."),
      },
      {
        title: l("Write the recommendation", "اكتب التوصية"),
        explanation: l(
          "Write five sentences for the owner: the two most important assets, the two priority risks, the first three actions, the accepted residual risk and what will be reviewed next month.",
          "اكتب خمس جمل للمالك: أهم أصلين، وأولويّتا الخطر، وأول ثلاثة إجراءات، والخطر المتبقي المقبول، وما سيُراجع الشهر القادم.",
        ),
        expected: l("A short, non-technical recommendation that a business owner can act on.", "توصية قصيرة غير تقنية يستطيع صاحب العمل تنفيذها."),
      },
    ],
    troubleshooting: [
      {
        problem: l("The asset list is too broad (for example 'all data').", "قائمة الأصول واسعة جدًا (مثل 'كل البيانات')."),
        fix: l("Split it into specific stores: patient records, appointment database, billing exports.", "قسّمها إلى مخازن محددة: سجلات المرضى، قاعدة بيانات المواعيد، صادرات الفواتير."),
      },
      {
        problem: l("Threats and vulnerabilities are mixed together.", "التهديدات والثغرات مختلطة."),
        fix: l("Ask 'who or what could cause harm?' for the threat, and 'what weakness makes it easier?' for the vulnerability.", "اسأل 'من أو ما الذي قد يسبب الضرر؟' للتهديد، و'أي ضعف يسهّله؟' للثغرة."),
      },
      {
        problem: l("The recommendation is a tool shopping list.", "التوصية قائمة تسوق أدوات."),
        fix: l("Start from the risk and the business impact, then choose the simplest control that reduces it.", "ابدأ من الخطر وأثر العمل، ثم اختر أبسط ضابط يقلله."),
      },
    ],
    deliverables: [
      l("An asset table with at least eight assets, owners, CIA goals and criticality.", "جدول أصول بثمانية أصول على الأقل ومالكين وأهداف CIA وأهمية."),
      l("A risk register with at least five scored risks and the assumption behind each score.", "سجل مخاطر بخمسة مخاطر مسجلة على الأقل والافتراض وراء كل درجة."),
      l("A treatment decision, at least one control and a residual-risk statement per risk.", "قرار معالجة وضابط واحد على الأقل وبيان خطر متبقٍ لكل خطر."),
      l("A named owner and a review date for every risk.", "مالك مسمى وتاريخ مراجعة لكل خطر."),
      l("A five-sentence recommendation for the owner.", "توصية من خمس جمل للمالك."),
    ],
    rubric: [
      { criterion: l("Asset identification and classification", "تحديد الأصول وتصنيفها"), weight: 20 },
      { criterion: l("Risk register completeness and consistent scoring", "اكتمال سجل المخاطر واتساق التسجيل"), weight: 25 },
      { criterion: l("Threat, vulnerability and impact reasoning", "تعليل التهديد والثغرة والأثر"), weight: 20 },
      { criterion: l("Control selection, treatment and CIA mapping", "اختيار الضوابط والمعالجة وربطها بـCIA"), weight: 20 },
      { criterion: l("Residual risk, recommendation and clarity", "الخطر المتبقي والتوصية والوضوح"), weight: 15 },
    ],
  },
  quiz: [
    {
      q: l("Which statement best defines cybersecurity?", "أي عبارة تعرّف الأمن السيبراني بشكل أفضل؟"),
      options: [
        l("Installing antivirus software on every computer", "تثبيت برنامج مكافحة فيروسات على كل حاسوب"),
        l("Protecting systems, networks, applications, data and people from digital attacks", "حماية الأنظمة والشبكات والتطبيقات والبيانات والأشخاص من الهجمات الرقمية"),
        l("Writing programs that block every attack", "كتابة برامج تمنع كل هجوم"),
        l("Protecting only physical buildings and locks", "حماية المباني والأقفال المادية فقط"),
      ],
      answer: 1,
      why: l(
        "Cybersecurity combines technology, processes and people to protect digital assets and reduce risk; it is broader than antivirus or physical security.",
        "يجمع الأمن السيبراني التقنية والعمليات والأشخاص لحماية الأصول الرقمية وتقليل المخاطر؛ وهو أوسع من مكافحة الفيروسات أو الأمن المادي.",
      ),
    },
    {
      q: l("A stolen unencrypted laptop primarily affects which CIA goal?", "سرقة حاسوب محمول غير مشفر تؤثر أساسًا في أي هدف من CIA؟"),
      options: [l("Availability", "التوافر"), l("Integrity", "السلامة"), l("Confidentiality", "السرية"), l("Accountability", "المساءلة")],
      answer: 2,
      why: l(
        "The attacker may read the data on the laptop, so unauthorized access to information is the primary confidentiality failure.",
        "قد يقرأ المهاجم البيانات على الحاسوب، لذا فإن الوصول غير المصرح إلى المعلومات هو إخفاق السرية الأساسي.",
      ),
    },
    {
      q: l("Ransomware encrypts patient records and the hospital cannot access them. Which goal is most directly affected?", "برمجية فدية تشفر سجلات المرضى ولا يستطيع المستشفى الوصول إليها. أي هدف يتأثر مباشرة؟"),
      options: [l("Confidentiality", "السرية"), l("Integrity", "السلامة"), l("Availability", "التوافر"), l("Non-repudiation", "عدم الإنكار")],
      answer: 2,
      why: l(
        "The data still exists but authorized users cannot reach it, which is an availability failure. Confidentiality may also be affected if data was stolen.",
        "البيانات ما زالت موجودة لكن المستخدمين المصرح لهم لا يستطيعون الوصول إليها، وهذا إخفاق توافر. وقد تتأثر السرية أيضًا إذا سُرقت البيانات.",
      ),
    },
    {
      q: l("An attacker changes the amount on an invoice before payment. Which goal is affected?", "يغيّر مهاجم مبلغ فاتورة قبل الدفع. أي هدف يتأثر؟"),
      options: [l("Integrity", "السلامة"), l("Availability", "التوافر"), l("Confidentiality", "السرية"), l("Privacy", "الخصوصية")],
      answer: 0,
      why: l(
        "The invoice data was altered improperly, so its accuracy and integrity are compromised. Payment controls and reconciliation should detect the change.",
        "عُدّلت بيانات الفاتورة بشكل غير مشروع، لذا تتضرر دقتها وسلامتها. ويجب أن تكشف ضوابط الدفع والمطابقة التغيير.",
      ),
    },
    {
      q: l("Which item is a vulnerability?", "أي عنصر يُعدّ ثغرة؟"),
      options: [l("A criminal ransomware group", "مجموعة إجرامية تستخدم برمجيات الفدية"), l("An unpatched web server", "خادم ويب غير محدّث"), l("A phishing email", "رسالة تصيّد"), l("A power outage", "انقطاع الكهرباء")],
      answer: 1,
      why: l(
        "The missing patch is a weakness that can be exploited. The criminal group is a threat, the email is a delivery method, and the outage is an event.",
        "التحديث المفقود ضعف يمكن استغلاله. فالمجموعة الإجرامية تهديد، والبريد أسلوب توصيل، والانقطاع حدث.",
      ),
    },
    {
      q: l("Which item is a threat?", "أي عنصر يُعدّ تهديدًا؟"),
      options: [l("A missing security patch", "تحديث أمني مفقود"), l("A weak password", "كلمة مرور ضعيفة"), l("A ransomware group", "مجموعة برمجيات فدية"), l("An open network port", "منفذ شبكة مفتوح")],
      answer: 2,
      why: l(
        "A threat is a potential cause of harm, such as an attacker group. The other options are weaknesses or exposed surfaces.",
        "التهديد سبب محتمل للضرر مثل مجموعة مهاجمين. والخيارات الأخرى نقاط ضعف أو أسطح مكشوفة.",
      ),
    },
    {
      q: l("Risk is best described as:", "يُوصف الخطر بشكل أفضل بأنه:"),
      options: [
        l("A weakness in software", "ضعف في البرمجيات"),
        l("The likelihood and impact of a threat exploiting a vulnerability", "احتمال أن يستغل تهديد ثغرة ما وأثر ذلك"),
        l("A security tool", "أداة أمنية"),
        l("A type of malware", "نوع من البرمجيات الخبيثة"),
      ],
      answer: 1,
      why: l(
        "Risk combines the probability of an event with the harm it would cause. A vulnerability alone is not a risk until a relevant threat and impact are considered.",
        "يجمع الخطر بين احتمال الحدث والضرر الذي قد يسببه. والثغرة وحدها ليست خطرًا حتى يُنظر في تهديد ذي صلة وأثر.",
      ),
    },
    {
      q: l("Which control is preventive?", "أي ضابط يُعدّ وقائيًا؟"),
      options: [l("An IDS alert", "تنبيه IDS"), l("Multi-factor authentication", "المصادقة متعددة العوامل"), l("Restoring from backup", "الاستعادة من نسخة احتياطية"), l("Reviewing logs after an incident", "مراجعة السجلات بعد حادث")],
      answer: 1,
      why: l(
        "MFA stops unauthorized access before it succeeds. IDS is detective, backup restore is corrective, and after-the-fact log review is investigative.",
        "توقف المصادقة متعددة العوامل الوصول غير المصرح قبل نجاحه. وIDS كاشف، واستعادة النسخة الاحتياطية تصحيحية، ومراجعة السجلات بعد الحادث تحقيقية.",
      ),
    },
    {
      q: l("Which control is detective?", "أي ضابط يُعدّ كاشفًا؟"),
      options: [l("A firewall rule", "قاعدة جدار ناري"), l("Security awareness training", "تدريب التوعية الأمنية"), l("An IDS alert", "تنبيه IDS"), l("Disk encryption", "تشفير القرص")],
      answer: 2,
      why: l(
        "An IDS detects and reports suspicious activity. Firewall rules and encryption are preventive; training is administrative and preventive.",
        "يكتشف IDS النشاط المشبوه ويبلغ عنه. وقواعد الجدار الناري والتشفير وقائية؛ والتدريب إداري ووقائي.",
      ),
    },
    {
      q: l("Defense in depth means:", "يعني الدفاع المتعمق:"),
      options: [
        l("Relying on one very strong firewall", "الاعتماد على جدار ناري واحد قوي جدًا"),
        l("Using multiple independent layers of controls", "استخدام طبقات متعددة مستقلة من الضوابط"),
        l("Hiding the server from users", "إخفاء الخادم عن المستخدمين"),
        l("Disabling logs to reduce noise", "تعطيل السجلات لتقليل الضجيج"),
      ],
      answer: 1,
      why: l(
        "Multiple layers ensure that one failed or bypassed control does not expose everything. Independence between layers is essential.",
        "تضمن الطبقات المتعددة أن ضابطًا فاشلًا أو متجاوزًا لا يكشف كل شيء. واستقلال الطبقات ضروري.",
      ),
    },
    {
      q: l("Least privilege means:", "يعني أقل امتياز:"),
      options: [
        l("Giving every administrator full access", "منح كل مسؤول وصولًا كاملًا"),
        l("Granting only the access needed for a task", "منح الوصول اللازم للمهمة فقط"),
        l("Sharing passwords with the team", "مشاركة كلمات المرور مع الفريق"),
        l("Removing all security controls", "إزالة كل الضوابط الأمنية"),
      ],
      answer: 1,
      why: l(
        "Least privilege limits access to what is required, reducing accidental damage and the impact of a compromised account.",
        "يقيّد أقل امتياز الوصول إلى ما هو مطلوب، مما يقلل الضرر العرضي وأثر اختراق الحساب.",
      ),
    },
    {
      q: l("Which role most directly monitors alerts and triages incidents?", "أي دور يراقب التنبيهات ويفرز الحوادث مباشرة؟"),
      options: [l("SOC analyst", "محلل SOC"), l("GRC auditor", "مدقق GRC"), l("Web designer", "مصمم ويب"), l("Network cabler", "فني كابلات شبكة")],
      answer: 0,
      why: l(
        "SOC analysts monitor security events, validate alerts and start incident response. GRC focuses on risk, policy and compliance.",
        "يراقب محللو SOC الأحداث الأمنية ويتحققون من التنبيهات ويبدأون الاستجابة. وتركز GRC على المخاطر والسياسات والامتثال.",
      ),
    },
  ],
  trueFalse: [
    {
      q: l("Cybersecurity is only the security team's responsibility.", "الأمن السيبراني مسؤولية فريق الأمن فقط."),
      answer: false,
      why: l(
        "Everyone who uses systems affects risk. Users report phishing, developers write secure code, and managers approve access and risk decisions.",
        "كل من يستخدم الأنظمة يؤثر في المخاطر. فالمستخدمون يبلغون عن التصيّد، والمطورون يكتبون شيفرة آمنة، والمديرون يوافقون على الوصول وقرارات المخاطر.",
      ),
    },
    {
      q: l("A threat and a vulnerability are the same thing.", "التهديد والثغرة شيء واحد."),
      answer: false,
      why: l(
        "A threat is a potential cause of harm; a vulnerability is a weakness that may be exploited. Risk connects them.",
        "التهديد سبب محتمل للضرر؛ والثغرة ضعف قد يُستغل. والخطر يربط بينهما.",
      ),
    },
    {
      q: l("Encryption primarily supports confidentiality.", "يدعم التشفير السرية أساسًا."),
      answer: true,
      why: l(
        "Encryption makes data unreadable without the key, protecting confidentiality. It can also support integrity and authenticity when combined with signatures.",
        "يجعل التشفير البيانات غير مقروءة دون المفتاح، مما يحمي السرية. ويمكن أن يدعم السلامة والأصالة عند دمجه مع التوقيعات.",
      ),
    },
    {
      q: l("Defense in depth depends on a single control.", "يعتمد الدفاع المتعمق على ضابط واحد."),
      answer: false,
      why: l(
        "Defense in depth deliberately uses multiple independent layers so that one failure does not compromise everything.",
        "يستخدم الدفاع المتعمق عمدًا طبقات متعددة مستقلة بحيث لا يخترق إخفاق واحد كل شيء.",
      ),
    },
    {
      q: l("Availability means authorized users can access systems and data when needed.", "يعني التوافر أن المستخدمين المصرح لهم يستطيعون الوصول إلى الأنظمة والبيانات عند الحاجة."),
      answer: true,
      why: l(
        "Availability is about timely and reliable access for authorized users, not about making data public.",
        "يتعلق التوافر بالوصول الموثوق في الوقت المناسب للمستخدمين المصرح لهم، وليس بجعل البيانات عامة.",
      ),
    },
  ],
  classification: [
    {
      prompt: l("Classify each item as a device, data, account or service.", "صنّف كل عنصر كجهاز أو بيانات أو حساب أو خدمة."),
      categories: [l("Device", "جهاز"), l("Data", "بيانات"), l("Account", "حساب"), l("Service", "خدمة")],
      items: [
        { text: l("Reception laptop", "حاسوب الاستقبال"), answer: 0 },
        { text: l("Patient record", "سجل المريض"), answer: 1 },
        { text: l("Payroll database", "قاعدة بيانات الرواتب"), answer: 1 },
        { text: l("Email service", "خدمة البريد الإلكتروني"), answer: 3 },
      ],
      why: l(
        "Assets are classified by what they are, not by where they are stored. A laptop is a device, records and databases are data, and email is a service.",
        "تُصنف الأصول بحسب ماهيتها لا بحسب مكان تخزينها. فالحاسوب جهاز، والسجلات وقواعد البيانات بيانات، والبريد خدمة.",
      ),
    },
    {
      prompt: l("Which CIA goal is most directly affected by each event?", "أي هدف من CIA يتأثر مباشرة بكل حدث؟"),
      categories: [l("Confidentiality", "السرية"), l("Integrity", "السلامة"), l("Availability", "التوافر")],
      items: [
        { text: l("A backup disk is stolen", "سرقة قرص نسخة احتياطية"), answer: 0 },
        { text: l("An invoice amount is changed", "تغيير مبلغ فاتورة"), answer: 1 },
        { text: l("A DDoS attack takes the store offline", "هجوم حجب خدمة يُخرج المتجر عن الخدمة"), answer: 2 },
        { text: l("A database is published on the internet", "نشر قاعدة بيانات على الإنترنت"), answer: 0 },
      ],
      why: l(
        "Theft and publication expose information (confidentiality), unauthorized changes harm accuracy (integrity), and service loss harms access (availability).",
        "تكشف السرقة والنشر المعلومات (السرية)، وتضر التغييرات غير المصرح بها بالدقة (السلامة)، ويفقد انقطاع الخدمة الوصول (التوافر).",
      ),
    },
    {
      prompt: l("Classify each control as preventive, detective, corrective or administrative.", "صنّف كل ضابط كوقائي أو كاشف أو تصحيحي أو إداري."),
      categories: [l("Preventive", "وقائي"), l("Detective", "كاشف"), l("Corrective", "تصحيحي"), l("Administrative", "إداري")],
      items: [
        { text: l("Multi-factor authentication", "المصادقة متعددة العوامل"), answer: 0 },
        { text: l("Intrusion detection alert", "تنبيه كشف التسلل"), answer: 1 },
        { text: l("Restore from a tested backup", "الاستعادة من نسخة احتياطية مختبرة"), answer: 2 },
        { text: l("Acceptable-use policy", "سياسة الاستخدام المقبول"), answer: 3 },
      ],
      why: l(
        "MFA prevents access, IDS detects activity, restoration corrects damage, and a policy is an administrative control.",
        "تمنع المصادقة متعددة العوامل الوصول، ويكتشف IDS النشاط، وتصحح الاستعادة الضرر، والسياسة ضابط إداري.",
      ),
    },
    {
      prompt: l("Match each role to its main responsibility.", "طابق كل دور مع مسؤوليته الأساسية."),
      categories: [l("Monitor and respond", "المراقبة والاستجابة"), l("Authorized testing", "الاختبار المصرح به"), l("Risk and compliance", "المخاطر والامتثال"), l("Secure software", "البرمجيات الآمنة")],
      items: [
        { text: l("SOC analyst", "محلل SOC"), answer: 0 },
        { text: l("Penetration tester", "مختبر اختراق"), answer: 1 },
        { text: l("GRC analyst", "محلل GRC"), answer: 2 },
        { text: l("Application security engineer", "مهندس أمن التطبيقات"), answer: 3 },
      ],
      why: l(
        "Each specialization applies the same foundation to a different problem: detection, authorized offense, governance or secure development.",
        "يطبق كل تخصص الأساس نفسه على مشكلة مختلفة: الاكتشاف أو الهجوم المصرح أو الحوكمة أو التطوير الآمن.",
      ),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A clinic employee receives an email that appears to be a patient invoice. The attachment installs ransomware. The appointment server becomes unavailable and attackers claim they copied patient data.",
        "يتلقى موظف في عيادة بريدًا يبدو أنه فاتورة مريض. يثبّت المرفق برمجية فدية. يصبح خادم المواعيد غير متاح ويدّعي المهاجمون أنهم نسخوا بيانات المرضى.",
      ),
      question: l("Which option best describes the threat, vulnerability and impact?", "أي خيار يصف التهديد والثغرة والأثر بشكل أفضل؟"),
      options: [
        l("Threat: missing patch; vulnerability: criminal group; impact: only integrity", "التهديد: تحديث مفقود؛ الثغرة: مجموعة إجرامية؛ الأثر: السلامة فقط"),
        l("Threat: criminal group; vulnerability: phishing susceptibility and unpatched system; impact: availability and confidentiality", "التهديد: مجموعة إجرامية؛ الثغرة: قابلية الموظف للتصيّد ونظام غير محدّث؛ الأثر: التوافر والسرية"),
        l("Threat: backup; vulnerability: patient record; impact: only privacy", "التهديد: نسخة احتياطية؛ الثغرة: سجل مريض؛ الأثر: الخصوصية فقط"),
        l("Threat: appointment server; vulnerability: email; impact: only availability", "التهديد: خادم المواعيد؛ الثغرة: البريد؛ الأثر: التوافر فقط"),
      ],
      answer: 1,
      why: l(
        "The criminal group is the threat, human susceptibility and missing patches are vulnerabilities, and the incident affects both access to systems and exposure of data.",
        "المجموعة الإجرامية هي التهديد، وقابلية الإنسان للتصيّد والتحديثات المفقودة ثغرات، ويؤثر الحادث في الوصول إلى الأنظمة وكشف البيانات معًا.",
      ),
    },
    {
      scenario: l(
        "An online store is hit by a large traffic flood during a promotion. The website becomes unavailable, but the database remains intact and no data is leaked.",
        "يتعرض متجر إلكتروني لسيل زيارات كبير أثناء عرض ترويجي. يصبح الموقع غير متاح، لكن قاعدة البيانات سليمة ولا تُكشف بيانات.",
      ),
      question: l("Which control is most directly relevant to this incident?", "أي ضابط هو الأكثر ارتباطًا بهذا الحادث؟"),
      options: [
        l("DDoS mitigation and capacity scaling", "التخفيف من حجب الخدمة وتوسيع السعة"),
        l("Disk encryption", "تشفير القرص"),
        l("Password manager", "مدير كلمات المرور"),
        l("Source-code review", "مراجعة الشيفرة المصدرية"),
      ],
      answer: 0,
      why: l(
        "The primary impact is availability from traffic volume. DDoS mitigation, rate limiting, caching and scaling address that risk directly.",
        "الأثر الأساسي هو التوافر بسبب حجم الزيارات. وتعالج الحماية من حجب الخدمة وتحديد المعدل والتخزين المؤقت والتوسع هذا الخطر مباشرة.",
      ),
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
      why: l(
        "The issue is authorized-looking misuse, so integrity and accountability controls are key: approval, separation of duties, immutable logs and reconciliation.",
        "المشكلة هي إساءة استخدام تبدو مصرحًا بها، لذا تكون ضوابط السلامة والمساءلة أساسية: الموافقة وفصل الواجبات والسجلات غير القابلة للتغيير والمطابقة.",
      ),
    },
  ],
  practicalChecks: [
    {
      task: l(
        "A clinic's appointment server, patient records and public website are all unavailable. Which asset should be restored first, and why?",
        "خادم مواعيد عيادة وسجلات مرضى وموقع عام كلها غير متاحة. أي أصل يجب استعادته أولًا، ولماذا؟",
      ),
      expected: l(
        "There is no universal answer; the decision depends on patient safety and business impact. A strong answer prioritizes the appointment server or patient records, explains the clinical impact, states assumptions, and notes that the website may be lower priority unless it supports emergency access.",
        "لا توجد إجابة عالمية؛ يعتمد القرار على سلامة المرضى وأثر العمل. والإجابة القوية تعطي الأولوية لخادم المواعيد أو سجلات المرضى، وتشرح الأثر السريري، وتذكر الافتراضات، وتلاحظ أن الموقع قد يكون أقل أولوية إلا إذا كان يدعم الوصول الطارئ.",
      ),
      hint: l("Start from patient safety, not from which system is easiest to restore.", "ابدأ من سلامة المرضى لا من النظام الأسهل استعادة."),
    },
    {
      task: l(
        "Map MFA, tested backups and an IDS to preventive, detective or corrective controls, and to the CIA goal each supports.",
        "اربط المصادقة متعددة العوامل والنسخ الاحتياطي المختبر وIDS بالضوابط الوقائية أو الكاشفة أو التصحيحية، وبهدف CIA الذي يدعمه كل منها.",
      ),
      expected: l(
        "MFA is preventive and supports confidentiality and authenticity. Tested backups are corrective and support availability and integrity. An IDS is detective and supports integrity, availability and accountability by revealing malicious activity.",
        "المصادقة متعددة العوامل وقائية وتدعم السرية والأصالة. والنسخ الاحتياطي المختبر تصحيحي ويدعم التوافر والسلامة. وIDS كاشف ويدعم السلامة والتوافر والمساءلة عبر كشف النشاط الخبيث.",
      ),
    },
  ],
  homework: {
    title: l("Asset, threat and control map for a small business", "خريطة الأصول والتهديدات والضوابط لشركة صغيرة"),
    tasks: [
      l(
        "Choose a fictional small business and describe it in three sentences.",
        "اختر شركة صغيرة خيالية وصفها في ثلاث جمل.",
      ),
      l(
        "List at least ten assets, with an owner and a primary CIA goal for each.",
        "اذكر عشرة أصول على الأقل، مع مالك وهدف CIA أساسي لكل منها.",
      ),
      l(
        "Identify four threats and four vulnerabilities, and write four risk statements with likelihood and impact scores.",
        "حدد أربعة تهديدات وأربع ثغرات، واكتب أربعة بيانات خطر بدرجات احتمال وأثر.",
      ),
      l(
        "Propose at least eight controls, classified by type and mapped to CIA.",
        "اقترح ثمانية ضوابط على الأقل، مصنفة حسب النوع ومرتبطة بـCIA.",
      ),
      l(
        "Write a one-page summary for the owner with the top three actions for the next 30 days.",
        "اكتب ملخصًا من صفحة واحدة للمالك يتضمن أهم ثلاثة إجراءات للثلاثين يومًا القادمة.",
      ),
    ],
    deliverable: l(
      "A one-page table plus a one-page summary. The table must show assets, owners, CIA goals, threats, vulnerabilities, risk scores and controls. The summary must be understandable to a non-technical owner.",
      "جدول من صفحة واحدة وملخص من صفحة واحدة. يجب أن يعرض الجدول الأصول والمالكين وأهداف CIA والتهديدات والثغرات ودرجات الخطر والضوابط. ويجب أن يكون الملخص مفهومًا لمالك غير تقني.",
    ),
    criteria: [
      l("At least ten assets with clear owners and CIA goals.", "عشرة أصول على الأقل بمالكين واضحين وأهداف CIA."),
      l("Threats, vulnerabilities and risks are correctly distinguished.", "التمييز الصحيح بين التهديدات والثغرات والمخاطر."),
      l("Controls are mapped to risk, type and CIA goal.", "ربط الضوابط بالخطر والنوع وهدف CIA."),
      l("The summary is concise, prioritized and actionable.", "الملخص موجز ومرتب حسب الأولوية وقابل للتنفيذ."),
      l("Assumptions and residual risk are stated.", "ذكر الافتراضات والخطر المتبقي."),
    ],
    challenge: l(
      "Add a simple 5×5 risk matrix and place each risk in a cell. Explain which risk you would accept, transfer, mitigate or avoid, and why.",
      "أضف مصفوفة مخاطر بسيطة 5×5 وضع كل خطر في خلية. واشرح أي خطر ستقبله أو تنقله أو تخففه أو تتجنبه، ولماذا.",
    ),
  },
  refs: [
    {
      title: "NIST Cybersecurity Framework 2.0",
      org: "NIST",
      url: "https://www.nist.gov/cyberframework",
      desc: l(
        "The official framework page; use it to see the Govern, Identify, Protect, Detect, Respond and Recover functions.",
        "الصفحة الرسمية للإطار؛ استخدمها للاطلاع على وظائف الحوكمة والتحديد والحماية والكشف والاستجابة والتعافي.",
      ),
    },
    {
      title: "NIST Computer Security Resource Center Glossary",
      org: "NIST",
      url: "https://csrc.nist.gov/glossary",
      desc: l(
        "Authoritative definitions of asset, threat, vulnerability, risk and related terms.",
        "تعريفات موثوقة للأصل والتهديد والثغرة والخطر والمصطلحات ذات الصلة.",
      ),
    },
    {
      title: "CISA Cybersecurity Best Practices",
      org: "CISA",
      url: "https://www.cisa.gov/topics/cybersecurity-best-practices",
      desc: l(
        "Practical guidance for organizations, including vulnerability management, phishing and incident response.",
        "إرشادات عملية للمؤسسات تشمل إدارة الثغرات والتصيّد والاستجابة للحوادث.",
      ),
    },
    {
      title: "NIST NICE Workforce Framework",
      org: "NIST",
      url: "https://www.nist.gov/itl/applied-cybersecurity/nice",
      desc: l(
        "A reference for cybersecurity roles, tasks and skills; useful for career planning.",
        "مرجع لأدوار الأمن السيبراني ومهامه ومهاراته؛ مفيد لتخطيط المسار المهني.",
      ),
    },
    {
      title: "OWASP Top 10",
      org: "OWASP",
      url: "https://owasp.org/Top10/",
      desc: l(
        "The current awareness standard for web application security risks; revisited in Session 11.",
        "المعيار التوعوي الحالي لمخاطر أمن تطبيقات الويب؛ يُعاد تناوله في الجلسة 11.",
      ),
    },
    {
      title: "MITRE ATT&CK",
      org: "MITRE",
      url: "https://attack.mitre.org/",
      desc: l(
        "A knowledge base of adversary tactics and techniques; use it later to connect threats to detection.",
        "قاعدة معرفية لتكتيكات المهاجمين وتقنياتهم؛ استخدمها لاحقًا لربط التهديدات بالكشف.",
      ),
    },
    {
      title: "CIS Critical Security Controls",
      org: "Center for Internet Security",
      url: "https://www.cisecurity.org/controls",
      desc: l(
        "Prioritized safeguards; the current version is CIS Controls v8.1.",
        "تدابير حماية مرتبة حسب الأولوية؛ الإصدار الحالي هو CIS Controls v8.1.",
      ),
    },
  ],
  terms: [
    {
      term: l("Cybersecurity", "الأمن السيبراني"),
      def: l("The practice of protecting systems, networks, applications, data and people from digital attacks.", "ممارسة حماية الأنظمة والشبكات والتطبيقات والبيانات والأشخاص من الهجمات الرقمية."),
      example: l("A clinic uses MFA, patching and backups to reduce digital risk.", "تستخدم عيادة المصادقة متعددة العوامل والتحديث والنسخ الاحتياطي لتقليل المخاطر الرقمية."),
    },
    {
      term: l("Information security", "أمن المعلومات"),
      def: l("Protecting information in any form, including paper, spoken and digital.", "حماية المعلومات بأي شكل، بما فيها الورقية والمنطوقة والرقمية."),
      example: l("Locking paper patient files is an information-security control.", "قفل ملفات المرضى الورقية ضابط أمن معلومات."),
    },
    {
      term: l("CIA Triad", "مثلث CIA"),
      def: l("The three core security goals: confidentiality, integrity and availability.", "الأهداف الأمنية الثلاثة الأساسية: السرية والسلامة والتوافر."),
      example: l("A stolen laptop affects confidentiality; ransomware affects availability.", "سرقة حاسوب تؤثر في السرية؛ وبرمجية الفدية تؤثر في التوافر."),
    },
    {
      term: l("Confidentiality", "السرية"),
      def: l("Only authorized people, devices or services can access information.", "لا يصل إلى المعلومات إلا الأشخاص أو الأجهزة أو الخدمات المصرح لها."),
      example: l("Encryption and access control protect patient records.", "يحمي التشفير والتحكم في الوصول سجلات المرضى."),
    },
    {
      term: l("Integrity", "السلامة"),
      def: l("Data is accurate, complete and has not been changed improperly.", "البيانات دقيقة وكاملة ولم تُغيّر بشكل غير مشروع."),
      example: l("Hashing and audit logs help detect unauthorized changes.", "تساعد التجزئة وسجلات التدقيق على كشف التغييرات غير المصرح بها."),
    },
    {
      term: l("Availability", "التوافر"),
      def: l("Authorized users can access systems and data when needed.", "يستطيع المستخدمون المصرح لهم الوصول إلى الأنظمة والبيانات عند الحاجة."),
      example: l("Backups and redundancy support availability.", "تدعم النسخ الاحتياطي والتكرار التوافر."),
    },
    {
      term: l("Asset", "الأصل"),
      def: l("Anything of value to the organization, such as data, devices, accounts, services or reputation.", "كل ما له قيمة للمؤسسة، مثل البيانات أو الأجهزة أو الحسابات أو الخدمات أو السمعة."),
      example: l("A payroll database is a high-value data asset.", "قاعدة بيانات الرواتب أصل بيانات عالي القيمة."),
    },
    {
      term: l("Threat", "التهديد"),
      def: l("A potential cause of harm, such as an attacker, group, event or failure.", "سبب محتمل للضرر، مثل مهاجم أو مجموعة أو حدث أو عطل."),
      example: l("A ransomware group is a threat.", "مجموعة برمجيات الفدية تهديد."),
    },
    {
      term: l("Vulnerability", "الثغرة"),
      def: l("A weakness that can be exploited.", "ضعف يمكن استغلاله."),
      example: l("An unpatched server is a vulnerability.", "الخادم غير المحدّث ثغرة."),
    },
    {
      term: l("Exploit", "الاستغلال"),
      def: l("A method or code that takes advantage of a vulnerability.", "أسلوب أو شيفرة تستفيد من ثغرة."),
      example: l("A malicious attachment can exploit an unpatched application.", "قد يستغل مرفق خبيث تطبيقًا غير محدّث."),
    },
    {
      term: l("Risk", "الخطر"),
      def: l("The likelihood and impact of a threat exploiting a vulnerability.", "احتمال أن يستغل تهديد ثغرة ما وأثر ذلك."),
      example: l("A public server with a known exploit is high risk.", "الخادم العام ذو الاستغلال المعروف عالي الخطر."),
    },
    {
      term: l("Security control", "الضابط الأمني"),
      def: l("A safeguard that reduces the likelihood or impact of an attack.", "إجراء حماية يقلل احتمال الهجوم أو أثره."),
      example: l("MFA is a preventive control.", "المصادقة متعددة العوامل ضابط وقائي."),
    },
    {
      term: l("Defense in depth", "الدفاع المتعمق"),
      def: l("Using multiple independent layers of controls so one failure does not compromise everything.", "استخدام طبقات متعددة مستقلة من الضوابط بحيث لا يخترق إخفاق واحد كل شيء."),
      example: l("MFA, patching, segmentation and backups form layers.", "تشكل المصادقة والتحديث والتقسيم والنسخ الاحتياطي طبقات."),
    },
    {
      term: l("Least privilege", "أقل امتياز"),
      def: l("Granting only the access needed to perform a task.", "منح الوصول اللازم لأداء المهمة فقط."),
      example: l("A help-desk account should not be a domain administrator.", "لا ينبغي أن يكون حساب الدعم مسؤول نطاق."),
    },
    {
      term: l("Attack surface", "سطح الهجوم"),
      def: l("All the points an attacker could try to use to enter or affect a system.", "كل النقاط التي قد يحاول المهاجم استخدامها للدخول إلى نظام أو التأثير فيه."),
      example: l("Every open port and public login page increases the attack surface.", "كل منفذ مفتوح وصفحة تسجيل دخول عامة تزيد سطح الهجوم."),
    },
    {
      term: l("Threat actor", "الفاعل المهدد"),
      def: l("A person or group that may carry out an attack.", "شخص أو مجموعة قد ينفذ هجومًا."),
      example: l("Nation-state groups, criminals and insiders are threat actors.", "مجموعات الدول والمجرمون والمخترقون الداخليون فاعلون مهددون."),
    },
    {
      term: l("Malware", "البرمجيات الخبيثة"),
      def: l("Software designed to harm, steal, spy or gain unauthorized access.", "برمجيات مصممة للضرر أو السرقة أو التجسس أو الوصول غير المصرح."),
      example: l("Ransomware, spyware and trojans are malware families.", "برمجيات الفدية والتجسس وأحصنة طروادة عائلات برمجيات خبيثة."),
    },
    {
      term: l("Phishing", "التصيّد الاحتيالي"),
      def: l("A deceptive message that tricks a person into revealing information or running malware.", "رسالة خادعة تدفع الشخص إلى كشف معلومات أو تشغيل برمجية خبيثة."),
      example: l("A fake invoice attachment is a common phishing lure.", "مرفق فاتورة مزيفة طُعم تصيّد شائع."),
    },
    {
      term: l("Firewall", "الجدار الناري"),
      def: l("A control that allows or blocks network traffic according to rules.", "ضابط يسمح بمرور حركة الشبكة أو يحجبها وفق قواعد."),
      example: l("A firewall may block inbound RDP from the internet.", "قد يحجب الجدار الناري RDP الوارد من الإنترنت."),
    },
    {
      term: l("Encryption", "التشفير"),
      def: l("Transforming readable data into unreadable ciphertext using a key.", "تحويل البيانات المقروءة إلى نص مشفر غير مقروء باستخدام مفتاح."),
      example: l("Disk encryption protects a laptop if it is stolen.", "يحمي تشفير القرص الحاسوب المحمول إذا سُرق."),
    },
    {
      term: l("Authentication", "المصادقة"),
      def: l("Proving that a user, device or service is who or what it claims to be.", "إثبات أن المستخدم أو الجهاز أو الخدمة هو من يدّعي أنه هو."),
      example: l("A password plus a one-time code is authentication.", "كلمة المرور مع رمز لمرة واحدة مصادقة."),
    },
    {
      term: l("Authorization", "التصريح"),
      def: l("Deciding what an authenticated identity is allowed to do.", "تحديد ما يُسمح للهوية الموثقة بفعله."),
      example: l("A user may read a report but not delete it.", "قد يقرأ المستخدم تقريرًا لكن لا يحذفه."),
    },
    {
      term: l("Incident", "الحادث"),
      def: l("An event that actually or potentially harms security.", "حدث يضر بالأمن فعليًا أو محتملًا."),
      example: l("A confirmed ransomware infection is a security incident.", "عدوى برمجية فدية مؤكدة حادث أمني."),
    },
    {
      term: l("Governance, risk and compliance (GRC)", "الحوكمة والمخاطر والامتثال"),
      def: l("The discipline that aligns security with business goals, risk decisions, laws and standards.", "التخصص الذي يوائم الأمن مع أهداف العمل وقرارات المخاطر والقوانين والمعايير."),
      example: l("A risk register and policy review are GRC activities.", "سجل المخاطر ومراجعة السياسات من أنشطة GRC."),
    },
    {
      term: l("Security operations center (SOC)", "مركز العمليات الأمنية"),
      def: l("A team and facility that monitor, detect and respond to security events.", "فريق ومنشأة يراقبان الأحداث الأمنية ويكتشفانها ويستجيبان لها."),
      example: l("A SOC analyst triages an alert about failed logins.", "يفرز محلل SOC تنبيهًا عن محاولات دخول فاشلة."),
    },
    {
      term: l("Penetration testing", "اختبار الاختراق"),
      def: l("Authorized testing that attempts to find and safely exploit weaknesses.", "اختبار مصرح به يحاول اكتشاف نقاط الضعف واستغلالها بأمان."),
      example: l("A tester scans only the client's approved lab range.", "يفحص المختبر النطاق المختبري المعتمد للعميل فقط."),
    },
    {
      term: l("Application security (AppSec)", "أمن التطبيقات"),
      def: l("Building and testing software so it resists attacks.", "بناء البرمجيات واختبارها بحيث تقاوم الهجمات."),
      example: l("Input validation and access checks are AppSec controls.", "التحقق من المدخلات وفحوص الوصول ضوابط أمن تطبيقات."),
    },
    {
      term: l("Cloud security", "أمن السحابة"),
      def: l("Protecting cloud identities, configurations, data and services under the shared responsibility model.", "حماية هويات السحابة وإعداداتها وبياناتها وخدماتها في إطار المسؤولية المشتركة."),
      example: l("An open cloud storage bucket is a cloud security failure.", "حاوية تخزين سحابية مفتوحة إخفاق أمن سحابة."),
    },
    {
      term: l("DevSecOps", "DevSecOps"),
      def: l("Integrating security into development and operations pipelines.", "دمج الأمن في خطوط التطوير والعمليات."),
      example: l("Automated dependency scanning is a DevSecOps practice.", "فحص التبعيات الآلي ممارسة DevSecOps."),
    },
    {
      term: l("Threat intelligence", "استخبارات التهديدات"),
      def: l("Collecting and analyzing information about attackers, campaigns and indicators.", "جمع وتحليل معلومات عن المهاجمين والحملات والمؤشرات."),
      example: l("A report about a new phishing campaign is threat intelligence.", "تقرير عن حملة تصيّد جديدة استخبارات تهديدات."),
    },
  ],
};
