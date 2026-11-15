import { l, type Session } from "./types";

export const s07: Session = {
  id: 7,
  phase: 2,
  minutes: 65,
  title: l("Networking Fundamentals II: Protocols, Ports, DNS and the Web", "أساسيات الشبكات 2: البروتوكولات والمنافذ وDNS والويب"),
  summary: l(
    "TCP vs UDP, the three-way handshake, ports and services, DHCP, DNS, HTTP/HTTPS and e-mail protocols — and what is secure or insecure about each.",
    "TCP مقابل UDP، والمصافحة الثلاثية، والمنافذ والخدمات، وDHCP وDNS وHTTP/HTTPS وبروتوكولات البريد — وما هو الآمن وغير الآمن في كلٍّ منها."
  ),
  objectives: [
    l("Compare TCP and UDP and describe the TCP three-way handshake.", "المقارنة بين TCP وUDP ووصف المصافحة الثلاثية في TCP."),
    l("Match common ports to services and tell encrypted from clear-text protocols.", "ربط المنافذ الشائعة بالخدمات والتمييز بين البروتوكولات المشفّرة وغير المشفّرة."),
    l("Explain how DHCP and DNS work and the attacks that target them.", "شرح عمل DHCP وDNS والهجمات التي تستهدفهما."),
    l("Describe an HTTPS request and what an observer on the network can and cannot see.", "وصف طلب HTTPS وما يستطيع المراقب على الشبكة رؤيته وما لا يستطيع."),
  ],
  sections: [
    {
      h: l("1. TCP, UDP and ports", "1. TCP وUDP والمنافذ"),
      p: [
        l("At the transport layer, an IP address finds the host and a port number (0–65535) finds the application on it. TCP is connection-oriented: it establishes a session, numbers the data, retransmits lost packets and guarantees order — used for web, e-mail, file transfer. UDP is connectionless and fast with no delivery guarantee — used for DNS queries, streaming, VoIP and games.", "في طبقة النقل يحدد عنوان IP المضيف ويحدد رقم المنفذ (0–65535) التطبيق عليه. TCP موجّه بالاتصال: ينشئ جلسة ويرقّم البيانات ويعيد إرسال المفقود ويضمن الترتيب — ويُستخدم للويب والبريد ونقل الملفات. أما UDP فبلا اتصال وسريع دون ضمان تسليم — ويُستخدم لاستعلامات DNS والبث والاتصال الصوتي والألعاب."),
        l("A TCP connection begins with a three-way handshake: the client sends SYN, the server replies SYN-ACK, the client answers ACK. Attackers abuse this: a SYN flood sends huge numbers of SYNs and never completes the handshake, exhausting the server's connection table; port scanners probe which ports answer to discover running services. Ports are classified as well-known (0–1023), registered (1024–49151) and dynamic (49152–65535).", "يبدأ اتصال TCP بمصافحة ثلاثية: يرسل العميل SYN فيرد الخادم بـ SYN-ACK ثم يجيب العميل بـ ACK. ويستغل المهاجمون ذلك: ففيضان SYN يرسل أعدادًا هائلة من SYN دون إكمال المصافحة فيستنزف جدول اتصالات الخادم؛ وتفحص ماسحات المنافذ أي المنافذ تستجيب لاكتشاف الخدمات العاملة. وتُصنَّف المنافذ إلى معروفة (0–1023) ومسجلة (1024–49151) وديناميكية (49152–65535)."),
      ],
      callout: { kind: "key", text: l("An open port means a service is listening – every listening service is attack surface. Open only what the business needs, and protect it.", "المنفذ المفتوح يعني أن خدمة تنصت — وكل خدمة منصتة هي سطح هجوم. افتح فقط ما تحتاجه الأعمال واحمِه.") },
    },
    {
      h: l("2. DHCP and DNS", "2. DHCP وDNS"),
      p: [
        l("DHCP automatically gives a device its IP address, mask, gateway and DNS server (the DORA exchange: Discover, Offer, Request, Acknowledge). Because any device on the LAN can answer a Discover broadcast, a rogue DHCP server can hand out a malicious gateway or DNS server and silently redirect traffic. Switches can defend with DHCP snooping.", "يمنح DHCP الجهاز تلقائيًا عنوان IP والقناع والبوابة وخادم DNS (تبادل DORA: اكتشاف، عرض، طلب، إقرار). ولأن أي جهاز في الشبكة المحلية يمكنه الرد على بث الاكتشاف، يستطيع خادم DHCP دخيل توزيع بوابة أو خادم DNS خبيث وإعادة توجيه الحركة بصمت. وتدافع المحولات بخاصية DHCP snooping."),
        l("DNS translates names such as example.com into IP addresses; it is the Internet's phone book. A resolver asks the recursive server, which queries root, TLD and authoritative servers and caches the answer. Classic DNS is unauthenticated and unencrypted, so attackers use DNS spoofing/cache poisoning, malicious look-alike domains, and DNS tunnelling to smuggle data out. Defences: DNSSEC for authenticity, encrypted DNS (DoH/DoT), trusted resolvers, and monitoring DNS logs — which are also an excellent source for detecting malware.", "يترجم DNS أسماء مثل example.com إلى عناوين IP؛ فهو دليل هاتف الإنترنت. يسأل المحلِّل الخادم التكراري الذي يستعلم من خوادم الجذر والنطاقات العليا والموثوقة ثم يخزن الجواب. وDNS التقليدي بلا مصادقة ولا تشفير، لذا يستخدم المهاجمون انتحال DNS وتسميم الذاكرة المؤقتة ونطاقات مشابهة خبيثة وأنفاق DNS لتهريب البيانات. الدفاعات: DNSSEC للأصالة، وDNS المشفّر (DoH/DoT)، ومحلِّلات موثوقة، ومراقبة سجلات DNS التي هي مصدر ممتاز لكشف البرمجيات الخبيثة."),
      ],
    },
    {
      h: l("3. HTTP, HTTPS and TLS", "3. HTTP وHTTPS وTLS"),
      p: [
        l("HTTP is the web's request/response protocol: a client sends a request (GET, POST…) and the server answers with a status code (200 OK, 301 redirect, 403 forbidden, 404 not found, 500 server error) and content. Plain HTTP travels as readable text, so anyone on the path can read or modify it. HTTPS wraps HTTP inside TLS: the server proves its identity with a certificate, client and server agree on keys, and all content is encrypted and integrity-protected (details in Sessions 9–10).", "HTTP هو بروتوكول الطلب/الاستجابة للويب: يرسل العميل طلبًا (GET وPOST…) فيجيب الخادم برمز حالة (200 نجاح، 301 تحويل، 403 ممنوع، 404 غير موجود، 500 خطأ خادم) ومحتوى. وHTTP العادي ينتقل كنص مقروء فيستطيع أي طرف في المسار قراءته أو تعديله. أما HTTPS فيغلّف HTTP داخل TLS: يثبت الخادم هويته بشهادة، ويتفق الطرفان على مفاتيح، ويصبح كل المحتوى مشفرًا ومحميًا من التعديل (التفاصيل في الجلستين 9–10)."),
        l("What can a network observer see with HTTPS? The destination IP, the domain name (via DNS and the SNI field, unless encrypted DNS/ECH is used), timing and data volume — but not the URL path, the page content, form data or cookies. Public Wi-Fi is therefore safe for HTTPS sites, but the browser's padlock only proves the connection is encrypted to that domain — it does not prove the site is trustworthy.", "ماذا يرى المراقب على الشبكة مع HTTPS؟ يرى عنوان IP الوجهة واسم النطاق (عبر DNS وحقل SNI ما لم يُستخدم DNS المشفّر/ECH) والتوقيت وحجم البيانات — لكنه لا يرى مسار العنوان ولا محتوى الصفحة ولا بيانات النماذج ولا ملفات الارتباط. لذا فالواي فاي العام آمن نسبيًا لمواقع HTTPS، لكن قفل المتصفح يثبت فقط أن الاتصال مشفّر مع ذلك النطاق — لا أن الموقع جدير بالثقة."),
      ],
      callout: { kind: "warn", text: l("Phishing sites also use HTTPS and show a padlock. Always check the domain name itself, not the padlock.", "مواقع التصيّد تستخدم HTTPS وتظهر القفل أيضًا. افحص اسم النطاق نفسه لا القفل.") },
    },
    {
      h: l("4. E-mail and other common protocols", "4. البريد وبروتوكولات شائعة أخرى"),
      p: [l("E-mail uses SMTP to send between servers, and IMAP or POP3 to read mail. Plain versions are clear-text; modern services require TLS. Three DNS-published records protect a domain's mail from spoofing: SPF (which servers may send for the domain), DKIM (a cryptographic signature on messages) and DMARC (policy on what to do when SPF/DKIM fail and where to send reports).", "يستخدم البريد SMTP للإرسال بين الخوادم وIMAP أو POP3 لقراءته. والنسخ العادية بنص واضح؛ وتتطلب الخدمات الحديثة TLS. وتحمي ثلاثة سجلات تُنشر في DNS بريد النطاق من الانتحال: SPF (أي الخوادم يحق لها الإرسال باسم النطاق) وDKIM (توقيع تشفيري على الرسائل) وDMARC (سياسة ما يُفعل عند فشل SPF/DKIM وأين تُرسل التقارير).")],
      table: {
        head: [l("Protocol", "البروتوكول"), l("Port", "المنفذ"), l("Secure alternative", "البديل الآمن")],
        rows: [
          [l("Telnet", "Telnet"), l("23", "23"), l("SSH (22)", "SSH (22)")],
          [l("FTP", "FTP"), l("21", "21"), l("SFTP (22) / FTPS", "SFTP (22) / FTPS")],
          [l("HTTP", "HTTP"), l("80", "80"), l("HTTPS (443)", "HTTPS (443)")],
          [l("POP3 / IMAP", "POP3 / IMAP"), l("110 / 143", "110 / 143"), l("POP3S 995 / IMAPS 993", "POP3S 995 / IMAPS 993")],
          [l("LDAP", "LDAP"), l("389", "389"), l("LDAPS (636)", "LDAPS (636)")],
          [l("SNMP v1/v2", "SNMP v1/v2"), l("161", "161"), l("SNMP v3 (auth + encryption)", "SNMP v3 (مصادقة + تشفير)")],
        ],
      },
    },
  ],
  diagram: {
    kind: "flow",
    title: l("What happens when you open https://example.com", "ماذا يحدث عند فتح https://example.com"),
    caption: l("Each step is a place where security can fail or be strengthened: DNS integrity, TCP availability, TLS identity and encryption, application logic.", "كل خطوة موضع قد يفشل فيه الأمن أو يتقوى: سلامة DNS، وتوافر TCP، وهوية TLS وتشفيره، ومنطق التطبيق."),
    nodes: [
      { label: l("1 DNS lookup", "1 استعلام DNS"), desc: l("name → IP address", "الاسم ← عنوان IP") },
      { label: l("2 TCP handshake", "2 مصافحة TCP"), desc: l("SYN, SYN-ACK, ACK", "SYN وSYN-ACK وACK") },
      { label: l("3 TLS handshake", "3 مصافحة TLS"), desc: l("certificate check, key agreement", "فحص الشهادة والاتفاق على المفاتيح") },
      { label: l("4 HTTP request", "4 طلب HTTP"), desc: l("encrypted GET /", "GET / مشفّر") },
      { label: l("5 Response", "5 الاستجابة"), desc: l("200 OK + page", "200 OK + الصفحة") },
    ],
  },
  lab: {
    tool: "port",
    title: l("Lab 7 – Port and protocol triage", "المختبر 7 – فرز المنافذ والبروتوكولات"),
    scenario: l("A scan of your company's Internet-facing firewall (run by your authorised security team) lists these open ports: 22, 80, 443, 3389, 445, 23. Decide which should stay, which need replacing and which must be closed.", "أظهر مسح للجدار الناري المواجه للإنترنت في شركتك (نفّذه فريق الأمن المخوَّل) هذه المنافذ المفتوحة: 22 و80 و443 و3389 و445 و23. حدّد ما يبقى وما يُستبدل وما يجب إغلاقه."),
    safety: l("Port scanning is allowed only on systems you own or have written authorisation to test. Use the reference tool here – do not scan public servers or other people's networks.", "مسح المنافذ مسموح فقط على أنظمة تملكها أو لديك تفويض كتابي لاختبارها. استخدم أداة المرجع هنا — ولا تمسح خوادم عامة أو شبكات الآخرين."),
    steps: [
      l("Use the search box to look up each of the six ports and read its risk note.", "استخدم مربع البحث للاطلاع على كل منفذ من المنافذ الستة وقراءة ملاحظة المخاطر."),
      l("Classify each port: keep / replace with secure alternative / close.", "صنّف كل منفذ: إبقاء / استبدال ببديل آمن / إغلاق."),
      l("For port 80, decide how to keep the site reachable while forcing HTTPS (redirect 80 → 443).", "للمنفذ 80 قرر كيف تُبقي الموقع متاحًا مع فرض HTTPS (تحويل 80 ← 443)."),
      l("For port 3389, propose a safer way for staff to work remotely (VPN + MFA).", "للمنفذ 3389 اقترح طريقة أكثر أمانًا للعمل عن بُعد (VPN + MFA)."),
      l("Filter the tool to 'Needs care' and list three further ports you would never expose to the Internet.", "رشّح الأداة إلى «يحتاج حذرًا» واذكر ثلاثة منافذ أخرى لن تعرّضها أبدًا للإنترنت."),
    ],
    expected: l("A decision table: 443 keep; 22 keep only with key-based login and IP restriction; 80 redirect to 443; 3389, 445 and 23 closed or moved behind VPN; plus three additional never-expose ports.", "جدول قرارات: 443 يبقى؛ 22 يبقى فقط بدخول بالمفاتيح وتقييد IP؛ 80 يحوَّل إلى 443؛ 3389 و445 و23 تُغلق أو تُنقل خلف VPN؛ مع ثلاثة منافذ إضافية لا تُعرَّض أبدًا."),
  },
  quiz: [
    { q: l("Which protocol is connectionless and often used for DNS queries?", "أي بروتوكول بلا اتصال ويُستخدم غالبًا لاستعلامات DNS؟"), options: [l("TCP", "TCP"), l("UDP", "UDP"), l("SMTP", "SMTP"), l("FTP", "FTP")], answer: 1, why: l("UDP is lightweight and connectionless; DNS queries usually use it (large replies fall back to TCP).", "UDP خفيف وبلا اتصال؛ وتستخدمه استعلامات DNS عادةً (وتنتقل الردود الكبيرة إلى TCP).") },
    { q: l("What is the correct order of the TCP handshake?", "ما الترتيب الصحيح للمصافحة الثلاثية في TCP؟"), options: [l("ACK, SYN, SYN-ACK", "ACK ثم SYN ثم SYN-ACK"), l("SYN, SYN-ACK, ACK", "SYN ثم SYN-ACK ثم ACK"), l("SYN, ACK, FIN", "SYN ثم ACK ثم FIN"), l("FIN, ACK, SYN", "FIN ثم ACK ثم SYN")], answer: 1, why: l("Client SYN → server SYN-ACK → client ACK.", "العميل SYN ← الخادم SYN-ACK ← العميل ACK.") },
    { q: l("Which port does HTTPS use by default?", "أي منفذ يستخدمه HTTPS افتراضيًا؟"), options: [l("80", "80"), l("21", "21"), l("443", "443"), l("25", "25")], answer: 2, why: l("HTTPS = HTTP over TLS on TCP 443.", "HTTPS = HTTP فوق TLS على TCP 443.") },
    { q: l("A rogue DHCP server is dangerous because it can…", "خادم DHCP الدخيل خطير لأنه قد…"), options: [l("Provide a malicious gateway/DNS to clients", "يوفر بوابة/DNS خبيثة للعملاء"), l("Speed up the network", "يسرّع الشبكة"), l("Encrypt traffic", "يشفّر الحركة"), l("Delete MAC addresses", "يحذف عناوين MAC")], answer: 0, why: l("Clients trust the first offer, so traffic can be silently redirected.", "يثق العملاء بأول عرض فيمكن إعادة توجيه الحركة بصمت.") },
    { q: l("Which statement about the HTTPS padlock is true?", "أي عبارة عن قفل HTTPS صحيحة؟"), options: [l("It proves the website is honest", "يثبت أن الموقع صادق"), l("It proves the connection is encrypted to that domain only", "يثبت أن الاتصال مشفّر مع ذلك النطاق فقط"), l("It blocks malware", "يمنع البرمجيات الخبيثة"), l("It hides the domain from the network", "يخفي النطاق عن الشبكة")], answer: 1, why: l("Phishing sites can have valid certificates; the padlock is about encryption and domain identity, not intent.", "قد تملك مواقع التصيّد شهادات صالحة؛ والقفل يخص التشفير وهوية النطاق لا النية.") },
    { q: l("Which DNS-published record lists the servers allowed to send mail for a domain?", "أي سجل DNS يحدد الخوادم المسموح لها بإرسال بريد النطاق؟"), options: [l("DKIM", "DKIM"), l("SPF", "SPF"), l("MX only", "MX فقط"), l("PTR", "PTR")], answer: 1, why: l("SPF = Sender Policy Framework; DKIM signs messages; DMARC sets the policy.", "SPF = إطار سياسة المرسل؛ وDKIM يوقّع الرسائل؛ وDMARC يحدد السياسة.") },
    { q: l("Which service is the best replacement for Telnet?", "ما أفضل بديل لـ Telnet؟"), options: [l("FTP", "FTP"), l("SSH", "SSH"), l("HTTP", "HTTP"), l("SNMPv1", "SNMPv1")], answer: 1, why: l("SSH provides encrypted, authenticated remote shells.", "يوفر SSH طرفيات بعيدة مشفّرة ومصادَقة.") },
    { q: l("DNS tunnelling is when attackers…", "أنفاق DNS هي عندما يقوم المهاجمون بـ…"), options: [l("Hide data inside DNS queries/answers", "إخفاء البيانات داخل استعلامات/ردود DNS"), l("Encrypt DNS with DNSSEC", "تشفير DNS بـ DNSSEC"), l("Build faster DNS servers", "بناء خوادم DNS أسرع"), l("Block all DNS", "حجب DNS كله")], answer: 0, why: l("DNS is rarely blocked, so it can be abused as a covert channel; monitoring DNS volume and entropy detects it.", "نادرًا ما يُحجب DNS فيُساء استخدامه كقناة خفية؛ ومراقبة حجمه وعشوائيته تكشف ذلك.") },
  ],
  homework: {
    title: l("Homework 7 – Trace a web request", "الواجب 7 – تتبّع طلب ويب"),
    tasks: [
      l("Run nslookup (or dig) for a domain you use and record the IP addresses returned.", "نفّذ nslookup (أو dig) لنطاق تستخدمه وسجّل عناوين IP الناتجة."),
      l("Open the browser's certificate details for that site: record issuer, validity dates and domain names covered.", "افتح تفاصيل شهادة الموقع في المتصفح: سجّل الجهة المصدرة وتواريخ الصلاحية والنطاقات المشمولة."),
      l("Using the browser developer tools (Network tab), record three status codes you see and explain them.", "باستخدام أدوات المطور في المتصفح (تبويب الشبكة) سجّل ثلاثة رموز حالة وفسّرها."),
      l("Look up your own e-mail domain's SPF/DMARC records with a public lookup tool and describe the policy.", "ابحث عن سجلات SPF/DMARC لنطاق بريدك بأداة بحث عامة وصف السياسة."),
    ],
    deliverable: l("A one-page trace report with the four sets of findings and one security improvement suggestion.", "تقرير تتبع من صفحة واحدة بنتائج المجموعات الأربع واقتراح تحسين أمني واحد."),
  },
  refs: [
    { title: "What is DNS?", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
    { title: "IANA Service Name and Port Number Registry", org: "IANA", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" },
    { title: "HTTP overview", org: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
    { title: "Email security guidance (SPF, DKIM, DMARC)", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/email-security-and-anti-spoofing" },
  ],
  terms: [
    { term: l("Port", "المنفذ"), def: l("A 16-bit number identifying an application endpoint on a host.", "رقم من 16 بتًا يحدد نقطة نهاية تطبيق على مضيف.") },
    { term: l("TCP three-way handshake", "المصافحة الثلاثية"), def: l("SYN, SYN-ACK, ACK exchange that opens a TCP connection.", "تبادل SYN وSYN-ACK وACK الذي يفتح اتصال TCP.") },
    { term: l("DHCP", "بروتوكول DHCP"), def: l("Protocol that automatically assigns IP configuration to devices.", "بروتوكول يمنح الأجهزة إعدادات IP تلقائيًا.") },
    { term: l("DNS", "نظام أسماء النطاقات"), def: l("System translating domain names into IP addresses.", "نظام يترجم أسماء النطاقات إلى عناوين IP.") },
    { term: l("TLS", "أمن طبقة النقل"), def: l("Protocol providing encryption, integrity and server authentication for connections.", "بروتوكول يوفر التشفير والسلامة ومصادقة الخادم للاتصالات.") },
    { term: l("SPF / DKIM / DMARC", "SPF / DKIM / DMARC"), def: l("DNS-based controls that authenticate e-mail senders and reduce spoofing.", "ضوابط قائمة على DNS تصادق مرسلي البريد وتقلل الانتحال.") },
    { term: l("SYN flood", "فيضان SYN"), def: l("Denial-of-service attack sending many SYN packets without completing handshakes.", "هجوم حجب خدمة يرسل حزم SYN كثيرة دون إكمال المصافحات.") },
  ],
};

export const s08: Session = {
  id: 8,
  phase: 2,
  minutes: 70,
  title: l("Network Security: Firewalls, IDS/IPS, Segmentation and VPNs", "أمن الشبكات: الجدران النارية وكشف/منع التسلل والتقسيم وVPN"),
  summary: l(
    "How to control and monitor traffic: firewall types and rule logic, DMZs, segmentation, IDS vs IPS, VPNs, secure Wi-Fi and zero-trust thinking.",
    "كيف نتحكم بالحركة ونراقبها: أنواع الجدران النارية ومنطق القواعد، والمنطقة المنزوعة، والتقسيم، وIDS مقابل IPS، وVPN، وواي فاي الآمن، وتفكير انعدام الثقة."
  ),
  objectives: [
    l("Explain packet-filter, stateful and next-generation firewalls.", "شرح الجدران النارية بمرشّح الحزم وذات الحالة والجيل التالي."),
    l("Write and order firewall rules following default-deny and least privilege.", "كتابة قواعد الجدار الناري وترتيبها وفق «المنع افتراضيًا» وأقل صلاحية."),
    l("Differentiate IDS from IPS and signature from anomaly detection.", "التمييز بين IDS وIPS وبين الكشف بالتواقيع والكشف بالشذوذ."),
    l("Describe DMZ, VLAN segmentation, VPN types and secure Wi-Fi settings.", "وصف المنطقة المنزوعة وتقسيم VLAN وأنواع VPN وإعدادات الواي فاي الآمنة."),
  ],
  sections: [
    {
      h: l("1. Firewalls", "1. الجدران النارية"),
      p: [
        l("A firewall enforces which traffic may pass between network zones. A packet-filtering firewall checks each packet's source, destination, protocol and port. A stateful firewall also remembers established connections, so reply traffic is allowed automatically and unsolicited inbound traffic is dropped. A next-generation firewall (NGFW) adds application awareness, user identity, intrusion prevention and TLS inspection. A web application firewall (WAF) specifically protects web apps from attacks like SQL injection.", "يفرض الجدار الناري الحركة المسموح لها بالمرور بين مناطق الشبكة. فالجدار بمرشّح الحزم يفحص مصدر كل حزمة ووجهتها وبروتوكولها ومنفذها. والجدار ذو الحالة يتذكر أيضًا الاتصالات القائمة فيسمح تلقائيًا بحركة الرد ويُسقط الحركة الواردة غير المطلوبة. وجدار الجيل التالي (NGFW) يضيف إدراك التطبيقات وهوية المستخدم ومنع التسلل وفحص TLS. أما جدار تطبيقات الويب (WAF) فيحمي تطبيقات الويب تحديدًا من هجمات مثل حقن SQL."),
        l("Rules are evaluated top to bottom and the first match wins, so order matters. The golden principles are: default deny (a final rule that blocks everything not explicitly allowed), least privilege (allow only the specific source, destination and port needed), logging of denied and sensitive traffic, and regular review to remove stale rules — old 'temporary' rules are a major source of exposure.", "تُقيَّم القواعد من الأعلى إلى الأسفل وأول تطابق يُطبَّق، لذا فالترتيب مهم. والمبادئ الذهبية: المنع افتراضيًا (قاعدة أخيرة تحجب كل ما لم يُسمح به صراحة)، وأقل صلاحية (السماح بالمصدر والوجهة والمنفذ المحددة اللازمة فقط)، وتسجيل الحركة المحجوبة والحساسة، ومراجعة دورية لإزالة القواعد القديمة — فالقواعد «المؤقتة» القديمة مصدر رئيسي للانكشاف."),
      ],
      callout: { kind: "warn", text: l("A firewall cannot stop what it is allowed to see as legitimate: a phishing link over allowed HTTPS passes straight through. Firewalls are one layer, not the whole defence.", "لا يستطيع الجدار الناري إيقاف ما يراه مشروعًا: فرابط تصيّد عبر HTTPS مسموح يمر مباشرة. الجدار طبقة واحدة وليس الدفاع كله.") },
    },
    {
      h: l("2. DMZ and segmentation", "2. المنطقة المنزوعة والتقسيم"),
      p: [
        l("A DMZ (demilitarised zone) is a separate network segment for servers that must be reachable from the Internet (web, mail, reverse proxy). Two firewall policies guard it: the Internet may reach only specific DMZ services, and the DMZ may not freely initiate connections into the internal network. If a public server is compromised, the attacker is still outside the internal LAN.", "المنطقة المنزوعة (DMZ) قطاع شبكة منفصل للخوادم التي يجب أن تكون متاحة من الإنترنت (الويب والبريد والوكيل العكسي). وتحرسها سياستان: تصل الإنترنت إلى خدمات محددة فقط في المنطقة، ولا يحق للمنطقة بدء اتصالات بحرية نحو الشبكة الداخلية. وإذا اخترق خادم عام يبقى المهاجم خارج الشبكة الداخلية."),
        l("Internal segmentation with VLANs and subnets separates staff, servers, guests, printers and IoT, with firewall rules between segments. It limits lateral movement: ransomware that infects one office PC cannot automatically reach the database or the backup server. Micro-segmentation applies the same idea down to individual workloads.", "التقسيم الداخلي بـ VLAN والشبكات الفرعية يفصل الموظفين والخوادم والضيوف والطابعات وإنترنت الأشياء مع قواعد جدار ناري بين القطاعات. وهو يحد من الحركة الجانبية: فالفدية التي تصيب حاسوبًا مكتبيًا لا تصل تلقائيًا إلى قاعدة البيانات أو خادم النسخ الاحتياطي. ويطبق التقسيم الدقيق الفكرة نفسها على مستوى أحمال العمل الفردية."),
      ],
    },
    {
      h: l("3. IDS and IPS", "3. أنظمة كشف ومنع التسلل"),
      p: [
        l("An Intrusion Detection System (IDS) monitors traffic or hosts and raises alerts; an Intrusion Prevention System (IPS) sits in-line and can also block. Network-based (NIDS/NIPS) look at traffic; host-based (HIDS) watch files, processes and logs on a machine. Signature-based detection matches known bad patterns — precise but blind to new attacks. Anomaly-based detection learns normal behaviour and flags deviations — finds novel attacks but produces more false positives.", "يراقب نظام كشف التسلل (IDS) الحركة أو الأجهزة ويصدر تنبيهات؛ أما نظام منع التسلل (IPS) فيوضع على المسار ويستطيع الحجب أيضًا. ومنها ما هو شبكي (NIDS/NIPS) يفحص الحركة ومنها ما هو على الجهاز (HIDS) يراقب الملفات والعمليات والسجلات. والكشف بالتواقيع يطابق أنماطًا خبيثة معروفة — دقيق لكنه أعمى عن الهجمات الجديدة. والكشف بالشذوذ يتعلم السلوك الطبيعي ويبلغ عن الانحرافات — يجد الهجمات الجديدة لكنه ينتج إنذارات كاذبة أكثر."),
        l("Tuning is essential. A false positive is a harmless event flagged as an attack (wasted analyst time); a false negative is a real attack that is missed (far worse). Alerts feed the monitoring process described in Session 16.", "الضبط ضروري. الإيجابي الكاذب حدث غير ضار صُنّف هجومًا (إهدار لوقت المحلل)، والسلبي الكاذب هجوم حقيقي لم يُكتشف (أسوأ بكثير). وتغذي التنبيهات عملية المراقبة الموصوفة في الجلسة 16."),
      ],
    },
    {
      h: l("4. VPNs and secure Wi-Fi", "4. VPN والواي فاي الآمن"),
      p: [
        l("A VPN creates an encrypted tunnel across an untrusted network. Remote-access VPNs connect a single user to the company network; site-to-site VPNs (often IPsec) link two offices. Protocols include IPsec, OpenVPN and WireGuard (TLS-based or modern lightweight alternatives). A VPN protects traffic in transit and authenticates users, but it also extends the corporate network to the user's device, so VPN access must require MFA and healthy, patched devices. Consumer 'privacy' VPNs only move trust from your local network to the VPN provider.", "تنشئ الشبكة الافتراضية الخاصة نفقًا مشفّرًا عبر شبكة غير موثوقة. فشبكات الوصول البعيد تربط مستخدمًا واحدًا بشبكة الشركة، وشبكات الموقع-إلى-الموقع (غالبًا IPsec) تربط مكتبين. ومن البروتوكولات IPsec وOpenVPN وWireGuard. وتحمي VPN الحركة أثناء النقل وتصادق المستخدمين، لكنها تمدّ شبكة الشركة إلى جهاز المستخدم، لذا يجب اشتراط MFA وأجهزة سليمة محدّثة. أما VPN «الخصوصية» الاستهلاكية فتنقل الثقة فقط من شبكتك المحلية إلى مزوّد الخدمة."),
        l("For Wi-Fi use WPA3 (or WPA2-AES) with a long passphrase, disable WPS, change default router credentials, keep firmware updated and put guests on a separate SSID/VLAN. Open or WEP networks offer no meaningful protection. The newer idea of zero trust goes further: never trust a device just because it is on the internal network — verify identity, device health and permission for every request.", "للواي فاي استخدم WPA3 (أو WPA2-AES) بعبارة مرور طويلة، وعطّل WPS، وغيّر بيانات دخول الموجّه الافتراضية، وحدّث البرمجية الثابتة، وضع الضيوف في شبكة SSID/VLAN منفصلة. والشبكات المفتوحة أو WEP لا توفر حماية ذات معنى. وتذهب فكرة انعدام الثقة الأحدث أبعد: لا تثق بجهاز لمجرد وجوده في الشبكة الداخلية — تحقق من الهوية وسلامة الجهاز والصلاحية لكل طلب."),
      ],
    },
  ],
  diagram: {
    kind: "flow",
    title: l("Zoned network – Internet → firewall → DMZ → internal zones", "شبكة مقسّمة إلى مناطق – الإنترنت ← جدار ناري ← DMZ ← مناطق داخلية"),
    caption: l("Traffic crosses a firewall at every zone boundary. Only specific flows are allowed (e.g. Internet→DMZ:443, DMZ→DB:3306); everything else is denied and logged.", "تعبر الحركة جدارًا ناريًا عند كل حد بين المناطق. تُسمح تدفقات محددة فقط (مثل الإنترنت←DMZ:443 وDMZ←قاعدة البيانات:3306) وما عداها يُمنع ويُسجَّل."),
    nodes: [
      { label: l("Internet", "الإنترنت"), desc: l("Untrusted", "غير موثوقة") },
      { label: l("Perimeter firewall + IPS", "جدار ناري محيطي + IPS"), desc: l("Default deny, inspect, log", "منع افتراضي وفحص وتسجيل") },
      { label: l("DMZ", "المنطقة المنزوعة"), desc: l("Web, mail, reverse proxy", "ويب وبريد ووكيل عكسي") },
      { label: l("Internal firewall", "جدار ناري داخلي"), desc: l("Segment-to-segment rules", "قواعد بين القطاعات") },
      { label: l("Internal zones", "المناطق الداخلية"), desc: l("Staff · Servers · Backup · IoT", "الموظفون · الخوادم · النسخ · IoT") },
    ],
  },
  lab: {
    tool: "firewall",
    title: l("Lab 8 – Repair a firewall rule set", "المختبر 8 – إصلاح مجموعة قواعد جدار ناري"),
    scenario: l("A new administrator inherited a rule set that exposes HTTP and Remote Desktop to the Internet. The policy: from the Internet only HTTPS (443) is allowed, and SSH (22) only from the administration network. Fix the rules so that all six test packets behave as required.", "ورث مدير جديد مجموعة قواعد تكشف HTTP وسطح المكتب البعيد للإنترنت. السياسة: من الإنترنت يُسمح بـ HTTPS (443) فقط، وSSH (22) فقط من شبكة الإدارة. أصلح القواعد لتتصرف الحزم الاختبارية الست كما هو مطلوب."),
    safety: l("Rule changes on production firewalls need change approval, a backup of the old configuration and a rollback plan. Practise only in the simulator or a lab firewall.", "تحتاج تغييرات قواعد الجدران النارية الفعلية إلى موافقة تغيير ونسخة احتياطية من الإعداد القديم وخطة تراجع. تدرّب فقط في المحاكي أو جدار ناري مخبري."),
    steps: [
      l("Read each packet result: which are wrongly allowed, which wrongly denied?", "اقرأ نتيجة كل حزمة: أيها مسموح خطأً وأيها ممنوع خطأً؟"),
      l("Switch rule 1 (HTTP) from ALLOW to DENY.", "حوّل القاعدة 1 (HTTP) من ALLOW إلى DENY."),
      l("Switch rule 4 (RDP 3389) from ALLOW to DENY.", "حوّل القاعدة 4 (RDP 3389) من ALLOW إلى DENY."),
      l("Experiment: move the final 'deny any' rule to the top and watch every packet become blocked – explain why rule order matters.", "جرّب: انقل قاعدة «deny any» الأخيرة إلى الأعلى وراقب كيف تُحجب كل الحزم — واشرح لماذا يهم الترتيب."),
      l("Restore a good order and confirm the 'policy goal achieved' message.", "أعد ترتيبًا سليمًا وتأكد من ظهور رسالة «تحقق هدف السياسة»."),
      l("Write the final rule set as a table and add the logging you would enable.", "اكتب مجموعة القواعد النهائية كجدول وأضف التسجيل الذي ستفعّله."),
    ],
    expected: l("All six packets show ✓, the policy-goal message appears, and you can explain first-match logic and the role of the final default-deny rule.", "تظهر ✓ للحزم الست وتظهر رسالة تحقق الهدف وتستطيع شرح منطق أول تطابق ودور قاعدة المنع الافتراضي الأخيرة."),
  },
  quiz: [
    { q: l("What does 'default deny' mean?", "ماذا تعني عبارة «المنع افتراضيًا»؟"), options: [l("Everything not explicitly allowed is blocked", "كل ما لم يُسمح به صراحة محجوب"), l("Everything is allowed unless blocked", "كل شيء مسموح ما لم يُحجب"), l("Only denied traffic is logged", "تُسجَّل الحركة الممنوعة فقط"), l("The firewall is disabled", "الجدار الناري معطّل")], answer: 0, why: l("A final catch-all deny rule ensures only intended traffic passes.", "قاعدة منع شاملة أخيرة تضمن مرور الحركة المقصودة فقط.") },
    { q: l("In most firewalls, rules are processed…", "في أغلب الجدران النارية تُعالج القواعد…"), options: [l("Randomly", "عشوائيًا"), l("Top to bottom, first match wins", "من الأعلى للأسفل وأول تطابق يُطبَّق"), l("Bottom to top", "من الأسفل للأعلى"), l("All at once, averaging", "كلها معًا بالمتوسط")], answer: 1, why: l("Order matters: a broad allow above a narrow deny defeats the deny.", "الترتيب مهم: سماح عام فوق منع محدد يبطل المنع.") },
    { q: l("What is the key difference between IDS and IPS?", "ما الفرق الرئيس بين IDS وIPS؟"), options: [l("IDS only alerts; IPS can block traffic in-line", "IDS ينبّه فقط؛ وIPS يحجب الحركة على المسار"), l("IDS is hardware only", "IDS عتاد فقط"), l("IPS only detects", "IPS يكشف فقط"), l("They are identical", "متطابقان")], answer: 0, why: l("IPS is in-line and prevents; IDS passively monitors and alerts.", "IPS على المسار ويمنع؛ وIDS يراقب سلبيًا وينبّه.") },
    { q: l("What is a DMZ used for?", "فيمَ تُستخدم المنطقة المنزوعة؟"), options: [l("Hosting Internet-facing servers separately from the internal LAN", "استضافة الخوادم المواجهة للإنترنت بمعزل عن الشبكة الداخلية"), l("Storing backups", "تخزين النسخ الاحتياطية"), l("Speeding up Wi-Fi", "تسريع الواي فاي"), l("Printing", "الطباعة")], answer: 0, why: l("If a DMZ server is compromised, the internal network remains protected by another firewall.", "إذا اخترق خادم في المنطقة تبقى الشبكة الداخلية محمية بجدار آخر.") },
    { q: l("Which Wi-Fi security setting is recommended today?", "أي إعداد أمان للواي فاي يُوصى به اليوم؟"), options: [l("Open network", "شبكة مفتوحة"), l("WEP", "WEP"), l("WPA3 or WPA2-AES with a strong passphrase", "WPA3 أو WPA2-AES بعبارة مرور قوية"), l("Hidden SSID only", "إخفاء SSID فقط")], answer: 2, why: l("WEP is broken; hiding the SSID is not security.", "WEP مكسور؛ وإخفاء SSID ليس أمانًا.") },
    { q: l("A false negative in an IDS is…", "السلبي الكاذب في IDS هو…"), options: [l("A harmless event flagged as an attack", "حدث غير ضار صُنّف هجومًا"), l("A real attack that is not detected", "هجوم حقيقي لم يُكتشف"), l("A log rotation", "تدوير سجلات"), l("A blocked port", "منفذ محجوب")], answer: 1, why: l("Missing a real attack is the dangerous error type.", "إغفال هجوم حقيقي هو نوع الخطأ الخطير.") },
    { q: l("Which principle says to never trust a device just because it is on the internal network?", "أي مبدأ ينص على ألا نثق بجهاز لمجرد وجوده في الشبكة الداخلية؟"), options: [l("Security through obscurity", "الأمن بالغموض"), l("Zero trust", "انعدام الثقة"), l("Implicit trust", "الثقة الضمنية"), l("Flat networking", "الشبكة المسطحة")], answer: 1, why: l("Zero trust verifies identity, device health and authorisation for each request.", "يتحقق انعدام الثقة من الهوية وسلامة الجهاز والتصريح لكل طلب.") },
  ],
  homework: {
    title: l("Homework 8 – Design a secure small-office network", "الواجب 8 – صمّم شبكة مكتب صغير آمنة"),
    tasks: [
      l("Draw a diagram with Internet, firewall, DMZ web server, staff VLAN, server VLAN, guest Wi-Fi and IoT VLAN.", "ارسم مخططًا يضم الإنترنت وجدارًا ناريًا وخادم ويب في DMZ وVLAN للموظفين وللخوادم وواي فاي ضيوف وVLAN لإنترنت الأشياء."),
      l("Write at least eight firewall rules (source, destination, port, action) ending with default deny.", "اكتب ثماني قواعد جدار ناري على الأقل (مصدر ووجهة ومنفذ وإجراء) تنتهي بمنع افتراضي."),
      l("Decide which VPN type staff need and list three conditions for granting access.", "حدد نوع VPN الذي يحتاجه الموظفون وسمِّ ثلاثة شروط لمنح الوصول."),
      l("List five alerts you would want your IDS/IPS to raise.", "اذكر خمسة تنبيهات تريد أن يصدرها IDS/IPS."),
    ],
    deliverable: l("Network diagram + rule table + one paragraph justifying the segmentation choices.", "مخطط الشبكة + جدول القواعد + فقرة تبرر خيارات التقسيم."),
  },
  refs: [
    { title: "Guidelines on Firewalls and Firewall Policy (SP 800-41 Rev.1)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" },
    { title: "Zero Trust Architecture (SP 800-207)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/207/final" },
    { title: "Guide to Intrusion Detection and Prevention Systems (SP 800-94)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/94/final" },
    { title: "Virtual private networks guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/device-security-guidance/infrastructure/virtual-private-networks" },
  ],
  terms: [
    { term: l("Firewall", "الجدار الناري"), def: l("A control that permits or blocks network traffic according to rules.", "ضابط يسمح بحركة الشبكة أو يحجبها وفق قواعد.") },
    { term: l("Stateful inspection", "الفحص بالحالة"), def: l("Tracking connection state so reply traffic is automatically allowed.", "تتبع حالة الاتصال ليُسمح بحركة الرد تلقائيًا.") },
    { term: l("DMZ", "المنطقة المنزوعة"), def: l("A semi-trusted network segment for Internet-facing servers.", "قطاع شبكة شبه موثوق للخوادم المواجهة للإنترنت.") },
    { term: l("IDS / IPS", "كشف / منع التسلل"), def: l("Systems that detect (IDS) or detect and block (IPS) malicious activity.", "أنظمة تكشف (IDS) أو تكشف وتحجب (IPS) النشاط الخبيث.") },
    { term: l("VPN", "الشبكة الافتراضية الخاصة"), def: l("An encrypted tunnel across an untrusted network.", "نفق مشفّر عبر شبكة غير موثوقة.") },
    { term: l("Segmentation", "التقسيم"), def: l("Splitting a network into zones with controlled traffic between them.", "تقسيم الشبكة إلى مناطق بحركة مضبوطة بينها.") },
    { term: l("Zero trust", "انعدام الثقة"), def: l("Security model that verifies every request instead of trusting by location.", "نموذج أمني يتحقق من كل طلب بدل الثقة بحسب الموقع.") },
    { term: l("False positive", "إيجابي كاذب"), def: l("An alert raised for activity that is actually benign.", "تنبيه صدر عن نشاط سليم في الحقيقة.") },
  ],
};
