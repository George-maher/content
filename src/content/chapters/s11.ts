import { l, type Session } from "../types";

export const s11: Session = {
  id: 11,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Web Application Security: SQL Injection, XSS, CSRF and the OWASP Top 10",
    "أمن تطبيقات الويب: حقن SQL وXSS وCSRF وقائمة OWASP Top 10",
  ),
  summary: l(
    "How web applications fail and how to defend them: where untrusted input enters, the OWASP Top 10 risk categories, SQL injection, cross-site scripting, CSRF and broken access control, and the secure-development habits that prevent them.",
    "كيف تفشل تطبيقات الويب وكيف نحميها: أماكن دخول المدخلات غير الموثوقة، وفئات مخاطر OWASP Top 10، وحقن SQL، والنصوص عبر المواقع (XSS)، وتزوير الطلبات عبر المواقع (CSRF)، والتحكم المكسور بالوصول، وعادات التطوير الآمن التي تمنعها.",
  ),
  overview: l(
    "Web applications are the most directly exposed part of most organizations, and they are the primary target of many attacks. This session explains how web apps fail at a conceptual level and how to defend them. You will learn where untrusted input enters a web application, the OWASP Top 10 risk categories, and the three attacks you must understand: SQL injection, cross-site scripting (XSS) and cross-site request forgery (CSRF), plus broken access control. You will see how each attack works and the specific defence that stops it, then apply secure-development principles across the software development life cycle. The session closes with a lab where you use a simulator to see how a string-built SQL query becomes exploitable and how parameterisation prevents it.",
    "تطبيقات الويب هي الجزء الأكثر انكشافًا مباشرةً في معظم المنظمات، وهي الهدف الرئيسي لكثير من الهجمات. وتشرح هذه الجلسة كيف تفشل تطبيقات الويب على المستوى المفاهيمي وكيف نحميها. ستتعلم أماكن دخول المدخلات غير الموثوقة إلى تطبيق ويب، وفئات مخاطر OWASP Top 10، والهجمات الثلاث التي يجب أن تفهمها: حقن SQL، والنصوص عبر المواقع (XSS)، وتزوير الطلبات عبر المواقع (CSRF)، إضافةً إلى التحكم المكسور بالوصول. وسترى كيف يعمل كل هجوم وأي دفاع يمنعته، ثم تطبق مبادئ التطوير الآمن عبر دورة حياة تطوير البرمجيات. وتنتهي الجلسة بمختبر تستخدم فيه محاكيًا لرؤية كيف يصبح استعلام SQL المبني بالنصوص قابلًا للاستغلال وكيف يمنعه التعميل.",
  ),
  whyItMatters: l(
    "Almost every breach that starts with a web application begins with a failure to separate untrusted data from code or to check permissions on the server. Understanding these attacks lets you recognize them, reason about why a defence works, and write or review code that is safe by design. Web application security is also the most common entry point into offensive security, and the principles here — validate input, encode output, parameterise queries, least privilege — apply to every application you will ever build or defend.",
    "يبدأ كل اختراق يبدأ بتطبيق ويب تقريبًا بفشل في فصل البيانات غير الموثوقة عن الشيفرة أو في فحص الصلاحيات على الخادم. ويُمكّنك فهم هذه الهجمات من التمييز بينها، والتفكير في سبب عمل الدفاع، وكتابة أو مراجعة شيفرة آمنة بالتصميم. ويُعد أمن تطبيقات الويب أيضًا المدخل الأكثر شيوعًا إلى الأمن الهجومي، ومبادئه — التحقق من المدخلات وترميز المخرجات وتعميل الاستعلامات وأقل صلاحية — تنطبق على كل تطبيق ستبنيه أو تدافع عنه.",
  ),
  prerequisites: [
    l(
      "Session 10, Web Fundamentals: HTTP request/response, the document root and status codes.",
      "الجلسة 10، أساسيات الويب: طلب/استجابة HTTP ومستوى الجذر ورموز الحالة.",
    ),
    l(
      "Basic comfort with how a web form and a database interact.",
      "الراحة الأساسية مع كيفية تفاعل نموذج ويب مع قاعدة بيانات.",
    ),
    l(
      "A legal and ethical mindset: test web applications only on systems you own or are authorized to test.",
      "عقلية قانونية وأخلاقية: اختبار تطبيقات الويب فقط على الأنظمة التي تملكها أو لديك إذن باختبارها.",
    ),
  ],
  objectives: [
    l(
      "Describe how a web request flows and where untrusted input enters an application.",
      "وصف مسار طلب الويب وأين تدخل المدخلات غير الموثوقة إلى التطبيق.",
    ),
    l(
      "Explain the OWASP Top 10 risk categories at a conceptual level.",
      "شرح فئات مخاطر OWASP Top 10 على المستوى المفاهيمي.",
    ),
    l(
      "Differentiate SQL injection, XSS, CSRF and broken access control and state the defence for each.",
      "التمييز بين حقن SQL وXSS وCSRF والتحكم المكسور بالوصول وذكر الدفاع لكل منها.",
    ),
    l(
      "Apply secure-development principles: validate input, encode output, parameterise queries, least privilege.",
      "تطبيق مبادئ التطوير الآمن: التحقق من المدخلات وترميز المخرجات وتعميل الاستعلامات وأقل صلاحية.",
    ),
    l(
      "Explain session and authentication weaknesses on the web and how to secure cookies.",
      "شرح ضعف الجلسات والمصادقة على الويب وكيفية حماية ملفات الارتباط.",
    ),
    l(
      "Apply secure deployment and headers to reduce web-application exposure.",
      "تطبيق النشر الآمن والترويسات لتقليل انكشاف تطبيق الويب.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Untrusted input and the OWASP Top 10", "المدخلات غير الموثوقة وOWASP Top 10"), minutes: 13 },
    { label: l("Injection and SQL injection", "الحقن وحقن SQL"), minutes: 15 },
    { label: l("Cross-site scripting (XSS)", "النصوص عبر المواقع (XSS)"), minutes: 13 },
    { label: l("CSRF and broken access control (IDOR)", "CSRF والتحكم المكسور بالوصول (IDOR)"), minutes: 12 },
    { label: l("Secure development across the SDLC", "التطوير الآمن عبر دورة حياة البرمجيات"), minutes: 12 },
    { label: l("Secure deployment, headers and operations", "النشر الآمن والترويسات والتشغيل"), minutes: 10 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 10 },
  ],
  introduction: l(
    "Web applications accept data from browsers — form fields, URL parameters, cookies, headers and uploaded files — and use it to query databases, build pages and make decisions. Because the browser is under the user's (or attacker's) control, everything that arrives from it is untrusted input. This session explains how web applications fail when they mishandle that input, and how to defend them. You will learn the OWASP Top 10, the three core attacks — SQL injection, XSS and CSRF — and broken access control, and the secure-development principles that prevent them. The session closes with a lab where you see a string-built SQL query become exploitable and how parameterisation stops it.",
    "تقبل تطبيقات الويب بيانات من المتصفحات — حقول النماذج ومعاملات العناوين وملفات الارتباط والترويسات والملفات المرفوعة — وتستخدمها للاستعلام من قواعد البيانات وبناء الصفحات واتخاذ القرارات. ولأن المتصفح تحت سيطرة المستخدم (أو المهاجم) فكل ما يصل منه مدخل غير موثوق. وتشرح هذه الجلسة كيف تفشل تطبيقات الويب عند سوء تعاملها مع هذا المدخل وكيف نحميها. ستتعلم OWASP Top 10 والهجمات الثلاث الأساسية — حقن SQL وXSS وCSRF — والتحكم المكسور بالوصول، ومبادئ التطوير الآمن التي تمنعها. وتنتهي الجلسة بمختبر ترى فيه كيف يصبح استعلام SQL المبني بالنصوص قابلًا للاستغلال وكيف يمنعه التعميل.",
  ),
  sections: [
    {
      h: l("1. Untrusted input and the OWASP Top 10", "1. المدخلات غير الموثوقة وOWASP Top 10"),
      p: [
        l(
          "A web application receives data from browsers — form fields, URL parameters, cookies, headers and uploaded files — and uses it to query databases, build pages and make decisions. The browser is under the user's (or attacker's) control, so everything that arrives from it is untrusted input. Most web vulnerabilities share one root cause: the application mixes untrusted data with code or commands without separating them, or trusts the client to enforce rules (hidden fields, JavaScript checks) that only the server can enforce.",
          "يتلقى تطبيق الويب بيانات من المتصفحات — حقول النماذج ومعاملات العناوين وملفات الارتباط والترويسات والملفات المرفوعة — ويستخدمها للاستعلام من قواعد البيانات وبناء الصفحات واتخاذ القرارات. والمتصفح تحت سيطرة المستخدم (أو المهاجم)، لذا فكل ما يصل منه مدخل غير موثوق. ومعظم ثغرات الويب لها سبب جذري واحد: يخلط التطبيق البيانات غير الموثوقة بالشيفرة أو الأوامر دون فصلها، أو يثق بالعميل في تطبيق قواعد (حقول مخفية وفحوص جافاسكربت) لا يستطيع تطبيقها إلا الخادم.",
        ),
        l(
          "The OWASP Top 10 is the community-maintained list of the most critical web risks. The 2021 edition includes: A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures, A10 Server-Side Request Forgery. Learning these categories gives you a shared vocabulary for reasoning about web risk.",
          "قائمة OWASP Top 10 هي القائمة التي يصونها المجتمع لأخطر مخاطر الويب. وتضم نسخة 2021: A01 التحكم المكسور بالوصول، وA02 إخفاقات التشفير، وA03 الحقن، وA04 التصميم غير الآمن، وA05 سوء إعداد الأمان، وA06 المكوّنات الضعيفة والمتقادمة، وA07 إخفاقات التعريف والمصادقة، وA08 إخفاقات سلامة البرمجيات والبيانات، وA09 إخفاقات التسجيل والمراقبة، وA10 تزوير الطلبات من جهة الخادم. ويمنحك تعلم هذه الفئات مفردات مشتركة للتفكير في مخاطر الويب.",
        ),
      ],
    },
    {
      h: l("2. Injection and SQL injection", "2. الحقن وحقن SQL"),
      p: [
        l(
          "Injection happens when untrusted data is sent to an interpreter (database, operating system, LDAP) as part of a command, and the interpreter cannot tell data from instructions. In SQL injection the application builds a query by pasting user input into the SQL text. A crafted input containing a quote can end the intended string and add new logic — for example making a login condition always true, reading other tables, or modifying data. Impact ranges from authentication bypass to complete database disclosure.",
          "يحدث الحقن عندما تُرسل بيانات غير موثوقة إلى مفسِّر (قاعدة بيانات أو نظام تشغيل أو LDAP) كجزء من أمر فلا يستطيع المفسِّر التمييز بين البيانات والتعليمات. وفي حقن SQL يبني التطبيق الاستعلام بلصق مدخلات المستخدم في نص SQL. ومدخل مصمَم يحوي علامة اقتباس قد ينهي النص المقصود ويضيف منطقًا جديدًا — كجعل شرط الدخول صحيحًا دائمًا أو قراءة جداول أخرى أو تعديل البيانات. ويتراوح الأثر بين تجاوز المصادقة والكشف الكامل لقاعدة البيانات.",
        ),
        l(
          "The fix is structural, not cosmetic: use parameterised queries (prepared statements) so the database receives the command and the values separately; use ORMs correctly; validate input with allow-lists (type, length, format); run the application's database account with minimal rights (no DROP, no access to unrelated tables); hide detailed error messages from users. Filtering 'bad words' is unreliable. A WAF is an extra layer, never the primary defence.",
          "الحل بنيوي لا شكلي: استخدم الاستعلامات المُعامَلة (العبارات المُعدّة) ليتلقى قاعدة البيانات الأمر والقيم منفصلين؛ واستخدم أدوات ORM بشكل صحيح؛ وتحقق من المدخلات بقوائم السماح (النوع والطول والصيغة)؛ وشغّل حساب قاعدة بيانات التطبيق بأقل صلاحيات (دون DROP ودون وصول لجداول غير ذات صلة)؛ وأخفِ رسائل الأخطاء التفصيلية عن المستخدمين. أما ترشيح «الكلمات السيئة» فغير موثوق. والـ WAF طبقة إضافية لا دفاعًا أساسيًا.",
        ),
      ],
      callout: {
        kind: "warn",
        text: l("Test for injection only on applications you own or are explicitly authorised in writing to test, ideally in a practice environment. Unauthorised testing is illegal in most countries.", "اختبر الحقن فقط على تطبيقات تملكها أو مفوَّض كتابيًا باختبارها وفي بيئة تدريب ما أمكن. فالاختبار غير المصرح به مخالف للقانون في معظم الدول."),
      },
    },
    {
      h: l("3. Cross-site scripting (XSS)", "3. النصوص عبر المواقع (XSS)"),
      p: [
        l(
          "Cross-site scripting (XSS) occurs when an application includes untrusted data in a page without proper encoding, so the victim's browser runs attacker-supplied script in the context of the trusted site. It can steal session cookies, perform actions as the user or alter the page. Types: stored (saved in the database, e.g. a malicious comment), reflected (in a crafted link) and DOM-based (client-side code). Defences: context-aware output encoding, templating frameworks that escape by default, a Content-Security-Policy header, and the HttpOnly and Secure flags on session cookies.",
          "يحدث XSS عندما يُدرج التطبيق بيانات غير موثوقة في صفحة دون ترميز مناسب فيشغّل متصفح الضحية سكربتًا من المهاجم في سياق الموقع الموثوق. وقد يسرق ملفات ارتباط الجلسة أو ينفذ إجراءات باسم المستخدم أو يغيّر الصفحة. وأنواعه: مخزَّن (محفوظ في قاعدة البيانات كتعليق خبيث) وعاكس (في رابط مصمَّم) ومبني على DOM (شيفرة جهة العميل). والدفاعات: ترميز المخرجات بحسب السياق، وأطر قوالب تهرب افتراضيًا، وترويسة Content-Security-Policy، وخاصيتا HttpOnly وSecure لملفات ارتباط الجلسة.",
        ),
        l(
          "The key idea is that output encoding treats data as data, not as code. Whatever the user types must be rendered as text, never executed as script. Frameworks that escape by default remove the most common XSS risk, but you must still avoid injecting raw HTML or script and must set a Content-Security-Policy to limit what scripts can load as a defence in depth.",
          "الفكرة الأساسية أن ترميز المخرجات يعامل البيانات كبيانات لا كشيفرة. فما يكتبه المستخدم يجب أن يُصوَّر كنص ولا يُشغّل أبدًا كسكريبت. وتزيل الأطر التي تهرب افتراضيًا أكثر مخاطر XSS شيوعًا، لكن يجب أيضًا تجنب حقن HTML أو السكربت الصريح ويجب ضبط Content-Security-Policy للحد مما يمكن للسكريبتات تحميله كدفاع في طبقات.",
        ),
      ],
    },
    {
      h: l("4. CSRF and broken access control (IDOR)", "4. CSRF والتحكم المكسور بالوصول (IDOR)"),
      p: [
        l(
          "Cross-Site Request Forgery (CSRF) tricks a logged-in user's browser into sending an unwanted request (change e-mail, transfer money) to a site that trusts the browser's cookies; defend with anti-CSRF tokens and SameSite cookies. Broken access control — the number-one OWASP risk — means the server fails to check permissions: changing an id in a URL (/invoice/1042 → /invoice/1043) reveals someone else's data (IDOR), or an ordinary user can call an admin function. Defence: check authorisation on the server for every request, deny by default, and never rely on hidden links or client-side checks.",
          "يخدع CSRF متصفح مستخدم مسجل الدخول لإرسال طلب غير مرغوب (تغيير البريد، تحويل مال) إلى موقع يثق بملفات ارتباط المتصفح؛ ويُدافَع عنه برموز مكافحة CSRF وملفات SameSite. أما التحكم المكسور بالوصول — الخطر الأول في OWASP — فيعني أن الخادم لا يفحص الصلاحيات: فتغيير رقم في العنوان (‎/invoice/1042 ← /invoice/1043) يكشف بيانات شخص آخر (IDOR)، أو يستطيع مستخدم عادي استدعاء وظيفة مدير. الدفاع: افحص التفويض على الخادم لكل طلب، وامنع افتراضيًا، ولا تعتمد على روابط مخفية أو فحوص جهة العميل.",
        ),
        l(
          "Both CSRF and IDOR share a lesson: never trust the client to enforce authorisation. The server must verify, on every request, who the caller is and whether that caller is allowed to perform the action on that resource. Hidden form fields, disabled buttons and JavaScript checks are conveniences, not security controls, because an attacker can send a request directly without a browser.",
          "يشترك CSRF وIDOR في درس واحد: لا تثق بالعميل أبدًا لفرض التفويض. ويجب على الخادم أن يتحقق، في كل طلب، من هو المتصل وما إذا كان مسموحًا له بتنفيذ الإجراء على ذلك المورد. فحقول النماذج المخفية والأزرار المعطّلة وفحوص الجافاسكربت وسائل راحة لا ضوابط أمن، لأن المهاجم يمكنه إرسال طلب مباشرة دون متصفح.",
        ),
      ],
    },
    {
      h: l("5. Session and authentication weaknesses", "5. ضعف الجلسات والمصادقة"),
      p: [
        l(
          "Web sessions are a common target. Weak session management — predictable session IDs, no expiry, session IDs in URLs, cookies without Secure/HttpOnly/SameSite — lets an attacker hijack a session. Authentication failures include weak or reused passwords, no MFA, and accounts that are never reviewed. Defend sessions with server-side session state, strong random session IDs, secure cookie flags, MFA on sensitive accounts and regular access reviews (linking back to identity and access management).",
          "الجلسات على الويب هدف شائع. ويسمح ضعف إدارة الجلسات — معرّفات جلسات متوقعة، وغياب انتهاء الصلاحية، ومعرّفات الجلسات في العناوين، وملفات ارتباط بلا Secure/HttpOnly/SameSite — للمهاجم باختطاف الجلسة. وتشمل إخفاقات المصادقة كلمات المرور الضعيفة أو المعيدة وغياب MFA والحسابات التي لا تُراجع أبدًا. واحمِ الجلسات بحالة جلسة على جانب الخادم ومعرّفات جلسات عشوائية قوية وخصائص ملفات ارتباط آمنة وMFA على الحسابات الحساسة ومراجعات وصول دورية (مرتبطة بإدارة الهوية والوصول).",
        ),
        l(
          "Cookie flags are simple and powerful: Secure limits the cookie to HTTPS, HttpOnly prevents client-side scripts from reading it (limiting XSS damage), and SameSite restricts which sites may send the cookie (limiting CSRF). Setting all three correctly is a small configuration change with a large defensive payoff.",
          "خصائص ملفات الارتباط بسيطة وقوية: فSecure يقصر الملف على HTTPS، وHttpOnly يمنع سكربتات جهة العميل من قراءته (محددة من ضرر XSS)، وSameSite يقيد المواقع التي يجوز لها إرسال الملف (محددة من CSRF). وضبط الثلاثة بشكل صحيح تغيير صغير في الإعداد بفائدة دفاعية كبيرة.",
        ),
      ],
    },
    {
      h: l("6. Secure development across the SDLC", "6. التطوير الآمن عبر دورة حياة البرمجيات"),
      p: [
        l("Security belongs in every phase of the software development life cycle (SDLC), not only at the end:", "ينتمي الأمن إلى كل مرحلة من دورة حياة تطوير البرمجيات (SDLC) لا إلى نهايتها فقط:"),
      ],
      bullets: [
        l("Design: threat-model features ('what could go wrong?'), plan authentication and authorisation up front.", "التصميم: نمذجة التهديدات للميزات («ما الذي قد يسوء؟») وتخطيط المصادقة والتفويض مبكرًا."),
        l("Code: validate input, encode output, use parameterised queries, never hard-code secrets, handle errors safely.", "الشيفرة: التحقق من المدخلات وترميز المخرجات واستخدام استعلامات مُعامَلة وعدم تضمين الأسرار وإدارة الأخطاء بأمان."),
        l("Dependencies: track libraries (software bill of materials) and patch known-vulnerable components quickly.", "الاعتماديات: تتبع المكتبات (قائمة مكونات البرمجية) وترقيع المكونات المعروفة الضعف بسرعة."),
        l("Test: code review, static and dynamic scanning, penetration tests before release.", "الاختبار: مراجعة الشيفرة والفحص الساكن والديناميكي واختبارات الاختراق قبل الإصدار."),
        l("Deploy: HTTPS only (HSTS), secure headers, minimal server exposure, separate environments, secrets in a vault.", "النشر: HTTPS فقط (HSTS) وترويسات آمنة وتعريض أدنى للخادم وبيئات منفصلة وأسرار في خزنة."),
        l("Operate: log security events, monitor, have an incident plan and a way to patch quickly.", "التشغيل: تسجيل أحداث الأمن ومراقبتها وخطة حوادث وطريقة للترقيع السريع."),
      ],
    },
    {
      h: l("7. Secure deployment, headers and operations", "7. النشر الآمن والترويسات والتشغيل"),
      p: [
        l(
          "Deployment choices strongly affect security. Serve only over HTTPS with HSTS (a header that tells browsers to use HTTPS and remembers it), set security headers (Content-Security-Policy, X-Content-Type-Options, X-Frame-Options), keep the server and framework updated, run the application with a least-privilege account, and never expose the document root or admin interfaces publicly. Separate development, test and production environments so a weakness in one does not leak into another.",
          "تؤثر خيارات النشر كثيرًا في الأمن. فاخدم فقط عبر HTTPS مع HSTS (ترويسة تخبر المتصفحات باستخدام HTTPS وتتذكر ذلك)، وضبط ترويسات الأمان (Content-Security-Policy وX-Content-Type-Options وX-Frame-Options)، والإبقاء على الخادم والإطار محدّثين، وتشغيل التطبيق بحساب بأقل صلاحية، وعدم كشف مستوى الجذر أو واجهات الإدارة للعامة أبدًا. وافصل بيئات التطوير والاختبار والإنتاج حتى لا يتسرب ضعف في واحدة إلى أخرى.",
        ),
        l(
          "Operations complete the picture: log authentication and authorisation events, monitor for anomalies, keep a tested patch process, and have an incident-response plan. A web app that is secure in code but misconfigured in deployment, or well-configured but unmonitored, is still vulnerable. Security is a property of the whole system, not just the application code.",
          "ويكمل التشغيل الصورة: سجّل أحداث المصادقة والتفويض وراقب الشذوذ وأبقِ عملية ترقيع مختبرة وخطةً للاستجابة للحوادث. فتطبيق ويب آمن في الشيفرة لكن غير مضبوط في النشر، أو مضبوط جيدًا لكن غير مراقب، لا يزال ضعيفًا. والأمن خاصية للنظام كله لا للشيفرة وحدها.",
        ),
      ],
    },
    {
      h: l("8. Bringing it together: the secure request", "8. جمع الأفكار: الطلب الآمن"),
      p: [
        l(
          "Every defended request follows the same pattern: authenticate and authorise on the server, validate the input, keep data separate from commands (parameterised queries), encode on the way out, and log what happened. Attacks succeed when one of these steps is missing or trusts the client. By applying all of them consistently, most web-application attacks become impossible rather than merely hard.",
          "يتبع كل طلب محروس الشكل نفسه: المصادقة والتفويض على الخادم، والتحقق من المدخلات، وإبقاء البيانات منفصلة عن الأوامر (الاستعلامات المُعامَلة)، والترميز عند الإخراج، وتسجيل ما حدث. وتنجح الهجمات عندما تكون إحدى هذه الخطوات مفقودة أو تثق بالعميل. وبتطبيقها جميعًا بانتظام تصبح معظم هجمات تطبيقات الويب مستحيلة لا مجرد صعبة.",
        ),
        l(
          "As you practise, remember the boundary: test only on applications and systems you own or are explicitly authorized to test. Understanding how attacks work is essential, but exercising them against real systems without permission is illegal and unethical. Use the simulator and legal practice environments to build the skill safely.",
          "عند التدرّب تذكّر الحد: اختبر فقط على التطبيقات والأنظمة التي تملكها أو لديك إذن صريح باختبارها. ففهم كيفية عمل الهجمات أساسي، لكن ممارستها على أنظمة حقيقية دون إذن مخالف للقانون وغير أخلاقي. واستخدم المحاكٍ وبيئات التدريب القانونية لبناء المهارة بأمان.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "A login form builds its SQL by joining the typed username and password into one string. An attacker enters `' OR '1'='1` as the password; the quote ends the intended string and the condition becomes true for every row, letting the attacker log in without valid credentials. A parameterised query binds the input as a value, so the quote is just data and cannot change the query logic.",
      "يبني نموذج الدخول استعلام SQL بضم اسم المستخدم وكلمة المرور المكتوبين في نص واحد. ويدخل المهاجم `' OR '1'='1` ككلمة مرور؛ فتنهي علامة الاقتباس النص المقصود ويصبح الشرط صحيحًا لكل صف، مما يتيح للمهاجم الدخول دون بيانات صحيحة. ويربط الاستعلام المُعامَل المدخل كقيمة فتكون علامة الاقتباس مجرد بيانات ولا يمكنها تغيير منطق الاستعلام.",
    ),
    l(
      "A comment system saves user input and displays it on every visitor's page. An attacker submits a script as a comment; because the app does not encode it, every visitor's browser runs the script in the site's context — stored XSS. Encoding the comment as text before display, and setting a Content-Security-Policy, prevents this.",
      "يخزّن نظام التعليقات مدخلات المستخدم وعرضها على صفحة كل زائر. ويرسل المهاجم سكربتًا كتعليق؛ ولأن التطبيق لا يرممّه يتشغّل متصفح كل زائر السكربت في سياق الموقع — XSS مخزَّن. ويرميز التعليق كنص قبل العرض، مع ضبط Content-Security-Policy، يمنع ذلك.",
    ),
    l(
      "A money-transfer page trusts the browser's session cookie without checking that the request came from the real form. An attacker embeds an image tag that forces the victim's browser to send the transfer request — CSRF. An anti-CSRF token proves the request originated from the genuine form and blocks it.",
      "يثق صفحة تحويل المال بملف ارتباط الجلسة في المتصفح دون التحقق من أن الطلب جاء من النموذج الحقيقي. ويُضمّن المهاجم وسم صورة يفرض على متصفح الضحية إرسال طلب التحويل — CSRF. ويثبت رمز مكافحة CSRF أن الطلب صدر من النموذج الحقيقي ويمنعه.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A retail site lets users search products by name. The search field is pasted directly into a SQL query. An attacker enters a string that rewrites the query to dump the entire customer table — a classic injection that exposed millions of records. Parameterising the query would have made the input inert.",
      "يتيح موقع تجزئة للمستخدمين البحث عن المنتجات بالاسم. ويُلصق حقل البحث مباشرة في استعلام SQL. ويدخل المهاجم سلسلة تعيد كتابة الاستعلام لاستخراج جدول العملاء كاملًا — حقن كلاسيكي كشف ملايين السجلات. وكان تعميل الاستعلام سيجعل المدخل غير فعال.",
    ),
    l(
      "A social platform displays user posts without encoding. An attacker posts a script that steals session cookies from anyone who views it, then uses those cookies to act as the victim. Output encoding and HttpOnly cookies would have limited the damage.",
      "يعرض منصة اجتماعية منشورات المستخدمين دون ترميز. وينشر المهاجم سكربتًا يسرق ملفات ارتباط الجلسة من كل من يشاهدها، ثم يستخدم تلك الملفات للتصرف بصفة الضحية. وكان ترميز المخرجات وملفات HttpOnly سيحد من الضرر.",
    ),
    l(
      "A bank's transfer page had no anti-CSRF token. An attacker crafted a page that, when a logged-in customer visited it, silently submitted a transfer from their account. Adding tokens and SameSite cookies closed the gap.",
      "لم تحمل صفحة التحويل في بنك رمز مكافحة CSRF. وصاغ مهاجم صفحة تُقدّم، عند زيارتها من عميل مسجل الدخول، طلب تحويل صامت من حسابه. وأضاف الرموز وملفات SameSite سد الفجوة.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("Secure request handling — a control at every step", "معالجة آمنة للطلب – ضابط عند كل خطوة"),
    caption: l("Never trust the browser: authenticate, authorise and validate on the server, separate data from commands, and encode on the way out.", "لا تثق بالمتصفح أبدًا: صادق وفوّض وتحقق على الخادم، وافصل البيانات عن الأوامر، ورمّز عند الإخراج."),
    nodes: [
      { label: l("Browser (untrusted)", "المتصفح (غير موثوق)"), desc: l("Forms, cookies, URLs, headers", "نماذج وملفات ارتباط وعناوين وترويسات") },
      { label: l("HTTPS + WAF", "HTTPS + WAF"), desc: l("Encrypted, filtered", "مشفّر ومُرشَّح") },
      { label: l("Authenticate & authorise", "المصادقة والتفويض"), desc: l("Every request, server side", "كل طلب وعلى جهة الخادم") },
      { label: l("Validate input", "التحقق من المدخلات"), desc: l("Allow-list type, length, format", "قوائم سماح للنوع والطول والصيغة") },
      { label: l("Parameterised query", "استعلام مُعامَل"), desc: l("Data never becomes code", "البيانات لا تصبح شيفرة") },
      { label: l("Encode output", "ترميز المخرجات"), desc: l("Safe HTML in the response", "HTML آمن في الاستجابة") },
    ],
  },
  instructorDemo: l(
    "Demonstrate SQL injection with the companion sqli simulator. Show 'Normal login' producing a string-built query, then run the 'Comment-out attack' and 'Always-true attack' and explain, point by point, how the quote changes the query logic. Then show the safe parameterised query where the same input is bound as a plain value, and explain why quotes no longer matter. Connect each to the defence: parameterisation, allow-list validation, least-privilege DB account and generic errors. Run this only in the simulator — never against a real application.",
    "عرض حقن SQL بمحاكي sqli المرافق. واعرض «Normal login» الذي يُنتج استعلامًا مبنيًا بالنص، ثم شغّل «Comment-out attack» و«Always-true attack» واشرح خطوة بخطوة كيف تغيّر علامة الاقتباس منطق الاستعلام. ثم أظهر الاستعلام الآمن المُعامَل حيث يُربط المدخل نفسه كقيمة عادية، واشرح سبب عدم أهمية علامات الاقتباس. واربط كلًا بالدفاع: التعميل والتحقق بقوائم السماح وحساب قاعدة بيانات بأقل صلاحية ورسائل أخطاء عامة. ونفّذ هذا في المحاكٍ فقط — لا ضد تطبيق حقيقي.",
  ),
  exercises: [
    {
      title: l("Match each attack to its defence", "مطابقة كل هجوم بدفاعه"),
      instructions: l(
        "For SQL injection, XSS, CSRF and IDOR, state the primary defence in one sentence each and explain why the defence targets the root cause, not just the symptom.",
        "لكل من حقن SQL وXSS وCSRF وIDOR، اذكر الدفاع الأساسي في جملة واحدة واشرح سبب استهداف الدفاع للسبب الجذري لا مجرد العَرَض.",
      ),
      expected: l(
        "SQL injection → parameterised queries (data cannot become code); XSS → output encoding + CSP; CSRF → tokens + SameSite; IDOR → server-side authorisation on every request.",
        "حقن SQL → استعلامات مُعامَلة (البيانات لا تصبح شيفرة)؛ XSS → ترميز المخرجات + CSP؛ CSRF → رموز + SameSite؛ IDOR → تفويض على الخادم لكل طلب.",
      ),
    },
    {
      title: l("Design a secure login flow", "تصميم مسار دخول آمن"),
      instructions: l(
        "List the controls a secure login form should apply: from HTTPS and input validation to parameterised queries, cookie flags, MFA and error handling. Justify each briefly.",
        "اذكر الضوابط التي يجب أن يطبقها نموذج دخول آمن: من HTTPS والتحقق من المدخلات إلى الاستعلامات المُعامَلة وخصائص ملفات الارتباط وMFA ومعالجة الأخطاء. وبرر كلًا باختصار.",
      ),
      expected: l(
        "HTTPS + HSTS, allow-list input validation, parameterised queries, Secure/HttpOnly/SameSite cookies, MFA, generic error messages, rate limiting and logging of attempts.",
        "HTTPS مع HSTS، والتحقق من المدخلات بقوائم السماح، والاستعلامات المُعامَلة، وملفات ارتباط Secure/HttpOnly/SameSite، وMFA، ورسائل أخطاء عامة، وتحديد المعدل، وتسجيل المحاولات.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can describe how a web request flows and where untrusted input enters, explain the OWASP Top 10 categories, differentiate SQL injection, XSS, CSRF and broken access control with the defence for each, apply secure-development principles across the SDLC, explain session and authentication weaknesses, and apply secure deployment and headers. You can also use a simulator to see how a string-built query is exploitable and how parameterisation prevents it.",
    "بعد هذه الجلسة يمكنك وصف مسار طلب الويب وأين تدخل المدخلات غير الموثوقة، وشرح فئات OWASP Top 10، والتمييز بين حقن SQL وXSS وCSRF والتحكم المكسور بالوصول مع الدفاع لكل منها، وتطبيق مبادئ التطوير الآمن عبر دورة حياة البرمجيات، وشرح ضعف الجلسات والمصادقة، وتطبيق النشر الآمن والترويسات. ويمكنك أيضًا استخدام محاكي لرؤية كيف يكون الاستعلام المبني بالنص قابلًا للاستغلال وكيف يمنعه التعميل.",
  ),
  commonMistakes: [
    l("Trusting client-side validation as a security control: attackers send requests directly to the server, bypassing the browser entirely.", "الثقة بالتحقق من جهة العميل كضابط أمن: فالمهاجمون يرسلون الطلبات مباشرة إلى الخادم متجاوزين المتصفح كله."),
    l("Relying on a WAF as the primary defence: a WAF is an extra layer and can be bypassed; fix the code with parameterisation and validation.", "الاعتماد على WAF كدفاع أساسي: فـ WAF طبقة إضافية يمكن تجاوزها؛ وأصلح الشيفرة بالتعميل والتحقق."),
    l("Filtering 'bad words' to prevent injection: this is unreliable and bypassable; use parameterised queries instead.", "ترشيح «الكلمات السيئة» لمنع الحقن: فهذا غير موثوق ويمكن تجاوزه؛ واستخدم الاستعلامات المُعامَلة بدلًا من ذلك."),
    l("Forgetting to set cookie flags: without Secure, HttpOnly and SameSite, session hijacking and CSRF are far easier.", "نسيان ضبط خصائص ملفات الارتباط: فدون Secure وHttpOnly وSameSite يصبح اختطاف الجلسة وCSRF أسهل بكثير."),
    l("Checking authorisation only at the UI: authorisation must be enforced on the server for every request and resource.", "فحص التفويض في واجهة المستخدم فقط: فالتفويض يجب أن يُفرض على الخادم لكل طلب ومورد."),
  ],
  bestPractices: [
    l("Separate data from code with parameterised queries; never build SQL by concatenating user input.", "افصل البيانات عن الشيفرة بالاستعلامات المُعامَلة؛ ولا تبن SQL أبدًا بلصق مدخلات المستخدم."),
    l("Validate input with allow-lists (type, length, format) and encode output in the correct context.", "تحقق من المدخلات بقوائم السماح (النوع والطول والصيغة) ورمّز المخرجات في السياق الصحيح."),
    l("Enforce authorisation on the server for every request and every resource; deny by default.", "افرض التفويض على الخادم لكل طلب ولكل مورد؛ وامنع افتراضيًا."),
    l("Set Secure, HttpOnly and SameSite on session cookies and use a Content-Security-Policy.", "اضبط Secure وHttpOnly وSameSite على ملفات ارتباط الجلسة واستخدم Content-Security-Policy."),
    l("Serve over HTTPS with HSTS, keep dependencies patched, and log security events.", "اخدم عبر HTTPS مع HSTS، وأبقِ الاعتماديات محدّثة، وسجّل أحداث الأمن."),
  ],
  keyTakeaways: [
    l("All web input from the browser is untrusted; most web vulnerabilities come from mixing untrusted data with code or trusting the client.", "كل مدخل ويب من المتصفح غير موثوق؛ ومعظم ثغرات الويب تأتي من خلط البيانات غير الموثوقة بالشيفرة أو الثقة بالعميل."),
    l("The OWASP Top 10 organizes the most critical web risks; broken access control and injection are among the most common.", "ينظّم OWASP Top 10 أخطر مخاطر الويب؛ والتحكم المكسور بالوصول والحقن من بين الأكثر شيوعًا."),
    l("SQL injection is prevented by parameterised queries; XSS by output encoding and CSP; CSRF by tokens and SameSite; IDOR by server-side authorisation.", "يُمنع حقن SQL بالاستعلامات المُعامَلة؛ وXSS بترميز المخرجات وCSP؛ وCSRF بالرموز وSameSite؛ وIDOR بالتفويض على الخادم."),
    l("Security belongs in every SDLC phase: design, code, dependencies, test, deploy and operate.", "ينتمي الأمن إلى كل مرحلة من دورة حياة البرمجيات: التصميم والشيفرة والاعتماديات والاختبار والنشر والتشغيل."),
    l("Secure deployment — HTTPS, HSTS, security headers, least-privilege accounts — completes what secure code starts.", "يكمل النشر الآمن — HTTPS وHSTS وترويسات الأمان وحسابات بأقل صلاحية — ما تبدأ به الشيفرة الآمنة."),
  ],
  lab: {
    title: l("Lab 7 — Web Application Security: SQL Injection", "المختبر 7 — أمن تطبيقات الويب: حقن SQL"),
    scenario: l(
      "A login form builds its SQL query by joining the typed username and password into one text string. Use the simulator (display only; nothing is run against a real database) to compare this vulnerable, string-built query with a safe, parameterised query, and explain why the difference matters.",
      "يبني نموذج الدخول استعلام SQL الخاص به بضم اسم المستخدم وكلمة المرور المكتوبين في نص واحد. استخدم المحاكي (عرض فقط ولا يُنفَّذ شيء على قاعدة بيانات حقيقية) لمقارنة هذا الاستعلام الضعيف المبني بالنص باستعلام آمن مُعامَل، واشرح سبب أهمية الفرق.",
    ),
    safety: l(
      "The simulator only displays text; nothing is executed against a database or any real system. Do not try injection strings against real websites — even 'just to see' — without written permission. Use deliberately vulnerable practice labs such as OWASP Juice Shop or WebGoat only on systems you own or are authorized to use.",
      "المحاكي يعرض نصوصًا فقط؛ ولا يُنفَّذ شيء على قاعدة بيانات أو أي نظام حقيقي. ولا تجرّب سلاسل الحقن على مواقع حقيقية — حتى «للتجربة» — دون إذن كتابي. واستخدم مختبرات تدريب ضعيفة عمدًا مثل OWASP Juice Shop أو WebGoat فقط على الأنظمة التي تملكها أو لديك إذن باستخدامها.",
    ),
    steps: [
      l("Compare a string-built query with a parameterised query", "مقارنة استعلام مبني بالنص باستعلام مُعامَل"),
      l("Identify how a quote changes the query logic", "تحديد كيف تغير علامة الاقتباس منطق الاستعلام"),
      l("Explain why parameterisation prevents injection", "شرح سبب منع التعميل للحقن"),
      l("List defences beyond parameterisation", "ذكر دفاعات أخرى إلى جانب التعميل"),
      l("Match XSS, CSRF and IDOR to their defences", "مطابقة XSS وCSRF وIDOR بدفاعاتها"),
      l("Write a short secure-coding checklist", "كتابة قائمة تحقق قصيرة للبرمجة الآمنة"),
    ],
    expected: l(
      "You can explain, in plain language, how data becomes code in a concatenated query, why parameterisation prevents it, and the primary defence for XSS (output encoding + CSP), CSRF (tokens + SameSite) and IDOR (server-side authorisation).",
      "تشرح بلغة بسيطة كيف تصبح البيانات شيفرة في استعلام مضموم ولماذا يمنعه التعميل والدفاع الرئيسي لكل من XSS (ترميز المخرجات + CSP) وCSRF (الرموز + SameSite) وIDOR (التفويض على الخادم).",
    ),
    tool: "sqli",
    objectives: [
      l("See how a string-built SQL query becomes exploitable", "رؤية كيف يصبح استعلام SQL المبني بالنص قابلًا للاستغلال"),
      l("Explain why parameterised queries prevent injection", "شرح سبب منع الاستعلامات المُعامَلة للحقن"),
      l("Identify the primary defence for XSS, CSRF and IDOR", "تحديد الدفاع الأساسي لكل من XSS وCSRF وIDOR"),
      l("List defences beyond parameterisation", "ذكر دفاعات أخرى إلى جانب التعميل"),
      l("Apply secure-coding habits to a login flow", "تطبيق عادات البرمجة الآمنة على مسار الدخول"),
    ],
    prerequisites: [
      l("Session 10: HTTP request/response and how a web form submits data", "الجلسة 10: طلب/استجابة HTTP وكيف يرسل نموذج الويب البيانات"),
      l("Basic comfort with the idea of a database query", "الراحة الأساسية مع فكرة استعلام قاعدة البيانات"),
    ],
    environment: l(
      "The companion sqli simulator in a browser (display only). No real database, server or application is involved. All queries shown are simulated text.",
      "محاكي sqli المرافق في متصفح (عرض فقط). لا توجد قاعدة بيانات أو خادم أو تطبيق حقيقي. وجميع الاستعلامات المعروضة نصوص محاكاة.",
    ),
    tools: [
      l("SQL injection simulator (companion browser tool, display only)", "محاكي حقن SQL (أداة متصفح مساندة، عرض فقط"),
      l("OWASP Top 10 reference (for the defence discussion)", "مرجع OWASP Top 10 (لنقاش الدفاعات)"),
    ],
    authorization: l(
      "Scope: use the simulator only, which displays simulated queries. Prohibited: testing injection against any real website, application or database without written authorization. Stop condition: if you are asked to test a real system, stop and confirm authorization first.",
      "النطاق: استخدم المحاكٍ فقط، الذي يُظهر استعلامات محاكاة. المحظور: اختبار الحقن ضد أي موقع أو تطبيق أو قاعدة بيانات حقيقية دون تصريح كتابي. شرط التوقف: إذا طُلب منك اختبار نظام حقيقي، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Compare the two queries", "مقارنة الاستعلامين"),
        command: "sqli simulator: 'Normal login'",
        explanation: l(
          "Run 'Normal login' and read both generated queries. Observe that the vulnerable query joins the typed username and password directly into the SQL text, while the safe query passes them as bound values.",
          "شغّل «Normal login» واقرأ الاستعلامين الناتجين. ولاحظ أن الاستعلام الضعيف يضم اسم المستخدم وكلمة المرور المكتوبين مباشرة في نص SQL، بينما يمرر الاستعلام الآمنهما كقيم مُعقَّدة.",
        ),
        expected: l("You can state that the vulnerable query builds SQL by concatenating input, while the safe query binds input as values.", "يمكنك القول إن الاستعلام الضعيف يبني SQL بلصق المدخل، بينما يربط الاستعلام الآمن المدخل كقيم."),
      },
      {
        title: l("Run the comment-out attack", "تنفيذ هجوم التعليق"),
        command: "sqli simulator: 'Comment-out attack'",
        explanation: l(
          "Run the 'Comment-out attack'. Identify which part of the original query is neutralised by the comment marker and how the attacker's input changes what the database executes.",
          "شغّل «Comment-out attack». وحدد أي جزء من الاستعلام الأصلي أبطله رمز التعليق وكيف يغيّر مدخل المهاجم ما تنفذه قاعدة البيانات.",
        ),
        expected: l("The comment marker ends the intended query and lets the attacker's added logic run, altering the database operation.", "ينهي رمز التعليق الاستعلام المقصود ويسمح بتشغيل المنطق الذي أضافه المهاجم، مما يغيّر عملية قاعدة البيانات."),
      },
      {
        title: l("Run the always-true attack", "تنفيذ هجوم «الصحة دائمًا"),
        command: "sqli simulator: 'Always-true attack'",
        explanation: l(
          "Run the 'Always-true attack'. Explain why the WHERE condition becomes true for every row, letting the attacker bypass authentication or read unintended data.",
          "شغّل «Always-true attack». واشرح لماذا يصبح شرط WHERE صحيحًا لكل صف، مما يتيح للمهاجم تجاوز المصادقة أو قراءة بيانات غير مقصودة.",
        ),
        expected: l("The crafted input makes the condition evaluate true for all rows, so the query returns or acts on data the attacker should not access.", "يجعل المدخل المصمم الشرط يصطف كصحيح لكل صف، فيعود الاستعلام ببيانات أو ينفذ عليها ما لا يحق للمهاجم الوصول إليه."),
      },
      {
        title: l("Observe the safe query", "مراقبة الاستعلام الآمن"),
        command: "sqli simulator: safe parameterised query",
        explanation: l(
          "In the safe query, observe that the same attacker input is bound as a plain value. Explain why quotes and special characters no longer matter — the database treats the input as data, not as part of the command.",
          "في الاستعلام الآمن لاحظ أن مدخل المهاجم نفسه يُربط كقيمة عادية. واشرح سبب عدم أهمية علامات الاقتباس والرموز الخاصة — فتعامل قاعدة البيانات مع المدخل كبيانات لا كجزء من الأمر.",
        ),
        expected: l("The input is passed as data alongside the command, so it cannot change the query structure or logic.", "يُمرَّر المدخل كبيانات مع الأمر، فلا يمكنه تغيير بنية أو منطق الاستعلام."),
      },
      {
        title: l("List defences beyond parameterisation", "ذكر دفاعات أخرى إلى جانب التعميل"),
        command: "Write three defences",
        explanation: l(
          "Write three defences besides parameterised queries: allow-list validation (type, length, format), a least-privilege database account (no DROP, no access to unrelated tables), and generic error messages that do not reveal query details.",
          "اكتب ثلاثة دفاعات إلى جانب الاستعلامات المُعامَلة: التحقق بقوائم السماح (النوع والطول والصيغة)، وحساب قاعدة بيانات بأقل صلاحية (دون DROP ودون وصول لجداول غير ذات صلة)، ورسائل أخطاء عامة لا تكشف تفاصيل الاستعلام.",
        ),
        expected: l("Allow-list validation, least-privilege DB account and generic error messages, each limiting the attack's impact or reach.", "التحقق بقوائم السماح وحساب قاعدة بيانات بأقل صلاحية ورسائل أخطاء عامة، وكل منها يحد من أثر الهجوم أو مداه."),
      },
      {
        title: l("Match attacks to defences", "مطابقة الهجمات بدفاعاتها"),
        command: "Table: XSS, CSRF, IDOR → defence",
        explanation: l(
          "Match each of XSS, CSRF and IDOR to its main defence in a small table: XSS → output encoding + CSP; CSRF → anti-CSRF tokens + SameSite cookies; IDOR → server-side authorisation on every request.",
          "اربط كلًّا من XSS وCSRF وIDOR بدفاعه الرئيسي في جدول صغير: XSS ← ترميز المخرجات + CSP؛ وCSRF ← رموز مكافحة CSRF + ملفات SameSite؛ وIDOR ← التفويض على الخادم لكل طلب.",
        ),
        expected: l("A table pairing each attack with its primary defence and a one-line justification.", "جدول يزاوج كل هجوم بدفاعه الأساسي مع تبرير من سطر واحد."),
      },
    ],
    troubleshooting: [
      {
        problem: l("The attack does not seem to change the query", "لا يبدو أن الهجوم يغيّر الاستعلام"),
        fix: l("Read both the original and the modified query carefully; the change is often subtle (a comment marker or a changed condition). Compare character by character.", "اقرأ الاستعلام الأصلي والمعدّل بعناية؛ فالتغيّر كثيرًا ما يكون خفيًّا (رمز تعليق أو شرط تغيّر). وقارن حرفًا بحرف."),
      },
      {
        problem: l("Confusing parameterisation with simple filtering", "الخلط بين التعميل والترشيح البسيط"),
        fix: l("Parameterisation is structural: the database receives the command and the values separately. Filtering bad words is unreliable and bypassable; parameterisation makes the input inert by design.", "التعميل بنيوي: فتلقى قاعدة البيانات الأمر والقيم منفصلين. والترشيح المعتمد على الكلمات السيئة غير موثوق ويمكن تجاوزه؛ بينما يجعل التعميل المدخل غير فعال بالتصميم."),
      },
      {
        problem: l("Unsure whether testing is authorized", "لست متأكدًا مما إذا كان الاختبار مصرحًا به"),
        fix: l("Stop. Test only in the simulator or on systems you own or are explicitly authorized to test. Unauthorized testing of real systems is illegal and unethical.", "توقف. فاختبر فقط في المحاكٍ أو على الأنظمة التي تملكها أو لديك إذن صريح باختبارها. فاختبار الأنظمة الحقيقية دون إذن مخالف للقانون وغير أخلاقي."),
      },
      {
        problem: l("Forgetting the other web attacks", "نسيان هجمات الويب الأخرى"),
        fix: l("Remember the full set: SQL injection, XSS, CSRF and IDOR each need a distinct server-side defence. Securing one does not secure the others.", "تذكّر المجموعة كاملة: فكل من حقن SQL وXSS وCSRF وIDOR يحتاج دفاعًا مميزًا على الخادم. وحماية واحد لا تحميك من الباقين."),
      },
    ],
    deliverables: [
      l("A comparison of the string-built and parameterised queries", "مقارنة بين الاستعلام المبني بالنص والاستعلام المُعامَل"),
      l("An explanation of how the comment-out and always-true attacks change query logic", "شرح لكيفية تغيير هجومي التعليق والصحة الدائمة لمنطق الاستعلام"),
      l("An explanation of why parameterisation prevents injection", "شرح لسبب منع التعميل للحقن"),
      l("A list of three defences beyond parameterisation", "قائمة بثلاثة دفاعات إلى جانب التعميل"),
      l("A table matching XSS, CSRF and IDOR to their defences", "جدول يزاوج XSS وCSRF وIDOR بدفاعاتها"),
      l("A short secure-coding checklist", "قائمة تحقق قصيرة للبرمجة الآمنة"),
    ],
    rubric: [
      { criterion: l("Correct comparison of vulnerable and safe queries", "المقارنة الصحيحة بين الاستعلامين الضعيف والآمن"), weight: 25 },
      { criterion: l("Correct explanation of how injection changes query logic", "الشرح الصحيح لكيفية تغيير الحقن لمنطق الاستعلام"), weight: 25 },
      { criterion: l("Correct explanation of why parameterisation prevents injection", "الشرح الصحيح لسبب منع التعميل للحقن"), weight: 20 },
      { criterion: l("Correct defences listed and matched to attacks", "الدفاعات الصحيحة المذكورة والمزاوَجة بالهجمات"), weight: 20 },
      { criterion: l("Clear checklist and safety awareness", "قائمة تحقق واضحة ووعي بالسلامة"), weight: 10 },
    ],
  },
  majorLabId: "lab-07",
  quiz: [
    {
      q: l("What is the best primary defence against SQL injection?", "ما أفضل دفاع أساسي ضد حقن SQL؟"),
      options: [
        l("Parameterised queries / prepared statements", "الاستعلامات المُعامَلة / العبارات المُعدّة"),
        l("Hiding the login page", "إخفاء صفحة الدخول"),
        l("Blocking the word 'select'", "حجب كلمة select"),
        l("Longer passwords", "كلمات مرور أطول"),
      ],
      answer: 0,
      why: l("Parameterisation keeps data and commands separate by design.", "التعميل يبقي البيانات والأوامر منفصلة بالتصميم."),
    },
    {
      q: l("In XSS, who ends up running the attacker's script?", "في XSS من يشغّل سكربت المهاجم في النهاية؟"),
      options: [
        l("The database", "قاعدة البيانات"),
        l("The victim's browser", "متصفح الضحية"),
        l("The firewall", "الجدار الناري"),
        l("The router", "الموجّه"),
      ],
      answer: 1,
      why: l("The browser trusts content from the site and runs the injected script in that site's context.", "يثق المتصفح بمحتوى الموقع فيشغّل السكربت المحقون في سياقه."),
    },
    {
      q: l("Changing /invoice/1042 to /invoice/1043 shows another customer's invoice. This is…", "تغيير /invoice/1042 إلى /invoice/1043 يعرض فاتورة عميل آخر. هذا…"),
      options: [
        l("CSRF", "CSRF"),
        l("Broken access control (IDOR)", "تحكم مكسور بالوصول (IDOR)"),
        l("A DDoS", "هجوم حجب خدمة"),
        l("Phishing", "تصيّد"),
      ],
      answer: 1,
      why: l("The server did not verify that the user owns that invoice.", "لم يتحقق الخادم من ملكية المستخدم لتلك الفاتورة."),
    },
    {
      q: l("Which control best defends against CSRF?", "أي ضابط يدافع أفضل ضد CSRF؟"),
      options: [
        l("Anti-CSRF tokens and SameSite cookies", "رموز مكافحة CSRF وملفات SameSite"),
        l("Image compression", "ضغط الصور"),
        l("A faster server", "خادم أسرع"),
        l("Removing HTTPS", "إزالة HTTPS"),
      ],
      answer: 0,
      why: l("Tokens prove the request originated from the genuine form.", "تثبت الرموز أن الطلب صدر من النموذج الحقيقي."),
    },
    {
      q: l("What does the HttpOnly cookie flag do?", "ماذا تفعل خاصية HttpOnly لملف الارتباط؟"),
      options: [
        l("Forces HTTP instead of HTTPS", "تفرض HTTP بدل HTTPS"),
        l("Prevents client-side scripts from reading the cookie", "تمنع سكربتات جهة العميل من قراءة الملف"),
        l("Deletes the cookie", "تحذف الملف"),
        l("Encrypts the cookie", "تشفّر الملف"),
      ],
      answer: 1,
      why: l("It limits the damage of XSS by protecting session cookies from script access.", "تحد من ضرر XSS بحماية ملفات الجلسة من وصول السكربتات."),
    },
    {
      q: l("Which statement about client-side validation is correct?", "أي عبارة عن التحقق في جهة العميل صحيحة؟"),
      options: [
        l("It is enough on its own", "كافٍ بمفرده"),
        l("It improves usability but the server must validate again", "يحسّن الاستخدام لكن يجب أن يتحقق الخادم مجددًا"),
        l("It replaces authentication", "يحل محل المصادقة"),
        l("It prevents all attacks", "يمنع كل الهجمات"),
      ],
      answer: 1,
      why: l("Attackers bypass the browser entirely and send crafted requests straight to the server.", "يتجاوز المهاجمون المتصفح كليًا ويرسلون طلبات مصمَّمة مباشرة إلى الخادم."),
    },
    {
      q: l("OWASP A06 'Vulnerable and Outdated Components' is best addressed by…", "تُعالج OWASP A06 «المكوّنات الضعيفة والمتقادمة» بأفضل شكل عبر…"),
      options: [
        l("Never updating libraries", "عدم تحديث المكتبات أبدًا"),
        l("Tracking dependencies and patching quickly", "تتبع الاعتماديات والترقيع السريع"),
        l("Using more libraries", "استخدام مكتبات أكثر"),
        l("Disabling logs", "تعطيل السجلات"),
      ],
      answer: 1,
      why: l("An inventory and a fast patch process remove known flaws.", "الحصر وعملية ترقيع سريعة يزيلان الثغرات المعروفة."),
    },
    {
      q: l("What is the main root cause shared by most web vulnerabilities?", "ما السبب الجذري الرئيس المشترك لمعظم ثغرات الويب؟"),
      options: [
        l("Mixing untrusted data with code or trusting the client", "خلط البيانات غير الموثوقة بالشيفرة أو الثقة بالعميل"),
        l("Using HTTPS", "استخدام HTTPS"),
        l("Having a firewall", "وجود جدار ناري"),
        l("Using a database", "استخدام قاعدة بيانات"),
      ],
      answer: 0,
      why: l("Most web attacks succeed when untrusted input is treated as code or client checks are trusted.", "تنجح معظم هجمات الويب عندما يُعامل المدخل غير الموثوق كشيفرة أو تُثق بفحوص العميل."),
    },
    {
      q: l("Which is the correct defence for stored XSS?", "ما الدفاع الصحيح لـ XSS المخزَّن؟"),
      options: [
        l("Output encoding and Content-Security-Policy", "ترميز المخرجات وContent-Security-Policy"),
        l("Renaming the database", "إعادة تسمية قاعدة البيانات"),
        l("Disabling cookies", "تعطيل ملفات الارتباط"),
        l("Using HTTP instead of HTTPS", "استخدام HTTP بدل HTTPS"),
      ],
      answer: 0,
      why: l("Encoding treats user data as text so it cannot run as script; CSP limits script loading.", "يرميز البيانات كسنص فلا يمكنها التشغيل كسكريبت؛ ويقيد CSP تحميل السكربتات."),
    },
    {
      q: l("Where should authorisation be enforced?", "أين يجب فرض التفويض؟"),
      options: [
        l("Only in the user interface", "في واجهة المستخدم فقط"),
        l("On the server, for every request and resource", "على الخادم، لكل طلب ومورد"),
        l("In the browser only", "في المتصفح فقط"),
        l("It does not matter", "لا يهم"),
      ],
      answer: 1,
      why: l("The server must verify permissions; the client cannot be trusted to enforce them.", "يجب أن يتحقق الخادم من الصلاحيات؛ ولا يمكن الثقة بالعميل لفرضها."),
    },
    {
      q: l("A WAF is best understood as…", "يُفهم WAF على أفضل وجه كـ…"),
      options: [
        l("The primary defence against all web attacks", "الدفاع الأساسي ضد كل هجمات الويب"),
        l("An extra layer that complements, but does not replace, secure code", "طبقة إضافية تُكمل ولا تحل محل الشيفرة الآمنة"),
        l("A replacement for parameterised queries", "بديل للاستعلامات المُعامَلة"),
        l("A type of firewall for the database", "نوع من الجدار الناري لقاعدة البيانات"),
      ],
      answer: 1,
      why: l("A WAF can be bypassed; fix the code with parameterisation and validation.", "يمكن تجاوز WAF؛ فأصلح الشيفرة بالتعميل والتحقق."),
    },
  ],
  trueFalse: [
    {
      q: l("All data arriving from a browser should be treated as untrusted input.", "يجب معالجة كل البيانات الواردة من المتصفح كمدخل غير موثوق."),
      answer: true,
      why: l("The browser is under the user's or attacker's control, so its data cannot be trusted.", "المتصفح تحت سيطرة المستخدم أو المهاجم، فلا يمكن الوثوق ببياناته."),
    },
    {
      q: l("Parameterised queries prevent SQL injection by filtering out quotes.", "تمنع الاستعلامات المُعامَلة حقن SQL بترشيح علامات الاقتباس."),
      answer: false,
      why: l("They prevent it structurally by binding input as data, not by filtering characters.", "تمنعها بنيويًا بربط المدخل كبيانات، لا بترشيح الرموز."),
    },
    {
      q: l("Client-side JavaScript validation is sufficient to prevent injection.", "التحقق بالجافاسكربت في جهة العميل كافٍ لمنع الحقن."),
      answer: false,
      why: l("Attackers send requests directly to the server, bypassing the browser and its checks.", "يرسل المهاجمون الطلبات مباشرة إلى الخادم متجاوزين المتصفح وفحوصه."),
    },
    {
      q: l("The HttpOnly flag prevents client-side scripts from reading a session cookie.", "تمنع خاصية HttpOnly سكربتات جهة العميل من قراءة ملف ارتباط الجلسة."),
      answer: true,
      why: l("It limits the damage of XSS by protecting the cookie from script access.", "تحد من ضرر XSS بحماية الملف من وصول السكربتات."),
    },
    {
      q: l("Broken access control is the number-one category in the OWASP Top 10.", "التحكم المكسور بالوصول هو الفئة الأولى في OWASP Top 10."),
      answer: true,
      why: l("A01 Broken Access Control ranks first in the 2021 OWASP Top 10.", "يحتل A01 التحكم المكسور بالوصول المرتبة الأولى في OWASP Top 10 نسخة 2021."),
    },
    {
      q: l("You may test injection on a real website 'just to see' if you find no harm.", "يُسمح باختبار الحقن على موقع حقيقي «للتجربة» إذا لم تجد ضررًا."),
      answer: false,
      why: l("Unauthorized testing is illegal in most countries; test only systems you own or are authorized to test.", "الاختبار غير المصرح به مخالف للقانون في معظم الدول؛ فاختبر فقط الأنظمة التي تملكها أو لديك إذن باختبارها."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each attack by its primary defence", "صنّف كل هجوم بحسب دفاعه الأساسي"),
      categories: [
        l("Parameterised queries", "الاستعلامات المُعامَلة"),
        l("Output encoding / CSP", "ترميز المخرجات / CSP"),
        l("Tokens / SameSite", "الرموز / SameSite"),
        l("Server-side authorisation", "التفويض على الخادم"),
      ],
      items: [
        { text: l("SQL injection", "حقن SQL"), answer: 0 },
        { text: l("Cross-site scripting (XSS)", "النصوص عبر المواقع (XSS)"), answer: 1 },
        { text: l("Cross-site request forgery (CSRF)", "تزوير الطلبات عبر المواقع (CSRF)"), answer: 2 },
        { text: l("IDOR (changing an id in a URL)", "IDOR (تغيير رقم في عنوان URL)"), answer: 3 },
      ],
      why: l("Each attack has a distinct server-side defence; securing one does not secure the others.", "كل هجوم دفاع مميز على الخادم؛ وحماية واحد لا تحميك من الباقين."),
    },
    {
      prompt: l("Classify each web input as trusted or untrusted", "صنّف كل مدخل ويب إلى موثوق أو غير موثوق"),
      categories: [
        l("Trusted", "موثوق"),
        l("Untrusted", "غير موثوق"),
      ],
      items: [
        { text: l("Data your own server generated internally", "بيانات أنشأها خادمك داخليًا"), answer: 0 },
        { text: l("A value typed into a form field", "قيمة كُتبت في حقل نموذج"), answer: 1 },
        { text: l("A cookie sent by the browser", "ملف ارتباط أرسله المتصفح"), answer: 1 },
        { text: l("A URL parameter chosen by the visitor", "معامل عنوان URL اختاره الزائر"), answer: 1 },
      ],
      why: l("Anything the client controls is untrusted; only server-generated internal data can be trusted.", "كل ما يسيطر عليه العميل غير موثوق؛ ولا يمكن الوثوق إلا بالبيانات الداخلية التي ينشئها الخادم."),
    },
    {
      prompt: l("Match each OWASP Top 10 item to its description", "زاوج كل عنصر من OWASP Top 10 بوصفه"),
      categories: [
        l("Broken access control", "التحكم المكسور بالوصول"),
        l("Injection", "الحقن"),
        l("Cryptographic failures", "إخفاقات التشفير"),
        l("Security misconfiguration", "سوء إعداد الأمان"),
      ],
      items: [
        { text: l("The server fails to check permissions on a request", "يفشل الخادم في فحص صلاحيات الطلب"), answer: 0 },
        { text: l("Untrusted data is sent to an interpreter as part of a command", "تُرسل بيانات غير موثوقة إلى مفسر كجزء من أمر"), answer: 1 },
        { text: l("Data is stored or transmitted without proper encryption", "تُخزّن البيانات أو تُرسَل دون تشفير مناسب"), answer: 2 },
        { text: l("The application is deployed with unsafe default settings", "يُنشر التطبيق بإعدادات افتراضية غير آمنة"), answer: 3 },
      ],
      why: l("These are four of the OWASP Top 10 categories; each describes a distinct class of weakness.", "هذه أربع من فئات OWASP Top 10؛ وكل منها يصف فئة مميزة من الضعف."),
    },
    {
      prompt: l("Classify each cookie flag by its purpose", "صنّف كل خاصية لملف الارتباط بحسب الغرض"),
      categories: [
        l("Limits transport", "يقيد النقل"),
        l("Limits script access", "يقيد وصول السكربتات"),
        l("Limits cross-site sending", "يقيد الإرسال عبر المواقع"),
      ],
      items: [
        { text: l("Secure", "Secure"), answer: 0 },
        { text: l("HttpOnly", "HttpOnly"), answer: 1 },
        { text: l("SameSite", "SameSite"), answer: 2 },
      ],
      why: l("Secure limits to HTTPS, HttpOnly blocks scripts, SameSite restricts cross-site cookie sending.", "يقيد Secure النقل إلى HTTPS، ويمنع HttpOnly السكربتات، ويقيد SameSite إرسال الملف عبر المواقع."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A search form builds its SQL query by concatenating the user's search term. An attacker enters a string that rewrites the query to dump a whole table.",
        "يبني نموذج بحث استعلام SQL بلصق مصطلح البحث للمستخدم. ويدخل مهاجم سلسلة تعيد كتابة الاستعلام لاستخراج جدول كامل.",
      ),
      question: l("What is the attack and the fix?", "ما الهجوم وما الحل؟"),
      options: [
        l("XSS; add output encoding", "XSS؛ أضف ترميز المخرجات"),
        l("SQL injection; use parameterised queries so the input is bound as data", "حقن SQL؛ استخدم استعلامات مُعامَلة ليُربط المدخل كبيانات"),
        l("CSRF; add tokens", "CSRF؛ أضف رموزًا"),
        l("IDOR; check permissions", "IDOR؛ افحص الصلاحيات"),
      ],
      answer: 1,
      why: l("Concatenating input into SQL is injection; parameterisation binds the input as data so it cannot change the query.", "لصق المدخل في SQL هو حقن؛ والتعميل يربط المدخل كبيانات فلا يمكنه تغيير الاستعلام."),
    },
    {
      scenario: l(
        "A comment system displays user posts without encoding, and a malicious comment runs a script in every visitor's browser, stealing session cookies.",
        "يعرض نظام تعليق منشورات المستخدمين دون ترميز، وينفذ تعليق خبيث سكربتًا في متصفح كل زائر، يسرق ملفات ارتباط الجلسة.",
      ),
      question: l("What is the attack and the primary defence?", "ما الهجوم وما الدفاع الأساسي؟"),
      options: [
        l("SQL injection; parameterised queries", "حقن SQL؛ استعلامات مُعامَلة"),
        l("Stored XSS; output encoding and Content-Security-Policy", "XSS مخزَّن؛ ترميز المخرجات وContent-Security-Policy"),
        l("CSRF; anti-CSRF tokens", "CSRF؛ رموز مكافحة CSRF"),
        l("IDOR; server-side authorisation", "IDOR؛ التفويض على الخادم"),
      ],
      answer: 1,
      why: l("Unencoded stored data that runs as script is stored XSS; encoding and CSP prevent it.", "البيانات المخزّنة غير المرمّزة التي تُشغّل كسكريبت هي XSS مخزَّن؛ والترميز وCSP يمنعانه."),
    },
    {
      scenario: l(
        "A money-transfer page trusts the browser's cookie without checking the request came from the real form. An attacker's page forces a silent transfer.",
        "يثق صفحة تحويل المال بملف ارتباط المتصفح دون التحقق من أن الطلب جاء من النموذج الحقيقي. وتفرض صفحة مهاجم تحويلًا صامتًا.",
      ),
      question: l("What is the attack and the defence?", "ما الهجوم وما الدفاع؟"),
      options: [
        l("CSRF; anti-CSRF tokens and SameSite cookies", "CSRF؛ رموز مكافحة CSRF وملفات SameSite"),
        l("XSS; output encoding", "XSS؛ ترميز المخرجات"),
        l("SQL injection; parameterisation", "حقن SQL؛ التعميل"),
        l("IDOR; access checks", "IDOR؛ فحوص الوصول"),
      ],
      answer: 0,
      why: l("Forcing a logged-in browser to send an unwanted request is CSRF; tokens and SameSite prevent it.", "إجبار متصفح مسجل الدخول على إرسال طلب غير مرغوب هو CSRF؛ والرموز وSameSite يمنعانه."),
    },
  ],
  practicalChecks: [
    {
      task: l("Explain in one sentence why a parameterised query prevents SQL injection", "اشرح في جملة واحدة سبب منع الاستعلام المُعامَل لحقن SQL"),
      expected: l("It binds the user's input as a plain value alongside the command, so the input cannot alter the query's structure or logic.", "يربط مدخل المستخدم كقيمة عادية مع الأمر، فلا يمكن للمدخل تغيير بنية الاستعلام أو منطقها."),
      hint: l("Think about how the database receives the command and the values.", "فكّر في كيفية تلقي قاعدة البيانات للأمر والقيم."),
    },
    {
      task: l("State the three cookie flags a secure session cookie should set and one thing each prevents", "اذكر الخصائص الثلاث لملف ارتباط جلسة آمن وما يمنعها كل منها"),
      expected: l("Secure (limits to HTTPS), HttpOnly (blocks script access, limiting XSS), SameSite (limits cross-site sending, limiting CSRF).", "Secure (يقيد النقل إلى HTTPS)، وHttpOnly (يمنع وصول السكربتات، محددًا من XSS)، وSameSite (يقيد الإرسال عبر المواقع، محددًا من CSRF)."),
    },
  ],
  homework: {
    title: l("Homework 11 — Security review of a web app you use", "الواجب 11 — مراجعة أمنية لتطبيق ويب تستخدمه"),
    tasks: [
      l("Pick a site you use daily and check for HTTPS, a valid certificate and a visible logout button.", "اختر موقعًا تستخدمه يوميًا وافحص وجود HTTPS وشهادة صالحة وزر تسجيل خروج ظاهر."),
      l("Using your browser's developer tools (Application tab), list its cookies and note which have Secure, HttpOnly and SameSite flags.", "باستخدام أدوات المطور (تبويب Application) اذكر ملفات ارتباطه ولاحظ أيها يحمل Secure وHttpOnly وSameSite."),
      l("Read the OWASP Top 10 page and choose the three risks most relevant to that kind of site; justify each in one sentence.", "اقرأ صفحة OWASP Top 10 واختر ثلاثة مخاطر الأكثر صلة بذلك النوع من المواقع وبرر كلًا بجملة."),
      l("Write a five-item secure-coding checklist for a small team building a customer portal.", "اكتب قائمة من خمسة بنود للبرمجة الآمنة لفريق صغير يبني بوابة عملاء."),
    ],
    deliverable: l(
      "A one-page review with cookie table, three prioritised risks and the checklist.",
      "مراجعة من صفحة واحدة بجدول ملفات الارتباط وثلاثة مخاطر مرتبة والقائمة.",
    ),
    criteria: [
      l("Correct checks for HTTPS, certificate and logout", "فحوصات صحيحة لـ HTTPS والشهادة وتسجيل الخروج"),
      l("Accurate cookie flag review", "مراجعة دقيقة لخصائص ملفات الارتباط"),
      l("Three relevant, justified OWASP risks", "ثلاثة مخاطر OWASP ذات صلة ومبررة"),
      l("Practical five-item secure-coding checklist", "قائمة تحقق عملية من خمسة بنود للبرمجة الآمنة"),
    ],
    challenge: l(
      "Optional challenge: explain how you would detect an IDOR vulnerability in a web app you are authorized to test, and how you would fix it without disrupting users.",
      "مهمة تحدٍ اختيارية: اشرح كيف ستكتشف ثغرة IDOR في تطبيق ويب مصرح لك باختباره، وكيف إصلاحها دون تعطيل المستخدمين.",
    ),
  },
  refs: [
    { title: "OWASP Top 10", org: "OWASP", url: "https://owasp.org/www-project-top-ten/" },
    { title: "SQL Injection Prevention Cheat Sheet", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
    { title: "Cross Site Scripting Prevention Cheat Sheet", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
    { title: "Web Security Academy", org: "PortSwigger", url: "https://portswigger.net/web-security" },
    { title: "Secure Software Development Framework (SP 800-218)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/218/final" },
  ],
  terms: [
    { term: l("Untrusted input", "المدخل غير الموثوق"), def: l("Data from the client that the server cannot trust.", "بيانات من العميل لا يمكن للخادم الوثوق بها."), example: l("Form fields, cookies and URL parameters.", "حقول النماذج وملفات الارتباط ومعاملات العناوين.") },
    { term: l("OWASP Top 10", "OWASP Top 10"), def: l("Community list of the most critical web application risks.", "قائمة مجتمعية لأخطر مخاطر تطبيقات الويب.") },
    { term: l("Injection", "الحقن"), def: l("Sending untrusted data to an interpreter as part of a command.", "إرسال بيانات غير موثوقة إلى مفسر كجزء من أمر.") },
    { term: l("SQL injection", "حقن SQL"), def: l("Attack where input alters the structure of a database query.", "هجوم تغيّر فيه المدخلات بنية استعلام قاعدة البيانات.") },
    { term: l("Parameterised query", "الاستعلام المُعامَل"), def: l("A query where user values are passed separately from the SQL command.", "استعلام تُمرَّر فيه قيم المستخدم منفصلة عن أمر SQL.") },
    { term: l("XSS", "النصوص عبر المواقع"), def: l("Cross-site scripting: injecting script that runs in other users' browsers.", "حقن سكربت يعمل في متصفحات مستخدمين آخرين.") },
    { term: l("Stored XSS", "XSS مخزَّن"), def: l("XSS where malicious script is saved and shown to many visitors.", "XSS يُخزَّن فيه سكربت خبيث ويُعرض لكثير من الزائرين.") },
    { term: l("CSRF", "تزوير الطلبات عبر المواقع"), def: l("Forcing a logged-in user's browser to send an unwanted request.", "إجبار متصفح مستخدم مسجل الدخول على إرسال طلب غير مرغوب.") },
    { term: l("IDOR", "مرجع كائن مباشر غير آمن"), def: l("Accessing others' data by changing an identifier because ownership is not checked.", "الوصول لبيانات الآخرين بتغيير معرّف لعدم فحص الملكية.") },
    { term: l("Broken access control", "التحكم المكسور بالوصول"), def: l("The server fails to check that a user is allowed to access a resource.", "يفشل الخادم في التحقق من أهلية المستخدم للوصول إلى مورد.") },
    { term: l("Output encoding", "ترميز المخرجات"), def: l("Rendering data as text so it cannot execute as code.", "تصوير البيانات كنص فلا يمكنها التنفيذ كشيفرة.") },
    { term: l("Content-Security-Policy (CSP)", "سياسة أمان المحتوى"), def: l("HTTP header restricting which scripts and resources a page may load.", "ترويسة HTTP تقيّد السكربتات والموارد التي يجوز للصفحة تحميلها.") },
    { term: l("HttpOnly", "HttpOnly"), def: l("Cookie flag preventing client-side scripts from reading the cookie.", "خاصية لملف الارتباط تمنع سكربتات العميل من قراءته.") },
    { term: l("SameSite", "SameSite"), def: l("Cookie flag restricting which sites may send the cookie.", "خاصية لملف الارتباط تقيد المواقع التي يجوز لها إرساله.") },
    { term: l("Secure flag", "خاصية Secure"), def: l("Cookie flag limiting the cookie to HTTPS connections.", "خاصية لملف الارتباط تقصره على اتصالات HTTPS.") },
    { term: l("Session hijacking", "اختطاف الجلسة"), def: l("Taking over a user's session to act as them.", "الاستيلاء على جلسة مستخدم للتصرف بصفته.") },
    { term: l("WAF", "جدار تطبيقات الويب"), def: l("A filter that inspects web traffic; an extra layer, not a primary defence.", "مرشّح يفحص حركة الويب؛ طبقة إضافية لا دفاعًا أساسيًا.") },
    { term: l("SDLC", "دورة حياة تطوير البرمجيات"), def: l("The phases of planning, building, testing, deploying and maintaining software.", "مراحل تخطيط البرمجيات وبنائها واختبارها ونشرها وصيانتها.") },
    { term: l("Allow-list validation", "التحقق بقوائم السماح"), def: l("Checking input against a list of accepted types, lengths and formats.", "فحص المدخل مقابل قائمة الأنواع والأطوال والصيغ المقبولة.") },
    { term: l("Least privilege (DB)", "أقل صلاحية (قاعدة البيانات)"), def: l("Running the app's database account with only the rights it needs.", "تشغيل حساب قاعدة بيانات التطبيق بالحقوق التي يحتاجها فقط.") },
    { term: l("ORM", "أداة إدارة التكامل العودي"), def: l("Object-relational mapping tool that can build queries safely when used correctly.", "أداة ربط كائن-علاقة يمكنها بناء استعلامات آمنة عند استخدامها بوضع صحيح.") },
    { term: l("HSTS", "فرض أمان النقل عبر HTTPS"), def: l("Header telling browsers to use HTTPS and remember it.", "ترويسة تخبر المتصفحات باستخدام HTTPS وتتذكر ذلك.") },
    { term: l("Threat modeling", "نمذجة التهديدات"), def: l("Thinking through what could go wrong in a design before coding.", "التفكير في ما قد يسوء في التصميم قبل كتابة الشيفرة.") },
    { term: l("Software Bill of Materials (SBOM)", "قائمة مكونات البرمجية"), def: l("Inventory of a software's components and dependencies.", "حصر لمكوّنات البرمجية واعتمادياتها.") },
    { term: l("Static / dynamic scanning", "الفحص الساكن / الديناميكي"), def: l("Automated analysis of code (static) or running app (dynamic) for flaws.", "تحليل آلي للشيفرة (ساكن) أو التطبيق الجاري (ديناميكي) لاكتشاف الضعف."), },
  ],
};
