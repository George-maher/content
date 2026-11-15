import { l, type Session } from "../types";

export const s07: Session = {
  id: 7,
  phase: 3,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Networking Fundamentals I: Models, Devices & IP Addressing",
    "أساسيات الشبكات 1: النماذج والأجهزة وعنونة IP",
  ),
  summary: l(
    "How data travels across a network: the OSI and TCP/IP models, switches and routers, MAC and IP addresses, private vs public ranges, NAT, and subnetting with CIDR — the addressing skills every security student needs.",
    "كيف تنتقل البيانات عبر الشبكة: نموذجا OSI وTCP/IP، والمحولات والموجهات، وعناوين MAC وIP، والنطاقات الخاصة والعامة، وNAT، وتقسيم الشبكات بـ CIDR — مهارات العنونة التي يحتاجها كل طالب أمن.",
  ),
  overview: l(
    "Networks are how computers talk to each other, and almost every cybersecurity topic depends on understanding them. This session builds the foundation: the layered models that organize how data moves, the devices that move it, the two kinds of addressing (MAC and IP), the difference between private and public addresses, and how NAT lets many devices share one public address. You will finish with subnetting — the ability to calculate network ranges using CIDR notation — which is both a core networking skill and a security tool for controlling where traffic can go.",
    "الشبكات هي كيف تتحدث الحواسيب مع بعضها، ويعتمد كل موضوع في الأمن السيبراني تقريبًا على فهمها. تبني هذه الجلسة الأساس: النماذج متعددة الطبقات التي تنظّم حركة البيانات، والأجهزة التي تنقلها، والنوعين من العنونة (MAC وIP)، والفرق بين العناوين الخاصة والعامة، وكيف يتيح NAT لأجهزة كثيرة مشاركة عنوان عام واحد. وتنتهي بتقسيم الشبكات — القدرة على حساب نطاقات الشبكات باستخدام صيغة CIDR — وهي مهارة شبكية أساسية وأداة أمنية للتحكم في مسار الحركة.",
  ),
  whyItMatters: l(
    "You cannot defend a network, scan it, or investigate an incident without understanding addressing. When an attacker moves laterally, when a firewall blocks or allows a connection, when you trace where a packet came from, the logic is built on IP addresses, subnets and the devices that route traffic. Subnetting lets you segment a network so that a breach in one area cannot freely reach the rest. Networking literacy is the backbone of both network security and the later web and monitoring sessions.",
    "لا يمكنك حماية شبكة أو مسحها أو التحقيق في حادثة دون فهم العنونة. فعندما يتحرك المهاجم جانبيًا، وعندما يحجب الجدار الناري اتصالًا أو يسمح به، وعندما تتتبع مصدر حزمة، تُبنى المنطق على عناوين IP والشبكات الفرعية والأجهزة التي توجّه الحركة. ويتيح تقسيم الشبكات فصل الشبكة بحيث لا يمكن لاختراق في منطقة أن يصل بحرية إلى الباقي. معرفة الشبكات هي عمود الفقري لأمن الشبكات وللجلسات اللاحقة في الويب والمراقبة.",
  ),
  prerequisites: [
    l(
      "Session 4, Operating System Foundations: a basic understanding of how computers run processes and connect to resources.",
      "الجلسة 4، أساسيات أنظمة التشغيل: فهم أساسي لكيفية تشغيل الحواسيب للعمليات واتصالها بالموارد.",
    ),
    l(
      "Comfort with basic computer concepts; no previous networking experience is required.",
      "الراحة مع المفاهيم الحاسوبية الأساسية؛ لا تُشترط أي خبرة سابقة في الشبكات.",
    ),
    l(
      "A legal and ethical mindset: only inspect networks you own or are authorized to use.",
      "عقلية قانونية وأخلاقية: تدقيق الشبكات التي تملكها أو لديك إذن باستخدامها فقط.",
    ),
  ],
  objectives: [
    l(
      "Describe the OSI and TCP/IP layered models and attach a security concern to each layer.",
      "وصف نماذج الطبقات OSI وTCP/IP وربط مسألة أمنية بكل طبقة.",
    ),
    l(
      "Explain the roles of switches, routers, access points, modems and gateways.",
      "شرح أدوار المحولات والموجهات ونقاط الوصول والمودم والبوابات.",
    ),
    l(
      "Differentiate MAC, IPv4 and IPv6 addresses, and private vs public address ranges.",
      "التمييز بين عناوين MAC وIPv4 وIPv6 والنطاقات الخاصة والعامة.",
    ),
    l(
      "Explain NAT, default gateways and how private devices reach the Internet.",
      "شرح NAT والبوابة الافتراضية وكيف تصل الأجهزة الخاصة إلى الإنترنت.",
    ),
    l(
      "Calculate subnet information using CIDR notation: network, broadcast and usable host ranges.",
      "حساب معلومات الشبكة الفرعية باستخدام صيغة CIDR: الشبكة والبث ونطاق الأجهزة القابلة للاستخدام.",
    ),
    l(
      "Explain how subnetting supports segmentation and limits an attacker's movement.",
      "شرح كيف يدعم تقسيم الشبكات الفصل ويحدّ من حركة المهاجم.",
    ),
  ],
  agenda: [
    { label: l("Welcome, overview and prior-knowledge check", "الترحيب والنظرة العامة والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Network layers: OSI and TCP/IP", "طبقات الشبكة: OSI وTCP/IP"), minutes: 14 },
    { label: l("Encapsulation and how data moves", "التغليف وكيفية حركة البيانات"), minutes: 12 },
    { label: l("Network devices", "أجهزة الشبكة"), minutes: 12 },
    { label: l("MAC, IPv4, IPv6 and addressing", "MAC وIPv4 وIPv6 والعنونة"), minutes: 10 },
    { label: l("Subnets and CIDR calculation", "الشبكات الفرعية وحساب CIDR"), minutes: 12 },
    { label: l("Subnetting for security: segmentation", "تقسيم الشبكات للأمن: الفصل"), minutes: 12 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 13 },
  ],
  introduction: l(
    "Every time you load a website, send a message, or reach a server on another machine, data travels across a network in a highly organized way. That organization is described by layered models, carried out by devices such as switches and routers, and governed by addresses that tell every device where to send and receive. This session unpacks that system from the ground up. You will learn the OSI and TCP/IP models, meet the devices that build a network, understand MAC and IP addressing, see how NAT lets a whole office share one public address, and practice subnetting with CIDR — a skill you will use both as a networker and as a security professional.",
    "في كل مرة تُحمّل موقعًا أو ترسل رسالة أو تصل إلى خادم على جهاز آخر، تنتقل البيانات عبر شبكة بطريقة منظمة جدًا. ويُوصف هذا التنظيم بنماذج متعددة الطبقات، وتُنفّذه أجهزة مثل المحولات والموجهات، وتتحكم فيه العناوين التي تخبر كل جهاز من أين يرسل وإلى أين يستقبل. تفكّ هذه الجلسة هذا النظام من الأساس. ستتعلم نموذجي OSI وTCP/IP، وتتعرف على الأجهزة التي تبني الشبكة، وتفهم عنونة MAC وIP، وترى كيف يتيح NAT لمكتب كامل مشاركة عنوان عام واحد، وتتدرب على تقسيم الشبكات بـ CIDR — مهارة ستستخدمها كخبير شبكات وكمحترف أمن.",
  ),
  sections: [
    {
      h: l("1. Network layers: OSI and TCP/IP", "1. طبقات الشبكة: OSI وTCP/IP"),
      p: [
        l("Networking is organized in layers so that each layer solves one problem and can be improved independently. The OSI model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation and Application. The practical TCP/IP model groups these into four: Link, Internet, Transport and Application. Understanding the layers is the foundation for reasoning about both how data moves and where attacks and defenses operate.", "تُنظَّم الشبكات في طبقات يحل كلٌّ منها مشكلة واحدة ويمكن تطويره باستقلال. لنموذج OSI سبع طبقات: المادية ووصلة البيانات والشبكة والنقل والجلسة والعرض والتطبيق. ويجمعها نموذج TCP/IP العملي في أربع: الوصلة والإنترنت والنقل والتطبيق. ويُعد فهم الطبقات الأساس للتفكير في كيفية حركة البيانات وأين تعمل الهجمات والدفاعات."),
        l("Each layer provides services to the layer above and relies on the layer below. This separation means a change in one layer does not force changes in others, which is why the web, email and file sharing can all ride on the same underlying network. The layered view also gives a shared vocabulary for describing where a problem or a control belongs.", "تُقدم كل طبقة خدماتها للطبقة التي فوقها وتعتمد على الطبقة التي تحتها. ويعني هذا الفصل أن التغيير في طبقة لا يُلزم بتغييرات في غيرها، ولهذا يمكن للويب والبريد ومشاركة الملفات أن تعتمد جميعها على الشبكة الأساسية نفسها. ويمنح المنظور الطبقي مفردات مشتركة لوصف مكان المشكلة أو الضابط."),
      ],
      table: {
        head: [l("OSI layer", "طبقة OSI"), l("Example", "مثال"), l("Typical security concern", "مسألة أمنية نموذجية")],
        rows: [
          [l("7 Application", "7 التطبيق"), l("HTTP, DNS, SMTP", "HTTP وDNS وSMTP"), l("Injection, phishing, malicious payloads", "الحقن والتصيّد والحمولات الخبيثة")],
          [l("6 Presentation", "6 العرض"), l("TLS, encoding", "TLS والترميز"), l("Weak ciphers, certificate abuse", "التشفير الضعيف وإساءة استخدام الشهادات")],
          [l("5 Session", "5 الجلسة"), l("Session setup/teardown", "إنشاء الجلسة وإنهاؤها"), l("Session hijacking", "اختطاف الجلسات")],
          [l("4 Transport", "4 النقل"), l("TCP / UDP – ports", "TCP / UDP – المنافذ"), l("Port scans, SYN flood", "مسح المنافذ وفيضان SYN")],
          [l("3 Network", "3 الشبكة"), l("IP packets – routers", "حزم IP – الموجهات"), l("IP spoofing, routing attacks", "انتحال IP وهجمات التوجيه")],
          [l("2 Data link", "2 وصلة البيانات"), l("Frames, MAC – switches", "الإطارات وMAC – المحولات"), l("ARP poisoning, MAC flooding", "تسميم ARP وإغراق MAC")],
          [l("1 Physical", "1 المادية"), l("Cables, radio, ports", "الكابلات والراديو والمنافذ"), l("Cable tapping, jamming, rogue devices", "التنصت والتشويش والأجهزة الدخيلة")],
        ],
      },
    },
    {
      h: l("2. Encapsulation and how data moves", "2. التغليف وكيفية حركة البيانات"),
      p: [
        l("When data is sent, each layer adds its own header — a process called encapsulation — and the receiver removes the headers in reverse order. The sender's layers build the message from the top down and the receiver's layers read it from the bottom up. This layered encapsulation is what allows different devices and protocols to participate in the same exchange, each contributing only what it knows how to handle.", "عند إرسال البيانات تضيف كل طبقة رأسها — وهي عملية تُسمى التغليف — ويزيلها المستقبل بالترتيب العكسي. فتُبنى طبقات المرسل الرسالة من الأعلى نزولًا وتُقرأ طبقات المستقبل من الأسفل صعودًا. وهذا التغليف الطبقي هو ما يتيح لأجهزة وبروتوكولات مختلفة المشاركة في التبادل نفسه، فتُسهم كل منها بما تعرف كيف تتعامل معه فقط."),
        l("Layers matter for security because attacks and defenses are specific to them. A cable tap is a Layer 1 concern, MAC spoofing and ARP poisoning are Layer 2, IP spoofing and routing attacks are Layer 3, port scans and SYN floods are Layer 4, session hijacking is Layer 5, weak ciphers are Layer 6, and injection and phishing are Layer 7. A firewall that only understands Layers 3 and 4 cannot see a Layer 7 attack hidden inside allowed web traffic, which is why defenses are layered too.", "تهم الطبقات للأمن لأن الهجمات والدفاعات خاصة بها. فالتنصت على الكابل مسألة الطبقة 1، وانتحال MAC وتسميم ARP للطبقة 2، وانتحال IP وهجمات التوجيه للطبقة 3، ومسح المنافذ وفيضان SYN للطبقة 4، واختطاف الجلسات للطبقة 5، والتشفير الضعيف للطبقة 6، والحقن والتصيّد للطبقة 7. والجدار الناري الذي يفهم الطبقتين 3 و4 فقط لا يرى هجوم الطبقة 7 المختبئ داخل حركة ويب مسموحة، ولهذا تكون الدفاعات متعددة الطبقات أيضًا."),
      ],
    },
    {
      h: l("3. Network devices: switches, routers and access points", "3. أجهزة الشبكة: المحولات والموجهات ونقاط الوصول"),
      p: [
        l("Each device operates at a layer and has a distinct security role. A switch works at Layer 2: it connects devices in one LAN and forwards frames by MAC address, and can be configured with VLANs and port security to control which devices communicate. A router works at Layer 3: it connects different networks and forwards packets by IP address, and is often the first point where traffic filtering (access control lists) is applied.", "يعمل كل جهاز في طبقة وله دور أمني مميز. المحوّل يعمل في الطبقة 2: يربط الأجهزة في شبكة محلية واحدة ويمرر الإطارات بحسب عنوان MAC، ويمكن إعداده بـ VLAN وأمان المنافذ للتحكم في الأجهزة التي تتواصل. والموجّه يعمل في الطبقة 3: يربط شبكات مختلفة ويمرر الحزم بحسب عنوان IP، وغالبًا هو أول نقطة يُطبّق فيها ترشيح الحركة (قوائم التحكم بالوصول)."),
        l("An access point provides Wi-Fi and must use WPA2 or WPA3 with strong keys and updated firmware. A modem connects a network to the Internet line provided by an ISP. A firewall (covered in Session 9) sits at boundaries and decides what traffic is allowed. Understanding which device does what helps you reason about where traffic can be controlled and where an attacker might target.", "توفّر نقطة الوصول الواي فاي ويجب أن تستخدم WPA2 أو WPA3 بمفاتيح قوية وبرمجية ثابتة محدّثة. ويربط المودم الشبكة بخط الإنترنت الذي يوفره مزوّد الخدمة. ويقع الجدار الناري (المُغطّى في الجلسة 9) عند الحدود ويقرر الحركة المسموح بها. ويساعد فهم دور كل جهاز على التفكير في أماكن التحكم في الحركة وأماكن استهداف المهاجم لها."),
      ],
      bullets: [
        l("Switch (Layer 2): connects devices in one LAN; forwards frames by MAC address; supports VLANs and port security.", "المحوّل (الطبقة 2): يربط الأجهزة في شبكة محلية واحدة؛ ويمرر الإطارات بحسب MAC؛ ويدعم VLAN وأمان المنافذ."),
        l("Router (Layer 3): connects different networks; forwards packets by IP address; applies access control lists.", "الموجّه (الطبقة 3): يربط شبكات مختلفة؛ ويمرر الحزم بحسب IP؛ ويطبق قوائم التحكم بالوصول."),
        l("Access point: provides Wi-Fi; must use WPA2/WPA3 with strong keys and updated firmware.", "نقطة الوصول: توفر الواي فاي؛ ويجب أن تستخدم WPA2/WPA3 بمفاتيح قوية وبرمجية ثابتة محدّثة."),
        l("Modem and gateway: the modem connects to the ISP line; the default gateway is the router used to reach other networks.", "المودم والبوابة: يتصل المودم بخط مزوّد الخدمة؛ والبوابة الافتراضية هي الموجّه المستخدم للوصول إلى شبكات أخرى."),
      ],
    },
    {
      h: l("4. MAC, IPv4 and IPv6 addressing", "4. عنونة MAC وIPv4 وIPv6"),
      p: [
        l("A MAC address (48 bits, for example 3C:52:82:1A:9B:04) identifies a network card on the local link and is used only inside one LAN. It is assigned by the manufacturer and does not change. An IPv4 address (32 bits, for example 192.168.10.77) identifies a host on an IP network and can be routed across the Internet. Because 32 bits can only provide about four billion addresses, IPv6 uses 128 bits to solve address exhaustion, with a much larger address space.", "يعرّف عنوان MAC (48 بتًا، مثل 3C:52:82:1A:9B:04) بطاقة الشبكة على الوصلة المحلية ويُستخدم داخل شبكة محلية واحدة فقط. ويُخصصه المصنع ولا يتغير. ويعرّف عنوان IPv4 (32 بتًا، مثل 192.168.10.77) مضيفًا في شبكة IP ويمكن توجيهه عبر الإنترنت. وبما أن 32 بتًا لا توفر إلا نحو أربعة مليارات عنوان، يستخدم IPv6 128 بتًا لحل نفاد العناوين، مع مساحة عناوين أكبر بكثير."),
        l("The two work together: the IP address gets a packet across networks, while the MAC address gets it across the local link to the right device. On a LAN, a device is reached by its MAC; across the Internet, it is reached by its IP. This split is why a router can forward between networks while a switch only forwards within one.", "يعمل الاثنان معًا: فعنوان IP يوصل الحزمة عبر الشبكات، بينما يوصلها عنوان MAC عبر الوصلة المحلية إلى الجهاز الصحيح. فعلى الشبكة المحلية يُصل إلى الجهاز بـ MAC؛ وعبر الإنترنت يُصل إليه بـ IP. وهذا الفصل هو ما يجعل الموجّه قادرًا على التوجيه بين الشبكات بينما المحوّل يمرر فقط داخل شبكة واحدة."),
      ],
    },
    {
      h: l("5. Private vs public addresses and ARP", "5. العناوين الخاصة والعامة وARP"),
      p: [
        l("Addresses fall into private and public ranges. Private ranges (RFC 1918) are not routed on the Internet: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. Public addresses are routable and must be unique across the Internet. Devices on a private network can communicate locally and reach the Internet through NAT, but their private addresses are not visible or routable on the Internet itself.", "تنقسم العناوين إلى نطاقات خاصة وعامة. ولا تُوجَّه النطاقات الخاصة (RFC 1918) على الإنترنت: 10.0.0.0/8 و172.16.0.0/12 و192.168.0.0/16. أما العناوين العامة فهي قابلة للتوجيه ويجب أن تكون فريدة عبر الإنترنت. ويمكن للأجهزة على شبكة خاصة التواصل محليًا والوصول إلى الإنترنت عبر NAT، لكن عناوينها الخاصة ليست مرئية أو قابلة للتوجيه على الإنترنت نفسه."),
        l("ARP (Address Resolution Protocol) maps an IP address to a MAC address on the LAN. Because ARP is unauthenticated, it can be abused through ARP poisoning, where a device claims to be the gateway and intercepts traffic sent to it. Understanding ARP clarifies how a device finds the gateway and why layer-2 integrity matters for keeping traffic on the right path.", "يرتبط بروتوكول تحليل العناوين (ARP) عنوان IP بعنوان MAC في الشبكة المحلية. ولأن ARP بلا مصادقة يمكن إساءة استخدامه عبر تسميم ARP، حيث يدّعي جهاز أنه البوابة ويعترض الحركة المرسلة إليه. ويوضح فهم ARP كيف يجد الجهاز البوابة ولماذا تهم سلامة الطبقة 2 لإبقاء الحركة على المسار الصحيح."),
      ],
    },
    {
      h: l("6. NAT and the default gateway", "6. NAT والبوابة الافتراضية"),
      p: [
        l("Network Address Translation (NAT) lets many private hosts share one public address. When a private device sends a packet to the Internet, NAT on the router rewrites the source address to the public address and tracks the connection so the reply comes back to the right device. As a side effect, unsolicited inbound connections are not delivered to internal hosts, which gives NAT a protective quality. However, NAT is not a firewall by itself: it does not inspect or filter traffic based on rules, and it should be paired with a firewall.", "يتيح تحويل عناوين الشبكة (NAT) لأجهزة خاصة كثيرة مشاركة عنوان عام واحد. فعندما يرسل جهاز خاص حزمة إلى الإنترنت، يُعيد NAT على الموجّه كتابة عنوان المصدر إلى العنوان العام ويتبع الاتصال حتى تعود الاستجابة إلى الجهاز الصحيح. وكأثر جانبي لا تُسلَّم الاتصالات الواردة غير المطلوبة إلى الأجهزة الداخلية، مما يمنح NAT طابعًا وقائيًا. لكن NAT ليس جدارًا ناريًا بذاته: فهو لا يفحص الحركة أو يصفيها وفق قواعد، ويجب دمجه مع جدار ناري."),
        l("The default gateway is the router that a LAN uses to reach networks outside itself, including the Internet. When a device wants to communicate with an address outside its own subnet, it sends the packet to the default gateway, which decides how to forward it. Understanding the gateway clarifies how a LAN reaches the wider network and where the boundary between trusted and untrusted traffic lies.", "البوابة الافتراضية هي الموجّه الذي تستخدمه الشبكة المحلية للوصول إلى الشبكات خارجها، بما في ذلك الإنترنت. فعندما يريد جهاز التواصل مع عنوان خارج شبكته الفرعية، يرسل الحزمة إلى البوابة الافتراضية التي تقرر كيف توجّهها. ويساعد فهم البوابة على توضيح كيف تصل الشبكة المحلية إلى الشبكة الأوسع وأين يقع الحد بين الحركة الموثوقة وغير الموثوقة."),
      ],
    },
    {
      h: l("7. Subnets and CIDR calculation", "7. الشبكات الفرعية وحساب CIDR"),
      p: [
        l("CIDR notation writes an address with a prefix length: 192.168.10.77/26 means the first 26 bits identify the network and the remaining 6 bits identify hosts. The prefix gives the subnet mask (/26 = 255.255.255.192). The network address has all host bits set to 0, the broadcast address has all host bits set to 1, and the number of usable hosts is 2 raised to the power of the host bits, minus 2 (one for the network address and one for the broadcast).", "تكتب صيغة CIDR العنوان مع طول البادئة: 192.168.10.77/26 تعني أن أول 26 بتًا تعرّف الشبكة والستة المتبقية تعرّف الأجهزة. وتعطي البادئة قناع الشبكة (/26 = 255.255.255.192). عنوان الشبكة كل بتات الأجهزة فيه 0، وعنوان البث كلها 1، وعدد الأجهزة القابلة للاستخدام هو 2 مرفوعًا إلى عدد بتات الأجهزة، ناقص 2 (واحد لعنوان الشبكة وواحد لعنوان البث)."),
        l("For /26: 32 − 26 = 6 host bits, so 2^6 − 2 = 62 usable hosts. The block size is 2^6 = 64, so 192.168.10.77 belongs to the block 192.168.10.64 through 192.168.10.127 (network .64, broadcast .127, usable hosts .65 through .126). Mastering this calculation is the practical skill you will use to plan and verify any subnet.", "في /26: 32 − 26 = 6 بتات للأجهزة، لذا 2^6 − 2 = 62 جهازًا قابلًا للاستخدام. وحجم الكتلة 2^6 = 64، لذا ينتمي 192.168.10.77 إلى الكتلة من 192.168.10.64 إلى 192.168.10.127 (الشبكة .64 والبث .127 والأجهزة .65 إلى .126). وإتقان هذا الحساب هو المهارة العملية التي ستستخدمها لتخطيط أي شبكة فرعية والتحقق منها."),
      ],
      table: {
        head: [l("Prefix", "البادئة"), l("Mask", "القناع"), l("Block size (last octet)", "حجم الكتلة (الخانة الأخيرة)"), l("Usable hosts", "الأجهزة القابلة للاستخدام")],
        rows: [
          [l("/24", "/24"), l("255.255.255.0", "255.255.255.0"), l("256", "256"), l("254", "254")],
          [l("/25", "/25"), l("255.255.255.128", "255.255.255.128"), l("128", "128"), l("126", "126")],
          [l("/26", "/26"), l("255.255.255.192", "255.255.255.192"), l("64", "64"), l("62", "62")],
          [l("/27", "/27"), l("255.255.255.224", "255.255.255.224"), l("32", "32"), l("30", "30")],
          [l("/28", "/28"), l("255.255.255.240", "255.255.255.240"), l("16", "16"), l("14", "14")],
          [l("/30", "/30"), l("255.255.255.252", "255.255.255.252"), l("4", "4"), l("2", "2")],
        ],
      },
    },
    {
      h: l("8. Subnetting for security: segmentation", "8. تقسيم الشبكات للأمن: الفصل"),
      p: [
        l("Subnetting is not only a planning exercise; it is a security tool. Separating staff, servers, guests and IoT devices into different subnets lets you control traffic between them with firewall rules and limits lateral movement. If a breach occurs in one segment, the rules keep it from freely reaching the rest of the network, which is the difference between a contained incident and a wide-scale compromise.", "ليس تقسيم الشبكات مجرد تمرين تخطيط؛ بل هو أداة أمنية. ففصل الموظفين والخوادم والضيوف وأجهزة إنترنت الأشياء في شبكات فرعية مختلفة يتيح التحكم في الحركة بينها بقواعد جدار ناري ويحدّ من الحركة الجانبية. وإذا حدث اختراق في قطاع واحد، تُبقيه القواعد من الوصول بحرية إلى بقية الشبكة، وهو الفارق بين حادثة محصورة واختراق واسع النطاق."),
        l("Good practice is to keep a current map of IP ranges, devices and their subnets so you know what each segment contains and can contain a breach quickly. Open only the ports and flows each service truly needs, remembering that every open port is attack surface. The subnetting skills from this session are what let you turn a flat, vulnerable network into a set of controlled zones.", "من الممارسات الجيدة الاحتفاظ بخريطة حديثة لنطاقات IP والأجهزة والشبكات الفرعية لتعرف ما تحتويه كل شبكة فرعية وتحصر الاختراق بسرعة. وافتح فقط المنافذ والتدفقات التي تحتاجها كل خدمة حقًا، وتذكّر أن كل منفذ مفتوح هو سطح هجوم. ومهارتا تقسيم الشبكات من هذه الجلسة هما ما يتيح تحويل شبكة مسطحة وسريعة التعرض إلى مجموعة من المناطق المضبوطة."),
      ],
    },
  ],
  examples: [
    l(
      "To find your network details on Windows, run ipconfig and read the IPv4 address, subnet mask and default gateway. On Linux or macOS, run ip addr (or ifconfig). The address and mask tell you your subnet; the gateway tells you how you leave it.",
      "للعثور على تفاصيل شبكتك على ويندوز، شغّل ipconfig واقرأ عنوان IPv4 وقناع الشبكة والبوابة الافتراضية. وعلى لينكس أو ماك شغّل ip addr (أو ifconfig). يخبرنا العنوان والقناع بشبكتنا الفرعية؛ وتخبرنا البوابة بكيفية مغادرتها.",
    ),
    l(
      "To calculate a /26 subnet for 192.168.10.0: the block size is 64, so the network address is 192.168.10.0, the broadcast is 192.168.10.63, and the usable hosts run from 192.168.10.1 to 192.168.10.62.",
      "لحساب شبكة /26 لـ 192.168.10.0: حجم الكتلة 64، لذا عنوان الشبكة 192.168.10.0، والبث 192.168.10.63، والأجهزة القابلة للاستخدام من 192.168.10.1 إلى 192.168.10.62.",
    ),
    l(
      "A home router with NAT lets your phone, laptop and smart TV — all with private addresses such as 192.168.1.x — share one public address. From the Internet, an incoming connection cannot reach your laptop directly because NAT does not forward unsolicited inbound traffic.",
      "يتيح موجّه منزلي مزود بـ NAT لهاتفك وحاسوبك المحمول وتلفازك الذكي — وكلها بعناوين خاصة مثل 192.168.1.x — مشاركة عنوان عام واحد. ومن الإنترنت لا يمكن لاتصال وارد أن يصل مباشرة إلى حاسوبك المحمول لأن NAT لا يمرر الحركة الواردة غير المطلوبة.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A small office has 40 devices on a single flat network, 192.168.10.0/24. An attacker who compromises one staff PC can reach the database and backup server directly because everything shares one subnet. Splitting the network into separate subnets for staff, servers, guests and cameras, with firewall rules between them, contains the breach.",
      "يحتوي مكتب صغير على 40 جهازًا في شبكة مسطحة واحدة 192.168.10.0/24. يمكن للمهاجم الذي يخترق حاسوب موظف واحد أن يصل مباشرة إلى قاعدة البيانات وخادم النسخ الاحتياطي لأن كل شيء يشترك في شبكة فرعية واحدة. ويؤدي تقسيم الشبكة إلى شبكات فرعية منفصلة للموظفين والخوادم والضيوف والكاميرات مع قواعد جدار ناري بينها إلى حصر الاختراق.",
    ),
    l(
      "A guest Wi-Fi network uses the same subnet as the internal staff network. A compromised guest device can scan and reach internal resources. Putting guests on their own subnet with no route to the internal network prevents this lateral movement.",
      "تستخدم شبكة واي فاي للضيوف نفس الشبكة الفرعية لشبكة الموظفين الداخلية. يمكن لجهاز ضيف مخترق أن يمسح ويصل إلى الموارد الداخلية. ويؤدي وضع الضيوف في شبكة فرعية خاصة دون مسار إلى الشبكة الداخلية إلى منع هذه الحركة الجانبية.",
    ),
    l(
      "An investigation traces an attack to an internal device. By examining IP addresses and subnet boundaries, the team determines which segment the device belongs to and which other segments it could reach, narrowing the scope of the compromise and the containment actions.",
      "يتتبع تحقيق هجومًا إلى جهاز داخلي. ومن خلال فحص عناوين IP وحدود الشبكات الفرعية، يحدد الفريق الشبكة الفرعية التي ينتمي إليها الجهاز والشبكات الأخرى التي يمكنه الوصول إليها، مما يضيّق نطاق الاختراق وإجراءات الحصر.",
    ),
  ],
  diagram: {
    kind: "layers",
    title: l("OSI model — seven layers, seven kinds of attack and defence", "نموذج OSI — سبع طبقات وسبعة أنواع من الهجوم والدفاع"),
    caption: l(
      "Data is encapsulated down the layers on the sender and decapsulated up the layers on the receiver. Choose controls at the layer where the threat operates.",
      "تُغلَّف البيانات نزولًا عبر الطبقات عند المرسل وتُفك صعودًا عند المستقبل. اختر الضوابط في الطبقة التي يعمل فيها التهديد.",
    ),
    nodes: [
      { label: l("7 Application — HTTP, DNS, SMTP", "7 التطبيق — HTTP وDNS وSMTP"), desc: l("WAF, input validation", "جدار تطبيقات الويب والتحقق من المدخلات") },
      { label: l("6 Presentation — TLS, encoding", "6 العرض — TLS والترميز"), desc: l("Strong ciphers, valid certificates", "تشفير قوي وشهادات صالحة") },
      { label: l("5 Session", "5 الجلسة"), desc: l("Session timeouts, secure cookies", "مهلات الجلسة وملفات الارتباط الآمنة") },
      { label: l("4 Transport — TCP/UDP", "4 النقل — TCP/UDP"), desc: l("Stateful firewall, rate limiting", "جدار ناري بحالة وتحديد المعدل") },
      { label: l("3 Network — IP", "3 الشبكة — IP"), desc: l("ACLs, anti-spoofing filters", "قوائم التحكم بالوصول ومرشحات مكافحة الانتحال") },
      { label: l("2 Data link — Ethernet/Wi-Fi", "2 وصلة البيانات — إيثرنت/واي فاي"), desc: l("VLANs, port security, WPA3", "VLAN وأمان المنافذ وWPA3") },
      { label: l("1 Physical", "1 المادية"), desc: l("Locked cabinets, port control", "خزائن مقفلة وتحكم بالمنافذ") },
    ],
  },
  instructorDemo: l(
    "Demonstrate subnetting with the CIDR calculator tool on screen. Enter 192.168.10.77/26 and walk through the result: show the mask, the block size of 64, the network address .64, the broadcast .127, and the usable host range .65–.126. Then enter 192.168.10.0/26, .128/26 and .192/26 to show four equal subnets. Explain how you derived each value from the prefix, and connect the result to a real segmentation decision (assigning staff, servers, guests and cameras to separate subnets). Keep the demonstration on the calculator tool; do not scan any real network.",
    "عرض تقسيم الشبكات بأداة حاسبة CIDR على الشاشة. أدخل 192.168.10.77/26 واشرح الناتج: اعرض القناع وحجم الكتلة 64 وعنوان الشبكة .64 والبث .127 ونطاق الأجهزة .65–.126. ثم أدخل 192.168.10.0/26 و.128/26 و.192/26 لبيان أربع شبكات فرعية متساوية. واشرح كيف اشتققت كل قيمة من البادئة، واربط الناتج بقرار تقسيم حقيقي (توزيع الموظفين والخوادم والضيوف والكاميرات على شبكات فرعية منفصلة). واحتفظ بالعرض على أداة الحاسبة؛ ولا تمسح أي شبكة حقيقية.",
  ),
  exercises: [
    {
      title: l("Calculate subnet ranges", "حساب نطاقات الشبكات الفرعية"),
      instructions: l(
        "Using the CIDR calculator, calculate the network address, broadcast address and usable host range for 10.0.0.0/24, 192.168.5.0/26 and 172.16.2.0/27. Record each result and explain how you derived it.",
        "باستخدام حاسبة CIDR، احسب عنوان الشبكة وعنوان البث ونطاق الأجهزة القابلة للاستخدام لـ 10.0.0.0/24 و192.168.5.0/26 و172.16.2.0/27. وسجّل كل ناتج واشرح كيف اشتقتّه.",
      ),
      expected: l(
        "Correct network, broadcast and usable ranges for all three prefixes, with a clear explanation of block size and the 2^n − 2 host calculation.",
        "نطاقات الشبكة والبث والأجهزة الصحيحة للبادئات الثلاثة، مع شرح واضح لحجم الكتلة وحساب الأجهزة 2^n − 2.",
      ),
    },
    {
      title: l("Design a segmentation plan", "تصميم خطة تقسيم"),
      instructions: l(
        "Given a 192.168.10.0/24 network for a 40-person office, split it into four equal-size subnets for staff, servers, guests and cameras. Assign the /26 subnets to each role and note which traffic between them you would allow or block.",
        "بالنظر إلى شبكة 192.168.10.0/24 لمكتب من 40 شخصًا، قسّمها إلى أربع شبكات فرعية متساوية للموظفين والخوادم والضيوف والكاميرات. ووزّع شبكات /26 على كل دور وسجّل الحركة بينها التي ستسمح بها أو تحجبها.",
      ),
      expected: l(
        "Four /26 subnets (.0, .64, .128, .192) assigned to roles, each with 62 usable hosts, plus a short allow/deny matrix between the segments that blocks free lateral movement.",
        "أربع شبكات /26 (‎.0 و.64 و.128 و.192) موزعة على الأدوار، لكل منها 62 جهازًا قابلًا للاستخدام، مع مصفوفة سماح/منع قصيرة بين القطاعات تحجب الحركة الجانبية الحرة.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can describe the OSI and TCP/IP models and attach security concerns to each layer, explain the roles of switches, routers, access points and gateways, differentiate MAC and IP addressing and private vs public ranges, explain NAT and the default gateway, and calculate subnet information using CIDR notation. You can also explain how subnetting supports segmentation and limits an attacker's movement.",
    "بعد هذه الجلسة يمكنك وصف نموذجي OSI وTCP/IP وربط المسائل الأمنية بكل طبقة، وشرح أدوار المحولات والموجهات ونقاط الوصول والبوابات، والتمييز بين عنونة MAC وIP والنطاقات الخاصة والعامة، وشرح NAT والبوابة الافتراضية، وحساب معلومات الشبكة الفرعية باستخدام صيغة CIDR. ويمكنك أيضًا شرح كيف يدعم تقسيم الشبكات الفصل ويحدّ من حركة المهاجم.",
  ),
  commonMistakes: [
    l(
      "Confusing a MAC address with an IP address: MAC is a fixed hardware identifier for the local link, while IP is a routable network address that can change.",
      "الخلط بين عنوان MAC وعنوان IP: فـ MAC معرّف عتادي ثابت للوصلة المحلية، بينما IP عنوان شبكة قابل للتوجيه يمكن أن يتغير.",
    ),
    l(
      "Treating NAT as a firewall: NAT rewrites addresses but does not inspect or filter traffic, so it must be paired with a firewall.",
      "التعامل مع NAT كجدار ناري: فـ NAT يعيد كتابة العناوين لكنه لا يفحص الحركة أو يصفيها، لذا يجب دمجه مع جدار ناري.",
    ),
    l(
      "Forgetting to subtract 2 when counting usable hosts: the network and broadcast addresses cannot be assigned to a host.",
      "نسيان طرح 2 عند حساب الأجهزة القابلة للاستخدام: فعنوان الشبكة وعنوان البث لا يمكن تعيينهما لجهاز.",
    ),
    l(
      "Mixing up block size and host count: the block size is 2^n, while usable hosts are 2^n − 2.",
      "الخلط بين حجم الكتلة وعدد الأجهزة: فحجم الكتلة هو 2^n، بينما الأجهزة القابلة للاستخدام 2^n − 2.",
    ),
    l(
      "Assuming a private address means a device is safe: private addresses are simply not routed on the Internet; devices on a private network still need protection.",
      "الافتراض أن العنوان الخاص يعني أن الجهاز آمن: فالعناوين الخاصة فقط لا تُوجَّه على الإنترنت؛ ولا تزال الأجهزة على الشبكة الخاصة بحاجة إلى الحماية.",
    ),
  ],
  bestPractices: [
    l(
      "Segment networks into separate subnets for staff, servers, guests and IoT, and use firewall rules to control traffic between segments.",
      "قسّم الشبكات إلى شبكات فرعية منفصلة للموظفين والخوادم والضيوف وإنترنت الأشياء، واستخدم قواعد جدار ناري للتحكم في الحركة بين القطاعات.",
    ),
    l(
      "Keep a current map of IP ranges, devices and their subnets so you know what each segment contains and can contain a breach.",
      "احتفظ بخريطة حديثة لنطاقات IP والأجهزة والشبكات الفرعية لتعرف ما تحتويه كل شبكة فرعية وتحصر الاختراق.",
    ),
    l(
      "Open only the ports and flows a service truly needs, and remember that every open port is attack surface.",
      "افتح فقط المنافذ والتدفقات التي تحتاجها الخدمة حقًا، وتذكّر أن كل منفذ مفتوح هو سطح هجوم.",
    ),
    l(
      "Use strong Wi-Fi security (WPA2/WPA3), disable WPS, and place guests on a separate subnet with no route to internal resources.",
      "استخدم أمن واي فاي قوي (WPA2/WPA3)، وعطّل WPS، وضع الضيوف في شبكة فرعية منفصلة دون مسار إلى الموارد الداخلية.",
    ),
  ],
  keyTakeaways: [
    l(
      "Networking is organized in layers (OSI and TCP/IP), and attacks and defenses are specific to each layer.",
      "تُنظَّم الشبكات في طبقات (OSI وTCP/IP)، وتكون الهجمات والدفاعات خاصة بكل طبقة.",
    ),
    l(
      "Switches work at Layer 2, routers at Layer 3, and the default gateway is how a LAN reaches other networks.",
      "تعمل المحولات في الطبقة 2 والموجهات في الطبقة 3، والبوابة الافتراضية هي كيف تصل الشبكة المحلية إلى الشبكات الأخرى.",
    ),
    l(
      "MAC addresses identify hardware on the local link; IP addresses identify hosts on a network and are routable.",
      "تعرّف عناوين MAC العتاد على الوصلة المحلية؛ وتُعرّف عناوين IP المضيفين على الشبكة وهي قابلة للتوجيه.",
    ),
    l(
      "Private ranges (10/8, 172.16/12, 192.168/16) are not routed on the Internet; NAT lets private hosts share a public address but is not a firewall.",
      "لا تُوجَّه النطاقات الخاصة (10/8 و172.16/12 و192.168/16) على الإنترنت؛ ويتيح NAT للأجهزة الخاصة مشاركة عنوان عام لكنه ليس جدارًا ناريًا.",
    ),
    l(
      "CIDR (for example /26) gives the mask and host count; usable hosts are 2^n − 2, and subnetting is a tool for containing a breach.",
      "تعطي CIDR (مثل /26) القناع وعدد الأجهزة؛ والأجهزة القابلة للاستخدام 2^n − 2، وتقسيم الشبكات أداة لحصر الاختراق.",
    ),
  ],
  lab: {
    title: l("Lab 4 — IP Addressing & Subnetting", "المختبر 4 — عنونة IP وتقسيم الشبكات"),
    scenario: l(
      "You are a network administrator setting up a small office. The office uses 192.168.10.0/24 as one flat network where staff PCs, servers, a guest Wi-Fi and a few IP cameras all share it. Your task is to calculate subnet information, split the network into isolated subnets of equal size, and verify address calculations so you can control traffic between each segment.",
      "أنت مسؤول شبكات تهيئ مكتبًا صغيرًا. يستخدم المكتب 192.168.10.0/24 كشبكة مسطحة واحدة يشترك فيها حواسيب الموظفين والخوادم وواي فاي الضيوف وبعض الكاميرات. مهمتك حساب معلومات الشبكة الفرعية، وتقسيم الشبكة إلى شبكات فرعية معزولة متساوية الحجم، والتحقق من حسابات العناوين لتتمكن من التحكم في الحركة بين كل قطاع.",
    ),
    safety: l(
      "Run this lab using the CIDR calculator and on paper only. Do not scan, probe or modify any real network you do not own or administer — unauthorized network scanning may be illegal and can disrupt systems. All addresses used are fictional private ranges (192.168.x.x). If you are unsure whether a network is in scope, stop and confirm authorization first.",
      "نفّذ هذا المختبر باستخدام حاسبة CIDR وعلى الورق فقط. لا تمسح أو تفحص أو تغيّر أي شبكة حقيقية لا تملكها أو تديرها — فمسح الشبكات غير المصرّح به قد يكون مخالفًا للقانون وقد يعطّل الأنظمة. وجميع العناوين المستخدمة هي نطاقات خاصة خيالية (192.168.x.x). وإذا لم تكن متأكدًا من أن شبكة ما ضمن النطاق، توقف وتحقق من التصريح أولًا.",
    ),
    steps: [
      l("Calculate the subnet mask, network, broadcast and usable host range for a given CIDR block", "حساب قناع الشبكة والشبكة والبث ونطاق الأجهزة لكتلة CIDR معطاة"),
      l("Identify whether an address is private or public", "تحديد ما إذا كان العنوان خاصًا أو عامًا"),
      l("Split a /24 network into four equal-size /26 subnets", "تقسيم شبكة /24 إلى أربع شبكات /26 متساوية الحجم"),
      l("Assign roles to the subnets and verify address membership", "تعيين أدوار للشبكات الفرعية والتحقق من انتماء العناوين"),
      l("Build an allow/deny matrix between the segments", "بناء مصفوفة سماح/منع بين القطاعات"),
      l("Verify the calculations and write a short segmentation note", "التحقق من الحسابات وكتابة ملاحظة تقسيم قصيرة"),
    ],
    expected: l(
      "You produce correct subnet calculations for the given CIDR blocks, a four-subnet segmentation plan for 192.168.10.0/24 (/26 each, 62 hosts), verified address membership, and an allow/deny matrix between the segments that blocks free lateral movement.",
      "تنتج حسابات صحيحة للشبكات الفرعية لكتائل CIDR المعطاة، وخطة تقسيم إلى أربع شبكات لـ 192.168.10.0/24 (/26 لكل منها و62 جهازًا)، وتحققًا من انتماء العناوين، ومصفوفة سماح/منع بين القطاعات تحجب الحركة الجانبية الحرة.",
    ),
    tool: "cidr",
    objectives: [
      l("Calculate subnet masks, network and broadcast addresses from CIDR notation", "حساب أقنعة الشبكات وعناوين الشبكة والبث من صيغة CIDR"),
      l("Identify private versus public address ranges", "تحديد النطاقات الخاصة مقابل العامة"),
      l("Split a network into equal-size subnets", "تقسيم الشبكة إلى شبكات فرعية متساوية الحجم"),
      l("Assign roles to subnets and control traffic between them", "تعيين أدوار للشبكات الفرعية والتحكم في الحركة بينها"),
      l("Apply subnetting to support segmentation and containment", "تطبيق تقسيم الشبكات لدعم الفصل والحصر"),
    ],
    prerequisites: [
      l("Session 4: operating system fundamentals (basic computer and resource concepts)", "الجلسة 4: أساسيات أنظمة التشغيل (المفاهيم الحاسوبية والموارد الأساسية)"),
      l("Comfort with basic numeric reasoning; no previous networking experience is required", "الراحة في التفكير العددي الأساسي؛ لا تُشترط خبرة سابقة في الشبكات"),
    ],
    environment: l(
      "A browser with the CIDR calculator tool, or a spreadsheet/paper for manual calculation. No real network, VMs or scanning tools are required. All practice uses fictional private addresses (192.168.x.x).",
      "متصفح مع أداة حاسبة CIDR، أو جدول بيانات/ورق للحساب اليدوي. لا تتطلب شبكة حقيقية أو أجهزة افتراضية أو أدوات مسح. وتُستخدم جميع التدريبات عناوين خاصة خيالية (192.168.x.x).",
    ),
    tools: [
      l("CIDR subnet calculator (companion browser tool)", "حاسبة الشبكات الفرعية CIDR (أداة متصفح مساندة)"),
      l("ipconfig / ip addr (for observing real addressing, optional)", "ipconfig / ip addr (لمراقبة العنونة الحقيقية، اختياري)"),
      l("Spreadsheet or paper for manual calculation", "جدول بيانات أو ورق للحساب اليدوي"),
    ],
    authorization: l(
      "Scope: calculation on paper and in the companion tool only, using fictional private addresses. Prohibited: scanning, probing or changing any real network, device or address. Stop condition: if you are asked to act on a real network, or you are unsure of the scope, stop and confirm authorization first.",
      "النطاق: الحساب على الورق وفي الأداة المساندة فقط، باستخدام عناوين خاصة خيالية. المحظور: مسح أو فحص أو تغيير أي شبكة أو جهاز أو عنوان حقيقي. شرط التوقف: إذا طُلب منك التصرف على شبكة حقيقية، أو لم تكن متأكدًا من النطاق، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Calculate a /26 subnet", "حساب شبكة /26"),
        command: "CIDR calculator: enter 192.168.10.77/26",
        explanation: l(
          "Enter the address and prefix. The tool returns the mask, block size, network address, broadcast address and usable host range. This is the core calculation you will use for segmentation.",
          "أدخل العنوان والبادئة. وترجع الأداة القناع وحجم الكتلة وعنوان الشبكة وعنوان البث ونطاق الأجهزة القابلة للاستخدام. وهذا هو الحساب الأساسي الذي ستستخدمه للتقسيم.",
        ),
        expected: l("Mask 255.255.255.192, block size 64, network 192.168.10.64, broadcast 192.168.10.127, usable hosts 192.168.10.65–192.168.10.126.", "القناع 255.255.255.192، وحجم الكتلة 64، والشبكة 192.168.10.64، والبث 192.168.10.127، والأجهزة .65–.126."),
      },
      {
        title: l("Identify private and public addresses", "تحديد العناوين الخاصة والعامة"),
        command: "CIDR calculator: test 10.20.30.40/8 and 8.8.8.8/32",
        explanation: l(
          "Test two addresses. 10.20.30.40 falls in the private range 10.0.0.0/8 and is not routed on the Internet; 8.8.8.8 is a public address. Recognizing private ranges helps you understand what NAT protects and what is exposed.",
          "اختبر عنوانين. يقع 10.20.30.40 في النطاق الخاص 10.0.0.0/8 ولا يُوجَّه على الإنترنت؛ و8.8.8.8 عنوان عام. ويساعد التعرف على النطاقات الخاصة على فهم ما يحميّه NAT وما هو مكشوف.",
        ),
        expected: l("10.20.30.40 is private; 8.8.8.8 is public, confirming the private ranges are not routed on the Internet.", "10.20.30.40 خاص؛ و8.8.8.8 عام، مما يؤكد أن النطاقات الخاصة لا تُوجَّه على الإنترنت."),
      },
      {
        title: l("Split a /24 into four equal subnets", "تقسيم /24 إلى أربع شبكات متساوية"),
        command: "Calculate 192.168.10.0/26, .64/26, .128/26, .192/26",
        explanation: l(
          "A /24 has 256 addresses. To split it into four equal parts, use a /26 (64 addresses each). Calculate the four /26 blocks starting at .0, .64, .128 and .192 to see the equal segments.",
          "تحتوي /24 على 256 عنوانًا. ولقسمتها إلى أربعة أجزاء متساوية استخدم /26 (64 عنوانًا لكل منها). واحسب كتل /26 الأربع بدءًا من .0 و.64 و.128 و.192 لترى القطاعات المتساوية.",
        ),
        expected: l("Four /26 subnets: .0, .64, .128 and .192, each with 62 usable hosts.", "أربع شبكات /26: .0 و.64 و.128 و.192، لكل منها 62 جهازًا قابلًا للاستخدام."),
      },
      {
        title: l("Assign roles to subnets", "تعيين أدوار للشبكات الفرعية"),
        command: "Plan: Staff=.0, Servers=.64, Guests=.128, Cameras=.192",
        explanation: l(
          "Assign each role to a subnet. Staff needs broad access to servers but not to cameras; guests should have no route to staff or servers; cameras need only to reach the server subnet. This assignment defines what each segment contains.",
          "عيّن كل دور إلى شبكة فرعية. يحتاج الموظفون إلى وصول واسع إلى الخوادم لكن ليس إلى الكاميراات؛ ولا ينبغي للضيوف أي مسار إلى الموظفين أو الخوادم؛ وتحتاج الكاميراات فقط إلى الوصول إلى شبكة الخوادم. ويحدد هذا التعيين ما تحتويه كل شبكة فرعية.",
        ),
        expected: l("A role-to-subnet map: Staff .0, Servers .64, Guests .128, Cameras .192, each with its purpose noted.", "خريطة دور-إلى-شبكة: الموظفون .0، الخوادم .64، الضيوف .128، الكاميراات .192، مع ذكر الغرض من كل منها."),
      },
      {
        title: l("Verify address membership", "التحقق من انتماء العناوين"),
        command: "Verify 192.168.10.77 belongs to the Servers block (.64)",
        explanation: l(
          "Using the block size of 64, confirm that 192.168.10.77 falls between .64 and .127, so it belongs to the Servers subnet. This verifies that your segmentation plan places addresses in the intended segment.",
          "باستخدام حجم الكتلة 64، تأكد من أن 192.168.10.77 يقع بين .64 و.127، لذا ينتمي إلى شبكة الخوادم. ويتحقق هذا من أن خطة التقسيم تضع العناوين في الشبكة المقصودة.",
        ),
        expected: l("192.168.10.77 is confirmed in the .64–.127 Servers block, between network .64 and broadcast .127.", "يُؤكد أن 192.168.10.77 ضمن كتلة الخوادم .64–.127، بين الشبكة .64 والبث .127."),
      },
      {
        title: l("Build an allow/deny matrix", "بناء مصفوفة سماح/منع"),
        command: "Matrix: define allowed flows between segments",
        explanation: l(
          "Define which traffic is allowed between segments. For example, allow Staff→Servers and Cameras→Servers, but block Guests from reaching Staff, Servers and Cameras, and block all inbound Internet access except to the DMZ (covered later). The matrix turns the segmentation into enforceable rules.",
          "حدّد الحركة المسموح بها بين القطاعات. فعلى سبيل المثال، اسمح الموظفين→الخوادم والكاميرات→الخوادم، لكن امنع الضيوف من الوصول إلى الموظفين والخوادم والكاميرات، وامنع كل الوصول الوارد من الإنترنت إلا إلى DMZ (يُغطّى لاحقًا). وتُحوّل المصفوفة التقسيم إلى قواعد قابلة للتطبيق.",
        ),
        expected: l("A matrix showing allowed flows (Staff→Servers, Cameras→Servers) and blocked flows (Guests to all internal segments).", "مصفوفة تُظهر التدفقات المسموحة (الموظفون→الخوادم، الكاميراات→الخوادم) والتدفقات المحجوبة (الضيوف إلى جميع القطاعات الداخلية)."),
      },
    ],
    troubleshooting: [
      {
        problem: l("The calculator shows a network address you did not expect", "تُظهر الحاسبة عنوان شبكة لم تتوقعه"),
        fix: l("Check the prefix length and block size. The network address is always the start of the block; re-derive it using 2^(32−prefix) to confirm the block size.", "تحقق من طول البادئة وحجم الكتلة. فعنوان الشبكة هو دائمًا بداية الكتلة؛ واشتقه مجددًا باستخدام 2^(32−البادئة) للتأكد من حجم الكتلة."),
      },
      {
        problem: l("Confusing usable hosts with block size", "الخلط بين الأجهزة القابلة للاستخدام وحجم الكتلة"),
        fix: l("Remember the block size is 2^n and usable hosts are 2^n − 2. For /26, block size 64 and usable hosts 62.", "تذكّر أن حجم الكتلة 2^n والأجهزة القابلة للاستخدام 2^n − 2. ففي /26 حجم الكتلة 64 والأجهزة 62."),
      },
      {
        problem: l("Unsure whether an address is private or public", "لست متأكدًا مما إذا كان العنوان خاصًا أو عامًا"),
        fix: l("Check against the RFC 1918 ranges: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16 are private; anything else in normal use is public.", "تحقق من نطاقات RFC 1918: 10.0.0.0/8 و172.16.0.0/12 و192.168.0.0/16 خاصة؛ وأي شيء آخر في الاستخدام الطبيعي عام."),
      },
      {
        problem: l("The four subnets do not add up to the original /24", "لا تضيف الشبكات الفرعية الأربع إلى /24 الأصلية"),
        fix: l("Confirm each /26 is 64 addresses and that the four blocks (.0, .64, .128, .192) together cover all 256 addresses of the /24.", "تأكد من أن كل /26 هو 64 عنوانًا وأن الكتل الأربع (.0 و.64 و.128 و.192) تغطي معًا كل 256 عنوانًا من /24."),
      },
    ],
    deliverables: [
      l("Correct subnet calculations for the given CIDR blocks (mask, network, broadcast, usable hosts)", "حسابات صحيحة للشبكات الفرعية لكتائل CIDR المعطاة (القناع والشبكة والبث والأجهزة)"),
      l("Identification of private versus public addresses", "تحديد العناوين الخاصة مقابل العامة"),
      l("A four-subnet segmentation plan for 192.168.10.0/24 with role assignments", "خطة تقسيم إلى أربع شبكات لـ 192.168.10.0/24 مع تعيين الأدوار"),
      l("Verified address membership for a sample address", "تحقق من انتماء عنوان لشبكة فرعية نموذجية"),
      l("An allow/deny matrix between the segments", "مصفوفة سماح/منع بين القطاعات"),
      l("A short segmentation note explaining the containment goal", "ملاحظة تقسيم قصيرة تشرح هدف الحصر"),
    ],
    rubric: [
      { criterion: l("Correct subnet calculations", "الحسابات الصحيحة للشبكات الفرعية"), weight: 30 },
      { criterion: l("Correct private/public identification", "التحديد الصحيح للخاص والعام"), weight: 20 },
      { criterion: l("Correct four-subnet segmentation plan", "خطة تقسيم صحيحة إلى أربع شبكات"), weight: 25 },
      { criterion: l("Sound allow/deny matrix limiting lateral movement", "مصفوفة سماح/منع سليمة تحدّ من الحركة الجانبية"), weight: 15 },
      { criterion: l("Clear segmentation note and safety awareness", "ملاحظة تقسيم واضحة ووعي بالسلامة"), weight: 10 },
    ],
  },
  majorLabId: "lab-04",
  quiz: [
    {
      q: l("Which device forwards packets between different IP networks?", "أي جهاز يمرر الحزم بين شبكات IP مختلفة؟"),
      options: [
        l("Hub", "موزّع"),
        l("Layer-2 switch", "محوّل الطبقة 2"),
        l("Router", "موجّه"),
        l("Patch panel", "لوحة توصيل"),
      ],
      answer: 2,
      why: l("Routers work at Layer 3 and connect separate IP networks.", "الموجهات تعمل في الطبقة 3 وتربط شبكات IP المنفصلة."),
    },
    {
      q: l("A MAC address is used for what purpose?", "ما الغرض من استخدام عنوان MAC؟"),
      options: [
        l("Routing packets across the Internet", "توجيه الحزم عبر الإنترنت"),
        l("Identifying a network card on the local link", "تحديد بطاقة شبكة على الوصلة المحلية"),
        l("Assigning IP addresses automatically", "تعيين عناوين IP تلقائيًا"),
        l("Encrypting traffic", "تشفير الحركة"),
      ],
      answer: 1,
      why: l("A MAC address identifies the network interface on the local link and is used only within one LAN.", "يعرّف عنوان MAC واجهة الشبكة على الوصلة المحلية ويُستخدم داخل شبكة محلية واحدة فقط."),
    },
    {
      q: l("ARP poisoning is an attack at which OSI layer?", "تسميم ARP هجوم في أي طبقة من OSI؟"),
      options: [
        l("Layer 7", "الطبقة 7"),
        l("Layer 2", "الطبقة 2"),
        l("Layer 4", "الطبقة 4"),
        l("Layer 6", "الطبقة 6"),
      ],
      answer: 1,
      why: l("ARP maps IP to MAC on the local link, which is the data-link layer.", "يربط ARP عناوين IP بـ MAC على الوصلة المحلية وهي طبقة وصلة البيانات."),
    },
    {
      q: l("How many usable host addresses are in a /26 subnet?", "كم عدد عناوين الأجهزة القابلة للاستخدام في شبكة /26؟"),
      options: [
        l("30", "30"),
        l("62", "62"),
        l("64", "64"),
        l("126", "126"),
      ],
      answer: 1,
      why: l("32 − 26 = 6 host bits; 2^6 − 2 = 62 usable hosts.", "32 − 26 = 6 بتات للأجهزة؛ 2^6 − 2 = 62 جهازًا قابلًا للاستخدام."),
    },
    {
      q: l("Which address is private (RFC 1918)?", "أي عنوان من العناوين الخاصة (RFC 1918)؟"),
      options: [
        l("8.8.8.8", "8.8.8.8"),
        l("172.20.4.9", "172.20.4.9"),
        l("172.32.0.1", "172.32.0.1"),
        l("193.168.1.1", "193.168.1.1"),
      ],
      answer: 1,
      why: l("172.16.0.0–172.31.255.255 is private; 172.32.x.x is public.", "النطاق 172.16.0.0–172.31.255.255 خاص؛ و172.32.x.x عام."),
    },
    {
      q: l("What is NAT mainly used for?", "فيمَ يُستخدم NAT أساسًا؟"),
      options: [
        l("Encrypting traffic", "تشفير الحركة"),
        l("Letting many private hosts share public addresses", "تمكين أجهزة خاصة كثيرة من مشاركة عناوين عامة"),
        l("Detecting malware", "كشف البرمجيات الخبيثة"),
        l("Storing logs", "تخزين السجلات"),
      ],
      answer: 1,
      why: l("NAT translates private to public addresses; it is not encryption, detection or logging.", "يترجم NAT العناوين الخاصة إلى عامة؛ وهو ليس تشفيرًا أو كشفًا أو تسجيلًا."),
    },
    {
      q: l("Why separate guests and IoT devices into their own subnets?", "لماذا نفصل الضيوف وأجهزة إنترنت الأشياء في شبكات فرعية خاصة؟"),
      options: [
        l("To increase Wi-Fi speed only", "لزيادة سرعة الواي فاي فقط"),
        l("To limit how far a compromised device can reach", "للحد من مدى وصول جهاز مخترق"),
        l("Because IPv4 requires it", "لأن IPv4 تتطلب ذلك"),
        l("To avoid using passwords", "لتجنب استخدام كلمات المرور"),
      ],
      answer: 1,
      why: l("Segmentation contains a breach and allows rule-based control between zones.", "يحصر التقسيم الاختراق ويتيح تحكمًا قائمًا على القواعد بين المناطق."),
    },
    {
      q: l("Which layer do TCP and UDP belong to?", "إلى أي طبقة ينتمي TCP وUDP؟"),
      options: [
        l("Network", "الشبكة"),
        l("Transport", "النقل"),
        l("Physical", "المادية"),
        l("Presentation", "العرض"),
      ],
      answer: 1,
      why: l("The transport layer uses ports to deliver data to the correct application.", "تستخدم طبقة النقل المنافذ لتسليم البيانات إلى التطبيق الصحيح."),
    },
    {
      q: l("The default gateway is used to:", "تُستخدم البوابة الافتراضية لـ:"),
      options: [
        l("Identify a device's MAC address", "تحديد عنوان MAC للجهاز"),
        l("Reach networks outside the device's own subnet", "الوصول إلى الشبكات خارج الشبكة الفرعية للجهاز"),
        l("Encrypt local traffic", "تشفير الحركة المحلية"),
        l("Assign IP addresses", "تعيين عناوين IP"),
      ],
      answer: 1,
      why: l("The default gateway (router) forwards traffic from the LAN to other networks, including the Internet.", "البوابة الافتراضية (الموجّه) توجّه الحركة من الشبكة المحلية إلى الشبكات الأخرى، بما في ذلك الإنترنت."),
    },
    {
      q: l("A /30 subnet has how many usable host addresses?", "كم عدد عناوين الأجهزة القابلة للاستخدام في شبكة /30؟"),
      options: [
        l("2", "2"),
        l("4", "4"),
        l("8", "8"),
        l("30", "30"),
      ],
      answer: 0,
      why: l("32 − 30 = 2 host bits; 2^2 − 2 = 2 usable hosts.", "32 − 30 = 2 بتات للأجهزة؛ 2^2 − 2 = 2 أجهزة قابلة للاستخدام."),
    },
    {
      q: l("Which is true about NAT?", "أي عبارة عن NAT صحيحة؟"),
      options: [
        l("NAT is a complete firewall", "NAT جدار ناري متكامل"),
        l("NAT rewrites private addresses to a public address but does not filter traffic", "يُعيد NAT كتابة العناوين الخاصة إلى عنوان عام لكنه لا يصفي الحركة"),
        l("NAT assigns MAC addresses", "يُعين NAT عناوين MAC"),
        l("NAT only works with IPv6", "لا يعمل NAT إلا مع IPv6"),
      ],
      answer: 1,
      why: l("NAT translates addresses for routing but does not inspect or filter; it must be paired with a firewall.", "يُترجم NAT العناوين للتوجيه لكنه لا يفحص أو يصفي؛ ويجب دمجه مع جدار ناري."),
    },
    {
      q: l("Which OSI layer is associated with IP spoofing?", "أي طبقة من OSI ترتبط بانتحال IP؟"),
      options: [
        l("Layer 2", "الطبقة 2"),
        l("Layer 3", "الطبقة 3"),
        l("Layer 4", "الطبقة 4"),
        l("Layer 7", "الطبقة 7"),
      ],
      answer: 1,
      why: l("IP operates at the Network layer (Layer 3), so IP spoofing is a Layer 3 attack.", "يعمل IP في طبقة الشبكة (الطبقة 3)، لذا يكون انتحال IP هجومًا من الطبقة 3."),
    },
  ],
  trueFalse: [
    {
      q: l("A MAC address can be routed across the Internet.", "يمكن توجيه عنوان MAC عبر الإنترنت."),
      answer: false,
      why: l("MAC addresses are used only on the local link and are not routable across the Internet.", "تُستخدم عناوين MAC فقط على الوصلة المحلية ولا يمكن توجيهها عبر الإنترنت."),
    },
    {
      q: l("/24 uses the subnet mask 255.255.255.0.", "تستخدم /24 قناع الشبكة 255.255.255.0."),
      answer: true,
      why: l("A /24 prefix leaves 8 host bits, giving the mask 255.255.255.0 and 254 usable hosts.", "تترك البادئة /24 ثماني بتات للأجهزة، مما يعطي القناع 255.255.255.0 و254 جهازًا قابلًا للاستخدام."),
    },
    {
      q: l("NAT is a complete security control on its own.", "يُعد NAT ضابط أمن متكامل بذاته."),
      answer: false,
      why: l("NAT rewrites addresses but does not inspect or filter traffic, so it must be paired with a firewall.", "يُعيد NAT كتابة العناوين لكنه لا يفحص الحركة أو يصفيها، لذا يجب دمجه مع جدار ناري."),
    },
    {
      q: l("The network address and the broadcast address can be assigned to a host.", "يمكن تعيين عنوان الشبكة وعنوان البث لجهاز."),
      answer: false,
      why: l("The network and broadcast addresses are reserved, so usable hosts are 2^n − 2.", "عنوان الشبكة والبث محجوزان، لذا تكون الأجهزة القابلة للاستخدام 2^n − 2."),
    },
    {
      q: l("Routers operate at Layer 3 of the OSI model.", "تعمل الموجهات في الطبقة 3 من نموذج OSI."),
      answer: true,
      why: l("Routers forward packets by IP address, which is the Network (Layer 3) function.", "توجّه الموجهات الحزم بحسب عنوان IP، وهو وظيفة طبقة الشبكة (الطبقة 3)."),
    },
    {
      q: l("Subnetting can help limit how far an attacker can move after a breach.", "يمكن أن يساعد تقسيم الشبكات في الحد من مدى تحرك المهاجم بعد الاختراق."),
      answer: true,
      why: l("Segmentation controls traffic between subnets, containing a compromise to the affected segment.", "يتحكم التقسيم في الحركة بين الشبكات الفرعية، فيُحصر الاختراق في الشبكة المتأثرة."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each device by the OSI layer it primarily operates at", "صنّف كل جهاز بحسب طبقة OSI التي يعمل بها أساسًا"),
      categories: [
        l("Layer 2 (Data link)", "الطبقة 2 (وصلة البيانات)"),
        l("Layer 3 (Network)", "الطبقة 3 (الشبكة)"),
        l("Layer 1 (Physical)", "الطبقة 1 (المادية)"),
        l("Layer 4 (Transport)", "الطبقة 4 (النقل)"),
      ],
      items: [
        { text: l("Switch", "المحوّل"), answer: 0 },
        { text: l("Router", "الموجّه"), answer: 1 },
        { text: l("Modem", "المودم"), answer: 2 },
        { text: l("TCP/UDP", "TCP/UDP"), answer: 3 },
      ],
      why: l("Switches are Layer 2, routers are Layer 3, modems deal with the physical signal, and TCP/UDP are transport-layer protocols.", "المحولات من الطبقة 2 والموجهات من الطبقة 3 والمودم يتعامل مع الإشارة المادية، وTCP/UDP بروتوكولات طبقة النقل."),
    },
    {
      prompt: l("Classify each address or concept as private or public", "صنّف كل عنوان أو مفهوم إلى خاص أو عام"),
      categories: [
        l("Private", "خاص"),
        l("Public", "عام"),
      ],
      items: [
        { text: l("192.168.1.5", "192.168.1.5"), answer: 0 },
        { text: l("8.8.8.8", "8.8.8.8"), answer: 1 },
        { text: l("10.0.0.1", "10.0.0.1"), answer: 0 },
        { text: l("172.32.0.1", "172.32.0.1"), answer: 1 },
      ],
      why: l("192.168/16 and 10/8 are private; 8.8.8.8 and 172.32.x.x are public.", "192.168/16 و10/8 خاصة؛ و8.8.8.8 و172.32.x.x عامة."),
    },
    {
      prompt: l("Match each prefix to its usable host count", "زاوج كل بادئة بعدد الأجهزة القابلة للاستخدام"),
      categories: [
        l("254 hosts", "254 جهازًا"),
        l("62 hosts", "62 جهازًا"),
        l("30 hosts", "30 جهازًا"),
        l("2 hosts", "2 أجهزة"),
      ],
      items: [
        { text: l("/24", "/24"), answer: 0 },
        { text: l("/26", "/26"), answer: 1 },
        { text: l("/27", "/27"), answer: 2 },
        { text: l("/30", "/30"), answer: 3 },
      ],
      why: l("/24 = 254, /26 = 62, /27 = 30, /30 = 2 usable hosts (2^n − 2).", "/24 = 254 و/26 = 62 و/27 = 30 و/30 = 2 أجهزة (2^n − 2)."),
    },
    {
      prompt: l("Classify each item as a MAC or an IP concept", "صنّف كل عنصر كمفهوم MAC أو IP"),
      categories: [
        l("MAC concept", "مفهوم MAC"),
        l("IP concept", "مفهوم IP"),
      ],
      items: [
        { text: l("48-bit hardware identifier", "معرّف عتادي من 48 بتًا"), answer: 0 },
        { text: l("Routable network address", "عنوان شبكة قابل للتوجيه"), answer: 1 },
        { text: l("Local-link addressing", "عنونة الوصلة المحلية"), answer: 0 },
        { text: l("Internet addressing", "عنونة الإنترنت"), answer: 1 },
      ],
      why: l("MAC is the hardware identifier for the local link; IP is the routable network address.", "MAC هو المعرّف العتادي للوصلة المحلية؛ وIP هو عنوان الشبكة القابل للتوجيه."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A 40-person office uses 192.168.10.0/24 as one flat network. An attacker who compromises one staff PC can reach the database directly because everything is on one subnet.",
        "يستخدم مكتب من 40 شخصًا 192.168.10.0/24 كشبكة مسطحة واحدة. ويمكن للمهاجم الذي يخترق حاسوب موظف واحد أن يصل مباشرة إلى قاعدة البيانات لأن كل شيء في شبكة فرعية واحدة.",
      ),
      question: l("What is the best first step to limit the impact?", "ما أفضل خطوة أولى للحد من التأثير؟"),
      options: [
        l("Increase the subnet mask to /16", "زيادة قناع الشبكة إلى /16"),
        l("Split the network into separate subnets with firewall rules between them", "تقسيم الشبكة إلى شبكات فرعية منفصلة مع قواعد جدار ناري بينها"),
        l("Disable NAT", "تعطيل NAT"),
        l("Assign MAC addresses to all devices", "تعيين عناوين MAC لجميع الأجهزة"),
      ],
      answer: 1,
      why: l("Segmentation with firewall rules contains a breach so it cannot freely reach other segments like the database.", "يحصر التقسيم مع قواعد الجدار الناري الاختراق فلا يصل بحرية إلى القطاعات الأخرى مثل قاعدة البيانات."),
    },
    {
      scenario: l(
        "A guest Wi-Fi network shares the same subnet as the internal staff network, and a guest device is compromised.",
        "تشارك شبكة واي فاي للضيوف نفس الشبكة الفرعية لشبكة الموظفين الداخلية، ويُخترق جهاز ضيف.",
      ),
      question: l("What is the risk and the fix?", "ما الخطر وما الحل؟"),
      options: [
        l("Risk: slower Wi-Fi; fix: change the SSID", "الخطر: بطء الواي فاي؛ والحل: تغيير SSID"),
        l("Risk: the guest device can reach internal resources; fix: put guests on a separate subnet with no internal route", "الخطر: يمكن لجهاز الضيف الوصول إلى الموارد الداخلية؛ والحل: وضع الضيوف في شبكة فرعية منفصلة دون مسار داخلي"),
        l("Risk: no risk; nothing to do", "الخطر: لا خطر؛ لا شيء للقيام به"),
        l("Risk: NAT fails; fix: enable WPS", "الخطر: يفشل NAT؛ والحل: تفعيل WPS"),
      ],
      answer: 1,
      why: l("A shared subnet allows lateral movement; a separate guest subnet with no route to internal resources contains it.", "تسمح الشبكة الفرعية المشتركة بحركة جانبية؛ وتحصرها شبكة ضيوف منفصلة دون مسار إلى الموارد الداخلية."),
    },
    {
      scenario: l(
        "You are calculating a subnet for a new server segment and must confirm how many usable host addresses a /27 provides.",
        "تحسب شبكة فرعية لقطاع خوادم جديد ويجب التأكد من عدد عناوين الأجهزة القابلة للاستخدام التي توفرها /27.",
      ),
      question: l("How many usable host addresses does a /27 provide?", "كم عدد عناوين الأجهزة القابلة للاستخدام التي توفرها /27؟"),
      options: [
        l("30", "30"),
        l("32", "32"),
        l("62", "62"),
        l("254", "254"),
      ],
      answer: 0,
      why: l("32 − 27 = 5 host bits; 2^5 − 2 = 30 usable hosts.", "32 − 27 = 5 بتات للأجهزة؛ 2^5 − 2 = 30 جهازًا قابلًا للاستخدام."),
    },
  ],
  practicalChecks: [
    {
      task: l("Given 192.168.5.0/26, state the network address, broadcast address and usable host range", "بالنظر إلى 192.168.5.0/26، حدد عنوان الشبكة وعنوان البث ونطاق الأجهزة القابلة للاستخدام"),
      expected: l("Network 192.168.5.0, broadcast 192.168.5.63, usable hosts 192.168.5.1–192.168.5.62.", "الشبكة 192.168.5.0، والبث 192.168.5.63، والأجهزة 192.168.5.1–192.168.5.62."),
      hint: l("Block size for /26 is 64; usable hosts are 2^6 − 2.", "حجم الكتلة لـ /26 هو 64؛ والأجهزة القابلة للاستخدام 2^6 − 2."),
    },
    {
      task: l("Explain why NAT alone is not a complete security control", "اشرح سبب أن NAT وحده ليس ضابط أمن متكامل"),
      expected: l("NAT rewrites addresses for routing but does not inspect or filter traffic, so it must be paired with a firewall.", "يُعيد NAT كتابة العناوين للتوجيه لكنه لا يفحص الحركة أو يصفيها، لذا يجب دمجه مع جدار ناري."),
    },
  ],
  homework: {
    title: l("Homework 7 — Map your network and practice subnetting", "الواجب 7 — رسم خريطة شبكتك والتدرّب على تقسيم الشبكات"),
    tasks: [
      l("Find your device's IP address, subnet mask and default gateway (ipconfig on Windows; ip addr on Linux/macOS) and record them.", "اعثر على عنوان IP وقناع الشبكة والبوابة الافتراضية لجهازك (ipconfig على ويندوز؛ ip addr على لينكس/ماك) وسجّلها."),
      l("Using the CIDR calculator, calculate the network range of your subnet and record network, broadcast and usable hosts.", "باستخدام حاسبة CIDR، احسب نطاق شبكتك الفرعية وسجّل الشبكة والبث والأجهزة القابلة للاستخدام."),
      l("Draw a diagram showing your modem, router/Wi-Fi and at least five devices with their IP addresses.", "ارسم مخططًا يبيّن المودم والموجّه/الواي فاي وخمسة أجهزة على الأقل مع عناوينها."),
      l("Propose a segmentation plan (guest Wi-Fi, IoT, staff) and the router feature needed to enforce it.", "اقترح خطة تقسيم (واي فاي ضيوف، إنترنت الأشياء، الموظفون) وميزة الموجّه اللازمة لتطبيقها."),
    ],
    deliverable: l(
      "A labelled network diagram with the calculated subnet range and a short segmentation proposal with the required router feature.",
      "مخطط شبكة موسوم مع نطاق الشبكة المحسوب واقتراح تقسيم قصير مع ميزة الموجّه المطلوبة.",
    ),
    criteria: [
      l("Correct IP address, mask and gateway recorded", "يُسجّل عنوان IP والقناع والبوابة بشكل صحيح"),
      l("Correct subnet calculation (network, broadcast, usable hosts)", "حساب صحيح للشبكة الفرعية (الشبكة والبث والأجهزة)"),
      l("Accurate network diagram with devices and addresses", "مخطط شبكة دقيق بالأجهزة والعناوين"),
      l("Practical segmentation plan with a justified router feature", "خطة تقسيم عملية مع ميزة موجّه مبررة"),
    ],
    challenge: l(
      "Optional challenge: given 172.16.0.0/22, calculate how many /26 subnets it contains and list their network addresses.",
      "مهمة تحدٍ اختيارية: بالنظر إلى 172.16.0.0/22، احسب عدد شبكات /26 التي تحتويها وسرد عناوين شبكاتها.",
    ),
  },
  refs: [
    { title: "Computer networking introduction", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/" },
    { title: "RFC 1918 — Address Allocation for Private Internets", org: "IETF", url: "https://www.rfc-editor.org/rfc/rfc1918" },
    { title: "RFC 4632 — Classless Inter-Domain Routing (CIDR)", org: "IETF", url: "https://www.rfc-editor.org/rfc/rfc4632" },
    { title: "Zero trust architecture design principles", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/zero-trust-architecture" },
    { title: "What is an IP address?", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/network-layer/what-is-an-ip-address/" },
  ],
  terms: [
    { term: l("OSI model", "نموذج OSI"), def: l("A seven-layer reference model describing network communication.", "نموذج مرجعي من سبع طبقات يصف الاتصال الشبكي."), example: l("Layer 1 is Physical, Layer 7 is Application.", "الطبقة 1 هي المادية والطبقة 7 هي التطبيق.") },
    { term: l("TCP/IP model", "نموذج TCP/IP"), def: l("A practical four-layer model: Link, Internet, Transport and Application.", "نموذج عملي من أربع طبقات: الوصلة والإنترنت والنقل والتطبيق.") },
    { term: l("Encapsulation", "التغليف"), def: l("Each layer adding its header to data as it is sent.", "إضافة كل طبقة لرأسها إلى البيانات عند الإرسال.") },
    { term: l("Switch", "المحوّل"), def: l("A Layer-2 device forwarding frames by MAC address inside a LAN.", "جهاز من الطبقة 2 يمرر الإطارات بحسب MAC داخل شبكة محلية.") },
    { term: l("Router", "الموجّه"), def: l("A Layer-3 device forwarding packets between networks by IP address.", "جهاز من الطبقة 3 يمرر الحزم بين الشبكات بحسب IP.") },
    { term: l("Access point", "نقطة الوصول"), def: l("A device providing Wi-Fi access to a network.", "جهاز يوفر الوصول إلى الشبكة عبر الواي فاي.") },
    { term: l("Modem", "المودم"), def: l("A device connecting a network to the Internet line from an ISP.", "جهاز يربط الشبكة بخط الإنترنت من مزوّد الخدمة.") },
    { term: l("Default gateway", "البوابة الافتراضية"), def: l("The router a LAN uses to reach networks outside itself, including the Internet.", "الموجّه الذي تستخدمه الشبكة المحلية للوصول إلى الشبكات خارجها، بما في ذلك الإنترنت.") },
    { term: l("MAC address", "عنوان MAC"), def: l("A 48-bit hardware identifier of a network interface, used on the local link.", "معرّف عتادي من 48 بتًا لواجهة شبكة يُستخدم على الوصلة المحلية.") },
    { term: l("IPv4", "IPv4"), def: l("The 32-bit IP addressing scheme providing about four billion addresses.", "نظام عنونة IP ذو 32 بتًا يوفر نحو أربعة مليارات عنوان.") },
    { term: l("IPv6", "IPv6"), def: l("The 128-bit IP addressing scheme with a much larger address space.", "نظام عنونة IP ذو 128 بتًا بمساحة عناوين أكبر بكثير.") },
    { term: l("ARP", "بروتوكول تحليل العناوين"), def: l("Protocol that resolves an IP address to a MAC address on a LAN.", "بروتوكول يحوّل عنوان IP إلى MAC في الشبكة المحلية.") },
    { term: l("ARP poisoning", "تسميم ARP"), def: l("An attack where a device falsifies ARP entries to intercept traffic.", "هجوم يُزوّر فيه جهاز سجلات ARP ليعترض الحركة.") },
    { term: l("Private address", "العنوان الخاص"), def: l("An address in the RFC 1918 ranges, not routed on the Internet.", "عنوان ضمن نطاقات RFC 1918 لا يُوجَّه على الإنترنت.") },
    { term: l("Public address", "العنوان العام"), def: l("A routable address, unique across the Internet.", "عنوان قابل للتوجيه فريد عبر الإنترنت.") },
    { term: l("NAT", "ترجمة عناوين الشبكة"), def: l("Network Address Translation: mapping private addresses to public ones.", "تحويل العناوين الخاصة إلى عامة.") },
    { term: l("CIDR", "التوجيه بين النطاقات بلا فئات"), def: l("Notation like /24 that states how many bits identify the network.", "صيغة مثل /24 تحدد عدد البتات التي تعرّف الشبكة.") },
    { term: l("Subnet mask", "قناع الشبكة"), def: l("The value (for example 255.255.255.0) that separates network and host bits.", "القيمة (مثل 255.255.255.0) التي تفصل بتات الشبكة والأجهزة.") },
    { term: l("Network address", "عنوان الشبكة"), def: l("The first address of a subnet, with all host bits set to 0.", "أول عنوان في الشبكة الفرعية، وكل بتات الأجهزة فيه 0.") },
    { term: l("Broadcast address", "عنوان البث"), def: l("The last address of a subnet, with all host bits set to 1.", "آخر عنوان في الشبكة الفرعية، وكل بتات الأجهزة فيه 1.") },
    { term: l("Usable hosts", "الأجهزة القابلة للاستخدام"), def: l("Addresses assignable to devices: 2^n − 2, excluding network and broadcast.", "العناوين التي يمكن تعيينها للأجهزة: 2^n − 2، باستثناء الشبكة والبث.") },
    { term: l("Block size", "حجم الكتلة"), def: l("2 raised to the number of host bits; the number of addresses per subnet.", "2 مرفوعًا إلى عدد بتات الأجهزة؛ وهو عدد العناوين لكل شبكة فرعية.") },
    { term: l("Subnet", "الشبكة الفرعية"), def: l("A logical subdivision of an IP network.", "تقسيم منطقي لشبكة IP.") },
    { term: l("Segmentation", "التقسيم"), def: l("Splitting a network into zones with controlled traffic between them.", "تقسيم الشبكة إلى مناطق بحركة مضبوطة بينها.") },
    { term: l("Lateral movement", "الحركة الجانبية"), def: l("An attacker moving between systems on the same network after an initial compromise.", "تحرك المهاجم بين الأنظمة على الشبكة نفسها بعد اختراق أولي.") },
    { term: l("VLAN", "شبكة منطقية محلية"), def: l("A virtual LAN that separates traffic on a single switch.", "شبكة محلية افتراضية تفصل الحركة على محوّل واحد.") },
    { term: l("Port", "المنفذ"), def: l("A 16-bit number identifying an application endpoint on a host.", "رقم من 16 بتًا يحدد نقطة نهاية تطبيق على مضيف.") },
    { term: l("SYN flood", "فيضان SYN"), def: l("A denial-of-service attack sending many SYN packets without completing handshakes.", "هجوم حجب خدمة يرسل حزم SYN كثيرة دون إكمال المصافحات.") },
    { term: l("IP spoofing", "انتحال IP"), def: l("Forging the source IP address of a packet to hide identity or impersonate.", "تزوير عنوان المصدر لحزمة لإخفاء الهوية أو انتحال صفة.") },
  ],
};
