import { l, type L, type Section, type Term, type Ref, type CareerQuizData } from "./types";

/**
 * Session 1 career module — "Cybersecurity Domains, Specializations & Career Paths".
 * Additive content: it is spread into Session 1 (s01_02.ts) and touches no other session.
 */

const INP = l("In practice", "في التطبيق");
const DET = l("Details", "التفاصيل");

/* ------------------------- Section 6: introduction ------------------------- */

const introSection: Section = {
  h: l("6. Cybersecurity Domains, Specializations & Career Paths", "6. مجالات وتخصصات الأمن السيبراني والمسارات الوظيفية"),
  p: [
    l("Cybersecurity is a broad professional field concerned with protecting systems, networks, applications, devices, data and organizations from digital threats. It is much bigger than “hacking”: the industry contains multiple specialized domains. Some professionals focus on defending systems, some test security by simulating attacks, others secure software, manage cloud infrastructure, investigate incidents, or develop security policies. Each domain needs different knowledge, different tools and a different way of thinking.", "الأمن السيبراني مجال مهني واسع يهتم بحماية الأنظمة والشبكات والتطبيقات والأجهزة والبيانات والمؤسسات من التهديدات الرقمية. وهو أكبر بكثير من مجرد «الاختراق»: فالصناعة تضم عدة مجالات متخصصة. بعض المهنيين يركزون على الدفاع عن الأنظمة، وبعضهم يختبر الأمن بمحاكاة الهجمات، وآخرون يؤمّنون البرمجيات أو يديرون البنية التحتية السحابية أو يحققون في الحوادث أو يضعون السياسات الأمنية. وكل مجال يحتاج إلى معرفة مختلفة وأدوات مختلفة وطريقة تفكير مختلفة."),
    l("Knowing this map early protects you from a common beginner mistake: believing that every security career is offensive hacking. In reality, the large majority of professionals work in defensive and organizational roles. This module introduces the main career tracks, what people in them actually do all day, which tools they use, and how you could start moving toward the track that suits you.", "معرفة هذه الخريطة مبكرًا تحميك من خطأ شائع لدى المبتدئين: الاعتقاد بأن كل مسار وظيفي أمني هو اختراق هجومي. في الحقيقة، الأغلبية العظمى من المهنيين يعملون في أدوار دفاعية وتنظيمية. يعرّفك هذا القسم على المسارات المهنية الرئيسية، وما يفعله العاملون فيها يوميًا فعلًا، والأدوات التي يستخدمونها، وكيف يمكنك البدء بالتقدم نحو المسار المناسب لك."),
  ],
  table: {
    head: [l("Term", "المصطلح"), l("What it means", "ماذا يعني")],
    rows: [
      [l("Cybersecurity domain", "مجال الأمن السيبراني"), l("A broad area of security practice, such as network security, application security or governance. Domains describe WHAT is being protected or managed.", "مجال واسع من ممارسة الأمن، كأمن الشبكات أو أمن التطبيقات أو الحوكمة. المجالات تصف ما الذي يُحمى أو يُدار.")],
      [l("Specialization", "تخصص"), l("A focused expertise inside one or more domains, built through study and practice, such as SIEM detection or cloud configuration review.", "خبرة مركزة داخل مجال واحد أو أكثر تُبنى بالدراسة والممارسة، مثل هندسة الكشف في منصات SIEM أو مراجعة إعدادات السحابة.")],
      [l("Career track", "مسار وظيفي"), l("A long-term professional direction with a family of roles, such as the SOC path or the penetration testing path.", "اتجاه مهني طويل الأمد يضم عائلة من الأدوار، كمسار مركز العمليات الأمنية أو مسار اختبار الاختراق.")],
      [l("Job role", "دور وظيفي"), l("The function a person performs, such as monitoring alerts, writing security policies or reviewing code. One person may cover several roles.", "الوظيفة التي يقوم بها الشخص، كمراقبة التنبيهات أو كتابة السياسات الأمنية أو مراجعة الكود. قد يغطي شخص واحد عدة أدوار.")],
      [l("Job title", "مسمى وظيفي"), l("The name an employer gives a position, such as “SOC Analyst Tier 1”. Titles vary a lot between companies for the same work.", "الاسم الذي يمنحه صاحب العمل للوظيفة، مثل «محلل SOC مستوى أول». تختلف المسميات كثيرًا بين الشركات للعمل نفسه.")],
      [l("Professional skill set", "الحزمة المهارية"), l("The mix of technical knowledge, soft skills and experience a person brings to a role. Skill sets overlap between tracks.", "مزيج من المعرفة التقنية والمهارات الشخصية والخبرة التي يقدمها الشخص للدور. تتداخل الحزم المهارية بين المسارات.")],
    ],
  },
  callout: { kind: "key", text: l("These terms are related but NOT interchangeable. A domain is a field of practice, a specialization is your expertise inside it, a track is your career direction, and a job title is only a label. Do not equate a technology (for example “SIEM”) with a career (for example “SOC Analyst”): the tool is one part of the work.", "هذه المصطلحات مترابطة لكنها ليست متطابقة. المجال هو حقل ممارسة، والتخصص هو خبرتك داخله، والمسار هو اتجاهك المهني، أما المسمى الوظيفي فمجرد تسمية. ولا تساوي بين تقنية (مثل SIEM) ومسار (مثل «محلل SOC»): فالأداة جزء واحد من العمل فقط.") },
  diagram: {
    kind: "grid",
    title: l("The career map at a glance — ten main tracks", "خريطة المسارات المهنية في نظرة واحدة — عشرة مسارات رئيسية"),
    caption: l("All ten tracks protect the same organization from different angles. You will study each one below, then compare them side by side.", "المسارات العشرة كلها تحمي المؤسسة نفسها من زوايا مختلفة. ستدرس كل مسار أدناه ثم تقارنها جنبًا إلى جنب."),
    nodes: [
      { label: l("SOC & Blue Team", "مركز العمليات والفريق الأزرق"), desc: l("Detect and triage attacks in real time", "كشف الهجمات وفرزها لحظة بلحظة") },
      { label: l("Penetration Testing", "اختبار الاختراق"), desc: l("Simulate authorized attacks", "محاكاة هجمات مصرّح بها") },
      { label: l("Application Security", "أمن التطبيقات"), desc: l("Build software securely", "بناء برمجيات آمنة") },
      { label: l("DevSecOps & Cloud", "DevSecOps والسحابة"), desc: l("Automate security in pipelines and cloud", "أتمتة الأمن في خطوط الإصدار والسحابة") },
      { label: l("DFIR", "التحقيق الجنائي والاستجابة"), desc: l("Investigate and recover from incidents", "التحقيق في الحوادث والتعافي منها") },
      { label: l("Threat Intelligence", "استخبارات التهديدات"), desc: l("Understand attackers and share indicators", "فهم المهاجمين ونشر المؤشرات") },
      { label: l("Network Security", "أمن الشبكات"), desc: l("Protect the network layer", "حماية طبقة الشبكة") },
      { label: l("Identity & Access (IAM)", "الهوية والوصول IAM"), desc: l("Control who reaches what", "التحكم بمن يصل إلى ماذا") },
      { label: l("GRC", "الحوكمة والمخاطر والامتثال"), desc: l("Govern, assess risk, prove compliance", "الحوكمة وتقييم المخاطر وإثبات الامتثال") },
      { label: l("Malware Analysis", "تحليل البرمجيات الخبيثة"), desc: l("Dissect malicious code safely", "تشريح الشيفرة الخبيثة بأمان") },
    ],
  },
};

/* ------------------------- Section 7: Track 1 — SOC ------------------------- */

const track1: Section = {
  h: l("7. Track 1 — SOC Analyst & Blue Team Operations", "7. المسار 1 — محلل مركز العمليات الأمنية وعمليات الفريق الأزرق"),
  p: [
    l("A Security Operations Center (SOC) is the team — and often the dedicated facility — that watches an organization's security around the clock. “Blue Team” is the general name for defenders: everyone who detects, analyses and repels attacks, in contrast to the “Red Team” that simulates them. The SOC is where Blue Team monitoring happens daily: security events from firewalls, servers, endpoints and applications flow into a central platform, and analysts decide whether each alert is harmless or the first sign of an attack.", "مركز العمليات الأمنية (SOC) هو الفريق — وغالبًا المرفق المخصص — الذي يراقب أمن المؤسسة على مدار الساعة. و«الفريق الأزرق» هو الاسم العام للمدافعين: كل من يكتشف الهجمات ويحللها ويصدّها، مقابل «الفريق الأحمر» الذي يحاكيها. ومركز العمليات هو المكان الذي تجري فيه مراقبة الفريق الأزرق يوميًا: تتدفق الأحداث الأمنية من الجدران النارية والخوادم والأجهزة الطرفية والتطبيقات إلى منصة مركزية، ويقرر المحللون إن كان كل تنبيه غير ضار أو أول علامة على هجوم."),
    l("The main objective of this track is to detect attacks as early as possible and respond before serious damage occurs. A SOC Analyst spends the day monitoring dashboards in a SIEM (Security Information and Event Management) platform, reading logs, investigating security alerts, separating true threats from false positives, and escalating confirmed incidents to Tier 2 analysts or the incident response team. Threat detection is guided by frameworks such as MITRE ATT&CK, which catalogues how real attackers behave.", "الهدف الرئيسي لهذا المسار هو اكتشاف الهجمات مبكرًا قدر الإمكان والاستجابة قبل وقوع ضرر جسيم. يقضي محلل SOC يومه في مراقبة لوحات معلومات منصة SIEM (إدارة المعلومات والأحداث الأمنية)، وقراءة السجلات، والتحقيق في التنبيهات الأمنية، والفرز بين التهديدات الحقيقية والإنذارات الكاذبة، وتصعيد الحوادث المؤكدة إلى محللي المستوى الثاني أو فريق الاستجابة للحوادث. ويوجَّه الكشف بالأطر مثل MITRE ATT&CK التي توثّق سلوك المهاجمين الحقيقيين."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("SOC Analyst Tier 1, SOC Analyst Tier 2, Senior SOC Analyst, Security Monitoring Analyst, Blue Team Analyst, Detection Engineer, SOC Manager.", "محلل SOC مستوى أول، محلل SOC مستوى ثانٍ، محلل SOC أول، محلل مراقبة أمنية، محلل الفريق الأزرق، مهندس كشف، مدير مركز العمليات.")],
      [l("Daily work", "العمل اليومي"), l("Security monitoring of dashboards and queues; log analysis (authentication, network, endpoint); investigating alerts step by step; incident triage and severity rating; escalation with clear notes; tuning detection rules to reduce noise.", "مراقبة أمنية للوحات وقوائم الانتظار؛ تحليل سجلات (الدخول، الشبكة، الأجهزة)؛ التحقيق في التنبيهات خطوة بخطوة؛ فرز الحوادث وتصنيف خطورتها؛ التصعيد بملاحظات واضحة؛ ضبط قواعد الكشف لتقليل الضجيج.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Operating system basics (Windows and Linux), networking and protocols, how common attacks look in logs, query languages for searching events, and structured incident documentation. Entry paths exist with little or no programming.", "أساسيات أنظمة التشغيل (ويندوز ولينكس)، الشبكات والبروتوكولات، شكل الهجمات الشائعة في السجلات، لغات استعلام للبحث في الأحداث، وتوثيق منظم للحوادث. توجد مسارات دخول دون برمجة أو بأقل منها.")],
      [l("Common tools", "الأدوات الشائعة"), l("Splunk, Wazuh, Microsoft Sentinel, Elastic Security, Wireshark, Sysmon, MITRE ATT&CK.", "Splunk وWazuh وMicrosoft Sentinel وElastic Security وWireshark وSysmon وMITRE ATT&CK.")],
      [l("Realistic example", "مثال واقعي"), l("The SIEM raises an alert: twenty failed logins for one account from a foreign IP, then a successful login. The analyst checks whether the IP is a known VPN or TOR exit, compares the time with the user's normal pattern, inspects the Sysmon process data of the session, and confirms the account was not the user's usual machine. Finding new mail-forwarding rules and an attempt to reach other servers, the analyst escalates to Tier 2 as a likely account compromise, recommends resetting the password, revoking sessions and forcing MFA re-enrolment, and documents the timeline.", "يرفع SIEM تنبيهًا: عشرون محاولة دخول فاشلة لحساب واحد من عنوان IP أجنبي، ثم دخول ناجح. يتحقق المحلل إن كان العنوان شبكة VPN أو عقدة TOR معروفة، ويقارن الوقت بنمط المستخدم الاعتيادي، ويفحص بيانات العمليات في Sysmon الخاصة بالجلسة، ويؤكد أن الجهاز ليس جهاز المستخدم المعتاد. وبعثوره على قواعد تحويل بريد جديدة ومحاولة الوصول إلى خوادم أخرى، يصعّد الحالة إلى المستوى الثاني بوصفها اختراق حساب محتملًا، ويوصي بإعادة تعيين كلمة المرور وإلغاء الجلسات وإعادة تسجيل المصادقة متعددة العوامل، ويوثّق الخط الزمني.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("Junior SOC Analyst → Tier 1 → Tier 2 → Senior SOC Analyst → Detection Engineer / Threat Hunter / SOC Lead.", "محلل SOC مبتدئ ← مستوى أول ← مستوى ثانٍ ← محلل أول ← مهندس كشف / صيّاد تهديدات / قائد مركز العمليات.")],
      [l("Connections", "الارتباطات"), l("Feeds incident response and DFIR with confirmed incidents; consumes threat intelligence to enrich alerts; detection engineers turn attacker techniques into SIEM rules; network security provides the traffic data the SOC analyses.", "يغذي الاستجابة للحوادث والتحقيق الجنائي بالحوادث المؤكدة؛ ويستهلك استخبارات التهديدات لإثراء التنبيهات؛ ويحوّل مهندسو الكشف تقنيات المهاجمين إلى قواعد SIEM؛ ويوفر أمن الشبكات بيانات الحركة التي يحللها المركز.")],
      [l("Who enjoys it", "من يشتاق له"), l("Curious investigators who like patterns in data, enjoy structured procedures, and can stay calm and precise during high-pressure monitoring shifts.", "محققون فضوليون يحبون الأنماط في البيانات ويستمتعون بالإجراءات المنظمة ويحافظون على الهدوء والدقة في نوبات المراقبة عالية الضغط.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: finish this foundation course, especially the logging and monitoring topics of Session 16.", "خارطة تعلم المبتدئ: أكمل هذه الدورة التأسيسية، لا سيما مواضيع السجلات والمراقبة في الجلسة 16."),
    l("Stand up a small home lab and install Wazuh or the free Splunk instance to practise searching real event logs.", "أنشئ مختبرًا منزليًا صغيرًا وثبّت Wazuh أو نسخة Splunk المجانية للتدرب على البحث في سجلات أحداث حقيقية."),
    l("Learn Windows event logging and Sysmon, and practise reading authentication logs for failed-then-successful login patterns.", "تعلّم سجلات أحداث ويندوز وSysmon، وتدرب على قراءة سجلات الدخول بحثًا عن أنماط فشل ثم نجاح."),
    l("Read the MITRE ATT&CK tactics and map a few alerts you find to the techniques they represent.", "اقرأ تكتيكات MITRE ATT&CK واربط بعض التنبيهات التي تجدها بالتقنيات التي تمثلها."),
    l("Practise with free beginner detection challenges, then build a small portfolio: screenshots and notes of alerts you investigated and what you concluded.", "تدرّب على تحديات كشف مجانية للمبتدئين، ثم ابنِ ملفًا صغيرًا: لقطات وملاحظات للتنبيهات التي حققت فيها وما استنتجته."),
  ],
  callout: { kind: "tip", text: l("SOC is one of the most beginner-friendly entry points into cybersecurity: it relies on curiosity, log reading and clear writing more than on programming. Many senior professionals in every other track started in a SOC.", "مركز العمليات من أسهل نقاط الدخول إلى الأمن السيبراني: فهو يعتمد على الفضول وقراءة السجلات والكتابة الواضحة أكثر من اعتماده على البرمجة. وكثير من كبار المحترفين في كل المسارات الأخرى بدأوا من مركز العمليات.") },
};

/* ------------------------- Section 8: Track 2 — Pentest ------------------------- */

const track2: Section = {
  h: l("8. Track 2 — Penetration Testing & Ethical Hacking", "8. المسار 2 — اختبار الاختراق والاختراق الأخلاقي"),
  p: [
    l("Ethical hacking is the authorized practice of attacking your own or your client's systems to find weaknesses before criminals do. A penetration test is a time-boxed, scoped engagement in which a tester simulates a realistic attacker: reconnaissance (gathering public information about the target), scanning and enumeration (discovering hosts, services and shares), vulnerability assessment (identifying weaknesses), controlled exploitation (proving a weakness is real, with agreed limits), and finally reporting with clear remediation recommendations. The Red Team is a related, more advanced practice that simulates a full adversary campaign over weeks, testing detection and response — not just individual weaknesses.", "الاختراق الأخلاقي هو ممارسة مصرّح بها لهجوم أنظمتك أو أنظمة عميلك للعثور على نقاط الضعف قبل المجرمين. أما اختبار الاختراق فهو عمل محدد النطاق والزمن يحاكي فيه المختبر مهاجمًا واقعيًا: الاستطلاع (جمع المعلومات العلنية عن الهدف)، والمسح والاستكشاف (اكتشاف الأجهزة والخدمات والمشاركات)، وتقييم الثغرات (تحديد نقاط الضعف)، والاستغلال المتحكم به (إثبات أن الثغرة حقيقية ضمن حدود متفق عليها)، وأخيرًا التقرير بتوصيات إصلاح واضحة. أما الفريق الأحمر فهو ممارسة ذات صلة وأكثر تقدمًا تحاكي حملة خصم كاملة على مدى أسابيع، وتختبر الكشف والاستجابة لا الثغرات المنفردة فقط."),
    l("A crucial distinction: a vulnerability assessment lists weaknesses and rates them, while a penetration test goes further and proves how a weakness can be chained into real business impact. Both are valuable, but they answer different questions. Another crucial rule: every test must be authorized in writing, within an agreed scope, at agreed times, with rules of engagement. Testing systems without written permission is illegal in most countries — regardless of intent. Much of a tester's week is actually spent writing the report, explaining findings to non-technical stakeholders and advising developers.", "تمييز جوهري: تقييم الثغرات يعدّد نقاط الضعف ويصنّفها، بينما يتجاوز اختبار الاختراق ذلك ليُثبت كيف يمكن ربط نقطة ضعف بسلسلة تؤدي إلى أثر حقيقي على الأعمال. كلاهما قيّم لكنهما يجيبان عن سؤالين مختلفين. وقاعدة جوهرية أخرى: كل اختبار يجب أن يكون مصرّحًا به كتابيًا، ضمن نطاق متفق عليه، وفي أوقات متفق عليها، وبقواعد ارتباط محددة. فاختبار الأنظمة دون إذن كتابي غير قانوني في معظم الدول مهما كانت النية. ويقضي المختبر جزءًا كبيرًا من أسبوعه في كتابة التقرير وشرح النتائج لغير المتخصصين ونصح المطورين."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("Junior Penetration Tester, Penetration Tester, Web Application Penetration Tester, Network Penetration Tester, Red Team Operator, Security Consultant.", "مختبر اختراق مبتدئ، مختبر اختراق، مختبر اختراق تطبيقات ويب، مختبر اختراق شبكات، مشغّل فريق أحمر، مستشار أمني.")],
      [l("Daily work", "العمل اليومي"), l("Preparing and confirming scope; reconnaissance and scanning; enumerating services; validating vulnerabilities; careful, controlled exploitation; capturing evidence; writing the report and presenting it.", "تحضير النطاق وتأكيده؛ الاستطلاع والمسح؛ استكشاف الخدمات؛ التحقق من الثغرات؛ استغلال متحكم به وحذر؛ توثيق الأدلة؛ كتابة التقرير وعرضه.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Solid networking, Linux comfort, web technologies (HTTP, browsers, APIs), databases basics, and — increasingly valuable — scripting to automate repetitive test steps.", "شبكات متينة، أريحية مع لينكس، تقنيات ويب (HTTP والمتصفحات وواجهات API)، أساسيات قواعد البيانات، ومعرفة متزايدة القيمة بالبرمجة النصية لأتمتة خطوات الاختبار المتكررة.")],
      [l("Common tools", "الأدوات الشائعة"), l("Kali Linux, Nmap, Burp Suite, Metasploit, Wireshark, OWASP ZAP.", "Kali Linux وNmap وBurp Suite وMetasploit وWireshark وOWASP ZAP.")],
      [l("Realistic example", "مثال واقعي"), l("During an authorized web application test, the tester discovers that a search parameter is reflected unsafely, confirms a stored injection with a harmless proof-of-concept, documents every request, immediately reports the critical finding to the client contact per the engagement rules, and explains in the report how to fix it (parameterized queries) and how to verify the fix.", "أثناء اختبار مصرّح به لتطبيق ويب يكتشف المختبر أن معامل بحث يُعاد إظهاره بشكل غير آمن، فيؤكد ثغرة حقن مخزّنة بمفهوم إثبات غير ضار، ويوثّق كل طلب، ويسرع بالإبلاغ عن النتيجة الحرجة لجهة اتصال العميل وفق قواعد العمل، ويشرح في التقرير طريقة الإصلاح (استعلامات معلَّمة) وكيفية التحقق منها.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("Junior Security Tester → Junior Penetration Tester → Penetration Tester → Senior Penetration Tester → Red Team Specialist / Security Consultant.", "مختبر أمني مبتدئ ← مختبر اختراق مبتدئ ← مختبر اختراق ← مختبر أول ← أخصائي فريق أحمر / مستشار أمني.")],
      [l("Connections", "الارتباطات"), l("Findings feed AppSec fixes; results are shared with the SOC to improve detection (purple teamwork); red team engagements exercise DFIR and incident response like a fire drill.", "تغذي النتائج إصلاحات أمن التطبيقات؛ وتُشارك مع مركز العمليات لتحسين الكشف (عمل الفريق البنفسجي)؛ وتمارين الفريق الأحمر تُخضع الاستجابة للحوادث والتحقيق الجنائي لاختبار يشبه تمرين الإخلاء.")],
      [l("Who enjoys it", "من يشتاق له"), l("Puzzle lovers with patience, deep curiosity about how systems really behave, strong ethics and self-restraint, and willingness to write precise reports.", "محبو الألغاز الصبورون ذوو فضول عميق لسلوك الأنظمة فعليًا، وأخلاق قوية وضبط للنفس، واستعداد لكتابة تقارير دقيقة.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: strengthen networking and Linux fundamentals first (Sessions 5–8 of this course).", "خارطة تعلم المبتدئ: قوِّ أساسيات الشبكات ولينكس أولًا (الجلسات 5–8 من هذه الدورة)."),
    l("Work through the free PortSwigger Web Security Academy modules on the OWASP Top 10 vulnerabilities.", "اعمل عبر وحدات PortSwigger Web Security Academy المجانية حول ثغرات OWASP Top 10."),
    l("Practise only on legal training ranges and lab platforms, or on machines you own — never on real third-party systems.", "تدرّب فقط على نطاقات تدريب قانونية ومنصات مختبرية أو أجهزة تملكها — ولا تستهدف أنظمة طرف ثالث حقيقية أبدًا."),
    l("Learn one scripting language for automation as you advance; start by automating a scan you would otherwise repeat manually.", "تعلّم لغة برمجة نصية واحدة للأتمتة مع تقدمك؛ وابدأ بأتمتة مسح كنت تكرره يدويًا."),
    l("Write a full practice report for every lab: scope, findings, evidence, impact and fix — employers value reports more than screenshots.", "اكتب تقرير تدريب كاملًا لكل مختبر: النطاق والنتائج والأدلة والأثر والإصلاح — فالجهات تقيّم التقارير أكثر من لقطات الشاشة."),
  ],
  callout: { kind: "warn", text: l("Never run any scanning or exploitation technique against systems you do not own or have explicit written permission to test. Enthusiasm is not authorization.", "لا تشغّل أي تقنية مسح أو استغلال على أنظمة لا تملكها أو ليس لديك إذن صريح كتابي باختبارها. الحماس ليس تصريحًا.") },
};

/* ------------------------- Section 9: Track 3 — AppSec ------------------------- */

const track3: Section = {
  h: l("9. Track 3 — Application Security (AppSec)", "9. المسار 3 — أمن التطبيقات (AppSec)"),
  p: [
    l("Application Security is about building and keeping software secure while it is being developed and throughout its life. Instead of testing a finished product at the end, AppSec professionals work alongside developers: they define security requirements, review code for weaknesses, run security tests, and guide the team to avoid common web application vulnerabilities such as injection, broken authentication, access-control flaws and unsafe input validation — the categories documented in the OWASP Top 10 (see Session 13 of this course).", "أمن التطبيقات هو بناء البرمجيات وإبقاؤها آمنة أثناء تطويرها وطوال عمرها. بدلًا من اختبار منتج مكتمل في النهاية، يعمل أخصائيو أمن التطبيقات جنبًا إلى جنب مع المطورين: يحددون المتطلبات الأمنية، ويراجعون الكود بحثًا عن نقاط الضعف، ويشغّلون الاختبارات الأمنية، ويرشدون الفريق لتجنب ثغرات تطبيقات الويب الشائعة كالحقن وكسر المصادقة وعيوب ضبط الوصول والتحقق غير الآمن من المدخلات — وهي الفئات الموثقة في OWASP Top 10 (انظر الجلسة 13 من هذه الدورة)."),
    l("A typical day mixes talking and technique: reviewing a colleague's pull request and suggesting a safer way to handle user input; triaging findings from SAST (static analysis of source code), DAST (dynamic testing of the running application) and SCA (Software Composition Analysis of third-party libraries); deciding what is a real risk versus noise; and coaching developers. AppSec professionals do not usually replace developers — they make the developers' work secure. Authentication and authorization design (how users log in, what they may reach) is a constant topic.", "يوم نموذجي يمزج الحوار بالتقنية: مراجعة طلب دمج لزميل واقتراح طريقة أكثر أمانًا للتعامل مع مدخلات المستخدم؛ وفرز نتائج أدوات SAST (تحليل ثابت للشيفرة المصدرية) وDAST (اختبار ديناميكي للتطبيق العامل) وSCA (تحليل مكونات المكتبات الخارجية)؛ وتقرير ما هو خطر حقيقي وما هو ضجيج؛ وتدريب المطورين. ولا يستبدل أخصائي أمن التطبيقات المطورين عادةً — بل يجعل عملهم آمنًا. ويبقى تصميم المصادقة والتصريح (كيف يدخل المستخدمون وما يُسمح لهم بالوصول إليه) موضوعًا دائمًا."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("Application Security Engineer, Product Security Engineer, Application Security Analyst, Secure Code Reviewer.", "مهندس أمن تطبيقات، مهندس أمن منتج، محلل أمن تطبيقات، مراجع شيفرة آمنة.")],
      [l("Daily work", "العمل اليومي"), l("Secure code review; triaging scanner findings; defining software security requirements; reviewing authentication and authorization logic; advising frontend and backend developers; verifying fixes.", "مراجعة الكود الآمن؛ فرز نتائج الفاحصات؛ تحديد متطلبات أمن البرمجيات؛ مراجعة منطق المصادقة والتصريح؛ إرشاد مطوري الواجهات والخدمات الخلفية؛ التحقق من الإصلاحات.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Real software development understanding (at least one programming language), web architecture, the OWASP Top 10, and secure coding practices such as input validation, output encoding and safe session handling.", "فهم حقيقي لتطوير البرمجيات (لغة برمجة واحدة على الأقل)، ومعمارية الويب، وOWASP Top 10، وممارسات البرمجة الآمنة كالتحقق من المدخلات وترميز المخرجات والتعامل الآمن مع الجلسات.")],
      [l("Common tools", "الأدوات الشائعة"), l("OWASP Top 10 (as a knowledge base), Burp Suite, OWASP ZAP, SAST tools, DAST tools, SCA tools, GitHub security features (dependabot, code scanning).", "OWASP Top 10 (كقاعدة معرفة)، وBurp Suite، وOWASP ZAP، وأدوات SAST وأدوات DAST وأدوات SCA، وميزات الأمن في GitHub (dependabot وفحص الشيفرة).")],
      [l("Realistic example", "مثال واقعي"), l("A backend developer builds an endpoint that takes a product ID straight from the user and concatenates it into a database query. The AppSec engineer demonstrates the risk in the review, recommends a parameterized query, and adds a SAST rule so the same mistake is caught automatically in future pull requests.", "يبني مطور خدمة خلفية نقطة نهاية تأخذ معرّف منتج مباشرة من المستخدم وتلصقه في استعلام قاعدة بيانات. يُظهر مهندس أمن التطبيقات الخطر في المراجعة، ويوصي باستعلام معلَّم، ويضيف قاعدة SAST لتُكتشف الخطأ نفسه تلقائيًا في طلبات الدمج القادمة.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("Programming fundamentals → web development fundamentals → web security fundamentals → Junior Application Security Analyst → Application Security Engineer → Senior Product Security Engineer.", "أساسيات البرمجة ← أساسيات تطوير الويب ← أساسيات أمن الويب ← محلل أمن تطبيقات مبتدئ ← مهندس أمن تطبيقات ← مهندس أمن منتج أول.")],
      [l("Connections", "الارتباطات"), l("Fixes are automated through DevSecOps pipelines; the SOC needs AppSec knowledge to understand application alerts; penetration testers validate AppSec work from an attacker's view.", "تُؤتمت الإصلاحات عبر خطوط DevSecOps؛ ويحتاج مركز العمليات معرفة أمن التطبيقات لفهم تنبيهاته؛ ويؤكد مختبرو الاختراق عمل أمن التطبيقات من منظور مهاجم.")],
      [l("Who enjoys it", "من يشتاق له"), l("People who like building software AND breaking it, enjoy collaboration with developers, and prefer preventing problems over cleaning them up later.", "من يحب بناء البرمجيات وكسرها معًا، ويستمتع بالتعاون مع المطورين، ويفضّل منع المشكلات على تنظيفها لاحقًا.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: learn programming fundamentals and build a small web application yourself first.", "خارطة تعلم المبتدئ: تعلّم أساسيات البرمجة وابنِ بنفسك تطبيق ويب صغيرًا أولًا."),
    l("Study the OWASP Top 10 and be able to demonstrate each category in a deliberately vulnerable practice application.", "ادرس OWASP Top 10 وكن قادرًا على إظهار كل فئة في تطبيق تدريب ضعيف عمدًا."),
    l("Complete the free PortSwigger Web Security Academy and OWASP ZAP tutorials.", "أكمل أكاديمية PortSwigger المجانية ودروس OWASP ZAP."),
    l("Read secure coding guidance for the language you know, and practise reviewing code for the classic weakness patterns.", "اقرأ إرشادات البرمجة الآمنة للغة التي تعرفها، وتدرب على مراجعة الكود بحثًا عن أنماط الضعف الكلاسيكية."),
    l("Learn how one SAST/SCA tool works end to end, and understand what findings it produces and why.", "تعلّم كيف تعمل أداة SAST أو SCA واحدة من البداية للنهاية، وافهم النتائج التي تنتجها ولماذا."),
  ],
  callout: { kind: "key", text: l("AppSec requires genuine software development knowledge — it is the track where programming skills matter most among the defensive tracks. If you enjoy writing code, this is a natural fit.", "يتطلب أمن التطبيقات معرفة حقيقية بتطوير البرمجيات — وهو المسار الذي تهم فيه مهارات البرمجة أكثر بين المسارات الدفاعية. إن كنت تستمتع بكتابة الكود فهذا المسار مناسب طبيعيًا لك.") },
};

/* ------------------------- Section 10: Track 4 — DevSecOps & Cloud ------------------------- */

const track4: Section = {
  h: l("10. Track 4 — DevSecOps & Cloud Security", "10. المسار 4 — DevSecOps وأمن السحابة"),
  p: [
    l("A. DevSecOps means integrating security into the software development lifecycle instead of checking it at the end. Practically, this means secure CI/CD pipelines: every code change is automatically scanned, built, tested and deployed with security checks embedded — dependency scanning for vulnerable libraries, container security scanning, Infrastructure as Code security review, automated security testing, secrets management so credentials never live in code, and security automation that blocks a release when a critical issue is found. The DevSecOps engineer builds and maintains these automated guardrails.", "أ. DevSecOps يعني دمج الأمن في دورة تطوير البرمجيات بدلًا من فحصه في النهاية. عمليًا، هذا يعني خطوط CI/CD آمنة: كل تغيير في الكود يُمسح ويُبنى ويُختبر ويُنشر تلقائيًا مع فحوص أمنية مدمجة — مسح التبعيات للبحث عن مكتبات مصابة، ومسح أمن الحاويات، ومراجعة أمن البنية التحتية كشيفرة (IaC)، واختبارات أمنية مؤتمتة، وإدارة الأسرار بحيث لا تعيش بيانات الدخول في الكود أبدًا، وأتمتة أمنية توقف الإصدار عند اكتشاف مشكلة حرجة. ومهندس DevSecOps هو من يبني هذه الحواجز المؤتمتة ويصونها."),
    l("B. Cloud Security focuses on the platforms where workloads run: securing cloud infrastructure, cloud identity and access management, cloud network security, cloud storage protection, cloud monitoring, cloud configuration management and cloud security posture management (CSPM) — continuously checking that the cloud environment is configured safely. The difference: DevSecOps secures the delivery pipeline of software; cloud security secures the platform running the software. They overlap heavily — both are automation-heavy, both use Infrastructure as Code, and in many teams one engineer covers both. Common platforms are AWS, Microsoft Azure and Google Cloud, with services such as Microsoft Defender for Cloud and the AWS security services family.", "ب. أمن السحابة يركز على المنصات التي تعمل عليها الأحمال: تأمين البنية التحتية السحابية، وإدارة الهوية والوصول السحابية، وأمن الشبكة السحابية، وحماية التخزين السحابي، والمراقبة السحابية، وإدارة الإعدادات السحابية، وإدارة الوضع الأمني السحابي (CSPM) — أي التحقق المستمر من أن البيئة السحابية مُعدّة بأمان. الفرق: DevSecOps يؤمّن خط إصدار البرمجيات؛ وأمن السحابة يؤمّن المنصة التي تشغّل البرمجيات. ويتداخلان كثيرًا — فكلاهما غزير الأتمتة، وكلاهما يستخدم البنية كشيفرة، وفي فرق كثيرة يغطي مهندس واحد كليهما. والمنصات الشائعة هي AWS وMicrosoft Azure وGoogle Cloud، مع خدمات مثل Microsoft Defender for Cloud وعائلة خدمات الأمن في AWS."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("DevSecOps Engineer, Security Automation Engineer, Cloud DevSecOps Engineer; on the cloud side: Cloud Security Engineer, Cloud Security Analyst, Cloud Security Architect.", "مهندس DevSecOps، مهندس أتمتة أمنية، مهندس DevSecOps سحابي؛ وعلى جانب السحابة: مهندس أمن سحابي، محلل أمن سحابي، معماري أمن سحابي.")],
      [l("Daily work", "العمل اليومي"), l("DevSecOps: building pipeline checks, scanning images and dependencies, managing secrets and policy-as-code, automating compliance tests. Cloud security: reviewing cloud identities and permissions, securing network and storage settings, monitoring the cloud estate, remediating misconfigurations.", "DevSecOps: بناء فحوص خط الإصدار، ومسح الصور والتبعيات، وإدارة الأسرار والسياسات كشيفرة، وأتمتة اختبارات الامتثال. أمن السحابة: مراجعة الهويات والصلاحيات السحابية، وتأمين إعدادات الشبكة والتخزين، ومراقبة المشهد السحابي، ومعالجة الإعدادات الخاطئة.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Strong development and automation knowledge, Linux, CI/CD concepts, containers (Docker, Kubernetes), one cloud platform in depth, and Infrastructure as Code with Terraform or similar.", "معرفة قوية بالتطوير والأتمتة، ولينكس، ومفاهيم CI/CD، والحاويات (Docker وKubernetes)، ومنصة سحابية واحدة بعمق، والبنية كشيفرة عبر Terraform أو ما يماثلها.")],
      [l("Common tools", "الأدوات الشائعة"), l("GitHub Actions, GitLab CI/CD, Docker, Kubernetes, Terraform, Trivy, Snyk, SonarQube; cloud: AWS, Azure, Google Cloud, Microsoft Defender for Cloud, AWS security services.", "GitHub Actions وGitLab CI/CD وDocker وKubernetes وTerraform وTrivy وSnyk وSonarQube؛ وفي السحابة: AWS وAzure وGoogle Cloud وMicrosoft Defender for Cloud وخدمات الأمن في AWS.")],
      [l("Realistic example", "مثال واقعي"), l("A pipeline builds an application container; the Trivy scan finds a library with a known critical vulnerability and blocks the release until it is upgraded. On the cloud side, a posture check detects a storage bucket accidentally exposed to the public internet and alerts the cloud security engineer, who closes it and adds a preventive policy so it cannot happen again.", "يبني خط الإصدار حاوية تطبيق؛ فيجد مسح Trivy مكتبة بثغرة حرجة معروفة فيوقف الإصدار حتى تُحدَّث. وعلى جانب السحابة، يكتشف فحص الوضع الأمني حاوية تخزين مكشوفة بالخطأ للإنترنت العام وينبه مهندس أمن السحابة، فيغلقها ويضيف سياسة وقائية تمنع تكرار ذلك.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("Linux and networking fundamentals → programming and scripting → cloud fundamentals → CI/CD and infrastructure fundamentals → junior cloud security or DevSecOps role → Senior Security Engineer / Cloud Security Architect.", "أساسيات لينكس والشبكات ← البرمجة والبرمجة النصية ← أساسيات السحابة ← أساسيات CI/CD والبنية التحتية ← دور مبتدئ في أمن السحابة أو DevSecOps ← مهندس أمن أول / معماري أمن سحابي.")],
      [l("Connections", "الارتباطات"), l("Implements AppSec fixes automatically; publishes logs that the SOC monitors; inherits identity concepts from IAM; misconfigurations they catch often come from findings by GRC audits and penetration tests.", "ينفذون إصلاحات أمن التطبيقات تلقائيًا؛ وينشرون سجلات يراقبها مركز العمليات؛ ويرثون مفاهيم الهوية من IAM؛ وكثير من الإعدادات الخاطئة التي يكشفونها تأتي من نتائج تدقيقات GRC واختبارات الاختراق.")],
      [l("Who enjoys it", "من يشتاق له"), l("Builders and automators who like scripting, infrastructure and systems thinking, and prefer engineering guardrails over chasing individual incidents.", "البنّاءون والمؤتمتون الذين يحبون البرمجة النصية والبنية التحتية والتفكير في الأنظمة، ويفضّلون هندسة حواجز وقائية على مطاردة الحوادث فرادى.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: master Linux and networking fundamentals, then learn one scripting language for automation.", "خارطة تعلم المبتدئ: أتقن أساسيات لينكس والشبكات، ثم تعلّم لغة برمجة نصية واحدة للأتمتة."),
    l("Take the free fundamentals material of one cloud (AWS, Azure or Google Cloud) and use its free tier for practice.", "خذ مواد الأساسيات المجانية لإحدى السحابات (AWS أو Azure أو Google Cloud) واستخدم طبقتها المجانية للتدريب."),
    l("Build a tiny CI/CD pipeline that builds an app, scans it with Trivy and blocks on critical findings.", "ابنِ خط CI/CD صغيرًا يبني تطبيقًا ويمسحه بـ Trivy ويتوقف عند نتائج حرجة."),
    l("Learn Docker basics, then read the container security checklist: image sources, secrets, capabilities and permissions.", "تعلّم أساسيات Docker ثم اقرأ قائمة أمن الحاويات: مصادر الصور والأسرار والقدرات والصلاحيات."),
    l("Write your first Terraform template for a small, clearly secured environment — then review it as an attacker would.", "اكتب أول قالب Terraform لبيئة صغيرة مؤمّنة بوضوح — ثم راجعها كما يفعل مهاجم."),
  ],
  callout: { kind: "tip", text: l("Do not confuse the two: DevSecOps is about HOW software is built and shipped; cloud security is about WHERE it runs. Employers may combine them in one role, but they are distinct specializations with distinct knowledge.", "لا تخلط بينهما: DevSecOps يتعلق بكيفية بناء البرمجيات وشحنها؛ وأمن السحابة يتعلق بمكان تشغيلها. وقد يدمجهما صاحب العمل في دور واحد، لكنهما تخصصان مختلفان بمعارف مختلفة.") },
};

/* ------------------------- Section 11: Track 5 — DFIR ------------------------- */

const track5: Section = {
  h: l("11. Track 5 — Digital Forensics & Incident Response (DFIR)", "11. المسار 5 — التحقيق الجنائي الرقمي والاستجابة للحوادث (DFIR)"),
  p: [
    l("Digital Forensics is the science of collecting, preserving and analysing digital evidence so that findings stand up to scrutiny. Incident Response (IR) is the structured process of handling a live security incident: prepare, detect, contain, eradicate, recover, and learn. The two are usually one team (DFIR). Key concepts include evidence preservation (working on copies, never originals), the Chain of Custody (a documented record of who handled the evidence, when and why), timeline analysis (reconstructing what happened and in what order), and investigation of compromised systems — whether the case is malware, a hacked account or insider misuse.", "التحقيق الجنائي الرقمي هو علم جمع الأدلة الرقمية وحفظها وتحليلها بحيث تصمد نتائجه أمام التدقيق. أما الاستجابة للحوادث فهي عملية منظمة للتعامل مع حادثة أمنية جارية: الاستعداد، والكشف، والاحتواء، والاستئصال، والتعافي، والتعلّم. وغالبًا ما يكون الاثنان فريقًا واحدًا (DFIR). ومن مفاهيمه الأساسية: حفظ الأدلة (العمل على نسخ لا على الأصول)، وسلسلة العهدة (سجل موثق لمن تناول الدليل ومتى ولماذا)، وتحليل الخط الزمني (إعادة بناء ما حدث وترتيبه)، والتحقيق في الأنظمة المخترقة — سواء كانت الحالة برمجية خبيثة أو حسابًا مخترقًا أو إساءة استخدام داخلية."),
    l("Realistic example: a company discovers that an employee's computer may have been compromised. The DFIR specialist first documents the scene, acquires forensic images of the disk and memory with tools like FTK Imager, and logs the Chain of Custody for every item. Analysis with Autopsy (disk) and Volatility (memory) reveals a malicious document opened days earlier, a backdoor scheduled task and outbound connections to an attacker server. The responder coordinates containment — isolating the machine, resetting affected credentials, blocking the attacker addresses — then drives recovery, produces a timeline and a management-ready report, and recommends controls so the same entry path fails next time.", "مثال واقعي: تكتشف شركة أن حاسوب أحد الموظفين ربما تعرّض لاختراق. يبدأ أخصائي DFIR بتوثيق الموقع، ثم يأخذ نسخًا جنائية للقرص والذاكرة بأدوات مثل FTK Imager، ويسجل سلسلة العهدة لكل عنصر. ويكشف التحليل بـ Autopsy (القرص) وVolatility (الذاكرة) مستندًا خبيثًا فُتح قبل أيام، ومهمة مجدولة باب خلفي، واتصالات خارجية إلى خادم المهاجم. ثم ينسّق المستجيب الاحتواء — عزل الجهاز، وإعادة تعيين بيانات الدخول المتأثرة، وحجب عناوين المهاجم — ثم يقود التعافي، ويُنتج خطًا زمنيًا وتقريرًا جاهزًا للإدارة، ويوصي بضوابط تفشل بها مدخل الهجوم نفسه في المرة القادمة."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("Digital Forensics Analyst, Incident Responder, DFIR Analyst, Digital Forensics Investigator, Incident Response Consultant.", "محلل تحقيق جنائي رقمي، مستجيب للحوادث، محلل DFIR، محقق جنائي رقمي، مستشار استجابة للحوادث.")],
      [l("Daily work", "العمل اليومي"), l("Collecting and preserving digital evidence; acquiring disk and memory images; malware incident investigation; compromised-system analysis; timeline reconstruction; containment and recovery coordination; writing defensible reports.", "جمع الأدلة الرقمية وحفظها؛ أخذ نسخ من الأقراص والذاكرة؛ التحقيق في حوادث البرمجيات الخبيثة؛ تحليل الأنظمة المخترقة؛ إعادة بناء الخط الزمني؛ تنسيق الاحتواء والتعافي؛ كتابة تقارير قابلة للدفاع عنها.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Deep operating system internals (file systems, registry, processes), logging, networking, and forensic method discipline: evidence, documentation and repeatability. Programming is helpful but not the core skill.", "معرفة عميقة بأدق تفاصيل أنظمة التشغيل (أنظمة الملفات والسجل والعمليات)، والسجلات، والشبكات، ومنهجية جنائية منضبطة: الأدلة والتوثيق وقابلية التكرار. والبرمجة مفيدة لكنها ليست المهارة الجوهرية.")],
      [l("Common tools", "الأدوات الشائعة"), l("Autopsy, Volatility, FTK Imager, KAPE, Velociraptor.", "Autopsy وVolatility وFTK Imager وKAPE وVelociraptor.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("SOC Analyst → Incident Responder → DFIR Analyst → Senior Incident Response Consultant.", "محلل مركز عمليات ← مستجيب للحوادث ← محلل DFIR ← مستشار استجابة للحوادث أول.")],
      [l("Connections", "الارتباطات"), l("Escalation partner of the SOC; feeds indicators to threat intelligence; evidence supports GRC reporting and legal processes; findings drive AppSec and DevSecOps improvements.", "شريك التصعيد لمركز العمليات؛ ويغذي استخبارات التهديدات بالمؤشرات؛ وتدعم الأدلة تقارير GRC والإجراءات القانونية؛ وتقود النتائج تحسينات أمن التطبيقات وDevSecOps.")],
      [l("Who enjoys it", "من يشتاق له"), l("Meticulous puzzle-solvers who like methodical work, careful documentation, and staying calm while everything around them is urgent.", "حلّالو ألغاز دقيقون يحبون العمل المنهجي والتوثيق المتعمد ويحافظون على هدوئهم بينما كل شيء حولهم عاجل.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: master operating system fundamentals (Sessions 5–6) and understand where systems record their history.", "خارطة تعلم المبتدئ: أتقن أساسيات أنظمة التشغيل (الجلسات 5–6) وافهم أين يسجل النظام تاريخه."),
    l("Install Autopsy and analyse a practice disk image; build a timeline of user activity.", "ثبّت Autopsy وحلّل صورة قرص تدريبية؛ وابنِ خطًا زمنيًا لنشاط المستخدم."),
    l("Learn memory analysis basics with Volatility on a public practice memory dump.", "تعلّم أساسيات تحليل الذاكرة بـ Volatility على نسخة ذاكرة تدريبية عامة."),
    l("Study an incident response framework such as the NIST incident handling guide and memorise the phase order.", "ادرس إطار استجابة للحوادث مثل دليل التعامل مع الحوادث من NIST واحفظ ترتيب مراحله."),
    l("Practise writing an investigation report: what happened, when, how, impact, and what was done — clear enough for a manager.", "تدرّب على كتابة تقرير تحقيق: ما حدث، ومتى، وكيف، وما الأثر، وما فُعل — بوضوح يكفي لمدير."),
  ],
  callout: { kind: "warn", text: l("Real investigations may have legal consequences. Evidence must be handled exactly right: copy, hash, log, and never alter the original.", "قد يكون للتحقيقات الحقيقية عواقب قانونية. يجب التعامل مع الأدلة بشكل صحيح تمامًا: انسخ واحسب البصمة وسجّل، ولا تغيّر الأصل أبدًا.") },
};

/* ------------------------- Section 12: Track 6 — Threat Intelligence ------------------------- */

const track6: Section = {
  h: l("12. Track 6 — Threat Intelligence", "12. المسار 6 — استخبارات التهديدات"),
  p: [
    l("Cyber Threat Intelligence (CTI) is the discipline of collecting and analysing information about attackers — who they are, how they work, and what to watch for — and turning it into knowledge that defenders can act on. Core concepts: threat actors (criminal groups, state-linked campaigns, hacktivists), Indicators of Compromise (IOCs — concrete signals such as malicious file hashes, domains and IP addresses), Indicators of Attack (IOAs — behavioural signals that suggest an attack is underway), Tactics, Techniques and Procedures (TTPs — the reusable patterns of how an actor operates), threat intelligence feeds, and threat research published in reports. The MITRE ATT&CK knowledge base is the common language for describing TTPs, and intelligence reporting turns raw data into briefings for different audiences.", "استخبارات التهديدات السيبرانية (CTI) هي تخصص جمع المعلومات عن المهاجمين وتحليلها — من هم، وكيف يعملون، وما يجب مراقبته — وتحويلها إلى معرفة يمكن للمدافعين التصرف بناءً عليها. ومن مفاهيمها الأساسية: الفاعلون المهدِّدون (مجموعات إجرامية، حملات مرتبطة بدول، نشطاء مخترقون)، ومؤشرات الاختراق (IOCs — إشارات ملموسة كبصمات الملفات الخبيثة والنطاقات وعناوين IP)، ومؤشرات الهجوم (IOAs — إشارات سلوكية توحي بأن هجومًا جارٍ)، والتكتيكات والتقنيات والإجراءات (TTPs — الأنماط القابلة لإعادة الاستخدام لطريقة عمل الفاعل)، وتدفقات استخبارات التهديدات، وأبحاث التهديدات المنشورة في التقارير. وقاعدة معرفة MITRE ATT&CK هي اللغة المشتركة لوصف TTPs، ويحوّل إعداد التقارير الاستخبارية البيانات الخام إلى إحاطات لجماهير مختلفة."),
    l("Threat intelligence supports the whole defense: it gives the SOC context for alerts (is this IP known-bad?), provides IOCs that become detection rules, gives incident responders attribution context and next-step predictions, and feeds threat hunting with hypotheses to search for in the environment. A typical day: reading new research reports, extracting and validating indicators, tracking an active campaign, maintaining the intelligence platform, and writing a short briefing.", "تدعم استخبارات التهديدات الدفاع كله: تمنح مركز العمليات سياقًا للتنبيهات (هل هذا العنوان معروف بأنه خبيث؟)، وتوفر مؤشرات IOC تتحول إلى قواعد كشف، وتمنح مستجبي الحوادث سياقًا للنسب وتوقعات للخطوة التالية، وتغذي صيادو التهديدات بفرضيات يبحثون عنها في البيئة. ويوم نموذجي: قراءة تقارير بحثية جديدة، واستخراج المؤشرات والتحقق منها، وتتبع حملة نشطة، وصيانة منصة الاستخبارات، وكتابة إحاطة قصيرة."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("Cyber Threat Intelligence Analyst, Threat Intelligence Researcher, Threat Research Analyst, Threat Intelligence Engineer.", "محلل استخبارات تهديدات سيبرانية، باحث استخبارات تهديدات، محلل أبحاث تهديدات، مهندس استخبارات تهديدات.")],
      [l("Daily work", "العمل اليومي"), l("Monitoring sources and feeds; analysing threat reports; extracting and validating IOCs; mapping actor behaviour to MITRE ATT&CK; publishing intelligence reports; briefing SOC and IR teams.", "مراقبة المصادر والتدفقات؛ تحليل تقارير التهديدات؛ استخراج مؤشرات IOC والتحقق منها؛ ربط سلوك الفاعل بـ MITRE ATT&CK؛ نشر تقارير استخبارية؛ إحاطة فرق مركز العمليات والاستجابة.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Broad security fundamentals, attacker TTPs, report reading and writing skills, and enough scripting to automate indicator processing. Analysis and clear writing matter more than deep programming.", "أساسيات أمنية واسعة، وTTPs المهاجمين، ومهارات قراءة وكتابة التقارير، وما يكفي من البرمجة النصية لأتمتة معالجة المؤشرات. والتحليل والكتابة الواضحة أهم من البرمجة العميقة.")],
      [l("Common tools", "الأدوات الشائعة"), l("MITRE ATT&CK, VirusTotal, MISP, OpenCTI, AbuseIPDB.", "MITRE ATT&CK وVirusTotal وMISP وOpenCTI وAbuseIPDB.")],
      [l("Realistic example", "مثال واقعي"), l("A new ransomware family is published in a research report. The analyst extracts the file hashes, the command-and-control domains and the initial-access technique, validates them in VirusTotal, loads them into MISP, and publishes a detection package the SOC imports into the SIEM — before the campaign reaches the organization.", "تُنشر عائلة فدية جديدة في تقرير بحثي. يستخرج المحلل بصمات الملفات ونطاقات التحكم والسيطرة وتقنية الدخول الأولي، ويتحقق منها في VirusTotal، ويحمّلها في MISP، وينشر حزمة كشف يستوردها مركز العمليات في SIEM — قبل أن تصل الحملة إلى المؤسسة.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("SOC Analyst → Threat Intelligence Analyst → Senior TI Analyst → Threat Researcher / TI Lead.", "محلل مركز عمليات ← محلل استخبارات تهديدات ← محلل استخبارات أول ← باحث تهديدات / قائد استخبارات.")],
      [l("Connections", "الارتباطات"), l("Enriches SOC alerting and threat hunting; briefs incident responders; malware analysts supply the deepest technical indicators; GRC uses strategic intelligence for risk planning.", "يُثري تنبيهات مركز العمليات وصيد التهديدات؛ ويُحاط مستجبي الحوادث به؛ ويزوّد محللو البرمجيات الخبيثة بأعمق المؤشرات التقنية؛ وتستخدم GRC الاستخبارات الاستراتيجية في تخطيط المخاطر.")],
      [l("Who enjoys it", "من يشتاق له"), l("Readers and writers who enjoy research, languages, connecting dots across sources, and turning complexity into a clear one-page brief.", "القرّاء والكتّاب الذين يستمتعون بالبحث واللغات ووصل النقاط عبر المصادر وتحويل التعقيد إلى إحاطة واضحة في صفحة واحدة.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: learn the fundamentals first (this course), especially threat actors and the kill chain (Session 2).", "خارطة تعلم المبتدئ: تعلّم الأساسيات أولًا (هذه الدورة)، لا سيما الفاعلين المهددين وسلسلة القتل (الجلسة 2)."),
    l("Read MITRE ATT&CK's overview and be able to explain what a tactic versus a technique is.", "اقرأ نظرة عامة على MITRE ATT&CK وكن قادرًا على شرح الفرق بين التكتيك والتقنية."),
    l("Explore VirusTotal and AbuseIPDB with harmless sample data (hashes and IPs from a public report).", "استكشف VirusTotal وAbuseIPDB ببيانات تجريبية غير ضارة (بصمات وعناوين من تقرير عام)."),
    l("Set up a personal MISP or OpenCTI instance and load indicators from a public feed to practise enrichment.", "أنشئ نسخة MISP أو OpenCTI شخصية وحمّل مؤشرات من تدفق عام للتدرب على الإثراء."),
    l("Write a two-page intelligence summary of one public threat report: who, what, indicators, and what defenders should do.", "اكتب ملخصًا استخباريًا من صفحتين لتقرير تهديدات عام واحد: من، وماذا، والمؤشرات، وما يجب على المدافعين فعله."),
  ],
  callout: { kind: "tip", text: l("Intelligence is only useful when it is actionable: an IOC nobody loads into a detector is trivia, not intelligence.", "الاستخبارات لا تنفع إلا إذا كانت قابلة للتنفيذ: المؤشر الذي لا يحمله أحد إلى نظام كشف هو معلومة اعتيادية لا استخبارات.") },
};

/* ------------------------- Section 13: Track 7 — Network Security ------------------------- */

const track7: Section = {
  h: l("13. Track 7 — Network Security", "13. المسار 7 — أمن الشبكات"),
  p: [
    l("Network Security professionals protect the network layer itself: secure network architecture design, firewall management, IDS and IPS (intrusion detection and prevention systems), VPN security, network segmentation (splitting the network so a breach in one zone cannot freely reach another), network monitoring, secure network configuration, and network access control (deciding which devices may join the network at all). A traditional Network Engineer keeps traffic flowing; a Network Security Engineer keeps traffic flowing SAFELY — deciding what may pass, watching for malicious patterns, and hardening every device. The two roles cooperate constantly but have different priorities.", "يحمي أخصائيو أمن الشبكات طبقة الشبكة نفسها: تصميم معمارية شبكة آمنة، وإدارة الجدران النارية، وأنظمة كشف ومنع التسلل (IDS/IPS)، وأمن الشبكات الافتراضية الخاصة (VPN)، وتقسيم الشبكة (فصلها بحيث لا يستطيع اختراق منطقة واحدة الوصول بحرية إلى أخرى)، ومراقبة الشبكة، والتكوين الآمن للشبكة، وضبط الوصول إلى الشبكة (تحديد الأجهزة التي يُسمح لها بالانضمام أصلًا). مهندس الشبكات التقليدي يُبقي الحركة جارية؛ ومهندس أمن الشبكات يُبقيها جارية بأمان — فيقرر ما يجوز أن يمر، ويراقب الأنماط الخبيثة، ويحصّن كل جهاز. ويتعاون الدوران باستمرار لكن أولوياتهما مختلفة."),
    l("Realistic example: the SOC flags an unusual pattern — an internal server sending small periodic connections to an unknown external address. The network security engineer pulls the full traffic from Zeek and Suricata logs, identifies beaconing behaviour, verifies the server should never contact that address, blocks it at the firewall, segments the affected server away from critical zones, and works with incident response while reviewing firewall history to find when the behaviour started.", "مثال واقعي: يشير مركز العمليات إلى نمط غير معتاد — خادم داخلي يرسل اتصالات دورية صغيرة إلى عنوان خارجي مجهول. يسحب مهندس أمن الشبكات الحركة كاملة من سجلات Zeek وSuricata، ويحدد سلوك نبض دوري، ويتأكد أن الخادم لا ينبغي أن يتصل بهذا العنوان، ويحجبه عند الجدار الناري، ويعزل الخادم المتأثر عن المناطق الحرجة عبر التقسيم، ويعمل مع الاستجابة للحوادث أثناء مراجعة سجل الجدار الناري لمعرفة متى بدأ السلوك."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("Network Security Engineer, Network Security Analyst, Firewall Engineer, Security Infrastructure Engineer.", "مهندس أمن شبكات، محلل أمن شبكات، مهندس جدران نارية، مهندس بنية أمنية.")],
      [l("Daily work", "العمل اليومي"), l("Managing firewall and IDS/IPS rules; analysing traffic captures; designing and verifying segmentation; hardening routers and switches; maintaining VPN security; reviewing network device configurations.", "إدارة قواعد الجدران النارية وIDS/IPS؛ تحليل التقاطات الحركة؛ تصميم التقسيم والتحقق منه؛ تحصين الموجّهات والمبدّلات؛ صيانة أمن VPN؛ مراجعة إعدادات أجهزة الشبكة.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Deep networking: routing, switching, protocols and ports (Sessions 6–8 of this course), plus IDS/IPS logic, VPN technologies and firewall rule design. Programming needs are modest; scripting helps for automation.", "شبكات عميقة: التوجيه والتبديل والبروتوكولات والمنافذ (الجلسات 6–8 من هذه الدورة)، إضافة إلى منطق IDS/IPS وتقنيات VPN وتصميم قواعد الجدار الناري. احتياجات البرمجة متواضعة؛ والبرمجة النصية تساعد في الأتمتة.")],
      [l("Common tools", "الأدوات الشائعة"), l("Wireshark, Suricata, Zeek, pfSense, Fortinet, Cisco security technologies.", "Wireshark وSuricata وZeek وpfSense وFortinet وتقنيات أمن Cisco.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("Network Administrator → Network Security Analyst → Network Security Engineer → Security Infrastructure Architect.", "مسؤول شبكات ← محلل أمن شبكات ← مهندس أمن شبكات ← معماري بنية أمنية.")],
      [l("Connections", "الارتباطات"), l("Provides the visibility SOC detection runs on; executes containment for incident response; implements the segmentation that limits malware analysis cases; enforces IAM-driven access policies.", "يوفر الرؤية التي يعمل عليها كشف مركز العمليات؛ وينفذ الاحتواء للاستجابة للحوادث؛ وينفذ التقسيم الذي يحدّ من حالات البرمجيات الخبيثة؛ وينفذ سياسات الوصول الموجهة من IAM.")],
      [l("Who enjoys it", "من يشتاق له"), l("Hands-on infrastructure people who like protocols, devices, packet-level detail and the satisfaction of a cleanly segmented network.", "أصحاب البنية التحتية العمليون الذين يحبون البروتوكولات والأجهزة وتفاصيل الحِزم ورضا شبكة مقسمة بإتقان.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: complete the networking sessions of this course until subnetting and ports feel natural.", "خارطة تعلم المبتدئ: أكمل جلسات الشبكات في هذه الدورة حتى يصبح تقسيم العناوين والمنافذ طبيعية لديك."),
    l("Install Wireshark and read a real capture: TCP handshake, DNS lookups, TLS sessions.", "ثبّت Wireshark واقرأ التقاطًا حقيقيًا: المصافحة الثلاثية لـ TCP، واستعلامات DNS، وجلسات TLS."),
    l("Build a home lab with pfSense: firewall rules, NAT, a DMZ zone, and VPN access.", "ابنِ مختبرًا منزليًا بـ pfSense: قواعد جدار ناري، وNAT، ومنطقة DMZ، ووصول VPN."),
    l("Run Suricata against a sample capture and understand the alerts it raises.", "شغّل Suricata على التقاط نموذجي وافهم التنبيهات التي يرفعها."),
    l("Sketch a segmentation design for a small company (users, servers, guests, management) and justify each rule.", "ارسم تصميم تقسيم لشركة صغيرة (المستخدمون والخوادم والزوار والإدارة) وبرر كل قاعدة."),
  ],
  callout: { kind: "key", text: l("Networking knowledge is the foundation underneath almost every other security track — even if you do not specialize in it, strong networking makes every other domain easier.", "معرفة الشبكات هي الأساس الذي يقوم عليه كل مسار أمني آخر تقريبًا — حتى إن لم تتخصص فيها، فالشبكات المتينة تجعل كل مجال آخر أسهل.") },
};

/* ------------------------- Section 14: Track 8 — IAM ------------------------- */

const track8: Section = {
  h: l("14. Track 8 — Identity & Access Management (IAM)", "14. المسار 8 — إدارة الهوية والوصول (IAM)"),
  p: [
    l("Identity is often called the new perimeter: instead of defending a network border, organizations control WHO can reach WHAT. IAM covers identity management (accounts and their lifecycle), authentication (proving who you are), authorization (deciding what you may do), Multi-Factor Authentication (MFA), Single Sign-On (SSO), Privileged Access Management (PAM) for powerful accounts, the principle of Least Privilege (grant only what is needed), the identity lifecycle (joiner, mover, leaver processes), periodic access reviews, and the wider identity security programme. Identity is central because most breaches involve stolen, abused or over-privileged credentials (see Sessions 11–12 of this course).", "تُسمّى الهوية غالبًا «المحيط الجديد»: بدلًا من الدفاع عن حدود الشبكة، تتحكم المؤسسات في من يمكنه الوصول إلى ماذا. ويغطي IAM إدارة الهوية (الحسابات ودورة حياتها)، والمصادقة (إثبات هويتك)، والتصريح (تحديد ما يُسمح لك به)، والمصادقة متعددة العوامل (MFA)، وتسجيل الدخول الموحد (SSO)، وإدارة الوصول المميز (PAM) للحسابات القوية، ومبدأ الحد الأدنى من الصلاحيات (امنح ما يلزم فقط)، ودورة حياة الهوية (عمليات الانضمام والانتقال والمغادرة)، ومراجعات الوصول الدورية، وبرنامج أمن الهوية الأوسع. والهوية مركزية لأن معظم الاختراقات تنطوي على بيانات دخول مسروقة أو مسيء استخدامها أو مفرطة الصلاحيات (انظر الجلسات 11–12 من هذه الدورة)."),
    l("A typical day mixes systems and structure: provisioning and deprovisioning accounts, configuring SSO and federation protocols such as SAML, OAuth 2.0 and OpenID Connect, auditing privileged accounts, implementing MFA rollout, and running access reviews with department owners. Realistic example: an access review discovers that a contractor who left three months ago still has VPN access — the IAM analyst removes it, traces why the leaver process failed, and adds an automated check so future leavers are closed within hours.", "يوم نموذجي يمزج الأنظمة بالهيكل: توفير الحسابات وإلغاؤها، وإعداد تسجيل الدخول الموحد وبروتوكولات الاتحاد مثل SAML وOAuth 2.0 وOpenID Connect، وتدقيق الحسابات المميزة، وتنفيذ طرح MFA، وإجراء مراجعات الوصول مع مالكي الأقسام. ومثال واقعي: تكتشف مراجعة وصول أن مقاولًا غادر قبل ثلاثة أشهر لا يزال لديه وصول VPN — فيزيله محلل IAM، ويتتبع سبب فشل عملية المغادرة، ويضيف فحصًا مؤتمتًا حتى تُغلق حسابات المغادرين القادمين خلال ساعات."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("IAM Engineer, Identity Security Analyst, PAM Specialist, Identity and Access Management Consultant.", "مهندس IAM، محلل أمن هوية، أخصائي PAM، مستشار إدارة الهوية والوصول.")],
      [l("Daily work", "العمل اليومي"), l("Managing directory services and accounts; configuring SSO and federation; implementing and auditing MFA and PAM; running access reviews; automating joiner/mover/leaver processes.", "إدارة خدمات الدليل والحسابات؛ إعداد تسجيل الدخول الموحد والاتحاد؛ تنفيذ وتدقيق MFA وPAM؛ إجراء مراجعات الوصول؛ أتمتة عمليات الانضمام والانتقال والمغادرة.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Directory technologies, authentication and authorization protocols, scripting for automation, and strong process/documentation skills. Technical depth is needed in directories rather than in programming.", "تقنيات الدليل، وبروتوكولات المصادقة والتصريح، والبرمجة النصية للأتمتة، ومهارات قوية في العمليات والتوثيق. والعمق التقني المطلوب في أدلة الأنظمة أكثر من البرمجة.")],
      [l("Common technologies", "التقنيات الشائعة"), l("Microsoft Active Directory, Microsoft Entra ID, Okta, LDAP, SAML, OAuth 2.0, OpenID Connect.", "Microsoft Active Directory وMicrosoft Entra ID وOkta وLDAP وSAML وOAuth 2.0 وOpenID Connect.")],
      [l("Realistic example", "مثال واقعي"), l("A finance application is moved behind SSO with MFA enforced; the IAM engineer maps every access role to a job function, removes eleven dormant accounts discovered during the mapping, and documents a monthly access review for privileged roles.", "يُنقل تطبيق مالي وراء تسجيل دخول موحد مع إلزام MFA؛ يربط مهندس IAM كل دور وصول بـوظيفة عمل، ويزيل أحد عشر حسابًا خاملًا اكتُشف أثناء الربط، ويوثق مراجعة وصول شهرية للأدوار المميزة.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("IT Support → Identity Security Analyst → IAM Engineer → PAM Specialist / IAM Architect.", "دعم تقني ← محلل أمن هوية ← مهندس IAM ← أخصائي PAM / معماري هوية.")],
      [l("Connections", "الارتباطات"), l("Every track depends on identity: SOC investigates account abuse, cloud security secures cloud identities, GRC audits access, DevSecOps pipelines authenticate with managed secrets.", "كل مسار يعتمد على الهوية: مركز العمليات يحقق في إساءة استخدام الحسابات، وأمن السحابة يؤمّن الهويات السحابية، وGRC يراجع الوصول، وخطوط DevSecOps تصادق بأسرار مُدارة.")],
      [l("Who enjoys it", "من يشتاق له"), l("Structured, systematic thinkers who like directories, protocols, clear processes and the quiet satisfaction of removing an unnecessary privilege.", "مفكرون منظمون منهجيون يحبون الأدلة والبروتوكولات والعمليات الواضحة والرضا الهادئ بإزالة صلاحية غير ضرورية.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: study the authentication and access control sessions of this course (11–12) until you can explain MFA, SSO and least privilege to a friend.", "خارطة تعلم المبتدئ: ادرس جلسات المصادقة وضبط الوصول في هذه الدورة (11–12) حتى تستطيع شرح MFA وSSO ومبدأ الحد الأدنى من الصلاحيات لصديق."),
    l("Set up a free Entra ID (or similar) tenant and experiment with users, groups, roles and conditional access.", "أنشئ مستأجر Entra ID مجانيًا (أو ما يماثله) وجرب المستخدمين والمجموعات والأدوار والوصول الشرطي."),
    l("Learn the difference between authentication (SAML, OIDC) and authorization (OAuth 2.0 scopes) by implementing a simple SSO demo.", "تعلّم الفرق بين المصادقة (SAML وOIDC) والتصريح (نطاقات OAuth 2.0) بتنفيذ عرض تسجيل دخول موحد بسيط."),
    l("Practise an access review: list accounts and permissions for a small fake organization and remove what violates least privilege.", "درب على مراجعة وصول: اسرد حسابات وصلاحيات مؤسسة افتراضية صغيرة وأزل ما يخالف مبدأ الحد الأدنى."),
    l("Read about PAM and design how privileged admin sessions should be recorded and approved.", "اقرأ عن PAM وصمّم كيف يجب تسجيل جلسات المديرين المميزين والموافقة عليها."),
  ],
  callout: { kind: "key", text: l("Why identity security matters: attackers rarely break in — they log in. Controlling identities and their privileges is one of the highest-impact defenses in modern organizations.", "لماذا يهم أمن الهوية: المهاجمون نادرًا ما يكسرون الحاجز — بل يسجلون الدخول. والتحكم في الهويات وصلاحياتها من أقوى الدفاعات في المؤسسات الحديثة.") },
};

/* ------------------------- Section 15: Track 9 — GRC ------------------------- */

const track9: Section = {
  h: l("15. Track 9 — Governance, Risk & Compliance (GRC)", "15. المسار 9 — الحوكمة والمخاطر والامتثال (GRC)"),
  p: [
    l("GRC is the track that makes security organized, measurable and provable. Security governance sets direction: policies, roles, responsibilities and security awareness programmes. Risk management identifies what could go wrong (risk assessment), decides how to treat it (accept, avoid, mitigate, transfer), and tracks it. Compliance demonstrates that the organization meets the requirements of frameworks, standards and laws: ISO/IEC 27001 for information security management, the NIST Cybersecurity Framework, the CIS Controls, PCI DSS for payment cards, SOC 2 for service providers — plus security audits, security controls selection, business continuity planning and regulatory requirements. Security awareness and human risk management also live here, because most incidents start with people, not machines.", "GRC هو المسار الذي يجعل الأمن منظمًا وقابلًا للقياس وقابلًا للإثبات. وتحدد الحوكمة الاتجاه: السياسات والأدوار والمسؤوليات وبرامج التوعية الأمنية. وإدارة المخاطر تحدد ما قد يحدث من أخطاء (تقييم المخاطر) وتقرر كيفية التعامل معه (قبول أو تجنب أو تخفيف أو نقل) وتتابعه. أما الامتثال فيثبت أن المؤسسة تستوفي متطلبات الأطر والمعايير والقوانين: ISO/IEC 27001 لإدارة أمن المعلومات، وإطار NIST Cybersecurity Framework، وضوابط CIS، وPCI DSS لبطاقات الدفع، وSOC 2 لمزودي الخدمات — إضافة إلى التدقيقات الأمنية واختيار الضوابط وخطط استمرارية الأعمال والمتطلبات التنظيمية. وتعيش التوعية الأمنية وإدارة المخاطر البشرية هنا أيضًا، لأن معظم الحوادث تبدأ بالأشخاص لا بالآلات."),
    l("GRC combines technical understanding with organizational processes, documentation and risk communication. A realistic example: a new payment regulation applies to the company. The GRC analyst performs a gap assessment against PCI DSS, interviews technical teams to understand current controls, writes a remediation plan with owners and dates, tracks progress, and prepares evidence for the external auditor — translating between engineers and auditors in both directions.", "يجمع GRC بين الفهم التقني والعمليات التنظيمية والتوثيق والتواصل بشأن المخاطر. ومثال واقعي: تُطبق لائحة دفع جديدة على الشركة. فيجري محلل GRC تقييم فجوات مقابل PCI DSS، ويعقد مقابلات مع الفرق التقنية لفهم الضوابط الحالية، ويكتب خطة معالجة بمالكين وتواريخ، ويتابع التقدم، ويحضّر الأدلة للمدقق الخارجي — مترجمًا بين المهندسين والمدققين في الاتجاهين."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("GRC Analyst, Information Security Analyst, IT Risk Analyst, Security Auditor, Compliance Specialist, Information Security Manager.", "محلل GRC، محلل أمن معلومات، محلل مخاطر تقنية، مدقق أمني، أخصائي امتثال، مدير أمن معلومات.")],
      [l("Daily work", "العمل اليومي"), l("Risk assessments and the risk register; drafting and maintaining security policies; control mapping to frameworks; collecting audit evidence; running security awareness campaigns; reporting risk to management.", "تقييمات المخاطر وسجل المخاطر؛ صياغة السياسات الأمنية وصيانتها؛ ربط الضوابط بالأطر؛ جمع أدلة التدقيق؛ إجراء حملات التوعية الأمنية؛ عرض المخاطر على الإدارة.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Broad technical fundamentals (enough to understand what teams do), frameworks and standards, risk methodology, and excellent writing and stakeholder skills. Entry paths exist with limited programming — communication and structure matter most.", "أساسيات تقنية واسعة (ما يكفي لفهم ما تفعله الفرق)، والأطر والمعايير، ومنهجية المخاطر، وكتابة ممتازة ومهارات تعامل مع أصحاب المصلحة. توجد مسارات دخول ببرمجة محدودة — التواصل والتنظيم أهم.")],
      [l("Common frameworks and standards", "الأطر والمعايير الشائعة"), l("ISO/IEC 27001, NIST Cybersecurity Framework, CIS Controls, PCI DSS, SOC 2.", "ISO/IEC 27001 وNIST Cybersecurity Framework وCIS Controls وPCI DSS وSOC 2.")],
      [l("Realistic example", "مثال واقعي"), l("During an audit preparation, the GRC analyst discovers the backup policy says daily restores are tested, but no test record exists. Instead of hiding it, the analyst documents the gap, coordinates a real restore test, updates the policy, and turns the finding into an improvement the auditor can accept.", "أثناء التحضير للتدقيق يكتشف محلل GRC أن سياسة النسخ الاحتياطي تقول إن الاستعادة اليومية تُختبر، لكن لا يوجد سجل اختبار. فبدل إخفاء ذلك يوثق المحلل الفجوة، وينسق اختبار استعادة حقيقيًا، ويحدّث السياسة، ويحوّل الملاحظة إلى تحسين يستطيع المدقق قبوله.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("Junior GRC Analyst → GRC Analyst → Senior Risk & Compliance Specialist → GRC Manager / Information Security Manager.", "محلل GRC مبتدئ ← محلل GRC ← أخصائي مخاطر وامتثال أول ← مدير GRC / مدير أمن معلومات.")],
      [l("Connections", "الارتباطات"), l("Sets requirements every technical team implements; audits the controls SOC, IAM and cloud security run; documents incidents for regulators; uses threat intelligence strategically for risk planning.", "تضع المتطلبات التي تنفذها كل الفرق التقنية؛ وتراجع ضوابط مركز العمليات وIAM وأمن السحابة؛ وتوثق الحوادث للجهات التنظيمية؛ وتستخدم الاستخبارات استراتيجيًا لتخطيط المخاطر.")],
      [l("Who enjoys it", "من يشتاق له"), l("Organized communicators who like structure, documentation, big-picture thinking, and persuading people rather than configuring machines all day.", "متواصلون منظمون يحبون الهيكل والتوثيق والتفكير الشمولي وإقناع الناس بدلًا من إعداد الآلات طوال اليوم.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: complete Session 15 (risk management and frameworks) of this course.", "خارطة تعلم المبتدئ: أكمل الجلسة 15 (إدارة المخاطر والأطر) من هذه الدورة."),
    l("Read the NIST Cybersecurity Framework core functions: Govern, Identify, Protect, Detect, Respond, Recover.", "اقرأ وظائف إطار NIST الأساسية: الحوكمة والتحديد والحماية والكشف والاستجابة والتعافي."),
    l("Read the CIS Controls and try mapping them to controls you already use at home.", "اقرأ ضوابط CIS وحاول ربطها بضوابط تستخدمها بالفعل في منزلك."),
    l("Draft a one-page security policy for a fictional small company and a simple risk register with five risks.", "صُغ سياسة أمن من صفحة واحدة لشركة افتراضية صغيرة وسجل مخاطر بسيط بخمسة مخاطر."),
    l("Practise explaining a technical control (for example MFA) in business language: what it costs, what it prevents.", "تدرّب على شرح ضابط تقني (مثل MFA) بلغة أعمال: ما يكلفه وما يمنعه."),
  ],
  callout: { kind: "tip", text: l("GRC is a real specialization — not a lesser technical one. Every serious security programme is built on the documents and decisions GRC professionals produce, and many security leaders come from this track.", "GRC تخصص حقيقي — وليس تخصصًا تقنيًا أدنى. فكل برنامج أمني جدي يُبنى على الوثائق والقرارات التي ينتجها أخصائيو GRC، وكثير من قادة الأمن جاؤوا من هذا المسار.") },
};

/* ------------------------- Section 16: Track 10 — Malware Analysis ------------------------- */

const track10: Section = {
  h: l("16. Track 10 — Malware Analysis & Reverse Engineering", "16. المسار 10 — تحليل البرمجيات الخبيثة والهندسة العكسية"),
  p: [
    l("Malware Analysis is the practice of safely dissecting malicious software to understand what it does, how it spreads and how to stop it. Static analysis examines the file without running it (structure, strings, imports); dynamic analysis runs it in an isolated sandbox and observes its behaviour; behavioural analysis correlates what the sample touches — files, registry, network; and Reverse Engineering goes deeper, reconstructing how the binary's logic works using disassemblers and debuggers. The output is malware indicators (hashes, domains, behaviours, YARA-style signatures) and a report that detection engineering, threat intelligence and incident response can act on.", "تحليل البرمجيات الخبيثة هو ممارسة تشريح البرمجيات الخبيثة بأمان لفهم ما تفعله وكيف تنتشر وكيف نوقفها. والتحليل الثابت يفحص الملف دون تشغيله (البنية والنصوص والمكتبات المستوردة)؛ والتحليل الديناميكي يشغّله في صندوق حماية معزول ويراقب سلوكه؛ والتحليل السلوكي يربط ما يمسه النموذج — ملفات وسجل نظام وشبكة؛ والهندسة العكسية تتعمق أكثر فتعيد بناء كيفية عمل منطق الملف الثنائي باستخدام أدوات التفكيك والتنقيح. والمخرج هو مؤشرات البرمجيات الخبيثة (بصمات ونطاقات وسلوكيات وبصمات أنماط) وتقرير يمكن لهندسة الكشف واستخبارات التهديدات والاستجابة للحوادث التصرف بناءً عليه."),
    l("Be aware: this specialization is more advanced than the others. It usually requires strong operating system internals knowledge, solid programming, and comfort with low-level concepts (memory, assembly basics, file formats). Analysts typically arrive after experience in SOC, DFIR or development. A realistic example: an office document with a malicious macro arrives; the analyst detonates it in an isolated sandbox, observes it downloading a second stage from a newly registered domain, extracts the domain and the dropped file, dissects the loader in Ghidra to understand its persistence method, and publishes indicators the SOC blocks within the hour.", "كن واعيًا: هذا التخصص أكثر تقدمًا من غيره. ويحتاج عادة إلى معرفة قوية بأدق تفاصيل أنظمة التشغيل، وبرمجة متينة، وأريحية مع المفاهيم منخفضة المستوى (الذاكرة، أساسيات لغة التجميع، صيغ الملفات). ويصل المحللون عادة بعد خبرة في مركز العمليات أو DFIR أو التطوير. ومثال واقعي: يصل مستند به ماكرو خبيث؛ يفجّره المحلل في صندوق حماية معزول، ويراه يحمّل مرحلة ثانية من نطاق مسجّل حديثًا، ويستخرج النطاق والملف المسقوط، ويشقّ المحمّل في Ghidra لفهم طريقة استمراريته، وينشر مؤشرات يحجبها مركز العمليات خلال الساعة."),
  ],
  table: {
    head: [INP, DET],
    rows: [
      [l("Typical job titles", "المسميات الوظيفية الشائعة"), l("Malware Analyst, Reverse Engineer, Malware Researcher, Threat Research Engineer.", "محلل برمجيات خبيثة، مهندس عكسي، باحث برمجيات خبيثة، مهندس أبحاث تهديدات.")],
      [l("Daily work", "العمل اليومي"), l("Safe sample handling; static and dynamic analysis; binary analysis and disassembly; sandbox detonation; extracting indicators; writing technical reports; supporting detection rules and IR cases.", "التعامل الآمن مع النماذج؛ التحليل الثابت والديناميكي؛ تحليل الملفات الثنائية والتفكيك؛ تفجير في صندوق الحماية؛ استخراج المؤشرات؛ كتابة تقارير تقنية؛ دعم قواعد الكشف وحالات الاستجابة.")],
      [l("Required knowledge", "المعرفة المطلوبة"), l("Deep programming and operating system internals, file formats, memory concepts and disassembly reading — generally the deepest technical knowledge of all ten tracks.", "برمجة عميقة وأدق تفاصيل أنظمة التشغيل، وصيغ الملفات، ومفاهيم الذاكرة، وقراءة التفكيك — عمق تقني أعلى عمومًا من كل المسارات العشرة.")],
      [l("Common tools", "الأدوات الشائعة"), l("Ghidra, IDA Free, x64dbg, Detect It Easy, REMnux, FLARE-VM.", "Ghidra وIDA Free وx64dbg وDetect It Easy وREMnux وFLARE-VM.")],
      [l("Junior → senior", "من مبتدئ إلى خبير"), l("SOC / DFIR Analyst → Junior Malware Analyst → Malware Analyst → Senior Malware Researcher.", "محلل مركز عمليات / DFIR ← محلل برمجيات خبيثة مبتدئ ← محلل برمجيات خبيثة ← باحث برمجيات خبيثة أول.")],
      [l("Connections", "الارتباطات"), l("Feeds threat intelligence with the deepest indicators; gives SOC detection engineering its ground truth; supports IR with answers about what malware actually did.", "يغذي استخبارات التهديدات بأعمق المؤشرات؛ ويمنح هندسة الكشف في مركز العمليات الحقيقة المرجعية؛ ويدعم الاستجابة للحوادث بإجابات عما فعله الخبيث فعلًا.")],
      [l("Who enjoys it", "من يشتاق له"), l("Deeply technical, patient minds who enjoy programming, puzzles inside binaries, and understanding systems down to the last instruction.", "عقول تقنية عميقة صبورة تستمتع بالبرمجة والألغاز داخل الملفات الثنائية وفهم الأنظمة حتى آخر تعليمة.")],
    ],
  },
  bullets: [
    l("Beginner roadmap: build strong programming and operating system fundamentals first — this is a later-career specialization, not a first one.", "خارطة تعلم المبتدئ: ابنِ أساسات قوية في البرمجة وأنظمة التشغيل أولًا — فهذا تخصص لمرحلة لاحقة، لا تخصص أولًا."),
    l("Set up an isolated analysis lab: a REMnux or FLARE-VM virtual machine with no shared folders and no internet bridge.", "أنشئ مختبر تحليل معزولًا: جهاز افتراضي REMnux أو FLARE-VM دون مجلدات مشتركة ودون جسر إنترنت."),
    l("Practise safe triage with Detect It Easy on public sample sets (never a production machine).", "تدرّب على الفرز الآمن بـ Detect It Easy على مجموعات نماذج عامة (وليس أبدًا جهاز إنتاج)."),
    l("Learn dynamic analysis basics: watch process, file, registry and network activity in the sandbox.", "تعلّم أساسيات التحليل الديناميكي: راقب نشاط العمليات والملفات وسجل النظام والشبكة في صندوق الحماية."),
    l("Only after those steps, start with Ghidra basics on a simple binary and follow guided exercises.", "وبعد تلك الخطوات فقط، ابدأ بأساسيات Ghidra على ملف ثنائي بسيط واتبع تمارين موجّهة."),
  ],
  callout: { kind: "warn", text: l("Never analyse live malware on a machine connected to your home or company network. Isolation first, curiosity second.", "لا تحلل برمجيات خبيثة حية أبدًا على جهاز متصل بشبكة منزلك أو شركتك. العزل أولًا، والفضول ثانيًا.") },
};

/* ------------------------- Section 17: Additional areas ------------------------- */

const extraAreas: Section = {
  h: l("17. Additional specialized areas", "17. مجالات تخصصية إضافية"),
  p: [
    l("Beyond the ten main tracks, the industry includes further specialized areas. You do not need to memorize them now — the goal is to understand how wide the profession is, and to recognize them when you meet them in job postings and articles.", "إضافة إلى المسارات العشرة الرئيسية، تضم الصناعة مجالات تخصصية أخرى. لا حاجة لحفظها الآن — فالهدف فهم اتساع المهنة والتعرف عليها عند لقائها في الإعلانات الوظيفية والمقالات."),
  ],
  table: {
    head: [l("Area", "المجال"), l("Main purpose", "الغرض الرئيسي"), l("Typical responsibilities and place in the industry", "المسؤوليات النموذجية ومكانها في الصناعة")],
    rows: [
      [l("Security Architecture", "المعمارية الأمنية"), l("Design security into systems and the enterprise from the start.", "تصميم الأمن داخل الأنظمة والمؤسسة منذ البداية."), l("Senior-level design of secure architectures, trust boundaries and control placement; guides rather than configures; reached after deep experience in one or more tracks.", "تصميم على مستوى خبير لمعماريات آمنة وحدود ثقة ومواضع الضوابط؛ يوجه ولا يضبط؛ يُبلغ بعد خبرة عميقة في مسار أو أكثر.")],
      [l("Security Engineering", "الهندسة الأمنية"), l("Build and operate security systems and infrastructure.", "بناء وتشغيل الأنظمة والبنية الأمنية."), l("Deploys and integrates security platforms (EDR, WAF, email security), develops internal tooling; overlaps with DevSecOps and network security.", "نشر ودمج المنصات الأمنية (EDR وWAF وأمن البريد)، وتطوير أدوات داخلية؛ يتداخل مع DevSecOps وأمن الشبكات.")],
      [l("Vulnerability Management", "إدارة الثغرات"), l("Continuously find, prioritize and remediate weaknesses across the estate.", "اكتشاف الثغرات باستمرار وترتيبها ومعالجتها عبر المشهد."), l("Runs scanners, tracks assets, prioritizes by risk and negotiates patching windows; Session 14 of this course covers the fundamentals.", "تشغيل الفاحصات وتتبع الأصول وترتيب الأولويات حسب الخطر والتفاوض على نوافذ التحديث؛ تغطي الجلسة 14 من هذه الدورة أساسياتها.")],
      [l("Security Awareness & Human Risk", "التوعية الأمنية والمخاطر البشرية"), l("Reduce incidents caused by human behaviour.", "تقليل الحوادث الناتجة عن السلوك البشري."), l("Builds training, phishing simulations and culture programmes; sits between GRC and daily operations.", "بناء التدريب ومحاكاة التصيّد وبرامج الثقافة؛ يجلس بين GRC والعمليات اليومية.")],
      [l("IoT Security", "أمن إنترنت الأشياء"), l("Secure connected devices that are often weak by design.", "تأمين الأجهزة المتصلة التي تكون ضعيفة بالتصميم غالبًا."), l("Device inventory, network isolation, firmware review and vendor risk for sensors, cameras and smart devices.", "جرد الأجهزة وعزل الشبكة ومراجعة البرمجيات الثابتة وخطر الموردين للحساسات والكاميرات والأجهزة الذكية.")],
      [l("OT / ICS Security", "أمن التقنيات التشغيلية والتحكم الصناعي"), l("Protect factories, energy, water and other industrial control systems.", "حماية المصانع والطاقة والمياه وغيرها من أنظمة التحكم الصناعي."), l("Secures specialized protocols and availability-critical systems where safety comes first; a niche with growing demand.", "تأمين بروتوكولات متخصصة وأنظمة تكون فيها السلامة أولوية تتطلب التوافر؛ مجال متخصص بطلب متنامٍ.")],
      [l("Database Security", "أمن قواعد البيانات"), l("Protect data stores and the data inside them.", "حماية مخازن البيانات والبيانات فيها."), l("Access control, encryption, activity monitoring and configuration hardening for databases; overlaps with IAM and cloud security.", "ضبط الوصول والتشفير ومراقبة النشاط وتحصين الإعدادات لقواعد البيانات؛ يتداخل مع IAM وأمن السحابة.")],
      [l("Privacy Engineering", "هندسة الخصوصية"), l("Build systems that respect privacy laws and user rights.", "بناء أنظمة تحترم قوانين الخصوصية وحقوق المستخدم."), l("Data minimization, de-identification, privacy impact assessments; bridges engineering and legal requirements (Session 19).", "تقليل البيانات وإلغاء تحديدها وتقييم أثر الخصوصية؛ يربط بين الهندسة والمتطلبات القانونية (الجلسة 19).")],
      [l("AI / ML Security", "أمن الذكاء الاصطناعي والتعلم الآلي"), l("Secure AI systems and use AI defensively.", "تأمين أنظمة الذكاء الاصطناعي واستخدامه دفاعيًا."), l("Protects models and training data from abuse and manipulation, secures AI-powered features, and explores AI-assisted detection; an emerging field.", "حماية النماذج وبيانات التدريب من إساءة الاستخدام والتلاعب، وتأمين الميزات المدعومة بالذكاء الاصطناعي، واستكشاف الكشف المدعوم به؛ مجال ناشئ.")],
    ],
  },
};

/* ------------------------- Section 18: Comparison ------------------------- */

const comparison: Section = {
  h: l("18. Comparing the career tracks", "18. مقارنة المسارات المهنية"),
  p: [
    l("The tables below compare the tracks side by side. Read them as orientation, not law: complexity and programming requirements are approximate and vary by employer, industry and the exact role. Do not assume every cybersecurity career requires advanced programming — several tracks have entry paths with little or none.", "تقارن الجداول أدناه المسارات جنبًا إلى جنب. اقرأها بوصفها توجيهًا لا قانونًا: فالتعقيد ومتطلبات البرمجة تقديريان ويختلفان حسب صاحب العمل والصناعة والدور بالضبط. ولا تفترض أن كل مسار وظيفي سيبراني يتطلب برمجة متقدمة — فعدة مسارات لها مسارات دخول ببرمجة قليلة أو بلا برمجة."),
  ],
  table: {
    head: [l("Career track", "المسار"), l("Main focus", "التركيز الرئيسي"), l("Defensive / Offensive / Mixed", "دفاعي / هجومي / مختلط"), l("Typical daily work", "العمل اليومي النموذجي"), l("Typical entry-level role", "دور الدخول النموذجي")],
    rows: [
      [l("SOC & Blue Team", "مركز العمليات والفريق الأزرق"), l("Real-time detection and triage", "الكشف والفرز لحظيًا"), l("Defensive", "دفاعي"), l("Monitor, investigate, escalate", "مراقبة وتحقيق وتصعيد"), l("SOC Analyst Tier 1", "محلل SOC مستوى أول")],
      [l("Penetration Testing", "اختبار الاختراق"), l("Authorized attack simulation", "محاكاة هجوم مصرّح بها"), l("Offensive", "هجومي"), l("Test, exploit within scope, report", "اختبار واستغلال ضمن النطاق وتقرير"), l("Junior Penetration Tester", "مختبر اختراق مبتدئ")],
      [l("Application Security", "أمن التطبيقات"), l("Secure software development", "تطوير برمجيات آمنة"), l("Defensive (with testing)", "دفاعي (مع اختبار)"), l("Code review, finding triage, guidance", "مراجعة كود وفرز نتائج وإرشاد"), l("Application Security Analyst", "محلل أمن تطبيقات")],
      [l("DevSecOps", "DevSecOps"), l("Security in the delivery pipeline", "الأمن في خط الإصدار"), l("Defensive", "دفاعي"), l("Automate checks, scan, gate releases", "أتمتة الفحوص والمسح وبوابات الإصدار"), l("Security Automation Engineer", "مهندس أتمتة أمنية")],
      [l("Cloud Security", "أمن السحابة"), l("Secure cloud platforms", "تأمين المنصات السحابية"), l("Defensive", "دفاعي"), l("Secure config, IAM, monitoring", "إعدادات آمنة وهوية ومراقبة"), l("Cloud Security Analyst", "محلل أمن سحابي")],
      [l("DFIR", "التحقيق والاستجابة"), l("Investigate and recover", "التحقيق والتعافي"), l("Defensive", "دفاعي"), l("Evidence, timelines, containment", "أدلة وخطوط زمنية واحتواء"), l("Incident Responder / DFIR Analyst", "مستجيب حوادث / محلل DFIR")],
      [l("Threat Intelligence", "استخبارات التهديدات"), l("Understand attackers", "فهم المهاجمين"), l("Defensive", "دفاعي"), l("Analyse reports, publish indicators", "تحليل تقارير ونشر مؤشرات"), l("Threat Intelligence Analyst", "محلل استخبارات تهديدات")],
      [l("Network Security", "أمن الشبكات"), l("Protect the network layer", "حماية طبقة الشبكة"), l("Defensive", "دفاعي"), l("Firewalls, segmentation, traffic analysis", "جدران نارية وتقسيم وتحليل حركة"), l("Network Security Analyst", "محلل أمن شبكات")],
      [l("Identity & Access (IAM)", "الهوية والوصول IAM"), l("Control access", "التحكم بالوصول"), l("Defensive", "دفاعي"), l("Directories, SSO, access reviews", "أدلة ودخول موحد ومراجعات وصول"), l("Identity Security Analyst", "محلل أمن هوية")],
      [l("GRC", "الحوكمة والمخاطر والامتثال"), l("Govern, assess risk, comply", "حوكمة وتقييم مخاطر وامتثال"), l("Mixed (organizational)", "مختلط (تنظيمي)"), l("Policies, risk register, audits", "سياسات وسجل مخاطر وتدقيق"), l("GRC Analyst", "محلل GRC")],
      [l("Malware Analysis", "تحليل البرمجيات الخبيثة"), l("Dissect malicious code", "تشريح الشيفرة الخبيثة"), l("Mixed (defensive research)", "مختلط (بحث دفاعي)"), l("Static/dynamic analysis, reports", "تحليل ثابت وديناميكي وتقارير"), l("Junior Malware Analyst", "محلل برمجيات خبيثة مبتدئ")],
    ],
  },
};

const comparisonB: Section = {
  h: l("Skill and tool comparison", "مقارنة المهارات والأدوات"),
  p: [
    l("The same tracks, compared by the depth of knowledge usually expected. “Programming” here means writing code as a core part of the job — not merely running tools. Remember these are rough ranges.", "المسارات نفسها مقارنة بعمق المعرفة المعتادة. و«البرمجة» هنا تعني كتابة الكود بوصفه جزءًا جوهريًا من العمل — لا مجرد تشغيل أدوات. وتذكّر أن هذه نطاقات تقريبية."),
  ],
  table: {
    head: [l("Career track", "المسار"), l("Programming", "البرمجة"), l("Networking", "الشبكات"), l("Linux", "لينكس"), l("Common tools", "الأدوات الشائعة"), l("Relative learning complexity", "التعقيد النسبي للتعلم")],
    rows: [
      [l("SOC & Blue Team", "مركز العمليات والفريق الأزرق"), l("Low–Medium (queries first, scripting later)", "منخفضة–متوسطة (استعلامات أولًا ثم برمجة نصية)"), l("Medium", "متوسطة"), l("Medium", "متوسطة"), l("Splunk, Wazuh, Sentinel, Wireshark", "Splunk وWazuh وSentinel وWireshark"), l("Moderate", "معتدل")],
      [l("Penetration Testing", "اختبار الاختراق"), l("Medium (scripting valuable)", "متوسطة (البرمجة النصية قيّمة)"), l("High", "عالية"), l("High", "عالية"), l("Kali, Nmap, Burp, Metasploit", "Kali وNmap وBurp وMetasploit"), l("Moderate–High", "معتدل–عالٍ")],
      [l("Application Security", "أمن التطبيقات"), l("High (software development)", "عالية (تطوير برمجيات)"), l("Medium", "متوسطة"), l("Medium", "متوسطة"), l("Burp, ZAP, SAST/DAST/SCA", "Burp وZAP وأدوات SAST/DAST/SCA"), l("Moderate–High", "معتدل–عالٍ")],
      [l("DevSecOps", "DevSecOps"), l("High (automation)", "عالية (أتمتة)"), l("Medium", "متوسطة"), l("High", "عالية"), l("Docker, Kubernetes, Terraform, Trivy", "Docker وKubernetes وTerraform وTrivy"), l("High", "عالٍ")],
      [l("Cloud Security", "أمن السحابة"), l("Medium (scripting helpful)", "متوسطة (البرمجة النصية مفيدة)"), l("Medium–High", "متوسطة–عالية"), l("Medium", "متوسطة"), l("AWS/Azure/GCP services, Defender for Cloud", "خدمات AWS/Azure/GCP وDefender for Cloud"), l("Moderate–High", "معتدل–عالٍ")],
      [l("DFIR", "التحقيق والاستجابة"), l("Low–Medium", "منخفضة–متوسطة"), l("Medium", "متوسطة"), l("High", "عالية"), l("Autopsy, Volatility, KAPE, Velociraptor", "Autopsy وVolatility وKAPE وVelociraptor"), l("Moderate–High", "معتدل–عالٍ")],
      [l("Threat Intelligence", "استخبارات التهديدات"), l("Low–Medium", "منخفضة–متوسطة"), l("Medium", "متوسطة"), l("Medium", "متوسطة"), l("ATT&CK, MISP, VirusTotal, OpenCTI", "ATT&CK وMISP وVirusTotal وOpenCTI"), l("Moderate", "معتدل")],
      [l("Network Security", "أمن الشبكات"), l("Low–Medium (scripting helps)", "منخفضة–متوسطة (البرمجة النصية تساعد)"), l("High", "عالية"), l("Medium", "متوسطة"), l("Wireshark, Suricata, Zeek, pfSense", "Wireshark وSuricata وZeek وpfSense"), l("Moderate", "معتدل")],
      [l("Identity & Access (IAM)", "الهوية والوصول IAM"), l("Low–Medium (scripting for automation)", "منخفضة–متوسطة (برمجة نصية للأتمتة)"), l("Medium", "متوسطة"), l("Medium", "متوسطة"), l("Active Directory, Entra ID, Okta", "Active Directory وEntra ID وOkta"), l("Moderate", "معتدل")],
      [l("GRC", "الحوكمة والمخاطر والامتثال"), l("Low (limited programming)", "منخفضة (برمجة محدودة)"), l("Low–Medium", "منخفضة–متوسطة"), l("Low–Medium", "منخفضة–متوسطة"), l("Risk registers, audit tools, framework documents", "سجلات مخاطر وأدوات تدقيق ووثائق أطر"), l("Technically lower; broad knowledge required", "أدنى تقنيًا؛ ومعرفة واسعة مطلوبة")],
      [l("Malware Analysis", "تحليل البرمجيات الخبيثة"), l("High", "عالية"), l("Medium", "متوسطة"), l("High", "عالية"), l("Ghidra, x64dbg, REMnux", "Ghidra وx64dbg وREMnux"), l("High", "عالٍ")],
    ],
  },
  bullets: [
    l("SOC and GRC roles can have entry paths with limited programming — log reading, queries and communication matter first.", "يمكن أن تكون لأدوار مركز العمليات وGRC مسارات دخول ببرمجة محدودة — فقراءة السجلات والاستعلامات والتواصل أهم أولًا."),
    l("Penetration testing benefits from scripting and programming knowledge as you progress, especially for automation and custom testing.", "يستفيد اختبار الاختراق من معرفة البرمجة النصية والبرمجة مع تقدمك، خصوصًا للأتمتة والاختبار المخصص."),
    l("Application security benefits strongly from software development knowledge — you review and guide code for a living.", "يستفيد أمن التطبيقات بقوة من معرفة تطوير البرمجيات — فأنت تراجع الكود وترشد المطورين مهنةً."),
    l("DevSecOps requires strong development, automation and infrastructure knowledge by definition.", "يتطلب DevSecOps بحكم تعريفه معرفة قوية بالتطوير والأتمتة والبنية التحتية."),
    l("Malware analysis and reverse engineering generally require deeper programming and operating-system knowledge than all other tracks.", "يتطلب تحليل البرمجيات الخبيثة والهندسة العكسية عمومًا معرفة أعمق بالبرمجة وأنظمة التشغيل من كل المسارات الأخرى."),
  ],
  callout: { kind: "key", text: l("These ratings are approximate guides. A bank's SOC may want deeper scripting than a retailer's; a startup may combine cloud security and DevSecOps in one person. Always read the actual job description, not the average.", "هذه التصنيفات أدلة تقريبية. قد يطلب مركز عمليات في بنك برمجة نصية أعمق مما يطلبه مركز في شركة تجزئة؛ وقد تدمج شركة ناشئة أمن السحابة وDevSecOps في شخص واحد. اقرأ دائمًا الوصف الوظيفي الفعلي لا المعدل.") },
};

/* ------------------------- Section 19: Collaboration ------------------------- */

const collaboration: Section = {
  h: l("19. How the teams work together during an incident", "19. كيف تعمل الفرق معًا أثناء حادثة أمنية"),
  p: [
    l("Career tracks are not silos — real incidents are handled by several teams cooperating. Consider a realistic fictional organization: an attacker discovers a vulnerability in the company's public web application, exploits it, gains a foothold inside the server, and begins moving toward customer data. Here is how the different tracks become involved, in a realistic order of events.", "المسارات المهنية ليست جزرًا منعزلة — فالحوادث الحقيقية تتولاها عدة فرق تتعاون. تخيّل مؤسسة افتراضية واقعية: يكتشف مهاجم ثغرة في تطبيق الويب العام للشركة، ويستغلها، ويحصل على موطئ قدم داخل الخادم، ويبدأ التحرك نحو بيانات العملاء. هكذا تتدخل المسارات المختلفة بترتيب واقعي للأحداث."),
  ],
  bullets: [
    l("1. AppSec identifies the application security weakness: the flaw that allowed the attack is reproduced, understood and scheduled for a fix with a verified patch.", "1. أمن التطبيقات يحدد نقطة ضعف التطبيق: تُعاد إنتاج الثغرة التي أتاحت الهجوم وفهمها وجدولة إصلاحها بترقعة موثقة."),
    l("2. SOC detects the suspicious activity through security monitoring: unusual process behaviour on the web server raises an alert; the analyst triages and confirms an active intrusion, then escalates.", "2. مركز العمليات يكشف النشاط المشبوه عبر المراقبة الأمنية: سلوك عمليات غير معتاد على خادم الويب يرفع تنبيهًا؛ يفرز المحلل ويؤكد اختراقًا جاريًا ثم يصعّد."),
    l("3. Threat Intelligence provides information about related indicators and attacker behaviour: similar campaigns, known tooling and recommended hunting steps are added to the investigation.", "3. استخبارات التهديدات توفر معلومات عن المؤشرات المرتبطة وسلوك المهاجم: تُضاف حملات مشابهة وأدوات معروفة وخطوات صيد موصى بها إلى التحقيق."),
    l("4. Incident Response coordinates containment and recovery: declaring the incident, deciding containment actions, communicating with management, and driving the response plan.", "4. الاستجابة للحوادث تنسق الاحتواء والتعافي: إعلان الحادثة، وتقرير إجراءات الاحتواء، والتواصل مع الإدارة، وقيادة خطة الاستجابة."),
    l("5. DFIR investigates and preserves digital evidence: disk and memory images are acquired with a documented chain of custody, and a timeline shows how the attacker entered, moved and what was touched.", "5. التحقيق الجنائي والاستجابة يحقق ويحفظ الأدلة الرقمية: تُأخذ نسخ من الأقراص والذاكرة بسلسلة عهدة موثقة، ويُظهر الخط الزمني كيف دخل المهاجم وتحرك وما مسّه."),
    l("6. Network Security investigates suspicious network traffic and helps contain affected systems: blocking attacker addresses, isolating the server through segmentation, and reviewing firewall history.", "6. أمن الشبكات يحقق في حركة الشبكة المشبوهة ويساعد في احتواء الأنظمة المتأثرة: حجب عناوين المهاجم، وعزل الخادم عبر التقسيم، ومراجعة سجل الجدار الناري."),
    l("7. Cloud Security reviews cloud infrastructure if the application is hosted in the cloud: checking identities, permissions, logging and whether the blast radius reaches other cloud resources.", "7. أمن السحابة يراجع البنية التحتية السحابية إن كان التطبيق مستضافًا في السحابة: فحص الهويات والصلاحيات والسجلات، وهل يمتد أثر الانفجار إلى موارد سحابية أخرى."),
    l("8. GRC supports risk documentation, compliance and required reporting: regulatory notification duties, evidence of what happened, and updated risk entries.", "8. الحوكمة والمخاطر والامتثال تدعم توثيق المخاطر والامتثال والتقارير المطلوبة: واجبات الإبلاغ التنظيمي، وأدلة ما حدث، وإدخالات مخاطر محدثة."),
    l("9. DevSecOps helps prevent the vulnerability from recurring: the fix ships through a secure pipeline, and a new automated check ensures this class of flaw is caught before the next release.", "9. DevSecOps يساعد في منع تكرار الثغرة: يُشحن الإصلاح عبر خط إصدار آمن، ويضمن فحص مؤتمت جديد اكتشاف هذا الصنف من الثغرات قبل الإصدار القادم."),
  ],
  diagram: {
    kind: "flow",
    title: l("One incident, nine teams", "حادثة واحدة، تسعة فرق"),
    caption: l("An attacker exploits a web application vulnerability: the teams above cooperate in a realistic order, from detection to prevention of recurrence.", "مهاجم يستغل ثغرة في تطبيق ويب: تتعاون الفرق أعلاه بترتيب واقعي، من الكشف إلى منع التكرار."),
    nodes: [
      { label: l("1 AppSec", "1 أمن التطبيقات"), desc: l("Identifies the flaw", "يحدد الثغرة") },
      { label: l("2 SOC", "2 مركز العمليات"), desc: l("Detects and triages", "يكشف ويفرز") },
      { label: l("3 Threat Intel", "3 استخبارات التهديدات"), desc: l("Context and indicators", "سياق ومؤشرات") },
      { label: l("4 Incident Response", "4 الاستجابة للحوادث"), desc: l("Coordinates containment", "ينسق الاحتواء") },
      { label: l("5 DFIR", "5 التحقيق والاستجابة"), desc: l("Evidence and timeline", "أدلة وخط زمني") },
      { label: l("6 Network Security", "6 أمن الشبكات"), desc: l("Blocks and isolates", "يحجب ويعزل") },
      { label: l("7 Cloud Security", "7 أمن السحابة"), desc: l("Reviews cloud impact", "يراجع الأثر السحابي") },
      { label: l("8 GRC", "8 الحوكمة والمخاطر"), desc: l("Reports and documents", "يبلّغ ويوثق") },
      { label: l("9 DevSecOps", "9 DevSecOps"), desc: l("Fix ships, checks added", "يُشحن الإصلاح وتضاف الفحوص") },
    ],
  },
  callout: { kind: "key", text: l("Responsibilities differ between organizations: large companies have dedicated specialists for each step, while smaller companies may combine several roles into one position — one person may be the SOC, the responder and the firewall engineer at once. The workflow also overlaps: SOC and IR work together from minute one, not strictly in sequence.", "تختلف المسؤوليات بين المؤسسات: الشركات الكبيرة تخصص متخصصين لكل خطوة، أما الشركات الصغيرة فقد تجمع عدة أدوار في وظيفة واحدة — فقد يكون شخص واحد هو مركز العمليات والمستجيب ومهندس الجدار الناري معًا. ويتداخل سير العمل أيضًا: مركز العمليات والاستجابة يعملان معًا من الدقيقة الأولى، لا بالتسلسل الصارم.") },
};

/* ------------------------- Section 20: Progression ------------------------- */

const progression: Section = {
  h: l("20. Career progression from beginner to professional", "20. التقدم المهني من مبتدئ إلى محترف"),
  p: [
    l("Nobody starts as an expert. Each track has a rough ladder: foundation knowledge, an entry role, growth through practice, then seniority and specialization. The paths below are examples of how the progression typically looks — they are example pathways, NOT mandatory career ladders and NOT guaranteed employment routes. Titles, steps and speed vary by country, employer and your own choices.", "لا أحد يبدأ خبيرًا. لكل مسار سلم تقريبي: معرفة تأسيسية، ثم دور دخول، ثم نمو بالممارسة، ثم خِبَرية وتخصص. والمسارات أدناه أمثلة على الشكل المعتاد للتقدم — وهي مسارات نموذجية، وليست سلالم إلزامية ولا طرق مضمونة للتوظيف. وتختلف المسميات والخطوات والسرعة حسب الدولة وصاحب العمل واختياراتك أنت."),
  ],
  table: {
    head: [l("Path", "المسار"), l("Example progression", "مثال التقدم")],
    rows: [
      [l("SOC path", "مسار مركز العمليات"), l("Cybersecurity foundation → Junior SOC Analyst → SOC Analyst Tier 1 → SOC Analyst Tier 2 → Senior SOC Analyst → Detection Engineer / Threat Hunter / SOC Lead.", "أساسيات الأمن السيبراني ← محلل SOC مبتدئ ← محلل SOC مستوى أول ← محلل SOC مستوى ثانٍ ← محلل SOC أول ← مهندس كشف / صيّاد تهديدات / قائد مركز عمليات.")],
      [l("Penetration testing path", "مسار اختبار الاختراق"), l("Cybersecurity foundation → Junior Security Tester → Junior Penetration Tester → Penetration Tester → Senior Penetration Tester → Red Team Specialist / Security Consultant.", "أساسيات الأمن السيبراني ← مختبر أمني مبتدئ ← مختبر اختراق مبتدئ ← مختبر اختراق ← مختبر اختراق أول ← أخصائي فريق أحمر / مستشار أمني.")],
      [l("Application security path", "مسار أمن التطبيقات"), l("Programming fundamentals → web development fundamentals → web security fundamentals → Junior Application Security Analyst → Application Security Engineer → Senior Product Security Engineer.", "أساسيات البرمجة ← أساسيات تطوير الويب ← أساسيات أمن الويب ← محلل أمن تطبيقات مبتدئ ← مهندس أمن تطبيقات ← مهندس أمن منتج أول.")],
      [l("Cloud & DevSecOps path", "مسار السحابة وDevSecOps"), l("Linux and networking fundamentals → programming and scripting → cloud fundamentals → CI/CD and infrastructure fundamentals → Junior Cloud Security / DevSecOps role → Senior Security Engineer / Cloud Security Architect.", "أساسيات لينكس والشبكات ← البرمجة والبرمجة النصية ← أساسيات السحابة ← أساسيات CI/CD والبنية التحتية ← دور مبتدئ في أمن السحابة / DevSecOps ← مهندس أمن أول / معماري أمن سحابي.")],
      [l("GRC path", "مسار GRC"), l("Cybersecurity foundation → security and risk fundamentals → security frameworks and compliance → Junior GRC Analyst → GRC Analyst → Senior Risk & Compliance Specialist / GRC Manager.", "أساسيات الأمن السيبراني ← أساسيات الأمن والمخاطر ← أطر الأمن والامتثال ← محلل GRC مبتدئ ← محلل GRC ← أخصائي مخاطر وامتثال أول / مدير GRC.")],
    ],
  },
  callout: { kind: "tip", text: l("Notice a pattern: SOC and GRC offer the most direct entry from a foundation level, AppSec and Cloud/DevSecOps start from development or infrastructure skills, and malware analysis is usually reached after experience elsewhere. Crossing between tracks later is common and valued — a SOC analyst who learns IR becomes stronger, and so on.", "لاحظ نمطًا: مركز العمليات وGRC يوفران أكثر مداخل مباشرة من المستوى التأسيسي، ويبدأ أمن التطبيقات والسحابة/DevSecOps من مهارات التطوير أو البنية التحتية، ويُبلغ تحليل البرمجيات الخبيثة عادة بعد خبرة في غيره. والانتقال بين المسارات لاحقًا شائع ومقدَّر — فمحلل مركز عمليات يتعلم الاستجابة يصبح أقوى، وهكذا.") },
};

/* ------------------------- Section 21: Academy connection ------------------------- */

const academy: Section = {
  h: l("21. This course and the academy's next levels", "21. هذه الدورة ومستويات الأكاديمية القادمة"),
  p: [
    l("Your academy's learning programme is structured so that each level builds toward specific specializations. This Foundation level (Level 1, the twenty sessions you are studying) builds the common technical foundation that EVERY track needs:", "برنامج الأكاديمية التعليمي مبني بحيث يتجه كل مستوى نحو تخصصات محددة. وهذا المستوى التأسيسي (المستوى 1، الجلسات العشرون التي تدرسها) يبني الأساس التقني المشترك الذي يحتاجه كل مسار:"),
  ],
  bullets: [
    l("Level 1 — Cybersecurity Foundation (this level): cybersecurity concepts, Linux, Windows, networking, protocols, firewalls, authentication, cryptography, vulnerability management, and web and application security fundamentals — the shared ground under all ten tracks.", "المستوى 1 — أساسيات الأمن السيبراني (هذا المستوى): مفاهيم الأمن السيبراني، ولينكس، وويندوز، والشبكات، والبروتوكولات، والجدران النارية، والمصادقة، والتشفير، وإدارة الثغرات، وأساسيات أمن الويب والتطبيقات — الأرضية المشتركة تحت المسارات العشرة كلها."),
    l("Level 2 — Ethical Hacking & Penetration Testing: a deeper introduction to ethical hacking, reconnaissance, network scanning, enumeration, vulnerability assessment, controlled exploitation, web application penetration testing, shell fundamentals and Bash automation, and automation scripting for security testing — developing Track 2 and supporting Track 3.", "المستوى 2 — الاختراق الأخلاقي واختبار الاختراق: مقدمة أعمق في الاختراق الأخلاقي والاستطلاع ومسح الشبكات والاستكشاف وتقييم الثغرات والاستغلال المتحكم به واختراق تطبيقات الويب وأساسيات الصدفة وأتمتة Bash وبرمجة نصية للأتمتة الأمنية — لتطوير المسار 2 ودعم المسار 3."),
    l("Level 3 — SOC & Blue Team Operations: a deeper introduction to SOC operations, log analysis, SIEM, security monitoring, detection engineering fundamentals, threat intelligence, threat hunting, EDR, incident response, digital forensics, and automation scripting for SOC work — developing Track 1 and supporting Tracks 5 and 6.", "المستوى 3 — عمليات مركز العمليات والفريق الأزرق: مقدمة أعمق في عمليات المركز وتحليل السجلات وSIEM والمراقبة الأمنية وأساسيات هندسة الكشف واستخبارات التهديدات وصيد التهديدات وEDR والاستجابة للحوادث والتحقيق الجنائي والبرمجة النصية لأتمتة عمل المركز — لتطوير المسار 1 ودعم المسارين 5 و6."),
  ],
  callout: { kind: "warn", text: l("Be honest with yourself about what levels deliver: they provide structured learning paths toward these specializations, but cybersecurity includes further specializations — cloud, IAM, GRC, DFIR at depth and more — that you may explore through additional study, home labs and work experience. Completing one academy level does not automatically qualify you for a professional job; it prepares you to keep learning and to demonstrate skills, which is what employers actually look for. Session 20 of this course helps you plan the next step.", "كن صادقًا مع نفسك حول ما تقدمه المستويات: فهي توفر مسارات تعلم منظمة نحو هذه التخصصات، لكن الأمن السيبراني يتضمن تخصصات إضافية — السحابة وIAM وGRC وDFIR بعمق وغيرها — قد تستكشفها عبر دراسة إضافية ومختبرات منزلية وخبرة عمل. وإتمام مستوى أكاديمي واحد لا يؤهلك تلقائيًا لوظيفة مهنية؛ بل يجهزك لمواصلة التعلم وإظهار المهارات، وهذا ما يبحث عنه أصحاب العمل فعلًا. وتساعدك الجلسة 20 من هذه الدورة على تخطيط الخطوة التالية.") },
};

/* ------------------------- Section 22: Activities ------------------------- */

const activities: Section = {
  h: l("22. Learning activities", "22. أنشطة تعلم"),
  p: [
    l("Activity 1 — Identify the track. Read each realistic job scenario, choose the specialization that is most relevant, and — importantly — be ready to explain WHY. The tool gives feedback after you check.", "النشاط 1 — حدّد المسار. اقرأ كل سيناريو وظيفي واقعي، واختر التخصص الأكثر صلة، وكن — وهذا الأهم — مستعدًا لشرح السبب. تعطيك الأداة تغذية راجعة بعد التحقق."),
    l("Activity 2 — Match the tool to the track. Choose the specialization each tool is most associated with. Remember: tools can be used across multiple tracks (Wireshark serves SOC, network security and penetration testing alike) — here you pick the PRIMARY association.", "النشاط 2 — طابق الأداة بالمسار. اختر التخصص الذي ترتبط به كل أداة أكثر ارتباطًا. وتذكّر: يمكن استخدام الأدوات عبر مسارات متعددة (Wireshark يخدم مركز العمليات وأمن الشبكات واختبار الاختراق معًا) — هنا تختار الارتباط الأساسي."),
    l("Activity 3 — Build your personal learning roadmap. Choose ONE or TWO areas you want to explore first (exploring more than one is normal at this stage), then fill in the template below in your notebook or a document. Keep it short and honest — it is a plan for you, not an essay.", "النشاط 3 — ابنِ خارطة تعلمك الشخصية. اختر مجالًا واحدًا أو مجالين تريد استكشافهما أولًا (استكشاف أكثر من مجال طبيعي في هذه المرحلة)، ثم املأ القالب أدناه في دفترك أو مستند. أبقه قصيرًا وصادقًا — فهو خطة لك لا مقالة."),
  ],
  matches: [
    {
      prompt: l("Activity 1 — Which specialization does each scenario belong to?", "النشاط 1 — أي تخصص ينتمي إليه كل سيناريو؟"),
      options: [
        l("SOC Analyst (Blue Team)", "محلل مركز عمليات (الفريق الأزرق)"),
        l("Penetration Testing", "اختبار الاختراق"),
        l("Application Security", "أمن التطبيقات"),
        l("Cloud Security", "أمن السحابة"),
        l("Digital Forensics & IR", "التحقيق الجنائي والاستجابة"),
        l("Threat Intelligence", "استخبارات التهديدات"),
        l("Identity & Access (IAM)", "الهوية والوصول IAM"),
        l("Governance, Risk & Compliance", "الحوكمة والمخاطر والامتثال"),
      ],
      items: [
        { text: l("Layla spends her shift reviewing SIEM alerts and confirms that a server is beaconing to an unknown external address, then escalates the case.", "تقضي ليلى نوبتها في مراجعة تنبيهات SIEM وتؤكد أن خادمًا يرسل نبضات إلى عنوان خارجي مجهول، ثم تصعّد الحالة."), answer: 0 },
        { text: l("Omar has signed a scope document with a client and is testing their web shop for exploitable weaknesses within the agreed limits.", "وقّع عمر وثيقة نطاق مع عميل ويختبر متجره الإلكتروني بحثًا عن ثغرات قابلة للاستغلال ضمن الحدود المتفق عليها."), answer: 1 },
        { text: l("Sara reviews a colleague's pull request and points out that user input is concatenated into a database query without validation.", "تراجع سارة طلب دمج لزميلها وتنبّه إلى أن مدخلات المستخدم تُلصق في استعلام قاعدة بيانات دون تحقق."), answer: 2 },
        { text: l("Khaled writes a policy that automatically flags any cloud storage bucket exposed to the public internet and notifies its owner.", "يكتب خالد سياسة تعلّم تلقائيًا أي حاوية تخزين سحابية مكشوفة للإنترنت العام وتنبّه مالكها."), answer: 3 },
        { text: l("Nadia takes a forensic image of a compromised laptop and preserves the chain of custody before any analysis begins.", "تأخذ نادية نسخة جنائية من حاسوب مخترق وتحفظ سلسلة العهدة قبل بدء أي تحليل."), answer: 4 },
        { text: l("Yousef reads a new research report about a ransomware group and publishes a briefing with its tactics and indicators for the SOC.", "يقرأ يوسف تقريرًا بحثيًا جديدًا عن مجموعة فدية وينشر إحاطة بتكتيكاتها ومؤشراتها لمركز العمليات."), answer: 5 },
        { text: l("Mariam discovers that employees who left the company months ago still have active accounts, and runs an access review with department owners.", "تكتشف مريم أن موظفين غادروا الشركة قبل أشهر لا يزال لديهم حسابات نشطة، وتجري مراجعة وصول مع مالكي الأقسام."), answer: 6 },
        { text: l("Tarek maps the organization's controls against a recognized framework and prepares evidence for an external auditor.", "يربط طارق ضوابط المؤسسة بإطار معترف به ويحضّر الأدلة لمدقق خارجي."), answer: 7 },
      ],
    },
    {
      prompt: l("Activity 2 — Match each tool to its PRIMARY specialization", "النشاط 2 — طابق كل أداة بتخصصها الأساسي"),
      options: [
        l("SOC / SIEM monitoring", "مراقبة مركز العمليات / SIEM"),
        l("Penetration Testing", "اختبار الاختراق"),
        l("Application Security", "أمن التطبيقات"),
        l("Cloud Security", "أمن السحابة"),
        l("Digital Forensics", "التحقيق الجنائي الرقمي"),
        l("Threat Intelligence", "استخبارات التهديدات"),
        l("Network Security", "أمن الشبكات"),
        l("IAM", "الهوية والوصول"),
        l("GRC", "الحوكمة والمخاطر والامتثال"),
      ],
      items: [
        { text: l("Splunk", "Splunk"), answer: 0 },
        { text: l("Nmap", "Nmap"), answer: 1 },
        { text: l("OWASP ZAP", "OWASP ZAP"), answer: 2 },
        { text: l("Terraform", "Terraform"), answer: 3 },
        { text: l("Autopsy", "Autopsy"), answer: 4 },
        { text: l("VirusTotal", "VirusTotal"), answer: 5 },
        { text: l("Wireshark", "Wireshark"), answer: 6 },
        { text: l("Okta", "Okta"), answer: 7 },
        { text: l("ISO/IEC 27001", "ISO/IEC 27001"), answer: 8 },
        { text: l("Wazuh", "Wazuh"), answer: 0 },
      ],
    },
  ],
  table: {
    head: [l("Roadmap field", "حقل الخارطة"), l("Your answer (write it yourself)", "إجابتك (اكتبها بنفسك)")],
    rows: [
      [l("Selected track", "المسار المختار"), l("Example: SOC Analyst & Blue Team Operations.", "مثال: محلل مركز عمليات وعمليات الفريق الأزرق.")],
      [l("Why it interests me", "لماذا يثير اهتمامي"), l("Two honest sentences about what draws you to it.", "جملتان صادقتان عما يجذبك إليه.")],
      [l("Current knowledge", "معرفتي الحالية"), l("What you already know from this course or elsewhere.", "ما تعرفه أصلًا من هذه الدورة أو من غيرها.")],
      [l("Skills I need", "المهارات التي أحتاجها"), l("Pick 2–3 from the track's roadmap above, not ten.", "اختر 2–3 من خارطة المسار أعلاه، لا عشرًا.")],
      [l("Tools I should learn", "الأدوات التي ينبغي أن أتعلمها"), l("One or two tools from the track, e.g. Wazuh and Wireshark.", "أداة أو اثنتان من المسار، مثل Wazuh وWireshark.")],
      [l("Beginner practical exercise", "تمرين عملي للمبتدئ"), l("The first hands-on thing you will do, e.g. a home lab with a SIEM.", "أول شيء عملي ستفعله، مثل مختبر منزلي بمنصة SIEM.")],
      [l("Official learning resources", "مصادر التعلم الرسمية"), l("One or two references from the References tab of this session.", "مرجع أو اثنان من تبويب المراجع في هذه الجلسة.")],
      [l("Next learning milestone", "علم التعلم القادم"), l("A small, checkable goal with a date, e.g. \"investigate 5 practice alerts by the end of next month\".", "هدف صغير قابل للتحقق بتاريخ، مثل: «أحقق في 5 تنبيهات تدريبية بنهاية الشهر القادم».")],
    ],
  },
  callout: { kind: "tip", text: l("Revisit your roadmap every few weeks. Interests change as you learn more — that is a sign of progress, not indecision.", "أعد النظر في خارطتك كل بضعة أسابيع. تتغير الاهتمامات كلما تعلمت أكثر — وهذه علامة تقدم لا تردد.") },
};

/* ------------------------- Section 23: Which track suits you ------------------------- */

const whichSuits: Section = {
  h: l("23. Which track might suit you?", "23. أي مسار قد يناسبك؟"),
  p: [
    l("There is no single “best” track — only tracks that fit different people. Before choosing what to explore, think honestly about:", "لا يوجد مسار «أفضل» واحد — بل مسارات تناسب أشخاصًا مختلفين. قبل اختيار ما ستستكشفه، فكّر بصدق في:"),
  ],
  bullets: [
    l("Your interests: do facts and puzzles excite you, or people, or building things?", "اهتماماتك: هل تُشوقك الحقائق والألغاز، أم الأشخاص، أم بناء الأشياء؟"),
    l("Your preferred daily work: monitoring dashboards, writing reports, writing code, configuring devices, or leading meetings?", "العمل اليومي المفضل لديك: مراقبة لوحات، أم كتابة تقارير، أم كتابة كود، أم إعداد أجهزة، أم إدارة الاجتماعات؟"),
    l("Your technical strengths today: operating systems, networks, web, or organizing information?", "نقاط قوتك التقنية اليوم: أنظمة تشغيل، أم شبكات، أم ويب، أم تنظيم المعلومات؟"),
    l("Whether you enjoy investigation and discovery, or building and improving systems.", "هل تستمتع بالتحقيق والاكتشاف، أم بالبناء والتحسين؟"),
    l("Whether you prefer defensive work, or — with strong ethics — offensive security testing.", "هل تفضل العمل الدفاعي، أم — بأخلاق قوية — اختبار الأمن الهجومي؟"),
    l("Your interest in programming: none, some, or a lot?", "اهتمامك بالبرمجة: لا شيء، أم قليل، أم كثير؟"),
    l("Your interest in documentation, risk and compliance work.", "اهتمامك بالتوثيق والمخاطر والامتثال."),
    l("Your willingness to work with operating systems, networks, applications or cloud platforms.", "استعدادك للعمل مع أنظمة التشغيل أو الشبكات أو التطبيقات أو المنصات السحابية."),
  ],
  callout: { kind: "warn", text: l("Important: the interest quiz below is an educational self-assessment to help you choose what to EXPLORE next. It is not a professional aptitude test, it cannot determine your perfect career, and it guarantees nothing. Treat its result as a starting point and feel free to explore more than one track.", "مهم: اختبار الاهتمامات أدناه تقييم ذاتي تعليمي يساعدك على اختيار ما ستستكشفه تاليًا. وهو ليس اختبار قدرة مهنية، ولا يمكنه تحديد مهنتك المثالية، ولا يضمن شيئًا. تعامل مع نتيجته بوصفها نقطة انطلاق، وتحرّر في استكشاف أكثر من مسار.") },
};

/* ------------------------- Career interest quiz data ------------------------- */

const careerQuiz: CareerQuizData = {
  title: l("Career interest quiz", "اختبار الاهتمامات المهنية"),
  intro: l("Answer each question by choosing the option that sounds most like you. There are no wrong answers — at the end you will see which areas you leaned toward and which tracks you may want to explore first. You can take it as many times as you like and explore more than one track.", "أجب عن كل سؤال باختيار الخيار الأقرب إليك. لا توجد إجابات خاطئة — وفي النهاية سترى نحو أي المجالات مالت إجاباتك وأي المسارات قد تريد استكشافها أولًا. ويمكنك إعادته كما تشاء واستكشاف أكثر من مسار."),
  disclaimer: l("This is an educational interest assessment, not a professional aptitude test. It cannot determine your perfect career and does not guarantee suitability for any role. Use it as a compass for exploration, not a verdict.", "هذا تقييم اهتمامات تعليمي وليس اختبار قدرة مهنية. لا يمكنه تحديد مهنتك المثالية ولا يضمن ملاءمتك لأي دور. استخدمه بوصلة للاستكشاف لا حكمًا نهائيًا."),
  cats: [
    { cat: "soc", name: l("Security Monitoring & Investigation", "المراقبة الأمنية والتحقيق"), desc: l("Watching, analysing and responding to real security events.", "مراقبة الأحداث الأمنية الحقيقية وتحليلها والاستجابة لها."), tracks: l("Suggested track: SOC Analyst & Blue Team Operations — your answers point to curiosity about live events, log analysis and structured investigation.", "المسار المقترح: محلل مركز العمليات وعمليات الفريق الأزرق — إجاباتك تشير إلى فضول حول الأحداث الجارية وتحليل السجلات والتحقيق المنظم.") },
    { cat: "pentest", name: l("Ethical Hacking & Security Testing", "الاختراق الأخلاقي واختبار الأمن"), desc: l("Simulating attacks within authorized scopes.", "محاكاة الهجمات ضمن نطاقات مصرّح بها."), tracks: l("Suggested track: Penetration Testing & Ethical Hacking — your answers suggest a puzzle-solving mind attracted to offensive security; remember the strong ethics and authorization requirements.", "المسار المقترح: اختبار الاختراق والاختراق الأخلاقي — إجاباتك توحي بعقل يحل الألغاز ويجذبه الأمن الهجومي؛ وتذكّر متطلبات الأخلاق والتصريح القوية.") },
    { cat: "appsec", name: l("Software & Application Security", "أمن البرمجيات والتطبيقات"), desc: l("Building and reviewing software so it is secure by design.", "بناء البرمجيات ومراجعتها لتكون آمنة بالتصميم."), tracks: l("Suggested track: Application Security (AppSec) — your answers point to an interest in code and development; this track turns programming knowledge into security value.", "المسار المقترح: أمن التطبيقات (AppSec) — إجاباتك تشير إلى اهتمام بالكود والتطوير؛ وهذا المسار يحوّل معرفة البرمجة إلى قيمة أمنية.") },
    { cat: "cloud", name: l("Cloud & Automation", "السحابة والأتمتة"), desc: l("Automating security across pipelines and cloud platforms.", "أتمتة الأمن عبر خطوط الإصدار والمنصات السحابية."), tracks: l("Suggested tracks: DevSecOps and Cloud Security — your answers suggest you enjoy building and automating systems; both tracks reward scripting and infrastructure knowledge.", "المساران المقترحان: DevSecOps وأمن السحابة — إجاباتك توحي بأنك تستمتع ببناء الأنظمة وأتمتتها؛ وكلا المسارين يكافئ البرمجة النصية ومعرفة البنية التحتية.") },
    { cat: "dfir", name: l("Digital Investigation & Forensics", "التحقيق الرقمي والجنائي"), desc: l("Reconstructing incidents from evidence, methodically.", "إعادة بناء الحوادث من الأدلة بشكل منهجي."), tracks: l("Suggested track: Digital Forensics & Incident Response (DFIR) — your answers point to meticulousness and an appetite for evidence-driven investigation.", "المسار المقترح: التحقيق الجنائي الرقمي والاستجابة للحوادث (DFIR) — إجاباتك تشير إلى دقة وشهية للتحقيق المبني على الأدلة.") },
    { cat: "ti", name: l("Threat Research", "أبحاث التهديدات"), desc: l("Studying attackers and turning findings into intelligence.", "دراسة المهاجمين وتحويل النتائج إلى استخبارات."), tracks: l("Suggested tracks: Threat Intelligence and, at a later stage, Malware Analysis — your answers suggest you enjoy research, reading and understanding how attackers operate.", "المساران المقترحان: استخبارات التهديدات، وفي مرحلة لاحقة تحليل البرمجيات الخبيثة — إجاباتك توحي بأنك تستمتع بالبحث والقراءة وفهم كيفية عمل المهاجمين.") },
    { cat: "net", name: l("Network Infrastructure Security", "أمن البنية الشبكية"), desc: l("Protecting the network layer and controlling access.", "حماية طبقة الشبكة والتحكم بالوصول."), tracks: l("Suggested tracks: Network Security and Identity & Access Management — your answers point to comfort with devices, protocols and structured access control.", "المساران المقترحان: أمن الشبكات وإدارة الهوية والوصول — إجاباتك تشير إلى أريحية مع الأجهزة والبروتوكولات وضبط الوصول المنظم.") },
    { cat: "grc", name: l("Governance & Risk", "الحوكمة والمخاطر"), desc: l("Organizing security through policies, risk and compliance.", "تنظيم الأمن عبر السياسات والمخاطر والامتثال."), tracks: l("Suggested track: Governance, Risk & Compliance (GRC) — your answers suggest you value structure, documentation and the big picture; note this entry path needs limited programming.", "المسار المقترح: الحوكمة والمخاطر والامتثال (GRC) — إجاباتك توحي بأنك تقدّر التنظيم والتوثيق والصورة الكاملة؛ ولاحظ أن هذا المسار يحتاج برمجة محدودة.") },
  ],
  questions: [
    { q: l("A free evening with a computer. What sounds most fun?", "أمسية حرة مع حاسوب. أي شيء يبدو أكثر متعة؟"), options: [
      { text: l("Digging through log files to find out what happened on this machine", "تفتيش ملفات السجلات لمعرفة ما حدث في هذا الجهاز"), cat: "soc" },
      { text: l("Trying to find weaknesses in a deliberately vulnerable practice app", "محاولة إيجاد ثغرات في تطبيق تدريب ضعيف عمدًا"), cat: "pentest" },
      { text: l("Building a small app and making it secure", "بناء تطبيق صغير وجعله آمنًا"), cat: "appsec" },
      { text: l("Automating a boring task with scripts and pipelines", "أتمتة مهمة مملة بالبرمجة النصية وخطوط الإصدار"), cat: "cloud" },
    ] },
    { q: l("A major incident is unfolding. Which role attracts you most?", "حادثة كبيرة تجري الآن. أي دور يجذبك أكثر؟"), options: [
      { text: l("Watching the alerts and spotting the intrusion early", "مراقبة التنبيهات واكتشاف الاختراق مبكرًا"), cat: "soc" },
      { text: l("Deciding how to contain it and coordinate the response", "تقرير كيفية احتوائه وتنسيق الاستجابة"), cat: "dfir" },
      { text: l("Researching who the attacker might be and their known behaviour", "البحث عمّن يكون المهاجم المحتمل وسلوكه المعروف"), cat: "ti" },
      { text: l("Writing the report that tells management and regulators what happened", "كتابة التقرير الذي يخبر الإدارة والجهات التنظيمية بما حدث"), cat: "grc" },
    ] },
    { q: l("Which sentence describes you best today?", "أي جملة تصفك أفضل اليوم؟"), options: [
      { text: l("I enjoy programming and want to write code professionally", "أستمتع بالبرمجة وأريد كتابة الكود مهنيًا"), cat: "appsec" },
      { text: l("I like devices, cables, routers and making networks work", "أحب الأجهزة والكابلات والموجّهات وجعل الشبكات تعمل"), cat: "net" },
      { text: l("I like organized documents, policies and clear processes", "أحب الوثائق المنظمة والسياسات والعمليات الواضحة"), cat: "grc" },
      { text: l("I like taking systems apart to see how they work inside", "أحب تفكيك الأنظمة لرؤية كيف تعمل من الداخل"), cat: "pentest" },
    ] },
    { q: l("Pick the work task you would do most willingly for a month:", "اختر مهمة العمل التي ستؤديها بكل رغبة لمدة شهر:"), options: [
      { text: l("Analysing suspicious files in an isolated lab", "تحليل ملفات مشبوهة في مختبر معزول"), cat: "ti" },
      { text: l("Acquiring disk images and reconstructing a timeline of events", "أخذ نسخ أقراص وإعادة بناء خط زمني للأحداث"), cat: "dfir" },
      { text: l("Reviewing cloud permissions and closing risky configurations", "مراجعة الصلاحيات السحابية وإغلاق الإعدادات الخطرة"), cat: "cloud" },
      { text: l("Monitoring live dashboards and triaging alerts", "مراقبة لوحات حية وفرز التنبيهات"), cat: "soc" },
    ] },
    { q: l("In a team project, which role do you naturally take?", "في مشروع جماعي، أي دور تتبناه تلقائيًا؟"), options: [
      { text: l("The one who reads everything and briefs the team", "من يقرأ كل شيء ويُحاط الفريق"), cat: "ti" },
      { text: l("The one who tests everything and finds the flaws", "من يختبر كل شيء ويجد العيوب"), cat: "pentest" },
      { text: l("The one who builds the tooling and automates the workflow", "من يبني الأدوات ويؤتمت سير العمل"), cat: "cloud" },
      { text: l("The one who documents decisions and keeps the process straight", "من يوثق القرارات ويحفظ سير العملية"), cat: "grc" },
    ] },
    { q: l("How do you feel about programming?", "ما شعورك تجاه البرمجة؟"), options: [
      { text: l("I love it — I want code to be central to my work", "أحبها — أريد أن يكون الكود جوهر عملي"), cat: "appsec" },
      { text: l("I like automating things but not writing full applications", "أحب أتمتة الأمور دون كتابة تطبيقات كاملة"), cat: "cloud" },
      { text: l("I can learn some scripting, but I prefer analysis and systems", "أستطيع تعلم بعض البرمجة النصية، لكنني أفضّل التحليل والأنظمة"), cat: "soc" },
      { text: l("Minimal programming suits me better — process and communication first", "البرمجة الدنيا أنسب لي — العمليات والتواصل أولًا"), cat: "grc" },
    ] },
    { q: l("An employee reports that their laptop behaves strangely. Your first instinct:", "يوظف يبلّغ أن حاسوبه يتصرف بشكل غريب. حدسك الأول:"), options: [
      { text: l("Preserve everything and investigate like a detective", "احفظ كل شيء وحقّق كالمحقق"), cat: "dfir" },
      { text: l("Check the logs and watch for what it does next", "افحص السجلات وراقب ما سيفعله بعدها"), cat: "soc" },
      { text: l("Check which accounts and permissions that user has", "افحص أي حسابات وصلاحيات يملك هذا المستخدم"), cat: "net" },
      { text: l("Think about the policy gap that allowed it and how to prove compliance", "فكّر في فجوة السياسة التي أتاحتها وكيف تثبت الامتثال"), cat: "grc" },
    ] },
    { q: l("Which question would you most enjoy answering at work?", "أي سؤال تتمتع أكثر بالإجابة عنه في العمل؟"), options: [
      { text: l("\"How did the attacker get in, and exactly what did they touch?\"", "«كيف دخل المهاجم وماذا مسّ بالضبط؟»"), cat: "dfir" },
      { text: l("\"Can I make this pipeline reject insecure code automatically?\"", "«هل أستطيع جعل هذا الخط يرفض الكود غير الآمن تلقائيًا؟»"), cat: "cloud" },
      { text: l("\"Is this weakness exploitable, and what would the impact be?\"", "«هل هذه الثغرة قابلة للاستغلال وما الأثر؟»"), cat: "pentest" },
      { text: l("\"Who should have access to this system, and why?\"", "«من يجب أن يصل إلى هذا النظام ولماذا؟»"), cat: "net" },
    ] },
    { q: l("You find a security weakness in your own project. What do you do first?", "تجد ثغرة أمنية في مشروعك الخاص. ماذا تفعل أولًا؟"), options: [
      { text: l("Fix it immediately and add a test so it never returns", "أصلحها فورًا وأضيف اختبارًا فلا تعود أبدًا"), cat: "appsec" },
      { text: l("Document the risk, its likelihood and impact for the project plan", "أوثق الخطر واحتماله وأثره لخطة المشروع"), cat: "grc" },
      { text: l("Check whether anything suspicious already used it in the logs", "أفحص السجلات إن كان شيئ مشبوه استغلها فعلًا"), cat: "soc" },
      { text: l("Explore how far it could be chained with other weaknesses", "أستكشف مدى إمكانية ربطها بثغرات أخرى"), cat: "pentest" },
    ] },
    { q: l("Which environment sounds most comfortable to you?", "أي بيئة تبدو الأكثر راحة لك؟"), options: [
      { text: l("A cloud console with services, roles and automation templates", "وحدة تحكم سحابية بخدمات وأدوار وقوالب أتمتة"), cat: "cloud" },
      { text: l("A terminal with firewalls, routers and packet captures", "طرفية بجدران نارية وموجّهات والتقاط حِزم"), cat: "net" },
      { text: l("A directory of users, groups, roles and access policies", "دليل مستخدمين ومجموعات وأدوار وسياسات وصول"), cat: "net" },
      { text: l("A code editor next to a security testing tool", "محرر شيفرة بجوار أداة اختبار أمني"), cat: "appsec" },
    ] },
    { q: l("Your manager asks for a one-page explanation of a recent scare. You write it with…", "يطلب مديرك شرحًا من صفحة واحدة لذعر أمني حديث. تكتبه بـ…"), options: [
      { text: l("A clear narrative of events with evidence and recommendations", "سرد واضح للأحداث مع أدلة وتوصيات"), cat: "grc" },
      { text: l("Technical indicators other teams can detect against", "مؤشرات تقنية تستطيع الفرق الأخرى الكشف عنها"), cat: "ti" },
      { text: l("A timeline built from logs and disk artefacts", "خط زمني مبني من السجلات وآثار القرص"), cat: "dfir" },
      { text: l("Screenshots of the alerts and the investigation steps taken", "لقطات التنبيهات وخطوات التحقيق المنفذة"), cat: "soc" },
    ] },
    { q: l("Ten years from now, which description sounds most satisfying?", "بعد عشر سنوات، أي وصف يبدو الأكثر إرضاءً؟"), options: [
      { text: l("Leading a security operations team that stops attacks daily", "قيادة فريق عمليات أمنية يوقف الهجمات يوميًا"), cat: "soc" },
      { text: l("Being the trusted expert who tests and improves systems' security", "أن أكون الخبير الموثوق الذي يختبر ويحسّن أمن الأنظمة"), cat: "pentest" },
      { text: l("Architecting secure cloud environments at scale", "تصميم بيئات سحابية آمنة على نطاق واسع"), cat: "cloud" },
      { text: l("Researching new malware and publishing what the industry learns from it", "بحث البرمجيات الخبيثة الجديدة ونشر ما تتعلمه الصناعة منها"), cat: "ti" },
    ] },
  ],
};

/* ------------------------- Vocabulary ------------------------- */

export const careerTerms: Term[] = [
  { term: l("Security Operations Center (SOC)", "مركز العمليات الأمنية"), def: l("The team and facility that monitors an organization's security around the clock. Example: a SOC analyst confirms a break-in attempt at 03:00 and escalates it.", "الفريق والمرفق الذي يراقب أمن المؤسسة على مدار الساعة. مثال: محلل مركز عمليات يؤكد محاولة اقتحام الساعة الثالثة فجرًا ويصعّدها.") },
  { term: l("Blue Team", "الفريق الأزرق"), def: l("The defenders who detect, analyse and repel attacks. Example: the blue team tunes detection rules after a phishing campaign.", "المدافعون الذين يكشفون الهجمات ويحللونها ويصدّونها. مثال: الفريق الأزرق يضبط قواعد الكشف بعد حملة تصيّد.") },
  { term: l("Red Team", "الفريق الأحمر"), def: l("A team that simulates a full adversary campaign to test detection and response. Example: a red team spends two weeks emulating a criminal group without being detected.", "فريق يحاكي حملة خصم كاملة لاختبار الكشف والاستجابة. مثال: فريق أحمر يحاكي مجموعة إجرامية أسبوعين دون أن يُكتشف.") },
  { term: l("Purple Team", "الفريق البنفسجي"), def: l("Red and blue teams working together so attacks and defenses improve each other. Example: after a test, red and blue analysts review which detections failed and why.", "فرق حمراء وزرقاء تعمل معًا فيحسّن كل منهما الآخر. مثال: بعد اختبار يراجع محللو الفريقين أي الكشوفات فشل ولماذا.") },
  { term: l("Penetration Testing", "اختبار الاختراق"), def: l("Authorized, scoped simulation of an attack to prove weaknesses and their impact. Example: a tester proves a chain from a web flaw to stolen session data.", "محاكاة مصرّح بها ومحددة النطاق لهجوم لإثبات الثغرات وأثرها. مثال: مختبر يثبت سلسلة من ثغرة ويب إلى بيانات جلسة مسروقة.") },
  { term: l("Ethical Hacking", "الاختراق الأخلاقي"), def: l("Hacking skills used with permission and good intent. Example: an ethical hacker reports a flaw to a bank instead of exploiting it.", "استخدام مهارات الاختراق بإذن ونواة حسنة. مثال: مختبر أخلاقي يبلّغ بنكًا عن ثغرة بدل استغلالها.") },
  { term: l("Application Security (AppSec)", "أمن التطبيقات"), def: l("Securing software during design, development and operation. Example: an AppSec engineer adds a rule that catches unsafe queries before release.", "تأمين البرمجيات أثناء التصميم والتطوير والتشغيل. مثال: مهندس AppSec يضيف قاعدة تكشف الاستعلامات غير الآمنة قبل الإصدار.") },
  { term: l("DevSecOps", "DevSecOps"), def: l("Integrating security automatically into the development and delivery pipeline. Example: the pipeline blocks a release because a library has a known critical flaw.", "دمج الأمن تلقائيًا في خط التطوير والإصدار. مثال: الخط يوقف الإصدار لأن مكتبة فيها ثغرة حرجة معروفة.") },
  { term: l("Cloud Security", "أمن السحابة"), def: l("Securing cloud platforms: identities, networks, storage and configuration. Example: a posture check flags a public storage bucket.", "تأمين المنصات السحابية: الهويات والشبكات والتخزين والإعدادات. مثال: فحص وضع أمني يعلّم حاوية تخزين عامة.") },
  { term: l("Digital Forensics", "التحقيق الجنائي الرقمي"), def: l("Collecting and analysing digital evidence so findings are defensible. Example: disk analysis proves when the attacker first logged in.", "جمع الأدلة الرقمية وتحليلها بحيث تصمد النتائج. مثال: يثبت تحليل القرص وقت أول دخول للمهاجم.") },
  { term: l("Incident Response (IR)", "الاستجابة للحوادث"), def: l("The structured process of handling a live incident from detection to lessons learned. Example: the responder isolates the infected server within minutes.", "العملية المنظمة للتعامل مع حادثة جارية من الكشف إلى الدروس المستفادة. مثال: المستجيب يعزل الخادم المصاب خلال دقائق.") },
  { term: l("Threat Intelligence", "استخبارات التهديدات"), def: l("Analysed knowledge about attackers that defenders can act on. Example: a briefing about a ransomware group includes its indicators.", "معرفة محللة عن المهاجمين يمكن التصرف بها. مثال: إحاطة عن مجموعة فدية تتضمن مؤشراتها.") },
  { term: l("Threat Hunting", "صيد التهديدات"), def: l("Actively searching for hidden attackers rather than waiting for alerts. Example: a hunter looks for unusual scheduled tasks on all servers.", "البحث النشط عن مهاجمين مختبئين بدل انتظار التنبيهات. مثال: صيّاد يبحث عن مهام مجدولة غير معتادة في كل الخوادم.") },
  { term: l("Governance", "الحوكمة"), def: l("Setting security direction: policies, roles and responsibilities. Example: an approved policy says backups are tested monthly.", "وضع اتجاه الأمن: السياسات والأدوار والمسؤوليات. مثال: سياسة معتمدة تنص على اختبار النسخ شهريًا.") },
  { term: l("Risk Management", "إدارة المخاطر"), def: l("Identifying, assessing and treating risks systematically. Example: a risk register lists the top five risks with owners.", "تحديد المخاطر وتقييمها ومعالجتها بانتظام. مثال: سجل مخاطر يسرد أخطر خمسة مخاطر بمالكين.") },
  { term: l("Compliance", "الامتثال"), def: l("Meeting requirements of laws, standards and contracts. Example: passing a PCI DSS audit for card payments.", "استيفاء متطلبات القوانين والمعايير والعقود. مثال: اجتياز تدقيق PCI DSS لمدفوعات البطاقات.") },
  { term: l("Identity and Access Management (IAM)", "إدارة الهوية والوصول"), def: l("Managing who exists digitally, what they may reach, and when. Example: a leaver's accounts close automatically the same day.", "إدارة من يوجد رقميًا وما قد يصل إليه ومتى. مثال: حسابات مغادر تُغلق تلقائيًا في اليوم نفسه.") },
  { term: l("Security Engineering", "الهندسة الأمنية"), def: l("Building and operating the security systems themselves. Example: an engineer deploys an email security gateway.", "بناء وتشغيل الأنظمة الأمنية ذاتها. مثال: مهندس ينشر بوابة أمن بريد.") },
  { term: l("Vulnerability Assessment", "تقييم الثغرات"), def: l("Systematically identifying and rating weaknesses, without full exploitation. Example: a scan report lists an outdated web server as high risk.", "تحديد الثغرات وتصنيفها بشكل منهجي دون استغلال كامل. مثال: تقرير مسح يسرد خادم ويب قديمًا بخطر عالٍ.") },
  { term: l("Detection Engineering", "هندسة الكشف"), def: l("Turning attacker techniques into reliable detection rules. Example: a new ATT&CK technique becomes a tested SIEM rule.", "تحويل تقنيات المهاجمين إلى قواعد كشف موثوقة. مثال: تقنية ATT&CK جديدة تصبح قاعدة SIEM مختبرة.") },
  { term: l("Security Architecture", "المعمارية الأمنية"), def: l("Designing systems so security is built in from the start. Example: an architect places the database in a segmented zone.", "تصميم الأنظمة بحيث يكون الأمن مدمجًا منذ البداية. مثال: معماري يضع قاعدة البيانات في منطقة مقسمة.") },
  { term: l("Malware Analysis", "تحليل البرمجيات الخبيثة"), def: l("Safely dissecting malicious software to understand and stop it. Example: sandbox analysis reveals the malware's command-and-control domain.", "تشريح البرمجيات الخبيثة بأمان لفهمها ووقفها. مثال: يكشف تحليل صندوق الحماية نطاق التحكم والسيطرة للخبيث.") },
  { term: l("Reverse Engineering", "الهندسة العكسية"), def: l("Reconstructing how software works from its binary, without source. Example: disassembling a loader reveals its persistence trick.", "إعادة بناء كيفية عمل البرمجيات من ملفها الثنائي دون شيفرة المصدر. مثال: تفكيك محمّل يكشف حيلة استمراريته.") },
  { term: l("Security Analyst", "محلل أمني"), def: l("A professional who analyses security events, risks or findings. Example: an analyst reviews why an alert fired.", "محترف يحلل الأحداث الأمنية أو المخاطر أو النتائج. مثال: محلل يراجع سبب إطلاق تنبيه.") },
  { term: l("Security Engineer", "مهندس أمني"), def: l("A professional who builds, configures and integrates security systems. Example: an engineer integrates a new SIEM data source.", "محترف يبني الأنظمة الأمنية ويضبطها ويدمجها. مثال: مهندس يدمج مصدر بيانات SIEM جديدًا.") },
  { term: l("Security Consultant", "مستشار أمني"), def: l("An external or internal advisor who assesses and guides. Example: a consultant reviews a client's cloud setup and writes recommendations.", "مستشار خارجي أو داخلي يقيّم ويوجّه. مثال: مستشار يراجع إعداد السحابة لعميل ويكتب توصيات.") },
  { term: l("Security Auditor", "مدقق أمني"), def: l("A professional who independently checks controls against requirements. Example: an auditor verifies MFA is really enforced for admins.", "محترف يتحقق مستقلًا من الضوابط مقابل المتطلبات. مثال: مدقق يتحقق أن MFA مفروض فعلًا على المديرين.") },
  { term: l("Security Researcher", "باحث أمني"), def: l("A professional who discovers new weaknesses, techniques or malware and publishes knowledge. Example: a researcher documents a new attack technique.", "محترف يكتشف ثغرات أو تقنيات أو برمجيات خبيثة جديدة وينشر المعرفة. مثال: باحث يوثق تقنية هجوم جديدة.") },
  { term: l("Security Operations", "عمليات أمنية"), def: l("The running day-to-day practice of defending: monitoring, responding, maintaining. Example: the operations team closes 40 tickets this week.", "الممارسة اليومية الجارية للدفاع: مراقبة واستجابة وصيانة. مثال: فريق العمليات يغلق أربعين تذكرة هذا الأسبوع.") },
  { term: l("Security Posture", "الوضع الأمني"), def: l("The overall strength and readiness of an organization's security. Example: posture improves after MFA rollout and patching.", "القوة والاستعداد العام لأمن المؤسسة. مثال: يتحسن الوضع بعد طرح MFA والتحديثات.") },
  { term: l("SIEM", "SIEM"), def: l("Security Information and Event Management: a platform that centralizes and correlates security events. Example: the SIEM correlates failed logins across five servers.", "منصة تجمع أحداث الأمن وتربطها. مثال: يربط SIEM محاولات الدخول الفاشلة عبر خمسة خوادم.") },
  { term: l("Chain of Custody", "سلسلة العهدة"), def: l("The documented record of who handled evidence, when and why. Example: every transfer of a disk image is signed and logged.", "السجل الموثق لمن تناول الدليل ومتى ولماذا. مثال: كل نقل لصورة قرص يُوقَّع ويُسجَّل.") },
  { term: l("Indicator of Compromise (IOC)", "مؤشر الاختراق"), def: l("A concrete signal that a compromise occurred: a hash, domain or IP. Example: a malicious file hash is blocked on all endpoints.", "إشارة ملموسة على حدوث اختراق: بصمة أو نطاق أو عنوان IP. مثال: تُحجب بصمة ملف خبيث على كل الأجهزة.") },
  { term: l("TTPs", "التكتيكات والتقنيات والإجراءات"), def: l("Tactics, Techniques and Procedures: the reusable patterns of an attacker's behaviour. Example: a group's TTP of spear-phishing then living-off-the-land tools.", "الأنماط القابلة لإعادة الاستخدام لسلوك المهاجم. مثال: TTPs لمجموعة: تصيّد موجّه ثم أدوات النظام المدمجة.") },
  { term: l("Privileged Access Management (PAM)", "إدارة الوصول المميز"), def: l("Special control over powerful accounts: vaulting, approval and recording. Example: admin sessions are brokered and recorded.", "ضبط خاص للحسابات القوية: خزنة وموافقة وتسجيل. مثال: جلسات المديرين تمر عبر وسيط وتُسجَّل.") },
  { term: l("Single Sign-On (SSO)", "تسجيل الدخول الموحد"), def: l("One login that grants access to many applications. Example: staff log in once and reach mail, files and HR tools.", "دخول واحد يمنح الوصول إلى تطبيقات كثيرة. مثال: الموظفون يدخلون مرة فيصلون إلى البريد والملفات وأدوات الموارد البشرية.") },
];

/* ------------------------- Objectives, references and exports ------------------------- */

export const careerObjectives: L[] = [
  l("Identify the main cybersecurity career tracks and describe what professionals in each actually do.", "تحديد المسارات المهنية الرئيسية في الأمن السيبراني ووصف ما يفعله المحترفون في كل مسار فعلًا."),
  l("Match job titles, tools and scenarios to the right specialization and draft your own learning roadmap.", "ربط المسميات والأدوات والسيناريوهات بالتخصص الصحيح وصياغة خارطة تعلمك الشخصية."),
];

export const careerRefs: Ref[] = [
  { title: "NICE Workforce Framework for Cybersecurity", org: "NIST", url: "https://www.nist.gov/itl/applied-cybersecurity/nice", desc: l("The official US framework describing categories of cybersecurity work. Beginner-friendly: browse its work roles to see how the tracks above map to national standards.", "الإطار الرسمي الأمريكي الذي يصف فئات العمل في الأمن السيبراني. مناسب للمبتدئين: تصفّح أدواره لترى كيف تقابل المسارات أعلاه معايير وطنية.") },
  { title: "NIST SP 800-61 — Computer Security Incident Handling Guide", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final", desc: l("The reference incident response methodology. Connects to the SOC and DFIR tracks; readable for beginners in its overview chapters.", "منهجية الاستجابة للحوادث المرجعية. ترتبط بمساري مركز العمليات وDFIR؛ وقابلة للقراءة للمبتدئين في فصولها التمهيدية.") },
  { title: "MITRE ATT&CK knowledge base", org: "MITRE", url: "https://attack.mitre.org/", desc: l("The shared catalogue of attacker tactics and techniques. Essential for SOC, threat intelligence and threat hunting; beginner-friendly overview pages included.", "الكتالوج المشترك لتكتيكات المهاجمين وتقنياتهم. أساسي لمسارات مركز العمليات واستخبارات التهديدات والصيد؛ ويتضمن صفحات تمهيدية مناسبة للمبتدئين.") },
  { title: "OWASP Top 10", org: "OWASP", url: "https://owasp.org/Top10/", desc: l("The most common web application vulnerabilities. The core knowledge base of the AppSec track; beginner-friendly with examples.", "أكثر ثغرات تطبيقات الويب شيوعًا. قاعدة المعرفة الجوهرية لمسار AppSec؛ مناسبة للمبتدئين مع أمثلة.") },
  { title: "PortSwigger Web Security Academy", org: "PortSwigger", url: "https://portswigger.net/web-security", desc: l("Free interactive labs on web vulnerabilities. Serves AppSec and penetration testing; starts from zero and scales to advanced.", "مختبرات تفاعلية مجانية عن ثغرات الويب. تخدم مساري AppSec واختبار الاختراق؛ تبدأ من الصفر وتمتد إلى المتقدم.") },
  { title: "Wazuh documentation", org: "Wazuh", url: "https://documentation.wazuh.com/current/", desc: l("Free open-source SIEM platform with a step-by-step quickstart. Ideal beginner home lab for the SOC track.", "منصة SIEM مفتوحة المصدر مجانية مع دليل بدء خطوة بخطوة. مختبر منزلي مثالي للمبتدئين لمسار مركز العمليات.") },
  { title: "Splunk documentation", org: "Splunk", url: "https://docs.splunk.com/", desc: l("Official documentation for the widely used commercial SIEM. Connects to the SOC track; suitable once you know the basics.", "التوثيق الرسمي لمنصة SIEM التجارية الواسعة الاستخدام. ترتبط بمسار مركز العمليات؛ مناسبة بعد إدراك الأساسيات.") },
  { title: "Microsoft Learn — security training", org: "Microsoft", url: "https://learn.microsoft.com/en-us/training/", desc: l("Free official training paths including security, identity and cloud. Serves cloud security, IAM and SOC tracks; beginner-friendly.", "مسارات تدريب رسمية مجانية تشمل الأمن والهوية والسحابة. تخدم مسارات أمن السحابة وIAM ومركز العمليات؛ مناسبة للمبتدئين.") },
  { title: "AWS documentation", org: "Amazon", url: "https://docs.aws.amazon.com/", desc: l("Official AWS documentation including its security services. Connects to the cloud security track; beginners should start with the fundamentals guides.", "توثيق AWS الرسمي بما فيه خدماته الأمنية. يرتبط بمسار أمن السحابة؛ وعلى المبتدئين البدء بأدلة الأساسيات.") },
  { title: "Google Cloud security", org: "Google", url: "https://cloud.google.com/security", desc: l("Google Cloud's official security overview and products. Connects to the cloud security track; beginner-friendly introductions included.", "النظرة الرسمية لمنتجات الأمن في Google Cloud. يرتبط بمسار أمن السحابة؛ ويشمل مقدمات مناسبة للمبتدئين.") },
  { title: "CIS Controls", org: "Center for Internet Security", url: "https://www.cisecurity.org/controls", desc: l("A prioritized list of essential safeguards. Core reference for the GRC track and useful for every defender; beginner-friendly.", "قائمة مرتبة الأولويات بالضوابط الجوهرية. مرجع أساسي لمسار GRC ونافعة لكل مدافع؛ مناسبة للمبتدئين.") },
  { title: "Ghidra", org: "NSA", url: "https://ghidra-sre.org/", desc: l("Free official reverse-engineering tool of the malware analysis track. Advanced learners — start after strong fundamentals.", "أداة الهندسة العكسية الرسمية المجانية لمسار تحليل البرمجيات الخبيثة. للمتعلمين المتقدمين — ابدأ بعد أساسات قوية.") },
  { title: "Autopsy", org: "Autopsy", url: "https://www.autopsy.com/", desc: l("Free digital forensics platform for disk analysis. Serves the DFIR track; a good beginner-to-intermediate lab tool.", "منصة تحقيق جنائي رقمي مجانية لتحليل الأقراص. تخدم مسار DFIR؛ أداة مختبر جيدة من المبتدئ إلى المتوسط.") },
  { title: "VirusTotal", org: "Google", url: "https://www.virustotal.com/", desc: l("Free service for checking files, hashes and URLs against many engines. Entry-level tool for threat intelligence and SOC.", "خدمة مجانية لفحص الملفات والبصمات والروابط بمحركات عديدة. أداة تمهيدية لمساري استخبارات التهديدات ومركز العمليات.") },
];

export const careerSections: Section[] = [
  introSection,
  track1,
  track2,
  track3,
  track4,
  track5,
  track6,
  track7,
  track8,
  track9,
  track10,
  extraAreas,
  comparison,
  comparisonB,
  collaboration,
  progression,
  academy,
  activities,
  whichSuits,
];

export { careerQuiz };

