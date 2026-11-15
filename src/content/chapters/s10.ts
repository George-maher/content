import { l, type Session } from "../types";

export const s10: Session = {
  id: 10,
  phase: 3,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Web Fundamentals & Web Infrastructure: HTTP, Servers & the Document Root",
    "أساسيات الويب وبنيته التحتية: HTTP والخوادم ومستوى الجذر للملفات",
  ),
  summary: l(
    "How the web really works: HTTP request/response, URLs and how resources are located, web servers and document roots, static vs dynamic content, and the security implications of web infrastructure — including directory traversal, information disclosure and server hardening.",
    "كيف يعمل الويب فعليًا: طلب/استجابة HTTP، وعناوين URL وكيفية تحديد الموارد، وخوادم الويب ومستوى الجذر للملفات، والمحتوى الثابت مقابل الديناميكي، والآثار الأمنية لبنية الويب — بما في ذلك العبور بين الدلائل، وإفشاء المعلومات، وتقوية الخوادم.",
  ),
  overview: l(
    "The web is the most exposed part of most organizations, and it runs on a clear, learnable protocol. This session builds your understanding of web infrastructure from the ground up. You will learn how a URL names a resource, how HTTP requests and responses are structured, and the role of methods, status codes and headers. You will meet web servers and the document root, the directory from which a server serves files, and distinguish static from dynamic content. The session closes with the security implications of web infrastructure — how misconfiguration exposes files, how directory traversal and information disclosure arise, and how to harden a web server. This is the foundation for web application security later in the course.",
    "يُعد الويب الجزء الأكثر انكشافًا في معظم المنظمات، ويعمل ببروتوكول واضح يمكن تعلمه. تبني هذه الجلسة فهمك لبنية الويب من الأساس. ستتعلم كيف يحدد عنوان URL موردًا، وكيف تُهيك طلبات واستجابات HTTP، ودور الأساليب ورموز الحالة والترويسات. وستتعرف على خوادم الويب ومستوى الجذر للملفات، وهو الدليف الذي يخدم الخادم الملفات منه، والتميز بين المحتوى الثابت والديناميكي. وتنتهي الجلسة بالآثار الأمنية لبنية الويب — كيف يكشف سوء الإعداد الملفات، وكيف ينشأ العبور بين الدلائل وإفشاء المعلومات، وكيف تُقوّي خادم الويب. وهذا هو الأساس لأمن تطبيقات الويب لاحقًا في الدورة.",
  ),
  whyItMatters: l(
    "Web applications are the primary target of many attacks because they are directly exposed to the Internet. Before you can secure a web application, you must understand the infrastructure behind it. Knowing HTTP, URLs and the document root lets you understand what a server exposes, how a request is answered, and why a misconfiguration (a wrong directory, a default page, an open directory listing) can leak sensitive data. This foundation prepares you for web application security and for reading web logs and investigating web-related incidents.",
    "تطبيقات الويب هي الهدف الرئيسي لكثير من الهجمات لأنها مكشوفة مباشرة على الإنترنت. وقبل أن تتمكن من حماية تطبيق ويب، يجب أن تفهم البنية الخلفية له. ويُمكّنك معرفة HTTP وعناوين URL ومستوى الجذر من فهم ما يكشفه الخادم، وكيف تجاب الطلبات، ولماذا يمكن لسوء الإعداد (دليل خاطئ، صفحة افتراضية، قائمة دلائل مفتوحة) أن يتسرب منه بيانات حساسة. ويُعد هذا الأساس تطبيقات الويب للقراءة المتقدمة لسجلات الويب والتحقيق في الحوادث المتعلقة بالويب.",
  ),
  prerequisites: [
    l(
      "Session 8, Networking Fundamentals II: TCP/UDP, ports and the HTTP/HTTPS protocols.",
      "الجلسة 8، أساسيات الشبكات 2: TCP/UDP والمنافذ وبروتوكولات HTTP/HTTPS.",
    ),
    l(
      "Basic comfort with URLs and using a web browser.",
      "الراحة الأساسية مع عناوين URL واستخدام متصفح الويب.",
    ),
    l(
      "A legal and ethical mindset: test web configurations only on servers you own or are authorized to configure.",
      "عقلية قانونية وأخلاقية: اختبار إعدادات الويب فقط على الخوادم التي تملكها أو لديك إذن بإدارتها.",
    ),
  ],
  objectives: [
    l(
      "Explain the structure of a URL and how it locates a resource.",
      "شرح بنية عنوان URL وكيف يحدد موردًا.",
    ),
    l(
      "Describe the HTTP request/response model: methods, status codes and key headers.",
      "وصف نموذج طلب/استجابة HTTP: الأساليب ورموز الحالة والترويسات الرئيسية.",
    ),
    l(
      "Explain what a web server is, what the document root is, and how static vs dynamic content is served.",
      "شرح ماهية خادم الويب ومستوى الجذر للملفات، وكيف يُخدم المحتوى الثابت مقابل الديناميكي.",
    ),
    l(
      "Identify common web-server misconfigurations and their security implications.",
      "تحديد سوءات إعداد خادم الويب الشائعة وآثارها الأمنية.",
    ),
    l(
      "Explain directory traversal and information disclosure, and how to prevent them.",
      "شرح العبور بين الدلائل وإفشاء المعلومات، وكيفية منعهما.",
    ),
    l(
      "Apply basic web-server hardening: disable directory listings, restrict exposure, and keep software updated.",
      "تطبيق أساسيات تقوية خادم الويب: تعطيل قوائم الدلائل، والحد من الانكشاف، وتحديث البرمجيات.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("URLs and how they locate resources", "عناوين URL وكيفية تحديد الموارد"), minutes: 12 },
    { label: l("The HTTP request/response model", "نموذج طلب/استجابة HTTP"), minutes: 12 },
    { label: l("Web servers and the document root", "خوادم الويب ومستوى الجذر للملفات"), minutes: 10 },
    { label: l("Static vs dynamic content", "المحتوى الثابت مقابل الديناميكي"), minutes: 12 },
    { label: l("HTTP methods, status codes and headers", "أساليب HTTP ورموز الحالة والترويسات"), minutes: 10 },
    { label: l("Directory listing, traversal and hardening", "قائمة الدلائل والعبور والتقوية"), minutes: 15 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 14 },
  ],
  introduction: l(
    "The web is how most people and systems interact with information, and it is also the most visible attack surface for most organizations. This session explains how the web actually works so you can reason about its security. You will learn how a URL names a resource, how an HTTP request is built and how a response is structured, and the role of the web server and its document root. You will distinguish static content (fixed files) from dynamic content (generated on the fly) and see how each is served. You will then focus on the security implications of web infrastructure: how a misconfigured server exposes files, how directory traversal and information disclosure arise, and the steps that harden a web server. This foundation is essential before you study web application attacks.",
    "الويب هو كيف يتفاعل معظم الناس والأنظمة مع المعلومات، وهو أيضًا أكثر أسطح الهجوم وضوحًا لمعظم المنظمات. وتشرح هذه الجلسة كيف يعمل الويب فعليًا لتتمكن من التفكير في أمنه. ستتعلم كيف يحدد عنوان URL موردًا، وكيف يُبنى طلب HTTP وكيف تُهيك الاستجابة، ودور خادم الويب ومستوى الجذر للملفات. وستميز المحتوى الثابت (ملفات ثابتة) عن المحتوى الديناميكي (يُولّد أثناء التشغيل) وترى كيف يُخدم كل منهما. ثم تركز على الآثار الأمنية لبنية الويب: كيف يكشف الخادم غير الصحيح إعداده الملفات، وكيف ينشأ العبور بين الدلائل وإفشاء المعلومات، والخطوات التي تُقوّي خادم الويب. وهذا الأساس ضروري قبل أن تدرس هجمات تطبيقات الويب.",
  ),
  sections: [
    {
      h: l("1. URLs and how they locate resources", "1. عناوين URL وكيفية تحديد الموارد"),
      p: [
        l("A URL (Uniform Resource Locator) names a resource on the web. It has a scheme (http or https), a host name, a port (default 80 for HTTP, 443 for HTTPS) and a path that locates the resource, such as https://example.com:443/docs/index.html. When you enter a URL, the browser resolves the host name with DNS, opens a TCP connection to the server, and sends an HTTP request.", "يحدد عنوان URL (محدد موارد موحد) موردًا على الويب. ويتكون من أسلوب (http أو https)، واسم المضيف، ومنفذ (80 افتراضيًا لـ HTTP و443 لـ HTTPS) ومسار يحدد المورد، مثل https://example.com:443/docs/index.html. وعند إدخال عنوان URL يحلّ المتصفح اسم المضيف عبر DNS، ويفتح اتصال TCP بالخادم، ويرسل طلب HTTP."),
        l("Each part of the URL has a role: the scheme says which protocol to use, the host says which server to contact, the port says which service on that server, and the path says which resource to return. Breaking down a URL is the first step to understanding what a request actually asks for.", "كل جزء من عنوان URL له دور: فالأنموذج يقول أي بروتوكول يُستخدم، والمضيف يقول أي خادم يُتصل به، والمنفذ يقول أي خدمة على ذلك الخادم، والمسار يقول أي مورد يُرجع. وتحليل عنوان URL هو الخطوة الأولى لفهم ما يطلبه الطلب فعليًا."),
      ],
    },
    {
      h: l("2. The HTTP request/response model", "2. نموذج طلب/استجابة HTTP"),
      p: [
        l("HTTP is a request/response protocol. The client sends a request line (method, path, protocol version) and headers; the server returns a status line (protocol, status code, reason), headers and a body. This clean model is why the web is so interoperable — any client and any server can exchange these messages, which also means anyone on the path can observe them unless the connection is encrypted with HTTPS.", "HTTP بروتوكول طلب/استجابة. يرسل العميل سطر طلب (أسلوب ومسار وإصدار البروتوكول) وترويسات؛ ويعود الخادم بسطر حالة (بروتوكول ورمز حالة وسبب) وترويسات وجسم. وهذا النموذج الواضح هو سبب قابلية تشغيل الويب البيني — فأي عميل وأي خادم يمكنهما تبادل هذه الرسائل، مما يعني أيضًا أن أي شخص على المسار يمكنه مراقبتها ما لم يكن الاتصال مشفّرًا عبر HTTPS."),
        l("The request/response cycle is the heart of the web: the browser builds a request, the server processes it and returns a response, and the browser renders the result. Understanding this cycle is what lets you reason about what a server exposes, how a request is answered, and where an attack or a defense sits.", "تُعد دورة الطلب/الاستجابة قلب الويب: فيتبنّى المتصفح طلبًا، ويتعامل الخادم معه ويعود باستجابة، ويُصوّر المتصفح الناتج. ويُمكّنك فهم هذه الدورة من التفكير في ما يكشفه الخادم، وكيف تجاب الطلبات، وأين يقع الهجوم أو الدفاع."),
      ],
    },
    {
      h: l("3. Web servers and the document root", "3. خوادم الويب ومستوى الجذر للملفات"),
      p: [
        l("A web server is a program that accepts HTTP requests and returns responses. Examples include Apache HTTP Server, nginx and Microsoft's IIS. A key concept is the document root: the directory on the server that maps directly to the web path. When a request asks for /docs/index.html, the server looks for the file under its document root, for example /var/www/html/docs/index.html. Everything outside the document root is not served by default.", "خادم الويب برنامج يقبل طلبات HTTP ويعود بالاستجابات. وتشمل الأمثلة Apache HTTP Server وnginx وIIS من مايكروسوفت. ومن المفاهيم الأساسية مستوى الجذر للملفات: الدليف على الخادم الذي يربط مباشرةً بالمسار على الويب. فعند أن يطلب طلب ما /docs/index.html، يبحث الخادم عن الملف تحت مستوى جذره، مثل /var/www/html/docs/index.html. ولا يُخدم كل شيء خارج مستوى الجذر افتراضيًا."),
        l("The document root is the boundary of what the server is willing to serve. Configuring it correctly is the single most important web-infrastructure decision: a document root that points too broadly, or that is combined with directory listing, can expose files that were never meant to be public.", "يمثل مستوى الجذر حد ما يرغب الخادم في تقديمه. ويُعد ضبطه بشكل صحيح أهم قرار في بنية الويب: فمستوى جذر يشير إلى نطاق واسع جدًا، أو يُدمج مع قائمة الدلائل، يمكن أن يكشف ملفات لم يكن مقصودًا أن تكون عامة."),
      ],
    },
    {
      h: l("4. Static vs dynamic content", "4. المحتوى الثابت مقابل الديناميكي"),
      p: [
        l("Static content is fixed files served as-is (HTML, CSS, images, scripts). Dynamic content is generated on the server at request time by a server-side program or application, such as a page that queries a database. Static content is simple to serve and cache; dynamic content is powerful but brings an application layer that must be secured, which is the focus of web application security later in the course.", "المحتوى الثابت ملفات ثابتة تُخدم كما هي (HTML وCSS وصور وبرمجيات). والمحتوى الديناميكي يُولّد على الخادم وقت الطلب ببرنامج أو تطبيق على جانب الخادم، مثل صفحة تسأل قاعدة بيانات. وخدمة المحتوى الثابت بسيطة ويمكن تخزينها مؤقتًا؛ والمحتوى الديناميكي قوي لكنه يجلب طبقة تطبيق يجب حمايتها، وهو محور أمن تطبيقات الويب لاحقًا في الدورة."),
        l("Both rely on the same HTTP exchange and the same server configuration. The distinction matters because the security posture differs: static files are protected mainly by correct server configuration, while dynamic content requires securing the application logic as well.", "ويعتمد كلاهما على تبادل HTTP نفسه وإعداد الخادم نفسه. وتهم التفرقة لأن الوضع الأمني يختلف: فتُحمى الملفات الثابتة أساسًا بإعداد الخادم الصحيح، بينما يتطلب المحتوى الديناميكي حماية منطق التطبيق أيضًا."),
      ],
    },
    {
      h: l("5. HTTP methods and status codes", "5. أساليب HTTP ورموز الحالة"),
      p: [
        l("The method states what the client wants to do. GET reads a resource and should be safe and idempotent; POST submits data to a server; PUT and DELETE create and remove resources. OPTIONS reports allowed methods. Not every server supports every method, and methods that change state must be handled carefully to prevent misuse.", "يحدد الأسلوب ما يريد العميل فعله. فيُقرأ GET موردًا ويجب أن يكون آمنًا وقابلًا للتكرار؛ ويُسلّم POST بيانات إلى الخادم؛ ويُنشئ PUT وDELETE الموارد ويحذفها. ويُبلغ OPTIONS عن الأساليب المسموحة. ولا يدعم كل خادم كل أسلوب، ويجب التعامل بحذر مع الأساليب التي تغير الحالة لمنع إساءة الاستخدام."),
        l("Status codes tell the client how the request ended: 2xx success (200 OK, 204 No Content), 3xx redirection (301 moved permanently), 4xx client error (400 bad request, 401 unauthorized, 403 forbidden, 404 not found), 5xx server error (500 internal server error, 503 service unavailable). Reading these codes quickly tells you whether a request worked and why a failure occurred.", "تُخبر رموز الحالة العميل كيف انتهى الطلب: 2xx نجاح (200 نجح، 204 لا محتوى)، و3xx إعادة توجيه (301 نُقل نهائيًا)، و4xx خطأ من العميل (400 طلب خاطئ، 401 غير مصرّح، 403 محظور، 404 غير موجود)، و5xx خطأ من الخادم (500 خطأ داخلي، 503 الخدمة غير متاحة). ويُمكّنك قراءة هذه الرموز بسرعة من معرفة ما إذا نجح الطلب وسبب أي فشل."),
      ],
      table: {
        head: [l("Code", "الرمز"), l("Meaning", "المعنى"), l("When", "متى")],
        rows: [
          [l("200 OK", "200 نجح"), l("Success", "نجاح"), l("Request fulfilled", "تم تلبية الطلب")],
          [l("301 / 302", "301 / 302"), l("Redirect", "إعادة توجيه"), l("Resource moved", "نُقل المورد")],
          [l("400 / 404", "400 / 404"), l("Client error", "خطأ من العميل"), l("Bad request / not found", "طلب خاطئ / غير موجود")],
          [l("401 / 403", "401 / 403"), l("Auth error", "خطأ مصادقة"), l("Unauthorized / forbidden", "غير مصرّح / محظور")],
          [l("500 / 503", "500 / 503"), l("Server error", "خطأ من الخادم"), l("Internal error / unavailable", "خطأ داخلي / غير متاح")],
        ],
      },
    },
    {
      h: l("6. HTTP headers and reading a response", "6. ترويسات HTTP وقراءة الاستجابة"),
      p: [
        l("Headers carry the metadata of a request or response. Key headers include Host (the server name the client is addressing), User-Agent (the client software), Accept (the content types the client accepts), Content-Type (the type of the body), Location (where a redirect points), and Set-Cookie (cookies the server asks the client to store). Headers describe the message without being part of the visible content.", "تحمل الترويسات البيانات الوصفية للطلب أو الاستجابة. وتشمل الترويسات الرئيسية Host (اسم الخادم الذي يخاطبه العميل) وUser-Agent (برمجية العميل) وAccept (أنواع المحتوى التي يقبلها العميل) وContent-Type (نوع الجسم) وLocation (إلى أين تشير إعادة التوجيه) وSet-Cookie (ملفات الارتباط التي يطلب الخادم من العميل تخزينها). وتُوصف الترويسات الرسالة دون أن تكون جزءًا من المحتوى المرئي."),
        l("Reading a response means looking at the status code, the headers and the body in order. The status code tells you the result, the headers describe the body, and the body carries the actual content. Learning to read this structure is what lets you inspect what a server actually returned and spot an anomaly.", "تعني قراءة الاستجابة النظر إلى رمز الحالة والترويسات والجسم بالترتيب. فرمز الحالة يخبرك بالنتيجة، وتُوصف الترويسات الجسم، ويحمل الجسم المحتوى الفعلي. ويُمكّنك تعلم قراءة هذه البنية من فحص ما عاد به الخادم فعليًا واكتشاف أي تناقض."),
      ],
    },
    {
      h: l("7. Directory listing and directory traversal", "7. قائمة الدلائل والعبور بين الدلائل"),
      p: [
        l("Two common problems come from misconfiguration. Directory listing: if a server is configured to show a file listing when no index file is present, an attacker can browse and enumerate files. Directory traversal: a flawed dynamic page that accepts a path may allow an attacker to request ../../etc/passwd or similar sequences to read files outside the document root. Proper configuration prevents both: serve only from the document root, reject path input that escapes it, and never enable directory listings on sensitive directories.", "تنشأ مشكلتان شائعتان من سوء الإعداد. قائمة الدلائل: إذا كان الخادم مضبوطًا لإظهار قائمة ملفات عند عدم وجود ملف فهرس، يمكن للمهاجم استعراض الملفات وحصرها. والعبور بين الدلائل: قد تسمح صفحة ديناميكية معيبة تقبل مسارًا للمهاجم بطلب ../../etc/passwd أو تسلسلات مشابهة لقراءة ملفات خارج مستوى الجذر. ويمنع الإعداد الصحيح كليهما: اخدم فقط من مستوى الجذر، وارفض مدخل المسار الذي يخرج عنه، ولا تُفعّل أبدًا قوائم الدلائل على الدلائل الحساسة."),
      ],
      callout: {
        kind: "warn",
        text: l("A web server that serves files from an incorrect document root, or that has directory listing enabled, can expose sensitive files that were never meant to be public.", "يمكن لخادم ويب يخدم الملفات من مستوى جذر خاطئ، أو مُفعّل عليه قائمة الدلائل، أن يكشف ملفات حساسة لم يكن مقصودًا أن تكون عامة."),
      },
    },
    {
      h: l("8. Information disclosure and web-server hardening", "8. إفشاء المعلومات وتقوية خادم الويب"),
      p: [
        l("Information disclosure happens when a server reveals more than it should: default pages that expose the server name and version, error messages that leak internal details, or exposed backup/config files. Hardening a web server means: disable directory listings, restrict which methods and origins are allowed, keep the server software and modules updated, serve only over HTTPS, and ensure error pages do not reveal internals. These steps reduce the information an attacker can gather before any application attack even begins.", "يحدث إفشاء المعلومات عندما يكشف الخادم أكثر مما ينبغي: صفحات افتراضية تكشف اسم الخادم وإصداره، ورسائل خطأ تتسرب منها تفاصيل داخلية، أو ملفات نسخة/إعداد مكشوفة. وتقوية خادم الويب تعني: تعطيل قوائم الدلائل، والحد من الأساليب والمصادر المسموح بها، وتحديث برمجية الخادم والوحدات، وخدمة المحتوى عبر HTTPS فقط، وضمان عدم كشف صفحات الخطأ للتفاصيل الداخلية. وتُقلل هذه الخطوات المعلومات التي يمكن للمهاجم جمعها حتى قبل أن تبدأ أي هجوم على التطبيق."),
        l("A hardened web server is one that serves exactly what it should, to exactly who it should, and reveals nothing about itself beyond what is necessary. These configuration choices are the foundation that later web application security builds on.", "خادم الويب المُقوّى هو الذي يقدم بالضبط ما ينبغي، لمن ينبغي، ولا يكشف عن نفسه شيئًا غير ما هو ضروري. واختيارات الإعداد هذه هي الأساس الذي يُبنى عليه أمن تطبيقات الويب لاحقًا."),
      ],
    },
  ],
  examples: [
    l(
      "The URL https://example.com/docs/page.html has scheme https, host example.com, default port 443, and path /docs/page.html. The browser resolves example.com via DNS, connects on port 443, and requests /docs/page.html.",
      "يحتوي عنوان URL https://example.com/docs/page.html على أسلوب https واسم المضيف example.com والمنفذ الافتراضي 443 والمسار /docs/page.html. ويحلّ المتصفح example.com عبر DNS، ويتصل على المنفذ 443، ويطلب /docs/page.html.",
    ),
    l(
      "A GET request to /docs/page.html returns a 200 response with headers such as Content-Type: text/html and a body containing the HTML. A GET to a missing file returns 404 Not Found.",
      "يعود طلب GET إلى /docs/page.html باستجابة 200 مع ترويسات مثل Content-Type: text/html وجسم يحتوي على HTML. ويعود طلب GET إلى ملف مفقود بـ 404 غير موجود.",
    ),
    l(
      "A request for /../../etc/passwd sent to a misconfigured dynamic page attempts to escape the document root and read a system file. A properly configured server rejects the path and returns 400 or 403.",
      "يحاول طلب لـ /../../etc/passwd مرسل إلى صفحة ديناميكية غير مضبوطة الخروج من مستوى الجذر وقراءة ملف نظام. ويرفض الخادم المضبوط بشكل صحيح المسار ويعود بـ 400 أو 403.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A web server is configured with directory listing enabled. An attacker visits a directory with no index file and sees a full listing of files, including a backup file and configuration. Disabling directory listings removes this exposure.",
      "يوضع خادم ويب بإعداد قائمة الدلائل مفعّل. ويزوره مهاجم على دليل بلا ملف فهرس ويرى قائمة كاملة للملفات، بما في ذلك ملف نسخة احتياطية وإعداد. ويزيل تعطيل قوائم الدلائل هذا الانكشاف.",
    ),
    l(
      "A development site exposes its default server page, which reveals the exact server name and version. An attacker uses that version to find known vulnerabilities. Keeping the server updated and hiding version details closes this information leak.",
      "يكشف موقع تطوير صفحته الافتراضية للخادم، التي تكشف اسم الخادم وإصداره بالضبط. ويستخدم المهاجم هذا الإصدار للعثور على ثغرات معروفة. ويُغلق تحديث الخادم وإخفاء تفاصيل الإصدار هذا التسريب.",
    ),
    l(
      "An e-commerce site serves dynamic product pages from a database. The pages are generated on the server at request time. Securing them requires protecting both the server configuration and the application logic that queries the database.",
      "يخضع موقع تجارة إلكترونية صفحات منتجات ديناميكية من قاعدة بيانات. وتُولّد الصفحات على الخادم وقت الطلب. وتحميها يتطلب حماية إعداد الخادم ومنطق التطبيق الذي يسأل قاعدة البيانات.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("Web request/response cycle", "دورة طلب/استجابة الويب"),
    caption: l(
      "The browser resolves the host, connects, sends an HTTP request, the server maps the URL to the document root, and returns a response with a status code and body.",
      "يحلّ المتصفح المضيف، ويتصل، ويرسل طلب HTTP، ويربط الخادم عنوان URL بمستوى الجذر، ويعود باستجابة برمز حالة وجسم.",
    ),
    nodes: [
      { label: l("Browser", "المتصفح"), desc: l("Builds a URL and HTTP request", "يُشكّل عنوان URL وطلب HTTP") },
      { label: l("DNS", "DNS"), desc: l("Resolves host to IP", "يحوّل المضيف إلى IP") },
      { label: l("Web server", "خادم الويب"), desc: l("Maps URL to document root", "يربط URL بمستوى الجذر") },
      { label: l("Response", "الاستجابة"), desc: l("Status code + body", "رمز حالة + جسم") },
      { label: l("Browser renders", "يُصوّر المتصفح"), desc: l("Shows the result", "يُظهر الناتج") },
    ],
  },
  instructorDemo: l(
    "Demonstrate securing a web directory with the companion web-server tool. Show a document root with a public folder and a private folder. First show directory listing enabled: navigate to the public folder and note the file listing. Then disable directory listing and observe that the listing is replaced with 403 Forbidden. Finally, attempt a traversal path such as /../../etc/passwd and show the server rejecting it. Explain each hardening step and why it matters. Do this only in the simulator — do not configure or test any real server without authorization.",
    "عرض حماية دليل ويب بأداة خادم الويب المساندة. واعرض مستوى جذر يحتوي على مجلد عام وآخر خاص. وابدأ بإظهار قائمة الدلائل مفعّل: تصفّح المجلد العام ولاحظ قائمة الملفات. ثم عطّل قائمة الدلائل وراقب استبدال القائمة بـ 403 محظور. وأخيرًا جرّب مسار عبور مثل /../../etc/passwd وأظهر رفض الخادم له. واشرح كل خطوة تقوية وسبب أهميتها. ونفّذ هذا في المحاكٍ فقط — لا تُهيئ أو تختبر أي خادم حقيقي دون تصريح.",
  ),
  exercises: [
    {
      title: l("Parse a URL and a response", "تحليل عنوان URL واستجابة"),
      instructions: l(
        "Given the URL https://example.com:443/docs/report.pdf, identify the scheme, host, port and path. Then explain what a 404 response means for a requested file.",
        "بالنظر إلى عنوان URL https://example.com:443/docs/report.pdf، حدّد الأسلوب والمضيف والمنفذ والمسار. ثم اشرح معنى استجابة 404 لملف مطلوب.",
      ),
      expected: l(
        "Scheme https, host example.com, port 443, path /docs/report.pdf; a 404 means the requested resource was not found on the server.",
        "الأسلوب https، والمضيف example.com، والمنفذ 443، والمسار /docs/report.pdf؛ و404 يعني أن المورد المطلوب غير موجود على الخادم.",
      ),
    },
    {
      title: l("Apply hardening steps", "تطبيق خطوات التقوية"),
      instructions: l(
        "Given a misconfigured web server with directory listing enabled and an exposed version string, list the hardening steps you would apply and the risk each addresses.",
        "بالنظر إلى خادم ويب غير مضبوط بقائمة دلائل مفعّل وسلسلة إصدار مكشوفة، اذكر خطوات التقوية التي ستطبقها والخطر الذي تتناوله كل منها.",
      ),
      expected: l(
        "Disable directory listings (prevents file enumeration), hide version details (prevents version-based attacks), keep software updated, and serve over HTTPS.",
        "تعطيل قوائم الدلائل (يمنع حصر الملفات)، وإخفاء تفاصيل الإصدار (يمنع الهجمات القائمة على الإصدار)، وتحديث البرمجيات، والخدمة عبر HTTPS.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can explain the structure of a URL, describe the HTTP request/response model with methods, status codes and key headers, explain web servers, the document root and static vs dynamic content, identify common web-server misconfigurations, explain directory traversal and information disclosure and how to prevent them, and apply basic web-server hardening.",
    "بعد هذه الجلسة يمكنك شرح بنية عنوان URL، ووصف نموذج طلب/استجابة HTTP مع الأساليب ورموز الحالة والترويسات الرئيسية، وشرح خوادم الويب ومستوى الجذر والمحتوى الثابت مقابل الديناميكي، وتحديد سوءات إعداد خادم الويب الشائعة، وشرح العبور بين الدلائل وإفشاء المعلومات وكيفية منعهما، وتطبيق أساسيات تقوية خادم الويب.",
  ),
  commonMistakes: [
    l(
      "Confusing the URL path with the file path on disk: the URL path is served relative to the document root, not the server's full filesystem.",
      "الخلط بين مسار URL ومسار الملف على القرص: فمسار URL يُخدم نسبيًا إلى مستوى الجذر، وليس نظام الملفات الكامل للخادم.",
    ),
    l(
      "Thinking a 200 response always means the request was correct: it only means the server handled it successfully; the content may still be wrong or leak information.",
      "التفكير أن استجابة 200 تعني دائمًا أن الطلب صحيح: فهي تعني فقط أن الخادم تعامل معه بنجاح؛ وقد يظل المحتوى خاطئًا أو يتسرب معلومات.",
    ),
    l(
      "Leaving directory listing enabled on a directory that should be private: it exposes every file in that directory.",
      "ترك قائمة الدلائل مفعّلًا على دليل ينبغي أن يكون خاصًا: فيكشك كل ملف في ذلك الدليل.",
    ),
    l(
      "Assuming static content is automatically safe: even static files can leak information if the document root is misconfigured.",
      "الافتراض أن المحتوى الثابت آمن تلقائيًا: فحتى الملفات الثابتة يمكن أن تتسرب معلومات إذا كان مستوى الجذر غير مضبوط.",
    ),
    l(
      "Serving sensitive content over plaintext HTTP: always use HTTPS for anything sensitive.",
      "خدمة محتوى حساس عبر HTTP بنص واضح: واحرص دائمًا على HTTPS لأي شيء حساس.",
    ),
  ],
  bestPractices: [
    l(
      "Disable directory listings and serve only from a properly configured document root, rejecting paths that escape it.",
      "عطّل قوائم الدلائل واخدم فقط من مستوى جذر مضبوط، رافضًا المسارات التي تخرج عنه.",
    ),
    l(
      "Keep the web server software and modules updated, and hide version and internal error details.",
      "حدّث برمجية خادم الويب والوحدات، وأخفِ تفاصيل الإصدار ورسائل الخطأ الداخلية.",
    ),
    l(
      "Serve all sensitive content over HTTPS and redirect plaintext HTTP to it.",
      "اخدم كل المحتوى الحساس عبر HTTPS وأعد توجيه HTTP بنص واضح إليه.",
    ),
    l(
      "Restrict which HTTP methods and origins are allowed, and monitor and review access logs.",
      "قيّد الأساليب والمصادر المسموح بها في HTTP، وراقب سجلات الوصول وراجعها.",
    ),
  ],
  keyTakeaways: [
    l(
      "A URL names a resource with a scheme, host, port and path; the browser resolves the host and opens a connection.",
      "يحدد عنوان URL موردًا بالأسلوب والمضيف والمنفذ والمسار؛ ويحلّ المتصفح المضيف ويفتح اتصالًا.",
    ),
    l(
      "HTTP is a request/response protocol using methods, status codes and headers; a 200 means success, 4xx a client error, 5xx a server error.",
      "HTTP بروتوكول طلب/استجابة يستخدم الأساليب ورموز الحالة والترويسات؛ و200 يعني النجاح، و4xx خطأ من العميل، و5xx خطأ من الخادم.",
    ),
    l(
      "A web server maps a URL to its document root; static content is served as-is and dynamic content is generated on request.",
      "يربط خادم الويب عنوان URL بمستوى جذره؛ ويُخدم المحتوى الثابت كما هو ويُولّد المحتوى الديناميكي عند الطلب.",
    ),
    l(
      "Directory listing and directory traversal expose files outside the intended scope; proper configuration rejects them.",
      "تكشف قائمة الدلائل والعبور بين الدلائل ملفات خارج النطاق المقصود؛ ويرفضها الإعداد الصحيح.",
    ),
    l(
      "Hardening means disabling directory listings, hiding version details, updating the software, and serving over HTTPS.",
      "تعني التقوية تعطيل قوائم الدلائل، وإخفاء تفاصيل الإصدار، وتحديث البرمجيات، والخدمة عبر HTTPS.",
    ),
  ],
  lab: {
    title: l("Lab 6 — Web Server, Document Root & HTTP", "المختبر 6 — خادم الويب ومستوى الجذر وHTTP"),
    scenario: l(
      "You are setting up a web server for a small site with a public folder for the site files and a private folder for administrative files. You need to configure the document root correctly, control what is served, disable directory listing, and confirm that traversal attempts and unauthorized requests are rejected, so the server exposes only intended content.",
      "تُهيئ خادم ويب لموقع صغير مع مجلد عام لملفات الموقع ومجلد خاص للملفات الإدارية. تحتاج إلى ضبط مستوى الجذر بشكل صحيح، والتحكم في ما يُخدم، وتعطيل قائمة الدلائل، والتأكد من رفض محاولات العبور والطلبات غير المصرّح بها، حتى يكشف الخادم المحتوى المقصود فقط.",
    ),
    safety: l(
      "Configure and test only in the companion web-server simulator or on a local lab server you own or are authorized to administer. Do not configure, scan or test any real or third-party web server without explicit authorization. Do not attempt to read or traverse files on any system you do not control. If a task touches a server outside your authorized scope, stop and confirm authorization first.",
      "هيئ واختبر فقط في محاكٍ خادم الويب المرافق أو على خادم مختبري محلي تملكه أو لديك إذن بإدارته. ولا تُهيئ أو تمسح أو تختبر أي خادم ويب حقيقي أو خارجي دون تصريح صريح. ولا تحاول قراءة أو العبور بين ملفات أي نظام لا تتحكم به. وإذا تناولت مهمة خادمًا خارج نطاقك المصرّح، توقف وتحقق من التصريح أولًا.",
    ),
    steps: [
      l("Identify the document root and the served file for a URL", "تحديد مستوى الجذر والملف المقدم لعنوان URL"),
      l("Serve static content and observe the request/response", "تقديم المحتوى الثابت ومراقبة الطلب/الاستجابة"),
      l("Enable and then disable directory listing", "تفعيل ثم تعطيل قائمة الدلائل"),
      l("Reject a directory traversal attempt", "رفض محاولة عبور بين الدلائل"),
      l("Verify status codes for missing and forbidden resources", "التحقق من رموز الحالة للموارد المفقودة والمحظورة"),
      l("Apply hardening and write a configuration note", "تطبيق التقوية وكتابة ملاحظة إعداد"),
    ],
    expected: l(
      "You configure the document root correctly, serve static content, disable directory listing, reject a traversal attempt, verify the correct status codes, and write a short hardening note covering the controls applied.",
      "تُهيئ مستوى الجذر بشكل صحيح، وتقدم المحتوى الثابت، وتُعطّل قائمة الدلائل، وترفض محاولة عبور، وتتحقق من رموز الحالة الصحيحة، وتكتب ملاحظة تقوية قصيرة تغطي الضوابط المطبقة.",
    ),
    tool: "webserver",
    objectives: [
      l("Map a URL to the document root", "ربط عنوان URL بمستوى الجذر"),
      l("Serve static content and read the request/response", "تقديم المحتوى الثابت وقراءة الطلب/الاستجابة"),
      l("Disable directory listing to prevent file enumeration", "تعطيل قائمة الدلائل لمنع حصر الملفات"),
      l("Reject directory traversal and unauthorized requests", "رفض العبور بين الدلائل والطلبات غير المصرّح بها"),
      l("Verify status codes and apply hardening", "التحقق من رموز الحالة وتطبيق التقوية"),
    ],
    prerequisites: [
      l("Session 8: HTTP/HTTPS and the request/response model", "الجلسة 8: HTTP/HTTPS ونموذج الطلب/الاستجابة"),
      l("Basic comfort with URLs and using a web browser", "الراحة الأساسية مع عناوين URL واستخدام متصفح الويب"),
    ],
    environment: l(
      "The companion web-server simulator in a browser, or a local lab web server you own or are authorized to administer. No real or third-party servers. All files are fictional and contained in the simulator.",
      "محاكي خادم الويب المرافق في متصفح، أو خادم ويب مختبري محلي تملكه أو لديك إذن بإدارته. لا خوادم حقيقية أو خارجية. وجميع الملفات خيالية ومُحتواة في المحاكٍ.",
    ),
    tools: [
      l("Web-server simulator (companion browser tool)", "محاكي خادم الويب (أداة متصفح مساندة)"),
      l("Browser for viewing served content", "متصفح لعرض المحتوى المقدم"),
      l("Request/response inspector (in the simulator)", "مدقق الطلب/الاستجابة (في المحاكٍ)"),
    ],
    authorization: l(
      "Scope: configure and test only in the simulator or on a local lab server you own or are explicitly authorized to administer. Prohibited: configuring, scanning or testing any real or third-party web server, and reading or traversing files on any system you do not control. Stop condition: if a task touches a server or system outside your authorized scope, stop and confirm authorization first.",
      "النطاق: الإعداد والاختبار فقط في المحاكٍ أو على خادم مختبري محلي تملكه أو لديك إذن صريح بإدارته. المحظور: إعداد أو مسح أو اختبار أي خادم ويب حقيقي أو خارجي، وقراءة أو العبور بين ملفات أي نظام لا تتحكم به. شرط التوقف: إذا تناولت مهمة خادمًا أو نظامًا خارج نطاقك المصرّح، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Identify the document root", "تحديد مستوى الجذر"),
        command: "Web simulator: review document root",
        explanation: l(
          "Review the configured document root. Note that a URL path is served relative to this directory: a request for /docs/index.html maps to <document root>/docs/index.html on the server.",
          "راجع مستوى الجذر المضبوط. وتنبّه إلى أن مسار URL يُخدم نسبيًا إلى هذا الدليف: فطلب /docs/index.html يربط بـ <مستوى الجذر>/docs/index.html على الخادم.",
        ),
        expected: l("You can state the document root and map a URL path to a file within it.", "يمكنك ذكر مستوى الجذر وربط مسار URL بملف داخله."),
      },
      {
        title: l("Serve static content", "تقديم المحتوى الثابت"),
        command: "Request /index.html from the simulator",
        explanation: l(
          "Request a static file such as /index.html. Observe the request line and headers, and the 200 response with the file content. This is the core of serving static content.",
          "اطلب ملفًا ثابتًا مثل /index.html. ولاحظ سطر الطلب والترويسات، واستجابة 200 مع محتوى الملف. وهذا جوهر تقديم المحتوى الثابت.",
        ),
        expected: l("A 200 response returns the requested static file content.", "تعود استجابة 200 بمحتوى الملف الثابت المطلوب."),
      },
      {
        title: l("Enable and disable directory listing", "تفعيل وتعطيل قائمة الدلائل"),
        command: "Toggle directory listing and request a directory",
        explanation: l(
          "With directory listing enabled, request a directory with no index file and observe the file listing. Then disable directory listing and request the same directory again: the listing is replaced with a 403 response.",
          "مع تفعيل قائمة الدلائل، اطلب دليلًا بلا ملف فهرس ولاحظ قائمة الملفات. ثم عطّل قائمة الدلائل واطلب الدليل نفسه مجددًا: تُستبدل القائمة باستجابة 403.",
        ),
        expected: l("With listing enabled a file listing appears; after disabling, the directory returns 403 Forbidden.", "مع تفعيل القائمة تظهر قائمة الملفات؛ وبعد التعطيل يعود الدليل بـ 403 محظور."),
      },
      {
        title: l("Reject a directory traversal attempt", "رفض محاولة عبور بين الدلائل"),
        command: "Request /../../etc/passwd",
        explanation: l(
          "Request a traversal path such as /../../etc/passwd. A correctly configured server rejects paths that escape the document root, returning a 400 or 403 rather than serving a file outside the root.",
          "اطلب مسار عبور مثل /../../etc/passwd. ويرفض الخادم المضبوط بشكل صحيح المسارات التي تخرج عن مستوى الجذر، فيعود بـ 400 أو 403 بدلًا من تقديم ملف خارج الجذر.",
        ),
        expected: l("The traversal path is rejected with 400/403; no file outside the document root is served.", "يُرفض مسار العبور بـ 400/403؛ ولا يُقدم أي ملف خارج مستوى الجذر."),
      },
      {
        title: l("Verify status codes", "التحقق من رموز الحالة"),
        command: "Request a missing file and a forbidden resource",
        explanation: l(
          "Request a file that does not exist and observe a 404 Not Found. Then request a resource that is not authorized and observe a 403 Forbidden. Confirm you can distinguish the codes and their meanings.",
          "اطلب ملفًا غير موجود ولاحظ 404 غير موجود. ثم اطلب موردًا غير مصرّح به ولاحظ 403 محظور. وتأكد من أنك تستطيع التمييز بين الرموز ومعانيها.",
        ),
        expected: l("A missing file returns 404; an unauthorized resource returns 403, each matching its meaning.", "يعود الملف المفقود بـ 404؛ ويعود المورد غير المصرّح به بـ 403، وكل منهما يطابق معناه."),
      },
      {
        title: l("Apply hardening and write a note", "تطبيق التقوية وكتابة ملاحظة"),
        command: "Final configuration note",
        explanation: l(
          "With directory listing disabled, traversal rejected, and only the public folder served, write a short note summarizing the hardening applied and the risk each control addresses.",
          "مع تعطيل قائمة الدلائل، ورفض العبور، وتقديم المجلد العام فقط، اكتب ملاحظة قصيرة تلخص التقوية المطبقة والخطر الذي تتناوله كل ضابط.",
        ),
        expected: l("A note listing the hardening steps (disable listing, reject traversal, serve only the public folder) and the risk each addresses.", "ملاحظة تسرد خطوات التقوية (تعطيل القائمة، ورفض العبور، وتقديم المجلد العام فقط) والخطر الذي تتناوله كل منها."),
      },
    ],
    troubleshooting: [
      {
        problem: l("A requested file returns 404 even though you think it exists", "يعود ملف مطلوب بـ 404 رغم أنك تعتقد أنه موجود"),
        fix: l("Confirm the path is correct relative to the document root and that the file is inside it. A path mismatch returns 404.", "تأكد من أن المسار صحيح نسبيًا إلى مستوى الجذر وأن الملف داخله. فالتبان في المسار يعود بـ 404."),
      },
      {
        problem: l("Directory listing still appears after you disabled it", "لا تزال قائمة الدلائل تظهر بعد تعطيلها"),
        fix: l("Confirm the setting was applied to the correct directory and saved. Some servers require an explicit index file to be present to prevent listing.", "تأكد من تطبيق الإعداد على الدليل الصحيح وحفظه. وتتطلب بعض الخوادم وجود ملف فهرس صريح لمنع القائمة."),
      },
      {
        problem: l("A traversal attempt seems to succeed", "يبدو أن محاولة العبور تنجح"),
        fix: l("Stop and do not read any real files. Re-apply the configuration to reject paths that escape the document root, and confirm the server is the one you are authorized to test.", "توقف ولا تقرأ أي ملفات حقيقية. وأعد تطبيق الإعداد لرفض المسارات التي تخرج عن مستوى الجذر، وتأكد من أن الخادم هو الذي لديك إذن لاختباره."),
      },
      {
        problem: l("You are asked to test a real or third-party server", "يُطلب منك اختبار خادم حقيقي أو خارجي"),
        fix: l("Stop. Do not configure, scan or test any server you do not own or are authorized to administer. Confirm authorization first.", "توقف. لا تُهيئ أو تمسح أو تختبر أي خادم لا تملكه أو لديك إذن بإدارته. وتحقق من التصريح أولًا."),
      },
    ],
    deliverables: [
      l("Document root identified and a URL mapped to a served file", "تحديد مستوى الجذر وربط عنوان URL بملف مقدم"),
      l("Static content served and request/response observed", "تقديم المحتوى الثابت ومراقبة الطلب/الاستجابة"),
      l("Directory listing disabled (403 confirmed)", "تعطيل قائمة الدلائل (التأكد من 403"),
      l("Directory traversal attempt rejected", "رفض محاولة العبور بين الدلائل"),
      l("Status codes verified for missing and forbidden resources", "التحقق من رموز الحالة للموارد المفقودة والمحظورة"),
      l("A hardening configuration note", "ملاحظة إعداد للتقوية"),
    ],
    rubric: [
      { criterion: l("Correct document root and URL mapping", "مستوى الجذر وربط URL صحيحان"), weight: 20 },
      { criterion: l("Correct static content serving and response", "تقديم المحتوى الثابت والاستجابة الصحيحان"), weight: 20 },
      { criterion: l("Directory listing correctly disabled", "تعطيل قائمة الدلائل بشكل صحيح"), weight: 20 },
      { criterion: l("Traversal rejected and status codes verified", "رفض العبور والتحقق من رموز الحالة"), weight: 20 },
      { criterion: l("Clear hardening note and safety awareness", "ملاحظة تقوية واضحة ووعي بالسلامة"), weight: 20 },
    ],
  },
  majorLabId: "lab-06",
  quiz: [
    {
      q: l("Which part of https://example.com/docs/page.html is the path?", "أي جزء من https://example.com/docs/page.html هو المسار؟"),
      options: [
        l("https", "https"),
        l("example.com", "example.com"),
        l("/docs/page.html", "/docs/page.html"),
        l(":443", ":443"),
      ],
      answer: 2,
      why: l("The path locates the resource and follows the host: /docs/page.html.", "يحدد المسار المورد ويتبع المضيف: /docs/page.html."),
    },
    {
      q: l("Which HTTP status code means 'Not Found'?", "أي رمز حالة HTTP يعني 'غير موجود'؟"),
      options: [
        l("200", "200"),
        l("301", "301"),
        l("404", "404"),
        l("500", "500"),
      ],
      answer: 2,
      why: l("404 indicates the requested resource does not exist on the server.", "يشير 404 إلى أن المورد المطلوب غير موجود على الخادم."),
    },
    {
      q: l("What is a document root?", "ما مستوى الجذر للملفات؟"),
      options: [
        l("The server's whole filesystem", "نظام الملفات الكامل للخادم"),
        l("The directory a web server serves files from", "الدليف الذي يقدم الخادم الملفات منه"),
        l("The database of the site", "قاعدة بيانات الموقع"),
        l("The user's home directory", "دليل المستخدم"),
      ],
      answer: 1,
      why: l("URLs are served relative to the document root; files outside it are not served by default.", "تُقدم عناوين URL نسبيًا إلى مستوى الجذر؛ ولا تُقدم الملفات خارجوه افتراضيًا."),
    },
    {
      q: l("Which is an example of static content?", "أي مثال للمحتوى الثابت؟"),
      options: [
        l("A page generated from a database at request time", "صفحة مُولّدة من قاعدة بيانات وقت الطلب"),
        l("An HTML file served as-is", "ملف HTML يُقدم كما هو"),
        l("A server-side script that queries a database", "برمجية على جانب الخادم تسأل قاعدة بيانات"),
        l("A dynamic form handler", "معالج نماذج ديناميكي"),
      ],
      answer: 1,
      why: l("Static content is fixed files served as-is, such as an HTML file or an image.", "المحتوى الثابت ملفات ثابتة تُقدم كما هي، مثل ملف HTML أو صورة."),
    },
    {
      q: l("Directory traversal attempts to:", "تحاول هجمات العبور بين الدلائل:"),
      options: [
        l("List the files in the document root", "قائمة الملفات في مستوى الجذر"),
        l("Read files outside the document root using path sequences like ../../", "قراءة ملفات خارج مستوى الجذر باستخدام تسلسلات مسار مثل ../../"),
        l("Encrypt the web server", "تشفير خادم الويب"),
        l("Assign IP addresses", "تعيين عناوين IP"),
      ],
      answer: 1,
      why: l("Traversal abuses path input to escape the document root and read other files.", "يسيء العبور بمدخل المسار للخروج من مستوى الجذر وقراءة ملفات أخرى."),
    },
    {
      q: l("What should you do if directory listing is enabled on a private directory?", "ماذا تفعل إذا كانت قائمة الدلائل مفعّلة على دليل خاص؟"),
      options: [
        l("Leave it enabled for convenience", "اتركها مفعّلًا للراحة"),
        l("Disable directory listing", "تعطيل قائمة الدلائل"),
        l("Rename the directory to hide it", "إعادة تسمية الدليل لإخفائه"),
        l("Move the server to a different port", "نقل الخادم إلى منفذ مختلف"),
      ],
      answer: 1,
      why: l("Directory listing exposes every file in the directory; disabling it removes the exposure.", "تكشف قائمة الدلائل كل ملف في الدليل؛ ويُزيل تعطيلها هذا الانكشاف."),
    },
    {
      q: l("Which HTTP method is used to read a resource?", "أي أسلوب HTTP يُستخدم لقراءة مورد؟"),
      options: [
        l("POST", "POST"),
        l("DELETE", "DELETE"),
        l("GET", "GET"),
        l("PUT", "PUT"),
      ],
      answer: 2,
      why: l("GET requests a representation of a resource and should be safe and idempotent.", "يطلب GET تمثيلًا لمورد وينبغي أن يكون آمنًا وقابلًا للتكرار."),
    },
    {
      q: l("A server returns 500. What does that mean?", "يعود الخادم بـ 500. ماذا يعني ذلك؟"),
      options: [
        l("Client error", "خطأ من العميل"),
        l("Redirection", "إعادة توجيه"),
        l("Server-side error", "خطأ من جانب الخادم"),
        l("Success", "نجاح"),
      ],
      answer: 2,
      why: l("5xx codes indicate the server could not fulfil the request, such as a 500 internal server error.", "تشير رموز 5xx إلى أن الخادم لم يتمكن من تلبية الطلب، مثل 500 خطأ داخلي في الخادم."),
    },
    {
      q: l("Which is a key web-server hardening step?", "أي خطوة رئيسة لتقوية خادم الويب؟"),
      options: [
        l("Enable directory listing everywhere", "تفعيل قائمة الدلائل في كل مكان"),
        l("Disable directory listing and hide version details", "تعطيل قائمة الدلائل وإخفاء تفاصيل الإصدار"),
        l("Serve only over HTTP", "الخدمة عبر HTTP فقط"),
        l("Disable HTTPS", "تعطيل HTTPS"),
      ],
      answer: 1,
      why: l("Disabling listing and hiding version details reduce information exposure and attack surface.", "يُقلل تعطيل القائمة وإخفاء تفاصيل الإصدار من إفشاء المعلومات وسطح الهجوم."),
    },
    {
      q: l("What reveals the server name and version, aiding attackers?", "ما الذي يكشف اسم الخادم وإصداره، مما يساعد المهاجمين؟"),
      options: [
        l("A default server page and detailed error messages", "صفحة خادم افتراضية ورسائل خطأ تفصيلية"),
        l("HTTPS encryption", "تشفير HTTPS"),
        l("A 404 page", "صفحة 404"),
        l("A short document root", "مستوى جذر قصير"),
      ],
      answer: 0,
      why: l("Default pages and detailed errors expose version details an attacker can use to target known vulnerabilities.", "تكشف الصفحات الافتراضية ورسائل الخطأ التفصيلية تفاصيل الإصدار التي يمكن للمهاجم استخدامها لاستهداف ثغرات معروفة."),
    },
    {
      q: l("Which protocol should a sensitive site use?", "ما البروتوكول الذي يجب أن يستخدمه موقع حساس؟"),
      options: [
        l("HTTP on port 80", "HTTP على المنفذ 80"),
        l("HTTPS on port 443", "HTTPS على المنفذ 443"),
        l("FTP", "FTP"),
        l("Telnet", "Telnet"),
      ],
      answer: 1,
      why: l("HTTPS encrypts and authenticates the exchange, protecting sensitive data in transit.", "يشفر HTTPS التبادل ويصادقه، فيحمي البيانات الحساسة أثناء النقل."),
    },
  ],
  trueFalse: [
    {
      q: l("The URL path is served relative to the document root.", "يُقدم مسار URL نسبيًا إلى مستوى الجذر."),
      answer: true,
      why: l("A URL path like /docs/page.html maps to a file under the server's document root.", "يربط مسار URL مثل /docs/page.html بملف تحت مستوى جذر الخادم."),
    },
    {
      q: l("A 200 response always means the requested content is correct.", "استجابة 200 تعني دائمًا أن المحتوى المطلوب صحيح."),
      answer: false,
      why: l("200 means the server handled the request; the content itself may still be wrong or leak information.", "يعني 200 أن الخادم تعامل مع الطلب؛ وقد يظل المحتوى نفسه خاطئًا أو يتسرب معلومات."),
    },
    {
      q: l("Directory listing enabled on a private directory exposes its files.", "تكشف قائمة الدلائل المفعّلة على دليل خاص ملفاته."),
      answer: true,
      why: l("An enabled listing shows every file in the directory, which should not be public.", "تُظهر القائمة المفعّلة كل ملف في الدليل، وهو ما لا ينبغي أن يكون عامًا."),
    },
    {
      q: l("A properly configured server serves files outside the document root if asked.", "يقدم الخادم المضبوط بشكل صحيح ملفات خارج مستوى الجذر إذا طُلب منه."),
      answer: false,
      why: l("A correct server serves only from the document root and rejects paths that escape it.", "يقدم الخادم الصحيح فقط من مستوى الجذر ويرفض المسارات التي تخرج عنه."),
    },
    {
      q: l("Static content is served as-is without a server-side program.", "يُقدم المحتوى الثابت كما هو دون برنامج على جانب الخادم."),
      answer: true,
      why: l("Static files such as HTML and images are served directly by the web server.", "تُقدم الملفات الثابتة مثل HTML والصور مباشرة من خادم الويب."),
    },
    {
      q: l("Testing web configurations on servers you do not own is acceptable for practice.", "يُعد اختبار إعدادات الويب على خوادم لا تملكها مقبولًا للتدريب."),
      answer: false,
      why: l("Web configuration testing must be authorized; never test or scan servers you do not control.", "يجب أن يكون اختبار إعدادات الويب مصرحًا به؛ ولا تختبر أو تمسح أبدًا خوادم لا تتحكم بها."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each HTTP status code group by meaning", "صنّف كل مجموعة من رموز حالة HTTP حسب المعنى"),
      categories: [
        l("Success (2xx)", "نجاح (2xx)"),
        l("Client error (4xx)", "خطأ من العميل (4xx)"),
        l("Server error (5xx)", "خطأ من الخادم (5xx)"),
      ],
      items: [
        { text: l("200 OK", "200 نجح"), answer: 0 },
        { text: l("404 Not Found", "404 غير موجود"), answer: 1 },
        { text: l("500 Internal Server Error", "500 خطأ داخلي في الخادم"), answer: 2 },
        { text: l("403 Forbidden", "403 محظور"), answer: 1 },
      ],
      why: l("2xx is success, 4xx is client error, 5xx is server error.", "2xx نجاح، و4xx خطأ من العميل، و5xx خطأ من الخادم."),
    },
    {
      prompt: l("Classify each HTTP method by whether it changes state", "صنّف كل أسلوب HTTP حسب ما إذا كان تغير الحالة"),
      categories: [
        l("Reads (safe)", "يقرأ (آمن)"),
        l("Changes state", "يغيّر الحالة"),
      ],
      items: [
        { text: l("GET", "GET"), answer: 0 },
        { text: l("POST", "POST"), answer: 1 },
        { text: l("PUT", "PUT"), answer: 1 },
        { text: l("DELETE", "DELETE"), answer: 1 },
      ],
      why: l("GET reads a resource and is safe; POST, PUT and DELETE change state and need care.", "يقرأ GET موردًا وهو آمن؛ وPOST وPUT وDELETE تغيّر الحالة وتحتاج حرصًا."),
    },
    {
      prompt: l("Classify each content type as static or dynamic", "صنّف كل نوع محتوى كثابت أو ديناميكي"),
      categories: [
        l("Static", "ثابت"),
        l("Dynamic", "ديناميكي"),
      ],
      items: [
        { text: l("An HTML file served as-is", "ملف HTML يُقدم كما هو"), answer: 0 },
        { text: l("A page generated from a database", "صفحة مُولّدة من قاعدة بيانات"), answer: 1 },
        { text: l("An image file", "ملف صورة"), answer: 0 },
        { text: l("A server-side script result", "ناتج برمجية على جانب الخادم"), answer: 1 },
      ],
      why: l("Static content is fixed files; dynamic content is generated at request time.", "المحتوى الثابت ملفات ثابتة؛ والمحتوى الديناميكي يُولّد وقت الطلب."),
    },
    {
      prompt: l("Classify each security issue by whether it exposes files or information", "صنّف كل مسألة أمنية حسب ما إذا كانت تكشف ملفات أو معلومات"),
      categories: [
        l("Exposes files", "تكشف ملفات"),
        l("Exposes information", "تكشف معلومات"),
      ],
      items: [
        { text: l("Directory listing", "قائمة الدلائل"), answer: 0 },
        { text: l("Directory traversal", "العبور بين الدلائل"), answer: 0 },
        { text: l("Exposed server version", "إصدار الخادم المكشوف"), answer: 1 },
        { text: l("Detailed error messages", "رسائل خطأ تفصيلية"), answer: 1 },
      ],
      why: l("Listing and traversal expose files; version and error details expose information.", "تكشف القائمة والعبور ملفات؛ وتفاصيل الإصدار والخطأ تكشف معلومات."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A visitor requests a file that does not exist on the web server, then requests a file that is not authorized to them.",
        "يطلب زائر ملفًا غير موجود على خادم الويب، ثم يطلب ملفًا غير مصرّح له به.",
      ),
      question: l("Which status codes are returned?", "ما رموز الحالة التي تُرد؟"),
      options: [
        l("404 then 403", "404 ثم 403"),
        l("200 then 200", "200 ثم 200"),
        l("403 then 404", "403 ثم 404"),
        l("500 then 500", "500 ثم 500"),
      ],
      answer: 0,
      why: l("A missing resource returns 404; an unauthorized resource returns 403.", "يعود المورد المفقود بـ 404؛ ويعود المورد غير المصرّح به بـ 403."),
    },
    {
      scenario: l(
        "You discover that a web server has directory listing enabled on a directory containing a backup of the database.",
        "تكتشف أن خادم ويب مفعّل عليه قائمة الدلائل على دليل يحتوي على نسخة احتياطية من قاعدة البيانات.",
      ),
      question: l("What is the risk and the fix?", "ما الخطر وما الحل؟"),
      options: [
        l("Risk: slower loads; fix: add more bandwidth", "الخطر: تحميل أبطأ؛ والحل: إضافة مزيد من النطاق الترددي"),
        l("Risk: the backup file can be downloaded; fix: disable directory listing and remove the backup from the web root", "الخطر: يمكن تنزيل ملف النسخة؛ والحل: تعطيل قائمة الدلائل وإزالة النسخة من جذر الويب"),
        l("Risk: none; fix: none", "الخطر: لا شيء؛ والحل: لا شيء"),
        l("Risk: the server crashes; fix: reboot", "الخطر: يتعطل الخادم؛ والحل: إعادة التشغيل"),
      ],
      answer: 1,
      why: l("An enabled listing exposes the backup for download; disabling listing and moving the file out of the web root closes it.", "تكشف القائمة المفعّلة النسخة للتنزيل؛ ويُغلق ذلك بتعطيل القائمة ونقل الملف خارج جذر الويب."),
    },
    {
      scenario: l(
        "An attacker sends a request for /../../etc/passwd to a dynamic page on your web server.",
        "يُرسل مهاجم طلبًا لـ /../../etc/passwd إلى صفحة ديناميكية على خادم الويب الخاص بك.",
      ),
      question: l("What should the server do?", "ماذا يجب أن يفعل الخادم؟"),
      options: [
        l("Serve the file", "يقدم الملف"),
        l("Reject the path and return 400/403", "يرفض المسار ويعود بـ 400/403"),
        l("Redirect to the homepage", "يعيد التوجيه إلى الصفحة الرئيسية"),
        l("Return a 200 with an error page", "يعود بـ 200 مع صفحة خطأ"),
      ],
      answer: 1,
      why: l("A correctly configured server rejects paths that escape the document root, preventing traversal.", "يرفض الخادم المضبوط بشكل صحيح المسارات التي تخرج عن مستوى الجذر، فيمنع العبور."),
    },
  ],
  practicalChecks: [
    {
      task: l("Map the URL path /docs/page.html to its file under a document root of /var/www/html", "اربط مسار URL /docs/page.html بملف تحت مستوى جذر /var/www/html"),
      expected: l("The file is /var/www/html/docs/page.html, served relative to the document root.", "الملف هو /var/www/html/docs/page.html، يُقدم نسبيًا إلى مستوى الجذر."),
      hint: l("Append the URL path to the document root.", "أضف مسار URL إلى مستوى الجذر."),
    },
    {
      task: l("State two hardening steps for a web server and the risk each addresses", "اذكر خطوتين لتقوية خادم ويب والخطر الذي تتناوله كل منهما"),
      expected: l(
        "Disable directory listing (prevents file enumeration) and hide version details (prevents version-based attacks), plus keep software updated and serve over HTTPS.",
        "تعطيل قائمة الدلائل (يمنع حصر الملفات) وإخفاء تفاصيل الإصدار (يمنع الهجمات القائمة على الإصدار)، مع تحديث البرمجيات والخدمة عبر HTTPS.",
      ),
    },
  ],
  homework: {
    title: l("Homework 10 — Web infrastructure review", "الواجب 10 — مراجعة بنية الويب"),
    tasks: [
      l("Break down a URL into its scheme, host, port and path, and explain how the browser uses each part.", "حلّل عنوان URL إلى أسلوبه ومضيفه ومنفذه ومساره، واشرح كيف يستخدم المتصفح كل جزء."),
      l("Create a table of HTTP methods (GET, POST, PUT, DELETE) and whether each is safe to change state.", "أنشئ جدولًا لأساليب HTTP (GET وPOST وPUT وDELETE) وما إذا كان كل منها آمنًا لتغيير الحالة."),
      l("Explain the document root in your own words and why misconfiguring it can expose files.", "اشرح مستوى الجذر للملفات بكلماتك ولماذا يمكن لسوء ضبطه أن يكشف الملفات."),
      l("List four web-server hardening steps and the risk each prevents.", "اذكر أربع خطوات لتقوية خادم الويب والخطر الذي يمنع كل منها."),
    ],
    deliverable: l(
      "A URL breakdown, a method/safety table, a document-root explanation, and a four-step hardening list with risks.",
      "تحليل لعنوان URL، وجدول الأسلوب/السلامة، وشرح لمستوى الجذر، وقائمة تقوية من أربع خطوات مع المخاطر.",
    ),
    criteria: [
      l("Accurate URL breakdown and browser usage", "تحليل دقيق لعنوان URL واستخدام المتصفح"),
      l("Correct method/safety table", "جدول صحيح للأسلوب/السلامة"),
      l("Clear explanation of the document root and misconfiguration risk", "شرح واضح لمستوى الجذر وخطر سوء الضبط"),
      l("Four correct hardening steps with risks", "أربع خطوات تقوية صحيحة مع مخاطرها"),
    ],
    challenge: l(
      "Optional challenge: describe how you would detect that a web server is leaking version information through its default page or error messages, and how you would fix it.",
      "مهمة تحدٍ اختيارية: صف كيف ستكتشف أن خادم ويب يتسرب منه معلومات الإصدار عبر صفحته الافتراضية أو رسائل الخطأ، وكيف إصلاحه.",
    ),
  },
  refs: [
    { title: "HTTP overview", org: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
    { title: "HTTP status code reference", org: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status" },
    { title: "HTTP methods reference", org: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods" },
    { title: "Apache HTTP Server documentation", org: "Apache", url: "https://httpd.apache.org/docs/" },
    { title: "nginx documentation", org: "nginx", url: "https://nginx.org/en/docs/" },
  ],
  terms: [
    { term: l("URL", "محدد موارد موحد"), def: l("A string that locates a resource on the web.", "سلسلة تحدد موردًا على الويب.") },
    { term: l("Scheme", "الأسلوب"), def: l("The URL protocol prefix, http or https.", "بادئة بروتوكول URL، http أو https.") },
    { term: l("Host", "المضيف"), def: l("The domain name or IP of the server.", "اسم النطاق أو IP للخادم.") },
    { term: l("Path", "المسار"), def: l("The part of the URL that locates the resource.", "جزء عنوان URL الذي يحدد المورد.") },
    { term: l("HTTP request", "طلب HTTP"), def: l("The client message: method, path and headers.", "رسالة العميل: الأسلوب والمسار والترويسات.") },
    { term: l("HTTP response", "استجابة HTTP"), def: l("The server reply: status line, headers and body.", "رد الخادم: سطر الحالة والترويسات والجسم.") },
    { term: l("Method", "الأسلوب"), def: l("The HTTP action: GET, POST, PUT, DELETE, OPTIONS.", "الإجراء في HTTP: GET أو POST أو PUT أو DELETE أو OPTIONS.") },
    { term: l("Status code", "رمز الحالة"), def: l("A number in the response indicating the result.", "رقم في الاستجابة يشير إلى النتيجة.") },
    { term: l("Header", "الترويسـة"), def: l("Metadata in a request or response, such as Content-Type.", "بيانات وصفية في طلب أو استجابة، مثل Content-Type.") },
    { term: l("Web server", "خادم الويب"), def: l("A program that accepts HTTP requests and returns responses.", "برنامج يقبل طلبات HTTP ويعود بالاستجابات.") },
    { term: l("Document root", "مستوى الجذر للملفات"), def: l("The directory a web server serves files from.", "الدليف الذي يقدم الخادم الملفات منه.") },
    { term: l("Static content", "المحتوى الثابت"), def: l("Fixed files served as-is, such as HTML and images.", "ملفات ثابتة تُقدم كما هي، مثل HTML والصور.") },
    { term: l("Dynamic content", "المحتوى الديناميكي"), def: l("Content generated on the server at request time.", "محتوى يُولّد على الخادم وقت الطلب.") },
    { term: l("Directory listing", "قائمة الدلائل"), def: l("A server feature showing a directory's files.", "ميزة في الخادم تُظهر ملفات دليل ما.") },
    { term: l("Directory traversal", "العبور بين الدلائل"), def: l("An attack that uses path sequences to read files outside the intended directory.", "هجوم يستخدم تسلسلات مسار لقراءة ملفات خارج الدليل المقصود.") },
    { term: l("Information disclosure", "إفشاء المعلومات"), def: l("Revealing data or details that should not be exposed.", "كشف بيانات أو تفاصيل لا ينبغي إفشاؤها.") },
    { term: l("Hardening", "التقوية"), def: l("Reducing a system's attack surface through configuration and updates.", "تقليل سطح هجوم النظام عبر الإعداد والتحديث.") },
    { term: l("GET", "GET"), def: l("The method that reads a resource and is safe and idempotent.", "الأسلوب الذي يقرأ موردًا وهو آمن وقابل للتكرار.") },
    { term: l("POST", "POST"), def: l("The method that submits data to a server, changing state.", "الأسلوب الذي يسلّم بيانات إلى خادم، فيغيّر الحالة.") },
    { term: l("404", "404"), def: l("Status code meaning the resource was not found.", "رمز حالة يعني أن المورد غير موجود.") },
    { term: l("403", "403"), def: l("Status code meaning access is forbidden.", "رمز حالة يعني أن الوصول محظور."), },
    { term: l("500", "500"), def: l("Status code meaning a server-side error occurred.", "رمز حالة يعني حدوث خطأ من جانب الخادم.") },
    { term: l("Default page", "الصفحة الافتراضية"), def: l("A page served when no specific file is requested, often revealing the server.", "صفحة تُقدم عند عدم طلب ملف محدد، كثيرًا ما تكشف الخادم.") },
    { term: l("Index file", "ملف الفهرس"), def: l("A file like index.html served for a directory request.", "ملف مثل index.html يُقدم لطلب دليل ما.") },
    { term: l("TLS", "أمن طبقات النقل"), def: l("The protocol that encrypts HTTPS connections.", "البروتوكول الذي يشفر اتصالات HTTPS.") },
  ],
};
