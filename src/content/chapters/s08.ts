import { l, type Session } from "../types";

export const s08: Session = {
  id: 8,
  phase: 3,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Networking Fundamentals II: Protocols, Services & Traffic",
    "أساسيات الشبكات 2: البروتوكولات والخدمات والحركة",
  ),
  summary: l(
    "How applications actually talk over the network: TCP/UDP with SYN handshakes and ports, DNS, DHCP, HTTP and HTTPS, plus how to observe real traffic with ping, traceroute and packet capture — and why network awareness is a security skill.",
    "كيف تتحدث التطبيقات فعليًا عبر الشبكة: TCP/UDP مع المصافحات والمحارف، وDNS وDHCP وHTTP وHTTPS، وكيفية مراقبة الحركة الفعلية بـ ping وtraceroute والتقاط الحزم — ولماذا تُعد الوعي الشبكي مهارة أمنية.",
  ),
  overview: l(
    "Session 7 explained how devices are addressed. This session explains how applications actually move data. You will learn the difference between TCP (reliable, connection-based) and UDP (fast, connectionless), the SYN handshake and FIN teardown, how DNS resolves names to addresses and DHCP assigns addresses automatically. You will meet application protocols such as HTTP and HTTPS, and practice observing traffic with ping, traceroute and a packet capture tool. Understanding these protocols and services is what lets a security student read what is happening on the wire and understand where protections and attacks live.",
    "شرحت الجلسة 7 كيف تُعنون الأجهزة. وتشرح هذه الجلسة كيف تنقل التطبيقات البيانات فعليًا. ستتعلم الفرق بين TCP (موثوق ومبني على اتصال) وUDP (سريع وبلا اتصال)، ومصافحة SYN وإيقاف FIN، وكيف يحوّل DNS الأسماء إلى عناوين وكيف يعين DHCP العناوين تلقائيًا. وستتعرف على بروتوكولات التطبيقات مثل HTTP وHTTPS، وتتدرب على مراقبة الحركة بـ ping وtraceroute وأداة التقاط الحزم. وفهم هذه البروتوكولات والخدمات هو ما يتيح لطالب الأمن قراءة ما يحدث على الشبكة وفهم أماكن الحماية والهجمات.",
  ),
  whyItMatters: l(
    "Almost every cybersecurity activity involves network protocols. When a browser loads a page, email is sent, an attacker scans a host, or malware moves laterally, the underlying activity is TCP, UDP, DNS or HTTP. Knowing how these protocols behave lets you recognize normal traffic versus suspicious, read a packet capture, understand why a service is exposed, and reason about which defenses protect which part of the connection. Network awareness underpins scanning (later), web security, and incident investigation.",
    "تتضمن معظم أنشطة الأمن السيبراني بروتوكولات الشبكة. فعند تحميل المتصفح لصفحة أو إرسال بريد أو مسح المهاجم لمضيف أو تحرك البرمجيات الخبيثة جانبيًا، يكون النشاط الأساسي هو TCP أو UDP أو DNS أو HTTP. ويُمكّنك فهم سلوك هذه البروتوكولات من التمييز بين الحركة الطبيعية والمشبوهة، وقراءة التقاط الحزم، وفهم سبب كشف خدمة، والتفكير في الدفاعات التي تحمي كل جزء من الاتصال. ويُعد الوعي الشبكي أساس المسح (لاحقًا) وأمن الويب والتحقيق في الحوادث.",
  ),
  prerequisites: [
    l(
      "Session 7, Networking Fundamentals I: layers, devices, MAC and IP addressing, NAT and subnetting.",
      "الجلسة 7، أساسيات الشبكات 1: الطبقات والأجهزة وعنونة MAC وIP وNAT وتقسيم الشبكات.",
    ),
    l(
      "Basic comfort with the concept of a client and a server exchanging data.",
      "الراحة الأساسية مع مفهوم العميل والخادم اللذين يتبادلان البيانات.",
    ),
    l(
      "A legal and ethical mindset: only observe and test networks you own or are authorized to use.",
      "عقلية قانونية وأخلاقية: مراقبة واختبار الشبكات التي تملكها أو لديك إذن باستخدامها فقط.",
    ),
  ],
  objectives: [
    l(
      "Contrast TCP (reliable, connection-based) with UDP (fast, connectionless) and their use cases.",
      "المقارنة بين TCP (موثوق ومبني على اتصال) وUDP (سريع وبلا اتصال) وحالات استخدام كل منهما.",
    ),
    l(
      "Describe the TCP SYN/SYN-ACK/ACK handshake and the FIN teardown.",
      "وصف مصافحة TCP (SYN/SYN-ACK/ACK) وإيقاف FIN.",
    ),
    l(
      "Explain how ports let multiple services share one host.",
      "شرح كيف تتيح المنافذ لخدمات متعددة مشاركة مضيف واحد.",
    ),
    l(
      "Explain DNS name resolution and DHCP address assignment.",
      "شرح تحليل أسماء DNS وتخصيص DHCP للعناوين.",
    ),
    l(
      "Compare HTTP and HTTPS, and list common network services and their default ports.",
      "المقارنة بين HTTP وHTTPS، وسرد خدمات شبكية شائعة ومنافذها الافتراضية.",
    ),
    l(
      "Observe traffic using ping, traceroute and a packet capture tool, and read a packet at its layers.",
      "مراقبة الحركة باستخدام ping وtraceroute وأداة التقاط الحزم، وقراءة حزمة عبر طبقاتها.",
    ),
  ],
  agenda: [
    { label: l("Welcome and Session 7 recap", "الترحيب ومراجعة الجلسة 7"), minutes: 5 },
    { label: l("TCP vs UDP and reliability", "TCP مقابل UDP والموثوقية"), minutes: 14 },
    { label: l("The SYN handshake and FIN teardown", "مصافحة SYN وإيقاف FIN"), minutes: 12 },
    { label: l("Ports and how services share a host", "المنافذ وكيف تتشارك الخدمات مضيفًا"), minutes: 10 },
    { label: l("DNS and DHCP", "DNS وDHCP"), minutes: 10 },
    { label: l("HTTP and HTTPS", "HTTP وHTTPS"), minutes: 15 },
    { label: l("Observing traffic: ping, traceroute and packet capture", "مراقبة الحركة: ping وtraceroute والتقاط الحزم"), minutes: 14 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 10 },
  ],
  introduction: l(
    "Session 7 explained how devices are addressed with MAC and IP addresses and how subnetting organizes networks. This session moves up to how applications actually communicate. You will learn why TCP is reliable and UDP is fast, how the SYN handshake opens a connection and how FIN closes it, how ports let many services share one host, how DNS turns names like example.com into an IP address and how DHCP assigns addresses automatically. You will meet HTTP and HTTPS, the protocols behind the web, and then practice observing real traffic using ping, traceroute and a packet capture tool. By the end you can read what is happening on the wire and understand where protocol behavior, services and security controls meet.",
    "شرحت الجلسة 7 كيف تُعنون الأجهزة بعناوين MAC وIP وكيف ينظّم تقسيم الشبكات الشبكات. وتنتقل هذه الجلسة لأعلى إلى كيف تتواصل التطبيقات فعليًا. ستتعلم سبب موثوقية TCP وسرعة UDP، وكيف تفتح مصافحة SYN الاتصال وكيف تغلقه FIN، وكيف تتيح المنافذ لخدمات كثيرة مشاركة مضيف واحد، وكيف يحوّل DNS الأسماء مثل example.com إلى عنوان IP وكيف يعين DHCP العناوين تلقائيًا. وستتعرف على HTTP وHTTPS، البروتوكولات خلف الويب، ثم تتدرب على مراقبة الحركة الفعلية باستخدام ping وtraceroute وأداة التقاط الحزم. ومع نهاية الجلسة يمكنك قراءة ما يحدث على الشبكة وفهم أماكن التقاء سلوك البروتوكولات والخدمات وضوابط الأمان.",
  ),
  sections: [
    {
      h: l("1. TCP vs UDP and reliability", "1. TCP مقابل UDP والموثوقية"),
      p: [
        l("TCP is a reliable, connection-based protocol. It establishes a connection with a three-way handshake, sends data with sequence numbers that let the receiver detect loss and duplicates, and retransmits missing data. UDP is a simple, connectionless protocol: it sends datagrams with no handshake, no guaranteed delivery, no ordering and no retransmission. TCP is used by web browsing, email and file transfer, where reliability matters; UDP is used for real-time audio/video, DNS queries and gaming, where speed and low overhead matter.", "TCP بروتوكول موثوق ومبني على اتصال. يُنشئ اتصالًا بمصافحة ثلاثية، ويرسل البيانات بأرقام تسلسل تمكّن المستقبل من اكتشاف الفقد والتكرار، ويعيد إرسال البيانات المفقودة. أما UDP فهو بروتوكول بسيط بلا اتصال: يرسل بيانات الوحدات دون مصافحة، دون ضمان تسليم، دون ترتيب ودون إعادة إرسال. ويُستخدم TCP في تصفح الويب والبريد ونقل الملفات، حيث تهم الموثوقية؛ ويُستخدم UDP للصوت/الفيديو في الوقت الفعلي واستعلامات DNS والألعاب، حيث تهم السرعة والقلة في التعقيد."),
        l("Neither protocol is inherently 'secure' or 'insecure' — both can carry encrypted or cleartext content. The difference is reliability and overhead, not security. Choosing between them is a trade-off: TCP adds the machinery of connection state and retransmission; UDP trades that machinery for speed, which is essential for time-sensitive traffic.", "لا يُعد أي من البروتوكولين 'آمنًا' أو 'غير آمن' بطبيعته — فكلاهما يمكنه حمل محتوى مشفّر أو بنص واضح. والفرق هو الموثوقية والتعقيد، وليس الأمان. واختيار أحدهما هو مقايضة: فـ TCP يضيف آليات حالة الاتصال وإعادة الإرسال؛ ويتبادل UDP تلك الآليات بالسرعة، وهي ضرورية للحركة الحساسة للوقت."),
      ],
    },
    {
      h: l("2. The SYN handshake and FIN teardown", "2. مصافحة SYN وإيقاف FIN"),
      p: [
        l("The SYN handshake is central to TCP. The client sends SYN, the server replies SYN-ACK, and the client sends ACK, and the connection is open. This negotiation confirms both sides are ready to communicate before any data flows. When the exchange is finished, the FIN flag closes the connection cleanly in both directions, releasing the resources each side held for it.", "تعتبر مصافحة SYN مركزية في TCP. يرسل العميل SYN ويرد الخادم SYN-ACK ثم يرسل العميل ACK، ويُفتح الاتصال. ويؤكد هذا التفاوض أن كلا الجانبين جاهز للتواصل قبل أن تتدفق أي بيانات. وعند اكتمال التبادل يُغلق الاتصال بطريقة منظمة في كلا الاتجاهين بعلم FIN، فتُحرر الموارد التي احتفظ بها كل جانب له."),
        l("A port number (0–65535) in each packet identifies which application is sending or receiving, and the SYN handshake binds a specific client port to a specific server port for the life of the connection. An SYN flood attacks this handshake by sending many SYNs without completing, exhausting the server's connection table and denying service to real clients.", "يحدد رقم المنفذ (0–65535) في كل حزمة التطبيق المرسل أو المستقبل، وتربط مصافحة SYN منفذ عميل محدد بمنفذ خادم محدد طوال مدة الاتصال. ويُهاجم فيضان SYN هذه المصافحة بإرسال SYN كثيرة دون إكمالها، مما يستنزف جدول اتصالات الخادم ويمنع الخدمة من العملاء الحقيقيين."),
      ],
    },
    {
      h: l("3. Ports and how services share a host", "3. المنافذ وكيف تتشارك الخدمات مضيفًا"),
      p: [
        l("A port is a 16-bit number (0–65535) that identifies an application endpoint. Because a host can run many services at once, the IP address plus port distinguishes them: the IP locates the host, and the port locates the specific service. Well-known ports (below 1024) are reserved for standard services; the rest are available for applications and are often chosen from a high ephemeral range on the client side.", "المنفذ رقم من 16 بتًا (0–65535) يحدد نقطة نهاية تطبيق. ولأن المضيف يمكنه تشغيل خدمات متعددة في وقت واحد، يميزها عنوان IP مع المنفذ: فـ IP يحدد المضيف، والمنفذ يحدد الخدمة المحددة. والمنافذ المعروفة (أقل من 1024) محجوزة للخدمات القياسية؛ والباقي متاح للتطبيقات ويُختار كثيرًا من نطاق عابر عالٍ على جانب العميل."),
        l("A host with a port listening is 'exposed' to anyone who can reach it. Firewalls and port scans operate on this: a scanner probes ports to learn which services are open, and a firewall filters by source, destination and port. Understanding ports is therefore the key to reasoning about what a host exposes and what must be protected.", "المضيف ذو المنفذ الذي يستمع يُعد 'مكشوفًا' لأي شخص يمكنه الوصول إليه. وتعمل قواعد الجدار الناري ومسح المنافذ على هذا: فماسح المنافذ يفحص المنافذ ليعرف الخدمات المفتوحة، والجدار الناري يصفي بحسب المصدر والوجهة والمنفذ. ولذلك يُعد فهم المنافذ مفتاح التفكير في ما يكشفه المضيف وما يجب حمايته."),
      ],
    },
    {
      h: l("4. Common network services and default ports", "4. الخدمات الشائعة ومنافذها الافتراضية"),
      p: [
        l("Well-known services use standard ports. Knowing which port a service uses lets you reason about exposure: a host with SSH (22), RDP (3389) and SMB (445) open is reachable for remote access and file sharing, and each open port is attack surface to protect with a firewall. The table summarizes the services you will meet most often.", "تستخدم الخدمات المعروفة منافذ قياسية. ويُمكّنك معرفة المنفذ الذي تستخدمه الخدمة من التفكير في الانكشاف: فالمضيف ذو SSH (22) وRDP (3389) وSMB (445) المفتوحة يمكن الوصول إليه للوصول البعيد ومشاركة الملفات، وكل منفذ مفتوح هو سطح هجوم يجب حمايته بجدار ناري. ويلخص الجدول الخدمات التي ستقابلها غالبًا."),
      ],
      table: {
        head: [l("Service", "الخدمة"), l("Port", "المنفذ"), l("Typical use", "الاستخدام النموذجي")],
        rows: [
          [l("HTTP", "HTTP"), l("80", "80"), l("Unencrypted web", "الويب غير المشفّر")],
          [l("HTTPS", "HTTPS"), l("443", "443"), l("Encrypted web (TLS)", "الويب المشفّر (TLS)")],
          [l("DNS", "DNS"), l("53", "53"), l("Name resolution", "تحليل الأسماء")],
          [l("DHCP", "DHCP"), l("67/68", "67/68"), l("IP address assignment", "تخصيص عناوين IP")],
          [l("SSH", "SSH"), l("22", "22"), l("Secure remote shell", "الصدفة البعيدة الآمنة")],
          [l("SMTP", "SMTP"), l("25", "25"), l("Sending email", "إرسال البريد")],
          [l("SMB", "SMB"), l("445", "445"), l("File and printer sharing", "مشاركة الملفات والطابعات")],
          [l("RDP", "RDP"), l("3389", "3389"), l("Remote desktop (Windows)", "سطح المكتب البعيد (ويندوز)")],
        ],
      },
    },
    {
      h: l("5. DNS name resolution", "5. تحليل أسماء DNS"),
      p: [
        l("Domain Name System (DNS) translates human-readable names into IP addresses. When you type example.com, your resolver queries DNS servers up a chain of authorities until it returns the address. DNS is mostly UDP on port 53 and is essential for all name-based use. Without DNS, you would have to type numeric IP addresses for every site.", "يحوّل نظام أسماء النطاقات (DNS) الأسماء المفهومة للبشر إلى عناوين IP. فعند كتابة example.com، يسأل المحلّل خوادم DNS صعودًا عبر سلسلة من السلطات حتى يعود بالعنوان. ويستخدم DNS غالبًا UDP على المنفذ 53 وهو أساسي لكل استخدام بناءً على الاسم. وبدون DNS لوجب كتابة عناوين IP رقمية لكل موقع."),
        l("Security issues with DNS include cache poisoning, where false records are injected, and malicious domains used to direct clients to phishing or malware sites. Filtering or monitoring DNS can block known-bad domains and detect suspicious lookups, which is why DNS is a common point for both attack and defense.", "تشمل المسائل الأمنية في DNS تسميم المخزن المؤقت، حيث تُحقن سجلات كاذبة، والنطاقات الخبيثة التي تُوجّه العملاء إلى مواقع التصيّد أو البرمجيات الخبيثة. ويمكن تصفية DNS أو مراقبته لحجب النطاقات المعروفة بالسوء واكتشاف عمليات البحث المشبوهة، ولهذا يُعد DNS نقطة شائعة للهجوم والدفاع."),
      ],
    },
    {
      h: l("6. DHCP address assignment", "6. تخصيص DHCP للعناوين"),
      p: [
        l("Dynamic Host Configuration Protocol (DHCP) assigns IP addresses, subnet mask, default gateway and DNS servers automatically when a device joins a network. It removes the need to configure every device by hand, which is essential in large networks where addressing by hand would be error-prone and slow.", "يخصص بروتوكول التكوين المضيف الديناميكي (DHCP) عناوين IP وقناع الشبكة والبوابة الافتراضية وخوادم DNS تلقائيًا عند انضمام جهاز إلى الشبكة. وهو يحذف الحاجة إلى ضبط كل جهاز يدويًا، وهو أمر أساسي في الشبكات الكبيرة حيث يكون العناوين اليدوي عرضة للخطأ وبطيئًا."),
        l("Risks include a rogue DHCP server handing out wrong or malicious settings, and the possibility of leasing many addresses. Understanding DHCP helps explain how devices get on the network and why dynamic addressing must be paired with controls such as DHCP snooping on switches to keep rogue servers out.", "وتشمل المخاطر وجود خادم DHCP دخيل يوزّع إعدادات خاطئة أو خبيثة، وإمكانية استئجار عناوين كثيرة. ويساعد فهم DHCP على شرح كيفية انضمام الأجهزة إلى الشبكة ولماذا يجب دمج العناوين الديناميكية مع ضوابط مثل التطفل على DHCP في المحولات لإبقاء الخوادم الدخيلة خارجها."),
      ],
    },
    {
      h: l("7. HTTP and HTTPS", "7. HTTP وHTTPS"),
      p: [
        l("Hypertext Transfer Protocol (HTTP) is the protocol behind the web. It uses a request/response model: a client sends an HTTP request (method like GET, a URL, headers) and the server returns an HTTP response (status code, headers, body). Common status codes include 200 (OK), 404 (not found) and 500 (server error). HTTPS is HTTP over TLS: it encrypts the whole exchange, authenticates the server with a certificate, and protects confidentiality and integrity. HTTP sends everything in cleartext and is unsafe for logins, payment or sensitive data.", "بروتوكول نقل النص التشعبي (HTTP) هو البروتوكول خلف الويب. ويستخدم نموذج الطلب/الاستجابة: يرسل العميل طلب HTTP (الأسلوب مثل GET، وURL، وترويسات) ويرد الخادم باستجابة HTTP (رمز حالة، وترويسات، وجسم). وتشمل رموز الحالة الشائعة 200 (نجح) و404 (غير موجود) و500 (خطأ في الخادم). وHTTPS هو HTTP عبر TLS: يشفّر التبادل كله، ويصادق الخادم بشهادة، ويوفر السرية والتكامل. ويرسل HTTP كل شيء بنص واضح وهو غير آمن لعمليات الدخول أو الدفع أو البيانات الحساسة."),
        l("The critical security difference is that HTTPS encrypts and authenticates, so an attacker on the network cannot read or tamper with the content, while HTTP leaves it readable. When you see an address beginning with https:// and a lock icon, the connection is encrypted. When developing or testing web services, always prefer HTTPS in production; use plaintext HTTP only in isolated lab environments.", "والفرق الأمني الحاسم هو أن HTTPS يشفّر ويصادق، لذا لا يستطيع مهاجم على الشبكة قراءة المحتوى أو التلاعب به، بينما يترك HTTP محتوى مقروءًا. وعند رؤية عنوان يبدأ بـ https:// ورمز قفل يكون الاتصال مشفّرًا. وعند تطوير أو اختبار خدمات الويب، احرص دائمًا على تفضيل HTTPS في الإنتاج؛ واستخدم HTTP بنص واضح فقط في بيئات مختبر معزولة."),
      ],
    },
    {
      h: l("8. Observing traffic: ping, traceroute and packet capture", "8. مراقبة الحركة: ping وtraceroute والتقاط الحزم"),
      p: [
        l("Ping sends ICMP echo requests to test reachability and measure round-trip time; traceroute (or tracepath on Linux/macOS) follows the path a packet takes by varying the time-to-live and reading ICMP responses from each hop. These tools are quick ways to check connectivity and see the route to a destination.", "يُرسل ping طلبات نبض ICMP لاختبار إمكانية الوصول وقياس زمن الذهاب والعودة؛ ويتابع traceroute (أو tracepath على لينكس/ماك) المسار الذي تسلكه الحزمة بتغيير وقت الحياة وقراءة ردود ICMP من كل قفزة. وهذه الأدوات طرق سريعة للتحقق من الاتصال ورؤية المسار إلى الوجهة."),
        l("For deeper observation, a packet capture tool such as Wireshark lets you capture and inspect packets on your own machine, seeing each packet's source, destination, protocol, ports and payload, layer by layer. Packet capture is a powerful diagnostic and learning tool, but it is also sensitive: capture only on networks you own or are authorized to monitor, and be aware that capturing can expose passwords or sensitive data sent unencrypted — a reminder to prefer encrypted protocols.", "للمراقبة الأعمق، تتيح أداة التقاط الحزم مثل Wireshark التقاط الحزم على جهازك وفحصها، مع رؤية مصدر كل حزمة ووجهتها وبروتوكوله ومحارف وحمولتها، طبقة بطبقة. ويُعد التقاط الحزم أداة قوية للتشخيص والتعلم، لكنها حساسة أيضًا: التقط فقط على الشبكات التي تملكها أو لديك إذن بمراقبة، وتنبّه إلى أن الالتقاط قد يكشف كلمات المرور أو البيانات الحساسة إذا أُرسلت غير مشفّرة — وهو تذكير بتفضيل البروتوكولات المشفّرة."),
      ],
    },
  ],
  examples: [
    l(
      "Opening a connection to a web server: the client sends SYN to the server's port 80, the server replies SYN-ACK, the client sends ACK, then the client sends an HTTP GET request, and the server returns a 200 response with the page.",
      "فتح اتصال مع خادم ويب: يرسل العميل SYN إلى المنفذ 80 للخادم، ويرد الخادم SYN-ACK، ويرسل العميل ACK، ثم يرسل العميل طلب HTTP GET، ويعود الخادم باستجابة 200 مع الصفحة.",
    ),
    l(
      "DNS resolution: typing a site name triggers a DNS query (UDP port 53) to your resolver, which walks the chain of authorities and returns an IP address, which the browser then connects to over HTTPS.",
      "تحليل DNS: يؤدي إدخال اسم موقع إلى استعلام DNS (UDP المنفذ 53) إلى المحلّل، الذي يسلك سلسلة السلطات ويعود بعنوان IP، ثم يتصل المتصفح به عبر HTTPS.",
    ),
    l(
      "DHCP: when a laptop joins a Wi-Fi network, it broadcasts a DHCP request, and a DHCP server returns an IP address, subnet mask, default gateway and DNS server, all assigned automatically.",
      "DHCP: عند انضمام حاسوب محمول إلى شبكة واي فاي، يبث طلب DHCP، ويعود خادم DHCP بعنوان IP وقناع الشبكة والبوابة الافتراضية وخادم DNS، وكلها تُخصص تلقائيًا.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A web server has port 80 open. A visitor can load a page over plaintext HTTP. Anyone on the network path could read the request and response, capturing data in transit. Enabling HTTPS on port 443 encrypts the exchange and prevents this.",
      "يحتوي خادم ويب على المنفذ 80 مفتوحًا. ويمكن لزائر تحميل صفحة عبر HTTP بنص واضح. ويمكن لأي شخص على مسار الشبكة قراءة الطلب والاستجابة، والتقاط البيانات أثناء النقل. ويتيح تمكين HTTPS على المنفذ 443 تشفير التبادل ويمنع ذلك.",
    ),
    l(
      "An administrator notices a host repeatedly resolving suspicious domains. The DNS lookups point to a malicious domain. Monitoring DNS and blocking the domain at the resolver or firewall stops the lookup and the traffic it would trigger.",
      "يلاحظ مسؤول أن مضيفًا يحلّ أسماء مشبوهة بشكل متكرر. وتشير عمليات بحث DNS إلى نطاق خبيث. وتُوقف مراقبة DNS وحجب النطاق عند المحلّل أو الجدار الناري عملية البحث والحركة التي كان سيسببها.",
    ),
    l(
      "A network has SSH (22) and RDP (3389) exposed to the Internet. Attackers scan these well-known ports and attempt to break in. Removing the exposure behind a firewall, or moving remote access behind VPN with MFA, reduces the attack surface.",
      "تحتوي شبكة على SSH (22) وRDP (3389) مكشوفين على الإنترنت. ويمسح المهاجمون هذه المنافذ المعروفة ويحاولون الاختراق. ويؤدي إزالة هذا الانكشاف خلف جدار ناري، أو نقل الوصول البعيد خلف VPN مع المصادقة متعددة العوامل، إلى تقليل سطح الهجوم.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("TCP three-way handshake — SYN, SYN-ACK, ACK", "مصافحة TCP الثلاثية — SYN وSYN-ACK وACK"),
    caption: l(
      "Client and server negotiate a connection before any data is sent. The handshake confirms both sides are ready, then data flows, and FIN closes it cleanly.",
      "يفاوض العميل والخادم اتصالًا قبل إرسال أي بيانات. وتؤكد المصافحة أن كلا الجانبين جاهز، ثم تتدفق البيانات، وتُغلق بـ FIN بطريقة منظمة.",
    ),
    nodes: [
      { label: l("Client", "العميل"), desc: l("Sends SYN with a chosen port", "يُرسل SYN بمنفذ مختار") },
      { label: l("Server", "الخادم"), desc: l("Receives SYN, replies SYN-ACK", "يتلقى SYN ويرد بـ SYN-ACK") },
      { label: l("Client", "العميل"), desc: l("Sends ACK — connection open", "يُرسل ACK — يُفتح الاتصال") },
      { label: l("Data flows both ways", "تدفق البيانات في كلا الاتجاهين"), desc: l("Sequenced, acknowledged, retransmitted", "مرقّمة ومقروءة وتُعاد عند الفقد") },
      { label: l("FIN closes", "تُغلق بـ FIN"), desc: l("Clean teardown in both directions", "إنهاء نظيف في كلا الاتجاهين") },
    ],
  },
  instructorDemo: l(
    "Demonstrate packet capture with the Wireshark companion tool on a real loopback capture or a captured sample, not a live network. Filter for a simple DNS query and show the packet details: the protocol (DNS over UDP), source and destination ports (53), and the question and answer fields. Then show a TCP handshake by filtering for http or tcp and expanding the packet's layers — point out the SYN, SYN-ACK and ACK packets and the ports in use. Explain how you identify what a packet is by its protocol, endpoints and port. Do not capture on any network you do not own or are authorized to monitor.",
    "عرض التقاط الحزم بأداة Wireshark المساندة على التقاط حلقي حقيقي أو عينة ملتقطة، وليس شبكة حية. وصف لاستعلام DNS بسيط واعرض تفاصيل الحزمة: البروتوكول (DNS عبر UDP) ومحارف المصدر والوجهة (53) وحقول السؤال والجواب. ثم أظهر مصافحة TCP بوصف http أو tcp وتوسيع طبقات الحزمة — وضّح حزم SYN وSYN-ACK وACK والمحارف المستخدمة. واشرح كيف تحدد هوية الحزمة ببروتوكولها وطرفيها ومنفذها. ولا تلتقط على أي شبكة لا تملكها أو لديك إذن بمراقبة.",
  ),
  exercises: [
    {
      title: l("Protocol matching", "مطابقة البروتوكولات"),
      instructions: l(
        "Match each protocol or service to its characteristic behavior and typical port: TCP, UDP, DNS, DHCP, HTTPS. For each, state one reason it is reliable or fast and the port it uses.",
        "زاوج كل بروتوكول أو خدمة بسلوكها المميز والمنفذ النموذجي: TCP وUDP وDNS وDHCP وHTTPS. وحدد لكل منها سببًا يظهر موثوقيته أو سرعته والمنفذ الذي يستخدمه.",
      ),
      expected: l(
        "TCP reliable on any port but 80/443 for web; UDP fast on 53 for DNS; DNS on 53; DHCP on 67/68; HTTPS encrypted on 443.",
        "TCP موثوق على أي منفذ لكن 80/443 للويب؛ وUDP سريع على 53 لـ DNS؛ وDNS على 53؛ وDHCP على 67/68؛ وHTTPS مشفر على 443.",
      ),
    },
    {
      title: l("Read a packet capture", "قراءة التقاط حزم"),
      instructions: l(
        "In the Wireshark companion tool, filter for DNS and identify a query packet. Record the protocol, source and destination ports, and the question asked. Then explain what the answer field returns.",
        "في أداة Wireshark المساندة، وصف لاستعلام DNS وحدّد حزمة استعلام. وسجّل البروتوكول ومحارف المصدر والوجهة والسؤال المطروح. ثم اشرح ما الذي ترده حقل الجواب.",
      ),
      expected: l(
        "A DNS query on UDP with source port 5353 or a high ephemeral port and destination port 53, with a domain name question and an IP answer.",
        "استعلام DNS عبر UDP بمنفذ مصدر 5353 أو منفذ عابر عالٍ ومنفذ وجهة 53، مع سؤال باسم نطاق وجواب بعنوان IP.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can contrast TCP and UDP and their use cases, describe the SYN handshake and FIN teardown, explain how ports let services share a host, explain DNS and DHCP, compare HTTP and HTTPS, and observe traffic with ping, traceroute and a packet capture tool, reading a packet at its layers. You can also recognize common services and their default ports and understand how each relates to exposure and defense.",
    "بعد هذه الجلسة يمكنك مقارنة TCP وUDP وحالات استخدامهما، ووصف مصافحة SYN وإيقاف FIN، وشرح كيف تتيح المنافذ للخدمات مشاركة مضيف، وشرح DNS وDHCP، والمقارنة بين HTTP وHTTPS، ومراقبة الحركة بـ ping وtraceroute وأداة التقاط الحزم، مع قراءة حزمة عبر طبقاتها. ويمكنك أيضًا التعرف على الخدمات الشائعة ومنافذها الافتراضية وفهم العلاقة بينها وبين الانكشاف والدفاع.",
  ),
  commonMistakes: [
    l(
      "Thinking UDP is 'insecure' and TCP is 'secure': both can carry secure content; the difference is reliability, not security.",
      "التفكير أن UDP 'غير آمن' وأن TCP 'آمن': فكلاهما يمكنه نقل محتوى آمن؛ والفرق هو الموثوقية وليس الأمان.",
    ),
    l(
      "Believing HTTPS guarantees a site is safe: it only encrypts and authenticates the connection; a phishing site can also use HTTPS.",
      "الاعتقاد أن HTTPS يضمن أن الموقع آمن: فهو يشفّر ويصادق الاتصال فقط؛ ويمكن لموقع تصيّد أن يستخدم HTTPS أيضًا.",
    ),
    l(
      "Confusing ports with IP addresses: a port identifies an application on a host, not the host itself.",
      "الخلط بين المنافذ وعناوين IP: فالمنفذ يحدد تطبيقًا على مضيف، وليس المضيف نفسه.",
    ),
    l(
      "Using plaintext HTTP for anything sensitive: HTTP sends everything readable on the network.",
      "استخدام HTTP بنص واضح لأي شيء حساس: فـ HTTP يرسل كل شيء مقروءًا على الشبكة.",
    ),
    l(
      "Capturing traffic on networks without permission: packet capture is a sensitive activity that requires authorization.",
      "التقاط الحركة على شبكات دون إذن: فالتقاط الحزم نشاط حساس يتطلب تصريحًا.",
    ),
  ],
  bestPractices: [
    l(
      "Prefer HTTPS and other encrypted protocols in production so traffic is confidential and integrity-protected.",
      "افضل HTTPS والبروتوكولات المشفّرة الأخرى في الإنتاج لتكون الحركة سرية ومحمية بالتكامل.",
    ),
    l(
      "Open only the ports each service truly needs, and filter them with a firewall to minimize attack surface.",
      "افتح فقط المنافذ التي تحتاجها كل خدمة حقًا، وصفّها بجدار ناري لتقليل سطح الهجوم.",
    ),
    l(
      "Monitor DNS lookups and block known-bad domains at the resolver or firewall.",
      "راقب عمليات بحث DNS وحجب النطاقات المعروفة بالسوء عند المحلّل أو الجدار الناري.",
    ),
    l(
      "Use packet capture only on networks you own or are authorized to monitor, and prefer encrypted protocols.",
      "استخدم التقاط الحزم فقط على الشبكات التي تملكها أو لديك إذن بمراقبة، واحرص على تفضيل البروتوكولات المشفّرة.",
    ),
  ],
  keyTakeaways: [
    l(
      "TCP is reliable and connection-based (SYN handshake, retransmission, FIN); UDP is fast and connectionless.",
      "TCP موثوق ومبني على اتصال (مصافحة SYN وإعادة الإرسال وFIN)؛ وUDP سريع وبلا اتصال.",
    ),
    l(
      "A port identifies an application on a host; well-known services use standard ports like 80, 443, 53 and 22.",
      "يحدد المنفذ تطبيقًا على مضيف؛ وتستخدم الخدمات المعروفة منافذ قياسية مثل 80 و443 و53 و22.",
    ),
    l(
      "DNS resolves names to IP addresses (UDP 53); DHCP assigns addresses, mask, gateway and DNS automatically.",
      "يحوّل DNS الأسماء إلى عناوين IP (UDP 53)؛ ويخصص DHCP العناوين والقناع والبوابة وDNS تلقائيًا.",
    ),
    l(
      "HTTP sends in cleartext on port 80; HTTPS encrypts and authenticates over TLS on port 443.",
      "يُرسل HTTP بنص واضح على المنفذ 80؛ ويشفر HTTPS ويصادق عبر TLS على المنفذ 443.",
    ),
    l(
      "ping and traceroute test connectivity and path; packet capture tools let you read packets layer by layer on networks you are authorized to monitor.",
      "يختبر ping وtraceroute الاتصال والمسار؛ وتتيح أدوات التقاط الحزم قراءة الحزم طبقة بطبقة على الشبكات المصرّح لك بمراقبة.",
    ),
  ],
  lab: {
    title: l("Lab 5 — Network Discovery & Traffic Analysis", "المختبر 5 — اكتشاف الشبكة وتحليل الحركة"),
    scenario: l(
      "You are a junior network technician helping set up a small lab network. You need to verify connectivity, map which services are exposed on a host, and observe the protocols and services actually used during a simple web session, so you can report what is reachable and what is sent over the network.",
      "أنت فني شبكات مبتدئ يساعد في تهيئة شبكة مختبر صغيرة. تحتاج إلى التحقق من الاتصال، وخرائط الخدمات المكشوفة على مضيف، ومراقبة البروتوكولات والخدمات المستخدمة فعليًا خلال جلسة ويب بسيطة، لتتمكن من الإبلاغ بما هو قابل للوصول وما يُرسل عبر الشبكة.",
    ),
    safety: l(
      "Run this lab only against hosts and networks you own or are authorized to use, such as a local lab VM. Do not scan, probe or capture traffic on any network, host or service you do not have explicit permission to test. Unauthorized network scanning and packet capture may be illegal and can disrupt systems. If you are unsure whether a target is in scope, stop and confirm authorization first.",
      "نفّذ هذا المختبر فقط على الأجهزة والشبكات التي تملكها أو لديك إذن باستخدامها، مثل جهاز افتراضي مختبري محلي. لا تمسح أو تفحص أو تلتقط الحركة على أي شبكة أو مضيف أو خدمة ليس لديك إذن صريح باختبارها. فمسح الشبكات والتقاط الحزم غير المصرّح به قد يكون مخالفًا للقانون وقد يعطّل الأنظمة. وإذا لم تكن متأكدًا من أن الهدف ضمن النطاق، توقف وتحقق من التصريح أولًا.",
    ),
    steps: [
      l("Verify connectivity with ping", "التحقق من الاتصال باستخدام ping"),
      l("Trace the path to a destination with traceroute", "تتبع المسار إلى وجهة باستخدام traceroute"),
      l("Identify common services and ports exposed on a host", "تحديد الخدمات والمحارف الشائعة المكشوفة على مضيف"),
      l("Capture and inspect a DNS query", "التقاط وفحص استعلام DNS"),
      l("Inspect a web request and response", "فحص طلب واستجابة ويب"),
      l("Record findings and assess exposure", "تسجيل النتائج وتقييم الانكشاف"),
    ],
    expected: l(
      "You can confirm reachability with ping, trace the path with traceroute, identify common services and their ports, capture and read a DNS query and a web exchange, and write a short report on what is reachable and what traffic is observed.",
      "يمكنك التأكد من إمكانية الوصول بـ ping، وتتبع المسار بـ traceroute، وتحديد الخدمات الشائعة ومنافذها، والتقاط وقراءة استعلام DNS وتبادل ويب، وكتابة تقرير قصير عن ما هو قابل للوصول وما تم رصده من حركة.",
    ),
    tool: "port",
    objectives: [
      l("Verify connectivity with ping", "التحقق من الاتصال باستخدام ping"),
      l("Trace the path with traceroute", "تتبع المسار باستخدام traceroute"),
      l("Identify common services and their default ports", "تحديد الخدمات الشائعة ومنافذها الافتراضية"),
      l("Capture and read a DNS query and a web exchange", "التقاط وقراءة استعلام DNS وتبادل ويب"),
      l("Assess and report network exposure", "تقييم الانكشاف الشبكي ورفعه في تقرير"),
    ],
    prerequisites: [
      l("Session 7: networking layers, devices, IP addressing and subnets", "الجلسة 7: طبقات الشبكات والأجهزة وعنونة IP والشبكات الفرعية"),
      l("Basic comfort with a terminal or command prompt", "الراحة الأساسية مع نافذة طرفية أو سطر الأوامر"),
    ],
    environment: l(
      "A local lab VM or the companion browser tools (ping/traceroute and packet capture) on a network you own or are authorized to use. No real or third-party networks.",
      "جهاز افتراضي مختبري محلي أو أدوات المتصفح المساندة (ping/traceroute والتقاط الحزم) على شبكة تملكها أو لديك إذن باستخدامها. لا شبكات حقيقية أو خارجية.",
    ),
    tools: [
      l("ping (connectivity test)", "ping (اختبار الاتصال)"),
      l("traceroute / tracepath (path tracing)", "traceroute / tracepath (تتبع المسار)"),
      l("Packet capture tool (Wireshark companion)", "أداة التقاط الحزم (Wireshark المساندة)"),
      l("Port/service reference (companion browser tool)", "مرجع المنافذ/الخدمات (أداة متصفح مساندة)"),
    ],
    authorization: l(
      "Scope: test and capture only against local lab hosts and networks you own or are explicitly authorized to use. Prohibited: scanning, probing or capturing any host, network or service without explicit authorization. Stop condition: if a target is not clearly in scope, or you are unsure, stop and confirm authorization first.",
      "النطاق: الاختبار والتقاط فقط على الأجهزة والشبكات المحلية التي تملكها أو لديك إذن صريح باستخدامها. المحظور: مسح أو فحص أو التقاط أي مضيف أو شبكة أو خدمة دون تصريح صريح. شرط التوقف: إذا لم يكن الهدف ضمن النطاق بوضوح، أو لم تكن متأكدًا، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Verify connectivity with ping", "التحقق من الاتصال باستخدام ping"),
        command: "ping <lab-host-ip>",
        explanation: l(
          "Ping sends ICMP echo requests to test whether a host is reachable and measure the round-trip time. A successful reply confirms the host is up and reachable on the network.",
          "يُرسل ping طلبات نبض ICMP لاختبار ما إذا كان المضيف قابلًا للوصول ولقياس زمن الذهاب والعودة. ويؤكد الرد الناجح أن المضيف يعمل ويمكن الوصول إليه على الشبكة.",
        ),
        expected: l("Repeated replies with a consistent round-trip time confirm the host is reachable.", "تؤكد الردود المتكررة مع زمن ذهاب وعودة ثابت أن المضيف قابل للوصول."),
      },
      {
        title: l("Trace the path with traceroute", "تتبع المسار باستخدام traceroute"),
        command: "traceroute <destination> (or tracepath)",
        explanation: l(
          "Traceroute follows the path a packet takes by varying the time-to-live and reading ICMP responses from each hop, showing the route to the destination and where delays occur.",
          "يتتبع traceroute المسار الذي تسلكه الحزمة بتغيير وقت الحياة وقراءة ردود ICMP من كل قفزة، فيبيّن المسار إلى الوجهة وأين تحدث التأخيرات.",
        ),
        expected: l("A list of hops from your host to the destination, with the route visible hop by hop.", "قائمة بالقفزات من جهازك إلى الوجهة، مع المسار معروض قفزة بقفزة."),
      },
      {
        title: l("Identify common services and ports", "تحديد الخدمات والمحارف الشائعة"),
        command: "Port/service reference tool",
        explanation: l(
          "Using the port/service reference, identify which standard services and ports a host may expose, such as HTTP 80, HTTPS 443, DNS 53, SSH 22 and RDP 3389. Each open port is attack surface to protect.",
          "باستخدام مرجع المنافذ/الخدمات، حدّد الخدمات والمحارف القياسية التي قد يكشفها مضيف، مثل HTTP 80 وHTTPS 443 وDNS 53 وSSH 22 وRDP 3389. وكل منفذ مفتوح هو سطح هجوم يجب حمايته.",
        ),
        expected: l("A list of common services with their standard ports and a note on which are remote-access services that should be protected.", "قائمة بالخدمات الشائعة مع منافذها القياسية وملاحظة عن الخدمات ذات الوصول البعيد التي يجب حمايتها."),
      },
      {
        title: l("Capture and inspect a DNS query", "التقاط وفحص استعلام DNS"),
        command: "Packet capture: filter for DNS",
        explanation: l(
          "Start a capture and filter for DNS. Identify a query packet: it runs over UDP with destination port 53, contains a domain-name question, and the answer returns an IP address.",
          "ابدأ التقاطًا وصف لاستعلام DNS. وحدّد حزمة استعلام: تعمل عبر UDP بمنفذ وجهة 53، وتحتوي على سؤال باسم نطاق، ويعود الجواب بعنوان IP.",
        ),
        expected: l("A DNS query packet on UDP port 53 with a domain-name question and an IP address answer.", "حزمة استعلام DNS عبر UDP المنفذ 53 مع سؤال باسم نطاق وجواب بعنوان IP."),
      },
      {
        title: l("Inspect a web request and response", "فحص طلب واستجابة ويب"),
        command: "Packet capture: filter for HTTP",
        explanation: l(
          "Filter the capture for HTTP. Observe the request/response exchange: a request with a method and URL, and a response with a status code such as 200. Note that plaintext HTTP is readable, motivating the use of HTTPS.",
          "صف الالتقاط لـ HTTP. ولاحظ تبادل الطلب/الاستجابة: طلب بأسلوب وURL، واستجابة برمز حالة مثل 200. وتنبّه إلى أن HTTP بنص واضح مقروء، مما يدفع إلى استخدام HTTPS.",
        ),
        expected: l("A cleartext HTTP exchange visible to the capture, with the request, the 200 response, and the readable content.", "تبادل HTTP بنص واضح واضح للالتقاط، مع الطلب والاستجابة 200 والمحتوى المقروء."),
      },
      {
        title: l("Record findings and assess exposure", "تسجيل النتائج وتقييم الانكشاف"),
        command: "Short report",
        explanation: l(
          "Summarize what was reachable, which services and ports were identified, what traffic was observed, and which exposures (such as plaintext HTTP or exposed remote-access ports) should be reduced.",
          "لخّص ما كان قابلًا للوصول، والخدمات والمحارف التي تم تحديدها، والحركة التي رُصدت، والانكسافات (مثل HTTP بنص واضح أو منافذ الوصول البعيد المكشوفة) التي يجب تقليلها.",
        ),
        expected: l("A short report listing reachable hosts, identified services and ports, observed traffic, and recommended exposure reductions.", "تقرير قصير يسرد الأجهزة القابلة للوصول والخدمات والمحارف المحددة والحركة المرصودة والتحسينات الموصى بها لتقليل الانكشاف."),
      },
    ],
    troubleshooting: [
      {
        problem: l("ping reports no reply", "يبلغ ping عن عدم وجود رد"),
        fix: l("Check the host is powered on and reachable, confirm the address and subnet, and verify the firewall does not block ICMP. If the host is off or filtered, ping cannot confirm reachability.", "تحقق من أن المضيف يعمل ويمكن الوصول إليه، وتأكد من العنوان والشبكة الفرعية، وتحقق من أن الجدار الناري لا يحجب ICMP. وإذا كان المضيف متوقفًا أو محجوبًا فلا يمكن لـ ping التأكد من إمكانية الوصول."),
      },
      {
        problem: l("traceroute shows repeated asterisks on a hop", "يُظهر traceroute علامات نجمة متكررة على قفزة"),
        fix: l("A hop that does not respond is common (some routers block ICMP). The route may still be working — note the hop as non-responsive and continue.", "من الطبيعي أن لا تستجيب قفزة (بعض الموجهات تحجب ICMP). وقد يظل المسار يعمل — سجّل القفزة كغير مستجيبة وتابع."),
      },
      {
        problem: l("Packet capture shows no matching packets", "لا يُظهر التقاط الحزم حزمًا مطابقة"),
        fix: l("Confirm traffic is actually occurring, that you are capturing on the correct interface, and that the filter is correct (for example DNS, not dns).", "تأكد من أن الحركة تحدث فعليًا، وأن الالتقاط على الواجهة الصحيحة، وأن الوصف صحيح (مثل DNS وليس dns)."),
      },
      {
        problem: l("Unsure whether a target is in scope to test", "لست متأكدًا مما إذا كان الهدف ضمن النطاق للاختبار"),
        fix: l("Stop and confirm authorization before testing or capturing. Only test and capture hosts and networks you own or are explicitly authorized to use.", "توقف وتحقق من التصريح قبل الاختبار أو الالتقاط. واختبر والتقط فقط الأجهزة والشبكات التي تملكها أو لديك إذن صريح باستخدامها."),
      },
    ],
    deliverables: [
      l("Reachability result from ping", "نتيجة إمكانية الوصول من ping"),
      l("Path trace from traceroute", "تتبع المسار من traceroute"),
      l("A list of common services and their ports", "قائمة بالخدمات الشائعة ومنافذها"),
      l("A captured and analyzed DNS query", "استعلام DNS ملتقط ومُحلّل"),
      l("A captured and analyzed web exchange", "تبادل ويب ملتقط ومُحلّل"),
      l("A short report on reachability and exposure", "تقرير قصير عن إمكانية الوصول والانكشاف"),
    ],
    rubric: [
      { criterion: l("Correct reachability and path verification", "التحقق الصحيح من إمكانية الوصول والمسار"), weight: 20 },
      { criterion: l("Accurate service/port identification", "تحديد دقيق للخدمات والمحارف"), weight: 20 },
      { criterion: l("Correct DNS query capture and analysis", "الالتقاط والتحليل الصحيحين لاستعلام DNS"), weight: 20 },
      { criterion: l("Correct web exchange capture and analysis", "الالتقاط والتحليل الصحيحين لتبادل الويب"), weight: 20 },
      { criterion: l("Clear report and safety awareness", "تقرير واضح ووعي بالسلامة"), weight: 20 },
    ],
  },
  quiz: [
    {
      q: l("Which protocol uses a three-way handshake?", "أي بروتوكول يستخدم مصافحة ثلاثية؟"),
      options: [
        l("UDP", "UDP"),
        l("TCP", "TCP"),
        l("ICMP", "ICMP"),
        l("ARP", "ARP"),
      ],
      answer: 1,
      why: l("TCP establishes a connection with SYN, SYN-ACK and ACK before sending data.", "يُنشئ TCP اتصالًا بـ SYN وSYN-ACK وACK قبل إرسال البيانات."),
    },
    {
      q: l("Which protocol is connectionless and has no retransmission?", "أي بروتوكول بلا اتصال ولا يعيد الإرسال؟"),
      options: [
        l("TCP", "TCP"),
        l("UDP", "UDP"),
        l("HTTP", "HTTP"),
        l("DNS is not a transport protocol", "DNS ليس بروتوكول نقل"),
      ],
      answer: 1,
      why: l("UDP sends datagrams without a connection or guaranteed delivery or retransmission.", "يُرسل UDP وحدات بيانات دون اتصال أو ضمان تسليم أو إعادة إرسال."),
    },
    {
      q: l("What does DNS primarily do?", "ما الذي يفعله DNS أساسًا؟"),
      options: [
        l("Assigns IP addresses", "يخصص عناوين IP"),
        l("Translates domain names to IP addresses", "يحوّل أسماء النطاقات إلى عناوين IP"),
        l("Routes packets", "يوجّه الحزم"),
        l("Encrypts web traffic", "يشفّر حركة الويب"),
      ],
      answer: 1,
      why: l("DNS resolves human-readable domain names to IP addresses.", "يحوّل DNS أسماء النطاقات المفهومة للبشر إلى عناوين IP."),
    },
    {
      q: l("What does DHCP assign to a device joining a network?", "ماذا يخصص DHCP لجهاز ينضم إلى شبكة؟"),
      options: [
        l("MAC address only", "عنوان MAC فقط"),
        l("IP address, subnet mask, default gateway and DNS", "عنوان IP وقناع الشبكة والبوابة الافتراضية وDNS"),
        l("Firewall rules", "قواعد جدار ناري"),
        l("A username and password", "اسم مستخدم وكلمة مرور"),
      ],
      answer: 1,
      why: l("DHCP automatically provides the IP configuration a device needs to communicate.", "يوفّر DHCP تلقائيًا إعداد IP الذي يحتاجه الجهاز للتواصل."),
    },
    {
      q: l("What is the main security difference between HTTP and HTTPS?", "ما الفرق الأمني الرئيس بين HTTP وHTTPS؟"),
      options: [
        l("HTTPS uses port 80, HTTP uses port 443", "يستخدم HTTPS المنفذ 80 ويستخدم HTTP المنفذ 443"),
        l("HTTPS encrypts and authenticates the exchange; HTTP sends in cleartext", "يشفّر HTTPS ويصادق التبادل؛ ويُرسل HTTP بنص واضح"),
        l("HTTP is faster", "HTTP أسرع"),
        l("There is no difference", "لا يوجد فرق"),
      ],
      answer: 1,
      why: l("HTTPS runs over TLS, encrypting and authenticating traffic; HTTP transmits in cleartext.", "يعمل HTTPS عبر TLS فيشفر الحركة ويصادقها؛ ويرسل HTTP بنص واضح."),
    },
    {
      q: l("Which port does HTTPS use by default?", "على أي منفذ يستخدم HTTPS افتراضيًا؟"),
      options: [
        l("22", "22"),
        l("80", "80"),
        l("443", "443"),
        l("53", "53"),
      ],
      answer: 2,
      why: l("HTTPS (HTTP over TLS) uses the well-known port 443.", "يستخدم HTTPS (HTTP عبر TLS) المنفذ المعروف 443."),
    },
    {
      q: l("What is the purpose of a port number in a packet?", "ما الغرض من رقم المنفذ في الحزمة؟"),
      options: [
        l("It identifies the host", "يحدد المضيف"),
        l("It identifies the application/service on the host", "يحدد التطبيق/الخدمة على المضيف"),
        l("It encrypts the payload", "يشفّر الحمولة"),
        l("It sets the route", "يحدد المسار"),
      ],
      answer: 1,
      why: l("The port lets many services share one IP address by identifying the application endpoint.", "يتيح المنفذ لخدمات كثيرة مشاركة عنوان IP واحد بتحديد نقطة نهاية التطبيق."),
    },
    {
      q: l("Which tool is best for reading packets layer by layer?", "أفضل أداة لقراءة الحزم طبقة بطبقة؟"),
      options: [
        l("ping", "ping"),
        l("traceroute", "traceroute"),
        l("Packet capture tool (Wireshark)", "أداة التقاط الحزم (Wireshark)"),
        l("ipconfig", "ipconfig"),
      ],
      answer: 2,
      why: l("A packet capture tool lets you inspect each packet's protocol, ports, headers and payload.", "تتيح أداة التقاط الحزم فحص كل حزمة ببروتوكولها ومحارفها وترويساتها وحمولتها."),
    },
    {
      q: l("The TCP handshake ends when the client sends which packet?", "تنتهي مصافحة TCP عندما يرسل العميل أي حزمة؟"),
      options: [
        l("SYN", "SYN"),
        l("SYN-ACK", "SYN-ACK"),
        l("ACK", "ACK"),
        l("FIN", "FIN"),
      ],
      answer: 2,
      why: l("After SYN, SYN-ACK and ACK, the connection is open and the handshake is complete.", "بعد SYN وSYN-ACK وACK يُفتح الاتصال وتكتمل المصافحة."),
    },
    {
      q: l("Which service uses port 22?", "أي خدمة تستخدم المنفذ 22؟"),
      options: [
        l("HTTP", "HTTP"),
        l("SSH", "SSH"),
        l("DNS", "DNS"),
        l("RDP", "RDP"),
      ],
      answer: 1,
      why: l("SSH (Secure Shell) uses port 22 for secure remote access.", "يستخدم SSH (الصدفة الآمنة) المنفذ 22 للوصول البعيد الآمن."),
    },
    {
      q: l("Which statement about packet capture is correct?", "أي عبارة عن التقاط الحزم صحيحة؟"),
      options: [
        l("Packet capture is always safe and needs no authorization", "التقاط الحزم آمن دائمًا ولا يحتاج تصريحًا"),
        l("Packet capture can expose cleartext passwords, so only capture networks you are authorized to monitor", "يمكن أن يكشف التقاط الحزم كلمات المرور بنص واضح، لذا التقط فقط الشبكات المصرّح لك بمراقبة"),
        l("Packet capture only works with HTTPS", "لا يعمل التقاط الحزم إلا مع HTTPS"),
        l("Packet capture cannot show DNS traffic", "لا يمكن للتقاط الحزم أن يُظهر حركة DNS"),
      ],
      answer: 1,
      why: l("Capturing can expose sensitive cleartext data, so it requires authorization and is done only on networks you are allowed to monitor.", "قد يكشف الالتقاط بيانات حساسة بنص واضح، لذا يتطلب تصريحًا ويُنفّذ فقط على الشبكات المسموح لك بمراقبة."),
    },
  ],
  trueFalse: [
    {
      q: l("TCP retransmits data that is lost in transit.", "يعيد TCP إرسال البيانات التي فُقدت أثناء النقل."),
      answer: true,
      why: l("TCP uses sequence numbers and retransmission to deliver data reliably.", "يستخدم TCP أرقام التسلسل وإعادة الإرسال لتسليم البيانات بموثوقية."),
    },
    {
      q: l("UDP guarantees that packets arrive in order.", "يضمن UDP وصول الحزم بالترتيب."),
      answer: false,
      why: l("UDP is connectionless and provides no ordering, delivery or retransmission guarantees.", "UDP بلا اتصال ولا يوفر ضمانات ترتيب أو تسليم أو إعادة إرسال."),
    },
    {
      q: l("HTTPS is HTTP sent over TLS, providing encryption and authentication.", "HTTPS هو HTTP عبر TLS، ويوفر التشفير والمصداقية."),
      answer: true,
      why: l("HTTPS encrypts the exchange and authenticates the server using a certificate.", "يشفر HTTPS التبادل ويصادق الخادم باستخدام شهادة."),
    },
    {
      q: l("A port number identifies a host on the network.", "يحدد رقم المنفذ مضيفًا على الشبكة."),
      answer: false,
      why: l("The IP address identifies the host; the port identifies the application/service on that host.", "يحدد عنوان IP المضيف؛ ويحدد المنفذ التطبيق/الخدمة على هذا المضيف."),
    },
    {
      q: l("DNS uses UDP port 53.", "يستخدم DNS UDP المنفذ 53."),
      answer: true,
      why: l("DNS queries typically use UDP on port 53 for speed and simplicity.", "تستخدم استعلامات DNS عادة UDP على المنفذ 53 للسرعة والبساطة."),
    },
    {
      q: l("Capturing traffic on a network you do not own is acceptable if it is only for practice.", "يُعد التقاط الحركة على شبكة لا تملكها مقبولًا إذا كان للتدريب فقط."),
      answer: false,
      why: l("Packet capture is sensitive and requires authorization; never capture traffic without permission.", "التقاط الحزم نشاط حساس يتطلب تصريحًا؛ ولا تلتقط الحركة دون إذن أبدًا."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each protocol as TCP or UDP-based (by typical use)", "صنّف كل بروتوكول بحسب TCP أو UDP (حسب الاستخدام النموذجي)"),
      categories: [
        l("TCP", "TCP"),
        l("UDP", "UDP"),
      ],
      items: [
        { text: l("Web browsing (HTTP/HTTPS)", "تصفح الويب (HTTP/HTTPS)"), answer: 0 },
        { text: l("DNS queries", "استعلامات DNS"), answer: 1 },
        { text: l("Email transfer", "نقل البريد"), answer: 0 },
        { text: l("Real-time video streaming", "بث الفيديو في الوقت الفعلي"), answer: 1 },
      ],
      why: l("Web and email use TCP for reliability; DNS and real-time streaming use UDP for speed.", "يستخدم الويب والبريد TCP للموثوقية؛ ويستخدم DNS والبث في الوقت الفعلي UDP للسرعة."),
    },
    {
      prompt: l("Match each service to its standard port", "زاوج كل خدمة بالمنفذ القياسي الخاص بها"),
      categories: [
        l("Port 80", "المنفذ 80"),
        l("Port 443", "المنفذ 443"),
        l("Port 53", "المنفذ 53"),
        l("Port 22", "المنفذ 22"),
      ],
      items: [
        { text: l("HTTP", "HTTP"), answer: 0 },
        { text: l("HTTPS", "HTTPS"), answer: 1 },
        { text: l("DNS", "DNS"), answer: 2 },
        { text: l("SSH", "SSH"), answer: 3 },
      ],
      why: l("HTTP is 80, HTTPS is 443, DNS is 53, SSH is 22 — the well-known ports for each service.", "HTTP هو 80 وHTTPS هو 443 وDNS هو 53 وSSH هو 22 — المنافذ المعروفة لكل خدمة."),
    },
    {
      prompt: l("Classify each statement as true for TCP or UDP", "صنّف كل عبارة كصحيحة لـ TCP أو لـ UDP"),
      categories: [
        l("TCP", "TCP"),
        l("UDP", "UDP"),
      ],
      items: [
        { text: l("Connection-based with a handshake", "مبنيّ على اتصال بمصافحة"), answer: 0 },
        { text: l("Connectionless, no retransmission", "بلا اتصال ولا إعادة إرسال"), answer: 1 },
        { text: l("Retransmits lost data", "يعيد إرسال البيانات المفقودة"), answer: 0 },
        { text: l("Low overhead, fast", "أقل تعقيدًا وسريع"), answer: 1 },
      ],
      why: l("TCP is connection-based and reliable; UDP is connectionless, fast and low-overhead.", "TCP مبني على اتصال وموثوق؛ وUDP بلا اتصال وسريع وأقل تعقيدًا."),
    },
    {
      prompt: l("Classify each protocol as encrypted or cleartext by default", "صنّف كل بروتوكول حسب ما إذا كان مشفرًا أو بنص واضح افتراضيًا"),
      categories: [
        l("Encrypted", "مشفّر"),
        l("Cleartext", "نص واضح"),
      ],
      items: [
        { text: l("HTTPS", "HTTPS"), answer: 0 },
        { text: l("HTTP", "HTTP"), answer: 1 },
        { text: l("SSH", "SSH"), answer: 0 },
        { text: l("Plain HTTP over port 80", "HTTP بنص واضح عبر المنفذ 80"), answer: 1 },
      ],
      why: l("HTTPS and SSH encrypt by default; HTTP sends in cleartext.", "يشفر HTTPS وSSH افتراضيًا؛ ويُرسل HTTP بنص واضح."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A web server exposes both HTTP on port 80 and HTTPS on port 443. A visitor can load the site over plaintext HTTP.",
        "يكشف خادم ويب كلًا من HTTP على المنفذ 80 وHTTPS على المنفذ 443. ويمكن لزائر تحميل الموقع عبر HTTP بنص واضح.",
      ),
      question: l("What is the security concern and the fix?", "ما المسألة الأمنية وما الحل؟"),
      options: [
        l("HTTP is slow; redirect HTTP to HTTPS", "HTTP بطيء؛ أعد توجيه HTTP إلى HTTPS"),
        l("HTTP sends the exchange in cleartext; redirect HTTP to HTTPS so traffic is encrypted", "يُرسل HTTP التبادل بنص واضح؛ أعد توجيه HTTP إلى HTTPS لتُشفَّر الحركة"),
        l("HTTP is secure; no change needed", "HTTP آمن؛ لا حاجة لتغيير"),
        l("Close port 443 to force HTTP", "أغلق المنفذ 443 لإجبار HTTP"),
      ],
      answer: 1,
      why: l("Plaintext HTTP exposes the exchange; redirecting to HTTPS encrypts and authenticates the traffic.", "يكشف HTTP بنص واضح التبادل؛ ويؤدي إعادة التوجيه إلى HTTPS إلى تشفير الحركة ومصداقيتها."),
    },
    {
      scenario: l(
        "A host has SSH (22) and RDP (3389) open to the Internet, and an administrator is unsure whether they are needed.",
        "يحتوي مضيف على SSH (22) وRDP (3389) مفتوحين على الإنترنت، ولا يتأكد مسؤول مما إذا كانا ضروريين.",
      ),
      question: l("What is the best action?", "ما أفضل إجراء؟"),
      options: [
        l("Leave them open for convenience", "اتركهما مفتوحين للراحة"),
        l("Close the ports if not needed, or restrict access behind a firewall/VPN with MFA", "أغلق المنافذ إن لم تكن ضرورية، أو قيّد الوصول خلف جدار ناري/VPN مع المصادقة متعددة العوامل"),
        l("Rename the services", "أعد تسمية الخدمات"),
        l("Ignore them; ports are harmless", "تجاهلهما؛ المنافذ لا ضرر منها"),
      ],
      answer: 1,
      why: l("Each exposed remote-access port is attack surface; removing it or protecting it with MFA reduces risk.", "كل منفذ وصول بعيد مكشوف هو سطح هجوم؛ وإزالته أو حمايته بالمصادقة متعددة العوامل يقلل الخطر."),
    },
    {
      scenario: l(
        "You need to confirm whether a host is reachable and understand the route to a destination.",
        "تحتاج إلى التأكد مما إذا كان مضيف قابلًا للوصول وفهم المسار إلى وجهة.",
      ),
      question: l("Which tools would you use?", "ما الأدوات التي ستستخدمها؟"),
      options: [
        l("Packet capture only", "التقاط الحزم فقط"),
        l("ping to test reachability and traceroute to trace the path", "ping لاختبار إمكانية الوصول وtraceroute لتتبع المسار"),
        l("ipconfig only", "ipconfig فقط"),
        l("DHCP only", "DHCP فقط"),
      ],
      answer: 1,
      why: l("ping confirms reachability and traceroute shows the route; packet capture is for detailed inspection.", "يؤكد ping إمكانية الوصول ويُظهر traceroute المسار؛ والتقاط الحزم للفحص التفصيلي."),
    },
  ],
  practicalChecks: [
    {
      task: l("State the three packets that make up the TCP handshake, in order", "اذكر الحزم الثلاث التي تكوّن مصافحة TCP، بالترتيب"),
      expected: l("SYN, then SYN-ACK, then ACK.", "SYN ثم SYN-ACK ثم ACK."),
      hint: l("Think of the client asking to connect, the server agreeing, and the client confirming.", "فكّر في العميل الذي يطلب الاتصال، والخادم الذي يوافق، والعميل الذي يؤكد."),
    },
    {
      task: l("Explain why plaintext HTTP is a problem and how HTTPS fixes it", "اشرح سبب مشكلة HTTP بنص واضح وكيف يحل HTTPS ذلك"),
      expected: l(
        "HTTP sends the exchange readable by anyone on the path; HTTPS encrypts and authenticates the exchange over TLS.",
        "يُرسل HTTP التبادل مقروءًا لأي شخص على المسار؛ ويشفر HTTPS التبادل ويصادقه عبر TLS.",
      ),
    },
  ],
  homework: {
    title: l("Homework 8 — Protocol behavior and traffic review", "الواجب 8 — سلوك البروتوكولات ومراجعة الحركة"),
    tasks: [
      l("Compare TCP and UDP in a table covering reliability, connection, retransmission and typical use.", "قارن TCP وUDP في جدول يغطي الموثوقية والاتصال وإعادة الإرسال والاستخدام النموذجي."),
      l("List five common services with their standard ports and one risk each carries if left open.", "اذكر خمس خدمات شائعة مع منافذها القياسية وخطرًا واحدًا لكل منها إذا بقيت مفتوحة."),
      l("Explain in a short paragraph what DNS does and why monitoring it helps security.", "اشرح في فقرة قصيرة ما يفعله DNS ولماذا تساعد مراقبته الأمن."),
      l("Describe how you would verify a host's reachability and the route to it, without touching any network you are not authorized to use.", "صف كيف ستتحقق من إمكانية الوصول إلى مضيف والمسار إليه، دون لمس أي شبكة غير مصرّح لك باستخدامها."),
    ],
    deliverable: l(
      "A comparison table, a services/ports table, a short DNS paragraph, and a reachability/traceroute description that respects authorization.",
      "جدول مقارنة، وجدول خدمات/منافذ، وفقرة قصيرة عن DNS، ووصف لإمكانية الوصول/تتبع المسار يحترم التصريح.",
    ),
    criteria: [
      l("Accurate TCP vs UDP comparison", "مقارنة دقيقة بين TCP وUDP"),
      l("Correct services and ports with sensible risk notes", "خدمات ومحارف صحيحة مع ملاحظات خطر معقولة"),
      l("Clear, correct explanation of DNS and monitoring", "شرح واضح وصحيح لـ DNS ومراقبته"),
      l("Reachability/traceroute description that respects authorization", "وصف لإمكانية الوصول/تتبع المسار يحترم التصريح"),
    ],
    challenge: l(
      "Optional challenge: in a local lab you are authorized to use, capture a single DNS query and annotate the protocol, source and destination ports, and the question and answer fields.",
      "مهمة تحدٍ اختيارية: في مختبر محلي مصرّح لك باستخدامه، التقط استعلام DNS واحدًا ووضّح البروتوكول ومحارف المصدر والوجهة وحقلي السؤال والجواب.",
    ),
  },
  refs: [
    { title: "TCP/IP fundamentals", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/" },
    { title: "What is DNS?", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
    { title: "What is DHCP?", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/network-layer/what-is-dhcp/" },
    { title: "What is the transport layer?", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/network-layer/what-is-the-transport-layer/" },
    { title: "HTTP overview", org: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
  ],
  terms: [
    { term: l("TCP", "بروتوكول النقل الميسر"), def: l("A reliable, connection-based transport protocol.", "بروتوكول نقل موثوق ومبنيّ على اتصال.") },
    { term: l("UDP", "بروتوكول النقل المحزون"), def: l("A simple, connectionless transport protocol with no delivery guarantees.", "بروتوكول نقل بسيط بلا اتصال ودون ضمانات تسليم.") },
    { term: l("SYN handshake", "مصافحة SYN"), def: l("The SYN, SYN-ACK, ACK process that opens a TCP connection.", "عملية SYN وSYN-ACK وACK التي تفتح اتصال TCP.") },
    { term: l("FIN", "FIN"), def: l("The TCP flag that closes a connection cleanly.", "العلم في TCP الذي يُغلق الاتصال بطريقة منظمة.") },
    { term: l("Port", "المنفذ"), def: l("A 16-bit number identifying an application endpoint on a host.", "رقم من 16 بتًا يحدد نقطة نهاية تطبيق على مضيف.") },
    { term: l("DNS", "نظام أسماء النطاقات"), def: l("The service that translates domain names to IP addresses.", "الخدمة التي تحوّل أسماء النطاقات إلى عناوين IP.") },
    { term: l("DHCP", "بروتوكول التكوين المضيف الديناميكي"), def: l("The protocol that assigns IP configuration automatically.", "البروتوكول الذي يخصص إعداد IP تلقائيًا.") },
    { term: l("HTTP", "بروتوكول نقل النص التشعبي"), def: l("The application protocol behind the web, sending in cleartext.", "بروتوكول التطبيقات خلف الويب، ويُرسل بنص واضح.") },
    { term: l("HTTPS", "HTTP الآمن"), def: l("HTTP over TLS, encrypting and authenticating the exchange.", "HTTP عبر TLS، فيشفر التبادل ويصادقه.") },
    { term: l("TLS", "أمن طبقات النقل"), def: l("The cryptographic protocol that encrypts connections such as HTTPS.", "البروتوكول التشفيري الذي يشفر الاتصالات مثل HTTPS.") },
    { term: l("ICMP", "بروتوكول رسائل التحكم بالشبكة"), def: l("A supporting protocol used by ping and traceroute.", "بروتوكول داعم يستخدمه ping وtraceroute.") },
    { term: l("ping", "ping"), def: l("A tool using ICMP to test reachability and round-trip time.", "أداة تستخدم ICMP لاختبار إمكانية الوصول وزمن الذهاب والعودة.") },
    { term: l("traceroute", "traceroute"), def: l("A tool that traces the path a packet takes through hops.", "أداة تتتبع المسار الذي تسلكه الحزمة عبر القفزات.") },
    { term: l("Packet capture", "التقاط الحزم"), def: l("Recording packets on a network for inspection with a tool like Wireshark.", "تسجيل الحزم على شبكة لفحصها بأداة مثل Wireshark.") },
    { term: l("Retransmission", "إعادة الإرسال"), def: l("TCP resending data that was lost or not acknowledged.", "إعادة TCP إرسال البيانات التي فُقدت أو لم تُقرَأ.") },
    { term: l("Sequence number", "رقم التسلسل"), def: l("TCP field that orders packets and detects loss.", "حقل في TCP يُرتب الحزم ويكتشف الفقد.") },
    { term: l("SYN flood", "فيضان SYN"), def: l("A denial-of-service attack abusing the TCP handshake.", "هجوم حجب خدمة يسيء استخدام مصافحة TCP.") },
    { term: l("Default gateway", "البوابة الافتراضية"), def: l("The router used to reach networks outside the local subnet.", "الموجّه المستخدم للوصول إلى الشبكات خارج الشبكة الفرعية المحلية."), },
    { term: l("Subnet mask", "قناع الشبكة"), def: l("Value that separates network and host bits in an IP address.", "القيمة التي تفصل بتات الشبكة والأجهزة في عنوان IP."), },
    { term: l("Cleartext", "النص الواضح"), def: l("Unencrypted data readable by anyone who can observe it.", "بيانات غير مشفّرة مقروءة لأي شخص يمكنه مراقبتها."), },
    { term: l("Status code", "رمز الحالة"), def: l("A number in an HTTP response indicating the result (200, 404, 500).", "رقم في استجابة HTTP يشير إلى النتيجة (200 أو 404 أو 500)."), },
    { term: l("Resolver", "المحلل"), def: l("The client-side component that queries DNS servers.", "المكون الجانبي للعميل الذي يسأل خوادم DNS."), },
    { term: l("Cache poisoning", "تسميم المخزن المؤقت"), def: l("Injecting false records into a DNS cache.", "حقن سجلات كاذبة في مخزن DNS المؤقت."), },
    { term: l("Exposure", "الانكشاف"), def: l("The degree to which a service or port is reachable by others.", "مدى إمكانية وصول الآخرين إلى خدمة أو منفذ."), },
    { term: l("Attack surface", "سطح الهجوم"), def: l("The sum of all points an attacker can attempt to exploit.", "مجموع جميع النقاط التي يمكن للمهاجم محاولة استغلالها."), },
  ],
};
