import { l, type Session } from "../types";

export const s15: Session = {
  id: 15,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Security Monitoring and SIEM: Logging, Detection and the SOC",
    "المراقبة الأمنية وSIEM: التسجيل والكشف ومركز العمليات الأمنية",
  ),
  summary: l(
    "What to log, how logs become alerts, how a SIEM collects, normalises, correlates and enriches events, how a Security Operations Centre triages them, and how to read an authentication log to spot and respond to a brute-force attack.",
    "ماذا نسجّل، وكيف تتحول السجلات إلى تنبيهات، وكيف يجمع SIEM الأحداث ويوحّدها ويربطها ويثريها، وكيف يفرزها مركز عمليات الأمن، وكيف نقرأ سجل مصادقة لاكتشاف هجوم تخمين والاستجابة له.",
  ),
  overview: l(
    "Prevention eventually fails, so organisations must also detect and investigate. This session covers security monitoring: what to log, how a Security Information and Event Management (SIEM) platform collects, normalises, correlates and enriches log data, how a Security Operations Centre (SOC) triages alerts, and how to read an authentication log to spot a brute-force attack and decide whether a server has been compromised. You will learn key log sources, the SIEM pipeline, detection rules and playbooks, and log integrity and retention. The session closes with a lab where you use a log analyzer to investigate a sample SSH brute-force attempt.",
    "تفشل الوقاية في النهاية لذا يجب أن تكشف المؤسسات وتحقق أيضًا. وتغطي هذه الجلسة المراقبة الأمنية: ماذا نسجّل، وكيف يجمع منصة إدارة معلومات وأحداث الأمن (SIEM) بيانات السجلات ويوحّدها ويربطها ويثريها، وكيف يفرز مركز عمليات الأمن (SOC) التنبيهات، وكيف نقرأ سجل مصادقة لاكتشاف هجوم تخمين وتقرير هل اختُرق الخادم. ستتعلم مصادر السجلات الرئيسية، ومسار SIEM، وقواعد الكشف وأدلة التشغيل، وسلامة السجلات والاحتفاظ بها. وتنتهي الجلسة بمختبر تستخدم فيه محلّل سجلات للتحقيق في محاولة تخمين SSH عينة.",
  ),
  whyItMatters: l(
    "Studies repeatedly show that intruders stay undiscovered for weeks or months when nobody is watching, and that many victims learn of a breach from third parties rather than from their own monitoring. Logs are the record of what happened — who logged in, from where, what was changed, what connected to what. Without them, incident response becomes guesswork and compliance audits fail. Monitoring turns prevention's inevitable failures into fast detection and a defensible investigation.",
    "تُظهر الدراسات مرارًا أن المتسللين يبقون دون اكتشاف أسابيع أو شهورًا حين لا يراقب أحد، وأن كثيرًا من الضحايا يعلمون بالاختراق من أطراف خارجية لا من مراقبتهم. والسجلات هي سجل ما حدث — من سجّل الدخول ومن أين وما الذي تغيّر وما الذي اتصل بما. وبدونها تصبح الاستجابة للحوادث تخمينًا وتفشل عمليات تدقيق الامتثال. وتُحوّل المراقبة إخفاقات الوقاية الحتمية إلى كشف سريع وتحقيق قابل للدفاع.",
  ),
  prerequisites: [
    l(
      "Session 14, Vulnerability Management: how patching and endpoint protection reduce the attacks you must detect.",
      "الجلسة 14، إدارة الثغرات: كيف يقلل الترقيع وحماية النقاط الطرفية الهجمات التي يجب كشفها.",
    ),
    l(
      "Session 13, IAM: how authentication and access events appear in logs.",
      "الجلسة 13، إدارة الهوية والوصول: كيف تظهر أحداث المصادقة والوصول في السجلات.",
    ),
    l(
      "A legal and ethical mindset: analyse only logs you are authorised to access; real logs contain sensitive personal data.",
      "عقلية قانونية وأخلاقية: حلّل فقط السجلات التي لديك إذن بالوصول إليها؛ فالسجلات الحقيقية تحتوي بيانات شخصية حساسة.",
    ),
  ],
  objectives: [
    l(
      "Explain why logging and monitoring are essential for detection and investigation.",
      "شرح لماذا يعد التسجيل والمراقبة أساسيين للكشف والتحقيق.",
    ),
    l(
      "List key log sources and what each reveals.",
      "ذكر مصادر السجلات الرئيسية وما يكشفه كل منها.",
    ),
    l(
      "Describe how a SIEM collects, normalises, correlates and alerts.",
      "وصف كيف يجمع SIEM السجلات ويوحّدها ويربطها وينبّه.",
    ),
    l(
      "Explain SOC triage, alert fatigue and the role of playbooks.",
      "شرح فرز مركز العمليات الأمنية وإرهاق التنبيهات ودور أدلة التشغيل.",
    ),
    l(
      "Analyse an authentication log for brute-force indicators and triage the alert.",
      "تحليل سجل مصادقة لمؤشرات التخمين المكثف وفرز التنبيه.",
    ),
    l(
      "Explain log integrity, retention and detection-engineering basics.",
      "شرح سلامة السجلات والاحتفاظ بها وأساسيات هندسة الكشف.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Why monitoring matters", "لماذا تهم المراقبة"), minutes: 12 },
    { label: l("What to log", "ماذا نسجّل"), minutes: 13 },
    { label: l("The SIEM pipeline", "مسار SIEM"), minutes: 13 },
    { label: l("The SOC and triage", "مركز العمليات الأمنية والفرز"), minutes: 12 },
    { label: l("Reading a log: brute-force attack", "قراءة سجل: هجوم التخمين"), minutes: 12 },
    { label: l("Detection engineering and log integrity", "هندسة الكشف وسلامة السجلات"), minutes: 11 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 12 },
  ],
  introduction: l(
    "Prevention eventually fails, so organisations must also detect and investigate. This session covers security monitoring: what to log, how a SIEM collects, normalises, correlates and enriches log data, how a SOC triages alerts, and how to read an authentication log to spot a brute-force attack. You will learn key log sources, the SIEM pipeline, detection rules and playbooks, and log integrity and retention. The session closes with a lab where you use a log analyzer to investigate a sample SSH brute-force attempt.",
    "تفشل الوقاية في النهاية لذا يجب أن تكشف المؤسسات وتحقق أيضًا. وتغطي هذه الجلسة المراقبة الأمنية: ماذا نسجّل، وكيف يجمع SIEM بيانات السجلات ويوحّدها ويربطها ويثريها، وكيف يفرز SOC التنبيهات، وكيف نقرأ سجل مصادقة لاكتشاف هجوم تخمين. ستتعلم مصادر السجلات الرئيسية، ومسار SIEM، وقواعد الكشف وأدلة التشغيل، وسلامة السجلات والاحتفاظ بها. وتنتهي الجلسة بمختبر تستخدم فيه محلّل سجلات للتحقيق في محاولة تخمين SSH عينة.",
  ),
  sections: [
    {
      h: l("1. Why monitoring matters", "1. لماذا تهم المراقبة"),
      p: [
        l(
          "Prevention eventually fails, so organisations must also detect and investigate. Studies repeatedly show that intruders stay undiscovered for weeks or months when nobody is watching, and that many victims learn of a breach from third parties. Logs are the record of what happened: who logged in, from where, what was changed, what connected to what. Without them, incident response becomes guesswork and compliance audits fail. Security monitoring is the continuous collection and analysis of that evidence to find malicious or abnormal activity quickly.",
          "تفشل الوقاية في النهاية لذا يجب أن تكشف المؤسسات وتحقق أيضًا. وتُظهر الدراسات مرارًا أن المتسللين يبقون دون اكتشاف أسابيع أو شهورًا حين لا يراقب أحد، وأن كثيرًا من الضحايا يعلمون بالاختراق من أطراف خارجية. والسجلات هي سجل ما حدث: من سجّل الدخول ومن أين وما الذي تغيّر وما الذي اتصل بما. وبدونها تصبح الاستجابة للحوادث تخمينًا وتفشل عمليات تدقيق الامتثال. والمراقبة الأمنية هي الجمع والتحليل المستمران لهذه الأدلة لإيجاد النشاط الخبيث أو الشاذ بسرعة.",
        ),
        l(
          "Two key metrics: MTTD (mean time to detect) and MTTR (mean time to respond and recover). The goal is to shrink both, because the shorter the dwell time — how long an attacker stays undetected — the less damage they do. A strong monitoring programme treats detection as a continuous process, not a one-time setup.",
          "مقياسان رئيسيان: MTTD (متوسط زمن الكشف) وMTTR (متوسط زمن الاستجابة والتعافي). والهدف تقليلهما، لأن كلما قصر زمن البقاء — أي المدة التي يبقى فيها المهاجم دون كشف — قلّ ضرره. ويعامل البرنامج الراسخ للمراقبة الكشف كعملية مستمرة لا إعدادًا يُنجز مرة واحدة.",
        ),
      ],
    },
    {
      h: l("2. What to log", "2. ماذا نسجّل"),
      p: [l("Collect logs from the places where attacks leave traces:", "اجمع السجلات من الأماكن التي تترك فيها الهجمات آثارًا:")],
      table: {
        head: [l("Source", "المصدر"), l("Example events", "أحداث نموذجية"), l("Detects", "يكشف")],
        rows: [
          [l("Authentication / identity", "المصادقة / الهوية"), l("Logins, failures, MFA prompts, account lockouts, privilege changes", "تسجيلات الدخول والفشل ومطالبات MFA وقفل الحسابات وتغيير الصلاحيات"), l("Brute force, stolen credentials, impossible travel", "التخمين، بيانات الدخول المسروقة، السفر المستحيل")],
          [l("Endpoints / EDR", "النقاط الطرفية / EDR"), l("Process starts, new services, script execution", "بدء العمليات والخدمات الجديدة وتنفيذ السكربتات"), l("Malware, persistence, lateral movement", "البرمجيات الخبيثة، الاستمرارية، الحركة الجانبية")],
          [l("Firewall / network", "الجدار الناري / الشبكة"), l("Allowed and blocked connections, unusual destinations, data volume", "الاتصالات المسموحة والمحجوبة والوجهات غير المعتادة وحجم البيانات"), l("Scanning, C2 traffic, exfiltration", "المسح وحركة التحكم وتسريب البيانات")],
          [l("DNS / proxy / web", "DNS / الوكيل / الويب"), l("Domain lookups, URLs, categories", "استعلامات النطاقات والعناوين وتصنيفاتها"), l("Phishing, malware callbacks, tunnelling", "التصيّد، ارتدادات البرمجيات الخبيثة، الأنفاق")],
          [l("E-mail gateway", "بوابة البريد"), l("Sender, attachments, URLs, verdicts", "المرسل والمرفقات والروابط والأحكام"), l("Phishing campaigns", "حملات التصيّد")],
          [l("Cloud & applications", "السحابة والتطبيقات"), l("API calls, config changes, admin actions, application errors", "استدعاءات API وتغييرات الإعدادات وإجراءات المدير وأخطاء التطبيق"), l("Misconfiguration, abuse of keys, injection attempts", "سوء الإعداد، إساءة استخدام المفاتيح، محاولات الحقن")],
        ],
      },
      callout: {
        kind: "tip",
        text: l("Make sure clocks are synchronised (NTP) and timestamps use one time zone, otherwise events from different systems cannot be put in order. Protect logs from tampering: send them to a central, write-once store, because attackers delete local logs.", "تأكد من مزامنة الساعات (NTP) وتوحيد المنطقة الزمنية وإلا تعذّر ترتيب أحداث الأنظمة المختلفة. واحمِ السجلات من العبث: أرسلها إلى مخزن مركزي للكتابة مرة واحدة لأن المهاجمين يحذفون السجلات المحلية."),
      },
    },
    {
      h: l("3. The SIEM pipeline", "3. مسار SIEM"),
      p: [
        l(
          "A Security Information and Event Management (SIEM) platform collects logs from all sources, normalises them to a common format, stores them for search and compliance, correlates events with rules and analytics (for example '10 failed logins followed by a success from the same IP within 5 minutes'), enriches them with threat intelligence (known-bad IPs, domains and file hashes — indicators of compromise, IOCs) and raises alerts. SOAR tools can automate routine responses such as disabling an account or isolating a host.",
          "تجمع منصة إدارة معلومات وأحداث الأمن (SIEM) السجلات من كل المصادر وتوحّدها في صيغة مشتركة وتخزنها للبحث والامتثال وتربط الأحداث بقواعد وتحليلات (مثل «10 محاولات دخول فاشلة تتبعها محاولة ناجحة من العنوان نفسه خلال 5 دقائق») وتثريها باستخبارات التهديدات (عناوين ونطاقات وتجزئات ملفات خبيثة معروفة — مؤشرات الاختراق IOC) وتصدر تنبيهات. وتستطيع أدوات SOAR أتمتة الاستجابات الروتينية مثل تعطيل حساب أو عزل جهاز.",
        ),
        l(
          "The pipeline turns raw noise into meaning. Each stage reduces volume and adds context: millions of individual events are collected and normalised, then correlated and enriched, and finally emerge as a handful of prioritised alerts that analysts can act on. A well-tuned SIEM is not a firewall or a patch tool — it is the nervous system that tells you when prevention has failed.",
          "يحوّل المسار الضوضاء الخام إلى معنى. فتُقلّل كل مرحلة الحجم وتضيف السياق: تُجمع ملايين الأحداث الفردية وتُوحّد، ثم تُربط وتُثري، ثم تنبثق أخيرًا كحفنة من التنبيهات المرتبة التي يستطيع المحللون التصرف بشأنها. وSIEM المضبوط جيدًا ليس جدارًا ناريًا أو أداة ترقيع — بل هو الجهاز العصبي الذي يخبرك أن الوقاية قد فشلت.",
        ),
      ],
    },
    {
      h: l("4. The SOC and triage", "4. مركز العمليات الأمنية والفرز"),
      p: [
        l(
          "A Security Operations Centre (SOC) staffs the process. Tier 1 analysts triage alerts: is it real or a false positive? Tier 2 investigates confirmed incidents in depth, and Tier 3 / threat hunters proactively search for hidden attackers and improve detection rules. Alert fatigue is the enemy: too many low-quality alerts hide the real ones, so rules must be tuned continuously and every alert must have a documented playbook.",
          "يضم مركز عمليات الأمن (SOC) الكوادر المشغّلة. يفرز محللو المستوى 1 التنبيهات: هل هو حقيقي أم إيجابي كاذب؟ ويحقق المستوى 2 بعمق في الحوادث المؤكدة، ويبحث المستوى 3 / صيادو التهديدات استباقيًا عن مهاجمين مخفيين ويحسّنون قواعد الكشف. وإرهاق التنبيهات هو العدو: فكثرة التنبيهات الرديئة تخفي الحقيقية، لذا يجب ضبط القواعد باستمرار ويجب أن يكون لكل تنبيه دليل تشغيل موثق.",
        ),
        l(
          "A playbook is a written, repeatable procedure for a given alert: the questions to ask, the containment action, the escalation criteria and the documentation to record. Playbooks turn triage from improvisation into a repeatable, auditable process and let SOAR automate the routine steps. Good SOCs measure not just how many alerts they handle but how quickly and accurately they act.",
          "دليل التشغيل هو إجراء مكتوب وقابل للتكرار لتنبيه معين: الأسئلة التي تُطرح وإجراء الاحتواء ومعايير التصعيد والوثائق التي تُسجّل. وتحوّل أدلة التشغيل الفرز من اجتهاد فردي إلى عملية قابلة للتكرار والتدقيق وتتيح لـ SOAR أتمتة الخطوات الروتينية. ويقيس مركز العمليات الأمنية الجيد ليس فقط عدد التنبيهات التي يعالجها بل سرعة ودقة تصرفه.",
        ),
      ],
    },
    {
      h: l("5. Reading a log: spotting a brute-force attack", "5. قراءة سجل: اكتشاف هجوم التخمين"),
      p: [
        l(
          "A typical SSH authentication log line contains time, host, service, the outcome (Failed/Accepted), the account name and the source IP. Brute-force patterns: many failures from one source in a short period; many different usernames tried (root, admin, test, oracle); failures from many sources against one account (a distributed attack); and, most critically, a success after a long run of failures from the same IP — the attacker probably guessed the password.",
          "يحتوي سطر سجل مصادقة SSH نموذجي على الوقت والمضيف والخدمة والنتيجة (Failed/Accepted) واسم الحساب وعنوان IP المصدر. وأنماط التخمين: فشل كثير من مصدر واحد في فترة قصيرة؛ وتجربة أسماء مستخدمين كثيرة مختلفة (root وadmin وtest وoracle)؛ وفشل من مصادر كثيرة ضد حساب واحد (هجوم موزّع)؛ والأخطر نجاح بعد سلسلة طويلة من الفشل من العنوان نفسه — إذ على الأرجح خمّن المهاجم كلمة المرور.",
        ),
        l(
          "Triage questions: Who is the account and is the source expected? Was the login successful, and what happened next (new accounts, privilege changes, outbound transfers)? Is the IP on a threat-intelligence list? What is the business impact? Then act: block the source, force a password reset and MFA, check the account's recent activity, escalate to incident response if compromise is likely, and record what you did. Preventive follow-up: disable password SSH in favour of keys, restrict by source IP or VPN, and enable rate-limiting.",
          "أسئلة الفرز: من صاحب الحساب وهل المصدر متوقع؟ وهل نجح الدخول وماذا حدث بعده (حسابات جديدة، تغيير صلاحيات، تحويلات خارجة)؟ وهل العنوان في قائمة استخبارات تهديدات؟ وما الأثر على الأعمال؟ ثم تصرّف: احجب المصدر وأجبر على إعادة تعيين كلمة المرور وMFA وافحص نشاط الحساب الأخير وصعّد إلى الاستجابة للحوادث إن كان الاختراق مرجحًا ودوّن ما فعلته. والمتابعة الوقائية: عطّل كلمة مرور SSH لصالح المفاتيح وقيّد بحسب IP المصدر أو VPN وفعّل تحديد المعدل.",
        ),
      ],
    },
    {
      h: l("6. Detection engineering", "6. هندسة الكشف"),
      p: [
        l(
          "Detection engineering is the discipline of building, testing and tuning the rules and analytics that turn logs into reliable alerts. A good rule is specific, tested against real and benign traffic to limit false positives, and has a clear owner and playbook. Detections should cover the attacker's lifecycle — initial access, persistence, credential access, lateral movement, collection and exfiltration — not just the first step. Rules are never finished: they must be reviewed as threats and the environment change.",
          "هندسة الكشف هي فن بناء واختبار وضبط القواعد والتحليلات التي تُحوّل السجلات إلى تنبيهات موثوقة. فالقاعدة الجيدة دقيقة، تُختبر على حركة حقيقية وسليمة للحد من الإيجابيات الكاذبة، ولها مالك واضح ودليل تشغيل. وينبغي أن تغطي الكشفات دورة حياة المهاجم — الدخول الأولي والاستمرارية و الوصول إلى بيانات الدخول والحركة الجانبية والتجميع وتسريب البيانات — لا الخطوة الأولى فقط. ولا تُنجز القواعد أبدًا: بل يجب مراجعتها مع تغير التهديدات والبيئة.",
        ),
      ],
    },
    {
      h: l("7. Log integrity and retention", "7. سلامة السجلات والاحتفاظ بها"),
      p: [
        l(
          "Log integrity and retention complete the picture. Send logs to a central, tamper-resistant, write-once store so attackers cannot delete or alter them; keep timestamps synchronised; and retain logs long enough to investigate and meet compliance. Protect logs as sensitive data — they contain usernames, IPs and sometimes personal data — and control who can read them.",
          "تكمل سلامة السجلات والاحتفاظ بها الصورة. فأرسل السجلات إلى مخزن مركزي مقاومة للعبث للكتابة مرة واحدة كي لا يحذف المهاجمون أو يعدّلوا؛ واجعل الطوابع الزمنية متزامنة؛ واحتفظ بالسجلات لمدة تكفي للتحقيق وتلبي الامتثال. واحمِ السجلات كبيانات حساسة — فهي تحتوي أسماء مستخدمين وعناوين IP وأحيانًا بيانات شخصية — وقِّد من يستطيع قراءتها.",
        ),
      ],
    },
    {
      h: l("8. Bringing it together: from logs to response", "8. جمع الأفكار: من السجلات إلى الاستجابة"),
      p: [
        l(
          "Monitoring works as a chain: collect the right logs, normalise and protect them, correlate and enrich with rules and threat intelligence, triage alerts with playbooks, and respond and improve. Each link depends on the others — logs without correlation are noise, correlation without triage is a false sense of urgency, and triage without response leaves the attacker in place. The goal is to shorten MTTD and MTTR and shrink attacker dwell time.",
          "تعمل المراقبة كسلسلة: اجمع السجلات الصحيحة، ووحّدها وحمِها، واربطها وثرّها بالقواعد واستخبارات التهديدات، وافرتز التنبيهات بأدلة التشغيل، واستجب وحسّن. ويعتمد كل حلقة على الأخرى — فالسجلات دون ربط ضوضاء، والربط دون فرز إحساس زائف بالإلحاح، والفرز دون استجابة يترك المهاجم في مكانه. والهدف تقليل MTTD وMTTR وتقصير زمن بقاء المهاجم.",
        ),
        l(
          "As you practise, remember the boundary: analyse only logs you are authorised to access. Real logs contain usernames, IPs and personal data, so handle them as sensitive. The log analyzer in the lab uses a fabricated sample with documentation-reserved IP addresses — it exists to build detection intuition safely, not to investigate a real system.",
          "عند التدرّب تذكّر الحد: حلل فقط السجلات التي لديك إذن بالوصول إليها. فالسجلات الحقيقية تحتوي أسماء مستخدمين وعناوين IP وبيانات شخصية، فتعامل معها كحساسة. ومحلّل السجلات في المختبر يستخدم عينة مصطنعة بعناوين IP محجوزة للتوثيق — وهو موجود لبناء فهم الكشف بأمان لا للتحقيق في نظام حقيقي.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "A SIEM rule fires when '10 failed logins followed by a success from the same IP within 5 minutes'. The rule correlates events across the authentication logs, enriches the IP with threat intelligence, and raises a high-priority alert to the SOC — turning raw log lines into a single, actionable signal.",
      "تُفعّل قاعدة SIEM عند «10 محاولات دخول فاشلة تتبعها محاولة ناجحة من العنوان نفسه خلال 5 دقائق». وتربط القاعدة الأحداث عبر سجلات المصادقة وتُثري العنوان باستخبارات التهديدات وتصدر تنبيهًا عاجلًا إلى SOC — محوّلة أسطر السجل الخام إلى إشارة واحدة قابلة للتنفيذ.",
    ),
    l(
      "A single failed login from a user is normal. But twenty failures from one IP trying root, admin, test and oracle, followed by a success for 'admin', is a brute-force attack that has likely succeeded — a signal that demands immediate triage and containment, not just a routine log entry.",
      "تكون محاولة دخول فاشلة واحدة من مستخدم أمرًا طبيعيًا. لكن عشرين محاولة فاشلة من عنوان واحد يجرّر root وadmin وtest وoracle ثم نجاح لـ admin هو هجوم تخمين ربما نجح — إشارة تستدعي فرزًا واحتواءً فوريًا لا مجرد مدخل سجل روتيني.",
    ),
    l(
      "An attacker who compromises a host deletes its local logs to hide tracks. Because the organisation forwards logs to a central, write-once store, the evidence survives — and the investigation can reconstruct what the attacker did from the preserved records.",
      "المهاجم الذي يخترق جهازًا يحذف سجلاته المحلية لإخفاء آثاره. ولأن المؤسسة تُرسِل السجلات إلى مخزن مركزي للكتابة مرة واحدة تبقى الأدلة — ويمكن للتحقيق إعادة بناء ما فعله المهاجم من السجلات المحفوظة.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A company learns of a breach from a third party, not its own monitoring. Investigation shows the attacker had been inside for four months, because the organisation collected few logs and never correlated them. A SIEM with tuned rules and a SOC would have detected the pattern within hours or days.",
      "تتعلم شركة بالاختراق من طرف خارجي لا من مراقبة نفسها. ويُظهر التحقيق أن المهاجم كان داخل الشبكة لأربعة أشهر، لأن المؤسسة جمعت سجلات قليلة ولم تربطها أبدًا. وكان SIEM بقواعد مضبوطة وSOC سيكشف النمط خلال ساعات أو أيام.",
    ),
    l(
      "A SOC's alert queue fills with thousands of low-value alerts every day. Analysts grow fatigued and miss a real brute-force that succeeded. Tuning the rules and writing playbooks reduces the noise so the genuine signal stands out and is acted on quickly.",
      "تمتلئ قائمة التنبيهات في SOC بتنبيهات قليلة القيمة كل يوم. ويتعب المحللون ويُغفلون هجوم تخمين حقيقي نجح. فضبط القواعد وكتابة أدلة التشغيل يقلل الضوضاء فيبرز الإشارة الحقيقية ويُتعامل معها بسرعة.",
    ),
    l(
      "A SOC analyst reads an SSH log: repeated failures from one IP across several accounts, then a success. Applying the playbook, they block the IP, force a password reset and MFA on the affected account, and escalate to incident response — containing a compromise within minutes of detection.",
      "يقرأ محلل SOC سجل SSH: فشل متكرر من عنوان واحد عبر عدة حسابات ثم نجاح. وبتطبيق دليل التشغيل يحجب العنوان ويفرض إعادة تعيين كلمة المرور وMFA على الحساب المتأثر ويصعّد إلى الاستجابة للحوادث — محتويًا الاختراق خلال دقائق من الكشف.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("From raw logs to a response — the SIEM pipeline", "من السجلات الخام إلى الاستجابة — مسار SIEM"),
    caption: l("Each stage reduces noise and adds meaning: millions of events become a handful of prioritised alerts that analysts can act on.", "تقلل كل مرحلة الضوضاء وتضيف المعنى: ملايين الأحداث تصبح حفنة من التنبيهات المرتبة التي يستطيع المحللون التصرف بشأنها."),
    nodes: [
      { label: l("Log sources", "مصادر السجلات"), desc: l("Endpoints, network, cloud, identity", "النقاط الطرفية والشبكة والسحابة والهوية") },
      { label: l("Collect & normalise", "الجمع والتوحيد"), desc: l("One format, one clock", "صيغة واحدة وساعة واحدة") },
      { label: l("Correlate & enrich", "الربط والإثراء"), desc: l("Rules, analytics, threat intel", "قواعد وتحليلات واستخبارات") },
      { label: l("Alert & triage", "التنبيه والفرز"), desc: l("True or false positive?", "إيجابي حقيقي أم كاذب؟") },
      { label: l("Respond & improve", "الاستجابة والتحسين"), desc: l("Contain, document, tune rules", "احتواء وتوثيق وضبط القواعد") },
    ],
  },
  instructorDemo: l(
    "Demonstrate the authentication log analyzer. Show the sample SSH log and run the analyzer. Walk through the findings table: the attacking IP shows multiple failures across several accounts (root, admin, test, oracle) and, critically, an accepted login for admin after the failures — flagged as 'brute force SUCCEEDED, treat as compromise'. Contrast it with the two normal IPs. Then edit the log to remove the attacker's accepted line, re-analyze, and show the finding changes to a brute-force pattern only. Connect this to SIEM correlation, triage and the containment playbook.",
    "اعرض محلّل سجلات المصادقة. واعرض عينة سجل SSH وشغّل المحلل. واشرح جدول النتائج: يظهر العنوان المهاجم فشلًا متكررًا عبر عدة حسابات (root وadmin وtest وoracle) والأخطر دخولًا مقبولًا لـ admin بعد الفشل — مُعلّمًا بـ«نجح هجوم التخمين، تعامل معه كاختراق». وقارن بالعنوانين الطبيعيين. ثم عدّل السجل لحذف سطر القبول للمهاجم وأعد التحليل وأظهر تغير النتيجة إلى نمط تخمين فقط. واربط هذا بربط SIEM والفرز ودليل الاحتواء.",
  ),
  exercises: [
    {
      title: l("Match each log source to what it detects", "مطابقة كل مصدر سجل بما يكشفه"),
      instructions: l(
        "For authentication, endpoint, firewall and DNS logs, state what kind of attack each source is best placed to reveal.",
        "لكل من سجلات المصادقة والنقاط الطرفية والجدار الناري وDNS، اذكر نوع الهجوم الذي يُعدّ كل مصدر أقدر على كشفه.",
      ),
      expected: l(
        "Authentication → brute force and stolen credentials; endpoint → malware and lateral movement; firewall → scanning and C2; DNS → phishing and callbacks.",
        "المصادقة ← التخمين وبيانات الدخول المسروقة؛ والنقاط الطرفية ← البرمجيات الخبيثة والحركة الجانبية؛ والجدار الناري ← المسح وحركة التحكم؛ وDNS ← التصيّد والارتدادات.",
      ),
    },
    {
      title: l("Write a detection rule and a triage playbook", "اكتب قاعدة كشف ودليل فرز"),
      instructions: l(
        "Write one detection rule in plain language for a brute-force attack, and a short triage playbook with questions, containment action and escalation criteria.",
        "اكتب قاعدة كشف واحدة بلغة بسيطة لهجوم تخمين، ودليل فرز قصيرًا بالأسئلة وإجراء الاحتواء ومعايير التصعيد.",
      ),
      expected: l(
        "A rule such as 'more than 5 failed logins from one IP in 5 minutes', plus a playbook: identify the account, block the IP, reset credentials, escalate if a success occurred.",
        "قاعدة مثل «أكثر من 5 محاولات دخول فاشلة من عنوان واحد خلال 5 دقائق»، مع دليل تشغيل: حدد الحساب، احجب العنوان، أعد تعيين بيانات الدخول، صعّد إذا حدث نجاح.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can explain why logging and monitoring are essential, list key log sources, describe how a SIEM collects, normalises, correlates and alerts, explain SOC triage, alert fatigue and playbooks, analyse an authentication log for brute-force indicators and triage the alert, and explain log integrity, retention and detection engineering.",
    "بعد هذه الجلسة يمكنك شرح سبب كون التسجيل والمراقبة أساسيين، وذكر مصادر السجلات الرئيسية، ووصف كيف يجمع SIEM السجلات ويوحّدها ويربطها وينبّه، وشرح فرز SOC وإرهاق التنبيهات وأدلة التشغيل، وتحليل سجل مصادقة لمؤشرات التخمين وفرز التنبيه، وشرح سلامة السجلات والاحتفاظ بها وهندسة الكشف.",
  ),
  commonMistakes: [
    l("Logging only failures: log successes too, because a success after failures is the most critical brute-force signal.", "تسجيل الفشل فقط: فسجّل النجاحات أيضًا، لأن النجاح بعد الفشل هو أهم إشارة تخمين."),
    l("Skipping clock synchronisation: unsynced clocks make it impossible to order events across systems and break correlation.", "تخطّي مزامنة الساعات: فالساعات غير المتزامنة تجعل ترتيب الأحداث عبر الأنظمة مستحيلاً وتكسر الربط."),
    l("Keeping logs only locally: attackers delete local logs, so forward them to a central, write-once store.", "الاحتفاظ بالسجلات محليًا فقط: فالمهاجمون يحذفون السجلات المحلية، فأرسلها إلى مخزن مركزي للكتابة مرة واحدة."),
    l("Ignoring alert fatigue: too many low-value alerts hide real ones; tune rules and write playbooks.", "تجاهل إرهاق التنبيهات: فكثرة التنبيهات الرديئة تخفي الحقيقية؛ فضبط القواعد وكتابة أدلة التشغيل."),
    l("Treating every alert as real: triage to separate false positives from genuine incidents before responding.", "التعامل مع كل تنبيه على أنه حقيقي: فافرز لفصل الإيجابيات الكاذبة عن الحوادث الحقيقية قبل الاستجابة."),
  ],
  bestPractices: [
    l("Collect logs from identity, endpoints, network, web, e-mail and cloud — cover the attacker's lifecycle.", "اجمع السجلات من الهوية والنقاط الطرفية والشبكة والويب والبريد والسحابة — لتغطي دورة حياة المهاجم."),
    l("Synchronise clocks with NTP and use one time zone so events can be ordered.", "زامن الساعات بـ NTP واستخدم منطقة زمنية واحدة ليمكن ترتيب الأحداث."),
    l("Forward logs to a central, tamper-resistant, write-once store and retain them for investigation and compliance.", "أرسل السجلات إلى مخزن مركزي مقاوم للعبث للكتابة مرة واحدة واحتفظ بها للتحقيق والامتثال."),
    l("Correlate with rules and enrich with threat intelligence, and tune rules to limit false positives.", "اربط بالقواعد وثرّ باستخبارات التهديدات، وضبط القواعد للحد من الإيجابيات الكاذبة."),
    l("Give every alert a documented playbook with questions, containment and escalation criteria.", "امنح كل تنبيه دليل تشغيل موثقًا بالأسئلة وإجراء الاحتواء ومعايير التصعيد."),
  ],
  keyTakeaways: [
    l("Prevention eventually fails; monitoring detects, investigates and shortens attacker dwell time.", "تفشل الوقاية في النهاية؛ فالمراقبة تكشف وتحقق وتقصر زمن بقاء المهاجم."),
    l("Log from identity, endpoints, network, web, e-mail and cloud, with synchronised clocks.", "سجّل من الهوية والنقاط الطرفية والشبكة والويب والبريد والسحابة، بساعات متزامنة."),
    l("A SIEM collects, normalises, correlates, enriches and alerts; SOAR automates routine responses.", "يجمع SIEM ويوحّد ويربط ويثري وينبّه؛ وتؤتمت SOAR الاستجابات الروتينية."),
    l("A SOC triages alerts in tiers; alert fatigue and missing playbooks are the main failure modes.", "يفرز SOC التنبيهات في طبقات؛ وإرهاق التنبيهات وغياب أدلة التشغيل هما نمطا الفشل الرئيسيان."),
    l("A success after repeated failures from one IP is a brute-force attack that likely succeeded — triage and contain it.", "النجاح بعد فشل متكرر من عنوان واحد هو هجوم تخمين ربما نجح — فافرزه واحتوه."),
  ],
  lab: {
    title: l("Lab 9 — Security Monitoring: Investigate an SSH Brute-Force Attempt", "المختبر 9 — المراقبة الأمنية: التحقيق في محاولة تخمين SSH"),
    scenario: l(
      "At 02:11 your SIEM raised 'multiple failed SSH logins'. Open the sample authentication log in the analyzer, run it, and decide whether the server has been compromised — then write the containment and prevention steps.",
      "في الساعة 02:11 أصدر SIEM تنبيه «محاولات SSH فاشلة متعددة». افتح عينة سجل المصادقة في المحلل وشغّلها، وقرر هل اختُرق الخادم — ثم اكتب خطوات الاحتواء والوقاية.",
    ),
    safety: l(
      "The log is a fabricated sample using documentation-reserved IP addresses (203.0.113.x, 198.51.100.x, 192.0.2.x). When working with real logs, treat them as sensitive: they contain usernames, IPs and sometimes personal data, and only analyse logs you are authorised to access.",
      "السجل عينة مصطنعة بعناوين IP محجوزة للتوثيق (‎203.0.113.x و198.51.100.x و192.0.2.x). وعند العمل مع سجلات حقيقية تعامل معها كبيانات حساسة: فهي تحتوي أسماء مستخدمين وعناوين IP وأحيانًا بيانات شخصية، وحلل فقط السجلات التي لديك إذن بالوصول إليها.",
    ),
    steps: [
      l("Read the sample log and identify the source IPs", "اقرأ العينة وحدد عناوين IP المصدر"),
      l("Run the analyzer and read the per-IP findings", "شغّل المحلل واقرأ نتائج كل IP"),
      l("Classify each IP as compromise, pattern or normal", "صنّف كل IP كاختراق أو نمط أو طبيعي"),
      l("Identify the critical event: the successful login after failures", "حدد الحدث الحرج: الدخول الناجح بعد الفشل"),
      l("Edit the log to remove the attacker's success and re-analyze", "عدّل السجل لحذف نجاح المهاجم وأعد التحليل"),
      l("Write containment and prevention steps", "اكتب خطوات الاحتواء والوقاية"),
    ],
    expected: l(
      "You classify the attacking IP as a successful brute-force (treat as compromise), the other IPs as normal, and produce an ordered containment and prevention plan.",
      "تصنّف العنوان المهاجم على أنه تخمين ناجح (يُعامل كاختراق) والعناوين الأخرى كطبيعية، وتضع خطة احتواء ووقاية مرتبة.",
    ),
    tool: "logs",
    objectives: [
      l("Read an authentication log and identify source IPs", "قراءة سجل مصادقة وتحديد عناوين IP المصدر"),
      l("Run the analyzer and interpret per-IP findings", "تشغيل المحلل وتفسير نتائج كل IP"),
      l("Classify each IP as compromise, pattern or normal", "تصنيف كل IP كاختراق أو نمط أو طبيعي"),
      l("Identify the critical successful-login-after-failures event", "تحديد الحدث الحرج: الدخول الناجح بعد الفشل"),
      l("Write containment and prevention steps", "كتابة خطوات الاحتواء والوقاية"),
    ],
    prerequisites: [
      l("Session 14: how attacks and patching relate to what you must detect", "الجلسة 14: كيف ترتبط الهجمات والترقيع بما يجب كشفه"),
      l("Session 13: how authentication events appear in logs", "الجلسة 13: كيف تظهر أحداث المصادقة في السجلات"),
    ],
    environment: l(
      "The companion authentication-log analyzer in a browser (display only). The log is a fabricated sample with documentation-reserved IP addresses; no real system or log is involved.",
      "محلّل سجلات المصادقة المرافق في متصفح (عرض فقط). والسجل عينة مصطنعة بعناوين IP محجوزة للتوثيق؛ ولا يوجد نظام أو سجل حقيقي.",
    ),
    tools: [
      l("Authentication log analyzer (companion browser tool, display only)", "محلّل سجلات المصادقة (أداة متصفح مساندة، عرض فقط"),
      l("Sample SSH authentication log (fabricated, reserved IPs)", "عينة سجل مصادقة SSH (مصطنعة، بعناوين IP محجوزة)"),
    ],
    authorization: l(
      "Scope: analyse the fabricated sample in the display-only analyzer. Prohibited: accessing, copying or analysing real logs without authorization. Stop condition: if asked to analyse a real log, stop and confirm authorization first.",
      "النطاق: حلل العينة المصطنعة في المحلل ذي العرض فقط. المحظور: الوصول إلى سجلات حقيقية أو نسخها أو تحليلها دون تصريح. شرط التوقف: إذا طُلب منك تحليل سجل حقيقي، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Read the sample log", "اقرأ العينة"),
        command: "Log analyzer: sample SSH log",
        explanation: l(
          "Read the ten log lines in the analyzer. Each line contains a timestamp, host, service (sshd), the outcome (Failed/Accepted), the account name and the source IP. Identify the distinct source IP addresses present.",
          "اقرأ الأسطر العشرة في المحلل. ويحتوي كل سطر على طابع زمني ومضيف وخدمة (sshd) ونتيجة (Failed/Accepted) واسم الحساب وعنوان IP المصدر. وحدد عناوين IP المصدر المميزة الموجودة.",
        ),
        expected: l("You can identify the three source IPs in the sample log: 203.0.113.45, 198.51.100.7 and 192.0.2.10.", "يمكنك تحديد عناوين IP المصدر الثلاثة في العينة: 203.0.113.45 و198.51.100.7 و192.0.2.10."),
      },
      {
        title: l("Run the analyzer", "شغّل المحلل"),
        command: "Log analyzer: Analyze",
        explanation: l(
          "Press Analyze. The analyzer counts, for each source IP, the number of failed logins, accepted logins and the accounts tried, and classifies the finding. Read the table carefully for each IP.",
          "اضغط تحليل. ويحسب المحلل، لكل عنوان مصدر، عدد محاولات الدخول الفاشلة والمقبولة والحسابات التي جُرّرت، ويُصنّف النتيجة. واقرأ الجدول بعناية لكل IP.",
        ),
        expected: l("You can read the per-IP failure/success counts and the analyzer's finding for each IP.", "يمكنك قراءة أعداد الفشل والنجاح لكل IP ونتيجة المحلل لكل IP."),
      },
      {
        title: l("Classify each IP", "صنّف كل IP"),
        command: "Log analyzer: interpret findings",
        explanation: l(
          "Classify each IP: one shows a successful brute-force (accepted login after failures — treat as compromise), one shows only a brute-force pattern, and the others are normal. Match each classification to the evidence in the counts.",
          "صنّف كل IP: أحدها يُظهر تخمينًا ناجحًا (دخول مقبول بعد فشل — يعامل كاختراق)، وواحد يُظهر نمط تخمين فقط، والباقيان طبيعيان. وزاوج كل تصنيف بالأدلة في الأعداد.",
        ),
        expected: l("You can classify 203.0.113.45 as a successful brute-force (compromise), and the other IPs as pattern or normal, with evidence.", "يمكنك تصنيف 203.0.113.45 على أنه تخمين ناجح (اختراق)، والعناوين الأخرى كنمط أو طبيعي، مع أدلة."),
      },
      {
        title: l("Identify the critical event", "حدد الحدث الحرج"),
        command: "Log analyzer: find the accepted login after failures",
        explanation: l(
          "Identify the critical event: the accepted login for 'admin' from 203.0.113.45 after a run of failed logins. State what it implies — the attacker likely guessed valid credentials and the server must be treated as compromised.",
          "حدد الحدث الحرج: الدخول المقبول لـ admin من 203.0.113.45 بعد سلسلة من محاولات الدخول الفاشلة. واذكر ما يعنيه — إذ على الأرجح خمّن المهاجم بيانات صالحة ويجب التعامل مع الخادم كمُخترق.",
        ),
        expected: l("You can point to the accepted admin login after failures and state that it indicates a successful compromise.", "يمكنك الإشارة إلى دخول admin المقبول بعد الفشل وتقول إنه يدل على اختراق ناجح."),
      },
      {
        title: l("Edit and re-analyze", "عدّل وأعد التحليل"),
        command: "Log analyzer: remove the accepted line, re-analyze",
        explanation: l(
          "Edit the log in the box: remove the 'Accepted' line for the attacker (203.0.113.45) and press Analyze again. Observe that the finding changes from 'brute force SUCCEEDED' to a brute-force pattern only — showing how a single event changes the conclusion.",
          "عدّل السجل في المربع: احذف سطر «Accepted» للمهاجم (203.0.113.45) واضغط تحليل مجددًا. ولاحظ أن النتيجة تتغير من «نجح هجوم التخمين» إلى نمط تخمين فقط — مُظهرًا كيف يغيّر حدث واحد الاستنتاج.",
        ),
        expected: l("You can remove the attacker's accepted line and show the finding downgrading to a brute-force pattern.", "يمكنك حذف سطر القبول للمهاجم وإظهار انخفاض النتيجة إلى نمط تخمين."),
      },
      {
        title: l("Write containment and prevention steps", "اكتب خطوات الاحتواء والوقاية"),
        command: "Write the response plan",
        explanation: l(
          "Write the containment steps: block the source IP, force a password reset and MFA on the affected account, review commands run by the account, and check for new accounts and keys. Then list three preventive fixes (disable password SSH, restrict by source IP/VPN, enable rate-limiting).",
          "اكتب خطوات الاحتواء: احجب عنوان المصدر، وأجبر على إعادة تعيين كلمة المرور وMFA على الحساب المتأثر، وراجع الأوامر التي نفذها الحساب، وافحص الحسابات والمفاتيح الجديدة. ثم اذكر ثلاثة إصلاحات وقائية (تعطيل كلمة مرور SSH، والتقييد بحسب عنوان المصدر/VPN، وتفعيل تحديد المعدل).",
        ),
        expected: l("An ordered containment plan and three preventive fixes, each justified.", "خطة احتواء مرتبة وثلاثة إصلاحات وقائية، مبررة كل منها."),
      },
    ],
    troubleshooting: [
      {
        problem: l("Unsure which IP is the attacker", "لست متأكدًا من أي العناوين هو المهاجم"),
        fix: l("Look for the IP with the most failures and, critically, an accepted login after failures. That is the brute-force source.", "ابحث عن العنوان ذي الفشل الأكبر والأهم دخول مقبول بعد الفشل. فهذا هو مصدر التخمين."),
      },
      {
        problem: l("Confusing a pattern with a successful compromise", "الخلط بين النمط والاختراق الناجح"),
        fix: l("A pattern is failures only; a compromise is a success after failures. The accepted line is the critical difference.", "النمط فشل فقط؛ والاختراق نجاح بعد فشل. فسطر القبول هو الفارق الحرج."),
      },
      {
        problem: l("Forgetting to re-analyze after editing", "نسيان إعادة التحليل بعد التعديل"),
        fix: l("Press Analyze again after editing — the findings update from the edited log, showing how evidence changes the conclusion.", "اضغط تحليل مجددًا بعد التعديل — فتُحدّث النتائج من السجل المعدّّل، مُظهرةً كيف تغير الأدلة الاستنتاج."),
      },
      {
        problem: l("Unsure whether you may analyse real logs", "لست متأكدًا مما إذا كان يجوز تحليل سجلات حقيقية"),
        fix: l("Stop. Analyse only the fabricated sample or logs you are authorised to access. Real logs are sensitive and accessing them without permission is illegal and unethical.", "توقف. فحلل فقط العينة المصطنعة أو السجلات التي لديك إذن بالوصول إليها. فالسجلات الحقيقية حساسة والوصول إليها دون إذن مخالف للقانون وغير أخلاقي."),
      },
    ],
    deliverables: [
      l("The three source IPs identified from the sample log", "عناوين IP المصدر الثلاثة المحددة من العينة"),
      l("Per-IP findings with classification (compromise, pattern, normal)", "نتائج كل IP مع التصنيف (اختراق، نمط، طبيعي)"),
      l("The critical successful-login-after-failures event identified", "الحدث الحرج: الدخول الناجح بعد الفشل، محدد"),
      l("The edited log and the changed finding", "السجل المعدّّل والنتيجة المتغيرة"),
      l("A containment plan with ordered steps", "خطة احتواء بخطوات مرتبة"),
      l("Three preventive fixes with justifications", "ثلاثة إصلاحات وقائية مع تبريرات"),
    ],
    rubric: [
      { criterion: l("Correct identification and classification of source IPs", "تحديد وتصنيف صحيح لعناوين IP المصدر"), weight: 25 },
      { criterion: l("Correct interpretation of the critical success-after-failures event", "تفسير صحيح لحدث النجاح بعد الفشل الحرج"), weight: 20 },
      { criterion: l("Correct edit and re-analysis showing the changed finding", "تعديل وإعادة تحليل صحيح يُظهر النتيجة المتغيرة"), weight: 20 },
      { criterion: l("Sound, ordered containment plan", "خطة احتواء سليمة مرتبة"), weight: 20 },
      { criterion: l("Appropriate preventive fixes and safety awareness", "إصلاحات وقائية مناسبة ووعي بالسلامة"), weight: 15 },
    ],
  },
  majorLabId: "lab-09",
  quiz: [
    {
      q: l("What does a SIEM do?", "ماذا يفعل SIEM؟"),
      options: [
        l("Collects, correlates and alerts on logs from many sources", "يجمع السجلات من مصادر كثيرة ويربطها وينبّه"),
        l("Encrypts disks", "يشفّر الأقراص"),
        l("Replaces the firewall", "يحل محل الجدار الناري"),
        l("Creates passwords", "ينشئ كلمات المرور"),
      ],
      answer: 0,
      why: l("A SIEM centralises log data and turns it into prioritised alerts.", "يمركز SIEM بيانات السجلات ويحولها إلى تنبيهات مرتبة."),
    },
    {
      q: l("Why must clocks be synchronised across systems?", "لماذا يجب مزامنة الساعات عبر الأنظمة؟"),
      options: [
        l("So events can be ordered into a timeline", "ليمكن ترتيب الأحداث في خط زمني"),
        l("To save electricity", "لتوفير الكهرباء"),
        l("To speed up Wi-Fi", "لتسريع الواي فاي"),
        l("It is not necessary", "ليس ضروريًا"),
      ],
      answer: 0,
      why: l("Correlation and investigation depend on accurate timestamps.", "يعتمد الربط والتحقيق على طوابع زمنية دقيقة."),
    },
    {
      q: l("Which log pattern is most alarming?", "أي نمط سجل هو الأكثر إنذارًا؟"),
      options: [
        l("One failed login by a user", "محاولة فاشلة واحدة من مستخدم"),
        l("Many failures followed by a success from the same IP", "فشل كثير يعقبه نجاح من العنوان نفسه"),
        l("A scheduled backup job", "مهمة نسخ احتياطي مجدولة"),
        l("A user logging out", "مستخدم يسجل الخروج"),
      ],
      answer: 1,
      why: l("It suggests the attacker eventually guessed valid credentials.", "توحي بأن المهاجم خمّن بيانات صالحة أخيرًا."),
    },
    {
      q: l("An IOC is…", "مؤشر الاختراق IOC هو…"),
      options: [
        l("A known artefact of malicious activity such as a bad IP, domain or file hash", "أثر معروف لنشاط خبيث كعنوان IP أو نطاق أو تجزئة ملف سيئة"),
        l("A type of firewall rule", "نوع من قواعد الجدار الناري"),
        l("A backup schedule", "جدول نسخ احتياطي"),
        l("An encryption mode", "نمط تشفير"),
      ],
      answer: 0,
      why: l("Indicators of Compromise are matched against logs to find known threats.", "تُطابق مؤشرات الاختراق مع السجلات لإيجاد التهديدات المعروفة."),
    },
    {
      q: l("What is 'alert fatigue'?", "ما «إرهاق التنبيهات»؟"),
      options: [
        l("Analysts missing real incidents because of too many low-value alerts", "إغفال المحللين لحوادث حقيقية بسبب كثرة التنبيهات قليلة القيمة"),
        l("A hardware failure", "عطل عتادي"),
        l("A training course", "دورة تدريبية"),
        l("Too few logs", "قلة السجلات"),
      ],
      answer: 0,
      why: l("Tuning and playbooks keep alerts meaningful.", "الضبط وأدلة التشغيل يُبقيان التنبيهات ذات معنى."),
    },
    {
      q: l("Why send logs to a central, protected store?", "لماذا نرسل السجلات إلى مخزن مركزي محمي؟"),
      options: [
        l("Attackers often delete local logs to hide their tracks", "المهاجمون يحذفون السجلات المحلية لإخفاء آثارهم"),
        l("To make logs larger", "لتكبير السجلات"),
        l("To avoid using SIEM", "لتجنب استخدام SIEM"),
        l("Local logs do not exist", "السجلات المحلية غير موجودة"),
      ],
      answer: 0,
      why: l("Central write-once storage preserves evidence.", "التخزين المركزي للكتابة مرة واحدة يحفظ الأدلة."),
    },
    {
      q: l("MTTD stands for…", "تعني MTTD…"),
      options: [
        l("Mean Time To Detect", "متوسط زمن الكشف"),
        l("Maximum Threat Type Data", "أقصى بيانات نوع تهديد"),
        l("Managed Traffic Tunnel Device", "جهاز نفق حركة مُدار"),
        l("Mean Time To Delete", "متوسط زمن الحذف"),
      ],
      answer: 0,
      why: l("It measures how quickly intrusions are discovered.", "يقيس سرعة اكتشاف الاختراقات."),
    },
    {
      q: l("A playbook is best described as…", "يُوصَف دليل التشغيل على أفضل وجه بـ…"),
      options: [
        l("A documented, repeatable procedure for handling an alert", "إجراء موثّق وقابل للتكرار لمعالجة تنبيه"),
        l("A type of firewall rule", "نوع من قواعد الجدار الناري"),
        l("A backup schedule", "جدول نسخ احتياطي"),
        l("A password standard", "معيار لكلمات المرور"),
      ],
      answer: 0,
      why: l("Playbooks turn triage from improvisation into a repeatable, auditable process.", "تحوّل أدلة التشغيل الفرز من اجتهاد فردي إلى عملية قابلة للتكرار والتدقيق."),
    },
    {
      q: l("Which log source is best placed to reveal lateral movement?", "أي مصدر سجل أقدر على كشف الحركة الجانبية؟"),
      options: [
        l("Authentication logs", "سجلات المصادقة"),
        l("Endpoint / EDR logs", "سجلات النقاط الطرفية / EDR"),
        l("DNS logs", "سجلات DNS"),
        l("E-mail gateway logs", "سجلات بوابة البريد"),
      ],
      answer: 1,
      why: l("Endpoint and EDR logs show process starts and new services that indicate lateral movement.", "تُظهر سجلات النقاط الطرفية وEDR بدء العمليات والخدمات الجديدة التي تدل على الحركة الجانبية."),
    },
    {
      q: l("What does SOAR primarily do?", "ماذا تفعل SOAR أساسًا؟"),
      options: [
        l("Automates routine response playbooks", "تؤتمت أدلة الاستجابة الروتينية"),
        l("Encrypts logs", "تشفّر السجلات"),
        l("Replaces the SIEM", "تحل محل SIEM"),
        l("Creates detection rules", "تنشئ قواعد الكشف"),
      ],
      answer: 0,
      why: l("SOAR automates routine responses such as disabling an account or isolating a host.", "تؤتمت SOAR الاستجابات الروتينية مثل تعطيل حساب أو عزل جهاز."),
    },
    {
      q: l("A SOC analyst sees many failures from one IP then a success. The first action should be…", "يرى محلل SOC فشلًا كثيرًا من عنوان واحد ثم نجاحًا. أول إجراء يجب اتخاذه هو…"),
      options: [
        l("Ignore it as noise", "تجاهله كضوضاء"),
        l("Block the source and treat the login as a possible compromise", "احجب المصدر وعامل الدخول كاختراق محتمل"),
        l("Delete the log", "احذف السجل"),
        l("Wait for more alerts", "انتظر تنبيهات أكثر"),
      ],
      answer: 1,
      why: l("A success after failures is a likely compromise that demands immediate containment.", "النجاح بعد الفشل اختراق مرجح يستدعي احتواءً فوريًا."),
    },
  ],
  trueFalse: [
    {
      q: l("Prevention alone is enough; monitoring is optional.", "الوقاية وحدها كافية؛ والمراقبة اختيارية."),
      answer: false,
      why: l("Prevention eventually fails, so detection and investigation are essential.", "تفشل الوقاية في النهاية، لذا يعد الكشف والتحقيق أساسيين."),
    },
    {
      q: l("MTTD measures how quickly an intrusion is discovered.", "يقيس MTTD سرعة اكتشاف الاختراق."),
      answer: true,
      why: l("Mean Time To Detect is the average time to discover an intrusion.", "متوسط زمن الكشف هو متوسط وقت اكتشاف الاختراق."),
    },
    {
      q: l("A success after many failures from one IP should be treated as a likely compromise.", "يجب معالجة النجاح بعد فشل كثير من عنوان واحد كاختراق مرجح."),
      answer: true,
      why: l("It suggests the attacker guessed valid credentials, so the system may be compromised.", "توحي بأن المهاجم خمّن بيانات صالحة، لذا قد يكون النظام مخترقًا."),
    },
    {
      q: l("Local logs are safe to rely on because attackers never delete them.", "السجلات المحلية آمنة للاعتماد عليها لأن المهاجمين لا يحذفونها أبدًا."),
      answer: false,
      why: l("Attackers delete local logs to hide tracks; forward logs to a central store.", "يحذف المهاجمون السجلات المحلية لإخفاء آثارهم؛ فأرسل السجلات إلى مخزن مركزي."),
    },
    {
      q: l("Alert fatigue can cause analysts to miss real incidents.", "يمكن أن يتسبب إرهاق التنبيهات في أن يُغفل المحللون حوادث حقيقية."),
      answer: true,
      why: l("Too many low-value alerts hide the genuine ones if rules are not tuned.", "فكثرة التنبيهات الرديئة تخفي الحقيقية إذا لم تُضبط القواعد."),
    },
    {
      q: l("Detection rules should be reviewed and tuned as threats change.", "ينبغي مراجعة قواعد الكشف وضبطها مع تغير التهديدات."),
      answer: true,
      why: l("Rules are never finished; they must evolve with the environment and threats.", "لا تُنجز القواعد أبدًا؛ بل يجب أن تتطور مع البيئة والتهديدات."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each log source by the attack it best reveals", "صنّف كل مصدر سجل بحسب الهجوم الذي يكشفه أفضل"),
      categories: [
        l("Authentication", "المصادقة"),
        l("Endpoint / EDR", "النقاط الطرفية / EDR"),
        l("Firewall / network", "الجدار الناري / الشبكة"),
        l("DNS / web", "DNS / الويب"),
      ],
      items: [
        { text: l("Brute force and stolen credentials", "التخمين وبيانات الدخول المسروقة"), answer: 0 },
        { text: l("Malware and lateral movement", "البرمجيات الخبيثة والحركة الجانبية"), answer: 1 },
        { text: l("Scanning and command-and-control traffic", "المسح وحركة التحكم والقيادة"), answer: 2 },
        { text: l("Phishing and malware callbacks", "التصيّد وارتدادات البرمجيات الخبيثة"), answer: 3 },
      ],
      why: l("Each log source is best placed to reveal a distinct part of the attack lifecycle.", "كل مصدر سجل أقدر على كشف جزء مميز من دورة حياة الهجوم."),
    },
    {
      prompt: l("Classify each SIEM stage by what it does", "صنّف كل مرحلة SIEM بحسب ما تفعله"),
      categories: [
        l("Collect & normalise", "الجمع والتوحيد"),
        l("Correlate & enrich", "الربط والإثراء"),
        l("Alert & triage", "التنبيه والفرز"),
        l("Respond & improve", "الاستجابة والتحسين"),
      ],
      items: [
        { text: l("Gather logs and convert to one format", "جمع السجلات وتحويلها إلى صيغة واحدة"), answer: 0 },
        { text: l("Apply rules and threat intelligence", "تطبيق القواعد واستخبارات التهديدات"), answer: 1 },
        { text: l("Decide true positive or false positive", "تقرير إيجابي حقيقي أم كاذب"), answer: 2 },
        { text: l("Contain and tune the rules", "الاحتواء وضبط القواعد"), answer: 3 },
      ],
      why: l("These are the four stages of the SIEM pipeline, in order.", "هذه المراحل الأربع لمسار SIEM، بالترتيب."),
    },
    {
      prompt: l("Classify each item as a detection metric or a concept", "صنّف كل عنصر كمقياس كشف أو مفهوم"),
      categories: [
        l("Metric", "مقياس"),
        l("Concept", "مفهوم"),
      ],
      items: [
        { text: l("MTTD", "MTTD"), answer: 0 },
        { text: l("Dwell time", "زمن البقاء"), answer: 1 },
        { text: l("MTTR", "MTTR"), answer: 0 },
        { text: l("IOC", "IOC"), answer: 1 },
      ],
      why: l("MTTD and MTTR are metrics; dwell time and IOC are concepts.", "MTTD وMTTR مقياسان؛ وزمن البقاء وIOC مفهومان."),
    },
    {
      prompt: l("Classify each action as containment or prevention", "صنّف كل إجراء كاحتواء أو وقاية"),
      categories: [
        l("Containment", "الاحتواء"),
        l("Prevention", "الوقاية"),
      ],
      items: [
        { text: l("Block the attacking IP", "حجب عنوان المهاجم"), answer: 0 },
        { text: l("Disable password SSH in favour of keys", "تعطيل كلمة مرور SSH لصالح المفاتيح"), answer: 1 },
        { text: l("Force a password reset on the affected account", "فرض إعادة تعيين كلمة المرور على الحساب المتأثر"), answer: 0 },
        { text: l("Enable rate-limiting", "تفعيل تحديد المعدل"), answer: 1 },
      ],
      why: l("Containment stops an ongoing attack; prevention stops it from happening again.", "الاحتواء يوقف هجومًا جاريًا؛ والوقاية تمنع وقوعه مجددًا."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A SIEM shows 15 failed logins from one IP across root, admin, test and oracle, followed by a single accepted login for admin 30 seconds later.",
        "يُظهر SIEM 15 محاولة دخول فاشلة من عنوان واحد عبر root وadmin وtest وoracle، يعقبها دخول مقبول واحد لـ admin بعد 30 ثانية.",
      ),
      question: l("How should this be treated?", "كيف ينبغي التعامل مع هذا؟"),
      options: [
        l("As a false positive; ignore it", "كإيجابي كاذب؛ تجاهله"),
        l("As a successful brute-force; contain and escalate", "كتخمين ناجح؛ احتواء وتصعيد"),
        l("As a normal failed login", "كمحاولة دخول فاشلة طبيعية"),
        l("As a backup job", "كمهمة نسخ احتياطي"),
      ],
      answer: 1,
      why: l("A success after many failures from one IP indicates the attacker guessed credentials — treat as compromise.", "النجاح بعد فشل كثير من عنوان واحد يدل على أن المهاجم خمّن بيانات الدخول — فاتعامل معه كاختراق."),
    },
    {
      scenario: l(
        "A SOC receives hundreds of low-priority alerts each hour. Analysts start ignoring them and miss a real brute-force that succeeded.",
        "يتلقى SOC مئات التنبيهات منخفضة الأولوية كل ساعة. ويبدأ المحللون بتجاهلها ويُغفلون هجوم تخمين حقيقي نجح.",
      ),
      question: l("What is the core problem and the fix?", "ما المشكلة الجذرية وما الحل؟"),
      options: [
        l("There are too many logs; delete them", "هناك سجلات كثيرة جدًا؛ احذفها"),
        l("Alert fatigue; tune rules and write playbooks to reduce noise", "إرهاق التنبيهات؛ فضبط القواعد وكتابة أدلة التشغيل لتقليل الضوضاء"),
        l("The SIEM is broken; replace it", "SIEM معطل؛ استبدلها"),
        l("Not enough analysts; hire more without tuning", "لا يوجد محلل كفء؛ وظّف أكثر دون ضبط"),
      ],
      answer: 1,
      why: l("Low-quality alerts hide real ones; tuning and playbooks keep the signal meaningful.", "التنبيهات الرديئة تخفي الحقيقية؛ فالضبط وأدلة التشغيل يُبقيان الإشارة ذات معنى."),
    },
    {
      scenario: l(
        "An attacker who compromises a host deletes its local logs. The organisation, however, forwards all logs to a central write-once store.",
        "يحذف مهاجم اخترق جهازًا سجلاته المحلية. لكن المؤسسة تُرسِل كل السجلات إلى مخزن مركزي للكتابة مرة واحدة.",
      ),
      question: l("What is the outcome?", "ما النتيجة؟"),
      options: [
        l("The evidence is lost and the investigation fails", "تُفقد الأدلة ويفشل التحقيق"),
        l("The evidence survives in the central store and the attack can be reconstructed", "تبقى الأدلة في المخزن المركزي ويمكن إعادة بناء الهجوم"),
        l("The attacker escapes undetected", "يفلت المهاجم دون كشف"),
        l("The logs are useless", "السجلات بلا فائدة"),
      ],
      answer: 1,
      why: l("Central write-once storage preserves evidence despite local deletion.", "يحفظ التخزين المركزي للكتابة مرة واحدة الأدلة رغم الحذف المحلي."),
    },
  ],
  practicalChecks: [
    {
      task: l("Explain in one sentence why a success after many failures matters", "اشرح في جملة واحدة سبب أهمية النجاح بعد فشل كثير"),
      expected: l("It suggests the attacker guessed valid credentials, so the system may already be compromised and needs containment.", "توحي بأن المهاجم خمّن بيانات دخول صالحة، لذا قد يكون النظام مخترقًا بالفعل ويحتاج احتواءً."),
      hint: l("Think about what a successful login after failures implies about the attacker.", "فكّر في ما يعنيه الدخول الناجح بعد الفشل بشأن المهاجم."),
    },
    {
      task: l("State the two key monitoring metrics and what each measures", "اذكر مقياسين المراقبة الرئيسيين وما يقيسه كل منهما"),
      expected: l("MTTD measures how quickly intrusions are detected; MTTR measures how quickly they are responded to and recovered from.", "يقيس MTTD سرعة كشف الاختراقات؛ ويقيس MTTR سرعة الاستجابة لها والتعافي منها."),
    },
  ],
  homework: {
    title: l("Homework 15 — Design a monitoring plan", "الواجب 15 — صمّم خطة مراقبة"),
    tasks: [
      l("List the ten most important log sources for a 50-person company that uses Microsoft 365 or Google Workspace, a firewall and ten laptops.", "اذكر أهم عشرة مصادر سجلات لشركة من 50 شخصًا تستخدم Microsoft 365 أو Google Workspace وجدارًا ناريًا وعشرة حواسيب محمولة."),
      l("Write three detection rules in plain language (for example 'admin login from a new country outside business hours').", "اكتب ثلاث قواعد كشف بلغة بسيطة (مثل «دخول مدير من بلد جديد خارج ساعات العمل»)."),
      l("For each rule, write a short triage playbook: questions to ask, containment action, escalation criteria.", "لكل قاعدة اكتب دليل فرز قصيرًا: أسئلة وإجراء احتواء ومعايير تصعيد."),
      l("Check your own e-mail account's 'recent activity' or security page and review the last 10 sign-ins.", "افحص صفحة «النشاط الأخير» أو الأمان في بريدك وراجع آخر 10 عمليات دخول."),
    ],
    deliverable: l(
      "A two-page monitoring plan with sources, rules, playbooks and your sign-in review findings.",
      "خطة مراقبة من صفحتين بالمصادر والقواعد وأدلة التشغيل ونتائج مراجعة عمليات دخولك.",
    ),
    criteria: [
      l("Complete list of relevant log sources", "قائمة كاملة بمصادر السجلات ذات الصلة"),
      l("Clear, specific detection rules", "قواعد كشف واضحة ومحددة"),
      l("Sound triage playbooks with containment and escalation", "أدلة فرز سليمة باحتواء وتصعيد"),
      l("Practical sign-in review with findings", "مراجعة عملية لعمليات الدخول بنتائج"),
    ],
    challenge: l(
      "Optional challenge: research one real breach that went undetected for weeks or months and explain which monitoring practice (correlation, playbooks, log retention) would have shortened the dwell time.",
      "مهمة تحدٍ اختيارية: ابحث في اختراق حقيقي ظل دون كشف لأسابيع أو شهور واشرح أي ممارسة مراقبة (الربط أو أدلة التشغيل أو الاحتفاظ بالسجلات) كانت ستقصر زمن البقاء.",
    ),
  },
  refs: [
    { title: "Guide to Computer Security Log Management (SP 800-92)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/92/final" },
    { title: "Introduction to logging for security purposes", org: "NCSC UK", url: "https://www.ncsc.gov.uk/guidance/introduction-logging-security-purposes" },
    { title: "Best practices: event logging and threat detection", org: "CISA", url: "https://www.cisa.gov/resources-tools/resources/best-practices-event-logging-and-threat-detection" },
    { title: "Sigma — generic detection rule format", org: "SigmaHQ", url: "https://github.com/SigmaHQ/sigma" },
    { title: "SIEM and log management overview", org: "OWASP", url: "https://owasp.org/www-community/controls/Logging" },
  ],
  terms: [
    { term: l("Log", "السجل"), def: l("A record of an event produced by a system or application.", "سجل بحدث ينتج عن نظام أو تطبيق.") },
    { term: l("Monitoring", "المراقبة"), def: l("Continuous collection and analysis of logs and events.", "الجمع والتحليل المستمران للسجلات والأحداث.") },
    { term: l("SIEM", "إدارة معلومات وأحداث الأمن"), def: l("Platform that collects, correlates and alerts on security log data.", "منصة تجمع بيانات سجلات الأمن وتربطها وتنبّه.") },
    { term: l("SOC", "مركز عمليات الأمن"), def: l("Team and facility that monitors and responds to security events.", "فريق ومرفق يراقب أحداث الأمن ويستجيب لها.") },
    { term: l("IOC", "مؤشر الاختراق"), def: l("Observable artefact (IP, domain, hash) indicating malicious activity.", "أثر ملحوظ (IP أو نطاق أو تجزئة) يدل على نشاط خبيث.") },
    { term: l("False positive", "إيجابي كاذب"), def: l("A benign event wrongly flagged as malicious.", "حدث سليم صُنّف خطأً على أنه خبيث.") },
    { term: l("False negative", "سلبي كاذب"), def: l("A real attack that detection missed.", "هجوم حقيقي أخطأه الكشف.") },
    { term: l("MTTD", "متوسط زمن الكشف"), def: l("Mean Time To Detect: how quickly an intrusion is discovered.", "متوسط زمن الكشف: سرعة اكتشاف الاختراق.") },
    { term: l("MTTR", "متوسط زمن الاستجابة"), def: l("Mean Time To Respond/Recover: how quickly it is handled and fixed.", "متوسط زمن الاستجابة/التعافي: سرعة معالجته وإصلاحه.") },
    { term: l("Dwell time", "زمن البقاء"), def: l("How long an attacker stays undetected in an environment.", "المدة التي يبقى فيها المهاجم دون كشف في بيئة ما.") },
    { term: l("Threat hunting", "صيد التهديدات"), def: l("Proactive search for hidden attackers rather than waiting for alerts.", "بحث استباقي عن مهاجمين مخفيين بدل انتظار التنبيهات.") },
    { term: l("SOAR", "تنسيق الأمن والأتمتة والاستجابة"), def: l("Tools automating response playbooks.", "أدوات تؤتمت أدلة الاستجابة.") },
    { term: l("Playbook", "دليل التشغيل"), def: l("A documented, repeatable procedure for handling an alert.", "إجراء موثّق وقابل للتكرار لمعالجة تنبيه.") },
    { term: l("Alert fatigue", "إرهاق التنبيهات"), def: l("Analysts missing real incidents due to too many low-value alerts.", "إغفال المحللين لحوادث حقيقية بسبب كثرة التنبيهات قليلة القيمة.") },
    { term: l("Normalisation", "التوحيد"), def: l("Converting logs from different sources to a common format.", "تحويل السجلات من مصادر مختلفة إلى صيغة مشتركة.") },
    { term: l("Correlation", "الربط"), def: l("Combining events to reveal a pattern across sources.", "دمج الأحداث لكشف نمط عبر المصادر.") },
    { term: l("Detection engineering", "هندسة الكشف"), def: l("Building, testing and tuning detection rules and analytics.", "بناء واختبار وضبط قواعد الكشف والتحليلات.") },
    { term: l("Brute force", "التخمين المكثف"), def: l("Repeatedly trying credentials until one succeeds.", "محاولة بيانات الدخول مرارًا حتى ينجح واحد.") },
    { term: l("Write-once store", "مخزن الكتابة مرة واحدة"), def: l("A central store where logs cannot be altered or deleted.", "مخزن مركزي لا يمكن تعديل السجلات فيه أو حذفها.") },
    { term: l("Retention", "الاحتفاظ"), def: l("How long logs are kept for investigation and compliance.", "المدة التي تُحفظ فيها السجلات للتحقيق والامتثال.") },
    { term: l("NTP", "بروتوكول وقت الشبكة"), def: l("Network Time Protocol, used to synchronise clocks.", "بروتوكول وقت الشبكة، يستخدم لمزامنة الساعات.") },
    { term: l("Lateral movement", "الحركة الجانبية"), def: l("An attacker moving between systems within a network.", "تحرك المهاجم بين الأنظمة داخل الشبكة."), example: l("Moving from one host to another using stolen credentials.", "الانتقال من مضيف إلى آخر باستخدام بيانات دخول مسروقة.") },
    { term: l("Command and control (C2)", "التحكم والقيادة"), def: l("Communication between compromised systems and the attacker.", "الاتصال بين الأنظمة المخترقة والمهاجم.") },
    { term: l("Exfiltration", "تسريب البيانات"), def: l("Stealing data out of an environment.", "سرقة البيانات خارج البيئة."), example: l("Moving customer records to an attacker-controlled server.", "نقل سجلات العملاء إلى خادم يسيطر عليه المهاجم.") },
  ],
};
