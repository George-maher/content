import { l, type Session } from "../types";

export const s03: Session = {
  id: 3,
  phase: 1,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Malware and Social Engineering: From Phishing to Ransomware",
    "البرمجيات الخبيثة والهندسة الاجتماعية: من التصيّد إلى الفدية",
  ),
  summary: l(
    "How attackers combine manipulation and malicious code, how to inspect a suspicious message, how malware families behave, and how layered defenses interrupt an intrusion before ransomware encrypts data.",
    "كيف يجمع المهاجمون بين التلاعب والشيفرة الخبيثة، وكيف تفحص رسالة مشبوهة، وكيف تتصرف عائلات البرمجيات الخبيثة، وكيف تعطّل الدفاعات متعددة الطبقات الاختراق قبل أن تشفّر الفدية البيانات.",
  ),
  overview: l(
    "This session connects two topics that are usually taught separately: social engineering and malware. A phishing message is not merely a nuisance; it is often the delivery stage of a longer intrusion that ends in credential theft, data exfiltration or ransomware. You will learn the psychology behind deceptive messages, the main phishing variants, a repeatable message-inspection method, the behavior of common malware families, and the resilience measures that limit the final impact.",
    "تربط هذه الجلسة بين موضوعين يُدرَّسان غالبًا بشكل منفصل: الهندسة الاجتماعية والبرمجيات الخبيثة. فرسالة التصيّد ليست مجرد إزعاج؛ بل هي غالبًا مرحلة التسليم في اختراق أطول ينتهي بسرقة بيانات الاعتماد أو تسريب البيانات أو برمجية الفدية. ستتعلم النفسية وراء الرسائل الخادعة، وأنواع التصيّد الرئيسية، وطريقة متكررة لفحص الرسائل، وسلوك عائلات البرمجيات الخبيثة الشائعة، وإجراءات المرونة التي تحدّ من الأثر النهائي.",
  ),
  whyItMatters: l(
    "Most organizations do not lose data because an attacker defeated every technical control at once. They lose data because a user trusted a message, a password was reused, a service was exposed, or a backup had never been tested. Understanding both the human and the technical path lets you choose proportionate defenses, recognize early warning signs, and respond in the first minutes when speed matters most.",
    "لا تفقد معظم المؤسسات بياناتها لأن مهاجمًا هزم كل الضوابط التقنية دفعة واحدة. بل تفقدها لأن مستخدمًا وثق برسالة، أو أُعيد استخدام كلمة مرور، أو كانت خدمة مكشوفة، أو لم تُختبر نسخة احتياطية قط. وفهم المسارين البشري والتقني يتيح لك اختيار دفاعات متناسبة، والتعرف على علامات الإنذار المبكر، والاستجابة في الدقائق الأولى حين تكون السرعة أهم ما يلزم.",
  ),
  prerequisites: [
    l(
      "Session 1: assets, threats, vulnerabilities, risk and controls.",
      "الجلسة 1: الأصول والتهديدات والثغرات والمخاطر والضوابط.",
    ),
    l(
      "Session 2: threat actors, attack vectors and the seven-stage Cyber Kill Chain.",
      "الجلسة 2: الفاعلون المهددون ونواقل الهجوم وسلسلة القتل السيبراني ذات المراحل السبع.",
    ),
    l(
      "A strict ethical rule: analyse only fictional samples or public reports, and never run real malware outside an authorized isolated laboratory.",
      "قاعدة أخلاقية صارمة: حلّل فقط عينات خيالية أو تقارير عامة، ولا تشغّل برمجيات خبيثة حقيقية خارج مختبر معزول ومصرح به.",
    ),
  ],
  objectives: [
    l(
      "Explain the psychological levers that make social engineering effective.",
      "شرح الروافع النفسية التي تجعل الهندسة الاجتماعية فعّالة.",
    ),
    l(
      "Differentiate mass phishing, spear phishing, whaling, business email compromise, smishing, vishing and quishing.",
      "التمييز بين التصيّد الجماعي والموجّه وصيد الحيتان واختراق البريد التجاري والتصيّد النصي والصوتي والتصيّد عبر رموز QR.",
    ),
    l(
      "Inspect a suspicious message systematically using sender, header, link, attachment, tone and context evidence.",
      "فحص رسالة مشبوهة بشكل منهجي باستخدام دليل المرسل والترويسة والرابط والمرفق والنبرة والسياق.",
    ),
    l(
      "Classify common malware families by observed behavior rather than by name alone.",
      "تصنيف عائلات البرمجيات الخبيثة الشائعة حسب السلوك الملاحظ لا الاسم وحده.",
    ),
    l(
      "Describe infection paths, persistence methods and the anatomy of a modern ransomware incident.",
      "وصف مسارات العدوى وأساليب الاستمرارية وتشريح حادثة فدية حديثة.",
    ),
    l(
      "Select proportionate prevention, detection and response actions for a suspected phishing or malware incident.",
      "اختيار إجراءات وقاية وكشف واستجابة متناسبة لحادث تصيّد أو برمجيات خبيثة مشتبه به.",
    ),
  ],
  agenda: [
    { label: l("Recap, objectives and threat-vocabulary check", "المراجعة والأهداف والتحقق من مفردات التهديد"), minutes: 5 },
    { label: l("The psychology of social engineering and phishing variants", "نفسية الهندسة الاجتماعية وأنواع التصيّد"), minutes: 15 },
    { label: l("Inspecting messages and first-response actions", "فحص الرسائل وإجراءات الاستجابة الأولى"), minutes: 15 },
    { label: l("Malware families, infection paths and persistence", "عائلات البرمجيات الخبيثة ومسارات العدوى والاستمرارية"), minutes: 15 },
    { label: l("Ransomware anatomy, backups and resilience", "تشريح الفدية والنسخ الاحتياطي والمرونة"), minutes: 10 },
    { label: l("Instructor demonstration and lab briefing", "عرض المدرب وإحاطة المختبر"), minutes: 20 },
    { label: l("Assessment, recap and homework", "التقييم والمراجعة والواجب"), minutes: 10 },
  ],
  introduction: l(
    "A ransomware incident can begin with a message that looks ordinary: a delivery notice, a shared document, an invoice from a known supplier. The message does not need to be perfect. It only needs to arrive at a moment when the recipient is busy, worried or eager to help. Once a person clicks, the attacker may steal a session cookie, install a remote-access tool, or obtain credentials that open the way to the rest of the network. Weeks later, files are encrypted and a demand appears. This session examines both halves of that chain, because defending only one half leaves the other open.",
    "قد تبدأ حادثة الفدية برسالة تبدو عادية: إشعار شحن، أو مستند مشترك، أو فاتورة من مورّد معروف. ولا تحتاج الرسالة إلى أن تكون متقنة؛ يكفي أن تصل في لحظة يكون فيها المستلم مشغولًا أو قلقًا أو متلهفًا للمساعدة. وبعد أن ينقر الشخص، قد يسرق المهاجم ملف ارتباط جلسة، أو يثبت أداة وصول بعيد، أو يحصل على بيانات اعتماد تفتح الطريق لبقية الشبكة. وبعد أسابيع تُشفَّر الملفات ويظهر طلب الدفع. تفحص هذه الجلسة نصفَي السلسلة، لأن الدفاع عن نصف واحد يترك النصف الآخر مفتوحًا.",
  ),
  sections: [
    {
      h: l("1. Two entry routes: people and software", "1. مساران للدخول: الأشخاص والبرمجيات"),
      p: [
        l(
          "Most intrusions do not begin with a clever exploit. They begin with a person who trusts a message, or with software that was never patched. Social engineering and malware are therefore studied together: the message is often the delivery mechanism, and the malicious code is the payload. Attackers combine them because the weakest path is usually the one that requires the least technical resistance.",
          "لا تبدأ معظم الاختراقات باستغلال بارع. بل تبدأ بشخص يثق برسالة، أو ببرمجية لم تُحدَّث قط. ولهذا تُدرس الهندسة الاجتماعية والبرمجيات الخبيثة معًا: فالرسالة غالبًا وسيلة التسليم، والشيفرة الخبيثة هي الحمولة. ويجمعهما المهاجمون لأن أضعف مسار هو عادةً الذي يتطلب أقل مقاومة تقنية.",
        ),
        l(
          "The human route exploits trust, habit, authority and time pressure. The technical route exploits unpatched software, weak configurations, exposed services and stolen credentials. A mature defense treats both as part of one attack surface. Filtering every email is not enough if a user can approve a fraudulent payment; training every user is not enough if an exposed remote-desktop service accepts stolen passwords.",
          "يستغل المسار البشري الثقة والعادة والسلطة وضغط الوقت. ويستغل المسار التقني البرمجيات غير المحدّثة والإعدادات الضعيفة والخدمات المكشوفة وبيانات الاعتماد المسروقة. ويتعامل الدفاع الناضج مع الاثنين كجزء من سطح هجوم واحد. فتصفية كل رسالة بريد لا تكفي إذا كان بإمكان مستخدم الموافقة على دفعة احتيالية؛ وتدريب كل مستخدم لا يكفي إذا كانت خدمة سطح مكتب بعيد مكشوفة تقبل كلمات مرور مسروقة.",
        ),
        l(
          "This session follows the journey from a suspicious message to a possible ransomware incident. You will learn what each stage looks like, which evidence proves it, and which control interrupts it. The aim is not to turn learners into malware analysts or to make them afraid of every email, but to build correct instincts: stop, verify, isolate, report and preserve evidence.",
          "تتبع هذه الجلسة الرحلة من رسالة مشبوهة إلى حادثة فدية محتملة. وستتعلم كيف تبدو كل مرحلة، وما الدليل الذي يثبتها، وما الضابط الذي يعطّلها. والهدف ليس تحويل المتعلمين إلى محللي برمجيات خبيثة أو جعلهم يخافون من كل رسالة، بل بناء غرائز صحيحة: توقف، وتحقق، واعزل، وأبلغ، واحفظ الأدلة.",
        ),
      ],
      callout: {
        kind: "key",
        text: l(
          "Social engineering delivers access; malware monetizes it. Defend the hand-off between the two.",
          "الهندسة الاجتماعية توصل الوصول؛ والبرمجيات الخبيثة تستثمره. دافع عن نقطة التسليم بينهما.",
        ),
      },
    },
    {
      h: l("2. The psychology of social engineering", "2. نفسية الهندسة الاجتماعية"),
      p: [
        l(
          "Social engineering is the deliberate manipulation of people into revealing information, approving an action or running a file. It works because attackers exploit normal human traits rather than a technical flaw. People want to be helpful, respect authority, avoid embarrassment and react quickly to danger. A message that triggers one of these reflexes can succeed even when the recipient has received security training.",
          "الهندسة الاجتماعية هي التلاعب المتعمد بالأشخاص لدفعهم إلى كشف معلومات أو الموافقة على إجراء أو تشغيل ملف. وهي فعّالة لأن المهاجمين يستغلون صفات بشرية طبيعية لا ثغرة تقنية. فالناس يريدون المساعدة، ويحترمون السلطة، ويتجنبون الإحراج، ويتفاعلون بسرعة مع الخطر. والرسالة التي تثير أحد هذه الردود قد تنجح حتى لو تلقى المستلم تدريبًا أمنيًا.",
        ),
        l(
          "The most common levers are authority, urgency, fear, curiosity, reward, helpfulness and social proof. An attacker may pose as an executive who needs a payment immediately, a bank that will close an account today, a colleague who needs a favour before a meeting, or a supplier who claims everyone else has already updated their bank details. The request is usually small enough to seem reasonable and urgent enough to discourage verification.",
          "أشيع الروافع هي السلطة والاستعجال والخوف والفضول والمكافأة والرغبة في المساعدة والدليل الاجتماعي. فقد ينتحل المهاجم صفة مسؤول تنفيذي يحتاج دفعة فورًا، أو بنك سيغلق حسابًا اليوم، أو زميل يحتاج خدمة قبل اجتماع، أو مورّد يدعي أن الجميع حدّثوا بياناته المصرفية بالفعل. والطلب عادةً صغير بما يكفي ليبدو معقولًا، وعاجل بما يكفي ليثني عن التحقق.",
        ),
        l(
          "Awareness alone is not a control. People forget rules under pressure, and a convincing message can defeat vigilance. Organizations therefore pair education with procedures that make verification easy and expected: callback to a known number, two-person approval for payment changes, a one-click report button, and a no-blame response when someone clicks. The goal is to shorten the time between a mistake and a report, not to pretend that mistakes will never happen.",
          "الوعي وحده ليس ضابطًا. فالناس ينسون القواعد تحت الضغط، وقد تهزم رسالة مقنعة الحذر. لذا تقرن المؤسسات التوعية بإجراءات تجعل التحقق سهلًا ومتوقعًا: اتصال عكسي برقم معروف، وموافقة شخصين على تغيير بيانات الدفع، وزر إبلاغ بنقرة واحدة، واستجابة بلا لوم عندما ينقر شخص. والهدف تقصير الوقت بين الخطأ والإبلاغ، لا الادعاء بأن الأخطاء لن تحدث أبدًا.",
        ),
      ],
      table: {
        head: [l("Lever", "الرافعة"), l("How it sounds", "كيف تظهر"), l("Safer response", "الاستجابة الأكثر أمانًا")],
        rows: [
          [l("Authority", "السلطة"), l("The director needs this approved now", "المدير يحتاج الموافقة الآن"), l("Verify through a known channel, not the message", "تحقق عبر قناة معروفة لا عبر الرسالة")],
          [l("Urgency", "الاستعجال"), l("Act within fifteen minutes or access is lost", "تصرف خلال خمس عشرة دقيقة وإلا فقدت الوصول"), l("Slow down; urgency is a warning sign", "تمهّل؛ فالاستعجال علامة تحذير")],
          [l("Fear", "الخوف"), l("Your account will be suspended", "سيُعلَّق حسابك"), l("Open the service directly by typing its address", "افتح الخدمة مباشرة بكتابة عنوانها")],
          [l("Curiosity or reward", "الفضول أو المكافأة"), l("You have won a voucher", "لقد ربحت قسيمة"), l("Do not click; verify the promotion independently", "لا تنقر؛ وتحقق من العرض باستقلال")],
          [l("Helpfulness", "الرغبة في المساعدة"), l("I am in a meeting; can you send the code?", "أنا في اجتماع؛ هل يمكنك إرسال الرمز؟"), l("Refuse politely and report the request", "ارفض بلطف وأبلغ عن الطلب")],
          [l("Social proof", "الدليل الاجتماعي"), l("Everyone has already completed this", "الجميع أكملوا هذا بالفعل"), l("Check the official procedure, not the claim", "راجع الإجراء الرسمي لا الادعاء")],
        ],
      },
    },
    {
      h: l("3. Phishing and its variants", "3. التصيّد وأنواعه"),
      p: [
        l(
          "Phishing is fraudulent communication that imitates a trusted person or organization to steal credentials, obtain money or deliver malware. Mass phishing sends the same message to many recipients and relies on volume. Targeted phishing studies the victim and uses real names, projects, suppliers or travel plans to make the message credible. The more research behind a message, the less it looks like the stereotypical phishing email.",
          "التصيّد هو تواصل احتيالي ينتحل صفة شخص أو مؤسسة موثوقة لسرقة بيانات الاعتماد أو الحصول على المال أو توصيل برمجيات خبيثة. ويرسل التصيّد الجماعي الرسالة نفسها إلى مستلمين كثيرين ويعتمد على الحجم. أما التصيّد المستهدف فيدرس الضحية ويستخدم أسماء ومشاريع وموردين أو خطط سفر حقيقية ليجعل الرسالة مقنعة. وكلما زاد البحث خلف الرسالة، قلّ شبهها برسالة التصيّد النمطية.",
        ),
        l(
          "Variants differ by channel and objective. Spear phishing targets a specific person; whaling targets senior executives; business email compromise impersonates an executive or supplier to redirect a payment; smishing uses text messages; vishing uses phone calls; quishing hides a link in a QR code. Clone phishing copies a legitimate message and replaces its link or attachment, while thread hijacking sends a reply inside an existing conversation after taking over an account.",
          "تختلف الأنواع حسب القناة والهدف. فالتصيّد الموجّه يستهدف شخصًا محددًا؛ وصيد الحيتان يستهدف كبار التنفيذيين؛ واختراق البريد التجاري ينتحل صفة مسؤول أو مورّد لتحويل دفعة؛ والتصيّد النصي يستخدم الرسائل النصية؛ والصوتي يستخدم المكالمات؛ والتصيّد عبر QR يخفي رابطًا في رمز. وينسخ التصيّد المستنسخ رسالة مشروعة ويستبدل رابطها أو مرفقها، بينما يرسل اختطاف المحادثة ردًا داخل محادثة قائمة بعد الاستيلاء على حساب.",
        ),
        l(
          "Business email compromise deserves special attention because it may involve no malware at all. The attacker gains access to a mailbox, studies invoices and payment procedures, then sends a plausible request from a real account. Technical filters may see a legitimate domain and a valid signature. The decisive control is a business process: verify payment changes by calling a known number and require independent approval for high-value transfers.",
          "يستحق اختراق البريد التجاري اهتمامًا خاصًا لأنه قد لا يتضمن أي برمجية خبيثة. فالمهاجم يصل إلى صندوق بريد، ويدرس الفواتير وإجراءات الدفع، ثم يرسل طلبًا معقولًا من حساب حقيقي. وقد ترى المرشحات التقنية نطاقًا مشروعًا وتوقيعًا صالحًا. والضابط الحاسم هو إجراء عمل: التحقق من تغييرات الدفع بالاتصال برقم معروف، وطلب موافقة مستقلة للتحويلات عالية القيمة.",
        ),
      ],
      table: {
        head: [l("Variant", "النوع"), l("Channel and target", "القناة والهدف"), l("Typical trick", "الحيلة المعتادة"), l("First control", "أول ضابط")],
        rows: [
          [l("Mass phishing", "تصيّد جماعي"), l("Email to many recipients", "بريد إلى مستلمين كثيرين"), l("Fake bank, delivery or account warning", "تحذير مزيف من بنك أو شحن أو حساب"), l("Filtering, link isolation, reporting", "تصفية وعزل الروابط وإبلاغ")],
          [l("Spear phishing", "تصيّد موجّه"), l("A researched individual", "شخص محدد بعد دراسته"), l("Real colleagues, projects and deadlines", "زملاء ومشاريع ومواعيد حقيقية"), l("Verification procedure and awareness", "إجراء تحقق وتوعية")],
          [l("Whaling", "صيد الحيتان"), l("Senior executives", "كبار التنفيذيين"), l("Fake legal, board or acquisition document", "مستند قانوني أو مجلس إدارة أو استحواذ مزيف"), l("Executive protection and out-of-band checks", "حماية التنفيذيين وتحقق خارج القناة")],
          [l("Business email compromise", "اختراق البريد التجاري"), l("Finance and procurement staff", "موظفو المالية والمشتريات"), l("Changed bank details or urgent transfer", "تغيير بيانات مصرفية أو تحويل عاجل"), l("Callback and two-person approval", "اتصال تحقق وموافقة شخصين")],
          [l("Smishing", "التصيّد النصي"), l("SMS and messaging apps", "الرسائل النصية وتطبيقات المحادثة"), l("Fake parcel, tax refund or bank alert", "شحنة أو استرداد ضريبي أو تنبيه بنكي مزيف"), l("Do not use the link; open the official app", "لا تستخدم الرابط؛ افتح التطبيق الرسمي")],
          [l("Vishing", "التصيّد الصوتي"), l("Phone calls", "المكالمات الهاتفية"), l("Fake IT support asks for a one-time code", "دعم تقني مزيف يطلب رمزًا لمرة واحدة"), l("Hang up and call the known number", "أغلق واتصل بالرقم المعروف")],
          [l("Quishing", "التصيّد عبر QR"), l("Posters, invoices, email images", "ملصقات وفواتير وصور بريد"), l("QR code leads to a credential page", "رمز QR يقود إلى صفحة بيانات اعتماد"), l("Inspect the destination before scanning", "افحص الوجهة قبل المسح")],
          [l("Adversary-in-the-middle", "هجوم الوسيط"), l("Look-alike login page", "صفحة دخول مشابهة"), l("Proxies the real login and steals the session", "يمرر الدخول الحقيقي ويسرق الجلسة"), l("Phishing-resistant MFA and origin checks", "مصادقة مقاومة للتصيّد وفحص الأصل")],
        ],
      },
      callout: {
        kind: "warn",
        text: l(
          "AI-generated voice and video make urgent executive requests more convincing. Always verify payment and credential requests through a second, known channel.",
          "يجعل الصوت والفيديو المولدان بالذكاء الاصطناعي طلبات المسؤولين العاجلة أكثر إقناعًا. تحقق دائمًا من طلبات الدفع وبيانات الاعتماد عبر قناة ثانية معروفة.",
        ),
      },
    },
    {
      h: l("4. Inspecting a suspicious message", "4. فحص رسالة مشبوهة"),
      p: [
        l(
          "Use a repeatable loop rather than gut feeling: STOP, LOOK, VERIFY, REPORT. Stop before clicking or replying. Look at the sender, the real destination of links, the attachment type, the tone and the context. Verify through a separate channel that you already trust, such as a known phone number or the official application. Report through the organization's button or security contact, then delete the message if instructed.",
          "استخدم حلقة متكررة بدل الحدس: توقف، وتفحص، وتحقق، وأبلغ. توقف قبل النقر أو الرد. وتفحص المرسل، والوجهة الحقيقية للروابط، ونوع المرفق، والنبرة، والسياق. وتحقق عبر قناة منفصلة تثق بها مسبقًا، مثل رقم هاتف معروف أو التطبيق الرسمي. وأبلغ عبر زر المؤسسة أو جهة الاتصال الأمنية، ثم احذف الرسالة إذا طُلب منك ذلك.",
        ),
        l(
          "The sender line deserves careful reading. Check the exact domain, not just the display name, and look for look-alike characters, extra words, unusual subdomains and a Reply-To address that differs from the From address. Server-side authentication such as SPF, DKIM and DMARC helps verify the domain, but a pass result does not prove the content is safe: a compromised legitimate account can send a malicious message that passes every check.",
          "يستحق سطر المرسل قراءة دقيقة. افحص النطاق الدقيق لا اسم العرض فقط، وابحث عن أحرف مشابهة أو كلمات إضافية أو نطاقات فرعية غير معتادة أو عنوان رد يختلف عن عنوان المرسل. وتساعد مصادقة الخادم مثل SPF وDKIM وDMARC على التحقق من النطاق، لكن نتيجة النجاح لا تثبت أن المحتوى آمن: فقد يرسل حساب مشروع مخترق رسالة خبيثة تجتاز كل الفحوص.",
        ),
        l(
          "Links can display one address and lead to another. Hover or long-press to inspect the real destination, and be suspicious of shortened links, unexpected login pages and QR codes that cannot be previewed. Attachments deserve equal caution: double extensions such as .pdf.exe, macro-enabled office files, password-protected archives, disk images and HTML files can all deliver code. Tone and context are the final layer: unexpected urgency, secrecy, generic greetings and requests for money, gift cards or one-time codes are reasons to slow down.",
          "قد يعرض الرابط عنوانًا ويقود إلى آخر. مرّر المؤشر أو اضغط مطولًا لفحص الوجهة الحقيقية، وكن حذرًا من الروابط المختصرة وصفحات الدخول غير المتوقعة ورموز QR التي لا يمكن معاينتها. وتستحق المرفقات الحذر نفسه: فالامتدادات المزدوجة مثل .pdf.exe وملفات المكتب المفعّلة بالماكرو والأرشيفات المحمية بكلمة مرور وملفات صور الأقراص وملفات HTML يمكن أن توصل شيفرة. والنبرة والسياق هما الطبقة الأخيرة: فالاستعجال غير المتوقع والسرية والتحيات العامة وطلبات المال أو بطاقات الهدايا أو رموز الاستخدام لمرة واحدة أسباب للتمهل.",
        ),
      ],
      bullets: [
        l("Sender: exact domain, display name, Reply-To and any look-alike characters.", "المرسل: النطاق الدقيق واسم العرض وعنوان الرد وأي أحرف مشابهة."),
        l("Links: real destination, shortened URLs, QR codes and unexpected login pages.", "الروابط: الوجهة الحقيقية والروابط المختصرة ورموز QR وصفحات الدخول غير المتوقعة."),
        l("Attachments: double extensions, macros, archives, disk images and HTML files.", "المرفقات: الامتدادات المزدوجة والماكرو والأرشيفات وصور الأقراص وملفات HTML."),
        l("Tone: urgency, threats, secrecy, generic greetings and unusual payment requests.", "النبرة: الاستعجال والتهديد والسرية والتحيات العامة وطلبات الدفع غير المعتادة."),
        l("Context: did you expect this, and does it match the sender's normal behavior?", "السياق: هل كنت تتوقع هذا، وهل يتفق مع السلوك المعتاد للمرسل؟"),
      ],
      callout: {
        kind: "key",
        text: l(
          "Legitimate organizations do not ask for your password, PIN or one-time code by email, text message or phone call.",
          "المؤسسات الشرعية لا تطلب كلمة مرورك أو رقمك السري أو رمز الاستخدام لمرة واحدة عبر البريد أو الرسائل النصية أو الهاتف.",
        ),
      },
    },
    {
      h: l("5. What malware is and how families behave", "5. ما هي البرمجيات الخبيثة وكيف تتصرف عائلاتها"),
      p: [
        l(
          "Malware is software or code designed to harm, spy, steal or take control of a system without informed consent. It is best classified by behavior: how it spreads, what it does after execution, and how it hides. The familiar labels are useful shortcuts, but they overlap. A trojan may install an infostealer, an infostealer may download ransomware, and a ransomware affiliate may use a botnet for initial access.",
          "البرمجيات الخبيثة هي برمجيات أو شيفرة مصممة لإلحاق الضرر أو التجسس أو السرقة أو السيطرة على نظام دون موافقة مستنيرة. والأفضل تصنيفها حسب السلوك: كيف تنتشر، وماذا تفعل بعد التنفيذ، وكيف تختفي. والتسميات المألوفة اختصارات مفيدة لكنها تتداخل. فقد يثبت حصان طروادة سارق معلومات، وقد ينزّل سارق المعلومات برمجية فدية، وقد يستخدم شريك الفدية شبكة بوت للوصول الأولي.",
        ),
        l(
          "Modern malware is often a business. Commodity kits and malware-as-a-service lower the skill required, while ransomware-as-a-service divides the work between developers and affiliates. Loaders and droppers install further payloads, remote-access trojans provide interactive control, and infostealers collect credentials, cookies and session tokens that can be sold or reused. This division of labor means that an incident may involve several families and several criminal parties.",
          "غالبًا ما تكون البرمجيات الخبيثة الحديثة عملًا تجاريًا. فأطقم الأدوات الجاهزة والبرمجيات الخبيثة كخدمة تخفض المهارة المطلوبة، بينما تقسم الفدية كخدمة العمل بين المطورين والشركاء. وتثبت المحمّلات والمسقطات حمولات إضافية، وتوفر أحصنة الوصول البعيد تحكمًا تفاعليًا، وتجمع سارقات المعلومات بيانات الاعتماد وملفات الارتباط ورموز الجلسات لبيعها أو إعادة استخدامها. ويعني هذا التقسيم أن الحادث قد يشمل عائلات عدة وأطرافًا إجرامية عدة.",
        ),
        l(
          "Defenders should avoid arguing about the label during an incident. The useful questions are behavioral: what process ran, what did it write, what network connection did it make, what persistence did it create, and which account did it use? These answers guide containment and detection regardless of whether the sample is called a trojan, a loader or a backdoor.",
          "يجب أن يتجنب المدافعون الجدال حول التسمية أثناء الحادث. والأسئلة المفيدة سلوكية: أي عملية عملت، وماذا كتبت، وأي اتصال شبكي أجرت، وأي استمرارية أنشأت، وأي حساب استخدمت؟ وتوجه هذه الإجابات الاحتواء والكشف سواء سُميت العينة حصان طروادة أو محمّلًا أو بابًا خلفيًا.",
        ),
      ],
      table: {
        head: [l("Family", "العائلة"), l("Observed behavior", "السلوك الملاحظ"), l("Typical sign", "العلامة النموذجية"), l("Primary defense", "الدفاع الأساسي")],
        rows: [
          [l("Virus", "فيروس"), l("Attaches to files and spreads when they are run or shared", "يلتصق بالملفات وينتشر عند تشغيلها أو مشاركتها"), l("Corrupted or modified documents and programs", "مستندات وبرامج تالفة أو معدلة"), l("Patching, antivirus, controlled file sharing", "تحديث ومكافحة فيروسات ومشاركة ملفات مضبوطة")],
          [l("Worm", "دودة"), l("Self-replicates across networks without user action", "تنسخ نفسها عبر الشبكات دون تدخل المستخدم"), l("Rapid spread among unpatched hosts", "انتشار سريع بين الأجهزة غير المحدّثة"), l("Patching, segmentation, endpoint monitoring", "تحديث وتقسيم ومراقبة الأجهزة")],
          [l("Trojan", "حصان طروادة"), l("Disguises itself as useful software and is installed by the user", "يتنكر كبرنامج مفيد ويثبته المستخدم"), l("Unexpected remote-access service after a download", "خدمة وصول بعيد غير متوقعة بعد تنزيل"), l("Application control, user awareness, endpoint detection", "تقييد التطبيقات وتوعية المستخدم وكشف على الأجهزة")],
          [l("Ransomware", "برمجية فدية"), l("Encrypts or steals data and demands payment", "تشفّر البيانات أو تسرقها وتطلب دفعًا"), l("Renamed files and a ransom note", "ملفات معاد تسميتها وملاحظة فدية"), l("Tested offline backups, segmentation, least privilege", "نسخ احتياطية مختبرة دون اتصال وتقسيم وأقل امتياز")],
          [l("Infostealer / spyware", "سارق معلومات / تجسس"), l("Collects credentials, cookies, keystrokes or screenshots", "يجمع بيانات الاعتماد وملفات الارتباط وضغطات المفاتيح أو لقطات الشاشة"), l("Account takeover from a new location", "استيلاء على حساب من موقع جديد"), l("Phishing-resistant MFA, endpoint detection, credential reset", "مصادقة مقاومة للتصيّد وكشف على الأجهزة وإعادة تعيين بيانات الاعتماد")],
          [l("Rootkit", "حزمة جذرية"), l("Hides itself and other code deep in the operating system or firmware", "تخفي نفسها وشيفرة أخرى في عمق نظام التشغيل أو البرمجية الثابتة"), l("Security tools report nothing while behavior is abnormal", "أدوات الأمن لا تبلغ عن شيء بينما السلوك غير طبيعي"), l("Secure boot, integrity monitoring, rebuild from trusted media", "إقلاع آمن ومراقبة سلامة وإعادة بناء من وسائط موثوقة")],
          [l("Botnet client", "عميل شبكة بوت"), l("Receives remote commands and participates in coordinated activity", "يتلقى أوامر بعيدة ويشارك في نشاط منسق"), l("Regular outbound traffic to an unknown controller", "حركة صادرة منتظمة إلى متحكم مجهول"), l("Egress filtering, DNS monitoring, endpoint isolation", "تصفية الخروج ومراقبة DNS وعزل الأجهزة")],
          [l("Loader / dropper", "محمّل / مسقط"), l("Installs a further payload and often disappears", "يثبت حمولة إضافية وغالبًا يختفي"), l("A small download followed by a second-stage process", "تنزيل صغير يتبعه إجراء من مرحلة ثانية"), l("Application control, macro blocking, behavioral detection", "تقييد التطبيقات وحظر الماكرو والكشف السلوكي")],
        ],
      },
      callout: {
        kind: "warn",
        text: l(
          "Names describe behavior, not a fixed list. One incident can involve a phishing message, an infostealer, a loader and ransomware.",
          "تصف الأسماء سلوكًا لا قائمة ثابتة. وقد يشمل الحادث الواحد رسالة تصيّد وسارق معلومات ومحمّلًا وبرمجية فدية.",
        ),
      },
    },
    {
      h: l("6. Infection paths, persistence and evasion", "6. مسارات العدوى والاستمرارية والتهرب"),
      p: [
        l(
          "Malware needs a way in. Common paths include phishing attachments and links, drive-by downloads from compromised websites, cracked software and fake updates, infected removable media, exploitation of unpatched internet-facing services, stolen remote-access credentials, and compromised software suppliers. The same organization may be exposed through several paths at once, which is why a single control is never enough.",
          "تحتاج البرمجيات الخبيثة إلى منفذ. وتشمل المسارات الشائعة مرفقات وروابط التصيّد، والتنزيل التلقائي من مواقع مخترقة، والبرمجيات المقرصنة والتحديثات المزيفة، والوسائط القابلة للإزالة المصابة، واستغلال الخدمات المكشوفة غير المحدّثة، وبيانات اعتماد الوصول البعيد المسروقة، وموردي البرمجيات المخترقين. وقد تكون المؤسسة نفسها مكشوفة عبر مسارات عدة في وقت واحد، ولهذا لا يكفي ضابط واحد أبدًا.",
        ),
        l(
          "After execution, malware tries to survive reboots and cleanup. Persistence may use startup folders and registry run keys, scheduled tasks, services, cron jobs or systemd units, new local accounts, or modifications to boot components. Some techniques live off legitimate system tools to blend in, a practice often called living off the land. Others run entirely in memory or hide inside trusted processes, making file-based scanning less effective.",
          "بعد التنفيذ، تحاول البرمجيات الخبيثة البقاء بعد إعادة التشغيل والتنظيف. وقد تستخدم الاستمرارية مجلدات بدء التشغيل ومفاتيح تشغيل التسجيل، والمهام المجدولة، والخدمات، ومهام cron أو وحدات systemd، وحسابات محلية جديدة، أو تعديل مكونات الإقلاع. وتستفيد بعض التقنيات من أدوات النظام المشروعة لتندمج، وهو ما يُسمى غالبًا العيش على أدوات النظام. وتعمل تقنيات أخرى بالكامل في الذاكرة أو تختبئ داخل عمليات موثوقة، فتصبح الفحوص المعتمدة على الملفات أقل فعالية.",
        ),
        l(
          "Evasion includes disabling security tools, encrypting or packing code, delaying execution, detecting analysis environments and using trusted cloud services for command and control. Defenders respond with behavior-based detection, endpoint telemetry, application control, egress filtering, integrity monitoring and a healthy assumption that prevention will sometimes fail. Visibility after a missed prevention is what turns a small incident into a contained one.",
          "يشمل التهرب تعطيل أدوات الأمن، وتشفير الشيفرة أو ضغطها، وتأخير التنفيذ، وكشف بيئات التحليل، واستخدام خدمات سحابية موثوقة للتحكم والسيطرة. ويرد المدافعون بالكشف القائم على السلوك، والقياس عن بعد للأجهزة، وتقييد التطبيقات، وتصفية الخروج، ومراقبة السلامة، وافتراض صحي بأن المنع سيفشل أحيانًا. والرؤية بعد فشل المنع هي ما يحوّل حادثًا صغيرًا إلى حادث محتوى.",
        ),
      ],
      bullets: [
        l("Startup folders, registry run keys and login scripts.", "مجلدات بدء التشغيل ومفاتيح تشغيل التسجيل ونصوص الدخول."),
        l("Scheduled tasks, services, cron jobs and systemd units.", "المهام المجدولة والخدمات ومهام cron ووحدات systemd."),
        l("New or modified accounts, including hidden administrative users.", "حسابات جديدة أو معدلة، بما فيها المستخدمون الإداريون المخفيون."),
        l("Boot components, drivers and firmware-level implants.", "مكونات الإقلاع وبرامج التشغيل والزرعات على مستوى البرمجية الثابتة."),
      ],
    },
    {
      h: l("7. Ransomware anatomy and double extortion", "7. تشريح الفدية والابتزاز المزدوج"),
      p: [
        l(
          "Modern ransomware is rarely a single click. An affiliate gains initial access, explores the network, steals credentials, escalates privileges and moves laterally. Before encryption, the attackers often copy sensitive data out so they can threaten to publish it, a technique called double extortion. They may also delete or encrypt backups, disable recovery tools and choose a quiet time such as a weekend or holiday to maximize disruption.",
          "نادرًا ما تكون الفدية الحديثة نقرة واحدة. فالشريك يحصل على وصول أولي، ويستكشف الشبكة، ويسرق بيانات الاعتماد، ويرفع الامتيازات، ويتحرك جانبيًا. وقبل التشفير، ينسخ المهاجمون غالبًا بيانات حساسة إلى الخارج ليهددوا بنشرها، وهو أسلوب يُسمى الابتزاز المزدوج. وقد يحذفون النسخ الاحتياطية أو يشفّرونها، ويعطّلون أدوات الاستعادة، ويختارون وقتًا هادئًا مثل عطلة نهاية الأسبوع أو العطلة الرسمية لتعظيم التعطيل.",
        ),
        l(
          "Resilience is built before the incident. Keep multiple backup copies on different media, with at least one copy off-site and one offline or immutable, and verify restores regularly. This is often summarized as 3-2-1-1-0: three copies, two media types, one off-site, one offline or immutable, and zero errors in restoration testing. Segmentation limits lateral movement, phishing-resistant MFA protects remote access, patching closes exposed services, and endpoint detection catches the earlier stages.",
          "تُبنى المرونة قبل الحادث. احتفظ بنسخ احتياطية متعددة على وسائط مختلفة، مع نسخة واحدة على الأقل خارج الموقع ونسخة معزولة أو غير قابلة للتعديل، وتحقق من الاستعادة بانتظام. ويُلخص هذا غالبًا بقاعدة 3-2-1-1-0: ثلاث نسخ، ونوعا وسائط، ونسخة خارج الموقع، ونسخة معزولة أو غير قابلة للتعديل، وصفر أخطاء في اختبار الاستعادة. ويحد التقسيم من الحركة الجانبية، وتحمي المصادقة المقاومة للتصيّد الوصول البعيد، ويغلق التحديث الخدمات المكشوفة، ويكشف رصد الأجهزة المراحل المبكرة.",
        ),
        l(
          "Payment is an organizational, legal and ethical decision, not a technical one. Paying does not guarantee recovery, may fund further crime and can create legal or sanctions complications. The security team should preserve evidence, determine the scope, coordinate with legal counsel and law enforcement according to policy, and restore from clean backups only after the attacker's access has been removed. Restoring into an infected environment simply gives the attacker another target.",
          "الدفع قرار تنظيمي وقانوني وأخلاقي، لا قرار تقني. فالدفع لا يضمن الاستعادة، وقد يموّل جرائم أخرى، وقد يخلق تعقيدات قانونية أو متعلقة بالعقوبات. ويجب أن يحفظ فريق الأمن الأدلة، ويحدد النطاق، وينسق مع المستشار القانوني وإنفاذ القانون وفق السياسة، ويستعيد من نسخ نظيفة فقط بعد إزالة وصول المهاجم. فالاستعادة داخل بيئة مصابة تمنح المهاجم هدفًا آخر فحسب.",
        ),
      ],
      table: {
        head: [l("Stage", "المرحلة"), l("Attacker activity", "نشاط المهاجم"), l("Defensive opportunity", "الفرصة الدفاعية")],
        rows: [
          [l("Initial access", "الوصول الأولي"), l("Phishing, exposed service or stolen credentials", "تصيّد أو خدمة مكشوفة أو بيانات اعتماد مسروقة"), l("Filtering, patching, MFA, surface reduction", "تصفية وتحديث ومصادقة وتقليل السطح")],
          [l("Discovery and privilege escalation", "الاستكشاف ورفع الامتيازات"), l("Map systems, steal credentials, find administrators", "رسم الأنظمة وسرقة بيانات الاعتماد والعثور على المسؤولين"), l("Least privilege, tiered administration, monitoring", "أقل امتياز وإدارة متدرجة ومراقبة")],
          [l("Lateral movement", "الحركة الجانبية"), l("Move from host to host using valid accounts", "الانتقال بين الأجهزة بحسابات صالحة"), l("Segmentation, credential hygiene, anomaly detection", "تقسيم ونظافة بيانات الاعتماد وكشف الشذوذ")],
          [l("Exfiltration", "تسريب البيانات"), l("Copy sensitive data to external storage or services", "نسخ بيانات حساسة إلى تخزين أو خدمات خارجية"), l("Egress filtering, data-loss prevention, volume alerts", "تصفية الخروج ومنع تسرب البيانات وتنبيهات الحجم")],
          [l("Backup destruction", "تدمير النسخ الاحتياطي"), l("Delete, encrypt or disable recovery copies", "حذف نسخ الاستعادة أو تشفيرها أو تعطيلها"), l("Offline and immutable backups, separate credentials", "نسخ معزولة وغير قابلة للتعديل وبيانات اعتماد منفصلة")],
          [l("Impact", "الأثر"), l("Encrypt data and demand payment", "تشفير البيانات وطلب الدفع"), l("Tested restoration, incident response, communications", "استعادة مختبرة واستجابة للحوادث وتواصل")],
        ],
      },
      callout: {
        kind: "warn",
        text: l(
          "A backup that has never been restored is only a hope. Test restores and keep at least one copy disconnected from the network.",
          "النسخة الاحتياطية التي لم تُستعَد قط مجرد أمل. اختبر الاستعادة وأبقِ نسخة واحدة على الأقل منفصلة عن الشبكة.",
        ),
      },
    },
    {
      h: l("8. Detecting and responding to a suspected infection", "8. كشف الإصابة المشتبه بها والاستجابة لها"),
      p: [
        l(
          "Early signs are rarely dramatic. A device may slow down, security tools may stop working, an unknown program may appear at startup, a browser may redirect to unfamiliar pages, or a workstation may make regular outbound connections at night. Ransomware adds mass file renames, disabled recovery features and a ransom note. Account compromise may appear as unusual login locations, repeated MFA prompts or mailbox rules that forward messages to an external address.",
          "نادرًا ما تكون العلامات المبكرة درامية. فقد يبطئ جهاز، أو تتوقف أدوات الأمن، أو يظهر برنامج مجهول عند بدء التشغيل، أو يعيد المتصفح التوجيه إلى صفحات غير مألوفة، أو يجري جهاز اتصالات صادرة منتظمة ليلًا. وتضيف الفدية إعادة تسمية جماعية للملفات وتعطيل ميزات الاستعادة وملاحظة طلب دفع. وقد يظهر اختراق الحساب كمواقع دخول غير معتادة أو طلبات مصادقة متكررة أو قواعد بريد تحوّل الرسائل إلى عنوان خارجي.",
        ),
        l(
          "If you suspect an infection, isolate the device from the network, but avoid powering it off when forensic evidence matters because volatile memory can be lost. Report immediately and do not try to hide the mistake. If you entered credentials, change them from a different clean device, revoke active sessions and enable stronger authentication. Preserve messages, logs and notes, and follow the organization's incident-response procedure rather than improvising.",
          "إذا اشتبهت بإصابة، اعزل الجهاز عن الشبكة، لكن تجنب إطفاءه عندما تكون الأدلة الجنائية مهمة لأن الذاكرة المتطايرة قد تُفقد. وأبلغ فورًا ولا تحاول إخفاء الخطأ. وإذا أدخلت بيانات اعتماد، فغيّرها من جهاز آخر نظيف، وأبطل الجلسات النشطة، وفعّل مصادقة أقوى. واحفظ الرسائل والسجلات والملاحظات، واتبع إجراء الاستجابة للحوادث في المؤسسة بدل الارتجال.",
        ),
        l(
          "Response has phases: triage, containment, eradication, recovery and lessons learned. Triage asks who is affected, what was executed, when it started, where it spread and what evidence exists. Containment limits spread; eradication removes the cause; recovery restores trusted service; lessons learned fixes the path that allowed the incident. A no-blame culture produces faster reports and smaller incidents, because people report mistakes before they become disasters.",
          "للاستجابة مراحل: الفرز، والاحتواء، والاستئصال، والاستعادة، والدروس المستفادة. ويسأل الفرز من تأثر، وماذا نُفذ، ومتى بدأ، وأين انتشر، وما الأدلة المتاحة. ويحد الاحتواء من الانتشار؛ ويزيل الاستئصال السبب؛ وتستعيد الاستعادة خدمة موثوقة؛ وتصلح الدروس المستفادة المسار الذي سمح بالحادث. وتنتج ثقافة عدم اللوم بلاغات أسرع وحوادث أصغر، لأن الناس يبلغون عن الأخطاء قبل أن تصبح كوارث.",
        ),
      ],
      bullets: [
        l("Isolate the device or account without destroying evidence.", "اعزل الجهاز أو الحساب دون إتلاف الأدلة."),
        l("Report through the official channel and record the time.", "أبلغ عبر القناة الرسمية وسجّل الوقت."),
        l("Change exposed credentials from a clean device and revoke sessions.", "غيّر بيانات الاعتماد المكشوفة من جهاز نظيف وأبطل الجلسات."),
        l("Preserve the message, headers, logs and a timeline of actions.", "احفظ الرسالة والترويسات والسجلات وخطًا زمنيًا للإجراءات."),
        l("Do not pay, do not delete evidence and do not contact the attacker.", "لا تدفع ولا تحذف الأدلة ولا تتواصل مع المهاجم."),
      ],
    },
    {
      h: l("9. Organizational defenses: a layered program", "9. دفاعات المؤسسة: برنامج متعدد الطبقات"),
      p: [
        l(
          "A credible defense program maps controls to the stages it wants to interrupt. Email filtering, DMARC enforcement, attachment sandboxing and link isolation reduce delivery. Patching, secure configuration and phishing-resistant MFA reduce exploitation and credential theft. Application control, endpoint detection and least privilege reduce installation and persistence. Segmentation and egress filtering reduce lateral movement and command and control. Tested backups and incident response reduce the impact of the final stage.",
          "يربط برنامج الدفاع الموثوق الضوابط بالمراحل التي يريد تعطيلها. فتصفية البريد وتطبيق DMARC وعزل المرفقات في بيئة رملية وعزل الروابط تقلل التسليم. ويقلل التحديث والإعداد الآمن والمصادقة المقاومة للتصيّد من الاستغلال وسرقة بيانات الاعتماد. ويقلل تقييد التطبيقات وكشف الأجهزة وأقل امتياز من التثبيت والاستمرارية. ويقلل التقسيم وتصفية الخروج من الحركة الجانبية والتحكم والسيطرة. وتقلل النسخ الاحتياطية المختبرة والاستجابة للحوادث من أثر المرحلة النهائية.",
        ),
        l(
          "People controls must be usable. A report button that is hard to find will not be used; a verification procedure that takes an hour will be bypassed; a phishing simulation that humiliates staff will suppress reporting. Make the secure action the easiest action, measure reporting speed rather than only click rate, and publish clear procedures for payment changes, credential reset and device isolation.",
          "يجب أن تكون ضوابط الأشخاص قابلة للاستخدام. فزر إبلاغ يصعب العثور عليه لن يُستخدم؛ وإجراء تحقق يستغرق ساعة سيُتجاوز؛ وتمرين تصيّد يهين الموظفين سيكبت الإبلاغ. اجعل الإجراء الآمن هو الأسهل، وقس سرعة الإبلاغ لا معدل النقر فقط، وانشر إجراءات واضحة لتغيير الدفع وإعادة تعيين بيانات الاعتماد وعزل الأجهزة.",
        ),
        l(
          "Metrics keep the program honest. Track MFA coverage, patch time for exposed services, restore-test success, time to report a phishing message, time to isolate a suspected host and the percentage of high-value payments verified out of band. Avoid vanity metrics such as the number of alerts or the number of training sessions delivered. A control that exists but is unused, untested or unowned is not a real defense.",
          "تبقي المقاييس البرنامج صادقًا. تتبع تغطية المصادقة متعددة العوامل، وزمن تحديث الخدمات المكشوفة، ونجاح اختبار الاستعادة، وزمن الإبلاغ عن رسالة تصيّد، وزمن عزل جهاز مشتبه به، ونسبة المدفوعات عالية القيمة التي تم التحقق منها خارج القناة. وتجنب المقاييس المظهرية مثل عدد التنبيهات أو عدد جلسات التدريب. فالضابط الموجود لكن غير المستخدم أو غير المختبر أو بلا مالك ليس دفاعًا حقيقيًا.",
        ),
      ],
      table: {
        head: [l("Layer", "الطبقة"), l("Representative controls", "ضوابط تمثيلية"), l("Threat interrupted", "التهديد المعطّل")],
        rows: [
          [l("Email", "البريد"), l("DMARC enforcement, filtering, sandboxing, link isolation, report button", "تطبيق DMARC والتصفية والعزل الرملي وعزل الروابط وزر الإبلاغ"), l("Phishing delivery", "تسليم التصيّد")],
          [l("Identity", "الهوية"), l("Phishing-resistant MFA, conditional access, privileged access management", "مصادقة مقاومة للتصيّد ووصول شرطي وإدارة وصول مميز"), l("Credential theft and account takeover", "سرقة بيانات الاعتماد والاستيلاء على الحساب")],
          [l("Endpoint", "الأجهزة الطرفية"), l("EDR, application control, patching, macro blocking", "كشف واستجابة على الأجهزة وتقييد التطبيقات وتحديث وحظر الماكرو"), l("Execution, installation and persistence", "التنفيذ والتثبيت والاستمرارية")],
          [l("Network", "الشبكة"), l("Segmentation, egress filtering, DNS monitoring, closed ports", "تقسيم وتصفية الخروج ومراقبة DNS وإغلاق المنافذ"), l("Lateral movement and command and control", "الحركة الجانبية والتحكم والسيطرة")],
          [l("Data", "البيانات"), l("Offline and immutable backups, encryption, data-loss prevention", "نسخ معزولة وغير قابلة للتعديل وتشفير ومنع تسرب البيانات"), l("Exfiltration and ransomware impact", "تسريب البيانات وأثر الفدية")],
          [l("Process", "العمليات"), l("Callback verification, two-person approval, incident response exercises", "تحقق بالاتصال وموافقة شخصين وتمارين استجابة للحوادث"), l("Business email compromise and slow response", "اختراق البريد التجاري وبطء الاستجابة")],
        ],
      },
    },
    {
      h: l("10. Legal, ethical and communication responsibilities", "10. المسؤوليات القانونية والأخلاقية والتواصلية"),
      p: [
        l(
          "Security work is authorized work. Test, scan or simulate only systems you own or have explicit written permission to assess. Never download, run or share real malware outside an isolated laboratory operated by trained staff. In this course, all samples are fictional descriptions. If you accidentally encounter real malicious code or exposed data, stop, preserve what you have, notify the owner through a responsible channel and do not access more than necessary.",
          "العمل الأمني عمل مصرح به. لا تختبر أو تمسح أو تحاكي إلا أنظمة تملكها أو لديك إذن كتابي صريح بتقييمها. ولا تنزّل أو تشغّل أو تشارك برمجيات خبيثة حقيقية خارج مختبر معزول يديره مختصون. وفي هذه الدورة، جميع العينات أوصاف خيالية. وإذا صادفت بالخطأ شيفرة خبيثة حقيقية أو بيانات مكشوفة، توقف واحفظ ما لديك وأبلغ المالك عبر قناة مسؤولة ولا تصل إلى أكثر من اللازم.",
        ),
        l(
          "Phishing simulations require care. Use fictional or properly licensed brands, minimize collected data, obtain organizational approval, avoid punishment and debrief participants afterward. Do not use real employee personal data in test messages, and do not run simulations that could damage trust or disrupt critical operations. The purpose is learning and faster reporting, not embarrassment.",
          "تتطلب محاكاة التصيّد عناية. استخدم علامات خيالية أو مرخصة بشكل صحيح، وقلل البيانات المجمعة، واحصل على موافقة المؤسسة، وتجنب العقاب، وشرح التمرين للمشاركين بعده. ولا تستخدم بيانات موظفين شخصية حقيقية في رسائل الاختبار، ولا تُجرِ محاكاة قد تضر بالثقة أو تعطل عمليات حرجة. فالغرض هو التعلم والإبلاغ الأسرع لا الإحراج.",
        ),
        l(
          "Incident communication must separate facts, hypotheses and recommendations. Avoid naming a suspect without evidence, protect personal and health data, and share details only with those who need them. Do not forward a live phishing message to colleagues; use the report button or send it to the security team through the approved channel. Preserve evidence and follow legal and regulatory reporting obligations rather than improvising public statements.",
          "يجب أن يفصل التواصل في الحادث بين الحقائق والفرضيات والتوصيات. وتجنب تسمية مشتبه به دون دليل، واحمِ البيانات الشخصية والصحية، وشارك التفاصيل فقط مع من يحتاجها. ولا تعِد توجيه رسالة تصيّد حية إلى الزملاء؛ استخدم زر الإبلاغ أو أرسلها إلى فريق الأمن عبر القناة المعتمدة. واحفظ الأدلة واتبع التزامات الإبلاغ القانونية والتنظيمية بدل الارتجال في البيانات العامة.",
        ),
      ],
      callout: {
        kind: "tip",
        text: l(
          "If you are unsure whether an action is authorized, stop and ask. Curiosity is not authorization.",
          "إذا لم تكن متأكدًا من أن إجراءً ما مصرح به، توقف واسأل. فالفضول ليس تصريحًا.",
        ),
      },
    },
  ],
  examples: [
    l(
      "A display name says 'Finance Director' but the address is finance-director@company-support.example. The display name is easy to forge; the domain is the evidence that matters.",
      "يقول اسم العرض «مدير المالية» لكن العنوان هو finance-director@company-support.example. فاسم العرض سهل التزوير؛ والنطاق هو الدليل المهم.",
    ),
    l(
      "An email contains a QR code that opens a look-alike login page on a personal device, outside the protections of the corporate browser. The user should open the service through the official app instead.",
      "تحتوي رسالة على رمز QR يفتح صفحة دخول مشابهة على جهاز شخصي خارج حماية المتصفح المؤسسي. ويجب على المستخدم فتح الخدمة عبر التطبيق الرسمي بدلًا من ذلك.",
    ),
    l(
      "A supplier sends an invoice with updated bank details. The change is plausible and the email thread is real, but the finance team calls the supplier on a number already on file before changing anything.",
      "يرسل مورّد فاتورة ببيانات مصرفية محدثة. والتغيير معقول والمحادثة حقيقية، لكن فريق المالية يتصل بالمورّد على رقم موجود مسبقًا في السجلات قبل تغيير أي شيء.",
    ),
    l(
      "An infostealer running in a browser profile copies session cookies. The attacker does not need the password or the MFA code because the stolen session is already authenticated.",
      "سارق معلومات يعمل داخل ملف تعريف المتصفح ينسخ ملفات ارتباط الجلسة. ولا يحتاج المهاجم إلى كلمة المرور أو رمز المصادقة لأن الجلسة المسروقة مصادق عليها بالفعل.",
    ),
    l(
      "A vulnerable VPN appliance is exposed to the internet. An attacker uses stolen credentials, logs in without phishing and begins mapping the internal network.",
      "جهاز VPN ضعيف مكشوف على الإنترنت. يستخدم مهاجم بيانات اعتماد مسروقة ويسجل الدخول دون تصيّد ويبدأ رسم الشبكة الداخلية.",
    ),
    l(
      "An organization publishes a DMARC policy that rejects unauthenticated mail. Spoofed messages using its domain are blocked before delivery, but a compromised legitimate mailbox can still send a convincing message.",
      "تنشر مؤسسة سياسة DMARC ترفض البريد غير المصادق. فتُحجب الرسائل المنتحلة التي تستخدم نطاقها قبل التسليم، لكن صندوق بريد مشروعًا مخترقًا قد يرسل رسالة مقنعة رغم ذلك.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A regional hospital receives a fake invoice from a supplier. The attachment installs a loader, and weeks later ransomware encrypts appointment systems. The response combines isolation, backup restoration, clinical continuity planning and regulatory notification.",
      "يستقبل مستشفى إقليمي فاتورة مزيفة من مورّد. يثبت المرفق محمّلًا، وبعد أسابيع تشفّر الفدية أنظمة المواعيد. وتجمع الاستجابة بين العزل واستعادة النسخ الاحتياطي وتخطيط استمرارية الخدمات السريرية والإبلاغ التنظيمي.",
    ),
    l(
      "A construction company almost pays a fraudulent invoice after receiving an email that appears to come from its chief executive. A junior employee follows the callback procedure, reaches the real executive and stops the transfer.",
      "تكاد شركة مقاولات تدفع فاتورة احتيالية بعد رسالة تبدو من مديرها التنفيذي. ويتبع موظف مبتدئ إجراء الاتصال العكسي، ويصل إلى المدير الحقيقي ويوقف التحويل.",
    ),
    l(
      "A help-desk employee receives a call from someone claiming to be a new employee who cannot access email. The caller asks for the one-time code sent to the employee's phone. The help desk hangs up, verifies the request through the internal directory and reports the attempt.",
      "يتلقى موظف دعم مكالمة من شخص يدعي أنه موظف جديد لا يستطيع الوصول إلى بريده. ويطلب المتصل رمز الاستخدام لمرة واحدة المرسل إلى هاتف الموظف. فيغلق الموظف المكالمة ويتحقق من الطلب عبر الدليل الداخلي ويبلغ عن المحاولة.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l(
      "From a phishing message to a ransomware impact",
      "من رسالة تصيّد إلى أثر الفدية",
    ),
    caption: l(
      "Each stage offers a different chance to stop the intrusion. Early interruption is cheaper and limits data theft and disruption.",
      "كل مرحلة توفر فرصة مختلفة لإيقاف الاختراق. والإيقاف المبكر أرخص ويحد من سرقة البيانات والتعطيل.",
    ),
    nodes: [
      { label: l("1. Message delivered", "1. تسليم الرسالة"), desc: l("Email, text, call or QR code", "بريد أو رسالة أو مكالمة أو رمز QR") },
      { label: l("2. User interacts", "2. تفاعل المستخدم"), desc: l("Clicks, approves or runs a file", "ينقر أو يوافق أو يشغّل ملفًا") },
      { label: l("3. Payload executes", "3. تنفيذ الحمولة"), desc: l("Loader, infostealer or remote tool", "محمّل أو سارق معلومات أو أداة بعيدة") },
      { label: l("4. Persistence", "4. الاستمرارية"), desc: l("Survives reboot and cleanup", "يبقى بعد إعادة التشغيل والتنظيف") },
      { label: l("5. Remote control", "5. التحكم البعيد"), desc: l("Commands and further payloads", "أوامر وحمولات إضافية") },
      { label: l("6. Lateral movement and theft", "6. الحركة الجانبية والسرقة"), desc: l("Valid accounts and copied data", "حسابات صالحة وبيانات منسوخة") },
      { label: l("7. Impact and extortion", "7. الأثر والابتزاز"), desc: l("Encryption and payment demand", "تشفير وطلب دفع") },
    ],
  },
  instructorDemo: l(
    "The instructor displays a fictional phishing message and annotates it live: the display name, the real domain, the Reply-To address, the link destination, the attachment type and the emotional lever. Learners vote on whether they would click, then compare their reasoning with the STOP-LOOK-VERIFY-REPORT checklist. The instructor then maps the same message to the malware chain and asks which control would interrupt delivery, execution, persistence and impact. No real links are opened and no real malware is used.",
    "يعرض المدرب رسالة تصيّد خيالية ويشرحها مباشرة: اسم العرض، والنطاق الحقيقي، وعنوان الرد، ووجهة الرابط، ونوع المرفق، والرافعة العاطفية. ويصوّت المتعلمون على ما إذا كانوا سينقرون، ثم يقارنون تفكيرهم بقائمة توقف-تفحص-تحقق-أبلغ. ثم يربط المدرب الرسالة نفسها بسلسلة البرمجيات الخبيثة ويسأل عن الضابط الذي سيعطّل التسليم والتنفيذ والاستمرارية والأثر. ولا تُفتح روابط حقيقية ولا تُستخدم برمجيات خبيثة حقيقية.",
  ),
  exercises: [
    {
      title: l("Spot the lever", "اكتشف الرافعة"),
      instructions: l(
        "Write a harmless one-paragraph request to a colleague, then rewrite it three times using authority, urgency and helpfulness. For each version, write the verification step that should make the recipient pause.",
        "اكتب طلبًا غير ضار من فقرة واحدة إلى زميل، ثم أعد كتابته ثلاث مرات باستخدام السلطة والاستعجال والرغبة في المساعدة. ولكل نسخة، اكتب خطوة التحقق التي ينبغي أن تجعل المستلم يتمهل.",
      ),
      expected: l(
        "Three rewritten requests, each with a named lever and a specific out-of-band verification step.",
        "ثلاثة طلبات معاد كتابتها، لكل منها رافعة محددة وخطوة تحقق خارج القناة.",
      ),
    },
    {
      title: l("Inspect a fictional message", "افحص رسالة خيالية"),
      instructions: l(
        "Use the fictional message from the lab. Record the exact sender domain, the display name, the Reply-To address, the visible link text, the real destination and every attachment detail. Decide whether you would click, reply or report, and justify the decision with evidence rather than instinct.",
        "استخدم الرسالة الخيالية من المختبر. سجّل نطاق المرسل الدقيق واسم العرض وعنوان الرد ونص الرابط الظاهر والوجهة الحقيقية وكل تفاصيل المرفق. وقرر ما إذا كنت ستنقر أو ترد أو تبلغ، وبرر القرار بالأدلة لا بالحدس.",
      ),
      expected: l(
        "A completed inspection table with at least six evidence items and one clear decision.",
        "جدول فحص مكتمل بستة عناصر دليل على الأقل وقرار واضح واحد.",
      ),
    },
    {
      title: l("Write the first ten minutes", "اكتب أول عشر دقائق"),
      instructions: l(
        "Create a response card for a colleague who has just opened a suspicious attachment. Include isolation, reporting, credential safety, evidence preservation and who decides about restoration. Keep it under ten short lines.",
        "أنشئ بطاقة استجابة لزميل فتح للتو مرفقًا مشبوهًا. وضمّن العزل والإبلاغ وسلامة بيانات الاعتماد وحفظ الأدلة ومن يقرر الاستعادة. واجعلها في أقل من عشرة أسطر قصيرة.",
      ),
      expected: l(
        "A concise card that starts with isolation and reporting, avoids destroying evidence and names the restoration decision owner.",
        "بطاقة موجزة تبدأ بالعزل والإبلاغ، وتتجنب إتلاف الأدلة، وتحدد مسؤول قرار الاستعادة.",
      ),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can recognize the main social-engineering levers, distinguish seven phishing variants, inspect a suspicious message using concrete evidence, classify common malware by behavior, explain how ransomware progresses from access to impact, and execute a first-response sequence that isolates, reports, preserves evidence and protects credentials.",
    "بنهاية الجلسة، يستطيع المتعلمون التعرف على روافع الهندسة الاجتماعية الرئيسية، والتمييز بين سبعة أنواع من التصيّد، وفحص رسالة مشبوهة باستخدام أدلة ملموسة، وتصنيف البرمجيات الخبيثة الشائعة حسب السلوك، وشرح تطور الفدية من الوصول إلى الأثر، وتنفيذ تسلسل استجابة أولى يعزل ويبلغ ويحفظ الأدلة ويحمي بيانات الاعتماد.",
  ),
  commonMistakes: [
    l(
      "Judging a message by its logo or design instead of its domain, link destination and context.",
      "الحكم على رسالة من شعارها أو تصميمها بدل نطاقها ووجهة رابطها وسياقها.",
    ),
    l(
      "Replying to the suspicious message to ask whether it is genuine, which confirms the address is active.",
      "الرد على الرسالة المشبوهة للسؤال إن كانت حقيقية، وهو ما يؤكد أن العنوان نشط.",
    ),
    l(
      "Treating malware labels as mutually exclusive and waiting for a perfect classification before isolating a host.",
      "التعامل مع تسميات البرمجيات الخبيثة كفئات منفصلة تمامًا والانتظار لتصنيف مثالي قبل عزل الجهاز.",
    ),
    l(
      "Assuming a DMARC pass or a valid signature proves that the message content is safe.",
      "افتراض أن نجاح DMARC أو توقيعًا صالحًا يثبت أن محتوى الرسالة آمن.",
    ),
    l(
      "Restoring backups before removing the attacker's access, which allows reinfection.",
      "استعادة النسخ الاحتياطية قبل إزالة وصول المهاجم، وهو ما يسمح بإعادة الإصابة.",
    ),
    l(
      "Powering off a suspected infected device immediately and destroying volatile evidence.",
      "إطفاء جهاز مشتبه بإصابته فورًا وإتلاف الأدلة المتطايرة.",
    ),
  ],
  bestPractices: [
    l("Use a repeatable STOP-LOOK-VERIFY-REPORT checklist for every unexpected request.", "استخدم قائمة متكررة: توقف-تفحص-تحقق-أبلغ لكل طلب غير متوقع."),
    l("Verify payment and credential requests through a second channel that you already trust.", "تحقق من طلبات الدفع وبيانات الاعتماد عبر قناة ثانية تثق بها مسبقًا."),
    l("Deploy phishing-resistant MFA and enforce DMARC for owned domains.", "انشر مصادقة مقاومة للتصيّد وطبّق DMARC للنطاقات المملوكة."),
    l("Keep offline or immutable backups and test restoration on a schedule.", "احتفظ بنسخ احتياطية معزولة أو غير قابلة للتعديل واختبر الاستعادة وفق جدول."),
    l("Make reporting easy, fast and blameless, and measure time to report.", "اجعل الإبلاغ سهلًا وسريعًا وبلا لوم، وقس زمن الإبلاغ."),
    l("Isolate first, preserve evidence, then investigate and eradicate.", "اعزل أولًا، واحفظ الأدلة، ثم حقق واستأصل."),
  ],
  keyTakeaways: [
    l(
      "Social engineering and malware are two halves of one intrusion chain; defending only one half leaves the other exposed.",
      "الهندسة الاجتماعية والبرمجيات الخبيثة نصفان لسلسلة اختراق واحدة؛ والدفاع عن نصف واحد يترك الآخر مكشوفًا.",
    ),
    l(
      "Phishing variants differ by channel and target, but all rely on trust, urgency or a plausible context.",
      "تختلف أنواع التصيّد حسب القناة والهدف، لكنها جميعًا تعتمد على الثقة أو الاستعجال أو سياق معقول.",
    ),
    l(
      "A message is judged by its domain, links, attachments, tone and context, not by its logo.",
      "تُحكم الرسالة بنطاقها وروابطها ومرفقاتها ونبرتها وسياقها، لا بشعارها.",
    ),
    l(
      "Malware families overlap; behavior, persistence and network activity matter more than the label.",
      "تتداخل عائلات البرمجيات الخبيثة؛ والسلوك والاستمرارية ونشاط الشبكة أهم من التسمية.",
    ),
    l(
      "Ransomware is a campaign, not a single event; offline backups and segmentation limit its impact.",
      "الفدية حملة لا حدث واحد؛ والنسخ المعزولة والتقسيم يحدان من أثرها.",
    ),
    l(
      "Fast isolation, reporting and credential protection turn a possible disaster into a contained incident.",
      "العزل السريع والإبلاغ وحماية بيانات الاعتماد تحوّل كارثة محتملة إلى حادث محتوى.",
    ),
  ],
  lab: {
    title: l(
      "Lab 3 — Triage six suspicious incidents",
      "المختبر 3 — فرز ستة حوادث مشبوهة",
    ),
    scenario: l(
      "You are a junior analyst at a regional clinic. Six reports arrive during one shift: a payment request, a credential page, a phone call, encrypted files, stolen sessions and a fast-spreading infection. Classify each report and choose the first response that protects patients and systems.",
      "أنت محلل مبتدئ في عيادة إقليمية. تصل ستة بلاغات خلال وردية واحدة: طلب دفع، وصفحة بيانات اعتماد، ومكالمة هاتفية، وملفات مشفرة، وجلسات مسروقة، وإصابة سريعة الانتشار. صنّف كل بلاغ واختر الاستجابة الأولى التي تحمي المرضى والأنظمة.",
    ),
    safety: l(
      "This lab uses fictional reports and a text-only message sample. Do not open links, scan real systems, contact any organization, download malware or forward live phishing messages. No patient data or real credentials are used. If a real incident appears during the exercise, stop and follow your organization's official procedure.",
      "يستخدم هذا المختبر بلاغات خيالية وعينة رسالة نصية فقط. لا تفتح روابط ولا تمسح أنظمة حقيقية ولا تتصل بأي مؤسسة ولا تنزّل برمجيات خبيثة ولا تعِد توجيه رسائل تصيّد حية. ولا تُستخدم بيانات مرضى أو بيانات اعتماد حقيقية. وإذا ظهر حادث حقيقي أثناء التمرين، توقف واتبع إجراء مؤسستك الرسمي.",
    ),
    steps: [
      l("Prepare a triage worksheet with columns for facts, category, confidence, first action and evidence.", "جهّز ورقة فرز بأعمدة للحقائق والتصنيف والثقة والإجراء الأول والدليل."),
      l("Read all six reports and underline only observable facts.", "اقرأ البلاغات الستة وضع خطًا تحت الحقائق القابلة للملاحظة فقط."),
      l("Classify each report with the companion matching tool.", "صنّف كل بلاغ باستخدام أداة المطابقة المساندة."),
      l("Complete the STOP-LOOK-VERIFY-REPORT checklist for the fictional message.", "أكمل قائمة توقف-تفحص-تحقق-أبلغ للرسالة الخيالية."),
      l("Choose the first response for each case and justify it with evidence.", "اختر الاستجابة الأولى لكل حالة وبررها بالأدلة."),
      l("Write a handoff note that separates facts, hypotheses and recommended actions.", "اكتب ملاحظة تسليم تفصل الحقائق والفرضيات والإجراءات الموصى بها."),
    ],
    expected: l(
      "Six defensible classifications, a completed message-inspection checklist, a first-response action for each case and a handoff note that distinguishes evidence from inference.",
      "ستة تصنيفات قابلة للدفاع، وقائمة فحص رسالة مكتملة، وإجراء استجابة أولى لكل حالة، وملاحظة تسليم تميز الدليل من الاستنتاج.",
    ),
    tool: "match",
    objectives: [
      l("Classify phishing, business email compromise, vishing, ransomware, infostealer and worm incidents from behavioral evidence.", "تصنيف حوادث التصيّد واختراق البريد التجاري والتصيّد الصوتي والفدية وسارق المعلومات والدودة من الأدلة السلوكية."),
      l("Inspect a message using sender, link, attachment, tone and context evidence.", "فحص رسالة باستخدام دليل المرسل والرابط والمرفق والنبرة والسياق."),
      l("Select a proportionate first response that protects people, credentials and systems.", "اختيار استجابة أولى متناسبة تحمي الأشخاص وبيانات الاعتماد والأنظمة."),
      l("Preserve evidence and avoid actions that help the attacker or destroy data.", "حفظ الأدلة وتجنب الإجراءات التي تساعد المهاجم أو تتلف البيانات."),
      l("Communicate facts and uncertainty clearly in a short handoff note.", "نقل الحقائق وعدم اليقين بوضوح في ملاحظة تسليم قصيرة."),
    ],
    prerequisites: [
      l("Session 2: attack vectors and the Cyber Kill Chain.", "الجلسة 2: نواقل الهجوم وسلسلة القتل السيبراني."),
      l("Session 3 theory: social engineering, phishing variants and malware families.", "نظرية الجلسة 3: الهندسة الاجتماعية وأنواع التصيّد وعائلات البرمجيات الخبيثة."),
      l("A text editor or spreadsheet for the triage worksheet.", "محرر نصوص أو جدول بيانات لورقة الفرز."),
    ],
    environment: l(
      "No virtual machines, network access or real email accounts are required. Use a browser for the matching tool and a text editor or paper for the worksheet. All reports and message details are fictional.",
      "لا تُشترط أجهزة افتراضية أو اتصال بالشبكة أو حسابات بريد حقيقية. استخدم متصفحًا لأداة المطابقة ومحرر نصوص أو ورقًا لورقة العمل. جميع البلاغات وتفاصيل الرسالة خيالية.",
    ),
    tools: [
      l("Companion incident-matching tool", "أداة مطابقة الحوادث المساندة"),
      l("Text editor or spreadsheet", "محرر نصوص أو جدول بيانات"),
      l("Fictional message worksheet", "ورقة رسالة خيالية"),
      l("Timer for the 25-minute exercise", "مؤقت لتمرين الخمس والعشرين دقيقة"),
    ],
    authorization: l(
      "Scope: six fictional reports, one fictional message and the local companion tool only. No real systems, no scanning, no malware download, no credential use and no contact with any organization. Stop if an action would require access you do not have.",
      "النطاق: ستة بلاغات خيالية ورسالة خيالية واحدة والأداة المساندة المحلية فقط. لا أنظمة حقيقية ولا مسح ولا تنزيل برمجيات خبيثة ولا استخدام بيانات اعتماد ولا تواصل مع أي مؤسسة. توقف إذا كان الإجراء يتطلب وصولًا لا تملكه.",
    ),
    detailedSteps: [
      {
        title: l("Build the triage worksheet", "أنشئ ورقة الفرز"),
        explanation: l(
          "Create columns for report number, observable facts, suspected category, confidence, first action, evidence to preserve and open questions. Keep facts separate from assumptions from the start.",
          "أنشئ أعمدة لرقم البلاغ والحقائق المرصودة والتصنيف المشتبه به والثقة والإجراء الأول والأدلة الواجب حفظها والأسئلة المفتوحة. وافصل الحقائق عن الافتراضات من البداية.",
        ),
        expected: l("A worksheet with one row per report and an explicit confidence column.", "ورقة عمل بصف لكل بلاغ وعمود ثقة صريح."),
      },
      {
        title: l("Extract evidence without guessing", "استخرج الأدلة دون تخمين"),
        explanation: l(
          "Read each report once and underline only what it states: timing, sender, request, file behavior, account activity or spread pattern. Mark anything you infer with a question mark rather than presenting it as fact.",
          "اقرأ كل بلاغ مرة واحدة وضع خطًا تحت ما يذكره فقط: التوقيت أو المرسل أو الطلب أو سلوك الملف أو نشاط الحساب أو نمط الانتشار. وعلّم أي استنتاج بعلامة سؤال بدل تقديمه كحقيقة.",
        ),
        expected: l("At least two evidence items per report, with inferences marked separately.", "عنصرا دليل على الأقل لكل بلاغ، مع تمييز الاستنتاجات بشكل منفصل."),
      },
      {
        title: l("Classify with the matching tool", "صنّف باستخدام أداة المطابقة"),
        explanation: l(
          "Match each fictional report to phishing, business email compromise, vishing or smishing, ransomware, infostealer or worm. Record the feature that drove the choice, not only the answer.",
          "طابق كل بلاغ خيالي مع التصيّد أو اختراق البريد التجاري أو التصيّد الصوتي أو النصي أو الفدية أو سارق المعلومات أو الدودة. وسجّل السمة التي دفعت للاختيار لا الإجابة وحدها.",
        ),
        expected: l("Six classifications, each with one supporting behavioral feature.", "ستة تصنيفات، لكل منها سمة سلوكية داعمة واحدة."),
      },
      {
        title: l("Complete the message checklist", "أكمل قائمة فحص الرسالة"),
        explanation: l(
          "For the fictional message, inspect the display name, exact domain, Reply-To address, visible link text, real destination, attachment type, tone and context. Mark each item safe, suspicious or unknown.",
          "بالنسبة للرسالة الخيالية، افحص اسم العرض والنطاق الدقيق وعنوان الرد ونص الرابط الظاهر والوجهة الحقيقية ونوع المرفق والنبرة والسياق. وعلّم كل عنصر آمنًا أو مشبوهًا أو مجهولًا.",
        ),
        expected: l("A completed eight-item checklist with a final click, reply or report decision.", "قائمة مكتملة من ثمانية عناصر مع قرار نهائي بالنقر أو الرد أو الإبلاغ."),
      },
      {
        title: l("Choose the first response", "اختر الاستجابة الأولى"),
        explanation: l(
          "For each case, name the first action that reduces harm: isolate the host, block the sender, reset credentials from a clean device, preserve the message, or escalate to incident response. Explain what not to do as well.",
          "لكل حالة، سمِّ الإجراء الأول الذي يقلل الضرر: عزل الجهاز أو حظر المرسل أو إعادة تعيين بيانات الاعتماد من جهاز نظيف أو حفظ الرسالة أو التصعيد إلى استجابة الحوادث. واشرح ما يجب عدم فعله أيضًا.",
        ),
        expected: l("One realistic first action and one prohibited action per case.", "إجراء أول واقعي وإجراء محظور واحد لكل حالة."),
      },
      {
        title: l("Write the handoff note", "اكتب ملاحظة التسليم"),
        explanation: l(
          "Write five sentences: what is known, what is suspected, what was done, what evidence exists and what decision is needed next. Avoid naming a criminal group or promising recovery.",
          "اكتب خمس جمل: ما هو معروف، وما هو مشتبه به، وما تم فعله، وما الأدلة الموجودة، وما القرار المطلوب تاليًا. وتجنب تسمية مجموعة إجرامية أو الوعد بالاستعادة.",
        ),
        expected: l("A concise note that a shift supervisor could act on immediately.", "ملاحظة موجزة يستطيع مشرف الوردية التصرف بناءً عليها فورًا."),
      },
    ],
    troubleshooting: [
      {
        problem: l("Every report looks like ransomware.", "كل بلاغ يبدو كفدية."),
        fix: l("Look for the defining behavior: encryption and a demand, credential/session theft, rapid self-propagation or a payment request. Classify by evidence, not by fear.", "ابحث عن السلوك المميز: التشفير وطلب الدفع، أو سرقة بيانات الاعتماد والجلسات، أو الانتشار الذاتي السريع، أو طلب الدفع. وصنّف بالأدلة لا بالخوف."),
      },
      {
        problem: l("The message checklist marks everything as suspicious.", "قائمة فحص الرسالة تعلّم كل شيء كمشوب."),
        fix: l("Separate proven indicators from neutral features. A logo, a polite greeting or correct grammar does not prove safety, but it is not proof of malice either. Record uncertainty explicitly.", "افصل المؤشرات المثبتة عن السمات المحايدة. فالشعار أو التحية المهذبة أو السلامة اللغوية لا تثبت الأمان، لكنها ليست دليلًا على الخبث أيضًا. وسجّل عدم اليقين صراحة."),
      },
      {
        problem: l("The first action is to reinstall the operating system.", "الإجراء الأول هو إعادة تثبيت نظام التشغيل."),
        fix: l("Reinstallation may destroy evidence and is not the first step. Isolate, report and preserve evidence first; rebuilding follows containment and investigation.", "قد تتلف إعادة التثبيت الأدلة وليست الخطوة الأولى. اعزل وأبلغ واحفظ الأدلة أولًا؛ ويأتي إعادة البناء بعد الاحتواء والتحقيق."),
      },
    ],
    deliverables: [
      l("A six-row triage worksheet with facts, category, confidence and first action.", "ورقة فرز من ستة صفوف بالحقائق والتصنيف والثقة والإجراء الأول."),
      l("A completed eight-item message-inspection checklist.", "قائمة فحص رسالة مكتملة من ثمانية عناصر."),
      l("One prohibited action per case with a short justification.", "إجراء محظور واحد لكل حالة مع تبرير قصير."),
      l("A five-sentence handoff note separating facts, hypotheses and next decisions.", "ملاحظة تسليم من خمس جمل تفصل الحقائق والفرضيات والقرارات التالية."),
    ],
    rubric: [
      { criterion: l("Evidence quality and separation of fact from inference", "جودة الأدلة والفصل بين الحقيقة والاستنتاج"), weight: 20 },
      { criterion: l("Accuracy of incident classifications", "دقة تصنيف الحوادث"), weight: 20 },
      { criterion: l("Completeness of the message-inspection checklist", "اكتمال قائمة فحص الرسالة"), weight: 20 },
      { criterion: l("Proportionate first response and prohibited actions", "تناسب الاستجابة الأولى والإجراءات المحظورة"), weight: 25 },
      { criterion: l("Clarity of the handoff note and presentation", "وضوح ملاحظة التسليم والعرض"), weight: 15 },
    ],
    match: {
      prompt: l("Match each fictional report with the most likely incident category", "طابق كل بلاغ خيالي مع فئة الحادث الأكثر احتمالًا"),
      options: [
        l("Phishing campaign", "حملة تصيّد"),
        l("Business email compromise", "اختراق البريد التجاري"),
        l("Vishing or smishing", "تصيّد صوتي أو نصي"),
        l("Ransomware", "برمجية فدية"),
        l("Infostealer", "سارق معلومات"),
        l("Worm", "دودة"),
      ],
      items: [
        { text: l("A finance officer receives an email that appears to come from the chief executive asking for an urgent wire transfer to a new supplier account.", "يتلقى مسؤول مالي رسالة تبدو من المدير التنفيذي تطلب تحويلًا عاجلًا إلى حساب مورّد جديد."), answer: 1 },
        { text: l("Dozens of staff receive a delivery notice with a link to a login page that asks for their work password and one-time code.", "يتلقى عشرات الموظفين إشعار شحن برابط إلى صفحة دخول تطلب كلمة مرور العمل ورمز الاستخدام لمرة واحدة."), answer: 0 },
        { text: l("A caller claims to be from IT support and asks an employee to read back the six-digit code sent to their phone.", "يدعي متصل أنه من الدعم التقني ويطلب من موظف قراءة الرمز المكون من ستة أرقام المرسل إلى هاتفه."), answer: 2 },
        { text: l("Files on a shared drive are renamed with a new extension and a note demands payment in cryptocurrency.", "تُعاد تسمية ملفات على قرص مشترك بامتداد جديد وتطلب ملاحظة دفعًا بعملة مشفرة."), answer: 3 },
        { text: l("Browser-saved passwords and session cookies are sent to an unknown server, and several accounts are accessed from another country.", "تُرسل كلمات المرور المحفوظة في المتصفح وملفات ارتباط الجلسة إلى خادم مجهول، ويُدخل إلى عدة حسابات من بلد آخر."), answer: 4 },
        { text: l("Within minutes, unpatched computers on the same network are infected without anyone opening a file.", "خلال دقائق تُصاب أجهزة غير محدّثة على الشبكة نفسها دون أن يفتح أحد ملفًا."), answer: 5 },
      ],
    },
  },
  quiz: [
    {
      q: l("Which combination is the strongest sign of a phishing email?", "أي مزيج هو أقوى علامة على رسالة تصيّد؟"),
      options: [
        l("A company logo and a polite greeting", "شعار شركة وتحيات مهذبة"),
        l("Artificial urgency plus a link to a login page", "استعجال مصطنع مع رابط إلى صفحة دخول"),
        l("Arrival on a Monday morning", "الوصول صباح يوم الاثنين"),
        l("A long message with several paragraphs", "رسالة طويلة بعدة فقرات"),
      ],
      answer: 1,
      why: l("Urgency plus a credential link is the classic phishing pattern; logos and timing prove nothing.", "الاستعجال مع رابط لبيانات الاعتماد هو نمط التصيّد الكلاسيكي؛ والشعار والتوقيت لا يثبتان شيئًا."),
    },
    {
      q: l("A message targeting the chief financial officer with a fake legal notice is best described as:", "رسالة تستهدف المدير المالي بإشعار قانوني مزيف توصف أفضل بأنها:"),
      options: [
        l("Smishing", "تصيّد نصي"),
        l("Whaling", "صيد الحيتان"),
        l("Tailgating", "تسلل مادي"),
        l("Baiting", "طُعم"),
      ],
      answer: 1,
      why: l("Whaling is spear phishing aimed at senior executives.", "صيد الحيتان تصيّد موجّه يستهدف كبار التنفيذيين."),
    },
    {
      q: l("An urgent email asks to change a supplier's bank details. What is the correct verification step?", "رسالة عاجلة تطلب تغيير بيانات مورّد المصرفية. ما خطوة التحقق الصحيحة؟"),
      options: [
        l("Reply to the same email and ask for confirmation", "الرد على الرسالة نفسها وطلب التأكيد"),
        l("Call the supplier on a number already on file", "الاتصال بالمورّد على رقم موجود مسبقًا في السجلات"),
        l("Use the phone number included in the message", "استخدام رقم الهاتف الوارد في الرسالة"),
        l("Skip the policy because the request is urgent", "تجاوز السياسة لأن الطلب عاجل"),
      ],
      answer: 1,
      why: l("An out-of-band call to a known number defeats business email compromise because the attacker controls only the email channel.", "الاتصال خارج القناة برقم معروف يُفشل اختراق البريد التجاري لأن المهاجم يتحكم في قناة البريد فقط."),
    },
    {
      q: l("You entered your password on a fake login page. What should you do first?", "أدخلت كلمة مرورك في صفحة دخول مزيفة. ماذا تفعل أولًا؟"),
      options: [
        l("Do nothing and hope the page was harmless", "لا تفعل شيئًا وتأمل أن الصفحة كانت غير ضارة"),
        l("Restart the browser and continue working", "إعادة تشغيل المتصفح ومواصلة العمل"),
        l("Change the password from a clean device, revoke sessions and report", "تغيير كلمة المرور من جهاز نظيف وإبطال الجلسات والإبلاغ"),
        l("Reply to the sender and ask for an explanation", "الرد على المرسل وطلب تفسير"),
      ],
      answer: 2,
      why: l("The credential and possibly the session are exposed, so reset from a clean device, revoke sessions and notify security.", "تعرضت بيانات الاعتماد وربما الجلسة، لذا أعد التعيين من جهاز نظيف وأبطل الجلسات وأبلغ الأمن."),
    },
    {
      q: l("Following an employee through a secured door without badging is called:", "اتباع موظف عبر باب مؤمّن دون تمرير البطاقة يسمى:"),
      options: [
        l("Vishing", "تصيّد صوتي"),
        l("Pretexting", "ذريعة"),
        l("Tailgating", "تسلل مادي"),
        l("Quishing", "تصيّد عبر QR"),
      ],
      answer: 2,
      why: l("Tailgating is a physical social-engineering technique that exploits politeness.", "التسلل المادي أسلوب هندسة اجتماعية مادي يستغل اللباقة."),
    },
    {
      q: l("Which authentication method is most resistant to phishing?", "أي طريقة مصادقة هي الأكثر مقاومة للتصيّد؟"),
      options: [
        l("SMS one-time codes", "رموز لمرة واحدة عبر الرسائل النصية"),
        l("Security questions", "أسئلة الأمان"),
        l("FIDO2 security keys or passkeys", "مفاتيح FIDO2 أو مفاتيح المرور"),
        l("Longer passwords only", "كلمات مرور أطول فقط"),
      ],
      answer: 2,
      why: l("FIDO2 binds the login to the real website origin, so a look-alike site cannot capture a reusable credential.", "يربط FIDO2 تسجيل الدخول بأصل الموقع الحقيقي، فلا يستطيع موقع مشابه التقاط بيانات اعتماد قابلة لإعادة الاستخدام."),
    },
    {
      q: l("Which malware spreads automatically across a network without user action?", "أي برمجية خبيثة تنتشر تلقائيًا عبر الشبكة دون تدخل المستخدم؟"),
      options: [
        l("Worm", "دودة"),
        l("Trojan", "حصان طروادة"),
        l("Adware", "برمجية إعلانات"),
        l("Keylogger", "مسجّل مفاتيح"),
      ],
      answer: 0,
      why: l("Worms self-replicate, often by exploiting vulnerabilities on reachable hosts.", "الديدان تنسخ نفسها غالبًا باستغلال ثغرات على الأجهزة القابلة للوصول."),
    },
    {
      q: l("What distinguishes a trojan from a virus?", "ما الذي يميز حصان طروادة عن الفيروس؟"),
      options: [
        l("It encrypts all files", "يشفّر كل الملفات"),
        l("It disguises itself as legitimate software", "يتنكر في هيئة برنامج سليم"),
        l("It only runs on servers", "يعمل على الخوادم فقط"),
        l("It cannot steal data", "لا يستطيع سرقة البيانات"),
      ],
      answer: 1,
      why: l("Trojans rely on deception: the user installs them believing they are useful.", "تعتمد أحصنة طروادة على الخداع: يثبتها المستخدم ظانًا أنها مفيدة."),
    },
    {
      q: l("What is double extortion in ransomware?", "ما الابتزاز المزدوج في الفدية؟"),
      options: [
        l("Encrypting the same files twice", "تشفير الملفات نفسها مرتين"),
        l("Demanding payment from two victims at once", "طلب الدفع من ضحيتين في وقت واحد"),
        l("Encrypting data and threatening to leak stolen copies", "تشفير البيانات والتهديد بتسريب نسخ مسروقة"),
        l("Doubling the amount after a deadline", "مضاعفة المبلغ بعد انتهاء المهلة"),
      ],
      answer: 2,
      why: l("Attackers steal data first so they can pressure victims who restore from backup.", "يسرق المهاجمون البيانات أولًا ليضغطوا على الضحايا الذين يستعيدون من النسخ الاحتياطي."),
    },
    {
      q: l("What does the 3-2-1-1-0 backup rule require?", "ماذا تتطلب قاعدة النسخ الاحتياطي 3-2-1-1-0؟"),
      options: [
        l("Three copies, two media types, one off-site, one offline or immutable, zero restore-test errors", "ثلاث نسخ، ونوعا وسائط، ونسخة خارج الموقع، ونسخة معزولة أو غير قابلة للتعديل، وصفر أخطاء في اختبار الاستعادة"),
        l("Three servers, two administrators, one password and zero logs", "ثلاثة خوادم، ومديران، وكلمة مرور واحدة، وصفر سجلات"),
        l("Three days, two weeks and one month of retention", "احتفاظ ثلاثة أيام وأسبوعين وشهر"),
        l("Three antivirus tools, two firewalls and one VPN", "ثلاث أدوات مكافحة، وجداران ناريان، وVPN واحد"),
      ],
      answer: 0,
      why: l("The rule combines copy count, media diversity, geographic separation, immutability and verified restoration.", "تجمع القاعدة بين عدد النسخ وتنوع الوسائط والفصل الجغرافي وعدم القابلية للتعديل والاستعادة المتحقق منها."),
    },
    {
      q: l("A user suspects ransomware on a laptop. What is the safest first action?", "يشتبه مستخدم بوجود فدية على حاسوب محمول. ما الإجراء الأول الأكثر أمانًا؟"),
      options: [
        l("Keep working so the backup runs", "مواصلة العمل حتى تعمل النسخة الاحتياطية"),
        l("Pay immediately to recover the files", "الدفع فورًا لاستعادة الملفات"),
        l("Delete the encrypted files and restart", "حذف الملفات المشفرة وإعادة التشغيل"),
        l("Disconnect from the network and report to security", "الفصل عن الشبكة والإبلاغ إلى الأمن"),
      ],
      answer: 3,
      why: l("Isolation limits spread, and reporting starts the response and evidence-preservation process.", "العزل يحد من الانتشار، والإبلاغ يبدأ الاستجابة وحفظ الأدلة."),
    },
    {
      q: l("What is the primary purpose of DMARC?", "ما الغرض الأساسي من DMARC؟"),
      options: [
        l("Encrypting message bodies end to end", "تشفير أجسام الرسائل من الطرف إلى الطرف"),
        l("Authenticating the sending domain and publishing a handling policy", "مصادقة نطاق الإرسال ونشر سياسة للمعالجة"),
        l("Replacing multi-factor authentication", "استبدال المصادقة متعددة العوامل"),
        l("Scanning attachments for malware", "فحص المرفقات بحثًا عن برمجيات خبيثة"),
      ],
      answer: 1,
      why: l("DMARC aligns SPF and DKIM with the visible domain and tells receivers what to do with failures.", "يوائم DMARC بين SPF وDKIM والنطاق الظاهر ويخبر المستقبلين بما يفعلونه عند الفشل."),
    },
    {
      q: l("Which measure best limits the damage caused by malware running under a user account?", "أي إجراء يحد أكثر من الضرر الذي تسببه برمجية خبيثة تعمل تحت حساب مستخدم؟"),
      options: [
        l("Giving every user administrator rights", "منح كل مستخدم صلاحيات المسؤول"),
        l("Using least-privilege accounts", "استخدام حسابات بأقل امتياز"),
        l("Disabling security updates", "تعطيل تحديثات الأمن"),
        l("Sharing one password across the team", "مشاركة كلمة مرور واحدة بين الفريق"),
      ],
      answer: 1,
      why: l("Malware inherits the rights of the account that ran it; fewer rights mean less reach and less damage.", "ترث البرمجية الخبيثة صلاحيات الحساب الذي شغّلها؛ وصلاحيات أقل تعني وصولًا أقل وضررًا أقل."),
    },
  ],
  trueFalse: [
    {
      q: l("Social engineering can succeed even when the technology is well configured.", "يمكن للهندسة الاجتماعية أن تنجح حتى عندما تكون التقنية جيدة الإعداد."),
      answer: true,
      why: l("It targets people and processes, not only technical weaknesses.", "وهي تستهدف الأشخاص والعمليات لا الضعف التقني فقط."),
    },
    {
      q: l("A company logo in an email proves that the message is legitimate.", "شعار شركة في رسالة يثبت أن الرسالة مشروعة."),
      answer: false,
      why: l("Logos are easy to copy and say nothing about the sender's real domain.", "الشعارات سهلة النسخ ولا تقول شيئًا عن النطاق الحقيقي للمرسل."),
    },
    {
      q: l("A worm needs the user to open a file before it can spread.", "تحتاج الدودة إلى أن يفتح المستخدم ملفًا قبل أن تنتشر."),
      answer: false,
      why: l("Worms self-replicate across networks, often without any user action.", "تنسخ الديدان نفسها عبر الشبكات وغالبًا دون أي تدخل من المستخدم."),
    },
    {
      q: l("Tested offline or immutable backups reduce the impact of ransomware.", "النسخ الاحتياطية المختبرة المعزولة أو غير القابلة للتعديل تقلل أثر الفدية."),
      answer: true,
      why: l("They allow restoration even when online systems and backups are encrypted.", "فهي تتيح الاستعادة حتى عندما تُشفَّر الأنظمة المتصلة والنسخ الاحتياطية."),
    },
    {
      q: l("A DMARC pass proves that the message content is safe.", "نجاح DMARC يثبت أن محتوى الرسالة آمن."),
      answer: false,
      why: l("A compromised legitimate account can pass authentication and still send a malicious message.", "قد يجتاز حساب مشروع مخترق المصادقة ويرسل مع ذلك رسالة خبيثة."),
    },
    {
      q: l("Isolating a suspected infected device is usually better than powering it off immediately.", "عزل جهاز مشتبه بإصابته أفضل عادةً من إطفائه فورًا."),
      answer: true,
      why: l("Isolation stops network spread while preserving volatile evidence that shutdown may destroy.", "العزل يوقف الانتشار الشبكي ويحفظ الأدلة المتطايرة التي قد يتلفها الإطفاء."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each message as mass phishing, spear phishing, business email compromise or vishing.", "صنّف كل رسالة كتصيّد جماعي أو موجّه أو اختراق بريد تجاري أو تصيّد صوتي."),
      categories: [
        l("Mass phishing", "تصيّد جماعي"),
        l("Spear phishing", "تصيّد موجّه"),
        l("Business email compromise", "اختراق البريد التجاري"),
        l("Vishing", "تصيّد صوتي"),
      ],
      items: [
        { text: l("A generic parcel notice with a tracking link is sent to hundreds of students.", "يُرسل إشعار شحن عام برابط تتبع إلى مئات الطلاب."), answer: 0 },
        { text: l("A researcher receives an email naming a real conference and a fake paper invitation.", "يتلقى باحث رسالة تذكر مؤتمرًا حقيقيًا ودعوة بحثية مزيفة."), answer: 1 },
        { text: l("The chief executive asks finance to change a supplier's bank details before month end.", "يطلب المدير التنفيذي من المالية تغيير بيانات مورّد المصرفية قبل نهاية الشهر."), answer: 2 },
        { text: l("A caller claims to be from the bank fraud team and asks for a one-time code.", "يدعي متصل أنه من فريق الاحتيال بالبنك ويطلب رمز استخدام لمرة واحدة."), answer: 3 },
      ],
      why: l("Channel, targeting and request type distinguish the variants.", "تميز القناة والاستهداف ونوع الطلب بين الأنواع."),
    },
    {
      prompt: l("Classify each behavior as worm, trojan, ransomware or infostealer.", "صنّف كل سلوك كدودة أو حصان طروادة أو فدية أو سارق معلومات."),
      categories: [l("Worm", "دودة"), l("Trojan", "حصان طروادة"), l("Ransomware", "فدية"), l("Infostealer", "سارق معلومات")],
      items: [
        { text: l("Self-replicates across unpatched hosts without user action.", "تنسخ نفسها عبر أجهزة غير محدّثة دون تدخل المستخدم."), answer: 0 },
        { text: l("Disguised as a video codec and installed voluntarily by the user.", "تتنكر كمشفّر فيديو ويثبتها المستخدم طوعًا."), answer: 1 },
        { text: l("Renames files and displays a payment demand.", "تعيد تسمية الملفات وتعرض طلب دفع."), answer: 2 },
        { text: l("Copies browser cookies and saved passwords to an unknown server.", "تنسخ ملفات ارتباط المتصفح وكلمات المرور المحفوظة إلى خادم مجهول."), answer: 3 },
      ],
      why: l("The defining behavior is propagation, deception, extortion or credential theft.", "السلوك المميز هو الانتشار أو الخداع أو الابتزاز أو سرقة بيانات الاعتماد."),
    },
    {
      prompt: l("Classify each response action as isolate, report, recover or prevent.", "صنّف كل إجراء استجابة كعزل أو إبلاغ أو استعادة أو منع."),
      categories: [l("Isolate", "عزل"), l("Report", "إبلاغ"), l("Recover", "استعادة"), l("Prevent", "منع")],
      items: [
        { text: l("Disable the network adapter on a suspected host.", "تعطيل محول الشبكة على جهاز مشتبه به."), answer: 0 },
        { text: l("Send the suspicious message to the security team with the report button.", "إرسال الرسالة المشبوهة إلى فريق الأمن بزر الإبلاغ."), answer: 1 },
        { text: l("Restore files from a tested offline backup.", "استعادة الملفات من نسخة احتياطية معزولة ومختبرة."), answer: 2 },
        { text: l("Enforce DMARC and phishing-resistant MFA.", "تطبيق DMARC ومصادقة مقاومة للتصيّد."), answer: 3 },
      ],
      why: l("Response actions should be matched to containment, communication, recovery and prevention goals.", "يجب مطابقة إجراءات الاستجابة مع أهداف الاحتواء والتواصل والاستعادة والمنع."),
    },
    {
      prompt: l("Classify each phrase as authority, urgency, fear or helpfulness.", "صنّف كل عبارة كسلطة أو استعجال أو خوف أو رغبة في المساعدة."),
      categories: [l("Authority", "السلطة"), l("Urgency", "الاستعجال"), l("Fear", "الخوف"), l("Helpfulness", "الرغبة في المساعدة")],
      items: [
        { text: l("The chief executive has already approved this, so proceed.", "المدير التنفيذي وافق بالفعل، لذا تابع."), answer: 0 },
        { text: l("You must act before the account closes today.", "يجب أن تتصرف قبل إغلاق الحساب اليوم."), answer: 1 },
        { text: l("Your files will be deleted if you do not respond.", "ستُحذف ملفاتك إذا لم ترد."), answer: 2 },
        { text: l("I am in a meeting; can you send me the code?", "أنا في اجتماع؛ هل يمكنك إرسال الرمز؟"), answer: 3 },
      ],
      why: l("Attackers combine several levers, but each phrase has a dominant emotional trigger.", "يجمع المهاجمون عدة روافع، لكن لكل عبارة محفزًا عاطفيًا غالبًا."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A finance officer receives an email that appears to come from the chief executive. It asks for an urgent wire transfer to a new supplier account and says the matter is confidential.",
        "يتلقى مسؤول مالي رسالة تبدو من المدير التنفيذي. وتطلب تحويلًا عاجلًا إلى حساب مورّد جديد وتقول إن الأمر سري.",
      ),
      question: l("What is the best first action?", "ما أفضل إجراء أول؟"),
      options: [
        l("Reply to the email asking for written confirmation", "الرد على الرسالة وطلب تأكيد كتابي"),
        l("Call the executive on a number already on file and follow the approval procedure", "الاتصال بالمدير على رقم موجود مسبقًا واتباع إجراء الموافقة"),
        l("Use the phone number in the email to verify the request", "استخدام رقم الهاتف الوارد في الرسالة للتحقق من الطلب"),
        l("Make the transfer because the amount is small", "تنفيذ التحويل لأن المبلغ صغير"),
      ],
      answer: 1,
      why: l("The request combines authority, urgency and secrecy. An out-of-band callback to a known number plus independent approval defeats the impersonation.", "يجمع الطلب بين السلطة والاستعجال والسرية. والاتصال خارج القناة برقم معروف مع موافقة مستقلة يُفشل الانتحال."),
    },
    {
      scenario: l(
        "An employee opens an attachment from an unexpected invoice email. Within minutes, files on a shared drive are renamed with a new extension and a note demands payment.",
        "يفتح موظف مرفقًا من رسالة فاتورة غير متوقعة. وخلال دقائق تُعاد تسمية ملفات على قرص مشترك بامتداد جديد وتطلب ملاحظة دفعًا.",
      ),
      question: l("What should the employee do first?", "ماذا يجب أن يفعل الموظف أولًا؟"),
      options: [
        l("Pay the demand to get the files back", "دفع المبلغ لاستعادة الملفات"),
        l("Power off the computer immediately", "إطفاء الحاسوب فورًا"),
        l("Disconnect from the network, report to security and preserve evidence", "الفصل عن الشبكة والإبلاغ إلى الأمن وحفظ الأدلة"),
        l("Delete the encrypted files and restart", "حذف الملفات المشفرة وإعادة التشغيل"),
      ],
      answer: 2,
      why: l("Isolation limits spread, reporting starts the response, and preservation supports investigation. Powering off may destroy volatile evidence; payment is not a technical decision.", "العزل يحد من الانتشار، والإبلاغ يبدأ الاستجابة، والحفظ يدعم التحقيق. وقد يتلف الإطفاء الأدلة المتطايرة؛ والدفع ليس قرارًا تقنيًا."),
    },
    {
      scenario: l(
        "A recruiter receives an email with a CV named CV.pdf.exe. The message says the applicant is available immediately and asks the recruiter to open the file before a call.",
        "يتلقى مسؤول توظيف رسالة بمرفق سيرة ذاتية باسم CV.pdf.exe. وتقول الرسالة إن المتقدم متاح فورًا وتطلب فتح الملف قبل مكالمة.",
      ),
      question: l("What is the safest response?", "ما الاستجابة الأكثر أمانًا؟"),
      options: [
        l("Open the file in a virtual machine to see the CV", "فتح الملف في جهاز افتراضي لرؤية السيرة"),
        l("Do not open it, report the message and verify the applicant through a known channel", "عدم فتحه والإبلاغ عن الرسالة والتحقق من المتقدم عبر قناة معروفة"),
        l("Forward it to colleagues to ask whether it looks suspicious", "إعادة توجيهه إلى الزملاء للسؤال إن كان يبدو مشبوهًا"),
        l("Disable antivirus so the file opens faster", "تعطيل مكافحة الفيروسات ليفتح الملف أسرع"),
      ],
      answer: 1,
      why: l("A double extension is a delivery attempt. Do not open it, report it and verify the request independently. Forwarding live samples spreads the risk.", "الامتداد المزدوج محاولة تسليم. لا تفتحه وأبلغ وتحقق من الطلب باستقلال. وإعادة توجيه العينات الحية تنشر الخطر."),
    },
  ],
  practicalChecks: [
    {
      task: l(
        "A message shows the display name 'Chief Executive', the address ceo-office.example, and a Reply-To address accounts-payable.example. List the three checks you would perform before responding, and state what you would not do.",
        "تعرض رسالة اسم العرض «المدير التنفيذي»، والعنوان ceo-office.example، وعنوان رد accounts-payable.example. اذكر الفحوص الثلاثة التي ستجريها قبل الرد، وحدد ما لن تفعله.",
      ),
      expected: l(
        "Check the exact domain against the organization's real domain, inspect the Reply-To mismatch and verify the request through a known phone number or in person. Do not reply, click or transfer funds based on the message alone.",
        "افحص النطاق الدقيق مقابل نطاق المؤسسة الحقيقي، وافحص اختلاف عنوان الرد، وتحقق من الطلب عبر رقم هاتف معروف أو شخصيًا. ولا ترد ولا تنقر ولا تحوّل أموالًا بناءً على الرسالة وحدها.",
      ),
      hint: l("The display name is not evidence; the domain and the Reply-To are.", "اسم العرض ليس دليلًا؛ النطاق وعنوان الرد هما الدليل."),
    },
    {
      task: l(
        "A workstation shows three signs at once: the antivirus is disabled, an unknown program starts at login, and the device connects to a rare domain every ten minutes. State your first three actions in order and one action to avoid.",
        "يعرض جهاز ثلاثة علامات معًا: مكافحة الفيروسات معطلة، وبرنامج مجهول يبدأ عند الدخول، والجهاز يتصل بنطاق نادر كل عشر دقائق. اذكر إجراءاتك الثلاثة الأولى بالترتيب وإجراءً واحدًا يجب تجنبه.",
      ),
      expected: l(
        "Isolate the device from the network, report to security and preserve evidence, then change any exposed credentials from a clean device. Avoid powering off immediately or deleting files before evidence is collected.",
        "اعزل الجهاز عن الشبكة، وأبلغ الأمن واحفظ الأدلة، ثم غيّر أي بيانات اعتماد مكشوفة من جهاز نظيف. وتجنب الإطفاء الفوري أو حذف الملفات قبل جمع الأدلة.",
      ),
      hint: l("Think containment, communication, evidence and credential safety, in that order.", "فكر في الاحتواء والتواصل والأدلة وسلامة بيانات الاعتماد بهذا الترتيب."),
    },
  ],
  homework: {
    title: l("Personal and team resilience plan", "خطة مرونة شخصية وللفريق"),
    tasks: [
      l("Inventory your most important files and record where each copy is stored.", "احصر أهم ملفاتك وسجّل مكان تخزين كل نسخة."),
      l("Design a 3-2-1-1-0 backup plan for those files and schedule one restore test.", "صمّم خطة نسخ احتياطي 3-2-1-1-0 لتلك الملفات وجدول اختبار استعادة واحدًا."),
      l("Write a one-page STOP-LOOK-VERIFY-REPORT card for a non-technical colleague.", "اكتب بطاقة من صفحة واحدة: توقف-تفحص-تحقق-أبلغ لزميل غير تقني."),
      l("Draft a payment-change procedure with callback verification and two-person approval.", "اكتب مسودة إجراء لتغيير بيانات الدفع يشمل التحقق بالاتصال وموافقة شخصين."),
      l("Use one public incident summary to map a phishing-to-ransomware chain and identify three interruption points.", "استخدم ملخص حادث عامًا لربط سلسلة من التصيّد إلى الفدية وتحديد ثلاث نقاط إيقاف."),
      l("Review your public social-media profile and list three details an attacker could use for spear phishing.", "راجع ملفك العام على وسائل التواصل واذكر ثلاث معلومات يمكن للمهاجم استخدامها في تصيّد موجّه."),
    ],
    deliverable: l(
      "A two-page plan containing a backup table, a restore-test date, the response card, the payment-change procedure and a one-page incident map with three interruption points.",
      "خطة من صفحتين تضم جدول نسخ احتياطي وتاريخ اختبار استعادة وبطاقة الاستجابة وإجراء تغيير الدفع وخريطة حادث من صفحة واحدة بثلاث نقاط إيقاف.",
    ),
    criteria: [
      l("The backup plan follows 3-2-1-1-0 and includes a real restore test.", "تتبع خطة النسخ قاعدة 3-2-1-1-0 وتشمل اختبار استعادة حقيقيًا."),
      l("The response card is short, specific and usable under pressure.", "بطاقة الاستجابة قصيرة ومحددة وقابلة للاستخدام تحت الضغط."),
      l("The payment procedure uses an out-of-band callback and independent approval.", "يستخدم إجراء الدفع اتصال تحقق خارج القناة وموافقة مستقلة."),
      l("The incident map separates observed facts from inference.", "تفصل خريطة الحادث الحقائق المرصودة عن الاستنتاج."),
      l("The social-media review names concrete privacy changes, not general advice.", "تذكر مراجعة وسائل التواصل تغييرات خصوصية ملموسة لا نصائح عامة."),
    ],
    challenge: l(
      "Add a one-page table that maps each control to the stage it interrupts and the evidence that would prove it works.",
      "أضف جدولًا من صفحة واحدة يربط كل ضابط بالمرحلة التي يعطّلها والدليل الذي يثبت عمله.",
    ),
  },
  refs: [
    {
      title: "Stop Ransomware",
      org: "CISA",
      url: "https://www.cisa.gov/stopransomware",
      desc: l("Guides, advisories and recovery resources for ransomware incidents.", "أدلة وتنبيهات وموارد استعادة لحوادث الفدية."),
    },
    {
      title: "No More Ransom",
      org: "Europol and partners",
      url: "https://www.nomoreransom.org/",
      desc: l("A public project that helps victims identify ransomware and find free decryption tools.", "مشروع عام يساعد الضحايا على تحديد الفدية والعثور على أدوات فك تشفير مجانية."),
    },
    {
      title: "MITRE ATT&CK — Software",
      org: "MITRE",
      url: "https://attack.mitre.org/software/",
      desc: l("A knowledge base of malware and tools observed in real intrusions.", "قاعدة معرفة للبرمجيات الخبيثة والأدوات المرصودة في اختراقات حقيقية."),
    },
    {
      title: "Mitigating malware and ransomware attacks",
      org: "NCSC UK",
      url: "https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks",
      desc: l("Practical layered defenses for malware and ransomware.", "دفاعات عملية متعددة الطبقات للبرمجيات الخبيثة والفدية."),
    },
    {
      title: "Phishing guidance",
      org: "NCSC UK",
      url: "https://www.ncsc.gov.uk/guidance/phishing",
      desc: l("How phishing works and how organizations reduce its impact.", "كيف يعمل التصيّد وكيف تقلل المؤسسات أثره."),
    },
    {
      title: "Avoiding social engineering and phishing attacks",
      org: "CISA",
      url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks",
      desc: l("A concise public guide to recognizing and reporting phishing.", "دليل عام موجز للتعرف على التصيّد والإبلاغ عنه."),
    },
    {
      title: "Phishing guidance: stopping the attack cycle at phase one",
      org: "CISA",
      url: "https://www.cisa.gov/resources-tools/resources/phishing-guidance-stopping-attack-cycle-phase-one",
      desc: l("Defensive guidance focused on interrupting phishing before delivery succeeds.", "إرشادات دفاعية تركز على تعطيل التصيّد قبل نجاح التسليم."),
    },
    {
      title: "Guide to Malware Incident Prevention and Handling for Desktops and Laptops",
      org: "NIST",
      url: "https://csrc.nist.gov/pubs/sp/800/83/r1/final",
      desc: l("NIST SP 800-83 Rev. 1 on malware prevention, detection and response.", "وثيقة NIST SP 800-83 Rev. 1 حول منع البرمجيات الخبيثة وكشفها والاستجابة لها."),
    },
  ],
  terms: [
    {
      term: l("Social engineering", "الهندسة الاجتماعية"),
      def: l("Manipulating people into revealing information or taking an action that helps an attacker.", "التلاعب بالأشخاص لكشف معلومات أو اتخاذ إجراء يخدم المهاجم."),
      example: l("A caller pretends to be IT support and asks for a one-time code.", "يدعي متصل أنه من الدعم التقني ويطلب رمز استخدام لمرة واحدة."),
    },
    {
      term: l("Phishing", "التصيّد الاحتيالي"),
      def: l("Fraudulent communication that imitates a trusted party to steal data, money or access.", "تواصل احتيالي ينتحل صفة جهة موثوقة لسرقة البيانات أو المال أو الوصول."),
      example: l("A fake invoice email links to a credential page.", "بريد فاتورة مزيف يرتبط بصفحة بيانات اعتماد."),
    },
    {
      term: l("Spear phishing", "التصيّد الموجّه"),
      def: l("Phishing tailored to a specific person using researched details.", "تصيّد مفصل لشخص محدد باستخدام تفاصيل مدروسة."),
      example: l("A message names a real project and a real colleague.", "تذكر الرسالة مشروعًا حقيقيًا وزميلًا حقيقيًا."),
    },
    {
      term: l("Whaling", "صيد الحيتان"),
      def: l("Spear phishing aimed at senior executives or other high-value targets.", "تصيّد موجّه يستهدف كبار التنفيذيين أو أهدافًا عالية القيمة."),
      example: l("A fake board resolution is sent to a chief executive.", "يُرسل قرار مجلس إدارة مزيف إلى مدير تنفيذي."),
    },
    {
      term: l("Business email compromise (BEC)", "اختراق البريد التجاري"),
      def: l("Impersonating an executive, employee or supplier to redirect a payment or obtain sensitive data.", "انتحال صفة مسؤول أو موظف أو مورّد لتحويل دفعة أو الحصول على بيانات حساسة."),
      example: l("A supplier asks to change its bank details by email.", "يطلب مورّد تغيير بياناته المصرفية عبر البريد."),
    },
    {
      term: l("Vishing", "التصيّد الصوتي"),
      def: l("Phishing conducted through a phone call.", "تصيّد يُجرى عبر مكالمة هاتفية."),
      example: l("A fake bank fraud team asks for a one-time code.", "فريق احتيال بنكي مزيف يطلب رمز استخدام لمرة واحدة."),
    },
    {
      term: l("Smishing", "التصيّد النصي"),
      def: l("Phishing conducted through SMS or messaging applications.", "تصيّد يُجرى عبر الرسائل النصية أو تطبيقات المحادثة."),
      example: l("A text claims a parcel is waiting and links to a fake page.", "رسالة تدعي وجود شحنة وتربط بصفحة مزيفة."),
    },
    {
      term: l("Quishing", "التصيّد عبر QR"),
      def: l("Phishing that hides a malicious link inside a QR code.", "تصيّد يخفي رابطًا خبيثًا داخل رمز QR."),
      example: l("A fake invoice image contains a QR code to a login page.", "صورة فاتورة مزيفة تحتوي رمز QR لصفحة دخول."),
    },
    {
      term: l("Pretexting", "الذريعة"),
      def: l("Inventing a believable story to obtain information or access.", "اختلاق قصة مقنعة للحصول على معلومات أو وصول."),
      example: l("An attacker poses as a new employee who needs a password reset.", "ينتحل مهاجم صفة موظف جديد يحتاج إعادة تعيين كلمة مرور."),
    },
    {
      term: l("Baiting", "الطُعم"),
      def: l("Offering something attractive to persuade a person to act.", "تقديم شيء جاذب لإقناع شخص بالتصرف."),
      example: l("A USB drive labeled 'Salaries' is left in a car park.", "تُترك ذاكرة USB تحمل اسم «الرواتب» في موقف سيارات."),
    },
    {
      term: l("Tailgating", "التسلل المادي"),
      def: l("Entering a secured area by following an authorized person.", "الدخول إلى منطقة مؤمّنة باتباع شخص مصرح له."),
      example: l("A visitor holds the door for someone without a badge.", "يُبقي زائر الباب مفتوحًا لشخص بلا بطاقة."),
    },
    {
      term: l("Adversary-in-the-middle phishing", "التصيّد بهجوم الوسيط"),
      def: l("A phishing page that proxies the real login and steals the authenticated session.", "صفحة تصيّد تمرر الدخول الحقيقي وتسرق الجلسة المصادق عليها."),
      example: l("The victim completes MFA on a look-alike site and the attacker reuses the session.", "يكمل الضحية المصادقة على موقع مشابه ويعيد المهاجم استخدام الجلسة."),
    },
    {
      term: l("Malware", "البرمجية الخبيثة"),
      def: l("Software designed to harm, spy, steal or take unauthorized control.", "برمجية مصممة للضرر أو التجسس أو السرقة أو السيطرة دون تصريح."),
      example: l("An infostealer secretly copies browser credentials.", "سارق معلومات ينسخ بيانات اعتماد المتصفح سرًا."),
    },
    {
      term: l("Virus", "الفيروس"),
      def: l("Malware that attaches to files and spreads when they are run or shared.", "برمجية خبيثة تلتصق بالملفات وتنتشر عند تشغيلها أو مشاركتها."),
      example: l("An infected document corrupts files on a shared drive.", "مستند مصاب يتلف ملفات على قرص مشترك."),
    },
    {
      term: l("Worm", "الدودة"),
      def: l("Self-replicating malware that spreads across networks without user action.", "برمجية خبيثة تنسخ نفسها وتنتشر عبر الشبكات دون تدخل المستخدم."),
      example: l("Hundreds of unpatched hosts are infected in minutes.", "تُصاب مئات الأجهزة غير المحدّثة خلال دقائق."),
    },
    {
      term: l("Trojan", "حصان طروادة"),
      def: l("Malware disguised as useful software that the user installs voluntarily.", "برمجية خبيثة تتنكر كبرنامج مفيد يثبته المستخدم طوعًا."),
      example: l("A fake video codec installs a remote-access service.", "مشفّر فيديو مزيف يثبت خدمة وصول بعيد."),
    },
    {
      term: l("Ransomware", "برمجية الفدية"),
      def: l("Malware that encrypts or steals data and demands payment.", "برمجية خبيثة تشفّر البيانات أو تسرقها وتطلب دفعًا."),
      example: l("A hospital's records are encrypted with a payment demand.", "تُشفَّر سجلات مستشفى مع طلب دفع."),
    },
    {
      term: l("Double extortion", "الابتزاز المزدوج"),
      def: l("Encrypting data and threatening to publish stolen copies unless payment is made.", "تشفير البيانات والتهديد بنشر نسخ مسروقة ما لم يُدفع المبلغ."),
      example: l("Attackers leak a sample of patient files to pressure the hospital.", "يسرّب المهاجمون عينة من ملفات المرضى للضغط على المستشفى."),
    },
    {
      term: l("Infostealer", "سارق المعلومات"),
      def: l("Malware that collects credentials, cookies, keystrokes or other sensitive data.", "برمجية خبيثة تجمع بيانات الاعتماد وملفات الارتباط وضغطات المفاتيح أو بيانات حساسة أخرى."),
      example: l("Stolen session cookies allow account access without the password.", "تتيح ملفات ارتباط الجلسة المسروقة الوصول إلى الحساب دون كلمة المرور."),
    },
    {
      term: l("Rootkit", "الحزمة الجذرية"),
      def: l("Malware that hides itself and other code deep in the operating system or firmware.", "برمجية خبيثة تخفي نفسها وشيفرة أخرى في عمق نظام التشغيل أو البرمجية الثابتة."),
      example: l("Normal tools show no infection while behavior remains abnormal.", "لا تعرض الأدوات العادية إصابة بينما يبقى السلوك غير طبيعي."),
    },
    {
      term: l("Botnet", "شبكة البوت"),
      def: l("A network of infected devices controlled remotely by an attacker.", "شبكة أجهزة مصابة يتحكم بها مهاجم عن بُعد."),
      example: l("An idle office computer participates in a traffic flood.", "حاسوب مكتبي خامل يشارك في سيل زيارات."),
    },
    {
      term: l("Loader", "المحمّل"),
      def: l("A small program that installs a further payload and often removes itself.", "برنامج صغير يثبت حمولة إضافية وغالبًا يحذف نفسه."),
      example: l("A phishing attachment installs a loader that later downloads ransomware.", "مرفق تصيّد يثبت محمّلًا ينزّل الفدية لاحقًا."),
    },
    {
      term: l("Persistence", "الاستمرارية"),
      def: l("Techniques that let malware survive reboots and cleanup attempts.", "تقنيات تتيح للبرمجية الخبيثة البقاء بعد إعادة التشغيل ومحاولات التنظيف."),
      example: l("A scheduled task launches the payload after every login.", "مهمة مجدولة تشغّل الحمولة بعد كل تسجيل دخول."),
    },
    {
      term: l("Lateral movement", "الحركة الجانبية"),
      def: l("Moving from one compromised system to others inside a network.", "الانتقال من نظام مخترق إلى أنظمة أخرى داخل الشبكة."),
      example: l("An attacker reuses stolen administrator credentials on a file server.", "يعيد مهاجم استخدام بيانات اعتماد مسؤول مسروقة على خادم ملفات."),
    },
    {
      term: l("EDR", "كشف واستجابة على الأجهزة الطرفية"),
      def: l("Endpoint Detection and Response: tooling that monitors devices for malicious behavior and supports response.", "أدوات تراقب الأجهزة بحثًا عن سلوك خبيث وتدعم الاستجابة."),
      example: l("EDR shows the process tree that launched an unknown binary.", "تعرض EDR شجرة العمليات التي شغّلت ملفًا مجهولًا."),
    },
    {
      term: l("DMARC", "مصادقة الرسائل والنطاق وسياسة الإبلاغ"),
      def: l("An email authentication policy that aligns SPF and DKIM with the visible domain and tells receivers how to handle failures.", "سياسة مصادقة بريد توائم SPF وDKIM مع النطاق الظاهر وتخبر المستقبلين بكيفية معالجة الفشل."),
      example: l("A reject policy blocks unauthenticated mail claiming to be from the organization.", "سياسة الرفض تحجب البريد غير المصادق الذي يدعي أنه من المؤسسة."),
    },
    {
      term: l("Immutable backup", "النسخة الاحتياطية غير القابلة للتعديل"),
      def: l("A backup copy that cannot be altered or deleted during its retention period.", "نسخة احتياطية لا يمكن تعديلها أو حذفها خلال فترة الاحتفاظ."),
      example: l("Ransomware cannot encrypt a copy stored in immutable storage.", "لا تستطيع الفدية تشفير نسخة محفوظة في تخزين غير قابل للتعديل."),
    },
    {
      term: l("Sandboxing", "العزل الرملي"),
      def: l("Running suspicious files or links in an isolated environment to observe behavior.", "تشغيل ملفات أو روابط مشبوهة في بيئة معزولة لمراقبة السلوك."),
      example: l("An email gateway detonates an attachment in a sandbox before delivery.", "بوابة بريد تفجّر مرفقًا في بيئة رملية قبل التسليم."),
    },
  ],
};
