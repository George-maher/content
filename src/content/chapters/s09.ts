import { l, type Session } from "../types";

export const s09: Session = {
  id: 9,
  phase: 3,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Network Security: Firewalls, IDS/IPS, Segmentation & VPNs",
    "أمن الشبكات: الجدران النارية وكشف/منع التسلل والتقسيم وVPN",
  ),
  summary: l(
    "How to control and monitor traffic across a network: firewall types and rule logic, DMZs and segmentation, IDS versus IPS, VPNs, secure Wi-Fi and the zero-trust mindset — and how to evaluate a firewall rule set.",
    "كيف نتحكم بالحركة ونراقبها عبر الشبكة: أنواع الجدران النارية ومنطق القواعد، والمنطقة المنزوعة والتقسيم، وIDS مقابل IPS، وVPN، والواي فاي الآمن، وتفكير انعدام الثقة — وكيف تُقيِّم مجموعة قواعد جدار ناري.",
  ),
  overview: l(
    "Networks carry the traffic that security must control. This session covers the core controls that sit at network boundaries and inside them. You will learn the three types of firewall — packet filtering, stateful and next-generation — and the principle that rules are evaluated in order with first match winning. You will explore DMZs and internal segmentation as ways to contain a breach, and IDS versus IPS as the monitors that detect and (sometimes) block. You will cover VPNs and secure Wi-Fi, and the zero-trust mindset that never trusts a device just because it is on the internal network. The session closes with a lab in which you repair a firewall rule set so only intended traffic passes.",
    "تحمل الشبكات الحركة التي يجب على الأمن التحكم فيها. وتغطي هذه الجلسة الضوابط الأساسية التي تقع عند حدود الشبكة وداخلها. ستتعلم الأنواع الثلاثة للجدران النارية — مرشّح الحزم وذو الحالة والجيل التالي — ومبدأ أن القواعد تُقيَّم بالترتيب وأول تطابق يُطبَّق. وستستكشف المناطق المنزوعة والتقسيم الداخلي كطريقتين لحصر الاختراق، وIDS مقابل IPS كالمراقبين الذين يكشفون (ويحظرون أحيانًا). وستتناول VPN والواي فاي الآمن، وتفكير انعدام الثقة الذي لا يثق بجهاز لمجرد وجوده في الشبكة الداخلية. وتنتهي الجلسة بمختبر تصلح فيه مجموعة قواعد جدار ناري بحيث تمرّ الحركة المقصودة فقط.",
  ),
  whyItMatters: l(
    "Every organization that connects to the Internet depends on these controls. Firewalls decide what may pass; segmentation decides how far an attacker can go; IDS/IPS spot and stop suspicious activity; VPNs protect remote and inter-site traffic; and secure Wi-Fi protects the wireless edge. Understanding them lets you design a defensible network, interpret an alert, and reason about why a breach spread or was contained. These are also the foundations on which later sessions on web, identity, vulnerability and monitoring build.",
    "تعتمد كل منظمة تتصل بالإنترنت على هذه الضوابط. فالجدران النارية تقرر ما يُسمح بالمرور؛ والتقسيم يقرر مدى تقدم المهاجم؛ وIDS/IPS يكتشف النشاط المشبوه ويوقفه؛ وVPN تحمي حركة الوصول البعيد وحركة المواقع؛ والواي فاي الآمن يحمي الحافة اللاسلكية. ويُمكّنك فهمها من تصميم شبكة قابلة للدفاع، وتفسير التنبيه، والتفكير في سبب انتشار الاختراق أو حصرته. وهي أيضًا الأساسات التي تُبنى عليها الجلسات اللاحقة في الويب والهوية والثغرات والمراقبة.",
  ),
  prerequisites: [
    l(
      "Session 7, Networking Fundamentals I: IP addressing, subnetting and the default gateway.",
      "الجلسة 7، أساسيات الشبكات 1: عنونة IP وتقسيم الشبكات والبوابة الافتراضية.",
    ),
    l(
      "Session 8, Networking Fundamentals II: TCP/UDP, ports and the services these controls filter.",
      "الجلسة 8، أساسيات الشبكات 2: TCP/UDP والمنافذ والخدمات التي تصفيها هذه الضوابط.",
    ),
    l(
      "A legal and ethical mindset: configure and test security controls only on networks you own or are authorized to manage.",
      "عقلية قانونية وأخلاقية: تكوين واختبار ضوابط الأمان فقط على الشبكات التي تملكها أو لديك إذن بإدارتها.",
    ),
  ],
  objectives: [
    l(
      "Explain packet-filter, stateful and next-generation firewalls and their differences.",
      "شرح الجدران النارية بمرشّح الحزم وذات الحالة والجيل التالي وفوارقها.",
    ),
    l(
      "Write and order firewall rules following default-deny and least privilege.",
      "كتابة قواعد الجدار الناري وترتيبها وفق المنع الافتراضي وأقل صلاحية.",
    ),
    l(
      "Differentiate IDS from IPS and signature from anomaly detection.",
      "التمييز بين IDS وIPS وبين الكشف بالتواقيع والكشف بالشذوذ.",
    ),
    l(
      "Describe DMZ, VLAN segmentation, VPN types and secure Wi-Fi settings.",
      "وصف المنطقة المنزوعة وتقسيم VLAN وأنواع VPN وإعدادات الواي فاي الآمنة.",
    ),
    l(
      "Explain the zero-trust mindset and how it changes network design.",
      "شرح تفكير انعدام الثقة وكيف يغيّر تصميم الشبكة.",
    ),
    l(
      "Evaluate a firewall rule set and identify over-exposed or mis-ordered rules.",
      "تقييم مجموعة قواعد جدار ناري وتحديد القواعد المكشوفة أكثر من اللازم أو المرتبة خطأ.",
    ),
  ],
  agenda: [
    { label: l("Welcome, overview and prior-knowledge check", "الترحيب والنظرة العامة والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Firewall types", "أنواع الجدران النارية"), minutes: 15 },
    { label: l("Firewall rule logic", "منطق قواعد الجدار الناري"), minutes: 12 },
    { label: l("DMZ and the perimeter", "المنطقة المنزوعة والحد المحيطي"), minutes: 12 },
    { label: l("Internal segmentation and VLANs", "التقسيم الداخلي وVLAN"), minutes: 12 },
    { label: l("IDS and IPS", "IDS وIPS"), minutes: 10 },
    { label: l("VPNs, secure Wi-Fi and zero trust", "VPN والواي فاي الآمن وانعدام الثقة"), minutes: 12 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 12 },
  ],
  introduction: l(
    "Sessions 7 and 8 explained how networks are built and how traffic flows. This session turns to defending that flow. You will learn the firewall types and the logic of their rules, the principle of default deny and least privilege, and how rule order decides what actually passes. You will see how DMZs and internal segmentation contain a breach, and how IDS and IPS differ in whether they only detect or also block. You will cover VPNs for remote and site-to-site traffic, secure Wi-Fi settings, and the zero-trust mindset. The session closes with a practical lab in which you repair a mis-configured firewall rule set, applying everything you have learned.",
    "شرحت الجلستان 7 و8 كيف تُبنى الشبكات وكيف تتدفق الحركة. وتنتقل هذه الجلسة إلى دفاع هذا التدفق. ستتعلم أنواع الجدران النارية ومنطق قواعدها، ومبدأ المنع الافتراضي وأقل صلاحية، وكيف يقرر ترتيب القواعد ما يُسمح بالمرور فعليًا. وسترى كيف تحصر المناطق المنزوعة والتقسيم الداخلي الاختراق، وكيف يختلف IDS وIPS في كونهما يكتشفان فقط أو يحظران أيضًا. وستتناول VPN لحركة الوصول البعيد وحركة المواقع، وإعدادات الواي فاي الآمن، وتفكير انعدام الثقة. وتنتهي الجلسة بمختبر عملي تصلح فيه مجموعة قواعد جدار ناري غير مضبوطة، مطبّقًا كل ما تعلمته.",
  ),
  sections: [
    {
      h: l("1. Firewall types", "1. أنواع الجدران النارية"),
      p: [
        l("A firewall enforces which traffic may pass between network zones. A packet-filtering firewall checks each packet's source, destination, protocol and port. A stateful firewall also remembers established connections, so reply traffic is allowed automatically and unsolicited inbound traffic is dropped. A next-generation firewall (NGFW) adds application awareness, user identity, intrusion prevention and TLS inspection. A web application firewall (WAF) specifically protects web applications from attacks such as SQL injection.", "يفرض الجدار الناري الحركة المسموح لها بالمرور بين مناطق الشبكة. فالجدران بمرشّح الحزم تفحص مصدر كل حزمة ووجهتها وبروتوكولها ومنفذها. والجدران ذات الحالة تتذكر أيضًا الاتصالات القائمة فيسمح تلقائيًا بحركة الرد ويُسقط الحركة الواردة غير المطلوبة. وجدار الجيل التالي (NGFW) يضيف إدراك التطبيقات وهوية المستخدم ومنع التسلل وفحص TLS. أما جدار تطبيقات الويب (WAF) فيحمي تطبيقات الويب تحديدًا من هجمات مثل حقن SQL."),
        l("The progression matters: a packet filter is fast but blind to connection context, a stateful firewall understands connection state, and an NGFW understands applications and identities. Choosing the right type is a balance between how much a device can see and how much overhead and complexity it adds.", "يهم التدرج هنا: فمرشّح الحزم سريع لكنه أعمى عن سياق الاتصال، والجدار ذو الحالة يفهم حالة الاتصال، وجدار الجيل التالي يفهم التطبيقات والهويات. واختيار النوع المناسب هو توازن بين ما يمكن للجهاز رؤيته وما يضيفه من تعقيد."),
      ],
    },
    {
      h: l("2. Firewall rule logic", "2. منطق قواعد الجدار الناري"),
      p: [
        l("Rules are evaluated top to bottom and the first match wins, so order matters. The golden principles are: default deny (a final rule that blocks everything not explicitly allowed), least privilege (allow only the specific source, destination and port needed), logging of denied and sensitive traffic, and regular review to remove stale rules — old 'temporary' rules are a major source of exposure.", "تُقيَّم القواعد من الأعلى إلى الأسفل وأول تطابق يُطبَّق، لذا فالترتيب مهم. والمبادئ الذهبية: المنع افتراضيًا (قاعدة أخيرة تحجب كل ما لم يُسمح به صراحة)، وأقل صلاحية (السماح بالمصدر والوجهة والمنفذ المحددة اللازمة فقط)، وتسجيل الحركة المحجوبة والحساسة، ومراجعة دورية لإزالة القواعد القديمة — فالقواعد «المؤقتة» القديمة مصدر رئيسي للانكشاف."),
      ],
      callout: {
        kind: "warn",
        text: l("A firewall cannot stop what it is allowed to see as legitimate: a phishing link over allowed HTTPS passes straight through. Firewalls are one layer, not the whole defence.", "لا يستطيع الجدار الناري إيقاف ما يراه مشروعًا: فرابط تصيّد عبر HTTPS مسموح يمر مباشرة. الجدار طبقة واحدة وليس الدفاع كله."),
      },
    },
    {
      h: l("3. DMZ and the perimeter", "3. المنطقة المنزوعة والحد المحيطي"),
      p: [
        l("A DMZ (demilitarised zone) is a separate network segment for servers that must be reachable from the Internet, such as web, mail and reverse proxy servers. Two firewall policies guard it: the Internet may reach only specific DMZ services, and the DMZ may not freely initiate connections into the internal network. If a public server in the DMZ is compromised, the attacker is still outside the internal LAN.", "المنطقة المنزوعة (DMZ) قطاع شبكة منفصل للخوادم التي يجب أن تكون متاحة من الإنترنت، مثل خوادم الويب والبريد والوكيل العكسي. وتحرسها سياستان للجدار الناري: يصل الإنترنت إلى خدمات محددة في المنطقة فقط، ولا يحق للمنطقة بدء اتصالات بحرية نحو الشبكة الداخلية. وإذا اخترق خادم عام في المنطقة يبقى المهاجم خارج الشبكة الداخلية."),
      ],
    },
    {
      h: l("4. Internal segmentation and VLANs", "4. التقسيم الداخلي وVLAN"),
      p: [
        l("Internal segmentation with VLANs and subnets separates staff, servers, guests, printers and IoT, with firewall rules between segments. It limits lateral movement: ransomware that infects one office PC cannot automatically reach the database or the backup server. Micro-segmentation applies the same idea down to individual workloads, so each service can be isolated and access strictly controlled.", "يفصل التقسيم الداخلي بـ VLAN والشبكات الفرعية الموظفين والخوادم والضيوف والطابعات وأجهزة إنترنت الأشياء، مع قواعد جدار ناري بين القطاعات. وهو يحد من الحركة الجانبية: فالبرمجية الفدية التي تصيب حاسوبًا مكتبيًا لا تصل تلقائيًا إلى قاعدة البيانات أو خادم النسخ الاحتياطي. ويطبق التقسيم الدقيق الفكرة نفسها على مستوى أحمال العمل الفردية، فيُعزل كل خدمة ويُضبط الوصول إليها بصرامة."),
      ],
    },
    {
      h: l("5. IDS and IPS", "5. IDS وIPS"),
      p: [
        l("An Intrusion Detection System (IDS) monitors traffic or hosts and raises alerts; an Intrusion Prevention System (IPS) sits in-line and can also block. Network-based (NIDS/NIPS) look at traffic; host-based (HIDS) watch files, processes and logs on a machine. The key difference is that IDS detects and alerts, while IPS also prevents by blocking in-line.", "يراقب نظام كشف التسلل (IDS) الحركة أو الأجهزة ويصدر تنبيهات؛ أما نظام منع التسلل (IPS) فيوضع على المسار ويستطيع الحجب أيضًا. ومنها ما هو شبكي (NIDS/NIPS) يفحص الحركة ومنها ما هو على الجهاز (HIDS) يراقب الملفات والعمليات والسجلات. والفرق الرئيس هو أن IDS يكشف وينبّه، بينما IPS يمنع أيضًا بالحجب على المسار."),
      ],
    },
    {
      h: l("6. Detection methods: signature vs anomaly", "6. أساليب الكشف: التواقيع مقابل الشذوذ"),
      p: [
        l("Signature-based detection matches known bad patterns — precise but blind to new attacks. Anomaly-based detection learns normal behaviour and flags deviations — it finds novel attacks but produces more false positives. Tuning is essential: a false positive is a harmless event flagged as an attack (wasting analyst time), while a false negative is a real attack that is missed (far worse).", "الكشف بالتواقيع يطابق أنماطًا خبيثة معروفة — دقيق لكنه أعمى عن الهجمات الجديدة. والكشف بالشذوذ يتعلم السلوك الطبيعي ويبلغ عن الانحرافات — يجد الهجمات الجديدة لكنه ينتج إنذارات كاذبة أكثر. والضبط ضروري: فإيجابي كاذب حدث غير ضار صُنّف هجومًا (إهدار لوقت المحلل)، بينما سلبي كاذب هجوم حقيقي لم يُكتشف (أسوأ بكثير)."),
        l("IDS/IPS alerts feed the monitoring and incident-response process covered in Sessions 16 and 17. The goal of detection is to surface activity that deserves attention so it can be investigated and, where prevention is in place, stopped before harm is done.", "تغذي تنبيهات IDS/IPS عملية المراقبة والاستجابة للحوادث التي تغطيها الجلستان 16 و17. وهدف الكشف هو إظهار النشاط الذي يستحق الاهتمام بحيث يمكن التحقيق فيه، وحيثما توجد منع يُوقف قبل أن يقع الضرر."),
      ],
    },
    {
      h: l("7. VPNs and secure remote access", "7. VPN والوصول البعيد الآمن"),
      p: [
        l("A VPN creates an encrypted tunnel across an untrusted network. Remote-access VPNs connect a single user to the company network; site-to-site VPNs (often IPsec) link two offices. Protocols include IPsec, OpenVPN and WireGuard. A VPN protects traffic in transit and authenticates users, but it also extends the corporate network to the user's device, so VPN access must require MFA and healthy, patched devices.", "تنشئ الشبكة الافتراضية الخاصة (VPN) نفقًا مشفّرًا عبر شبكة غير موثوقة. فشبكات الوصول البعيد تربط مستخدمًا واحدًا بشبكة الشركة، وشبكات الموقع-إلى-الموقع (غالبًا IPsec) تربط مكتبين. ومن البروتوكولات IPsec وOpenVPN وWireGuard. وتحمي VPN الحركة أثناء النقل وتصادق المستخدمين، لكنها تمدّ شبكة الشركة إلى جهاز المستخدم، لذا يجب اشتراط المصادقة متعددة العوامل والأجهزة السليمة المحدّثة."),
        l("Consumer 'privacy' VPNs only move trust from your local network to the VPN provider — they protect traffic in transit but do not by themselves make a device or identity secure. A VPN is a transport protection, not a complete access control.", "أما VPN «الخصوصية» الاستهلاكية فتنقل الثقة فقط من شبكتك المحلية إلى مزوّد الخدمة — فهي تحمي الحركة أثناء النقل لكنها لا تجعل الجهاز أو الهوية آمنة بذاتها. وVPN حماية نقل، وليس تحكمًا في الوصول متكاملًا."),
      ],
    },
    {
      h: l("8. Secure Wi-Fi and zero trust", "8. الواي فاي الآمن وانعدام الثقة"),
      p: [
        l("For Wi-Fi use WPA3 (or WPA2-AES) with a long passphrase, disable WPS, change default router credentials, keep firmware updated and put guests on a separate SSID/VLAN. Open or WEP networks offer no meaningful protection. Securing the wireless edge matters because Wi-Fi is often the first place an attacker can reach a network.", "للواي فاي استخدم WPA3 (أو WPA2-AES) بعبارة مرور طويلة، وعطّل WPS، وغيّر بيانات دخول الموجّه الافتراضية، وحدّث البرمجية الثابتة، وضع الضيوف في شبكة SSID/VLAN منفصلة. والشبكات المفتوحة أو WEP لا توفر حماية ذات معنى. وتهم حماية الحافة اللاسلكية لأن الواي فاي كثيرًا ما يكون أول مكان يمكن للمهاجم من خلاله الوصول إلى الشبكة."),
        l("The zero-trust idea goes further: never trust a device just because it is on the internal network — verify identity, device health and permission for every request. Zero trust reframes network design around continuous verification rather than the older assumption that being inside the network means being trusted.", "وتذهب فكرة انعدام الثقة أبعد: لا تثق بجهاز لمجرد وجوده في الشبكة الداخلية — تحقق من الهوية وسلامة الجهاز والصلاحية لكل طلب. ويعيد انعدام الثقة تصميم الشبكة حول التحقق المستمر بدل الافتراض القديم أن الوجود داخل الشبكة يعني الثقة."),
      ],
    },
  ],
  examples: [
    l(
      "A stateful firewall rule allows inbound TCP 443 from the Internet to a DMZ web server. Because it is stateful, the reply from the server to the client is automatically permitted, but an unsolicited inbound SSH connection is dropped.",
      "تسمح قاعدة جدار ناري ذي حالة بدخول TCP 443 من الإنترنت إلى خادم ويب في DMZ. وبسبب كونه ذا حالة يُسمح تلقائيًا برد الخادم إلى العميل، لكن الاتصال الوارد غير المطلوب عبر SSH يُسقط.",
    ),
    l(
      "A bad rule set might have an 'allow any' rule placed above a 'deny SSH from Internet' rule. Because first match wins, the broad allow matches first and the SSH traffic is allowed, defeating the later deny.",
      "قد تحتوي مجموعة قواعد سيئة على قاعدة «allow any» فوق قاعدة «deny SSH من الإنترنت». وبما أن أول تطابق يُطبَّق فإن السماح العام يطابق أولًا ويُسمح بحركة SSH، مما يبطل المنع اللاحق.",
    ),
    l(
      "A guest Wi-Fi with WPA2-AES, a strong passphrase, WPS disabled, and a separate VLAN with no route to the internal staff network protects the wireless edge and contains a compromised guest device.",
      "يحمي واي فاي الضيوف المزود بـ WPA2-AES وعبارة مرور قوية وWPS المعطل وVLAN منفصل دون مسار إلى شبكة الموظفين الداخلية الحافة اللاسلكية، ويحصر أي جهاز ضيف مخترق.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A company hosts a public web server. It is placed in a DMZ so that Internet users can reach port 443, but the DMZ cannot freely initiate connections into the internal network. If the web server is compromised, the attacker remains in the DMZ, behind a second firewall from the internal LAN.",
      "تُستضيف شركة خادم ويب عام. ويُوضع في DMZ حتى يصل مستخدمو الإنترنت إلى المنفذ 443، لكن لا يمكن للمنطقة بدء اتصالات بحرية نحو الشبكة الداخلية. وإذا اخترق خادم الويب يبقى المهاجم في المنطقة، خلف جدار ناري ثاني عن الشبكة الداخلية.",
    ),
    l(
      "Ransomware infects one staff PC on a flat network. Because there is no segmentation, it spreads to the database and backup server. If the network were segmented with firewall rules between VLANs, the spread would be blocked, limiting the damage.",
      "تُصيب برمجية فدية حاسوب موظف واحد في شبكة مسطحة. ولأن لا يوجد تقسيم تنتشر إلى قاعدة البيانات وخادم النسخ الاحتياطي. ولو كانت الشبكة مقسّمة بقواعد جدار ناري بين VLAN لَحُصِر الانتشار وانحصر الضرر.",
    ),
    l(
      "A remote employee connects via a VPN that requires MFA and a patched device. Even if their traffic is on an untrusted home network, the tunnel is encrypted and the user is authenticated. A VPN without MFA would let anyone with the credentials into the corporate network.",
      "يتصل موظف بعيد عبر VPN يتطلب المصادقة متعددة العوامل وجهازًا محدّثًا. وحتى لو كانت حركتهم على شبكة منزلية غير موثوقة، يظل النفق مشفّرًا والمستخدم مصادقًا. وVPN دون المصادقة متعددة العوامل يسمح لأي شخص لديه بيانات الدخول بالدخول إلى شبكة الشركة.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("Zoned network — Internet → firewall → DMZ → internal zones", "شبكة مقسّمة إلى مناطق – الإنترنت ← جدار ناري ← DMZ ← مناطق داخلية"),
    caption: l(
      "Traffic crosses a firewall at every zone boundary. Only specific flows are allowed (for example Internet→DMZ:443 and DMZ→DB:3306); everything else is denied and logged.",
      "تعبر الحركة جدارًا ناريًا عند كل حد بين المناطق. تُسمح تدفقات محددة فقط (مثل الإنترنت←DMZ:443 والمنطقة←قاعدة البيانات:3306) وما عداها يُمنع ويُسجَّل.",
    ),
    nodes: [
      { label: l("Internet", "الإنترنت"), desc: l("Untrusted", "غير موثوقة") },
      { label: l("Perimeter firewall + IPS", "جدار ناري محيطي + IPS"), desc: l("Default deny, inspect, log", "منع افتراضي وفحص وتسجيل") },
      { label: l("DMZ", "المنطقة المنزوعة"), desc: l("Web, mail, reverse proxy", "ويب وبريد ووكيل عكسي") },
      { label: l("Internal firewall", "جدار ناري داخلي"), desc: l("Segment-to-segment rules", "قواعد بين القطاعات") },
      { label: l("Internal zones", "المناطق الداخلية"), desc: l("Staff · Servers · Backup · IoT", "الموظفون · الخوادم · النسخ · IoT") },
    ],
  },
  instructorDemo: l(
    "Demonstrate firewall rule evaluation with the companion firewall simulator. Show a simple rule set and play it: place a broad 'allow any' rule above a specific deny and observe the specific deny never triggers because first match wins. Then reorder the rules with specific allow rules first and a final 'deny any', and show that only intended traffic passes. Explain default deny, least privilege and logging. Do this in the simulator only — do not change any real firewall or network.",
    "عرض تقييم قواعد الجدار الناري بمحاكي الجدار الناري المرافق. واعرض مجموعة قواعد بسيطة وشغّلها: ضع قاعدة سماح عام فوق منع محدد وراقب أن المنع المحدد لا يُفعّل أبدًا لأن أول تطابق يُطبَّق. ثم أعد ترتيب القواعد بوضع قواعد السماح المحددة أولًا وقاعدة «deny any» الأخيرة، وأظهر أن الحركة المقصودة فقط تمرّ. واشرح المنع الافتراضي وأقل صلاحية والتسجيل. ونفّذ هذا في المحاكٍ فقط — لا تغيّر أي جدار ناري أو شبكة حقيقية.",
  ),
  exercises: [
    {
      title: l("Evaluate a rule set", "تقييم مجموعة قواعد"),
      instructions: l(
        "Given a small firewall rule set with an over-broad allow above specific denies, identify which packets are wrongly allowed, explain why using first-match logic, and propose a corrected order.",
        "بالنظر إلى مجموعة قواعد جدار ناري صغيرة تحتوي على سماح أوسع فوق محددات منع، حدّد الحزم التي يُسمح بها خطأً، واشرح السبب باستخدام منطق أول تطابق، واقترح ترتيبًا مصحّحًا.",
      ),
      expected: l(
        "The over-broad rule matches first and allows traffic that should be denied; moving specific rules above it and ending with default deny fixes the behavior.",
        "تطابق القاعدة الأوسع أولًا وتسمح بحركة يجب منعها؛ ويؤدي نقل القواعد المحددة فوقها وإنهاء المجموعة بمنع افتراضي إلى إصلاح السلوك.",
      ),
    },
    {
      title: l("Design a segmentation plan", "تصميم خطة تقسيم"),
      instructions: l(
        "For a small office with a public web server, staff VLAN, server VLAN and guest Wi-Fi, state the DMZ placement and the firewall rules that would allow Internet→DMZ:443 but block the DMZ from freely reaching the internal network.",
        "لمكتب صغير مع خادم ويب عام وVLAN للموظفين وVLAN للخوادم وواي فاي ضيوف، حدّد موضع DMZ وقواعد الجدار الناري التي تسمح بـ الإنترنت←DMZ:443 لكن تحظر حرية وصول المنطقة إلى الشبكة الداخلية.",
      ),
      expected: l(
        "The web server sits in a DMZ; a rule allows Internet→DMZ on 443; a rule denies the DMZ from initiating connections into internal zones.",
        "يوضع خادم الويب في DMZ؛ وتسمح قاعدة بـ الإنترنت←DMZ على 443؛ وتمنع قاعدة المنطقة من بدء اتصالات نحو المناطق الداخلية.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can explain packet-filter, stateful and next-generation firewalls and the first-match rule logic, write and order rules following default deny and least privilege, differentiate IDS from IPS and signature from anomaly detection, describe DMZ, segmentation, VPN types and secure Wi-Fi, and explain the zero-trust mindset. You can also evaluate a firewall rule set and identify over-exposed or mis-ordered rules.",
    "بعد هذه الجلسة يمكنك شرح الجدران النارية بمرشّح الحزم وذات الحالة والجيل التالي ومنطق أول تطابق، وكتابة القواعد وترتيبها وفق المنع الافتراضي وأقل صلاحية، والتمييز بين IDS وIPS وبين الكشف بالتواقيع والكشف بالشذوذ، ووصف المنطقة المنزوعة والتقسيم وأنواع VPN والواي فاي الآمن، وشرح تفكير انعدام الثقة. ويمكنك أيضًا تقييم مجموعة قواعد جدار ناري وتحديد القواعد المكشوفة أكثر من اللازم أو المرتبة خطأ.",
  ),
  commonMistakes: [
    l(
      "Putting a broad allow rule above specific denies: first match wins, so the broad allow defeats the later deny.",
      "وضع قاعدة سماح عام فوق محددات المنع: فأول تطابق يُطبَّق، لذا يُبطل السماح العام المنع اللاحق.",
    ),
    l(
      "Forgetting a final default-deny rule: without it, anything not explicitly matched may be allowed.",
      "نسيان قاعدة المنع الافتراضي الأخيرة: فدونها قد يُسمح بأي شيء لم يُطابق صراحةً.",
    ),
    l(
      "Assuming IDS can block: IDS only alerts; only IPS (or a firewall) can block.",
      "الافتراض أن IDS يحجب: فـ IDS ينبّه فقط؛ ولا يحجب إلا IPS (أو جدار ناري).",
    ),
    l(
      "Treating a VPN as a complete security control: a VPN extends the network to the device, so access must require MFA and healthy, patched devices.",
      "التعامل مع VPN كضابط أمن متكامل: فـ VPN تمدّ الشبكة إلى الجهاز، لذا يجب اشتراط المصادقة متعددة العوامل والأجهزة السليمة المحدّثة.",
    ),
    l(
      "Using WEP or an open Wi-Fi network: these provide no meaningful protection.",
      "استخدام WEP أو شبكة واي فاي مفتوحة: فهذه لا توفر حماية ذات معنى.",
    ),
  ],
  bestPractices: [
    l(
      "End every rule set with a default-deny rule and allow only the specific source, destination and port each service needs.",
      "أنهي كل مجموعة قواعد بقاعدة المنع الافتراضي واسمح فقط بالمصدر والوجهة والمنفذ المحدد الذي تحتاجه كل خدمة.",
    ),
    l(
      "Log denied and sensitive traffic and review rules regularly to remove stale 'temporary' entries.",
      "سجّل الحركة المحجوبة والحساسة وراجع القواعد بانتظام لإزالة المدخلات «المؤقتة» القديمة.",
    ),
    l(
      "Place Internet-facing servers in a DMZ and block the DMZ from freely reaching the internal network.",
      "ضع الخوادم المواجهة للإنترنت في DMZ وامنع المنطقة من حرية الوصول إلى الشبكة الداخلية.",
    ),
    l(
      "Require MFA and healthy, patched devices for VPN access, and use WPA3 (or WPA2-AES) with a strong passphrase and WPS disabled for Wi-Fi.",
      "اشترط المصادقة متعددة العوامل والأجهزة السليمة المحدّثة لوصول VPN، واستخدم WPA3 (أو WPA2-AES) بعبارة مرور قوية وWPS معطل للواي فاي.",
    ),
  ],
  keyTakeaways: [
    l(
      "Firewalls enforce allowed traffic; packet-filter, stateful and NGFW types add increasing intelligence.",
      "تفرض الجدران النارية الحركة المسموح بها؛ وتُضيف أنواع مرشّح الحزم وذات الحالة والجيل التالي ذكاءً متزايدًا.",
    ),
    l(
      "Rules are evaluated top to bottom with first match winning; end with default deny and apply least privilege.",
      "تُقيَّم القواعد من الأعلى إلى الأسفل وأول تطابق يُطبَّق؛ وأنهي بالمنع الافتراضي واطبق أقل صلاحية.",
    ),
    l(
      "DMZ and segmentation contain a breach by limiting where traffic may travel between zones.",
      "تحصر المنطقة المنزوعة والتقسيم الاختراق بالحد من أماكن حركة الحركة بين المناطق.",
    ),
    l(
      "IDS alerts; IPS can block in-line. Signature detection is precise but blind to new attacks; anomaly detection finds novel attacks with more false positives.",
      "IDS ينبّه؛ وIPS يحجب على المسار. والكشف بالتواقيع دقيق لكنه أعمى عن الهجمات الجديدة؛ والكشف بالشذوذ يجد الهجمات الجديدة بإنذارات كاذبة أكثر.",
    ),
    l(
      "VPNs encrypt remote and inter-site traffic but must require MFA and healthy devices; secure Wi-Fi uses WPA3/WPA2-AES; zero trust never trusts by location alone.",
      "تشفر VPN حركة الوصول البعيد وحركة المواقع لكن يجب أن تتطلب المصادقة متعددة العوامل والأجهزة السليمة؛ والواي فاي الآمن يستخدم WPA3/WPA2-AES؛ ولا يثق انعدام الثقة بالموقع وحده.",
    ),
  ],
  lab: {
    title: l("Lab 5 — Network Discovery & Firewall Rules", "المختبر 5 — اكتشاف الشبكة وقواعد الجدار الناري"),
    scenario: l(
      "You are a network administrator reviewing a firewall rule set inherited from a previous administrator. The rule set exposes HTTP and Remote Desktop to the Internet, which violates policy. Your task is to repair the rules so that from the Internet only HTTPS (443) is allowed, SSH (22) is allowed only from the administration network, and everything else is denied and logged.",
      "أنت مسؤول شبكات تراجع مجموعة قواعد جدار ناري ورثتها عن مسؤول سابق. تكشف المجموعة HTTP وسطح المكتب البعيد للإنترنت، وهو ما يخالف السياسة. مهمتك إصلاح القواعد بحيث يُسمح من الإنترنت بـ HTTPS (443) فقط، ويُسمح بـ SSH (22) فقط من شبكة الإدارة، ويُمنع كل شيء آخر ويُسجّل.",
    ),
    safety: l(
      "Rule changes on production firewalls need change approval, a backup of the old configuration and a rollback plan. Practise only in the simulator or a lab firewall on a network you own or are authorized to manage. Do not modify any real firewall, router or network without explicit authorization, and never test rules against third-party systems.",
      "تحتاج تغييرات قواعد الجدران النارية الفعلية إلى موافقة تغيير ونسخة احتياطية من الإعداد القديم وخطة تراجع. تدرّب فقط في المحاكٍ أو جدار ناري مختبري على شبكة تملكها أو لديك إذن بإدارتها. ولا تغيّر أي جدار ناري أو موجّه أو شبكة حقيقية دون تصريح صريح، ولا تختبر القواعد أبدًا ضد أنظمة خارجية.",
    ),
    steps: [
      l("Read each packet result and identify wrongly allowed and wrongly denied packets", "اقرأ نتيجة كل حزمة وحدّد الحزم التي يُسمح بها خطأً ويُمنع خطأً"),
      l("Switch the HTTP rule from ALLOW to DENY", "حوّل قاعدة HTTP من ALLOW إلى DENY"),
      l("Switch the Remote Desktop (3389) rule from ALLOW to DENY", "حوّل قاعدة سطح المكتب البعيد (3389) من ALLOW إلى DENY"),
      l("Experiment with rule order and observe how first-match changes behavior", "جرّب ترتيب القواعد وراقب كيف يغيّر أول التطابق السلوك"),
      l("Restore a correct order and confirm the policy goal is achieved", "أعد الترتيب الصحيح وتأكد من تحقيق هدف السياسة"),
      l("Write the final rule set as a table and add the logging you would enable", "اكتب مجموعة القواعد النهائية كجدول وأضف التسجيل الذي ستفعّله"),
    ],
    expected: l(
      "All test packets behave correctly, the policy-goal message appears, and you can explain first-match logic, the role of the final default-deny rule, and why the logging you enable matters.",
      "تتصرف جميع الحزم الاختبارية كما يجب، وتظهر رسالة تحقيق هدف السياسة، وتستطيع شرح منطق أول التطابق ودور قاعدة المنع الافتراضي الأخيرة وأهمية التسجيل الذي تفعّله.",
    ),
    tool: "firewall",
    objectives: [
      l("Explain how firewall rules are evaluated and why order matters", "شرح كيف تُقيَّم قواعد الجدار الناري ولماذا يهم الترتيب"),
      l("Apply default-deny and least-privilege principles to a rule set", "تطبيق مبادئ المنع الافتراضي وأقل صلاحية على مجموعة قواعد"),
      l("Identify over-exposed rules and correct them", "تحديد القواعد المكشوفة أكثر من اللازم وتصحيحها"),
      l("Design a final rule set and enable logging", "تصميم مجموعة قواعد نهائية وتفعيل التسجيل"),
      l("Connect firewall rules to segmentation and containment goals", "ربط قواعد الجدار الناري بأهداف التقسيم والحصر"),
    ],
    prerequisites: [
      l("Session 7: IP addressing, subnetting and the default gateway", "الجلسة 7: عنونة IP وتقسيم الشبكات والبوابة الافتراضية"),
      l("Session 8: TCP/UDP, ports and common services", "الجلسة 8: TCP/UDP والمنافذ والخدمات الشائعة"),
    ],
    environment: l(
      "The companion firewall simulator in a browser, or a paper exercise. No real firewall, router or network is involved. All practice uses a simulated rule set and fictional addresses.",
      "محاكي الجدار الناري المرافق في متصفح، أو تمرين على الورق. لا يتضمن أي جدار ناري أو موجّه أو شبكة حقيقية. وتُستخدم جميع التدريبات مجموعة قواعد محاكاة وعناوين خيالية.",
    ),
    tools: [
      l("Firewall rule simulator (companion browser tool)", "محاكي قواعد الجدار الناري (أداة متصفح مساندة)"),
      l("Packet test results table (in the simulator)", "جدول نتائج اختبار الحزم (في المحاكٍ)"),
      l("Paper and pen for the final rule table", "ورق وقلم لجدول القواعد النهائي"),
    ],
    authorization: l(
      "Scope: repair the rule set only in the simulator or on a lab firewall you own or are authorized to manage. Prohibited: changing any real firewall, router or network, or testing rules against third-party systems. Stop condition: if you are asked to modify a real or shared production system, stop and confirm authorization and change approval first.",
      "النطاق: إصلاح مجموعة القواعد فقط في المحاكٍ أو على جدار ناري مختبري تملكه أو لديك إذن بإدارته. المحظور: تغيير أي جدار ناري أو موجّه أو شبكة حقيقية، أو اختبار القواعد ضد أنظمة خارجية. شرط التوقف: إذا طُلب منك تعديل نظام إنتاج حقيقي أو مشترك، توقف وتحقق من التصريح وموافقة التغيير أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Read the packet results", "قراءة نتائج الحزم"),
        command: "Firewall simulator: review the six test packets",
        explanation: l(
          "Review each test packet's result. Identify which packets are wrongly allowed (for example HTTP and RDP from the Internet) and which are wrongly denied, so you know exactly what the current rule set is doing.",
          "راجع نتيجة كل حزمة اختبارية. وحدّد الحزم التي يُسمح بها خطأً (مثل HTTP وRDP من الإنترنت) وتلك التي يُمنع خطأً، لتعرف بالضبط ما تفعله مجموعة القواعد الحالية.",
        ),
        expected: l("You can list which packets are wrongly allowed and which are wrongly denied, and note the offending rules.", "يمكنك ذكر الحزم التي يُسمح بها خطأً وتلك التي يُمنع خطأً، مع الإشارة إلى القواعد المخالفة."),
      },
      {
        title: l("Deny the exposed HTTP rule", "منع قاعدة HTTP المكشوفة"),
        command: "Switch rule 1 (HTTP) from ALLOW to DENY",
        explanation: l(
          "HTTP on port 80 from the Internet is not needed for policy. Switch the HTTP rule from ALLOW to DENY so that unencrypted web traffic from the Internet is blocked.",
          "لا تحتاج السياسة إلى HTTP على المنفذ 80 من الإنترنت. حوّل قاعدة HTTP من ALLOW إلى DENY لتحجب حركة الويب غير المشفّرة من الإنترنت.",
        ),
        expected: l("HTTP packets from the Internet are now denied.", "تُمنع الآن حزم HTTP من الإنترنت."),
      },
      {
        title: l("Deny the exposed Remote Desktop rule", "منع قاعدة سطح المكتب البعيد المكشوفة"),
        command: "Switch rule 4 (RDP 3389) from ALLOW to DENY",
        explanation: l(
          "Remote Desktop (RDP) on port 3389 exposed to the Internet is high-risk remote access. Switch it from ALLOW to DENY; remote access should be protected behind a VPN with MFA, not left open.",
          "يُعد سطح المكتب البعيد (RDP) على المنفذ 3389 المكشوف للإنترنت وصولًا بعيدًا عالي الخطر. حوّله من ALLOW إلى DENY؛ فالوصول البعيد يجب أن يُحمى خلف VPN مع المصادقة متعددة العوامل، لا أن يُترك مفتوحًا.",
        ),
        expected: l("RDP packets from the Internet are now denied.", "تُمنع الآن حزم RDP من الإنترنت."),
      },
      {
        title: l("Experiment with rule order", "التجريب بترتيب القواعد"),
        command: "Move the final 'deny any' rule to the top",
        explanation: l(
          "Move the final 'deny any' rule to the top of the list and replay the packets. Because rules are evaluated top to bottom with first match winning, every packet now matches the deny-any rule first and is blocked. This shows why rule order matters.",
          "انقل قاعدة «deny any» الأخيرة إلى أعلى القائمة وأعد تشغيل الحزم. وبما أن القواعد تُقيَّم من الأعلى إلى الأسفل وأول تطابق يُطبَّق، فإن كل حزمة تطابق الآن قاعدة المنع الشامل أولًا فتُحجب. ويُظهر هذا سبب أهمية ترتيب القواعد.",
        ),
        expected: l("All packets are blocked, demonstrating that first-match logic makes rule order decisive.", "تُحجب جميع الحزم، مما يُظهر أن منطق أول التطابق يجعل ترتيب القواعد حاسمًا."),
      },
      {
        title: l("Restore a correct order", "إعادة الترتيب الصحيح"),
        command: "Place specific allow rules first and 'deny any' last",
        explanation: l(
          "Restore the correct order: specific allow rules (such as HTTPS from the Internet, SSH from the admin network) at the top, then the final 'deny any' rule. Replay the packets to confirm only intended traffic passes.",
          "أعد الترتيب الصحيح: قواعد السماح المحددة (مثل HTTPS من الإنترنت وSSH من شبكة الإدارة) في الأعلى، ثم قاعدة «deny any» الأخيرة. وأعد تشغيل الحزم للتأكد من أن الحركة المقصودة فقط تمرّ.",
        ),
        expected: l("HTTPS and admin-SSH packets pass; everything else is denied, and the policy-goal message appears.", "تمرّ حزم HTTPS وSSH من الإدارة؛ ويُمنع كل شيء آخر، وتظهر رسالة تحقيق هدف السياسة."),
      },
      {
        title: l("Write the final rule set and enable logging", "كتابة مجموعة القواعد النهائية وتفعيل التسجيل"),
        command: "Final rule table + logging plan",
        explanation: l(
          "Write the corrected rule set as a table (source, destination, port, action) and add the logging you would enable: log denied packets and sensitive traffic so you can detect and investigate attempts.",
          "اكتب مجموعة القواعد المصححة كجدول (مصدر ووجهة ومنفذ وإجراء) وأضف التسجيل الذي ستفعّله: سجّل الحزم المحجوبة والحركة الحساسة لتتمكن من اكتشاف المحاولات والتحقيق فيها.",
        ),
        expected: l("A final rule table ending with default deny, plus a logging plan for denied and sensitive traffic.", "جدول قواعد نهائي ينتهي بمنع افتراضي، مع خطة تسجيل للحركة المحجوبة والحساسة."),
      },
    ],
    troubleshooting: [
      {
        problem: l("A packet is still allowed after your change", "لا تُزال الحزمة بعد تغييرك"),
        fix: l("Check for an earlier, broader rule that matches first — first match wins. Reorder so your specific deny is above any broader allow.", "تحقق من وجود قاعدة أوسع سابقة تطابق أولًا — فأول تطابق يُطبَّق. وأعد الترتيب بحيث يكون المنع المحدد فوق أي سماح أوسع."),
      },
      {
        problem: l("A packet that should pass is denied", "تُمنع حزمة يجب أن تمرّ"),
        fix: l("Confirm the rule's source, destination and port match exactly. A mismatch in any field means the packet is not matched by your allow rule and falls to the default deny.", "تأكد من أن مصدر القاعدة ووجهتها ومنفذها تطابق تمامًا. فالتباين في أي حقل يعني أن الحزمة لا تطابق قاعدة السماح وتؤول إلى المنع الافتراضي."),
      },
      {
        problem: l("You are unsure whether a rule is still needed", "لست متأكدًا مما إذا كانت قاعدة ما لا تزال ضرورية"),
        fix: l("Apply least privilege and default deny: if no service needs the flow, remove the rule. Review periodically and remove stale 'temporary' rules.", "طبّق أقل صلاحية والمنع الافتراضي: فإذا لم تكن هناك خدمة تحتاج التدفق فأزل القاعدة. وراجع بانتظام وأزل القواعد «المؤقتة» القديمة."),
      },
      {
        problem: l("You are asked to change a real firewall", "يُطلب منك تغيير جدار ناري حقيقي"),
        fix: l("Stop. Real firewall changes need change approval, a configuration backup and a rollback plan. Confirm authorization and approval before proceeding.", "توقف. فتغييرات الجدران النارية الحقيقية تحتاج موافقة تغيير ونسخة احتياطية من الإعداد وخطة تراجع. وتحقق من التصريح والموافقة قبل المتابعة."),
      },
    ],
    deliverables: [
      l("An analysis of which packets were wrongly allowed or denied", "تحليل للحزم التي كان يُسمح بها أو يُمنع خطأً"),
      l("The corrected allow/deny actions for HTTP and RDP", "إجراءات السماح/المنع المصححة لـ HTTP وRDP"),
      l("A demonstration of first-match rule-order behavior", "إظهار لسلوك ترتيب القواعد بأول التطابق"),
      l("A final rule set with a default-deny rule", "مجموعة قواعد نهائية بقاعدة المنع الافتراضي"),
      l("A logging plan for denied and sensitive traffic", "خطة تسجيل للحركة المحجوبة والحساسة"),
    ],
    rubric: [
      { criterion: l("Correct identification of wrongly allowed/denied packets", "التحديد الصحيح للحزم التي يُسمح بها أو يُمنع خطأً"), weight: 25 },
      { criterion: l("Correct corrective actions on HTTP and RDP rules", "الإجراءات التصحيحية الصحيحة على قواعد HTTP وRDP"), weight: 25 },
      { criterion: l("Correct understanding of first-match and rule order", "الفهم الصحيح لأول التطابق وترتيب القواعد"), weight: 20 },
      { criterion: l("Final rule set ends with default deny", "تنتهي مجموعة القواعد النهائية بمنع افتراضي"), weight: 15 },
      { criterion: l("Logging plan and safety awareness", "خطة تسجيل ووعي بالسلامة"), weight: 15 },
    ],
  },
  majorLabId: "lab-05",
  quiz: [
    {
      q: l("What does 'default deny' mean?", "ماذا تعني عبارة «المنع الافتراضي»؟"),
      options: [
        l("Everything not explicitly allowed is blocked", "كل ما لم يُسمح به صراحة محجوب"),
        l("Everything is allowed unless blocked", "كل شيء مسموح ما لم يُحجب"),
        l("Only denied traffic is logged", "تُسجّل الحركة الممنوعة فقط"),
        l("The firewall is disabled", "الجدار الناري معطّل"),
      ],
      answer: 0,
      why: l("A final catch-all deny rule ensures only intended traffic passes.", "قاعدة منع شاملة أخيرة تضمن مرور الحركة المقصودة فقط."),
    },
    {
      q: l("In most firewalls, rules are processed…", "في أغلب الجدران النارية تُعالج القواعد…"),
      options: [
        l("Randomly", "عشوائيًا"),
        l("Top to bottom, first match wins", "من الأعلى إلى الأسفل وأول تطابق يُطبَّق"),
        l("Bottom to top", "من الأسفل إلى الأعلى"),
        l("All at once, averaging", "كلها معًا بالمتوسط"),
      ],
      answer: 1,
      why: l("Order matters: a broad allow above a narrow deny defeats the deny.", "الترتيب مهم: فسماح عام فوق منع محدد يبطل المنع."),
    },
    {
      q: l("What is the key difference between IDS and IPS?", "ما الفرق الرئيس بين IDS وIPS؟"),
      options: [
        l("IDS only alerts; IPS can block traffic in-line", "IDS ينبّه فقط؛ وIPS يحجب الحركة على المسار"),
        l("IDS is hardware only", "IDS عتاد فقط"),
        l("IPS only detects", "IPS يكشف فقط"),
        l("They are identical", "متطابقان"),
      ],
      answer: 0,
      why: l("IPS is in-line and prevents; IDS passively monitors and alerts.", "IPS على المسار ويمنع؛ وIDS يراقب سلبيًا وينبّه."),
    },
    {
      q: l("What is a DMZ used for?", "فيمَ تُستخدم المنطقة المنزوعة؟"),
      options: [
        l("Hosting Internet-facing servers separately from the internal LAN", "استضافة الخوادم المواجهة للإنترنت بمعزل عن الشبكة الداخلية"),
        l("Storing backups", "تخزين النسخ الاحتياطية"),
        l("Speeding up Wi-Fi", "تسريع الواي فاي"),
        l("Printing", "الطباعة"),
      ],
      answer: 0,
      why: l("If a DMZ server is compromised, the internal network remains protected by another firewall.", "إذا اخترق خادم في المنطقة تبقى الشبكة الداخلية محمية بجدار آخر."),
    },
    {
      q: l("Which Wi-Fi security setting is recommended today?", "أي إعداد أمان للواي فاي يُوصى به اليوم؟"),
      options: [
        l("Open network", "شبكة مفتوحة"),
        l("WEP", "WEP"),
        l("WPA3 or WPA2-AES with a strong passphrase", "WPA3 أو WPA2-AES بعبارة مرور قوية"),
        l("Hidden SSID only", "إخفاء SSID فقط"),
      ],
      answer: 2,
      why: l("WEP is broken; hiding the SSID is not security.", "WEP مكسور؛ وإخفاء SSID ليس أمانًا."),
    },
    {
      q: l("A false negative in an IDS is…", "السلبي الكاذب في IDS هو…"),
      options: [
        l("A harmless event flagged as an attack", "حدث غير ضار صُنّف هجومًا"),
        l("A real attack that is not detected", "هجوم حقيقي لم يُكتشف"),
        l("A log rotation", "تدوير سجلات"),
        l("A blocked port", "منفذ محجوب"),
      ],
      answer: 1,
      why: l("Missing a real attack is the dangerous error type.", "إغفال هجوم حقيقي هو نوع الخطأ الخطير."),
    },
    {
      q: l("Which principle says to never trust a device just because it is on the internal network?", "أي مبدأ ينص على ألا نثق بجهاز لمجرد وجوده في الشبكة الداخلية؟"),
      options: [
        l("Security through obscurity", "الأمن بالغموض"),
        l("Zero trust", "انعدام الثقة"),
        l("Implicit trust", "الثقة الضمنية"),
        l("Flat networking", "الشبكة المسطحة"),
      ],
      answer: 1,
      why: l("Zero trust verifies identity, device health and authorisation for each request.", "يتحقق انعدام الثقة من الهوية وسلامة الجهاز والتصريح لكل طلب."),
    },
    {
      q: l("What does a stateful firewall add over a packet filter?", "ماذا يضيف الجدار الناري ذو الحالة على مرشّح الحزم؟"),
      options: [
        l("Encryption", "التشفير"),
        l("Tracking connection state so reply traffic is allowed automatically", "تتبع حالة الاتصال ليُسمح بحركة الرد تلقائيًا"),
        l("User logins", "دخول المستخدمين"),
        l("Backup storage", "تخزين النسخ"),
      ],
      answer: 1,
      why: l("A stateful firewall remembers connections, allowing replies and dropping unsolicited inbound traffic.", "يتذكر الجدار ذو الحالة الاتصالات فيسمح بالردود ويُسقط الحركة الواردة غير المطلوبة."),
    },
    {
      q: l("A phishing link arrives over allowed HTTPS. What can the firewall do?", "يصله رابط تصيّد عبر HTTPS مسموح. ماذا يمكن للجدار الناري فعله؟"),
      options: [
        l("Block it, because the firewall sees all HTTPS content", "يحجبه، لأن الجدار الناري يرى كل محتوى HTTPS"),
        l("It cannot block it based on the protocol alone — HTTPS content is not visible to a basic firewall", "لا يمكنه حظره بناءً على البروتوكول وحده — فمحتوى HTTPS غير مرئي لجدار ناري أساسي"),
        l("Nothing, ever", "لا شيء، أبدًا"),
        l("It rewrites the link", "يُعيد كتابة الرابط"),
      ],
      answer: 1,
      why: l("A basic firewall sees allowed HTTPS as legitimate; deeper inspection (NGFW/WAF) and other layers are needed to catch malicious content.", "يرى الجدار الناري الأساسي HTTPS المسموح أنه مشروع؛ وتحتاج طبقات أعمق مثل NGFW/WAF لالتقاط المحتوى الخبيث."),
    },
    {
      q: l("Why is segmentation important after a breach?", "لماذا يهم التقسيم بعد الاختراق؟"),
      options: [
        l("It speeds up the network", "يُسرّع الشبكة"),
        l("It limits how far the attacker can move laterally", "يحدّ من مدى حركة المهاجم الجانبية"),
        l("It removes the need for firewalls", "يحذف الحاجة إلى الجدران النارية"),
        l("It disables VPNs", "يعطل VPN"),
      ],
      answer: 1,
      why: l("Segmentation and inter-segment firewall rules contain the compromise to the affected zone.", "يحصر التقسيم وقواعد الجدار الناري بين القطاعات الاختراق في المنطقة المتأثرة."),
    },
    {
      q: l("Which is a risk when a VPN does not require MFA?", "ما الخطر عندما لا تتطلب VPN المصادقة متعددة العوامل؟"),
      options: [
        l("Slower connections", "اتصالات أبطأ"),
        l("Anyone with the credentials can reach the corporate network", "يمكن لأي شخص لديه بيانات الدخول الوصول إلى شبكة الشركة"),
        l("VPNs stop working", "تتوقف VPN عن العمل"),
        l("No risk", "لا خطر"),
      ],
      answer: 1,
      why: l("VPN access without MFA lets a stolen password alone open the corporate network.", "يتيح وصول VPN دون المصادقة متعددة العوامل لكلمة مرور مسروقة وحدها فتح شبكة الشركة."),
    },
  ],
  trueFalse: [
    {
      q: l("Rule order matters because rules are evaluated top to bottom and first match wins.", "يهم ترتيب القواعد لأنها تُقيَّم من الأعلى إلى الأسفل وأول تطابق يُطبَّق."),
      answer: true,
      why: l("A broad allow placed above a specific deny will match first and defeat the deny.", "فالسما العام الموضع فوق منع محدد يطابق أولًا ويبطل المنع."),
    },
    {
      q: l("A packet-filtering firewall can distinguish legitimate reply traffic automatically.", "يمكن لمرشّح الحزم التمييز تلقائيًا بين حركة الرد المشروعة."),
      answer: false,
      why: l("Packet filters do not track connection state; stateful inspection is needed to allow replies automatically.", "لا تتبع مرشحات الحزم حالة الاتصال؛ ويحتاج الأمر إلى الفحص ذي الحالة للسماح بالردود تلقائيًا."),
    },
    {
      q: l("IDS can block malicious traffic in-line.", "يمكن لـ IDS حجب الحركة الخبيثة على المسار."),
      answer: false,
      why: l("IDS only monitors and alerts; IPS (or a firewall) is what blocks in-line.", "IDS يراقب وينبّه فقط؛ وIPS (أو جدار ناري) هو ما يحجب على المسار."),
    },
    {
      q: l("A DMZ lets Internet users reach specific servers while keeping the internal network behind a second firewall.", "تتيح المنطقة المنزوعة لمستخدمي الإنترنت الوصول إلى خوادم محددة مع إبقاء الشبكة الداخلية خلف جدار ناري ثاني."),
      answer: true,
      why: l("The DMZ is a semi-trusted buffer; a second firewall guards the internal LAN.", "المنطقة منطقة عازلة شبه موثوقة؛ ويحفظ جدار ناري ثاني الشبكة الداخلية."),
    },
    {
      q: l("Zero trust means trusting devices on the internal network by default.", "يعني انعدام الثقة الوثوق بالأجهزة على الشبكة الداخلية افتراضيًا."),
      answer: false,
      why: l("Zero trust never trusts by location; it verifies identity, device health and authorisation per request.", "لا يثق انعدام الثقة بالموقع؛ بل يتحقق من الهوية وسلامة الجهاز والتصريح لكل طلب."),
    },
    {
      q: l("WEP provides acceptable Wi-Fi security for modern use.", "يوفر WEP أمن واي فاي مقبولًا للاستخدام الحديث."),
      answer: false,
      why: l("WEP is broken and should not be used; use WPA2-AES or WPA3.", "WEP مكسور ولا ينبغي استخدامه؛ واستخدم WPA2-AES أو WPA3."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each control as detecting (D), preventing (P), or both (B)", "صنّف كل ضابط إلى كاشف (د) أو مانع (م) أو كليهما (ك)"),
      categories: [
        l("Detecting", "كاشف"),
        l("Preventing", "مانع"),
        l("Both", "كليهما"),
      ],
      items: [
        { text: l("IDS", "IDS"), answer: 0 },
        { text: l("IPS", "IPS"), answer: 2 },
        { text: l("Firewall", "الجدار الناري"), answer: 1 },
        { text: l("Signature-based detection", "الكشف بالتواقيع"), answer: 0 },
      ],
      why: l("IDS detects, a firewall prevents, IPS does both; signature detection is a detection method.", "IDS يكشف، والجدار الناري يمنع، وIPS يفعل كليهما؛ والكشف بالتواقيع أسلوب كشف."),
    },
    {
      prompt: l("Classify each item as a firewall type or not", "صنّف كل عنصر كنوع جدار ناري أو لا"),
      categories: [
        l("Firewall type", "نوع جدار ناري"),
        l("Not a firewall type", "ليس نوع جدار ناري"),
      ],
      items: [
        { text: l("Stateful firewall", "جدار ناري ذو حالة"), answer: 0 },
        { text: l("Packet filter", "مرشّح حزم"), answer: 0 },
        { text: l("NGFW", "جدار الجيل التالي"), answer: 0 },
        { text: l("IDS", "IDS"), answer: 1 },
      ],
      why: l("Packet filter, stateful firewall and NGFW are firewall types; IDS is a separate detection system.", "مرشّح الحزم والجدار ذو الحالة وجدار الجيل التالي أنواع جدران نارية؛ وIDS نظام كشف منفصل."),
    },
    {
      prompt: l("Classify each statement as describing TCP or UDP-oriented behavior", "صنّف كل عبارة حسب ما تصفه من سلوك TCP أو UDP"),
      categories: [
        l("TCP", "TCP"),
        l("UDP", "UDP"),
      ],
      items: [
        { text: l("Connection-oriented with handshake", "مبنيّ على اتصال بمصافحة"), answer: 0 },
        { text: l("Connectionless, minimal overhead", "بلا اتصال وأقل تعقيد"), answer: 1 },
        { text: l("Retransmits lost data", "يعيد إرسال البيانات المفقودة"), answer: 0 },
        { text: l("Used for DNS queries", "يُستخدم لاستعلامات DNS"), answer: 1 },
      ],
      why: l("TCP is connection-oriented and reliable; UDP is connectionless and used for DNS and fast transfers.", "TCP مبنيّ على اتصال وموثوق؛ وUDP بلا اتصال ويُستخدم لـ DNS والنقل السريع."),
    },
    {
      prompt: l("Classify each Wi-Fi setting as secure or insecure", "صنّف كل إعداد واي فاي إلى آمن أو غير آمن"),
      categories: [
        l("Secure", "آمن"),
        l("Insecure", "غير آمن"),
      ],
      items: [
        { text: l("WPA3", "WPA3"), answer: 0 },
        { text: l("WPA2-AES", "WPA2-AES"), answer: 0 },
        { text: l("WEP", "WEP"), answer: 1 },
        { text: l("Open network", "شبكة مفتوحة"), answer: 1 },
      ],
      why: l("WPA3 and WPA2-AES are secure; WEP and open networks provide no meaningful protection.", "WPA3 وWPA2-AES آمنة؛ وWEP والشبكات المفتوحة لا توفر حماية ذات معنى."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A firewall rule set has an 'allow any' rule at the top and a 'deny SSH from Internet' rule below it.",
        "تحتوي مجموعة قواعد جدار ناري على قاعدة «allow any» في الأعلى وقاعدة «deny SSH من الإنترنت» أسفلها.",
      ),
      question: l("What is the result and the fix?", "ما الناتج وما الحل؟"),
      options: [
        l("SSH is denied as intended; no change needed", "يُمنع SSH كما هو مقصود؛ لا حاجة لتغيير"),
        l("SSH is allowed because the broad allow matches first; move the specific deny above the broad allow", "يُسمح بـ SSH لأن السماح العام يطابق أولًا؛ انقل المنع المحدد فوق السماح العام"),
        l("SSH is denied regardless of order", "يُمنع SSH بغض النظر عن الترتيب"),
        l("The firewall reboots", "يُعاد تشغيل الجدار الناري"),
      ],
      answer: 1,
      why: l("First match wins, so the broad allow matches before the deny; reordering fixes it.", "أول تطابق يُطبَّق، لذا يطابق السماح العام قبل المنع؛ ويصلح إعادة الترتيب ذلك."),
    },
    {
      scenario: l(
        "An IDS raises many alerts for activity that turns out to be harmless, and an analyst spends all day dismissing them.",
        "يصدر IDS تنبيهًا كثيرة لنشاط يتضح أنه غير ضار، ويقضي محلل يومه في رفضها.",
      ),
      question: l("What is this called and what should be done?", "ماذا يُسمى هذا وما الذي يجب فعله؟"),
      options: [
        l("False negatives; disable the IDS", "سلبيات كاذبة؛ عطّل IDS"),
        l("False positives; tune the detection rules to reduce noisy alerts", "إيجابيات كاذبة؛ ضبط قواعد الكشف لتقليل التنبيهات المزعجة"),
        l("True positives; do nothing", "إيجابيات حقيقية؛ لا تفعل شيئًا"),
        l("Anomaly detection failure; switch to signatures only", "فشل الكشف بالشذوذ؛ انتقل إلى التواقيع فقط"),
      ],
      answer: 1,
      why: l("Harmless events flagged as attacks are false positives; tuning reduces the noise.", "الأحداث غير الضارة المصنفة كهجمات إيجابيات كاذبة؛ ويقلل الضبط الضوضاء."),
    },
    {
      scenario: l(
        "A company wants remote staff to connect from home while keeping the corporate network protected.",
        "تريد شركة موظفين بعيدين الاتصال من المنزل مع إبقاء شبكة الشركة محمية.",
      ),
      question: l("What should the VPN access require?", "ماذا يجب أن يتطلب الوصول عبر VPN؟"),
      options: [
        l("A shared password only", "كلمة مرور مشتركة فقط"),
        l("MFA and a healthy, patched device", "المصادقة متعددة العوامل وجهاز سليم محدّث"),
        l("A VPN without any authentication", "VPN بلا أي مصادقة"),
        l("No VPN at all", "لا VPN إطلاقًا"),
      ],
      answer: 1,
      why: l("A VPN extends the network to the device, so it must verify identity and device health.", "تمدّ VPN الشبكة إلى الجهاز، لذا يجب أن تتحقق من الهوية وسلامة الجهاز."),
    },
  ],
  practicalChecks: [
    {
      task: l("Given a rule set with a broad allow above a specific deny, explain the outcome", "بالنظر إلى مجموعة قواعد تحتوي على سماح عام فوق منع محدد، اشرح الناتج"),
      expected: l("The broad allow matches first, so the specific deny never triggers and the denied traffic is allowed.", "يطابق السماح العام أولًا، لذا لا يُفعّل المنع المحدد أبدًا وتُسمح الحركة الممنوعة."),
    },
    {
      task: l("State the three elements a good firewall allow rule should specify", "اذكر العناصر الثلاثة التي يجب أن تحددها قاعدة السماح الجيدة في الجدار الناري"),
      expected: l("Source, destination and port (and protocol), with least privilege.", "المصدر والوجهة والمنفذ (والبروتوكول)، مع أقل صلاحية."),
    },
  ],
  homework: {
    title: l("Homework 9 — Design a secure network boundary", "الواجب 9 — تصميم حدود شبكة آمنة"),
    tasks: [
      l("Draw a network diagram with Internet, perimeter firewall, DMZ web server, staff VLAN, server VLAN and guest Wi-Fi.", "ارسم مخطط شبكة يضم الإنترنت وجدارًا ناريًا محيطيًا وخادم ويب في DMZ وVLAN للموظفين وVLAN للخوادم وواي فاي ضيوف."),
      l("Write at least eight firewall rules (source, destination, port, action) ending with default deny.", "اكتب ثماني قواعد جدار ناري على الأقل (مصدر ووجهة ومنفذ وإجراء) تنتهي بمنع افتراضي."),
      l("Decide which VPN type staff need and list three conditions for granting access.", "حدد نوع VPN الذي يحتاجه الموظفون وسمِّ ثلاثة شروط لمنح الوصول."),
      l("List five alerts you would want your IDS/IPS to raise and why each matters.", "اذكر خمسة تنبيهات تريد أن يصدرها IDS/IPS وسبب أهمية كل منها."),
    ],
    deliverable: l(
      "A network diagram, a rule table ending with default deny, a VPN decision with access conditions, and five justified IDS/IPS alerts.",
      "مخطط شبكة، وجدول قواعد ينتهي بمنع افتراضي، وقرار VPN مع شروط الوصول، وخمسة تنبيهات IDS/IPS مبررة.",
    ),
    criteria: [
      l("Clear diagram with DMZ and segmented internal zones", "مخطط واضح مع DMZ ومناطق داخلية مقسّمة"),
      l("At least eight correct, ordered rules ending in default deny", "ثماني قواعد صحيحة مرتبة على الأقل تنتهي بمنع افتراضي"),
      l("Reasonable VPN type with three solid access conditions", "نوع VPN معقول مع ثلاثة شروط وصول جيدة"),
      l("Five meaningful IDS/IPS alerts with justifications", "خمسة تنبيهات IDS/IPS ذات معنى مع مبرراتها"),
    ],
    challenge: l(
      "Optional challenge: explain how you would apply zero trust to a network where every device is currently trusted by being on the internal LAN.",
      "مهمة تحدٍ اختيارية: اشرح كيف ستطبق انعدام الثقة على شبكة يُوثَق حاليًا بكل جهاز لمجرد وجوده في الشبكة الداخلية.",
    ),
  },
  refs: [
    { title: "Guidelines on Firewalls and Firewall Policy (SP 800-41 Rev.1)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" },
    { title: "Zero Trust Architecture (SP 800-207)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/207/final" },
    { title: "Guide to Intrusion Detection and Prevention Systems (SP 800-94)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/94/final" },
    { title: "Virtual private networks guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/device-security-guidance/infrastructure/virtual-private-networks" },
    { title: "NIST SP 800-53: Security and Privacy Controls", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/53/upd1/final" },
  ],
  terms: [
    { term: l("Firewall", "الجدار الناري"), def: l("A control that permits or blocks network traffic according to rules.", "ضابط يسمح بحركة الشبكة أو يحجبها وفق قواعد.") },
    { term: l("Packet-filtering firewall", "جدار ناري بمرشّح الحزم"), def: l("A firewall that checks each packet's source, destination, protocol and port.", "جدار ناري يفحص مصدر كل حزمة ووجهتها وبروتوكولها ومنفذها.") },
    { term: l("Stateful firewall", "جدار ناري ذو حالة"), def: l("A firewall that tracks connection state to allow replies automatically.", "جدار ناري يتتبع حالة الاتصال ليسمح بالردود تلقائيًا.") },
    { term: l("Next-generation firewall (NGFW)", "جدار ناري من الجيل التالي"), def: l("A firewall adding application awareness, identity and TLS inspection.", "جدار ناري يضيف إدراك التطبيقات والهوية وفحص TLS.") },
    { term: l("Web application firewall (WAF)", "جدار تطبيقات الويب"), def: l("A firewall protecting web applications from application-layer attacks.", "جدار ناري يحمي تطبيقات الويب من هجمات طبقة التطبيقات.") },
    { term: l("Rule", "القاعدة"), def: l("A firewall entry specifying source, destination, port and action.", "مدخل في الجدار الناري يحدد المصدر والوجهة والمنفذ والإجراء.") },
    { term: l("Default deny", "المنع الافتراضي"), def: l("A rule blocking everything not explicitly allowed.", "قاعدة تحجب كل ما لم يُسمح به صراحة.") },
    { term: l("Least privilege", "أقل صلاحية"), def: l("Allowing only the specific source, destination and port needed.", "السماح فقط بالمصدر والوجهة والمنفذ المحدد المطلوب.") },
    { term: l("First match", "أول تطابق"), def: l("The rule-processing rule that the first matching rule takes effect.", "قاعدة معالجة القواعد التي تُطبّق أول قاعدة متطابقة.") },
    { term: l("DMZ", "المنطقة المنزوعة"), def: l("A semi-trusted network segment for Internet-facing servers.", "قطاع شبكة شبه موثوق للخوادم المواجهة للإنترنت.") },
    { term: l("Segmentation", "التقسيم"), def: l("Splitting a network into zones with controlled traffic between them.", "تقسيم الشبكة إلى مناطق بحركة مضبوطة بينها.") },
    { term: l("VLAN", "شبكة منطقية محلية"), def: l("A virtual LAN that separates traffic on a single switch.", "شبكة محلية افتراضية تفصل الحركة على محوّل واحد.") },
    { term: l("IDS", "نظام كشف التسلل"), def: l("A system that monitors and alerts on malicious activity.", "نظام يراقب النشاط الخبيث وينبّه.") },
    { term: l("IPS", "نظام منع التسلل"), def: l("A system that monitors and blocks malicious activity in-line.", "نظام يراقب ويحجب النشاط الخبيث على المسار.") },
    { term: l("Signature-based detection", "الكشف بالتواقيع"), def: l("Detection matching known bad patterns.", "كشف يطابق أنماطًا خبيثة معروفة.") },
    { term: l("Anomaly-based detection", "الكشف بالشذوذ"), def: l("Detection flagging deviations from normal behaviour.", "كشف يبلغ عن انحرافات عن السلوك الطبيعي.") },
    { term: l("False positive", "إيجابي كاذب"), def: l("An alert raised for activity that is actually benign.", "تنبيه صدر عن نشاط سليم في الحقيقة.") },
    { term: l("False negative", "سلبي كاذب"), def: l("A real attack that is not detected.", "هجوم حقيقي لم يُكتشف.") },
    { term: l("VPN", "الشبكة الافتراضية الخاصة"), def: l("An encrypted tunnel across an untrusted network.", "نفق مشفّر عبر شبكة غير موثوقة.") },
    { term: l("Remote-access VPN", "شبكة الوصول البعيد"), def: l("A VPN connecting a single user to the company network.", "VPN تربط مستخدمًا واحدًا بشبكة الشركة.") },
    { term: l("Site-to-site VPN", "شبكة الموقع-إلى-الموقع"), def: l("A VPN linking two offices or sites.", "VPN تربط مكتبين أو موقعين.") },
    { term: l("IPsec", "أمن بروتوكول الإنترنت"), def: l("A common VPN protocol suite for encrypted tunnels.", "مجموعة بروتوكولات VPN شائعة للنفق المشفّر.") },
    { term: l("Zero trust", "انعدام الثقة"), def: l("A model that verifies every request instead of trusting by location.", "نموذج يتحقق من كل طلب بدل الثقة بحسب الموقع.") },
    { term: l("WPA3", "WPA3"), def: l("The current Wi-Fi security standard with stronger protection.", "معيار أمن الواي فاي الحالي بحماية أقوى.") },
    { term: l("WPS", "إعداد الحماية اللاسلكية"), def: l("Wi-Fi Protected Setup, a convenience feature that should be disabled.", "إعداد الحماية اللاسلكية، ميزة للراحة يجب تعطيلها.") },
  ],
};
