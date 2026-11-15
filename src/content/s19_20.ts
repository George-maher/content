import { l, type Session } from "./types";

export const s19: Session = {
  id: 19,
  phase: 5,
  minutes: 60,
  title: l("Privacy, Law, Compliance and Ethics", "الخصوصية والقانون والامتثال والأخلاقيات"),
  summary: l(
    "Where security meets the law: personal data and privacy principles, GDPR-style obligations, compliance versus security, computer-misuse law and the ethical boundaries every security professional must respect.",
    "حيث يلتقي الأمن بالقانون: البيانات الشخصية ومبادئ الخصوصية، والتزامات على نمط GDPR، والامتثال مقابل الأمن، وقوانين إساءة استخدام الحاسوب، والحدود الأخلاقية التي يجب أن يحترمها كل متخصص في الأمن."
  ),
  objectives: [
    l("Differentiate privacy from security and define personal and sensitive data.", "التمييز بين الخصوصية والأمن وتعريف البيانات الشخصية والحساسة."),
    l("State the core data-protection principles and data-subject rights.", "ذكر مبادئ حماية البيانات الأساسية وحقوق أصحاب البيانات."),
    l("Explain how compliance frameworks and regulations relate to security.", "شرح علاقة أطر الامتثال واللوائح بالأمن."),
    l("Apply ethical-hacking rules: authorisation, scope, confidentiality and responsible disclosure.", "تطبيق قواعد الاختراق الأخلاقي: التفويض والنطاق والسرية والإفصاح المسؤول."),
  ],
  sections: [
    {
      h: l("1. Privacy versus security", "1. الخصوصية مقابل الأمن"),
      p: [
        l("Security protects data from unauthorised access, change and loss. Privacy is about the rights of individuals over their personal data: what is collected, why, how long it is kept and who sees it. You can have security without privacy (a well-protected database of data that should never have been collected) but you cannot have privacy without security. Personal data is any information relating to an identifiable person: name, ID number, e-mail, phone, IP address, location, photos. Special categories (health, biometric and genetic data, religion, political opinion, sexual orientation, children's data) need extra protection.", "يحمي الأمن البيانات من الوصول غير المصرح به والتغيير والفقد. أما الخصوصية فتتعلق بحقوق الأفراد في بياناتهم الشخصية: ما الذي يُجمع ولماذا ولكم من الوقت يُحفظ ومن يطّلع عليه. ويمكن أن يوجد أمن بلا خصوصية (قاعدة بيانات محمية جيدًا لبيانات ما كان ينبغي جمعها أصلًا) لكن لا خصوصية بلا أمن. والبيانات الشخصية هي أي معلومة تتعلق بشخص يمكن تحديده: الاسم ورقم الهوية والبريد والهاتف وعنوان IP والموقع والصور. وتحتاج الفئات الخاصة (الصحة والبيانات الحيوية والجينية والدين والرأي السياسي والميول وبيانات الأطفال) إلى حماية إضافية."),
      ],
    },
    {
      h: l("2. Data-protection principles and individual rights", "2. مبادئ حماية البيانات وحقوق الأفراد"),
      p: [
        l("The EU General Data Protection Regulation (GDPR) shaped data-protection law worldwide, and many countries have similar laws (for example the Personal Data Protection laws adopted in Saudi Arabia, the UAE and Egypt, California's CCPA/CPRA, and Brazil's LGPD). Details differ by jurisdiction, so always check the law that applies to you and your data subjects. Common principles: lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality (security); and accountability.", "شكّلت اللائحة الأوروبية العامة لحماية البيانات (GDPR) قوانين حماية البيانات عالميًا وللعديد من الدول قوانين مماثلة (مثل أنظمة حماية البيانات الشخصية في السعودية والإمارات ومصر وCCPA/CPRA في كاليفورنيا وLGPD في البرازيل). وتختلف التفاصيل بحسب الاختصاص القضائي لذا تحقق دائمًا من القانون المنطبق عليك وعلى أصحاب بياناتك. المبادئ المشتركة: المشروعية والعدالة والشفافية؛ تحديد الغرض؛ تقليل البيانات؛ الدقة؛ تحديد مدة التخزين؛ السلامة والسرية (الأمن)؛ والمساءلة."),
        l("Individuals typically have rights to be informed, to access their data, to correct it, to have it erased in certain cases, to restrict or object to processing, and to data portability. Organisations must have a legal basis for processing (consent, contract, legal obligation, legitimate interest…), keep records of processing, run impact assessments for high-risk processing, build 'privacy by design and by default', sign data-processing agreements with vendors, and report personal-data breaches to the regulator (under GDPR within 72 hours of awareness) and, when risk is high, to the affected people. Fines can reach 4% of global annual turnover or €20 million under GDPR.", "يتمتع الأفراد عادةً بحقوق الإعلام والاطلاع على بياناتهم وتصحيحها ومحوها في حالات معينة والحد من المعالجة أو الاعتراض عليها ونقل البيانات. ويجب على المؤسسات امتلاك أساس قانوني للمعالجة (موافقة أو عقد أو التزام قانوني أو مصلحة مشروعة…) والاحتفاظ بسجلات المعالجة وإجراء تقييمات أثر للمعالجة عالية المخاطر وبناء «الخصوصية بالتصميم وبالافتراضي» وتوقيع اتفاقيات معالجة بيانات مع الموردين والإبلاغ عن اختراقات البيانات الشخصية للجهة التنظيمية (وفق GDPR خلال 72 ساعة من العلم) ولأصحاب البيانات المتأثرين عند ارتفاع الخطر. وقد تصل الغرامات إلى 4% من الإيراد السنوي العالمي أو 20 مليون يورو وفق GDPR."),
      ],
      callout: { kind: "key", text: l("Data minimisation is the cheapest security control: data you never collect – or delete on time – cannot be breached.", "تقليل البيانات أرخص ضابط أمني: البيانات التي لا تجمعها — أو تحذفها في الوقت المناسب — لا يمكن اختراقها.") },
    },
    {
      h: l("3. Compliance, standards and audits", "3. الامتثال والمعايير والتدقيق"),
      p: [
        l("Compliance means meeting the requirements of laws, regulations, contracts and standards — for example PCI DSS for organisations handling payment-card data, HIPAA for US health information, SOX for financial reporting, ISO/IEC 27001 certification, and SOC 2 reports for service providers. Compliance is evidence that required controls exist at a point in time; security is the real, continuous ability to resist attackers. A company can pass an audit and still be breached (checklist mentality), or be secure but unable to prove it (poor documentation). Aim for security first, and use compliance as a framework and a proof.", "الامتثال يعني الوفاء بمتطلبات القوانين واللوائح والعقود والمعايير — مثل PCI DSS للمؤسسات التي تعالج بيانات بطاقات الدفع وHIPAA للمعلومات الصحية الأمريكية وSOX للتقارير المالية وشهادة ISO/IEC 27001 وتقارير SOC 2 لمزودي الخدمات. والامتثال دليل على وجود الضوابط المطلوبة في لحظة معينة؛ والأمن هو القدرة الحقيقية والمستمرة على مقاومة المهاجمين. وقد تنجح شركة في التدقيق وتُخترق مع ذلك (عقلية قائمة الفحص)، أو تكون آمنة لكنها عاجزة عن الإثبات (توثيق ضعيف). اسعَ إلى الأمن أولًا واستخدم الامتثال كإطار وكدليل."),
        l("Audits compare reality with requirements: internal audits find gaps early; external audits give independent assurance. Findings are tracked to closure. Data classification (for example Public, Internal, Confidential, Restricted) tells staff how each kind of data must be stored, shared, retained and destroyed.", "تقارن عمليات التدقيق الواقع بالمتطلبات: فالتدقيق الداخلي يكشف الثغرات مبكرًا والتدقيق الخارجي يمنح ضمانًا مستقلًا. وتُتابع الملاحظات حتى الإغلاق. ويخبر تصنيف البيانات (مثل: عام وداخلي وسري ومقيّد) الموظفين كيف يجب تخزين كل نوع من البيانات ومشاركته والاحتفاظ به وإتلافه."),
      ],
    },
    {
      h: l("4. Computer-misuse law and ethical hacking", "4. قوانين إساءة استخدام الحاسوب والاختراق الأخلاقي"),
      p: [
        l("Almost every country criminalises unauthorised access to computer systems (for example the US Computer Fraud and Abuse Act, the UK Computer Misuse Act, and national cybercrime laws across the Arab world and the EU). Good intentions are not a legal defence: scanning, probing or logging into a system without permission can be an offence even if you cause no damage and report what you found. The difference between a security professional and a criminal is authorisation.", "تجرّم كل دولة تقريبًا الوصول غير المصرح به إلى أنظمة الحاسوب (مثل قانون الاحتيال وإساءة استخدام الحاسوب الأمريكي وقانون إساءة استخدام الحاسوب البريطاني وقوانين الجرائم المعلوماتية الوطنية في العالم العربي والاتحاد الأوروبي). وحسن النية ليس دفاعًا قانونيًا: فمسح نظام أو فحصه أو الدخول إليه دون إذن قد يكون جريمة حتى لو لم تسبب ضررًا وأبلغت عمّا وجدت. والفرق بين المتخصص الأمني والمجرم هو التفويض."),
        l("Ethical (authorised) security testing follows strict rules: written permission from someone with authority; a defined scope (which systems, which dates, which techniques); rules of engagement (no denial of service, no data destruction, stop and report if real sensitive data or a crime is found); confidentiality of findings; a report with remediation advice; and, for vulnerabilities found by chance, responsible (coordinated) disclosure — privately inform the owner, allow reasonable time to fix, do not exploit, copy data or publish details prematurely. Professional codes such as the (ISC)² Code of Ethics add duties: protect society, act honourably and legally, provide diligent service and advance the profession.", "يتبع اختبار الأمن الأخلاقي (المصرح به) قواعد صارمة: إذن كتابي من صاحب صلاحية؛ ونطاق محدد (أي الأنظمة وأي التواريخ وأي التقنيات)؛ وقواعد الاشتباك (لا حجب خدمة ولا إتلاف بيانات وتوقف وأبلغ إن وجدت بيانات حساسة حقيقية أو جريمة)؛ وسرية النتائج؛ وتقرير بنصائح المعالجة؛ وبالنسبة للثغرات المكتشفة بالصدفة الإفصاح المسؤول (المنسَّق) — أبلغ المالك سرًا وامنحه وقتًا معقولًا للإصلاح ولا تستغل ولا تنسخ بيانات ولا تنشر التفاصيل قبل الأوان. وتضيف مدونات السلوك المهنية مثل مدونة (ISC)² واجبات: حماية المجتمع والتصرف بشرف وقانونية وتقديم خدمة متقنة والارتقاء بالمهنة."),
      ],
      callout: { kind: "warn", text: l("Never test, scan or 'just look' at systems you do not own or have written authorisation for – including your school, employer, neighbours and websites. Use legal practice environments (your own virtual machines, intentionally vulnerable training labs, bug-bounty programmes within their published rules).", "لا تختبر أو تمسح أو «تتفرج فقط» على أنظمة لا تملكها أو ليس لديك تفويض كتابي بشأنها — ومنها مدرستك وجهة عملك وجيرانك والمواقع. استخدم بيئات تدريب قانونية (أجهزتك الافتراضية ومختبرات تدريب ضعيفة عمدًا وبرامج مكافآت الثغرات ضمن قواعدها المنشورة).") },
    },
  ],
  diagram: {
    kind: "grid",
    title: l("Core data-protection principles (GDPR-style)", "مبادئ حماية البيانات الأساسية (على نمط GDPR)"),
    caption: l("These principles apply from collection to deletion. Security controls implement the integrity-and-confidentiality principle; the others are governance decisions.", "تنطبق هذه المبادئ من الجمع حتى الحذف. وتنفّذ الضوابط الأمنية مبدأ السلامة والسرية؛ أما الباقي فقرارات حوكمة."),
    nodes: [
      { label: l("Lawful, fair, transparent", "مشروع وعادل وشفاف"), desc: l("Have a legal basis and tell people what you do.", "امتلك أساسًا قانونيًا وأخبر الناس بما تفعل.") },
      { label: l("Purpose limitation", "تحديد الغرض"), desc: l("Use data only for the stated purpose.", "استخدم البيانات للغرض المعلن فقط.") },
      { label: l("Data minimisation", "تقليل البيانات"), desc: l("Collect only what is necessary.", "اجمع ما هو ضروري فقط.") },
      { label: l("Accuracy", "الدقة"), desc: l("Keep data correct and up to date.", "أبقِ البيانات صحيحة ومحدّثة.") },
      { label: l("Storage limitation", "تحديد مدة التخزين"), desc: l("Delete data when no longer needed.", "احذف البيانات عند انتفاء الحاجة.") },
      { label: l("Integrity & confidentiality", "السلامة والسرية"), desc: l("Protect with appropriate security measures.", "احمِ بتدابير أمنية مناسبة.") },
      { label: l("Accountability", "المساءلة"), desc: l("Be able to demonstrate compliance.", "كن قادرًا على إثبات الامتثال.") },
    ],
  },
  lab: {
    tool: "match",
    title: l("Lab 19 – Legal or not? Ethical decision drill", "المختبر 19 – قانوني أم لا؟ تمرين اتخاذ القرار الأخلاقي"),
    scenario: l("As a new security analyst you face seven situations. For each, decide whether the action is permitted as described, requires written authorisation first, or is illegal/unethical.", "بصفتك محلل أمن جديدًا تواجه سبعة مواقف. لكل موقف قرر هل الفعل مسموح كما وُصف أم يتطلب تفويضًا كتابيًا أولًا أم هو مخالف للقانون/الأخلاق."),
    safety: l("This lab is about judgement, not technique. It is general education and not legal advice: laws differ between countries, so consult qualified legal counsel for real situations.", "يتناول هذا المختبر الحكم لا التقنية. وهو تعليم عام وليس استشارة قانونية: فالقوانين تختلف بين الدول لذا استشر مستشارًا قانونيًا مؤهلًا في المواقف الحقيقية."),
    steps: [
      l("Read the principle of authorisation again: written permission + defined scope + rules of engagement.", "أعد قراءة مبدأ التفويض: إذن كتابي + نطاق محدد + قواعد اشتباك."),
      l("Choose a decision for each of the seven situations.", "اختر قرارًا لكل موقف من المواقف السبعة."),
      l("Check your answers and read the corrections.", "تحقق من إجاباتك واقرأ التصحيحات."),
      l("For the 'illegal' items, write the ethical alternative (for example reporting through the vendor's disclosure channel).", "للبنود «المخالفة» اكتب البديل الأخلاقي (مثل الإبلاغ عبر قناة الإفصاح لدى المورّد)."),
      l("Draft a one-paragraph 'rules of engagement' summary for a penetration test of a small web shop: scope, dates, forbidden actions, contacts, reporting.", "صُغ فقرة «قواعد اشتباك» لاختبار اختراق متجر ويب صغير: النطاق والتواريخ والأفعال المحظورة وجهات الاتصال والإبلاغ."),
      l("List the personal data your own organisation (or school) holds about you and which principle you think is most at risk of being violated.", "اذكر البيانات الشخصية التي تحتفظ بها مؤسستك (أو مدرستك) عنك وأي مبدأ تراه الأكثر عرضة للانتهاك."),
    ],
    expected: l("Seven correct classifications, a short rules-of-engagement paragraph and a clear understanding that authorisation – not intent or skill – defines ethical security work.", "سبعة تصنيفات صحيحة وفقرة قصيرة لقواعد الاشتباك وفهم واضح أن التفويض — لا النية أو المهارة — هو ما يحدد العمل الأمني الأخلاقي."),
    match: {
      prompt: l("Decide for each situation", "قرر لكل موقف"),
      options: [l("Permitted as described", "مسموح كما وُصف"), l("Needs written authorisation first", "يحتاج تفويضًا كتابيًا أولًا"), l("Illegal or unethical", "مخالف للقانون أو للأخلاق")],
      items: [
        { text: l("Running a vulnerability scan on your employer's servers exactly as assigned in a signed scope document, during the agreed window.", "تشغيل فحص ثغرات على خوادم جهة عملك تمامًا كما أُسند في وثيقة نطاق موقّعة وخلال الوقت المتفق عليه."), answer: 0 },
        { text: l("Scanning a neighbour's Wi-Fi router 'out of curiosity' to see if it is secure.", "مسح موجّه واي فاي جارك «بدافع الفضول» لمعرفة إن كان آمنًا."), answer: 2 },
        { text: l("Performing a penetration test of a client's public website.", "تنفيذ اختبار اختراق لموقع عميل عام."), answer: 1 },
        { text: l("Finding an exposed customer database on the Internet and downloading records to 'prove' the problem.", "العثور على قاعدة بيانات عملاء مكشوفة على الإنترنت وتنزيل سجلات «لإثبات» المشكلة."), answer: 2 },
        { text: l("Privately reporting an accidentally noticed vulnerability to the vendor via its disclosure policy, without exploiting it further.", "الإبلاغ سرًا عن ثغرة لوحظت بالصدفة إلى المورّد عبر سياسة الإفصاح لديه دون استغلالها أكثر."), answer: 0 },
        { text: l("Reading a colleague's HR file out of curiosity because your admin account technically allows it.", "قراءة ملف موارد بشرية لزميل بدافع الفضول لأن حساب المدير لديك يسمح بذلك تقنيًا."), answer: 2 },
        { text: l("Sending a simulated phishing campaign to all staff to measure awareness.", "إرسال حملة تصيّد محاكاة إلى كل الموظفين لقياس الوعي."), answer: 1 },
      ],
    },
  },
  quiz: [
    { q: l("Which statement about privacy and security is correct?", "أي عبارة عن الخصوصية والأمن صحيحة؟"), options: [l("They are identical", "هما متطابقان"), l("You cannot have privacy without security", "لا خصوصية بلا أمن"), l("Privacy is only for lawyers", "الخصوصية للمحامين فقط"), l("Security always guarantees privacy", "الأمن يضمن الخصوصية دائمًا")], answer: 1, why: l("Unprotected data cannot be kept private; but secure data can still be over-collected.", "البيانات غير المحمية لا يمكن إبقاؤها خاصة؛ لكن البيانات الآمنة قد تُجمع بإفراط.") },
    { q: l("'Data minimisation' means…", "«تقليل البيانات» يعني…"), options: [l("Compressing files", "ضغط الملفات"), l("Collecting and keeping only what is necessary", "جمع وحفظ ما هو ضروري فقط"), l("Deleting backups", "حذف النسخ الاحتياطية"), l("Using small hard disks", "استخدام أقراص صغيرة")], answer: 1, why: l("Less data means less exposure and less obligation.", "بيانات أقل تعني تعرضًا والتزامًا أقل.") },
    { q: l("What is the usual deadline in GDPR for notifying the regulator of a personal-data breach?", "ما المهلة المعتادة في GDPR لإخطار الجهة التنظيمية باختراق بيانات شخصية؟"), options: [l("72 hours after becoming aware", "72 ساعة بعد العلم به"), l("30 days", "30 يومًا"), l("1 year", "سنة"), l("No deadline", "لا مهلة")], answer: 0, why: l("Article 33 requires notification without undue delay and where feasible within 72 hours.", "تتطلب المادة 33 الإخطار دون تأخير لا مبرر له وحيثما أمكن خلال 72 ساعة.") },
    { q: l("Which is the key difference between an ethical hacker and a criminal?", "ما الفرق الجوهري بين المخترق الأخلاقي والمجرم؟"), options: [l("Better tools", "أدوات أفضل"), l("Authorisation and defined scope", "التفويض والنطاق المحدد"), l("Faster typing", "سرعة الكتابة"), l("More experience", "خبرة أكثر")], answer: 1, why: l("Written permission and scope make the same technical actions legal and ethical.", "الإذن الكتابي والنطاق يجعلان الأفعال التقنية نفسها قانونية وأخلاقية.") },
    { q: l("Passing a compliance audit means…", "اجتياز تدقيق امتثال يعني…"), options: [l("The organisation cannot be breached", "أن المؤسسة لا يمكن اختراقها"), l("Required controls existed at the time of audit; it is not a guarantee of security", "أن الضوابط المطلوبة كانت موجودة وقت التدقيق وليس ضمانًا للأمن"), l("Security is unnecessary", "أن الأمن غير ضروري"), l("All employees are trained", "أن كل الموظفين مدرَّبون")], answer: 1, why: l("Compliance is evidence at a point in time; security is continuous.", "الامتثال دليل في لحظة زمنية والأمن مستمر.") },
    { q: l("You discover a vulnerability on a company's website by accident. The ethical response is…", "اكتشفت بالصدفة ثغرة في موقع شركة. الاستجابة الأخلاقية هي…"), options: [l("Publish details immediately", "نشر التفاصيل فورًا"), l("Download data to prove it", "تنزيل بيانات لإثباتها"), l("Report privately via their disclosure channel and allow time to fix", "الإبلاغ سرًا عبر قناة الإفصاح وإتاحة وقت للإصلاح"), l("Sell it", "بيعها")], answer: 2, why: l("Responsible disclosure protects users and the finder.", "الإفصاح المسؤول يحمي المستخدمين والمكتشف.") },
    { q: l("A document that sets the scope, dates and forbidden actions of a penetration test is called…", "الوثيقة التي تحدد نطاق اختبار الاختراق وتواريخه والأفعال المحظورة فيه تسمى…"), options: [l("Rules of engagement", "قواعد الاشتباك"), l("A marketing brochure", "كتيب تسويقي"), l("A backup policy", "سياسة نسخ احتياطي"), l("A privacy notice", "إشعار خصوصية")], answer: 0, why: l("Rules of engagement are agreed before testing starts.", "تُتفق قواعد الاشتباك قبل بدء الاختبار.") },
  ],
  homework: {
    title: l("Homework 19 – Privacy review and personal ethics statement", "الواجب 19 – مراجعة خصوصية وبيان أخلاقي شخصي"),
    tasks: [
      l("Read the privacy notice of one service you use and summarise what data it collects, why, how long it keeps it and with whom it shares it.", "اقرأ إشعار الخصوصية لخدمة تستخدمها ولخّص ما تجمعه من بيانات ولماذا وكم تحتفظ بها ومع من تشاركها."),
      l("Exercise a data-subject right: download your data or review your privacy dashboard and delete data you no longer want kept.", "مارس حقًا من حقوق صاحب البيانات: نزّل بياناتك أو راجع لوحة الخصوصية واحذف ما لا تريد الاحتفاظ به."),
      l("Identify which privacy law applies to you or your organisation and list three of its key obligations.", "حدد أي قانون خصوصية ينطبق عليك أو على مؤسستك وسمِّ ثلاثة من التزاماته الرئيسية."),
      l("Write a half-page personal code of ethics for your future security work.", "اكتب مدونة سلوك شخصية بنصف صفحة لعملك الأمني المستقبلي."),
    ],
    deliverable: l("A privacy-review summary, evidence of one exercised right and the personal ethics statement.", "ملخص مراجعة الخصوصية ودليل على حق واحد مُمارَس والبيان الأخلاقي الشخصي."),
  },
  refs: [
    { title: "General Data Protection Regulation – official text", org: "European Union", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    { title: "Guide to the UK GDPR", org: "ICO", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" },
    { title: "PCI Security Standards", org: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/" },
    { title: "Code of Ethics", org: "ISC2", url: "https://www.isc2.org/ethics" },
    { title: "Coordinated Vulnerability Disclosure guidance", org: "CISA", url: "https://www.cisa.gov/coordinated-vulnerability-disclosure-process" },
  ],
  terms: [
    { term: l("Personal data", "البيانات الشخصية"), def: l("Any information relating to an identified or identifiable person.", "أي معلومة تتعلق بشخص محدد أو يمكن تحديده.") },
    { term: l("GDPR", "اللائحة العامة لحماية البيانات"), def: l("EU regulation governing personal-data processing and individual rights.", "لائحة أوروبية تنظم معالجة البيانات الشخصية وحقوق الأفراد.") },
    { term: l("Data subject", "صاحب البيانات"), def: l("The individual the personal data relates to.", "الفرد الذي تتعلق به البيانات الشخصية.") },
    { term: l("Privacy by design", "الخصوصية بالتصميم"), def: l("Building privacy protections into systems from the start.", "دمج حمايات الخصوصية في الأنظمة منذ البداية.") },
    { term: l("Compliance", "الامتثال"), def: l("Meeting legal, regulatory, contractual and policy requirements.", "الوفاء بالمتطلبات القانونية والتنظيمية والتعاقدية وسياسات المؤسسة.") },
    { term: l("Rules of engagement", "قواعد الاشتباك"), def: l("Agreed limits and procedures for an authorised security test.", "حدود وإجراءات متفق عليها لاختبار أمني مصرح به.") },
    { term: l("Responsible disclosure", "الإفصاح المسؤول"), def: l("Privately reporting a flaw to its owner and allowing time to fix it.", "إبلاغ المالك بالثغرة سرًا وإتاحة وقت لإصلاحها.") },
    { term: l("Data classification", "تصنيف البيانات"), def: l("Labelling data by sensitivity to drive handling rules.", "وسم البيانات بحسب حساسيتها لتحديد قواعد التعامل.") },
  ],
};

export const s20: Session = {
  id: 20,
  phase: 5,
  minutes: 90,
  title: l("Capstone: Secure a Small Business, and Your Next Steps", "المشروع الختامي: أمّن شركة صغيرة وخطواتك التالية"),
  summary: l(
    "Bring the whole course together: assess a small business, prioritise a 90-day security roadmap, map your skills to security careers and plan how to keep learning.",
    "اجمع الدورة كلها: قيّم شركة صغيرة، ورتّب خارطة طريق أمنية لمدة 90 يومًا، واربط مهاراتك بالمسارات المهنية الأمنية، وخطط لمواصلة التعلم."
  ),
  objectives: [
    l("Apply risk thinking and frameworks to assess a realistic small organisation.", "تطبيق التفكير القائم على المخاطر والأطر لتقييم مؤسسة صغيرة واقعية."),
    l("Prioritise controls into a justified 30-60-90-day roadmap.", "ترتيب الضوابط في خارطة طريق مبررة لمدة 30-60-90 يومًا."),
    l("Map every foundation session to the controls it enables.", "ربط كل جلسة تأسيسية بالضوابط التي تتيحها."),
    l("Identify career paths, certifications and practice resources for the next stage.", "تحديد المسارات المهنية والشهادات وموارد التدريب للمرحلة التالية."),
  ],
  sections: [
    {
      h: l("1. The capstone brief: Nova Accounting Ltd.", "1. ملخص المشروع الختامي: شركة نوفا للمحاسبة"),
      p: [
        l("Nova Accounting has 25 employees, an office with a flat network (staff PCs, a file server, printers, guest Wi-Fi and cameras on one subnet), Microsoft 365 or Google Workspace for e-mail, a cloud accounting application, and laptops used from home. Administrators use their everyday accounts. Backups run to a USB disk plugged into the file server. Staff have never had security training. The owner wants to know: what should we do first, what will it cost in effort, and how will we know we are safer?", "لدى شركة نوفا للمحاسبة 25 موظفًا ومكتب بشبكة مسطحة (حواسيب الموظفين وخادم ملفات وطابعات وواي فاي ضيوف وكاميرات في شبكة فرعية واحدة) وMicrosoft 365 أو Google Workspace للبريد وتطبيق محاسبة سحابي وحواسيب محمولة تُستخدم من المنزل. ويستخدم المديرون حساباتهم اليومية. وتُجرى النسخ الاحتياطية إلى قرص USB موصول بخادم الملفات. ولم يتلقَّ الموظفون أي تدريب أمني. ويريد المالك أن يعرف: ماذا نفعل أولًا وكم سيكلف من جهد وكيف سنعرف أننا أصبحنا أكثر أمانًا؟"),
        l("Your task is to produce a short, professional security plan. Approach it the way professionals do: understand the business and what it must protect (client financial data, availability of the accounting system, reputation), list the most likely threats (phishing, ransomware, credential theft, lost laptop, supplier compromise), find the weaknesses in the description above, rate the risks, choose treatments, and schedule them.", "مهمتك إعداد خطة أمنية موجزة ومهنية. تعامل معها كما يفعل المحترفون: افهم الأعمال وما يجب حمايته (بيانات العملاء المالية وتوافر نظام المحاسبة والسمعة) واذكر أرجح التهديدات (التصيّد والفدية وسرقة بيانات الدخول وفقدان حاسوب محمول واختراق مورد) واعثر على نقاط الضعف في الوصف أعلاه وقيّم المخاطر واختر المعالجات وجدولها."),
      ],
    },
    {
      h: l("2. Mapping the course to concrete controls", "2. ربط الدورة بضوابط ملموسة"),
      p: [l("Every session contributes at least one control to the plan:", "كل جلسة تسهم بضابط واحد على الأقل في الخطة:")],
      table: {
        head: [l("Weakness at Nova", "نقطة الضعف في نوفا"), l("Control", "الضابط"), l("Course session", "جلسة الدورة")],
        rows: [
          [l("Staff click phishing links", "الموظفون ينقرون روابط التصيّد"), l("Awareness training, report button, e-mail filtering, SPF/DKIM/DMARC", "تدريب توعوي وزر إبلاغ وترشيح بريد وSPF/DKIM/DMARC"), l("4, 7", "4، 7")],
          [l("Single passwords, no MFA", "كلمات مرور فقط وبلا MFA"), l("Password manager + MFA for e-mail, admin and accounting app", "مدير كلمات مرور + MFA للبريد والمدير وتطبيق المحاسبة"), l("11", "11")],
          [l("Admins use daily accounts", "المديرون يستخدمون حساباتهم اليومية"), l("Separate admin accounts, least privilege, access reviews", "حسابات إدارة منفصلة وأقل صلاحية ومراجعات وصول"), l("5, 12", "5، 12")],
          [l("Flat network", "شبكة مسطحة"), l("Segment staff, servers, guests and cameras; firewall rules; secure Wi-Fi", "تقسيم الموظفين والخوادم والضيوف والكاميرات؛ قواعد جدار ناري؛ واي فاي آمن"), l("6, 8", "6، 8")],
          [l("USB backup on the server", "نسخة USB على الخادم"), l("3-2-1 backups with an offline/cloud copy and restore tests", "نسخ 3-2-1 مع نسخة معزولة/سحابية واختبارات استعادة"), l("3, 15", "3، 15")],
          [l("Unpatched laptops and servers", "حواسيب وخوادم غير محدّثة"), l("Asset inventory, automatic updates, EDR, disk encryption", "حصر الأصول وتحديثات تلقائية وEDR وتشفير الأقراص"), l("5, 9, 14", "5، 9، 14")],
          [l("Cloud sharing and SaaS settings", "المشاركة السحابية وإعدادات SaaS"), l("Review sharing links, enforce MFA, conditional access, audit logs", "مراجعة روابط المشاركة وفرض MFA والوصول المشروط وسجلات التدقيق"), l("12, 18", "12، 18")],
          [l("No visibility or plan", "لا رؤية ولا خطة"), l("Central logging and alerts; incident response playbooks; contacts", "تسجيل مركزي وتنبيهات؛ أدلة استجابة للحوادث؛ جهات اتصال"), l("16, 17", "16، 17")],
          [l("Client data obligations", "التزامات بيانات العملاء"), l("Data classification, retention, breach-notification procedure", "تصنيف البيانات والاحتفاظ وإجراء إخطار الاختراق"), l("1, 19", "1، 19")],
          [l("Web-facing portal", "بوابة مواجهة للويب"), l("Vendor security questions, secure configuration, WAF, OWASP checks", "أسئلة أمن للمورد وإعداد آمن وWAF وفحوص OWASP"), l("13", "13")],
        ],
      },
    },
    {
      h: l("3. Building the 30-60-90-day roadmap", "3. بناء خارطة طريق 30-60-90 يومًا"),
      p: [
        l("Prioritise by risk reduction per effort. Days 1–30, foundations and quick wins: inventory devices, accounts and data; enable MFA on e-mail, admin and finance systems; turn on automatic updates; fix backups (offsite/offline copy and a first restore test); remove unused accounts. Days 31–60, protect and detect: separate admin accounts; segment the network (guests and cameras first); deploy endpoint protection and disk encryption; start phishing training and the report button; review cloud sharing; turn on audit logging and alerts for key systems. Days 61–90, prove and improve: write the incident response plan and run a tabletop exercise; document policies (acceptable use, password, data classification, backup); run a vulnerability scan and fix the highest items; measure and report progress to the owner.", "رتّب الأولويات بحسب خفض المخاطر لكل جهد. الأيام 1–30 الأسس والمكاسب السريعة: حصر الأجهزة والحسابات والبيانات؛ وتفعيل MFA للبريد والمدير والأنظمة المالية؛ وتشغيل التحديثات التلقائية؛ وإصلاح النسخ الاحتياطية (نسخة خارجية/معزولة وأول اختبار استعادة)؛ وإزالة الحسابات غير المستخدمة. الأيام 31–60 الحماية والكشف: حسابات إدارة منفصلة؛ وتقسيم الشبكة (الضيوف والكاميرات أولًا)؛ ونشر حماية النقاط الطرفية وتشفير الأقراص؛ وبدء التدريب على التصيّد وزر الإبلاغ؛ ومراجعة المشاركة السحابية؛ وتفعيل تسجيل التدقيق والتنبيهات للأنظمة الرئيسية. الأيام 61–90 الإثبات والتحسين: كتابة خطة الاستجابة للحوادث وتنفيذ تمرين طاولة؛ وتوثيق السياسات (الاستخدام المقبول وكلمات المرور وتصنيف البيانات والنسخ الاحتياطي)؛ وإجراء فحص ثغرات وإصلاح الأعلى خطرًا؛ وقياس التقدم ورفع تقرير للمالك."),
        l("Choose measurable indicators so the owner can see progress: percentage of accounts with MFA, percentage of devices patched within 14 days, time to restore the file server in a test, phishing report rate, number of open critical findings, and the date of the last tabletop exercise.", "اختر مؤشرات قابلة للقياس ليرى المالك التقدم: نسبة الحسابات التي لديها MFA ونسبة الأجهزة المحدّثة خلال 14 يومًا وزمن استعادة خادم الملفات في اختبار ومعدل الإبلاغ عن التصيّد وعدد النتائج الحرجة المفتوحة وتاريخ آخر تمرين طاولة."),
      ],
    },
    {
      h: l("4. Career paths and how to keep learning", "4. المسارات المهنية وكيف تواصل التعلم"),
      p: [
        l("Cybersecurity is a broad field with room for many personalities. Common entry and growth paths include: SOC analyst (monitoring, triage, investigation — Sessions 8, 16, 17); incident responder and digital forensics; vulnerability management and penetration tester (offensive, always authorised — Sessions 13, 14, 19); security engineer / architect (network, cloud and endpoint defences — Sessions 5–12, 18); identity and access management specialist (Sessions 11–12); governance, risk and compliance (GRC) analyst (Sessions 15, 19); security awareness and training; and application security (Session 13). Non-technical strengths — communication, writing, curiosity, integrity — matter as much as tools.", "الأمن السيبراني مجال واسع يتسع لشخصيات كثيرة. ومن مسارات الدخول والنمو الشائعة: محلل SOC (مراقبة وفرز وتحقيق — الجلسات 8 و16 و17)؛ ومستجيب الحوادث والتحقيق الجنائي الرقمي؛ وإدارة الثغرات واختبار الاختراق (هجومي ومصرح به دائمًا — الجلسات 13 و14 و19)؛ ومهندس/معماري أمن (دفاعات الشبكة والسحابة والنقاط الطرفية — الجلسات 5–12 و18)؛ ومتخصص إدارة الهوية والوصول (الجلستان 11–12)؛ ومحلل الحوكمة والمخاطر والامتثال (GRC) (الجلستان 15 و19)؛ والتوعية والتدريب الأمني؛ وأمن التطبيقات (الجلسة 13). والقدرات غير التقنية — التواصل والكتابة والفضول والنزاهة — لا تقل أهمية عن الأدوات."),
        l("Next steps: build a safe home lab with virtual machines on your own computer; practise on legal, intentionally vulnerable training platforms and capture-the-flag events; follow reputable sources (CISA, NCSC, vendor security blogs, SANS Internet Storm Center); read incident post-mortems; document what you learn in a portfolio; and consider an entry-level certification that matches your path (for example CompTIA Security+, ISC2 Certified in Cybersecurity, or a vendor-neutral networking or cloud-fundamentals certificate). Deeper technical specialisations, including hands-on tool development, belong in later courses beyond this foundation.", "الخطوات التالية: ابنِ مختبرًا منزليًا آمنًا بأجهزة افتراضية على حاسوبك؛ وتدرّب على منصات تدريب قانونية ضعيفة عمدًا وفعاليات التقاط العلم؛ وتابع مصادر موثوقة (CISA وNCSC ومدونات أمن المورّدين ومركز SANS Internet Storm Center)؛ واقرأ تقارير ما بعد الحوادث؛ ووثّق ما تتعلمه في ملف أعمال؛ وفكّر في شهادة مبتدئة تناسب مسارك (مثل CompTIA Security+ أو ISC2 Certified in Cybersecurity أو شهادة أساسيات شبكات أو سحابة محايدة للمورّدين). أما التخصصات التقنية الأعمق ومنها تطوير الأدوات العملية فمكانها دورات لاحقة بعد هذه الدورة التأسيسية."),
      ],
      callout: { kind: "key", text: l("The habit this course tried to build: think in terms of assets, threats, vulnerabilities and controls; layer your defences; assume prevention will sometimes fail; and always act with authorisation and integrity.", "العادة التي حاولت هذه الدورة بناءها: فكّر بدلالة الأصول والتهديدات والثغرات والضوابط؛ وضع دفاعاتك في طبقات؛ وافترض أن الوقاية ستفشل أحيانًا؛ وتصرّف دائمًا بتفويض ونزاهة.") },
    },
  ],
  diagram: {
    kind: "flow",
    title: l("Capstone roadmap – 30 / 60 / 90 days and beyond", "خارطة طريق المشروع الختامي – 30 / 60 / 90 يومًا وما بعدها"),
    caption: l("Quick wins first, then layered protection and detection, then proof and continuous improvement – the risk cycle repeats every quarter.", "المكاسب السريعة أولًا ثم الحماية والكشف متعددا الطبقات ثم الإثبات والتحسين المستمر — وتتكرر دورة المخاطر كل ربع سنة."),
    nodes: [
      { label: l("Days 1–30: Foundations", "الأيام 1–30: الأسس"), desc: l("Inventory · MFA · updates · backups", "الحصر · MFA · التحديثات · النسخ") },
      { label: l("Days 31–60: Protect & detect", "الأيام 31–60: الحماية والكشف"), desc: l("Segmentation · EDR · training · logging", "التقسيم · EDR · التدريب · التسجيل") },
      { label: l("Days 61–90: Prove & improve", "الأيام 61–90: الإثبات والتحسين"), desc: l("IR plan · policies · scan · metrics", "خطة IR · السياسات · الفحص · المقاييس") },
      { label: l("Quarterly review", "المراجعة ربع السنوية"), desc: l("Re-assess risks, update the plan", "إعادة تقييم المخاطر وتحديث الخطة") },
    ],
  },
  lab: {
    tool: "order",
    title: l("Lab 20 – Prioritise the first actions for Nova Accounting", "المختبر 20 – رتّب الإجراءات الأولى لشركة نوفا"),
    scenario: l("The owner has budget and time for one workstream at a time. Order these six actions as the recommended sequence for the first 90 days, applying 'know what you have → close the easiest big holes → build resilience → build people and process'.", "لدى المالك ميزانية ووقت لمسار عمل واحد في كل مرة. رتّب هذه الإجراءات الستة كتسلسل موصى به لأول 90 يومًا مطبقًا «اعرف ما تملك ← أغلق أسهل الثغرات الكبيرة ← ابنِ المرونة ← ابنِ الأشخاص والعمليات»."),
    safety: l("Any real assessment of a business needs a signed agreement defining scope and confidentiality. Treat the information about a client's weaknesses as highly confidential.", "يحتاج أي تقييم حقيقي لشركة إلى اتفاق موقّع يحدد النطاق والسرية. وتعامل مع المعلومات عن نقاط ضعف العميل بسرية عالية."),
    steps: [
      l("Read the six candidate actions and the hint concept ('why first?').", "اقرأ الإجراءات الستة المرشحة ومفهوم التلميح («لماذا أولًا؟»)."),
      l("Click them in your recommended order and check.", "انقر عليها بترتيبك الموصى به وتحقق."),
      l("Write one sentence of justification for each position (risk reduced per effort).", "اكتب جملة تبرير لكل موضع (الخطر المخفَّض لكل جهد)."),
      l("Create the full capstone deliverable in the Homework tab (risk register, roadmap, metrics, one-page summary for the owner).", "أنشئ المخرج الكامل للمشروع في تبويب الواجب (سجل مخاطر وخارطة طريق ومقاييس وملخص من صفحة للمالك)."),
      l("Identify the three career paths that attract you most and the two skills you will practise next month.", "حدد المسارات المهنية الثلاثة الأكثر جذبًا لك والمهارتين اللتين ستتدرب عليهما الشهر القادم."),
    ],
    expected: l("The recommended order (inventory → MFA → patching → backups → training → IR plan & monitoring) with a justification for each, and a personal next-steps plan.", "الترتيب الموصى به (الحصر ← MFA ← الترقيع ← النسخ الاحتياطي ← التدريب ← خطة IR والمراقبة) مع تبرير لكل خطوة وخطة شخصية للخطوات التالية."),
    order: {
      prompt: l("Order the first six actions for Nova Accounting", "رتّب الإجراءات الست الأولى لشركة نوفا"),
      items: [
        { text: l("Inventory all devices, user accounts, cloud services and where client data lives.", "حصر كل الأجهزة وحسابات المستخدمين والخدمات السحابية ومكان وجود بيانات العملاء."), hint: l("You cannot protect what you do not know you have.", "لا تستطيع حماية ما لا تعرف أنك تملكه.") },
        { text: l("Enable MFA on e-mail, administrator and finance accounts and adopt a password manager.", "تفعيل MFA على البريد والمدير والحسابات المالية واعتماد مدير كلمات مرور."), hint: l("Cheapest, biggest cut in account-takeover risk.", "الأرخص والأكبر خفضًا لخطر الاستيلاء على الحسابات.") },
        { text: l("Turn on automatic updates and patch Internet-facing systems and unsupported software.", "تشغيل التحديثات التلقائية وترقيع الأنظمة المواجهة للإنترنت والبرمجيات غير المدعومة."), hint: l("Closes known holes attackers scan for.", "يغلق الثغرات المعروفة التي يبحث عنها المهاجمون.") },
        { text: l("Fix backups: 3-2-1 with an offline or cloud copy, and test a full restore.", "إصلاح النسخ الاحتياطية: 3-2-1 مع نسخة معزولة أو سحابية واختبار استعادة كاملة."), hint: l("Resilience against ransomware.", "مرونة ضد الفدية.") },
        { text: l("Train staff on phishing and add a one-click 'report' button.", "تدريب الموظفين على التصيّد وإضافة زر «إبلاغ» بنقرة واحدة."), hint: l("Builds the human layer once the technical basics are in place.", "يبني الطبقة البشرية بعد وضع الأساسيات التقنية.") },
        { text: l("Write the incident response plan, centralise logs and run a tabletop exercise.", "كتابة خطة الاستجابة للحوادث وتمركز السجلات وتنفيذ تمرين طاولة."), hint: l("Prove readiness and improve detection.", "إثبات الجاهزية وتحسين الكشف.") },
      ],
    },
  },
  quiz: [
    { q: l("Which action gives the biggest account-takeover risk reduction for the lowest effort?", "أي إجراء يعطي أكبر خفض لخطر الاستيلاء على الحسابات بأقل جهد؟"), options: [l("Enabling MFA on e-mail and admin accounts", "تفعيل MFA على البريد وحسابات المدير"), l("Buying a second router", "شراء موجّه ثانٍ"), l("Changing wallpaper", "تغيير الخلفية"), l("Longer meetings", "اجتماعات أطول")], answer: 0, why: l("MFA blocks most credential-based attacks.", "يحجب MFA معظم هجمات بيانات الدخول.") },
    { q: l("Why is an asset inventory the first step in a security programme?", "لماذا يعد حصر الأصول الخطوة الأولى في برنامج الأمن؟"), options: [l("You cannot protect or patch what you do not know exists", "لا يمكنك حماية أو ترقيع ما لا تعلم بوجوده"), l("It is required by law everywhere", "مطلوب قانونًا في كل مكان"), l("It stops phishing", "يمنع التصيّد"), l("It encrypts data", "يشفّر البيانات")], answer: 0, why: l("Every other control depends on knowing the scope.", "كل ضابط آخر يعتمد على معرفة النطاق.") },
    { q: l("Which backup design best protects against ransomware?", "أي تصميم نسخ احتياطي يحمي أفضل من الفدية؟"), options: [l("A USB disk permanently attached to the server", "قرص USB موصول بالخادم دائمًا"), l("3-2-1 with an offline or immutable copy and tested restores", "3-2-1 مع نسخة معزولة أو غير قابلة للتعديل واستعادات مختبرة"), l("One copy on the same server", "نسخة واحدة على الخادم نفسه"), l("No backups, rely on antivirus", "لا نسخ والاعتماد على مضاد الفيروسات")], answer: 1, why: l("Attached backups get encrypted together with the data.", "تُشفَّر النسخ الموصولة مع البيانات.") },
    { q: l("Which metric tells an owner whether patching is working?", "أي مقياس يخبر المالك هل الترقيع يعمل؟"), options: [l("Percentage of devices patched within the target time", "نسبة الأجهزة المرقّعة خلال المدة المستهدفة"), l("Number of printers", "عدد الطابعات"), l("Office size", "حجم المكتب"), l("Staff happiness only", "سعادة الموظفين فقط")], answer: 0, why: l("Good metrics are measurable and tied to a control's goal.", "المقاييس الجيدة قابلة للقياس ومرتبطة بهدف الضابط.") },
    { q: l("A penetration tester's work is ethical only if…", "عمل مختبر الاختراق أخلاقي فقط إذا…"), options: [l("It is authorised in writing with a defined scope", "كان مصرحًا به كتابيًا بنطاق محدد"), l("The target is a big company", "كان الهدف شركة كبيرة"), l("The tester means well", "كانت نية المختبر حسنة"), l("No data is read", "لم تُقرأ بيانات")], answer: 0, why: l("Authorisation is the legal and ethical boundary.", "التفويض هو الحد القانوني والأخلاقي.") },
    { q: l("Which statement best summarises the foundation mindset?", "أي عبارة تلخص أفضل عقلية الأساسيات؟"), options: [l("Buy one product and you are safe", "اشترِ منتجًا واحدًا فتكون آمنًا"), l("Layer defences, manage risk, assume breach and act ethically", "ضع دفاعات في طبقات وأدر المخاطر وافترض الاختراق وتصرف بأخلاق"), l("Security is only IT's problem", "الأمن مشكلة تقنية المعلومات وحدها"), l("Attackers never change", "المهاجمون لا يتغيرون")], answer: 1, why: l("Defense in depth, risk management, incident readiness and ethics tie the course together.", "الدفاع المتعمّق وإدارة المخاطر والجاهزية للحوادث والأخلاقيات تربط الدورة معًا.") },
    { q: l("Which pair of sessions together covers detecting and responding to an intrusion?", "أي جلستين معًا تغطيان كشف الاختراق والاستجابة له؟"), options: [l("16 (monitoring) and 17 (incident response)", "16 (المراقبة) و17 (الاستجابة للحوادث)"), l("5 and 6", "5 و6"), l("9 and 10", "9 و10"), l("19 and 20 only", "19 و20 فقط")], answer: 0, why: l("Monitoring finds the event; incident response contains and learns from it.", "تجد المراقبة الحدث وتحتويه الاستجابة وتتعلم منه.") },
  ],
  homework: {
    title: l("Homework 20 – Final capstone deliverable", "الواجب 20 – المخرج الختامي للمشروع"),
    tasks: [
      l("Write a risk register of at least ten Nova Accounting risks with likelihood, impact, score and chosen treatment.", "اكتب سجل مخاطر لعشر مخاطر على الأقل لشركة نوفا بالاحتمالية والأثر والدرجة والمعالجة المختارة."),
      l("Produce the 30-60-90-day roadmap with owner, effort estimate and success measure for every action.", "أنتج خارطة طريق 30-60-90 يومًا بمالك وتقدير جهد ومقياس نجاح لكل إجراء."),
      l("Draw the target network diagram (segments, firewall rules summary, cloud services, backup flow).", "ارسم مخطط الشبكة المستهدف (القطاعات وملخص قواعد الجدار الناري والخدمات السحابية ومسار النسخ)."),
      l("Write a one-page non-technical summary for the owner: top five risks, top five actions, cost/effort and metrics.", "اكتب ملخصًا غير تقني من صفحة للمالك: أهم خمسة مخاطر وأهم خمسة إجراءات والتكلفة/الجهد والمقاييس."),
      l("Write your personal learning plan for the next six months with at least three resources and one certification goal.", "اكتب خطتك الشخصية للتعلم للأشهر الستة القادمة بثلاثة موارد على الأقل وهدف شهادة واحد."),
    ],
    deliverable: l("A complete capstone pack: risk register, roadmap, network diagram, owner summary and personal learning plan.", "حزمة مشروع ختامي كاملة: سجل المخاطر وخارطة الطريق ومخطط الشبكة وملخص المالك وخطة التعلم الشخصية."),
  },
  refs: [
    { title: "Cybersecurity Framework Quick-Start Guide for Small Businesses", org: "NIST", url: "https://www.nist.gov/itl/smallbusinesscyber" },
    { title: "Small Business Cyber Action Plan", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/small-business-guide" },
    { title: "Cyber Essentials (guide for small businesses)", org: "CISA", url: "https://www.cisa.gov/cyber-essentials" },
    { title: "NICE Workforce Framework for Cybersecurity", org: "NIST", url: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center" },
    { title: "Internet Storm Center", org: "SANS", url: "https://isc.sans.edu/" },
  ],
  terms: [
    { term: l("Roadmap", "خارطة الطريق"), def: l("A prioritised, time-boxed plan of security improvements.", "خطة محسّنات أمنية مرتبة الأولويات ومحددة بزمن.") },
    { term: l("Quick win", "مكسب سريع"), def: l("A low-effort action with a large risk reduction.", "إجراء قليل الجهد يخفض المخاطر كثيرًا.") },
    { term: l("Security metric", "المقياس الأمني"), def: l("A measurable indicator of control effectiveness or progress.", "مؤشر قابل للقياس لفعالية الضابط أو التقدم.") },
    { term: l("Capstone", "المشروع الختامي"), def: l("A culminating project that applies everything learned.", "مشروع ختامي يطبّق كل ما تم تعلمه.") },
    { term: l("GRC", "الحوكمة والمخاطر والامتثال"), def: l("Governance, Risk and Compliance: the management side of security.", "الجانب الإداري للأمن.") },
    { term: l("Home lab", "المختبر المنزلي"), def: l("A safe, personal environment of virtual machines for practice.", "بيئة شخصية آمنة من الأجهزة الافتراضية للتدريب.") },
    { term: l("Capture the flag (CTF)", "التقاط العلم"), def: l("A legal security competition solving challenges to earn points.", "مسابقة أمنية قانونية بحل تحديات لجمع النقاط.") },
  ],
};
