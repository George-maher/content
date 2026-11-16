import { l, type Session } from "../types";

export const s14: Session = {
  id: 14,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Vulnerability Management: CVE, CVSS, Patching, Endpoint Protection and Risk-Based Prioritisation",
    "إدارة الثغرات: CVE وCVSS والترقيع وحماية النقاط الطرفية وترتيب الأولويات القائم على المخاطر",
  ),
  summary: l(
    "The continuous process of finding, prioritising, fixing and verifying weaknesses before attackers use them. Asset inventory, CVE and CVSS, risk-based prioritisation, the vulnerability-management cycle, patching practice, endpoint protection layers and configuration baselines.",
    "العملية المستمرة لإيجاد الضعف وترتيبه وإصلاحه والتحقق منه قبل أن يستخدمه المهاجمون. وحصر الأصول، وCVE وCVSS، وترتيب الأولويات القائم على المخاطر، ودورة إدارة الثغرات، وممارسة الترقيع، وطبقات حماية النقاط الطرفية، وخطوط أساس الإعدادات.",
  ),
  overview: l(
    "A vulnerability is a weakness in software, hardware, configuration or process that an attacker can exploit. Thousands of new flaws are published every year, and attackers often weaponise them within days — many of the largest breaches used a flaw for which a fix had existed for months. This session covers the continuous process of vulnerability management: the asset inventory that makes it possible, CVE identifiers and CVSS scores, risk-based prioritisation that goes beyond the raw score, the discovery-to-verification cycle, good patching practice including end-of-life systems, endpoint protection layers, and configuration baselines that prevent drift. The session closes with a lab where you use a risk register to score, prioritise and choose treatments for real risks.",
    "الثغرة ضعف في برمجية أو عتاد أو إعداد أو عملية يمكن للمهاجم استغلاله. وتنشر آلاف الثغرات الجديدة كل عام وغالبًا ما يسلّحها المهاجمون خلال أيام — واستخدم كثير من أكبر الاختراقات ثغرة كان إصلاحها متاحًا منذ شهور. وتغطي هذه الجلسة العملية المستمرة لإدارة الثغرات: حصر الأصول الذي يجعلها ممكنة، ومعرّفات CVE ودرجات CVSS، وترتيب الأولويات القائم على المخاطر الذي يتجاوز الدرجة الخام، ودورة الاكتشاف حتى التحقق، وممارسة الترقيع الجيدة بما في ذلك الأنظمة منتهية العمر، وطبقات حماية النقاط الطرفية، وخطوط أساس الإعدادات التي تمنع الانحراف. وتنتهي الجلسة بمختبر تستخدم فيه سجل مخاطر لتسجيل وترتيب واختيار معالجات لمخاطر حقيقية.",
  ),
  whyItMatters: l(
    "You cannot protect what you do not know you own. Most organisations are affected by known, already-patched flaws long before they are exploited, because they lack an inventory, mis-prioritise findings, or fall behind on patching. Vulnerability management turns the endless stream of advisories into an orderly, measurable process: find what exists, decide what matters, fix it, verify it, and repeat. It is the difference between reacting to breaches and preventing them.",
    "لا يمكنك حماية ما لا تعرف أنك تملكه. فمعظم المنظمات تتأثر بثغرات معروفة ومرقّعة بالفعل قبل استغلالها بفترة طويلة، لأنها تفتقر للحصر أو تُخطئ في ترتيب النتائج أو تتأخر في الترقيع. وتحوّل إدارة الثغرات التدفق الذي لا ينتهي من النشرات إلى عملية مرتبة وقابلة للقياس: ابحث عما يوجد، وقرر ما يهم، وأصلحه، وتحقق منه، وكرّر. وهي الفارق بين الاستجابة للاختراقات ومنعها.",
  ),
  prerequisites: [
    l(
      "Session 9, Cryptography: how signatures and integrity checks support secure systems.",
      "الجلسة 9، التشفير: كيف تدعم التوقيعات وفحوص السلامة الأنظمة الآمنة.",
    ),
    l(
      "Session 13, IAM: how access control and least privilege limit what a compromised account can reach.",
      "الجلسة 13، إدارة الهوية والوصول: كيف يحد التحكم بالوصول وأقل صلاحية مما يستطيع الحساب المخترق الوصول إليه.",
    ),
    l(
      "A legal and ethical mindset: run vulnerability scanners only on assets you own or are authorized to scan.",
      "عقلية قانونية وأخلاقية: شغّل ماسحات الثغرات فقط على الأصول التي تملكها أو لديك إذن بفحصها.",
    ),
  ],
  objectives: [
    l(
      "Explain why vulnerability management depends on a complete asset inventory.",
      "شرح سبب اعتماد إدارة الثغرات على حصر أصول كامل.",
    ),
    l(
      "Interpret CVE identifiers and CVSS scores and state their limits.",
      "تفسير معرّفات CVE ودرجات CVSS وذكر حدودها.",
    ),
    l(
      "Prioritise remediation by exploitability, exposure and asset value, not CVSS alone.",
      "ترتيب أولويات المعالجة بحسب قابلية الاستغلال والتعرض وقيمة الأصل لا CVSS وحده.",
    ),
    l(
      "Describe the vulnerability-management cycle and good patching practice.",
      "وصف دورة إدارة الثغرات وممارسة الترقيع الجيدة.",
    ),
    l(
      "Explain endpoint protection layers and configuration baselines.",
      "شرح طبقات حماية النقاط الطرفية وخطوط أساس الإعدادات.",
    ),
    l(
      "Score and prioritise risks with a risk register and choose treatments.",
      "تسجيل وترتيب المخاطر بسجل مخاطر واختيار معالجات لها.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Why vulnerability management matters", "لماذا تهم إدارة الثغرات"), minutes: 12 },
    { label: l("CVE, CVSS and identifiers", "CVE وCVSS والمعرّفات"), minutes: 12 },
    { label: l("Prioritisation beyond CVSS", "ترتيب الأولويات بتجاوز CVSS"), minutes: 13 },
    { label: l("The vulnerability-management cycle", "دورة إدارة الثغرات"), minutes: 12 },
    { label: l("Patching practice and end-of-life systems", "ممارسة الترقيع والأنظمة منتهية العمر"), minutes: 12 },
    { label: l("Endpoint protection layers", "طبقات حماية النقاط الطرفية"), minutes: 12 },
    { label: l("Baselines, drift and practical assessment", "خطوط الأساس والانحراف والتمرين العملي والتقييم"), minutes: 12 },
  ],
  introduction: l(
    "A vulnerability is a weakness in software, hardware, configuration or process that an attacker can exploit. Thousands of new flaws are published every year, and attackers often weaponise them within days. This session covers the continuous process of vulnerability management: the asset inventory that makes it possible, CVE identifiers and CVSS scores, risk-based prioritisation, the discovery-to-verification cycle, good patching practice, endpoint protection layers, and configuration baselines. The session closes with a lab where you use a risk register to score, prioritise and choose treatments for real risks.",
    "الثغرة ضعف في برمجية أو عتاد أو إعداد أو عملية يمكن للمهاجم استغلاله. وتنشر آلاف الثغرات الجديدة كل عام وغالبًا ما يسلّحها المهاجمون خلال أيام. وتغطي هذه الجلسة العملية المستمرة لإدارة الثغرات: حصر الأصول الذي يجعلها ممكنة، ومعرّفات CVE ودرجات CVSS، وترتيب الأولويات القائم على المخاطر، ودورة الاكتشاف حتى التحقق، وممارسة الترقيع الجيدة، وطبقات حماية النقاط الطرفية، وخطوط أساس الإعدادات. وتنتهي الجلسة بمختبر تستخدم فيه سجل مخاطر لتسجيل وترتيب واختيار معالجات لمخاطر حقيقية.",
  ),
  sections: [
    {
      h: l("1. Why vulnerability management matters", "1. لماذا تهم إدارة الثغرات"),
      p: [
        l(
          "A vulnerability is a weakness in software, hardware, configuration or process that an attacker can exploit. Thousands of new flaws are published every year, and attackers often weaponise them within days. Many of the largest breaches used a flaw for which a fix had existed for months. Vulnerability management is the continuous process of finding, prioritising, fixing and verifying weaknesses before attackers use them.",
          "الثغرة ضعف في برمجية أو عتاد أو إعداد أو عملية يمكن للمهاجم استغلاله. وتنشر آلاف الثغرات الجديدة كل عام وغالبًا ما يسلّحها المهاجمون خلال أيام. واستخدم كثير من أكبر الاختراقات ثغرة كان إصلاحها متاحًا منذ شهور. وإدارة الثغرات هي العملية المستمرة لإيجاد الضعف وترتيبه وإصلاحه والتحقق منه قبل أن يستخدمه المهاجمون.",
        ),
        l(
          "The foundation is an asset inventory: a current list of every device, operating system, application, cloud service and owner. Unknown 'shadow IT' systems are never patched because nobody knows they exist. Pair the inventory with software versions so that when a new critical flaw is announced you can answer within minutes: 'Are we affected, and where?' You cannot scan, patch or protect what you do not know you own.",
          "الأساس هو حصر الأصول: قائمة محدّثة بكل جهاز ونظام تشغيل وتطبيق وخدمة سحابية ومالكها. و«تقنية المعلومات الظل» المجهولة لا تُرقَّع أبدًا لأن لا أحد يعرف بوجودها. وأقرن الحصر بإصدارات البرمجيات لتجيب خلال دقائق عند إعلان ثغرة حرجة جديدة: «هل نحن متأثرون وأين؟» فلا يمكنك فحص أو ترقيع أو حماية ما لا تعلم أنك تملكه.",
        ),
      ],
    },
    {
      h: l("2. CVE, CVSS and identifiers", "2. CVE وCVSS والمعرّفات"),
      p: [
        l(
          "A CVE (Common Vulnerabilities and Exposures) identifier such as CVE-2021-44228 gives each publicly known flaw a unique name so tools and teams talk about the same issue. CVSS (Common Vulnerability Scoring System) scores technical severity from 0.0 to 10.0: Low 0.1–3.9, Medium 4.0–6.9, High 7.0–8.9, Critical 9.0–10.0. The NVD publishes scores and vendors publish advisories. These identifiers and scores give you a shared language and a first estimate of severity.",
          "يعطي معرّف CVE (الثغرات والتعرضات الشائعة) مثل CVE-2021-44228 كل ثغرة معروفة علنًا اسمًا فريدًا لتتحدث الأدوات والفرق عن المسألة نفسها. ويقيّم CVSS (نظام تسجيل الثغرات الشائع) الشدة التقنية من 0.0 إلى 10.0: منخفضة 0.1–3.9 ومتوسطة 4.0–6.9 وعالية 7.0–8.9 وحرجة 9.0–10.0. وتنشر NVD الدرجات وينشر المورّدون النشرات. وتمنحك هذه المعرّفات والدرجات لغة مشتركة وتقديرًا أوليًا للشدة.",
        ),
        l(
          "CVSS measures the technical characteristics of the flaw itself — it does not know your environment. A flaw that is critical in one context may be irrelevant in another. Identifiers and scores are a starting point, never the whole prioritisation decision. The next section explains how to combine them with context.",
          "يقيس CVSS الخصائص التقنية للثغرة ذاتها — ولا يعرف بيئتك. فالثغرة الحرجة في سياق قد تكون غير ذات صلة في آخر. وتُعد المعرّفات والدرجات نقطة انطلاق، لا قرار الترتيب كاملًا. ويشرح القسم التالي كيف تدمجها مع السياق.",
        ),
      ],
    },
    {
      h: l("3. Prioritisation beyond CVSS", "3. ترتيب الأولويات بتجاوز CVSS"),
      p: [
        l(
          "CVSS alone is a poor patch order. Real priority also depends on whether the flaw is exploited in the wild (check CISA's Known Exploited Vulnerabilities catalogue, KEV, and EPSS probability), whether the asset is exposed to the Internet, how valuable the data or function on it is, and whether compensating controls (segmentation, WAF) are in place. A 'Critical' flaw on an isolated test box may rank below a 'High' flaw on an Internet-facing server with a public exploit.",
          "لا يصلح CVSS وحده ترتيبًا للترقيع. فالأولوية الحقيقية تعتمد أيضًا على: هل تُستغل في الواقع (راجع كتالوج CISA للثغرات المستغلة المعروفة، KEV، واحتمال EPSS)؟ وهل الأصل معرّض للإنترنت؟ وما قيمة البيانات أو الوظيفة عليه؟ وهل توجد ضوابط تعويضية (تقسيم، WAF)؟ فقد تأتي ثغرة «حرجة» على جهاز اختبار معزول بعد ثغرة «عالية» على خادم مواجه للإنترنت بثغرة لها استغلال علني.",
        ),
      ],
      table: {
        head: [l("Factor", "العامل"), l("Question to ask", "السؤال"), l("Raises priority when…", "يرفع الأولوية عندما…")],
        rows: [
          [l("Exploitation", "الاستغلال"), l("Is it used by attackers now?", "هل يستخدمه المهاجمون الآن؟"), l("Listed in KEV, public exploit code exists", "مدرج في KEV وتوجد شيفرة استغلال علنية")],
          [l("Exposure", "التعرض"), l("Can an attacker reach it?", "هل يستطيع المهاجم الوصول إليه؟"), l("Internet-facing, remote and unauthenticated", "مواجه للإنترنت وعن بُعد ودون مصادقة")],
          [l("Asset value", "قيمة الأصل"), l("What is at stake?", "ما المعرّض للخطر؟"), l("Holds sensitive data or runs a critical service", "يحمل بيانات حساسة أو يشغّل خدمة حرجة")],
          [l("Compensating controls", "الضوابط التعويضية"), l("What already limits impact?", "ما الذي يحد الأثر أصلًا؟"), l("None in place", "لا يوجد أي منها")],
        ],
      },
      callout: { kind: "key", text: l("Risk-based prioritisation multiplies likelihood and impact in your context. Likelihood rises with active exploitation and exposure; impact rises with asset value and the absence of compensating controls. This is exactly the logic a risk register captures: risk equals likelihood multiplied by impact, and the highest scores are treated first.", "يضرب الترتيب القائم على المخاطر الاحتمالية في الأثر في سياقك. فتزداد الاحتمالية بالاستغلال الفعلي والتعرض؛ ويزداد الأثر بقيمة الأصل وغياب الضوابط التعويضية. وهذا عين المنطق الذي يلتقطه سجل المخاطر: الخطر يساوي الاحتمالية مضروبة في الأثر، ويُعالج الأعلى درجات أولًا.") },
    },
    {
      h: l("4. The vulnerability-management cycle", "4. دورة إدارة الثغرات"),
      p: [
        l(
          "The cycle is: discover assets → scan (authenticated scans see far more than unauthenticated) → prioritise → remediate → verify with a re-scan → report metrics → repeat. Remediation options are patch/upgrade, change configuration, apply a mitigation or workaround (disable the feature, block the port), isolate the system, or formally accept the risk with owner approval and an expiry date.",
          "الدورة: اكتشاف الأصول ← الفحص (الفحص بمصادقة يرى أكثر بكثير من الفحص دونها) ← ترتيب الأولويات ← المعالجة ← التحقق بإعادة الفحص ← رفع المقاييس ← التكرار. وخيارات المعالجة: ترقيع/ترقية، أو تغيير إعداد، أو تطبيق تخفيف أو حل بديل (تعطيل الميزة وحجب المنفذ)، أو عزل النظام، أو قبول المخاطرة رسميًا بموافقة المالك وتاريخ انتهاء.",
        ),
        l(
          "This is a continuous loop, not a project: new assets and new flaws appear every week, so discovery and scanning never stop. Each cycle closes with metrics — time-to-patch for critical issues, patch coverage, and the number of overdue exceptions — that show whether the process is improving.",
          "هذه حلقة مستمرة لا مشروع: تظهر أصول وثغرات جديدة كل أسبوع فلا يتوقف الاكتشاف والفحص. وتغلق كل دورة بمقاييس — زمن الترقيع للمسائل الحرجة وتغطية الترقيع وعدد الاستثناءات المتأخرة — تُظهر ما إذا كانت العملية تتحسن.",
        ),
      ],
      callout: {
        kind: "key",
        text: l("A scanner finds known flaws; a penetration test shows how they chain together. They complement each other and neither replaces patching discipline.", "يجد الماسح الثغرات المعروفة ويُظهر اختبار الاختراق كيف تتسلسل. ويكمل كلٌّ منهما الآخر ولا يغني أحدهما عن انضباط الترقيع."),
      },
    },
    {
      h: l("5. Patching practice and end-of-life systems", "5. ممارسة الترقيع والأنظمة منتهية العمر"),
      p: [
        l(
          "Good patching practice: test patches on a pilot group, schedule regular windows (for example monthly) with an emergency path for actively exploited flaws, keep a rollback plan, automate for workstations, and track metrics such as time-to-patch for critical issues. Testing prevents a fix from breaking production; the emergency path lets you act fast on flaws that are being exploited right now.",
          "ممارسة الترقيع الجيدة: اختبر الرقع على مجموعة تجريبية، وحدد نوافذ منتظمة (مثلًا شهريًا) مع مسار طوارئ للثغرات المستغلة فعليًا، وأبقِ خطة تراجع، وأتمت ذلك للحواسيب، وتتبع مقاييس مثل زمن الترقيع للمسائل الحرجة. فالاختبار يمنع الإصلاح من كسر الإنتاج؛ ومسار الطوارئ يتيح لك التصرف بسرعة تجاه الثغرات التي تُستغل الآن.",
        ),
        l(
          "Unsupported (end-of-life) systems can no longer be patched. If such a system must keep running, isolate it from the network, restrict access, monitor it closely, and plan its replacement — compensating controls reduce risk while replacement is planned. Ignoring or exposing an end-of-life system is a guaranteed risk.",
          "أما الأنظمة غير المدعومة (منتهية العمر) فلا يمكن ترقيعها. وإذا كان على نظام من هذا النوع أن يبقى عاملًا فعزله عن الشبكة وقيّد الوصول إليه وراقبه بصرامة وخطّط لاستبدالها — فتُقل الضوابط التعويضية الخطر ريثما يُخطَّط للاستبدال. ويكون تجاهل نظام منتهي العمر أو تعريضه للخطر خطرًا مؤكدًا.",
        ),
      ],
    },
    {
      h: l("6. Endpoint protection layers", "6. طبقات حماية النقاط الطرفية"),
      p: [l("Endpoints — laptops, desktops, servers, phones — are where users meet attackers. Layer the protections:", "النقاط الطرفية — الحواسيب المحمولة والمكتبية والخوادم والهواتف — هي حيث يلتقي المستخدمون بالمهاجمين. اجمع الحمايات في طبقات:")],
      bullets: [
        l("Anti-malware / EDR: signature and behaviour detection with remote isolation and investigation tools.", "مكافحة البرمجيات الخبيثة / EDR: كشف بالتواقيع والسلوك مع أدوات عزل وتحقيق عن بُعد."),
        l("Configuration baselines (CIS Benchmarks) and automated compliance checks to prevent drift.", "خطوط أساس للإعدادات (CIS Benchmarks) وفحوص امتثال آلية لمنع الانحراف."),
        l("Application control: allow only approved software; block macros and scripts from untrusted sources.", "التحكم بالتطبيقات: السماح بالبرمجيات المعتمدة فقط وحجب الماكرو والسكربتات من مصادر غير موثوقة."),
        l("Disk encryption, host firewall, screen lock, removable-media policy.", "تشفير القرص وجدار الجهاز الناري وقفل الشاشة وسياسة الوسائط القابلة للإزالة."),
        l("Mobile device management (MDM) for phones and tablets: enforce passcodes, encryption, updates and remote wipe.", "إدارة الأجهزة المحمولة (MDM) للهواتف والأجهزة اللوحية: فرض رموز المرور والتشفير والتحديثات والمسح عن بُعد."),
        l("Backups and recovery tested regularly.", "نسخ احتياطية واستعادة تُختبر بانتظام."),
      ],
      callout: { kind: "key", text: l("No single layer is enough. Defence in depth means that if one control fails — a signature misses a new malware variant, a patch is delayed — another layer still blocks or limits the attack. Endpoint protection is where vulnerability management meets day-to-day operations.", "لا تكفي طبقة واحدة. فالدف في طبقات يعني أنه إذا فشل ضابط واحد — كأن يفوت توقيعٌ فايروسًا جديدًا أو يتأخر رقعة — تظل طبقة أخرى تمنع الهجوم أو تحد منه. وحماية النقاط الطرفية هي حيث تلتقي إدارة الثغرات بالتشغيل اليومي.") },
    },
    {
      h: l("7. Configuration baselines and drift", "7. خطوط أساس الإعدادات والانحراف"),
      p: [
        l(
          "A configuration baseline is an approved, secure starting state for a system, captured as a standard (CIS Benchmarks are the common reference). Automated compliance checks compare live systems against the baseline and flag deviations. Without baselines, systems drift over time: services get enabled, ports opened, defaults changed — and each small deviation is a potential vulnerability that patching alone does not fix.",
          "خط الأساس للإعدادات هو حالة انطلاق معتمدة وآمنة للنظام، تُلتقط كمعيار (CIS Benchmarks هي المرجع الشائع). وتقارن فحوص الامتثال الآلية الأنظمة الجاية بخط الأساس وتُعلّم الانحرافات. ودون خطوط أساس تنجرف الأنظمة مع الزمن: تُفعّل خدمات ويُفتح منفذ وتُغيّر الإعدادات الافتراضية — وكل انحراف صغير هو ثغرة محتملة لا يصلحها الترقيع وحده.",
        ),
        l(
          "Baselines turn configuration from a manual, error-prone chore into an auditable, repeatable process. Combine them with scanning and patching so that both the software and the settings stay aligned with the approved state. This closes a common gap: a fully patched system that has drifted from its baseline is still exposed.",
          "تُحوّل خطوط الأساس الإعداد من مهمة يدوية عرضة للخطأ إلى عملية قابلة للتدقيق والتكرار. وادمجها مع الفحص والترقيع كي يظل كل من البرمجيات والإعدادات متوافقًا مع الحالة المعتمدة. وهذا يسد فجوة شائعة: فالنظام المرقّع بالكامل الذي انحرف عن خط أسسه لا يزال مكشوفًا.",
        ),
      ],
    },
    {
      h: l("8. Bringing it together: risk-based vulnerability management", "8. جمع الأفكار: إدارة الثغرات القائمة على المخاطر"),
      p: [
        l(
          "Vulnerability management works when the pieces fit: a complete asset inventory, identifiers and scores for a shared language, risk-based prioritisation that weighs exploitation, exposure and asset value, a repeating discovery-to-verification cycle, disciplined patching, layered endpoint protection and configuration baselines. The goal is not to eliminate every flaw — that is impossible — but to reduce risk to an acceptable level, fast and measurably, before attackers can exploit it.",
          "تعمل إدارة الثغرات عندما تتراص الأجزاء: حصر أصول كامل، ومعرّفات ودرجات للغة مشتركة، وترتيب أولويات قائم على المخاطر يزن الاستغلال والتعرض وقيمة الأصل، ودورة متكررة من الاكتشاف حتى التحقق، وترقيع منضبط، وحماية نقطية متراصة في طبقات، وخطوط أساس للإعدادات. وليس الهدف استئصال كل ثغرة — فذلك مستحيل — بل خفض الخطر إلى مستوى مقبول، بسرعة وقابلية قياس، قبل أن يتمكن المهاجمون من استغلاله.",
        ),
        l(
          "As you practise, remember the boundary: run vulnerability scanners only on assets you own or are explicitly authorized to scan, at agreed times, because scans can disrupt fragile systems. Handle scan reports as sensitive — they are a roadmap for attackers. Use the simulators and legal practice environments to build the skill safely.",
          "عند التدرّب تذكّر الحد: شغّل ماسحات الثغرات فقط على الأصول التي تملكها أو لديك إذن صريح بفحصها وفي أوقات متفق عليها لأن الفحص قد يعطل أنظمة هشة. وتعامل مع تقارير الفحص كمعلومات حساسة — فهي خريطة طريق للمهاجمين. واستخدم المحاكيات وبيئات التدريب القانونية لبناء المهارة بأمان.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "CVE-2021-44228 (Log4Shell) is a widely exploited flaw with a critical CVSS score. But its priority for a given organisation depends on whether it runs Log4j, whether the affected system is Internet-facing, and whether it holds sensitive data — the same score can mean urgent action or a scheduled fix depending on context.",
      "CVE-2021-44228 (Log4Shell) ثغرة مستغلة على نطاق واسع بدرجة CVSS حرجة. لكن أولويتها لدى منظمة ما تعتمد على هل تشغّل Log4j، وهل النظام المتأثر مواجه للإنترنت، وهل يحمل بيانات حساسة — فيمكن أن تعني الدرجة نفسها إجراءً عاجلاً أو إصلاحًا مجدولًا بحسب السياق.",
    ),
    l(
      "A 'Critical' flaw on an isolated test machine with no real data ranks below a 'High' flaw on an Internet-facing web server with public exploit code. The second is reachable and being attacked; the first is neither. CVSS alone would get the order wrong.",
      "تأتي ثغرة «حرجة» على جهاز اختبار معزول بلا بيانات حقيقية بعد ثغرة «عالية» على خادم ويب مواجه للإنترنت بثغرة لها استغلال علني. فالثانية مكشوفة وتُهاجم، والأولى ليست كذلك. وCVSS وحده سيُخطئ في الترتيب.",
    ),
    l(
      "A system running an end-of-life operating system can no longer be patched. Rather than ignore it, you isolate it from the network, restrict access to a small set of users, monitor it intensely, and plan its replacement — compensating controls that hold the risk down until the system is retired.",
      "لا يمكن ترقيع نظام يشغّل نظام تشغيل منتهي العمر. وبدلًا من تجاهله، تعزله عن الشبكة وتقيّد الوصول إلى مجموعة صغيرة من المستخدمين وراقبه بشدة وخطّط لاستبداله — ضوابط تعويضية تُخفض الخطر حتى يُستبدل النظام.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A large breach was caused by a flaw for which a patch had existed for months. The organisation had the patch but had not prioritised it, because its scanner reported a 'High' score without flagging that the asset was Internet-facing and already being exploited. Risk-based prioritisation would have surfaced it immediately.",
      "أدى اختراق كبير إلى ثغرة كان إصلاحها متاحًا منذ شهور. وكانت المنظمة تملك الرقعة لكنها لم تُرتّبها، لأن ماسحها أبلغ بدرجة «عالية» دون الإشارة إلى أن الأصل مواجه للإنترنت ويُستغل بالفعل. وكان ترتيب الأولويات القائم على المخاطر سيبرزها فورًا.",
    ),
    l(
      "A company finds an unknown server in its network — 'shadow IT' — running unsupported software. Because it was never inventoried, it had never been patched and was an easy target. A complete asset inventory and baseline scans would have found it long before.",
      "تجد شركة خادمًا مجهولًا في شبكتها — «تقنية معلومات ظل» — يشغّل برمجيات غير مدعومة. ولأنه لم يُحصَ أبدًا لم يُرقَّع وكان هدفًا سهلاً. وكان حصر الأصول الكامل وفحوص خط الأساس سيجدان به قبل وقت طويل.",
    ),
    l(
      "An endpoint protection suite blocks a new malware variant that a signature-only tool missed, because behaviour detection caught the suspicious process — and an automated patch window had already closed the underlying flaw. Defence in depth means no single failure exposes the system.",
      "يحظر طقم حماية النقاط الطرفية فايروسًا جديدًا أخطأت فيه أداة تواقيع فقط، لأن كشف السلوك التقط العملية المشبوهة — وكانت نافذة الترقيع الآلية قد أغلقت الثغرة الأساسية بالفعل. فالدف في طبقات يعني أن لا فشلًا واحدًا يكشف النظام.",
    ),
  ],
  diagram: {
    kind: "cycle",
    title: l("The vulnerability-management cycle", "دورة إدارة الثغرات"),
    caption: l("A continuous loop, not a project: new assets and new flaws appear every week, so discovery and scanning never stop.", "حلقة مستمرة لا مشروع: تظهر أصول وثغرات جديدة كل أسبوع فلا يتوقف الاكتشاف والفحص."),
    nodes: [
      { label: l("Discover assets", "اكتشاف الأصول"), desc: l("Inventory hardware, software, cloud, owners", "حصر العتاد والبرمجيات والسحابة والمالكين") },
      { label: l("Scan", "الفحص"), desc: l("Authenticated vulnerability scans", "فحوص ثغرات بمصادقة") },
      { label: l("Prioritise", "ترتيب الأولويات"), desc: l("Exploitation × exposure × asset value", "الاستغلال × التعرض × قيمة الأصل") },
      { label: l("Remediate", "المعالجة"), desc: l("Patch, configure, mitigate, isolate", "ترقيع وإعداد وتخفيف وعزل") },
      { label: l("Verify & report", "التحقق والإبلاغ"), desc: l("Re-scan, track time-to-patch", "إعادة فحص وتتبع زمن الترقيع") },
    ],
  },
  instructorDemo: l(
    "Demonstrate the risk register tool. Show the five preset risks and how each is scored as Likelihood × Impact (1–5), with the resulting rating (Critical/High/Medium/Low). Adjust a slider and watch the score and rating change, then choose a treatment (Mitigate, Transfer, Accept, Avoid) for a risk. Then re-rate a risk after imagining a control — for example, enabling MFA lowers the impact of the phishing risk, and offline backups lower the impact of the ransomware risk — and show how the score drops. Use the sort order to decide what to treat first. Connect this to vulnerability prioritisation: risk = likelihood × impact in your context, not CVSS alone.",
    "اعرض أداة سجل المخاطر. واعرض المخاطر الخمسة المسبقة وكيف تُسجَّل كل منها كاحتمالية × أثر (1–5) مع التصنيف الناتج (حرج/مرتفع/متوسط/منخفض). واضبط مؤشرًا وشاهد الدرجة والتصنيف يتغيران، ثم اختر معالجة (تخفيف، نقل، قبول، تجنب) لمخاطرة. ثم أعد تسجيل مخاطر بعد تخيّل ضابط — مثلًا يُخفّض تفعيل MFA أثر مخاطر التصيّد، وتُخفّض النسخ الاحتياطية المعزولة أثر مخاطر الفدية — وأظهر كيف تنخفض الدرجة. واستخدم ترتيب التهيئة لتقرير ما تُعالج أولًا. واربط هذا بترتيب الثغرات: الخطر = الاحتمالية × الأثر في سياقك، لا CVSS وحده.",
  ),
  exercises: [
    {
      title: l("Rank two findings and justify the order", "رتّب نتيجتين وبرّر الترتيب"),
      instructions: l(
        "Given a 'Critical' flaw on an isolated test box and a 'High' flaw on an Internet-facing server with a public exploit, decide which to fix first and justify the order using exploitation, exposure and asset value.",
        "مع ثغرة «حرجة» على جهاز اختبار معزول وثغرة «عالية» على خادم مواجه للإنترنت باستغلال علني، حدد أيهما تُصلح أولًا وبرّر الترتيب بالاستغلال والتعرض وقيمة الأصل.",
      ),
      expected: l(
        "Fix the Internet-facing, publicly exploited 'High' flaw first: it is reachable and being attacked, despite the lower score.",
        "أصلح أولًا الثغرة «العالية» المواجهة للإنترنت والقابلة للاستغلال علنًا: فهي مكشوفة وتُهاجم، رغم الدرجة الأقل.",
      ),
    },
    {
      title: l("List the vulnerability-management cycle steps", "اذكر خطوات دورة إدارة الثغرات"),
      instructions: l(
        "List the steps of the vulnerability-management cycle in order and state what each step is for.",
        "اذكر خطوات دورة إدارة الثغرات بالترتيب واذكر الغرض من كل خطوة.",
      ),
      expected: l(
        "Discover assets, scan, prioritise, remediate, verify with a re-scan, report metrics, repeat.",
        "اكتشاف الأصول، والفحص، وترتيب الأولويات، والمعالجة، والتحقق بإعادة الفحص، ورفع المقاييس، والتكرار.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can explain why vulnerability management depends on an asset inventory, interpret CVE and CVSS and state their limits, prioritise remediation by exploitability, exposure and asset value, describe the vulnerability-management cycle and patching practice, explain endpoint protection layers and configuration baselines, and score and prioritise risks with a risk register.",
    "بعد هذه الجلسة يمكنك شرح سبب اعتماد إدارة الثغرات على حصر الأصول، وتفسير CVE وCVSS وذكر حدودهما، وترتيب المعالجة بحسب قابلية الاستغلال والتعرض وقيمة الأصل، ووصف دورة إدارة الثغرات وممارسة الترقيع، وشرح طبقات حماية النقاط الطرفية وخطوط أساس الإعدادات، وتسجيل وترتيب المخاطر بسجل مخاطر.",
  ),
  commonMistakes: [
    l("Relying on CVSS alone to decide patch order: the score ignores your exposure and whether the flaw is actually exploited.", "الاعتماد على CVSS وحده لترتيب الترقيع: فالدرجة تتجاهل تعرضك وما إذا كانت الثغرة تُستغل فعلًا."),
    l("Skipping the asset inventory: unknown shadow-IT systems are never patched and become easy targets.", "تخطّي حصر الأصول: فأنظمة تقنية المعلومات الظل المجهولة لا تُرقَّع أبدًا وتصبح أهدافًا سهلة."),
    l("Patching without testing: an untested patch can break production, so test on a pilot group first.", "الترقيع دون اختبار: فالرقعة غير المختبرة قد تكسِر الإنتاج، فاختبرها على مجموعة تجريبية أولًا."),
    l("Ignoring end-of-life systems: unsupported systems cannot be patched and must be isolated or replaced.", "تجاهل الأنظمة منتهية العمر: فالأنظمة غير المدعومة لا يمكن ترقيعها ويجب عزلها أو استبدالها."),
    l("Forgetting configuration drift: a fully patched system that drifted from its baseline is still exposed.", "نسيان انحراف الإعدادات: فالنظام المرقّع بالكامل الذي انحرف عن خط أساسه لا يزال مكشوفًا."),
  ],
  bestPractices: [
    l("Maintain a complete asset inventory paired with software versions so you can answer 'are we affected?' in minutes.", "احتفظ بحصر أصول كامل مقرون بإصدارات البرمجيات لتجيب «هل نحن متأثرون؟» خلال دقائق."),
    l("Prioritise by exploitation, exposure and asset value — use CVSS as a starting point, not the decision.", "رتّب الأولويات بالاستغلال والتعرض وقيمة الأصل — واستخدم CVSS كنقطة انطلاق لا كقرار."),
    l("Run the full cycle: discover, scan, prioritise, remediate, verify, report — and repeat continuously.", "نفّذ الدورة كاملة: اكتشاف وفحص وترتيب ومعالجة وتحقق وإبلاغ — وكرّر باستمرار."),
    l("Test patches on a pilot group, keep a rollback plan, and track time-to-patch for critical issues.", "اختبر الرقع على مجموعة تجريبية، وأبقِ خطة تراجع، وتتبع زمن الترقيع للمسائل الحرجة."),
    l("Apply configuration baselines and automated compliance checks to prevent drift.", "طبّق خطوط أساس للإعدادات وفحوص امتثال آلية لمنع الانحراف."),
  ],
  keyTakeaways: [
    l("You cannot protect what you do not know you own — a complete asset inventory is the foundation.", "لا يمكنك حماية ما لا تعرف أنك تملكه — وحصر الأصول الكامل هو الأساس."),
    l("CVE identifies a flaw and CVSS estimates technical severity, but neither knows your environment.", "تحدد CVE الثغرة ويقيّم CVSS الشدة التقنية، لكن لا أحدهما يعرف بيئتك."),
    l("Prioritise by exploitation, exposure and asset value, not CVSS alone.", "رتّب الأولويات بالاستغلال والتعرض وقيمة الأصل لا CVSS وحده."),
    l("The cycle is continuous: discover, scan, prioritise, remediate, verify, report, repeat.", "الدورة مستمرة: اكتشاف وفحص وترتيب ومعالجة وتحقق وإبلاغ وتكرار."),
    l("Layer endpoint protection and hold configuration baselines to stop drift.", "اجمع حماية النقاط الطرفية في طبقات وأمسك خطوط أساس الإعدادات لمنع الانحراف."),
  ],
  lab: {
    title: l("Lab 9 — Vulnerability Management: Risk-Based Prioritisation", "المختبر 9 — إدارة الثغرات: ترتيب الأولويات القائم على المخاطر"),
    scenario: l(
      "A risk register lists five security risks facing a small organisation. Use the risk register simulator (display only; nothing is scanned or changed on a real system) to score each risk as Likelihood × Impact (1–5), observe the rating, choose a treatment, and re-score after imagining a control — then decide what to treat first.",
      "يسرد سجل مخاطر خمس مخاطر أمنية تواجه منظمة صغيرة. استخدم محاكي سجل المخاطر (عرض فقط؛ ولا يُفحص أو يُغيّر شيء على أي نظام حقيقي) لتسجيل كل مخاطرة كاحتمالية × أثر (1–5)، ولاحظ التصنيف، واختر معالجة، وأعد التسجيل بعد تخيّل ضابط — ثم قرر ما تُعالج أولًا.",
    ),
    safety: l(
      "The simulator only displays a risk register and computed scores; nothing is scanned, patched or changed on any real system. In real environments, run vulnerability scanners only on assets you own or are authorized to scan, at agreed times, because scans can disrupt fragile systems. Handle scan reports as sensitive — they are a roadmap for attackers.",
      "يعرض المحاكي فقط سجل مخاطر ودرجات محسوبة؛ ولا يُفحص أو يُرقَّع أو يُغيّر شيء على أي نظام حقيقي. وفي البيئات الحقيقية شغّل ماسحات الثغرات فقط على الأصول التي تملكها أو لديك إذن بفحصها وفي أوقات متفق عليها لأن الفحص قد يعطل أنظمة هشة. وتعامل مع تقارير الفحص كمعلومات حساسة — فهي خريطة طريق للمهاجمين.",
    ),
    steps: [
      l("Read the five risks in the register", "اقرأ المخاطر الخمس في السجل"),
      l("Score each risk as Likelihood × Impact (1–5)", "سجّل كل مخاطرة كاحتمالية × أثر (1–5)"),
      l("Observe the risk score and rating", "لاحظ درجة المخاطرة والتصنيف"),
      l("Choose a treatment for each risk", "اختر معالجة لكل مخاطرة"),
      l("Re-score after imagining a control", "أعد التسجيل بعد تخيّل ضابط"),
      l("Use the sort order to decide what to treat first", "استخدم ترتيب التهيئة لتقرير ما تُعالج أولًا"),
    ],
    expected: l(
      "You can score each risk as Likelihood × Impact, read the Critical/High/Medium/Low rating, choose an appropriate treatment, re-score after a control, and explain which risks to treat first and why.",
      "يمكنك تسجيل كل مخاطرة كاحتمالية × أثر، وقراءة تصنيف حرج/مرتفع/متوسط/منخفض، واختيار معالجة مناسبة، وإعادة التسجيل بعد ضابط، وشرح أي المخاطر تُعالج أولًا ولماذا.",
    ),
    tool: "risk",
    objectives: [
      l("Score risks as Likelihood × Impact (1–5)", "تسجيل المخاطر كاحتمالية × أثر (1–5)"),
      l("Read and interpret the risk rating", "قراءة تصنيف المخاطر وتفسيره"),
      l("Choose a treatment: mitigate, transfer, accept or avoid", "اختيار معالجة: تخفيف أو نقل أو قبول أو تجنب"),
      l("Re-score a risk after imagining a control", "إعادة تسجيل المخاطر بعد تخيّل ضابط"),
      l("Prioritise risks using the register's sort order", "ترتيب المخاطر باستخدام ترتيب التهيئة في السجل"),
    ],
    prerequisites: [
      l("Session 13: how access control and least privilege limit the impact of a compromise", "الجلسة 13: كيف يحد التحكم بالوصول وأقل صلاحية من أثر الاختراق"),
      l("Basic understanding of risk as likelihood multiplied by impact", "فهم أساسي للخطر كاحتمالية مضروبة في الأثر"),
    ],
    environment: l(
      "The companion risk-register simulator in a browser (display only). No real systems are scanned, patched or changed. All scores shown are simulated.",
      "محاكي سجل المخاطر المرافق في متصفح (عرض فقط). لا تُفحص أو تُرقَّع أو تُغيّر أنظمة حقيقية. وجميع الدرجات المعروضة محاكاة.",
    ),
    tools: [
      l("Risk-register simulator (companion browser tool, display only)", "محاكي سجل المخاطر (أداة متصفح مساندة، عرض فقط"),
      l("CVE/CVSS reference (for the prioritisation discussion)", "مرجع CVE/CVSS (لنقاش ترتيب الأولويات)"),
    ],
    authorization: l(
      "Scope: use the display-only simulator. Prohibited: scanning, patching or changing any real system without written authorization. Stop condition: if asked to scan or change a real system, stop and confirm authorization first.",
      "النطاق: استخدم محاكٍ العرض فقط. المحظور: فحص أو ترقيع أو تغيير أي نظام حقيقي دون تصريح كتابي. شرط التوقف: إذا طُلب منك فحص أو تغيير نظام حقيقي، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Read the five risks", "اقرأ المخاطر الخمس"),
        command: "Risk register: initial risks",
        explanation: l(
          "Read the five preset risks in the register: phishing, an unpatched public-facing web server, ransomware on a file server, a lost laptop with customer data, and a power outage in the server room. Note what each risk is and where it could come from.",
          "اقرأ المخاطر الخمسة المسبقة في السجل: التصيّد، وخادم ويب عام غير محدّث، وفدية على خادم ملفات، وفقدان حاسوب محمول ببيانات عملاء، وانقطاع كهرباء عن غرفة الخوادم. ولاحظ ما هي كل مخاطرة ومن أين يمكن أن تأتي.",
        ),
        expected: l("You can list the five risks and describe what each one is.", "يمكنك سرد المخاطر الخمس ووصف ما هي كل مخاطرة."),
      },
      {
        title: l("Score each risk", "سجّل كل مخاطرة"),
        command: "Risk register: set Likelihood and Impact sliders",
        explanation: l(
          "For each risk, set the Likelihood (1–5) and Impact (1–5) sliders to your estimate. Observe the computed score, which is Likelihood × Impact, and the rating: Critical (17+), High (10–16), Medium (5–9), Low (1–4).",
          "لكل مخاطرة، ضبط مؤشري الاحتمالية (1–5) والأثر (1–5) على تقديرك. ولاحظ الدرجة المحسوبة، وهي الاحتمالية × الأثر، والتصنيف: حرج (17 فما فوق)، ومرتفع (10–16)، ومتوسط (5–9)، ومنخفض (1–4).",
        ),
        expected: l("You can set Likelihood and Impact for each risk and read the resulting score and rating.", "يمكنك ضبط الاحتمالية والأثر لكل مخاطرة وقراءة الدرجة والتصنيف الناتجين."),
      },
      {
        title: l("Observe the rating", "لاحظ التصنيف"),
        command: "Risk register: read the rating badge",
        explanation: l(
          "Read the rating badge next to each risk. Confirm that a risk with high likelihood and high impact scores high and is rated Critical, while a risk with low likelihood and low impact scores low. Explain how the rating helps you see which risks need attention.",
          "اقرأ شارة التصنيف بجانب كل مخاطرة. وتحقق من أن المخاطرة ذات الاحتمالية العالية والأثر العالي تسجل درجة عالية وتُصنَّف حرجًا، بينما المخاطرة ذات الاحتمالية المنخفضة والأثر المنخفض تسجل درجة منخفضة. واشرح كيف يساعدك التصنيف على رؤية المخاطر التي تحتاج اهتمامًا.",
        ),
        expected: l("You can match high scores to Critical ratings and low scores to Low ratings, and explain the value of the rating.", "يمكنك مطابقة الدرجات العالية مع تصنيف حرج والدرجات المنخفضة مع تصنيف منخفض، وشرح قيمة التصنيف."),
      },
      {
        title: l("Choose a treatment", "اختر معالجة"),
        command: "Risk register: select a treatment",
        explanation: l(
          "For each risk, choose a treatment: Mitigate (reduce likelihood or impact with a control), Transfer (shift the risk, e.g. insurance or outsourcing), Accept (take the risk knowingly), or Avoid (stop the activity that causes it). Justify your choice for at least two risks.",
          "لكل مخاطرة اختر معالجة: تخفيف (تقليل الاحتمالية أو الأثر بضابط)، أو نقل (تحويل المخاطرة كالتأمين أو الاستعانة بجهة خارجية)، أو قبول (القبول بالخطر عن قصد)، أو تجنب (إيقاف النشاط المسبب لها). وبرّر اختيارك لمخاطرتين على الأقل.",
        ),
        expected: l("You can select an appropriate treatment for each risk and justify at least two choices.", "يمكنك اختيار معالجة مناسبة لكل مخاطرة وتبرير اختيارين على الأقل."),
      },
      {
        title: l("Re-score after a control", "أعد التسجيل بعد ضابط"),
        command: "Risk register: re-rate after imagining a control",
        explanation: l(
          "Imagine a control for a risk — for example, enabling MFA lowers the impact of the phishing risk, and offline backups lower the impact of the ransomware risk. Lower the Impact slider to reflect the control and observe the score and rating drop. Explain how a control changes the risk.",
          "تخيّل ضابطًا لمخاطرة — مثلًا يُخفّض تفعيل MFA أثر مخاطر التصيّد، وتُخفّض النسخ الاحتياطية المعزولة أثر مخاطر الفدية. وخفض مؤشر الأثر ليعكس الضابط ولاحظ انخفاض الدرجة والتصنيف. واشرح كيف يغيّر الضابط المخاطرة.",
        ),
        expected: l("You can lower the Impact for a risk to reflect a control and show the score and rating decrease.", "يمكنك خفض الأثر لمخاطرة ليعكس ضابطًا وإظهار انخفاض الدرجة والتصنيف."),
      },
      {
        title: l("Prioritise using the sort order", "ترتيب الأولويات باستخدام ترتيب التهيئة"),
        command: "Risk register: use the sorted list",
        explanation: l(
          "The register sorts risks by score, highest first. Use this order to decide what to treat first. Explain why the highest-scoring risks should be addressed before lower-scoring ones, and note that a treatment can change the order.",
          "يرتب السجل المخاطر حسب الدرجة، الأعلى أولًا. واستخدم هذا الترتيب لتقرير ما تُعالج أولًا. واشرح سبب وجوب معالجة المخاطر الأعلى درجة قبل الأدنى، ونبه إلى أن المعالجة قد تغيّر الترتيب.",
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
        fix: l("Ask: can a control reduce the likelihood or impact (Mitigate)? Can the risk be shifted (Transfer)? Is it small enough to accept knowingly (Accept)? Or should the activity stop (Avoid)? Most risks get Mitigate.", "اسأل: هل يمكن لضابط أن يقلل الاحتمالية أو الأثر (تخفيف)؟ وهل يمكن تحويل المخاطرة (نقل)؟ وهل هي صغيرة بما يكفي للقبول عن قصد (قبول)؟ أو هل يجب إيقاف النشاط (تجنب)؟ وتُعالج معظم المخاطر بالتخفيف."),
      },
      {
        problem: l("Forgetting to re-score after a control", "نسيان إعادة التسجيل بعد الضابط"),
        fix: l("A control only helps if you reflect it in the score. Lower the relevant slider (often Impact) and re-check the rating to see the risk drop.", "لا يفيد الضابط إلا إذا عكسته في الدرجة. فخفض المؤشر المعني (غالبًا الأثر) وأعد فحص التصنيف لترى انخفاض المخاطرة."),
      },
      {
        problem: l("Unsure whether scanning a real system is authorized", "لست متأكدًا مما إذا كان فحص نظام حقيقي مصرحًا به"),
        fix: l("Stop. Use the display-only simulator or systems you own or are explicitly authorized to scan. Unauthorized scanning is illegal and unethical.", "توقف. فاستعمل محاكٍ العرض أو الأنظمة التي تملكها أو لديك إذن صريح بفحصها. فالفحص غير المصرح به مخالف للقانون وغير أخلاقي."),
      },
    ],
    deliverables: [
      l("A scored risk register with Likelihood, Impact and rating for each risk", "سجل مخاطر مسجل باحتمالية وأثر وتصنيف لكل مخاطرة"),
      l("A chosen treatment for each risk with justifications", "معالجة مختارة لكل مخاطرة مع تبريرات"),
      l("Re-scored risks showing the effect of a control", "مخاطر معاد تسجيلها تُظهر أثر الضابط"),
      l("A prioritised treatment order with reasoning", "ترتيب معالج مرتب مع التعليل"),
      l("A summary linking risk scoring to vulnerability prioritisation", "ملخص يربط تسجيل المخاطر بترتيب الثغرات"),
      l("A note on safety and authorized scanning", "ملاحظة عن السلامة والفحص المصرح به"),
    ],
    rubric: [
      { criterion: l("Correct Likelihood × Impact scoring and ratings", "تسجيل صحيح للاحتمالية × الأثر والتصنيفات"), weight: 25 },
      { criterion: l("Appropriate, justified treatments", "معالجات مناسبة مبررة"), weight: 20 },
      { criterion: l("Correct re-scoring after a control", "إعادة تسجيل صحيح بعد الضابط"), weight: 20 },
      { criterion: l("Sound prioritisation using the sort order", "ترتيب أولويات سليم باستخدام ترتيب التهيئة"), weight: 20 },
      { criterion: l("Clear link to vulnerability management and safety awareness", "ربط واضح بإدارة الثغرات ووعي بالسلامة"), weight: 15 },
    ],
  },
  majorLabId: "lab-09",
  quiz: [
    {
      q: l("What does a CVE identifier provide?", "ماذا يوفّر معرّف CVE؟"),
      options: [
        l("A unique name for a publicly known vulnerability", "اسم فريد لثغرة معروفة علنًا"),
        l("A type of firewall", "نوع من الجدران النارية"),
        l("A malware family", "عائلة برمجيات خبيثة"),
        l("A password standard", "معيار لكلمات المرور"),
      ],
      answer: 0,
      why: l("Common Vulnerabilities and Exposures gives each flaw a standard ID.", "تمنح CVE كل ثغرة رقمًا معياريًا."),
    },
    {
      q: l("A CVSS score of 9.8 is rated…", "درجة CVSS 9.8 تُصنَّف…"),
      options: [
        l("Low", "منخفضة"),
        l("Medium", "متوسطة"),
        l("High", "عالية"),
        l("Critical", "حرجة"),
      ],
      answer: 3,
      why: l("The 9.0–10.0 range is Critical.", "النطاق 9.0–10.0 حرج."),
    },
    {
      q: l("Which factor most strongly raises patch priority?", "أي عامل يرفع أولوية الترقيع أكثر؟"),
      options: [
        l("The vendor's logo", "شعار المورّد"),
        l("Active exploitation in the wild on an Internet-facing asset", "استغلال فعلي في الواقع على أصل مواجه للإنترنت"),
        l("The patch size", "حجم الرقعة"),
        l("The age of the server", "عمر الخادم"),
      ],
      answer: 1,
      why: l("Real attacks plus exposure mean the risk is immediate.", "الهجمات الحقيقية مع التعرض تعني خطرًا فوريًا."),
    },
    {
      q: l("Why are authenticated scans valuable?", "لماذا تفيد الفحوص بمصادقة؟"),
      options: [
        l("They are faster", "أسرع"),
        l("They see installed software and missing patches from the inside", "ترى البرمجيات المثبتة والرقع الناقصة من الداخل"),
        l("They hide results", "تخفي النتائج"),
        l("They need no credentials", "لا تحتاج بيانات دخول"),
      ],
      answer: 1,
      why: l("Logging in reveals local patch levels that remote probing cannot see.", "يكشف الدخول مستويات الترقيع المحلية التي لا يراها الفحص البعيد."),
    },
    {
      q: l("What should be done with an unpatchable end-of-life system that must stay running?", "ماذا يُفعل بنظام منتهي العمر لا يمكن ترقيعه ويجب أن يبقى عاملًا؟"),
      options: [
        l("Ignore it", "تجاهله"),
        l("Isolate it, restrict access, monitor it and plan replacement", "عزله وتقييد الوصول ومراقبته والتخطيط للاستبدال"),
        l("Expose it to the Internet", "تعريضه للإنترنت"),
        l("Disable logging", "تعطيل التسجيل"),
      ],
      answer: 1,
      why: l("Compensating controls reduce risk while replacement is planned.", "الضوابط التعويضية تقلل الخطر ريثما يُخطَّط للاستبدال."),
    },
    {
      q: l("The first step of the vulnerability-management cycle is…", "الخطوة الأولى في دورة إدارة الثغرات هي…"),
      options: [
        l("Patching", "الترقيع"),
        l("Knowing your assets", "معرفة أصولك"),
        l("Buying a firewall", "شراء جدار ناري"),
        l("Hiring a hacker", "توظيف مخترق"),
      ],
      answer: 1,
      why: l("You cannot scan or patch what you do not know exists.", "لا يمكنك فحص أو ترقيع ما لا تعلم بوجوده."),
    },
    {
      q: l("Which metric best shows how responsive a patch process is?", "أي مقياس يوضح أفضل استجابة عملية الترقيع؟"),
      options: [
        l("Number of servers", "عدد الخوادم"),
        l("Time-to-patch for critical vulnerabilities", "زمن الترقيع للثغرات الحرجة"),
        l("Number of employees", "عدد الموظفين"),
        l("Screen resolution", "دقة الشاشة"),
      ],
      answer: 1,
      why: l("It measures how long exposure to serious flaws lasts.", "يقيس مدة التعرض للثغرات الخطيرة."),
    },
    {
      q: l("In a risk register, the risk score is…", "في سجل المخاطر، درجة المخاطرة هي…"),
      options: [
        l("Likelihood × Impact", "الاحتمالية × الأثر"),
        l("Likelihood + Impact", "الاحتمالية + الأثر"),
        l("Likelihood − Impact", "الاحتمالية − الأثر"),
        l("Impact alone", "الأثر وحده"),
      ],
      answer: 0,
      why: l("Risk is scored as the product of likelihood and impact, each on a 1–5 scale.", "تُسجّل المخاطرة كحاصل ضرب الاحتمالية في الأثر، وكل منهما على مقياس 1–5."),
    },
    {
      q: l("A control such as MFA on the phishing risk most directly lowers…", "يخفض ضابط مثل MFA على مخاطر التصيّد مباشرةً…"),
      options: [
        l("The likelihood", "الاحتمالية"),
        l("The impact", "الأثر"),
        l("The CVSS score", "درجة CVSS"),
        l("The asset count", "عدد الأصول"),
      ],
      answer: 1,
      why: l("MFA makes a stolen password less damaging, reducing the impact if phishing succeeds.", "يجعل MFA كلمة المرور المسروقة أقل ضررًا، مخفضًا الأثر إذا نجح التصيّد."),
    },
    {
      q: l("Which treatment means reducing a risk with a control?", "أي معالجة تعني تقليل المخاطرة بضابط؟"),
      options: [
        l("Mitigate", "تخفيف"),
        l("Transfer", "نقل"),
        l("Accept", "قبول"),
        l("Avoid", "تجنب"),
      ],
      answer: 0,
      why: l("Mitigation applies a control to reduce likelihood or impact.", "يطبّق التخفيف ضابطًا لتقليل الاحتمالية أو الأثر."),
    },
    {
      q: l("Why is CVSS alone a poor patch order?", "لماذا لا يصلح CVSS وحده ترتيب الترقيع؟"),
      options: [
        l("It ignores your environment, exposure and whether the flaw is exploited", "يتجاهل بيئتك وتعرضك وما إذا كانت الثغرة تُستغل"),
        l("It is always wrong", "هو دائمًا خاطئ"),
        l("It measures patch size", "يقيس حجم الرقعة"),
        l("It requires no credentials", "لا يحتاج بيانات دخول"),
      ],
      answer: 0,
      why: l("CVSS scores the flaw's technical severity, not the risk to your specific assets.", "يقيِّم CVSS الشدة التقنية للثغرة لا الخطر على أصولك المحددة."),
    },
  ],
  trueFalse: [
    {
      q: l("You can protect assets you do not know exist.", "يمكنك حماية الأصول التي لا تعرف بوجودها."),
      answer: false,
      why: l("Unknown shadow-IT systems are never patched and become easy targets.", "أنظمة تقنية المعلومات الظل المجهولة لا تُرقَّع أبدًا وتصبح أهدافًا سهلة."),
    },
    {
      q: l("CVSS scores technical severity from 0.0 to 10.0.", "يقيّم CVSS الشدة التقنية من 0.0 إلى 10.0."),
      answer: true,
      why: l("CVSS uses a 0.0–10.0 scale with Low/Medium/High/Critical bands.", "يستخدم CVSS مقياس 0.0–10.0 بفئات منخفضة/متوسطة/عالية/حرجة."),
    },
    {
      q: l("A 'Critical' flaw always ranks above a 'High' flaw for patching.", "تأتي ثغرة «حرجة» دائمًا قبل ثغرة «عالية» في ترتيب الترقيع."),
      answer: false,
      why: l("Context matters: an Internet-facing, exploited 'High' flaw can outrank an isolated 'Critical' one.", "يهم السياق: فيمكن لثغرة «عالية» مواجهة للإنترنت ومستغلة أن تسبق ثغرة «حرجة» معزولة."),
    },
    {
      q: l("Authenticated scans see more than unauthenticated scans.", "ترى الفحوص بمصادقة أكثر من الفحوص دونها."),
      answer: true,
      why: l("Logging in reveals installed software and patch levels that remote probing cannot see.", "يكشف الدخول البرمجيات المثبتة ومستويات الترقيع التي لا يراها الفحص البعيد."),
    },
    {
      q: l("End-of-life systems can still be patched normally.", "يمكن ترقيع الأنظمة منتهية العمر بشكل طبيعي."),
      answer: false,
      why: l("Unsupported systems receive no patches and must be isolated or replaced.", "لا تتلقى الأنظمة غير المدعومة رقعًا ويجب عزلها أو استبدالها."),
    },
    {
      q: l("Configuration drift can leave a fully patched system exposed.", "يمكن أن يترك انحراف الإعدادات نظامًا مرقّعًا بالكامل مكشوفًا."),
      answer: true,
      why: l("A patched system that drifted from its secure baseline still has exploitable settings.", "فالنظام المرقّع الذي انحرف عن خط أساسه الآمن لا تزال به إعدادات قابلة للاستغلال."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each CVSS score by its severity band", "صنّف كل درجة CVSS بحسب فئة الشدة"),
      categories: [
        l("Low", "منخفضة"),
        l("Medium", "متوسطة"),
        l("High", "عالية"),
        l("Critical", "حرجة"),
      ],
      items: [
        { text: l("8.5", "8.5"), answer: 2 },
        { text: l("3.2", "3.2"), answer: 0 },
        { text: l("9.8", "9.8"), answer: 3 },
        { text: l("5.4", "5.4"), answer: 1 },
      ],
      why: l("CVSS bands: Low 0.1–3.9, Medium 4.0–6.9, High 7.0–8.9, Critical 9.0–10.0.", "فئات CVSS: منخفضة 0.1–3.9، ومتوسطة 4.0–6.9، وعالية 7.0–8.9، وحرجة 9.0–10.0."),
    },
    {
      prompt: l("Classify each factor by how it raises patch priority", "صنّف كل عامل بحسب كيف يرفع أولوية الترقيع"),
      categories: [
        l("Exploitation", "الاستغلال"),
        l("Exposure", "التعرض"),
        l("Asset value", "قيمة الأصل"),
        l("Compensating controls", "الضوابط التعويضية"),
      ],
      items: [
        { text: l("Listed in KEV with public exploit code", "مدرج في KEV مع شيفرة استغلال علنية"), answer: 0 },
        { text: l("Internet-facing and remote", "مواجه للإنترنت وعن بُعد"), answer: 1 },
        { text: l("Holds sensitive customer data", "يحمل بيانات عملاء حساسة"), answer: 2 },
        { text: l("No segmentation or WAF in place", "لا يوجد تقسيم أو WAF"), answer: 3 },
      ],
      why: l("These four factors — exploitation, exposure, asset value, compensating controls — drive real priority beyond CVSS.", "هذه العوامل الأربعة — الاستغلال والتعرض وقيمة الأصل والضوابط التعويضية — تقود الأولوية الحقيقية بتجاوز CVSS."),
    },
    {
      prompt: l("Match each remediation option to its meaning", "زاوج كل خيار معالجة بمعنى"),
      categories: [
        l("Patch / upgrade", "ترقيع / ترقية"),
        l("Change configuration", "تغيير الإعداد"),
        l("Mitigate / workaround", "تخفيف / حل بديل"),
        l("Accept the risk", "قبول المخاطرة"),
      ],
      items: [
        { text: l("Install the vendor's fix", "تثبيت إصلاح المورّد"), answer: 0 },
        { text: l("Disable the feature or block the port", "تعطيل الميزة أو حجب المنفذ"), answer: 2 },
        { text: l("Take the risk with owner approval and expiry", "القبول بالخطر بموافقة المالك وتاريخ انتهاء"), answer: 3 },
        { text: l("Tighten settings to the secure baseline", "تشديد الإعدادات إلى خط الأساس الآمن"), answer: 1 },
      ],
      why: l("These are four remediation options in the vulnerability-management cycle.", "هذه أربعة خيارات للمعالجة في دورة إدارة الثغرات."),
    },
    {
      prompt: l("Classify each risk-treatment choice by its meaning", "صنّف كل اختيار معالجة مخاطر بحسب معناه"),
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
  ],
  scenarios: [
    {
      scenario: l(
        "A scan reports a 'Critical' flaw (CVSS 9.8) on an isolated test machine with no real data, and a 'High' flaw (CVSS 7.5) on an Internet-facing web server with public exploit code.",
        "يُبلغ فحص عن ثغرة «حرجة» (CVSS 9.8) على جهاز اختبار معزول بلا بيانات حقيقية، وثغرة «عالية» (CVSS 7.5) على خادم ويب مواجه للإنترنت باستغلال علني.",
      ),
      question: l("Which do you fix first and why?", "أيهما تُصلح أولًا ولماذا؟"),
      options: [
        l("The 'Critical' test-machine flaw first, because it has the higher score", "ثغرة جهاز الاختبار «الحرجة» أولًا لأنها الدرجة الأعلى"),
        l("The 'High' Internet-facing flaw first: it is reachable and being exploited", "ثغرة «العالية» المواجهة للإنترنت أولًا: فهي مكشوفة وتُستغل"),
        l("Neither; wait for the next scan", "لا هذا ولا ذاك؛ انتظر الفحص التالي"),
        l("Both at once, regardless of context", "كلاهما معًا بغض النظر عن السياق"),
      ],
      answer: 1,
      why: l("Exposure and active exploitation outweigh the raw CVSS score for an isolated system.", "يتفوق التعرض والاستغلال الفعلي على درجة CVSS الخام للنظام المعزول."),
    },
    {
      scenario: l(
        "A company discovers an unknown server — shadow IT — running unsupported software on its network. It was never inventoried and never patched.",
        "تكتشف شركة خادمًا مجهولًا — تقنية معلومات ظل — يشغّل برمجيات غير مدعومة على شبكتها. ولم يُحصَ ولم يُرقَّع أبدًا.",
      ),
      question: l("What is the root problem?", "ما المشكلة الجذرية؟"),
      options: [
        l("The server is too old", "الخادم قديم جدًا"),
        l("Missing asset inventory: unknown systems are never patched", "غياب حصر الأصول: فالأنظمة المجهولة لا تُرقَّع أبدًا"),
        l("The scanner is broken", "الماسح معطل"),
        l("There is no firewall", "لا يوجد جدار ناري"),
      ],
      answer: 1,
      why: l("Without an inventory you cannot patch what you do not know exists.", "بدون حصر لا يمكنك ترقيع ما لا تعلم بوجوده."),
    },
    {
      scenario: l(
        "A system running an end-of-life operating system must keep running for an old application, and a new critical flaw is announced for it with no patch available.",
        "يجب أن يبقى نظام يشغّل نظام تشغيل منتهي العمر عاملًا لتطبيق قديم، ويُعلن عن ثغرة حرجة جديدة له دون رقعة متاحة.",
      ),
      question: l("What should you do?", "ماذا يجب أن تفعل؟"),
      options: [
        l("Ignore it until it fails", "تجاهله حتى يتعطل"),
        l("Isolate it, restrict access, monitor it and plan replacement", "عزله وتقييد الوصول ومراقبته والتخطيط للاستبدال"),
        l("Expose it to the Internet", "تعريضه للإنترنت"),
        l("Delete the application immediately", "حذف التطبيق فورًا"),
      ],
      answer: 1,
      why: l("Compensating controls reduce risk while replacement is planned.", "الضوابط التعويضية تقلل الخطر ريثما يُخطَّط للاستبدال."),
    },
  ],
  practicalChecks: [
    {
      task: l("Explain in one sentence why CVSS alone is insufficient for patch order", "اشرح في جملة واحدة سبب عدم كفاية CVSS وحده لترتيب الترقيع"),
      expected: l("CVSS measures the flaw's technical severity but ignores your exposure, asset value and whether the flaw is actually exploited.", "يقيس CVSS الشدة التقنية للثغرة لكنه يتجاهل تعرضك وقيمة أصلك وما إذا كانت الثغرة تُستغل فعلًا."),
      hint: l("Think about what CVSS does not know about your environment.", "فكّر في ما لا يعرفه CVSS عن بيئتك."),
    },
    {
      task: l("State the two values multiplied in a risk register and the Critical threshold", "اذكر القيمتين اللتين تُضاعفان في سجل المخاطر وعتبة «الحرج»"),
      expected: l("Risk = Likelihood × Impact (each 1–5); Critical is 17 or higher.", "الخطر = الاحتمالية × الأثر (كل منهما 1–5)؛ و«الحرج» 17 فما فوق."),
    },
  ],
  homework: {
    title: l("Homework 14 — Mini patch audit and risk register", "الواجب 14 — تدقيق ترقيع مصغّر وسجل مخاطر"),
    tasks: [
      l("List every device you use (phone, laptop, tablet, router, smart TV, console) with its OS/firmware version.", "اذكر كل جهاز تستخدمه (هاتف، حاسوب، لوحي، موجّه، تلفاز ذكي، منصة ألعاب) مع إصدار نظامه/برمجيته."),
      l("Check each for pending updates and whether it still receives security updates (look up end-of-support dates).", "تحقق من كل منها لوجود تحديثات معلقة وهل لا يزال يتلقى تحديثات أمنية (ابحث عن تواريخ انتهاء الدعم)."),
      l("Visit CISA's Known Exploited Vulnerabilities catalogue and note two entries affecting products you use or know.", "زر كتالوج CISA للثغرات المستغلة المعروفة ودوّن مدخلين يمسّان منتجات تستخدمها أو تعرفها."),
      l("Create a small risk register: three risks you face, each scored Likelihood × Impact, with a chosen treatment.", "أنشئ سجل مخاطر صغيرًا: ثلاث مخاطر تواجهها، تُسجّل كل منها كاحتمالية × أثر، مع معالجة مختارة."),
    ],
    deliverable: l(
      "A device register with update status, two KEV entries, and a three-risk register with scores and treatments.",
      "سجل أجهزة بحالة التحديث ومدخلان من KEV وسجل مخاطر من ثلاث مخاطر بدرجات ومعالجات.",
    ),
    criteria: [
      l("Complete device inventory with versions and update status", "حصر أجهزة كامل بالإصدارات وحالة التحديث"),
      l("Accurate end-of-support check", "فحص دقيق لانتهاء الدعم"),
      l("Two relevant KEV entries", "مدخلان ذا صلة من KEV"),
      l("Correct risk scoring and appropriate treatments", "تسجيل مخاطر صحيح ومعالجات مناسبة"),
    ],
    challenge: l(
      "Optional challenge: research one real vulnerability that was widely exploited despite a patch being available, and explain how risk-based prioritisation would have prevented the breach.",
      "مهمة تحدٍ اختيارية: ابحث في ثغرة حقيقية استُغلت على نطاق واسع رغم توفر رقعة، واشرح كيف كان ترتيب الأولويات القائم على المخاطر سيمنع الاختراق.",
    ),
  },
  refs: [
    { title: "Known Exploited Vulnerabilities Catalog", org: "CISA", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" },
    { title: "National Vulnerability Database", org: "NIST", url: "https://nvd.nist.gov/" },
    { title: "CVSS specification", org: "FIRST", url: "https://www.first.org/cvss/" },
    { title: "Guide to Enterprise Patch Management Planning (SP 800-40 Rev.4)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/40/r4/final" },
    { title: "Vulnerability management guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/vulnerability-management" },
  ],
  terms: [
    { term: l("Vulnerability", "الثغرة"), def: l("A weakness that can be exploited to compromise security.", "ضعف يمكن استغلاله لانتهاك الأمن.") },
    { term: l("Asset inventory", "حصر الأصول"), def: l("A current list of devices, software, cloud services and owners.", "قائمة محدّثة بالأجهزة والبرمجيات والخدمات السحابية والمالكين.") },
    { term: l("Shadow IT", "تقنية المعلومات الظل"), def: l("Unknown systems and services not managed by the organisation.", "أنظمة وخدمات مجهولة لا تديرها المنظمة.") },
    { term: l("CVE", "معرّف الثغرات الشائعة"), def: l("Standard identifier for a publicly known vulnerability.", "معرّف قياسي لثغرة معروفة علنًا.") },
    { term: l("CVSS", "نظام تسجيل الثغرات"), def: l("Scoring system rating technical severity from 0 to 10.", "نظام تقييم يعطي الشدة التقنية من 0 إلى 10.") },
    { term: l("KEV", "كتالوج الثغرات المستغلة"), def: l("CISA's list of vulnerabilities known to be exploited in the wild.", "قائمة CISA للثغرات المعروف استغلالها في الواقع.") },
    { term: l("EPSS", "احتمالية استغلال الثغرة"), def: l("Estimated probability that a flaw will be exploited in the next 30 days.", "احتمالية تقديرية لاستغلال ثغرة خلال الثلاثين يومًا القادمة.") },
    { term: l("Patch", "الرقعة"), def: l("A software update that fixes flaws.", "تحديث برمجي يصلح الثغرات.") },
    { term: l("Zero-day", "ثغرة اليوم الصفري"), def: l("A flaw exploited before a fix is available.", "ثغرة تُستغل قبل توفر إصلاح.") },
    { term: l("Time-to-patch", "زمن الترقيع"), def: l("How long it takes to apply a fix after it is available.", "المدة التي يستغرقها تطبيق إصلاح بعد توفره.") },
    { term: l("End-of-life (EOL)", "منتهي العمر"), def: l("A system that no longer receives security updates or patches.", "نظام لا يتلقى تحديثات أمنية أو رقعًا.") },
    { term: l("Configuration baseline", "خط أساس الإعدادات"), def: l("An approved, secure starting state for a system's settings.", "حالة انطلاق معتمدة وآمنة لإعدادات نظام.") },
    { term: l("Configuration drift", "انحراف الإعدادات"), def: l("Gradual deviation of systems from their approved secure baseline.", "ابتعاد الأنظمة تدريجيًا عن خط الأساس الآمن المعتمد.") },
    { term: l("CIS Benchmarks", "معايير CIS"), def: l("Community-hardened configuration standards for secure setups.", "معايير ضبط مجتمعية مُصلّبة لإعدادات آمنة.") },
    { term: l("EDR", "كشف النقاط الطرفية والاستجابة"), def: l("Endpoint detection and response: monitoring and investigation of endpoints.", "كشف النقاط الطرفية والاستجابة: مراقبة النقاط الطرفية والتحقيق فيها.") },
    { term: l("MDM", "إدارة الأجهزة المحمولة"), def: l("Mobile device management: enforcing policy on phones and tablets.", "إدارة الأجهزة المحمولة: فرض السياسة على الهواتف والأجهزة اللوحية.") },
    { term: l("Application control", "التحكم بالتطبيقات"), def: l("Allowing only approved software to run.", "السماح فقط للبرمجيات المعتمدة بالعمل.") },
    { term: l("Compensating controls", "الضوابط التعويضية"), def: l("Alternative controls that reduce risk when a fix is not available.", "ضوابط بديلة تقلل الخطر عندما لا يكون الإصلاح متاحًا.") },
    { term: l("Risk register", "سجل المخاطر"), def: l("A list of risks scored by likelihood and impact, with treatments.", "قائمة مخاطر تُسجّل بالاحتمالية والأثر، مع معالجات.") },
    { term: l("Likelihood", "الاحتمالية"), def: l("How likely a risk is to occur, often scored 1–5.", "كيفية احتمال وقوع المخاطرة، تُسجّل كثيرًا 1–5.") },
    { term: l("Impact", "الأثر"), def: l("The consequence if a risk occurs, often scored 1–5.", "النتيجة إذا وقعت المخاطرة، تُسجّل كثيرًا 1–5.") },
    { term: l("Risk treatment", "معالجة الخطر"), def: l("The action taken on a risk: mitigate, transfer, accept or avoid.", "الإجراء المتخذ بشأن المخاطرة: تخفيف أو نقل أو قبول أو تجنب.") },
    { term: l("Mitigate", "تخفيف"), def: l("Reduce likelihood or impact with a control.", "تقليل الاحتمالية أو الأثر بضابط.") },
    { term: l("Transfer", "نقل"), def: l("Shift the risk to another party, e.g. insurance or outsourcing.", "تحويل المخاطرة إلى طرف آخر كالتأمين أو الاستعانة بجهة خارجية.") },
    { term: l("Accept", "قبول"), def: l("Take the risk knowingly, often with approval and expiry.", "القبول بالخطر عن قصد، كثيرًا بموافقة وتاريخ انتهاء.") },
    { term: l("Avoid", "تجنب"), def: l("Stop the activity that causes the risk.", "إيقاف النشاط المسبب للمخاطرة."), example: l("Abandoning a risky feature rather than shipping it.", "التخلي عن ميزة معرضة للخطر بدل إصدارها.") },
  ],
};
